((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,K,L,F,G,H,C={Ec:function Ec(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Lh:function Lh(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cKH:function cKH(){},cKG:function cKG(){},
d59(d){return B.e.hN(D.X9,new C.bmm(d),new C.bmn())},
cQ9(d){var x=0,w=A.n(y.H)
var $async$cQ9=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.HE(A.T(["action","schedule","interval",d.c],y.N,y.A)),$async$cQ9)
case 2:return A.l(null,w)}})
return A.m($async$cQ9,w)},
tG:function tG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bmm:function bmm(d){this.a=d},
bmn:function bmn(){},
dsA(){return new C.F8(null)},
dzI(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
F8:function F8(d){this.a=d},
aKt:function aKt(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
cg6:function cg6(d,e){this.a=d
this.b=e},
cg4:function cg4(d){this.a=d},
cg5:function cg5(d){this.a=d},
cg7:function cg7(d){this.a=d},
cg8:function cg8(d){this.a=d},
cg3:function cg3(d){this.a=d},
cge:function cge(d){this.a=d},
cga:function cga(d){this.a=d},
cgd:function cgd(){},
cgc:function cgc(d){this.a=d},
cg9:function cg9(d){this.a=d},
cgb:function cgb(d){this.a=d},
cg2:function cg2(d){this.a=d},
cg1:function cg1(){},
cfX:function cfX(d,e){this.a=d
this.b=e},
cfY:function cfY(d,e){this.a=d
this.b=e},
cfZ:function cfZ(d){this.a=d},
cg_:function cg_(d){this.a=d},
cg0:function cg0(d,e){this.a=d
this.b=e},
rB:function rB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Hr:function Hr(d,e){this.c=d
this.a=e},
aHU:function aHU(d){this.a=d},
c4q:function c4q(){},
aQT:function aQT(d){this.a=d},
czS:function czS(){},
Zo:function Zo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKS:function aKS(d,e,f){this.c=d
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
aJh:function aJh(){this.d=$
this.c=this.a=null},
c8T:function c8T(d,e){this.a=d
this.b=e},
c8S:function c8S(d,e){this.a=d
this.b=e},
c8U:function c8U(d){this.a=d},
c8V:function c8V(d,e){this.a=d
this.b=e},
cED:function cED(){},
aKe:function aKe(d){this.a=d},
amE:function amE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_c(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$a_c=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.akS(),$async$a_c)
case 3:u=$.S()
t=u.b
t===$&&A.b()
s=t.gbD().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.R("partner_profiles").an(0,"business_name").W("id",r).d0(),$async$a_c)
case 4:q=e
t=q==null?null:J.i(q,"business_name")
p=H
o=J.cA(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.R("bookings").an(0,"*, events(partner_name_1, partner_name_2, location), proposals(title)").W("partner_id",r).d4(0,"event_date",!1),$async$a_c)
case 5:m=e
x=6
return A.d(u.b.R("payments").an(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("partner_id",r).Gq("booking_id","is",null).tK(0,"created_at"),$async$a_c)
case 6:v=p.cXf(o,n,m,e,!0)
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
C.Ec.prototype={}
C.Lh.prototype={}
C.tG.prototype={
I(){return"PayoutMode."+this.b}}
C.F8.prototype={
P(){return new C.aKt()}}
C.aKt.prototype={
EO(d){return this.bn7(d)},
bn7(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$EO=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fR(!0,new C.cg6(r,d),i,y.y),$async$EO)
case 3:if(f!==!0||r.c==null){x=1
break}r.p(new C.cg7(r))
u=5
x=8
return A.d(K.aVf(d.Q),$async$EO)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gS().ak($.zi())
p=q.c
i=r.c
i.toString
n=A.aM(q.b/100,!0)
m=A.aM(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+B.f.aY(B.j.k(A.aI(p)),2,"0")+"/"+B.f.aY(B.j.k(A.ax(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.a3(L.o0,l),new A.a3(G.o_,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bSs],y.O)
A.ai(i).au("/pay/done",new M.a60("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.x0){o=i
i=r.c
if(i!=null)i.O(y.q).f.a3(A.c6(null,null,null,null,null,B.z,null,A.h(F.aUL(o.a),null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a3(D.bZI)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.p(new C.cg8(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$EO,w)},
Ky(d){return this.bdB(d)},
bdB(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Ky=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=C.d59(d.ax)
n=s.c
n.toString
x=3
return A.d(A.c9(null,new C.cg3(o),!1,n,!0,!1,null,y.T),$async$Ky)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(C.cQ9(r),$async$Ky)
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
if(n!=null)n.O(y.q).f.a3(A.c6(null,null,null,null,null,B.z,null,A.h(F.aUL(q.a),null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a3(N.a9j)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ky,w)},
u(d){var x=this,w=null,v=x.gS().H($.zi(),y.I),u=$.at,t=D.asT.B(0,new A.a0(0,A.aw(d,B.b4,y.w).w.r.b,0,0)),s=y.p
return A.cP(w,B.bz,A.bC(!0,A.yc(A.d0(A.a([new A.Q(D.auh,A.N(A.a([new A.EN(new C.cga(d),w)],s),B.w,B.h,B.l,0,w,w),w),D.bMh,new A.Q(B.bU,A.hp(v,new C.cgb(x),new C.cgc(x),new C.cgd(),!1,!0,!1),w),D.bMv,D.bLF],s),w,t,w,w,!1,B.a2,!1),u,new C.cge(x)),w,B.a_,!1),!0,w)},
b9n(d){var x=null,w=A.B(x,D.apZ,B.r,x,x,new A.M(B.t,x,x,A.W(22),x,x,B.y),x,x,x,B.bj,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.A(A.a([w,D.bVh,D.cqp,B.ac,D.cqa,B.ac,D.cqh,B.bi,new C.aKS(v,new C.cg2(this),x)],y.p),B.G,B.h,B.l,0,B.u)},
aRO(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new C.cg1(),g=A.W(22),f=A.W(999)
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
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+C.dzI(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([f,B.ac,D.ccK,B.aF,v,B.S,A.h(B.e.a2(u," "),l,l,l,l,B.hg,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aM(w,!0)
B.e.n(u,A.a([B.aC,new A.jK(f,i?new C.cfX(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aM(w,!0):"Sem saldo para levantar"
B.e.n(u,A.a([B.aC,new A.jK(j,i?new C.cfY(m,d):l,!1,!1,l)],q))}j=A.a([A.B(l,A.A(u,B.H,B.h,B.l,0,B.u),B.r,l,l,new A.M(B.t,l,l,g,B.bh,l,B.y),l,l,l,B.bj,l,l,l),D.cp0],q)
if(d.gGp())B.e.n(j,A.a([B.R,new C.amE("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new C.cfZ(m),B.fj,l)],q))
j.push(h.$1("A caminho"))
j.push(D.cnS)
j.push(h.$1("Por cobrar"))
j.push(D.cqE)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.cpv)
else for(p=0;p<x.length;x.length===w||(0,A.K)(x),++p){o=x[p]
v=A.aM(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":B.f.aY(B.j.k(A.aI(n)),2,"0")+"/"+B.f.aY(B.j.k(A.ax(n)),2,"0")+"/"+A.aD(n)
f.push(new C.rB(v,u,o.gQ8(),l))}j.push(new C.Hr(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gGp()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new C.Hr(A.a([new C.rB("Dados e IBAN",l,f,new C.cg_(m)),new C.rB("Modo de levantamento",l,C.d59(t).d,new C.cg0(m,d))],g),l))
return A.A(j,B.G,B.h,B.l,0,B.u)}}
C.rB.prototype={}
C.Hr.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.W(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.eB(x,0,y.z),v=J.aq(w.a),u=w.b,w=new A.c0(v,u,A.u(w).i("c0<1>"));w.t();){t=w.c
t=t>=0?new A.a3(u+t,v.gE(v)):A.aj(A.c3())
s=t.b
r=s.d
t=t.a<x.length-1?Q.mY:o
q=A.a([A.h(s.a,o,o,o,o,B.ae,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.hj,o,o,o))
q=A.a([new A.bP(1,B.aw,A.A(q,B.H,B.bW,B.l,0,B.u),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.jb,o,o,o))
if(r!=null)B.e.n(q,A.a([B.bn,P.Qz],m))
l.push(A.cV(B.bV,A.B(o,A.N(q,B.w,B.h,B.l,0,o,o),B.r,o,B.d9,t,o,o,o,o,o,o,o),B.Z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,B.aU))}return A.B(o,A.A(l,B.w,B.h,B.l,0,B.u),B.r,o,o,new A.M(B.t,o,o,n,o,o,B.y),o,o,o,B.d2,o,o,o)}}
C.aHU.prototype={
bg(d,e){var x,w,v,u,t,s,r=null,q=e.H($.cSI(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bAk
w=new C.c4q()
if(x.length===0){q=q?r:p.e
return new C.Hr(A.a([(q==null?0:q)>0.009?new C.rB("Pago, por libertar",r,A.aM(p.e,!1),r):D.cpw],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.K)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.e0()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.e0()))}q.push(new C.rB(t.a,s,A.aM(t.c,!0),r))}return new C.Hr(q,r)}}
C.aQT.prototype={
bg(d,e){var x,w,v=null,u=e.H($.cSI(),y.Q),t=u.gv(u)
u=e.H($.d_T(),y.l)
x=u.gv(u)
if(x==null)x=B.f9
u=t==null
w=u?v:t.c
w=A.aM(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new C.rB("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new C.rB("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aM(u==null?0:u,!1),v)],y.S)
return A.A(A.a([new C.Hr(u,v),B.S,A.h("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.MR(new C.czS())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,B.hg,v,v,v)],y.p),B.G,B.h,B.l,0,B.u)}}
C.Zo.prototype={
u(d){var x=this,w=null,v=I.cRW(w,22,1),u=y.p
return A.B(w,A.N(A.a([A.VO(x.d,B.Wy[B.j.ap(x.c,4)]),B.af,A.a4(A.A(A.a([A.h(x.e,w,w,w,w,B.eI,w,w,w),B.b1,A.h(x.f,w,w,w,w,B.aal,w,w,w)],u),B.H,B.h,B.l,0,B.u),1)],u),B.w,B.h,B.l,0,w,w),B.r,w,w,v,w,w,w,B.cz,w,w,w)}}
C.aKS.prototype={
u(d){var x=null,w=A.cq(B.A,B.A.cc(0.35),B.t,B.t,x,x,B.ad,x,x,B.p8),v=A.a([],y.p)
v.push(new A.de(1,B.bc,A.h(this.c,1,B.a3,x,x,x,x,x,x),x))
return A.aG(A.bE(A.N(v,B.w,B.h,B.K,0,x,x),this.e,w),54,x)}}
C.Zk.prototype={
u(d){var x=null
return A.N(A.a([A.b3(this.c,$.at,x,x,18),B.ah,A.a4(A.h(this.d,x,x,x,x,B.IU,x,x,x),1)],y.p),B.w,B.h,B.l,0,x,x)}}
C.Xv.prototype={
u(d){var x=null,w=I.cRW(x,22,1)
return A.B(x,A.A(A.a([A.h(this.c,x,x,x,x,B.kX,B.a6,x,x),A.cv(B.tt,x,x,this.d,x,x)],y.p),B.w,B.h,B.l,0,B.u),B.r,x,x,w,x,x,x,B.bj,x,x,x)}}
C.OK.prototype={
P(){return new C.aJh()}}
C.aJh.prototype={
gbhX(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.X9[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.at:m
s=u===w?2:1
r=new A.b5(18,18)
if(t==null)t=m
else{q=new A.bc(t,s,B.ak,-1)
t=new A.dS(q,q,q,q)}s=w===D.a2C?D.aCv:B.Ei
s=A.b3(s,$.at,m,m,m)
p=A.A(A.a([A.h(w.d,m,m,m,m,B.eI,m,m,m),A.h(w.e,m,m,m,m,B.bd,m,m,m)],l),B.H,B.h,B.l,0,B.u)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aCZ:D.aD_
B.e.n(k,A.a([A.cV(m,A.fu(m,A.N(A.a([s,B.af,new A.bP(1,B.aw,p,m),A.b3(o,u===w?$.at:B.bD,m,m,m)],l),B.w,B.h,B.l,0,m,m),m,B.aN,new A.M(B.t,m,t,new A.ch(r,r,r,r),B.bh,m,B.y),B.dm,m,m,m,B.dT,m),B.Z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.c8T(n,w),m,m,m,m,m,m,!1,B.aU),B.S],l))}return new A.eR(D.cfz,A.A(k,B.w,B.h,B.K,0,B.u),A.a([A.cv(B.cQ,m,m,new C.c8U(d),m,m),A.bE(B.dw,new C.c8V(n,d),m)],l),m)}}
C.aKe.prototype={
bg(d,e){var x=null,w=e.H($.dj9(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return B.at
return new A.Q(B.kx,A.ql(A.h("Taxas de servi\xe7o de reservas que cancelaste: "+A.aM(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,B.IG,x,x,x),B.t,B.dT,14,B.fj),x)}}
C.amE.prototype={
u(d){var x=this,w=null,v=x.f,u=A.a4(A.h(x.c,2,B.a3,w,w,B.dM,w,w,w),1),t=A.W(16)
return A.cV(B.bV,A.ql(A.N(A.a([new A.I4(v,w),B.ah,u,B.ah,A.B(B.L,A.h(x.d,w,w,w,w,B.kW,w,w,w),B.r,w,w,new A.M(B.A,w,w,t,w,w,B.y),w,32,w,B.cL,w,w,w)],y.p),B.w,B.h,B.l,0,w,w),B.t,B.NG,14,v),B.Z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,B.aU)}}
var z=a.updateTypes(["F<Lh>(au)","v(Ec,Ec)","x(tG)","tG()","OK(O)","Xv(J,bX)","e(mD)","F<lM>()"])
C.cKH.prototype={
$1(d){return this.aGI(d)},
aGI(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.Cu(b6)
b2=null
b3=!0
u=4
s=$.S().b
s===$&&A.b()
x=7
return A.d(s.R("bookings").an(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").W("partner_id",b1).eq("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
return A.d(s.R("bookings").an(0,"total_amount, status, payments(type, status, amount, released_at)").W("partner_id",b1).eq("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
return A.d(s.R("bookings").an(0,"total_amount, status, payments(type, status, amount)").W("partner_id",b1).eq("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
f=A.ds(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bl(e==null?B.am:e,s)
d=A.u(e)
e=new A.al(e,e.gA(e),d.i("al<V.E>"))
d=d.i("V.E")
a0=0
a1=0
while(e.t()){a2=e.d
if(a2==null)a2=d.a(a2)
a3=J.a7(a2)
a4=A.ds(a3.h(a2,"amount"))
if(J.o(a3.h(a2,"status"),"paid"))a0+=a4
if(J.o(a3.h(a2,"status"),"paid")&&a3.az(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.D(a3.h(a2,"paid_at"))
a7=A.dq(a6==null?"":a6)
a6=A.D(g.h(h,"event_date"))
a8=A.dq(a6==null?"":a6)
a6=A.cXk(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.e5(1728e8)
else a9=a8==null?null:a8.e5(2592e8)
q.push(new C.Ec(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}B.e.cO(q,new C.cKG())
v=new C.Lh(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
C.cKG.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bB(9999,1,1,0,0)
x=e.d
return w.bE(0,x==null?A.bB(9999,1,1,0,0):x)},
$S:z+1}
C.bmm.prototype={
$1(d){return d.c===this.a},
$S:z+2}
C.bmn.prototype={
$0(){return D.a2D},
$S:z+3}
C.cg6.prototype={
$1(d){var x,w=null,v=this.b,u=A.h(A.aM(v.Q/100,!0),w,w,w,w,D.c4x,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eR(D.cfa,A.A(A.a([u,B.R,new C.Zk(G.o_,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),B.S,D.cpK,B.S,D.cpJ],x),B.G,B.h,B.K,0,B.u),A.a([A.cv(B.cQ,w,w,new C.cg4(d),w,w),A.bE(D.cgk,new C.cg5(d),w)],x),w)},
$S:17}
C.cg4.prototype={
$0(){return A.am(this.a,!1).ad(!1)},
$S:0}
C.cg5.prototype={
$0(){return A.am(this.a,!1).ad(!0)},
$S:0}
C.cg7.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cg8.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cg3.prototype={
$1(d){return new C.OK(this.a,null)},
$S:z+4}
C.cge.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gS()
t=$.zi()
u.ak(t)
u.ak($.cSI())
x=2
return A.d(u.a0(0,t.gef(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
C.cga.prototype={
$0(){var x=this.a,w=A.ai(x).c
w===$&&A.b()
return w.jf()?A.ai(x).ad(null):A.ai(x).bQ(0,"/partner-home",null)},
$S:0}
C.cgd.prototype={
$0(){return new A.Q(new A.a0(40,40,40,40),B.a92,null)},
$S:87}
C.cgc.prototype={
$2(d,e){var x=d instanceof E.x0?F.aUL(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new C.Xv(x,new C.cg9(this.a),null)},
$S:z+5}
C.cg9.prototype={
$0(){return this.a.gS().ak($.zi())},
$S:0}
C.cgb.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aRO(d):w.b9n(d)},
$S:z+6}
C.cg2.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).au("/partner-payments/setup",null,y.X)},
$S:0}
C.cg1.prototype={
$1(d){return new A.Q(D.asH,new A.kq(d,null),null)},
$S:239}
C.cfX.prototype={
$0(){return this.a.EO(this.b)},
$S:0}
C.cfY.prototype={
$0(){return this.a.EO(this.b)},
$S:0}
C.cfZ.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).au("/partner-payments/setup",null,y.X)},
$S:0}
C.cg_.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).au("/partner-payments/setup",null,y.X)},
$S:0}
C.cg0.prototype={
$0(){return this.a.Ky(this.b)},
$S:0}
C.c4q.prototype={
$1(d){return B.f.aY(B.j.k(A.aI(d)),2,"0")+"/"+B.f.aY(B.j.k(A.ax(d)),2,"0")},
$S:138}
C.czS.prototype={
$1(d){return A.aM(d,!1)},
$S:175}
C.c8T.prototype={
$0(){var x=this.a
return x.p(new C.c8S(x,this.b))},
$S:0}
C.c8S.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.c8U.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0}
C.c8V.prototype={
$0(){return A.am(this.b,!1).ad(this.a.gbhX())},
$S:0}
C.cED.prototype={
$1(d){return this.aFr(d)},
aFr(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.S().b
p===$&&A.b()
x=7
return A.d(p.R("partner_charges").an(0,"amount, settled_amount"),$async$$1)
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
$S:188};(function installTearOffs(){var x=a._static_0
x(C,"dHG","a_c",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[C.Ec,C.Lh,C.rB])
x(A.bx,[C.cKH,C.bmm,C.cg6,C.cg3,C.cgb,C.cg1,C.c4q,C.czS,C.cED])
x(A.cO,[C.cKG,C.cgc])
w(C.tG,A.f7)
x(A.bQ,[C.bmn,C.cg4,C.cg5,C.cg7,C.cg8,C.cge,C.cga,C.cgd,C.cg9,C.cg2,C.cfX,C.cfY,C.cfZ,C.cg_,C.cg0,C.c8T,C.c8S,C.c8U,C.c8V])
w(C.F8,A.dC)
w(C.aKt,A.dy)
x(A.H,[C.Hr,C.Zo,C.aKS,C.Zk,C.Xv,C.amE])
x(A.eq,[C.aHU,C.aQT,C.aKe])
w(C.OK,A.G)
w(C.aJh,A.Z)})()
A.bn(b.typeUniverse,JSON.parse('{"Xv":{"H":[],"e":[],"f":[]},"OK":{"G":[],"e":[],"f":[]},"F8":{"G":[],"e":[],"f":[]},"aKt":{"Z":["F8"]},"Hr":{"H":[],"e":[],"f":[]},"aHU":{"G":[],"e":[],"f":[]},"aQT":{"G":[],"e":[],"f":[]},"Zo":{"H":[],"e":[],"f":[]},"aKS":{"H":[],"e":[],"f":[]},"Zk":{"H":[],"e":[],"f":[]},"aJh":{"Z":["OK"]},"aKe":{"G":[],"e":[],"f":[]},"amE":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{I:x("ay<mD>"),l:x("ay<fa>"),Q:x("ay<Lh>"),Z:x("ay<R>"),P:x("F<mD>"),b:x("r<Ec>"),O:x("r<+(aV,c)>"),s:x("r<c>"),p:x("r<e>"),S:x("r<rB>"),a:x("a5<c,@>"),w:x("df"),L:x("Lh"),T:x("tG"),e:x("lM"),N:x("c"),z:x("rB"),q:x("dm"),y:x("x"),i:x("R"),A:x("@"),g:x("t<@>?"),h:x("a5<c,@>?"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cis=new A.C("Recebe pagamentos na app",null,B.ip,null,null,null,null,null,null,null,null)
D.ceo=new A.C("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,B.tq,null,null,null,null,null,null,null,null)
D.bDX=x([D.cis,B.aF,D.ceo],y.p)
D.apZ=new A.jg(B.a2,B.h,B.l,B.H,null,B.u,null,0,D.bDX,null)
D.asH=new A.a0(0,20,0,12)
D.asT=new A.a0(0,8,0,40)
D.auh=new A.a0(20,4,20,0)
D.aCv=new A.aV(57389,"HeroiconsSolid",null,!1)
D.aCZ=new A.aV(58627,"MaterialIcons",null,!1)
D.aD_=new A.aV(58628,"MaterialIcons",null,!1)
D.bAk=x([],y.b)
D.a2C=new C.tG("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a2D=new C.tG("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bNu=new C.tG("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bNt=new C.tG("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.X9=x([D.a2C,D.a2D,D.bNu,D.bNt],A.w("r<tG>"))
D.aAM=new H.DL("Lucros e clientes",!0,C.dHG(),null)
D.bLF=new A.Q(B.bU,D.aAM,null)
D.c9u=new A.C("Pagamentos",null,B.hl,null,null,null,null,null,null,null,null)
D.bMh=new A.Q(B.ar,D.c9u,null)
D.bVf=new A.vT("Exportar",null,null)
D.bMv=new A.Q(B.bU,D.bVf,null)
D.bSs=new A.a3(B.hE,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bVh=new A.vT("Como funciona",null,null)
D.ciU=new A.C("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZI=new A.bF(D.ciU,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.c4x=new A.P(!0,B.A,null,null,null,null,36,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccK=new A.C("Dispon\xedvel para receber",null,B.hj,null,null,null,null,null,null,null,null)
D.cfa=new A.C("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.cfz=new A.C("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.cgk=new A.C("Levantar",null,null,null,null,null,null,null,null,null,null)
D.cnS=new C.aHU(null)
D.cp0=new C.aKe(null)
D.cpv=new C.rB("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.cpw=new C.rB("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.cpJ=new C.Zk(B.vB,"Sem custos de levantamento",null)
D.cpK=new C.Zk(B.hE,"Chega em 1 a 3 dias \xfateis",null)
D.cqa=new C.Zo(1,B.eg,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.cqh=new C.Zo(2,G.o_,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.cqp=new C.Zo(0,O.Pe,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.cqE=new C.aQT(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWI","cSI",()=>A.eG(new C.cKH(),null,!1,null,null,y.L))
x($,"dTM","dj9",()=>B.bX.$1$1(new C.cED(),y.i))})()};
(a=>{a["S0i9dl+urxcbVNkg/m/n9PqdSXk="]=a.current})($__dart_deferred_initializers__);