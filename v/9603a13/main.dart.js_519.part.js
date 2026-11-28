((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cGC:function cGC(){},cGy:function cGy(){},cGz:function cGz(){},cGA:function cGA(){},cGB:function cGB(){},
dIs(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.Dv(x[v]))
return new B.b39(d.b,u)},
Dv:function Dv(d){this.a=d},
b39:function b39(d,e){this.a=d
this.b=e},
b3a:function b3a(){},
cYM(d){var x="category",w="due_date",v=J.a7(d),u=A.Y(v.h(d,"id")),t=A.Y(v.h(d,"wedding_id")),s=A.Y(v.h(d,"title")),r=B.dEI(B.dds(A.B(v.h(d,x)))),q=B.dds(A.B(v.h(d,x))),p=A.dv(v.h(d,"amount")),o=v.h(d,w)==null?null:A.dc(A.Y(v.h(d,w)))
v=A.dV(v.h(d,"paid"))
return new G.i3(u,t,s,r,q,p,o,v===!0)},
dds(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dEI(d){var x
A:{if("venue"===d){x=E.xO
break A}if("catering"===d){x=E.xK
break A}if("photography"===d){x=E.xL
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xM
break A}if("flowers_decor"===d){x=E.xN
break A}x=null
break A}return x},
dq8(){return new B.DF()},
zP:function zP(d,e){this.a=d
this.b=e},
b4O:function b4O(){},
b4P:function b4P(){},
DF:function DF(){this.b=this.x=null},
b4L:function b4L(){},
b4M:function b4M(d,e){this.a=d
this.b=e},
b4N:function b4N(d){this.a=d},
Cp(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cp=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akp(),$async$Cp)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").ai(0,"partner_name_1, partner_name_2").U("id",d).cf(),$async$Cp)
case 4:s=f
x=5
return A.d(u.b.P("bookings").ai(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").U("wedding_id",d).cJ(0,"event_date",!1),$async$Cp)
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
return A.d(t.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").dK("booking_id",u).tt(0,"created_at"),$async$Cp)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").ai(0,"title, category, amount, due_date, paid").U("wedding_id",d).tt(0,"due_date"),$async$Cp)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").ai(0,"name, amount").U("wedding_id",d).tt(0,"position"),$async$Cp)
case 11:o=f
x=12
return A.d(u.b.P("budgets").ai(0,"total").U("wedding_id",d).cf(),$async$Cp)
case 12:n=f
m=F.cYx(F.cDA(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ao(p);t.q();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cy(j==null?"":j)
i=k.h(l,"category")
i=J.cy(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.eU(A.p(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d2(A.p(g))
g=g==null?null:g.dF()}u.push(new B.Mi(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ao(o);l.q();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eU(A.p(k))
if(k==null)k=0}t.push(new B.a7F(i,k))}l=n==null?null:F.cZ5(J.i(n,"total"))
v=new F.lS(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cp,w)},
Mi:function Mi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7F:function a7F(d,e){this.a=d
this.b=e},
dns(){return new B.CZ(null)},
aTx(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aTx=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.fZ(!0,new B.cD_(e,new A.aF(new A.bD(u,C.aF,C.ax),$.aa())),d,y.i),$async$aTx)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTx,w)},
aki(d,e,f,g){return B.dEv(d,e,f,g)},
dEv(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$aki=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aTx(d,"Teto para "+f,g),$async$aki)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.CA().gaX(),y.x).On(f,r),$async$aki)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a0(H.HQ)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aki,w)},
dbw(d){var x=A.U(d,y._)
C.e.cq(x,new B.cD8())
return x},
dc_(d){var x=C.f.aT(C.j.k(A.aE(d)),2,"0"),w=C.f.aT(C.j.k(A.aw(d)),2,"0"),v=A.aM(d)===A.aM(new A.ac(Date.now(),0,!1))?"":"/"+A.aM(d)
return x+"/"+w+v},
cXV(d){var x,w,v,u
if(d===C.k.hy(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aX(w,".",",")}v=x.split(",")
u=A.Cw(v[0],A.aR("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHj(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abA:function abA(d,e){this.a=d
this.b=e},
CZ:function CZ(d){this.a=d},
abB:function abB(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKv:function bKv(d){this.a=d},
bKw:function bKw(d){this.a=d},
bKN:function bKN(d){this.a=d},
bKM:function bKM(){},
bKr:function bKr(){},
bKt:function bKt(){},
bKu:function bKu(){},
bKs:function bKs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKB:function bKB(){},
bKC:function bKC(d){this.a=d},
bKL:function bKL(d){this.a=d},
bKD:function bKD(){},
bKE:function bKE(){},
bKF:function bKF(d,e){this.a=d
this.b=e},
bKG:function bKG(d){this.a=d},
bKA:function bKA(d){this.a=d},
bKH:function bKH(d){this.a=d},
bKz:function bKz(d){this.a=d},
bKI:function bKI(d){this.a=d},
bKy:function bKy(d){this.a=d},
bKJ:function bKJ(d){this.a=d},
bKx:function bKx(d){this.a=d},
bKK:function bKK(d){this.a=d},
cD_:function cD_(d,e){this.a=d
this.b=e},
cCY:function cCY(d){this.a=d},
cCZ:function cCZ(d,e){this.a=d
this.b=e},
cD8:function cD8(){},
aP8:function aP8(d,e,f){this.c=d
this.d=e
this.a=f},
aDd:function aDd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDe:function aDe(d,e){this.e=d
this.a=e},
bMW:function bMW(){},
bMY:function bMY(d,e){this.a=d
this.b=e},
bMZ:function bMZ(d){this.a=d},
bMX:function bMX(d,e,f){this.a=d
this.b=e
this.c=f},
aCL:function aCL(d,e){this.c=d
this.a=e},
bJR:function bJR(d){this.a=d},
bJQ:function bJQ(d){this.a=d},
aFR:function aFR(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bWB:function bWB(d,e){this.a=d
this.b=e},
bWx:function bWx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWy:function bWy(d){this.a=d},
bWz:function bWz(d,e){this.a=d
this.b=e},
bWA:function bWA(d,e){this.a=d
this.b=e},
Xs:function Xs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBS:function aBS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NJ:function NJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abf:function abf(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bHx:function bHx(d){this.a=d},
bHw:function bHw(){},
bHy:function bHy(d){this.a=d},
bHv:function bHv(){},
bHj:function bHj(){},
bHk:function bHk(d){this.a=d},
bHu:function bHu(){},
bHp:function bHp(d){this.a=d},
bHq:function bHq(d){this.a=d},
bHo:function bHo(d,e){this.a=d
this.b=e},
bHr:function bHr(d){this.a=d},
bHn:function bHn(d){this.a=d},
bHs:function bHs(d){this.a=d},
bHm:function bHm(d){this.a=d},
bHt:function bHt(d,e){this.a=d
this.b=e},
bHl:function bHl(d,e){this.a=d
this.b=e},
X5:function X5(d,e){this.e=d
this.a=e},
bN_:function bN_(d){this.a=d},
bN0:function bN0(d){this.a=d},
bN1:function bN1(){},
bN2:function bN2(){},
bN3:function bN3(d){this.a=d},
bN4:function bN4(d,e,f){this.a=d
this.b=e
this.c=f},
bN5:function bN5(d,e){this.a=d
this.b=e},
ahK:function ahK(d,e,f){this.c=d
this.d=e
this.a=f},
aBX:function aBX(d,e,f){this.e=d
this.f=e
this.a=f},
bIu:function bIu(){},
bIA:function bIA(d){this.a=d},
bIx:function bIx(){},
bIw:function bIw(d){this.a=d},
bIn:function bIn(d){this.a=d},
bIv:function bIv(d,e,f){this.a=d
this.b=e
this.c=f},
bIy:function bIy(d){this.a=d},
bIl:function bIl(d){this.a=d},
bIm:function bIm(){},
bIz:function bIz(d,e){this.a=d
this.b=e},
bIs:function bIs(d){this.a=d},
bIt:function bIt(d){this.a=d},
bIo:function bIo(){},
bIp:function bIp(d){this.a=d},
bIq:function bIq(d){this.a=d},
bIr:function bIr(d,e){this.a=d
this.b=e},
an6:function an6(d,e){this.c=d
this.a=e},
aY9:function aY9(d){this.a=d},
dgw(d){var x
switch(d){case E.xO:x=D.bCS
break
case E.xK:x=D.by6
break
case E.xL:x=D.bBF
break
case E.xM:x=D.bB5
break
case E.xN:x=D.bzA
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
B.Dv.prototype={
gap(d){return this.a.a}}
B.b39.prototype={
gpW(){return C.e.cU(this.b,0,new B.b3a())},
gaBj(){var x=this.a
return x===0?0:C.k.ae(this.gpW()/x,0,1)}}
B.zP.prototype={
gbyq(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b4O(),w),w.i("w.E"))
return x},
gbyL(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b4P(),w),w.i("w.E"))
return x},
awu(d,e){var x=e==null?this.a:e
return new B.zP(x,d==null?this.b:d)},
ik(d){return this.awu(null,d)},
awc(d){return this.awu(d,null)}}
B.DF.prototype={
d_(){var x=y.T,w=this.x=A.eQ(this).G(A.cD($.cp(),new B.b4L(),y.v,x),x)
if(w!=null)A.j4(new B.b4M(this,w),y.H)
return D.azH},
bX(d,e){return this.bvQ(0,e)},
bvQ(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bX=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ik(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").ck(0).U("wedding_id",e).cJ(0,"created_at",!0),$async$bX)
case 2:v.sa4(0,new t.zP(s,r.da(g,B.dJj(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bX,w)},
Vg(d){return this.blO(d)},
blO(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vg=A.j(function(e,f){if(e===1)return A.k(f,w)
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
return A.d(r.d3(0,u).ck(0).dM(0),$async$Vg)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cYM(s))
v.sa4(0,r.awc(u))
return A.l(null,w)}})
return A.m($async$Vg,w)},
Ok(d){return this.bBi(d)},
bBi(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Ok=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lb(v.ga4(0).b,new B.b4N(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bh(0,A.R(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).cg()],u,u)).U("id",d).ck(0).dM(0),$async$Ok)
case 2:t=l.cYM(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.awc(m))
return A.l(null,w)}})
return A.m($async$Ok,w)}}
B.Mi.prototype={}
B.a7F.prototype={
gap(d){return this.a}}
B.abA.prototype={
I(){return"_BudgetFilter."+this.b}}
B.CZ.prototype={
S(){return new B.abB(D.J0)}}
B.abB.prototype={
Tr(d){return this.bbI(d)},
bbI(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Tr=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKv(u))
x=1
break}u.p(new B.bKw(u))
t=u.gR()
s=$.cp()
r=t.a_(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a_(0,s.gaX(),y.Z).ai(0,d),$async$Tr)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Tr,w)},
ad(){this.aq()
A.j4(new B.bKN(this),y.H)},
PV(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$PV=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gR()
n=$.alJ()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.CA(),y.b).b
s=t==null?null:t.b
r=C.e.cU(o.a_(0,n,y.g).b,0,new B.bKr())
t=o.a_(0,$.cp(),y.v).b
q=t==null?null:t.gcv()
t=u.c
t.toString
x=3
return A.d(A.bQ(null,new B.bKs(q,s,new B.bKt(),r),!1,t,!0,!0,null,y.B),$async$PV)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vg(new G.i3("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$PV,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gR(),a2=a1.G($.CA(),y.b),a3=a1.G($.HS(),y.d),a4=a1.G($.alJ(),y.g),a5=a2.b,a6=a5==null?e:B.dIs(a5,a3.b)
a5=A.j0(a1.G($.iZ(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iS
a5=y.T
w=a1.G(A.cD($.cp(),new B.bKB(),y.v,a5),a5)
if(f.y){a1=f.gap5()
return A.cP(e,C.cP,A.nI(C.eZ,40,A.a([C.fv,D.aH5,K.cVj(a1,e),new B.aBX(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.db(x,new B.bKC(w))
a1=a1.G($.uA(),y.l)
u=a1.gv(a1)
t=new B.bKL(u==null?C.fc:u)
a1=y._
a5=A.U(a4.gbyq(),a1)
for(s=v.a,r=J.c9(s),q=r.gX(s),p=v.b,o=v.$ti.i("fy<1>"),n=new A.fy(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i3("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbyL(0),a1)
for(s=r.gX(s),o=new A.fy(s,p,o),p=y.r;o.q();){r=s.gE(s)
n=A.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new G.i3("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new G.i3("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dbw(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dbw(q)
break
default:a1=e}h=C.e.cU(q,0,new B.bKD())
s=a6==null
if(s)g=D.bz9
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bKE(),p),p.i("w.E"))}if(s)a1=D.bXz
else{s=f.gaQS()
r=y.p
p=A.a([new A.pr(A.a([new A.qI(s,"Nova despesa",e)],r),e),D.aHb,K.cVj(f.gap5(),w),new B.aP8(a6,new B.bKF(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aJ(a6.gpW(),!1)
n=a5.length
m=n===1?d:a0
l=A.aJ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c2("N\xfameros",e,A.a([new A.DQ(A.a([new A.l8("Gasto",o,""+n+" "+m,e),new A.l8("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.ma(A.a([new A.ej("Todos",l===D.J0,n+m,new B.bKG(f),e),new A.ej("Pendentes",l===D.abx,m,new B.bKH(f),e),new A.ej("Pagos",l===D.abw,n,new B.bKI(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aFR(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c2("Pagamentos",e,o,16,e))
a1=A.a([new A.h4(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDd(g,f.x,new B.bKJ(f),e))
p.push(new A.c2("Categorias",e,a1,16,e))
p.push(new A.c2("Exportar",e,A.a([new F.DG("Gastos e parceiros",!1,new B.bKK(f),e)],r),16,e))
a1=A.nI(C.eZ,40,p,e,!0,!1)}return A.cP(e,C.cP,a1,!0,e)},
Io(d){return this.aXN(d)},
aXN(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Io=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aTx(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Io)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gR().a_(0,$.CA().gaX(),y.x).ZY(r),$async$Io)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a0(H.HQ)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Io,w)}}
B.aP8.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpW()>0?"Gastos "+A.aJ(t.gpW(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vi(new A.hf("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hD,0,"por definir","\u2014")}x=C.k.aN(t.gaBj()*100)
w=s-t.gpW()<0?"Acima do teto":"Ainda tens"
v=A.aJ(Math.abs(s-t.gpW()),!1)
s=A.aJ(s,!1)
u=t.gaBj()
return A.aY(A.vi(H.a1A,"Gastos "+A.aJ(t.gpW(),!1)+" \xb7 "+x+"% do teto",w,C.hD,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDd.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dz(s,0,A.et(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDe(r[w],null))
q=A.a([A.eR(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hf(u,v.e,!0,null))}return A.z(q,C.E,C.h,C.l)}}
B.aDe.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cD($.cp(),new B.bMW(),y.v,m),m)
if(l==null)x=C.r0
else{m=e.G($.d0L().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r0:m}m=A.a([],y.s)
for(w=B.dgw(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bMY(this,d)
if(w)return A.jZ(!1,!1,p,v,A.aJ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mK("P\xf4r teto",new B.bMX(this,d,e),!0,p))
w=A.aJ(o.b,!1)
u=A.aJ(n,!1)
s=y.p
q=A.a([A.aK(new A.a4_(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aD,new B.an6(m,p)],s))
return A.jZ(!1,!1,p,v,w+" de "+u,o.a,A.z(q,C.dJ,C.h,C.J))}}
B.aCL.prototype={
u(d){var x,w,v=null,u=$.au,t=$.fj.cc(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fR(r,A.aK(p==null?A.kK(A.b9(C.i7,u,v,v,v),C.t,!0):A.pn(p,144,new B.bJQ(u),!1,C.bE,A.wt(),!1,v,v,v),48,48),C.bc)
p=A.h(q.b,1,C.a1,v,v,D.c3i,v,v)
x=A.b9(C.i9,u,v,v,14)
w=q.d
q=w>0?q.gPs()+" \xb7 "+A.aJ(w,!1):q.gPs()
w=y.p
return new A.S(C.d0,A.aY(A.x(v,A.N(A.a([r,C.af,A.a4(A.z(A.a([p,C.j4,A.N(A.a([x,C.dY,new A.di(1,C.ba,A.h(q,1,C.a1,v,v,A.aI(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bl,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b9(C.ib,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.x),v,v,v,C.ed,v,v,v),new B.bJR(d),v),v)}}
B.aFR.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JD(A.a([new A.hf("+ Nova despesa",this.f,!0,j)],y.p),C.eR,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aB0
x=new B.bWB(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+B.dc_(m)
v.push(new A.ta(new A.cg(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bWx(d,e,s,q),A.HL(m)===C.f5,j))
continue}p=r?new B.bWy(d):new B.bWz(x,s)
v.push(new B.Xs(s,p,r||s.w?j:new B.bWA(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xs&&v[k-1] instanceof B.Xs)u.push(C.iI)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAH)
return A.z(i,C.E,C.h,C.l)}}
B.Xs.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aJ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dc_(w))
v=C.e.a1(v," \xb7 ")
if(u)u=D.aGR
else{u=this.e
u=u!=null?new A.mK("Marcar pago",u,!0,null):D.aGY}return A.jZ(!1,!1,null,this.d,v,x.c,u)}}
B.aBS.prototype={}
B.NJ.prototype={
S(){var x=$.aa()
return new B.abf(new A.aF(C.ak,x),new A.aF(C.ak,x))}}
B.abf.prototype={
ad(){var x=this
x.aq()
x.d.an(0,new B.bHx(x))
x.e.an(0,new B.bHy(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a7()},
gaht(){var x=C.f.B(this.e.a.a)
x=A.aX(x," ","")
return A.eU(A.aX(x,",","."))},
aS4(){var x,w,v,u,t=this,s=t.gaht()
t.p(new B.bHk(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.an(w,!1)
v=t.w
u=v?null:t.f
w.af(new B.aBS(x,s,u,t.r,v))},
arP(d,e,f,g,h){var x=null,w=h?C.fm:x,v=y.p,u=A.a4(A.z(A.a([A.h(d,x,x,x,x,C.a9,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.bp:x,s=f?x:A.bE(C.ks,1.5),r=f?S.vm:x
return A.bi(x,!0,x,A.cq(C.bu,A.x(x,A.N(A.a([u,A.x(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.ap),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.cL,new A.I(x,x,w,x,x,x,C.x),x,x,x,C.hr,x,x,x),C.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bi9(d,e,f,g){return this.arP(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gaht()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bHu()
t=y.w
s=A.aT(d,k,t).w
r=y.p
q=A.a([D.c7x],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k))
q=A.N(A.a([A.a4(A.z(q,C.G,C.h,C.l),1),A.bi(k,!0,k,A.cq(k,A.x(k,C.hz,C.r,k,k,C.bV,k,44,k,k,k,k,44),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHp(d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c8C,A.N(A.a([V.d5a(A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),l.e,k,k,k,k,k,2,D.aEU,C.W,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.fJ,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aaf,!0,C.dA,k,C.b0,k,k,k,k)),C.bj,D.c80],r),C.ec,C.bR,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cXV(v)+" no teto":"Passa o teto em "+B.cXV(-v)
o.push(A.h(m,k,k,k,k,A.aI(k,k,n?C.V:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c7d)
p=A.x(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a4,k,k,p,k,k,C.x),k,k,k,C.bn,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bE(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d0,o,k),A.x(C.bb,A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),x,k,k,k,k,k,2,D.aEy,C.W,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fh,!0,C.au,k,C.hb,k,k,k,k),C.r,k,k,new A.I(C.a4,k,m,n,k,k,C.x),k,52,k,C.fq,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bLb)
n.push(C.a_)
n.push(new U.a1e(l.r,new B.bHq(l),k))
n.push(C.a_)
n.push(new A.S(C.d0,A.h("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bi9("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHr(l)),l.arP("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHs(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aE(p)))
m=l.f
m.toString
m=A.p(w.$1(A.aw(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aM(w)}o.push(A.bi(k,!0,k,A.cq(C.bu,A.aK(A.N(A.a([D.azr,A.h(w,k,k,k,k,C.cc,k,k),C.dY,C.jS],r),C.v,C.h,C.l,0,k),56,k),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHt(l,d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.x(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a4,k,k,x,k,k,C.x),k,k,k,C.cr,k,k,k))
n.push(C.a_)
n.push(D.cd4)
x=A.dS(A.z(n,C.E,C.h,C.l),C.y,k,C.ee,k,C.av)
t=A.aT(d,C.b5,t).w
w=A.cc(u?C.z:C.z.cc(0.35),k,k,C.t,k,k,C.aa,k,k,C.eH)
return new A.S(new A.a3(0,0,0,s.f.d),A.z(A.a([new A.S(C.jD,q,k),new A.di(1,C.ba,x,k),new A.S(new A.a3(20,16,20,20+t.r.d),A.aK(new A.al(A.bB(A.h(u?"Guardar \xb7 "+B.cXV(j):"Guardar",k,k,k,k,k,k,k),l.gaS3(),w),k),52,k),k)],r),C.E,C.h,C.J),k)}}
B.X5.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CA(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eL(new A.a6(j,new B.bN_(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.alJ(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bN0(l),w),w.i("w.E"))
C.e.cq(v,new B.bN1())
j=y.T
u=e.G(A.cD($.cp(),new B.bN2(),y.v,j),j)
t=B.dgw(l.e.c)
if(u==null)s=I.Fh
else{j=e.G($.aVp().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fh
j=J.db(j,new B.bN3(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aT(d,k,y.w).w
w=A.bO(A.x(k,k,C.r,k,k,new A.I(C.bF,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ay(d).ok.r,k,k)
q=A.a4(new B.ahK("Gasto",A.aJ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aA,A.N(A.a([q,C.ae,A.a4(A.aY(new B.ahK("Teto \xb7 tocar para mudar",p===0?"Definir":A.aJ(p,!1),k),new B.bN4(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bh,A.h("Contratado na app",k,k,k,k,A.ay(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aCL(s[n],k))
C.e.n(p,w)}p.push(C.bh)
p.push(A.h("Despesas",k,k,k,k,A.ay(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKB)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.is,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aT(C.j.k(A.aE(q)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(q)),2,"0")+"/"+A.aM(q),k,k,k,k,k,k,k)
p.push(A.jn(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.N(A.a([A.h(A.aJ(m.f,!1),k,k,k,k,D.c5n,k,k),C.ab,new P.D9(m.w,new B.bN5(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J2,k)],o),C.v,C.h,C.J,0,k),k))}return A.bA(!0,new A.ea(new A.aS(0,1/0,0,j.a.b*0.8),A.d6(p,k,L.CP,k,k,!1,!0),k),k,C.Z,!0)}}
B.ahK.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.z(A.a([A.h(this.c,x,x,x,x,C.be,x,x),C.ar,A.h(this.d,x,x,x,x,M.aa2,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.I(C.a4,x,x,w,x,x,C.x),x,x,x,C.cT,x,x,x)}}
B.aBX.prototype={
b9(d,e){var x,w=y.t,v=e.G(A.cD($.cp(),new B.bIu(),y.v,w),w),u=e.G($.d0K(),y.o)
w=e.G($.uA(),y.l)
x=w.gv(w)
return A.hD(u,new B.bIv(this,new B.bIA(x==null?C.fc:x),v),new B.bIw(e),new B.bIx(),!1,!0,!1)}}
B.an6.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.fj
s=new A.b6(999,999)
r=new A.bg(o.cc(0.25),1,C.aj,-1)
q=A.b9(C.i9,o,p,p,13)
t=A.x(p,A.N(A.a([q,C.rK,new A.di(1,C.ba,A.h(u,1,C.a1,p,p,new A.P(!0,o,p,p,p,p,14,C.d2,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b9(C.ib,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afk,new A.I(t,p,new A.dM(r,r,r,r),new A.cz(s,s,s,s),p,p,C.x),p,p,p,D.au0,p,p,p)
m.push(new A.js(new A.n3(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.ia(t,new B.aY9(d),p,p),p))}return A.e4(C.bf,m,C.r,C.bk,6,6)}}
var z=a.updateTypes(["C(i3)","T(T,i3)","v(i3,i3)","T(T,Dv)","zP()","F<~>(c?)","F<~>()","NJ(O)","C(Dv)","F<lS>()","X5(O)","~(i3)","~()","C(no)","C(rK)","i3(a5<c,@>)","DF()"])
B.cGC.prototype={
$1(d){return this.aEB(d)},
aEB(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.yg(a1)
u=y.t
t=a1.G(A.cD($.cp(),new B.cGy(),y.v,u),u)
u=J.a7(t)
if(u.gY(t)){v=D.bza
x=1
break}s=A.a([],y.s)
for(r=u.gX(t);r.q();)s.push(r.gE(r).a)
r=$.Q()
q=r.b
q===$&&A.b()
p=y.G
o=q.P("budgets").ai(0,"wedding_id, total").dK("wedding_id",s).b3(new B.cGz(),p)
n=r.b.P("budget_categories").ai(0,"wedding_id, amount").dK("wedding_id",s).b3(new B.cGA(),p)
m=r.b.P("expenses").ai(0,"wedding_id, amount, paid").dK("wedding_id",s).b3(new B.cGB(),p)
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
s.push(new A.aMp([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1295}
B.cGy.prototype={
$1(d){return d.c},
$S:149}
B.cGz.prototype={
$1(d){return d},
$S:29}
B.cGA.prototype={
$1(d){return d},
$S:29}
B.cGB.prototype={
$1(d){return d},
$S:29}
B.b3a.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b4O.prototype={
$1(d){return d.w},
$S:z+0}
B.b4P.prototype={
$1(d){return!d.w},
$S:z+0}
B.b4L.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.b4M.prototype={
$0(){return this.a.bX(0,this.b)},
$S:1}
B.b4N.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKv.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKw.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bKN.prototype={
$0(){return this.a.gR().a_(0,$.CA().gaX(),y.x).Zf(0).ea(new B.bKM())},
$S:1}
B.bKM.prototype={
$1(d){},
$S:11}
B.bKr.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKt.prototype={
$1(d){return A.Cw(C.k.a8(d,0),A.aR("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKu(),null)+" \u20ac"},
$S:106}
B.bKu.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:42}
B.bKs.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a1(v," \xb7 ")
u=x&&u>0?u:null
return new B.NJ(v,u,w.d,null)},
$S:z+7}
B.bKB.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bKC.prototype={
$1(d){return d.x!==C.e8&&d.b===this.a},
$S:56}
B.bKL.prototype={
$2(d,e){return A.jf(d,this.a.l8(e))},
$1(d){return this.$2(d,null)},
$S:1298}
B.bKD.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKE.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bKF.prototype={
$0(){return this.a.Io(this.b.a)},
$S:0}
B.bKG.prototype={
$0(){var x=this.a
return x.p(new B.bKA(x))},
$S:0}
B.bKA.prototype={
$0(){return this.a.w=D.J0},
$S:0}
B.bKH.prototype={
$0(){var x=this.a
return x.p(new B.bKz(x))},
$S:0}
B.bKz.prototype={
$0(){return this.a.w=D.abx},
$S:0}
B.bKI.prototype={
$0(){var x=this.a
return x.p(new B.bKy(x))},
$S:0}
B.bKy.prototype={
$0(){return this.a.w=D.abw},
$S:0}
B.bKJ.prototype={
$0(){var x=this.a
return x.p(new B.bKx(x))},
$S:0}
B.bKx.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bKK.prototype={
$0(){return B.Cp(this.a.gR().a_(0,$.cp(),y.v).b.a)},
$S:z+9}
B.cD_.prototype={
$1(d){var x=null,w=this.b
return new A.eT(A.h(this.a,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.cu(),w,x,x,x,x,x,2,D.aF6,C.W,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.fJ,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b0,x,x,x,x),A.a([new A.al(A.cH(C.cZ,x,x,new B.cCY(d),x,x),x),new A.al(A.bB(C.dv,new B.cCZ(d,w),x),x)],y.p),x)},
$S:19}
B.cCY.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
B.cCZ.prototype={
$0(){var x=A.an(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aX(w," ","")
return x.af(A.eU(A.aX(w,",",".")))},
$S:0}
B.cD8.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bMW.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bMY.prototype={
$0(){return A.bQ(null,new B.bMZ(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bMZ.prototype={
$1(d){return new B.X5(this.a.e.a,null)},
$S:z+10}
B.bMX.prototype={
$0(){return B.aki(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bJR.prototype={
$0(){var x=this.a
A.an(x,!1).bj()
A.ad(x).ak("/bookings",null,y.X)},
$S:0}
B.bJQ.prototype={
$3(d,e,f){return A.kK(A.b9(C.i7,this.a,null,null,null),C.t,!0)},
$S:100}
B.bWB.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.alJ().gaX(),y.h).Ok(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a0(A.bY(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bWx.prototype={
$0(){var x=this
return A.rB(x.a,x.b,C.f.bD(x.c.a,x.d+5),null,null)},
$S:0}
B.bWy.prototype={
$0(){return A.ad(this.a).ak("/bookings",null,y.X)},
$S:0}
B.bWz.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bWA.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHx.prototype={
$0(){return this.a.p(new B.bHw())},
$S:0}
B.bHw.prototype={
$0(){},
$S:0}
B.bHy.prototype={
$0(){return this.a.p(new B.bHv())},
$S:0}
B.bHv.prototype={
$0(){},
$S:0}
B.bHj.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:42}
B.bHk.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHu.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:37}
B.bHp.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
B.bHq.prototype={
$1(d){var x=this.a
return x.p(new B.bHo(x,d))},
$S:131}
B.bHo.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHr.prototype={
$0(){var x=this.a
return x.p(new B.bHn(x))},
$S:0}
B.bHn.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHs.prototype={
$0(){var x=this.a
return x.p(new B.bHm(x))},
$S:0}
B.bHm.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHt.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cMV(v.b,A.bZ(A.aM(t)-1,1,1,0,0),r,A.bZ(A.aM(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHl(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHl.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bN_.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bN0.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bN1.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bN2.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bN3.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bN4.prototype={
$0(){var x=this.c
return B.aki(this.a,this.b,x.a,x.d)},
$S:0}
B.bN5.prototype={
$1(d){return this.a.a_(0,$.alJ().gaX(),y.h).Ok(this.b.a)},
$S:158}
B.bIu.prototype={
$1(d){return d.c},
$S:149}
B.bIA.prototype={
$2(d,e){return A.jf(d,this.a.l8(e))},
$S:44}
B.bIx.prototype={
$0(){return D.bLd},
$S:89}
B.bIw.prototype={
$2(d,e){return A.JD(A.a([new A.hf("Tentar outra vez",new B.bIn(this.a),!1,null)],y.p),C.eR,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1299}
B.bIn.prototype={
$0(){return this.a.aj($.d0K())},
$S:0}
B.bIv.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIy(g),e=new B.bIz(g,this.b),d=J.c9(a4),a0=d.cU(a4,0,new B.bIo()),a1=d.cU(a4,0,new B.bIp(f)),a2=d.cU(a4,0,new B.bIq(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ao(this.c);x.q();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.BS(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bD(s,1))}x=A.aJ(a1,!1)
w=a0>0
v=w?"de "+A.aJ(a0,!1):"gastos"
u=w?C.k.ae(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aN(a1/a0*100)+"% dos tetos":""
x=A.vi(i,""+t+" "+r+w,"Todos os eventos",C.hD,u,v,x)
v=y.p
u=A.a([new A.DQ(A.a([new A.l8("Gasto",A.aJ(a1,!1),h,i),new A.l8("Por pagar",A.aJ(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eu(a4,0,y.A),r=J.ao(t.a),q=t.b,t=new A.bX(r,q,A.u(t).i("bX<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.am(A.c0())
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
l.push(new A.ia(A.x(i,A.N(A.a([new A.bJ(1,C.at,n,i),C.ae,A.h(A.aJ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.bj,C.jS],v),C.v,C.h,C.l,0,i),C.r,C.as,C.cL,i,i,i,i,C.cj,i,i,i),new B.bIr(o,g),i,i))
C.e.n(w,l)}return A.z(A.a([x,new A.c2("N\xfameros",i,u,16,i),new A.c2("Por evento \xb7 "+d,i,w,16,i),D.aAJ],v),C.E,C.h,C.l)},
$S:1300}
B.bIy.prototype={
$1(d){return J.db(this.a.e,new B.bIl(d)).cU(0,0,new B.bIm())},
$S:191}
B.bIl.prototype={
$1(d){return d.b===this.a&&d.x!==C.e8},
$S:56}
B.bIm.prototype={
$2(d,e){return d+e.w},
$S:440}
B.bIz.prototype={
$1(d){return J.db(this.a.e,new B.bIs(d)).cU(0,0,new B.bIt(this.b))},
$S:191}
B.bIs.prototype={
$1(d){return d.b===this.a&&d.x!==C.e8},
$S:56}
B.bIt.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:440}
B.bIo.prototype={
$2(d,e){return d+e.a[2]},
$S:237}
B.bIp.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:237}
B.bIq.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:237}
B.bIr.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aY9.prototype={
$0(){return A.ad(this.a).ak("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dJj","cYM",15)
w(B,"dJi","dq8",16)
v(B.DF.prototype,"giD","d_",4)
var t
u(t=B.abB.prototype,"gap5","Tr",5)
v(t,"gaQS","PV",6)
v(B.abf.prototype,"gaS3","aS4",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bs,[B.cGC,B.cGy,B.cGz,B.cGA,B.cGB,B.b4O,B.b4P,B.b4L,B.b4N,B.bKM,B.bKt,B.bKu,B.bKs,B.bKB,B.bKC,B.bKL,B.bKE,B.cD_,B.bMW,B.bMZ,B.bJQ,B.bWB,B.bHj,B.bHu,B.bHq,B.bN_,B.bN0,B.bN2,B.bN3,B.bN5,B.bIu,B.bIv,B.bIy,B.bIl,B.bIz,B.bIs])
x(A.L,[B.Dv,B.b39,B.zP,B.Mi,B.a7F,B.aBS])
x(A.cK,[B.b3a,B.bKr,B.bKD,B.cD8,B.bN1,B.bIA,B.bIw,B.bIm,B.bIt,B.bIo,B.bIp,B.bIq])
w(B.DF,A.fa)
x(A.bL,[B.b4M,B.bKv,B.bKw,B.bKN,B.bKF,B.bKG,B.bKA,B.bKH,B.bKz,B.bKI,B.bKy,B.bKJ,B.bKx,B.bKK,B.cCY,B.cCZ,B.bMY,B.bMX,B.bJR,B.bWx,B.bWy,B.bWz,B.bWA,B.bHx,B.bHw,B.bHy,B.bHv,B.bHk,B.bHp,B.bHo,B.bHr,B.bHn,B.bHs,B.bHm,B.bHt,B.bHl,B.bN4,B.bIx,B.bIn,B.bIr,B.aY9])
w(B.abA,A.fg)
w(B.CZ,A.dC)
w(B.abB,A.dw)
x(A.M,[B.aP8,B.aDd,B.aCL,B.Xs,B.ahK,B.an6])
x(A.ew,[B.aDe,B.aFR,B.X5,B.aBX])
w(B.NJ,A.G)
w(B.abf,A.a0)})()
A.bq(b.typeUniverse,JSON.parse('{"DF":{"fa":["zP"]},"NJ":{"G":[],"e":[],"f":[]},"X5":{"G":[],"e":[],"f":[]},"CZ":{"G":[],"e":[],"f":[]},"abB":{"a0":["CZ"]},"aP8":{"M":[],"e":[],"f":[]},"aDd":{"M":[],"e":[],"f":[]},"aDe":{"G":[],"e":[],"f":[]},"aCL":{"M":[],"e":[],"f":[]},"aFR":{"G":[],"e":[],"f":[]},"Xs":{"M":[],"e":[],"f":[]},"abf":{"a0":["NJ"]},"ahK":{"M":[],"e":[],"f":[]},"aBX":{"G":[],"e":[],"f":[]},"an6":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{l:x("ax<f8>"),k:x("ax<t<rK>>"),u:x("ax<t<fI>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("ax<a5<c,t<c>>>"),x:x("zs"),b:x("uN"),d:x("rP"),Z:x("oj"),v:x("eb"),_:x("i3"),h:x("DF"),g:x("zP"),D:x("r<Dv>"),r:x("r<i3>"),Q:x("r<l8>"),F:x("r<ej>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7F>"),c:x("r<Mi>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fI>"),t:x("t<fl>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a5<c,@>"),w:x("dt"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lS"),N:x("c"),B:x("aBS"),q:x("dl"),i:x("T"),z:x("@"),S:x("v"),X:x("L?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afk=new A.aS(0,1/0,32,1/0)
D.au0=new A.a3(8,5,6,5)
D.cgJ=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azr=new A.bJ(1,C.at,D.cgJ,null)
D.byS=x([],y.r)
D.azH=new B.zP(!1,D.byS)
D.aAH=new A.h4("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAJ=new A.h4("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aB0=new A.h4("Sem pagamentos nesta vista.",8,null)
D.aEy=new A.dE(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aEU=new A.dE(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aF6=new A.dE(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGR=new A.dU("Pago",C.cU,null)
D.aGY=new A.dU("Por pagar",C.hB,null)
D.aH5=new A.ld("Or\xe7amento","Todos os teus eventos",null)
D.aHb=new A.ld("Or\xe7amento",null,null)
D.by6=x(["catering"],y.s)
D.bz9=x([],y.D)
D.bza=x([],y.n)
D.bzA=x(["flowers_decor"],y.s)
D.bB5=x(["music_dj","bands_musicians"],y.s)
D.bBF=x(["photography"],y.s)
D.bCS=x(["venue"],y.s)
D.aEn=new A.vd("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kA,null)
D.bKB=new A.S(C.fV,D.aEn,null)
D.c8Z=new A.D("A despesa precisa de um t\xedtulo",null,C.ml,null,null,null,null,null,null,null)
D.bLb=new A.S(T.Nv,D.c8Z,null)
D.bLd=new A.S(O.uM,C.f0,null)
D.bXz=new A.vS(!1,6,!0,null)
D.c3i=new A.P(!0,C.z,null,null,null,null,14,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5n=new A.P(!0,null,null,null,null,null,null,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaf=new A.P(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7d=new A.D("Indica um valor v\xe1lido",null,C.ml,null,null,null,null,null,null,null)
D.c7x=new A.D("Nova despesa",null,C.bi,null,null,null,null,null,null,null)
D.c80=new A.D("\u20ac",null,D.aaf,null,null,null,null,null,null,null)
D.c8C=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.cd4=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null)
D.J0=new B.abA(0,"all")
D.abw=new B.abA(1,"paid")
D.abx=new B.abA(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWD","d0K",()=>C.bO.$1$1(new B.cGC(),y.m))
x($,"dXt","alJ",()=>A.mU(B.dJi(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["fbfXiR5YpQuEXe2CJXuMmxrT9hA="]=a.current})($__dart_deferred_initializers__);