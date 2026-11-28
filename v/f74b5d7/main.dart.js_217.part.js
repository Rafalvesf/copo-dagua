((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={dH:function dH(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
a_1(d){return C.dIi(d)},
dIi(d){var x=0,w=A.n(y.E),v,u=2,t=[],s,r,q
var $async$a_1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
s=$.P().b
s===$&&A.b()
x=7
return A.d(d.$1(s.P("partner_profiles").ai(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug)), reference_note")),$async$a_1)
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
return A.d(d.$1(s.P("partner_profiles").ai(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug))")),$async$a_1)
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
return A.m($async$a_1,w)},
d_l(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="pricing_mode",g="quote_only",f=J.a7(a0),e=y.d,d=e.a(f.h(a0,"partner_profile_categories"))
if(d==null)d=B.ai
x=y.x
w=A.a([],x)
v=A.a([],x)
for(x=J.ao(d),u=y.y,t=y.A;x.t();){s=t.a(J.i(u.a(x.gE(x)),"partner_categories"))
if(s==null)continue
r=J.a7(s)
w.push(A.a_(r.h(s,"label_pt")))
v.push(A.a_(r.h(s,"slug")))}q=e.a(f.h(a0,"partner_service_packages"))
if(q==null)q=B.ai
p=J.o(f.h(a0,h),"packages")&&J.dM(q)?J.dc(q,new C.cGL(),y.b).hz(0,new C.cGM()):i
e=e.a(f.h(a0,"service_areas"))
o=e==null?i:J.bf(e,y.w)
if(o==null)o=B.a6
e=A.dX(f.h(a0,"nationwide"))
if(e===!0)n="\xc2mbito nacional"
else{e=J.a7(o)
n=e.gZ(o)?"Localiza\xe7\xe3o a combinar":e.a0(o,", ")}e=A.a_(f.h(a0,"id"))
x=A.a_(f.h(a0,"business_name"))
if(J.o(f.h(a0,h),g)){u=A.aE(f.h(a0,"average_quote_price"))
if(u==null)u=i}else u=i
t=A.C(f.h(a0,"description"))
if(t==null)t=""
r=A.C(f.h(a0,"cover_photo_url"))
m=A.dX(f.h(a0,"featured"))
l=A.C(f.h(a0,"created_at"))
l=A.d4(l==null?"":l)
k=A.aE(f.h(a0,"years_experience"))
k=k==null?i:B.k.F(k)
j=A.aE(f.h(a0,"max_travel_distance_km"))
j=j==null?i:B.k.F(j)
if(J.o(f.h(a0,h),g)){f=A.C(f.h(a0,"reference_note"))
f=f==null?i:B.f.B(f)}else f=i
return new C.dH(e,x,w,v,n,p,u,t,r,m===!0,l,k,j,f)},
cGL:function cGL(){},
cGM:function cGM(){},
a2Z:function a2Z(d,e,f){this.c=d
this.d=e
this.a=f},
NF:function NF(d,e){this.c=d
this.a=e},
dfy(d,e,f){var x,w,v,u
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
D=c[394]
C.dH.prototype={
gar(d){return this.b}}
C.a2Z.prototype={
u(d){var x,w,v,u,t,s,r=null,q=this.c
if(q.length===0||this.d.length===0)return B.ap
x=A.dy(q,0,A.eu(3,"count",y.e),A.a8(q).c).by(0)
q=x.length
w=y.u
v=A.a([],w)
for(u=0;u<x.length;++u){t=new A.bh(B.t,2,B.aj,-1)
s=x[u]
v.push(new A.eG(u*17,r,r,r,r,r,A.y(r,new A.cj(s.b,20,s.c,!1,!0,r),B.r,r,r,new A.I(r,r,new A.dN(t,t,t,t),r,r,r,B.aq),r,r,r,r,r,r,r),r))}return A.O(A.a([A.aH(new A.bC(B.ax,r,B.aD,B.y,v,r),24,24+(q-1)*17),B.ac,A.a4(A.h(this.d,1,B.a1,r,r,B.ep,r,r,r),1)],w),B.v,B.h,B.l,0,r)}}
C.NF.prototype={
u(d){return A.kw(new A.S(D.au7,A.b5(B.i7,$.au,"Verificado",null,18),null),null,"Parceiro verificado")}}
var z=a.updateTypes(["dH(a5<c,@>)"])
C.cGL.prototype={
$1(d){return A.du(J.i(y.y.a(d),"price"))},
$S:397}
C.cGM.prototype={
$2(d,e){return d<e?d:e},
$S:43};(function installTearOffs(){var x=a._static_1
x(C,"dN4","d_l",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.dH,A.K)
x(C.cGL,A.bx)
x(C.cGM,A.cL)
w(A.M,[C.a2Z,C.NF])})()
A.bu(b.typeUniverse,JSON.parse('{"a2Z":{"M":[],"e":[],"f":[]},"NF":{"M":[],"e":[],"f":[]}}'))
var y={x:A.x("r<c>"),u:A.x("r<e>"),E:A.x("t<a5<c,@>>"),y:A.x("a5<c,@>"),w:A.x("c"),b:A.x("T"),e:A.x("v"),d:A.x("t<@>?"),A:A.x("a5<c,@>?")};(function constants(){D.au7=new A.a3(2,0,0,0)
D.Pi=new A.b8(B.iN,20,B.t,null,null,null)})()};
(a=>{a["7KK52XhxEHPVfN3EfclMsVaC6AE="]=a.current})($__dart_deferred_initializers__);