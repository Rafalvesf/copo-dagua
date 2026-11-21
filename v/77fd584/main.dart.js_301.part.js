((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dcB(){return new C.DR(null)},
DR:function DR(d){this.a=d},
ad3:function ad3(){var _=this
_.z=_.y=_.x=_.w=$
_.Q=!1
_.d=$
_.c=_.a=null},
c3_:function c3_(d){this.a=d},
c30:function c30(d){this.a=d},
c33:function c33(d){this.a=d},
c32:function c32(d,e){this.a=d
this.b=e},
c34:function c34(d){this.a=d},
c31:function c31(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[24],C)
D=c[346]
C.DR.prototype={
P(){return new C.ad3()}}
C.ad3.prototype={
ga3_(){var x,w=this,v=w.w
if(v===$){x=w.gU().a1(0,$.b7(),y.e).b
x.toString
w.w!==$&&A.aT()
w.w=x
v=x}return v},
gafq(){var x=this.x
return x===$?this.x=this.ga3_().cx:x},
ga5x(){var x=this.y
return x===$?this.y=this.ga3_().cy:x},
ga1o(){var x,w,v=this,u=v.z
if(u===$){x=v.ga3_().db
x=x==null?null:B.i.k(x)
if(x==null)x=""
w=$.ad()
v.z!==$&&A.aT()
u=v.z=new A.aG(new A.bE(x,B.aJ,B.av),w)}return u},
m(){var x=this.ga1o()
x.a0$=$.ad()
x.V$=0
this.a8()},
St(){var x=0,w=A.n(y.q),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$St=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.q(new C.c3_(s))
p=s.ga1o().a.a
o=A.b4("[^0-9]",!0,!1,!1)
r=A.eG(A.b1(p,o,""),null)
q="Disponibilidade guardada."
u=4
p=s.gU().a1(0,$.yu().gaW(),y.w)
o=s.gafq()
n=s.ga5x()
x=7
return A.d(p.bzF(o,r!=null&&r>0&&r<=2000?r:null,n),$async$St)
case 7:u=2
x=6
break
case 4:u=3
l=t.pop()
q="N\xe3o foi poss\xedvel guardar. Tenta outra vez."
x=6
break
case 3:x=2
break
case 6:if(s.c==null){x=1
break}s.q(new C.c30(s))
s.c.R(y.v).f.a7(A.cB(null,null,null,null,null,B.z,null,A.i(q,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
if(J.p(q,"Disponibilidade guardada.")){p=s.c
p.toString
A.av(p,!1).lf()}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$St,w)},
aqI(d,e,f,g,h){var x=null,w=y.u
return new A.V(B.ef,A.Y(A.a([A.a9(A.G(A.a([A.i(e,x,x,x,B.aH,x,x,x),A.i(f,x,x,x,B.a6,x,x,x)],w),B.J,B.l,B.q,0,B.w),1),A.but(x,x,x,$.an,!1,B.a2,x,x,x,x,x,x,h,x,x,x,x,x,x,x,x,g)],w),B.x,B.l,B.q,0,x,x),x)},
u(d){var x=this,w=null,v=B.mL.B(0,new A.a0(0,A.au(d,B.bb,y.x).w.r.b,0,0)),u=A.X(22),t=y.u
u=A.a([A.F(w,A.G(A.a([x.aqI(B.jW,"Aceitar novos pedidos","Recebe pedidos de or\xe7amento dos clientes.",x.gafq(),new C.c33(x)),B.kZ,x.aqI(B.hc,"Desloca\xe7\xf5es","Dispon\xedvel para ir ao local do evento.",x.ga5x(),new C.c34(x))],t),B.x,B.l,B.q,0,B.w),B.r,w,w,new A.M(B.u,w,w,u,w,w,B.y),w,w,w,B.eg,w,w,w)],t)
if(x.ga5x())u.push(A.r2(w,x.ga1o(),w,"Ex.: 100",B.cH,"Dist\xe2ncia m\xe1xima de desloca\xe7\xe3o (km)",w,!1,20))
u.push(B.fj)
u.push(new A.r3("Guardar",x.gb8H(),x.Q,w))
return A.kd(w,B.af,A.bA(!0,A.d2(A.a([D.bJ_,new A.V(B.fx,A.G(u,B.I,B.l,B.q,0,B.w),w)],t),w,v,w,w,!1,B.a0,!1),w,B.Z,!1),w,!1,w,w)}}
var z=a.updateTypes(["E<~>()"])
C.c3_.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.c30.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.c33.prototype={
$1(d){var x=this.a
return x.q(new C.c32(x,d))},
$S:10}
C.c32.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.c34.prototype={
$1(d){var x=this.a
return x.q(new C.c31(x,d))},
$S:10}
C.c31.prototype={
$0(){return this.a.y=this.b},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.ad3.prototype,"gb8H","St",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.DR,A.ds)
x(C.ad3,A.di)
w(A.bN,[C.c3_,C.c30,C.c32,C.c31])
w(A.bv,[C.c33,C.c34])})()
A.bt(b.typeUniverse,JSON.parse('{"DR":{"I":[],"e":[],"f":[]},"ad3":{"a1":["DR"]}}'))
var y={e:A.w("cw"),u:A.w("r<e>"),x:A.w("dk"),w:A.w("p2"),v:A.w("dF"),q:A.w("~")};(function constants(){D.bJ_=new A.kb("Disponibilidade",null,!0,null,20,!0,null)})()};
(a=>{a["B7ZA0XDGYP2mH4FWYwl0v/VPNbc="]=a.current})($__dart_deferred_initializers__);