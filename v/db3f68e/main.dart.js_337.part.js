((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dpq(d){return new A.EQ(d,null)},
dwF(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
d6l(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.pm||x===C.pn
case 1:x=d.y
return x===C.mK||x===C.hh
case 2:return d.y===C.hT}},
GO:function GO(d,e){this.a=d
this.b=e},
EQ:function EQ(d,e){this.d=d
this.a=e},
af4:function af4(){var _=this
_.d=_.w=$
_.c=_.a=null},
cbV:function cbV(d){this.a=d},
cbW:function cbW(d){this.a=d},
cbR:function cbR(d,e){this.a=d
this.b=e},
cbQ:function cbQ(d,e){this.a=d
this.b=e},
cbU:function cbU(){},
cbT:function cbT(d){this.a=d},
cbL:function cbL(d){this.a=d},
cbS:function cbS(d,e){this.a=d
this.b=e},
cbM:function cbM(){},
cbN:function cbN(){},
cbO:function cbO(){},
cbP:function cbP(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[182]
A=a.updateHolder(c[33],A)
D=c[340]
F=c[102]
A.GO.prototype={
I(){return"_BookingSegment."+this.b}}
A.EQ.prototype={
P(){return new A.af4()}}
A.af4.prototype={
gapa(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abX
break
case"concluidos":x=D.abY
break
default:x=D.J9
break}w=this.w=x}return w},
b7w(d){return A.d6l(d,this.gapa())},
u(d){var x,w,v,u,t=this,s=null,r=t.gT().H($.wv().$1(s),y.g),q=r.gv(r),p=new A.cbV(q==null?C.xf:q),o=B.aw(d,C.b5,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bs7[x]
v=A.dwF(w)
u=w===D.J9?p.$1(w):s
n.push(new B.ei(v,t.gapa()===w,u,new A.cbR(t,w),s))}v=y.e
n=B.a([D.bXx,new E.m4(n,16,!1,s)],v)
C.e.n(n,B.h9(r,new A.cbS(t,d),new A.cbT(t),new A.cbU(),!1,!0,!1))
return B.cM(s,C.cP,new B.bB(C.aC,s,C.aH,C.z,B.a([B.cZ(n,s,new B.a2(20,o.r.b+12,20,140),s,s,!1,C.a1,!1),D.bPN],v),s),!0,s)}}
var z=a.updateTypes(["y(es)","v(GO)"])
A.cbV.prototype={
$1(d){return J.dc(this.a,new A.cbW(d)).gA(0)},
$S:z+1}
A.cbW.prototype={
$1(d){return A.d6l(d,this.a)},
$S:66}
A.cbR.prototype={
$0(){var x=this.a
return x.q(new A.cbQ(x,this.b))},
$S:0}
A.cbQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cbU.prototype={
$0(){return D.bvm},
$S:78}
A.cbT.prototype={
$2(d,e){return B.a([new B.jc("N\xe3o foi poss\xedvel carregar.",new A.cbL(this.a),null)],y.e)},
$S:1499}
A.cbL.prototype={
$0(){return this.a.gT().ai($.wv().$1(null))},
$S:0}
A.cbS.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.c9(d),q=r.cI(d,this.a.gb7v()),p=B.V(q,q.$ti.i("z.E")),o=r.cI(d,new A.cbM()).gA(0),n=r.cI(d,new A.cbN()).gA(0),m=r.cI(d,new A.cbO()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.vc(new B.Q(C.kn,B.ea(C.bc,B.a([new B.et(""+n+" por responder",C.hz,s),new B.et(""+m+" "+q,C.ev,s)],x),C.r,C.bj,8,8),s),s,"Pedidos recebidos",C.hB,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aGQ)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.H)(p),++u){t=p[u]
q.push(new F.a7q(t,new A.cbP(v,t),!0,s))}return B.a([r,B.fa(q,16)],x)},
$S:1500}
A.cbM.prototype={
$1(d){return d.at},
$S:66}
A.cbN.prototype={
$1(d){return d.y===C.pm&&!d.ax},
$S:66}
A.cbO.prototype={
$1(d){return d.ax&&d.y===C.pn},
$S:66}
A.cbP.prototype={
$0(){var x=this.b
return B.ai(this.a).aq("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.af4.prototype,"gb7v","b7w",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GO,B.fr)
x(A.EQ,B.dD)
x(A.af4,B.dy)
w(B.bx,[A.cbV,A.cbW,A.cbS,A.cbM,A.cbN,A.cbO])
w(B.bR,[A.cbR,A.cbQ,A.cbU,A.cbL,A.cbP])
x(A.cbT,B.cR)})()
B.br(b.typeUniverse,JSON.parse('{"EQ":{"K":[],"e":[],"f":[]},"af4":{"a_":["EQ"]}}'))
var y={g:B.w("ax<t<es>>"),k:B.w("r<ei>"),e:B.w("r<e>"),h:B.w("dn"),a:B.w("I?")};(function constants(){var x=a.makeConstList
D.aGQ=new B.i8(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.J9=new A.GO(0,"recebidos")
D.abX=new A.GO(1,"confirmados")
D.abY=new A.GO(2,"concluidos")
D.bs7=x([D.J9,D.abX,D.abY],B.w("r<GO>"))
D.bvm=x([C.a2_],y.e)
D.bMm=new B.L8(C.a2b,null)
D.bPN=new B.eZ(0,null,0,0,null,null,D.bMm,null)
D.cbM=new B.E("Pedidos",null,C.ha,null,null,null,null,null,null,null,null)
D.adj=new B.d4(C.bk,null,null,D.cbM,null)
D.bXx=new B.c5(null,44,D.adj,null)})()};
(a=>{a["QkMbrxSOrxMPsC14ZhDdAJx1r8c="]=a.current})($__dart_deferred_initializers__);