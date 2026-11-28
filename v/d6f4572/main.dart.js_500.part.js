((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,Q,E,R,S,F,G,T,H,K,U,V,W,I,X,B={cFP:function cFP(){},cFL:function cFL(){},cFM:function cFM(){},cFN:function cFN(){},cFO:function cFO(){},
dGP(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v)u.push(new B.DA(x[v]))
return new B.b3H(d.b,u)},
DA:function DA(d){this.a=d},
b3H:function b3H(d,e){this.a=d
this.b=e},
b3I:function b3I(){},
cXt(d){var x="category",w="due_date",v=J.a7(d),u=A.a1(v.h(d,"id")),t=A.a1(v.h(d,"wedding_id")),s=A.a1(v.h(d,"title")),r=B.dD9(B.dc4(A.D(v.h(d,x)))),q=B.dc4(A.D(v.h(d,x))),p=A.ds(v.h(d,"amount")),o=v.h(d,w)==null?null:A.db(A.a1(v.h(d,w)))
v=A.dX(v.h(d,"paid"))
return new H.i4(u,t,s,r,q,p,o,v===!0)},
dc4(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dD9(d){var x
A:{if("venue"===d){x=E.yc
break A}if("catering"===d){x=E.y8
break A}if("photography"===d){x=E.y9
break A}if("music_dj"===d||"bands_musicians"===d){x=E.ya
break A}if("flowers_decor"===d){x=E.yb
break A}x=null
break A}return x},
doB(){return new B.DK()},
A1:function A1(d,e){this.a=d
this.b=e},
b5l:function b5l(){},
b5m:function b5m(){},
DK:function DK(){this.b=this.x=null},
b5i:function b5i(){},
b5j:function b5j(d,e){this.a=d
this.b=e},
b5k:function b5k(d){this.a=d},
Cx(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cx=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akS(),$async$Cx)
case 3:u=$.S()
t=u.b
t===$&&A.b()
x=4
return A.d(t.R("events").an(0,"partner_name_1, partner_name_2").W("id",d).d0(),$async$Cx)
case 4:s=f
x=5
return A.d(u.b.R("bookings").an(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("wedding_id",d).d4(0,"event_date",!1),$async$Cx)
case 5:r=f
u=A.a([],y.s)
for(t=J.aq(r);t.t();)u.push(A.a1(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.S().b
t===$&&A.b()
x=9
return A.d(t.R("payments").an(0,"booking_id, type, status, amount, paid_at, due_at, provider").eq("booking_id",u).tK(0,"created_at"),$async$Cx)
case 9:q=f
case 7:u=$.S()
t=u.b
t===$&&A.b()
x=10
return A.d(t.R("expenses").an(0,"title, category, amount, due_date, paid").W("wedding_id",d).tK(0,"due_date"),$async$Cx)
case 10:p=f
x=11
return A.d(u.b.R("budget_categories").an(0,"name, amount").W("wedding_id",d).tK(0,"position"),$async$Cx)
case 11:o=f
x=12
return A.d(u.b.R("budgets").an(0,"total").W("wedding_id",d).d0(),$async$Cx)
case 12:n=f
m=F.cXf(F.cD0(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.aq(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cA(j==null?"":j)
i=k.h(l,"category")
i=J.cA(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.f0(A.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.dq(A.q(g))
g=g==null?null:g.e0()}u.push(new B.Ml(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.aq(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cA(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.f0(A.q(k))
if(k==null)k=0}t.push(new B.a7M(i,k))}l=n==null?null:F.cXM(J.i(n,"total"))
v=new F.lM(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cx,w)},
Ml:function Ml(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7M:function a7M(d,e){this.a=d
this.b=e},
dlU(){return new B.a0N(null)},
aUe(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUe=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.fR(!0,new B.cCq(e,new A.aE(new A.bD(u,C.aI,C.aA),$.aa())),d,y.i),$async$aUe)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUe,w)},
akM(d,e,f,g){return B.dCX(d,e,f,g)},
dCX(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akM=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUe(d,"Teto para "+f,g),$async$akM)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CI().gaX(),y.x).OY(f,r),$async$akM)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a3(I.Ig)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akM,w)},
da8(d){var x=A.U(d,y._)
C.e.cO(x,new B.cCz())
return x},
daC(d){var x=C.f.aY(C.j.k(A.aI(d)),2,"0"),w=C.f.aY(C.j.k(A.ax(d)),2,"0"),v=A.aD(d)===A.aD(new A.ad(Date.now(),0,!1))?"":"/"+A.aD(d)
return x+"/"+w+v},
cWC(d){var x,w,v,u
if(d===C.k.fD(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aY(w,".",",")}v=x.split(",")
u=A.CE(v[0],A.aT("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHd(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abM:function abM(d,e){this.a=d
this.b=e},
a0N:function a0N(d){this.a=d},
abN:function abN(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKh:function bKh(d){this.a=d},
bKi:function bKi(d){this.a=d},
bKz:function bKz(d){this.a=d},
bKy:function bKy(){},
bKd:function bKd(){},
bKf:function bKf(){},
bKg:function bKg(){},
bKe:function bKe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKn:function bKn(){},
bKo:function bKo(d){this.a=d},
bKx:function bKx(d){this.a=d},
bKp:function bKp(){},
bKq:function bKq(){},
bKr:function bKr(d,e){this.a=d
this.b=e},
bKs:function bKs(d){this.a=d},
bKm:function bKm(d){this.a=d},
bKt:function bKt(d){this.a=d},
bKl:function bKl(d){this.a=d},
bKu:function bKu(d){this.a=d},
bKk:function bKk(d){this.a=d},
bKv:function bKv(d){this.a=d},
bKj:function bKj(d){this.a=d},
bKw:function bKw(d){this.a=d},
cCq:function cCq(d,e){this.a=d
this.b=e},
cCo:function cCo(d){this.a=d},
cCp:function cCp(d,e){this.a=d
this.b=e},
cCz:function cCz(){},
aPP:function aPP(d,e,f){this.c=d
this.d=e
this.a=f},
aDG:function aDG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDH:function aDH(d,e){this.e=d
this.a=e},
bML:function bML(){},
bMN:function bMN(d,e){this.a=d
this.b=e},
bMO:function bMO(d){this.a=d},
bMM:function bMM(d,e,f){this.a=d
this.b=e
this.c=f},
aDd:function aDd(d,e){this.c=d
this.a=e},
bJG:function bJG(d){this.a=d},
bJF:function bJF(d){this.a=d},
aGr:function aGr(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bWF:function bWF(d,e){this.a=d
this.b=e},
bWB:function bWB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWC:function bWC(d){this.a=d},
bWD:function bWD(d,e){this.a=d
this.b=e},
bWE:function bWE(d,e){this.a=d
this.b=e},
Xw:function Xw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCi:function aCi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NK:function NK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abs:function abs(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bHr:function bHr(d){this.a=d},
bHq:function bHq(){},
bHs:function bHs(d){this.a=d},
bHp:function bHp(){},
bHd:function bHd(){},
bHe:function bHe(d){this.a=d},
bHo:function bHo(){},
bHj:function bHj(d){this.a=d},
bHk:function bHk(d){this.a=d},
bHi:function bHi(d,e){this.a=d
this.b=e},
bHl:function bHl(d){this.a=d},
bHh:function bHh(d){this.a=d},
bHm:function bHm(d){this.a=d},
bHg:function bHg(d){this.a=d},
bHn:function bHn(d,e){this.a=d
this.b=e},
bHf:function bHf(d,e){this.a=d
this.b=e},
X7:function X7(d,e){this.e=d
this.a=e},
bMP:function bMP(d){this.a=d},
bMQ:function bMQ(d){this.a=d},
bMR:function bMR(){},
bMS:function bMS(){},
bMT:function bMT(d){this.a=d},
bMU:function bMU(d,e,f){this.a=d
this.b=e
this.c=f},
bMV:function bMV(d,e){this.a=d
this.b=e},
ai1:function ai1(d,e,f){this.c=d
this.d=e
this.a=f},
aCn:function aCn(d,e,f){this.e=d
this.f=e
this.a=f},
bIo:function bIo(){},
bIu:function bIu(d){this.a=d},
bIr:function bIr(){},
bIq:function bIq(d){this.a=d},
bIh:function bIh(d){this.a=d},
bIp:function bIp(d,e,f){this.a=d
this.b=e
this.c=f},
bIs:function bIs(d){this.a=d},
bIf:function bIf(d){this.a=d},
bIg:function bIg(){},
bIt:function bIt(d,e){this.a=d
this.b=e},
bIm:function bIm(d){this.a=d},
bIn:function bIn(d){this.a=d},
bIi:function bIi(){},
bIj:function bIj(d){this.a=d},
bIk:function bIk(d){this.a=d},
bIl:function bIl(d,e){this.a=d
this.b=e},
anA:function anA(d,e){this.c=d
this.a=e},
aYM:function aYM(d){this.a=d},
df4(d){var x
switch(d){case E.yc:x=D.bE_
break
case E.y8:x=D.bzb
break
case E.y9:x=D.bCN
break
case E.ya:x=D.bCe
break
case E.yb:x=D.bAH
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
B.DA.prototype={
gaq(d){return this.a.a}}
B.b3H.prototype={
gpX(){return C.e.d_(this.b,0,new B.b3I())},
gaCi(){var x=this.a
return x===0?0:C.k.af(this.gpX()/x,0,1)}}
B.A1.prototype={
gbAy(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5l(),w),w.i("z.E"))
return x},
gbAU(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5m(),w),w.i("z.E"))
return x},
axn(d,e){var x=e==null?this.a:e
return new B.A1(x,d==null?this.b:d)},
ip(d){return this.axn(null,d)},
ax4(d){return this.axn(d,null)}}
B.DK.prototype={
d7(){var x=y.T,w=this.x=A.eQ(this).H(A.cH($.cm(),new B.b5i(),y.v,x),x)
if(w!=null)A.ji(new B.b5j(this,w),y.H)
return D.aAL},
c_(d,e){return this.by0(0,e)},
by0(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ip(!0))
u=$.S().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.R("expenses").cj(0).W("wedding_id",e).d4(0,"created_at",!0),$async$c_)
case 2:v.sa4(0,new t.A1(s,r.d7(g,B.dHF(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$c_,w)},
VD(d){return this.bnQ(d)},
bnQ(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$VD=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.S().b
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
u.j(0,"due_date",t==null?null:C.e.gM(t.cf().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.da(0,u).cj(0).dP(0),$async$VD)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cXt(s))
v.sa4(0,r.ax4(u))
return A.l(null,w)}})
return A.m($async$VD,w)},
OV(d){return this.bDs(d)},
bDs(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OV=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.ll(v.ga4(0).b,new B.b5k(d))
m=$.S().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.R("expenses").bh(0,A.T(["paid",!n.w,"updated_at",new A.ad(Date.now(),0,!1).cf()],u,u)).W("id",d).cj(0).dP(0),$async$OV)
case 2:t=l.cXt(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.K)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.ax4(m))
return A.l(null,w)}})
return A.m($async$OV,w)}}
B.Ml.prototype={}
B.a7M.prototype={
gaq(d){return this.a}}
B.abM.prototype={
I(){return"_BudgetFilter."+this.b}}
B.a0N.prototype={
P(){return new B.abN(D.Jx)}}
B.abN.prototype={
TT(d){return this.bdz(d)},
bdz(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TT=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKh(u))
x=1
break}u.p(new B.bKi(u))
t=u.gS()
s=$.cm()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gaX(),y.Z).an(0,d),$async$TT)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$TT,w)},
ag(){this.aA()
A.ji(new B.bKz(this),y.H)},
Qz(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Qz=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.amd()
m=y.h
l=o.a0(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CI(),y.b).b
s=t==null?null:t.b
r=C.e.d_(o.a0(0,n,y.g).b,0,new B.bKd())
t=o.a0(0,$.cm(),y.v).b
q=t==null?null:t.gcu()
t=u.c
t.toString
x=3
return A.d(A.c9(null,new B.bKe(q,s,new B.bKf(),r),!1,t,!0,!0,null,y.B),$async$Qz)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.VD(new H.i4("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Qz,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.H($.CI(),y.b),a3=a1.H($.HW(),y.d),a4=a1.H($.amd(),y.g),a5=a2.b,a6=a5==null?e:B.dGP(a5,a3.b)
a5=A.j_(a1.H($.jd(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iT
a5=y.T
w=a1.H(A.cH($.cm(),new B.bKn(),y.v,a5),a5)
if(f.y){a1=f.gapR()
return A.cP(e,C.cU,A.or(C.fc,40,A.a([C.h0,D.aI7,L.cU1(a1,e),new B.aCn(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.d4(x,new B.bKo(w))
a1=a1.H($.uy(),y.l)
u=a1.gv(a1)
t=new B.bKx(u==null?C.f9:u)
a1=y._
a5=A.U(a4.gbAy(),a1)
for(s=v.a,r=J.cb(s),q=r.gX(s),p=v.b,o=v.$ti.i("h6<1>"),n=new A.h6(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i4("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbAU(0),a1)
for(s=r.gX(s),o=new A.h6(s,p,o),p=y.r;o.t();){r=s.gE(s)
n=A.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new H.i4("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new H.i4("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.da8(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.da8(q)
break
default:a1=e}h=C.e.d_(q,0,new B.bKp())
s=a6==null
if(s)g=D.bAd
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bKq(),p),p.i("z.E"))}if(s)a1=D.bZ8
else{s=f.gaRY()
r=y.p
p=A.a([new A.pq(A.a([new A.qQ(s,"Nova despesa",e)],r),e),D.aId,L.cU1(f.gapR(),w),new B.aPP(a6,new B.bKr(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aM(a6.gpX(),!1)
n=a5.length
m=n===1?d:a0
l=A.aM(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.dP("N\xfameros",e,A.a([new G.Sp(A.a([new G.xm("Gasto",o,""+n+" "+m),new G.xm("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.m4(A.a([new A.el("Todos",l===D.Jx,n+m,new B.bKs(f),e),new A.el("Pendentes",l===D.act,m,new B.bKt(f),e),new A.el("Pagos",l===D.acs,n,new B.bKu(f),e)],y.F),4,!0,e),C.au],r))}o.push(new B.aGr(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.dP("Pagamentos",e,o,16,e))
a1=A.a([new A.kM(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDG(g,f.x,new B.bKv(f),e))
p.push(new A.dP("Categorias",e,a1,16,e))
p.push(new A.dP("Exportar",e,A.a([new F.DL("Gastos e parceiros",!1,new B.bKw(f),e)],r),16,e))
a1=A.or(C.fc,40,p,e,!0,!1)}return A.cP(e,C.cU,a1,!0,e)},
IP(d){return this.aYZ(d)},
aYZ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IP=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUe(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IP)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a0(0,$.CI().gaX(),y.x).a_w(r),$async$IP)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a3(I.Ig)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$IP,w)}}
B.aPP.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpX()>0?"Gastos "+A.aM(t.gpX(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.ve(new A.io("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hK,0,"por definir","\u2014")}x=C.k.aK(t.gaCi()*100)
w=s-t.gpX()<0?"Acima do teto":"Ainda tens"
v=A.aM(Math.abs(s-t.gpX()),!1)
s=A.aM(s,!1)
u=t.gaCi()
return A.aW(A.ve(I.a2p,"Gastos "+A.aM(t.gpX(),!1)+" \xb7 "+x+"% do teto",w,C.hK,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDG.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.e6(s,0,A.eV(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.K)(r),++w)p.push(new B.aDH(r[w],null))
q=A.a([A.fc(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.io(u,v.e,!0,null))}return A.A(q,C.G,C.h,C.l,0,C.u)}}
B.aDH.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(A.cH($.cm(),new B.bML(),y.v,m),m)
if(l==null)x=C.rx
else{m=e.H($.d_p().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rx:m}m=A.a([],y.s)
for(w=B.df4(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bMN(this,d)
if(w)return A.jW(!1,!1,p,v,A.aM(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.ol("P\xf4r teto",new B.bMM(this,d,e),!0,p))
w=A.aM(o.b,!1)
u=A.aM(n,!1)
s=y.p
q=A.a([A.aG(new A.Ti(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aF,new B.anA(m,p)],s))
return A.jW(!1,!1,p,v,w+" de "+u,o.a,A.A(q,C.dk,C.h,C.K,0,C.u))}}
B.aDd.prototype={
u(d){var x,w,v=null,u=$.at,t=$.fv.cc(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fZ(r,A.aG(p==null?A.kI(A.b3(C.hD,u,v,v,v),C.t,!0):A.tk(p,144,new B.bJF(u),!1,C.bR,A.wx(),!1,v,v,v),48,48),C.ba)
p=A.h(q.b,1,C.a3,v,v,D.c4V,v,v,v)
x=A.b3(C.i6,u,v,v,14)
w=q.d
q=w>0?q.gQ8()+" \xb7 "+A.aM(w,!1):q.gQ8()
w=y.p
return new A.Q(C.cr,A.aW(A.B(v,A.N(A.a([r,C.af,A.a4(A.A(A.a([p,C.ij,A.N(A.a([x,C.el,new A.de(1,C.bc,A.h(q,1,C.a3,v,v,A.aH(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bq,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.w,C.h,C.l,0,v,v)],w),C.H,C.h,C.l,0,C.u),1),A.b3(C.i8,u,v,v,v)],w),C.w,C.h,C.l,0,v,v),C.r,v,v,new A.M(t,v,v,s,v,v,C.y),v,v,v,C.dT,v,v,v),new B.bJG(d),v),v)}}
B.aGr.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.So(A.a([new A.io("+ Nova despesa",this.f,!0,j)],y.p),C.ft,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBU
x=new B.bWF(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.K)(i),++t){s=i[t]
r=s.a
q=C.f.dh(r,":pay:")
r=C.f.b2(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gM(r.split(" \xb7 "))
n=A.aM(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.daC(m)
v.push(new W.DY(new A.cy(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bWB(d,e,s,q),A.HQ(m)===C.fk,j))
continue}p=r?new B.bWC(d):new B.bWD(x,s)
v.push(new B.Xw(s,p,r||s.w?j:new B.bWE(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xw&&v[k-1] instanceof B.Xw)u.push(C.iI)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBJ)
return A.A(i,C.G,C.h,C.l,0,C.u)}}
B.Xw.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aM(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.daC(w))
v=C.e.a2(v," \xb7 ")
if(u)u=D.aHU
else{u=this.e
u=u!=null?new A.ol("Marcar pago",u,!0,null):D.aI0}return A.jW(!1,!1,null,this.d,v,x.c,u)}}
B.aCi.prototype={}
B.NK.prototype={
P(){var x=$.aa()
return new B.abs(new A.aE(C.al,x),new A.aE(C.al,x))}}
B.abs.prototype={
ag(){var x=this
x.aA()
x.d.am(0,new B.bHr(x))
x.e.am(0,new B.bHs(x))},
m(){var x=this.d,w=$.aa()
x.Y$=w
x.V$=0
x=this.e
x.Y$=w
x.V$=0
this.a6()},
gai6(){var x=C.f.C(this.e.a.a)
x=A.aY(x," ","")
return A.f0(A.aY(x,",","."))},
aTa(){var x,w,v,u,t=this,s=t.gai6()
t.p(new B.bHe(t))
x=C.f.C(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.ad(new B.aCi(x,s,u,t.r,v))},
asC(d,e,f,g,h){var x=null,w=h?C.jo:x,v=y.p,u=A.a4(A.A(A.a([A.h(d,x,x,x,x,C.ae,x,x,x),C.b1,A.h(e,x,x,x,x,C.P,x,x,x)],v),C.H,C.h,C.l,0,C.u),1),t=f?C.bp:x,s=f?x:A.bz(C.lv,1.5),r=f?U.vL:x
return A.b8(x,!0,x,A.cV(C.bV,A.B(x,A.N(A.a([u,A.B(x,r,C.r,x,x,new A.M(t,x,s,x,x,x,C.av),x,24,x,x,x,x,24)],v),C.w,C.h,C.l,0,x,x),C.r,x,C.d9,new A.M(x,x,w,x,x,x,C.y),x,x,x,C.hw,x,x,x),C.Z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aU),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bk_(d,e,f,g){return this.asC(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gai6()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.C(x.a.a).length!==0&&j>0
w=new B.bHo()
t=y.w
s=A.aw(d,k,t).w
r=y.p
q=A.a([D.cdy],r)
q.push(A.h(l.a.c,k,k,k,k,C.P,k,k,k))
q=A.N(A.a([A.a4(A.A(q,C.H,C.h,C.l,0,C.u),1),A.b8(k,!0,k,A.cV(k,A.B(k,C.o6,C.r,k,k,C.cg,k,44,k,k,k,k,44),C.Z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHj(d),k,k,k,k,k,k,!1,C.aU),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.w,C.h,C.l,0,k,k)
p=A.W(22)
o=A.a([D.ci3,A.N(A.a([Y.d3L(A.cr(k,C.a8,!1,k,!0,C.z,k,A.cw(),l.e,k,k,k,k,k,2,D.aFS,C.Z,!0,k,!0,k,!1,k,C.aD,k,k,k,k,C.hd,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.ar,k,k,k,k,k,k,k,k,k,k,k,D.aaY,!0,C.dE,k,C.b2,k,k,k,k)),C.bn,D.cdB],r),C.eS,C.bW,C.l,0,C.aL,k)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cWC(v)+" no teto":"Passa o teto em "+B.cWC(-v)
o.push(A.h(m,k,k,k,k,A.aH(k,k,n?C.U:C.c1,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.cfM)
p=A.B(k,A.A(o,C.w,C.h,C.l,0,C.u),C.r,k,k,new A.M(C.a7,k,k,p,k,k,C.y),k,k,k,C.bj,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aO,k,k,k)
n=A.W(26)
m=l.x&&C.f.C(x.a.a).length===0?A.bz(C.c1,1.5):k
n=A.a([p,C.a1,new A.Q(C.cr,o,k),A.B(C.bg,A.cr(k,C.a8,!1,k,!0,C.z,k,A.cw(),x,k,k,k,k,k,2,D.aFw,C.Z,!0,k,!0,k,!1,k,C.aD,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.ar,k,k,k,k,k,k,k,k,k,k,k,C.ff,!0,C.aq,k,C.hc,k,k,k,k),C.r,k,k,new A.M(C.a7,k,m,n,k,k,C.y),k,52,k,C.fr,k,k,k)],r)
if(l.x&&C.f.C(x.a.a).length===0)n.push(D.bLy)
n.push(C.a1)
n.push(new X.a1n(l.r,new B.bHk(l),k))
n.push(C.a1)
n.push(new A.Q(C.cr,A.h("ESTADO",k,k,k,k,C.aO,k,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bk_("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHl(l)),l.asC("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHm(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.aI(p)))
m=l.f
m.toString
m=A.q(w.$1(A.ax(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aD(w)}o.push(A.b8(k,!0,k,A.cV(C.bV,A.aG(A.N(A.a([D.aAE,A.h(w,k,k,k,k,C.ch,k,k,k),C.el,C.lT],r),C.w,C.h,C.l,0,k,k),56,k),C.Z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHn(l,d),k,k,k,k,k,k,!1,C.aU),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.B(k,A.A(o,C.w,C.h,C.l,0,C.u),C.r,k,k,new A.M(C.a7,k,k,x,k,k,C.y),k,k,k,C.d2,k,k,k))
n.push(C.a1)
n.push(D.cd9)
x=A.dQ(A.A(n,C.G,C.h,C.l,0,C.u),C.z,k,C.ed,k,k,C.a2)
t=A.aw(d,C.b4,t).w
w=A.cq(u?C.A:C.A.cc(0.35),k,k,C.t,k,k,C.ad,k,k,C.eJ)
return new A.Q(new A.a0(0,0,0,s.f.d),A.A(A.a([new A.Q(C.jD,q,k),new A.de(1,C.bc,x,k),new A.Q(new A.a0(20,16,20,20+t.r.d),A.aG(A.bE(A.h(u?"Guardar \xb7 "+B.cWC(j):"Guardar",k,k,k,k,k,k,k,k),l.gaT9(),w),52,k),k)],r),C.G,C.h,C.K,0,C.u),k)}}
B.X7.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.CI(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eU(new A.a6(j,new B.bMP(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.H($.amd(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bMQ(l),w),w.i("z.E"))
C.e.cO(v,new B.bMR())
j=y.T
u=e.H(A.cH($.cm(),new B.bMS(),y.v,j),j)
t=B.df4(l.e.c)
if(u==null)s=K.FK
else{j=e.H($.aW1().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.FK
j=J.d4(j,new B.bMT(t))
s=A.U(j,j.$ti.i("z.E"))}j=A.aw(d,k,y.w).w
w=A.bO(A.B(k,k,C.r,k,k,new A.M(C.bD,k,k,A.W(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ar(d).ok.r,k,k,k)
q=A.a4(new B.ai1("Gasto",A.aM(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a1,r,C.aC,A.N(A.a([q,C.ah,A.a4(A.aW(new B.ai1("Teto \xb7 tocar para mudar",p===0?"Definir":A.aM(p,!1),k),new B.bMU(d,e,x),k),1)],o),C.w,C.h,C.l,0,k,k)],o)
if(s.length!==0){w=A.a([C.bi,A.h("Contratado na app",k,k,k,k,A.ar(d).ok.w,k,k,k),C.S],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.K)(s),++n)w.push(new B.aDd(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.h("Despesas",k,k,k,k,A.ar(d).ok.w,k,k,k))
p.push(C.S)
w=v.length
if(w===0)p.push(D.bLT)
else for(n=0;n<v.length;v.length===w||(0,A.K)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.hf,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aY(C.j.k(A.aI(q)),2,"0")+"/"+C.f.aY(C.j.k(A.ax(q)),2,"0")+"/"+A.aD(q),k,k,k,k,k,k,k,k)
p.push(A.jl(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.N(A.a([A.h(A.aM(m.f,!1),k,k,k,k,D.c75,k,k,k),C.ag,new R.Df(m.w,new B.bMV(e,m),k,$.at,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.Jz,k)],o),C.w,C.h,C.K,0,k,k),k))}return A.bC(!0,new A.ek(new A.aQ(0,1/0,0,j.a.b*0.8),A.d0(p,k,O.Dg,k,k,!1,C.a2,!0),k),k,C.a_,!0)}}
B.ai1.prototype={
u(d){var x=null,w=A.W(16)
return A.B(x,A.A(A.a([A.h(this.c,x,x,x,x,C.bd,x,x,x),C.au,A.h(this.d,x,x,x,x,P.aaK,x,x,x)],y.p),C.H,C.h,C.l,0,C.u),C.r,x,x,new A.M(C.a7,x,x,w,x,x,C.y),x,x,x,C.cz,x,x,x)}}
B.aCn.prototype={
bg(d,e){var x,w=y.t,v=e.H(A.cH($.cm(),new B.bIo(),y.v,w),w),u=e.H($.d_o(),y.o)
w=e.H($.uy(),y.l)
x=w.gv(w)
return A.hp(u,new B.bIp(this,new B.bIu(x==null?C.f9:x),v),new B.bIq(e),new B.bIr(),!1,!0,!1)}}
B.anA.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.at,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
t=$.fv
s=new A.b5(999,999)
r=new A.bc(o.cc(0.25),1,C.ak,-1)
q=A.b3(C.i6,o,p,p,13)
t=A.B(p,A.N(A.a([q,M.z3,new A.de(1,C.bc,A.h(u,1,C.a3,p,p,new A.P(!0,o,p,p,p,p,14,C.cY,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b3(C.i8,o,p,p,16)],n),C.w,C.h,C.K,0,p,p),C.r,p,D.agl,new A.M(t,p,new A.dS(r,r,r,r),new A.ch(s,s,s,s),p,p,C.y),p,p,p,D.av3,p,p,p)
m.push(new A.jp(new A.n4(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hx(t,new B.aYM(d),p,p),p))}return A.e0(C.bf,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["x(i4)","R(R,i4)","v(i4,i4)","R(R,DA)","A1()","F<~>(c?)","F<~>()","NK(O)","x(DA)","F<lM>()","X7(O)","~(i4)","~()","x(np)","x(rS)","i4(a5<c,@>)","DK()"])
B.cFP.prototype={
$1(d){return this.aFA(d)},
aFA(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(A.cH($.cm(),new B.cFL(),y.v,f),f)
f=J.a7(e)
if(f.gZ(e)){v=D.bAe
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.t();)u.push(t.gE(t).a)
t=$.S()
s=t.b
s===$&&A.b()
r=y.G
q=s.R("budgets").an(0,"wedding_id, total").eq("wedding_id",u).b6(new B.cFM(),r)
p=t.b.R("budget_categories").an(0,"wedding_id, amount").eq("wedding_id",u).b6(new B.cFN(),r)
o=t.b.R("expenses").an(0,"wedding_id, amount, paid").eq("wedding_id",u).b6(new B.cFO(),r)
r=y.N
u=y.i
t=A.E(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bl(a3,s),m=A.u(n),n=new A.al(n,n.gA(n),m.i("al<V.E>")),m=m.i("V.E")
case 4:if(!n.t()){x=5
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
t.j(0,A.a1(k.h(l,"wedding_id")),A.ds(k.h(l,"total")))
x=4
break
case 5:j=A.E(r,u)
d=J
x=6
return A.d(p,$async$$1)
case 6:n=d.bl(a3,s),m=A.u(n),n=new A.al(n,n.gA(n),m.i("al<V.E>")),m=m.i("V.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.a1(k.h(l,"wedding_id"))
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
case 9:u=d.bl(a3,s),s=A.u(u),u=new A.al(u,u.gA(u),s.i("al<V.E>")),s=s.i("V.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.a1(n.h(r,"wedding_id"))
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
u.push(new A.aN2([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1296}
B.cFL.prototype={
$1(d){return d.c},
$S:142}
B.cFM.prototype={
$1(d){return d},
$S:29}
B.cFN.prototype={
$1(d){return d},
$S:29}
B.cFO.prototype={
$1(d){return d},
$S:29}
B.b3I.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5l.prototype={
$1(d){return d.w},
$S:z+0}
B.b5m.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5i.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
B.b5j.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.b5k.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKh.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKi.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bKz.prototype={
$0(){return this.a.gS().a0(0,$.CI().gaX(),y.x).ZN(0).en(new B.bKy())},
$S:1}
B.bKy.prototype={
$1(d){},
$S:13}
B.bKd.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKf.prototype={
$1(d){return A.CE(C.k.a8(d,0),A.aT("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKg(),null)+" \u20ac"},
$S:123}
B.bKg.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:41}
B.bKe.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a2(v," \xb7 ")
u=x&&u>0?u:null
return new B.NK(v,u,w.d,null)},
$S:z+7}
B.bKn.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
B.bKo.prototype={
$1(d){return d.x!==C.eP&&d.b===this.a},
$S:66}
B.bKx.prototype={
$2(d,e){return A.jb(d,this.a.lh(e))},
$1(d){return this.$2(d,null)},
$S:1299}
B.bKp.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKq.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bKr.prototype={
$0(){return this.a.IP(this.b.a)},
$S:0}
B.bKs.prototype={
$0(){var x=this.a
return x.p(new B.bKm(x))},
$S:0}
B.bKm.prototype={
$0(){return this.a.w=D.Jx},
$S:0}
B.bKt.prototype={
$0(){var x=this.a
return x.p(new B.bKl(x))},
$S:0}
B.bKl.prototype={
$0(){return this.a.w=D.act},
$S:0}
B.bKu.prototype={
$0(){var x=this.a
return x.p(new B.bKk(x))},
$S:0}
B.bKk.prototype={
$0(){return this.a.w=D.acs},
$S:0}
B.bKv.prototype={
$0(){var x=this.a
return x.p(new B.bKj(x))},
$S:0}
B.bKj.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bKw.prototype={
$0(){return B.Cx(this.a.gS().a0(0,$.cm(),y.v).b.a)},
$S:z+9}
B.cCq.prototype={
$1(d){var x=null,w=this.b
return new A.eR(A.h(this.a,x,x,x,x,x,x,x,x),A.cr(x,C.a8,!0,x,!0,C.z,x,A.cw(),w,x,x,x,x,x,2,D.aG4,C.Z,!0,x,!0,x,!1,x,C.aD,x,x,x,x,C.hd,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.ar,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.aq,x,C.b2,x,x,x,x),A.a([A.cv(C.cQ,x,x,new B.cCo(d),x,x),A.bE(C.dw,new B.cCp(d,w),x)],y.p),x)},
$S:17}
B.cCo.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0}
B.cCp.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.C(this.b.a.a)
w=A.aY(w," ","")
return x.ad(A.f0(A.aY(w,",",".")))},
$S:0}
B.cCz.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bB(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bB(2100,1,1,0,0):x)},
$S:z+2}
B.bML.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
B.bMN.prototype={
$0(){return A.c9(null,new B.bMO(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bMO.prototype={
$1(d){return new B.X7(this.a.e.a,null)},
$S:z+10}
B.bMM.prototype={
$0(){return B.akM(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bJG.prototype={
$0(){var x=this.a
A.am(x,!1).bB()
A.ai(x).au("/bookings",null,y.X)},
$S:0}
B.bJF.prototype={
$3(d,e,f){return A.kI(A.b3(C.hD,this.a,null,null,null),C.t,!0)},
$S:128}
B.bWF.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.amd().gaX(),y.h).OV(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a3(A.c6(v,v,v,v,v,C.z,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.V,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bWB.prototype={
$0(){var x=this
return A.rH(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bWC.prototype={
$0(){return A.ai(this.a).au("/bookings",null,y.X)},
$S:0}
B.bWD.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bWE.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHr.prototype={
$0(){return this.a.p(new B.bHq())},
$S:0}
B.bHq.prototype={
$0(){},
$S:0}
B.bHs.prototype={
$0(){return this.a.p(new B.bHp())},
$S:0}
B.bHp.prototype={
$0(){},
$S:0}
B.bHd.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:41}
B.bHe.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHo.prototype={
$1(d){return C.f.aY(C.j.k(d),2,"0")},
$S:39}
B.bHj.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0}
B.bHk.prototype={
$1(d){var x=this.a
return x.p(new B.bHi(x,d))},
$S:102}
B.bHi.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHl.prototype={
$0(){var x=this.a
return x.p(new B.bHh(x))},
$S:0}
B.bHh.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHm.prototype={
$0(){var x=this.a
return x.p(new B.bHg(x))},
$S:0}
B.bHg.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHn.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ad(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(T.a_l(v.b,A.bB(A.aD(t)-1,1,1,0,0),r,A.bB(A.aD(t)+5,1,1,0,0),null),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHf(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHf.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bMP.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bMQ.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bMR.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bB(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bB(2100,1,1,0,0):x)},
$S:z+2}
B.bMS.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
B.bMT.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bMU.prototype={
$0(){var x=this.c
return B.akM(this.a,this.b,x.a,x.d)},
$S:0}
B.bMV.prototype={
$1(d){return this.a.a0(0,$.amd().gaX(),y.h).OV(this.b.a)},
$S:129}
B.bIo.prototype={
$1(d){return d.c},
$S:142}
B.bIu.prototype={
$2(d,e){return A.jb(d,this.a.lh(e))},
$S:42}
B.bIr.prototype={
$0(){return D.bMx},
$S:87}
B.bIq.prototype={
$2(d,e){return A.So(A.a([new A.io("Tentar outra vez",new B.bIh(this.a),!1,null)],y.p),C.ft,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1300}
B.bIh.prototype={
$0(){return this.a.ak($.d_o())},
$S:0}
B.bIp.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIs(g),e=new B.bIt(g,this.b),d=J.cb(a4),a0=d.d_(a4,0,new B.bIi()),a1=d.d_(a4,0,new B.bIj(f)),a2=d.d_(a4,0,new B.bIk(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.aq(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C6(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aM(a1,!1)
w=a0>0
v=w?"de "+A.aM(a0,!1):"gastos"
u=w?C.k.af(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aK(a1/a0*100)+"% dos tetos":""
x=A.ve(i,""+t+" "+r+w,"Todos os eventos",C.hK,u,v,x)
v=y.p
u=A.a([new G.Sp(A.a([new G.xm("Gasto",A.aM(a1,!1),h),new G.xm("Por pagar",A.aM(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eB(a4,0,y.A),r=J.aq(t.a),q=t.b,t=new A.c0(r,q,A.u(t).i("c0<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.a3(q+n,r.gE(r)):A.aj(A.c3())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iI)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a3,i,i,C.ae,i,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aM(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aM(j[3]+e.$1(j[0]),!1))}n=A.A(A.a([n,C.b1,A.h(C.e.a2(k," \xb7 "),i,i,i,i,C.P,i,i,i)],v),C.H,C.h,C.l,0,C.u)
k=o.a.a
l.push(new A.hx(A.B(i,A.N(A.a([new A.bP(1,C.aw,n,i),C.ah,A.h(A.aM(k[1]+f.$1(k[0]),!1),i,i,i,i,C.ae,i,i,i),C.bn,C.lT],v),C.w,C.h,C.l,0,i,i),C.r,C.ap,C.d9,i,i,i,i,C.cn,i,i,i),new B.bIl(o,g),i,i))
C.e.n(w,l)}return A.A(A.a([x,new A.dP("N\xfameros",i,u,16,i),new A.dP("Por evento \xb7 "+d,i,w,16,i),D.aBL],v),C.G,C.h,C.l,0,C.u)},
$S:1301}
B.bIs.prototype={
$1(d){return J.d4(this.a.e,new B.bIf(d)).d_(0,0,new B.bIg())},
$S:173}
B.bIf.prototype={
$1(d){return d.b===this.a&&d.x!==C.eP},
$S:66}
B.bIg.prototype={
$2(d,e){return d+e.w},
$S:457}
B.bIt.prototype={
$1(d){return J.d4(this.a.e,new B.bIm(d)).d_(0,0,new B.bIn(this.b))},
$S:173}
B.bIm.prototype={
$1(d){return d.b===this.a&&d.x!==C.eP},
$S:66}
B.bIn.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:457}
B.bIi.prototype={
$2(d,e){return d+e.a[2]},
$S:256}
B.bIj.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:256}
B.bIk.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:256}
B.bIl.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYM.prototype={
$0(){return A.ai(this.a).au("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dHF","cXt",15)
w(B,"dHE","doB",16)
v(B.DK.prototype,"giM","d7",4)
var t
u(t=B.abN.prototype,"gapR","TT",5)
v(t,"gaRY","Qz",6)
v(B.abs.prototype,"gaT9","aTa",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[B.cFP,B.cFL,B.cFM,B.cFN,B.cFO,B.b5l,B.b5m,B.b5i,B.b5k,B.bKy,B.bKf,B.bKg,B.bKe,B.bKn,B.bKo,B.bKx,B.bKq,B.cCq,B.bML,B.bMO,B.bJF,B.bWF,B.bHd,B.bHo,B.bHk,B.bMP,B.bMQ,B.bMS,B.bMT,B.bMV,B.bIo,B.bIp,B.bIs,B.bIf,B.bIt,B.bIm])
x(A.J,[B.DA,B.b3H,B.A1,B.Ml,B.a7M,B.aCi])
x(A.cO,[B.b3I,B.bKd,B.bKp,B.cCz,B.bMR,B.bIu,B.bIq,B.bIg,B.bIn,B.bIi,B.bIj,B.bIk])
w(B.DK,A.fd)
x(A.bQ,[B.b5j,B.bKh,B.bKi,B.bKz,B.bKr,B.bKs,B.bKm,B.bKt,B.bKl,B.bKu,B.bKk,B.bKv,B.bKj,B.bKw,B.cCo,B.cCp,B.bMN,B.bMM,B.bJG,B.bWB,B.bWC,B.bWD,B.bWE,B.bHr,B.bHq,B.bHs,B.bHp,B.bHe,B.bHj,B.bHi,B.bHl,B.bHh,B.bHm,B.bHg,B.bHn,B.bHf,B.bMU,B.bIr,B.bIh,B.bIl,B.aYM])
w(B.abM,A.f7)
w(B.a0N,A.dC)
w(B.abN,A.dy)
x(A.H,[B.aPP,B.aDG,B.aDd,B.Xw,B.ai1,B.anA])
x(A.eq,[B.aDH,B.aGr,B.X7,B.aCn])
w(B.NK,A.G)
w(B.abs,A.Z)})()
A.bn(b.typeUniverse,JSON.parse('{"DK":{"fd":["A1"]},"a0N":{"G":[],"e":[],"f":[]},"NK":{"G":[],"e":[],"f":[]},"X7":{"G":[],"e":[],"f":[]},"abN":{"Z":["a0N"]},"aPP":{"H":[],"e":[],"f":[]},"aDG":{"H":[],"e":[],"f":[]},"aDH":{"G":[],"e":[],"f":[]},"aDd":{"H":[],"e":[],"f":[]},"aGr":{"G":[],"e":[],"f":[]},"Xw":{"H":[],"e":[],"f":[]},"abs":{"Z":["NK"]},"ai1":{"H":[],"e":[],"f":[]},"aCn":{"G":[],"e":[],"f":[]},"anA":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ay<fa>"),k:x("ay<t<rS>>"),u:x("ay<t<fT>>"),o:x("ay<t<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>>"),y:x("ay<a5<c,t<c>>>"),x:x("zE"),b:x("uL"),d:x("rX"),Z:x("ph"),v:x("ee"),_:x("i4"),h:x("DK"),g:x("A1"),D:x("r<DA>"),r:x("r<i4>"),Q:x("r<xm>"),F:x("r<el>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>"),E:x("r<a7M>"),c:x("r<Ml>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fT>"),t:x("t<fy>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>"),P:x("a5<c,@>"),w:x("df"),A:x("+eventId,spentByHand,total,unpaidByHand(c,R,R,R)"),e:x("lM"),N:x("c"),B:x("aCi"),q:x("dm"),i:x("R"),z:x("@"),S:x("v"),X:x("J?"),T:x("c?"),I:x("R?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.agl=new A.aQ(0,1/0,32,1/0)
D.av3=new A.a0(8,5,6,5)
D.c9d=new A.C("Prazo",null,C.ae,null,null,null,null,null,null,null,null)
D.aAE=new A.bP(1,C.aw,D.c9d,null)
D.bzW=x([],y.r)
D.aAL=new B.A1(!1,D.bzW)
D.aBJ=new A.kM("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBL=new A.kM("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBU=new A.kM("Sem pagamentos nesta vista.",8,null)
D.aFw=new A.dE(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bw,null,null,C.bw,C.bw,!0,null,null,null,null)
D.aFS=new A.dE(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bw,null,null,C.bw,C.bw,!0,null,null,null,null)
D.aG4=new A.dE(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aHU=new A.ex("Pago",C.de,null)
D.aI0=new A.ex("Por pagar",C.hI,null)
D.aI7=new A.m5("Or\xe7amento","Todos os teus eventos",null)
D.aId=new A.m5("Or\xe7amento",null,null)
D.bzb=x(["catering"],y.s)
D.bAd=x([],y.D)
D.bAe=x([],y.n)
D.bAH=x(["flowers_decor"],y.s)
D.bCe=x(["music_dj","bands_musicians"],y.s)
D.bCN=x(["photography"],y.s)
D.bE_=x(["venue"],y.s)
D.ca9=new A.C("A despesa precisa de um t\xedtulo",null,C.mB,null,null,null,null,null,null,null,null)
D.bLy=new A.Q(V.O9,D.ca9,null)
D.aFk=new A.tn("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kG,null)
D.bLT=new A.Q(C.fU,D.aFk,null)
D.bMx=new A.Q(Q.v6,C.em,null)
D.bZ8=new A.vW(!1,6,!0,null)
D.c4V=new A.P(!0,C.A,null,null,null,null,14,C.cY,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c75=new A.P(!0,null,null,null,null,null,null,C.cY,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaY=new A.P(!0,C.A,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cd9=new A.C("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.cf,null,null,null,null,null,null,null,null)
D.cdy=new A.C("Nova despesa",null,C.bk,null,null,null,null,null,null,null,null)
D.cdB=new A.C("\u20ac",null,D.aaY,null,null,null,null,null,null,null,null)
D.cfM=new A.C("Indica um valor v\xe1lido",null,C.mB,null,null,null,null,null,null,null,null)
D.ci3=new A.C("VALOR",null,C.aO,null,null,null,null,null,null,null,null)
D.Jx=new B.abM(0,"all")
D.acs=new B.abM(1,"paid")
D.act=new B.abM(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUQ","d_o",()=>C.bX.$1$1(new B.cFP(),y.m))
x($,"dVF","amd",()=>A.mV(B.dHE(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["4IooqrEJe1TdgHkm/TVOnIYxMRc="]=a.current})($__dart_deferred_initializers__);