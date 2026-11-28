((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,E,Q,R,F,G,S,H,K,T,U,V,I,W,B={cEx:function cEx(){},cEt:function cEt(){},cEu:function cEu(){},cEv:function cEv(){},cEw:function cEw(){},
dFr(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v)u.push(new B.Dx(x[v]))
return new B.b3p(d.b,u)},
Dx:function Dx(d){this.a=d},
b3p:function b3p(d,e){this.a=d
this.b=e},
b3q:function b3q(){},
cW8(d){var x="category",w="due_date",v=J.a7(d),u=A.a2(v.h(d,"id")),t=A.a2(v.h(d,"wedding_id")),s=A.a2(v.h(d,"title")),r=B.dBL(B.daK(A.E(v.h(d,x)))),q=B.daK(A.E(v.h(d,x))),p=A.dv(v.h(d,"amount")),o=v.h(d,w)==null?null:A.da(A.a2(v.h(d,w)))
v=A.dX(v.h(d,"paid"))
return new H.i4(u,t,s,r,q,p,o,v===!0)},
daK(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dBL(d){var x
A:{if("venue"===d){x=E.y3
break A}if("catering"===d){x=E.y_
break A}if("photography"===d){x=E.y0
break A}if("music_dj"===d||"bands_musicians"===d){x=E.y1
break A}if("flowers_decor"===d){x=E.y2
break A}x=null
break A}return x},
dnf(){return new B.DH()},
A1:function A1(d,e){this.a=d
this.b=e},
b53:function b53(){},
b54:function b54(){},
DH:function DH(){this.b=this.x=null},
b50:function b50(){},
b51:function b51(d,e){this.a=d
this.b=e},
b52:function b52(d){this.a=d},
Cu(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cu=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akI(),$async$Cu)
case 3:u=$.S()
t=u.b
t===$&&A.b()
x=4
return A.d(t.R("events").az(0,"partner_name_1, partner_name_2").X("id",d).dA(),$async$Cu)
case 4:s=f
x=5
return A.d(u.b.R("bookings").az(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").X("wedding_id",d).dl(0,"event_date",!1),$async$Cu)
case 5:r=f
u=A.a([],y.s)
for(t=J.aq(r);t.t();)u.push(A.a2(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.S().b
t===$&&A.b()
x=9
return A.d(t.R("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").eI("booking_id",u).tJ(0,"created_at"),$async$Cu)
case 9:q=f
case 7:u=$.S()
t=u.b
t===$&&A.b()
x=10
return A.d(t.R("expenses").az(0,"title, category, amount, due_date, paid").X("wedding_id",d).tJ(0,"due_date"),$async$Cu)
case 10:p=f
x=11
return A.d(u.b.R("budget_categories").az(0,"name, amount").X("wedding_id",d).tJ(0,"position"),$async$Cu)
case 11:o=f
x=12
return A.d(u.b.R("budgets").az(0,"total").X("wedding_id",d).dA(),$async$Cu)
case 12:n=f
m=F.cVV(F.cBK(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.aq(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cy(j==null?"":j)
i=k.h(l,"category")
i=J.cy(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.fp(A.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.dK(A.q(g))
g=g==null?null:g.e0()}u.push(new B.Mi(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.aq(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.fp(A.q(k))
if(k==null)k=0}t.push(new B.a7D(i,k))}l=n==null?null:F.cWr(J.i(n,"total"))
v=new F.lL(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cu,w)},
Mi:function Mi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7D:function a7D(d,e){this.a=d
this.b=e},
dky(){return new B.a0C(null)},
aU0(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aU0=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.fV(!0,new B.cB9(e,new A.aJ(new A.bH(u,C.aJ,C.aB),$.ad())),d,y.i),$async$aU0)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aU0,w)},
akC(d,e,f,g){return B.dBy(d,e,f,g)},
dBy(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akC=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aU0(d,"Teto para "+f,g),$async$akC)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CF().gaW(),y.x).OM(f,r),$async$akC)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a4(I.Ic)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akC,w)},
d8P(d){var x=A.U(d,y._)
C.e.cP(x,new B.cBi())
return x},
d9i(d){var x=C.f.aX(C.j.k(A.aK(d)),2,"0"),w=C.f.aX(C.j.k(A.ax(d)),2,"0"),v=A.aD(d)===A.aD(new A.ac(Date.now(),0,!1))?"":"/"+A.aD(d)
return x+"/"+w+v},
cVh(d){var x,w,v,u
if(d===C.k.fD(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.b_(w,".",",")}v=x.split(",")
u=A.CB(v[0],A.aV("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bGU(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abC:function abC(d,e){this.a=d
this.b=e},
a0C:function a0C(d){this.a=d},
abD:function abD(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bJY:function bJY(d){this.a=d},
bJZ:function bJZ(d){this.a=d},
bKf:function bKf(d){this.a=d},
bKe:function bKe(){},
bJU:function bJU(){},
bJW:function bJW(){},
bJX:function bJX(){},
bJV:function bJV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bK3:function bK3(){},
bK4:function bK4(d){this.a=d},
bKd:function bKd(d){this.a=d},
bK5:function bK5(){},
bK6:function bK6(){},
bK7:function bK7(d,e){this.a=d
this.b=e},
bK8:function bK8(d){this.a=d},
bK2:function bK2(d){this.a=d},
bK9:function bK9(d){this.a=d},
bK1:function bK1(d){this.a=d},
bKa:function bKa(d){this.a=d},
bK0:function bK0(d){this.a=d},
bKb:function bKb(d){this.a=d},
bK_:function bK_(d){this.a=d},
bKc:function bKc(d){this.a=d},
cB9:function cB9(d,e){this.a=d
this.b=e},
cB7:function cB7(d){this.a=d},
cB8:function cB8(d,e){this.a=d
this.b=e},
cBi:function cBi(){},
aPB:function aPB(d,e,f){this.c=d
this.d=e
this.a=f},
aDv:function aDv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDw:function aDw(d,e){this.e=d
this.a=e},
bMr:function bMr(){},
bMt:function bMt(d,e){this.a=d
this.b=e},
bMu:function bMu(d){this.a=d},
bMs:function bMs(d,e,f){this.a=d
this.b=e
this.c=f},
aD2:function aD2(d,e){this.c=d
this.a=e},
bJm:function bJm(d){this.a=d},
bJl:function bJl(d){this.a=d},
aGd:function aGd(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bVR:function bVR(d,e){this.a=d
this.b=e},
bVN:function bVN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVO:function bVO(d){this.a=d},
bVP:function bVP(d,e){this.a=d
this.b=e},
bVQ:function bVQ(d,e){this.a=d
this.b=e},
Xm:function Xm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aC7:function aC7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NI:function NI(d,e,f,g){var _=this
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
bH7:function bH7(d){this.a=d},
bH6:function bH6(){},
bH8:function bH8(d){this.a=d},
bH5:function bH5(){},
bGU:function bGU(){},
bGV:function bGV(d){this.a=d},
bH4:function bH4(){},
bH_:function bH_(d){this.a=d},
bH0:function bH0(d){this.a=d},
bGZ:function bGZ(d,e){this.a=d
this.b=e},
bH1:function bH1(d){this.a=d},
bGY:function bGY(d){this.a=d},
bH2:function bH2(d){this.a=d},
bGX:function bGX(d){this.a=d},
bH3:function bH3(d,e){this.a=d
this.b=e},
bGW:function bGW(d,e){this.a=d
this.b=e},
WY:function WY(d,e){this.e=d
this.a=e},
bMv:function bMv(d){this.a=d},
bMw:function bMw(d){this.a=d},
bMx:function bMx(){},
bMy:function bMy(){},
bMz:function bMz(d){this.a=d},
bMA:function bMA(d,e,f){this.a=d
this.b=e
this.c=f},
bMB:function bMB(d,e){this.a=d
this.b=e},
ahT:function ahT(d,e,f){this.c=d
this.d=e
this.a=f},
aCc:function aCc(d,e,f){this.e=d
this.f=e
this.a=f},
bI4:function bI4(){},
bIa:function bIa(d){this.a=d},
bI7:function bI7(){},
bI6:function bI6(d){this.a=d},
bHY:function bHY(d){this.a=d},
bI5:function bI5(d,e,f){this.a=d
this.b=e
this.c=f},
bI8:function bI8(d){this.a=d},
bHW:function bHW(d){this.a=d},
bHX:function bHX(){},
bI9:function bI9(d,e){this.a=d
this.b=e},
bI2:function bI2(d){this.a=d},
bI3:function bI3(d){this.a=d},
bHZ:function bHZ(){},
bI_:function bI_(d){this.a=d},
bI0:function bI0(d){this.a=d},
bI1:function bI1(d,e){this.a=d
this.b=e},
anq:function anq(d,e){this.c=d
this.a=e},
aYx:function aYx(d){this.a=d},
ddK(d){var x
switch(d){case E.y3:x=D.bE0
break
case E.y_:x=D.bzd
break
case E.y0:x=D.bCO
break
case E.y1:x=D.bCf
break
case E.y2:x=D.bAK
break
default:x=C.a9
break}return x}},D,L,X
J=c[1]
A=c[0]
C=c[2]
M=c[186]
N=c[202]
O=c[215]
P=c[217]
E=c[218]
Q=c[160]
R=c[214]
F=c[132]
G=c[79]
S=c[159]
H=c[77]
K=c[213]
T=c[196]
U=c[216]
V=c[130]
I=c[212]
W=c[80]
B=a.updateHolder(c[53],B)
D=c[211]
L=c[72]
X=c[78]
B.Dx.prototype={
gar(d){return this.a.a}}
B.b3p.prototype={
gpX(){return C.e.d2(this.b,0,new B.b3q())},
gaBV(){var x=this.a
return x===0?0:C.k.ae(this.gpX()/x,0,1)}}
B.A1.prototype={
gbA0(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b53(),w),w.i("z.E"))
return x},
gbAm(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b54(),w),w.i("z.E"))
return x},
ax_(d,e){var x=e==null?this.a:e
return new B.A1(x,d==null?this.b:d)},
io(d){return this.ax_(null,d)},
awH(d){return this.ax_(d,null)}}
B.DH.prototype={
d5(){var x=y.T,w=this.x=A.eP(this).H(A.cw($.cl(),new B.b50(),y.v,x),x)
if(w!=null)A.jg(new B.b51(this,w),y.H)
return D.aAP},
c_(d,e){return this.bxs(0,e)},
bxs(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa3(0,v.ga3(0).io(!0))
u=$.S().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.R("expenses").cj(0).X("wedding_id",e).dl(0,"created_at",!0),$async$c_)
case 2:v.sa3(0,new t.A1(s,r.d4(g,B.dGh(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$c_,w)},
Vn(d){return this.bnh(d)},
bnh(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vn=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.S().b
r===$&&A.b()
r=r.R("expenses")
u=A.D(y.N,y.X)
u.j(0,"wedding_id",d.b)
u.j(0,"title",d.c)
t=d.e
if(t==null){t=d.d
t=t==null?null:t.b}u.j(0,"category",t)
u.j(0,"amount",d.f)
t=d.r
u.j(0,"due_date",t==null?null:C.e.gM(t.ci().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.d8(0,u).cj(0).dP(0),$async$Vn)
case 2:s=f
r=v.ga3(0)
u=A.U(v.ga3(0).b,y._)
u.push(B.cW8(s))
v.sa3(0,r.awH(u))
return A.l(null,w)}})
return A.m($async$Vn,w)},
OJ(d){return this.bCV(d)},
bCV(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OJ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.ll(v.ga3(0).b,new B.b52(d))
m=$.S().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.R("expenses").bh(0,A.T(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).ci()],u,u)).X("id",d).cj(0).dP(0),$async$OJ)
case 2:t=l.cW8(f)
u=v.ga3(0)
m=A.a([],y.r)
for(s=v.ga3(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.J)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa3(0,u.awH(m))
return A.l(null,w)}})
return A.m($async$OJ,w)}}
B.Mi.prototype={}
B.a7D.prototype={
gar(d){return this.a}}
B.abC.prototype={
I(){return"_BudgetFilter."+this.b}}
B.a0C.prototype={
P(){return new B.abD(D.Jt)}}
B.abD.prototype={
TD(d){return this.bd5(d)},
bd5(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TD=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.q(new B.bJY(u))
x=1
break}u.q(new B.bJZ(u))
t=u.gS()
s=$.cl()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gaW(),y.Z).az(0,d),$async$TD)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$TD,w)},
ak(){this.aD()
A.jg(new B.bKf(this),y.H)},
Qn(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Qn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.am3()
m=y.h
l=o.a0(0,n.gaW(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CF(),y.b).b
s=t==null?null:t.b
r=C.e.d2(o.a0(0,n,y.g).b,0,new B.bJU())
t=o.a0(0,$.cl(),y.v).b
q=t==null?null:t.gco()
t=u.c
t.toString
x=3
return A.d(A.cc(null,new B.bJV(q,s,new B.bJW(),r),!1,t,!0,!0,null,y.B),$async$Qn)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gaW(),m)
n=p.a
m=p.b
t=p.c
o.Vn(new H.i4("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Qn,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.H($.CF(),y.b),a3=a1.H($.HS(),y.d),a4=a1.H($.am3(),y.g),a5=a2.b,a6=a5==null?e:B.dFr(a5,a3.b)
a5=A.iZ(a1.H($.jx(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iP
a5=y.T
w=a1.H(A.cw($.cl(),new B.bK3(),y.v,a5),a5)
if(f.y){a1=f.gapu()
return A.cO(e,C.cT,A.oo(C.fc,40,A.a([C.fY,D.aI8,L.cSG(a1,e),new B.aCc(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.d5(x,new B.bK4(w))
a1=a1.H($.uy(),y.l)
u=a1.gv(a1)
t=new B.bKd(u==null?C.f9:u)
a1=y._
a5=A.U(a4.gbA0(),a1)
for(s=v.a,r=J.c5(s),q=r.gV(s),p=v.b,o=v.$ti.i("h6<1>"),n=new A.h6(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i4("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbAm(0),a1)
for(s=r.gV(s),o=new A.h6(s,p,o),p=y.r;o.t();){r=s.gE(s)
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
n.push(new H.i4("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.d8P(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.d8P(q)
break
default:a1=e}h=C.e.d2(q,0,new B.bK5())
s=a6==null
if(s)g=D.bAf
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bK6(),p),p.i("z.E"))}if(s)a1=D.bZ6
else{s=f.gaRA()
r=y.p
p=A.a([new A.po(A.a([new A.qP(s,"Nova despesa",e)],r),e),D.aIe,L.cSG(f.gapu(),w),new B.aPB(a6,new B.bK7(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aQ(a6.gpX(),!1)
n=a5.length
m=n===1?d:a0
l=A.aQ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.dQ("N\xfameros",e,A.a([new G.Sj(A.a([new G.xl("Gasto",o,""+n+" "+m),new G.xl("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new M.m4(A.a([new A.ek("Todos",l===D.Jt,n+m,new B.bK8(f),e),new A.ek("Pendentes",l===D.act,m,new B.bK9(f),e),new A.ek("Pagos",l===D.acs,n,new B.bKa(f),e)],y.F),4,!0,e),C.as],r))}o.push(new B.aGd(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.dQ("Pagamentos",e,o,16,e))
a1=A.a([new A.kL(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDv(g,f.x,new B.bKb(f),e))
p.push(new A.dQ("Categorias",e,a1,16,e))
p.push(new A.dQ("Exportar",e,A.a([new F.DI("Gastos e parceiros",!1,new B.bKc(f),e)],r),16,e))
a1=A.oo(C.fc,40,p,e,!0,!1)}return A.cO(e,C.cT,a1,!0,e)},
IF(d){return this.aYw(d)},
aYw(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IF=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aU0(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IF)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a0(0,$.CF().gaW(),y.x).a_g(r),$async$IF)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a4(I.Ic)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$IF,w)}}
B.aPB.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpX()>0?"Gastos "+A.aQ(t.gpX(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.ve(new A.im("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hG,0,"por definir","\u2014")}x=C.k.aK(t.gaBV()*100)
w=s-t.gpX()<0?"Acima do teto":"Ainda tens"
v=A.aQ(Math.abs(s-t.gpX()),!1)
s=A.aQ(s,!1)
u=t.gaBV()
return A.aU(A.ve(I.a2l,"Gastos "+A.aQ(t.gpX(),!1)+" \xb7 "+x+"% do teto",w,C.hG,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDv.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.e4(s,0,A.eT(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.J)(r),++w)p.push(new B.aDw(r[w],null))
q=A.a([A.fb(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.im(u,v.e,!0,null))}return A.B(q,C.I,C.i,C.m,0,C.v)}}
B.aDw.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(A.cw($.cl(),new B.bMr(),y.v,m),m)
if(l==null)x=C.rq
else{m=e.H($.cZ4().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rq:m}m=A.a([],y.s)
for(w=B.ddK(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bMt(this,d)
if(w)return A.jT(!1,!1,p,v,A.aQ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.oi("P\xf4r teto",new B.bMs(this,d,e),!0,p))
w=A.aQ(o.b,!1)
u=A.aQ(n,!1)
s=y.p
q=A.a([A.aI(new A.Tc(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aE,new B.anq(m,p)],s))
return A.jT(!1,!1,p,v,w+" de "+u,o.a,A.B(q,C.dg,C.i,C.K,0,C.v))}}
B.aD2.prototype={
u(d){var x,w,v=null,u=$.ar,t=$.fi.cc(0.55),s=A.X(18),r=A.X(12),q=this.c,p=q.e
r=A.fY(r,A.aI(p==null?A.kh(A.b2(C.hz,u,v,v,v),C.t,!0):A.ti(p,144,new B.bJl(u),!1,C.bS,A.wv(),!1,v,v,v),48,48),C.ba)
p=A.h(q.b,1,C.a3,v,v,D.c4R,v,v,v)
x=A.b2(C.iJ,u,v,v,14)
w=q.d
q=w>0?q.gPX()+" \xb7 "+A.aQ(w,!1):q.gPX()
w=y.p
return new A.Q(C.cr,A.aU(A.A(v,A.P(A.a([r,C.af,A.a4(A.B(A.a([p,C.fF,A.P(A.a([x,C.ej,new A.di(1,C.bd,A.h(q,1,C.a3,v,v,A.aF(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bk,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.w,C.i,C.m,0,v,v)],w),C.G,C.i,C.m,0,C.v),1),A.b2(C.i5,u,v,v,v)],w),C.w,C.i,C.m,0,v,v),C.r,v,v,new A.M(t,v,v,s,v,v,C.y),v,v,v,C.dU,v,v,v),new B.bJm(d),v),v)}}
B.aGd.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.Si(A.a([new A.im("+ Nova despesa",this.f,!0,j)],y.p),C.fp,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBY
x=new B.bVR(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.J)(i),++t){s=i[t]
r=s.a
q=C.f.dj(r,":pay:")
r=C.f.b4(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gM(r.split(" \xb7 "))
n=A.aQ(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.d9i(m)
v.push(new V.DU(new A.cv(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bVN(d,e,s,q),A.HM(m)===C.fj,j))
continue}p=r?new B.bVO(d):new B.bVP(x,s)
v.push(new B.Xm(s,p,r||s.w?j:new B.bVQ(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xm&&v[k-1] instanceof B.Xm)u.push(C.iE)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBN)
return A.B(i,C.I,C.i,C.m,0,C.v)}}
B.Xm.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aQ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.d9i(w))
v=C.e.a2(v," \xb7 ")
if(u)u=D.aHV
else{u=this.e
u=u!=null?new A.oi("Marcar pago",u,!0,null):D.aI1}return A.jT(!1,!1,null,this.d,v,x.c,u)}}
B.aC7.prototype={}
B.NI.prototype={
P(){var x=$.ad()
return new B.abi(new A.aJ(C.ap,x),new A.aJ(C.ap,x))}}
B.abi.prototype={
ak(){var x=this
x.aD()
x.d.am(0,new B.bH7(x))
x.e.am(0,new B.bH8(x))},
m(){var x=this.d,w=$.ad()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
gahM(){var x=C.f.C(this.e.a.a)
x=A.b_(x," ","")
return A.fp(A.b_(x,",","."))},
aSM(){var x,w,v,u,t=this,s=t.gahM()
t.q(new B.bGV(t))
x=C.f.C(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.an(w,!1)
v=t.w
u=v?null:t.f
w.aj(new B.aC7(x,s,u,t.r,v))},
ase(d,e,f,g,h){var x=null,w=h?C.kg:x,v=y.p,u=A.a4(A.B(A.a([A.h(d,x,x,x,x,C.aj,x,x,x),C.b0,A.h(e,x,x,x,x,C.R,x,x,x)],v),C.G,C.i,C.m,0,C.v),1),t=f?C.bv:x,s=f?x:A.bA(C.lt,1.5),r=f?T.vD:x
return A.b9(x,!0,x,A.db(C.bU,A.A(x,A.P(A.a([u,A.A(x,r,C.r,x,x,new A.M(t,x,s,x,x,x,C.ax),x,24,x,x,x,x,24)],v),C.w,C.i,C.m,0,x,x),C.r,x,C.dw,new A.M(x,x,w,x,x,x,C.y),x,x,x,C.ht,x,x,x),C.a0,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.b_),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bjr(d,e,f,g){return this.ase(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahM()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.C(x.a.a).length!==0&&j>0
w=new B.bH4()
t=y.w
s=A.aw(d,k,t).w
r=y.p
q=A.a([D.cdq],r)
q.push(A.h(l.a.c,k,k,k,k,C.R,k,k,k))
q=A.P(A.a([A.a4(A.B(q,C.G,C.i,C.m,0,C.v),1),A.b9(k,!0,k,A.db(k,A.A(k,C.qF,C.r,k,k,C.ck,k,44,k,k,k,k,44),C.a0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bH_(d),k,k,k,k,k,k,!1,C.b_),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.w,C.i,C.m,0,k,k)
p=A.X(22)
o=A.a([D.chN,A.P(A.a([X.d2s(A.cC(k,C.a9,!1,k,!0,C.z,k,A.cI(),l.e,k,k,k,k,k,2,D.aFT,C.a0,!0,k,!0,k,!1,k,C.aG,k,k,k,k,C.ii,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.au,k,k,k,k,k,k,k,k,k,k,k,D.aaX,!0,C.dD,k,C.b1,k,k,k,k)),C.bm,D.cds],r),C.eP,C.bV,C.m,0,C.aL,k)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cVh(v)+" no teto":"Passa o teto em "+B.cVh(-v)
o.push(A.h(m,k,k,k,k,A.aF(k,k,n?C.T:C.c0,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.cfy)
p=A.A(k,A.B(o,C.w,C.i,C.m,0,C.v),C.r,k,k,new A.M(C.aa,k,k,p,k,k,C.y),k,k,k,C.bj,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.b8,k,k,k)
n=A.X(26)
m=l.x&&C.f.C(x.a.a).length===0?A.bA(C.c0,1.5):k
n=A.a([p,C.a1,new A.Q(C.cr,o,k),A.A(C.bh,A.cC(k,C.a9,!1,k,!0,C.z,k,A.cI(),x,k,k,k,k,k,2,D.aFy,C.a0,!0,k,!0,k,!1,k,C.aG,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.au,k,k,k,k,k,k,k,k,k,k,k,C.ff,!0,C.at,k,C.h9,k,k,k,k),C.r,k,k,new A.M(C.aa,k,m,n,k,k,C.y),k,52,k,C.i0,k,k,k)],r)
if(l.x&&C.f.C(x.a.a).length===0)n.push(D.bLz)
n.push(C.a1)
n.push(new W.a1c(l.r,new B.bH0(l),k))
n.push(C.a1)
n.push(new A.Q(C.cr,A.h("ESTADO",k,k,k,k,C.b8,k,k,k),k))
x=A.X(22)
p=l.w
o=!p
o=A.a([l.bjr("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bH1(l)),l.ase("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bH2(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.aK(p)))
m=l.f
m.toString
m=A.q(w.$1(A.ax(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aD(w)}o.push(A.b9(k,!0,k,A.db(C.bU,A.aI(A.P(A.a([D.aAI,A.h(w,k,k,k,k,C.cf,k,k,k),C.ej,C.kG],r),C.w,C.i,C.m,0,k,k),56,k),C.a0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bH3(l,d),k,k,k,k,k,k,!1,C.b_),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.A(k,A.B(o,C.w,C.i,C.m,0,C.v),C.r,k,k,new A.M(C.aa,k,k,x,k,k,C.y),k,k,k,C.dy,k,k,k))
n.push(C.a1)
n.push(D.cd2)
x=A.dO(A.B(n,C.I,C.i,C.m,0,C.v),C.z,k,C.e2,k,k,C.a2)
t=A.aw(d,C.b2,t).w
w=A.cp(u?C.A:C.A.cc(0.35),k,k,C.t,k,k,C.ad,k,k,C.eG)
return new A.Q(new A.a0(0,0,0,s.f.d),A.B(A.a([new A.Q(C.kv,q,k),new A.di(1,C.bd,x,k),new A.Q(new A.a0(20,16,20,20+t.r.d),A.aI(A.bF(A.h(u?"Guardar \xb7 "+B.cVh(j):"Guardar",k,k,k,k,k,k,k,k),l.gaSL(),w),52,k),k)],r),C.I,C.i,C.K,0,C.v),k)}}
B.WY.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.CF(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eV(new A.a6(j,new B.bMv(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.H($.am3(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bMw(l),w),w.i("z.E"))
C.e.cP(v,new B.bMx())
j=y.T
u=e.H(A.cw($.cl(),new B.bMy(),y.v,j),j)
t=B.ddK(l.e.c)
if(u==null)s=K.FG
else{j=e.H($.aVN().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.FG
j=J.d5(j,new B.bMz(t))
s=A.U(j,j.$ti.i("z.E"))}j=A.aw(d,k,y.w).w
w=A.bO(A.A(k,k,C.r,k,k,new A.M(C.bA,k,k,A.X(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.as(d).ok.r,k,k,k)
q=A.a4(new B.ahT("Gasto",A.aQ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a1,r,C.aC,A.P(A.a([q,C.ak,A.a4(A.aU(new B.ahT("Teto \xb7 tocar para mudar",p===0?"Definir":A.aQ(p,!1),k),new B.bMA(d,e,x),k),1)],o),C.w,C.i,C.m,0,k,k)],o)
if(s.length!==0){w=A.a([C.bi,A.h("Contratado na app",k,k,k,k,A.as(d).ok.w,k,k,k),C.X],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.J)(s),++n)w.push(new B.aD2(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.h("Despesas",k,k,k,k,A.as(d).ok.w,k,k,k))
p.push(C.X)
w=v.length
if(w===0)p.push(D.bLV)
else for(n=0;n<v.length;v.length===w||(0,A.J)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.hb,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aX(C.j.k(A.aK(q)),2,"0")+"/"+C.f.aX(C.j.k(A.ax(q)),2,"0")+"/"+A.aD(q),k,k,k,k,k,k,k,k)
p.push(A.jj(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.P(A.a([A.h(A.aQ(m.f,!1),k,k,k,k,D.c70,k,k,k),C.ae,new Q.Dc(m.w,new B.bMB(e,m),k,$.ar,k,k,!1,k,k,k,k,!1,k,k,!1,k,R.Jv,k)],o),C.w,C.i,C.K,0,k,k),k))}return A.bC(!0,new A.ev(new A.aP(0,1/0,0,j.a.b*0.8),A.cX(p,k,N.Db,k,k,!1,C.a2,!0),k),k,C.Z,!0)}}
B.ahT.prototype={
u(d){var x=null,w=A.X(16)
return A.A(x,A.B(A.a([A.h(this.c,x,x,x,x,C.bc,x,x,x),C.as,A.h(this.d,x,x,x,x,O.aaK,x,x,x)],y.p),C.G,C.i,C.m,0,C.v),C.r,x,x,new A.M(C.aa,x,x,w,x,x,C.y),x,x,x,C.cv,x,x,x)}}
B.aCc.prototype={
bc(d,e){var x,w=y.t,v=e.H(A.cw($.cl(),new B.bI4(),y.v,w),w),u=e.H($.cZ3(),y.o)
w=e.H($.uy(),y.l)
x=w.gv(w)
return A.hn(u,new B.bI5(this,new B.bIa(x==null?C.f9:x),v),new B.bI6(e),new B.bI7(),!1,!0,!1)}}
B.anq.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.ar,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v]
t=$.fi
s=new A.b5(999,999)
r=new A.bc(o.cc(0.25),1,C.ai,-1)
q=A.b2(C.iJ,o,p,p,13)
t=A.A(p,A.P(A.a([q,C.t7,new A.di(1,C.bd,A.h(u,1,C.a3,p,p,new A.N(!0,o,p,p,p,p,14,C.cX,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b2(C.i5,o,p,p,16)],n),C.w,C.i,C.K,0,p,p),C.r,p,D.agn,new A.M(t,p,new A.dS(r,r,r,r),new A.ci(s,s,s,s),p,p,C.y),p,p,p,D.av7,p,p,p)
m.push(new A.jY(new A.oH(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hx(t,new B.aYx(d),p,p),p))}return A.eb(C.bf,m,C.r,C.bn,6,6)}}
var z=a.updateTypes(["x(i4)","R(R,i4)","v(i4,i4)","R(R,Dx)","A1()","F<~>(c?)","F<~>()","NI(O)","x(Dx)","F<lL>()","WY(O)","~(i4)","~()","x(nn)","x(rQ)","i4(a5<c,@>)","DH()"])
B.cEx.prototype={
$1(d){return this.aFc(d)},
aFc(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(A.cw($.cl(),new B.cEt(),y.v,f),f)
f=J.a7(e)
if(f.gY(e)){v=D.bAg
x=1
break}u=A.a([],y.s)
for(t=f.gV(e);t.t();)u.push(t.gE(t).a)
t=$.S()
s=t.b
s===$&&A.b()
r=y.G
q=s.R("budgets").az(0,"wedding_id, total").eI("wedding_id",u).b7(new B.cEu(),r)
p=t.b.R("budget_categories").az(0,"wedding_id, amount").eI("wedding_id",u).b7(new B.cEv(),r)
o=t.b.R("expenses").az(0,"wedding_id, amount, paid").eI("wedding_id",u).b7(new B.cEw(),r)
r=y.N
u=y.i
t=A.D(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bl(a3,s),m=A.u(n),n=new A.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E")
case 4:if(!n.t()){x=5
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
t.j(0,A.a2(k.h(l,"wedding_id")),A.dv(k.h(l,"total")))
x=4
break
case 5:j=A.D(r,u)
d=J
x=6
return A.d(p,$async$$1)
case 6:n=d.bl(a3,s),m=A.u(n),n=new A.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.a2(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=A.aL(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=A.D(r,u)
d=J
x=9
return A.d(o,$async$$1)
case 9:u=d.bl(a3,s),s=A.u(u),u=new A.ak(u,u.gA(u),s.i("ak<V.E>")),s=s.i("V.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.a2(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=A.aL(n.h(r,"amount"))
if(r==null)r=null
g.j(0,i,m+(r==null?0:r))
x=10
break
case 11:u=A.a([],y.n)
for(f=f.gV(e);f.t();){s=f.gE(f)
r=s.a
n=t.h(0,r)
s=n==null?s.as:n
if(s==null)s=0
n=j.h(0,r)
if(n==null)n=0
m=g.h(0,r)
u.push(new A.aMR([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1303}
B.cEt.prototype={
$1(d){return d.c},
$S:144}
B.cEu.prototype={
$1(d){return d},
$S:31}
B.cEv.prototype={
$1(d){return d},
$S:31}
B.cEw.prototype={
$1(d){return d},
$S:31}
B.b3q.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b53.prototype={
$1(d){return d.w},
$S:z+0}
B.b54.prototype={
$1(d){return!d.w},
$S:z+0}
B.b50.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.b51.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.b52.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bJY.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bJZ.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bKf.prototype={
$0(){return this.a.gS().a0(0,$.CF().gaW(),y.x).Zx(0).es(new B.bKe())},
$S:1}
B.bKe.prototype={
$1(d){},
$S:13}
B.bJU.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bJW.prototype={
$1(d){return A.CB(C.k.a8(d,0),A.aV("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bJX(),null)+" \u20ac"},
$S:117}
B.bJX.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:41}
B.bJV.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a2(v," \xb7 ")
u=x&&u>0?u:null
return new B.NI(v,u,w.d,null)},
$S:z+7}
B.bK3.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bK4.prototype={
$1(d){return d.x!==C.f4&&d.b===this.a},
$S:80}
B.bKd.prototype={
$2(d,e){return A.ja(d,this.a.lh(e))},
$1(d){return this.$2(d,null)},
$S:1306}
B.bK5.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bK6.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bK7.prototype={
$0(){return this.a.IF(this.b.a)},
$S:0}
B.bK8.prototype={
$0(){var x=this.a
return x.q(new B.bK2(x))},
$S:0}
B.bK2.prototype={
$0(){return this.a.w=D.Jt},
$S:0}
B.bK9.prototype={
$0(){var x=this.a
return x.q(new B.bK1(x))},
$S:0}
B.bK1.prototype={
$0(){return this.a.w=D.act},
$S:0}
B.bKa.prototype={
$0(){var x=this.a
return x.q(new B.bK0(x))},
$S:0}
B.bK0.prototype={
$0(){return this.a.w=D.acs},
$S:0}
B.bKb.prototype={
$0(){var x=this.a
return x.q(new B.bK_(x))},
$S:0}
B.bK_.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bKc.prototype={
$0(){return B.Cu(this.a.gS().a0(0,$.cl(),y.v).b.a)},
$S:z+9}
B.cB9.prototype={
$1(d){var x=null,w=this.b
return new A.eS(A.h(this.a,x,x,x,x,x,x,x,x),A.cC(x,C.a9,!0,x,!0,C.z,x,A.cI(),w,x,x,x,x,x,2,D.aG5,C.a0,!0,x,!0,x,!1,x,C.aG,x,x,x,x,C.ii,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.au,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.at,x,C.b1,x,x,x,x),A.a([A.cu(C.cP,x,x,new B.cB7(d),x,x),A.bF(C.du,new B.cB8(d,w),x)],y.p),x)},
$S:18}
B.cB7.prototype={
$0(){return A.an(this.a,!1).bB()},
$S:0}
B.cB8.prototype={
$0(){var x=A.an(this.a,!1),w=C.f.C(this.b.a.a)
w=A.b_(w," ","")
return x.aj(A.fp(A.b_(w,",",".")))},
$S:0}
B.cBi.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bB(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bB(2100,1,1,0,0):x)},
$S:z+2}
B.bMr.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bMt.prototype={
$0(){return A.cc(null,new B.bMu(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bMu.prototype={
$1(d){return new B.WY(this.a.e.a,null)},
$S:z+10}
B.bMs.prototype={
$0(){return B.akC(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bJm.prototype={
$0(){var x=this.a
A.an(x,!1).bB()
A.ai(x).ap("/bookings",null,y.X)},
$S:0}
B.bJl.prototype={
$3(d,e,f){return A.kh(A.b2(C.hz,this.a,null,null,null),C.t,!0)},
$S:145}
B.bVR.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.am3().gaW(),y.h).OJ(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a4(A.cB(v,v,v,v,v,C.z,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.Y,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bVN.prototype={
$0(){var x=this
return A.rF(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bVO.prototype={
$0(){return A.ai(this.a).ap("/bookings",null,y.X)},
$S:0}
B.bVP.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bVQ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bH7.prototype={
$0(){return this.a.q(new B.bH6())},
$S:0}
B.bH6.prototype={
$0(){},
$S:0}
B.bH8.prototype={
$0(){return this.a.q(new B.bH5())},
$S:0}
B.bH5.prototype={
$0(){},
$S:0}
B.bGU.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:41}
B.bGV.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bH4.prototype={
$1(d){return C.f.aX(C.j.k(d),2,"0")},
$S:39}
B.bH_.prototype={
$0(){return A.an(this.a,!1).bB()},
$S:0}
B.bH0.prototype={
$1(d){var x=this.a
return x.q(new B.bGZ(x,d))},
$S:99}
B.bGZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bH1.prototype={
$0(){var x=this.a
return x.q(new B.bGY(x))},
$S:0}
B.bGY.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bH2.prototype={
$0(){var x=this.a
return x.q(new B.bGX(x))},
$S:0}
B.bGX.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bH3.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(S.alv(v.b,A.bB(A.aD(t)-1,1,1,0,0),r,A.bB(A.aD(t)+5,1,1,0,0)),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.q(new B.bGW(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bGW.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bMv.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bMw.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bMx.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bB(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bB(2100,1,1,0,0):x)},
$S:z+2}
B.bMy.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bMz.prototype={
$1(d){return C.e.p(this.a,d.a)},
$S:z+14}
B.bMA.prototype={
$0(){var x=this.c
return B.akC(this.a,this.b,x.a,x.d)},
$S:0}
B.bMB.prototype={
$1(d){return this.a.a0(0,$.am3().gaW(),y.h).OJ(this.b.a)},
$S:129}
B.bI4.prototype={
$1(d){return d.c},
$S:144}
B.bIa.prototype={
$2(d,e){return A.ja(d,this.a.lh(e))},
$S:42}
B.bI7.prototype={
$0(){return D.bMz},
$S:86}
B.bI6.prototype={
$2(d,e){return A.Si(A.a([new A.im("Tentar outra vez",new B.bHY(this.a),!1,null)],y.p),C.fp,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1307}
B.bHY.prototype={
$0(){return this.a.ai($.cZ3())},
$S:0}
B.bI5.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bI8(g),e=new B.bI9(g,this.b),d=J.c5(a4),a0=d.d2(a4,0,new B.bHZ()),a1=d.d2(a4,0,new B.bI_(f)),a2=d.d2(a4,0,new B.bI0(e)),a3=y.N
a3=A.D(a3,a3)
for(x=J.aq(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C_(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aQ(a1,!1)
w=a0>0
v=w?"de "+A.aQ(a0,!1):"gastos"
u=w?C.k.ae(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aK(a1/a0*100)+"% dos tetos":""
x=A.ve(i,""+t+" "+r+w,"Todos os eventos",C.hG,u,v,x)
v=y.p
u=A.a([new G.Sj(A.a([new G.xl("Gasto",A.aQ(a1,!1),h),new G.xl("Por pagar",A.aQ(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eA(a4,0,y.A),r=J.aq(t.a),q=t.b,t=new A.c0(r,q,A.u(t).i("c0<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.a3(q+n,r.gE(r)):A.aj(A.c2())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iE)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a3,i,i,C.aj,i,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aQ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aQ(j[3]+e.$1(j[0]),!1))}n=A.B(A.a([n,C.b0,A.h(C.e.a2(k," \xb7 "),i,i,i,i,C.R,i,i,i)],v),C.G,C.i,C.m,0,C.v)
k=o.a.a
l.push(new A.hx(A.A(i,A.P(A.a([new A.bQ(1,C.av,n,i),C.ak,A.h(A.aQ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.aj,i,i,i),C.bm,C.kG],v),C.w,C.i,C.m,0,i,i),C.r,C.an,C.dw,i,i,i,i,C.cm,i,i,i),new B.bI1(o,g),i,i))
C.e.n(w,l)}return A.B(A.a([x,new A.dQ("N\xfameros",i,u,16,i),new A.dQ("Por evento \xb7 "+d,i,w,16,i),D.aBP],v),C.I,C.i,C.m,0,C.v)},
$S:1308}
B.bI8.prototype={
$1(d){return J.d5(this.a.e,new B.bHW(d)).d2(0,0,new B.bHX())},
$S:181}
B.bHW.prototype={
$1(d){return d.b===this.a&&d.x!==C.f4},
$S:80}
B.bHX.prototype={
$2(d,e){return d+e.w},
$S:459}
B.bI9.prototype={
$1(d){return J.d5(this.a.e,new B.bI2(d)).d2(0,0,new B.bI3(this.b))},
$S:181}
B.bI2.prototype={
$1(d){return d.b===this.a&&d.x!==C.f4},
$S:80}
B.bI3.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:459}
B.bHZ.prototype={
$2(d,e){return d+e.a[2]},
$S:264}
B.bI_.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:264}
B.bI0.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:264}
B.bI1.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYx.prototype={
$0(){return A.ai(this.a).ap("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dGh","cW8",15)
w(B,"dGg","dnf",16)
v(B.DH.prototype,"giL","d5",4)
var t
u(t=B.abD.prototype,"gapu","TD",5)
v(t,"gaRA","Qn",6)
v(B.abi.prototype,"gaSL","aSM",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cEx,B.cEt,B.cEu,B.cEv,B.cEw,B.b53,B.b54,B.b50,B.b52,B.bKe,B.bJW,B.bJX,B.bJV,B.bK3,B.bK4,B.bKd,B.bK6,B.cB9,B.bMr,B.bMu,B.bJl,B.bVR,B.bGU,B.bH4,B.bH0,B.bMv,B.bMw,B.bMy,B.bMz,B.bMB,B.bI4,B.bI5,B.bI8,B.bHW,B.bI9,B.bI2])
x(A.K,[B.Dx,B.b3p,B.A1,B.Mi,B.a7D,B.aC7])
x(A.cQ,[B.b3q,B.bJU,B.bK5,B.cBi,B.bMx,B.bIa,B.bI6,B.bHX,B.bI3,B.bHZ,B.bI_,B.bI0])
w(B.DH,A.fc)
x(A.bS,[B.b51,B.bJY,B.bJZ,B.bKf,B.bK7,B.bK8,B.bK2,B.bK9,B.bK1,B.bKa,B.bK0,B.bKb,B.bK_,B.bKc,B.cB7,B.cB8,B.bMt,B.bMs,B.bJm,B.bVN,B.bVO,B.bVP,B.bVQ,B.bH7,B.bH6,B.bH8,B.bH5,B.bGV,B.bH_,B.bGZ,B.bH1,B.bGY,B.bH2,B.bGX,B.bH3,B.bGW,B.bMA,B.bI7,B.bHY,B.bI1,B.aYx])
w(B.abC,A.f6)
w(B.a0C,A.dB)
w(B.abD,A.dx)
x(A.I,[B.aPB,B.aDv,B.aD2,B.Xm,B.ahT,B.anq])
x(A.ep,[B.aDw,B.aGd,B.WY,B.aCc])
w(B.NI,A.G)
w(B.abi,A.a_)})()
A.bp(b.typeUniverse,JSON.parse('{"DH":{"fc":["A1"]},"a0C":{"G":[],"e":[],"f":[]},"NI":{"G":[],"e":[],"f":[]},"WY":{"G":[],"e":[],"f":[]},"abD":{"a_":["a0C"]},"aPB":{"I":[],"e":[],"f":[]},"aDv":{"I":[],"e":[],"f":[]},"aDw":{"G":[],"e":[],"f":[]},"aD2":{"I":[],"e":[],"f":[]},"aGd":{"G":[],"e":[],"f":[]},"Xm":{"I":[],"e":[],"f":[]},"abi":{"a_":["NI"]},"ahT":{"I":[],"e":[],"f":[]},"aCc":{"G":[],"e":[],"f":[]},"anq":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ay<f9>"),k:x("ay<t<rQ>>"),u:x("ay<t<fZ>>"),o:x("ay<t<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>>"),y:x("ay<a5<c,t<c>>>"),x:x("zE"),b:x("uM"),d:x("rV"),Z:x("pf"),v:x("ee"),_:x("i4"),h:x("DH"),g:x("A1"),D:x("r<Dx>"),r:x("r<i4>"),Q:x("r<xl>"),F:x("r<ek>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>"),E:x("r<a7D>"),c:x("r<Mi>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fZ>"),t:x("t<fy>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>"),P:x("a5<c,@>"),w:x("dg"),A:x("+eventId,spentByHand,total,unpaidByHand(c,R,R,R)"),e:x("lL"),N:x("c"),B:x("aC7"),q:x("du"),i:x("R"),z:x("@"),S:x("v"),X:x("K?"),T:x("c?"),I:x("R?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.agn=new A.aP(0,1/0,32,1/0)
D.av7=new A.a0(8,5,6,5)
D.c98=new A.C("Prazo",null,C.aj,null,null,null,null,null,null,null,null)
D.aAI=new A.bQ(1,C.av,D.c98,null)
D.bzZ=x([],y.r)
D.aAP=new B.A1(!1,D.bzZ)
D.aBN=new A.kL("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBP=new A.kL("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBY=new A.kL("Sem pagamentos nesta vista.",8,null)
D.aFy=new A.dM(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bH,null,null,C.bH,C.bH,!0,null,null,null,null)
D.aFT=new A.dM(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bH,null,null,C.bH,C.bH,!0,null,null,null,null)
D.aG5=new A.dM(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aHV=new A.ew("Pago",C.db,null)
D.aI1=new A.ew("Por pagar",C.hD,null)
D.aI8=new A.m5("Or\xe7amento","Todos os teus eventos",null)
D.aIe=new A.m5("Or\xe7amento",null,null)
D.bzd=x(["catering"],y.s)
D.bAf=x([],y.D)
D.bAg=x([],y.n)
D.bAK=x(["flowers_decor"],y.s)
D.bCf=x(["music_dj","bands_musicians"],y.s)
D.bCO=x(["photography"],y.s)
D.bE0=x(["venue"],y.s)
D.ca4=new A.C("A despesa precisa de um t\xedtulo",null,C.mv,null,null,null,null,null,null,null,null)
D.bLz=new A.Q(U.O9,D.ca4,null)
D.aFl=new A.qN("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kE,null)
D.bLV=new A.Q(C.hs,D.aFl,null)
D.bMz=new A.Q(P.uZ,C.ek,null)
D.bZ6=new A.vW(!1,6,!0,null)
D.c4R=new A.N(!0,C.A,null,null,null,null,14,C.cX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c70=new A.N(!0,null,null,null,null,null,null,C.cX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaX=new A.N(!0,C.A,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cd2=new A.C("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.cy,null,null,null,null,null,null,null,null)
D.cdq=new A.C("Nova despesa",null,C.bl,null,null,null,null,null,null,null,null)
D.cds=new A.C("\u20ac",null,D.aaX,null,null,null,null,null,null,null,null)
D.cfy=new A.C("Indica um valor v\xe1lido",null,C.mv,null,null,null,null,null,null,null,null)
D.chN=new A.C("VALOR",null,C.b8,null,null,null,null,null,null,null,null)
D.Jt=new B.abC(0,"all")
D.acs=new B.abC(1,"paid")
D.act=new B.abC(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTr","cZ3",()=>C.bW.$1$1(new B.cEx(),y.m))
x($,"dUg","am3",()=>A.mU(B.dGg(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["oaWEtVp87ofR52bTV6jy5i4zNpI="]=a.current})($__dart_deferred_initializers__);