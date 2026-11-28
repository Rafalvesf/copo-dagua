((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,N,O,P,Q,E,R,S,F,G,T,H,K,U,I,V,A={cDb:function cDb(){},cD7:function cD7(){},cD8:function cD8(){},cD9:function cD9(){},cDa:function cDa(){},
dDO(d,e){var x,w,v,u=B.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.H)(x),++v)u.push(new A.Du(x[v]))
return new A.b2S(d.b,u)},
Du:function Du(d){this.a=d},
b2S:function b2S(d,e){this.a=d
this.b=e},
b2T:function b2T(){},
cUH(d){var x="category",w="due_date",v=J.a7(d),u=B.a1(v.h(d,"id")),t=B.a1(v.h(d,"wedding_id")),s=B.a1(v.h(d,"title")),r=A.dA5(A.d9b(B.C(v.h(d,x)))),q=A.d9b(B.C(v.h(d,x))),p=B.dt(v.h(d,"amount")),o=v.h(d,w)==null?null:B.d9(B.a1(v.h(d,w)))
v=B.dU(v.h(d,"paid"))
return new H.i3(u,t,s,r,q,p,o,v===!0)},
d9b(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dA5(d){var x
A:{if("venue"===d){x=E.xO
break A}if("catering"===d){x=E.xK
break A}if("photography"===d){x=E.xL
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xM
break A}if("flowers_decor"===d){x=E.xN
break A}x=null
break A}return x},
dlD(){return new A.DD()},
A0:function A0(d,e){this.a=d
this.b=e},
b4w:function b4w(){},
b4x:function b4x(){},
DD:function DD(){this.b=this.x=null},
b4t:function b4t(){},
b4u:function b4u(d,e){this.a=d
this.b=e},
b4v:function b4v(d){this.a=d},
Ct(d){var x=0,w=B.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ct=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:x=3
return B.d(F.akj(),$async$Ct)
case 3:u=$.T()
t=u.b
t===$&&B.b()
x=4
return B.d(t.R("events").az(0,"partner_name_1, partner_name_2").W("id",d).dA(),$async$Ct)
case 4:s=f
x=5
return B.d(u.b.R("bookings").az(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("wedding_id",d).dl(0,"event_date",!1),$async$Ct)
case 5:r=f
u=B.a([],y.s)
for(t=J.ar(r);t.t();)u.push(B.a1(J.h(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=B.a([],y.Y)
x=7
break
case 8:t=$.T().b
t===$&&B.b()
x=9
return B.d(t.R("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").eP("booking_id",u).tJ(0,"created_at"),$async$Ct)
case 9:q=f
case 7:u=$.T()
t=u.b
t===$&&B.b()
x=10
return B.d(t.R("expenses").az(0,"title, category, amount, due_date, paid").W("wedding_id",d).tJ(0,"due_date"),$async$Ct)
case 10:p=f
x=11
return B.d(u.b.R("budget_categories").az(0,"name, amount").W("wedding_id",d).tJ(0,"position"),$async$Ct)
case 11:o=f
x=12
return B.d(u.b.R("budgets").az(0,"total").W("wedding_id",d).dA(),$async$Ct)
case 12:n=f
m=F.cUt(F.cAr(s),"Gastos e parceiros",r,q,!1)
u=B.a([],y.c)
for(t=J.ar(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cx(j==null?"":j)
i=k.h(l,"category")
i=J.cx(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=B.fo(B.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=B.dL(B.q(g))
g=g==null?null:g.eg()}u.push(new A.Mb(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=B.a([],y.E)
for(l=J.ar(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cx(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=B.fo(B.q(k))
if(k==null)k=0}t.push(new A.a7p(i,k))}l=n==null?null:F.cUZ(J.h(n,"total"))
v=new F.lL(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$Ct,w)},
Mb:function Mb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7p:function a7p(d,e){this.a=d
this.b=e},
diX(){return new A.a0o(null)},
aTr(d,e,f){var x=0,w=B.n(y.I),v,u,t
var $async$aTr=B.j(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return B.d(B.fM(!0,new A.czR(e,new B.aI(new B.bJ(u,C.aL,C.aD),$.ac())),d,y.i),$async$aTr)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aTr,w)},
akd(d,e,f,g){return A.dzT(d,e,f,g)},
dzT(d,e,f,g){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q
var $async$akd=B.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return B.d(A.aTr(d,"Teto para "+f,g),$async$akd)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return B.d(e.a1(0,$.HN().gaX(),y.x).OF(f,r),$async$akd)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a4(I.HP)
x=7
break
case 4:x=2
break
case 7:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$akd,w)},
d7j(d){var x=B.V(d,y._)
C.e.cO(x,new A.cA_())
return x},
d7N(d){var x=C.f.aW(C.i.k(B.aN(d)),2,"0"),w=C.f.aW(C.i.k(B.ay(d)),2,"0"),v=B.aE(d)===B.aE(new B.ae(Date.now(),0,!1))?"":"/"+B.aE(d)
return x+"/"+w+v},
abl:function abl(d,e){this.a=d
this.b=e},
a0o:function a0o(d){this.a=d},
abm:function abm(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bJd:function bJd(d){this.a=d},
bJe:function bJe(d){this.a=d},
bJv:function bJv(d){this.a=d},
bJu:function bJu(){},
bJc:function bJc(){},
bJj:function bJj(){},
bJk:function bJk(d){this.a=d},
bJt:function bJt(d){this.a=d},
bJl:function bJl(){},
bJm:function bJm(){},
bJn:function bJn(d,e){this.a=d
this.b=e},
bJo:function bJo(d){this.a=d},
bJi:function bJi(d){this.a=d},
bJp:function bJp(d){this.a=d},
bJh:function bJh(d){this.a=d},
bJq:function bJq(d){this.a=d},
bJg:function bJg(d){this.a=d},
bJr:function bJr(d){this.a=d},
bJf:function bJf(d){this.a=d},
bJs:function bJs(d){this.a=d},
czR:function czR(d,e){this.a=d
this.b=e},
czP:function czP(d){this.a=d},
czQ:function czQ(d,e){this.a=d
this.b=e},
cA_:function cA_(){},
aP3:function aP3(d,e,f){this.c=d
this.d=e
this.a=f},
aD0:function aD0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aD1:function aD1(d,e){this.e=d
this.a=e},
bLD:function bLD(){},
bLF:function bLF(d,e){this.a=d
this.b=e},
bLG:function bLG(d){this.a=d},
bLE:function bLE(d,e,f){this.a=d
this.b=e
this.c=f},
aCz:function aCz(d,e){this.c=d
this.a=e},
bID:function bID(d){this.a=d},
bIC:function bIC(d){this.a=d},
aFJ:function aFJ(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bV1:function bV1(d,e){this.a=d
this.b=e},
bUY:function bUY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUZ:function bUZ(d){this.a=d},
bV_:function bV_(d,e){this.a=d
this.b=e},
bV0:function bV0(d,e){this.a=d
this.b=e},
Xd:function Xd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBD:function aBD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NB:function NB(d){this.a=d},
aBE:function aBE(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.x=_.w=_.r=_.f=null},
bGn:function bGn(d){this.a=d},
bGm:function bGm(d,e){this.a=d
this.b=e},
bGo:function bGo(d){this.a=d},
bGl:function bGl(d,e){this.a=d
this.b=e},
bGp:function bGp(d,e){this.a=d
this.b=e},
bGk:function bGk(d,e){this.a=d
this.b=e},
WQ:function WQ(d,e){this.e=d
this.a=e},
bLH:function bLH(d){this.a=d},
bLI:function bLI(d){this.a=d},
bLJ:function bLJ(){},
bLK:function bLK(){},
bLL:function bLL(d){this.a=d},
bLM:function bLM(d,e,f){this.a=d
this.b=e
this.c=f},
bLN:function bLN(d,e){this.a=d
this.b=e},
ahw:function ahw(d,e,f){this.c=d
this.d=e
this.a=f},
aBJ:function aBJ(d,e,f){this.e=d
this.f=e
this.a=f},
bHl:function bHl(){},
bHr:function bHr(d){this.a=d},
bHo:function bHo(){},
bHn:function bHn(d){this.a=d},
bHe:function bHe(d){this.a=d},
bHm:function bHm(d,e,f){this.a=d
this.b=e
this.c=f},
bHp:function bHp(d){this.a=d},
bHc:function bHc(d){this.a=d},
bHd:function bHd(){},
bHq:function bHq(d,e){this.a=d
this.b=e},
bHj:function bHj(d){this.a=d},
bHk:function bHk(d){this.a=d},
bHf:function bHf(){},
bHg:function bHg(d){this.a=d},
bHh:function bHh(d){this.a=d},
bHi:function bHi(d,e){this.a=d
this.b=e},
an1:function an1(d,e){this.c=d
this.a=e},
aY_:function aY_(d){this.a=d},
dca(d){var x
switch(d){case E.xO:x=D.bDj
break
case E.xK:x=D.byx
break
case E.xL:x=D.bC6
break
case E.xM:x=D.bBy
break
case E.xN:x=D.bA2
break
default:x=C.a9
break}return x}},D,L,M
J=c[1]
B=c[0]
C=c[2]
N=c[183]
O=c[200]
P=c[214]
Q=c[215]
E=c[216]
R=c[157]
S=c[213]
F=c[128]
G=c[77]
T=c[129]
H=c[76]
K=c[212]
U=c[126]
I=c[211]
V=c[78]
A=a.updateHolder(c[53],A)
D=c[210]
L=c[72]
M=c[176]
A.Du.prototype={
gaq(d){return this.a.a}}
A.b2S.prototype={
gpW(){return C.e.d7(this.b,0,new A.b2T())},
gaBG(){var x=this.a
return x===0?0:C.k.ae(this.gpW()/x,0,1)}}
A.A0.prototype={
gbzt(){var x=this.b,w=B.a8(x).i("a5<1>")
x=B.V(new B.a5(x,new A.b4w(),w),w.i("z.E"))
return x},
gbzP(d){var x=this.b,w=B.a8(x).i("a5<1>")
x=B.V(new B.a5(x,new A.b4x(),w),w.i("z.E"))
return x},
awL(d,e){var x=e==null?this.a:e
return new A.A0(x,d==null?this.b:d)},
im(d){return this.awL(null,d)},
aws(d){return this.awL(d,null)}}
A.DD.prototype={
d4(){var x=y.T,w=this.x=B.eP(this).H(B.cv($.co(),new A.b4t(),y.v,x),x)
if(w!=null)B.jf(new A.b4u(this,w),y.H)
return D.aAg},
c_(d,e){return this.bwV(0,e)},
bwV(d,e){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$c_=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:v.sa2(0,v.ga2(0).im(!0))
u=$.T().b
u===$&&B.b()
t=A
s=!1
r=J
x=2
return B.d(u.R("expenses").cj(0).W("wedding_id",e).dl(0,"created_at",!0),$async$c_)
case 2:v.sa2(0,new t.A0(s,r.d3(g,A.dEF(),y._).by(0)))
return B.l(null,w)}})
return B.m($async$c_,w)},
Ve(d){return this.bmK(d)},
bmK(d){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$Ve=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:r=$.T().b
r===$&&B.b()
r=r.R("expenses")
u=d.e
if(u==null){u=d.d
u=u==null?null:u.b}t=d.r
t=t==null?null:C.e.gM(t.ci().split("T"))
x=2
return B.d(r.de(0,B.S(["wedding_id",d.b,"title",d.c,"category",u,"amount",d.f,"due_date",t],y.N,y.X)).cj(0).dP(0),$async$Ve)
case 2:s=f
t=v.ga2(0)
r=B.V(v.ga2(0).b,y._)
r.push(A.cUH(s))
v.sa2(0,t.aws(r))
return B.l(null,w)}})
return B.m($async$Ve,w)},
OC(d){return this.bCn(d)},
bCn(d){var x=0,w=B.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OC=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:n=C.e.lk(v.ga2(0).b,new A.b4v(d))
m=$.T().b
m===$&&B.b()
u=y.z
l=A
x=2
return B.d(m.R("expenses").bh(0,B.S(["paid",!n.w,"updated_at",new B.ae(Date.now(),0,!1).ci()],u,u)).W("id",d).cj(0).dP(0),$async$OC)
case 2:t=l.cUH(f)
u=v.ga2(0)
m=B.a([],y.r)
for(s=v.ga2(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,B.H)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa2(0,u.aws(m))
return B.l(null,w)}})
return B.m($async$OC,w)}}
A.Mb.prototype={}
A.a7p.prototype={
gaq(d){return this.a}}
A.abl.prototype={
I(){return"_BudgetFilter."+this.b}}
A.a0o.prototype={
P(){return new A.abm(D.J8)}}
A.abm.prototype={
Tu(d){return this.bcA(d)},
bcA(d){var x=0,w=B.n(y.H),v,u=this,t,s,r
var $async$Tu=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.q(new A.bJd(u))
x=1
break}u.q(new A.bJe(u))
t=u.gT()
s=$.co()
r=t.a1(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return B.d(t.a1(0,s.gaX(),y.Z).az(0,d),$async$Tu)
case 5:case 4:case 1:return B.l(v,w)}})
return B.m($async$Tu,w)},
al(){this.aH()
B.jf(new A.bJv(this),y.H)},
Qg(){var x=0,w=B.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Qg=B.j(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:r=u.gT()
q=$.alF()
p=y.h
o=r.a1(0,q.gaX(),p).x
if(o==null){x=1
break}t=u.c
t.toString
x=3
return B.d(B.cn(null,new A.bJc(),!1,t,!0,!0,null,y.B),$async$Qg)
case 3:s=e
if(s==null){x=1
break}r=r.a1(0,q.gaX(),p)
q=s.a
p=s.b
t=s.c
r.Ve(new H.i3("",o,q,null,s.d,p,t,!1))
case 1:return B.l(v,w)}})
return B.m($async$Qg,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gT(),a2=a1.H($.HN(),y.b),a3=a1.H($.HO(),y.d),a4=a1.H($.alF(),y.g),a5=a2.b,a6=a5==null?e:A.dDO(a5,a3.b)
a5=B.iW(a1.H($.jw(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iG
a5=y.T
w=a1.H(B.cv($.co(),new A.bJj(),y.v,a5),a5)
if(f.y){a1=f.gapf()
return B.cM(e,C.cP,B.ol(C.f9,40,B.a([C.fS,D.aHw,L.cRg(a1,e),new A.aBJ(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.dc(x,new A.bJk(w))
a1=a1.H($.uw(),y.l)
u=a1.gv(a1)
t=new A.bJt(u==null?C.f6:u)
a1=y._
a5=B.V(a4.gbzt(),a1)
for(s=v.a,r=J.c9(s),q=r.gV(s),p=v.b,o=v.$ti.i("hw<1>"),n=new B.hw(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i3("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=B.V(a4.gbzP(0),a1)
for(s=r.gV(s),o=new B.hw(s,p,o),p=y.r;o.t();){r=s.gE(s)
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
n.push(new H.i3("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=B.V(A.d7j(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=A.d7j(q)
break
default:a1=e}h=C.e.d7(q,0,new A.bJl())
s=a6==null
if(s)g=D.bzx
else{r=a6.b
p=B.a8(r).i("a5<1>")
g=B.V(new B.a5(r,new A.bJm(),p),p.i("z.E"))}if(s)a1=D.bYc
else{s=f.gaRj()
r=y.p
p=B.a([new B.pl(B.a([new B.qL(s,"Nova despesa",e)],r),e),D.aHC,L.cRg(f.gapf(),w),new A.aP3(a6,new A.bJn(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=B.aQ(a6.gpW(),!1)
n=a5.length
m=n===1?d:a0
l=B.aQ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new B.dN("N\xfameros",e,B.a([new G.S8(B.a([new G.xj("Gasto",o,""+n+" "+m),new G.xj("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=B.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,B.a([new N.m4(B.a([new B.ei("Todos",l===D.J8,n+m,new A.bJo(f),e),new B.ei("Pendentes",l===D.ac1,m,new A.bJp(f),e),new B.ei("Pagos",l===D.ac0,n,new A.bJq(f),e)],y.F),4,!0,e),C.at],r))}o.push(new A.aFJ(a1,s,a5.length===0&&q.length===0,e))
p.push(new B.dN("Pagamentos",e,o,16,e))
a1=B.a([new B.kJ(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new A.aD0(g,f.x,new A.bJr(f),e))
p.push(new B.dN("Categorias",e,a1,16,e))
p.push(new B.dN("Exportar",e,B.a([new F.DE("Gastos e parceiros",!1,new A.bJs(f),e)],r),16,e))
a1=B.ol(C.f9,40,p,e,!0,!1)}return B.cM(e,C.cP,a1,!0,e)},
Iy(d){return this.aYb(d)},
aYb(d){var x=0,w=B.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Iy=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return B.d(A.aTr(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Iy)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return B.d(s.gT().a1(0,$.HN().gaX(),y.x).a_8(r),$async$Iy)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a4(I.HP)
x=7
break
case 4:x=2
break
case 7:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Iy,w)}}
A.aP3.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpW()>0?"Gastos "+B.aQ(t.gpW(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return B.vc(new B.im("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hA,0,"por definir","\u2014")}x=C.k.aK(t.gaBG()*100)
w=s-t.gpW()<0?"Acima do teto":"Ainda tens"
v=B.aQ(Math.abs(s-t.gpW()),!1)
s=B.aQ(s,!1)
u=t.gaBG()
return B.aU(B.vc(I.a20,"Gastos "+B.aQ(t.gpW(),!1)+" \xb7 "+x+"% do teto",w,C.hA,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
A.aD0.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:B.e3(s,0,B.eT(5,"count",y.S),B.a8(s).c).by(0),q=y.p,p=B.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,B.H)(r),++w)p.push(new A.aD1(r[w],null))
q=B.a([B.fa(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new B.im(u,v.e,!0,null))}return B.B(q,C.I,C.j,C.m,0,C.v)}}
A.aD1.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(B.cv($.co(),new A.bLD(),y.v,m),m)
if(l==null)x=C.rg
else{m=e.H($.cXC().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rg:m}m=B.a([],y.s)
for(w=A.dca(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new A.bLF(this,d)
if(w)return B.jR(!1,!1,p,v,B.aQ(o.b,!1)+" gastos \xb7 sem teto",o.a,new B.of("P\xf4r teto",new A.bLE(this,d,e),!0,p))
w=B.aQ(o.b,!1)
u=B.aQ(n,!1)
s=y.p
q=B.a([B.aJ(new B.T1(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,B.a([C.aF,new A.an1(m,p)],s))
return B.jR(!1,!1,p,v,w+" de "+u,o.a,B.B(q,C.dd,C.j,C.K,0,C.v))}}
A.aCz.prototype={
u(d){var x,w,v=null,u=$.ap,t=$.fh.cd(0.55),s=B.a0(18),r=B.a0(12),q=this.c,p=q.e
r=B.fX(r,B.aJ(p==null?B.kF(B.b2(C.hu,u,v,v,v),C.t,!0):B.qI(p,144,new A.bIC(u),!1,C.bJ,B.us(),!1,v,v,v),48,48),C.b1)
p=B.i(q.b,1,C.a0,v,v,D.c3R,v,v,v)
x=B.b2(C.iz,u,v,v,14)
w=q.d
q=w>0?q.gPQ()+" \xb7 "+B.aQ(w,!1):q.gPQ()
w=y.p
return new B.R(C.cS,B.aU(B.D(v,B.Q(B.a([r,C.ag,B.a6(B.B(B.a([p,C.h_,B.Q(B.a([x,C.eX,new B.dI(1,C.bh,B.i(q,1,C.a0,v,v,B.aG(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bi,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.w,C.j,C.m,0,v,v)],w),C.G,C.j,C.m,0,C.v),1),B.b2(C.i_,u,v,v,v)],w),C.w,C.j,C.m,0,v,v),C.r,v,v,new B.O(t,v,v,s,v,v,C.y),v,v,v,C.dN,v,v,v),new A.bID(d),v),v)}}
A.aFJ.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?B.S7(B.a([new B.im("+ Nova despesa",this.f,!0,j)],y.p),C.fj,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBp
x=new A.bV1(e,d)
w=y.p
v=B.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,B.H)(i),++t){s=i[t]
r=s.a
q=C.f.dj(r,":pay:")
r=C.f.b4(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gM(r.split(" \xb7 "))
n=B.aQ(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+A.d7N(m)
v.push(new U.DQ(new B.cF(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new A.bUY(d,e,s,q),B.HH(m)===C.hf,j))
continue}p=r?new A.bUZ(d):new A.bV_(x,s)
v.push(new A.Xd(s,p,r||s.w?j:new A.bV0(x,s),j))}i=B.a([],w)
for(k=0;k<v.length;++k){u=B.a([],w)
if(k>0&&v[k] instanceof A.Xd&&v[k-1] instanceof A.Xd)u.push(C.fi)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBe)
return B.B(i,C.I,C.j,C.m,0,C.v)}}
A.Xd.prototype={
u(d){var x=this.c,w=x.r,v=B.a([B.aQ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+A.d7N(w))
v=C.e.a3(v," \xb7 ")
if(u)u=D.aHi
else{u=this.e
u=u!=null?new B.of("Marcar pago",u,!0,null):D.aHp}return B.jR(!1,!1,null,this.d,v,x.c,u)}}
A.aBD.prototype={}
A.NB.prototype={
P(){var x=$.ac()
return new A.aBE(new B.aI(C.ao,x),new B.aI(C.ao,x))}}
A.aBE.prototype={
m(){var x=this.d,w=$.ac()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a7()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dX(B.B(B.a([B.i("Adicionar despesa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a3,new M.jM("Despesa",x.d,x.w,w,w,w),C.P,new M.jM("Valor (\u20ac)",x.e,x.x,C.cF,w,w),C.P,T.cQW("Prazo (opcional)",new A.bGn(x),x.f),C.aB,new V.a0Z(x.r,new A.bGo(x),w),C.a3,new B.fI("Guardar",new A.bGp(x,d),!1,w)],y.p),C.I,C.j,C.K,0,C.v),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a1)}}
A.WQ.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.HN(),y.b).b
if(j==null)x=k
else{j=j.c
j=B.eW(new B.a5(j,new A.bLH(l),B.a8(j).i("a5<1>")))
x=j}if(x==null)x=l.e
j=e.H($.alF(),y.g).b
w=B.a8(j).i("a5<1>")
v=B.V(new B.a5(j,new A.bLI(l),w),w.i("z.E"))
C.e.cO(v,new A.bLJ())
j=y.T
u=e.H(B.cv($.co(),new A.bLK(),y.v,j),j)
t=A.dca(l.e.c)
if(u==null)s=K.Fm
else{j=e.H($.aVe().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.Fm
j=J.dc(j,new A.bLL(t))
s=B.V(j,j.$ti.i("z.E"))}j=B.aw(d,k,y.w).w
w=B.bN(B.D(k,k,C.r,k,k,new B.O(C.bv,k,k,B.a0(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=B.i(x.a,k,k,k,k,B.as(d).ok.r,k,k,k)
q=B.a6(new A.ahw("Gasto",B.aQ(x.b,!1),k),1)
p=x.d
o=y.p
p=B.a([w,C.a3,r,C.aB,B.Q(B.a([q,C.ar,B.a6(B.aU(new A.ahw("Teto \xb7 tocar para mudar",p===0?"Definir":B.aQ(p,!1),k),new A.bLM(d,e,x),k),1)],o),C.w,C.j,C.m,0,k,k)],o)
if(s.length!==0){w=B.a([C.bf,B.i("Contratado na app",k,k,k,k,B.as(d).ok.w,k,k,k),C.X],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,B.H)(s),++n)w.push(new A.aCz(s[n],k))
C.e.n(p,w)}p.push(C.bf)
p.push(B.i("Despesas",k,k,k,k,B.as(d).ok.w,k,k,k))
p.push(C.X)
w=v.length
if(w===0)p.push(D.bLa)
else for(n=0;n<v.length;v.length===w||(0,B.H)(v),++n){m=v[n]
r=B.i(m.c,k,k,k,k,C.h5,k,k,k)
q=m.r
q=q==null?k:B.i("At\xe9 "+C.f.aW(C.i.k(B.aN(q)),2,"0")+"/"+C.f.aW(C.i.k(B.ay(q)),2,"0")+"/"+B.aE(q),k,k,k,k,k,k,k,k)
p.push(B.j0(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,B.Q(B.a([B.i(B.aQ(m.f,!1),k,k,k,k,D.c5Y,k,k,k),C.ai,new R.D9(m.w,new A.bLN(e,m),k,$.ap,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.Ja,k)],o),C.w,C.j,C.K,0,k,k),k))}return B.bC(!0,new B.eA(new B.aP(0,1/0,0,j.a.b*0.8),B.cZ(p,k,O.CX,k,k,!1,C.a1,!0),k),k,C.a_,!0)}}
A.ahw.prototype={
u(d){var x=null,w=B.a0(16)
return B.D(x,B.B(B.a([B.i(this.c,x,x,x,x,C.b9,x,x,x),C.at,B.i(this.d,x,x,x,x,P.aaj,x,x,x)],y.p),C.G,C.j,C.m,0,C.v),C.r,x,x,new B.O(C.ac,x,x,w,x,x,C.y),x,x,x,C.cT,x,x,x)}}
A.aBJ.prototype={
bc(d,e){var x,w=y.t,v=e.H(B.cv($.co(),new A.bHl(),y.v,w),w),u=e.H($.cXB(),y.o)
w=e.H($.uw(),y.l)
x=w.gv(w)
return B.h9(u,new A.bHm(this,new A.bHr(x==null?C.f6:x),v),new A.bHn(e),new A.bHo(),!1,!0,!1)}}
A.an1.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.ap,n=y.p,m=B.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.H)(x),++v){u=x[v]
t=$.fh
s=new B.b4(999,999)
r=new B.bd(o.cd(0.25),1,C.ah,-1)
q=B.b2(C.iz,o,p,p,13)
t=B.D(p,B.Q(B.a([q,C.yF,new B.dI(1,C.bh,B.i(u,1,C.a0,p,p,new B.M(!0,o,p,p,p,p,14,C.dO,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),B.b2(C.i_,o,p,p,16)],n),C.w,C.j,C.K,0,p,p),C.r,p,D.afU,new B.O(t,p,new B.dV(r,r,r,r),new B.cf(s,s,s,s),p,p,C.y),p,p,p,D.auA,p,p,p)
m.push(new B.kQ(new B.rc(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a8,p,p,p,p),!1,!1,p,!1,!1,new B.hN(t,new A.aY_(d),p,p),p))}return B.ea(C.bc,m,C.r,C.bj,6,6)}}
var z=a.updateTypes(["y(i3)","v(i3,i3)","P(P,Du)","A0()","F<~>(c?)","F<~>()","NB(N)","P(P,i3)","y(Du)","F<lL>()","WQ(N)","~(i3)","y(nm)","y(rN)","i3(a4<c,@>)","DD()"])
A.cDb.prototype={
$1(d){return this.aEW(d)},
aEW(a1){var x=0,w=B.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=B.j(function(a2,a3){if(a2===1)return B.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(B.cv($.co(),new A.cD7(),y.v,f),f)
f=J.a7(e)
if(f.gY(e)){v=D.bzy
x=1
break}u=B.a([],y.s)
for(t=f.gV(e);t.t();)u.push(t.gE(t).a)
t=$.T()
s=t.b
s===$&&B.b()
r=y.G
q=s.R("budgets").az(0,"wedding_id, total").eP("wedding_id",u).b7(new A.cD8(),r)
p=t.b.R("budget_categories").az(0,"wedding_id, amount").eP("wedding_id",u).b7(new A.cD9(),r)
o=t.b.R("expenses").az(0,"wedding_id, amount, paid").eP("wedding_id",u).b7(new A.cDa(),r)
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
k=J.a7(l)
t.j(0,B.a1(k.h(l,"wedding_id")),B.dt(k.h(l,"total")))
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
k=J.a7(l)
i=B.a1(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=B.aK(k.h(l,"amount"))
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
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=B.a1(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=B.aK(n.h(r,"amount"))
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
u.push(new B.aMk([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1304}
A.cD7.prototype={
$1(d){return d.c},
$S:145}
A.cD8.prototype={
$1(d){return d},
$S:30}
A.cD9.prototype={
$1(d){return d},
$S:30}
A.cDa.prototype={
$1(d){return d},
$S:30}
A.b2T.prototype={
$2(d,e){return d+e.a.b},
$S:z+2}
A.b4w.prototype={
$1(d){return d.w},
$S:z+0}
A.b4x.prototype={
$1(d){return!d.w},
$S:z+0}
A.b4t.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
A.b4u.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
A.b4v.prototype={
$1(d){return d.a===this.a},
$S:z+0}
A.bJd.prototype={
$0(){return this.a.y=!0},
$S:0}
A.bJe.prototype={
$0(){return this.a.y=!1},
$S:0}
A.bJv.prototype={
$0(){return this.a.gT().a1(0,$.HN().gaX(),y.x).Zp(0).eE(new A.bJu())},
$S:1}
A.bJu.prototype={
$1(d){},
$S:14}
A.bJc.prototype={
$1(d){return D.cku},
$S:z+6}
A.bJj.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
A.bJk.prototype={
$1(d){return d.x!==C.f2&&d.b===this.a},
$S:80}
A.bJt.prototype={
$2(d,e){return B.j9(d,this.a.lg(e))},
$1(d){return this.$2(d,null)},
$S:1307}
A.bJl.prototype={
$2(d,e){return d+e.f},
$S:z+7}
A.bJm.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
A.bJn.prototype={
$0(){return this.a.Iy(this.b.a)},
$S:0}
A.bJo.prototype={
$0(){var x=this.a
return x.q(new A.bJi(x))},
$S:0}
A.bJi.prototype={
$0(){return this.a.w=D.J8},
$S:0}
A.bJp.prototype={
$0(){var x=this.a
return x.q(new A.bJh(x))},
$S:0}
A.bJh.prototype={
$0(){return this.a.w=D.ac1},
$S:0}
A.bJq.prototype={
$0(){var x=this.a
return x.q(new A.bJg(x))},
$S:0}
A.bJg.prototype={
$0(){return this.a.w=D.ac0},
$S:0}
A.bJr.prototype={
$0(){var x=this.a
return x.q(new A.bJf(x))},
$S:0}
A.bJf.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
A.bJs.prototype={
$0(){return A.Ct(this.a.gT().a1(0,$.co(),y.v).b.a)},
$S:z+9}
A.czR.prototype={
$1(d){var x=null,w=this.b
return new B.eK(B.i(this.a,x,x,x,x,x,x,x,x),B.cN(x,C.a9,!0,x,!0,C.z,x,B.cQ(),w,x,x,x,x,x,2,D.aFu,C.a2,!0,x,!0,x,!1,x,C.aJ,x,x,x,x,C.iZ,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.aw,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.au,x,C.b8,x,x,x,x),B.a([B.cs(C.cL,x,x,new A.czP(d),x,x),B.bD(C.du,new A.czQ(d,w),x)],y.p),x)},
$S:16}
A.czP.prototype={
$0(){return B.aq(this.a,!1).bJ()},
$S:0}
A.czQ.prototype={
$0(){var x=B.aq(this.a,!1),w=C.f.D(this.b.a.a)
w=B.b0(w," ","")
return x.aj(B.fo(B.b0(w,",",".")))},
$S:0}
A.cA_.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=B.bG(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?B.bG(2100,1,1,0,0):x)},
$S:z+1}
A.bLD.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
A.bLF.prototype={
$0(){return B.cn(null,new A.bLG(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
A.bLG.prototype={
$1(d){return new A.WQ(this.a.e.a,null)},
$S:z+10}
A.bLE.prototype={
$0(){return A.akd(this.b,this.c,this.a.e.a.a,0)},
$S:0}
A.bID.prototype={
$0(){var x=this.a
B.aq(x,!1).bJ()
B.ai(x).ar("/bookings",null,y.X)},
$S:0}
A.bIC.prototype={
$3(d,e,f){return B.kF(B.b2(C.hu,this.a,null,null,null),C.t,!0)},
$S:130}
A.bV1.prototype={
$1(d){var x,w,v=null
this.a.a1(0,$.alF().gaX(),y.h).OC(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a4(B.cA(v,v,v,v,v,C.z,v,B.i(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.Y,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
A.bUY.prototype={
$0(){var x=this
return B.rB(x.a,x.b,C.f.bD(x.c.a,x.d+5),null,null)},
$S:0}
A.bUZ.prototype={
$0(){return B.ai(this.a).ar("/bookings",null,y.X)},
$S:0}
A.bV_.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bV0.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bGn.prototype={
$1(d){var x=this.a
return x.q(new A.bGm(x,d))},
$S:267}
A.bGm.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.bGo.prototype={
$1(d){var x=this.a
return x.q(new A.bGl(x,d))},
$S:102}
A.bGl.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.bGp.prototype={
$0(){var x,w=this.a,v=C.f.D(w.e.a.a),u=B.fo(B.b0(v,",","."))
w.q(new A.bGk(w,u))
if(w.w!=null||w.x!=null)return
v=B.aq(this.b,!1)
x=C.f.D(w.d.a.a)
u.toString
v.aj(new A.aBD(x,u,w.f,w.r))},
$S:0}
A.bGk.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A despesa precisa de um t\xedtulo":null
x.x=this.b==null?"Indica um valor v\xe1lido":null},
$S:0}
A.bLH.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+12}
A.bLI.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
A.bLJ.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=B.bG(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?B.bG(2100,1,1,0,0):x)},
$S:z+1}
A.bLK.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
A.bLL.prototype={
$1(d){return C.e.p(this.a,d.a)},
$S:z+13}
A.bLM.prototype={
$0(){var x=this.c
return A.akd(this.a,this.b,x.a,x.d)},
$S:0}
A.bLN.prototype={
$1(d){return this.a.a1(0,$.alF().gaX(),y.h).OC(this.b.a)},
$S:150}
A.bHl.prototype={
$1(d){return d.c},
$S:145}
A.bHr.prototype={
$2(d,e){return B.j9(d,this.a.lg(e))},
$S:41}
A.bHo.prototype={
$0(){return D.bLR},
$S:85}
A.bHn.prototype={
$2(d,e){return B.S7(B.a([new B.im("Tentar outra vez",new A.bHe(this.a),!1,null)],y.p),C.fj,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1309}
A.bHe.prototype={
$0(){return this.a.ai($.cXB())},
$S:0}
A.bHm.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new A.bHp(g),e=new A.bHq(g,this.b),d=J.c9(a4),a0=d.d7(a4,0,new A.bHf()),a1=d.d7(a4,0,new A.bHg(f)),a2=d.d7(a4,0,new A.bHh(e)),a3=y.N
a3=B.A(a3,a3)
for(x=J.ar(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C_(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bD(s,1))}x=B.aQ(a1,!1)
w=a0>0
v=w?"de "+B.aQ(a0,!1):"gastos"
u=w?C.k.ae(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aK(a1/a0*100)+"% dos tetos":""
x=B.vc(i,""+t+" "+r+w,"Todos os eventos",C.hA,u,v,x)
v=y.p
u=B.a([new G.S8(B.a([new G.xj("Gasto",B.aQ(a1,!1),h),new G.xj("Por pagar",B.aQ(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=B.a([],v)
for(t=B.ew(a4,0,y.A),r=J.ar(t.a),q=t.b,t=new B.bX(r,q,B.u(t).i("bX<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new B.a3(q+n,r.gE(r)):B.aj(B.c1())
o.a=null
m=n.b
o.a=m
l=B.a([],v)
if(n.a>0)l.push(C.fi)
n=a3.h(0,m.a[0])
n=B.i(n==null?"Evento":n,1,C.a0,i,i,C.ap,i,i,i)
k=o.a.a[2]
k=B.a([k>0?"Teto "+B.aQ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+B.aQ(j[3]+e.$1(j[0]),!1))}n=B.B(B.a([n,C.be,B.i(C.e.a3(k," \xb7 "),i,i,i,i,C.W,i,i,i)],v),C.G,C.j,C.m,0,C.v)
k=o.a.a
l.push(new B.hN(B.D(i,B.Q(B.a([new B.bT(1,C.ax,n,i),C.ar,B.i(B.aQ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.ap,i,i,i),C.br,C.lD],v),C.w,C.j,C.m,0,i,i),C.r,C.an,C.e4,i,i,i,i,C.cr,i,i,i),new A.bHi(o,g),i,i))
C.e.n(w,l)}return B.B(B.a([x,new B.dN("N\xfameros",i,u,16,i),new B.dN("Por evento \xb7 "+d,i,w,16,i),D.aBg],v),C.I,C.j,C.m,0,C.v)},
$S:1310}
A.bHp.prototype={
$1(d){return J.dc(this.a.e,new A.bHc(d)).d7(0,0,new A.bHd())},
$S:187}
A.bHc.prototype={
$1(d){return d.b===this.a&&d.x!==C.f2},
$S:80}
A.bHd.prototype={
$2(d,e){return d+e.w},
$S:460}
A.bHq.prototype={
$1(d){return J.dc(this.a.e,new A.bHj(d)).d7(0,0,new A.bHk(this.b))},
$S:187}
A.bHj.prototype={
$1(d){return d.b===this.a&&d.x!==C.f2},
$S:80}
A.bHk.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:460}
A.bHf.prototype={
$2(d,e){return d+e.a[2]},
$S:235}
A.bHg.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:235}
A.bHh.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:235}
A.bHi.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
A.aY_.prototype={
$0(){return B.ai(this.a).ar("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(A,"dEF","cUH",14)
w(A,"dEE","dlD",15)
v(A.DD.prototype,"giJ","d4",3)
var t
u(t=A.abm.prototype,"gapf","Tu",4)
v(t,"gaRj","Qg",5)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cDb,A.cD7,A.cD8,A.cD9,A.cDa,A.b4w,A.b4x,A.b4t,A.b4v,A.bJu,A.bJc,A.bJj,A.bJk,A.bJt,A.bJm,A.czR,A.bLD,A.bLG,A.bIC,A.bV1,A.bGn,A.bGo,A.bLH,A.bLI,A.bLK,A.bLL,A.bLN,A.bHl,A.bHm,A.bHp,A.bHc,A.bHq,A.bHj])
x(B.I,[A.Du,A.b2S,A.A0,A.Mb,A.a7p,A.aBD])
x(B.cR,[A.b2T,A.bJl,A.cA_,A.bLJ,A.bHr,A.bHn,A.bHd,A.bHk,A.bHf,A.bHg,A.bHh])
w(A.DD,B.fb)
x(B.bR,[A.b4u,A.bJd,A.bJe,A.bJv,A.bJn,A.bJo,A.bJi,A.bJp,A.bJh,A.bJq,A.bJg,A.bJr,A.bJf,A.bJs,A.czP,A.czQ,A.bLF,A.bLE,A.bID,A.bUY,A.bUZ,A.bV_,A.bV0,A.bGm,A.bGl,A.bGp,A.bGk,A.bLM,A.bHo,A.bHe,A.bHi,A.aY_])
w(A.abl,B.fr)
w(A.a0o,B.dD)
w(A.abm,B.dy)
x(B.L,[A.aP3,A.aD0,A.aCz,A.Xd,A.ahw,A.an1])
x(B.en,[A.aD1,A.aFJ,A.WQ,A.aBJ])
w(A.NB,B.K)
w(A.aBE,B.a_)})()
B.bq(b.typeUniverse,JSON.parse('{"DD":{"fb":["A0"]},"a0o":{"K":[],"e":[],"f":[]},"NB":{"K":[],"e":[],"f":[]},"WQ":{"K":[],"e":[],"f":[]},"abm":{"a_":["a0o"]},"aP3":{"L":[],"e":[],"f":[]},"aD0":{"L":[],"e":[],"f":[]},"aD1":{"K":[],"e":[],"f":[]},"aCz":{"L":[],"e":[],"f":[]},"aFJ":{"K":[],"e":[],"f":[]},"Xd":{"L":[],"e":[],"f":[]},"aBE":{"a_":["NB"]},"ahw":{"L":[],"e":[],"f":[]},"aBJ":{"K":[],"e":[],"f":[]},"an1":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{l:x("ax<f8>"),k:x("ax<t<rN>>"),u:x("ax<t<fY>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>>"),y:x("ax<a4<c,t<c>>>"),x:x("zC"),b:x("uK"),d:x("rS"),Z:x("pc"),v:x("ed"),_:x("i3"),h:x("DD"),g:x("A0"),D:x("r<Du>"),r:x("r<i3>"),Q:x("r<xj>"),F:x("r<ei>"),Y:x("r<a4<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>"),E:x("r<a7p>"),c:x("r<Mb>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fY>"),t:x("t<fx>"),G:x("t<a4<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>"),P:x("a4<c,@>"),w:x("dn"),A:x("+eventId,spentByHand,total,unpaidByHand(c,P,P,P)"),e:x("lL"),N:x("c"),B:x("aBD"),q:x("ds"),i:x("P"),z:x("@"),S:x("v"),X:x("I?"),T:x("c?"),I:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afU=new B.aP(0,1/0,32,1/0)
D.auA=new B.a2(8,5,6,5)
D.bzf=x([],y.r)
D.aAg=new A.A0(!1,D.bzf)
D.aBe=new B.kJ("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBg=new B.kJ("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBp=new B.kJ("Sem pagamentos nesta vista.",8,null)
D.aFu=new B.dT(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aHi=new B.et("Pago",C.d8,null)
D.aHp=new B.et("Por pagar",C.hy,null)
D.aHw=new B.m5("Or\xe7amento","Todos os teus eventos",null)
D.aHC=new B.m5("Or\xe7amento",null,null)
D.byx=x(["catering"],y.s)
D.bzx=x([],y.D)
D.bzy=x([],y.n)
D.bA2=x(["flowers_decor"],y.s)
D.bBy=x(["music_dj","bands_musicians"],y.s)
D.bC6=x(["photography"],y.s)
D.bDj=x(["venue"],y.s)
D.aEM=new B.qJ("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.ky,null)
D.bLa=new B.R(C.hV,D.aEM,null)
D.bLR=new B.R(Q.uK,C.eh,null)
D.bYc=new B.vU(!1,6,!0,null)
D.c3R=new B.M(!0,C.A,null,null,null,null,14,C.dO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5Y=new B.M(!0,null,null,null,null,null,null,C.dO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cku=new A.NB(null)
D.J8=new A.abl(0,"all")
D.ac0=new A.abl(1,"paid")
D.ac1=new A.abl(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dRJ","cXB",()=>C.bU.$1$1(new A.cDb(),y.m))
x($,"dSy","alF",()=>B.mT(A.dEE(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["zWpIHCMYysoyddOk4mLmkU88h+M="]=a.current})($__dart_deferred_initializers__);