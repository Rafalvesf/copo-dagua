((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dcJ(){return new C.Ea(null)},
Ea:function Ea(d){this.a=d},
aGQ:function aGQ(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cac:function cac(d){this.a=d},
caa:function caa(d){this.a=d},
cab:function cab(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[103]
C=a.updateHolder(c[54],C)
D=c[378]
C.Ea.prototype={
R(){var x=$.cE2()
$.dcK=null
return new C.aGQ(x)}}
C.aGQ.prototype={
aj(){var x=this
x.aH()
if(x.w==null)$.ay.k4$.push(new C.cac(x))
else x.HE()},
HE(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$HE=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.aiA(q),$async$HE)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.CL(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.k9(B.ps,null,t),$async$HE)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.q(new C.caa(u))
case 1:return A.l(v,w)}})
return A.m($async$HE,w)},
CL(d){return this.aVh(d)},
aVh(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$CL=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gU()
a2.al($.mc())
a2.a1(0,$.mX().gaW(),y.b).jA()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.R().b
i===$&&A.b()
x=7
return A.d(i.T("payments").aG(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").X("id",a4).e0(),$async$CL)
case 7:o=a6
i=o
i=i==null?null:J.h(i,"partner_profiles")
h=y.l
h.a(i)
g=A.L(i==null?null:J.h(i,"business_name"))
r=g==null?r:g
i=o
i=A.aV(i==null?null:J.h(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.h(i,"bookings"))
i=A.aV(i==null?null:J.h(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.p(i==null?null:J.h(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.L(i==null?null:J.h(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a1(0,$.BN().gf_(),i),$async$CL)
case 11:x=9
break
case 10:x=12
return A.d(a2.a1(0,$.OX().$1(l).gf_(),i),$async$CL)
case 12:case 9:k=a6
j=k.nW(m)
p=A.b6(A.ii(n,j),!0)
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
A.ar(a2).bR(0,"/pay/done",new E.a3I(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$CL,w)},
u(d){var x=null,w=this.x,v=$.al,u=y.e
return A.kf(x,B.af,A.bB(!0,A.bT(new A.X(B.uj,w?A.G(A.a([A.b9(B.fC,v,x,x,40),B.ai,D.cbL,B.a1,D.c6r,B.bu,A.bD(D.c4y,new C.cab(d),A.cf(B.A,x,x,x,x,x,B.ac,x,x,x))],u),B.x,B.l,B.U,0,B.w):A.G(A.a([A.ZY(x,v,x,x,x,x,x,x,x,x),B.a9,D.c5j],u),B.x,B.l,B.U,0,B.w),x),x,x),x,B.Z,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.cac.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ar(x).bR(0,"/bookings",null)},
$S:7}
C.caa.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cab.prototype={
$0(){return A.ar(this.a).bR(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Ea,A.ds)
x(C.aGQ,A.di)
x(C.cac,A.bv)
w(A.bM,[C.caa,C.cab])})()
A.bt(b.typeUniverse,JSON.parse('{"Ea":{"I":[],"e":[],"f":[]},"aGQ":{"a1":["Ea"]}}'))
var y={a:A.w("E<fl>"),e:A.w("r<e>"),b:A.w("ph"),l:A.w("a3<@,@>?"),f:A.w("~")};(function constants(){D.c4y=new A.C("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.c5j=new A.C("A confirmar o pagamento\u2026",null,B.da,null,null,null,null,null,null,null,null)
D.c6r=new A.C("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.yp,B.a5,null,null,null,null,null,null,null)
D.cbL=new A.C("A confirmar o pagamento",null,B.oh,null,null,null,null,null,null,null,null)})()};
(a=>{a["R09Vm6y2jRYQRhFc1sABq2U6xtc="]=a.current})($__dart_deferred_initializers__);