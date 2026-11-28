((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dtA(d){return new A.F0(d,null)},
dAQ(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dal(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.pG||x===C.pH
case 1:x=d.y
return x===C.kp||x===C.fm
case 2:return d.y===C.i2}},
GY:function GY(d,e){this.a=d
this.b=e},
F0:function F0(d,e){this.d=d
this.a=e},
afC:function afC(){var _=this
_.d=_.w=$
_.c=_.a=null},
ce5:function ce5(d){this.a=d},
ce6:function ce6(d){this.a=d},
ce1:function ce1(d,e){this.a=d
this.b=e},
ce0:function ce0(d,e){this.a=d
this.b=e},
ce4:function ce4(){},
ce3:function ce3(d){this.a=d},
cdW:function cdW(d){this.a=d},
ce2:function ce2(d,e){this.a=d
this.b=e},
cdX:function cdX(){},
cdY:function cdY(){},
cdZ:function cdZ(){},
ce_:function ce_(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[188]
A=a.updateHolder(c[33],A)
D=c[351]
F=c[103]
A.GY.prototype={
I(){return"_BookingSegment."+this.b}}
A.F0.prototype={
P(){return new A.afC()}}
A.afC.prototype={
gapP(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.acz
break
case"concluidos":x=D.acA
break
default:x=D.JB
break}w=this.w=x}return w},
b8u(d){return A.dal(d,this.gapP())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().H($.rQ().$1(s),y.g),q=r.gv(r),p=new A.ce5(q==null?C.xH:q),o=B.ax(d,C.b4,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bsY[x]
v=A.dAQ(w)
u=w===D.JB?p.$1(w):s
n.push(new B.el(v,t.gapP()===w,u,new A.ce1(t,w),s))}v=y.e
n=B.a([D.bYy,new E.m4(n,16,!1,s)],v)
C.e.n(n,B.hq(r,new A.ce2(t,d),new A.ce3(t),new A.ce4(),!1,!0,!1))
return B.cP(s,C.cY,new B.bD(C.az,s,C.aG,C.z,B.a([B.d0(n,s,new B.a2(20,o.r.b+12,20,140),s,s,!1,C.a3,!1),D.bQA],v),s),!0,s)}}
var z=a.updateTypes(["x(e3)","v(GY)"])
A.ce5.prototype={
$1(d){return J.d7(this.a,new A.ce6(d)).gA(0)},
$S:z+1}
A.ce6.prototype={
$1(d){return A.dal(d,this.a)},
$S:52}
A.ce1.prototype={
$0(){var x=this.a
return x.p(new A.ce0(x,this.b))},
$S:0}
A.ce0.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ce4.prototype={
$0(){return D.bwc},
$S:78}
A.ce3.prototype={
$2(d,e){return B.a([new B.jf("N\xe3o foi poss\xedvel carregar.",new A.cdW(this.a),null)],y.e)},
$S:1506}
A.cdW.prototype={
$0(){return this.a.gS().aj($.rQ().$1(null))},
$S:0}
A.ce2.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.cb(d),q=r.cW(d,this.a.gb8t()),p=B.U(q,q.$ti.i("A.E")),o=r.cW(d,new A.cdX()).gA(0),n=r.cW(d,new A.cdY()).gA(0),m=r.cW(d,new A.cdZ()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.vh(new B.Q(C.jF,B.e1(C.bf,B.a([new B.ex(""+n+" por responder",C.hJ,s),new B.ex(""+m+" "+q,C.ez,s)],x),C.r,C.bl,8,8),s),s,"Pedidos recebidos",C.hL,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aHA)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.H)(p),++u){t=p[u]
q.push(new F.a7T(t,new A.ce_(v,t),!0,s))}return B.a([r,B.fc(q,16)],x)},
$S:1507}
A.cdX.prototype={
$1(d){return d.at},
$S:52}
A.cdY.prototype={
$1(d){return d.y===C.pG&&!d.ax},
$S:52}
A.cdZ.prototype={
$1(d){return d.ax&&d.y===C.pH},
$S:52}
A.ce_.prototype={
$0(){var x=this.b
return B.ah(this.a).av("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.afC.prototype,"gb8t","b8u",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GY,B.f8)
x(A.F0,B.dD)
x(A.afC,B.dz)
w(B.by,[A.ce5,A.ce6,A.ce2,A.cdX,A.cdY,A.cdZ])
w(B.bR,[A.ce1,A.ce0,A.ce4,A.cdW,A.ce_])
x(A.ce3,B.cN)})()
B.bq(b.typeUniverse,JSON.parse('{"F0":{"G":[],"e":[],"f":[]},"afC":{"Y":["F0"]}}'))
var y={g:B.w("ay<t<e3>>"),k:B.w("r<el>"),e:B.w("r<e>"),h:B.w("df"),a:B.w("K?")};(function constants(){var x=a.makeConstList
D.aHA=new B.i8(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.JB=new A.GY(0,"recebidos")
D.acz=new A.GY(1,"confirmados")
D.acA=new A.GY(2,"concluidos")
D.bsY=x([D.JB,D.acz,D.acA],B.w("r<GY>"))
D.bwc=x([C.a2v],y.e)
D.bN9=new B.Lk(C.a2F,null)
D.bQA=new B.eM(0,null,0,0,null,null,D.bN9,null)
D.cb4=new B.D("Pedidos",null,C.hm,null,null,null,null,null,null,null,null)
D.adS=new B.cZ(C.bg,null,null,D.cb4,null)
D.bYy=new B.c_(null,44,D.adS,null)})()};
(a=>{a["1tg9i2uIlrTifPX9tEMZJaLL2Zk="]=a.current})($__dart_deferred_initializers__);