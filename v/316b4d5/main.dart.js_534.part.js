((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dvI(){return new C.Fk(null)},
Fk:function Fk(d){this.a=d},
aLh:function aLh(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
clz:function clz(d){this.a=d},
clx:function clx(d){this.a=d},
cly:function cly(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
E=c[111]
C=a.updateHolder(c[57],C)
D=c[392]
C.Fk.prototype={
P(){var x=$.cUo()
$.dvJ=null
return new C.aLh(x)}}
C.aLh.prototype={
ad(){var x=this
x.ao()
if(x.w==null)$.aA.k4$.push(new C.clz(x))
else x.HY()},
HY(){var x=0,w=A.n(y.f),v,u=this,t,s,r,q
var $async$HY=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:q=u.w
q.toString
t=y.f
s=0
case 3:if(!(s<8&&u.c!=null)){x=4
break}x=5
return A.d(A.HU(q),$async$HY)
case 5:r=e.a
if(u.c==null){x=1
break}if(r==="paid"){v=u.D4(q)
x=1
break}if(r==="awaiting_multibanco"||r==="processing"){x=4
break}x=6
return A.d(A.jJ(B.nl,null,t),$async$HY)
case 6:++s
x=3
break
case 4:if(u.c!=null)u.p(new C.clx(u))
case 1:return A.l(v,w)}})
return A.m($async$HY,w)},
D4(d){return this.aXM(d)},
aXM(a4){var x=0,w=A.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$D4=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:a2=s.gS()
a2.ak($.iy())
a2.a0(0,$.zm().gb1(),y.b).nA()
r="Parceiro"
q="Pagamento"
p=""
u=4
i=$.Q().b
i===$&&A.b()
x=7
return A.d(i.R("payments").al(0,"type, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").V("id",a4).cd(),$async$D4)
case 7:o=a6
i=o
i=i==null?null:J.i(i,"partner_profiles")
h=y.l
h.a(i)
g=A.y(i==null?null:J.i(i,"business_name"))
r=g==null?r:g
i=o
i=A.aF(i==null?null:J.i(i,"amount"))
f=i==null?null:i
n=f==null?0:f
i=o
i=h.a(i==null?null:J.i(i,"bookings"))
i=A.aF(i==null?null:J.i(i,"total_amount"))
e=i==null?null:i
m=e==null?n:e
i=o
if(J.o(i==null?null:J.i(i,"type"),"deposit"))d=m>0&&n>=m?"Pagamento":"Sinal"
else d="Restante"
q=d
i=o
l=A.y(i==null?null:J.i(i,"partner_id"))
i=y.a
x=l==null?8:10
break
case 8:x=11
return A.d(a2.a0(0,$.uF().gdO(),i),$async$D4)
case 11:x=9
break
case 10:x=12
return A.d(a2.a0(0,$.wG().$1(l).gdO(),i),$async$D4)
case 12:case 9:k=a6
j=k.k7(m)
p=A.aL(A.jg(n,j),!0)
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
A.ae(a2).bQ(0,"/pay/done",new E.a6u(i,h,a1,null,null,null,"Ver reservas","/bookings","Voltar ao in\xedcio","/"))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$D4,w)},
t(d){var x=null,w=this.x,v=$.ay,u=y.e
return A.ln(x,B.ac,A.bF(!0,A.bG(new A.S(B.uV,w?A.x(A.a([A.b4(B.fy,v,x,x,40),B.aB,D.cbC,B.M,D.cfu,B.br,new A.am(A.bD(D.ccW,new C.cly(d),A.cd(B.a4,x,x,x,x,x,B.a9,x,x,x)),x)],u),B.u,B.h,B.I):A.x(A.a([A.Rw(x,v,x,x,x,x,x,x,x,x),B.a0,D.c8V],u),B.u,B.h,B.I),x),x,x),x,B.Y,!0),x,!1,x,x)}}
var z=a.updateTypes([])
C.clz.prototype={
$1(d){var x=this.a.c
if(x!=null)A.ae(x).bQ(0,"/bookings",null)},
$S:5}
C.clx.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cly.prototype={
$0(){return A.ae(this.a).bQ(0,"/bookings",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fk,A.dB)
x(C.aLh,A.dx)
x(C.clz,A.bv)
w(A.bO,[C.clx,C.cly])})()
A.bq(b.typeUniverse,JSON.parse('{"Fk":{"G":[],"e":[],"f":[]},"aLh":{"Z":["Fk"]}}'))
var y={a:A.B("D<f8>"),e:A.B("r<e>"),b:A.B("u1"),l:A.B("a4<@,@>?"),f:A.B("~")};(function constants(){D.c8V=new A.E("A confirmar o pagamento\u2026",null,B.ce,null,null,null,null,null,null,null)
D.cbC=new A.E("A confirmar o pagamento",null,B.t3,null,null,null,null,null,null,null)
D.ccW=new A.E("Ver reservas",null,null,null,null,null,null,null,null,null)
D.cfu=new A.E("Ainda n\xe3o recebemos a confirma\xe7\xe3o. Assim que chegar, a reserva atualiza sozinha.",null,B.rW,B.a3,null,null,null,null,null,null)})()};
(a=>{a["AQtlglM6lu+oWTpXkz5tpijQhQ4="]=a.current})($__dart_deferred_initializers__);