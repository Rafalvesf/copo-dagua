((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cHB:function cHB(){},cHx:function cHx(){},cHy:function cHy(){},cHz:function cHz(){},cHA:function cHA(){},
dJD(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v)u.push(new B.DB(x[v]))
return new B.b3H(d.b,u)},
DB:function DB(d){this.a=d},
b3H:function b3H(d,e){this.a=d
this.b=e},
b3I:function b3I(){},
cZQ(d){var x="category",w="due_date",v=J.a7(d),u=A.Y(v.h(d,"id")),t=A.Y(v.h(d,"wedding_id")),s=A.Y(v.h(d,"title")),r=B.dFR(B.deA(A.C(v.h(d,x)))),q=B.deA(A.C(v.h(d,x))),p=A.dv(v.h(d,"amount")),o=v.h(d,w)==null?null:A.dc(A.Y(v.h(d,w)))
v=A.dW(v.h(d,"paid"))
return new G.i6(u,t,s,r,q,p,o,v===!0)},
deA(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dFR(d){var x
A:{if("venue"===d){x=E.xQ
break A}if("catering"===d){x=E.xM
break A}if("photography"===d){x=E.xN
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xO
break A}if("flowers_decor"===d){x=E.xP
break A}x=null
break A}return x},
drj(){return new B.DM()},
zT:function zT(d,e){this.a=d
this.b=e},
b5m:function b5m(){},
b5n:function b5n(){},
DM:function DM(){this.b=this.x=null},
b5j:function b5j(){},
b5k:function b5k(d,e){this.a=d
this.b=e},
b5l:function b5l(d){this.a=d},
Cv(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cv=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akI(),$async$Cv)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").al(0,"partner_name_1, partner_name_2").V("id",d).cj(),$async$Cv)
case 4:s=f
x=5
return A.d(u.b.P("bookings").al(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cK(0,"event_date",!1),$async$Cv)
case 5:r=f
u=A.a([],y.s)
for(t=J.ao(r);t.q();)u.push(A.Y(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.Q().b
t===$&&A.b()
x=9
return A.d(t.P("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").da("booking_id",u).tv(0,"created_at"),$async$Cv)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").al(0,"title, category, amount, due_date, paid").V("wedding_id",d).tv(0,"due_date"),$async$Cv)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").al(0,"name, amount").V("wedding_id",d).tv(0,"position"),$async$Cv)
case 11:o=f
x=12
return A.d(u.b.P("budgets").al(0,"total").V("wedding_id",d).cj(),$async$Cv)
case 12:n=f
m=F.cZB(F.cEv(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ao(p);t.q();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cy(j==null?"":j)
i=k.h(l,"category")
i=J.cy(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.eV(A.p(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d2(A.p(g))
g=g==null?null:g.dH()}u.push(new B.Mq(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ao(o);l.q();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eV(A.p(k))
if(k==null)k=0}t.push(new B.a7R(i,k))}l=n==null?null:F.d_8(J.i(n,"total"))
v=new F.lU(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cv,w)},
Mq:function Mq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7R:function a7R(d,e){this.a=d
this.b=e},
doC(){return new B.D4(null)},
aU4(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aU4=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.h1(!0,new B.cDU(e,new A.aF(new A.bE(u,C.aF,C.ax),$.aa())),d,y.i),$async$aU4)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aU4,w)},
akB(d,e,f,g){return B.dFE(d,e,f,g)},
dFE(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akB=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aU4(d,"Teto para "+f,g),$async$akB)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.CG().gaX(),y.x).Os(f,r),$async$akB)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a0(H.HR)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akB,w)},
dcD(d){var x=A.U(d,y._)
C.e.ct(x,new B.cE3())
return x},
dd6(d){var x=C.f.aT(C.j.k(A.aE(d)),2,"0"),w=C.f.aT(C.j.k(A.aw(d)),2,"0"),v=A.aM(d)===A.aM(new A.ab(Date.now(),0,!1))?"":"/"+A.aM(d)
return x+"/"+w+v},
cYZ(d){var x,w,v,u
if(d===C.k.hC(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aX(w,".",",")}v=x.split(",")
u=A.CC(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHY(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abM:function abM(d,e){this.a=d
this.b=e},
D4:function D4(d){this.a=d},
abN:function abN(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bL9:function bL9(d){this.a=d},
bLa:function bLa(d){this.a=d},
bLr:function bLr(d){this.a=d},
bLq:function bLq(){},
bL5:function bL5(){},
bL7:function bL7(){},
bL8:function bL8(){},
bL6:function bL6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLf:function bLf(){},
bLg:function bLg(d){this.a=d},
bLp:function bLp(d){this.a=d},
bLh:function bLh(){},
bLi:function bLi(){},
bLj:function bLj(d,e){this.a=d
this.b=e},
bLk:function bLk(d){this.a=d},
bLe:function bLe(d){this.a=d},
bLl:function bLl(d){this.a=d},
bLd:function bLd(d){this.a=d},
bLm:function bLm(d){this.a=d},
bLc:function bLc(d){this.a=d},
bLn:function bLn(d){this.a=d},
bLb:function bLb(d){this.a=d},
bLo:function bLo(d){this.a=d},
cDU:function cDU(d,e){this.a=d
this.b=e},
cDS:function cDS(d){this.a=d},
cDT:function cDT(d,e){this.a=d
this.b=e},
cE3:function cE3(){},
aPG:function aPG(d,e,f){this.c=d
this.d=e
this.a=f},
aDE:function aDE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDF:function aDF(d,e){this.e=d
this.a=e},
bNC:function bNC(){},
bNE:function bNE(d,e){this.a=d
this.b=e},
bNF:function bNF(d){this.a=d},
bND:function bND(d,e,f){this.a=d
this.b=e
this.c=f},
aDb:function aDb(d,e){this.c=d
this.a=e},
bKv:function bKv(d){this.a=d},
bKu:function bKu(d){this.a=d},
aGj:function aGj(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bXn:function bXn(d,e){this.a=d
this.b=e},
bXj:function bXj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXk:function bXk(d){this.a=d},
bXl:function bXl(d,e){this.a=d
this.b=e},
bXm:function bXm(d,e){this.a=d
this.b=e},
XB:function XB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCi:function aCi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NR:function NR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abr:function abr(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bIb:function bIb(d){this.a=d},
bIa:function bIa(){},
bIc:function bIc(d){this.a=d},
bI9:function bI9(){},
bHY:function bHY(){},
bHZ:function bHZ(d){this.a=d},
bI8:function bI8(){},
bI3:function bI3(d){this.a=d},
bI4:function bI4(d){this.a=d},
bI2:function bI2(d,e){this.a=d
this.b=e},
bI5:function bI5(d){this.a=d},
bI1:function bI1(d){this.a=d},
bI6:function bI6(d){this.a=d},
bI0:function bI0(d){this.a=d},
bI7:function bI7(d,e){this.a=d
this.b=e},
bI_:function bI_(d,e){this.a=d
this.b=e},
Xe:function Xe(d,e){this.e=d
this.a=e},
bNG:function bNG(d){this.a=d},
bNH:function bNH(d){this.a=d},
bNI:function bNI(){},
bNJ:function bNJ(){},
bNK:function bNK(d){this.a=d},
bNL:function bNL(d,e,f){this.a=d
this.b=e
this.c=f},
bNM:function bNM(d,e){this.a=d
this.b=e},
ahZ:function ahZ(d,e,f){this.c=d
this.d=e
this.a=f},
aCn:function aCn(d,e,f){this.e=d
this.f=e
this.a=f},
bJ8:function bJ8(){},
bJe:function bJe(d){this.a=d},
bJb:function bJb(){},
bJa:function bJa(d){this.a=d},
bJ1:function bJ1(d){this.a=d},
bJ9:function bJ9(d,e,f){this.a=d
this.b=e
this.c=f},
bJc:function bJc(d){this.a=d},
bJ_:function bJ_(d){this.a=d},
bJ0:function bJ0(){},
bJd:function bJd(d,e){this.a=d
this.b=e},
bJ6:function bJ6(d){this.a=d},
bJ7:function bJ7(d){this.a=d},
bJ2:function bJ2(){},
bJ3:function bJ3(d){this.a=d},
bJ4:function bJ4(d){this.a=d},
bJ5:function bJ5(d,e){this.a=d
this.b=e},
ans:function ans(d,e){this.c=d
this.a=e},
aYE:function aYE(d){this.a=d},
dhE(d){var x
switch(d){case E.xQ:x=D.bCT
break
case E.xM:x=D.by6
break
case E.xN:x=D.bBF
break
case E.xO:x=D.bB5
break
case E.xP:x=D.bzA
break
default:x=C.a6
break}return x}},D,K,V
J=c[1]
A=c[0]
C=c[2]
L=c[203]
M=c[216]
N=c[186]
O=c[218]
E=c[219]
P=c[166]
Q=c[215]
F=c[134]
R=c[161]
G=c[77]
I=c[214]
S=c[197]
T=c[217]
H=c[213]
U=c[79]
B=a.updateHolder(c[53],B)
D=c[212]
K=c[72]
V=c[78]
B.DB.prototype={
gap(d){return this.a.a}}
B.b3H.prototype={
gpZ(){return C.e.cV(this.b,0,new B.b3I())},
gaBs(){var x=this.a
return x===0?0:C.k.af(this.gpZ()/x,0,1)}}
B.zT.prototype={
gbyM(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5m(),w),w.i("w.E"))
return x},
gbz6(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5n(),w),w.i("w.E"))
return x},
awC(d,e){var x=e==null?this.a:e
return new B.zT(x,d==null?this.b:d)},
ik(d){return this.awC(null,d)},
awk(d){return this.awC(d,null)}}
B.DM.prototype={
d1(){var x=y.T,w=this.x=A.eQ(this).G(A.cC($.cq(),new B.b5j(),y.v,x),x)
if(w!=null)A.j7(new B.b5k(this,w),y.H)
return D.azH},
bY(d,e){return this.bwb(0,e)},
bwb(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa1(0,v.ga1(0).ik(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").cl(0).V("wedding_id",e).cK(0,"created_at",!0),$async$bY)
case 2:v.sa1(0,new t.zT(s,r.da(g,B.dKv(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
Vn(d){return this.bm6(d)},
bm6(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vn=A.j(function(e,f){if(e===1)return A.k(f,w)
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
u.j(0,"due_date",t==null?null:C.e.gJ(t.cg().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.d0(0,u).cl(0).e9(0),$async$Vn)
case 2:s=f
r=v.ga1(0)
u=A.U(v.ga1(0).b,y._)
u.push(B.cZQ(s))
v.sa1(0,r.awk(u))
return A.l(null,w)}})
return A.m($async$Vn,w)},
Op(d){return this.bBF(d)},
bBF(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Op=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lc(v.ga1(0).b,new B.b5l(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bh(0,A.R(["paid",!n.w,"updated_at",new A.ab(Date.now(),0,!1).cg()],u,u)).V("id",d).cl(0).e9(0),$async$Op)
case 2:t=l.cZQ(f)
u=v.ga1(0)
m=A.a([],y.r)
for(s=v.ga1(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.G)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa1(0,u.awk(m))
return A.l(null,w)}})
return A.m($async$Op,w)}}
B.Mq.prototype={}
B.a7R.prototype={
gap(d){return this.a}}
B.abM.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D4.prototype={
R(){return new B.abN(D.J1)}}
B.abN.prototype={
Ty(d){return this.bc1(d)},
bc1(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Ty=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bL9(u))
x=1
break}u.p(new B.bLa(u))
t=u.gS()
s=$.cq()
r=t.a_(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a_(0,s.gaX(),y.Z).al(0,d),$async$Ty)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Ty,w)},
ad(){this.aq()
A.j7(new B.bLr(this),y.H)},
Q_(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Q_=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.am1()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.CG(),y.b).b
s=t==null?null:t.b
r=C.e.cV(o.a_(0,n,y.g).b,0,new B.bL5())
t=o.a_(0,$.cq(),y.v).b
q=t==null?null:t.gcz()
t=u.c
t.toString
x=3
return A.d(A.bQ(null,new B.bL6(q,s,new B.bL7(),r),!1,t,!0,!0,null,y.B),$async$Q_)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vn(new G.i6("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Q_,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CG(),y.b),a3=a1.G($.HZ(),y.d),a4=a1.G($.am1(),y.g),a5=a2.b,a6=a5==null?e:B.dJD(a5,a3.b)
a5=A.j3(a1.G($.j1(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iV
a5=y.T
w=a1.G(A.cC($.cq(),new B.bLf(),y.v,a5),a5)
if(f.y){a1=f.gapb()
return A.cP(e,C.cP,A.nJ(C.f_,40,A.a([C.fx,D.aH5,K.cWp(a1,e),new B.aCn(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.db(x,new B.bLg(w))
a1=a1.G($.uG(),y.l)
u=a1.gv(a1)
t=new B.bLp(u==null?C.fd:u)
a1=y._
a5=A.U(a4.gbyM(),a1)
for(s=v.a,r=J.c9(s),q=r.gX(s),p=v.b,o=v.$ti.i("fA<1>"),n=new A.fA(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i6("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbz6(0),a1)
for(s=r.gX(s),o=new A.fA(s,p,o),p=y.r;o.q();){r=s.gE(s)
n=A.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new G.i6("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new G.i6("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcD(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcD(q)
break
default:a1=e}h=C.e.cV(q,0,new B.bLh())
s=a6==null
if(s)g=D.bz9
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bLi(),p),p.i("w.E"))}if(s)a1=D.bXJ
else{s=f.gaR5()
r=y.p
p=A.a([new A.pu(A.a([new A.qO(s,"Nova despesa",e)],r),e),D.aHb,K.cWp(f.gapb(),w),new B.aPG(a6,new B.bLj(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aJ(a6.gpZ(),!1)
n=a5.length
m=n===1?d:a0
l=A.aJ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c2("N\xfameros",e,A.a([new A.DX(A.a([new A.lb("Gasto",o,""+n+" "+m,e),new A.lb("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.mb(A.a([new A.ek("Todos",l===D.J1,n+m,new B.bLk(f),e),new A.ek("Pendentes",l===D.abA,m,new B.bLl(f),e),new A.ek("Pagos",l===D.abz,n,new B.bLm(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aGj(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c2("Pagamentos",e,o,16,e))
a1=A.a([new A.h6(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDE(g,f.x,new B.bLn(f),e))
p.push(new A.c2("Categorias",e,a1,16,e))
p.push(new A.c2("Exportar",e,A.a([new F.DN("Gastos e parceiros",!1,new B.bLo(f),e)],r),16,e))
a1=A.nJ(C.f_,40,p,e,!0,!1)}return A.cP(e,C.cP,a1,!0,e)},
Is(d){return this.aY2(d)},
aY2(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Is=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aU4(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Is)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a_(0,$.CG().gaX(),y.x).a_3(r),$async$Is)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a0(H.HR)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Is,w)}}
B.aPG.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpZ()>0?"Gastos "+A.aJ(t.gpZ(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vm(new A.hi("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hG,0,"por definir","\u2014")}x=C.k.aN(t.gaBs()*100)
w=s-t.gpZ()<0?"Acima do teto":"Ainda tens"
v=A.aJ(Math.abs(s-t.gpZ()),!1)
s=A.aJ(s,!1)
u=t.gaBs()
return A.aY(A.vm(H.a1D,"Gastos "+A.aJ(t.gpZ(),!1)+" \xb7 "+x+"% do teto",w,C.hG,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDE.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dz(s,0,A.et(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.G)(r),++w)p.push(new B.aDF(r[w],null))
q=A.a([A.eR(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hi(u,v.e,!0,null))}return A.y(q,C.E,C.h,C.l)}}
B.aDF.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cC($.cq(),new B.bNC(),y.v,m),m)
if(l==null)x=C.r2
else{m=e.G($.d1O().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r2:m}m=A.a([],y.s)
for(w=B.dhE(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNE(this,d)
if(w)return A.k2(!1,!1,p,v,A.aJ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mM("P\xf4r teto",new B.bND(this,d,e),!0,p))
w=A.aJ(o.b,!1)
u=A.aJ(n,!1)
s=y.p
q=A.a([A.aK(new A.a4b(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aE,new B.ans(m,p)],s))
return A.k2(!1,!1,p,v,w+" de "+u,o.a,A.y(q,C.dJ,C.h,C.J))}}
B.aDb.prototype={
u(d){var x,w,v=null,u=$.au,t=$.fj.cc(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.hJ(r,A.aK(p==null?A.kN(A.b9(C.ia,u,v,v,v),C.t,!0):A.pq(p,144,new B.bKu(u),!1,C.bF,A.wy(),!1,v,v,v),48,48),C.bc)
p=A.h(q.b,1,C.a1,v,v,D.c3s,v,v)
x=A.b9(C.ic,u,v,v,14)
w=q.d
q=w>0?q.gPx()+" \xb7 "+A.aJ(w,!1):q.gPx()
w=y.p
return new A.S(C.d0,A.aY(A.x(v,A.O(A.a([r,C.af,A.a5(A.y(A.a([p,C.j7,A.O(A.a([x,C.dY,new A.di(1,C.ba,A.h(q,1,C.a1,v,v,A.aI(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bn,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b9(C.ie,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.J(t,v,v,s,v,v,C.x),v,v,v,C.eg,v,v,v),new B.bKv(d),v),v)}}
B.aGj.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JL(A.a([new A.hi("+ Nova despesa",this.f,!0,j)],y.p),C.eS,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aB0
x=new B.bXn(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.G)(i),++t){s=i[t]
r=s.a
q=C.f.cY(r,":pay:")
r=C.f.aY(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gJ(r.split(" \xb7 "))
n=A.aJ(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.dd6(m)
v.push(new A.tf(new A.ch(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bXj(d,e,s,q),A.HS(m)===C.f6,j))
continue}p=r?new B.bXk(d):new B.bXl(x,s)
v.push(new B.XB(s,p,r||s.w?j:new B.bXm(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XB&&v[k-1] instanceof B.XB)u.push(C.iL)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAH)
return A.y(i,C.E,C.h,C.l)}}
B.XB.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aJ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dd6(w))
v=C.e.a2(v," \xb7 ")
if(u)u=D.aGR
else{u=this.e
u=u!=null?new A.mM("Marcar pago",u,!0,null):D.aGY}return A.k2(!1,!1,null,this.d,v,x.c,u)}}
B.aCi.prototype={}
B.NR.prototype={
R(){var x=$.aa()
return new B.abr(new A.aF(C.ak,x),new A.aF(C.ak,x))}}
B.abr.prototype={
ad(){var x=this
x.aq()
x.d.an(0,new B.bIb(x))
x.e.an(0,new B.bIc(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
gahx(){var x=C.f.B(this.e.a.a)
x=A.aX(x," ","")
return A.eV(A.aX(x,",","."))},
aSk(){var x,w,v,u,t=this,s=t.gahx()
t.p(new B.bHZ(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.al(w,!1)
v=t.w
u=v?null:t.f
w.ah(new B.aCi(x,s,u,t.r,v))},
arW(d,e,f,g,h){var x=null,w=h?C.fp:x,v=y.p,u=A.a5(A.y(A.a([A.h(d,x,x,x,x,C.a9,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.bq:x,s=f?x:A.bH(C.kv,1.5),r=f?S.vo:x
return A.bj(x,!0,x,A.cp(C.bu,A.x(x,A.O(A.a([u,A.x(x,r,C.r,x,x,new A.J(t,x,s,x,x,x,C.ap),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.cL,new A.J(x,x,w,x,x,x,C.x),x,x,x,C.hu,x,x,x),C.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aD),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bis(d,e,f,g){return this.arW(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahx()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bI8()
t=y.w
s=A.aT(d,k,t).w
r=y.p
q=A.a([D.c7H],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k))
q=A.O(A.a([A.a5(A.y(q,C.G,C.h,C.l),1),A.bj(k,!0,k,A.cp(k,A.x(k,C.hC,C.r,k,k,C.bV,k,44,k,k,k,k,44),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bI3(d),k,k,k,k,k,k,!1,C.aD),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c8M,A.O(A.a([V.d6d(A.cs(k,C.a6,!1,k,!0,C.y,k,A.cv(),l.e,k,k,k,k,k,2,D.aET,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.fL,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aai,!0,C.dB,k,C.b0,k,k,k,k)),C.bj,D.c8a],r),C.ed,C.bR,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cYZ(v)+" no teto":"Passa o teto em "+B.cYZ(-v)
o.push(A.h(m,k,k,k,k,A.aI(k,k,n?C.W:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c7n)
p=A.x(k,A.y(o,C.v,C.h,C.l),C.r,k,k,new A.J(C.a3,k,k,p,k,k,C.x),k,k,k,C.bo,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bH(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d0,o,k),A.x(C.bb,A.cs(k,C.a6,!1,k,!0,C.y,k,A.cv(),x,k,k,k,k,k,2,D.aEy,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fj,!0,C.au,k,C.hb,k,k,k,k),C.r,k,k,new A.J(C.a3,k,m,n,k,k,C.x),k,52,k,C.fs,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bLc)
n.push(C.a_)
n.push(new U.a1o(l.r,new B.bI4(l),k))
n.push(C.a_)
n.push(new A.S(C.d0,A.h("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bis("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bI5(l)),l.arW("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bI6(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aE(p)))
m=l.f
m.toString
m=A.p(w.$1(A.aw(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aM(w)}o.push(A.bj(k,!0,k,A.cp(C.bu,A.aK(A.O(A.a([D.azr,A.h(w,k,k,k,k,C.cc,k,k),C.dY,C.jU],r),C.v,C.h,C.l,0,k),56,k),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bI7(l,d),k,k,k,k,k,k,!1,C.aD),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.x(k,A.y(o,C.v,C.h,C.l),C.r,k,k,new A.J(C.a3,k,k,x,k,k,C.x),k,k,k,C.cs,k,k,k))
n.push(C.a_)
n.push(D.cde)
x=A.dS(A.y(n,C.E,C.h,C.l),C.y,k,C.eh,k,C.av)
t=A.aT(d,C.b5,t).w
w=A.cd(u?C.z:C.z.cc(0.35),k,k,C.t,k,k,C.ab,k,k,C.eJ)
return new A.S(new A.a4(0,0,0,s.f.d),A.y(A.a([new A.S(C.jF,q,k),new A.di(1,C.ba,x,k),new A.S(new A.a4(20,16,20,20+t.r.d),A.aK(new A.am(A.bD(A.h(u?"Guardar \xb7 "+B.cYZ(j):"Guardar",k,k,k,k,k,k,k),l.gaSj(),w),k),52,k),k)],r),C.E,C.h,C.J),k)}}
B.Xe.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CG(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eL(new A.a6(j,new B.bNG(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.am1(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNH(l),w),w.i("w.E"))
C.e.ct(v,new B.bNI())
j=y.T
u=e.G(A.cC($.cq(),new B.bNJ(),y.v,j),j)
t=B.dhE(l.e.c)
if(u==null)s=I.Fj
else{j=e.G($.aVX().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fj
j=J.db(j,new B.bNK(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aT(d,k,y.w).w
w=A.bO(A.x(k,k,C.r,k,k,new A.J(C.bG,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ay(d).ok.r,k,k)
q=A.a5(new B.ahZ("Gasto",A.aJ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aA,A.O(A.a([q,C.ae,A.a5(A.aY(new B.ahZ("Teto \xb7 tocar para mudar",p===0?"Definir":A.aJ(p,!1),k),new B.bNL(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bh,A.h("Contratado na app",k,k,k,k,A.ay(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.G)(s),++n)w.push(new B.aDb(s[n],k))
C.e.n(p,w)}p.push(C.bh)
p.push(A.h("Despesas",k,k,k,k,A.ay(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKC)
else for(n=0;n<v.length;v.length===w||(0,A.G)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.iv,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aT(C.j.k(A.aE(q)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(q)),2,"0")+"/"+A.aM(q),k,k,k,k,k,k,k)
p.push(A.jo(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aJ(m.f,!1),k,k,k,k,D.c5x,k,k),C.ac,new P.Df(m.w,new B.bNM(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J3,k)],o),C.v,C.h,C.J,0,k),k))}return A.bB(!0,new A.ec(new A.aR(0,1/0,0,j.a.b*0.8),A.d6(p,k,L.CR,k,k,!1,!0),k),k,C.Z,!0)}}
B.ahZ.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.y(A.a([A.h(this.c,x,x,x,x,C.be,x,x),C.ar,A.h(this.d,x,x,x,x,M.aa5,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.J(C.a3,x,x,w,x,x,C.x),x,x,x,C.cT,x,x,x)}}
B.aCn.prototype={
bb(d,e){var x,w=y.t,v=e.G(A.cC($.cq(),new B.bJ8(),y.v,w),w),u=e.G($.d1N(),y.o)
w=e.G($.uG(),y.l)
x=w.gv(w)
return A.hD(u,new B.bJ9(this,new B.bJe(x==null?C.fd:x),v),new B.bJa(e),new B.bJb(),!1,!0,!1)}}
B.ans.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
t=$.fj
s=new A.b6(999,999)
r=new A.be(o.cc(0.25),1,C.ag,-1)
q=A.b9(C.ic,o,p,p,13)
t=A.x(p,A.O(A.a([q,C.rM,new A.di(1,C.ba,A.h(u,1,C.a1,p,p,new A.P(!0,o,p,p,p,p,14,C.d2,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b9(C.ie,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afn,new A.J(t,p,new A.dN(r,r,r,r),new A.cA(s,s,s,s),p,p,C.x),p,p,p,D.au_,p,p,p)
m.push(new A.js(new A.n5(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hS(t,new B.aYE(d),p,p),p))}return A.e4(C.bf,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["B(i6)","T(T,i6)","v(i6,i6)","T(T,DB)","zT()","F<~>(c?)","F<~>()","NR(N)","B(DB)","F<lU>()","Xe(N)","~(i6)","~()","B(np)","B(rP)","i6(a3<c,@>)","DM()"])
B.cHB.prototype={
$1(d){return this.aEL(d)},
aEL(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.tZ(a1)
u=y.t
t=a1.G(A.cC($.cq(),new B.cHx(),y.v,u),u)
u=J.a7(t)
if(u.gY(t)){v=D.bza
x=1
break}s=A.a([],y.s)
for(r=u.gX(t);r.q();)s.push(r.gE(r).a)
r=$.Q()
q=r.b
q===$&&A.b()
p=y.G
o=q.P("budgets").al(0,"wedding_id, total").da("wedding_id",s).b3(new B.cHy(),p)
n=r.b.P("budget_categories").al(0,"wedding_id, amount").da("wedding_id",s).b3(new B.cHz(),p)
m=r.b.P("expenses").al(0,"wedding_id, amount, paid").da("wedding_id",s).b3(new B.cHA(),p)
p=y.N
s=y.i
r=A.E(p,s)
d=q=y.P
a0=J
x=3
return A.d(o,$async$$1)
case 3:d,l=a0.bf(a3,q),k=A.u(l),l=new A.ag(l,l.gA(l),k.i("ag<V.E>")),k=k.i("V.E")
case 4:if(!l.q()){x=5
break}j=l.d
if(j==null)j=k.a(j)
i=J.a7(j)
r.j(0,A.Y(i.h(j,"wedding_id")),A.dv(i.h(j,"total")))
x=4
break
case 5:h=A.E(p,s)
d=J
x=6
return A.d(n,$async$$1)
case 6:l=d.bf(a3,q),k=A.u(l),l=new A.ag(l,l.gA(l),k.i("ag<V.E>")),k=k.i("V.E")
case 7:if(!l.q()){x=8
break}j=l.d
if(j==null)j=k.a(j)
i=J.a7(j)
g=A.Y(i.h(j,"wedding_id"))
f=h.h(0,g)
if(f==null)f=0
j=A.aD(i.h(j,"amount"))
if(j==null)j=null
h.j(0,g,f+(j==null?0:j))
x=7
break
case 8:e=A.E(p,s)
d=J
x=9
return A.d(m,$async$$1)
case 9:s=d.bf(a3,q),q=A.u(s),s=new A.ag(s,s.gA(s),q.i("ag<V.E>")),q=q.i("V.E")
case 10:if(!s.q()){x=11
break}p=s.d
if(p==null)p=q.a(p)
l=J.a7(p)
if(J.o(l.h(p,"paid"),!0)){x=10
break}g=A.Y(l.h(p,"wedding_id"))
k=e.h(0,g)
if(k==null)k=0
p=A.aD(l.h(p,"amount"))
if(p==null)p=null
e.j(0,g,k+(p==null?0:p))
x=10
break
case 11:s=A.a([],y.n)
for(u=u.gX(t);u.q();){q=u.gE(u)
p=q.a
l=r.h(0,p)
q=l==null?q.as:l
if(q==null)q=0
l=h.h(0,p)
if(l==null)l=0
k=e.h(0,p)
s.push(new A.aMV([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1302}
B.cHx.prototype={
$1(d){return d.c},
$S:151}
B.cHy.prototype={
$1(d){return d},
$S:29}
B.cHz.prototype={
$1(d){return d},
$S:29}
B.cHA.prototype={
$1(d){return d},
$S:29}
B.b3I.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5m.prototype={
$1(d){return d.w},
$S:z+0}
B.b5n.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5j.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.b5k.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b5l.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bL9.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bLa.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bLr.prototype={
$0(){return this.a.gS().a_(0,$.CG().gaX(),y.x).Zk(0).e5(new B.bLq())},
$S:1}
B.bLq.prototype={
$1(d){},
$S:11}
B.bL5.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bL7.prototype={
$1(d){return A.CC(C.k.a8(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bL8(),null)+" \u20ac"},
$S:108}
B.bL8.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bL6.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a2(v," \xb7 ")
u=x&&u>0?u:null
return new B.NR(v,u,w.d,null)},
$S:z+7}
B.bLf.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bLg.prototype={
$1(d){return d.x!==C.e9&&d.b===this.a},
$S:63}
B.bLp.prototype={
$2(d,e){return A.ji(d,this.a.l9(e))},
$1(d){return this.$2(d,null)},
$S:1305}
B.bLh.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLi.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bLj.prototype={
$0(){return this.a.Is(this.b.a)},
$S:0}
B.bLk.prototype={
$0(){var x=this.a
return x.p(new B.bLe(x))},
$S:0}
B.bLe.prototype={
$0(){return this.a.w=D.J1},
$S:0}
B.bLl.prototype={
$0(){var x=this.a
return x.p(new B.bLd(x))},
$S:0}
B.bLd.prototype={
$0(){return this.a.w=D.abA},
$S:0}
B.bLm.prototype={
$0(){var x=this.a
return x.p(new B.bLc(x))},
$S:0}
B.bLc.prototype={
$0(){return this.a.w=D.abz},
$S:0}
B.bLn.prototype={
$0(){var x=this.a
return x.p(new B.bLb(x))},
$S:0}
B.bLb.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bLo.prototype={
$0(){return B.Cv(this.a.gS().a_(0,$.cq(),y.v).b.a)},
$S:z+9}
B.cDU.prototype={
$1(d){var x=null,w=this.b
return new A.eU(A.h(this.a,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.cv(),w,x,x,x,x,x,2,D.aF6,C.U,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.fL,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b0,x,x,x,x),A.a([new A.am(A.cJ(C.cZ,x,x,new B.cDS(d),x,x),x),new A.am(A.bD(C.dw,new B.cDT(d,w),x),x)],y.p),x)},
$S:19}
B.cDS.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.cDT.prototype={
$0(){var x=A.al(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aX(w," ","")
return x.ah(A.eV(A.aX(w,",",".")))},
$S:0}
B.cE3.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bNC.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bNE.prototype={
$0(){return A.bQ(null,new B.bNF(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNF.prototype={
$1(d){return new B.Xe(this.a.e.a,null)},
$S:z+10}
B.bND.prototype={
$0(){return B.akB(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKv.prototype={
$0(){var x=this.a
A.al(x,!1).bj()
A.ae(x).aj("/bookings",null,y.X)},
$S:0}
B.bKu.prototype={
$3(d,e,f){return A.kN(A.b9(C.ia,this.a,null,null,null),C.t,!0)},
$S:96}
B.bXn.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.am1().gaX(),y.h).Op(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a0(A.bY(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bXj.prototype={
$0(){var x=this
return A.rH(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bXk.prototype={
$0(){return A.ae(this.a).aj("/bookings",null,y.X)},
$S:0}
B.bXl.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bXm.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bIb.prototype={
$0(){return this.a.p(new B.bIa())},
$S:0}
B.bIa.prototype={
$0(){},
$S:0}
B.bIc.prototype={
$0(){return this.a.p(new B.bI9())},
$S:0}
B.bI9.prototype={
$0(){},
$S:0}
B.bHY.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bHZ.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bI8.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:37}
B.bI3.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.bI4.prototype={
$1(d){var x=this.a
return x.p(new B.bI2(x,d))},
$S:137}
B.bI2.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bI5.prototype={
$0(){var x=this.a
return x.p(new B.bI1(x))},
$S:0}
B.bI1.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bI6.prototype={
$0(){var x=this.a
return x.p(new B.bI0(x))},
$S:0}
B.bI0.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bI7.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ab(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cNW(v.b,A.bZ(A.aM(t)-1,1,1,0,0),r,A.bZ(A.aM(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bI_(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bI_.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNG.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNH.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNI.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bNJ.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bNK.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bNL.prototype={
$0(){var x=this.c
return B.akB(this.a,this.b,x.a,x.d)},
$S:0}
B.bNM.prototype={
$1(d){return this.a.a_(0,$.am1().gaX(),y.h).Op(this.b.a)},
$S:134}
B.bJ8.prototype={
$1(d){return d.c},
$S:151}
B.bJe.prototype={
$2(d,e){return A.ji(d,this.a.l9(e))},
$S:42}
B.bJb.prototype={
$0(){return D.bLe},
$S:90}
B.bJa.prototype={
$2(d,e){return A.JL(A.a([new A.hi("Tentar outra vez",new B.bJ1(this.a),!1,null)],y.p),C.eS,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1306}
B.bJ1.prototype={
$0(){return this.a.ai($.d1N())},
$S:0}
B.bJ9.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bJc(g),e=new B.bJd(g,this.b),d=J.c9(a4),a0=d.cV(a4,0,new B.bJ2()),a1=d.cV(a4,0,new B.bJ3(f)),a2=d.cV(a4,0,new B.bJ4(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ao(this.c);x.q();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C_(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aJ(a1,!1)
w=a0>0
v=w?"de "+A.aJ(a0,!1):"gastos"
u=w?C.k.af(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aN(a1/a0*100)+"% dos tetos":""
x=A.vm(i,""+t+" "+r+w,"Todos os eventos",C.hG,u,v,x)
v=y.p
u=A.a([new A.DX(A.a([new A.lb("Gasto",A.aJ(a1,!1),h,i),new A.lb("Por pagar",A.aJ(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eu(a4,0,y.A),r=J.ao(t.a),q=t.b,t=new A.bX(r,q,A.u(t).i("bX<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.an(A.c0())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iL)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a1,i,i,C.a9,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aJ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aJ(j[3]+e.$1(j[0]),!1))}n=A.y(A.a([n,C.aU,A.h(C.e.a2(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.hS(A.x(i,A.O(A.a([new A.bJ(1,C.at,n,i),C.ae,A.h(A.aJ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.bj,C.jU],v),C.v,C.h,C.l,0,i),C.r,C.as,C.cL,i,i,i,i,C.ck,i,i,i),new B.bJ5(o,g),i,i))
C.e.n(w,l)}return A.y(A.a([x,new A.c2("N\xfameros",i,u,16,i),new A.c2("Por evento \xb7 "+d,i,w,16,i),D.aAJ],v),C.E,C.h,C.l)},
$S:1307}
B.bJc.prototype={
$1(d){return J.db(this.a.e,new B.bJ_(d)).cV(0,0,new B.bJ0())},
$S:170}
B.bJ_.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:63}
B.bJ0.prototype={
$2(d,e){return d+e.w},
$S:492}
B.bJd.prototype={
$1(d){return J.db(this.a.e,new B.bJ6(d)).cV(0,0,new B.bJ7(this.b))},
$S:170}
B.bJ6.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:63}
B.bJ7.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:492}
B.bJ2.prototype={
$2(d,e){return d+e.a[2]},
$S:237}
B.bJ3.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:237}
B.bJ4.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:237}
B.bJ5.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYE.prototype={
$0(){return A.ae(this.a).aj("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKv","cZQ",15)
w(B,"dKu","drj",16)
v(B.DM.prototype,"giF","d1",4)
var t
u(t=B.abN.prototype,"gapb","Ty",5)
v(t,"gaR5","Q_",6)
v(B.abr.prototype,"gaSj","aSk",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cHB,B.cHx,B.cHy,B.cHz,B.cHA,B.b5m,B.b5n,B.b5j,B.b5l,B.bLq,B.bL7,B.bL8,B.bL6,B.bLf,B.bLg,B.bLp,B.bLi,B.cDU,B.bNC,B.bNF,B.bKu,B.bXn,B.bHY,B.bI8,B.bI4,B.bNG,B.bNH,B.bNJ,B.bNK,B.bNM,B.bJ8,B.bJ9,B.bJc,B.bJ_,B.bJd,B.bJ6])
x(A.M,[B.DB,B.b3H,B.zT,B.Mq,B.a7R,B.aCi])
x(A.cK,[B.b3I,B.bL5,B.bLh,B.cE3,B.bNI,B.bJe,B.bJa,B.bJ0,B.bJ7,B.bJ2,B.bJ3,B.bJ4])
w(B.DM,A.fb)
x(A.bL,[B.b5k,B.bL9,B.bLa,B.bLr,B.bLj,B.bLk,B.bLe,B.bLl,B.bLd,B.bLm,B.bLc,B.bLn,B.bLb,B.bLo,B.cDS,B.cDT,B.bNE,B.bND,B.bKv,B.bXj,B.bXk,B.bXl,B.bXm,B.bIb,B.bIa,B.bIc,B.bI9,B.bHZ,B.bI3,B.bI2,B.bI5,B.bI1,B.bI6,B.bI0,B.bI7,B.bI_,B.bNL,B.bJb,B.bJ1,B.bJ5,B.aYE])
w(B.abM,A.fg)
w(B.D4,A.dC)
w(B.abN,A.dw)
x(A.L,[B.aPG,B.aDE,B.aDb,B.XB,B.ahZ,B.ans])
x(A.ew,[B.aDF,B.aGj,B.Xe,B.aCn])
w(B.NR,A.H)
w(B.abr,A.a_)})()
A.br(b.typeUniverse,JSON.parse('{"DM":{"fb":["zT"]},"NR":{"H":[],"e":[],"f":[]},"Xe":{"H":[],"e":[],"f":[]},"D4":{"H":[],"e":[],"f":[]},"abN":{"a_":["D4"]},"aPG":{"L":[],"e":[],"f":[]},"aDE":{"L":[],"e":[],"f":[]},"aDF":{"H":[],"e":[],"f":[]},"aDb":{"L":[],"e":[],"f":[]},"aGj":{"H":[],"e":[],"f":[]},"XB":{"L":[],"e":[],"f":[]},"abr":{"a_":["NR"]},"ahZ":{"L":[],"e":[],"f":[]},"aCn":{"H":[],"e":[],"f":[]},"ans":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{l:x("ax<f9>"),k:x("ax<t<rP>>"),u:x("ax<t<fK>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("ax<a3<c,t<c>>>"),x:x("zw"),b:x("uT"),d:x("rU"),Z:x("ok"),v:x("ed"),_:x("i6"),h:x("DM"),g:x("zT"),D:x("r<DB>"),r:x("r<i6>"),Q:x("r<lb>"),F:x("r<ek>"),Y:x("r<a3<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7R>"),c:x("r<Mq>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fK>"),t:x("t<fl>"),G:x("t<a3<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a3<c,@>"),w:x("du"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lU"),N:x("c"),B:x("aCi"),q:x("dl"),i:x("T"),z:x("@"),S:x("v"),X:x("M?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afn=new A.aR(0,1/0,32,1/0)
D.au_=new A.a4(8,5,6,5)
D.cgT=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azr=new A.bJ(1,C.at,D.cgT,null)
D.byS=x([],y.r)
D.azH=new B.zT(!1,D.byS)
D.aAH=new A.h6("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAJ=new A.h6("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aB0=new A.h6("Sem pagamentos nesta vista.",8,null)
D.aEy=new A.dE(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bk,null,null,C.bk,C.bk,!0,null,null,null,null)
D.aET=new A.dE(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bk,null,null,C.bk,C.bk,!0,null,null,null,null)
D.aF6=new A.dE(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGR=new A.dU("Pago",C.cU,null)
D.aGY=new A.dU("Por pagar",C.hE,null)
D.aH5=new A.lg("Or\xe7amento","Todos os teus eventos",null)
D.aHb=new A.lg("Or\xe7amento",null,null)
D.by6=x(["catering"],y.s)
D.bz9=x([],y.D)
D.bza=x([],y.n)
D.bzA=x(["flowers_decor"],y.s)
D.bB5=x(["music_dj","bands_musicians"],y.s)
D.bBF=x(["photography"],y.s)
D.bCT=x(["venue"],y.s)
D.aEn=new A.vh("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kE,null)
D.bKC=new A.S(C.fW,D.aEn,null)
D.c98=new A.D("A despesa precisa de um t\xedtulo",null,C.mo,null,null,null,null,null,null,null)
D.bLc=new A.S(T.Ny,D.c98,null)
D.bLe=new A.S(O.uO,C.f1,null)
D.bXJ=new A.vX(!1,6,!0,null)
D.c3s=new A.P(!0,C.z,null,null,null,null,14,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5x=new A.P(!0,null,null,null,null,null,null,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aai=new A.P(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7n=new A.D("Indica um valor v\xe1lido",null,C.mo,null,null,null,null,null,null,null)
D.c7H=new A.D("Nova despesa",null,C.bi,null,null,null,null,null,null,null)
D.c8a=new A.D("\u20ac",null,D.aai,null,null,null,null,null,null,null)
D.c8M=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.cde=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null)
D.J1=new B.abM(0,"all")
D.abz=new B.abM(1,"paid")
D.abA=new B.abM(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXW","d1N",()=>C.bP.$1$1(new B.cHB(),y.m))
x($,"dYM","am1",()=>A.mW(B.dKu(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["YyLiFyFAOx3HKeg1XZ7bth3CrU4="]=a.current})($__dart_deferred_initializers__);