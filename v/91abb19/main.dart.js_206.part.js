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
akx(d){return C.dDo(d)},
dDo(d){var x=0,w=A.n(y.E),v,u=2,t=[],s,r,q
var $async$akx=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
s=$.T().b
s===$&&A.b()
x=7
return A.d(d.$1(s.R("partner_profiles").az(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug)), reference_note")),$async$akx)
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
return A.d(d.$1(s.R("partner_profiles").az(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug))")),$async$akx)
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
return A.m($async$akx,w)},
d9z(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="pricing_mode",g="quote_only",f=J.a7(a0),e=y.d,d=e.a(f.h(a0,"partner_profile_categories"))
if(d==null)d=B.al
x=y.x
w=A.a([],x)
v=A.a([],x)
for(x=J.aq(d),u=y.y,t=y.A;x.t();){s=t.a(J.i(u.a(x.gE(x)),"partner_categories"))
if(s==null)continue
r=J.a7(s)
w.push(A.a2(r.h(s,"label_pt")))
v.push(A.a2(r.h(s,"slug")))}q=e.a(f.h(a0,"partner_service_packages"))
if(q==null)q=B.al
p=J.o(f.h(a0,h),"packages")&&J.dQ(q)?J.d4(q,new C.cCX(),y.b).hC(0,new C.cCY()):i
e=e.a(f.h(a0,"service_areas"))
o=e==null?i:J.bl(e,y.w)
if(o==null)o=B.a9
e=A.dW(f.h(a0,"nationwide"))
if(e===!0)n="\xc2mbito nacional"
else{e=J.a7(o)
n=e.gY(o)?"Localiza\xe7\xe3o a combinar":e.a2(o,", ")}e=A.a2(f.h(a0,"id"))
x=A.a2(f.h(a0,"business_name"))
if(J.o(f.h(a0,h),g)){u=A.aK(f.h(a0,"average_quote_price"))
if(u==null)u=i}else u=i
t=A.E(f.h(a0,"description"))
if(t==null)t=""
r=A.E(f.h(a0,"cover_photo_url"))
m=A.dW(f.h(a0,"featured"))
l=A.E(f.h(a0,"created_at"))
l=A.dN(l==null?"":l)
k=A.aK(f.h(a0,"years_experience"))
k=k==null?i:B.k.F(k)
j=A.aK(f.h(a0,"max_travel_distance_km"))
j=j==null?i:B.k.F(j)
if(J.o(f.h(a0,h),g)){f=A.E(f.h(a0,"reference_note"))
f=f==null?i:B.f.D(f)}else f=i
return new C.dS(e,x,w,v,n,p,u,t,r,m===!0,l,k,j,f)},
cCX:function cCX(){},
cCY:function cCY(){},
a2w:function a2w(d,e,f){this.c=d
this.d=e
this.a=f},
Nu:function Nu(d,e){this.c=d
this.a=e},
daT(d,e,f){var x,w,v,u
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
C=a.updateHolder(c[172],C)
D=c[387]
C.dS.prototype={
gaq(d){return this.b}}
C.a2w.prototype={
u(d){var x,w,v,u,t,s,r=null,q=this.c
if(q.length===0||this.d.length===0)return B.ar
x=A.e3(q,0,A.eT(3,"count",y.e),A.a8(q).c).by(0)
q=x.length
w=y.u
v=A.a([],w)
for(u=0;u<x.length;++u){t=new A.bc(B.t,2,B.ag,-1)
s=x[u]
v.push(new A.eZ(u*17,r,r,r,r,r,A.A(r,new A.cw(s.b,20,s.c,!1,!0,r),B.r,r,r,new A.M(r,r,new A.dR(t,t,t,t),r,r,r,B.ax),r,r,r,r,r,r,r),r))}return A.P(A.a([A.aI(new A.bB(B.aA,r,B.aG,B.z,v,r),24,24+(q-1)*17),B.ai,A.a5(A.h(this.d,1,B.a2,r,r,B.dV,r,r,r),1)],w),B.w,B.i,B.m,0,r,r)}}
C.Nu.prototype={
u(d){return A.kT(new A.Q(D.auK,A.b2(B.i1,$.ar,"Verificado",null,18),null),null,"Parceiro verificado")}}
var z=a.updateTypes(["dS(a4<c,@>)"])
C.cCX.prototype={
$1(d){return A.du(J.i(y.y.a(d),"price"))},
$S:506}
C.cCY.prototype={
$2(d,e){return d<e?d:e},
$S:41};(function installTearOffs(){var x=a._static_1
x(C,"dI6","d9z",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.dS,A.J)
x(C.cCX,A.bx)
x(C.cCY,A.cQ)
w(A.L,[C.a2w,C.Nu])})()
A.bq(b.typeUniverse,JSON.parse('{"a2w":{"L":[],"e":[],"f":[]},"Nu":{"L":[],"e":[],"f":[]}}'))
var y={x:A.w("r<c>"),u:A.w("r<e>"),E:A.w("t<a4<c,@>>"),y:A.w("a4<c,@>"),w:A.w("c"),b:A.w("R"),e:A.w("v"),d:A.w("t<@>?"),A:A.w("a4<c,@>?")};(function constants(){D.auK=new A.a0(2,0,0,0)
D.Py=new A.b9(B.iF,20,B.t,null,null,null)})()};
(a=>{a["of0HwNe88LU6SY3DyA1IPNFpdyE="]=a.current})($__dart_deferred_initializers__);