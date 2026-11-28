((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cH6:function cH6(){},cH2:function cH2(){},cH3:function cH3(){},cH4:function cH4(){},cH5:function cH5(){},
dJ0(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.Dw(x[v]))
return new B.b3n(d.b,u)},
Dw:function Dw(d){this.a=d},
b3n:function b3n(d,e){this.a=d
this.b=e},
b3o:function b3o(){},
cZg(d){var x="category",w="due_date",v=J.a7(d),u=A.Y(v.h(d,"id")),t=A.Y(v.h(d,"wedding_id")),s=A.Y(v.h(d,"title")),r=B.dFf(B.ddY(A.B(v.h(d,x)))),q=B.ddY(A.B(v.h(d,x))),p=A.dv(v.h(d,"amount")),o=v.h(d,w)==null?null:A.dc(A.Y(v.h(d,w)))
v=A.dV(v.h(d,"paid"))
return new G.i4(u,t,s,r,q,p,o,v===!0)},
ddY(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dFf(d){var x
A:{if("venue"===d){x=E.xP
break A}if("catering"===d){x=E.xL
break A}if("photography"===d){x=E.xM
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xN
break A}if("flowers_decor"===d){x=E.xO
break A}x=null
break A}return x},
dqH(){return new B.DH()},
zQ:function zQ(d,e){this.a=d
this.b=e},
b52:function b52(){},
b53:function b53(){},
DH:function DH(){this.b=this.x=null},
b5_:function b5_(){},
b50:function b50(d,e){this.a=d
this.b=e},
b51:function b51(d){this.a=d},
Cq(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cq=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akw(),$async$Cq)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").ai(0,"partner_name_1, partner_name_2").U("id",d).cf(),$async$Cq)
case 4:s=f
x=5
return A.d(u.b.P("bookings").ai(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").U("wedding_id",d).cJ(0,"event_date",!1),$async$Cq)
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
return A.d(t.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").dK("booking_id",u).tt(0,"created_at"),$async$Cq)
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
m=F.cZ1(F.cE3(s),"Gastos e parceiros",r,q,!1)
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
g=g==null?null:g.dF()}u.push(new B.Mm(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ao(o);l.q();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eV(A.p(k))
if(k==null)k=0}t.push(new B.a7H(i,k))}l=n==null?null:F.cZz(J.i(n,"total"))
v=new F.lS(m.a,m.b,m.c,m.d,u,t,l)
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
a7H:function a7H(d,e){this.a=d
this.b=e},
do_(){return new B.D_(null)},
aTN(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aTN=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.h_(!0,new B.cDt(e,new A.aF(new A.bD(u,C.aF,C.ax),$.aa())),d,y.i),$async$aTN)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTN,w)},
akp(d,e,f,g){return B.dF2(d,e,f,g)},
dF2(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akp=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aTN(d,"Teto para "+f,g),$async$akp)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.CB().gaX(),y.x).Oo(f,r),$async$akp)
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
return A.m($async$akp,w)},
dc1(d){var x=A.U(d,y._)
C.e.cr(x,new B.cDC())
return x},
dcv(d){var x=C.f.aT(C.j.k(A.aE(d)),2,"0"),w=C.f.aT(C.j.k(A.aw(d)),2,"0"),v=A.aM(d)===A.aM(new A.ac(Date.now(),0,!1))?"":"/"+A.aM(d)
return x+"/"+w+v},
cYp(d){var x,w,v,u
if(d===C.k.hB(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aX(w,".",",")}v=x.split(",")
u=A.Cx(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHA(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abD:function abD(d,e){this.a=d
this.b=e},
D_:function D_(d){this.a=d},
abE:function abE(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKM:function bKM(d){this.a=d},
bKN:function bKN(d){this.a=d},
bL3:function bL3(d){this.a=d},
bL2:function bL2(){},
bKI:function bKI(){},
bKK:function bKK(){},
bKL:function bKL(){},
bKJ:function bKJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKS:function bKS(){},
bKT:function bKT(d){this.a=d},
bL1:function bL1(d){this.a=d},
bKU:function bKU(){},
bKV:function bKV(){},
bKW:function bKW(d,e){this.a=d
this.b=e},
bKX:function bKX(d){this.a=d},
bKR:function bKR(d){this.a=d},
bKY:function bKY(d){this.a=d},
bKQ:function bKQ(d){this.a=d},
bKZ:function bKZ(d){this.a=d},
bKP:function bKP(d){this.a=d},
bL_:function bL_(d){this.a=d},
bKO:function bKO(d){this.a=d},
bL0:function bL0(d){this.a=d},
cDt:function cDt(d,e){this.a=d
this.b=e},
cDr:function cDr(d){this.a=d},
cDs:function cDs(d,e){this.a=d
this.b=e},
cDC:function cDC(){},
aPo:function aPo(d,e,f){this.c=d
this.d=e
this.a=f},
aDo:function aDo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDp:function aDp(d,e){this.e=d
this.a=e},
bNc:function bNc(){},
bNe:function bNe(d,e){this.a=d
this.b=e},
bNf:function bNf(d){this.a=d},
bNd:function bNd(d,e,f){this.a=d
this.b=e
this.c=f},
aCW:function aCW(d,e){this.c=d
this.a=e},
bK7:function bK7(d){this.a=d},
bK6:function bK6(d){this.a=d},
aG2:function aG2(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bWY:function bWY(d,e){this.a=d
this.b=e},
bWU:function bWU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWV:function bWV(d){this.a=d},
bWW:function bWW(d,e){this.a=d
this.b=e},
bWX:function bWX(d,e){this.a=d
this.b=e},
Xv:function Xv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aC2:function aC2(d,e,f,g,h){var _=this
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
abi:function abi(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bHO:function bHO(d){this.a=d},
bHN:function bHN(){},
bHP:function bHP(d){this.a=d},
bHM:function bHM(){},
bHA:function bHA(){},
bHB:function bHB(d){this.a=d},
bHL:function bHL(){},
bHG:function bHG(d){this.a=d},
bHH:function bHH(d){this.a=d},
bHF:function bHF(d,e){this.a=d
this.b=e},
bHI:function bHI(d){this.a=d},
bHE:function bHE(d){this.a=d},
bHJ:function bHJ(d){this.a=d},
bHD:function bHD(d){this.a=d},
bHK:function bHK(d,e){this.a=d
this.b=e},
bHC:function bHC(d,e){this.a=d
this.b=e},
X8:function X8(d,e){this.e=d
this.a=e},
bNg:function bNg(d){this.a=d},
bNh:function bNh(d){this.a=d},
bNi:function bNi(){},
bNj:function bNj(){},
bNk:function bNk(d){this.a=d},
bNl:function bNl(d,e,f){this.a=d
this.b=e
this.c=f},
bNm:function bNm(d,e){this.a=d
this.b=e},
ahP:function ahP(d,e,f){this.c=d
this.d=e
this.a=f},
aC7:function aC7(d,e,f){this.e=d
this.f=e
this.a=f},
bIL:function bIL(){},
bIR:function bIR(d){this.a=d},
bIO:function bIO(){},
bIN:function bIN(d){this.a=d},
bIE:function bIE(d){this.a=d},
bIM:function bIM(d,e,f){this.a=d
this.b=e
this.c=f},
bIP:function bIP(d){this.a=d},
bIC:function bIC(d){this.a=d},
bID:function bID(){},
bIQ:function bIQ(d,e){this.a=d
this.b=e},
bIJ:function bIJ(d){this.a=d},
bIK:function bIK(d){this.a=d},
bIF:function bIF(){},
bIG:function bIG(d){this.a=d},
bIH:function bIH(d){this.a=d},
bII:function bII(d,e){this.a=d
this.b=e},
anf:function anf(d,e){this.c=d
this.a=e},
aYn:function aYn(d){this.a=d},
dh1(d){var x
switch(d){case E.xP:x=D.bCX
break
case E.xL:x=D.bya
break
case E.xM:x=D.bBJ
break
case E.xN:x=D.bB9
break
case E.xO:x=D.bzE
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
B.b3n.prototype={
gpX(){return C.e.cU(this.b,0,new B.b3o())},
gaBm(){var x=this.a
return x===0?0:C.k.ae(this.gpX()/x,0,1)}}
B.zQ.prototype={
gbyz(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b52(),w),w.i("w.E"))
return x},
gbyU(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b53(),w),w.i("w.E"))
return x},
awx(d,e){var x=e==null?this.a:e
return new B.zQ(x,d==null?this.b:d)},
ik(d){return this.awx(null,d)},
awf(d){return this.awx(d,null)}}
B.DH.prototype={
d0(){var x=y.T,w=this.x=A.eQ(this).G(A.cB($.cq(),new B.b5_(),y.v,x),x)
if(w!=null)A.j5(new B.b50(this,w),y.H)
return D.azL},
bX(d,e){return this.bvZ(0,e)},
bvZ(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bX=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ik(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").ck(0).U("wedding_id",e).cJ(0,"created_at",!0),$async$bX)
case 2:v.sa4(0,new t.zQ(s,r.da(g,B.dJS(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bX,w)},
Vh(d){return this.blX(d)},
blX(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vh=A.j(function(e,f){if(e===1)return A.k(f,w)
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
return A.d(r.d4(0,u).ck(0).dN(0),$async$Vh)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cZg(s))
v.sa4(0,r.awf(u))
return A.l(null,w)}})
return A.m($async$Vh,w)},
Ol(d){return this.bBr(d)},
bBr(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Ol=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lb(v.ga4(0).b,new B.b51(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bh(0,A.R(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).cg()],u,u)).U("id",d).ck(0).dN(0),$async$Ol)
case 2:t=l.cZg(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.awf(m))
return A.l(null,w)}})
return A.m($async$Ol,w)}}
B.Mm.prototype={}
B.a7H.prototype={
gap(d){return this.a}}
B.abD.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D_.prototype={
R(){return new B.abE(D.J1)}}
B.abE.prototype={
Ts(d){return this.bbR(d)},
bbR(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Ts=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKM(u))
x=1
break}u.p(new B.bKN(u))
t=u.gS()
s=$.cq()
r=t.a_(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a_(0,s.gaX(),y.Z).ai(0,d),$async$Ts)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Ts,w)},
ad(){this.aq()
A.j5(new B.bL3(this),y.H)},
PW(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$PW=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.alQ()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.CB(),y.b).b
s=t==null?null:t.b
r=C.e.cU(o.a_(0,n,y.g).b,0,new B.bKI())
t=o.a_(0,$.cq(),y.v).b
q=t==null?null:t.gcw()
t=u.c
t.toString
x=3
return A.d(A.bQ(null,new B.bKJ(q,s,new B.bKK(),r),!1,t,!0,!0,null,y.B),$async$PW)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vh(new G.i4("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$PW,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CB(),y.b),a3=a1.G($.HV(),y.d),a4=a1.G($.alQ(),y.g),a5=a2.b,a6=a5==null?e:B.dJ0(a5,a3.b)
a5=A.j1(a1.G($.j_(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iS
a5=y.T
w=a1.G(A.cB($.cq(),new B.bKS(),y.v,a5),a5)
if(f.y){a1=f.gap7()
return A.cP(e,C.cP,A.nJ(C.eZ,40,A.a([C.fw,D.aH9,K.cVO(a1,e),new B.aC7(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.db(x,new B.bKT(w))
a1=a1.G($.uC(),y.l)
u=a1.gv(a1)
t=new B.bL1(u==null?C.fc:u)
a1=y._
a5=A.U(a4.gbyz(),a1)
for(s=v.a,r=J.c9(s),q=r.gX(s),p=v.b,o=v.$ti.i("fz<1>"),n=new A.fz(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i4("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbyU(0),a1)
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
n.push(new G.i4("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dc1(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dc1(q)
break
default:a1=e}h=C.e.cU(q,0,new B.bKU())
s=a6==null
if(s)g=D.bzd
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bKV(),p),p.i("w.E"))}if(s)a1=D.bXJ
else{s=f.gaQX()
r=y.p
p=A.a([new A.ps(A.a([new A.qL(s,"Nova despesa",e)],r),e),D.aHf,K.cVO(f.gap7(),w),new B.aPo(a6,new B.bKW(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aJ(a6.gpX(),!1)
n=a5.length
m=n===1?d:a0
l=A.aJ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c2("N\xfameros",e,A.a([new A.DS(A.a([new A.l9("Gasto",o,""+n+" "+m,e),new A.l9("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.ma(A.a([new A.ej("Todos",l===D.J1,n+m,new B.bKX(f),e),new A.ej("Pendentes",l===D.abB,m,new B.bKY(f),e),new A.ej("Pagos",l===D.abA,n,new B.bKZ(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aG2(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c2("Pagamentos",e,o,16,e))
a1=A.a([new A.h4(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDo(g,f.x,new B.bL_(f),e))
p.push(new A.c2("Categorias",e,a1,16,e))
p.push(new A.c2("Exportar",e,A.a([new F.DI("Gastos e parceiros",!1,new B.bL0(f),e)],r),16,e))
a1=A.nJ(C.eZ,40,p,e,!0,!1)}return A.cP(e,C.cP,a1,!0,e)},
Iq(d){return this.aXS(d)},
aXS(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Iq=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aTN(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Iq)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a_(0,$.CB().gaX(),y.x).ZZ(r),$async$Iq)
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
B.aPo.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpX()>0?"Gastos "+A.aJ(t.gpX(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vj(new A.hg("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hD,0,"por definir","\u2014")}x=C.k.aN(t.gaBm()*100)
w=s-t.gpX()<0?"Acima do teto":"Ainda tens"
v=A.aJ(Math.abs(s-t.gpX()),!1)
s=A.aJ(s,!1)
u=t.gaBm()
return A.aY(A.vj(H.a1D,"Gastos "+A.aJ(t.gpX(),!1)+" \xb7 "+x+"% do teto",w,C.hD,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDo.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dz(s,0,A.et(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDp(r[w],null))
q=A.a([A.eR(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hg(u,v.e,!0,null))}return A.z(q,C.E,C.h,C.l)}}
B.aDp.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cB($.cq(),new B.bNc(),y.v,m),m)
if(l==null)x=C.r2
else{m=e.G($.d1f().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r2:m}m=A.a([],y.s)
for(w=B.dh1(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNe(this,d)
if(w)return A.k0(!1,!1,p,v,A.aJ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mL("P\xf4r teto",new B.bNd(this,d,e),!0,p))
w=A.aJ(o.b,!1)
u=A.aJ(n,!1)
s=y.p
q=A.a([A.aK(new A.a41(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aE,new B.anf(m,p)],s))
return A.k0(!1,!1,p,v,w+" de "+u,o.a,A.z(q,C.dJ,C.h,C.J))}}
B.aCW.prototype={
u(d){var x,w,v=null,u=$.au,t=$.fj.cc(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fR(r,A.aK(p==null?A.kK(A.b9(C.i7,u,v,v,v),C.t,!0):A.po(p,144,new B.bK6(u),!1,C.bE,A.wv(),!1,v,v,v),48,48),C.ba)
p=A.h(q.b,1,C.a1,v,v,D.c3s,v,v)
x=A.b9(C.i9,u,v,v,14)
w=q.d
q=w>0?q.gPt()+" \xb7 "+A.aJ(w,!1):q.gPt()
w=y.p
return new A.S(C.d0,A.aY(A.x(v,A.O(A.a([r,C.af,A.a4(A.z(A.a([p,C.j4,A.O(A.a([x,C.dY,new A.di(1,C.bb,A.h(q,1,C.a1,v,v,A.aI(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bm,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b9(C.ib,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.x),v,v,v,C.ef,v,v,v),new B.bK7(d),v),v)}}
B.aG2.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JH(A.a([new A.hg("+ Nova despesa",this.f,!0,j)],y.p),C.eR,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aB4
x=new B.bWY(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+B.dcv(m)
v.push(new A.td(new A.cg(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bWU(d,e,s,q),A.HO(m)===C.f5,j))
continue}p=r?new B.bWV(d):new B.bWW(x,s)
v.push(new B.Xv(s,p,r||s.w?j:new B.bWX(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xv&&v[k-1] instanceof B.Xv)u.push(C.iI)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAL)
return A.z(i,C.E,C.h,C.l)}}
B.Xv.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aJ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dcv(w))
v=C.e.a1(v," \xb7 ")
if(u)u=D.aGV
else{u=this.e
u=u!=null?new A.mL("Marcar pago",u,!0,null):D.aH1}return A.k0(!1,!1,null,this.d,v,x.c,u)}}
B.aC2.prototype={}
B.NN.prototype={
R(){var x=$.aa()
return new B.abi(new A.aF(C.ak,x),new A.aF(C.ak,x))}}
B.abi.prototype={
ad(){var x=this
x.aq()
x.d.an(0,new B.bHO(x))
x.e.an(0,new B.bHP(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a7()},
gahv(){var x=C.f.B(this.e.a.a)
x=A.aX(x," ","")
return A.eV(A.aX(x,",","."))},
aS9(){var x,w,v,u,t=this,s=t.gahv()
t.p(new B.bHB(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.al(w,!1)
v=t.w
u=v?null:t.f
w.af(new B.aC2(x,s,u,t.r,v))},
arS(d,e,f,g,h){var x=null,w=h?C.fn:x,v=y.p,u=A.a4(A.z(A.a([A.h(d,x,x,x,x,C.a9,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.bp:x,s=f?x:A.bF(C.kv,1.5),r=f?S.vn:x
return A.bi(x,!0,x,A.cp(C.bu,A.x(x,A.O(A.a([u,A.x(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.ap),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.cL,new A.I(x,x,w,x,x,x,C.x),x,x,x,C.hr,x,x,x),C.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aD),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bij(d,e,f,g){return this.arS(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahv()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bHL()
t=y.w
s=A.aT(d,k,t).w
r=y.p
q=A.a([D.c7H],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k))
q=A.O(A.a([A.a4(A.z(q,C.G,C.h,C.l),1),A.bi(k,!0,k,A.cp(k,A.x(k,C.hz,C.r,k,k,C.bV,k,44,k,k,k,k,44),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHG(d),k,k,k,k,k,k,!1,C.aD),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c8M,A.O(A.a([V.d5F(A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),l.e,k,k,k,k,k,2,D.aEY,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.fK,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aaj,!0,C.dB,k,C.b0,k,k,k,k)),C.bj,D.c8a],r),C.ed,C.bR,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cYp(v)+" no teto":"Passa o teto em "+B.cYp(-v)
o.push(A.h(m,k,k,k,k,A.aI(k,k,n?C.W:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c7n)
p=A.x(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a4,k,k,p,k,k,C.x),k,k,k,C.bn,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bF(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d0,o,k),A.x(C.bc,A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),x,k,k,k,k,k,2,D.aEC,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fh,!0,C.au,k,C.hb,k,k,k,k),C.r,k,k,new A.I(C.a4,k,m,n,k,k,C.x),k,52,k,C.fr,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bLg)
n.push(C.a_)
n.push(new U.a1g(l.r,new B.bHH(l),k))
n.push(C.a_)
n.push(new A.S(C.d0,A.h("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bij("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHI(l)),l.arS("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHJ(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aE(p)))
m=l.f
m.toString
m=A.p(w.$1(A.aw(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aM(w)}o.push(A.bi(k,!0,k,A.cp(C.bu,A.aK(A.O(A.a([D.azv,A.h(w,k,k,k,k,C.cc,k,k),C.dY,C.jT],r),C.v,C.h,C.l,0,k),56,k),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHK(l,d),k,k,k,k,k,k,!1,C.aD),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.x(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a4,k,k,x,k,k,C.x),k,k,k,C.cr,k,k,k))
n.push(C.a_)
n.push(D.cde)
x=A.dS(A.z(n,C.E,C.h,C.l),C.y,k,C.eg,k,C.av)
t=A.aT(d,C.b5,t).w
w=A.cc(u?C.z:C.z.cc(0.35),k,k,C.t,k,k,C.aa,k,k,C.eI)
return new A.S(new A.a3(0,0,0,s.f.d),A.z(A.a([new A.S(C.jE,q,k),new A.di(1,C.bb,x,k),new A.S(new A.a3(20,16,20,20+t.r.d),A.aK(new A.am(A.bC(A.h(u?"Guardar \xb7 "+B.cYp(j):"Guardar",k,k,k,k,k,k,k),l.gaS8(),w),k),52,k),k)],r),C.E,C.h,C.J),k)}}
B.X8.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CB(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eL(new A.a6(j,new B.bNg(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.alQ(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNh(l),w),w.i("w.E"))
C.e.cr(v,new B.bNi())
j=y.T
u=e.G(A.cB($.cq(),new B.bNj(),y.v,j),j)
t=B.dh1(l.e.c)
if(u==null)s=I.Fi
else{j=e.G($.aVF().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fi
j=J.db(j,new B.bNk(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aT(d,k,y.w).w
w=A.bO(A.x(k,k,C.r,k,k,new A.I(C.bF,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ay(d).ok.r,k,k)
q=A.a4(new B.ahP("Gasto",A.aJ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aA,A.O(A.a([q,C.ae,A.a4(A.aY(new B.ahP("Teto \xb7 tocar para mudar",p===0?"Definir":A.aJ(p,!1),k),new B.bNl(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bh,A.h("Contratado na app",k,k,k,k,A.ay(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aCW(s[n],k))
C.e.n(p,w)}p.push(C.bh)
p.push(A.h("Despesas",k,k,k,k,A.ay(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKG)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.is,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aT(C.j.k(A.aE(q)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(q)),2,"0")+"/"+A.aM(q),k,k,k,k,k,k,k)
p.push(A.jn(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aJ(m.f,!1),k,k,k,k,D.c5x,k,k),C.ab,new P.Da(m.w,new B.bNm(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J3,k)],o),C.v,C.h,C.J,0,k),k))}return A.bB(!0,new A.eb(new A.aR(0,1/0,0,j.a.b*0.8),A.d6(p,k,L.CQ,k,k,!1,!0),k),k,C.Z,!0)}}
B.ahP.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.z(A.a([A.h(this.c,x,x,x,x,C.be,x,x),C.ar,A.h(this.d,x,x,x,x,M.aa6,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.I(C.a4,x,x,w,x,x,C.x),x,x,x,C.cT,x,x,x)}}
B.aC7.prototype={
b9(d,e){var x,w=y.t,v=e.G(A.cB($.cq(),new B.bIL(),y.v,w),w),u=e.G($.d1e(),y.o)
w=e.G($.uC(),y.l)
x=w.gv(w)
return A.hD(u,new B.bIM(this,new B.bIR(x==null?C.fc:x),v),new B.bIN(e),new B.bIO(),!1,!0,!1)}}
B.anf.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.fj
s=new A.b6(999,999)
r=new A.bg(o.cc(0.25),1,C.aj,-1)
q=A.b9(C.i9,o,p,p,13)
t=A.x(p,A.O(A.a([q,C.rM,new A.di(1,C.bb,A.h(u,1,C.a1,p,p,new A.P(!0,o,p,p,p,p,14,C.d2,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b9(C.ib,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afo,new A.I(t,p,new A.dN(r,r,r,r),new A.cz(s,s,s,s),p,p,C.x),p,p,p,D.au3,p,p,p)
m.push(new A.js(new A.n4(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hR(t,new B.aYn(d),p,p),p))}return A.e4(C.bf,m,C.r,C.bk,6,6)}}
var z=a.updateTypes(["C(i4)","T(T,i4)","v(i4,i4)","T(T,Dw)","zQ()","F<~>(c?)","F<~>()","NN(N)","C(Dw)","F<lS>()","X8(N)","~(i4)","~()","C(np)","C(rN)","i4(a5<c,@>)","DH()"])
B.cH6.prototype={
$1(d){return this.aEE(d)},
aEE(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.yg(a1)
u=y.t
t=a1.G(A.cB($.cq(),new B.cH2(),y.v,u),u)
u=J.a7(t)
if(u.gY(t)){v=D.bze
x=1
break}s=A.a([],y.s)
for(r=u.gX(t);r.q();)s.push(r.gE(r).a)
r=$.Q()
q=r.b
q===$&&A.b()
p=y.G
o=q.P("budgets").ai(0,"wedding_id, total").dK("wedding_id",s).b3(new B.cH3(),p)
n=r.b.P("budget_categories").ai(0,"wedding_id, amount").dK("wedding_id",s).b3(new B.cH4(),p)
m=r.b.P("expenses").ai(0,"wedding_id, amount, paid").dK("wedding_id",s).b3(new B.cH5(),p)
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
s.push(new A.aMD([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1300}
B.cH2.prototype={
$1(d){return d.c},
$S:131}
B.cH3.prototype={
$1(d){return d},
$S:29}
B.cH4.prototype={
$1(d){return d},
$S:29}
B.cH5.prototype={
$1(d){return d},
$S:29}
B.b3o.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b52.prototype={
$1(d){return d.w},
$S:z+0}
B.b53.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5_.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:40}
B.b50.prototype={
$0(){return this.a.bX(0,this.b)},
$S:1}
B.b51.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKM.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKN.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bL3.prototype={
$0(){return this.a.gS().a_(0,$.CB().gaX(),y.x).Zg(0).ea(new B.bL2())},
$S:1}
B.bL2.prototype={
$1(d){},
$S:11}
B.bKI.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKK.prototype={
$1(d){return A.Cx(C.k.a8(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKL(),null)+" \u20ac"},
$S:110}
B.bKL.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:43}
B.bKJ.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a1(v," \xb7 ")
u=x&&u>0?u:null
return new B.NN(v,u,w.d,null)},
$S:z+7}
B.bKS.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:40}
B.bKT.prototype={
$1(d){return d.x!==C.e9&&d.b===this.a},
$S:59}
B.bL1.prototype={
$2(d,e){return A.jf(d,this.a.l8(e))},
$1(d){return this.$2(d,null)},
$S:1303}
B.bKU.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKV.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bKW.prototype={
$0(){return this.a.Iq(this.b.a)},
$S:0}
B.bKX.prototype={
$0(){var x=this.a
return x.p(new B.bKR(x))},
$S:0}
B.bKR.prototype={
$0(){return this.a.w=D.J1},
$S:0}
B.bKY.prototype={
$0(){var x=this.a
return x.p(new B.bKQ(x))},
$S:0}
B.bKQ.prototype={
$0(){return this.a.w=D.abB},
$S:0}
B.bKZ.prototype={
$0(){var x=this.a
return x.p(new B.bKP(x))},
$S:0}
B.bKP.prototype={
$0(){return this.a.w=D.abA},
$S:0}
B.bL_.prototype={
$0(){var x=this.a
return x.p(new B.bKO(x))},
$S:0}
B.bKO.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bL0.prototype={
$0(){return B.Cq(this.a.gS().a_(0,$.cq(),y.v).b.a)},
$S:z+9}
B.cDt.prototype={
$1(d){var x=null,w=this.b
return new A.eU(A.h(this.a,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.cu(),w,x,x,x,x,x,2,D.aFa,C.U,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.fK,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b0,x,x,x,x),A.a([new A.am(A.cJ(C.cZ,x,x,new B.cDr(d),x,x),x),new A.am(A.bC(C.dv,new B.cDs(d,w),x),x)],y.p),x)},
$S:19}
B.cDr.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
B.cDs.prototype={
$0(){var x=A.al(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aX(w," ","")
return x.af(A.eV(A.aX(w,",",".")))},
$S:0}
B.cDC.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bNc.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:40}
B.bNe.prototype={
$0(){return A.bQ(null,new B.bNf(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNf.prototype={
$1(d){return new B.X8(this.a.e.a,null)},
$S:z+10}
B.bNd.prototype={
$0(){return B.akp(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bK7.prototype={
$0(){var x=this.a
A.al(x,!1).bk()
A.ae(x).ak("/bookings",null,y.X)},
$S:0}
B.bK6.prototype={
$3(d,e,f){return A.kK(A.b9(C.i7,this.a,null,null,null),C.t,!0)},
$S:100}
B.bWY.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.alQ().gaX(),y.h).Ol(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a0(A.bY(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bWU.prototype={
$0(){var x=this
return A.rF(x.a,x.b,C.f.bE(x.c.a,x.d+5),null,null)},
$S:0}
B.bWV.prototype={
$0(){return A.ae(this.a).ak("/bookings",null,y.X)},
$S:0}
B.bWW.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bWX.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHO.prototype={
$0(){return this.a.p(new B.bHN())},
$S:0}
B.bHN.prototype={
$0(){},
$S:0}
B.bHP.prototype={
$0(){return this.a.p(new B.bHM())},
$S:0}
B.bHM.prototype={
$0(){},
$S:0}
B.bHA.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:43}
B.bHB.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHL.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:39}
B.bHG.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
B.bHH.prototype={
$1(d){var x=this.a
return x.p(new B.bHF(x,d))},
$S:154}
B.bHF.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHI.prototype={
$0(){var x=this.a
return x.p(new B.bHE(x))},
$S:0}
B.bHE.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHJ.prototype={
$0(){var x=this.a
return x.p(new B.bHD(x))},
$S:0}
B.bHD.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHK.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cNp(v.b,A.bZ(A.aM(t)-1,1,1,0,0),r,A.bZ(A.aM(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHC(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHC.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNg.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNh.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNi.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bNj.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:40}
B.bNk.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bNl.prototype={
$0(){var x=this.c
return B.akp(this.a,this.b,x.a,x.d)},
$S:0}
B.bNm.prototype={
$1(d){return this.a.a_(0,$.alQ().gaX(),y.h).Ol(this.b.a)},
$S:143}
B.bIL.prototype={
$1(d){return d.c},
$S:131}
B.bIR.prototype={
$2(d,e){return A.jf(d,this.a.l8(e))},
$S:42}
B.bIO.prototype={
$0(){return D.bLi},
$S:84}
B.bIN.prototype={
$2(d,e){return A.JH(A.a([new A.hg("Tentar outra vez",new B.bIE(this.a),!1,null)],y.p),C.eR,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1304}
B.bIE.prototype={
$0(){return this.a.aj($.d1e())},
$S:0}
B.bIM.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIP(g),e=new B.bIQ(g,this.b),d=J.c9(a4),a0=d.cU(a4,0,new B.bIF()),a1=d.cU(a4,0,new B.bIG(f)),a2=d.cU(a4,0,new B.bIH(e)),a3=y.N
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
x=A.vj(i,""+t+" "+r+w,"Todos os eventos",C.hD,u,v,x)
v=y.p
u=A.a([new A.DS(A.a([new A.l9("Gasto",A.aJ(a1,!1),h,i),new A.l9("Por pagar",A.aJ(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eu(a4,0,y.A),r=J.ao(t.a),q=t.b,t=new A.bX(r,q,A.u(t).i("bX<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.an(A.c0())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iI)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a1,i,i,C.a9,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aJ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aJ(j[3]+e.$1(j[0]),!1))}n=A.z(A.a([n,C.aU,A.h(C.e.a1(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.hR(A.x(i,A.O(A.a([new A.bJ(1,C.at,n,i),C.ae,A.h(A.aJ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.bj,C.jT],v),C.v,C.h,C.l,0,i),C.r,C.as,C.cL,i,i,i,i,C.cj,i,i,i),new B.bII(o,g),i,i))
C.e.n(w,l)}return A.z(A.a([x,new A.c2("N\xfameros",i,u,16,i),new A.c2("Por evento \xb7 "+d,i,w,16,i),D.aAN],v),C.E,C.h,C.l)},
$S:1305}
B.bIP.prototype={
$1(d){return J.db(this.a.e,new B.bIC(d)).cU(0,0,new B.bID())},
$S:182}
B.bIC.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:59}
B.bID.prototype={
$2(d,e){return d+e.w},
$S:352}
B.bIQ.prototype={
$1(d){return J.db(this.a.e,new B.bIJ(d)).cU(0,0,new B.bIK(this.b))},
$S:182}
B.bIJ.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:59}
B.bIK.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:352}
B.bIF.prototype={
$2(d,e){return d+e.a[2]},
$S:237}
B.bIG.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:237}
B.bIH.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:237}
B.bII.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYn.prototype={
$0(){return A.ae(this.a).ak("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dJS","cZg",15)
w(B,"dJR","dqH",16)
v(B.DH.prototype,"giD","d0",4)
var t
u(t=B.abE.prototype,"gap7","Ts",5)
v(t,"gaQX","PW",6)
v(B.abi.prototype,"gaS8","aS9",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bs,[B.cH6,B.cH2,B.cH3,B.cH4,B.cH5,B.b52,B.b53,B.b5_,B.b51,B.bL2,B.bKK,B.bKL,B.bKJ,B.bKS,B.bKT,B.bL1,B.bKV,B.cDt,B.bNc,B.bNf,B.bK6,B.bWY,B.bHA,B.bHL,B.bHH,B.bNg,B.bNh,B.bNj,B.bNk,B.bNm,B.bIL,B.bIM,B.bIP,B.bIC,B.bIQ,B.bIJ])
x(A.M,[B.Dw,B.b3n,B.zQ,B.Mm,B.a7H,B.aC2])
x(A.cK,[B.b3o,B.bKI,B.bKU,B.cDC,B.bNi,B.bIR,B.bIN,B.bID,B.bIK,B.bIF,B.bIG,B.bIH])
w(B.DH,A.fb)
x(A.bL,[B.b50,B.bKM,B.bKN,B.bL3,B.bKW,B.bKX,B.bKR,B.bKY,B.bKQ,B.bKZ,B.bKP,B.bL_,B.bKO,B.bL0,B.cDr,B.cDs,B.bNe,B.bNd,B.bK7,B.bWU,B.bWV,B.bWW,B.bWX,B.bHO,B.bHN,B.bHP,B.bHM,B.bHB,B.bHG,B.bHF,B.bHI,B.bHE,B.bHJ,B.bHD,B.bHK,B.bHC,B.bNl,B.bIO,B.bIE,B.bII,B.aYn])
w(B.abD,A.fg)
w(B.D_,A.dC)
w(B.abE,A.dw)
x(A.L,[B.aPo,B.aDo,B.aCW,B.Xv,B.ahP,B.anf])
x(A.ew,[B.aDp,B.aG2,B.X8,B.aC7])
w(B.NN,A.G)
w(B.abi,A.a0)})()
A.bq(b.typeUniverse,JSON.parse('{"DH":{"fb":["zQ"]},"NN":{"G":[],"e":[],"f":[]},"X8":{"G":[],"e":[],"f":[]},"D_":{"G":[],"e":[],"f":[]},"abE":{"a0":["D_"]},"aPo":{"L":[],"e":[],"f":[]},"aDo":{"L":[],"e":[],"f":[]},"aDp":{"G":[],"e":[],"f":[]},"aCW":{"L":[],"e":[],"f":[]},"aG2":{"G":[],"e":[],"f":[]},"Xv":{"L":[],"e":[],"f":[]},"abi":{"a0":["NN"]},"ahP":{"L":[],"e":[],"f":[]},"aC7":{"G":[],"e":[],"f":[]},"anf":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{l:x("ax<f9>"),k:x("ax<t<rN>>"),u:x("ax<t<fI>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("ax<a5<c,t<c>>>"),x:x("zt"),b:x("uP"),d:x("rS"),Z:x("ok"),v:x("ec"),_:x("i4"),h:x("DH"),g:x("zQ"),D:x("r<Dw>"),r:x("r<i4>"),Q:x("r<l9>"),F:x("r<ej>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7H>"),c:x("r<Mm>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fI>"),t:x("t<fl>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a5<c,@>"),w:x("dt"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lS"),N:x("c"),B:x("aC2"),q:x("dl"),i:x("T"),z:x("@"),S:x("v"),X:x("M?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afo=new A.aR(0,1/0,32,1/0)
D.au3=new A.a3(8,5,6,5)
D.cgT=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azv=new A.bJ(1,C.at,D.cgT,null)
D.byW=x([],y.r)
D.azL=new B.zQ(!1,D.byW)
D.aAL=new A.h4("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAN=new A.h4("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aB4=new A.h4("Sem pagamentos nesta vista.",8,null)
D.aEC=new A.dE(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aEY=new A.dE(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aFa=new A.dE(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGV=new A.dU("Pago",C.cU,null)
D.aH1=new A.dU("Por pagar",C.hB,null)
D.aH9=new A.le("Or\xe7amento","Todos os teus eventos",null)
D.aHf=new A.le("Or\xe7amento",null,null)
D.bya=x(["catering"],y.s)
D.bzd=x([],y.D)
D.bze=x([],y.n)
D.bzE=x(["flowers_decor"],y.s)
D.bB9=x(["music_dj","bands_musicians"],y.s)
D.bBJ=x(["photography"],y.s)
D.bCX=x(["venue"],y.s)
D.aEr=new A.ve("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kD,null)
D.bKG=new A.S(C.fV,D.aEr,null)
D.c98=new A.D("A despesa precisa de um t\xedtulo",null,C.mn,null,null,null,null,null,null,null)
D.bLg=new A.S(T.Ny,D.c98,null)
D.bLi=new A.S(O.uN,C.f0,null)
D.bXJ=new A.vU(!1,6,!0,null)
D.c3s=new A.P(!0,C.z,null,null,null,null,14,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5x=new A.P(!0,null,null,null,null,null,null,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaj=new A.P(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7n=new A.D("Indica um valor v\xe1lido",null,C.mn,null,null,null,null,null,null,null)
D.c7H=new A.D("Nova despesa",null,C.bi,null,null,null,null,null,null,null)
D.c8a=new A.D("\u20ac",null,D.aaj,null,null,null,null,null,null,null)
D.c8M=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.cde=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null)
D.J1=new B.abD(0,"all")
D.abA=new B.abD(1,"paid")
D.abB=new B.abD(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXe","d1e",()=>C.bP.$1$1(new B.cH6(),y.m))
x($,"dY4","alQ",()=>A.mV(B.dJR(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["stoUJ66s2cfQgE66/kAf0PpHsRw="]=a.current})($__dart_deferred_initializers__);