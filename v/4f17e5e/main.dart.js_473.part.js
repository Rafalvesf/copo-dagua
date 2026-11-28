((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dlh(){return new C.EM(null)},
EM:function EM(d){this.a=d},
aIp:function aIp(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cfv:function cfv(d){this.a=d},
cft:function cft(d){this.a=d},
cfu:function cfu(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[104]
C=a.updateHolder(c[55],C)
D=c[353]
C.EM.prototype={
R(){var x=$.cLg()
$.dli=null
return new C.aIp(x)}}
C.aIp.prototype={
am(){var x=this
x.aJ()
if(x.w==null)$.aB.k4$.push(new C.cfv(x))
else x.HY()},
HY(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$HY=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.ajH(q),$async$HY)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.D_(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jx(B.lg,null,t),$async$HY)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.q(new C.cft(u))
case 1:return A.l(v,w)}})
return A.m($async$HY,w)},
D_(d){return this.aWu(d)},
aWu(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$D_=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gT()
a2.ah($.jt())
a2.a1(0,$.q1().gaV(),y.b).jE()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.T().b
i===$&&A.b()
x=7
return A.d(i.P("payments").aw(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").W("id",a4).dz(),$async$D_)
case 7:o=a6
i=o
i=i==null?null:J.h(i,"partner_profiles")
h=y.l
h.a(i)
g=A.J(i==null?null:J.h(i,"business_name"))
r=g==null?r:g
i=o
i=A.aL(i==null?null:J.h(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.h(i,"bookings"))
i=A.aL(i==null?null:J.h(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.o(i==null?null:J.h(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.J(i==null?null:J.h(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a1(0,$.uk().gej(),i),$async$D_)
case 11:x=9
break
case 10:x=12
return A.d(a2.a1(0,$.Cj().$1(l).gej(),i),$async$D_)
case 12:case 9:k=a6
j=k.lc(m)
p=A.aP(A.j8(n,j),!0)
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
A.aj(a2).bQ(0,"/pay/done",new E.a4K(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$D_,w)},
u(d){var x=null,w=this.x,v=$.ap,u=y.e
return A.kp(x,B.aa,A.bH(!0,A.bT(new A.S(B.uv,w?A.C(A.a([A.b3(B.hW,v,x,x,40),B.aB,D.ccR,B.Z,D.c7y,B.bk,A.bM(D.c5B,new C.cfu(d),A.cv(B.A,x,x,x,x,x,B.ah,x,x,x))],u),B.x,B.j,B.P,0,B.v):A.C(A.a([A.a_W(x,v,x,x,x,x,x,x,x,x),B.a4,D.c6q],u),B.x,B.j,B.P,0,B.v),x),x,x),x,B.a0,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.cfv.prototype={
$1(d){var x=this.a.c
if(x!=null)A.aj(x).bQ(0,"/bookings",null)},
$S:5}
C.cft.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cfu.prototype={
$0(){return A.aj(this.a).bQ(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.EM,A.dD)
x(C.aIp,A.dv)
x(C.cfv,A.bx)
w(A.bR,[C.cft,C.cfu])})()
A.bw(b.typeUniverse,JSON.parse('{"EM":{"I":[],"e":[],"f":[]},"aIp":{"a1":["EM"]}}'))
var y={a:A.x("F<f2>"),e:A.x("t<e>"),b:A.x("tH"),l:A.x("a5<@,@>?"),f:A.x("~")};(function constants(){D.c5B=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.c6q=new A.D("A confirmar o pagamento\u2026",null,B.cI,null,null,null,null,null,null,null,null)
D.c7y=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.yB,B.a5,null,null,null,null,null,null,null)
D.ccR=new A.D("A confirmar o pagamento",null,B.yG,null,null,null,null,null,null,null,null)})()};
(a=>{a["9JfNbpDMVQP6ByZf8xmUgrickQg="]=a.current})($__dart_deferred_initializers__);