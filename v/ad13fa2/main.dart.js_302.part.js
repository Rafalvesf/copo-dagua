((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
d0X(){return new C.CG(null)},
CG:function CG(d){this.a=d},
aay:function aay(){var _=this
_.z=_.y=_.x=_.w=$
_.Q=!1
_.d=$
_.c=_.a=null},
bWB:function bWB(d){this.a=d},
bWC:function bWC(d){this.a=d},
bWF:function bWF(d){this.a=d},
bWE:function bWE(d,e){this.a=d
this.b=e},
bWG:function bWG(d){this.a=d},
bWD:function bWD(d,e){this.a=d
this.b=e}},D,E
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[24],C)
D=c[341]
E=c[297]
C.CG.prototype={
R(){return new C.aay()}}
C.aay.prototype={
ga1d(){var x,w=this,v=w.w
if(v===$){x=w.gU().a2(0,$.be(),y.e).b
x.toString
w.w!==$&&A.aT()
w.w=x
v=x}return v},
gad6(){var x=this.x
return x===$?this.x=this.ga1d().cx:x},
ga3H(){var x=this.y
return x===$?this.y=this.ga1d().cy:x},
ga_D(){var x,w,v=this,u=v.z
if(u===$){x=v.ga1d().db
x=x==null?null:B.i.k(x)
if(x==null)x=""
w=$.ah()
v.z!==$&&A.aT()
u=v.z=new A.aP(new A.bK(x,B.aS,B.aD),w)}return u},
m(){var x=this.ga_D()
x.a0$=$.ah()
x.V$=0
this.aa()},
QY(){var x=0,w=A.n(y.q),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$QY=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.q(new C.bWB(s))
p=s.ga_D().a.a
o=A.bf("[^0-9]",!0,!1,!1)
r=A.f_(A.b9(p,o,""),null)
q="Disponibilidade guardada."
u=4
p=s.gU().a2(0,$.xm().gaV(),y.w)
o=s.gad6()
n=s.ga3H()
x=7
return A.d(p.buN(o,r!=null&&r>0&&r<=2000?r:null,n),$async$QY)
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
break}s.q(new C.bWC(s))
s.c.S(y.v).f.ad(A.cH(null,null,null,null,null,B.D,null,A.i(q,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
if(J.o(q,"Disponibilidade guardada.")){p=s.c
p.toString
A.aB(p,!1).qs()}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$QY,w)},
ao7(d,e,f,g,h){var x=null,w=y.u
return new A.a_(B.hl,A.Z(A.a([A.aK(d,B.L,x,x,20),B.aj,A.ac(A.J(A.a([A.i(e,x,x,x,E.xM,x,x,x),A.i(f,x,x,x,B.az,x,x,x)],w),B.I,B.m,B.q,0,B.w),1),A.bpQ(x,x,x,$.a9,!1,B.Y,x,x,x,x,x,x,h,x,x,x,x,x,x,x,x,g)],w),B.x,B.m,B.q,0,x,x),x)},
u(d){var x=this,w=null,v=B.mj.B(0,new A.Y(0,A.at(d,B.ba,y.x).w.r.b,0,0)),u=A.T(20),t=y.u
u=A.a([A.E(w,A.J(A.a([x.ao7(B.iS,"Aceitar novos pedidos","Recebe pedidos de or\xe7amento dos clientes.",x.gad6(),new C.bWF(x)),B.oW,x.ao7(B.h2,"Desloca\xe7\xf5es","Dispon\xedvel para ir ao local do evento.",x.ga3H(),new C.bWG(x))],t),B.x,B.m,B.q,0,B.w),B.t,w,w,new A.L(B.ag,w,w,u,w,w,B.y),w,w,w,w,B.mn,w,w,w)],t)
if(x.ga3H())u.push(A.nm(w,x.ga_D(),w,"Ex.: 100",B.db,"Dist\xe2ncia m\xe1xima de desloca\xe7\xe3o (km)",w,!1,20))
u.push(B.fj)
u.push(new A.pk("Guardar",x.gb4u(),x.Q,w))
return A.ke(w,B.ag,A.bp(!0,A.cO(A.a([D.bCa,new A.a_(B.fV,A.J(u,B.R,B.m,B.q,0,B.w),w)],t),w,v,w,w,!1,B.Z,!1),w,B.V,!1),w,!1,w,w)}}
var z=a.updateTypes(["H<~>()"])
C.bWB.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bWC.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.bWF.prototype={
$1(d){var x=this.a
return x.q(new C.bWE(x,d))},
$S:10}
C.bWE.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.bWG.prototype={
$1(d){var x=this.a
return x.q(new C.bWD(x,d))},
$S:10}
C.bWD.prototype={
$0(){return this.a.y=this.b},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.aay.prototype,"gb4u","QY",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.CG,A.dx)
x(C.aay,A.dt)
w(A.bI,[C.bWB,C.bWC,C.bWE,C.bWD])
w(A.bv,[C.bWF,C.bWG])})()
A.bx(b.typeUniverse,JSON.parse('{"CG":{"G":[],"e":[],"f":[]},"aay":{"a0":["CG"]}}'))
var y={e:A.v("cC"),u:A.v("q<e>"),x:A.v("d8"),w:A.v("oJ"),v:A.v("dB"),q:A.v("~")};(function constants(){D.bCa=new A.hi("Disponibilidade",null,!0,null,34,20,!0,null)})()};
(a=>{a["jxQfbODpR8TU6mcRN7HHzXcWqyw="]=a.current})($__dart_deferred_initializers__);