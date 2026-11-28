((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dpy(){return new C.F8(null)},
F8:function F8(d){this.a=d},
aJR:function aJR(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cj3:function cj3(d){this.a=d},
cj1:function cj1(d){this.a=d},
cj2:function cj2(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[108]
C=a.updateHolder(c[57],C)
D=c[383]
C.F8.prototype={
P(){var x=$.cP7()
$.dpz=null
return new C.aJR(x)}}
C.aJR.prototype={
al(){var x=this
x.aH()
if(x.w==null)$.az.k4$.push(new C.cj3(x))
else x.Ic()},
Ic(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$Ic=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.akP(q),$async$Ic)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.Da(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jz(B.ln,null,t),$async$Ic)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.q(new C.cj1(u))
case 1:return A.l(v,w)}})
return A.m($async$Ic,w)},
Da(d){return this.aXq(d)},
aXq(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Da=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gT()
a2.ai($.jv())
a2.a1(0,$.qb().gaX(),y.b).jI()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.T().b
i===$&&A.b()
x=7
return A.d(i.R("payments").az(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").W("id",a4).dA(),$async$Da)
case 7:o=a6
i=o
i=i==null?null:J.h(i,"partner_profiles")
h=y.l
h.a(i)
g=A.B(i==null?null:J.h(i,"business_name"))
r=g==null?r:g
i=o
i=A.aJ(i==null?null:J.h(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.h(i,"bookings"))
i=A.aJ(i==null?null:J.h(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.o(i==null?null:J.h(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.B(i==null?null:J.h(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a1(0,$.uw().gem(),i),$async$Da)
case 11:x=9
break
case 10:x=12
return A.d(a2.a1(0,$.CC().$1(l).gem(),i),$async$Da)
case 12:case 9:k=a6
j=k.lg(m)
p=A.aQ(A.j8(n,j),!0)
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
A.ai(a2).bS(0,"/pay/done",new E.a5y(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Da,w)},
u(d){var x=null,w=this.x,v=$.ap,u=y.e
return A.kq(x,B.a9,A.bD(!0,A.bN(new A.R(B.uN,w?A.C(A.a([A.b2(B.hv,v,x,x,40),B.aA,D.cg0,B.Y,D.cav,B.bf,A.bC(D.c8w,new C.cj2(d),A.cu(B.A,x,x,x,x,x,B.af,x,x,x))],u),B.w,B.j,B.L,0,B.v):A.C(A.a([A.anu(x,v,x,x,x,x,x,x,x,x),B.a3,D.c9m],u),B.w,B.j,B.L,0,B.v),x),x,x),x,B.a_,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.cj3.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ai(x).bS(0,"/bookings",null)},
$S:5}
C.cj1.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cj2.prototype={
$0(){return A.ai(this.a).bS(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.F8,A.dD)
x(C.aJR,A.dy)
x(C.cj3,A.bx)
w(A.bR,[C.cj1,C.cj2])})()
A.bs(b.typeUniverse,JSON.parse('{"F8":{"J":[],"e":[],"f":[]},"aJR":{"a_":["F8"]}}'))
var y={a:A.w("F<f7>"),e:A.w("r<e>"),b:A.w("tV"),l:A.w("a4<@,@>?"),f:A.w("~")};(function constants(){D.c8w=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.c9m=new A.D("A confirmar o pagamento\u2026",null,B.cq,null,null,null,null,null,null,null,null)
D.cav=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.yU,B.a5,null,null,null,null,null,null,null)
D.cg0=new A.D("A confirmar o pagamento",null,B.z0,null,null,null,null,null,null,null,null)})()};
(a=>{a["0qSzyMSG5zjMGanEwkzvsVArn78="]=a.current})($__dart_deferred_initializers__);