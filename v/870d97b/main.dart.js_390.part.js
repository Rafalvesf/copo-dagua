((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,A={cIg:function cIg(){},cIf:function cIf(){},
dpn(){return new A.EY(null)},
EY:function EY(d){this.a=d},
aJG:function aJG(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
ce4:function ce4(d){this.a=d},
ce3:function ce3(){},
ce1:function ce1(){},
ce0:function ce0(d){this.a=d},
cdS:function cdS(d){this.a=d},
ce_:function ce_(d,e,f){this.a=d
this.b=e
this.c=f},
cdT:function cdT(d){this.a=d},
cdU:function cdU(){},
cdV:function cdV(){},
cdW:function cdW(){},
ce2:function ce2(){},
cdX:function cdX(d){this.a=d},
cdR:function cdR(d){this.a=d},
cdY:function cdY(d){this.a=d},
cdQ:function cdQ(d){this.a=d},
cdZ:function cdZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I
J=c[1]
B=c[0]
C=c[2]
G=c[150]
H=c[201]
A=a.updateHolder(c[36],A)
D=c[346]
E=c[80]
F=c[221]
I=c[224]
A.EY.prototype={
P(){return new A.aJG(new B.aI(C.an,$.ac()))}}
A.aJG.prototype={
al(){this.aH()
this.w.am(0,new A.ce4(this))},
m(){var x=this.w
x.Z$=$.ac()
x.X$=0
this.a7()},
u(d){var x=this,w=null,v=x.gT().H($.cXY(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return B.cM(w,C.l6,new B.bE(C.aC,w,C.aG,C.z,B.a([B.bD(!1,new B.me(B.a([B.aL(w,B.aw(d,C.b5,y.x).w.r.b,w),D.bM1,new B.R(C.fP,new G.FS(u,"Pesquisar conversas",!0,w),w),F.a9p],s),B.h9(v,new A.ce_(x,t.toLowerCase(),d),new A.ce0(x),new A.ce1(),!1,!0,!1),w),w,C.a_,!1),D.bPQ],s),w),!0,w)}}
var z=a.updateTypes([])
A.cIg.prototype={
$1(d){return this.aGh(d)},
aGh(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.Co(d)
t=$.T().b
t===$&&B.b()
s=J
x=3
return B.d(t.R("conversations").az(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").W("partner_id",u).dl(0,"last_message_at",!1),$async$$1)
case 3:v=s.d3(f,new A.cIf(),y.g).by(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1447}
A.cIf.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="wedding_id",l="last_message_at"
y.y.a(d)
x=J.a6(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=B.B(v?n:J.h(w,"partner_name_1"))
t=B.B(v?n:J.h(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
v=B.a0(x.h(d,"id"))
r=B.a0(x.h(d,m))
q=B.a0(x.h(d,"partner_id"))
B.a0(x.h(d,m))
p=B.cUq(w,n)
o=B.B(x.h(d,"last_message"))
return new B.hU(v,s,p,r,q,o,x.h(d,l)==null?n:B.d8(B.a0(x.h(d,l))),0)},
$S:1448}
A.ce4.prototype={
$0(){return this.a.q(new A.ce3())},
$S:0}
A.ce3.prototype={
$0(){},
$S:0}
A.ce1.prototype={
$0(){return C.dZ},
$S:40}
A.ce0.prototype={
$2(d,e){return new B.jb("N\xe3o foi poss\xedvel carregar.",new A.cdS(this.a),null)},
$S:48}
A.cdS.prototype={
$0(){return this.a.gT().ai($.cXY())},
$S:0}
A.ce_.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.db(a4,new A.cdT(a3))
x=B.V(a3,a3.$ti.i("z.E"))}a3=J.a6(a4)
if(a3.gY(a4))return D.aEj
w=J.a6(x)
if(w.gY(x))return B.bN(B.i('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.cI(a4,new A.cdU()).gA(0)
a3=a1.a
if(a3.x){w=w.cI(x,new A.cdV())
u=B.V(w,w.$ti.i("z.E"))}else u=x
t=B.A(y.e,y.p)
for(w=J.ar(u);w.t();){s=w.gE(w)
J.bw(t.bN(0,E.dap(s.w),new A.cdW()),s)}r=new A.ce2()
w=y.u
a3=B.a([new B.R(I.CP,B.Q(B.a([r.$3("Todas",!a3.x,new A.cdX(a3)),C.al,r.$4$count("N\xe3o lidas",a3.x,new A.cdY(a3),v)],w),C.w,C.j,C.m,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(F.WH[n],a2,a2,a2,a2,C.bs,a2,a2,a2)
l=new B.b4(22,22)
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
f=E.cGN(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new E.a4f(new B.cF(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,F.Wh,new A.cdZ(p,t,n,j),j===J.aT(a0)-1,!1,a2));++j}C.e.n(a3,B.a([new B.R(F.NH,m,a2),new B.R(C.bQ,B.E(a2,B.C(k,C.w,C.j,C.m,0,C.v),C.b0,a2,a2,new B.O(C.t,a2,a2,new B.ce(l,l,l,l),C.bb,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.d_(a3,a2,H.nd,a2,a2,!1,C.a1,!1)},
$S:1449}
A.cdT.prototype={
$1(d){return C.f.p(d.b.toLowerCase(),this.a)},
$S:157}
A.cdU.prototype={
$1(d){return d.x>0},
$S:157}
A.cdV.prototype={
$1(d){return d.x>0},
$S:157}
A.cdW.prototype={
$0(){return B.a([],y.B)},
$S:1450}
A.ce2.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ap:C.t,t=B.a1(19),s=y.u,r=B.a([B.i(d,v,v,v,v,B.aG(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=B.a1(10)
C.e.n(r,B.a([C.bq,B.E(C.K,B.i(B.q(g),v,v,v,v,B.aG(v,v,e?$.ap:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.pq,new B.O(x,v,v,w,v,v,C.y),v,20,v,C.lu,v,v,v)],s))}return B.aU(B.E(v,B.Q(r,C.w,C.j,C.L,0,v,v),C.r,v,v,new B.O(u,v,v,t,v,v,C.y),v,38,v,C.dB,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1451}
A.cdX.prototype={
$0(){var x=this.a
return x.q(new A.cdR(x))},
$S:0}
A.cdR.prototype={
$0(){return this.a.x=!1},
$S:0}
A.cdY.prototype={
$0(){var x=this.a
return x.q(new A.cdQ(x))},
$S:0}
A.cdQ.prototype={
$0(){return this.a.x=!0},
$S:0}
A.cdZ.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.ai(w.a).aq("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cIg,A.cIf,A.ce_,A.cdT,A.cdU,A.cdV,A.ce2])
w(A.EY,B.dD)
w(A.aJG,B.dy)
x(B.bR,[A.ce4,A.ce3,A.ce1,A.cdS,A.cdW,A.cdX,A.cdR,A.cdY,A.cdQ,A.cdZ])
w(A.ce0,B.cR)})()
B.br(b.typeUniverse,JSON.parse('{"EY":{"J":[],"e":[],"f":[]},"aJG":{"a_":["EY"]}}'))
var y=(function rtii(){var x=B.w
return{m:x("ax<t<hU>>"),g:x("hU"),B:x("r<hU>"),u:x("r<e>"),p:x("t<hU>"),y:x("a4<c,@>"),x:x("dn"),e:x("v"),A:x("a4<c,@>?"),q:x("H?")}})();(function constants(){D.aEj=new E.a37(C.G0,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bM1=new B.lG("Mensagens",null,!1,null,20,!1,null)
D.bMj=new B.L6(C.a2a,null)
D.bPQ=new B.eZ(0,null,0,0,null,null,D.bMj,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTD","cXY",()=>B.eE(new A.cIg(),null,!1,null,null,y.p))})()};
(a=>{a["6U3Uu1X9O5so1noa0rz7wiIKHls="]=a.current})($__dart_deferred_initializers__);