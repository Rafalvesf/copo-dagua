((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,C={
d0Y(){return new C.CT(null)},
CT:function CT(d){this.a=d},
aDa:function aDa(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
c1T:function c1T(d){this.a=d},
c1R:function c1R(d){this.a=d},
c1S:function c1S(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[135]
F=c[165]
C=a.updateHolder(c[52],C)
D=c[380]
C.CT.prototype={
R(){var x=$.ctI()
$.d0Z=null
return new C.aDa(x)}}
C.aDa.prototype={
ak(){var x=this
x.aG()
if(x.w==null)$.aw.k4$.push(new C.c1T(x))
else x.Gv()},
Gv(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$Gv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.afS(q),$async$Gv)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.BT(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jN(B.oT,null,t),$async$Gv)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.q(new C.c1R(u))
case 1:return A.l(v,w)}})
return A.m($async$Gv,w)},
BT(d){return this.aRq(d)},
aRq(a3){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$BT=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:a1=s.gU()
a1.av($.lP())
a1.a2(0,$.mz().gaW(),y.b).jp()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.Z().b
i===$&&A.b()
x=7
return A.d(i.S("payments").aO(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").a0("id",a3).em(),$async$BT)
case 7:o=a5
i=o
i=i==null?null:J.h(i,"partner_profiles")
h=y.l
h.a(i)
g=A.P(i==null?null:J.h(i,"business_name"))
r=g==null?r:g
i=o
q=J.o(i==null?null:J.h(i,"type"),"deposit")?"Sinal":"Restante"
f=o
i=A.b9(f==null?null:J.h(f,"amount"))
e=i==null?null:i
n=e==null?0:e
i=o
i=h.a(i==null?null:J.h(i,"bookings"))
i=A.b9(i==null?null:J.h(i,"total_amount"))
d=i==null?null:i
m=d==null?n:d
i=o
l=A.P(i==null?null:J.h(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a1.a2(0,$.AA().ghr(),i),$async$BT)
case 11:x=9
break
case 10:x=12
return A.d(a1.a2(0,$.Nc().$1(l).ghr(),i),$async$BT)
case 12:case 9:k=a5
j=k.oP(m)
p=A.by(F.iR(n,j),!0)
u=2
x=6
break
case 4:u=3
a2=t.pop()
x=6
break
case 3:x=2
break
case 6:a1=s.c
if(a1==null){x=1
break}i=r
h=q
f=p
A.au(a1).c_(0,"/pay/done",new E.IR(i,h,f,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$BT,w)},
u(d){var x=null,w=this.x,v=$.a5,u=y.e
return A.ku(x,B.af,A.bo(!0,A.bF(new A.a_(B.tt,w?A.I(A.a([A.aJ(B.eo,v,x,x,40),B.ap,D.c3T,B.a4,D.c_2,B.bH,A.bO(D.bYl,new C.c1S(d),A.cB(B.D,x,x,x,x,x,B.am,x,x))],u),B.x,B.l,B.a_,0,B.w):A.I(A.a([A.B6(x,v,x,x,x,x,x,x,x,x),B.ai,D.bZ4],u),B.x,B.l,B.a_,0,B.w),x),x,x),x,B.V,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.c1T.prototype={
$1(d){var x=this.a.c
if(x!=null)A.au(x).c_(0,"/bookings",null)},
$S:5}
C.c1R.prototype={
$0(){return this.a.x=!0},
$S:0}
C.c1S.prototype={
$0(){return A.au(this.a).c_(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.CT,A.dx)
x(C.aDa,A.ds)
x(C.c1T,A.bv)
w(A.bI,[C.c1R,C.c1S])})()
A.bx(b.typeUniverse,JSON.parse('{"CT":{"F":[],"e":[],"f":[]},"aDa":{"a0":["CT"]}}'))
var y={a:A.v("H<fb>"),e:A.v("q<e>"),b:A.v("oZ"),l:A.v("a2<@,@>?"),f:A.v("~")};(function constants(){D.bYl=new A.J("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.bZ4=new A.J("A confirmar o pagamento\u2026",null,B.e8,null,null,null,null,null,null,null,null)
D.c_2=new A.J("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.jg,B.aa,null,null,null,null,null,null,null)
D.c3T=new A.J("A confirmar o pagamento",null,B.k9,null,null,null,null,null,null,null,null)})()};
(a=>{a["t+4ePlCfW3Vw3166pQZZuHWPpsc="]=a.current})($__dart_deferred_initializers__);