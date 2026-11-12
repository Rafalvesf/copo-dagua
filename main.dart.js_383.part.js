((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,I,K,A={cnD:function cnD(){},cnC:function cnC(){},
d16(){return new A.CQ(null)},
CQ:function CQ(d){this.a=d},
aD5:function aD5(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
bYn:function bYn(d){this.a=d},
bYm:function bYm(){},
bYk:function bYk(){},
bYj:function bYj(d){this.a=d},
bYa:function bYa(d){this.a=d},
bYi:function bYi(d,e,f){this.a=d
this.b=e
this.c=f},
bYb:function bYb(d){this.a=d},
bYc:function bYc(){},
bYd:function bYd(){},
bYe:function bYe(){},
bYl:function bYl(){},
bYf:function bYf(d){this.a=d},
bY9:function bY9(d){this.a=d},
bYg:function bYg(d){this.a=d},
bY8:function bY8(d){this.a=d},
bYh:function bYh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,F,E,L
J=c[1]
B=c[0]
C=c[2]
G=c[168]
H=c[109]
I=c[206]
K=c[237]
A=a.updateHolder(c[33],A)
D=c[324]
F=c[76]
E=c[232]
L=c[110]
A.CQ.prototype={
R(){return new A.aD5(new B.aP(C.am,$.ah()))}}
A.aD5.prototype={
ak(){this.aG()
this.w.ai(0,new A.bYn(this))},
m(){var x=this.w
x.a0$=$.ah()
x.V$=0
this.aa()},
u(d){var x=this,w=null,v=x.gU().M($.cCh(),y.m),u=x.w,t=C.f.L(u.a.a),s=y.u
return B.cL(w,C.km,new B.bG(C.aB,w,C.aF,C.D,B.a([B.bp(!1,new B.ir(B.a([B.aU(w,B.at(d,C.ba,y.x).w.r.b,w),D.bCy,new B.a_(C.fV,new H.RN(u,"Pesquisar conversas",!0,w),w),E.a6t],s),B.ft(v,new A.bYi(x,t.toLowerCase(),d),new A.bYj(x),new A.bYk(),!1,!0,!1),w),w,C.V,!1),D.bG0],s),w),!0,w)}}
var z=a.updateTypes([])
A.cnD.prototype={
$1(d){return this.aAX(d)},
aAX(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.Fg(d)
t=$.W().b
t===$&&B.b()
s=J
x=3
return B.d(t.T("conversations").aN(0,"id, wedding_id, partner_id, last_message, last_message_at, weddings(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").a_("partner_id",u).dF(0,"last_message_at",!1),$async$$1)
case 3:v=s.d1(f,new A.cnC(),y.g).bB(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1266}
A.cnC.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="wedding_id",l="last_message_at"
y.y.a(d)
x=J.a3(d)
w=y.A.a(x.h(d,"weddings"))
v=w==null
u=B.P(v?n:J.h(w,"partner_name_1"))
t=B.P(v?n:J.h(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
v=B.a1(x.h(d,"id"))
r=B.a1(x.h(d,m))
q=B.a1(x.h(d,"partner_id"))
B.a1(x.h(d,m))
p=B.cz0(w,n)
o=B.P(x.h(d,"last_message"))
return new G.hT(v,s,p,r,q,o,x.h(d,l)==null?n:B.de(B.a1(x.h(d,l))),0)},
$S:1267}
A.bYn.prototype={
$0(){return this.a.q(new A.bYm())},
$S:0}
A.bYm.prototype={
$0(){},
$S:0}
A.bYk.prototype={
$0(){return C.bl},
$S:27}
A.bYj.prototype={
$2(d,e){return new B.iS("N\xe3o foi poss\xedvel carregar.",new A.bYa(this.a),null)},
$S:41}
A.bYa.prototype={
$0(){return this.a.gU().av($.cCh())},
$S:0}
A.bYi.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.dP(a4,new A.bYb(a3))
x=B.X(a3,a3.$ti.i("y.E"))}a3=J.a3(a4)
if(a3.gZ(a4))return D.axD
w=J.a3(x)
if(w.gZ(x))return B.bE(B.i('Sem conversas para "'+C.f.L(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.dk(a4,new A.bYc()).gv(0)
a3=a1.a
if(a3.x){w=w.dk(x,new A.bYd())
u=B.X(w,w.$ti.i("y.E"))}else u=x
t=B.B(y.e,y.p)
for(w=J.aD(u);w.p();){s=w.gF(w)
J.cg(t.bT(0,F.cOY(s.w),new A.bYe()),s)}r=new A.bYl()
w=y.u
a3=B.a([new B.a_(K.tt,B.Z(B.a([r.$3("Todas",!a3.x,new A.bYf(a3)),C.aq,r.$4$count("N\xe3o lidas",a3.x,new A.bYg(a3),v)],w),C.x,C.m,C.q,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(E.U7[n],a2,a2,a2,C.xO,a2,a2,a2)
l=new B.aW(22,22)
k=B.a([],w)
j=0
for(;;){i=t.h(0,n)
i.toString
if(!(j<J.aX(i)))break
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
f=F.cAa(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new F.a0m(new B.fy(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,E.bqP,new A.bYh(p,t,n,j),j===J.aX(a0)-1,!1,a2));++j}C.e.A(a3,B.a([new B.a_(E.Lx,m,a2),new B.a_(C.cz,B.E(a2,B.J(k,C.x,C.m,C.q,0,C.w),C.aG,a2,a2,new B.L(C.v,a2,a2,new B.bU(l,l,l,l),C.ap,a2,C.y),a2,a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.cO(a3,a2,I.tm,a2,a2,!1,C.Z,!1)},
$S:1268}
A.bYb.prototype={
$1(d){return C.f.n(d.b.toLowerCase(),this.a)},
$S:153}
A.bYc.prototype={
$1(d){return d.x>0},
$S:153}
A.bYd.prototype={
$1(d){return d.x>0},
$S:153}
A.bYe.prototype={
$0(){return B.a([],y.B)},
$S:1269}
A.bYl.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.a9:C.v,t=B.T(19),s=y.u,r=B.a([B.i(d,v,v,v,B.as(v,v,e?C.v:C.C,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.v:C.C
w=B.T(10)
C.e.A(r,B.a([C.bp,B.E(C.T,B.i(B.u(g),v,v,v,B.as(v,v,e?$.a9:C.v,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.t,v,E.zD,new B.L(x,v,v,w,v,v,C.y),v,20,v,v,C.p4,v,v,v)],s))}return B.b0(B.E(v,B.Z(r,C.x,C.m,C.a0,0,v,v),C.t,v,v,new B.L(u,v,v,t,v,v,C.y),v,38,v,v,C.dF,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1270}
A.bYf.prototype={
$0(){var x=this.a
return x.q(new A.bY9(x))},
$S:0}
A.bY9.prototype={
$0(){return this.a.x=!1},
$S:0}
A.bYg.prototype={
$0(){var x=this.a
return x.q(new A.bY8(x))},
$S:0}
A.bY8.prototype={
$0(){return this.a.x=!0},
$S:0}
A.bYh.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.au(w.a).b3("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.cnD,A.cnC,A.bYi,A.bYb,A.bYc,A.bYd,A.bYl])
w(A.CQ,B.dx)
w(A.aD5,B.dt)
x(B.bI,[A.bYn,A.bYm,A.bYk,A.bYa,A.bYe,A.bYf,A.bY9,A.bYg,A.bY8,A.bYh])
w(A.bYj,B.cD)})()
B.bx(b.typeUniverse,JSON.parse('{"CQ":{"G":[],"e":[],"f":[]},"aD5":{"a0":["CQ"]}}'))
var y=(function rtii(){var x=B.v
return{m:x("aF<t<hT>>"),g:x("hT"),B:x("q<hT>"),u:x("q<e>"),p:x("t<hT>"),y:x("a2<c,@>"),x:x("d8"),e:x("w"),A:x("a2<c,@>?"),q:x("F?")}})();(function constants(){D.axD=new L.a_h(C.Er,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,null,null,180,!1,null)
D.bCy=new B.hi("Mensagens",null,!1,null,28,20,!1,null)
D.bCG=new B.IR(C.a_s,null,null)
D.bG0=new B.h1(0,null,0,0,null,null,D.bCG,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dtm","cCh",()=>B.eA(new A.cnD(),null,!1,null,null,y.p))})()};
(a=>{a["TXWbHO36zaIMiSuemdW5RsvfzoA="]=a.current})($__dart_deferred_initializers__);