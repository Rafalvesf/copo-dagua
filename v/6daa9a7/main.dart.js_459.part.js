((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,N,O,P,Q,E,R,S,F,G,T,H,K,U,I,V,A={czY:function czY(){},czU:function czU(){},czV:function czV(){},czW:function czW(){},czX:function czX(){},
dzw(d,e){var x,w,v,u=B.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.G)(x),++v)u.push(new A.Dd(x[v]))
return new A.b1e(d.b,u)},
Dd:function Dd(d){this.a=d},
b1e:function b1e(d,e){this.a=d
this.b=e},
b1f:function b1f(){},
cR5(d){var x="category",w="due_date",v=J.a7(d),u=B.a_(v.h(d,"id")),t=B.a_(v.h(d,"wedding_id")),s=B.a_(v.h(d,"title")),r=A.dvR(A.d5u(B.J(v.h(d,x)))),q=A.d5u(B.J(v.h(d,x))),p=B.dp(v.h(d,"amount")),o=v.h(d,w)==null?null:B.d8(B.a_(v.h(d,w)))
v=B.dS(v.h(d,"paid"))
return new H.i_(u,t,s,r,q,p,o,v===!0)},
d5u(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dvR(d){var x
A:{if("venue"===d){x=E.xx
break A}if("catering"===d){x=E.xt
break A}if("photography"===d){x=E.xu
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xv
break A}if("flowers_decor"===d){x=E.xw
break A}x=null
break A}return x},
dhG(){return new A.Dm()},
zE:function zE(d,e){this.a=d
this.b=e},
b2O:function b2O(){},
b2P:function b2P(){},
Dm:function Dm(){this.b=this.x=null},
b2L:function b2L(){},
b2M:function b2M(d,e){this.a=d
this.b=e},
b2N:function b2N(d){this.a=d},
Ca(d){var x=0,w=B.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ca=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:x=3
return B.d(F.ajg(),$async$Ca)
case 3:u=$.T()
t=u.b
t===$&&B.b()
x=4
return B.d(t.P("events").aw(0,"partner_name_1, partner_name_2").W("id",d).dz(),$async$Ca)
case 4:s=f
x=5
return B.d(u.b.P("bookings").aw(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("wedding_id",d).dk(0,"event_date",!1),$async$Ca)
case 5:r=f
u=B.a([],y.s)
for(t=J.at(r);t.t();)u.push(B.a_(J.h(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=B.a([],y.Y)
x=7
break
case 8:t=$.T().b
t===$&&B.b()
x=9
return B.d(t.P("payments").aw(0,"booking_id, type, status, amount, paid_at, due_at, provider").eO("booking_id",u).tF(0,"created_at"),$async$Ca)
case 9:q=f
case 7:u=$.T()
t=u.b
t===$&&B.b()
x=10
return B.d(t.P("expenses").aw(0,"title, category, amount, due_date, paid").W("wedding_id",d).tF(0,"due_date"),$async$Ca)
case 10:p=f
x=11
return B.d(u.b.P("budget_categories").aw(0,"name, amount").W("wedding_id",d).tF(0,"position"),$async$Ca)
case 11:o=f
x=12
return B.d(u.b.P("budgets").aw(0,"total").W("wedding_id",d).dz(),$async$Ca)
case 12:n=f
m=F.cQS(F.cxf(s),"Gastos e parceiros",r,q,!1)
u=B.a([],y.c)
for(t=J.at(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cN(j==null?"":j)
i=k.h(l,"category")
i=J.cN(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=B.fi(B.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=B.ej(B.q(g))
g=g==null?null:g.eH()}u.push(new A.LM(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=B.a([],y.E)
for(l=J.at(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cN(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=B.fi(B.q(k))
if(k==null)k=0}t.push(new A.a6D(i,k))}l=n==null?null:F.cRo(J.h(n,"total"))
v=new F.lF(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$Ca,w)},
LM:function LM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6D:function a6D(d,e){this.a=d
this.b=e},
df2(){return new A.a_O(null)},
aRZ(d,e,f){var x=0,w=B.n(y.I),v,u,t
var $async$aRZ=B.j(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a7(f,0)
x=3
return B.d(B.fT(!0,new A.cwF(e,new B.aI(new B.bD(u,C.aJ,C.aA),$.ad())),d,y.i),$async$aRZ)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aRZ,w)},
aj9(d,e,f,g){return A.dvE(d,e,f,g)},
dvE(d,e,f,g){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q
var $async$aj9=B.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return B.d(A.aRZ(d,"Teto para "+f,g),$async$aj9)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return B.d(e.a1(0,$.Hr().gaV(),y.x).Oq(f,r),$async$aj9)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a4(I.Hd)
x=7
break
case 4:x=2
break
case 7:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$aj9,w)},
d3D(d){var x=B.W(d,y._)
C.e.cO(x,new A.cwO())
return x},
d46(d){var x=C.f.aZ(C.i.k(B.aN(d)),2,"0"),w=C.f.aZ(C.i.k(B.ay(d)),2,"0"),v=B.aG(d)===B.aG(new B.af(Date.now(),0,!1))?"":"/"+B.aG(d)
return x+"/"+w+v},
aaA:function aaA(d,e){this.a=d
this.b=e},
a_O:function a_O(d){this.a=d},
aaB:function aaB(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bGR:function bGR(d){this.a=d},
bGS:function bGS(d){this.a=d},
bH8:function bH8(d){this.a=d},
bH7:function bH7(){},
bGQ:function bGQ(){},
bGX:function bGX(){},
bGY:function bGY(d){this.a=d},
bH6:function bH6(d){this.a=d},
bGZ:function bGZ(){},
bH_:function bH_(){},
bH0:function bH0(d,e){this.a=d
this.b=e},
bH1:function bH1(d){this.a=d},
bGW:function bGW(d){this.a=d},
bH2:function bH2(d){this.a=d},
bGV:function bGV(d){this.a=d},
bH3:function bH3(d){this.a=d},
bGU:function bGU(d){this.a=d},
bH4:function bH4(d){this.a=d},
bGT:function bGT(d){this.a=d},
bH5:function bH5(d){this.a=d},
cwF:function cwF(d,e){this.a=d
this.b=e},
cwD:function cwD(d){this.a=d},
cwE:function cwE(d,e){this.a=d
this.b=e},
cwO:function cwO(){},
aNI:function aNI(d,e,f){this.c=d
this.d=e
this.a=f},
aBL:function aBL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBM:function aBM(d,e){this.e=d
this.a=e},
bJg:function bJg(){},
bJi:function bJi(d,e){this.a=d
this.b=e},
bJj:function bJj(d){this.a=d},
bJh:function bJh(d,e,f){this.a=d
this.b=e
this.c=f},
aBk:function aBk(d,e){this.c=d
this.a=e},
bGg:function bGg(d){this.a=d},
bGf:function bGf(d){this.a=d},
aEs:function aEs(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bSl:function bSl(d,e){this.a=d
this.b=e},
bSh:function bSh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSi:function bSi(d){this.a=d},
bSj:function bSj(d,e){this.a=d
this.b=e},
bSk:function bSk(d,e){this.a=d
this.b=e},
WH:function WH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAp:function aAp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Nc:function Nc(d){this.a=d},
aAq:function aAq(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.x=_.w=_.r=_.f=null},
bE0:function bE0(d){this.a=d},
bE_:function bE_(d,e){this.a=d
this.b=e},
bE1:function bE1(d){this.a=d},
bDZ:function bDZ(d,e){this.a=d
this.b=e},
bE2:function bE2(d,e){this.a=d
this.b=e},
bDY:function bDY(d,e){this.a=d
this.b=e},
Wj:function Wj(d,e){this.e=d
this.a=e},
bJk:function bJk(d){this.a=d},
bJl:function bJl(d){this.a=d},
bJm:function bJm(){},
bJn:function bJn(){},
bJo:function bJo(d){this.a=d},
bJp:function bJp(d,e,f){this.a=d
this.b=e
this.c=f},
bJq:function bJq(d,e){this.a=d
this.b=e},
agw:function agw(d,e,f){this.c=d
this.d=e
this.a=f},
aAv:function aAv(d,e,f){this.e=d
this.f=e
this.a=f},
bEZ:function bEZ(){},
bF4:function bF4(d){this.a=d},
bF1:function bF1(){},
bF0:function bF0(d){this.a=d},
bES:function bES(d){this.a=d},
bF_:function bF_(d,e,f){this.a=d
this.b=e
this.c=f},
bF2:function bF2(d){this.a=d},
bEQ:function bEQ(d){this.a=d},
bER:function bER(){},
bF3:function bF3(d,e){this.a=d
this.b=e},
bEX:function bEX(d){this.a=d},
bEY:function bEY(d){this.a=d},
bET:function bET(){},
bEU:function bEU(d){this.a=d},
bEV:function bEV(d){this.a=d},
bEW:function bEW(d,e){this.a=d
this.b=e},
alX:function alX(d,e){this.c=d
this.a=e},
aWq:function aWq(d){this.a=d},
d8n(d){var x
switch(d){case E.xx:x=D.bBI
break
case E.xt:x=D.bwX
break
case E.xu:x=D.bAu
break
case E.xv:x=D.bzX
break
case E.xw:x=D.byq
break
default:x=C.aa
break}return x}},D,L,M
J=c[1]
B=c[0]
C=c[2]
N=c[195]
O=c[209]
P=c[210]
Q=c[178]
E=c[211]
R=c[154]
S=c[208]
F=c[128]
G=c[75]
T=c[129]
H=c[74]
K=c[207]
U=c[126]
I=c[206]
V=c[76]
A=a.updateHolder(c[51],A)
D=c[205]
L=c[70]
M=c[172]
A.Dd.prototype={
gau(d){return this.a.a}}
A.b1e.prototype={
gpU(){return C.e.dc(this.b,0,new A.b1f())},
gaB4(){var x=this.a
return x===0?0:C.k.aj(this.gpU()/x,0,1)}}
A.zE.prototype={
gby5(){var x=this.b,w=B.a8(x).i("a3<1>")
x=B.W(new B.a3(x,new A.b2O(),w),w.i("z.E"))
return x},
gbyr(d){var x=this.b,w=B.a8(x).i("a3<1>")
x=B.W(new B.a3(x,new A.b2P(),w),w.i("z.E"))
return x},
awb(d,e){var x=e==null?this.a:e
return new A.zE(x,d==null?this.b:d)},
il(d){return this.awb(null,d)},
avT(d){return this.awb(d,null)}}
A.Dm.prototype={
d1(){var x=y.T,w=this.x=B.eK(this).G(B.cw($.cm(),new A.b2L(),y.v,x),x)
if(w!=null)B.je(new A.b2M(this,w),y.H)
return D.ayY},
c_(d,e){return this.bvw(0,e)},
bvw(d,e){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$c_=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:v.sa2(0,v.ga2(0).il(!0))
u=$.T().b
u===$&&B.b()
t=A
s=!1
r=J
x=2
return B.d(u.P("expenses").cj(0).W("wedding_id",e).dk(0,"created_at",!0),$async$c_)
case 2:v.sa2(0,new t.zE(s,r.d3(g,A.dAi(),y._).by(0)))
return B.l(null,w)}})
return B.m($async$c_,w)},
US(d){return this.bls(d)},
bls(d){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$US=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:r=$.T().b
r===$&&B.b()
r=r.P("expenses")
u=d.e
if(u==null){u=d.d
u=u==null?null:u.b}t=d.r
t=t==null?null:C.e.gM(t.cg().split("T"))
x=2
return B.d(r.dd(0,B.S(["wedding_id",d.b,"title",d.c,"category",u,"amount",d.f,"due_date",t],y.N,y.X)).cj(0).dN(0),$async$US)
case 2:s=f
t=v.ga2(0)
r=B.W(v.ga2(0).b,y._)
r.push(A.cR5(s))
v.sa2(0,t.avT(r))
return B.l(null,w)}})
return B.m($async$US,w)},
On(d){return this.bAZ(d)},
bAZ(d){var x=0,w=B.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$On=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:n=C.e.lg(v.ga2(0).b,new A.b2N(d))
m=$.T().b
m===$&&B.b()
u=y.z
l=A
x=2
return B.d(m.P("expenses").bg(0,B.S(["paid",!n.w,"updated_at",new B.af(Date.now(),0,!1).cg()],u,u)).W("id",d).cj(0).dN(0),$async$On)
case 2:t=l.cR5(f)
u=v.ga2(0)
m=B.a([],y.r)
for(s=v.ga2(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,B.G)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa2(0,u.avT(m))
return B.l(null,w)}})
return B.m($async$On,w)}}
A.LM.prototype={}
A.a6D.prototype={
gau(d){return this.a}}
A.aaA.prototype={
I(){return"_BudgetFilter."+this.b}}
A.a_O.prototype={
R(){return new A.aaB(D.Iy)}}
A.aaB.prototype={
Ta(d){return this.bbr(d)},
bbr(d){var x=0,w=B.n(y.H),v,u=this,t,s,r
var $async$Ta=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.q(new A.bGR(u))
x=1
break}u.q(new A.bGS(u))
t=u.gT()
s=$.cm()
r=t.a1(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return B.d(t.a1(0,s.gaV(),y.Z).aw(0,d),$async$Ta)
case 5:case 4:case 1:return B.l(v,w)}})
return B.m($async$Ta,w)},
am(){this.aJ()
B.je(new A.bH8(this),y.H)},
Q_(){var x=0,w=B.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Q_=B.j(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:r=u.gT()
q=$.akA()
p=y.h
o=r.a1(0,q.gaV(),p).x
if(o==null){x=1
break}t=u.c
t.toString
x=3
return B.d(B.ck(null,new A.bGQ(),!1,t,!0,!0,null,y.B),$async$Q_)
case 3:s=e
if(s==null){x=1
break}r=r.a1(0,q.gaV(),p)
q=s.a
p=s.b
t=s.c
r.US(new H.i_("",o,q,null,s.d,p,t,!1))
case 1:return B.l(v,w)}})
return B.m($async$Q_,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gT(),a2=a1.G($.Hr(),y.b),a3=a1.G($.Hs(),y.d),a4=a1.G($.akA(),y.g),a5=a2.b,a6=a5==null?e:A.dzw(a5,a3.b)
a5=B.iU(a1.G($.ju(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iE
a5=y.T
w=a1.G(B.cw($.cm(),new A.bGX(),y.v,a5),a5)
if(f.y){a1=f.gaoI()
return B.cP(e,C.cO,B.oc(C.f5,40,B.a([C.fP,D.aG9,L.cND(a1,e),new A.aAv(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.d7(x,new A.bGY(w))
a1=a1.G($.un(),y.l)
u=a1.gv(a1)
t=new A.bH6(u==null?C.f1:u)
a1=y._
a5=B.W(a4.gby5(),a1)
for(s=v.a,r=J.c9(s),q=r.gV(s),p=v.b,o=v.$ti.i("hr<1>"),n=new B.hr(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i_("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=B.W(a4.gbyr(0),a1)
for(s=r.gV(s),o=new B.hr(s,p,o),p=y.r;o.t();){r=s.gE(s)
n=B.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new H.i_("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new H.i_("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.p(q,n)}switch(f.w.a){case 0:a1=B.W(A.d3D(q),a1)
C.e.p(a1,a5)
break
case 1:a1=a5
break
case 2:a1=A.d3D(q)
break
default:a1=e}h=C.e.dc(q,0,new A.bGZ())
s=a6==null
if(s)g=D.bxW
else{r=a6.b
p=B.a8(r).i("a3<1>")
g=B.W(new B.a3(r,new A.bH_(),p),p.i("z.E"))}if(s)a1=C.cQ
else{s=f.gaQA()
r=y.p
p=B.a([new B.pa(B.a([new B.qz(s,"Nova despesa",e)],r),e),D.aGf,L.cND(f.gaoI(),w),new A.aNI(a6,new A.bH0(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=B.aP(a6.gpU(),!1)
n=a5.length
m=n===1?d:a0
l=B.aP(h,!1)
k=q.length
j=k===1?d:a0
p.push(new B.dM("N\xfameros",e,B.a([new G.RM(B.a([new G.x1("Gasto",o,""+n+" "+m),new G.x1("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=B.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.p(o,B.a([new Q.lY(B.a([new B.ef("Todos",l===D.Iy,n+m,new A.bH1(f),e),new B.ef("Pendentes",l===D.ab2,m,new A.bH2(f),e),new B.ef("Pagos",l===D.ab1,n,new A.bH3(f),e)],y.F),4,!0,e),C.ar],r))}o.push(new A.aEs(a1,s,a5.length===0&&q.length===0,e))
p.push(new B.dM("Pagamentos",e,o,16,e))
a1=B.a([new B.kF(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new A.aBL(g,f.x,new A.bH4(f),e))
p.push(new B.dM("Categorias",e,a1,16,e))
p.push(new B.dM("Exportar",e,B.a([new F.Dn("Gastos e parceiros",!1,new A.bH5(f),e)],r),16,e))
a1=B.oc(C.f5,40,p,e,!0,!1)}return B.cP(e,C.cO,a1,!0,e)},
Ip(d){return this.aXn(d)},
aXn(d){var x=0,w=B.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Ip=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return B.d(A.aRZ(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Ip)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return B.d(s.gT().a1(0,$.Hr().gaV(),y.x).ZH(r),$async$Ip)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a4(I.Hd)
x=7
break
case 4:x=2
break
case 7:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Ip,w)}}
A.aNI.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpU()>0?"Gastos "+B.aP(t.gpU(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return B.v2(new B.ij("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.ht,0,"por definir","\u2014")}x=C.k.aI(t.gaB4()*100)
w=s-t.gpU()<0?"Acima do teto":"Ainda tens"
v=B.aP(Math.abs(s-t.gpU()),!1)
s=B.aP(s,!1)
u=t.gaB4()
return B.aT(B.v2(I.a17,"Gastos "+B.aP(t.gpU(),!1)+" \xb7 "+x+"% do teto",w,C.ht,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
A.aBL.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:B.e_(s,0,B.eP(5,"count",y.S),B.a8(s).c).by(0),q=y.p,p=B.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,B.G)(r),++w)p.push(new A.aBM(r[w],null))
q=B.a([B.f5(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new B.ij(u,v.e,!0,null))}return B.B(q,C.J,C.j,C.o,0,C.v)}}
A.aBM.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(B.cw($.cm(),new A.bJg(),y.v,m),m)
if(l==null)x=C.r0
else{m=e.G($.cU1().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r0:m}m=B.a([],y.s)
for(w=A.d8n(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.p(m,s)}w=n===0
r=w?0:o.b/n
v=new A.bJi(this,d)
if(w)return B.jQ(!1,!1,p,v,B.aP(o.b,!1)+" gastos \xb7 sem teto",o.a,new B.o7("P\xf4r teto",new A.bJh(this,d,e),!0,p))
w=B.aP(o.b,!1)
u=B.aP(n,!1)
s=y.p
q=B.a([B.aO(new B.SF(r,6,p),p,92)],s)
if(m.length!==0)C.e.p(q,B.a([C.aF,new A.alX(m,p)],s))
return B.jQ(!1,!1,p,v,w+" de "+u,o.a,B.B(q,C.dy,C.j,C.N,0,C.v))}}
A.aBk.prototype={
u(d){var x,w,v=null,u=$.ap,t=$.fb.ci(0.55),s=B.a2(18),r=B.a2(12),q=this.c,p=q.e
r=B.hh(r,B.aO(p==null?B.l0(B.b3(C.ho,u,v,v,v),C.u,!0):B.qw(p,144,new A.bGf(u),!1,C.bK,B.uj(),!1,v,v,v),48,48),C.b4)
p=B.i(q.b,1,C.a0,v,v,D.c1w,v,v,v)
x=B.b3(C.hU,u,v,v,14)
w=q.d
q=w>0?q.gPA()+" \xb7 "+B.aP(w,!1):q.gPA()
w=y.p
return new B.Q(C.cS,B.aT(B.C(v,B.R(B.a([r,C.ag,B.a6(B.B(B.a([p,C.fX,B.R(B.a([x,C.eR,new B.dK(1,C.bi,B.i(q,1,C.a0,v,v,B.aH(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bg,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.x,C.j,C.o,0,v,v)],w),C.I,C.j,C.o,0,C.v),1),B.b3(C.hW,u,v,v,v)],w),C.x,C.j,C.o,0,v,v),C.r,v,v,new B.O(t,v,v,s,v,v,C.y),v,v,v,C.dI,v,v,v),new A.bGg(d),v),v)}}
A.aEs.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?B.RL(B.a([new B.ij("+ Nova despesa",this.f,!0,j)],y.p),C.ff,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aA6
x=new A.bSl(e,d)
w=y.p
v=B.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,B.G)(i),++t){s=i[t]
r=s.a
q=C.f.di(r,":pay:")
r=C.f.b3(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gM(r.split(" \xb7 "))
n=B.aP(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+A.d46(m)
v.push(new U.Dy(new B.cA(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new A.bSh(d,e,s,q),B.Hm(m)===C.h8,j))
continue}p=r?new A.bSi(d):new A.bSj(x,s)
v.push(new A.WH(s,p,r||s.w?j:new A.bSk(x,s),j))}i=B.a([],w)
for(k=0;k<v.length;++k){u=B.a([],w)
if(k>0&&v[k] instanceof A.WH&&v[k-1] instanceof A.WH)u.push(C.jj)
u.push(v[k])
C.e.p(i,u)}i.push(D.azW)
return B.B(i,C.J,C.j,C.o,0,C.v)}}
A.WH.prototype={
u(d){var x=this.c,w=x.r,v=B.a([B.aP(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+A.d46(w))
v=C.e.a3(v," \xb7 ")
if(u)u=D.aFW
else{u=this.e
u=u!=null?new B.o7("Marcar pago",u,!0,null):D.aG2}return B.jQ(!1,!1,null,this.d,v,x.c,u)}}
A.aAp.prototype={}
A.Nc.prototype={
R(){var x=$.ad()
return new A.aAq(new B.aI(C.ao,x),new B.aI(C.ao,x))}}
A.aAq.prototype={
m(){var x=this.d,w=$.ad()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a8()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dV(B.B(B.a([B.i("Adicionar despesa",w,w,w,w,B.aq(d).ok.r,w,w,w),C.a4,new M.jL("Despesa",x.d,x.w,w,w,w),C.Q,new M.jL("Valor (\u20ac)",x.e,x.x,C.cC,w,w),C.Q,T.cNi("Prazo (opcional)",new A.bE0(x),x.f),C.aC,new V.a0n(x.r,new A.bE1(x),w),C.a4,new B.fC("Guardar",new A.bE2(x,d),!1,w)],y.p),C.J,C.j,C.N,0,C.v),C.z,w,new B.a0(20,20,20,v.f.d+20),w,w,C.a1)}}
A.Wj.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.Hr(),y.b).b
if(j==null)x=k
else{j=j.c
j=B.eS(new B.a3(j,new A.bJk(l),B.a8(j).i("a3<1>")))
x=j}if(x==null)x=l.e
j=e.G($.akA(),y.g).b
w=B.a8(j).i("a3<1>")
v=B.W(new B.a3(j,new A.bJl(l),w),w.i("z.E"))
C.e.cO(v,new A.bJm())
j=y.T
u=e.G(B.cw($.cm(),new A.bJn(),y.v,j),j)
t=A.d8n(l.e.c)
if(u==null)s=K.EL
else{j=e.G($.aTK().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.EL
j=J.d7(j,new A.bJo(t))
s=B.W(j,j.$ti.i("z.E"))}j=B.aw(d,k,y.w).w
w=B.bV(B.C(k,k,C.r,k,k,new B.O(C.br,k,k,B.a2(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=B.i(x.a,k,k,k,k,B.aq(d).ok.r,k,k,k)
q=B.a6(new A.agw("Gasto",B.aP(x.b,!1),k),1)
p=x.d
o=y.p
p=B.a([w,C.a4,r,C.aC,B.R(B.a([q,C.av,B.a6(B.aT(new A.agw("Teto \xb7 tocar para mudar",p===0?"Definir":B.aP(p,!1),k),new A.bJp(d,e,x),k),1)],o),C.x,C.j,C.o,0,k,k)],o)
if(s.length!==0){w=B.a([C.bf,B.i("Contratado na app",k,k,k,k,B.aq(d).ok.w,k,k,k),C.X],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,B.G)(s),++n)w.push(new A.aBk(s[n],k))
C.e.p(p,w)}p.push(C.bf)
p.push(B.i("Despesas",k,k,k,k,B.aq(d).ok.w,k,k,k))
p.push(C.X)
w=v.length
if(w===0)p.push(D.bJo)
else for(n=0;n<v.length;v.length===w||(0,B.G)(v),++n){m=v[n]
r=B.i(m.c,k,k,k,k,C.h1,k,k,k)
q=m.r
q=q==null?k:B.i("At\xe9 "+C.f.aZ(C.i.k(B.aN(q)),2,"0")+"/"+C.f.aZ(C.i.k(B.ay(q)),2,"0")+"/"+B.aG(q),k,k,k,k,k,k,k,k)
p.push(B.iZ(!1,C.a_,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,B.R(B.a([B.i(B.aP(m.f,!1),k,k,k,k,D.c3F,k,k,k),C.ak,new R.CR(m.w,new A.bJq(e,m),k,$.ap,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.IA,k)],o),C.x,C.j,C.N,0,k,k),k))}return B.bG(!0,new B.ev(new B.aM(0,1/0,0,j.a.b*0.8),B.d5(p,k,N.Cm,k,k,!1,C.a1,!0),k),k,C.a_,!0)}}
A.agw.prototype={
u(d){var x=null,w=B.a2(16)
return B.C(x,B.B(B.a([B.i(this.c,x,x,x,x,C.b9,x,x,x),C.ar,B.i(this.d,x,x,x,x,O.a9o,x,x,x)],y.p),C.I,C.j,C.o,0,C.v),C.r,x,x,new B.O(C.a8,x,x,w,x,x,C.y),x,x,x,C.cY,x,x,x)}}
A.aAv.prototype={
bc(d,e){var x,w=y.t,v=e.G(B.cw($.cm(),new A.bEZ(),y.v,w),w),u=e.G($.cU0(),y.o)
w=e.G($.un(),y.l)
x=w.gv(w)
return B.h3(u,new A.bF_(this,new A.bF4(x==null?C.f1:x),v),new A.bF0(e),new A.bF1(),!1,!0,!1)}}
A.alX.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.ap,n=y.p,m=B.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.G)(x),++v){u=x[v]
t=$.fb
s=new B.b5(999,999)
r=new B.bb(o.ci(0.25),1,C.af,-1)
q=B.b3(C.hU,o,p,p,13)
t=B.C(p,B.R(B.a([q,C.yk,new B.dK(1,C.bi,B.i(u,1,C.a0,p,p,new B.M(!0,o,p,p,p,p,14,C.cT,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),B.b3(C.hW,o,p,p,16)],n),C.x,C.j,C.N,0,p,p),C.r,p,D.aeG,new B.O(t,p,new B.dY(r,r,r,r),new B.ce(s,s,s,s),p,p,C.y),p,p,p,D.atr,p,p,p)
m.push(new B.kN(new B.r1(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a9,p,p,p,p),!1,!1,p,!1,!1,new B.hH(t,new A.aWq(d),p,p),p))}return B.eb(C.bc,m,C.r,C.bl,6,6)}}
var z=a.updateTypes(["y(i_)","v(i_,i_)","P(P,Dd)","zE()","F<~>(c?)","F<~>()","Nc(N)","P(P,i_)","y(Dd)","F<lF>()","Wj(N)","~(i_)","y(nb)","y(rB)","i_(a5<c,@>)","Dm()"])
A.czY.prototype={
$1(d){return this.aEg(d)},
aEg(a1){var x=0,w=B.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=B.j(function(a2,a3){if(a2===1)return B.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.G(B.cw($.cm(),new A.czU(),y.v,f),f)
f=J.a7(e)
if(f.gY(e)){v=D.bxX
x=1
break}u=B.a([],y.s)
for(t=f.gV(e);t.t();)u.push(t.gE(t).a)
t=$.T()
s=t.b
s===$&&B.b()
r=y.G
q=s.P("budgets").aw(0,"wedding_id, total").eO("wedding_id",u).b7(new A.czV(),r)
p=t.b.P("budget_categories").aw(0,"wedding_id, amount").eO("wedding_id",u).b7(new A.czW(),r)
o=t.b.P("expenses").aw(0,"wedding_id, amount, paid").eO("wedding_id",u).b7(new A.czX(),r)
r=y.N
u=y.i
t=B.A(r,u)
d=s=y.P
a0=J
x=3
return B.d(q,$async$$1)
case 3:d,n=a0.bo(a3,s),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E")
case 4:if(!n.t()){x=5
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
t.j(0,B.a_(k.h(l,"wedding_id")),B.dp(k.h(l,"total")))
x=4
break
case 5:j=B.A(r,u)
d=J
x=6
return B.d(p,$async$$1)
case 6:n=d.bo(a3,s),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=B.a_(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=B.aL(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=B.A(r,u)
d=J
x=9
return B.d(o,$async$$1)
case 9:u=d.bo(a3,s),s=B.u(u),u=new B.ak(u,u.gA(u),s.i("ak<V.E>")),s=s.i("V.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=B.a_(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=B.aL(n.h(r,"amount"))
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
u.push(new B.aL0([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1283}
A.czU.prototype={
$1(d){return d.c},
$S:146}
A.czV.prototype={
$1(d){return d},
$S:30}
A.czW.prototype={
$1(d){return d},
$S:30}
A.czX.prototype={
$1(d){return d},
$S:30}
A.b1f.prototype={
$2(d,e){return d+e.a.b},
$S:z+2}
A.b2O.prototype={
$1(d){return d.w},
$S:z+0}
A.b2P.prototype={
$1(d){return!d.w},
$S:z+0}
A.b2L.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
A.b2M.prototype={
$0(){return this.a.c_(0,this.b)},
$S:2}
A.b2N.prototype={
$1(d){return d.a===this.a},
$S:z+0}
A.bGR.prototype={
$0(){return this.a.y=!0},
$S:0}
A.bGS.prototype={
$0(){return this.a.y=!1},
$S:0}
A.bH8.prototype={
$0(){return this.a.gT().a1(0,$.Hr().gaV(),y.x).Z_(0).eD(new A.bH7())},
$S:2}
A.bH7.prototype={
$1(d){},
$S:14}
A.bGQ.prototype={
$1(d){return D.chK},
$S:z+6}
A.bGX.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
A.bGY.prototype={
$1(d){return d.x!==C.eY&&d.b===this.a},
$S:73}
A.bH6.prototype={
$2(d,e){return B.j8(d,this.a.lc(e))},
$1(d){return this.$2(d,null)},
$S:1286}
A.bGZ.prototype={
$2(d,e){return d+e.f},
$S:z+7}
A.bH_.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
A.bH0.prototype={
$0(){return this.a.Ip(this.b.a)},
$S:0}
A.bH1.prototype={
$0(){var x=this.a
return x.q(new A.bGW(x))},
$S:0}
A.bGW.prototype={
$0(){return this.a.w=D.Iy},
$S:0}
A.bH2.prototype={
$0(){var x=this.a
return x.q(new A.bGV(x))},
$S:0}
A.bGV.prototype={
$0(){return this.a.w=D.ab2},
$S:0}
A.bH3.prototype={
$0(){var x=this.a
return x.q(new A.bGU(x))},
$S:0}
A.bGU.prototype={
$0(){return this.a.w=D.ab1},
$S:0}
A.bH4.prototype={
$0(){var x=this.a
return x.q(new A.bGT(x))},
$S:0}
A.bGT.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
A.bH5.prototype={
$0(){return A.Ca(this.a.gT().a1(0,$.cm(),y.v).b.a)},
$S:z+9}
A.cwF.prototype={
$1(d){var x=null,w=this.b
return new B.eO(B.i(this.a,x,x,x,x,x,x,x,x),B.cM(x,C.aa,!0,x,!0,C.z,x,B.cQ(),w,x,x,x,x,x,2,D.aE7,C.a3,!0,x,!0,x,!1,x,C.aK,x,x,x,x,C.iV,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.au,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.as,x,C.b8,x,x,x,x),B.a([B.cr(C.cK,x,x,new A.cwD(d),x,x),B.bM(C.dt,new A.cwE(d,w),x)],y.p),x)},
$S:18}
A.cwD.prototype={
$0(){return B.as(this.a,!1).bJ()},
$S:0}
A.cwE.prototype={
$0(){var x=B.as(this.a,!1),w=C.f.D(this.b.a.a)
w=B.b_(w," ","")
return x.ak(B.fi(B.b_(w,",",".")))},
$S:0}
A.cwO.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=B.bF(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?B.bF(2100,1,1,0,0):x)},
$S:z+1}
A.bJg.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
A.bJi.prototype={
$0(){return B.ck(null,new A.bJj(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
A.bJj.prototype={
$1(d){return new A.Wj(this.a.e.a,null)},
$S:z+10}
A.bJh.prototype={
$0(){return A.aj9(this.b,this.c,this.a.e.a.a,0)},
$S:0}
A.bGg.prototype={
$0(){var x=this.a
B.as(x,!1).bJ()
B.aj(x).az("/bookings",null,y.X)},
$S:0}
A.bGf.prototype={
$3(d,e,f){return B.l0(B.b3(C.ho,this.a,null,null,null),C.u,!0)},
$S:127}
A.bSl.prototype={
$1(d){var x,w,v=null
this.a.a1(0,$.akA().gaV(),y.h).On(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a4(B.cz(v,v,v,v,v,C.z,v,B.i(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.W,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
A.bSh.prototype={
$0(){var x=this
return B.rp(x.a,x.b,C.f.bD(x.c.a,x.d+5),null,null)},
$S:0}
A.bSi.prototype={
$0(){return B.aj(this.a).az("/bookings",null,y.X)},
$S:0}
A.bSj.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bSk.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bE0.prototype={
$1(d){var x=this.a
return x.q(new A.bE_(x,d))},
$S:266}
A.bE_.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.bE1.prototype={
$1(d){var x=this.a
return x.q(new A.bDZ(x,d))},
$S:101}
A.bDZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.bE2.prototype={
$0(){var x,w=this.a,v=C.f.D(w.e.a.a),u=B.fi(B.b_(v,",","."))
w.q(new A.bDY(w,u))
if(w.w!=null||w.x!=null)return
v=B.as(this.b,!1)
x=C.f.D(w.d.a.a)
u.toString
v.ak(new A.aAp(x,u,w.f,w.r))},
$S:0}
A.bDY.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A despesa precisa de um t\xedtulo":null
x.x=this.b==null?"Indica um valor v\xe1lido":null},
$S:0}
A.bJk.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+12}
A.bJl.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
A.bJm.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=B.bF(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?B.bF(2100,1,1,0,0):x)},
$S:z+1}
A.bJn.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:35}
A.bJo.prototype={
$1(d){return C.e.n(this.a,d.a)},
$S:z+13}
A.bJp.prototype={
$0(){var x=this.c
return A.aj9(this.a,this.b,x.a,x.d)},
$S:0}
A.bJq.prototype={
$1(d){return this.a.a1(0,$.akA().gaV(),y.h).On(this.b.a)},
$S:134}
A.bEZ.prototype={
$1(d){return d.c},
$S:146}
A.bF4.prototype={
$2(d,e){return B.j8(d,this.a.lc(e))},
$S:62}
A.bF1.prototype={
$0(){return D.bK1},
$S:84}
A.bF0.prototype={
$2(d,e){return B.RL(B.a([new B.ij("Tentar outra vez",new A.bES(this.a),!1,null)],y.p),C.ff,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1288}
A.bES.prototype={
$0(){return this.a.ah($.cU0())},
$S:0}
A.bF_.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new A.bF2(g),e=new A.bF3(g,this.b),d=J.c9(a4),a0=d.dc(a4,0,new A.bET()),a1=d.dc(a4,0,new A.bEU(f)),a2=d.dc(a4,0,new A.bEV(e)),a3=y.N
a3=B.A(a3,a3)
for(x=J.at(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.BQ(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bD(s,1))}x=B.aP(a1,!1)
w=a0>0
v=w?"de "+B.aP(a0,!1):"gastos"
u=w?C.k.aj(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aI(a1/a0*100)+"% dos tetos":""
x=B.v2(i,""+t+" "+r+w,"Todos os eventos",C.ht,u,v,x)
v=y.p
u=B.a([new G.RM(B.a([new G.x1("Gasto",B.aP(a1,!1),h),new G.x1("Por pagar",B.aP(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=B.a([],v)
for(t=B.eE(a4,0,y.A),r=J.at(t.a),q=t.b,t=new B.c7(r,q,B.u(t).i("c7<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new B.a4(q+n,r.gE(r)):B.ai(B.c1())
o.a=null
m=n.b
o.a=m
l=B.a([],v)
if(n.a>0)l.push(C.jj)
n=a3.h(0,m.a[0])
n=B.i(n==null?"Evento":n,1,C.a0,i,i,C.ap,i,i,i)
k=o.a.a[2]
k=B.a([k>0?"Teto "+B.aP(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+B.aP(j[3]+e.$1(j[0]),!1))}n=B.B(B.a([n,C.be,B.i(C.e.a3(k," \xb7 "),i,i,i,i,C.Z,i,i,i)],v),C.I,C.j,C.o,0,C.v)
k=o.a.a
l.push(new B.hH(B.C(i,B.R(B.a([new B.bT(1,C.ay,n,i),C.av,B.i(B.aP(k[1]+f.$1(k[0]),!1),i,i,i,i,C.ap,i,i,i),C.bs,C.lz],v),C.x,C.j,C.o,0,i,i),C.r,C.al,C.e0,i,i,i,i,C.cu,i,i,i),new A.bEW(o,g),i,i))
C.e.p(w,l)}return B.B(B.a([x,new B.dM("N\xfameros",i,u,16,i),new B.dM("Por evento \xb7 "+d,i,w,16,i),D.azY],v),C.J,C.j,C.o,0,C.v)},
$S:1289}
A.bF2.prototype={
$1(d){return J.d7(this.a.e,new A.bEQ(d)).dc(0,0,new A.bER())},
$S:156}
A.bEQ.prototype={
$1(d){return d.b===this.a&&d.x!==C.eY},
$S:73}
A.bER.prototype={
$2(d,e){return d+e.w},
$S:453}
A.bF3.prototype={
$1(d){return J.d7(this.a.e,new A.bEX(d)).dc(0,0,new A.bEY(this.b))},
$S:156}
A.bEX.prototype={
$1(d){return d.b===this.a&&d.x!==C.eY},
$S:73}
A.bEY.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:453}
A.bET.prototype={
$2(d,e){return d+e.a[2]},
$S:190}
A.bEU.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:190}
A.bEV.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:190}
A.bEW.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
A.aWq.prototype={
$0(){return B.aj(this.a).az("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(A,"dAi","cR5",14)
w(A,"dAh","dhG",15)
v(A.Dm.prototype,"giF","d1",3)
var t
u(t=A.aaB.prototype,"gaoI","Ta",4)
v(t,"gaQA","Q_",5)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.czY,A.czU,A.czV,A.czW,A.czX,A.b2O,A.b2P,A.b2L,A.b2N,A.bH7,A.bGQ,A.bGX,A.bGY,A.bH6,A.bH_,A.cwF,A.bJg,A.bJj,A.bGf,A.bSl,A.bE0,A.bE1,A.bJk,A.bJl,A.bJn,A.bJo,A.bJq,A.bEZ,A.bF_,A.bF2,A.bEQ,A.bF3,A.bEX])
x(B.L,[A.Dd,A.b1e,A.zE,A.LM,A.a6D,A.aAp])
x(B.cS,[A.b1f,A.bGZ,A.cwO,A.bJm,A.bF4,A.bF0,A.bER,A.bEY,A.bET,A.bEU,A.bEV])
w(A.Dm,B.f6)
x(B.bR,[A.b2M,A.bGR,A.bGS,A.bH8,A.bH0,A.bH1,A.bGW,A.bH2,A.bGV,A.bH3,A.bGU,A.bH4,A.bGT,A.bH5,A.cwD,A.cwE,A.bJi,A.bJh,A.bGg,A.bSh,A.bSi,A.bSj,A.bSk,A.bE_,A.bDZ,A.bE2,A.bDY,A.bJp,A.bF1,A.bES,A.bEW,A.aWq])
w(A.aaA,B.fx)
w(A.a_O,B.dD)
w(A.aaB,B.dv)
x(B.K,[A.aNI,A.aBL,A.aBk,A.WH,A.agw,A.alX])
x(B.eo,[A.aBM,A.aEs,A.Wj,A.aAv])
w(A.Nc,B.I)
w(A.aAq,B.a1)})()
B.bu(b.typeUniverse,JSON.parse('{"Dm":{"f6":["zE"]},"a_O":{"I":[],"e":[],"f":[]},"Nc":{"I":[],"e":[],"f":[]},"Wj":{"I":[],"e":[],"f":[]},"aaB":{"a1":["a_O"]},"aNI":{"K":[],"e":[],"f":[]},"aBL":{"K":[],"e":[],"f":[]},"aBM":{"I":[],"e":[],"f":[]},"aBk":{"K":[],"e":[],"f":[]},"aEs":{"I":[],"e":[],"f":[]},"WH":{"K":[],"e":[],"f":[]},"aAq":{"a1":["Nc"]},"agw":{"K":[],"e":[],"f":[]},"aAv":{"I":[],"e":[],"f":[]},"alX":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{l:x("ax<f3>"),k:x("ax<r<rB>>"),u:x("ax<r<fV>>"),o:x("ax<r<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>>"),y:x("ax<a5<c,r<c>>>"),x:x("ze"),b:x("uB"),d:x("rG"),Z:x("p2"),v:x("e8"),_:x("i_"),h:x("Dm"),g:x("zE"),D:x("t<Dd>"),r:x("t<i_>"),Q:x("t<x1>"),F:x("t<ef>"),Y:x("t<a5<c,@>>"),n:x("t<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>"),E:x("t<a6D>"),c:x("t<LM>"),s:x("t<c>"),p:x("t<e>"),R:x("r<fV>"),t:x("r<fp>"),G:x("r<a5<c,@>>"),m:x("r<+eventId,spentByHand,total,unpaidByHand(c,P,P,P)>"),P:x("a5<c,@>"),w:x("dx"),A:x("+eventId,spentByHand,total,unpaidByHand(c,P,P,P)"),e:x("lF"),N:x("c"),B:x("aAp"),q:x("dA"),i:x("P"),z:x("@"),S:x("v"),X:x("L?"),T:x("c?"),I:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aeG=new B.aM(0,1/0,32,1/0)
D.atr=new B.a0(8,5,6,5)
D.bxF=x([],y.r)
D.ayY=new A.zE(!1,D.bxF)
D.azW=new B.kF("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.azY=new B.kF("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aA6=new B.kF("Sem pagamentos nesta vista.",8,null)
D.aE7=new B.dU(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aFW=new B.ep("Pago",C.d7,null)
D.aG2=new B.ep("Por pagar",C.hr,null)
D.aG9=new B.lZ("Or\xe7amento","Todos os teus eventos",null)
D.aGf=new B.lZ("Or\xe7amento",null,null)
D.bwX=x(["catering"],y.s)
D.bxW=x([],y.D)
D.bxX=x([],y.n)
D.byq=x(["flowers_decor"],y.s)
D.bzX=x(["music_dj","bands_musicians"],y.s)
D.bAu=x(["photography"],y.s)
D.bBI=x(["venue"],y.s)
D.aDq=new B.qx("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kt,null)
D.bJo=new B.Q(C.is,D.aDq,null)
D.bK1=new B.Q(P.ur,C.dV,null)
D.c1w=new B.M(!0,C.A,null,null,null,null,14,C.cT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3F=new B.M(!0,null,null,null,null,null,null,C.cT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.chK=new A.Nc(null)
D.Iy=new A.aaA(0,"all")
D.ab1=new A.aaA(1,"paid")
D.ab2=new A.aaA(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dNh","cU0",()=>C.bS.$1$1(new A.czY(),y.m))
x($,"dO6","akA",()=>B.mI(A.dAh(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["L4dwtjRWMvom46SbiQriEA13Vj0="]=a.current})($__dart_deferred_initializers__);