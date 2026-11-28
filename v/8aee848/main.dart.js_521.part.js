((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cHU:function cHU(){},cHQ:function cHQ(){},cHR:function cHR(){},cHS:function cHS(){},cHT:function cHT(){},
dJZ(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DD(x[v]))
return new B.b3P(d.b,u)},
DD:function DD(d){this.a=d},
b3P:function b3P(d,e){this.a=d
this.b=e},
b3Q:function b3Q(){},
d_8(d){var x="category",w="due_date",v=J.a7(d),u=A.Y(v.h(d,"id")),t=A.Y(v.h(d,"wedding_id")),s=A.Y(v.h(d,"title")),r=B.dGc(B.deV(A.B(v.h(d,x)))),q=B.deV(A.B(v.h(d,x))),p=A.dv(v.h(d,"amount")),o=v.h(d,w)==null?null:A.dc(A.Y(v.h(d,w)))
v=A.dW(v.h(d,"paid"))
return new G.i6(u,t,s,r,q,p,o,v===!0)},
deV(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dGc(d){var x
A:{if("venue"===d){x=E.xR
break A}if("catering"===d){x=E.xN
break A}if("photography"===d){x=E.xO
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xP
break A}if("flowers_decor"===d){x=E.xQ
break A}x=null
break A}return x},
drE(){return new B.DO()},
zU:function zU(d,e){this.a=d
this.b=e},
b5u:function b5u(){},
b5v:function b5v(){},
DO:function DO(){this.b=this.x=null},
b5r:function b5r(){},
b5s:function b5s(d,e){this.a=d
this.b=e},
b5t:function b5t(d){this.a=d},
Cx(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cx=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akQ(),$async$Cx)
case 3:u=$.P()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").al(0,"partner_name_1, partner_name_2").V("id",d).cj(),$async$Cx)
case 4:s=f
x=5
return A.d(u.b.P("bookings").al(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cK(0,"event_date",!1),$async$Cx)
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
return A.d(t.P("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").da("booking_id",u).tv(0,"created_at"),$async$Cx)
case 9:q=f
case 7:u=$.P()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").al(0,"title, category, amount, due_date, paid").V("wedding_id",d).tv(0,"due_date"),$async$Cx)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").al(0,"name, amount").V("wedding_id",d).tv(0,"position"),$async$Cx)
case 11:o=f
x=12
return A.d(u.b.P("budgets").al(0,"total").V("wedding_id",d).cj(),$async$Cx)
case 12:n=f
m=F.cZU(F.cEO(s),"Gastos e parceiros",r,q,!1)
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
else{g=A.d3(A.p(g))
g=g==null?null:g.dH()}u.push(new B.Mv(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ao(o);l.q();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eV(A.p(k))
if(k==null)k=0}t.push(new B.a8_(i,k))}l=n==null?null:F.d_r(J.h(n,"total"))
v=new F.lU(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cx,w)},
Mv:function Mv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8_:function a8_(d,e){this.a=d
this.b=e},
doX(){return new B.D6(null)},
aUd(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUd=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.h1(!0,new B.cEc(e,new A.aF(new A.bE(u,C.aF,C.ax),$.aa())),d,y.i),$async$aUd)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUd,w)},
akJ(d,e,f,g){return B.dG_(d,e,f,g)},
dG_(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akJ=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUd(d,"Teto para "+f,g),$async$akJ)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.CI().gaX(),y.x).Os(f,r),$async$akJ)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a0(H.HT)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akJ,w)},
dcY(d){var x=A.U(d,y._)
C.e.ct(x,new B.cEm())
return x},
ddr(d){var x=C.f.aT(C.j.k(A.aE(d)),2,"0"),w=C.f.aT(C.j.k(A.aw(d)),2,"0"),v=A.aM(d)===A.aM(new A.ab(Date.now(),0,!1))?"":"/"+A.aM(d)
return x+"/"+w+v},
cZh(d){var x,w,v,u
if(d===C.k.hC(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aY(w,".",",")}v=x.split(",")
u=A.CE(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bIg(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abV:function abV(d,e){this.a=d
this.b=e},
D6:function D6(d){this.a=d},
abW:function abW(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bLs:function bLs(d){this.a=d},
bLt:function bLt(d){this.a=d},
bLK:function bLK(d){this.a=d},
bLJ:function bLJ(){},
bLo:function bLo(){},
bLq:function bLq(){},
bLr:function bLr(){},
bLp:function bLp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLy:function bLy(){},
bLz:function bLz(d){this.a=d},
bLI:function bLI(d){this.a=d},
bLA:function bLA(){},
bLB:function bLB(){},
bLC:function bLC(d,e){this.a=d
this.b=e},
bLD:function bLD(d){this.a=d},
bLx:function bLx(d){this.a=d},
bLE:function bLE(d){this.a=d},
bLw:function bLw(d){this.a=d},
bLF:function bLF(d){this.a=d},
bLv:function bLv(d){this.a=d},
bLG:function bLG(d){this.a=d},
bLu:function bLu(d){this.a=d},
bLH:function bLH(d){this.a=d},
cEc:function cEc(d,e){this.a=d
this.b=e},
cEa:function cEa(d){this.a=d},
cEb:function cEb(d,e){this.a=d
this.b=e},
cEm:function cEm(){},
aPP:function aPP(d,e,f){this.c=d
this.d=e
this.a=f},
aDN:function aDN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDO:function aDO(d,e){this.e=d
this.a=e},
bNV:function bNV(){},
bNX:function bNX(d,e){this.a=d
this.b=e},
bNY:function bNY(d){this.a=d},
bNW:function bNW(d,e,f){this.a=d
this.b=e
this.c=f},
aDk:function aDk(d,e){this.c=d
this.a=e},
bKO:function bKO(d){this.a=d},
bKN:function bKN(d){this.a=d},
aGs:function aGs(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bXG:function bXG(d,e){this.a=d
this.b=e},
bXC:function bXC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXD:function bXD(d){this.a=d},
bXE:function bXE(d,e){this.a=d
this.b=e},
bXF:function bXF(d,e){this.a=d
this.b=e},
XG:function XG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCr:function aCr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NY:function NY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abA:function abA(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bIu:function bIu(d){this.a=d},
bIt:function bIt(){},
bIv:function bIv(d){this.a=d},
bIs:function bIs(){},
bIg:function bIg(){},
bIh:function bIh(d){this.a=d},
bIr:function bIr(){},
bIm:function bIm(d){this.a=d},
bIn:function bIn(d){this.a=d},
bIl:function bIl(d,e){this.a=d
this.b=e},
bIo:function bIo(d){this.a=d},
bIk:function bIk(d){this.a=d},
bIp:function bIp(d){this.a=d},
bIj:function bIj(d){this.a=d},
bIq:function bIq(d,e){this.a=d
this.b=e},
bIi:function bIi(d,e){this.a=d
this.b=e},
Xj:function Xj(d,e){this.e=d
this.a=e},
bNZ:function bNZ(d){this.a=d},
bO_:function bO_(d){this.a=d},
bO0:function bO0(){},
bO1:function bO1(){},
bO2:function bO2(d){this.a=d},
bO3:function bO3(d,e,f){this.a=d
this.b=e
this.c=f},
bO4:function bO4(d,e){this.a=d
this.b=e},
ai6:function ai6(d,e,f){this.c=d
this.d=e
this.a=f},
aCw:function aCw(d,e,f){this.e=d
this.f=e
this.a=f},
bJr:function bJr(){},
bJx:function bJx(d){this.a=d},
bJu:function bJu(){},
bJt:function bJt(d){this.a=d},
bJk:function bJk(d){this.a=d},
bJs:function bJs(d,e,f){this.a=d
this.b=e
this.c=f},
bJv:function bJv(d){this.a=d},
bJi:function bJi(d){this.a=d},
bJj:function bJj(){},
bJw:function bJw(d,e){this.a=d
this.b=e},
bJp:function bJp(d){this.a=d},
bJq:function bJq(d){this.a=d},
bJl:function bJl(){},
bJm:function bJm(d){this.a=d},
bJn:function bJn(d){this.a=d},
bJo:function bJo(d,e){this.a=d
this.b=e},
anA:function anA(d,e){this.c=d
this.a=e},
aYN:function aYN(d){this.a=d},
dhY(d){var x
switch(d){case E.xR:x=D.bCX
break
case E.xN:x=D.bya
break
case E.xO:x=D.bBJ
break
case E.xP:x=D.bB9
break
case E.xQ:x=D.bzE
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
B.DD.prototype={
gap(d){return this.a.a}}
B.b3P.prototype={
gpZ(){return C.e.cV(this.b,0,new B.b3Q())},
gaBu(){var x=this.a
return x===0?0:C.k.af(this.gpZ()/x,0,1)}}
B.zU.prototype={
gbyS(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5u(),w),w.i("w.E"))
return x},
gbzc(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5v(),w),w.i("w.E"))
return x},
awE(d,e){var x=e==null?this.a:e
return new B.zU(x,d==null?this.b:d)},
ik(d){return this.awE(null,d)},
awm(d){return this.awE(d,null)}}
B.DO.prototype={
d1(){var x=y.T,w=this.x=A.eQ(this).G(A.cC($.cq(),new B.b5r(),y.v,x),x)
if(w!=null)A.j8(new B.b5s(this,w),y.H)
return D.azM},
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
case 2:v.sa1(0,new t.zU(s,r.d7(g,B.dKR(),y._).bx(0)))
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
u.push(B.d_8(s))
v.sa1(0,r.awm(u))
return A.l(null,w)}})
return A.m($async$Vn,w)},
Op(d){return this.bBL(d)},
bBL(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Op=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lc(v.ga1(0).b,new B.b5t(d))
m=$.P().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bh(0,A.R(["paid",!n.w,"updated_at",new A.ab(Date.now(),0,!1).cg()],u,u)).V("id",d).cl(0).e9(0),$async$Op)
case 2:t=l.d_8(f)
u=v.ga1(0)
m=A.a([],y.r)
for(s=v.ga1(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa1(0,u.awm(m))
return A.l(null,w)}})
return A.m($async$Op,w)}}
B.Mv.prototype={}
B.a8_.prototype={
gap(d){return this.a}}
B.abV.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D6.prototype={
R(){return new B.abW(D.J2)}}
B.abW.prototype={
Ty(d){return this.bc5(d)},
bc5(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Ty=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bLs(u))
x=1
break}u.p(new B.bLt(u))
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
A.j8(new B.bLK(this),y.H)},
Q_(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Q_=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.am9()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.CI(),y.b).b
s=t==null?null:t.b
r=C.e.cV(o.a_(0,n,y.g).b,0,new B.bLo())
t=o.a_(0,$.cq(),y.v).b
q=t==null?null:t.gcz()
t=u.c
t.toString
x=3
return A.d(A.bQ(null,new B.bLp(q,s,new B.bLq(),r),!1,t,!0,!0,null,y.B),$async$Q_)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vn(new G.i6("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Q_,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CI(),y.b),a3=a1.G($.I3(),y.d),a4=a1.G($.am9(),y.g),a5=a2.b,a6=a5==null?e:B.dJZ(a5,a3.b)
a5=A.iQ(a1.G($.j4(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iV
a5=y.T
w=a1.G(A.cC($.cq(),new B.bLy(),y.v,a5),a5)
if(f.y){a1=f.gape()
return A.cP(e,C.cP,A.nK(C.f_,40,A.a([C.fx,D.aH9,K.cWK(a1,e),new B.aCw(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.db(x,new B.bLz(w))
a1=a1.G($.uH(),y.l)
u=a1.gv(a1)
t=new B.bLI(u==null?C.fd:u)
a1=y._
a5=A.U(a4.gbyS(),a1)
for(s=v.a,r=J.ca(s),q=r.gX(s),p=v.b,o=v.$ti.i("fA<1>"),n=new A.fA(q,p,o);n.q();){m=q.gE(q)
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
n.push(new G.i6("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcY(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcY(q)
break
default:a1=e}h=C.e.cV(q,0,new B.bLA())
s=a6==null
if(s)g=D.bze
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bLB(),p),p.i("w.E"))}if(s)a1=D.bXP
else{s=f.gaR8()
r=y.p
p=A.a([new A.pu(A.a([new A.qO(s,"Nova despesa",e)],r),e),D.aHf,K.cWK(f.gape(),w),new B.aPP(a6,new B.bLC(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aJ(a6.gpZ(),!1)
n=a5.length
m=n===1?d:a0
l=A.aJ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c3("N\xfameros",e,A.a([new A.DZ(A.a([new A.lc("Gasto",o,""+n+" "+m,e),new A.lc("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.mb(A.a([new A.ek("Todos",l===D.J2,n+m,new B.bLD(f),e),new A.ek("Pendentes",l===D.abE,m,new B.bLE(f),e),new A.ek("Pagos",l===D.abD,n,new B.bLF(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aGs(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c3("Pagamentos",e,o,16,e))
a1=A.a([new A.h6(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDN(g,f.x,new B.bLG(f),e))
p.push(new A.c3("Categorias",e,a1,16,e))
p.push(new A.c3("Exportar",e,A.a([new F.DP("Gastos e parceiros",!1,new B.bLH(f),e)],r),16,e))
a1=A.nK(C.f_,40,p,e,!0,!1)}return A.cP(e,C.cP,a1,!0,e)},
It(d){return this.aY5(d)},
aY5(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$It=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUd(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$It)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a_(0,$.CI().gaX(),y.x).a_5(r),$async$It)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a0(H.HT)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$It,w)}}
B.aPP.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpZ()>0?"Gastos "+A.aJ(t.gpZ(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vn(new A.hj("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hG,0,"por definir","\u2014")}x=C.k.aN(t.gaBu()*100)
w=s-t.gpZ()<0?"Acima do teto":"Ainda tens"
v=A.aJ(Math.abs(s-t.gpZ()),!1)
s=A.aJ(s,!1)
u=t.gaBu()
return A.aX(A.vn(H.a1I,"Gastos "+A.aJ(t.gpZ(),!1)+" \xb7 "+x+"% do teto",w,C.hG,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDN.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dz(s,0,A.et(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDO(r[w],null))
q=A.a([A.eR(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hj(u,v.e,!0,null))}return A.y(q,C.E,C.h,C.l)}}
B.aDO.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cC($.cq(),new B.bNV(),y.v,m),m)
if(l==null)x=C.r4
else{m=e.G($.d26().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r4:m}m=A.a([],y.s)
for(w=B.dhY(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNX(this,d)
if(w)return A.k3(!1,!1,p,v,A.aJ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mN("P\xf4r teto",new B.bNW(this,d,e),!0,p))
w=A.aJ(o.b,!1)
u=A.aJ(n,!1)
s=y.p
q=A.a([A.aK(new A.a4k(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aC,new B.anA(m,p)],s))
return A.k3(!1,!1,p,v,w+" de "+u,o.a,A.y(q,C.dJ,C.h,C.J))}}
B.aDk.prototype={
u(d){var x,w,v=null,u=$.au,t=$.f1.cc(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.hX(r,A.aK(p==null?A.kP(A.b9(C.ia,u,v,v,v),C.t,!0):A.pq(p,144,new B.bKN(u),!1,C.bD,A.wz(),!1,v,v,v),48,48),C.bd)
p=A.i(q.b,1,C.a1,v,v,D.c3z,v,v)
x=A.b9(C.ic,u,v,v,14)
w=q.d
q=w>0?q.gPx()+" \xb7 "+A.aJ(w,!1):q.gPx()
w=y.p
return new A.S(C.d0,A.aX(A.x(v,A.O(A.a([r,C.af,A.a5(A.y(A.a([p,C.j7,A.O(A.a([x,C.dY,new A.di(1,C.ba,A.i(q,1,C.a1,v,v,A.aH(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bn,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.u,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b9(C.ie,u,v,v,v)],w),C.u,C.h,C.l,0,v),C.r,v,v,new A.J(t,v,v,s,v,v,C.x),v,v,v,C.eg,v,v,v),new B.bKO(d),v),v)}}
B.aGs.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JR(A.a([new A.hj("+ Nova despesa",this.f,!0,j)],y.p),C.eS,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aB5
x=new B.bXG(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.H)(i),++t){s=i[t]
r=s.a
q=C.f.cY(r,":pay:")
r=C.f.aY(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gJ(r.split(" \xb7 "))
n=A.aJ(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.ddr(m)
v.push(new A.tf(new A.ch(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bXC(d,e,s,q),A.HX(m)===C.f6,j))
continue}p=r?new B.bXD(d):new B.bXE(x,s)
v.push(new B.XG(s,p,r||s.w?j:new B.bXF(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XG&&v[k-1] instanceof B.XG)u.push(C.iL)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAM)
return A.y(i,C.E,C.h,C.l)}}
B.XG.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aJ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.ddr(w))
v=C.e.a2(v," \xb7 ")
if(u)u=D.aGV
else{u=this.e
u=u!=null?new A.mN("Marcar pago",u,!0,null):D.aH1}return A.k3(!1,!1,null,this.d,v,x.c,u)}}
B.aCr.prototype={}
B.NY.prototype={
R(){var x=$.aa()
return new B.abA(new A.aF(C.ak,x),new A.aF(C.ak,x))}}
B.abA.prototype={
ad(){var x=this
x.aq()
x.d.an(0,new B.bIu(x))
x.e.an(0,new B.bIv(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
gahA(){var x=C.f.B(this.e.a.a)
x=A.aY(x," ","")
return A.eV(A.aY(x,",","."))},
aSn(){var x,w,v,u,t=this,s=t.gahA()
t.p(new B.bIh(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.al(w,!1)
v=t.w
u=v?null:t.f
w.ah(new B.aCr(x,s,u,t.r,v))},
arZ(d,e,f,g,h){var x=null,w=h?C.fp:x,v=y.p,u=A.a5(A.y(A.a([A.i(d,x,x,x,x,C.a9,x,x),C.aU,A.i(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.bq:x,s=f?x:A.bH(C.kv,1.5),r=f?S.vp:x
return A.bj(x,!0,x,A.cp(C.bu,A.x(x,A.O(A.a([u,A.x(x,r,C.r,x,x,new A.J(t,x,s,x,x,x,C.ap),x,24,x,x,x,x,24)],v),C.u,C.h,C.l,0,x),C.r,x,C.cL,new A.J(x,x,w,x,x,x,C.x),x,x,x,C.hu,x,x,x),C.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
biw(d,e,f,g){return this.arZ(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahA()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bIr()
t=y.w
s=A.aT(d,k,t).w
r=y.p
q=A.a([D.c7O],r)
q.push(A.i(l.a.c,k,k,k,k,C.L,k,k))
q=A.O(A.a([A.a5(A.y(q,C.G,C.h,C.l),1),A.bj(k,!0,k,A.cp(k,A.x(k,C.hC,C.r,k,k,C.bV,k,44,k,k,k,k,44),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bIm(d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.u,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c8T,A.O(A.a([V.d6y(A.cs(k,C.a6,!1,k,!0,C.y,k,A.cv(),l.e,k,k,k,k,k,2,D.aEX,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.fL,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aam,!0,C.dB,k,C.b0,k,k,k,k)),C.be,D.c8h],r),C.ed,C.bQ,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cZh(v)+" no teto":"Passa o teto em "+B.cZh(-v)
o.push(A.i(m,k,k,k,k,A.aH(k,k,n?C.W:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c7u)
p=A.x(k,A.y(o,C.u,C.h,C.l),C.r,k,k,new A.J(C.a3,k,k,p,k,k,C.x),k,k,k,C.bo,k,k,k)
o=A.i("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bH(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d0,o,k),A.x(C.bb,A.cs(k,C.a6,!1,k,!0,C.y,k,A.cv(),x,k,k,k,k,k,2,D.aEC,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fj,!0,C.au,k,C.hb,k,k,k,k),C.r,k,k,new A.J(C.a3,k,m,n,k,k,C.x),k,52,k,C.fs,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bLi)
n.push(C.a_)
n.push(new U.a1w(l.r,new B.bIn(l),k))
n.push(C.a_)
n.push(new A.S(C.d0,A.i("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.biw("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bIo(l)),l.arZ("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bIp(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aE(p)))
m=l.f
m.toString
m=A.p(w.$1(A.aw(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aM(w)}o.push(A.bj(k,!0,k,A.cp(C.bu,A.aK(A.O(A.a([D.azw,A.i(w,k,k,k,k,C.cc,k,k),C.dY,C.jV],r),C.u,C.h,C.l,0,k),56,k),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bIq(l,d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.x(k,A.y(o,C.u,C.h,C.l),C.r,k,k,new A.J(C.a3,k,k,x,k,k,C.x),k,k,k,C.cs,k,k,k))
n.push(C.a_)
n.push(D.cdm)
x=A.dS(A.y(n,C.E,C.h,C.l),C.y,k,C.eh,k,C.av)
t=A.aT(d,C.b5,t).w
w=A.ce(u?C.z:C.z.cc(0.35),k,k,C.t,k,k,C.ab,k,k,C.eJ)
return new A.S(new A.a4(0,0,0,s.f.d),A.y(A.a([new A.S(C.jG,q,k),new A.di(1,C.ba,x,k),new A.S(new A.a4(20,16,20,20+t.r.d),A.aK(new A.am(A.bD(A.i(u?"Guardar \xb7 "+B.cZh(j):"Guardar",k,k,k,k,k,k,k),l.gaSm(),w),k),52,k),k)],r),C.E,C.h,C.J),k)}}
B.Xj.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CI(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eL(new A.a6(j,new B.bNZ(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.am9(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bO_(l),w),w.i("w.E"))
C.e.ct(v,new B.bO0())
j=y.T
u=e.G(A.cC($.cq(),new B.bO1(),y.v,j),j)
t=B.dhY(l.e.c)
if(u==null)s=I.Fl
else{j=e.G($.aW5().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fl
j=J.db(j,new B.bO2(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aT(d,k,y.w).w
w=A.bO(A.x(k,k,C.r,k,k,new A.J(C.bH,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.i(x.a,k,k,k,k,A.ay(d).ok.r,k,k)
q=A.a5(new B.ai6("Gasto",A.aJ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aA,A.O(A.a([q,C.ae,A.a5(A.aX(new B.ai6("Teto \xb7 tocar para mudar",p===0?"Definir":A.aJ(p,!1),k),new B.bO3(d,e,x),k),1)],o),C.u,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bj,A.i("Contratado na app",k,k,k,k,A.ay(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aDk(s[n],k))
C.e.n(p,w)}p.push(C.bj)
p.push(A.i("Despesas",k,k,k,k,A.ay(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKG)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.i(m.c,k,k,k,k,C.iv,k,k)
q=m.r
q=q==null?k:A.i("At\xe9 "+C.f.aT(C.j.k(A.aE(q)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(q)),2,"0")+"/"+A.aM(q),k,k,k,k,k,k,k)
p.push(A.jo(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.i(A.aJ(m.f,!1),k,k,k,k,D.c5E,k,k),C.ac,new P.Dh(m.w,new B.bO4(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J4,k)],o),C.u,C.h,C.J,0,k),k))}return A.bB(!0,new A.ec(new A.aR(0,1/0,0,j.a.b*0.8),A.d6(p,k,L.CT,k,k,!1,!0),k),k,C.Z,!0)}}
B.ai6.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.y(A.a([A.i(this.c,x,x,x,x,C.bf,x,x),C.ar,A.i(this.d,x,x,x,x,M.aa9,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.J(C.a3,x,x,w,x,x,C.x),x,x,x,C.cT,x,x,x)}}
B.aCw.prototype={
b9(d,e){var x,w=y.t,v=e.G(A.cC($.cq(),new B.bJr(),y.v,w),w),u=e.G($.d25(),y.o)
w=e.G($.uH(),y.l)
x=w.gv(w)
return A.hE(u,new B.bJs(this,new B.bJx(x==null?C.fd:x),v),new B.bJt(e),new B.bJu(),!1,!0,!1)}}
B.anA.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.f1
s=new A.b5(999,999)
r=new A.be(o.cc(0.25),1,C.ag,-1)
q=A.b9(C.ic,o,p,p,13)
t=A.x(p,A.O(A.a([q,C.rN,new A.di(1,C.ba,A.i(u,1,C.a1,p,p,new A.Q(!0,o,p,p,p,p,14,C.d2,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b9(C.ie,o,p,p,16)],n),C.u,C.h,C.J,0,p),C.r,p,D.afr,new A.J(t,p,new A.dN(r,r,r,r),new A.cz(s,s,s,s),p,p,C.x),p,p,p,D.au4,p,p,p)
m.push(new A.js(new A.n6(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hz(t,new B.aYN(d),p,p),p))}return A.e5(C.bg,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["C(i6)","T(T,i6)","v(i6,i6)","T(T,DD)","zU()","F<~>(c?)","F<~>()","NY(N)","C(DD)","F<lU>()","Xj(N)","~(i6)","~()","C(nq)","C(rP)","i6(a3<c,@>)","DO()"])
B.cHU.prototype={
$1(d){return this.aEN(d)},
aEN(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.u_(a1)
u=y.t
t=a1.G(A.cC($.cq(),new B.cHQ(),y.v,u),u)
u=J.a7(t)
if(u.gY(t)){v=D.bzf
x=1
break}s=A.a([],y.s)
for(r=u.gX(t);r.q();)s.push(r.gE(r).a)
r=$.P()
q=r.b
q===$&&A.b()
p=y.G
o=q.P("budgets").al(0,"wedding_id, total").da("wedding_id",s).b3(new B.cHR(),p)
n=r.b.P("budget_categories").al(0,"wedding_id, amount").da("wedding_id",s).b3(new B.cHS(),p)
m=r.b.P("expenses").al(0,"wedding_id, amount, paid").da("wedding_id",s).b3(new B.cHT(),p)
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
s.push(new A.aN3([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1304}
B.cHQ.prototype={
$1(d){return d.c},
$S:148}
B.cHR.prototype={
$1(d){return d},
$S:29}
B.cHS.prototype={
$1(d){return d},
$S:29}
B.cHT.prototype={
$1(d){return d},
$S:29}
B.b3Q.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5u.prototype={
$1(d){return d.w},
$S:z+0}
B.b5v.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5r.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.b5s.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b5t.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bLs.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bLt.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bLK.prototype={
$0(){return this.a.gS().a_(0,$.CI().gaX(),y.x).Zm(0).e5(new B.bLJ())},
$S:1}
B.bLJ.prototype={
$1(d){},
$S:11}
B.bLo.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLq.prototype={
$1(d){return A.CE(C.k.a8(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bLr(),null)+" \u20ac"},
$S:107}
B.bLr.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:42}
B.bLp.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a2(v," \xb7 ")
u=x&&u>0?u:null
return new B.NY(v,u,w.d,null)},
$S:z+7}
B.bLy.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bLz.prototype={
$1(d){return d.x!==C.e9&&d.b===this.a},
$S:61}
B.bLI.prototype={
$2(d,e){return A.ji(d,this.a.l9(e))},
$1(d){return this.$2(d,null)},
$S:1307}
B.bLA.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLB.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bLC.prototype={
$0(){return this.a.It(this.b.a)},
$S:0}
B.bLD.prototype={
$0(){var x=this.a
return x.p(new B.bLx(x))},
$S:0}
B.bLx.prototype={
$0(){return this.a.w=D.J2},
$S:0}
B.bLE.prototype={
$0(){var x=this.a
return x.p(new B.bLw(x))},
$S:0}
B.bLw.prototype={
$0(){return this.a.w=D.abE},
$S:0}
B.bLF.prototype={
$0(){var x=this.a
return x.p(new B.bLv(x))},
$S:0}
B.bLv.prototype={
$0(){return this.a.w=D.abD},
$S:0}
B.bLG.prototype={
$0(){var x=this.a
return x.p(new B.bLu(x))},
$S:0}
B.bLu.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bLH.prototype={
$0(){return B.Cx(this.a.gS().a_(0,$.cq(),y.v).b.a)},
$S:z+9}
B.cEc.prototype={
$1(d){var x=null,w=this.b
return new A.eU(A.i(this.a,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.cv(),w,x,x,x,x,x,2,D.aFa,C.U,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.fL,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b0,x,x,x,x),A.a([new A.am(A.cJ(C.cZ,x,x,new B.cEa(d),x,x),x),new A.am(A.bD(C.dw,new B.cEb(d,w),x),x)],y.p),x)},
$S:19}
B.cEa.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.cEb.prototype={
$0(){var x=A.al(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aY(w," ","")
return x.ah(A.eV(A.aY(w,",",".")))},
$S:0}
B.cEm.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.c_(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.c_(2100,1,1,0,0):x)},
$S:z+2}
B.bNV.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNX.prototype={
$0(){return A.bQ(null,new B.bNY(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNY.prototype={
$1(d){return new B.Xj(this.a.e.a,null)},
$S:z+10}
B.bNW.prototype={
$0(){return B.akJ(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKO.prototype={
$0(){var x=this.a
A.al(x,!1).bj()
A.ae(x).aj("/bookings",null,y.X)},
$S:0}
B.bKN.prototype={
$3(d,e,f){return A.kP(A.b9(C.ia,this.a,null,null,null),C.t,!0)},
$S:101}
B.bXG.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.am9().gaX(),y.h).Op(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a0(A.bZ(v,v,v,v,v,C.y,v,A.i(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bXC.prototype={
$0(){var x=this
return A.rH(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bXD.prototype={
$0(){return A.ae(this.a).aj("/bookings",null,y.X)},
$S:0}
B.bXE.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bXF.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bIu.prototype={
$0(){return this.a.p(new B.bIt())},
$S:0}
B.bIt.prototype={
$0(){},
$S:0}
B.bIv.prototype={
$0(){return this.a.p(new B.bIs())},
$S:0}
B.bIs.prototype={
$0(){},
$S:0}
B.bIg.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:42}
B.bIh.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bIr.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:38}
B.bIm.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.bIn.prototype={
$1(d){var x=this.a
return x.p(new B.bIl(x,d))},
$S:138}
B.bIl.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bIo.prototype={
$0(){var x=this.a
return x.p(new B.bIk(x))},
$S:0}
B.bIk.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bIp.prototype={
$0(){var x=this.a
return x.p(new B.bIj(x))},
$S:0}
B.bIj.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bIq.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ab(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cOe(v.b,A.c_(A.aM(t)-1,1,1,0,0),r,A.c_(A.aM(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bIi(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bIi.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNZ.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bO_.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bO0.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.c_(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.c_(2100,1,1,0,0):x)},
$S:z+2}
B.bO1.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bO2.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bO3.prototype={
$0(){var x=this.c
return B.akJ(this.a,this.b,x.a,x.d)},
$S:0}
B.bO4.prototype={
$1(d){return this.a.a_(0,$.am9().gaX(),y.h).Op(this.b.a)},
$S:133}
B.bJr.prototype={
$1(d){return d.c},
$S:148}
B.bJx.prototype={
$2(d,e){return A.ji(d,this.a.l9(e))},
$S:43}
B.bJu.prototype={
$0(){return D.bLk},
$S:87}
B.bJt.prototype={
$2(d,e){return A.JR(A.a([new A.hj("Tentar outra vez",new B.bJk(this.a),!1,null)],y.p),C.eS,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1308}
B.bJk.prototype={
$0(){return this.a.ai($.d25())},
$S:0}
B.bJs.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bJv(g),e=new B.bJw(g,this.b),d=J.ca(a4),a0=d.cV(a4,0,new B.bJl()),a1=d.cV(a4,0,new B.bJm(f)),a2=d.cV(a4,0,new B.bJn(e)),a3=y.N
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
x=A.vn(i,""+t+" "+r+w,"Todos os eventos",C.hG,u,v,x)
v=y.p
u=A.a([new A.DZ(A.a([new A.lc("Gasto",A.aJ(a1,!1),h,i),new A.lc("Por pagar",A.aJ(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eu(a4,0,y.A),r=J.ao(t.a),q=t.b,t=new A.bY(r,q,A.u(t).i("bY<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.an(A.c1())
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
l.push(new A.hz(A.x(i,A.O(A.a([new A.bK(1,C.at,n,i),C.ae,A.i(A.aJ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.be,C.jV],v),C.u,C.h,C.l,0,i),C.r,C.as,C.cL,i,i,i,i,C.ck,i,i,i),new B.bJo(o,g),i,i))
C.e.n(w,l)}return A.y(A.a([x,new A.c3("N\xfameros",i,u,16,i),new A.c3("Por evento \xb7 "+d,i,w,16,i),D.aAO],v),C.E,C.h,C.l)},
$S:1309}
B.bJv.prototype={
$1(d){return J.db(this.a.e,new B.bJi(d)).cV(0,0,new B.bJj())},
$S:169}
B.bJi.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:61}
B.bJj.prototype={
$2(d,e){return d+e.w},
$S:460}
B.bJw.prototype={
$1(d){return J.db(this.a.e,new B.bJp(d)).cV(0,0,new B.bJq(this.b))},
$S:169}
B.bJp.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:61}
B.bJq.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:460}
B.bJl.prototype={
$2(d,e){return d+e.a[2]},
$S:263}
B.bJm.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:263}
B.bJn.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:263}
B.bJo.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYN.prototype={
$0(){return A.ae(this.a).aj("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKR","d_8",15)
w(B,"dKQ","drE",16)
v(B.DO.prototype,"giF","d1",4)
var t
u(t=B.abW.prototype,"gape","Ty",5)
v(t,"gaR8","Q_",6)
v(B.abA.prototype,"gaSm","aSn",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cHU,B.cHQ,B.cHR,B.cHS,B.cHT,B.b5u,B.b5v,B.b5r,B.b5t,B.bLJ,B.bLq,B.bLr,B.bLp,B.bLy,B.bLz,B.bLI,B.bLB,B.cEc,B.bNV,B.bNY,B.bKN,B.bXG,B.bIg,B.bIr,B.bIn,B.bNZ,B.bO_,B.bO1,B.bO2,B.bO4,B.bJr,B.bJs,B.bJv,B.bJi,B.bJw,B.bJp])
x(A.M,[B.DD,B.b3P,B.zU,B.Mv,B.a8_,B.aCr])
x(A.cK,[B.b3Q,B.bLo,B.bLA,B.cEm,B.bO0,B.bJx,B.bJt,B.bJj,B.bJq,B.bJl,B.bJm,B.bJn])
w(B.DO,A.fd)
x(A.bL,[B.b5s,B.bLs,B.bLt,B.bLK,B.bLC,B.bLD,B.bLx,B.bLE,B.bLw,B.bLF,B.bLv,B.bLG,B.bLu,B.bLH,B.cEa,B.cEb,B.bNX,B.bNW,B.bKO,B.bXC,B.bXD,B.bXE,B.bXF,B.bIu,B.bIt,B.bIv,B.bIs,B.bIh,B.bIm,B.bIl,B.bIo,B.bIk,B.bIp,B.bIj,B.bIq,B.bIi,B.bO3,B.bJu,B.bJk,B.bJo,B.aYN])
w(B.abV,A.f7)
w(B.D6,A.dC)
w(B.abW,A.dw)
x(A.L,[B.aPP,B.aDN,B.aDk,B.XG,B.ai6,B.anA])
x(A.ew,[B.aDO,B.aGs,B.Xj,B.aCw])
w(B.NY,A.G)
w(B.abA,A.a_)})()
A.br(b.typeUniverse,JSON.parse('{"DO":{"fd":["zU"]},"NY":{"G":[],"e":[],"f":[]},"Xj":{"G":[],"e":[],"f":[]},"D6":{"G":[],"e":[],"f":[]},"abW":{"a_":["D6"]},"aPP":{"L":[],"e":[],"f":[]},"aDN":{"L":[],"e":[],"f":[]},"aDO":{"G":[],"e":[],"f":[]},"aDk":{"L":[],"e":[],"f":[]},"aGs":{"G":[],"e":[],"f":[]},"XG":{"L":[],"e":[],"f":[]},"abA":{"a_":["NY"]},"ai6":{"L":[],"e":[],"f":[]},"aCw":{"G":[],"e":[],"f":[]},"anA":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{l:x("ax<fb>"),k:x("ax<t<rP>>"),u:x("ax<t<fK>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("ax<a3<c,t<c>>>"),x:x("zx"),b:x("uU"),d:x("rU"),Z:x("ok"),v:x("ed"),_:x("i6"),h:x("DO"),g:x("zU"),D:x("r<DD>"),r:x("r<i6>"),Q:x("r<lc>"),F:x("r<ek>"),Y:x("r<a3<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a8_>"),c:x("r<Mv>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fK>"),t:x("t<fl>"),G:x("t<a3<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a3<c,@>"),w:x("du"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lU"),N:x("c"),B:x("aCr"),q:x("dl"),i:x("T"),z:x("@"),S:x("v"),X:x("M?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afr=new A.aR(0,1/0,32,1/0)
D.au4=new A.a4(8,5,6,5)
D.ch0=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azw=new A.bK(1,C.at,D.ch0,null)
D.byX=x([],y.r)
D.azM=new B.zU(!1,D.byX)
D.aAM=new A.h6("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAO=new A.h6("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aB5=new A.h6("Sem pagamentos nesta vista.",8,null)
D.aEC=new A.dE(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bk,null,null,C.bk,C.bk,!0,null,null,null,null)
D.aEX=new A.dE(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bk,null,null,C.bk,C.bk,!0,null,null,null,null)
D.aFa=new A.dE(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGV=new A.dU("Pago",C.cU,null)
D.aH1=new A.dU("Por pagar",C.hE,null)
D.aH9=new A.lh("Or\xe7amento","Todos os teus eventos",null)
D.aHf=new A.lh("Or\xe7amento",null,null)
D.bya=x(["catering"],y.s)
D.bze=x([],y.D)
D.bzf=x([],y.n)
D.bzE=x(["flowers_decor"],y.s)
D.bB9=x(["music_dj","bands_musicians"],y.s)
D.bBJ=x(["photography"],y.s)
D.bCX=x(["venue"],y.s)
D.aEr=new A.vi("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kE,null)
D.bKG=new A.S(C.fW,D.aEr,null)
D.c9g=new A.D("A despesa precisa de um t\xedtulo",null,C.mp,null,null,null,null,null,null,null)
D.bLi=new A.S(T.Nz,D.c9g,null)
D.bLk=new A.S(O.uO,C.f1,null)
D.bXP=new A.vY(!1,6,!0,null)
D.c3z=new A.Q(!0,C.z,null,null,null,null,14,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5E=new A.Q(!0,null,null,null,null,null,null,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aam=new A.Q(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7u=new A.D("Indica um valor v\xe1lido",null,C.mp,null,null,null,null,null,null,null)
D.c7O=new A.D("Nova despesa",null,C.bi,null,null,null,null,null,null,null)
D.c8h=new A.D("\u20ac",null,D.aam,null,null,null,null,null,null,null)
D.c8T=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.cdm=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null)
D.J2=new B.abV(0,"all")
D.abD=new B.abV(1,"paid")
D.abE=new B.abV(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYh","d25",()=>C.bK.$1$1(new B.cHU(),y.m))
x($,"dZ7","am9",()=>A.mX(B.dKQ(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["rZct4PCi/mYPhVg1e6dDVX34OPY="]=a.current})($__dart_deferred_initializers__);