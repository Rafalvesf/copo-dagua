((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cHe:function cHe(){},cHa:function cHa(){},cHb:function cHb(){},cHc:function cHc(){},cHd:function cHd(){},
dIP(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.DD(x[v]))
return new B.b3L(d.b,u)},
DD:function DD(d){this.a=d},
b3L:function b3L(d,e){this.a=d
this.b=e},
b3M:function b3M(){},
cZe(d){var x="category",w="due_date",v=J.a7(d),u=A.a_(v.h(d,"id")),t=A.a_(v.h(d,"wedding_id")),s=A.a_(v.h(d,"title")),r=B.dF5(B.ddV(A.C(v.h(d,x)))),q=B.ddV(A.C(v.h(d,x))),p=A.du(v.h(d,"amount")),o=v.h(d,w)==null?null:A.dc(A.a_(v.h(d,w)))
v=A.dW(v.h(d,"paid"))
return new G.i5(u,t,s,r,q,p,o,v===!0)},
ddV(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dF5(d){var x
A:{if("venue"===d){x=E.y_
break A}if("catering"===d){x=E.xW
break A}if("photography"===d){x=E.xX
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xY
break A}if("flowers_decor"===d){x=E.xZ
break A}x=null
break A}return x},
dqv(){return new B.DN()},
zX:function zX(d,e){this.a=d
this.b=e},
b5p:function b5p(){},
b5q:function b5q(){},
DN:function DN(){this.b=this.x=null},
b5m:function b5m(){},
b5n:function b5n(d,e){this.a=d
this.b=e},
b5o:function b5o(d){this.a=d},
Cx(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cx=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akP(),$async$Cx)
case 3:u=$.P()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").ai(0,"partner_name_1, partner_name_2").V("id",d).ck(),$async$Cx)
case 4:s=f
x=5
return A.d(u.b.P("bookings").ai(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cO(0,"event_date",!1),$async$Cx)
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
return A.d(t.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").dO("booking_id",u).tD(0,"created_at"),$async$Cx)
case 9:q=f
case 7:u=$.P()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").ai(0,"title, category, amount, due_date, paid").V("wedding_id",d).tD(0,"due_date"),$async$Cx)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").ai(0,"name, amount").V("wedding_id",d).tD(0,"position"),$async$Cx)
case 11:o=f
x=12
return A.d(u.b.P("budgets").ai(0,"total").V("wedding_id",d).ck(),$async$Cx)
case 12:n=f
m=F.cZ_(F.cEf(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ap(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cy(j==null?"":j)
i=k.h(l,"category")
i=J.cy(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.eW(A.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d4(A.q(g))
g=g==null?null:g.dM()}u.push(new B.Mp(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ap(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eW(A.q(k))
if(k==null)k=0}t.push(new B.a7S(i,k))}l=n==null?null:F.cZx(J.i(n,"total"))
v=new F.lT(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cx,w)},
Mp:function Mp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7S:function a7S(d,e){this.a=d
this.b=e},
dnO(){return new B.D7(null)},
aU8(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aU8=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a9(f,0)
x=3
return A.d(A.fR(!0,new B.cDF(e,new A.aE(new A.bC(u,C.aE,C.aw),$.aa())),d,y.i),$async$aU8)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aU8,w)},
akI(d,e,f,g){return B.dET(d,e,f,g)},
dET(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akI=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aU8(d,"Teto para "+f,g),$async$akI)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a1(0,$.CI().gaX(),y.x).OQ(f,r),$async$akI)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a2(H.I2)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akI,w)},
dbY(d){var x=A.U(d,y._)
C.e.cw(x,new B.cDO())
return x},
dcr(d){var x=C.f.aV(C.j.k(A.ay(d)),2,"0"),w=C.f.aV(C.j.k(A.an(d)),2,"0"),v=A.ax(d)===A.ax(new A.ac(Date.now(),0,!1))?"":"/"+A.ax(d)
return x+"/"+w+v},
cYm(d){var x,w,v,u
if(d===C.k.hA(d))x=C.k.a9(d,0)
else{w=C.k.a9(d,2)
x=A.aW(w,".",",")}v=x.split(",")
u=A.CE(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHH(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abS:function abS(d,e){this.a=d
this.b=e},
D7:function D7(d){this.a=d},
abT:function abT(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKU:function bKU(d){this.a=d},
bKV:function bKV(d){this.a=d},
bLb:function bLb(d){this.a=d},
bLa:function bLa(){},
bKQ:function bKQ(){},
bKS:function bKS(){},
bKT:function bKT(){},
bKR:function bKR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bL_:function bL_(){},
bL0:function bL0(d){this.a=d},
bL9:function bL9(d){this.a=d},
bL1:function bL1(){},
bL2:function bL2(){},
bL3:function bL3(d,e){this.a=d
this.b=e},
bL4:function bL4(d){this.a=d},
bKZ:function bKZ(d){this.a=d},
bL5:function bL5(d){this.a=d},
bKY:function bKY(d){this.a=d},
bL6:function bL6(d){this.a=d},
bKX:function bKX(d){this.a=d},
bL7:function bL7(d){this.a=d},
bKW:function bKW(d){this.a=d},
bL8:function bL8(d){this.a=d},
cDF:function cDF(d,e){this.a=d
this.b=e},
cDD:function cDD(d){this.a=d},
cDE:function cDE(d,e){this.a=d
this.b=e},
cDO:function cDO(){},
aPH:function aPH(d,e,f){this.c=d
this.d=e
this.a=f},
aDB:function aDB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDC:function aDC(d,e){this.e=d
this.a=e},
bNp:function bNp(){},
bNr:function bNr(d,e){this.a=d
this.b=e},
bNs:function bNs(d){this.a=d},
bNq:function bNq(d,e,f){this.a=d
this.b=e
this.c=f},
aD8:function aD8(d,e){this.c=d
this.a=e},
bKf:function bKf(d){this.a=d},
bKe:function bKe(d){this.a=d},
aGm:function aGm(d,e,f,g){var _=this
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
Xx:function Xx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCe:function aCe(d,e,f,g,h){var _=this
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
abx:function abx(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bHV:function bHV(d){this.a=d},
bHU:function bHU(){},
bHW:function bHW(d){this.a=d},
bHT:function bHT(){},
bHH:function bHH(){},
bHI:function bHI(d){this.a=d},
bHS:function bHS(){},
bHN:function bHN(d){this.a=d},
bHO:function bHO(d){this.a=d},
bHM:function bHM(d,e){this.a=d
this.b=e},
bHP:function bHP(d){this.a=d},
bHL:function bHL(d){this.a=d},
bHQ:function bHQ(d){this.a=d},
bHK:function bHK(d){this.a=d},
bHR:function bHR(d,e){this.a=d
this.b=e},
bHJ:function bHJ(d,e){this.a=d
this.b=e},
X9:function X9(d,e){this.e=d
this.a=e},
bNt:function bNt(d){this.a=d},
bNu:function bNu(d){this.a=d},
bNv:function bNv(){},
bNw:function bNw(){},
bNx:function bNx(d){this.a=d},
bNy:function bNy(d,e,f){this.a=d
this.b=e
this.c=f},
bNz:function bNz(d,e){this.a=d
this.b=e},
ai7:function ai7(d,e,f){this.c=d
this.d=e
this.a=f},
aCj:function aCj(d,e,f){this.e=d
this.f=e
this.a=f},
bIS:function bIS(){},
bIY:function bIY(d){this.a=d},
bIV:function bIV(){},
bIU:function bIU(d){this.a=d},
bIL:function bIL(d){this.a=d},
bIT:function bIT(d,e,f){this.a=d
this.b=e
this.c=f},
bIW:function bIW(d){this.a=d},
bIJ:function bIJ(d){this.a=d},
bIK:function bIK(){},
bIX:function bIX(d,e){this.a=d
this.b=e},
bIQ:function bIQ(d){this.a=d},
bIR:function bIR(d){this.a=d},
bIM:function bIM(){},
bIN:function bIN(d){this.a=d},
bIO:function bIO(d){this.a=d},
bIP:function bIP(d,e){this.a=d
this.b=e},
anx:function anx(d,e){this.c=d
this.a=e},
aYJ:function aYJ(d){this.a=d},
dgV(d){var x
switch(d){case E.y_:x=D.bDd
break
case E.xW:x=D.byo
break
case E.xX:x=D.bC_
break
case E.xY:x=D.bBp
break
case E.xZ:x=D.bzS
break
default:x=C.a6
break}return x}},D,K,V
J=c[1]
A=c[0]
C=c[2]
L=c[187]
M=c[204]
N=c[218]
O=c[220]
E=c[221]
P=c[166]
Q=c[217]
F=c[133]
R=c[159]
G=c[77]
I=c[216]
S=c[198]
T=c[219]
H=c[215]
U=c[79]
B=a.updateHolder(c[53],B)
D=c[214]
K=c[72]
V=c[78]
B.DD.prototype={
gar(d){return this.a.a}}
B.b3L.prototype={
gpZ(){return C.e.d_(this.b,0,new B.b3M())},
gaC9(){var x=this.a
return x===0?0:C.k.ah(this.gpZ()/x,0,1)}}
B.zX.prototype={
gbA1(){var x=this.b,w=A.a8(x).i("a5<1>")
x=A.U(new A.a5(x,new B.b5p(),w),w.i("x.E"))
return x},
gbAn(d){var x=this.b,w=A.a8(x).i("a5<1>")
x=A.U(new A.a5(x,new B.b5q(),w),w.i("x.E"))
return x},
axi(d,e){var x=e==null?this.a:e
return new B.zX(x,d==null?this.b:d)},
im(d){return this.axi(null,d)},
ax0(d){return this.axi(d,null)}}
B.DN.prototype={
d5(){var x=y.T,w=this.x=A.eQ(this).G(A.cG($.cr(),new B.b5m(),y.v,x),x)
if(w!=null)A.jl(new B.b5n(this,w),y.H)
return D.azX},
bY(d,e){return this.bxp(0,e)},
bxp(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).im(!0))
u=$.P().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").cm(0).V("wedding_id",e).cO(0,"created_at",!0),$async$bY)
case 2:v.sa4(0,new t.zX(s,r.da(g,B.dJG(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
VM(d){return this.bno(d)},
bno(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$VM=A.j(function(e,f){if(e===1)return A.k(f,w)
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
u.j(0,"due_date",t==null?null:C.e.gJ(t.ci().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.d8(0,u).cm(0).dQ(0),$async$VM)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cZe(s))
v.sa4(0,r.ax0(u))
return A.l(null,w)}})
return A.m($async$VM,w)},
ON(d){return this.bCY(d)},
bCY(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$ON=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lh(v.ga4(0).b,new B.b5o(d))
m=$.P().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bj(0,A.R(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).ci()],u,u)).V("id",d).cm(0).dQ(0),$async$ON)
case 2:t=l.cZe(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.ax0(m))
return A.l(null,w)}})
return A.m($async$ON,w)}}
B.Mp.prototype={}
B.a7S.prototype={
gar(d){return this.a}}
B.abS.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D7.prototype={
R(){return new B.abT(D.Jd)}}
B.abT.prototype={
TX(d){return this.bdh(d)},
bdh(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TX=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKU(u))
x=1
break}u.p(new B.bKV(u))
t=u.gS()
s=$.cr()
r=t.a1(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a1(0,s.gaX(),y.Z).ai(0,d),$async$TX)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$TX,w)},
ac(){this.ap()
A.jl(new B.bLb(this),y.H)},
Qs(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Qs=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.am8()
m=y.h
l=o.a1(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a1(0,$.CI(),y.b).b
s=t==null?null:t.b
r=C.e.d_(o.a1(0,n,y.g).b,0,new B.bKQ())
t=o.a1(0,$.cr(),y.v).b
q=t==null?null:t.gcB()
t=u.c
t.toString
x=3
return A.d(A.bW(null,new B.bKR(q,s,new B.bKS(),r),!1,t,!0,!0,null,y.B),$async$Qs)
case 3:p=e
if(p==null){x=1
break}o=o.a1(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.VM(new G.i5("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Qs,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CI(),y.b),a3=a1.G($.HZ(),y.d),a4=a1.G($.am8(),y.g),a5=a2.b,a6=a5==null?e:B.dIP(a5,a3.b)
a5=A.j2(a1.G($.j0(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iT
a5=y.T
w=a1.G(A.cG($.cr(),new B.bL_(),y.v,a5),a5)
if(f.y){a1=f.gapR()
return A.cQ(e,C.d1,A.or(C.fh,40,A.a([C.h0,D.aHl,K.cVP(a1,e),new B.aCj(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.db(x,new B.bL0(w))
a1=a1.G($.uy(),y.l)
u=a1.gv(a1)
t=new B.bL9(u==null?C.fd:u)
a1=y._
a5=A.U(a4.gbA1(),a1)
for(s=v.a,r=J.c7(s),q=r.gX(s),p=v.b,o=v.$ti.i("ha<1>"),n=new A.ha(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i5("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbAn(0),a1)
for(s=r.gX(s),o=new A.ha(s,p,o),p=y.r;o.t();){r=s.gE(s)
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
n.push(new G.i5("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dbY(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dbY(q)
break
default:a1=e}h=C.e.d_(q,0,new B.bL1())
s=a6==null
if(s)g=D.bzs
else{r=a6.b
p=A.a8(r).i("a5<1>")
g=A.U(new A.a5(r,new B.bL2(),p),p.i("x.E"))}if(s)a1=D.bY6
else{s=f.gaRM()
r=y.p
p=A.a([new A.pr(A.a([new A.qO(s,"Nova despesa",e)],r),e),D.aHr,K.cVP(f.gapR(),w),new B.aPH(a6,new B.bL3(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aK(a6.gpZ(),!1)
n=a5.length
m=n===1?d:a0
l=A.aK(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.cc("N\xfameros",e,A.a([new A.DY(A.a([new A.la("Gasto",o,""+n+" "+m,e),new A.la("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new L.me(A.a([new A.ek("Todos",l===D.Jd,n+m,new B.bL4(f),e),new A.ek("Pendentes",l===D.abN,m,new B.bL5(f),e),new A.ek("Pagos",l===D.abM,n,new B.bL6(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aGm(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.cc("Pagamentos",e,o,16,e))
a1=A.a([new A.hX(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDB(g,f.x,new B.bL7(f),e))
p.push(new A.cc("Categorias",e,a1,16,e))
p.push(new A.cc("Exportar",e,A.a([new F.DO("Gastos e parceiros",!1,new B.bL8(f),e)],r),16,e))
a1=A.or(C.fh,40,p,e,!0,!1)}return A.cQ(e,C.d1,a1,!0,e)},
IM(d){return this.aYP(d)},
aYP(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IM=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aU8(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IM)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a1(0,$.CI().gaX(),y.x).a_A(r),$async$IM)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a2(H.I2)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$IM,w)}}
B.aPH.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpZ()>0?"Gastos "+A.aK(t.gpZ(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vh(new A.hJ("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hF,0,"por definir","\u2014")}x=C.k.aL(t.gaC9()*100)
w=s-t.gpZ()<0?"Acima do teto":"Ainda tens"
v=A.aK(Math.abs(s-t.gpZ()),!1)
s=A.aK(s,!1)
u=t.gaC9()
return A.aX(A.vh(H.a1R,"Gastos "+A.aK(t.gpZ(),!1)+" \xb7 "+x+"% do teto",w,C.hF,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDB.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dC(s,0,A.ew(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDC(r[w],null))
q=A.a([A.eT(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.hJ(u,v.e,!0,null))}return A.A(q,C.E,C.h,C.l)}}
B.aDC.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cG($.cr(),new B.bNp(),y.v,m),m)
if(l==null)x=C.rl
else{m=e.G($.d1d().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rl:m}m=A.a([],y.s)
for(w=B.dgV(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bNr(this,d)
if(w)return A.k_(!1,!1,p,v,A.aK(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mP("P\xf4r teto",new B.bNq(this,d,e),!0,p))
w=A.aK(o.b,!1)
u=A.aK(n,!1)
s=y.p
q=A.a([A.aH(new A.a4a(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aF,new B.anx(m,p)],s))
return A.k_(!1,!1,p,v,w+" de "+u,o.a,A.A(q,C.dO,C.h,C.J))}}
B.aD8.prototype={
u(d){var x,w,v=null,u=$.au,t=$.f6.ce(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fT(r,A.aH(p==null?A.kK(A.b5(C.i5,u,v,v,v),C.t,!0):A.pn(p,144,new B.bKe(u),!1,C.bG,A.ww(),!1,v,v,v),48,48),C.bb)
p=A.h(q.b,1,C.a1,v,v,D.c3Q,v,v,v)
x=A.b5(C.i7,u,v,v,14)
w=q.d
q=w>0?q.gQ0()+" \xb7 "+A.aK(w,!1):q.gQ0()
w=y.p
return new A.T(C.dn,A.aX(A.B(v,A.O(A.a([r,C.ae,A.a6(A.A(A.a([p,C.j7,A.O(A.a([x,C.e5,new A.df(1,C.b9,A.h(q,1,C.a1,v,v,A.aJ(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bo,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.F,C.h,C.l),1),A.b5(C.i9,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.K(t,v,v,s,v,v,C.x),v,v,v,C.eg,v,v,v),new B.bKf(d),v),v)}}
B.aGm.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JL(A.a([new A.hJ("+ Nova despesa",this.f,!0,j)],y.p),C.eT,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBg
x=new B.bXr(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+B.dcr(m)
v.push(new A.td(new A.ci(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bXn(d,e,s,q),A.HT(m)===C.f6,j))
continue}p=r?new B.bXo(d):new B.bXp(x,s)
v.push(new B.Xx(s,p,r||s.w?j:new B.bXq(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xx&&v[k-1] instanceof B.Xx)u.push(C.iJ)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAY)
return A.A(i,C.E,C.h,C.l)}}
B.Xx.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aK(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dcr(w))
v=C.e.a0(v," \xb7 ")
if(u)u=D.aH6
else{u=this.e
u=u!=null?new A.mP("Marcar pago",u,!0,null):D.aHd}return A.k_(!1,!1,null,this.d,v,x.c,u)}}
B.aCe.prototype={}
B.NP.prototype={
R(){var x=$.aa()
return new B.abx(new A.aE(C.aj,x),new A.aE(C.aj,x))}}
B.abx.prototype={
ac(){var x=this
x.ap()
x.d.an(0,new B.bHV(x))
x.e.an(0,new B.bHW(x))},
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
gai5(){var x=C.f.B(this.e.a.a)
x=A.aW(x," ","")
return A.eW(A.aW(x,",","."))},
aSZ(){var x,w,v,u,t=this,s=t.gai5()
t.p(new B.bHI(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.ae(new B.aCe(x,s,u,t.r,v))},
asC(d,e,f,g,h){var x=null,w=h?C.hn:x,v=y.p,u=A.a6(A.A(A.a([A.h(d,x,x,x,x,C.a9,x,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x,x)],v),C.F,C.h,C.l),1),t=f?C.bq:x,s=f?x:A.bA(C.kn,1.5),r=f?S.vA:x
return A.ba(x,!0,x,A.cP(C.bw,A.B(x,A.O(A.a([u,A.B(x,r,C.r,x,x,new A.K(t,x,s,x,x,x,C.as),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.d2,new A.K(x,x,w,x,x,x,C.x),x,x,x,C.ht,x,x,x),C.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aN),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a3,x)},
bjK(d,e,f,g){return this.asC(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gai5()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bHS()
t=y.w
s=A.aO(d,k,t).w
r=y.p
q=A.a([D.ccf],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k,k))
q=A.O(A.a([A.a6(A.A(q,C.F,C.h,C.l),1),A.ba(k,!0,k,A.cP(k,A.B(k,C.kB,C.r,k,k,C.cc,k,44,k,k,k,k,44),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHN(d),k,k,k,k,k,k,!1,C.aN),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a3,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.cgN,A.O(A.a([V.d5C(A.cs(k,C.a6,!1,k,!0,C.y,k,A.ct(),l.e,k,k,k,k,k,2,D.aF9,C.W,!0,k,!0,k,!1,k,C.aC,k,k,k,k,C.fF,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.ao,k,k,k,k,k,k,k,k,k,k,k,D.aas,!0,C.dF,k,C.b_,k,k,k,k)),C.bh,D.ccj],r),C.ee,C.bS,C.l,0,C.aI)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cYm(v)+" no teto":"Passa o teto em "+B.cYm(-v)
o.push(A.h(m,k,k,k,k,A.aJ(k,k,n?C.V:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.cez)
p=A.B(k,A.A(o,C.v,C.h,C.l),C.r,k,k,new A.K(C.a5,k,k,p,k,k,C.x),k,k,k,C.bn,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aJ,k,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bA(C.bX,1.5):k
n=A.a([p,C.a0,new A.T(C.dn,o,k),A.B(C.be,A.cs(k,C.a6,!1,k,!0,C.y,k,A.ct(),x,k,k,k,k,k,2,D.aEO,C.W,!0,k,!0,k,!1,k,C.aC,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.ao,k,k,k,k,k,k,k,k,k,k,k,C.fj,!0,C.at,k,C.hd,k,k,k,k),C.r,k,k,new A.K(C.a5,k,m,n,k,k,C.x),k,52,k,C.fT,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bKK)
n.push(C.a0)
n.push(new U.a1o(l.r,new B.bHO(l),k))
n.push(C.a0)
n.push(new A.T(C.dn,A.h("ESTADO",k,k,k,k,C.aJ,k,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bjK("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHP(l)),l.asC("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHQ(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.ay(p)))
m=l.f
m.toString
m=A.q(w.$1(A.an(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.ax(w)}o.push(A.ba(k,!0,k,A.cP(C.bw,A.aH(A.O(A.a([D.azQ,A.h(w,k,k,k,k,C.cj,k,k,k),C.e5,C.lK],r),C.v,C.h,C.l,0,k),56,k),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHR(l,d),k,k,k,k,k,k,!1,C.aN),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a3,k))}n.push(A.B(k,A.A(o,C.v,C.h,C.l),C.r,k,k,new A.K(C.a5,k,k,x,k,k,C.x),k,k,k,C.cG,k,k,k))
n.push(C.a0)
n.push(D.cbS)
x=A.dT(A.A(n,C.E,C.h,C.l),C.y,k,C.eh,k,C.av)
t=A.aO(d,C.b5,t).w
w=A.ck(u?C.z:C.z.ce(0.35),k,k,C.t,k,k,C.ac,k,k,C.eK)
return new A.T(new A.a3(0,0,0,s.f.d),A.A(A.a([new A.T(C.jF,q,k),new A.df(1,C.b9,x,k),new A.T(new A.a3(20,16,20,20+t.r.d),A.aH(A.bE(A.h(u?"Guardar \xb7 "+B.cYm(j):"Guardar",k,k,k,k,k,k,k,k),l.gaSY(),w),52,k),k)],r),C.E,C.h,C.J),k)}}
B.X9.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CI(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eL(new A.a5(j,new B.bNt(l),A.a8(j).i("a5<1>")))
x=j}if(x==null)x=l.e
j=e.G($.am8(),y.g).b
w=A.a8(j).i("a5<1>")
v=A.U(new A.a5(j,new B.bNu(l),w),w.i("x.E"))
C.e.cw(v,new B.bNv())
j=y.T
u=e.G(A.cG($.cr(),new B.bNw(),y.v,j),j)
t=B.dgV(l.e.c)
if(u==null)s=I.Fs
else{j=e.G($.aW_().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fs
j=J.db(j,new B.bNx(t))
s=A.U(j,j.$ti.i("x.E"))}j=A.aO(d,k,y.w).w
w=A.bL(A.B(k,k,C.r,k,k,new A.K(C.bH,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.av(d).ok.r,k,k,k)
q=A.a6(new B.ai7("Gasto",A.aK(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a0,r,C.aB,A.O(A.a([q,C.ag,A.a6(A.aX(new B.ai7("Teto \xb7 tocar para mudar",p===0?"Definir":A.aK(p,!1),k),new B.bNy(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bi,A.h("Contratado na app",k,k,k,k,A.av(d).ok.w,k,k,k),C.Q],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aD8(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.h("Despesas",k,k,k,k,A.av(d).ok.w,k,k,k))
p.push(C.Q)
w=v.length
if(w===0)p.push(D.bL2)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.ir,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aV(C.j.k(A.ay(q)),2,"0")+"/"+C.f.aV(C.j.k(A.an(q)),2,"0")+"/"+A.ax(q),k,k,k,k,k,k,k,k)
p.push(A.jp(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aK(m.f,!1),k,k,k,k,D.c5T,k,k,k),C.ad,new P.Di(m.w,new B.bNz(e,m),k,$.au,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.Jf,k)],o),C.v,C.h,C.J,0,k),k))}return A.bD(!0,new A.e6(new A.aR(0,1/0,0,j.a.b*0.8),A.d6(p,k,M.CZ,k,k,!1,!0),k),k,C.Z,!0)}}
B.ai7.prototype={
u(d){var x=null,w=A.W(16)
return A.B(x,A.A(A.a([A.h(this.c,x,x,x,x,C.bf,x,x,x),C.ar,A.h(this.d,x,x,x,x,N.aaf,x,x,x)],y.p),C.F,C.h,C.l),C.r,x,x,new A.K(C.a5,x,x,w,x,x,C.x),x,x,x,C.cY,x,x,x)}}
B.aCj.prototype={
bb(d,e){var x,w=y.t,v=e.G(A.cG($.cr(),new B.bIS(),y.v,w),w),u=e.G($.d1c(),y.o)
w=e.G($.uy(),y.l)
x=w.gv(w)
return A.hC(u,new B.bIT(this,new B.bIY(x==null?C.fd:x),v),new B.bIU(e),new B.bIV(),!1,!0,!1)}}
B.anx.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.au,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.f6
s=new A.b6(999,999)
r=new A.bf(o.ce(0.25),1,C.ai,-1)
q=A.b5(C.i7,o,p,p,13)
t=A.B(p,A.O(A.a([q,C.t1,new A.df(1,C.b9,A.h(u,1,C.a1,p,p,new A.Q(!0,o,p,p,p,p,14,C.d4,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b5(C.i9,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afy,new A.K(t,p,new A.dO(r,r,r,r),new A.cz(s,s,s,s),p,p,C.x),p,p,p,D.auh,p,p,p)
m.push(new A.ju(new A.n9(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a3,p,p,p,p),!1,!1,p,!1,!1,new A.ih(t,new B.aYJ(d),p,p),p))}return A.e1(C.bd,m,C.r,C.bj,6,6)}}
var z=a.updateTypes(["z(i5)","S(S,i5)","v(i5,i5)","S(S,DD)","zX()","F<~>(c?)","F<~>()","NP(N)","z(DD)","F<lT>()","X9(N)","~(i5)","~()","z(ns)","z(rN)","i5(a4<c,@>)","DN()"])
B.cHe.prototype={
$1(d){return this.aFt(d)},
aFt(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.G(A.cG($.cr(),new B.cHa(),y.v,f),f)
f=J.a7(e)
if(f.gZ(e)){v=D.bzt
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.t();)u.push(t.gE(t).a)
t=$.P()
s=t.b
s===$&&A.b()
r=y.G
q=s.P("budgets").ai(0,"wedding_id, total").dO("wedding_id",u).b6(new B.cHb(),r)
p=t.b.P("budget_categories").ai(0,"wedding_id, amount").dO("wedding_id",u).b6(new B.cHc(),r)
o=t.b.P("expenses").ai(0,"wedding_id, amount, paid").dO("wedding_id",u).b6(new B.cHd(),r)
r=y.N
u=y.i
t=A.E(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bh(a3,s),m=A.u(n),n=new A.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E")
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
case 6:n=d.bh(a3,s),m=A.u(n),n=new A.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E")
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
case 9:u=d.bh(a3,s),s=A.u(u),u=new A.aj(u,u.gA(u),s.i("aj<V.E>")),s=s.i("V.E")
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
u.push(new A.aMV([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1288}
B.cHa.prototype={
$1(d){return d.c},
$S:157}
B.cHb.prototype={
$1(d){return d},
$S:29}
B.cHc.prototype={
$1(d){return d},
$S:29}
B.cHd.prototype={
$1(d){return d},
$S:29}
B.b3M.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b5p.prototype={
$1(d){return d.w},
$S:z+0}
B.b5q.prototype={
$1(d){return!d.w},
$S:z+0}
B.b5m.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.b5n.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b5o.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKU.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKV.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bLb.prototype={
$0(){return this.a.gS().a1(0,$.CI().gaX(),y.x).ZS(0).dS(new B.bLa())},
$S:1}
B.bLa.prototype={
$1(d){},
$S:11}
B.bKQ.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKS.prototype={
$1(d){return A.CE(C.k.a9(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKT(),null)+" \u20ac"},
$S:123}
B.bKT.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bKR.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a0(v," \xb7 ")
u=x&&u>0?u:null
return new B.NP(v,u,w.d,null)},
$S:z+7}
B.bL_.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bL0.prototype={
$1(d){return d.x!==C.ea&&d.b===this.a},
$S:59}
B.bL9.prototype={
$2(d,e){return A.jf(d,this.a.ld(e))},
$1(d){return this.$2(d,null)},
$S:1291}
B.bL1.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bL2.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bL3.prototype={
$0(){return this.a.IM(this.b.a)},
$S:0}
B.bL4.prototype={
$0(){var x=this.a
return x.p(new B.bKZ(x))},
$S:0}
B.bKZ.prototype={
$0(){return this.a.w=D.Jd},
$S:0}
B.bL5.prototype={
$0(){var x=this.a
return x.p(new B.bKY(x))},
$S:0}
B.bKY.prototype={
$0(){return this.a.w=D.abN},
$S:0}
B.bL6.prototype={
$0(){var x=this.a
return x.p(new B.bKX(x))},
$S:0}
B.bKX.prototype={
$0(){return this.a.w=D.abM},
$S:0}
B.bL7.prototype={
$0(){var x=this.a
return x.p(new B.bKW(x))},
$S:0}
B.bKW.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bL8.prototype={
$0(){return B.Cx(this.a.gS().a1(0,$.cr(),y.v).b.a)},
$S:z+9}
B.cDF.prototype={
$1(d){var x=null,w=this.b
return new A.eS(A.h(this.a,x,x,x,x,x,x,x,x),A.cs(x,C.a6,!0,x,!0,C.y,x,A.ct(),w,x,x,x,x,x,2,D.aFm,C.W,!0,x,!0,x,!1,x,C.aC,x,x,x,x,C.fF,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.ao,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.at,x,C.b_,x,x,x,x),A.a([A.cx(C.cS,x,x,new B.cDD(d),x,x),A.bE(C.dA,new B.cDE(d,w),x)],y.p),x)},
$S:19}
B.cDD.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.cDE.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aW(w," ","")
return x.ae(A.eW(A.aW(w,",",".")))},
$S:0}
B.cDO.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bm(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bm(2100,1,1,0,0):x)},
$S:z+2}
B.bNp.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNr.prototype={
$0(){return A.bW(null,new B.bNs(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bNs.prototype={
$1(d){return new B.X9(this.a.e.a,null)},
$S:z+10}
B.bNq.prototype={
$0(){return B.akI(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bKf.prototype={
$0(){var x=this.a
A.am(x,!1).bp()
A.ae(x).al("/bookings",null,y.X)},
$S:0}
B.bKe.prototype={
$3(d,e,f){return A.kK(A.b5(C.i5,this.a,null,null,null),C.t,!0)},
$S:104}
B.bXr.prototype={
$1(d){var x,w,v=null
this.a.a1(0,$.am8().gaX(),y.h).ON(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a2(A.c0(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bXn.prototype={
$0(){var x=this
return A.rF(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bXo.prototype={
$0(){return A.ae(this.a).al("/bookings",null,y.X)},
$S:0}
B.bXp.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bXq.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHV.prototype={
$0(){return this.a.p(new B.bHU())},
$S:0}
B.bHU.prototype={
$0(){},
$S:0}
B.bHW.prototype={
$0(){return this.a.p(new B.bHT())},
$S:0}
B.bHT.prototype={
$0(){},
$S:0}
B.bHH.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bHI.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHS.prototype={
$1(d){return C.f.aV(C.j.k(d),2,"0")},
$S:39}
B.bHN.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.bHO.prototype={
$1(d){var x=this.a
return x.p(new B.bHM(x,d))},
$S:135}
B.bHM.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHP.prototype={
$0(){var x=this.a
return x.p(new B.bHL(x))},
$S:0}
B.bHL.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHQ.prototype={
$0(){var x=this.a
return x.p(new B.bHK(x))},
$S:0}
B.bHK.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHR.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.alA(v.b,A.bm(A.ax(t)-1,1,1,0,0),r,A.bm(A.ax(t)+5,1,1,0,0)),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHJ(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHJ.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bNt.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bNu.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bNv.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bm(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bm(2100,1,1,0,0):x)},
$S:z+2}
B.bNw.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bNx.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bNy.prototype={
$0(){var x=this.c
return B.akI(this.a,this.b,x.a,x.d)},
$S:0}
B.bNz.prototype={
$1(d){return this.a.a1(0,$.am8().gaX(),y.h).ON(this.b.a)},
$S:158}
B.bIS.prototype={
$1(d){return d.c},
$S:157}
B.bIY.prototype={
$2(d,e){return A.jf(d,this.a.ld(e))},
$S:44}
B.bIV.prototype={
$0(){return D.bLE},
$S:91}
B.bIU.prototype={
$2(d,e){return A.JL(A.a([new A.hJ("Tentar outra vez",new B.bIL(this.a),!1,null)],y.p),C.eT,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1292}
B.bIL.prototype={
$0(){return this.a.ak($.d1c())},
$S:0}
B.bIT.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIW(g),e=new B.bIX(g,this.b),d=J.c7(a4),a0=d.d_(a4,0,new B.bIM()),a1=d.d_(a4,0,new B.bIN(f)),a2=d.d_(a4,0,new B.bIO(e)),a3=y.N
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
x=A.vh(i,""+t+" "+r+w,"Todos os eventos",C.hF,u,v,x)
v=y.p
u=A.a([new A.DY(A.a([new A.la("Gasto",A.aK(a1,!1),h,i),new A.la("Por pagar",A.aK(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eK(a4,0,y.A),r=J.ap(t.a),q=t.b,t=new A.c9(r,q,A.u(t).i("c9<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.Z(q+n,r.gE(r)):A.al(A.c6())
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
k.push("por pagar "+A.aK(j[3]+e.$1(j[0]),!1))}n=A.A(A.a([n,C.aU,A.h(C.e.a0(k," \xb7 "),i,i,i,i,C.L,i,i,i)],v),C.F,C.h,C.l)
k=o.a.a
l.push(new A.ih(A.B(i,A.O(A.a([new A.bQ(1,C.au,n,i),C.ag,A.h(A.aK(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i,i),C.bh,C.lK],v),C.v,C.h,C.l,0,i),C.r,C.al,C.d2,i,i,i,i,C.cm,i,i,i),new B.bIP(o,g),i,i))
C.e.n(w,l)}return A.A(A.a([x,new A.cc("N\xfameros",i,u,16,i),new A.cc("Por evento \xb7 "+d,i,w,16,i),D.aB_],v),C.E,C.h,C.l)},
$S:1293}
B.bIW.prototype={
$1(d){return J.db(this.a.e,new B.bIJ(d)).d_(0,0,new B.bIK())},
$S:196}
B.bIJ.prototype={
$1(d){return d.b===this.a&&d.x!==C.ea},
$S:59}
B.bIK.prototype={
$2(d,e){return d+e.w},
$S:479}
B.bIX.prototype={
$1(d){return J.db(this.a.e,new B.bIQ(d)).d_(0,0,new B.bIR(this.b))},
$S:196}
B.bIQ.prototype={
$1(d){return d.b===this.a&&d.x!==C.ea},
$S:59}
B.bIR.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:479}
B.bIM.prototype={
$2(d,e){return d+e.a[2]},
$S:259}
B.bIN.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:259}
B.bIO.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:259}
B.bIP.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYJ.prototype={
$0(){return A.ae(this.a).al("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dJG","cZe",15)
w(B,"dJF","dqv",16)
v(B.DN.prototype,"giI","d5",4)
var t
u(t=B.abT.prototype,"gapR","TX",5)
v(t,"gaRM","Qs",6)
v(B.abx.prototype,"gaSY","aSZ",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cHe,B.cHa,B.cHb,B.cHc,B.cHd,B.b5p,B.b5q,B.b5m,B.b5o,B.bLa,B.bKS,B.bKT,B.bKR,B.bL_,B.bL0,B.bL9,B.bL2,B.cDF,B.bNp,B.bNs,B.bKe,B.bXr,B.bHH,B.bHS,B.bHO,B.bNt,B.bNu,B.bNw,B.bNx,B.bNz,B.bIS,B.bIT,B.bIW,B.bIJ,B.bIX,B.bIQ])
x(A.J,[B.DD,B.b3L,B.zX,B.Mp,B.a7S,B.aCe])
x(A.cK,[B.b3M,B.bKQ,B.bL1,B.cDO,B.bNv,B.bIY,B.bIU,B.bIK,B.bIR,B.bIM,B.bIN,B.bIO])
w(B.DN,A.fd)
x(A.bO,[B.b5n,B.bKU,B.bKV,B.bLb,B.bL3,B.bL4,B.bKZ,B.bL5,B.bKY,B.bL6,B.bKX,B.bL7,B.bKW,B.bL8,B.cDD,B.cDE,B.bNr,B.bNq,B.bKf,B.bXn,B.bXo,B.bXp,B.bXq,B.bHV,B.bHU,B.bHW,B.bHT,B.bHI,B.bHN,B.bHM,B.bHP,B.bHL,B.bHQ,B.bHK,B.bHR,B.bHJ,B.bNy,B.bIV,B.bIL,B.bIP,B.aYJ])
w(B.abS,A.eX)
w(B.D7,A.dA)
w(B.abT,A.dv)
x(A.M,[B.aPH,B.aDB,B.aD8,B.Xx,B.ai7,B.anx])
x(A.et,[B.aDC,B.aGm,B.X9,B.aCj])
w(B.NP,A.G)
w(B.abx,A.Y)})()
A.bt(b.typeUniverse,JSON.parse('{"DN":{"fd":["zX"]},"NP":{"G":[],"e":[],"f":[]},"X9":{"G":[],"e":[],"f":[]},"D7":{"G":[],"e":[],"f":[]},"abT":{"Y":["D7"]},"aPH":{"M":[],"e":[],"f":[]},"aDB":{"M":[],"e":[],"f":[]},"aDC":{"G":[],"e":[],"f":[]},"aD8":{"M":[],"e":[],"f":[]},"aGm":{"G":[],"e":[],"f":[]},"Xx":{"M":[],"e":[],"f":[]},"abx":{"Y":["NP"]},"ai7":{"M":[],"e":[],"f":[]},"aCj":{"G":[],"e":[],"f":[]},"anx":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("az<fb>"),k:x("az<t<rN>>"),u:x("az<t<fL>>"),o:x("az<t<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>>"),y:x("az<a4<c,t<c>>>"),x:x("zA"),b:x("uM"),d:x("rS"),Z:x("oj"),v:x("ed"),_:x("i5"),h:x("DN"),g:x("zX"),D:x("r<DD>"),r:x("r<i5>"),Q:x("r<la>"),F:x("r<ek>"),Y:x("r<a4<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>"),E:x("r<a7S>"),c:x("r<Mp>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fL>"),t:x("t<fm>"),G:x("t<a4<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,S,S,S)>"),P:x("a4<c,@>"),w:x("dh"),A:x("+eventId,spentByHand,total,unpaidByHand(c,S,S,S)"),e:x("lT"),N:x("c"),B:x("aCe"),q:x("dr"),i:x("S"),z:x("@"),S:x("v"),X:x("J?"),T:x("c?"),I:x("S?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afy=new A.aR(0,1/0,32,1/0)
D.auh=new A.a3(8,5,6,5)
D.c81=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null,null)
D.azQ=new A.bQ(1,C.au,D.c81,null)
D.bza=x([],y.r)
D.azX=new B.zX(!1,D.bza)
D.aAY=new A.hX("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aB_=new A.hX("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBg=new A.hX("Sem pagamentos nesta vista.",8,null)
D.aEO=new A.dB(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bs,null,null,C.bs,C.bs,!0,null,null,null,null)
D.aF9=new A.dB(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bs,null,null,C.bs,C.bs,!0,null,null,null,null)
D.aFm=new A.dB(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aH6=new A.dY("Pago",C.d5,null)
D.aHd=new A.dY("Por pagar",C.hD,null)
D.aHl=new A.lL("Or\xe7amento","Todos os teus eventos",null)
D.aHr=new A.lL("Or\xe7amento",null,null)
D.byo=x(["catering"],y.s)
D.bzs=x([],y.D)
D.bzt=x([],y.n)
D.bzS=x(["flowers_decor"],y.s)
D.bBp=x(["music_dj","bands_musicians"],y.s)
D.bC_=x(["photography"],y.s)
D.bDd=x(["venue"],y.s)
D.c8W=new A.D("A despesa precisa de um t\xedtulo",null,C.mt,null,null,null,null,null,null,null,null)
D.bKK=new A.T(T.NL,D.c8W,null)
D.aED=new A.vc("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kz,null)
D.bL2=new A.T(C.fS,D.aED,null)
D.bLE=new A.T(O.v_,C.eD,null)
D.bY6=new A.vU(!1,6,!0,null)
D.c3Q=new A.Q(!0,C.z,null,null,null,null,14,C.d4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5T=new A.Q(!0,null,null,null,null,null,null,C.d4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aas=new A.Q(!0,C.z,null,null,null,null,40,C.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbS=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.bZ,null,null,null,null,null,null,null,null)
D.ccf=new A.D("Nova despesa",null,C.bl,null,null,null,null,null,null,null,null)
D.ccj=new A.D("\u20ac",null,D.aas,null,null,null,null,null,null,null,null)
D.cez=new A.D("Indica um valor v\xe1lido",null,C.mt,null,null,null,null,null,null,null,null)
D.cgN=new A.D("VALOR",null,C.aJ,null,null,null,null,null,null,null,null)
D.Jd=new B.abS(0,"all")
D.abM=new B.abS(1,"paid")
D.abN=new B.abS(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dX0","d1c",()=>C.bP.$1$1(new B.cHe(),y.m))
x($,"dXR","am8",()=>A.mZ(B.dJF(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["QpjFM+qE5BVE9NBfZP4yfck4JR4="]=a.current})($__dart_deferred_initializers__);