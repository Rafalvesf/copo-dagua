((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dqJ(){return new C.Fc(null)},
Fc:function Fc(d){this.a=d},
aKa:function aKa(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cjX:function cjX(d){this.a=d},
cjV:function cjV(d){this.a=d},
cjW:function cjW(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[108]
C=a.updateHolder(c[57],C)
D=c[384]
C.Fc.prototype={
P(){var x=$.cQ6()
$.dqK=null
return new C.aKa(x)}}
C.aKa.prototype={
ak(){var x=this
x.aD()
if(x.w==null)$.az.k4$.push(new C.cjX(x))
else x.I9()},
I9(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$I9=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.al3(q),$async$I9)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.D8(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jC(B.ng,null,t),$async$I9)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.q(new C.cjV(u))
case 1:return A.l(v,w)}})
return A.m($async$I9,w)},
D8(d){return this.aXz(d)},
aXz(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$D8=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gS()
a2.ai($.jx())
a2.a0(0,$.qg().gaW(),y.b).jH()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.T().b
i===$&&A.b()
x=7
return A.d(i.R("payments").az(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").X("id",a4).dA(),$async$D8)
case 7:o=a6
i=o
i=i==null?null:J.i(i,"partner_profiles")
h=y.l
h.a(i)
g=A.E(i==null?null:J.i(i,"business_name"))
r=g==null?r:g
i=o
i=A.aK(i==null?null:J.i(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.i(i,"bookings"))
i=A.aK(i==null?null:J.i(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.o(i==null?null:J.i(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.E(i==null?null:J.i(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a0(0,$.ux().gel(),i),$async$D8)
case 11:x=9
break
case 10:x=12
return A.d(a2.a0(0,$.CH().$1(l).gel(),i),$async$D8)
case 12:case 9:k=a6
j=k.lh(m)
p=A.aQ(A.ja(n,j),!0)
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
A.ai(a2).bS(0,"/pay/done",new E.a5H(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$D8,w)},
u(d){var x=null,w=this.x,v=$.ar,u=y.e
return A.ku(x,B.ac,A.bF(!0,A.bO(new A.Q(B.v0,w?A.B(A.a([A.b2(B.hy,v,x,x,40),B.aB,D.chj,B.X,D.cbJ,B.bg,A.bE(D.c9J,new C.cjW(d),A.cs(B.A,x,x,x,x,x,B.ad,x,x,x))],u),B.w,B.i,B.K,0,B.v):A.B(A.a([A.anK(x,v,x,x,x,x,x,x,x,x),B.a3,D.caA],u),B.w,B.i,B.K,0,B.v),x),x,x),x,B.a_,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.cjX.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ai(x).bS(0,"/bookings",null)},
$S:5}
C.cjV.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cjW.prototype={
$0(){return A.ai(this.a).bS(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fc,A.dB)
x(C.aKa,A.dw)
x(C.cjX,A.bx)
w(A.bT,[C.cjV,C.cjW])})()
A.bq(b.typeUniverse,JSON.parse('{"Fc":{"H":[],"e":[],"f":[]},"aKa":{"a_":["Fc"]}}'))
var y={a:A.w("F<f8>"),e:A.w("r<e>"),b:A.w("tW"),l:A.w("a4<@,@>?"),f:A.w("~")};(function constants(){D.c9J=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.caA=new A.D("A confirmar o pagamento\u2026",null,B.cd,null,null,null,null,null,null,null,null)
D.cbJ=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.te,B.a6,null,null,null,null,null,null,null)
D.chj=new A.D("A confirmar o pagamento",null,B.zg,null,null,null,null,null,null,null,null)})()};
(a=>{a["vSAisVsllSHUwyTMFdS6eEWAOfI="]=a.current})($__dart_deferred_initializers__);