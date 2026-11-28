((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,K,L,F,G,H,C={E7:function E7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Lc:function Lc(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cIT:function cIT(){},cIS:function cIS(){},
d3e(d){return B.e.hN(D.X2,new C.blN(d),new C.blO())},
cOm(d){var x=0,w=A.n(y.H)
var $async$cOm=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.Hz(A.S(["action","schedule","interval",d.c],y.N,y.A)),$async$cOm)
case 2:return A.l(null,w)}})
return A.m($async$cOm,w)},
tC:function tC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
blN:function blN(d){this.a=d},
blO:function blO(){},
dqx(){return new C.F2(null)},
dxD(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
F2:function F2(d){this.a=d},
aK_:function aK_(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
cfc:function cfc(d,e){this.a=d
this.b=e},
cfa:function cfa(d){this.a=d},
cfb:function cfb(d){this.a=d},
cfd:function cfd(d){this.a=d},
cfe:function cfe(d){this.a=d},
cf9:function cf9(d){this.a=d},
cfk:function cfk(d){this.a=d},
cfg:function cfg(d){this.a=d},
cfj:function cfj(){},
cfi:function cfi(d){this.a=d},
cff:function cff(d){this.a=d},
cfh:function cfh(d){this.a=d},
cf8:function cf8(d){this.a=d},
cf7:function cf7(){},
cf2:function cf2(d,e){this.a=d
this.b=e},
cf3:function cf3(d,e){this.a=d
this.b=e},
cf4:function cf4(d){this.a=d},
cf5:function cf5(d){this.a=d},
cf6:function cf6(d,e){this.a=d
this.b=e},
rw:function rw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Hm:function Hm(d,e){this.c=d
this.a=e},
aHp:function aHp(d){this.a=d},
c3k:function c3k(){},
aQm:function aQm(d){this.a=d},
cy7:function cy7(){},
Z6:function Z6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKo:function aKo(d,e,f){this.c=d
this.e=e
this.a=f},
Z2:function Z2(d,e,f){this.c=d
this.d=e
this.a=f},
Xh:function Xh(d,e,f){this.c=d
this.d=e
this.a=f},
OC:function OC(d,e){this.c=d
this.a=e},
aIN:function aIN(){this.d=$
this.c=this.a=null},
c7N:function c7N(d,e){this.a=d
this.b=e},
c7M:function c7M(d,e){this.a=d
this.b=e},
c7O:function c7O(d){this.a=d},
c7P:function c7P(d,e){this.a=d
this.b=e},
cCR:function cCR(){},
aJL:function aJL(d){this.a=d},
ame:function ame(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZV(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$ZV=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.akt(),$async$ZV)
case 3:u=$.T()
t=u.b
t===$&&A.b()
s=t.gbE().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.R("partner_profiles").az(0,"business_name").X("id",r).dA(),$async$ZV)
case 4:q=e
t=q==null?null:J.i(q,"business_name")
p=H
o=J.cy(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.R("bookings").az(0,"*, events(partner_name_1, partner_name_2, location), proposals(title)").X("partner_id",r).dl(0,"event_date",!1),$async$ZV)
case 5:m=e
x=6
return A.d(u.b.R("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").X("partner_id",r).Gf("booking_id","is",null).tJ(0,"created_at"),$async$ZV)
case 6:v=p.cVi(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$ZV,w)}},D,M,N,O,P,Q,I
J=c[1]
A=c[0]
B=c[2]
E=c[121]
K=c[92]
L=c[207]
F=c[105]
G=c[266]
H=c[131]
C=a.updateHolder(c[38],C)
D=c[350]
M=c[108]
N=c[189]
O=c[322]
P=c[340]
Q=c[338]
I=c[147]
C.E7.prototype={}
C.Lc.prototype={}
C.tC.prototype={
I(){return"PayoutMode."+this.b}}
C.F2.prototype={
P(){return new C.aK_()}}
C.aK_.prototype={
EC(d){return this.bms(d)},
bms(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$EC=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fM(!0,new C.cfc(r,d),i,y.y),$async$EC)
case 3:if(f!==!0||r.c==null){x=1
break}r.q(new C.cfd(r))
u=5
x=8
return A.d(K.aUK(d.Q),$async$EC)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gS().ai($.zj())
p=q.c
i=r.c
i.toString
n=A.aQ(q.b/100,!0)
m=A.aQ(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+B.f.aY(B.j.k(A.aM(p)),2,"0")+"/"+B.f.aY(B.j.k(A.ay(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.a3(L.vt,l),new A.a3(G.nR,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bSm],y.O)
A.ai(i).ar("/pay/done",new M.a5H("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.x_){o=i
i=r.c
if(i!=null)i.O(y.q).f.a4(A.cB(null,null,null,null,null,B.z,null,A.h(F.aUf(o.a),null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a4(D.bZy)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new C.cfe(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$EC,w)},
Kj(d){return this.bd0(d)},
bd0(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Kj=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=C.d3e(d.ax)
n=s.c
n.toString
x=3
return A.d(A.co(null,new C.cf9(o),!1,n,!0,!1,null,y.T),$async$Kj)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(C.cOm(r),$async$Kj)
case 8:s.gS().ai($.zj())
n=s.c
if(n!=null)n.O(y.q).f.a4(A.cB(null,null,null,null,null,B.z,null,A.h("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.x_){q=n
n=s.c
if(n!=null)n.O(y.q).f.a4(A.cB(null,null,null,null,null,B.z,null,A.h(F.aUf(q.a),null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a4(N.a9d)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Kj,w)},
u(d){var x=this,w=null,v=x.gS().H($.zj(),y.I),u=$.ar,t=D.asR.B(0,new A.a0(0,A.aw(d,B.b0,y.w).w.r.b,0,0)),s=y.p
return A.cO(w,B.by,A.bF(!0,A.yc(A.cX(A.a([new A.Q(D.auh,A.P(A.a([new A.EH(new C.cfg(d),w)],s),B.w,B.i,B.m,0,w,w),w),D.bMd,new A.Q(B.bM,A.hn(v,new C.cfh(x),new C.cfi(x),new C.cfj(),!1,!0,!1),w),D.bMr,D.bLB],s),w,t,w,w,!1,B.a1,!1),u,new C.cfk(x)),w,B.a_,!1),!0,w)},
b8P(d){var x=null,w=A.A(x,D.apX,B.r,x,x,new A.M(B.t,x,x,A.Y(22),x,x,B.y),x,x,x,B.bj,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.B(A.a([w,D.bV9,D.cpR,B.ab,D.cpC,B.ab,D.cpJ,B.bg,new C.aKo(v,new C.cf8(this),x)],y.p),B.I,B.i,B.m,0,B.v)},
aRl(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new C.cf7(),g=A.Y(22),f=A.Y(999)
f=A.A(l,A.h(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,B.k1,l,l,l),B.r,l,l,new A.M(B.df,l,l,f,l,l,B.y),l,l,l,B.dQ,l,l,l)
x=d.Q
w=x/100
v=A.h(A.aQ(w,!0),l,l,l,l,B.j8,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aQ(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+C.dxD(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([f,B.ab,D.cct,B.aE,v,B.X,A.h(B.e.a2(u," "),l,l,l,l,B.h9,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aQ(w,!0)
B.e.n(u,A.a([B.aB,new A.jH(f,i?new C.cf2(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aQ(w,!0):"Sem saldo para levantar"
B.e.n(u,A.a([B.aB,new A.jH(j,i?new C.cf3(m,d):l,!1,!1,l)],q))}j=A.a([A.A(l,A.B(u,B.G,B.i,B.m,0,B.v),B.r,l,l,new A.M(B.t,l,l,g,B.bf,l,B.y),l,l,l,B.bj,l,l,l),D.cot],q)
if(d.gGe())B.e.n(j,A.a([B.Q,new C.ame("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new C.cf4(m),B.hU,l)],q))
j.push(h.$1("A caminho"))
j.push(D.cnj)
j.push(h.$1("Por cobrar"))
j.push(D.cq5)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.coX)
else for(p=0;p<x.length;x.length===w||(0,A.I)(x),++p){o=x[p]
v=A.aQ(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":B.f.aY(B.j.k(A.aM(n)),2,"0")+"/"+B.f.aY(B.j.k(A.ay(n)),2,"0")+"/"+A.aE(n)
f.push(new C.rw(v,u,o.gPU(),l))}j.push(new C.Hm(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gGe()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new C.Hm(A.a([new C.rw("Dados e IBAN",l,f,new C.cf5(m)),new C.rw("Modo de levantamento",l,C.d3e(t).d,new C.cf6(m,d))],g),l))
return A.B(j,B.I,B.i,B.m,0,B.v)}}
C.rw.prototype={}
C.Hm.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.Y(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.eA(x,0,y.z),v=J.aq(w.a),u=w.b,w=new A.c0(v,u,A.u(w).i("c0<1>"));w.t();){t=w.c
t=t>=0?new A.a3(u+t,v.gE(v)):A.aj(A.c2())
s=t.b
r=s.d
t=t.a<x.length-1?Q.pC:o
q=A.a([A.h(s.a,o,o,o,o,B.aj,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.hc,o,o,o))
q=A.a([new A.bR(1,B.aw,A.B(q,B.G,B.bV,B.m,0,B.v),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.j7,o,o,o))
if(r!=null)B.e.n(q,A.a([B.bl,P.Qr],m))
l.push(A.de(B.bU,A.A(o,A.P(q,B.w,B.i,B.m,0,o,o),B.r,o,B.dD,t,o,o,o,o,o,o,o),B.a0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,B.b_))}return A.A(o,A.B(l,B.w,B.i,B.m,0,B.v),B.r,o,o,new A.M(B.t,o,o,n,o,o,B.y),o,o,o,B.dS,o,o,o)}}
C.aHp.prototype={
bc(d,e){var x,w,v,u,t,s,r=null,q=e.H($.cQL(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bAf
w=new C.c3k()
if(x.length===0){q=q?r:p.e
return new C.Hm(A.a([(q==null?0:q)>0.009?new C.rw("Pago, por libertar",r,A.aQ(p.e,!1),r):D.coY],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.I)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.e8()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.e8()))}q.push(new C.rw(t.a,s,A.aQ(t.c,!0),r))}return new C.Hm(q,r)}}
C.aQm.prototype={
bc(d,e){var x,w,v=null,u=e.H($.cQL(),y.Q),t=u.gv(u)
u=e.H($.cYW(),y.l)
x=u.gv(u)
if(x==null)x=B.f8
u=t==null
w=u?v:t.c
w=A.aQ(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new C.rw("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new C.rw("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aQ(u==null?0:u,!1),v)],y.S)
return A.B(A.a([new C.Hm(u,v),B.X,A.h("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.MB(new C.cy7())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,B.h9,v,v,v)],y.p),B.I,B.i,B.m,0,B.v)}}
C.Z6.prototype={
u(d){var x=this,w=null,v=I.cPZ(w,22,1),u=y.p
return A.A(w,A.P(A.a([A.VD(x.d,B.Wq[B.j.ao(x.c,4)]),B.ah,A.a5(A.B(A.a([A.h(x.e,w,w,w,w,B.f_,w,w,w),B.bc,A.h(x.f,w,w,w,w,B.aad,w,w,w)],u),B.G,B.i,B.m,0,B.v),1)],u),B.w,B.i,B.m,0,w,w),B.r,w,w,v,w,w,w,B.cv,w,w,w)}}
C.aKo.prototype={
u(d){var x=null,w=A.cs(B.A,B.A.cc(0.35),B.t,B.t,x,x,B.ad,x,x,B.oZ),v=A.a([],y.p)
v.push(new A.dx(1,B.be,A.h(this.c,1,B.a2,x,x,x,x,x,x),x))
return A.aI(A.bE(A.P(v,B.w,B.i,B.K,0,x,x),this.e,w),54,x)}}
C.Z2.prototype={
u(d){var x=null
return A.P(A.a([A.b2(this.c,$.ar,x,x,18),B.am,A.a5(A.h(this.d,x,x,x,x,B.IN,x,x,x),1)],y.p),B.w,B.i,B.m,0,x,x)}}
C.Xh.prototype={
u(d){var x=null,w=I.cPZ(x,22,1)
return A.A(x,A.B(A.a([A.h(this.c,x,x,x,x,B.k2,B.a6,x,x),A.cp(B.tm,x,x,this.d,x,x)],y.p),B.w,B.i,B.m,0,B.v),B.r,x,x,w,x,x,x,B.bj,x,x,x)}}
C.OC.prototype={
P(){return new C.aIN()}}
C.aIN.prototype={
gbhh(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.X2[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.ar:m
s=u===w?2:1
r=new A.b5(18,18)
if(t==null)t=m
else{q=new A.bc(t,s,B.ag,-1)
t=new A.dR(q,q,q,q)}s=w===D.a2u?D.aCu:B.Ec
s=A.b2(s,$.ar,m,m,m)
p=A.B(A.a([A.h(w.d,m,m,m,m,B.f_,m,m,m),A.h(w.e,m,m,m,m,B.ba,m,m,m)],l),B.G,B.i,B.m,0,B.v)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aCX:D.aCY
B.e.n(k,A.a([A.de(m,A.fv(m,A.P(A.a([s,B.ah,new A.bR(1,B.aw,p,m),A.b2(o,u===w?$.ar:B.bA,m,m,m)],l),B.w,B.i,B.m,0,m,m),m,B.aN,new A.M(B.t,m,t,new A.ch(r,r,r,r),B.bf,m,B.y),B.di,m,m,m,B.dR,m),B.a0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.c7N(n,w),m,m,m,m,m,m,!1,B.b_),B.X],l))}return new A.eK(D.cfb,A.B(k,B.w,B.i,B.K,0,B.v),A.a([A.cp(B.cO,m,m,new C.c7O(d),m,m),A.bE(B.du,new C.c7P(n,d),m)],l),m)}}
C.aJL.prototype={
bc(d,e){var x=null,w=e.H($.dh7(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return B.ar
return new A.Q(B.ko,A.uB(A.h("Taxas de servi\xe7o de reservas que cancelaste: "+A.aQ(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,B.IA,x,x,x),B.t,B.dR,14,B.hU),x)}}
C.ame.prototype={
u(d){var x=this,w=null,v=x.f,u=A.a5(A.h(x.c,2,B.a2,w,w,B.dt,w,w,w),1),t=A.Y(16)
return A.de(B.bU,A.uB(A.P(A.a([new A.I_(v,w),B.am,u,B.am,A.A(B.L,A.h(x.d,w,w,w,w,B.th,w,w,w),B.r,w,w,new A.M(B.A,w,w,t,w,w,B.y),w,32,w,B.dj,w,w,w)],y.p),B.w,B.i,B.m,0,w,w),B.t,B.NB,14,v),B.a0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,B.b_)}}
var z=a.updateTypes(["F<Lc>(au)","v(E7,E7)","y(tC)","tC()","OC(O)","Xh(J,bX)","e(mD)","F<lL>()"])
C.cIT.prototype={
$1(d){return this.aGf(d)},
aGf(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.Cq(b6)
b2=null
b3=!0
u=4
s=$.T().b
s===$&&A.b()
x=7
return A.d(s.R("bookings").az(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").X("partner_id",b1).eP("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
s=$.T().b
s===$&&A.b()
x=15
return A.d(s.R("bookings").az(0,"total_amount, status, payments(type, status, amount, released_at)").X("partner_id",b1).eP("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 15:b2=b8
u=3
x=14
break
case 12:u=11
b5=t.pop()
x=A.a9(b5) instanceof A.cU?16:18
break
case 16:s=$.T().b
s===$&&A.b()
x=19
return A.d(s.R("bookings").az(0,"total_amount, status, payments(type, status, amount)").X("partner_id",b1).eP("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
for(s=y.a,p=J.bl(b2,s),o=A.u(p),p=new A.ak(p,p.gA(p),o.i("ak<U.E>")),n=y.h,m=y.g,o=o.i("U.E"),l=0,k=0,j=0,i=0;p.t();){h=p.d
if(h==null)h=o.a(h)
g=J.a7(h)
f=A.du(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bl(e==null?B.al:e,s)
d=A.u(e)
e=new A.ak(e,e.gA(e),d.i("ak<U.E>"))
d=d.i("U.E")
a0=0
a1=0
while(e.t()){a2=e.d
if(a2==null)a2=d.a(a2)
a3=J.a7(a2)
a4=A.du(a3.h(a2,"amount"))
if(J.o(a3.h(a2,"status"),"paid"))a0+=a4
if(J.o(a3.h(a2,"status"),"paid")&&a3.aw(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.E(a3.h(a2,"paid_at"))
a7=A.dN(a6==null?"":a6)
a6=A.E(g.h(h,"event_date"))
a8=A.dN(a6==null?"":a6)
a6=A.cVn(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.e9(1728e8)
else a9=a8==null?null:a8.e9(2592e8)
q.push(new C.E7(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}B.e.cP(q,new C.cIS())
v=new C.Lc(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
C.cIS.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bD(9999,1,1,0,0)
x=e.d
return w.bC(0,x==null?A.bD(9999,1,1,0,0):x)},
$S:z+1}
C.blN.prototype={
$1(d){return d.c===this.a},
$S:z+2}
C.blO.prototype={
$0(){return D.a2v},
$S:z+3}
C.cfc.prototype={
$1(d){var x,w=null,v=this.b,u=A.h(A.aQ(v.Q/100,!0),w,w,w,w,D.c4m,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eK(D.ceN,A.B(A.a([u,B.Q,new C.Z2(G.nR,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),B.X,D.cpb,B.X,D.cpa],x),B.I,B.i,B.K,0,B.v),A.a([A.cp(B.cO,w,w,new C.cfa(d),w,w),A.bE(D.cfV,new C.cfb(d),w)],x),w)},
$S:16}
C.cfa.prototype={
$0(){return A.ap(this.a,!1).aj(!1)},
$S:0}
C.cfb.prototype={
$0(){return A.ap(this.a,!1).aj(!0)},
$S:0}
C.cfd.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cfe.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cf9.prototype={
$1(d){return new C.OC(this.a,null)},
$S:z+4}
C.cfk.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gS()
t=$.zj()
u.ai(t)
u.ai($.cQL())
x=2
return A.d(u.a0(0,t.gel(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
C.cfg.prototype={
$0(){var x=this.a,w=A.ai(x).c
w===$&&A.b()
return w.je()?A.ai(x).aj(null):A.ai(x).bS(0,"/partner-home",null)},
$S:0}
C.cfj.prototype={
$0(){return new A.Q(new A.a0(40,40,40,40),B.a8Y,null)},
$S:91}
C.cfi.prototype={
$2(d,e){var x=d instanceof E.x_?F.aUf(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new C.Xh(x,new C.cff(this.a),null)},
$S:z+5}
C.cff.prototype={
$0(){return this.a.gS().ai($.zj())},
$S:0}
C.cfh.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aRl(d):w.b8P(d)},
$S:z+6}
C.cf8.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).ar("/partner-payments/setup",null,y.X)},
$S:0}
C.cf7.prototype={
$1(d){return new A.Q(D.asE,new A.kr(d,null),null)},
$S:213}
C.cf2.prototype={
$0(){return this.a.EC(this.b)},
$S:0}
C.cf3.prototype={
$0(){return this.a.EC(this.b)},
$S:0}
C.cf4.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).ar("/partner-payments/setup",null,y.X)},
$S:0}
C.cf5.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).ar("/partner-payments/setup",null,y.X)},
$S:0}
C.cf6.prototype={
$0(){return this.a.Kj(this.b)},
$S:0}
C.c3k.prototype={
$1(d){return B.f.aY(B.j.k(A.aM(d)),2,"0")+"/"+B.f.aY(B.j.k(A.ay(d)),2,"0")},
$S:138}
C.cy7.prototype={
$1(d){return A.aQ(d,!1)},
$S:153}
C.c7N.prototype={
$0(){var x=this.a
return x.q(new C.c7M(x,this.b))},
$S:0}
C.c7M.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.c7O.prototype={
$0(){return A.ap(this.a,!1).bF()},
$S:0}
C.c7P.prototype={
$0(){return A.ap(this.b,!1).aj(this.a.gbhh())},
$S:0}
C.cCR.prototype={
$1(d){return this.aEZ(d)},
aEZ(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.R("partner_charges").az(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.aq(s);p.t();){q=p.gE(p)
o=r
n=A.aK(J.i(q,"amount"))
if(n==null)n=0
m=A.aK(J.i(q,"settled_amount"))
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
$S:157};(function installTearOffs(){var x=a._static_0
x(C,"dFE","ZV",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[C.E7,C.Lc,C.rw])
x(A.bx,[C.cIT,C.blN,C.cfc,C.cf9,C.cfh,C.cf7,C.c3k,C.cy7,C.cCR])
x(A.cQ,[C.cIS,C.cfi])
w(C.tC,A.fg)
x(A.bT,[C.blO,C.cfa,C.cfb,C.cfd,C.cfe,C.cfk,C.cfg,C.cfj,C.cff,C.cf8,C.cf2,C.cf3,C.cf4,C.cf5,C.cf6,C.c7N,C.c7M,C.c7O,C.c7P])
w(C.F2,A.dB)
w(C.aK_,A.dw)
x(A.L,[C.Hm,C.Z6,C.aKo,C.Z2,C.Xh,C.ame])
x(A.eo,[C.aHp,C.aQm,C.aJL])
w(C.OC,A.H)
w(C.aIN,A.a_)})()
A.bq(b.typeUniverse,JSON.parse('{"Xh":{"L":[],"e":[],"f":[]},"OC":{"H":[],"e":[],"f":[]},"F2":{"H":[],"e":[],"f":[]},"aK_":{"a_":["F2"]},"Hm":{"L":[],"e":[],"f":[]},"aHp":{"H":[],"e":[],"f":[]},"aQm":{"H":[],"e":[],"f":[]},"Z6":{"L":[],"e":[],"f":[]},"aKo":{"L":[],"e":[],"f":[]},"Z2":{"L":[],"e":[],"f":[]},"aIN":{"a_":["OC"]},"aJL":{"H":[],"e":[],"f":[]},"ame":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{I:x("ax<mD>"),l:x("ax<f8>"),Q:x("ax<Lc>"),Z:x("ax<R>"),P:x("F<mD>"),b:x("r<E7>"),O:x("r<+(aW,c)>"),s:x("r<c>"),p:x("r<e>"),S:x("r<rw>"),a:x("a4<c,@>"),w:x("dm"),L:x("Lc"),T:x("tC"),e:x("lL"),N:x("c"),z:x("rw"),q:x("dt"),y:x("y"),i:x("R"),A:x("@"),g:x("t<@>?"),h:x("a4<c,@>?"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.chW=new A.D("Recebe pagamentos na app",null,B.ij,null,null,null,null,null,null,null,null)
D.ce3=new A.D("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,B.tk,null,null,null,null,null,null,null,null)
D.bDS=x([D.chW,B.aE,D.ce3],y.p)
D.apX=new A.je(B.a1,B.i,B.m,B.G,null,B.v,null,0,D.bDS,null)
D.asE=new A.a0(0,20,0,12)
D.asR=new A.a0(0,8,0,40)
D.auh=new A.a0(20,4,20,0)
D.aCu=new A.aW(57389,"HeroiconsSolid",null,!1)
D.aCX=new A.aW(58627,"MaterialIcons",null,!1)
D.aCY=new A.aW(58628,"MaterialIcons",null,!1)
D.bAf=x([],y.b)
D.a2u=new C.tC("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a2v=new C.tC("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bNq=new C.tC("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bNp=new C.tC("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.X2=x([D.a2u,D.a2v,D.bNq,D.bNp],A.w("r<tC>"))
D.aAK=new H.DH("Lucros e clientes",!0,C.dFE(),null)
D.bLB=new A.Q(B.bM,D.aAK,null)
D.c9i=new A.D("Pagamentos",null,B.he,null,null,null,null,null,null,null,null)
D.bMd=new A.Q(B.au,D.c9i,null)
D.bV7=new A.vS("Exportar",null,null)
D.bMr=new A.Q(B.bM,D.bV7,null)
D.bSm=new A.a3(B.hy,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bV9=new A.vS("Como funciona",null,null)
D.cin=new A.D("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZy=new A.bJ(D.cin,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.z,null)
D.c4m=new A.N(!0,B.A,null,null,null,null,36,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cct=new A.D("Dispon\xedvel para receber",null,B.hc,null,null,null,null,null,null,null,null)
D.ceN=new A.D("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.cfb=new A.D("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.cfV=new A.D("Levantar",null,null,null,null,null,null,null,null,null,null)
D.cnj=new C.aHp(null)
D.cot=new C.aJL(null)
D.coX=new C.rw("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.coY=new C.rw("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.cpa=new C.Z2(B.vs,"Sem custos de levantamento",null)
D.cpb=new C.Z2(B.hy,"Chega em 1 a 3 dias \xfateis",null)
D.cpC=new C.Z6(1,B.ed,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.cpJ=new C.Z6(2,G.nR,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.cpR=new C.Z6(0,O.P8,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.cq5=new C.aQm(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUB","cQL",()=>A.eE(new C.cIT(),null,!1,null,null,y.L))
x($,"dRF","dh7",()=>B.bW.$1$1(new C.cCR(),y.i))})()};
(a=>{a["p8f81wuNkqujDerAmb+iZ3Z1iUU="]=a.current})($__dart_deferred_initializers__);