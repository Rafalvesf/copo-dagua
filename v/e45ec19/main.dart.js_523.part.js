((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cHv:function cHv(){},cHr:function cHr(){},cHs:function cHs(){},cHt:function cHt(){},cHu:function cHu(){},
dJK(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DF(x[v]))
return new B.b3W(d.b,u)},
DF:function DF(d){this.a=d},
b3W:function b3W(d,e){this.a=d
this.b=e},
b3X:function b3X(){},
cZT(d){var x="category",w="due_date",v=J.a6(d),u=A.a_(v.h(d,"id")),t=A.a_(v.h(d,"wedding_id")),s=A.a_(v.h(d,"title")),r=B.dFX(B.deJ(A.B(v.h(d,x)))),q=B.deJ(A.B(v.h(d,x))),p=A.dt(v.h(d,"amount")),o=v.h(d,w)==null?null:A.da(A.a_(v.h(d,w)))
v=A.dW(v.h(d,"paid"))
return new G.i6(u,t,s,r,q,p,o,v===!0)},
deJ(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dFX(d){var x
A:{if("venue"===d){x=E.xP
break A}if("catering"===d){x=E.xL
break A}if("photography"===d){x=E.xM
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xN
break A}if("flowers_decor"===d){x=E.xO
break A}x=null
break A}return x},
drn(){return new B.DQ()},
zW:function zW(d,e){this.a=d
this.b=e},
b5A:function b5A(){},
b5B:function b5B(){},
DQ:function DQ(){this.b=this.x=null},
b5x:function b5x(){},
b5y:function b5y(d,e){this.a=d
this.b=e},
b5z:function b5z(d){this.a=d},
Cy(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akT(),$async$Cy)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.S("events").an(0,"partner_name_1, partner_name_2").X("id",d).cl(),$async$Cy)
case 4:s=f
x=5
return A.d(u.b.S("bookings").an(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").X("wedding_id",d).cJ(0,"event_date",!1),$async$Cy)
case 5:r=f
u=A.a([],y.s)
for(t=J.ao(r);t.q();)u.push(A.a_(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.Q().b
t===$&&A.b()
x=9
return A.d(t.S("payments").an(0,"booking_id, type, status, amount, paid_at, due_at, provider").dG("booking_id",u).tu(0,"created_at"),$async$Cy)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.S("expenses").an(0,"title, category, amount, due_date, paid").X("wedding_id",d).tu(0,"due_date"),$async$Cy)
case 10:p=f
x=11
return A.d(u.b.S("budget_categories").an(0,"name, amount").X("wedding_id",d).tu(0,"position"),$async$Cy)
case 11:o=f
x=12
return A.d(u.b.S("budgets").an(0,"total").X("wedding_id",d).cl(),$async$Cy)
case 12:n=f
m=F.cZF(F.cEn(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ao(p);t.q();){l=t.gE(t)
k=J.a6(l)
j=k.h(l,"title")
j=J.cy(j==null?"":j)
i=k.h(l,"category")
i=J.cy(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.eU(A.p(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d3(A.p(g))
g=g==null?null:g.dJ()}u.push(new B.Mz(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ao(o);l.q();){k=l.gE(l)
j=J.a6(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eU(A.p(k))
if(k==null)k=0}t.push(new B.a80(i,k))}l=n==null?null:F.d_b(J.i(n,"total"))
v=new F.lV(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cy,w)},
Mz:function Mz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a80:function a80(d,e){this.a=d
this.b=e},
doJ(){return new B.D8(null)},
aUh(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUh=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.h2(!0,new B.cDM(e,new A.aF(new A.bE(u,C.aF,C.ax),$.aa())),d,y.i),$async$aUh)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUh,w)},
akM(d,e,f,g){return B.dFK(d,e,f,g)},
dFK(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akM=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUh(d,"Teto para "+f,g),$async$akM)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CJ().gaX(),y.x).Or(f,r),$async$akM)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a1(H.HT)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akM,w)},
dcJ(d){var x=A.U(d,y._)
C.e.cw(x,new B.cDW())
return x},
ddc(d){var x=C.f.aT(C.j.k(A.aD(d)),2,"0"),w=C.f.aT(C.j.k(A.aw(d)),2,"0"),v=A.aL(d)===A.aL(new A.ad(Date.now(),0,!1))?"":"/"+A.aL(d)
return x+"/"+w+v},
cZ2(d){var x,w,v,u
if(d===C.k.hB(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aX(w,".",",")}v=x.split(",")
u=A.CF(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHI(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abW:function abW(d,e){this.a=d
this.b=e},
D8:function D8(d){this.a=d},
abX:function abX(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKU:function bKU(d){this.a=d},
bKV:function bKV(d){this.a=d},
bLb:function bLb(d){this.a=d},
bLa:function bLa(){},
bKQ:function bKQ(){},
bKS:function bKS(){},
bKT:function bKT(){},
bKR:function bKR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bL_:function bL_(){},
bL0:function bL0(d){this.a=d},
bL9:function bL9(d){this.a=d},
bL1:function bL1(){},
bL2:function bL2(){},
bL3:function bL3(d,e){this.a=d
this.b=e},
bL4:function bL4(d){this.a=d},
bKZ:function bKZ(d){this.a=d},
bL5:function bL5(d){this.a=d},
bKY:function bKY(d){this.a=d},
bL6:function bL6(d){this.a=d},
bKX:function bKX(d){this.a=d},
bL7:function bL7(d){this.a=d},
bKW:function bKW(d){this.a=d},
bL8:function bL8(d){this.a=d},
cDM:function cDM(d,e){this.a=d
this.b=e},
cDK:function cDK(d){this.a=d},
cDL:function cDL(d,e){this.a=d
this.b=e},
cDW:function cDW(){},
aPT:function aPT(d,e,f){this.c=d
this.d=e
this.a=f},
aDT:function aDT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDU:function aDU(d,e){this.e=d
this.a=e},
bNm:function bNm(){},
bNo:function bNo(d,e){this.a=d
this.b=e},
bNp:function bNp(d){this.a=d},
bNn:function bNn(d,e,f){this.a=d
this.b=e
this.c=f},
aDq:function aDq(d,e){this.c=d
this.a=e},
bKf:function bKf(d){this.a=d},
bKe:function bKe(d){this.a=d},
aGw:function aGw(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bX8:function bX8(d,e){this.a=d
this.b=e},
bX4:function bX4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX5:function bX5(d){this.a=d},
bX6:function bX6(d,e){this.a=d
this.b=e},
bX7:function bX7(d,e){this.a=d
this.b=e},
XJ:function XJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCx:function aCx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
O1:function O1(d,e,f,g){var _=this
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
bHW:function bHW(d){this.a=d},
bHV:function bHV(){},
bHX:function bHX(d){this.a=d},
bHU:function bHU(){},
bHI:function bHI(){},
bHJ:function bHJ(d){this.a=d},
bHT:function bHT(){},
bHO:function bHO(d){this.a=d},
bHP:function bHP(d){this.a=d},
bHN:function bHN(d,e){this.a=d
this.b=e},
bHQ:function bHQ(d){this.a=d},
bHM:function bHM(d){this.a=d},
bHR:function bHR(d){this.a=d},
bHL:function bHL(d){this.a=d},
bHS:function bHS(d,e){this.a=d
this.b=e},
bHK:function bHK(d,e){this.a=d
this.b=e},
Xm:function Xm(d,e){this.e=d
this.a=e},
bNq:function bNq(d){this.a=d},
bNr:function bNr(d){this.a=d},
bNs:function bNs(){},
bNt:function bNt(){},
bNu:function bNu(d){this.a=d},
bNv:function bNv(d,e,f){this.a=d
this.b=e
this.c=f},
bNw:function bNw(d,e){this.a=d
this.b=e},
aib:function aib(d,e,f){this.c=d
this.d=e
this.a=f},
aCC:function aCC(d,e,f){this.e=d
this.f=e
this.a=f},
bIT:function bIT(){},
bIZ:function bIZ(d){this.a=d},
bIW:function bIW(){},
bIV:function bIV(d){this.a=d},
bIM:function bIM(d){this.a=d},
bIU:function bIU(d,e,f){this.a=d
this.b=e
this.c=f},
bIX:function bIX(d){this.a=d},
bIK:function bIK(d){this.a=d},
bIL:function bIL(){},
bIY:function bIY(d,e){this.a=d
this.b=e},
bIR:function bIR(d){this.a=d},
bIS:function bIS(d){this.a=d},
bIN:function bIN(){},
bIO:function bIO(d){this.a=d},
bIP:function bIP(d){this.a=d},
bIQ:function bIQ(d,e){this.a=d
this.b=e},
anD:function anD(d,e){this.c=d
this.a=e},
aYU:function aYU(d){this.a=d},
dhL(d){var x
switch(d){case E.xP:x=D.bD8
break
case E.xL:x=D.bym
break
case E.xM:x=D.bBV
break
case E.xN:x=D.bBm
break
case E.xO:x=D.bzQ
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
B.DF.prototype={
gap(d){return this.a.a}}
B.b3W.prototype={
gq0(){return C.e.cV(this.b,0,new B.b3X())},
gaBr(){var x=this.a
return x===0?0:C.k.af(this.gq0()/x,0,1)}}
B.zW.prototype={
gbyP(){var x=this.b,w=A.a8(x).i("a7<1>")
x=A.U(new A.a7(x,new B.b5A(),w),w.i("y.E"))
return x},
gbz9(d){var x=this.b,w=A.a8(x).i("a7<1>")
x=A.U(new A.a7(x,new B.b5B(),w),w.i("y.E"))
return x},
awA(d,e){var x=e==null?this.a:e
return new B.zW(x,d==null?this.b:d)},
ii(d){return this.awA(null,d)},
awi(d){return this.awA(d,null)}}
B.DQ.prototype={
d0(){var x=y.T,w=this.x=A.eP(this).G(A.cC($.cq(),new B.b5x(),y.v,x),x)
if(w!=null)A.j7(new B.b5y(this,w),y.H)
return D.azW},
bY(d,e){return this.bwf(0,e)},
bwf(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa2(0,v.ga2(0).ii(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.S("expenses").cv(0).X("wedding_id",e).cJ(0,"created_at",!0),$async$bY)
case 2:v.sa2(0,new t.zW(s,r.dl(g,B.dKC(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
Vl(d){return this.bm8(d)},
bm8(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vl=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.Q().b
r===$&&A.b()
r=r.S("expenses")
u=A.E(y.N,y.X)
u.j(0,"wedding_id",d.b)
u.j(0,"title",d.c)
t=d.e
if(t==null){t=d.d
t=t==null?null:t.b}u.j(0,"category",t)
u.j(0,"amount",d.f)
t=d.r
u.j(0,"due_date",t==null?null:C.e.gJ(t.cK().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.da(0,u).cv(0).e9(0),$async$Vl)
case 2:s=f
r=v.ga2(0)
u=A.U(v.ga2(0).b,y._)
u.push(B.cZT(s))
v.sa2(0,r.awi(u))
return A.l(null,w)}})
return A.m($async$Vl,w)},
Oo(d){return this.bBI(d)},
bBI(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Oo=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lb(v.ga2(0).b,new B.b5z(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.S("expenses").bm(0,A.R(["paid",!n.w,"updated_at",new A.ad(Date.now(),0,!1).cK()],u,u)).X("id",d).cv(0).e9(0),$async$Oo)
case 2:t=l.cZT(f)
u=v.ga2(0)
m=A.a([],y.r)
for(s=v.ga2(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa2(0,u.awi(m))
return A.l(null,w)}})
return A.m($async$Oo,w)}}
B.Mz.prototype={}
B.a80.prototype={
gap(d){return this.a}}
B.abW.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D8.prototype={
P(){return new B.abX(D.J3)}}
B.abX.prototype={
Tw(d){return this.bc3(d)},
bc3(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Tw=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.n(new B.bKU(u))
x=1
break}u.n(new B.bKV(u))
t=u.gR()
s=$.cq()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gaX(),y.Z).an(0,d),$async$Tw)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Tw,w)},
ac(){this.ao()
A.j7(new B.bLb(this),y.H)},
PZ(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$PZ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gR()
n=$.amd()
m=y.h
l=o.a0(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CJ(),y.b).b
s=t==null?null:t.b
r=C.e.cV(o.a0(0,n,y.g).b,0,new B.bKQ())
t=o.a0(0,$.cq(),y.v).b
q=t==null?null:t.gcs()
t=u.c
t.toString
x=3
return A.d(A.bP(null,new B.bKR(q,s,new B.bKS(),r),!1,t,!0,!0,null,y.B),$async$PZ)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vl(new G.i6("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$PZ,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gR(),a2=a1.G($.CJ(),y.b),a3=a1.G($.I7(),y.d),a4=a1.G($.amd(),y.g),a5=a2.b,a6=a5==null?e:B.dJK(a5,a3.b)
a5=A.iR(a1.G($.j4(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iW
a5=y.T
w=a1.G(A.cC($.cq(),new B.bL_(),y.v,a5),a5)
if(f.y){a1=f.gapa()
return A.cP(e,C.cQ,A.nO(C.f_,40,A.a([C.fy,D.aHh,K.cWu(a1,e),new B.aCC(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.dm(x,new B.bL0(w))
a1=a1.G($.uI(),y.l)
u=a1.gv(a1)
t=new B.bL9(u==null?C.fd:u)
a1=y._
a5=A.U(a4.gbyP(),a1)
for(s=v.a,r=J.cb(s),q=r.gW(s),p=v.b,o=v.$ti.i("fB<1>"),n=new A.fB(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i6("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbz9(0),a1)
for(s=r.gW(s),o=new A.fB(s,p,o),p=y.r;o.q();){r=s.gE(s)
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
n.push(new G.i6("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.p(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcJ(q),a1)
C.e.p(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcJ(q)
break
default:a1=e}h=C.e.cV(q,0,new B.bL1())
s=a6==null
if(s)g=D.bzq
else{r=a6.b
p=A.a8(r).i("a7<1>")
g=A.U(new A.a7(r,new B.bL2(),p),p.i("y.E"))}if(s)a1=D.bY_
else{s=f.gaR5()
r=y.p
p=A.a([new A.pu(A.a([new A.qP(s,"Nova despesa",e)],r),e),D.aHn,K.cWu(f.gapa(),w),new B.aPT(a6,new B.bL3(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aJ(a6.gq0(),!1)
n=a5.length
m=n===1?d:a0
l=A.aJ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c3("N\xfameros",e,A.a([new A.E2(A.a([new A.le("Gasto",o,""+n+" "+m,e),new A.le("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.p(o,A.a([new N.mc(A.a([new A.ej("Todos",l===D.J3,n+m,new B.bL4(f),e),new A.ej("Pendentes",l===D.abE,m,new B.bL5(f),e),new A.ej("Pagos",l===D.abD,n,new B.bL6(f),e)],y.F),4,!0,e),C.ap],r))}o.push(new B.aGw(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c3("Pagamentos",e,o,16,e))
a1=A.a([new A.h8(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDT(g,f.x,new B.bL7(f),e))
p.push(new A.c3("Categorias",e,a1,16,e))
p.push(new A.c3("Exportar",e,A.a([new F.DR("Gastos e parceiros",!1,new B.bL8(f),e)],r),16,e))
a1=A.nO(C.f_,40,p,e,!0,!1)}return A.cP(e,C.cQ,a1,!0,e)},
Ir(d){return this.aY3(d)},
aY3(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Ir=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUh(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Ir)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gR().a0(0,$.CJ().gaX(),y.x).a_3(r),$async$Ir)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a1(H.HT)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ir,w)}}
B.aPT.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gq0()>0?"Gastos "+A.aJ(t.gq0(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vp(new A.hk("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hG,0,"por definir","\u2014")}x=C.k.aN(t.gaBr()*100)
w=s-t.gq0()<0?"Acima do teto":"Ainda tens"
v=A.aJ(Math.abs(s-t.gq0()),!1)
s=A.aJ(s,!1)
u=t.gaBr()
return A.aV(A.vp(H.a1I,"Gastos "+A.aJ(t.gq0(),!1)+" \xb7 "+x+"% do teto",w,C.hG,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDT.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dr(s,0,A.et(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDU(r[w],null))
q=A.a([A.eQ(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hk(u,v.e,!0,null))}return A.x(q,C.E,C.h,C.l)}}
B.aDU.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cC($.cq(),new B.bNm(),y.v,m),m)
if(l==null)x=C.qZ
else{m=e.G($.d1Q().$1(l),y.y)
m=m.gv(m)
x=m==null?C.qZ:m}m=A.a([],y.s)
for(w=B.dhL(o.c),v=w.length,u=J.a6(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.p(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNo(this,d)
if(w)return A.k4(!1,!1,p,v,A.aJ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mQ("P\xf4r teto",new B.bNn(this,d,e),!0,p))
w=A.aJ(o.b,!1)
u=A.aJ(n,!1)
s=y.p
q=A.a([A.aK(new A.a4l(r,6,p),p,92)],s)
if(m.length!==0)C.e.p(q,A.a([C.aB,new B.anD(m,p)],s))
return A.k4(!1,!1,p,v,w+" de "+u,o.a,A.x(q,C.dL,C.h,C.J))}}
B.aDq.prototype={
u(d){var x,w,v=null,u=$.au,t=$.f1.ce(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.hY(r,A.aK(p==null?A.kQ(A.b9(C.ib,u,v,v,v),C.t,!0):A.pq(p,144,new B.bKe(u),!1,C.bz,A.wC(),!1,v,v,v),48,48),C.bf)
p=A.h(q.b,1,C.a1,v,v,D.c3N,v,v)
x=A.b9(C.id,u,v,v,14)
w=q.d
q=w>0?q.gPw()+" \xb7 "+A.aJ(w,!1):q.gPw()
w=y.p
return new A.S(C.d0,A.aV(A.w(v,A.O(A.a([r,C.af,A.a5(A.x(A.a([p,C.j9,A.O(A.a([x,C.dZ,new A.dg(1,C.bb,A.h(q,1,C.a1,v,v,A.aH(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bo,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.u,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b9(C.ig,u,v,v,v)],w),C.u,C.h,C.l,0,v),C.r,v,v,new A.J(t,v,v,s,v,v,C.x),v,v,v,C.eg,v,v,v),new B.bKf(d),v),v)}}
B.aGw.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JV(A.a([new A.hk("+ Nova despesa",this.f,!0,j)],y.p),C.eS,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBe
x=new B.bX8(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+B.ddc(m)
v.push(new A.ti(new A.ch(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bX4(d,e,s,q),A.I0(m)===C.f6,j))
continue}p=r?new B.bX5(d):new B.bX6(x,s)
v.push(new B.XJ(s,p,r||s.w?j:new B.bX7(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XJ&&v[k-1] instanceof B.XJ)u.push(C.iM)
u.push(v[k])
C.e.p(i,u)}i.push(D.aAV)
return A.x(i,C.E,C.h,C.l)}}
B.XJ.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aJ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.ddc(w))
v=C.e.a_(v," \xb7 ")
if(u)u=D.aH2
else{u=this.e
u=u!=null?new A.mQ("Marcar pago",u,!0,null):D.aH9}return A.k4(!1,!1,null,this.d,v,x.c,u)}}
B.aCx.prototype={}
B.O1.prototype={
P(){var x=$.aa()
return new B.abB(new A.aF(C.ak,x),new A.aF(C.ak,x))}}
B.abB.prototype={
ac(){var x=this
x.ao()
x.d.al(0,new B.bHW(x))
x.e.al(0,new B.bHX(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.V$=0
x=this.e
x.Z$=w
x.V$=0
this.a6()},
gahx(){var x=C.f.B(this.e.a.a)
x=A.aX(x," ","")
return A.eU(A.aX(x,",","."))},
aSk(){var x,w,v,u,t=this,s=t.gahx()
t.n(new B.bHJ(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.an(w,!1)
v=t.w
u=v?null:t.f
w.aq(new B.aCx(x,s,u,t.r,v))},
arV(d,e,f,g,h){var x=null,w=h?C.fp:x,v=y.p,u=A.a5(A.x(A.a([A.h(d,x,x,x,x,C.a9,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.br:x,s=f?x:A.bG(C.kw,1.5),r=f?S.vn:x
return A.bh(x,!0,x,A.cp(C.bu,A.w(x,A.O(A.a([u,A.w(x,r,C.r,x,x,new A.J(t,x,s,x,x,x,C.aq),x,24,x,x,x,x,24)],v),C.u,C.h,C.l,0,x),C.r,x,C.cM,new A.J(x,x,w,x,x,x,C.x),x,x,x,C.hv,x,x,x),C.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
biu(d,e,f,g){return this.arV(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahx()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bHT()
t=y.w
s=A.aT(d,k,t).w
r=y.p
q=A.a([D.c82],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k))
q=A.O(A.a([A.a5(A.x(q,C.G,C.h,C.l),1),A.bh(k,!0,k,A.cp(k,A.w(k,C.hC,C.r,k,k,C.bW,k,44,k,k,k,k,44),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHO(d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.u,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c97,A.O(A.a([V.d6j(A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),l.e,k,k,k,k,k,2,D.aF5,C.U,!0,k,!0,k,!1,k,C.aC,k,k,k,k,C.fM,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aam,!0,C.dC,k,C.b0,k,k,k,k)),C.bg,D.c8w],r),C.ee,C.bQ,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cZ2(v)+" no teto":"Passa o teto em "+B.cZ2(-v)
o.push(A.h(m,k,k,k,k,A.aH(k,k,n?C.W:C.bY,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c7J)
p=A.w(k,A.x(o,C.u,C.h,C.l),C.r,k,k,new A.J(C.a3,k,k,p,k,k,C.x),k,k,k,C.bp,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bG(C.bY,1.5):k
n=A.a([p,C.a_,new A.S(C.d0,o,k),A.w(C.bc,A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),x,k,k,k,k,k,2,D.aEK,C.U,!0,k,!0,k,!1,k,C.aC,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fj,!0,C.au,k,C.hc,k,k,k,k),C.r,k,k,new A.J(C.a3,k,m,n,k,k,C.x),k,52,k,C.ft,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bLs)
n.push(C.a_)
n.push(new U.a1y(l.r,new B.bHP(l),k))
n.push(C.a_)
n.push(new A.S(C.d0,A.h("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.biu("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHQ(l)),l.arV("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHR(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aD(p)))
m=l.f
m.toString
m=A.p(w.$1(A.aw(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aL(w)}o.push(A.bh(k,!0,k,A.cp(C.bu,A.aK(A.O(A.a([D.azG,A.h(w,k,k,k,k,C.cc,k,k),C.dZ,C.jW],r),C.u,C.h,C.l,0,k),56,k),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHS(l,d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.w(k,A.x(o,C.u,C.h,C.l),C.r,k,k,new A.J(C.a3,k,k,x,k,k,C.x),k,k,k,C.cs,k,k,k))
n.push(C.a_)
n.push(D.cdE)
x=A.dR(A.x(n,C.E,C.h,C.l),C.y,k,C.eh,k,C.av)
t=A.aT(d,C.b5,t).w
w=A.ce(u?C.z:C.z.ce(0.35),k,k,C.t,k,k,C.ab,k,k,C.eJ)
return new A.S(new A.a4(0,0,0,s.f.d),A.x(A.a([new A.S(C.jH,q,k),new A.dg(1,C.bb,x,k),new A.S(new A.a4(20,16,20,20+t.r.d),A.aK(new A.ak(A.bD(A.h(u?"Guardar \xb7 "+B.cZ2(j):"Guardar",k,k,k,k,k,k,k),l.gaSj(),w),k),52,k),k)],r),C.E,C.h,C.J),k)}}
B.Xm.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CJ(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.f4(new A.a7(j,new B.bNq(l),A.a8(j).i("a7<1>")))
x=j}if(x==null)x=l.e
j=e.G($.amd(),y.g).b
w=A.a8(j).i("a7<1>")
v=A.U(new A.a7(j,new B.bNr(l),w),w.i("y.E"))
C.e.cw(v,new B.bNs())
j=y.T
u=e.G(A.cC($.cq(),new B.bNt(),y.v,j),j)
t=B.dhL(l.e.c)
if(u==null)s=I.Fo
else{j=e.G($.aWb().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fo
j=J.dm(j,new B.bNu(t))
s=A.U(j,j.$ti.i("y.E"))}j=A.aT(d,k,y.w).w
w=A.bM(A.w(k,k,C.r,k,k,new A.J(C.bG,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ay(d).ok.r,k,k)
q=A.a5(new B.aib("Gasto",A.aJ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aA,A.O(A.a([q,C.ae,A.a5(A.aV(new B.aib("Teto \xb7 tocar para mudar",p===0?"Definir":A.aJ(p,!1),k),new B.bNv(d,e,x),k),1)],o),C.u,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bk,A.h("Contratado na app",k,k,k,k,A.ay(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aDq(s[n],k))
C.e.p(p,w)}p.push(C.bk)
p.push(A.h("Despesas",k,k,k,k,A.ay(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKQ)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.iv,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aT(C.j.k(A.aD(q)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(q)),2,"0")+"/"+A.aL(q),k,k,k,k,k,k,k)
p.push(A.jq(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aJ(m.f,!1),k,k,k,k,D.c5S,k,k),C.ac,new P.Dj(m.w,new B.bNw(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J5,k)],o),C.u,C.h,C.J,0,k),k))}return A.bB(!0,new A.ec(new A.aR(0,1/0,0,j.a.b*0.8),A.d6(p,k,L.CW,k,k,!1,!0),k),k,C.Z,!0)}}
B.aib.prototype={
u(d){var x=null,w=A.W(16)
return A.w(x,A.x(A.a([A.h(this.c,x,x,x,x,C.bh,x,x),C.ap,A.h(this.d,x,x,x,x,M.aa9,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.J(C.a3,x,x,w,x,x,C.x),x,x,x,C.cU,x,x,x)}}
B.aCC.prototype={
b9(d,e){var x,w=y.t,v=e.G(A.cC($.cq(),new B.bIT(),y.v,w),w),u=e.G($.d1P(),y.o)
w=e.G($.uI(),y.l)
x=w.gv(w)
return A.hE(u,new B.bIU(this,new B.bIZ(x==null?C.fd:x),v),new B.bIV(e),new B.bIW(),!1,!0,!1)}}
B.anD.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.f1
s=new A.b5(999,999)
r=new A.bc(o.ce(0.25),1,C.ag,-1)
q=A.b9(C.id,o,p,p,13)
t=A.w(p,A.O(A.a([q,C.rI,new A.dg(1,C.bb,A.h(u,1,C.a1,p,p,new A.P(!0,o,p,p,p,p,14,C.d2,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b9(C.ig,o,p,p,16)],n),C.u,C.h,C.J,0,p),C.r,p,D.aft,new A.J(t,p,new A.dN(r,r,r,r),new A.cz(s,s,s,s),p,p,C.x),p,p,p,D.aue,p,p,p)
m.push(new A.ju(new A.na(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hz(t,new B.aYU(d),p,p),p))}return A.e5(C.bi,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["C(i6)","T(T,i6)","v(i6,i6)","T(T,DF)","zW()","F<~>(c?)","F<~>()","O1(N)","C(DF)","F<lV>()","Xm(N)","~(i6)","~()","C(nw)","C(rS)","i6(a3<c,@>)","DQ()"])
B.cHv.prototype={
$1(d){return this.aEK(d)},
aEK(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.u2(a1)
u=y.t
t=a1.G(A.cC($.cq(),new B.cHr(),y.v,u),u)
u=J.a6(t)
if(u.gY(t)){v=D.bzr
x=1
break}s=A.a([],y.s)
for(r=u.gW(t);r.q();)s.push(r.gE(r).a)
r=$.Q()
q=r.b
q===$&&A.b()
p=y.G
o=q.S("budgets").an(0,"wedding_id, total").dG("wedding_id",s).b6(new B.cHs(),p)
n=r.b.S("budget_categories").an(0,"wedding_id, amount").dG("wedding_id",s).b6(new B.cHt(),p)
m=r.b.S("expenses").an(0,"wedding_id, amount, paid").dG("wedding_id",s).b6(new B.cHu(),p)
p=y.N
s=y.i
r=A.E(p,s)
d=q=y.P
a0=J
x=3
return A.d(o,$async$$1)
case 3:d,l=a0.bj(a3,q),k=A.u(l),l=new A.aj(l,l.gA(l),k.i("aj<V.E>")),k=k.i("V.E")
case 4:if(!l.q()){x=5
break}j=l.d
if(j==null)j=k.a(j)
i=J.a6(j)
r.j(0,A.a_(i.h(j,"wedding_id")),A.dt(i.h(j,"total")))
x=4
break
case 5:h=A.E(p,s)
d=J
x=6
return A.d(n,$async$$1)
case 6:l=d.bj(a3,q),k=A.u(l),l=new A.aj(l,l.gA(l),k.i("aj<V.E>")),k=k.i("V.E")
case 7:if(!l.q()){x=8
break}j=l.d
if(j==null)j=k.a(j)
i=J.a6(j)
g=A.a_(i.h(j,"wedding_id"))
f=h.h(0,g)
if(f==null)f=0
j=A.aE(i.h(j,"amount"))
if(j==null)j=null
h.j(0,g,f+(j==null?0:j))
x=7
break
case 8:e=A.E(p,s)
d=J
x=9
return A.d(m,$async$$1)
case 9:s=d.bj(a3,q),q=A.u(s),s=new A.aj(s,s.gA(s),q.i("aj<V.E>")),q=q.i("V.E")
case 10:if(!s.q()){x=11
break}p=s.d
if(p==null)p=q.a(p)
l=J.a6(p)
if(J.o(l.h(p,"paid"),!0)){x=10
break}g=A.a_(l.h(p,"wedding_id"))
k=e.h(0,g)
if(k==null)k=0
p=A.aE(l.h(p,"amount"))
if(p==null)p=null
e.j(0,g,k+(p==null?0:p))
x=10
break
case 11:s=A.a([],y.n)
for(u=u.gW(t);u.q();){q=u.gE(u)
p=q.a
l=r.h(0,p)
q=l==null?q.as:l
if(q==null)q=0
l=h.h(0,p)
if(l==null)l=0
k=e.h(0,p)
s.push(new A.aN6([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1297}
B.cHr.prototype={
$1(d){return d.c},
$S:142}
B.cHs.prototype={
$1(d){return d},
$S:44}
B.cHt.prototype={
$1(d){return d},
$S:44}
B.cHu.prototype={
$1(d){return d},
$S:44}
B.b3X.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5A.prototype={
$1(d){return d.w},
$S:z+0}
B.b5B.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5x.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.b5y.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b5z.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKU.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKV.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bLb.prototype={
$0(){return this.a.gR().a0(0,$.CJ().gaX(),y.x).Zk(0).e1(new B.bLa())},
$S:1}
B.bLa.prototype={
$1(d){},
$S:13}
B.bKQ.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKS.prototype={
$1(d){return A.CF(C.k.a8(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKT(),null)+" \u20ac"},
$S:114}
B.bKT.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:42}
B.bKR.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a_(v," \xb7 ")
u=x&&u>0?u:null
return new B.O1(v,u,w.d,null)},
$S:z+7}
B.bL_.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bL0.prototype={
$1(d){return d.x!==C.ea&&d.b===this.a},
$S:61}
B.bL9.prototype={
$2(d,e){return A.jj(d,this.a.l8(e))},
$1(d){return this.$2(d,null)},
$S:1300}
B.bL1.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bL2.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bL3.prototype={
$0(){return this.a.Ir(this.b.a)},
$S:0}
B.bL4.prototype={
$0(){var x=this.a
return x.n(new B.bKZ(x))},
$S:0}
B.bKZ.prototype={
$0(){return this.a.w=D.J3},
$S:0}
B.bL5.prototype={
$0(){var x=this.a
return x.n(new B.bKY(x))},
$S:0}
B.bKY.prototype={
$0(){return this.a.w=D.abE},
$S:0}
B.bL6.prototype={
$0(){var x=this.a
return x.n(new B.bKX(x))},
$S:0}
B.bKX.prototype={
$0(){return this.a.w=D.abD},
$S:0}
B.bL7.prototype={
$0(){var x=this.a
return x.n(new B.bKW(x))},
$S:0}
B.bKW.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bL8.prototype={
$0(){return B.Cy(this.a.gR().a0(0,$.cq(),y.v).b.a)},
$S:z+9}
B.cDM.prototype={
$1(d){var x=null,w=this.b
return new A.eT(A.h(this.a,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.cu(),w,x,x,x,x,x,2,D.aFj,C.U,!0,x,!0,x,!1,x,C.aC,x,x,x,x,C.fM,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b0,x,x,x,x),A.a([new A.ak(A.cK(C.cZ,x,x,new B.cDK(d),x,x),x),new A.ak(A.bD(C.dx,new B.cDL(d,w),x),x)],y.p),x)},
$S:19}
B.cDK.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
B.cDL.prototype={
$0(){var x=A.an(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aX(w," ","")
return x.aq(A.eU(A.aX(w,",",".")))},
$S:0}
B.cDW.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.c_(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.c_(2100,1,1,0,0):x)},
$S:z+2}
B.bNm.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNo.prototype={
$0(){return A.bP(null,new B.bNp(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNp.prototype={
$1(d){return new B.Xm(this.a.e.a,null)},
$S:z+10}
B.bNn.prototype={
$0(){return B.akM(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKf.prototype={
$0(){var x=this.a
A.an(x,!1).bj()
A.ae(x).ag("/bookings",null,y.X)},
$S:0}
B.bKe.prototype={
$3(d,e,f){return A.kQ(A.b9(C.ib,this.a,null,null,null),C.t,!0)},
$S:94}
B.bX8.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.amd().gaX(),y.h).Oo(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a1(A.bZ(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bX4.prototype={
$0(){var x=this
return A.rK(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bX5.prototype={
$0(){return A.ae(this.a).ag("/bookings",null,y.X)},
$S:0}
B.bX6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bX7.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHW.prototype={
$0(){return this.a.n(new B.bHV())},
$S:0}
B.bHV.prototype={
$0(){},
$S:0}
B.bHX.prototype={
$0(){return this.a.n(new B.bHU())},
$S:0}
B.bHU.prototype={
$0(){},
$S:0}
B.bHI.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:42}
B.bHJ.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHT.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:36}
B.bHO.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
B.bHP.prototype={
$1(d){var x=this.a
return x.n(new B.bHN(x,d))},
$S:126}
B.bHN.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHQ.prototype={
$0(){var x=this.a
return x.n(new B.bHM(x))},
$S:0}
B.bHM.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHR.prototype={
$0(){var x=this.a
return x.n(new B.bHL(x))},
$S:0}
B.bHL.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHS.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ad(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cNU(v.b,A.c_(A.aL(t)-1,1,1,0,0),r,A.c_(A.aL(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.n(new B.bHK(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHK.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNq.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNr.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNs.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.c_(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.c_(2100,1,1,0,0):x)},
$S:z+2}
B.bNt.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNu.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bNv.prototype={
$0(){var x=this.c
return B.akM(this.a,this.b,x.a,x.d)},
$S:0}
B.bNw.prototype={
$1(d){return this.a.a0(0,$.amd().gaX(),y.h).Oo(this.b.a)},
$S:130}
B.bIT.prototype={
$1(d){return d.c},
$S:142}
B.bIZ.prototype={
$2(d,e){return A.jj(d,this.a.l8(e))},
$S:45}
B.bIW.prototype={
$0(){return D.bLu},
$S:87}
B.bIV.prototype={
$2(d,e){return A.JV(A.a([new A.hk("Tentar outra vez",new B.bIM(this.a),!1,null)],y.p),C.eS,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1301}
B.bIM.prototype={
$0(){return this.a.ai($.d1P())},
$S:0}
B.bIU.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIX(g),e=new B.bIY(g,this.b),d=J.cb(a4),a0=d.cV(a4,0,new B.bIN()),a1=d.cV(a4,0,new B.bIO(f)),a2=d.cV(a4,0,new B.bIP(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ao(this.c);x.q();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.BX(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aJ(a1,!1)
w=a0>0
v=w?"de "+A.aJ(a0,!1):"gastos"
u=w?C.k.af(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aN(a1/a0*100)+"% dos tetos":""
x=A.vp(i,""+t+" "+r+w,"Todos os eventos",C.hG,u,v,x)
v=y.p
u=A.a([new A.E2(A.a([new A.le("Gasto",A.aJ(a1,!1),h,i),new A.le("Por pagar",A.aJ(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eu(a4,0,y.A),r=J.ao(t.a),q=t.b,t=new A.bY(r,q,A.u(t).i("bY<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.am(A.c1())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iM)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a1,i,i,C.a9,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aJ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aJ(j[3]+e.$1(j[0]),!1))}n=A.x(A.a([n,C.aU,A.h(C.e.a_(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.hz(A.w(i,A.O(A.a([new A.bK(1,C.at,n,i),C.ae,A.h(A.aJ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.bg,C.jW],v),C.u,C.h,C.l,0,i),C.r,C.as,C.cM,i,i,i,i,C.ck,i,i,i),new B.bIQ(o,g),i,i))
C.e.p(w,l)}return A.x(A.a([x,new A.c3("N\xfameros",i,u,16,i),new A.c3("Por evento \xb7 "+d,i,w,16,i),D.aAX],v),C.E,C.h,C.l)},
$S:1302}
B.bIX.prototype={
$1(d){return J.dm(this.a.e,new B.bIK(d)).cV(0,0,new B.bIL())},
$S:164}
B.bIK.prototype={
$1(d){return d.b===this.a&&d.x!==C.ea},
$S:61}
B.bIL.prototype={
$2(d,e){return d+e.w},
$S:472}
B.bIY.prototype={
$1(d){return J.dm(this.a.e,new B.bIR(d)).cV(0,0,new B.bIS(this.b))},
$S:164}
B.bIR.prototype={
$1(d){return d.b===this.a&&d.x!==C.ea},
$S:61}
B.bIS.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:472}
B.bIN.prototype={
$2(d,e){return d+e.a[2]},
$S:237}
B.bIO.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:237}
B.bIP.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:237}
B.bIQ.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYU.prototype={
$0(){return A.ae(this.a).ag("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKC","cZT",15)
w(B,"dKB","drn",16)
v(B.DQ.prototype,"giF","d0",4)
var t
u(t=B.abX.prototype,"gapa","Tw",5)
v(t,"gaR5","PZ",6)
v(B.abB.prototype,"gaSj","aSk",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cHv,B.cHr,B.cHs,B.cHt,B.cHu,B.b5A,B.b5B,B.b5x,B.b5z,B.bLa,B.bKS,B.bKT,B.bKR,B.bL_,B.bL0,B.bL9,B.bL2,B.cDM,B.bNm,B.bNp,B.bKe,B.bX8,B.bHI,B.bHT,B.bHP,B.bNq,B.bNr,B.bNt,B.bNu,B.bNw,B.bIT,B.bIU,B.bIX,B.bIK,B.bIY,B.bIR])
x(A.M,[B.DF,B.b3W,B.zW,B.Mz,B.a80,B.aCx])
x(A.cL,[B.b3X,B.bKQ,B.bL1,B.cDW,B.bNs,B.bIZ,B.bIV,B.bIL,B.bIS,B.bIN,B.bIO,B.bIP])
w(B.DQ,A.fb)
x(A.bL,[B.b5y,B.bKU,B.bKV,B.bLb,B.bL3,B.bL4,B.bKZ,B.bL5,B.bKY,B.bL6,B.bKX,B.bL7,B.bKW,B.bL8,B.cDK,B.cDL,B.bNo,B.bNn,B.bKf,B.bX4,B.bX5,B.bX6,B.bX7,B.bHW,B.bHV,B.bHX,B.bHU,B.bHJ,B.bHO,B.bHN,B.bHQ,B.bHM,B.bHR,B.bHL,B.bHS,B.bHK,B.bNv,B.bIW,B.bIM,B.bIQ,B.aYU])
w(B.abW,A.f7)
w(B.D8,A.dC)
w(B.abX,A.dx)
x(A.L,[B.aPT,B.aDT,B.aDq,B.XJ,B.aib,B.anD])
x(A.ew,[B.aDU,B.aGw,B.Xm,B.aCC])
w(B.O1,A.G)
w(B.abB,A.Z)})()
A.br(b.typeUniverse,JSON.parse('{"DQ":{"fb":["zW"]},"O1":{"G":[],"e":[],"f":[]},"Xm":{"G":[],"e":[],"f":[]},"D8":{"G":[],"e":[],"f":[]},"abX":{"Z":["D8"]},"aPT":{"L":[],"e":[],"f":[]},"aDT":{"L":[],"e":[],"f":[]},"aDU":{"G":[],"e":[],"f":[]},"aDq":{"L":[],"e":[],"f":[]},"aGw":{"G":[],"e":[],"f":[]},"XJ":{"L":[],"e":[],"f":[]},"abB":{"Z":["O1"]},"aib":{"L":[],"e":[],"f":[]},"aCC":{"G":[],"e":[],"f":[]},"anD":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.A
return{l:x("ax<fa>"),k:x("ax<t<rS>>"),u:x("ax<t<fM>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("ax<a3<c,t<c>>>"),x:x("zz"),b:x("uV"),d:x("rX"),Z:x("ol"),v:x("ed"),_:x("i6"),h:x("DQ"),g:x("zW"),D:x("r<DF>"),r:x("r<i6>"),Q:x("r<le>"),F:x("r<ej>"),Y:x("r<a3<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a80>"),c:x("r<Mz>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fM>"),t:x("t<fj>"),G:x("t<a3<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a3<c,@>"),w:x("dw"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lV"),N:x("c"),B:x("aCx"),q:x("dj"),i:x("T"),z:x("@"),S:x("v"),X:x("M?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aft=new A.aR(0,1/0,32,1/0)
D.aue=new A.a4(8,5,6,5)
D.chk=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azG=new A.bK(1,C.at,D.chk,null)
D.bz8=x([],y.r)
D.azW=new B.zW(!1,D.bz8)
D.aAV=new A.h8("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAX=new A.h8("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBe=new A.h8("Sem pagamentos nesta vista.",8,null)
D.aEK=new A.dE(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.b1,null,null,C.b1,C.b1,!0,null,null,null,null)
D.aF5=new A.dE(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.b1,null,null,C.b1,C.b1,!0,null,null,null,null)
D.aFj=new A.dE(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aH2=new A.dU("Pago",C.cV,null)
D.aH9=new A.dU("Por pagar",C.hE,null)
D.aHh=new A.lj("Or\xe7amento","Todos os teus eventos",null)
D.aHn=new A.lj("Or\xe7amento",null,null)
D.bym=x(["catering"],y.s)
D.bzq=x([],y.D)
D.bzr=x([],y.n)
D.bzQ=x(["flowers_decor"],y.s)
D.bBm=x(["music_dj","bands_musicians"],y.s)
D.bBV=x(["photography"],y.s)
D.bD8=x(["venue"],y.s)
D.aEz=new A.vk("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kD,null)
D.bKQ=new A.S(C.fW,D.aEz,null)
D.c9v=new A.D("A despesa precisa de um t\xedtulo",null,C.mp,null,null,null,null,null,null,null)
D.bLs=new A.S(T.NB,D.c9v,null)
D.bLu=new A.S(O.uL,C.f1,null)
D.bY_=new A.w_(!1,6,!0,null)
D.c3N=new A.P(!0,C.z,null,null,null,null,14,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5S=new A.P(!0,null,null,null,null,null,null,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aam=new A.P(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7J=new A.D("Indica um valor v\xe1lido",null,C.mp,null,null,null,null,null,null,null)
D.c82=new A.D("Nova despesa",null,C.bj,null,null,null,null,null,null,null)
D.c8w=new A.D("\u20ac",null,D.aam,null,null,null,null,null,null,null)
D.c97=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.cdE=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null)
D.J3=new B.abW(0,"all")
D.abD=new B.abW(1,"paid")
D.abE=new B.abW(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dY3","d1P",()=>C.bK.$1$1(new B.cHv(),y.m))
x($,"dYU","amd",()=>A.n_(B.dKB(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["1ycYVM0Xf1Z0yAHjR23ihBFavUw="]=a.current})($__dart_deferred_initializers__);