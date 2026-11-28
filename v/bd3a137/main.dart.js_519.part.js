((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cHa:function cHa(){},cH6:function cH6(){},cH7:function cH7(){},cH8:function cH8(){},cH9:function cH9(){},
dJ4(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.Dw(x[v]))
return new B.b3s(d.b,u)},
Dw:function Dw(d){this.a=d},
b3s:function b3s(d,e){this.a=d
this.b=e},
b3t:function b3t(){},
cZk(d){var x="category",w="due_date",v=J.a7(d),u=A.Y(v.h(d,"id")),t=A.Y(v.h(d,"wedding_id")),s=A.Y(v.h(d,"title")),r=B.dFj(B.de1(A.B(v.h(d,x)))),q=B.de1(A.B(v.h(d,x))),p=A.dv(v.h(d,"amount")),o=v.h(d,w)==null?null:A.dc(A.Y(v.h(d,w)))
v=A.dV(v.h(d,"paid"))
return new G.i4(u,t,s,r,q,p,o,v===!0)},
de1(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dFj(d){var x
A:{if("venue"===d){x=E.xO
break A}if("catering"===d){x=E.xK
break A}if("photography"===d){x=E.xL
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xM
break A}if("flowers_decor"===d){x=E.xN
break A}x=null
break A}return x},
dqL(){return new B.DH()},
zQ:function zQ(d,e){this.a=d
this.b=e},
b57:function b57(){},
b58:function b58(){},
DH:function DH(){this.b=this.x=null},
b54:function b54(){},
b55:function b55(d,e){this.a=d
this.b=e},
b56:function b56(d){this.a=d},
Cq(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cq=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akA(),$async$Cq)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").ai(0,"partner_name_1, partner_name_2").U("id",d).cf(),$async$Cq)
case 4:s=f
x=5
return A.d(u.b.P("bookings").ai(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").U("wedding_id",d).cI(0,"event_date",!1),$async$Cq)
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
return A.d(t.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").dL("booking_id",u).tt(0,"created_at"),$async$Cq)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").ai(0,"title, category, amount, due_date, paid").U("wedding_id",d).tt(0,"due_date"),$async$Cq)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").ai(0,"name, amount").U("wedding_id",d).tt(0,"position"),$async$Cq)
case 11:o=f
x=12
return A.d(u.b.P("budgets").ai(0,"total").U("wedding_id",d).cf(),$async$Cq)
case 12:n=f
m=F.cZ5(F.cE7(s),"Gastos e parceiros",r,q,!1)
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
g=g==null?null:g.dG()}u.push(new B.Mm(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ao(o);l.q();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eV(A.p(k))
if(k==null)k=0}t.push(new B.a7J(i,k))}l=n==null?null:F.cZD(J.i(n,"total"))
v=new F.lT(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cq,w)},
Mm:function Mm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7J:function a7J(d,e){this.a=d
this.b=e},
do3(){return new B.D_(null)},
aTS(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aTS=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.h0(!0,new B.cDx(e,new A.aF(new A.bE(u,C.aF,C.ax),$.aa())),d,y.i),$async$aTS)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTS,w)},
akt(d,e,f,g){return B.dF6(d,e,f,g)},
dF6(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akt=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aTS(d,"Teto para "+f,g),$async$akt)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.CB().gaX(),y.x).Oo(f,r),$async$akt)
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
return A.m($async$akt,w)},
dc5(d){var x=A.U(d,y._)
C.e.cr(x,new B.cDG())
return x},
dcz(d){var x=C.f.aT(C.j.k(A.aE(d)),2,"0"),w=C.f.aT(C.j.k(A.aw(d)),2,"0"),v=A.aM(d)===A.aM(new A.ac(Date.now(),0,!1))?"":"/"+A.aM(d)
return x+"/"+w+v},
cYt(d){var x,w,v,u
if(d===C.k.hB(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aX(w,".",",")}v=x.split(",")
u=A.Cx(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHE(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abG:function abG(d,e){this.a=d
this.b=e},
D_:function D_(d){this.a=d},
abH:function abH(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKQ:function bKQ(d){this.a=d},
bKR:function bKR(d){this.a=d},
bL7:function bL7(d){this.a=d},
bL6:function bL6(){},
bKM:function bKM(){},
bKO:function bKO(){},
bKP:function bKP(){},
bKN:function bKN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKW:function bKW(){},
bKX:function bKX(d){this.a=d},
bL5:function bL5(d){this.a=d},
bKY:function bKY(){},
bKZ:function bKZ(){},
bL_:function bL_(d,e){this.a=d
this.b=e},
bL0:function bL0(d){this.a=d},
bKV:function bKV(d){this.a=d},
bL1:function bL1(d){this.a=d},
bKU:function bKU(d){this.a=d},
bL2:function bL2(d){this.a=d},
bKT:function bKT(d){this.a=d},
bL3:function bL3(d){this.a=d},
bKS:function bKS(d){this.a=d},
bL4:function bL4(d){this.a=d},
cDx:function cDx(d,e){this.a=d
this.b=e},
cDv:function cDv(d){this.a=d},
cDw:function cDw(d,e){this.a=d
this.b=e},
cDG:function cDG(){},
aPt:function aPt(d,e,f){this.c=d
this.d=e
this.a=f},
aDs:function aDs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDt:function aDt(d,e){this.e=d
this.a=e},
bNg:function bNg(){},
bNi:function bNi(d,e){this.a=d
this.b=e},
bNj:function bNj(d){this.a=d},
bNh:function bNh(d,e,f){this.a=d
this.b=e
this.c=f},
aD_:function aD_(d,e){this.c=d
this.a=e},
bKb:function bKb(d){this.a=d},
bKa:function bKa(d){this.a=d},
aG6:function aG6(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bX1:function bX1(d,e){this.a=d
this.b=e},
bWY:function bWY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWZ:function bWZ(d){this.a=d},
bX_:function bX_(d,e){this.a=d
this.b=e},
bX0:function bX0(d,e){this.a=d
this.b=e},
Xw:function Xw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aC6:function aC6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NN:function NN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abl:function abl(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bHS:function bHS(d){this.a=d},
bHR:function bHR(){},
bHT:function bHT(d){this.a=d},
bHQ:function bHQ(){},
bHE:function bHE(){},
bHF:function bHF(d){this.a=d},
bHP:function bHP(){},
bHK:function bHK(d){this.a=d},
bHL:function bHL(d){this.a=d},
bHJ:function bHJ(d,e){this.a=d
this.b=e},
bHM:function bHM(d){this.a=d},
bHI:function bHI(d){this.a=d},
bHN:function bHN(d){this.a=d},
bHH:function bHH(d){this.a=d},
bHO:function bHO(d,e){this.a=d
this.b=e},
bHG:function bHG(d,e){this.a=d
this.b=e},
X9:function X9(d,e){this.e=d
this.a=e},
bNk:function bNk(d){this.a=d},
bNl:function bNl(d){this.a=d},
bNm:function bNm(){},
bNn:function bNn(){},
bNo:function bNo(d){this.a=d},
bNp:function bNp(d,e,f){this.a=d
this.b=e
this.c=f},
bNq:function bNq(d,e){this.a=d
this.b=e},
ahS:function ahS(d,e,f){this.c=d
this.d=e
this.a=f},
aCb:function aCb(d,e,f){this.e=d
this.f=e
this.a=f},
bIP:function bIP(){},
bIV:function bIV(d){this.a=d},
bIS:function bIS(){},
bIR:function bIR(d){this.a=d},
bII:function bII(d){this.a=d},
bIQ:function bIQ(d,e,f){this.a=d
this.b=e
this.c=f},
bIT:function bIT(d){this.a=d},
bIG:function bIG(d){this.a=d},
bIH:function bIH(){},
bIU:function bIU(d,e){this.a=d
this.b=e},
bIN:function bIN(d){this.a=d},
bIO:function bIO(d){this.a=d},
bIJ:function bIJ(){},
bIK:function bIK(d){this.a=d},
bIL:function bIL(d){this.a=d},
bIM:function bIM(d,e){this.a=d
this.b=e},
anj:function anj(d,e){this.c=d
this.a=e},
aYs:function aYs(d){this.a=d},
dh5(d){var x
switch(d){case E.xO:x=D.bCV
break
case E.xK:x=D.by8
break
case E.xL:x=D.bBH
break
case E.xM:x=D.bB7
break
case E.xN:x=D.bzC
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
B.Dw.prototype={
gap(d){return this.a.a}}
B.b3s.prototype={
gpX(){return C.e.cU(this.b,0,new B.b3t())},
gaBn(){var x=this.a
return x===0?0:C.k.ae(this.gpX()/x,0,1)}}
B.zQ.prototype={
gbyB(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b57(),w),w.i("w.E"))
return x},
gbyW(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b58(),w),w.i("w.E"))
return x},
awy(d,e){var x=e==null?this.a:e
return new B.zQ(x,d==null?this.b:d)},
ik(d){return this.awy(null,d)},
awg(d){return this.awy(d,null)}}
B.DH.prototype={
d0(){var x=y.T,w=this.x=A.eQ(this).G(A.cB($.cq(),new B.b54(),y.v,x),x)
if(w!=null)A.j5(new B.b55(this,w),y.H)
return D.azJ},
bY(d,e){return this.bw0(0,e)},
bw0(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ik(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").ck(0).U("wedding_id",e).cI(0,"created_at",!0),$async$bY)
case 2:v.sa4(0,new t.zQ(s,r.da(g,B.dJW(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
Vj(d){return this.blZ(d)},
blZ(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vj=A.j(function(e,f){if(e===1)return A.k(f,w)
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
return A.d(r.d4(0,u).ck(0).dO(0),$async$Vj)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cZk(s))
v.sa4(0,r.awg(u))
return A.l(null,w)}})
return A.m($async$Vj,w)},
Ol(d){return this.bBt(d)},
bBt(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Ol=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lb(v.ga4(0).b,new B.b56(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bh(0,A.R(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).cg()],u,u)).U("id",d).ck(0).dO(0),$async$Ol)
case 2:t=l.cZk(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.awg(m))
return A.l(null,w)}})
return A.m($async$Ol,w)}}
B.Mm.prototype={}
B.a7J.prototype={
gap(d){return this.a}}
B.abG.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D_.prototype={
R(){return new B.abH(D.J1)}}
B.abH.prototype={
Tu(d){return this.bbT(d)},
bbT(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Tu=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKQ(u))
x=1
break}u.p(new B.bKR(u))
t=u.gS()
s=$.cq()
r=t.a_(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a_(0,s.gaX(),y.Z).ai(0,d),$async$Tu)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Tu,w)},
ad(){this.aq()
A.j5(new B.bL7(this),y.H)},
PW(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$PW=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.alU()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.CB(),y.b).b
s=t==null?null:t.b
r=C.e.cU(o.a_(0,n,y.g).b,0,new B.bKM())
t=o.a_(0,$.cq(),y.v).b
q=t==null?null:t.gcw()
t=u.c
t.toString
x=3
return A.d(A.bQ(null,new B.bKN(q,s,new B.bKO(),r),!1,t,!0,!0,null,y.B),$async$PW)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vj(new G.i4("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$PW,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CB(),y.b),a3=a1.G($.HV(),y.d),a4=a1.G($.alU(),y.g),a5=a2.b,a6=a5==null?e:B.dJ4(a5,a3.b)
a5=A.j1(a1.G($.j_(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iU
a5=y.T
w=a1.G(A.cB($.cq(),new B.bKW(),y.v,a5),a5)
if(f.y){a1=f.gap8()
return A.cP(e,C.cP,A.nJ(C.f_,40,A.a([C.fw,D.aH7,K.cVS(a1,e),new B.aCb(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.db(x,new B.bKX(w))
a1=a1.G($.uC(),y.l)
u=a1.gv(a1)
t=new B.bL5(u==null?C.fd:u)
a1=y._
a5=A.U(a4.gbyB(),a1)
for(s=v.a,r=J.c9(s),q=r.gX(s),p=v.b,o=v.$ti.i("fz<1>"),n=new A.fz(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i4("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbyW(0),a1)
for(s=r.gX(s),o=new A.fz(s,p,o),p=y.r;o.q();){r=s.gE(s)
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
n.push(new G.i4("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dc5(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dc5(q)
break
default:a1=e}h=C.e.cU(q,0,new B.bKY())
s=a6==null
if(s)g=D.bzb
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bKZ(),p),p.i("w.E"))}if(s)a1=D.bXH
else{s=f.gaQZ()
r=y.p
p=A.a([new A.ps(A.a([new A.qL(s,"Nova despesa",e)],r),e),D.aHd,K.cVS(f.gap8(),w),new B.aPt(a6,new B.bL_(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aJ(a6.gpX(),!1)
n=a5.length
m=n===1?d:a0
l=A.aJ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c2("N\xfameros",e,A.a([new A.DS(A.a([new A.la("Gasto",o,""+n+" "+m,e),new A.la("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.mb(A.a([new A.ej("Todos",l===D.J1,n+m,new B.bL0(f),e),new A.ej("Pendentes",l===D.abA,m,new B.bL1(f),e),new A.ej("Pagos",l===D.abz,n,new B.bL2(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aG6(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c2("Pagamentos",e,o,16,e))
a1=A.a([new A.h5(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDs(g,f.x,new B.bL3(f),e))
p.push(new A.c2("Categorias",e,a1,16,e))
p.push(new A.c2("Exportar",e,A.a([new F.DI("Gastos e parceiros",!1,new B.bL4(f),e)],r),16,e))
a1=A.nJ(C.f_,40,p,e,!0,!1)}return A.cP(e,C.cP,a1,!0,e)},
Iq(d){return this.aXU(d)},
aXU(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Iq=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aTS(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Iq)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a_(0,$.CB().gaX(),y.x).a_0(r),$async$Iq)
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
return A.m($async$Iq,w)}}
B.aPt.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpX()>0?"Gastos "+A.aJ(t.gpX(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vj(new A.hh("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hF,0,"por definir","\u2014")}x=C.k.aN(t.gaBn()*100)
w=s-t.gpX()<0?"Acima do teto":"Ainda tens"
v=A.aJ(Math.abs(s-t.gpX()),!1)
s=A.aJ(s,!1)
u=t.gaBn()
return A.aY(A.vj(H.a1C,"Gastos "+A.aJ(t.gpX(),!1)+" \xb7 "+x+"% do teto",w,C.hF,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDs.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dz(s,0,A.et(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDt(r[w],null))
q=A.a([A.eR(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hh(u,v.e,!0,null))}return A.y(q,C.E,C.h,C.l)}}
B.aDt.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cB($.cq(),new B.bNg(),y.v,m),m)
if(l==null)x=C.r1
else{m=e.G($.d1j().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r1:m}m=A.a([],y.s)
for(w=B.dh5(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNi(this,d)
if(w)return A.k0(!1,!1,p,v,A.aJ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mL("P\xf4r teto",new B.bNh(this,d,e),!0,p))
w=A.aJ(o.b,!1)
u=A.aJ(n,!1)
s=y.p
q=A.a([A.aK(new A.a43(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aE,new B.anj(m,p)],s))
return A.k0(!1,!1,p,v,w+" de "+u,o.a,A.y(q,C.dJ,C.h,C.J))}}
B.aD_.prototype={
u(d){var x,w,v=null,u=$.au,t=$.fj.cc(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fS(r,A.aK(p==null?A.kM(A.b9(C.i8,u,v,v,v),C.t,!0):A.po(p,144,new B.bKa(u),!1,C.bE,A.wv(),!1,v,v,v),48,48),C.ba)
p=A.h(q.b,1,C.a1,v,v,D.c3q,v,v)
x=A.b9(C.ia,u,v,v,14)
w=q.d
q=w>0?q.gPt()+" \xb7 "+A.aJ(w,!1):q.gPt()
w=y.p
return new A.S(C.d0,A.aY(A.x(v,A.O(A.a([r,C.af,A.a4(A.y(A.a([p,C.j6,A.O(A.a([x,C.dY,new A.di(1,C.bb,A.h(q,1,C.a1,v,v,A.aI(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bm,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b9(C.ic,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.x),v,v,v,C.ef,v,v,v),new B.bKb(d),v),v)}}
B.aG6.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JH(A.a([new A.hh("+ Nova despesa",this.f,!0,j)],y.p),C.eS,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aB2
x=new B.bX1(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.H)(i),++t){s=i[t]
r=s.a
q=C.f.cW(r,":pay:")
r=C.f.b1(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gJ(r.split(" \xb7 "))
n=A.aJ(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.dcz(m)
v.push(new A.td(new A.cg(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bWY(d,e,s,q),A.HO(m)===C.f6,j))
continue}p=r?new B.bWZ(d):new B.bX_(x,s)
v.push(new B.Xw(s,p,r||s.w?j:new B.bX0(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xw&&v[k-1] instanceof B.Xw)u.push(C.iK)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAJ)
return A.y(i,C.E,C.h,C.l)}}
B.Xw.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aJ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dcz(w))
v=C.e.a1(v," \xb7 ")
if(u)u=D.aGT
else{u=this.e
u=u!=null?new A.mL("Marcar pago",u,!0,null):D.aH_}return A.k0(!1,!1,null,this.d,v,x.c,u)}}
B.aC6.prototype={}
B.NN.prototype={
R(){var x=$.aa()
return new B.abl(new A.aF(C.ak,x),new A.aF(C.ak,x))}}
B.abl.prototype={
ad(){var x=this
x.aq()
x.d.an(0,new B.bHS(x))
x.e.an(0,new B.bHT(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
gahw(){var x=C.f.B(this.e.a.a)
x=A.aX(x," ","")
return A.eV(A.aX(x,",","."))},
aSb(){var x,w,v,u,t=this,s=t.gahw()
t.p(new B.bHF(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.al(w,!1)
v=t.w
u=v?null:t.f
w.af(new B.aC6(x,s,u,t.r,v))},
arT(d,e,f,g,h){var x=null,w=h?C.fo:x,v=y.p,u=A.a4(A.y(A.a([A.h(d,x,x,x,x,C.a9,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.bp:x,s=f?x:A.bF(C.kv,1.5),r=f?S.vm:x
return A.bi(x,!0,x,A.cp(C.bu,A.x(x,A.O(A.a([u,A.x(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.ap),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.cL,new A.I(x,x,w,x,x,x,C.x),x,x,x,C.ht,x,x,x),C.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aD),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bil(d,e,f,g){return this.arT(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahw()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bHP()
t=y.w
s=A.aT(d,k,t).w
r=y.p
q=A.a([D.c7F],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k))
q=A.O(A.a([A.a4(A.y(q,C.G,C.h,C.l),1),A.bi(k,!0,k,A.cp(k,A.x(k,C.hB,C.r,k,k,C.bV,k,44,k,k,k,k,44),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHK(d),k,k,k,k,k,k,!1,C.aD),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c8K,A.O(A.a([V.d5J(A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),l.e,k,k,k,k,k,2,D.aEW,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.fK,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aai,!0,C.dB,k,C.b0,k,k,k,k)),C.bj,D.c88],r),C.ed,C.bR,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cYt(v)+" no teto":"Passa o teto em "+B.cYt(-v)
o.push(A.h(m,k,k,k,k,A.aI(k,k,n?C.W:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c7l)
p=A.x(k,A.y(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a4,k,k,p,k,k,C.x),k,k,k,C.bn,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bF(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d0,o,k),A.x(C.bc,A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),x,k,k,k,k,k,2,D.aEA,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fi,!0,C.au,k,C.hb,k,k,k,k),C.r,k,k,new A.I(C.a4,k,m,n,k,k,C.x),k,52,k,C.fr,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bLe)
n.push(C.a_)
n.push(new U.a1h(l.r,new B.bHL(l),k))
n.push(C.a_)
n.push(new A.S(C.d0,A.h("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bil("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHM(l)),l.arT("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHN(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aE(p)))
m=l.f
m.toString
m=A.p(w.$1(A.aw(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aM(w)}o.push(A.bi(k,!0,k,A.cp(C.bu,A.aK(A.O(A.a([D.azt,A.h(w,k,k,k,k,C.cc,k,k),C.dY,C.jU],r),C.v,C.h,C.l,0,k),56,k),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHO(l,d),k,k,k,k,k,k,!1,C.aD),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.x(k,A.y(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a4,k,k,x,k,k,C.x),k,k,k,C.cs,k,k,k))
n.push(C.a_)
n.push(D.cdc)
x=A.dS(A.y(n,C.E,C.h,C.l),C.y,k,C.eg,k,C.av)
t=A.aT(d,C.b5,t).w
w=A.cc(u?C.z:C.z.cc(0.35),k,k,C.t,k,k,C.aa,k,k,C.eJ)
return new A.S(new A.a3(0,0,0,s.f.d),A.y(A.a([new A.S(C.jF,q,k),new A.di(1,C.bb,x,k),new A.S(new A.a3(20,16,20,20+t.r.d),A.aK(new A.am(A.bD(A.h(u?"Guardar \xb7 "+B.cYt(j):"Guardar",k,k,k,k,k,k,k),l.gaSa(),w),k),52,k),k)],r),C.E,C.h,C.J),k)}}
B.X9.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CB(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eL(new A.a6(j,new B.bNk(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.alU(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNl(l),w),w.i("w.E"))
C.e.cr(v,new B.bNm())
j=y.T
u=e.G(A.cB($.cq(),new B.bNn(),y.v,j),j)
t=B.dh5(l.e.c)
if(u==null)s=I.Fi
else{j=e.G($.aVK().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fi
j=J.db(j,new B.bNo(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aT(d,k,y.w).w
w=A.bO(A.x(k,k,C.r,k,k,new A.I(C.bF,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ay(d).ok.r,k,k)
q=A.a4(new B.ahS("Gasto",A.aJ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aA,A.O(A.a([q,C.ae,A.a4(A.aY(new B.ahS("Teto \xb7 tocar para mudar",p===0?"Definir":A.aJ(p,!1),k),new B.bNp(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bh,A.h("Contratado na app",k,k,k,k,A.ay(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aD_(s[n],k))
C.e.n(p,w)}p.push(C.bh)
p.push(A.h("Despesas",k,k,k,k,A.ay(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKE)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.it,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aT(C.j.k(A.aE(q)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(q)),2,"0")+"/"+A.aM(q),k,k,k,k,k,k,k)
p.push(A.jn(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aJ(m.f,!1),k,k,k,k,D.c5v,k,k),C.ab,new P.Da(m.w,new B.bNq(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J3,k)],o),C.v,C.h,C.J,0,k),k))}return A.bB(!0,new A.eb(new A.aR(0,1/0,0,j.a.b*0.8),A.d6(p,k,L.CQ,k,k,!1,!0),k),k,C.Z,!0)}}
B.ahS.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.y(A.a([A.h(this.c,x,x,x,x,C.be,x,x),C.ar,A.h(this.d,x,x,x,x,M.aa5,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.I(C.a4,x,x,w,x,x,C.x),x,x,x,C.cT,x,x,x)}}
B.aCb.prototype={
b9(d,e){var x,w=y.t,v=e.G(A.cB($.cq(),new B.bIP(),y.v,w),w),u=e.G($.d1i(),y.o)
w=e.G($.uC(),y.l)
x=w.gv(w)
return A.hD(u,new B.bIQ(this,new B.bIV(x==null?C.fd:x),v),new B.bIR(e),new B.bIS(),!1,!0,!1)}}
B.anj.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.fj
s=new A.b6(999,999)
r=new A.bg(o.cc(0.25),1,C.aj,-1)
q=A.b9(C.ia,o,p,p,13)
t=A.x(p,A.O(A.a([q,C.rL,new A.di(1,C.bb,A.h(u,1,C.a1,p,p,new A.P(!0,o,p,p,p,p,14,C.d2,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b9(C.ic,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afn,new A.I(t,p,new A.dN(r,r,r,r),new A.cz(s,s,s,s),p,p,C.x),p,p,p,D.au1,p,p,p)
m.push(new A.js(new A.n4(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hR(t,new B.aYs(d),p,p),p))}return A.e4(C.bf,m,C.r,C.bk,6,6)}}
var z=a.updateTypes(["C(i4)","T(T,i4)","v(i4,i4)","T(T,Dw)","zQ()","F<~>(c?)","F<~>()","NN(N)","C(Dw)","F<lT>()","X9(N)","~(i4)","~()","C(np)","C(rN)","i4(a5<c,@>)","DH()"])
B.cHa.prototype={
$1(d){return this.aEF(d)},
aEF(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.yg(a1)
u=y.t
t=a1.G(A.cB($.cq(),new B.cH6(),y.v,u),u)
u=J.a7(t)
if(u.gY(t)){v=D.bzc
x=1
break}s=A.a([],y.s)
for(r=u.gX(t);r.q();)s.push(r.gE(r).a)
r=$.Q()
q=r.b
q===$&&A.b()
p=y.G
o=q.P("budgets").ai(0,"wedding_id, total").dL("wedding_id",s).b3(new B.cH7(),p)
n=r.b.P("budget_categories").ai(0,"wedding_id, amount").dL("wedding_id",s).b3(new B.cH8(),p)
m=r.b.P("expenses").ai(0,"wedding_id, amount, paid").dL("wedding_id",s).b3(new B.cH9(),p)
p=y.N
s=y.i
r=A.E(p,s)
d=q=y.P
a0=J
x=3
return A.d(o,$async$$1)
case 3:d,l=a0.be(a3,q),k=A.u(l),l=new A.ag(l,l.gA(l),k.i("ag<V.E>")),k=k.i("V.E")
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
case 6:l=d.be(a3,q),k=A.u(l),l=new A.ag(l,l.gA(l),k.i("ag<V.E>")),k=k.i("V.E")
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
case 9:s=d.be(a3,q),q=A.u(s),s=new A.ag(s,s.gA(s),q.i("ag<V.E>")),q=q.i("V.E")
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
s.push(new A.aMI([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1300}
B.cH6.prototype={
$1(d){return d.c},
$S:131}
B.cH7.prototype={
$1(d){return d},
$S:29}
B.cH8.prototype={
$1(d){return d},
$S:29}
B.cH9.prototype={
$1(d){return d},
$S:29}
B.b3t.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b57.prototype={
$1(d){return d.w},
$S:z+0}
B.b58.prototype={
$1(d){return!d.w},
$S:z+0}
B.b54.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:40}
B.b55.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b56.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKQ.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKR.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bL7.prototype={
$0(){return this.a.gS().a_(0,$.CB().gaX(),y.x).Zi(0).ea(new B.bL6())},
$S:1}
B.bL6.prototype={
$1(d){},
$S:11}
B.bKM.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKO.prototype={
$1(d){return A.Cx(C.k.a8(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKP(),null)+" \u20ac"},
$S:110}
B.bKP.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:43}
B.bKN.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a1(v," \xb7 ")
u=x&&u>0?u:null
return new B.NN(v,u,w.d,null)},
$S:z+7}
B.bKW.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:40}
B.bKX.prototype={
$1(d){return d.x!==C.e9&&d.b===this.a},
$S:59}
B.bL5.prototype={
$2(d,e){return A.jf(d,this.a.l8(e))},
$1(d){return this.$2(d,null)},
$S:1303}
B.bKY.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKZ.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bL_.prototype={
$0(){return this.a.Iq(this.b.a)},
$S:0}
B.bL0.prototype={
$0(){var x=this.a
return x.p(new B.bKV(x))},
$S:0}
B.bKV.prototype={
$0(){return this.a.w=D.J1},
$S:0}
B.bL1.prototype={
$0(){var x=this.a
return x.p(new B.bKU(x))},
$S:0}
B.bKU.prototype={
$0(){return this.a.w=D.abA},
$S:0}
B.bL2.prototype={
$0(){var x=this.a
return x.p(new B.bKT(x))},
$S:0}
B.bKT.prototype={
$0(){return this.a.w=D.abz},
$S:0}
B.bL3.prototype={
$0(){var x=this.a
return x.p(new B.bKS(x))},
$S:0}
B.bKS.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bL4.prototype={
$0(){return B.Cq(this.a.gS().a_(0,$.cq(),y.v).b.a)},
$S:z+9}
B.cDx.prototype={
$1(d){var x=null,w=this.b
return new A.eU(A.h(this.a,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.cu(),w,x,x,x,x,x,2,D.aF8,C.U,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.fK,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b0,x,x,x,x),A.a([new A.am(A.cJ(C.cZ,x,x,new B.cDv(d),x,x),x),new A.am(A.bD(C.dv,new B.cDw(d,w),x),x)],y.p),x)},
$S:19}
B.cDv.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
B.cDw.prototype={
$0(){var x=A.al(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aX(w," ","")
return x.af(A.eV(A.aX(w,",",".")))},
$S:0}
B.cDG.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bNg.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:40}
B.bNi.prototype={
$0(){return A.bQ(null,new B.bNj(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNj.prototype={
$1(d){return new B.X9(this.a.e.a,null)},
$S:z+10}
B.bNh.prototype={
$0(){return B.akt(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKb.prototype={
$0(){var x=this.a
A.al(x,!1).bk()
A.ae(x).ak("/bookings",null,y.X)},
$S:0}
B.bKa.prototype={
$3(d,e,f){return A.kM(A.b9(C.i8,this.a,null,null,null),C.t,!0)},
$S:100}
B.bX1.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.alU().gaX(),y.h).Ol(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a0(A.bY(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bWY.prototype={
$0(){var x=this
return A.rF(x.a,x.b,C.f.bE(x.c.a,x.d+5),null,null)},
$S:0}
B.bWZ.prototype={
$0(){return A.ae(this.a).ak("/bookings",null,y.X)},
$S:0}
B.bX_.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bX0.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHS.prototype={
$0(){return this.a.p(new B.bHR())},
$S:0}
B.bHR.prototype={
$0(){},
$S:0}
B.bHT.prototype={
$0(){return this.a.p(new B.bHQ())},
$S:0}
B.bHQ.prototype={
$0(){},
$S:0}
B.bHE.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:43}
B.bHF.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHP.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:39}
B.bHK.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
B.bHL.prototype={
$1(d){var x=this.a
return x.p(new B.bHJ(x,d))},
$S:154}
B.bHJ.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHM.prototype={
$0(){var x=this.a
return x.p(new B.bHI(x))},
$S:0}
B.bHI.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHN.prototype={
$0(){var x=this.a
return x.p(new B.bHH(x))},
$S:0}
B.bHH.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHO.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cNt(v.b,A.bZ(A.aM(t)-1,1,1,0,0),r,A.bZ(A.aM(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHG(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHG.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNk.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNl.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNm.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bNn.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:40}
B.bNo.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bNp.prototype={
$0(){var x=this.c
return B.akt(this.a,this.b,x.a,x.d)},
$S:0}
B.bNq.prototype={
$1(d){return this.a.a_(0,$.alU().gaX(),y.h).Ol(this.b.a)},
$S:143}
B.bIP.prototype={
$1(d){return d.c},
$S:131}
B.bIV.prototype={
$2(d,e){return A.jf(d,this.a.l8(e))},
$S:42}
B.bIS.prototype={
$0(){return D.bLg},
$S:84}
B.bIR.prototype={
$2(d,e){return A.JH(A.a([new A.hh("Tentar outra vez",new B.bII(this.a),!1,null)],y.p),C.eS,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1304}
B.bII.prototype={
$0(){return this.a.aj($.d1i())},
$S:0}
B.bIQ.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIT(g),e=new B.bIU(g,this.b),d=J.c9(a4),a0=d.cU(a4,0,new B.bIJ()),a1=d.cU(a4,0,new B.bIK(f)),a2=d.cU(a4,0,new B.bIL(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ao(this.c);x.q();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.BS(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bE(s,1))}x=A.aJ(a1,!1)
w=a0>0
v=w?"de "+A.aJ(a0,!1):"gastos"
u=w?C.k.ae(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aN(a1/a0*100)+"% dos tetos":""
x=A.vj(i,""+t+" "+r+w,"Todos os eventos",C.hF,u,v,x)
v=y.p
u=A.a([new A.DS(A.a([new A.la("Gasto",A.aJ(a1,!1),h,i),new A.la("Por pagar",A.aJ(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eu(a4,0,y.A),r=J.ao(t.a),q=t.b,t=new A.bX(r,q,A.u(t).i("bX<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.an(A.c0())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iK)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a1,i,i,C.a9,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aJ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aJ(j[3]+e.$1(j[0]),!1))}n=A.y(A.a([n,C.aU,A.h(C.e.a1(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.hR(A.x(i,A.O(A.a([new A.bJ(1,C.at,n,i),C.ae,A.h(A.aJ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.bj,C.jU],v),C.v,C.h,C.l,0,i),C.r,C.as,C.cL,i,i,i,i,C.cj,i,i,i),new B.bIM(o,g),i,i))
C.e.n(w,l)}return A.y(A.a([x,new A.c2("N\xfameros",i,u,16,i),new A.c2("Por evento \xb7 "+d,i,w,16,i),D.aAL],v),C.E,C.h,C.l)},
$S:1305}
B.bIT.prototype={
$1(d){return J.db(this.a.e,new B.bIG(d)).cU(0,0,new B.bIH())},
$S:182}
B.bIG.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:59}
B.bIH.prototype={
$2(d,e){return d+e.w},
$S:352}
B.bIU.prototype={
$1(d){return J.db(this.a.e,new B.bIN(d)).cU(0,0,new B.bIO(this.b))},
$S:182}
B.bIN.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:59}
B.bIO.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:352}
B.bIJ.prototype={
$2(d,e){return d+e.a[2]},
$S:237}
B.bIK.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:237}
B.bIL.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:237}
B.bIM.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYs.prototype={
$0(){return A.ae(this.a).ak("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dJW","cZk",15)
w(B,"dJV","dqL",16)
v(B.DH.prototype,"giD","d0",4)
var t
u(t=B.abH.prototype,"gap8","Tu",5)
v(t,"gaQZ","PW",6)
v(B.abl.prototype,"gaSa","aSb",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bt,[B.cHa,B.cH6,B.cH7,B.cH8,B.cH9,B.b57,B.b58,B.b54,B.b56,B.bL6,B.bKO,B.bKP,B.bKN,B.bKW,B.bKX,B.bL5,B.bKZ,B.cDx,B.bNg,B.bNj,B.bKa,B.bX1,B.bHE,B.bHP,B.bHL,B.bNk,B.bNl,B.bNn,B.bNo,B.bNq,B.bIP,B.bIQ,B.bIT,B.bIG,B.bIU,B.bIN])
x(A.M,[B.Dw,B.b3s,B.zQ,B.Mm,B.a7J,B.aC6])
x(A.cK,[B.b3t,B.bKM,B.bKY,B.cDG,B.bNm,B.bIV,B.bIR,B.bIH,B.bIO,B.bIJ,B.bIK,B.bIL])
w(B.DH,A.fb)
x(A.bL,[B.b55,B.bKQ,B.bKR,B.bL7,B.bL_,B.bL0,B.bKV,B.bL1,B.bKU,B.bL2,B.bKT,B.bL3,B.bKS,B.bL4,B.cDv,B.cDw,B.bNi,B.bNh,B.bKb,B.bWY,B.bWZ,B.bX_,B.bX0,B.bHS,B.bHR,B.bHT,B.bHQ,B.bHF,B.bHK,B.bHJ,B.bHM,B.bHI,B.bHN,B.bHH,B.bHO,B.bHG,B.bNp,B.bIS,B.bII,B.bIM,B.aYs])
w(B.abG,A.fg)
w(B.D_,A.dC)
w(B.abH,A.dw)
x(A.L,[B.aPt,B.aDs,B.aD_,B.Xw,B.ahS,B.anj])
x(A.ew,[B.aDt,B.aG6,B.X9,B.aCb])
w(B.NN,A.G)
w(B.abl,A.a_)})()
A.bq(b.typeUniverse,JSON.parse('{"DH":{"fb":["zQ"]},"NN":{"G":[],"e":[],"f":[]},"X9":{"G":[],"e":[],"f":[]},"D_":{"G":[],"e":[],"f":[]},"abH":{"a_":["D_"]},"aPt":{"L":[],"e":[],"f":[]},"aDs":{"L":[],"e":[],"f":[]},"aDt":{"G":[],"e":[],"f":[]},"aD_":{"L":[],"e":[],"f":[]},"aG6":{"G":[],"e":[],"f":[]},"Xw":{"L":[],"e":[],"f":[]},"abl":{"a_":["NN"]},"ahS":{"L":[],"e":[],"f":[]},"aCb":{"G":[],"e":[],"f":[]},"anj":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{l:x("ax<f9>"),k:x("ax<t<rN>>"),u:x("ax<t<fI>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("ax<a5<c,t<c>>>"),x:x("zt"),b:x("uP"),d:x("rS"),Z:x("ok"),v:x("ec"),_:x("i4"),h:x("DH"),g:x("zQ"),D:x("r<Dw>"),r:x("r<i4>"),Q:x("r<la>"),F:x("r<ej>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7J>"),c:x("r<Mm>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fI>"),t:x("t<fl>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a5<c,@>"),w:x("dt"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lT"),N:x("c"),B:x("aC6"),q:x("dl"),i:x("T"),z:x("@"),S:x("v"),X:x("M?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afn=new A.aR(0,1/0,32,1/0)
D.au1=new A.a3(8,5,6,5)
D.cgR=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azt=new A.bJ(1,C.at,D.cgR,null)
D.byU=x([],y.r)
D.azJ=new B.zQ(!1,D.byU)
D.aAJ=new A.h5("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAL=new A.h5("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aB2=new A.h5("Sem pagamentos nesta vista.",8,null)
D.aEA=new A.dE(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aEW=new A.dE(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aF8=new A.dE(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGT=new A.dU("Pago",C.cU,null)
D.aH_=new A.dU("Por pagar",C.hD,null)
D.aH7=new A.lf("Or\xe7amento","Todos os teus eventos",null)
D.aHd=new A.lf("Or\xe7amento",null,null)
D.by8=x(["catering"],y.s)
D.bzb=x([],y.D)
D.bzc=x([],y.n)
D.bzC=x(["flowers_decor"],y.s)
D.bB7=x(["music_dj","bands_musicians"],y.s)
D.bBH=x(["photography"],y.s)
D.bCV=x(["venue"],y.s)
D.aEp=new A.ve("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kD,null)
D.bKE=new A.S(C.fV,D.aEp,null)
D.c96=new A.D("A despesa precisa de um t\xedtulo",null,C.mo,null,null,null,null,null,null,null)
D.bLe=new A.S(T.Nx,D.c96,null)
D.bLg=new A.S(O.uM,C.f1,null)
D.bXH=new A.vU(!1,6,!0,null)
D.c3q=new A.P(!0,C.z,null,null,null,null,14,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5v=new A.P(!0,null,null,null,null,null,null,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aai=new A.P(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7l=new A.D("Indica um valor v\xe1lido",null,C.mo,null,null,null,null,null,null,null)
D.c7F=new A.D("Nova despesa",null,C.bi,null,null,null,null,null,null,null)
D.c88=new A.D("\u20ac",null,D.aai,null,null,null,null,null,null,null)
D.c8K=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.cdc=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null)
D.J1=new B.abG(0,"all")
D.abz=new B.abG(1,"paid")
D.abA=new B.abG(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXi","d1i",()=>C.bP.$1$1(new B.cHa(),y.m))
x($,"dY8","alU",()=>A.mV(B.dJV(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["V8AsD1sRo84ieGseCzoHt7qAqZ0="]=a.current})($__dart_deferred_initializers__);