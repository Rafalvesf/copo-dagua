((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
d5l(){return new C.Dp(null)},
Dp:function Dp(d){this.a=d},
aDJ:function aDJ(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
c3n:function c3n(d){this.a=d},
c3l:function c3l(d){this.a=d},
c3m:function c3m(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[103]
C=a.updateHolder(c[54],C)
D=c[386]
C.Dp.prototype={
S(){var x=$.cy2()
$.d5m=null
return new C.aDJ(x)}}
C.aDJ.prototype={
ak(){var x=this
x.aE()
if(x.w==null)$.az.ry$.push(new C.c3n(x))
else x.GN()},
GN(){var x=0,w=A.m(y.f),v,u=this,t,s,r,q
var $async$GN=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.agS(q),$async$GN)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.C0(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.js(B.mw,null,t),$async$GN)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.p(new C.c3l(u))
case 1:return A.k(v,w)}})
return A.l($async$GN,w)},
C0(d){return this.aSA(d)},
aSA(a4){var x=0,w=A.m(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$C0=A.i(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gV()
a2.ai($.lR())
a2.a2(0,$.mz().gaR(),y.b).jf()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.Q().b
i===$&&A.b()
x=7
return A.d(i.P("payments").az(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").W("id",a4).dv(),$async$C0)
case 7:o=a6
i=o
i=i==null?null:J.f(i,"partner_profiles")
h=y.l
h.a(i)
g=A.I(i==null?null:J.f(i,"business_name"))
r=g==null?r:g
i=o
i=A.aM(i==null?null:J.f(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.f(i,"bookings"))
i=A.aM(i==null?null:J.f(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.n(i==null?null:J.f(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.I(i==null?null:J.f(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a2(0,$.B7().geD(),i),$async$C0)
case 11:x=9
break
case 10:x=12
return A.d(a2.a2(0,$.NK().$1(l).geD(),i),$async$C0)
case 12:case 9:k=a6
j=k.mL(m)
p=A.aT(A.i4(n,j),!0)
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
A.ap(a2).bN(0,"/pay/done",new E.a28(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$C0,w)},
u(d){var x=null,w=this.x,v=$.ag,u=y.e
return A.k2(x,B.ag,A.bA(!0,A.bP(new A.R(B.u0,w?A.D(A.a([A.b0(B.fz,v,x,x,40),B.al,D.cbq,B.Z,D.c5W,B.bk,A.by(D.c3X,new C.c3m(d),A.c3(B.z,x,x,x,x,x,B.a8,x,x,x))],u),B.x,B.j,B.V,0,B.w):A.D(A.a([A.Ys(x,v,x,x,x,x,x,x,x,x),B.a7,D.c4M],u),B.x,B.j,B.V,0,B.w),x),x,x),x,B.Y,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.c3n.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ap(x).bN(0,"/bookings",null)},
$S:7}
C.c3l.prototype={
$0(){return this.a.x=!0},
$S:0}
C.c3m.prototype={
$0(){return A.ap(this.a).bN(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Dp,A.dk)
x(C.aDJ,A.df)
x(C.c3n,A.bq)
w(A.bI,[C.c3l,C.c3m])})()
A.bj(b.typeUniverse,JSON.parse('{"Dp":{"F":[],"e":[]},"aDJ":{"a_":["Dp"]}}'))
var y={a:A.u("G<fc>"),e:A.u("q<e>"),b:A.u("oU"),l:A.u("a6<@,@>?"),f:A.u("~")};(function constants(){D.c3X=new A.z("Ver reservas",null,null,null,null,null,null,null,null,null,null)
D.c4M=new A.z("A confirmar o pagamento\u2026",null,B.d8,null,null,null,null,null,null,null,null)
D.c5W=new A.z("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.y5,B.a6,null,null,null,null,null,null,null)
D.cbq=new A.z("A confirmar o pagamento",null,B.o6,null,null,null,null,null,null,null,null)})()};
(a=>{a["LNANxJphIAbZOMZHLYzFdSMEZ0s="]=a.current})($__dart_deferred_initializers__);