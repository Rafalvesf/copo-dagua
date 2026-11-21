((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,A={czh:function czh(){},czg:function czg(){},
dfn(){return new A.E7(null)},
E7:function E7(d){this.a=d},
aH6:function aH6(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
c5Y:function c5Y(d){this.a=d},
c5X:function c5X(){},
c5V:function c5V(){},
c5U:function c5U(d){this.a=d},
c5L:function c5L(d){this.a=d},
c5T:function c5T(d,e,f){this.a=d
this.b=e
this.c=f},
c5M:function c5M(d){this.a=d},
c5N:function c5N(){},
c5O:function c5O(){},
c5P:function c5P(){},
c5W:function c5W(){},
c5Q:function c5Q(d){this.a=d},
c5K:function c5K(d){this.a=d},
c5R:function c5R(d){this.a=d},
c5J:function c5J(d){this.a=d},
c5S:function c5S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,F,E,I,K
J=c[1]
B=c[0]
C=c[2]
G=c[143]
H=c[201]
A=a.updateHolder(c[33],A)
D=c[322]
F=c[76]
E=c[220]
I=c[112]
K=c[223]
A.E7.prototype={
S(){return new A.aH6(new B.aH(C.am,$.ae()))}}
A.aH6.prototype={
al(){this.aI()
this.w.ak(0,new A.c5Y(this))},
m(){var x=this.w
x.a0$=$.ae()
x.W$=0
this.aa()},
u(d){var x=this,w=null,v=x.gU().L($.cOy(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return B.cP(w,C.kK,new B.bJ(C.aB,w,C.aG,C.A,B.a([B.bE(!1,new B.l_(B.a([B.aM(w,B.av(d,C.bb,y.x).w.r.b,w),D.bJg,new B.T(C.hD,new G.F0(u,"Pesquisar conversas",!0,w),w),E.a82],s),B.fN(v,new A.c5T(x,t.toLowerCase(),d),new A.c5U(x),new A.c5V(),!1,!0,!1),w),w,C.Z,!1),D.bMY],s),w),!0,w)}}
var z=a.updateTypes([])
A.czh.prototype={
$1(d){return this.aEI(d)},
aEI(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.BH(d)
t=$.R().b
t===$&&B.b()
s=J
x=3
return B.d(t.P("conversations").aG(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").V("partner_id",u).du(0,"last_message_at",!1),$async$$1)
case 3:v=s.d0(f,new A.czg(),y.g).bz(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1374}
A.czg.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="wedding_id",l="last_message_at"
y.y.a(d)
x=J.a5(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=B.M(v?n:J.h(w,"partner_name_1"))
t=B.M(v?n:J.h(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
v=B.a2(x.h(d,"id"))
r=B.a2(x.h(d,m))
q=B.a2(x.h(d,"partner_id"))
B.a2(x.h(d,m))
p=B.cL4(w,n)
o=B.M(x.h(d,"last_message"))
return new B.hL(v,s,p,r,q,o,x.h(d,l)==null?n:B.dc(B.a2(x.h(d,l))),0)},
$S:1375}
A.c5Y.prototype={
$0(){return this.a.q(new A.c5X())},
$S:0}
A.c5X.prototype={
$0(){},
$S:0}
A.c5V.prototype={
$0(){return C.bp},
$S:36}
A.c5U.prototype={
$2(d,e){return new B.j6("N\xe3o foi poss\xedvel carregar.",new A.c5L(this.a),null)},
$S:45}
A.c5L.prototype={
$0(){return this.a.gU().aj($.cOy())},
$S:0}
A.c5T.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.dp(a4,new A.c5M(a3))
x=B.W(a3,a3.$ti.i("y.E"))}a3=J.a5(a4)
if(a3.gY(a4))return D.aCA
w=J.a5(x)
if(w.gY(x))return B.bR(B.i('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.dj(a4,new A.c5N()).gA(0)
a3=a1.a
if(a3.x){w=w.dj(x,new A.c5O())
u=B.W(w,w.$ti.i("y.E"))}else u=x
t=B.B(y.e,y.p)
for(w=J.ay(u);w.t();){s=w.gE(w)
J.bM(t.bJ(0,F.d0O(s.w),new A.c5P()),s)}r=new A.c5W()
w=y.u
a3=B.a([new B.T(K.C3,B.S(B.a([r.$3("Todas",!a3.x,new A.c5Q(a3)),C.ax,r.$4$count("N\xe3o lidas",a3.x,new A.c5R(a3),v)],w),C.x,C.k,C.p,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(E.VF[n],a2,a2,a2,a2,C.bO,a2,a2,a2)
l=new B.b_(22,22)
k=B.a([],w)
j=0
for(;;){i=t.h(0,n)
i.toString
if(!(j<J.aU(i)))break
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
f=F.cxS(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new F.a2L(new B.dV(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,E.Vf,new A.c5S(p,t,n,j),j===J.aU(a0)-1,!1,a2));++j}C.e.p(a3,B.a([new B.T(E.MJ,m,a2),new B.T(C.cb,B.C(a2,B.E(k,C.x,C.k,C.p,0,C.w),C.aO,a2,a2,new B.L(C.u,a2,a2,new B.bY(l,l,l,l),C.aI,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.d5(a3,a2,H.ua,a2,a2,!1,C.a2,!1)},
$S:1376}
A.c5M.prototype={
$1(d){return C.f.n(d.b.toLowerCase(),this.a)},
$S:170}
A.c5N.prototype={
$1(d){return d.x>0},
$S:170}
A.c5O.prototype={
$1(d){return d.x>0},
$S:170}
A.c5P.prototype={
$0(){return B.a([],y.B)},
$S:1377}
A.c5W.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.aj:C.u,t=B.X(19),s=y.u,r=B.a([B.i(d,v,v,v,v,B.aF(v,v,e?C.u:C.z,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.u:C.z
w=B.X(10)
C.e.p(r,B.a([C.bt,B.C(C.O,B.i(B.q(g),v,v,v,v,B.aF(v,v,e?$.aj:C.u,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.t9,new B.L(x,v,v,w,v,v,C.y),v,20,v,C.l5,v,v,v)],s))}return B.aZ(B.C(v,B.S(r,C.x,C.k,C.U,0,v,v),C.r,v,v,new B.L(u,v,v,t,v,v,C.y),v,38,v,C.dg,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1378}
A.c5Q.prototype={
$0(){var x=this.a
return x.q(new A.c5K(x))},
$S:0}
A.c5K.prototype={
$0(){return this.a.x=!1},
$S:0}
A.c5R.prototype={
$0(){var x=this.a
return x.q(new A.c5J(x))},
$S:0}
A.c5J.prototype={
$0(){return this.a.x=!0},
$S:0}
A.c5S.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.ar(w.a).aW("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.czh,A.czg,A.c5T,A.c5M,A.c5N,A.c5O,A.c5W])
w(A.E7,B.dw)
w(A.aH6,B.dq)
x(B.bS,[A.c5Y,A.c5X,A.c5V,A.c5L,A.c5P,A.c5Q,A.c5K,A.c5R,A.c5J,A.c5S])
w(A.c5U,B.cS)})()
B.bu(b.typeUniverse,JSON.parse('{"E7":{"I":[],"e":[],"f":[]},"aH6":{"a1":["E7"]}}'))
var y=(function rtii(){var x=B.w
return{m:x("aB<t<hL>>"),g:x("hL"),B:x("r<hL>"),u:x("r<e>"),p:x("t<hL>"),y:x("a3<c,@>"),x:x("dy"),e:x("v"),A:x("a3<c,@>?"),q:x("K?")}})();(function constants(){D.aCA=new I.a1z(C.Fc,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,null,null,180,!1,null)
D.bJg=new B.kE("Mensagens",null,!1,null,20,!1,null)
D.bJv=new B.Ki(C.a1_,null)
D.bMY=new B.fT(0,null,0,0,null,null,D.bJv,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dIG","cOy",()=>B.eE(new A.czh(),null,!1,null,null,y.p))})()};
(a=>{a["21h2VGx9PkGPSeRMcgTBwdCUOUg="]=a.current})($__dart_deferred_initializers__);