((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={dq:function dq(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ZP(d){return C.dH3(d)},
dH3(d){var x=0,w=A.n(y.E),v,u=2,t=[],s,r,q
var $async$ZP=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
s=$.Q().b
s===$&&A.b()
x=7
return A.d(d.$1(s.P("partner_profiles").ai(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug)), reference_note")),$async$ZP)
case 7:s=f
v=s
x=1
break
u=2
x=6
break
case 4:u=3
q=t.pop()
x=A.a9(q) instanceof A.cT?8:10
break
case 8:s=$.Q().b
s===$&&A.b()
x=11
return A.d(d.$1(s.P("partner_profiles").ai(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug))")),$async$ZP)
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
return A.m($async$ZP,w)},
cZ7(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="pricing_mode",g="quote_only",f=J.a7(a0),e=y.d,d=e.a(f.h(a0,"partner_profile_categories"))
if(d==null)d=B.ai
x=y.x
w=A.a([],x)
v=A.a([],x)
for(x=J.ao(d),u=y.y,t=y.A;x.q();){s=t.a(J.i(u.a(x.gE(x)),"partner_categories"))
if(s==null)continue
r=J.a7(s)
w.push(A.Y(r.h(s,"label_pt")))
v.push(A.Y(r.h(s,"slug")))}q=e.a(f.h(a0,"partner_service_packages"))
if(q==null)q=B.ai
p=J.o(f.h(a0,h),"packages")&&J.dK(q)?J.da(q,new C.cFt(),y.b).hx(0,new C.cFu()):i
e=e.a(f.h(a0,"service_areas"))
o=e==null?i:J.be(e,y.w)
if(o==null)o=B.a6
e=A.dV(f.h(a0,"nationwide"))
if(e===!0)n="\xc2mbito nacional"
else{e=J.a7(o)
n=e.gY(o)?"Localiza\xe7\xe3o a combinar":e.a1(o,", ")}e=A.Y(f.h(a0,"id"))
x=A.Y(f.h(a0,"business_name"))
if(J.o(f.h(a0,h),g)){u=A.aD(f.h(a0,"average_quote_price"))
if(u==null)u=i}else u=i
t=A.B(f.h(a0,"description"))
if(t==null)t=""
r=A.B(f.h(a0,"cover_photo_url"))
m=A.dV(f.h(a0,"featured"))
l=A.B(f.h(a0,"created_at"))
l=A.d2(l==null?"":l)
k=A.aD(f.h(a0,"years_experience"))
k=k==null?i:B.k.F(k)
j=A.aD(f.h(a0,"max_travel_distance_km"))
j=j==null?i:B.k.F(j)
if(J.o(f.h(a0,h),g)){f=A.B(f.h(a0,"reference_note"))
f=f==null?i:B.f.B(f)}else f=i
return new C.dq(e,x,w,v,n,p,u,t,r,m===!0,l,k,j,f)},
cFt:function cFt(){},
cFu:function cFu(){},
a2J:function a2J(d,e,f){this.c=d
this.d=e
this.a=f},
Ny:function Ny(d,e){this.c=d
this.a=e},
dei(d,e,f){var x,w,v,u
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
C=a.updateHolder(c[175],C)
D=c[392]
C.dq.prototype={
gap(d){return this.b}}
C.a2J.prototype={
u(d){var x,w,v,u,t,s,r=null,q=this.c
if(q.length===0||this.d.length===0)return B.ao
x=A.dz(q,0,A.et(3,"count",y.e),A.a8(q).c).bx(0)
q=x.length
w=y.u
v=A.a([],w)
for(u=0;u<x.length;++u){t=new A.bg(B.t,2,B.aj,-1)
s=x[u]
v.push(new A.eF(u*17,r,r,r,r,r,A.x(r,new A.cg(s.b,20,s.c,!1,!0,r),B.r,r,r,new A.I(r,r,new A.dM(t,t,t,t),r,r,r,B.ap),r,r,r,r,r,r,r),r))}return A.N(A.a([A.aK(new A.bC(B.aw,r,B.aC,B.y,v,r),24,24+(q-1)*17),B.ab,A.a4(A.h(this.d,1,B.a1,r,r,B.em,r,r),1)],w),B.v,B.h,B.l,0,r)}}
C.Ny.prototype={
u(d){return A.kw(new A.S(D.atF,A.b9(B.i8,$.au,"Verificado",null,18),null),null,"Parceiro verificado")}}
var z=a.updateTypes(["dq(a5<c,@>)"])
C.cFt.prototype={
$1(d){return A.dv(J.i(y.y.a(d),"price"))},
$S:396}
C.cFu.prototype={
$2(d,e){return d<e?d:e},
$S:44};(function installTearOffs(){var x=a._static_1
x(C,"dLQ","cZ7",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.dq,A.L)
x(C.cFt,A.bs)
x(C.cFu,A.cK)
w(A.M,[C.a2J,C.Ny])})()
A.bq(b.typeUniverse,JSON.parse('{"a2J":{"M":[],"e":[],"f":[]},"Ny":{"M":[],"e":[],"f":[]}}'))
var y={x:A.y("r<c>"),u:A.y("r<e>"),E:A.y("t<a5<c,@>>"),y:A.y("a5<c,@>"),w:A.y("c"),b:A.y("T"),e:A.y("v"),d:A.y("t<@>?"),A:A.y("a5<c,@>?")};(function constants(){D.atF=new A.a3(2,0,0,0)
D.OW=new A.b8(B.iM,20,B.t,null,null,null)})()};
(a=>{a["X6ltslo87iX7nLbNsjZzFTIJ+8w="]=a.current})($__dart_deferred_initializers__);