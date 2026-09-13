import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Renamed from `middleware.ts` in Next.js 16 — same mechanism, see
// node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md.
//
// This is an *optimistic* check only (reads the session cookie, refreshes
// it): it keeps a logged-out user from ever seeing the admin shell flash
// before redirecting. It is NOT the authorization boundary — that's
// Postgres RLS (`is_admin()`) plus lib/dal.ts's database-backed check on
// every protected Server Component. See docs/architecture/RLS_POLICY.md
// and the Next.js authentication guide's "Optimistic checks with Proxy".
export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLoginRoute = request.nextUrl.pathname === "/login";

  if (!user && !isLoginRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (user && isLoginRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/partners";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
