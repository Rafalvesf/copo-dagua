((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cHM:function cHM(){},cHI:function cHI(){},cHJ:function cHJ(){},cHK:function cHK(){},cHL:function cHL(){},
dJP(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v)u.push(new B.DC(x[v]))
return new B.b3N(d.b,u)},
DC:function DC(d){this.a=d},
b3N:function b3N(d,e){this.a=d
this.b=e},
b3O:function b3O(){},
d_0(d){var x="category",w="due_date",v=J.a7(d),u=A.Y(v.h(d,"id")),t=A.Y(v.h(d,"wedding_id")),s=A.Y(v.h(d,"title")),r=B.dG2(B.deL(A.B(v.h(d,x)))),q=B.deL(A.B(v.h(d,x))),p=A.dv(v.h(d,"amount")),o=v.h(d,w)==null?null:A.dc(A.Y(v.h(d,w)))
v=A.dW(v.h(d,"paid"))
return new G.i6(u,t,s,r,q,p,o,v===!0)},
deL(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dG2(d){var x
A:{if("venue"===d){x=E.xQ
break A}if("catering"===d){x=E.xM
break A}if("photography"===d){x=E.xN
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xO
break A}if("flowers_decor"===d){x=E.xP
break A}x=null
break A}return x},
drv(){return new B.DN()},
zT:function zT(d,e){this.a=d
this.b=e},
b5s:function b5s(){},
b5t:function b5t(){},
DN:function DN(){this.b=this.x=null},
b5p:function b5p(){},
b5q:function b5q(d,e){this.a=d
this.b=e},
b5r:function b5r(d){this.a=d},
Cw(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cw=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akO(),$async$Cw)
case 3:u=$.P()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").al(0,"partner_name_1, partner_name_2").V("id",d).cj(),$async$Cw)
case 4:s=f
x=5
return A.d(u.b.P("bookings").al(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cK(0,"event_date",!1),$async$Cw)
case 5:r=f
u=A.a([],y.s)
for(t=J.ao(r);t.q();)u.push(A.Y(J.h(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.P().b
t===$&&A.b()
x=9
return A.d(t.P("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").da("booking_id",u).tv(0,"created_at"),$async$Cw)
case 9:q=f
case 7:u=$.P()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").al(0,"title, category, amount, due_date, paid").V("wedding_id",d).tv(0,"due_date"),$async$Cw)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").al(0,"name, amount").V("wedding_id",d).tv(0,"position"),$async$Cw)
case 11:o=f
x=12
return A.d(u.b.P("budgets").al(0,"total").V("wedding_id",d).cj(),$async$Cw)
case 12:n=f
m=F.cZM(F.cEG(s),"Gastos e parceiros",r,q,!1)
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
g=g==null?null:g.dH()}u.push(new B.Mt(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ao(o);l.q();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eV(A.p(k))
if(k==null)k=0}t.push(new B.a7X(i,k))}l=n==null?null:F.d_j(J.h(n,"total"))
v=new F.lU(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cw,w)},
Mt:function Mt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7X:function a7X(d,e){this.a=d
this.b=e},
doO(){return new B.D5(null)},
aUb(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUb=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.h1(!0,new B.cE4(e,new A.aF(new A.bE(u,C.aF,C.ax),$.aa())),d,y.i),$async$aUb)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUb,w)},
akH(d,e,f,g){return B.dFQ(d,e,f,g)},
dFQ(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akH=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUb(d,"Teto para "+f,g),$async$akH)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.CH().gaX(),y.x).Os(f,r),$async$akH)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a0(H.HS)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akH,w)},
dcO(d){var x=A.U(d,y._)
C.e.ct(x,new B.cEe())
return x},
ddh(d){var x=C.f.aT(C.j.k(A.aE(d)),2,"0"),w=C.f.aT(C.j.k(A.aw(d)),2,"0"),v=A.aM(d)===A.aM(new A.ab(Date.now(),0,!1))?"":"/"+A.aM(d)
return x+"/"+w+v},
cZ9(d){var x,w,v,u
if(d===C.k.hC(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aX(w,".",",")}v=x.split(",")
u=A.CD(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bI8(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abS:function abS(d,e){this.a=d
this.b=e},
D5:function D5(d){this.a=d},
abT:function abT(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bLk:function bLk(d){this.a=d},
bLl:function bLl(d){this.a=d},
bLC:function bLC(d){this.a=d},
bLB:function bLB(){},
bLg:function bLg(){},
bLi:function bLi(){},
bLj:function bLj(){},
bLh:function bLh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLq:function bLq(){},
bLr:function bLr(d){this.a=d},
bLA:function bLA(d){this.a=d},
bLs:function bLs(){},
bLt:function bLt(){},
bLu:function bLu(d,e){this.a=d
this.b=e},
bLv:function bLv(d){this.a=d},
bLp:function bLp(d){this.a=d},
bLw:function bLw(d){this.a=d},
bLo:function bLo(d){this.a=d},
bLx:function bLx(d){this.a=d},
bLn:function bLn(d){this.a=d},
bLy:function bLy(d){this.a=d},
bLm:function bLm(d){this.a=d},
bLz:function bLz(d){this.a=d},
cE4:function cE4(d,e){this.a=d
this.b=e},
cE2:function cE2(d){this.a=d},
cE3:function cE3(d,e){this.a=d
this.b=e},
cEe:function cEe(){},
aPN:function aPN(d,e,f){this.c=d
this.d=e
this.a=f},
aDL:function aDL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDM:function aDM(d,e){this.e=d
this.a=e},
bNN:function bNN(){},
bNP:function bNP(d,e){this.a=d
this.b=e},
bNQ:function bNQ(d){this.a=d},
bNO:function bNO(d,e,f){this.a=d
this.b=e
this.c=f},
aDi:function aDi(d,e){this.c=d
this.a=e},
bKG:function bKG(d){this.a=d},
bKF:function bKF(d){this.a=d},
aGq:function aGq(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bXy:function bXy(d,e){this.a=d
this.b=e},
bXu:function bXu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXv:function bXv(d){this.a=d},
bXw:function bXw(d,e){this.a=d
this.b=e},
bXx:function bXx(d,e){this.a=d
this.b=e},
XF:function XF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCp:function aCp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NW:function NW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abx:function abx(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bIm:function bIm(d){this.a=d},
bIl:function bIl(){},
bIn:function bIn(d){this.a=d},
bIk:function bIk(){},
bI8:function bI8(){},
bI9:function bI9(d){this.a=d},
bIj:function bIj(){},
bIe:function bIe(d){this.a=d},
bIf:function bIf(d){this.a=d},
bId:function bId(d,e){this.a=d
this.b=e},
bIg:function bIg(d){this.a=d},
bIc:function bIc(d){this.a=d},
bIh:function bIh(d){this.a=d},
bIb:function bIb(d){this.a=d},
bIi:function bIi(d,e){this.a=d
this.b=e},
bIa:function bIa(d,e){this.a=d
this.b=e},
Xi:function Xi(d,e){this.e=d
this.a=e},
bNR:function bNR(d){this.a=d},
bNS:function bNS(d){this.a=d},
bNT:function bNT(){},
bNU:function bNU(){},
bNV:function bNV(d){this.a=d},
bNW:function bNW(d,e,f){this.a=d
this.b=e
this.c=f},
bNX:function bNX(d,e){this.a=d
this.b=e},
ai4:function ai4(d,e,f){this.c=d
this.d=e
this.a=f},
aCu:function aCu(d,e,f){this.e=d
this.f=e
this.a=f},
bJj:function bJj(){},
bJp:function bJp(d){this.a=d},
bJm:function bJm(){},
bJl:function bJl(d){this.a=d},
bJc:function bJc(d){this.a=d},
bJk:function bJk(d,e,f){this.a=d
this.b=e
this.c=f},
bJn:function bJn(d){this.a=d},
bJa:function bJa(d){this.a=d},
bJb:function bJb(){},
bJo:function bJo(d,e){this.a=d
this.b=e},
bJh:function bJh(d){this.a=d},
bJi:function bJi(d){this.a=d},
bJd:function bJd(){},
bJe:function bJe(d){this.a=d},
bJf:function bJf(d){this.a=d},
bJg:function bJg(d,e){this.a=d
this.b=e},
any:function any(d,e){this.c=d
this.a=e},
aYL:function aYL(d){this.a=d},
dhP(d){var x
switch(d){case E.xQ:x=D.bCV
break
case E.xM:x=D.by8
break
case E.xN:x=D.bBH
break
case E.xO:x=D.bB7
break
case E.xP:x=D.bzC
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
B.DC.prototype={
gap(d){return this.a.a}}
B.b3N.prototype={
gpZ(){return C.e.cV(this.b,0,new B.b3O())},
gaBu(){var x=this.a
return x===0?0:C.k.af(this.gpZ()/x,0,1)}}
B.zT.prototype={
gbyS(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5s(),w),w.i("w.E"))
return x},
gbzc(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5t(),w),w.i("w.E"))
return x},
awE(d,e){var x=e==null?this.a:e
return new B.zT(x,d==null?this.b:d)},
ik(d){return this.awE(null,d)},
awm(d){return this.awE(d,null)}}
B.DN.prototype={
d1(){var x=y.T,w=this.x=A.eQ(this).G(A.cC($.cq(),new B.b5p(),y.v,x),x)
if(w!=null)A.j8(new B.b5q(this,w),y.H)
return D.azJ},
bY(d,e){return this.bwh(0,e)},
bwh(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa1(0,v.ga1(0).ik(!0))
u=$.P().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").cl(0).V("wedding_id",e).cK(0,"created_at",!0),$async$bY)
case 2:v.sa1(0,new t.zT(s,r.d7(g,B.dKH(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
Vn(d){return this.bma(d)},
bma(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vn=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.P().b
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
u.push(B.d_0(s))
v.sa1(0,r.awm(u))
return A.l(null,w)}})
return A.m($async$Vn,w)},
Op(d){return this.bBL(d)},
bBL(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Op=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lc(v.ga1(0).b,new B.b5r(d))
m=$.P().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bh(0,A.R(["paid",!n.w,"updated_at",new A.ab(Date.now(),0,!1).cg()],u,u)).V("id",d).cl(0).e9(0),$async$Op)
case 2:t=l.d_0(f)
u=v.ga1(0)
m=A.a([],y.r)
for(s=v.ga1(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.G)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa1(0,u.awm(m))
return A.l(null,w)}})
return A.m($async$Op,w)}}
B.Mt.prototype={}
B.a7X.prototype={
gap(d){return this.a}}
B.abS.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D5.prototype={
R(){return new B.abT(D.J2)}}
B.abT.prototype={
Ty(d){return this.bc5(d)},
bc5(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Ty=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bLk(u))
x=1
break}u.p(new B.bLl(u))
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
A.j8(new B.bLC(this),y.H)},
Q_(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Q_=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.am7()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.CH(),y.b).b
s=t==null?null:t.b
r=C.e.cV(o.a_(0,n,y.g).b,0,new B.bLg())
t=o.a_(0,$.cq(),y.v).b
q=t==null?null:t.gcz()
t=u.c
t.toString
x=3
return A.d(A.bQ(null,new B.bLh(q,s,new B.bLi(),r),!1,t,!0,!0,null,y.B),$async$Q_)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vn(new G.i6("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Q_,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CH(),y.b),a3=a1.G($.I2(),y.d),a4=a1.G($.am7(),y.g),a5=a2.b,a6=a5==null?e:B.dJP(a5,a3.b)
a5=A.j4(a1.G($.j2(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iV
a5=y.T
w=a1.G(A.cC($.cq(),new B.bLq(),y.v,a5),a5)
if(f.y){a1=f.gape()
return A.cP(e,C.cP,A.nJ(C.f_,40,A.a([C.fx,D.aH7,K.cWB(a1,e),new B.aCu(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.db(x,new B.bLr(w))
a1=a1.G($.uG(),y.l)
u=a1.gv(a1)
t=new B.bLA(u==null?C.fd:u)
a1=y._
a5=A.U(a4.gbyS(),a1)
for(s=v.a,r=J.c9(s),q=r.gX(s),p=v.b,o=v.$ti.i("fA<1>"),n=new A.fA(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i6("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbzc(0),a1)
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
n.push(new G.i6("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcO(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcO(q)
break
default:a1=e}h=C.e.cV(q,0,new B.bLs())
s=a6==null
if(s)g=D.bzc
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bLt(),p),p.i("w.E"))}if(s)a1=D.bXM
else{s=f.gaR8()
r=y.p
p=A.a([new A.pu(A.a([new A.qO(s,"Nova despesa",e)],r),e),D.aHd,K.cWB(f.gape(),w),new B.aPN(a6,new B.bLu(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aJ(a6.gpZ(),!1)
n=a5.length
m=n===1?d:a0
l=A.aJ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c2("N\xfameros",e,A.a([new A.DY(A.a([new A.lb("Gasto",o,""+n+" "+m,e),new A.lb("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.mb(A.a([new A.ek("Todos",l===D.J2,n+m,new B.bLv(f),e),new A.ek("Pendentes",l===D.abB,m,new B.bLw(f),e),new A.ek("Pagos",l===D.abA,n,new B.bLx(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aGq(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c2("Pagamentos",e,o,16,e))
a1=A.a([new A.h6(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDL(g,f.x,new B.bLy(f),e))
p.push(new A.c2("Categorias",e,a1,16,e))
p.push(new A.c2("Exportar",e,A.a([new F.DO("Gastos e parceiros",!1,new B.bLz(f),e)],r),16,e))
a1=A.nJ(C.f_,40,p,e,!0,!1)}return A.cP(e,C.cP,a1,!0,e)},
It(d){return this.aY5(d)},
aY5(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$It=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUb(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$It)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a_(0,$.CH().gaX(),y.x).a_5(r),$async$It)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a0(H.HS)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$It,w)}}
B.aPN.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpZ()>0?"Gastos "+A.aJ(t.gpZ(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vm(new A.hi("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hG,0,"por definir","\u2014")}x=C.k.aN(t.gaBu()*100)
w=s-t.gpZ()<0?"Acima do teto":"Ainda tens"
v=A.aJ(Math.abs(s-t.gpZ()),!1)
s=A.aJ(s,!1)
u=t.gaBu()
return A.aY(A.vm(H.a1E,"Gastos "+A.aJ(t.gpZ(),!1)+" \xb7 "+x+"% do teto",w,C.hG,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDL.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dz(s,0,A.et(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.G)(r),++w)p.push(new B.aDM(r[w],null))
q=A.a([A.eR(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hi(u,v.e,!0,null))}return A.y(q,C.E,C.h,C.l)}}
B.aDM.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cC($.cq(),new B.bNN(),y.v,m),m)
if(l==null)x=C.r2
else{m=e.G($.d1Z().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r2:m}m=A.a([],y.s)
for(w=B.dhP(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNP(this,d)
if(w)return A.k3(!1,!1,p,v,A.aJ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mM("P\xf4r teto",new B.bNO(this,d,e),!0,p))
w=A.aJ(o.b,!1)
u=A.aJ(n,!1)
s=y.p
q=A.a([A.aK(new A.a4h(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aE,new B.any(m,p)],s))
return A.k3(!1,!1,p,v,w+" de "+u,o.a,A.y(q,C.dK,C.h,C.J))}}
B.aDi.prototype={
u(d){var x,w,v=null,u=$.au,t=$.fj.cc(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.hK(r,A.aK(p==null?A.kN(A.ba(C.ia,u,v,v,v),C.t,!0):A.pq(p,144,new B.bKF(u),!1,C.bD,A.wy(),!1,v,v,v),48,48),C.bc)
p=A.i(q.b,1,C.a1,v,v,D.c3v,v,v)
x=A.ba(C.ic,u,v,v,14)
w=q.d
q=w>0?q.gPx()+" \xb7 "+A.aJ(w,!1):q.gPx()
w=y.p
return new A.S(C.d0,A.aY(A.x(v,A.O(A.a([r,C.af,A.a5(A.y(A.a([p,C.j7,A.O(A.a([x,C.dY,new A.di(1,C.ba,A.i(q,1,C.a1,v,v,A.aI(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bn,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.ba(C.ie,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.J(t,v,v,s,v,v,C.x),v,v,v,C.eg,v,v,v),new B.bKG(d),v),v)}}
B.aGq.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JP(A.a([new A.hi("+ Nova despesa",this.f,!0,j)],y.p),C.eS,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aB2
x=new B.bXy(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+B.ddh(m)
v.push(new A.tf(new A.ch(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bXu(d,e,s,q),A.HW(m)===C.f6,j))
continue}p=r?new B.bXv(d):new B.bXw(x,s)
v.push(new B.XF(s,p,r||s.w?j:new B.bXx(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XF&&v[k-1] instanceof B.XF)u.push(C.iL)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAJ)
return A.y(i,C.E,C.h,C.l)}}
B.XF.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aJ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.ddh(w))
v=C.e.a2(v," \xb7 ")
if(u)u=D.aGT
else{u=this.e
u=u!=null?new A.mM("Marcar pago",u,!0,null):D.aH_}return A.k3(!1,!1,null,this.d,v,x.c,u)}}
B.aCp.prototype={}
B.NW.prototype={
R(){var x=$.aa()
return new B.abx(new A.aF(C.ak,x),new A.aF(C.ak,x))}}
B.abx.prototype={
ad(){var x=this
x.aq()
x.d.an(0,new B.bIm(x))
x.e.an(0,new B.bIn(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
gahA(){var x=C.f.B(this.e.a.a)
x=A.aX(x," ","")
return A.eV(A.aX(x,",","."))},
aSn(){var x,w,v,u,t=this,s=t.gahA()
t.p(new B.bI9(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.al(w,!1)
v=t.w
u=v?null:t.f
w.ah(new B.aCp(x,s,u,t.r,v))},
arZ(d,e,f,g,h){var x=null,w=h?C.fp:x,v=y.p,u=A.a5(A.y(A.a([A.i(d,x,x,x,x,C.a9,x,x),C.aU,A.i(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.bq:x,s=f?x:A.bH(C.kv,1.5),r=f?S.vo:x
return A.bj(x,!0,x,A.cp(C.bu,A.x(x,A.O(A.a([u,A.x(x,r,C.r,x,x,new A.J(t,x,s,x,x,x,C.ap),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.cL,new A.J(x,x,w,x,x,x,C.x),x,x,x,C.hu,x,x,x),C.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aD),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
biw(d,e,f,g){return this.arZ(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahA()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bIj()
t=y.w
s=A.aT(d,k,t).w
r=y.p
q=A.a([D.c7K],r)
q.push(A.i(l.a.c,k,k,k,k,C.L,k,k))
q=A.O(A.a([A.a5(A.y(q,C.G,C.h,C.l),1),A.bj(k,!0,k,A.cp(k,A.x(k,C.hC,C.r,k,k,C.bV,k,44,k,k,k,k,44),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bIe(d),k,k,k,k,k,k,!1,C.aD),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c8P,A.O(A.a([V.d6o(A.cs(k,C.a6,!1,k,!0,C.y,k,A.cv(),l.e,k,k,k,k,k,2,D.aEV,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.fL,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aaj,!0,C.dC,k,C.b0,k,k,k,k)),C.bj,D.c8d],r),C.ed,C.bR,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cZ9(v)+" no teto":"Passa o teto em "+B.cZ9(-v)
o.push(A.i(m,k,k,k,k,A.aI(k,k,n?C.W:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c7q)
p=A.x(k,A.y(o,C.v,C.h,C.l),C.r,k,k,new A.J(C.a3,k,k,p,k,k,C.x),k,k,k,C.bo,k,k,k)
o=A.i("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bH(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d0,o,k),A.x(C.bb,A.cs(k,C.a6,!1,k,!0,C.y,k,A.cv(),x,k,k,k,k,k,2,D.aEA,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fj,!0,C.au,k,C.hb,k,k,k,k),C.r,k,k,new A.J(C.a3,k,m,n,k,k,C.x),k,52,k,C.fs,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bLf)
n.push(C.a_)
n.push(new U.a1t(l.r,new B.bIf(l),k))
n.push(C.a_)
n.push(new A.S(C.d0,A.i("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.biw("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bIg(l)),l.arZ("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bIh(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aE(p)))
m=l.f
m.toString
m=A.p(w.$1(A.aw(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aM(w)}o.push(A.bj(k,!0,k,A.cp(C.bu,A.aK(A.O(A.a([D.azt,A.i(w,k,k,k,k,C.cc,k,k),C.dY,C.jV],r),C.v,C.h,C.l,0,k),56,k),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bIi(l,d),k,k,k,k,k,k,!1,C.aD),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.x(k,A.y(o,C.v,C.h,C.l),C.r,k,k,new A.J(C.a3,k,k,x,k,k,C.x),k,k,k,C.cs,k,k,k))
n.push(C.a_)
n.push(D.cdi)
x=A.dS(A.y(n,C.E,C.h,C.l),C.y,k,C.eh,k,C.av)
t=A.aT(d,C.b5,t).w
w=A.cd(u?C.z:C.z.cc(0.35),k,k,C.t,k,k,C.ab,k,k,C.eJ)
return new A.S(new A.a4(0,0,0,s.f.d),A.y(A.a([new A.S(C.jG,q,k),new A.di(1,C.ba,x,k),new A.S(new A.a4(20,16,20,20+t.r.d),A.aK(new A.am(A.bD(A.i(u?"Guardar \xb7 "+B.cZ9(j):"Guardar",k,k,k,k,k,k,k),l.gaSm(),w),k),52,k),k)],r),C.E,C.h,C.J),k)}}
B.Xi.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CH(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eL(new A.a6(j,new B.bNR(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.am7(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNS(l),w),w.i("w.E"))
C.e.ct(v,new B.bNT())
j=y.T
u=e.G(A.cC($.cq(),new B.bNU(),y.v,j),j)
t=B.dhP(l.e.c)
if(u==null)s=I.Fk
else{j=e.G($.aW3().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fk
j=J.db(j,new B.bNV(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aT(d,k,y.w).w
w=A.bO(A.x(k,k,C.r,k,k,new A.J(C.bH,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.i(x.a,k,k,k,k,A.ay(d).ok.r,k,k)
q=A.a5(new B.ai4("Gasto",A.aJ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aA,A.O(A.a([q,C.ae,A.a5(A.aY(new B.ai4("Teto \xb7 tocar para mudar",p===0?"Definir":A.aJ(p,!1),k),new B.bNW(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bi,A.i("Contratado na app",k,k,k,k,A.ay(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.G)(s),++n)w.push(new B.aDi(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.i("Despesas",k,k,k,k,A.ay(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKE)
else for(n=0;n<v.length;v.length===w||(0,A.G)(v),++n){m=v[n]
r=A.i(m.c,k,k,k,k,C.iv,k,k)
q=m.r
q=q==null?k:A.i("At\xe9 "+C.f.aT(C.j.k(A.aE(q)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(q)),2,"0")+"/"+A.aM(q),k,k,k,k,k,k,k)
p.push(A.jo(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.i(A.aJ(m.f,!1),k,k,k,k,D.c5A,k,k),C.ac,new P.Dg(m.w,new B.bNX(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J4,k)],o),C.v,C.h,C.J,0,k),k))}return A.bB(!0,new A.ec(new A.aR(0,1/0,0,j.a.b*0.8),A.d6(p,k,L.CR,k,k,!1,!0),k),k,C.Z,!0)}}
B.ai4.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.y(A.a([A.i(this.c,x,x,x,x,C.be,x,x),C.ar,A.i(this.d,x,x,x,x,M.aa6,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.J(C.a3,x,x,w,x,x,C.x),x,x,x,C.cT,x,x,x)}}
B.aCu.prototype={
ba(d,e){var x,w=y.t,v=e.G(A.cC($.cq(),new B.bJj(),y.v,w),w),u=e.G($.d1Y(),y.o)
w=e.G($.uG(),y.l)
x=w.gv(w)
return A.hE(u,new B.bJk(this,new B.bJp(x==null?C.fd:x),v),new B.bJl(e),new B.bJm(),!1,!0,!1)}}
B.any.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
t=$.fj
s=new A.b5(999,999)
r=new A.be(o.cc(0.25),1,C.ag,-1)
q=A.ba(C.ic,o,p,p,13)
t=A.x(p,A.O(A.a([q,C.rM,new A.di(1,C.ba,A.i(u,1,C.a1,p,p,new A.Q(!0,o,p,p,p,p,14,C.d2,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.ba(C.ie,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afo,new A.J(t,p,new A.dN(r,r,r,r),new A.cz(s,s,s,s),p,p,C.x),p,p,p,D.au1,p,p,p)
m.push(new A.js(new A.n5(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hz(t,new B.aYL(d),p,p),p))}return A.e4(C.bf,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["C(i6)","T(T,i6)","v(i6,i6)","T(T,DC)","zT()","F<~>(c?)","F<~>()","NW(N)","C(DC)","F<lU>()","Xi(N)","~(i6)","~()","C(np)","C(rP)","i6(a3<c,@>)","DN()"])
B.cHM.prototype={
$1(d){return this.aEN(d)},
aEN(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.tZ(a1)
u=y.t
t=a1.G(A.cC($.cq(),new B.cHI(),y.v,u),u)
u=J.a7(t)
if(u.gY(t)){v=D.bzd
x=1
break}s=A.a([],y.s)
for(r=u.gX(t);r.q();)s.push(r.gE(r).a)
r=$.P()
q=r.b
q===$&&A.b()
p=y.G
o=q.P("budgets").al(0,"wedding_id, total").da("wedding_id",s).b3(new B.cHJ(),p)
n=r.b.P("budget_categories").al(0,"wedding_id, amount").da("wedding_id",s).b3(new B.cHK(),p)
m=r.b.P("expenses").al(0,"wedding_id, amount, paid").da("wedding_id",s).b3(new B.cHL(),p)
p=y.N
s=y.i
r=A.E(p,s)
d=q=y.P
a0=J
x=3
return A.d(o,$async$$1)
case 3:d,l=a0.bf(a3,q),k=A.u(l),l=new A.af(l,l.gA(l),k.i("af<V.E>")),k=k.i("V.E")
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
case 6:l=d.bf(a3,q),k=A.u(l),l=new A.af(l,l.gA(l),k.i("af<V.E>")),k=k.i("V.E")
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
case 9:s=d.bf(a3,q),q=A.u(s),s=new A.af(s,s.gA(s),q.i("af<V.E>")),q=q.i("V.E")
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
s.push(new A.aN1([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1304}
B.cHI.prototype={
$1(d){return d.c},
$S:127}
B.cHJ.prototype={
$1(d){return d},
$S:29}
B.cHK.prototype={
$1(d){return d},
$S:29}
B.cHL.prototype={
$1(d){return d},
$S:29}
B.b3O.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5s.prototype={
$1(d){return d.w},
$S:z+0}
B.b5t.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5p.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.b5q.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b5r.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bLk.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bLl.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bLC.prototype={
$0(){return this.a.gS().a_(0,$.CH().gaX(),y.x).Zm(0).e5(new B.bLB())},
$S:1}
B.bLB.prototype={
$1(d){},
$S:11}
B.bLg.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLi.prototype={
$1(d){return A.CD(C.k.a8(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bLj(),null)+" \u20ac"},
$S:108}
B.bLj.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bLh.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a2(v," \xb7 ")
u=x&&u>0?u:null
return new B.NW(v,u,w.d,null)},
$S:z+7}
B.bLq.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bLr.prototype={
$1(d){return d.x!==C.e9&&d.b===this.a},
$S:53}
B.bLA.prototype={
$2(d,e){return A.ji(d,this.a.l9(e))},
$1(d){return this.$2(d,null)},
$S:1307}
B.bLs.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLt.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bLu.prototype={
$0(){return this.a.It(this.b.a)},
$S:0}
B.bLv.prototype={
$0(){var x=this.a
return x.p(new B.bLp(x))},
$S:0}
B.bLp.prototype={
$0(){return this.a.w=D.J2},
$S:0}
B.bLw.prototype={
$0(){var x=this.a
return x.p(new B.bLo(x))},
$S:0}
B.bLo.prototype={
$0(){return this.a.w=D.abB},
$S:0}
B.bLx.prototype={
$0(){var x=this.a
return x.p(new B.bLn(x))},
$S:0}
B.bLn.prototype={
$0(){return this.a.w=D.abA},
$S:0}
B.bLy.prototype={
$0(){var x=this.a
return x.p(new B.bLm(x))},
$S:0}
B.bLm.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bLz.prototype={
$0(){return B.Cw(this.a.gS().a_(0,$.cq(),y.v).b.a)},
$S:z+9}
B.cE4.prototype={
$1(d){var x=null,w=this.b
return new A.eU(A.i(this.a,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.cv(),w,x,x,x,x,x,2,D.aF8,C.U,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.fL,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b0,x,x,x,x),A.a([new A.am(A.cJ(C.cZ,x,x,new B.cE2(d),x,x),x),new A.am(A.bD(C.dw,new B.cE3(d,w),x),x)],y.p),x)},
$S:19}
B.cE2.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.cE3.prototype={
$0(){var x=A.al(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aX(w," ","")
return x.ah(A.eV(A.aX(w,",",".")))},
$S:0}
B.cEe.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bNN.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNP.prototype={
$0(){return A.bQ(null,new B.bNQ(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNQ.prototype={
$1(d){return new B.Xi(this.a.e.a,null)},
$S:z+10}
B.bNO.prototype={
$0(){return B.akH(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKG.prototype={
$0(){var x=this.a
A.al(x,!1).bj()
A.ae(x).aj("/bookings",null,y.X)},
$S:0}
B.bKF.prototype={
$3(d,e,f){return A.kN(A.ba(C.ia,this.a,null,null,null),C.t,!0)},
$S:102}
B.bXy.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.am7().gaX(),y.h).Op(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a0(A.bY(v,v,v,v,v,C.y,v,A.i(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bXu.prototype={
$0(){var x=this
return A.rH(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bXv.prototype={
$0(){return A.ae(this.a).aj("/bookings",null,y.X)},
$S:0}
B.bXw.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bXx.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bIm.prototype={
$0(){return this.a.p(new B.bIl())},
$S:0}
B.bIl.prototype={
$0(){},
$S:0}
B.bIn.prototype={
$0(){return this.a.p(new B.bIk())},
$S:0}
B.bIk.prototype={
$0(){},
$S:0}
B.bI8.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bI9.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bIj.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:40}
B.bIe.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.bIf.prototype={
$1(d){var x=this.a
return x.p(new B.bId(x,d))},
$S:139}
B.bId.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bIg.prototype={
$0(){var x=this.a
return x.p(new B.bIc(x))},
$S:0}
B.bIc.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bIh.prototype={
$0(){var x=this.a
return x.p(new B.bIb(x))},
$S:0}
B.bIb.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bIi.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ab(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cO6(v.b,A.bZ(A.aM(t)-1,1,1,0,0),r,A.bZ(A.aM(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bIa(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bIa.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNR.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNS.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNT.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bNU.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNV.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bNW.prototype={
$0(){var x=this.c
return B.akH(this.a,this.b,x.a,x.d)},
$S:0}
B.bNX.prototype={
$1(d){return this.a.a_(0,$.am7().gaX(),y.h).Op(this.b.a)},
$S:150}
B.bJj.prototype={
$1(d){return d.c},
$S:127}
B.bJp.prototype={
$2(d,e){return A.ji(d,this.a.l9(e))},
$S:43}
B.bJm.prototype={
$0(){return D.bLh},
$S:89}
B.bJl.prototype={
$2(d,e){return A.JP(A.a([new A.hi("Tentar outra vez",new B.bJc(this.a),!1,null)],y.p),C.eS,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1308}
B.bJc.prototype={
$0(){return this.a.ai($.d1Y())},
$S:0}
B.bJk.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bJn(g),e=new B.bJo(g,this.b),d=J.c9(a4),a0=d.cV(a4,0,new B.bJd()),a1=d.cV(a4,0,new B.bJe(f)),a2=d.cV(a4,0,new B.bJf(e)),a3=y.N
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
u=A.a([new A.DY(A.a([new A.lb("Gasto",A.aJ(a1,!1),h,i),new A.lb("Por pagar",A.aJ(a2,!1),h,i)],y.Q),i)],v)
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
n=A.i(n==null?"Evento":n,1,C.a1,i,i,C.a9,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aJ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aJ(j[3]+e.$1(j[0]),!1))}n=A.y(A.a([n,C.aU,A.i(C.e.a2(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.hz(A.x(i,A.O(A.a([new A.bK(1,C.at,n,i),C.ae,A.i(A.aJ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.bj,C.jV],v),C.v,C.h,C.l,0,i),C.r,C.as,C.cL,i,i,i,i,C.ck,i,i,i),new B.bJg(o,g),i,i))
C.e.n(w,l)}return A.y(A.a([x,new A.c2("N\xfameros",i,u,16,i),new A.c2("Por evento \xb7 "+d,i,w,16,i),D.aAL],v),C.E,C.h,C.l)},
$S:1309}
B.bJn.prototype={
$1(d){return J.db(this.a.e,new B.bJa(d)).cV(0,0,new B.bJb())},
$S:192}
B.bJa.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:53}
B.bJb.prototype={
$2(d,e){return d+e.w},
$S:459}
B.bJo.prototype={
$1(d){return J.db(this.a.e,new B.bJh(d)).cV(0,0,new B.bJi(this.b))},
$S:192}
B.bJh.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:53}
B.bJi.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:459}
B.bJd.prototype={
$2(d,e){return d+e.a[2]},
$S:241}
B.bJe.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:241}
B.bJf.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:241}
B.bJg.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYL.prototype={
$0(){return A.ae(this.a).aj("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKH","d_0",15)
w(B,"dKG","drv",16)
v(B.DN.prototype,"giF","d1",4)
var t
u(t=B.abT.prototype,"gape","Ty",5)
v(t,"gaR8","Q_",6)
v(B.abx.prototype,"gaSm","aSn",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cHM,B.cHI,B.cHJ,B.cHK,B.cHL,B.b5s,B.b5t,B.b5p,B.b5r,B.bLB,B.bLi,B.bLj,B.bLh,B.bLq,B.bLr,B.bLA,B.bLt,B.cE4,B.bNN,B.bNQ,B.bKF,B.bXy,B.bI8,B.bIj,B.bIf,B.bNR,B.bNS,B.bNU,B.bNV,B.bNX,B.bJj,B.bJk,B.bJn,B.bJa,B.bJo,B.bJh])
x(A.M,[B.DC,B.b3N,B.zT,B.Mt,B.a7X,B.aCp])
x(A.cK,[B.b3O,B.bLg,B.bLs,B.cEe,B.bNT,B.bJp,B.bJl,B.bJb,B.bJi,B.bJd,B.bJe,B.bJf])
w(B.DN,A.fb)
x(A.bL,[B.b5q,B.bLk,B.bLl,B.bLC,B.bLu,B.bLv,B.bLp,B.bLw,B.bLo,B.bLx,B.bLn,B.bLy,B.bLm,B.bLz,B.cE2,B.cE3,B.bNP,B.bNO,B.bKG,B.bXu,B.bXv,B.bXw,B.bXx,B.bIm,B.bIl,B.bIn,B.bIk,B.bI9,B.bIe,B.bId,B.bIg,B.bIc,B.bIh,B.bIb,B.bIi,B.bIa,B.bNW,B.bJm,B.bJc,B.bJg,B.aYL])
w(B.abS,A.fg)
w(B.D5,A.dC)
w(B.abT,A.dw)
x(A.L,[B.aPN,B.aDL,B.aDi,B.XF,B.ai4,B.any])
x(A.ew,[B.aDM,B.aGq,B.Xi,B.aCu])
w(B.NW,A.H)
w(B.abx,A.a_)})()
A.br(b.typeUniverse,JSON.parse('{"DN":{"fb":["zT"]},"NW":{"H":[],"e":[],"f":[]},"Xi":{"H":[],"e":[],"f":[]},"D5":{"H":[],"e":[],"f":[]},"abT":{"a_":["D5"]},"aPN":{"L":[],"e":[],"f":[]},"aDL":{"L":[],"e":[],"f":[]},"aDM":{"H":[],"e":[],"f":[]},"aDi":{"L":[],"e":[],"f":[]},"aGq":{"H":[],"e":[],"f":[]},"XF":{"L":[],"e":[],"f":[]},"abx":{"a_":["NW"]},"ai4":{"L":[],"e":[],"f":[]},"aCu":{"H":[],"e":[],"f":[]},"any":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{l:x("ax<f9>"),k:x("ax<t<rP>>"),u:x("ax<t<fK>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("ax<a3<c,t<c>>>"),x:x("zw"),b:x("uT"),d:x("rU"),Z:x("ok"),v:x("ed"),_:x("i6"),h:x("DN"),g:x("zT"),D:x("r<DC>"),r:x("r<i6>"),Q:x("r<lb>"),F:x("r<ek>"),Y:x("r<a3<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7X>"),c:x("r<Mt>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fK>"),t:x("t<fl>"),G:x("t<a3<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a3<c,@>"),w:x("du"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lU"),N:x("c"),B:x("aCp"),q:x("dl"),i:x("T"),z:x("@"),S:x("v"),X:x("M?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afo=new A.aR(0,1/0,32,1/0)
D.au1=new A.a4(8,5,6,5)
D.cgX=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azt=new A.bK(1,C.at,D.cgX,null)
D.byV=x([],y.r)
D.azJ=new B.zT(!1,D.byV)
D.aAJ=new A.h6("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAL=new A.h6("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aB2=new A.h6("Sem pagamentos nesta vista.",8,null)
D.aEA=new A.dE(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bk,null,null,C.bk,C.bk,!0,null,null,null,null)
D.aEV=new A.dE(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bk,null,null,C.bk,C.bk,!0,null,null,null,null)
D.aF8=new A.dE(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGT=new A.dU("Pago",C.cU,null)
D.aH_=new A.dU("Por pagar",C.hE,null)
D.aH7=new A.lg("Or\xe7amento","Todos os teus eventos",null)
D.aHd=new A.lg("Or\xe7amento",null,null)
D.by8=x(["catering"],y.s)
D.bzc=x([],y.D)
D.bzd=x([],y.n)
D.bzC=x(["flowers_decor"],y.s)
D.bB7=x(["music_dj","bands_musicians"],y.s)
D.bBH=x(["photography"],y.s)
D.bCV=x(["venue"],y.s)
D.aEp=new A.vh("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kE,null)
D.bKE=new A.S(C.fW,D.aEp,null)
D.c9c=new A.D("A despesa precisa de um t\xedtulo",null,C.mo,null,null,null,null,null,null,null)
D.bLf=new A.S(T.Nz,D.c9c,null)
D.bLh=new A.S(O.uO,C.f1,null)
D.bXM=new A.vX(!1,6,!0,null)
D.c3v=new A.Q(!0,C.z,null,null,null,null,14,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5A=new A.Q(!0,null,null,null,null,null,null,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaj=new A.Q(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7q=new A.D("Indica um valor v\xe1lido",null,C.mo,null,null,null,null,null,null,null)
D.c7K=new A.D("Nova despesa",null,C.bh,null,null,null,null,null,null,null)
D.c8d=new A.D("\u20ac",null,D.aaj,null,null,null,null,null,null,null)
D.c8P=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.cdi=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null)
D.J2=new B.abS(0,"all")
D.abA=new B.abS(1,"paid")
D.abB=new B.abS(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dY7","d1Y",()=>C.bK.$1$1(new B.cHM(),y.m))
x($,"dYY","am7",()=>A.mW(B.dKG(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["dhnWLgBFLgxzr6cKykKl4u5BwBM="]=a.current})($__dart_deferred_initializers__);