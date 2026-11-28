((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dtE(){return new C.F5(null)},
F5:function F5(d){this.a=d},
aJW:function aJW(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
clk:function clk(d){this.a=d},
cli:function cli(d){this.a=d},
clj:function clj(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[109]
C=a.updateHolder(c[57],C)
D=c[385]
C.F5.prototype={
S(){var x=$.cSM()
$.dtF=null
return new C.aJW(x)}}
C.aJW.prototype={
ad(){var x=this
x.aq()
if(x.w==null)$.ay.k4$.push(new C.clk(x))
else x.HU()},
HU(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$HU=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.akU(q),$async$HU)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.CZ(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jX(B.n7,null,t),$async$HU)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.p(new C.cli(u))
case 1:return A.l(v,w)}})
return A.m($async$HU,w)},
CZ(d){return this.aWQ(d)},
aWQ(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$CZ=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gR()
a2.aj($.iX())
a2.a_(0,$.zb().gaX(),y.b).jy()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.P().b
i===$&&A.b()
x=7
return A.d(i.P("payments").ai(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").U("id",a4).cf(),$async$CZ)
case 7:o=a6
i=o
i=i==null?null:J.i(i,"partner_profiles")
h=y.l
h.a(i)
g=A.B(i==null?null:J.i(i,"business_name"))
r=g==null?r:g
i=o
i=A.aC(i==null?null:J.i(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.i(i,"bookings"))
i=A.aC(i==null?null:J.i(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.o(i==null?null:J.i(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.B(i==null?null:J.i(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a_(0,$.uy().gdG(),i),$async$CZ)
case 11:x=9
break
case 10:x=12
return A.d(a2.a_(0,$.Cz().$1(l).gdG(),i),$async$CZ)
case 12:case 9:k=a6
j=k.l8(m)
p=A.aI(A.jd(n,j),!0)
u=2
x=6
break
case 4:u=3
a3=t.pop()
x=6
break
case 3:x=2
break
case 6:a2=s.c
if(a2==null){x=1
break}i=r
h=q
a1=p
A.ac(a2).bQ(0,"/pay/done",new E.a5P(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$CZ,w)},
u(d){var x=null,w=this.x,v=$.at,u=y.e
return A.ks(x,B.a3,A.bA(!0,A.bM(new A.S(B.uN,w?A.y(A.a([A.b8(B.hy,v,x,x,40),B.aA,D.cax,B.P,D.ceu,B.bi,A.bB(D.cbR,new C.clj(d),A.cc(B.z,x,x,x,x,x,B.aa,x,x,x))],u),B.v,B.h,B.J):A.y(A.a([A.anC(x,v,x,x,x,x,x,x,x,x),B.a0,D.c7S],u),B.v,B.h,B.J),x),x,x),x,B.Z,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.clk.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ac(x).bQ(0,"/bookings",null)},
$S:5}
C.cli.prototype={
$0(){return this.a.x=!0},
$S:0}
C.clj.prototype={
$0(){return A.ac(this.a).bQ(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.F5,A.dA)
x(C.aJW,A.dv)
x(C.clk,A.bv)
w(A.bN,[C.cli,C.clj])})()
A.bt(b.typeUniverse,JSON.parse('{"F5":{"H":[],"e":[],"f":[]},"aJW":{"a1":["F5"]}}'))
var y={a:A.z("F<f7>"),e:A.z("r<e>"),b:A.z("tU"),l:A.z("a5<@,@>?"),f:A.z("~")};(function constants(){D.c7S=new A.D("A confirmar o pagamento\u2026",null,B.cc,null,null,null,null,null,null,null)
D.cax=new A.D("A confirmar o pagamento",null,B.rZ,null,null,null,null,null,null,null)
D.cbR=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null)
D.ceu=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.rR,B.a4,null,null,null,null,null,null)})()};
(a=>{a["oHbEZhsG8/q9lO0eaA3CSoE3dQs="]=a.current})($__dart_deferred_initializers__);