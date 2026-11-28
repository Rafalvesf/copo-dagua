((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dtw(){return new C.EW(null)},
EW:function EW(d){this.a=d},
afB:function afB(){var _=this
_.z=_.y=_.x=_.w=$
_.Q=!1
_.d=$
_.c=_.a=null},
cdU:function cdU(d){this.a=d},
cdV:function cdV(d){this.a=d},
cdY:function cdY(d){this.a=d},
cdX:function cdX(d,e){this.a=d
this.b=e},
cdZ:function cdZ(d){this.a=d},
cdW:function cdW(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[27],C)
D=c[369]
C.EW.prototype={
R(){return new C.afB()}}
C.afB.prototype={
ga4n(){var x,w=this,v=w.w
if(v===$){x=w.gS().a0(0,$.b9(),y.e).b
x.toString
w.w!==$&&A.aZ()
w.w=x
v=x}return v},
gah4(){var x=this.x
return x===$?this.x=this.ga4n().cx:x},
ga70(){var x=this.y
return x===$?this.y=this.ga4n().cy:x},
ga2L(){var x,w,v=this,u=v.z
if(u===$){x=v.ga4n().db
x=x==null?null:B.j.k(x)
if(x==null)x=""
w=$.aa()
v.z!==$&&A.aZ()
u=v.z=new A.aE(new A.bC(x,B.aF,B.aw),w)}return u},
m(){var x=this.ga2L()
x.Y$=$.aa()
x.W$=0
this.a6()},
TC(){var x=0,w=A.n(y.q),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$TC=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.p(new C.cdU(s))
p=s.ga2L().a.a
o=A.aS("[^0-9]",!0,!1,!1)
r=A.eg(A.aV(p,o,""),null)
q="Disponibilidade guardada."
u=4
p=s.gS().a0(0,$.zj().gaX(),y.w)
o=s.gah4()
n=s.ga70()
x=7
return A.d(p.bDh(o,r!=null&&r>0&&r<=2000?r:null,n),$async$TC)
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
break}s.p(new C.cdV(s))
s.c.O(y.v).f.a2(A.c0(null,null,null,null,null,B.y,null,A.h(q,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
if(J.o(q,"Disponibilidade guardada.")){p=s.c
p.toString
A.am(p,!1).iw()}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$TC,w)},
asI(d,e,f,g,h){var x=null,w=y.u
return new A.S(B.cm,A.O(A.a([A.a5(A.A(A.a([A.h(e,x,x,x,x,B.aa,x,x,x),A.h(f,x,x,x,x,B.N,x,x,x)],w),B.G,B.h,B.l),1),A.bAY(x,x,x,$.at,!1,B.W,x,x,x,x,x,x,h,x,x,x,x,x,x,x,x,g)],w),B.v,B.h,B.l,0,x),x)},
u(d){var x=this,w=null,v=B.ns.C(0,new A.a3(0,A.aO(d,B.b5,y.x).w.r.b,0,0)),u=A.W(22),t=y.u
u=A.a([A.x(w,A.A(A.a([x.asI(B.jN,"Aceitar novos pedidos","Recebe pedidos de or\xe7amento dos clientes.",x.gah4(),new C.cdY(x)),B.ls,x.asI(B.i9,"Desloca\xe7\xf5es","Dispon\xedvel para ir ao local do evento.",x.ga70(),new C.cdZ(x))],t),B.v,B.h,B.l),B.r,w,w,new A.I(B.t,w,w,u,w,w,B.x),w,w,w,B.cz,w,w,w)],t)
if(x.ga70())u.push(A.qk(w,x.ga2L(),w,"Ex.: 100",B.cL,"Dist\xe2ncia m\xe1xima de desloca\xe7\xe3o (km)",w,!1,20))
u.push(B.fE)
u.push(new A.rL("Guardar",x.gbbY(),x.Q,w))
return A.kt(w,B.a6,A.bD(!0,A.d_(A.a([D.bLY,new A.S(B.eg,A.A(u,B.F,B.h,B.l),w)],t),w,v,w,w,!1,B.a1,!1),w,B.Z,!1),w,!1,w,w)}}
var z=a.updateTypes(["F<~>()"])
C.cdU.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.cdV.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.cdY.prototype={
$1(d){var x=this.a
return x.p(new C.cdX(x,d))},
$S:10}
C.cdX.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.cdZ.prototype={
$1(d){var x=this.a
return x.p(new C.cdW(x,d))},
$S:10}
C.cdW.prototype={
$0(){return this.a.y=this.b},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.afB.prototype,"gbbY","TC",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.EW,A.dz)
x(C.afB,A.du)
w(A.bP,[C.cdU,C.cdV,C.cdX,C.cdW])
w(A.bu,[C.cdY,C.cdZ])})()
A.bn(b.typeUniverse,JSON.parse('{"EW":{"G":[],"e":[],"f":[]},"afB":{"Y":["EW"]}}'))
var y={e:A.w("cB"),u:A.w("r<e>"),x:A.w("dg"),w:A.w("py"),v:A.w("dp"),q:A.w("~")};(function constants(){D.bLY=new A.lL("Disponibilidade",null,!0,null,20,!0,null)})()};
(a=>{a["I9c0e+d1YkU/E3BuEPL0yLczrD0="]=a.current})($__dart_deferred_initializers__);