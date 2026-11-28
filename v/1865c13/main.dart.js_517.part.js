((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cGf:function cGf(){},cGb:function cGb(){},cGc:function cGc(){},cGd:function cGd(){},cGe:function cGe(){},
dI_(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v)u.push(new B.Dr(x[v]))
return new B.b34(d.b,u)},
Dr:function Dr(d){this.a=d},
b34:function b34(d,e){this.a=d
this.b=e},
b35:function b35(){},
cYm(d){var x="category",w="due_date",v=J.a7(d),u=A.Y(v.h(d,"id")),t=A.Y(v.h(d,"wedding_id")),s=A.Y(v.h(d,"title")),r=B.dEg(B.dd2(A.B(v.h(d,x)))),q=B.dd2(A.B(v.h(d,x))),p=A.du(v.h(d,"amount")),o=v.h(d,w)==null?null:A.db(A.Y(v.h(d,w)))
v=A.dU(v.h(d,"paid"))
return new G.i2(u,t,s,r,q,p,o,v===!0)},
dd2(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dEg(d){var x
A:{if("venue"===d){x=E.xM
break A}if("catering"===d){x=E.xI
break A}if("photography"===d){x=E.xJ
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xK
break A}if("flowers_decor"===d){x=E.xL
break A}x=null
break A}return x},
dpI(){return new B.DB()},
zM:function zM(d,e){this.a=d
this.b=e},
b4J:function b4J(){},
b4K:function b4K(){},
DB:function DB(){this.b=this.x=null},
b4G:function b4G(){},
b4H:function b4H(d,e){this.a=d
this.b=e},
b4I:function b4I(d){this.a=d},
Cl(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cl=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akm(),$async$Cl)
case 3:u=$.P()
t=u.b
t===$&&A.b()
x=4
return A.d(t.P("events").ai(0,"partner_name_1, partner_name_2").U("id",d).cf(),$async$Cl)
case 4:s=f
x=5
return A.d(u.b.P("bookings").ai(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").U("wedding_id",d).cJ(0,"event_date",!1),$async$Cl)
case 5:r=f
u=A.a([],y.s)
for(t=J.an(r);t.q();)u.push(A.Y(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.P().b
t===$&&A.b()
x=9
return A.d(t.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").dK("booking_id",u).ts(0,"created_at"),$async$Cl)
case 9:q=f
case 7:u=$.P()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").ai(0,"title, category, amount, due_date, paid").U("wedding_id",d).ts(0,"due_date"),$async$Cl)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").ai(0,"name, amount").U("wedding_id",d).ts(0,"position"),$async$Cl)
case 11:o=f
x=12
return A.d(u.b.P("budgets").ai(0,"total").U("wedding_id",d).cf(),$async$Cl)
case 12:n=f
m=F.cY7(F.cDe(s),"Gastos e parceiros",r,q,!1)
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
g=g==null?null:g.dF()}u.push(new B.Mf(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.an(o);l.q();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cx(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.eT(A.p(k))
if(k==null)k=0}t.push(new B.a7B(i,k))}l=n==null?null:F.cYF(J.i(n,"total"))
v=new F.lR(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cl,w)},
Mf:function Mf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7B:function a7B(d,e){this.a=d
this.b=e},
dn1(){return new B.CV(null)},
aTt(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aTt=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.fP(!0,new B.cCE(e,new A.aE(new A.bD(u,C.aF,C.ax),$.aa())),d,y.i),$async$aTt)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTt,w)},
akf(d,e,f,g){return B.dE3(d,e,f,g)},
dE3(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akf=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aTt(d,"Teto para "+f,g),$async$akf)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.Cw().gaX(),y.x).Om(f,r),$async$akf)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a1(H.HO)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akf,w)},
db6(d){var x=A.U(d,y._)
C.e.cq(x,new B.cCN())
return x},
dbA(d){var x=C.f.aT(C.j.k(A.aD(d)),2,"0"),w=C.f.aT(C.j.k(A.av(d)),2,"0"),v=A.aL(d)===A.aL(new A.ae(Date.now(),0,!1))?"":"/"+A.aL(d)
return x+"/"+w+v},
cXv(d){var x,w,v,u
if(d===C.k.hx(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aW(w,".",",")}v=x.split(",")
u=A.Cs(v[0],A.aQ("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bH7(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abw:function abw(d,e){this.a=d
this.b=e},
CV:function CV(d){this.a=d},
abx:function abx(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKj:function bKj(d){this.a=d},
bKk:function bKk(d){this.a=d},
bKB:function bKB(d){this.a=d},
bKA:function bKA(){},
bKf:function bKf(){},
bKh:function bKh(){},
bKi:function bKi(){},
bKg:function bKg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKp:function bKp(){},
bKq:function bKq(d){this.a=d},
bKz:function bKz(d){this.a=d},
bKr:function bKr(){},
bKs:function bKs(){},
bKt:function bKt(d,e){this.a=d
this.b=e},
bKu:function bKu(d){this.a=d},
bKo:function bKo(d){this.a=d},
bKv:function bKv(d){this.a=d},
bKn:function bKn(d){this.a=d},
bKw:function bKw(d){this.a=d},
bKm:function bKm(d){this.a=d},
bKx:function bKx(d){this.a=d},
bKl:function bKl(d){this.a=d},
bKy:function bKy(d){this.a=d},
cCE:function cCE(d,e){this.a=d
this.b=e},
cCC:function cCC(d){this.a=d},
cCD:function cCD(d,e){this.a=d
this.b=e},
cCN:function cCN(){},
aP4:function aP4(d,e,f){this.c=d
this.d=e
this.a=f},
aDb:function aDb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDc:function aDc(d,e){this.e=d
this.a=e},
bMK:function bMK(){},
bMM:function bMM(d,e){this.a=d
this.b=e},
bMN:function bMN(d){this.a=d},
bML:function bML(d,e,f){this.a=d
this.b=e
this.c=f},
aCJ:function aCJ(d,e){this.c=d
this.a=e},
bJF:function bJF(d){this.a=d},
bJE:function bJE(d){this.a=d},
aFO:function aFO(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bWm:function bWm(d,e){this.a=d
this.b=e},
bWi:function bWi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWj:function bWj(d){this.a=d},
bWk:function bWk(d,e){this.a=d
this.b=e},
bWl:function bWl(d,e){this.a=d
this.b=e},
Xo:function Xo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBQ:function aBQ(d,e,f,g,h){var _=this
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
abb:function abb(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bHl:function bHl(d){this.a=d},
bHk:function bHk(){},
bHm:function bHm(d){this.a=d},
bHj:function bHj(){},
bH7:function bH7(){},
bH8:function bH8(d){this.a=d},
bHi:function bHi(){},
bHd:function bHd(d){this.a=d},
bHe:function bHe(d){this.a=d},
bHc:function bHc(d,e){this.a=d
this.b=e},
bHf:function bHf(d){this.a=d},
bHb:function bHb(d){this.a=d},
bHg:function bHg(d){this.a=d},
bHa:function bHa(d){this.a=d},
bHh:function bHh(d,e){this.a=d
this.b=e},
bH9:function bH9(d,e){this.a=d
this.b=e},
X1:function X1(d,e){this.e=d
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
ahH:function ahH(d,e,f){this.c=d
this.d=e
this.a=f},
aBV:function aBV(d,e,f){this.e=d
this.f=e
this.a=f},
bIi:function bIi(){},
bIo:function bIo(d){this.a=d},
bIl:function bIl(){},
bIk:function bIk(d){this.a=d},
bIb:function bIb(d){this.a=d},
bIj:function bIj(d,e,f){this.a=d
this.b=e
this.c=f},
bIm:function bIm(d){this.a=d},
bI9:function bI9(d){this.a=d},
bIa:function bIa(){},
bIn:function bIn(d,e){this.a=d
this.b=e},
bIg:function bIg(d){this.a=d},
bIh:function bIh(d){this.a=d},
bIc:function bIc(){},
bId:function bId(d){this.a=d},
bIe:function bIe(d){this.a=d},
bIf:function bIf(d,e){this.a=d
this.b=e},
an3:function an3(d,e){this.c=d
this.a=e},
aY4:function aY4(d){this.a=d},
dg5(d){var x
switch(d){case E.xM:x=D.bCP
break
case E.xI:x=D.by3
break
case E.xJ:x=D.bBC
break
case E.xK:x=D.bB2
break
case E.xL:x=D.bzx
break
default:x=C.a6
break}return x}},D,K,V
J=c[1]
A=c[0]
C=c[2]
L=c[202]
M=c[215]
N=c[185]
O=c[217]
E=c[218]
P=c[166]
Q=c[214]
F=c[134]
R=c[161]
G=c[77]
I=c[213]
S=c[196]
T=c[216]
H=c[212]
U=c[79]
B=a.updateHolder(c[53],B)
D=c[211]
K=c[72]
V=c[78]
B.Dr.prototype={
gap(d){return this.a.a}}
B.b34.prototype={
gpV(){return C.e.cU(this.b,0,new B.b35())},
gaBf(){var x=this.a
return x===0?0:C.k.af(this.gpV()/x,0,1)}}
B.zM.prototype={
gbyj(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b4J(),w),w.i("w.E"))
return x},
gbyE(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b4K(),w),w.i("w.E"))
return x},
awq(d,e){var x=e==null?this.a:e
return new B.zM(x,d==null?this.b:d)},
ij(d){return this.awq(null,d)},
aw9(d){return this.awq(d,null)}}
B.DB.prototype={
d_(){var x=y.T,w=this.x=A.eP(this).G(A.cC($.co(),new B.b4G(),y.v,x),x)
if(w!=null)A.ji(new B.b4H(this,w),y.H)
return D.azE},
bX(d,e){return this.bvL(0,e)},
bvL(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bX=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ij(!0))
u=$.P().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.P("expenses").ck(0).U("wedding_id",e).cJ(0,"created_at",!0),$async$bX)
case 2:v.sa4(0,new t.zM(s,r.d9(g,B.dIQ(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bX,w)},
Ve(d){return this.blJ(d)},
blJ(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Ve=A.j(function(e,f){if(e===1)return A.k(f,w)
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
u.j(0,"due_date",t==null?null:C.e.gJ(t.cg().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.d3(0,u).ck(0).dM(0),$async$Ve)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cYm(s))
v.sa4(0,r.aw9(u))
return A.l(null,w)}})
return A.m($async$Ve,w)},
Oj(d){return this.bBb(d)},
bBb(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Oj=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lb(v.ga4(0).b,new B.b4I(d))
m=$.P().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bh(0,A.R(["paid",!n.w,"updated_at",new A.ae(Date.now(),0,!1).cg()],u,u)).U("id",d).ck(0).dM(0),$async$Oj)
case 2:t=l.cYm(f)
u=v.ga4(0)
m=A.a([],y.r)
for(s=v.ga4(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.G)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa4(0,u.aw9(m))
return A.l(null,w)}})
return A.m($async$Oj,w)}}
B.Mf.prototype={}
B.a7B.prototype={
gap(d){return this.a}}
B.abw.prototype={
I(){return"_BudgetFilter."+this.b}}
B.CV.prototype={
S(){return new B.abx(D.IZ)}}
B.abx.prototype={
Tp(d){return this.bbE(d)},
bbE(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Tp=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKj(u))
x=1
break}u.p(new B.bKk(u))
t=u.gR()
s=$.co()
r=t.a_(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a_(0,s.gaX(),y.Z).ai(0,d),$async$Tp)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Tp,w)},
ad(){this.aq()
A.ji(new B.bKB(this),y.H)},
PU(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$PU=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gR()
n=$.alG()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.Cw(),y.b).b
s=t==null?null:t.b
r=C.e.cU(o.a_(0,n,y.g).b,0,new B.bKf())
t=o.a_(0,$.co(),y.v).b
q=t==null?null:t.gcv()
t=u.c
t.toString
x=3
return A.d(A.bP(null,new B.bKg(q,s,new B.bKh(),r),!1,t,!0,!0,null,y.B),$async$PU)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Ve(new G.i2("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$PU,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gR(),a2=a1.G($.Cw(),y.b),a3=a1.G($.HO(),y.d),a4=a1.G($.alG(),y.g),a5=a2.b,a6=a5==null?e:B.dI_(a5,a3.b)
a5=A.j_(a1.G($.iY(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iS
a5=y.T
w=a1.G(A.cC($.co(),new B.bKp(),y.v,a5),a5)
if(f.y){a1=f.gap2()
return A.cO(e,C.cQ,A.nG(C.eZ,40,A.a([C.fu,D.aH2,K.cUV(a1,e),new B.aBV(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.da(x,new B.bKq(w))
a1=a1.G($.uy(),y.l)
u=a1.gv(a1)
t=new B.bKz(u==null?C.fc:u)
a1=y._
a5=A.U(a4.gbyj(),a1)
for(s=v.a,r=J.c8(s),q=r.gX(s),p=v.b,o=v.$ti.i("fO<1>"),n=new A.fO(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i2("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbyE(0),a1)
for(s=r.gX(s),o=new A.fO(s,p,o),p=y.r;o.q();){r=s.gE(s)
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
n.push(new G.i2("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.db6(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.db6(q)
break
default:a1=e}h=C.e.cU(q,0,new B.bKr())
s=a6==null
if(s)g=D.bz6
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bKs(),p),p.i("w.E"))}if(s)a1=D.bXw
else{s=f.gaQO()
r=y.p
p=A.a([new A.pp(A.a([new A.qG(s,"Nova despesa",e)],r),e),D.aH8,K.cUV(f.gap2(),w),new B.aP4(a6,new B.bKt(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aI(a6.gpV(),!1)
n=a5.length
m=n===1?d:a0
l=A.aI(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c1("N\xfameros",e,A.a([new A.DM(A.a([new A.l7("Gasto",o,""+n+" "+m,e),new A.l7("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.m9(A.a([new A.ei("Todos",l===D.IZ,n+m,new B.bKu(f),e),new A.ei("Pendentes",l===D.abw,m,new B.bKv(f),e),new A.ei("Pagos",l===D.abv,n,new B.bKw(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aFO(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c1("Pagamentos",e,o,16,e))
a1=A.a([new A.h3(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDb(g,f.x,new B.bKx(f),e))
p.push(new A.c1("Categorias",e,a1,16,e))
p.push(new A.c1("Exportar",e,A.a([new F.DC("Gastos e parceiros",!1,new B.bKy(f),e)],r),16,e))
a1=A.nG(C.eZ,40,p,e,!0,!1)}return A.cO(e,C.cQ,a1,!0,e)},
Io(d){return this.aXJ(d)},
aXJ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Io=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aTt(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Io)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gR().a_(0,$.Cw().gaX(),y.x).ZX(r),$async$Io)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a1(H.HO)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Io,w)}}
B.aP4.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpV()>0?"Gastos "+A.aI(t.gpV(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vg(new A.he("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hD,0,"por definir","\u2014")}x=C.k.aN(t.gaBf()*100)
w=s-t.gpV()<0?"Acima do teto":"Ainda tens"
v=A.aI(Math.abs(s-t.gpV()),!1)
s=A.aI(s,!1)
u=t.gaBf()
return A.aX(A.vg(H.a1z,"Gastos "+A.aI(t.gpV(),!1)+" \xb7 "+x+"% do teto",w,C.hD,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDb.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dy(s,0,A.es(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.G)(r),++w)p.push(new B.aDc(r[w],null))
q=A.a([A.eR(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.he(u,v.e,!0,null))}return A.z(q,C.E,C.h,C.l)}}
B.aDc.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cC($.co(),new B.bMK(),y.v,m),m)
if(l==null)x=C.r_
else{m=e.G($.d0k().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r_:m}m=A.a([],y.s)
for(w=B.dg5(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bMM(this,d)
if(w)return A.jY(!1,!1,p,v,A.aI(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mJ("P\xf4r teto",new B.bML(this,d,e),!0,p))
w=A.aI(o.b,!1)
u=A.aI(n,!1)
s=y.p
q=A.a([A.aJ(new A.a3W(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aD,new B.an3(m,p)],s))
return A.jY(!1,!1,p,v,w+" de "+u,o.a,A.z(q,C.dJ,C.h,C.J))}}
B.aCJ.prototype={
u(d){var x,w,v=null,u=$.at,t=$.fi.cc(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fR(r,A.aJ(p==null?A.kJ(A.b8(C.i7,u,v,v,v),C.t,!0):A.pl(p,144,new B.bJE(u),!1,C.bE,A.wr(),!1,v,v,v),48,48),C.bc)
p=A.h(q.b,1,C.a1,v,v,D.c3d,v,v)
x=A.b8(C.i9,u,v,v,14)
w=q.d
q=w>0?q.gPr()+" \xb7 "+A.aI(w,!1):q.gPr()
w=y.p
return new A.S(C.d0,A.aX(A.x(v,A.N(A.a([r,C.af,A.a4(A.z(A.a([p,C.j4,A.N(A.a([x,C.dY,new A.dg(1,C.ba,A.h(q,1,C.a1,v,v,A.aH(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bl,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b8(C.ib,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.x),v,v,v,C.ed,v,v,v),new B.bJF(d),v),v)}}
B.aFO.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.Jz(A.a([new A.he("+ Nova despesa",this.f,!0,j)],y.p),C.eR,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aAY
x=new B.bWm(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.G)(i),++t){s=i[t]
r=s.a
q=C.f.cW(r,":pay:")
r=C.f.b1(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gJ(r.split(" \xb7 "))
n=A.aI(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.dbA(m)
v.push(new A.t8(new A.cf(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bWi(d,e,s,q),A.HI(m)===C.f5,j))
continue}p=r?new B.bWj(d):new B.bWk(x,s)
v.push(new B.Xo(s,p,r||s.w?j:new B.bWl(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xo&&v[k-1] instanceof B.Xo)u.push(C.iI)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAE)
return A.z(i,C.E,C.h,C.l)}}
B.Xo.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aI(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dbA(w))
v=C.e.a0(v," \xb7 ")
if(u)u=D.aGO
else{u=this.e
u=u!=null?new A.mJ("Marcar pago",u,!0,null):D.aGV}return A.jY(!1,!1,null,this.d,v,x.c,u)}}
B.aBQ.prototype={}
B.NG.prototype={
S(){var x=$.aa()
return new B.abb(new A.aE(C.ak,x),new A.aE(C.ak,x))}}
B.abb.prototype={
ad(){var x=this
x.aq()
x.d.an(0,new B.bHl(x))
x.e.an(0,new B.bHm(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a7()},
gahq(){var x=C.f.B(this.e.a.a)
x=A.aW(x," ","")
return A.eT(A.aW(x,",","."))},
aS0(){var x,w,v,u,t=this,s=t.gahq()
t.p(new B.bH8(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.al(w,!1)
v=t.w
u=v?null:t.f
w.ae(new B.aBQ(x,s,u,t.r,v))},
arM(d,e,f,g,h){var x=null,w=h?C.fm:x,v=y.p,u=A.a4(A.z(A.a([A.h(d,x,x,x,x,C.a9,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.bp:x,s=f?x:A.bz(C.ks,1.5),r=f?S.vk:x
return A.bh(x,!0,x,A.cp(C.bu,A.x(x,A.N(A.a([u,A.x(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.ap),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.cL,new A.I(x,x,w,x,x,x,C.x),x,x,x,C.hr,x,x,x),C.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bi4(d,e,f,g){return this.arM(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahq()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bHi()
t=y.w
s=A.aS(d,k,t).w
r=y.p
q=A.a([D.c7q],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k))
q=A.N(A.a([A.a4(A.z(q,C.G,C.h,C.l),1),A.bh(k,!0,k,A.cp(k,A.x(k,C.hz,C.r,k,k,C.bV,k,44,k,k,k,k,44),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHd(d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c8v,A.N(A.a([V.d4L(A.cr(k,C.a6,!1,k,!0,C.y,k,A.ct(),l.e,k,k,k,k,k,2,D.aER,C.W,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.fI,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aad,!0,C.dA,k,C.b0,k,k,k,k)),C.bj,D.c7U],r),C.ec,C.bR,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cXv(v)+" no teto":"Passa o teto em "+B.cXv(-v)
o.push(A.h(m,k,k,k,k,A.aH(k,k,n?C.V:C.bX,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c76)
p=A.x(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a3,k,k,p,k,k,C.x),k,k,k,C.bn,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bz(C.bX,1.5):k
n=A.a([p,C.a_,new A.S(C.d0,o,k),A.x(C.bb,A.cr(k,C.a6,!1,k,!0,C.y,k,A.ct(),x,k,k,k,k,k,2,D.aEv,C.W,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fh,!0,C.au,k,C.hb,k,k,k,k),C.r,k,k,new A.I(C.a3,k,m,n,k,k,C.x),k,52,k,C.fq,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bL8)
n.push(C.a_)
n.push(new U.a1b(l.r,new B.bHe(l),k))
n.push(C.a_)
n.push(new A.S(C.d0,A.h("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bi4("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHf(l)),l.arM("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHg(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aD(p)))
m=l.f
m.toString
m=A.p(w.$1(A.av(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aL(w)}o.push(A.bh(k,!0,k,A.cp(C.bu,A.aJ(A.N(A.a([D.azo,A.h(w,k,k,k,k,C.cc,k,k),C.dY,C.jT],r),C.v,C.h,C.l,0,k),56,k),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHh(l,d),k,k,k,k,k,k,!1,C.aE),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.x(k,A.z(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a3,k,k,x,k,k,C.x),k,k,k,C.cr,k,k,k))
n.push(C.a_)
n.push(D.ccY)
x=A.dR(A.z(n,C.E,C.h,C.l),C.y,k,C.ee,k,C.av)
t=A.aS(d,C.b5,t).w
w=A.cb(u?C.z:C.z.cc(0.35),k,k,C.t,k,k,C.aa,k,k,C.eH)
return new A.S(new A.a3(0,0,0,s.f.d),A.z(A.a([new A.S(C.jE,q,k),new A.dg(1,C.ba,x,k),new A.S(new A.a3(20,16,20,20+t.r.d),A.aJ(A.bB(A.h(u?"Guardar \xb7 "+B.cXv(j):"Guardar",k,k,k,k,k,k,k),l.gaS_(),w),52,k),k)],r),C.E,C.h,C.J),k)}}
B.X1.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.Cw(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eK(new A.a6(j,new B.bMO(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.alG(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bMP(l),w),w.i("w.E"))
C.e.cq(v,new B.bMQ())
j=y.T
u=e.G(A.cC($.co(),new B.bMR(),y.v,j),j)
t=B.dg5(l.e.c)
if(u==null)s=I.Ff
else{j=e.G($.aVk().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Ff
j=J.da(j,new B.bMS(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aS(d,k,y.w).w
w=A.bN(A.x(k,k,C.r,k,k,new A.I(C.bF,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ax(d).ok.r,k,k)
q=A.a4(new B.ahH("Gasto",A.aI(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a_,r,C.aA,A.N(A.a([q,C.ae,A.a4(A.aX(new B.ahH("Teto \xb7 tocar para mudar",p===0?"Definir":A.aI(p,!1),k),new B.bMT(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bh,A.h("Contratado na app",k,k,k,k,A.ax(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.G)(s),++n)w.push(new B.aCJ(s[n],k))
C.e.n(p,w)}p.push(C.bh)
p.push(A.h("Despesas",k,k,k,k,A.ax(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKy)
else for(n=0;n<v.length;v.length===w||(0,A.G)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.is,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aT(C.j.k(A.aD(q)),2,"0")+"/"+C.f.aT(C.j.k(A.av(q)),2,"0")+"/"+A.aL(q),k,k,k,k,k,k,k)
p.push(A.jm(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.N(A.a([A.h(A.aI(m.f,!1),k,k,k,k,D.c5g,k,k),C.ab,new P.D5(m.w,new B.bMU(e,m),k,$.at,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J0,k)],o),C.v,C.h,C.J,0,k),k))}return A.bA(!0,new A.e9(new A.aR(0,1/0,0,j.a.b*0.8),A.d4(p,k,L.CN,k,k,!1,!0),k),k,C.Z,!0)}}
B.ahH.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.z(A.a([A.h(this.c,x,x,x,x,C.be,x,x),C.ar,A.h(this.d,x,x,x,x,M.aa0,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.I(C.a3,x,x,w,x,x,C.x),x,x,x,C.cU,x,x,x)}}
B.aBV.prototype={
b9(d,e){var x,w=y.t,v=e.G(A.cC($.co(),new B.bIi(),y.v,w),w),u=e.G($.d0j(),y.o)
w=e.G($.uy(),y.l)
x=w.gv(w)
return A.hC(u,new B.bIj(this,new B.bIo(x==null?C.fc:x),v),new B.bIk(e),new B.bIl(),!1,!0,!1)}}
B.an3.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.at,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
t=$.fi
s=new A.b5(999,999)
r=new A.bf(o.cc(0.25),1,C.aj,-1)
q=A.b8(C.i9,o,p,p,13)
t=A.x(p,A.N(A.a([q,C.rJ,new A.dg(1,C.ba,A.h(u,1,C.a1,p,p,new A.Q(!0,o,p,p,p,p,14,C.d2,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b8(C.ib,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afj,new A.I(t,p,new A.dL(r,r,r,r),new A.cy(s,s,s,s),p,p,C.x),p,p,p,D.atY,p,p,p)
m.push(new A.jr(new A.n2(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.i9(t,new B.aY4(d),p,p),p))}return A.e3(C.bf,m,C.r,C.bk,6,6)}}
var z=a.updateTypes(["C(i2)","T(T,i2)","v(i2,i2)","T(T,Dr)","zM()","F<~>(c?)","F<~>()","NG(O)","C(Dr)","F<lR>()","X1(O)","~(i2)","~()","C(nn)","C(rI)","i2(a5<c,@>)","DB()"])
B.cGf.prototype={
$1(d){return this.aEx(d)},
aEx(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.G(A.cC($.co(),new B.cGb(),y.v,f),f)
f=J.a7(e)
if(f.gY(e)){v=D.bz7
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.q();)u.push(t.gE(t).a)
t=$.P()
s=t.b
s===$&&A.b()
r=y.G
q=s.P("budgets").ai(0,"wedding_id, total").dK("wedding_id",u).b3(new B.cGc(),r)
p=t.b.P("budget_categories").ai(0,"wedding_id, amount").dK("wedding_id",u).b3(new B.cGd(),r)
o=t.b.P("expenses").ai(0,"wedding_id, amount, paid").dK("wedding_id",u).b3(new B.cGe(),r)
r=y.N
u=y.i
t=A.E(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bd(a3,s),m=A.u(n),n=new A.ag(n,n.gA(n),m.i("ag<V.E>")),m=m.i("V.E")
case 4:if(!n.q()){x=5
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
t.j(0,A.Y(k.h(l,"wedding_id")),A.du(k.h(l,"total")))
x=4
break
case 5:j=A.E(r,u)
d=J
x=6
return A.d(p,$async$$1)
case 6:n=d.bd(a3,s),m=A.u(n),n=new A.ag(n,n.gA(n),m.i("ag<V.E>")),m=m.i("V.E")
case 7:if(!n.q()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.Y(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=A.aC(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=A.E(r,u)
d=J
x=9
return A.d(o,$async$$1)
case 9:u=d.bd(a3,s),s=A.u(u),u=new A.ag(u,u.gA(u),s.i("ag<V.E>")),s=s.i("V.E")
case 10:if(!u.q()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.Y(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=A.aC(n.h(r,"amount"))
if(r==null)r=null
g.j(0,i,m+(r==null?0:r))
x=10
break
case 11:u=A.a([],y.n)
for(f=f.gX(e);f.q();){s=f.gE(f)
r=s.a
n=t.h(0,r)
s=n==null?s.as:n
if(s==null)s=0
n=j.h(0,r)
if(n==null)n=0
m=g.h(0,r)
u.push(new A.aMl([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1292}
B.cGb.prototype={
$1(d){return d.c},
$S:154}
B.cGc.prototype={
$1(d){return d},
$S:29}
B.cGd.prototype={
$1(d){return d},
$S:29}
B.cGe.prototype={
$1(d){return d},
$S:29}
B.b35.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b4J.prototype={
$1(d){return d.w},
$S:z+0}
B.b4K.prototype={
$1(d){return!d.w},
$S:z+0}
B.b4G.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.b4H.prototype={
$0(){return this.a.bX(0,this.b)},
$S:1}
B.b4I.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKj.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKk.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bKB.prototype={
$0(){return this.a.gR().a_(0,$.Cw().gaX(),y.x).Ze(0).ea(new B.bKA())},
$S:1}
B.bKA.prototype={
$1(d){},
$S:11}
B.bKf.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKh.prototype={
$1(d){return A.Cs(C.k.a8(d,0),A.aQ("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKi(),null)+" \u20ac"},
$S:110}
B.bKi.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bKg.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a0(v," \xb7 ")
u=x&&u>0?u:null
return new B.NG(v,u,w.d,null)},
$S:z+7}
B.bKp.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bKq.prototype={
$1(d){return d.x!==C.e8&&d.b===this.a},
$S:56}
B.bKz.prototype={
$2(d,e){return A.jd(d,this.a.l8(e))},
$1(d){return this.$2(d,null)},
$S:1295}
B.bKr.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKs.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bKt.prototype={
$0(){return this.a.Io(this.b.a)},
$S:0}
B.bKu.prototype={
$0(){var x=this.a
return x.p(new B.bKo(x))},
$S:0}
B.bKo.prototype={
$0(){return this.a.w=D.IZ},
$S:0}
B.bKv.prototype={
$0(){var x=this.a
return x.p(new B.bKn(x))},
$S:0}
B.bKn.prototype={
$0(){return this.a.w=D.abw},
$S:0}
B.bKw.prototype={
$0(){var x=this.a
return x.p(new B.bKm(x))},
$S:0}
B.bKm.prototype={
$0(){return this.a.w=D.abv},
$S:0}
B.bKx.prototype={
$0(){var x=this.a
return x.p(new B.bKl(x))},
$S:0}
B.bKl.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bKy.prototype={
$0(){return B.Cl(this.a.gR().a_(0,$.co(),y.v).b.a)},
$S:z+9}
B.cCE.prototype={
$1(d){var x=null,w=this.b
return new A.eQ(A.h(this.a,x,x,x,x,x,x,x),A.cr(x,C.a6,!0,x,!0,C.y,x,A.ct(),w,x,x,x,x,x,2,D.aF3,C.W,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.fI,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b0,x,x,x,x),A.a([A.cE(C.cO,x,x,new B.cCC(d),x,x),A.bB(C.du,new B.cCD(d,w),x)],y.p),x)},
$S:19}
B.cCC.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.cCD.prototype={
$0(){var x=A.al(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aW(w," ","")
return x.ae(A.eT(A.aW(w,",",".")))},
$S:0}
B.cCN.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bX(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bX(2100,1,1,0,0):x)},
$S:z+2}
B.bMK.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bMM.prototype={
$0(){return A.bP(null,new B.bMN(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bMN.prototype={
$1(d){return new B.X1(this.a.e.a,null)},
$S:z+10}
B.bML.prototype={
$0(){return B.akf(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bJF.prototype={
$0(){var x=this.a
A.al(x,!1).bj()
A.ac(x).ak("/bookings",null,y.X)},
$S:0}
B.bJE.prototype={
$3(d,e,f){return A.kJ(A.b8(C.i7,this.a,null,null,null),C.t,!0)},
$S:95}
B.bWm.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.alG().gaX(),y.h).Oj(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a1(A.bZ(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bWi.prototype={
$0(){var x=this
return A.rz(x.a,x.b,C.f.bD(x.c.a,x.d+5),null,null)},
$S:0}
B.bWj.prototype={
$0(){return A.ac(this.a).ak("/bookings",null,y.X)},
$S:0}
B.bWk.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bWl.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHl.prototype={
$0(){return this.a.p(new B.bHk())},
$S:0}
B.bHk.prototype={
$0(){},
$S:0}
B.bHm.prototype={
$0(){return this.a.p(new B.bHj())},
$S:0}
B.bHj.prototype={
$0(){},
$S:0}
B.bH7.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bH8.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHi.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:38}
B.bHd.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.bHe.prototype={
$1(d){var x=this.a
return x.p(new B.bHc(x,d))},
$S:136}
B.bHc.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHf.prototype={
$0(){var x=this.a
return x.p(new B.bHb(x))},
$S:0}
B.bHb.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHg.prototype={
$0(){var x=this.a
return x.p(new B.bHa(x))},
$S:0}
B.bHa.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHh.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ae(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cMx(v.b,A.bX(A.aL(t)-1,1,1,0,0),r,A.bX(A.aL(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bH9(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bH9.prototype={
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
if(w==null)w=A.bX(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bX(2100,1,1,0,0):x)},
$S:z+2}
B.bMR.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bMS.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bMT.prototype={
$0(){var x=this.c
return B.akf(this.a,this.b,x.a,x.d)},
$S:0}
B.bMU.prototype={
$1(d){return this.a.a_(0,$.alG().gaX(),y.h).Oj(this.b.a)},
$S:142}
B.bIi.prototype={
$1(d){return d.c},
$S:154}
B.bIo.prototype={
$2(d,e){return A.jd(d,this.a.l8(e))},
$S:42}
B.bIl.prototype={
$0(){return D.bLa},
$S:87}
B.bIk.prototype={
$2(d,e){return A.Jz(A.a([new A.he("Tentar outra vez",new B.bIb(this.a),!1,null)],y.p),C.eR,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1296}
B.bIb.prototype={
$0(){return this.a.aj($.d0j())},
$S:0}
B.bIj.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIm(g),e=new B.bIn(g,this.b),d=J.c8(a4),a0=d.cU(a4,0,new B.bIc()),a1=d.cU(a4,0,new B.bId(f)),a2=d.cU(a4,0,new B.bIe(e)),a3=y.N
a3=A.E(a3,a3)
for(x=J.an(this.c);x.q();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.BR(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bD(s,1))}x=A.aI(a1,!1)
w=a0>0
v=w?"de "+A.aI(a0,!1):"gastos"
u=w?C.k.af(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aN(a1/a0*100)+"% dos tetos":""
x=A.vg(i,""+t+" "+r+w,"Todos os eventos",C.hD,u,v,x)
v=y.p
u=A.a([new A.DM(A.a([new A.l7("Gasto",A.aI(a1,!1),h,i),new A.l7("Por pagar",A.aI(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.et(a4,0,y.A),r=J.an(t.a),q=t.b,t=new A.bW(r,q,A.u(t).i("bW<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.am(A.c_())
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
k.push("por pagar "+A.aI(j[3]+e.$1(j[0]),!1))}n=A.z(A.a([n,C.aU,A.h(C.e.a0(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.i9(A.x(i,A.N(A.a([new A.bI(1,C.at,n,i),C.ae,A.h(A.aI(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.bj,C.jT],v),C.v,C.h,C.l,0,i),C.r,C.as,C.cL,i,i,i,i,C.cj,i,i,i),new B.bIf(o,g),i,i))
C.e.n(w,l)}return A.z(A.a([x,new A.c1("N\xfameros",i,u,16,i),new A.c1("Por evento \xb7 "+d,i,w,16,i),D.aAG],v),C.E,C.h,C.l)},
$S:1297}
B.bIm.prototype={
$1(d){return J.da(this.a.e,new B.bI9(d)).cU(0,0,new B.bIa())},
$S:189}
B.bI9.prototype={
$1(d){return d.b===this.a&&d.x!==C.e8},
$S:56}
B.bIa.prototype={
$2(d,e){return d+e.w},
$S:493}
B.bIn.prototype={
$1(d){return J.da(this.a.e,new B.bIg(d)).cU(0,0,new B.bIh(this.b))},
$S:189}
B.bIg.prototype={
$1(d){return d.b===this.a&&d.x!==C.e8},
$S:56}
B.bIh.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:493}
B.bIc.prototype={
$2(d,e){return d+e.a[2]},
$S:235}
B.bId.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:235}
B.bIe.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:235}
B.bIf.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aY4.prototype={
$0(){return A.ac(this.a).ak("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dIQ","cYm",15)
w(B,"dIP","dpI",16)
v(B.DB.prototype,"giD","d_",4)
var t
u(t=B.abx.prototype,"gap2","Tp",5)
v(t,"gaQO","PU",6)
v(B.abb.prototype,"gaS_","aS0",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bt,[B.cGf,B.cGb,B.cGc,B.cGd,B.cGe,B.b4J,B.b4K,B.b4G,B.b4I,B.bKA,B.bKh,B.bKi,B.bKg,B.bKp,B.bKq,B.bKz,B.bKs,B.cCE,B.bMK,B.bMN,B.bJE,B.bWm,B.bH7,B.bHi,B.bHe,B.bMO,B.bMP,B.bMR,B.bMS,B.bMU,B.bIi,B.bIj,B.bIm,B.bI9,B.bIn,B.bIg])
x(A.L,[B.Dr,B.b34,B.zM,B.Mf,B.a7B,B.aBQ])
x(A.cJ,[B.b35,B.bKf,B.bKr,B.cCN,B.bMQ,B.bIo,B.bIk,B.bIa,B.bIh,B.bIc,B.bId,B.bIe])
w(B.DB,A.f9)
x(A.bK,[B.b4H,B.bKj,B.bKk,B.bKB,B.bKt,B.bKu,B.bKo,B.bKv,B.bKn,B.bKw,B.bKm,B.bKx,B.bKl,B.bKy,B.cCC,B.cCD,B.bMM,B.bML,B.bJF,B.bWi,B.bWj,B.bWk,B.bWl,B.bHl,B.bHk,B.bHm,B.bHj,B.bH8,B.bHd,B.bHc,B.bHf,B.bHb,B.bHg,B.bHa,B.bHh,B.bH9,B.bMT,B.bIl,B.bIb,B.bIf,B.aY4])
w(B.abw,A.ff)
w(B.CV,A.dB)
w(B.abx,A.dv)
x(A.M,[B.aP4,B.aDb,B.aCJ,B.Xo,B.ahH,B.an3])
x(A.ev,[B.aDc,B.aFO,B.X1,B.aBV])
w(B.NG,A.H)
w(B.abb,A.a1)})()
A.bq(b.typeUniverse,JSON.parse('{"DB":{"f9":["zM"]},"NG":{"H":[],"e":[],"f":[]},"X1":{"H":[],"e":[],"f":[]},"CV":{"H":[],"e":[],"f":[]},"abx":{"a1":["CV"]},"aP4":{"M":[],"e":[],"f":[]},"aDb":{"M":[],"e":[],"f":[]},"aDc":{"H":[],"e":[],"f":[]},"aCJ":{"M":[],"e":[],"f":[]},"aFO":{"H":[],"e":[],"f":[]},"Xo":{"M":[],"e":[],"f":[]},"abb":{"a1":["NG"]},"ahH":{"M":[],"e":[],"f":[]},"aBV":{"H":[],"e":[],"f":[]},"an3":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{l:x("aw<f7>"),k:x("aw<t<rI>>"),u:x("aw<t<fG>>"),o:x("aw<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("aw<a5<c,t<c>>>"),x:x("zp"),b:x("uL"),d:x("rN"),Z:x("oh"),v:x("eb"),_:x("i2"),h:x("DB"),g:x("zM"),D:x("r<Dr>"),r:x("r<i2>"),Q:x("r<l7>"),F:x("r<ei>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7B>"),c:x("r<Mf>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fG>"),t:x("t<fk>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a5<c,@>"),w:x("ds"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lR"),N:x("c"),B:x("aBQ"),q:x("dp"),i:x("T"),z:x("@"),S:x("v"),X:x("L?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afj=new A.aR(0,1/0,32,1/0)
D.atY=new A.a3(8,5,6,5)
D.cgC=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azo=new A.bI(1,C.at,D.cgC,null)
D.byP=x([],y.r)
D.azE=new B.zM(!1,D.byP)
D.aAE=new A.h3("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAG=new A.h3("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aAY=new A.h3("Sem pagamentos nesta vista.",8,null)
D.aEv=new A.dD(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aER=new A.dD(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aF3=new A.dD(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGO=new A.dT("Pago",C.cV,null)
D.aGV=new A.dT("Por pagar",C.hB,null)
D.aH2=new A.lc("Or\xe7amento","Todos os teus eventos",null)
D.aH8=new A.lc("Or\xe7amento",null,null)
D.by3=x(["catering"],y.s)
D.bz6=x([],y.D)
D.bz7=x([],y.n)
D.bzx=x(["flowers_decor"],y.s)
D.bB2=x(["music_dj","bands_musicians"],y.s)
D.bBC=x(["photography"],y.s)
D.bCP=x(["venue"],y.s)
D.aEk=new A.vb("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kA,null)
D.bKy=new A.S(C.fU,D.aEk,null)
D.c8S=new A.D("A despesa precisa de um t\xedtulo",null,C.mj,null,null,null,null,null,null,null)
D.bL8=new A.S(T.Nu,D.c8S,null)
D.bLa=new A.S(O.uK,C.f0,null)
D.bXw=new A.vQ(!1,6,!0,null)
D.c3d=new A.Q(!0,C.z,null,null,null,null,14,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5g=new A.Q(!0,null,null,null,null,null,null,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aad=new A.Q(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c76=new A.D("Indica um valor v\xe1lido",null,C.mj,null,null,null,null,null,null,null)
D.c7q=new A.D("Nova despesa",null,C.bi,null,null,null,null,null,null,null)
D.c7U=new A.D("\u20ac",null,D.aad,null,null,null,null,null,null,null)
D.c8v=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.ccY=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.c_,null,null,null,null,null,null,null)
D.IZ=new B.abw(0,"all")
D.abv=new B.abw(1,"paid")
D.abw=new B.abw(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dW8","d0j",()=>C.bO.$1$1(new B.cGf(),y.m))
x($,"dWZ","alG",()=>A.mT(B.dIP(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["XJkeDIIbIn9TKBcbHSwGVlmWtNA="]=a.current})($__dart_deferred_initializers__);