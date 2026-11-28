((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cHQ:function cHQ(){},cHM:function cHM(){},cHN:function cHN(){},cHO:function cHO(){},cHP:function cHP(){},
dJC(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DE(x[v]))
return new B.b3V(d.b,u)},
DE:function DE(d){this.a=d},
b3V:function b3V(d,e){this.a=d
this.b=e},
b3W:function b3W(){},
cZX(d){var x="category",w="due_date",v=J.a7(d),u=A.a_(v.h(d,"id")),t=A.a_(v.h(d,"wedding_id")),s=A.a_(v.h(d,"title")),r=B.dFT(B.deE(A.C(v.h(d,x)))),q=B.deE(A.C(v.h(d,x))),p=A.du(v.h(d,"amount")),o=v.h(d,w)==null?null:A.dd(A.a_(v.h(d,w)))
v=A.dX(v.h(d,"paid"))
return new G.i6(u,t,s,r,q,p,o,v===!0)},
deE(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dFT(d){var x
A:{if("venue"===d){x=E.y3
break A}if("catering"===d){x=E.y_
break A}if("photography"===d){x=E.y0
break A}if("music_dj"===d||"bands_musicians"===d){x=E.y1
break A}if("flowers_decor"===d){x=E.y2
break A}x=null
break A}return x},
drh(){return new B.DO()},
zY:function zY(d,e){this.a=d
this.b=e},
b5z:function b5z(){},
b5A:function b5A(){},
DO:function DO(){this.b=this.x=null},
b5w:function b5w(){},
b5x:function b5x(d,e){this.a=d
this.b=e},
b5y:function b5y(d){this.a=d},
Cy(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akX(),$async$Cy)
case 3:u=$.P()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").ai(0,"partner_name_1, partner_name_2").U("id",d).ci(),$async$Cy)
case 4:s=f
x=5
return A.d(u.b.P("bookings").ai(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").U("wedding_id",d).cO(0,"event_date",!1),$async$Cy)
case 5:r=f
u=A.a([],y.s)
for(t=J.ap(r);t.t();)u.push(A.a_(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.P().b
t===$&&A.b()
x=9
return A.d(t.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").dP("booking_id",u).tD(0,"created_at"),$async$Cy)
case 9:q=f
case 7:u=$.P()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").ai(0,"title, category, amount, due_date, paid").U("wedding_id",d).tD(0,"due_date"),$async$Cy)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").ai(0,"name, amount").U("wedding_id",d).tD(0,"position"),$async$Cy)
case 11:o=f
x=12
return A.d(u.b.P("budgets").ai(0,"total").U("wedding_id",d).ci(),$async$Cy)
case 12:n=f
m=F.cZI(F.cER(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ap(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cB(j==null?"":j)
i=k.h(l,"category")
i=J.cB(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.eW(A.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d4(A.q(g))
g=g==null?null:g.dM()}u.push(new B.Mr(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ap(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cB(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eW(A.q(k))
if(k==null)k=0}t.push(new B.a7X(i,k))}l=n==null?null:F.d_f(J.i(n,"total"))
v=new F.lT(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cy,w)},
Mr:function Mr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7X:function a7X(d,e){this.a=d
this.b=e},
doA(){return new B.D8(null)},
aUi(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUi=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a9(f,0)
x=3
return A.d(A.fR(!0,new B.cEg(e,new A.aE(new A.bD(u,C.aE,C.aw),$.aa())),d,y.i),$async$aUi)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUi,w)},
akQ(d,e,f,g){return B.dFG(d,e,f,g)},
dFG(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akQ=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUi(d,"Teto para "+f,g),$async$akQ)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.CJ().gaX(),y.x).OU(f,r),$async$akQ)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a2(H.I8)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akQ,w)},
dcI(d){var x=A.U(d,y._)
C.e.cr(x,new B.cEp())
return x},
ddb(d){var x=C.f.aU(C.j.k(A.ay(d)),2,"0"),w=C.f.aU(C.j.k(A.an(d)),2,"0"),v=A.ax(d)===A.ax(new A.ac(Date.now(),0,!1))?"":"/"+A.ax(d)
return x+"/"+w+v},
cZ4(d){var x,w,v,u
if(d===C.k.hA(d))x=C.k.a9(d,0)
else{w=C.k.a9(d,2)
x=A.aX(w,".",",")}v=x.split(",")
u=A.CF(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bI1(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abX:function abX(d,e){this.a=d
this.b=e},
D8:function D8(d){this.a=d},
abY:function abY(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bLe:function bLe(d){this.a=d},
bLf:function bLf(d){this.a=d},
bLw:function bLw(d){this.a=d},
bLv:function bLv(){},
bLa:function bLa(){},
bLc:function bLc(){},
bLd:function bLd(){},
bLb:function bLb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLk:function bLk(){},
bLl:function bLl(d){this.a=d},
bLu:function bLu(d){this.a=d},
bLm:function bLm(){},
bLn:function bLn(){},
bLo:function bLo(d,e){this.a=d
this.b=e},
bLp:function bLp(d){this.a=d},
bLj:function bLj(d){this.a=d},
bLq:function bLq(d){this.a=d},
bLi:function bLi(d){this.a=d},
bLr:function bLr(d){this.a=d},
bLh:function bLh(d){this.a=d},
bLs:function bLs(d){this.a=d},
bLg:function bLg(d){this.a=d},
bLt:function bLt(d){this.a=d},
cEg:function cEg(d,e){this.a=d
this.b=e},
cEe:function cEe(d){this.a=d},
cEf:function cEf(d,e){this.a=d
this.b=e},
cEp:function cEp(){},
aPR:function aPR(d,e,f){this.c=d
this.d=e
this.a=f},
aDN:function aDN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDO:function aDO(d,e){this.e=d
this.a=e},
bNK:function bNK(){},
bNM:function bNM(d,e){this.a=d
this.b=e},
bNN:function bNN(d){this.a=d},
bNL:function bNL(d,e,f){this.a=d
this.b=e
this.c=f},
aDk:function aDk(d,e){this.c=d
this.a=e},
bKA:function bKA(d){this.a=d},
bKz:function bKz(d){this.a=d},
aGy:function aGy(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bXM:function bXM(d,e){this.a=d
this.b=e},
bXI:function bXI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXJ:function bXJ(d){this.a=d},
bXK:function bXK(d,e){this.a=d
this.b=e},
bXL:function bXL(d,e){this.a=d
this.b=e},
XA:function XA(d,e,f,g){var _=this
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
NR:function NR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abC:function abC(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bIf:function bIf(d){this.a=d},
bIe:function bIe(){},
bIg:function bIg(d){this.a=d},
bId:function bId(){},
bI1:function bI1(){},
bI2:function bI2(d){this.a=d},
bIc:function bIc(){},
bI7:function bI7(d){this.a=d},
bI8:function bI8(d){this.a=d},
bI6:function bI6(d,e){this.a=d
this.b=e},
bI9:function bI9(d){this.a=d},
bI5:function bI5(d){this.a=d},
bIa:function bIa(d){this.a=d},
bI4:function bI4(d){this.a=d},
bIb:function bIb(d,e){this.a=d
this.b=e},
bI3:function bI3(d,e){this.a=d
this.b=e},
Xc:function Xc(d,e){this.e=d
this.a=e},
bNO:function bNO(d){this.a=d},
bNP:function bNP(d){this.a=d},
bNQ:function bNQ(){},
bNR:function bNR(){},
bNS:function bNS(d){this.a=d},
bNT:function bNT(d,e,f){this.a=d
this.b=e
this.c=f},
bNU:function bNU(d,e){this.a=d
this.b=e},
aif:function aif(d,e,f){this.c=d
this.d=e
this.a=f},
aCv:function aCv(d,e,f){this.e=d
this.f=e
this.a=f},
bJc:function bJc(){},
bJi:function bJi(d){this.a=d},
bJf:function bJf(){},
bJe:function bJe(d){this.a=d},
bJ5:function bJ5(d){this.a=d},
bJd:function bJd(d,e,f){this.a=d
this.b=e
this.c=f},
bJg:function bJg(d){this.a=d},
bJ3:function bJ3(d){this.a=d},
bJ4:function bJ4(){},
bJh:function bJh(d,e){this.a=d
this.b=e},
bJa:function bJa(d){this.a=d},
bJb:function bJb(d){this.a=d},
bJ6:function bJ6(){},
bJ7:function bJ7(d){this.a=d},
bJ8:function bJ8(d){this.a=d},
bJ9:function bJ9(d,e){this.a=d
this.b=e},
anG:function anG(d,e){this.c=d
this.a=e},
aYT:function aYT(d){this.a=d},
dhF(d){var x
switch(d){case E.y3:x=D.bDq
break
case E.y_:x=D.byB
break
case E.y0:x=D.bCc
break
case E.y1:x=D.bBC
break
case E.y2:x=D.bA4
break
default:x=C.a6
break}return x}},D,K,V
J=c[1]
A=c[0]
C=c[2]
L=c[203]
M=c[217]
N=c[186]
O=c[219]
E=c[220]
P=c[166]
Q=c[216]
F=c[133]
R=c[159]
G=c[77]
I=c[215]
S=c[197]
T=c[218]
H=c[214]
U=c[79]
B=a.updateHolder(c[53],B)
D=c[213]
K=c[72]
V=c[78]
B.DE.prototype={
gar(d){return this.a.a}}
B.b3V.prototype={
gpZ(){return C.e.d_(this.b,0,new B.b3W())},
gaCj(){var x=this.a
return x===0?0:C.k.ah(this.gpZ()/x,0,1)}}
B.zY.prototype={
gbAh(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5z(),w),w.i("w.E"))
return x},
gbAD(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5A(),w),w.i("w.E"))
return x},
axr(d,e){var x=e==null?this.a:e
return new B.zY(x,d==null?this.b:d)},
io(d){return this.axr(null,d)},
ax9(d){return this.axr(d,null)}}
B.DO.prototype={
d5(){var x=y.T,w=this.x=A.eQ(this).G(A.cH($.cr(),new B.b5w(),y.v,x),x)
if(w!=null)A.jl(new B.b5x(this,w),y.H)
return D.aA8},
bY(d,e){return this.bxF(0,e)},
bxF(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).io(!0))
u=$.P().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").cm(0).U("wedding_id",e).cO(0,"created_at",!0),$async$bY)
case 2:v.sa4(0,new t.zY(s,r.db(g,B.dKt(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
VR(d){return this.bnE(d)},
bnE(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$VR=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.P().b
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
u.j(0,"due_date",t==null?null:C.e.gJ(t.cj().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.d8(0,u).cm(0).dR(0),$async$VR)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cZX(s))
v.sa4(0,r.ax9(u))
return A.l(null,w)}})
return A.m($async$VR,w)},
OR(d){return this.bDd(d)},
bDd(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OR=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lh(v.ga4(0).b,new B.b5y(d))
m=$.P().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bi(0,A.R(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).cj()],u,u)).U("id",d).cm(0).dR(0),$async$OR)
case 2:t=l.cZX(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.ax9(m))
return A.l(null,w)}})
return A.m($async$OR,w)}}
B.Mr.prototype={}
B.a7X.prototype={
gar(d){return this.a}}
B.abX.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D8.prototype={
R(){return new B.abY(D.Ji)}}
B.abY.prototype={
U1(d){return this.bdw(d)},
bdw(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$U1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bLe(u))
x=1
break}u.p(new B.bLf(u))
t=u.gS()
s=$.cr()
r=t.a_(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a_(0,s.gaX(),y.Z).ai(0,d),$async$U1)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$U1,w)},
ac(){this.ap()
A.jl(new B.bLw(this),y.H)},
Qw(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Qw=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.amh()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.CJ(),y.b).b
s=t==null?null:t.b
r=C.e.d_(o.a_(0,n,y.g).b,0,new B.bLa())
t=o.a_(0,$.cr(),y.v).b
q=t==null?null:t.gcB()
t=u.c
t.toString
x=3
return A.d(A.bW(null,new B.bLb(q,s,new B.bLc(),r),!1,t,!0,!0,null,y.B),$async$Qw)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.VR(new G.i6("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Qw,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CJ(),y.b),a3=a1.G($.HZ(),y.d),a4=a1.G($.amh(),y.g),a5=a2.b,a6=a5==null?e:B.dJC(a5,a3.b)
a5=A.j3(a1.G($.j0(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iU
a5=y.T
w=a1.G(A.cH($.cr(),new B.bLk(),y.v,a5),a5)
if(f.y){a1=f.gaq_()
return A.cQ(e,C.cV,A.nN(C.f2,40,A.a([C.fv,D.aHy,K.cWv(a1,e),new B.aCv(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.dc(x,new B.bLl(w))
a1=a1.G($.uz(),y.l)
u=a1.gv(a1)
t=new B.bLu(u==null?C.ff:u)
a1=y._
a5=A.U(a4.gbAh(),a1)
for(s=v.a,r=J.c8(s),q=r.gX(s),p=v.b,o=v.$ti.i("ha<1>"),n=new A.ha(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i6("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbAD(0),a1)
for(s=r.gX(s),o=new A.ha(s,p,o),p=y.r;o.t();){r=s.gE(s)
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
n.push(new G.i6("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcI(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcI(q)
break
default:a1=e}h=C.e.d_(q,0,new B.bLm())
s=a6==null
if(s)g=D.bzF
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bLn(),p),p.i("w.E"))}if(s)a1=D.bYn
else{s=f.gaRY()
r=y.p
p=A.a([new A.pt(A.a([new A.qP(s,"Nova despesa",e)],r),e),D.aHE,K.cWv(f.gaq_(),w),new B.aPR(a6,new B.bLo(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aK(a6.gpZ(),!1)
n=a5.length
m=n===1?d:a0
l=A.aK(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c5("N\xfameros",e,A.a([new A.DZ(A.a([new A.lb("Gasto",o,""+n+" "+m,e),new A.lb("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.me(A.a([new A.ek("Todos",l===D.Ji,n+m,new B.bLp(f),e),new A.ek("Pendentes",l===D.abV,m,new B.bLq(f),e),new A.ek("Pagos",l===D.abU,n,new B.bLr(f),e)],y.F),4,!0,e),C.as],r))}o.push(new B.aGy(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c5("Pagamentos",e,o,16,e))
a1=A.a([new A.hg(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDN(g,f.x,new B.bLs(f),e))
p.push(new A.c5("Categorias",e,a1,16,e))
p.push(new A.c5("Exportar",e,A.a([new F.DP("Gastos e parceiros",!1,new B.bLt(f),e)],r),16,e))
a1=A.nN(C.f2,40,p,e,!0,!1)}return A.cQ(e,C.cV,a1,!0,e)},
IM(d){return this.aZ0(d)},
aZ0(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IM=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUi(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IM)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a_(0,$.CJ().gaX(),y.x).a_F(r),$async$IM)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a2(H.I8)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$IM,w)}}
B.aPR.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpZ()>0?"Gastos "+A.aK(t.gpZ(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vi(new A.hu("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hG,0,"por definir","\u2014")}x=C.k.aL(t.gaCj()*100)
w=s-t.gpZ()<0?"Acima do teto":"Ainda tens"
v=A.aK(Math.abs(s-t.gpZ()),!1)
s=A.aK(s,!1)
u=t.gaCj()
return A.aW(A.vi(H.a1X,"Gastos "+A.aK(t.gpZ(),!1)+" \xb7 "+x+"% do teto",w,C.hG,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDN.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dD(s,0,A.ew(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDO(r[w],null))
q=A.a([A.eT(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hu(u,v.e,!0,null))}return A.z(q,C.E,C.h,C.l)}}
B.aDO.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cH($.cr(),new B.bNK(),y.v,m),m)
if(l==null)x=C.rm
else{m=e.G($.d1X().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rm:m}m=A.a([],y.s)
for(w=B.dhF(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNM(this,d)
if(w)return A.k_(!1,!1,p,v,A.aK(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mP("P\xf4r teto",new B.bNL(this,d,e),!0,p))
w=A.aK(o.b,!1)
u=A.aK(n,!1)
s=y.p
q=A.a([A.aH(new A.a4f(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aF,new B.anG(m,p)],s))
return A.k_(!1,!1,p,v,w+" de "+u,o.a,A.z(q,C.dO,C.h,C.J))}}
B.aDk.prototype={
u(d){var x,w,v=null,u=$.au,t=$.f7.ce(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fT(r,A.aH(p==null?A.kM(A.b5(C.i6,u,v,v,v),C.t,!0):A.pp(p,144,new B.bKz(u),!1,C.bG,A.wx(),!1,v,v,v),48,48),C.bb)
p=A.h(q.b,1,C.a1,v,v,D.c46,v,v,v)
x=A.b5(C.i8,u,v,v,14)
w=q.d
q=w>0?q.gQ4()+" \xb7 "+A.aK(w,!1):q.gQ4()
w=y.p
return new A.S(C.d4,A.aW(A.y(v,A.O(A.a([r,C.ae,A.a4(A.z(A.a([p,C.j8,A.O(A.a([x,C.e_,new A.de(1,C.b4,A.h(q,1,C.a1,v,v,A.aJ(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bl,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b5(C.ia,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.J(t,v,v,s,v,v,C.x),v,v,v,C.eg,v,v,v),new B.bKA(d),v),v)}}
B.aGy.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JL(A.a([new A.hu("+ Nova despesa",this.f,!0,j)],y.p),C.eU,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBt
x=new B.bXM(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.H)(i),++t){s=i[t]
r=s.a
q=C.f.d2(r,":pay:")
r=C.f.b1(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gJ(r.split(" \xb7 "))
n=A.aK(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.ddb(m)
v.push(new A.te(new A.cj(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bXI(d,e,s,q),A.HT(m)===C.f8,j))
continue}p=r?new B.bXJ(d):new B.bXK(x,s)
v.push(new B.XA(s,p,r||s.w?j:new B.bXL(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XA&&v[k-1] instanceof B.XA)u.push(C.iJ)
u.push(v[k])
C.e.n(i,u)}i.push(D.aB9)
return A.z(i,C.E,C.h,C.l)}}
B.XA.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aK(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.ddb(w))
v=C.e.a1(v," \xb7 ")
if(u)u=D.aHj
else{u=this.e
u=u!=null?new A.mP("Marcar pago",u,!0,null):D.aHq}return A.k_(!1,!1,null,this.d,v,x.c,u)}}
B.aCq.prototype={}
B.NR.prototype={
R(){var x=$.aa()
return new B.abC(new A.aE(C.aj,x),new A.aE(C.aj,x))}}
B.abC.prototype={
ac(){var x=this
x.ap()
x.d.an(0,new B.bIf(x))
x.e.an(0,new B.bIg(x))},
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
gaie(){var x=C.f.B(this.e.a.a)
x=A.aX(x," ","")
return A.eW(A.aX(x,",","."))},
aTa(){var x,w,v,u,t=this,s=t.gaie()
t.p(new B.bI2(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.ae(new B.aCq(x,s,u,t.r,v))},
asL(d,e,f,g,h){var x=null,w=h?C.fo:x,v=y.p,u=A.a4(A.z(A.a([A.h(d,x,x,x,x,C.a9,x,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x,x)],v),C.G,C.h,C.l),1),t=f?C.bq:x,s=f?x:A.bA(C.kq,1.5),r=f?S.vC:x
return A.b9(x,!0,x,A.cy(C.br,A.y(x,A.O(A.a([u,A.y(x,r,C.r,x,x,new A.J(t,x,s,x,x,x,C.aq),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.cW,new A.J(x,x,w,x,x,x,C.x),x,x,x,C.hu,x,x,x),C.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aH),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a3,x)},
bjZ(d,e,f,g){return this.asL(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gaie()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bIc()
t=y.w
s=A.aO(d,k,t).w
r=y.p
q=A.a([D.ccy],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k,k))
q=A.O(A.a([A.a4(A.z(q,C.G,C.h,C.l),1),A.b9(k,!0,k,A.cy(k,A.y(k,C.iQ,C.r,k,k,C.c6,k,44,k,k,k,k,44),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bI7(d),k,k,k,k,k,k,!1,C.aH),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a3,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.ch7,A.O(A.a([V.d6l(A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),l.e,k,k,k,k,k,2,D.aFm,C.U,!0,k,!0,k,!1,k,C.aC,k,k,k,k,C.fI,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.an,k,k,k,k,k,k,k,k,k,k,k,D.aaz,!0,C.dF,k,C.b_,k,k,k,k)),C.bh,D.ccC],r),C.ee,C.bS,C.l,0,C.aK)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cZ4(v)+" no teto":"Passa o teto em "+B.cZ4(-v)
o.push(A.h(m,k,k,k,k,A.aJ(k,k,n?C.W:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.ceT)
p=A.y(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.J(C.a4,k,k,p,k,k,C.x),k,k,k,C.bo,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aI,k,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bA(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d4,o,k),A.y(C.bc,A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),x,k,k,k,k,k,2,D.aF0,C.U,!0,k,!0,k,!1,k,C.aC,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.an,k,k,k,k,k,k,k,k,k,k,k,C.fk,!0,C.au,k,C.he,k,k,k,k),C.r,k,k,new A.J(C.a4,k,m,n,k,k,C.x),k,52,k,C.fW,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bKX)
n.push(C.a_)
n.push(new U.a1t(l.r,new B.bI8(l),k))
n.push(C.a_)
n.push(new A.S(C.d4,A.h("ESTADO",k,k,k,k,C.aI,k,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bjZ("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bI9(l)),l.asL("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bIa(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.ay(p)))
m=l.f
m.toString
m=A.q(w.$1(A.an(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.ax(w)}o.push(A.b9(k,!0,k,A.cy(C.br,A.aH(A.O(A.a([D.aA1,A.h(w,k,k,k,k,C.ce,k,k,k),C.e_,C.kD],r),C.v,C.h,C.l,0,k),56,k),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bIb(l,d),k,k,k,k,k,k,!1,C.aH),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a3,k))}n.push(A.y(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.J(C.a4,k,k,x,k,k,C.x),k,k,k,C.cu,k,k,k))
n.push(C.a_)
n.push(D.cca)
x=A.dT(A.z(n,C.E,C.h,C.l),C.y,k,C.eh,k,C.av)
t=A.aO(d,C.b6,t).w
w=A.ci(u?C.z:C.z.ce(0.35),k,k,C.t,k,k,C.ab,k,k,C.eL)
return new A.S(new A.a3(0,0,0,s.f.d),A.z(A.a([new A.S(C.jH,q,k),new A.de(1,C.b4,x,k),new A.S(new A.a3(20,16,20,20+t.r.d),A.aH(A.bE(A.h(u?"Guardar \xb7 "+B.cZ4(j):"Guardar",k,k,k,k,k,k,k,k),l.gaT9(),w),52,k),k)],r),C.E,C.h,C.J),k)}}
B.Xc.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CJ(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eL(new A.a6(j,new B.bNO(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.amh(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNP(l),w),w.i("w.E"))
C.e.cr(v,new B.bNQ())
j=y.T
u=e.G(A.cH($.cr(),new B.bNR(),y.v,j),j)
t=B.dhF(l.e.c)
if(u==null)s=I.Fz
else{j=e.G($.aW9().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fz
j=J.dc(j,new B.bNS(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aO(d,k,y.w).w
w=A.bM(A.y(k,k,C.r,k,k,new A.J(C.bH,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.av(d).ok.r,k,k,k)
q=A.a4(new B.aif("Gasto",A.aK(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aB,A.O(A.a([q,C.af,A.a4(A.aW(new B.aif("Teto \xb7 tocar para mudar",p===0?"Definir":A.aK(p,!1),k),new B.bNT(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bi,A.h("Contratado na app",k,k,k,k,A.av(d).ok.w,k,k,k),C.Q],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aDk(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.h("Despesas",k,k,k,k,A.av(d).ok.w,k,k,k))
p.push(C.Q)
w=v.length
if(w===0)p.push(D.bLg)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.is,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aU(C.j.k(A.ay(q)),2,"0")+"/"+C.f.aU(C.j.k(A.an(q)),2,"0")+"/"+A.ax(q),k,k,k,k,k,k,k,k)
p.push(A.jp(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aK(m.f,!1),k,k,k,k,D.c69,k,k,k),C.ac,new P.Dj(m.w,new B.bNU(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.Jk,k)],o),C.v,C.h,C.J,0,k),k))}return A.bB(!0,new A.e4(new A.aR(0,1/0,0,j.a.b*0.8),A.d6(p,k,L.D6,k,k,!1,!0),k),k,C.Z,!0)}}
B.aif.prototype={
u(d){var x=null,w=A.W(16)
return A.y(x,A.z(A.a([A.h(this.c,x,x,x,x,C.bf,x,x,x),C.as,A.h(this.d,x,x,x,x,M.aam,x,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.J(C.a4,x,x,w,x,x,C.x),x,x,x,C.d_,x,x,x)}}
B.aCv.prototype={
ba(d,e){var x,w=y.t,v=e.G(A.cH($.cr(),new B.bJc(),y.v,w),w),u=e.G($.d1W(),y.o)
w=e.G($.uz(),y.l)
x=w.gv(w)
return A.hE(u,new B.bJd(this,new B.bJi(x==null?C.ff:x),v),new B.bJe(e),new B.bJf(),!1,!0,!1)}}
B.anG.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.f7
s=new A.b6(999,999)
r=new A.bg(o.ce(0.25),1,C.ai,-1)
q=A.b5(C.i8,o,p,p,13)
t=A.y(p,A.O(A.a([q,C.t2,new A.de(1,C.b4,A.h(u,1,C.a1,p,p,new A.Q(!0,o,p,p,p,p,14,C.d6,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b5(C.ia,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afI,new A.J(t,p,new A.dN(r,r,r,r),new A.cx(s,s,s,s),p,p,C.x),p,p,p,D.aus,p,p,p)
m.push(new A.ju(new A.n9(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a3,p,p,p,p),!1,!1,p,!1,!1,new A.ih(t,new B.aYT(d),p,p),p))}return A.e2(C.be,m,C.r,C.bj,6,6)}}
var z=a.updateTypes(["B(i6)","T(T,i6)","v(i6,i6)","T(T,DE)","zY()","F<~>(c?)","F<~>()","NR(N)","B(DE)","F<lT>()","Xc(N)","~(i6)","~()","B(ns)","B(rO)","i6(a5<c,@>)","DO()"])
B.cHQ.prototype={
$1(d){return this.aFD(d)},
aFD(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.G(A.cH($.cr(),new B.cHM(),y.v,f),f)
f=J.a7(e)
if(f.gZ(e)){v=D.bzG
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.t();)u.push(t.gE(t).a)
t=$.P()
s=t.b
s===$&&A.b()
r=y.G
q=s.P("budgets").ai(0,"wedding_id, total").dP("wedding_id",u).b3(new B.cHN(),r)
p=t.b.P("budget_categories").ai(0,"wedding_id, amount").dP("wedding_id",u).b3(new B.cHO(),r)
o=t.b.P("expenses").ai(0,"wedding_id, amount, paid").dP("wedding_id",u).b3(new B.cHP(),r)
r=y.N
u=y.i
t=A.E(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bi(a3,s),m=A.u(n),n=new A.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E")
case 4:if(!n.t()){x=5
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
t.j(0,A.a_(k.h(l,"wedding_id")),A.du(k.h(l,"total")))
x=4
break
case 5:j=A.E(r,u)
d=J
x=6
return A.d(p,$async$$1)
case 6:n=d.bi(a3,s),m=A.u(n),n=new A.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.a_(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=A.aF(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=A.E(r,u)
d=J
x=9
return A.d(o,$async$$1)
case 9:u=d.bi(a3,s),s=A.u(u),u=new A.aj(u,u.gA(u),s.i("aj<V.E>")),s=s.i("V.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.a_(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=A.aF(n.h(r,"amount"))
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
u.push(new A.aN5([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1293}
B.cHM.prototype={
$1(d){return d.c},
$S:151}
B.cHN.prototype={
$1(d){return d},
$S:30}
B.cHO.prototype={
$1(d){return d},
$S:30}
B.cHP.prototype={
$1(d){return d},
$S:30}
B.b3W.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5z.prototype={
$1(d){return d.w},
$S:z+0}
B.b5A.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5w.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.b5x.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b5y.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bLe.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bLf.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bLw.prototype={
$0(){return this.a.gS().a_(0,$.CJ().gaX(),y.x).ZX(0).dT(new B.bLv())},
$S:1}
B.bLv.prototype={
$1(d){},
$S:11}
B.bLa.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLc.prototype={
$1(d){return A.CF(C.k.a9(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bLd(),null)+" \u20ac"},
$S:115}
B.bLd.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:44}
B.bLb.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a1(v," \xb7 ")
u=x&&u>0?u:null
return new B.NR(v,u,w.d,null)},
$S:z+7}
B.bLk.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bLl.prototype={
$1(d){return d.x!==C.ea&&d.b===this.a},
$S:58}
B.bLu.prototype={
$2(d,e){return A.jg(d,this.a.ld(e))},
$1(d){return this.$2(d,null)},
$S:1296}
B.bLm.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLn.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bLo.prototype={
$0(){return this.a.IM(this.b.a)},
$S:0}
B.bLp.prototype={
$0(){var x=this.a
return x.p(new B.bLj(x))},
$S:0}
B.bLj.prototype={
$0(){return this.a.w=D.Ji},
$S:0}
B.bLq.prototype={
$0(){var x=this.a
return x.p(new B.bLi(x))},
$S:0}
B.bLi.prototype={
$0(){return this.a.w=D.abV},
$S:0}
B.bLr.prototype={
$0(){var x=this.a
return x.p(new B.bLh(x))},
$S:0}
B.bLh.prototype={
$0(){return this.a.w=D.abU},
$S:0}
B.bLs.prototype={
$0(){var x=this.a
return x.p(new B.bLg(x))},
$S:0}
B.bLg.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bLt.prototype={
$0(){return B.Cy(this.a.gS().a_(0,$.cr(),y.v).b.a)},
$S:z+9}
B.cEg.prototype={
$1(d){var x=null,w=this.b
return new A.eS(A.h(this.a,x,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.cu(),w,x,x,x,x,x,2,D.aFz,C.U,!0,x,!0,x,!1,x,C.aC,x,x,x,x,C.fI,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.an,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b_,x,x,x,x),A.a([A.cA(C.cS,x,x,new B.cEe(d),x,x),A.bE(C.dA,new B.cEf(d,w),x)],y.p),x)},
$S:19}
B.cEe.prototype={
$0(){return A.am(this.a,!1).bm()},
$S:0}
B.cEf.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aX(w," ","")
return x.ae(A.eW(A.aX(w,",",".")))},
$S:0}
B.cEp.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bn(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bn(2100,1,1,0,0):x)},
$S:z+2}
B.bNK.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bNM.prototype={
$0(){return A.bW(null,new B.bNN(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNN.prototype={
$1(d){return new B.Xc(this.a.e.a,null)},
$S:z+10}
B.bNL.prototype={
$0(){return B.akQ(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKA.prototype={
$0(){var x=this.a
A.am(x,!1).bm()
A.ad(x).ak("/bookings",null,y.X)},
$S:0}
B.bKz.prototype={
$3(d,e,f){return A.kM(A.b5(C.i6,this.a,null,null,null),C.t,!0)},
$S:103}
B.bXM.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.amh().gaX(),y.h).OR(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a2(A.bZ(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bXI.prototype={
$0(){var x=this
return A.rG(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bXJ.prototype={
$0(){return A.ad(this.a).ak("/bookings",null,y.X)},
$S:0}
B.bXK.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bXL.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bIf.prototype={
$0(){return this.a.p(new B.bIe())},
$S:0}
B.bIe.prototype={
$0(){},
$S:0}
B.bIg.prototype={
$0(){return this.a.p(new B.bId())},
$S:0}
B.bId.prototype={
$0(){},
$S:0}
B.bI1.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:44}
B.bI2.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bIc.prototype={
$1(d){return C.f.aU(C.j.k(d),2,"0")},
$S:39}
B.bI7.prototype={
$0(){return A.am(this.a,!1).bm()},
$S:0}
B.bI8.prototype={
$1(d){var x=this.a
return x.p(new B.bI6(x,d))},
$S:130}
B.bI6.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bI9.prototype={
$0(){var x=this.a
return x.p(new B.bI5(x))},
$S:0}
B.bI5.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bIa.prototype={
$0(){var x=this.a
return x.p(new B.bI4(x))},
$S:0}
B.bI4.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bIb.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.alJ(v.b,A.bn(A.ax(t)-1,1,1,0,0),r,A.bn(A.ax(t)+5,1,1,0,0)),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bI3(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bI3.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNO.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNP.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNQ.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bn(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bn(2100,1,1,0,0):x)},
$S:z+2}
B.bNR.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bNS.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bNT.prototype={
$0(){var x=this.c
return B.akQ(this.a,this.b,x.a,x.d)},
$S:0}
B.bNU.prototype={
$1(d){return this.a.a_(0,$.amh().gaX(),y.h).OR(this.b.a)},
$S:155}
B.bJc.prototype={
$1(d){return d.c},
$S:151}
B.bJi.prototype={
$2(d,e){return A.jg(d,this.a.ld(e))},
$S:43}
B.bJf.prototype={
$0(){return D.bLU},
$S:92}
B.bJe.prototype={
$2(d,e){return A.JL(A.a([new A.hu("Tentar outra vez",new B.bJ5(this.a),!1,null)],y.p),C.eU,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1297}
B.bJ5.prototype={
$0(){return this.a.aj($.d1W())},
$S:0}
B.bJd.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bJg(g),e=new B.bJh(g,this.b),d=J.c8(a4),a0=d.d_(a4,0,new B.bJ6()),a1=d.d_(a4,0,new B.bJ7(f)),a2=d.d_(a4,0,new B.bJ8(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ap(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C3(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aK(a1,!1)
w=a0>0
v=w?"de "+A.aK(a0,!1):"gastos"
u=w?C.k.ah(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aL(a1/a0*100)+"% dos tetos":""
x=A.vi(i,""+t+" "+r+w,"Todos os eventos",C.hG,u,v,x)
v=y.p
u=A.a([new A.DZ(A.a([new A.lb("Gasto",A.aK(a1,!1),h,i),new A.lb("Por pagar",A.aK(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eK(a4,0,y.A),r=J.ap(t.a),q=t.b,t=new A.ca(r,q,A.u(t).i("ca<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.Z(q+n,r.gE(r)):A.al(A.c7())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iJ)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a1,i,i,C.a9,i,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aK(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aK(j[3]+e.$1(j[0]),!1))}n=A.z(A.a([n,C.aU,A.h(C.e.a1(k," \xb7 "),i,i,i,i,C.L,i,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.ih(A.y(i,A.O(A.a([new A.bK(1,C.at,n,i),C.af,A.h(A.aK(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i,i),C.bh,C.kD],v),C.v,C.h,C.l,0,i),C.r,C.al,C.cW,i,i,i,i,C.cm,i,i,i),new B.bJ9(o,g),i,i))
C.e.n(w,l)}return A.z(A.a([x,new A.c5("N\xfameros",i,u,16,i),new A.c5("Por evento \xb7 "+d,i,w,16,i),D.aBb],v),C.E,C.h,C.l)},
$S:1298}
B.bJg.prototype={
$1(d){return J.dc(this.a.e,new B.bJ3(d)).d_(0,0,new B.bJ4())},
$S:182}
B.bJ3.prototype={
$1(d){return d.b===this.a&&d.x!==C.ea},
$S:58}
B.bJ4.prototype={
$2(d,e){return d+e.w},
$S:456}
B.bJh.prototype={
$1(d){return J.dc(this.a.e,new B.bJa(d)).d_(0,0,new B.bJb(this.b))},
$S:182}
B.bJa.prototype={
$1(d){return d.b===this.a&&d.x!==C.ea},
$S:58}
B.bJb.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:456}
B.bJ6.prototype={
$2(d,e){return d+e.a[2]},
$S:271}
B.bJ7.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:271}
B.bJ8.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:271}
B.bJ9.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYT.prototype={
$0(){return A.ad(this.a).ak("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKt","cZX",15)
w(B,"dKs","drh",16)
v(B.DO.prototype,"giI","d5",4)
var t
u(t=B.abY.prototype,"gaq_","U1",5)
v(t,"gaRY","Qw",6)
v(B.abC.prototype,"gaT9","aTa",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[B.cHQ,B.cHM,B.cHN,B.cHO,B.cHP,B.b5z,B.b5A,B.b5w,B.b5y,B.bLv,B.bLc,B.bLd,B.bLb,B.bLk,B.bLl,B.bLu,B.bLn,B.cEg,B.bNK,B.bNN,B.bKz,B.bXM,B.bI1,B.bIc,B.bI8,B.bNO,B.bNP,B.bNR,B.bNS,B.bNU,B.bJc,B.bJd,B.bJg,B.bJ3,B.bJh,B.bJa])
x(A.K,[B.DE,B.b3V,B.zY,B.Mr,B.a7X,B.aCq])
x(A.cL,[B.b3W,B.bLa,B.bLm,B.cEp,B.bNQ,B.bJi,B.bJe,B.bJ4,B.bJb,B.bJ6,B.bJ7,B.bJ8])
w(B.DO,A.fd)
x(A.bQ,[B.b5x,B.bLe,B.bLf,B.bLw,B.bLo,B.bLp,B.bLj,B.bLq,B.bLi,B.bLr,B.bLh,B.bLs,B.bLg,B.bLt,B.cEe,B.cEf,B.bNM,B.bNL,B.bKA,B.bXI,B.bXJ,B.bXK,B.bXL,B.bIf,B.bIe,B.bIg,B.bId,B.bI2,B.bI7,B.bI6,B.bI9,B.bI5,B.bIa,B.bI4,B.bIb,B.bI3,B.bNT,B.bJf,B.bJ5,B.bJ9,B.aYT])
w(B.abX,A.f_)
w(B.D8,A.dA)
w(B.abY,A.dv)
x(A.M,[B.aPR,B.aDN,B.aDk,B.XA,B.aif,B.anG])
x(A.ex,[B.aDO,B.aGy,B.Xc,B.aCv])
w(B.NR,A.G)
w(B.abC,A.Y)})()
A.bu(b.typeUniverse,JSON.parse('{"DO":{"fd":["zY"]},"NR":{"G":[],"e":[],"f":[]},"Xc":{"G":[],"e":[],"f":[]},"D8":{"G":[],"e":[],"f":[]},"abY":{"Y":["D8"]},"aPR":{"M":[],"e":[],"f":[]},"aDN":{"M":[],"e":[],"f":[]},"aDO":{"G":[],"e":[],"f":[]},"aDk":{"M":[],"e":[],"f":[]},"aGy":{"G":[],"e":[],"f":[]},"XA":{"M":[],"e":[],"f":[]},"abC":{"Y":["NR"]},"aif":{"M":[],"e":[],"f":[]},"aCv":{"G":[],"e":[],"f":[]},"anG":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.x
return{l:x("az<fb>"),k:x("az<t<rO>>"),u:x("az<t<fL>>"),o:x("az<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("az<a5<c,t<c>>>"),x:x("zB"),b:x("uN"),d:x("rT"),Z:x("om"),v:x("ee"),_:x("i6"),h:x("DO"),g:x("zY"),D:x("r<DE>"),r:x("r<i6>"),Q:x("r<lb>"),F:x("r<ek>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7X>"),c:x("r<Mr>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fL>"),t:x("t<fn>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a5<c,@>"),w:x("dh"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lT"),N:x("c"),B:x("aCq"),q:x("dr"),i:x("T"),z:x("@"),S:x("v"),X:x("K?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afI=new A.aR(0,1/0,32,1/0)
D.aus=new A.a3(8,5,6,5)
D.c8j=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null,null)
D.aA1=new A.bK(1,C.at,D.c8j,null)
D.bzn=x([],y.r)
D.aA8=new B.zY(!1,D.bzn)
D.aB9=new A.hg("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBb=new A.hg("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBt=new A.hg("Sem pagamentos nesta vista.",8,null)
D.aF0=new A.dC(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bt,null,null,C.bt,C.bt,!0,null,null,null,null)
D.aFm=new A.dC(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bt,null,null,C.bt,C.bt,!0,null,null,null,null)
D.aFz=new A.dC(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aHj=new A.dW("Pago",C.d0,null)
D.aHq=new A.dW("Por pagar",C.hE,null)
D.aHy=new A.lg("Or\xe7amento","Todos os teus eventos",null)
D.aHE=new A.lg("Or\xe7amento",null,null)
D.byB=x(["catering"],y.s)
D.bzF=x([],y.D)
D.bzG=x([],y.n)
D.bA4=x(["flowers_decor"],y.s)
D.bBC=x(["music_dj","bands_musicians"],y.s)
D.bCc=x(["photography"],y.s)
D.bDq=x(["venue"],y.s)
D.c9d=new A.D("A despesa precisa de um t\xedtulo",null,C.mt,null,null,null,null,null,null,null,null)
D.bKX=new A.S(T.NP,D.c9d,null)
D.aEQ=new A.vd("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kB,null)
D.bLg=new A.S(C.fV,D.aEQ,null)
D.bLU=new A.S(O.v1,C.eE,null)
D.bYn=new A.vV(!1,6,!0,null)
D.c46=new A.Q(!0,C.z,null,null,null,null,14,C.d6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c69=new A.Q(!0,null,null,null,null,null,null,C.d6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaz=new A.Q(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cca=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.bZ,null,null,null,null,null,null,null,null)
D.ccy=new A.D("Nova despesa",null,C.bk,null,null,null,null,null,null,null,null)
D.ccC=new A.D("\u20ac",null,D.aaz,null,null,null,null,null,null,null,null)
D.ceT=new A.D("Indica um valor v\xe1lido",null,C.mt,null,null,null,null,null,null,null,null)
D.ch7=new A.D("VALOR",null,C.aI,null,null,null,null,null,null,null,null)
D.Ji=new B.abX(0,"all")
D.abU=new B.abX(1,"paid")
D.abV=new B.abX(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXP","d1W",()=>C.bO.$1$1(new B.cHQ(),y.m))
x($,"dYF","amh",()=>A.mZ(B.dKs(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["I2SwJMpzx2k+AdEu64fBzonhIqQ="]=a.current})($__dart_deferred_initializers__);