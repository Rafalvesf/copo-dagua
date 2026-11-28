((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cH_:function cH_(){},cGW:function cGW(){},cGX:function cGX(){},cGY:function cGY(){},cGZ:function cGZ(){},
dIs(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DA(x[v]))
return new B.b3N(d.b,u)},
DA:function DA(d){this.a=d},
b3N:function b3N(d,e){this.a=d
this.b=e},
b3O:function b3O(){},
cYY(d){var x="category",w="due_date",v=J.a7(d),u=A.Z(v.h(d,"id")),t=A.Z(v.h(d,"wedding_id")),s=A.Z(v.h(d,"title")),r=B.dEK(B.ddA(A.C(v.h(d,x)))),q=B.ddA(A.C(v.h(d,x))),p=A.dt(v.h(d,"amount")),o=v.h(d,w)==null?null:A.db(A.Z(v.h(d,w)))
v=A.dW(v.h(d,"paid"))
return new G.i4(u,t,s,r,q,p,o,v===!0)},
ddA(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dEK(d){var x
A:{if("venue"===d){x=E.y_
break A}if("catering"===d){x=E.xW
break A}if("photography"===d){x=E.xX
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xY
break A}if("flowers_decor"===d){x=E.xZ
break A}x=null
break A}return x},
dq9(){return new B.DK()},
zX:function zX(d,e){this.a=d
this.b=e},
b5r:function b5r(){},
b5s:function b5s(){},
DK:function DK(){this.b=this.x=null},
b5o:function b5o(){},
b5p:function b5p(d,e){this.a=d
this.b=e},
b5q:function b5q(d){this.a=d},
Cw(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cw=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akT(),$async$Cw)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").aj(0,"partner_name_1, partner_name_2").V("id",d).cj(),$async$Cw)
case 4:s=f
x=5
return A.d(u.b.P("bookings").aj(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cR(0,"event_date",!1),$async$Cw)
case 5:r=f
u=A.a([],y.s)
for(t=J.ar(r);t.t();)u.push(A.Z(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.Q().b
t===$&&A.b()
x=9
return A.d(t.P("payments").aj(0,"booking_id, type, status, amount, paid_at, due_at, provider").dO("booking_id",u).tD(0,"created_at"),$async$Cw)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").aj(0,"title, category, amount, due_date, paid").V("wedding_id",d).tD(0,"due_date"),$async$Cw)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").aj(0,"name, amount").V("wedding_id",d).tD(0,"position"),$async$Cw)
case 11:o=f
x=12
return A.d(u.b.P("budgets").aj(0,"total").V("wedding_id",d).cj(),$async$Cw)
case 12:n=f
m=F.cYJ(F.cE6(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ar(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cx(j==null?"":j)
i=k.h(l,"category")
i=J.cx(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.eW(A.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d2(A.q(g))
g=g==null?null:g.dM()}u.push(new B.Mm(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ar(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cx(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eW(A.q(k))
if(k==null)k=0}t.push(new B.a7V(i,k))}l=n==null?null:F.cZg(J.i(n,"total"))
v=new F.lR(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cw,w)},
Mm:function Mm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7V:function a7V(d,e){this.a=d
this.b=e},
dns(){return new B.a0Q(null)},
aU9(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aU9=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a9(f,0)
x=3
return A.d(A.fR(!0,new B.cDw(e,new A.aE(new A.bC(u,C.aF,C.aw),$.aa())),d,y.i),$async$aU9)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aU9,w)},
akM(d,e,f,g){return B.dEx(d,e,f,g)},
dEx(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akM=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aU9(d,"Teto para "+f,g),$async$akM)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CH().gaX(),y.x).OP(f,r),$async$akM)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a1(H.I2)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akM,w)},
dbD(d){var x=A.U(d,y._)
C.e.cD(x,new B.cDF())
return x},
dc6(d){var x=C.f.aV(C.j.k(A.ay(d)),2,"0"),w=C.f.aV(C.j.k(A.ao(d)),2,"0"),v=A.ax(d)===A.ax(new A.ac(Date.now(),0,!1))?"":"/"+A.ax(d)
return x+"/"+w+v},
cY5(d){var x,w,v,u
if(d===C.k.hA(d))x=C.k.a9(d,0)
else{w=C.k.a9(d,2)
x=A.aX(w,".",",")}v=x.split(",")
u=A.CD(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHK(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abW:function abW(d,e){this.a=d
this.b=e},
a0Q:function a0Q(d){this.a=d},
abX:function abX(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKX:function bKX(d){this.a=d},
bKY:function bKY(d){this.a=d},
bLe:function bLe(d){this.a=d},
bLd:function bLd(){},
bKT:function bKT(){},
bKV:function bKV(){},
bKW:function bKW(){},
bKU:function bKU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bL2:function bL2(){},
bL3:function bL3(d){this.a=d},
bLc:function bLc(d){this.a=d},
bL4:function bL4(){},
bL5:function bL5(){},
bL6:function bL6(d,e){this.a=d
this.b=e},
bL7:function bL7(d){this.a=d},
bL1:function bL1(d){this.a=d},
bL8:function bL8(d){this.a=d},
bL0:function bL0(d){this.a=d},
bL9:function bL9(d){this.a=d},
bL_:function bL_(d){this.a=d},
bLa:function bLa(d){this.a=d},
bKZ:function bKZ(d){this.a=d},
bLb:function bLb(d){this.a=d},
cDw:function cDw(d,e){this.a=d
this.b=e},
cDu:function cDu(d){this.a=d},
cDv:function cDv(d,e){this.a=d
this.b=e},
cDF:function cDF(){},
aPI:function aPI(d,e,f){this.c=d
this.d=e
this.a=f},
aDD:function aDD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDE:function aDE(d,e){this.e=d
this.a=e},
bNs:function bNs(){},
bNu:function bNu(d,e){this.a=d
this.b=e},
bNv:function bNv(d){this.a=d},
bNt:function bNt(d,e,f){this.a=d
this.b=e
this.c=f},
aDa:function aDa(d,e){this.c=d
this.a=e},
bKi:function bKi(d){this.a=d},
bKh:function bKh(d){this.a=d},
aGo:function aGo(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bXu:function bXu(d,e){this.a=d
this.b=e},
bXq:function bXq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXr:function bXr(d){this.a=d},
bXs:function bXs(d,e){this.a=d
this.b=e},
bXt:function bXt(d,e){this.a=d
this.b=e},
Xx:function Xx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCg:function aCg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NM:function NM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abB:function abB(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bHY:function bHY(d){this.a=d},
bHX:function bHX(){},
bHZ:function bHZ(d){this.a=d},
bHW:function bHW(){},
bHK:function bHK(){},
bHL:function bHL(d){this.a=d},
bHV:function bHV(){},
bHQ:function bHQ(d){this.a=d},
bHR:function bHR(d){this.a=d},
bHP:function bHP(d,e){this.a=d
this.b=e},
bHS:function bHS(d){this.a=d},
bHO:function bHO(d){this.a=d},
bHT:function bHT(d){this.a=d},
bHN:function bHN(d){this.a=d},
bHU:function bHU(d,e){this.a=d
this.b=e},
bHM:function bHM(d,e){this.a=d
this.b=e},
X9:function X9(d,e){this.e=d
this.a=e},
bNw:function bNw(d){this.a=d},
bNx:function bNx(d){this.a=d},
bNy:function bNy(){},
bNz:function bNz(){},
bNA:function bNA(d){this.a=d},
bNB:function bNB(d,e,f){this.a=d
this.b=e
this.c=f},
bNC:function bNC(d,e){this.a=d
this.b=e},
aib:function aib(d,e,f){this.c=d
this.d=e
this.a=f},
aCl:function aCl(d,e,f){this.e=d
this.f=e
this.a=f},
bIV:function bIV(){},
bJ0:function bJ0(d){this.a=d},
bIY:function bIY(){},
bIX:function bIX(d){this.a=d},
bIO:function bIO(d){this.a=d},
bIW:function bIW(d,e,f){this.a=d
this.b=e
this.c=f},
bIZ:function bIZ(d){this.a=d},
bIM:function bIM(d){this.a=d},
bIN:function bIN(){},
bJ_:function bJ_(d,e){this.a=d
this.b=e},
bIT:function bIT(d){this.a=d},
bIU:function bIU(d){this.a=d},
bIP:function bIP(){},
bIQ:function bIQ(d){this.a=d},
bIR:function bIR(d){this.a=d},
bIS:function bIS(d,e){this.a=d
this.b=e},
anB:function anB(d,e){this.c=d
this.a=e},
aYL:function aYL(d){this.a=d},
dgA(d){var x
switch(d){case E.y_:x=D.bD8
break
case E.xW:x=D.byk
break
case E.xX:x=D.bBW
break
case E.xY:x=D.bBl
break
case E.xZ:x=D.bzO
break
default:x=C.a6
break}return x}},D,K,V
J=c[1]
A=c[0]
C=c[2]
L=c[205]
M=c[188]
N=c[219]
O=c[221]
E=c[222]
P=c[167]
Q=c[218]
F=c[133]
R=c[159]
G=c[77]
I=c[217]
S=c[199]
T=c[220]
H=c[216]
U=c[79]
B=a.updateHolder(c[53],B)
D=c[215]
K=c[72]
V=c[78]
B.DA.prototype={
gar(d){return this.a.a}}
B.b3N.prototype={
gpZ(){return C.e.d_(this.b,0,new B.b3O())},
gaC9(){var x=this.a
return x===0?0:C.k.ah(this.gpZ()/x,0,1)}}
B.zX.prototype={
gbzY(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5r(),w),w.i("y.E"))
return x},
gbAj(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5s(),w),w.i("y.E"))
return x},
axh(d,e){var x=e==null?this.a:e
return new B.zX(x,d==null?this.b:d)},
im(d){return this.axh(null,d)},
ax_(d){return this.axh(d,null)}}
B.DK.prototype={
d5(){var x=y.T,w=this.x=A.eO(this).G(A.cF($.cq(),new B.b5o(),y.v,x),x)
if(w!=null)A.jk(new B.b5p(this,w),y.H)
return D.azX},
bY(d,e){return this.bxl(0,e)},
bxl(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).im(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").cl(0).V("wedding_id",e).cR(0,"created_at",!0),$async$bY)
case 2:v.sa4(0,new t.zX(s,r.d9(g,B.dJj(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
VJ(d){return this.bnk(d)},
bnk(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$VJ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.Q().b
r===$&&A.b()
r=r.P("expenses")
u=A.E(y.N,y.X)
u.j(0,"wedding_id",d.b)
u.j(0,"title",d.c)
t=d.e
if(t==null){t=d.d
t=t==null?null:t.b}u.j(0,"category",t)
u.j(0,"amount",d.f)
t=d.r
u.j(0,"due_date",t==null?null:C.e.gL(t.cg().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.d8(0,u).cl(0).dQ(0),$async$VJ)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cYY(s))
v.sa4(0,r.ax_(u))
return A.l(null,w)}})
return A.m($async$VJ,w)},
OM(d){return this.bCU(d)},
bCU(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OM=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lh(v.ga4(0).b,new B.b5q(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bj(0,A.R(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).cg()],u,u)).V("id",d).cl(0).dQ(0),$async$OM)
case 2:t=l.cYY(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.ax_(m))
return A.l(null,w)}})
return A.m($async$OM,w)}}
B.Mm.prototype={}
B.a7V.prototype={
gar(d){return this.a}}
B.abW.prototype={
I(){return"_BudgetFilter."+this.b}}
B.a0Q.prototype={
R(){return new B.abX(D.Jg)}}
B.abX.prototype={
TW(d){return this.bdd(d)},
bdd(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TW=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKX(u))
x=1
break}u.p(new B.bKY(u))
t=u.gS()
s=$.cq()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gaX(),y.Z).aj(0,d),$async$TW)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$TW,w)},
ac(){this.ap()
A.jk(new B.bLe(this),y.H)},
Qr(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Qr=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.amc()
m=y.h
l=o.a0(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CH(),y.b).b
s=t==null?null:t.b
r=C.e.d_(o.a0(0,n,y.g).b,0,new B.bKT())
t=o.a0(0,$.cq(),y.v).b
q=t==null?null:t.gcw()
t=u.c
t.toString
x=3
return A.d(A.bW(null,new B.bKU(q,s,new B.bKV(),r),!1,t,!0,!0,null,y.B),$async$Qr)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.VJ(new G.i4("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Qr,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CH(),y.b),a3=a1.G($.HW(),y.d),a4=a1.G($.amc(),y.g),a5=a2.b,a6=a5==null?e:B.dIs(a5,a3.b)
a5=A.j1(a1.G($.j_(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iR
a5=y.T
w=a1.G(A.cF($.cq(),new B.bL2(),y.v,a5),a5)
if(f.y){a1=f.gapQ()
return A.cP(e,C.d1,A.op(C.fc,40,A.a([C.h1,D.aHi,K.cVx(a1,e),new B.aCl(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.da(x,new B.bL3(w))
a1=a1.G($.uy(),y.l)
u=a1.gv(a1)
t=new B.bLc(u==null?C.f8:u)
a1=y._
a5=A.U(a4.gbzY(),a1)
for(s=v.a,r=J.cc(s),q=r.gX(s),p=v.b,o=v.$ti.i("ha<1>"),n=new A.ha(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i4("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbAj(0),a1)
for(s=r.gX(s),o=new A.ha(s,p,o),p=y.r;o.t();){r=s.gE(s)
n=A.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new G.i4("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new G.i4("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dbD(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dbD(q)
break
default:a1=e}h=C.e.d_(q,0,new B.bL4())
s=a6==null
if(s)g=D.bzo
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bL5(),p),p.i("y.E"))}if(s)a1=D.bY4
else{s=f.gaRK()
r=y.p
p=A.a([new A.po(A.a([new A.qO(s,"Nova despesa",e)],r),e),D.aHo,K.cVx(f.gapQ(),w),new B.aPI(a6,new B.bL6(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aK(a6.gpZ(),!1)
n=a5.length
m=n===1?d:a0
l=A.aK(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.dx("N\xfameros",e,A.a([new A.JH(A.a([new A.oj("Gasto",o,""+n+" "+m,e),new A.oj("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new M.mc(A.a([new A.ej("Todos",l===D.Jg,n+m,new B.bL7(f),e),new A.ej("Pendentes",l===D.abN,m,new B.bL8(f),e),new A.ej("Pagos",l===D.abM,n,new B.bL9(f),e)],y.F),4,!0,e),C.aq],r))}o.push(new B.aGo(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.dx("Pagamentos",e,o,16,e))
a1=A.a([new A.kp(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDD(g,f.x,new B.bLa(f),e))
p.push(new A.dx("Categorias",e,a1,16,e))
p.push(new A.dx("Exportar",e,A.a([new F.DL("Gastos e parceiros",!1,new B.bLb(f),e)],r),16,e))
a1=A.op(C.fc,40,p,e,!0,!1)}return A.cP(e,C.d1,a1,!0,e)},
IK(d){return this.aYM(d)},
aYM(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IK=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aU9(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IK)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a0(0,$.CH().gaX(),y.x).a_x(r),$async$IK)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a1(H.I2)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$IK,w)}}
B.aPI.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpZ()>0?"Gastos "+A.aK(t.gpZ(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vg(new A.i7("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hE,0,"por definir","\u2014")}x=C.k.aL(t.gaC9()*100)
w=s-t.gpZ()<0?"Acima do teto":"Ainda tens"
v=A.aK(Math.abs(s-t.gpZ()),!1)
s=A.aK(s,!1)
u=t.gaC9()
return A.aV(A.vg(H.a1U,"Gastos "+A.aK(t.gpZ(),!1)+" \xb7 "+x+"% do teto",w,C.hE,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDD.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dG(s,0,A.ew(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDE(r[w],null))
q=A.a([A.eV(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.i7(u,v.e,!0,null))}return A.A(q,C.E,C.h,C.l)}}
B.aDE.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cF($.cq(),new B.bNs(),y.v,m),m)
if(l==null)x=C.rk
else{m=e.G($.d0Y().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rk:m}m=A.a([],y.s)
for(w=B.dgA(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNu(this,d)
if(w)return A.jY(!1,!1,p,v,A.aK(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.nC("P\xf4r teto",new B.bNt(this,d,e),!0,p))
w=A.aK(o.b,!1)
u=A.aK(n,!1)
s=y.p
q=A.a([A.aH(new A.Tm(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aD,new B.anB(m,p)],s))
return A.jY(!1,!1,p,v,w+" de "+u,o.a,A.A(q,C.dA,C.h,C.J))}}
B.aDa.prototype={
u(d){var x,w,v=null,u=$.at,t=$.f7.cd(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fT(r,A.aH(p==null?A.kK(A.b5(C.i3,u,v,v,v),C.t,!0):A.pk(p,144,new B.bKh(u),!1,C.bG,A.wu(),!1,v,v,v),48,48),C.bb)
p=A.h(q.b,1,C.a1,v,v,D.c3P,v,v,v)
x=A.b5(C.i5,u,v,v,14)
w=q.d
q=w>0?q.gQ_()+" \xb7 "+A.aK(w,!1):q.gQ_()
w=y.p
return new A.S(C.dn,A.aV(A.x(v,A.O(A.a([r,C.ad,A.a4(A.A(A.a([p,C.j6,A.O(A.a([x,C.e6,new A.dc(1,C.b4,A.h(q,1,C.a1,v,v,A.aI(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bp,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b5(C.i7,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.K(t,v,v,s,v,v,C.x),v,v,v,C.eg,v,v,v),new B.bKi(d),v),v)}}
B.aGo.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.St(A.a([new A.i7("+ Nova despesa",this.f,!0,j)],y.p),C.fq,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aB8
x=new B.bXu(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.H)(i),++t){s=i[t]
r=s.a
q=C.f.d2(r,":pay:")
r=C.f.b2(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gL(r.split(" \xb7 "))
n=A.aK(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.dc6(m)
v.push(new A.xl(new A.ci(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bXq(d,e,s,q),A.HQ(m)===C.fk,j))
continue}p=r?new B.bXr(d):new B.bXs(x,s)
v.push(new B.Xx(s,p,r||s.w?j:new B.bXt(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xx&&v[k-1] instanceof B.Xx)u.push(C.iH)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAX)
return A.A(i,C.E,C.h,C.l)}}
B.Xx.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aK(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dc6(w))
v=C.e.a2(v," \xb7 ")
if(u)u=D.aH4
else{u=this.e
u=u!=null?new A.nC("Marcar pago",u,!0,null):D.aHb}return A.jY(!1,!1,null,this.d,v,x.c,u)}}
B.aCg.prototype={}
B.NM.prototype={
R(){var x=$.aa()
return new B.abB(new A.aE(C.aj,x),new A.aE(C.aj,x))}}
B.abB.prototype={
ac(){var x=this
x.ap()
x.d.an(0,new B.bHY(x))
x.e.an(0,new B.bHZ(x))},
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
gai3(){var x=C.f.B(this.e.a.a)
x=A.aX(x," ","")
return A.eW(A.aX(x,",","."))},
aSX(){var x,w,v,u,t=this,s=t.gai3()
t.p(new B.bHL(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.ae(new B.aCg(x,s,u,t.r,v))},
asB(d,e,f,g,h){var x=null,w=h?C.hn:x,v=y.p,u=A.a4(A.A(A.a([A.h(d,x,x,x,x,C.a9,x,x,x),C.aV,A.h(e,x,x,x,x,C.M,x,x,x)],v),C.G,C.h,C.l),1),t=f?C.br:x,s=f?x:A.bA(C.ko,1.5),r=f?S.vy:x
return A.ba(x,!0,x,A.cO(C.bw,A.x(x,A.O(A.a([u,A.x(x,r,C.r,x,x,new A.K(t,x,s,x,x,x,C.as),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.d2,new A.K(x,x,w,x,x,x,C.x),x,x,x,C.ht,x,x,x),C.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aN),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a3,x)},
bjG(d,e,f,g){return this.asB(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gai3()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bHV()
t=y.w
s=A.aO(d,k,t).w
r=y.p
q=A.a([D.ccl],r)
q.push(A.h(l.a.c,k,k,k,k,C.M,k,k,k))
q=A.O(A.a([A.a4(A.A(q,C.G,C.h,C.l),1),A.ba(k,!0,k,A.cO(k,A.x(k,C.kB,C.r,k,k,C.cc,k,44,k,k,k,k,44),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHQ(d),k,k,k,k,k,k,!1,C.aN),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a3,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.cgV,A.O(A.a([V.d5j(A.cr(k,C.a6,!1,k,!0,C.y,k,A.cs(),l.e,k,k,k,k,k,2,D.aF2,C.W,!0,k,!0,k,!1,k,C.aC,k,k,k,k,C.fF,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.ao,k,k,k,k,k,k,k,k,k,k,k,D.aat,!0,C.dF,k,C.b_,k,k,k,k)),C.bh,D.ccp],r),C.et,C.bR,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cY5(v)+" no teto":"Passa o teto em "+B.cY5(-v)
o.push(A.h(m,k,k,k,k,A.aI(k,k,n?C.V:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.ceF)
p=A.x(k,A.A(o,C.v,C.h,C.l),C.r,k,k,new A.K(C.a5,k,k,p,k,k,C.x),k,k,k,C.bg,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aK,k,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bA(C.bX,1.5):k
n=A.a([p,C.a0,new A.S(C.dn,o,k),A.x(C.bf,A.cr(k,C.a6,!1,k,!0,C.y,k,A.cs(),x,k,k,k,k,k,2,D.aEH,C.W,!0,k,!0,k,!1,k,C.aC,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.ao,k,k,k,k,k,k,k,k,k,k,k,C.ff,!0,C.at,k,C.hd,k,k,k,k),C.r,k,k,new A.K(C.a5,k,m,n,k,k,C.x),k,52,k,C.fT,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bKF)
n.push(C.a0)
n.push(new U.a1q(l.r,new B.bHR(l),k))
n.push(C.a0)
n.push(new A.S(C.dn,A.h("ESTADO",k,k,k,k,C.aK,k,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bjG("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHS(l)),l.asB("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHT(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.ay(p)))
m=l.f
m.toString
m=A.q(w.$1(A.ao(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.ax(w)}o.push(A.ba(k,!0,k,A.cO(C.bw,A.aH(A.O(A.a([D.azQ,A.h(w,k,k,k,k,C.ce,k,k,k),C.e6,C.lK],r),C.v,C.h,C.l,0,k),56,k),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHU(l,d),k,k,k,k,k,k,!1,C.aN),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a3,k))}n.push(A.x(k,A.A(o,C.v,C.h,C.l),C.r,k,k,new A.K(C.a5,k,k,x,k,k,C.x),k,k,k,C.cz,k,k,k))
n.push(C.a0)
n.push(D.cbY)
x=A.dT(A.A(n,C.E,C.h,C.l),C.y,k,C.eh,k,C.av)
t=A.aO(d,C.b6,t).w
w=A.cj(u?C.z:C.z.cd(0.35),k,k,C.t,k,k,C.ab,k,k,C.eK)
return new A.S(new A.a3(0,0,0,s.f.d),A.A(A.a([new A.S(C.jF,q,k),new A.dc(1,C.b4,x,k),new A.S(new A.a3(20,16,20,20+t.r.d),A.aH(A.bE(A.h(u?"Guardar \xb7 "+B.cY5(j):"Guardar",k,k,k,k,k,k,k,k),l.gaSW(),w),52,k),k)],r),C.E,C.h,C.J),k)}}
B.X9.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CH(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eR(new A.a6(j,new B.bNw(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.amc(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNx(l),w),w.i("y.E"))
C.e.cD(v,new B.bNy())
j=y.T
u=e.G(A.cF($.cq(),new B.bNz(),y.v,j),j)
t=B.dgA(l.e.c)
if(u==null)s=I.Fs
else{j=e.G($.aW0().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fs
j=J.da(j,new B.bNA(t))
s=A.U(j,j.$ti.i("y.E"))}j=A.aO(d,k,y.w).w
w=A.bL(A.x(k,k,C.r,k,k,new A.K(C.bI,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.av(d).ok.r,k,k,k)
q=A.a4(new B.aib("Gasto",A.aK(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a0,r,C.aB,A.O(A.a([q,C.ag,A.a4(A.aV(new B.aib("Teto \xb7 tocar para mudar",p===0?"Definir":A.aK(p,!1),k),new B.bNB(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bi,A.h("Contratado na app",k,k,k,k,A.av(d).ok.w,k,k,k),C.R],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aDa(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.h("Despesas",k,k,k,k,A.av(d).ok.w,k,k,k))
p.push(C.R)
w=v.length
if(w===0)p.push(D.bL_)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.ip,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aV(C.j.k(A.ay(q)),2,"0")+"/"+C.f.aV(C.j.k(A.ao(q)),2,"0")+"/"+A.ax(q),k,k,k,k,k,k,k,k)
p.push(A.jo(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aK(m.f,!1),k,k,k,k,D.c5U,k,k,k),C.ae,new P.Df(m.w,new B.bNC(e,m),k,$.at,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.Ji,k)],o),C.v,C.h,C.J,0,k),k))}return A.bD(!0,new A.e5(new A.aR(0,1/0,0,j.a.b*0.8),A.d5(p,k,L.CY,k,k,!1,!0),k),k,C.a_,!0)}}
B.aib.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.A(A.a([A.h(this.c,x,x,x,x,C.bd,x,x,x),C.aq,A.h(this.d,x,x,x,x,N.aag,x,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.K(C.a5,x,x,w,x,x,C.x),x,x,x,C.cP,x,x,x)}}
B.aCl.prototype={
bb(d,e){var x,w=y.t,v=e.G(A.cF($.cq(),new B.bIV(),y.v,w),w),u=e.G($.d0X(),y.o)
w=e.G($.uy(),y.l)
x=w.gv(w)
return A.hC(u,new B.bIW(this,new B.bJ0(x==null?C.f8:x),v),new B.bIX(e),new B.bIY(),!1,!0,!1)}}
B.anB.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.at,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.f7
s=new A.b6(999,999)
r=new A.bf(o.cd(0.25),1,C.ai,-1)
q=A.b5(C.i5,o,p,p,13)
t=A.x(p,A.O(A.a([q,C.t0,new A.dc(1,C.b4,A.h(u,1,C.a1,p,p,new A.P(!0,o,p,p,p,p,14,C.d5,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b5(C.i7,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afy,new A.K(t,p,new A.dO(r,r,r,r),new A.cy(s,s,s,s),p,p,C.x),p,p,p,D.auh,p,p,p)
m.push(new A.jt(new A.n5(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a3,p,p,p,p),!1,!1,p,!1,!1,new A.ih(t,new B.aYL(d),p,p),p))}return A.e_(C.be,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["B(i4)","T(T,i4)","v(i4,i4)","T(T,DA)","zX()","F<~>(c?)","F<~>()","NM(N)","B(DA)","F<lR>()","X9(N)","~(i4)","~()","B(no)","B(rO)","i4(a5<c,@>)","DK()"])
B.cH_.prototype={
$1(d){return this.aFs(d)},
aFs(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.G(A.cF($.cq(),new B.cGW(),y.v,f),f)
f=J.a7(e)
if(f.gZ(e)){v=D.bzp
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.t();)u.push(t.gE(t).a)
t=$.Q()
s=t.b
s===$&&A.b()
r=y.G
q=s.P("budgets").aj(0,"wedding_id, total").dO("wedding_id",u).b6(new B.cGX(),r)
p=t.b.P("budget_categories").aj(0,"wedding_id, amount").dO("wedding_id",u).b6(new B.cGY(),r)
o=t.b.P("expenses").aj(0,"wedding_id, amount, paid").dO("wedding_id",u).b6(new B.cGZ(),r)
r=y.N
u=y.i
t=A.E(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bh(a3,s),m=A.u(n),n=new A.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E")
case 4:if(!n.t()){x=5
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
t.j(0,A.Z(k.h(l,"wedding_id")),A.dt(k.h(l,"total")))
x=4
break
case 5:j=A.E(r,u)
d=J
x=6
return A.d(p,$async$$1)
case 6:n=d.bh(a3,s),m=A.u(n),n=new A.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.Z(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=A.aF(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=A.E(r,u)
d=J
x=9
return A.d(o,$async$$1)
case 9:u=d.bh(a3,s),s=A.u(u),u=new A.aj(u,u.gA(u),s.i("aj<V.E>")),s=s.i("V.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.Z(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=A.aF(n.h(r,"amount"))
if(r==null)r=null
g.j(0,i,m+(r==null?0:r))
x=10
break
case 11:u=A.a([],y.n)
for(f=f.gX(e);f.t();){s=f.gE(f)
r=s.a
n=t.h(0,r)
s=n==null?s.as:n
if(s==null)s=0
n=j.h(0,r)
if(n==null)n=0
m=g.h(0,r)
u.push(new A.aMX([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1285}
B.cGW.prototype={
$1(d){return d.c},
$S:153}
B.cGX.prototype={
$1(d){return d},
$S:31}
B.cGY.prototype={
$1(d){return d},
$S:31}
B.cGZ.prototype={
$1(d){return d},
$S:31}
B.b3O.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5r.prototype={
$1(d){return d.w},
$S:z+0}
B.b5s.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5o.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.b5p.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b5q.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKX.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKY.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bLe.prototype={
$0(){return this.a.gS().a0(0,$.CH().gaX(),y.x).ZP(0).dS(new B.bLd())},
$S:1}
B.bLd.prototype={
$1(d){},
$S:11}
B.bKT.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKV.prototype={
$1(d){return A.CD(C.k.a9(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKW(),null)+" \u20ac"},
$S:116}
B.bKW.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:43}
B.bKU.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a2(v," \xb7 ")
u=x&&u>0?u:null
return new B.NM(v,u,w.d,null)},
$S:z+7}
B.bL2.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bL3.prototype={
$1(d){return d.x!==C.eQ&&d.b===this.a},
$S:58}
B.bLc.prototype={
$2(d,e){return A.jd(d,this.a.ld(e))},
$1(d){return this.$2(d,null)},
$S:1288}
B.bL4.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bL5.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bL6.prototype={
$0(){return this.a.IK(this.b.a)},
$S:0}
B.bL7.prototype={
$0(){var x=this.a
return x.p(new B.bL1(x))},
$S:0}
B.bL1.prototype={
$0(){return this.a.w=D.Jg},
$S:0}
B.bL8.prototype={
$0(){var x=this.a
return x.p(new B.bL0(x))},
$S:0}
B.bL0.prototype={
$0(){return this.a.w=D.abN},
$S:0}
B.bL9.prototype={
$0(){var x=this.a
return x.p(new B.bL_(x))},
$S:0}
B.bL_.prototype={
$0(){return this.a.w=D.abM},
$S:0}
B.bLa.prototype={
$0(){var x=this.a
return x.p(new B.bKZ(x))},
$S:0}
B.bKZ.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bLb.prototype={
$0(){return B.Cw(this.a.gS().a0(0,$.cq(),y.v).b.a)},
$S:z+9}
B.cDw.prototype={
$1(d){var x=null,w=this.b
return new A.eQ(A.h(this.a,x,x,x,x,x,x,x,x),A.cr(x,C.a6,!0,x,!0,C.y,x,A.cs(),w,x,x,x,x,x,2,D.aFf,C.W,!0,x,!0,x,!1,x,C.aC,x,x,x,x,C.fF,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.ao,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.at,x,C.b_,x,x,x,x),A.a([A.cw(C.cT,x,x,new B.cDu(d),x,x),A.bE(C.dy,new B.cDv(d,w),x)],y.p),x)},
$S:18}
B.cDu.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.cDv.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aX(w," ","")
return x.ae(A.eW(A.aX(w,",",".")))},
$S:0}
B.cDF.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bn(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bn(2100,1,1,0,0):x)},
$S:z+2}
B.bNs.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNu.prototype={
$0(){return A.bW(null,new B.bNv(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNv.prototype={
$1(d){return new B.X9(this.a.e.a,null)},
$S:z+10}
B.bNt.prototype={
$0(){return B.akM(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKi.prototype={
$0(){var x=this.a
A.am(x,!1).bp()
A.ae(x).am("/bookings",null,y.X)},
$S:0}
B.bKh.prototype={
$3(d,e,f){return A.kK(A.b5(C.i3,this.a,null,null,null),C.t,!0)},
$S:100}
B.bXu.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.amc().gaX(),y.h).OM(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a1(A.c0(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bXq.prototype={
$0(){var x=this
return A.rG(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bXr.prototype={
$0(){return A.ae(this.a).am("/bookings",null,y.X)},
$S:0}
B.bXs.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bXt.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHY.prototype={
$0(){return this.a.p(new B.bHX())},
$S:0}
B.bHX.prototype={
$0(){},
$S:0}
B.bHZ.prototype={
$0(){return this.a.p(new B.bHW())},
$S:0}
B.bHW.prototype={
$0(){},
$S:0}
B.bHK.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:43}
B.bHL.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHV.prototype={
$1(d){return C.f.aV(C.j.k(d),2,"0")},
$S:36}
B.bHQ.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.bHR.prototype={
$1(d){var x=this.a
return x.p(new B.bHP(x,d))},
$S:126}
B.bHP.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHS.prototype={
$0(){var x=this.a
return x.p(new B.bHO(x))},
$S:0}
B.bHO.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHT.prototype={
$0(){var x=this.a
return x.p(new B.bHN(x))},
$S:0}
B.bHN.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHU.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.alE(v.b,A.bn(A.ax(t)-1,1,1,0,0),r,A.bn(A.ax(t)+5,1,1,0,0)),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHM(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHM.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNw.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNx.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNy.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bn(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bn(2100,1,1,0,0):x)},
$S:z+2}
B.bNz.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNA.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bNB.prototype={
$0(){var x=this.c
return B.akM(this.a,this.b,x.a,x.d)},
$S:0}
B.bNC.prototype={
$1(d){return this.a.a0(0,$.amc().gaX(),y.h).OM(this.b.a)},
$S:130}
B.bIV.prototype={
$1(d){return d.c},
$S:153}
B.bJ0.prototype={
$2(d,e){return A.jd(d,this.a.ld(e))},
$S:42}
B.bIY.prototype={
$0(){return D.bLE},
$S:89}
B.bIX.prototype={
$2(d,e){return A.St(A.a([new A.i7("Tentar outra vez",new B.bIO(this.a),!1,null)],y.p),C.fq,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1289}
B.bIO.prototype={
$0(){return this.a.ak($.d0X())},
$S:0}
B.bIW.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIZ(g),e=new B.bJ_(g,this.b),d=J.cc(a4),a0=d.d_(a4,0,new B.bIP()),a1=d.d_(a4,0,new B.bIQ(f)),a2=d.d_(a4,0,new B.bIR(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ar(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C1(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aK(a1,!1)
w=a0>0
v=w?"de "+A.aK(a0,!1):"gastos"
u=w?C.k.ah(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aL(a1/a0*100)+"% dos tetos":""
x=A.vg(i,""+t+" "+r+w,"Todos os eventos",C.hE,u,v,x)
v=y.p
u=A.a([new A.JH(A.a([new A.oj("Gasto",A.aK(a1,!1),h,i),new A.oj("Por pagar",A.aK(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eU(a4,0,y.A),r=J.ar(t.a),q=t.b,t=new A.cg(r,q,A.u(t).i("cg<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.a0(q+n,r.gE(r)):A.al(A.c9())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iH)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a1,i,i,C.a9,i,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aK(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aK(j[3]+e.$1(j[0]),!1))}n=A.A(A.a([n,C.aV,A.h(C.e.a2(k," \xb7 "),i,i,i,i,C.M,i,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.ih(A.x(i,A.O(A.a([new A.bQ(1,C.au,n,i),C.ag,A.h(A.aK(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i,i),C.bh,C.lK],v),C.v,C.h,C.l,0,i),C.r,C.am,C.d2,i,i,i,i,C.cm,i,i,i),new B.bIS(o,g),i,i))
C.e.n(w,l)}return A.A(A.a([x,new A.dx("N\xfameros",i,u,16,i),new A.dx("Por evento \xb7 "+d,i,w,16,i),D.aAZ],v),C.E,C.h,C.l)},
$S:1290}
B.bIZ.prototype={
$1(d){return J.da(this.a.e,new B.bIM(d)).d_(0,0,new B.bIN())},
$S:163}
B.bIM.prototype={
$1(d){return d.b===this.a&&d.x!==C.eQ},
$S:58}
B.bIN.prototype={
$2(d,e){return d+e.w},
$S:454}
B.bJ_.prototype={
$1(d){return J.da(this.a.e,new B.bIT(d)).d_(0,0,new B.bIU(this.b))},
$S:163}
B.bIT.prototype={
$1(d){return d.b===this.a&&d.x!==C.eQ},
$S:58}
B.bIU.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:454}
B.bIP.prototype={
$2(d,e){return d+e.a[2]},
$S:271}
B.bIQ.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:271}
B.bIR.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:271}
B.bIS.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYL.prototype={
$0(){return A.ae(this.a).am("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dJj","cYY",15)
w(B,"dJi","dq9",16)
v(B.DK.prototype,"giI","d5",4)
var t
u(t=B.abX.prototype,"gapQ","TW",5)
v(t,"gaRK","Qr",6)
v(B.abB.prototype,"gaSW","aSX",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cH_,B.cGW,B.cGX,B.cGY,B.cGZ,B.b5r,B.b5s,B.b5o,B.b5q,B.bLd,B.bKV,B.bKW,B.bKU,B.bL2,B.bL3,B.bLc,B.bL5,B.cDw,B.bNs,B.bNv,B.bKh,B.bXu,B.bHK,B.bHV,B.bHR,B.bNw,B.bNx,B.bNz,B.bNA,B.bNC,B.bIV,B.bIW,B.bIZ,B.bIM,B.bJ_,B.bIT])
x(A.J,[B.DA,B.b3N,B.zX,B.Mm,B.a7V,B.aCg])
x(A.cK,[B.b3O,B.bKT,B.bL4,B.cDF,B.bNy,B.bJ0,B.bIX,B.bIN,B.bIU,B.bIP,B.bIQ,B.bIR])
w(B.DK,A.fe)
x(A.bO,[B.b5p,B.bKX,B.bKY,B.bLe,B.bL6,B.bL7,B.bL1,B.bL8,B.bL0,B.bL9,B.bL_,B.bLa,B.bKZ,B.bLb,B.cDu,B.cDv,B.bNu,B.bNt,B.bKi,B.bXq,B.bXr,B.bXs,B.bXt,B.bHY,B.bHX,B.bHZ,B.bHW,B.bHL,B.bHQ,B.bHP,B.bHS,B.bHO,B.bHT,B.bHN,B.bHU,B.bHM,B.bNB,B.bIY,B.bIO,B.bIS,B.aYL])
w(B.abW,A.eX)
w(B.a0Q,A.dA)
w(B.abX,A.du)
x(A.M,[B.aPI,B.aDD,B.aDa,B.Xx,B.aib,B.anB])
x(A.et,[B.aDE,B.aGo,B.X9,B.aCl])
w(B.NM,A.G)
w(B.abB,A.Y)})()
A.br(b.typeUniverse,JSON.parse('{"DK":{"fe":["zX"]},"a0Q":{"G":[],"e":[],"f":[]},"NM":{"G":[],"e":[],"f":[]},"X9":{"G":[],"e":[],"f":[]},"abX":{"Y":["a0Q"]},"aPI":{"M":[],"e":[],"f":[]},"aDD":{"M":[],"e":[],"f":[]},"aDE":{"G":[],"e":[],"f":[]},"aDa":{"M":[],"e":[],"f":[]},"aGo":{"G":[],"e":[],"f":[]},"Xx":{"M":[],"e":[],"f":[]},"abB":{"Y":["NM"]},"aib":{"M":[],"e":[],"f":[]},"aCl":{"G":[],"e":[],"f":[]},"anB":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("az<fc>"),k:x("az<t<rO>>"),u:x("az<t<fL>>"),o:x("az<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("az<a5<c,t<c>>>"),x:x("zA"),b:x("uM"),d:x("rT"),Z:x("og"),v:x("ec"),_:x("i4"),h:x("DK"),g:x("zX"),D:x("r<DA>"),r:x("r<i4>"),Q:x("r<oj>"),F:x("r<ej>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7V>"),c:x("r<Mm>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fL>"),t:x("t<fn>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a5<c,@>"),w:x("dg"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lR"),N:x("c"),B:x("aCg"),q:x("dq"),i:x("T"),z:x("@"),S:x("v"),X:x("J?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afy=new A.aR(0,1/0,32,1/0)
D.auh=new A.a3(8,5,6,5)
D.c84=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null,null)
D.azQ=new A.bQ(1,C.au,D.c84,null)
D.bz6=x([],y.r)
D.azX=new B.zX(!1,D.bz6)
D.aAX=new A.kp("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAZ=new A.kp("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aB8=new A.kp("Sem pagamentos nesta vista.",8,null)
D.aEH=new A.dB(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bs,null,null,C.bs,C.bs,!0,null,null,null,null)
D.aF2=new A.dB(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bs,null,null,C.bs,C.bs,!0,null,null,null,null)
D.aFf=new A.dB(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aH4=new A.ek("Pago",C.de,null)
D.aHb=new A.ek("Por pagar",C.hC,null)
D.aHi=new A.md("Or\xe7amento","Todos os teus eventos",null)
D.aHo=new A.md("Or\xe7amento",null,null)
D.byk=x(["catering"],y.s)
D.bzo=x([],y.D)
D.bzp=x([],y.n)
D.bzO=x(["flowers_decor"],y.s)
D.bBl=x(["music_dj","bands_musicians"],y.s)
D.bBW=x(["photography"],y.s)
D.bD8=x(["venue"],y.s)
D.c90=new A.D("A despesa precisa de um t\xedtulo",null,C.mt,null,null,null,null,null,null,null,null)
D.bKF=new A.S(T.NP,D.c90,null)
D.aEv=new A.ti("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kz,null)
D.bL_=new A.S(C.fS,D.aEv,null)
D.bLE=new A.S(O.uY,C.eD,null)
D.bY4=new A.vS(!1,6,!0,null)
D.c3P=new A.P(!0,C.z,null,null,null,null,14,C.d5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5U=new A.P(!0,null,null,null,null,null,null,C.d5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aat=new A.P(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbY=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null,null)
D.ccl=new A.D("Nova despesa",null,C.bj,null,null,null,null,null,null,null,null)
D.ccp=new A.D("\u20ac",null,D.aat,null,null,null,null,null,null,null,null)
D.ceF=new A.D("Indica um valor v\xe1lido",null,C.mt,null,null,null,null,null,null,null,null)
D.cgV=new A.D("VALOR",null,C.aK,null,null,null,null,null,null,null,null)
D.Jg=new B.abW(0,"all")
D.abM=new B.abW(1,"paid")
D.abN=new B.abW(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWD","d0X",()=>C.bS.$1$1(new B.cH_(),y.m))
x($,"dXs","amc",()=>A.mX(B.dJi(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["+wZz8Cqpek6FrCdmHsGU4frhv+s="]=a.current})($__dart_deferred_initializers__);