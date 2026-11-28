((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,N,O,P,Q,E,R,S,F,G,T,H,K,U,I,V,A={czB:function czB(){},czx:function czx(){},czy:function czy(){},czz:function czz(){},czA:function czA(){},
dz9(d,e){var x,w,v,u=B.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.G)(x),++v)u.push(new A.D9(x[v]))
return new A.b1_(d.b,u)},
D9:function D9(d){this.a=d},
b1_:function b1_(d,e){this.a=d
this.b=e},
b10:function b10(){},
cQJ(d){var x="category",w="due_date",v=J.a7(d),u=B.a_(v.h(d,"id")),t=B.a_(v.h(d,"wedding_id")),s=B.a_(v.h(d,"title")),r=A.dvu(A.d57(B.J(v.h(d,x)))),q=A.d57(B.J(v.h(d,x))),p=B.dp(v.h(d,"amount")),o=v.h(d,w)==null?null:B.d8(B.a_(v.h(d,w)))
v=B.e6(v.h(d,"paid"))
return new H.i_(u,t,s,r,q,p,o,v===!0)},
d57(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dvu(d){var x
A:{if("venue"===d){x=E.xx
break A}if("catering"===d){x=E.xt
break A}if("photography"===d){x=E.xu
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xv
break A}if("flowers_decor"===d){x=E.xw
break A}x=null
break A}return x},
dhg(){return new A.Dg()},
zB:function zB(d,e){this.a=d
this.b=e},
b2p:function b2p(){},
b2q:function b2q(){},
Dg:function Dg(){this.b=this.x=null},
b2m:function b2m(){},
b2n:function b2n(d,e){this.a=d
this.b=e},
b2o:function b2o(d){this.a=d},
C6(d){var x=0,w=B.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$C6=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:x=3
return B.d(F.aj5(),$async$C6)
case 3:u=$.T()
t=u.b
t===$&&B.b()
x=4
return B.d(t.P("events").aw(0,"partner_name_1, partner_name_2").W("id",d).dz(),$async$C6)
case 4:s=f
x=5
return B.d(u.b.P("bookings").aw(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("wedding_id",d).dk(0,"event_date",!1),$async$C6)
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
return B.d(t.P("payments").aw(0,"booking_id, type, status, amount, paid_at, due_at, provider").eO("booking_id",u).tF(0,"created_at"),$async$C6)
case 9:q=f
case 7:u=$.T()
t=u.b
t===$&&B.b()
x=10
return B.d(t.P("expenses").aw(0,"title, category, amount, due_date, paid").W("wedding_id",d).tF(0,"due_date"),$async$C6)
case 10:p=f
x=11
return B.d(u.b.P("budget_categories").aw(0,"name, amount").W("wedding_id",d).tF(0,"position"),$async$C6)
case 11:o=f
x=12
return B.d(u.b.P("budgets").aw(0,"total").W("wedding_id",d).dz(),$async$C6)
case 12:n=f
m=F.cQv(F.cwT(s),"Gastos e parceiros",r,q,!1)
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
else{g=B.ei(B.q(g))
g=g==null?null:g.eH()}u.push(new A.LI(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=B.a([],y.E)
for(l=J.at(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cN(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=B.fi(B.q(k))
if(k==null)k=0}t.push(new A.a6u(i,k))}l=n==null?null:F.cR1(J.h(n,"total"))
v=new F.lF(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$C6,w)},
LI:function LI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6u:function a6u(d,e){this.a=d
this.b=e},
deG(){return new A.a_F(null)},
aRK(d,e,f){var x=0,w=B.n(y.I),v,u,t
var $async$aRK=B.j(function(g,h){if(g===1)return B.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a7(f,0)
x=3
return B.d(B.fT(!0,new A.cwi(e,new B.aI(new B.bD(u,C.aJ,C.aA),$.ad())),d,y.i),$async$aRK)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aRK,w)},
aiZ(d,e,f,g){return A.dvh(d,e,f,g)},
dvh(d,e,f,g){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q
var $async$aiZ=B.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return B.d(A.aRK(d,"Teto para "+f,g),$async$aiZ)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return B.d(e.a1(0,$.Hn().gaV(),y.x).Oq(f,r),$async$aiZ)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a4(I.H9)
x=7
break
case 4:x=2
break
case 7:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$aiZ,w)},
d3g(d){var x=B.W(d,y._)
C.e.cO(x,new A.cwr())
return x},
d3K(d){var x=C.f.aZ(C.i.k(B.aN(d)),2,"0"),w=C.f.aZ(C.i.k(B.ay(d)),2,"0"),v=B.aG(d)===B.aG(new B.af(Date.now(),0,!1))?"":"/"+B.aG(d)
return x+"/"+w+v},
aap:function aap(d,e){this.a=d
this.b=e},
a_F:function a_F(d){this.a=d},
aaq:function aaq(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bGA:function bGA(d){this.a=d},
bGB:function bGB(d){this.a=d},
bGS:function bGS(d){this.a=d},
bGR:function bGR(){},
bGz:function bGz(){},
bGG:function bGG(){},
bGH:function bGH(d){this.a=d},
bGQ:function bGQ(d){this.a=d},
bGI:function bGI(){},
bGJ:function bGJ(){},
bGK:function bGK(d,e){this.a=d
this.b=e},
bGL:function bGL(d){this.a=d},
bGF:function bGF(d){this.a=d},
bGM:function bGM(d){this.a=d},
bGE:function bGE(d){this.a=d},
bGN:function bGN(d){this.a=d},
bGD:function bGD(d){this.a=d},
bGO:function bGO(d){this.a=d},
bGC:function bGC(d){this.a=d},
bGP:function bGP(d){this.a=d},
cwi:function cwi(d,e){this.a=d
this.b=e},
cwg:function cwg(d){this.a=d},
cwh:function cwh(d,e){this.a=d
this.b=e},
cwr:function cwr(){},
aNs:function aNs(d,e,f){this.c=d
this.d=e
this.a=f},
aBw:function aBw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBx:function aBx(d,e){this.e=d
this.a=e},
bJ_:function bJ_(){},
bJ1:function bJ1(d,e){this.a=d
this.b=e},
bJ2:function bJ2(d){this.a=d},
bJ0:function bJ0(d,e,f){this.a=d
this.b=e
this.c=f},
aB5:function aB5(d,e){this.c=d
this.a=e},
bG_:function bG_(d){this.a=d},
bFZ:function bFZ(d){this.a=d},
aEc:function aEc(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bRD:function bRD(d,e){this.a=d
this.b=e},
bRz:function bRz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRA:function bRA(d){this.a=d},
bRB:function bRB(d,e){this.a=d
this.b=e},
bRC:function bRC(d,e){this.a=d
this.b=e},
Ww:function Ww(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aA9:function aA9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
N7:function N7(d){this.a=d},
aAa:function aAa(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.x=_.w=_.r=_.f=null},
bDK:function bDK(d){this.a=d},
bDJ:function bDJ(d,e){this.a=d
this.b=e},
bDL:function bDL(d){this.a=d},
bDI:function bDI(d,e){this.a=d
this.b=e},
bDM:function bDM(d,e){this.a=d
this.b=e},
bDH:function bDH(d,e){this.a=d
this.b=e},
W8:function W8(d,e){this.e=d
this.a=e},
bJ3:function bJ3(d){this.a=d},
bJ4:function bJ4(d){this.a=d},
bJ5:function bJ5(){},
bJ6:function bJ6(){},
bJ7:function bJ7(d){this.a=d},
bJ8:function bJ8(d,e,f){this.a=d
this.b=e
this.c=f},
bJ9:function bJ9(d,e){this.a=d
this.b=e},
agk:function agk(d,e,f){this.c=d
this.d=e
this.a=f},
aAg:function aAg(d,e,f){this.e=d
this.f=e
this.a=f},
bEI:function bEI(){},
bEO:function bEO(d){this.a=d},
bEL:function bEL(){},
bEK:function bEK(d){this.a=d},
bEB:function bEB(d){this.a=d},
bEJ:function bEJ(d,e,f){this.a=d
this.b=e
this.c=f},
bEM:function bEM(d){this.a=d},
bEz:function bEz(d){this.a=d},
bEA:function bEA(){},
bEN:function bEN(d,e){this.a=d
this.b=e},
bEG:function bEG(d){this.a=d},
bEH:function bEH(d){this.a=d},
bEC:function bEC(){},
bED:function bED(d){this.a=d},
bEE:function bEE(d){this.a=d},
bEF:function bEF(d,e){this.a=d
this.b=e},
alM:function alM(d,e){this.c=d
this.a=e},
aWb:function aWb(d){this.a=d},
d80(d){var x
switch(d){case E.xx:x=D.bBn
break
case E.xt:x=D.bwE
break
case E.xu:x=D.bAb
break
case E.xv:x=D.bzE
break
case E.xw:x=D.by8
break
default:x=C.a9
break}return x}},D,L,M
J=c[1]
B=c[0]
C=c[2]
N=c[192]
O=c[206]
P=c[207]
Q=c[175]
E=c[208]
R=c[151]
S=c[205]
F=c[125]
G=c[74]
T=c[126]
H=c[76]
K=c[204]
U=c[123]
I=c[203]
V=c[75]
A=a.updateHolder(c[51],A)
D=c[202]
L=c[70]
M=c[169]
A.D9.prototype={
gar(d){return this.a.a}}
A.b1_.prototype={
gpU(){return C.e.dc(this.b,0,new A.b10())},
gaB2(){var x=this.a
return x===0?0:C.k.aj(this.gpU()/x,0,1)}}
A.zB.prototype={
gby3(){var x=this.b,w=B.a8(x).i("a3<1>")
x=B.W(new B.a3(x,new A.b2p(),w),w.i("y.E"))
return x},
gbyp(d){var x=this.b,w=B.a8(x).i("a3<1>")
x=B.W(new B.a3(x,new A.b2q(),w),w.i("y.E"))
return x},
aw9(d,e){var x=e==null?this.a:e
return new A.zB(x,d==null?this.b:d)},
il(d){return this.aw9(null,d)},
avR(d){return this.aw9(d,null)}}
A.Dg.prototype={
d1(){var x=y.T,w=this.x=B.eK(this).G(B.cw($.cm(),new A.b2m(),y.B,x),x)
if(w!=null)B.jd(new A.b2n(this,w),y.H)
return D.ayN},
c_(d,e){return this.bvt(0,e)},
bvt(d,e){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$c_=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:v.sa2(0,v.ga2(0).il(!0))
u=$.T().b
u===$&&B.b()
t=A
s=!1
r=J
x=2
return B.d(u.P("expenses").cj(0).W("wedding_id",e).dk(0,"created_at",!0),$async$c_)
case 2:v.sa2(0,new t.zB(s,r.d3(g,A.dzV(),y._).by(0)))
return B.l(null,w)}})
return B.m($async$c_,w)},
US(d){return this.blq(d)},
blq(d){var x=0,w=B.n(y.H),v=this,u,t,s,r
var $async$US=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:r=$.T().b
r===$&&B.b()
r=r.P("expenses")
u=d.e
if(u==null){u=d.d
u=u==null?null:u.b}t=d.r
t=t==null?null:C.e.gM(t.cg().split("T"))
x=2
return B.d(r.dd(0,B.R(["wedding_id",d.b,"title",d.c,"category",u,"amount",d.f,"due_date",t],y.N,y.X)).cj(0).dN(0),$async$US)
case 2:s=f
t=v.ga2(0)
r=B.W(v.ga2(0).b,y._)
r.push(A.cQJ(s))
v.sa2(0,t.avR(r))
return B.l(null,w)}})
return B.m($async$US,w)},
On(d){return this.bAX(d)},
bAX(d){var x=0,w=B.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$On=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:n=C.e.lg(v.ga2(0).b,new A.b2o(d))
m=$.T().b
m===$&&B.b()
u=y.z
l=A
x=2
return B.d(m.P("expenses").bg(0,B.R(["paid",!n.w,"updated_at",new B.af(Date.now(),0,!1).cg()],u,u)).W("id",d).cj(0).dN(0),$async$On)
case 2:t=l.cQJ(f)
u=v.ga2(0)
m=B.a([],y.r)
for(s=v.ga2(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,B.G)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa2(0,u.avR(m))
return B.l(null,w)}})
return B.m($async$On,w)}}
A.LI.prototype={}
A.a6u.prototype={
gar(d){return this.a}}
A.aap.prototype={
I(){return"_BudgetFilter."+this.b}}
A.a_F.prototype={
R(){return new A.aaq(D.Iu)}}
A.aaq.prototype={
Ta(d){return this.bbn(d)},
bbn(d){var x=0,w=B.n(y.H),v,u=this,t,s,r
var $async$Ta=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.q(new A.bGA(u))
x=1
break}u.q(new A.bGB(u))
t=u.gT()
s=$.cm()
r=t.a1(0,s,y.B).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return B.d(t.a1(0,s.gaV(),y.O).aw(0,d),$async$Ta)
case 5:case 4:case 1:return B.l(v,w)}})
return B.m($async$Ta,w)},
am(){this.aJ()
B.jd(new A.bGS(this),y.H)},
Q_(){var x=0,w=B.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Q_=B.j(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:r=u.gT()
q=$.akp()
p=y.h
o=r.a1(0,q.gaV(),p).x
if(o==null){x=1
break}t=u.c
t.toString
x=3
return B.d(B.ck(null,new A.bGz(),!1,t,!0,!0,null,y.n),$async$Q_)
case 3:s=e
if(s==null){x=1
break}r=r.a1(0,q.gaV(),p)
q=s.a
p=s.b
t=s.c
r.US(new H.i_("",o,q,null,s.d,p,t,!1))
case 1:return B.l(v,w)}})
return B.m($async$Q_,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gT(),a2=a1.G($.Hn(),y.b),a3=a1.G($.Ho(),y.d),a4=a1.G($.akp(),y.g),a5=a2.b,a6=a5==null?e:A.dz9(a5,a3.b)
a5=B.iU(a1.G($.jt(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iD
a5=y.T
w=a1.G(B.cw($.cm(),new A.bGG(),y.B,a5),a5)
if(f.y){a1=f.gaoF()
return B.cP(e,C.cO,B.ob(C.f4,40,B.a([C.fN,D.aFX,L.cNf(a1,e),new A.aAg(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.d7(x,new A.bGH(w))
a1=a1.G($.uk(),y.l)
u=a1.gv(a1)
t=new A.bGQ(u==null?C.f0:u)
a1=y._
a5=B.W(a4.gby3(),a1)
for(s=v.a,r=J.c9(s),q=r.gV(s),p=v.b,o=v.$ti.i("hr<1>"),n=new B.hr(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i_("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=B.W(a4.gbyp(0),a1)
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
n.push(new H.i_("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.p(q,n)}switch(f.w.a){case 0:a1=B.W(A.d3g(q),a1)
C.e.p(a1,a5)
break
case 1:a1=a5
break
case 2:a1=A.d3g(q)
break
default:a1=e}h=C.e.dc(q,0,new A.bGI())
s=a6==null
if(s)g=D.bxE
else{r=a6.b
p=B.a8(r).i("a3<1>")
g=B.W(new B.a3(r,new A.bGJ(),p),p.i("y.E"))}if(s)a1=C.br
else{s=f.gaQy()
r=y.p
p=B.a([new B.p9(B.a([new B.qy(s,"Nova despesa",e)],r),e),D.aG2,L.cNf(f.gaoF(),w),new A.aNs(a6,new A.bGK(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=B.aP(a6.gpU(),!1)
n=a5.length
m=n===1?d:a0
l=B.aP(h,!1)
k=q.length
j=k===1?d:a0
p.push(new B.dM("N\xfameros",e,B.a([new G.RF(B.a([new G.wY("Gasto",o,""+n+" "+m),new G.wY("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=B.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.p(o,B.a([new Q.lY(B.a([new B.ee("Todos",l===D.Iu,n+m,new A.bGL(f),e),new B.ee("Pendentes",l===D.aaV,m,new A.bGM(f),e),new B.ee("Pagos",l===D.aaU,n,new A.bGN(f),e)],y.G),4,!0,e),C.ar],r))}o.push(new A.aEc(a1,s,a5.length===0&&q.length===0,e))
p.push(new B.dM("Pagamentos",e,o,16,e))
a1=B.a([new B.l0(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new A.aBw(g,f.x,new A.bGO(f),e))
p.push(new B.dM("Categorias",e,a1,16,e))
p.push(new B.dM("Exportar",e,B.a([new F.Dh("Gastos e parceiros",!1,new A.bGP(f),e)],r),16,e))
a1=B.ob(C.f4,40,p,e,!0,!1)}return B.cP(e,C.cO,a1,!0,e)},
Ip(d){return this.aXl(d)},
aXl(d){var x=0,w=B.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Ip=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return B.d(A.aRK(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Ip)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return B.d(s.gT().a1(0,$.Hn().gaV(),y.x).ZH(r),$async$Ip)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a4(I.H9)
x=7
break
case 4:x=2
break
case 7:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Ip,w)}}
A.aNs.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpU()>0?"Gastos "+B.aP(t.gpU(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return B.uZ(new B.ij("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hs,0,"por definir","\u2014")}x=C.k.aI(t.gaB2()*100)
w=s-t.gpU()<0?"Acima do teto":"Ainda tens"
v=B.aP(Math.abs(s-t.gpU()),!1)
s=B.aP(s,!1)
u=t.gaB2()
return B.aT(B.uZ(I.a11,"Gastos "+B.aP(t.gpU(),!1)+" \xb7 "+x+"% do teto",w,C.hs,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
A.aBw.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:B.dY(s,0,B.eP(5,"count",y.S),B.a8(s).c).by(0),q=y.p,p=B.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,B.G)(r),++w)p.push(new A.aBx(r[w],null))
q=B.a([B.f4(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new B.ij(u,v.e,!0,null))}return B.C(q,C.J,C.j,C.p,0,C.v)}}
A.aBx.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(B.cw($.cm(),new A.bJ_(),y.B,m),m)
if(l==null)x=C.r_
else{m=e.G($.cTF().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r_:m}m=B.a([],y.s)
for(w=A.d80(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.p(m,s)}w=n===0
r=w?0:o.b/n
v=new A.bJ1(this,d)
if(w)return B.jP(!1,!1,p,v,B.aP(o.b,!1)+" gastos \xb7 sem teto",o.a,new B.o6("P\xf4r teto",new A.bJ0(this,d,e),!0,p))
w=B.aP(o.b,!1)
u=B.aP(n,!1)
s=y.p
q=B.a([B.aO(new B.Sy(r,6,p),p,92)],s)
if(m.length!==0)C.e.p(q,B.a([C.aF,new A.alM(m,p)],s))
return B.jP(!1,!1,p,v,w+" de "+u,o.a,B.C(q,C.dy,C.j,C.P,0,C.v))}}
A.aB5.prototype={
u(d){var x,w,v=null,u=$.ap,t=$.fb.ci(0.55),s=B.a2(18),r=B.a2(12),q=this.c,p=q.e
r=B.hh(r,B.aO(p==null?B.kZ(B.b3(C.hn,u,v,v,v),C.u,!0):B.qv(p,144,new A.bFZ(u),!1,C.bL,!1,v,v,v),48,48),C.b4)
p=B.i(q.b,1,C.a_,v,v,D.c0I,v,v,v)
x=B.b3(C.hT,u,v,v,14)
w=q.d
q=w>0?q.gPA()+" \xb7 "+B.aP(w,!1):q.gPA()
w=y.p
return new B.S(C.cR,B.aT(B.B(v,B.Q(B.a([r,C.ag,B.a6(B.C(B.a([p,C.fV,B.Q(B.a([x,C.eQ,new B.dK(1,C.bh,B.i(q,1,C.a_,v,v,B.aH(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bf,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.x,C.j,C.p,0,v,v)],w),C.I,C.j,C.p,0,C.v),1),B.b3(C.hV,u,v,v,v)],w),C.x,C.j,C.p,0,v,v),C.r,v,v,new B.O(t,v,v,s,v,v,C.y),v,v,v,C.dI,v,v,v),new A.bG_(d),v),v)}}
A.aEc.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?B.RE(B.a([new B.ij("+ Nova despesa",this.f,!0,j)],y.p),C.fd,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.azW
x=new A.bRD(e,d)
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
l=m==null?"":" \xb7 at\xe9 "+A.d3K(m)
v.push(new U.Ds(new B.cA(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new A.bRz(d,e,s,q),B.Hi(m)===C.h6,j))
continue}p=r?new A.bRA(d):new A.bRB(x,s)
v.push(new A.Ww(s,p,r||s.w?j:new A.bRC(x,s),j))}i=B.a([],w)
for(k=0;k<v.length;++k){u=B.a([],w)
if(k>0&&v[k] instanceof A.Ww&&v[k-1] instanceof A.Ww)u.push(C.ji)
u.push(v[k])
C.e.p(i,u)}i.push(D.azL)
return B.C(i,C.J,C.j,C.p,0,C.v)}}
A.Ww.prototype={
u(d){var x=this.c,w=x.r,v=B.a([B.aP(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+A.d3K(w))
v=C.e.a3(v," \xb7 ")
if(u)u=D.aFJ
else{u=this.e
u=u!=null?new B.o6("Marcar pago",u,!0,null):D.aFQ}return B.jP(!1,!1,null,this.d,v,x.c,u)}}
A.aA9.prototype={}
A.N7.prototype={
R(){var x=$.ad()
return new A.aAa(new B.aI(C.ao,x),new B.aI(C.ao,x))}}
A.aAa.prototype={
m(){var x=this.d,w=$.ad()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a8()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.e3(B.C(B.a([B.i("Adicionar despesa",w,w,w,w,B.aq(d).ok.r,w,w,w),C.a4,new M.jK("Despesa",x.d,x.w,w,w,w),C.R,new M.jK("Valor (\u20ac)",x.e,x.x,C.cD,w,w),C.R,T.cMV("Prazo (opcional)",new A.bDK(x),x.f),C.aB,new V.a0f(x.r,new A.bDL(x),w),C.a4,new B.fD("Guardar",new A.bDM(x,d),!1,w)],y.p),C.J,C.j,C.P,0,C.v),C.z,w,new B.a0(20,20,20,v.f.d+20),w,C.a3)}}
A.W8.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.Hn(),y.b).b
if(j==null)x=k
else{j=j.c
j=B.eS(new B.a3(j,new A.bJ3(l),B.a8(j).i("a3<1>")))
x=j}if(x==null)x=l.e
j=e.G($.akp(),y.g).b
w=B.a8(j).i("a3<1>")
v=B.W(new B.a3(j,new A.bJ4(l),w),w.i("y.E"))
C.e.cO(v,new A.bJ5())
j=y.T
u=e.G(B.cw($.cm(),new A.bJ6(),y.B,j),j)
t=A.d80(l.e.c)
if(u==null)s=K.EK
else{j=e.G($.aTv().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.EK
j=J.d7(j,new A.bJ7(t))
s=B.W(j,j.$ti.i("y.E"))}j=B.aw(d,k,y.w).w
w=B.bT(B.B(k,k,C.r,k,k,new B.O(C.bs,k,k,B.a2(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=B.i(x.a,k,k,k,k,B.aq(d).ok.r,k,k,k)
q=B.a6(new A.agk("Gasto",B.aP(x.b,!1),k),1)
p=x.d
o=y.p
p=B.a([w,C.a4,r,C.aB,B.Q(B.a([q,C.au,B.a6(B.aT(new A.agk("Teto \xb7 tocar para mudar",p===0?"Definir":B.aP(p,!1),k),new A.bJ8(d,e,x),k),1)],o),C.x,C.j,C.p,0,k,k)],o)
if(s.length!==0){w=B.a([C.bk,B.i("Contratado na app",k,k,k,k,B.aq(d).ok.w,k,k,k),C.Z],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,B.G)(s),++n)w.push(new A.aB5(s[n],k))
C.e.p(p,w)}p.push(C.bk)
p.push(B.i("Despesas",k,k,k,k,B.aq(d).ok.w,k,k,k))
p.push(C.Z)
w=v.length
if(w===0)p.push(D.bJ0)
else for(n=0;n<v.length;v.length===w||(0,B.G)(v),++n){m=v[n]
r=B.i(m.c,k,k,k,k,C.h_,k,k,k)
q=m.r
q=q==null?k:B.i("At\xe9 "+C.f.aZ(C.i.k(B.aN(q)),2,"0")+"/"+C.f.aZ(C.i.k(B.ay(q)),2,"0")+"/"+B.aG(q),k,k,k,k,k,k,k,k)
p.push(B.iZ(!1,C.a0,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,B.Q(B.a([B.i(B.aP(m.f,!1),k,k,k,k,D.c2R,k,k,k),C.al,new R.CN(m.w,new A.bJ9(e,m),k,$.ap,k,k,!1,k,k,k,k,!1,k,k,!1,k,S.Iw,k)],o),C.x,C.j,C.P,0,k,k),k))}return B.bH(!0,new B.ev(new B.aM(0,1/0,0,j.a.b*0.8),B.d5(p,k,N.Cl,k,k,!1,C.a3,!0),k),k,C.a0,!0)}}
A.agk.prototype={
u(d){var x=null,w=B.a2(16)
return B.B(x,B.C(B.a([B.i(this.c,x,x,x,x,C.b9,x,x,x),C.ar,B.i(this.d,x,x,x,x,O.a9g,x,x,x)],y.p),C.I,C.j,C.p,0,C.v),C.r,x,x,new B.O(C.aa,x,x,w,x,x,C.y),x,x,x,C.cX,x,x,x)}}
A.aAg.prototype={
bc(d,e){var x,w=y.t,v=e.G(B.cw($.cm(),new A.bEI(),y.B,w),w),u=e.G($.cTE(),y.F)
w=e.G($.uk(),y.l)
x=w.gv(w)
return B.h3(u,new A.bEJ(this,new A.bEO(x==null?C.f0:x),v),new A.bEK(e),new A.bEL(),!1,!0,!1)}}
A.alM.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.ap,n=y.p,m=B.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.G)(x),++v){u=x[v]
t=$.fb
s=new B.b5(999,999)
r=new B.bb(o.ci(0.25),1,C.ae,-1)
q=B.b3(C.hT,o,p,p,13)
t=B.B(p,B.Q(B.a([q,C.yl,new B.dK(1,C.bh,B.i(u,1,C.a_,p,p,new B.M(!0,o,p,p,p,p,14,C.cS,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),B.b3(C.hV,o,p,p,16)],n),C.x,C.j,C.P,0,p,p),C.r,p,D.aey,new B.O(t,p,new B.dW(r,r,r,r),new B.ce(s,s,s,s),p,p,C.y),p,p,p,D.atk,p,p,p)
m.push(new B.kL(new B.r_(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a8,p,p,p,p),!1,!1,p,!1,!1,new B.hH(t,new A.aWb(d),p,p),p))}return B.em(C.be,m,C.r,C.bm,6,6)}}
var z=a.updateTypes(["z(i_)","v(i_,i_)","P(P,D9)","zB()","F<~>(c?)","F<~>()","N7(N)","P(P,i_)","z(D9)","F<lF>()","W8(N)","~(i_)","z(nb)","z(ry)","i_(a5<c,@>)","Dg()"])
A.czB.prototype={
$1(d){return this.aEe(d)},
aEe(a1){var x=0,w=B.n(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=B.j(function(a2,a3){if(a2===1)return B.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.G(B.cw($.cm(),new A.czx(),y.B,f),f)
f=J.a7(e)
if(f.gY(e)){v=D.bxF
x=1
break}u=B.a([],y.s)
for(t=f.gV(e);t.t();)u.push(t.gE(t).a)
t=$.T()
s=t.b
s===$&&B.b()
r=y.J
q=s.P("budgets").aw(0,"wedding_id, total").eO("wedding_id",u).b7(new A.czy(),r)
p=t.b.P("budget_categories").aw(0,"wedding_id, amount").eO("wedding_id",u).b7(new A.czz(),r)
o=t.b.P("expenses").aw(0,"wedding_id, amount, paid").eO("wedding_id",u).b7(new A.czA(),r)
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
case 11:u=B.a([],y.M)
for(f=f.gV(e);f.t();){s=f.gE(f)
r=s.a
n=t.h(0,r)
s=n==null?s.as:n
if(s==null)s=0
n=j.h(0,r)
if(n==null)n=0
m=g.h(0,r)
u.push(new B.aKL([n,s,m==null?0:m,r]))}v=u
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1283}
A.czx.prototype={
$1(d){return d.c},
$S:119}
A.czy.prototype={
$1(d){return d},
$S:30}
A.czz.prototype={
$1(d){return d},
$S:30}
A.czA.prototype={
$1(d){return d},
$S:30}
A.b10.prototype={
$2(d,e){return d+e.a.b},
$S:z+2}
A.b2p.prototype={
$1(d){return d.w},
$S:z+0}
A.b2q.prototype={
$1(d){return!d.w},
$S:z+0}
A.b2m.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:34}
A.b2n.prototype={
$0(){return this.a.c_(0,this.b)},
$S:2}
A.b2o.prototype={
$1(d){return d.a===this.a},
$S:z+0}
A.bGA.prototype={
$0(){return this.a.y=!0},
$S:0}
A.bGB.prototype={
$0(){return this.a.y=!1},
$S:0}
A.bGS.prototype={
$0(){return this.a.gT().a1(0,$.Hn().gaV(),y.x).Z_(0).eD(new A.bGR())},
$S:2}
A.bGR.prototype={
$1(d){},
$S:14}
A.bGz.prototype={
$1(d){return D.cgY},
$S:z+6}
A.bGG.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:34}
A.bGH.prototype={
$1(d){return d.x!==C.eX&&d.b===this.a},
$S:72}
A.bGQ.prototype={
$2(d,e){return B.j8(d,this.a.lc(e))},
$1(d){return this.$2(d,null)},
$S:1286}
A.bGI.prototype={
$2(d,e){return d+e.f},
$S:z+7}
A.bGJ.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
A.bGK.prototype={
$0(){return this.a.Ip(this.b.a)},
$S:0}
A.bGL.prototype={
$0(){var x=this.a
return x.q(new A.bGF(x))},
$S:0}
A.bGF.prototype={
$0(){return this.a.w=D.Iu},
$S:0}
A.bGM.prototype={
$0(){var x=this.a
return x.q(new A.bGE(x))},
$S:0}
A.bGE.prototype={
$0(){return this.a.w=D.aaV},
$S:0}
A.bGN.prototype={
$0(){var x=this.a
return x.q(new A.bGD(x))},
$S:0}
A.bGD.prototype={
$0(){return this.a.w=D.aaU},
$S:0}
A.bGO.prototype={
$0(){var x=this.a
return x.q(new A.bGC(x))},
$S:0}
A.bGC.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
A.bGP.prototype={
$0(){return A.C6(this.a.gT().a1(0,$.cm(),y.B).b.a)},
$S:z+9}
A.cwi.prototype={
$1(d){var x=null,w=this.b
return new B.eO(B.i(this.a,x,x,x,x,x,x,x,x),B.cM(x,C.a9,!0,x,!0,C.z,x,B.cQ(),w,x,x,x,x,x,2,D.aDV,C.a2,!0,x,!0,x,!1,x,C.aK,x,x,x,x,C.iU,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.ax,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.as,x,C.b8,x,x,x,x),B.a([B.cr(C.cK,x,x,new A.cwg(d),x,x),B.bM(C.dt,new A.cwh(d,w),x)],y.p),x)},
$S:18}
A.cwg.prototype={
$0(){return B.as(this.a,!1).bJ()},
$S:0}
A.cwh.prototype={
$0(){var x=B.as(this.a,!1),w=C.f.D(this.b.a.a)
w=B.b_(w," ","")
return x.ak(B.fi(B.b_(w,",",".")))},
$S:0}
A.cwr.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=B.bF(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?B.bF(2100,1,1,0,0):x)},
$S:z+1}
A.bJ_.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:34}
A.bJ1.prototype={
$0(){return B.ck(null,new A.bJ2(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
A.bJ2.prototype={
$1(d){return new A.W8(this.a.e.a,null)},
$S:z+10}
A.bJ0.prototype={
$0(){return A.aiZ(this.b,this.c,this.a.e.a.a,0)},
$S:0}
A.bG_.prototype={
$0(){var x=this.a
B.as(x,!1).bJ()
B.aj(x).az("/bookings",null,y.X)},
$S:0}
A.bFZ.prototype={
$3(d,e,f){return B.kZ(B.b3(C.hn,this.a,null,null,null),C.u,!0)},
$S:120}
A.bRD.prototype={
$1(d){var x,w,v=null
this.a.a1(0,$.akp().gaV(),y.h).On(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a4(B.cz(v,v,v,v,v,C.z,v,B.i(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.W,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
A.bRz.prototype={
$0(){var x=this
return B.rm(x.a,x.b,C.f.bD(x.c.a,x.d+5),null,null)},
$S:0}
A.bRA.prototype={
$0(){return B.aj(this.a).az("/bookings",null,y.X)},
$S:0}
A.bRB.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bRC.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bDK.prototype={
$1(d){var x=this.a
return x.q(new A.bDJ(x,d))},
$S:226}
A.bDJ.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.bDL.prototype={
$1(d){var x=this.a
return x.q(new A.bDI(x,d))},
$S:101}
A.bDI.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.bDM.prototype={
$0(){var x,w=this.a,v=C.f.D(w.e.a.a),u=B.fi(B.b_(v,",","."))
w.q(new A.bDH(w,u))
if(w.w!=null||w.x!=null)return
v=B.as(this.b,!1)
x=C.f.D(w.d.a.a)
u.toString
v.ak(new A.aA9(x,u,w.f,w.r))},
$S:0}
A.bDH.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A despesa precisa de um t\xedtulo":null
x.x=this.b==null?"Indica um valor v\xe1lido":null},
$S:0}
A.bJ3.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+12}
A.bJ4.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
A.bJ5.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=B.bF(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?B.bF(2100,1,1,0,0):x)},
$S:z+1}
A.bJ6.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:34}
A.bJ7.prototype={
$1(d){return C.e.n(this.a,d.a)},
$S:z+13}
A.bJ8.prototype={
$0(){var x=this.c
return A.aiZ(this.a,this.b,x.a,x.d)},
$S:0}
A.bJ9.prototype={
$1(d){return this.a.a1(0,$.akp().gaV(),y.h).On(this.b.a)},
$S:124}
A.bEI.prototype={
$1(d){return d.c},
$S:119}
A.bEO.prototype={
$2(d,e){return B.j8(d,this.a.lc(e))},
$S:62}
A.bEL.prototype={
$0(){return D.bJn},
$S:84}
A.bEK.prototype={
$2(d,e){return B.RE(B.a([new B.ij("Tentar outra vez",new A.bEB(this.a),!1,null)],y.p),C.fd,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1288}
A.bEB.prototype={
$0(){return this.a.ah($.cTE())},
$S:0}
A.bEJ.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new A.bEM(g),e=new A.bEN(g,this.b),d=J.c9(a4),a0=d.dc(a4,0,new A.bEC()),a1=d.dc(a4,0,new A.bED(f)),a2=d.dc(a4,0,new A.bEE(e)),a3=y.N
a3=B.A(a3,a3)
for(x=J.at(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.BP(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bD(s,1))}x=B.aP(a1,!1)
w=a0>0
v=w?"de "+B.aP(a0,!1):"gastos"
u=w?C.k.aj(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aI(a1/a0*100)+"% dos tetos":""
x=B.uZ(i,""+t+" "+r+w,"Todos os eventos",C.hs,u,v,x)
v=y.p
u=B.a([new G.RF(B.a([new G.wY("Gasto",B.aP(a1,!1),h),new G.wY("Por pagar",B.aP(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=B.a([],v)
for(t=B.eE(a4,0,y.f),r=J.at(t.a),q=t.b,t=new B.c6(r,q,B.u(t).i("c6<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new B.a4(q+n,r.gE(r)):B.ai(B.c1())
o.a=null
m=n.b
o.a=m
l=B.a([],v)
if(n.a>0)l.push(C.ji)
n=a3.h(0,m.a[3])
n=B.i(n==null?"Evento":n,1,C.a_,i,i,C.aq,i,i,i)
k=o.a.a[1]
k=B.a([k>0?"Teto "+B.aP(k,!1):"Sem teto"],p)
j=o.a.a
if(j[2]+e.$1(j[3])>0){j=o.a.a
k.push("por pagar "+B.aP(j[2]+e.$1(j[3]),!1))}n=B.C(B.a([n,C.bd,B.i(C.e.a3(k," \xb7 "),i,i,i,i,C.Y,i,i,i)],v),C.I,C.j,C.p,0,C.v)
k=o.a.a
l.push(new B.hH(B.B(i,B.Q(B.a([new B.bV(1,C.ay,n,i),C.au,B.i(B.aP(k[0]+f.$1(k[3]),!1),i,i,i,i,C.aq,i,i,i),C.bt,C.lw],v),C.x,C.j,C.p,0,i,i),C.r,C.ak,C.dZ,i,i,i,i,C.cC,i,i,i),new A.bEF(o,g),i,i))
C.e.p(w,l)}return B.C(B.a([x,new B.dM("N\xfameros",i,u,16,i),new B.dM("Por evento \xb7 "+d,i,w,16,i),D.azN],v),C.J,C.j,C.p,0,C.v)},
$S:1289}
A.bEM.prototype={
$1(d){return J.d7(this.a.e,new A.bEz(d)).dc(0,0,new A.bEA())},
$S:158}
A.bEz.prototype={
$1(d){return d.b===this.a&&d.x!==C.eX},
$S:72}
A.bEA.prototype={
$2(d,e){return d+e.w},
$S:491}
A.bEN.prototype={
$1(d){return J.d7(this.a.e,new A.bEG(d)).dc(0,0,new A.bEH(this.b))},
$S:158}
A.bEG.prototype={
$1(d){return d.b===this.a&&d.x!==C.eX},
$S:72}
A.bEH.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:491}
A.bEC.prototype={
$2(d,e){return d+e.a[1]},
$S:225}
A.bED.prototype={
$2(d,e){var x=e.a
return d+x[0]+this.a.$1(x[3])},
$S:225}
A.bEE.prototype={
$2(d,e){var x=e.a
return d+x[2]+this.a.$1(x[3])},
$S:225}
A.bEF.prototype={
$0(){return this.b.f.$1(this.a.a.a[3])},
$S:0}
A.aWb.prototype={
$0(){return B.aj(this.a).az("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(A,"dzV","cQJ",14)
w(A,"dzU","dhg",15)
v(A.Dg.prototype,"giF","d1",3)
var t
u(t=A.aaq.prototype,"gaoF","Ta",4)
v(t,"gaQy","Q_",5)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.czB,A.czx,A.czy,A.czz,A.czA,A.b2p,A.b2q,A.b2m,A.b2o,A.bGR,A.bGz,A.bGG,A.bGH,A.bGQ,A.bGJ,A.cwi,A.bJ_,A.bJ2,A.bFZ,A.bRD,A.bDK,A.bDL,A.bJ3,A.bJ4,A.bJ6,A.bJ7,A.bJ9,A.bEI,A.bEJ,A.bEM,A.bEz,A.bEN,A.bEG])
x(B.L,[A.D9,A.b1_,A.zB,A.LI,A.a6u,A.aA9])
x(B.cS,[A.b10,A.bGI,A.cwr,A.bJ5,A.bEO,A.bEK,A.bEA,A.bEH,A.bEC,A.bED,A.bEE])
w(A.Dg,B.f5)
x(B.bR,[A.b2n,A.bGA,A.bGB,A.bGS,A.bGK,A.bGL,A.bGF,A.bGM,A.bGE,A.bGN,A.bGD,A.bGO,A.bGC,A.bGP,A.cwg,A.cwh,A.bJ1,A.bJ0,A.bG_,A.bRz,A.bRA,A.bRB,A.bRC,A.bDJ,A.bDI,A.bDM,A.bDH,A.bJ8,A.bEL,A.bEB,A.bEF,A.aWb])
w(A.aap,B.fx)
w(A.a_F,B.dD)
w(A.aaq,B.dv)
x(B.K,[A.aNs,A.aBw,A.aB5,A.Ww,A.agk,A.alM])
x(B.eo,[A.aBx,A.aEc,A.W8,A.aAg])
w(A.N7,B.I)
w(A.aAa,B.a1)})()
B.bw(b.typeUniverse,JSON.parse('{"Dg":{"f5":["zB"]},"a_F":{"I":[],"e":[],"f":[]},"N7":{"I":[],"e":[],"f":[]},"W8":{"I":[],"e":[],"f":[]},"aaq":{"a1":["a_F"]},"aNs":{"K":[],"e":[],"f":[]},"aBw":{"K":[],"e":[],"f":[]},"aBx":{"I":[],"e":[],"f":[]},"aB5":{"K":[],"e":[],"f":[]},"aEc":{"I":[],"e":[],"f":[]},"Ww":{"K":[],"e":[],"f":[]},"aAa":{"a1":["N7"]},"agk":{"K":[],"e":[],"f":[]},"aAg":{"I":[],"e":[],"f":[]},"alM":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.x
return{l:x("ax<f2>"),k:x("ax<r<ry>>"),u:x("ax<r<fV>>"),F:x("ax<r<+spentByHand,total,unpaidByHand,weddingId(P,P,P,c)>>"),y:x("ax<a5<c,r<c>>>"),x:x("zb"),b:x("ux"),d:x("rD"),_:x("i_"),h:x("Dg"),g:x("zB"),D:x("t<D9>"),r:x("t<i_>"),Q:x("t<wY>"),G:x("t<ee>"),Y:x("t<a5<c,@>>"),M:x("t<+spentByHand,total,unpaidByHand,weddingId(P,P,P,c)>"),E:x("t<a6u>"),c:x("t<LI>"),s:x("t<c>"),p:x("t<e>"),R:x("r<fV>"),J:x("r<a5<c,@>>"),K:x("r<+spentByHand,total,unpaidByHand,weddingId(P,P,P,c)>"),t:x("r<fw>"),P:x("a5<c,@>"),w:x("dx"),f:x("+spentByHand,total,unpaidByHand,weddingId(P,P,P,c)"),e:x("lF"),N:x("c"),O:x("pH"),B:x("ea"),n:x("aA9"),q:x("dA"),i:x("P"),z:x("@"),S:x("v"),X:x("L?"),T:x("c?"),I:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aey=new B.aM(0,1/0,32,1/0)
D.atk=new B.a0(8,5,6,5)
D.bxn=x([],y.r)
D.ayN=new A.zB(!1,D.bxn)
D.azL=new B.l0("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.azN=new B.l0("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.azW=new B.l0("Sem pagamentos nesta vista.",8,null)
D.aDV=new B.dS(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aFJ=new B.ep("Pago",C.d7,null)
D.aFQ=new B.ep("Por pagar",C.hq,null)
D.aFX=new B.lZ("Or\xe7amento","Todos os teus eventos",null)
D.aG2=new B.lZ("Or\xe7amento",null,null)
D.bwE=x(["catering"],y.s)
D.bxE=x([],y.D)
D.bxF=x([],y.M)
D.by8=x(["flowers_decor"],y.s)
D.bzE=x(["music_dj","bands_musicians"],y.s)
D.bAb=x(["photography"],y.s)
D.bBn=x(["venue"],y.s)
D.aDd=new B.qw("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.ks,null)
D.bJ0=new B.S(C.ir,D.aDd,null)
D.bJn=new B.S(P.ur,C.br,null)
D.c0I=new B.M(!0,C.A,null,null,null,null,14,C.cS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c2R=new B.M(!0,null,null,null,null,null,null,C.cS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cgY=new A.N7(null)
D.Iu=new A.aap(0,"all")
D.aaU=new A.aap(1,"paid")
D.aaV=new A.aap(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dMT","cTE",()=>C.bT.$1$1(new A.czB(),y.K))
x($,"dNC","akp",()=>B.mI(A.dzU(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["kDWUsW0sSr9D4Z8Nj9fdMAjngrU="]=a.current})($__dart_deferred_initializers__);