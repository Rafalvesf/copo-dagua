((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,Q,E,R,S,F,G,T,H,K,U,V,W,I,X,B={cGN:function cGN(){},cGJ:function cGJ(){},cGK:function cGK(){},cGL:function cGL(){},cGM:function cGM(){},
dI1(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DB(x[v]))
return new B.b3W(d.b,u)},
DB:function DB(d){this.a=d},
b3W:function b3W(d,e){this.a=d
this.b=e},
b3X:function b3X(){},
cYA(d){var x="category",w="due_date",v=J.a7(d),u=A.a_(v.h(d,"id")),t=A.a_(v.h(d,"wedding_id")),s=A.a_(v.h(d,"title")),r=B.dEk(B.dde(A.C(v.h(d,x)))),q=B.dde(A.C(v.h(d,x))),p=A.ds(v.h(d,"amount")),o=v.h(d,w)==null?null:A.dc(A.a_(v.h(d,w)))
v=A.dY(v.h(d,"paid"))
return new H.i3(u,t,s,r,q,p,o,v===!0)},
dde(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dEk(d){var x
A:{if("venue"===d){x=E.yf
break A}if("catering"===d){x=E.yb
break A}if("photography"===d){x=E.yc
break A}if("music_dj"===d||"bands_musicians"===d){x=E.yd
break A}if("flowers_decor"===d){x=E.ye
break A}x=null
break A}return x},
dpM(){return new B.DM()},
A2:function A2(d,e){this.a=d
this.b=e},
b5A:function b5A(){},
b5B:function b5B(){},
DM:function DM(){this.b=this.x=null},
b5x:function b5x(){},
b5y:function b5y(d,e){this.a=d
this.b=e},
b5z:function b5z(d){this.a=d},
Cy(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.al_(),$async$Cy)
case 3:u=$.R()
t=u.b
t===$&&A.b()
x=4
return A.d(t.R("events").am(0,"partner_name_1, partner_name_2").V("id",d).cS(),$async$Cy)
case 4:s=f
x=5
return A.d(u.b.R("bookings").am(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).d1(0,"event_date",!1),$async$Cy)
case 5:r=f
u=A.a([],y.s)
for(t=J.ap(r);t.t();)u.push(A.a_(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.R().b
t===$&&A.b()
x=9
return A.d(t.R("payments").am(0,"booking_id, type, status, amount, paid_at, due_at, provider").dV("booking_id",u).tK(0,"created_at"),$async$Cy)
case 9:q=f
case 7:u=$.R()
t=u.b
t===$&&A.b()
x=10
return A.d(t.R("expenses").am(0,"title, category, amount, due_date, paid").V("wedding_id",d).tK(0,"due_date"),$async$Cy)
case 10:p=f
x=11
return A.d(u.b.R("budget_categories").am(0,"name, amount").V("wedding_id",d).tK(0,"position"),$async$Cy)
case 11:o=f
x=12
return A.d(u.b.R("budgets").am(0,"total").V("wedding_id",d).cS(),$async$Cy)
case 12:n=f
m=F.cYm(F.cDV(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ap(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cA(j==null?"":j)
i=k.h(l,"category")
i=J.cA(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.f1(A.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.dh(A.q(g))
g=g==null?null:g.e1()}u.push(new B.Mn(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ap(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cA(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.f1(A.q(k))
if(k==null)k=0}t.push(new B.a7Q(i,k))}l=n==null?null:F.cYT(J.i(n,"total"))
v=new F.lM(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cy,w)},
Mn:function Mn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7Q:function a7Q(d,e){this.a=d
this.b=e},
dn4(){return new B.a0R(null)},
aUp(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUp=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.fT(!0,new B.cDk(e,new A.aF(new A.bH(u,C.aI,C.aB),$.aa())),d,y.i),$async$aUp)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUp,w)},
akT(d,e,f,g){return B.dE7(d,e,f,g)},
dE7(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akT=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUp(d,"Teto para "+f,g),$async$akT)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a1(0,$.CJ().gaX(),y.x).P2(f,r),$async$akT)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a3(I.Il)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akT,w)},
dbh(d){var x=A.U(d,y._)
C.e.cz(x,new B.cDt())
return x},
dbL(d){var x=C.f.aY(C.j.k(A.aH(d)),2,"0"),w=C.f.aY(C.j.k(A.au(d)),2,"0"),v=A.aD(d)===A.aD(new A.ad(Date.now(),0,!1))?"":"/"+A.aD(d)
return x+"/"+w+v},
cXJ(d){var x,w,v,u
if(d===C.k.fD(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aZ(w,".",",")}v=x.split(",")
u=A.CF(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHt(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abQ:function abQ(d,e){this.a=d
this.b=e},
a0R:function a0R(d){this.a=d},
abR:function abR(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKx:function bKx(d){this.a=d},
bKy:function bKy(d){this.a=d},
bKP:function bKP(d){this.a=d},
bKO:function bKO(){},
bKt:function bKt(){},
bKv:function bKv(){},
bKw:function bKw(){},
bKu:function bKu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKD:function bKD(){},
bKE:function bKE(d){this.a=d},
bKN:function bKN(d){this.a=d},
bKF:function bKF(){},
bKG:function bKG(){},
bKH:function bKH(d,e){this.a=d
this.b=e},
bKI:function bKI(d){this.a=d},
bKC:function bKC(d){this.a=d},
bKJ:function bKJ(d){this.a=d},
bKB:function bKB(d){this.a=d},
bKK:function bKK(d){this.a=d},
bKA:function bKA(d){this.a=d},
bKL:function bKL(d){this.a=d},
bKz:function bKz(d){this.a=d},
bKM:function bKM(d){this.a=d},
cDk:function cDk(d,e){this.a=d
this.b=e},
cDi:function cDi(d){this.a=d},
cDj:function cDj(d,e){this.a=d
this.b=e},
cDt:function cDt(){},
aQ_:function aQ_(d,e,f){this.c=d
this.d=e
this.a=f},
aDO:function aDO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDP:function aDP(d,e){this.e=d
this.a=e},
bN0:function bN0(){},
bN2:function bN2(d,e){this.a=d
this.b=e},
bN3:function bN3(d){this.a=d},
bN1:function bN1(d,e,f){this.a=d
this.b=e
this.c=f},
aDl:function aDl(d,e){this.c=d
this.a=e},
bJW:function bJW(d){this.a=d},
bJV:function bJV(d){this.a=d},
aGA:function aGA(d,e,f,g){var _=this
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
XB:function XB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCq:function aCq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NM:function NM(d,e,f,g){var _=this
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
bHH:function bHH(d){this.a=d},
bHG:function bHG(){},
bHI:function bHI(d){this.a=d},
bHF:function bHF(){},
bHt:function bHt(){},
bHu:function bHu(d){this.a=d},
bHE:function bHE(){},
bHz:function bHz(d){this.a=d},
bHA:function bHA(d){this.a=d},
bHy:function bHy(d,e){this.a=d
this.b=e},
bHB:function bHB(d){this.a=d},
bHx:function bHx(d){this.a=d},
bHC:function bHC(d){this.a=d},
bHw:function bHw(d){this.a=d},
bHD:function bHD(d,e){this.a=d
this.b=e},
bHv:function bHv(d,e){this.a=d
this.b=e},
Xc:function Xc(d,e){this.e=d
this.a=e},
bN4:function bN4(d){this.a=d},
bN5:function bN5(d){this.a=d},
bN6:function bN6(){},
bN7:function bN7(){},
bN8:function bN8(d){this.a=d},
bN9:function bN9(d,e,f){this.a=d
this.b=e
this.c=f},
bNa:function bNa(d,e){this.a=d
this.b=e},
ai7:function ai7(d,e,f){this.c=d
this.d=e
this.a=f},
aCv:function aCv(d,e,f){this.e=d
this.f=e
this.a=f},
bIE:function bIE(){},
bIK:function bIK(d){this.a=d},
bIH:function bIH(){},
bIG:function bIG(d){this.a=d},
bIx:function bIx(d){this.a=d},
bIF:function bIF(d,e,f){this.a=d
this.b=e
this.c=f},
bII:function bII(d){this.a=d},
bIv:function bIv(d){this.a=d},
bIw:function bIw(){},
bIJ:function bIJ(d,e){this.a=d
this.b=e},
bIC:function bIC(d){this.a=d},
bID:function bID(d){this.a=d},
bIy:function bIy(){},
bIz:function bIz(d){this.a=d},
bIA:function bIA(d){this.a=d},
bIB:function bIB(d,e){this.a=d
this.b=e},
anI:function anI(d,e){this.c=d
this.a=e},
aYX:function aYX(d){this.a=d},
dgf(d){var x
switch(d){case E.yf:x=D.bE7
break
case E.yb:x=D.bzi
break
case E.yc:x=D.bCV
break
case E.yd:x=D.bCl
break
case E.ye:x=D.bAN
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
R=c[159]
S=c[217]
F=c[133]
G=c[79]
T=c[169]
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
B.DB.prototype={
gao(d){return this.a.a}}
B.b3W.prototype={
gpX(){return C.e.cY(this.b,0,new B.b3X())},
gaCt(){var x=this.a
return x===0?0:C.k.ag(this.gpX()/x,0,1)}}
B.A2.prototype={
gbAN(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5A(),w),w.i("A.E"))
return x},
gbB8(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5B(),w),w.i("A.E"))
return x},
axz(d,e){var x=e==null?this.a:e
return new B.A2(x,d==null?this.b:d)},
ip(d){return this.axz(null,d)},
axg(d){return this.axz(d,null)}}
B.DM.prototype={
d7(){var x=y.T,w=this.x=A.eT(this).H(A.cI($.cr(),new B.b5x(),y.v,x),x)
if(w!=null)A.ji(new B.b5y(this,w),y.H)
return D.aAR},
c_(d,e){return this.byd(0,e)},
byd(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ip(!0))
u=$.R().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.R("expenses").ck(0).V("wedding_id",e).d1(0,"created_at",!0),$async$c_)
case 2:v.sa4(0,new t.A2(s,r.d6(g,B.dIS(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$c_,w)},
VM(d){return this.bo3(d)},
bo3(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$VM=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.R().b
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
u.j(0,"due_date",t==null?null:C.e.gK(t.cg().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.da(0,u).ck(0).dP(0),$async$VM)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cYA(s))
v.sa4(0,r.axg(u))
return A.l(null,w)}})
return A.m($async$VM,w)},
P_(d){return this.bDH(d)},
bDH(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$P_=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.ll(v.ga4(0).b,new B.b5z(d))
m=$.R().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.R("expenses").bh(0,A.T(["paid",!n.w,"updated_at",new A.ad(Date.now(),0,!1).cg()],u,u)).V("id",d).ck(0).dP(0),$async$P_)
case 2:t=l.cYA(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.axg(m))
return A.l(null,w)}})
return A.m($async$P_,w)}}
B.Mn.prototype={}
B.a7Q.prototype={
gao(d){return this.a}}
B.abQ.prototype={
I(){return"_BudgetFilter."+this.b}}
B.a0R.prototype={
P(){return new B.abR(D.JC)}}
B.abR.prototype={
U_(d){return this.bdL(d)},
bdL(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$U_=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKx(u))
x=1
break}u.p(new B.bKy(u))
t=u.gS()
s=$.cr()
r=t.a1(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a1(0,s.gaX(),y.Z).am(0,d),$async$U_)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$U_,w)},
ad(){this.ar()
A.ji(new B.bKP(this),y.H)},
QE(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$QE=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.aml()
m=y.h
l=o.a1(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a1(0,$.CJ(),y.b).b
s=t==null?null:t.b
r=C.e.cY(o.a1(0,n,y.g).b,0,new B.bKt())
t=o.a1(0,$.cr(),y.v).b
q=t==null?null:t.gcB()
t=u.c
t.toString
x=3
return A.d(A.c1(null,new B.bKu(q,s,new B.bKv(),r),!1,t,!0,!0,null,y.B),$async$QE)
case 3:p=e
if(p==null){x=1
break}o=o.a1(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.VM(new H.i3("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$QE,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.H($.CJ(),y.b),a3=a1.H($.HY(),y.d),a4=a1.H($.aml(),y.g),a5=a2.b,a6=a5==null?e:B.dI1(a5,a3.b)
a5=A.iZ(a1.H($.jd(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iW
a5=y.T
w=a1.H(A.cI($.cr(),new B.bKD(),y.v,a5),a5)
if(f.y){a1=f.gaq2()
return A.cP(e,C.cY,A.ot(C.fc,40,A.a([C.h0,D.aId,L.cV8(a1,e),new B.aCv(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.d7(x,new B.bKE(w))
a1=a1.H($.uB(),y.l)
u=a1.gv(a1)
t=new B.bKN(u==null?C.f9:u)
a1=y._
a5=A.U(a4.gbAN(),a1)
for(s=v.a,r=J.cb(s),q=r.gX(s),p=v.b,o=v.$ti.i("h9<1>"),n=new A.h9(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i3("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbB8(0),a1)
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
n.push(new H.i3("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dbh(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dbh(q)
break
default:a1=e}h=C.e.cY(q,0,new B.bKF())
s=a6==null
if(s)g=D.bAl
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bKG(),p),p.i("A.E"))}if(s)a1=D.bZh
else{s=f.gaS9()
r=y.p
p=A.a([new A.ps(A.a([new A.qT(s,"Nova despesa",e)],r),e),D.aIj,L.cV8(f.gaq2(),w),new B.aQ_(a6,new B.bKH(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aM(a6.gpX(),!1)
n=a5.length
m=n===1?d:a0
l=A.aM(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.dT("N\xfameros",e,A.a([new G.Su(A.a([new G.xq("Gasto",o,""+n+" "+m),new G.xq("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.m4(A.a([new A.el("Todos",l===D.JC,n+m,new B.bKI(f),e),new A.el("Pendentes",l===D.acC,m,new B.bKJ(f),e),new A.el("Pagos",l===D.acB,n,new B.bKK(f),e)],y.F),4,!0,e),C.av],r))}o.push(new B.aGA(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.dT("Pagamentos",e,o,16,e))
a1=A.a([new A.kM(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDO(g,f.x,new B.bKL(f),e))
p.push(new A.dT("Categorias",e,a1,16,e))
p.push(new A.dT("Exportar",e,A.a([new F.DN("Gastos e parceiros",!1,new B.bKM(f),e)],r),16,e))
a1=A.ot(C.fc,40,p,e,!0,!1)}return A.cP(e,C.cY,a1,!0,e)},
IR(d){return this.aZ8(d)},
aZ8(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IR=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUp(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IR)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a1(0,$.CJ().gaX(),y.x).a_H(r),$async$IR)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a3(I.Il)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$IR,w)}}
B.aQ_.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpX()>0?"Gastos "+A.aM(t.gpX(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vh(new A.io("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hL,0,"por definir","\u2014")}x=C.k.aK(t.gaCt()*100)
w=s-t.gpX()<0?"Acima do teto":"Ainda tens"
v=A.aM(Math.abs(s-t.gpX()),!1)
s=A.aM(s,!1)
u=t.gaCt()
return A.aW(A.vh(I.a2x,"Gastos "+A.aM(t.gpX(),!1)+" \xb7 "+x+"% do teto",w,C.hL,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDO.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dM(s,0,A.eF(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDP(r[w],null))
q=A.a([A.fc(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.io(u,v.e,!0,null))}return A.y(q,C.G,C.h,C.l,0,C.u)}}
B.aDP.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(A.cI($.cr(),new B.bN0(),y.v,m),m)
if(l==null)x=C.rA
else{m=e.H($.d0x().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rA:m}m=A.a([],y.s)
for(w=B.dgf(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bN2(this,d)
if(w)return A.jW(!1,!1,p,v,A.aM(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.on("P\xf4r teto",new B.bN1(this,d,e),!0,p))
w=A.aM(o.b,!1)
u=A.aM(n,!1)
s=y.p
q=A.a([A.aG(new A.Tn(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aF,new B.anI(m,p)],s))
return A.jW(!1,!1,p,v,w+" de "+u,o.a,A.y(q,C.dk,C.h,C.K,0,C.u))}}
B.aDl.prototype={
u(d){var x,w,v=null,u=$.at,t=$.fx.cd(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fV(r,A.aG(p==null?A.kI(A.b4(C.hE,u,v,v,v),C.t,!0):A.pn(p,144,new B.bJV(u),!1,C.bK,A.wA(),!1,v,v,v),48,48),C.ba)
p=A.h(q.b,1,C.a2,v,v,D.c53,v,v,v)
x=A.b4(C.ia,u,v,v,14)
w=q.d
q=w>0?q.gQd()+" \xb7 "+A.aM(w,!1):q.gQd()
w=y.p
return new A.Q(C.cr,A.aW(A.B(v,A.N(A.a([r,C.af,A.a4(A.y(A.a([p,C.io,A.N(A.a([x,C.e7,new A.d8(1,C.b7,A.h(q,1,C.a2,v,v,A.aI(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bq,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.w,C.h,C.l,0,v,v)],w),C.H,C.h,C.l,0,C.u),1),A.b4(C.ic,u,v,v,v)],w),C.w,C.h,C.l,0,v,v),C.r,v,v,new A.L(t,v,v,s,v,v,C.y),v,v,v,C.dW,v,v,v),new B.bJW(d),v),v)}}
B.aGA.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.St(A.a([new A.io("+ Nova despesa",this.f,!0,j)],y.p),C.fu,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aC_
x=new B.bX_(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+B.dbL(m)
v.push(new W.E_(new A.cp(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bWW(d,e,s,q),A.HS(m)===C.fk,j))
continue}p=r?new B.bWX(d):new B.bWY(x,s)
v.push(new B.XB(s,p,r||s.w?j:new B.bWZ(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XB&&v[k-1] instanceof B.XB)u.push(C.iL)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBP)
return A.y(i,C.G,C.h,C.l,0,C.u)}}
B.XB.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aM(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dbL(w))
v=C.e.a0(v," \xb7 ")
if(u)u=D.aI_
else{u=this.e
u=u!=null?new A.on("Marcar pago",u,!0,null):D.aI6}return A.jW(!1,!1,null,this.d,v,x.c,u)}}
B.aCq.prototype={}
B.NM.prototype={
P(){var x=$.aa()
return new B.abw(new A.aF(C.al,x),new A.aF(C.al,x))}}
B.abw.prototype={
ad(){var x=this
x.ar()
x.d.an(0,new B.bHH(x))
x.e.an(0,new B.bHI(x))},
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
gaii(){var x=C.f.C(this.e.a.a)
x=A.aZ(x," ","")
return A.f1(A.aZ(x,",","."))},
aTm(){var x,w,v,u,t=this,s=t.gaii()
t.p(new B.bHu(t))
x=C.f.C(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.ae(new B.aCq(x,s,u,t.r,v))},
asO(d,e,f,g,h){var x=null,w=h?C.i3:x,v=y.p,u=A.a4(A.y(A.a([A.h(d,x,x,x,x,C.ae,x,x,x),C.aY,A.h(e,x,x,x,x,C.O,x,x,x)],v),C.H,C.h,C.l,0,C.u),1),t=f?C.bp:x,s=f?x:A.bB(C.lz,1.5),r=f?U.vP:x
return A.b8(x,!0,x,A.cT(C.bP,A.B(x,A.N(A.a([u,A.B(x,r,C.r,x,x,new A.L(t,x,s,x,x,x,C.aw),x,24,x,x,x,x,24)],v),C.w,C.h,C.l,0,x,x),C.r,x,C.db,new A.L(x,x,w,x,x,x,C.y),x,x,x,C.hx,x,x,x),C.Z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aQ),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bkb(d,e,f,g){return this.asO(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gaii()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.C(x.a.a).length!==0&&j>0
w=new B.bHE()
t=y.w
s=A.ax(d,k,t).w
r=y.p
q=A.a([D.cdI],r)
q.push(A.h(l.a.c,k,k,k,k,C.O,k,k,k))
q=A.N(A.a([A.a4(A.y(q,C.H,C.h,C.l,0,C.u),1),A.b8(k,!0,k,A.cT(k,A.B(k,C.lX,C.r,k,k,C.cg,k,44,k,k,k,k,44),C.Z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHz(d),k,k,k,k,k,k,!1,C.aQ),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.w,C.h,C.l,0,k,k)
p=A.W(22)
o=A.a([D.cie,A.N(A.a([Y.d4U(A.cs(k,C.a8,!1,k,!0,C.z,k,A.cx(),l.e,k,k,k,k,k,2,D.aFY,C.Z,!0,k,!0,k,!1,k,C.aD,k,k,k,k,C.hd,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.aq,k,k,k,k,k,k,k,k,k,k,k,D.ab6,!0,C.dE,k,C.b2,k,k,k,k)),C.bm,D.cdL],r),C.eS,C.bW,C.l,0,C.aM,k)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cXJ(v)+" no teto":"Passa o teto em "+B.cXJ(-v)
o.push(A.h(m,k,k,k,k,A.aI(k,k,n?C.V:C.c1,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.cfW)
p=A.B(k,A.y(o,C.w,C.h,C.l,0,C.u),C.r,k,k,new A.L(C.a7,k,k,p,k,k,C.y),k,k,k,C.bh,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aL,k,k,k)
n=A.W(26)
m=l.x&&C.f.C(x.a.a).length===0?A.bB(C.c1,1.5):k
n=A.a([p,C.a1,new A.Q(C.cr,o,k),A.B(C.bg,A.cs(k,C.a8,!1,k,!0,C.z,k,A.cx(),x,k,k,k,k,k,2,D.aFC,C.Z,!0,k,!0,k,!1,k,C.aD,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.aq,k,k,k,k,k,k,k,k,k,k,k,C.ff,!0,C.ar,k,C.hc,k,k,k,k),C.r,k,k,new A.L(C.a7,k,m,n,k,k,C.y),k,52,k,C.fs,k,k,k)],r)
if(l.x&&C.f.C(x.a.a).length===0)n.push(D.bLF)
n.push(C.a1)
n.push(new X.a1r(l.r,new B.bHA(l),k))
n.push(C.a1)
n.push(new A.Q(C.cr,A.h("ESTADO",k,k,k,k,C.aL,k,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bkb("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHB(l)),l.asO("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHC(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.aH(p)))
m=l.f
m.toString
m=A.q(w.$1(A.au(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aD(w)}o.push(A.b8(k,!0,k,A.cT(C.bP,A.aG(A.N(A.a([D.aAK,A.h(w,k,k,k,k,C.ch,k,k,k),C.e7,C.lW],r),C.w,C.h,C.l,0,k,k),56,k),C.Z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHD(l,d),k,k,k,k,k,k,!1,C.aQ),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.B(k,A.y(o,C.w,C.h,C.l,0,C.u),C.r,k,k,new A.L(C.a7,k,k,x,k,k,C.y),k,k,k,C.cP,k,k,k))
n.push(C.a1)
n.push(D.cdj)
x=A.dQ(A.y(n,C.G,C.h,C.l,0,C.u),C.z,k,C.eh,k,k,C.a3)
t=A.ax(d,C.b4,t).w
w=A.cn(u?C.A:C.A.cd(0.35),k,k,C.t,k,k,C.ad,k,k,C.eJ)
return new A.Q(new A.a2(0,0,0,s.f.d),A.y(A.a([new A.Q(C.jI,q,k),new A.d8(1,C.b7,x,k),new A.Q(new A.a2(20,16,20,20+t.r.d),A.aG(A.bF(A.h(u?"Guardar \xb7 "+B.cXJ(j):"Guardar",k,k,k,k,k,k,k,k),l.gaTl(),w),52,k),k)],r),C.G,C.h,C.K,0,C.u),k)}}
B.Xc.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.CJ(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eV(new A.a6(j,new B.bN4(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.H($.aml(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bN5(l),w),w.i("A.E"))
C.e.cz(v,new B.bN6())
j=y.T
u=e.H(A.cI($.cr(),new B.bN7(),y.v,j),j)
t=B.dgf(l.e.c)
if(u==null)s=K.FO
else{j=e.H($.aWc().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.FO
j=J.d7(j,new B.bN8(t))
s=A.U(j,j.$ti.i("A.E"))}j=A.ax(d,k,y.w).w
w=A.bN(A.B(k,k,C.r,k,k,new A.L(C.bE,k,k,A.W(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ar(d).ok.r,k,k,k)
q=A.a4(new B.ai7("Gasto",A.aM(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a1,r,C.aC,A.N(A.a([q,C.ah,A.a4(A.aW(new B.ai7("Teto \xb7 tocar para mudar",p===0?"Definir":A.aM(p,!1),k),new B.bN9(d,e,x),k),1)],o),C.w,C.h,C.l,0,k,k)],o)
if(s.length!==0){w=A.a([C.bj,A.h("Contratado na app",k,k,k,k,A.ar(d).ok.w,k,k,k),C.S],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aDl(s[n],k))
C.e.n(p,w)}p.push(C.bj)
p.push(A.h("Despesas",k,k,k,k,A.ar(d).ok.w,k,k,k))
p.push(C.S)
w=v.length
if(w===0)p.push(D.bM_)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.hf,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aY(C.j.k(A.aH(q)),2,"0")+"/"+C.f.aY(C.j.k(A.au(q)),2,"0")+"/"+A.aD(q),k,k,k,k,k,k,k,k)
p.push(A.jl(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.N(A.a([A.h(A.aM(m.f,!1),k,k,k,k,D.c7d,k,k,k),C.ag,new R.Dg(m.w,new B.bNa(e,m),k,$.at,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.JE,k)],o),C.w,C.h,C.K,0,k,k),k))}return A.bE(!0,new A.ee(new A.aQ(0,1/0,0,j.a.b*0.8),A.d0(p,k,O.Dj,k,k,!1,C.a3,!0),k),k,C.a_,!0)}}
B.ai7.prototype={
u(d){var x=null,w=A.W(16)
return A.B(x,A.y(A.a([A.h(this.c,x,x,x,x,C.bb,x,x,x),C.av,A.h(this.d,x,x,x,x,P.aaT,x,x,x)],y.p),C.H,C.h,C.l,0,C.u),C.r,x,x,new A.L(C.a7,x,x,w,x,x,C.y),x,x,x,C.cA,x,x,x)}}
B.aCv.prototype={
bg(d,e){var x,w=y.t,v=e.H(A.cI($.cr(),new B.bIE(),y.v,w),w),u=e.H($.d0w(),y.o)
w=e.H($.uB(),y.l)
x=w.gv(w)
return A.hq(u,new B.bIF(this,new B.bIK(x==null?C.f9:x),v),new B.bIG(e),new B.bIH(),!1,!0,!1)}}
B.anI.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.at,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.fx
s=new A.b2(999,999)
r=new A.bb(o.cd(0.25),1,C.ai,-1)
q=A.b4(C.ia,o,p,p,13)
t=A.B(p,A.N(A.a([q,M.z6,new A.d8(1,C.b7,A.h(u,1,C.a2,p,p,new A.P(!0,o,p,p,p,p,14,C.d1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b4(C.ic,o,p,p,16)],n),C.w,C.h,C.K,0,p,p),C.r,p,D.agu,new A.L(t,p,new A.dS(r,r,r,r),new A.cd(s,s,s,s),p,p,C.y),p,p,p,D.av9,p,p,p)
m.push(new A.jp(new A.n3(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hz(t,new B.aYX(d),p,p),p))}return A.e1(C.bf,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["x(i3)","S(S,i3)","v(i3,i3)","S(S,DB)","A2()","F<~>(c?)","F<~>()","NM(O)","x(DB)","F<lM>()","Xc(O)","~(i3)","~()","x(np)","x(rW)","i3(a5<c,@>)","DM()"])
B.cGN.prototype={
$1(d){return this.aFM(d)},
aFM(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(A.cI($.cr(),new B.cGJ(),y.v,f),f)
f=J.a7(e)
if(f.gZ(e)){v=D.bAm
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.t();)u.push(t.gE(t).a)
t=$.R()
s=t.b
s===$&&A.b()
r=y.G
q=s.R("budgets").am(0,"wedding_id, total").dV("wedding_id",u).b5(new B.cGK(),r)
p=t.b.R("budget_categories").am(0,"wedding_id, amount").dV("wedding_id",u).b5(new B.cGL(),r)
o=t.b.R("expenses").am(0,"wedding_id, amount, paid").dV("wedding_id",u).b5(new B.cGM(),r)
r=y.N
u=y.i
t=A.E(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bh(a3,s),m=A.u(n),n=new A.al(n,n.gA(n),m.i("al<V.E>")),m=m.i("V.E")
case 4:if(!n.t()){x=5
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
t.j(0,A.a_(k.h(l,"wedding_id")),A.ds(k.h(l,"total")))
x=4
break
case 5:j=A.E(r,u)
d=J
x=6
return A.d(p,$async$$1)
case 6:n=d.bh(a3,s),m=A.u(n),n=new A.al(n,n.gA(n),m.i("al<V.E>")),m=m.i("V.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.a_(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=A.aL(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=A.E(r,u)
d=J
x=9
return A.d(o,$async$$1)
case 9:u=d.bh(a3,s),s=A.u(u),u=new A.al(u,u.gA(u),s.i("al<V.E>")),s=s.i("V.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.a_(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=A.aL(n.h(r,"amount"))
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
u.push(new A.aNd([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1299}
B.cGJ.prototype={
$1(d){return d.c},
$S:151}
B.cGK.prototype={
$1(d){return d},
$S:29}
B.cGL.prototype={
$1(d){return d},
$S:29}
B.cGM.prototype={
$1(d){return d},
$S:29}
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
$S:35}
B.b5y.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.b5z.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKx.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKy.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bKP.prototype={
$0(){return this.a.gS().a1(0,$.CJ().gaX(),y.x).ZY(0).e8(new B.bKO())},
$S:1}
B.bKO.prototype={
$1(d){},
$S:11}
B.bKt.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKv.prototype={
$1(d){return A.CF(C.k.a8(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKw(),null)+" \u20ac"},
$S:120}
B.bKw.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bKu.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a0(v," \xb7 ")
u=x&&u>0?u:null
return new B.NM(v,u,w.d,null)},
$S:z+7}
B.bKD.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
B.bKE.prototype={
$1(d){return d.x!==C.eP&&d.b===this.a},
$S:68}
B.bKN.prototype={
$2(d,e){return A.jb(d,this.a.lh(e))},
$1(d){return this.$2(d,null)},
$S:1302}
B.bKF.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKG.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bKH.prototype={
$0(){return this.a.IR(this.b.a)},
$S:0}
B.bKI.prototype={
$0(){var x=this.a
return x.p(new B.bKC(x))},
$S:0}
B.bKC.prototype={
$0(){return this.a.w=D.JC},
$S:0}
B.bKJ.prototype={
$0(){var x=this.a
return x.p(new B.bKB(x))},
$S:0}
B.bKB.prototype={
$0(){return this.a.w=D.acC},
$S:0}
B.bKK.prototype={
$0(){var x=this.a
return x.p(new B.bKA(x))},
$S:0}
B.bKA.prototype={
$0(){return this.a.w=D.acB},
$S:0}
B.bKL.prototype={
$0(){var x=this.a
return x.p(new B.bKz(x))},
$S:0}
B.bKz.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bKM.prototype={
$0(){return B.Cy(this.a.gS().a1(0,$.cr(),y.v).b.a)},
$S:z+9}
B.cDk.prototype={
$1(d){var x=null,w=this.b
return new A.eU(A.h(this.a,x,x,x,x,x,x,x,x),A.cs(x,C.a8,!0,x,!0,C.z,x,A.cx(),w,x,x,x,x,x,2,D.aGa,C.Z,!0,x,!0,x,!1,x,C.aD,x,x,x,x,C.hd,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.aq,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.ar,x,C.b2,x,x,x,x),A.a([A.cw(C.cU,x,x,new B.cDi(d),x,x),A.bF(C.dw,new B.cDj(d,w),x)],y.p),x)},
$S:18}
B.cDi.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
B.cDj.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.C(this.b.a.a)
w=A.aZ(w," ","")
return x.ae(A.f1(A.aZ(w,",",".")))},
$S:0}
B.cDt.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bz(2100,1,1,0,0)
x=e.r
return w.bD(0,x==null?A.bz(2100,1,1,0,0):x)},
$S:z+2}
B.bN0.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
B.bN2.prototype={
$0(){return A.c1(null,new B.bN3(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bN3.prototype={
$1(d){return new B.Xc(this.a.e.a,null)},
$S:z+10}
B.bN1.prototype={
$0(){return B.akT(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bJW.prototype={
$0(){var x=this.a
A.am(x,!1).bx()
A.ah(x).av("/bookings",null,y.X)},
$S:0}
B.bJV.prototype={
$3(d,e,f){return A.kI(A.b4(C.hE,this.a,null,null,null),C.t,!0)},
$S:100}
B.bX_.prototype={
$1(d){var x,w,v=null
this.a.a1(0,$.aml().gaX(),y.h).P_(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a3(A.c7(v,v,v,v,v,C.z,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.U,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bWW.prototype={
$0(){var x=this
return A.rL(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bWX.prototype={
$0(){return A.ah(this.a).av("/bookings",null,y.X)},
$S:0}
B.bWY.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bWZ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHH.prototype={
$0(){return this.a.p(new B.bHG())},
$S:0}
B.bHG.prototype={
$0(){},
$S:0}
B.bHI.prototype={
$0(){return this.a.p(new B.bHF())},
$S:0}
B.bHF.prototype={
$0(){},
$S:0}
B.bHt.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bHu.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHE.prototype={
$1(d){return C.f.aY(C.j.k(d),2,"0")},
$S:40}
B.bHz.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
B.bHA.prototype={
$1(d){var x=this.a
return x.p(new B.bHy(x,d))},
$S:95}
B.bHy.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHB.prototype={
$0(){var x=this.a
return x.p(new B.bHx(x))},
$S:0}
B.bHx.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHC.prototype={
$0(){var x=this.a
return x.p(new B.bHw(x))},
$S:0}
B.bHw.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHD.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ad(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(T.a_p(v.b,A.bz(A.aD(t)-1,1,1,0,0),r,A.bz(A.aD(t)+5,1,1,0,0),null),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHv(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHv.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bN4.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bN5.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bN6.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bz(2100,1,1,0,0)
x=e.r
return w.bD(0,x==null?A.bz(2100,1,1,0,0):x)},
$S:z+2}
B.bN7.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
B.bN8.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bN9.prototype={
$0(){var x=this.c
return B.akT(this.a,this.b,x.a,x.d)},
$S:0}
B.bNa.prototype={
$1(d){return this.a.a1(0,$.aml().gaX(),y.h).P_(this.b.a)},
$S:135}
B.bIE.prototype={
$1(d){return d.c},
$S:151}
B.bIK.prototype={
$2(d,e){return A.jb(d,this.a.lh(e))},
$S:41}
B.bIH.prototype={
$0(){return D.bME},
$S:89}
B.bIG.prototype={
$2(d,e){return A.St(A.a([new A.io("Tentar outra vez",new B.bIx(this.a),!1,null)],y.p),C.fu,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1303}
B.bIx.prototype={
$0(){return this.a.aj($.d0w())},
$S:0}
B.bIF.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bII(g),e=new B.bIJ(g,this.b),d=J.cb(a4),a0=d.cY(a4,0,new B.bIy()),a1=d.cY(a4,0,new B.bIz(f)),a2=d.cY(a4,0,new B.bIA(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ap(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C8(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aM(a1,!1)
w=a0>0
v=w?"de "+A.aM(a0,!1):"gastos"
u=w?C.k.ag(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aK(a1/a0*100)+"% dos tetos":""
x=A.vh(i,""+t+" "+r+w,"Todos os eventos",C.hL,u,v,x)
v=y.p
u=A.a([new G.Su(A.a([new G.xq("Gasto",A.aM(a1,!1),h),new G.xq("Por pagar",A.aM(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eB(a4,0,y.A),r=J.ap(t.a),q=t.b,t=new A.c2(r,q,A.u(t).i("c2<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.a1(q+n,r.gE(r)):A.ak(A.c4())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iL)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a2,i,i,C.ae,i,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aM(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aM(j[3]+e.$1(j[0]),!1))}n=A.y(A.a([n,C.aY,A.h(C.e.a0(k," \xb7 "),i,i,i,i,C.O,i,i,i)],v),C.H,C.h,C.l,0,C.u)
k=o.a.a
l.push(new A.hz(A.B(i,A.N(A.a([new A.bJ(1,C.au,n,i),C.ah,A.h(A.aM(k[1]+f.$1(k[0]),!1),i,i,i,i,C.ae,i,i,i),C.bm,C.lW],v),C.w,C.h,C.l,0,i,i),C.r,C.ap,C.db,i,i,i,i,C.cn,i,i,i),new B.bIB(o,g),i,i))
C.e.n(w,l)}return A.y(A.a([x,new A.dT("N\xfameros",i,u,16,i),new A.dT("Por evento \xb7 "+d,i,w,16,i),D.aBR],v),C.G,C.h,C.l,0,C.u)},
$S:1304}
B.bII.prototype={
$1(d){return J.d7(this.a.e,new B.bIv(d)).cY(0,0,new B.bIw())},
$S:162}
B.bIv.prototype={
$1(d){return d.b===this.a&&d.x!==C.eP},
$S:68}
B.bIw.prototype={
$2(d,e){return d+e.w},
$S:351}
B.bIJ.prototype={
$1(d){return J.d7(this.a.e,new B.bIC(d)).cY(0,0,new B.bID(this.b))},
$S:162}
B.bIC.prototype={
$1(d){return d.b===this.a&&d.x!==C.eP},
$S:68}
B.bID.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:351}
B.bIy.prototype={
$2(d,e){return d+e.a[2]},
$S:259}
B.bIz.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:259}
B.bIA.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:259}
B.bIB.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYX.prototype={
$0(){return A.ah(this.a).av("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dIS","cYA",15)
w(B,"dIR","dpM",16)
v(B.DM.prototype,"giM","d7",4)
var t
u(t=B.abR.prototype,"gaq2","U_",5)
v(t,"gaS9","QE",6)
v(B.abw.prototype,"gaTl","aTm",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.by,[B.cGN,B.cGJ,B.cGK,B.cGL,B.cGM,B.b5A,B.b5B,B.b5x,B.b5z,B.bKO,B.bKv,B.bKw,B.bKu,B.bKD,B.bKE,B.bKN,B.bKG,B.cDk,B.bN0,B.bN3,B.bJV,B.bX_,B.bHt,B.bHE,B.bHA,B.bN4,B.bN5,B.bN7,B.bN8,B.bNa,B.bIE,B.bIF,B.bII,B.bIv,B.bIJ,B.bIC])
x(A.K,[B.DB,B.b3W,B.A2,B.Mn,B.a7Q,B.aCq])
x(A.cN,[B.b3X,B.bKt,B.bKF,B.cDt,B.bN6,B.bIK,B.bIG,B.bIw,B.bID,B.bIy,B.bIz,B.bIA])
w(B.DM,A.fd)
x(A.bR,[B.b5y,B.bKx,B.bKy,B.bKP,B.bKH,B.bKI,B.bKC,B.bKJ,B.bKB,B.bKK,B.bKA,B.bKL,B.bKz,B.bKM,B.cDi,B.cDj,B.bN2,B.bN1,B.bJW,B.bWW,B.bWX,B.bWY,B.bWZ,B.bHH,B.bHG,B.bHI,B.bHF,B.bHu,B.bHz,B.bHy,B.bHB,B.bHx,B.bHC,B.bHw,B.bHD,B.bHv,B.bN9,B.bIH,B.bIx,B.bIB,B.aYX])
w(B.abQ,A.f8)
w(B.a0R,A.dD)
w(B.abR,A.dz)
x(A.I,[B.aQ_,B.aDO,B.aDl,B.XB,B.ai7,B.anI])
x(A.eq,[B.aDP,B.aGA,B.Xc,B.aCv])
w(B.NM,A.G)
w(B.abw,A.Y)})()
A.bq(b.typeUniverse,JSON.parse('{"DM":{"fd":["A2"]},"a0R":{"G":[],"e":[],"f":[]},"NM":{"G":[],"e":[],"f":[]},"Xc":{"G":[],"e":[],"f":[]},"abR":{"Y":["a0R"]},"aQ_":{"I":[],"e":[],"f":[]},"aDO":{"I":[],"e":[],"f":[]},"aDP":{"G":[],"e":[],"f":[]},"aDl":{"I":[],"e":[],"f":[]},"aGA":{"G":[],"e":[],"f":[]},"XB":{"I":[],"e":[],"f":[]},"abw":{"Y":["NM"]},"ai7":{"I":[],"e":[],"f":[]},"aCv":{"G":[],"e":[],"f":[]},"anI":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ay<fb>"),k:x("ay<t<rW>>"),u:x("ay<t<fW>>"),o:x("ay<t<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>>"),y:x("ay<a5<c,t<c>>>"),x:x("zF"),b:x("uN"),d:x("t0"),Z:x("pi"),v:x("ef"),_:x("i3"),h:x("DM"),g:x("A2"),D:x("r<DB>"),r:x("r<i3>"),Q:x("r<xq>"),F:x("r<el>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>"),E:x("r<a7Q>"),c:x("r<Mn>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fW>"),t:x("t<fm>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>"),P:x("a5<c,@>"),w:x("df"),A:x("+eventId,spentByHand,total,unpaidByHand(c,S,S,S)"),e:x("lM"),N:x("c"),B:x("aCq"),q:x("dn"),i:x("S"),z:x("@"),S:x("v"),X:x("K?"),T:x("c?"),I:x("S?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.agu=new A.aQ(0,1/0,32,1/0)
D.av9=new A.a2(8,5,6,5)
D.c9m=new A.D("Prazo",null,C.ae,null,null,null,null,null,null,null,null)
D.aAK=new A.bJ(1,C.au,D.c9m,null)
D.bA3=x([],y.r)
D.aAR=new B.A2(!1,D.bA3)
D.aBP=new A.kM("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBR=new A.kM("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aC_=new A.kM("Sem pagamentos nesta vista.",8,null)
D.aFC=new A.dF(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bw,null,null,C.bw,C.bw,!0,null,null,null,null)
D.aFY=new A.dF(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bw,null,null,C.bw,C.bw,!0,null,null,null,null)
D.aGa=new A.dF(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aI_=new A.ex("Pago",C.df,null)
D.aI6=new A.ex("Por pagar",C.hJ,null)
D.aId=new A.m5("Or\xe7amento","Todos os teus eventos",null)
D.aIj=new A.m5("Or\xe7amento",null,null)
D.bzi=x(["catering"],y.s)
D.bAl=x([],y.D)
D.bAm=x([],y.n)
D.bAN=x(["flowers_decor"],y.s)
D.bCl=x(["music_dj","bands_musicians"],y.s)
D.bCV=x(["photography"],y.s)
D.bE7=x(["venue"],y.s)
D.cai=new A.D("A despesa precisa de um t\xedtulo",null,C.mF,null,null,null,null,null,null,null,null)
D.bLF=new A.Q(V.Oh,D.cai,null)
D.aFq=new A.tq("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kI,null)
D.bM_=new A.Q(C.fU,D.aFq,null)
D.bME=new A.Q(Q.va,C.ep,null)
D.bZh=new A.vY(!1,6,!0,null)
D.c53=new A.P(!0,C.A,null,null,null,null,14,C.d1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7d=new A.P(!0,null,null,null,null,null,null,C.d1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab6=new A.P(!0,C.A,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cdj=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c9,null,null,null,null,null,null,null,null)
D.cdI=new A.D("Nova despesa",null,C.bk,null,null,null,null,null,null,null,null)
D.cdL=new A.D("\u20ac",null,D.ab6,null,null,null,null,null,null,null,null)
D.cfW=new A.D("Indica um valor v\xe1lido",null,C.mF,null,null,null,null,null,null,null,null)
D.cie=new A.D("VALOR",null,C.aL,null,null,null,null,null,null,null,null)
D.JC=new B.abQ(0,"all")
D.acB=new B.abQ(1,"paid")
D.acC=new B.abQ(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dW6","d0w",()=>C.bX.$1$1(new B.cGN(),y.m))
x($,"dWW","aml",()=>A.mV(B.dIR(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["5RdL4w+YAiX7anYYvGvn+fwNicY="]=a.current})($__dart_deferred_initializers__);