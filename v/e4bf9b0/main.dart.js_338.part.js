((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dpb(d){return new A.EP(d,null)},
dwq(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
d6e(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.pi||x===C.pj
case 1:x=d.y
return x===C.mI||x===C.hh
case 2:return d.y===C.hS}},
GM:function GM(d,e){this.a=d
this.b=e},
EP:function EP(d,e){this.d=d
this.a=e},
aeZ:function aeZ(){var _=this
_.d=_.w=$
_.c=_.a=null},
cbP:function cbP(d){this.a=d},
cbQ:function cbQ(d){this.a=d},
cbL:function cbL(d,e){this.a=d
this.b=e},
cbK:function cbK(d,e){this.a=d
this.b=e},
cbO:function cbO(){},
cbN:function cbN(d){this.a=d},
cbF:function cbF(d){this.a=d},
cbM:function cbM(d,e){this.a=d
this.b=e},
cbG:function cbG(){},
cbH:function cbH(){},
cbI:function cbI(){},
cbJ:function cbJ(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[182]
A=a.updateHolder(c[33],A)
D=c[342]
F=c[102]
A.GM.prototype={
I(){return"_BookingSegment."+this.b}}
A.EP.prototype={
P(){return new A.aeZ()}}
A.aeZ.prototype={
gap8(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abT
break
case"concluidos":x=D.abU
break
default:x=D.J5
break}w=this.w=x}return w},
b7v(d){return A.d6e(d,this.gap8())},
u(d){var x,w,v,u,t=this,s=null,r=t.gT().H($.wv().$1(s),y.g),q=r.gv(r),p=new A.cbP(q==null?C.xe:q),o=B.aw(d,C.b5,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bs6[x]
v=A.dwq(w)
u=w===D.J5?p.$1(w):s
n.push(new B.ei(v,t.gap8()===w,u,new A.cbL(t,w),s))}v=y.e
n=B.a([D.bXl,new E.m3(n,16,!1,s)],v)
C.e.n(n,B.h9(r,new A.cbM(t,d),new A.cbN(t),new A.cbO(),!1,!0,!1))
return B.cM(s,C.cP,new B.bE(C.aC,s,C.aG,C.z,B.a([B.d_(n,s,new B.a2(20,o.r.b+12,20,140),s,s,!1,C.a1,!1),D.bPI],v),s),!0,s)}}
var z=a.updateTypes(["y(es)","v(GM)"])
A.cbP.prototype={
$1(d){return J.db(this.a,new A.cbQ(d)).gA(0)},
$S:z+1}
A.cbQ.prototype={
$1(d){return A.d6e(d,this.a)},
$S:64}
A.cbL.prototype={
$0(){var x=this.a
return x.q(new A.cbK(x,this.b))},
$S:0}
A.cbK.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cbO.prototype={
$0(){return D.bvj},
$S:80}
A.cbN.prototype={
$2(d,e){return B.a([new B.jb("N\xe3o foi poss\xedvel carregar.",new A.cbF(this.a),null)],y.e)},
$S:1496}
A.cbF.prototype={
$0(){return this.a.gT().ai($.wv().$1(null))},
$S:0}
A.cbM.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.c9(d),q=r.cI(d,this.a.gb7u()),p=B.V(q,q.$ti.i("z.E")),o=r.cI(d,new A.cbG()).gA(0),n=r.cI(d,new A.cbH()).gA(0),m=r.cI(d,new A.cbI()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.vc(new B.R(C.kn,B.e9(C.bc,B.a([new B.et(""+n+" por responder",C.hy,s),new B.et(""+m+" "+q,C.es,s)],x),C.r,C.bj,8,8),s),s,"Pedidos recebidos",C.hA,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aGP)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.K)(p),++u){t=p[u]
q.push(new F.a7l(t,new A.cbJ(v,t),!0,s))}return B.a([r,B.f9(q,16)],x)},
$S:1497}
A.cbG.prototype={
$1(d){return d.at},
$S:64}
A.cbH.prototype={
$1(d){return d.y===C.pi&&!d.ax},
$S:64}
A.cbI.prototype={
$1(d){return d.ax&&d.y===C.pj},
$S:64}
A.cbJ.prototype={
$0(){var x=this.b
return B.ai(this.a).au("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.aeZ.prototype,"gb7u","b7v",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GM,B.fs)
x(A.EP,B.dD)
x(A.aeZ,B.dy)
w(B.bx,[A.cbP,A.cbQ,A.cbM,A.cbG,A.cbH,A.cbI])
w(B.bR,[A.cbL,A.cbK,A.cbO,A.cbF,A.cbJ])
x(A.cbN,B.cR)})()
B.bs(b.typeUniverse,JSON.parse('{"EP":{"J":[],"e":[],"f":[]},"aeZ":{"a_":["EP"]}}'))
var y={g:B.w("ax<t<es>>"),k:B.w("r<ei>"),e:B.w("r<e>"),h:B.w("dn"),a:B.w("H?")};(function constants(){var x=a.makeConstList
D.aGP=new B.i8(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.J5=new A.GM(0,"recebidos")
D.abT=new A.GM(1,"confirmados")
D.abU=new A.GM(2,"concluidos")
D.bs6=x([D.J5,D.abT,D.abU],B.w("r<GM>"))
D.bvj=x([C.a1X],y.e)
D.bMh=new B.L5(C.a28,null)
D.bPI=new B.eZ(0,null,0,0,null,null,D.bMh,null)
D.c9v=new B.D("Pedidos",null,C.hc,null,null,null,null,null,null,null,null)
D.ade=new B.dc(C.bm,null,null,D.c9v,null)
D.bXl=new B.c5(null,44,D.ade,null)})()};
(a=>{a["/rh6jlUTgPrLSmk+KrcXlgDDAjs="]=a.current})($__dart_deferred_initializers__);