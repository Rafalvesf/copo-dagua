((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={dS:function dS(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
akU(d){return C.dHr(d)},
dHr(d){var x=0,w=A.n(y.E),v,u=2,t=[],s,r,q
var $async$akU=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
s=$.P().b
s===$&&A.b()
x=7
return A.d(d.$1(s.P("partner_profiles").ai(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug)), reference_note")),$async$akU)
case 7:s=f
v=s
x=1
break
u=2
x=6
break
case 4:u=3
q=t.pop()
x=A.a9(q) instanceof A.cU?8:10
break
case 8:s=$.P().b
s===$&&A.b()
x=11
return A.d(d.$1(s.P("partner_profiles").ai(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug))")),$async$akU)
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
return A.m($async$akU,w)},
ddo(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="pricing_mode",g="quote_only",f=J.a7(a0),e=y.d,d=e.a(f.h(a0,"partner_profile_categories"))
if(d==null)d=B.ak
x=y.x
w=A.a([],x)
v=A.a([],x)
for(x=J.ap(d),u=y.y,t=y.A;x.t();){s=t.a(J.i(u.a(x.gE(x)),"partner_categories"))
if(s==null)continue
r=J.a7(s)
w.push(A.a_(r.h(s,"label_pt")))
v.push(A.a_(r.h(s,"slug")))}q=e.a(f.h(a0,"partner_service_packages"))
if(q==null)q=B.ak
p=J.o(f.h(a0,h),"packages")&&J.dK(q)?J.da(q,new C.cG7(),y.b).hz(0,new C.cG8()):i
e=e.a(f.h(a0,"service_areas"))
o=e==null?i:J.bh(e,y.w)
if(o==null)o=B.a6
e=A.dW(f.h(a0,"nationwide"))
if(e===!0)n="\xc2mbito nacional"
else{e=J.a7(o)
n=e.gZ(o)?"Localiza\xe7\xe3o a combinar":e.a0(o,", ")}e=A.a_(f.h(a0,"id"))
x=A.a_(f.h(a0,"business_name"))
if(J.o(f.h(a0,h),g)){u=A.aF(f.h(a0,"average_quote_price"))
if(u==null)u=i}else u=i
t=A.C(f.h(a0,"description"))
if(t==null)t=""
r=A.C(f.h(a0,"cover_photo_url"))
m=A.dW(f.h(a0,"featured"))
l=A.C(f.h(a0,"created_at"))
l=A.d4(l==null?"":l)
k=A.aF(f.h(a0,"years_experience"))
k=k==null?i:B.k.F(k)
j=A.aF(f.h(a0,"max_travel_distance_km"))
j=j==null?i:B.k.F(j)
if(J.o(f.h(a0,h),g)){f=A.C(f.h(a0,"reference_note"))
f=f==null?i:B.f.B(f)}else f=i
return new C.dS(e,x,w,v,n,p,u,t,r,m===!0,l,k,j,f)},
cG7:function cG7(){},
cG8:function cG8(){},
a2U:function a2U(d,e,f){this.c=d
this.d=e
this.a=f},
ND:function ND(d,e){this.c=d
this.a=e},
deL(d,e,f){var x,w,v,u
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
C=a.updateHolder(c[173],C)
D=c[395]
C.dS.prototype={
gar(d){return this.b}}
C.a2U.prototype={
u(d){var x,w,v,u,t,s,r=null,q=this.c
if(q.length===0||this.d.length===0)return B.ap
x=A.dC(q,0,A.ew(3,"count",y.e),A.a8(q).c).by(0)
q=x.length
w=y.u
v=A.a([],w)
for(u=0;u<x.length;++u){t=new A.bf(B.t,2,B.ai,-1)
s=x[u]
v.push(new A.eF(u*17,r,r,r,r,r,A.B(r,new A.ci(s.b,20,s.c,!1,!0,r),B.r,r,r,new A.K(r,r,new A.dO(t,t,t,t),r,r,r,B.as),r,r,r,r,r,r,r),r))}return A.O(A.a([A.aH(new A.bB(B.ax,r,B.aD,B.y,v,r),24,24+(q-1)*17),B.ad,A.a6(A.h(this.d,1,B.a1,r,r,B.ep,r,r,r),1)],w),B.v,B.h,B.l,0,r)}}
C.ND.prototype={
u(d){return A.kY(new A.T(D.atW,A.b5(B.i6,$.au,"Verificado",null,18),null),null,"Parceiro verificado")}}
var z=a.updateTypes(["dS(a4<c,@>)"])
C.cG7.prototype={
$1(d){return A.du(J.i(y.y.a(d),"price"))},
$S:290}
C.cG8.prototype={
$2(d,e){return d<e?d:e},
$S:44};(function installTearOffs(){var x=a._static_1
x(C,"dMc","ddo",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.dS,A.J)
x(C.cG7,A.bw)
x(C.cG8,A.cK)
w(A.M,[C.a2U,C.ND])})()
A.bt(b.typeUniverse,JSON.parse('{"a2U":{"M":[],"e":[],"f":[]},"ND":{"M":[],"e":[],"f":[]}}'))
var y={x:A.w("r<c>"),u:A.w("r<e>"),E:A.w("t<a4<c,@>>"),y:A.w("a4<c,@>"),w:A.w("c"),b:A.w("S"),e:A.w("v"),d:A.w("t<@>?"),A:A.w("a4<c,@>?")};(function constants(){D.atW=new A.a3(2,0,0,0)
D.Pc=new A.b7(B.iN,20,B.t,null,null,null)})()};
(a=>{a["Gn5Z+MhpjsDHv36Hih48qNs8Fo8="]=a.current})($__dart_deferred_initializers__);