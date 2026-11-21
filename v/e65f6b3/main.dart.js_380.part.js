((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,I,K,A={cxM:function cxM(){},cxL:function cxL(){},
dcN(){return new A.E0(null)},
E0:function E0(d){this.a=d},
aGJ:function aGJ(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
c5B:function c5B(d){this.a=d},
c5A:function c5A(){},
c5y:function c5y(){},
c5x:function c5x(d){this.a=d},
c5o:function c5o(d){this.a=d},
c5w:function c5w(d,e,f){this.a=d
this.b=e
this.c=f},
c5p:function c5p(d){this.a=d},
c5q:function c5q(){},
c5r:function c5r(){},
c5s:function c5s(){},
c5z:function c5z(){},
c5t:function c5t(d){this.a=d},
c5n:function c5n(d){this.a=d},
c5u:function c5u(d){this.a=d},
c5m:function c5m(d){this.a=d},
c5v:function c5v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,F,E,L
J=c[1]
B=c[0]
C=c[2]
G=c[182]
H=c[146]
I=c[210]
K=c[229]
A=a.updateHolder(c[33],A)
D=c[334]
F=c[76]
E=c[232]
L=c[113]
A.E0.prototype={
P(){return new A.aGJ(new B.aG(C.al,$.ad()))}}
A.aGJ.prototype={
aj(){this.aH()
this.w.ak(0,new A.c5B(this))},
m(){var x=this.w
x.a0$=$.ad()
x.V$=0
this.a8()},
u(d){var x=this,w=null,v=x.gU().L($.cMJ(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return B.cP(w,C.kH,new B.bM(C.aA,w,C.aF,C.z,B.a([B.bA(!1,new B.kW(B.a([B.aM(w,B.au(d,C.bb,y.x).w.r.b,w),D.bJ0,new B.V(C.fx,new H.ES(u,"Pesquisar conversas",!0,w),w),E.a7O],s),B.fP(v,new A.c5w(x,t.toLowerCase(),d),new A.c5x(x),new A.c5y(),!1,!0,!1),w),w,C.Z,!1),D.bMI],s),w),!0,w)}}
var z=a.updateTypes([])
A.cxM.prototype={
$1(d){return this.aEk(d)},
aEk(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.BA(d)
t=$.R().b
t===$&&B.b()
s=J
x=3
return B.d(t.S("conversations").aG(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").X("partner_id",u).du(0,"last_message_at",!1),$async$$1)
case 3:v=s.d0(f,new A.cxL(),y.g).bB(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1348}
A.cxL.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="wedding_id",l="last_message_at"
y.y.a(d)
x=J.a5(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=B.L(v?n:J.h(w,"partner_name_1"))
t=B.L(v?n:J.h(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
v=B.a2(x.h(d,"id"))
r=B.a2(x.h(d,m))
q=B.a2(x.h(d,"partner_id"))
B.a2(x.h(d,m))
p=B.cJr(w,n)
o=B.L(x.h(d,"last_message"))
return new G.hR(v,s,p,r,q,o,x.h(d,l)==null?n:B.dc(B.a2(x.h(d,l))),0)},
$S:1349}
A.c5B.prototype={
$0(){return this.a.q(new A.c5A())},
$S:0}
A.c5A.prototype={
$0(){},
$S:0}
A.c5y.prototype={
$0(){return C.bo},
$S:36}
A.c5x.prototype={
$2(d,e){return new B.j4("N\xe3o foi poss\xedvel carregar.",new A.c5o(this.a),null)},
$S:46}
A.c5o.prototype={
$0(){return this.a.gU().al($.cMJ())},
$S:0}
A.c5w.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.dr(a4,new A.c5p(a3))
x=B.U(a3,a3.$ti.i("y.E"))}a3=J.a5(a4)
if(a3.gY(a4))return D.aCj
w=J.a5(x)
if(w.gY(x))return B.bT(B.i('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.dj(a4,new A.c5q()).gA(0)
a3=a1.a
if(a3.x){w=w.dj(x,new A.c5r())
u=B.U(w,w.$ti.i("y.E"))}else u=x
t=B.A(y.e,y.p)
for(w=J.aA(u);w.t();){s=w.gG(w)
J.bS(t.bI(0,F.cZU(s.w),new A.c5s()),s)}r=new A.c5z()
w=y.u
a3=B.a([new B.V(E.Mi,B.Y(B.a([r.$3("Todas",!a3.x,new A.c5t(a3)),C.ay,r.$4$count("N\xe3o lidas",a3.x,new A.c5u(a3),v)],w),C.x,C.l,C.q,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(E.Vw[n],a2,a2,a2,C.cW,a2,a2,a2)
l=new B.aY(22,22)
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
f=F.cwn(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new F.a2w(new B.dL(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,E.V7,new A.c5v(p,t,n,j),j===J.aU(a0)-1,!1,a2));++j}C.e.p(a3,B.a([new B.V(E.Mw,m,a2),new B.V(C.c9,B.F(a2,B.G(k,C.x,C.l,C.q,0,C.w),C.aN,a2,a2,new B.M(C.u,a2,a2,new B.c_(l,l,l,l),C.aK,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.d2(a3,a2,I.ua,a2,a2,!1,C.a0,!1)},
$S:1350}
A.c5p.prototype={
$1(d){return C.f.n(d.b.toLowerCase(),this.a)},
$S:170}
A.c5q.prototype={
$1(d){return d.x>0},
$S:170}
A.c5r.prototype={
$1(d){return d.x>0},
$S:170}
A.c5s.prototype={
$0(){return B.a([],y.B)},
$S:1351}
A.c5z.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.an:C.u,t=B.X(19),s=y.u,r=B.a([B.i(d,v,v,v,B.aH(v,v,e?C.u:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.u:C.A
w=B.X(10)
C.e.p(r,B.a([C.bp,B.F(C.O,B.i(B.q(g),v,v,v,B.aH(v,v,e?$.an:C.u,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,K.t9,new B.M(x,v,v,w,v,v,C.y),v,20,v,C.l1,v,v,v)],s))}return B.b0(B.F(v,B.Y(r,C.x,C.l,C.U,0,v,v),C.r,v,v,new B.M(u,v,v,t,v,v,C.y),v,38,v,C.dK,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1352}
A.c5t.prototype={
$0(){var x=this.a
return x.q(new A.c5n(x))},
$S:0}
A.c5n.prototype={
$0(){return this.a.x=!1},
$S:0}
A.c5u.prototype={
$0(){var x=this.a
return x.q(new A.c5m(x))},
$S:0}
A.c5m.prototype={
$0(){return this.a.x=!0},
$S:0}
A.c5v.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.ar(w.a).aU("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.cxM,A.cxL,A.c5w,A.c5p,A.c5q,A.c5r,A.c5z])
w(A.E0,B.ds)
w(A.aGJ,B.di)
x(B.bN,[A.c5B,A.c5A,A.c5y,A.c5o,A.c5s,A.c5t,A.c5n,A.c5u,A.c5m,A.c5v])
w(A.c5x,B.cM)})()
B.bt(b.typeUniverse,JSON.parse('{"E0":{"I":[],"e":[],"f":[]},"aGJ":{"a1":["E0"]}}'))
var y=(function rtii(){var x=B.w
return{m:x("aE<t<hR>>"),g:x("hR"),B:x("r<hR>"),u:x("r<e>"),p:x("t<hR>"),y:x("a3<c,@>"),x:x("dk"),e:x("v"),A:x("a3<c,@>?"),q:x("J?")}})();(function constants(){D.aCj=new L.a1o(C.F4,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,null,null,180,!1,null)
D.bJ0=new B.kb("Mensagens",null,!1,null,20,!1,null)
D.bJf=new B.Ka(C.a0R,null)
D.bMI=new B.fJ(0,null,0,0,null,null,D.bJf,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dGN","cMJ",()=>B.eD(new A.cxM(),null,!1,null,null,y.p))})()};
(a=>{a["Lg+dZI0REsTijpDtnTVimja5BI4="]=a.current})($__dart_deferred_initializers__);