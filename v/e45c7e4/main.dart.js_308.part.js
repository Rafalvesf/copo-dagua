((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dpf(){return new C.EP(null)},
EP:function EP(d){this.a=d},
af1:function af1(){var _=this
_.z=_.y=_.x=_.w=$
_.Q=!1
_.d=$
_.c=_.a=null},
cbD:function cbD(d){this.a=d},
cbE:function cbE(d){this.a=d},
cbH:function cbH(d){this.a=d},
cbG:function cbG(d,e){this.a=d
this.b=e},
cbI:function cbI(d){this.a=d},
cbF:function cbF(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[27],C)
D=c[353]
C.EP.prototype={
P(){return new C.af1()}}
C.af1.prototype={
ga44(){var x,w=this,v=w.w
if(v===$){x=w.gT().a1(0,$.b8(),y.e).b
x.toString
w.w!==$&&A.aX()
w.w=x
v=x}return v},
gagD(){var x=this.x
return x===$?this.x=this.ga44().cx:x},
ga6E(){var x=this.y
return x===$?this.y=this.ga44().cy:x},
ga2s(){var x,w,v=this,u=v.z
if(u===$){x=v.ga44().db
x=x==null?null:B.i.k(x)
if(x==null)x=""
w=$.ac()
v.z!==$&&A.aX()
u=v.z=new A.aI(new A.bJ(x,B.aK,B.aC),w)}return u},
m(){var x=this.ga2s()
x.Z$=$.ac()
x.X$=0
this.a7()},
Tn(){var x=0,w=A.n(y.q),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Tn=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.q(new C.cbD(s))
p=s.ga2s().a.a
o=A.aW("[^0-9]",!0,!1,!1)
r=A.eH(A.b0(p,o,""),null)
q="Disponibilidade guardada."
u=4
p=s.gT().a1(0,$.zg().gaX(),y.w)
o=s.gagD()
n=s.ga6E()
x=7
return A.d(p.bCR(o,r!=null&&r>0&&r<=2000?r:null,n),$async$Tn)
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
break}s.q(new C.cbE(s))
s.c.O(y.v).f.a4(A.cA(null,null,null,null,null,B.z,null,A.i(q,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
if(J.o(q,"Disponibilidade guardada.")){p=s.c
p.toString
A.aq(p,!1).iz()}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Tn,w)},
asd(d,e,f,g,h){var x=null,w=y.u
return new A.R(B.cr,A.Q(A.a([A.a6(A.B(A.a([A.i(e,x,x,x,x,B.ao,x,x,x),A.i(f,x,x,x,x,B.W,x,x,x)],w),B.H,B.j,B.m,0,B.v),1),A.bzV(x,x,x,$.ap,!1,B.a2,x,x,x,x,x,x,h,x,x,x,x,x,x,x,x,g)],w),B.w,B.j,B.m,0,x,x),x)},
u(d){var x=this,w=null,v=B.nh.B(0,new A.a2(0,A.aw(d,B.b5,y.x).w.r.b,0,0)),u=A.a0(22),t=y.u
u=A.a([A.D(w,A.B(A.a([x.asd(B.kx,"Aceitar novos pedidos","Recebe pedidos de or\xe7amento dos clientes.",x.gagD(),new C.cbH(x)),B.nb,x.asd(B.i3,"Desloca\xe7\xf5es","Dispon\xedvel para ir ao local do evento.",x.ga6E(),new C.cbI(x))],t),B.w,B.j,B.m,0,B.v),B.r,w,w,new A.O(B.t,w,w,u,w,w,B.y),w,w,w,B.e9,w,w,w)],t)
if(x.ga6E())u.push(A.qf(w,x.ga2s(),w,"Ex.: 100",B.cF,"Dist\xe2ncia m\xe1xima de desloca\xe7\xe3o (km)",w,!1,20))
u.push(B.fy)
u.push(new A.rL("Guardar",x.gbbs(),x.Q,w))
return A.kr(w,B.ac,A.bE(!0,A.cZ(A.a([D.bM4,new A.R(B.fP,A.B(u,B.J,B.j,B.m,0,B.v),w)],t),w,v,w,w,!1,B.a1,!1),w,B.a_,!1),w,!1,w,w)}}
var z=a.updateTypes(["F<~>()"])
C.cbD.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.cbE.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.cbH.prototype={
$1(d){var x=this.a
return x.q(new C.cbG(x,d))},
$S:10}
C.cbG.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.cbI.prototype={
$1(d){var x=this.a
return x.q(new C.cbF(x,d))},
$S:10}
C.cbF.prototype={
$0(){return this.a.y=this.b},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.af1.prototype,"gbbs","Tn",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.EP,A.dD)
x(C.af1,A.dy)
w(A.bR,[C.cbD,C.cbE,C.cbG,C.cbF])
w(A.bx,[C.cbH,C.cbI])})()
A.br(b.typeUniverse,JSON.parse('{"EP":{"J":[],"e":[],"f":[]},"af1":{"a_":["EP"]}}'))
var y={e:A.w("cG"),u:A.w("r<e>"),x:A.w("dn"),w:A.w("pw"),v:A.w("ds"),q:A.w("~")};(function constants(){D.bM4=new A.lG("Disponibilidade",null,!0,null,20,!0,null)})()};
(a=>{a["jpAE9UyCTanMx5M8cK7o0E/lSCc="]=a.current})($__dart_deferred_initializers__);