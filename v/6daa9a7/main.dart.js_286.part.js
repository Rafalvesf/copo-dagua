((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dlk(){return new C.Ey(null)},
Ey:function Ey(d){this.a=d},
ae9:function ae9(){var _=this
_.z=_.y=_.x=_.w=$
_.Q=!1
_.d=$
_.c=_.a=null},
c8R:function c8R(d){this.a=d},
c8S:function c8S(d){this.a=d},
c8V:function c8V(d){this.a=d},
c8U:function c8U(d,e){this.a=d
this.b=e},
c8W:function c8W(d){this.a=d},
c8T:function c8T(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[25],C)
D=c[342]
C.Ey.prototype={
R(){return new C.ae9()}}
C.ae9.prototype={
ga3x(){var x,w=this,v=w.w
if(v===$){x=w.gT().a1(0,$.b8(),y.e).b
x.toString
w.w!==$&&A.aY()
w.w=x
v=x}return v},
gag3(){var x=this.x
return x===$?this.x=this.ga3x().cx:x},
ga64(){var x=this.y
return x===$?this.y=this.ga3x().cy:x},
ga1V(){var x,w,v=this,u=v.z
if(u===$){x=v.ga3x().db
x=x==null?null:B.i.k(x)
if(x==null)x=""
w=$.ad()
v.z!==$&&A.aY()
u=v.z=new A.aI(new A.bD(x,B.aJ,B.aA),w)}return u},
m(){var x=this.ga1V()
x.Z$=$.ad()
x.X$=0
this.a8()},
SU(){var x=0,w=A.n(y.q),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$SU=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.q(new C.c8R(s))
p=s.ga1V().a.a
o=A.aV("[^0-9]",!0,!1,!1)
r=A.eC(A.b_(p,o,""),null)
q="Disponibilidade guardada."
u=4
p=s.gT().a1(0,$.yW().gaV(),y.w)
o=s.gag3()
n=s.ga64()
x=7
return A.d(p.bBp(o,r!=null&&r>0&&r<=2000?r:null,n),$async$SU)
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
break}s.q(new C.c8S(s))
s.c.O(y.v).f.a4(A.cz(null,null,null,null,null,B.z,null,A.i(q,null,null,null,null,null,null,null,null),null,B.W,null,null,null,null,null,null,null,null,null,null))
if(J.o(q,"Disponibilidade guardada.")){p=s.c
p.toString
A.as(p,!1).jU()}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SU,w)},
arA(d,e,f,g,h){var x=null,w=y.u
return new A.Q(B.cu,A.R(A.a([A.a6(A.B(A.a([A.i(e,x,x,x,x,B.ap,x,x,x),A.i(f,x,x,x,x,B.Z,x,x,x)],w),B.I,B.j,B.o,0,B.v),1),A.bxH(x,x,x,$.ap,!1,B.a3,x,x,x,x,x,x,h,x,x,x,x,x,x,x,x,g)],w),B.x,B.j,B.o,0,x,x),x)},
u(d){var x=this,w=null,v=B.n7.B(0,new A.a0(0,A.aw(d,B.b7,y.x).w.r.b,0,0)),u=A.a2(22),t=y.u
u=A.a([A.C(w,A.B(A.a([x.arA(B.kp,"Aceitar novos pedidos","Recebe pedidos de or\xe7amento dos clientes.",x.gag3(),new C.c8V(x)),B.pU,x.arA(B.hZ,"Desloca\xe7\xf5es","Dispon\xedvel para ir ao local do evento.",x.ga64(),new C.c8W(x))],t),B.x,B.j,B.o,0,B.v),B.r,w,w,new A.O(B.u,w,w,u,w,w,B.y),w,w,w,B.e4,w,w,w)],t)
if(x.ga64())u.push(A.q4(w,x.ga1V(),w,"Ex.: 100",B.cC,"Dist\xe2ncia m\xe1xima de desloca\xe7\xe3o (km)",w,!1,20))
u.push(B.fu)
u.push(new A.rz("Guardar",x.gbad(),x.Q,w))
return A.kq(w,B.a8,A.bG(!0,A.d5(A.a([D.bKg,new A.Q(B.fI,A.B(u,B.J,B.j,B.o,0,B.v),w)],t),w,v,w,w,!1,B.a1,!1),w,B.a_,!1),w,!1,w,w)}}
var z=a.updateTypes(["F<~>()"])
C.c8R.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.c8S.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.c8V.prototype={
$1(d){var x=this.a
return x.q(new C.c8U(x,d))},
$S:10}
C.c8U.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.c8W.prototype={
$1(d){var x=this.a
return x.q(new C.c8T(x,d))},
$S:10}
C.c8T.prototype={
$0(){return this.a.y=this.b},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.ae9.prototype,"gbad","SU",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Ey,A.dD)
x(C.ae9,A.dv)
w(A.bR,[C.c8R,C.c8S,C.c8U,C.c8T])
w(A.bx,[C.c8V,C.c8W])})()
A.bu(b.typeUniverse,JSON.parse('{"Ey":{"I":[],"e":[],"f":[]},"ae9":{"a1":["Ey"]}}'))
var y={e:A.w("cG"),u:A.w("t<e>"),x:A.w("dx"),w:A.w("pm"),v:A.w("dA"),q:A.w("~")};(function constants(){D.bKg=new A.la("Disponibilidade",null,!0,null,20,!0,null)})()};
(a=>{a["hx+NYmVMgh/2iLzNx0R0A/wg5W8="]=a.current})($__dart_deferred_initializers__);