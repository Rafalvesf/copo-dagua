((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,A={cEw:function cEw(){},cEv:function cEv(){},
dl5(){return new A.EC(null)},
EC:function EC(d){this.a=d},
aIe:function aIe(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
caD:function caD(d){this.a=d},
caC:function caC(){},
caA:function caA(){},
caz:function caz(d){this.a=d},
caq:function caq(d){this.a=d},
cay:function cay(d,e,f){this.a=d
this.b=e
this.c=f},
car:function car(d){this.a=d},
cas:function cas(){},
cat:function cat(){},
cau:function cau(){},
caB:function caB(){},
cav:function cav(d){this.a=d},
cap:function cap(d){this.a=d},
caw:function caw(d){this.a=d},
cao:function cao(d){this.a=d},
cax:function cax(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I
J=c[1]
B=c[0]
C=c[2]
G=c[144]
H=c[194]
A=a.updateHolder(c[34],A)
D=c[313]
E=c[78]
F=c[214]
I=c[217]
A.EC.prototype={
R(){return new A.aIe(new B.aI(C.ao,$.ad()))}}
A.aIe.prototype={
am(){this.aJ()
this.w.al(0,new A.caD(this))},
m(){var x=this.w
x.Z$=$.ad()
x.X$=0
this.a8()},
u(d){var x=this,w=null,v=x.gT().G($.cU6(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return B.cP(w,C.kZ,new B.bK(C.aC,w,C.aH,C.z,B.a([B.bH(!1,new B.m6(B.a([B.aO(w,B.aw(d,C.b7,y.x).w.r.b,w),D.bJR,new B.S(C.fH,new G.Fs(u,"Pesquisar conversas",!0,w),w),F.a8p],s),B.h3(v,new A.cay(x,t.toLowerCase(),d),new A.caz(x),new A.caA(),!1,!0,!1),w),w,C.a0,!1),D.bNA],s),w),!0,w)}}
var z=a.updateTypes([])
A.cEw.prototype={
$1(d){return this.aFo(d)},
aFo(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.C3(d)
t=$.T().b
t===$&&B.b()
s=J
x=3
return B.d(t.P("conversations").aw(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").W("partner_id",u).dk(0,"last_message_at",!1),$async$$1)
case 3:v=s.d3(f,new A.cEv(),y.g).by(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1417}
A.cEv.prototype={
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
p=B.cQz(w,n)
o=B.J(x.h(d,"last_message"))
return new B.hQ(v,s,p,r,q,o,x.h(d,l)==null?n:B.d8(B.a_(x.h(d,l))),0)},
$S:1418}
A.caD.prototype={
$0(){return this.a.q(new A.caC())},
$S:0}
A.caC.prototype={
$0(){},
$S:0}
A.caA.prototype={
$0(){return C.br},
$S:38}
A.caz.prototype={
$2(d,e){return new B.jb("N\xe3o foi poss\xedvel carregar.",new A.caq(this.a),null)},
$S:45}
A.caq.prototype={
$0(){return this.a.gT().ah($.cU6())},
$S:0}
A.cay.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.d7(a4,new A.car(a3))
x=B.W(a3,a3.$ti.i("y.E"))}a3=J.a7(a4)
if(a3.gY(a4))return D.aCO
w=J.a7(x)
if(w.gY(x))return B.bT(B.i('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.cH(a4,new A.cas()).gA(0)
a3=a1.a
if(a3.x){w=w.cH(x,new A.cat())
u=B.W(w,w.$ti.i("y.E"))}else u=x
t=B.A(y.e,y.p)
for(w=J.at(u);w.t();){s=w.gE(w)
J.by(t.bM(0,E.d6s(s.w),new A.cau()),s)}r=new A.caB()
w=y.u
a3=B.a([new B.S(I.Ci,B.Q(B.a([r.$3("Todas",!a3.x,new A.cav(a3)),C.al,r.$4$count("N\xe3o lidas",a3.x,new A.caw(a3),v)],w),C.x,C.j,C.p,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(F.VT[n],a2,a2,a2,a2,C.bB,a2,a2,a2)
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
f=E.cD3(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new E.a3v(new B.cA(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,F.Vt,new A.cax(p,t,n,j),j===J.aS(a0)-1,!1,a2));++j}C.e.p(a3,B.a([new B.S(F.MW,m,a2),new B.S(C.bN,B.B(a2,B.C(k,C.x,C.j,C.p,0,C.v),C.b4,a2,a2,new B.O(C.u,a2,a2,new B.ce(l,l,l,l),C.bb,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.d5(a3,a2,H.n4,a2,a2,!1,C.a3,!1)},
$S:1419}
A.car.prototype={
$1(d){return C.f.n(d.b.toLowerCase(),this.a)},
$S:183}
A.cas.prototype={
$1(d){return d.x>0},
$S:183}
A.cat.prototype={
$1(d){return d.x>0},
$S:183}
A.cau.prototype={
$0(){return B.a([],y.B)},
$S:1420}
A.caB.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ap:C.u,t=B.a2(19),s=y.u,r=B.a([B.i(d,v,v,v,v,B.aH(v,v,e?C.u:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.u:C.A
w=B.a2(10)
C.e.p(r,B.a([C.bt,B.B(C.K,B.i(B.q(g),v,v,v,v,B.aH(v,v,e?$.ap:C.u,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.pe,new B.O(x,v,v,w,v,v,C.y),v,20,v,C.lk,v,v,v)],s))}return B.aT(B.B(v,B.Q(r,C.x,C.j,C.P,0,v,v),C.r,v,v,new B.O(u,v,v,t,v,v,C.y),v,38,v,C.dA,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1421}
A.cav.prototype={
$0(){var x=this.a
return x.q(new A.cap(x))},
$S:0}
A.cap.prototype={
$0(){return this.a.x=!1},
$S:0}
A.caw.prototype={
$0(){var x=this.a
return x.q(new A.cao(x))},
$S:0}
A.cao.prototype={
$0(){return this.a.x=!0},
$S:0}
A.cax.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.aj(w.a).az("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cEw,A.cEv,A.cay,A.car,A.cas,A.cat,A.caB])
w(A.EC,B.dD)
w(A.aIe,B.dv)
x(B.bR,[A.caD,A.caC,A.caA,A.caq,A.cau,A.cav,A.cap,A.caw,A.cao,A.cax])
w(A.caz,B.cS)})()
B.bw(b.typeUniverse,JSON.parse('{"EC":{"I":[],"e":[],"f":[]},"aIe":{"a1":["EC"]}}'))
var y=(function rtii(){var x=B.x
return{m:x("ax<r<hQ>>"),g:x("hQ"),B:x("t<hQ>"),u:x("t<e>"),p:x("r<hQ>"),y:x("a5<c,@>"),x:x("dx"),e:x("v"),A:x("a5<c,@>?"),q:x("L?")}})();(function constants(){D.aCO=new E.a2n(C.Fq,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bJR=new B.la("Mensagens",null,!1,null,20,!1,null)
D.bK8=new B.KG(C.a1d,null)
D.bNA=new B.f7(0,null,0,0,null,null,D.bK8,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dON","cU6",()=>B.ez(new A.cEw(),null,!1,null,null,y.p))})()};
(a=>{a["2K6GbEkQXSxyQOi21bzT6FNFJPk="]=a.current})($__dart_deferred_initializers__);