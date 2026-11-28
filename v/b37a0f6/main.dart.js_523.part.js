((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dvh(){return new C.Fn(null)},
Fn:function Fn(d){this.a=d},
aL9:function aL9(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cmK:function cmK(d){this.a=d},
cmI:function cmI(d){this.a=d},
cmJ:function cmJ(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[109]
C=a.updateHolder(c[57],C)
D=c[392]
C.Fn.prototype={
R(){var x=$.cUt()
$.dvi=null
return new C.aL9(x)}}
C.aL9.prototype={
ae(){var x=this
x.ao()
if(x.w==null)$.aB.k4$.push(new C.cmK(x))
else x.Ix()},
Ix(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$Ix=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.alU(q),$async$Ix)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.Ds(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jI(B.ny,null,t),$async$Ix)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.p(new C.cmI(u))
case 1:return A.l(v,w)}})
return A.m($async$Ix,w)},
Ds(d){return this.aYU(d)},
aYU(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Ds=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gS()
a2.al($.j0())
a2.a0(0,$.zs().gaY(),y.b).jK()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.Q().b
i===$&&A.b()
x=7
return A.d(i.P("payments").ak(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").V("id",a4).cm(),$async$Ds)
case 7:o=a6
i=o
i=i==null?null:J.i(i,"partner_profiles")
h=y.l
h.a(i)
g=A.C(i==null?null:J.i(i,"business_name"))
r=g==null?r:g
i=o
i=A.aI(i==null?null:J.i(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.i(i,"bookings"))
i=A.aI(i==null?null:J.i(i,"total_amount"))
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
return A.d(a2.a0(0,$.uF().gec(),i),$async$Ds)
case 11:x=9
break
case 10:x=12
return A.d(a2.a0(0,$.CT().$1(l).gec(),i),$async$Ds)
case 12:case 9:k=a6
j=k.lj(m)
p=A.aM(A.je(n,j),!0)
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
A.ai(a2).bS(0,"/pay/done",new E.a6k(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ds,w)},
u(d){var x=null,w=this.x,v=$.au,u=y.e
return A.kw(x,B.a7,A.bF(!0,A.bK(new A.R(B.vi,w?A.y(A.a([A.b6(B.hL,v,x,x,40),B.aC,D.ci4,B.R,D.ccd,B.bi,A.bG(D.cab,new C.cmJ(d),A.co(B.A,x,x,x,x,x,B.ad,x,x,x))],u),B.w,B.h,B.K,0,B.u):A.y(A.a([A.aoD(x,v,x,x,x,x,x,x,x,x),B.a1,D.cb2],u),B.w,B.h,B.K,0,B.u),x),x,x),x,B.a_,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.cmK.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ai(x).bS(0,"/bookings",null)},
$S:5}
C.cmI.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cmJ.prototype={
$0(){return A.ai(this.a).bS(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fn,A.dA)
x(C.aL9,A.du)
x(C.cmK,A.bw)
w(A.bQ,[C.cmI,C.cmJ])})()
A.bs(b.typeUniverse,JSON.parse('{"Fn":{"G":[],"e":[],"f":[]},"aL9":{"Y":["Fn"]}}'))
var y={a:A.w("F<fd>"),e:A.w("r<e>"),b:A.w("u3"),l:A.w("a5<@,@>?"),f:A.w("~")};(function constants(){D.cab=new A.D("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.cb2=new A.D("A confirmar o pagamento\u2026",null,B.ch,null,null,null,null,null,null,null,null)
D.ccd=new A.D("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.ts,B.a6,null,null,null,null,null,null,null)
D.ci4=new A.D("A confirmar o pagamento",null,B.zw,null,null,null,null,null,null,null,null)})()};
(a=>{a["hnzsK9zXk+kJRZ0vETmFeeSCgXY="]=a.current})($__dart_deferred_initializers__);