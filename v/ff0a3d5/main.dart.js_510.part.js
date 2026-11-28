((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,Q,E,R,S,F,G,T,H,K,U,V,W,I,X,B={cGH:function cGH(){},cGD:function cGD(){},cGE:function cGE(){},cGF:function cGF(){},cGG:function cGG(){},
dI2(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DA(x[v]))
return new B.b3J(d.b,u)},
DA:function DA(d){this.a=d},
b3J:function b3J(d,e){this.a=d
this.b=e},
b3K:function b3K(){},
cYB(d){var x="category",w="due_date",v=J.a7(d),u=A.Z(v.h(d,"id")),t=A.Z(v.h(d,"wedding_id")),s=A.Z(v.h(d,"title")),r=B.dEl(B.dde(A.C(v.h(d,x)))),q=B.dde(A.C(v.h(d,x))),p=A.dt(v.h(d,"amount")),o=v.h(d,w)==null?null:A.db(A.Z(v.h(d,w)))
v=A.dX(v.h(d,"paid"))
return new H.i2(u,t,s,r,q,p,o,v===!0)},
dde(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dEl(d){var x
A:{if("venue"===d){x=E.y1
break A}if("catering"===d){x=E.xY
break A}if("photography"===d){x=E.xZ
break A}if("music_dj"===d||"bands_musicians"===d){x=E.y_
break A}if("flowers_decor"===d){x=E.y0
break A}x=null
break A}return x},
dpL(){return new B.DK()},
zX:function zX(d,e){this.a=d
this.b=e},
b5n:function b5n(){},
b5o:function b5o(){},
DK:function DK(){this.b=this.x=null},
b5k:function b5k(){},
b5l:function b5l(d,e){this.a=d
this.b=e},
b5m:function b5m(d){this.a=d},
Cv(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cv=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akR(),$async$Cv)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").aj(0,"partner_name_1, partner_name_2").V("id",d).cj(),$async$Cv)
case 4:s=f
x=5
return A.d(u.b.P("bookings").aj(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cR(0,"event_date",!1),$async$Cv)
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
return A.d(t.P("payments").aj(0,"booking_id, type, status, amount, paid_at, due_at, provider").dN("booking_id",u).tD(0,"created_at"),$async$Cv)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").aj(0,"title, category, amount, due_date, paid").V("wedding_id",d).tD(0,"due_date"),$async$Cv)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").aj(0,"name, amount").V("wedding_id",d).tD(0,"position"),$async$Cv)
case 11:o=f
x=12
return A.d(u.b.P("budgets").aj(0,"total").V("wedding_id",d).cj(),$async$Cv)
case 12:n=f
m=F.cYm(F.cDP(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ap(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cy(j==null?"":j)
i=k.h(l,"category")
i=J.cy(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.eV(A.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d5(A.q(g))
g=g==null?null:g.dP()}u.push(new B.Mm(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ap(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eV(A.q(k))
if(k==null)k=0}t.push(new B.a7T(i,k))}l=n==null?null:F.cYU(J.i(n,"total"))
v=new F.lQ(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cv,w)},
Mm:function Mm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7T:function a7T(d,e){this.a=d
this.b=e},
dn3(){return new B.a0Q(null)},
aU8(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aU8=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a9(f,0)
x=3
return A.d(A.fR(!0,new B.cDe(e,new A.aE(new A.bC(u,C.aF,C.aw),$.aa())),d,y.i),$async$aU8)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aU8,w)},
akK(d,e,f,g){return B.dE8(d,e,f,g)},
dE8(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akK=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aU8(d,"Teto para "+f,g),$async$akK)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CG().gaX(),y.x).OO(f,r),$async$akK)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a2(I.I0)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akK,w)},
dbh(d){var x=A.U(d,y._)
C.e.cv(x,new B.cDn())
return x},
dbL(d){var x=C.f.aW(C.j.k(A.az(d)),2,"0"),w=C.f.aW(C.j.k(A.ao(d)),2,"0"),v=A.ax(d)===A.ax(new A.ac(Date.now(),0,!1))?"":"/"+A.ax(d)
return x+"/"+w+v},
cXJ(d){var x,w,v,u
if(d===C.k.fE(d))x=C.k.a9(d,0)
else{w=C.k.a9(d,2)
x=A.aV(w,".",",")}v=x.split(",")
u=A.CC(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHm(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abU:function abU(d,e){this.a=d
this.b=e},
a0Q:function a0Q(d){this.a=d},
abV:function abV(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKA:function bKA(d){this.a=d},
bKB:function bKB(d){this.a=d},
bKS:function bKS(d){this.a=d},
bKR:function bKR(){},
bKw:function bKw(){},
bKy:function bKy(){},
bKz:function bKz(){},
bKx:function bKx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKG:function bKG(){},
bKH:function bKH(d){this.a=d},
bKQ:function bKQ(d){this.a=d},
bKI:function bKI(){},
bKJ:function bKJ(){},
bKK:function bKK(d,e){this.a=d
this.b=e},
bKL:function bKL(d){this.a=d},
bKF:function bKF(d){this.a=d},
bKM:function bKM(d){this.a=d},
bKE:function bKE(d){this.a=d},
bKN:function bKN(d){this.a=d},
bKD:function bKD(d){this.a=d},
bKO:function bKO(d){this.a=d},
bKC:function bKC(d){this.a=d},
bKP:function bKP(d){this.a=d},
cDe:function cDe(d,e){this.a=d
this.b=e},
cDc:function cDc(d){this.a=d},
cDd:function cDd(d,e){this.a=d
this.b=e},
cDn:function cDn(){},
aPH:function aPH(d,e,f){this.c=d
this.d=e
this.a=f},
aDz:function aDz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDA:function aDA(d,e){this.e=d
this.a=e},
bN5:function bN5(){},
bN7:function bN7(d,e){this.a=d
this.b=e},
bN8:function bN8(d){this.a=d},
bN6:function bN6(d,e,f){this.a=d
this.b=e
this.c=f},
aD6:function aD6(d,e){this.c=d
this.a=e},
bJW:function bJW(d){this.a=d},
bJV:function bJV(d){this.a=d},
aGk:function aGk(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bX6:function bX6(d,e){this.a=d
this.b=e},
bX2:function bX2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX3:function bX3(d){this.a=d},
bX4:function bX4(d,e){this.a=d
this.b=e},
bX5:function bX5(d,e){this.a=d
this.b=e},
Xx:function Xx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCb:function aCb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NL:function NL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abz:function abz(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bHA:function bHA(d){this.a=d},
bHz:function bHz(){},
bHB:function bHB(d){this.a=d},
bHy:function bHy(){},
bHm:function bHm(){},
bHn:function bHn(d){this.a=d},
bHx:function bHx(){},
bHs:function bHs(d){this.a=d},
bHt:function bHt(d){this.a=d},
bHr:function bHr(d,e){this.a=d
this.b=e},
bHu:function bHu(d){this.a=d},
bHq:function bHq(d){this.a=d},
bHv:function bHv(d){this.a=d},
bHp:function bHp(d){this.a=d},
bHw:function bHw(d,e){this.a=d
this.b=e},
bHo:function bHo(d,e){this.a=d
this.b=e},
X9:function X9(d,e){this.e=d
this.a=e},
bN9:function bN9(d){this.a=d},
bNa:function bNa(d){this.a=d},
bNb:function bNb(){},
bNc:function bNc(){},
bNd:function bNd(d){this.a=d},
bNe:function bNe(d,e,f){this.a=d
this.b=e
this.c=f},
bNf:function bNf(d,e){this.a=d
this.b=e},
ai9:function ai9(d,e,f){this.c=d
this.d=e
this.a=f},
aCg:function aCg(d,e,f){this.e=d
this.f=e
this.a=f},
bIx:function bIx(){},
bID:function bID(d){this.a=d},
bIA:function bIA(){},
bIz:function bIz(d){this.a=d},
bIq:function bIq(d){this.a=d},
bIy:function bIy(d,e,f){this.a=d
this.b=e
this.c=f},
bIB:function bIB(d){this.a=d},
bIo:function bIo(d){this.a=d},
bIp:function bIp(){},
bIC:function bIC(d,e){this.a=d
this.b=e},
bIv:function bIv(d){this.a=d},
bIw:function bIw(d){this.a=d},
bIr:function bIr(){},
bIs:function bIs(d){this.a=d},
bIt:function bIt(d){this.a=d},
bIu:function bIu(d,e){this.a=d
this.b=e},
anx:function anx(d,e){this.c=d
this.a=e},
aYJ:function aYJ(d){this.a=d},
dgd(d){var x
switch(d){case E.y1:x=D.bDe
break
case E.xY:x=D.byp
break
case E.xZ:x=D.bC1
break
case E.y_:x=D.bBr
break
case E.y0:x=D.bzU
break
default:x=C.a7
break}return x}},D,L,Y
J=c[1]
A=c[0]
C=c[2]
M=c[224]
N=c[192]
O=c[209]
P=c[223]
Q=c[226]
E=c[227]
R=c[170]
S=c[222]
F=c[134]
G=c[79]
T=c[161]
H=c[77]
K=c[221]
U=c[203]
V=c[225]
W=c[132]
I=c[220]
X=c[80]
B=a.updateHolder(c[53],B)
D=c[219]
L=c[72]
Y=c[78]
B.DA.prototype={
gaq(d){return this.a.a}}
B.b3J.prototype={
gpZ(){return C.e.cW(this.b,0,new B.b3K())},
gaC9(){var x=this.a
return x===0?0:C.k.ah(this.gpZ()/x,0,1)}}
B.zX.prototype={
gbzV(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5n(),w),w.i("B.E"))
return x},
gbAg(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5o(),w),w.i("B.E"))
return x},
axh(d,e){var x=e==null?this.a:e
return new B.zX(x,d==null?this.b:d)},
im(d){return this.axh(null,d)},
ax_(d){return this.axh(d,null)}}
B.DK.prototype={
d4(){var x=y.T,w=this.x=A.eQ(this).G(A.cI($.cr(),new B.b5k(),y.v,x),x)
if(w!=null)A.jk(new B.b5l(this,w),y.H)
return D.aA2},
bY(d,e){return this.bxi(0,e)},
bxi(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).im(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").cl(0).V("wedding_id",e).cR(0,"created_at",!0),$async$bY)
case 2:v.sa4(0,new t.zX(s,r.d9(g,B.dIT(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
VI(d){return this.bnh(d)},
bnh(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$VI=A.j(function(e,f){if(e===1)return A.k(f,w)
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
u.j(0,"due_date",t==null?null:C.e.gL(t.cg().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.d8(0,u).cl(0).dQ(0),$async$VI)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cYB(s))
v.sa4(0,r.ax_(u))
return A.l(null,w)}})
return A.m($async$VI,w)},
OL(d){return this.bCR(d)},
bCR(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OL=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lh(v.ga4(0).b,new B.b5m(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bj(0,A.R(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).cg()],u,u)).V("id",d).cl(0).dQ(0),$async$OL)
case 2:t=l.cYB(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.ax_(m))
return A.l(null,w)}})
return A.m($async$OL,w)}}
B.Mm.prototype={}
B.a7T.prototype={
gaq(d){return this.a}}
B.abU.prototype={
I(){return"_BudgetFilter."+this.b}}
B.a0Q.prototype={
R(){return new B.abV(D.Jf)}}
B.abV.prototype={
TV(d){return this.bda(d)},
bda(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TV=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKA(u))
x=1
break}u.p(new B.bKB(u))
t=u.gS()
s=$.cr()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gaX(),y.Z).aj(0,d),$async$TV)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$TV,w)},
ac(){this.ao()
A.jk(new B.bKS(this),y.H)},
Qq(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Qq=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.am9()
m=y.h
l=o.a0(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CG(),y.b).b
s=t==null?null:t.b
r=C.e.cW(o.a0(0,n,y.g).b,0,new B.bKw())
t=o.a0(0,$.cr(),y.v).b
q=t==null?null:t.gcz()
t=u.c
t.toString
x=3
return A.d(A.bW(null,new B.bKx(q,s,new B.bKy(),r),!1,t,!0,!0,null,y.B),$async$Qq)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.VI(new H.i2("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Qq,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CG(),y.b),a3=a1.G($.HW(),y.d),a4=a1.G($.am9(),y.g),a5=a2.b,a6=a5==null?e:B.dI2(a5,a3.b)
a5=A.j1(a1.G($.j_(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iS
a5=y.T
w=a1.G(A.cI($.cr(),new B.bKG(),y.v,a5),a5)
if(f.y){a1=f.gapQ()
return A.cP(e,C.d1,A.on(C.fb,40,A.a([C.h2,D.aHm,L.cV9(a1,e),new B.aCg(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.da(x,new B.bKH(w))
a1=a1.G($.uy(),y.l)
u=a1.gv(a1)
t=new B.bKQ(u==null?C.f8:u)
a1=y._
a5=A.U(a4.gbzV(),a1)
for(s=v.a,r=J.c8(s),q=r.gX(s),p=v.b,o=v.$ti.i("h9<1>"),n=new A.h9(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i2("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbAg(0),a1)
for(s=r.gX(s),o=new A.h9(s,p,o),p=y.r;o.t();){r=s.gE(s)
n=A.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new H.i2("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new H.i2("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dbh(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dbh(q)
break
default:a1=e}h=C.e.cW(q,0,new B.bKI())
s=a6==null
if(s)g=D.bzu
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bKJ(),p),p.i("B.E"))}if(s)a1=D.bYg
else{s=f.gaRI()
r=y.p
p=A.a([new A.pn(A.a([new A.qM(s,"Nova despesa",e)],r),e),D.aHs,L.cV9(f.gapQ(),w),new B.aPH(a6,new B.bKK(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aK(a6.gpZ(),!1)
n=a5.length
m=n===1?d:a0
l=A.aK(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.dR("N\xfameros",e,A.a([new G.Sr(A.a([new G.xm("Gasto",o,""+n+" "+m),new G.xm("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.mc(A.a([new A.ek("Todos",l===D.Jf,n+m,new B.bKL(f),e),new A.ek("Pendentes",l===D.abT,m,new B.bKM(f),e),new A.ek("Pagos",l===D.abS,n,new B.bKN(f),e)],y.F),4,!0,e),C.at],r))}o.push(new B.aGk(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.dR("Pagamentos",e,o,16,e))
a1=A.a([new A.kO(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDz(g,f.x,new B.bKO(f),e))
p.push(new A.dR("Categorias",e,a1,16,e))
p.push(new A.dR("Exportar",e,A.a([new F.DL("Gastos e parceiros",!1,new B.bKP(f),e)],r),16,e))
a1=A.on(C.fb,40,p,e,!0,!1)}return A.cP(e,C.d1,a1,!0,e)},
IK(d){return this.aYK(d)},
aYK(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IK=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aU8(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IK)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a0(0,$.CG().gaX(),y.x).a_x(r),$async$IK)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a2(I.I0)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$IK,w)}}
B.aPH.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpZ()>0?"Gastos "+A.aK(t.gpZ(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vg(new A.io("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hI,0,"por definir","\u2014")}x=C.k.aM(t.gaC9()*100)
w=s-t.gpZ()<0?"Acima do teto":"Ainda tens"
v=A.aK(Math.abs(s-t.gpZ()),!1)
s=A.aK(s,!1)
u=t.gaC9()
return A.aX(A.vg(I.a1Z,"Gastos "+A.aK(t.gpZ(),!1)+" \xb7 "+x+"% do teto",w,C.hI,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDz.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dL(s,0,A.eA(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDA(r[w],null))
q=A.a([A.fd(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.io(u,v.e,!0,null))}return A.A(q,C.F,C.h,C.l)}}
B.aDA.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cI($.cr(),new B.bN5(),y.v,m),m)
if(l==null)x=C.rm
else{m=e.G($.d0A().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rm:m}m=A.a([],y.s)
for(w=B.dgd(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bN7(this,d)
if(w)return A.jY(!1,!1,p,v,A.aK(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.oh("P\xf4r teto",new B.bN6(this,d,e),!0,p))
w=A.aK(o.b,!1)
u=A.aK(n,!1)
s=y.p
q=A.a([A.aH(new A.Tl(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aD,new B.anx(m,p)],s))
return A.jY(!1,!1,p,v,w+" de "+u,o.a,A.A(q,C.dk,C.h,C.J))}}
B.aD6.prototype={
u(d){var x,w,v=null,u=$.at,t=$.ft.cd(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fT(r,A.aH(p==null?A.kJ(A.b6(C.hD,u,v,v,v),C.t,!0):A.pj(p,144,new B.bJV(u),!1,C.bH,A.wv(),!1,v,v,v),48,48),C.bc)
p=A.h(q.b,1,C.a2,v,v,D.c42,v,v,v)
x=A.b6(C.i6,u,v,v,14)
w=q.d
q=w>0?q.gPZ()+" \xb7 "+A.aK(w,!1):q.gPZ()
w=y.p
return new A.S(C.dm,A.aX(A.x(v,A.O(A.a([r,C.ae,A.a5(A.A(A.a([p,C.im,A.O(A.a([x,C.e6,new A.de(1,C.b8,A.h(q,1,C.a2,v,v,A.aI(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bp,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b6(C.i8,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.x),v,v,v,C.dY,v,v,v),new B.bJW(d),v),v)}}
B.aGk.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.Sq(A.a([new A.io("+ Nova despesa",this.f,!0,j)],y.p),C.fq,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBc
x=new B.bX6(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.H)(i),++t){s=i[t]
r=s.a
q=C.f.d7(r,":pay:")
r=C.f.b4(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gL(r.split(" \xb7 "))
n=A.aK(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.dbL(m)
v.push(new W.DX(new A.cq(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bX2(d,e,s,q),A.HQ(m)===C.fj,j))
continue}p=r?new B.bX3(d):new B.bX4(x,s)
v.push(new B.Xx(s,p,r||s.w?j:new B.bX5(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xx&&v[k-1] instanceof B.Xx)u.push(C.iI)
u.push(v[k])
C.e.n(i,u)}i.push(D.aB1)
return A.A(i,C.F,C.h,C.l)}}
B.Xx.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aK(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dbL(w))
v=C.e.a1(v," \xb7 ")
if(u)u=D.aH8
else{u=this.e
u=u!=null?new A.oh("Marcar pago",u,!0,null):D.aHf}return A.jY(!1,!1,null,this.d,v,x.c,u)}}
B.aCb.prototype={}
B.NL.prototype={
R(){var x=$.aa()
return new B.abz(new A.aE(C.ak,x),new A.aE(C.ak,x))}}
B.abz.prototype={
ac(){var x=this
x.ao()
x.d.am(0,new B.bHA(x))
x.e.am(0,new B.bHB(x))},
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
gai2(){var x=C.f.B(this.e.a.a)
x=A.aV(x," ","")
return A.eV(A.aV(x,",","."))},
aSV(){var x,w,v,u,t=this,s=t.gai2()
t.p(new B.bHn(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.ae(new B.aCb(x,s,u,t.r,v))},
asB(d,e,f,g,h){var x=null,w=h?C.hq:x,v=y.p,u=A.a5(A.A(A.a([A.h(d,x,x,x,x,C.aa,x,x,x),C.aV,A.h(e,x,x,x,x,C.N,x,x,x)],v),C.G,C.h,C.l),1),t=f?C.bn:x,s=f?x:A.bA(C.kp,1.5),r=f?U.vB:x
return A.ba(x,!0,x,A.cL(C.by,A.x(x,A.O(A.a([u,A.x(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.au),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.d2,new A.I(x,x,w,x,x,x,C.x),x,x,x,C.hw,x,x,x),C.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aJ),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a4,x)},
bjD(d,e,f,g){return this.asB(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gai2()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bHx()
t=y.w
s=A.aO(d,k,t).w
r=y.p
q=A.a([D.ccG],r)
q.push(A.h(l.a.c,k,k,k,k,C.N,k,k,k))
q=A.O(A.a([A.a5(A.A(q,C.G,C.h,C.l),1),A.ba(k,!0,k,A.cL(k,A.x(k,C.kD,C.r,k,k,C.cc,k,44,k,k,k,k,44),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHs(d),k,k,k,k,k,k,!1,C.aJ),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a4,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.chg,A.O(A.a([Y.d4Y(A.cs(k,C.a7,!1,k,!0,C.y,k,A.ct(),l.e,k,k,k,k,k,2,D.aF6,C.W,!0,k,!0,k,!1,k,C.aC,k,k,k,k,C.fF,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.an,k,k,k,k,k,k,k,k,k,k,k,D.aaA,!0,C.dG,k,C.b_,k,k,k,k)),C.bk,D.ccJ],r),C.eT,C.bS,C.l,0,C.aK)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cXJ(v)+" no teto":"Passa o teto em "+B.cXJ(-v)
o.push(A.h(m,k,k,k,k,A.aI(k,k,n?C.U:C.bZ,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.ceZ)
p=A.x(k,A.A(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a6,k,k,p,k,k,C.x),k,k,k,C.bg,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aN,k,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bA(C.bZ,1.5):k
n=A.a([p,C.a0,new A.S(C.dm,o,k),A.x(C.bf,A.cs(k,C.a7,!1,k,!0,C.y,k,A.ct(),x,k,k,k,k,k,2,D.aEL,C.W,!0,k,!0,k,!1,k,C.aC,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.an,k,k,k,k,k,k,k,k,k,k,k,C.fe,!0,C.av,k,C.he,k,k,k,k),C.r,k,k,new A.I(C.a6,k,m,n,k,k,C.x),k,52,k,C.fT,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bKL)
n.push(C.a0)
n.push(new X.a1q(l.r,new B.bHt(l),k))
n.push(C.a0)
n.push(new A.S(C.dm,A.h("ESTADO",k,k,k,k,C.aN,k,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bjD("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHu(l)),l.asB("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHv(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.az(p)))
m=l.f
m.toString
m=A.q(w.$1(A.ao(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.ax(w)}o.push(A.ba(k,!0,k,A.cL(C.by,A.aH(A.O(A.a([D.azW,A.h(w,k,k,k,k,C.cf,k,k,k),C.e6,C.lM],r),C.v,C.h,C.l,0,k),56,k),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHw(l,d),k,k,k,k,k,k,!1,C.aJ),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a4,k))}n.push(A.x(k,A.A(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a6,k,k,x,k,k,C.x),k,k,k,C.cz,k,k,k))
n.push(C.a0)
n.push(D.cci)
x=A.dU(A.A(n,C.F,C.h,C.l),C.y,k,C.eg,k,C.a1)
t=A.aO(d,C.b5,t).w
w=A.cj(u?C.z:C.z.cd(0.35),k,k,C.t,k,k,C.ac,k,k,C.eK)
return new A.S(new A.a3(0,0,0,s.f.d),A.A(A.a([new A.S(C.jD,q,k),new A.de(1,C.b8,x,k),new A.S(new A.a3(20,16,20,20+t.r.d),A.aH(A.bE(A.h(u?"Guardar \xb7 "+B.cXJ(j):"Guardar",k,k,k,k,k,k,k,k),l.gaSU(),w),52,k),k)],r),C.F,C.h,C.J),k)}}
B.X9.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CG(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eS(new A.a6(j,new B.bN9(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.am9(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNa(l),w),w.i("B.E"))
C.e.cv(v,new B.bNb())
j=y.T
u=e.G(A.cI($.cr(),new B.bNc(),y.v,j),j)
t=B.dgd(l.e.c)
if(u==null)s=K.Fs
else{j=e.G($.aVY().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.Fs
j=J.da(j,new B.bNd(t))
s=A.U(j,j.$ti.i("B.E"))}j=A.aO(d,k,y.w).w
w=A.bM(A.x(k,k,C.r,k,k,new A.I(C.bE,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.au(d).ok.r,k,k,k)
q=A.a5(new B.ai9("Gasto",A.aK(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a0,r,C.aB,A.O(A.a([q,C.ag,A.a5(A.aX(new B.ai9("Teto \xb7 tocar para mudar",p===0?"Definir":A.aK(p,!1),k),new B.bNe(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bh,A.h("Contratado na app",k,k,k,k,A.au(d).ok.w,k,k,k),C.Q],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aD6(s[n],k))
C.e.n(p,w)}p.push(C.bh)
p.push(A.h("Despesas",k,k,k,k,A.au(d).ok.w,k,k,k))
p.push(C.Q)
w=v.length
if(w===0)p.push(D.bL5)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.hf,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aW(C.j.k(A.az(q)),2,"0")+"/"+C.f.aW(C.j.k(A.ao(q)),2,"0")+"/"+A.ax(q),k,k,k,k,k,k,k,k)
p.push(A.jo(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aK(m.f,!1),k,k,k,k,D.c6c,k,k,k),C.af,new R.Df(m.w,new B.bNf(e,m),k,$.at,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.Jh,k)],o),C.v,C.h,C.J,0,k),k))}return A.bD(!0,new A.e6(new A.aR(0,1/0,0,j.a.b*0.8),A.d_(p,k,O.D1,k,k,!1,C.a1,!0),k),k,C.Z,!0)}}
B.ai9.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.A(A.a([A.h(this.c,x,x,x,x,C.bb,x,x,x),C.at,A.h(this.d,x,x,x,x,P.aam,x,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.I(C.a6,x,x,w,x,x,C.x),x,x,x,C.cI,x,x,x)}}
B.aCg.prototype={
bc(d,e){var x,w=y.t,v=e.G(A.cI($.cr(),new B.bIx(),y.v,w),w),u=e.G($.d0z(),y.o)
w=e.G($.uy(),y.l)
x=w.gv(w)
return A.hC(u,new B.bIy(this,new B.bID(x==null?C.f8:x),v),new B.bIz(e),new B.bIA(),!1,!0,!1)}}
B.anx.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.at,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.ft
s=new A.b2(999,999)
r=new A.bf(o.cd(0.25),1,C.aj,-1)
q=A.b6(C.i6,o,p,p,13)
t=A.x(p,A.O(A.a([q,M.yT,new A.de(1,C.b8,A.h(u,1,C.a2,p,p,new A.P(!0,o,p,p,p,p,14,C.db,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b6(C.i8,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afE,new A.I(t,p,new A.dN(r,r,r,r),new A.ci(s,s,s,s),p,p,C.x),p,p,p,D.aul,p,p,p)
m.push(new A.jt(new A.n5(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a4,p,p,p,p),!1,!1,p,!1,!1,new A.hw(t,new B.aYJ(d),p,p),p))}return A.e0(C.be,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["y(i2)","T(T,i2)","v(i2,i2)","T(T,DA)","zX()","F<~>(c?)","F<~>()","NL(N)","y(DA)","F<lQ>()","X9(N)","~(i2)","~()","y(no)","y(rN)","i2(a4<c,@>)","DK()"])
B.cGH.prototype={
$1(d){return this.aFr(d)},
aFr(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.G(A.cI($.cr(),new B.cGD(),y.v,f),f)
f=J.a7(e)
if(f.gZ(e)){v=D.bzv
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.t();)u.push(t.gE(t).a)
t=$.Q()
s=t.b
s===$&&A.b()
r=y.G
q=s.P("budgets").aj(0,"wedding_id, total").dN("wedding_id",u).b6(new B.cGE(),r)
p=t.b.P("budget_categories").aj(0,"wedding_id, amount").dN("wedding_id",u).b6(new B.cGF(),r)
o=t.b.P("expenses").aj(0,"wedding_id, amount, paid").dN("wedding_id",u).b6(new B.cGG(),r)
r=y.N
u=y.i
t=A.E(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bh(a3,s),m=A.u(n),n=new A.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E")
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
case 6:n=d.bh(a3,s),m=A.u(n),n=new A.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.Z(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=A.aG(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=A.E(r,u)
d=J
x=9
return A.d(o,$async$$1)
case 9:u=d.bh(a3,s),s=A.u(u),u=new A.ak(u,u.gA(u),s.i("ak<V.E>")),s=s.i("V.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.Z(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=A.aG(n.h(r,"amount"))
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
u.push(new A.aMV([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1284}
B.cGD.prototype={
$1(d){return d.c},
$S:150}
B.cGE.prototype={
$1(d){return d},
$S:30}
B.cGF.prototype={
$1(d){return d},
$S:30}
B.cGG.prototype={
$1(d){return d},
$S:30}
B.b3K.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5n.prototype={
$1(d){return d.w},
$S:z+0}
B.b5o.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5k.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.b5l.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b5m.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKA.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKB.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bKS.prototype={
$0(){return this.a.gS().a0(0,$.CG().gaX(),y.x).ZP(0).e4(new B.bKR())},
$S:1}
B.bKR.prototype={
$1(d){},
$S:11}
B.bKw.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKy.prototype={
$1(d){return A.CC(C.k.a9(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKz(),null)+" \u20ac"},
$S:112}
B.bKz.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:41}
B.bKx.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a1(v," \xb7 ")
u=x&&u>0?u:null
return new B.NL(v,u,w.d,null)},
$S:z+7}
B.bKG.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bKH.prototype={
$1(d){return d.x!==C.eQ&&d.b===this.a},
$S:60}
B.bKQ.prototype={
$2(d,e){return A.jd(d,this.a.ld(e))},
$1(d){return this.$2(d,null)},
$S:1287}
B.bKI.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKJ.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bKK.prototype={
$0(){return this.a.IK(this.b.a)},
$S:0}
B.bKL.prototype={
$0(){var x=this.a
return x.p(new B.bKF(x))},
$S:0}
B.bKF.prototype={
$0(){return this.a.w=D.Jf},
$S:0}
B.bKM.prototype={
$0(){var x=this.a
return x.p(new B.bKE(x))},
$S:0}
B.bKE.prototype={
$0(){return this.a.w=D.abT},
$S:0}
B.bKN.prototype={
$0(){var x=this.a
return x.p(new B.bKD(x))},
$S:0}
B.bKD.prototype={
$0(){return this.a.w=D.abS},
$S:0}
B.bKO.prototype={
$0(){var x=this.a
return x.p(new B.bKC(x))},
$S:0}
B.bKC.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bKP.prototype={
$0(){return B.Cv(this.a.gS().a0(0,$.cr(),y.v).b.a)},
$S:z+9}
B.cDe.prototype={
$1(d){var x=null,w=this.b
return new A.eR(A.h(this.a,x,x,x,x,x,x,x,x),A.cs(x,C.a7,!0,x,!0,C.y,x,A.ct(),w,x,x,x,x,x,2,D.aFj,C.W,!0,x,!0,x,!1,x,C.aC,x,x,x,x,C.fF,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.an,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.av,x,C.b_,x,x,x,x),A.a([A.cx(C.cT,x,x,new B.cDc(d),x,x),A.bE(C.dz,new B.cDd(d,w),x)],y.p),x)},
$S:19}
B.cDc.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.cDd.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aV(w," ","")
return x.ae(A.eV(A.aV(w,",",".")))},
$S:0}
B.cDn.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bo(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bo(2100,1,1,0,0):x)},
$S:z+2}
B.bN5.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bN7.prototype={
$0(){return A.bW(null,new B.bN8(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bN8.prototype={
$1(d){return new B.X9(this.a.e.a,null)},
$S:z+10}
B.bN6.prototype={
$0(){return B.akK(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bJW.prototype={
$0(){var x=this.a
A.am(x,!1).bp()
A.ah(x).av("/bookings",null,y.X)},
$S:0}
B.bJV.prototype={
$3(d,e,f){return A.kJ(A.b6(C.hD,this.a,null,null,null),C.t,!0)},
$S:102}
B.bX6.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.am9().gaX(),y.h).OL(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a2(A.c0(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bX2.prototype={
$0(){var x=this
return A.rE(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bX3.prototype={
$0(){return A.ah(this.a).av("/bookings",null,y.X)},
$S:0}
B.bX4.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bX5.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHA.prototype={
$0(){return this.a.p(new B.bHz())},
$S:0}
B.bHz.prototype={
$0(){},
$S:0}
B.bHB.prototype={
$0(){return this.a.p(new B.bHy())},
$S:0}
B.bHy.prototype={
$0(){},
$S:0}
B.bHm.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:41}
B.bHn.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHx.prototype={
$1(d){return C.f.aW(C.j.k(d),2,"0")},
$S:36}
B.bHs.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.bHt.prototype={
$1(d){var x=this.a
return x.p(new B.bHr(x,d))},
$S:130}
B.bHr.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHu.prototype={
$0(){var x=this.a
return x.p(new B.bHq(x))},
$S:0}
B.bHq.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHv.prototype={
$0(){var x=this.a
return x.p(new B.bHp(x))},
$S:0}
B.bHp.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHw.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(T.alC(v.b,A.bo(A.ax(t)-1,1,1,0,0),r,A.bo(A.ax(t)+5,1,1,0,0)),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHo(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHo.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bN9.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNa.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNb.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bo(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bo(2100,1,1,0,0):x)},
$S:z+2}
B.bNc.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNd.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bNe.prototype={
$0(){var x=this.c
return B.akK(this.a,this.b,x.a,x.d)},
$S:0}
B.bNf.prototype={
$1(d){return this.a.a0(0,$.am9().gaX(),y.h).OL(this.b.a)},
$S:151}
B.bIx.prototype={
$1(d){return d.c},
$S:150}
B.bID.prototype={
$2(d,e){return A.jd(d,this.a.ld(e))},
$S:42}
B.bIA.prototype={
$0(){return D.bLK},
$S:87}
B.bIz.prototype={
$2(d,e){return A.Sq(A.a([new A.io("Tentar outra vez",new B.bIq(this.a),!1,null)],y.p),C.fq,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1288}
B.bIq.prototype={
$0(){return this.a.ak($.d0z())},
$S:0}
B.bIy.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIB(g),e=new B.bIC(g,this.b),d=J.c8(a4),a0=d.cW(a4,0,new B.bIr()),a1=d.cW(a4,0,new B.bIs(f)),a2=d.cW(a4,0,new B.bIt(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ap(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C1(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aK(a1,!1)
w=a0>0
v=w?"de "+A.aK(a0,!1):"gastos"
u=w?C.k.ah(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aM(a1/a0*100)+"% dos tetos":""
x=A.vg(i,""+t+" "+r+w,"Todos os eventos",C.hI,u,v,x)
v=y.p
u=A.a([new G.Sr(A.a([new G.xm("Gasto",A.aK(a1,!1),h),new G.xm("Por pagar",A.aK(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.ey(a4,0,y.A),r=J.ap(t.a),q=t.b,t=new A.c3(r,q,A.u(t).i("c3<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.a_(q+n,r.gE(r)):A.al(A.c5())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iI)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a2,i,i,C.aa,i,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aK(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aK(j[3]+e.$1(j[0]),!1))}n=A.A(A.a([n,C.aV,A.h(C.e.a1(k," \xb7 "),i,i,i,i,C.N,i,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.hw(A.x(i,A.O(A.a([new A.bI(1,C.as,n,i),C.ag,A.h(A.aK(k[1]+f.$1(k[0]),!1),i,i,i,i,C.aa,i,i,i),C.bk,C.lM],v),C.v,C.h,C.l,0,i),C.r,C.ao,C.d2,i,i,i,i,C.cm,i,i,i),new B.bIu(o,g),i,i))
C.e.n(w,l)}return A.A(A.a([x,new A.dR("N\xfameros",i,u,16,i),new A.dR("Por evento \xb7 "+d,i,w,16,i),D.aB3],v),C.F,C.h,C.l)},
$S:1289}
B.bIB.prototype={
$1(d){return J.da(this.a.e,new B.bIo(d)).cW(0,0,new B.bIp())},
$S:181}
B.bIo.prototype={
$1(d){return d.b===this.a&&d.x!==C.eQ},
$S:60}
B.bIp.prototype={
$2(d,e){return d+e.w},
$S:300}
B.bIC.prototype={
$1(d){return J.da(this.a.e,new B.bIv(d)).cW(0,0,new B.bIw(this.b))},
$S:181}
B.bIv.prototype={
$1(d){return d.b===this.a&&d.x!==C.eQ},
$S:60}
B.bIw.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:300}
B.bIr.prototype={
$2(d,e){return d+e.a[2]},
$S:232}
B.bIs.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:232}
B.bIt.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:232}
B.bIu.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYJ.prototype={
$0(){return A.ah(this.a).av("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dIT","cYB",15)
w(B,"dIS","dpL",16)
v(B.DK.prototype,"giI","d4",4)
var t
u(t=B.abV.prototype,"gapQ","TV",5)
v(t,"gaRI","Qq",6)
v(B.abz.prototype,"gaSU","aSV",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cGH,B.cGD,B.cGE,B.cGF,B.cGG,B.b5n,B.b5o,B.b5k,B.b5m,B.bKR,B.bKy,B.bKz,B.bKx,B.bKG,B.bKH,B.bKQ,B.bKJ,B.cDe,B.bN5,B.bN8,B.bJV,B.bX6,B.bHm,B.bHx,B.bHt,B.bN9,B.bNa,B.bNc,B.bNd,B.bNf,B.bIx,B.bIy,B.bIB,B.bIo,B.bIC,B.bIv])
x(A.J,[B.DA,B.b3J,B.zX,B.Mm,B.a7T,B.aCb])
x(A.cK,[B.b3K,B.bKw,B.bKI,B.cDn,B.bNb,B.bID,B.bIz,B.bIp,B.bIw,B.bIr,B.bIs,B.bIt])
w(B.DK,A.fe)
x(A.bP,[B.b5l,B.bKA,B.bKB,B.bKS,B.bKK,B.bKL,B.bKF,B.bKM,B.bKE,B.bKN,B.bKD,B.bKO,B.bKC,B.bKP,B.cDc,B.cDd,B.bN7,B.bN6,B.bJW,B.bX2,B.bX3,B.bX4,B.bX5,B.bHA,B.bHz,B.bHB,B.bHy,B.bHn,B.bHs,B.bHr,B.bHu,B.bHq,B.bHv,B.bHp,B.bHw,B.bHo,B.bNe,B.bIA,B.bIq,B.bIu,B.aYJ])
w(B.abU,A.eW)
w(B.a0Q,A.dz)
w(B.abV,A.du)
x(A.L,[B.aPH,B.aDz,B.aD6,B.Xx,B.ai9,B.anx])
x(A.et,[B.aDA,B.aGk,B.X9,B.aCg])
w(B.NL,A.G)
w(B.abz,A.Y)})()
A.bn(b.typeUniverse,JSON.parse('{"DK":{"fe":["zX"]},"a0Q":{"G":[],"e":[],"f":[]},"NL":{"G":[],"e":[],"f":[]},"X9":{"G":[],"e":[],"f":[]},"abV":{"Y":["a0Q"]},"aPH":{"L":[],"e":[],"f":[]},"aDz":{"L":[],"e":[],"f":[]},"aDA":{"G":[],"e":[],"f":[]},"aD6":{"L":[],"e":[],"f":[]},"aGk":{"G":[],"e":[],"f":[]},"Xx":{"L":[],"e":[],"f":[]},"abz":{"Y":["NL"]},"ai9":{"L":[],"e":[],"f":[]},"aCg":{"G":[],"e":[],"f":[]},"anx":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ay<fb>"),k:x("ay<t<rN>>"),u:x("ay<t<fM>>"),o:x("ay<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("ay<a4<c,t<c>>>"),x:x("zA"),b:x("uM"),d:x("rS"),Z:x("oe"),v:x("ed"),_:x("i2"),h:x("DK"),g:x("zX"),D:x("r<DA>"),r:x("r<i2>"),Q:x("r<xm>"),F:x("r<ek>"),Y:x("r<a4<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7T>"),c:x("r<Mm>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fM>"),t:x("t<fm>"),G:x("t<a4<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a4<c,@>"),w:x("dg"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lQ"),N:x("c"),B:x("aCb"),q:x("dp"),i:x("T"),z:x("@"),S:x("v"),X:x("J?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afE=new A.aR(0,1/0,32,1/0)
D.aul=new A.a3(8,5,6,5)
D.c8m=new A.D("Prazo",null,C.aa,null,null,null,null,null,null,null,null)
D.azW=new A.bI(1,C.as,D.c8m,null)
D.bzc=x([],y.r)
D.aA2=new B.zX(!1,D.bzc)
D.aB1=new A.kO("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aB3=new A.kO("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBc=new A.kO("Sem pagamentos nesta vista.",8,null)
D.aEL=new A.dA(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bt,null,null,C.bt,C.bt,!0,null,null,null,null)
D.aF6=new A.dA(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bt,null,null,C.bt,C.bt,!0,null,null,null,null)
D.aFj=new A.dA(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aH8=new A.ev("Pago",C.dd,null)
D.aHf=new A.ev("Por pagar",C.hG,null)
D.aHm=new A.md("Or\xe7amento","Todos os teus eventos",null)
D.aHs=new A.md("Or\xe7amento",null,null)
D.byp=x(["catering"],y.s)
D.bzu=x([],y.D)
D.bzv=x([],y.n)
D.bzU=x(["flowers_decor"],y.s)
D.bBr=x(["music_dj","bands_musicians"],y.s)
D.bC1=x(["photography"],y.s)
D.bDe=x(["venue"],y.s)
D.c9i=new A.D("A despesa precisa de um t\xedtulo",null,C.mv,null,null,null,null,null,null,null,null)
D.bKL=new A.S(V.NQ,D.c9i,null)
D.aEz=new A.th("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kB,null)
D.bL5=new A.S(C.fS,D.aEz,null)
D.bLK=new A.S(Q.uZ,C.eD,null)
D.bYg=new A.vT(!1,6,!0,null)
D.c42=new A.P(!0,C.z,null,null,null,null,14,C.db,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6c=new A.P(!0,null,null,null,null,null,null,C.db,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaA=new A.P(!0,C.z,null,null,null,null,40,C.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cci=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c2,null,null,null,null,null,null,null,null)
D.ccG=new A.D("Nova despesa",null,C.bj,null,null,null,null,null,null,null,null)
D.ccJ=new A.D("\u20ac",null,D.aaA,null,null,null,null,null,null,null,null)
D.ceZ=new A.D("Indica um valor v\xe1lido",null,C.mv,null,null,null,null,null,null,null,null)
D.chg=new A.D("VALOR",null,C.aN,null,null,null,null,null,null,null,null)
D.Jf=new B.abU(0,"all")
D.abS=new B.abU(1,"paid")
D.abT=new B.abU(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWc","d0z",()=>C.bR.$1$1(new B.cGH(),y.m))
x($,"dX1","am9",()=>A.mX(B.dIS(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["jPF9UJ4cblyfb4r3hrfkziEUS7Y="]=a.current})($__dart_deferred_initializers__);