((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={dn:function dn(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
a_k(d){return C.dIH(d)},
dIH(d){var x=0,w=A.n(y.E),v,u=2,t=[],s,r,q
var $async$a_k=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
s=$.Q().b
s===$&&A.b()
x=7
return A.d(d.$1(s.R("partner_profiles").al(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug)), reference_note")),$async$a_k)
case 7:s=f
v=s
x=1
break
u=2
x=6
break
case 4:u=3
q=t.pop()
x=A.a9(q) instanceof A.cR?8:10
break
case 8:s=$.Q().b
s===$&&A.b()
x=11
return A.d(d.$1(s.R("partner_profiles").al(0,"id, business_name, description, cover_photo_url, service_areas, nationwide, pricing_mode, average_quote_price, featured, created_at, years_experience, max_travel_distance_km, partner_service_packages(price, is_starting_price), partner_profile_categories(partner_categories(label_pt, slug))")),$async$a_k)
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
return A.m($async$a_k,w)},
d_o(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="pricing_mode",g="quote_only",f=J.a6(a0),e=y.d,d=e.a(f.h(a0,"partner_profile_categories"))
if(d==null)d=B.ah
x=y.x
w=A.a([],x)
v=A.a([],x)
for(x=J.ao(d),u=y.y,t=y.A;x.q();){s=t.a(J.i(u.a(x.gE(x)),"partner_categories"))
if(s==null)continue
r=J.a6(s)
w.push(A.a0(r.h(s,"label_pt")))
v.push(A.a0(r.h(s,"slug")))}q=e.a(f.h(a0,"partner_service_packages"))
if(q==null)q=B.ah
p=J.o(f.h(a0,h),"packages")&&J.dL(q)?J.dk(q,new C.cGa(),y.b).hA(0,new C.cGb()):i
e=e.a(f.h(a0,"service_areas"))
o=e==null?i:J.bi(e,y.w)
if(o==null)o=B.a9
e=A.dS(f.h(a0,"nationwide"))
if(e===!0)n="\xc2mbito nacional"
else{e=J.a6(o)
n=e.gY(o)?"Localiza\xe7\xe3o a combinar":e.a1(o,", ")}e=A.a0(f.h(a0,"id"))
x=A.a0(f.h(a0,"business_name"))
if(J.o(f.h(a0,h),g)){u=A.aF(f.h(a0,"average_quote_price"))
if(u==null)u=i}else u=i
t=A.x(f.h(a0,"description"))
if(t==null)t=""
r=A.x(f.h(a0,"cover_photo_url"))
m=A.dS(f.h(a0,"featured"))
l=A.x(f.h(a0,"created_at"))
l=A.d0(l==null?"":l)
k=A.aF(f.h(a0,"years_experience"))
k=k==null?i:B.k.F(k)
j=A.aF(f.h(a0,"max_travel_distance_km"))
j=j==null?i:B.k.F(j)
if(J.o(f.h(a0,h),g)){f=A.x(f.h(a0,"reference_note"))
f=f==null?i:B.f.C(f)}else f=i
return new C.dn(e,x,w,v,n,p,u,t,r,m===!0,l,k,j,f)},
cGa:function cGa(){},
cGb:function cGb(){},
a3j:function a3j(d,e,f){this.c=d
this.d=e
this.a=f},
NP:function NP(d,e){this.c=d
this.a=e},
dfO(d,e,f){var x,w,v,u
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
D=c[395]
C.dn.prototype={
gaq(d){return this.b}}
C.a3j.prototype={
t(d){var x,w,v,u,t,s,r=null,q=this.c
if(q.length===0||this.d.length===0)return B.aq
x=A.dp(q,0,A.eu(3,"count",y.e),A.a8(q).c).by(0)
q=x.length
w=y.u
v=A.a([],w)
for(u=0;u<x.length;++u){t=new A.bd(B.t,2,B.af,-1)
s=x[u]
v.push(new A.eU(u*17,r,r,r,r,r,A.w(r,new A.cg(s.b,20,s.c,!1,!0,r),B.r,r,r,new A.O(r,r,new A.dT(t,t,t,t),r,r,r,B.am),r,r,r,r,r,r,r),r))}return A.M(A.a([A.aG(new A.bB(B.av,r,B.aC,B.y,v,r),24,24+(q-1)*17),B.aa,A.a4(A.h(this.d,1,B.a1,r,r,B.dO,r,r),1)],w),B.u,B.h,B.l,0,r)}}
C.NP.prototype={
t(d){return A.kE(new A.S(D.atO,A.b4(B.hE,$.ay,"Verificado",null,18),null),null,"Parceiro verificado")}}
var z=a.updateTypes(["dn(a5<c,@>)"])
C.cGa.prototype={
$1(d){return A.ds(J.i(y.y.a(d),"price"))},
$S:531}
C.cGb.prototype={
$2(d,e){return d<e?d:e},
$S:43};(function installTearOffs(){var x=a._static_1
x(C,"dNu","d_o",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.dn,A.L)
x(C.cGa,A.bv)
x(C.cGb,A.cM)
w(A.H,[C.a3j,C.NP])})()
A.bq(b.typeUniverse,JSON.parse('{"a3j":{"H":[],"e":[],"f":[]},"NP":{"H":[],"e":[],"f":[]}}'))
var y={x:A.B("r<c>"),u:A.B("r<e>"),E:A.B("t<a5<c,@>>"),y:A.B("a5<c,@>"),w:A.B("c"),b:A.B("T"),e:A.B("v"),d:A.B("t<@>?"),A:A.B("a5<c,@>?")};(function constants(){D.atO=new A.a3(2,0,0,0)
D.Pf=new A.b8(B.ib,20,B.t,null,null,null)})()};
(a=>{a["/P/+8OMmnHuJBJV6A1O6PIqSs0Y="]=a.current})($__dart_deferred_initializers__);