((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,O,P,Q,R,S,T,U,H,V,I,K,F,W,E,X,Y,Z,G,A_,A0,A1,A2,A3,A4,A5,A6,A7,A8,L,C={
ddY(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v)u.push(new C.GO(x[v]))
return new C.aVM(d.b,u)},
GO:function GO(d){this.a=d},
aVM:function aVM(d,e){this.a=d
this.b=e},
aVN:function aVN(){},
Ap(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ap=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(E.afm(),$async$Ap)
case 3:u=$.Z()
t=u.b
t===$&&A.b()
x=4
return A.d(t.S("weddings").aO(0,"partner_name_1, partner_name_2").a0("id",d).em(),$async$Ap)
case 4:s=f
x=5
return A.d(u.b.S("bookings").aO(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), weddings(partner_name_1, partner_name_2, location), proposals(title)").a0("wedding_id",d).dE(0,"event_date",!1),$async$Ap)
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
return A.d(t.S("payments").aO(0,"booking_id, type, status, amount, paid_at, due_at, provider").fC("booking_id",u).x6(0,"created_at"),$async$Ap)
case 9:q=f
case 7:u=$.Z()
t=u.b
t===$&&A.b()
x=10
return A.d(t.S("expenses").aO(0,"title, category, amount, due_date, paid").a0("wedding_id",d).x6(0,"due_date"),$async$Ap)
case 10:p=f
x=11
return A.d(u.b.S("budget_categories").aO(0,"name, amount").a0("wedding_id",d).x6(0,"position"),$async$Ap)
case 11:o=f
x=12
return A.d(u.b.S("budgets").aO(0,"total").a0("wedding_id",d).em(),$async$Ap)
case 12:n=f
m=E.cyJ(E.cgS(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.v)
for(t=J.aE(p);t.p();){l=t.gF(t)
k=J.a3(l)
j=k.h(l,"title")
j=J.cJ(j==null?"":j)
i=k.h(l,"category")
i=J.cJ(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.fF(A.u(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.fO(A.u(g))
g=g==null?null:g.fq()}u.push(new C.JI(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.aE(o);l.p();){k=l.gF(l)
j=J.a3(k)
i=j.h(k,"name")
i=J.cJ(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.fF(A.u(k))
if(k==null)k=0}t.push(new C.a3c(i,k))}l=n==null?null:E.czb(J.h(n,"total"))
v=new E.l0(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Ap,w)},
JI:function JI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3c:function a3c(d,e){this.a=d
this.b=e},
cVI(){return new C.XD(null)},
cLJ(d){var x=A.Y(d,y._)
B.e.d4(x,new C.cgr())
return x},
Tf:function Tf(d,e){this.a=d
this.b=e},
XD:function XD(d){this.a=d},
a70:function a70(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
byo:function byo(d){this.a=d},
byn:function byn(){},
byf:function byf(){},
byi:function byi(){},
bym:function bym(d){this.a=d},
byj:function byj(d){this.a=d},
byh:function byh(d){this.a=d},
byk:function byk(d){this.a=d},
byl:function byl(d){this.a=d},
byg:function byg(d,e){this.a=d
this.b=e},
cgr:function cgr(){},
adA:function adA(d,e){this.c=d
this.a=e},
cdG:function cdG(){},
aI4:function aI4(d,e){this.c=d
this.a=e},
aww:function aww(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awy:function awy(d,e,f){this.e=d
this.f=e
this.a=f},
bAx:function bAx(){},
bAy:function bAy(d,e){this.a=d
this.b=e},
bAw:function bAw(d){this.a=d},
aw3:function aw3(d,e){this.c=d
this.a=e},
bxr:function bxr(d){this.a=d},
bxq:function bxq(d){this.a=d},
TM:function TM(d,e){this.e=d
this.a=e},
bHu:function bHu(d,e,f){this.a=d
this.b=e
this.c=f},
az9:function az9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ave:function ave(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
L0:function L0(d){this.a=d},
avf:function avf(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.x=_.w=_.r=_.f=null},
bvX:function bvX(d){this.a=d},
bvW:function bvW(d,e){this.a=d
this.b=e},
bvY:function bvY(d){this.a=d},
bvV:function bvV(d,e){this.a=d
this.b=e},
bvZ:function bvZ(d,e){this.a=d
this.b=e},
bvU:function bvU(d,e){this.a=d
this.b=e},
Tl:function Tl(d,e){this.e=d
this.a=e},
bAB:function bAB(d,e){this.a=d
this.b=e},
bAz:function bAz(d){this.a=d},
bAA:function bAA(d,e){this.a=d
this.b=e},
bAC:function bAC(d){this.a=d},
bAD:function bAD(d){this.a=d},
bAE:function bAE(){},
bAF:function bAF(){},
bAG:function bAG(d){this.a=d},
bAH:function bAH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bAI:function bAI(d,e){this.a=d
this.b=e},
acJ:function acJ(d,e,f){this.c=d
this.d=e
this.a=f},
cPn(d){var x
switch(d){case F.wH:x=D.buI
break
case F.wD:x=D.bq0
break
case F.wE:x=D.bty
break
case F.wF:x=D.bt_
break
case F.wG:x=D.brq
break
default:x=B.a9
break}return x},
cOq(d){switch(d.a){case 1:return B.en
case 0:return B.cA
case 2:return A0.ep
case 3:return B.bh
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
A0=c[193]
A1=c[212]
A2=c[124]
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
C.GO.prototype={
gaF(d){return this.a.a}}
C.aVM.prototype={
gy0(){return B.e.dS(this.b,0,new C.aVN())},
gax7(){var x=this.a
return x===0?0:B.k.ar(this.gy0()/x,0,1)}}
C.JI.prototype={}
C.a3c.prototype={
gaF(d){return this.a}}
C.Tf.prototype={
H(){return"_BudgetFilter."+this.b}}
C.XD.prototype={
R(){return new C.a70(D.a8P)}}
C.a70.prototype={
ak(){this.aG()
A.iE(new C.byo(this),y.H)},
Ob(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Ob=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=u.gU()
q=$.WC()
p=y.h
o=r.a2(0,q.gaW(),p).x
if(o==null){x=1
break}t=u.c
t.toString
x=3
return A.d(A.cb(null,new C.byf(),t,!0,!0,null,y.n),$async$Ob)
case 3:s=e
if(s==null){x=1
break}r=r.a2(0,q.gaW(),p)
q=s.a
p=s.b
t=s.c
r.SD(new G.hd("",o,q,null,s.d,p,t,!1))
case 1:return A.l(v,w)}})
return A.m($async$Ob,w)},
u(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gU(),g=h.M($.WB(),y.b),f=h.M($.Na(),y.d),e=h.M($.WC(),y.g),d=g.b,a0=d==null?i:C.ddY(d,f.b)
d=A.ii(h.M($.lP(),y.r),y.R)
x=d==null?i:d.b.a
if(x==null)x=A1.pC
w=J.dL(x,new C.byi())
h=h.M($.AA(),y.l)
v=h.gt(h)
u=new C.bym(v==null?W.fZ:v)
h=y._
d=A.Y(e.gbrp(),h)
for(t=w.a,s=J.cr(t),r=s.gW(t),q=w.b,p=w.$ti.i("fp<1>"),o=new A.fp(r,q,p);o.p();){n=r.gF(r)
m=n.ay
if(m>0)d.push(new G.hd("booking:"+n.a+":paid",n.b,"Pago \xb7 "+n.c,i,i,u.$2(m,n.w),i,!0))}h=A.Y(e.gawN(0),h)
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
s=A.k7(!0,!0,i,"Or\xe7amento",34,20,new Z.qA(j.gaLB(),!1,i))
r=y.p
q=A.a([new C.aI4(a0,i)],r)
p=j.w
if(p===D.a8Q)B.e.A(q,A.a([new A.i9("Pagas",new C.adA(d,i),i),new C.TM(d,i)],r))
else if(p===D.a8R)B.e.A(q,A.a([new A.i9("Pendentes",new C.adA(h,i),i),new C.TM(C.cLJ(h),i)],r))
else B.e.A(q,A.a([B.cM,new C.aww(a0.b,j.x,new C.byj(j),i),D.bK3,new C.TM(C.cLJ(h),i),Y.a4x,new E.Bx("Gastos e parceiros",!1,new C.byk(j),i)],r))
h=new A.bC(B.aC,i,B.aD,B.C,A.a([A.bo(!1,new A.tr(A.cM(A.a([s,new A.a_(new A.X(20,16,20,120),A.I(q,B.I,B.l,B.q,0,B.w),i)],r),i,t,i,i,!1,B.Z,!1),8,32,i),i,B.V,!1),A.cc(0,new A3.BD(D.aTt,B.e.dm(D.Tr,j.w),new C.byl(j),i),i,i,0,0,i,i)],r),i)}return A.cG(i,B.f1,h,!0,i)}}
C.adA.prototype={
u(d){var x=null
return A.i(A.by(B.e.dS(this.c,0,new C.cdG()),!1),x,x,x,A.as(x,x,$.a5,x,x,x,x,x,x,x,x,14,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)}}
C.aI4.prototype={
u(d){var x,w,v=null,u=this.c,t=B.k.aN(u.gax7()*100),s=u.a,r=s-u.gy0()<0,q=r?"ACIMA DO OR\xc7AMENTO":"AINDA TENS",p=A.by(Math.abs(s-u.gy0()),!1)
s=A.by(s,!1)
x=u.gax7()
u=A.ab(A.i("Gasto "+A.by(u.gy0(),!1),v,v,v,Q.xO,v,v,v),1)
w=""+t
return A.ll(D.btu,A.V(A.a([u,new A.hv(r?w+"% \xb7 acima do or\xe7amento":w+"% \xb7 dentro do or\xe7amento",!0,v)],y.p),B.x,B.l,B.q,0,v,v),q,x,"de "+s,p)}}
C.aww.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q||s.c.length<=5,o=s.c,n=p?o:A.hm(o,0,A.jg(5,"count",y.S),A.a7(o).c).bB(0),m=y.p,l=A.a([D.c3o,B.Y],m)
for(x=A.hf(n,0,y.C),w=J.aE(x.a),v=x.b,x=new A.cY(w,v,A.r(x).i("cY<1>"));x.p();){u=x.c
u=u>=0?new A.ag(v+u,w.gF(w)):A.aj(A.cl())
t=u.a
u=A.a([new C.awy(u.b,t,r)],m)
if(t!==n.length-1)u.push(B.a5)
B.e.A(l,u)}x=o.length
if(x>5){x=q?"Ver menos":"Ver todas as categorias ("+x+")"
x=A.i(x,r,r,r,A.as(r,r,$.a5,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q?A5.MF:A6.Co
B.e.A(l,A.a([B.a5,A.aY(A.V(A.a([x,A.aJ(q,$.a5,r,r,18)],m),B.x,B.l,B.q,0,r,r),s.e,r)],m))}return A.I(l,B.I,B.l,B.q,0,B.w)}}
C.awy.prototype={
bf(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=this.e.a,m=n.d,l=y.T,k=e.M(A.cC($.cx(),new C.bAx(),y.B,l),l)
if(k==null)x=B.n9
else{l=e.M($.cBD().$1(k),y.y)
l=l.gt(l)
x=l==null?B.n9:l}l=A.a([],y.s)
for(w=n.c,v=C.cPn(w),u=v.length,t=J.a3(x),s=0;s<u;++s){r=t.h(x,v[s])
if(r!=null)B.e.A(l,r)}q=m===0?0:n.b/m
p=w==null?B.iV:C.cOq(w)
w=N.ie(o,22,1)
v=B.fa[B.i.aj(this.f,4)]
u=y.p
n=A.a([A.V(A.a([A.ab(A.i(n.a,1,B.a1,o,B.fK,o,o,o),1),B.al,A.i(A.by(n.b,!1)+" de "+A.by(m,!1),o,o,o,B.ay,o,o,o)],u),B.x,B.l,B.q,0,o,o)],u)
if(l.length!==0)B.e.A(n,A.a([B.aF,new A.dM(B.bZ,o,o,new A8.Xq(l,o),o)],u))
n.push(B.a4)
l=A.T(999)
t=q>1?1:q
r=q>0.85?B.c5:$.a5
n.push(A.eu(l,A.kV(D.aiP,o,6,t,new A.on(r,y.c)),B.aH))
return A.aY(A.E(o,A.V(A.a([new A.hl(p,v,40,o,o),B.as,A.ab(A.I(n,B.I,B.l,B.q,0,B.w),1)],u),B.x,B.l,B.q,0,o,o),B.t,o,o,w,o,o,o,o,B.b8,o,o,o),new C.bAy(this,d),o)}}
C.aw3.prototype={
u(d){var x,w,v=null,u=$.a5,t=$.e1.bW(0.55),s=A.T(18),r=A.T(12),q=this.c,p=q.e
r=A.eu(r,A.aT(p==null?A.nr(A.aJ(B.cA,u,v,v,v),B.v,!0):A.yn(p,144,new C.bxq(u),!1,B.c_,!1,v,v,v),48,48),B.aH)
p=A.i(q.b,1,B.a1,v,A_.a76,v,v,v)
x=A.aJ(B.dz,u,v,v,14)
w=q.d
q=w>0?q.gNL()+" \xb7 "+A.by(w,!1):q.gNL()
w=y.p
return new A.a_(B.kM,A.aY(A.E(v,A.V(A.a([r,B.as,A.ab(A.I(A.a([p,B.dB,A.V(A.a([x,B.ds,new A.eo(1,B.bM,A.i(q,1,B.a1,v,A.as(v,v,u,v,v,v,v,v,v,v,v,13,v,v,B.bg,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),B.x,B.l,B.q,0,v,v)],w),B.I,B.l,B.q,0,B.w),1),A.aJ(B.h4,u,v,v,v)],w),B.x,B.l,B.q,0,v,v),B.t,v,v,new A.K(t,v,v,s,v,v,B.y),v,v,v,v,B.cZ,v,v,v),new C.bxr(d),v),v)}}
C.TM.prototype={
bf(d,e){var x,w,v,u,t,s,r,q=this.e
if(q.length===0)return new A.a_(A9.KY,A.I(A.a([D.bPz,B.ap,D.bXp,B.aK,D.c1E],y.p),B.x,B.l,B.q,0,B.w),null)
x=y.p
w=A.a([],x)
for(q=A.hf(q,0,y._),v=J.aE(q.a),u=q.b,q=new A.cY(v,u,A.r(q).i("cY<1>"));q.p();){t={}
s=q.c
s=s>=0?new A.ag(u+s,v.gF(v)):A.aj(A.cl())
t.a=null
r=s.b
t.a=r
B.e.A(w,A.a([new C.az9(r,new C.bHu(t,d,e),s.a,null),B.a5],x))}return A.I(w,B.x,B.l,B.q,0,B.w)}}
C.az9.prototype={
u(d){var x,w,v,u,t,s,r,q=null,p=this.c,o=p.r,n=p.e
if(n!=null)x=P.afL(n)
else{n=p.d
x=n==null?B.iV:C.cOq(n)}n=p.w
w=!n&&o!=null&&B.i.aT(o.df(new A.an(Date.now(),0,!1)).a,864e8)<=30
v=w?new A.K(H.rM,q,q,A.T(20),B.aq,q,B.y):N.ie(q,20,1)
u=this.e
if(o!=null){u=B.fa[B.i.aj(u,4)]
u=new X.Yy(o,u,w?B.e0:$.a5,q)}else u=new A.hl(x,B.fa[B.i.aj(u,4)],44,q,q)
t=A.i(p.c,1,B.a1,q,B.fK,q,q,q)
if(B.f.be(p.a,"booking:"))s=n?"Reserva \xb7 pago na app":"Reserva \xb7 toca para pagar"
else s=n?"Paga \xb7 toca para desfazer":"Pendente \xb7 toca para marcar como paga"
r=y.p
s=A.ab(A.I(A.a([t,B.bc,A.i(s,1,B.a1,q,B.ay,q,q,q)],r),B.I,B.l,B.q,0,B.w),1)
p=A.a([A.i(A.by(p.f,!1),q,q,q,B.fK,q,q,q)],r)
if(n){n=$.a5.bW(0.14)
t=A.T(999)
B.e.A(p,A.a([B.aK,A.E(q,A.i("PAGO",q,q,q,A.as(q,q,$.a5,q,q,q,q,q,q,q,q,10,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.t,q,q,new A.K(n,q,q,t,q,q,B.y),q,q,q,q,S.ty,q,q,q)],r))}return A.aY(A.E(q,A.V(A.a([u,B.as,s,B.al,A.I(p,B.dH,B.l,B.q,0,B.w)],r),B.x,B.l,B.q,0,q,q),B.t,q,q,v,q,q,q,q,B.b8,q,q,q),this.d,q)}}
C.ave.prototype={}
C.L0.prototype={
R(){var x=$.ah()
return new C.avf(new A.aM(B.aj,x),new A.aM(B.aj,x))}}
C.avf.prototype={
m(){var x=this.d,w=$.ah()
x.a_$=w
x.V$=0
x=this.e
x.a_$=w
x.V$=0
this.a9()},
u(d){var x=this,w=null,v=A.at(d,w,y.w).w
return A.ez(A.I(A.a([A.i("Adicionar despesa",w,w,w,A.ak(d).ok.r,w,w,w),B.ai,new M.fM("Despesa",x.d,x.w,w,w,w),B.Y,new M.fM("Valor (\u20ac)",x.e,x.x,B.cS,w,w),B.Y,A4.aTq(!1,"Prazo (opcional)",new C.bvX(x),x.f),B.ap,new A7.Yb(x.r,new C.bvY(x),w),B.ai,new A.f7("Guardar",new C.bvZ(x,d),!1,w)],y.p),B.T,B.l,B.a_,0,B.w),new A.X(20,20,20,v.f.d+20),w,B.Z)}}
C.Tl.prototype={
GP(d,e,f){return this.aRI(d,e,f)},
aRI(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$GP=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:q=f===0?"":B.k.a8(f,0)
x=3
return A.d(A.cb(null,new C.bAB(s,new A.aM(new A.bR(q,B.aY,B.aI),$.ah())),d,!0,!1,null,y.i),$async$GP)
case 3:p=h
if(p==null||p<0){x=1
break}u=5
x=8
return A.d(e.a2(0,$.WB().gaW(),y.x).MD(s.e.a,p),$async$GP)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
if(d.e!=null)d.T(y.q).f.af(D.bOi)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GP,w)},
bf(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.M($.WB(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.iq(new A.a4(j,new C.bAC(l),A.a7(j).i("a4<1>")))
x=j}if(x==null)x=l.e
j=e.M($.WC(),y.g).b
w=A.a7(j).i("a4<1>")
v=A.Y(new A.a4(j,new C.bAD(l),w),w.i("y.E"))
B.e.d4(v,new C.bAE())
j=y.T
u=e.M(A.cC($.cx(),new C.bAF(),y.B,j),j)
t=C.cPn(l.e.c)
if(u==null)s=L.DQ
else{j=e.M($.cBE().$1(u),y.k)
j=j.gt(j)
if(j==null)j=L.DQ
j=J.dL(j,new C.bAG(t))
s=A.Y(j,j.$ti.i("y.E"))}j=A.at(d,k,y.w).w
w=A.bF(A.E(k,k,B.t,k,k,new A.K(B.aZ,k,k,A.T(2),k,k,B.y),k,4,k,k,k,k,k,40),k,k)
r=A.i(x.a,k,k,k,A.ak(d).ok.r,k,k,k)
q=A.ab(new C.acJ("Gasto",A.by(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,B.ai,r,B.ap,A.V(A.a([q,B.aR,A.ab(A.aY(new C.acJ("Verba \xb7 tocar para mudar",p===0?"Definir":A.by(p,!1),k),new C.bAH(l,d,e,x),k),1)],o),B.x,B.l,B.q,0,k,k)],o)
if(s.length!==0){w=A.a([B.bH,A.i("Contratado na app",k,k,k,A.ak(d).ok.w,k,k,k),B.a4],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.L)(s),++n)w.push(new C.aw3(s[n],k))
B.e.A(p,w)}p.push(B.bH)
p.push(A.i("Despesas",k,k,k,A.ak(d).ok.w,k,k,k))
p.push(B.a4)
w=v.length
if(w===0)p.push(D.bBy)
else for(n=0;n<v.length;v.length===w||(0,A.L)(v),++n){m=v[n]
r=A.i(m.c,k,k,k,B.eg,k,k,k)
q=m.r
q=q==null?k:A.i("At\xe9 "+B.f.aX(B.i.k(A.aU(q)),2,"0")+"/"+B.f.aX(B.i.k(A.aD(q)),2,"0")+"/"+A.aI(q),k,k,k,k,k,k,k)
p.push(A.i8(!1,B.V,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.V(A.a([A.i(A.by(m.f,!1),k,k,k,D.bVJ,k,k,k),B.al,new R.G1(m.w,new C.bAI(e,m),k,$.a5,k,k,!1,k,k,k,k,!1,k,k,!1,k,T.a95,k)],o),B.x,B.l,B.a_,0,k,k),k))}return A.bo(!0,new A.ev(new A.aK(0,1/0,0,j.a.b*0.8),A.cM(p,k,H.Bs,k,k,!1,B.Z,!0),k),k,B.V,!0)}}
C.acJ.prototype={
u(d){var x=null,w=A.T(16)
return A.E(x,A.I(A.a([A.i(this.c,x,x,x,B.ay,x,x,x),B.aK,A.i(this.d,x,x,x,I.a7e,x,x,x)],y.p),B.I,B.l,B.q,0,B.w),B.t,x,x,new A.K(B.af,x,x,w,x,x,B.y),x,x,x,x,B.b8,x,x,x)}}
var z=a.updateTypes(["w(hd,hd)","W(W,GO)","H<~>()","L0(N)","H<l0>()","W(W,hd)","Tl(N)","z(mC)","z(hd)","z(tg)"])
C.aVN.prototype={
$2(d,e){return d+e.a.b},
$S:z+1}
C.byo.prototype={
$0(){return this.a.gU().a2(0,$.WB().gaW(),y.x).WC(0).eq(new C.byn())},
$S:2}
C.byn.prototype={
$1(d){},
$S:13}
C.byf.prototype={
$1(d){return D.c7J},
$S:z+3}
C.byi.prototype={
$1(d){return d.x!==B.hS},
$S:77}
C.bym.prototype={
$2(d,e){return V.iR(d,this.a.oP(e))},
$1(d){return this.$2(d,null)},
$S:1189}
C.byj.prototype={
$0(){var x=this.a
return x.q(new C.byh(x))},
$S:0}
C.byh.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
C.byk.prototype={
$0(){return C.Ap(this.a.gU().a2(0,$.cx(),y.B).b.a)},
$S:z+4}
C.byl.prototype={
$1(d){var x=this.a
return x.q(new C.byg(x,d))},
$S:15}
C.byg.prototype={
$0(){return this.a.w=D.Tr[this.b]},
$S:0}
C.cgr.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bX(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bX(2100,1,1,0,0):x)},
$S:z+0}
C.cdG.prototype={
$2(d,e){return d+e.f},
$S:z+5}
C.bAx.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:30}
C.bAy.prototype={
$0(){return A.cb(B.v,new C.bAw(this.a),this.b,!0,!0,U.nr,y.H)},
$S:0}
C.bAw.prototype={
$1(d){return new C.Tl(this.a.e.a,null)},
$S:z+6}
C.bxr.prototype={
$0(){var x=this.a
A.aC(x,!1).c8()
A.au(x).b3("/bookings",null,y.X)},
$S:0}
C.bxq.prototype={
$3(d,e,f){return A.nr(A.aJ(B.cA,this.a,null,null,null),B.v,!0)},
$S:1190}
C.bHu.prototype={
$0(){var x,w=this,v=null,u=w.a,t=u.a,s=t.a
if(B.f.be(s,"booking:")){x=B.f.dm(s,":pay:")
u=!t.w&&x>0
t=w.b
if(u)A2.At(t,w.c,B.f.bP(s,x+5))
else A.au(t).b3("/bookings",v,y.X)
return}w.c.a2(0,$.WC().gaW(),y.h).MA(u.a.a)
t=w.b.T(y.q).f
u=u.a
s='"'+u.c
t.af(A.cP(v,v,v,v,v,B.C,v,A.i(u.w?s+'" marcada como pendente.':s+'" marcada como paga.',v,v,v,v,v,v,v),v,B.a0,v,v,v,v,v,v,v,v,v,v))},
$S:0}
C.bvX.prototype={
$1(d){var x=this.a
return x.q(new C.bvW(x,d))},
$S:154}
C.bvW.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.bvY.prototype={
$1(d){var x=this.a
return x.q(new C.bvV(x,d))},
$S:106}
C.bvV.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bvZ.prototype={
$0(){var x,w=this.a,v=B.f.L(w.e.a.a),u=A.fF(A.b4(v,",","."))
w.q(new C.bvU(w,u))
if(w.w!=null||w.x!=null)return
v=A.aC(this.b,!1)
x=B.f.L(w.d.a.a)
u.toString
v.b_(new C.ave(x,u,w.f,w.r))},
$S:0}
C.bvU.prototype={
$0(){var x=this.a
x.w=B.f.L(x.d.a.a).length===0?"A despesa precisa de um t\xedtulo":null
x.x=this.b==null?"Indica um valor v\xe1lido":null},
$S:0}
C.bAB.prototype={
$1(d){var x=null,w=this.b
return new A.fl(A.i("Verba para "+this.a.e.a,x,x,x,x,x,x,x),A.cD(x,B.a9,!0,x,!0,B.C,x,A.cI(),w,x,x,x,x,x,2,D.ayK,B.X,!0,x,!0,x,!1,x,B.aG,x,x,x,x,B.ii,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,B.av,x,x,x,x,x,x,x,x,x,x,x,x,!0,B.au,x,B.b6,x,x,x,x),A.a([A.c8(B.d4,x,x,new C.bAz(d),x,x),A.bO(B.eX,new C.bAA(d,w),x)],y.p),x)},
$S:24}
C.bAz.prototype={
$0(){return A.aC(this.a,!1).c8()},
$S:0}
C.bAA.prototype={
$0(){var x=A.aC(this.a,!1),w=B.f.L(this.b.a.a)
w=A.b4(w," ","")
return x.b_(A.fF(A.b4(w,",",".")))},
$S:0}
C.bAC.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+7}
C.bAD.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+8}
C.bAE.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bX(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.bX(2100,1,1,0,0):x)},
$S:z+0}
C.bAF.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:30}
C.bAG.prototype={
$1(d){return B.e.n(this.a,d.a)},
$S:z+9}
C.bAH.prototype={
$0(){var x=this
return x.a.GP(x.b,x.c,x.d.d)},
$S:0}
C.bAI.prototype={
$1(d){return this.a.a2(0,$.WC().gaW(),y.h).MA(this.b.a)},
$S:110};(function installTearOffs(){var x=a._instance_0u
x(C.a70.prototype,"gaLB","Ob",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.G,[C.GO,C.aVM,C.JI,C.a3c,C.ave])
x(A.cF,[C.aVN,C.cgr,C.cdG,C.bAE])
w(C.Tf,A.fq)
w(C.XD,A.dx)
w(C.a70,A.ds)
x(A.bI,[C.byo,C.byj,C.byh,C.byk,C.byg,C.bAy,C.bxr,C.bHu,C.bvW,C.bvV,C.bvZ,C.bvU,C.bAz,C.bAA,C.bAH])
x(A.bv,[C.byn,C.byf,C.byi,C.bym,C.byl,C.bAx,C.bAw,C.bxq,C.bvX,C.bvY,C.bAB,C.bAC,C.bAD,C.bAF,C.bAG,C.bAI])
x(A.M,[C.adA,C.aI4,C.aww,C.aw3,C.az9,C.acJ])
x(A.ei,[C.awy,C.TM,C.Tl])
w(C.L0,A.F)
w(C.avf,A.a0)})()
A.bx(b.typeUniverse,JSON.parse('{"XD":{"F":[],"e":[],"f":[]},"L0":{"F":[],"e":[],"f":[]},"Tl":{"F":[],"e":[],"f":[]},"a70":{"a0":["XD"]},"adA":{"M":[],"e":[],"f":[]},"aI4":{"M":[],"e":[],"f":[]},"aww":{"M":[],"e":[],"f":[]},"awy":{"F":[],"e":[],"f":[]},"aw3":{"M":[],"e":[],"f":[]},"TM":{"F":[],"e":[],"f":[]},"az9":{"M":[],"e":[],"f":[]},"avf":{"a0":["L0"]},"acJ":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.v
return{c:x("on<O?>"),l:x("aF<fb>"),k:x("aF<t<tg>>"),r:x("aF<t<jk>>"),y:x("aF<a2<c,t<c>>>"),x:x("xw"),b:x("tl"),d:x("qI"),C:x("GO"),_:x("hd"),h:x("xV"),g:x("tv"),D:x("q<GO>"),u:x("q<hd>"),t:x("q<a2<c,@>>"),E:x("q<a3c>"),v:x("q<JI>"),s:x("q<c>"),p:x("q<e>"),R:x("t<jk>"),w:x("d9"),e:x("l0"),B:x("ec"),n:x("ave"),q:x("dC"),i:x("W"),S:x("w"),X:x("G?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aiP=new A.O(1,0.9333333333333333,0.9490196078431372,0.9215686274509803,B.A)
D.ayK=new A.dz(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.au_=new K.jM("Pagas")
D.au0=new K.jM("Pendentes")
D.aTt=x([I.Md,D.au_,D.au0],A.v("q<jM>"))
D.a8P=new C.Tf(0,"all")
D.a8Q=new C.Tf(1,"paid")
D.a8R=new C.Tf(2,"pending")
D.Tr=x([D.a8P,D.a8Q,D.a8R],A.v("q<Tf>"))
D.bq0=x(["catering"],y.s)
D.brq=x(["flowers_decor"],y.s)
D.bt_=x(["music_dj","bands_musicians"],y.s)
D.btu=x([B.mG,O.p9,B.ci],A.v("q<aB>"))
D.bty=x(["photography"],y.s)
D.buI=x(["venue"],y.s)
D.ay2=new A.oA("Ainda n\xe3o h\xe1 despesas nesta categoria.",B.hu,null)
D.bBy=new A.a_(B.iN,D.ay2,null)
D.bK3=new A.i9("Pagamentos pr\xf3ximos",null,null)
D.bZn=new A.J("N\xe3o foi poss\xedvel guardar a verba.",null,null,null,null,null,null,null,null,null,null)
D.bOi=new A.cd(D.bZn,null,null,null,null,null,null,null,null,null,null,null,null,B.a0,!1,null,null,null,B.C,null)
D.byy=new A.Ch("assets/mascot/duo_budget.png",1,"budget")
D.bPz=new A.ul(D.byy,170,null)
D.bVJ=new A.C(!0,null,null,null,null,null,null,B.bq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bXp=new A.J("Sem despesas nesta vista",null,B.cl,B.aa,null,null,null,null,null,null,null)
D.c1E=new A.J("Usa o + para registar a primeira.",null,B.xP,B.aa,null,null,null,null,null,null,null)
D.c3o=new A.J("Categorias",null,B.cN,null,null,null,null,null,null,null,null)
D.c7J=new C.L0(null)})()};
(a=>{a["jDJWnfq+bQfsWV4S6vS+OWITSDY="]=a.current})($__dart_deferred_initializers__);