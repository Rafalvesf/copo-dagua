((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cHj:function cHj(){},cHf:function cHf(){},cHg:function cHg(){},cHh:function cHh(){},cHi:function cHi(){},
dJv(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DF(x[v]))
return new B.b3P(d.b,u)},
DF:function DF(d){this.a=d},
b3P:function b3P(d,e){this.a=d
this.b=e},
b3Q:function b3Q(){},
cZE(d){var x="category",w="due_date",v=J.a6(d),u=A.a_(v.h(d,"id")),t=A.a_(v.h(d,"wedding_id")),s=A.a_(v.h(d,"title")),r=B.dFI(B.der(A.A(v.h(d,x)))),q=B.der(A.A(v.h(d,x))),p=A.ds(v.h(d,"amount")),o=v.h(d,w)==null?null:A.da(A.a_(v.h(d,w)))
v=A.dW(v.h(d,"paid"))
return new G.i6(u,t,s,r,q,p,o,v===!0)},
der(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dFI(d){var x
A:{if("venue"===d){x=E.xO
break A}if("catering"===d){x=E.xK
break A}if("photography"===d){x=E.xL
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xM
break A}if("flowers_decor"===d){x=E.xN
break A}x=null
break A}return x},
dr8(){return new B.DQ()},
zW:function zW(d,e){this.a=d
this.b=e},
b5t:function b5t(){},
b5u:function b5u(){},
DQ:function DQ(){this.b=this.x=null},
b5q:function b5q(){},
b5r:function b5r(d,e){this.a=d
this.b=e},
b5s:function b5s(d){this.a=d},
Cz(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cz=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akQ(),$async$Cz)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.S("events").an(0,"partner_name_1, partner_name_2").X("id",d).cl(),$async$Cz)
case 4:s=f
x=5
return A.d(u.b.S("bookings").an(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").X("wedding_id",d).cJ(0,"event_date",!1),$async$Cz)
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
return A.d(t.S("payments").an(0,"booking_id, type, status, amount, paid_at, due_at, provider").dG("booking_id",u).tu(0,"created_at"),$async$Cz)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.S("expenses").an(0,"title, category, amount, due_date, paid").X("wedding_id",d).tu(0,"due_date"),$async$Cz)
case 10:p=f
x=11
return A.d(u.b.S("budget_categories").an(0,"name, amount").X("wedding_id",d).tu(0,"position"),$async$Cz)
case 11:o=f
x=12
return A.d(u.b.S("budgets").an(0,"total").X("wedding_id",d).cl(),$async$Cz)
case 12:n=f
m=F.cZq(F.cEb(s),"Gastos e parceiros",r,q,!1)
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
if(k==null)k=0}t.push(new B.a80(i,k))}l=n==null?null:F.cZX(J.i(n,"total"))
v=new F.lV(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cz,w)},
Mz:function Mz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a80:function a80(d,e){this.a=d
this.b=e},
dos(){return new B.D8(null)},
aUa(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUa=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.h1(!0,new B.cDA(e,new A.aF(new A.bE(u,C.aF,C.ax),$.aa())),d,y.i),$async$aUa)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUa,w)},
akJ(d,e,f,g){return B.dFv(d,e,f,g)},
dFv(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akJ=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUa(d,"Teto para "+f,g),$async$akJ)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.CK().gaX(),y.x).Oq(f,r),$async$akJ)
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
dcr(d){var x=A.U(d,y._)
C.e.cv(x,new B.cDK())
return x},
dcV(d){var x=C.f.aT(C.j.k(A.aE(d)),2,"0"),w=C.f.aT(C.j.k(A.aw(d)),2,"0"),v=A.aL(d)===A.aL(new A.ad(Date.now(),0,!1))?"":"/"+A.aL(d)
return x+"/"+w+v},
cYO(d){var x,w,v,u
if(d===C.k.hB(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aY(w,".",",")}v=x.split(",")
u=A.CG(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHB(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abW:function abW(d,e){this.a=d
this.b=e},
D8:function D8(d){this.a=d},
abX:function abX(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKN:function bKN(d){this.a=d},
bKO:function bKO(d){this.a=d},
bL4:function bL4(d){this.a=d},
bL3:function bL3(){},
bKJ:function bKJ(){},
bKL:function bKL(){},
bKM:function bKM(){},
bKK:function bKK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKT:function bKT(){},
bKU:function bKU(d){this.a=d},
bL2:function bL2(d){this.a=d},
bKV:function bKV(){},
bKW:function bKW(){},
bKX:function bKX(d,e){this.a=d
this.b=e},
bKY:function bKY(d){this.a=d},
bKS:function bKS(d){this.a=d},
bKZ:function bKZ(d){this.a=d},
bKR:function bKR(d){this.a=d},
bL_:function bL_(d){this.a=d},
bKQ:function bKQ(d){this.a=d},
bL0:function bL0(d){this.a=d},
bKP:function bKP(d){this.a=d},
bL1:function bL1(d){this.a=d},
cDA:function cDA(d,e){this.a=d
this.b=e},
cDy:function cDy(d){this.a=d},
cDz:function cDz(d,e){this.a=d
this.b=e},
cDK:function cDK(){},
aPN:function aPN(d,e,f){this.c=d
this.d=e
this.a=f},
aDN:function aDN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDO:function aDO(d,e){this.e=d
this.a=e},
bNf:function bNf(){},
bNh:function bNh(d,e){this.a=d
this.b=e},
bNi:function bNi(d){this.a=d},
bNg:function bNg(d,e,f){this.a=d
this.b=e
this.c=f},
aDk:function aDk(d,e){this.c=d
this.a=e},
bK8:function bK8(d){this.a=d},
bK7:function bK7(d){this.a=d},
aGq:function aGq(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bX_:function bX_(d,e){this.a=d
this.b=e},
bWW:function bWW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWX:function bWX(d){this.a=d},
bWY:function bWY(d,e){this.a=d
this.b=e},
bWZ:function bWZ(d,e){this.a=d
this.b=e},
XI:function XI(d,e,f,g){var _=this
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
bHP:function bHP(d){this.a=d},
bHO:function bHO(){},
bHQ:function bHQ(d){this.a=d},
bHN:function bHN(){},
bHB:function bHB(){},
bHC:function bHC(d){this.a=d},
bHM:function bHM(){},
bHH:function bHH(d){this.a=d},
bHI:function bHI(d){this.a=d},
bHG:function bHG(d,e){this.a=d
this.b=e},
bHJ:function bHJ(d){this.a=d},
bHF:function bHF(d){this.a=d},
bHK:function bHK(d){this.a=d},
bHE:function bHE(d){this.a=d},
bHL:function bHL(d,e){this.a=d
this.b=e},
bHD:function bHD(d,e){this.a=d
this.b=e},
Xl:function Xl(d,e){this.e=d
this.a=e},
bNj:function bNj(d){this.a=d},
bNk:function bNk(d){this.a=d},
bNl:function bNl(){},
bNm:function bNm(){},
bNn:function bNn(d){this.a=d},
bNo:function bNo(d,e,f){this.a=d
this.b=e
this.c=f},
bNp:function bNp(d,e){this.a=d
this.b=e},
ai7:function ai7(d,e,f){this.c=d
this.d=e
this.a=f},
aCw:function aCw(d,e,f){this.e=d
this.f=e
this.a=f},
bIM:function bIM(){},
bIS:function bIS(d){this.a=d},
bIP:function bIP(){},
bIO:function bIO(d){this.a=d},
bIF:function bIF(d){this.a=d},
bIN:function bIN(d,e,f){this.a=d
this.b=e
this.c=f},
bIQ:function bIQ(d){this.a=d},
bID:function bID(d){this.a=d},
bIE:function bIE(){},
bIR:function bIR(d,e){this.a=d
this.b=e},
bIK:function bIK(d){this.a=d},
bIL:function bIL(d){this.a=d},
bIG:function bIG(){},
bIH:function bIH(d){this.a=d},
bII:function bII(d){this.a=d},
bIJ:function bIJ(d,e){this.a=d
this.b=e},
anz:function anz(d,e){this.c=d
this.a=e},
aYN:function aYN(d){this.a=d},
dhu(d){var x
switch(d){case E.xO:x=D.bD_
break
case E.xK:x=D.byd
break
case E.xL:x=D.bBM
break
case E.xM:x=D.bBc
break
case E.xN:x=D.bzH
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
gao(d){return this.a.a}}
B.b3P.prototype={
gq0(){return C.e.cV(this.b,0,new B.b3Q())},
gaBp(){var x=this.a
return x===0?0:C.k.af(this.gq0()/x,0,1)}}
B.zW.prototype={
gbyM(){var x=this.b,w=A.a8(x).i("a7<1>")
x=A.U(new A.a7(x,new B.b5t(),w),w.i("y.E"))
return x},
gbz6(d){var x=this.b,w=A.a8(x).i("a7<1>")
x=A.U(new A.a7(x,new B.b5u(),w),w.i("y.E"))
return x},
awy(d,e){var x=e==null?this.a:e
return new B.zW(x,d==null?this.b:d)},
ii(d){return this.awy(null,d)},
awg(d){return this.awy(d,null)}}
B.DQ.prototype={
d0(){var x=y.T,w=this.x=A.eP(this).G(A.cB($.cq(),new B.b5q(),y.v,x),x)
if(w!=null)A.j7(new B.b5r(this,w),y.H)
return D.azO},
bY(d,e){return this.bwc(0,e)},
bwc(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa1(0,v.ga1(0).ii(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.S("expenses").cu(0).X("wedding_id",e).cJ(0,"created_at",!0),$async$bY)
case 2:v.sa1(0,new t.zW(s,r.dl(g,B.dKn(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
Vk(d){return this.bm5(d)},
bm5(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vk=A.j(function(e,f){if(e===1)return A.k(f,w)
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
return A.d(r.da(0,u).cu(0).e9(0),$async$Vk)
case 2:s=f
r=v.ga1(0)
u=A.U(v.ga1(0).b,y._)
u.push(B.cZE(s))
v.sa1(0,r.awg(u))
return A.l(null,w)}})
return A.m($async$Vk,w)},
On(d){return this.bBF(d)},
bBF(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$On=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lb(v.ga1(0).b,new B.b5s(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.S("expenses").bm(0,A.R(["paid",!n.w,"updated_at",new A.ad(Date.now(),0,!1).cK()],u,u)).X("id",d).cu(0).e9(0),$async$On)
case 2:t=l.cZE(f)
u=v.ga1(0)
m=A.a([],y.r)
for(s=v.ga1(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa1(0,u.awg(m))
return A.l(null,w)}})
return A.m($async$On,w)}}
B.Mz.prototype={}
B.a80.prototype={
gao(d){return this.a}}
B.abW.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D8.prototype={
P(){return new B.abX(D.J2)}}
B.abX.prototype={
Tv(d){return this.bc0(d)},
bc0(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Tv=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.n(new B.bKN(u))
x=1
break}u.n(new B.bKO(u))
t=u.gR()
s=$.cq()
r=t.a_(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a_(0,s.gaX(),y.Z).an(0,d),$async$Tv)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Tv,w)},
ac(){this.ap()
A.j7(new B.bL4(this),y.H)},
PY(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$PY=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gR()
n=$.am9()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.CK(),y.b).b
s=t==null?null:t.b
r=C.e.cV(o.a_(0,n,y.g).b,0,new B.bKJ())
t=o.a_(0,$.cq(),y.v).b
q=t==null?null:t.gcw()
t=u.c
t.toString
x=3
return A.d(A.bP(null,new B.bKK(q,s,new B.bKL(),r),!1,t,!0,!0,null,y.B),$async$PY)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vk(new G.i6("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$PY,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gR(),a2=a1.G($.CK(),y.b),a3=a1.G($.I5(),y.d),a4=a1.G($.am9(),y.g),a5=a2.b,a6=a5==null?e:B.dJv(a5,a3.b)
a5=A.iR(a1.G($.j4(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iV
a5=y.T
w=a1.G(A.cB($.cq(),new B.bKT(),y.v,a5),a5)
if(f.y){a1=f.gap8()
return A.cP(e,C.cQ,A.nM(C.eZ,40,A.a([C.fx,D.aHb,K.cWf(a1,e),new B.aCw(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.dm(x,new B.bKU(w))
a1=a1.G($.uH(),y.l)
u=a1.gv(a1)
t=new B.bL2(u==null?C.fd:u)
a1=y._
a5=A.U(a4.gbyM(),a1)
for(s=v.a,r=J.ca(s),q=r.gW(s),p=v.b,o=v.$ti.i("fA<1>"),n=new A.fA(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i6("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbz6(0),a1)
for(s=r.gW(s),o=new A.fA(s,p,o),p=y.r;o.q();){r=s.gE(s)
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
n.push(new G.i6("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.p(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcr(q),a1)
C.e.p(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcr(q)
break
default:a1=e}h=C.e.cV(q,0,new B.bKV())
s=a6==null
if(s)g=D.bzh
else{r=a6.b
p=A.a8(r).i("a7<1>")
g=A.U(new A.a7(r,new B.bKW(),p),p.i("y.E"))}if(s)a1=D.bXP
else{s=f.gaR3()
r=y.p
p=A.a([new A.pu(A.a([new A.qP(s,"Nova despesa",e)],r),e),D.aHh,K.cWf(f.gap8(),w),new B.aPN(a6,new B.bKX(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aJ(a6.gq0(),!1)
n=a5.length
m=n===1?d:a0
l=A.aJ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c3("N\xfameros",e,A.a([new A.E0(A.a([new A.ld("Gasto",o,""+n+" "+m,e),new A.ld("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.p(o,A.a([new N.mc(A.a([new A.ej("Todos",l===D.J2,n+m,new B.bKY(f),e),new A.ej("Pendentes",l===D.abD,m,new B.bKZ(f),e),new A.ej("Pagos",l===D.abC,n,new B.bL_(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aGq(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c3("Pagamentos",e,o,16,e))
a1=A.a([new A.h7(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDN(g,f.x,new B.bL0(f),e))
p.push(new A.c3("Categorias",e,a1,16,e))
p.push(new A.c3("Exportar",e,A.a([new F.DR("Gastos e parceiros",!1,new B.bL1(f),e)],r),16,e))
a1=A.nM(C.eZ,40,p,e,!0,!1)}return A.cP(e,C.cQ,a1,!0,e)},
Ir(d){return this.aY1(d)},
aY1(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Ir=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUa(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Ir)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gR().a_(0,$.CK().gaX(),y.x).a_2(r),$async$Ir)
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
return A.m($async$Ir,w)}}
B.aPN.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gq0()>0?"Gastos "+A.aJ(t.gq0(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vo(new A.hk("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hG,0,"por definir","\u2014")}x=C.k.aN(t.gaBp()*100)
w=s-t.gq0()<0?"Acima do teto":"Ainda tens"
v=A.aJ(Math.abs(s-t.gq0()),!1)
s=A.aJ(s,!1)
u=t.gaBp()
return A.aX(A.vo(H.a1G,"Gastos "+A.aJ(t.gq0(),!1)+" \xb7 "+x+"% do teto",w,C.hG,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDN.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dz(s,0,A.et(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDO(r[w],null))
q=A.a([A.eQ(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hk(u,v.e,!0,null))}return A.x(q,C.E,C.h,C.l)}}
B.aDO.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cB($.cq(),new B.bNf(),y.v,m),m)
if(l==null)x=C.r0
else{m=e.G($.d1B().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r0:m}m=A.a([],y.s)
for(w=B.dhu(o.c),v=w.length,u=J.a6(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.p(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNh(this,d)
if(w)return A.k3(!1,!1,p,v,A.aJ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mP("P\xf4r teto",new B.bNg(this,d,e),!0,p))
w=A.aJ(o.b,!1)
u=A.aJ(n,!1)
s=y.p
q=A.a([A.aK(new A.a4l(r,6,p),p,92)],s)
if(m.length!==0)C.e.p(q,A.a([C.aC,new B.anz(m,p)],s))
return A.k3(!1,!1,p,v,w+" de "+u,o.a,A.x(q,C.dL,C.h,C.J))}}
B.aDk.prototype={
u(d){var x,w,v=null,u=$.au,t=$.f1.ce(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.hY(r,A.aK(p==null?A.kP(A.b9(C.ib,u,v,v,v),C.t,!0):A.pq(p,144,new B.bK7(u),!1,C.bD,A.wB(),!1,v,v,v),48,48),C.be)
p=A.h(q.b,1,C.a1,v,v,D.c3B,v,v)
x=A.b9(C.id,u,v,v,14)
w=q.d
q=w>0?q.gPv()+" \xb7 "+A.aJ(w,!1):q.gPv()
w=y.p
return new A.S(C.d0,A.aX(A.w(v,A.O(A.a([r,C.af,A.a5(A.x(A.a([p,C.j9,A.O(A.a([x,C.dY,new A.dg(1,C.bb,A.h(q,1,C.a1,v,v,A.aH(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bo,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.u,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b9(C.ig,u,v,v,v)],w),C.u,C.h,C.l,0,v),C.r,v,v,new A.J(t,v,v,s,v,v,C.x),v,v,v,C.eg,v,v,v),new B.bK8(d),v),v)}}
B.aGq.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JV(A.a([new A.hk("+ Nova despesa",this.f,!0,j)],y.p),C.eR,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aB7
x=new B.bX_(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+B.dcV(m)
v.push(new A.th(new A.ch(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bWW(d,e,s,q),A.HZ(m)===C.f5,j))
continue}p=r?new B.bWX(d):new B.bWY(x,s)
v.push(new B.XI(s,p,r||s.w?j:new B.bWZ(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XI&&v[k-1] instanceof B.XI)u.push(C.iL)
u.push(v[k])
C.e.p(i,u)}i.push(D.aAO)
return A.x(i,C.E,C.h,C.l)}}
B.XI.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aJ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dcV(w))
v=C.e.a2(v," \xb7 ")
if(u)u=D.aGX
else{u=this.e
u=u!=null?new A.mP("Marcar pago",u,!0,null):D.aH3}return A.k3(!1,!1,null,this.d,v,x.c,u)}}
B.aCr.prototype={}
B.O1.prototype={
P(){var x=$.aa()
return new B.abB(new A.aF(C.ak,x),new A.aF(C.ak,x))}}
B.abB.prototype={
ac(){var x=this
x.ap()
x.d.al(0,new B.bHP(x))
x.e.al(0,new B.bHQ(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.V$=0
x=this.e
x.Z$=w
x.V$=0
this.a6()},
gahv(){var x=C.f.B(this.e.a.a)
x=A.aY(x," ","")
return A.eU(A.aY(x,",","."))},
aSi(){var x,w,v,u,t=this,s=t.gahv()
t.n(new B.bHC(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.an(w,!1)
v=t.w
u=v?null:t.f
w.aq(new B.aCr(x,s,u,t.r,v))},
arT(d,e,f,g,h){var x=null,w=h?C.fp:x,v=y.p,u=A.a5(A.x(A.a([A.h(d,x,x,x,x,C.a9,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.br:x,s=f?x:A.bG(C.ku,1.5),r=f?S.vm:x
return A.bh(x,!0,x,A.cp(C.bu,A.w(x,A.O(A.a([u,A.w(x,r,C.r,x,x,new A.J(t,x,s,x,x,x,C.ap),x,24,x,x,x,x,24)],v),C.u,C.h,C.l,0,x),C.r,x,C.cM,new A.J(x,x,w,x,x,x,C.x),x,x,x,C.hu,x,x,x),C.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bir(d,e,f,g){return this.arT(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahv()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bHM()
t=y.w
s=A.aT(d,k,t).w
r=y.p
q=A.a([D.c7Q],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k))
q=A.O(A.a([A.a5(A.x(q,C.G,C.h,C.l),1),A.bh(k,!0,k,A.cp(k,A.w(k,C.hC,C.r,k,k,C.bV,k,44,k,k,k,k,44),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHH(d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.u,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c8V,A.O(A.a([V.d61(A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),l.e,k,k,k,k,k,2,D.aF_,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.fL,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aal,!0,C.dC,k,C.b0,k,k,k,k)),C.bf,D.c8j],r),C.ee,C.bQ,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cYO(v)+" no teto":"Passa o teto em "+B.cYO(-v)
o.push(A.h(m,k,k,k,k,A.aH(k,k,n?C.W:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c7w)
p=A.w(k,A.x(o,C.u,C.h,C.l),C.r,k,k,new A.J(C.a3,k,k,p,k,k,C.x),k,k,k,C.bp,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bG(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d0,o,k),A.w(C.bc,A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),x,k,k,k,k,k,2,D.aEE,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fj,!0,C.au,k,C.hb,k,k,k,k),C.r,k,k,new A.J(C.a3,k,m,n,k,k,C.x),k,52,k,C.fs,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bLj)
n.push(C.a_)
n.push(new U.a1y(l.r,new B.bHI(l),k))
n.push(C.a_)
n.push(new A.S(C.d0,A.h("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bir("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHJ(l)),l.arT("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHK(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aE(p)))
m=l.f
m.toString
m=A.p(w.$1(A.aw(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aL(w)}o.push(A.bh(k,!0,k,A.cp(C.bu,A.aK(A.O(A.a([D.azy,A.h(w,k,k,k,k,C.cc,k,k),C.dY,C.jV],r),C.u,C.h,C.l,0,k),56,k),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHL(l,d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.w(k,A.x(o,C.u,C.h,C.l),C.r,k,k,new A.J(C.a3,k,k,x,k,k,C.x),k,k,k,C.cs,k,k,k))
n.push(C.a_)
n.push(D.cdo)
x=A.dR(A.x(n,C.E,C.h,C.l),C.y,k,C.eh,k,C.av)
t=A.aT(d,C.b5,t).w
w=A.ce(u?C.z:C.z.ce(0.35),k,k,C.t,k,k,C.ab,k,k,C.eJ)
return new A.S(new A.a4(0,0,0,s.f.d),A.x(A.a([new A.S(C.jG,q,k),new A.dg(1,C.bb,x,k),new A.S(new A.a4(20,16,20,20+t.r.d),A.aK(new A.ak(A.bD(A.h(u?"Guardar \xb7 "+B.cYO(j):"Guardar",k,k,k,k,k,k,k),l.gaSh(),w),k),52,k),k)],r),C.E,C.h,C.J),k)}}
B.Xl.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CK(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.f4(new A.a7(j,new B.bNj(l),A.a8(j).i("a7<1>")))
x=j}if(x==null)x=l.e
j=e.G($.am9(),y.g).b
w=A.a8(j).i("a7<1>")
v=A.U(new A.a7(j,new B.bNk(l),w),w.i("y.E"))
C.e.cv(v,new B.bNl())
j=y.T
u=e.G(A.cB($.cq(),new B.bNm(),y.v,j),j)
t=B.dhu(l.e.c)
if(u==null)s=I.Fl
else{j=e.G($.aW4().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fl
j=J.dm(j,new B.bNn(t))
s=A.U(j,j.$ti.i("y.E"))}j=A.aT(d,k,y.w).w
w=A.bN(A.w(k,k,C.r,k,k,new A.J(C.bG,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ay(d).ok.r,k,k)
q=A.a5(new B.ai7("Gasto",A.aJ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aA,A.O(A.a([q,C.ae,A.a5(A.aX(new B.ai7("Teto \xb7 tocar para mudar",p===0?"Definir":A.aJ(p,!1),k),new B.bNo(d,e,x),k),1)],o),C.u,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bk,A.h("Contratado na app",k,k,k,k,A.ay(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aDk(s[n],k))
C.e.p(p,w)}p.push(C.bk)
p.push(A.h("Despesas",k,k,k,k,A.ay(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKH)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.iu,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aT(C.j.k(A.aE(q)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(q)),2,"0")+"/"+A.aL(q),k,k,k,k,k,k,k)
p.push(A.jp(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aJ(m.f,!1),k,k,k,k,D.c5F,k,k),C.ac,new P.Dj(m.w,new B.bNp(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J4,k)],o),C.u,C.h,C.J,0,k),k))}return A.bB(!0,new A.ec(new A.aR(0,1/0,0,j.a.b*0.8),A.d6(p,k,L.CT,k,k,!1,!0),k),k,C.Z,!0)}}
B.ai7.prototype={
u(d){var x=null,w=A.W(16)
return A.w(x,A.x(A.a([A.h(this.c,x,x,x,x,C.bg,x,x),C.ar,A.h(this.d,x,x,x,x,M.aa8,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.J(C.a3,x,x,w,x,x,C.x),x,x,x,C.cU,x,x,x)}}
B.aCw.prototype={
b9(d,e){var x,w=y.t,v=e.G(A.cB($.cq(),new B.bIM(),y.v,w),w),u=e.G($.d1A(),y.o)
w=e.G($.uH(),y.l)
x=w.gv(w)
return A.hE(u,new B.bIN(this,new B.bIS(x==null?C.fd:x),v),new B.bIO(e),new B.bIP(),!1,!0,!1)}}
B.anz.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.f1
s=new A.b5(999,999)
r=new A.bc(o.ce(0.25),1,C.ag,-1)
q=A.b9(C.id,o,p,p,13)
t=A.w(p,A.O(A.a([q,C.rJ,new A.dg(1,C.bb,A.h(u,1,C.a1,p,p,new A.P(!0,o,p,p,p,p,14,C.d2,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b9(C.ig,o,p,p,16)],n),C.u,C.h,C.J,0,p),C.r,p,D.afr,new A.J(t,p,new A.dN(r,r,r,r),new A.cz(s,s,s,s),p,p,C.x),p,p,p,D.au6,p,p,p)
m.push(new A.jt(new A.n8(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hz(t,new B.aYN(d),p,p),p))}return A.e5(C.bh,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["C(i6)","T(T,i6)","v(i6,i6)","T(T,DF)","zW()","F<~>(c?)","F<~>()","O1(N)","C(DF)","F<lV>()","Xl(N)","~(i6)","~()","C(nt)","C(rR)","i6(a3<c,@>)","DQ()"])
B.cHj.prototype={
$1(d){return this.aEI(d)},
aEI(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.u1(a1)
u=y.t
t=a1.G(A.cB($.cq(),new B.cHf(),y.v,u),u)
u=J.a6(t)
if(u.gY(t)){v=D.bzi
x=1
break}s=A.a([],y.s)
for(r=u.gW(t);r.q();)s.push(r.gE(r).a)
r=$.Q()
q=r.b
q===$&&A.b()
p=y.G
o=q.S("budgets").an(0,"wedding_id, total").dG("wedding_id",s).b6(new B.cHg(),p)
n=r.b.S("budget_categories").an(0,"wedding_id, amount").dG("wedding_id",s).b6(new B.cHh(),p)
m=r.b.S("expenses").an(0,"wedding_id, amount, paid").dG("wedding_id",s).b6(new B.cHi(),p)
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
r.j(0,A.a_(i.h(j,"wedding_id")),A.ds(i.h(j,"total")))
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
j=A.aD(i.h(j,"amount"))
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
p=A.aD(l.h(p,"amount"))
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
s.push(new A.aN0([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1297}
B.cHf.prototype={
$1(d){return d.c},
$S:142}
B.cHg.prototype={
$1(d){return d},
$S:44}
B.cHh.prototype={
$1(d){return d},
$S:44}
B.cHi.prototype={
$1(d){return d},
$S:44}
B.b3Q.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5t.prototype={
$1(d){return d.w},
$S:z+0}
B.b5u.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5q.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.b5r.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b5s.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKN.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKO.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bL4.prototype={
$0(){return this.a.gR().a_(0,$.CK().gaX(),y.x).Zj(0).e1(new B.bL3())},
$S:1}
B.bL3.prototype={
$1(d){},
$S:13}
B.bKJ.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKL.prototype={
$1(d){return A.CG(C.k.a8(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKM(),null)+" \u20ac"},
$S:114}
B.bKM.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:42}
B.bKK.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a2(v," \xb7 ")
u=x&&u>0?u:null
return new B.O1(v,u,w.d,null)},
$S:z+7}
B.bKT.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bKU.prototype={
$1(d){return d.x!==C.ea&&d.b===this.a},
$S:61}
B.bL2.prototype={
$2(d,e){return A.jj(d,this.a.l8(e))},
$1(d){return this.$2(d,null)},
$S:1300}
B.bKV.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKW.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bKX.prototype={
$0(){return this.a.Ir(this.b.a)},
$S:0}
B.bKY.prototype={
$0(){var x=this.a
return x.n(new B.bKS(x))},
$S:0}
B.bKS.prototype={
$0(){return this.a.w=D.J2},
$S:0}
B.bKZ.prototype={
$0(){var x=this.a
return x.n(new B.bKR(x))},
$S:0}
B.bKR.prototype={
$0(){return this.a.w=D.abD},
$S:0}
B.bL_.prototype={
$0(){var x=this.a
return x.n(new B.bKQ(x))},
$S:0}
B.bKQ.prototype={
$0(){return this.a.w=D.abC},
$S:0}
B.bL0.prototype={
$0(){var x=this.a
return x.n(new B.bKP(x))},
$S:0}
B.bKP.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bL1.prototype={
$0(){return B.Cz(this.a.gR().a_(0,$.cq(),y.v).b.a)},
$S:z+9}
B.cDA.prototype={
$1(d){var x=null,w=this.b
return new A.eT(A.h(this.a,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.cu(),w,x,x,x,x,x,2,D.aFd,C.U,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.fL,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b0,x,x,x,x),A.a([new A.ak(A.cK(C.cZ,x,x,new B.cDy(d),x,x),x),new A.ak(A.bD(C.dw,new B.cDz(d,w),x),x)],y.p),x)},
$S:19}
B.cDy.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
B.cDz.prototype={
$0(){var x=A.an(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aY(w," ","")
return x.aq(A.eU(A.aY(w,",",".")))},
$S:0}
B.cDK.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.c_(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.c_(2100,1,1,0,0):x)},
$S:z+2}
B.bNf.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNh.prototype={
$0(){return A.bP(null,new B.bNi(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNi.prototype={
$1(d){return new B.Xl(this.a.e.a,null)},
$S:z+10}
B.bNg.prototype={
$0(){return B.akJ(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bK8.prototype={
$0(){var x=this.a
A.an(x,!1).bj()
A.ae(x).ah("/bookings",null,y.X)},
$S:0}
B.bK7.prototype={
$3(d,e,f){return A.kP(A.b9(C.ib,this.a,null,null,null),C.t,!0)},
$S:94}
B.bX_.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.am9().gaX(),y.h).On(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a0(A.bZ(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bWW.prototype={
$0(){var x=this
return A.rJ(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bWX.prototype={
$0(){return A.ae(this.a).ah("/bookings",null,y.X)},
$S:0}
B.bWY.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bWZ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHP.prototype={
$0(){return this.a.n(new B.bHO())},
$S:0}
B.bHO.prototype={
$0(){},
$S:0}
B.bHQ.prototype={
$0(){return this.a.n(new B.bHN())},
$S:0}
B.bHN.prototype={
$0(){},
$S:0}
B.bHB.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:42}
B.bHC.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHM.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:36}
B.bHH.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
B.bHI.prototype={
$1(d){var x=this.a
return x.n(new B.bHG(x,d))},
$S:126}
B.bHG.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHJ.prototype={
$0(){var x=this.a
return x.n(new B.bHF(x))},
$S:0}
B.bHF.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHK.prototype={
$0(){var x=this.a
return x.n(new B.bHE(x))},
$S:0}
B.bHE.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHL.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ad(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cNI(v.b,A.c_(A.aL(t)-1,1,1,0,0),r,A.c_(A.aL(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.n(new B.bHD(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHD.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNj.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNk.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNl.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.c_(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.c_(2100,1,1,0,0):x)},
$S:z+2}
B.bNm.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNn.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bNo.prototype={
$0(){var x=this.c
return B.akJ(this.a,this.b,x.a,x.d)},
$S:0}
B.bNp.prototype={
$1(d){return this.a.a_(0,$.am9().gaX(),y.h).On(this.b.a)},
$S:130}
B.bIM.prototype={
$1(d){return d.c},
$S:142}
B.bIS.prototype={
$2(d,e){return A.jj(d,this.a.l8(e))},
$S:45}
B.bIP.prototype={
$0(){return D.bLl},
$S:87}
B.bIO.prototype={
$2(d,e){return A.JV(A.a([new A.hk("Tentar outra vez",new B.bIF(this.a),!1,null)],y.p),C.eR,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1301}
B.bIF.prototype={
$0(){return this.a.ai($.d1A())},
$S:0}
B.bIN.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIQ(g),e=new B.bIR(g,this.b),d=J.ca(a4),a0=d.cV(a4,0,new B.bIG()),a1=d.cV(a4,0,new B.bIH(f)),a2=d.cV(a4,0,new B.bII(e)),a3=y.N
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
x=A.vo(i,""+t+" "+r+w,"Todos os eventos",C.hG,u,v,x)
v=y.p
u=A.a([new A.E0(A.a([new A.ld("Gasto",A.aJ(a1,!1),h,i),new A.ld("Por pagar",A.aJ(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eu(a4,0,y.A),r=J.ao(t.a),q=t.b,t=new A.bY(r,q,A.u(t).i("bY<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.am(A.c1())
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
k.push("por pagar "+A.aJ(j[3]+e.$1(j[0]),!1))}n=A.x(A.a([n,C.aU,A.h(C.e.a2(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.hz(A.w(i,A.O(A.a([new A.bK(1,C.at,n,i),C.ae,A.h(A.aJ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.bf,C.jV],v),C.u,C.h,C.l,0,i),C.r,C.as,C.cM,i,i,i,i,C.ck,i,i,i),new B.bIJ(o,g),i,i))
C.e.p(w,l)}return A.x(A.a([x,new A.c3("N\xfameros",i,u,16,i),new A.c3("Por evento \xb7 "+d,i,w,16,i),D.aAQ],v),C.E,C.h,C.l)},
$S:1302}
B.bIQ.prototype={
$1(d){return J.dm(this.a.e,new B.bID(d)).cV(0,0,new B.bIE())},
$S:164}
B.bID.prototype={
$1(d){return d.b===this.a&&d.x!==C.ea},
$S:61}
B.bIE.prototype={
$2(d,e){return d+e.w},
$S:485}
B.bIR.prototype={
$1(d){return J.dm(this.a.e,new B.bIK(d)).cV(0,0,new B.bIL(this.b))},
$S:164}
B.bIK.prototype={
$1(d){return d.b===this.a&&d.x!==C.ea},
$S:61}
B.bIL.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:485}
B.bIG.prototype={
$2(d,e){return d+e.a[2]},
$S:236}
B.bIH.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:236}
B.bII.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:236}
B.bIJ.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYN.prototype={
$0(){return A.ae(this.a).ah("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKn","cZE",15)
w(B,"dKm","dr8",16)
v(B.DQ.prototype,"giF","d0",4)
var t
u(t=B.abX.prototype,"gap8","Tv",5)
v(t,"gaR3","PY",6)
v(B.abB.prototype,"gaSh","aSi",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cHj,B.cHf,B.cHg,B.cHh,B.cHi,B.b5t,B.b5u,B.b5q,B.b5s,B.bL3,B.bKL,B.bKM,B.bKK,B.bKT,B.bKU,B.bL2,B.bKW,B.cDA,B.bNf,B.bNi,B.bK7,B.bX_,B.bHB,B.bHM,B.bHI,B.bNj,B.bNk,B.bNm,B.bNn,B.bNp,B.bIM,B.bIN,B.bIQ,B.bID,B.bIR,B.bIK])
x(A.M,[B.DF,B.b3P,B.zW,B.Mz,B.a80,B.aCr])
x(A.cL,[B.b3Q,B.bKJ,B.bKV,B.cDK,B.bNl,B.bIS,B.bIO,B.bIE,B.bIL,B.bIG,B.bIH,B.bII])
w(B.DQ,A.fb)
x(A.bL,[B.b5r,B.bKN,B.bKO,B.bL4,B.bKX,B.bKY,B.bKS,B.bKZ,B.bKR,B.bL_,B.bKQ,B.bL0,B.bKP,B.bL1,B.cDy,B.cDz,B.bNh,B.bNg,B.bK8,B.bWW,B.bWX,B.bWY,B.bWZ,B.bHP,B.bHO,B.bHQ,B.bHN,B.bHC,B.bHH,B.bHG,B.bHJ,B.bHF,B.bHK,B.bHE,B.bHL,B.bHD,B.bNo,B.bIP,B.bIF,B.bIJ,B.aYN])
w(B.abW,A.f7)
w(B.D8,A.dC)
w(B.abX,A.dw)
x(A.L,[B.aPN,B.aDN,B.aDk,B.XI,B.ai7,B.anz])
x(A.ew,[B.aDO,B.aGq,B.Xl,B.aCw])
w(B.O1,A.G)
w(B.abB,A.Z)})()
A.br(b.typeUniverse,JSON.parse('{"DQ":{"fb":["zW"]},"O1":{"G":[],"e":[],"f":[]},"Xl":{"G":[],"e":[],"f":[]},"D8":{"G":[],"e":[],"f":[]},"abX":{"Z":["D8"]},"aPN":{"L":[],"e":[],"f":[]},"aDN":{"L":[],"e":[],"f":[]},"aDO":{"G":[],"e":[],"f":[]},"aDk":{"L":[],"e":[],"f":[]},"aGq":{"G":[],"e":[],"f":[]},"XI":{"L":[],"e":[],"f":[]},"abB":{"Z":["O1"]},"ai7":{"L":[],"e":[],"f":[]},"aCw":{"G":[],"e":[],"f":[]},"anz":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{l:x("ax<fa>"),k:x("ax<t<rR>>"),u:x("ax<t<fL>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("ax<a3<c,t<c>>>"),x:x("zz"),b:x("uU"),d:x("rW"),Z:x("ok"),v:x("ed"),_:x("i6"),h:x("DQ"),g:x("zW"),D:x("r<DF>"),r:x("r<i6>"),Q:x("r<ld>"),F:x("r<ej>"),Y:x("r<a3<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a80>"),c:x("r<Mz>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fL>"),t:x("t<fi>"),G:x("t<a3<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a3<c,@>"),w:x("dv"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lV"),N:x("c"),B:x("aCr"),q:x("dj"),i:x("T"),z:x("@"),S:x("v"),X:x("M?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afr=new A.aR(0,1/0,32,1/0)
D.au6=new A.a4(8,5,6,5)
D.ch2=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azy=new A.bK(1,C.at,D.ch2,null)
D.bz_=x([],y.r)
D.azO=new B.zW(!1,D.bz_)
D.aAO=new A.h7("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAQ=new A.h7("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aB7=new A.h7("Sem pagamentos nesta vista.",8,null)
D.aEE=new A.dE(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.b1,null,null,C.b1,C.b1,!0,null,null,null,null)
D.aF_=new A.dE(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.b1,null,null,C.b1,C.b1,!0,null,null,null,null)
D.aFd=new A.dE(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGX=new A.dU("Pago",C.cV,null)
D.aH3=new A.dU("Por pagar",C.hE,null)
D.aHb=new A.li("Or\xe7amento","Todos os teus eventos",null)
D.aHh=new A.li("Or\xe7amento",null,null)
D.byd=x(["catering"],y.s)
D.bzh=x([],y.D)
D.bzi=x([],y.n)
D.bzH=x(["flowers_decor"],y.s)
D.bBc=x(["music_dj","bands_musicians"],y.s)
D.bBM=x(["photography"],y.s)
D.bD_=x(["venue"],y.s)
D.aEt=new A.vj("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kC,null)
D.bKH=new A.S(C.fW,D.aEt,null)
D.c9i=new A.D("A despesa precisa de um t\xedtulo",null,C.mo,null,null,null,null,null,null,null)
D.bLj=new A.S(T.Nz,D.c9i,null)
D.bLl=new A.S(O.uL,C.f0,null)
D.bXP=new A.vZ(!1,6,!0,null)
D.c3B=new A.P(!0,C.z,null,null,null,null,14,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5F=new A.P(!0,null,null,null,null,null,null,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aal=new A.P(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7w=new A.D("Indica um valor v\xe1lido",null,C.mo,null,null,null,null,null,null,null)
D.c7Q=new A.D("Nova despesa",null,C.bj,null,null,null,null,null,null,null)
D.c8j=new A.D("\u20ac",null,D.aal,null,null,null,null,null,null,null)
D.c8V=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.cdo=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null)
D.J2=new B.abW(0,"all")
D.abC=new B.abW(1,"paid")
D.abD=new B.abW(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXP","d1A",()=>C.bK.$1$1(new B.cHj(),y.m))
x($,"dYF","am9",()=>A.mZ(B.dKm(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["xb4y2MZmEYwPvTKoaRZTSx2/kzA="]=a.current})($__dart_deferred_initializers__);