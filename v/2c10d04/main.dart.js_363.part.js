((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,A={cEt:function cEt(){},cEs:function cEs(){},
dl0(){return new A.EA(null)},
EA:function EA(d){this.a=d},
aIe:function aIe(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
caA:function caA(d){this.a=d},
caz:function caz(){},
cax:function cax(){},
caw:function caw(d){this.a=d},
can:function can(d){this.a=d},
cav:function cav(d,e,f){this.a=d
this.b=e
this.c=f},
cao:function cao(d){this.a=d},
cap:function cap(){},
caq:function caq(){},
car:function car(){},
cay:function cay(){},
cas:function cas(d){this.a=d},
cam:function cam(d){this.a=d},
cat:function cat(d){this.a=d},
cal:function cal(d){this.a=d},
cau:function cau(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I
J=c[1]
B=c[0]
C=c[2]
G=c[143]
H=c[193]
A=a.updateHolder(c[34],A)
D=c[313]
E=c[77]
F=c[214]
I=c[217]
A.EA.prototype={
R(){return new A.aIe(new B.aI(C.ao,$.ad()))}}
A.aIe.prototype={
am(){this.aJ()
this.w.al(0,new A.caA(this))},
m(){var x=this.w
x.Z$=$.ad()
x.X$=0
this.a8()},
v(d){var x=this,w=null,v=x.gT().F($.cU3(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return B.cP(w,C.kY,new B.bK(C.aC,w,C.aH,C.z,B.a([B.bH(!1,new B.m5(B.a([B.aP(w,B.aw(d,C.b9,y.x).w.r.b,w),D.bJN,new B.R(C.fI,new G.Fq(u,"Pesquisar conversas",!0,w),w),F.a8p],s),B.h3(v,new A.cav(x,t.toLowerCase(),d),new A.caw(x),new A.cax(),!1,!0,!1),w),w,C.a0,!1),D.bNw],s),w),!0,w)}}
var z=a.updateTypes([])
A.cEt.prototype={
$1(d){return this.aFq(d)},
aFq(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.C1(d)
t=$.T().b
t===$&&B.b()
s=J
x=3
return B.d(t.P("conversations").aw(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").W("partner_id",u).dk(0,"last_message_at",!1),$async$$1)
case 3:v=s.d3(f,new A.cEs(),y.g).by(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1417}
A.cEs.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="wedding_id",l="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=B.J(v?n:J.h(w,"partner_name_1"))
t=B.J(v?n:J.h(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
v=B.a_(x.h(d,"id"))
r=B.a_(x.h(d,m))
q=B.a_(x.h(d,"partner_id"))
B.a_(x.h(d,m))
p=B.cQw(w,n)
o=B.J(x.h(d,"last_message"))
return new B.hQ(v,s,p,r,q,o,x.h(d,l)==null?n:B.d8(B.a_(x.h(d,l))),0)},
$S:1418}
A.caA.prototype={
$0(){return this.a.q(new A.caz())},
$S:0}
A.caz.prototype={
$0(){},
$S:0}
A.cax.prototype={
$0(){return C.br},
$S:38}
A.caw.prototype={
$2(d,e){return new B.jb("N\xe3o foi poss\xedvel carregar.",new A.can(this.a),null)},
$S:45}
A.can.prototype={
$0(){return this.a.gT().ah($.cU3())},
$S:0}
A.cav.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.d7(a4,new A.cao(a3))
x=B.V(a3,a3.$ti.i("y.E"))}a3=J.a7(a4)
if(a3.gY(a4))return D.aCM
w=J.a7(x)
if(w.gY(x))return B.bT(B.i('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.cH(a4,new A.cap()).gA(0)
a3=a1.a
if(a3.x){w=w.cH(x,new A.caq())
u=B.V(w,w.$ti.i("y.E"))}else u=x
t=B.A(y.e,y.p)
for(w=J.at(u);w.t();){s=w.gE(w)
J.by(t.bM(0,E.d6o(s.w),new A.car()),s)}r=new A.cay()
w=y.u
a3=B.a([new B.R(I.Ci,B.Q(B.a([r.$3("Todas",!a3.x,new A.cas(a3)),C.aj,r.$4$count("N\xe3o lidas",a3.x,new A.cat(a3),v)],w),C.x,C.j,C.o,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(F.VT[n],a2,a2,a2,a2,C.bC,a2,a2,a2)
l=new B.b5(22,22)
k=B.a([],w)
j=0
for(;;){i=t.h(0,n)
i.toString
if(!(j<J.aS(i)))break
i=t.h(0,n)
i.toString
i=J.h(i,j)
h=t.h(0,n)
h.toString
h=J.h(h,j)
g=t.h(0,n)
g.toString
g=J.h(g,j)
f=t.h(0,n)
f.toString
f=E.cD0(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new E.a3u(new B.cA(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,F.Vt,new A.cau(p,t,n,j),j===J.aS(a0)-1,!1,a2));++j}C.e.p(a3,B.a([new B.R(F.MW,m,a2),new B.R(C.bN,B.C(a2,B.B(k,C.x,C.j,C.o,0,C.v),C.b6,a2,a2,new B.O(C.t,a2,a2,new B.cc(l,l,l,l),C.b0,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.d5(a3,a2,H.n6,a2,a2,!1,C.a3,!1)},
$S:1419}
A.cao.prototype={
$1(d){return C.f.n(d.b.toLowerCase(),this.a)},
$S:183}
A.cap.prototype={
$1(d){return d.x>0},
$S:183}
A.caq.prototype={
$1(d){return d.x>0},
$S:183}
A.car.prototype={
$0(){return B.a([],y.B)},
$S:1420}
A.cay.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ap:C.t,t=B.a2(19),s=y.u,r=B.a([B.i(d,v,v,v,v,B.aH(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=B.a2(10)
C.e.p(r,B.a([C.bt,B.C(C.K,B.i(B.q(g),v,v,v,v,B.aH(v,v,e?$.ap:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.pe,new B.O(x,v,v,w,v,v,C.y),v,20,v,C.lm,v,v,v)],s))}return B.aT(B.C(v,B.Q(r,C.x,C.j,C.P,0,v,v),C.r,v,v,new B.O(u,v,v,t,v,v,C.y),v,38,v,C.dA,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1421}
A.cas.prototype={
$0(){var x=this.a
return x.q(new A.cam(x))},
$S:0}
A.cam.prototype={
$0(){return this.a.x=!1},
$S:0}
A.cat.prototype={
$0(){var x=this.a
return x.q(new A.cal(x))},
$S:0}
A.cal.prototype={
$0(){return this.a.x=!0},
$S:0}
A.cau.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.aj(w.a).az("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.cEt,A.cEs,A.cav,A.cao,A.cap,A.caq,A.cay])
w(A.EA,B.dD)
w(A.aIe,B.dv)
x(B.bR,[A.caA,A.caz,A.cax,A.can,A.car,A.cas,A.cam,A.cat,A.cal,A.cau])
w(A.caw,B.cS)})()
B.bx(b.typeUniverse,JSON.parse('{"EA":{"I":[],"e":[],"f":[]},"aIe":{"a1":["EA"]}}'))
var y=(function rtii(){var x=B.x
return{m:x("ax<r<hQ>>"),g:x("hQ"),B:x("t<hQ>"),u:x("t<e>"),p:x("r<hQ>"),y:x("a4<c,@>"),x:x("dx"),e:x("v"),A:x("a4<c,@>?"),q:x("L?")}})();(function constants(){D.aCM=new E.a2m(C.Fq,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bJN=new B.l9("Mensagens",null,!1,null,20,!1,null)
D.bK4=new B.KF(C.a1d,null)
D.bNw=new B.f8(0,null,0,0,null,null,D.bK4,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOI","cU3",()=>B.ey(new A.cEt(),null,!1,null,null,y.p))})()};
(a=>{a["lDeoLgbxbpgUz4DNe9BR2O4Jwcg="]=a.current})($__dart_deferred_initializers__);