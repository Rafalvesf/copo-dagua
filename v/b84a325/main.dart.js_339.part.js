((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dpq(d){return new A.EQ(d,null)},
dwE(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
d6n(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.pm||x===C.pn
case 1:x=d.y
return x===C.mH||x===C.hg
case 2:return d.y===C.hS}},
GN:function GN(d,e){this.a=d
this.b=e},
EQ:function EQ(d,e){this.d=d
this.a=e},
af5:function af5(){var _=this
_.d=_.w=$
_.c=_.a=null},
cbW:function cbW(d){this.a=d},
cbX:function cbX(d){this.a=d},
cbS:function cbS(d,e){this.a=d
this.b=e},
cbR:function cbR(d,e){this.a=d
this.b=e},
cbV:function cbV(){},
cbU:function cbU(d){this.a=d},
cbM:function cbM(d){this.a=d},
cbT:function cbT(d,e){this.a=d
this.b=e},
cbN:function cbN(){},
cbO:function cbO(){},
cbP:function cbP(){},
cbQ:function cbQ(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[183]
A=a.updateHolder(c[33],A)
D=c[343]
F=c[102]
A.GN.prototype={
I(){return"_BookingSegment."+this.b}}
A.EQ.prototype={
P(){return new A.af5()}}
A.af5.prototype={
gap3(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abZ
break
case"concluidos":x=D.ac_
break
default:x=D.J7
break}w=this.w=x}return w},
b7p(d){return A.d6n(d,this.gap3())},
u(d){var x,w,v,u,t=this,s=null,r=t.gT().H($.wx().$1(s),y.g),q=r.gv(r),p=new A.cbW(q==null?C.xf:q),o=B.aw(d,C.b5,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bsa[x]
v=A.dwE(w)
u=w===D.J7?p.$1(w):s
n.push(new B.ei(v,t.gap3()===w,u,new A.cbS(t,w),s))}v=y.e
n=B.a([D.bXy,new E.m4(n,16,!1,s)],v)
C.e.n(n,B.h9(r,new A.cbT(t,d),new A.cbU(t),new A.cbV(),!1,!0,!1))
return B.cM(s,C.cP,new B.bB(C.aC,s,C.aH,C.z,B.a([B.cZ(n,s,new B.a2(20,o.r.b+12,20,140),s,s,!1,C.a1,!1),D.bPN],v),s),!0,s)}}
var z=a.updateTypes(["y(es)","v(GN)"])
A.cbW.prototype={
$1(d){return J.dc(this.a,new A.cbX(d)).gA(0)},
$S:z+1}
A.cbX.prototype={
$1(d){return A.d6n(d,this.a)},
$S:64}
A.cbS.prototype={
$0(){var x=this.a
return x.q(new A.cbR(x,this.b))},
$S:0}
A.cbR.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cbV.prototype={
$0(){return D.bvq},
$S:76}
A.cbU.prototype={
$2(d,e){return B.a([new B.jc("N\xe3o foi poss\xedvel carregar.",new A.cbM(this.a),null)],y.e)},
$S:1500}
A.cbM.prototype={
$0(){return this.a.gT().ai($.wx().$1(null))},
$S:0}
A.cbT.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.c9(d),q=r.cI(d,this.a.gb7o()),p=B.V(q,q.$ti.i("z.E")),o=r.cI(d,new A.cbN()).gA(0),n=r.cI(d,new A.cbO()).gA(0),m=r.cI(d,new A.cbP()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.vc(new B.R(C.kk,B.ea(C.bc,B.a([new B.et(""+n+" por responder",C.hy,s),new B.et(""+m+" "+q,C.et,s)],x),C.r,C.bj,8,8),s),s,"Pedidos recebidos",C.hA,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aGT)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.H)(p),++u){t=p[u]
q.push(new F.a7r(t,new A.cbQ(v,t),!0,s))}return B.a([r,B.fa(q,16)],x)},
$S:1501}
A.cbN.prototype={
$1(d){return d.at},
$S:64}
A.cbO.prototype={
$1(d){return d.y===C.pm&&!d.ax},
$S:64}
A.cbP.prototype={
$1(d){return d.ax&&d.y===C.pn},
$S:64}
A.cbQ.prototype={
$0(){var x=this.b
return B.ai(this.a).ar("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.af5.prototype,"gb7o","b7p",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GN,B.fr)
x(A.EQ,B.dD)
x(A.af5,B.dy)
w(B.bx,[A.cbW,A.cbX,A.cbT,A.cbN,A.cbO,A.cbP])
w(B.bR,[A.cbS,A.cbR,A.cbV,A.cbM,A.cbQ])
x(A.cbU,B.cR)})()
B.bq(b.typeUniverse,JSON.parse('{"EQ":{"K":[],"e":[],"f":[]},"af5":{"a_":["EQ"]}}'))
var y={g:B.w("ax<t<es>>"),k:B.w("r<ei>"),e:B.w("r<e>"),h:B.w("dn"),a:B.w("I?")};(function constants(){var x=a.makeConstList
D.aGT=new B.i8(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.J7=new A.GN(0,"recebidos")
D.abZ=new A.GN(1,"confirmados")
D.ac_=new A.GN(2,"concluidos")
D.bsa=x([D.J7,D.abZ,D.ac_],B.w("r<GN>"))
D.bvq=x([C.a1Z],y.e)
D.bMm=new B.L8(C.a2a,null)
D.bPN=new B.f_(0,null,0,0,null,null,D.bMm,null)
D.cbV=new B.E("Pedidos",null,C.h8,null,null,null,null,null,null,null,null)
D.adl=new B.d4(C.bk,null,null,D.cbV,null)
D.bXy=new B.c3(null,44,D.adl,null)})()};
(a=>{a["HLQgksxvLZhrAUiBnR/Hw18771Q="]=a.current})($__dart_deferred_initializers__);