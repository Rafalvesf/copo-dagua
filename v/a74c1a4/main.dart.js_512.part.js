((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,E,P,Q,F,R,G,I,S,T,H,U,B={cG4:function cG4(){},cG0:function cG0(){},cG1:function cG1(){},cG2:function cG2(){},cG3:function cG3(){},
dHJ(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v)u.push(new B.Dr(x[v]))
return new B.b31(d.b,u)},
Dr:function Dr(d){this.a=d},
b31:function b31(d,e){this.a=d
this.b=e},
b32:function b32(){},
cY6(d){var x="category",w="due_date",v=J.a7(d),u=A.Y(v.h(d,"id")),t=A.Y(v.h(d,"wedding_id")),s=A.Y(v.h(d,"title")),r=B.dE_(B.dcM(A.B(v.h(d,x)))),q=B.dcM(A.B(v.h(d,x))),p=A.du(v.h(d,"amount")),o=v.h(d,w)==null?null:A.db(A.Y(v.h(d,w)))
v=A.dU(v.h(d,"paid"))
return new G.i2(u,t,s,r,q,p,o,v===!0)},
dcM(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dE_(d){var x
A:{if("venue"===d){x=E.xM
break A}if("catering"===d){x=E.xI
break A}if("photography"===d){x=E.xJ
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xK
break A}if("flowers_decor"===d){x=E.xL
break A}x=null
break A}return x},
dpr(){return new B.DB()},
zM:function zM(d,e){this.a=d
this.b=e},
b4G:function b4G(){},
b4H:function b4H(){},
DB:function DB(){this.b=this.x=null},
b4D:function b4D(){},
b4E:function b4E(d,e){this.a=d
this.b=e},
b4F:function b4F(d){this.a=d},
Cl(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cl=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akl(),$async$Cl)
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
return A.d(t.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").dK("booking_id",u).tr(0,"created_at"),$async$Cl)
case 9:q=f
case 7:u=$.P()
t=u.b
t===$&&A.b()
x=10
return A.d(t.P("expenses").ai(0,"title, category, amount, due_date, paid").U("wedding_id",d).tr(0,"due_date"),$async$Cl)
case 10:p=f
x=11
return A.d(u.b.P("budget_categories").ai(0,"name, amount").U("wedding_id",d).tr(0,"position"),$async$Cl)
case 11:o=f
x=12
return A.d(u.b.P("budgets").ai(0,"total").U("wedding_id",d).cf(),$async$Cl)
case 12:n=f
m=F.cXS(F.cD3(s),"Gastos e parceiros",r,q,!1)
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
if(k==null)k=0}t.push(new B.a7B(i,k))}l=n==null?null:F.cYp(J.i(n,"total"))
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
dmL(){return new B.CV(null)},
aTq(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aTq=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.fO(!0,new B.cCt(e,new A.aE(new A.bD(u,C.aE,C.ax),$.aa())),d,y.i),$async$aTq)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTq,w)},
ake(d,e,f,g){return B.dDN(d,e,f,g)},
dDN(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$ake=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aTq(d,"Teto para "+f,g),$async$ake)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a_(0,$.Cw().gaX(),y.x).Om(f,r),$async$ake)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a1(H.HN)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ake,w)},
daQ(d){var x=A.U(d,y._)
C.e.cq(x,new B.cCC())
return x},
dbj(d){var x=C.f.aT(C.j.k(A.aD(d)),2,"0"),w=C.f.aT(C.j.k(A.av(d)),2,"0"),v=A.aL(d)===A.aL(new A.ae(Date.now(),0,!1))?"":"/"+A.aL(d)
return x+"/"+w+v},
cXf(d){var x,w,v,u
if(d===C.k.hx(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.aX(w,".",",")}v=x.split(",")
u=A.Cs(v[0],A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bH3(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abv:function abv(d,e){this.a=d
this.b=e},
CV:function CV(d){this.a=d},
abw:function abw(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bKf:function bKf(d){this.a=d},
bKg:function bKg(d){this.a=d},
bKx:function bKx(d){this.a=d},
bKw:function bKw(){},
bKb:function bKb(){},
bKd:function bKd(){},
bKe:function bKe(){},
bKc:function bKc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKl:function bKl(){},
bKm:function bKm(d){this.a=d},
bKv:function bKv(d){this.a=d},
bKn:function bKn(){},
bKo:function bKo(){},
bKp:function bKp(d,e){this.a=d
this.b=e},
bKq:function bKq(d){this.a=d},
bKk:function bKk(d){this.a=d},
bKr:function bKr(d){this.a=d},
bKj:function bKj(d){this.a=d},
bKs:function bKs(d){this.a=d},
bKi:function bKi(d){this.a=d},
bKt:function bKt(d){this.a=d},
bKh:function bKh(d){this.a=d},
bKu:function bKu(d){this.a=d},
cCt:function cCt(d,e){this.a=d
this.b=e},
cCr:function cCr(d){this.a=d},
cCs:function cCs(d,e){this.a=d
this.b=e},
cCC:function cCC(){},
aP1:function aP1(d,e,f){this.c=d
this.d=e
this.a=f},
aD7:function aD7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aD8:function aD8(d,e){this.e=d
this.a=e},
bMG:function bMG(){},
bMI:function bMI(d,e){this.a=d
this.b=e},
bMJ:function bMJ(d){this.a=d},
bMH:function bMH(d,e,f){this.a=d
this.b=e
this.c=f},
aCF:function aCF(d,e){this.c=d
this.a=e},
bJB:function bJB(d){this.a=d},
bJA:function bJA(d){this.a=d},
aFL:function aFL(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bWg:function bWg(d,e){this.a=d
this.b=e},
bWc:function bWc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWd:function bWd(d){this.a=d},
bWe:function bWe(d,e){this.a=d
this.b=e},
bWf:function bWf(d,e){this.a=d
this.b=e},
Xo:function Xo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBM:function aBM(d,e,f,g,h){var _=this
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
aba:function aba(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bHh:function bHh(d){this.a=d},
bHg:function bHg(){},
bHi:function bHi(d){this.a=d},
bHf:function bHf(){},
bH3:function bH3(){},
bH4:function bH4(d){this.a=d},
bHe:function bHe(){},
bH9:function bH9(d){this.a=d},
bHa:function bHa(d){this.a=d},
bH8:function bH8(d,e){this.a=d
this.b=e},
bHb:function bHb(d){this.a=d},
bH7:function bH7(d){this.a=d},
bHc:function bHc(d){this.a=d},
bH6:function bH6(d){this.a=d},
bHd:function bHd(d,e){this.a=d
this.b=e},
bH5:function bH5(d,e){this.a=d
this.b=e},
X1:function X1(d,e){this.e=d
this.a=e},
bMK:function bMK(d){this.a=d},
bML:function bML(d){this.a=d},
bMM:function bMM(){},
bMN:function bMN(){},
bMO:function bMO(d){this.a=d},
bMP:function bMP(d,e,f){this.a=d
this.b=e
this.c=f},
bMQ:function bMQ(d,e){this.a=d
this.b=e},
ahG:function ahG(d,e,f){this.c=d
this.d=e
this.a=f},
aBR:function aBR(d,e,f){this.e=d
this.f=e
this.a=f},
bIe:function bIe(){},
bIk:function bIk(d){this.a=d},
bIh:function bIh(){},
bIg:function bIg(d){this.a=d},
bI7:function bI7(d){this.a=d},
bIf:function bIf(d,e,f){this.a=d
this.b=e
this.c=f},
bIi:function bIi(d){this.a=d},
bI5:function bI5(d){this.a=d},
bI6:function bI6(){},
bIj:function bIj(d,e){this.a=d
this.b=e},
bIc:function bIc(d){this.a=d},
bId:function bId(d){this.a=d},
bI8:function bI8(){},
bI9:function bI9(d){this.a=d},
bIa:function bIa(d){this.a=d},
bIb:function bIb(d,e){this.a=d
this.b=e},
an2:function an2(d,e){this.c=d
this.a=e},
aY1:function aY1(d){this.a=d},
dfP(d){var x
switch(d){case E.xM:x=D.bCO
break
case E.xI:x=D.by2
break
case E.xJ:x=D.bBB
break
case E.xK:x=D.bB1
break
case E.xL:x=D.bzw
break
default:x=C.a5
break}return x}},D,K,V
J=c[1]
A=c[0]
C=c[2]
L=c[200]
M=c[213]
N=c[183]
O=c[215]
E=c[216]
P=c[165]
Q=c[212]
F=c[133]
R=c[160]
G=c[77]
I=c[211]
S=c[194]
T=c[214]
H=c[210]
U=c[79]
B=a.updateHolder(c[53],B)
D=c[209]
K=c[72]
V=c[78]
B.Dr.prototype={
gap(d){return this.a.a}}
B.b31.prototype={
gpU(){return C.e.cU(this.b,0,new B.b32())},
gaBf(){var x=this.a
return x===0?0:C.k.af(this.gpU()/x,0,1)}}
B.zM.prototype={
gbyj(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b4G(),w),w.i("w.E"))
return x},
gbyE(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b4H(),w),w.i("w.E"))
return x},
awq(d,e){var x=e==null?this.a:e
return new B.zM(x,d==null?this.b:d)},
ij(d){return this.awq(null,d)},
aw9(d){return this.awq(d,null)}}
B.DB.prototype={
d_(){var x=y.T,w=this.x=A.eP(this).G(A.cC($.co(),new B.b4D(),y.v,x),x)
if(w!=null)A.ji(new B.b4E(this,w),y.H)
return D.azD},
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
case 2:v.sa4(0,new t.zM(s,r.d9(g,B.dIz(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bX,w)},
Vc(d){return this.blJ(d)},
blJ(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vc=A.j(function(e,f){if(e===1)return A.k(f,w)
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
return A.d(r.d3(0,u).ck(0).dM(0),$async$Vc)
case 2:s=f
r=v.ga4(0)
u=A.U(v.ga4(0).b,y._)
u.push(B.cY6(s))
v.sa4(0,r.aw9(u))
return A.l(null,w)}})
return A.m($async$Vc,w)},
Oj(d){return this.bBb(d)},
bBb(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Oj=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lb(v.ga4(0).b,new B.b4F(d))
m=$.P().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.P("expenses").bg(0,A.R(["paid",!n.w,"updated_at",new A.ae(Date.now(),0,!1).cg()],u,u)).U("id",d).ck(0).dM(0),$async$Oj)
case 2:t=l.cY6(f)
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
B.abv.prototype={
I(){return"_BudgetFilter."+this.b}}
B.CV.prototype={
S(){return new B.abw(D.IZ)}}
B.abw.prototype={
Tn(d){return this.bbE(d)},
bbE(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Tn=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bKf(u))
x=1
break}u.p(new B.bKg(u))
t=u.gR()
s=$.co()
r=t.a_(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a_(0,s.gaX(),y.Z).ai(0,d),$async$Tn)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$Tn,w)},
ad(){this.aq()
A.ji(new B.bKx(this),y.H)},
PU(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$PU=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gR()
n=$.alF()
m=y.h
l=o.a_(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a_(0,$.Cw(),y.b).b
s=t==null?null:t.b
r=C.e.cU(o.a_(0,n,y.g).b,0,new B.bKb())
t=o.a_(0,$.co(),y.v).b
q=t==null?null:t.gcv()
t=u.c
t.toString
x=3
return A.d(A.bS(null,new B.bKc(q,s,new B.bKd(),r),!1,t,!0,!0,null,y.B),$async$PU)
case 3:p=e
if(p==null){x=1
break}o=o.a_(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vc(new G.i2("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$PU,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gR(),a2=a1.G($.Cw(),y.b),a3=a1.G($.HO(),y.d),a4=a1.G($.alF(),y.g),a5=a2.b,a6=a5==null?e:B.dHJ(a5,a3.b)
a5=A.iZ(a1.G($.iX(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iS
a5=y.T
w=a1.G(A.cC($.co(),new B.bKl(),y.v,a5),a5)
if(f.y){a1=f.gap2()
return A.cO(e,C.cR,A.nG(C.eZ,40,A.a([C.ft,D.aH1,K.cUG(a1,e),new B.aBR(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.da(x,new B.bKm(w))
a1=a1.G($.uy(),y.l)
u=a1.gv(a1)
t=new B.bKv(u==null?C.fc:u)
a1=y._
a5=A.U(a4.gbyj(),a1)
for(s=v.a,r=J.c8(s),q=r.gX(s),p=v.b,o=v.$ti.i("h9<1>"),n=new A.h9(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i2("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbyE(0),a1)
for(s=r.gX(s),o=new A.h9(s,p,o),p=y.r;o.q();){r=s.gE(s)
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
n.push(new G.i2("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.daQ(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.daQ(q)
break
default:a1=e}h=C.e.cU(q,0,new B.bKn())
s=a6==null
if(s)g=D.bz5
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bKo(),p),p.i("w.E"))}if(s)a1=D.bXv
else{s=f.gaQO()
r=y.p
p=A.a([new A.pp(A.a([new A.qH(s,"Nova despesa",e)],r),e),D.aH7,K.cUG(f.gap2(),w),new B.aP1(a6,new B.bKp(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aI(a6.gpU(),!1)
n=a5.length
m=n===1?d:a0
l=A.aI(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c1("N\xfameros",e,A.a([new A.DM(A.a([new A.l7("Gasto",o,""+n+" "+m,e),new A.l7("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.m9(A.a([new A.ei("Todos",l===D.IZ,n+m,new B.bKq(f),e),new A.ei("Pendentes",l===D.abv,m,new B.bKr(f),e),new A.ei("Pagos",l===D.abu,n,new B.bKs(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new B.aFL(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c1("Pagamentos",e,o,16,e))
a1=A.a([new A.h2(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aD7(g,f.x,new B.bKt(f),e))
p.push(new A.c1("Categorias",e,a1,16,e))
p.push(new A.c1("Exportar",e,A.a([new F.DC("Gastos e parceiros",!1,new B.bKu(f),e)],r),16,e))
a1=A.nG(C.eZ,40,p,e,!0,!1)}return A.cO(e,C.cR,a1,!0,e)},
Io(d){return this.aXJ(d)},
aXJ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Io=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aTq(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Io)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gR().a_(0,$.Cw().gaX(),y.x).ZV(r),$async$Io)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a1(H.HN)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Io,w)}}
B.aP1.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpU()>0?"Gastos "+A.aI(t.gpU(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vg(new A.he("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hC,0,"por definir","\u2014")}x=C.k.aN(t.gaBf()*100)
w=s-t.gpU()<0?"Acima do teto":"Ainda tens"
v=A.aI(Math.abs(s-t.gpU()),!1)
s=A.aI(s,!1)
u=t.gaBf()
return A.aW(A.vg(H.a1z,"Gastos "+A.aI(t.gpU(),!1)+" \xb7 "+x+"% do teto",w,C.hC,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aD7.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dy(s,0,A.es(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.G)(r),++w)p.push(new B.aD8(r[w],null))
q=A.a([A.eR(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.he(u,v.e,!0,null))}return A.y(q,C.E,C.h,C.l)}}
B.aD8.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cC($.co(),new B.bMG(),y.v,m),m)
if(l==null)x=C.r_
else{m=e.G($.d04().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r_:m}m=A.a([],y.s)
for(w=B.dfP(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bMI(this,d)
if(w)return A.jY(!1,!1,p,v,A.aI(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mK("P\xf4r teto",new B.bMH(this,d,e),!0,p))
w=A.aI(o.b,!1)
u=A.aI(n,!1)
s=y.p
q=A.a([A.aJ(new A.a3W(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aD,new B.an2(m,p)],s))
return A.jY(!1,!1,p,v,w+" de "+u,o.a,A.y(q,C.dJ,C.h,C.J))}}
B.aCF.prototype={
u(d){var x,w,v=null,u=$.at,t=$.fi.cc(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.fQ(r,A.aJ(p==null?A.kJ(A.b8(C.i6,u,v,v,v),C.t,!0):A.pl(p,144,new B.bJA(u),!1,C.bE,A.wr(),!1,v,v,v),48,48),C.bb)
p=A.h(q.b,1,C.a1,v,v,D.c3e,v,v)
x=A.b8(C.i8,u,v,v,14)
w=q.d
q=w>0?q.gPr()+" \xb7 "+A.aI(w,!1):q.gPr()
w=y.p
return new A.S(C.d1,A.aW(A.x(v,A.O(A.a([r,C.ae,A.a4(A.y(A.a([p,C.j4,A.O(A.a([x,C.dY,new A.dl(1,C.bc,A.h(q,1,C.a1,v,v,A.aH(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bl,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.v,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b8(C.ia,u,v,v,v)],w),C.v,C.h,C.l,0,v),C.r,v,v,new A.I(t,v,v,s,v,v,C.x),v,v,v,C.ed,v,v,v),new B.bJB(d),v),v)}}
B.aFL.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.Jz(A.a([new A.he("+ Nova despesa",this.f,!0,j)],y.p),C.eR,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aAX
x=new B.bWg(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+B.dbj(m)
v.push(new A.t8(new A.cf(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bWc(d,e,s,q),A.HI(m)===C.f5,j))
continue}p=r?new B.bWd(d):new B.bWe(x,s)
v.push(new B.Xo(s,p,r||s.w?j:new B.bWf(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xo&&v[k-1] instanceof B.Xo)u.push(C.iI)
u.push(v[k])
C.e.n(i,u)}i.push(D.aAD)
return A.y(i,C.E,C.h,C.l)}}
B.Xo.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aI(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dbj(w))
v=C.e.a0(v," \xb7 ")
if(u)u=D.aGN
else{u=this.e
u=u!=null?new A.mK("Marcar pago",u,!0,null):D.aGU}return A.jY(!1,!1,null,this.d,v,x.c,u)}}
B.aBM.prototype={}
B.NG.prototype={
S(){var x=$.aa()
return new B.aba(new A.aE(C.ak,x),new A.aE(C.ak,x))}}
B.aba.prototype={
ad(){var x=this
x.aq()
x.d.an(0,new B.bHh(x))
x.e.an(0,new B.bHi(x))},
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a7()},
gahr(){var x=C.f.B(this.e.a.a)
x=A.aX(x," ","")
return A.eT(A.aX(x,",","."))},
aS0(){var x,w,v,u,t=this,s=t.gahr()
t.p(new B.bH4(t))
x=C.f.B(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.am(w,!1)
v=t.w
u=v?null:t.f
w.ae(new B.aBM(x,s,u,t.r,v))},
arM(d,e,f,g,h){var x=null,w=h?C.fm:x,v=y.p,u=A.a4(A.y(A.a([A.h(d,x,x,x,x,C.a9,x,x),C.aU,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.bp:x,s=f?x:A.bz(C.kp,1.5),r=f?S.vk:x
return A.bk(x,!0,x,A.ct(C.bu,A.x(x,A.O(A.a([u,A.x(x,r,C.r,x,x,new A.I(t,x,s,x,x,x,C.ap),x,24,x,x,x,x,24)],v),C.v,C.h,C.l,0,x),C.r,x,C.cM,new A.I(x,x,w,x,x,x,C.x),x,x,x,C.hr,x,x,x),C.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.aF),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a6,x)},
bi4(d,e,f,g){return this.arM(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahr()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.B(x.a.a).length!==0&&j>0
w=new B.bHe()
t=y.w
s=A.aR(d,k,t).w
r=y.p
q=A.a([D.c7r],r)
q.push(A.h(l.a.c,k,k,k,k,C.L,k,k))
q=A.O(A.a([A.a4(A.y(q,C.G,C.h,C.l),1),A.bk(k,!0,k,A.ct(k,A.x(k,C.ic,C.r,k,k,C.c_,k,44,k,k,k,k,44),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bH9(d),k,k,k,k,k,k,!1,C.aF),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a6,k)],r),C.v,C.h,C.l,0,k)
p=A.W(22)
o=A.a([D.c8w,A.O(A.a([V.d4u(A.cp(k,C.a5,!1,k,!0,C.y,k,A.cr(),l.e,k,k,k,k,k,2,D.aEQ,C.W,!0,k,!0,k,!1,k,C.aB,k,k,k,k,C.fH,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,D.aac,!0,C.dA,k,C.b_,k,k,k,k)),C.bh,D.c7V],r),C.ec,C.bX,C.l,0,C.aJ)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cXf(v)+" no teto":"Passa o teto em "+B.cXf(-v)
o.push(A.h(m,k,k,k,k,A.aH(k,k,n?C.V:C.bV,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k))}if(l.x&&j<=0)o.push(D.c77)
p=A.x(k,A.y(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a3,k,k,p,k,k,C.x),k,k,k,C.bn,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.aH,k,k)
n=A.W(26)
m=l.x&&C.f.B(x.a.a).length===0?A.bz(C.bV,1.5):k
n=A.a([p,C.a0,new A.S(C.d1,o,k),A.x(C.ba,A.cp(k,C.a5,!1,k,!0,C.y,k,A.cr(),x,k,k,k,k,k,2,D.aEu,C.W,!0,k,!0,k,!1,k,C.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.al,k,k,k,k,k,k,k,k,k,k,k,C.fh,!0,C.au,k,C.hb,k,k,k,k),C.r,k,k,new A.I(C.a3,k,m,n,k,k,C.x),k,52,k,C.fU,k,k,k)],r)
if(l.x&&C.f.B(x.a.a).length===0)n.push(D.bL7)
n.push(C.a0)
n.push(new U.a1b(l.r,new B.bHa(l),k))
n.push(C.a0)
n.push(new A.S(C.d1,A.h("ESTADO",k,k,k,k,C.aH,k,k),k))
x=A.W(22)
p=l.w
o=!p
o=A.a([l.bi4("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bHb(l)),l.arM("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bHc(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aD(p)))
m=l.f
m.toString
m=A.p(w.$1(A.av(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aL(w)}o.push(A.bk(k,!0,k,A.ct(C.bu,A.aJ(A.O(A.a([D.azn,A.h(w,k,k,k,k,C.cc,k,k),C.dY,C.kB],r),C.v,C.h,C.l,0,k),56,k),C.W,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bHd(l,d),k,k,k,k,k,k,!1,C.aF),!1,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a6,k))}n.push(A.x(k,A.y(o,C.v,C.h,C.l),C.r,k,k,new A.I(C.a3,k,k,x,k,k,C.x),k,k,k,C.cr,k,k,k))
n.push(C.a0)
n.push(D.ccZ)
x=A.dR(A.y(n,C.E,C.h,C.l),C.y,k,C.ee,k,C.av)
t=A.aR(d,C.b5,t).w
w=A.cc(u?C.z:C.z.cc(0.35),k,k,C.t,k,k,C.aa,k,k,C.eI)
return new A.S(new A.a3(0,0,0,s.f.d),A.y(A.a([new A.S(C.jC,q,k),new A.dl(1,C.bc,x,k),new A.S(new A.a3(20,16,20,20+t.r.d),A.aJ(A.bB(A.h(u?"Guardar \xb7 "+B.cXf(j):"Guardar",k,k,k,k,k,k,k),l.gaS_(),w),52,k),k)],r),C.E,C.h,C.J),k)}}
B.X1.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.Cw(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eK(new A.a6(j,new B.bMK(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.G($.alF(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bML(l),w),w.i("w.E"))
C.e.cq(v,new B.bMM())
j=y.T
u=e.G(A.cC($.co(),new B.bMN(),y.v,j),j)
t=B.dfP(l.e.c)
if(u==null)s=I.Fe
else{j=e.G($.aVh().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Fe
j=J.da(j,new B.bMO(t))
s=A.U(j,j.$ti.i("w.E"))}j=A.aR(d,k,y.w).w
w=A.bM(A.x(k,k,C.r,k,k,new A.I(C.bF,k,k,A.W(2),k,k,C.x),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.ax(d).ok.r,k,k)
q=A.a4(new B.ahG("Gasto",A.aI(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a0,r,C.aA,A.O(A.a([q,C.af,A.a4(A.aW(new B.ahG("Teto \xb7 tocar para mudar",p===0?"Definir":A.aI(p,!1),k),new B.bMP(d,e,x),k),1)],o),C.v,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.bi,A.h("Contratado na app",k,k,k,k,A.ax(d).ok.w,k,k),C.P],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.G)(s),++n)w.push(new B.aCF(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.h("Despesas",k,k,k,k,A.ax(d).ok.w,k,k))
p.push(C.P)
w=v.length
if(w===0)p.push(D.bKx)
else for(n=0;n<v.length;v.length===w||(0,A.G)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.is,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aT(C.j.k(A.aD(q)),2,"0")+"/"+C.f.aT(C.j.k(A.av(q)),2,"0")+"/"+A.aL(q),k,k,k,k,k,k,k)
p.push(A.jm(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.O(A.a([A.h(A.aI(m.f,!1),k,k,k,k,D.c5h,k,k),C.ab,new P.D5(m.w,new B.bMQ(e,m),k,$.at,k,k,!1,k,k,k,k,!1,k,k,!1,k,Q.J0,k)],o),C.v,C.h,C.J,0,k),k))}return A.bA(!0,new A.e8(new A.aQ(0,1/0,0,j.a.b*0.8),A.d4(p,k,L.CM,k,k,!1,!0),k),k,C.Z,!0)}}
B.ahG.prototype={
u(d){var x=null,w=A.W(16)
return A.x(x,A.y(A.a([A.h(this.c,x,x,x,x,C.bf,x,x),C.ar,A.h(this.d,x,x,x,x,M.aa_,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.I(C.a3,x,x,w,x,x,C.x),x,x,x,C.cV,x,x,x)}}
B.aBR.prototype={
b9(d,e){var x,w=y.t,v=e.G(A.cC($.co(),new B.bIe(),y.v,w),w),u=e.G($.d03(),y.o)
w=e.G($.uy(),y.l)
x=w.gv(w)
return A.hC(u,new B.bIf(this,new B.bIk(x==null?C.fc:x),v),new B.bIg(e),new B.bIh(),!1,!0,!1)}}
B.an2.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.at,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
t=$.fi
s=new A.b5(999,999)
r=new A.bf(o.cc(0.25),1,C.aj,-1)
q=A.b8(C.i8,o,p,p,13)
t=A.x(p,A.O(A.a([q,C.rJ,new A.dl(1,C.bc,A.h(u,1,C.a1,p,p,new A.Q(!0,o,p,p,p,p,14,C.d3,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b8(C.ia,o,p,p,16)],n),C.v,C.h,C.J,0,p),C.r,p,D.afi,new A.I(t,p,new A.dL(r,r,r,r),new A.cy(s,s,s,s),p,p,C.x),p,p,p,D.atX,p,p,p)
m.push(new A.jr(new A.n3(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a6,p,p,p,p),!1,!1,p,!1,!1,new A.i9(t,new B.aY1(d),p,p),p))}return A.e_(C.be,m,C.r,C.bk,6,6)}}
var z=a.updateTypes(["C(i2)","T(T,i2)","v(i2,i2)","T(T,Dr)","zM()","F<~>(c?)","F<~>()","NG(N)","C(Dr)","F<lR>()","X1(N)","~(i2)","~()","C(nn)","C(rI)","i2(a5<c,@>)","DB()"])
B.cG4.prototype={
$1(d){return this.aEx(d)},
aEx(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.G(A.cC($.co(),new B.cG0(),y.v,f),f)
f=J.a7(e)
if(f.gY(e)){v=D.bz6
x=1
break}u=A.a([],y.s)
for(t=f.gX(e);t.q();)u.push(t.gE(t).a)
t=$.P()
s=t.b
s===$&&A.b()
r=y.G
q=s.P("budgets").ai(0,"wedding_id, total").dK("wedding_id",u).b3(new B.cG1(),r)
p=t.b.P("budget_categories").ai(0,"wedding_id, amount").dK("wedding_id",u).b3(new B.cG2(),r)
o=t.b.P("expenses").ai(0,"wedding_id, amount, paid").dK("wedding_id",u).b3(new B.cG3(),r)
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
u.push(new A.aMi([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1292}
B.cG0.prototype={
$1(d){return d.c},
$S:154}
B.cG1.prototype={
$1(d){return d},
$S:29}
B.cG2.prototype={
$1(d){return d},
$S:29}
B.cG3.prototype={
$1(d){return d},
$S:29}
B.b32.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b4G.prototype={
$1(d){return d.w},
$S:z+0}
B.b4H.prototype={
$1(d){return!d.w},
$S:z+0}
B.b4D.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.b4E.prototype={
$0(){return this.a.bX(0,this.b)},
$S:1}
B.b4F.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bKf.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bKg.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bKx.prototype={
$0(){return this.a.gR().a_(0,$.Cw().gaX(),y.x).Zc(0).ea(new B.bKw())},
$S:1}
B.bKw.prototype={
$1(d){},
$S:11}
B.bKb.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKd.prototype={
$1(d){return A.Cs(C.k.a8(d,0),A.aS("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bKe(),null)+" \u20ac"},
$S:110}
B.bKe.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bKc.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a0(v," \xb7 ")
u=x&&u>0?u:null
return new B.NG(v,u,w.d,null)},
$S:z+7}
B.bKl.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bKm.prototype={
$1(d){return d.x!==C.e8&&d.b===this.a},
$S:56}
B.bKv.prototype={
$2(d,e){return A.jd(d,this.a.l8(e))},
$1(d){return this.$2(d,null)},
$S:1295}
B.bKn.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bKo.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bKp.prototype={
$0(){return this.a.Io(this.b.a)},
$S:0}
B.bKq.prototype={
$0(){var x=this.a
return x.p(new B.bKk(x))},
$S:0}
B.bKk.prototype={
$0(){return this.a.w=D.IZ},
$S:0}
B.bKr.prototype={
$0(){var x=this.a
return x.p(new B.bKj(x))},
$S:0}
B.bKj.prototype={
$0(){return this.a.w=D.abv},
$S:0}
B.bKs.prototype={
$0(){var x=this.a
return x.p(new B.bKi(x))},
$S:0}
B.bKi.prototype={
$0(){return this.a.w=D.abu},
$S:0}
B.bKt.prototype={
$0(){var x=this.a
return x.p(new B.bKh(x))},
$S:0}
B.bKh.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bKu.prototype={
$0(){return B.Cl(this.a.gR().a_(0,$.co(),y.v).b.a)},
$S:z+9}
B.cCt.prototype={
$1(d){var x=null,w=this.b
return new A.eQ(A.h(this.a,x,x,x,x,x,x,x),A.cp(x,C.a5,!0,x,!0,C.y,x,A.cr(),w,x,x,x,x,x,2,D.aF2,C.W,!0,x,!0,x,!1,x,C.aB,x,x,x,x,C.fH,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.al,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b_,x,x,x,x),A.a([A.cE(C.cP,x,x,new B.cCr(d),x,x),A.bB(C.du,new B.cCs(d,w),x)],y.p),x)},
$S:19}
B.cCr.prototype={
$0(){return A.am(this.a,!1).bl()},
$S:0}
B.cCs.prototype={
$0(){var x=A.am(this.a,!1),w=C.f.B(this.b.a.a)
w=A.aX(w," ","")
return x.ae(A.eT(A.aX(w,",",".")))},
$S:0}
B.cCC.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bX(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bX(2100,1,1,0,0):x)},
$S:z+2}
B.bMG.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bMI.prototype={
$0(){return A.bS(null,new B.bMJ(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bMJ.prototype={
$1(d){return new B.X1(this.a.e.a,null)},
$S:z+10}
B.bMH.prototype={
$0(){return B.ake(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bJB.prototype={
$0(){var x=this.a
A.am(x,!1).bl()
A.ac(x).ak("/bookings",null,y.X)},
$S:0}
B.bJA.prototype={
$3(d,e,f){return A.kJ(A.b8(C.i6,this.a,null,null,null),C.t,!0)},
$S:95}
B.bWg.prototype={
$1(d){var x,w,v=null
this.a.a_(0,$.alF().gaX(),y.h).Oj(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a1(A.bZ(v,v,v,v,v,C.y,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.S,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bWc.prototype={
$0(){var x=this
return A.rA(x.a,x.b,C.f.bD(x.c.a,x.d+5),null,null)},
$S:0}
B.bWd.prototype={
$0(){return A.ac(this.a).ak("/bookings",null,y.X)},
$S:0}
B.bWe.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bWf.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bHh.prototype={
$0(){return this.a.p(new B.bHg())},
$S:0}
B.bHg.prototype={
$0(){},
$S:0}
B.bHi.prototype={
$0(){return this.a.p(new B.bHf())},
$S:0}
B.bHf.prototype={
$0(){},
$S:0}
B.bH3.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:44}
B.bH4.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bHe.prototype={
$1(d){return C.f.aT(C.j.k(d),2,"0")},
$S:38}
B.bH9.prototype={
$0(){return A.am(this.a,!1).bl()},
$S:0}
B.bHa.prototype={
$1(d){var x=this.a
return x.p(new B.bH8(x,d))},
$S:136}
B.bH8.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bHb.prototype={
$0(){var x=this.a
return x.p(new B.bH7(x))},
$S:0}
B.bH7.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bHc.prototype={
$0(){var x=this.a
return x.p(new B.bH6(x))},
$S:0}
B.bH6.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bHd.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ae(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(R.cMm(v.b,A.bX(A.aL(t)-1,1,1,0,0),r,A.bX(A.aL(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bH5(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bH5.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bMK.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bML.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bMM.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bX(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bX(2100,1,1,0,0):x)},
$S:z+2}
B.bMN.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.bMO.prototype={
$1(d){return C.e.t(this.a,d.a)},
$S:z+14}
B.bMP.prototype={
$0(){var x=this.c
return B.ake(this.a,this.b,x.a,x.d)},
$S:0}
B.bMQ.prototype={
$1(d){return this.a.a_(0,$.alF().gaX(),y.h).Oj(this.b.a)},
$S:142}
B.bIe.prototype={
$1(d){return d.c},
$S:154}
B.bIk.prototype={
$2(d,e){return A.jd(d,this.a.l8(e))},
$S:42}
B.bIh.prototype={
$0(){return D.bL9},
$S:87}
B.bIg.prototype={
$2(d,e){return A.Jz(A.a([new A.he("Tentar outra vez",new B.bI7(this.a),!1,null)],y.p),C.eR,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1296}
B.bI7.prototype={
$0(){return this.a.aj($.d03())},
$S:0}
B.bIf.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIi(g),e=new B.bIj(g,this.b),d=J.c8(a4),a0=d.cU(a4,0,new B.bI8()),a1=d.cU(a4,0,new B.bI9(f)),a2=d.cU(a4,0,new B.bIa(e)),a3=y.N
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
x=A.vg(i,""+t+" "+r+w,"Todos os eventos",C.hC,u,v,x)
v=y.p
u=A.a([new A.DM(A.a([new A.l7("Gasto",A.aI(a1,!1),h,i),new A.l7("Por pagar",A.aI(a2,!1),h,i)],y.Q),i)],v)
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
k.push("por pagar "+A.aI(j[3]+e.$1(j[0]),!1))}n=A.y(A.a([n,C.aU,A.h(C.e.a0(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.i9(A.x(i,A.O(A.a([new A.bI(1,C.at,n,i),C.af,A.h(A.aI(k[1]+f.$1(k[0]),!1),i,i,i,i,C.a9,i,i),C.bh,C.kB],v),C.v,C.h,C.l,0,i),C.r,C.as,C.cM,i,i,i,i,C.cj,i,i,i),new B.bIb(o,g),i,i))
C.e.n(w,l)}return A.y(A.a([x,new A.c1("N\xfameros",i,u,16,i),new A.c1("Por evento \xb7 "+d,i,w,16,i),D.aAF],v),C.E,C.h,C.l)},
$S:1297}
B.bIi.prototype={
$1(d){return J.da(this.a.e,new B.bI5(d)).cU(0,0,new B.bI6())},
$S:189}
B.bI5.prototype={
$1(d){return d.b===this.a&&d.x!==C.e8},
$S:56}
B.bI6.prototype={
$2(d,e){return d+e.w},
$S:493}
B.bIj.prototype={
$1(d){return J.da(this.a.e,new B.bIc(d)).cU(0,0,new B.bId(this.b))},
$S:189}
B.bIc.prototype={
$1(d){return d.b===this.a&&d.x!==C.e8},
$S:56}
B.bId.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:493}
B.bI8.prototype={
$2(d,e){return d+e.a[2]},
$S:235}
B.bI9.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:235}
B.bIa.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:235}
B.bIb.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aY1.prototype={
$0(){return A.ac(this.a).ak("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dIz","cY6",15)
w(B,"dIy","dpr",16)
v(B.DB.prototype,"giD","d_",4)
var t
u(t=B.abw.prototype,"gap2","Tn",5)
v(t,"gaQO","PU",6)
v(B.aba.prototype,"gaS_","aS0",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bv,[B.cG4,B.cG0,B.cG1,B.cG2,B.cG3,B.b4G,B.b4H,B.b4D,B.b4F,B.bKw,B.bKd,B.bKe,B.bKc,B.bKl,B.bKm,B.bKv,B.bKo,B.cCt,B.bMG,B.bMJ,B.bJA,B.bWg,B.bH3,B.bHe,B.bHa,B.bMK,B.bML,B.bMN,B.bMO,B.bMQ,B.bIe,B.bIf,B.bIi,B.bI5,B.bIj,B.bIc])
x(A.L,[B.Dr,B.b31,B.zM,B.Mf,B.a7B,B.aBM])
x(A.cJ,[B.b32,B.bKb,B.bKn,B.cCC,B.bMM,B.bIk,B.bIg,B.bI6,B.bId,B.bI8,B.bI9,B.bIa])
w(B.DB,A.f9)
x(A.bN,[B.b4E,B.bKf,B.bKg,B.bKx,B.bKp,B.bKq,B.bKk,B.bKr,B.bKj,B.bKs,B.bKi,B.bKt,B.bKh,B.bKu,B.cCr,B.cCs,B.bMI,B.bMH,B.bJB,B.bWc,B.bWd,B.bWe,B.bWf,B.bHh,B.bHg,B.bHi,B.bHf,B.bH4,B.bH9,B.bH8,B.bHb,B.bH7,B.bHc,B.bH6,B.bHd,B.bH5,B.bMP,B.bIh,B.bI7,B.bIb,B.aY1])
w(B.abv,A.ff)
w(B.CV,A.dA)
w(B.abw,A.dv)
x(A.M,[B.aP1,B.aD7,B.aCF,B.Xo,B.ahG,B.an2])
x(A.ev,[B.aD8,B.aFL,B.X1,B.aBR])
w(B.NG,A.H)
w(B.aba,A.a1)})()
A.bt(b.typeUniverse,JSON.parse('{"DB":{"f9":["zM"]},"NG":{"H":[],"e":[],"f":[]},"X1":{"H":[],"e":[],"f":[]},"CV":{"H":[],"e":[],"f":[]},"abw":{"a1":["CV"]},"aP1":{"M":[],"e":[],"f":[]},"aD7":{"M":[],"e":[],"f":[]},"aD8":{"H":[],"e":[],"f":[]},"aCF":{"M":[],"e":[],"f":[]},"aFL":{"H":[],"e":[],"f":[]},"Xo":{"M":[],"e":[],"f":[]},"aba":{"a1":["NG"]},"ahG":{"M":[],"e":[],"f":[]},"aBR":{"H":[],"e":[],"f":[]},"an2":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{l:x("aw<f7>"),k:x("aw<t<rI>>"),u:x("aw<t<fG>>"),o:x("aw<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("aw<a5<c,t<c>>>"),x:x("zp"),b:x("uL"),d:x("rN"),Z:x("og"),v:x("ea"),_:x("i2"),h:x("DB"),g:x("zM"),D:x("r<Dr>"),r:x("r<i2>"),Q:x("r<l7>"),F:x("r<ei>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a7B>"),c:x("r<Mf>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fG>"),t:x("t<fk>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a5<c,@>"),w:x("ds"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lR"),N:x("c"),B:x("aBM"),q:x("dp"),i:x("T"),z:x("@"),S:x("v"),X:x("L?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afi=new A.aQ(0,1/0,32,1/0)
D.atX=new A.a3(8,5,6,5)
D.cgD=new A.D("Prazo",null,C.a9,null,null,null,null,null,null,null)
D.azn=new A.bI(1,C.at,D.cgD,null)
D.byO=x([],y.r)
D.azD=new B.zM(!1,D.byO)
D.aAD=new A.h2("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aAF=new A.h2("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aAX=new A.h2("Sem pagamentos nesta vista.",8,null)
D.aEu=new A.dC(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aEQ=new A.dC(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.br,null,null,C.br,C.br,!0,null,null,null,null)
D.aF2=new A.dC(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGN=new A.dT("Pago",C.cW,null)
D.aGU=new A.dT("Por pagar",C.hA,null)
D.aH1=new A.lc("Or\xe7amento","Todos os teus eventos",null)
D.aH7=new A.lc("Or\xe7amento",null,null)
D.by2=x(["catering"],y.s)
D.bz5=x([],y.D)
D.bz6=x([],y.n)
D.bzw=x(["flowers_decor"],y.s)
D.bB1=x(["music_dj","bands_musicians"],y.s)
D.bBB=x(["photography"],y.s)
D.bCO=x(["venue"],y.s)
D.aEj=new A.vb("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kz,null)
D.bKx=new A.S(C.fT,D.aEj,null)
D.c8T=new A.D("A despesa precisa de um t\xedtulo",null,C.mi,null,null,null,null,null,null,null)
D.bL7=new A.S(T.Nu,D.c8T,null)
D.bL9=new A.S(O.uK,C.f0,null)
D.bXv=new A.vQ(!1,6,!0,null)
D.c3e=new A.Q(!0,C.z,null,null,null,null,14,C.d3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5h=new A.Q(!0,null,null,null,null,null,null,C.d3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aac=new A.Q(!0,C.z,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c77=new A.D("Indica um valor v\xe1lido",null,C.mi,null,null,null,null,null,null,null)
D.c7r=new A.D("Nova despesa",null,C.bj,null,null,null,null,null,null,null)
D.c7V=new A.D("\u20ac",null,D.aac,null,null,null,null,null,null,null)
D.c8w=new A.D("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.ccZ=new A.D("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.bZ,null,null,null,null,null,null,null)
D.IZ=new B.abv(0,"all")
D.abu=new B.abv(1,"paid")
D.abv=new B.abv(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVR","d03",()=>C.bO.$1$1(new B.cG4(),y.m))
x($,"dWH","alF",()=>A.mU(B.dIy(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["Avv3L1DKodTKAoN3CYfiIsHxG10="]=a.current})($__dart_deferred_initializers__);