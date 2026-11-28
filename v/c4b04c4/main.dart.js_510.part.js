((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,Q,E,R,S,F,G,T,H,K,U,V,W,I,X,B={cHg:function cHg(){},cHc:function cHc(){},cHd:function cHd(){},cHe:function cHe(){},cHf:function cHf(){},
dIy(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DC(x[v]))
return new B.b40(d.b,u)},
DC:function DC(d){this.a=d},
b40:function b40(d,e){this.a=d
this.b=e},
b41:function b41(){},
cZ6(d){var x="category",w="due_date",v=J.a7(d),u=A.a0(v.h(d,"id")),t=A.a0(v.h(d,"wedding_id")),s=A.a0(v.h(d,"title")),r=B.dER(B.ddM(A.C(v.h(d,x)))),q=B.ddM(A.C(v.h(d,x))),p=A.ds(v.h(d,"amount")),o=v.h(d,w)==null?null:A.dd(A.a0(v.h(d,w)))
v=A.dY(v.h(d,"paid"))
return new H.i3(u,t,s,r,q,p,o,v===!0)},
ddM(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dER(d){var x
A:{if("venue"===d){x=E.yh
break A}if("catering"===d){x=E.yd
break A}if("photography"===d){x=E.ye
break A}if("music_dj"===d||"bands_musicians"===d){x=E.yf
break A}if("flowers_decor"===d){x=E.yg
break A}x=null
break A}return x},
dqj(){return new B.DM()},
A3:function A3(d,e){this.a=d
this.b=e},
b5F:function b5F(){},
b5G:function b5G(){},
DM:function DM(){this.b=this.x=null},
b5C:function b5C(){},
b5D:function b5D(d,e){this.a=d
this.b=e},
b5E:function b5E(d){this.a=d},
Cz(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cz=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.al1(),$async$Cz)
case 3:u=$.R()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").al(0,"partner_name_1, partner_name_2").V("id",d).cn(),$async$Cz)
case 4:s=f
x=5
return A.d(u.b.P("bookings").al(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cT(0,"event_date",!1),$async$Cz)
case 5:r=f
u=A.a([],y.s)
for(t=J.ao(r);t.t();)u.push(A.a0(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.R().b
t===$&&A.b()
x=9
return A.d(t.P("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").dN("booking_id",u).tL(0,"created_at"),$async$Cz)
case 9:q=f
case 7:u=$.R()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").al(0,"title, category, amount, due_date, paid").V("wedding_id",d).tL(0,"due_date"),$async$Cz)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").al(0,"name, amount").V("wedding_id",d).tL(0,"position"),$async$Cz)
case 11:o=f
x=12
return A.d(u.b.P("budgets").al(0,"total").V("wedding_id",d).cn(),$async$Cz)
case 12:n=f
m=F.cYS(F.cEp(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ao(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cA(j==null?"":j)
i=k.h(l,"category")
i=J.cA(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.eY(A.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d2(A.q(g))
g=g==null?null:g.dP()}u.push(new B.Mr(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ao(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cA(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eY(A.q(k))
if(k==null)k=0}t.push(new B.a7Q(i,k))}l=n==null?null:F.cZp(J.i(n,"total"))
v=new F.lM(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cz,w)},
Mr:function Mr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7Q:function a7Q(d,e){this.a=d
this.b=e},
dnC(){return new B.a0R(null)},
aUt(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUt=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.fU(!0,new B.cDP(e,new A.aF(new A.bE(u,C.aH,C.ay),$.aa())),d,y.i),$async$aUt)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUt,w)},
akV(d,e,f,g){return B.dEE(d,e,f,g)},
dEE(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akV=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUt(d,"Teto para "+f,g),$async$akV)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a1(0,$.CK().gaX(),y.x).P4(f,r),$async$akV)
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
return A.m($async$akV,w)},
dbP(d){var x=A.U(d,y._)
C.e.cA(x,new B.cDY())
return x},
dci(d){var x=C.f.aY(C.j.k(A.aA(d)),2,"0"),w=C.f.aY(C.j.k(A.ar(d)),2,"0"),v=A.az(d)===A.az(new A.ab(Date.now(),0,!1))?"":"/"+A.az(d)
return x+"/"+w+v},
cYe(d){var x,w,v,u
if(d===C.k.fD(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aY(w,".",",")}v=x.split(",")
u=A.CG(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHy(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abR:function abR(d,e){this.a=d
this.b=e},
a0R:function a0R(d){this.a=d},
abS:function abS(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKJ:function bKJ(d){this.a=d},
bKK:function bKK(d){this.a=d},
bL0:function bL0(d){this.a=d},
bL_:function bL_(){},
bKF:function bKF(){},
bKH:function bKH(){},
bKI:function bKI(){},
bKG:function bKG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKP:function bKP(){},
bKQ:function bKQ(d){this.a=d},
bKZ:function bKZ(d){this.a=d},
bKR:function bKR(){},
bKS:function bKS(){},
bKT:function bKT(d,e){this.a=d
this.b=e},
bKU:function bKU(d){this.a=d},
bKO:function bKO(d){this.a=d},
bKV:function bKV(d){this.a=d},
bKN:function bKN(d){this.a=d},
bKW:function bKW(d){this.a=d},
bKM:function bKM(d){this.a=d},
bKX:function bKX(d){this.a=d},
bKL:function bKL(d){this.a=d},
bKY:function bKY(d){this.a=d},
cDP:function cDP(d,e){this.a=d
this.b=e},
cDN:function cDN(d){this.a=d},
cDO:function cDO(d,e){this.a=d
this.b=e},
cDY:function cDY(){},
aQ3:function aQ3(d,e,f){this.c=d
this.d=e
this.a=f},
aDR:function aDR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDS:function aDS(d,e){this.e=d
this.a=e},
bNc:function bNc(){},
bNe:function bNe(d,e){this.a=d
this.b=e},
bNf:function bNf(d){this.a=d},
bNd:function bNd(d,e,f){this.a=d
this.b=e
this.c=f},
aDo:function aDo(d,e){this.c=d
this.a=e},
bK7:function bK7(d){this.a=d},
bK6:function bK6(d){this.a=d},
aGE:function aGE(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bXr:function bXr(d,e){this.a=d
this.b=e},
bXn:function bXn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXo:function bXo(d){this.a=d},
bXp:function bXp(d,e){this.a=d
this.b=e},
bXq:function bXq(d,e){this.a=d
this.b=e},
XE:function XE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCt:function aCt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NQ:function NQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abw:function abw(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bHM:function bHM(d){this.a=d},
bHL:function bHL(){},
bHN:function bHN(d){this.a=d},
bHK:function bHK(){},
bHy:function bHy(){},
bHz:function bHz(d){this.a=d},
bHJ:function bHJ(){},
bHE:function bHE(d){this.a=d},
bHF:function bHF(d){this.a=d},
bHD:function bHD(d,e){this.a=d
this.b=e},
bHG:function bHG(d){this.a=d},
bHC:function bHC(d){this.a=d},
bHH:function bHH(d){this.a=d},
bHB:function bHB(d){this.a=d},
bHI:function bHI(d,e){this.a=d
this.b=e},
bHA:function bHA(d,e){this.a=d
this.b=e},
Xf:function Xf(d,e){this.e=d
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
ai9:function ai9(d,e,f){this.c=d
this.d=e
this.a=f},
aCy:function aCy(d,e,f){this.e=d
this.f=e
this.a=f},
bIJ:function bIJ(){},
bIP:function bIP(d){this.a=d},
bIM:function bIM(){},
bIL:function bIL(d){this.a=d},
bIC:function bIC(d){this.a=d},
bIK:function bIK(d,e,f){this.a=d
this.b=e
this.c=f},
bIN:function bIN(d){this.a=d},
bIA:function bIA(d){this.a=d},
bIB:function bIB(){},
bIO:function bIO(d,e){this.a=d
this.b=e},
bIH:function bIH(d){this.a=d},
bII:function bII(d){this.a=d},
bID:function bID(){},
bIE:function bIE(d){this.a=d},
bIF:function bIF(d){this.a=d},
bIG:function bIG(d,e){this.a=d
this.b=e},
anL:function anL(d,e){this.c=d
this.a=e},
aZ1:function aZ1(d){this.a=d},
dgN(d){var x
switch(d){case E.yh:x=D.bEd
break
case E.yd:x=D.bzn
break
case E.ye:x=D.bD0
break
case E.yf:x=D.bCr
break
case E.yg:x=D.bAT
break
default:x=C.a8
break}return x}},D,L,Y
J=c[1]
A=c[0]
C=c[2]
M=c[219]
N=c[188]
O=c[205]
P=c[218]
Q=c[221]
E=c[222]
R=c[160]
S=c[217]
F=c[133]
G=c[79]
T=c[159]
H=c[77]
K=c[216]
U=c[199]
V=c[220]
W=c[131]
I=c[215]
X=c[80]
B=a.updateHolder(c[53],B)
D=c[214]
L=c[72]
Y=c[78]
B.DC.prototype={
gao(d){return this.a.a}}
B.b40.prototype={
gq_(){return C.e.cZ(this.b,0,new B.b41())},
gaCA(){var x=this.a
return x===0?0:C.k.ag(this.gq_()/x,0,1)}}
B.A3.prototype={
gbAX(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5F(),w),w.i("B.E"))
return x},
gbBi(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5G(),w),w.i("B.E"))
return x},
axG(d,e){var x=e==null?this.a:e
return new B.A3(x,d==null?this.b:d)},
ip(d){return this.axG(null,d)},
axn(d){return this.axG(d,null)}}
B.DM.prototype={
d7(){var x=y.T,w=this.x=A.eU(this).H(A.cI($.cr(),new B.b5C(),y.v,x),x)
if(w!=null)A.jj(new B.b5D(this,w),y.H)
return D.aAX},
c_(d,e){return this.byn(0,e)},
byn(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ip(!0))
u=$.R().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").ck(0).V("wedding_id",e).cT(0,"created_at",!0),$async$c_)
case 2:v.sa4(0,new t.A3(s,r.d8(g,B.dJo(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$c_,w)},
VT(d){return this.bod(d)},
bod(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$VT=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.R().b
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
u.j(0,"due_date",t==null?null:C.e.gK(t.cg().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.da(0,u).ck(0).dR(0),$async$VT)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cZ6(s))
v.sa4(0,r.axn(u))
return A.l(null,w)}})
return A.m($async$VT,w)},
P1(d){return this.bDR(d)},
bDR(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$P1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lm(v.ga4(0).b,new B.b5E(d))
m=$.R().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bh(0,A.T(["paid",!n.w,"updated_at",new A.ab(Date.now(),0,!1).cg()],u,u)).V("id",d).ck(0).dR(0),$async$P1)
case 2:t=l.cZ6(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.axn(m))
return A.l(null,w)}})
return A.m($async$P1,w)}}
B.Mr.prototype={}
B.a7Q.prototype={
gao(d){return this.a}}
B.abR.prototype={
I(){return"_BudgetFilter."+this.b}}
B.a0R.prototype={
R(){return new B.abS(D.JC)}}
B.abS.prototype={
U6(d){return this.bdU(d)},
bdU(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$U6=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKJ(u))
x=1
break}u.p(new B.bKK(u))
t=u.gS()
s=$.cr()
r=t.a1(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a1(0,s.gaX(),y.Z).al(0,d),$async$U6)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$U6,w)},
ac(){this.au()
A.jj(new B.bL0(this),y.H)},
QG(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$QG=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.amo()
m=y.h
l=o.a1(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a1(0,$.CK(),y.b).b
s=t==null?null:t.b
r=C.e.cZ(o.a1(0,n,y.g).b,0,new B.bKF())
t=o.a1(0,$.cr(),y.v).b
q=t==null?null:t.gcC()
t=u.c
t.toString
x=3
return A.d(A.bZ(null,new B.bKG(q,s,new B.bKH(),r),!1,t,!0,!0,null,y.B),$async$QG)
case 3:p=e
if(p==null){x=1
break}o=o.a1(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.VT(new H.i3("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$QG,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.H($.CK(),y.b),a3=a1.H($.I_(),y.d),a4=a1.H($.amo(),y.g),a5=a2.b,a6=a5==null?e:B.dIy(a5,a3.b)
a5=A.j0(a1.H($.iZ(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iY
a5=y.T
w=a1.H(A.cI($.cr(),new B.bKP(),y.v,a5),a5)
if(f.y){a1=f.gaq8()
return A.cP(e,C.cY,A.ou(C.fe,40,A.a([C.h3,D.aIi,L.cVE(a1,e),new B.aCy(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.d5(x,new B.bKQ(w))
a1=a1.H($.uD(),y.l)
u=a1.gv(a1)
t=new B.bKZ(u==null?C.fb:u)
a1=y._
a5=A.U(a4.gbAX(),a1)
for(s=v.a,r=J.cb(s),q=r.gX(s),p=v.b,o=v.$ti.i("h9<1>"),n=new A.h9(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i3("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbBi(0),a1)
for(s=r.gX(s),o=new A.h9(s,p,o),p=y.r;o.t();){r=s.gE(s)
n=A.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new H.i3("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new H.i3("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dbP(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dbP(q)
break
default:a1=e}h=C.e.cZ(q,0,new B.bKR())
s=a6==null
if(s)g=D.bAs
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bKS(),p),p.i("B.E"))}if(s)a1=D.bZm
else{s=f.gaSg()
r=y.p
p=A.a([new A.pt(A.a([new A.qU(s,"Nova despesa",e)],r),e),D.aIo,L.cVE(f.gaq8(),w),new B.aQ3(a6,new B.bKT(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aM(a6.gq_(),!1)
n=a5.length
m=n===1?d:a0
l=A.aM(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.dU("N\xfameros",e,A.a([new G.Sy(A.a([new G.xp("Gasto",o,""+n+" "+m),new G.xp("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.m5(A.a([new A.el("Todos",l===D.JC,n+m,new B.bKU(f),e),new A.el("Pendentes",l===D.acH,m,new B.bKV(f),e),new A.el("Pagos",l===D.acG,n,new B.bKW(f),e)],y.F),4,!0,e),C.av],r))}o.push(new B.aGE(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.dU("Pagamentos",e,o,16,e))
a1=A.a([new A.kM(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDR(g,f.x,new B.bKX(f),e))
p.push(new A.dU("Categorias",e,a1,16,e))
p.push(new A.dU("Exportar",e,A.a([new F.DN("Gastos e parceiros",!1,new B.bKY(f),e)],r),16,e))
a1=A.ou(C.fe,40,p,e,!0,!1)}return A.cP(e,C.cY,a1,!0,e)},
IU(d){return this.aZh(d)},
aZh(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IU=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUt(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IU)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a1(0,$.CK().gaX(),y.x).a_O(r),$async$IU)
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
return A.m($async$IU,w)}}
B.aQ3.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gq_()>0?"Gastos "+A.aM(t.gq_(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vi(new A.ip("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hO,0,"por definir","\u2014")}x=C.k.aK(t.gaCA()*100)
w=s-t.gq_()<0?"Acima do teto":"Ainda tens"
v=A.aM(Math.abs(s-t.gq_()),!1)
s=A.aM(s,!1)
u=t.gaCA()
return A.aW(A.vi(I.a2y,"Gastos "+A.aM(t.gq_(),!1)+" \xb7 "+x+"% do teto",w,C.hO,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDR.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dM(s,0,A.eF(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDS(r[w],null))
q=A.a([A.fc(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.ip(u,v.e,!0,null))}return A.x(q,C.G,C.h,C.l,0,C.u)}}
B.aDS.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(A.cI($.cr(),new B.bNc(),y.v,m),m)
if(l==null)x=C.rD
else{m=e.H($.d13().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rD:m}m=A.a([],y.s)
for(w=B.dgN(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNe(this,d)
if(w)return A.jW(!1,!1,p,v,A.aM(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.oo("P\xf4r teto",new B.bNd(this,d,e),!0,p))
w=A.aM(o.b,!1)
u=A.aM(n,!1)
s=y.p
q=A.a([A.aI(new A.Tr(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aF,new B.anL(m,p)],s))
return A.jW(!1,!1,p,v,w+" de "+u,o.a,A.x(q,C.dk,C.h,C.K,0,C.u))}}
B.aDo.prototype={
u(d){var x,w,v=null,u=$.au,t=$.fy.cd(0.55),s=A.V(18),r=A.V(12),q=this.c,p=q.e
r=A.fW(r,A.aI(p==null?A.kI(A.b4(C.hJ,u,v,v,v),C.t,!0):A.po(p,144,new B.bK6(u),!1,C.bK,A.wz(),!1,v,v,v),48,48),C.ba)
p=A.h(q.b,1,C.a2,v,v,D.c58,v,v,v)
x=A.b4(C.ib,u,v,v,14)
w=q.d
q=w>0?q.gQf()+" \xb7 "+A.aM(w,!1):q.gQf()
w=y.p
return new A.Q(C.cn,A.aW(A.z(v,A.N(A.a([r,C.af,A.a4(A.x(A.a([p,C.iq,A.N(A.a([x,C.e7,new A.d9(1,C.b7,A.h(q,1,C.a2,v,v,A.aJ(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.br,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.w,C.h,C.l,0,v,v)],w),C.H,C.h,C.l,0,C.u),1),A.b4(C.id,u,v,v,v)],w),C.w,C.h,C.l,0,v,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.y),v,v,v,C.dY,v,v,v),new B.bK7(d),v),v)}}
B.aGE.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.Sx(A.a([new A.ip("+ Nova despesa",this.f,!0,j)],y.p),C.fu,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aC5
x=new B.bXr(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.H)(i),++t){s=i[t]
r=s.a
q=C.f.dh(r,":pay:")
r=C.f.b2(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gK(r.split(" \xb7 "))
n=A.aM(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.dci(m)
v.push(new W.E_(new A.cp(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bXn(d,e,s,q),A.HU(m)===C.fm,j))
continue}p=r?new B.bXo(d):new B.bXp(x,s)
v.push(new B.XE(s,p,r||s.w?j:new B.bXq(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XE&&v[k-1] instanceof B.XE)u.push(C.iN)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBV)
return A.x(i,C.G,C.h,C.l,0,C.u)}}
B.XE.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aM(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dci(w))
v=C.e.a0(v," \xb7 ")
if(u)u=D.aI4
else{u=this.e
u=u!=null?new A.oo("Marcar pago",u,!0,null):D.aIb}return A.jW(!1,!1,null,this.d,v,x.c,u)}}
B.aCt.prototype={}
B.NQ.prototype={
R(){var x=$.aa()
return new B.abw(new A.aF(C.al,x),new A.aF(C.al,x))}}
B.abw.prototype={
ac(){var x=this
x.au()
x.d.an(0,new B.bHM(x))
x.e.an(0,new B.bHN(x))},
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
gaip(){var x=C.f.C(this.e.a.a)
x=A.aY(x," ","")
return A.eY(A.aY(x,",","."))},
aTt(){var x,w,v,u,t=this,s=t.gaip()
t.p(new B.bHz(t))
x=C.f.C(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.ae(new B.aCt(x,s,u,t.r,v))},
asV(d,e,f,g,h){var x=null,w=h?C.hu:x,v=y.p,u=A.a4(A.x(A.a([A.h(d,x,x,x,x,C.ab,x,x,x),C.aW,A.h(e,x,x,x,x,C.N,x,x,x)],v),C.H,C.h,C.l,0,C.u),1),t=f?C.bo:x,s=f?x:A.bB(C.kB,1.5),r=f?U.vR:x
return A.b8(x,!0,x,A.cR(C.bN,A.z(x,A.N(A.a([u,A.z(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.aw),x,24,x,x,x,x,24)],v),C.w,C.h,C.l,0,x,x),C.r,x,C.d5,new A.I(x,x,w,x,x,x,C.y),x,x,x,C.hB,x,x,x),C.Y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aP),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bkl(d,e,f,g){return this.asV(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gaip()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.C(x.a.a).length!==0&&j>0
w=new B.bHJ()
t=y.w
s=A.ax(d,k,t).w
r=y.p
q=A.a([D.cdL],r)
q.push(A.h(l.a.c,k,k,k,k,C.N,k,k,k))
q=A.N(A.a([A.a4(A.x(q,C.H,C.h,C.l,0,C.u),1),A.b8(k,!0,k,A.cR(k,A.z(k,C.m2,C.r,k,k,C.cg,k,44,k,k,k,k,44),C.Y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHE(d),k,k,k,k,k,k,!1,C.aP),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.w,C.h,C.l,0,k,k)
p=A.V(22)
o=A.a([D.cih,A.N(A.a([Y.d5r(A.cs(k,C.a8,!1,k,!0,C.z,k,A.cu(),l.e,k,k,k,k,k,2,D.aG2,C.Y,!0,k,!0,k,!1,k,C.aD,k,k,k,k,C.fK,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.aq,k,k,k,k,k,k,k,k,k,k,k,D.ab7,!0,C.dF,k,C.b2,k,k,k,k)),C.bn,D.cdO],r),C.eT,C.bW,C.l,0,C.aM,k)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cYe(v)+" no teto":"Passa o teto em "+B.cYe(-v)
o.push(A.h(m,k,k,k,k,A.aJ(k,k,n?C.V:C.c1,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.cg_)
p=A.z(k,A.x(o,C.w,C.h,C.l,0,C.u),C.r,k,k,new A.I(C.a7,k,k,p,k,k,C.y),k,k,k,C.bh,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aJ,k,k,k)
n=A.V(26)
m=l.x&&C.f.C(x.a.a).length===0?A.bB(C.c1,1.5):k
n=A.a([p,C.a1,new A.Q(C.cn,o,k),A.z(C.bg,A.cs(k,C.a8,!1,k,!0,C.z,k,A.cu(),x,k,k,k,k,k,2,D.aFI,C.Y,!0,k,!0,k,!1,k,C.aD,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.aq,k,k,k,k,k,k,k,k,k,k,k,C.fh,!0,C.ar,k,C.hf,k,k,k,k),C.r,k,k,new A.I(C.a7,k,m,n,k,k,C.y),k,52,k,C.f9,k,k,k)],r)
if(l.x&&C.f.C(x.a.a).length===0)n.push(D.bLK)
n.push(C.a1)
n.push(new X.a1r(l.r,new B.bHF(l),k))
n.push(C.a1)
n.push(new A.Q(C.cn,A.h("ESTADO",k,k,k,k,C.aJ,k,k,k),k))
x=A.V(22)
p=l.w
o=!p
o=A.a([l.bkl("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHG(l)),l.asV("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHH(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.aA(p)))
m=l.f
m.toString
m=A.q(w.$1(A.ar(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.az(w)}o.push(A.b8(k,!0,k,A.cR(C.bN,A.aI(A.N(A.a([D.aAQ,A.h(w,k,k,k,k,C.ch,k,k,k),C.e7,C.m1],r),C.w,C.h,C.l,0,k,k),56,k),C.Y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHI(l,d),k,k,k,k,k,k,!1,C.aP),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.z(k,A.x(o,C.w,C.h,C.l,0,C.u),C.r,k,k,new A.I(C.a7,k,k,x,k,k,C.y),k,k,k,C.cK,k,k,k))
n.push(C.a1)
n.push(D.cdn)
x=A.dR(A.x(n,C.G,C.h,C.l,0,C.u),C.z,k,C.ei,k,k,C.a3)
t=A.ax(d,C.b4,t).w
w=A.cn(u?C.A:C.A.cd(0.35),k,k,C.t,k,k,C.ae,k,k,C.eK)
return new A.Q(new A.a2(0,0,0,s.f.d),A.x(A.a([new A.Q(C.jJ,q,k),new A.d9(1,C.b7,x,k),new A.Q(new A.a2(20,16,20,20+t.r.d),A.aI(A.bG(A.h(u?"Guardar \xb7 "+B.cYe(j):"Guardar",k,k,k,k,k,k,k,k),l.gaTs(),w),52,k),k)],r),C.G,C.h,C.K,0,C.u),k)}}
B.Xf.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.CK(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eO(new A.a6(j,new B.bNg(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.H($.amo(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNh(l),w),w.i("B.E"))
C.e.cA(v,new B.bNi())
j=y.T
u=e.H(A.cI($.cr(),new B.bNj(),y.v,j),j)
t=B.dgN(l.e.c)
if(u==null)s=K.FO
else{j=e.H($.aWh().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.FO
j=J.d5(j,new B.bNk(t))
s=A.U(j,j.$ti.i("B.E"))}j=A.ax(d,k,y.w).w
w=A.bN(A.z(k,k,C.r,k,k,new A.I(C.bF,k,k,A.V(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.as(d).ok.r,k,k,k)
q=A.a4(new B.ai9("Gasto",A.aM(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a1,r,C.aC,A.N(A.a([q,C.ah,A.a4(A.aW(new B.ai9("Teto \xb7 tocar para mudar",p===0?"Definir":A.aM(p,!1),k),new B.bNl(d,e,x),k),1)],o),C.w,C.h,C.l,0,k,k)],o)
if(s.length!==0){w=A.a([C.bj,A.h("Contratado na app",k,k,k,k,A.as(d).ok.w,k,k,k),C.S],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aDo(s[n],k))
C.e.n(p,w)}p.push(C.bj)
p.push(A.h("Despesas",k,k,k,k,A.as(d).ok.w,k,k,k))
p.push(C.S)
w=v.length
if(w===0)p.push(D.bM4)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.hh,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aY(C.j.k(A.aA(q)),2,"0")+"/"+C.f.aY(C.j.k(A.ar(q)),2,"0")+"/"+A.az(q),k,k,k,k,k,k,k,k)
p.push(A.jm(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.N(A.a([A.h(A.aM(m.f,!1),k,k,k,k,D.c7i,k,k,k),C.ag,new R.Dh(m.w,new B.bNm(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.JE,k)],o),C.w,C.h,C.K,0,k,k),k))}return A.bF(!0,new A.ee(new A.aQ(0,1/0,0,j.a.b*0.8),A.d0(p,k,O.Dl,k,k,!1,C.a3,!0),k),k,C.a_,!0)}}
B.ai9.prototype={
u(d){var x=null,w=A.V(16)
return A.z(x,A.x(A.a([A.h(this.c,x,x,x,x,C.bb,x,x,x),C.av,A.h(this.d,x,x,x,x,P.aaU,x,x,x)],y.p),C.H,C.h,C.l,0,C.u),C.r,x,x,new A.I(C.a7,x,x,w,x,x,C.y),x,x,x,C.cB,x,x,x)}}
B.aCy.prototype={
bg(d,e){var x,w=y.t,v=e.H(A.cI($.cr(),new B.bIJ(),y.v,w),w),u=e.H($.d12(),y.o)
w=e.H($.uD(),y.l)
x=w.gv(w)
return A.hq(u,new B.bIK(this,new B.bIP(x==null?C.fb:x),v),new B.bIL(e),new B.bIM(),!1,!0,!1)}}
B.anL.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.fy
s=new A.b2(999,999)
r=new A.bb(o.cd(0.25),1,C.ai,-1)
q=A.b4(C.ib,o,p,p,13)
t=A.z(p,A.N(A.a([q,M.z8,new A.d9(1,C.b7,A.h(u,1,C.a2,p,p,new A.P(!0,o,p,p,p,p,14,C.d1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b4(C.id,o,p,p,16)],n),C.w,C.h,C.K,0,p,p),C.r,p,D.agz,new A.I(t,p,new A.dN(r,r,r,r),new A.cd(s,s,s,s),p,p,C.y),p,p,p,D.avf,p,p,p)
m.push(new A.jq(new A.n4(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hz(t,new B.aZ1(d),p,p),p))}return A.e1(C.bf,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["y(i3)","S(S,i3)","v(i3,i3)","S(S,DC)","A3()","F<~>(c?)","F<~>()","NQ(O)","y(DC)","F<lM>()","Xf(O)","~(i3)","~()","y(nq)","y(rX)","i3(a5<c,@>)","DM()"])
B.cHg.prototype={
$1(d){return this.aFT(d)},
aFT(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(A.cI($.cr(),new B.cHc(),y.v,f),f)
f=J.a7(e)
if(f.gZ(e)){v=D.bAt
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.t();)u.push(t.gE(t).a)
t=$.R()
s=t.b
s===$&&A.b()
r=y.G
q=s.P("budgets").al(0,"wedding_id, total").dN("wedding_id",u).b5(new B.cHd(),r)
p=t.b.P("budget_categories").al(0,"wedding_id, amount").dN("wedding_id",u).b5(new B.cHe(),r)
o=t.b.P("expenses").al(0,"wedding_id, amount, paid").dN("wedding_id",u).b5(new B.cHf(),r)
r=y.N
u=y.i
t=A.E(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bh(a3,s),m=A.u(n),n=new A.al(n,n.gA(n),m.i("al<W.E>")),m=m.i("W.E")
case 4:if(!n.t()){x=5
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
t.j(0,A.a0(k.h(l,"wedding_id")),A.ds(k.h(l,"total")))
x=4
break
case 5:j=A.E(r,u)
d=J
x=6
return A.d(p,$async$$1)
case 6:n=d.bh(a3,s),m=A.u(n),n=new A.al(n,n.gA(n),m.i("al<W.E>")),m=m.i("W.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.a0(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=A.aH(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=A.E(r,u)
d=J
x=9
return A.d(o,$async$$1)
case 9:u=d.bh(a3,s),s=A.u(u),u=new A.al(u,u.gA(u),s.i("al<W.E>")),s=s.i("W.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.a0(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=A.aH(n.h(r,"amount"))
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
u.push(new A.aNh([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1299}
B.cHc.prototype={
$1(d){return d.c},
$S:126}
B.cHd.prototype={
$1(d){return d},
$S:31}
B.cHe.prototype={
$1(d){return d},
$S:31}
B.cHf.prototype={
$1(d){return d},
$S:31}
B.b41.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5F.prototype={
$1(d){return d.w},
$S:z+0}
B.b5G.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5C.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
B.b5D.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.b5E.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKJ.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKK.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bL0.prototype={
$0(){return this.a.gS().a1(0,$.CK().gaX(),y.x).a_4(0).e8(new B.bL_())},
$S:1}
B.bL_.prototype={
$1(d){},
$S:11}
B.bKF.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKH.prototype={
$1(d){return A.CG(C.k.a8(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKI(),null)+" \u20ac"},
$S:115}
B.bKI.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bKG.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a0(v," \xb7 ")
u=x&&u>0?u:null
return new B.NQ(v,u,w.d,null)},
$S:z+7}
B.bKP.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
B.bKQ.prototype={
$1(d){return d.x!==C.eQ&&d.b===this.a},
$S:64}
B.bKZ.prototype={
$2(d,e){return A.jd(d,this.a.li(e))},
$1(d){return this.$2(d,null)},
$S:1302}
B.bKR.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKS.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bKT.prototype={
$0(){return this.a.IU(this.b.a)},
$S:0}
B.bKU.prototype={
$0(){var x=this.a
return x.p(new B.bKO(x))},
$S:0}
B.bKO.prototype={
$0(){return this.a.w=D.JC},
$S:0}
B.bKV.prototype={
$0(){var x=this.a
return x.p(new B.bKN(x))},
$S:0}
B.bKN.prototype={
$0(){return this.a.w=D.acH},
$S:0}
B.bKW.prototype={
$0(){var x=this.a
return x.p(new B.bKM(x))},
$S:0}
B.bKM.prototype={
$0(){return this.a.w=D.acG},
$S:0}
B.bKX.prototype={
$0(){var x=this.a
return x.p(new B.bKL(x))},
$S:0}
B.bKL.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bKY.prototype={
$0(){return B.Cz(this.a.gS().a1(0,$.cr(),y.v).b.a)},
$S:z+9}
B.cDP.prototype={
$1(d){var x=null,w=this.b
return new A.eV(A.h(this.a,x,x,x,x,x,x,x,x),A.cs(x,C.a8,!0,x,!0,C.z,x,A.cu(),w,x,x,x,x,x,2,D.aGf,C.Y,!0,x,!0,x,!1,x,C.aD,x,x,x,x,C.fK,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.aq,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.ar,x,C.b2,x,x,x,x),A.a([A.cx(C.cU,x,x,new B.cDN(d),x,x),A.bG(C.dy,new B.cDO(d,w),x)],y.p),x)},
$S:19}
B.cDN.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
B.cDO.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.C(this.b.a.a)
w=A.aY(w," ","")
return x.ae(A.eY(A.aY(w,",",".")))},
$S:0}
B.cDY.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bo(2100,1,1,0,0)
x=e.r
return w.bD(0,x==null?A.bo(2100,1,1,0,0):x)},
$S:z+2}
B.bNc.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
B.bNe.prototype={
$0(){return A.bZ(null,new B.bNf(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNf.prototype={
$1(d){return new B.Xf(this.a.e.a,null)},
$S:z+10}
B.bNd.prototype={
$0(){return B.akV(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bK7.prototype={
$0(){var x=this.a
A.am(x,!1).bx()
A.ag(x).ap("/bookings",null,y.X)},
$S:0}
B.bK6.prototype={
$3(d,e,f){return A.kI(A.b4(C.hJ,this.a,null,null,null),C.t,!0)},
$S:104}
B.bXr.prototype={
$1(d){var x,w,v=null
this.a.a1(0,$.amo().gaX(),y.h).P1(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a2(A.c1(v,v,v,v,v,C.z,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.T,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bXn.prototype={
$0(){var x=this
return A.rM(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bXo.prototype={
$0(){return A.ag(this.a).ap("/bookings",null,y.X)},
$S:0}
B.bXp.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bXq.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHM.prototype={
$0(){return this.a.p(new B.bHL())},
$S:0}
B.bHL.prototype={
$0(){},
$S:0}
B.bHN.prototype={
$0(){return this.a.p(new B.bHK())},
$S:0}
B.bHK.prototype={
$0(){},
$S:0}
B.bHy.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bHz.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHJ.prototype={
$1(d){return C.f.aY(C.j.k(d),2,"0")},
$S:40}
B.bHE.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
B.bHF.prototype={
$1(d){var x=this.a
return x.p(new B.bHD(x,d))},
$S:106}
B.bHD.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHG.prototype={
$0(){var x=this.a
return x.p(new B.bHC(x))},
$S:0}
B.bHC.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHH.prototype={
$0(){var x=this.a
return x.p(new B.bHB(x))},
$S:0}
B.bHB.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHI.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ab(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(T.alP(v.b,A.bo(A.az(t)-1,1,1,0,0),r,A.bo(A.az(t)+5,1,1,0,0)),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHA(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHA.prototype={
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
if(w==null)w=A.bo(2100,1,1,0,0)
x=e.r
return w.bD(0,x==null?A.bo(2100,1,1,0,0):x)},
$S:z+2}
B.bNj.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
B.bNk.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bNl.prototype={
$0(){var x=this.c
return B.akV(this.a,this.b,x.a,x.d)},
$S:0}
B.bNm.prototype={
$1(d){return this.a.a1(0,$.amo().gaX(),y.h).P1(this.b.a)},
$S:140}
B.bIJ.prototype={
$1(d){return d.c},
$S:126}
B.bIP.prototype={
$2(d,e){return A.jd(d,this.a.li(e))},
$S:41}
B.bIM.prototype={
$0(){return D.bMJ},
$S:89}
B.bIL.prototype={
$2(d,e){return A.Sx(A.a([new A.ip("Tentar outra vez",new B.bIC(this.a),!1,null)],y.p),C.fu,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1303}
B.bIC.prototype={
$0(){return this.a.aj($.d12())},
$S:0}
B.bIK.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIN(g),e=new B.bIO(g,this.b),d=J.cb(a4),a0=d.cZ(a4,0,new B.bID()),a1=d.cZ(a4,0,new B.bIE(f)),a2=d.cZ(a4,0,new B.bIF(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ao(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.Cb(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aM(a1,!1)
w=a0>0
v=w?"de "+A.aM(a0,!1):"gastos"
u=w?C.k.ag(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aK(a1/a0*100)+"% dos tetos":""
x=A.vi(i,""+t+" "+r+w,"Todos os eventos",C.hO,u,v,x)
v=y.p
u=A.a([new G.Sy(A.a([new G.xp("Gasto",A.aM(a1,!1),h),new G.xp("Por pagar",A.aM(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eB(a4,0,y.A),r=J.ao(t.a),q=t.b,t=new A.c3(r,q,A.u(t).i("c3<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.Z(q+n,r.gE(r)):A.ak(A.c5())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iN)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a2,i,i,C.ab,i,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aM(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aM(j[3]+e.$1(j[0]),!1))}n=A.x(A.a([n,C.aW,A.h(C.e.a0(k," \xb7 "),i,i,i,i,C.N,i,i,i)],v),C.H,C.h,C.l,0,C.u)
k=o.a.a
l.push(new A.hz(A.z(i,A.N(A.a([new A.bJ(1,C.at,n,i),C.ah,A.h(A.aM(k[1]+f.$1(k[0]),!1),i,i,i,i,C.ab,i,i,i),C.bn,C.m1],v),C.w,C.h,C.l,0,i,i),C.r,C.ao,C.d5,i,i,i,i,C.co,i,i,i),new B.bIG(o,g),i,i))
C.e.n(w,l)}return A.x(A.a([x,new A.dU("N\xfameros",i,u,16,i),new A.dU("Por evento \xb7 "+d,i,w,16,i),D.aBX],v),C.G,C.h,C.l,0,C.u)},
$S:1304}
B.bIN.prototype={
$1(d){return J.d5(this.a.e,new B.bIA(d)).cZ(0,0,new B.bIB())},
$S:188}
B.bIA.prototype={
$1(d){return d.b===this.a&&d.x!==C.eQ},
$S:64}
B.bIB.prototype={
$2(d,e){return d+e.w},
$S:352}
B.bIO.prototype={
$1(d){return J.d5(this.a.e,new B.bIH(d)).cZ(0,0,new B.bII(this.b))},
$S:188}
B.bIH.prototype={
$1(d){return d.b===this.a&&d.x!==C.eQ},
$S:64}
B.bII.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:352}
B.bID.prototype={
$2(d,e){return d+e.a[2]},
$S:259}
B.bIE.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:259}
B.bIF.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:259}
B.bIG.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aZ1.prototype={
$0(){return A.ag(this.a).ap("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dJo","cZ6",15)
w(B,"dJn","dqj",16)
v(B.DM.prototype,"giM","d7",4)
var t
u(t=B.abS.prototype,"gaq8","U6",5)
v(t,"gaSg","QG",6)
v(B.abw.prototype,"gaTs","aTt",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bz,[B.cHg,B.cHc,B.cHd,B.cHe,B.cHf,B.b5F,B.b5G,B.b5C,B.b5E,B.bL_,B.bKH,B.bKI,B.bKG,B.bKP,B.bKQ,B.bKZ,B.bKS,B.cDP,B.bNc,B.bNf,B.bK6,B.bXr,B.bHy,B.bHJ,B.bHF,B.bNg,B.bNh,B.bNj,B.bNk,B.bNm,B.bIJ,B.bIK,B.bIN,B.bIA,B.bIO,B.bIH])
x(A.L,[B.DC,B.b40,B.A3,B.Mr,B.a7Q,B.aCt])
x(A.cN,[B.b41,B.bKF,B.bKR,B.cDY,B.bNi,B.bIP,B.bIL,B.bIB,B.bII,B.bID,B.bIE,B.bIF])
w(B.DM,A.fd)
x(A.bR,[B.b5D,B.bKJ,B.bKK,B.bL0,B.bKT,B.bKU,B.bKO,B.bKV,B.bKN,B.bKW,B.bKM,B.bKX,B.bKL,B.bKY,B.cDN,B.cDO,B.bNe,B.bNd,B.bK7,B.bXn,B.bXo,B.bXp,B.bXq,B.bHM,B.bHL,B.bHN,B.bHK,B.bHz,B.bHE,B.bHD,B.bHG,B.bHC,B.bHH,B.bHB,B.bHI,B.bHA,B.bNl,B.bIM,B.bIC,B.bIG,B.aZ1])
w(B.abR,A.f8)
w(B.a0R,A.dA)
w(B.abS,A.dt)
x(A.J,[B.aQ3,B.aDR,B.aDo,B.XE,B.ai9,B.anL])
x(A.eq,[B.aDS,B.aGE,B.Xf,B.aCy])
w(B.NQ,A.G)
w(B.abw,A.Y)})()
A.br(b.typeUniverse,JSON.parse('{"DM":{"fd":["A3"]},"a0R":{"G":[],"e":[],"f":[]},"NQ":{"G":[],"e":[],"f":[]},"Xf":{"G":[],"e":[],"f":[]},"abS":{"Y":["a0R"]},"aQ3":{"J":[],"e":[],"f":[]},"aDR":{"J":[],"e":[],"f":[]},"aDS":{"G":[],"e":[],"f":[]},"aDo":{"J":[],"e":[],"f":[]},"aGE":{"G":[],"e":[],"f":[]},"XE":{"J":[],"e":[],"f":[]},"abw":{"Y":["NQ"]},"ai9":{"J":[],"e":[],"f":[]},"aCy":{"G":[],"e":[],"f":[]},"anL":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ay<fb>"),k:x("ay<t<rX>>"),u:x("ay<t<fP>>"),o:x("ay<t<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>>"),y:x("ay<a5<c,t<c>>>"),x:x("zF"),b:x("uP"),d:x("t1"),Z:x("pj"),v:x("ef"),_:x("i3"),h:x("DM"),g:x("A3"),D:x("r<DC>"),r:x("r<i3>"),Q:x("r<xp>"),F:x("r<el>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>"),E:x("r<a7Q>"),c:x("r<Mr>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fP>"),t:x("t<fm>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>"),P:x("a5<c,@>"),w:x("dg"),A:x("+eventId,spentByHand,total,unpaidByHand(c,S,S,S)"),e:x("lM"),N:x("c"),B:x("aCt"),q:x("dn"),i:x("S"),z:x("@"),S:x("v"),X:x("L?"),T:x("c?"),I:x("S?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.agz=new A.aQ(0,1/0,32,1/0)
D.avf=new A.a2(8,5,6,5)
D.c9r=new A.D("Prazo",null,C.ab,null,null,null,null,null,null,null,null)
D.aAQ=new A.bJ(1,C.at,D.c9r,null)
D.bAa=x([],y.r)
D.aAX=new B.A3(!1,D.bAa)
D.aBV=new A.kM("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBX=new A.kM("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aC5=new A.kM("Sem pagamentos nesta vista.",8,null)
D.aFI=new A.dF(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bx,null,null,C.bx,C.bx,!0,null,null,null,null)
D.aG2=new A.dF(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bx,null,null,C.bx,C.bx,!0,null,null,null,null)
D.aGf=new A.dF(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aI4=new A.ex("Pago",C.df,null)
D.aIb=new A.ex("Por pagar",C.hM,null)
D.aIi=new A.m6("Or\xe7amento","Todos os teus eventos",null)
D.aIo=new A.m6("Or\xe7amento",null,null)
D.bzn=x(["catering"],y.s)
D.bAs=x([],y.D)
D.bAt=x([],y.n)
D.bAT=x(["flowers_decor"],y.s)
D.bCr=x(["music_dj","bands_musicians"],y.s)
D.bD0=x(["photography"],y.s)
D.bEd=x(["venue"],y.s)
D.can=new A.D("A despesa precisa de um t\xedtulo",null,C.mJ,null,null,null,null,null,null,null,null)
D.bLK=new A.Q(V.Oh,D.can,null)
D.aFw=new A.tr("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kN,null)
D.bM4=new A.Q(C.fW,D.aFw,null)
D.bMJ=new A.Q(Q.vd,C.eq,null)
D.bZm=new A.vY(!1,6,!0,null)
D.c58=new A.P(!0,C.A,null,null,null,null,14,C.d1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7i=new A.P(!0,null,null,null,null,null,null,C.d1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab7=new A.P(!0,C.A,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cdn=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c6,null,null,null,null,null,null,null,null)
D.cdL=new A.D("Nova despesa",null,C.bk,null,null,null,null,null,null,null,null)
D.cdO=new A.D("\u20ac",null,D.ab7,null,null,null,null,null,null,null,null)
D.cg_=new A.D("Indica um valor v\xe1lido",null,C.mJ,null,null,null,null,null,null,null,null)
D.cih=new A.D("VALOR",null,C.aJ,null,null,null,null,null,null,null,null)
D.JC=new B.abR(0,"all")
D.acG=new B.abR(1,"paid")
D.acH=new B.abR(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWD","d12",()=>C.bY.$1$1(new B.cHg(),y.m))
x($,"dXs","amo",()=>A.mW(B.dJn(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["4wrla3/C9eouD49rib0eqeNALfs="]=a.current})($__dart_deferred_initializers__);