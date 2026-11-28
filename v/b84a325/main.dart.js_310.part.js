((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dpp(){return new C.EP(null)},
EP:function EP(d){this.a=d},
af4:function af4(){var _=this
_.z=_.y=_.x=_.w=$
_.Q=!1
_.d=$
_.c=_.a=null},
cbG:function cbG(d){this.a=d},
cbH:function cbH(d){this.a=d},
cbK:function cbK(d){this.a=d},
cbJ:function cbJ(d,e){this.a=d
this.b=e},
cbL:function cbL(d){this.a=d},
cbI:function cbI(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[27],C)
D=c[356]
C.EP.prototype={
P(){return new C.af4()}}
C.af4.prototype={
ga3Y(){var x,w=this,v=w.w
if(v===$){x=w.gT().a1(0,$.b8(),y.e).b
x.toString
w.w!==$&&A.aX()
w.w=x
v=x}return v},
gagz(){var x=this.x
return x===$?this.x=this.ga3Y().cx:x},
ga6y(){var x=this.y
return x===$?this.y=this.ga3Y().cy:x},
ga2l(){var x,w,v=this,u=v.z
if(u===$){x=v.ga3Y().db
x=x==null?null:B.i.k(x)
if(x==null)x=""
w=$.ac()
v.z!==$&&A.aX()
u=v.z=new A.aI(new A.bJ(x,B.aL,B.aD),w)}return u},
m(){var x=this.ga2l()
x.Z$=$.ac()
x.X$=0
this.a7()},
Td(){var x=0,w=A.n(y.q),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Td=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.q(new C.cbG(s))
p=s.ga2l().a.a
o=A.aW("[^0-9]",!0,!1,!1)
r=A.eI(A.b0(p,o,""),null)
q="Disponibilidade guardada."
u=4
p=s.gT().a1(0,$.zj().gaX(),y.w)
o=s.gagz()
n=s.ga6y()
x=7
return A.d(p.bCP(o,r!=null&&r>0&&r<=2000?r:null,n),$async$Td)
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
break}s.q(new C.cbH(s))
s.c.O(y.v).f.a4(A.cA(null,null,null,null,null,B.z,null,A.i(q,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
if(J.o(q,"Disponibilidade guardada.")){p=s.c
p.toString
A.aq(p,!1).ix()}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Td,w)},
as6(d,e,f,g,h){var x=null,w=y.u
return new A.R(B.cr,A.Q(A.a([A.a6(A.B(A.a([A.i(e,x,x,x,x,B.ap,x,x,x),A.i(f,x,x,x,x,B.W,x,x,x)],w),B.G,B.j,B.m,0,B.v),1),A.bzZ(x,x,x,$.ap,!1,B.a2,x,x,x,x,x,x,h,x,x,x,x,x,x,x,x,g)],w),B.w,B.j,B.m,0,x,x),x)},
u(d){var x=this,w=null,v=B.nf.B(0,new A.a2(0,A.aw(d,B.b5,y.x).w.r.b,0,0)),u=A.a0(22),t=y.u
u=A.a([A.D(w,A.B(A.a([x.as6(B.ku,"Aceitar novos pedidos","Recebe pedidos de or\xe7amento dos clientes.",x.gagz(),new C.cbK(x)),B.n8,x.as6(B.i1,"Desloca\xe7\xf5es","Dispon\xedvel para ir ao local do evento.",x.ga6y(),new C.cbL(x))],t),B.w,B.j,B.m,0,B.v),B.r,w,w,new A.O(B.t,w,w,u,w,w,B.y),w,w,w,B.ea,w,w,w)],t)
if(x.ga6y())u.push(A.qg(w,x.ga2l(),w,"Ex.: 100",B.cF,"Dist\xe2ncia m\xe1xima de desloca\xe7\xe3o (km)",w,!1,20))
u.push(B.fy)
u.push(new A.rL("Guardar",x.gbbl(),x.Q,w))
return A.ks(w,B.ac,A.bC(!0,A.cZ(A.a([D.bM4,new A.R(B.fM,A.B(u,B.I,B.j,B.m,0,B.v),w)],t),w,v,w,w,!1,B.a1,!1),w,B.a_,!1),w,!1,w,w)}}
var z=a.updateTypes(["F<~>()"])
C.cbG.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.cbH.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.cbK.prototype={
$1(d){var x=this.a
return x.q(new C.cbJ(x,d))},
$S:10}
C.cbJ.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.cbL.prototype={
$1(d){var x=this.a
return x.q(new C.cbI(x,d))},
$S:10}
C.cbI.prototype={
$0(){return this.a.y=this.b},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.af4.prototype,"gbbl","Td",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.EP,A.dD)
x(C.af4,A.dy)
w(A.bR,[C.cbG,C.cbH,C.cbJ,C.cbI])
w(A.bx,[C.cbK,C.cbL])})()
A.bq(b.typeUniverse,JSON.parse('{"EP":{"K":[],"e":[],"f":[]},"af4":{"a_":["EP"]}}'))
var y={e:A.w("cG"),u:A.w("r<e>"),x:A.w("dn"),w:A.w("px"),v:A.w("ds"),q:A.w("~")};(function constants(){D.bM4=new A.lH("Disponibilidade",null,!0,null,20,!0,null)})()};
(a=>{a["8nUA2ZU757kGkd1yqYpXlwoYY3E="]=a.current})($__dart_deferred_initializers__);