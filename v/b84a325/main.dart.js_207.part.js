((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={dQ:function dQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
akn(d){return C.dCq(d)},
dCq(d){var x=0,w=A.n(y.E),v,u=2,t=[],s,r,q
var $async$akn=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
s=$.T().b
s===$&&A.b()
x=7
return A.d(d.$1(s.R("partner_profiles").az(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug)), reference_note")),$async$akn)
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
return A.d(d.$1(s.R("partner_profiles").az(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug))")),$async$akn)
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
return A.m($async$akn,w)},
d8G(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="pricing_mode",g="quote_only",f=J.a7(a0),e=y.d,d=e.a(f.h(a0,"partner_profile_categories"))
if(d==null)d=B.ak
x=y.x
w=A.a([],x)
v=A.a([],x)
for(x=J.ar(d),u=y.y,t=y.A;x.t();){s=t.a(J.h(u.a(x.gE(x)),"partner_categories"))
if(s==null)continue
r=J.a7(s)
w.push(A.a1(r.h(s,"label_pt")))
v.push(A.a1(r.h(s,"slug")))}q=e.a(f.h(a0,"partner_service_packages"))
if(q==null)q=B.ak
p=J.o(f.h(a0,h),"packages")&&J.dO(q)?J.d3(q,new C.cC8(),y.b).hC(0,new C.cC9()):i
e=e.a(f.h(a0,"service_areas"))
o=e==null?i:J.bk(e,y.w)
if(o==null)o=B.a9
e=A.dU(f.h(a0,"nationwide"))
if(e===!0)n="\xc2mbito nacional"
else{e=J.a7(o)
n=e.gY(o)?"Localiza\xe7\xe3o a combinar":e.a3(o,", ")}e=A.a1(f.h(a0,"id"))
x=A.a1(f.h(a0,"business_name"))
if(J.o(f.h(a0,h),g)){u=A.aK(f.h(a0,"average_quote_price"))
if(u==null)u=i}else u=i
t=A.C(f.h(a0,"description"))
if(t==null)t=""
r=A.C(f.h(a0,"cover_photo_url"))
m=A.dU(f.h(a0,"featured"))
l=A.C(f.h(a0,"created_at"))
l=A.dL(l==null?"":l)
k=A.aK(f.h(a0,"years_experience"))
k=k==null?i:B.k.F(k)
j=A.aK(f.h(a0,"max_travel_distance_km"))
j=j==null?i:B.k.F(j)
if(J.o(f.h(a0,h),g)){f=A.C(f.h(a0,"reference_note"))
f=f==null?i:B.f.D(f)}else f=i
return new C.dQ(e,x,w,v,n,p,u,t,r,m===!0,l,k,j,f)},
cC8:function cC8(){},
cC9:function cC9(){},
a2r:function a2r(d,e,f){this.c=d
this.d=e
this.a=f},
Np:function Np(d,e){this.c=d
this.a=e},
da_(d,e,f){var x,w,v,u
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
C=a.updateHolder(c[169],C)
D=c[386]
C.dQ.prototype={
gaq(d){return this.b}}
C.a2r.prototype={
u(d){var x,w,v,u,t,s,r=null,q=this.c
if(q.length===0||this.d.length===0)return B.as
x=A.e3(q,0,A.eT(3,"count",y.e),A.a8(q).c).by(0)
q=x.length
w=y.u
v=A.a([],w)
for(u=0;u<x.length;++u){t=new A.bd(B.t,2,B.ah,-1)
s=x[u]
v.push(new A.f_(u*17,r,r,r,r,r,A.D(r,new A.cF(s.b,20,s.c,!1,!0,r),B.r,r,r,new A.O(r,r,new A.dV(t,t,t,t),r,r,r,B.aA),r,r,r,r,r,r,r),r))}return A.Q(A.a([A.aJ(new A.bB(B.aC,r,B.aH,B.z,v,r),24,24+(q-1)*17),B.ai,A.a6(A.i(this.d,1,B.a0,r,r,B.dR,r,r,r),1)],w),B.w,B.j,B.m,0,r,r)}}
C.Np.prototype={
u(d){return A.kS(new A.R(D.aug,A.b2(B.hY,$.ap,"Verificado",null,18),null),null,"Parceiro verificado")}}
var z=a.updateTypes(["dQ(a4<c,@>)"])
C.cC8.prototype={
$1(d){return A.dt(J.h(y.y.a(d),"price"))},
$S:475}
C.cC9.prototype={
$2(d,e){return d<e?d:e},
$S:41};(function installTearOffs(){var x=a._static_1
x(C,"dH8","d8G",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.dQ,A.I)
x(C.cC8,A.bx)
x(C.cC9,A.cR)
w(A.L,[C.a2r,C.Np])})()
A.bq(b.typeUniverse,JSON.parse('{"a2r":{"L":[],"e":[],"f":[]},"Np":{"L":[],"e":[],"f":[]}}'))
var y={x:A.w("r<c>"),u:A.w("r<e>"),E:A.w("t<a4<c,@>>"),y:A.w("a4<c,@>"),w:A.w("c"),b:A.w("P"),e:A.w("v"),d:A.w("t<@>?"),A:A.w("a4<c,@>?")};(function constants(){D.aug=new A.a2(2,0,0,0)
D.Ph=new A.ba(B.ix,20,B.t,null,null,null)})()};
(a=>{a["FVAlRwYqn2E3eKrmRqhe62cpV9o="]=a.current})($__dart_deferred_initializers__);