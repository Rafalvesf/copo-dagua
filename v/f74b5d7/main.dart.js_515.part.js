((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cHU:function cHU(){},cHQ:function cHQ(){},cHR:function cHR(){},cHS:function cHS(){},cHT:function cHT(){},
dJH(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DE(x[v]))
return new B.b3W(d.b,u)},
DE:function DE(d){this.a=d},
b3W:function b3W(d,e){this.a=d
this.b=e},
b3X:function b3X(){},
d_0(d){var x="category",w="due_date",v=J.a7(d),u=A.a_(v.h(d,"id")),t=A.a_(v.h(d,"wedding_id")),s=A.a_(v.h(d,"title")),r=B.dFX(B.deI(A.C(v.h(d,x)))),q=B.deI(A.C(v.h(d,x))),p=A.du(v.h(d,"amount")),o=v.h(d,w)==null?null:A.de(A.a_(v.h(d,w)))
v=A.dX(v.h(d,"paid"))
return new G.i6(u,t,s,r,q,p,o,v===!0)},
deI(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dFX(d){var x
A:{if("venue"===d){x=E.y3
break A}if("catering"===d){x=E.y_
break A}if("photography"===d){x=E.y0
break A}if("music_dj"===d||"bands_musicians"===d){x=E.y1
break A}if("flowers_decor"===d){x=E.y2
break A}x=null
break A}return x},
drl(){return new B.DO()},
zY:function zY(d,e){this.a=d
this.b=e},
b5A:function b5A(){},
b5B:function b5B(){},
DO:function DO(){this.b=this.x=null},
b5x:function b5x(){},
b5y:function b5y(d,e){this.a=d
this.b=e},
b5z:function b5z(d){this.a=d},
Cy(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akY(),$async$Cy)
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
for(t=J.ao(r);t.t();)u.push(A.a_(J.i(t.gE(t),"id")))
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
m=F.cZM(F.cET(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ao(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cB(j==null?"":j)
i=k.h(l,"category")
i=J.cB(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.eW(A.p(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d4(A.p(g))
g=g==null?null:g.dM()}u.push(new B.Mr(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ao(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cB(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eW(A.p(k))
if(k==null)k=0}t.push(new B.a7X(i,k))}l=n==null?null:F.d_j(J.i(n,"total"))
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
doE(){return new B.D8(null)},
aUj(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUj=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a9(f,0)
x=3
return A.d(A.fR(!0,new B.cEi(e,new A.aF(new A.bD(u,C.aE,C.aw),$.aa())),d,y.i),$async$aUj)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUj,w)},
akR(d,e,f,g){return B.dFK(d,e,f,g)},
dFK(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akR=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUj(d,"Teto para "+f,g),$async$akR)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.CJ().gaX(),y.x).OU(f,r),$async$akR)
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
return A.m($async$akR,w)},
dcM(d){var x=A.U(d,y._)
C.e.cr(x,new B.cEr())
return x},
ddf(d){var x=C.f.aU(C.j.k(A.ay(d)),2,"0"),w=C.f.aU(C.j.k(A.an(d)),2,"0"),v=A.ax(d)===A.ax(new A.ac(Date.now(),0,!1))?"":"/"+A.ax(d)
return x+"/"+w+v},
cZ8(d){var x,w,v,u
if(d===C.k.hA(d))x=C.k.a9(d,0)
else{w=C.k.a9(d,2)
x=A.aX(w,".",",")}v=x.split(",")
u=A.CF(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bI3(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abX:function abX(d,e){this.a=d
this.b=e},
D8:function D8(d){this.a=d},
abY:function abY(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bLg:function bLg(d){this.a=d},
bLh:function bLh(d){this.a=d},
bLy:function bLy(d){this.a=d},
bLx:function bLx(){},
bLc:function bLc(){},
bLe:function bLe(){},
bLf:function bLf(){},
bLd:function bLd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLm:function bLm(){},
bLn:function bLn(d){this.a=d},
bLw:function bLw(d){this.a=d},
bLo:function bLo(){},
bLp:function bLp(){},
bLq:function bLq(d,e){this.a=d
this.b=e},
bLr:function bLr(d){this.a=d},
bLl:function bLl(d){this.a=d},
bLs:function bLs(d){this.a=d},
bLk:function bLk(d){this.a=d},
bLt:function bLt(d){this.a=d},
bLj:function bLj(d){this.a=d},
bLu:function bLu(d){this.a=d},
bLi:function bLi(d){this.a=d},
bLv:function bLv(d){this.a=d},
cEi:function cEi(d,e){this.a=d
this.b=e},
cEg:function cEg(d){this.a=d},
cEh:function cEh(d,e){this.a=d
this.b=e},
cEr:function cEr(){},
aPS:function aPS(d,e,f){this.c=d
this.d=e
this.a=f},
aDO:function aDO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDP:function aDP(d,e){this.e=d
this.a=e},
bNM:function bNM(){},
bNO:function bNO(d,e){this.a=d
this.b=e},
bNP:function bNP(d){this.a=d},
bNN:function bNN(d,e,f){this.a=d
this.b=e
this.c=f},
aDl:function aDl(d,e){this.c=d
this.a=e},
bKC:function bKC(d){this.a=d},
bKB:function bKB(d){this.a=d},
aGz:function aGz(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bXO:function bXO(d,e){this.a=d
this.b=e},
bXK:function bXK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXL:function bXL(d){this.a=d},
bXM:function bXM(d,e){this.a=d
this.b=e},
bXN:function bXN(d,e){this.a=d
this.b=e},
XA:function XA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCr:function aCr(d,e,f,g,h){var _=this
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
bIh:function bIh(d){this.a=d},
bIg:function bIg(){},
bIi:function bIi(d){this.a=d},
bIf:function bIf(){},
bI3:function bI3(){},
bI4:function bI4(d){this.a=d},
bIe:function bIe(){},
bI9:function bI9(d){this.a=d},
bIa:function bIa(d){this.a=d},
bI8:function bI8(d,e){this.a=d
this.b=e},
bIb:function bIb(d){this.a=d},
bI7:function bI7(d){this.a=d},
bIc:function bIc(d){this.a=d},
bI6:function bI6(d){this.a=d},
bId:function bId(d,e){this.a=d
this.b=e},
bI5:function bI5(d,e){this.a=d
this.b=e},
Xc:function Xc(d,e){this.e=d
this.a=e},
bNQ:function bNQ(d){this.a=d},
bNR:function bNR(d){this.a=d},
bNS:function bNS(){},
bNT:function bNT(){},
bNU:function bNU(d){this.a=d},
bNV:function bNV(d,e,f){this.a=d
this.b=e
this.c=f},
bNW:function bNW(d,e){this.a=d
this.b=e},
aig:function aig(d,e,f){this.c=d
this.d=e
this.a=f},
aCw:function aCw(d,e,f){this.e=d
this.f=e
this.a=f},
bJe:function bJe(){},
bJk:function bJk(d){this.a=d},
bJh:function bJh(){},
bJg:function bJg(d){this.a=d},
bJ7:function bJ7(d){this.a=d},
bJf:function bJf(d,e,f){this.a=d
this.b=e
this.c=f},
bJi:function bJi(d){this.a=d},
bJ5:function bJ5(d){this.a=d},
bJ6:function bJ6(){},
bJj:function bJj(d,e){this.a=d
this.b=e},
bJc:function bJc(d){this.a=d},
bJd:function bJd(d){this.a=d},
bJ8:function bJ8(){},
bJ9:function bJ9(d){this.a=d},
bJa:function bJa(d){this.a=d},
bJb:function bJb(d,e){this.a=d
this.b=e},
anH:function anH(d,e){this.c=d
this.a=e},
aYU:function aYU(d){this.a=d},
dhJ(d){var x
switch(d){case E.y3:x=D.bDt
break
case E.y_:x=D.byE
break
case E.y0:x=D.bCf
break
case E.y1:x=D.bBF
break
case E.y2:x=D.bA7
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
B.b3W.prototype={
gpZ(){return C.e.d_(this.b,0,new B.b3X())},
gaCj(){var x=this.a
return x===0?0:C.k.ah(this.gpZ()/x,0,1)}}
B.zY.prototype={
gbAh(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5A(),w),w.i("w.E"))
return x},
gbAD(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5B(),w),w.i("w.E"))
return x},
axr(d,e){var x=e==null?this.a:e
return new B.zY(x,d==null?this.b:d)},
io(d){return this.axr(null,d)},
ax9(d){return this.axr(d,null)}}
B.DO.prototype={
d5(){var x=y.T,w=this.x=A.eQ(this).G(A.cH($.cr(),new B.b5x(),y.v,x),x)
if(w!=null)A.jl(new B.b5y(this,w),y.H)
return D.aA9},
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
case 2:v.sa4(0,new t.zY(s,r.dc(g,B.dKy(),y._).by(0)))
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
u.push(B.d_0(s))
v.sa4(0,r.ax9(u))
return A.l(null,w)}})
return A.m($async$VR,w)},
OR(d){return this.bDd(d)},
bDd(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OR=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lh(v.ga4(0).b,new B.b5z(d))
m=$.P().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bi(0,A.R(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).cj()],u,u)).U("id",d).cm(0).dR(0),$async$OR)
case 2:t=l.d_0(f)
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
for(;;)switch(x){case 0:if(d==null){u.p(new B.bLg(u))
x=1
break}u.p(new B.bLh(u))
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
A.jl(new B.bLy(this),y.H)},
Qw(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Qw=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.ami()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.CJ(),y.b).b
s=t==null?null:t.b
r=C.e.d_(o.a_(0,n,y.g).b,0,new B.bLc())
t=o.a_(0,$.cr(),y.v).b
q=t==null?null:t.gcB()
t=u.c
t.toString
x=3
return A.d(A.bU(null,new B.bLd(q,s,new B.bLe(),r),!1,t,!0,!0,null,y.B),$async$Qw)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.VR(new G.i6("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Qw,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CJ(),y.b),a3=a1.G($.HZ(),y.d),a4=a1.G($.ami(),y.g),a5=a2.b,a6=a5==null?e:B.dJH(a5,a3.b)
a5=A.j3(a1.G($.j0(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iU
a5=y.T
w=a1.G(A.cH($.cr(),new B.bLm(),y.v,a5),a5)
if(f.y){a1=f.gaq_()
return A.cQ(e,C.cW,A.nN(C.f2,40,A.a([C.fv,D.aHB,K.cWz(a1,e),new B.aCw(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.dd(x,new B.bLn(w))
a1=a1.G($.uA(),y.l)
u=a1.gv(a1)
t=new B.bLw(u==null?C.ff:u)
a1=y._
a5=A.U(a4.gbAh(),a1)
for(s=v.a,r=J.c9(s),q=r.gX(s),p=v.b,o=v.$ti.i("hb<1>"),n=new A.hb(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i6("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbAD(0),a1)
for(s=r.gX(s),o=new A.hb(s,p,o),p=y.r;o.t();){r=s.gE(s)
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
n.push(new G.i6("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcM(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcM(q)
break
default:a1=e}h=C.e.d_(q,0,new B.bLo())
s=a6==null
if(s)g=D.bzI
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bLp(),p),p.i("w.E"))}if(s)a1=D.bYq
else{s=f.gaRY()
r=y.p
p=A.a([new A.pt(A.a([new A.qP(s,"Nova despesa",e)],r),e),D.aHH,K.cWz(f.gaq_(),w),new B.aPS(a6,new B.bLq(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aK(a6.gpZ(),!1)
n=a5.length
m=n===1?d:a0
l=A.aK(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c3("N\xfameros",e,A.a([new A.DZ(A.a([new A.lb("Gasto",o,""+n+" "+m,e),new A.lb("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.me(A.a([new A.ek("Todos",l===D.Ji,n+m,new B.bLr(f),e),new A.ek("Pendentes",l===D.abV,m,new B.bLs(f),e),new A.ek("Pagos",l===D.abU,n,new B.bLt(f),e)],y.F),4,!0,e),C.as],r))}o.push(new B.aGz(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c3("Pagamentos",e,o,16,e))
a1=A.a([new A.h5(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDO(g,f.x,new B.bLu(f),e))
p.push(new A.c3("Categorias",e,a1,16,e))
p.push(new A.c3("Exportar",e,A.a([new F.DP("Gastos e parceiros",!1,new B.bLv(f),e)],r),16,e))
a1=A.nN(C.f2,40,p,e,!0,!1)}return A.cQ(e,C.cW,a1,!0,e)},
IM(d){return this.aZ0(d)},
aZ0(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IM=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUj(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IM)
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
B.aPS.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpZ()>0?"Gastos "+A.aK(t.gpZ(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vj(new A.hh("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hG,0,"por definir","\u2014")}x=C.k.aL(t.gaCj()*100)
w=s-t.gpZ()<0?"Acima do teto":"Ainda tens"
v=A.aK(Math.abs(s-t.gpZ()),!1)
s=A.aK(s,!1)
u=t.gaCj()
return A.aW(A.vj(H.a1X,"Gastos "+A.aK(t.gpZ(),!1)+" \xb7 "+x+"% do teto",w,C.hG,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDO.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dy(s,0,A.eu(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDP(r[w],null))
q=A.a([A.eT(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hh(u,v.e,!0,null))}return A.z(q,C.E,C.h,C.l)}}
B.aDP.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cH($.cr(),new B.bNM(),y.v,m),m)
if(l==null)x=C.rm
else{m=e.G($.d20().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rm:m}m=A.a([],y.s)
for(w=B.dhJ(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNO(this,d)
if(w)return A.k_(!1,!1,p,v,A.aK(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mP("P\xf4r teto",new B.bNN(this,d,e),!0,p))
w=A.aK(o.b,!1)
u=A.aK(n,!1)
s=y.p
q=A.a([A.aH(new A.a4f(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aF,new B.anH(m,p)],s))
return A.k_(!1,!1,p,v,w+" de "+u,o.a,A.z(q,C.dO,C.h,C.J))}}
B.aDl.prototype={
u(d){var x,w,v=null,u=$.au,t=$.f7.ce(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fT(r,A.aH(p==null?A.kM(A.b5(C.i6,u,v,v,v),C.t,!0):A.pp(p,144,new B.bKB(u),!1,C.bG,A.wy(),!1,v,v,v),48,48),C.bb)
p=A.h(q.b,1,C.a1,v,v,D.c49,v,v,v)
x=A.b5(C.i8,u,v,v,14)
w=q.d
q=w>0?q.gQ4()+" \xb7 "+A.aK(w,!1):q.gQ4()
w=y.p
return new A.S(C.d4,A.aW(A.y(v,A.O(A.a([r,C.ae,A.a4(A.z(A.a([p,C.j8,A.O(A.a([x,C.e_,new A.d8(1,C.b3,A.h(q,1,C.a1,v,v,A.aJ(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bl,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.F,C.h,C.l),1),A.b5(C.ia,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.x),v,v,v,C.eg,v,v,v),new B.bKC(d),v),v)}}
B.aGz.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JL(A.a([new A.hh("+ Nova despesa",this.f,!0,j)],y.p),C.eU,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBu
x=new B.bXO(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+B.ddf(m)
v.push(new A.te(new A.cj(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bXK(d,e,s,q),A.HT(m)===C.f8,j))
continue}p=r?new B.bXL(d):new B.bXM(x,s)
v.push(new B.XA(s,p,r||s.w?j:new B.bXN(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XA&&v[k-1] instanceof B.XA)u.push(C.iJ)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBa)
return A.z(i,C.E,C.h,C.l)}}
B.XA.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aK(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.ddf(w))
v=C.e.a0(v," \xb7 ")
if(u)u=D.aHm
else{u=this.e
u=u!=null?new A.mP("Marcar pago",u,!0,null):D.aHt}return A.k_(!1,!1,null,this.d,v,x.c,u)}}
B.aCr.prototype={}
B.NR.prototype={
R(){var x=$.aa()
return new B.abC(new A.aF(C.ak,x),new A.aF(C.ak,x))}}
B.abC.prototype={
ac(){var x=this
x.ap()
x.d.an(0,new B.bIh(x))
x.e.an(0,new B.bIi(x))},
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
t.p(new B.bI4(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.ae(new B.aCr(x,s,u,t.r,v))},
asL(d,e,f,g,h){var x=null,w=h?C.fo:x,v=y.p,u=A.a4(A.z(A.a([A.h(d,x,x,x,x,C.a9,x,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x,x)],v),C.F,C.h,C.l),1),t=f?C.bq:x,s=f?x:A.bB(C.kr,1.5),r=f?S.vC:x
return A.b9(x,!0,x,A.cw(C.br,A.y(x,A.O(A.a([u,A.y(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.aq),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.cP,new A.I(x,x,w,x,x,x,C.x),x,x,x,C.hu,x,x,x),C.T,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aH),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a3,x)},
bjZ(d,e,f,g){return this.asL(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gaie()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bIe()
t=y.w
s=A.aO(d,k,t).w
r=y.p
q=A.a([D.ccB],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k,k))
q=A.O(A.a([A.a4(A.z(q,C.F,C.h,C.l),1),A.b9(k,!0,k,A.cw(k,A.y(k,C.iQ,C.r,k,k,C.c2,k,44,k,k,k,k,44),C.T,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bI9(d),k,k,k,k,k,k,!1,C.aH),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a3,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.cha,A.O(A.a([V.d6p(A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),l.e,k,k,k,k,k,2,D.aFp,C.T,!0,k,!0,k,!1,k,C.aC,k,k,k,k,C.fI,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.an,k,k,k,k,k,k,k,k,k,k,k,D.aaz,!0,C.dF,k,C.b_,k,k,k,k)),C.bh,D.ccF],r),C.ee,C.bS,C.l,0,C.aK)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cZ8(v)+" no teto":"Passa o teto em "+B.cZ8(-v)
o.push(A.h(m,k,k,k,k,A.aJ(k,k,n?C.W:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.ceW)
p=A.y(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a4,k,k,p,k,k,C.x),k,k,k,C.bo,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aI,k,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bB(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d4,o,k),A.y(C.bc,A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),x,k,k,k,k,k,2,D.aF3,C.T,!0,k,!0,k,!1,k,C.aC,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.an,k,k,k,k,k,k,k,k,k,k,k,C.fk,!0,C.au,k,C.he,k,k,k,k),C.r,k,k,new A.I(C.a4,k,m,n,k,k,C.x),k,52,k,C.fW,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bL_)
n.push(C.a_)
n.push(new U.a1t(l.r,new B.bIa(l),k))
n.push(C.a_)
n.push(new A.S(C.d4,A.h("ESTADO",k,k,k,k,C.aI,k,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bjZ("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bIb(l)),l.asL("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bIc(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.ay(p)))
m=l.f
m.toString
m=A.p(w.$1(A.an(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.ax(w)}o.push(A.b9(k,!0,k,A.cw(C.br,A.aH(A.O(A.a([D.aA2,A.h(w,k,k,k,k,C.ce,k,k,k),C.e_,C.kE],r),C.v,C.h,C.l,0,k),56,k),C.T,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bId(l,d),k,k,k,k,k,k,!1,C.aH),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a3,k))}n.push(A.y(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a4,k,k,x,k,k,C.x),k,k,k,C.cu,k,k,k))
n.push(C.a_)
n.push(D.ccd)
x=A.dT(A.z(n,C.E,C.h,C.l),C.y,k,C.eh,k,C.av)
t=A.aO(d,C.b6,t).w
w=A.ci(u?C.z:C.z.ce(0.35),k,k,C.t,k,k,C.ab,k,k,C.eL)
return new A.S(new A.a3(0,0,0,s.f.d),A.z(A.a([new A.S(C.jH,q,k),new A.d8(1,C.b3,x,k),new A.S(new A.a3(20,16,20,20+t.r.d),A.aH(A.bE(A.h(u?"Guardar \xb7 "+B.cZ8(j):"Guardar",k,k,k,k,k,k,k,k),l.gaT9(),w),52,k),k)],r),C.E,C.h,C.J),k)}}
B.Xc.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CJ(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eL(new A.a6(j,new B.bNQ(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.ami(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNR(l),w),w.i("w.E"))
C.e.cr(v,new B.bNS())
j=y.T
u=e.G(A.cH($.cr(),new B.bNT(),y.v,j),j)
t=B.dhJ(l.e.c)
if(u==null)s=I.Fz
else{j=e.G($.aWa().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fz
j=J.dd(j,new B.bNU(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aO(d,k,y.w).w
w=A.bM(A.y(k,k,C.r,k,k,new A.I(C.bH,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.av(d).ok.r,k,k,k)
q=A.a4(new B.aig("Gasto",A.aK(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aB,A.O(A.a([q,C.af,A.a4(A.aW(new B.aig("Teto \xb7 tocar para mudar",p===0?"Definir":A.aK(p,!1),k),new B.bNV(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bi,A.h("Contratado na app",k,k,k,k,A.av(d).ok.w,k,k,k),C.Q],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aDl(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.h("Despesas",k,k,k,k,A.av(d).ok.w,k,k,k))
p.push(C.Q)
w=v.length
if(w===0)p.push(D.bLj)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.is,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aU(C.j.k(A.ay(q)),2,"0")+"/"+C.f.aU(C.j.k(A.an(q)),2,"0")+"/"+A.ax(q),k,k,k,k,k,k,k,k)
p.push(A.jp(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aK(m.f,!1),k,k,k,k,D.c6c,k,k,k),C.ac,new P.Dj(m.w,new B.bNW(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.Jk,k)],o),C.v,C.h,C.J,0,k),k))}return A.bA(!0,new A.e4(new A.aR(0,1/0,0,j.a.b*0.8),A.d5(p,k,L.D6,k,k,!1,!0),k),k,C.Z,!0)}}
B.aig.prototype={
u(d){var x=null,w=A.W(16)
return A.y(x,A.z(A.a([A.h(this.c,x,x,x,x,C.bf,x,x,x),C.as,A.h(this.d,x,x,x,x,M.aam,x,x,x)],y.p),C.F,C.h,C.l),C.r,x,x,new A.I(C.a4,x,x,w,x,x,C.x),x,x,x,C.d_,x,x,x)}}
B.aCw.prototype={
ba(d,e){var x,w=y.t,v=e.G(A.cH($.cr(),new B.bJe(),y.v,w),w),u=e.G($.d2_(),y.o)
w=e.G($.uA(),y.l)
x=w.gv(w)
return A.hE(u,new B.bJf(this,new B.bJk(x==null?C.ff:x),v),new B.bJg(e),new B.bJh(),!1,!0,!1)}}
B.anH.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.f7
s=new A.b6(999,999)
r=new A.bh(o.ce(0.25),1,C.aj,-1)
q=A.b5(C.i8,o,p,p,13)
t=A.y(p,A.O(A.a([q,C.t2,new A.d8(1,C.b3,A.h(u,1,C.a1,p,p,new A.Q(!0,o,p,p,p,p,14,C.d6,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b5(C.ia,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afI,new A.I(t,p,new A.dN(r,r,r,r),new A.cy(s,s,s,s),p,p,C.x),p,p,p,D.aut,p,p,p)
m.push(new A.ju(new A.n9(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a3,p,p,p,p),!1,!1,p,!1,!1,new A.ih(t,new B.aYU(d),p,p),p))}return A.e2(C.be,m,C.r,C.bk,6,6)}}
var z=a.updateTypes(["B(i6)","T(T,i6)","v(i6,i6)","T(T,DE)","zY()","F<~>(c?)","F<~>()","NR(N)","B(DE)","F<lT>()","Xc(N)","~(i6)","~()","B(ns)","B(rO)","i6(a5<c,@>)","DO()"])
B.cHU.prototype={
$1(d){return this.aFD(d)},
aFD(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.G(A.cH($.cr(),new B.cHQ(),y.v,f),f)
f=J.a7(e)
if(f.gZ(e)){v=D.bzJ
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.t();)u.push(t.gE(t).a)
t=$.P()
s=t.b
s===$&&A.b()
r=y.G
q=s.P("budgets").ai(0,"wedding_id, total").dP("wedding_id",u).b3(new B.cHR(),r)
p=t.b.P("budget_categories").ai(0,"wedding_id, amount").dP("wedding_id",u).b3(new B.cHS(),r)
o=t.b.P("expenses").ai(0,"wedding_id, amount, paid").dP("wedding_id",u).b3(new B.cHT(),r)
r=y.N
u=y.i
t=A.E(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bf(a3,s),m=A.u(n),n=new A.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E")
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
case 6:n=d.bf(a3,s),m=A.u(n),n=new A.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.a_(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=A.aE(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=A.E(r,u)
d=J
x=9
return A.d(o,$async$$1)
case 9:u=d.bf(a3,s),s=A.u(u),u=new A.aj(u,u.gA(u),s.i("aj<V.E>")),s=s.i("V.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.a_(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=A.aE(n.h(r,"amount"))
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
u.push(new A.aN6([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1293}
B.cHQ.prototype={
$1(d){return d.c},
$S:151}
B.cHR.prototype={
$1(d){return d},
$S:30}
B.cHS.prototype={
$1(d){return d},
$S:30}
B.cHT.prototype={
$1(d){return d},
$S:30}
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
$S:38}
B.b5y.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b5z.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bLg.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bLh.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bLy.prototype={
$0(){return this.a.gS().a_(0,$.CJ().gaX(),y.x).ZX(0).dT(new B.bLx())},
$S:1}
B.bLx.prototype={
$1(d){},
$S:11}
B.bLc.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLe.prototype={
$1(d){return A.CF(C.k.a9(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bLf(),null)+" \u20ac"},
$S:115}
B.bLf.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bLd.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a0(v," \xb7 ")
u=x&&u>0?u:null
return new B.NR(v,u,w.d,null)},
$S:z+7}
B.bLm.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bLn.prototype={
$1(d){return d.x!==C.ea&&d.b===this.a},
$S:58}
B.bLw.prototype={
$2(d,e){return A.jg(d,this.a.ld(e))},
$1(d){return this.$2(d,null)},
$S:1296}
B.bLo.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bLp.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bLq.prototype={
$0(){return this.a.IM(this.b.a)},
$S:0}
B.bLr.prototype={
$0(){var x=this.a
return x.p(new B.bLl(x))},
$S:0}
B.bLl.prototype={
$0(){return this.a.w=D.Ji},
$S:0}
B.bLs.prototype={
$0(){var x=this.a
return x.p(new B.bLk(x))},
$S:0}
B.bLk.prototype={
$0(){return this.a.w=D.abV},
$S:0}
B.bLt.prototype={
$0(){var x=this.a
return x.p(new B.bLj(x))},
$S:0}
B.bLj.prototype={
$0(){return this.a.w=D.abU},
$S:0}
B.bLu.prototype={
$0(){var x=this.a
return x.p(new B.bLi(x))},
$S:0}
B.bLi.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bLv.prototype={
$0(){return B.Cy(this.a.gS().a_(0,$.cr(),y.v).b.a)},
$S:z+9}
B.cEi.prototype={
$1(d){var x=null,w=this.b
return new A.eS(A.h(this.a,x,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.cu(),w,x,x,x,x,x,2,D.aFC,C.T,!0,x,!0,x,!1,x,C.aC,x,x,x,x,C.fI,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.an,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b_,x,x,x,x),A.a([A.cA(C.cT,x,x,new B.cEg(d),x,x),A.bE(C.dA,new B.cEh(d,w),x)],y.p),x)},
$S:19}
B.cEg.prototype={
$0(){return A.am(this.a,!1).bm()},
$S:0}
B.cEh.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aX(w," ","")
return x.ae(A.eW(A.aX(w,",",".")))},
$S:0}
B.cEr.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bn(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bn(2100,1,1,0,0):x)},
$S:z+2}
B.bNM.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bNO.prototype={
$0(){return A.bU(null,new B.bNP(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNP.prototype={
$1(d){return new B.Xc(this.a.e.a,null)},
$S:z+10}
B.bNN.prototype={
$0(){return B.akR(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKC.prototype={
$0(){var x=this.a
A.am(x,!1).bm()
A.ad(x).ak("/bookings",null,y.X)},
$S:0}
B.bKB.prototype={
$3(d,e,f){return A.kM(A.b5(C.i6,this.a,null,null,null),C.t,!0)},
$S:103}
B.bXO.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.ami().gaX(),y.h).OR(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a2(A.c_(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bXK.prototype={
$0(){var x=this
return A.rG(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bXL.prototype={
$0(){return A.ad(this.a).ak("/bookings",null,y.X)},
$S:0}
B.bXM.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bXN.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bIh.prototype={
$0(){return this.a.p(new B.bIg())},
$S:0}
B.bIg.prototype={
$0(){},
$S:0}
B.bIi.prototype={
$0(){return this.a.p(new B.bIf())},
$S:0}
B.bIf.prototype={
$0(){},
$S:0}
B.bI3.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bI4.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bIe.prototype={
$1(d){return C.f.aU(C.j.k(d),2,"0")},
$S:39}
B.bI9.prototype={
$0(){return A.am(this.a,!1).bm()},
$S:0}
B.bIa.prototype={
$1(d){var x=this.a
return x.p(new B.bI8(x,d))},
$S:130}
B.bI8.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bIb.prototype={
$0(){var x=this.a
return x.p(new B.bI7(x))},
$S:0}
B.bI7.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bIc.prototype={
$0(){var x=this.a
return x.p(new B.bI6(x))},
$S:0}
B.bI6.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bId.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.alK(v.b,A.bn(A.ax(t)-1,1,1,0,0),r,A.bn(A.ax(t)+5,1,1,0,0)),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bI5(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bI5.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNQ.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNR.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNS.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bn(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bn(2100,1,1,0,0):x)},
$S:z+2}
B.bNT.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bNU.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bNV.prototype={
$0(){var x=this.c
return B.akR(this.a,this.b,x.a,x.d)},
$S:0}
B.bNW.prototype={
$1(d){return this.a.a_(0,$.ami().gaX(),y.h).OR(this.b.a)},
$S:155}
B.bJe.prototype={
$1(d){return d.c},
$S:151}
B.bJk.prototype={
$2(d,e){return A.jg(d,this.a.ld(e))},
$S:43}
B.bJh.prototype={
$0(){return D.bLX},
$S:92}
B.bJg.prototype={
$2(d,e){return A.JL(A.a([new A.hh("Tentar outra vez",new B.bJ7(this.a),!1,null)],y.p),C.eU,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1297}
B.bJ7.prototype={
$0(){return this.a.aj($.d2_())},
$S:0}
B.bJf.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bJi(g),e=new B.bJj(g,this.b),d=J.c9(a4),a0=d.d_(a4,0,new B.bJ8()),a1=d.d_(a4,0,new B.bJ9(f)),a2=d.d_(a4,0,new B.bJa(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ao(this.c);x.t();){w=x.gE(x)
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
x=A.vj(i,""+t+" "+r+w,"Todos os eventos",C.hG,u,v,x)
v=y.p
u=A.a([new A.DZ(A.a([new A.lb("Gasto",A.aK(a1,!1),h,i),new A.lb("Por pagar",A.aK(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.ew(a4,0,y.A),r=J.ao(t.a),q=t.b,t=new A.bX(r,q,A.u(t).i("bX<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.al(A.c0())
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
k.push("por pagar "+A.aK(j[3]+e.$1(j[0]),!1))}n=A.z(A.a([n,C.aU,A.h(C.e.a0(k," \xb7 "),i,i,i,i,C.L,i,i,i)],v),C.F,C.h,C.l)
k=o.a.a
l.push(new A.ih(A.y(i,A.O(A.a([new A.bK(1,C.at,n,i),C.af,A.h(A.aK(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i,i),C.bh,C.kE],v),C.v,C.h,C.l,0,i),C.r,C.al,C.cP,i,i,i,i,C.cm,i,i,i),new B.bJb(o,g),i,i))
C.e.n(w,l)}return A.z(A.a([x,new A.c3("N\xfameros",i,u,16,i),new A.c3("Por evento \xb7 "+d,i,w,16,i),D.aBc],v),C.E,C.h,C.l)},
$S:1298}
B.bJi.prototype={
$1(d){return J.dd(this.a.e,new B.bJ5(d)).d_(0,0,new B.bJ6())},
$S:182}
B.bJ5.prototype={
$1(d){return d.b===this.a&&d.x!==C.ea},
$S:58}
B.bJ6.prototype={
$2(d,e){return d+e.w},
$S:456}
B.bJj.prototype={
$1(d){return J.dd(this.a.e,new B.bJc(d)).d_(0,0,new B.bJd(this.b))},
$S:182}
B.bJc.prototype={
$1(d){return d.b===this.a&&d.x!==C.ea},
$S:58}
B.bJd.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:456}
B.bJ8.prototype={
$2(d,e){return d+e.a[2]},
$S:271}
B.bJ9.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:271}
B.bJa.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:271}
B.bJb.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYU.prototype={
$0(){return A.ad(this.a).ak("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKy","d_0",15)
w(B,"dKx","drl",16)
v(B.DO.prototype,"giI","d5",4)
var t
u(t=B.abY.prototype,"gaq_","U1",5)
v(t,"gaRY","Qw",6)
v(B.abC.prototype,"gaT9","aTa",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[B.cHU,B.cHQ,B.cHR,B.cHS,B.cHT,B.b5A,B.b5B,B.b5x,B.b5z,B.bLx,B.bLe,B.bLf,B.bLd,B.bLm,B.bLn,B.bLw,B.bLp,B.cEi,B.bNM,B.bNP,B.bKB,B.bXO,B.bI3,B.bIe,B.bIa,B.bNQ,B.bNR,B.bNT,B.bNU,B.bNW,B.bJe,B.bJf,B.bJi,B.bJ5,B.bJj,B.bJc])
x(A.K,[B.DE,B.b3W,B.zY,B.Mr,B.a7X,B.aCr])
x(A.cL,[B.b3X,B.bLc,B.bLo,B.cEr,B.bNS,B.bJk,B.bJg,B.bJ6,B.bJd,B.bJ8,B.bJ9,B.bJa])
w(B.DO,A.fd)
x(A.bQ,[B.b5y,B.bLg,B.bLh,B.bLy,B.bLq,B.bLr,B.bLl,B.bLs,B.bLk,B.bLt,B.bLj,B.bLu,B.bLi,B.bLv,B.cEg,B.cEh,B.bNO,B.bNN,B.bKC,B.bXK,B.bXL,B.bXM,B.bXN,B.bIh,B.bIg,B.bIi,B.bIf,B.bI4,B.bI9,B.bI8,B.bIb,B.bI7,B.bIc,B.bI6,B.bId,B.bI5,B.bNV,B.bJh,B.bJ7,B.bJb,B.aYU])
w(B.abX,A.f_)
w(B.D8,A.dB)
w(B.abY,A.dv)
x(A.M,[B.aPS,B.aDO,B.aDl,B.XA,B.aig,B.anH])
x(A.ey,[B.aDP,B.aGz,B.Xc,B.aCw])
w(B.NR,A.G)
w(B.abC,A.Z)})()
A.bu(b.typeUniverse,JSON.parse('{"DO":{"fd":["zY"]},"NR":{"G":[],"e":[],"f":[]},"Xc":{"G":[],"e":[],"f":[]},"D8":{"G":[],"e":[],"f":[]},"abY":{"Z":["D8"]},"aPS":{"M":[],"e":[],"f":[]},"aDO":{"M":[],"e":[],"f":[]},"aDP":{"G":[],"e":[],"f":[]},"aDl":{"M":[],"e":[],"f":[]},"aGz":{"G":[],"e":[],"f":[]},"XA":{"M":[],"e":[],"f":[]},"abC":{"Z":["NR"]},"aig":{"M":[],"e":[],"f":[]},"aCw":{"G":[],"e":[],"f":[]},"anH":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.x
return{l:x("az<fb>"),k:x("az<t<rO>>"),u:x("az<t<fL>>"),o:x("az<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("az<a5<c,t<c>>>"),x:x("zB"),b:x("uO"),d:x("rT"),Z:x("om"),v:x("ee"),_:x("i6"),h:x("DO"),g:x("zY"),D:x("r<DE>"),r:x("r<i6>"),Q:x("r<lb>"),F:x("r<ek>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7X>"),c:x("r<Mr>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fL>"),t:x("t<fn>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a5<c,@>"),w:x("dh"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lT"),N:x("c"),B:x("aCr"),q:x("dr"),i:x("T"),z:x("@"),S:x("v"),X:x("K?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afI=new A.aR(0,1/0,32,1/0)
D.aut=new A.a3(8,5,6,5)
D.c8m=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null,null)
D.aA2=new A.bK(1,C.at,D.c8m,null)
D.bzq=x([],y.r)
D.aA9=new B.zY(!1,D.bzq)
D.aBa=new A.h5("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBc=new A.h5("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBu=new A.h5("Sem pagamentos nesta vista.",8,null)
D.aF3=new A.dD(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bt,null,null,C.bt,C.bt,!0,null,null,null,null)
D.aFp=new A.dD(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bt,null,null,C.bt,C.bt,!0,null,null,null,null)
D.aFC=new A.dD(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aHm=new A.dW("Pago",C.d0,null)
D.aHt=new A.dW("Por pagar",C.hE,null)
D.aHB=new A.lg("Or\xe7amento","Todos os teus eventos",null)
D.aHH=new A.lg("Or\xe7amento",null,null)
D.byE=x(["catering"],y.s)
D.bzI=x([],y.D)
D.bzJ=x([],y.n)
D.bA7=x(["flowers_decor"],y.s)
D.bBF=x(["music_dj","bands_musicians"],y.s)
D.bCf=x(["photography"],y.s)
D.bDt=x(["venue"],y.s)
D.c9g=new A.D("A despesa precisa de um t\xedtulo",null,C.mt,null,null,null,null,null,null,null,null)
D.bL_=new A.S(T.NP,D.c9g,null)
D.aET=new A.ve("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kC,null)
D.bLj=new A.S(C.fV,D.aET,null)
D.bLX=new A.S(O.v1,C.eE,null)
D.bYq=new A.vW(!1,6,!0,null)
D.c49=new A.Q(!0,C.z,null,null,null,null,14,C.d6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6c=new A.Q(!0,null,null,null,null,null,null,C.d6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaz=new A.Q(!0,C.z,null,null,null,null,40,C.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccd=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.bZ,null,null,null,null,null,null,null,null)
D.ccB=new A.D("Nova despesa",null,C.bj,null,null,null,null,null,null,null,null)
D.ccF=new A.D("\u20ac",null,D.aaz,null,null,null,null,null,null,null,null)
D.ceW=new A.D("Indica um valor v\xe1lido",null,C.mt,null,null,null,null,null,null,null,null)
D.cha=new A.D("VALOR",null,C.aI,null,null,null,null,null,null,null,null)
D.Ji=new B.abX(0,"all")
D.abU=new B.abX(1,"paid")
D.abV=new B.abX(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXU","d2_",()=>C.bO.$1$1(new B.cHU(),y.m))
x($,"dYK","ami",()=>A.mZ(B.dKx(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["OThTChUR8mKMJzkPW98kS2qqKWc="]=a.current})($__dart_deferred_initializers__);