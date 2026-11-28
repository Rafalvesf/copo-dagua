((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dui(){return new C.Fj(null)},
Fj:function Fj(d){this.a=d},
aKQ:function aKQ(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
clW:function clW(d){this.a=d},
clU:function clU(d){this.a=d},
clV:function clV(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[108]
C=a.updateHolder(c[57],C)
D=c[391]
C.Fj.prototype={
R(){var x=$.cTy()
$.duj=null
return new C.aKQ(x)}}
C.aKQ.prototype={
ad(){var x=this
x.ar()
if(x.w==null)$.aA.k4$.push(new C.clW(x))
else x.In()},
In(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$In=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.alA(q),$async$In)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.Dm(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jE(B.nv,null,t),$async$In)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.p(new C.clU(u))
case 1:return A.l(v,w)}})
return A.m($async$In,w)},
Dm(d){return this.aYl(d)},
aYl(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Dm=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gS()
a2.aj($.jd())
a2.a1(0,$.zp().gaX(),y.b).jH()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.R().b
i===$&&A.b()
x=7
return A.d(i.P("payments").am(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").V("id",a4).cJ(),$async$Dm)
case 7:o=a6
i=o
i=i==null?null:J.i(i,"partner_profiles")
h=y.l
h.a(i)
g=A.C(i==null?null:J.i(i,"business_name"))
r=g==null?r:g
i=o
i=A.aI(i==null?null:J.i(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.i(i,"bookings"))
i=A.aI(i==null?null:J.i(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.o(i==null?null:J.i(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.C(i==null?null:J.i(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a1(0,$.uC().geh(),i),$async$Dm)
case 11:x=9
break
case 10:x=12
return A.d(a2.a1(0,$.CM().$1(l).geh(),i),$async$Dm)
case 12:case 9:k=a6
j=k.li(m)
p=A.aM(A.jb(n,j),!0)
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
A.ah(a2).bS(0,"/pay/done",new E.a63(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Dm,w)},
u(d){var x=null,w=this.x,v=$.au,u=y.e
return A.kt(x,B.a7,A.bF(!0,A.bN(new A.Q(B.vd,w?A.x(A.a([A.b4(B.hI,v,x,x,40),B.aC,D.ci_,B.S,D.cc9,B.bj,A.bG(D.ca7,new C.clV(d),A.cn(B.A,x,x,x,x,x,B.ae,x,x,x))],u),B.w,B.h,B.K,0,B.u):A.x(A.a([A.aoj(x,v,x,x,x,x,x,x,x,x),B.a1,D.cb_],u),B.w,B.h,B.K,0,B.u),x),x,x),x,B.a_,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.clW.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ah(x).bS(0,"/bookings",null)},
$S:5}
C.clU.prototype={
$0(){return this.a.x=!0},
$S:0}
C.clV.prototype={
$0(){return A.ah(this.a).bS(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fj,A.dD)
x(C.aKQ,A.dz)
x(C.clW,A.bz)
w(A.bR,[C.clU,C.clV])})()
A.bq(b.typeUniverse,JSON.parse('{"Fj":{"G":[],"e":[],"f":[]},"aKQ":{"Y":["Fj"]}}'))
var y={a:A.w("F<fb>"),e:A.w("r<e>"),b:A.w("u1"),l:A.w("a5<@,@>?"),f:A.w("~")};(function constants(){D.ca7=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.cb_=new A.D("A confirmar o pagamento\u2026",null,B.ch,null,null,null,null,null,null,null,null)
D.cc9=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.tn,B.a6,null,null,null,null,null,null,null)
D.ci_=new A.D("A confirmar o pagamento",null,B.zu,null,null,null,null,null,null,null,null)})()};
(a=>{a["f3KuZ/XZ4eL0a0rGkNc85nKONuQ="]=a.current})($__dart_deferred_initializers__);