((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={dN:function dN(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aj9(d){return C.dxO(d)},
dxO(d){var x=0,w=A.n(y.E),v,u=2,t=[],s,r,q
var $async$aj9=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
s=$.T().b
s===$&&A.b()
x=7
return A.d(d.$1(s.P("partner_profiles").aw(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug)), reference_note")),$async$aj9)
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
return A.d(d.$1(s.P("partner_profiles").aw(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug))")),$async$aj9)
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
return A.m($async$aj9,w)},
d4D(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="pricing_mode",g="quote_only",f=J.a7(a0),e=y.d,d=e.a(f.h(a0,"partner_profile_categories"))
if(d==null)d=B.aj
x=y.x
w=A.a([],x)
v=A.a([],x)
for(x=J.at(d),u=y.y,t=y.A;x.t();){s=t.a(J.h(u.a(x.gE(x)),"partner_categories"))
if(s==null)continue
r=J.a7(s)
w.push(A.a_(r.h(s,"label_pt")))
v.push(A.a_(r.h(s,"slug")))}q=e.a(f.h(a0,"partner_service_packages"))
if(q==null)q=B.aj
p=J.o(f.h(a0,h),"packages")&&J.dP(q)?J.d3(q,new C.cyz(),y.b).iR(0,new C.cyA()):i
e=e.a(f.h(a0,"service_areas"))
o=e==null?i:J.bo(e,y.w)
if(o==null)o=B.a9
e=A.e6(f.h(a0,"nationwide"))
if(e===!0)n="\xc2mbito nacional"
else{e=J.a7(o)
n=e.gY(o)?"Localiza\xe7\xe3o a combinar":e.a3(o,", ")}e=A.a_(f.h(a0,"id"))
x=A.a_(f.h(a0,"business_name"))
if(J.o(f.h(a0,h),g)){u=A.aL(f.h(a0,"average_quote_price"))
if(u==null)u=i}else u=i
t=A.J(f.h(a0,"description"))
if(t==null)t=""
r=A.J(f.h(a0,"cover_photo_url"))
m=A.e6(f.h(a0,"featured"))
l=A.J(f.h(a0,"created_at"))
l=A.ei(l==null?"":l)
k=A.aL(f.h(a0,"years_experience"))
k=k==null?i:B.k.F(k)
j=A.aL(f.h(a0,"max_travel_distance_km"))
j=j==null?i:B.k.F(j)
if(J.o(f.h(a0,h),g)){f=A.J(f.h(a0,"reference_note"))
f=f==null?i:B.f.D(f)}else f=i
return new C.dN(e,x,w,v,n,p,u,t,r,m===!0,l,k,j,f)},
cyz:function cyz(){},
cyA:function cyA(){},
a1F:function a1F(d,e,f){this.c=d
this.d=e
this.a=f},
MV:function MV(d,e){this.c=d
this.a=e},
d5X(d,e,f){var x,w,v,u
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
C=a.updateHolder(c[162],C)
D=c[357]
C.dN.prototype={
gar(d){return this.b}}
C.a1F.prototype={
u(d){var x,w,v,u,t,s,r=null,q=this.c
if(q.length===0||this.d.length===0)return B.ap
x=A.dY(q,0,A.eP(3,"count",y.e),A.a8(q).c).by(0)
q=x.length
w=y.u
v=A.a([],w)
for(u=0;u<x.length;++u){t=new A.bb(B.u,2,B.ae,-1)
s=x[u]
v.push(new A.f7(u*17,r,r,r,r,r,A.B(r,new A.cA(s.b,20,s.c,!1,!0,r),B.r,r,r,new A.O(r,r,new A.dW(t,t,t,t),r,r,r,B.az),r,r,r,r,r,r,r),r))}return A.Q(A.a([A.aO(new A.bK(B.aC,r,B.aH,B.z,v,r),24,24+(q-1)*17),B.al,A.a6(A.i(this.d,1,B.a_,r,r,B.dM,r,r,r),1)],w),B.x,B.j,B.p,0,r,r)}}
C.MV.prototype={
u(d){return A.kN(new A.S(D.at_,A.b3(B.hS,$.ap,"Verificado",null,18),null),null,"Parceiro verificado")}}
var z=a.updateTypes(["dN(a5<c,@>)"])
C.cyz.prototype={
$1(d){return A.dp(J.h(y.y.a(d),"price"))},
$S:455}
C.cyA.prototype={
$2(d,e){return d<e?d:e},
$S:62};(function installTearOffs(){var x=a._static_1
x(C,"dCj","d4D",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.dN,A.L)
x(C.cyz,A.bx)
x(C.cyA,A.cS)
w(A.K,[C.a1F,C.MV])})()
A.bw(b.typeUniverse,JSON.parse('{"a1F":{"K":[],"e":[],"f":[]},"MV":{"K":[],"e":[],"f":[]}}'))
var y={x:A.x("t<c>"),u:A.x("t<e>"),E:A.x("r<a5<c,@>>"),y:A.x("a5<c,@>"),w:A.x("c"),b:A.x("P"),e:A.x("v"),d:A.x("r<@>?"),A:A.x("a5<c,@>?")};(function constants(){D.at_=new A.a0(2,0,0,0)
D.Os=new A.be(B.iu,20,B.u,null,null,null)})()};
(a=>{a["0dW78u5ClgXFD7VTbMggMnF8kWM="]=a.current})($__dart_deferred_initializers__);