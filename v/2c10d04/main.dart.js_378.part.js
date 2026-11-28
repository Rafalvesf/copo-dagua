((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,K,L,F,G,H,C={DF:function DF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},KE:function KE(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cE8:function cE8(){},cE7:function cE7(){},
cZf(d){return B.e.hL(D.VX,new C.bj0(d),new C.bj1())},
cJq(d){var x=0,w=A.n(y.H)
var $async$cJq=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.H5(A.S(["action","schedule","interval",d.c],y.N,y.A)),$async$cJq)
case 2:return A.l(null,w)}})
return A.m($async$cJq,w)},
tl:function tl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bj0:function bj0(d){this.a=d},
bj1:function bj1(){},
dl1(){return new C.EB(null)},
ds2(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
EB:function EB(d){this.a=d},
aIf:function aIf(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
caS:function caS(d,e){this.a=d
this.b=e},
caQ:function caQ(d){this.a=d},
caR:function caR(d){this.a=d},
caT:function caT(d){this.a=d},
caU:function caU(d){this.a=d},
caP:function caP(d){this.a=d},
cb_:function cb_(d){this.a=d},
caW:function caW(d){this.a=d},
caZ:function caZ(){},
caY:function caY(d){this.a=d},
caV:function caV(d){this.a=d},
caX:function caX(d){this.a=d},
caO:function caO(d){this.a=d},
caN:function caN(){},
caI:function caI(d,e){this.a=d
this.b=e},
caJ:function caJ(d,e){this.a=d
this.b=e},
caK:function caK(d){this.a=d},
caL:function caL(d){this.a=d},
caM:function caM(d,e){this.a=d
this.b=e},
rg:function rg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GT:function GT(d,e){this.c=d
this.a=e},
aFG:function aFG(d){this.a=d},
c_f:function c_f(){},
aOu:function aOu(d){this.a=d},
ctl:function ctl(){},
Yh:function Yh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aIC:function aIC(d,e,f){this.c=d
this.e=e
this.a=f},
Yd:function Yd(d,e,f){this.c=d
this.d=e
this.a=f},
Wu:function Wu(d,e,f){this.c=d
this.d=e
this.a=f},
O3:function O3(d,e){this.c=d
this.a=e},
aH3:function aH3(){this.d=$
this.c=this.a=null},
c3G:function c3G(d,e){this.a=d
this.b=e},
c3F:function c3F(d,e){this.a=d
this.b=e},
c3H:function c3H(d){this.a=d},
c3I:function c3I(d,e){this.a=d
this.b=e},
cyq:function cyq(){},
aI1:function aI1(d){this.a=d},
akQ:function akQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Z4(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$Z4=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.aj4(),$async$Z4)
case 3:u=$.T()
t=u.b
t===$&&A.b()
s=t.gbE().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.P("partner_profiles").aw(0,"business_name").W("id",r).dz(),$async$Z4)
case 4:q=e
t=q==null?null:J.h(q,"business_name")
p=H
o=J.cN(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.P("bookings").aw(0,"id, booking_number, event_date, status, total_amount, events(partner_name_1, partner_name_2, location), proposals(title)").W("partner_id",r).dk(0,"event_date",!1),$async$Z4)
case 5:m=e
x=6
return A.d(u.b.P("payments").aw(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("partner_id",r).G4("booking_id","is",null).tF(0,"created_at"),$async$Z4)
case 6:v=p.cQs(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Z4,w)}},D,M,N,O,P,Q,I
J=c[1]
A=c[0]
B=c[2]
E=c[114]
K=c[87]
L=c[197]
F=c[100]
G=c[314]
H=c[124]
C=a.updateHolder(c[36],C)
D=c[315]
M=c[103]
N=c[178]
O=c[280]
P=c[302]
Q=c[300]
I=c[138]
C.DF.prototype={}
C.KE.prototype={}
C.tl.prototype={
I(){return"PayoutMode."+this.b}}
C.EB.prototype={
R(){return new C.aIf()}}
C.aIf.prototype={
Eo(d){return this.bkK(d)},
bkK(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Eo=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fT(!0,new C.caS(r,d),i,y.y),$async$Eo)
case 3:if(f!==!0||r.c==null){x=1
break}r.q(new C.caT(r))
u=5
x=8
return A.d(K.aSJ(d.Q),$async$Eo)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gT().ah($.yP())
p=q.c
i=r.c
i.toString
n=A.aO(q.b/100,!0)
m=A.aO(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+B.f.aZ(B.i.k(A.aM(p)),2,"0")+"/"+B.f.aZ(B.i.k(A.ay(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.a5(L.v0,l),new A.a5(G.ny,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bPd],y.O)
A.aj(i).az("/pay/done",new M.a4J("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.wC){o=i
i=r.c
if(i!=null)i.O(y.q).f.a4(A.cz(null,null,null,null,null,B.z,null,A.i(F.aSh(o.a),null,null,null,null,null,null,null,null),null,B.W,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a4(D.bVr)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new C.caU(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Eo,w)},
K3(d){return this.bbr(d)},
bbr(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$K3=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=C.cZf(d.ax)
n=s.c
n.toString
x=3
return A.d(A.ck(null,new C.caP(o),!1,n,!0,!1,null,y.T),$async$K3)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(C.cJq(r),$async$K3)
case 8:s.gT().ah($.yP())
n=s.c
if(n!=null)n.O(y.q).f.a4(A.cz(null,null,null,null,null,B.z,null,A.i("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null,null),null,B.W,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.wC){q=n
n=s.c
if(n!=null)n.O(y.q).f.a4(A.cz(null,null,null,null,null,B.z,null,A.i(F.aSh(q.a),null,null,null,null,null,null,null,null),null,B.W,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a4(N.a7R)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$K3,w)},
v(d){var x=this,w=null,v=x.gT().F($.yP(),y.I),u=$.ap,t=D.ar5.B(0,new A.a0(0,A.aw(d,B.b9,y.w).w.r.b,0,0)),s=y.p
return A.cP(w,B.bF,A.bH(!0,A.AI(A.d5(A.a([new A.R(D.asx,A.Q(A.a([new A.Ef(new C.caW(d),w)],s),B.x,B.j,B.o,0,w,w),w),D.bJk,new A.R(B.bN,A.h3(v,new C.caX(x),new C.caY(x),new C.caZ(),!1,!0,!1),w),D.bJv,D.bIK],s),w,t,w,w,!1,B.a3,!1),u,new C.cb_(x)),w,B.a0,!1),!0,w)},
b7q(d){var x=null,w=A.C(x,D.aob,B.r,x,x,new A.O(B.t,x,x,A.a2(22),x,x,B.y),x,x,x,B.bg,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.B(A.a([w,D.bRK,D.cla,B.ae,D.ckW,B.ae,D.cl2,B.bk,new C.aIC(v,new C.caO(this),x)],y.p),B.J,B.j,B.o,0,B.v)},
aQq(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new C.caN(),g=A.a2(22),f=A.a2(999)
f=A.C(l,A.i(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,B.jO,l,l,l),B.r,l,l,new A.O(B.eB,l,l,f,l,l,B.y),l,l,l,B.eE,l,l,l)
x=d.Q
w=x/100
v=A.i(A.aO(w,!0),l,l,l,l,B.iZ,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aO(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+C.ds2(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([f,B.ae,D.c8d,B.aF,v,B.Y,A.i(B.e.a3(u," "),l,l,l,l,B.h1,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aO(w,!0)
B.e.p(u,A.a([B.aB,new A.jE(f,i?new C.caI(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aO(w,!0):"Sem saldo para levantar"
B.e.p(u,A.a([B.aB,new A.jE(j,i?new C.caJ(m,d):l,!1,!1,l)],q))}j=A.a([A.C(l,A.B(u,B.I,B.j,B.o,0,B.v),B.r,l,l,new A.O(B.t,l,l,g,B.b0,l,B.y),l,l,l,B.bg,l,l,l),D.cjO],q)
if(d.gG3())B.e.p(j,A.a([B.R,new C.akQ("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new C.caK(m),B.hK,l)],q))
j.push(h.$1("A caminho"))
j.push(D.ciF)
j.push(h.$1("Por cobrar"))
j.push(D.cll)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.ckg)
else for(p=0;p<x.length;x.length===w||(0,A.G)(x),++p){o=x[p]
v=A.aO(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":B.f.aZ(B.i.k(A.aM(n)),2,"0")+"/"+B.f.aZ(B.i.k(A.ay(n)),2,"0")+"/"+A.aG(n)
f.push(new C.rg(v,u,o.gPA(),l))}j.push(new C.GT(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gG3()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new C.GT(A.a([new C.rg("Dados e IBAN",l,f,new C.caL(m)),new C.rg("Modo de levantamento",l,C.cZf(t).d,new C.caM(m,d))],g),l))
return A.B(j,B.J,B.j,B.o,0,B.v)}}
C.rg.prototype={}
C.GT.prototype={
v(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.a2(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.eQ(x,0,y.z),v=J.at(w.a),u=w.b,w=new A.ch(v,u,A.u(w).i("ch<1>"));w.t();){t=w.c
t=t>=0?new A.a5(u+t,v.gE(v)):A.ak(A.ca())
s=t.b
r=s.d
t=t.a<x.length-1?Q.pg:o
q=A.a([A.i(s.a,o,o,o,o,B.ar,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.i(p,o,o,o,o,B.h2,o,o,o))
q=A.a([new A.bU(1,B.ay,A.B(q,B.I,B.bV,B.o,0,B.v),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.i(p,o,o,o,o,B.iX,o,o,o))
if(r!=null)B.e.p(q,A.a([B.bt,P.Pm],m))
l.push(A.dP(B.c0,A.C(o,A.Q(q,B.x,B.j,B.o,0,o,o),B.r,o,B.ee,t,o,o,o,o,o,o,o),B.a2,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,B.bc))}return A.C(o,A.B(l,B.x,B.j,B.o,0,B.v),B.r,o,o,new A.O(B.t,o,o,n,o,o,B.y),o,o,o,B.e1,o,o,o)}}
C.aFG.prototype={
bc(d,e){var x,w,v,u,t,s,r=null,q=e.F($.cLQ(),y.Q),p=q.gu(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bxG
w=new C.c_f()
if(x.length===0){q=q?r:p.e
return new C.GT(A.a([(q==null?0:q)>0.009?new C.rg("Pago, por libertar",r,A.aO(p.e,!1),r):D.ckh],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.G)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.eH()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.eH()))}q.push(new C.rg(t.a,s,A.aO(t.c,!0),r))}return new C.GT(q,r)}}
C.aOu.prototype={
bc(d,e){var x,w,v=null,u=e.F($.cLQ(),y.Q),t=u.gu(u)
u=e.F($.cU4(),y.l)
x=u.gu(u)
if(x==null)x=B.f0
u=t==null
w=u?v:t.c
w=A.aO(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new C.rg("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new C.rg("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aO(u==null?0:u,!1),v)],y.S)
return A.B(A.a([new C.GT(u,v),B.Y,A.i("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.Mi(new C.ctl())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,B.h1,v,v,v)],y.p),B.J,B.j,B.o,0,B.v)}}
C.Yh.prototype={
v(d){var x=this,w=null,v=I.cL5(w,22,1),u=y.p
return A.C(w,A.Q(A.a([A.UT(x.d,B.Vl[B.i.av(x.c,4)]),B.ai,A.a6(A.B(A.a([A.i(x.e,w,w,w,w,B.eT,w,w,w),B.bd,A.i(x.f,w,w,w,w,B.a8R,w,w,w)],u),B.I,B.j,B.o,0,B.v),1)],u),B.x,B.j,B.o,0,w,w),B.r,w,w,v,w,w,w,B.co,w,w,w)}}
C.aIC.prototype={
v(d){var x=null,w=A.cv(B.A,B.A.ci(0.35),B.t,B.t,x,x,B.ag,x,x,B.oA),v=A.a([],y.p)
v.push(new A.dL(1,B.bh,A.i(this.c,1,B.a_,x,x,x,x,x,x),x))
return A.aP(A.bM(A.Q(v,B.x,B.j,B.P,0,x,x),this.e,w),54,x)}}
C.Yd.prototype={
v(d){var x=null
return A.Q(A.a([A.b2(this.c,$.ap,x,x,18),B.au,A.a6(A.i(this.d,x,x,x,x,B.HN,x,x,x),1)],y.p),B.x,B.j,B.o,0,x,x)}}
C.Wu.prototype={
v(d){var x=null,w=I.cL5(x,22,1)
return A.C(x,A.B(A.a([A.i(this.c,x,x,x,x,B.iY,B.a5,x,x),A.cr(B.a9S,x,x,this.d,x,x)],y.p),B.x,B.j,B.o,0,B.v),B.r,x,x,w,x,x,x,B.bg,x,x,x)}}
C.O3.prototype={
R(){return new C.aH3()}}
C.aH3.prototype={
gbfA(){var x=this.d
return x===$?this.d=this.a.c:x},
v(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.VX[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.ap:m
s=u===w?2:1
r=new A.b5(18,18)
if(t==null)t=m
else{q=new A.bb(t,s,B.af,-1)
t=new A.dZ(q,q,q,q)}s=w===D.a1g?D.aAu:B.Dn
s=A.b2(s,$.ap,m,m,m)
p=A.B(A.a([A.i(w.d,m,m,m,m,B.eT,m,m,m),A.i(w.e,m,m,m,m,B.b4,m,m,m)],l),B.I,B.j,B.o,0,B.v)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aB_:D.aB0
B.e.p(k,A.a([A.dP(m,A.fo(m,A.Q(A.a([s,B.ai,new A.bU(1,B.ay,p,m),A.b2(o,u===w?$.ap:B.bs,m,m,m)],l),B.x,B.j,B.o,0,m,m),m,B.aN,new A.O(B.t,m,t,new A.cc(r,r,r,r),B.b0,m,B.y),B.dd,m,m,m,B.dH,m),B.a2,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.c3G(n,w),m,m,m,m,m,m,!1,B.bc),B.Y],l))}return new A.eN(D.caM,A.B(k,B.x,B.j,B.P,0,B.v),A.a([A.cr(B.cK,m,m,new C.c3H(d),m,m),A.bM(B.dt,new C.c3I(n,d),m)],l),m)}}
C.aI1.prototype={
bc(d,e){var x=null,w=e.F($.dc0(),y.Z),v=w.gu(w)
if(v==null)v=0
if(v<=0.004)return B.ap
return new A.R(B.ka,A.un(A.i("Taxas de servi\xe7o de reservas que cancelaste: "+A.aO(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,B.Hz,x,x,x),B.t,B.dH,14,B.hK),x)}}
C.akQ.prototype={
v(d){var x=this,w=null,v=x.f,u=A.a6(A.i(x.c,2,B.a_,w,w,B.ds,w,w,w),1),t=A.a2(16)
return A.dP(B.c0,A.un(A.Q(A.a([new A.Ht(v,w),B.au,u,B.au,A.C(B.K,A.i(x.d,w,w,w,w,B.rO,w,w,w),B.r,w,w,new A.O(B.A,w,w,t,w,w,B.y),w,32,w,B.dA,w,w,w)],y.p),B.x,B.j,B.o,0,w,w),B.t,B.Mt,14,v),B.a2,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,B.bc)}}
var z=a.updateTypes(["F<KE>(au)","v(DF,DF)","z(tl)","tl()","O3(N)","Wu(L,c_)","e(mq)","F<lE>()"])
C.cE8.prototype={
$1(d){return this.aFj(d)},
aFj(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.C1(b6)
b2=null
b3=!0
u=4
s=$.T().b
s===$&&A.b()
x=7
return A.d(s.P("bookings").aw(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").W("partner_id",b1).eO("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
return A.d(s.P("bookings").aw(0,"total_amount, status, payments(type, status, amount, released_at)").W("partner_id",b1).eO("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
return A.d(s.P("bookings").aw(0,"total_amount, status, payments(type, status, amount)").W("partner_id",b1).eO("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
for(s=y.a,p=J.bo(b2,s),o=A.u(p),p=new A.ai(p,p.gA(p),o.i("ai<U.E>")),n=y.h,m=y.g,o=o.i("U.E"),l=0,k=0,j=0,i=0;p.t();){h=p.d
if(h==null)h=o.a(h)
g=J.a7(h)
f=A.dt(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bo(e==null?B.an:e,s)
d=A.u(e)
e=new A.ai(e,e.gA(e),d.i("ai<U.E>"))
d=d.i("U.E")
a0=0
a1=0
while(e.t()){a2=e.d
if(a2==null)a2=d.a(a2)
a3=J.a7(a2)
a4=A.dt(a3.h(a2,"amount"))
if(J.o(a3.h(a2,"status"),"paid"))a0+=a4
if(J.o(a3.h(a2,"status"),"paid")&&a3.au(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.J(a3.h(a2,"paid_at"))
a7=A.eh(a6==null?"":a6)
a6=A.J(g.h(h,"event_date"))
a8=A.eh(a6==null?"":a6)
a6=A.cQx(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.ei(1728e8)
else a9=a8==null?null:a8.ei(2592e8)
q.push(new C.DF(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}B.e.cO(q,new C.cE7())
v=new C.KE(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
C.cE7.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bF(9999,1,1,0,0)
x=e.d
return w.bC(0,x==null?A.bF(9999,1,1,0,0):x)},
$S:z+1}
C.bj0.prototype={
$1(d){return d.c===this.a},
$S:z+2}
C.bj1.prototype={
$0(){return D.a1h},
$S:z+3}
C.caS.prototype={
$1(d){var x,w=null,v=this.b,u=A.i(A.aO(v.Q/100,!0),w,w,w,w,D.c0f,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eN(D.can,A.B(A.a([u,B.R,new C.Yd(G.ny,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),B.Y,D.ckv,B.Y,D.cku],x),B.J,B.j,B.P,0,B.v),A.a([A.cr(B.cK,w,w,new C.caQ(d),w,w),A.bM(D.cbr,new C.caR(d),w)],x),w)},
$S:18}
C.caQ.prototype={
$0(){return A.as(this.a,!1).ak(!1)},
$S:0}
C.caR.prototype={
$0(){return A.as(this.a,!1).ak(!0)},
$S:0}
C.caT.prototype={
$0(){return this.a.w=!0},
$S:0}
C.caU.prototype={
$0(){return this.a.w=!1},
$S:0}
C.caP.prototype={
$1(d){return new C.O3(this.a,null)},
$S:z+4}
C.cb_.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gT()
t=$.yP()
u.ah(t)
u.ah($.cLQ())
x=2
return A.d(u.a1(0,t.gej(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
C.caW.prototype={
$0(){var x=this.a,w=A.aj(x).c
w===$&&A.b()
return w.jc()?A.aj(x).ak(null):A.aj(x).bQ(0,"/partner-home",null)},
$S:0}
C.caZ.prototype={
$0(){var x=null
return new A.R(new A.a0(40,40,40,40),A.bT(A.a_U(x,$.ap,x,x,x,x,x,x,x,x),x,x),x)},
$S:84}
C.caY.prototype={
$2(d,e){var x=d instanceof E.wC?F.aSh(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new C.Wu(x,new C.caV(this.a),null)},
$S:z+5}
C.caV.prototype={
$0(){return this.a.gT().ah($.yP())},
$S:0}
C.caX.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aQq(d):w.b7q(d)},
$S:z+6}
C.caO.prototype={
$0(){var x=this.a.c
x.toString
return A.aj(x).az("/partner-payments/setup",null,y.X)},
$S:0}
C.caN.prototype={
$1(d){return new A.R(D.aqS,new A.kI(d,null),null)},
$S:324}
C.caI.prototype={
$0(){return this.a.Eo(this.b)},
$S:0}
C.caJ.prototype={
$0(){return this.a.Eo(this.b)},
$S:0}
C.caK.prototype={
$0(){var x=this.a.c
x.toString
return A.aj(x).az("/partner-payments/setup",null,y.X)},
$S:0}
C.caL.prototype={
$0(){var x=this.a.c
x.toString
return A.aj(x).az("/partner-payments/setup",null,y.X)},
$S:0}
C.caM.prototype={
$0(){return this.a.K3(this.b)},
$S:0}
C.c_f.prototype={
$1(d){return B.f.aZ(B.i.k(A.aM(d)),2,"0")+"/"+B.f.aZ(B.i.k(A.ay(d)),2,"0")},
$S:132}
C.ctl.prototype={
$1(d){return A.aO(d,!1)},
$S:174}
C.c3G.prototype={
$0(){var x=this.a
return x.q(new C.c3F(x,this.b))},
$S:0}
C.c3F.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.c3H.prototype={
$0(){return A.as(this.a,!1).bJ()},
$S:0}
C.c3I.prototype={
$0(){return A.as(this.b,!1).ak(this.a.gbfA())},
$S:0}
C.cyq.prototype={
$1(d){return this.aE8(d)},
aE8(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.P("partner_charges").aw(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.at(s);p.t();){q=p.gE(p)
o=r
n=A.aN(J.h(q,"amount"))
if(n==null)n=0
m=A.aN(J.h(q,"settled_amount"))
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
$S:185};(function installTearOffs(){var x=a._static_0
x(C,"dzR","Z4",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[C.DF,C.KE,C.rg])
x(A.bw,[C.cE8,C.bj0,C.caS,C.caP,C.caX,C.caN,C.c_f,C.ctl,C.cyq])
x(A.cS,[C.cE7,C.caY])
w(C.tl,A.fy)
x(A.bR,[C.bj1,C.caQ,C.caR,C.caT,C.caU,C.cb_,C.caW,C.caZ,C.caV,C.caO,C.caI,C.caJ,C.caK,C.caL,C.caM,C.c3G,C.c3F,C.c3H,C.c3I])
w(C.EB,A.dD)
w(C.aIf,A.dv)
x(A.M,[C.GT,C.Yh,C.aIC,C.Yd,C.Wu,C.akQ])
x(A.em,[C.aFG,C.aOu,C.aI1])
w(C.O3,A.I)
w(C.aH3,A.a1)})()
A.bx(b.typeUniverse,JSON.parse('{"Wu":{"M":[],"e":[],"f":[]},"O3":{"I":[],"e":[],"f":[]},"EB":{"I":[],"e":[],"f":[]},"aIf":{"a1":["EB"]},"GT":{"M":[],"e":[],"f":[]},"aFG":{"I":[],"e":[],"f":[]},"aOu":{"I":[],"e":[],"f":[]},"Yh":{"M":[],"e":[],"f":[]},"aIC":{"M":[],"e":[],"f":[]},"Yd":{"M":[],"e":[],"f":[]},"aH3":{"a1":["O3"]},"aI1":{"I":[],"e":[],"f":[]},"akQ":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.x
return{I:x("ax<mq>"),l:x("ax<f3>"),Q:x("ax<KE>"),Z:x("ax<P>"),P:x("F<mq>"),b:x("t<DF>"),O:x("t<+(aW,c)>"),s:x("t<c>"),p:x("t<e>"),S:x("t<rg>"),a:x("a4<c,@>"),w:x("dx"),L:x("KE"),T:x("tl"),e:x("lE"),N:x("c"),z:x("rg"),q:x("dA"),y:x("z"),i:x("P"),A:x("@"),g:x("r<@>?"),h:x("a4<c,@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cdn=new A.D("Recebe pagamentos na app",null,B.mh,null,null,null,null,null,null,null,null)
D.c9E=new A.D("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,B.rR,null,null,null,null,null,null,null,null)
D.bBf=x([D.cdn,B.aF,D.c9E],y.p)
D.aob=new A.ke(B.a3,B.j,B.o,B.I,null,B.v,null,0,D.bBf,null)
D.aqS=new A.a0(0,20,0,12)
D.ar5=new A.a0(0,8,0,40)
D.asx=new A.a0(20,4,20,0)
D.aAu=new A.aW(57389,"HeroiconsSolid",null,!1)
D.aB_=new A.aW(58627,"MaterialIcons",null,!1)
D.aB0=new A.aW(58628,"MaterialIcons",null,!1)
D.bxG=x([],y.b)
D.a1g=new C.tl("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a1h=new C.tl("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bKv=new C.tl("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bKu=new C.tl("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.VX=x([D.a1g,D.a1h,D.bKv,D.bKu],A.x("t<tl>"))
D.ayO=new H.Df("Lucros e clientes",!0,C.dzR(),null)
D.bIK=new A.R(B.bN,D.ayO,null)
D.c55=new A.D("Pagamentos",null,B.jR,null,null,null,null,null,null,null,null)
D.bJk=new A.R(B.ax,D.c55,null)
D.bRI=new A.vB("Exportar",null,null)
D.bJv=new A.R(B.bN,D.bRI,null)
D.bPd=new A.a5(B.hW,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bRK=new A.vB("Como funciona",null,null)
D.cdP=new A.D("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bVr=new A.bJ(D.cdP,null,null,null,null,null,null,null,null,null,null,null,null,B.W,!1,null,null,null,B.z,null)
D.c0f=new A.K(!0,B.A,null,null,null,null,36,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8d=new A.D("Dispon\xedvel para receber",null,B.h2,null,null,null,null,null,null,null,null)
D.can=new A.D("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.caM=new A.D("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.cbr=new A.D("Levantar",null,null,null,null,null,null,null,null,null,null)
D.ciF=new C.aFG(null)
D.cjO=new C.aI1(null)
D.ckg=new C.rg("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.ckh=new C.rg("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.cku=new C.Yd(B.uZ,"Sem custos de levantamento",null)
D.ckv=new C.Yd(B.hW,"Chega em 1 a 3 dias \xfateis",null)
D.ckW=new C.Yh(1,B.e4,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.cl2=new C.Yh(2,G.ny,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.cla=new C.Yh(0,O.O1,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.cll=new C.aOu(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOA","cLQ",()=>A.ey(new C.cE8(),null,!1,null,null,y.L))
x($,"dLL","dc0",()=>B.bU.$1$1(new C.cyq(),y.i))})()};
(a=>{a["Ew08osZOALtN1g0kaa+zbNQJppI="]=a.current})($__dart_deferred_initializers__);