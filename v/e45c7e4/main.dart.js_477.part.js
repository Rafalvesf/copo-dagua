((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,N,O,P,Q,E,R,S,F,G,T,H,K,U,I,V,A={cD7:function cD7(){},cD3:function cD3(){},cD4:function cD4(){},cD5:function cD5(){},cD6:function cD6(){},
dDF(d,e){var x,w,v,u=B.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v)u.push(new A.Dt(x[v]))
return new A.b2P(d.b,u)},
Dt:function Dt(d){this.a=d},
b2P:function b2P(d,e){this.a=d
this.b=e},
b2Q:function b2Q(){},
cUD(d){var x="category",w="due_date",v=J.a7(d),u=B.a1(v.h(d,"id")),t=B.a1(v.h(d,"wedding_id")),s=B.a1(v.h(d,"title")),r=A.dzX(A.d97(B.C(v.h(d,x)))),q=A.d97(B.C(v.h(d,x))),p=B.dt(v.h(d,"amount")),o=v.h(d,w)==null?null:B.d9(B.a1(v.h(d,w)))
v=B.dU(v.h(d,"paid"))
return new H.i3(u,t,s,r,q,p,o,v===!0)},
d97(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dzX(d){var x
A:{if("venue"===d){x=E.xP
break A}if("catering"===d){x=E.xL
break A}if("photography"===d){x=E.xM
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xN
break A}if("flowers_decor"===d){x=E.xO
break A}x=null
break A}return x},
dlt(){return new A.DC()},
zY:function zY(d,e){this.a=d
this.b=e},
b4t:function b4t(){},
b4u:function b4u(){},
DC:function DC(){this.b=this.x=null},
b4q:function b4q(){},
b4r:function b4r(d,e){this.a=d
this.b=e},
b4s:function b4s(d){this.a=d},
Cs(d){var x=0,w=B.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cs=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:x=3
return B.d(F.akg(),$async$Cs)
case 3:u=$.T()
t=u.b
t===$&&B.b()
x=4
return B.d(t.R("events").az(0,"partner_name_1, partner_name_2").W("id",d).dA(),$async$Cs)
case 4:s=f
x=5
return B.d(u.b.R("bookings").az(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("wedding_id",d).dl(0,"event_date",!1),$async$Cs)
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
return B.d(t.R("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").eP("booking_id",u).tK(0,"created_at"),$async$Cs)
case 9:q=f
case 7:u=$.T()
t=u.b
t===$&&B.b()
x=10
return B.d(t.R("expenses").az(0,"title, category, amount, due_date, paid").W("wedding_id",d).tK(0,"due_date"),$async$Cs)
case 10:p=f
x=11
return B.d(u.b.R("budget_categories").az(0,"name, amount").W("wedding_id",d).tK(0,"position"),$async$Cs)
case 11:o=f
x=12
return B.d(u.b.R("budgets").az(0,"total").W("wedding_id",d).dA(),$async$Cs)
case 12:n=f
m=F.cUp(F.cAn(s),"Gastos e parceiros",r,q,!1)
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
else{g=B.dK(B.q(g))
g=g==null?null:g.eh()}u.push(new A.Ma(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=B.a([],y.E)
for(l=J.ar(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cx(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=B.fo(B.q(k))
if(k==null)k=0}t.push(new A.a7n(i,k))}l=n==null?null:F.cUV(J.h(n,"total"))
v=new F.lK(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$Cs,w)},
Ma:function Ma(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7n:function a7n(d,e){this.a=d
this.b=e},
diN(){return new A.a0p(null)},
aTq(d,e,f){var x=0,w=B.n(y.I),v,u,t
var $async$aTq=B.j(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return B.d(B.fM(!0,new A.czN(e,new B.aI(new B.bJ(u,C.aK,C.aC),$.ac())),d,y.i),$async$aTq)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aTq,w)},
aka(d,e,f,g){return A.dzK(d,e,f,g)},
dzK(d,e,f,g){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q
var $async$aka=B.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return B.d(A.aTq(d,"Teto para "+f,g),$async$aka)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return B.d(e.a1(0,$.HN().gaX(),y.x).OP(f,r),$async$aka)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a4(I.HS)
x=7
break
case 4:x=2
break
case 7:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$aka,w)},
d7f(d){var x=B.V(d,y._)
C.e.cO(x,new A.czW())
return x},
d7J(d){var x=C.f.aW(C.i.k(B.aN(d)),2,"0"),w=C.f.aW(C.i.k(B.ay(d)),2,"0"),v=B.aE(d)===B.aE(new B.ae(Date.now(),0,!1))?"":"/"+B.aE(d)
return x+"/"+w+v},
abj:function abj(d,e){this.a=d
this.b=e},
a0p:function a0p(d){this.a=d},
abk:function abk(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bJ9:function bJ9(d){this.a=d},
bJa:function bJa(d){this.a=d},
bJr:function bJr(d){this.a=d},
bJq:function bJq(){},
bJ8:function bJ8(){},
bJf:function bJf(){},
bJg:function bJg(d){this.a=d},
bJp:function bJp(d){this.a=d},
bJh:function bJh(){},
bJi:function bJi(){},
bJj:function bJj(d,e){this.a=d
this.b=e},
bJk:function bJk(d){this.a=d},
bJe:function bJe(d){this.a=d},
bJl:function bJl(d){this.a=d},
bJd:function bJd(d){this.a=d},
bJm:function bJm(d){this.a=d},
bJc:function bJc(d){this.a=d},
bJn:function bJn(d){this.a=d},
bJb:function bJb(d){this.a=d},
bJo:function bJo(d){this.a=d},
czN:function czN(d,e){this.a=d
this.b=e},
czL:function czL(d){this.a=d},
czM:function czM(d,e){this.a=d
this.b=e},
czW:function czW(){},
aP2:function aP2(d,e,f){this.c=d
this.d=e
this.a=f},
aCY:function aCY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCZ:function aCZ(d,e){this.e=d
this.a=e},
bLz:function bLz(){},
bLB:function bLB(d,e){this.a=d
this.b=e},
bLC:function bLC(d){this.a=d},
bLA:function bLA(d,e,f){this.a=d
this.b=e
this.c=f},
aCw:function aCw(d,e){this.c=d
this.a=e},
bIz:function bIz(d){this.a=d},
bIy:function bIy(d){this.a=d},
aFH:function aFH(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bUY:function bUY(d,e){this.a=d
this.b=e},
bUU:function bUU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUV:function bUV(d){this.a=d},
bUW:function bUW(d,e){this.a=d
this.b=e},
bUX:function bUX(d,e){this.a=d
this.b=e},
Xe:function Xe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBB:function aBB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NC:function NC(d){this.a=d},
aBC:function aBC(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.x=_.w=_.r=_.f=null},
bGj:function bGj(d){this.a=d},
bGi:function bGi(d,e){this.a=d
this.b=e},
bGk:function bGk(d){this.a=d},
bGh:function bGh(d,e){this.a=d
this.b=e},
bGl:function bGl(d,e){this.a=d
this.b=e},
bGg:function bGg(d,e){this.a=d
this.b=e},
WR:function WR(d,e){this.e=d
this.a=e},
bLD:function bLD(d){this.a=d},
bLE:function bLE(d){this.a=d},
bLF:function bLF(){},
bLG:function bLG(){},
bLH:function bLH(d){this.a=d},
bLI:function bLI(d,e,f){this.a=d
this.b=e
this.c=f},
bLJ:function bLJ(d,e){this.a=d
this.b=e},
aht:function aht(d,e,f){this.c=d
this.d=e
this.a=f},
aBH:function aBH(d,e,f){this.e=d
this.f=e
this.a=f},
bHh:function bHh(){},
bHn:function bHn(d){this.a=d},
bHk:function bHk(){},
bHj:function bHj(d){this.a=d},
bHa:function bHa(d){this.a=d},
bHi:function bHi(d,e,f){this.a=d
this.b=e
this.c=f},
bHl:function bHl(d){this.a=d},
bH8:function bH8(d){this.a=d},
bH9:function bH9(){},
bHm:function bHm(d,e){this.a=d
this.b=e},
bHf:function bHf(d){this.a=d},
bHg:function bHg(d){this.a=d},
bHb:function bHb(){},
bHc:function bHc(d){this.a=d},
bHd:function bHd(d){this.a=d},
bHe:function bHe(d,e){this.a=d
this.b=e},
amZ:function amZ(d,e){this.c=d
this.a=e},
aXW:function aXW(d){this.a=d},
dc0(d){var x
switch(d){case E.xP:x=D.bDh
break
case E.xL:x=D.bys
break
case E.xM:x=D.bC2
break
case E.xN:x=D.bBu
break
case E.xO:x=D.bzZ
break
default:x=C.a9
break}return x}},D,L,M
J=c[1]
B=c[0]
C=c[2]
N=c[198]
O=c[182]
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
A.Dt.prototype={
gap(d){return this.a.a}}
A.b2P.prototype={
gpY(){return C.e.d7(this.b,0,new A.b2Q())},
gaBN(){var x=this.a
return x===0?0:C.k.ah(this.gpY()/x,0,1)}}
A.zY.prototype={
gbzw(){var x=this.b,w=B.a8(x).i("a5<1>")
x=B.V(new B.a5(x,new A.b4t(),w),w.i("z.E"))
return x},
gbzS(d){var x=this.b,w=B.a8(x).i("a5<1>")
x=B.V(new B.a5(x,new A.b4u(),w),w.i("z.E"))
return x},
awS(d,e){var x=e==null?this.a:e
return new A.zY(x,d==null?this.b:d)},
ip(d){return this.awS(null,d)},
awz(d){return this.awS(d,null)}}
A.DC.prototype={
d4(){var x=y.T,w=this.x=B.eP(this).H(B.cv($.co(),new A.b4q(),y.v,x),x)
if(w!=null)B.jf(new A.b4r(this,w),y.H)
return D.aAe},
c_(d,e){return this.bwY(0,e)},
bwY(d,e){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$c_=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:v.sa2(0,v.ga2(0).ip(!0))
u=$.T().b
u===$&&B.b()
t=A
s=!1
r=J
x=2
return B.d(u.R("expenses").cj(0).W("wedding_id",e).dl(0,"created_at",!0),$async$c_)
case 2:v.sa2(0,new t.zY(s,r.d3(g,A.dEw(),y._).by(0)))
return B.l(null,w)}})
return B.m($async$c_,w)},
Vo(d){return this.bmQ(d)},
bmQ(d){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$Vo=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:r=$.T().b
r===$&&B.b()
r=r.R("expenses")
u=d.e
if(u==null){u=d.d
u=u==null?null:u.b}t=d.r
t=t==null?null:C.e.gM(t.ci().split("T"))
x=2
return B.d(r.de(0,B.S(["wedding_id",d.b,"title",d.c,"category",u,"amount",d.f,"due_date",t],y.N,y.X)).cj(0).dP(0),$async$Vo)
case 2:s=f
t=v.ga2(0)
r=B.V(v.ga2(0).b,y._)
r.push(A.cUD(s))
v.sa2(0,t.awz(r))
return B.l(null,w)}})
return B.m($async$Vo,w)},
OM(d){return this.bCp(d)},
bCp(d){var x=0,w=B.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OM=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:n=C.e.lk(v.ga2(0).b,new A.b4s(d))
m=$.T().b
m===$&&B.b()
u=y.z
l=A
x=2
return B.d(m.R("expenses").bh(0,B.S(["paid",!n.w,"updated_at",new B.ae(Date.now(),0,!1).ci()],u,u)).W("id",d).cj(0).dP(0),$async$OM)
case 2:t=l.cUD(f)
u=v.ga2(0)
m=B.a([],y.r)
for(s=v.ga2(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,B.K)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa2(0,u.awz(m))
return B.l(null,w)}})
return B.m($async$OM,w)}}
A.Ma.prototype={}
A.a7n.prototype={
gap(d){return this.a}}
A.abj.prototype={
I(){return"_BudgetFilter."+this.b}}
A.a0p.prototype={
P(){return new A.abk(D.Ja)}}
A.abk.prototype={
TE(d){return this.bcH(d)},
bcH(d){var x=0,w=B.n(y.H),v,u=this,t,s,r
var $async$TE=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.q(new A.bJ9(u))
x=1
break}u.q(new A.bJa(u))
t=u.gT()
s=$.co()
r=t.a1(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return B.d(t.a1(0,s.gaX(),y.Z).az(0,d),$async$TE)
case 5:case 4:case 1:return B.l(v,w)}})
return B.m($async$TE,w)},
al(){this.aH()
B.jf(new A.bJr(this),y.H)},
Qq(){var x=0,w=B.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Qq=B.j(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:r=u.gT()
q=$.alC()
p=y.h
o=r.a1(0,q.gaX(),p).x
if(o==null){x=1
break}t=u.c
t.toString
x=3
return B.d(B.cn(null,new A.bJ8(),!1,t,!0,!0,null,y.B),$async$Qq)
case 3:s=e
if(s==null){x=1
break}r=r.a1(0,q.gaX(),p)
q=s.a
p=s.b
t=s.c
r.Vo(new H.i3("",o,q,null,s.d,p,t,!1))
case 1:return B.l(v,w)}})
return B.m($async$Qq,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gT(),a2=a1.H($.HN(),y.b),a3=a1.H($.HO(),y.d),a4=a1.H($.alC(),y.g),a5=a2.b,a6=a5==null?e:A.dDF(a5,a3.b)
a5=B.iW(a1.H($.jw(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iJ
a5=y.T
w=a1.H(B.cv($.co(),new A.bJf(),y.v,a5),a5)
if(f.y){a1=f.gapl()
return B.cM(e,C.cP,B.ol(C.f8,40,B.a([C.fV,D.aHu,L.cRc(a1,e),new A.aBH(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.dc(x,new A.bJg(w))
a1=a1.H($.uw(),y.l)
u=a1.gv(a1)
t=new A.bJp(u==null?C.f5:u)
a1=y._
a5=B.V(a4.gbzw(),a1)
for(s=v.a,r=J.c9(s),q=r.gV(s),p=v.b,o=v.$ti.i("hw<1>"),n=new B.hw(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i3("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=B.V(a4.gbzS(0),a1)
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
n.push(new H.i3("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=B.V(A.d7f(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=A.d7f(q)
break
default:a1=e}h=C.e.d7(q,0,new A.bJh())
s=a6==null
if(s)g=D.bzt
else{r=a6.b
p=B.a8(r).i("a5<1>")
g=B.V(new B.a5(r,new A.bJi(),p),p.i("z.E"))}if(s)a1=C.cX
else{s=f.gaRq()
r=y.p
p=B.a([new B.pk(B.a([new B.qK(s,"Nova despesa",e)],r),e),D.aHA,L.cRc(f.gapl(),w),new A.aP2(a6,new A.bJj(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=B.aQ(a6.gpY(),!1)
n=a5.length
m=n===1?d:a0
l=B.aQ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new B.dN("N\xfameros",e,B.a([new G.Sb(B.a([new G.xh("Gasto",o,""+n+" "+m),new G.xh("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=B.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,B.a([new O.m4(B.a([new B.ei("Todos",l===D.Ja,n+m,new A.bJk(f),e),new B.ei("Pendentes",l===D.ac_,m,new A.bJl(f),e),new B.ei("Pagos",l===D.abZ,n,new A.bJm(f),e)],y.F),4,!0,e),C.as],r))}o.push(new A.aFH(a1,s,a5.length===0&&q.length===0,e))
p.push(new B.dN("Pagamentos",e,o,16,e))
a1=B.a([new B.kI(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new A.aCY(g,f.x,new A.bJn(f),e))
p.push(new B.dN("Categorias",e,a1,16,e))
p.push(new B.dN("Exportar",e,B.a([new F.DD("Gastos e parceiros",!1,new A.bJo(f),e)],r),16,e))
a1=B.ol(C.f8,40,p,e,!0,!1)}return B.cM(e,C.cP,a1,!0,e)},
IF(d){return this.aYi(d)},
aYi(d){var x=0,w=B.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IF=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return B.d(A.aTq(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IF)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return B.d(s.gT().a1(0,$.HN().gaX(),y.x).a_f(r),$async$IF)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a4(I.HS)
x=7
break
case 4:x=2
break
case 7:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$IF,w)}}
A.aP2.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpY()>0?"Gastos "+B.aQ(t.gpY(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return B.vc(new B.im("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hB,0,"por definir","\u2014")}x=C.k.aK(t.gaBN()*100)
w=s-t.gpY()<0?"Acima do teto":"Ainda tens"
v=B.aQ(Math.abs(s-t.gpY()),!1)
s=B.aQ(s,!1)
u=t.gaBN()
return B.aU(B.vc(I.a21,"Gastos "+B.aQ(t.gpY(),!1)+" \xb7 "+x+"% do teto",w,C.hB,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
A.aCY.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:B.e3(s,0,B.eT(5,"count",y.S),B.a8(s).c).by(0),q=y.p,p=B.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,B.K)(r),++w)p.push(new A.aCZ(r[w],null))
q=B.a([B.fa(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new B.im(u,v.e,!0,null))}return B.B(q,C.J,C.j,C.m,0,C.v)}}
A.aCZ.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(B.cv($.co(),new A.bLz(),y.v,m),m)
if(l==null)x=C.rg
else{m=e.H($.cXy().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rg:m}m=B.a([],y.s)
for(w=A.dc0(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new A.bLB(this,d)
if(w)return B.jR(!1,!1,p,v,B.aQ(o.b,!1)+" gastos \xb7 sem teto",o.a,new B.og("P\xf4r teto",new A.bLA(this,d,e),!0,p))
w=B.aQ(o.b,!1)
u=B.aQ(n,!1)
s=y.p
q=B.a([B.aJ(new B.T4(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,B.a([C.aE,new A.amZ(m,p)],s))
return B.jR(!1,!1,p,v,w+" de "+u,o.a,B.B(q,C.dp,C.j,C.L,0,C.v))}}
A.aCw.prototype={
u(d){var x,w,v=null,u=$.ap,t=$.fh.cd(0.55),s=B.a0(18),r=B.a0(12),q=this.c,p=q.e
r=B.fX(r,B.aJ(p==null?B.kE(B.b2(C.hv,u,v,v,v),C.t,!0):B.qH(p,144,new A.bIy(u),!1,C.bG,B.us(),!1,v,v,v),48,48),C.b0)
p=B.i(q.b,1,C.a0,v,v,D.c3O,v,v,v)
x=B.b2(C.iB,u,v,v,14)
w=q.d
q=w>0?q.gQ_()+" \xb7 "+B.aQ(w,!1):q.gQ_()
w=y.p
return new B.R(C.cS,B.aU(B.D(v,B.Q(B.a([r,C.ag,B.a6(B.B(B.a([p,C.h2,B.Q(B.a([x,C.eX,new B.dL(1,C.bi,B.i(q,1,C.a0,v,v,B.aG(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bh,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.w,C.j,C.m,0,v,v)],w),C.H,C.j,C.m,0,C.v),1),B.b2(C.i1,u,v,v,v)],w),C.w,C.j,C.m,0,v,v),C.r,v,v,new B.O(t,v,v,s,v,v,C.y),v,v,v,C.dO,v,v,v),new A.bIz(d),v),v)}}
A.aFH.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?B.Sa(B.a([new B.im("+ Nova despesa",this.f,!0,j)],y.p),C.fj,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBn
x=new A.bUY(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+A.d7J(m)
v.push(new U.DP(new B.cF(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new A.bUU(d,e,s,q),B.HH(m)===C.hh,j))
continue}p=r?new A.bUV(d):new A.bUW(x,s)
v.push(new A.Xe(s,p,r||s.w?j:new A.bUX(x,s),j))}i=B.a([],w)
for(k=0;k<v.length;++k){u=B.a([],w)
if(k>0&&v[k] instanceof A.Xe&&v[k-1] instanceof A.Xe)u.push(C.fh)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBc)
return B.B(i,C.J,C.j,C.m,0,C.v)}}
A.Xe.prototype={
u(d){var x=this.c,w=x.r,v=B.a([B.aQ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+A.d7J(w))
v=C.e.a3(v," \xb7 ")
if(u)u=D.aHg
else{u=this.e
u=u!=null?new B.og("Marcar pago",u,!0,null):D.aHn}return B.jR(!1,!1,null,this.d,v,x.c,u)}}
A.aBB.prototype={}
A.NC.prototype={
P(){var x=$.ac()
return new A.aBC(new B.aI(C.an,x),new B.aI(C.an,x))}}
A.aBC.prototype={
m(){var x=this.d,w=$.ac()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a7()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dX(B.B(B.a([B.i("Adicionar despesa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a3,new M.jM("Despesa",x.d,x.w,w,w,w),C.P,new M.jM("Valor (\u20ac)",x.e,x.x,C.cF,w,w),C.P,T.cQS("Prazo (opcional)",new A.bGj(x),x.f),C.aA,new V.a1_(x.r,new A.bGk(x),w),C.a3,new B.fJ("Guardar",new A.bGl(x,d),!1,w)],y.p),C.J,C.j,C.L,0,C.v),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a1)}}
A.WR.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.HN(),y.b).b
if(j==null)x=k
else{j=j.c
j=B.eV(new B.a5(j,new A.bLD(l),B.a8(j).i("a5<1>")))
x=j}if(x==null)x=l.e
j=e.H($.alC(),y.g).b
w=B.a8(j).i("a5<1>")
v=B.V(new B.a5(j,new A.bLE(l),w),w.i("z.E"))
C.e.cO(v,new A.bLF())
j=y.T
u=e.H(B.cv($.co(),new A.bLG(),y.v,j),j)
t=A.dc0(l.e.c)
if(u==null)s=K.Fm
else{j=e.H($.aVb().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.Fm
j=J.dc(j,new A.bLH(t))
s=B.V(j,j.$ti.i("z.E"))}j=B.aw(d,k,y.w).w
w=B.bN(B.D(k,k,C.r,k,k,new B.O(C.bu,k,k,B.a0(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=B.i(x.a,k,k,k,k,B.as(d).ok.r,k,k,k)
q=B.a6(new A.aht("Gasto",B.aQ(x.b,!1),k),1)
p=x.d
o=y.p
p=B.a([w,C.a3,r,C.aA,B.Q(B.a([q,C.aq,B.a6(B.aU(new A.aht("Teto \xb7 tocar para mudar",p===0?"Definir":B.aQ(p,!1),k),new A.bLI(d,e,x),k),1)],o),C.w,C.j,C.m,0,k,k)],o)
if(s.length!==0){w=B.a([C.bf,B.i("Contratado na app",k,k,k,k,B.as(d).ok.w,k,k,k),C.X],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,B.K)(s),++n)w.push(new A.aCw(s[n],k))
C.e.n(p,w)}p.push(C.bf)
p.push(B.i("Despesas",k,k,k,k,B.as(d).ok.w,k,k,k))
p.push(C.X)
w=v.length
if(w===0)p.push(D.bLc)
else for(n=0;n<v.length;v.length===w||(0,B.K)(v),++n){m=v[n]
r=B.i(m.c,k,k,k,k,C.h8,k,k,k)
q=m.r
q=q==null?k:B.i("At\xe9 "+C.f.aW(C.i.k(B.aN(q)),2,"0")+"/"+C.f.aW(C.i.k(B.ay(q)),2,"0")+"/"+B.aE(q),k,k,k,k,k,k,k,k)
p.push(B.j0(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,B.Q(B.a([B.i(B.aQ(m.f,!1),k,k,k,k,D.c5X,k,k,k),C.ak,new R.D8(m.w,new A.bLJ(e,m),k,$.ap,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.Jc,k)],o),C.w,C.j,C.L,0,k,k),k))}return B.bE(!0,new B.eA(new B.aP(0,1/0,0,j.a.b*0.8),B.cZ(p,k,N.CX,k,k,!1,C.a1,!0),k),k,C.a_,!0)}}
A.aht.prototype={
u(d){var x=null,w=B.a0(16)
return B.D(x,B.B(B.a([B.i(this.c,x,x,x,x,C.b9,x,x,x),C.as,B.i(this.d,x,x,x,x,P.aaj,x,x,x)],y.p),C.H,C.j,C.m,0,C.v),C.r,x,x,new B.O(C.ac,x,x,w,x,x,C.y),x,x,x,C.cT,x,x,x)}}
A.aBH.prototype={
bc(d,e){var x,w=y.t,v=e.H(B.cv($.co(),new A.bHh(),y.v,w),w),u=e.H($.cXx(),y.o)
w=e.H($.uw(),y.l)
x=w.gv(w)
return B.h9(u,new A.bHi(this,new A.bHn(x==null?C.f5:x),v),new A.bHj(e),new A.bHk(),!1,!0,!1)}}
A.amZ.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.ap,n=y.p,m=B.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v){u=x[v]
t=$.fh
s=new B.b4(999,999)
r=new B.bd(o.cd(0.25),1,C.ah,-1)
q=B.b2(C.iB,o,p,p,13)
t=B.D(p,B.Q(B.a([q,C.yG,new B.dL(1,C.bi,B.i(u,1,C.a0,p,p,new B.M(!0,o,p,p,p,p,14,C.cU,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),B.b2(C.i1,o,p,p,16)],n),C.w,C.j,C.L,0,p,p),C.r,p,D.afS,new B.O(t,p,new B.dV(r,r,r,r),new B.cf(s,s,s,s),p,p,C.y),p,p,p,D.auy,p,p,p)
m.push(new B.kP(new B.rc(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a8,p,p,p,p),!1,!1,p,!1,!1,new B.hM(t,new A.aXW(d),p,p),p))}return B.e9(C.bc,m,C.r,C.bj,6,6)}}
var z=a.updateTypes(["y(i3)","v(i3,i3)","P(P,Dt)","zY()","F<~>(c?)","F<~>()","NC(N)","P(P,i3)","y(Dt)","F<lK>()","WR(N)","~(i3)","y(nm)","y(rN)","i3(a4<c,@>)","DC()"])
A.cD7.prototype={
$1(d){return this.aF2(d)},
aF2(a1){var x=0,w=B.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=B.j(function(a2,a3){if(a2===1)return B.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(B.cv($.co(),new A.cD3(),y.v,f),f)
f=J.a7(e)
if(f.gY(e)){v=D.bzu
x=1
break}u=B.a([],y.s)
for(t=f.gV(e);t.t();)u.push(t.gE(t).a)
t=$.T()
s=t.b
s===$&&B.b()
r=y.G
q=s.R("budgets").az(0,"wedding_id, total").eP("wedding_id",u).b7(new A.cD4(),r)
p=t.b.R("budget_categories").az(0,"wedding_id, amount").eP("wedding_id",u).b7(new A.cD5(),r)
o=t.b.R("expenses").az(0,"wedding_id, amount, paid").eP("wedding_id",u).b7(new A.cD6(),r)
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
u.push(new B.aMj([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1302}
A.cD3.prototype={
$1(d){return d.c},
$S:143}
A.cD4.prototype={
$1(d){return d},
$S:29}
A.cD5.prototype={
$1(d){return d},
$S:29}
A.cD6.prototype={
$1(d){return d},
$S:29}
A.b2Q.prototype={
$2(d,e){return d+e.a.b},
$S:z+2}
A.b4t.prototype={
$1(d){return d.w},
$S:z+0}
A.b4u.prototype={
$1(d){return!d.w},
$S:z+0}
A.b4q.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
A.b4r.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
A.b4s.prototype={
$1(d){return d.a===this.a},
$S:z+0}
A.bJ9.prototype={
$0(){return this.a.y=!0},
$S:0}
A.bJa.prototype={
$0(){return this.a.y=!1},
$S:0}
A.bJr.prototype={
$0(){return this.a.gT().a1(0,$.HN().gaX(),y.x).Zw(0).eF(new A.bJq())},
$S:1}
A.bJq.prototype={
$1(d){},
$S:13}
A.bJ8.prototype={
$1(d){return D.ckm},
$S:z+6}
A.bJf.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
A.bJg.prototype={
$1(d){return d.x!==C.f2&&d.b===this.a},
$S:80}
A.bJp.prototype={
$2(d,e){return B.j9(d,this.a.lg(e))},
$1(d){return this.$2(d,null)},
$S:1305}
A.bJh.prototype={
$2(d,e){return d+e.f},
$S:z+7}
A.bJi.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
A.bJj.prototype={
$0(){return this.a.IF(this.b.a)},
$S:0}
A.bJk.prototype={
$0(){var x=this.a
return x.q(new A.bJe(x))},
$S:0}
A.bJe.prototype={
$0(){return this.a.w=D.Ja},
$S:0}
A.bJl.prototype={
$0(){var x=this.a
return x.q(new A.bJd(x))},
$S:0}
A.bJd.prototype={
$0(){return this.a.w=D.ac_},
$S:0}
A.bJm.prototype={
$0(){var x=this.a
return x.q(new A.bJc(x))},
$S:0}
A.bJc.prototype={
$0(){return this.a.w=D.abZ},
$S:0}
A.bJn.prototype={
$0(){var x=this.a
return x.q(new A.bJb(x))},
$S:0}
A.bJb.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
A.bJo.prototype={
$0(){return A.Cs(this.a.gT().a1(0,$.co(),y.v).b.a)},
$S:z+9}
A.czN.prototype={
$1(d){var x=null,w=this.b
return new B.eK(B.i(this.a,x,x,x,x,x,x,x,x),B.cN(x,C.a9,!0,x,!0,C.z,x,B.cQ(),w,x,x,x,x,x,2,D.aFs,C.a2,!0,x,!0,x,!1,x,C.aI,x,x,x,x,C.j0,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.av,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.at,x,C.b8,x,x,x,x),B.a([B.cp(C.cL,x,x,new A.czL(d),x,x),B.bD(C.dw,new A.czM(d,w),x)],y.p),x)},
$S:16}
A.czL.prototype={
$0(){return B.aq(this.a,!1).bJ()},
$S:0}
A.czM.prototype={
$0(){var x=B.aq(this.a,!1),w=C.f.D(this.b.a.a)
w=B.b0(w," ","")
return x.aj(B.fo(B.b0(w,",",".")))},
$S:0}
A.czW.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=B.bG(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?B.bG(2100,1,1,0,0):x)},
$S:z+1}
A.bLz.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
A.bLB.prototype={
$0(){return B.cn(null,new A.bLC(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
A.bLC.prototype={
$1(d){return new A.WR(this.a.e.a,null)},
$S:z+10}
A.bLA.prototype={
$0(){return A.aka(this.b,this.c,this.a.e.a.a,0)},
$S:0}
A.bIz.prototype={
$0(){var x=this.a
B.aq(x,!1).bJ()
B.ai(x).aq("/bookings",null,y.X)},
$S:0}
A.bIy.prototype={
$3(d,e,f){return B.kE(B.b2(C.hv,this.a,null,null,null),C.t,!0)},
$S:130}
A.bUY.prototype={
$1(d){var x,w,v=null
this.a.a1(0,$.alC().gaX(),y.h).OM(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a4(B.cA(v,v,v,v,v,C.z,v,B.i(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.Y,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
A.bUU.prototype={
$0(){var x=this
return B.rB(x.a,x.b,C.f.bD(x.c.a,x.d+5),null,null)},
$S:0}
A.bUV.prototype={
$0(){return B.ai(this.a).aq("/bookings",null,y.X)},
$S:0}
A.bUW.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bUX.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bGj.prototype={
$1(d){var x=this.a
return x.q(new A.bGi(x,d))},
$S:268}
A.bGi.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.bGk.prototype={
$1(d){var x=this.a
return x.q(new A.bGh(x,d))},
$S:102}
A.bGh.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.bGl.prototype={
$0(){var x,w=this.a,v=C.f.D(w.e.a.a),u=B.fo(B.b0(v,",","."))
w.q(new A.bGg(w,u))
if(w.w!=null||w.x!=null)return
v=B.aq(this.b,!1)
x=C.f.D(w.d.a.a)
u.toString
v.aj(new A.aBB(x,u,w.f,w.r))},
$S:0}
A.bGg.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A despesa precisa de um t\xedtulo":null
x.x=this.b==null?"Indica um valor v\xe1lido":null},
$S:0}
A.bLD.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+12}
A.bLE.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
A.bLF.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=B.bG(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?B.bG(2100,1,1,0,0):x)},
$S:z+1}
A.bLG.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
A.bLH.prototype={
$1(d){return C.e.p(this.a,d.a)},
$S:z+13}
A.bLI.prototype={
$0(){var x=this.c
return A.aka(this.a,this.b,x.a,x.d)},
$S:0}
A.bLJ.prototype={
$1(d){return this.a.a1(0,$.alC().gaX(),y.h).OM(this.b.a)},
$S:148}
A.bHh.prototype={
$1(d){return d.c},
$S:143}
A.bHn.prototype={
$2(d,e){return B.j9(d,this.a.lg(e))},
$S:41}
A.bHk.prototype={
$0(){return D.bLS},
$S:85}
A.bHj.prototype={
$2(d,e){return B.Sa(B.a([new B.im("Tentar outra vez",new A.bHa(this.a),!1,null)],y.p),C.fj,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1307}
A.bHa.prototype={
$0(){return this.a.ai($.cXx())},
$S:0}
A.bHi.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new A.bHl(g),e=new A.bHm(g,this.b),d=J.c9(a4),a0=d.d7(a4,0,new A.bHb()),a1=d.d7(a4,0,new A.bHc(f)),a2=d.d7(a4,0,new A.bHd(e)),a3=y.N
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
x=B.vc(i,""+t+" "+r+w,"Todos os eventos",C.hB,u,v,x)
v=y.p
u=B.a([new G.Sb(B.a([new G.xh("Gasto",B.aQ(a1,!1),h),new G.xh("Por pagar",B.aQ(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=B.a([],v)
for(t=B.ew(a4,0,y.A),r=J.ar(t.a),q=t.b,t=new B.bX(r,q,B.u(t).i("bX<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new B.a3(q+n,r.gE(r)):B.aj(B.c1())
o.a=null
m=n.b
o.a=m
l=B.a([],v)
if(n.a>0)l.push(C.fh)
n=a3.h(0,m.a[0])
n=B.i(n==null?"Evento":n,1,C.a0,i,i,C.ao,i,i,i)
k=o.a.a[2]
k=B.a([k>0?"Teto "+B.aQ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+B.aQ(j[3]+e.$1(j[0]),!1))}n=B.B(B.a([n,C.be,B.i(C.e.a3(k," \xb7 "),i,i,i,i,C.W,i,i,i)],v),C.H,C.j,C.m,0,C.v)
k=o.a.a
l.push(new B.hM(B.D(i,B.Q(B.a([new B.bT(1,C.aw,n,i),C.aq,B.i(B.aQ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.ao,i,i,i),C.bq,C.lH],v),C.w,C.j,C.m,0,i,i),C.r,C.am,C.e4,i,i,i,i,C.cr,i,i,i),new A.bHe(o,g),i,i))
C.e.n(w,l)}return B.B(B.a([x,new B.dN("N\xfameros",i,u,16,i),new B.dN("Por evento \xb7 "+d,i,w,16,i),D.aBe],v),C.J,C.j,C.m,0,C.v)},
$S:1308}
A.bHl.prototype={
$1(d){return J.dc(this.a.e,new A.bH8(d)).d7(0,0,new A.bH9())},
$S:188}
A.bH8.prototype={
$1(d){return d.b===this.a&&d.x!==C.f2},
$S:80}
A.bH9.prototype={
$2(d,e){return d+e.w},
$S:458}
A.bHm.prototype={
$1(d){return J.dc(this.a.e,new A.bHf(d)).d7(0,0,new A.bHg(this.b))},
$S:188}
A.bHf.prototype={
$1(d){return d.b===this.a&&d.x!==C.f2},
$S:80}
A.bHg.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:458}
A.bHb.prototype={
$2(d,e){return d+e.a[2]},
$S:191}
A.bHc.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:191}
A.bHd.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:191}
A.bHe.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
A.aXW.prototype={
$0(){return B.ai(this.a).aq("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(A,"dEw","cUD",14)
w(A,"dEv","dlt",15)
v(A.DC.prototype,"giJ","d4",3)
var t
u(t=A.abk.prototype,"gapl","TE",4)
v(t,"gaRq","Qq",5)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cD7,A.cD3,A.cD4,A.cD5,A.cD6,A.b4t,A.b4u,A.b4q,A.b4s,A.bJq,A.bJ8,A.bJf,A.bJg,A.bJp,A.bJi,A.czN,A.bLz,A.bLC,A.bIy,A.bUY,A.bGj,A.bGk,A.bLD,A.bLE,A.bLG,A.bLH,A.bLJ,A.bHh,A.bHi,A.bHl,A.bH8,A.bHm,A.bHf])
x(B.H,[A.Dt,A.b2P,A.zY,A.Ma,A.a7n,A.aBB])
x(B.cR,[A.b2Q,A.bJh,A.czW,A.bLF,A.bHn,A.bHj,A.bH9,A.bHg,A.bHb,A.bHc,A.bHd])
w(A.DC,B.fb)
x(B.bR,[A.b4r,A.bJ9,A.bJa,A.bJr,A.bJj,A.bJk,A.bJe,A.bJl,A.bJd,A.bJm,A.bJc,A.bJn,A.bJb,A.bJo,A.czL,A.czM,A.bLB,A.bLA,A.bIz,A.bUU,A.bUV,A.bUW,A.bUX,A.bGi,A.bGh,A.bGl,A.bGg,A.bLI,A.bHk,A.bHa,A.bHe,A.aXW])
w(A.abj,B.fr)
w(A.a0p,B.dD)
w(A.abk,B.dy)
x(B.L,[A.aP2,A.aCY,A.aCw,A.Xe,A.aht,A.amZ])
x(B.en,[A.aCZ,A.aFH,A.WR,A.aBH])
w(A.NC,B.J)
w(A.aBC,B.a_)})()
B.br(b.typeUniverse,JSON.parse('{"DC":{"fb":["zY"]},"a0p":{"J":[],"e":[],"f":[]},"NC":{"J":[],"e":[],"f":[]},"WR":{"J":[],"e":[],"f":[]},"abk":{"a_":["a0p"]},"aP2":{"L":[],"e":[],"f":[]},"aCY":{"L":[],"e":[],"f":[]},"aCZ":{"J":[],"e":[],"f":[]},"aCw":{"L":[],"e":[],"f":[]},"aFH":{"J":[],"e":[],"f":[]},"Xe":{"L":[],"e":[],"f":[]},"aBC":{"a_":["NC"]},"aht":{"L":[],"e":[],"f":[]},"aBH":{"J":[],"e":[],"f":[]},"amZ":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{l:x("ax<f8>"),k:x("ax<t<rN>>"),u:x("ax<t<fY>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>>"),y:x("ax<a4<c,t<c>>>"),x:x("zz"),b:x("uK"),d:x("rS"),Z:x("pb"),v:x("ed"),_:x("i3"),h:x("DC"),g:x("zY"),D:x("r<Dt>"),r:x("r<i3>"),Q:x("r<xh>"),F:x("r<ei>"),Y:x("r<a4<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>"),E:x("r<a7n>"),c:x("r<Ma>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fY>"),t:x("t<fx>"),G:x("t<a4<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>"),P:x("a4<c,@>"),w:x("dn"),A:x("+eventId,spentByHand,total,unpaidByHand(c,P,P,P)"),e:x("lK"),N:x("c"),B:x("aBB"),q:x("ds"),i:x("P"),z:x("@"),S:x("v"),X:x("H?"),T:x("c?"),I:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afS=new B.aP(0,1/0,32,1/0)
D.auy=new B.a2(8,5,6,5)
D.bzb=x([],y.r)
D.aAe=new A.zY(!1,D.bzb)
D.aBc=new B.kI("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBe=new B.kI("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBn=new B.kI("Sem pagamentos nesta vista.",8,null)
D.aFs=new B.dT(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aHg=new B.et("Pago",C.da,null)
D.aHn=new B.et("Por pagar",C.hz,null)
D.aHu=new B.m5("Or\xe7amento","Todos os teus eventos",null)
D.aHA=new B.m5("Or\xe7amento",null,null)
D.bys=x(["catering"],y.s)
D.bzt=x([],y.D)
D.bzu=x([],y.n)
D.bzZ=x(["flowers_decor"],y.s)
D.bBu=x(["music_dj","bands_musicians"],y.s)
D.bC2=x(["photography"],y.s)
D.bDh=x(["venue"],y.s)
D.aEK=new B.qI("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kB,null)
D.bLc=new B.R(C.hW,D.aEK,null)
D.bLS=new B.R(Q.uK,C.eg,null)
D.c3O=new B.M(!0,C.A,null,null,null,null,14,C.cU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5X=new B.M(!0,null,null,null,null,null,null,C.cU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ckm=new A.NC(null)
D.Ja=new A.abj(0,"all")
D.abZ=new A.abj(1,"paid")
D.ac_=new A.abj(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dRG","cXx",()=>C.bT.$1$1(new A.cD7(),y.m))
x($,"dSv","alC",()=>B.mT(A.dEv(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["mFb+tJklJHtX7x3WlwmXTreZquI="]=a.current})($__dart_deferred_initializers__);