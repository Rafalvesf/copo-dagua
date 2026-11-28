((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
duI(){return new C.Fi(null)},
Fi:function Fi(d){this.a=d},
aKy:function aKy(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cmk:function cmk(d){this.a=d},
cmi:function cmi(d){this.a=d},
cmj:function cmj(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[109]
C=a.updateHolder(c[57],C)
D=c[391]
C.Fi.prototype={
R(){var x=$.cTQ()
$.duJ=null
return new C.aKy(x)}}
C.aKy.prototype={
ac(){var x=this
x.ap()
if(x.w==null)$.aA.k4$.push(new C.cmk(x))
else x.Ih()},
Ih(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$Ih=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.alo(q),$async$Ih)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.De(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jI(B.nj,null,t),$async$Ih)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.p(new C.cmi(u))
case 1:return A.l(v,w)}})
return A.m($async$Ih,w)},
De(d){return this.aXW(d)},
aXW(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$De=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gS()
a2.ak($.j0())
a2.a1(0,$.zm().gaX(),y.b).jF()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.P().b
i===$&&A.b()
x=7
return A.d(i.P("payments").ai(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").V("id",a4).ck(),$async$De)
case 7:o=a6
i=o
i=i==null?null:J.i(i,"partner_profiles")
h=y.l
h.a(i)
g=A.C(i==null?null:J.i(i,"business_name"))
r=g==null?r:g
i=o
i=A.aF(i==null?null:J.i(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.i(i,"bookings"))
i=A.aF(i==null?null:J.i(i,"total_amount"))
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
return A.d(a2.a1(0,$.uy().ge_(),i),$async$De)
case 11:x=9
break
case 10:x=12
return A.d(a2.a1(0,$.CL().$1(l).ge_(),i),$async$De)
case 12:case 9:k=a6
j=k.ld(m)
p=A.aK(A.jf(n,j),!0)
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
A.ae(a2).bQ(0,"/pay/done",new E.a65(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$De,w)},
u(d){var x=null,w=this.x,v=$.au,u=y.e
return A.kt(x,B.a5,A.bD(!0,A.bL(new A.T(B.v2,w?A.A(A.a([A.b5(B.hB,v,x,x,40),B.aB,D.cgw,B.Q,D.caG,B.bi,A.bE(D.c8H,new C.cmj(d),A.ck(B.z,x,x,x,x,x,B.ac,x,x,x))],u),B.v,B.h,B.J):A.A(A.a([A.ao7(x,v,x,x,x,x,x,x,x,x),B.a0,D.c9y],u),B.v,B.h,B.J),x),x,x),x,B.Z,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.cmk.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ae(x).bQ(0,"/bookings",null)},
$S:5}
C.cmi.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cmj.prototype={
$0(){return A.ae(this.a).bQ(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fi,A.dA)
x(C.aKy,A.dv)
x(C.cmk,A.bw)
w(A.bO,[C.cmi,C.cmj])})()
A.bt(b.typeUniverse,JSON.parse('{"Fi":{"G":[],"e":[],"f":[]},"aKy":{"Y":["Fi"]}}'))
var y={a:A.w("F<fb>"),e:A.w("r<e>"),b:A.w("tX"),l:A.w("a4<@,@>?"),f:A.w("~")};(function constants(){D.c8H=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.c9y=new A.D("A confirmar o pagamento\u2026",null,B.cj,null,null,null,null,null,null,null,null)
D.caG=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.t9,B.a4,null,null,null,null,null,null,null)
D.cgw=new A.D("A confirmar o pagamento",null,B.th,null,null,null,null,null,null,null,null)})()};
(a=>{a["19E9wDlDdk23zoWJFnUHLhsZ9Ik="]=a.current})($__dart_deferred_initializers__);