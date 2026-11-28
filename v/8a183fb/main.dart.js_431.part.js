((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,K,L,F,G,H,C={Ee:function Ee(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Lj:function Lj(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cLL:function cLL(){},cLK:function cLK(){},
d6i(d){return B.e.hB(D.Xh,new C.bmC(d),new C.bmD())},
cRd(d){var x=0,w=A.n(y.H)
var $async$cRd=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.HG(A.T(["action","schedule","interval",d.c],y.N,y.A)),$async$cRd)
case 2:return A.l(null,w)}})
return A.m($async$cRd,w)},
tJ:function tJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bmC:function bmC(d){this.a=d},
bmD:function bmD(){},
dtL(){return new C.Fa(null)},
dAT(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
Fa:function Fa(d){this.a=d},
aKC:function aKC(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
cgK:function cgK(d,e){this.a=d
this.b=e},
cgI:function cgI(d){this.a=d},
cgJ:function cgJ(d){this.a=d},
cgL:function cgL(d){this.a=d},
cgM:function cgM(d){this.a=d},
cgH:function cgH(d){this.a=d},
cgS:function cgS(d){this.a=d},
cgO:function cgO(d){this.a=d},
cgR:function cgR(){},
cgQ:function cgQ(d){this.a=d},
cgN:function cgN(d){this.a=d},
cgP:function cgP(d){this.a=d},
cgG:function cgG(d){this.a=d},
cgF:function cgF(){},
cgA:function cgA(d,e){this.a=d
this.b=e},
cgB:function cgB(d,e){this.a=d
this.b=e},
cgC:function cgC(d){this.a=d},
cgD:function cgD(d){this.a=d},
cgE:function cgE(d,e){this.a=d
this.b=e},
rF:function rF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ht:function Ht(d,e){this.c=d
this.a=e},
aI2:function aI2(d){this.a=d},
c51:function c51(){},
aR3:function aR3(d){this.a=d},
cAM:function cAM(){},
Zt:function Zt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aL2:function aL2(d,e,f){this.c=d
this.e=e
this.a=f},
Zp:function Zp(d,e,f){this.c=d
this.d=e
this.a=f},
XA:function XA(d,e,f){this.c=d
this.d=e
this.a=f},
OO:function OO(d,e){this.c=d
this.a=e},
aJq:function aJq(){this.d=$
this.c=this.a=null},
c9u:function c9u(d,e){this.a=d
this.b=e},
c9t:function c9t(d,e){this.a=d
this.b=e},
c9v:function c9v(d){this.a=d},
c9w:function c9w(d,e){this.a=d
this.b=e},
cFz:function cFz(){},
aKn:function aKn(d){this.a=d},
amM:function amM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_g(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$a_g=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.al_(),$async$a_g)
case 3:u=$.R()
t=u.b
t===$&&A.b()
s=t.gbB().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.R("partner_profiles").am(0,"business_name").V("id",r).cS(),$async$a_g)
case 4:q=e
t=q==null?null:J.i(q,"business_name")
p=H
o=J.cA(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.R("bookings").am(0,"*, events(partner_name_1, partner_name_2, location), proposals(title)").V("partner_id",r).d1(0,"event_date",!1),$async$a_g)
case 5:m=e
x=6
return A.d(u.b.R("payments").am(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("partner_id",r).Gs("booking_id","is",null).tK(0,"created_at"),$async$a_g)
case 6:v=p.cYm(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$a_g,w)}},D,M,N,O,P,Q,I
J=c[1]
A=c[0]
B=c[2]
E=c[123]
K=c[92]
L=c[210]
F=c[105]
G=c[273]
H=c[133]
C=a.updateHolder(c[38],C)
D=c[356]
M=c[108]
N=c[192]
O=c[328]
P=c[346]
Q=c[344]
I=c[149]
C.Ee.prototype={}
C.Lj.prototype={}
C.tJ.prototype={
I(){return"PayoutMode."+this.b}}
C.Fa.prototype={
P(){return new C.aKC()}}
C.aKC.prototype={
EQ(d){return this.bnl(d)},
bnl(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$EQ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fT(!0,new C.cgK(r,d),i,y.y),$async$EQ)
case 3:if(f!==!0||r.c==null){x=1
break}r.p(new C.cgL(r))
u=5
x=8
return A.d(K.aVq(d.Q),$async$EQ)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gS().aj($.zk())
p=q.c
i=r.c
i.toString
n=A.aM(q.b/100,!0)
m=A.aM(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+B.f.aY(B.j.k(A.aH(p)),2,"0")+"/"+B.f.aY(B.j.k(A.au(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.a1(L.lR,l),new A.a1(G.o4,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bSB],y.O)
A.ah(i).av("/pay/done",new M.a64("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.x4){o=i
i=r.c
if(i!=null)i.O(y.q).f.a3(A.c7(null,null,null,null,null,B.z,null,A.h(F.aUW(o.a),null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a3(D.bZR)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.p(new C.cgM(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$EQ,w)},
KC(d){return this.bdN(d)},
bdN(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$KC=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=C.d6i(d.ax)
n=s.c
n.toString
x=3
return A.d(A.c1(null,new C.cgH(o),!1,n,!0,!1,null,y.T),$async$KC)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(C.cRd(r),$async$KC)
case 8:s.gS().aj($.zk())
n=s.c
if(n!=null)n.O(y.q).f.a3(A.c7(null,null,null,null,null,B.z,null,A.h("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.x4){q=n
n=s.c
if(n!=null)n.O(y.q).f.a3(A.c7(null,null,null,null,null,B.z,null,A.h(F.aUW(q.a),null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a3(N.Ij)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$KC,w)},
u(d){var x=this,w=null,v=x.gS().H($.zk(),y.I),u=$.at,t=D.at2.B(0,new A.a2(0,A.ax(d,B.b4,y.w).w.r.b,0,0)),s=y.p
return A.cP(w,B.bz,A.bE(!0,A.yg(A.d0(A.a([new A.Q(D.auo,A.N(A.a([new A.EP(new C.cgO(d),w)],s),B.w,B.h,B.l,0,w,w),w),D.bMo,new A.Q(B.bV,A.hq(v,new C.cgP(x),new C.cgQ(x),new C.cgR(),!1,!0,!1),w),D.bMC,D.bLM],s),w,t,w,w,!1,B.a3,!1),u,new C.cgS(x)),w,B.a_,!1),!0,w)},
b9x(d){var x=null,w=A.B(x,D.aq6,B.r,x,x,new A.L(B.t,x,x,A.W(22),x,x,B.y),x,x,x,B.bh,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.y(A.a([w,D.bVq,D.cqC,B.ac,D.cqn,B.ac,D.cqu,B.bj,new C.aL2(v,new C.cgG(this),x)],y.p),B.G,B.h,B.l,0,B.u)},
aS_(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new C.cgF(),g=A.W(22),f=A.W(999)
f=A.B(l,A.h(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,B.hW,l,l,l),B.r,l,l,new A.L(B.cJ,l,l,f,l,l,B.y),l,l,l,B.dz,l,l,l)
x=d.Q
w=x/100
v=A.h(A.aM(w,!0),l,l,l,l,B.jg,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aM(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+C.dAT(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([f,B.ac,D.ccU,B.aF,v,B.S,A.h(B.e.a0(u," "),l,l,l,l,B.hg,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aM(w,!0)
B.e.n(u,A.a([B.aC,new A.jK(f,i?new C.cgA(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aM(w,!0):"Sem saldo para levantar"
B.e.n(u,A.a([B.aC,new A.jK(j,i?new C.cgB(m,d):l,!1,!1,l)],q))}j=A.a([A.B(l,A.y(u,B.H,B.h,B.l,0,B.u),B.r,l,l,new A.L(B.t,l,l,g,B.bi,l,B.y),l,l,l,B.bh,l,l,l),D.cpd],q)
if(d.gGr())B.e.n(j,A.a([B.R,new C.amM("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new C.cgC(m),B.fj,l)],q))
j.push(h.$1("A caminho"))
j.push(D.co4)
j.push(h.$1("Por cobrar"))
j.push(D.cqR)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.cpI)
else for(p=0;p<x.length;x.length===w||(0,A.H)(x),++p){o=x[p]
v=A.aM(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":B.f.aY(B.j.k(A.aH(n)),2,"0")+"/"+B.f.aY(B.j.k(A.au(n)),2,"0")+"/"+A.aD(n)
f.push(new C.rF(v,u,o.gQd(),l))}j.push(new C.Ht(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gGr()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new C.Ht(A.a([new C.rF("Dados e IBAN",l,f,new C.cgD(m)),new C.rF("Modo de levantamento",l,C.d6i(t).d,new C.cgE(m,d))],g),l))
return A.y(j,B.G,B.h,B.l,0,B.u)}}
C.rF.prototype={}
C.Ht.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.W(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.eB(x,0,y.z),v=J.ap(w.a),u=w.b,w=new A.c2(v,u,A.u(w).i("c2<1>"));w.t();){t=w.c
t=t>=0?new A.a1(u+t,v.gE(v)):A.ak(A.c4())
s=t.b
r=s.d
t=t.a<x.length-1?Q.n0:o
q=A.a([A.h(s.a,o,o,o,o,B.ae,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.hj,o,o,o))
q=A.a([new A.bJ(1,B.au,A.y(q,B.H,B.bW,B.l,0,B.u),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.jf,o,o,o))
if(r!=null)B.e.n(q,A.a([B.bm,P.QI],m))
l.push(A.cT(B.bP,A.B(o,A.N(q,B.w,B.h,B.l,0,o,o),B.r,o,B.db,t,o,o,o,o,o,o,o),B.Z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,B.aQ))}return A.B(o,A.y(l,B.w,B.h,B.l,0,B.u),B.r,o,o,new A.L(B.t,o,o,n,o,o,B.y),o,o,o,B.cP,o,o,o)}}
C.aI2.prototype={
bg(d,e){var x,w,v,u,t,s,r=null,q=e.H($.cTQ(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bAr
w=new C.c51()
if(x.length===0){q=q?r:p.e
return new C.Ht(A.a([(q==null?0:q)>0.009?new C.rF("Pago, por libertar",r,A.aM(p.e,!1),r):D.cpJ],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.H)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.e1()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.e1()))}q.push(new C.rF(t.a,s,A.aM(t.c,!0),r))}return new C.Ht(q,r)}}
C.aR3.prototype={
bg(d,e){var x,w,v=null,u=e.H($.cTQ(),y.Q),t=u.gv(u)
u=e.H($.d10(),y.l)
x=u.gv(u)
if(x==null)x=B.f9
u=t==null
w=u?v:t.c
w=A.aM(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new C.rF("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new C.rF("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aM(u==null?0:u,!1),v)],y.S)
return A.y(A.a([new C.Ht(u,v),B.S,A.h("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.MV(new C.cAM())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,B.hg,v,v,v)],y.p),B.G,B.h,B.l,0,B.u)}}
C.Zt.prototype={
u(d){var x=this,w=null,v=I.cT3(w,22,1),u=y.p
return A.B(w,A.N(A.a([A.VT(x.d,B.WH[B.j.aq(x.c,4)]),B.af,A.a4(A.y(A.a([A.h(x.e,w,w,w,w,B.eI,w,w,w),B.aY,A.h(x.f,w,w,w,w,B.aas,w,w,w)],u),B.H,B.h,B.l,0,B.u),1)],u),B.w,B.h,B.l,0,w,w),B.r,w,w,v,w,w,w,B.cA,w,w,w)}}
C.aL2.prototype={
u(d){var x=null,w=A.cn(B.A,B.A.cd(0.35),B.t,B.t,x,x,B.ad,x,x,B.pb),v=A.a([],y.p)
v.push(new A.d8(1,B.b7,A.h(this.c,1,B.a2,x,x,x,x,x,x),x))
return A.aG(A.bF(A.N(v,B.w,B.h,B.K,0,x,x),this.e,w),54,x)}}
C.Zp.prototype={
u(d){var x=null
return A.N(A.a([A.b4(this.c,$.at,x,x,18),B.ah,A.a4(A.h(this.d,x,x,x,x,B.IZ,x,x,x),1)],y.p),B.w,B.h,B.l,0,x,x)}}
C.XA.prototype={
u(d){var x=null,w=I.cT3(x,22,1)
return A.B(x,A.y(A.a([A.h(this.c,x,x,x,x,B.l_,B.a6,x,x),A.cw(B.tx,x,x,this.d,x,x)],y.p),B.w,B.h,B.l,0,B.u),B.r,x,x,w,x,x,x,B.bh,x,x,x)}}
C.OO.prototype={
P(){return new C.aJq()}}
C.aJq.prototype={
gbi8(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.Xh[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.at:m
s=u===w?2:1
r=new A.b2(18,18)
if(t==null)t=m
else{q=new A.bb(t,s,B.ai,-1)
t=new A.dS(q,q,q,q)}s=w===D.a2K?D.aCB:B.El
s=A.b4(s,$.at,m,m,m)
p=A.y(A.a([A.h(w.d,m,m,m,m,B.eI,m,m,m),A.h(w.e,m,m,m,m,B.bb,m,m,m)],l),B.H,B.h,B.l,0,B.u)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aD4:D.aD5
B.e.n(k,A.a([A.cT(m,A.fw(m,A.N(A.a([s,B.af,new A.bJ(1,B.au,p,m),A.b4(o,u===w?$.at:B.bE,m,m,m)],l),B.w,B.h,B.l,0,m,m),m,B.aO,new A.L(B.t,m,t,new A.cd(r,r,r,r),B.bi,m,B.y),B.dm,m,m,m,B.dW,m),B.Z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.c9u(n,w),m,m,m,m,m,m,!1,B.aQ),B.S],l))}return new A.eU(D.cfJ,A.y(k,B.w,B.h,B.K,0,B.u),A.a([A.cw(B.cU,m,m,new C.c9v(d),m,m),A.bF(B.dw,new C.c9w(n,d),m)],l),m)}}
C.aKn.prototype={
bg(d,e){var x=null,w=e.H($.dkk(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return B.at
return new A.Q(B.jF,A.qo(A.h("Taxas de servi\xe7o de reservas que cancelaste: "+A.aM(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,B.IL,x,x,x),B.t,B.dW,14,B.fj),x)}}
C.amM.prototype={
u(d){var x=this,w=null,v=x.f,u=A.a4(A.h(x.c,2,B.a2,w,w,B.dP,w,w,w),1),t=A.W(16)
return A.cT(B.bP,A.qo(A.N(A.a([new A.I6(v,w),B.ah,u,B.ah,A.B(B.L,A.h(x.d,w,w,w,w,B.kZ,w,w,w),B.r,w,w,new A.L(B.A,w,w,t,w,w,B.y),w,32,w,B.cO,w,w,w)],y.p),B.w,B.h,B.l,0,w,w),B.t,B.NM,14,v),B.Z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,B.aQ)}}
var z=a.updateTypes(["F<Lj>(av)","v(Ee,Ee)","x(tJ)","tJ()","OO(O)","XA(K,bX)","e(mD)","F<lM>()"])
C.cLL.prototype={
$1(d){return this.aGU(d)},
aGU(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.Cv(b6)
b2=null
b3=!0
u=4
s=$.R().b
s===$&&A.b()
x=7
return A.d(s.R("bookings").am(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").V("partner_id",b1).dV("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 7:b2=b8
u=2
x=6
break
case 4:u=3
b4=t.pop()
x=A.a9(b4) instanceof A.cU?8:10
break
case 8:b3=!1
u=12
s=$.R().b
s===$&&A.b()
x=15
return A.d(s.R("bookings").am(0,"total_amount, status, payments(type, status, amount, released_at)").V("partner_id",b1).dV("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 15:b2=b8
u=3
x=14
break
case 12:u=11
b5=t.pop()
x=A.a9(b5) instanceof A.cU?16:18
break
case 16:s=$.R().b
s===$&&A.b()
x=19
return A.d(s.R("bookings").am(0,"total_amount, status, payments(type, status, amount)").V("partner_id",b1).dV("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
for(s=y.a,p=J.bh(b2,s),o=A.u(p),p=new A.al(p,p.gA(p),o.i("al<V.E>")),n=y.h,m=y.g,o=o.i("V.E"),l=0,k=0,j=0,i=0;p.t();){h=p.d
if(h==null)h=o.a(h)
g=J.a7(h)
f=A.ds(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bh(e==null?B.am:e,s)
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
if(J.o(a3.h(a2,"status"),"paid")&&a3.aw(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.C(a3.h(a2,"paid_at"))
a7=A.dh(a6==null?"":a6)
a6=A.C(g.h(h,"event_date"))
a8=A.dh(a6==null?"":a6)
a6=A.cYr(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.e6(1728e8)
else a9=a8==null?null:a8.e6(2592e8)
q.push(new C.Ee(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}B.e.cz(q,new C.cLK())
v=new C.Lj(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
C.cLK.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bz(9999,1,1,0,0)
x=e.d
return w.bD(0,x==null?A.bz(9999,1,1,0,0):x)},
$S:z+1}
C.bmC.prototype={
$1(d){return d.c===this.a},
$S:z+2}
C.bmD.prototype={
$0(){return D.a2L},
$S:z+3}
C.cgK.prototype={
$1(d){var x,w=null,v=this.b,u=A.h(A.aM(v.Q/100,!0),w,w,w,w,D.c4G,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eU(D.cfk,A.y(A.a([u,B.R,new C.Zp(G.o4,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),B.S,D.cpX,B.S,D.cpW],x),B.G,B.h,B.K,0,B.u),A.a([A.cw(B.cU,w,w,new C.cgI(d),w,w),A.bF(D.cgv,new C.cgJ(d),w)],x),w)},
$S:18}
C.cgI.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.cgJ.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.cgL.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cgM.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cgH.prototype={
$1(d){return new C.OO(this.a,null)},
$S:z+4}
C.cgS.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gS()
t=$.zk()
u.aj(t)
u.aj($.cTQ())
x=2
return A.d(u.a1(0,t.geh(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
C.cgO.prototype={
$0(){var x=this.a,w=A.ah(x).c
w===$&&A.b()
return w.jf()?A.ah(x).ae(null):A.ah(x).bS(0,"/partner-home",null)},
$S:0}
C.cgR.prototype={
$0(){return new A.Q(new A.a2(40,40,40,40),B.a9a,null)},
$S:89}
C.cgQ.prototype={
$2(d,e){var x=d instanceof E.x4?F.aUW(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new C.XA(x,new C.cgN(this.a),null)},
$S:z+5}
C.cgN.prototype={
$0(){return this.a.gS().aj($.zk())},
$S:0}
C.cgP.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aS_(d):w.b9x(d)},
$S:z+6}
C.cgG.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/partner-payments/setup",null,y.X)},
$S:0}
C.cgF.prototype={
$1(d){return new A.Q(D.asR,new A.kq(d,null),null)},
$S:271}
C.cgA.prototype={
$0(){return this.a.EQ(this.b)},
$S:0}
C.cgB.prototype={
$0(){return this.a.EQ(this.b)},
$S:0}
C.cgC.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/partner-payments/setup",null,y.X)},
$S:0}
C.cgD.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/partner-payments/setup",null,y.X)},
$S:0}
C.cgE.prototype={
$0(){return this.a.KC(this.b)},
$S:0}
C.c51.prototype={
$1(d){return B.f.aY(B.j.k(A.aH(d)),2,"0")+"/"+B.f.aY(B.j.k(A.au(d)),2,"0")},
$S:153}
C.cAM.prototype={
$1(d){return A.aM(d,!1)},
$S:181}
C.c9u.prototype={
$0(){var x=this.a
return x.p(new C.c9t(x,this.b))},
$S:0}
C.c9t.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.c9v.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
C.c9w.prototype={
$0(){return A.am(this.b,!1).ae(this.a.gbi8())},
$S:0}
C.cFz.prototype={
$1(d){return this.aFD(d)},
aFD(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.R("partner_charges").am(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.ap(s);p.t();){q=p.gE(p)
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
$S:192};(function installTearOffs(){var x=a._static_0
x(C,"dIT","a_g",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.K,[C.Ee,C.Lj,C.rF])
x(A.by,[C.cLL,C.bmC,C.cgK,C.cgH,C.cgP,C.cgF,C.c51,C.cAM,C.cFz])
x(A.cN,[C.cLK,C.cgQ])
w(C.tJ,A.f8)
x(A.bR,[C.bmD,C.cgI,C.cgJ,C.cgL,C.cgM,C.cgS,C.cgO,C.cgR,C.cgN,C.cgG,C.cgA,C.cgB,C.cgC,C.cgD,C.cgE,C.c9u,C.c9t,C.c9v,C.c9w])
w(C.Fa,A.dD)
w(C.aKC,A.dz)
x(A.I,[C.Ht,C.Zt,C.aL2,C.Zp,C.XA,C.amM])
x(A.eq,[C.aI2,C.aR3,C.aKn])
w(C.OO,A.G)
w(C.aJq,A.Y)})()
A.bq(b.typeUniverse,JSON.parse('{"XA":{"I":[],"e":[],"f":[]},"OO":{"G":[],"e":[],"f":[]},"Fa":{"G":[],"e":[],"f":[]},"aKC":{"Y":["Fa"]},"Ht":{"I":[],"e":[],"f":[]},"aI2":{"G":[],"e":[],"f":[]},"aR3":{"G":[],"e":[],"f":[]},"Zt":{"I":[],"e":[],"f":[]},"aL2":{"I":[],"e":[],"f":[]},"Zp":{"I":[],"e":[],"f":[]},"aJq":{"Y":["OO"]},"aKn":{"G":[],"e":[],"f":[]},"amM":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{I:x("ay<mD>"),l:x("ay<fb>"),Q:x("ay<Lj>"),Z:x("ay<S>"),P:x("F<mD>"),b:x("r<Ee>"),O:x("r<+(aV,c)>"),s:x("r<c>"),p:x("r<e>"),S:x("r<rF>"),a:x("a5<c,@>"),w:x("df"),L:x("Lj"),T:x("tJ"),e:x("lM"),N:x("c"),z:x("rF"),q:x("dn"),y:x("x"),i:x("S"),A:x("@"),g:x("t<@>?"),h:x("a5<c,@>?"),X:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ciD=new A.D("Recebe pagamentos na app",null,B.is,null,null,null,null,null,null,null,null)
D.cey=new A.D("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,B.tt,null,null,null,null,null,null,null,null)
D.bE4=x([D.ciD,B.aF,D.cey],y.p)
D.aq6=new A.jg(B.a3,B.h,B.l,B.H,null,B.u,null,0,D.bE4,null)
D.asR=new A.a2(0,20,0,12)
D.at2=new A.a2(0,8,0,40)
D.auo=new A.a2(20,4,20,0)
D.aCB=new A.aV(57389,"HeroiconsSolid",null,!1)
D.aD4=new A.aV(58627,"MaterialIcons",null,!1)
D.aD5=new A.aV(58628,"MaterialIcons",null,!1)
D.bAr=x([],y.b)
D.a2K=new C.tJ("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a2L=new C.tJ("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bNB=new C.tJ("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bNA=new C.tJ("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.Xh=x([D.a2K,D.a2L,D.bNB,D.bNA],A.w("r<tJ>"))
D.aAS=new H.DN("Lucros e clientes",!0,C.dIT(),null)
D.bLM=new A.Q(B.bV,D.aAS,null)
D.c9D=new A.D("Pagamentos",null,B.hm,null,null,null,null,null,null,null,null)
D.bMo=new A.Q(B.aq,D.c9D,null)
D.bVo=new A.vV("Exportar",null,null)
D.bMC=new A.Q(B.bV,D.bVo,null)
D.bSB=new A.a1(B.hF,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bVq=new A.vV("Como funciona",null,null)
D.cj4=new A.D("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZR=new A.bG(D.cj4,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.z,null)
D.c4G=new A.P(!0,B.A,null,null,null,null,36,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccU=new A.D("Dispon\xedvel para receber",null,B.hj,null,null,null,null,null,null,null,null)
D.cfk=new A.D("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.cfJ=new A.D("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.cgv=new A.D("Levantar",null,null,null,null,null,null,null,null,null,null)
D.co4=new C.aI2(null)
D.cpd=new C.aKn(null)
D.cpI=new C.rF("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.cpJ=new C.rF("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.cpW=new C.Zp(B.vF,"Sem custos de levantamento",null)
D.cpX=new C.Zp(B.hF,"Chega em 1 a 3 dias \xfateis",null)
D.cqn=new C.Zt(1,B.ek,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.cqu=new C.Zt(2,G.o4,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.cqC=new C.Zt(0,O.Pm,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.cqR=new C.aR3(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXZ","cTQ",()=>A.eI(new C.cLL(),null,!1,null,null,y.L))
x($,"dV2","dkk",()=>B.bX.$1$1(new C.cFz(),y.i))})()};
(a=>{a["77AYVi0YQAViu0PWDGGxuiYIilM="]=a.current})($__dart_deferred_initializers__);