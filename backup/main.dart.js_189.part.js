((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={dp:function dp(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.ay=q},
a_i(d){return C.dIu(d)},
dIu(d){var x=0,w=A.n(y.E),v,u=2,t=[],s,r,q
var $async$a_i=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
s=$.Q().b
s===$&&A.b()
x=7
return A.d(d.$1(s.R("partner_profiles").al(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug)), reference_note")),$async$a_i)
case 7:s=f
v=s
x=1
break
u=2
x=6
break
case 4:u=3
q=t.pop()
x=A.a9(q) instanceof A.cQ?8:10
break
case 8:s=$.Q().b
s===$&&A.b()
x=11
return A.d(d.$1(s.R("partner_profiles").al(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug))")),$async$a_i)
case 11:v=f
x=1
break
x=9
break
case 10:throw q
case 9:x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$a_i,w)},
d_c(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="pricing_mode",g="quote_only",f=J.a6(a0),e=y.d,d=e.a(f.h(a0,"partner_profile_categories"))
if(d==null)d=B.aj
x=y.x
w=A.a([],x)
v=A.a([],x)
for(x=J.an(d),u=y.y,t=y.A;x.q();){s=t.a(J.i(u.a(x.gE(x)),"partner_categories"))
if(s==null)continue
r=J.a6(s)
w.push(A.a0(r.h(s,"label_pt")))
v.push(A.a0(r.h(s,"slug")))}q=e.a(f.h(a0,"partner_service_packages"))
if(q==null)q=B.aj
p=J.o(f.h(a0,h),"packages")&&J.dM(q)?J.dm(q,new C.cG1(),y.b).hA(0,new C.cG2()):i
e=e.a(f.h(a0,"service_areas"))
o=e==null?i:J.bi(e,y.w)
if(o==null)o=B.a8
e=A.dS(f.h(a0,"nationwide"))
if(e===!0)n="\xc2mbito nacional"
else{e=J.a6(o)
n=e.gY(o)?"Localiza\xe7\xe3o a combinar":e.a1(o,", ")}e=A.a0(f.h(a0,"id"))
x=A.a0(f.h(a0,"business_name"))
if(J.o(f.h(a0,h),g)){u=A.aF(f.h(a0,"average_quote_price"))
if(u==null)u=i}else u=i
t=A.y(f.h(a0,"description"))
if(t==null)t=""
r=A.y(f.h(a0,"cover_photo_url"))
m=A.dS(f.h(a0,"featured"))
l=A.y(f.h(a0,"created_at"))
l=A.d_(l==null?"":l)
k=A.aF(f.h(a0,"years_experience"))
k=k==null?i:B.k.F(k)
j=A.aF(f.h(a0,"max_travel_distance_km"))
j=j==null?i:B.k.F(j)
if(J.o(f.h(a0,h),g)){f=A.y(f.h(a0,"reference_note"))
f=f==null?i:B.f.C(f)}else f=i
return new C.dp(e,x,w,v,n,p,u,t,r,m===!0,l,k,j,f)},
cG1:function cG1(){},
cG2:function cG2(){},
a3h:function a3h(d,e,f){this.c=d
this.d=e
this.a=f},
NQ:function NQ(d,e){this.c=d
this.a=e},
dfC(d,e,f){var x,w,v,u
if(d.length===0)return""
x=B.e.gJ(B.e.gJ(d).b.split(" "))
w=e-1
v=f?"Seguida":"Seguido"
if(w<=0)return v+" por "+x+"."
u=w===1?"mais 1":"outros "+w
return v+" por "+x+", e por "+u+"."}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[178],C)
D=c[396]
C.dp.prototype={
gar(d){return this.b}}
C.a3h.prototype={
t(d){var x,w,v,u,t,s,r=null,q=this.c
if(q.length===0||this.d.length===0)return B.ag
x=A.dq(q,0,A.eu(3,"count",y.e),A.a8(q).c).bx(0)
q=x.length
w=y.u
v=A.a([],w)
for(u=0;u<x.length;++u){t=new A.b9(B.t,2,B.ah,-1)
s=x[u]
v.push(new A.eU(u*17,r,r,r,r,r,A.w(r,new A.cg(s.b,20,s.c,!1,!0,r),B.r,r,r,new A.O(r,r,new A.dT(t,t,t,t),r,r,r,B.ar),r,r,r,r,r,r,r),r))}return A.N(A.a([A.aG(new A.by(B.aw,r,B.aC,B.x,v,r),24,24+(q-1)*17),B.ab,A.a5(A.h(this.d,1,B.a1,r,r,B.dO,r,r),1)],w),B.u,B.h,B.l,0,r)}}
C.NQ.prototype={
t(d){return A.kF(new A.S(D.atN,A.b4(B.hC,$.ay,"Verificado",null,18),null),null,"Parceiro verificado")}}
var z=a.updateTypes(["dp(a4<c,@>)"])
C.cG1.prototype={
$1(d){return A.dt(J.i(y.y.a(d),"price"))},
$S:531}
C.cG2.prototype={
$2(d,e){return d<e?d:e},
$S:43};(function installTearOffs(){var x=a._static_1
x(C,"dNh","d_c",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.dp,A.L)
x(C.cG1,A.bv)
x(C.cG2,A.cM)
w(A.H,[C.a3h,C.NQ])})()
A.bq(b.typeUniverse,JSON.parse('{"a3h":{"H":[],"e":[],"f":[]},"NQ":{"H":[],"e":[],"f":[]}}'))
var y={x:A.B("r<c>"),u:A.B("r<e>"),E:A.B("t<a4<c,@>>"),y:A.B("a4<c,@>"),w:A.B("c"),b:A.B("T"),e:A.B("v"),d:A.B("t<@>?"),A:A.B("a4<c,@>?")};(function constants(){D.atN=new A.a3(2,0,0,0)
D.P9=new A.ba(B.ia,20,B.t,null,null,null)})()};
(a=>{a["7qggQ/Hbf8AM/9mNYsXeA/8ZzZs="]=a.current})($__dart_deferred_initializers__);