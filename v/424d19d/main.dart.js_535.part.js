((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dvk(){return new C.Fj(null)},
Fj:function Fj(d){this.a=d},
aKD:function aKD(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cme:function cme(d){this.a=d},
cmc:function cmc(d){this.a=d},
cmd:function cmd(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[110]
C=a.updateHolder(c[57],C)
D=c[388]
C.Fj.prototype={
P(){var x=$.cUg()
$.dvl=null
return new C.aKD(x)}}
C.aKD.prototype={
ac(){var x=this
x.ap()
if(x.w==null)$.az.k4$.push(new C.cme(x))
else x.HX()},
HX(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$HX=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.alo(q),$async$HX)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.D2(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.k2(B.pP,null,t),$async$HX)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.n(new C.cmc(u))
case 1:return A.l(v,w)}})
return A.m($async$HX,w)},
D2(d){return this.aX8(d)},
aX8(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$D2=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gR()
a2.ai($.j4())
a2.a_(0,$.zm().gaX(),y.b).ny()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.Q().b
i===$&&A.b()
x=7
return A.d(i.S("payments").an(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").X("id",a4).cl(),$async$D2)
case 7:o=a6
i=o
i=i==null?null:J.i(i,"partner_profiles")
h=y.l
h.a(i)
g=A.A(i==null?null:J.i(i,"business_name"))
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
l=A.A(i==null?null:J.i(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a_(0,$.uH().gdE(),i),$async$D2)
case 11:x=9
break
case 10:x=12
return A.d(a2.a_(0,$.CN().$1(l).gdE(),i),$async$D2)
case 12:case 9:k=a6
j=k.l8(m)
p=A.aJ(A.jj(n,j),!0)
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
A.ae(a2).bR(0,"/pay/done",new E.a6e(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$D2,w)},
u(d){var x=null,w=this.x,v=$.au,u=y.e
return A.ky(x,B.a3,A.bB(!0,A.bN(new A.S(B.uO,w?A.x(A.a([A.b9(B.hB,v,x,x,40),B.aA,D.caX,B.P,D.ceU,B.bk,new A.ak(A.bD(D.ccg,new C.cmd(d),A.ce(B.z,x,x,x,x,x,B.ab,x,x,x)),x)],u),B.u,B.h,B.J):A.x(A.a([A.aoa(x,v,x,x,x,x,x,x,x,x),B.a_,D.c8g],u),B.u,B.h,B.J),x),x,x),x,B.Z,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.cme.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ae(x).bR(0,"/bookings",null)},
$S:5}
C.cmc.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cmd.prototype={
$0(){return A.ae(this.a).bR(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fj,A.dC)
x(C.aKD,A.dw)
x(C.cme,A.bu)
w(A.bL,[C.cmc,C.cmd])})()
A.br(b.typeUniverse,JSON.parse('{"Fj":{"G":[],"e":[],"f":[]},"aKD":{"Z":["Fj"]}}'))
var y={a:A.B("F<fa>"),e:A.B("r<e>"),b:A.B("u3"),l:A.B("a3<@,@>?"),f:A.B("~")};(function constants(){D.c8g=new A.D("A confirmar o pagamento\u2026",null,B.cc,null,null,null,null,null,null,null)
D.caX=new A.D("A confirmar o pagamento",null,B.t_,null,null,null,null,null,null,null)
D.ccg=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null)
D.ceU=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.rS,B.a4,null,null,null,null,null,null)})()};
(a=>{a["ysFJwdQ7FT8gO386pr39S1M9WOU="]=a.current})($__dart_deferred_initializers__);