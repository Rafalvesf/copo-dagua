((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dr2(d){return new A.EU(d,null)},
dyg(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
d7T(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.pv||x===C.pw
case 1:x=d.y
return x===C.kf||x===C.fk
case 2:return d.y===C.hY}},
GS:function GS(d,e){this.a=d
this.b=e},
EU:function EU(d,e){this.d=d
this.a=e},
afo:function afo(){var _=this
_.d=_.w=$
_.c=_.a=null},
ccU:function ccU(d){this.a=d},
ccV:function ccV(d){this.a=d},
ccQ:function ccQ(d,e){this.a=d
this.b=e},
ccP:function ccP(d,e){this.a=d
this.b=e},
ccT:function ccT(){},
ccS:function ccS(d){this.a=d},
ccK:function ccK(d){this.a=d},
ccR:function ccR(d,e){this.a=d
this.b=e},
ccL:function ccL(){},
ccM:function ccM(){},
ccN:function ccN(){},
ccO:function ccO(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[186]
A=a.updateHolder(c[33],A)
D=c[347]
F=c[104]
A.GS.prototype={
I(){return"_BookingSegment."+this.b}}
A.EU.prototype={
P(){return new A.afo()}}
A.afo.prototype={
gaph(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.acq
break
case"concluidos":x=D.acr
break
default:x=D.Js
break}w=this.w=x}return w},
b7T(d){return A.d7T(d,this.gaph())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().H($.uz().$1(s),y.g),q=r.gv(r),p=new A.ccU(q==null?C.xv:q),o=B.aw(d,C.b2,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bsT[x]
v=A.dyg(w)
u=w===D.Js?p.$1(w):s
n.push(new B.ek(v,t.gaph()===w,u,new A.ccQ(t,w),s))}v=y.e
n=B.a([D.bYn,new E.m4(n,16,!1,s)],v)
C.e.n(n,B.hn(r,new A.ccR(t,d),new A.ccS(t),new A.ccT(),!1,!0,!1))
return B.cO(s,C.cT,new B.bD(C.aA,s,C.aH,C.z,B.a([B.cX(n,s,new B.a0(20,o.r.b+12,20,140),s,s,!1,C.a2,!1),D.bQv],v),s),!0,s)}}
var z=a.updateTypes(["x(e1)","v(GS)"])
A.ccU.prototype={
$1(d){return J.d5(this.a,new A.ccV(d)).gA(0)},
$S:z+1}
A.ccV.prototype={
$1(d){return A.d7T(d,this.a)},
$S:51}
A.ccQ.prototype={
$0(){var x=this.a
return x.q(new A.ccP(x,this.b))},
$S:0}
A.ccP.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ccT.prototype={
$0(){return D.bw7},
$S:77}
A.ccS.prototype={
$2(d,e){return B.a([new B.jd("N\xe3o foi poss\xedvel carregar.",new A.ccK(this.a),null)],y.e)},
$S:1503}
A.ccK.prototype={
$0(){return this.a.gS().ai($.uz().$1(null))},
$S:0}
A.ccR.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.c5(d),q=r.cz(d,this.a.gb7S()),p=B.U(q,q.$ti.i("z.E")),o=r.cz(d,new A.ccL()).gA(0),n=r.cz(d,new A.ccM()).gA(0),m=r.cz(d,new A.ccN()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.ve(new B.Q(C.ks,B.eb(C.bf,B.a([new B.ew(""+n+" por responder",C.hD,s),new B.ew(""+m+" "+q,C.ex,s)],x),C.r,C.bn,8,8),s),s,"Pedidos recebidos",C.hG,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aHv)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.J)(p),++u){t=p[u]
q.push(new F.a7F(t,new A.ccO(v,t),!0,s))}return B.a([r,B.fb(q,16)],x)},
$S:1504}
A.ccL.prototype={
$1(d){return d.at},
$S:51}
A.ccM.prototype={
$1(d){return d.y===C.pv&&!d.ax},
$S:51}
A.ccN.prototype={
$1(d){return d.ax&&d.y===C.pw},
$S:51}
A.ccO.prototype={
$0(){var x=this.b
return B.ai(this.a).ap("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.afo.prototype,"gb7S","b7T",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GS,B.f6)
x(A.EU,B.dB)
x(A.afo,B.dx)
w(B.bw,[A.ccU,A.ccV,A.ccR,A.ccL,A.ccM,A.ccN])
w(B.bS,[A.ccQ,A.ccP,A.ccT,A.ccK,A.ccO])
x(A.ccS,B.cQ)})()
B.bp(b.typeUniverse,JSON.parse('{"EU":{"G":[],"e":[],"f":[]},"afo":{"a_":["EU"]}}'))
var y={g:B.w("ay<t<e1>>"),k:B.w("r<ek>"),e:B.w("r<e>"),h:B.w("dg"),a:B.w("K?")};(function constants(){var x=a.makeConstList
D.aHv=new B.i9(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.Js=new A.GS(0,"recebidos")
D.acq=new A.GS(1,"confirmados")
D.acr=new A.GS(2,"concluidos")
D.bsT=x([D.Js,D.acq,D.acr],B.w("r<GS>"))
D.bw7=x([C.a2j],y.e)
D.bN4=new B.Lf(C.a2u,null)
D.bQv=new B.eZ(0,null,0,0,null,null,D.bN4,null)
D.caQ=new B.C("Pedidos",null,C.hh,null,null,null,null,null,null,null,null)
D.adL=new B.d0(C.bh,null,null,D.caQ,null)
D.bYn=new B.c4(null,44,D.adL,null)})()};
(a=>{a["XB/Rooa3qOSE3WlqvBsWepfj6Wo="]=a.current})($__dart_deferred_initializers__);