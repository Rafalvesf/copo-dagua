((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,K,L,F,G,H,B={E1:function E1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},La:function La(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cLC:function cLC(){},cLB:function cLB(){},
d6s(d){return C.e.ht(D.Wl,new B.bm7(d),new B.bm8())},
cRm(d){var x=0,w=A.n(y.H)
var $async$cRm=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.Hv(A.R(["action","schedule","interval",d.c],y.N,y.A)),$async$cRm)
case 2:return A.l(null,w)}})
return A.m($async$cRm,w)},
tB:function tB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bm7:function bm7(d){this.a=d},
bm8:function bm8(){},
du3(){return new B.EW(null)},
dBa(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
EW:function EW(d){this.a=d},
aJP:function aJP(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
cgI:function cgI(d,e){this.a=d
this.b=e},
cgG:function cgG(d){this.a=d},
cgH:function cgH(d){this.a=d},
cgJ:function cgJ(d){this.a=d},
cgK:function cgK(d){this.a=d},
cgF:function cgF(d){this.a=d},
cgQ:function cgQ(d){this.a=d},
cgM:function cgM(d){this.a=d},
cgP:function cgP(){},
cgO:function cgO(d){this.a=d},
cgL:function cgL(d){this.a=d},
cgN:function cgN(d){this.a=d},
cgE:function cgE(d){this.a=d},
cgz:function cgz(d,e){this.a=d
this.b=e},
cgA:function cgA(d,e){this.a=d
this.b=e},
cgB:function cgB(d){this.a=d},
cgC:function cgC(d){this.a=d},
cgD:function cgD(d,e){this.a=d
this.b=e},
ru:function ru(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Hj:function Hj(d,e){this.c=d
this.a=e},
aHg:function aHg(d){this.a=d},
c4B:function c4B(){},
aQb:function aQb(d){this.a=d},
cAx:function cAx(){},
Ze:function Ze(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKf:function aKf(d,e,f){this.c=d
this.e=e
this.a=f},
Za:function Za(d,e,f){this.c=d
this.d=e
this.a=f},
Xp:function Xp(d,e,f){this.c=d
this.d=e
this.a=f},
OI:function OI(d,e){this.c=d
this.a=e},
aID:function aID(){this.d=$
this.c=this.a=null},
c96:function c96(d,e){this.a=d
this.b=e},
c95:function c95(d,e){this.a=d
this.b=e},
c97:function c97(d){this.a=d},
c98:function c98(d,e){this.a=d
this.b=e},
cFh:function cFh(){},
aJA:function aJA(d){this.a=d},
ama:function ama(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_1(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$a_1=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.ako(),$async$a_1)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
s=t.gbu().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.P("partner_profiles").ai(0,"business_name").U("id",r).cf(),$async$a_1)
case 4:q=e
t=q==null?null:J.i(q,"business_name")
p=H
o=J.cx(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.P("bookings").ai(0,"*, events(partner_name_1, partner_name_2, location), proposals(title)").U("partner_id",r).cJ(0,"event_date",!1),$async$a_1)
case 5:m=e
x=6
return A.d(u.b.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").U("partner_id",r).G1("booking_id","is",null).tt(0,"created_at"),$async$a_1)
case 6:v=p.cYq(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$a_1,w)}},D,M,N,O,P,Q,R,I
J=c[1]
A=c[0]
C=c[2]
E=c[125]
K=c[92]
L=c[208]
F=c[106]
G=c[269]
H=c[134]
B=a.updateHolder(c[38],B)
D=c[355]
M=c[110]
N=c[261]
O=c[190]
P=c[324]
Q=c[343]
R=c[341]
I=c[150]
B.E1.prototype={}
B.La.prototype={}
B.tB.prototype={
I(){return"PayoutMode."+this.b}}
B.EW.prototype={
S(){return new B.aJP()}}
B.aJP.prototype={
Es(d){return this.bl3(d)},
bl3(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Es=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fY(!0,new B.cgI(r,d),i,y.y),$async$Es)
case 3:if(f!==!0||r.c==null){x=1
break}r.p(new B.cgJ(r))
u=5
x=8
return A.d(K.aUB(d.Q),$async$Es)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gR().aj($.z7())
p=q.c
i=r.c
i.toString
n=A.aI(q.b/100,!0)
m=A.aI(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+C.f.aT(C.j.k(A.aD(p)),2,"0")+"/"+C.f.aT(C.j.k(A.av(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.X(L.lA,l),new A.X(G.nI,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bRg],y.O)
A.ad(i).ak("/pay/done",new M.a5S("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.wX){o=i
i=r.c
if(i!=null)i.O(y.q).f.a0(A.bX(null,null,null,null,null,C.y,null,A.h(F.aU3(o.a),null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a0(D.bYt)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.p(new B.cgK(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Es,w)},
K7(d){return this.bbJ(d)},
bbJ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$K7=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=B.d6s(d.ax)
n=s.c
n.toString
x=3
return A.d(A.bP(null,new B.cgF(o),!1,n,!0,!1,null,y.T),$async$K7)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(B.cRm(r),$async$K7)
case 8:s.gR().aj($.z7())
n=s.c
if(n!=null)n.O(y.q).f.a0(A.bX(null,null,null,null,null,C.y,null,A.h("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.wX){q=n
n=s.c
if(n!=null)n.O(y.q).f.a0(A.bX(null,null,null,null,null,C.y,null,A.h(F.aU3(q.a),null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a0(O.HN)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$K7,w)},
u(d){var x=this,w=null,v=x.gR().G($.z7(),y.I),u=$.at,t=D.arS.C(0,new A.a3(0,A.aS(d,C.b5,y.w).w.r.b,0,0)),s=y.p
return A.cO(w,C.by,A.bz(!0,A.AX(A.d4(A.a([new A.S(D.ate,A.N(A.a([new A.EB(new B.cgM(d),w)],s),C.v,C.h,C.l,0,w),w),D.bKn,new A.S(C.bG,A.hC(v,new B.cgN(x),new B.cgO(x),new B.cgP(),!1,!0,!1),w),D.bKQ],s),w,t,w,w,!1,!1),u,new B.cgQ(x)),w,C.Z,!1),!0,w)},
b7q(d){var x=null,w=A.x(x,D.apc,C.r,x,x,new A.I(C.t,x,x,A.W(22),x,x,C.x),x,x,x,C.bn,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.z(A.a([w,D.bU0,D.coo,C.ac,D.coa,C.ac,D.cog,C.bh,new B.aKf(v,new B.cgE(this),x)],y.p),C.E,C.h,C.l)},
aQH(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=A.W(22),g=A.W(999)
g=A.x(l,A.h(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,C.he,l,l),C.r,l,l,new A.I(C.cx,l,l,g,l,l,C.x),l,l,l,C.dk,l,l,l)
x=d.Q
w=x/100
v=A.h(A.aI(w,!0),l,l,l,l,C.ka,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aI(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.p(d.y)+" "+B.dBa(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.p(d.y)+".")
q=y.p
u=A.a([g,C.ac,D.cbI,C.aD,v,C.P,A.h(C.e.a1(u," "),l,l,l,l,C.hc,l,l)],q)
if(r&&j&&x>0){g=m.w?k:"Levantar j\xe1 "+A.aI(w,!0)
C.e.n(u,A.a([C.aA,new A.jJ(g,i?new B.cgz(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aI(w,!0):"Sem saldo para levantar"
C.e.n(u,A.a([C.aA,new A.jJ(j,i?new B.cgA(m,d):l,!1,!1,l)],q))}j=A.a([A.x(l,A.z(u,C.G,C.h,C.l),C.r,l,l,new A.I(C.t,l,l,h,l,l,C.x),l,l,l,C.bn,l,l,l),D.cn1],q)
if(d.gG0())C.e.n(j,A.a([C.R,new B.ama("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new B.cgB(m),C.f4,l)],q))
j.push(D.bTV)
j.push(D.bTY)
h=y.S
g=A.a([],h)
x=d.at
w=x.length
if(w===0)g.push(D.cnu)
else for(p=0;p<x.length;x.length===w||(0,A.H)(x),++p){o=x[p]
v=A.aI(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":C.f.aT(C.j.k(A.aD(n)),2,"0")+"/"+C.f.aT(C.j.k(A.av(n)),2,"0")+"/"+A.aL(n)
g.push(new B.ru(v,u,o.gPs(),l))}j.push(new A.c1("Levantamentos",l,A.a([new B.Hj(g,l)],q),16,l))
g=d.y
if(g==null)g=d.gG0()?"Em falta":""
else g="\xb7\xb7\xb7\xb7 "+g
j.push(new A.c1("Conta",l,A.a([new B.Hj(A.a([new B.ru("Dados e IBAN",l,g,new B.cgC(m)),new B.ru("Modo de levantamento",l,B.d6s(t).d,new B.cgD(m,d))],h),l)],q),16,l))
return A.z(j,C.E,C.h,C.l)}}
B.ru.prototype={}
B.Hj.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=y.p,m=A.a([],n)
for(x=this.c,w=A.et(x,0,y.z),v=J.an(w.a),u=w.b,w=new A.bW(v,u,A.u(w).i("bW<1>"));w.q();){t=w.c
t=t>=0?new A.X(u+t,v.gE(v)):A.al(A.c_())
s=t.b
r=s.d
t=t.a<x.length-1?R.mF:o
q=A.a([A.h(s.a,o,o,o,o,C.a9,o,o)],n)
p=s.b
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,C.hf,o,o))
q=A.a([new A.bI(1,C.at,A.z(q,C.G,C.bR,C.l),o)],n)
p=s.c
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,C.jb,o,o))
if(r!=null)C.e.n(q,A.a([C.bj,Q.PQ],n))
m.push(A.cp(C.bu,A.x(o,A.N(q,C.v,C.h,C.l,0,o),C.r,o,C.cL,t,o,o,o,o,o,o,o),C.W,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,C.aE))}return A.x(o,A.z(m,C.v,C.h,C.l),C.r,o,o,o,o,o,o,C.Z,o,o,o)}}
B.aHg.prototype={
b9(d,e){var x,w,v,u,t,s,r=null,q=e.G($.cTY(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bzf
w=new B.c4B()
if(x.length===0){q=q?r:p.e
return new B.Hj(A.a([(q==null?0:q)>0.009?new B.ru("Pago, por libertar",r,A.aI(p.e,!1),r):D.cnv],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.H)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.p(w.$1(s.dF()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.p(w.$1(s.dF()))}q.push(new B.ru(t.a,s,A.aI(t.c,!0),r))}return new B.Hj(q,r)}}
B.aQb.prototype={
b9(d,e){var x,w,v=null,u=e.G($.cTY(),y.Q),t=u.gv(u)
u=e.G($.d17(),y.l)
x=u.gv(u)
if(x==null)x=C.fc
u=t==null
w=u?v:t.c
w=A.aI(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new B.ru("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new B.ru("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aI(u==null?0:u,!1),v)],y.S)
return A.z(A.a([new B.Hj(u,v),C.P,A.h("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.Mn(new B.cAx())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,C.hc,v,v)],y.p),C.E,C.h,C.l)}}
B.Ze.prototype={
u(d){var x=this,w=null,v=I.cTa(w,22,1),u=y.p
return A.x(w,A.N(A.a([A.VL(x.d,C.VN[C.j.aI(x.c,4)]),C.af,A.a4(A.z(A.a([A.h(x.e,w,w,w,w,C.eG,w,w),C.aU,A.h(x.f,w,w,w,w,C.a9C,w,w)],u),C.G,C.h,C.l),1)],u),C.v,C.h,C.l,0,w),C.r,w,w,v,w,w,w,C.cT,w,w,w)}}
B.aKf.prototype={
u(d){var x=null,w=A.cb(C.z,C.z.cc(0.35),C.t,C.t,x,x,C.aa,x,x,C.oO),v=A.a([],y.p)
v.push(new A.dh(1,C.ba,A.h(this.c,1,C.a1,x,x,x,x,x),x))
return A.aJ(A.bA(A.N(v,C.v,C.h,C.J,0,x),this.e,w),54,x)}}
B.Za.prototype={
u(d){var x=null
return A.N(A.a([A.b8(this.c,$.at,x,x,18),C.ae,A.a4(A.h(this.d,x,x,x,x,C.Io,x,x),1)],y.p),C.v,C.h,C.l,0,x)}}
B.Xp.prototype={
u(d){var x=null,w=I.cTa(x,22,1)
return A.x(x,A.z(A.a([A.h(this.c,x,x,x,x,C.mj,C.a3,x),A.cG(C.t2,x,x,this.d,x,x)],y.p),C.v,C.h,C.l),C.r,x,x,w,x,x,x,C.bn,x,x,x)}}
B.OI.prototype={
S(){return new B.aID()}}
B.aID.prototype={
gbg5(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.Wl[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.at:m
s=u===w?2:1
r=new A.b5(18,18)
if(t==null)t=m
else{q=new A.bf(t,s,C.aj,-1)
t=new A.dL(q,q,q,q)}s=w===D.a1O?D.aBE:C.DP
s=A.b8(s,$.at,m,m,m)
p=A.z(A.a([A.h(w.d,m,m,m,m,C.eG,m,m),A.h(w.e,m,m,m,m,C.be,m,m)],l),C.G,C.h,C.l)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aC6:D.aC7
C.e.n(k,A.a([A.cp(m,A.fG(m,A.N(A.a([s,C.af,new A.bI(1,C.at,p,m),A.b8(o,u===w?$.at:C.bF,m,m,m)],l),C.v,C.h,C.l,0,m),m,C.aL,new A.I(C.t,m,t,new A.cy(r,r,r,r),C.bq,m,C.x),C.dy,m,m,m,C.ed,m),C.W,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.c96(n,w),m,m,m,m,m,m,!1,C.aE),C.P],l))}return new A.eS(D.cdm,A.z(k,C.v,C.h,C.J),A.a([A.cG(C.cZ,m,m,new B.c97(d),m,m),A.bA(C.du,new B.c98(n,d),m)],l),m)}}
B.aJA.prototype={
b9(d,e){var x=null,w=e.G($.dkx(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return C.ao
return new A.S(C.jA,A.p9(A.h("Taxas de servi\xe7o de reservas que cancelaste: "+A.aI(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,C.a9s,x,x),C.t,C.ed,14,C.f4),x)}}
B.ama.prototype={
u(d){var x=this,w=null,v=x.f,u=A.a4(A.h(x.c,2,C.a1,w,w,C.dZ,w,w),1),t=A.W(16)
return A.cp(C.bu,A.p9(A.N(A.a([new A.HZ(v,w),C.ae,u,C.ae,A.x(C.K,A.h(x.d,w,w,w,w,C.k8,w,w),C.r,w,w,new A.I(C.z,w,w,t,w,w,C.x),w,32,w,C.cG,w,w,w)],y.p),C.v,C.h,C.l,0,w),C.t,C.N0,14,v),C.W,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,C.aE)}}
var z=a.updateTypes(["F<La>(as)","v(E1,E1)","C(tB)","tB()","OI(O)","Xp(L,c6)","e(mC)","F<lR>()"])
B.cLC.prototype={
$1(d){return this.aFL(d)},
aFL(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.Cj(b6)
b2=null
b3=!0
u=4
s=$.Q().b
s===$&&A.b()
x=7
return A.d(s.P("bookings").ai(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").U("partner_id",b1).dK("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 7:b2=b8
u=2
x=6
break
case 4:u=3
b4=t.pop()
x=A.a9(b4) instanceof A.cS?8:10
break
case 8:b3=!1
u=12
s=$.Q().b
s===$&&A.b()
x=15
return A.d(s.P("bookings").ai(0,"total_amount, status, payments(type, status, amount, released_at)").U("partner_id",b1).dK("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 15:b2=b8
u=3
x=14
break
case 12:u=11
b5=t.pop()
x=A.a9(b5) instanceof A.cS?16:18
break
case 16:s=$.Q().b
s===$&&A.b()
x=19
return A.d(s.P("bookings").ai(0,"total_amount, status, payments(type, status, amount)").U("partner_id",b1).dK("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
for(s=y.a,p=J.bd(b2,s),o=A.u(p),p=new A.ag(p,p.gA(p),o.i("ag<V.E>")),n=y.h,m=y.g,o=o.i("V.E"),l=0,k=0,j=0,i=0;p.q();){h=p.d
if(h==null)h=o.a(h)
g=J.a7(h)
f=A.du(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bd(e==null?C.ai:e,s)
d=A.u(e)
e=new A.ag(e,e.gA(e),d.i("ag<V.E>"))
d=d.i("V.E")
a0=0
a1=0
while(e.q()){a2=e.d
if(a2==null)a2=d.a(a2)
a3=J.a7(a2)
a4=A.du(a3.h(a2,"amount"))
if(J.o(a3.h(a2,"status"),"paid"))a0+=a4
if(J.o(a3.h(a2,"status"),"paid")&&a3.au(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.B(a3.h(a2,"paid_at"))
a7=A.d0(a6==null?"":a6)
a6=A.B(g.h(h,"event_date"))
a8=A.d0(a6==null?"":a6)
a6=A.cYv(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.ek(1728e8)
else a9=a8==null?null:a8.ek(2592e8)
q.push(new B.E1(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}C.e.cq(q,new B.cLB())
v=new B.La(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
B.cLB.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bY(9999,1,1,0,0)
x=e.d
return w.bA(0,x==null?A.bY(9999,1,1,0,0):x)},
$S:z+1}
B.bm7.prototype={
$1(d){return d.c===this.a},
$S:z+2}
B.bm8.prototype={
$0(){return D.a1P},
$S:z+3}
B.cgI.prototype={
$1(d){var x,w=null,v=this.b,u=A.h(A.aI(v.Q/100,!0),w,w,w,w,D.c2V,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eS(D.ccr,A.z(A.a([u,C.R,new B.Za(G.nI,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),C.P,D.cnJ,C.P,D.cnI],x),C.E,C.h,C.J),A.a([A.cG(C.cZ,w,w,new B.cgG(d),w,w),A.bA(D.ccI,new B.cgH(d),w)],x),w)},
$S:19}
B.cgG.prototype={
$0(){return A.am(this.a,!1).af(!1)},
$S:0}
B.cgH.prototype={
$0(){return A.am(this.a,!1).af(!0)},
$S:0}
B.cgJ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cgK.prototype={
$0(){return this.a.w=!1},
$S:0}
B.cgF.prototype={
$1(d){return new B.OI(this.a,null)},
$S:z+4}
B.cgQ.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gR()
t=$.z7()
u.aj(t)
u.aj($.cTY())
x=2
return A.d(u.a_(0,t.gdG(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.cgM.prototype={
$0(){var x=this.a,w=A.ad(x).c
w===$&&A.b()
return w.j2()?A.ad(x).af(null):A.ad(x).bQ(0,"/partner-home",null)},
$S:0}
B.cgP.prototype={
$0(){return new A.S(new A.a3(40,40,40,40),C.a8h,null)},
$S:87}
B.cgO.prototype={
$2(d,e){var x=d instanceof E.wX?F.aU3(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new B.Xp(x,new B.cgL(this.a),null)},
$S:z+5}
B.cgL.prototype={
$0(){return this.a.gR().aj($.z7())},
$S:0}
B.cgN.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aQH(d):w.b7q(d)},
$S:z+6}
B.cgE.prototype={
$0(){var x=this.a.c
x.toString
return A.ad(x).ak("/partner-payments/setup",null,y.X)},
$S:0}
B.cgz.prototype={
$0(){return this.a.Es(this.b)},
$S:0}
B.cgA.prototype={
$0(){return this.a.Es(this.b)},
$S:0}
B.cgB.prototype={
$0(){var x=this.a.c
x.toString
return A.ad(x).ak("/partner-payments/setup",null,y.X)},
$S:0}
B.cgC.prototype={
$0(){var x=this.a.c
x.toString
return A.ad(x).ak("/partner-payments/setup",null,y.X)},
$S:0}
B.cgD.prototype={
$0(){return this.a.K7(this.b)},
$S:0}
B.c4B.prototype={
$1(d){return C.f.aT(C.j.k(A.aD(d)),2,"0")+"/"+C.f.aT(C.j.k(A.av(d)),2,"0")},
$S:157}
B.cAx.prototype={
$1(d){return A.aI(d,!1)},
$S:179}
B.c96.prototype={
$0(){var x=this.a
return x.p(new B.c95(x,this.b))},
$S:0}
B.c95.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.c97.prototype={
$0(){return A.am(this.a,!1).bj()},
$S:0}
B.c98.prototype={
$0(){return A.am(this.b,!1).af(this.a.gbg5())},
$S:0}
B.cFh.prototype={
$1(d){return this.aEr(d)},
aEr(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.P("partner_charges").ai(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.an(s);p.q();){q=p.gE(p)
o=r
n=A.aC(J.i(q,"amount"))
if(n==null)n=0
m=A.aC(J.i(q,"settled_amount"))
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
x(B,"dJe","a_1",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[B.E1,B.La,B.ru])
x(A.br,[B.cLC,B.bm7,B.cgI,B.cgF,B.cgN,B.c4B,B.cAx,B.cFh])
x(A.cJ,[B.cLB,B.cgO])
w(B.tB,A.ff)
x(A.bK,[B.bm8,B.cgG,B.cgH,B.cgJ,B.cgK,B.cgQ,B.cgM,B.cgP,B.cgL,B.cgE,B.cgz,B.cgA,B.cgB,B.cgC,B.cgD,B.c96,B.c95,B.c97,B.c98])
w(B.EW,A.dB)
w(B.aJP,A.dv)
x(A.M,[B.Hj,B.Ze,B.aKf,B.Za,B.Xp,B.ama])
x(A.ev,[B.aHg,B.aQb,B.aJA])
w(B.OI,A.G)
w(B.aID,A.a0)})()
A.bp(b.typeUniverse,JSON.parse('{"Xp":{"M":[],"e":[],"f":[]},"OI":{"G":[],"e":[],"f":[]},"EW":{"G":[],"e":[],"f":[]},"aJP":{"a0":["EW"]},"Hj":{"M":[],"e":[],"f":[]},"aHg":{"G":[],"e":[],"f":[]},"aQb":{"G":[],"e":[],"f":[]},"Ze":{"M":[],"e":[],"f":[]},"aKf":{"M":[],"e":[],"f":[]},"Za":{"M":[],"e":[],"f":[]},"aID":{"a0":["OI"]},"aJA":{"G":[],"e":[],"f":[]},"ama":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{I:x("aw<mC>"),l:x("aw<f7>"),Q:x("aw<La>"),Z:x("aw<T>"),P:x("F<mC>"),b:x("r<E1>"),O:x("r<+(aZ,c)>"),s:x("r<c>"),p:x("r<e>"),S:x("r<ru>"),a:x("a5<c,@>"),w:x("ds"),L:x("La"),T:x("tB"),e:x("lR"),N:x("c"),z:x("ru"),q:x("dk"),y:x("C"),i:x("T"),A:x("@"),g:x("t<@>?"),h:x("a5<c,@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cer=new A.D("Recebe pagamentos na app",null,C.it,null,null,null,null,null,null,null)
D.cco=new A.D("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,C.rZ,null,null,null,null,null,null,null)
D.bvs=x([D.cer,C.aD,D.cco],y.p)
D.apc=new A.j1(C.av,C.h,C.l,C.G,null,C.cg,null,0,D.bvs,null)
D.arS=new A.a3(0,8,0,40)
D.ate=new A.a3(20,4,20,0)
D.aBE=new A.aZ(57389,"HeroiconsSolid",null,!1)
D.aC6=new A.aZ(58627,"MaterialIcons",null,!1)
D.aC7=new A.aZ(58628,"MaterialIcons",null,!1)
D.bzf=x([],y.b)
D.a1O=new B.tB("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a1P=new B.tB("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bMf=new B.tB("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bMe=new B.tB("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.Wl=x([D.a1O,D.a1P,D.bMf,D.bMe],A.y("r<tB>"))
D.aH4=new A.lc("Pagamentos","O que recebeste e o que est\xe1 para chegar.",null)
D.bKn=new A.S(C.al,D.aH4,null)
D.azI=new H.DD("Lucros e clientes",!0,B.dJe(),null)
D.bCf=x([D.azI],y.p)
D.bTU=new A.c1("Exportar",null,D.bCf,16,null)
D.bKQ=new A.S(C.bG,D.bTU,null)
D.bRg=new A.X(C.hy,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.clQ=new B.aHg(null)
D.bxA=x([D.clQ],y.p)
D.bTV=new A.c1("A caminho",null,D.bxA,16,null)
D.coD=new B.aQb(null)
D.bxB=x([D.coD],y.p)
D.bTY=new A.c1("Por cobrar",null,D.bxB,16,null)
D.bU0=new A.Mw("Como funciona",null,null)
D.ccm=new A.D("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.bYt=new A.bE(D.ccm,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c2V=new A.P(!0,C.z,null,null,null,null,36,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbI=new A.D("Dispon\xedvel para receber",null,C.hf,null,null,null,null,null,null,null)
D.ccr=new A.D("Levantar saldo",null,null,null,null,null,null,null,null,null)
D.ccI=new A.D("Levantar",null,null,null,null,null,null,null,null,null)
D.cdm=new A.D("Modo de levantamento",null,null,null,null,null,null,null,null,null)
D.cn1=new B.aJA(null)
D.cnu=new B.ru("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.cnv=new B.ru("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.cnI=new B.Za(N.DQ,"Sem custos de levantamento",null)
D.cnJ=new B.Za(C.hy,"Chega em 1 a 3 dias \xfateis",null)
D.coa=new B.Ze(1,C.eS,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.cog=new B.Ze(2,G.nI,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.coo=new B.Ze(0,P.Ov,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYs","cTY",()=>A.ey(new B.cLC(),null,!1,null,null,y.L))
x($,"dVs","dkx",()=>C.bO.$1$1(new B.cFh(),y.i))})()};
(a=>{a["+WW5P8UfWC7in52lXOBgfK7DO2s="]=a.current})($__dart_deferred_initializers__);