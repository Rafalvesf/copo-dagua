((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dfd(){return new C.DY(null)},
DY:function DY(d){this.a=d},
adg:function adg(){var _=this
_.z=_.y=_.x=_.w=$
_.Q=!1
_.d=$
_.c=_.a=null},
c3A:function c3A(d){this.a=d},
c3B:function c3B(d){this.a=d},
c3E:function c3E(d){this.a=d},
c3D:function c3D(d,e){this.a=d
this.b=e},
c3F:function c3F(d){this.a=d},
c3C:function c3C(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[24],C)
D=c[333]
C.DY.prototype={
S(){return new C.adg()}}
C.adg.prototype={
ga3d(){var x,w=this,v=w.w
if(v===$){x=w.gU().a2(0,$.bb(),y.e).b
x.toString
w.w!==$&&A.aV()
w.w=x
v=x}return v},
gafI(){var x=this.x
return x===$?this.x=this.ga3d().cx:x},
ga5N(){var x=this.y
return x===$?this.y=this.ga3d().cy:x},
ga1A(){var x,w,v=this,u=v.z
if(u===$){x=v.ga3d().db
x=x==null?null:B.i.k(x)
if(x==null)x=""
w=$.ae()
v.z!==$&&A.aV()
u=v.z=new A.aH(new A.bG(x,B.aK,B.aA),w)}return u},
m(){var x=this.ga1A()
x.a0$=$.ae()
x.W$=0
this.aa()},
SB(){var x=0,w=A.n(y.q),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$SB=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.q(new C.c3A(s))
p=s.ga1A().a.a
o=A.b5("[^0-9]",!0,!1,!1)
r=A.eH(A.b1(p,o,""),null)
q="Disponibilidade guardada."
u=4
p=s.gU().a2(0,$.yz().gaU(),y.w)
o=s.gafI()
n=s.ga5N()
x=7
return A.d(p.bAq(o,r!=null&&r>0&&r<=2000?r:null,n),$async$SB)
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
break}s.q(new C.c3B(s))
s.c.R(y.v).f.a5(A.cA(null,null,null,null,null,B.A,null,A.i(q,null,null,null,null,null,null,null,null),null,B.X,null,null,null,null,null,null,null,null,null,null))
if(J.o(q,"Disponibilidade guardada.")){p=s.c
p.toString
A.at(p,!1).lg()}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SB,w)},
ar2(d,e,f,g,h){var x=null,w=y.u
return new A.T(B.e1,A.S(A.a([A.a7(A.E(A.a([A.i(e,x,x,x,x,B.aD,x,x,x),A.i(f,x,x,x,x,B.a3,x,x,x)],w),B.I,B.k,B.p,0,B.w),1),A.buW(x,x,x,$.aj,!1,B.a1,x,x,x,x,x,x,h,x,x,x,x,x,x,x,x,g)],w),B.x,B.k,B.p,0,x,x),x)},
u(d){var x=this,w=null,v=B.mP.B(0,new A.a0(0,A.av(d,B.bb,y.x).w.r.b,0,0)),u=A.X(22),t=y.u
u=A.a([A.C(w,A.E(A.a([x.ar2(B.k2,"Aceitar novos pedidos","Recebe pedidos de or\xe7amento dos clientes.",x.gafI(),new C.c3E(x)),B.l1,x.ar2(B.hh,"Desloca\xe7\xf5es","Dispon\xedvel para ir ao local do evento.",x.ga5N(),new C.c3F(x))],t),B.x,B.k,B.p,0,B.w),B.r,w,w,new A.L(B.u,w,w,u,w,w,B.y),w,w,w,B.e2,w,w,w)],t)
if(x.ga5N())u.push(A.r6(w,x.ga1A(),w,"Ex.: 100",B.cL,"Dist\xe2ncia m\xe1xima de desloca\xe7\xe3o (km)",w,!1,20))
u.push(B.fm)
u.push(new A.r7("Guardar",x.gb9c(),x.Q,w))
return A.kf(w,B.ag,A.bE(!0,A.d5(A.a([D.bJf,new A.T(B.hD,A.E(u,B.J,B.k,B.p,0,B.w),w)],t),w,v,w,w,!1,B.a2,!1),w,B.Z,!1),w,!1,w,w)}}
var z=a.updateTypes(["G<~>()"])
C.c3A.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.c3B.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.c3E.prototype={
$1(d){var x=this.a
return x.q(new C.c3D(x,d))},
$S:10}
C.c3D.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.c3F.prototype={
$1(d){var x=this.a
return x.q(new C.c3C(x,d))},
$S:10}
C.c3C.prototype={
$0(){return this.a.y=this.b},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.adg.prototype,"gb9c","SB",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.DY,A.dw)
x(C.adg,A.dq)
w(A.bS,[C.c3A,C.c3B,C.c3D,C.c3C])
w(A.bx,[C.c3E,C.c3F])})()
A.bu(b.typeUniverse,JSON.parse('{"DY":{"I":[],"e":[],"f":[]},"adg":{"a1":["DY"]}}'))
var y={e:A.w("cw"),u:A.w("r<e>"),x:A.w("dy"),w:A.w("p3"),v:A.w("dJ"),q:A.w("~")};(function constants(){D.bJf=new A.kE("Disponibilidade",null,!0,null,20,!0,null)})()};
(a=>{a["RZcMzaHpOINYaEPKouBQZMc9M5E="]=a.current})($__dart_deferred_initializers__);