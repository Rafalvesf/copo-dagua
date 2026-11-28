((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,Q,E,R,S,F,G,T,H,K,U,V,W,I,X,B={cI0:function cI0(){},cHX:function cHX(){},cHY:function cHY(){},cHZ:function cHZ(){},cI_:function cI_(){},
dJn(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DH(x[v]))
return new B.b4k(d.b,u)},
DH:function DH(d){this.a=d},
b4k:function b4k(d,e){this.a=d
this.b=e},
b4l:function b4l(){},
cZR(d){var x="category",w="due_date",v=J.a7(d),u=A.Z(v.h(d,"id")),t=A.Z(v.h(d,"wedding_id")),s=A.Z(v.h(d,"title")),r=B.dFG(B.dez(A.C(v.h(d,x)))),q=B.dez(A.C(v.h(d,x))),p=A.dt(v.h(d,"amount")),o=v.h(d,w)==null?null:A.db(A.Z(v.h(d,w)))
v=A.dY(v.h(d,"paid"))
return new H.i5(u,t,s,r,q,p,o,v===!0)},
dez(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dFG(d){var x
A:{if("venue"===d){x=E.yj
break A}if("catering"===d){x=E.yf
break A}if("photography"===d){x=E.yg
break A}if("music_dj"===d||"bands_musicians"===d){x=E.yh
break A}if("flowers_decor"===d){x=E.yi
break A}x=null
break A}return x},
dr6(){return new B.DR()},
A7:function A7(d,e){this.a=d
this.b=e},
b5Z:function b5Z(){},
b6_:function b6_(){},
DR:function DR(){this.b=this.x=null},
b5W:function b5W(){},
b5X:function b5X(d,e){this.a=d
this.b=e},
b5Y:function b5Y(d){this.a=d},
CF(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$CF=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.alk(),$async$CF)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").ak(0,"partner_name_1, partner_name_2").V("id",d).cm(),$async$CF)
case 4:s=f
x=5
return A.d(u.b.P("bookings").ak(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cV(0,"event_date",!1),$async$CF)
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
return A.d(t.P("payments").ak(0,"booking_id, type, status, amount, paid_at, due_at, provider").dO("booking_id",u).tM(0,"created_at"),$async$CF)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").ak(0,"title, category, amount, due_date, paid").V("wedding_id",d).tM(0,"due_date"),$async$CF)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").ak(0,"name, amount").V("wedding_id",d).tM(0,"position"),$async$CF)
case 11:o=f
x=12
return A.d(u.b.P("budgets").ak(0,"total").V("wedding_id",d).cm(),$async$CF)
case 12:n=f
m=F.cZC(F.cF8(s),"Gastos e parceiros",r,q,!1)
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
if(k==null)k=0}t.push(new B.a85(i,k))}l=n==null?null:F.d_9(J.i(n,"total"))
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
a85:function a85(d,e){this.a=d
this.b=e},
dop(){return new B.a13(null)},
aUL(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUL=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a9(f,0)
x=3
return A.d(A.fV(!0,new B.cEy(e,new A.aF(new A.bE(u,C.aH,C.az),$.aa())),d,y.i),$async$aUL)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUL,w)},
ald(d,e,f,g){return B.dFt(d,e,f,g)},
dFt(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$ald=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUL(d,"Teto para "+f,g),$async$ald)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CQ().gaY(),y.x).Pe(f,r),$async$ald)
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
return A.m($async$ald,w)},
dcC(d){var x=A.U(d,y._)
C.e.cB(x,new B.cEH())
return x},
dd5(d){var x=C.f.aX(C.j.k(A.aA(d)),2,"0"),w=C.f.aX(C.j.k(A.ao(d)),2,"0"),v=A.az(d)===A.az(new A.ac(Date.now(),0,!1))?"":"/"+A.az(d)
return x+"/"+w+v},
cYZ(d){var x,w,v,u
if(d===C.k.fG(d))x=C.k.a9(d,0)
else{w=C.k.a9(d,2)
x=A.aY(w,".",",")}v=x.split(",")
u=A.CM(v[0],A.aT("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHZ(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
ac4:function ac4(d,e){this.a=d
this.b=e},
a13:function a13(d){this.a=d},
ac5:function ac5(d){var _=this
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
cEy:function cEy(d,e){this.a=d
this.b=e},
cEw:function cEw(d){this.a=d},
cEx:function cEx(d,e){this.a=d
this.b=e},
cEH:function cEH(){},
aQk:function aQk(d,e,f){this.c=d
this.d=e
this.a=f},
aE7:function aE7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aE8:function aE8(d,e){this.e=d
this.a=e},
bND:function bND(){},
bNF:function bNF(d,e){this.a=d
this.b=e},
bNG:function bNG(d){this.a=d},
bNE:function bNE(d,e,f){this.a=d
this.b=e
this.c=f},
aDF:function aDF(d,e){this.c=d
this.a=e},
bKy:function bKy(d){this.a=d},
bKx:function bKx(d){this.a=d},
aGW:function aGW(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bY3:function bY3(d,e){this.a=d
this.b=e},
bY_:function bY_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bY0:function bY0(d){this.a=d},
bY1:function bY1(d,e){this.a=d
this.b=e},
bY2:function bY2(d,e){this.a=d
this.b=e},
XN:function XN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCK:function aCK(d,e,f,g,h){var _=this
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
abK:function abK(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bIc:function bIc(d){this.a=d},
bIb:function bIb(){},
bId:function bId(d){this.a=d},
bIa:function bIa(){},
bHZ:function bHZ(){},
bI_:function bI_(d){this.a=d},
bI9:function bI9(){},
bI4:function bI4(d){this.a=d},
bI5:function bI5(d){this.a=d},
bI3:function bI3(d,e){this.a=d
this.b=e},
bI6:function bI6(d){this.a=d},
bI2:function bI2(d){this.a=d},
bI7:function bI7(d){this.a=d},
bI1:function bI1(d){this.a=d},
bI8:function bI8(d,e){this.a=d
this.b=e},
bI0:function bI0(d,e){this.a=d
this.b=e},
Xo:function Xo(d,e){this.e=d
this.a=e},
bNH:function bNH(d){this.a=d},
bNI:function bNI(d){this.a=d},
bNJ:function bNJ(){},
bNK:function bNK(){},
bNL:function bNL(d){this.a=d},
bNM:function bNM(d,e,f){this.a=d
this.b=e
this.c=f},
bNN:function bNN(d,e){this.a=d
this.b=e},
ais:function ais(d,e,f){this.c=d
this.d=e
this.a=f},
aCP:function aCP(d,e,f){this.e=d
this.f=e
this.a=f},
bJ9:function bJ9(){},
bJf:function bJf(d){this.a=d},
bJc:function bJc(){},
bJb:function bJb(d){this.a=d},
bJ2:function bJ2(d){this.a=d},
bJa:function bJa(d,e,f){this.a=d
this.b=e
this.c=f},
bJd:function bJd(d){this.a=d},
bJ0:function bJ0(d){this.a=d},
bJ1:function bJ1(){},
bJe:function bJe(d,e){this.a=d
this.b=e},
bJ7:function bJ7(d){this.a=d},
bJ8:function bJ8(d){this.a=d},
bJ3:function bJ3(){},
bJ4:function bJ4(d){this.a=d},
bJ5:function bJ5(d){this.a=d},
bJ6:function bJ6(d,e){this.a=d
this.b=e},
ao2:function ao2(d,e){this.c=d
this.a=e},
aZk:function aZk(d){this.a=d},
dhA(d){var x
switch(d){case E.yj:x=D.bEg
break
case E.yf:x=D.bzr
break
case E.yg:x=D.bD3
break
case E.yh:x=D.bCu
break
case E.yi:x=D.bAW
break
default:x=C.a8
break}return x}},D,L,Y
J=c[1]
A=c[0]
C=c[2]
M=c[221]
N=c[190]
O=c[207]
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
B.b4k.prototype={
gq5(){return C.e.cZ(this.b,0,new B.b4l())},
gaD5(){var x=this.a
return x===0?0:C.k.ah(this.gq5()/x,0,1)}}
B.A7.prototype={
gbBM(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5Z(),w),w.i("B.E"))
return x},
gbC7(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b6_(),w),w.i("B.E"))
return x},
aya(d,e){var x=e==null?this.a:e
return new B.A7(x,d==null?this.b:d)},
it(d){return this.aya(null,d)},
axS(d){return this.aya(d,null)}}
B.DR.prototype={
d8(){var x=y.T,w=this.x=A.eT(this).H(A.cJ($.cr(),new B.b5W(),y.v,x),x)
if(w!=null)A.jl(new B.b5X(this,w),y.H)
return D.aAZ},
c1(d,e){return this.bz9(0,e)},
bz9(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$c1=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).it(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").cn(0).V("wedding_id",e).cV(0,"created_at",!0),$async$c1)
case 2:v.sa4(0,new t.A7(s,r.d9(g,B.dKd(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$c1,w)},
Wc(d){return this.boZ(d)},
boZ(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Wc=A.j(function(e,f){if(e===1)return A.k(f,w)
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
u.j(0,"due_date",t==null?null:C.e.gL(t.ck().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.dd(0,u).cn(0).dS(0),$async$Wc)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cZR(s))
v.sa4(0,r.axS(u))
return A.l(null,w)}})
return A.m($async$Wc,w)},
Pb(d){return this.bEI(d)},
bEI(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Pb=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.ln(v.ga4(0).b,new B.b5Y(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bi(0,A.T(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).ck()],u,u)).V("id",d).cn(0).dS(0),$async$Pb)
case 2:t=l.cZR(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.axS(m))
return A.l(null,w)}})
return A.m($async$Pb,w)}}
B.MA.prototype={}
B.a85.prototype={
gaq(d){return this.a}}
B.ac4.prototype={
I(){return"_BudgetFilter."+this.b}}
B.a13.prototype={
R(){return new B.ac5(D.JC)}}
B.ac5.prototype={
Up(d){return this.beF(d)},
beF(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Up=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bL9(u))
x=1
break}u.p(new B.bLa(u))
t=u.gS()
s=$.cr()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gaY(),y.Z).ak(0,d),$async$Up)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Up,w)},
ae(){this.ao()
A.jl(new B.bLr(this),y.H)},
QS(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$QS=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.amF()
m=y.h
l=o.a0(0,n.gaY(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CQ(),y.b).b
s=t==null?null:t.b
r=C.e.cZ(o.a0(0,n,y.g).b,0,new B.bL5())
t=o.a0(0,$.cr(),y.v).b
q=t==null?null:t.gcD()
t=u.c
t.toString
x=3
return A.d(A.bZ(null,new B.bL6(q,s,new B.bL7(),r),!1,t,!0,!0,null,y.B),$async$QS)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gaY(),m)
n=p.a
m=p.b
t=p.c
o.Wc(new H.i5("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$QS,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.H($.CQ(),y.b),a3=a1.H($.I4(),y.d),a4=a1.H($.amF(),y.g),a5=a2.b,a6=a5==null?e:B.dJn(a5,a3.b)
a5=A.j2(a1.H($.j0(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iX
a5=y.T
w=a1.H(A.cJ($.cr(),new B.bLf(),y.v,a5),a5)
if(f.y){a1=f.gaqz()
return A.cQ(e,C.d2,A.ox(C.fd,40,A.a([C.h6,D.aIl,L.cWq(a1,e),new B.aCP(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.da(x,new B.bLg(w))
a1=a1.H($.uF(),y.l)
u=a1.gv(a1)
t=new B.bLp(u==null?C.fa:u)
a1=y._
a5=A.U(a4.gbBM(),a1)
for(s=v.a,r=J.cb(s),q=r.gX(s),p=v.b,o=v.$ti.i("hc<1>"),n=new A.hc(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i5("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbC7(0),a1)
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
n.push(new H.i5("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcC(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcC(q)
break
default:a1=e}h=C.e.cZ(q,0,new B.bLh())
s=a6==null
if(s)g=D.bAw
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bLi(),p),p.i("B.E"))}if(s)a1=D.bZp
else{s=f.gaSM()
r=y.p
p=A.a([new A.pw(A.a([new A.qV(s,"Nova despesa",e)],r),e),D.aIr,L.cWq(f.gaqz(),w),new B.aQk(a6,new B.bLj(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aM(a6.gq5(),!1)
n=a5.length
m=n===1?d:a0
l=A.aM(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.dU("N\xfameros",e,A.a([new G.SG(A.a([new G.xq("Gasto",o,""+n+" "+m),new G.xq("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.md(A.a([new A.el("Todos",l===D.JC,n+m,new B.bLk(f),e),new A.el("Pendentes",l===D.acH,m,new B.bLl(f),e),new A.el("Pagos",l===D.acG,n,new B.bLm(f),e)],y.F),4,!0,e),C.av],r))}o.push(new B.aGW(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.dU("Pagamentos",e,o,16,e))
a1=A.a([new A.kR(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aE7(g,f.x,new B.bLn(f),e))
p.push(new A.dU("Categorias",e,a1,16,e))
p.push(new A.dU("Exportar",e,A.a([new F.DS("Gastos e parceiros",!1,new B.bLo(f),e)],r),16,e))
a1=A.ox(C.fd,40,p,e,!0,!1)}return A.cQ(e,C.d2,a1,!0,e)},
J1(d){return this.aZN(d)},
aZN(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$J1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUL(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$J1)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a0(0,$.CQ().gaY(),y.x).a04(r),$async$J1)
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
return A.m($async$J1,w)}}
B.aQk.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gq5()>0?"Gastos "+A.aM(t.gq5(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vm(new A.iq("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hP,0,"por definir","\u2014")}x=C.k.aJ(t.gaD5()*100)
w=s-t.gq5()<0?"Acima do teto":"Ainda tens"
v=A.aM(Math.abs(s-t.gq5()),!1)
s=A.aM(s,!1)
u=t.gaD5()
return A.aX(A.vm(I.a2w,"Gastos "+A.aM(t.gq5(),!1)+" \xb7 "+x+"% do teto",w,C.hP,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aE7.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dM(s,0,A.eE(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aE8(r[w],null))
q=A.a([A.ff(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.iq(u,v.e,!0,null))}return A.y(q,C.G,C.h,C.l,0,C.u)}}
B.aE8.prototype={
bf(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(A.cJ($.cr(),new B.bND(),y.v,m),m)
if(l==null)x=C.rE
else{m=e.H($.d1P().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rE:m}m=A.a([],y.s)
for(w=B.dhA(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNF(this,d)
if(w)return A.k0(!1,!1,p,v,A.aM(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.or("P\xf4r teto",new B.bNE(this,d,e),!0,p))
w=A.aM(o.b,!1)
u=A.aM(n,!1)
s=y.p
q=A.a([A.aH(new A.TA(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aG,new B.ao2(m,p)],s))
return A.k0(!1,!1,p,v,w+" de "+u,o.a,A.y(q,C.dl,C.h,C.K,0,C.u))}}
B.aDF.prototype={
u(d){var x,w,v=null,u=$.au,t=$.fz.ce(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fX(r,A.aH(p==null?A.kM(A.b6(C.hK,u,v,v,v),C.t,!0):A.pr(p,144,new B.bKx(u),!1,C.bL,A.wB(),!1,v,v,v),48,48),C.ba)
p=A.h(q.b,1,C.a3,v,v,D.c5b,v,v,v)
x=A.b6(C.ib,u,v,v,14)
w=q.d
q=w>0?q.gQq()+" \xb7 "+A.aM(w,!1):q.gQq()
w=y.p
return new A.R(C.dp,A.aX(A.z(v,A.O(A.a([r,C.af,A.a4(A.y(A.a([p,C.iq,A.O(A.a([x,C.e8,new A.dc(1,C.b6,A.h(q,1,C.a3,v,v,A.aJ(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.br,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.w,C.h,C.l,0,v,v)],w),C.H,C.h,C.l,0,C.u),1),A.b6(C.id,u,v,v,v)],w),C.w,C.h,C.l,0,v,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.y),v,v,v,C.dY,v,v,v),new B.bKy(d),v),v)}}
B.aGW.prototype={
bf(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.SF(A.a([new A.iq("+ Nova despesa",this.f,!0,j)],y.p),C.fu,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aC8
x=new B.bY3(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+B.dd5(m)
v.push(new W.E3(new A.cq(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bY_(d,e,s,q),A.HZ(m)===C.fl,j))
continue}p=r?new B.bY0(d):new B.bY1(x,s)
v.push(new B.XN(s,p,r||s.w?j:new B.bY2(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XN&&v[k-1] instanceof B.XN)u.push(C.iM)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBY)
return A.y(i,C.G,C.h,C.l,0,C.u)}}
B.XN.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aM(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dd5(w))
v=C.e.a1(v," \xb7 ")
if(u)u=D.aI7
else{u=this.e
u=u!=null?new A.or("Marcar pago",u,!0,null):D.aIe}return A.k0(!1,!1,null,this.d,v,x.c,u)}}
B.aCK.prototype={}
B.NX.prototype={
R(){var x=$.aa()
return new B.abK(new A.aF(C.al,x),new A.aF(C.al,x))}}
B.abK.prototype={
ae(){var x=this
x.ao()
x.d.an(0,new B.bIc(x))
x.e.an(0,new B.bId(x))},
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a5()},
gaiI(){var x=C.f.C(this.e.a.a)
x=A.aY(x," ","")
return A.eY(A.aY(x,",","."))},
aTZ(){var x,w,v,u,t=this,s=t.gaiI()
t.p(new B.bI_(t))
x=C.f.C(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.af(new B.aCK(x,s,u,t.r,v))},
atn(d,e,f,g,h){var x=null,w=h?C.hw:x,v=y.p,u=A.a4(A.y(A.a([A.h(d,x,x,x,x,C.ab,x,x,x),C.aX,A.h(e,x,x,x,x,C.O,x,x,x)],v),C.H,C.h,C.l,0,C.u),1),t=f?C.bo:x,s=f?x:A.bC(C.kB,1.5),r=f?U.vT:x
return A.b7(x,!0,x,A.cM(C.by,A.z(x,A.O(A.a([u,A.z(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.aw),x,24,x,x,x,x,24)],v),C.w,C.h,C.l,0,x,x),C.r,x,C.d3,new A.I(x,x,w,x,x,x,C.y),x,x,x,C.hD,x,x,x),C.X,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aL),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bl6(d,e,f,g){return this.atn(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gaiI()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.C(x.a.a).length!==0&&j>0
w=new B.bI9()
t=y.w
s=A.ax(d,k,t).w
r=y.p
q=A.a([D.cdO],r)
q.push(A.h(l.a.c,k,k,k,k,C.O,k,k,k))
q=A.O(A.a([A.a4(A.y(q,C.H,C.h,C.l,0,C.u),1),A.b7(k,!0,k,A.cM(k,A.z(k,C.m0,C.r,k,k,C.cg,k,44,k,k,k,k,44),C.X,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bI4(d),k,k,k,k,k,k,!1,C.aL),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.w,C.h,C.l,0,k,k)
p=A.W(22)
o=A.a([D.cil,A.O(A.a([Y.d6e(A.cw(k,C.a8,!1,k,!0,C.z,k,A.cz(),l.e,k,k,k,k,k,2,D.aG5,C.X,!0,k,!0,k,!1,k,C.aF,k,k,k,k,C.fK,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.aq,k,k,k,k,k,k,k,k,k,k,k,D.ab7,!0,C.dG,k,C.b3,k,k,k,k)),C.bk,D.cdR],r),C.eT,C.bW,C.l,0,C.aM,k)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cYZ(v)+" no teto":"Passa o teto em "+B.cYZ(-v)
o.push(A.h(m,k,k,k,k,A.aJ(k,k,n?C.V:C.c2,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.cg3)
p=A.z(k,A.y(o,C.w,C.h,C.l,0,C.u),C.r,k,k,new A.I(C.a7,k,k,p,k,k,C.y),k,k,k,C.bh,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aP,k,k,k)
n=A.W(26)
m=l.x&&C.f.C(x.a.a).length===0?A.bC(C.c2,1.5):k
n=A.a([p,C.a1,new A.R(C.dp,o,k),A.z(C.bg,A.cw(k,C.a8,!1,k,!0,C.z,k,A.cz(),x,k,k,k,k,k,2,D.aFL,C.X,!0,k,!0,k,!1,k,C.aF,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.aq,k,k,k,k,k,k,k,k,k,k,k,C.fg,!0,C.at,k,C.hi,k,k,k,k),C.r,k,k,new A.I(C.a7,k,m,n,k,k,C.y),k,52,k,C.fY,k,k,k)],r)
if(l.x&&C.f.C(x.a.a).length===0)n.push(D.bLN)
n.push(C.a1)
n.push(new X.a1E(l.r,new B.bI5(l),k))
n.push(C.a1)
n.push(new A.R(C.dp,A.h("ESTADO",k,k,k,k,C.aP,k,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bl6("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bI6(l)),l.atn("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bI7(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.aA(p)))
m=l.f
m.toString
m=A.q(w.$1(A.ao(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.az(w)}o.push(A.b7(k,!0,k,A.cM(C.by,A.aH(A.O(A.a([D.aAS,A.h(w,k,k,k,k,C.ch,k,k,k),C.e8,C.m_],r),C.w,C.h,C.l,0,k,k),56,k),C.X,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bI8(l,d),k,k,k,k,k,k,!1,C.aL),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.z(k,A.y(o,C.w,C.h,C.l,0,C.u),C.r,k,k,new A.I(C.a7,k,k,x,k,k,C.y),k,k,k,C.cL,k,k,k))
n.push(C.a1)
n.push(D.cdq)
x=A.dR(A.y(n,C.G,C.h,C.l,0,C.u),C.z,k,C.ei,k,k,C.a2)
t=A.ax(d,C.b7,t).w
w=A.co(u?C.A:C.A.ce(0.35),k,k,C.t,k,k,C.ad,k,k,C.eK)
return new A.R(new A.a2(0,0,0,s.f.d),A.y(A.a([new A.R(C.jL,q,k),new A.dc(1,C.b6,x,k),new A.R(new A.a2(20,16,20,20+t.r.d),A.aH(A.bG(A.h(u?"Guardar \xb7 "+B.cYZ(j):"Guardar",k,k,k,k,k,k,k,k),l.gaTY(),w),52,k),k)],r),C.G,C.h,C.K,0,C.u),k)}}
B.Xo.prototype={
bf(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.CQ(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eV(new A.a6(j,new B.bNH(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.H($.amF(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNI(l),w),w.i("B.E"))
C.e.cB(v,new B.bNJ())
j=y.T
u=e.H(A.cJ($.cr(),new B.bNK(),y.v,j),j)
t=B.dhA(l.e.c)
if(u==null)s=K.FN
else{j=e.H($.aWA().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.FN
j=J.da(j,new B.bNL(t))
s=A.U(j,j.$ti.i("B.E"))}j=A.ax(d,k,y.w).w
w=A.bK(A.z(k,k,C.r,k,k,new A.I(C.bG,k,k,A.W(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.as(d).ok.r,k,k,k)
q=A.a4(new B.ais("Gasto",A.aM(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a1,r,C.aC,A.O(A.a([q,C.ah,A.a4(A.aX(new B.ais("Teto \xb7 tocar para mudar",p===0?"Definir":A.aM(p,!1),k),new B.bNM(d,e,x),k),1)],o),C.w,C.h,C.l,0,k,k)],o)
if(s.length!==0){w=A.a([C.bi,A.h("Contratado na app",k,k,k,k,A.as(d).ok.w,k,k,k),C.R],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aDF(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.h("Despesas",k,k,k,k,A.as(d).ok.w,k,k,k))
p.push(C.R)
w=v.length
if(w===0)p.push(D.bM7)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.hj,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aX(C.j.k(A.aA(q)),2,"0")+"/"+C.f.aX(C.j.k(A.ao(q)),2,"0")+"/"+A.az(q),k,k,k,k,k,k,k,k)
p.push(A.jp(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aM(m.f,!1),k,k,k,k,D.c7l,k,k,k),C.ag,new R.Dn(m.w,new B.bNN(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.JE,k)],o),C.w,C.h,C.K,0,k,k),k))}return A.bF(!0,new A.e8(new A.aP(0,1/0,0,j.a.b*0.8),A.cZ(p,k,O.Dl,k,k,!1,C.a2,!0),k),k,C.a_,!0)}}
B.ais.prototype={
u(d){var x=null,w=A.W(16)
return A.z(x,A.y(A.a([A.h(this.c,x,x,x,x,C.bd,x,x,x),C.av,A.h(this.d,x,x,x,x,P.aaU,x,x,x)],y.p),C.H,C.h,C.l,0,C.u),C.r,x,x,new A.I(C.a7,x,x,w,x,x,C.y),x,x,x,C.cK,x,x,x)}}
B.aCP.prototype={
bf(d,e){var x,w=y.t,v=e.H(A.cJ($.cr(),new B.bJ9(),y.v,w),w),u=e.H($.d1O(),y.o)
w=e.H($.uF(),y.l)
x=w.gv(w)
return A.hG(u,new B.bJa(this,new B.bJf(x==null?C.fa:x),v),new B.bJb(e),new B.bJc(),!1,!0,!1)}}
B.ao2.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.fz
s=new A.b2(999,999)
r=new A.bc(o.ce(0.25),1,C.ai,-1)
q=A.b6(C.ib,o,p,p,13)
t=A.z(p,A.O(A.a([q,M.za,new A.dc(1,C.b6,A.h(u,1,C.a3,p,p,new A.P(!0,o,p,p,p,p,14,C.de,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b6(C.id,o,p,p,16)],n),C.w,C.h,C.K,0,p,p),C.r,p,D.agy,new A.I(t,p,new A.dN(r,r,r,r),new A.cd(s,s,s,s),p,p,C.y),p,p,p,D.avh,p,p,p)
m.push(new A.ju(new A.n9(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hA(t,new B.aZk(d),p,p),p))}return A.e1(C.bf,m,C.r,C.bm,6,6)}}
var z=a.updateTypes(["x(i5)","S(S,i5)","v(i5,i5)","S(S,DH)","A7()","F<~>(c?)","F<~>()","NX(N)","x(DH)","F<lQ>()","Xo(N)","~(i5)","~()","x(nu)","x(rZ)","i5(a5<c,@>)","DR()"])
B.cI0.prototype={
$1(d){return this.aGn(d)},
aGn(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(A.cJ($.cr(),new B.cHX(),y.v,f),f)
f=J.a7(e)
if(f.gZ(e)){v=D.bAx
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.t();)u.push(t.gE(t).a)
t=$.Q()
s=t.b
s===$&&A.b()
r=y.G
q=s.P("budgets").ak(0,"wedding_id, total").dO("wedding_id",u).b6(new B.cHY(),r)
p=t.b.P("budget_categories").ak(0,"wedding_id, amount").dO("wedding_id",u).b6(new B.cHZ(),r)
o=t.b.P("expenses").ak(0,"wedding_id, amount, paid").dO("wedding_id",u).b6(new B.cI_(),r)
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
u.push(new A.aNz([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1299}
B.cHX.prototype={
$1(d){return d.c},
$S:143}
B.cHY.prototype={
$1(d){return d},
$S:31}
B.cHZ.prototype={
$1(d){return d},
$S:31}
B.cI_.prototype={
$1(d){return d},
$S:31}
B.b4l.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5Z.prototype={
$1(d){return d.w},
$S:z+0}
B.b6_.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5W.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.b5X.prototype={
$0(){return this.a.c1(0,this.b)},
$S:1}
B.b5Y.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bL9.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bLa.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bLr.prototype={
$0(){return this.a.gS().a0(0,$.CQ().gaY(),y.x).a_k(0).e7(new B.bLq())},
$S:1}
B.bLq.prototype={
$1(d){},
$S:11}
B.bL5.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bL7.prototype={
$1(d){return A.CM(C.k.a9(d,0),A.aT("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bL8(),null)+" \u20ac"},
$S:112}
B.bL8.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:41}
B.bL6.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a1(v," \xb7 ")
u=x&&u>0?u:null
return new B.NX(v,u,w.d,null)},
$S:z+7}
B.bLf.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bLg.prototype={
$1(d){return d.x!==C.eQ&&d.b===this.a},
$S:59}
B.bLp.prototype={
$2(d,e){return A.je(d,this.a.lj(e))},
$1(d){return this.$2(d,null)},
$S:1302}
B.bLh.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLi.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bLj.prototype={
$0(){return this.a.J1(this.b.a)},
$S:0}
B.bLk.prototype={
$0(){var x=this.a
return x.p(new B.bLe(x))},
$S:0}
B.bLe.prototype={
$0(){return this.a.w=D.JC},
$S:0}
B.bLl.prototype={
$0(){var x=this.a
return x.p(new B.bLd(x))},
$S:0}
B.bLd.prototype={
$0(){return this.a.w=D.acH},
$S:0}
B.bLm.prototype={
$0(){var x=this.a
return x.p(new B.bLc(x))},
$S:0}
B.bLc.prototype={
$0(){return this.a.w=D.acG},
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
$0(){return B.CF(this.a.gS().a0(0,$.cr(),y.v).b.a)},
$S:z+9}
B.cEy.prototype={
$1(d){var x=null,w=this.b
return new A.eU(A.h(this.a,x,x,x,x,x,x,x,x),A.cw(x,C.a8,!0,x,!0,C.z,x,A.cz(),w,x,x,x,x,x,2,D.aGi,C.X,!0,x,!0,x,!1,x,C.aF,x,x,x,x,C.fK,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.aq,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.at,x,C.b3,x,x,x,x),A.a([A.cv(C.cV,x,x,new B.cEw(d),x,x),A.bG(C.dA,new B.cEx(d,w),x)],y.p),x)},
$S:19}
B.cEw.prototype={
$0(){return A.am(this.a,!1).bv()},
$S:0}
B.cEx.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.C(this.b.a.a)
w=A.aY(w," ","")
return x.af(A.eY(A.aY(w,",",".")))},
$S:0}
B.cEH.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bp(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bp(2100,1,1,0,0):x)},
$S:z+2}
B.bND.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bNF.prototype={
$0(){return A.bZ(null,new B.bNG(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNG.prototype={
$1(d){return new B.Xo(this.a.e.a,null)},
$S:z+10}
B.bNE.prototype={
$0(){return B.ald(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKy.prototype={
$0(){var x=this.a
A.am(x,!1).bv()
A.ai(x).aw("/bookings",null,y.X)},
$S:0}
B.bKx.prototype={
$3(d,e,f){return A.kM(A.b6(C.hK,this.a,null,null,null),C.t,!0)},
$S:97}
B.bY3.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.amF().gaY(),y.h).Pb(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a2(A.c1(v,v,v,v,v,C.z,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.T,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bY_.prototype={
$0(){var x=this
return A.rO(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bY0.prototype={
$0(){return A.ai(this.a).aw("/bookings",null,y.X)},
$S:0}
B.bY1.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bY2.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bIc.prototype={
$0(){return this.a.p(new B.bIb())},
$S:0}
B.bIb.prototype={
$0(){},
$S:0}
B.bId.prototype={
$0(){return this.a.p(new B.bIa())},
$S:0}
B.bIa.prototype={
$0(){},
$S:0}
B.bHZ.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:41}
B.bI_.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bI9.prototype={
$1(d){return C.f.aX(C.j.k(d),2,"0")},
$S:40}
B.bI4.prototype={
$0(){return A.am(this.a,!1).bv()},
$S:0}
B.bI5.prototype={
$1(d){var x=this.a
return x.p(new B.bI3(x,d))},
$S:104}
B.bI3.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bI6.prototype={
$0(){var x=this.a
return x.p(new B.bI2(x))},
$S:0}
B.bI2.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bI7.prototype={
$0(){var x=this.a
return x.p(new B.bI1(x))},
$S:0}
B.bI1.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bI8.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(T.am6(v.b,A.bp(A.az(t)-1,1,1,0,0),r,A.bp(A.az(t)+5,1,1,0,0)),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bI0(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bI0.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNH.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNI.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNJ.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bp(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bp(2100,1,1,0,0):x)},
$S:z+2}
B.bNK.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bNL.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bNM.prototype={
$0(){var x=this.c
return B.ald(this.a,this.b,x.a,x.d)},
$S:0}
B.bNN.prototype={
$1(d){return this.a.a0(0,$.amF().gaY(),y.h).Pb(this.b.a)},
$S:128}
B.bJ9.prototype={
$1(d){return d.c},
$S:143}
B.bJf.prototype={
$2(d,e){return A.je(d,this.a.lj(e))},
$S:42}
B.bJc.prototype={
$0(){return D.bMM},
$S:86}
B.bJb.prototype={
$2(d,e){return A.SF(A.a([new A.iq("Tentar outra vez",new B.bJ2(this.a),!1,null)],y.p),C.fu,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1303}
B.bJ2.prototype={
$0(){return this.a.al($.d1O())},
$S:0}
B.bJa.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bJd(g),e=new B.bJe(g,this.b),d=J.cb(a4),a0=d.cZ(a4,0,new B.bJ3()),a1=d.cZ(a4,0,new B.bJ4(f)),a2=d.cZ(a4,0,new B.bJ5(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ap(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.Cj(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aM(a1,!1)
w=a0>0
v=w?"de "+A.aM(a0,!1):"gastos"
u=w?C.k.ah(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aJ(a1/a0*100)+"% dos tetos":""
x=A.vm(i,""+t+" "+r+w,"Todos os eventos",C.hP,u,v,x)
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
if(n.a>0)l.push(C.iM)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a3,i,i,C.ab,i,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aM(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aM(j[3]+e.$1(j[0]),!1))}n=A.y(A.a([n,C.aX,A.h(C.e.a1(k," \xb7 "),i,i,i,i,C.O,i,i,i)],v),C.H,C.h,C.l,0,C.u)
k=o.a.a
l.push(new A.hA(A.z(i,A.O(A.a([new A.bI(1,C.ar,n,i),C.ah,A.h(A.aM(k[1]+f.$1(k[0]),!1),i,i,i,i,C.ab,i,i,i),C.bk,C.m_],v),C.w,C.h,C.l,0,i,i),C.r,C.ao,C.d3,i,i,i,i,C.cn,i,i,i),new B.bJ6(o,g),i,i))
C.e.n(w,l)}return A.y(A.a([x,new A.dU("N\xfameros",i,u,16,i),new A.dU("Por evento \xb7 "+d,i,w,16,i),D.aC_],v),C.G,C.h,C.l,0,C.u)},
$S:1304}
B.bJd.prototype={
$1(d){return J.da(this.a.e,new B.bJ0(d)).cZ(0,0,new B.bJ1())},
$S:165}
B.bJ0.prototype={
$1(d){return d.b===this.a&&d.x!==C.eQ},
$S:59}
B.bJ1.prototype={
$2(d,e){return d+e.w},
$S:459}
B.bJe.prototype={
$1(d){return J.da(this.a.e,new B.bJ7(d)).cZ(0,0,new B.bJ8(this.b))},
$S:165}
B.bJ7.prototype={
$1(d){return d.b===this.a&&d.x!==C.eQ},
$S:59}
B.bJ8.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:459}
B.bJ3.prototype={
$2(d,e){return d+e.a[2]},
$S:233}
B.bJ4.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:233}
B.bJ5.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:233}
B.bJ6.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aZk.prototype={
$0(){return A.ai(this.a).aw("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKd","cZR",15)
w(B,"dKc","dr6",16)
v(B.DR.prototype,"giP","d8",4)
var t
u(t=B.ac5.prototype,"gaqz","Up",5)
v(t,"gaSM","QS",6)
v(B.abK.prototype,"gaTY","aTZ",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cI0,B.cHX,B.cHY,B.cHZ,B.cI_,B.b5Z,B.b6_,B.b5W,B.b5Y,B.bLq,B.bL7,B.bL8,B.bL6,B.bLf,B.bLg,B.bLp,B.bLi,B.cEy,B.bND,B.bNG,B.bKx,B.bY3,B.bHZ,B.bI9,B.bI5,B.bNH,B.bNI,B.bNK,B.bNL,B.bNN,B.bJ9,B.bJa,B.bJd,B.bJ0,B.bJe,B.bJ7])
x(A.L,[B.DH,B.b4k,B.A7,B.MA,B.a85,B.aCK])
x(A.cL,[B.b4l,B.bL5,B.bLh,B.cEH,B.bNJ,B.bJf,B.bJb,B.bJ1,B.bJ8,B.bJ3,B.bJ4,B.bJ5])
w(B.DR,A.fg)
x(A.bQ,[B.b5X,B.bL9,B.bLa,B.bLr,B.bLj,B.bLk,B.bLe,B.bLl,B.bLd,B.bLm,B.bLc,B.bLn,B.bLb,B.bLo,B.cEw,B.cEx,B.bNF,B.bNE,B.bKy,B.bY_,B.bY0,B.bY1,B.bY2,B.bIc,B.bIb,B.bId,B.bIa,B.bI_,B.bI4,B.bI3,B.bI6,B.bI2,B.bI7,B.bI1,B.bI8,B.bI0,B.bNM,B.bJc,B.bJ2,B.bJ6,B.aZk])
w(B.ac4,A.f3)
w(B.a13,A.dA)
w(B.ac5,A.du)
x(A.J,[B.aQk,B.aE7,B.aDF,B.XN,B.ais,B.ao2])
x(A.ex,[B.aE8,B.aGW,B.Xo,B.aCP])
w(B.NX,A.G)
w(B.abK,A.Y)})()
A.bs(b.typeUniverse,JSON.parse('{"DR":{"fg":["A7"]},"a13":{"G":[],"e":[],"f":[]},"NX":{"G":[],"e":[],"f":[]},"Xo":{"G":[],"e":[],"f":[]},"ac5":{"Y":["a13"]},"aQk":{"J":[],"e":[],"f":[]},"aE7":{"J":[],"e":[],"f":[]},"aE8":{"G":[],"e":[],"f":[]},"aDF":{"J":[],"e":[],"f":[]},"aGW":{"G":[],"e":[],"f":[]},"XN":{"J":[],"e":[],"f":[]},"abK":{"Y":["NX"]},"ais":{"J":[],"e":[],"f":[]},"aCP":{"G":[],"e":[],"f":[]},"ao2":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ay<fd>"),k:x("ay<t<rZ>>"),u:x("ay<t<fQ>>"),o:x("ay<t<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>>"),y:x("ay<a5<c,t<c>>>"),x:x("zI"),b:x("uR"),d:x("t3"),Z:x("op"),v:x("ef"),_:x("i5"),h:x("DR"),g:x("A7"),D:x("r<DH>"),r:x("r<i5>"),Q:x("r<xq>"),F:x("r<el>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>"),E:x("r<a85>"),c:x("r<MA>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fQ>"),t:x("t<fo>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>"),P:x("a5<c,@>"),w:x("di"),A:x("+eventId,spentByHand,total,unpaidByHand(c,S,S,S)"),e:x("lQ"),N:x("c"),B:x("aCK"),q:x("dp"),i:x("S"),z:x("@"),S:x("v"),X:x("L?"),T:x("c?"),I:x("S?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.agy=new A.aP(0,1/0,32,1/0)
D.avh=new A.a2(8,5,6,5)
D.c9u=new A.D("Prazo",null,C.ab,null,null,null,null,null,null,null,null)
D.aAS=new A.bI(1,C.ar,D.c9u,null)
D.bAe=x([],y.r)
D.aAZ=new B.A7(!1,D.bAe)
D.aBY=new A.kR("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aC_=new A.kR("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aC8=new A.kR("Sem pagamentos nesta vista.",8,null)
D.aFL=new A.dL(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bA,null,null,C.bA,C.bA,!0,null,null,null,null)
D.aG5=new A.dL(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bA,null,null,C.bA,C.bA,!0,null,null,null,null)
D.aGi=new A.dL(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aI7=new A.ey("Pago",C.dg,null)
D.aIe=new A.ey("Por pagar",C.hN,null)
D.aIl=new A.me("Or\xe7amento","Todos os teus eventos",null)
D.aIr=new A.me("Or\xe7amento",null,null)
D.bzr=x(["catering"],y.s)
D.bAw=x([],y.D)
D.bAx=x([],y.n)
D.bAW=x(["flowers_decor"],y.s)
D.bCu=x(["music_dj","bands_musicians"],y.s)
D.bD3=x(["photography"],y.s)
D.bEg=x(["venue"],y.s)
D.caq=new A.D("A despesa precisa de um t\xedtulo",null,C.mJ,null,null,null,null,null,null,null,null)
D.bLN=new A.R(V.Oh,D.caq,null)
D.aFz=new A.ts("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kN,null)
D.bM7=new A.R(C.fX,D.aFz,null)
D.bMM=new A.R(Q.vf,C.eD,null)
D.bZp=new A.vZ(!1,6,!0,null)
D.c5b=new A.P(!0,C.A,null,null,null,null,14,C.de,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7l=new A.P(!0,null,null,null,null,null,null,C.de,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab7=new A.P(!0,C.A,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cdq=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c6,null,null,null,null,null,null,null,null)
D.cdO=new A.D("Nova despesa",null,C.bl,null,null,null,null,null,null,null,null)
D.cdR=new A.D("\u20ac",null,D.ab7,null,null,null,null,null,null,null,null)
D.cg3=new A.D("Indica um valor v\xe1lido",null,C.mJ,null,null,null,null,null,null,null,null)
D.cil=new A.D("VALOR",null,C.aP,null,null,null,null,null,null,null,null)
D.JC=new B.ac4(0,"all")
D.acG=new B.ac4(1,"paid")
D.acH=new B.ac4(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXv","d1O",()=>C.bX.$1$1(new B.cI0(),y.m))
x($,"dYk","amF",()=>A.n_(B.dKc(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["oBMhBghTjsXu4K2J4mzINgEAqNs="]=a.current})($__dart_deferred_initializers__);