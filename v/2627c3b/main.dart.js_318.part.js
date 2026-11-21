((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
dfe(d){return new A.DZ(d,null)},
dmq(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
cXK(d,e){var x
switch(e.a){case 0:x=d.y
return x===D.oQ||x===D.oR
case 1:x=d.y
return x===D.mj||x===D.i5
case 2:return d.y===D.jN}},
FV:function FV(d,e){this.a=d
this.b=e},
DZ:function DZ(d,e){this.d=d
this.a=e},
adh:function adh(){var _=this
_.d=_.w=$
_.c=_.a=null},
c3Q:function c3Q(d){this.a=d},
c3R:function c3R(d){this.a=d},
c3M:function c3M(d,e){this.a=d
this.b=e},
c3L:function c3L(d,e){this.a=d
this.b=e},
c3P:function c3P(){},
c3O:function c3O(d){this.a=d},
c3G:function c3G(d){this.a=d},
c3N:function c3N(d,e){this.a=d
this.b=e},
c3H:function c3H(){},
c3I:function c3I(){},
c3J:function c3J(){},
c3K:function c3K(d,e){this.a=d
this.b=e}},C,E,F,G,H
J=c[1]
B=c[0]
D=c[2]
A=a.updateHolder(c[30],A)
C=c[317]
E=c[169]
F=c[202]
G=c[96]
H=c[182]
A.FV.prototype={
H(){return"_BookingSegment."+this.b}}
A.DZ.prototype={
S(){return new A.adh()}}
A.adh.prototype={
gao6(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=C.aaD
break
case"concluidos":x=C.aaE
break
default:x=C.Ia
break}w=this.w=x}return w},
b5y(d){return A.cXK(d,this.gao6())},
u(d){var x,w,v,u,t=this,s=null,r=t.gU().L($.vT().$1(s),y.g),q=r.gv(r),p=new A.c3Q(q==null?D.wN:q),o=B.av(d,D.bb,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=C.bq8[x]
v=A.dmq(w)
u=w===C.Ia?p.$1(w):s
n.push(new B.ek(v,t.gao6()===w,u,new A.c3M(t,w),s))}v=y.e
n=B.a([C.bUd,new H.my(n,16,s)],v)
D.e.p(n,B.fN(r,new A.c3N(t,d),new A.c3O(t),new A.c3P(),!1,!0,!1))
return B.cP(s,D.d8,new B.bJ(D.aB,s,D.aG,D.A,B.a([B.d5(n,s,new B.a0(20,o.r.b+12,20,140),s,s,!1,D.a2,!1),C.bMR],v),s),!0,s)}}
var z=a.updateTypes(["z(ed)","v(FV)"])
A.c3Q.prototype={
$1(d){return J.dp(this.a,new A.c3R(d)).gA(0)},
$S:z+1}
A.c3R.prototype={
$1(d){return A.cXK(d,this.a)},
$S:63}
A.c3M.prototype={
$0(){var x=this.a
return x.q(new A.c3L(x,this.b))},
$S:0}
A.c3L.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.c3P.prototype={
$0(){return C.bwq},
$S:78}
A.c3O.prototype={
$2(d,e){return B.a([new B.j6("N\xe3o foi poss\xedvel carregar.",new A.c3G(this.a),null)],y.e)},
$S:1417}
A.c3G.prototype={
$0(){return this.a.gU().aj($.vT().$1(null))},
$S:0}
A.c3N.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.ct(d),q=r.dj(d,this.a.gb5x()),p=B.W(q,q.$ti.i("y.E")),o=r.dj(d,new A.c3H()).gA(0),n=r.dj(d,new A.c3I()).gA(0),m=r.dj(d,new A.c3J()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=E.Dw(new B.T(D.mQ,B.er(D.bj,B.a([new B.eL(""+n+" por responder",D.jh,s),new B.eL(""+m+" "+q,D.eF,s)],x),D.r,D.bA,8,8),s),s,"Pedidos recebidos",F.kd,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(C.aES)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.J)(p),++u){t=p[u]
q.push(new G.a5M(t,new A.c3K(v,t),!0,s))}return B.a([r,B.hO(q,16)],x)},
$S:1418}
A.c3H.prototype={
$1(d){return d.at},
$S:63}
A.c3I.prototype={
$1(d){return d.y===D.oQ&&!d.ax},
$S:63}
A.c3J.prototype={
$1(d){return d.ax&&d.y===D.oR},
$S:63}
A.c3K.prototype={
$0(){var x=this.b
return B.ar(this.a).aW("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.adh.prototype,"gb5x","b5y",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.FV,B.fx)
x(A.DZ,B.dw)
x(A.adh,B.dq)
w(B.bx,[A.c3Q,A.c3R,A.c3N,A.c3H,A.c3I,A.c3J])
w(B.bS,[A.c3M,A.c3L,A.c3P,A.c3G,A.c3K])
x(A.c3O,B.cS)})()
B.bu(b.typeUniverse,JSON.parse('{"DZ":{"I":[],"e":[],"f":[]},"adh":{"a1":["DZ"]}}'))
var y={g:B.w("aB<t<ed>>"),k:B.w("r<ek>"),e:B.w("r<e>"),h:B.w("dy"),a:B.w("K?")};(function constants(){var x=a.makeConstList
C.aES=new B.iH(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
C.Ia=new A.FV(0,"recebidos")
C.aaD=new A.FV(1,"confirmados")
C.aaE=new A.FV(2,"concluidos")
C.bq8=x([C.Ia,C.aaD,C.aaE],B.w("r<FV>"))
C.bwq=x([D.qV],y.e)
C.bJu=new B.Ki(D.a0Z,null)
C.bMR=new B.fT(0,null,0,0,null,null,C.bJu,null)
C.c64=new B.A("Pedidos",null,D.jD,null,null,null,null,null,null,null,null)
C.abZ=new B.dF(D.bM,null,null,C.c64,null)
C.bUd=new B.c8(null,44,C.abZ,null)})()};
(a=>{a["GTQzqpETqwMwQVQKaPhqFP4CqYc="]=a.current})($__dart_deferred_initializers__);