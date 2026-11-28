((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={dM:function dM(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aj8(d){return C.dxJ(d)},
dxJ(d){var x=0,w=A.n(y.E),v,u=2,t=[],s,r,q
var $async$aj8=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
s=$.T().b
s===$&&A.b()
x=7
return A.d(d.$1(s.P("partner_profiles").aw(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug)), reference_note")),$async$aj8)
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
case 8:s=$.T().b
s===$&&A.b()
x=11
return A.d(d.$1(s.P("partner_profiles").aw(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug))")),$async$aj8)
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
return A.m($async$aj8,w)},
d4z(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="pricing_mode",g="quote_only",f=J.a7(a0),e=y.d,d=e.a(f.h(a0,"partner_profile_categories"))
if(d==null)d=B.an
x=y.x
w=A.a([],x)
v=A.a([],x)
for(x=J.at(d),u=y.y,t=y.A;x.t();){s=t.a(J.h(u.a(x.gE(x)),"partner_categories"))
if(s==null)continue
r=J.a7(s)
w.push(A.a_(r.h(s,"label_pt")))
v.push(A.a_(r.h(s,"slug")))}q=e.a(f.h(a0,"partner_service_packages"))
if(q==null)q=B.an
p=J.o(f.h(a0,h),"packages")&&J.dO(q)?J.d3(q,new C.cyw(),y.b).iR(0,new C.cyx()):i
e=e.a(f.h(a0,"service_areas"))
o=e==null?i:J.bo(e,y.w)
if(o==null)o=B.a9
e=A.e5(f.h(a0,"nationwide"))
if(e===!0)n="\xc2mbito nacional"
else{e=J.a7(o)
n=e.gY(o)?"Localiza\xe7\xe3o a combinar":e.a3(o,", ")}e=A.a_(f.h(a0,"id"))
x=A.a_(f.h(a0,"business_name"))
if(J.o(f.h(a0,h),g)){u=A.aN(f.h(a0,"average_quote_price"))
if(u==null)u=i}else u=i
t=A.J(f.h(a0,"description"))
if(t==null)t=""
r=A.J(f.h(a0,"cover_photo_url"))
m=A.e5(f.h(a0,"featured"))
l=A.J(f.h(a0,"created_at"))
l=A.eh(l==null?"":l)
k=A.aN(f.h(a0,"years_experience"))
k=k==null?i:B.k.G(k)
j=A.aN(f.h(a0,"max_travel_distance_km"))
j=j==null?i:B.k.G(j)
if(J.o(f.h(a0,h),g)){f=A.J(f.h(a0,"reference_note"))
f=f==null?i:B.f.D(f)}else f=i
return new C.dM(e,x,w,v,n,p,u,t,r,m===!0,l,k,j,f)},
cyw:function cyw(){},
cyx:function cyx(){},
a1D:function a1D(d,e,f){this.c=d
this.d=e
this.a=f},
MU:function MU(d,e){this.c=d
this.a=e},
d5T(d,e,f){var x,w,v,u
if(d.length===0)return""
x=B.e.gM(B.e.gM(d).b.split(" "))
w=e-1
v=f?"Seguida":"Seguido"
if(w<=0)return v+" por "+x+"."
u=w===1?"mais 1":"outros "+w
return v+" por "+x+", e por "+u+"."}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[161],C)
D=c[357]
C.dM.prototype={
gar(d){return this.b}}
C.a1D.prototype={
v(d){var x,w,v,u,t,s,r=null,q=this.c
if(q.length===0||this.d.length===0)return B.ap
x=A.dW(q,0,A.eO(3,"count",y.e),A.a8(q).c).by(0)
q=x.length
w=y.u
v=A.a([],w)
for(u=0;u<x.length;++u){t=new A.bb(B.t,2,B.af,-1)
s=x[u]
v.push(new A.f8(u*17,r,r,r,r,r,A.C(r,new A.cA(s.b,20,s.c,!1,!0,r),B.r,r,r,new A.O(r,r,new A.dZ(t,t,t,t),r,r,r,B.az),r,r,r,r,r,r,r),r))}return A.Q(A.a([A.aP(new A.bK(B.aC,r,B.aH,B.z,v,r),24,24+(q-1)*17),B.aj,A.a6(A.i(this.d,1,B.a_,r,r,B.dM,r,r,r),1)],w),B.x,B.j,B.o,0,r,r)}}
C.MU.prototype={
v(d){return A.kN(new A.R(D.at_,A.b2(B.hS,$.ap,"Verificado",null,18),null),null,"Parceiro verificado")}}
var z=a.updateTypes(["dM(a4<c,@>)"])
C.cyw.prototype={
$1(d){return A.dt(J.h(y.y.a(d),"price"))},
$S:455}
C.cyx.prototype={
$2(d,e){return d<e?d:e},
$S:62};(function installTearOffs(){var x=a._static_1
x(C,"dCe","d4z",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.dM,A.L)
x(C.cyw,A.bw)
x(C.cyx,A.cS)
w(A.M,[C.a1D,C.MU])})()
A.bx(b.typeUniverse,JSON.parse('{"a1D":{"M":[],"e":[],"f":[]},"MU":{"M":[],"e":[],"f":[]}}'))
var y={x:A.x("t<c>"),u:A.x("t<e>"),E:A.x("r<a4<c,@>>"),y:A.x("a4<c,@>"),w:A.x("c"),b:A.x("P"),e:A.x("v"),d:A.x("r<@>?"),A:A.x("a4<c,@>?")};(function constants(){D.at_=new A.a0(2,0,0,0)
D.Os=new A.be(B.iu,20,B.t,null,null,null)})()};
(a=>{a["92bEFu9THc9npVgcxCk+Zz730dk="]=a.current})($__dart_deferred_initializers__);