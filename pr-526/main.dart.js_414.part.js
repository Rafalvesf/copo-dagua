((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,K,F,L,G,B={Cm:function Cm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},J5:function J5(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},crb:function crb(){},cra:function cra(){},
cLh(d){return C.e.hv(D.V1,new B.bbF(d),new B.bbG())},
cwn(d){var x=0,w=A.m(y.H)
var $async$cwn=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.FH(A.U(["action","schedule","interval",d.c],y.N,y.A)),$async$cwn)
case 2:return A.k(null,w)}})
return A.l($async$cwn,w)},
rB:function rB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bbF:function bbF(d){this.a=d},
bbG:function bbG(){},
d5a(){return new B.Df(null)},
dbA(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
Df:function Df(d){this.a=d},
aDz:function aDz(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
bZX:function bZX(d,e){this.a=d
this.b=e},
bZV:function bZV(d){this.a=d},
bZW:function bZW(d){this.a=d},
bZY:function bZY(d){this.a=d},
bZZ:function bZZ(d){this.a=d},
bZU:function bZU(d){this.a=d},
c_4:function c_4(d){this.a=d},
c_0:function c_0(d){this.a=d},
c_3:function c_3(){},
c_2:function c_2(d){this.a=d},
c__:function c__(d){this.a=d},
c_1:function c_1(d){this.a=d},
bZT:function bZT(d){this.a=d},
bZS:function bZS(){},
bZN:function bZN(d,e){this.a=d
this.b=e},
bZO:function bZO(d,e){this.a=d
this.b=e},
bZP:function bZP(d){this.a=d},
bZQ:function bZQ(d){this.a=d},
bZR:function bZR(d,e){this.a=d
this.b=e},
qs:function qs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fr:function Fr(d,e){this.c=d
this.a=e},
aB7:function aB7(d){this.a=d},
bPA:function bPA(){},
aJD:function aJD(d){this.a=d},
cha:function cha(){},
VS:function VS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDV:function aDV(d,e,f){this.c=d
this.e=e
this.a=f},
VP:function VP(d,e,f){this.c=d
this.d=e
this.a=f},
U9:function U9(d,e,f){this.c=d
this.d=e
this.a=f},
Mk:function Mk(d,e){this.c=d
this.a=e},
aCv:function aCv(){this.d=$
this.c=this.a=null},
bTz:function bTz(d,e){this.a=d
this.b=e},
bTy:function bTy(d,e){this.a=d
this.b=e},
bTA:function bTA(d){this.a=d},
bTB:function bTB(d,e){this.a=d
this.b=e},
clY:function clY(){},
aDm:function aDm(d){this.a=d},
WE(){var x=0,w=A.m(y.e),v,u,t,s,r,q,p,o,n,m
var $async$WE=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=3
return A.d(G.agi(),$async$WE)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
s=t.gbC().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.P("partner_profiles").az(0,"business_name").W("id",r).dv(),$async$WE)
case 4:q=e
t=q==null?null:J.f(q,"business_name")
p=G
o=J.d1(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.P("bookings").az(0,"id, booking_number, event_date, status, total_amount, events(partner_name_1, partner_name_2, location), proposals(title)").W("partner_id",r).dj(0,"event_date",!1),$async$WE)
case 5:m=e
x=6
return A.d(u.b.P("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("partner_id",r).EY("booking_id","is",null).x6(0,"created_at"),$async$WE)
case 6:v=p.cCU(o,n,m,e,!0)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$WE,w)}},D,M,H,N,O,P,Q,R,S,I
J=c[1]
A=c[0]
C=c[2]
E=c[116]
K=c[85]
F=c[100]
L=c[202]
G=c[126]
B=a.updateHolder(c[35],B)
D=c[347]
M=c[103]
H=c[346]
N=c[200]
O=c[313]
P=c[268]
Q=c[335]
R=c[333]
S=c[334]
I=c[143]
B.Cm.prototype={}
B.J5.prototype={}
B.rB.prototype={
J(){return"PayoutMode."+this.b}}
B.Df.prototype={
S(){return new B.aDz()}}
B.aDz.prototype={
Dp(d){return this.bfQ(d)},
bfQ(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Dp=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fZ(!0,new B.bZX(r,d),i,y.y),$async$Dp)
case 3:if(f!==!0||r.c==null){x=1
break}r.p(new B.bZY(r))
u=5
x=8
return A.d(K.aNI(d.Q),$async$Dp)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gV().ai($.xQ())
p=q.c
i=r.c
i.toString
n=A.aT(q.b/100,!0)
m=A.aT(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+C.f.aS(C.i.j(A.aN(p)),2,"0")+"/"+C.f.aS(C.i.j(A.ay(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.a4(C.n_,l),new A.a4(H.pD,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bNm],y.O)
A.ap(i).aQ("/pay/done",new M.a28("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.af(h)
if(i instanceof E.vG){o=i
i=r.c
if(i!=null)i.R(y.q).f.a3(A.cr(null,null,null,null,null,C.A,null,A.h(F.aNl(o.a),null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.R(y.q).f.a3(D.bTz)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.p(new B.bZZ(r))
x=s.pop()
break
case 7:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Dp,w)},
IQ(d){return this.b6W(d)},
b6W(d){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$IQ=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=B.cLh(d.ax)
n=s.c
n.toString
x=3
return A.d(A.cx(null,new B.bZU(o),!0,n,!0,!1,null,y.T),$async$IQ)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(B.cwn(r),$async$IQ)
case 8:s.gV().ai($.xQ())
n=s.c
if(n!=null)n.R(y.q).f.a3(A.cr(null,null,null,null,null,C.A,null,A.h("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.af(m)
if(n instanceof E.vG){q=n
n=s.c
if(n!=null)n.R(y.q).f.a3(A.cr(null,null,null,null,null,C.A,null,A.h(F.aNl(q.a),null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.R(y.q).f.a3(N.a6G)}x=7
break
case 4:x=2
break
case 7:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$IQ,w)},
u(d){var x=this,w=null,v=x.gV().M($.xQ(),y.I),u=$.ag,t=D.apX.C(0,new A.Z(0,A.au(d,C.ba,y.w).w.r.b,0,0)),s=y.p
return A.cM(w,C.by,A.bA(!0,A.zE(A.cX(A.a([new A.R(D.arn,A.S(A.a([new A.CV(new B.c_0(d),w)],s),C.x,C.j,C.q,0,w,w),w),D.bHC,new A.R(C.c9,A.fC(v,new B.c_1(x),new B.c_2(x),new B.c_3(),!1,!0,!1),w),D.bHM,D.bH4],s),w,t,w,w,!1,C.a_,!1),u,new B.c_4(x)),w,C.Y,!1),!0,w)},
b33(d){var x=null,w=A.B(x,D.an6,C.r,x,x,new A.J(C.u,x,x,A.W(22),x,x,C.y),x,x,x,C.b8,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.D(A.a([w,D.bPW,D.cjJ,C.aa,D.cju,C.aa,D.cjB,C.bk,new B.aDV(v,new B.bZT(this),x)],y.p),C.J,C.j,C.q,0,C.w)},
aMD(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new B.bZS(),g=A.W(22),f=A.W(999)
f=A.B(l,A.h(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,C.kf,l,l,l),C.r,l,l,new A.J(C.dE,l,l,f,l,l,C.y),l,l,l,C.ex,l,l,l)
x=d.Q
w=x/100
v=A.h(A.aT(w,!0),l,l,l,R.kg,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aT(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.p(d.y)+" "+B.dbA(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.p(d.y)+".")
q=y.p
u=A.a([f,C.aa,D.c6H,C.aA,v,C.Z,A.h(C.e.a6(u," "),l,l,l,C.ke,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aT(w,!0)
C.e.q(u,A.a([C.al,new A.jc(f,i?new B.bZN(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aT(w,!0):"Sem saldo para levantar"
C.e.q(u,A.a([C.al,new A.jc(j,i?new B.bZO(m,d):l,!1,!1,l)],q))}j=A.a([A.B(l,A.D(u,C.I,C.j,C.q,0,C.w),C.r,l,l,new A.J(C.u,l,l,g,C.aJ,l,C.y),l,l,l,C.b8,l,l,l),D.cil],q)
if(d.gEX())C.e.q(j,A.a([C.U,new A.NT("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new B.bZP(m),C.iJ,l)],q))
j.push(h.$1("A caminho"))
j.push(D.chc)
j.push(h.$1("Por cobrar"))
j.push(D.cjU)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.ciO)
else for(p=0;p<x.length;x.length===w||(0,A.L)(x),++p){o=x[p]
v=A.aT(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":C.f.aS(C.i.j(A.aN(n)),2,"0")+"/"+C.f.aS(C.i.j(A.ay(n)),2,"0")+"/"+A.aD(n)
f.push(new B.qs(v,u,o.gOd(),l))}j.push(new B.Fr(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gEX()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new B.Fr(A.a([new B.qs("Dados e IBAN",l,f,new B.bZQ(m)),new B.qs("Modo de levantamento",l,B.cLh(t).d,new B.bZR(m,d))],g),l))
return A.D(j,C.J,C.j,C.q,0,C.w)}}
B.qs.prototype={}
B.Fr.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.W(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.fJ(x,0,y.z),v=J.ax(w.a),u=w.b,w=new A.cN(v,u,A.t(w).i("cN<1>"));w.t();){t=w.c
t=t>=0?new A.a4(u+t,v.gG(v)):A.ai(A.cg())
s=t.b
r=s.d
t=t.a<x.length-1?S.oD:o
q=A.a([A.h(s.a,o,o,o,C.aC,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,C.eL,o,o,o))
q=A.a([new A.bR(1,C.au,A.D(q,C.I,C.c3,C.q,0,C.w),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,P.iB,o,o,o))
if(r!=null)C.e.q(q,A.a([C.bC,Q.Os],m))
l.push(A.dB(C.bY,A.B(o,A.S(q,C.x,C.j,C.q,0,o,o),C.r,o,C.hr,t,o,o,o,o,o,o,o),C.a2,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,C.bc))}return A.B(o,A.D(l,C.x,C.j,C.q,0,C.w),C.r,o,o,new A.J(C.u,o,o,n,o,o,C.y),o,o,o,C.dY,o,o,o)}}
B.aB7.prototype={
bc(d,e){var x,w,v,u,t,s,r=null,q=e.M($.cyD(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bw2
w=new B.bPA()
if(x.length===0){q=q?r:p.e
return new B.Fr(A.a([(q==null?0:q)>0.009?new B.qs("Pago, por libertar",r,A.aT(p.e,!1),r):D.ciP],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.L)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.p(w.$1(s.eJ()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.p(w.$1(s.eJ()))}q.push(new B.qs(t.a,s,A.aT(t.c,!0),r))}return new B.Fr(q,r)}}
B.aJD.prototype={
bc(d,e){var x,w,v=null,u=e.M($.cyD(),y.Q),t=u.gv(u)
u=e.M($.cGg(),y.l)
x=u.gv(u)
if(x==null)x=L.f7
u=t==null
w=u?v:t.c
w=A.aT(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new B.qs("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new B.qs("Restante por cobrar","Pago at\xe9 14 dias antes do evento",A.aT(u==null?0:u,!1),v)],y.S)
return A.D(A.a([new B.Fr(u,v),C.Z,A.h("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.gVX()?"":" Valores antes da taxa da \xc0 Nossa! ("+x.E1(new B.cha())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,C.ke,v,v,v)],y.p),C.J,C.j,C.q,0,C.w)}}
B.VS.prototype={
u(d){var x=this,w=null,v=I.NA(w,22,1),u=y.p
return A.B(w,A.S(A.a([A.A0(x.d,w,C.q7[C.i.am(x.c,4)]),C.ai,A.a5(A.D(A.a([A.h(x.e,w,w,w,C.f_,w,w,w),C.bf,A.h(x.f,w,w,w,C.a7E,w,w,w)],u),C.I,C.j,C.q,0,C.w),1)],u),C.x,C.j,C.q,0,w,w),C.r,w,w,v,w,w,w,C.c6,w,w,w)}}
B.aDV.prototype={
u(d){var x=null,w=A.c3(C.z,C.z.bV(0.35),C.u,C.u,x,x,C.a8,x,x,C.lJ),v=A.a([],y.p)
v.push(new A.ed(1,C.bJ,A.h(this.c,1,C.a1,x,x,x,x,x),x))
return A.aJ(A.by(A.S(v,C.x,C.j,C.V,0,x,x),this.e,w),54,x)}}
B.VP.prototype={
u(d){var x=null
return A.S(A.a([A.b0(this.c,$.ag,x,x,18),C.aw,A.a5(A.h(this.d,x,x,x,C.GX,x,x,x),1)],y.p),C.x,C.j,C.q,0,x,x)}}
B.U9.prototype={
u(d){var x=null,w=I.NA(x,22,1)
return A.B(x,A.D(A.a([A.h(this.c,x,x,x,C.hj,C.a6,x,x),A.cj(C.a8N,x,x,this.d,x,x)],y.p),C.x,C.j,C.q,0,C.w),C.r,x,x,w,x,x,x,C.b8,x,x,x)}}
B.Mk.prototype={
S(){return new B.aCv()}}
B.aCv.prototype={
gbaU(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.V1[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.ag:m
s=u===w?2:1
r=new A.aV(18,18)
if(t==null)t=m
else{q=new A.b4(t,s,C.af,-1)
t=new A.e2(q,q,q,q)}s=w===D.a0g?D.az2:C.CL
s=A.b0(s,$.ag,m,m,m)
p=A.D(A.a([A.h(w.d,m,m,m,C.f_,m,m,m),A.h(w.e,m,m,m,C.b_,m,m,m)],l),C.I,C.j,C.q,0,C.w)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.azy:D.azz
C.e.q(k,A.a([A.dB(m,A.f5(m,A.S(A.a([s,C.ai,new A.bR(1,C.au,p,m),A.b0(o,u===w?$.ag:C.bI,m,m,m)],l),C.x,C.j,C.q,0,m,m),m,C.aL,new A.J(C.u,m,t,new A.bX(r,r,r,r),C.aJ,m,C.y),C.d4,m,m,m,C.dx,m),C.a2,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.bTz(n,w),m,m,m,m,m,m,!1,C.bc),C.Z],l))}return new A.eH(D.c9p,A.D(k,C.x,C.j,C.V,0,C.w),A.a([A.cj(C.cP,m,m,new B.bTA(d),m,m),A.by(C.dM,new B.bTB(n,d),m)],l),m)}}
B.aDm.prototype={
bc(d,e){var x=null,w=e.M($.cXS(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return C.aq
return new A.R(C.kP,new A.oe(C.iJ,A.h("Taxas de servi\xe7o de reservas que cancelaste: "+A.aT(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,C.GM,x,x,x),14,C.dx,x),x)}}
var z=a.updateTypes(["G<J5>(at)","v(Cm,Cm)","y(rB)","rB()","Mk(M)","U9(H,cb)","e(lZ)","G<lc>()"])
B.crb.prototype={
$1(d){return this.aBV(d)},
aBV(b6){var x=0,w=A.m(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.i(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.AU(b6)
b2=null
b3=!0
u=4
s=$.Q().b
s===$&&A.b()
x=7
return A.d(s.P("bookings").az(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").W("partner_id",b1).f9("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 7:b2=b8
u=2
x=6
break
case 4:u=3
b4=t.pop()
x=A.af(b4) instanceof A.cT?8:10
break
case 8:b3=!1
u=12
s=$.Q().b
s===$&&A.b()
x=15
return A.d(s.P("bookings").az(0,"total_amount, status, payments(type, status, amount, released_at)").W("partner_id",b1).f9("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 15:b2=b8
u=3
x=14
break
case 12:u=11
b5=t.pop()
x=A.af(b5) instanceof A.cT?16:18
break
case 16:s=$.Q().b
s===$&&A.b()
x=19
return A.d(s.P("bookings").az(0,"total_amount, status, payments(type, status, amount)").W("partner_id",b1).f9("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
for(s=y.a,p=J.bv(b2,s),o=A.t(p),p=new A.al(p,p.gA(p),o.i("al<V.E>")),n=y.h,m=y.g,o=o.i("V.E"),l=0,k=0,j=0,i=0;p.t();){h=p.d
if(h==null)h=o.a(h)
g=J.a3(h)
f=A.dp(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bv(e==null?C.an:e,s)
d=A.t(e)
e=new A.al(e,e.gA(e),d.i("al<V.E>"))
d=d.i("V.E")
a0=0
a1=0
while(e.t()){a2=e.d
if(a2==null)a2=d.a(a2)
a3=J.a3(a2)
a4=A.dp(a3.h(a2,"amount"))
if(J.n(a3.h(a2,"status"),"paid"))a0+=a4
if(J.n(a3.h(a2,"status"),"paid")&&a3.aA(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.n(a3.h(a2,"type"),"deposit")
a6=A.I(a3.h(a2,"paid_at"))
a7=A.et(a6==null?"":a6)
a6=A.I(g.h(h,"event_date"))
a8=A.et(a6==null?"":a6)
a6=A.cCY(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.fo(1728e8)
else a9=a8==null?null:a8.fo(2592e8)
q.push(new B.Cm(a6,a5,a4,a9))}}if(J.n(a3.h(a2,"status"),"pending")&&J.n(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}C.e.cY(q,new B.cra())
v=new B.J5(q,k,j,i)
x=1
break
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$1,w)},
$S:z+0}
B.cra.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bK(9999,1,1,0,0)
x=e.d
return w.bB(0,x==null?A.bK(9999,1,1,0,0):x)},
$S:z+1}
B.bbF.prototype={
$1(d){return d.c===this.a},
$S:z+2}
B.bbG.prototype={
$0(){return D.a0h},
$S:z+3}
B.bZX.prototype={
$1(d){var x,w=null,v=this.b,u=A.h(A.aT(v.Q/100,!0),w,w,w,D.bZy,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eH(D.c8X,A.D(A.a([u,C.U,new B.VP(H.pD,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),C.Z,D.cj2,C.Z,D.cj1],x),C.J,C.j,C.V,0,C.w),A.a([A.cj(C.cP,w,w,new B.bZV(d),w,w),A.by(D.ca3,new B.bZW(d),w)],x),w)},
$S:18}
B.bZV.prototype={
$0(){return A.ar(this.a,!1).ap(!1)},
$S:0}
B.bZW.prototype={
$0(){return A.ar(this.a,!1).ap(!0)},
$S:0}
B.bZY.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bZZ.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bZU.prototype={
$1(d){return new B.Mk(this.a,null)},
$S:z+4}
B.c_4.prototype={
$0(){var x=0,w=A.m(y.H),v=this,u,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:u=v.a.gV()
t=$.xQ()
u.ai(t)
u.ai($.cyD())
x=2
return A.d(u.a2(0,t.geD(),y.P),$async$$0)
case 2:return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.c_0.prototype={
$0(){var x=this.a,w=A.ap(x).c
w===$&&A.b()
return w.j4()?A.ap(x).ap(null):A.ap(x).bN(0,"/partner-home",null)},
$S:0}
B.c_3.prototype={
$0(){var x=null
return new A.R(new A.Z(40,40,40,40),A.bP(A.Ys(x,$.ag,x,x,x,x,x,x,x,x),x,x),x)},
$S:85}
B.c_2.prototype={
$2(d,e){var x=d instanceof E.vG?F.aNl(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new B.U9(x,new B.c__(this.a),null)},
$S:z+5}
B.c__.prototype={
$0(){return this.a.gV().ai($.xQ())},
$S:0}
B.c_1.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aMD(d):w.b33(d)},
$S:z+6}
B.bZT.prototype={
$0(){var x=this.a.c
x.toString
return A.ap(x).aQ("/partner-payments/setup",null,y.X)},
$S:0}
B.bZS.prototype={
$1(d){return new A.R(D.apK,new A.kn(d,null),null)},
$S:451}
B.bZN.prototype={
$0(){return this.a.Dp(this.b)},
$S:0}
B.bZO.prototype={
$0(){return this.a.Dp(this.b)},
$S:0}
B.bZP.prototype={
$0(){var x=this.a.c
x.toString
return A.ap(x).aQ("/partner-payments/setup",null,y.X)},
$S:0}
B.bZQ.prototype={
$0(){var x=this.a.c
x.toString
return A.ap(x).aQ("/partner-payments/setup",null,y.X)},
$S:0}
B.bZR.prototype={
$0(){return this.a.IQ(this.b)},
$S:0}
B.bPA.prototype={
$1(d){return C.f.aS(C.i.j(A.aN(d)),2,"0")+"/"+C.f.aS(C.i.j(A.ay(d)),2,"0")},
$S:101}
B.cha.prototype={
$1(d){return A.aT(d,!1)},
$S:117}
B.bTz.prototype={
$0(){var x=this.a
return x.p(new B.bTy(x,this.b))},
$S:0}
B.bTy.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bTA.prototype={
$0(){return A.ar(this.a,!1).bL()},
$S:0}
B.bTB.prototype={
$0(){return A.ar(this.b,!1).ap(this.a.gbaU())},
$S:0}
B.clY.prototype={
$1(d){return this.aAQ(d)},
aAQ(d){var x=0,w=A.m(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.P("partner_charges").az(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.ax(s);p.t();){q=p.gG(p)
o=r
n=A.aM(J.f(q,"amount"))
if(n==null)n=0
m=A.aM(J.f(q,"settled_amount"))
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
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$1,w)},
$S:156};(function installTearOffs(){var x=a._static_0
x(B,"dj8","WE",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.H,[B.Cm,B.J5,B.qs])
x(A.bq,[B.crb,B.bbF,B.bZX,B.bZU,B.c_1,B.bZS,B.bPA,B.cha,B.clY])
x(A.cG,[B.cra,B.c_2])
w(B.rB,A.fn)
x(A.bI,[B.bbG,B.bZV,B.bZW,B.bZY,B.bZZ,B.c_4,B.c_0,B.c_3,B.c__,B.bZT,B.bZN,B.bZO,B.bZP,B.bZQ,B.bZR,B.bTz,B.bTy,B.bTA,B.bTB])
w(B.Df,A.dk)
w(B.aDz,A.df)
x(A.O,[B.Fr,B.VS,B.aDV,B.VP,B.U9])
x(A.es,[B.aB7,B.aJD,B.aDm])
w(B.Mk,A.F)
w(B.aCv,A.a_)})()
A.bj(b.typeUniverse,JSON.parse('{"U9":{"O":[],"e":[]},"Mk":{"F":[],"e":[]},"Df":{"F":[],"e":[]},"aDz":{"a_":["Df"]},"Fr":{"O":[],"e":[]},"aB7":{"F":[],"e":[]},"aJD":{"F":[],"e":[]},"VS":{"O":[],"e":[]},"aDV":{"O":[],"e":[]},"VP":{"O":[],"e":[]},"aCv":{"a_":["Mk"]},"aDm":{"F":[],"e":[]}}'))
var y=(function rtii(){var x=A.u
return{I:x("aA<lZ>"),l:x("aA<fc>"),Q:x("aA<J5>"),Z:x("aA<T>"),P:x("G<lZ>"),b:x("q<Cm>"),O:x("q<+(aO,c)>"),s:x("q<c>"),p:x("q<e>"),S:x("q<qs>"),a:x("a6<c,@>"),w:x("dh"),L:x("J5"),T:x("rB"),e:x("lc"),N:x("c"),z:x("qs"),q:x("dv"),y:x("y"),i:x("T"),A:x("@"),g:x("r<@>?"),h:x("a6<c,@>?"),X:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cc0=new A.z("Recebe pagamentos na app",null,C.lN,null,null,null,null,null,null,null,null)
D.c8b=new A.z("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,C.ro,null,null,null,null,null,null,null,null)
D.bzL=x([D.cc0,C.aA,D.c8b],y.p)
D.an6=new A.jo(C.a_,C.j,C.q,C.I,null,C.w,null,0,D.bzL,null)
D.apK=new A.Z(0,20,0,12)
D.apX=new A.Z(0,8,0,40)
D.arn=new A.Z(20,4,20,0)
D.az2=new A.aO(57389,"HeroiconsSolid",null,!1)
D.azy=new A.aO(58627,"MaterialIcons",null,!1)
D.azz=new A.aO(58628,"MaterialIcons",null,!1)
D.bw2=x([],y.b)
D.a0g=new B.rB("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a0h=new B.rB("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bIJ=new B.rB("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bII=new B.rB("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.V1=x([D.a0g,D.a0h,D.bIJ,D.bII],A.u("q<rB>"))
D.axA=new G.C_("Lucros e clientes",!0,B.dj8(),null)
D.bH4=new A.R(C.c9,D.axA,null)
D.c3w=new A.z("Pagamentos",null,C.jp,null,null,null,null,null,null,null,null)
D.bHC=new A.R(C.ay,D.c3w,null)
D.bPU=new A.rM("Exportar",null,null)
D.bHM=new A.R(C.c9,D.bPU,null)
D.bNm=new A.a4(C.fz,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bPW=new A.rM("Como funciona",null,null)
D.ccp=new A.z("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bTz=new A.bS(D.ccp,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)
D.bZy=new A.E(!0,C.z,null,null,null,null,36,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6H=new A.z("Dispon\xedvel para receber",null,C.eL,null,null,null,null,null,null,null,null)
D.c8X=new A.z("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.c9p=new A.z("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.ca3=new A.z("Levantar",null,null,null,null,null,null,null,null,null,null)
D.chc=new B.aB7(null)
D.cil=new B.aDm(null)
D.ciO=new B.qs("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.ciP=new B.qs("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.cj1=new B.VP(C.uz,"Sem custos de levantamento",null)
D.cj2=new B.VP(C.fz,"Chega em 1 a 3 dias \xfateis",null)
D.cju=new B.VS(1,C.ef,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.cjB=new B.VS(2,H.pD,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.cjJ=new B.VS(0,O.N7,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.cjU=new B.aJD(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dwt","cyD",()=>A.eu(new B.crb(),null,!1,null,null,y.L))
x($,"du_","cXS",()=>C.cb.$1$1(new B.clY(),y.i))})()};
(a=>{a["TfWT43vlc3Uv+yThCW99GyNT7WY="]=a.current})($__dart_deferred_initializers__);