((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,N,O,P,Q,E,R,S,F,G,T,H,K,U,I,V,A={cD2:function cD2(){},cCZ:function cCZ(){},cD_:function cD_(){},cD0:function cD0(){},cD1:function cD1(){},
dDA(d,e){var x,w,v,u=B.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v)u.push(new A.Ds(x[v]))
return new A.b2M(d.b,u)},
Ds:function Ds(d){this.a=d},
b2M:function b2M(d,e){this.a=d
this.b=e},
b2N:function b2N(){},
cUy(d){var x="category",w="due_date",v=J.a6(d),u=B.a0(v.h(d,"id")),t=B.a0(v.h(d,"wedding_id")),s=B.a0(v.h(d,"title")),r=A.dzS(A.d92(B.B(v.h(d,x)))),q=A.d92(B.B(v.h(d,x))),p=B.dt(v.h(d,"amount")),o=v.h(d,w)==null?null:B.d8(B.a0(v.h(d,w)))
v=B.dU(v.h(d,"paid"))
return new H.i3(u,t,s,r,q,p,o,v===!0)},
d92(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dzS(d){var x
A:{if("venue"===d){x=E.xN
break A}if("catering"===d){x=E.xJ
break A}if("photography"===d){x=E.xK
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xL
break A}if("flowers_decor"===d){x=E.xM
break A}x=null
break A}return x},
dlo(){return new A.DB()},
zX:function zX(d,e){this.a=d
this.b=e},
b4q:function b4q(){},
b4r:function b4r(){},
DB:function DB(){this.b=this.x=null},
b4n:function b4n(){},
b4o:function b4o(d,e){this.a=d
this.b=e},
b4p:function b4p(d){this.a=d},
Cq(d){var x=0,w=B.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cq=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:x=3
return B.d(F.akc(),$async$Cq)
case 3:u=$.T()
t=u.b
t===$&&B.b()
x=4
return B.d(t.R("events").az(0,"partner_name_1, partner_name_2").W("id",d).dA(),$async$Cq)
case 4:s=f
x=5
return B.d(u.b.R("bookings").az(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("wedding_id",d).dl(0,"event_date",!1),$async$Cq)
case 5:r=f
u=B.a([],y.s)
for(t=J.ar(r);t.t();)u.push(B.a0(J.h(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=B.a([],y.Y)
x=7
break
case 8:t=$.T().b
t===$&&B.b()
x=9
return B.d(t.R("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").eP("booking_id",u).tK(0,"created_at"),$async$Cq)
case 9:q=f
case 7:u=$.T()
t=u.b
t===$&&B.b()
x=10
return B.d(t.R("expenses").az(0,"title, category, amount, due_date, paid").W("wedding_id",d).tK(0,"due_date"),$async$Cq)
case 10:p=f
x=11
return B.d(u.b.R("budget_categories").az(0,"name, amount").W("wedding_id",d).tK(0,"position"),$async$Cq)
case 11:o=f
x=12
return B.d(u.b.R("budgets").az(0,"total").W("wedding_id",d).dA(),$async$Cq)
case 12:n=f
m=F.cUk(F.cAi(s),"Gastos e parceiros",r,q,!1)
u=B.a([],y.c)
for(t=J.ar(p);t.t();){l=t.gE(t)
k=J.a6(l)
j=k.h(l,"title")
j=J.cx(j==null?"":j)
i=k.h(l,"category")
i=J.cx(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=B.fp(B.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=B.dK(B.q(g))
g=g==null?null:g.eh()}u.push(new A.M8(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=B.a([],y.E)
for(l=J.ar(o);l.t();){k=l.gE(l)
j=J.a6(k)
i=j.h(k,"name")
i=J.cx(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=B.fp(B.q(k))
if(k==null)k=0}t.push(new A.a7j(i,k))}l=n==null?null:F.cUQ(J.h(n,"total"))
v=new F.lK(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$Cq,w)},
M8:function M8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7j:function a7j(d,e){this.a=d
this.b=e},
diI(){return new A.a0m(null)},
aTm(d,e,f){var x=0,w=B.n(y.I),v,u,t
var $async$aTm=B.j(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return B.d(B.fM(!0,new A.czI(e,new B.aI(new B.bJ(u,C.aK,C.aB),$.ac())),d,y.i),$async$aTm)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aTm,w)},
ak6(d,e,f,g){return A.dzF(d,e,f,g)},
dzF(d,e,f,g){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q
var $async$ak6=B.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return B.d(A.aTm(d,"Teto para "+f,g),$async$ak6)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return B.d(e.a1(0,$.HL().gaX(),y.x).OO(f,r),$async$ak6)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a4(I.HO)
x=7
break
case 4:x=2
break
case 7:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$ak6,w)},
d7a(d){var x=B.V(d,y._)
C.e.cO(x,new A.czR())
return x},
d7E(d){var x=C.f.aW(C.i.k(B.aM(d)),2,"0"),w=C.f.aW(C.i.k(B.ay(d)),2,"0"),v=B.aE(d)===B.aE(new B.ae(Date.now(),0,!1))?"":"/"+B.aE(d)
return x+"/"+w+v},
abf:function abf(d,e){this.a=d
this.b=e},
a0m:function a0m(d){this.a=d},
abg:function abg(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bJ5:function bJ5(d){this.a=d},
bJ6:function bJ6(d){this.a=d},
bJn:function bJn(d){this.a=d},
bJm:function bJm(){},
bJ4:function bJ4(){},
bJb:function bJb(){},
bJc:function bJc(d){this.a=d},
bJl:function bJl(d){this.a=d},
bJd:function bJd(){},
bJe:function bJe(){},
bJf:function bJf(d,e){this.a=d
this.b=e},
bJg:function bJg(d){this.a=d},
bJa:function bJa(d){this.a=d},
bJh:function bJh(d){this.a=d},
bJ9:function bJ9(d){this.a=d},
bJi:function bJi(d){this.a=d},
bJ8:function bJ8(d){this.a=d},
bJj:function bJj(d){this.a=d},
bJ7:function bJ7(d){this.a=d},
bJk:function bJk(d){this.a=d},
czI:function czI(d,e){this.a=d
this.b=e},
czG:function czG(d){this.a=d},
czH:function czH(d,e){this.a=d
this.b=e},
czR:function czR(){},
aOZ:function aOZ(d,e,f){this.c=d
this.d=e
this.a=f},
aCU:function aCU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCV:function aCV(d,e){this.e=d
this.a=e},
bLv:function bLv(){},
bLx:function bLx(d,e){this.a=d
this.b=e},
bLy:function bLy(d){this.a=d},
bLw:function bLw(d,e,f){this.a=d
this.b=e
this.c=f},
aCs:function aCs(d,e){this.c=d
this.a=e},
bIv:function bIv(d){this.a=d},
bIu:function bIu(d){this.a=d},
aFD:function aFD(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bUU:function bUU(d,e){this.a=d
this.b=e},
bUQ:function bUQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUR:function bUR(d){this.a=d},
bUS:function bUS(d,e){this.a=d
this.b=e},
bUT:function bUT(d,e){this.a=d
this.b=e},
Xb:function Xb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBx:function aBx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NA:function NA(d){this.a=d},
aBy:function aBy(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.x=_.w=_.r=_.f=null},
bGf:function bGf(d){this.a=d},
bGe:function bGe(d,e){this.a=d
this.b=e},
bGg:function bGg(d){this.a=d},
bGd:function bGd(d,e){this.a=d
this.b=e},
bGh:function bGh(d,e){this.a=d
this.b=e},
bGc:function bGc(d,e){this.a=d
this.b=e},
WO:function WO(d,e){this.e=d
this.a=e},
bLz:function bLz(d){this.a=d},
bLA:function bLA(d){this.a=d},
bLB:function bLB(){},
bLC:function bLC(){},
bLD:function bLD(d){this.a=d},
bLE:function bLE(d,e,f){this.a=d
this.b=e
this.c=f},
bLF:function bLF(d,e){this.a=d
this.b=e},
ahp:function ahp(d,e,f){this.c=d
this.d=e
this.a=f},
aBD:function aBD(d,e,f){this.e=d
this.f=e
this.a=f},
bHd:function bHd(){},
bHj:function bHj(d){this.a=d},
bHg:function bHg(){},
bHf:function bHf(d){this.a=d},
bH6:function bH6(d){this.a=d},
bHe:function bHe(d,e,f){this.a=d
this.b=e
this.c=f},
bHh:function bHh(d){this.a=d},
bH4:function bH4(d){this.a=d},
bH5:function bH5(){},
bHi:function bHi(d,e){this.a=d
this.b=e},
bHb:function bHb(d){this.a=d},
bHc:function bHc(d){this.a=d},
bH7:function bH7(){},
bH8:function bH8(d){this.a=d},
bH9:function bH9(d){this.a=d},
bHa:function bHa(d,e){this.a=d
this.b=e},
amV:function amV(d,e){this.c=d
this.a=e},
aXT:function aXT(d){this.a=d},
dbW(d){var x
switch(d){case E.xN:x=D.bDd
break
case E.xJ:x=D.byn
break
case E.xK:x=D.bBY
break
case E.xL:x=D.bBq
break
case E.xM:x=D.bzU
break
default:x=C.aa
break}return x}},D,L,M
J=c[1]
B=c[0]
C=c[2]
N=c[182]
O=c[199]
P=c[213]
Q=c[214]
E=c[215]
R=c[158]
S=c[212]
F=c[131]
G=c[77]
T=c[132]
H=c[76]
K=c[211]
U=c[129]
I=c[210]
V=c[78]
A=a.updateHolder(c[53],A)
D=c[209]
L=c[72]
M=c[176]
A.Ds.prototype={
gap(d){return this.a.a}}
A.b2M.prototype={
gpY(){return C.e.d7(this.b,0,new A.b2N())},
gaBM(){var x=this.a
return x===0?0:C.k.ah(this.gpY()/x,0,1)}}
A.zX.prototype={
gbzv(){var x=this.b,w=B.a8(x).i("a5<1>")
x=B.V(new B.a5(x,new A.b4q(),w),w.i("z.E"))
return x},
gbzR(d){var x=this.b,w=B.a8(x).i("a5<1>")
x=B.V(new B.a5(x,new A.b4r(),w),w.i("z.E"))
return x},
awR(d,e){var x=e==null?this.a:e
return new A.zX(x,d==null?this.b:d)},
ip(d){return this.awR(null,d)},
awy(d){return this.awR(d,null)}}
A.DB.prototype={
d4(){var x=y.T,w=this.x=B.eP(this).H(B.cv($.co(),new A.b4n(),y.v,x),x)
if(w!=null)B.je(new A.b4o(this,w),y.H)
return D.aAc},
c_(d,e){return this.bwX(0,e)},
bwX(d,e){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$c_=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:v.sa2(0,v.ga2(0).ip(!0))
u=$.T().b
u===$&&B.b()
t=A
s=!1
r=J
x=2
return B.d(u.R("expenses").cj(0).W("wedding_id",e).dl(0,"created_at",!0),$async$c_)
case 2:v.sa2(0,new t.zX(s,r.d3(g,A.dEr(),y._).by(0)))
return B.l(null,w)}})
return B.m($async$c_,w)},
Vn(d){return this.bmP(d)},
bmP(d){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$Vn=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:r=$.T().b
r===$&&B.b()
r=r.R("expenses")
u=d.e
if(u==null){u=d.d
u=u==null?null:u.b}t=d.r
t=t==null?null:C.e.gM(t.ci().split("T"))
x=2
return B.d(r.de(0,B.S(["wedding_id",d.b,"title",d.c,"category",u,"amount",d.f,"due_date",t],y.N,y.X)).cj(0).dP(0),$async$Vn)
case 2:s=f
t=v.ga2(0)
r=B.V(v.ga2(0).b,y._)
r.push(A.cUy(s))
v.sa2(0,t.awy(r))
return B.l(null,w)}})
return B.m($async$Vn,w)},
OL(d){return this.bCo(d)},
bCo(d){var x=0,w=B.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OL=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:n=C.e.lk(v.ga2(0).b,new A.b4p(d))
m=$.T().b
m===$&&B.b()
u=y.z
l=A
x=2
return B.d(m.R("expenses").bh(0,B.S(["paid",!n.w,"updated_at",new B.ae(Date.now(),0,!1).ci()],u,u)).W("id",d).cj(0).dP(0),$async$OL)
case 2:t=l.cUy(f)
u=v.ga2(0)
m=B.a([],y.r)
for(s=v.ga2(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,B.K)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa2(0,u.awy(m))
return B.l(null,w)}})
return B.m($async$OL,w)}}
A.M8.prototype={}
A.a7j.prototype={
gap(d){return this.a}}
A.abf.prototype={
I(){return"_BudgetFilter."+this.b}}
A.a0m.prototype={
P(){return new A.abg(D.J6)}}
A.abg.prototype={
TD(d){return this.bcG(d)},
bcG(d){var x=0,w=B.n(y.H),v,u=this,t,s,r
var $async$TD=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.q(new A.bJ5(u))
x=1
break}u.q(new A.bJ6(u))
t=u.gT()
s=$.co()
r=t.a1(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return B.d(t.a1(0,s.gaX(),y.Z).az(0,d),$async$TD)
case 5:case 4:case 1:return B.l(v,w)}})
return B.m($async$TD,w)},
al(){this.aH()
B.je(new A.bJn(this),y.H)},
Qp(){var x=0,w=B.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Qp=B.j(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:r=u.gT()
q=$.aly()
p=y.h
o=r.a1(0,q.gaX(),p).x
if(o==null){x=1
break}t=u.c
t.toString
x=3
return B.d(B.cn(null,new A.bJ4(),!1,t,!0,!0,null,y.B),$async$Qp)
case 3:s=e
if(s==null){x=1
break}r=r.a1(0,q.gaX(),p)
q=s.a
p=s.b
t=s.c
r.Vn(new H.i3("",o,q,null,s.d,p,t,!1))
case 1:return B.l(v,w)}})
return B.m($async$Qp,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gT(),a2=a1.H($.HL(),y.b),a3=a1.H($.HM(),y.d),a4=a1.H($.aly(),y.g),a5=a2.b,a6=a5==null?e:A.dDA(a5,a3.b)
a5=B.iV(a1.H($.jv(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iI
a5=y.T
w=a1.H(B.cv($.co(),new A.bJb(),y.v,a5),a5)
if(f.y){a1=f.gapk()
return B.cM(e,C.cP,B.oj(C.f7,40,B.a([C.fU,D.aHs,L.cR6(a1,e),new A.aBD(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.db(x,new A.bJc(w))
a1=a1.H($.uw(),y.l)
u=a1.gv(a1)
t=new A.bJl(u==null?C.f4:u)
a1=y._
a5=B.V(a4.gbzv(),a1)
for(s=v.a,r=J.c9(s),q=r.gV(s),p=v.b,o=v.$ti.i("hv<1>"),n=new B.hv(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i3("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=B.V(a4.gbzR(0),a1)
for(s=r.gV(s),o=new B.hv(s,p,o),p=y.r;o.t();){r=s.gE(s)
n=B.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new H.i3("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new H.i3("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=B.V(A.d7a(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=A.d7a(q)
break
default:a1=e}h=C.e.d7(q,0,new A.bJd())
s=a6==null
if(s)g=D.bzo
else{r=a6.b
p=B.a8(r).i("a5<1>")
g=B.V(new B.a5(r,new A.bJe(),p),p.i("z.E"))}if(s)a1=C.cX
else{s=f.gaRp()
r=y.p
p=B.a([new B.pi(B.a([new B.qJ(s,"Nova despesa",e)],r),e),D.aHy,L.cR6(f.gapk(),w),new A.aOZ(a6,new A.bJf(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=B.aQ(a6.gpY(),!1)
n=a5.length
m=n===1?d:a0
l=B.aQ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new B.dN("N\xfameros",e,B.a([new G.S9(B.a([new G.xf("Gasto",o,""+n+" "+m),new G.xf("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=B.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,B.a([new N.m3(B.a([new B.ei("Todos",l===D.J6,n+m,new A.bJg(f),e),new B.ei("Pendentes",l===D.abW,m,new A.bJh(f),e),new B.ei("Pagos",l===D.abV,n,new A.bJi(f),e)],y.F),4,!0,e),C.as],r))}o.push(new A.aFD(a1,s,a5.length===0&&q.length===0,e))
p.push(new B.dN("Pagamentos",e,o,16,e))
a1=B.a([new B.kH(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new A.aCU(g,f.x,new A.bJj(f),e))
p.push(new B.dN("Categorias",e,a1,16,e))
p.push(new B.dN("Exportar",e,B.a([new F.DC("Gastos e parceiros",!1,new A.bJk(f),e)],r),16,e))
a1=B.oj(C.f7,40,p,e,!0,!1)}return B.cM(e,C.cP,a1,!0,e)},
IE(d){return this.aYh(d)},
aYh(d){var x=0,w=B.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IE=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return B.d(A.aTm(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IE)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return B.d(s.gT().a1(0,$.HL().gaX(),y.x).a_e(r),$async$IE)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a4(I.HO)
x=7
break
case 4:x=2
break
case 7:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$IE,w)}}
A.aOZ.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpY()>0?"Gastos "+B.aQ(t.gpY(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return B.vc(new B.il("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hA,0,"por definir","\u2014")}x=C.k.aK(t.gaBM()*100)
w=s-t.gpY()<0?"Acima do teto":"Ainda tens"
v=B.aQ(Math.abs(s-t.gpY()),!1)
s=B.aQ(s,!1)
u=t.gaBM()
return B.aU(B.vc(I.a1Y,"Gastos "+B.aQ(t.gpY(),!1)+" \xb7 "+x+"% do teto",w,C.hA,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
A.aCU.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:B.e3(s,0,B.eT(5,"count",y.S),B.a8(s).c).by(0),q=y.p,p=B.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,B.K)(r),++w)p.push(new A.aCV(r[w],null))
q=B.a([B.f9(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new B.il(u,v.e,!0,null))}return B.C(q,C.J,C.j,C.m,0,C.v)}}
A.aCV.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(B.cv($.co(),new A.bLv(),y.v,m),m)
if(l==null)x=C.rf
else{m=e.H($.cXt().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rf:m}m=B.a([],y.s)
for(w=A.dbW(o.c),v=w.length,u=J.a6(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new A.bLx(this,d)
if(w)return B.jQ(!1,!1,p,v,B.aQ(o.b,!1)+" gastos \xb7 sem teto",o.a,new B.oe("P\xf4r teto",new A.bLw(this,d,e),!0,p))
w=B.aQ(o.b,!1)
u=B.aQ(n,!1)
s=y.p
q=B.a([B.aL(new B.T2(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,B.a([C.aE,new A.amV(m,p)],s))
return B.jQ(!1,!1,p,v,w+" de "+u,o.a,B.C(q,C.dz,C.j,C.L,0,C.v))}}
A.aCs.prototype={
u(d){var x,w,v=null,u=$.ap,t=$.fh.cd(0.55),s=B.a1(18),r=B.a1(12),q=this.c,p=q.e
r=B.fX(r,B.aL(p==null?B.kD(B.b2(C.hu,u,v,v,v),C.t,!0):B.qG(p,144,new A.bIu(u),!1,C.bG,B.us(),!1,v,v,v),48,48),C.b0)
p=B.i(q.b,1,C.a0,v,v,D.c3D,v,v,v)
x=B.b2(C.iA,u,v,v,14)
w=q.d
q=w>0?q.gPZ()+" \xb7 "+B.aQ(w,!1):q.gPZ()
w=y.p
return new B.R(C.cS,B.aU(B.E(v,B.Q(B.a([r,C.ah,B.a7(B.C(B.a([p,C.h1,B.Q(B.a([x,C.eW,new B.dL(1,C.bi,B.i(q,1,C.a0,v,v,B.aG(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bh,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.w,C.j,C.m,0,v,v)],w),C.H,C.j,C.m,0,C.v),1),B.b2(C.i0,u,v,v,v)],w),C.w,C.j,C.m,0,v,v),C.r,v,v,new B.O(t,v,v,s,v,v,C.y),v,v,v,C.dN,v,v,v),new A.bIv(d),v),v)}}
A.aFD.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?B.S8(B.a([new B.il("+ Nova despesa",this.f,!0,j)],y.p),C.fi,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBl
x=new A.bUU(e,d)
w=y.p
v=B.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,B.K)(i),++t){s=i[t]
r=s.a
q=C.f.dj(r,":pay:")
r=C.f.b4(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gM(r.split(" \xb7 "))
n=B.aQ(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+A.d7E(m)
v.push(new U.DO(new B.cF(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new A.bUQ(d,e,s,q),B.HF(m)===C.hg,j))
continue}p=r?new A.bUR(d):new A.bUS(x,s)
v.push(new A.Xb(s,p,r||s.w?j:new A.bUT(x,s),j))}i=B.a([],w)
for(k=0;k<v.length;++k){u=B.a([],w)
if(k>0&&v[k] instanceof A.Xb&&v[k-1] instanceof A.Xb)u.push(C.fg)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBa)
return B.C(i,C.J,C.j,C.m,0,C.v)}}
A.Xb.prototype={
u(d){var x=this.c,w=x.r,v=B.a([B.aQ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+A.d7E(w))
v=C.e.a3(v," \xb7 ")
if(u)u=D.aHe
else{u=this.e
u=u!=null?new B.oe("Marcar pago",u,!0,null):D.aHl}return B.jQ(!1,!1,null,this.d,v,x.c,u)}}
A.aBx.prototype={}
A.NA.prototype={
P(){var x=$.ac()
return new A.aBy(new B.aI(C.an,x),new B.aI(C.an,x))}}
A.aBy.prototype={
m(){var x=this.d,w=$.ac()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a7()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dX(B.C(B.a([B.i("Adicionar despesa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a3,new M.jL("Despesa",x.d,x.w,w,w,w),C.P,new M.jL("Valor (\u20ac)",x.e,x.x,C.cF,w,w),C.P,T.cQM("Prazo (opcional)",new A.bGf(x),x.f),C.aA,new V.a0X(x.r,new A.bGg(x),w),C.a3,new B.fJ("Guardar",new A.bGh(x,d),!1,w)],y.p),C.J,C.j,C.L,0,C.v),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a1)}}
A.WO.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.HL(),y.b).b
if(j==null)x=k
else{j=j.c
j=B.eV(new B.a5(j,new A.bLz(l),B.a8(j).i("a5<1>")))
x=j}if(x==null)x=l.e
j=e.H($.aly(),y.g).b
w=B.a8(j).i("a5<1>")
v=B.V(new B.a5(j,new A.bLA(l),w),w.i("z.E"))
C.e.cO(v,new A.bLB())
j=y.T
u=e.H(B.cv($.co(),new A.bLC(),y.v,j),j)
t=A.dbW(l.e.c)
if(u==null)s=K.Fj
else{j=e.H($.aV8().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.Fj
j=J.db(j,new A.bLD(t))
s=B.V(j,j.$ti.i("z.E"))}j=B.aw(d,k,y.w).w
w=B.bN(B.E(k,k,C.r,k,k,new B.O(C.bt,k,k,B.a1(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=B.i(x.a,k,k,k,k,B.as(d).ok.r,k,k,k)
q=B.a7(new A.ahp("Gasto",B.aQ(x.b,!1),k),1)
p=x.d
o=y.p
p=B.a([w,C.a3,r,C.aA,B.Q(B.a([q,C.ar,B.a7(B.aU(new A.ahp("Teto \xb7 tocar para mudar",p===0?"Definir":B.aQ(p,!1),k),new A.bLE(d,e,x),k),1)],o),C.w,C.j,C.m,0,k,k)],o)
if(s.length!==0){w=B.a([C.bf,B.i("Contratado na app",k,k,k,k,B.as(d).ok.w,k,k,k),C.Y],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,B.K)(s),++n)w.push(new A.aCs(s[n],k))
C.e.n(p,w)}p.push(C.bf)
p.push(B.i("Despesas",k,k,k,k,B.as(d).ok.w,k,k,k))
p.push(C.Y)
w=v.length
if(w===0)p.push(D.bL7)
else for(n=0;n<v.length;v.length===w||(0,B.K)(v),++n){m=v[n]
r=B.i(m.c,k,k,k,k,C.h7,k,k,k)
q=m.r
q=q==null?k:B.i("At\xe9 "+C.f.aW(C.i.k(B.aM(q)),2,"0")+"/"+C.f.aW(C.i.k(B.ay(q)),2,"0")+"/"+B.aE(q),k,k,k,k,k,k,k,k)
p.push(B.j_(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,B.Q(B.a([B.i(B.aQ(m.f,!1),k,k,k,k,D.c5M,k,k,k),C.al,new R.D6(m.w,new A.bLF(e,m),k,$.ap,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.J8,k)],o),C.w,C.j,C.L,0,k,k),k))}return B.bD(!0,new B.ez(new B.aP(0,1/0,0,j.a.b*0.8),B.d_(p,k,O.CT,k,k,!1,C.a1,!0),k),k,C.a_,!0)}}
A.ahp.prototype={
u(d){var x=null,w=B.a1(16)
return B.E(x,B.C(B.a([B.i(this.c,x,x,x,x,C.b9,x,x,x),C.as,B.i(this.d,x,x,x,x,P.aaf,x,x,x)],y.p),C.H,C.j,C.m,0,C.v),C.r,x,x,new B.O(C.a9,x,x,w,x,x,C.y),x,x,x,C.cT,x,x,x)}}
A.aBD.prototype={
bc(d,e){var x,w=y.t,v=e.H(B.cv($.co(),new A.bHd(),y.v,w),w),u=e.H($.cXs(),y.o)
w=e.H($.uw(),y.l)
x=w.gv(w)
return B.h9(u,new A.bHe(this,new A.bHj(x==null?C.f4:x),v),new A.bHf(e),new A.bHg(),!1,!0,!1)}}
A.amV.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.ap,n=y.p,m=B.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v){u=x[v]
t=$.fh
s=new B.b4(999,999)
r=new B.bd(o.cd(0.25),1,C.ag,-1)
q=B.b2(C.iA,o,p,p,13)
t=B.E(p,B.Q(B.a([q,C.yE,new B.dL(1,C.bi,B.i(u,1,C.a0,p,p,new B.M(!0,o,p,p,p,p,14,C.cU,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),B.b2(C.i0,o,p,p,16)],n),C.w,C.j,C.L,0,p,p),C.r,p,D.afO,new B.O(t,p,new B.dV(r,r,r,r),new B.ce(s,s,s,s),p,p,C.y),p,p,p,D.auw,p,p,p)
m.push(new B.kO(new B.rb(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a8,p,p,p,p),!1,!1,p,!1,!1,new B.hM(t,new A.aXT(d),p,p),p))}return B.e9(C.bc,m,C.r,C.bj,6,6)}}
var z=a.updateTypes(["y(i3)","v(i3,i3)","P(P,Ds)","zX()","F<~>(c?)","F<~>()","NA(N)","P(P,i3)","y(Ds)","F<lK>()","WO(N)","~(i3)","y(nl)","y(rN)","i3(a4<c,@>)","DB()"])
A.cD2.prototype={
$1(d){return this.aF1(d)},
aF1(a1){var x=0,w=B.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=B.j(function(a2,a3){if(a2===1)return B.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(B.cv($.co(),new A.cCZ(),y.v,f),f)
f=J.a6(e)
if(f.gY(e)){v=D.bzp
x=1
break}u=B.a([],y.s)
for(t=f.gV(e);t.t();)u.push(t.gE(t).a)
t=$.T()
s=t.b
s===$&&B.b()
r=y.G
q=s.R("budgets").az(0,"wedding_id, total").eP("wedding_id",u).b7(new A.cD_(),r)
p=t.b.R("budget_categories").az(0,"wedding_id, amount").eP("wedding_id",u).b7(new A.cD0(),r)
o=t.b.R("expenses").az(0,"wedding_id, amount, paid").eP("wedding_id",u).b7(new A.cD1(),r)
r=y.N
u=y.i
t=B.A(r,u)
d=s=y.P
a0=J
x=3
return B.d(q,$async$$1)
case 3:d,n=a0.bk(a3,s),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<U.E>")),m=m.i("U.E")
case 4:if(!n.t()){x=5
break}l=n.d
if(l==null)l=m.a(l)
k=J.a6(l)
t.j(0,B.a0(k.h(l,"wedding_id")),B.dt(k.h(l,"total")))
x=4
break
case 5:j=B.A(r,u)
d=J
x=6
return B.d(p,$async$$1)
case 6:n=d.bk(a3,s),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<U.E>")),m=m.i("U.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a6(l)
i=B.a0(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=B.aJ(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=B.A(r,u)
d=J
x=9
return B.d(o,$async$$1)
case 9:u=d.bk(a3,s),s=B.u(u),u=new B.ak(u,u.gA(u),s.i("ak<U.E>")),s=s.i("U.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a6(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=B.a0(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=B.aJ(n.h(r,"amount"))
if(r==null)r=null
g.j(0,i,m+(r==null?0:r))
x=10
break
case 11:u=B.a([],y.n)
for(f=f.gV(e);f.t();){s=f.gE(f)
r=s.a
n=t.h(0,r)
s=n==null?s.as:n
if(s==null)s=0
n=j.h(0,r)
if(n==null)n=0
m=g.h(0,r)
u.push(new B.aMf([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1301}
A.cCZ.prototype={
$1(d){return d.c},
$S:130}
A.cD_.prototype={
$1(d){return d},
$S:29}
A.cD0.prototype={
$1(d){return d},
$S:29}
A.cD1.prototype={
$1(d){return d},
$S:29}
A.b2N.prototype={
$2(d,e){return d+e.a.b},
$S:z+2}
A.b4q.prototype={
$1(d){return d.w},
$S:z+0}
A.b4r.prototype={
$1(d){return!d.w},
$S:z+0}
A.b4n.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
A.b4o.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
A.b4p.prototype={
$1(d){return d.a===this.a},
$S:z+0}
A.bJ5.prototype={
$0(){return this.a.y=!0},
$S:0}
A.bJ6.prototype={
$0(){return this.a.y=!1},
$S:0}
A.bJn.prototype={
$0(){return this.a.gT().a1(0,$.HL().gaX(),y.x).Zv(0).eF(new A.bJm())},
$S:1}
A.bJm.prototype={
$1(d){},
$S:14}
A.bJ4.prototype={
$1(d){return D.cka},
$S:z+6}
A.bJb.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
A.bJc.prototype={
$1(d){return d.x!==C.f1&&d.b===this.a},
$S:77}
A.bJl.prototype={
$2(d,e){return B.j8(d,this.a.lg(e))},
$1(d){return this.$2(d,null)},
$S:1304}
A.bJd.prototype={
$2(d,e){return d+e.f},
$S:z+7}
A.bJe.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
A.bJf.prototype={
$0(){return this.a.IE(this.b.a)},
$S:0}
A.bJg.prototype={
$0(){var x=this.a
return x.q(new A.bJa(x))},
$S:0}
A.bJa.prototype={
$0(){return this.a.w=D.J6},
$S:0}
A.bJh.prototype={
$0(){var x=this.a
return x.q(new A.bJ9(x))},
$S:0}
A.bJ9.prototype={
$0(){return this.a.w=D.abW},
$S:0}
A.bJi.prototype={
$0(){var x=this.a
return x.q(new A.bJ8(x))},
$S:0}
A.bJ8.prototype={
$0(){return this.a.w=D.abV},
$S:0}
A.bJj.prototype={
$0(){var x=this.a
return x.q(new A.bJ7(x))},
$S:0}
A.bJ7.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
A.bJk.prototype={
$0(){return A.Cq(this.a.gT().a1(0,$.co(),y.v).b.a)},
$S:z+9}
A.czI.prototype={
$1(d){var x=null,w=this.b
return new B.eK(B.i(this.a,x,x,x,x,x,x,x,x),B.cN(x,C.aa,!0,x,!0,C.z,x,B.cQ(),w,x,x,x,x,x,2,D.aFq,C.a2,!0,x,!0,x,!1,x,C.aI,x,x,x,x,C.j_,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.av,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.at,x,C.b8,x,x,x,x),B.a([B.cp(C.cL,x,x,new A.czG(d),x,x),B.bC(C.du,new A.czH(d,w),x)],y.p),x)},
$S:16}
A.czG.prototype={
$0(){return B.aq(this.a,!1).bJ()},
$S:0}
A.czH.prototype={
$0(){var x=B.aq(this.a,!1),w=C.f.D(this.b.a.a)
w=B.b0(w," ","")
return x.aj(B.fp(B.b0(w,",",".")))},
$S:0}
A.czR.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=B.bG(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?B.bG(2100,1,1,0,0):x)},
$S:z+1}
A.bLv.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
A.bLx.prototype={
$0(){return B.cn(null,new A.bLy(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
A.bLy.prototype={
$1(d){return new A.WO(this.a.e.a,null)},
$S:z+10}
A.bLw.prototype={
$0(){return A.ak6(this.b,this.c,this.a.e.a.a,0)},
$S:0}
A.bIv.prototype={
$0(){var x=this.a
B.aq(x,!1).bJ()
B.ai(x).au("/bookings",null,y.X)},
$S:0}
A.bIu.prototype={
$3(d,e,f){return B.kD(B.b2(C.hu,this.a,null,null,null),C.t,!0)},
$S:145}
A.bUU.prototype={
$1(d){var x,w,v=null
this.a.a1(0,$.aly().gaX(),y.h).OL(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a4(B.cA(v,v,v,v,v,C.z,v,B.i(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.X,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
A.bUQ.prototype={
$0(){var x=this
return B.rB(x.a,x.b,C.f.bD(x.c.a,x.d+5),null,null)},
$S:0}
A.bUR.prototype={
$0(){return B.ai(this.a).au("/bookings",null,y.X)},
$S:0}
A.bUS.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bUT.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bGf.prototype={
$1(d){var x=this.a
return x.q(new A.bGe(x,d))},
$S:259}
A.bGe.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.bGg.prototype={
$1(d){var x=this.a
return x.q(new A.bGd(x,d))},
$S:95}
A.bGd.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.bGh.prototype={
$0(){var x,w=this.a,v=C.f.D(w.e.a.a),u=B.fp(B.b0(v,",","."))
w.q(new A.bGc(w,u))
if(w.w!=null||w.x!=null)return
v=B.aq(this.b,!1)
x=C.f.D(w.d.a.a)
u.toString
v.aj(new A.aBx(x,u,w.f,w.r))},
$S:0}
A.bGc.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A despesa precisa de um t\xedtulo":null
x.x=this.b==null?"Indica um valor v\xe1lido":null},
$S:0}
A.bLz.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+12}
A.bLA.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
A.bLB.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=B.bG(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?B.bG(2100,1,1,0,0):x)},
$S:z+1}
A.bLC.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
A.bLD.prototype={
$1(d){return C.e.p(this.a,d.a)},
$S:z+13}
A.bLE.prototype={
$0(){var x=this.c
return A.ak6(this.a,this.b,x.a,x.d)},
$S:0}
A.bLF.prototype={
$1(d){return this.a.a1(0,$.aly().gaX(),y.h).OL(this.b.a)},
$S:139}
A.bHd.prototype={
$1(d){return d.c},
$S:130}
A.bHj.prototype={
$2(d,e){return B.j8(d,this.a.lg(e))},
$S:42}
A.bHg.prototype={
$0(){return D.bLN},
$S:91}
A.bHf.prototype={
$2(d,e){return B.S8(B.a([new B.il("Tentar outra vez",new A.bH6(this.a),!1,null)],y.p),C.fi,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1306}
A.bH6.prototype={
$0(){return this.a.ai($.cXs())},
$S:0}
A.bHe.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new A.bHh(g),e=new A.bHi(g,this.b),d=J.c9(a4),a0=d.d7(a4,0,new A.bH7()),a1=d.d7(a4,0,new A.bH8(f)),a2=d.d7(a4,0,new A.bH9(e)),a3=y.N
a3=B.A(a3,a3)
for(x=J.ar(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C1(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bD(s,1))}x=B.aQ(a1,!1)
w=a0>0
v=w?"de "+B.aQ(a0,!1):"gastos"
u=w?C.k.ah(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aK(a1/a0*100)+"% dos tetos":""
x=B.vc(i,""+t+" "+r+w,"Todos os eventos",C.hA,u,v,x)
v=y.p
u=B.a([new G.S9(B.a([new G.xf("Gasto",B.aQ(a1,!1),h),new G.xf("Por pagar",B.aQ(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=B.a([],v)
for(t=B.eA(a4,0,y.A),r=J.ar(t.a),q=t.b,t=new B.c0(r,q,B.u(t).i("c0<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new B.a3(q+n,r.gE(r)):B.aj(B.c1())
o.a=null
m=n.b
o.a=m
l=B.a([],v)
if(n.a>0)l.push(C.fg)
n=a3.h(0,m.a[0])
n=B.i(n==null?"Evento":n,1,C.a0,i,i,C.ao,i,i,i)
k=o.a.a[2]
k=B.a([k>0?"Teto "+B.aQ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+B.aQ(j[3]+e.$1(j[0]),!1))}n=B.C(B.a([n,C.be,B.i(C.e.a3(k," \xb7 "),i,i,i,i,C.W,i,i,i)],v),C.H,C.j,C.m,0,C.v)
k=o.a.a
l.push(new B.hM(B.E(i,B.Q(B.a([new B.bT(1,C.aw,n,i),C.ar,B.i(B.aQ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.ao,i,i,i),C.bq,C.lF],v),C.w,C.j,C.m,0,i,i),C.r,C.am,C.e4,i,i,i,i,C.cr,i,i,i),new A.bHa(o,g),i,i))
C.e.n(w,l)}return B.C(B.a([x,new B.dN("N\xfameros",i,u,16,i),new B.dN("Por evento \xb7 "+d,i,w,16,i),D.aBc],v),C.J,C.j,C.m,0,C.v)},
$S:1307}
A.bHh.prototype={
$1(d){return J.db(this.a.e,new A.bH4(d)).d7(0,0,new A.bH5())},
$S:174}
A.bH4.prototype={
$1(d){return d.b===this.a&&d.x!==C.f1},
$S:77}
A.bH5.prototype={
$2(d,e){return d+e.w},
$S:458}
A.bHi.prototype={
$1(d){return J.db(this.a.e,new A.bHb(d)).d7(0,0,new A.bHc(this.b))},
$S:174}
A.bHb.prototype={
$1(d){return d.b===this.a&&d.x!==C.f1},
$S:77}
A.bHc.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:458}
A.bH7.prototype={
$2(d,e){return d+e.a[2]},
$S:260}
A.bH8.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:260}
A.bH9.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:260}
A.bHa.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
A.aXT.prototype={
$0(){return B.ai(this.a).au("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(A,"dEr","cUy",14)
w(A,"dEq","dlo",15)
v(A.DB.prototype,"giJ","d4",3)
var t
u(t=A.abg.prototype,"gapk","TD",4)
v(t,"gaRp","Qp",5)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cD2,A.cCZ,A.cD_,A.cD0,A.cD1,A.b4q,A.b4r,A.b4n,A.b4p,A.bJm,A.bJ4,A.bJb,A.bJc,A.bJl,A.bJe,A.czI,A.bLv,A.bLy,A.bIu,A.bUU,A.bGf,A.bGg,A.bLz,A.bLA,A.bLC,A.bLD,A.bLF,A.bHd,A.bHe,A.bHh,A.bH4,A.bHi,A.bHb])
x(B.H,[A.Ds,A.b2M,A.zX,A.M8,A.a7j,A.aBx])
x(B.cR,[A.b2N,A.bJd,A.czR,A.bLB,A.bHj,A.bHf,A.bH5,A.bHc,A.bH7,A.bH8,A.bH9])
w(A.DB,B.fa)
x(B.bR,[A.b4o,A.bJ5,A.bJ6,A.bJn,A.bJf,A.bJg,A.bJa,A.bJh,A.bJ9,A.bJi,A.bJ8,A.bJj,A.bJ7,A.bJk,A.czG,A.czH,A.bLx,A.bLw,A.bIv,A.bUQ,A.bUR,A.bUS,A.bUT,A.bGe,A.bGd,A.bGh,A.bGc,A.bLE,A.bHg,A.bH6,A.bHa,A.aXT])
w(A.abf,B.fs)
w(A.a0m,B.dD)
w(A.abg,B.dy)
x(B.L,[A.aOZ,A.aCU,A.aCs,A.Xb,A.ahp,A.amV])
x(B.en,[A.aCV,A.aFD,A.WO,A.aBD])
w(A.NA,B.J)
w(A.aBy,B.a_)})()
B.bs(b.typeUniverse,JSON.parse('{"DB":{"fa":["zX"]},"a0m":{"J":[],"e":[],"f":[]},"NA":{"J":[],"e":[],"f":[]},"WO":{"J":[],"e":[],"f":[]},"abg":{"a_":["a0m"]},"aOZ":{"L":[],"e":[],"f":[]},"aCU":{"L":[],"e":[],"f":[]},"aCV":{"J":[],"e":[],"f":[]},"aCs":{"L":[],"e":[],"f":[]},"aFD":{"J":[],"e":[],"f":[]},"Xb":{"L":[],"e":[],"f":[]},"aBy":{"a_":["NA"]},"ahp":{"L":[],"e":[],"f":[]},"aBD":{"J":[],"e":[],"f":[]},"amV":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{l:x("ax<f7>"),k:x("ax<t<rN>>"),u:x("ax<t<fY>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>>"),y:x("ax<a4<c,t<c>>>"),x:x("zx"),b:x("uK"),d:x("rS"),Z:x("p9"),v:x("ed"),_:x("i3"),h:x("DB"),g:x("zX"),D:x("r<Ds>"),r:x("r<i3>"),Q:x("r<xf>"),F:x("r<ei>"),Y:x("r<a4<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>"),E:x("r<a7j>"),c:x("r<M8>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fY>"),t:x("t<fy>"),G:x("t<a4<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>"),P:x("a4<c,@>"),w:x("dn"),A:x("+eventId,spentByHand,total,unpaidByHand(c,P,P,P)"),e:x("lK"),N:x("c"),B:x("aBx"),q:x("ds"),i:x("P"),z:x("@"),S:x("v"),X:x("H?"),T:x("c?"),I:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afO=new B.aP(0,1/0,32,1/0)
D.auw=new B.a2(8,5,6,5)
D.bz6=x([],y.r)
D.aAc=new A.zX(!1,D.bz6)
D.aBa=new B.kH("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBc=new B.kH("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBl=new B.kH("Sem pagamentos nesta vista.",8,null)
D.aFq=new B.dT(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aHe=new B.et("Pago",C.da,null)
D.aHl=new B.et("Por pagar",C.hy,null)
D.aHs=new B.m4("Or\xe7amento","Todos os teus eventos",null)
D.aHy=new B.m4("Or\xe7amento",null,null)
D.byn=x(["catering"],y.s)
D.bzo=x([],y.D)
D.bzp=x([],y.n)
D.bzU=x(["flowers_decor"],y.s)
D.bBq=x(["music_dj","bands_musicians"],y.s)
D.bBY=x(["photography"],y.s)
D.bDd=x(["venue"],y.s)
D.aEI=new B.qH("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kA,null)
D.bL7=new B.R(C.hV,D.aEI,null)
D.bLN=new B.R(Q.uI,C.dZ,null)
D.c3D=new B.M(!0,C.A,null,null,null,null,14,C.cU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5M=new B.M(!0,null,null,null,null,null,null,C.cU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cka=new A.NA(null)
D.J6=new A.abf(0,"all")
D.abV=new A.abf(1,"paid")
D.abW=new A.abf(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dRB","cXs",()=>C.bT.$1$1(new A.cD2(),y.m))
x($,"dSq","aly",()=>B.mS(A.dEq(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["Sl9w5+9J+0HROXLectNC2VYdqSk="]=a.current})($__dart_deferred_initializers__);