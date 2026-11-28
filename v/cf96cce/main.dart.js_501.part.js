((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,Q,E,R,S,F,G,T,H,K,U,V,W,I,X,B={cFF:function cFF(){},cFB:function cFB(){},cFC:function cFC(){},cFD:function cFD(){},cFE:function cFE(){},
dGE(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v)u.push(new B.DA(x[v]))
return new B.b3G(d.b,u)},
DA:function DA(d){this.a=d},
b3G:function b3G(d,e){this.a=d
this.b=e},
b3H:function b3H(){},
cXj(d){var x="category",w="due_date",v=J.a7(d),u=A.a1(v.h(d,"id")),t=A.a1(v.h(d,"wedding_id")),s=A.a1(v.h(d,"title")),r=B.dCZ(B.dbV(A.D(v.h(d,x)))),q=B.dbV(A.D(v.h(d,x))),p=A.dw(v.h(d,"amount")),o=v.h(d,w)==null?null:A.db(A.a1(v.h(d,w)))
v=A.dX(v.h(d,"paid"))
return new H.i4(u,t,s,r,q,p,o,v===!0)},
dbV(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dCZ(d){var x
A:{if("venue"===d){x=E.yc
break A}if("catering"===d){x=E.y8
break A}if("photography"===d){x=E.y9
break A}if("music_dj"===d||"bands_musicians"===d){x=E.ya
break A}if("flowers_decor"===d){x=E.yb
break A}x=null
break A}return x},
dor(){return new B.DK()},
A1:function A1(d,e){this.a=d
this.b=e},
b5k:function b5k(){},
b5l:function b5l(){},
DK:function DK(){this.b=this.x=null},
b5h:function b5h(){},
b5i:function b5i(d,e){this.a=d
this.b=e},
b5j:function b5j(d){this.a=d},
Cx(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cx=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akR(),$async$Cx)
case 3:u=$.S()
t=u.b
t===$&&A.b()
x=4
return A.d(t.R("events").ao(0,"partner_name_1, partner_name_2").W("id",d).d3(),$async$Cx)
case 4:s=f
x=5
return A.d(u.b.R("bookings").ao(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("wedding_id",d).da(0,"event_date",!1),$async$Cx)
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
return A.d(t.R("payments").ao(0,"booking_id, type, status, amount, paid_at, due_at, provider").ep("booking_id",u).tK(0,"created_at"),$async$Cx)
case 9:q=f
case 7:u=$.S()
t=u.b
t===$&&A.b()
x=10
return A.d(t.R("expenses").ao(0,"title, category, amount, due_date, paid").W("wedding_id",d).tK(0,"due_date"),$async$Cx)
case 10:p=f
x=11
return A.d(u.b.R("budget_categories").ao(0,"name, amount").W("wedding_id",d).tK(0,"position"),$async$Cx)
case 11:o=f
x=12
return A.d(u.b.R("budgets").ao(0,"total").W("wedding_id",d).d3(),$async$Cx)
case 12:n=f
m=F.cX5(F.cCR(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.aq(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cA(j==null?"":j)
i=k.h(l,"category")
i=J.cA(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.f5(A.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.dq(A.q(g))
g=g==null?null:g.e0()}u.push(new B.Ml(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.aq(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cA(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.f5(A.q(k))
if(k==null)k=0}t.push(new B.a7M(i,k))}l=n==null?null:F.cXC(J.i(n,"total"))
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
dlK(){return new B.a0N(null)},
aUd(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUd=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.fR(!0,new B.cCg(e,new A.aF(new A.bH(u,C.aI,C.aA),$.ab())),d,y.i),$async$aUd)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUd,w)},
akL(d,e,f,g){return B.dCM(d,e,f,g)},
dCM(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akL=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUd(d,"Teto para "+f,g),$async$akL)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CI().gaX(),y.x).OY(f,r),$async$akL)
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
return A.m($async$akL,w)},
d9Z(d){var x=A.U(d,y._)
C.e.cO(x,new B.cCp())
return x},
das(d){var x=C.f.aY(C.j.k(A.aH(d)),2,"0"),w=C.f.aY(C.j.k(A.ax(d)),2,"0"),v=A.aD(d)===A.aD(new A.ad(Date.now(),0,!1))?"":"/"+A.aD(d)
return x+"/"+w+v},
cWs(d){var x,w,v,u
if(d===C.k.fD(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aZ(w,".",",")}v=x.split(",")
u=A.CE(v[0],A.aT("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHc(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abM:function abM(d,e){this.a=d
this.b=e},
a0N:function a0N(d){this.a=d},
abN:function abN(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKg:function bKg(d){this.a=d},
bKh:function bKh(d){this.a=d},
bKy:function bKy(d){this.a=d},
bKx:function bKx(){},
bKc:function bKc(){},
bKe:function bKe(){},
bKf:function bKf(){},
bKd:function bKd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKm:function bKm(){},
bKn:function bKn(d){this.a=d},
bKw:function bKw(d){this.a=d},
bKo:function bKo(){},
bKp:function bKp(){},
bKq:function bKq(d,e){this.a=d
this.b=e},
bKr:function bKr(d){this.a=d},
bKl:function bKl(d){this.a=d},
bKs:function bKs(d){this.a=d},
bKk:function bKk(d){this.a=d},
bKt:function bKt(d){this.a=d},
bKj:function bKj(d){this.a=d},
bKu:function bKu(d){this.a=d},
bKi:function bKi(d){this.a=d},
bKv:function bKv(d){this.a=d},
cCg:function cCg(d,e){this.a=d
this.b=e},
cCe:function cCe(d){this.a=d},
cCf:function cCf(d,e){this.a=d
this.b=e},
cCp:function cCp(){},
aPO:function aPO(d,e,f){this.c=d
this.d=e
this.a=f},
aDF:function aDF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDG:function aDG(d,e){this.e=d
this.a=e},
bMK:function bMK(){},
bMM:function bMM(d,e){this.a=d
this.b=e},
bMN:function bMN(d){this.a=d},
bML:function bML(d,e,f){this.a=d
this.b=e
this.c=f},
aDc:function aDc(d,e){this.c=d
this.a=e},
bJF:function bJF(d){this.a=d},
bJE:function bJE(d){this.a=d},
aGq:function aGq(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bWE:function bWE(d,e){this.a=d
this.b=e},
bWA:function bWA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWB:function bWB(d){this.a=d},
bWC:function bWC(d,e){this.a=d
this.b=e},
bWD:function bWD(d,e){this.a=d
this.b=e},
Xw:function Xw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCh:function aCh(d,e,f,g,h){var _=this
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
bHq:function bHq(d){this.a=d},
bHp:function bHp(){},
bHr:function bHr(d){this.a=d},
bHo:function bHo(){},
bHc:function bHc(){},
bHd:function bHd(d){this.a=d},
bHn:function bHn(){},
bHi:function bHi(d){this.a=d},
bHj:function bHj(d){this.a=d},
bHh:function bHh(d,e){this.a=d
this.b=e},
bHk:function bHk(d){this.a=d},
bHg:function bHg(d){this.a=d},
bHl:function bHl(d){this.a=d},
bHf:function bHf(d){this.a=d},
bHm:function bHm(d,e){this.a=d
this.b=e},
bHe:function bHe(d,e){this.a=d
this.b=e},
X7:function X7(d,e){this.e=d
this.a=e},
bMO:function bMO(d){this.a=d},
bMP:function bMP(d){this.a=d},
bMQ:function bMQ(){},
bMR:function bMR(){},
bMS:function bMS(d){this.a=d},
bMT:function bMT(d,e,f){this.a=d
this.b=e
this.c=f},
bMU:function bMU(d,e){this.a=d
this.b=e},
ai0:function ai0(d,e,f){this.c=d
this.d=e
this.a=f},
aCm:function aCm(d,e,f){this.e=d
this.f=e
this.a=f},
bIn:function bIn(){},
bIt:function bIt(d){this.a=d},
bIq:function bIq(){},
bIp:function bIp(d){this.a=d},
bIg:function bIg(d){this.a=d},
bIo:function bIo(d,e,f){this.a=d
this.b=e
this.c=f},
bIr:function bIr(d){this.a=d},
bIe:function bIe(d){this.a=d},
bIf:function bIf(){},
bIs:function bIs(d,e){this.a=d
this.b=e},
bIl:function bIl(d){this.a=d},
bIm:function bIm(d){this.a=d},
bIh:function bIh(){},
bIi:function bIi(d){this.a=d},
bIj:function bIj(d){this.a=d},
bIk:function bIk(d,e){this.a=d
this.b=e},
anz:function anz(d,e){this.c=d
this.a=e},
aYL:function aYL(d){this.a=d},
deV(d){var x
switch(d){case E.yc:x=D.bDZ
break
case E.y8:x=D.bza
break
case E.y9:x=D.bCM
break
case E.ya:x=D.bCd
break
case E.yb:x=D.bAG
break
default:x=C.a8
break}return x}},D,L,Y
J=c[1]
A=c[0]
C=c[2]
M=c[219]
N=c[205]
O=c[188]
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
B.b3G.prototype={
gpX(){return C.e.d_(this.b,0,new B.b3H())},
gaCe(){var x=this.a
return x===0?0:C.k.af(this.gpX()/x,0,1)}}
B.A1.prototype={
gbAu(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5k(),w),w.i("z.E"))
return x},
gbAQ(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5l(),w),w.i("z.E"))
return x},
axj(d,e){var x=e==null?this.a:e
return new B.A1(x,d==null?this.b:d)},
ip(d){return this.axj(null,d)},
ax0(d){return this.axj(d,null)}}
B.DK.prototype={
d6(){var x=y.T,w=this.x=A.eQ(this).H(A.cH($.cm(),new B.b5h(),y.v,x),x)
if(w!=null)A.ji(new B.b5i(this,w),y.H)
return D.aAK},
c_(d,e){return this.bxX(0,e)},
bxX(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ip(!0))
u=$.S().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.R("expenses").cj(0).W("wedding_id",e).da(0,"created_at",!0),$async$c_)
case 2:v.sa4(0,new t.A1(s,r.d7(g,B.dHu(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$c_,w)},
VC(d){return this.bnM(d)},
bnM(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$VC=A.j(function(e,f){if(e===1)return A.k(f,w)
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
return A.d(r.d9(0,u).cj(0).dP(0),$async$VC)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cXj(s))
v.sa4(0,r.ax0(u))
return A.l(null,w)}})
return A.m($async$VC,w)},
OV(d){return this.bDo(d)},
bDo(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OV=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.ll(v.ga4(0).b,new B.b5j(d))
m=$.S().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.R("expenses").bh(0,A.T(["paid",!n.w,"updated_at",new A.ad(Date.now(),0,!1).cf()],u,u)).W("id",d).cj(0).dP(0),$async$OV)
case 2:t=l.cXj(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.K)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.ax0(m))
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
TS(d){return this.bdv(d)},
bdv(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TS=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKg(u))
x=1
break}u.p(new B.bKh(u))
t=u.gS()
s=$.cm()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gaX(),y.Z).ao(0,d),$async$TS)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$TS,w)},
ah(){this.aA()
A.ji(new B.bKy(this),y.H)},
Qz(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Qz=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.amc()
m=y.h
l=o.a0(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CI(),y.b).b
s=t==null?null:t.b
r=C.e.d_(o.a0(0,n,y.g).b,0,new B.bKc())
t=o.a0(0,$.cm(),y.v).b
q=t==null?null:t.gcu()
t=u.c
t.toString
x=3
return A.d(A.c9(null,new B.bKd(q,s,new B.bKe(),r),!1,t,!0,!0,null,y.B),$async$Qz)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.VC(new H.i4("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Qz,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.H($.CI(),y.b),a3=a1.H($.HV(),y.d),a4=a1.H($.amc(),y.g),a5=a2.b,a6=a5==null?e:B.dGE(a5,a3.b)
a5=A.j_(a1.H($.jd(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iT
a5=y.T
w=a1.H(A.cH($.cm(),new B.bKm(),y.v,a5),a5)
if(f.y){a1=f.gapO()
return A.cP(e,C.cT,A.or(C.fc,40,A.a([C.h_,D.aI6,L.cTS(a1,e),new B.aCm(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.d4(x,new B.bKn(w))
a1=a1.H($.ux(),y.l)
u=a1.gv(a1)
t=new B.bKw(u==null?C.f9:u)
a1=y._
a5=A.U(a4.gbAu(),a1)
for(s=v.a,r=J.cb(s),q=r.gX(s),p=v.b,o=v.$ti.i("h6<1>"),n=new A.h6(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i4("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbAQ(0),a1)
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
n.push(new H.i4("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.d9Z(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.d9Z(q)
break
default:a1=e}h=C.e.d_(q,0,new B.bKo())
s=a6==null
if(s)g=D.bAc
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bKp(),p),p.i("z.E"))}if(s)a1=D.bZ7
else{s=f.gaRU()
r=y.p
p=A.a([new A.pp(A.a([new A.qP(s,"Nova despesa",e)],r),e),D.aIc,L.cTS(f.gapO(),w),new B.aPO(a6,new B.bKq(f,a6),e)],r)
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
C.e.n(o,A.a([new O.m4(A.a([new A.el("Todos",l===D.Jx,n+m,new B.bKr(f),e),new A.el("Pendentes",l===D.acs,m,new B.bKs(f),e),new A.el("Pagos",l===D.acr,n,new B.bKt(f),e)],y.F),4,!0,e),C.au],r))}o.push(new B.aGq(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.dP("Pagamentos",e,o,16,e))
a1=A.a([new A.kM(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDF(g,f.x,new B.bKu(f),e))
p.push(new A.dP("Categorias",e,a1,16,e))
p.push(new A.dP("Exportar",e,A.a([new F.DL("Gastos e parceiros",!1,new B.bKv(f),e)],r),16,e))
a1=A.or(C.fc,40,p,e,!0,!1)}return A.cP(e,C.cT,a1,!0,e)},
IP(d){return this.aYV(d)},
aYV(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IP=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUd(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IP)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a0(0,$.CI().gaX(),y.x).a_v(r),$async$IP)
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
B.aPO.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpX()>0?"Gastos "+A.aM(t.gpX(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vd(new A.io("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hJ,0,"por definir","\u2014")}x=C.k.aK(t.gaCe()*100)
w=s-t.gpX()<0?"Acima do teto":"Ainda tens"
v=A.aM(Math.abs(s-t.gpX()),!1)
s=A.aM(s,!1)
u=t.gaCe()
return A.aW(A.vd(I.a2o,"Gastos "+A.aM(t.gpX(),!1)+" \xb7 "+x+"% do teto",w,C.hJ,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDF.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.e5(s,0,A.eV(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.K)(r),++w)p.push(new B.aDG(r[w],null))
q=A.a([A.fc(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.io(u,v.e,!0,null))}return A.A(q,C.G,C.h,C.l,0,C.u)}}
B.aDG.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(A.cH($.cm(),new B.bMK(),y.v,m),m)
if(l==null)x=C.rx
else{m=e.H($.d_f().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rx:m}m=A.a([],y.s)
for(w=B.deV(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bMM(this,d)
if(w)return A.jW(!1,!1,p,v,A.aM(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.ol("P\xf4r teto",new B.bML(this,d,e),!0,p))
w=A.aM(o.b,!1)
u=A.aM(n,!1)
s=y.p
q=A.a([A.aG(new A.Ti(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aE,new B.anz(m,p)],s))
return A.jW(!1,!1,p,v,w+" de "+u,o.a,A.A(q,C.dk,C.h,C.K,0,C.u))}}
B.aDc.prototype={
u(d){var x,w,v=null,u=$.at,t=$.fv.cc(0.55),s=A.X(18),r=A.X(12),q=this.c,p=q.e
r=A.fZ(r,A.aG(p==null?A.kI(A.b2(C.hC,u,v,v,v),C.t,!0):A.tj(p,144,new B.bJE(u),!1,C.bR,A.wx(),!1,v,v,v),48,48),C.ba)
p=A.h(q.b,1,C.a3,v,v,D.c4T,v,v,v)
x=A.b2(C.i5,u,v,v,14)
w=q.d
q=w>0?q.gQ8()+" \xb7 "+A.aM(w,!1):q.gQ8()
w=y.p
return new A.Q(C.cr,A.aW(A.B(v,A.O(A.a([r,C.af,A.a4(A.A(A.a([p,C.ii,A.O(A.a([x,C.el,new A.de(1,C.bc,A.h(q,1,C.a3,v,v,A.aI(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bp,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.w,C.h,C.l,0,v,v)],w),C.H,C.h,C.l,0,C.u),1),A.b2(C.i7,u,v,v,v)],w),C.w,C.h,C.l,0,v,v),C.r,v,v,new A.M(t,v,v,s,v,v,C.y),v,v,v,C.dT,v,v,v),new B.bJF(d),v),v)}}
B.aGq.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.So(A.a([new A.io("+ Nova despesa",this.f,!0,j)],y.p),C.fs,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBT
x=new B.bWE(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+B.das(m)
v.push(new W.DX(new A.cx(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bWA(d,e,s,q),A.HP(m)===C.fk,j))
continue}p=r?new B.bWB(d):new B.bWC(x,s)
v.push(new B.Xw(s,p,r||s.w?j:new B.bWD(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xw&&v[k-1] instanceof B.Xw)u.push(C.iI)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBI)
return A.A(i,C.G,C.h,C.l,0,C.u)}}
B.Xw.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aM(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.das(w))
v=C.e.a2(v," \xb7 ")
if(u)u=D.aHT
else{u=this.e
u=u!=null?new A.ol("Marcar pago",u,!0,null):D.aI_}return A.jW(!1,!1,null,this.d,v,x.c,u)}}
B.aCh.prototype={}
B.NK.prototype={
P(){var x=$.ab()
return new B.abs(new A.aF(C.al,x),new A.aF(C.al,x))}}
B.abs.prototype={
ah(){var x=this
x.aA()
x.d.am(0,new B.bHq(x))
x.e.am(0,new B.bHr(x))},
m(){var x=this.d,w=$.ab()
x.Z$=w
x.V$=0
x=this.e
x.Z$=w
x.V$=0
this.a6()},
gai3(){var x=C.f.C(this.e.a.a)
x=A.aZ(x," ","")
return A.f5(A.aZ(x,",","."))},
aT6(){var x,w,v,u,t=this,s=t.gai3()
t.p(new B.bHd(t))
x=C.f.C(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.ad(new B.aCh(x,s,u,t.r,v))},
asy(d,e,f,g,h){var x=null,w=h?C.jo:x,v=y.p,u=A.a4(A.A(A.a([A.h(d,x,x,x,x,C.ae,x,x,x),C.b1,A.h(e,x,x,x,x,C.P,x,x,x)],v),C.H,C.h,C.l,0,C.u),1),t=f?C.br:x,s=f?x:A.bz(C.lw,1.5),r=f?U.vL:x
return A.b8(x,!0,x,A.cW(C.bV,A.B(x,A.O(A.a([u,A.B(x,r,C.r,x,x,new A.M(t,x,s,x,x,x,C.av),x,24,x,x,x,x,24)],v),C.w,C.h,C.l,0,x,x),C.r,x,C.d9,new A.M(x,x,w,x,x,x,C.y),x,x,x,C.hu,x,x,x),C.Z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aV),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bjW(d,e,f,g){return this.asy(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gai3()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.C(x.a.a).length!==0&&j>0
w=new B.bHn()
t=y.w
s=A.aw(d,k,t).w
r=y.p
q=A.a([D.cdv],r)
q.push(A.h(l.a.c,k,k,k,k,C.P,k,k,k))
q=A.O(A.a([A.a4(A.A(q,C.H,C.h,C.l,0,C.u),1),A.b8(k,!0,k,A.cW(k,A.B(k,C.o6,C.r,k,k,C.cg,k,44,k,k,k,k,44),C.Z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHi(d),k,k,k,k,k,k,!1,C.aV),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.w,C.h,C.l,0,k,k)
p=A.X(22)
o=A.a([D.chZ,A.O(A.a([Y.d3B(A.cw(k,C.a8,!1,k,!0,C.z,k,A.cz(),l.e,k,k,k,k,k,2,D.aFQ,C.Z,!0,k,!0,k,!1,k,C.aF,k,k,k,k,C.hT,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.at,k,k,k,k,k,k,k,k,k,k,k,D.aaX,!0,C.dE,k,C.b3,k,k,k,k)),C.bn,D.cdx],r),C.eS,C.bW,C.l,0,C.aL,k)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cWs(v)+" no teto":"Passa o teto em "+B.cWs(-v)
o.push(A.h(m,k,k,k,k,A.aI(k,k,n?C.U:C.c0,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.cfH)
p=A.B(k,A.A(o,C.w,C.h,C.l,0,C.u),C.r,k,k,new A.M(C.a7,k,k,p,k,k,C.y),k,k,k,C.bj,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aS,k,k,k)
n=A.X(26)
m=l.x&&C.f.C(x.a.a).length===0?A.bz(C.c0,1.5):k
n=A.a([p,C.a1,new A.Q(C.cr,o,k),A.B(C.bg,A.cw(k,C.a8,!1,k,!0,C.z,k,A.cz(),x,k,k,k,k,k,2,D.aFv,C.Z,!0,k,!0,k,!1,k,C.aF,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.at,k,k,k,k,k,k,k,k,k,k,k,C.ff,!0,C.as,k,C.hb,k,k,k,k),C.r,k,k,new A.M(C.a7,k,m,n,k,k,C.y),k,52,k,C.hv,k,k,k)],r)
if(l.x&&C.f.C(x.a.a).length===0)n.push(D.bLx)
n.push(C.a1)
n.push(new X.a1n(l.r,new B.bHj(l),k))
n.push(C.a1)
n.push(new A.Q(C.cr,A.h("ESTADO",k,k,k,k,C.aS,k,k,k),k))
x=A.X(22)
p=l.w
o=!p
o=A.a([l.bjW("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHk(l)),l.asy("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHl(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.aH(p)))
m=l.f
m.toString
m=A.q(w.$1(A.ax(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aD(w)}o.push(A.b8(k,!0,k,A.cW(C.bV,A.aG(A.O(A.a([D.aAD,A.h(w,k,k,k,k,C.ch,k,k,k),C.el,C.lU],r),C.w,C.h,C.l,0,k,k),56,k),C.Z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHm(l,d),k,k,k,k,k,k,!1,C.aV),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.B(k,A.A(o,C.w,C.h,C.l,0,C.u),C.r,k,k,new A.M(C.a7,k,k,x,k,k,C.y),k,k,k,C.d2,k,k,k))
n.push(C.a1)
n.push(D.cd6)
x=A.dQ(A.A(n,C.G,C.h,C.l,0,C.u),C.z,k,C.ed,k,k,C.a2)
t=A.aw(d,C.b4,t).w
w=A.cq(u?C.A:C.A.cc(0.35),k,k,C.t,k,k,C.ad,k,k,C.eJ)
return new A.Q(new A.a0(0,0,0,s.f.d),A.A(A.a([new A.Q(C.jD,q,k),new A.de(1,C.bc,x,k),new A.Q(new A.a0(20,16,20,20+t.r.d),A.aG(A.bD(A.h(u?"Guardar \xb7 "+B.cWs(j):"Guardar",k,k,k,k,k,k,k,k),l.gaT5(),w),52,k),k)],r),C.G,C.h,C.K,0,C.u),k)}}
B.X7.prototype={
bg(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.CI(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eU(new A.a6(j,new B.bMO(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.H($.amc(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bMP(l),w),w.i("z.E"))
C.e.cO(v,new B.bMQ())
j=y.T
u=e.H(A.cH($.cm(),new B.bMR(),y.v,j),j)
t=B.deV(l.e.c)
if(u==null)s=K.FK
else{j=e.H($.aW0().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.FK
j=J.d4(j,new B.bMS(t))
s=A.U(j,j.$ti.i("z.E"))}j=A.aw(d,k,y.w).w
w=A.bO(A.B(k,k,C.r,k,k,new A.M(C.bD,k,k,A.X(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ar(d).ok.r,k,k,k)
q=A.a4(new B.ai0("Gasto",A.aM(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a1,r,C.aC,A.O(A.a([q,C.ak,A.a4(A.aW(new B.ai0("Teto \xb7 tocar para mudar",p===0?"Definir":A.aM(p,!1),k),new B.bMT(d,e,x),k),1)],o),C.w,C.h,C.l,0,k,k)],o)
if(s.length!==0){w=A.a([C.bi,A.h("Contratado na app",k,k,k,k,A.ar(d).ok.w,k,k,k),C.T],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.K)(s),++n)w.push(new B.aDc(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.h("Despesas",k,k,k,k,A.ar(d).ok.w,k,k,k))
p.push(C.T)
w=v.length
if(w===0)p.push(D.bLS)
else for(n=0;n<v.length;v.length===w||(0,A.K)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.hd,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aY(C.j.k(A.aH(q)),2,"0")+"/"+C.f.aY(C.j.k(A.ax(q)),2,"0")+"/"+A.aD(q),k,k,k,k,k,k,k,k)
p.push(A.jl(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aM(m.f,!1),k,k,k,k,D.c73,k,k,k),C.ag,new R.Df(m.w,new B.bMU(e,m),k,$.at,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.Jz,k)],o),C.w,C.h,C.K,0,k,k),k))}return A.bC(!0,new A.ek(new A.aQ(0,1/0,0,j.a.b*0.8),A.d0(p,k,N.Dg,k,k,!1,C.a2,!0),k),k,C.a_,!0)}}
B.ai0.prototype={
u(d){var x=null,w=A.X(16)
return A.B(x,A.A(A.a([A.h(this.c,x,x,x,x,C.bd,x,x,x),C.au,A.h(this.d,x,x,x,x,P.aaJ,x,x,x)],y.p),C.H,C.h,C.l,0,C.u),C.r,x,x,new A.M(C.a7,x,x,w,x,x,C.y),x,x,x,C.cz,x,x,x)}}
B.aCm.prototype={
bg(d,e){var x,w=y.t,v=e.H(A.cH($.cm(),new B.bIn(),y.v,w),w),u=e.H($.d_e(),y.o)
w=e.H($.ux(),y.l)
x=w.gv(w)
return A.hp(u,new B.bIo(this,new B.bIt(x==null?C.f9:x),v),new B.bIp(e),new B.bIq(),!1,!0,!1)}}
B.anz.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.at,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
t=$.fv
s=new A.b4(999,999)
r=new A.bc(o.cc(0.25),1,C.aj,-1)
q=A.b2(C.i5,o,p,p,13)
t=A.B(p,A.O(A.a([q,M.z3,new A.de(1,C.bc,A.h(u,1,C.a3,p,p,new A.P(!0,o,p,p,p,p,14,C.cY,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b2(C.i7,o,p,p,16)],n),C.w,C.h,C.K,0,p,p),C.r,p,D.agk,new A.M(t,p,new A.dS(r,r,r,r),new A.ch(s,s,s,s),p,p,C.y),p,p,p,D.av2,p,p,p)
m.push(new A.jp(new A.n4(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hx(t,new B.aYL(d),p,p),p))}return A.e7(C.bf,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["x(i4)","R(R,i4)","v(i4,i4)","R(R,DA)","A1()","F<~>(c?)","F<~>()","NK(N)","x(DA)","F<lM>()","X7(N)","~(i4)","~()","x(np)","x(rR)","i4(a5<c,@>)","DK()"])
B.cFF.prototype={
$1(d){return this.aFw(d)},
aFw(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(A.cH($.cm(),new B.cFB(),y.v,f),f)
f=J.a7(e)
if(f.gY(e)){v=D.bAd
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.t();)u.push(t.gE(t).a)
t=$.S()
s=t.b
s===$&&A.b()
r=y.G
q=s.R("budgets").ao(0,"wedding_id, total").ep("wedding_id",u).b7(new B.cFC(),r)
p=t.b.R("budget_categories").ao(0,"wedding_id, amount").ep("wedding_id",u).b7(new B.cFD(),r)
o=t.b.R("expenses").ao(0,"wedding_id, amount, paid").ep("wedding_id",u).b7(new B.cFE(),r)
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
t.j(0,A.a1(k.h(l,"wedding_id")),A.dw(k.h(l,"total")))
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
u.push(new A.aN1([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1296}
B.cFB.prototype={
$1(d){return d.c},
$S:147}
B.cFC.prototype={
$1(d){return d},
$S:31}
B.cFD.prototype={
$1(d){return d},
$S:31}
B.cFE.prototype={
$1(d){return d},
$S:31}
B.b3H.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5k.prototype={
$1(d){return d.w},
$S:z+0}
B.b5l.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5h.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.b5i.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.b5j.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKg.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKh.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bKy.prototype={
$0(){return this.a.gS().a0(0,$.CI().gaX(),y.x).ZM(0).eu(new B.bKx())},
$S:1}
B.bKx.prototype={
$1(d){},
$S:13}
B.bKc.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKe.prototype={
$1(d){return A.CE(C.k.a8(d,0),A.aT("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKf(),null)+" \u20ac"},
$S:119}
B.bKf.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bKd.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a2(v," \xb7 ")
u=x&&u>0?u:null
return new B.NK(v,u,w.d,null)},
$S:z+7}
B.bKm.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bKn.prototype={
$1(d){return d.x!==C.eP&&d.b===this.a},
$S:68}
B.bKw.prototype={
$2(d,e){return A.jb(d,this.a.lh(e))},
$1(d){return this.$2(d,null)},
$S:1299}
B.bKo.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKp.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bKq.prototype={
$0(){return this.a.IP(this.b.a)},
$S:0}
B.bKr.prototype={
$0(){var x=this.a
return x.p(new B.bKl(x))},
$S:0}
B.bKl.prototype={
$0(){return this.a.w=D.Jx},
$S:0}
B.bKs.prototype={
$0(){var x=this.a
return x.p(new B.bKk(x))},
$S:0}
B.bKk.prototype={
$0(){return this.a.w=D.acs},
$S:0}
B.bKt.prototype={
$0(){var x=this.a
return x.p(new B.bKj(x))},
$S:0}
B.bKj.prototype={
$0(){return this.a.w=D.acr},
$S:0}
B.bKu.prototype={
$0(){var x=this.a
return x.p(new B.bKi(x))},
$S:0}
B.bKi.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bKv.prototype={
$0(){return B.Cx(this.a.gS().a0(0,$.cm(),y.v).b.a)},
$S:z+9}
B.cCg.prototype={
$1(d){var x=null,w=this.b
return new A.eR(A.h(this.a,x,x,x,x,x,x,x,x),A.cw(x,C.a8,!0,x,!0,C.z,x,A.cz(),w,x,x,x,x,x,2,D.aG3,C.Z,!0,x,!0,x,!1,x,C.aF,x,x,x,x,C.hT,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.at,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.as,x,C.b3,x,x,x,x),A.a([A.cu(C.cP,x,x,new B.cCe(d),x,x),A.bD(C.dw,new B.cCf(d,w),x)],y.p),x)},
$S:18}
B.cCe.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0}
B.cCf.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.C(this.b.a.a)
w=A.aZ(w," ","")
return x.ad(A.f5(A.aZ(w,",",".")))},
$S:0}
B.cCp.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bB(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bB(2100,1,1,0,0):x)},
$S:z+2}
B.bMK.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bMM.prototype={
$0(){return A.c9(null,new B.bMN(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bMN.prototype={
$1(d){return new B.X7(this.a.e.a,null)},
$S:z+10}
B.bML.prototype={
$0(){return B.akL(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bJF.prototype={
$0(){var x=this.a
A.am(x,!1).bB()
A.ai(x).au("/bookings",null,y.X)},
$S:0}
B.bJE.prototype={
$3(d,e,f){return A.kI(A.b2(C.hC,this.a,null,null,null),C.t,!0)},
$S:126}
B.bWE.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.amc().gaX(),y.h).OV(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a3(A.c6(v,v,v,v,v,C.z,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.V,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bWA.prototype={
$0(){var x=this
return A.rG(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bWB.prototype={
$0(){return A.ai(this.a).au("/bookings",null,y.X)},
$S:0}
B.bWC.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bWD.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHq.prototype={
$0(){return this.a.p(new B.bHp())},
$S:0}
B.bHp.prototype={
$0(){},
$S:0}
B.bHr.prototype={
$0(){return this.a.p(new B.bHo())},
$S:0}
B.bHo.prototype={
$0(){},
$S:0}
B.bHc.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bHd.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHn.prototype={
$1(d){return C.f.aY(C.j.k(d),2,"0")},
$S:40}
B.bHi.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0}
B.bHj.prototype={
$1(d){var x=this.a
return x.p(new B.bHh(x,d))},
$S:105}
B.bHh.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHk.prototype={
$0(){var x=this.a
return x.p(new B.bHg(x))},
$S:0}
B.bHg.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHl.prototype={
$0(){var x=this.a
return x.p(new B.bHf(x))},
$S:0}
B.bHf.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHm.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ad(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(T.a_l(v.b,A.bB(A.aD(t)-1,1,1,0,0),r,A.bB(A.aD(t)+5,1,1,0,0),null),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHe(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHe.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bMO.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bMP.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bMQ.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bB(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bB(2100,1,1,0,0):x)},
$S:z+2}
B.bMR.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bMS.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bMT.prototype={
$0(){var x=this.c
return B.akL(this.a,this.b,x.a,x.d)},
$S:0}
B.bMU.prototype={
$1(d){return this.a.a0(0,$.amc().gaX(),y.h).OV(this.b.a)},
$S:146}
B.bIn.prototype={
$1(d){return d.c},
$S:147}
B.bIt.prototype={
$2(d,e){return A.jb(d,this.a.lh(e))},
$S:41}
B.bIq.prototype={
$0(){return D.bMw},
$S:86}
B.bIp.prototype={
$2(d,e){return A.So(A.a([new A.io("Tentar outra vez",new B.bIg(this.a),!1,null)],y.p),C.fs,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1300}
B.bIg.prototype={
$0(){return this.a.ak($.d_e())},
$S:0}
B.bIo.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIr(g),e=new B.bIs(g,this.b),d=J.cb(a4),a0=d.d_(a4,0,new B.bIh()),a1=d.d_(a4,0,new B.bIi(f)),a2=d.d_(a4,0,new B.bIj(e)),a3=y.N
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
x=A.vd(i,""+t+" "+r+w,"Todos os eventos",C.hJ,u,v,x)
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
l.push(new A.hx(A.B(i,A.O(A.a([new A.bP(1,C.aw,n,i),C.ak,A.h(A.aM(k[1]+f.$1(k[0]),!1),i,i,i,i,C.ae,i,i,i),C.bn,C.lU],v),C.w,C.h,C.l,0,i,i),C.r,C.ap,C.d9,i,i,i,i,C.cn,i,i,i),new B.bIk(o,g),i,i))
C.e.n(w,l)}return A.A(A.a([x,new A.dP("N\xfameros",i,u,16,i),new A.dP("Por evento \xb7 "+d,i,w,16,i),D.aBK],v),C.G,C.h,C.l,0,C.u)},
$S:1301}
B.bIr.prototype={
$1(d){return J.d4(this.a.e,new B.bIe(d)).d_(0,0,new B.bIf())},
$S:181}
B.bIe.prototype={
$1(d){return d.b===this.a&&d.x!==C.eP},
$S:68}
B.bIf.prototype={
$2(d,e){return d+e.w},
$S:346}
B.bIs.prototype={
$1(d){return J.d4(this.a.e,new B.bIl(d)).d_(0,0,new B.bIm(this.b))},
$S:181}
B.bIl.prototype={
$1(d){return d.b===this.a&&d.x!==C.eP},
$S:68}
B.bIm.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:346}
B.bIh.prototype={
$2(d,e){return d+e.a[2]},
$S:257}
B.bIi.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:257}
B.bIj.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:257}
B.bIk.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYL.prototype={
$0(){return A.ai(this.a).au("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dHu","cXj",15)
w(B,"dHt","dor",16)
v(B.DK.prototype,"giM","d6",4)
var t
u(t=B.abN.prototype,"gapO","TS",5)
v(t,"gaRU","Qz",6)
v(B.abs.prototype,"gaT5","aT6",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cFF,B.cFB,B.cFC,B.cFD,B.cFE,B.b5k,B.b5l,B.b5h,B.b5j,B.bKx,B.bKe,B.bKf,B.bKd,B.bKm,B.bKn,B.bKw,B.bKp,B.cCg,B.bMK,B.bMN,B.bJE,B.bWE,B.bHc,B.bHn,B.bHj,B.bMO,B.bMP,B.bMR,B.bMS,B.bMU,B.bIn,B.bIo,B.bIr,B.bIe,B.bIs,B.bIl])
x(A.J,[B.DA,B.b3G,B.A1,B.Ml,B.a7M,B.aCh])
x(A.cO,[B.b3H,B.bKc,B.bKo,B.cCp,B.bMQ,B.bIt,B.bIp,B.bIf,B.bIm,B.bIh,B.bIi,B.bIj])
w(B.DK,A.fd)
x(A.bQ,[B.b5i,B.bKg,B.bKh,B.bKy,B.bKq,B.bKr,B.bKl,B.bKs,B.bKk,B.bKt,B.bKj,B.bKu,B.bKi,B.bKv,B.cCe,B.cCf,B.bMM,B.bML,B.bJF,B.bWA,B.bWB,B.bWC,B.bWD,B.bHq,B.bHp,B.bHr,B.bHo,B.bHd,B.bHi,B.bHh,B.bHk,B.bHg,B.bHl,B.bHf,B.bHm,B.bHe,B.bMT,B.bIq,B.bIg,B.bIk,B.aYL])
w(B.abM,A.f7)
w(B.a0N,A.dC)
w(B.abN,A.dy)
x(A.H,[B.aPO,B.aDF,B.aDc,B.Xw,B.ai0,B.anz])
x(A.eq,[B.aDG,B.aGq,B.X7,B.aCm])
w(B.NK,A.G)
w(B.abs,A.Z)})()
A.bn(b.typeUniverse,JSON.parse('{"DK":{"fd":["A1"]},"a0N":{"G":[],"e":[],"f":[]},"NK":{"G":[],"e":[],"f":[]},"X7":{"G":[],"e":[],"f":[]},"abN":{"Z":["a0N"]},"aPO":{"H":[],"e":[],"f":[]},"aDF":{"H":[],"e":[],"f":[]},"aDG":{"G":[],"e":[],"f":[]},"aDc":{"H":[],"e":[],"f":[]},"aGq":{"G":[],"e":[],"f":[]},"Xw":{"H":[],"e":[],"f":[]},"abs":{"Z":["NK"]},"ai0":{"H":[],"e":[],"f":[]},"aCm":{"G":[],"e":[],"f":[]},"anz":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ay<fa>"),k:x("ay<t<rR>>"),u:x("ay<t<fT>>"),o:x("ay<t<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>>"),y:x("ay<a5<c,t<c>>>"),x:x("zE"),b:x("uK"),d:x("rW"),Z:x("pg"),v:x("ee"),_:x("i4"),h:x("DK"),g:x("A1"),D:x("r<DA>"),r:x("r<i4>"),Q:x("r<xm>"),F:x("r<el>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>"),E:x("r<a7M>"),c:x("r<Ml>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fT>"),t:x("t<fy>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>"),P:x("a5<c,@>"),w:x("df"),A:x("+eventId,spentByHand,total,unpaidByHand(c,R,R,R)"),e:x("lM"),N:x("c"),B:x("aCh"),q:x("dm"),i:x("R"),z:x("@"),S:x("v"),X:x("J?"),T:x("c?"),I:x("R?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.agk=new A.aQ(0,1/0,32,1/0)
D.av2=new A.a0(8,5,6,5)
D.c9b=new A.C("Prazo",null,C.ae,null,null,null,null,null,null,null,null)
D.aAD=new A.bP(1,C.aw,D.c9b,null)
D.bzV=x([],y.r)
D.aAK=new B.A1(!1,D.bzV)
D.aBI=new A.kM("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBK=new A.kM("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBT=new A.kM("Sem pagamentos nesta vista.",8,null)
D.aFv=new A.dJ(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.by,null,null,C.by,C.by,!0,null,null,null,null)
D.aFQ=new A.dJ(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.by,null,null,C.by,C.by,!0,null,null,null,null)
D.aG3=new A.dJ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aHT=new A.ex("Pago",C.de,null)
D.aI_=new A.ex("Por pagar",C.hH,null)
D.aI6=new A.m5("Or\xe7amento","Todos os teus eventos",null)
D.aIc=new A.m5("Or\xe7amento",null,null)
D.bza=x(["catering"],y.s)
D.bAc=x([],y.D)
D.bAd=x([],y.n)
D.bAG=x(["flowers_decor"],y.s)
D.bCd=x(["music_dj","bands_musicians"],y.s)
D.bCM=x(["photography"],y.s)
D.bDZ=x(["venue"],y.s)
D.ca7=new A.C("A despesa precisa de um t\xedtulo",null,C.mB,null,null,null,null,null,null,null,null)
D.bLx=new A.Q(V.O9,D.ca7,null)
D.aFj=new A.tm("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kG,null)
D.bLS=new A.Q(C.fT,D.aFj,null)
D.bMw=new A.Q(Q.v6,C.em,null)
D.bZ7=new A.vW(!1,6,!0,null)
D.c4T=new A.P(!0,C.A,null,null,null,null,14,C.cY,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c73=new A.P(!0,null,null,null,null,null,null,C.cY,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaX=new A.P(!0,C.A,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cd6=new A.C("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.cf,null,null,null,null,null,null,null,null)
D.cdv=new A.C("Nova despesa",null,C.bk,null,null,null,null,null,null,null,null)
D.cdx=new A.C("\u20ac",null,D.aaX,null,null,null,null,null,null,null,null)
D.cfH=new A.C("Indica um valor v\xe1lido",null,C.mB,null,null,null,null,null,null,null,null)
D.chZ=new A.C("VALOR",null,C.aS,null,null,null,null,null,null,null,null)
D.Jx=new B.abM(0,"all")
D.acr=new B.abM(1,"paid")
D.acs=new B.abM(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUF","d_e",()=>C.bX.$1$1(new B.cFF(),y.m))
x($,"dVu","amc",()=>A.mV(B.dHt(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["unMBROuZE072uc2HGdrfxnpAnR0="]=a.current})($__dart_deferred_initializers__);