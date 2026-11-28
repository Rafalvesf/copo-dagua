((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,Q,E,R,S,F,G,T,H,K,U,V,W,I,X,B={cIf:function cIf(){},cIb:function cIb(){},cIc:function cIc(){},cId:function cId(){},cIe:function cIe(){},
dJB(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DH(x[v]))
return new B.b4p(d.b,u)},
DH:function DH(d){this.a=d},
b4p:function b4p(d,e){this.a=d
this.b=e},
b4q:function b4q(){},
d_4(d){var x="category",w="due_date",v=J.a7(d),u=A.Z(v.h(d,"id")),t=A.Z(v.h(d,"wedding_id")),s=A.Z(v.h(d,"title")),r=B.dFU(B.deN(A.C(v.h(d,x)))),q=B.deN(A.C(v.h(d,x))),p=A.dt(v.h(d,"amount")),o=v.h(d,w)==null?null:A.db(A.Z(v.h(d,w)))
v=A.dZ(v.h(d,"paid"))
return new H.i5(u,t,s,r,q,p,o,v===!0)},
deN(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dFU(d){var x
A:{if("venue"===d){x=E.yk
break A}if("catering"===d){x=E.yg
break A}if("photography"===d){x=E.yh
break A}if("music_dj"===d||"bands_musicians"===d){x=E.yi
break A}if("flowers_decor"===d){x=E.yj
break A}x=null
break A}return x},
drk(){return new B.DR()},
A7:function A7(d,e){this.a=d
this.b=e},
b63:function b63(){},
b64:function b64(){},
DR:function DR(){this.b=this.x=null},
b60:function b60(){},
b61:function b61(d,e){this.a=d
this.b=e},
b62:function b62(d){this.a=d},
CF(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$CF=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.alo(),$async$CF)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.R("events").ak(0,"partner_name_1, partner_name_2").V("id",d).cm(),$async$CF)
case 4:s=f
x=5
return A.d(u.b.R("bookings").ak(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cV(0,"event_date",!1),$async$CF)
case 5:r=f
u=A.a([],y.s)
for(t=J.ap(r);t.t();)u.push(A.Z(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.Q().b
t===$&&A.b()
x=9
return A.d(t.R("payments").ak(0,"booking_id, type, status, amount, paid_at, due_at, provider").dO("booking_id",u).tN(0,"created_at"),$async$CF)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.R("expenses").ak(0,"title, category, amount, due_date, paid").V("wedding_id",d).tN(0,"due_date"),$async$CF)
case 10:p=f
x=11
return A.d(u.b.R("budget_categories").ak(0,"name, amount").V("wedding_id",d).tN(0,"position"),$async$CF)
case 11:o=f
x=12
return A.d(u.b.R("budgets").ak(0,"total").V("wedding_id",d).cm(),$async$CF)
case 12:n=f
m=F.cZQ(F.cFn(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ap(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cA(j==null?"":j)
i=k.h(l,"category")
i=J.cA(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.eY(A.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d5(A.q(g))
g=g==null?null:g.dQ()}u.push(new B.MA(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ap(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cA(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eY(A.q(k))
if(k==null)k=0}t.push(new B.a89(i,k))}l=n==null?null:F.d_n(J.i(n,"total"))
v=new F.lQ(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$CF,w)},
MA:function MA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a89:function a89(d,e){this.a=d
this.b=e},
doD(){return new B.a17(null)},
aUP(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUP=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a9(f,0)
x=3
return A.d(A.fV(!0,new B.cEN(e,new A.aF(new A.bC(u,C.aG,C.ay),$.aa())),d,y.i),$async$aUP)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUP,w)},
alh(d,e,f,g){return B.dFH(d,e,f,g)},
dFH(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$alh=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUP(d,"Teto para "+f,g),$async$alh)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CQ().gaY(),y.x).Pg(f,r),$async$alh)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a2(I.Il)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$alh,w)},
dcQ(d){var x=A.U(d,y._)
C.e.cC(x,new B.cEW())
return x},
ddj(d){var x=C.f.aW(C.j.k(A.aA(d)),2,"0"),w=C.f.aW(C.j.k(A.ao(d)),2,"0"),v=A.ay(d)===A.ay(new A.ac(Date.now(),0,!1))?"":"/"+A.ay(d)
return x+"/"+w+v},
cZc(d){var x,w,v,u
if(d===C.k.fG(d))x=C.k.a9(d,0)
else{w=C.k.a9(d,2)
x=A.aW(w,".",",")}v=x.split(",")
u=A.CM(v[0],A.aT("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bI3(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
ac8:function ac8(d,e){this.a=d
this.b=e},
a17:function a17(d){this.a=d},
ac9:function ac9(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bLh:function bLh(d){this.a=d},
bLi:function bLi(d){this.a=d},
bLz:function bLz(d){this.a=d},
bLy:function bLy(){},
bLd:function bLd(){},
bLf:function bLf(){},
bLg:function bLg(){},
bLe:function bLe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLn:function bLn(){},
bLo:function bLo(d){this.a=d},
bLx:function bLx(d){this.a=d},
bLp:function bLp(){},
bLq:function bLq(){},
bLr:function bLr(d,e){this.a=d
this.b=e},
bLs:function bLs(d){this.a=d},
bLm:function bLm(d){this.a=d},
bLt:function bLt(d){this.a=d},
bLl:function bLl(d){this.a=d},
bLu:function bLu(d){this.a=d},
bLk:function bLk(d){this.a=d},
bLv:function bLv(d){this.a=d},
bLj:function bLj(d){this.a=d},
bLw:function bLw(d){this.a=d},
cEN:function cEN(d,e){this.a=d
this.b=e},
cEL:function cEL(d){this.a=d},
cEM:function cEM(d,e){this.a=d
this.b=e},
cEW:function cEW(){},
aQn:function aQn(d,e,f){this.c=d
this.d=e
this.a=f},
aE9:function aE9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEa:function aEa(d,e){this.e=d
this.a=e},
bNN:function bNN(){},
bNP:function bNP(d,e){this.a=d
this.b=e},
bNQ:function bNQ(d){this.a=d},
bNO:function bNO(d,e,f){this.a=d
this.b=e
this.c=f},
aDH:function aDH(d,e){this.c=d
this.a=e},
bKD:function bKD(d){this.a=d},
bKC:function bKC(d){this.a=d},
aGY:function aGY(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bYd:function bYd(d,e){this.a=d
this.b=e},
bY9:function bY9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bYa:function bYa(d){this.a=d},
bYb:function bYb(d,e){this.a=d
this.b=e},
bYc:function bYc(d,e){this.a=d
this.b=e},
XO:function XO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCM:function aCM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NX:function NX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abO:function abO(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bIh:function bIh(d){this.a=d},
bIg:function bIg(){},
bIi:function bIi(d){this.a=d},
bIf:function bIf(){},
bI3:function bI3(){},
bI4:function bI4(d){this.a=d},
bIe:function bIe(){},
bI9:function bI9(d){this.a=d},
bIa:function bIa(d){this.a=d},
bI8:function bI8(d,e){this.a=d
this.b=e},
bIb:function bIb(d){this.a=d},
bI7:function bI7(d){this.a=d},
bIc:function bIc(d){this.a=d},
bI6:function bI6(d){this.a=d},
bId:function bId(d,e){this.a=d
this.b=e},
bI5:function bI5(d,e){this.a=d
this.b=e},
Xp:function Xp(d,e){this.e=d
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
aix:function aix(d,e,f){this.c=d
this.d=e
this.a=f},
aCR:function aCR(d,e,f){this.e=d
this.f=e
this.a=f},
bJe:function bJe(){},
bJk:function bJk(d){this.a=d},
bJh:function bJh(){},
bJg:function bJg(d){this.a=d},
bJ7:function bJ7(d){this.a=d},
bJf:function bJf(d,e,f){this.a=d
this.b=e
this.c=f},
bJi:function bJi(d){this.a=d},
bJ5:function bJ5(d){this.a=d},
bJ6:function bJ6(){},
bJj:function bJj(d,e){this.a=d
this.b=e},
bJc:function bJc(d){this.a=d},
bJd:function bJd(d){this.a=d},
bJ8:function bJ8(){},
bJ9:function bJ9(d){this.a=d},
bJa:function bJa(d){this.a=d},
bJb:function bJb(d,e){this.a=d
this.b=e},
ao4:function ao4(d,e){this.c=d
this.a=e},
aZp:function aZp(d){this.a=d},
dhO(d){var x
switch(d){case E.yk:x=D.bEk
break
case E.yg:x=D.bzv
break
case E.yh:x=D.bD7
break
case E.yi:x=D.bCy
break
case E.yj:x=D.bB_
break
default:x=C.a8
break}return x}},D,L,Y
J=c[1]
A=c[0]
C=c[2]
M=c[221]
N=c[207]
O=c[190]
P=c[220]
Q=c[223]
E=c[224]
R=c[169]
S=c[219]
F=c[134]
G=c[79]
T=c[161]
H=c[77]
K=c[218]
U=c[201]
V=c[222]
W=c[132]
I=c[217]
X=c[80]
B=a.updateHolder(c[53],B)
D=c[216]
L=c[72]
Y=c[78]
B.DH.prototype={
gaq(d){return this.a.a}}
B.b4p.prototype={
gq6(){return C.e.cZ(this.b,0,new B.b4q())},
gaD8(){var x=this.a
return x===0?0:C.k.ah(this.gq6()/x,0,1)}}
B.A7.prototype={
gbBP(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b63(),w),w.i("B.E"))
return x},
gbCa(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b64(),w),w.i("B.E"))
return x},
ayd(d,e){var x=e==null?this.a:e
return new B.A7(x,d==null?this.b:d)},
it(d){return this.ayd(null,d)},
axV(d){return this.ayd(d,null)}}
B.DR.prototype={
d8(){var x=y.T,w=this.x=A.eT(this).H(A.cJ($.cr(),new B.b60(),y.v,x),x)
if(w!=null)A.jl(new B.b61(this,w),y.H)
return D.aB0},
c1(d,e){return this.bzc(0,e)},
bzc(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$c1=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).it(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.R("expenses").cn(0).V("wedding_id",e).cV(0,"created_at",!0),$async$c1)
case 2:v.sa4(0,new t.A7(s,r.d9(g,B.dKr(),y._).bz(0)))
return A.l(null,w)}})
return A.m($async$c1,w)},
We(d){return this.bp1(d)},
bp1(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$We=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.Q().b
r===$&&A.b()
r=r.R("expenses")
u=A.E(y.N,y.X)
u.j(0,"wedding_id",d.b)
u.j(0,"title",d.c)
t=d.e
if(t==null){t=d.d
t=t==null?null:t.b}u.j(0,"category",t)
u.j(0,"amount",d.f)
t=d.r
u.j(0,"due_date",t==null?null:C.e.gL(t.ck().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.dd(0,u).cn(0).dS(0),$async$We)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.d_4(s))
v.sa4(0,r.axV(u))
return A.l(null,w)}})
return A.m($async$We,w)},
Pd(d){return this.bEL(d)},
bEL(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Pd=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.ln(v.ga4(0).b,new B.b62(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.R("expenses").bj(0,A.T(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).ck()],u,u)).V("id",d).cn(0).dS(0),$async$Pd)
case 2:t=l.d_4(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.axV(m))
return A.l(null,w)}})
return A.m($async$Pd,w)}}
B.MA.prototype={}
B.a89.prototype={
gaq(d){return this.a}}
B.ac8.prototype={
I(){return"_BudgetFilter."+this.b}}
B.a17.prototype={
P(){return new B.ac9(D.JC)}}
B.ac9.prototype={
Ur(d){return this.beI(d)},
beI(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Ur=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bLh(u))
x=1
break}u.p(new B.bLi(u))
t=u.gS()
s=$.cr()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gaY(),y.Z).ak(0,d),$async$Ur)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Ur,w)},
ad(){this.ao()
A.jl(new B.bLz(this),y.H)},
QU(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$QU=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.amH()
m=y.h
l=o.a0(0,n.gaY(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CQ(),y.b).b
s=t==null?null:t.b
r=C.e.cZ(o.a0(0,n,y.g).b,0,new B.bLd())
t=o.a0(0,$.cr(),y.v).b
q=t==null?null:t.gcE()
t=u.c
t.toString
x=3
return A.d(A.bZ(null,new B.bLe(q,s,new B.bLf(),r),!1,t,!0,!0,null,y.B),$async$QU)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gaY(),m)
n=p.a
m=p.b
t=p.c
o.We(new H.i5("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$QU,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.H($.CQ(),y.b),a3=a1.H($.I4(),y.d),a4=a1.H($.amH(),y.g),a5=a2.b,a6=a5==null?e:B.dJB(a5,a3.b)
a5=A.j2(a1.H($.j0(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iX
a5=y.T
w=a1.H(A.cJ($.cr(),new B.bLn(),y.v,a5),a5)
if(f.y){a1=f.gaqC()
return A.cQ(e,C.d2,A.ox(C.fd,40,A.a([C.h6,D.aIp,L.cWE(a1,e),new B.aCR(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.da(x,new B.bLo(w))
a1=a1.H($.uF(),y.l)
u=a1.gv(a1)
t=new B.bLx(u==null?C.fa:u)
a1=y._
a5=A.U(a4.gbBP(),a1)
for(s=v.a,r=J.cb(s),q=r.gX(s),p=v.b,o=v.$ti.i("hc<1>"),n=new A.hc(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i5("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbCa(0),a1)
for(s=r.gX(s),o=new A.hc(s,p,o),p=y.r;o.t();){r=s.gE(s)
n=A.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new H.i5("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new H.i5("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcQ(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcQ(q)
break
default:a1=e}h=C.e.cZ(q,0,new B.bLp())
s=a6==null
if(s)g=D.bAA
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bLq(),p),p.i("B.E"))}if(s)a1=D.bZt
else{s=f.gaSP()
r=y.p
p=A.a([new A.pw(A.a([new A.qW(s,"Nova despesa",e)],r),e),D.aIv,L.cWE(f.gaqC(),w),new B.aQn(a6,new B.bLr(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aM(a6.gq6(),!1)
n=a5.length
m=n===1?d:a0
l=A.aM(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.dU("N\xfameros",e,A.a([new G.SG(A.a([new G.xq("Gasto",o,""+n+" "+m),new G.xq("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new O.me(A.a([new A.em("Todos",l===D.JC,n+m,new B.bLs(f),e),new A.em("Pendentes",l===D.acI,m,new B.bLt(f),e),new A.em("Pagos",l===D.acH,n,new B.bLu(f),e)],y.F),4,!0,e),C.av],r))}o.push(new B.aGY(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.dU("Pagamentos",e,o,16,e))
a1=A.a([new A.kR(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aE9(g,f.x,new B.bLv(f),e))
p.push(new A.dU("Categorias",e,a1,16,e))
p.push(new A.dU("Exportar",e,A.a([new F.DS("Gastos e parceiros",!1,new B.bLw(f),e)],r),16,e))
a1=A.ox(C.fd,40,p,e,!0,!1)}return A.cQ(e,C.d2,a1,!0,e)},
J3(d){return this.aZQ(d)},
aZQ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$J3=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUP(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$J3)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a0(0,$.CQ().gaY(),y.x).a06(r),$async$J3)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a2(I.Il)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$J3,w)}}
B.aQn.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gq6()>0?"Gastos "+A.aM(t.gq6(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vm(new A.iq("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hO,0,"por definir","\u2014")}x=C.k.aJ(t.gaD8()*100)
w=s-t.gq6()<0?"Acima do teto":"Ainda tens"
v=A.aM(Math.abs(s-t.gq6()),!1)
s=A.aM(s,!1)
u=t.gaD8()
return A.aY(A.vm(I.a2x,"Gastos "+A.aM(t.gq6(),!1)+" \xb7 "+x+"% do teto",w,C.hO,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aE9.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dM(s,0,A.eF(5,"count",y.S),A.a8(s).c).bz(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aEa(r[w],null))
q=A.a([A.ff(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.iq(u,v.e,!0,null))}return A.x(q,C.G,C.h,C.l,0,C.u)}}
B.aEa.prototype={
bf(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(A.cJ($.cr(),new B.bNN(),y.v,m),m)
if(l==null)x=C.rE
else{m=e.H($.d22().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rE:m}m=A.a([],y.s)
for(w=B.dhO(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNP(this,d)
if(w)return A.k0(!1,!1,p,v,A.aM(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.or("P\xf4r teto",new B.bNO(this,d,e),!0,p))
w=A.aM(o.b,!1)
u=A.aM(n,!1)
s=y.p
q=A.a([A.aH(new A.TA(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aH,new B.ao4(m,p)],s))
return A.k0(!1,!1,p,v,w+" de "+u,o.a,A.x(q,C.dl,C.h,C.K,0,C.u))}}
B.aDH.prototype={
u(d){var x,w,v=null,u=$.au,t=$.fz.ce(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fX(r,A.aH(p==null?A.kM(A.b6(C.hJ,u,v,v,v),C.t,!0):A.pr(p,144,new B.bKC(u),!1,C.bL,A.wB(),!1,v,v,v),48,48),C.ba)
p=A.h(q.b,1,C.a3,v,v,D.c5f,v,v,v)
x=A.b6(C.ic,u,v,v,14)
w=q.d
q=w>0?q.gQs()+" \xb7 "+A.aM(w,!1):q.gQs()
w=y.p
return new A.R(C.dp,A.aY(A.z(v,A.O(A.a([r,C.af,A.a4(A.x(A.a([p,C.ir,A.O(A.a([x,C.e8,new A.dc(1,C.b6,A.h(q,1,C.a3,v,v,A.aJ(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.br,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.v,C.h,C.l,0,v,v)],w),C.H,C.h,C.l,0,C.u),1),A.b6(C.ie,u,v,v,v)],w),C.v,C.h,C.l,0,v,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.y),v,v,v,C.dY,v,v,v),new B.bKD(d),v),v)}}
B.aGY.prototype={
bf(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.SF(A.a([new A.iq("+ Nova despesa",this.f,!0,j)],y.p),C.fu,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aCa
x=new B.bYd(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.H)(i),++t){s=i[t]
r=s.a
q=C.f.dc(r,":pay:")
r=C.f.b4(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga6(r.split(" \xb7 "))
o=C.e.ga6(r.split(" \xb7 "))
r=C.e.gL(r.split(" \xb7 "))
n=A.aM(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.ddj(m)
v.push(new W.E3(new A.cq(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bY9(d,e,s,q),A.HZ(m)===C.fl,j))
continue}p=r?new B.bYa(d):new B.bYb(x,s)
v.push(new B.XO(s,p,r||s.w?j:new B.bYc(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XO&&v[k-1] instanceof B.XO)u.push(C.iN)
u.push(v[k])
C.e.n(i,u)}i.push(D.aC_)
return A.x(i,C.G,C.h,C.l,0,C.u)}}
B.XO.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aM(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.ddj(w))
v=C.e.a1(v," \xb7 ")
if(u)u=D.aIb
else{u=this.e
u=u!=null?new A.or("Marcar pago",u,!0,null):D.aIi}return A.k0(!1,!1,null,this.d,v,x.c,u)}}
B.aCM.prototype={}
B.NX.prototype={
P(){var x=$.aa()
return new B.abO(new A.aF(C.al,x),new A.aF(C.al,x))}}
B.abO.prototype={
ad(){var x=this
x.ao()
x.d.an(0,new B.bIh(x))
x.e.an(0,new B.bIi(x))},
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a5()},
gaiK(){var x=C.f.C(this.e.a.a)
x=A.aW(x," ","")
return A.eY(A.aW(x,",","."))},
aU1(){var x,w,v,u,t=this,s=t.gaiK()
t.p(new B.bI4(t))
x=C.f.C(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.af(new B.aCM(x,s,u,t.r,v))},
atq(d,e,f,g,h){var x=null,w=h?C.hv:x,v=y.p,u=A.a4(A.x(A.a([A.h(d,x,x,x,x,C.ab,x,x,x),C.aX,A.h(e,x,x,x,x,C.O,x,x,x)],v),C.H,C.h,C.l,0,C.u),1),t=f?C.bo:x,s=f?x:A.bD(C.kB,1.5),r=f?U.vU:x
return A.b8(x,!0,x,A.cM(C.bz,A.z(x,A.O(A.a([u,A.z(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.aw),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x,x),C.r,x,C.d3,new A.I(x,x,w,x,x,x,C.y),x,x,x,C.hC,x,x,x),C.X,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aL),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bl9(d,e,f,g){return this.atq(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gaiK()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.C(x.a.a).length!==0&&j>0
w=new B.bIe()
t=y.w
s=A.ax(d,k,t).w
r=y.p
q=A.a([D.cdT],r)
q.push(A.h(l.a.c,k,k,k,k,C.O,k,k,k))
q=A.O(A.a([A.a4(A.x(q,C.H,C.h,C.l,0,C.u),1),A.b8(k,!0,k,A.cM(k,A.z(k,C.m1,C.r,k,k,C.cg,k,44,k,k,k,k,44),C.X,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bI9(d),k,k,k,k,k,k,!1,C.aL),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.v,C.h,C.l,0,k,k)
p=A.W(22)
o=A.a([D.cis,A.O(A.a([Y.d6s(A.cs(k,C.a8,!1,k,!0,C.z,k,A.cu(),l.e,k,k,k,k,k,2,D.aG8,C.X,!0,k,!0,k,!1,k,C.aD,k,k,k,k,C.fK,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.aq,k,k,k,k,k,k,k,k,k,k,k,D.ab8,!0,C.dG,k,C.b2,k,k,k,k)),C.bk,D.cdW],r),C.eT,C.bW,C.l,0,C.aM,k)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cZc(v)+" no teto":"Passa o teto em "+B.cZc(-v)
o.push(A.h(m,k,k,k,k,A.aJ(k,k,n?C.V:C.c2,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.cga)
p=A.z(k,A.x(o,C.v,C.h,C.l,0,C.u),C.r,k,k,new A.I(C.a7,k,k,p,k,k,C.y),k,k,k,C.bh,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aO,k,k,k)
n=A.W(26)
m=l.x&&C.f.C(x.a.a).length===0?A.bD(C.c2,1.5):k
n=A.a([p,C.a1,new A.R(C.dp,o,k),A.z(C.bg,A.cs(k,C.a8,!1,k,!0,C.z,k,A.cu(),x,k,k,k,k,k,2,D.aFN,C.X,!0,k,!0,k,!1,k,C.aD,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.aq,k,k,k,k,k,k,k,k,k,k,k,C.fg,!0,C.at,k,C.hi,k,k,k,k),C.r,k,k,new A.I(C.a7,k,m,n,k,k,C.y),k,52,k,C.fY,k,k,k)],r)
if(l.x&&C.f.C(x.a.a).length===0)n.push(D.bLR)
n.push(C.a1)
n.push(new X.a1I(l.r,new B.bIa(l),k))
n.push(C.a1)
n.push(new A.R(C.dp,A.h("ESTADO",k,k,k,k,C.aO,k,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bl9("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bIb(l)),l.atq("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bIc(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.aA(p)))
m=l.f
m.toString
m=A.q(w.$1(A.ao(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.ay(w)}o.push(A.b8(k,!0,k,A.cM(C.bz,A.aH(A.O(A.a([D.aAU,A.h(w,k,k,k,k,C.ch,k,k,k),C.e8,C.m0],r),C.v,C.h,C.l,0,k,k),56,k),C.X,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bId(l,d),k,k,k,k,k,k,!1,C.aL),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.z(k,A.x(o,C.v,C.h,C.l,0,C.u),C.r,k,k,new A.I(C.a7,k,k,x,k,k,C.y),k,k,k,C.cA,k,k,k))
n.push(C.a1)
n.push(D.cdv)
x=A.dR(A.x(n,C.G,C.h,C.l,0,C.u),C.z,k,C.ei,k,k,C.a2)
t=A.ax(d,C.b7,t).w
w=A.co(u?C.A:C.A.ce(0.35),k,k,C.t,k,k,C.ad,k,k,C.eK)
return new A.R(new A.a2(0,0,0,s.f.d),A.x(A.a([new A.R(C.jL,q,k),new A.dc(1,C.b6,x,k),new A.R(new A.a2(20,16,20,20+t.r.d),A.aH(A.bG(A.h(u?"Guardar \xb7 "+B.cZc(j):"Guardar",k,k,k,k,k,k,k,k),l.gaU0(),w),52,k),k)],r),C.G,C.h,C.K,0,C.u),k)}}
B.Xp.prototype={
bf(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.CQ(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eV(new A.a6(j,new B.bNR(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.H($.amH(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNS(l),w),w.i("B.E"))
C.e.cC(v,new B.bNT())
j=y.T
u=e.H(A.cJ($.cr(),new B.bNU(),y.v,j),j)
t=B.dhO(l.e.c)
if(u==null)s=K.FN
else{j=e.H($.aWF().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.FN
j=J.da(j,new B.bNV(t))
s=A.U(j,j.$ti.i("B.E"))}j=A.ax(d,k,y.w).w
w=A.bK(A.z(k,k,C.r,k,k,new A.I(C.bG,k,k,A.W(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.as(d).ok.r,k,k,k)
q=A.a4(new B.aix("Gasto",A.aM(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a1,r,C.aC,A.O(A.a([q,C.ah,A.a4(A.aY(new B.aix("Teto \xb7 tocar para mudar",p===0?"Definir":A.aM(p,!1),k),new B.bNW(d,e,x),k),1)],o),C.v,C.h,C.l,0,k,k)],o)
if(s.length!==0){w=A.a([C.bi,A.h("Contratado na app",k,k,k,k,A.as(d).ok.w,k,k,k),C.R],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aDH(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.h("Despesas",k,k,k,k,A.as(d).ok.w,k,k,k))
p.push(C.R)
w=v.length
if(w===0)p.push(D.bMb)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.hj,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aW(C.j.k(A.aA(q)),2,"0")+"/"+C.f.aW(C.j.k(A.ao(q)),2,"0")+"/"+A.ay(q),k,k,k,k,k,k,k,k)
p.push(A.jp(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aM(m.f,!1),k,k,k,k,D.c7p,k,k,k),C.ag,new R.Dn(m.w,new B.bNX(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.JE,k)],o),C.v,C.h,C.K,0,k,k),k))}return A.bF(!0,new A.e4(new A.aP(0,1/0,0,j.a.b*0.8),A.cZ(p,k,N.Dl,k,k,!1,C.a2,!0),k),k,C.a_,!0)}}
B.aix.prototype={
u(d){var x=null,w=A.W(16)
return A.z(x,A.x(A.a([A.h(this.c,x,x,x,x,C.bd,x,x,x),C.av,A.h(this.d,x,x,x,x,P.aaV,x,x,x)],y.p),C.H,C.h,C.l,0,C.u),C.r,x,x,new A.I(C.a7,x,x,w,x,x,C.y),x,x,x,C.cM,x,x,x)}}
B.aCR.prototype={
bf(d,e){var x,w=y.t,v=e.H(A.cJ($.cr(),new B.bJe(),y.v,w),w),u=e.H($.d21(),y.o)
w=e.H($.uF(),y.l)
x=w.gv(w)
return A.hG(u,new B.bJf(this,new B.bJk(x==null?C.fa:x),v),new B.bJg(e),new B.bJh(),!1,!0,!1)}}
B.ao4.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.fz
s=new A.b2(999,999)
r=new A.bc(o.ce(0.25),1,C.ai,-1)
q=A.b6(C.ic,o,p,p,13)
t=A.z(p,A.O(A.a([q,M.zb,new A.dc(1,C.b6,A.h(u,1,C.a3,p,p,new A.P(!0,o,p,p,p,p,14,C.de,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b6(C.ie,o,p,p,16)],n),C.v,C.h,C.K,0,p,p),C.r,p,D.agz,new A.I(t,p,new A.dN(r,r,r,r),new A.cd(s,s,s,s),p,p,C.y),p,p,p,D.avj,p,p,p)
m.push(new A.ju(new A.nb(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hA(t,new B.aZp(d),p,p),p))}return A.e2(C.bf,m,C.r,C.bm,6,6)}}
var z=a.updateTypes(["y(i5)","S(S,i5)","v(i5,i5)","S(S,DH)","A7()","F<~>(c?)","F<~>()","NX(N)","y(DH)","F<lQ>()","Xp(N)","~(i5)","~()","y(nv)","y(rZ)","i5(a5<c,@>)","DR()"])
B.cIf.prototype={
$1(d){return this.aGq(d)},
aGq(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(A.cJ($.cr(),new B.cIb(),y.v,f),f)
f=J.a7(e)
if(f.gZ(e)){v=D.bAB
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.t();)u.push(t.gE(t).a)
t=$.Q()
s=t.b
s===$&&A.b()
r=y.G
q=s.R("budgets").ak(0,"wedding_id, total").dO("wedding_id",u).b6(new B.cIc(),r)
p=t.b.R("budget_categories").ak(0,"wedding_id, amount").dO("wedding_id",u).b6(new B.cId(),r)
o=t.b.R("expenses").ak(0,"wedding_id, amount, paid").dO("wedding_id",u).b6(new B.cIe(),r)
r=y.N
u=y.i
t=A.E(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bi(a3,s),m=A.u(n),n=new A.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E")
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
case 6:n=d.bi(a3,s),m=A.u(n),n=new A.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.Z(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=A.aI(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=A.E(r,u)
d=J
x=9
return A.d(o,$async$$1)
case 9:u=d.bi(a3,s),s=A.u(u),u=new A.ak(u,u.gA(u),s.i("ak<V.E>")),s=s.i("V.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.Z(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=A.aI(n.h(r,"amount"))
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
u.push(new A.aNB([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1299}
B.cIb.prototype={
$1(d){return d.c},
$S:148}
B.cIc.prototype={
$1(d){return d},
$S:32}
B.cId.prototype={
$1(d){return d},
$S:32}
B.cIe.prototype={
$1(d){return d},
$S:32}
B.b4q.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b63.prototype={
$1(d){return d.w},
$S:z+0}
B.b64.prototype={
$1(d){return!d.w},
$S:z+0}
B.b60.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.b61.prototype={
$0(){return this.a.c1(0,this.b)},
$S:1}
B.b62.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bLh.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bLi.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bLz.prototype={
$0(){return this.a.gS().a0(0,$.CQ().gaY(),y.x).a_m(0).e5(new B.bLy())},
$S:1}
B.bLy.prototype={
$1(d){},
$S:11}
B.bLd.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLf.prototype={
$1(d){return A.CM(C.k.a9(d,0),A.aT("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bLg(),null)+" \u20ac"},
$S:123}
B.bLg.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bLe.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a1(v," \xb7 ")
u=x&&u>0?u:null
return new B.NX(v,u,w.d,null)},
$S:z+7}
B.bLn.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bLo.prototype={
$1(d){return d.x!==C.eQ&&d.b===this.a},
$S:60}
B.bLx.prototype={
$2(d,e){return A.je(d,this.a.lj(e))},
$1(d){return this.$2(d,null)},
$S:1302}
B.bLp.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLq.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bLr.prototype={
$0(){return this.a.J3(this.b.a)},
$S:0}
B.bLs.prototype={
$0(){var x=this.a
return x.p(new B.bLm(x))},
$S:0}
B.bLm.prototype={
$0(){return this.a.w=D.JC},
$S:0}
B.bLt.prototype={
$0(){var x=this.a
return x.p(new B.bLl(x))},
$S:0}
B.bLl.prototype={
$0(){return this.a.w=D.acI},
$S:0}
B.bLu.prototype={
$0(){var x=this.a
return x.p(new B.bLk(x))},
$S:0}
B.bLk.prototype={
$0(){return this.a.w=D.acH},
$S:0}
B.bLv.prototype={
$0(){var x=this.a
return x.p(new B.bLj(x))},
$S:0}
B.bLj.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bLw.prototype={
$0(){return B.CF(this.a.gS().a0(0,$.cr(),y.v).b.a)},
$S:z+9}
B.cEN.prototype={
$1(d){var x=null,w=this.b
return new A.eU(A.h(this.a,x,x,x,x,x,x,x,x),A.cs(x,C.a8,!0,x,!0,C.z,x,A.cu(),w,x,x,x,x,x,2,D.aGl,C.X,!0,x,!0,x,!1,x,C.aD,x,x,x,x,C.fK,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.aq,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.at,x,C.b2,x,x,x,x),A.a([A.cx(C.cV,x,x,new B.cEL(d),x,x),A.bG(C.dA,new B.cEM(d,w),x)],y.p),x)},
$S:19}
B.cEL.prototype={
$0(){return A.am(this.a,!1).bu()},
$S:0}
B.cEM.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.C(this.b.a.a)
w=A.aW(w," ","")
return x.af(A.eY(A.aW(w,",",".")))},
$S:0}
B.cEW.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bp(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bp(2100,1,1,0,0):x)},
$S:z+2}
B.bNN.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bNP.prototype={
$0(){return A.bZ(null,new B.bNQ(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNQ.prototype={
$1(d){return new B.Xp(this.a.e.a,null)},
$S:z+10}
B.bNO.prototype={
$0(){return B.alh(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKD.prototype={
$0(){var x=this.a
A.am(x,!1).bu()
A.ai(x).aw("/bookings",null,y.X)},
$S:0}
B.bKC.prototype={
$3(d,e,f){return A.kM(A.b6(C.hJ,this.a,null,null,null),C.t,!0)},
$S:100}
B.bYd.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.amH().gaY(),y.h).Pd(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a2(A.c1(v,v,v,v,v,C.z,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.T,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bY9.prototype={
$0(){var x=this
return A.rP(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bYa.prototype={
$0(){return A.ai(this.a).aw("/bookings",null,y.X)},
$S:0}
B.bYb.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bYc.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bIh.prototype={
$0(){return this.a.p(new B.bIg())},
$S:0}
B.bIg.prototype={
$0(){},
$S:0}
B.bIi.prototype={
$0(){return this.a.p(new B.bIf())},
$S:0}
B.bIf.prototype={
$0(){},
$S:0}
B.bI3.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bI4.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bIe.prototype={
$1(d){return C.f.aW(C.j.k(d),2,"0")},
$S:39}
B.bI9.prototype={
$0(){return A.am(this.a,!1).bu()},
$S:0}
B.bIa.prototype={
$1(d){var x=this.a
return x.p(new B.bI8(x,d))},
$S:96}
B.bI8.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bIb.prototype={
$0(){var x=this.a
return x.p(new B.bI7(x))},
$S:0}
B.bI7.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bIc.prototype={
$0(){var x=this.a
return x.p(new B.bI6(x))},
$S:0}
B.bI6.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bId.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(T.am9(v.b,A.bp(A.ay(t)-1,1,1,0,0),r,A.bp(A.ay(t)+5,1,1,0,0)),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bI5(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bI5.prototype={
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
if(w==null)w=A.bp(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bp(2100,1,1,0,0):x)},
$S:z+2}
B.bNU.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bNV.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bNW.prototype={
$0(){var x=this.c
return B.alh(this.a,this.b,x.a,x.d)},
$S:0}
B.bNX.prototype={
$1(d){return this.a.a0(0,$.amH().gaY(),y.h).Pd(this.b.a)},
$S:131}
B.bJe.prototype={
$1(d){return d.c},
$S:148}
B.bJk.prototype={
$2(d,e){return A.je(d,this.a.lj(e))},
$S:41}
B.bJh.prototype={
$0(){return D.bMQ},
$S:91}
B.bJg.prototype={
$2(d,e){return A.SF(A.a([new A.iq("Tentar outra vez",new B.bJ7(this.a),!1,null)],y.p),C.fu,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1303}
B.bJ7.prototype={
$0(){return this.a.al($.d21())},
$S:0}
B.bJf.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bJi(g),e=new B.bJj(g,this.b),d=J.cb(a4),a0=d.cZ(a4,0,new B.bJ8()),a1=d.cZ(a4,0,new B.bJ9(f)),a2=d.cZ(a4,0,new B.bJa(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ap(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.Ck(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aM(a1,!1)
w=a0>0
v=w?"de "+A.aM(a0,!1):"gastos"
u=w?C.k.ah(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aJ(a1/a0*100)+"% dos tetos":""
x=A.vm(i,""+t+" "+r+w,"Todos os eventos",C.hO,u,v,x)
v=y.p
u=A.a([new G.SG(A.a([new G.xq("Gasto",A.aM(a1,!1),h),new G.xq("Por pagar",A.aM(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eB(a4,0,y.A),r=J.ap(t.a),q=t.b,t=new A.c4(r,q,A.u(t).i("c4<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.a0(q+n,r.gE(r)):A.al(A.c6())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iN)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a3,i,i,C.ab,i,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aM(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aM(j[3]+e.$1(j[0]),!1))}n=A.x(A.a([n,C.aX,A.h(C.e.a1(k," \xb7 "),i,i,i,i,C.O,i,i,i)],v),C.H,C.h,C.l,0,C.u)
k=o.a.a
l.push(new A.hA(A.z(i,A.O(A.a([new A.bI(1,C.ar,n,i),C.ah,A.h(A.aM(k[1]+f.$1(k[0]),!1),i,i,i,i,C.ab,i,i,i),C.bk,C.m0],v),C.v,C.h,C.l,0,i,i),C.r,C.ao,C.d3,i,i,i,i,C.cn,i,i,i),new B.bJb(o,g),i,i))
C.e.n(w,l)}return A.x(A.a([x,new A.dU("N\xfameros",i,u,16,i),new A.dU("Por evento \xb7 "+d,i,w,16,i),D.aC1],v),C.G,C.h,C.l,0,C.u)},
$S:1304}
B.bJi.prototype={
$1(d){return J.da(this.a.e,new B.bJ5(d)).cZ(0,0,new B.bJ6())},
$S:192}
B.bJ5.prototype={
$1(d){return d.b===this.a&&d.x!==C.eQ},
$S:60}
B.bJ6.prototype={
$2(d,e){return d+e.w},
$S:484}
B.bJj.prototype={
$1(d){return J.da(this.a.e,new B.bJc(d)).cZ(0,0,new B.bJd(this.b))},
$S:192}
B.bJc.prototype={
$1(d){return d.b===this.a&&d.x!==C.eQ},
$S:60}
B.bJd.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:484}
B.bJ8.prototype={
$2(d,e){return d+e.a[2]},
$S:261}
B.bJ9.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:261}
B.bJa.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:261}
B.bJb.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aZp.prototype={
$0(){return A.ai(this.a).aw("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKr","d_4",15)
w(B,"dKq","drk",16)
v(B.DR.prototype,"giP","d8",4)
var t
u(t=B.ac9.prototype,"gaqC","Ur",5)
v(t,"gaSP","QU",6)
v(B.abO.prototype,"gaU0","aU1",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cIf,B.cIb,B.cIc,B.cId,B.cIe,B.b63,B.b64,B.b60,B.b62,B.bLy,B.bLf,B.bLg,B.bLe,B.bLn,B.bLo,B.bLx,B.bLq,B.cEN,B.bNN,B.bNQ,B.bKC,B.bYd,B.bI3,B.bIe,B.bIa,B.bNR,B.bNS,B.bNU,B.bNV,B.bNX,B.bJe,B.bJf,B.bJi,B.bJ5,B.bJj,B.bJc])
x(A.L,[B.DH,B.b4p,B.A7,B.MA,B.a89,B.aCM])
x(A.cL,[B.b4q,B.bLd,B.bLp,B.cEW,B.bNT,B.bJk,B.bJg,B.bJ6,B.bJd,B.bJ8,B.bJ9,B.bJa])
w(B.DR,A.fg)
x(A.bQ,[B.b61,B.bLh,B.bLi,B.bLz,B.bLr,B.bLs,B.bLm,B.bLt,B.bLl,B.bLu,B.bLk,B.bLv,B.bLj,B.bLw,B.cEL,B.cEM,B.bNP,B.bNO,B.bKD,B.bY9,B.bYa,B.bYb,B.bYc,B.bIh,B.bIg,B.bIi,B.bIf,B.bI4,B.bI9,B.bI8,B.bIb,B.bI7,B.bIc,B.bI6,B.bId,B.bI5,B.bNW,B.bJh,B.bJ7,B.bJb,B.aZp])
w(B.ac8,A.f3)
w(B.a17,A.dA)
w(B.ac9,A.du)
x(A.J,[B.aQn,B.aE9,B.aDH,B.XO,B.aix,B.ao4])
x(A.ex,[B.aEa,B.aGY,B.Xp,B.aCR])
w(B.NX,A.G)
w(B.abO,A.Y)})()
A.bs(b.typeUniverse,JSON.parse('{"DR":{"fg":["A7"]},"a17":{"G":[],"e":[],"f":[]},"NX":{"G":[],"e":[],"f":[]},"Xp":{"G":[],"e":[],"f":[]},"ac9":{"Y":["a17"]},"aQn":{"J":[],"e":[],"f":[]},"aE9":{"J":[],"e":[],"f":[]},"aEa":{"G":[],"e":[],"f":[]},"aDH":{"J":[],"e":[],"f":[]},"aGY":{"G":[],"e":[],"f":[]},"XO":{"J":[],"e":[],"f":[]},"abO":{"Y":["NX"]},"aix":{"J":[],"e":[],"f":[]},"aCR":{"G":[],"e":[],"f":[]},"ao4":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("az<fd>"),k:x("az<t<rZ>>"),u:x("az<t<fQ>>"),o:x("az<t<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>>"),y:x("az<a5<c,t<c>>>"),x:x("zI"),b:x("uR"),d:x("t3"),Z:x("op"),v:x("eg"),_:x("i5"),h:x("DR"),g:x("A7"),D:x("r<DH>"),r:x("r<i5>"),Q:x("r<xq>"),F:x("r<em>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>"),E:x("r<a89>"),c:x("r<MA>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fQ>"),t:x("t<fp>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>"),P:x("a5<c,@>"),w:x("di"),A:x("+eventId,spentByHand,total,unpaidByHand(c,S,S,S)"),e:x("lQ"),N:x("c"),B:x("aCM"),q:x("dp"),i:x("S"),z:x("@"),S:x("v"),X:x("L?"),T:x("c?"),I:x("S?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.agz=new A.aP(0,1/0,32,1/0)
D.avj=new A.a2(8,5,6,5)
D.c9z=new A.D("Prazo",null,C.ab,null,null,null,null,null,null,null,null)
D.aAU=new A.bI(1,C.ar,D.c9z,null)
D.bAi=x([],y.r)
D.aB0=new B.A7(!1,D.bAi)
D.aC_=new A.kR("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aC1=new A.kR("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aCa=new A.kR("Sem pagamentos nesta vista.",8,null)
D.aFN=new A.dB(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bu,null,null,C.bu,C.bu,!0,null,null,null,null)
D.aG8=new A.dB(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bu,null,null,C.bu,C.bu,!0,null,null,null,null)
D.aGl=new A.dB(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aIb=new A.ey("Pago",C.dg,null)
D.aIi=new A.ey("Por pagar",C.hM,null)
D.aIp=new A.mf("Or\xe7amento","Todos os teus eventos",null)
D.aIv=new A.mf("Or\xe7amento",null,null)
D.bzv=x(["catering"],y.s)
D.bAA=x([],y.D)
D.bAB=x([],y.n)
D.bB_=x(["flowers_decor"],y.s)
D.bCy=x(["music_dj","bands_musicians"],y.s)
D.bD7=x(["photography"],y.s)
D.bEk=x(["venue"],y.s)
D.cav=new A.D("A despesa precisa de um t\xedtulo",null,C.mK,null,null,null,null,null,null,null,null)
D.bLR=new A.R(V.Oh,D.cav,null)
D.aFB=new A.ts("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kN,null)
D.bMb=new A.R(C.fX,D.aFB,null)
D.bMQ=new A.R(Q.vg,C.eD,null)
D.bZt=new A.vZ(!1,6,!0,null)
D.c5f=new A.P(!0,C.A,null,null,null,null,14,C.de,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7p=new A.P(!0,null,null,null,null,null,null,C.de,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab8=new A.P(!0,C.A,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cdv=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c4,null,null,null,null,null,null,null,null)
D.cdT=new A.D("Nova despesa",null,C.bl,null,null,null,null,null,null,null,null)
D.cdW=new A.D("\u20ac",null,D.ab8,null,null,null,null,null,null,null,null)
D.cga=new A.D("Indica um valor v\xe1lido",null,C.mK,null,null,null,null,null,null,null,null)
D.cis=new A.D("VALOR",null,C.aO,null,null,null,null,null,null,null,null)
D.JC=new B.ac8(0,"all")
D.acH=new B.ac8(1,"paid")
D.acI=new B.ac8(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXK","d21",()=>C.bX.$1$1(new B.cIf(),y.m))
x($,"dYz","amH",()=>A.n1(B.dKq(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["5DhBtVeDZpygXfAjJ/GtcSWeCQ4="]=a.current})($__dart_deferred_initializers__);