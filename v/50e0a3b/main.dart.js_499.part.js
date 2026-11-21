((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dch(){return new C.Ee(null)},
Ee:function Ee(d){this.a=d},
aGS:function aGS(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
c9V:function c9V(d){this.a=d},
c9T:function c9T(d){this.a=d},
c9U:function c9U(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[104]
C=a.updateHolder(c[54],C)
D=c[388]
C.Ee.prototype={
R(){var x=$.cDB()
$.dci=null
return new C.aGS(x)}}
C.aGS.prototype={
ak(){var x=this
x.aH()
if(x.w==null)$.ay.k4$.push(new C.c9V(x))
else x.HC()},
HC(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$HC=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.aiG(q),$async$HC)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.CL(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.k9(B.pu,null,t),$async$HC)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.q(new C.c9T(u))
case 1:return A.l(v,w)}})
return A.m($async$HC,w)},
CL(d){return this.aVl(d)},
aVl(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$CL=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gU()
a2.al($.mc())
a2.a2(0,$.n0().gaW(),y.b).jD()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.S().b
i===$&&A.b()
x=7
return A.d(i.T("payments").aI(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").X("id",a4).dX(),$async$CL)
case 7:o=a6
i=o
i=i==null?null:J.h(i,"partner_profiles")
h=y.l
h.a(i)
g=A.L(i==null?null:J.h(i,"business_name"))
r=g==null?r:g
i=o
i=A.aX(i==null?null:J.h(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.h(i,"bookings"))
i=A.aX(i==null?null:J.h(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.o(i==null?null:J.h(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.L(i==null?null:J.h(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a2(0,$.BP().gf1(),i),$async$CL)
case 11:x=9
break
case 10:x=12
return A.d(a2.a2(0,$.OX().$1(l).gf1(),i),$async$CL)
case 12:case 9:k=a6
j=k.o0(m)
p=A.bh(A.ij(n,j),!0)
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
A.ar(a2).bR(0,"/pay/done",new E.a3N(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$CL,w)},
u(d){var x=null,w=this.x,v=$.ao,u=y.e
return A.kg(x,B.am,A.bB(!0,A.bO(new A.U(B.ui,w?A.I(A.a([A.b6(B.h7,v,x,x,40),B.ak,D.cbd,B.a0,D.c5X,B.bx,A.bE(D.c40,new C.c9U(d),A.ch(B.A,x,x,x,x,x,B.aa,x,x,x))],u),B.x,B.l,B.W,0,B.w):A.I(A.a([A.ZZ(x,v,x,x,x,x,x,x,x,x),B.ad,D.c4P],u),B.x,B.l,B.W,0,B.w),x),x,x),x,B.X,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.c9V.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ar(x).bR(0,"/bookings",null)},
$S:6}
C.c9T.prototype={
$0(){return this.a.x=!0},
$S:0}
C.c9U.prototype={
$0(){return A.ar(this.a).bR(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Ee,A.dv)
x(C.aGS,A.dk)
x(C.c9V,A.bw)
w(A.bL,[C.c9T,C.c9U])})()
A.bt(b.typeUniverse,JSON.parse('{"Ee":{"H":[],"e":[],"f":[]},"aGS":{"a1":["Ee"]}}'))
var y={a:A.v("E<fk>"),e:A.v("r<e>"),b:A.v("pj"),l:A.v("a3<@,@>?"),f:A.v("~")};(function constants(){D.c40=new A.C("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.c4P=new A.C("A confirmar o pagamento\u2026",null,B.di,null,null,null,null,null,null,null,null)
D.c5X=new A.C("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.ym,B.a3,null,null,null,null,null,null,null)
D.cbd=new A.C("A confirmar o pagamento",null,B.og,null,null,null,null,null,null,null,null)})()};
(a=>{a["yZ/VzfZUJ/ZeR4IB40os5QJJTPM="]=a.current})($__dart_deferred_initializers__);