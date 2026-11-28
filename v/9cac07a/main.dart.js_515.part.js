((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dsM(){return new C.Fi(null)},
Fi:function Fi(d){this.a=d},
aKE:function aKE(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
ckU:function ckU(d){this.a=d},
ckS:function ckS(d){this.a=d},
ckT:function ckT(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[109]
C=a.updateHolder(c[57],C)
D=c[389]
C.Fi.prototype={
P(){var x=$.cS3()
$.dsN=null
return new C.aKE(x)}}
C.aKE.prototype={
ag(){var x=this
x.aA()
if(x.w==null)$.az.k4$.push(new C.ckU(x))
else x.Ik()},
Ik(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$Ik=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.als(q),$async$Ik)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.Dj(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jE(B.ns,null,t),$async$Ik)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.p(new C.ckS(u))
case 1:return A.l(v,w)}})
return A.m($async$Ik,w)},
Dj(d){return this.aY6(d)},
aY6(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Dj=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gS()
a2.ak($.jd())
a2.a0(0,$.zn().gaX(),y.b).jH()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.S().b
i===$&&A.b()
x=7
return A.d(i.R("payments").an(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").W("id",a4).d0(),$async$Dj)
case 7:o=a6
i=o
i=i==null?null:J.i(i,"partner_profiles")
h=y.l
h.a(i)
g=A.D(i==null?null:J.i(i,"business_name"))
r=g==null?r:g
i=o
i=A.aL(i==null?null:J.i(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.i(i,"bookings"))
i=A.aL(i==null?null:J.i(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.o(i==null?null:J.i(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.D(i==null?null:J.i(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a0(0,$.uy().gef(),i),$async$Dj)
case 11:x=9
break
case 10:x=12
return A.d(a2.a0(0,$.CL().$1(l).gef(),i),$async$Dj)
case 12:case 9:k=a6
j=k.lh(m)
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
A.ai(a2).bQ(0,"/pay/done",new E.a60(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Dj,w)},
u(d){var x=null,w=this.x,v=$.at,u=y.e
return A.kt(x,B.a7,A.bC(!0,A.bO(new A.Q(B.v9,w?A.A(A.a([A.b3(B.hE,v,x,x,40),B.aC,D.chN,B.S,D.cbX,B.bi,A.bE(D.c9V,new C.ckT(d),A.cq(B.A,x,x,x,x,x,B.ad,x,x,x))],u),B.w,B.h,B.K,0,B.u):A.A(A.a([A.aoa(x,v,x,x,x,x,x,x,x,x),B.a1,D.caM],u),B.w,B.h,B.K,0,B.u),x),x,x),x,B.a_,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.ckU.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ai(x).bQ(0,"/bookings",null)},
$S:6}
C.ckS.prototype={
$0(){return this.a.x=!0},
$S:0}
C.ckT.prototype={
$0(){return A.ai(this.a).bQ(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fi,A.dC)
x(C.aKE,A.dy)
x(C.ckU,A.bx)
w(A.bQ,[C.ckS,C.ckT])})()
A.bn(b.typeUniverse,JSON.parse('{"Fi":{"G":[],"e":[],"f":[]},"aKE":{"Z":["Fi"]}}'))
var y={a:A.w("F<fa>"),e:A.w("r<e>"),b:A.w("tZ"),l:A.w("a5<@,@>?"),f:A.w("~")};(function constants(){D.c9V=new A.C("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.caM=new A.C("A confirmar o pagamento\u2026",null,B.ch,null,null,null,null,null,null,null,null)
D.cbX=new A.C("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.tk,B.a6,null,null,null,null,null,null,null)
D.chN=new A.C("A confirmar o pagamento",null,B.zq,null,null,null,null,null,null,null,null)})()};
(a=>{a["lfhn/kUdu5JPiDQsrLpdYPNf3pM="]=a.current})($__dart_deferred_initializers__);