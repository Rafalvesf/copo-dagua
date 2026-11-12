((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,I,K,L,A={cmT:function cmT(){},cmS:function cmS(){},
d06(){return new A.CH(null)},
CH:function CH(d){this.a=d},
aCS:function aCS(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
bXU:function bXU(d){this.a=d},
bXT:function bXT(){},
bXR:function bXR(){},
bXQ:function bXQ(d){this.a=d},
bXH:function bXH(d){this.a=d},
bXP:function bXP(d,e,f){this.a=d
this.b=e
this.c=f},
bXI:function bXI(d){this.a=d},
bXJ:function bXJ(){},
bXK:function bXK(){},
bXL:function bXL(){},
bXS:function bXS(){},
bXM:function bXM(d){this.a=d},
bXG:function bXG(d){this.a=d},
bXN:function bXN(d){this.a=d},
bXF:function bXF(d){this.a=d},
bXO:function bXO(d,e,f,g){var _=this
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
D=c[337]
F=c[76]
E=c[231]
M=c[109]
A.CH.prototype={
R(){return new A.aCS(new B.aM(C.aj,$.ah()))}}
A.aCS.prototype={
ak(){this.aG()
this.w.ai(0,new A.bXU(this))},
m(){var x=this.w
x.Z$=$.ah()
x.U$=0
this.a9()},
u(d){var x=this,w=null,v=x.gV().M($.cBq(),y.m),u=x.w,t=C.f.L(u.a.a),s=y.u
return B.cF(w,C.kq,new B.bC(C.aC,w,C.aD,C.C,B.a([B.bn(!1,new B.is(B.a([B.aT(w,B.at(d,C.bb,y.x).w.r.b,w),D.bCe,new B.a_(C.fW,new H.Rz(u,"Pesquisar conversas",!0,w),w),E.a6A],s),B.fj(v,new A.bXP(x,t.toLowerCase(),d),new A.bXQ(x),new A.bXR(),!1,!0,!1),w),w,C.V,!1),D.bFH],s),w),!0,w)}}
var z=a.updateTypes([])
A.cmT.prototype={
$1(d){return this.aAF(d)},
aAF(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.F8(d)
t=$.Z().b
t===$&&B.b()
s=J
x=3
return B.d(t.S("conversations").aP(0,"id, wedding_id, partner_id, last_message, last_message_at, weddings(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").a0("partner_id",u).dI(0,"last_message_at",!1),$async$$1)
case 3:v=s.d1(f,new A.cmS(),y.g).bB(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1264}
A.cmS.prototype={
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
p=B.cya(w,n)
o=B.P(x.h(d,"last_message"))
return new G.hQ(v,s,p,r,q,o,x.h(d,l)==null?n:B.df(B.a1(x.h(d,l))),0)},
$S:1265}
A.bXU.prototype={
$0(){return this.a.t(new A.bXT())},
$S:0}
A.bXT.prototype={
$0(){},
$S:0}
A.bXR.prototype={
$0(){return C.bk},
$S:25}
A.bXQ.prototype={
$2(d,e){return new B.iT("N\xe3o foi poss\xedvel carregar.",new A.bXH(this.a),null)},
$S:40}
A.bXH.prototype={
$0(){return this.a.gV().aw($.cBq())},
$S:0}
A.bXP.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.dL(a4,new A.bXI(a3))
x=B.Y(a3,a3.$ti.i("y.E"))}a3=J.a3(a4)
if(a3.ga_(a4))return D.axC
w=J.a3(x)
if(w.ga_(x))return B.bF(B.i('Sem conversas para "'+C.f.L(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.dv(a4,new A.bXJ()).gv(0)
a3=a1.a
if(a3.x){w=w.dv(x,new A.bXK())
u=B.Y(w,w.$ti.i("y.E"))}else u=x
t=B.B(y.e,y.p)
for(w=J.aE(u);w.p();){s=w.gF(w)
J.cg(t.bT(0,F.cO0(s.w),new A.bXL()),s)}r=new A.bXS()
w=y.u
a3=B.a([new B.a_(K.tn,B.W(B.a([r.$3("Todas",!a3.x,new A.bXM(a3)),C.an,r.$4$count("N\xe3o lidas",a3.x,new A.bXN(a3),v)],w),C.x,C.m,C.q,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(E.Ua[n],a2,a2,a2,L.Gm,a2,a2,a2)
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
f=F.czk(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new F.a0b(new B.fw(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,E.bqH,new A.bXO(p,t,n,j),j===J.b0(a0)-1,!1,a2));++j}C.e.A(a3,B.a([new B.a_(E.Lw,m,a2),new B.a_(C.cy,B.E(a2,B.I(k,C.x,C.m,C.q,0,C.w),C.aH,a2,a2,new B.K(C.v,a2,a2,new B.bW(l,l,l,l),C.ap,a2,C.y),a2,a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.cL(a3,a2,I.tf,a2,a2,!1,C.Y,!1)},
$S:1266}
A.bXI.prototype={
$1(d){return C.f.n(d.b.toLowerCase(),this.a)},
$S:157}
A.bXJ.prototype={
$1(d){return d.x>0},
$S:157}
A.bXK.prototype={
$1(d){return d.x>0},
$S:157}
A.bXL.prototype={
$0(){return B.a([],y.B)},
$S:1267}
A.bXS.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.a5:C.v,t=B.T(19),s=y.u,r=B.a([B.i(d,v,v,v,B.as(v,v,e?C.v:C.E,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.v:C.E
w=B.T(10)
C.e.A(r,B.a([C.bq,B.E(C.S,B.i(B.u(g),v,v,v,B.as(v,v,e?$.a5:C.v,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.t,v,E.zB,new B.K(x,v,v,w,v,v,C.y),v,20,v,v,C.oX,v,v,v)],s))}return B.b_(B.E(v,B.W(r,C.x,C.m,C.a_,0,v,v),C.t,v,v,new B.K(u,v,v,t,v,v,C.y),v,38,v,v,C.dI,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1268}
A.bXM.prototype={
$0(){var x=this.a
return x.t(new A.bXG(x))},
$S:0}
A.bXG.prototype={
$0(){return this.a.x=!1},
$S:0}
A.bXN.prototype={
$0(){var x=this.a
return x.t(new A.bXF(x))},
$S:0}
A.bXF.prototype={
$0(){return this.a.x=!0},
$S:0}
A.bXO.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.av(w.a).b5("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.cmT,A.cmS,A.bXP,A.bXI,A.bXJ,A.bXK,A.bXS])
w(A.CH,B.dy)
w(A.aCS,B.dw)
x(B.bI,[A.bXU,A.bXT,A.bXR,A.bXH,A.bXL,A.bXM,A.bXG,A.bXN,A.bXF,A.bXO])
w(A.bXQ,B.cD)})()
B.bx(b.typeUniverse,JSON.parse('{"CH":{"G":[],"e":[],"f":[]},"aCS":{"a0":["CH"]}}'))
var y=(function rtii(){var x=B.v
return{m:x("aG<t<hQ>>"),g:x("hQ"),B:x("q<hQ>"),u:x("q<e>"),p:x("t<hQ>"),y:x("a2<c,@>"),x:x("d8"),e:x("w"),A:x("a2<c,@>?"),q:x("F?")}})();(function constants(){D.axC=new M.a_6(C.Eo,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,null,null,180,!1,null)
D.bCe=new B.hj("Mensagens",null,!1,null,28,20,!1,null)
D.bCm=new B.IH(C.a_v,null,null)
D.bFH=new B.h3(0,null,0,0,null,null,D.bCm,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dsn","cBq",()=>B.eD(new A.cmT(),null,!1,null,null,y.p))})()};
(a=>{a["KF+TL2KqOv1MlTqWjvKtHUsxkA4="]=a.current})($__dart_deferred_initializers__);