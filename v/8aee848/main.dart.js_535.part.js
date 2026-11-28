((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dvR(){return new C.Fh(null)},
Fh:function Fh(d){this.a=d},
aKF:function aKF(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cmV:function cmV(d){this.a=d},
cmT:function cmT(d){this.a=d},
cmU:function cmU(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[110]
C=a.updateHolder(c[57],C)
D=c[388]
C.Fh.prototype={
R(){var x=$.cUM()
$.dvS=null
return new C.aKF(x)}}
C.aKF.prototype={
ad(){var x=this
x.aq()
if(x.w==null)$.az.k4$.push(new C.cmV(x))
else x.HZ()},
HZ(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$HZ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.alo(q),$async$HZ)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.D5(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jG(B.pS,null,t),$async$HZ)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.p(new C.cmT(u))
case 1:return A.l(v,w)}})
return A.m($async$HZ,w)},
D5(d){return this.aXc(d)},
aXc(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$D5=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gS()
a2.ai($.j4())
a2.a_(0,$.zk().gaX(),y.b).jf()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.P().b
i===$&&A.b()
x=7
return A.d(i.P("payments").al(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").V("id",a4).cj(),$async$D5)
case 7:o=a6
i=o
i=i==null?null:J.h(i,"partner_profiles")
h=y.l
h.a(i)
g=A.B(i==null?null:J.h(i,"business_name"))
r=g==null?r:g
i=o
i=A.aD(i==null?null:J.h(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.h(i,"bookings"))
i=A.aD(i==null?null:J.h(i,"total_amount"))
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
return A.d(a2.a_(0,$.uH().gdI(),i),$async$D5)
case 11:x=9
break
case 10:x=12
return A.d(a2.a_(0,$.CL().$1(l).gdI(),i),$async$D5)
case 12:case 9:k=a6
j=k.l9(m)
p=A.aJ(A.ji(n,j),!0)
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
A.ae(a2).bQ(0,"/pay/done",new E.a6d(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$D5,w)},
u(d){var x=null,w=this.x,v=$.au,u=y.e
return A.kx(x,B.a3,A.bB(!0,A.bO(new A.S(B.uR,w?A.y(A.a([A.b9(B.hB,v,x,x,40),B.aA,D.caV,B.P,D.ceS,B.bj,new A.am(A.bD(D.cce,new C.cmU(d),A.ce(B.z,x,x,x,x,x,B.ab,x,x,x)),x)],u),B.u,B.h,B.J):A.y(A.a([A.aob(x,v,x,x,x,x,x,x,x,x),B.a_,D.c8e],u),B.u,B.h,B.J),x),x,x),x,B.Z,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.cmV.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ae(x).bQ(0,"/bookings",null)},
$S:5}
C.cmT.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cmU.prototype={
$0(){return A.ae(this.a).bQ(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fh,A.dC)
x(C.aKF,A.dw)
x(C.cmV,A.bu)
w(A.bL,[C.cmT,C.cmU])})()
A.br(b.typeUniverse,JSON.parse('{"Fh":{"G":[],"e":[],"f":[]},"aKF":{"a_":["Fh"]}}'))
var y={a:A.z("F<fb>"),e:A.z("r<e>"),b:A.z("u2"),l:A.z("a3<@,@>?"),f:A.z("~")};(function constants(){D.c8e=new A.D("A confirmar o pagamento\u2026",null,B.cc,null,null,null,null,null,null,null)
D.caV=new A.D("A confirmar o pagamento",null,B.t2,null,null,null,null,null,null,null)
D.cce=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null)
D.ceS=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.rV,B.a4,null,null,null,null,null,null)})()};
(a=>{a["Gpv+vE8YmmFCOzaBeiSMIUQRNcY="]=a.current})($__dart_deferred_initializers__);