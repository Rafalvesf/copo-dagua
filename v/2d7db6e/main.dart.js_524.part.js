((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dtU(){return new C.Fg(null)},
Fg:function Fg(d){this.a=d},
aKu:function aKu(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
clI:function clI(d){this.a=d},
clG:function clG(d){this.a=d},
clH:function clH(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[109]
C=a.updateHolder(c[57],C)
D=c[396]
C.Fg.prototype={
R(){var x=$.cT8()
$.dtV=null
return new C.aKu(x)}}
C.aKu.prototype={
ac(){var x=this
x.ao()
if(x.w==null)$.aA.k4$.push(new C.clI(x))
else x.If()},
If(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$If=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.alq(q),$async$If)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.Db(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jH(B.nj,null,t),$async$If)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.p(new C.clG(u))
case 1:return A.l(v,w)}})
return A.m($async$If,w)},
Db(d){return this.aXQ(d)},
aXQ(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Db=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gS()
a2.ak($.j_())
a2.a0(0,$.zm().gaX(),y.b).jE()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.Q().b
i===$&&A.b()
x=7
return A.d(i.P("payments").aj(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").V("id",a4).cj(),$async$Db)
case 7:o=a6
i=o
i=i==null?null:J.i(i,"partner_profiles")
h=y.l
h.a(i)
g=A.C(i==null?null:J.i(i,"business_name"))
r=g==null?r:g
i=o
i=A.aG(i==null?null:J.i(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.i(i,"bookings"))
i=A.aG(i==null?null:J.i(i,"total_amount"))
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
return A.d(a2.a0(0,$.uy().ge7(),i),$async$Db)
case 11:x=9
break
case 10:x=12
return A.d(a2.a0(0,$.CJ().$1(l).ge7(),i),$async$Db)
case 12:case 9:k=a6
j=k.ld(m)
p=A.aK(A.jd(n,j),!0)
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
A.ah(a2).bQ(0,"/pay/done",new E.a66(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Db,w)},
u(d){var x=null,w=this.x,v=$.at,u=y.e
return A.kt(x,B.a6,A.bD(!0,A.bM(new A.S(B.v1,w?A.A(A.a([A.b6(B.hE,v,x,x,40),B.aB,D.ch_,B.Q,D.cb5,B.bh,A.bE(D.c93,new C.clH(d),A.cj(B.z,x,x,x,x,x,B.ac,x,x,x))],u),B.v,B.h,B.J):A.A(A.a([A.ao7(x,v,x,x,x,x,x,x,x,x),B.a0,D.c9V],u),B.v,B.h,B.J),x),x,x),x,B.Z,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.clI.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ah(x).bQ(0,"/bookings",null)},
$S:5}
C.clG.prototype={
$0(){return this.a.x=!0},
$S:0}
C.clH.prototype={
$0(){return A.ah(this.a).bQ(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fg,A.dz)
x(C.aKu,A.du)
x(C.clI,A.bu)
w(A.bP,[C.clG,C.clH])})()
A.bn(b.typeUniverse,JSON.parse('{"Fg":{"G":[],"e":[],"f":[]},"aKu":{"Y":["Fg"]}}'))
var y={a:A.w("F<fb>"),e:A.w("r<e>"),b:A.w("tX"),l:A.w("a4<@,@>?"),f:A.w("~")};(function constants(){D.c93=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.c9V=new A.D("A confirmar o pagamento\u2026",null,B.cf,null,null,null,null,null,null,null,null)
D.cb5=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.tb,B.a5,null,null,null,null,null,null,null)
D.ch_=new A.D("A confirmar o pagamento",null,B.zf,null,null,null,null,null,null,null,null)})()};
(a=>{a["g4+qYLMSR3AGoJyqlBsN3x4rQHc="]=a.current})($__dart_deferred_initializers__);