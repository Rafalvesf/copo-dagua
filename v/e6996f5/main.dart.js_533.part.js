((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
duU(){return new C.Fb(null)},
Fb:function Fb(d){this.a=d},
aKe:function aKe(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cmc:function cmc(d){this.a=d},
cma:function cma(d){this.a=d},
cmb:function cmb(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[110]
C=a.updateHolder(c[57],C)
D=c[388]
C.Fb.prototype={
R(){var x=$.cTT()
$.duV=null
return new C.aKe(x)}}
C.aKe.prototype={
ad(){var x=this
x.aq()
if(x.w==null)$.az.k4$.push(new C.cmc(x))
else x.HW()},
HW(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$HW=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.al4(q),$async$HW)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.D_(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.k_(B.nc,null,t),$async$HW)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.p(new C.cma(u))
case 1:return A.l(v,w)}})
return A.m($async$HW,w)},
D_(d){return this.aWZ(d)},
aWZ(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$D_=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gS()
a2.aj($.j_())
a2.a_(0,$.zf().gaX(),y.b).jy()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.Q().b
i===$&&A.b()
x=7
return A.d(i.P("payments").ai(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").U("id",a4).cf(),$async$D_)
case 7:o=a6
i=o
i=i==null?null:J.i(i,"partner_profiles")
h=y.l
h.a(i)
g=A.B(i==null?null:J.i(i,"business_name"))
r=g==null?r:g
i=o
i=A.aD(i==null?null:J.i(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.i(i,"bookings"))
i=A.aD(i==null?null:J.i(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.o(i==null?null:J.i(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.B(i==null?null:J.i(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a_(0,$.uC().gdG(),i),$async$D_)
case 11:x=9
break
case 10:x=12
return A.d(a2.a_(0,$.CE().$1(l).gdG(),i),$async$D_)
case 12:case 9:k=a6
j=k.l8(m)
p=A.aJ(A.jf(n,j),!0)
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
A.ae(a2).bQ(0,"/pay/done",new E.a5V(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$D_,w)},
u(d){var x=null,w=this.x,v=$.au,u=y.e
return A.ku(x,B.a4,A.bB(!0,A.bO(new A.S(B.uQ,w?A.z(A.a([A.b9(B.hy,v,x,x,40),B.aA,D.caN,B.P,D.ceK,B.bh,new A.am(A.bC(D.cc6,new C.cmb(d),A.cc(B.z,x,x,x,x,x,B.aa,x,x,x)),x)],u),B.v,B.h,B.J):A.z(A.a([A.anR(x,v,x,x,x,x,x,x,x,x),B.a_,D.c87],u),B.v,B.h,B.J),x),x,x),x,B.Z,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.cmc.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ae(x).bQ(0,"/bookings",null)},
$S:5}
C.cma.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cmb.prototype={
$0(){return A.ae(this.a).bQ(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fb,A.dC)
x(C.aKe,A.dw)
x(C.cmc,A.bs)
w(A.bL,[C.cma,C.cmb])})()
A.bq(b.typeUniverse,JSON.parse('{"Fb":{"G":[],"e":[],"f":[]},"aKe":{"a0":["Fb"]}}'))
var y={a:A.y("F<f9>"),e:A.y("r<e>"),b:A.y("tY"),l:A.y("a5<@,@>?"),f:A.y("~")};(function constants(){D.c87=new A.D("A confirmar o pagamento\u2026",null,B.cc,null,null,null,null,null,null,null)
D.caN=new A.D("A confirmar o pagamento",null,B.t1,null,null,null,null,null,null,null)
D.cc6=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null)
D.ceK=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.rU,B.a3,null,null,null,null,null,null)})()};
(a=>{a["eaw1Ma9lEBI9siozDBJW8gZ3MTw="]=a.current})($__dart_deferred_initializers__);