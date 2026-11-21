((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,K,F,G,B={Dd:function Dd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Kh:function Kh(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cyX:function cyX(){},cyW:function cyW(){},
cTL(d){return C.e.je(D.VK,new B.bgO(d),new B.bgP())},
cE9(d){var x=0,w=A.n(y.H)
var $async$cE9=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.GG(A.Q(["action","schedule","interval",d.c],y.N,y.A)),$async$cE9)
case 2:return A.l(null,w)}})
return A.m($async$cE9,w)},
t0:function t0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bgO:function bgO(d){this.a=d},
bgP:function bgP(){},
dfo(){return new B.E8(null)},
dmr(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
E8:function E8(d){this.a=d},
aH7:function aH7(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
c6f:function c6f(d,e){this.a=d
this.b=e},
c6d:function c6d(d){this.a=d},
c6e:function c6e(d){this.a=d},
c6g:function c6g(d){this.a=d},
c6h:function c6h(d){this.a=d},
c6c:function c6c(d){this.a=d},
c6n:function c6n(d){this.a=d},
c6j:function c6j(d){this.a=d},
c6m:function c6m(){},
c6l:function c6l(d){this.a=d},
c6i:function c6i(d){this.a=d},
c6k:function c6k(d){this.a=d},
c6b:function c6b(d){this.a=d},
c6a:function c6a(){},
c65:function c65(d,e){this.a=d
this.b=e},
c66:function c66(d,e){this.a=d
this.b=e},
c67:function c67(d){this.a=d},
c68:function c68(d){this.a=d},
c69:function c69(d,e){this.a=d
this.b=e},
qV:function qV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Gq:function Gq(d,e){this.c=d
this.a=e},
aEF:function aEF(d){this.a=d},
bWX:function bWX(){},
aNf:function aNf(d){this.a=d},
coJ:function coJ(){},
XD:function XD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aHt:function aHt(d,e,f){this.c=d
this.e=e
this.a=f},
Xz:function Xz(d,e,f){this.c=d
this.d=e
this.a=f},
VT:function VT(d,e,f){this.c=d
this.d=e
this.a=f},
Ny:function Ny(d,e){this.c=d
this.a=e},
aG3:function aG3(){this.d=$
this.c=this.a=null},
c_T:function c_T(d,e){this.a=d
this.b=e},
c_S:function c_S(d,e){this.a=d
this.b=e},
c_U:function c_U(d){this.a=d},
c_V:function c_V(d,e){this.a=d
this.b=e},
ctD:function ctD(){},
aGV:function aGV(d){this.a=d},
Yo(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$Yo=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(G.aij(),$async$Yo)
case 3:u=$.R()
t=u.b
t===$&&A.b()
s=t.gbF().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.P("partner_profiles").aG(0,"business_name").V("id",r).dM(),$async$Yo)
case 4:q=e
t=q==null?null:J.h(q,"business_name")
p=G
o=J.cJ(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.P("bookings").aG(0,"id, booking_number, event_date, status, total_amount, events(partner_name_1, partner_name_2, location), proposals(title)").V("partner_id",r).du(0,"event_date",!1),$async$Yo)
case 5:m=e
x=6
return A.d(u.b.P("payments").aG(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("partner_id",r).FN("booking_id","is",null).xM(0,"created_at"),$async$Yo)
case 6:v=p.cL0(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Yo,w)}},D,L,H,M,N,O,P,Q,I
J=c[1]
A=c[0]
C=c[2]
E=c[114]
K=c[84]
F=c[98]
G=c[124]
B=a.updateHolder(c[35],B)
D=c[324]
L=c[101]
H=c[323]
M=c[186]
N=c[289]
O=c[312]
P=c[309]
Q=c[310]
I=c[141]
B.Dd.prototype={}
B.Kh.prototype={}
B.t0.prototype={
H(){return"PayoutMode."+this.b}}
B.E8.prototype={
S(){return new B.aH7()}}
B.aH7.prototype={
Ea(d){return this.bjJ(d)},
bjJ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Ea=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.ha(!0,new B.c6f(r,d),i,y.y),$async$Ea)
case 3:if(f!==!0||r.c==null){x=1
break}r.q(new B.c6g(r))
u=5
x=8
return A.d(K.aRl(d.Q),$async$Ea)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gU().aj($.yx())
p=q.c
i=r.c
i.toString
n=A.aX(q.b/100,!0)
m=A.aX(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+C.f.aY(C.i.k(A.aQ(p)),2,"0")+"/"+C.f.aY(C.i.k(A.aA(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.a6(C.nf,l),new A.a6(H.pZ,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bOC],y.O)
A.ar(i).aW("/pay/done",new L.a3Z("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.wj){o=i
i=r.c
if(i!=null)i.R(y.q).f.a5(A.cA(null,null,null,null,null,C.A,null,A.i(F.aQX(o.a),null,null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.R(y.q).f.a5(D.bUP)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new B.c6h(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ea,w)},
JN(d){return this.bar(d)},
bar(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$JN=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=B.cTL(d.ax)
n=s.c
n.toString
x=3
return A.d(A.cB(null,new B.c6c(o),!0,n,!0,!1,null,y.T),$async$JN)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(B.cE9(r),$async$JN)
case 8:s.gU().aj($.yx())
n=s.c
if(n!=null)n.R(y.q).f.a5(A.cA(null,null,null,null,null,C.A,null,A.i("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.wj){q=n
n=s.c
if(n!=null)n.R(y.q).f.a5(A.cA(null,null,null,null,null,C.A,null,A.i(F.aQX(q.a),null,null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.R(y.q).f.a5(M.a7v)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$JN,w)},
u(d){var x=this,w=null,v=x.gU().L($.yx(),y.I),u=$.aj,t=D.ar0.B(0,new A.a0(0,A.av(d,C.bb,y.w).w.r.b,0,0)),s=y.p
return A.cP(w,C.bC,A.bE(!0,A.An(A.d5(A.a([new A.T(D.ast,A.S(A.a([new A.DN(new B.c6j(d),w)],s),C.x,C.k,C.p,0,w,w),w),D.bIP,new A.T(C.cb,A.fN(v,new B.c6k(x),new B.c6l(x),new B.c6m(),!1,!0,!1),w),D.bIZ,D.bIg],s),w,t,w,w,!1,C.a2,!1),u,new B.c6n(x)),w,C.Z,!1),!0,w)},
b6v(d){var x=null,w=A.C(x,D.ao6,C.r,x,x,new A.L(C.u,x,x,A.X(22),x,x,C.y),x,x,x,C.b9,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.E(A.a([w,D.bRa,D.cl0,C.ac,D.ckM,C.ac,D.ckT,C.bi,new B.aHt(v,new B.c6b(this),x)],y.p),C.J,C.k,C.p,0,C.w)},
aPE(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new B.c6a(),g=A.X(22),f=A.X(999)
f=A.C(l,A.i(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,C.jB,l,l,l),C.r,l,l,new A.L(C.dI,l,l,f,l,l,C.y),l,l,l,C.eC,l,l,l)
x=d.Q
w=x/100
v=A.i(A.aX(w,!0),l,l,l,l,P.ku,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aX(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+B.dmr(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([f,C.ac,D.c7Q,C.az,v,C.Y,A.i(C.e.a9(u," "),l,l,l,l,C.fY,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aX(w,!0)
C.e.p(u,A.a([C.al,new A.jx(f,i?new B.c65(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aX(w,!0):"Sem saldo para levantar"
C.e.p(u,A.a([C.al,new A.jx(j,i?new B.c66(m,d):l,!1,!1,l)],q))}j=A.a([A.C(l,A.E(u,C.I,C.k,C.p,0,C.w),C.r,l,l,new A.L(C.u,l,l,g,C.aI,l,C.y),l,l,l,C.b9,l,l,l),D.cjE],q)
if(d.gFM())C.e.p(j,A.a([C.V,new A.Pd("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new B.c67(m),C.iT,l)],q))
j.push(h.$1("A caminho"))
j.push(D.ciu)
j.push(h.$1("Por cobrar"))
j.push(D.clb)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.ck5)
else for(p=0;p<x.length;x.length===w||(0,A.J)(x),++p){o=x[p]
v=A.aX(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":C.f.aY(C.i.k(A.aQ(n)),2,"0")+"/"+C.f.aY(C.i.k(A.aA(n)),2,"0")+"/"+A.aG(n)
f.push(new B.qV(v,u,o.gPi(),l))}j.push(new B.Gq(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gFM()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new B.Gq(A.a([new B.qV("Dados e IBAN",l,f,new B.c68(m)),new B.qV("Modo de levantamento",l,B.cTL(t).d,new B.c69(m,d))],g),l))
return A.E(j,C.J,C.k,C.p,0,C.w)}}
B.qV.prototype={}
B.Gq.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.X(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.fH(x,0,y.z),v=J.ay(w.a),u=w.b,w=new A.cM(v,u,A.u(w).i("cM<1>"));w.t();){t=w.c
t=t>=0?new A.a6(u+t,v.gE(v)):A.ah(A.ci())
s=t.b
r=s.d
t=t.a<x.length-1?Q.oX:o
q=A.a([A.i(s.a,o,o,o,o,C.aD,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.i(p,o,o,o,o,C.fo,o,o,o))
q=A.a([new A.bT(1,C.av,A.E(q,C.I,C.c4,C.p,0,C.w),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.i(p,o,o,o,o,C.hU,o,o,o))
if(r!=null)C.e.p(q,A.a([C.bt,O.Pa],m))
l.push(A.dH(C.c_,A.C(o,A.S(q,C.x,C.k,C.p,0,o,o),C.r,o,C.h2,t,o,o,o,o,o,o,o),C.a1,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,C.bd))}return A.C(o,A.E(l,C.x,C.k,C.p,0,C.w),C.r,o,o,new A.L(C.u,o,o,n,o,o,C.y),o,o,o,C.e2,o,o,o)}}
B.aEF.prototype={
bg(d,e){var x,w,v,u,t,s,r=null,q=e.L($.cGs(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bx8
w=new B.bWX()
if(x.length===0){q=q?r:p.e
return new B.Gq(A.a([(q==null?0:q)>0.009?new B.qV("Pago, por libertar",r,A.aX(p.e,!1),r):D.ck6],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.J)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.eb()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.eb()))}q.push(new B.qV(t.a,s,A.aX(t.c,!0),r))}return new B.Gq(q,r)}}
B.aNf.prototype={
bg(d,e){var x,w,v=null,u=e.L($.cGs(),y.Q),t=u.gv(u)
u=e.L($.cOA(),y.l)
x=u.gv(u)
if(x==null)x=C.fb
u=t==null
w=u?v:t.c
w=A.aX(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new B.qV("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new B.qV("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aX(u==null?0:u,!1),v)],y.S)
return A.E(A.a([new B.Gq(u,v),C.Y,A.i("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.M_(new B.coJ())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,C.fY,v,v,v)],y.p),C.J,C.k,C.p,0,C.w)}}
B.XD.prototype={
u(d){var x=this,w=null,v=I.OT(w,22,1),u=y.p
return A.C(w,A.S(A.a([A.AK(x.d,w,C.qp[C.i.an(x.c,4)]),C.ak,A.a7(A.E(A.a([A.i(x.e,w,w,w,w,C.f3,w,w,w),C.bg,A.i(x.f,w,w,w,w,C.a8u,w,w,w)],u),C.I,C.k,C.p,0,C.w),1)],u),C.x,C.k,C.p,0,w,w),C.r,w,w,v,w,w,w,C.c7,w,w,w)}}
B.aHt.prototype={
u(d){var x=null,w=A.cc(C.z,C.z.c_(0.35),C.u,C.u,x,x,C.a9,x,x,C.lW),v=A.a([],y.p)
v.push(new A.ei(1,C.bI,A.i(this.c,1,C.a_,x,x,x,x,x,x),x))
return A.aM(A.bB(A.S(v,C.x,C.k,C.U,0,x,x),this.e,w),54,x)}}
B.Xz.prototype={
u(d){var x=null
return A.S(A.a([A.b7(this.c,$.aj,x,x,18),C.aw,A.a7(A.i(this.d,x,x,x,x,C.Hu,x,x,x),1)],y.p),C.x,C.k,C.p,0,x,x)}}
B.VT.prototype={
u(d){var x=null,w=I.OT(x,22,1)
return A.C(x,A.E(A.a([A.i(this.c,x,x,x,x,C.hV,C.a6,x,x),A.cm(C.a9C,x,x,this.d,x,x)],y.p),C.x,C.k,C.p,0,C.w),C.r,x,x,w,x,x,x,C.b9,x,x,x)}}
B.Ny.prototype={
S(){return new B.aG3()}}
B.aG3.prototype={
gbew(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.VK[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.aj:m
s=u===w?2:1
r=new A.b_(18,18)
if(t==null)t=m
else{q=new A.be(t,s,C.af,-1)
t=new A.e8(q,q,q,q)}s=w===D.a11?D.aAa:C.Da
s=A.b7(s,$.aj,m,m,m)
p=A.E(A.a([A.i(w.d,m,m,m,m,C.f3,m,m,m),A.i(w.e,m,m,m,m,C.b0,m,m,m)],l),C.I,C.k,C.p,0,C.w)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aAF:D.aAG
C.e.p(k,A.a([A.dH(m,A.ff(m,A.S(A.a([s,C.ak,new A.bT(1,C.av,p,m),A.b7(o,u===w?$.aj:C.bL,m,m,m)],l),C.x,C.k,C.p,0,m,m),m,C.aL,new A.L(C.u,m,t,new A.bY(r,r,r,r),C.aI,m,C.y),C.dc,m,m,m,C.dw,m),C.a1,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.c_T(n,w),m,m,m,m,m,m,!1,C.bd),C.Y],l))}return new A.eU(D.caz,A.E(k,C.x,C.k,C.U,0,C.w),A.a([A.cm(C.cU,m,m,new B.c_U(d),m,m),A.bB(C.dR,new B.c_V(n,d),m)],l),m)}}
B.aGV.prototype={
bg(d,e){var x=null,w=e.L($.d6x(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return C.aq
return new A.T(C.mQ,new A.oG(C.iT,A.i("Taxas de servi\xe7o de reservas que cancelaste: "+A.aX(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,C.Hi,x,x,x),14,C.dw,x),x)}}
var z=a.updateTypes(["G<Kh>(au)","v(Dd,Dd)","z(t0)","t0()","Ny(N)","VT(K,c4)","e(ml)","G<lu>()"])
B.cyX.prototype={
$1(d){return this.aEB(d)},
aEB(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.BH(b6)
b2=null
b3=!0
u=4
s=$.R().b
s===$&&A.b()
x=7
return A.d(s.P("bookings").aG(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").V("partner_id",b1).fo("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 7:b2=b8
u=2
x=6
break
case 4:u=3
b4=t.pop()
x=A.a9(b4) instanceof A.cW?8:10
break
case 8:b3=!1
u=12
s=$.R().b
s===$&&A.b()
x=15
return A.d(s.P("bookings").aG(0,"total_amount, status, payments(type, status, amount, released_at)").V("partner_id",b1).fo("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 15:b2=b8
u=3
x=14
break
case 12:u=11
b5=t.pop()
x=A.a9(b5) instanceof A.cW?16:18
break
case 16:s=$.R().b
s===$&&A.b()
x=19
return A.d(s.P("bookings").aG(0,"total_amount, status, payments(type, status, amount)").V("partner_id",b1).fo("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
for(s=y.a,p=J.bw(b2,s),o=A.u(p),p=new A.an(p,p.gA(p),o.i("an<V.E>")),n=y.h,m=y.g,o=o.i("V.E"),l=0,k=0,j=0,i=0;p.t();){h=p.d
if(h==null)h=o.a(h)
g=J.a5(h)
f=A.dA(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bw(e==null?C.an:e,s)
d=A.u(e)
e=new A.an(e,e.gA(e),d.i("an<V.E>"))
d=d.i("V.E")
a0=0
a1=0
while(e.t()){a2=e.d
if(a2==null)a2=d.a(a2)
a3=J.a5(a2)
a4=A.dA(a3.h(a2,"amount"))
if(J.o(a3.h(a2,"status"),"paid"))a0+=a4
if(J.o(a3.h(a2,"status"),"paid")&&a3.av(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.M(a3.h(a2,"paid_at"))
a7=A.eK(a6==null?"":a6)
a6=A.M(g.h(h,"event_date"))
a8=A.eK(a6==null?"":a6)
a6=A.cL5(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.dF(1728e8)
else a9=a8==null?null:a8.dF(2592e8)
q.push(new B.Dd(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}C.e.cX(q,new B.cyW())
v=new B.Kh(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
B.cyW.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bN(9999,1,1,0,0)
x=e.d
return w.bC(0,x==null?A.bN(9999,1,1,0,0):x)},
$S:z+1}
B.bgO.prototype={
$1(d){return d.c===this.a},
$S:z+2}
B.bgP.prototype={
$0(){return D.a12},
$S:z+3}
B.c6f.prototype={
$1(d){var x,w=null,v=this.b,u=A.i(A.aX(v.Q/100,!0),w,w,w,w,D.c_K,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eU(D.ca6,A.E(A.a([u,C.V,new B.Xz(H.pZ,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),C.Y,D.ckk,C.Y,D.ckj],x),C.J,C.k,C.U,0,C.w),A.a([A.cm(C.cU,w,w,new B.c6d(d),w,w),A.bB(D.cbf,new B.c6e(d),w)],x),w)},
$S:20}
B.c6d.prototype={
$0(){return A.at(this.a,!1).ar(!1)},
$S:0}
B.c6e.prototype={
$0(){return A.at(this.a,!1).ar(!0)},
$S:0}
B.c6g.prototype={
$0(){return this.a.w=!0},
$S:0}
B.c6h.prototype={
$0(){return this.a.w=!1},
$S:0}
B.c6c.prototype={
$1(d){return new B.Ny(this.a,null)},
$S:z+4}
B.c6n.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gU()
t=$.yx()
u.aj(t)
u.aj($.cGs())
x=2
return A.d(u.a2(0,t.geP(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
B.c6j.prototype={
$0(){var x=this.a,w=A.ar(x).c
w===$&&A.b()
return w.js()?A.ar(x).ar(null):A.ar(x).bS(0,"/partner-home",null)},
$S:0}
B.c6m.prototype={
$0(){var x=null
return new A.T(new A.a0(40,40,40,40),A.bR(A.a_a(x,$.aj,x,x,x,x,x,x,x,x),x,x),x)},
$S:82}
B.c6l.prototype={
$2(d,e){var x=d instanceof E.wj?F.aQX(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new B.VT(x,new B.c6i(this.a),null)},
$S:z+5}
B.c6i.prototype={
$0(){return this.a.gU().aj($.yx())},
$S:0}
B.c6k.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aPE(d):w.b6v(d)},
$S:z+6}
B.c6b.prototype={
$0(){var x=this.a.c
x.toString
return A.ar(x).aW("/partner-payments/setup",null,y.X)},
$S:0}
B.c6a.prototype={
$1(d){return new A.T(D.aqN,new A.kD(d,null),null)},
$S:289}
B.c65.prototype={
$0(){return this.a.Ea(this.b)},
$S:0}
B.c66.prototype={
$0(){return this.a.Ea(this.b)},
$S:0}
B.c67.prototype={
$0(){var x=this.a.c
x.toString
return A.ar(x).aW("/partner-payments/setup",null,y.X)},
$S:0}
B.c68.prototype={
$0(){var x=this.a.c
x.toString
return A.ar(x).aW("/partner-payments/setup",null,y.X)},
$S:0}
B.c69.prototype={
$0(){return this.a.JN(this.b)},
$S:0}
B.bWX.prototype={
$1(d){return C.f.aY(C.i.k(A.aQ(d)),2,"0")+"/"+C.f.aY(C.i.k(A.aA(d)),2,"0")},
$S:110}
B.coJ.prototype={
$1(d){return A.aX(d,!1)},
$S:177}
B.c_T.prototype={
$0(){var x=this.a
return x.q(new B.c_S(x,this.b))},
$S:0}
B.c_S.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.c_U.prototype={
$0(){return A.at(this.a,!1).bQ()},
$S:0}
B.c_V.prototype={
$0(){return A.at(this.b,!1).ar(this.a.gbew())},
$S:0}
B.ctD.prototype={
$1(d){return this.aDy(d)},
aDy(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.P("partner_charges").aG(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.ay(s);p.t();){q=p.gE(p)
o=r
n=A.aR(J.h(q,"amount"))
if(n==null)n=0
m=A.aR(J.h(q,"settled_amount"))
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
$S:172};(function installTearOffs(){var x=a._static_0
x(B,"du3","Yo",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.K,[B.Dd,B.Kh,B.qV])
x(A.bx,[B.cyX,B.bgO,B.c6f,B.c6c,B.c6k,B.c6a,B.bWX,B.coJ,B.ctD])
x(A.cS,[B.cyW,B.c6l])
w(B.t0,A.fx)
x(A.bS,[B.bgP,B.c6d,B.c6e,B.c6g,B.c6h,B.c6n,B.c6j,B.c6m,B.c6i,B.c6b,B.c65,B.c66,B.c67,B.c68,B.c69,B.c_T,B.c_S,B.c_U,B.c_V])
w(B.E8,A.dw)
w(B.aH7,A.dq)
x(A.O,[B.Gq,B.XD,B.aHt,B.Xz,B.VT])
x(A.eD,[B.aEF,B.aNf,B.aGV])
w(B.Ny,A.I)
w(B.aG3,A.a1)})()
A.bu(b.typeUniverse,JSON.parse('{"VT":{"O":[],"e":[],"f":[]},"Ny":{"I":[],"e":[],"f":[]},"E8":{"I":[],"e":[],"f":[]},"aH7":{"a1":["E8"]},"Gq":{"O":[],"e":[],"f":[]},"aEF":{"I":[],"e":[],"f":[]},"aNf":{"I":[],"e":[],"f":[]},"XD":{"O":[],"e":[],"f":[]},"aHt":{"O":[],"e":[],"f":[]},"Xz":{"O":[],"e":[],"f":[]},"aG3":{"a1":["Ny"]},"aGV":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{I:x("aB<ml>"),l:x("aB<eZ>"),Q:x("aB<Kh>"),Z:x("aB<U>"),P:x("G<ml>"),b:x("r<Dd>"),O:x("r<+(aS,c)>"),s:x("r<c>"),p:x("r<e>"),S:x("r<qV>"),a:x("a3<c,@>"),w:x("dy"),L:x("Kh"),T:x("t0"),e:x("lu"),N:x("c"),z:x("qV"),q:x("dJ"),y:x("z"),i:x("U"),A:x("@"),g:x("t<@>?"),h:x("a3<c,@>?"),X:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cd9=new A.A("Recebe pagamentos na app",null,C.jC,null,null,null,null,null,null,null,null)
D.c9l=new A.A("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,C.rB,null,null,null,null,null,null,null,null)
D.bAQ=x([D.cd9,C.az,D.c9l],y.p)
D.ao6=new A.jH(C.a2,C.k,C.p,C.I,null,C.w,null,0,D.bAQ,null)
D.aqN=new A.a0(0,20,0,12)
D.ar0=new A.a0(0,8,0,40)
D.ast=new A.a0(20,4,20,0)
D.aAa=new A.aS(57389,"HeroiconsSolid",null,!1)
D.aAF=new A.aS(58627,"MaterialIcons",null,!1)
D.aAG=new A.aS(58628,"MaterialIcons",null,!1)
D.bx8=x([],y.b)
D.a11=new B.t0("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a12=new B.t0("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bJW=new B.t0("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bJV=new B.t0("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.VK=x([D.a11,D.a12,D.bJW,D.bJV],A.w("r<t0>"))
D.ayG=new G.CR("Lucros e clientes",!0,B.du3(),null)
D.bIg=new A.T(C.cb,D.ayG,null)
D.c4I=new A.A("Pagamentos",null,C.jD,null,null,null,null,null,null,null,null)
D.bIP=new A.T(C.ay,D.c4I,null)
D.bR8=new A.td("Exportar",null,null)
D.bIZ=new A.T(C.cb,D.bR8,null)
D.bOC=new A.a6(C.fG,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bRa=new A.td("Como funciona",null,null)
D.cdz=new A.A("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bUP=new A.bX(D.cdz,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)
D.c_K=new A.H(!0,C.z,null,null,null,null,36,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7Q=new A.A("Dispon\xedvel para receber",null,C.fo,null,null,null,null,null,null,null,null)
D.ca6=new A.A("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.caz=new A.A("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.cbf=new A.A("Levantar",null,null,null,null,null,null,null,null,null,null)
D.ciu=new B.aEF(null)
D.cjE=new B.aGV(null)
D.ck5=new B.qV("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.ck6=new B.qV("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.ckj=new B.Xz(C.uQ,"Sem custos de levantamento",null)
D.ckk=new B.Xz(C.fG,"Chega em 1 a 3 dias \xfateis",null)
D.ckM=new B.XD(1,C.ek,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.ckT=new B.XD(2,H.pZ,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.cl0=new B.XD(0,N.NO,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.clb=new B.aNf(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dIy","cGs",()=>A.eE(new B.cyX(),null,!1,null,null,y.L))
x($,"dFS","d6x",()=>C.ch.$1$1(new B.ctD(),y.i))})()};
(a=>{a["7iuflqcPmlHDaEGXXD2HQVPS7cY="]=a.current})($__dart_deferred_initializers__);