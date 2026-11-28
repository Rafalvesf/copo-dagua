((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dpN(){return new C.F9(null)},
F9:function F9(d){this.a=d},
aJW:function aJW(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cja:function cja(d){this.a=d},
cj8:function cj8(d){this.a=d},
cj9:function cj9(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[107]
C=a.updateHolder(c[57],C)
D=c[383]
C.F9.prototype={
P(){var x=$.cPh()
$.dpO=null
return new C.aJW(x)}}
C.aJW.prototype={
al(){var x=this
x.aH()
if(x.w==null)$.az.k4$.push(new C.cja(x))
else x.I6()},
I6(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$I6=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.akW(q),$async$I6)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.D8(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jA(B.n9,null,t),$async$I6)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.q(new C.cj8(u))
case 1:return A.l(v,w)}})
return A.m($async$I6,w)},
D8(d){return this.aXk(d)},
aXk(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$D8=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gT()
a2.ai($.jw())
a2.a1(0,$.qd().gaX(),y.b).jH()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.T().b
i===$&&A.b()
x=7
return A.d(i.R("payments").az(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").W("id",a4).dA(),$async$D8)
case 7:o=a6
i=o
i=i==null?null:J.h(i,"partner_profiles")
h=y.l
h.a(i)
g=A.C(i==null?null:J.h(i,"business_name"))
r=g==null?r:g
i=o
i=A.aK(i==null?null:J.h(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.h(i,"bookings"))
i=A.aK(i==null?null:J.h(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.o(i==null?null:J.h(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.C(i==null?null:J.h(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a1(0,$.uw().gel(),i),$async$D8)
case 11:x=9
break
case 10:x=12
return A.d(a2.a1(0,$.CF().$1(l).gel(),i),$async$D8)
case 12:case 9:k=a6
j=k.lg(m)
p=A.aQ(A.j9(n,j),!0)
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
A.ai(a2).bS(0,"/pay/done",new E.a5E(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$D8,w)},
u(d){var x=null,w=this.x,v=$.ap,u=y.e
return A.ks(x,B.ac,A.bC(!0,A.bN(new A.R(B.uO,w?A.B(A.a([A.b2(B.hv,v,x,x,40),B.aB,D.cfH,B.X,D.caK,B.bf,A.bD(D.c8M,new C.cj9(d),A.cu(B.A,x,x,x,x,x,B.af,x,x,x))],u),B.w,B.j,B.K,0,B.v):A.B(A.a([A.anB(x,v,x,x,x,x,x,x,x,x),B.a3,D.c9B],u),B.w,B.j,B.K,0,B.v),x),x,x),x,B.a_,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.cja.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ai(x).bS(0,"/bookings",null)},
$S:6}
C.cj8.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cj9.prototype={
$0(){return A.ai(this.a).bS(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.F9,A.dD)
x(C.aJW,A.dy)
x(C.cja,A.bx)
w(A.bR,[C.cj8,C.cj9])})()
A.bq(b.typeUniverse,JSON.parse('{"F9":{"K":[],"e":[],"f":[]},"aJW":{"a_":["F9"]}}'))
var y={a:A.w("F<f8>"),e:A.w("r<e>"),b:A.w("tV"),l:A.w("a4<@,@>?"),f:A.w("~")};(function constants(){D.c8M=new A.E("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.c9B=new A.E("A confirmar o pagamento\u2026",null,B.cq,null,null,null,null,null,null,null,null)
D.caK=new A.E("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.yZ,B.a5,null,null,null,null,null,null,null)
D.cfH=new A.E("A confirmar o pagamento",null,B.ej,null,null,null,null,null,null,null,null)})()};
(a=>{a["s4Gp8fDx5saDQosmS9Sv6FDMYGg="]=a.current})($__dart_deferred_initializers__);