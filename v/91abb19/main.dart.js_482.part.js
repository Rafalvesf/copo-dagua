((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,E,Q,R,F,G,S,H,K,T,U,V,I,W,B={cE1:function cE1(){},cDY:function cDY(){},cDZ:function cDZ(){},cE_:function cE_(){},cE0:function cE0(){},
dEM(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v)u.push(new B.Dw(x[v]))
return new B.b37(d.b,u)},
Dw:function Dw(d){this.a=d},
b37:function b37(d,e){this.a=d
this.b=e},
b38:function b38(){},
cVw(d){var x="category",w="due_date",v=J.a7(d),u=A.a2(v.h(d,"id")),t=A.a2(v.h(d,"wedding_id")),s=A.a2(v.h(d,"title")),r=B.dB4(B.da4(A.E(v.h(d,x)))),q=B.da4(A.E(v.h(d,x))),p=A.du(v.h(d,"amount")),o=v.h(d,w)==null?null:A.d9(A.a2(v.h(d,w)))
v=A.dW(v.h(d,"paid"))
return new H.i4(u,t,s,r,q,p,o,v===!0)},
da4(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dB4(d){var x
A:{if("venue"===d){x=E.y2
break A}if("catering"===d){x=E.xZ
break A}if("photography"===d){x=E.y_
break A}if("music_dj"===d||"bands_musicians"===d){x=E.y0
break A}if("flowers_decor"===d){x=E.y1
break A}x=null
break A}return x},
dmz(){return new B.DG()},
A1:function A1(d,e){this.a=d
this.b=e},
b4M:function b4M(){},
b4N:function b4N(){},
DG:function DG(){this.b=this.x=null},
b4J:function b4J(){},
b4K:function b4K(d,e){this.a=d
this.b=e},
b4L:function b4L(d){this.a=d},
Ct(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ct=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akt(),$async$Ct)
case 3:u=$.T()
t=u.b
t===$&&A.b()
x=4
return A.d(t.R("events").az(0,"partner_name_1, partner_name_2").X("id",d).dA(),$async$Ct)
case 4:s=f
x=5
return A.d(u.b.R("bookings").az(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").X("wedding_id",d).dl(0,"event_date",!1),$async$Ct)
case 5:r=f
u=A.a([],y.s)
for(t=J.aq(r);t.t();)u.push(A.a2(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.T().b
t===$&&A.b()
x=9
return A.d(t.R("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").eP("booking_id",u).tJ(0,"created_at"),$async$Ct)
case 9:q=f
case 7:u=$.T()
t=u.b
t===$&&A.b()
x=10
return A.d(t.R("expenses").az(0,"title, category, amount, due_date, paid").X("wedding_id",d).tJ(0,"due_date"),$async$Ct)
case 10:p=f
x=11
return A.d(u.b.R("budget_categories").az(0,"name, amount").X("wedding_id",d).tJ(0,"position"),$async$Ct)
case 11:o=f
x=12
return A.d(u.b.R("budgets").az(0,"total").X("wedding_id",d).dA(),$async$Ct)
case 12:n=f
m=F.cVi(F.cBg(s),"Gastos e parceiros",r,q,!1)
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
else{g=A.dN(A.q(g))
g=g==null?null:g.e8()}u.push(new B.Mg(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.aq(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.fp(A.q(k))
if(k==null)k=0}t.push(new B.a7t(i,k))}l=n==null?null:F.cVP(J.i(n,"total"))
v=new F.lL(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Ct,w)},
Mg:function Mg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7t:function a7t(d,e){this.a=d
this.b=e},
djS(){return new B.a0t(null)},
aTI(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aTI=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.fM(!0,new B.cAG(e,new A.aJ(new A.bK(u,C.aK,C.aC),$.ac())),d,y.i),$async$aTI)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTI,w)},
akn(d,e,f,g){return B.dAS(d,e,f,g)},
dAS(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akn=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aTI(d,"Teto para "+f,g),$async$akn)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CE().gaW(),y.x).OJ(f,r),$async$akn)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a4(I.Ia)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akn,w)},
d8b(d){var x=A.V(d,y._)
C.e.cP(x,new B.cAP())
return x},
d8F(d){var x=C.f.aY(C.j.k(A.aM(d)),2,"0"),w=C.f.aY(C.j.k(A.ay(d)),2,"0"),v=A.aE(d)===A.aE(new A.ad(Date.now(),0,!1))?"":"/"+A.aE(d)
return x+"/"+w+v},
cUF(d){var x,w,v,u
if(d===C.k.fD(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.b_(w,".",",")}v=x.split(",")
u=A.CA(v[0],A.aV("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bGC(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abs:function abs(d,e){this.a=d
this.b=e},
a0t:function a0t(d){this.a=d},
abt:function abt(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bJI:function bJI(d){this.a=d},
bJJ:function bJJ(d){this.a=d},
bK_:function bK_(d){this.a=d},
bJZ:function bJZ(){},
bJE:function bJE(){},
bJG:function bJG(){},
bJH:function bJH(){},
bJF:function bJF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJO:function bJO(){},
bJP:function bJP(d){this.a=d},
bJY:function bJY(d){this.a=d},
bJQ:function bJQ(){},
bJR:function bJR(){},
bJS:function bJS(d,e){this.a=d
this.b=e},
bJT:function bJT(d){this.a=d},
bJN:function bJN(d){this.a=d},
bJU:function bJU(d){this.a=d},
bJM:function bJM(d){this.a=d},
bJV:function bJV(d){this.a=d},
bJL:function bJL(d){this.a=d},
bJW:function bJW(d){this.a=d},
bJK:function bJK(d){this.a=d},
bJX:function bJX(d){this.a=d},
cAG:function cAG(d,e){this.a=d
this.b=e},
cAE:function cAE(d){this.a=d},
cAF:function cAF(d,e){this.a=d
this.b=e},
cAP:function cAP(){},
aPj:function aPj(d,e,f){this.c=d
this.d=e
this.a=f},
aDe:function aDe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDf:function aDf(d,e){this.e=d
this.a=e},
bM7:function bM7(){},
bM9:function bM9(d,e){this.a=d
this.b=e},
bMa:function bMa(d){this.a=d},
bM8:function bM8(d,e,f){this.a=d
this.b=e
this.c=f},
aCN:function aCN(d,e){this.c=d
this.a=e},
bJ4:function bJ4(d){this.a=d},
bJ3:function bJ3(d){this.a=d},
aFX:function aFX(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bVx:function bVx(d,e){this.a=d
this.b=e},
bVt:function bVt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVu:function bVu(d){this.a=d},
bVv:function bVv(d,e){this.a=d
this.b=e},
bVw:function bVw(d,e){this.a=d
this.b=e},
Xi:function Xi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBS:function aBS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NG:function NG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ab8:function ab8(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bGQ:function bGQ(d){this.a=d},
bGP:function bGP(){},
bGR:function bGR(d){this.a=d},
bGO:function bGO(){},
bGC:function bGC(){},
bGD:function bGD(d){this.a=d},
bGN:function bGN(){},
bGI:function bGI(d){this.a=d},
bGJ:function bGJ(d){this.a=d},
bGH:function bGH(d,e){this.a=d
this.b=e},
bGK:function bGK(d){this.a=d},
bGG:function bGG(d){this.a=d},
bGL:function bGL(d){this.a=d},
bGF:function bGF(d){this.a=d},
bGM:function bGM(d,e){this.a=d
this.b=e},
bGE:function bGE(d,e){this.a=d
this.b=e},
WV:function WV(d,e){this.e=d
this.a=e},
bMb:function bMb(d){this.a=d},
bMc:function bMc(d){this.a=d},
bMd:function bMd(){},
bMe:function bMe(){},
bMf:function bMf(d){this.a=d},
bMg:function bMg(d,e,f){this.a=d
this.b=e
this.c=f},
bMh:function bMh(d,e){this.a=d
this.b=e},
ahF:function ahF(d,e,f){this.c=d
this.d=e
this.a=f},
aBX:function aBX(d,e,f){this.e=d
this.f=e
this.a=f},
bHN:function bHN(){},
bHT:function bHT(d){this.a=d},
bHQ:function bHQ(){},
bHP:function bHP(d){this.a=d},
bHG:function bHG(d){this.a=d},
bHO:function bHO(d,e,f){this.a=d
this.b=e
this.c=f},
bHR:function bHR(d){this.a=d},
bHE:function bHE(d){this.a=d},
bHF:function bHF(){},
bHS:function bHS(d,e){this.a=d
this.b=e},
bHL:function bHL(d){this.a=d},
bHM:function bHM(d){this.a=d},
bHH:function bHH(){},
bHI:function bHI(d){this.a=d},
bHJ:function bHJ(d){this.a=d},
bHK:function bHK(d,e){this.a=d
this.b=e},
ana:function ana(d,e){this.c=d
this.a=e},
aYf:function aYf(d){this.a=d},
dd3(d){var x
switch(d){case E.y2:x=D.bDV
break
case E.xZ:x=D.bz7
break
case E.y_:x=D.bCH
break
case E.y0:x=D.bC8
break
case E.y1:x=D.bAD
break
default:x=C.a9
break}return x}},D,L,X
J=c[1]
A=c[0]
C=c[2]
M=c[201]
N=c[185]
O=c[215]
P=c[217]
E=c[218]
Q=c[159]
R=c[214]
F=c[131]
G=c[78]
S=c[158]
H=c[76]
K=c[213]
T=c[195]
U=c[216]
V=c[129]
I=c[212]
W=c[79]
B=a.updateHolder(c[53],B)
D=c[211]
L=c[72]
X=c[77]
B.Dw.prototype={
gaq(d){return this.a.a}}
B.b37.prototype={
gpX(){return C.e.d2(this.b,0,new B.b38())},
gaBQ(){var x=this.a
return x===0?0:C.k.ae(this.gpX()/x,0,1)}}
B.A1.prototype={
gbzU(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.V(new A.a6(x,new B.b4M(),w),w.i("z.E"))
return x},
gbAf(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.V(new A.a6(x,new B.b4N(),w),w.i("z.E"))
return x},
awV(d,e){var x=e==null?this.a:e
return new B.A1(x,d==null?this.b:d)},
io(d){return this.awV(null,d)},
awC(d){return this.awV(d,null)}}
B.DG.prototype={
d5(){var x=y.T,w=this.x=A.eP(this).H(A.cv($.ck(),new B.b4J(),y.v,x),x)
if(w!=null)A.jg(new B.b4K(this,w),y.H)
return D.aAJ},
c_(d,e){return this.bxl(0,e)},
bxl(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa3(0,v.ga3(0).io(!0))
u=$.T().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.R("expenses").cj(0).X("wedding_id",e).dl(0,"created_at",!0),$async$c_)
case 2:v.sa3(0,new t.A1(s,r.d4(g,B.dFD(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$c_,w)},
Vk(d){return this.bna(d)},
bna(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vk=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.T().b
r===$&&A.b()
r=r.R("expenses")
u=A.C(y.N,y.X)
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
return A.d(r.de(0,u).cj(0).dP(0),$async$Vk)
case 2:s=f
r=v.ga3(0)
u=A.V(v.ga3(0).b,y._)
u.push(B.cVw(s))
v.sa3(0,r.awC(u))
return A.l(null,w)}})
return A.m($async$Vk,w)},
OG(d){return this.bCO(d)},
bCO(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OG=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.ll(v.ga3(0).b,new B.b4L(d))
m=$.T().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.R("expenses").bh(0,A.S(["paid",!n.w,"updated_at",new A.ad(Date.now(),0,!1).ci()],u,u)).X("id",d).cj(0).dP(0),$async$OG)
case 2:t=l.cVw(f)
u=v.ga3(0)
m=A.a([],y.r)
for(s=v.ga3(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.I)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa3(0,u.awC(m))
return A.l(null,w)}})
return A.m($async$OG,w)}}
B.Mg.prototype={}
B.a7t.prototype={
gaq(d){return this.a}}
B.abs.prototype={
I(){return"_BudgetFilter."+this.b}}
B.a0t.prototype={
P(){return new B.abt(D.Jr)}}
B.abt.prototype={
TA(d){return this.bcZ(d)},
bcZ(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TA=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.q(new B.bJI(u))
x=1
break}u.q(new B.bJJ(u))
t=u.gS()
s=$.ck()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gaW(),y.Z).az(0,d),$async$TA)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$TA,w)},
ak(){this.aD()
A.jg(new B.bK_(this),y.H)},
Qk(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Qk=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.alO()
m=y.h
l=o.a0(0,n.gaW(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CE(),y.b).b
s=t==null?null:t.b
r=C.e.d2(o.a0(0,n,y.g).b,0,new B.bJE())
t=o.a0(0,$.ck(),y.v).b
q=t==null?null:t.gco()
t=u.c
t.toString
x=3
return A.d(A.co(null,new B.bJF(q,s,new B.bJG(),r),!1,t,!0,!0,null,y.B),$async$Qk)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gaW(),m)
n=p.a
m=p.b
t=p.c
o.Vk(new H.i4("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Qk,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.H($.CE(),y.b),a3=a1.H($.HR(),y.d),a4=a1.H($.alO(),y.g),a5=a2.b,a6=a5==null?e:B.dEM(a5,a3.b)
a5=A.iX(a1.H($.jx(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iO
a5=y.T
w=a1.H(A.cv($.ck(),new B.bJO(),y.v,a5),a5)
if(f.y){a1=f.gapp()
return A.cO(e,C.cS,A.on(C.fb,40,A.a([C.fV,D.aI2,L.cS3(a1,e),new B.aBX(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.dc(x,new B.bJP(w))
a1=a1.H($.ux(),y.l)
u=a1.gv(a1)
t=new B.bJY(u==null?C.f8:u)
a1=y._
a5=A.V(a4.gbzU(),a1)
for(s=v.a,r=J.c5(s),q=r.gV(s),p=v.b,o=v.$ti.i("h5<1>"),n=new A.h5(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i4("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.V(a4.gbAf(0),a1)
for(s=r.gV(s),o=new A.h5(s,p,o),p=y.r;o.t();){r=s.gE(s)
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
n.push(new H.i4("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.V(B.d8b(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.d8b(q)
break
default:a1=e}h=C.e.d2(q,0,new B.bJQ())
s=a6==null
if(s)g=D.bA8
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.V(new A.a6(r,new B.bJR(),p),p.i("z.E"))}if(s)a1=D.bZ_
else{s=f.gaRv()
r=y.p
p=A.a([new A.po(A.a([new A.qN(s,"Nova despesa",e)],r),e),D.aI8,L.cS3(f.gapp(),w),new B.aPj(a6,new B.bJS(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aQ(a6.gpX(),!1)
n=a5.length
m=n===1?d:a0
l=A.aQ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.dP("N\xfameros",e,A.a([new G.Sg(A.a([new G.xl("Gasto",o,""+n+" "+m),new G.xl("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.m4(A.a([new A.ei("Todos",l===D.Jr,n+m,new B.bJT(f),e),new A.ei("Pendentes",l===D.acn,m,new B.bJU(f),e),new A.ei("Pagos",l===D.acm,n,new B.bJV(f),e)],y.F),4,!0,e),C.as],r))}o.push(new B.aFX(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.dP("Pagamentos",e,o,16,e))
a1=A.a([new A.kL(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDe(g,f.x,new B.bJW(f),e))
p.push(new A.dP("Categorias",e,a1,16,e))
p.push(new A.dP("Exportar",e,A.a([new F.DH("Gastos e parceiros",!1,new B.bJX(f),e)],r),16,e))
a1=A.on(C.fb,40,p,e,!0,!1)}return A.cO(e,C.cS,a1,!0,e)},
IC(d){return this.aYq(d)},
aYq(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IC=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aTI(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IC)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a0(0,$.CE().gaW(),y.x).a_d(r),$async$IC)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a4(I.Ia)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$IC,w)}}
B.aPj.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpX()>0?"Gastos "+A.aQ(t.gpX(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vd(new A.im("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hD,0,"por definir","\u2014")}x=C.k.aK(t.gaBQ()*100)
w=s-t.gpX()<0?"Acima do teto":"Ainda tens"
v=A.aQ(Math.abs(s-t.gpX()),!1)
s=A.aQ(s,!1)
u=t.gaBQ()
return A.aU(A.vd(I.a2g,"Gastos "+A.aQ(t.gpX(),!1)+" \xb7 "+x+"% do teto",w,C.hD,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDe.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.e3(s,0,A.eT(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.I)(r),++w)p.push(new B.aDf(r[w],null))
q=A.a([A.fa(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.im(u,v.e,!0,null))}return A.B(q,C.I,C.i,C.m,0,C.v)}}
B.aDf.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(A.cv($.ck(),new B.bM7(),y.v,m),m)
if(l==null)x=C.rq
else{m=e.H($.cYs().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rq:m}m=A.a([],y.s)
for(w=B.dd3(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bM9(this,d)
if(w)return A.jT(!1,!1,p,v,A.aQ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.oh("P\xf4r teto",new B.bM8(this,d,e),!0,p))
w=A.aQ(o.b,!1)
u=A.aQ(n,!1)
s=y.p
q=A.a([A.aI(new A.T9(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aE,new B.ana(m,p)],s))
return A.jT(!1,!1,p,v,w+" de "+u,o.a,A.B(q,C.dg,C.i,C.K,0,C.v))}}
B.aCN.prototype={
u(d){var x,w,v=null,u=$.ar,t=$.fi.cc(0.55),s=A.Y(18),r=A.Y(12),q=this.c,p=q.e
r=A.fX(r,A.aI(p==null?A.ki(A.b2(C.hx,u,v,v,v),C.t,!0):A.tg(p,144,new B.bJ3(u),!1,C.bS,A.wu(),!1,v,v,v),48,48),C.b8)
p=A.h(q.b,1,C.a2,v,v,D.c4K,v,v,v)
x=A.b2(C.iH,u,v,v,14)
w=q.d
q=w>0?q.gPU()+" \xb7 "+A.aQ(w,!1):q.gPU()
w=y.p
return new A.Q(C.cq,A.aU(A.A(v,A.P(A.a([r,C.ah,A.a5(A.B(A.a([p,C.fC,A.P(A.a([x,C.eh,new A.dx(1,C.be,A.h(q,1,C.a2,v,v,A.aF(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bk,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.w,C.i,C.m,0,v,v)],w),C.G,C.i,C.m,0,C.v),1),A.b2(C.i3,u,v,v,v)],w),C.w,C.i,C.m,0,v,v),C.r,v,v,new A.M(t,v,v,s,v,v,C.y),v,v,v,C.dR,v,v,v),new B.bJ4(d),v),v)}}
B.aFX.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.Sf(A.a([new A.im("+ Nova despesa",this.f,!0,j)],y.p),C.fm,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBS
x=new B.bVx(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.I)(i),++t){s=i[t]
r=s.a
q=C.f.dj(r,":pay:")
r=C.f.b4(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gM(r.split(" \xb7 "))
n=A.aQ(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.d8F(m)
v.push(new V.DT(new A.cw(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bVt(d,e,s,q),A.HL(m)===C.hj,j))
continue}p=r?new B.bVu(d):new B.bVv(x,s)
v.push(new B.Xi(s,p,r||s.w?j:new B.bVw(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xi&&v[k-1] instanceof B.Xi)u.push(C.iC)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBH)
return A.B(i,C.I,C.i,C.m,0,C.v)}}
B.Xi.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aQ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.d8F(w))
v=C.e.a2(v," \xb7 ")
if(u)u=D.aHP
else{u=this.e
u=u!=null?new A.oh("Marcar pago",u,!0,null):D.aHW}return A.jT(!1,!1,null,this.d,v,x.c,u)}}
B.aBS.prototype={}
B.NG.prototype={
P(){var x=$.ac()
return new B.ab8(new A.aJ(C.ap,x),new A.aJ(C.ap,x))}}
B.ab8.prototype={
ak(){var x=this
x.aD()
x.d.am(0,new B.bGQ(x))
x.e.am(0,new B.bGR(x))},
m(){var x=this.d,w=$.ac()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
gahH(){var x=C.f.D(this.e.a.a)
x=A.b_(x," ","")
return A.fp(A.b_(x,",","."))},
aSH(){var x,w,v,u,t=this,s=t.gahH()
t.q(new B.bGD(t))
x=C.f.D(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.ap(w,!1)
v=t.w
u=v?null:t.f
w.aj(new B.aBS(x,s,u,t.r,v))},
as9(d,e,f,g,h){var x=null,w=h?C.mM:x,v=y.p,u=A.a5(A.B(A.a([A.h(d,x,x,x,x,C.aj,x,x,x),C.bc,A.h(e,x,x,x,x,C.T,x,x,x)],v),C.G,C.i,C.m,0,C.v),1),t=f?C.bw:x,s=f?x:A.bA(C.na,1.5),r=f?T.vB:x
return A.ba(x,!0,x,A.de(C.bU,A.A(x,A.P(A.a([u,A.A(x,r,C.r,x,x,new A.M(t,x,s,x,x,x,C.ax),x,24,x,x,x,x,24)],v),C.w,C.i,C.m,0,x,x),C.r,x,C.dD,new A.M(x,x,w,x,x,x,C.y),x,x,x,C.hZ,x,x,x),C.a0,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.b_),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bjk(d,e,f,g){return this.as9(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahH()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.D(x.a.a).length!==0&&j>0
w=new B.bGN()
t=y.w
s=A.aw(d,k,t).w
r=y.p
q=A.a([D.cdf],r)
q.push(A.h(l.a.c,k,k,k,k,C.T,k,k,k))
q=A.P(A.a([A.a5(A.B(q,C.G,C.i,C.m,0,C.v),1),A.ba(k,!0,k,A.de(k,A.A(k,C.vD,C.r,k,k,C.cu,k,44,k,k,k,k,44),C.a0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bGI(d),k,k,k,k,k,k,!1,C.b_),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.w,C.i,C.m,0,k,k)
p=A.Y(22)
o=A.a([D.chy,A.P(A.a([X.d1Q(A.cJ(k,C.a9,!1,k,!0,C.z,k,A.cL(),l.e,k,k,k,k,k,2,D.aFO,C.a0,!0,k,!0,k,!1,k,C.aH,k,k,k,k,C.ig,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.au,k,k,k,k,k,k,k,k,k,k,k,D.aaQ,!0,C.dA,k,C.b6,k,k,k,k)),C.bl,D.cdh],r),C.f5,C.bV,C.m,0,C.aM,k)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cUF(v)+" no teto":"Passa o teto em "+B.cUF(-v)
o.push(A.h(m,k,k,k,k,A.aF(k,k,n?C.S:C.c0,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.cfn)
p=A.A(k,A.B(o,C.w,C.i,C.m,0,C.v),C.r,k,k,new A.M(C.ac,k,k,p,k,k,C.y),k,k,k,C.bj,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.bh,k,k,k)
n=A.Y(26)
m=l.x&&C.f.D(x.a.a).length===0?A.bA(C.c0,1.5):k
n=A.a([p,C.a3,new A.Q(C.cq,o,k),A.A(C.bi,A.cJ(k,C.a9,!1,k,!0,C.z,k,A.cL(),x,k,k,k,k,k,2,D.aFt,C.a0,!0,k,!0,k,!1,k,C.aH,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.au,k,k,k,k,k,k,k,k,k,k,k,C.fD,!0,C.at,k,C.h6,k,k,k,k),C.r,k,k,new A.M(C.ac,k,m,n,k,k,C.y),k,52,k,C.iD,k,k,k)],r)
if(l.x&&C.f.D(x.a.a).length===0)n.push(D.bLt)
n.push(C.a3)
n.push(new W.a13(l.r,new B.bGJ(l),k))
n.push(C.a3)
n.push(new A.Q(C.cq,A.h("ESTADO",k,k,k,k,C.bh,k,k,k),k))
x=A.Y(22)
p=l.w
o=!p
o=A.a([l.bjk("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bGK(l)),l.as9("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bGL(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.aM(p)))
m=l.f
m.toString
m=A.q(w.$1(A.ay(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aE(w)}o.push(A.ba(k,!0,k,A.de(C.bU,A.aI(A.P(A.a([D.aAC,A.h(w,k,k,k,k,C.cd,k,k,k),C.eh,C.kB],r),C.w,C.i,C.m,0,k,k),56,k),C.a0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bGM(l,d),k,k,k,k,k,k,!1,C.b_),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.A(k,A.B(o,C.w,C.i,C.m,0,C.v),C.r,k,k,new A.M(C.ac,k,k,x,k,k,C.y),k,k,k,C.dS,k,k,k))
n.push(C.a3)
n.push(D.ccU)
x=A.dV(A.B(n,C.I,C.i,C.m,0,C.v),C.z,k,C.eO,k,k,C.a1)
t=A.aw(d,C.b0,t).w
w=A.cs(u?C.A:C.A.cc(0.35),k,k,C.t,k,k,C.ad,k,k,C.eE)
return new A.Q(new A.a0(0,0,0,s.f.d),A.B(A.a([new A.Q(C.qr,q,k),new A.dx(1,C.be,x,k),new A.Q(new A.a0(20,16,20,20+t.r.d),A.aI(A.bE(A.h(u?"Guardar \xb7 "+B.cUF(j):"Guardar",k,k,k,k,k,k,k,k),l.gaSG(),w),52,k),k)],r),C.I,C.i,C.K,0,C.v),k)}}
B.WV.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.CE(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eV(new A.a6(j,new B.bMb(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.H($.alO(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.V(new A.a6(j,new B.bMc(l),w),w.i("z.E"))
C.e.cP(v,new B.bMd())
j=y.T
u=e.H(A.cv($.ck(),new B.bMe(),y.v,j),j)
t=B.dd3(l.e.c)
if(u==null)s=K.FE
else{j=e.H($.aVv().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.FE
j=J.dc(j,new B.bMf(t))
s=A.V(j,j.$ti.i("z.E"))}j=A.aw(d,k,y.w).w
w=A.bO(A.A(k,k,C.r,k,k,new A.M(C.bA,k,k,A.Y(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.as(d).ok.r,k,k,k)
q=A.a5(new B.ahF("Gasto",A.aQ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a3,r,C.aB,A.P(A.a([q,C.am,A.a5(A.aU(new B.ahF("Teto \xb7 tocar para mudar",p===0?"Definir":A.aQ(p,!1),k),new B.bMg(d,e,x),k),1)],o),C.w,C.i,C.m,0,k,k)],o)
if(s.length!==0){w=A.a([C.bg,A.h("Contratado na app",k,k,k,k,A.as(d).ok.w,k,k,k),C.X],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.I)(s),++n)w.push(new B.aCN(s[n],k))
C.e.n(p,w)}p.push(C.bg)
p.push(A.h("Despesas",k,k,k,k,A.as(d).ok.w,k,k,k))
p.push(C.X)
w=v.length
if(w===0)p.push(D.bLP)
else for(n=0;n<v.length;v.length===w||(0,A.I)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.h8,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aY(C.j.k(A.aM(q)),2,"0")+"/"+C.f.aY(C.j.k(A.ay(q)),2,"0")+"/"+A.aE(q),k,k,k,k,k,k,k,k)
p.push(A.jj(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.P(A.a([A.h(A.aQ(m.f,!1),k,k,k,k,D.c6V,k,k,k),C.ai,new Q.Db(m.w,new B.bMh(e,m),k,$.ar,k,k,!1,k,k,k,k,!1,k,k,!1,k,R.Jt,k)],o),C.w,C.i,C.K,0,k,k),k))}return A.bF(!0,new A.ew(new A.aP(0,1/0,0,j.a.b*0.8),A.cX(p,k,M.D9,k,k,!1,C.a1,!0),k),k,C.a_,!0)}}
B.ahF.prototype={
u(d){var x=null,w=A.Y(16)
return A.A(x,A.B(A.a([A.h(this.c,x,x,x,x,C.ba,x,x,x),C.as,A.h(this.d,x,x,x,x,O.aaD,x,x,x)],y.p),C.G,C.i,C.m,0,C.v),C.r,x,x,new A.M(C.ac,x,x,w,x,x,C.y),x,x,x,C.cv,x,x,x)}}
B.aBX.prototype={
bc(d,e){var x,w=y.t,v=e.H(A.cv($.ck(),new B.bHN(),y.v,w),w),u=e.H($.cYr(),y.o)
w=e.H($.ux(),y.l)
x=w.gv(w)
return A.hn(u,new B.bHO(this,new B.bHT(x==null?C.f8:x),v),new B.bHP(e),new B.bHQ(),!1,!0,!1)}}
B.ana.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.ar,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v]
t=$.fi
s=new A.b5(999,999)
r=new A.bc(o.cc(0.25),1,C.ag,-1)
q=A.b2(C.iH,o,p,p,13)
t=A.A(p,A.P(A.a([q,C.t7,new A.dx(1,C.be,A.h(u,1,C.a2,p,p,new A.N(!0,o,p,p,p,p,14,C.cV,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b2(C.i3,o,p,p,16)],n),C.w,C.i,C.K,0,p,p),C.r,p,D.agh,new A.M(t,p,new A.dR(r,r,r,r),new A.ch(s,s,s,s),p,p,C.y),p,p,p,D.av2,p,p,p)
m.push(new A.jY(new A.oG(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hv(t,new B.aYf(d),p,p),p))}return A.ea(C.bd,m,C.r,C.bm,6,6)}}
var z=a.updateTypes(["y(i4)","R(R,i4)","v(i4,i4)","R(R,Dw)","A1()","F<~>(c?)","F<~>()","NG(O)","y(Dw)","F<lL>()","WV(O)","~(i4)","~()","y(nn)","y(rO)","i4(a4<c,@>)","DG()"])
B.cE1.prototype={
$1(d){return this.aF7(d)},
aF7(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(A.cv($.ck(),new B.cDY(),y.v,f),f)
f=J.a7(e)
if(f.gY(e)){v=D.bA9
x=1
break}u=A.a([],y.s)
for(t=f.gV(e);t.t();)u.push(t.gE(t).a)
t=$.T()
s=t.b
s===$&&A.b()
r=y.G
q=s.R("budgets").az(0,"wedding_id, total").eP("wedding_id",u).b7(new B.cDZ(),r)
p=t.b.R("budget_categories").az(0,"wedding_id, amount").eP("wedding_id",u).b7(new B.cE_(),r)
o=t.b.R("expenses").az(0,"wedding_id, amount, paid").eP("wedding_id",u).b7(new B.cE0(),r)
r=y.N
u=y.i
t=A.C(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bl(a3,s),m=A.u(n),n=new A.ak(n,n.gA(n),m.i("ak<U.E>")),m=m.i("U.E")
case 4:if(!n.t()){x=5
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
t.j(0,A.a2(k.h(l,"wedding_id")),A.du(k.h(l,"total")))
x=4
break
case 5:j=A.C(r,u)
d=J
x=6
return A.d(p,$async$$1)
case 6:n=d.bl(a3,s),m=A.u(n),n=new A.ak(n,n.gA(n),m.i("ak<U.E>")),m=m.i("U.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.a2(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=A.aK(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=A.C(r,u)
d=J
x=9
return A.d(o,$async$$1)
case 9:u=d.bl(a3,s),s=A.u(u),u=new A.ak(u,u.gA(u),s.i("ak<U.E>")),s=s.i("U.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.a2(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=A.aK(n.h(r,"amount"))
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
u.push(new A.aMA([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1303}
B.cDY.prototype={
$1(d){return d.c},
$S:140}
B.cDZ.prototype={
$1(d){return d},
$S:29}
B.cE_.prototype={
$1(d){return d},
$S:29}
B.cE0.prototype={
$1(d){return d},
$S:29}
B.b38.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b4M.prototype={
$1(d){return d.w},
$S:z+0}
B.b4N.prototype={
$1(d){return!d.w},
$S:z+0}
B.b4J.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:34}
B.b4K.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.b4L.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bJI.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bJJ.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bK_.prototype={
$0(){return this.a.gS().a0(0,$.CE().gaW(),y.x).Zu(0).es(new B.bJZ())},
$S:1}
B.bJZ.prototype={
$1(d){},
$S:13}
B.bJE.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bJG.prototype={
$1(d){return A.CA(C.k.a8(d,0),A.aV("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bJH(),null)+" \u20ac"},
$S:113}
B.bJH.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bJF.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a2(v," \xb7 ")
u=x&&u>0?u:null
return new B.NG(v,u,w.d,null)},
$S:z+7}
B.bJO.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:34}
B.bJP.prototype={
$1(d){return d.x!==C.f3&&d.b===this.a},
$S:79}
B.bJY.prototype={
$2(d,e){return A.ja(d,this.a.lh(e))},
$1(d){return this.$2(d,null)},
$S:1306}
B.bJQ.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bJR.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bJS.prototype={
$0(){return this.a.IC(this.b.a)},
$S:0}
B.bJT.prototype={
$0(){var x=this.a
return x.q(new B.bJN(x))},
$S:0}
B.bJN.prototype={
$0(){return this.a.w=D.Jr},
$S:0}
B.bJU.prototype={
$0(){var x=this.a
return x.q(new B.bJM(x))},
$S:0}
B.bJM.prototype={
$0(){return this.a.w=D.acn},
$S:0}
B.bJV.prototype={
$0(){var x=this.a
return x.q(new B.bJL(x))},
$S:0}
B.bJL.prototype={
$0(){return this.a.w=D.acm},
$S:0}
B.bJW.prototype={
$0(){var x=this.a
return x.q(new B.bJK(x))},
$S:0}
B.bJK.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bJX.prototype={
$0(){return B.Ct(this.a.gS().a0(0,$.ck(),y.v).b.a)},
$S:z+9}
B.cAG.prototype={
$1(d){var x=null,w=this.b
return new A.eK(A.h(this.a,x,x,x,x,x,x,x,x),A.cJ(x,C.a9,!0,x,!0,C.z,x,A.cL(),w,x,x,x,x,x,2,D.aG0,C.a0,!0,x,!0,x,!1,x,C.aH,x,x,x,x,C.ig,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.au,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.at,x,C.b6,x,x,x,x),A.a([A.cp(C.cO,x,x,new B.cAE(d),x,x),A.bE(C.du,new B.cAF(d,w),x)],y.p),x)},
$S:16}
B.cAE.prototype={
$0(){return A.ap(this.a,!1).bF()},
$S:0}
B.cAF.prototype={
$0(){var x=A.ap(this.a,!1),w=C.f.D(this.b.a.a)
w=A.b_(w," ","")
return x.aj(A.fp(A.b_(w,",",".")))},
$S:0}
B.cAP.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bD(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bD(2100,1,1,0,0):x)},
$S:z+2}
B.bM7.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:34}
B.bM9.prototype={
$0(){return A.co(null,new B.bMa(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bMa.prototype={
$1(d){return new B.WV(this.a.e.a,null)},
$S:z+10}
B.bM8.prototype={
$0(){return B.akn(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bJ4.prototype={
$0(){var x=this.a
A.ap(x,!1).bF()
A.ai(x).ar("/bookings",null,y.X)},
$S:0}
B.bJ3.prototype={
$3(d,e,f){return A.ki(A.b2(C.hx,this.a,null,null,null),C.t,!0)},
$S:133}
B.bVx.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.alO().gaW(),y.h).OG(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a4(A.cB(v,v,v,v,v,C.z,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.Y,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bVt.prototype={
$0(){var x=this
return A.rC(x.a,x.b,C.f.bD(x.c.a,x.d+5),null,null)},
$S:0}
B.bVu.prototype={
$0(){return A.ai(this.a).ar("/bookings",null,y.X)},
$S:0}
B.bVv.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bVw.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bGQ.prototype={
$0(){return this.a.q(new B.bGP())},
$S:0}
B.bGP.prototype={
$0(){},
$S:0}
B.bGR.prototype={
$0(){return this.a.q(new B.bGO())},
$S:0}
B.bGO.prototype={
$0(){},
$S:0}
B.bGC.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:42}
B.bGD.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bGN.prototype={
$1(d){return C.f.aY(C.j.k(d),2,"0")},
$S:39}
B.bGI.prototype={
$0(){return A.ap(this.a,!1).bF()},
$S:0}
B.bGJ.prototype={
$1(d){var x=this.a
return x.q(new B.bGH(x,d))},
$S:102}
B.bGH.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bGK.prototype={
$0(){var x=this.a
return x.q(new B.bGG(x))},
$S:0}
B.bGG.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bGL.prototype={
$0(){var x=this.a
return x.q(new B.bGF(x))},
$S:0}
B.bGF.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bGM.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ad(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(S.alf(v.b,A.bD(A.aE(t)-1,1,1,0,0),r,A.bD(A.aE(t)+5,1,1,0,0)),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.q(new B.bGE(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bGE.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bMb.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bMc.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bMd.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bD(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bD(2100,1,1,0,0):x)},
$S:z+2}
B.bMe.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:34}
B.bMf.prototype={
$1(d){return C.e.p(this.a,d.a)},
$S:z+14}
B.bMg.prototype={
$0(){var x=this.c
return B.akn(this.a,this.b,x.a,x.d)},
$S:0}
B.bMh.prototype={
$1(d){return this.a.a0(0,$.alO().gaW(),y.h).OG(this.b.a)},
$S:145}
B.bHN.prototype={
$1(d){return d.c},
$S:140}
B.bHT.prototype={
$2(d,e){return A.ja(d,this.a.lh(e))},
$S:41}
B.bHQ.prototype={
$0(){return D.bMt},
$S:91}
B.bHP.prototype={
$2(d,e){return A.Sf(A.a([new A.im("Tentar outra vez",new B.bHG(this.a),!1,null)],y.p),C.fm,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1307}
B.bHG.prototype={
$0(){return this.a.ai($.cYr())},
$S:0}
B.bHO.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bHR(g),e=new B.bHS(g,this.b),d=J.c5(a4),a0=d.d2(a4,0,new B.bHH()),a1=d.d2(a4,0,new B.bHI(f)),a2=d.d2(a4,0,new B.bHJ(e)),a3=y.N
a3=A.C(a3,a3)
for(x=J.aq(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C_(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bD(s,1))}x=A.aQ(a1,!1)
w=a0>0
v=w?"de "+A.aQ(a0,!1):"gastos"
u=w?C.k.ae(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aK(a1/a0*100)+"% dos tetos":""
x=A.vd(i,""+t+" "+r+w,"Todos os eventos",C.hD,u,v,x)
v=y.p
u=A.a([new G.Sg(A.a([new G.xl("Gasto",A.aQ(a1,!1),h),new G.xl("Por pagar",A.aQ(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eA(a4,0,y.A),r=J.aq(t.a),q=t.b,t=new A.c0(r,q,A.u(t).i("c0<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.a3(q+n,r.gE(r)):A.aj(A.c2())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iC)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a2,i,i,C.aj,i,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aQ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aQ(j[3]+e.$1(j[0]),!1))}n=A.B(A.a([n,C.bc,A.h(C.e.a2(k," \xb7 "),i,i,i,i,C.T,i,i,i)],v),C.G,C.i,C.m,0,C.v)
k=o.a.a
l.push(new A.hv(A.A(i,A.P(A.a([new A.bR(1,C.aw,n,i),C.am,A.h(A.aQ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.aj,i,i,i),C.bl,C.kB],v),C.w,C.i,C.m,0,i,i),C.r,C.ao,C.dD,i,i,i,i,C.cl,i,i,i),new B.bHK(o,g),i,i))
C.e.n(w,l)}return A.B(A.a([x,new A.dP("N\xfameros",i,u,16,i),new A.dP("Por evento \xb7 "+d,i,w,16,i),D.aBJ],v),C.I,C.i,C.m,0,C.v)},
$S:1308}
B.bHR.prototype={
$1(d){return J.dc(this.a.e,new B.bHE(d)).d2(0,0,new B.bHF())},
$S:185}
B.bHE.prototype={
$1(d){return d.b===this.a&&d.x!==C.f3},
$S:79}
B.bHF.prototype={
$2(d,e){return d+e.w},
$S:383}
B.bHS.prototype={
$1(d){return J.dc(this.a.e,new B.bHL(d)).d2(0,0,new B.bHM(this.b))},
$S:185}
B.bHL.prototype={
$1(d){return d.b===this.a&&d.x!==C.f3},
$S:79}
B.bHM.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:383}
B.bHH.prototype={
$2(d,e){return d+e.a[2]},
$S:236}
B.bHI.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:236}
B.bHJ.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:236}
B.bHK.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYf.prototype={
$0(){return A.ai(this.a).ar("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dFD","cVw",15)
w(B,"dFC","dmz",16)
v(B.DG.prototype,"giL","d5",4)
var t
u(t=B.abt.prototype,"gapp","TA",5)
v(t,"gaRv","Qk",6)
v(B.ab8.prototype,"gaSG","aSH",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[B.cE1,B.cDY,B.cDZ,B.cE_,B.cE0,B.b4M,B.b4N,B.b4J,B.b4L,B.bJZ,B.bJG,B.bJH,B.bJF,B.bJO,B.bJP,B.bJY,B.bJR,B.cAG,B.bM7,B.bMa,B.bJ3,B.bVx,B.bGC,B.bGN,B.bGJ,B.bMb,B.bMc,B.bMe,B.bMf,B.bMh,B.bHN,B.bHO,B.bHR,B.bHE,B.bHS,B.bHL])
x(A.J,[B.Dw,B.b37,B.A1,B.Mg,B.a7t,B.aBS])
x(A.cQ,[B.b38,B.bJE,B.bJQ,B.cAP,B.bMd,B.bHT,B.bHP,B.bHF,B.bHM,B.bHH,B.bHI,B.bHJ])
w(B.DG,A.fb)
x(A.bT,[B.b4K,B.bJI,B.bJJ,B.bK_,B.bJS,B.bJT,B.bJN,B.bJU,B.bJM,B.bJV,B.bJL,B.bJW,B.bJK,B.bJX,B.cAE,B.cAF,B.bM9,B.bM8,B.bJ4,B.bVt,B.bVu,B.bVv,B.bVw,B.bGQ,B.bGP,B.bGR,B.bGO,B.bGD,B.bGI,B.bGH,B.bGK,B.bGG,B.bGL,B.bGF,B.bGM,B.bGE,B.bMg,B.bHQ,B.bHG,B.bHK,B.aYf])
w(B.abs,A.fg)
w(B.a0t,A.dB)
w(B.abt,A.dw)
x(A.L,[B.aPj,B.aDe,B.aCN,B.Xi,B.ahF,B.ana])
x(A.eo,[B.aDf,B.aFX,B.WV,B.aBX])
w(B.NG,A.H)
w(B.ab8,A.a_)})()
A.bq(b.typeUniverse,JSON.parse('{"DG":{"fb":["A1"]},"a0t":{"H":[],"e":[],"f":[]},"NG":{"H":[],"e":[],"f":[]},"WV":{"H":[],"e":[],"f":[]},"abt":{"a_":["a0t"]},"aPj":{"L":[],"e":[],"f":[]},"aDe":{"L":[],"e":[],"f":[]},"aDf":{"H":[],"e":[],"f":[]},"aCN":{"L":[],"e":[],"f":[]},"aFX":{"H":[],"e":[],"f":[]},"Xi":{"L":[],"e":[],"f":[]},"ab8":{"a_":["NG"]},"ahF":{"L":[],"e":[],"f":[]},"aBX":{"H":[],"e":[],"f":[]},"ana":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ax<f8>"),k:x("ax<t<rO>>"),u:x("ax<t<fY>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>>"),y:x("ax<a4<c,t<c>>>"),x:x("zE"),b:x("uL"),d:x("rT"),Z:x("pf"),v:x("ed"),_:x("i4"),h:x("DG"),g:x("A1"),D:x("r<Dw>"),r:x("r<i4>"),Q:x("r<xl>"),F:x("r<ei>"),Y:x("r<a4<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>"),E:x("r<a7t>"),c:x("r<Mg>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fY>"),t:x("t<fy>"),G:x("t<a4<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>"),P:x("a4<c,@>"),w:x("dm"),A:x("+eventId,spentByHand,total,unpaidByHand(c,R,R,R)"),e:x("lL"),N:x("c"),B:x("aBS"),q:x("dt"),i:x("R"),z:x("@"),S:x("v"),X:x("J?"),T:x("c?"),I:x("R?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.agh=new A.aP(0,1/0,32,1/0)
D.av2=new A.a0(8,5,6,5)
D.c91=new A.D("Prazo",null,C.aj,null,null,null,null,null,null,null,null)
D.aAC=new A.bR(1,C.aw,D.c91,null)
D.bzS=x([],y.r)
D.aAJ=new B.A1(!1,D.bzS)
D.aBH=new A.kL("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBJ=new A.kL("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBS=new A.kL("Sem pagamentos nesta vista.",8,null)
D.aFt=new A.dO(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bR,null,null,C.bR,C.bR,!0,null,null,null,null)
D.aFO=new A.dO(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bR,null,null,C.bR,C.bR,!0,null,null,null,null)
D.aG0=new A.dO(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aHP=new A.eu("Pago",C.da,null)
D.aHW=new A.eu("Por pagar",C.hB,null)
D.aI2=new A.m5("Or\xe7amento","Todos os teus eventos",null)
D.aI8=new A.m5("Or\xe7amento",null,null)
D.bz7=x(["catering"],y.s)
D.bA8=x([],y.D)
D.bA9=x([],y.n)
D.bAD=x(["flowers_decor"],y.s)
D.bC8=x(["music_dj","bands_musicians"],y.s)
D.bCH=x(["photography"],y.s)
D.bDV=x(["venue"],y.s)
D.c9Y=new A.D("A despesa precisa de um t\xedtulo",null,C.mp,null,null,null,null,null,null,null,null)
D.bLt=new A.Q(U.O6,D.c9Y,null)
D.aFg=new A.qL("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kz,null)
D.bLP=new A.Q(C.hr,D.aFg,null)
D.bMt=new A.Q(P.uY,C.ei,null)
D.bZ_=new A.vV(!1,6,!0,null)
D.c4K=new A.N(!0,C.A,null,null,null,null,14,C.cV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6V=new A.N(!0,null,null,null,null,null,null,C.cV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaQ=new A.N(!0,C.A,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccU=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.d2,null,null,null,null,null,null,null,null)
D.cdf=new A.D("Nova despesa",null,C.bq,null,null,null,null,null,null,null,null)
D.cdh=new A.D("\u20ac",null,D.aaQ,null,null,null,null,null,null,null,null)
D.cfn=new A.D("Indica um valor v\xe1lido",null,C.mp,null,null,null,null,null,null,null,null)
D.chy=new A.D("VALOR",null,C.bh,null,null,null,null,null,null,null,null)
D.Jr=new B.abs(0,"all")
D.acm=new B.abs(1,"paid")
D.acn=new B.abs(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dSJ","cYr",()=>C.bW.$1$1(new B.cE1(),y.m))
x($,"dTy","alO",()=>A.mU(B.dFC(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["cnaUPJdkn2zL3goBQdXuB3U22JI="]=a.current})($__dart_deferred_initializers__);