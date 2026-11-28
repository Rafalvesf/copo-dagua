((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,L,M,N,F,G,O,P,Q,H,I,B={Eg:function Eg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Lq:function Lq(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cMs:function cMs(){},cMr:function cMr(){},
d7I(d){return C.e.hx(D.WB,new B.bnK(d),new B.bnL())},
cSr(d){var x=0,w=A.n(y.H)
var $async$cSr=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.HM(A.R(["action","schedule","interval",d.c],y.N,y.A)),$async$cSr)
case 2:return A.l(null,w)}})
return A.m($async$cSr,w)},
tI:function tI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bnK:function bnK(d){this.a=d},
bnL:function bnL(){},
dvw(){return new B.F8(null)},
dCE(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
F8:function F8(d){this.a=d},
aL5:function aL5(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
chE:function chE(d,e){this.a=d
this.b=e},
chC:function chC(d){this.a=d},
chD:function chD(d){this.a=d},
chF:function chF(d){this.a=d},
chG:function chG(d){this.a=d},
chB:function chB(d){this.a=d},
chM:function chM(d){this.a=d},
chI:function chI(d){this.a=d},
chL:function chL(){},
chK:function chK(d){this.a=d},
chH:function chH(d){this.a=d},
chJ:function chJ(d){this.a=d},
chA:function chA(d){this.a=d},
chv:function chv(d,e){this.a=d
this.b=e},
chw:function chw(d,e){this.a=d
this.b=e},
chx:function chx(d){this.a=d},
chy:function chy(d){this.a=d},
chz:function chz(d,e){this.a=d
this.b=e},
rz:function rz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
HB:function HB(d,e){this.c=d
this.a=e},
aIx:function aIx(d){this.a=d},
c64:function c64(){},
aRw:function aRw(d){this.a=d},
cB4:function cB4(){},
ZK:function ZK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aLy:function aLy(d,e,f){this.c=d
this.e=e
this.a=f},
ZF:function ZF(d,e,f){this.c=d
this.d=e
this.a=f},
XX:function XX(d,e,f){this.c=d
this.d=e
this.a=f},
P0:function P0(d,e){this.c=d
this.a=e},
aJS:function aJS(){this.d=$
this.c=this.a=null},
caG:function caG(d,e){this.a=d
this.b=e},
caF:function caF(d,e){this.a=d
this.b=e},
caH:function caH(d){this.a=d},
caI:function caI(d,e){this.a=d
this.b=e},
cFU:function cFU(){},
aKR:function aKR(d){this.a=d},
an1:function an1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_x(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$a_x=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.alj(),$async$a_x)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
s=t.gbs().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.R("partner_profiles").al(0,"business_name").V("id",r).cd(),$async$a_x)
case 4:q=e
t=q==null?null:J.i(q,"business_name")
p=H
o=J.cy(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.R("bookings").al(0,"*, events(partner_name_1, partner_name_2, location), proposals(title)").V("partner_id",r).cK(0,"event_date",!1),$async$a_x)
case 5:m=e
x=6
return A.d(u.b.R("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("partner_id",r).Yp("booking_id","is",null).tv(0,"created_at"),$async$a_x)
case 6:v=p.cZC(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$a_x,w)}},D,R,S,T,U,K,V
J=c[1]
A=c[0]
C=c[2]
E=c[126]
L=c[91]
M=c[361]
N=c[362]
F=c[106]
G=c[273]
O=c[229]
P=c[186]
Q=c[208]
H=c[134]
I=c[146]
B=a.updateHolder(c[38],B)
D=c[360]
R=c[111]
S=c[265]
T=c[191]
U=c[329]
K=c[148]
V=c[162]
B.Eg.prototype={}
B.Lq.prototype={}
B.tI.prototype={
I(){return"PayoutMode."+this.b}}
B.F8.prototype={
P(){return new B.aL5()}}
B.aL5.prototype={
Ex(d){return this.bmr(d)},
bmr(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Ex=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.hf(!0,new B.chE(r,d),i,y.y),$async$Ex)
case 3:if(f!==!0||r.c==null){x=1
break}r.p(new B.chF(r))
u=5
x=8
return A.d(L.aVY(d.Q),$async$Ex)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gS().ak($.zk())
p=q.c
i=r.c
i.toString
n=A.aL(q.b/100,!0)
m=A.aL(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+C.f.aN(C.j.k(A.aw(p)),2,"0")+"/"+C.f.aN(C.j.k(A.aq(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.X(Q.jT,l),new A.X(G.nR,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bRl],y.O)
A.ae(i).ag("/pay/done",new R.a6u("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.x9){o=i
i=r.c
if(i!=null)i.O(y.q).f.a4(A.c7(null,null,null,null,null,C.x,null,A.h(F.aVn(o.a),null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a4(D.bZ8)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.p(new B.chG(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ex,w)},
Kd(d){return this.bd0(d)},
bd0(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Kd=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=B.d7I(d.ax)
n=s.c
n.toString
x=3
return A.d(A.bR(null,new B.chB(o),!1,n,!0,!1,null,y.T),$async$Kd)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(B.cSr(r),$async$Kd)
case 8:s.gS().ak($.zk())
n=s.c
if(n!=null)n.O(y.q).f.a4(A.c7(null,null,null,null,null,C.x,null,A.h("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.x9){q=n
n=s.c
if(n!=null)n.O(y.q).f.a4(A.c7(null,null,null,null,null,C.x,null,A.h(F.aVn(q.a),null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a4(T.HX)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Kd,w)},
t(d){var x=this,w=null,v=x.gS().G($.zk(),y.I),u=$.ay,t=D.arW.B(0,new A.a3(0,A.aT(d,C.b5,y.w).w.r.b,0,0)),s=y.p
return A.cO(w,C.bA,A.bF(!0,A.B5(A.d3(A.a([new A.S(D.atj,A.N(A.a([new V.Uh(new B.chI(d),w)],s),C.u,C.h,C.l,0,w),w),D.bKh,new A.S(C.bz,A.hA(v,new B.chJ(x),new B.chK(x),new B.chL(),!1,!0,!1),w),D.bKO],s),w,t,w,w,!1,!1),u,new B.chM(x)),w,C.Y,!1),!0,w)},
b8z(d){var x=null,w=A.w(x,D.apg,C.r,x,x,new A.O(C.t,x,x,A.W(22),x,x,C.y),x,x,x,C.bt,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.x(A.a([w,D.bUx,D.cpd,C.ae,D.cp2,C.ae,D.cp5,C.br,new B.aLy(v,new B.chA(this),x)],y.p),C.F,C.h,C.l)},
aRt(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=A.W(22),g=A.W(999)
g=A.w(l,A.h(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,C.jk,l,l),C.r,l,l,new A.O(C.cL,l,l,g,l,l,C.y),l,l,l,C.dJ,l,l,l)
x=d.Q
w=x/100
v=A.h(A.aL(w,!0),l,l,l,l,C.mx,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aL(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.p(d.y)+" "+B.dCE(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.p(d.y)+".")
q=y.p
u=A.a([g,C.ae,D.ccH,C.aE,v,C.M,A.h(C.e.a1(u," "),l,l,l,l,C.hj,l,l)],q)
if(r&&j&&x>0){g=m.w?k:"Levantar j\xe1 "+A.aL(w,!0)
C.e.n(u,A.a([C.aB,new K.tE(g,i?new B.chv(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aL(w,!0):"Sem saldo para levantar"
C.e.n(u,A.a([C.aB,new K.tE(j,i?new B.chw(m,d):l,!1,!1,l)],q))}j=A.a([A.w(l,A.x(u,C.G,C.h,C.l),C.r,l,l,new A.O(C.t,l,l,h,l,l,C.y),l,l,l,C.bt,l,l,l),D.co1],q)
if(d.gG8())C.e.n(j,A.a([C.S,new B.an1("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new B.chx(m),C.f7,l)],q))
j.push(D.bUr)
j.push(D.bUu)
h=y.S
g=A.a([],h)
x=d.at
w=x.length
if(w===0)g.push(D.cov)
else for(p=0;p<x.length;x.length===w||(0,A.I)(x),++p){o=x[p]
v=A.aL(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":C.f.aN(C.j.k(A.aw(n)),2,"0")+"/"+C.f.aN(C.j.k(A.aq(n)),2,"0")+"/"+A.aD(n)
g.push(new B.rz(v,u,o.gPG(),l))}j.push(new A.c1("Levantamentos",l,A.a([new B.HB(g,l)],q),16,l))
g=d.y
if(g==null)g=d.gG8()?"Em falta":""
else g="\xb7\xb7\xb7\xb7 "+g
j.push(new A.c1("Conta",l,A.a([new B.HB(A.a([new B.rz("Dados e IBAN",l,g,new B.chy(m)),new B.rz("Modo de levantamento",l,B.d7I(t).d,new B.chz(m,d))],h),l)],q),16,l))
return A.x(j,C.F,C.h,C.l)}}
B.rz.prototype={}
B.HB.prototype={
t(d){var x,w,v,u,t,s,r,q,p,o=null,n=y.p,m=A.a([],n)
for(x=this.c,w=A.eo(x,0,y.z),v=J.an(w.a),u=w.b,w=new A.bX(v,u,A.u(w).i("bX<1>"));w.q();){t=w.c
t=t>=0?new A.X(u+t,v.gE(v)):A.al(A.c0())
s=t.b
r=s.d
t=t.a<x.length-1?M.pl:o
q=A.a([A.h(s.a,o,o,o,o,C.aa,o,o)],n)
p=s.b
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,C.is,o,o))
q=A.a([new A.bK(1,C.au,A.x(q,C.G,C.bT,C.l),o)],n)
p=s.c
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,C.l5,o,o))
if(r!=null)C.e.n(q,A.a([C.bg,D.aI4],n))
m.push(A.d5(C.bu,A.w(o,A.N(q,C.u,C.h,C.l,0,o),C.r,o,C.cJ,t,o,o,o,o,o,o,o),C.a_,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,C.b_))}return A.w(o,A.x(m,C.u,C.h,C.l),C.r,o,o,o,o,o,o,C.Y,o,o,o)}}
B.aIx.prototype={
b8(d,e){var x,w,v,u,t,s,r=null,q=e.G($.cV7(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bzl
w=new B.c64()
if(x.length===0){q=q?r:p.e
return new B.HB(A.a([(q==null?0:q)>0.009?new B.rz("Pago, por libertar",r,A.aL(p.e,!1),r):D.cow],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.I)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.p(w.$1(s.dH()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.p(w.$1(s.dH()))}q.push(new B.rz(t.a,s,A.aL(t.c,!0),r))}return new B.HB(q,r)}}
B.aRw.prototype={
b8(d,e){var x,w,v=null,u=e.G($.cV7(),y.Q),t=u.gv(u)
u=e.G($.d2d(),y.l)
x=u.gv(u)
if(x==null)x=C.fi
u=t==null
w=u?v:t.c
w=A.aL(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new B.rz("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new B.rz("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aL(u==null?0:u,!1),v)],y.S)
return A.x(A.a([new B.HB(u,v),C.M,A.h("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.My(new B.cB4())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,C.hj,v,v)],y.p),C.F,C.h,C.l)}}
B.ZK.prototype={
t(d){var x=this,w=null,v=I.cUg(w,22,1),u=y.p
return A.w(w,A.N(A.a([A.Wj(x.d,C.W3[C.j.aD(x.c,4)]),C.al,A.a5(A.x(A.a([A.h(x.e,w,w,w,w,C.ea,w,w),C.aS,A.h(x.f,w,w,w,w,C.a9U,w,w)],u),C.G,C.h,C.l),1)],u),C.u,C.h,C.l,0,w),C.r,w,w,v,w,w,w,C.cM,w,w,w)}}
B.aLy.prototype={
t(d){var x=null,w=A.cd(C.a4,C.z.c3(0.35),C.t,C.t,x,x,C.a9,x,x,C.oW),v=A.a([],y.p)
v.push(new A.dg(1,C.be,A.h(this.c,1,C.a1,x,x,x,x,x),x))
return A.aG(new A.am(A.bD(A.N(v,C.u,C.h,C.I,0,x),this.e,w),x),54,x)}}
B.ZF.prototype={
t(d){var x=null
return A.N(A.a([A.b4(this.c,$.ay,x,x,18),C.af,A.a5(A.h(this.d,x,x,x,x,C.Ix,x,x),1)],y.p),C.u,C.h,C.l,0,x)}}
B.XX.prototype={
t(d){var x=null,w=I.cUg(x,22,1)
return A.w(x,A.x(A.a([A.h(this.c,x,x,x,x,C.mu,C.a3,x),new A.am(A.cR(C.t5,x,x,this.d,x,x),x)],y.p),C.u,C.h,C.l),C.r,x,x,w,x,x,x,C.bt,x,x,x)}}
B.P0.prototype={
P(){return new B.aJS()}}
B.aJS.prototype={
gbhn(){var x=this.d
return x===$?this.d=this.a.c:x},
t(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.WB[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.ay:m
s=u===w?2:1
r=new A.b7(18,18)
if(t==null)t=m
else{q=new A.b9(t,s,C.ah,-1)
t=new A.dT(q,q,q,q)}s=w===D.a25?D.aBX:C.E1
s=A.b4(s,$.ay,m,m,m)
p=A.x(A.a([A.h(w.d,m,m,m,m,C.ea,m,m),A.h(w.e,m,m,m,m,C.bk,m,m)],l),C.G,C.h,C.l)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aCq:D.aCr
C.e.n(k,A.a([A.d5(m,A.fv(m,A.N(A.a([s,C.al,new A.bK(1,C.au,p,m),A.b4(o,u===w?$.ay:C.bF,m,m,m)],l),C.u,C.h,C.l,0,m),m,C.aK,new A.O(C.t,m,t,new A.cJ(r,r,r,r),C.bv,m,C.y),C.cs,m,m,m,C.ej,m),C.a_,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.caG(n,w),m,m,m,m,m,m,!1,C.b_),C.M],l))}return new A.f0(D.cei,A.x(k,C.u,C.h,C.I),A.a([new A.am(A.cR(C.d3,m,m,new B.caH(d),m,m),m),new A.am(A.bD(C.dy,new B.caI(n,d),m),m)],l),m)}}
B.aKR.prototype={
b8(d,e){var x=null,w=e.G($.dm_(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return C.ag
return new A.S(C.jM,A.pb(A.h("Taxas de servi\xe7o de reservas que cancelaste: "+A.aL(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,C.a9M,x,x),C.t,C.ej,14,C.f7),x)}}
B.an1.prototype={
t(d){var x=this,w=null,v=x.f,u=A.a5(A.h(x.c,2,C.a1,w,w,C.dx,w,w),1),t=A.W(16)
return A.d5(C.bu,A.pb(A.N(A.a([new A.Ie(v,w),C.af,u,C.af,A.w(C.J,A.h(x.d,w,w,w,w,C.jl,w,w),C.r,w,w,new A.O(C.a4,w,w,t,w,w,C.y),w,32,w,C.cF,w,w,w)],y.p),C.u,C.h,C.l,0,w),C.t,C.Ng,14,v),C.a_,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,C.b_)}}
var z=a.updateTypes(["D<Lq>(at)","v(Eg,Eg)","C(tI)","tI()","P0(M)","XX(L,c6)","e(mJ)","D<lU>()"])
B.cMs.prototype={
$1(d){return this.aGs(d)},
aGs(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.Cu(b6)
b2=null
b3=!0
u=4
s=$.Q().b
s===$&&A.b()
x=7
return A.d(s.R("bookings").al(0,"total_amount, status, event_date, profiles!bookings_couple_id_fkey(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").V("partner_id",b1).dE("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 7:b2=b8
u=2
x=6
break
case 4:u=3
b4=t.pop()
x=A.a9(b4) instanceof A.cQ?8:10
break
case 8:b3=!1
u=12
s=$.Q().b
s===$&&A.b()
x=15
return A.d(s.R("bookings").al(0,"total_amount, status, payments(type, status, amount, released_at)").V("partner_id",b1).dE("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 15:b2=b8
u=3
x=14
break
case 12:u=11
b5=t.pop()
x=A.a9(b5) instanceof A.cQ?16:18
break
case 16:s=$.Q().b
s===$&&A.b()
x=19
return A.d(s.R("bookings").al(0,"total_amount, status, payments(type, status, amount)").V("partner_id",b1).dE("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
for(s=y.a,p=J.bi(b2,s),o=A.u(p),p=new A.aj(p,p.gA(p),o.i("aj<V.E>")),n=y.h,m=y.g,o=o.i("V.E"),l=0,k=0,j=0,i=0;p.q();){h=p.d
if(h==null)h=o.a(h)
g=J.a6(h)
f=A.dt(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bi(e==null?C.aj:e,s)
d=A.u(e)
e=new A.aj(e,e.gA(e),d.i("aj<V.E>"))
d=d.i("V.E")
a0=0
a1=0
while(e.q()){a2=e.d
if(a2==null)a2=d.a(a2)
a3=J.a6(a2)
a4=A.dt(a3.h(a2,"amount"))
if(J.o(a3.h(a2,"status"),"paid"))a0+=a4
if(J.o(a3.h(a2,"status"),"paid")&&a3.av(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.y(a3.h(a2,"paid_at"))
a7=A.d_(a6==null?"":a6)
a6=A.y(g.h(h,"event_date"))
a8=A.d_(a6==null?"":a6)
a6=A.cZG(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.ea(1728e8)
else a9=a8==null?null:a8.ea(2592e8)
q.push(new B.Eg(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}C.e.cv(q,new B.cMr())
v=new B.Lq(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
B.cMr.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bw(9999,1,1,0,0)
x=e.d
return w.bA(0,x==null?A.bw(9999,1,1,0,0):x)},
$S:z+1}
B.bnK.prototype={
$1(d){return d.c===this.a},
$S:z+2}
B.bnL.prototype={
$0(){return D.a26},
$S:z+3}
B.chE.prototype={
$1(d){var x,w=null,v=this.b,u=A.h(A.aL(v.Q/100,!0),w,w,w,w,D.c3M,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.f0(D.cdp,A.x(A.a([u,C.S,new B.ZF(G.nR,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),C.M,D.coM,C.M,D.coL],x),C.F,C.h,C.I),A.a([new A.am(A.cR(C.d3,w,w,new B.chC(d),w,w),w),new A.am(A.bD(D.cdF,new B.chD(d),w),w)],x),w)},
$S:19}
B.chC.prototype={
$0(){return A.ap(this.a,!1).au(!1)},
$S:0}
B.chD.prototype={
$0(){return A.ap(this.a,!1).au(!0)},
$S:0}
B.chF.prototype={
$0(){return this.a.w=!0},
$S:0}
B.chG.prototype={
$0(){return this.a.w=!1},
$S:0}
B.chB.prototype={
$1(d){return new B.P0(this.a,null)},
$S:z+4}
B.chM.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gS()
t=$.zk()
u.ak(t)
u.ak($.cV7())
x=2
return A.d(u.a0(0,t.gdO(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.chI.prototype={
$0(){var x=this.a,w=A.ae(x).c
w===$&&A.b()
return w.hr()?A.ae(x).au(null):A.ae(x).bQ(0,"/partner-home",null)},
$S:0}
B.chL.prototype={
$0(){return new A.S(new A.a3(40,40,40,40),C.a8F,null)},
$S:84}
B.chK.prototype={
$2(d,e){var x=d instanceof E.x9?F.aVn(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new B.XX(x,new B.chH(this.a),null)},
$S:z+5}
B.chH.prototype={
$0(){return this.a.gS().ak($.zk())},
$S:0}
B.chJ.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aRt(d):w.b8z(d)},
$S:z+6}
B.chA.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ag("/partner-payments/setup",null,y.X)},
$S:0}
B.chv.prototype={
$0(){return this.a.Ex(this.b)},
$S:0}
B.chw.prototype={
$0(){return this.a.Ex(this.b)},
$S:0}
B.chx.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ag("/partner-payments/setup",null,y.X)},
$S:0}
B.chy.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ag("/partner-payments/setup",null,y.X)},
$S:0}
B.chz.prototype={
$0(){return this.a.Kd(this.b)},
$S:0}
B.c64.prototype={
$1(d){return C.f.aN(C.j.k(A.aw(d)),2,"0")+"/"+C.f.aN(C.j.k(A.aq(d)),2,"0")},
$S:157}
B.cB4.prototype={
$1(d){return A.aL(d,!1)},
$S:187}
B.caG.prototype={
$0(){var x=this.a
return x.p(new B.caF(x,this.b))},
$S:0}
B.caF.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.caH.prototype={
$0(){return A.ap(this.a,!1).by()},
$S:0}
B.caI.prototype={
$0(){return A.ap(this.b,!1).au(this.a.gbhn())},
$S:0}
B.cFU.prototype={
$1(d){return this.aF8(d)},
aF8(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.R("partner_charges").al(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.an(s);p.q();){q=p.gE(p)
o=r
n=A.aF(J.i(q,"amount"))
if(n==null)n=0
m=A.aF(J.i(q,"settled_amount"))
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
$S:171};(function installTearOffs(){var x=a._static_0
x(B,"dKL","a_x",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[B.Eg,B.Lq,B.rz])
x(A.bv,[B.cMs,B.bnK,B.chE,B.chB,B.chJ,B.c64,B.cB4,B.cFU])
x(A.cM,[B.cMr,B.chK])
w(B.tI,A.fj)
x(A.bO,[B.bnL,B.chC,B.chD,B.chF,B.chG,B.chM,B.chI,B.chL,B.chH,B.chA,B.chv,B.chw,B.chx,B.chy,B.chz,B.caG,B.caF,B.caH,B.caI])
w(B.F8,A.dB)
w(B.aL5,A.dx)
x(A.H,[B.HB,B.ZK,B.aLy,B.ZF,B.XX,B.an1])
x(A.ev,[B.aIx,B.aRw,B.aKR])
w(B.P0,A.G)
w(B.aJS,A.Z)})()
A.bq(b.typeUniverse,JSON.parse('{"XX":{"H":[],"e":[],"f":[]},"P0":{"G":[],"e":[],"f":[]},"F8":{"G":[],"e":[],"f":[]},"aL5":{"Z":["F8"]},"HB":{"H":[],"e":[],"f":[]},"aIx":{"G":[],"e":[],"f":[]},"aRw":{"G":[],"e":[],"f":[]},"ZK":{"H":[],"e":[],"f":[]},"aLy":{"H":[],"e":[],"f":[]},"ZF":{"H":[],"e":[],"f":[]},"aJS":{"Z":["P0"]},"aKR":{"G":[],"e":[],"f":[]},"an1":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{I:x("ax<mJ>"),l:x("ax<f8>"),Q:x("ax<Lq>"),Z:x("ax<T>"),P:x("D<mJ>"),b:x("r<Eg>"),O:x("r<+(aZ,c)>"),s:x("r<c>"),p:x("r<e>"),S:x("r<rz>"),a:x("a4<c,@>"),w:x("dC"),L:x("Lq"),T:x("tI"),e:x("lU"),N:x("c"),z:x("rz"),q:x("dj"),y:x("C"),i:x("T"),A:x("@"),g:x("t<@>?"),h:x("a4<c,@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cfm=new A.E("Recebe pagamentos na app",null,C.jm,null,null,null,null,null,null,null)
D.cdm=new A.E("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,N.IA,null,null,null,null,null,null,null)
D.bvz=x([D.cfm,C.aE,D.cdm],y.p)
D.apg=new A.hY(C.av,C.h,C.l,C.G,null,C.cb,null,0,D.bvz,null)
D.arW=new A.a3(0,8,0,40)
D.atj=new A.a3(20,4,20,0)
D.aBX=new A.aZ(57389,"HeroiconsSolid",null,!1)
D.aCq=new A.aZ(58627,"MaterialIcons",null,!1)
D.aCr=new A.aZ(58628,"MaterialIcons",null,!1)
D.aI4=new P.n0("M9 18l6-6-6-6",16,C.V,1.8,!1,O.cQ,null)
D.bzl=x([],y.b)
D.a25=new B.tI("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a26=new B.tI("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bMg=new B.tI("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bMf=new B.tI("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.WB=x([D.a25,D.a26,D.bMg,D.bMf],A.B("r<tI>"))
D.aHn=new A.li("Pagamentos","O que recebeste e o que est\xe1 para chegar.",null)
D.bKh=new A.S(C.am,D.aHn,null)
D.azY=new H.DQ("Lucros e clientes",!0,B.dKL(),null)
D.bCi=x([D.azY],y.p)
D.bUq=new A.c1("Exportar",null,D.bCi,16,null)
D.bKO=new A.S(C.bz,D.bUq,null)
D.bRl=new A.X(C.fy,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.cmP=new B.aIx(null)
D.bxH=x([D.cmP],y.p)
D.bUr=new A.c1("A caminho",null,D.bxH,16,null)
D.cpt=new B.aRw(null)
D.bxI=x([D.cpt],y.p)
D.bUu=new A.c1("Por cobrar",null,D.bxI,16,null)
D.bUx=new A.MN("Como funciona",null,null)
D.cdk=new A.E("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.bZ8=new A.bI(D.cdk,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.x,null)
D.c3M=new A.P(!0,C.z,null,null,null,null,36,C.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccH=new A.E("Dispon\xedvel para receber",null,C.is,null,null,null,null,null,null,null)
D.cdp=new A.E("Levantar saldo",null,null,null,null,null,null,null,null,null)
D.cdF=new A.E("Levantar",null,null,null,null,null,null,null,null,null)
D.cei=new A.E("Modo de levantamento",null,null,null,null,null,null,null,null,null)
D.co1=new B.aKR(null)
D.cov=new B.rz("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.cow=new B.rz("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.coL=new B.ZF(S.E2,"Sem custos de levantamento",null)
D.coM=new B.ZF(C.fy,"Chega em 1 a 3 dias \xfateis",null)
D.cp2=new B.ZK(1,C.eS,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.cp5=new B.ZK(2,G.nR,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.cpd=new B.ZK(0,U.OM,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_8","cV7",()=>A.ez(new B.cMs(),null,!1,null,null,y.L))
x($,"dX6","dm_",()=>C.bM.$1$1(new B.cFU(),y.i))})()};
(a=>{a["k7IjnQofQiR6Miieue98UBNBwuw="]=a.current})($__dart_deferred_initializers__);