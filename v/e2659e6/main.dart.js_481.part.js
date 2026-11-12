((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,O,P,Q,R,S,T,U,H,V,I,K,F,W,E,X,Y,Z,G,A_,A0,A1,A2,A3,A4,A5,A6,A7,A8,L,C={
ddi(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v)u.push(new C.GN(x[v]))
return new C.aVE(d.b,u)},
GN:function GN(d){this.a=d},
aVE:function aVE(d,e){this.a=d
this.b=e},
aVF:function aVF(){},
Ao(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ao=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(E.afh(),$async$Ao)
case 3:u=$.Z()
t=u.b
t===$&&A.b()
x=4
return A.d(t.S("weddings").aP(0,"partner_name_1, partner_name_2").a0("id",d).em(),$async$Ao)
case 4:s=f
x=5
return A.d(u.b.S("bookings").aP(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), weddings(partner_name_1, partner_name_2, location), proposals(title)").a0("wedding_id",d).dI(0,"event_date",!1),$async$Ao)
case 5:r=f
u=A.a([],y.s)
for(t=J.aE(r);t.p();)u.push(A.a1(J.h(t.gF(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.t)
x=7
break
case 8:t=$.Z().b
t===$&&A.b()
x=9
return A.d(t.S("payments").aP(0,"booking_id, type, status, amount, paid_at, due_at, provider").fC("booking_id",u).x6(0,"created_at"),$async$Ao)
case 9:q=f
case 7:u=$.Z()
t=u.b
t===$&&A.b()
x=10
return A.d(t.S("expenses").aP(0,"title, category, amount, due_date, paid").a0("wedding_id",d).x6(0,"due_date"),$async$Ao)
case 10:p=f
x=11
return A.d(u.b.S("budget_categories").aP(0,"name, amount").a0("wedding_id",d).x6(0,"position"),$async$Ao)
case 11:o=f
x=12
return A.d(u.b.S("budgets").aP(0,"total").a0("wedding_id",d).em(),$async$Ao)
case 12:n=f
m=E.cy6(E.cgk(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.v)
for(t=J.aE(p);t.p();){l=t.gF(t)
k=J.a3(l)
j=k.h(l,"title")
j=J.cJ(j==null?"":j)
i=k.h(l,"category")
i=J.cJ(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.fE(A.u(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.h_(A.u(g))
g=g==null?null:g.fq()}u.push(new C.JG(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.aE(o);l.p();){k=l.gF(l)
j=J.a3(k)
i=j.h(k,"name")
i=J.cJ(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.fE(A.u(k))
if(k==null)k=0}t.push(new C.a34(i,k))}l=n==null?null:E.cyz(J.h(n,"total"))
v=new E.l0(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Ao,w)},
JG:function JG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a34:function a34(d,e){this.a=d
this.b=e},
cV3(){return new C.Xv(null)},
cL6(d){var x=A.Y(d,y._)
B.e.d4(x,new C.cfU())
return x},
T8:function T8(d,e){this.a=d
this.b=e},
Xv:function Xv(d){this.a=d},
a6W:function a6W(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
byd:function byd(d){this.a=d},
byc:function byc(){},
by4:function by4(){},
by7:function by7(){},
byb:function byb(d){this.a=d},
by8:function by8(d){this.a=d},
by6:function by6(d){this.a=d},
by9:function by9(d){this.a=d},
bya:function bya(d){this.a=d},
by5:function by5(d,e){this.a=d
this.b=e},
cfU:function cfU(){},
adv:function adv(d,e){this.c=d
this.a=e},
cd8:function cd8(){},
aHX:function aHX(d,e){this.c=d
this.a=e},
awq:function awq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aws:function aws(d,e,f){this.e=d
this.f=e
this.a=f},
bAm:function bAm(){},
bAn:function bAn(d,e){this.a=d
this.b=e},
bAl:function bAl(d){this.a=d},
avY:function avY(d,e){this.c=d
this.a=e},
bxg:function bxg(d){this.a=d},
bxf:function bxf(d){this.a=d},
TF:function TF(d,e){this.e=d
this.a=e},
bH8:function bH8(d,e,f){this.a=d
this.b=e
this.c=f},
az2:function az2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
av8:function av8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KX:function KX(d){this.a=d},
av9:function av9(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.x=_.w=_.r=_.f=null},
bvM:function bvM(d){this.a=d},
bvL:function bvL(d,e){this.a=d
this.b=e},
bvN:function bvN(d){this.a=d},
bvK:function bvK(d,e){this.a=d
this.b=e},
bvO:function bvO(d,e){this.a=d
this.b=e},
bvJ:function bvJ(d,e){this.a=d
this.b=e},
Te:function Te(d,e){this.e=d
this.a=e},
bAq:function bAq(d,e){this.a=d
this.b=e},
bAo:function bAo(d){this.a=d},
bAp:function bAp(d,e){this.a=d
this.b=e},
bAr:function bAr(d){this.a=d},
bAs:function bAs(d){this.a=d},
bAt:function bAt(){},
bAu:function bAu(){},
bAv:function bAv(d){this.a=d},
bAw:function bAw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bAx:function bAx(d,e){this.a=d
this.b=e},
acE:function acE(d,e,f){this.c=d
this.d=e
this.a=f},
cOJ(d){var x
switch(d){case F.wF:x=D.buD
break
case F.wB:x=D.bpW
break
case F.wC:x=D.btt
break
case F.wD:x=D.bsV
break
case F.wE:x=D.brl
break
default:x=B.a9
break}return x},
cNN(d){switch(d.a){case 1:return B.en
case 0:return B.cA
case 2:return A2.ep
case 3:return B.bg
case 4:return B.fx}}},D,A9,M,N
J=c[1]
A=c[0]
B=c[2]
O=c[224]
P=c[162]
Q=c[214]
R=c[172]
S=c[219]
T=c[221]
U=c[223]
H=c[204]
V=c[165]
I=c[222]
K=c[157]
F=c[225]
W=c[190]
E=c[123]
X=c[70]
Y=c[213]
Z=c[171]
G=c[73]
A_=c[217]
A0=c[212]
A1=c[124]
A2=c[193]
A3=c[142]
A4=c[143]
A5=c[215]
A6=c[216]
A7=c[72]
A8=c[71]
L=c[220]
C=a.updateHolder(c[48],C)
D=c[211]
A9=c[218]
M=c[183]
N=c[178]
C.GN.prototype={
gaF(d){return this.a.a}}
C.aVE.prototype={
gy0(){return B.e.dS(this.b,0,new C.aVF())},
gax3(){var x=this.a
return x===0?0:B.k.ar(this.gy0()/x,0,1)}}
C.JG.prototype={}
C.a34.prototype={
gaF(d){return this.a}}
C.T8.prototype={
H(){return"_BudgetFilter."+this.b}}
C.Xv.prototype={
R(){return new C.a6W(D.a8L)}}
C.a6W.prototype={
ak(){this.aG()
A.iE(new C.byd(this),y.H)},
O9(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$O9=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=u.gV()
q=$.Wu()
p=y.h
o=r.a2(0,q.gaZ(),p).x
if(o==null){x=1
break}t=u.c
t.toString
x=3
return A.d(A.cd(null,new C.by4(),t,!0,!0,null,y.n),$async$O9)
case 3:s=e
if(s==null){x=1
break}r=r.a2(0,q.gaZ(),p)
q=s.a
p=s.b
t=s.c
r.SB(new G.hd("",o,q,null,s.d,p,t,!1))
case 1:return A.l(v,w)}})
return A.m($async$O9,w)},
u(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gV(),g=h.M($.Wt(),y.b),f=h.M($.N4(),y.d),e=h.M($.Wu(),y.g),d=g.b,a0=d==null?i:C.ddi(d,f.b)
d=A.ii(h.M($.lO(),y.r),y.R)
x=d==null?i:d.b.a
if(x==null)x=A0.pB
w=J.dL(x,new C.by7())
h=h.M($.Az(),y.l)
v=h.gq(h)
u=new C.byb(v==null?W.fY:v)
h=y._
d=A.Y(e.gbrg(),h)
for(t=w.a,s=J.cv(t),r=s.gW(t),q=w.b,p=w.$ti.i("fp<1>"),o=new A.fp(r,q,p);o.p();){n=r.gF(r)
m=n.ay
if(m>0)d.push(new G.hd("booking:"+n.a+":paid",n.b,"Pago \xb7 "+n.c,i,i,u.$2(m,n.w),i,!0))}h=A.Y(e.gawJ(0),h)
for(t=s.gW(t),p=new A.fp(t,q,p),q=y.u;p.p();){s=t.gF(t)
r=A.a([],q)
o=s.y
if(o!=null){n=s.a
m=s.b
l=s.c
k=s.z
if(k==null)k=0
r.push(new G.hd("booking:"+n+":pay:"+o,m,"Sinal \xb7 "+l,i,i,u.$2(k,s.w),s.Q,!1))}o=s.as
if(o!=null){n=s.a
m=s.b
l=s.c
k=s.at
if(k==null)k=0
r.push(new G.hd("booking:"+n+":pay:"+o,m,"Restante \xb7 "+l,i,i,u.$2(k,s.w),i,!1))}B.e.A(h,r)}if(a0==null)h=B.bk
else{t=B.V.B(0,new A.X(0,A.at(a1,B.bb,y.w).w.r.b,0,0))
s=A.k7(!0,!0,i,"Or\xe7amento",34,20,new Z.qz(j.gaLw(),!1,i))
r=y.p
q=A.a([new C.aHX(a0,i)],r)
p=j.w
if(p===D.a8M)B.e.A(q,A.a([new A.i9("Pagas",new C.adv(d,i),i),new C.TF(d,i)],r))
else if(p===D.a8N)B.e.A(q,A.a([new A.i9("Pendentes",new C.adv(h,i),i),new C.TF(C.cL6(h),i)],r))
else B.e.A(q,A.a([B.cM,new C.awq(a0.b,j.x,new C.by8(j),i),D.bJX,new C.TF(C.cL6(h),i),Y.a4v,new E.Bw("Gastos e parceiros",!1,new C.by9(j),i)],r))
h=new A.bC(B.aC,i,B.aD,B.C,A.a([A.bn(!1,new A.tr(A.cL(A.a([s,new A.a_(new A.X(20,16,20,120),A.I(q,B.I,B.m,B.q,0,B.w),i)],r),i,t,i,i,!1,B.Y,!1),8,32,i),i,B.V,!1),A.cb(0,new A3.BC(D.aTo,B.e.dl(D.Tp,j.w),new C.bya(j),i),i,i,0,0,i,i)],r),i)}return A.cF(i,B.f1,h,!0,i)}}
C.adv.prototype={
u(d){var x=null
return A.i(A.by(B.e.dS(this.c,0,new C.cd8()),!1),x,x,x,A.as(x,x,$.a5,x,x,x,x,x,x,x,x,14,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)}}
C.aHX.prototype={
u(d){var x,w,v=null,u=this.c,t=B.k.aN(u.gax3()*100),s=u.a,r=s-u.gy0()<0,q=r?"ACIMA DO OR\xc7AMENTO":"AINDA TENS",p=A.by(Math.abs(s-u.gy0()),!1)
s=A.by(s,!1)
x=u.gax3()
u=A.ac(A.i("Gasto "+A.by(u.gy0(),!1),v,v,v,Q.xL,v,v,v),1)
w=""+t
return A.ll(D.btp,A.W(A.a([u,new A.hv(r?w+"% \xb7 acima do or\xe7amento":w+"% \xb7 dentro do or\xe7amento",!0,v)],y.p),B.x,B.m,B.q,0,v,v),q,x,"de "+s,p)}}
C.awq.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q||s.c.length<=5,o=s.c,n=p?o:A.hm(o,0,A.jg(5,"count",y.S),A.a6(o).c).bB(0),m=y.p,l=A.a([D.c3b,B.Z],m)
for(x=A.hf(n,0,y.C),w=J.aE(x.a),v=x.b,x=new A.cY(w,v,A.r(x).i("cY<1>"));x.p();){u=x.c
u=u>=0?new A.ag(v+u,w.gF(w)):A.aj(A.cl())
t=u.a
u=A.a([new C.aws(u.b,t,r)],m)
if(t!==n.length-1)u.push(B.a5)
B.e.A(l,u)}x=o.length
if(x>5){x=q?"Ver menos":"Ver todas as categorias ("+x+")"
x=A.i(x,r,r,r,A.as(r,r,$.a5,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q?A5.MD:A6.Cm
B.e.A(l,A.a([B.a5,A.b_(A.W(A.a([x,A.aJ(q,$.a5,r,r,18)],m),B.x,B.m,B.q,0,r,r),s.e,r)],m))}return A.I(l,B.I,B.m,B.q,0,B.w)}}
C.aws.prototype={
bf(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=this.e.a,m=n.d,l=y.T,k=e.M(A.cA($.cC(),new C.bAm(),y.B,l),l)
if(k==null)x=B.n8
else{l=e.M($.cB0().$1(k),y.y)
l=l.gq(l)
x=l==null?B.n8:l}l=A.a([],y.s)
for(w=n.c,v=C.cOJ(w),u=v.length,t=J.a3(x),s=0;s<u;++s){r=t.h(x,v[s])
if(r!=null)B.e.A(l,r)}q=m===0?0:n.b/m
p=w==null?B.iU:C.cNN(w)
w=N.ie(o,22,1)
v=B.fa[B.i.aj(this.f,4)]
u=y.p
n=A.a([A.W(A.a([A.ac(A.i(n.a,1,B.a2,o,B.fJ,o,o,o),1),B.an,A.i(A.by(n.b,!1)+" de "+A.by(m,!1),o,o,o,B.ay,o,o,o)],u),B.x,B.m,B.q,0,o,o)],u)
if(l.length!==0)B.e.A(n,A.a([B.aF,new A.dP(B.c1,o,o,new A8.Xi(l,o),o)],u))
n.push(B.a4)
l=A.T(999)
t=q>1?1:q
r=q>0.85?B.ch:$.a5
n.push(A.eu(l,A.kV(D.aiL,o,6,t,new A.on(r,y.c)),B.aH))
return A.b_(A.E(o,A.W(A.a([new A.hl(p,v,40,o,o),B.ar,A.ac(A.I(n,B.I,B.m,B.q,0,B.w),1)],u),B.x,B.m,B.q,0,o,o),B.t,o,o,w,o,o,o,o,B.b8,o,o,o),new C.bAn(this,d),o)}}
C.avY.prototype={
u(d){var x,w,v=null,u=$.a5,t=$.e1.bW(0.55),s=A.T(18),r=A.T(12),q=this.c,p=q.e
r=A.eu(r,A.aT(p==null?A.nr(A.aJ(B.cA,u,v,v,v),B.v,!0):A.ym(p,144,new C.bxf(u),!1,B.bZ,!1,v,v,v),48,48),B.aH)
p=A.i(q.b,1,B.a2,v,A_.a74,v,v,v)
x=A.aJ(B.dy,u,v,v,14)
w=q.d
q=w>0?q.gNJ()+" \xb7 "+A.by(w,!1):q.gNJ()
w=y.p
return new A.a_(B.kM,A.b_(A.E(v,A.W(A.a([r,B.ar,A.ac(A.I(A.a([p,B.dA,A.W(A.a([x,B.ds,new A.eo(1,B.bM,A.i(q,1,B.a2,v,A.as(v,v,u,v,v,v,v,v,v,v,v,13,v,v,B.bf,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),B.x,B.m,B.q,0,v,v)],w),B.I,B.m,B.q,0,B.w),1),A.aJ(B.h3,u,v,v,v)],w),B.x,B.m,B.q,0,v,v),B.t,v,v,new A.K(t,v,v,s,v,v,B.y),v,v,v,v,B.cY,v,v,v),new C.bxg(d),v),v)}}
C.TF.prototype={
bf(d,e){var x,w,v,u,t,s,r,q=this.e
if(q.length===0)return new A.a_(A9.KV,A.I(A.a([D.bPq,B.aq,D.bXe,B.aK,D.c1s],y.p),B.x,B.m,B.q,0,B.w),null)
x=y.p
w=A.a([],x)
for(q=A.hf(q,0,y._),v=J.aE(q.a),u=q.b,q=new A.cY(v,u,A.r(q).i("cY<1>"));q.p();){t={}
s=q.c
s=s>=0?new A.ag(u+s,v.gF(v)):A.aj(A.cl())
t.a=null
r=s.b
t.a=r
B.e.A(w,A.a([new C.az2(r,new C.bH8(t,d,e),s.a,null),B.a5],x))}return A.I(w,B.x,B.m,B.q,0,B.w)}}
C.az2.prototype={
u(d){var x,w,v,u,t,s,r,q=null,p=this.c,o=p.r,n=p.e
if(n!=null)x=P.afG(n)
else{n=p.d
x=n==null?B.iU:C.cNN(n)}n=p.w
w=!n&&o!=null&&B.i.aT(o.df(new A.an(Date.now(),0,!1)).a,864e8)<=30
v=w?new A.K(H.rL,q,q,A.T(20),B.ap,q,B.y):N.ie(q,20,1)
u=this.e
if(o!=null){u=B.fa[B.i.aj(u,4)]
u=new X.Yq(o,u,w?B.e0:$.a5,q)}else u=new A.hl(x,B.fa[B.i.aj(u,4)],44,q,q)
t=A.i(p.c,1,B.a2,q,B.fJ,q,q,q)
if(B.f.be(p.a,"booking:"))s=n?"Reserva \xb7 pago na app":"Reserva \xb7 toca para pagar"
else s=n?"Paga \xb7 toca para desfazer":"Pendente \xb7 toca para marcar como paga"
r=y.p
s=A.ac(A.I(A.a([t,B.bc,A.i(s,1,B.a2,q,B.ay,q,q,q)],r),B.I,B.m,B.q,0,B.w),1)
p=A.a([A.i(A.by(p.f,!1),q,q,q,B.fJ,q,q,q)],r)
if(n){n=$.a5.bW(0.14)
t=A.T(999)
B.e.A(p,A.a([B.aK,A.E(q,A.i("PAGO",q,q,q,A.as(q,q,$.a5,q,q,q,q,q,q,q,q,10,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.t,q,q,new A.K(n,q,q,t,q,q,B.y),q,q,q,q,S.tw,q,q,q)],r))}return A.b_(A.E(q,A.W(A.a([u,B.ar,s,B.an,A.I(p,B.dG,B.m,B.q,0,B.w)],r),B.x,B.m,B.q,0,q,q),B.t,q,q,v,q,q,q,q,B.b8,q,q,q),this.d,q)}}
C.av8.prototype={}
C.KX.prototype={
R(){var x=$.ah()
return new C.av9(new A.aM(B.aj,x),new A.aM(B.aj,x))}}
C.av9.prototype={
m(){var x=this.d,w=$.ah()
x.Z$=w
x.U$=0
x=this.e
x.Z$=w
x.U$=0
this.a9()},
u(d){var x=this,w=null,v=A.at(d,w,y.w).w
return A.ez(A.I(A.a([A.i("Adicionar despesa",w,w,w,A.ak(d).ok.r,w,w,w),B.ai,new M.fM("Despesa",x.d,x.w,w,w,w),B.Z,new M.fM("Valor (\u20ac)",x.e,x.x,B.cS,w,w),B.Z,A4.aTi(!1,"Prazo (opcional)",new C.bvM(x),x.f),B.aq,new A7.Y3(x.r,new C.bvN(x),w),B.ai,new A.f7("Guardar",new C.bvO(x,d),!1,w)],y.p),B.T,B.m,B.a_,0,B.w),new A.X(20,20,20,v.f.d+20),w,B.Y)}}
C.Te.prototype={
GO(d,e,f){return this.aRD(d,e,f)},
aRD(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$GO=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:q=f===0?"":B.k.a8(f,0)
x=3
return A.d(A.cd(null,new C.bAq(s,new A.aM(new A.bR(q,B.aY,B.aI),$.ah())),d,!0,!1,null,y.i),$async$GO)
case 3:p=h
if(p==null||p<0){x=1
break}u=5
x=8
return A.d(e.a2(0,$.Wt().gaZ(),y.x).MB(s.e.a,p),$async$GO)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
if(d.e!=null)d.T(y.q).f.ah(D.bO9)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GO,w)},
bf(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.M($.Wt(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.iq(new A.a4(j,new C.bAr(l),A.a6(j).i("a4<1>")))
x=j}if(x==null)x=l.e
j=e.M($.Wu(),y.g).b
w=A.a6(j).i("a4<1>")
v=A.Y(new A.a4(j,new C.bAs(l),w),w.i("y.E"))
B.e.d4(v,new C.bAt())
j=y.T
u=e.M(A.cA($.cC(),new C.bAu(),y.B,j),j)
t=C.cOJ(l.e.c)
if(u==null)s=L.DN
else{j=e.M($.cB1().$1(u),y.k)
j=j.gq(j)
if(j==null)j=L.DN
j=J.dL(j,new C.bAv(t))
s=A.Y(j,j.$ti.i("y.E"))}j=A.at(d,k,y.w).w
w=A.bF(A.E(k,k,B.t,k,k,new A.K(B.aZ,k,k,A.T(2),k,k,B.y),k,4,k,k,k,k,k,40),k,k)
r=A.i(x.a,k,k,k,A.ak(d).ok.r,k,k,k)
q=A.ac(new C.acE("Gasto",A.by(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,B.ai,r,B.aq,A.W(A.a([q,B.aW,A.ac(A.b_(new C.acE("Verba \xb7 tocar para mudar",p===0?"Definir":A.by(p,!1),k),new C.bAw(l,d,e,x),k),1)],o),B.x,B.m,B.q,0,k,k)],o)
if(s.length!==0){w=A.a([B.bH,A.i("Contratado na app",k,k,k,A.ak(d).ok.w,k,k,k),B.a4],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.L)(s),++n)w.push(new C.avY(s[n],k))
B.e.A(p,w)}p.push(B.bH)
p.push(A.i("Despesas",k,k,k,A.ak(d).ok.w,k,k,k))
p.push(B.a4)
w=v.length
if(w===0)p.push(D.bBr)
else for(n=0;n<v.length;v.length===w||(0,A.L)(v),++n){m=v[n]
r=A.i(m.c,k,k,k,B.ef,k,k,k)
q=m.r
q=q==null?k:A.i("At\xe9 "+B.f.aW(B.i.k(A.aU(q)),2,"0")+"/"+B.f.aW(B.i.k(A.aD(q)),2,"0")+"/"+A.aI(q),k,k,k,k,k,k,k)
p.push(A.i8(!1,B.V,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.W(A.a([A.i(A.by(m.f,!1),k,k,k,D.bVy,k,k,k),B.an,new R.G0(m.w,new C.bAx(e,m),k,$.a5,k,k,!1,k,k,k,k,!1,k,k,!1,k,T.a91,k)],o),B.x,B.m,B.a_,0,k,k),k))}return A.bn(!0,new A.ev(new A.aK(0,1/0,0,j.a.b*0.8),A.cL(p,k,H.Bq,k,k,!1,B.Y,!0),k),k,B.V,!0)}}
C.acE.prototype={
u(d){var x=null,w=A.T(16)
return A.E(x,A.I(A.a([A.i(this.c,x,x,x,B.ay,x,x,x),B.aK,A.i(this.d,x,x,x,I.a7c,x,x,x)],y.p),B.I,B.m,B.q,0,B.w),B.t,x,x,new A.K(B.af,x,x,w,x,x,B.y),x,x,x,x,B.b8,x,x,x)}}
var z=a.updateTypes(["w(hd,hd)","V(V,GN)","H<~>()","KX(N)","H<l0>()","V(V,hd)","Te(N)","z(mC)","z(hd)","z(tg)"])
C.aVF.prototype={
$2(d,e){return d+e.a.b},
$S:z+1}
C.byd.prototype={
$0(){return this.a.gV().a2(0,$.Wt().gaZ(),y.x).WA(0).eq(new C.byc())},
$S:2}
C.byc.prototype={
$1(d){},
$S:13}
C.by4.prototype={
$1(d){return D.c7v},
$S:z+3}
C.by7.prototype={
$1(d){return d.x!==B.hR},
$S:76}
C.byb.prototype={
$2(d,e){return V.iR(d,this.a.oP(e))},
$1(d){return this.$2(d,null)},
$S:1186}
C.by8.prototype={
$0(){var x=this.a
return x.t(new C.by6(x))},
$S:0}
C.by6.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
C.by9.prototype={
$0(){return C.Ao(this.a.gV().a2(0,$.cC(),y.B).b.a)},
$S:z+4}
C.bya.prototype={
$1(d){var x=this.a
return x.t(new C.by5(x,d))},
$S:15}
C.by5.prototype={
$0(){return this.a.w=D.Tp[this.b]},
$S:0}
C.cfU.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bX(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bX(2100,1,1,0,0):x)},
$S:z+0}
C.cd8.prototype={
$2(d,e){return d+e.f},
$S:z+5}
C.bAm.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:29}
C.bAn.prototype={
$0(){return A.cd(B.v,new C.bAl(this.a),this.b,!0,!0,U.nq,y.H)},
$S:0}
C.bAl.prototype={
$1(d){return new C.Te(this.a.e.a,null)},
$S:z+6}
C.bxg.prototype={
$0(){var x=this.a
A.aC(x,!1).c7()
A.av(x).b5("/bookings",null,y.X)},
$S:0}
C.bxf.prototype={
$3(d,e,f){return A.nr(A.aJ(B.cA,this.a,null,null,null),B.v,!0)},
$S:1187}
C.bH8.prototype={
$0(){var x,w=this,v=null,u=w.a,t=u.a,s=t.a
if(B.f.be(s,"booking:")){x=B.f.dl(s,":pay:")
u=!t.w&&x>0
t=w.b
if(u)A1.As(t,w.c,B.f.bP(s,x+5))
else A.av(t).b5("/bookings",v,y.X)
return}w.c.a2(0,$.Wu().gaZ(),y.h).My(u.a.a)
t=w.b.T(y.q).f
u=u.a
s='"'+u.c
t.ah(A.cV(v,v,v,v,v,B.C,v,A.i(u.w?s+'" marcada como pendente.':s+'" marcada como paga.',v,v,v,v,v,v,v),v,B.a0,v,v,v,v,v,v,v,v,v,v))},
$S:0}
C.bvM.prototype={
$1(d){var x=this.a
return x.t(new C.bvL(x,d))},
$S:155}
C.bvL.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.bvN.prototype={
$1(d){var x=this.a
return x.t(new C.bvK(x,d))},
$S:101}
C.bvK.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bvO.prototype={
$0(){var x,w=this.a,v=B.f.L(w.e.a.a),u=A.fE(A.b4(v,",","."))
w.t(new C.bvJ(w,u))
if(w.w!=null||w.x!=null)return
v=A.aC(this.b,!1)
x=B.f.L(w.d.a.a)
u.toString
v.b0(new C.av8(x,u,w.f,w.r))},
$S:0}
C.bvJ.prototype={
$0(){var x=this.a
x.w=B.f.L(x.d.a.a).length===0?"A despesa precisa de um t\xedtulo":null
x.x=this.b==null?"Indica um valor v\xe1lido":null},
$S:0}
C.bAq.prototype={
$1(d){var x=null,w=this.b
return new A.fl(A.i("Verba para "+this.a.e.a,x,x,x,x,x,x,x),A.cB(x,B.a9,!0,x,!0,B.C,x,A.cH(),w,x,x,x,x,x,2,D.ayF,B.X,!0,x,!0,x,!1,x,B.aG,x,x,x,x,B.ih,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,B.av,x,x,x,x,x,x,x,x,x,x,x,x,!0,B.au,x,B.b6,x,x,x,x),A.a([A.c7(B.dc,x,x,new C.bAo(d),x,x),A.bQ(B.eX,new C.bAp(d,w),x)],y.p),x)},
$S:24}
C.bAo.prototype={
$0(){return A.aC(this.a,!1).c7()},
$S:0}
C.bAp.prototype={
$0(){var x=A.aC(this.a,!1),w=B.f.L(this.b.a.a)
w=A.b4(w," ","")
return x.b0(A.fE(A.b4(w,",",".")))},
$S:0}
C.bAr.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+7}
C.bAs.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+8}
C.bAt.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bX(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bX(2100,1,1,0,0):x)},
$S:z+0}
C.bAu.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:29}
C.bAv.prototype={
$1(d){return B.e.n(this.a,d.a)},
$S:z+9}
C.bAw.prototype={
$0(){var x=this
return x.a.GO(x.b,x.c,x.d.d)},
$S:0}
C.bAx.prototype={
$1(d){return this.a.a2(0,$.Wu().gaZ(),y.h).My(this.b.a)},
$S:122};(function installTearOffs(){var x=a._instance_0u
x(C.a6W.prototype,"gaLw","O9",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.F,[C.GN,C.aVE,C.JG,C.a34,C.av8])
x(A.cD,[C.aVF,C.cfU,C.cd8,C.bAt])
w(C.T8,A.fq)
w(C.Xv,A.dy)
w(C.a6W,A.dw)
x(A.bI,[C.byd,C.by8,C.by6,C.by9,C.by5,C.bAn,C.bxg,C.bH8,C.bvL,C.bvK,C.bvO,C.bvJ,C.bAo,C.bAp,C.bAw])
x(A.bv,[C.byc,C.by4,C.by7,C.byb,C.bya,C.bAm,C.bAl,C.bxf,C.bvM,C.bvN,C.bAq,C.bAr,C.bAs,C.bAu,C.bAv,C.bAx])
x(A.M,[C.adv,C.aHX,C.awq,C.avY,C.az2,C.acE])
x(A.ei,[C.aws,C.TF,C.Te])
w(C.KX,A.G)
w(C.av9,A.a0)})()
A.bx(b.typeUniverse,JSON.parse('{"Xv":{"G":[],"e":[],"f":[]},"KX":{"G":[],"e":[],"f":[]},"Te":{"G":[],"e":[],"f":[]},"a6W":{"a0":["Xv"]},"adv":{"M":[],"e":[],"f":[]},"aHX":{"M":[],"e":[],"f":[]},"awq":{"M":[],"e":[],"f":[]},"aws":{"G":[],"e":[],"f":[]},"avY":{"M":[],"e":[],"f":[]},"TF":{"G":[],"e":[],"f":[]},"az2":{"M":[],"e":[],"f":[]},"av9":{"a0":["KX"]},"acE":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.v
return{c:x("on<O?>"),l:x("aG<fb>"),k:x("aG<t<tg>>"),r:x("aG<t<jk>>"),y:x("aG<a2<c,t<c>>>"),x:x("xv"),b:x("tl"),d:x("qH"),C:x("GN"),_:x("hd"),h:x("xU"),g:x("tv"),D:x("q<GN>"),u:x("q<hd>"),t:x("q<a2<c,@>>"),E:x("q<a34>"),v:x("q<JG>"),s:x("q<c>"),p:x("q<e>"),R:x("t<jk>"),w:x("d8"),e:x("l0"),B:x("ec"),n:x("av8"),q:x("dD"),i:x("V"),S:x("w"),X:x("F?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aiL=new A.O(1,0.9333333333333333,0.9490196078431372,0.9215686274509803,B.A)
D.ayF=new A.dz(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.atV=new K.jM("Pagas")
D.atW=new K.jM("Pendentes")
D.aTo=x([I.Mb,D.atV,D.atW],A.v("q<jM>"))
D.a8L=new C.T8(0,"all")
D.a8M=new C.T8(1,"paid")
D.a8N=new C.T8(2,"pending")
D.Tp=x([D.a8L,D.a8M,D.a8N],A.v("q<T8>"))
D.bpW=x(["catering"],y.s)
D.brl=x(["flowers_decor"],y.s)
D.bsV=x(["music_dj","bands_musicians"],y.s)
D.btp=x([B.mG,O.p7,B.ci],A.v("q<aB>"))
D.btt=x(["photography"],y.s)
D.buD=x(["venue"],y.s)
D.axY=new A.oA("Ainda n\xe3o h\xe1 despesas nesta categoria.",B.ht,null)
D.bBr=new A.a_(B.jC,D.axY,null)
D.bJX=new A.i9("Pagamentos pr\xf3ximos",null,null)
D.bZc=new A.J("N\xe3o foi poss\xedvel guardar a verba.",null,null,null,null,null,null,null,null,null,null)
D.bO9=new A.cc(D.bZc,null,null,null,null,null,null,null,null,null,null,null,null,B.a0,!1,null,null,null,B.C,null)
D.byt=new A.Cg("assets/mascot/duo_budget.png",1,"budget")
D.bPq=new A.ul(D.byt,170,null)
D.bVy=new A.C(!0,null,null,null,null,null,null,B.bp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bXe=new A.J("Sem despesas nesta vista",null,B.co,B.aa,null,null,null,null,null,null,null)
D.c1s=new A.J("Usa o + para registar a primeira.",null,B.xM,B.aa,null,null,null,null,null,null,null)
D.c3b=new A.J("Categorias",null,B.cN,null,null,null,null,null,null,null,null)
D.c7v=new C.KX(null)})()};
(a=>{a["MQn+InW01drI7tjHaPWV6q73Zjo="]=a.current})($__dart_deferred_initializers__);