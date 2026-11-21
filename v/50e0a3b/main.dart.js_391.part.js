((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,I,K,A={cx5:function cx5(){},cx4:function cx4(){},
dc5(){return new A.E3(null)},
E3:function E3(d){this.a=d},
aGH:function aGH(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
c5c:function c5c(d){this.a=d},
c5b:function c5b(){},
c59:function c59(){},
c58:function c58(d){this.a=d},
c5_:function c5_(d){this.a=d},
c57:function c57(d,e,f){this.a=d
this.b=e
this.c=f},
c50:function c50(d){this.a=d},
c51:function c51(){},
c52:function c52(){},
c53:function c53(){},
c5a:function c5a(){},
c54:function c54(d){this.a=d},
c4Z:function c4Z(d){this.a=d},
c55:function c55(d){this.a=d},
c4Y:function c4Y(d){this.a=d},
c56:function c56(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,F,E,L,M
J=c[1]
B=c[0]
C=c[2]
G=c[185]
H=c[149]
I=c[213]
K=c[232]
A=a.updateHolder(c[33],A)
D=c[345]
F=c[76]
E=c[235]
L=c[114]
M=c[238]
A.E3.prototype={
R(){return new A.aGH(new B.aH(C.al,$.ag()))}}
A.aGH.prototype={
ak(){this.aH()
this.w.ai(0,new A.c5c(this))},
m(){var x=this.w
x.a0$=$.ag()
x.V$=0
this.a8()},
u(d){var x=this,w=null,v=x.gU().M($.cM2(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return B.cP(w,C.kE,new B.bQ(C.aD,w,C.aI,C.z,B.a([B.bB(!1,new B.kU(B.a([B.aS(w,B.at(d,C.bb,y.x).w.r.b,w),D.bIB,new B.U(C.j3,new H.EV(u,"Pesquisar conversas",!0,w),w),E.a7R],s),B.fO(v,new A.c57(x,t.toLowerCase(),d),new A.c58(x),new A.c59(),!1,!0,!1),w),w,C.X,!1),D.bMg],s),w),!0,w)}}
var z=a.updateTypes([])
A.cx5.prototype={
$1(d){return this.aEn(d)},
aEn(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.BB(d)
t=$.S().b
t===$&&B.b()
s=J
x=3
return B.d(t.T("conversations").aI(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").X("partner_id",u).dw(0,"last_message_at",!1),$async$$1)
case 3:v=s.d1(f,new A.cx4(),y.g).bA(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1352}
A.cx4.prototype={
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
p=B.cIN(w,n)
o=B.L(x.h(d,"last_message"))
return new G.hS(v,s,p,r,q,o,x.h(d,l)==null?n:B.dd(B.a2(x.h(d,l))),0)},
$S:1353}
A.c5c.prototype={
$0(){return this.a.q(new A.c5b())},
$S:0}
A.c5b.prototype={
$0(){},
$S:0}
A.c59.prototype={
$0(){return C.bq},
$S:38}
A.c58.prototype={
$2(d,e){return new B.j8("N\xe3o foi poss\xedvel carregar.",new A.c5_(this.a),null)},
$S:43}
A.c5_.prototype={
$0(){return this.a.gU().al($.cM2())},
$S:0}
A.c57.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.dB(a4,new A.c50(a3))
x=B.W(a3,a3.$ti.i("y.E"))}a3=J.a5(a4)
if(a3.gY(a4))return D.aBX
w=J.a5(x)
if(w.gY(x))return B.bO(B.i('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.dj(a4,new A.c51()).gA(0)
a3=a1.a
if(a3.x){w=w.dj(x,new A.c52())
u=B.W(w,w.$ti.i("y.E"))}else u=x
t=B.A(y.e,y.p)
for(w=J.aA(u);w.t();){s=w.gF(w)
J.bT(t.bL(0,F.cZd(s.w),new A.c53()),s)}r=new A.c5a()
w=y.u
a3=B.a([new B.U(M.BY,B.a_(B.a([r.$3("Todas",!a3.x,new A.c54(a3)),C.aC,r.$4$count("N\xe3o lidas",a3.x,new A.c55(a3),v)],w),C.x,C.l,C.q,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(E.Vv[n],a2,a2,a2,C.dh,a2,a2,a2)
l=new B.aZ(22,22)
k=B.a([],w)
j=0
for(;;){i=t.h(0,n)
i.toString
if(!(j<J.aT(i)))break
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
f=F.cvI(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new F.a2x(new B.e7(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,E.V7,new A.c56(p,t,n,j),j===J.aT(a0)-1,!1,a2));++j}C.e.p(a3,B.a([new B.U(E.Mx,m,a2),new B.U(C.cc,B.G(a2,B.I(k,C.x,C.l,C.q,0,C.w),C.aS,a2,a2,new B.N(C.u,a2,a2,new B.c1(l,l,l,l),C.aE,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.d3(a3,a2,I.u7,a2,a2,!1,C.Z,!1)},
$S:1354}
A.c50.prototype={
$1(d){return C.f.n(d.b.toLowerCase(),this.a)},
$S:163}
A.c51.prototype={
$1(d){return d.x>0},
$S:163}
A.c52.prototype={
$1(d){return d.x>0},
$S:163}
A.c53.prototype={
$0(){return B.a([],y.B)},
$S:1355}
A.c5a.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ao:C.u,t=B.Z(19),s=y.u,r=B.a([B.i(d,v,v,v,B.aE(v,v,e?C.u:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.u:C.A
w=B.Z(10)
C.e.p(r,B.a([C.bC,B.G(C.P,B.i(B.q(g),v,v,v,B.aE(v,v,e?$.ao:C.u,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.t,v,K.t5,new B.N(x,v,v,w,v,v,C.y),v,20,v,C.kX,v,v,v)],s))}return B.ba(B.G(v,B.a_(r,C.x,C.l,C.W,0,v,v),C.t,v,v,new B.N(u,v,v,t,v,v,C.y),v,38,v,C.dt,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1356}
A.c54.prototype={
$0(){var x=this.a
return x.q(new A.c4Z(x))},
$S:0}
A.c4Z.prototype={
$0(){return this.a.x=!1},
$S:0}
A.c55.prototype={
$0(){var x=this.a
return x.q(new A.c4Y(x))},
$S:0}
A.c4Y.prototype={
$0(){return this.a.x=!0},
$S:0}
A.c56.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.ar(w.a).aV("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.cx5,A.cx4,A.c57,A.c50,A.c51,A.c52,A.c5a])
w(A.E3,B.dv)
w(A.aGH,B.dk)
x(B.bL,[A.c5c,A.c5b,A.c59,A.c5_,A.c53,A.c54,A.c4Z,A.c55,A.c4Y,A.c56])
w(A.c58,B.cM)})()
B.bt(b.typeUniverse,JSON.parse('{"E3":{"H":[],"e":[],"f":[]},"aGH":{"a1":["E3"]}}'))
var y=(function rtii(){var x=B.v
return{m:x("aF<t<hS>>"),g:x("hS"),B:x("r<hS>"),u:x("r<e>"),p:x("t<hS>"),y:x("a3<c,@>"),x:x("dn"),e:x("w"),A:x("a3<c,@>?"),q:x("J?")}})();(function constants(){D.aBX=new L.a1o(C.F2,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,null,null,180,!1,null)
D.bIB=new B.kd("Mensagens",null,!1,null,20,!1,null)
D.bIQ=new B.Kc(C.a0O,null)
D.bMg=new B.h7(0,null,0,0,null,null,D.bIQ,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dG6","cM2",()=>B.eB(new A.cx5(),null,!1,null,null,y.p))})()};
(a=>{a["yqsgUr8aKhcUX7BWVsbBjbtsPqM="]=a.current})($__dart_deferred_initializers__);