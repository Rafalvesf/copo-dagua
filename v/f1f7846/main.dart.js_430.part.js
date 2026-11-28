((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,K,L,F,G,H,C={Ee:function Ee(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Lm:function Lm(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cM5:function cM5(){},cM4:function cM4(){},
d6F(d){return B.e.hB(D.Xi,new C.bmF(d),new C.bmG())},
cRy(d){var x=0,w=A.n(y.H)
var $async$cRy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.HH(A.T(["action","schedule","interval",d.c],y.N,y.A)),$async$cRy)
case 2:return A.l(null,w)}})
return A.m($async$cRy,w)},
tJ:function tJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bmF:function bmF(d){this.a=d},
bmG:function bmG(){},
du6(){return new C.F9(null)},
dBe(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
F9:function F9(d){this.a=d},
aKE:function aKE(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
ch2:function ch2(d,e){this.a=d
this.b=e},
ch0:function ch0(d){this.a=d},
ch1:function ch1(d){this.a=d},
ch3:function ch3(d){this.a=d},
ch4:function ch4(d){this.a=d},
ch_:function ch_(d){this.a=d},
cha:function cha(d){this.a=d},
ch6:function ch6(d){this.a=d},
ch9:function ch9(){},
ch8:function ch8(d){this.a=d},
ch5:function ch5(d){this.a=d},
ch7:function ch7(d){this.a=d},
cgZ:function cgZ(d){this.a=d},
cgY:function cgY(){},
cgT:function cgT(d,e){this.a=d
this.b=e},
cgU:function cgU(d,e){this.a=d
this.b=e},
cgV:function cgV(d){this.a=d},
cgW:function cgW(d){this.a=d},
cgX:function cgX(d,e){this.a=d
this.b=e},
rF:function rF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Hu:function Hu(d,e){this.c=d
this.a=e},
aI4:function aI4(d){this.a=d},
c5k:function c5k(){},
aR5:function aR5(d){this.a=d},
cB7:function cB7(){},
Zt:function Zt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aL4:function aL4(d,e,f){this.c=d
this.e=e
this.a=f},
Zp:function Zp(d,e,f){this.c=d
this.d=e
this.a=f},
XC:function XC(d,e,f){this.c=d
this.d=e
this.a=f},
OR:function OR(d,e){this.c=d
this.a=e},
aJs:function aJs(){this.d=$
this.c=this.a=null},
c9N:function c9N(d,e){this.a=d
this.b=e},
c9M:function c9M(d,e){this.a=d
this.b=e},
c9O:function c9O(d){this.a=d},
c9P:function c9P(d,e){this.a=d
this.b=e},
cFV:function cFV(){},
aKp:function aKp(d){this.a=d},
amN:function amN(d,e,f,g,h){var _=this
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
s=t.gbA().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.P("partner_profiles").am(0,"business_name").V("id",r).cJ(),$async$a_g)
case 4:q=e
t=q==null?null:J.i(q,"business_name")
p=H
o=J.cA(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.P("bookings").am(0,"*, events(partner_name_1, partner_name_2, location), proposals(title)").V("partner_id",r).cZ(0,"event_date",!1),$async$a_g)
case 5:m=e
x=6
return A.d(u.b.P("payments").am(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("partner_id",r).Gt("booking_id","is",null).tL(0,"created_at"),$async$a_g)
case 6:v=p.cYJ(o,n,m,e,!0)
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
D=c[357]
M=c[108]
N=c[192]
O=c[328]
P=c[346]
Q=c[344]
I=c[149]
C.Ee.prototype={}
C.Lm.prototype={}
C.tJ.prototype={
I(){return"PayoutMode."+this.b}}
C.F9.prototype={
R(){return new C.aKE()}}
C.aKE.prototype={
ER(d){return this.bns(d)},
bns(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$ER=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fT(!0,new C.ch2(r,d),i,y.y),$async$ER)
case 3:if(f!==!0||r.c==null){x=1
break}r.p(new C.ch3(r))
u=5
x=8
return A.d(K.aVt(d.Q),$async$ER)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gS().aj($.zk())
p=q.c
i=r.c
i.toString
n=A.aM(q.b/100,!0)
m=A.aM(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+B.f.aY(B.j.k(A.aC(p)),2,"0")+"/"+B.f.aY(B.j.k(A.ar(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.a_(L.lR,l),new A.a_(G.o4,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bSF],y.O)
A.ah(i).av("/pay/done",new M.a63("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.x3){o=i
i=r.c
if(i!=null)i.O(y.q).f.a2(A.c3(null,null,null,null,null,B.z,null,A.h(F.aUZ(o.a),null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a2(D.bZV)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.p(new C.ch4(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ER,w)},
KD(d){return this.bdT(d)},
bdT(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$KD=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=C.d6F(d.ax)
n=s.c
n.toString
x=3
return A.d(A.bZ(null,new C.ch_(o),!1,n,!0,!1,null,y.T),$async$KD)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(C.cRy(r),$async$KD)
case 8:s.gS().aj($.zk())
n=s.c
if(n!=null)n.O(y.q).f.a2(A.c3(null,null,null,null,null,B.z,null,A.h("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.x3){q=n
n=s.c
if(n!=null)n.O(y.q).f.a2(A.c3(null,null,null,null,null,B.z,null,A.h(F.aUZ(q.a),null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a2(N.Ij)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$KD,w)},
u(d){var x=this,w=null,v=x.gS().H($.zk(),y.I),u=$.au,t=D.at7.B(0,new A.a2(0,A.ax(d,B.b4,y.w).w.r.b,0,0)),s=y.p
return A.cP(w,B.bA,A.bF(!0,A.yg(A.d0(A.a([new A.Q(D.aut,A.N(A.a([new A.EO(new C.ch6(d),w)],s),B.w,B.h,B.l,0,w,w),w),D.bMs,new A.Q(B.bV,A.hq(v,new C.ch7(x),new C.ch8(x),new C.ch9(),!1,!0,!1),w),D.bMG,D.bLQ],s),w,t,w,w,!1,B.a3,!1),u,new C.cha(x)),w,B.a_,!1),!0,w)},
b9D(d){var x=null,w=A.z(x,D.aqb,B.r,x,x,new A.I(B.t,x,x,A.V(22),x,x,B.y),x,x,x,B.bh,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.x(A.a([w,D.bVu,D.cqD,B.ad,D.cqo,B.ad,D.cqv,B.bj,new C.aL4(v,new C.cgZ(this),x)],y.p),B.G,B.h,B.l,0,B.u)},
aS3(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new C.cgY(),g=A.V(22),f=A.V(999)
f=A.z(l,A.h(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,B.hj,l,l,l),B.r,l,l,new A.I(B.cA,l,l,f,l,l,B.y),l,l,l,B.dn,l,l,l)
x=d.Q
w=x/100
v=A.h(A.aM(w,!0),l,l,l,l,B.jh,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aM(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+C.dBe(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([f,B.ad,D.ccX,B.aF,v,B.S,A.h(B.e.a0(u," "),l,l,l,l,B.hg,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aM(w,!0)
B.e.n(u,A.a([B.aC,new A.jK(f,i?new C.cgT(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aM(w,!0):"Sem saldo para levantar"
B.e.n(u,A.a([B.aC,new A.jK(j,i?new C.cgU(m,d):l,!1,!1,l)],q))}j=A.a([A.z(l,A.x(u,B.H,B.h,B.l,0,B.u),B.r,l,l,new A.I(B.t,l,l,g,B.bi,l,B.y),l,l,l,B.bh,l,l,l),D.cpe],q)
if(d.gGs())B.e.n(j,A.a([B.R,new C.amN("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new C.cgV(m),B.fk,l)],q))
j.push(h.$1("A caminho"))
j.push(D.co5)
j.push(h.$1("Por cobrar"))
j.push(D.cqS)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.cpJ)
else for(p=0;p<x.length;x.length===w||(0,A.H)(x),++p){o=x[p]
v=A.aM(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":B.f.aY(B.j.k(A.aC(n)),2,"0")+"/"+B.f.aY(B.j.k(A.ar(n)),2,"0")+"/"+A.az(n)
f.push(new C.rF(v,u,o.gQe(),l))}j.push(new C.Hu(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gGs()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new C.Hu(A.a([new C.rF("Dados e IBAN",l,f,new C.cgW(m)),new C.rF("Modo de levantamento",l,C.d6F(t).d,new C.cgX(m,d))],g),l))
return A.x(j,B.G,B.h,B.l,0,B.u)}}
C.rF.prototype={}
C.Hu.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.eB(x,0,y.z),v=J.ao(w.a),u=w.b,w=new A.c2(v,u,A.u(w).i("c2<1>"));w.t();){t=w.c
t=t>=0?new A.a_(u+t,v.gE(v)):A.ak(A.c5())
s=t.b
r=s.d
t=t.a<x.length-1?Q.n0:o
q=A.a([A.h(s.a,o,o,o,o,B.ab,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.hk,o,o,o))
q=A.a([new A.bJ(1,B.at,A.x(q,B.H,B.bW,B.l,0,B.u),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.jg,o,o,o))
if(r!=null)B.e.n(q,A.a([B.bm,P.QJ],m))
l.push(A.cR(B.bN,A.z(o,A.N(q,B.w,B.h,B.l,0,o,o),B.r,o,B.d5,t,o,o,o,o,o,o,o),B.Y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,B.aP))}return A.z(o,A.x(l,B.w,B.h,B.l,0,B.u),B.r,o,o,new A.I(B.t,o,o,n,o,o,B.y),o,o,o,B.cK,o,o,o)}}
C.aI4.prototype={
bg(d,e){var x,w,v,u,t,s,r=null,q=e.H($.cUc(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bAw
w=new C.c5k()
if(x.length===0){q=q?r:p.e
return new C.Hu(A.a([(q==null?0:q)>0.009?new C.rF("Pago, por libertar",r,A.aM(p.e,!1),r):D.cpK],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.H)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.e1()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.e1()))}q.push(new C.rF(t.a,s,A.aM(t.c,!0),r))}return new C.Hu(q,r)}}
C.aR5.prototype={
bg(d,e){var x,w,v=null,u=e.H($.cUc(),y.Q),t=u.gv(u)
u=e.H($.d1n(),y.l)
x=u.gv(u)
if(x==null)x=B.fa
u=t==null
w=u?v:t.c
w=A.aM(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new C.rF("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new C.rF("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aM(u==null?0:u,!1),v)],y.S)
return A.x(A.a([new C.Hu(u,v),B.S,A.h("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.MW(new C.cB7())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,B.hg,v,v,v)],y.p),B.G,B.h,B.l,0,B.u)}}
C.Zt.prototype={
u(d){var x=this,w=null,v=I.cTq(w,22,1),u=y.p
return A.z(w,A.N(A.a([A.VW(x.d,B.WI[B.j.aq(x.c,4)]),B.af,A.a4(A.x(A.a([A.h(x.e,w,w,w,w,B.eI,w,w,w),B.aW,A.h(x.f,w,w,w,w,B.aat,w,w,w)],u),B.H,B.h,B.l,0,B.u),1)],u),B.w,B.h,B.l,0,w,w),B.r,w,w,v,w,w,w,B.cB,w,w,w)}}
C.aL4.prototype={
u(d){var x=null,w=A.cn(B.A,B.A.cd(0.35),B.t,B.t,x,x,B.ae,x,x,B.pb),v=A.a([],y.p)
v.push(new A.d8(1,B.b7,A.h(this.c,1,B.a2,x,x,x,x,x,x),x))
return A.aH(A.bG(A.N(v,B.w,B.h,B.K,0,x,x),this.e,w),54,x)}}
C.Zp.prototype={
u(d){var x=null
return A.N(A.a([A.b4(this.c,$.au,x,x,18),B.ah,A.a4(A.h(this.d,x,x,x,x,B.IZ,x,x,x),1)],y.p),B.w,B.h,B.l,0,x,x)}}
C.XC.prototype={
u(d){var x=null,w=I.cTq(x,22,1)
return A.z(x,A.x(A.a([A.h(this.c,x,x,x,x,B.l0,B.a6,x,x),A.cx(B.tx,x,x,this.d,x,x)],y.p),B.w,B.h,B.l,0,B.u),B.r,x,x,w,x,x,x,B.bh,x,x,x)}}
C.OR.prototype={
R(){return new C.aJs()}}
C.aJs.prototype={
gbif(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.Xi[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.au:m
s=u===w?2:1
r=new A.b2(18,18)
if(t==null)t=m
else{q=new A.bb(t,s,B.ai,-1)
t=new A.dN(q,q,q,q)}s=w===D.a2L?D.aCG:B.Em
s=A.b4(s,$.au,m,m,m)
p=A.x(A.a([A.h(w.d,m,m,m,m,B.eI,m,m,m),A.h(w.e,m,m,m,m,B.bb,m,m,m)],l),B.H,B.h,B.l,0,B.u)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aD9:D.aDa
B.e.n(k,A.a([A.cR(m,A.fw(m,A.N(A.a([s,B.af,new A.bJ(1,B.at,p,m),A.b4(o,u===w?$.au:B.bF,m,m,m)],l),B.w,B.h,B.l,0,m,m),m,B.aO,new A.I(B.t,m,t,new A.cd(r,r,r,r),B.bi,m,B.y),B.dm,m,m,m,B.dY,m),B.Y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.c9N(n,w),m,m,m,m,m,m,!1,B.aP),B.S],l))}return new A.eU(D.cfL,A.x(k,B.w,B.h,B.K,0,B.u),A.a([A.cx(B.cU,m,m,new C.c9O(d),m,m),A.bG(B.dx,new C.c9P(n,d),m)],l),m)}}
C.aKp.prototype={
bg(d,e){var x=null,w=e.H($.dkH(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return B.au
return new A.Q(B.jG,A.qo(A.h("Taxas de servi\xe7o de reservas que cancelaste: "+A.aM(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,B.IL,x,x,x),B.t,B.dY,14,B.fk),x)}}
C.amN.prototype={
u(d){var x=this,w=null,v=x.f,u=A.a4(A.h(x.c,2,B.a2,w,w,B.dQ,w,w,w),1),t=A.V(16)
return A.cR(B.bN,A.qo(A.N(A.a([new A.I8(v,w),B.ah,u,B.ah,A.z(B.L,A.h(x.d,w,w,w,w,B.l_,w,w,w),B.r,w,w,new A.I(B.A,w,w,t,w,w,B.y),w,32,w,B.cP,w,w,w)],y.p),B.w,B.h,B.l,0,w,w),B.t,B.NM,14,v),B.Y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,B.aP)}}
var z=a.updateTypes(["F<Lm>(av)","v(Ee,Ee)","y(tJ)","tJ()","OR(O)","XC(L,bX)","e(mD)","F<lM>()"])
C.cM5.prototype={
$1(d){return this.aGY(d)},
aGY(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.Cv(b6)
b2=null
b3=!0
u=4
s=$.R().b
s===$&&A.b()
x=7
return A.d(s.P("bookings").am(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").V("partner_id",b1).dN("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
return A.d(s.P("bookings").am(0,"total_amount, status, payments(type, status, amount, released_at)").V("partner_id",b1).dN("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
return A.d(s.P("bookings").am(0,"total_amount, status, payments(type, status, amount)").V("partner_id",b1).dN("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
for(s=y.a,p=J.bh(b2,s),o=A.u(p),p=new A.al(p,p.gA(p),o.i("al<W.E>")),n=y.h,m=y.g,o=o.i("W.E"),l=0,k=0,j=0,i=0;p.t();){h=p.d
if(h==null)h=o.a(h)
g=J.a7(h)
f=A.ds(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bh(e==null?B.am:e,s)
d=A.u(e)
e=new A.al(e,e.gA(e),d.i("al<W.E>"))
d=d.i("W.E")
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
a7=A.dd(a6==null?"":a6)
a6=A.C(g.h(h,"event_date"))
a8=A.dd(a6==null?"":a6)
a6=A.cYO(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.e6(1728e8)
else a9=a8==null?null:a8.e6(2592e8)
q.push(new C.Ee(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}B.e.cz(q,new C.cM4())
v=new C.Lm(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
C.cM4.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bs(9999,1,1,0,0)
x=e.d
return w.bD(0,x==null?A.bs(9999,1,1,0,0):x)},
$S:z+1}
C.bmF.prototype={
$1(d){return d.c===this.a},
$S:z+2}
C.bmG.prototype={
$0(){return D.a2M},
$S:z+3}
C.ch2.prototype={
$1(d){var x,w=null,v=this.b,u=A.h(A.aM(v.Q/100,!0),w,w,w,w,D.c4K,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eU(D.cfm,A.x(A.a([u,B.R,new C.Zp(G.o4,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),B.S,D.cpY,B.S,D.cpX],x),B.G,B.h,B.K,0,B.u),A.a([A.cx(B.cU,w,w,new C.ch0(d),w,w),A.bG(D.cgy,new C.ch1(d),w)],x),w)},
$S:19}
C.ch0.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.ch1.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.ch3.prototype={
$0(){return this.a.w=!0},
$S:0}
C.ch4.prototype={
$0(){return this.a.w=!1},
$S:0}
C.ch_.prototype={
$1(d){return new C.OR(this.a,null)},
$S:z+4}
C.cha.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gS()
t=$.zk()
u.aj(t)
u.aj($.cUc())
x=2
return A.d(u.a1(0,t.geh(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
C.ch6.prototype={
$0(){var x=this.a,w=A.ah(x).c
w===$&&A.b()
return w.jf()?A.ah(x).ae(null):A.ah(x).bS(0,"/partner-home",null)},
$S:0}
C.ch9.prototype={
$0(){return new A.Q(new A.a2(40,40,40,40),B.a9b,null)},
$S:89}
C.ch8.prototype={
$2(d,e){var x=d instanceof E.x3?F.aUZ(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new C.XC(x,new C.ch5(this.a),null)},
$S:z+5}
C.ch5.prototype={
$0(){return this.a.gS().aj($.zk())},
$S:0}
C.ch7.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aS3(d):w.b9D(d)},
$S:z+6}
C.cgZ.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/partner-payments/setup",null,y.X)},
$S:0}
C.cgY.prototype={
$1(d){return new A.Q(D.asW,new A.kq(d,null),null)},
$S:272}
C.cgT.prototype={
$0(){return this.a.ER(this.b)},
$S:0}
C.cgU.prototype={
$0(){return this.a.ER(this.b)},
$S:0}
C.cgV.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/partner-payments/setup",null,y.X)},
$S:0}
C.cgW.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/partner-payments/setup",null,y.X)},
$S:0}
C.cgX.prototype={
$0(){return this.a.KD(this.b)},
$S:0}
C.c5k.prototype={
$1(d){return B.f.aY(B.j.k(A.aC(d)),2,"0")+"/"+B.f.aY(B.j.k(A.ar(d)),2,"0")},
$S:143}
C.cB7.prototype={
$1(d){return A.aM(d,!1)},
$S:178}
C.c9N.prototype={
$0(){var x=this.a
return x.p(new C.c9M(x,this.b))},
$S:0}
C.c9M.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.c9O.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
C.c9P.prototype={
$0(){return A.am(this.b,!1).ae(this.a.gbif())},
$S:0}
C.cFV.prototype={
$1(d){return this.aFH(d)},
aFH(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.P("partner_charges").am(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.ao(s);p.t();){q=p.gE(p)
o=r
n=A.aI(J.i(q,"amount"))
if(n==null)n=0
m=A.aI(J.i(q,"settled_amount"))
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
$S:191};(function installTearOffs(){var x=a._static_0
x(C,"dJe","a_g",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[C.Ee,C.Lm,C.rF])
x(A.bz,[C.cM5,C.bmF,C.ch2,C.ch_,C.ch7,C.cgY,C.c5k,C.cB7,C.cFV])
x(A.cN,[C.cM4,C.ch8])
w(C.tJ,A.f8)
x(A.bR,[C.bmG,C.ch0,C.ch1,C.ch3,C.ch4,C.cha,C.ch6,C.ch9,C.ch5,C.cgZ,C.cgT,C.cgU,C.cgV,C.cgW,C.cgX,C.c9N,C.c9M,C.c9O,C.c9P])
w(C.F9,A.dD)
w(C.aKE,A.dz)
x(A.J,[C.Hu,C.Zt,C.aL4,C.Zp,C.XC,C.amN])
x(A.eq,[C.aI4,C.aR5,C.aKp])
w(C.OR,A.G)
w(C.aJs,A.Y)})()
A.bq(b.typeUniverse,JSON.parse('{"XC":{"J":[],"e":[],"f":[]},"OR":{"G":[],"e":[],"f":[]},"F9":{"G":[],"e":[],"f":[]},"aKE":{"Y":["F9"]},"Hu":{"J":[],"e":[],"f":[]},"aI4":{"G":[],"e":[],"f":[]},"aR5":{"G":[],"e":[],"f":[]},"Zt":{"J":[],"e":[],"f":[]},"aL4":{"J":[],"e":[],"f":[]},"Zp":{"J":[],"e":[],"f":[]},"aJs":{"Y":["OR"]},"aKp":{"G":[],"e":[],"f":[]},"amN":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{I:x("ay<mD>"),l:x("ay<fb>"),Q:x("ay<Lm>"),Z:x("ay<S>"),P:x("F<mD>"),b:x("r<Ee>"),O:x("r<+(aV,c)>"),s:x("r<c>"),p:x("r<e>"),S:x("r<rF>"),a:x("a5<c,@>"),w:x("dg"),L:x("Lm"),T:x("tJ"),e:x("lM"),N:x("c"),z:x("rF"),q:x("dn"),y:x("y"),i:x("S"),A:x("@"),g:x("t<@>?"),h:x("a5<c,@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ciE=new A.D("Recebe pagamentos na app",null,B.it,null,null,null,null,null,null,null,null)
D.ceA=new A.D("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,B.tt,null,null,null,null,null,null,null,null)
D.bE9=x([D.ciE,B.aF,D.ceA],y.p)
D.aqb=new A.jg(B.a3,B.h,B.l,B.H,null,B.u,null,0,D.bE9,null)
D.asW=new A.a2(0,20,0,12)
D.at7=new A.a2(0,8,0,40)
D.aut=new A.a2(20,4,20,0)
D.aCG=new A.aV(57389,"HeroiconsSolid",null,!1)
D.aD9=new A.aV(58627,"MaterialIcons",null,!1)
D.aDa=new A.aV(58628,"MaterialIcons",null,!1)
D.bAw=x([],y.b)
D.a2L=new C.tJ("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a2M=new C.tJ("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bNF=new C.tJ("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bNE=new C.tJ("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.Xi=x([D.a2L,D.a2M,D.bNF,D.bNE],A.w("r<tJ>"))
D.aAX=new H.DN("Lucros e clientes",!0,C.dJe(),null)
D.bLQ=new A.Q(B.bV,D.aAX,null)
D.c9H=new A.D("Pagamentos",null,B.hn,null,null,null,null,null,null,null,null)
D.bMs=new A.Q(B.aq,D.c9H,null)
D.bVs=new A.vV("Exportar",null,null)
D.bMG=new A.Q(B.bV,D.bVs,null)
D.bSF=new A.a_(B.hI,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bVu=new A.vV("Como funciona",null,null)
D.cj5=new A.D("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZV=new A.bH(D.cj5,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.c4K=new A.P(!0,B.A,null,null,null,null,36,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccX=new A.D("Dispon\xedvel para receber",null,B.hk,null,null,null,null,null,null,null,null)
D.cfm=new A.D("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.cfL=new A.D("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.cgy=new A.D("Levantar",null,null,null,null,null,null,null,null,null,null)
D.co5=new C.aI4(null)
D.cpe=new C.aKp(null)
D.cpJ=new C.rF("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.cpK=new C.rF("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.cpX=new C.Zp(B.vF,"Sem custos de levantamento",null)
D.cpY=new C.Zp(B.hI,"Chega em 1 a 3 dias \xfateis",null)
D.cqo=new C.Zt(1,B.ek,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.cqv=new C.Zt(2,G.o4,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.cqD=new C.Zt(0,O.Pm,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.cqS=new C.aR5(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYk","cUc",()=>A.eI(new C.cM5(),null,!1,null,null,y.L))
x($,"dVo","dkH",()=>B.bY.$1$1(new C.cFV(),y.i))})()};
(a=>{a["LawriwGixbobdYjETbMhimxfGAI="]=a.current})($__dart_deferred_initializers__);