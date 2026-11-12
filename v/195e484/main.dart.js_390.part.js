((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,I,K,L,A={cnr:function cnr(){},cnq:function cnq(){},
d0M(){return new A.CI(null)},
CI:function CI(d){this.a=d},
aD_:function aD_(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
bYr:function bYr(d){this.a=d},
bYq:function bYq(){},
bYo:function bYo(){},
bYn:function bYn(d){this.a=d},
bYe:function bYe(d){this.a=d},
bYm:function bYm(d,e,f){this.a=d
this.b=e
this.c=f},
bYf:function bYf(d){this.a=d},
bYg:function bYg(){},
bYh:function bYh(){},
bYi:function bYi(){},
bYp:function bYp(){},
bYj:function bYj(d){this.a=d},
bYd:function bYd(d){this.a=d},
bYk:function bYk(d){this.a=d},
bYc:function bYc(d){this.a=d},
bYl:function bYl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,F,E,M
J=c[1]
B=c[0]
C=c[2]
G=c[167]
H=c[108]
I=c[205]
K=c[237]
L=c[234]
A=a.updateHolder(c[33],A)
D=c[335]
F=c[76]
E=c[231]
M=c[109]
A.CI.prototype={
R(){return new A.aD_(new B.aM(C.aj,$.ah()))}}
A.aD_.prototype={
ak(){this.aG()
this.w.ai(0,new A.bYr(this))},
m(){var x=this.w
x.a_$=$.ah()
x.V$=0
this.a9()},
u(d){var x=this,w=null,v=x.gU().M($.cC2(),y.m),u=x.w,t=C.f.L(u.a.a),s=y.u
return B.cG(w,C.kq,new B.bC(C.aC,w,C.aD,C.C,B.a([B.bo(!1,new B.is(B.a([B.aT(w,B.at(d,C.bb,y.x).w.r.b,w),D.bCl,new B.a_(C.fX,new H.RF(u,"Pesquisar conversas",!0,w),w),E.a6C],s),B.fj(v,new A.bYm(x,t.toLowerCase(),d),new A.bYn(x),new A.bYo(),!1,!0,!1),w),w,C.V,!1),D.bFO],s),w),!0,w)}}
var z=a.updateTypes([])
A.cnr.prototype={
$1(d){return this.aAK(d)},
aAK(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.F9(d)
t=$.Z().b
t===$&&B.b()
s=J
x=3
return B.d(t.S("conversations").aO(0,"id, wedding_id, partner_id, last_message, last_message_at, weddings(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").a0("partner_id",u).dE(0,"last_message_at",!1),$async$$1)
case 3:v=s.d1(f,new A.cnq(),y.g).bB(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1267}
A.cnq.prototype={
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
p=B.cyN(w,n)
o=B.P(x.h(d,"last_message"))
return new G.hQ(v,s,p,r,q,o,x.h(d,l)==null?n:B.dg(B.a1(x.h(d,l))),0)},
$S:1268}
A.bYr.prototype={
$0(){return this.a.q(new A.bYq())},
$S:0}
A.bYq.prototype={
$0(){},
$S:0}
A.bYo.prototype={
$0(){return C.bk},
$S:25}
A.bYn.prototype={
$2(d,e){return new B.iT("N\xe3o foi poss\xedvel carregar.",new A.bYe(this.a),null)},
$S:41}
A.bYe.prototype={
$0(){return this.a.gU().av($.cC2())},
$S:0}
A.bYm.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.dL(a4,new A.bYf(a3))
x=B.Y(a3,a3.$ti.i("y.E"))}a3=J.a3(a4)
if(a3.gZ(a4))return D.axH
w=J.a3(x)
if(w.gZ(x))return B.bF(B.i('Sem conversas para "'+C.f.L(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.dk(a4,new A.bYg()).gv(0)
a3=a1.a
if(a3.x){w=w.dk(x,new A.bYh())
u=B.Y(w,w.$ti.i("y.E"))}else u=x
t=B.B(y.e,y.p)
for(w=J.aE(u);w.p();){s=w.gF(w)
J.ce(t.bT(0,F.cOE(s.w),new A.bYi()),s)}r=new A.bYp()
w=y.u
a3=B.a([new B.a_(K.to,B.V(B.a([r.$3("Todas",!a3.x,new A.bYj(a3)),C.al,r.$4$count("N\xe3o lidas",a3.x,new A.bYk(a3),v)],w),C.x,C.l,C.q,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(E.Uc[n],a2,a2,a2,L.Go,a2,a2,a2)
l=new B.aX(22,22)
k=B.a([],w)
j=0
for(;;){i=t.h(0,n)
i.toString
if(!(j<J.b0(i)))break
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
f=F.czX(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new F.a0j(new B.fw(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,E.bqN,new A.bYl(p,t,n,j),j===J.b0(a0)-1,!1,a2));++j}C.e.A(a3,B.a([new B.a_(E.Ly,m,a2),new B.a_(C.cy,B.E(a2,B.I(k,C.x,C.l,C.q,0,C.w),C.aH,a2,a2,new B.K(C.v,a2,a2,new B.bW(l,l,l,l),C.aq,a2,C.y),a2,a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.cM(a3,a2,I.tg,a2,a2,!1,C.Z,!1)},
$S:1269}
A.bYf.prototype={
$1(d){return C.f.n(d.b.toLowerCase(),this.a)},
$S:156}
A.bYg.prototype={
$1(d){return d.x>0},
$S:156}
A.bYh.prototype={
$1(d){return d.x>0},
$S:156}
A.bYi.prototype={
$0(){return B.a([],y.B)},
$S:1270}
A.bYp.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.a5:C.v,t=B.T(19),s=y.u,r=B.a([B.i(d,v,v,v,B.as(v,v,e?C.v:C.D,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.v:C.D
w=B.T(10)
C.e.A(r,B.a([C.bo,B.E(C.S,B.i(B.u(g),v,v,v,B.as(v,v,e?$.a5:C.v,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.t,v,E.zD,new B.K(x,v,v,w,v,v,C.y),v,20,v,v,C.oZ,v,v,v)],s))}return B.aY(B.E(v,B.V(r,C.x,C.l,C.a_,0,v,v),C.t,v,v,new B.K(u,v,v,t,v,v,C.y),v,38,v,v,C.dx,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1271}
A.bYj.prototype={
$0(){var x=this.a
return x.q(new A.bYd(x))},
$S:0}
A.bYd.prototype={
$0(){return this.a.x=!1},
$S:0}
A.bYk.prototype={
$0(){var x=this.a
return x.q(new A.bYc(x))},
$S:0}
A.bYc.prototype={
$0(){return this.a.x=!0},
$S:0}
A.bYl.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.au(w.a).b3("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.cnr,A.cnq,A.bYm,A.bYf,A.bYg,A.bYh,A.bYp])
w(A.CI,B.dx)
w(A.aD_,B.ds)
x(B.bI,[A.bYr,A.bYq,A.bYo,A.bYe,A.bYi,A.bYj,A.bYd,A.bYk,A.bYc,A.bYl])
w(A.bYn,B.cF)})()
B.bx(b.typeUniverse,JSON.parse('{"CI":{"F":[],"e":[],"f":[]},"aD_":{"a0":["CI"]}}'))
var y=(function rtii(){var x=B.v
return{m:x("aF<t<hQ>>"),g:x("hQ"),B:x("q<hQ>"),u:x("q<e>"),p:x("t<hQ>"),y:x("a2<c,@>"),x:x("d9"),e:x("w"),A:x("a2<c,@>?"),q:x("G?")}})();(function constants(){D.axH=new M.a_e(C.Er,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,null,null,180,!1,null)
D.bCl=new B.hj("Mensagens",null,!1,null,28,20,!1,null)
D.bCt=new B.IJ(C.a_x,null,null)
D.bFO=new B.h3(0,null,0,0,null,null,D.bCt,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dt2","cC2",()=>B.eD(new A.cnr(),null,!1,null,null,y.p))})()};
(a=>{a["faYCJo5dMwIBq2JY96FPwoM50Kc="]=a.current})($__dart_deferred_initializers__);