((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
du5(){return new C.EV(null)},
EV:function EV(d){this.a=d},
afD:function afD(){var _=this
_.z=_.y=_.x=_.w=$
_.Q=!1
_.d=$
_.c=_.a=null},
ceo:function ceo(d){this.a=d},
cep:function cep(d){this.a=d},
ces:function ces(d){this.a=d},
cer:function cer(d,e){this.a=d
this.b=e},
cet:function cet(d){this.a=d},
ceq:function ceq(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[27],C)
D=c[365]
C.EV.prototype={
R(){return new C.afD()}}
C.afD.prototype={
ga4q(){var x,w=this,v=w.w
if(v===$){x=w.gS().a1(0,$.b8(),y.e).b
x.toString
w.w!==$&&A.aZ()
w.w=x
v=x}return v},
gah7(){var x=this.x
return x===$?this.x=this.ga4q().cx:x},
ga73(){var x=this.y
return x===$?this.y=this.ga4q().cy:x},
ga2N(){var x,w,v=this,u=v.z
if(u===$){x=v.ga4q().db
x=x==null?null:B.j.k(x)
if(x==null)x=""
w=$.aa()
v.z!==$&&A.aZ()
u=v.z=new A.aE(new A.bC(x,B.aE,B.aw),w)}return u},
m(){var x=this.ga2N()
x.Y$=$.aa()
x.W$=0
this.a6()},
TE(){var x=0,w=A.n(y.q),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$TE=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.p(new C.ceo(s))
p=s.ga2N().a.a
o=A.aS("[^0-9]",!0,!1,!1)
r=A.ef(A.aX(p,o,""),null)
q="Disponibilidade guardada."
u=4
p=s.gS().a1(0,$.zj().gaX(),y.w)
o=s.gah7()
n=s.ga73()
x=7
return A.d(p.bDm(o,r!=null&&r>0&&r<=2000?r:null,n),$async$TE)
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
break}s.p(new C.cep(s))
s.c.O(y.v).f.a2(A.c0(null,null,null,null,null,B.y,null,A.h(q,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
if(J.o(q,"Disponibilidade guardada.")){p=s.c
p.toString
A.am(p,!1).iw()}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$TE,w)},
asJ(d,e,f,g,h){var x=null,w=y.u
return new A.S(B.cm,A.O(A.a([A.a5(A.A(A.a([A.h(e,x,x,x,x,B.a9,x,x,x),A.h(f,x,x,x,x,B.M,x,x,x)],w),B.G,B.h,B.l),1),A.bBm(x,x,x,$.at,!1,B.W,x,x,x,x,x,x,h,x,x,x,x,x,x,x,x,g)],w),B.v,B.h,B.l,0,x),x)},
u(d){var x=this,w=null,v=B.nr.C(0,new A.a3(0,A.aO(d,B.b6,y.x).w.r.b,0,0)),u=A.W(22),t=y.u
u=A.a([A.y(w,A.A(A.a([x.asJ(B.lF,"Aceitar novos pedidos","Recebe pedidos de or\xe7amento dos clientes.",x.gah7(),new C.ces(x)),B.lq,x.asJ(B.ia,"Desloca\xe7\xf5es","Dispon\xedvel para ir ao local do evento.",x.ga73(),new C.cet(x))],t),B.v,B.h,B.l),B.r,w,w,new A.K(B.t,w,w,u,w,w,B.x),w,w,w,B.cz,w,w,w)],t)
if(x.ga73())u.push(A.qm(w,x.ga2N(),w,"Ex.: 100",B.cK,"Dist\xe2ncia m\xe1xima de desloca\xe7\xe3o (km)",w,!1,20))
u.push(B.fE)
u.push(new A.rM("Guardar",x.gbc2(),x.Q,w))
return A.ku(w,B.a5,A.bD(!0,A.d6(A.a([D.bLP,new A.S(B.ei,A.A(u,B.E,B.h,B.l),w)],t),w,v,w,w,!1,!1),w,B.a_,!1),w,!1,w,w)}}
var z=a.updateTypes(["F<~>()"])
C.ceo.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.cep.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ces.prototype={
$1(d){var x=this.a
return x.p(new C.cer(x,d))},
$S:10}
C.cer.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.cet.prototype={
$1(d){var x=this.a
return x.p(new C.ceq(x,d))},
$S:10}
C.ceq.prototype={
$0(){return this.a.y=this.b},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.afD.prototype,"gbc2","TE",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.EV,A.dA)
x(C.afD,A.dv)
w(A.bP,[C.ceo,C.cep,C.cer,C.ceq])
w(A.bw,[C.ces,C.cet])})()
A.br(b.typeUniverse,JSON.parse('{"EV":{"G":[],"e":[],"f":[]},"afD":{"Y":["EV"]}}'))
var y={e:A.w("cI"),u:A.w("r<e>"),x:A.w("dh"),w:A.w("pA"),v:A.w("dr"),q:A.w("~")};(function constants(){D.bLP=new A.lM("Disponibilidade",null,!0,null,20,!0,null)})()};
(a=>{a["77MMUJRqo9eajVafXmOsv2tJDEg="]=a.current})($__dart_deferred_initializers__);