((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cGw:function cGw(){},cGs:function cGs(){},cGt:function cGt(){},cGu:function cGu(){},cGv:function cGv(){},
dIm(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v)u.push(new B.Ds(x[v]))
return new B.b37(d.b,u)},
Ds:function Ds(d){this.a=d},
b37:function b37(d,e){this.a=d
this.b=e},
b38:function b38(){},
cYF(d){var x="category",w="due_date",v=J.a7(d),u=A.Y(v.h(d,"id")),t=A.Y(v.h(d,"wedding_id")),s=A.Y(v.h(d,"title")),r=B.dEC(B.ddm(A.B(v.h(d,x)))),q=B.ddm(A.B(v.h(d,x))),p=A.du(v.h(d,"amount")),o=v.h(d,w)==null?null:A.db(A.Y(v.h(d,w)))
v=A.dU(v.h(d,"paid"))
return new G.i2(u,t,s,r,q,p,o,v===!0)},
ddm(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dEC(d){var x
A:{if("venue"===d){x=E.xN
break A}if("catering"===d){x=E.xJ
break A}if("photography"===d){x=E.xK
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xL
break A}if("flowers_decor"===d){x=E.xM
break A}x=null
break A}return x},
dq2(){return new B.DC()},
zN:function zN(d,e){this.a=d
this.b=e},
b4M:function b4M(){},
b4N:function b4N(){},
DC:function DC(){this.b=this.x=null},
b4J:function b4J(){},
b4K:function b4K(d,e){this.a=d
this.b=e},
b4L:function b4L(d){this.a=d},
Cm(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cm=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.ako(),$async$Cm)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").ai(0,"partner_name_1, partner_name_2").U("id",d).cf(),$async$Cm)
case 4:s=f
x=5
return A.d(u.b.P("bookings").ai(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").U("wedding_id",d).cJ(0,"event_date",!1),$async$Cm)
case 5:r=f
u=A.a([],y.s)
for(t=J.an(r);t.q();)u.push(A.Y(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.Q().b
t===$&&A.b()
x=9
return A.d(t.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").dK("booking_id",u).tt(0,"created_at"),$async$Cm)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").ai(0,"title, category, amount, due_date, paid").U("wedding_id",d).tt(0,"due_date"),$async$Cm)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").ai(0,"name, amount").U("wedding_id",d).tt(0,"position"),$async$Cm)
case 11:o=f
x=12
return A.d(u.b.P("budgets").ai(0,"total").U("wedding_id",d).cf(),$async$Cm)
case 12:n=f
m=F.cYq(F.cDu(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.an(p);t.q();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cx(j==null?"":j)
i=k.h(l,"category")
i=J.cx(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.eT(A.p(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d0(A.p(g))
g=g==null?null:g.dF()}u.push(new B.Mh(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.an(o);l.q();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cx(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eT(A.p(k))
if(k==null)k=0}t.push(new B.a7E(i,k))}l=n==null?null:F.cYZ(J.i(n,"total"))
v=new F.lR(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cm,w)},
Mh:function Mh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7E:function a7E(d,e){this.a=d
this.b=e},
dnm(){return new B.CW(null)},
aTv(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aTv=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.fY(!0,new B.cCU(e,new A.aE(new A.bC(u,C.aF,C.ax),$.aa())),d,y.i),$async$aTv)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTv,w)},
akh(d,e,f,g){return B.dEp(d,e,f,g)},
dEp(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akh=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aTv(d,"Teto para "+f,g),$async$akh)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.Cx().gaX(),y.x).On(f,r),$async$akh)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a0(H.HP)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akh,w)},
dbq(d){var x=A.U(d,y._)
C.e.cq(x,new B.cD2())
return x},
dbU(d){var x=C.f.aT(C.j.k(A.aD(d)),2,"0"),w=C.f.aT(C.j.k(A.av(d)),2,"0"),v=A.aL(d)===A.aL(new A.ac(Date.now(),0,!1))?"":"/"+A.aL(d)
return x+"/"+w+v},
cXO(d){var x,w,v,u
if(d===C.k.hy(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aW(w,".",",")}v=x.split(",")
u=A.Ct(v[0],A.aQ("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bHh(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abz:function abz(d,e){this.a=d
this.b=e},
CW:function CW(d){this.a=d},
abA:function abA(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKt:function bKt(d){this.a=d},
bKu:function bKu(d){this.a=d},
bKL:function bKL(d){this.a=d},
bKK:function bKK(){},
bKp:function bKp(){},
bKr:function bKr(){},
bKs:function bKs(){},
bKq:function bKq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKz:function bKz(){},
bKA:function bKA(d){this.a=d},
bKJ:function bKJ(d){this.a=d},
bKB:function bKB(){},
bKC:function bKC(){},
bKD:function bKD(d,e){this.a=d
this.b=e},
bKE:function bKE(d){this.a=d},
bKy:function bKy(d){this.a=d},
bKF:function bKF(d){this.a=d},
bKx:function bKx(d){this.a=d},
bKG:function bKG(d){this.a=d},
bKw:function bKw(d){this.a=d},
bKH:function bKH(d){this.a=d},
bKv:function bKv(d){this.a=d},
bKI:function bKI(d){this.a=d},
cCU:function cCU(d,e){this.a=d
this.b=e},
cCS:function cCS(d){this.a=d},
cCT:function cCT(d,e){this.a=d
this.b=e},
cD2:function cD2(){},
aP6:function aP6(d,e,f){this.c=d
this.d=e
this.a=f},
aDc:function aDc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDd:function aDd(d,e){this.e=d
this.a=e},
bMU:function bMU(){},
bMW:function bMW(d,e){this.a=d
this.b=e},
bMX:function bMX(d){this.a=d},
bMV:function bMV(d,e,f){this.a=d
this.b=e
this.c=f},
aCK:function aCK(d,e){this.c=d
this.a=e},
bJP:function bJP(d){this.a=d},
bJO:function bJO(d){this.a=d},
aFQ:function aFQ(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bWz:function bWz(d,e){this.a=d
this.b=e},
bWv:function bWv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWw:function bWw(d){this.a=d},
bWx:function bWx(d,e){this.a=d
this.b=e},
bWy:function bWy(d,e){this.a=d
this.b=e},
Xq:function Xq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBR:function aBR(d,e,f,g,h){var _=this
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
abe:function abe(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bHv:function bHv(d){this.a=d},
bHu:function bHu(){},
bHw:function bHw(d){this.a=d},
bHt:function bHt(){},
bHh:function bHh(){},
bHi:function bHi(d){this.a=d},
bHs:function bHs(){},
bHn:function bHn(d){this.a=d},
bHo:function bHo(d){this.a=d},
bHm:function bHm(d,e){this.a=d
this.b=e},
bHp:function bHp(d){this.a=d},
bHl:function bHl(d){this.a=d},
bHq:function bHq(d){this.a=d},
bHk:function bHk(d){this.a=d},
bHr:function bHr(d,e){this.a=d
this.b=e},
bHj:function bHj(d,e){this.a=d
this.b=e},
X3:function X3(d,e){this.e=d
this.a=e},
bMY:function bMY(d){this.a=d},
bMZ:function bMZ(d){this.a=d},
bN_:function bN_(){},
bN0:function bN0(){},
bN1:function bN1(d){this.a=d},
bN2:function bN2(d,e,f){this.a=d
this.b=e
this.c=f},
bN3:function bN3(d,e){this.a=d
this.b=e},
ahJ:function ahJ(d,e,f){this.c=d
this.d=e
this.a=f},
aBW:function aBW(d,e,f){this.e=d
this.f=e
this.a=f},
bIs:function bIs(){},
bIy:function bIy(d){this.a=d},
bIv:function bIv(){},
bIu:function bIu(d){this.a=d},
bIl:function bIl(d){this.a=d},
bIt:function bIt(d,e,f){this.a=d
this.b=e
this.c=f},
bIw:function bIw(d){this.a=d},
bIj:function bIj(d){this.a=d},
bIk:function bIk(){},
bIx:function bIx(d,e){this.a=d
this.b=e},
bIq:function bIq(d){this.a=d},
bIr:function bIr(d){this.a=d},
bIm:function bIm(){},
bIn:function bIn(d){this.a=d},
bIo:function bIo(d){this.a=d},
bIp:function bIp(d,e){this.a=d
this.b=e},
an5:function an5(d,e){this.c=d
this.a=e},
aY7:function aY7(d){this.a=d},
dgq(d){var x
switch(d){case E.xN:x=D.bCS
break
case E.xJ:x=D.by6
break
case E.xK:x=D.bBF
break
case E.xL:x=D.bB5
break
case E.xM:x=D.bzA
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
B.Ds.prototype={
gap(d){return this.a.a}}
B.b37.prototype={
gpW(){return C.e.cU(this.b,0,new B.b38())},
gaBi(){var x=this.a
return x===0?0:C.k.ae(this.gpW()/x,0,1)}}
B.zN.prototype={
gbyo(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b4M(),w),w.i("w.E"))
return x},
gbyJ(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b4N(),w),w.i("w.E"))
return x},
awt(d,e){var x=e==null?this.a:e
return new B.zN(x,d==null?this.b:d)},
ik(d){return this.awt(null,d)},
awb(d){return this.awt(d,null)}}
B.DC.prototype={
d_(){var x=y.T,w=this.x=A.eP(this).G(A.cC($.co(),new B.b4J(),y.v,x),x)
if(w!=null)A.j3(new B.b4K(this,w),y.H)
return D.azH},
bX(d,e){return this.bvO(0,e)},
bvO(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bX=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ik(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").ck(0).U("wedding_id",e).cJ(0,"created_at",!0),$async$bX)
case 2:v.sa4(0,new t.zN(s,r.d9(g,B.dJd(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bX,w)},
Vg(d){return this.blM(d)},
blM(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vg=A.j(function(e,f){if(e===1)return A.k(f,w)
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
return A.d(r.d3(0,u).ck(0).dM(0),$async$Vg)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cYF(s))
v.sa4(0,r.awb(u))
return A.l(null,w)}})
return A.m($async$Vg,w)},
Ok(d){return this.bBg(d)},
bBg(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Ok=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lb(v.ga4(0).b,new B.b4L(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bh(0,A.R(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).cg()],u,u)).U("id",d).ck(0).dM(0),$async$Ok)
case 2:t=l.cYF(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.awb(m))
return A.l(null,w)}})
return A.m($async$Ok,w)}}
B.Mh.prototype={}
B.a7E.prototype={
gap(d){return this.a}}
B.abz.prototype={
I(){return"_BudgetFilter."+this.b}}
B.CW.prototype={
S(){return new B.abA(D.J_)}}
B.abA.prototype={
Tr(d){return this.bbH(d)},
bbH(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Tr=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKt(u))
x=1
break}u.p(new B.bKu(u))
t=u.gR()
s=$.co()
r=t.a_(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a_(0,s.gaX(),y.Z).ai(0,d),$async$Tr)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Tr,w)},
ad(){this.aq()
A.j3(new B.bKL(this),y.H)},
PV(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$PV=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gR()
n=$.alI()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.Cx(),y.b).b
s=t==null?null:t.b
r=C.e.cU(o.a_(0,n,y.g).b,0,new B.bKp())
t=o.a_(0,$.co(),y.v).b
q=t==null?null:t.gcv()
t=u.c
t.toString
x=3
return A.d(A.bP(null,new B.bKq(q,s,new B.bKr(),r),!1,t,!0,!0,null,y.B),$async$PV)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vg(new G.i2("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$PV,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gR(),a2=a1.G($.Cx(),y.b),a3=a1.G($.HQ(),y.d),a4=a1.G($.alI(),y.g),a5=a2.b,a6=a5==null?e:B.dIm(a5,a3.b)
a5=A.j_(a1.G($.iY(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iS
a5=y.T
w=a1.G(A.cC($.co(),new B.bKz(),y.v,a5),a5)
if(f.y){a1=f.gap4()
return A.cO(e,C.cP,A.nH(C.eZ,40,A.a([C.fu,D.aH5,K.cVc(a1,e),new B.aBW(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.da(x,new B.bKA(w))
a1=a1.G($.uz(),y.l)
u=a1.gv(a1)
t=new B.bKJ(u==null?C.fc:u)
a1=y._
a5=A.U(a4.gbyo(),a1)
for(s=v.a,r=J.c8(s),q=r.gX(s),p=v.b,o=v.$ti.i("fx<1>"),n=new A.fx(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i2("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbyJ(0),a1)
for(s=r.gX(s),o=new A.fx(s,p,o),p=y.r;o.q();){r=s.gE(s)
n=A.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new G.i2("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new G.i2("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dbq(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dbq(q)
break
default:a1=e}h=C.e.cU(q,0,new B.bKB())
s=a6==null
if(s)g=D.bz9
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bKC(),p),p.i("w.E"))}if(s)a1=D.bXz
else{s=f.gaQR()
r=y.p
p=A.a([new A.pq(A.a([new A.qH(s,"Nova despesa",e)],r),e),D.aHb,K.cVc(f.gap4(),w),new B.aP6(a6,new B.bKD(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aI(a6.gpW(),!1)
n=a5.length
m=n===1?d:a0
l=A.aI(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c1("N\xfameros",e,A.a([new A.DN(A.a([new A.l7("Gasto",o,""+n+" "+m,e),new A.l7("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.m9(A.a([new A.ei("Todos",l===D.J_,n+m,new B.bKE(f),e),new A.ei("Pendentes",l===D.abx,m,new B.bKF(f),e),new A.ei("Pagos",l===D.abw,n,new B.bKG(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aFQ(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c1("Pagamentos",e,o,16,e))
a1=A.a([new A.h3(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDc(g,f.x,new B.bKH(f),e))
p.push(new A.c1("Categorias",e,a1,16,e))
p.push(new A.c1("Exportar",e,A.a([new F.DD("Gastos e parceiros",!1,new B.bKI(f),e)],r),16,e))
a1=A.nH(C.eZ,40,p,e,!0,!1)}return A.cO(e,C.cP,a1,!0,e)},
Io(d){return this.aXM(d)},
aXM(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Io=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aTv(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Io)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gR().a_(0,$.Cx().gaX(),y.x).ZY(r),$async$Io)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a0(H.HP)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Io,w)}}
B.aP6.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpW()>0?"Gastos "+A.aI(t.gpW(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vh(new A.he("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hD,0,"por definir","\u2014")}x=C.k.aN(t.gaBi()*100)
w=s-t.gpW()<0?"Acima do teto":"Ainda tens"
v=A.aI(Math.abs(s-t.gpW()),!1)
s=A.aI(s,!1)
u=t.gaBi()
return A.aX(A.vh(H.a1A,"Gastos "+A.aI(t.gpW(),!1)+" \xb7 "+x+"% do teto",w,C.hD,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDc.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dy(s,0,A.es(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.H)(r),++w)p.push(new B.aDd(r[w],null))
q=A.a([A.eQ(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.he(u,v.e,!0,null))}return A.z(q,C.E,C.h,C.l)}}
B.aDd.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cC($.co(),new B.bMU(),y.v,m),m)
if(l==null)x=C.r0
else{m=e.G($.d0E().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r0:m}m=A.a([],y.s)
for(w=B.dgq(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bMW(this,d)
if(w)return A.jY(!1,!1,p,v,A.aI(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mJ("P\xf4r teto",new B.bMV(this,d,e),!0,p))
w=A.aI(o.b,!1)
u=A.aI(n,!1)
s=y.p
q=A.a([A.aJ(new A.a3Z(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aD,new B.an5(m,p)],s))
return A.jY(!1,!1,p,v,w+" de "+u,o.a,A.z(q,C.dJ,C.h,C.J))}}
B.aCK.prototype={
u(d){var x,w,v=null,u=$.at,t=$.fi.cc(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fQ(r,A.aJ(p==null?A.kJ(A.b8(C.i7,u,v,v,v),C.t,!0):A.pm(p,144,new B.bJO(u),!1,C.bE,A.ws(),!1,v,v,v),48,48),C.bc)
p=A.h(q.b,1,C.a1,v,v,D.c3i,v,v)
x=A.b8(C.i9,u,v,v,14)
w=q.d
q=w>0?q.gPs()+" \xb7 "+A.aI(w,!1):q.gPs()
w=y.p
return new A.S(C.d0,A.aX(A.x(v,A.N(A.a([r,C.af,A.a4(A.z(A.a([p,C.j4,A.N(A.a([x,C.dY,new A.dh(1,C.ba,A.h(q,1,C.a1,v,v,A.aH(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bl,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b8(C.ib,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.x),v,v,v,C.ed,v,v,v),new B.bJP(d),v),v)}}
B.aFQ.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JB(A.a([new A.he("+ Nova despesa",this.f,!0,j)],y.p),C.eR,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aB0
x=new B.bWz(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.H)(i),++t){s=i[t]
r=s.a
q=C.f.cW(r,":pay:")
r=C.f.b1(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gJ(r.split(" \xb7 "))
n=A.aI(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.dbU(m)
v.push(new A.t9(new A.cf(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bWv(d,e,s,q),A.HJ(m)===C.f5,j))
continue}p=r?new B.bWw(d):new B.bWx(x,s)
v.push(new B.Xq(s,p,r||s.w?j:new B.bWy(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xq&&v[k-1] instanceof B.Xq)u.push(C.iI)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAH)
return A.z(i,C.E,C.h,C.l)}}
B.Xq.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aI(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dbU(w))
v=C.e.a1(v," \xb7 ")
if(u)u=D.aGR
else{u=this.e
u=u!=null?new A.mJ("Marcar pago",u,!0,null):D.aGY}return A.jY(!1,!1,null,this.d,v,x.c,u)}}
B.aBR.prototype={}
B.NI.prototype={
S(){var x=$.aa()
return new B.abe(new A.aE(C.ak,x),new A.aE(C.ak,x))}}
B.abe.prototype={
ad(){var x=this
x.aq()
x.d.an(0,new B.bHv(x))
x.e.an(0,new B.bHw(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a7()},
gahs(){var x=C.f.B(this.e.a.a)
x=A.aW(x," ","")
return A.eT(A.aW(x,",","."))},
aS3(){var x,w,v,u,t=this,s=t.gahs()
t.p(new B.bHi(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.af(new B.aBR(x,s,u,t.r,v))},
arO(d,e,f,g,h){var x=null,w=h?C.fm:x,v=y.p,u=A.a4(A.z(A.a([A.h(d,x,x,x,x,C.a9,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.bp:x,s=f?x:A.bD(C.ks,1.5),r=f?S.vl:x
return A.bh(x,!0,x,A.cp(C.bu,A.x(x,A.N(A.a([u,A.x(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.ap),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.cL,new A.I(x,x,w,x,x,x,C.x),x,x,x,C.hr,x,x,x),C.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bi7(d,e,f,g){return this.arO(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahs()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bHs()
t=y.w
s=A.aS(d,k,t).w
r=y.p
q=A.a([D.c7x],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k))
q=A.N(A.a([A.a4(A.z(q,C.G,C.h,C.l),1),A.bh(k,!0,k,A.cp(k,A.x(k,C.hz,C.r,k,k,C.bV,k,44,k,k,k,k,44),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHn(d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c8C,A.N(A.a([V.d54(A.cr(k,C.a6,!1,k,!0,C.y,k,A.ct(),l.e,k,k,k,k,k,2,D.aEU,C.W,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.fI,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aaf,!0,C.dA,k,C.b0,k,k,k,k)),C.bj,D.c80],r),C.ec,C.bR,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cXO(v)+" no teto":"Passa o teto em "+B.cXO(-v)
o.push(A.h(m,k,k,k,k,A.aH(k,k,n?C.V:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c7d)
p=A.x(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a4,k,k,p,k,k,C.x),k,k,k,C.bn,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bD(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d0,o,k),A.x(C.bb,A.cr(k,C.a6,!1,k,!0,C.y,k,A.ct(),x,k,k,k,k,k,2,D.aEy,C.W,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fh,!0,C.au,k,C.hb,k,k,k,k),C.r,k,k,new A.I(C.a4,k,m,n,k,k,C.x),k,52,k,C.fq,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bLb)
n.push(C.a_)
n.push(new U.a1d(l.r,new B.bHo(l),k))
n.push(C.a_)
n.push(new A.S(C.d0,A.h("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bi7("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHp(l)),l.arO("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHq(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aD(p)))
m=l.f
m.toString
m=A.p(w.$1(A.av(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aL(w)}o.push(A.bh(k,!0,k,A.cp(C.bu,A.aJ(A.N(A.a([D.azr,A.h(w,k,k,k,k,C.cc,k,k),C.dY,C.jS],r),C.v,C.h,C.l,0,k),56,k),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHr(l,d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.x(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a4,k,k,x,k,k,C.x),k,k,k,C.cr,k,k,k))
n.push(C.a_)
n.push(D.cd4)
x=A.dR(A.z(n,C.E,C.h,C.l),C.y,k,C.ee,k,C.av)
t=A.aS(d,C.b5,t).w
w=A.cb(u?C.z:C.z.cc(0.35),k,k,C.t,k,k,C.aa,k,k,C.eH)
return new A.S(new A.a3(0,0,0,s.f.d),A.z(A.a([new A.S(C.jD,q,k),new A.dh(1,C.ba,x,k),new A.S(new A.a3(20,16,20,20+t.r.d),A.aJ(A.bA(A.h(u?"Guardar \xb7 "+B.cXO(j):"Guardar",k,k,k,k,k,k,k),l.gaS2(),w),52,k),k)],r),C.E,C.h,C.J),k)}}
B.X3.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.Cx(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eK(new A.a6(j,new B.bMY(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.alI(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bMZ(l),w),w.i("w.E"))
C.e.cq(v,new B.bN_())
j=y.T
u=e.G(A.cC($.co(),new B.bN0(),y.v,j),j)
t=B.dgq(l.e.c)
if(u==null)s=I.Fg
else{j=e.G($.aVn().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fg
j=J.da(j,new B.bN1(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aS(d,k,y.w).w
w=A.bN(A.x(k,k,C.r,k,k,new A.I(C.bF,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ax(d).ok.r,k,k)
q=A.a4(new B.ahJ("Gasto",A.aI(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aA,A.N(A.a([q,C.ae,A.a4(A.aX(new B.ahJ("Teto \xb7 tocar para mudar",p===0?"Definir":A.aI(p,!1),k),new B.bN2(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bh,A.h("Contratado na app",k,k,k,k,A.ax(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.H)(s),++n)w.push(new B.aCK(s[n],k))
C.e.n(p,w)}p.push(C.bh)
p.push(A.h("Despesas",k,k,k,k,A.ax(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKB)
else for(n=0;n<v.length;v.length===w||(0,A.H)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.is,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aT(C.j.k(A.aD(q)),2,"0")+"/"+C.f.aT(C.j.k(A.av(q)),2,"0")+"/"+A.aL(q),k,k,k,k,k,k,k)
p.push(A.jm(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.N(A.a([A.h(A.aI(m.f,!1),k,k,k,k,D.c5n,k,k),C.ab,new P.D6(m.w,new B.bN3(e,m),k,$.at,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J1,k)],o),C.v,C.h,C.J,0,k),k))}return A.bz(!0,new A.e9(new A.aR(0,1/0,0,j.a.b*0.8),A.d4(p,k,L.CO,k,k,!1,!0),k),k,C.Z,!0)}}
B.ahJ.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.z(A.a([A.h(this.c,x,x,x,x,C.be,x,x),C.ar,A.h(this.d,x,x,x,x,M.aa2,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.I(C.a4,x,x,w,x,x,C.x),x,x,x,C.cT,x,x,x)}}
B.aBW.prototype={
b9(d,e){var x,w=y.t,v=e.G(A.cC($.co(),new B.bIs(),y.v,w),w),u=e.G($.d0D(),y.o)
w=e.G($.uz(),y.l)
x=w.gv(w)
return A.hC(u,new B.bIt(this,new B.bIy(x==null?C.fc:x),v),new B.bIu(e),new B.bIv(),!1,!0,!1)}}
B.an5.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.at,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=$.fi
s=new A.b5(999,999)
r=new A.bf(o.cc(0.25),1,C.aj,-1)
q=A.b8(C.i9,o,p,p,13)
t=A.x(p,A.N(A.a([q,C.rK,new A.dh(1,C.ba,A.h(u,1,C.a1,p,p,new A.P(!0,o,p,p,p,p,14,C.d2,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b8(C.ib,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afk,new A.I(t,p,new A.dL(r,r,r,r),new A.cy(s,s,s,s),p,p,C.x),p,p,p,D.au0,p,p,p)
m.push(new A.jr(new A.n2(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.i9(t,new B.aY7(d),p,p),p))}return A.e3(C.bf,m,C.r,C.bk,6,6)}}
var z=a.updateTypes(["C(i2)","T(T,i2)","v(i2,i2)","T(T,Ds)","zN()","F<~>(c?)","F<~>()","NI(O)","C(Ds)","F<lR>()","X3(O)","~(i2)","~()","C(nn)","C(rJ)","i2(a5<c,@>)","DC()"])
B.cGw.prototype={
$1(d){return this.aEA(d)},
aEA(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.ye(a1)
u=y.t
t=a1.G(A.cC($.co(),new B.cGs(),y.v,u),u)
u=J.a7(t)
if(u.gY(t)){v=D.bza
x=1
break}s=A.a([],y.s)
for(r=u.gX(t);r.q();)s.push(r.gE(r).a)
r=$.Q()
q=r.b
q===$&&A.b()
p=y.G
o=q.P("budgets").ai(0,"wedding_id, total").dK("wedding_id",s).b3(new B.cGt(),p)
n=r.b.P("budget_categories").ai(0,"wedding_id, amount").dK("wedding_id",s).b3(new B.cGu(),p)
m=r.b.P("expenses").ai(0,"wedding_id, amount, paid").dK("wedding_id",s).b3(new B.cGv(),p)
p=y.N
s=y.i
r=A.E(p,s)
d=q=y.P
a0=J
x=3
return A.d(o,$async$$1)
case 3:d,l=a0.bd(a3,q),k=A.u(l),l=new A.ag(l,l.gA(l),k.i("ag<V.E>")),k=k.i("V.E")
case 4:if(!l.q()){x=5
break}j=l.d
if(j==null)j=k.a(j)
i=J.a7(j)
r.j(0,A.Y(i.h(j,"wedding_id")),A.du(i.h(j,"total")))
x=4
break
case 5:h=A.E(p,s)
d=J
x=6
return A.d(n,$async$$1)
case 6:l=d.bd(a3,q),k=A.u(l),l=new A.ag(l,l.gA(l),k.i("ag<V.E>")),k=k.i("V.E")
case 7:if(!l.q()){x=8
break}j=l.d
if(j==null)j=k.a(j)
i=J.a7(j)
g=A.Y(i.h(j,"wedding_id"))
f=h.h(0,g)
if(f==null)f=0
j=A.aC(i.h(j,"amount"))
if(j==null)j=null
h.j(0,g,f+(j==null?0:j))
x=7
break
case 8:e=A.E(p,s)
d=J
x=9
return A.d(m,$async$$1)
case 9:s=d.bd(a3,q),q=A.u(s),s=new A.ag(s,s.gA(s),q.i("ag<V.E>")),q=q.i("V.E")
case 10:if(!s.q()){x=11
break}p=s.d
if(p==null)p=q.a(p)
l=J.a7(p)
if(J.o(l.h(p,"paid"),!0)){x=10
break}g=A.Y(l.h(p,"wedding_id"))
k=e.h(0,g)
if(k==null)k=0
p=A.aC(l.h(p,"amount"))
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
s.push(new A.aMn([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1294}
B.cGs.prototype={
$1(d){return d.c},
$S:154}
B.cGt.prototype={
$1(d){return d},
$S:29}
B.cGu.prototype={
$1(d){return d},
$S:29}
B.cGv.prototype={
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
$S:37}
B.b4K.prototype={
$0(){return this.a.bX(0,this.b)},
$S:1}
B.b4L.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKt.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKu.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bKL.prototype={
$0(){return this.a.gR().a_(0,$.Cx().gaX(),y.x).Zf(0).ea(new B.bKK())},
$S:1}
B.bKK.prototype={
$1(d){},
$S:11}
B.bKp.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKr.prototype={
$1(d){return A.Ct(C.k.a8(d,0),A.aQ("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKs(),null)+" \u20ac"},
$S:110}
B.bKs.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bKq.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a1(v," \xb7 ")
u=x&&u>0?u:null
return new B.NI(v,u,w.d,null)},
$S:z+7}
B.bKz.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bKA.prototype={
$1(d){return d.x!==C.e8&&d.b===this.a},
$S:56}
B.bKJ.prototype={
$2(d,e){return A.je(d,this.a.l8(e))},
$1(d){return this.$2(d,null)},
$S:1297}
B.bKB.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKC.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bKD.prototype={
$0(){return this.a.Io(this.b.a)},
$S:0}
B.bKE.prototype={
$0(){var x=this.a
return x.p(new B.bKy(x))},
$S:0}
B.bKy.prototype={
$0(){return this.a.w=D.J_},
$S:0}
B.bKF.prototype={
$0(){var x=this.a
return x.p(new B.bKx(x))},
$S:0}
B.bKx.prototype={
$0(){return this.a.w=D.abx},
$S:0}
B.bKG.prototype={
$0(){var x=this.a
return x.p(new B.bKw(x))},
$S:0}
B.bKw.prototype={
$0(){return this.a.w=D.abw},
$S:0}
B.bKH.prototype={
$0(){var x=this.a
return x.p(new B.bKv(x))},
$S:0}
B.bKv.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bKI.prototype={
$0(){return B.Cm(this.a.gR().a_(0,$.co(),y.v).b.a)},
$S:z+9}
B.cCU.prototype={
$1(d){var x=null,w=this.b
return new A.eS(A.h(this.a,x,x,x,x,x,x,x),A.cr(x,C.a6,!0,x,!0,C.y,x,A.ct(),w,x,x,x,x,x,2,D.aF6,C.W,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.fI,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b0,x,x,x,x),A.a([A.cG(C.cZ,x,x,new B.cCS(d),x,x),A.bA(C.du,new B.cCT(d,w),x)],y.p),x)},
$S:19}
B.cCS.prototype={
$0(){return A.am(this.a,!1).bj()},
$S:0}
B.cCT.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aW(w," ","")
return x.af(A.eT(A.aW(w,",",".")))},
$S:0}
B.cD2.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bY(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bY(2100,1,1,0,0):x)},
$S:z+2}
B.bMU.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bMW.prototype={
$0(){return A.bP(null,new B.bMX(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bMX.prototype={
$1(d){return new B.X3(this.a.e.a,null)},
$S:z+10}
B.bMV.prototype={
$0(){return B.akh(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bJP.prototype={
$0(){var x=this.a
A.am(x,!1).bj()
A.ad(x).ak("/bookings",null,y.X)},
$S:0}
B.bJO.prototype={
$3(d,e,f){return A.kJ(A.b8(C.i7,this.a,null,null,null),C.t,!0)},
$S:95}
B.bWz.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.alI().gaX(),y.h).Ok(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a0(A.bX(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bWv.prototype={
$0(){var x=this
return A.rA(x.a,x.b,C.f.bD(x.c.a,x.d+5),null,null)},
$S:0}
B.bWw.prototype={
$0(){return A.ad(this.a).ak("/bookings",null,y.X)},
$S:0}
B.bWx.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bWy.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHv.prototype={
$0(){return this.a.p(new B.bHu())},
$S:0}
B.bHu.prototype={
$0(){},
$S:0}
B.bHw.prototype={
$0(){return this.a.p(new B.bHt())},
$S:0}
B.bHt.prototype={
$0(){},
$S:0}
B.bHh.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bHi.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHs.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:38}
B.bHn.prototype={
$0(){return A.am(this.a,!1).bj()},
$S:0}
B.bHo.prototype={
$1(d){var x=this.a
return x.p(new B.bHm(x,d))},
$S:136}
B.bHm.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHp.prototype={
$0(){var x=this.a
return x.p(new B.bHl(x))},
$S:0}
B.bHl.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHq.prototype={
$0(){var x=this.a
return x.p(new B.bHk(x))},
$S:0}
B.bHk.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHr.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cMP(v.b,A.bY(A.aL(t)-1,1,1,0,0),r,A.bY(A.aL(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bHj(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bHj.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bMY.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bMZ.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bN_.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bY(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bY(2100,1,1,0,0):x)},
$S:z+2}
B.bN0.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bN1.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bN2.prototype={
$0(){var x=this.c
return B.akh(this.a,this.b,x.a,x.d)},
$S:0}
B.bN3.prototype={
$1(d){return this.a.a_(0,$.alI().gaX(),y.h).Ok(this.b.a)},
$S:142}
B.bIs.prototype={
$1(d){return d.c},
$S:154}
B.bIy.prototype={
$2(d,e){return A.je(d,this.a.l8(e))},
$S:42}
B.bIv.prototype={
$0(){return D.bLd},
$S:87}
B.bIu.prototype={
$2(d,e){return A.JB(A.a([new A.he("Tentar outra vez",new B.bIl(this.a),!1,null)],y.p),C.eR,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1298}
B.bIl.prototype={
$0(){return this.a.aj($.d0D())},
$S:0}
B.bIt.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIw(g),e=new B.bIx(g,this.b),d=J.c8(a4),a0=d.cU(a4,0,new B.bIm()),a1=d.cU(a4,0,new B.bIn(f)),a2=d.cU(a4,0,new B.bIo(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.an(this.c);x.q();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.BS(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bD(s,1))}x=A.aI(a1,!1)
w=a0>0
v=w?"de "+A.aI(a0,!1):"gastos"
u=w?C.k.ae(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aN(a1/a0*100)+"% dos tetos":""
x=A.vh(i,""+t+" "+r+w,"Todos os eventos",C.hD,u,v,x)
v=y.p
u=A.a([new A.DN(A.a([new A.l7("Gasto",A.aI(a1,!1),h,i),new A.l7("Por pagar",A.aI(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.et(a4,0,y.A),r=J.an(t.a),q=t.b,t=new A.bW(r,q,A.u(t).i("bW<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.al(A.c_())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iI)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a1,i,i,C.a9,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aI(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aI(j[3]+e.$1(j[0]),!1))}n=A.z(A.a([n,C.aU,A.h(C.e.a1(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.i9(A.x(i,A.N(A.a([new A.bI(1,C.at,n,i),C.ae,A.h(A.aI(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.bj,C.jS],v),C.v,C.h,C.l,0,i),C.r,C.as,C.cL,i,i,i,i,C.cj,i,i,i),new B.bIp(o,g),i,i))
C.e.n(w,l)}return A.z(A.a([x,new A.c1("N\xfameros",i,u,16,i),new A.c1("Por evento \xb7 "+d,i,w,16,i),D.aAJ],v),C.E,C.h,C.l)},
$S:1299}
B.bIw.prototype={
$1(d){return J.da(this.a.e,new B.bIj(d)).cU(0,0,new B.bIk())},
$S:189}
B.bIj.prototype={
$1(d){return d.b===this.a&&d.x!==C.e8},
$S:56}
B.bIk.prototype={
$2(d,e){return d+e.w},
$S:493}
B.bIx.prototype={
$1(d){return J.da(this.a.e,new B.bIq(d)).cU(0,0,new B.bIr(this.b))},
$S:189}
B.bIq.prototype={
$1(d){return d.b===this.a&&d.x!==C.e8},
$S:56}
B.bIr.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:493}
B.bIm.prototype={
$2(d,e){return d+e.a[2]},
$S:235}
B.bIn.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:235}
B.bIo.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:235}
B.bIp.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aY7.prototype={
$0(){return A.ad(this.a).ak("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dJd","cYF",15)
w(B,"dJc","dq2",16)
v(B.DC.prototype,"giD","d_",4)
var t
u(t=B.abA.prototype,"gap4","Tr",5)
v(t,"gaQR","PV",6)
v(B.abe.prototype,"gaS2","aS3",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.br,[B.cGw,B.cGs,B.cGt,B.cGu,B.cGv,B.b4M,B.b4N,B.b4J,B.b4L,B.bKK,B.bKr,B.bKs,B.bKq,B.bKz,B.bKA,B.bKJ,B.bKC,B.cCU,B.bMU,B.bMX,B.bJO,B.bWz,B.bHh,B.bHs,B.bHo,B.bMY,B.bMZ,B.bN0,B.bN1,B.bN3,B.bIs,B.bIt,B.bIw,B.bIj,B.bIx,B.bIq])
x(A.L,[B.Ds,B.b37,B.zN,B.Mh,B.a7E,B.aBR])
x(A.cJ,[B.b38,B.bKp,B.bKB,B.cD2,B.bN_,B.bIy,B.bIu,B.bIk,B.bIr,B.bIm,B.bIn,B.bIo])
w(B.DC,A.f9)
x(A.bK,[B.b4K,B.bKt,B.bKu,B.bKL,B.bKD,B.bKE,B.bKy,B.bKF,B.bKx,B.bKG,B.bKw,B.bKH,B.bKv,B.bKI,B.cCS,B.cCT,B.bMW,B.bMV,B.bJP,B.bWv,B.bWw,B.bWx,B.bWy,B.bHv,B.bHu,B.bHw,B.bHt,B.bHi,B.bHn,B.bHm,B.bHp,B.bHl,B.bHq,B.bHk,B.bHr,B.bHj,B.bN2,B.bIv,B.bIl,B.bIp,B.aY7])
w(B.abz,A.ff)
w(B.CW,A.dB)
w(B.abA,A.dv)
x(A.M,[B.aP6,B.aDc,B.aCK,B.Xq,B.ahJ,B.an5])
x(A.ev,[B.aDd,B.aFQ,B.X3,B.aBW])
w(B.NI,A.G)
w(B.abe,A.a0)})()
A.bp(b.typeUniverse,JSON.parse('{"DC":{"f9":["zN"]},"NI":{"G":[],"e":[],"f":[]},"X3":{"G":[],"e":[],"f":[]},"CW":{"G":[],"e":[],"f":[]},"abA":{"a0":["CW"]},"aP6":{"M":[],"e":[],"f":[]},"aDc":{"M":[],"e":[],"f":[]},"aDd":{"G":[],"e":[],"f":[]},"aCK":{"M":[],"e":[],"f":[]},"aFQ":{"G":[],"e":[],"f":[]},"Xq":{"M":[],"e":[],"f":[]},"abe":{"a0":["NI"]},"ahJ":{"M":[],"e":[],"f":[]},"aBW":{"G":[],"e":[],"f":[]},"an5":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{l:x("aw<f7>"),k:x("aw<t<rJ>>"),u:x("aw<t<fH>>"),o:x("aw<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("aw<a5<c,t<c>>>"),x:x("zq"),b:x("uM"),d:x("rO"),Z:x("oi"),v:x("eb"),_:x("i2"),h:x("DC"),g:x("zN"),D:x("r<Ds>"),r:x("r<i2>"),Q:x("r<l7>"),F:x("r<ei>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7E>"),c:x("r<Mh>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fH>"),t:x("t<fk>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a5<c,@>"),w:x("ds"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lR"),N:x("c"),B:x("aBR"),q:x("dk"),i:x("T"),z:x("@"),S:x("v"),X:x("L?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afk=new A.aR(0,1/0,32,1/0)
D.au0=new A.a3(8,5,6,5)
D.cgJ=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azr=new A.bI(1,C.at,D.cgJ,null)
D.byS=x([],y.r)
D.azH=new B.zN(!1,D.byS)
D.aAH=new A.h3("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAJ=new A.h3("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aB0=new A.h3("Sem pagamentos nesta vista.",8,null)
D.aEy=new A.dD(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aEU=new A.dD(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aF6=new A.dD(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGR=new A.dT("Pago",C.cU,null)
D.aGY=new A.dT("Por pagar",C.hB,null)
D.aH5=new A.lc("Or\xe7amento","Todos os teus eventos",null)
D.aHb=new A.lc("Or\xe7amento",null,null)
D.by6=x(["catering"],y.s)
D.bz9=x([],y.D)
D.bza=x([],y.n)
D.bzA=x(["flowers_decor"],y.s)
D.bB5=x(["music_dj","bands_musicians"],y.s)
D.bBF=x(["photography"],y.s)
D.bCS=x(["venue"],y.s)
D.aEn=new A.vc("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kB,null)
D.bKB=new A.S(C.fU,D.aEn,null)
D.c8Z=new A.D("A despesa precisa de um t\xedtulo",null,C.ml,null,null,null,null,null,null,null)
D.bLb=new A.S(T.Nv,D.c8Z,null)
D.bLd=new A.S(O.uL,C.f0,null)
D.bXz=new A.vR(!1,6,!0,null)
D.c3i=new A.P(!0,C.z,null,null,null,null,14,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5n=new A.P(!0,null,null,null,null,null,null,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaf=new A.P(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7d=new A.D("Indica um valor v\xe1lido",null,C.ml,null,null,null,null,null,null,null)
D.c7x=new A.D("Nova despesa",null,C.bi,null,null,null,null,null,null,null)
D.c80=new A.D("\u20ac",null,D.aaf,null,null,null,null,null,null,null)
D.c8C=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.cd4=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null)
D.J_=new B.abz(0,"all")
D.abw=new B.abz(1,"paid")
D.abx=new B.abz(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWx","d0D",()=>C.bO.$1$1(new B.cGw(),y.m))
x($,"dXn","alI",()=>A.mT(B.dJc(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["8kLxf0Z8KhdOKl5aQ80ynJ+okFY="]=a.current})($__dart_deferred_initializers__);