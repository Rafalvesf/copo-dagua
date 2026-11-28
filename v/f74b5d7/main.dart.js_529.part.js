((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dvz(){return new C.Fi(null)},
Fi:function Fi(d){this.a=d},
aKK:function aKK(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cmY:function cmY(d){this.a=d},
cmW:function cmW(d){this.a=d},
cmX:function cmX(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[109]
C=a.updateHolder(c[57],C)
D=c[390]
C.Fi.prototype={
R(){var x=$.cUA()
$.dvA=null
return new C.aKK(x)}}
C.aKK.prototype={
ac(){var x=this
x.ap()
if(x.w==null)$.aA.k4$.push(new C.cmY(x))
else x.Ih()},
Ih(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$Ih=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.alw(q),$async$Ih)
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
case 4:if(u.c!=null)u.p(new C.cmW(u))
case 1:return A.l(v,w)}})
return A.m($async$Ih,w)},
De(d){return this.aY7(d)},
aY7(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$De=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gS()
a2.aj($.j0())
a2.a_(0,$.zn().gaX(),y.b).jF()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.P().b
i===$&&A.b()
x=7
return A.d(i.P("payments").ai(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").U("id",a4).ci(),$async$De)
case 7:o=a6
i=o
i=i==null?null:J.i(i,"partner_profiles")
h=y.l
h.a(i)
g=A.C(i==null?null:J.i(i,"business_name"))
r=g==null?r:g
i=o
i=A.aE(i==null?null:J.i(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.i(i,"bookings"))
i=A.aE(i==null?null:J.i(i,"total_amount"))
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
return A.d(a2.a_(0,$.uA().gdN(),i),$async$De)
case 11:x=9
break
case 10:x=12
return A.d(a2.a_(0,$.CM().$1(l).gdN(),i),$async$De)
case 12:case 9:k=a6
j=k.ld(m)
p=A.aK(A.jg(n,j),!0)
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
A.ad(a2).bQ(0,"/pay/done",new E.a6a(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$De,w)},
u(d){var x=null,w=this.x,v=$.au,u=y.e
return A.kt(x,B.a4,A.bA(!0,A.bM(new A.S(B.v4,w?A.z(A.a([A.b5(B.hC,v,x,x,40),B.aB,D.cgU,B.Q,D.cb1,B.bi,A.bE(D.c91,new C.cmX(d),A.ci(B.z,x,x,x,x,x,B.ab,x,x,x))],u),B.v,B.h,B.J):A.z(A.a([A.aoh(x,v,x,x,x,x,x,x,x,x),B.a_,D.c9U],u),B.v,B.h,B.J),x),x,x),x,B.Z,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.cmY.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ad(x).bQ(0,"/bookings",null)},
$S:5}
C.cmW.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cmX.prototype={
$0(){return A.ad(this.a).bQ(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fi,A.dB)
x(C.aKK,A.dv)
x(C.cmY,A.bx)
w(A.bQ,[C.cmW,C.cmX])})()
A.bu(b.typeUniverse,JSON.parse('{"Fi":{"G":[],"e":[],"f":[]},"aKK":{"Z":["Fi"]}}'))
var y={a:A.x("F<fb>"),e:A.x("r<e>"),b:A.x("tY"),l:A.x("a5<@,@>?"),f:A.x("~")};(function constants(){D.c91=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.c9U=new A.D("A confirmar o pagamento\u2026",null,B.ce,null,null,null,null,null,null,null,null)
D.cb1=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.ta,B.a5,null,null,null,null,null,null,null)
D.cgU=new A.D("A confirmar o pagamento",null,B.ti,null,null,null,null,null,null,null,null)})()};
(a=>{a["OXbHHR8OcqrS7sKP8hztSVTB+lc="]=a.current})($__dart_deferred_initializers__);