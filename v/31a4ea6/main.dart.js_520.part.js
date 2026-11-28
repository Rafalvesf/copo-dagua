((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,P,E,Q,R,F,S,G,I,T,H,U,B={cHo:function cHo(){},cHk:function cHk(){},cHl:function cHl(){},cHm:function cHm(){},cHn:function cHn(){},
dK5(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v)u.push(new B.DD(x[v]))
return new B.b4t(d.b,u)},
DD:function DD(d){this.a=d},
b4t:function b4t(d,e){this.a=d
this.b=e},
b4u:function b4u(){},
d_2(d){var x="category",w="due_date",v=J.a6(d),u=A.a0(v.h(d,"id")),t=A.a0(v.h(d,"wedding_id")),s=A.a0(v.h(d,"title")),r=B.dGh(B.deX(A.x(v.h(d,x)))),q=B.deX(A.x(v.h(d,x))),p=A.ds(v.h(d,"amount")),o=v.h(d,w)==null?null:A.d9(A.a0(v.h(d,w)))
v=A.dS(v.h(d,"paid"))
return new G.i6(u,t,s,r,q,p,o,v===!0)},
deX(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dGh(d){var x
A:{if("venue"===d){x=E.xZ
break A}if("catering"===d){x=E.xV
break A}if("photography"===d){x=E.xW
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xX
break A}if("flowers_decor"===d){x=E.xY
break A}x=null
break A}return x},
drJ(){return new B.DN()},
zR:function zR(d,e){this.a=d
this.b=e},
b67:function b67(){},
b68:function b68(){},
DN:function DN(){this.b=this.x=null},
b64:function b64(){},
b65:function b65(d,e){this.a=d
this.b=e},
b66:function b66(d){this.a=d},
Cw(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cw=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.all(),$async$Cw)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.R("events").al(0,"partner_name_1, partner_name_2").V("id",d).cd(),$async$Cw)
case 4:s=f
x=5
return A.d(u.b.R("bookings").al(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cK(0,"event_date",!1),$async$Cw)
case 5:r=f
u=A.a([],y.s)
for(t=J.ao(r);t.q();)u.push(A.a0(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.Q().b
t===$&&A.b()
x=9
return A.d(t.R("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").dE("booking_id",u).tv(0,"created_at"),$async$Cw)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.R("expenses").al(0,"title, category, amount, due_date, paid").V("wedding_id",d).tv(0,"due_date"),$async$Cw)
case 10:p=f
x=11
return A.d(u.b.R("budget_categories").al(0,"name, amount").V("wedding_id",d).tv(0,"position"),$async$Cw)
case 11:o=f
x=12
return A.d(u.b.R("budgets").al(0,"total").V("wedding_id",d).cd(),$async$Cw)
case 12:n=f
m=F.cZO(F.cEf(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.ao(p);t.q();){l=t.gE(t)
k=J.a6(l)
j=k.h(l,"title")
j=J.cy(j==null?"":j)
i=k.h(l,"category")
i=J.cy(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.f1(A.p(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d0(A.p(g))
g=g==null?null:g.dH()}u.push(new B.Mv(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.ao(o);l.q();){k=l.gE(l)
j=J.a6(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.f1(A.p(k))
if(k==null)k=0}t.push(new B.a8g(i,k))}l=n==null?null:F.d_m(J.i(n,"total"))
v=new F.lT(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cw,w)},
Mv:function Mv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8g:function a8g(d,e){this.a=d
this.b=e},
dp3(){return new B.D6(null)},
aUN(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUN=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.aa(f,0)
x=3
return A.d(A.hf(!0,new B.cDE(e,new A.aH(new A.bF(u,C.aF,C.ay),$.aa())),d,y.i),$async$aUN)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUN,w)},
ale(d,e,f,g){return B.dG4(d,e,f,g)},
dG4(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$ale=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUN(d,"Teto para "+f,g),$async$ale)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CH().gb1(),y.x).OB(f,r),$async$ale)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a4(H.I6)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ale,w)},
dcX(d){var x=A.U(d,y._)
C.e.cv(x,new B.cDO())
return x},
ddq(d){var x=C.f.aP(C.j.k(A.ax(d)),2,"0"),w=C.f.aP(C.j.k(A.aq(d)),2,"0"),v=A.aD(d)===A.aD(new A.ab(Date.now(),0,!1))?"":"/"+A.aD(d)
return x+"/"+w+v},
cZb(d){var x,w,v,u
if(d===C.k.hB(d))x=C.k.aa(d,0)
else{w=C.k.aa(d,2)
x=A.aY(w,".",",")}v=x.split(",")
u=A.CD(v[0],A.aT("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bIy(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
ace:function ace(d,e){this.a=d
this.b=e},
D6:function D6(d){this.a=d},
acf:function acf(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bLM:function bLM(d){this.a=d},
bLN:function bLN(d){this.a=d},
bM3:function bM3(d){this.a=d},
bM2:function bM2(){},
bLI:function bLI(){},
bLK:function bLK(){},
bLL:function bLL(){},
bLJ:function bLJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLS:function bLS(){},
bLT:function bLT(d){this.a=d},
bM1:function bM1(d){this.a=d},
bLU:function bLU(){},
bLV:function bLV(){},
bLW:function bLW(d,e){this.a=d
this.b=e},
bLX:function bLX(d){this.a=d},
bLR:function bLR(d){this.a=d},
bLY:function bLY(d){this.a=d},
bLQ:function bLQ(d){this.a=d},
bLZ:function bLZ(d){this.a=d},
bLP:function bLP(d){this.a=d},
bM_:function bM_(d){this.a=d},
bLO:function bLO(d){this.a=d},
bM0:function bM0(d){this.a=d},
cDE:function cDE(d,e){this.a=d
this.b=e},
cDC:function cDC(d){this.a=d},
cDD:function cDD(d,e){this.a=d
this.b=e},
cDO:function cDO(){},
aQp:function aQp(d,e,f){this.c=d
this.d=e
this.a=f},
aEq:function aEq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEr:function aEr(d,e){this.e=d
this.a=e},
bOe:function bOe(){},
bOg:function bOg(d,e){this.a=d
this.b=e},
bOh:function bOh(d){this.a=d},
bOf:function bOf(d,e,f){this.a=d
this.b=e
this.c=f},
aDY:function aDY(d,e){this.c=d
this.a=e},
bL7:function bL7(d){this.a=d},
bL6:function bL6(d){this.a=d},
aH4:function aH4(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bY0:function bY0(d,e){this.a=d
this.b=e},
bXX:function bXX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXY:function bXY(d){this.a=d},
bXZ:function bXZ(d,e){this.a=d
this.b=e},
bY_:function bY_(d,e){this.a=d
this.b=e},
XZ:function XZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aD4:function aD4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
O0:function O0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abU:function abU(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bIM:function bIM(d){this.a=d},
bIL:function bIL(){},
bIN:function bIN(d){this.a=d},
bIK:function bIK(){},
bIy:function bIy(){},
bIz:function bIz(d){this.a=d},
bIJ:function bIJ(){},
bIE:function bIE(d){this.a=d},
bIF:function bIF(d){this.a=d},
bID:function bID(d,e){this.a=d
this.b=e},
bIG:function bIG(d){this.a=d},
bIC:function bIC(d){this.a=d},
bIH:function bIH(d){this.a=d},
bIB:function bIB(d){this.a=d},
bII:function bII(d,e){this.a=d
this.b=e},
bIA:function bIA(d,e){this.a=d
this.b=e},
XC:function XC(d,e){this.e=d
this.a=e},
bOi:function bOi(d){this.a=d},
bOj:function bOj(d){this.a=d},
bOk:function bOk(){},
bOl:function bOl(){},
bOm:function bOm(d){this.a=d},
bOn:function bOn(d,e,f){this.a=d
this.b=e
this.c=f},
bOo:function bOo(d,e){this.a=d
this.b=e},
aiA:function aiA(d,e,f){this.c=d
this.d=e
this.a=f},
aD9:function aD9(d,e,f){this.e=d
this.f=e
this.a=f},
bJJ:function bJJ(){},
bJP:function bJP(d){this.a=d},
bJM:function bJM(){},
bJL:function bJL(d){this.a=d},
bJC:function bJC(d){this.a=d},
bJK:function bJK(d,e,f){this.a=d
this.b=e
this.c=f},
bJN:function bJN(d){this.a=d},
bJA:function bJA(d){this.a=d},
bJB:function bJB(){},
bJO:function bJO(d,e){this.a=d
this.b=e},
bJH:function bJH(d){this.a=d},
bJI:function bJI(d){this.a=d},
bJD:function bJD(){},
bJE:function bJE(d){this.a=d},
bJF:function bJF(d){this.a=d},
bJG:function bJG(d,e){this.a=d
this.b=e},
ao3:function ao3(d,e){this.c=d
this.a=e},
aZr:function aZr(d){this.a=d},
btf(d,e){return d},
a82:function a82(d,e,f,g,h){var _=this
_.T=d
_.aA=e
_.U$=f
_.dy=g
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=h
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
atx:function atx(d,e){this.c=d
this.a=e},
di6(d){var x
switch(d){case E.xZ:x=D.bCX
break
case E.xV:x=D.byc
break
case E.xW:x=D.bBJ
break
case E.xX:x=D.bBc
break
case E.xY:x=D.bzH
break
default:x=C.a9
break}return x}},D,K
J=c[1]
A=c[0]
C=c[2]
L=c[214]
M=c[203]
N=c[183]
O=c[217]
P=c[219]
E=c[220]
Q=c[169]
R=c[216]
F=c[134]
S=c[163]
G=c[77]
I=c[215]
T=c[218]
H=c[213]
U=c[78]
B=a.updateHolder(c[53],B)
D=c[212]
K=c[72]
B.DD.prototype={
gaq(d){return this.a.a}}
B.b4t.prototype={
gq3(){return C.e.cQ(this.b,0,new B.b4u())},
gaBW(){var x=this.a
return x===0?0:C.k.ah(this.gq3()/x,0,1)}}
B.zR.prototype={
gbzP(){var x=this.b,w=A.a8(x).i("a7<1>")
x=A.U(new A.a7(x,new B.b67(),w),w.i("z.E"))
return x},
gbA9(d){var x=this.b,w=A.a8(x).i("a7<1>")
x=A.U(new A.a7(x,new B.b68(),w),w.i("z.E"))
return x},
ax3(d,e){var x=e==null?this.a:e
return new B.zR(x,d==null?this.b:d)},
im(d){return this.ax3(null,d)},
awM(d){return this.ax3(d,null)}}
B.DN.prototype={
d0(){var x=y.T,w=this.x=A.eS(this).G(A.cA($.cp(),new B.b64(),y.v,x),x)
if(w!=null)A.jI(new B.b65(this,w),y.H)
return D.azY},
bY(d,e){return this.bxf(0,e)},
bxf(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sZ(0,v.gZ(0).im(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.R("expenses").cu(0).V("wedding_id",e).cK(0,"created_at",!0),$async$bY)
case 2:v.sZ(0,new t.zR(s,r.dk(g,B.dKX(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
Vv(d){return this.bna(d)},
bna(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vv=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.Q().b
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
u.j(0,"due_date",t==null?null:C.e.gJ(t.cP().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.dc(0,u).cu(0).e9(0),$async$Vv)
case 2:s=f
r=v.gZ(0)
u=A.U(v.gZ(0).b,y._)
u.push(B.d_2(s))
v.sZ(0,r.awM(u))
return A.l(null,w)}})
return A.m($async$Vv,w)},
Oy(d){return this.bCI(d)},
bCI(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Oy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lb(v.gZ(0).b,new B.b66(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.R("expenses").bg(0,A.R(["paid",!n.w,"updated_at",new A.ab(Date.now(),0,!1).cP()],u,u)).V("id",d).cu(0).e9(0),$async$Oy)
case 2:t=l.d_2(f)
u=v.gZ(0)
m=A.a([],y.r)
for(s=v.gZ(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.I)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sZ(0,u.awM(m))
return A.l(null,w)}})
return A.m($async$Oy,w)}}
B.Mv.prototype={}
B.a8g.prototype={
gaq(d){return this.a}}
B.ace.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D6.prototype={
P(){return new B.acf(D.Ji)}}
B.acf.prototype={
TG(d){return this.bd0(d)},
bd0(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TG=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bLM(u))
x=1
break}u.p(new B.bLN(u))
t=u.gS()
s=$.cp()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gb1(),y.Z).al(0,d),$async$TG)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$TG,w)},
ad(){this.ao()
A.jI(new B.bM3(this),y.H)},
Q9(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Q9=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.amB()
m=y.h
l=o.a0(0,n.gb1(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CH(),y.b).b
s=t==null?null:t.b
r=C.e.cQ(o.a0(0,n,y.g).b,0,new B.bLI())
t=o.a0(0,$.cp(),y.v).b
q=t==null?null:t.gcw()
t=u.c
t.toString
x=3
return A.d(A.bV(null,new B.bLJ(q,s,new B.bLK(),r),!1,t,!0,!0,null,y.B),$async$Q9)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gb1(),m)
n=p.a
m=p.b
t=p.c
o.Vv(new G.i6("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Q9,w)},
t(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CH(),y.b),a3=a1.G($.I1(),y.d),a4=a1.G($.amB(),y.g),a5=a2.b,a6=a5==null?e:B.dK5(a5,a3.b)
a5=A.iP(a1.G($.iy(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.j2
a5=y.T
w=a1.G(A.cA($.cp(),new B.bLS(),y.v,a5),a5)
if(f.y){a1=f.gapt()
return A.cP(e,C.cR,A.nN(C.eZ,40,A.a([C.fD,D.aHp,K.cWC(a1,e),new B.aD9(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.dP(x,new B.bLT(w))
a1=a1.G($.uC(),y.l)
u=a1.gv(a1)
t=new B.bM1(u==null?C.fj:u)
a1=y._
a5=A.U(a4.gbzP(),a1)
for(s=v.a,r=J.ca(s),q=r.gW(s),p=v.b,o=v.$ti.i("fD<1>"),n=new A.fD(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i6("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbA9(0),a1)
for(s=r.gW(s),o=new A.fD(s,p,o),p=y.r;o.q();){r=s.gE(s)
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
n.push(new G.i6("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcX(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcX(q)
break
default:a1=e}h=C.e.cQ(q,0,new B.bLU())
s=a6==null
if(s)g=D.bzg
else{r=a6.b
p=A.a8(r).i("a7<1>")
g=A.U(new A.a7(r,new B.bLV(),p),p.i("z.E"))}if(s)a1=D.bYd
else{s=f.gaRD()
r=y.p
p=A.a([new A.pt(A.a([new A.qK(s,"Nova despesa",e)],r),e),D.aHv,K.cWC(f.gapt(),w),new B.aQp(a6,new B.bLW(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aL(a6.gq3(),!1)
n=a5.length
m=n===1?d:a0
l=A.aL(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c1("N\xfameros",e,A.a([new A.E_(A.a([new A.lc("Gasto",o,""+n+" "+m,e),new A.lc("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.md(A.a([new A.eq("Todos",l===D.Ji,n+m,new B.bLX(f),e),new A.eq("Pendentes",l===D.abV,m,new B.bLY(f),e),new A.eq("Pagos",l===D.abU,n,new B.bLZ(f),e)],y.F),4,!0,e),C.ao],r))}o.push(new B.aH4(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c1("Pagamentos",e,o,16,e))
a1=A.a([new A.fK(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aEq(g,f.x,new B.bM_(f),e))
p.push(new A.c1("Categorias",e,a1,16,e))
p.push(new A.c1("Exportar",e,A.a([new F.DO("Gastos e parceiros",!1,new B.bM0(f),e)],r),16,e))
a1=A.nN(C.eZ,40,p,e,!0,!1)}return A.cP(e,C.cR,a1,!0,e)},
Is(d){return this.aYE(d)},
aYE(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Is=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUN(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Is)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a0(0,$.CH().gb1(),y.x).a_d(r),$async$Is)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a4(H.I6)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Is,w)}}
B.aQp.prototype={
t(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gq3()>0?"Gastos "+A.aL(t.gq3(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vj(new A.h6("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hJ,0,"por definir","\u2014")}x=C.k.aN(t.gaBW()*100)
w=s-t.gq3()<0?"Acima do teto":"Ainda tens"
v=A.aL(Math.abs(s-t.gq3()),!1)
s=A.aL(s,!1)
u=t.gaBW()
return A.aN(A.vj(H.a1W,"Gastos "+A.aL(t.gq3(),!1)+" \xb7 "+x+"% do teto",w,C.hJ,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aEq.prototype={
t(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dp(s,0,A.eu(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.I)(r),++w)p.push(new B.aEr(r[w],null))
q=A.a([A.eQ(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.h6(u,v.e,!0,null))}return A.y(q,C.F,C.h,C.l)}}
B.aEr.prototype={
b8(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cA($.cp(),new B.bOe(),y.v,m),m)
if(l==null)x=C.r5
else{m=e.G($.d1Y().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r5:m}m=A.a([],y.s)
for(w=B.di6(o.c),v=w.length,u=J.a6(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bOg(this,d)
if(w)return A.k1(!1,!1,p,v,A.aL(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.ma("P\xf4r teto",new B.bOf(this,d,e),!0,p))
w=A.aL(o.b,!1)
u=A.aL(n,!1)
s=y.p
q=A.a([A.aG(new A.a4C(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aD,new B.ao3(m,p)],s))
return A.k1(!1,!1,p,v,w+" de "+u,o.a,A.y(q,C.dH,C.h,C.I))}}
B.aDY.prototype={
t(d){var x,w,v=null,u=$.ay,t=$.fb.c7(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.hX(r,A.aG(p==null?A.ku(A.b4(C.iU,u,v,v,v),C.t,!0):A.on(p,144,new B.bL6(u),!1,C.bv,A.wz(),!1,v,v,v),48,48),C.bg)
p=A.h(q.b,1,C.a1,v,v,D.c45,v,v)
x=A.b4(C.ic,u,v,v,14)
w=q.d
q=w>0?q.gPH()+" \xb7 "+A.aL(w,!1):q.gPH()
w=y.p
return new A.S(C.e5,A.aN(A.w(v,A.M(A.a([r,C.aj,A.a4(A.y(A.a([p,C.jg,A.M(A.a([x,C.dM,new A.dl(1,C.bc,A.h(q,1,C.a1,v,v,A.aI(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bk,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.u,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b4(C.h8,u,v,v,v)],w),C.u,C.h,C.l,0,v),C.r,v,v,new A.O(t,v,v,s,v,v,C.z),v,v,v,C.ei,v,v,v),new B.bL7(d),v),v)}}
B.aH4.prototype={
b8(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JS(A.a([new A.h6("+ Nova despesa",this.f,!0,j)],y.p),C.eR,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBk
x=new B.bY0(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.I)(i),++t){s=i[t]
r=s.a
q=C.f.d_(r,":pay:")
r=C.f.b2(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gJ(r.split(" \xb7 "))
n=A.aL(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.ddq(m)
v.push(new A.td(new A.cg(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bXX(d,e,s,q),A.HW(m)===C.f8,j))
continue}p=r?new B.bXY(d):new B.bXZ(x,s)
v.push(new B.XZ(s,p,r||s.w?j:new B.bY_(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XZ&&v[k-1] instanceof B.XZ)u.push(C.iK)
u.push(v[k])
C.e.n(i,u)}i.push(D.aB0)
return A.y(i,C.F,C.h,C.l)}}
B.XZ.prototype={
t(d){var x=this.c,w=x.r,v=A.a([A.aL(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.ddq(w))
v=C.e.a1(v," \xb7 ")
if(u)u=D.aHa
else{u=this.e
u=u!=null?new A.ma("Marcar pago",u,!0,null):D.aHh}return A.k1(!1,!1,null,this.d,v,x.c,u)}}
B.aD4.prototype={}
B.O0.prototype={
P(){var x=$.aa()
return new B.abU(new A.aH(C.ap,x),new A.aH(C.ap,x))}}
B.abU.prototype={
ad(){var x=this
x.ao()
x.d.am(0,new B.bIM(x))
x.e.am(0,new B.bIN(x))},
m(){var x=this.d,w=$.aa()
x.a_$=w
x.X$=0
x=this.e
x.a_$=w
x.X$=0
this.a6()},
gahJ(){var x=C.f.C(this.e.a.a)
x=A.aY(x," ","")
return A.f1(A.aY(x,",","."))},
aSQ(){var x,w,v,u,t=this,s=t.gahJ()
t.p(new B.bIz(t))
x=C.f.C(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.an(w,!1)
v=t.w
u=v?null:t.f
w.ar(new B.aD4(x,s,u,t.r,v))},
asi(d,e,f,g,h){var x=null,w=h?C.fU:x,v=y.p,u=A.a4(A.y(A.a([A.h(d,x,x,x,x,C.ac,x,x),C.aR,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.bx:x,s=f?x:A.bR(L.ky,1.5),r=f?C.qj:x
return A.b9(x,!0,x,A.cG(C.bs,A.w(x,A.M(A.a([u,A.w(x,r,C.r,x,x,new A.O(t,x,s,x,x,x,C.am),x,24,x,x,x,x,24)],v),C.u,C.h,C.l,0,x),C.r,x,C.cJ,new A.O(x,x,w,x,x,x,C.z),x,x,x,C.h0,x,x,x),C.Y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aI),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a3,x)},
bju(d,e,f,g){return this.asi(d,e,f,g,!0)},
t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahJ()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.C(x.a.a).length!==0&&j>0
w=new B.bIJ()
t=y.w
s=A.aU(d,k,t).w
r=y.p
q=A.a([D.c8q],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k))
q=A.M(A.a([A.a4(A.y(q,C.G,C.h,C.l),1),A.b9(k,!0,k,A.cG(k,A.w(k,C.h9,C.r,k,k,C.bG,k,44,k,k,k,k,44),C.Y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bIE(d),k,k,k,k,k,k,!1,C.aI),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a3,k)],r),C.u,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c9t,A.M(A.a([new B.atx(A.cr(k,C.a9,!1,k,!0,C.y,k,A.ct(),l.e,k,k,k,k,k,2,D.aFf,C.Y,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.hk,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.ak,k,k,k,k,k,k,k,k,k,k,k,D.aaE,!0,C.dN,k,C.b2,k,k,k,k),k),C.bf,D.c8S],r),C.ew,C.bT,C.l,0,C.aM)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cZb(v)+" no teto":"Passa o teto em "+B.cZb(-v)
o.push(A.h(m,k,k,k,k,A.aI(k,k,n?C.V:C.c2,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c85)
p=A.w(k,A.y(o,C.u,C.h,C.l),C.r,k,k,new A.O(C.a5,k,k,p,k,k,C.z),k,k,k,C.br,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.C(x.a.a).length===0?A.bR(C.c2,1.5):k
n=A.a([p,C.a0,new A.S(C.e5,o,k),A.w(C.bh,A.cr(k,C.a9,!1,k,!0,C.y,k,A.ct(),x,k,k,k,k,k,2,D.aET,C.Y,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.ak,k,k,k,k,k,k,k,k,k,k,k,C.eI,!0,C.ax,k,C.fQ,k,k,k,k),C.r,k,k,new A.O(C.a5,k,m,n,k,k,C.z),k,52,k,C.fh,k,k,k)],r)
if(l.x&&C.f.C(x.a.a).length===0)n.push(D.bL7)
n.push(C.a0)
n.push(new U.a1L(l.r,new B.bIF(l),k))
n.push(C.a0)
n.push(new A.S(C.e5,A.h("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bju("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bIG(l)),l.asi("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bIH(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.ax(p)))
m=l.f
m.toString
m=A.p(w.$1(A.aq(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aD(w)}o.push(A.b9(k,!0,k,A.cG(C.bs,A.aG(A.M(A.a([D.azH,A.h(w,k,k,k,k,C.cf,k,k),C.dM,C.k_],r),C.u,C.h,C.l,0,k),56,k),C.Y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bII(l,d),k,k,k,k,k,k,!1,C.aI),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a3,k))}n.push(A.w(k,A.y(o,C.u,C.h,C.l),C.r,k,k,new A.O(C.a5,k,k,x,k,k,C.z),k,k,k,C.cN,k,k,k))
n.push(C.a0)
n.push(D.cdW)
x=A.dU(A.y(n,C.F,C.h,C.l),C.y,k,C.ej,k,C.au)
t=A.aU(d,C.b4,t).w
w=A.cc(u?C.x:C.x.c7(0.35),k,k,C.t,k,k,C.ab,k,k,C.eJ)
return new A.S(new A.a3(0,0,0,s.f.d),A.y(A.a([new A.S(C.jP,q,k),new A.dl(1,C.bc,x,k),new A.S(new A.a3(20,16,20,20+t.r.d),A.aG(new A.am(A.bD(A.h(u?"Guardar \xb7 "+B.cZb(j):"Guardar",k,k,k,k,k,k,k),l.gaSP(),w),k),52,k),k)],r),C.F,C.h,C.I),k)}}
B.XC.prototype={
b8(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CH(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.f8(new A.a7(j,new B.bOi(l),A.a8(j).i("a7<1>")))
x=j}if(x==null)x=l.e
j=e.G($.amB(),y.g).b
w=A.a8(j).i("a7<1>")
v=A.U(new A.a7(j,new B.bOj(l),w),w.i("z.E"))
C.e.cv(v,new B.bOk())
j=y.T
u=e.G(A.cA($.cp(),new B.bOl(),y.v,j),j)
t=B.di6(l.e.c)
if(u==null)s=I.Fz
else{j=e.G($.aWI().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fz
j=J.dP(j,new B.bOm(t))
s=A.U(j,j.$ti.i("z.E"))}j=A.aU(d,k,y.w).w
w=A.bG(A.w(k,k,C.r,k,k,new A.O(C.bE,k,k,A.W(2),k,k,C.z),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.az(d).ok.r,k,k)
q=A.a4(new B.aiA("Gasto",A.aL(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a0,r,C.aA,A.M(A.a([q,C.ae,A.a4(A.aN(new B.aiA("Teto \xb7 tocar para mudar",p===0?"Definir":A.aL(p,!1),k),new B.bOn(d,e,x),k),1)],o),C.u,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bp,A.h("Contratado na app",k,k,k,k,A.az(d).ok.w,k,k),C.M],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.I)(s),++n)w.push(new B.aDY(s[n],k))
C.e.n(p,w)}p.push(C.bp)
p.push(A.h("Despesas",k,k,k,k,A.az(d).ok.w,k,k))
p.push(C.M)
w=v.length
if(w===0)p.push(D.bKx)
else for(n=0;n<v.length;v.length===w||(0,A.I)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.hU,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aP(C.j.k(A.ax(q)),2,"0")+"/"+C.f.aP(C.j.k(A.aq(q)),2,"0")+"/"+A.aD(q),k,k,k,k,k,k,k)
p.push(A.jp(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.M(A.a([A.h(A.aL(m.f,!1),k,k,k,k,D.c6e,k,k),C.aa,new Q.Dh(m.w,new B.bOo(e,m),k,$.ay,k,k,!1,k,k,k,k,!1,k,k,!1,k,R.Jk,k)],o),C.u,C.h,C.I,0,k),k))}return A.bE(!0,new A.e7(new A.aP(0,1/0,0,j.a.b*0.8),A.d4(p,k,M.D6,k,k,!1,!0),k),k,C.Z,!0)}}
B.aiA.prototype={
t(d){var x=null,w=A.W(16)
return A.w(x,A.y(A.a([A.h(this.c,x,x,x,x,C.bi,x,x),C.ao,A.h(this.d,x,x,x,x,O.aaq,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.O(C.a5,x,x,w,x,x,C.z),x,x,x,C.cM,x,x,x)}}
B.aD9.prototype={
b8(d,e){var x,w=y.t,v=e.G(A.cA($.cp(),new B.bJJ(),y.v,w),w),u=e.G($.d1X(),y.o)
w=e.G($.uC(),y.l)
x=w.gv(w)
return A.hA(u,new B.bJK(this,new B.bJP(x==null?C.fj:x),v),new B.bJL(e),new B.bJM(),!1,!0,!1)}}
B.ao3.prototype={
t(d){var x,w,v,u,t,s,r,q,p=null,o=$.ay,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v]
t=$.fb
s=new A.b7(999,999)
r=new A.bd(o.c7(0.25),1,C.af,-1)
q=A.b4(C.ic,o,p,p,13)
t=A.w(p,A.M(A.a([q,C.rP,new A.dl(1,C.bc,A.h(u,1,C.a1,p,p,new A.P(!0,o,p,p,p,p,14,C.d0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b4(C.h8,o,p,p,16)],n),C.u,C.h,C.I,0,p),C.r,p,D.afD,new A.O(t,p,new A.dT(r,r,r,r),new A.cJ(s,s,s,s),p,p,C.z),p,p,p,D.auf,p,p,p)
m.push(new A.k8(new A.oH(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a3,p,p,p,p),!1,!1,p,!1,!1,new A.iF(t,new B.aZr(d),p,p),p))}return A.em(C.bj,m,C.r,C.bo,6,6)}}
B.a82.prototype={
saKp(d){return},
saKo(d){return},
cb(d){return this.aX(C.c9,d,this.gc6())},
c0(d){var x=this.U$
if(x==null)return 0
return B.btf(x.aX(C.c9,d,x.gc6()),this.T)},
ca(d){var x,w=this
if(w.U$==null)return 0
if(!isFinite(d))d=w.aX(C.c9,1/0,w.gc6())
x=w.U$
return B.btf(x.aX(C.dC,d,x.gd1()),w.aA)},
c9(d){var x,w=this
if(w.U$==null)return 0
if(!isFinite(d))d=w.aX(C.c9,1/0,w.gc6())
x=w.U$
return B.btf(x.aX(C.cZ,d,x.gcO()),w.aA)},
I0(d,e){var x=e.a>=e.b?null:B.btf(d.aX(C.c9,e.d,d.gc6()),this.T)
return e.GJ(null,x)},
wS(d,e){var x=this.U$
return x==null?new A.af(A.ai(0,d.a,d.b),A.ai(0,d.c,d.d)):e.$2(x,this.I0(x,d))},
dK(d){return this.wS(d,A.lx())},
eN(d,e){var x=this.U$
return x==null?null:x.hj(this.I0(x,d),e)},
cm(){this.fy=this.wS(y.f.a(A.ah.prototype.gaL.call(this)),A.uw())}}
B.atx.prototype={
bs(d){var x=null,w=new B.a82(x,x,x,new A.c8(),A.bc(y.j))
w.br()
w.sbN(x)
return w},
bD(d,e){e.saKp(null)
e.saKo(null)}}
var z=a.updateTypes(["C(i6)","T(T)","T(T,i6)","v(i6,i6)","T(T,DD)","zR()","D<~>(c?)","D<~>()","O0(N)","C(DD)","D<lT>()","XC(N)","~(i6)","~()","C(nu)","C(rL)","i6(a5<c,@>)","DN()"])
B.cHo.prototype={
$1(d){return this.aFh(d)},
aFh(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.tY(a1)
u=y.t
t=a1.G(A.cA($.cp(),new B.cHk(),y.v,u),u)
u=J.a6(t)
if(u.gY(t)){v=D.bzh
x=1
break}s=A.a([],y.s)
for(r=u.gW(t);r.q();)s.push(r.gE(r).a)
r=$.Q()
q=r.b
q===$&&A.b()
p=y.G
o=q.R("budgets").al(0,"wedding_id, total").dE("wedding_id",s).b6(new B.cHl(),p)
n=r.b.R("budget_categories").al(0,"wedding_id, amount").dE("wedding_id",s).b6(new B.cHm(),p)
m=r.b.R("expenses").al(0,"wedding_id, amount, paid").dE("wedding_id",s).b6(new B.cHn(),p)
p=y.N
s=y.i
r=A.E(p,s)
d=q=y.P
a0=J
x=3
return A.d(o,$async$$1)
case 3:d,l=a0.bi(a3,q),k=A.u(l),l=new A.aj(l,l.gA(l),k.i("aj<V.E>")),k=k.i("V.E")
case 4:if(!l.q()){x=5
break}j=l.d
if(j==null)j=k.a(j)
i=J.a6(j)
r.j(0,A.a0(i.h(j,"wedding_id")),A.ds(i.h(j,"total")))
x=4
break
case 5:h=A.E(p,s)
d=J
x=6
return A.d(n,$async$$1)
case 6:l=d.bi(a3,q),k=A.u(l),l=new A.aj(l,l.gA(l),k.i("aj<V.E>")),k=k.i("V.E")
case 7:if(!l.q()){x=8
break}j=l.d
if(j==null)j=k.a(j)
i=J.a6(j)
g=A.a0(i.h(j,"wedding_id"))
f=h.h(0,g)
if(f==null)f=0
j=A.aF(i.h(j,"amount"))
if(j==null)j=null
h.j(0,g,f+(j==null?0:j))
x=7
break
case 8:e=A.E(p,s)
d=J
x=9
return A.d(m,$async$$1)
case 9:s=d.bi(a3,q),q=A.u(s),s=new A.aj(s,s.gA(s),q.i("aj<V.E>")),q=q.i("V.E")
case 10:if(!s.q()){x=11
break}p=s.d
if(p==null)p=q.a(p)
l=J.a6(p)
if(J.o(l.h(p,"paid"),!0)){x=10
break}g=A.a0(l.h(p,"wedding_id"))
k=e.h(0,g)
if(k==null)k=0
p=A.aF(l.h(p,"amount"))
if(p==null)p=null
e.j(0,g,k+(p==null?0:p))
x=10
break
case 11:s=A.a([],y.n)
for(u=u.gW(t);u.q();){q=u.gE(u)
p=q.a
l=r.h(0,p)
q=l==null?q.as:l
if(q==null)q=0
l=h.h(0,p)
if(l==null)l=0
k=e.h(0,p)
s.push(new A.aNE([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1295}
B.cHk.prototype={
$1(d){return d.c},
$S:154}
B.cHl.prototype={
$1(d){return d},
$S:42}
B.cHm.prototype={
$1(d){return d},
$S:42}
B.cHn.prototype={
$1(d){return d},
$S:42}
B.b4u.prototype={
$2(d,e){return d+e.a.b},
$S:z+4}
B.b67.prototype={
$1(d){return d.w},
$S:z+0}
B.b68.prototype={
$1(d){return!d.w},
$S:z+0}
B.b64.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.b65.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b66.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bLM.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bLN.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bM3.prototype={
$0(){return this.a.gS().a0(0,$.CH().gb1(),y.x).Zu(0).ei(new B.bM2())},
$S:1}
B.bM2.prototype={
$1(d){},
$S:13}
B.bLI.prototype={
$2(d,e){return d+e.f},
$S:z+2}
B.bLK.prototype={
$1(d){return A.CD(C.k.aa(d,0),A.aT("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bLL(),null)+" \u20ac"},
$S:106}
B.bLL.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bLJ.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a1(v," \xb7 ")
u=x&&u>0?u:null
return new B.O0(v,u,w.d,null)},
$S:z+8}
B.bLS.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bLT.prototype={
$1(d){return d.x!==C.e3&&d.b===this.a},
$S:51}
B.bM1.prototype={
$2(d,e){return A.jg(d,this.a.k7(e))},
$1(d){return this.$2(d,null)},
$S:1298}
B.bLU.prototype={
$2(d,e){return d+e.f},
$S:z+2}
B.bLV.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+9}
B.bLW.prototype={
$0(){return this.a.Is(this.b.a)},
$S:0}
B.bLX.prototype={
$0(){var x=this.a
return x.p(new B.bLR(x))},
$S:0}
B.bLR.prototype={
$0(){return this.a.w=D.Ji},
$S:0}
B.bLY.prototype={
$0(){var x=this.a
return x.p(new B.bLQ(x))},
$S:0}
B.bLQ.prototype={
$0(){return this.a.w=D.abV},
$S:0}
B.bLZ.prototype={
$0(){var x=this.a
return x.p(new B.bLP(x))},
$S:0}
B.bLP.prototype={
$0(){return this.a.w=D.abU},
$S:0}
B.bM_.prototype={
$0(){var x=this.a
return x.p(new B.bLO(x))},
$S:0}
B.bLO.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bM0.prototype={
$0(){return B.Cw(this.a.gS().a0(0,$.cp(),y.v).b.a)},
$S:z+10}
B.cDE.prototype={
$1(d){var x=null,w=this.b
return new A.f_(A.h(this.a,x,x,x,x,x,x,x),A.cr(x,C.a9,!0,x,!0,C.y,x,A.ct(),w,x,x,x,x,x,2,D.aFt,C.Y,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.hk,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.ak,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.ax,x,C.b2,x,x,x,x),A.a([new A.am(A.cS(C.d3,x,x,new B.cDC(d),x,x),x),new A.am(A.bD(C.dy,new B.cDD(d,w),x),x)],y.p),x)},
$S:19}
B.cDC.prototype={
$0(){return A.an(this.a,!1).bi()},
$S:0}
B.cDD.prototype={
$0(){var x=A.an(this.a,!1),w=C.f.C(this.b.a.a)
w=A.aY(w," ","")
return x.ar(A.f1(A.aY(w,",",".")))},
$S:0}
B.cDO.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bw(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bw(2100,1,1,0,0):x)},
$S:z+3}
B.bOe.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bOg.prototype={
$0(){return A.bV(null,new B.bOh(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bOh.prototype={
$1(d){return new B.XC(this.a.e.a,null)},
$S:z+11}
B.bOf.prototype={
$0(){return B.ale(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bL7.prototype={
$0(){var x=this.a
A.an(x,!1).bi()
A.ae(x).ag("/bookings",null,y.X)},
$S:0}
B.bL6.prototype={
$3(d,e,f){return A.ku(A.b4(C.iU,this.a,null,null,null),C.t,!0)},
$S:86}
B.bY0.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.amB().gb1(),y.h).Oy(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a4(A.c7(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.U,v,v,v,v,v,v,v,v,v,v))},
$S:z+12}
B.bXX.prototype={
$0(){var x=this
return A.rF(x.a,x.b,C.f.bE(x.c.a,x.d+5),null,null,null)},
$S:0}
B.bXY.prototype={
$0(){return A.ae(this.a).ag("/bookings",null,y.X)},
$S:0}
B.bXZ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bY_.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bIM.prototype={
$0(){return this.a.p(new B.bIL())},
$S:0}
B.bIL.prototype={
$0(){},
$S:0}
B.bIN.prototype={
$0(){return this.a.p(new B.bIK())},
$S:0}
B.bIK.prototype={
$0(){},
$S:0}
B.bIy.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bIz.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bIJ.prototype={
$1(d){return C.f.aP(C.j.k(d),2,"0")},
$S:30}
B.bIE.prototype={
$0(){return A.an(this.a,!1).bi()},
$S:0}
B.bIF.prototype={
$1(d){var x=this.a
return x.p(new B.bID(x,d))},
$S:151}
B.bID.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bIG.prototype={
$0(){var x=this.a
return x.p(new B.bIC(x))},
$S:0}
B.bIC.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bIH.prototype={
$0(){var x=this.a
return x.p(new B.bIB(x))},
$S:0}
B.bIB.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bII.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ab(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(S.aVR(v.b,A.bw(A.aD(t)-1,1,1,0,0),r,A.bw(A.aD(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bIA(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bIA.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bOi.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+14}
B.bOj.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bOk.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bw(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bw(2100,1,1,0,0):x)},
$S:z+3}
B.bOl.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bOm.prototype={
$1(d){return C.e.u(this.a,d.a)},
$S:z+15}
B.bOn.prototype={
$0(){var x=this.c
return B.ale(this.a,this.b,x.a,x.d)},
$S:0}
B.bOo.prototype={
$1(d){return this.a.a0(0,$.amB().gb1(),y.h).Oy(this.b.a)},
$S:137}
B.bJJ.prototype={
$1(d){return d.c},
$S:154}
B.bJP.prototype={
$2(d,e){return A.jg(d,this.a.k7(e))},
$S:43}
B.bJM.prototype={
$0(){return D.bL9},
$S:84}
B.bJL.prototype={
$2(d,e){return A.JS(A.a([new A.h6("Tentar outra vez",new B.bJC(this.a),!1,null)],y.p),C.eR,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1299}
B.bJC.prototype={
$0(){return this.a.ak($.d1X())},
$S:0}
B.bJK.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bJN(g),e=new B.bJO(g,this.b),d=J.ca(a4),a0=d.cQ(a4,0,new B.bJD()),a1=d.cQ(a4,0,new B.bJE(f)),a2=d.cQ(a4,0,new B.bJF(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.ao(this.c);x.q();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C_(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bE(s,1))}x=A.aL(a1,!1)
w=a0>0
v=w?"de "+A.aL(a0,!1):"gastos"
u=w?C.k.ah(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aN(a1/a0*100)+"% dos tetos":""
x=A.vj(i,""+t+" "+r+w,"Todos os eventos",C.hJ,u,v,x)
v=y.p
u=A.a([new A.E_(A.a([new A.lc("Gasto",A.aL(a1,!1),h,i),new A.lc("Por pagar",A.aL(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eo(a4,0,y.A),r=J.ao(t.a),q=t.b,t=new A.bW(r,q,A.u(t).i("bW<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.al(A.c0())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iK)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a1,i,i,C.ac,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aL(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aL(j[3]+e.$1(j[0]),!1))}n=A.y(A.a([n,C.aR,A.h(C.e.a1(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.iF(A.w(i,A.M(A.a([new A.bJ(1,C.at,n,i),C.ae,A.h(A.aL(k[1]+f.$1(k[0]),!1),i,i,i,i,C.ac,i,i),C.bf,C.k_],v),C.u,C.h,C.l,0,i),C.r,C.as,C.cJ,i,i,i,i,C.co,i,i,i),new B.bJG(o,g),i,i))
C.e.n(w,l)}return A.y(A.a([x,new A.c1("N\xfameros",i,u,16,i),new A.c1("Por evento \xb7 "+d,i,w,16,i),D.aB2],v),C.F,C.h,C.l)},
$S:1300}
B.bJN.prototype={
$1(d){return J.dP(this.a.e,new B.bJA(d)).cQ(0,0,new B.bJB())},
$S:167}
B.bJA.prototype={
$1(d){return d.b===this.a&&d.x!==C.e3},
$S:51}
B.bJB.prototype={
$2(d,e){return d+e.w},
$S:478}
B.bJO.prototype={
$1(d){return J.dP(this.a.e,new B.bJH(d)).cQ(0,0,new B.bJI(this.b))},
$S:167}
B.bJH.prototype={
$1(d){return d.b===this.a&&d.x!==C.e3},
$S:51}
B.bJI.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:478}
B.bJD.prototype={
$2(d,e){return d+e.a[2]},
$S:260}
B.bJE.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:260}
B.bJF.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:260}
B.bJG.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aZr.prototype={
$0(){return A.ae(this.a).ag("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKX","d_2",16)
w(B,"dKW","drJ",17)
v(B.DN.prototype,"giI","d0",5)
var t
u(t=B.acf.prototype,"gapt","TG",6)
v(t,"gaRD","Q9",7)
v(B.abU.prototype,"gaSP","aSQ",13)
u(t=B.a82.prototype,"gcS","cb",1)
u(t,"gc6","c0",1)
u(t,"gd1","ca",1)
u(t,"gcO","c9",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bv,[B.cHo,B.cHk,B.cHl,B.cHm,B.cHn,B.b67,B.b68,B.b64,B.b66,B.bM2,B.bLK,B.bLL,B.bLJ,B.bLS,B.bLT,B.bM1,B.bLV,B.cDE,B.bOe,B.bOh,B.bL6,B.bY0,B.bIy,B.bIJ,B.bIF,B.bOi,B.bOj,B.bOl,B.bOm,B.bOo,B.bJJ,B.bJK,B.bJN,B.bJA,B.bJO,B.bJH])
x(A.L,[B.DD,B.b4t,B.zR,B.Mv,B.a8g,B.aD4])
x(A.cM,[B.b4u,B.bLI,B.bLU,B.cDO,B.bOk,B.bJP,B.bJL,B.bJB,B.bJI,B.bJD,B.bJE,B.bJF])
w(B.DN,A.fq)
x(A.bN,[B.b65,B.bLM,B.bLN,B.bM3,B.bLW,B.bLX,B.bLR,B.bLY,B.bLQ,B.bLZ,B.bLP,B.bM_,B.bLO,B.bM0,B.cDC,B.cDD,B.bOg,B.bOf,B.bL7,B.bXX,B.bXY,B.bXZ,B.bY_,B.bIM,B.bIL,B.bIN,B.bIK,B.bIz,B.bIE,B.bID,B.bIG,B.bIC,B.bIH,B.bIB,B.bII,B.bIA,B.bOn,B.bJM,B.bJC,B.bJG,B.aZr])
w(B.ace,A.fj)
w(B.D6,A.dB)
w(B.acf,A.dx)
x(A.H,[B.aQp,B.aEq,B.aDY,B.XZ,B.aiA,B.ao3])
x(A.ev,[B.aEr,B.aH4,B.XC,B.aD9])
w(B.O0,A.G)
w(B.abU,A.Z)
w(B.a82,A.Vk)
w(B.atx,A.ch)})()
A.bq(b.typeUniverse,JSON.parse('{"DN":{"fq":["zR"]},"O0":{"G":[],"e":[],"f":[]},"XC":{"G":[],"e":[],"f":[]},"D6":{"G":[],"e":[],"f":[]},"acf":{"Z":["D6"]},"aQp":{"H":[],"e":[],"f":[]},"aEq":{"H":[],"e":[],"f":[]},"aEr":{"G":[],"e":[],"f":[]},"aDY":{"H":[],"e":[],"f":[]},"aH4":{"G":[],"e":[],"f":[]},"XZ":{"H":[],"e":[],"f":[]},"abU":{"Z":["O0"]},"aiA":{"H":[],"e":[],"f":[]},"aD9":{"G":[],"e":[],"f":[]},"ao3":{"H":[],"e":[],"f":[]},"a82":{"ag":[],"ce":["ag"],"ah":[],"f":[],"bt":[]},"atx":{"ch":[],"bs":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{l:x("aw<f7>"),k:x("aw<t<rL>>"),u:x("aw<t<fJ>>"),o:x("aw<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("aw<a5<c,t<c>>>"),f:x("aP"),x:x("zw"),b:x("uQ"),d:x("rQ"),j:x("k0"),Z:x("nC"),v:x("en"),_:x("i6"),h:x("DN"),g:x("zR"),D:x("r<DD>"),r:x("r<i6>"),Q:x("r<lc>"),F:x("r<eq>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a8g>"),c:x("r<Mv>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fJ>"),t:x("t<f6>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a5<c,@>"),w:x("dC"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lT"),N:x("c"),B:x("aD4"),q:x("di"),i:x("T"),z:x("@"),S:x("v"),X:x("L?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afD=new A.aP(0,1/0,32,1/0)
D.auf=new A.a3(8,5,6,5)
D.chv=new A.F("Prazo",null,C.ac,null,null,null,null,null,null,null)
D.azH=new A.bJ(1,C.at,D.chv,null)
D.byY=x([],y.r)
D.azY=new B.zR(!1,D.byY)
D.aB0=new A.fK("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aB2=new A.fK("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBk=new A.fK("Sem pagamentos nesta vista.",8,null)
D.aET=new A.dG(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.aS,null,null,C.aS,C.aS,!0,null,null,null,null)
D.aFf=new A.dG(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.aS,null,null,C.aS,C.aS,!0,null,null,null,null)
D.aFt=new A.dG(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aHa=new A.dX("Pago",C.cV,null)
D.aHh=new A.dX("Por pagar",C.hH,null)
D.aHp=new A.lh("Or\xe7amento","Todos os teus eventos",null)
D.aHv=new A.lh("Or\xe7amento",null,null)
D.byc=x(["catering"],y.s)
D.bzg=x([],y.D)
D.bzh=x([],y.n)
D.bzH=x(["flowers_decor"],y.s)
D.bBc=x(["music_dj","bands_musicians"],y.s)
D.bBJ=x(["photography"],y.s)
D.bCX=x(["venue"],y.s)
D.aEI=new A.ve("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kI,null)
D.bKx=new A.S(C.h_,D.aEI,null)
D.c9S=new A.F("A despesa precisa de um t\xedtulo",null,C.l9,null,null,null,null,null,null,null)
D.bL7=new A.S(T.NQ,D.c9S,null)
D.bL9=new A.S(P.uV,C.f1,null)
D.bYd=new A.vV(!1,6,!0,null)
D.c45=new A.P(!0,C.x,null,null,null,null,14,C.d0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6e=new A.P(!0,null,null,null,null,null,null,C.d0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaE=new A.P(!0,C.x,null,null,null,null,40,C.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c85=new A.F("Indica um valor v\xe1lido",null,C.l9,null,null,null,null,null,null,null)
D.c8q=new A.F("Nova despesa",null,C.b3,null,null,null,null,null,null,null)
D.c8S=new A.F("\u20ac",null,D.aaE,null,null,null,null,null,null,null)
D.c9t=new A.F("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.cdW=new A.F("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.bJ,null,null,null,null,null,null,null)
D.Ji=new B.ace(0,"all")
D.abU=new B.ace(1,"paid")
D.abV=new B.ace(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYn","d1X",()=>C.bL.$1$1(new B.cHo(),y.m))
x($,"dZd","amB",()=>A.mZ(B.dKW(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["OdAyz0MxtV06lFbsACwReK0Smek="]=a.current})($__dart_deferred_initializers__);