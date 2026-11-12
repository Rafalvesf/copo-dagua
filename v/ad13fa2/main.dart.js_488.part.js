((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,C={
d1i(){return new C.D0(null)},
D0:function D0(d){this.a=d},
aDg:function aDg(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
c1P:function c1P(d){this.a=d},
c1N:function c1N(d){this.a=d},
c1O:function c1O(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[137]
F=c[166]
C=a.updateHolder(c[52],C)
D=c[371]
C.D0.prototype={
R(){var x=$.ctX()
$.d1j=null
return new C.aDg(x)}}
C.aDg.prototype={
ak(){var x=this
x.aG()
if(x.w==null)$.aw.k4$.push(new C.c1P(x))
else x.GA()},
GA(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$GA=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.afX(q),$async$GA)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.BY(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jO(B.oX,null,t),$async$GA)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.q(new C.c1N(u))
case 1:return A.l(v,w)}})
return A.m($async$GA,w)},
BY(d){return this.aRE(d)},
aRE(a3){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$BY=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:a1=s.gU()
a1.av($.lP())
a1.a2(0,$.my().gaV(),y.b).jp()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.W().b
i===$&&A.b()
x=7
return A.d(i.T("payments").aN(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").a_("id",a3).ec(),$async$BY)
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
i=A.b8(f==null?null:J.h(f,"amount"))
e=i==null?null:i
n=e==null?0:e
i=o
i=h.a(i==null?null:J.h(i,"bookings"))
i=A.b8(i==null?null:J.h(i,"total_amount"))
d=i==null?null:i
m=d==null?n:d
i=o
l=A.P(i==null?null:J.h(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a1.a2(0,$.AE().ghr(),i),$async$BY)
case 11:x=9
break
case 10:x=12
return A.d(a1.a2(0,$.Nj().$1(l).ghr(),i),$async$BY)
case 12:case 9:k=a5
j=k.oP(m)
p=A.by(F.iP(n,j),!0)
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
A.au(a1).bX(0,"/pay/done",new E.IY(i,h,f,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$BY,w)},
u(d){var x=null,w=this.x,v=$.a9,u=y.e
return A.ke(x,B.ag,A.bp(!0,A.bE(new A.a_(B.ty,w?A.J(A.a([A.aK(B.ep,v,x,x,40),B.as,D.c4k,B.a4,D.c_u,B.bM,A.bQ(D.bYO,new C.c1O(d),A.cA(B.C,x,x,x,x,x,B.al,x,x))],u),B.x,B.m,B.a0,0,B.w):A.J(A.a([A.xJ(x,v,x,x,x,x,x,x,x,x),B.ak,D.bZu],u),B.x,B.m,B.a0,0,B.w),x),x,x),x,B.V,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.c1P.prototype={
$1(d){var x=this.a.c
if(x!=null)A.au(x).bX(0,"/bookings",null)},
$S:6}
C.c1N.prototype={
$0(){return this.a.x=!0},
$S:0}
C.c1O.prototype={
$0(){return A.au(this.a).bX(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.D0,A.dx)
x(C.aDg,A.dt)
x(C.c1P,A.bv)
w(A.bI,[C.c1N,C.c1O])})()
A.bx(b.typeUniverse,JSON.parse('{"D0":{"G":[],"e":[],"f":[]},"aDg":{"a0":["D0"]}}'))
var y={a:A.v("H<fc>"),e:A.v("q<e>"),b:A.v("oW"),l:A.v("a2<@,@>?"),f:A.v("~")};(function constants(){D.bYO=new A.I("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.bZu=new A.I("A confirmar o pagamento\u2026",null,B.e7,null,null,null,null,null,null,null,null)
D.c_u=new A.I("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.jb,B.a6,null,null,null,null,null,null,null)
D.c4k=new A.I("A confirmar o pagamento",null,B.k5,null,null,null,null,null,null,null,null)})()};
(a=>{a["U5y/41BwOiANxI/zeFxTc7AnyiQ="]=a.current})($__dart_deferred_initializers__);