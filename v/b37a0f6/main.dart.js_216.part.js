((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={dV:function dV(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
alo(d){return C.dI0(d)},
dI0(d){var x=0,w=A.n(y.E),v,u=2,t=[],s,r,q
var $async$alo=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
s=$.Q().b
s===$&&A.b()
x=7
return A.d(d.$1(s.P("partner_profiles").ak(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug)), reference_note")),$async$alo)
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
case 8:s=$.Q().b
s===$&&A.b()
x=11
return A.d(d.$1(s.P("partner_profiles").ak(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug))")),$async$alo)
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
return A.m($async$alo,w)},
de2(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="pricing_mode",g="quote_only",f=J.a7(a0),e=y.d,d=e.a(f.h(a0,"partner_profile_categories"))
if(d==null)d=B.am
x=y.x
w=A.a([],x)
v=A.a([],x)
for(x=J.ap(d),u=y.y,t=y.A;x.t();){s=t.a(J.i(u.a(x.gE(x)),"partner_categories"))
if(s==null)continue
r=J.a7(s)
w.push(A.Z(r.h(s,"label_pt")))
v.push(A.Z(r.h(s,"slug")))}q=e.a(f.h(a0,"partner_service_packages"))
if(q==null)q=B.am
p=J.o(f.h(a0,h),"packages")&&J.dI(q)?J.d9(q,new C.cGU(),y.b).hI(0,new C.cGV()):i
e=e.a(f.h(a0,"service_areas"))
o=e==null?i:J.bi(e,y.w)
if(o==null)o=B.a8
e=A.dY(f.h(a0,"nationwide"))
if(e===!0)n="\xc2mbito nacional"
else{e=J.a7(o)
n=e.gZ(o)?"Localiza\xe7\xe3o a combinar":e.a1(o,", ")}e=A.Z(f.h(a0,"id"))
x=A.Z(f.h(a0,"business_name"))
if(J.o(f.h(a0,h),g)){u=A.aI(f.h(a0,"average_quote_price"))
if(u==null)u=i}else u=i
t=A.C(f.h(a0,"description"))
if(t==null)t=""
r=A.C(f.h(a0,"cover_photo_url"))
m=A.dY(f.h(a0,"featured"))
l=A.C(f.h(a0,"created_at"))
l=A.d5(l==null?"":l)
k=A.aI(f.h(a0,"years_experience"))
k=k==null?i:B.k.F(k)
j=A.aI(f.h(a0,"max_travel_distance_km"))
j=j==null?i:B.k.F(j)
if(J.o(f.h(a0,h),g)){f=A.C(f.h(a0,"reference_note"))
f=f==null?i:B.f.C(f)}else f=i
return new C.dV(e,x,w,v,n,p,u,t,r,m===!0,l,k,j,f)},
cGU:function cGU(){},
cGV:function cGV(){},
a39:function a39(d,e,f){this.c=d
this.d=e
this.a=f},
NM:function NM(d,e){this.c=d
this.a=e},
dfo(d,e,f){var x,w,v,u
if(d.length===0)return""
x=B.e.gL(B.e.gL(d).b.split(" "))
w=e-1
v=f?"Seguida":"Seguido"
if(w<=0)return v+" por "+x+"."
u=w===1?"mais 1":"outros "+w
return v+" por "+x+", e por "+u+"."}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[177],C)
D=c[396]
C.dV.prototype={
gaq(d){return this.b}}
C.a39.prototype={
u(d){var x,w,v,u,t,s,r=null,q=this.c
if(q.length===0||this.d.length===0)return B.as
x=A.dM(q,0,A.eE(3,"count",y.e),A.a8(q).c).by(0)
q=x.length
w=y.u
v=A.a([],w)
for(u=0;u<x.length;++u){t=new A.bc(B.t,2,B.ai,-1)
s=x[u]
v.push(new A.eM(u*17,r,r,r,r,r,A.z(r,new A.cq(s.b,20,s.c,!1,!0,r),B.r,r,r,new A.I(r,r,new A.dN(t,t,t,t),r,r,r,B.aw),r,r,r,r,r,r,r),r))}return A.O(A.a([A.aH(new A.bB(B.ay,r,B.aE,B.z,v,r),24,24+(q-1)*17),B.ag,A.a4(A.h(this.d,1,B.a3,r,r,B.ea,r,r,r),1)],w),B.w,B.h,B.l,0,r,r)}}
C.NM.prototype={
u(d){return A.kY(new A.R(D.auX,A.b6(B.ia,$.au,"Verificado",null,18),null),null,"Parceiro verificado")}}
var z=a.updateTypes(["dV(a5<c,@>)"])
C.cGU.prototype={
$1(d){return A.dt(J.i(y.y.a(d),"price"))},
$S:492}
C.cGV.prototype={
$2(d,e){return d<e?d:e},
$S:42};(function installTearOffs(){var x=a._static_1
x(C,"dMK","de2",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.dV,A.L)
x(C.cGU,A.bw)
x(C.cGV,A.cL)
w(A.J,[C.a39,C.NM])})()
A.bs(b.typeUniverse,JSON.parse('{"a39":{"J":[],"e":[],"f":[]},"NM":{"J":[],"e":[],"f":[]}}'))
var y={x:A.w("r<c>"),u:A.w("r<e>"),E:A.w("t<a5<c,@>>"),y:A.w("a5<c,@>"),w:A.w("c"),b:A.w("S"),e:A.w("v"),d:A.w("t<@>?"),A:A.w("a5<c,@>?")};(function constants(){D.auX=new A.a2(2,0,0,0)
D.PN=new A.b8(B.iR,20,B.t,null,null,null)})()};
(a=>{a["W7+YqbrAFBwsXsbO2qQ9MQHvfrc="]=a.current})($__dart_deferred_initializers__);