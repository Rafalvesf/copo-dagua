((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,O,P,Q,R,S,T,U,V,H,W,I,K,F,X,E,Y,Z,A_,G,A0,A1,A2,A3,A4,A5,A6,A7,A8,L,C={
dd8(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v)u.push(new C.GM(x[v]))
return new C.aVy(d.b,u)},
GM:function GM(d){this.a=d},
aVy:function aVy(d,e){this.a=d
this.b=e},
aVz:function aVz(){},
An(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$An=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(E.afd(),$async$An)
case 3:u=$.Z()
t=u.b
t===$&&A.b()
x=4
return A.d(t.S("weddings").aP(0,"partner_name_1, partner_name_2").a0("id",d).em(),$async$An)
case 4:s=f
x=5
return A.d(u.b.S("bookings").aP(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), weddings(partner_name_1, partner_name_2, location), proposals(title)").a0("wedding_id",d).dI(0,"event_date",!1),$async$An)
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
return A.d(t.S("payments").aP(0,"booking_id, type, status, amount, paid_at, due_at, provider").fC("booking_id",u).x6(0,"created_at"),$async$An)
case 9:q=f
case 7:u=$.Z()
t=u.b
t===$&&A.b()
x=10
return A.d(t.S("expenses").aP(0,"title, category, amount, due_date, paid").a0("wedding_id",d).x6(0,"due_date"),$async$An)
case 10:p=f
x=11
return A.d(u.b.S("budget_categories").aP(0,"name, amount").a0("wedding_id",d).x6(0,"position"),$async$An)
case 11:o=f
x=12
return A.d(u.b.S("budgets").aP(0,"total").a0("wedding_id",d).em(),$async$An)
case 12:n=f
m=E.cxY(E.cgc(s),"Gastos e parceiros",r,q,!1)
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
g=g==null?null:g.fq()}u.push(new C.JF(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.aE(o);l.p();){k=l.gF(l)
j=J.a3(k)
i=j.h(k,"name")
i=J.cJ(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.fE(A.u(k))
if(k==null)k=0}t.push(new C.a31(i,k))}l=n==null?null:E.cyq(J.h(n,"total"))
v=new E.l0(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$An,w)},
JF:function JF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a31:function a31(d,e){this.a=d
this.b=e},
cUU(){return new C.Xt(null)},
cKY(d){var x=A.Y(d,y._)
B.e.d4(x,new C.cfM())
return x},
T8:function T8(d,e){this.a=d
this.b=e},
Xt:function Xt(d){this.a=d},
a6T:function a6T(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
by5:function by5(d){this.a=d},
by4:function by4(){},
bxX:function bxX(){},
by_:function by_(){},
by3:function by3(d){this.a=d},
by0:function by0(d){this.a=d},
bxZ:function bxZ(d){this.a=d},
by1:function by1(d){this.a=d},
by2:function by2(d){this.a=d},
bxY:function bxY(d,e){this.a=d
this.b=e},
cfM:function cfM(){},
ads:function ads(d,e){this.c=d
this.a=e},
cd0:function cd0(){},
aHR:function aHR(d,e){this.c=d
this.a=e},
awk:function awk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awm:function awm(d,e,f){this.e=d
this.f=e
this.a=f},
bAe:function bAe(){},
bAf:function bAf(d,e){this.a=d
this.b=e},
bAd:function bAd(d){this.a=d},
avS:function avS(d,e){this.c=d
this.a=e},
bx8:function bx8(d){this.a=d},
bx7:function bx7(d){this.a=d},
TF:function TF(d,e){this.e=d
this.a=e},
bH0:function bH0(d,e,f){this.a=d
this.b=e
this.c=f},
ayX:function ayX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
av3:function av3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KW:function KW(d){this.a=d},
av4:function av4(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.x=_.w=_.r=_.f=null},
bvG:function bvG(d){this.a=d},
bvF:function bvF(d,e){this.a=d
this.b=e},
bvH:function bvH(d){this.a=d},
bvE:function bvE(d,e){this.a=d
this.b=e},
bvI:function bvI(d,e){this.a=d
this.b=e},
bvD:function bvD(d,e){this.a=d
this.b=e},
Te:function Te(d,e){this.e=d
this.a=e},
bAi:function bAi(d,e){this.a=d
this.b=e},
bAg:function bAg(d){this.a=d},
bAh:function bAh(d,e){this.a=d
this.b=e},
bAj:function bAj(d){this.a=d},
bAk:function bAk(d){this.a=d},
bAl:function bAl(){},
bAm:function bAm(){},
bAn:function bAn(d){this.a=d},
bAo:function bAo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bAp:function bAp(d,e){this.a=d
this.b=e},
acB:function acB(d,e,f){this.c=d
this.d=e
this.a=f},
cOz(d){var x
switch(d){case F.wC:x=D.buz
break
case F.wy:x=D.bpS
break
case F.wz:x=D.btp
break
case F.wA:x=D.bsR
break
case F.wB:x=D.brh
break
default:x=B.a9
break}return x},
cND(d){switch(d.a){case 1:return B.en
case 0:return B.cB
case 2:return A2.ep
case 3:return B.bg
case 4:return B.fx}}},D,A9,M,N
J=c[1]
A=c[0]
B=c[2]
O=c[225]
P=c[162]
Q=c[215]
R=c[172]
S=c[220]
T=c[222]
U=c[218]
V=c[224]
H=c[205]
W=c[165]
I=c[223]
K=c[157]
F=c[226]
X=c[190]
E=c[123]
Y=c[70]
Z=c[214]
A_=c[171]
G=c[73]
A0=c[213]
A1=c[124]
A2=c[194]
A3=c[142]
A4=c[143]
A5=c[216]
A6=c[217]
A7=c[72]
A8=c[71]
L=c[221]
C=a.updateHolder(c[48],C)
D=c[212]
A9=c[219]
M=c[183]
N=c[178]
C.GM.prototype={
gaF(d){return this.a.a}}
C.aVy.prototype={
gy0(){return B.e.dS(this.b,0,new C.aVz())},
gax3(){var x=this.a
return x===0?0:B.k.ar(this.gy0()/x,0,1)}}
C.JF.prototype={}
C.a31.prototype={
gaF(d){return this.a}}
C.T8.prototype={
H(){return"_BudgetFilter."+this.b}}
C.Xt.prototype={
R(){return new C.a6T(D.a8H)}}
C.a6T.prototype={
ak(){this.aG()
A.iE(new C.by5(this),y.H)},
O9(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$O9=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=u.gV()
q=$.Wt()
p=y.h
o=r.a2(0,q.gaZ(),p).x
if(o==null){x=1
break}t=u.c
t.toString
x=3
return A.d(A.cd(null,new C.bxX(),t,!0,!0,null,y.n),$async$O9)
case 3:s=e
if(s==null){x=1
break}r=r.a2(0,q.gaZ(),p)
q=s.a
p=s.b
t=s.c
r.SB(new G.hd("",o,q,null,s.d,p,t,!1))
case 1:return A.l(v,w)}})
return A.m($async$O9,w)},
u(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gV(),g=h.M($.Ws(),y.b),f=h.M($.N3(),y.d),e=h.M($.Wt(),y.g),d=g.b,a0=d==null?i:C.dd8(d,f.b)
d=A.ii(h.M($.lO(),y.r),y.R)
x=d==null?i:d.b.a
if(x==null)x=A0.py
w=J.dL(x,new C.by_())
h=h.M($.Ay(),y.l)
v=h.gq(h)
u=new C.by3(v==null?X.fX:v)
h=y._
d=A.Y(e.gbre(),h)
for(t=w.a,s=J.cu(t),r=s.gW(t),q=w.b,p=w.$ti.i("fp<1>"),o=new A.fp(r,q,p);o.p();){n=r.gF(r)
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
else{t=B.V.B(0,new A.V(0,A.at(a1,B.bc,y.w).w.r.b,0,0))
s=A.k7(!0,!0,i,"Or\xe7amento",34,20,new A_.qz(j.gaLv(),!1,i))
r=y.p
q=A.a([new C.aHR(a0,i)],r)
p=j.w
if(p===D.a8I)B.e.A(q,A.a([new A.i9("Pagas",new C.ads(d,i),i),new C.TF(d,i)],r))
else if(p===D.a8J)B.e.A(q,A.a([new A.i9("Pendentes",new C.ads(h,i),i),new C.TF(C.cKY(h),i)],r))
else B.e.A(q,A.a([B.cM,new C.awk(a0.b,j.x,new C.by0(j),i),D.bJQ,new C.TF(C.cKY(h),i),Z.a4t,new E.Bv("Gastos e parceiros",!1,new C.by1(j),i)],r))
h=new A.bC(B.aC,i,B.aD,B.C,A.a([A.bn(!1,new A.tq(A.cL(A.a([s,new A.a_(new A.V(20,16,20,120),A.I(q,B.I,B.m,B.q,0,B.w),i)],r),i,t,i,i,!1,B.Z,!1),8,32,i),i,B.V,!1),A.cb(0,new A3.BB(D.aTk,B.e.dl(D.Tm,j.w),new C.by2(j),i),i,i,0,0,i,i)],r),i)}return A.cF(i,B.f2,h,!0,i)}}
C.ads.prototype={
u(d){var x=null
return A.i(A.by(B.e.dS(this.c,0,new C.cd0()),!1),x,x,x,A.as(x,x,$.a4,x,x,x,x,x,x,x,x,14,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)}}
C.aHR.prototype={
u(d){var x,w,v=null,u=this.c,t=B.k.aN(u.gax3()*100),s=u.a,r=s-u.gy0()<0,q=r?"ACIMA DO OR\xc7AMENTO":"AINDA TENS",p=A.by(Math.abs(s-u.gy0()),!1)
s=A.by(s,!1)
x=u.gax3()
u=A.ac(A.i("Gasto "+A.by(u.gy0(),!1),v,v,v,Q.xI,v,v,v),1)
w=""+t
return A.ll(D.btl,A.X(A.a([u,new A.hv(r?w+"% \xb7 acima do or\xe7amento":w+"% \xb7 dentro do or\xe7amento",!0,v)],y.p),B.x,B.m,B.q,0,v,v),q,x,"de "+s,p)}}
C.awk.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.d,p=q||s.c.length<=5,o=s.c,n=p?o:A.hm(o,0,A.jg(5,"count",y.S),A.a6(o).c).bB(0),m=y.p,l=A.a([D.c37,B.Y],m)
for(x=A.hf(n,0,y.C),w=J.aE(x.a),v=x.b,x=new A.cY(w,v,A.r(x).i("cY<1>"));x.p();){u=x.c
u=u>=0?new A.ag(v+u,w.gF(w)):A.aj(A.cl())
t=u.a
u=A.a([new C.awm(u.b,t,r)],m)
if(t!==n.length-1)u.push(B.a5)
B.e.A(l,u)}x=o.length
if(x>5){x=q?"Ver menos":"Ver todas as categorias ("+x+")"
x=A.i(x,r,r,r,A.as(r,r,$.a4,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q?A5.MA:A6.Cl
B.e.A(l,A.a([B.a5,A.b_(A.X(A.a([x,A.aJ(q,$.a4,r,r,18)],m),B.x,B.m,B.q,0,r,r),s.e,r)],m))}return A.I(l,B.I,B.m,B.q,0,B.w)}}
C.awm.prototype={
bf(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=this.e.a,m=n.d,l=y.T,k=e.M(A.cz($.cB(),new C.bAe(),y.B,l),l)
if(k==null)x=B.n7
else{l=e.M($.cAS().$1(k),y.y)
l=l.gq(l)
x=l==null?B.n7:l}l=A.a([],y.s)
for(w=n.c,v=C.cOz(w),u=v.length,t=J.a3(x),s=0;s<u;++s){r=t.h(x,v[s])
if(r!=null)B.e.A(l,r)}q=m===0?0:n.b/m
p=w==null?B.iT:C.cND(w)
w=N.ie(o,22,1)
v=B.fb[B.i.aj(this.f,4)]
u=y.p
n=A.a([A.X(A.a([A.ac(A.i(n.a,1,B.a4,o,B.fJ,o,o,o),1),B.an,A.i(A.by(n.b,!1)+" de "+A.by(m,!1),o,o,o,B.ay,o,o,o)],u),B.x,B.m,B.q,0,o,o)],u)
if(l.length!==0)B.e.A(n,A.a([B.aF,new A.dP(B.c1,o,o,new A8.Xg(l,o),o)],u))
n.push(B.a3)
l=A.T(999)
t=q>1?1:q
r=q>0.85?B.ck:$.a4
n.push(A.eu(l,A.kV(D.aiE,o,6,t,new A.on(r,y.c)),B.aH))
return A.b_(A.E(o,A.X(A.a([new A.hl(p,v,40,o,o),B.at,A.ac(A.I(n,B.I,B.m,B.q,0,B.w),1)],u),B.x,B.m,B.q,0,o,o),B.t,o,o,w,o,o,o,o,B.b8,o,o,o),new C.bAf(this,d),o)}}
C.avS.prototype={
u(d){var x,w,v=null,u=$.a4,t=$.e1.bZ(0.55),s=A.T(18),r=A.T(12),q=this.c,p=q.e
r=A.eu(r,A.aT(p==null?A.nr(A.aJ(B.cB,u,v,v,v),B.v,!0):A.yl(p,144,new C.bx7(u),!1,B.bZ,!1,v,v,v),48,48),B.aH)
p=A.i(q.b,1,B.a4,v,U.Gp,v,v,v)
x=A.aJ(B.dy,u,v,v,14)
w=q.d
q=w>0?q.gNJ()+" \xb7 "+A.by(w,!1):q.gNJ()
w=y.p
return new A.a_(B.kL,A.b_(A.E(v,A.X(A.a([r,B.at,A.ac(A.I(A.a([p,B.dA,A.X(A.a([x,B.ds,new A.eo(1,B.bM,A.i(q,1,B.a4,v,A.as(v,v,u,v,v,v,v,v,v,v,v,13,v,v,B.bd,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),B.x,B.m,B.q,0,v,v)],w),B.I,B.m,B.q,0,B.w),1),A.aJ(B.h2,u,v,v,v)],w),B.x,B.m,B.q,0,v,v),B.t,v,v,new A.L(t,v,v,s,v,v,B.y),v,v,v,v,B.cY,v,v,v),new C.bx8(d),v),v)}}
C.TF.prototype={
bf(d,e){var x,w,v,u,t,s,r,q=this.e
if(q.length===0)return new A.a_(A9.KS,A.I(A.a([D.bPj,B.aq,D.bXb,B.aK,D.c1n],y.p),B.x,B.m,B.q,0,B.w),null)
x=y.p
w=A.a([],x)
for(q=A.hf(q,0,y._),v=J.aE(q.a),u=q.b,q=new A.cY(v,u,A.r(q).i("cY<1>"));q.p();){t={}
s=q.c
s=s>=0?new A.ag(u+s,v.gF(v)):A.aj(A.cl())
t.a=null
r=s.b
t.a=r
B.e.A(w,A.a([new C.ayX(r,new C.bH0(t,d,e),s.a,null),B.a5],x))}return A.I(w,B.x,B.m,B.q,0,B.w)}}
C.ayX.prototype={
u(d){var x,w,v,u,t,s,r,q=null,p=this.c,o=p.r,n=p.e
if(n!=null)x=P.afC(n)
else{n=p.d
x=n==null?B.iT:C.cND(n)}n=p.w
w=!n&&o!=null&&B.i.aT(o.dj(new A.ao(Date.now(),0,!1)).a,864e8)<=30
v=w?new A.L(H.rJ,q,q,A.T(20),B.ap,q,B.y):N.ie(q,20,1)
u=this.e
if(o!=null){u=B.fb[B.i.aj(u,4)]
u=new Y.Yn(o,u,w?B.e_:$.a4,q)}else u=new A.hl(x,B.fb[B.i.aj(u,4)],44,q,q)
t=A.i(p.c,1,B.a4,q,B.fJ,q,q,q)
if(B.f.be(p.a,"booking:"))s=n?"Reserva \xb7 pago na app":"Reserva \xb7 toca para pagar"
else s=n?"Paga \xb7 toca para desfazer":"Pendente \xb7 toca para marcar como paga"
r=y.p
s=A.ac(A.I(A.a([t,B.bb,A.i(s,1,B.a4,q,B.ay,q,q,q)],r),B.I,B.m,B.q,0,B.w),1)
p=A.a([A.i(A.by(p.f,!1),q,q,q,B.fJ,q,q,q)],r)
if(n){n=$.a4.bZ(0.14)
t=A.T(999)
B.e.A(p,A.a([B.aK,A.E(q,A.i("PAGO",q,q,q,A.as(q,q,$.a4,q,q,q,q,q,q,q,q,10,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.t,q,q,new A.L(n,q,q,t,q,q,B.y),q,q,q,q,S.Bq,q,q,q)],r))}return A.b_(A.E(q,A.X(A.a([u,B.at,s,B.an,A.I(p,B.dF,B.m,B.q,0,B.w)],r),B.x,B.m,B.q,0,q,q),B.t,q,q,v,q,q,q,q,B.b8,q,q,q),this.d,q)}}
C.av3.prototype={}
C.KW.prototype={
R(){var x=$.ah()
return new C.av4(new A.aM(B.aj,x),new A.aM(B.aj,x))}}
C.av4.prototype={
m(){var x=this.d,w=$.ah()
x.Z$=w
x.U$=0
x=this.e
x.Z$=w
x.U$=0
this.aa()},
u(d){var x=this,w=null,v=A.at(d,w,y.w).w
return A.ez(A.I(A.a([A.i("Adicionar despesa",w,w,w,A.ak(d).ok.r,w,w,w),B.ai,new M.fL("Despesa",x.d,x.w,w,w,w),B.Y,new M.fL("Valor (\u20ac)",x.e,x.x,B.cS,w,w),B.Y,A4.aTc(!1,"Prazo (opcional)",new C.bvG(x),x.f),B.aq,new A7.Y1(x.r,new C.bvH(x),w),B.ai,new A.f7("Guardar",new C.bvI(x,d),!1,w)],y.p),B.T,B.m,B.a_,0,B.w),new A.V(20,20,20,v.f.d+20),w,B.Z)}}
C.Te.prototype={
GO(d,e,f){return this.aRC(d,e,f)},
aRC(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$GO=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:q=f===0?"":B.k.a8(f,0)
x=3
return A.d(A.cd(null,new C.bAi(s,new A.aM(new A.bR(q,B.aY,B.aI),$.ah())),d,!0,!1,null,y.i),$async$GO)
case 3:p=h
if(p==null||p<0){x=1
break}u=5
x=8
return A.d(e.a2(0,$.Ws().gaZ(),y.x).MB(s.e.a,p),$async$GO)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
if(d.e!=null)d.T(y.q).f.ah(D.bO2)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GO,w)},
bf(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.M($.Ws(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.iq(new A.a5(j,new C.bAj(l),A.a6(j).i("a5<1>")))
x=j}if(x==null)x=l.e
j=e.M($.Wt(),y.g).b
w=A.a6(j).i("a5<1>")
v=A.Y(new A.a5(j,new C.bAk(l),w),w.i("y.E"))
B.e.d4(v,new C.bAl())
j=y.T
u=e.M(A.cz($.cB(),new C.bAm(),y.B,j),j)
t=C.cOz(l.e.c)
if(u==null)s=L.DM
else{j=e.M($.cAT().$1(u),y.k)
j=j.gq(j)
if(j==null)j=L.DM
j=J.dL(j,new C.bAn(t))
s=A.Y(j,j.$ti.i("y.E"))}j=A.at(d,k,y.w).w
w=A.bF(A.E(k,k,B.t,k,k,new A.L(B.aZ,k,k,A.T(2),k,k,B.y),k,4,k,k,k,k,k,40),k,k)
r=A.i(x.a,k,k,k,A.ak(d).ok.r,k,k,k)
q=A.ac(new C.acB("Gasto",A.by(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,B.ai,r,B.aq,A.X(A.a([q,B.aX,A.ac(A.b_(new C.acB("Verba \xb7 tocar para mudar",p===0?"Definir":A.by(p,!1),k),new C.bAo(l,d,e,x),k),1)],o),B.x,B.m,B.q,0,k,k)],o)
if(s.length!==0){w=A.a([B.bH,A.i("Contratado na app",k,k,k,A.ak(d).ok.w,k,k,k),B.a3],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.K)(s),++n)w.push(new C.avS(s[n],k))
B.e.A(p,w)}p.push(B.bH)
p.push(A.i("Despesas",k,k,k,A.ak(d).ok.w,k,k,k))
p.push(B.a3)
w=v.length
if(w===0)p.push(D.bBn)
else for(n=0;n<v.length;v.length===w||(0,A.K)(v),++n){m=v[n]
r=A.i(m.c,k,k,k,B.ef,k,k,k)
q=m.r
q=q==null?k:A.i("At\xe9 "+B.f.aW(B.i.k(A.aV(q)),2,"0")+"/"+B.f.aW(B.i.k(A.aD(q)),2,"0")+"/"+A.aI(q),k,k,k,k,k,k,k)
p.push(A.i8(!1,B.V,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.X(A.a([A.i(A.by(m.f,!1),k,k,k,D.bVu,k,k,k),B.an,new R.G_(m.w,new C.bAp(e,m),k,$.a4,k,k,!1,k,k,k,k,!1,k,k,!1,k,T.a8Y,k)],o),B.x,B.m,B.a_,0,k,k),k))}return A.bn(!0,new A.ev(new A.aK(0,1/0,0,j.a.b*0.8),A.cL(p,k,H.Bo,k,k,!1,B.Z,!0),k),k,B.V,!0)}}
C.acB.prototype={
u(d){var x=null,w=A.T(16)
return A.E(x,A.I(A.a([A.i(this.c,x,x,x,B.ay,x,x,x),B.aK,A.i(this.d,x,x,x,I.a78,x,x,x)],y.p),B.I,B.m,B.q,0,B.w),B.t,x,x,new A.L(B.af,x,x,w,x,x,B.y),x,x,x,x,B.b8,x,x,x)}}
var z=a.updateTypes(["w(hd,hd)","W(W,GM)","H<~>()","KW(N)","H<l0>()","W(W,hd)","Te(N)","z(mC)","z(hd)","z(tf)"])
C.aVz.prototype={
$2(d,e){return d+e.a.b},
$S:z+1}
C.by5.prototype={
$0(){return this.a.gV().a2(0,$.Ws().gaZ(),y.x).WA(0).eq(new C.by4())},
$S:2}
C.by4.prototype={
$1(d){},
$S:13}
C.bxX.prototype={
$1(d){return D.c7r},
$S:z+3}
C.by_.prototype={
$1(d){return d.x!==B.hQ},
$S:76}
C.by3.prototype={
$2(d,e){return W.iQ(d,this.a.oP(e))},
$1(d){return this.$2(d,null)},
$S:1185}
C.by0.prototype={
$0(){var x=this.a
return x.t(new C.bxZ(x))},
$S:0}
C.bxZ.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
C.by1.prototype={
$0(){return C.An(this.a.gV().a2(0,$.cB(),y.B).b.a)},
$S:z+4}
C.by2.prototype={
$1(d){var x=this.a
return x.t(new C.bxY(x,d))},
$S:15}
C.bxY.prototype={
$0(){return this.a.w=D.Tm[this.b]},
$S:0}
C.cfM.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.c_(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.c_(2100,1,1,0,0):x)},
$S:z+0}
C.cd0.prototype={
$2(d,e){return d+e.f},
$S:z+5}
C.bAe.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:29}
C.bAf.prototype={
$0(){return A.cd(B.v,new C.bAd(this.a),this.b,!0,!0,V.np,y.H)},
$S:0}
C.bAd.prototype={
$1(d){return new C.Te(this.a.e.a,null)},
$S:z+6}
C.bx8.prototype={
$0(){var x=this.a
A.aC(x,!1).c7()
A.av(x).b5("/bookings",null,y.X)},
$S:0}
C.bx7.prototype={
$3(d,e,f){return A.nr(A.aJ(B.cB,this.a,null,null,null),B.v,!0)},
$S:1186}
C.bH0.prototype={
$0(){var x,w=this,v=null,u=w.a,t=u.a,s=t.a
if(B.f.be(s,"booking:")){x=B.f.dl(s,":pay:")
u=!t.w&&x>0
t=w.b
if(u)A1.Ar(t,w.c,B.f.bO(s,x+5))
else A.av(t).b5("/bookings",v,y.X)
return}w.c.a2(0,$.Wt().gaZ(),y.h).My(u.a.a)
t=w.b.T(y.q).f
u=u.a
s='"'+u.c
t.ah(A.cV(v,v,v,v,v,B.C,v,A.i(u.w?s+'" marcada como pendente.':s+'" marcada como paga.',v,v,v,v,v,v,v),v,B.a0,v,v,v,v,v,v,v,v,v,v))},
$S:0}
C.bvG.prototype={
$1(d){var x=this.a
return x.t(new C.bvF(x,d))},
$S:155}
C.bvF.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.bvH.prototype={
$1(d){var x=this.a
return x.t(new C.bvE(x,d))},
$S:101}
C.bvE.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bvI.prototype={
$0(){var x,w=this.a,v=B.f.L(w.e.a.a),u=A.fE(A.b4(v,",","."))
w.t(new C.bvD(w,u))
if(w.w!=null||w.x!=null)return
v=A.aC(this.b,!1)
x=B.f.L(w.d.a.a)
u.toString
v.b0(new C.av3(x,u,w.f,w.r))},
$S:0}
C.bvD.prototype={
$0(){var x=this.a
x.w=B.f.L(x.d.a.a).length===0?"A despesa precisa de um t\xedtulo":null
x.x=this.b==null?"Indica um valor v\xe1lido":null},
$S:0}
C.bAi.prototype={
$1(d){var x=null,w=this.b
return new A.fl(A.i("Verba para "+this.a.e.a,x,x,x,x,x,x,x),A.cA(x,B.a9,!0,x,!0,B.C,x,A.cH(),w,x,x,x,x,x,2,D.ayB,B.X,!0,x,!0,x,!1,x,B.aG,x,x,x,x,B.ih,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,B.av,x,x,x,x,x,x,x,x,x,x,x,x,!0,B.au,x,B.b6,x,x,x,x),A.a([A.c7(B.dc,x,x,new C.bAg(d),x,x),A.bQ(B.eY,new C.bAh(d,w),x)],y.p),x)},
$S:24}
C.bAg.prototype={
$0(){return A.aC(this.a,!1).c7()},
$S:0}
C.bAh.prototype={
$0(){var x=A.aC(this.a,!1),w=B.f.L(this.b.a.a)
w=A.b4(w," ","")
return x.b0(A.fE(A.b4(w,",",".")))},
$S:0}
C.bAj.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+7}
C.bAk.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+8}
C.bAl.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.c_(2100,1,1,0,0)
x=e.r
return w.bC(0,x==null?A.c_(2100,1,1,0,0):x)},
$S:z+0}
C.bAm.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:29}
C.bAn.prototype={
$1(d){return B.e.n(this.a,d.a)},
$S:z+9}
C.bAo.prototype={
$0(){var x=this
return x.a.GO(x.b,x.c,x.d.d)},
$S:0}
C.bAp.prototype={
$1(d){return this.a.a2(0,$.Wt().gaZ(),y.h).My(this.b.a)},
$S:122};(function installTearOffs(){var x=a._instance_0u
x(C.a6T.prototype,"gaLv","O9",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.F,[C.GM,C.aVy,C.JF,C.a31,C.av3])
x(A.cD,[C.aVz,C.cfM,C.cd0,C.bAl])
w(C.T8,A.fq)
w(C.Xt,A.dy)
w(C.a6T,A.dw)
x(A.bI,[C.by5,C.by0,C.bxZ,C.by1,C.bxY,C.bAf,C.bx8,C.bH0,C.bvF,C.bvE,C.bvI,C.bvD,C.bAg,C.bAh,C.bAo])
x(A.bv,[C.by4,C.bxX,C.by_,C.by3,C.by2,C.bAe,C.bAd,C.bx7,C.bvG,C.bvH,C.bAi,C.bAj,C.bAk,C.bAm,C.bAn,C.bAp])
x(A.M,[C.ads,C.aHR,C.awk,C.avS,C.ayX,C.acB])
x(A.ei,[C.awm,C.TF,C.Te])
w(C.KW,A.G)
w(C.av4,A.a0)})()
A.bx(b.typeUniverse,JSON.parse('{"Xt":{"G":[],"e":[],"f":[]},"KW":{"G":[],"e":[],"f":[]},"Te":{"G":[],"e":[],"f":[]},"a6T":{"a0":["Xt"]},"ads":{"M":[],"e":[],"f":[]},"aHR":{"M":[],"e":[],"f":[]},"awk":{"M":[],"e":[],"f":[]},"awm":{"G":[],"e":[],"f":[]},"avS":{"M":[],"e":[],"f":[]},"TF":{"G":[],"e":[],"f":[]},"ayX":{"M":[],"e":[],"f":[]},"av4":{"a0":["KW"]},"acB":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.v
return{c:x("on<O?>"),l:x("aG<fb>"),k:x("aG<t<tf>>"),r:x("aG<t<jk>>"),y:x("aG<a2<c,t<c>>>"),x:x("xu"),b:x("tk"),d:x("qH"),C:x("GM"),_:x("hd"),h:x("xT"),g:x("tu"),D:x("q<GM>"),u:x("q<hd>"),t:x("q<a2<c,@>>"),E:x("q<a31>"),v:x("q<JF>"),s:x("q<c>"),p:x("q<e>"),R:x("t<jk>"),w:x("d8"),e:x("l0"),B:x("ec"),n:x("av3"),q:x("dD"),i:x("W"),S:x("w"),X:x("F?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aiE=new A.O(1,0.9333333333333333,0.9490196078431372,0.9215686274509803,B.A)
D.ayB=new A.dz(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.atR=new K.jM("Pagas")
D.atS=new K.jM("Pendentes")
D.aTk=x([I.M8,D.atR,D.atS],A.v("q<jM>"))
D.a8H=new C.T8(0,"all")
D.a8I=new C.T8(1,"paid")
D.a8J=new C.T8(2,"pending")
D.Tm=x([D.a8H,D.a8I,D.a8J],A.v("q<T8>"))
D.bpS=x(["catering"],y.s)
D.brh=x(["flowers_decor"],y.s)
D.bsR=x(["music_dj","bands_musicians"],y.s)
D.btl=x([B.mF,O.p4,B.ch],A.v("q<aB>"))
D.btp=x(["photography"],y.s)
D.buz=x(["venue"],y.s)
D.axU=new A.oA("Ainda n\xe3o h\xe1 despesas nesta categoria.",B.hs,null)
D.bBn=new A.a_(B.jB,D.axU,null)
D.bJQ=new A.i9("Pagamentos pr\xf3ximos",null,null)
D.bZ8=new A.J("N\xe3o foi poss\xedvel guardar a verba.",null,null,null,null,null,null,null,null,null,null)
D.bO2=new A.cc(D.bZ8,null,null,null,null,null,null,null,null,null,null,null,null,B.a0,!1,null,null,null,B.C,null)
D.byp=new A.Cf("assets/mascot/duo_budget.png",1,"budget")
D.bPj=new A.uk(D.byp,170,null)
D.bVu=new A.C(!0,null,null,null,null,null,null,B.bl,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bXb=new A.J("Sem despesas nesta vista",null,B.co,B.aa,null,null,null,null,null,null,null)
D.c1n=new A.J("Usa o + para registar a primeira.",null,B.xJ,B.aa,null,null,null,null,null,null,null)
D.c37=new A.J("Categorias",null,B.cN,null,null,null,null,null,null,null,null)
D.c7r=new C.KW(null)})()};
(a=>{a["NFrbmtEH6/dwogPxTXHozp4ZABE="]=a.current})($__dart_deferred_initializers__);