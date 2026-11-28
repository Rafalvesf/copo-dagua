((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cHs:function cHs(){},cHo:function cHo(){},cHp:function cHp(){},cHq:function cHq(){},cHr:function cHr(){},
dJp(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v)u.push(new B.Dz(x[v]))
return new B.b3z(d.b,u)},
Dz:function Dz(d){this.a=d},
b3z:function b3z(d,e){this.a=d
this.b=e},
b3A:function b3A(){},
cZE(d){var x="category",w="due_date",v=J.a7(d),u=A.Y(v.h(d,"id")),t=A.Y(v.h(d,"wedding_id")),s=A.Y(v.h(d,"title")),r=B.dFE(B.dem(A.C(v.h(d,x)))),q=B.dem(A.C(v.h(d,x))),p=A.dv(v.h(d,"amount")),o=v.h(d,w)==null?null:A.dc(A.Y(v.h(d,w)))
v=A.dW(v.h(d,"paid"))
return new G.i5(u,t,s,r,q,p,o,v===!0)},
dem(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dFE(d){var x
A:{if("venue"===d){x=E.xP
break A}if("catering"===d){x=E.xL
break A}if("photography"===d){x=E.xM
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xN
break A}if("flowers_decor"===d){x=E.xO
break A}x=null
break A}return x},
dr5(){return new B.DK()},
zR:function zR(d,e){this.a=d
this.b=e},
b5e:function b5e(){},
b5f:function b5f(){},
DK:function DK(){this.b=this.x=null},
b5b:function b5b(){},
b5c:function b5c(d,e){this.a=d
this.b=e},
b5d:function b5d(d){this.a=d},
Ct(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ct=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akF(),$async$Ct)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").al(0,"partner_name_1, partner_name_2").V("id",d).cj(),$async$Ct)
case 4:s=f
x=5
return A.d(u.b.P("bookings").al(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cI(0,"event_date",!1),$async$Ct)
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
return A.d(t.P("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").da("booking_id",u).tu(0,"created_at"),$async$Ct)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").al(0,"title, category, amount, due_date, paid").V("wedding_id",d).tu(0,"due_date"),$async$Ct)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").al(0,"name, amount").V("wedding_id",d).tu(0,"position"),$async$Ct)
case 11:o=f
x=12
return A.d(u.b.P("budgets").al(0,"total").V("wedding_id",d).cj(),$async$Ct)
case 12:n=f
m=F.cZp(F.cEm(s),"Gastos e parceiros",r,q,!1)
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
g=g==null?null:g.dH()}u.push(new B.Mo(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ao(o);l.q();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eV(A.p(k))
if(k==null)k=0}t.push(new B.a7O(i,k))}l=n==null?null:F.cZX(J.i(n,"total"))
v=new F.lU(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Ct,w)},
Mo:function Mo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7O:function a7O(d,e){this.a=d
this.b=e},
doo(){return new B.D2(null)},
aTZ(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aTZ=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.h1(!0,new B.cDL(e,new A.aF(new A.bE(u,C.aF,C.ax),$.aa())),d,y.i),$async$aTZ)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTZ,w)},
aky(d,e,f,g){return B.dFr(d,e,f,g)},
dFr(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$aky=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aTZ(d,"Teto para "+f,g),$async$aky)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.CE().gaX(),y.x).Or(f,r),$async$aky)
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
return A.m($async$aky,w)},
dcp(d){var x=A.U(d,y._)
C.e.ct(x,new B.cDV())
return x},
dcT(d){var x=C.f.aT(C.j.k(A.aE(d)),2,"0"),w=C.f.aT(C.j.k(A.aw(d)),2,"0"),v=A.aM(d)===A.aM(new A.ab(Date.now(),0,!1))?"":"/"+A.aM(d)
return x+"/"+w+v},
cYN(d){var x,w,v,u
if(d===C.k.hB(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aX(w,".",",")}v=x.split(",")
u=A.CA(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHP(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abK:function abK(d,e){this.a=d
this.b=e},
D2:function D2(d){this.a=d},
abL:function abL(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bL0:function bL0(d){this.a=d},
bL1:function bL1(d){this.a=d},
bLi:function bLi(d){this.a=d},
bLh:function bLh(){},
bKX:function bKX(){},
bKZ:function bKZ(){},
bL_:function bL_(){},
bKY:function bKY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bL6:function bL6(){},
bL7:function bL7(d){this.a=d},
bLg:function bLg(d){this.a=d},
bL8:function bL8(){},
bL9:function bL9(){},
bLa:function bLa(d,e){this.a=d
this.b=e},
bLb:function bLb(d){this.a=d},
bL5:function bL5(d){this.a=d},
bLc:function bLc(d){this.a=d},
bL4:function bL4(d){this.a=d},
bLd:function bLd(d){this.a=d},
bL3:function bL3(d){this.a=d},
bLe:function bLe(d){this.a=d},
bL2:function bL2(d){this.a=d},
bLf:function bLf(d){this.a=d},
cDL:function cDL(d,e){this.a=d
this.b=e},
cDJ:function cDJ(d){this.a=d},
cDK:function cDK(d,e){this.a=d
this.b=e},
cDV:function cDV(){},
aPA:function aPA(d,e,f){this.c=d
this.d=e
this.a=f},
aDy:function aDy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDz:function aDz(d,e){this.e=d
this.a=e},
bNt:function bNt(){},
bNv:function bNv(d,e){this.a=d
this.b=e},
bNw:function bNw(d){this.a=d},
bNu:function bNu(d,e,f){this.a=d
this.b=e
this.c=f},
aD5:function aD5(d,e){this.c=d
this.a=e},
bKm:function bKm(d){this.a=d},
bKl:function bKl(d){this.a=d},
aGd:function aGd(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bXe:function bXe(d,e){this.a=d
this.b=e},
bXa:function bXa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXb:function bXb(d){this.a=d},
bXc:function bXc(d,e){this.a=d
this.b=e},
bXd:function bXd(d,e){this.a=d
this.b=e},
Xz:function Xz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCc:function aCc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NP:function NP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abp:function abp(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bI2:function bI2(d){this.a=d},
bI1:function bI1(){},
bI3:function bI3(d){this.a=d},
bI0:function bI0(){},
bHP:function bHP(){},
bHQ:function bHQ(d){this.a=d},
bI_:function bI_(){},
bHV:function bHV(d){this.a=d},
bHW:function bHW(d){this.a=d},
bHU:function bHU(d,e){this.a=d
this.b=e},
bHX:function bHX(d){this.a=d},
bHT:function bHT(d){this.a=d},
bHY:function bHY(d){this.a=d},
bHS:function bHS(d){this.a=d},
bHZ:function bHZ(d,e){this.a=d
this.b=e},
bHR:function bHR(d,e){this.a=d
this.b=e},
Xc:function Xc(d,e){this.e=d
this.a=e},
bNx:function bNx(d){this.a=d},
bNy:function bNy(d){this.a=d},
bNz:function bNz(){},
bNA:function bNA(){},
bNB:function bNB(d){this.a=d},
bNC:function bNC(d,e,f){this.a=d
this.b=e
this.c=f},
bND:function bND(d,e){this.a=d
this.b=e},
ahW:function ahW(d,e,f){this.c=d
this.d=e
this.a=f},
aCh:function aCh(d,e,f){this.e=d
this.f=e
this.a=f},
bJ_:function bJ_(){},
bJ5:function bJ5(d){this.a=d},
bJ2:function bJ2(){},
bJ1:function bJ1(d){this.a=d},
bIT:function bIT(d){this.a=d},
bJ0:function bJ0(d,e,f){this.a=d
this.b=e
this.c=f},
bJ3:function bJ3(d){this.a=d},
bIR:function bIR(d){this.a=d},
bIS:function bIS(){},
bJ4:function bJ4(d,e){this.a=d
this.b=e},
bIY:function bIY(d){this.a=d},
bIZ:function bIZ(d){this.a=d},
bIU:function bIU(){},
bIV:function bIV(d){this.a=d},
bIW:function bIW(d){this.a=d},
bIX:function bIX(d,e){this.a=d
this.b=e},
anp:function anp(d,e){this.c=d
this.a=e},
aYy:function aYy(d){this.a=d},
dhq(d){var x
switch(d){case E.xP:x=D.bCV
break
case E.xL:x=D.by8
break
case E.xM:x=D.bBH
break
case E.xN:x=D.bB7
break
case E.xO:x=D.bzC
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
B.Dz.prototype={
gap(d){return this.a.a}}
B.b3z.prototype={
gpX(){return C.e.cU(this.b,0,new B.b3A())},
gaBq(){var x=this.a
return x===0?0:C.k.af(this.gpX()/x,0,1)}}
B.zR.prototype={
gbyJ(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5e(),w),w.i("w.E"))
return x},
gbz3(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b5f(),w),w.i("w.E"))
return x},
awB(d,e){var x=e==null?this.a:e
return new B.zR(x,d==null?this.b:d)},
ik(d){return this.awB(null,d)},
awj(d){return this.awB(d,null)}}
B.DK.prototype={
d1(){var x=y.T,w=this.x=A.eQ(this).G(A.cC($.cq(),new B.b5b(),y.v,x),x)
if(w!=null)A.j6(new B.b5c(this,w),y.H)
return D.azJ},
bY(d,e){return this.bw8(0,e)},
bw8(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa1(0,v.ga1(0).ik(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").cl(0).V("wedding_id",e).cI(0,"created_at",!0),$async$bY)
case 2:v.sa1(0,new t.zR(s,r.da(g,B.dKg(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
Vl(d){return this.bm3(d)},
bm3(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vl=A.j(function(e,f){if(e===1)return A.k(f,w)
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
return A.d(r.d0(0,u).cl(0).e9(0),$async$Vl)
case 2:s=f
r=v.ga1(0)
u=A.U(v.ga1(0).b,y._)
u.push(B.cZE(s))
v.sa1(0,r.awj(u))
return A.l(null,w)}})
return A.m($async$Vl,w)},
Oo(d){return this.bBB(d)},
bBB(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Oo=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lb(v.ga1(0).b,new B.b5d(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bh(0,A.R(["paid",!n.w,"updated_at",new A.ab(Date.now(),0,!1).cg()],u,u)).V("id",d).cl(0).e9(0),$async$Oo)
case 2:t=l.cZE(f)
u=v.ga1(0)
m=A.a([],y.r)
for(s=v.ga1(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.G)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa1(0,u.awj(m))
return A.l(null,w)}})
return A.m($async$Oo,w)}}
B.Mo.prototype={}
B.a7O.prototype={
gap(d){return this.a}}
B.abK.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D2.prototype={
R(){return new B.abL(D.J1)}}
B.abL.prototype={
Tw(d){return this.bbX(d)},
bbX(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Tw=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bL0(u))
x=1
break}u.p(new B.bL1(u))
t=u.gS()
s=$.cq()
r=t.a_(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a_(0,s.gaX(),y.Z).al(0,d),$async$Tw)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Tw,w)},
ad(){this.aq()
A.j6(new B.bLi(this),y.H)},
PZ(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$PZ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.alZ()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.CE(),y.b).b
s=t==null?null:t.b
r=C.e.cU(o.a_(0,n,y.g).b,0,new B.bKX())
t=o.a_(0,$.cq(),y.v).b
q=t==null?null:t.gcz()
t=u.c
t.toString
x=3
return A.d(A.bQ(null,new B.bKY(q,s,new B.bKZ(),r),!1,t,!0,!0,null,y.B),$async$PZ)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vl(new G.i5("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$PZ,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CE(),y.b),a3=a1.G($.HX(),y.d),a4=a1.G($.alZ(),y.g),a5=a2.b,a6=a5==null?e:B.dJp(a5,a3.b)
a5=A.j2(a1.G($.j0(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iU
a5=y.T
w=a1.G(A.cC($.cq(),new B.bL6(),y.v,a5),a5)
if(f.y){a1=f.gapc()
return A.cP(e,C.cP,A.nJ(C.f_,40,A.a([C.fx,D.aH7,K.cWd(a1,e),new B.aCh(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.db(x,new B.bL7(w))
a1=a1.G($.uC(),y.l)
u=a1.gv(a1)
t=new B.bLg(u==null?C.fd:u)
a1=y._
a5=A.U(a4.gbyJ(),a1)
for(s=v.a,r=J.c8(s),q=r.gX(s),p=v.b,o=v.$ti.i("fz<1>"),n=new A.fz(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i5("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbz3(0),a1)
for(s=r.gX(s),o=new A.fz(s,p,o),p=y.r;o.q();){r=s.gE(s)
n=A.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new G.i5("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new G.i5("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcp(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcp(q)
break
default:a1=e}h=C.e.cU(q,0,new B.bL8())
s=a6==null
if(s)g=D.bzb
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bL9(),p),p.i("w.E"))}if(s)a1=D.bXH
else{s=f.gaR2()
r=y.p
p=A.a([new A.pt(A.a([new A.qM(s,"Nova despesa",e)],r),e),D.aHd,K.cWd(f.gapc(),w),new B.aPA(a6,new B.bLa(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aJ(a6.gpX(),!1)
n=a5.length
m=n===1?d:a0
l=A.aJ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c2("N\xfameros",e,A.a([new A.DV(A.a([new A.la("Gasto",o,""+n+" "+m,e),new A.la("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.mb(A.a([new A.ek("Todos",l===D.J1,n+m,new B.bLb(f),e),new A.ek("Pendentes",l===D.abB,m,new B.bLc(f),e),new A.ek("Pagos",l===D.abA,n,new B.bLd(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aGd(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c2("Pagamentos",e,o,16,e))
a1=A.a([new A.h6(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDy(g,f.x,new B.bLe(f),e))
p.push(new A.c2("Categorias",e,a1,16,e))
p.push(new A.c2("Exportar",e,A.a([new F.DL("Gastos e parceiros",!1,new B.bLf(f),e)],r),16,e))
a1=A.nJ(C.f_,40,p,e,!0,!1)}return A.cP(e,C.cP,a1,!0,e)},
Is(d){return this.aXY(d)},
aXY(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Is=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aTZ(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Is)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a_(0,$.CE().gaX(),y.x).a_2(r),$async$Is)
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
return A.m($async$Is,w)}}
B.aPA.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpX()>0?"Gastos "+A.aJ(t.gpX(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vj(new A.hi("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hG,0,"por definir","\u2014")}x=C.k.aN(t.gaBq()*100)
w=s-t.gpX()<0?"Acima do teto":"Ainda tens"
v=A.aJ(Math.abs(s-t.gpX()),!1)
s=A.aJ(s,!1)
u=t.gaBq()
return A.aY(A.vj(H.a1D,"Gastos "+A.aJ(t.gpX(),!1)+" \xb7 "+x+"% do teto",w,C.hG,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDy.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dz(s,0,A.et(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.G)(r),++w)p.push(new B.aDz(r[w],null))
q=A.a([A.eR(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hi(u,v.e,!0,null))}return A.y(q,C.E,C.h,C.l)}}
B.aDz.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cC($.cq(),new B.bNt(),y.v,m),m)
if(l==null)x=C.r2
else{m=e.G($.d1C().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r2:m}m=A.a([],y.s)
for(w=B.dhq(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNv(this,d)
if(w)return A.k0(!1,!1,p,v,A.aJ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mM("P\xf4r teto",new B.bNu(this,d,e),!0,p))
w=A.aJ(o.b,!1)
u=A.aJ(n,!1)
s=y.p
q=A.a([A.aK(new A.a48(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aE,new B.anp(m,p)],s))
return A.k0(!1,!1,p,v,w+" de "+u,o.a,A.y(q,C.dJ,C.h,C.J))}}
B.aD5.prototype={
u(d){var x,w,v=null,u=$.au,t=$.fj.cc(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fT(r,A.aK(p==null?A.kN(A.b9(C.i9,u,v,v,v),C.t,!0):A.pp(p,144,new B.bKl(u),!1,C.bE,A.wv(),!1,v,v,v),48,48),C.ba)
p=A.h(q.b,1,C.a1,v,v,D.c3q,v,v)
x=A.b9(C.ib,u,v,v,14)
w=q.d
q=w>0?q.gPw()+" \xb7 "+A.aJ(w,!1):q.gPw()
w=y.p
return new A.S(C.d0,A.aY(A.x(v,A.O(A.a([r,C.af,A.a5(A.y(A.a([p,C.j6,A.O(A.a([x,C.dY,new A.di(1,C.bb,A.h(q,1,C.a1,v,v,A.aI(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bn,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b9(C.id,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.x),v,v,v,C.ef,v,v,v),new B.bKm(d),v),v)}}
B.aGd.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JJ(A.a([new A.hi("+ Nova despesa",this.f,!0,j)],y.p),C.eS,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aB2
x=new B.bXe(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.G)(i),++t){s=i[t]
r=s.a
q=C.f.cX(r,":pay:")
r=C.f.b1(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gJ(r.split(" \xb7 "))
n=A.aJ(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.dcT(m)
v.push(new A.td(new A.cg(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bXa(d,e,s,q),A.HQ(m)===C.f6,j))
continue}p=r?new B.bXb(d):new B.bXc(x,s)
v.push(new B.Xz(s,p,r||s.w?j:new B.bXd(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xz&&v[k-1] instanceof B.Xz)u.push(C.iK)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAJ)
return A.y(i,C.E,C.h,C.l)}}
B.Xz.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aJ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dcT(w))
v=C.e.a2(v," \xb7 ")
if(u)u=D.aGT
else{u=this.e
u=u!=null?new A.mM("Marcar pago",u,!0,null):D.aH_}return A.k0(!1,!1,null,this.d,v,x.c,u)}}
B.aCc.prototype={}
B.NP.prototype={
R(){var x=$.aa()
return new B.abp(new A.aF(C.ak,x),new A.aF(C.ak,x))}}
B.abp.prototype={
ad(){var x=this
x.aq()
x.d.an(0,new B.bI2(x))
x.e.an(0,new B.bI3(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
gahy(){var x=C.f.B(this.e.a.a)
x=A.aX(x," ","")
return A.eV(A.aX(x,",","."))},
aSf(){var x,w,v,u,t=this,s=t.gahy()
t.p(new B.bHQ(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.al(w,!1)
v=t.w
u=v?null:t.f
w.ag(new B.aCc(x,s,u,t.r,v))},
arX(d,e,f,g,h){var x=null,w=h?C.fp:x,v=y.p,u=A.a5(A.y(A.a([A.h(d,x,x,x,x,C.a9,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.bq:x,s=f?x:A.bF(C.kv,1.5),r=f?S.vn:x
return A.bj(x,!0,x,A.cp(C.bu,A.x(x,A.O(A.a([u,A.x(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.ap),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.cL,new A.I(x,x,w,x,x,x,C.x),x,x,x,C.hu,x,x,x),C.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aD),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bip(d,e,f,g){return this.arX(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahy()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bI_()
t=y.w
s=A.aT(d,k,t).w
r=y.p
q=A.a([D.c7F],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k))
q=A.O(A.a([A.a5(A.y(q,C.G,C.h,C.l),1),A.bj(k,!0,k,A.cp(k,A.x(k,C.hC,C.r,k,k,C.bV,k,44,k,k,k,k,44),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHV(d),k,k,k,k,k,k,!1,C.aD),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c8K,A.O(A.a([V.d61(A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),l.e,k,k,k,k,k,2,D.aEV,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.fL,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aaj,!0,C.dB,k,C.b0,k,k,k,k)),C.bj,D.c88],r),C.ed,C.bR,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cYN(v)+" no teto":"Passa o teto em "+B.cYN(-v)
o.push(A.h(m,k,k,k,k,A.aI(k,k,n?C.W:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c7l)
p=A.x(k,A.y(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a3,k,k,p,k,k,C.x),k,k,k,C.bo,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bF(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d0,o,k),A.x(C.bc,A.cs(k,C.a6,!1,k,!0,C.y,k,A.cu(),x,k,k,k,k,k,2,D.aEA,C.U,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fj,!0,C.au,k,C.hb,k,k,k,k),C.r,k,k,new A.I(C.a3,k,m,n,k,k,C.x),k,52,k,C.fs,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bLe)
n.push(C.a_)
n.push(new U.a1l(l.r,new B.bHW(l),k))
n.push(C.a_)
n.push(new A.S(C.d0,A.h("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bip("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHX(l)),l.arX("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHY(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aE(p)))
m=l.f
m.toString
m=A.p(w.$1(A.aw(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aM(w)}o.push(A.bj(k,!0,k,A.cp(C.bu,A.aK(A.O(A.a([D.azt,A.h(w,k,k,k,k,C.cc,k,k),C.dY,C.jU],r),C.v,C.h,C.l,0,k),56,k),C.U,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHZ(l,d),k,k,k,k,k,k,!1,C.aD),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.x(k,A.y(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a3,k,k,x,k,k,C.x),k,k,k,C.cs,k,k,k))
n.push(C.a_)
n.push(D.cdc)
x=A.dS(A.y(n,C.E,C.h,C.l),C.y,k,C.eg,k,C.av)
t=A.aT(d,C.b5,t).w
w=A.cc(u?C.z:C.z.cc(0.35),k,k,C.t,k,k,C.aa,k,k,C.eJ)
return new A.S(new A.a4(0,0,0,s.f.d),A.y(A.a([new A.S(C.jF,q,k),new A.di(1,C.bb,x,k),new A.S(new A.a4(20,16,20,20+t.r.d),A.aK(new A.am(A.bD(A.h(u?"Guardar \xb7 "+B.cYN(j):"Guardar",k,k,k,k,k,k,k),l.gaSe(),w),k),52,k),k)],r),C.E,C.h,C.J),k)}}
B.Xc.prototype={
ba(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CE(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eL(new A.a6(j,new B.bNx(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.alZ(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bNy(l),w),w.i("w.E"))
C.e.ct(v,new B.bNz())
j=y.T
u=e.G(A.cC($.cq(),new B.bNA(),y.v,j),j)
t=B.dhq(l.e.c)
if(u==null)s=I.Fj
else{j=e.G($.aVR().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fj
j=J.db(j,new B.bNB(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aT(d,k,y.w).w
w=A.bO(A.x(k,k,C.r,k,k,new A.I(C.bF,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ay(d).ok.r,k,k)
q=A.a5(new B.ahW("Gasto",A.aJ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aA,A.O(A.a([q,C.ae,A.a5(A.aY(new B.ahW("Teto \xb7 tocar para mudar",p===0?"Definir":A.aJ(p,!1),k),new B.bNC(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bh,A.h("Contratado na app",k,k,k,k,A.ay(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.G)(s),++n)w.push(new B.aD5(s[n],k))
C.e.n(p,w)}p.push(C.bh)
p.push(A.h("Despesas",k,k,k,k,A.ay(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKE)
else for(n=0;n<v.length;v.length===w||(0,A.G)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.iu,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aT(C.j.k(A.aE(q)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(q)),2,"0")+"/"+A.aM(q),k,k,k,k,k,k,k)
p.push(A.jn(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aJ(m.f,!1),k,k,k,k,D.c5v,k,k),C.ab,new P.Dd(m.w,new B.bND(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J3,k)],o),C.v,C.h,C.J,0,k),k))}return A.bB(!0,new A.ec(new A.aR(0,1/0,0,j.a.b*0.8),A.d6(p,k,L.CR,k,k,!1,!0),k),k,C.Z,!0)}}
B.ahW.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.y(A.a([A.h(this.c,x,x,x,x,C.be,x,x),C.ar,A.h(this.d,x,x,x,x,M.aa6,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.I(C.a3,x,x,w,x,x,C.x),x,x,x,C.cT,x,x,x)}}
B.aCh.prototype={
ba(d,e){var x,w=y.t,v=e.G(A.cC($.cq(),new B.bJ_(),y.v,w),w),u=e.G($.d1B(),y.o)
w=e.G($.uC(),y.l)
x=w.gv(w)
return A.hD(u,new B.bJ0(this,new B.bJ5(x==null?C.fd:x),v),new B.bJ1(e),new B.bJ2(),!1,!0,!1)}}
B.anp.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
t=$.fj
s=new A.b6(999,999)
r=new A.bh(o.cc(0.25),1,C.aj,-1)
q=A.b9(C.ib,o,p,p,13)
t=A.x(p,A.O(A.a([q,C.rM,new A.di(1,C.bb,A.h(u,1,C.a1,p,p,new A.P(!0,o,p,p,p,p,14,C.d2,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b9(C.id,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afo,new A.I(t,p,new A.dN(r,r,r,r),new A.cA(s,s,s,s),p,p,C.x),p,p,p,D.au1,p,p,p)
m.push(new A.jr(new A.n5(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hR(t,new B.aYy(d),p,p),p))}return A.e4(C.bf,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["B(i5)","T(T,i5)","v(i5,i5)","T(T,Dz)","zR()","F<~>(c?)","F<~>()","NP(N)","B(Dz)","F<lU>()","Xc(N)","~(i5)","~()","B(np)","B(rN)","i5(a3<c,@>)","DK()"])
B.cHs.prototype={
$1(d){return this.aEI(d)},
aEI(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.yh(a1)
u=y.t
t=a1.G(A.cC($.cq(),new B.cHo(),y.v,u),u)
u=J.a7(t)
if(u.gY(t)){v=D.bzc
x=1
break}s=A.a([],y.s)
for(r=u.gX(t);r.q();)s.push(r.gE(r).a)
r=$.Q()
q=r.b
q===$&&A.b()
p=y.G
o=q.P("budgets").al(0,"wedding_id, total").da("wedding_id",s).b3(new B.cHp(),p)
n=r.b.P("budget_categories").al(0,"wedding_id, amount").da("wedding_id",s).b3(new B.cHq(),p)
m=r.b.P("expenses").al(0,"wedding_id, amount, paid").da("wedding_id",s).b3(new B.cHr(),p)
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
s.push(new A.aMP([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1302}
B.cHo.prototype={
$1(d){return d.c},
$S:151}
B.cHp.prototype={
$1(d){return d},
$S:29}
B.cHq.prototype={
$1(d){return d},
$S:29}
B.cHr.prototype={
$1(d){return d},
$S:29}
B.b3A.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5e.prototype={
$1(d){return d.w},
$S:z+0}
B.b5f.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5b.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.b5c.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b5d.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bL0.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bL1.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bLi.prototype={
$0(){return this.a.gS().a_(0,$.CE().gaX(),y.x).Zk(0).e5(new B.bLh())},
$S:1}
B.bLh.prototype={
$1(d){},
$S:11}
B.bKX.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKZ.prototype={
$1(d){return A.CA(C.k.a8(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bL_(),null)+" \u20ac"},
$S:108}
B.bL_.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bKY.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a2(v," \xb7 ")
u=x&&u>0?u:null
return new B.NP(v,u,w.d,null)},
$S:z+7}
B.bL6.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bL7.prototype={
$1(d){return d.x!==C.e9&&d.b===this.a},
$S:63}
B.bLg.prototype={
$2(d,e){return A.jg(d,this.a.l8(e))},
$1(d){return this.$2(d,null)},
$S:1305}
B.bL8.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bL9.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bLa.prototype={
$0(){return this.a.Is(this.b.a)},
$S:0}
B.bLb.prototype={
$0(){var x=this.a
return x.p(new B.bL5(x))},
$S:0}
B.bL5.prototype={
$0(){return this.a.w=D.J1},
$S:0}
B.bLc.prototype={
$0(){var x=this.a
return x.p(new B.bL4(x))},
$S:0}
B.bL4.prototype={
$0(){return this.a.w=D.abB},
$S:0}
B.bLd.prototype={
$0(){var x=this.a
return x.p(new B.bL3(x))},
$S:0}
B.bL3.prototype={
$0(){return this.a.w=D.abA},
$S:0}
B.bLe.prototype={
$0(){var x=this.a
return x.p(new B.bL2(x))},
$S:0}
B.bL2.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bLf.prototype={
$0(){return B.Ct(this.a.gS().a_(0,$.cq(),y.v).b.a)},
$S:z+9}
B.cDL.prototype={
$1(d){var x=null,w=this.b
return new A.eU(A.h(this.a,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.cu(),w,x,x,x,x,x,2,D.aF8,C.U,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.fL,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b0,x,x,x,x),A.a([new A.am(A.cJ(C.cZ,x,x,new B.cDJ(d),x,x),x),new A.am(A.bD(C.dw,new B.cDK(d,w),x),x)],y.p),x)},
$S:19}
B.cDJ.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
B.cDK.prototype={
$0(){var x=A.al(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aX(w," ","")
return x.ag(A.eV(A.aX(w,",",".")))},
$S:0}
B.cDV.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bNt.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bNv.prototype={
$0(){return A.bQ(null,new B.bNw(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNw.prototype={
$1(d){return new B.Xc(this.a.e.a,null)},
$S:z+10}
B.bNu.prototype={
$0(){return B.aky(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKm.prototype={
$0(){var x=this.a
A.al(x,!1).bk()
A.ae(x).aj("/bookings",null,y.X)},
$S:0}
B.bKl.prototype={
$3(d,e,f){return A.kN(A.b9(C.i9,this.a,null,null,null),C.t,!0)},
$S:96}
B.bXe.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.alZ().gaX(),y.h).Oo(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a0(A.bY(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bXa.prototype={
$0(){var x=this
return A.rF(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bXb.prototype={
$0(){return A.ae(this.a).aj("/bookings",null,y.X)},
$S:0}
B.bXc.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bXd.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bI2.prototype={
$0(){return this.a.p(new B.bI1())},
$S:0}
B.bI1.prototype={
$0(){},
$S:0}
B.bI3.prototype={
$0(){return this.a.p(new B.bI0())},
$S:0}
B.bI0.prototype={
$0(){},
$S:0}
B.bHP.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bHQ.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bI_.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:37}
B.bHV.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
B.bHW.prototype={
$1(d){var x=this.a
return x.p(new B.bHU(x,d))},
$S:137}
B.bHU.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHX.prototype={
$0(){var x=this.a
return x.p(new B.bHT(x))},
$S:0}
B.bHT.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHY.prototype={
$0(){var x=this.a
return x.p(new B.bHS(x))},
$S:0}
B.bHS.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHZ.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ab(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cNL(v.b,A.bZ(A.aM(t)-1,1,1,0,0),r,A.bZ(A.aM(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHR(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHR.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNx.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNy.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNz.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bZ(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bZ(2100,1,1,0,0):x)},
$S:z+2}
B.bNA.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bNB.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bNC.prototype={
$0(){var x=this.c
return B.aky(this.a,this.b,x.a,x.d)},
$S:0}
B.bND.prototype={
$1(d){return this.a.a_(0,$.alZ().gaX(),y.h).Oo(this.b.a)},
$S:134}
B.bJ_.prototype={
$1(d){return d.c},
$S:151}
B.bJ5.prototype={
$2(d,e){return A.jg(d,this.a.l8(e))},
$S:42}
B.bJ2.prototype={
$0(){return D.bLg},
$S:90}
B.bJ1.prototype={
$2(d,e){return A.JJ(A.a([new A.hi("Tentar outra vez",new B.bIT(this.a),!1,null)],y.p),C.eS,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1306}
B.bIT.prototype={
$0(){return this.a.ai($.d1B())},
$S:0}
B.bJ0.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bJ3(g),e=new B.bJ4(g,this.b),d=J.c8(a4),a0=d.cU(a4,0,new B.bIU()),a1=d.cU(a4,0,new B.bIV(f)),a2=d.cU(a4,0,new B.bIW(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ao(this.c);x.q();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.BW(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aJ(a1,!1)
w=a0>0
v=w?"de "+A.aJ(a0,!1):"gastos"
u=w?C.k.af(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aN(a1/a0*100)+"% dos tetos":""
x=A.vj(i,""+t+" "+r+w,"Todos os eventos",C.hG,u,v,x)
v=y.p
u=A.a([new A.DV(A.a([new A.la("Gasto",A.aJ(a1,!1),h,i),new A.la("Por pagar",A.aJ(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eu(a4,0,y.A),r=J.ao(t.a),q=t.b,t=new A.bX(r,q,A.u(t).i("bX<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.an(A.c0())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iK)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a1,i,i,C.a9,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aJ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aJ(j[3]+e.$1(j[0]),!1))}n=A.y(A.a([n,C.aU,A.h(C.e.a2(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.hR(A.x(i,A.O(A.a([new A.bJ(1,C.at,n,i),C.ae,A.h(A.aJ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.bj,C.jU],v),C.v,C.h,C.l,0,i),C.r,C.as,C.cL,i,i,i,i,C.ck,i,i,i),new B.bIX(o,g),i,i))
C.e.n(w,l)}return A.y(A.a([x,new A.c2("N\xfameros",i,u,16,i),new A.c2("Por evento \xb7 "+d,i,w,16,i),D.aAL],v),C.E,C.h,C.l)},
$S:1307}
B.bJ3.prototype={
$1(d){return J.db(this.a.e,new B.bIR(d)).cU(0,0,new B.bIS())},
$S:170}
B.bIR.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:63}
B.bIS.prototype={
$2(d,e){return d+e.w},
$S:492}
B.bJ4.prototype={
$1(d){return J.db(this.a.e,new B.bIY(d)).cU(0,0,new B.bIZ(this.b))},
$S:170}
B.bIY.prototype={
$1(d){return d.b===this.a&&d.x!==C.e9},
$S:63}
B.bIZ.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:492}
B.bIU.prototype={
$2(d,e){return d+e.a[2]},
$S:237}
B.bIV.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:237}
B.bIW.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:237}
B.bIX.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYy.prototype={
$0(){return A.ae(this.a).aj("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKg","cZE",15)
w(B,"dKf","dr5",16)
v(B.DK.prototype,"giD","d1",4)
var t
u(t=B.abL.prototype,"gapc","Tw",5)
v(t,"gaR2","PZ",6)
v(B.abp.prototype,"gaSe","aSf",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bt,[B.cHs,B.cHo,B.cHp,B.cHq,B.cHr,B.b5e,B.b5f,B.b5b,B.b5d,B.bLh,B.bKZ,B.bL_,B.bKY,B.bL6,B.bL7,B.bLg,B.bL9,B.cDL,B.bNt,B.bNw,B.bKl,B.bXe,B.bHP,B.bI_,B.bHW,B.bNx,B.bNy,B.bNA,B.bNB,B.bND,B.bJ_,B.bJ0,B.bJ3,B.bIR,B.bJ4,B.bIY])
x(A.M,[B.Dz,B.b3z,B.zR,B.Mo,B.a7O,B.aCc])
x(A.cK,[B.b3A,B.bKX,B.bL8,B.cDV,B.bNz,B.bJ5,B.bJ1,B.bIS,B.bIZ,B.bIU,B.bIV,B.bIW])
w(B.DK,A.fb)
x(A.bL,[B.b5c,B.bL0,B.bL1,B.bLi,B.bLa,B.bLb,B.bL5,B.bLc,B.bL4,B.bLd,B.bL3,B.bLe,B.bL2,B.bLf,B.cDJ,B.cDK,B.bNv,B.bNu,B.bKm,B.bXa,B.bXb,B.bXc,B.bXd,B.bI2,B.bI1,B.bI3,B.bI0,B.bHQ,B.bHV,B.bHU,B.bHX,B.bHT,B.bHY,B.bHS,B.bHZ,B.bHR,B.bNC,B.bJ2,B.bIT,B.bIX,B.aYy])
w(B.abK,A.fg)
w(B.D2,A.dC)
w(B.abL,A.dw)
x(A.L,[B.aPA,B.aDy,B.aD5,B.Xz,B.ahW,B.anp])
x(A.ew,[B.aDz,B.aGd,B.Xc,B.aCh])
w(B.NP,A.H)
w(B.abp,A.a_)})()
A.br(b.typeUniverse,JSON.parse('{"DK":{"fb":["zR"]},"NP":{"H":[],"e":[],"f":[]},"Xc":{"H":[],"e":[],"f":[]},"D2":{"H":[],"e":[],"f":[]},"abL":{"a_":["D2"]},"aPA":{"L":[],"e":[],"f":[]},"aDy":{"L":[],"e":[],"f":[]},"aDz":{"H":[],"e":[],"f":[]},"aD5":{"L":[],"e":[],"f":[]},"aGd":{"H":[],"e":[],"f":[]},"Xz":{"L":[],"e":[],"f":[]},"abp":{"a_":["NP"]},"ahW":{"L":[],"e":[],"f":[]},"aCh":{"H":[],"e":[],"f":[]},"anp":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{l:x("ax<f9>"),k:x("ax<t<rN>>"),u:x("ax<t<fJ>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("ax<a3<c,t<c>>>"),x:x("zu"),b:x("uP"),d:x("rS"),Z:x("ok"),v:x("ed"),_:x("i5"),h:x("DK"),g:x("zR"),D:x("r<Dz>"),r:x("r<i5>"),Q:x("r<la>"),F:x("r<ek>"),Y:x("r<a3<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7O>"),c:x("r<Mo>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fJ>"),t:x("t<fl>"),G:x("t<a3<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a3<c,@>"),w:x("du"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lU"),N:x("c"),B:x("aCc"),q:x("dl"),i:x("T"),z:x("@"),S:x("v"),X:x("M?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afo=new A.aR(0,1/0,32,1/0)
D.au1=new A.a4(8,5,6,5)
D.cgR=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azt=new A.bJ(1,C.at,D.cgR,null)
D.byU=x([],y.r)
D.azJ=new B.zR(!1,D.byU)
D.aAJ=new A.h6("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAL=new A.h6("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aB2=new A.h6("Sem pagamentos nesta vista.",8,null)
D.aEA=new A.dE(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bk,null,null,C.bk,C.bk,!0,null,null,null,null)
D.aEV=new A.dE(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bk,null,null,C.bk,C.bk,!0,null,null,null,null)
D.aF8=new A.dE(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGT=new A.dU("Pago",C.cU,null)
D.aH_=new A.dU("Por pagar",C.hE,null)
D.aH7=new A.lf("Or\xe7amento","Todos os teus eventos",null)
D.aHd=new A.lf("Or\xe7amento",null,null)
D.by8=x(["catering"],y.s)
D.bzb=x([],y.D)
D.bzc=x([],y.n)
D.bzC=x(["flowers_decor"],y.s)
D.bB7=x(["music_dj","bands_musicians"],y.s)
D.bBH=x(["photography"],y.s)
D.bCV=x(["venue"],y.s)
D.aEp=new A.ve("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kE,null)
D.bKE=new A.S(C.fW,D.aEp,null)
D.c96=new A.D("A despesa precisa de um t\xedtulo",null,C.mo,null,null,null,null,null,null,null)
D.bLe=new A.S(T.Ny,D.c96,null)
D.bLg=new A.S(O.uN,C.f1,null)
D.bXH=new A.vU(!1,6,!0,null)
D.c3q=new A.P(!0,C.z,null,null,null,null,14,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5v=new A.P(!0,null,null,null,null,null,null,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaj=new A.P(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7l=new A.D("Indica um valor v\xe1lido",null,C.mo,null,null,null,null,null,null,null)
D.c7F=new A.D("Nova despesa",null,C.bi,null,null,null,null,null,null,null)
D.c88=new A.D("\u20ac",null,D.aaj,null,null,null,null,null,null,null)
D.c8K=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.cdc=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null)
D.J1=new B.abK(0,"all")
D.abA=new B.abK(1,"paid")
D.abB=new B.abK(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXF","d1B",()=>C.bP.$1$1(new B.cHs(),y.m))
x($,"dYv","alZ",()=>A.mW(B.dKf(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["2cpqZKIb+qKe/jPCvIkHe6bdIyw="]=a.current})($__dart_deferred_initializers__);