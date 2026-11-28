((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,K,L,F,G,H,C={Eb:function Eb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Lh:function Lh(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cKx:function cKx(){},cKw:function cKw(){},
d5_(d){return B.e.hN(D.X8,new C.bml(d),new C.bmm())},
cQ_(d){var x=0,w=A.n(y.H)
var $async$cQ_=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.HD(A.T(["action","schedule","interval",d.c],y.N,y.A)),$async$cQ_)
case 2:return A.l(null,w)}})
return A.m($async$cQ_,w)},
tF:function tF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bml:function bml(d){this.a=d},
bmm:function bmm(){},
dsq(){return new C.F7(null)},
dzx(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
F7:function F7(d){this.a=d},
aKs:function aKs(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
cg5:function cg5(d,e){this.a=d
this.b=e},
cg3:function cg3(d){this.a=d},
cg4:function cg4(d){this.a=d},
cg6:function cg6(d){this.a=d},
cg7:function cg7(d){this.a=d},
cg2:function cg2(d){this.a=d},
cgd:function cgd(d){this.a=d},
cg9:function cg9(d){this.a=d},
cgc:function cgc(){},
cgb:function cgb(d){this.a=d},
cg8:function cg8(d){this.a=d},
cga:function cga(d){this.a=d},
cg1:function cg1(d){this.a=d},
cg0:function cg0(){},
cfW:function cfW(d,e){this.a=d
this.b=e},
cfX:function cfX(d,e){this.a=d
this.b=e},
cfY:function cfY(d){this.a=d},
cfZ:function cfZ(d){this.a=d},
cg_:function cg_(d,e){this.a=d
this.b=e},
rA:function rA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Hq:function Hq(d,e){this.c=d
this.a=e},
aHT:function aHT(d){this.a=d},
c4p:function c4p(){},
aQS:function aQS(d){this.a=d},
czI:function czI(){},
Zo:function Zo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKR:function aKR(d,e,f){this.c=d
this.e=e
this.a=f},
Zk:function Zk(d,e,f){this.c=d
this.d=e
this.a=f},
Xv:function Xv(d,e,f){this.c=d
this.d=e
this.a=f},
OK:function OK(d,e){this.c=d
this.a=e},
aJg:function aJg(){this.d=$
this.c=this.a=null},
c8S:function c8S(d,e){this.a=d
this.b=e},
c8R:function c8R(d,e){this.a=d
this.b=e},
c8T:function c8T(d){this.a=d},
c8U:function c8U(d,e){this.a=d
this.b=e},
cEt:function cEt(){},
aKd:function aKd(d){this.a=d},
amD:function amD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_c(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$a_c=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.akR(),$async$a_c)
case 3:u=$.S()
t=u.b
t===$&&A.b()
s=t.gbD().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.R("partner_profiles").ao(0,"business_name").W("id",r).d3(),$async$a_c)
case 4:q=e
t=q==null?null:J.i(q,"business_name")
p=H
o=J.cA(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.R("bookings").ao(0,"*, events(partner_name_1, partner_name_2, location), proposals(title)").W("partner_id",r).da(0,"event_date",!1),$async$a_c)
case 5:m=e
x=6
return A.d(u.b.R("payments").ao(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("partner_id",r).Gq("booking_id","is",null).tK(0,"created_at"),$async$a_c)
case 6:v=p.cX5(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$a_c,w)}},D,M,N,O,P,Q,I
J=c[1]
A=c[0]
B=c[2]
E=c[123]
K=c[93]
L=c[210]
F=c[106]
G=c[271]
H=c[133]
C=a.updateHolder(c[38],C)
D=c[354]
M=c[109]
N=c[192]
O=c[326]
P=c[344]
Q=c[342]
I=c[149]
C.Eb.prototype={}
C.Lh.prototype={}
C.tF.prototype={
I(){return"PayoutMode."+this.b}}
C.F7.prototype={
P(){return new C.aKs()}}
C.aKs.prototype={
EO(d){return this.bn3(d)},
bn3(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$EO=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fR(!0,new C.cg5(r,d),i,y.y),$async$EO)
case 3:if(f!==!0||r.c==null){x=1
break}r.p(new C.cg6(r))
u=5
x=8
return A.d(K.aVe(d.Q),$async$EO)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gS().ak($.zi())
p=q.c
i=r.c
i.toString
n=A.aM(q.b/100,!0)
m=A.aM(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+B.f.aY(B.j.k(A.aH(p)),2,"0")+"/"+B.f.aY(B.j.k(A.ax(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.a3(L.o0,l),new A.a3(G.o_,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bSr],y.O)
A.ai(i).au("/pay/done",new M.a60("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.x0){o=i
i=r.c
if(i!=null)i.O(y.q).f.a3(A.c6(null,null,null,null,null,B.z,null,A.h(F.aUK(o.a),null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a3(D.bZH)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.p(new C.cg7(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$EO,w)},
Ky(d){return this.bdx(d)},
bdx(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Ky=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=C.d5_(d.ax)
n=s.c
n.toString
x=3
return A.d(A.c9(null,new C.cg2(o),!1,n,!0,!1,null,y.T),$async$Ky)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(C.cQ_(r),$async$Ky)
case 8:s.gS().ak($.zi())
n=s.c
if(n!=null)n.O(y.q).f.a3(A.c6(null,null,null,null,null,B.z,null,A.h("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.x0){q=n
n=s.c
if(n!=null)n.O(y.q).f.a3(A.c6(null,null,null,null,null,B.z,null,A.h(F.aUK(q.a),null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a3(N.a9i)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ky,w)},
u(d){var x=this,w=null,v=x.gS().H($.zi(),y.I),u=$.at,t=D.asS.B(0,new A.a0(0,A.aw(d,B.b4,y.w).w.r.b,0,0)),s=y.p
return A.cP(w,B.bz,A.bC(!0,A.yc(A.d0(A.a([new A.Q(D.aug,A.O(A.a([new A.EM(new C.cg9(d),w)],s),B.w,B.h,B.l,0,w,w),w),D.bMg,new A.Q(B.bU,A.hp(v,new C.cga(x),new C.cgb(x),new C.cgc(),!1,!0,!1),w),D.bMu,D.bLE],s),w,t,w,w,!1,B.a2,!1),u,new C.cgd(x)),w,B.a_,!1),!0,w)},
b9j(d){var x=null,w=A.B(x,D.apY,B.r,x,x,new A.M(B.t,x,x,A.X(22),x,x,B.y),x,x,x,B.bj,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.A(A.a([w,D.bVg,D.cqj,B.ac,D.cq4,B.ac,D.cqb,B.bi,new C.aKR(v,new C.cg1(this),x)],y.p),B.G,B.h,B.l,0,B.u)},
aRK(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new C.cg0(),g=A.X(22),f=A.X(999)
f=A.B(l,A.h(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,B.io,l,l,l),B.r,l,l,new A.M(B.d1,l,l,f,l,l,B.y),l,l,l,B.dz,l,l,l)
x=d.Q
w=x/100
v=A.h(A.aM(w,!0),l,l,l,l,B.jc,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aM(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+C.dzx(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([f,B.ac,D.ccH,B.aE,v,B.T,A.h(B.e.a2(u," "),l,l,l,l,B.he,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aM(w,!0)
B.e.n(u,A.a([B.aC,new A.jK(f,i?new C.cfW(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aM(w,!0):"Sem saldo para levantar"
B.e.n(u,A.a([B.aC,new A.jK(j,i?new C.cfX(m,d):l,!1,!1,l)],q))}j=A.a([A.B(l,A.A(u,B.H,B.h,B.l,0,B.u),B.r,l,l,new A.M(B.t,l,l,g,B.bh,l,B.y),l,l,l,B.bj,l,l,l),D.coV],q)
if(d.gGp())B.e.n(j,A.a([B.R,new C.amD("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new C.cfY(m),B.fj,l)],q))
j.push(h.$1("A caminho"))
j.push(D.cnM)
j.push(h.$1("Por cobrar"))
j.push(D.cqy)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.cpp)
else for(p=0;p<x.length;x.length===w||(0,A.K)(x),++p){o=x[p]
v=A.aM(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":B.f.aY(B.j.k(A.aH(n)),2,"0")+"/"+B.f.aY(B.j.k(A.ax(n)),2,"0")+"/"+A.aD(n)
f.push(new C.rA(v,u,o.gQ8(),l))}j.push(new C.Hq(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gGp()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new C.Hq(A.a([new C.rA("Dados e IBAN",l,f,new C.cfZ(m)),new C.rA("Modo de levantamento",l,C.d5_(t).d,new C.cg_(m,d))],g),l))
return A.A(j,B.G,B.h,B.l,0,B.u)}}
C.rA.prototype={}
C.Hq.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.X(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.eB(x,0,y.z),v=J.aq(w.a),u=w.b,w=new A.c0(v,u,A.u(w).i("c0<1>"));w.t();){t=w.c
t=t>=0?new A.a3(u+t,v.gE(v)):A.aj(A.c3())
s=t.b
r=s.d
t=t.a<x.length-1?Q.mY:o
q=A.a([A.h(s.a,o,o,o,o,B.ae,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.hh,o,o,o))
q=A.a([new A.bP(1,B.aw,A.A(q,B.H,B.bW,B.l,0,B.u),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.jb,o,o,o))
if(r!=null)B.e.n(q,A.a([B.bn,P.Qy],m))
l.push(A.cW(B.bV,A.B(o,A.O(q,B.w,B.h,B.l,0,o,o),B.r,o,B.d9,t,o,o,o,o,o,o,o),B.Z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,B.aV))}return A.B(o,A.A(l,B.w,B.h,B.l,0,B.u),B.r,o,o,new A.M(B.t,o,o,n,o,o,B.y),o,o,o,B.d2,o,o,o)}}
C.aHT.prototype={
bg(d,e){var x,w,v,u,t,s,r=null,q=e.H($.cSy(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bAj
w=new C.c4p()
if(x.length===0){q=q?r:p.e
return new C.Hq(A.a([(q==null?0:q)>0.009?new C.rA("Pago, por libertar",r,A.aM(p.e,!1),r):D.cpq],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.K)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.e0()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.e0()))}q.push(new C.rA(t.a,s,A.aM(t.c,!0),r))}return new C.Hq(q,r)}}
C.aQS.prototype={
bg(d,e){var x,w,v=null,u=e.H($.cSy(),y.Q),t=u.gv(u)
u=e.H($.d_J(),y.l)
x=u.gv(u)
if(x==null)x=B.f9
u=t==null
w=u?v:t.c
w=A.aM(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new C.rA("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new C.rA("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aM(u==null?0:u,!1),v)],y.S)
return A.A(A.a([new C.Hq(u,v),B.T,A.h("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.MR(new C.czI())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,B.he,v,v,v)],y.p),B.G,B.h,B.l,0,B.u)}}
C.Zo.prototype={
u(d){var x=this,w=null,v=I.cRM(w,22,1),u=y.p
return A.B(w,A.O(A.a([A.VO(x.d,B.Wx[B.j.ap(x.c,4)]),B.af,A.a4(A.A(A.a([A.h(x.e,w,w,w,w,B.eI,w,w,w),B.b1,A.h(x.f,w,w,w,w,B.aak,w,w,w)],u),B.H,B.h,B.l,0,B.u),1)],u),B.w,B.h,B.l,0,w,w),B.r,w,w,v,w,w,w,B.cz,w,w,w)}}
C.aKR.prototype={
u(d){var x=null,w=A.cq(B.A,B.A.cc(0.35),B.t,B.t,x,x,B.ad,x,x,B.p8),v=A.a([],y.p)
v.push(new A.de(1,B.bc,A.h(this.c,1,B.a3,x,x,x,x,x,x),x))
return A.aG(A.bD(A.O(v,B.w,B.h,B.K,0,x,x),this.e,w),54,x)}}
C.Zk.prototype={
u(d){var x=null
return A.O(A.a([A.b2(this.c,$.at,x,x,18),B.ak,A.a4(A.h(this.d,x,x,x,x,B.IU,x,x,x),1)],y.p),B.w,B.h,B.l,0,x,x)}}
C.Xv.prototype={
u(d){var x=null,w=I.cRM(x,22,1)
return A.B(x,A.A(A.a([A.h(this.c,x,x,x,x,B.kY,B.a6,x,x),A.cu(B.tt,x,x,this.d,x,x)],y.p),B.w,B.h,B.l,0,B.u),B.r,x,x,w,x,x,x,B.bj,x,x,x)}}
C.OK.prototype={
P(){return new C.aJg()}}
C.aJg.prototype={
gbhT(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.X8[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.at:m
s=u===w?2:1
r=new A.b4(18,18)
if(t==null)t=m
else{q=new A.bc(t,s,B.aj,-1)
t=new A.dS(q,q,q,q)}s=w===D.a2B?D.aCu:B.Ei
s=A.b2(s,$.at,m,m,m)
p=A.A(A.a([A.h(w.d,m,m,m,m,B.eI,m,m,m),A.h(w.e,m,m,m,m,B.bd,m,m,m)],l),B.H,B.h,B.l,0,B.u)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aCY:D.aCZ
B.e.n(k,A.a([A.cW(m,A.fu(m,A.O(A.a([s,B.af,new A.bP(1,B.aw,p,m),A.b2(o,u===w?$.at:B.bD,m,m,m)],l),B.w,B.h,B.l,0,m,m),m,B.aN,new A.M(B.t,m,t,new A.ch(r,r,r,r),B.bh,m,B.y),B.dm,m,m,m,B.dT,m),B.Z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.c8S(n,w),m,m,m,m,m,m,!1,B.aV),B.T],l))}return new A.eR(D.cfu,A.A(k,B.w,B.h,B.K,0,B.u),A.a([A.cu(B.cP,m,m,new C.c8T(d),m,m),A.bD(B.dw,new C.c8U(n,d),m)],l),m)}}
C.aKd.prototype={
bg(d,e){var x=null,w=e.H($.dj_(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return B.ar
return new A.Q(B.kx,A.qk(A.h("Taxas de servi\xe7o de reservas que cancelaste: "+A.aM(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,B.IG,x,x,x),B.t,B.dT,14,B.fj),x)}}
C.amD.prototype={
u(d){var x=this,w=null,v=x.f,u=A.a4(A.h(x.c,2,B.a3,w,w,B.dM,w,w,w),1),t=A.X(16)
return A.cW(B.bV,A.qk(A.O(A.a([new A.I3(v,w),B.ak,u,B.ak,A.B(B.L,A.h(x.d,w,w,w,w,B.kX,w,w,w),B.r,w,w,new A.M(B.A,w,w,t,w,w,B.y),w,32,w,B.cX,w,w,w)],y.p),B.w,B.h,B.l,0,w,w),B.t,B.NG,14,v),B.Z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,B.aV)}}
var z=a.updateTypes(["F<Lh>(au)","v(Eb,Eb)","x(tF)","tF()","OK(N)","Xv(J,bX)","e(mD)","F<lM>()"])
C.cKx.prototype={
$1(d){return this.aGE(d)},
aGE(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.Cu(b6)
b2=null
b3=!0
u=4
s=$.S().b
s===$&&A.b()
x=7
return A.d(s.R("bookings").ao(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").W("partner_id",b1).ep("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 7:b2=b8
u=2
x=6
break
case 4:u=3
b4=t.pop()
x=A.a9(b4) instanceof A.cT?8:10
break
case 8:b3=!1
u=12
s=$.S().b
s===$&&A.b()
x=15
return A.d(s.R("bookings").ao(0,"total_amount, status, payments(type, status, amount, released_at)").W("partner_id",b1).ep("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 15:b2=b8
u=3
x=14
break
case 12:u=11
b5=t.pop()
x=A.a9(b5) instanceof A.cT?16:18
break
case 16:s=$.S().b
s===$&&A.b()
x=19
return A.d(s.R("bookings").ao(0,"total_amount, status, payments(type, status, amount)").W("partner_id",b1).ep("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 19:b2=b8
x=17
break
case 18:throw b5
case 17:x=14
break
case 11:x=3
break
case 14:x=9
break
case 10:throw b4
case 9:x=6
break
case 3:x=2
break
case 6:q=A.a([],y.b)
for(s=y.a,p=J.bl(b2,s),o=A.u(p),p=new A.al(p,p.gA(p),o.i("al<V.E>")),n=y.h,m=y.g,o=o.i("V.E"),l=0,k=0,j=0,i=0;p.t();){h=p.d
if(h==null)h=o.a(h)
g=J.a7(h)
f=A.dw(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bl(e==null?B.an:e,s)
d=A.u(e)
e=new A.al(e,e.gA(e),d.i("al<V.E>"))
d=d.i("V.E")
a0=0
a1=0
while(e.t()){a2=e.d
if(a2==null)a2=d.a(a2)
a3=J.a7(a2)
a4=A.dw(a3.h(a2,"amount"))
if(J.o(a3.h(a2,"status"),"paid"))a0+=a4
if(J.o(a3.h(a2,"status"),"paid")&&a3.az(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.D(a3.h(a2,"paid_at"))
a7=A.dq(a6==null?"":a6)
a6=A.D(g.h(h,"event_date"))
a8=A.dq(a6==null?"":a6)
a6=A.cXa(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.e5(1728e8)
else a9=a8==null?null:a8.e5(2592e8)
q.push(new C.Eb(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}B.e.cO(q,new C.cKw())
v=new C.Lh(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
C.cKw.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bB(9999,1,1,0,0)
x=e.d
return w.bE(0,x==null?A.bB(9999,1,1,0,0):x)},
$S:z+1}
C.bml.prototype={
$1(d){return d.c===this.a},
$S:z+2}
C.bmm.prototype={
$0(){return D.a2C},
$S:z+3}
C.cg5.prototype={
$1(d){var x,w=null,v=this.b,u=A.h(A.aM(v.Q/100,!0),w,w,w,w,D.c4v,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eR(D.cf5,A.A(A.a([u,B.R,new C.Zk(G.o_,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),B.T,D.cpE,B.T,D.cpD],x),B.G,B.h,B.K,0,B.u),A.a([A.cu(B.cP,w,w,new C.cg3(d),w,w),A.bD(D.cgf,new C.cg4(d),w)],x),w)},
$S:18}
C.cg3.prototype={
$0(){return A.am(this.a,!1).ad(!1)},
$S:0}
C.cg4.prototype={
$0(){return A.am(this.a,!1).ad(!0)},
$S:0}
C.cg6.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cg7.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cg2.prototype={
$1(d){return new C.OK(this.a,null)},
$S:z+4}
C.cgd.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gS()
t=$.zi()
u.ak(t)
u.ak($.cSy())
x=2
return A.d(u.a0(0,t.gef(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
C.cg9.prototype={
$0(){var x=this.a,w=A.ai(x).c
w===$&&A.b()
return w.jf()?A.ai(x).ad(null):A.ai(x).bQ(0,"/partner-home",null)},
$S:0}
C.cgc.prototype={
$0(){return new A.Q(new A.a0(40,40,40,40),B.a91,null)},
$S:86}
C.cgb.prototype={
$2(d,e){var x=d instanceof E.x0?F.aUK(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new C.Xv(x,new C.cg8(this.a),null)},
$S:z+5}
C.cg8.prototype={
$0(){return this.a.gS().ak($.zi())},
$S:0}
C.cga.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aRK(d):w.b9j(d)},
$S:z+6}
C.cg1.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).au("/partner-payments/setup",null,y.X)},
$S:0}
C.cg0.prototype={
$1(d){return new A.Q(D.asG,new A.kq(d,null),null)},
$S:268}
C.cfW.prototype={
$0(){return this.a.EO(this.b)},
$S:0}
C.cfX.prototype={
$0(){return this.a.EO(this.b)},
$S:0}
C.cfY.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).au("/partner-payments/setup",null,y.X)},
$S:0}
C.cfZ.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).au("/partner-payments/setup",null,y.X)},
$S:0}
C.cg_.prototype={
$0(){return this.a.Ky(this.b)},
$S:0}
C.c4p.prototype={
$1(d){return B.f.aY(B.j.k(A.aH(d)),2,"0")+"/"+B.f.aY(B.j.k(A.ax(d)),2,"0")},
$S:131}
C.czI.prototype={
$1(d){return A.aM(d,!1)},
$S:162}
C.c8S.prototype={
$0(){var x=this.a
return x.p(new C.c8R(x,this.b))},
$S:0}
C.c8R.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.c8T.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0}
C.c8U.prototype={
$0(){return A.am(this.b,!1).ad(this.a.gbhT())},
$S:0}
C.cEt.prototype={
$1(d){return this.aFn(d)},
aFn(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.S().b
p===$&&A.b()
x=7
return A.d(p.R("partner_charges").ao(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.aq(s);p.t();){q=p.gE(p)
o=r
n=A.aL(J.i(q,"amount"))
if(n==null)n=0
m=A.aL(J.i(q,"settled_amount"))
r=o+(n-(m==null?0:m))}p=r
v=p
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
v=0
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:180};(function installTearOffs(){var x=a._static_0
x(C,"dHv","a_c",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[C.Eb,C.Lh,C.rA])
x(A.bw,[C.cKx,C.bml,C.cg5,C.cg2,C.cga,C.cg0,C.c4p,C.czI,C.cEt])
x(A.cO,[C.cKw,C.cgb])
w(C.tF,A.f7)
x(A.bQ,[C.bmm,C.cg3,C.cg4,C.cg6,C.cg7,C.cgd,C.cg9,C.cgc,C.cg8,C.cg1,C.cfW,C.cfX,C.cfY,C.cfZ,C.cg_,C.c8S,C.c8R,C.c8T,C.c8U])
w(C.F7,A.dC)
w(C.aKs,A.dy)
x(A.H,[C.Hq,C.Zo,C.aKR,C.Zk,C.Xv,C.amD])
x(A.eq,[C.aHT,C.aQS,C.aKd])
w(C.OK,A.G)
w(C.aJg,A.Z)})()
A.bn(b.typeUniverse,JSON.parse('{"Xv":{"H":[],"e":[],"f":[]},"OK":{"G":[],"e":[],"f":[]},"F7":{"G":[],"e":[],"f":[]},"aKs":{"Z":["F7"]},"Hq":{"H":[],"e":[],"f":[]},"aHT":{"G":[],"e":[],"f":[]},"aQS":{"G":[],"e":[],"f":[]},"Zo":{"H":[],"e":[],"f":[]},"aKR":{"H":[],"e":[],"f":[]},"Zk":{"H":[],"e":[],"f":[]},"aJg":{"Z":["OK"]},"aKd":{"G":[],"e":[],"f":[]},"amD":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{I:x("ay<mD>"),l:x("ay<fa>"),Q:x("ay<Lh>"),Z:x("ay<R>"),P:x("F<mD>"),b:x("r<Eb>"),O:x("r<+(aV,c)>"),s:x("r<c>"),p:x("r<e>"),S:x("r<rA>"),a:x("a5<c,@>"),w:x("df"),L:x("Lh"),T:x("tF"),e:x("lM"),N:x("c"),z:x("rA"),q:x("dm"),y:x("x"),i:x("R"),A:x("@"),g:x("t<@>?"),h:x("a5<c,@>?"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cim=new A.C("Recebe pagamentos na app",null,B.ip,null,null,null,null,null,null,null,null)
D.cek=new A.C("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,B.tq,null,null,null,null,null,null,null,null)
D.bDW=x([D.cim,B.aE,D.cek],y.p)
D.apY=new A.jg(B.a2,B.h,B.l,B.H,null,B.u,null,0,D.bDW,null)
D.asG=new A.a0(0,20,0,12)
D.asS=new A.a0(0,8,0,40)
D.aug=new A.a0(20,4,20,0)
D.aCu=new A.aV(57389,"HeroiconsSolid",null,!1)
D.aCY=new A.aV(58627,"MaterialIcons",null,!1)
D.aCZ=new A.aV(58628,"MaterialIcons",null,!1)
D.bAj=x([],y.b)
D.a2B=new C.tF("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a2C=new C.tF("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bNt=new C.tF("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bNs=new C.tF("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.X8=x([D.a2B,D.a2C,D.bNt,D.bNs],A.w("r<tF>"))
D.aAL=new H.DL("Lucros e clientes",!0,C.dHv(),null)
D.bLE=new A.Q(B.bU,D.aAL,null)
D.c9s=new A.C("Pagamentos",null,B.hj,null,null,null,null,null,null,null,null)
D.bMg=new A.Q(B.at,D.c9s,null)
D.bVe=new A.vT("Exportar",null,null)
D.bMu=new A.Q(B.bU,D.bVe,null)
D.bSr=new A.a3(B.hD,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bVg=new A.vT("Como funciona",null,null)
D.ciO=new A.C("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZH=new A.bG(D.ciO,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.c4v=new A.P(!0,B.A,null,null,null,null,36,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccH=new A.C("Dispon\xedvel para receber",null,B.hh,null,null,null,null,null,null,null,null)
D.cf5=new A.C("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.cfu=new A.C("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.cgf=new A.C("Levantar",null,null,null,null,null,null,null,null,null,null)
D.cnM=new C.aHT(null)
D.coV=new C.aKd(null)
D.cpp=new C.rA("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.cpq=new C.rA("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.cpD=new C.Zk(B.vB,"Sem custos de levantamento",null)
D.cpE=new C.Zk(B.hD,"Chega em 1 a 3 dias \xfateis",null)
D.cq4=new C.Zo(1,B.eg,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.cqb=new C.Zo(2,G.o_,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.cqj=new C.Zo(0,O.Pe,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.cqy=new C.aQS(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWx","cSy",()=>A.eG(new C.cKx(),null,!1,null,null,y.L))
x($,"dTB","dj_",()=>B.bX.$1$1(new C.cEt(),y.i))})()};
(a=>{a["UG1pJG/mRMsz8KBJIhdqD/u4B10="]=a.current})($__dart_deferred_initializers__);