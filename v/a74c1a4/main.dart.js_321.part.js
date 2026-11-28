((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtg(){return new B.EL(null)},
EL:function EL(d){this.a=d},
af5:function af5(){var _=this
_.z=_.y=_.x=_.w=$
_.Q=!1
_.as=null
_.d=$
_.c=_.a=null},
cdc:function cdc(d){this.a=d},
cdb:function cdb(d,e){this.a=d
this.b=e},
cd3:function cd3(d){this.a=d},
cd4:function cd4(d){this.a=d},
cd8:function cd8(d){this.a=d},
cd7:function cd7(d,e){this.a=d
this.b=e},
cd9:function cd9(d){this.a=d},
cd6:function cd6(d,e){this.a=d
this.b=e},
cda:function cda(d){this.a=d},
cd5:function cd5(d,e){this.a=d
this.b=e}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[27],B)
D=c[359]
E=c[342]
B.EL.prototype={
S(){return new B.af5()}}
B.af5.prototype={
gJb(){var x,w=this,v=w.w
if(v===$){x=w.gR().a_(0,$.b6(),y.e).b
x.toString
w.w!==$&&A.b_()
w.w=x
v=x}return v},
gagt(){var x=this.x
return x===$?this.x=this.gJb().cx:x},
ga6q(){var x=this.y
return x===$?this.y=this.gJb().cy:x},
ga2a(){var x,w,v=this,u=v.z
if(u===$){x=v.gJb().db
x=x==null?null:C.j.k(x)
if(x==null)x=""
w=$.aa()
v.z!==$&&A.b_()
u=v.z=new A.aE(new A.bD(x,C.aE,C.ax),w)}return u},
ad(){var x=this
x.aq()
x.gR().a_(0,$.a_x().$1(x.gJb().a).gdG(),y.t).b3(new B.cdc(x),y.F)},
m(){var x=this.ga2a()
x.Z$=$.aa()
x.W$=0
this.a7()},
JU(){var x=0,w=A.n(y.q),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$JU=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:s.p(new B.cd3(s))
p=s.ga2a().a.a
o=A.aS("[^0-9]",!0,!1,!1)
r=A.ed(A.aX(p,o,""),null)
q="Disponibilidade guardada."
u=4
p=s.as
x=p!=null?7:8
break
case 7:x=9
return A.d(A.al2(p),$async$JU)
case 9:s.gR().aj($.a_x().$1(s.gJb().a))
case 8:p=s.gR().a_(0,$.z8().gaX(),y.w)
o=s.gagt()
n=s.ga6q()
x=10
return A.d(p.bBD(o,r!=null&&r>0&&r<=2000?r:null,n),$async$JU)
case 10:u=2
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
break}s.p(new B.cd4(s))
s.c.O(y.v).f.a1(A.bZ(null,null,null,null,null,C.y,null,A.h(q,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
if(J.o(q,"Disponibilidade guardada.")){p=s.c
p.toString
A.am(p,!1).i6()}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$JU,w)},
arT(d,e,f,g,h){var x=null,w=y.u
return new A.S(C.cj,A.O(A.a([A.a4(A.y(A.a([A.h(e,x,x,x,x,C.a9,x,x),A.h(f,x,x,x,x,C.L,x,x)],w),C.G,C.h,C.l),1),A.azN(x,x,x,$.at,!1,C.W,x,x,x,x,x,x,h,x,x,x,x,x,x,x,x,g)],w),C.v,C.h,C.l,0,x),x)},
u(d){var x=this,w=null,v=C.ng.C(0,new A.a3(0,A.aR(d,C.b5,y.x).w.r.b,0,0)),u=y.u,t=A.a([D.bLg],u),s=x.as
if(s==null)t.push(D.bWP)
else t.push(new A.TS(s,new B.cd8(x),C.t,w))
t.push(D.bKS)
t.push(C.d5)
t.push(D.bKT)
s=A.W(22)
t.push(A.x(w,A.y(A.a([x.arT(C.lz,"Aceitar novos pedidos","Recebe pedidos de or\xe7amento dos clientes.",x.gagt(),new B.cd9(x)),C.lk,x.arT(C.ib,"Desloca\xe7\xf5es","Dispon\xedvel para ir ao local do evento.",x.ga6q(),new B.cda(x))],u),C.v,C.h,C.l),C.r,w,w,new A.I(C.t,w,w,s,w,w,C.x),w,w,w,C.cr,w,w,w))
if(x.ga6q())t.push(A.qf(w,x.ga2a(),w,"Ex.: 100",C.cK,"Dist\xe2ncia m\xe1xima de desloca\xe7\xe3o (km)",w,!1,20))
t.push(C.fG)
t.push(new A.rG("Guardar",x.gbao(),x.Q,w))
return A.ks(w,C.a3,A.bA(!0,A.d4(A.a([D.bLq,new A.S(C.ee,A.y(t,C.E,C.h,C.l),w)],u),w,v,w,w,!1,!1),w,C.Z,!1),w,!1,w,w)}}
var z=a.updateTypes(["F<~>()"])
B.cdc.prototype={
$1(d){var x=this.a
if(x.c!=null&&x.as==null)x.p(new B.cdb(x,d))},
$S:484}
B.cdb.prototype={
$0(){var x=this.b
if(x==null)x=A.cVG()
return this.a.as=x},
$S:0}
B.cd3.prototype={
$0(){return this.a.Q=!0},
$S:0}
B.cd4.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.cd8.prototype={
$1(d){var x=this.a
return x.p(new B.cd7(x,d))},
$S:218}
B.cd7.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.cd9.prototype={
$1(d){var x=this.a
return x.p(new B.cd6(x,d))},
$S:10}
B.cd6.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cda.prototype={
$1(d){var x=this.a
return x.p(new B.cd5(x,d))},
$S:10}
B.cd5.prototype={
$0(){return this.a.y=this.b},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.af5.prototype,"gbao","JU",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.EL,A.dA)
x(B.af5,A.dv)
w(A.bv,[B.cdc,B.cd8,B.cd9,B.cda])
w(A.bN,[B.cdb,B.cd3,B.cd4,B.cd7,B.cd6,B.cd5])})()
A.bt(b.typeUniverse,JSON.parse('{"EL":{"H":[],"e":[],"f":[]},"af5":{"a1":["EL"]}}'))
var y={e:A.z("cF"),t:A.z("F<nJ?>"),u:A.z("r<e>"),x:A.z("ds"),F:A.z("bj"),w:A.z("px"),v:A.z("dp"),q:A.z("~")};(function constants(){D.c7N=new A.D("Aparece na tua p\xe1gina. Toca nas horas para mudar um dia; \xabAplicar a todos\xbb muda todos de uma vez.",null,C.L,null,null,null,null,null,null,null)
D.bKS=new A.S(E.CN,D.c7N,null)
D.ca8=new A.D("PEDIDOS E DESLOCA\xc7\xd5ES",null,C.aH,null,null,null,null,null,null,null)
D.bKT=new A.S(C.d1,D.ca8,null)
D.cew=new A.D("HOR\xc1RIO DE FUNCIONAMENTO",null,C.aH,null,null,null,null,null,null,null)
D.bLg=new A.S(C.d1,D.cew,null)
D.bLq=new A.lM("Disponibilidade",null,!0,null,20,!0,null)
D.aiU=new A.f4(C.K,null,null,C.Bl,null)
D.bWP=new A.c4(null,120,D.aiU,null)})()};
(a=>{a["DVVNYKVfcVl3xxQ2CH0uh/G1QlE="]=a.current})($__dart_deferred_initializers__);