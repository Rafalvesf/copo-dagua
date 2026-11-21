((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dfA(){return new C.Ei(null)},
Ei:function Ei(d){this.a=d},
aHh:function aHh(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
caT:function caT(d){this.a=d},
caR:function caR(d){this.a=d},
caS:function caS(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[101]
C=a.updateHolder(c[54],C)
D=c[362]
C.Ei.prototype={
S(){var x=$.cFR()
$.dfB=null
return new C.aHh(x)}}
C.aHh.prototype={
al(){var x=this
x.aI()
if(x.w==null)$.az.k4$.push(new C.caT(x))
else x.HH()},
HH(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$HH=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.aiT(q),$async$HH)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.CN(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jK(B.mK,null,t),$async$HH)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.q(new C.caR(u))
case 1:return A.l(v,w)}})
return A.m($async$HH,w)},
CN(d){return this.aVH(d)},
aVH(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$CN=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gU()
a2.aj($.lH())
a2.a2(0,$.mY().gaU(),y.b).jA()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.R().b
i===$&&A.b()
x=7
return A.d(i.P("payments").aG(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").V("id",a4).dM(),$async$CN)
case 7:o=a6
i=o
i=i==null?null:J.h(i,"partner_profiles")
h=y.l
h.a(i)
g=A.M(i==null?null:J.h(i,"business_name"))
r=g==null?r:g
i=o
i=A.aR(i==null?null:J.h(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.h(i,"bookings"))
i=A.aR(i==null?null:J.h(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.o(i==null?null:J.h(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.M(i==null?null:J.h(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a2(0,$.vS().geP(),i),$async$CN)
case 11:x=9
break
case 10:x=12
return A.d(a2.a2(0,$.BV().$1(l).geP(),i),$async$CN)
case 12:case 9:k=a6
j=k.lI(m)
p=A.aX(A.ic(n,j),!0)
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
A.ar(a2).bS(0,"/pay/done",new E.a3Z(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$CN,w)},
u(d){var x=null,w=this.x,v=$.aj,u=y.e
return A.kf(x,B.ag,A.bE(!0,A.bR(new A.T(B.uh,w?A.E(A.a([A.b7(B.fG,v,x,x,40),B.al,D.ccA,B.Y,D.c75,B.bi,A.bB(D.c57,new C.caS(d),A.cc(B.z,x,x,x,x,x,B.a9,x,x,x))],u),B.x,B.k,B.U,0,B.w):A.E(A.a([A.a_a(x,v,x,x,x,x,x,x,x,x),B.a7,D.c5X],u),B.x,B.k,B.U,0,B.w),x),x,x),x,B.Z,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.caT.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ar(x).bS(0,"/bookings",null)},
$S:6}
C.caR.prototype={
$0(){return this.a.x=!0},
$S:0}
C.caS.prototype={
$0(){return A.ar(this.a).bS(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Ei,A.dw)
x(C.aHh,A.dq)
x(C.caT,A.bx)
w(A.bS,[C.caR,C.caS])})()
A.bu(b.typeUniverse,JSON.parse('{"Ei":{"I":[],"e":[],"f":[]},"aHh":{"a1":["Ei"]}}'))
var y={a:A.w("G<eZ>"),e:A.w("r<e>"),b:A.w("pk"),l:A.w("a3<@,@>?"),f:A.w("~")};(function constants(){D.c57=new A.A("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.c5X=new A.A("A confirmar o pagamento\u2026",null,B.d6,null,null,null,null,null,null,null,null)
D.c75=new A.A("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.yq,B.a6,null,null,null,null,null,null,null)
D.ccA=new A.A("A confirmar o pagamento",null,B.on,null,null,null,null,null,null,null,null)})()};
(a=>{a["caz9nmeCaXucPOPIQI7Ybnh3XCw="]=a.current})($__dart_deferred_initializers__);