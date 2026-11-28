((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
drc(d){return new A.EU(d,null)},
dyq(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
d81(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.pw||x===C.px
case 1:x=d.y
return x===C.kf||x===C.fk
case 2:return d.y===C.hY}},
GS:function GS(d,e){this.a=d
this.b=e},
EU:function EU(d,e){this.d=d
this.a=e},
afp:function afp(){var _=this
_.d=_.w=$
_.c=_.a=null},
cd1:function cd1(d){this.a=d},
cd2:function cd2(d){this.a=d},
ccY:function ccY(d,e){this.a=d
this.b=e},
ccX:function ccX(d,e){this.a=d
this.b=e},
cd0:function cd0(){},
cd_:function cd_(d){this.a=d},
ccS:function ccS(d){this.a=d},
ccZ:function ccZ(d,e){this.a=d
this.b=e},
ccT:function ccT(){},
ccU:function ccU(){},
ccV:function ccV(){},
ccW:function ccW(d,e){this.a=d
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
P(){return new A.afp()}}
A.afp.prototype={
gapk(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.acs
break
case"concluidos":x=D.act
break
default:x=D.Js
break}w=this.w=x}return w},
b7X(d){return A.d81(d,this.gapk())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().H($.uA().$1(s),y.g),q=r.gv(r),p=new A.cd1(q==null?C.xv:q),o=B.aw(d,C.b2,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bsV[x]
v=A.dyq(w)
u=w===D.Js?p.$1(w):s
n.push(new B.ek(v,t.gapk()===w,u,new A.ccY(t,w),s))}v=y.e
n=B.a([D.bYp,new E.m4(n,16,!1,s)],v)
C.e.n(n,B.hn(r,new A.ccZ(t,d),new A.cd_(t),new A.cd0(),!1,!0,!1))
return B.cO(s,C.cT,new B.bD(C.aA,s,C.aH,C.z,B.a([B.cX(n,s,new B.a0(20,o.r.b+12,20,140),s,s,!1,C.a2,!1),D.bQw],v),s),!0,s)}}
var z=a.updateTypes(["x(e1)","v(GS)"])
A.cd1.prototype={
$1(d){return J.d2(this.a,new A.cd2(d)).gA(0)},
$S:z+1}
A.cd2.prototype={
$1(d){return A.d81(d,this.a)},
$S:51}
A.ccY.prototype={
$0(){var x=this.a
return x.p(new A.ccX(x,this.b))},
$S:0}
A.ccX.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cd0.prototype={
$0(){return D.bw9},
$S:79}
A.cd_.prototype={
$2(d,e){return B.a([new B.je("N\xe3o foi poss\xedvel carregar.",new A.ccS(this.a),null)],y.e)},
$S:1503}
A.ccS.prototype={
$0(){return this.a.gS().aj($.uA().$1(null))},
$S:0}
A.ccZ.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.c5(d),q=r.cz(d,this.a.gb7W()),p=B.U(q,q.$ti.i("z.E")),o=r.cz(d,new A.ccT()).gA(0),n=r.cz(d,new A.ccU()).gA(0),m=r.cz(d,new A.ccV()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.vf(new B.Q(C.ks,B.eb(C.bf,B.a([new B.ew(""+n+" por responder",C.hE,s),new B.ew(""+m+" "+q,C.ex,s)],x),C.r,C.bn,8,8),s),s,"Pedidos recebidos",C.hG,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aHx)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.J)(p),++u){t=p[u]
q.push(new F.a7G(t,new A.ccW(v,t),!0,s))}return B.a([r,B.fb(q,16)],x)},
$S:1504}
A.ccT.prototype={
$1(d){return d.at},
$S:51}
A.ccU.prototype={
$1(d){return d.y===C.pw&&!d.ax},
$S:51}
A.ccV.prototype={
$1(d){return d.ax&&d.y===C.px},
$S:51}
A.ccW.prototype={
$0(){var x=this.b
return B.ai(this.a).ap("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.afp.prototype,"gb7W","b7X",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GS,B.f6)
x(A.EU,B.dB)
x(A.afp,B.dx)
w(B.bw,[A.cd1,A.cd2,A.ccZ,A.ccT,A.ccU,A.ccV])
w(B.bR,[A.ccY,A.ccX,A.cd0,A.ccS,A.ccW])
x(A.cd_,B.cQ)})()
B.bp(b.typeUniverse,JSON.parse('{"EU":{"G":[],"e":[],"f":[]},"afp":{"a_":["EU"]}}'))
var y={g:B.w("ay<t<e1>>"),k:B.w("r<ek>"),e:B.w("r<e>"),h:B.w("dg"),a:B.w("K?")};(function constants(){var x=a.makeConstList
D.aHx=new B.i9(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.Js=new A.GS(0,"recebidos")
D.acs=new A.GS(1,"confirmados")
D.act=new A.GS(2,"concluidos")
D.bsV=x([D.Js,D.acs,D.act],B.w("r<GS>"))
D.bw9=x([C.a2k],y.e)
D.bN5=new B.Lf(C.a2v,null)
D.bQw=new B.eZ(0,null,0,0,null,null,D.bN5,null)
D.caT=new B.C("Pedidos",null,C.hi,null,null,null,null,null,null,null,null)
D.adN=new B.d0(C.bh,null,null,D.caT,null)
D.bYp=new B.c4(null,44,D.adN,null)})()};
(a=>{a["m7TJVxQm3Cf7urvz14AUWEyIESs="]=a.current})($__dart_deferred_initializers__);