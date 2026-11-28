((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,K,L,F,G,H,C={Ee:function Ee(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Ln:function Ln(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cMe:function cMe(){},cMd:function cMd(){},
d6Q(d){return B.e.hC(D.Xi,new C.bmH(d),new C.bmI())},
cRH(d){var x=0,w=A.n(y.H)
var $async$cRH=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.HH(A.T(["action","schedule","interval",d.c],y.N,y.A)),$async$cRH)
case 2:return A.l(null,w)}})
return A.m($async$cRH,w)},
tK:function tK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bmH:function bmH(d){this.a=d},
bmI:function bmI(){},
duh(){return new C.F9(null)},
dBp(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
F9:function F9(d){this.a=d},
aKG:function aKG(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
chb:function chb(d,e){this.a=d
this.b=e},
ch9:function ch9(d){this.a=d},
cha:function cha(d){this.a=d},
chc:function chc(d){this.a=d},
chd:function chd(d){this.a=d},
ch8:function ch8(d){this.a=d},
chj:function chj(d){this.a=d},
chf:function chf(d){this.a=d},
chi:function chi(){},
chh:function chh(d){this.a=d},
che:function che(d){this.a=d},
chg:function chg(d){this.a=d},
ch7:function ch7(d){this.a=d},
ch6:function ch6(){},
ch1:function ch1(d,e){this.a=d
this.b=e},
ch2:function ch2(d,e){this.a=d
this.b=e},
ch3:function ch3(d){this.a=d},
ch4:function ch4(d){this.a=d},
ch5:function ch5(d,e){this.a=d
this.b=e},
rG:function rG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Hu:function Hu(d,e){this.c=d
this.a=e},
aI6:function aI6(d){this.a=d},
c5t:function c5t(){},
aR7:function aR7(d){this.a=d},
cBg:function cBg(){},
Zu:function Zu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aL6:function aL6(d,e,f){this.c=d
this.e=e
this.a=f},
Zq:function Zq(d,e,f){this.c=d
this.d=e
this.a=f},
XD:function XD(d,e,f){this.c=d
this.d=e
this.a=f},
OS:function OS(d,e){this.c=d
this.a=e},
aJu:function aJu(){this.d=$
this.c=this.a=null},
c9W:function c9W(d,e){this.a=d
this.b=e},
c9V:function c9V(d,e){this.a=d
this.b=e},
c9X:function c9X(d){this.a=d},
c9Y:function c9Y(d,e){this.a=d
this.b=e},
cG3:function cG3(){},
aKr:function aKr(d){this.a=d},
amP:function amP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_h(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$a_h=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.al1(),$async$a_h)
case 3:u=$.R()
t=u.b
t===$&&A.b()
s=t.gbA().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.P("partner_profiles").al(0,"business_name").V("id",r).cn(),$async$a_h)
case 4:q=e
t=q==null?null:J.i(q,"business_name")
p=H
o=J.cA(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.P("bookings").al(0,"*, events(partner_name_1, partner_name_2, location), proposals(title)").V("partner_id",r).cT(0,"event_date",!1),$async$a_h)
case 5:m=e
x=6
return A.d(u.b.P("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("partner_id",r).Gv("booking_id","is",null).tL(0,"created_at"),$async$a_h)
case 6:v=p.cYS(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$a_h,w)}},D,M,N,O,P,Q,I
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
C.Ln.prototype={}
C.tK.prototype={
I(){return"PayoutMode."+this.b}}
C.F9.prototype={
R(){return new C.aKG()}}
C.aKG.prototype={
ES(d){return this.bnv(d)},
bnv(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$ES=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fU(!0,new C.chb(r,d),i,y.y),$async$ES)
case 3:if(f!==!0||r.c==null){x=1
break}r.p(new C.chc(r))
u=5
x=8
return A.d(K.aVv(d.Q),$async$ES)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gS().aj($.zk())
p=q.c
i=r.c
i.toString
n=A.aM(q.b/100,!0)
m=A.aM(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+B.f.aY(B.j.k(A.aA(p)),2,"0")+"/"+B.f.aY(B.j.k(A.ar(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.Z(L.lY,l),new A.Z(G.o6,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bSG],y.O)
A.ag(i).ap("/pay/done",new M.a64("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.x3){o=i
i=r.c
if(i!=null)i.O(y.q).f.a2(A.c1(null,null,null,null,null,B.z,null,A.h(F.aV0(o.a),null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a2(D.bZW)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.p(new C.chd(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ES,w)},
KF(d){return this.bdW(d)},
bdW(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$KF=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=C.d6Q(d.ax)
n=s.c
n.toString
x=3
return A.d(A.bZ(null,new C.ch8(o),!1,n,!0,!1,null,y.T),$async$KF)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(C.cRH(r),$async$KF)
case 8:s.gS().aj($.zk())
n=s.c
if(n!=null)n.O(y.q).f.a2(A.c1(null,null,null,null,null,B.z,null,A.h("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.x3){q=n
n=s.c
if(n!=null)n.O(y.q).f.a2(A.c1(null,null,null,null,null,B.z,null,A.h(F.aV0(q.a),null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a2(N.Ij)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$KF,w)},
u(d){var x=this,w=null,v=x.gS().H($.zk(),y.I),u=$.au,t=D.at8.B(0,new A.a2(0,A.ax(d,B.b4,y.w).w.r.b,0,0)),s=y.p
return A.cP(w,B.bA,A.bF(!0,A.yg(A.d0(A.a([new A.Q(D.auu,A.N(A.a([new A.EO(new C.chf(d),w)],s),B.w,B.h,B.l,0,w,w),w),D.bMt,new A.Q(B.bV,A.hq(v,new C.chg(x),new C.chh(x),new C.chi(),!1,!0,!1),w),D.bMH,D.bLR],s),w,t,w,w,!1,B.a3,!1),u,new C.chj(x)),w,B.a_,!1),!0,w)},
b9G(d){var x=null,w=A.z(x,D.aqc,B.r,x,x,new A.I(B.t,x,x,A.V(22),x,x,B.y),x,x,x,B.bh,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.x(A.a([w,D.bVv,D.cqE,B.ad,D.cqp,B.ad,D.cqw,B.bj,new C.aL6(v,new C.ch7(this),x)],y.p),B.G,B.h,B.l,0,B.u)},
aS6(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new C.ch6(),g=A.V(22),f=A.V(999)
f=A.z(l,A.h(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,B.hl,l,l,l),B.r,l,l,new A.I(B.cA,l,l,f,l,l,B.y),l,l,l,B.dn,l,l,l)
x=d.Q
w=x/100
v=A.h(A.aM(w,!0),l,l,l,l,B.ji,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aM(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+C.dBp(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([f,B.ad,D.ccY,B.aF,v,B.S,A.h(B.e.a0(u," "),l,l,l,l,B.hi,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aM(w,!0)
B.e.n(u,A.a([B.aC,new A.jL(f,i?new C.ch1(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aM(w,!0):"Sem saldo para levantar"
B.e.n(u,A.a([B.aC,new A.jL(j,i?new C.ch2(m,d):l,!1,!1,l)],q))}j=A.a([A.z(l,A.x(u,B.H,B.h,B.l,0,B.u),B.r,l,l,new A.I(B.t,l,l,g,B.bi,l,B.y),l,l,l,B.bh,l,l,l),D.cpf],q)
if(d.gGt())B.e.n(j,A.a([B.R,new C.amP("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new C.ch3(m),B.fl,l)],q))
j.push(h.$1("A caminho"))
j.push(D.co6)
j.push(h.$1("Por cobrar"))
j.push(D.cqT)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.cpK)
else for(p=0;p<x.length;x.length===w||(0,A.H)(x),++p){o=x[p]
v=A.aM(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":B.f.aY(B.j.k(A.aA(n)),2,"0")+"/"+B.f.aY(B.j.k(A.ar(n)),2,"0")+"/"+A.az(n)
f.push(new C.rG(v,u,o.gQf(),l))}j.push(new C.Hu(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gGt()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new C.Hu(A.a([new C.rG("Dados e IBAN",l,f,new C.ch4(m)),new C.rG("Modo de levantamento",l,C.d6Q(t).d,new C.ch5(m,d))],g),l))
return A.x(j,B.G,B.h,B.l,0,B.u)}}
C.rG.prototype={}
C.Hu.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.eB(x,0,y.z),v=J.ao(w.a),u=w.b,w=new A.c3(v,u,A.u(w).i("c3<1>"));w.t();){t=w.c
t=t>=0?new A.Z(u+t,v.gE(v)):A.ak(A.c5())
s=t.b
r=s.d
t=t.a<x.length-1?Q.n4:o
q=A.a([A.h(s.a,o,o,o,o,B.ab,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.hm,o,o,o))
q=A.a([new A.bJ(1,B.at,A.x(q,B.H,B.bW,B.l,0,B.u),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,B.jh,o,o,o))
if(r!=null)B.e.n(q,A.a([B.bn,P.QJ],m))
l.push(A.cR(B.bN,A.z(o,A.N(q,B.w,B.h,B.l,0,o,o),B.r,o,B.d5,t,o,o,o,o,o,o,o),B.Y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,B.aP))}return A.z(o,A.x(l,B.w,B.h,B.l,0,B.u),B.r,o,o,new A.I(B.t,o,o,n,o,o,B.y),o,o,o,B.cK,o,o,o)}}
C.aI6.prototype={
bg(d,e){var x,w,v,u,t,s,r=null,q=e.H($.cUl(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bAy
w=new C.c5t()
if(x.length===0){q=q?r:p.e
return new C.Hu(A.a([(q==null?0:q)>0.009?new C.rG("Pago, por libertar",r,A.aM(p.e,!1),r):D.cpL],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.H)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.dP()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.dP()))}q.push(new C.rG(t.a,s,A.aM(t.c,!0),r))}return new C.Hu(q,r)}}
C.aR7.prototype={
bg(d,e){var x,w,v=null,u=e.H($.cUl(),y.Q),t=u.gv(u)
u=e.H($.d1x(),y.l)
x=u.gv(u)
if(x==null)x=B.fb
u=t==null
w=u?v:t.c
w=A.aM(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new C.rG("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new C.rG("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aM(u==null?0:u,!1),v)],y.S)
return A.x(A.a([new C.Hu(u,v),B.S,A.h("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.MY(new C.cBg())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,B.hi,v,v,v)],y.p),B.G,B.h,B.l,0,B.u)}}
C.Zu.prototype={
u(d){var x=this,w=null,v=I.cTz(w,22,1),u=y.p
return A.z(w,A.N(A.a([A.VX(x.d,B.WI[B.j.ar(x.c,4)]),B.af,A.a4(A.x(A.a([A.h(x.e,w,w,w,w,B.eJ,w,w,w),B.aW,A.h(x.f,w,w,w,w,B.aat,w,w,w)],u),B.H,B.h,B.l,0,B.u),1)],u),B.w,B.h,B.l,0,w,w),B.r,w,w,v,w,w,w,B.cB,w,w,w)}}
C.aL6.prototype={
u(d){var x=null,w=A.cn(B.A,B.A.cd(0.35),B.t,B.t,x,x,B.ae,x,x,B.pe),v=A.a([],y.p)
v.push(new A.d9(1,B.b7,A.h(this.c,1,B.a2,x,x,x,x,x,x),x))
return A.aI(A.bG(A.N(v,B.w,B.h,B.K,0,x,x),this.e,w),54,x)}}
C.Zq.prototype={
u(d){var x=null
return A.N(A.a([A.b4(this.c,$.au,x,x,18),B.ah,A.a4(A.h(this.d,x,x,x,x,B.IZ,x,x,x),1)],y.p),B.w,B.h,B.l,0,x,x)}}
C.XD.prototype={
u(d){var x=null,w=I.cTz(x,22,1)
return A.z(x,A.x(A.a([A.h(this.c,x,x,x,x,B.l7,B.a6,x,x),A.cx(B.tA,x,x,this.d,x,x)],y.p),B.w,B.h,B.l,0,B.u),B.r,x,x,w,x,x,x,B.bh,x,x,x)}}
C.OS.prototype={
R(){return new C.aJu()}}
C.aJu.prototype={
gbij(){var x=this.d
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
t=new A.dN(q,q,q,q)}s=w===D.a2L?D.aCH:B.En
s=A.b4(s,$.au,m,m,m)
p=A.x(A.a([A.h(w.d,m,m,m,m,B.eJ,m,m,m),A.h(w.e,m,m,m,m,B.bb,m,m,m)],l),B.H,B.h,B.l,0,B.u)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aDa:D.aDb
B.e.n(k,A.a([A.cR(m,A.fx(m,A.N(A.a([s,B.af,new A.bJ(1,B.at,p,m),A.b4(o,u===w?$.au:B.bF,m,m,m)],l),B.w,B.h,B.l,0,m,m),m,B.aO,new A.I(B.t,m,t,new A.cd(r,r,r,r),B.bi,m,B.y),B.dm,m,m,m,B.dY,m),B.Y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.c9W(n,w),m,m,m,m,m,m,!1,B.aP),B.S],l))}return new A.eV(D.cfM,A.x(k,B.w,B.h,B.K,0,B.u),A.a([A.cx(B.cU,m,m,new C.c9X(d),m,m),A.bG(B.dy,new C.c9Y(n,d),m)],l),m)}}
C.aKr.prototype={
bg(d,e){var x=null,w=e.H($.dkS(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return B.au
return new A.Q(B.jH,A.qp(A.h("Taxas de servi\xe7o de reservas que cancelaste: "+A.aM(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,B.IL,x,x,x),B.t,B.dY,14,B.fl),x)}}
C.amP.prototype={
u(d){var x=this,w=null,v=x.f,u=A.a4(A.h(x.c,2,B.a2,w,w,B.dQ,w,w,w),1),t=A.V(16)
return A.cR(B.bN,A.qp(A.N(A.a([new A.I8(v,w),B.ah,u,B.ah,A.z(B.L,A.h(x.d,w,w,w,w,B.l6,w,w,w),B.r,w,w,new A.I(B.A,w,w,t,w,w,B.y),w,32,w,B.cP,w,w,w)],y.p),B.w,B.h,B.l,0,w,w),B.t,B.NM,14,v),B.Y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,B.aP)}}
var z=a.updateTypes(["F<Ln>(av)","v(Ee,Ee)","y(tK)","tK()","OS(O)","XD(L,bX)","e(mE)","F<lM>()"])
C.cMe.prototype={
$1(d){return this.aH0(d)},
aH0(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.Cw(b6)
b2=null
b3=!0
u=4
s=$.R().b
s===$&&A.b()
x=7
return A.d(s.P("bookings").al(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").V("partner_id",b1).dN("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
return A.d(s.P("bookings").al(0,"total_amount, status, payments(type, status, amount, released_at)").V("partner_id",b1).dN("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
return A.d(s.P("bookings").al(0,"total_amount, status, payments(type, status, amount)").V("partner_id",b1).dN("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
a7=A.d2(a6==null?"":a6)
a6=A.C(g.h(h,"event_date"))
a8=A.d2(a6==null?"":a6)
a6=A.cYX(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.e3(1728e8)
else a9=a8==null?null:a8.e3(2592e8)
q.push(new C.Ee(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}B.e.cA(q,new C.cMd())
v=new C.Ln(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
C.cMd.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bo(9999,1,1,0,0)
x=e.d
return w.bD(0,x==null?A.bo(9999,1,1,0,0):x)},
$S:z+1}
C.bmH.prototype={
$1(d){return d.c===this.a},
$S:z+2}
C.bmI.prototype={
$0(){return D.a2M},
$S:z+3}
C.chb.prototype={
$1(d){var x,w=null,v=this.b,u=A.h(A.aM(v.Q/100,!0),w,w,w,w,D.c4L,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eV(D.cfn,A.x(A.a([u,B.R,new C.Zq(G.o6,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),B.S,D.cpZ,B.S,D.cpY],x),B.G,B.h,B.K,0,B.u),A.a([A.cx(B.cU,w,w,new C.ch9(d),w,w),A.bG(D.cgz,new C.cha(d),w)],x),w)},
$S:19}
C.ch9.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.cha.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.chc.prototype={
$0(){return this.a.w=!0},
$S:0}
C.chd.prototype={
$0(){return this.a.w=!1},
$S:0}
C.ch8.prototype={
$1(d){return new C.OS(this.a,null)},
$S:z+4}
C.chj.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gS()
t=$.zk()
u.aj(t)
u.aj($.cUl())
x=2
return A.d(u.a1(0,t.gec(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
C.chf.prototype={
$0(){var x=this.a,w=A.ag(x).c
w===$&&A.b()
return w.jf()?A.ag(x).ae(null):A.ag(x).bS(0,"/partner-home",null)},
$S:0}
C.chi.prototype={
$0(){return new A.Q(new A.a2(40,40,40,40),B.a9b,null)},
$S:89}
C.chh.prototype={
$2(d,e){var x=d instanceof E.x3?F.aV0(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new C.XD(x,new C.che(this.a),null)},
$S:z+5}
C.che.prototype={
$0(){return this.a.gS().aj($.zk())},
$S:0}
C.chg.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aS6(d):w.b9G(d)},
$S:z+6}
C.ch7.prototype={
$0(){var x=this.a.c
x.toString
return A.ag(x).ap("/partner-payments/setup",null,y.X)},
$S:0}
C.ch6.prototype={
$1(d){return new A.Q(D.asX,new A.kq(d,null),null)},
$S:272}
C.ch1.prototype={
$0(){return this.a.ES(this.b)},
$S:0}
C.ch2.prototype={
$0(){return this.a.ES(this.b)},
$S:0}
C.ch3.prototype={
$0(){var x=this.a.c
x.toString
return A.ag(x).ap("/partner-payments/setup",null,y.X)},
$S:0}
C.ch4.prototype={
$0(){var x=this.a.c
x.toString
return A.ag(x).ap("/partner-payments/setup",null,y.X)},
$S:0}
C.ch5.prototype={
$0(){return this.a.KF(this.b)},
$S:0}
C.c5t.prototype={
$1(d){return B.f.aY(B.j.k(A.aA(d)),2,"0")+"/"+B.f.aY(B.j.k(A.ar(d)),2,"0")},
$S:143}
C.cBg.prototype={
$1(d){return A.aM(d,!1)},
$S:178}
C.c9W.prototype={
$0(){var x=this.a
return x.p(new C.c9V(x,this.b))},
$S:0}
C.c9V.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.c9X.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
C.c9Y.prototype={
$0(){return A.am(this.b,!1).ae(this.a.gbij())},
$S:0}
C.cG3.prototype={
$1(d){return this.aFK(d)},
aFK(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.P("partner_charges").al(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.ao(s);p.t();){q=p.gE(p)
o=r
n=A.aH(J.i(q,"amount"))
if(n==null)n=0
m=A.aH(J.i(q,"settled_amount"))
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
x(C,"dJp","a_h",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[C.Ee,C.Ln,C.rG])
x(A.bz,[C.cMe,C.bmH,C.chb,C.ch8,C.chg,C.ch6,C.c5t,C.cBg,C.cG3])
x(A.cN,[C.cMd,C.chh])
w(C.tK,A.f8)
x(A.bR,[C.bmI,C.ch9,C.cha,C.chc,C.chd,C.chj,C.chf,C.chi,C.che,C.ch7,C.ch1,C.ch2,C.ch3,C.ch4,C.ch5,C.c9W,C.c9V,C.c9X,C.c9Y])
w(C.F9,A.dA)
w(C.aKG,A.dt)
x(A.J,[C.Hu,C.Zu,C.aL6,C.Zq,C.XD,C.amP])
x(A.eq,[C.aI6,C.aR7,C.aKr])
w(C.OS,A.G)
w(C.aJu,A.Y)})()
A.br(b.typeUniverse,JSON.parse('{"XD":{"J":[],"e":[],"f":[]},"OS":{"G":[],"e":[],"f":[]},"F9":{"G":[],"e":[],"f":[]},"aKG":{"Y":["F9"]},"Hu":{"J":[],"e":[],"f":[]},"aI6":{"G":[],"e":[],"f":[]},"aR7":{"G":[],"e":[],"f":[]},"Zu":{"J":[],"e":[],"f":[]},"aL6":{"J":[],"e":[],"f":[]},"Zq":{"J":[],"e":[],"f":[]},"aJu":{"Y":["OS"]},"aKr":{"G":[],"e":[],"f":[]},"amP":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{I:x("ay<mE>"),l:x("ay<fb>"),Q:x("ay<Ln>"),Z:x("ay<S>"),P:x("F<mE>"),b:x("r<Ee>"),O:x("r<+(aV,c)>"),s:x("r<c>"),p:x("r<e>"),S:x("r<rG>"),a:x("a5<c,@>"),w:x("dg"),L:x("Ln"),T:x("tK"),e:x("lM"),N:x("c"),z:x("rG"),q:x("dn"),y:x("y"),i:x("S"),A:x("@"),g:x("t<@>?"),h:x("a5<c,@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ciF=new A.D("Recebe pagamentos na app",null,B.iu,null,null,null,null,null,null,null,null)
D.ceB=new A.D("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,B.tw,null,null,null,null,null,null,null,null)
D.bEa=x([D.ciF,B.aF,D.ceB],y.p)
D.aqc=new A.jh(B.a3,B.h,B.l,B.H,null,B.u,null,0,D.bEa,null)
D.asX=new A.a2(0,20,0,12)
D.at8=new A.a2(0,8,0,40)
D.auu=new A.a2(20,4,20,0)
D.aCH=new A.aV(57389,"HeroiconsSolid",null,!1)
D.aDa=new A.aV(58627,"MaterialIcons",null,!1)
D.aDb=new A.aV(58628,"MaterialIcons",null,!1)
D.bAy=x([],y.b)
D.a2L=new C.tK("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a2M=new C.tK("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bNG=new C.tK("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bNF=new C.tK("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.Xi=x([D.a2L,D.a2M,D.bNG,D.bNF],A.w("r<tK>"))
D.aAY=new H.DN("Lucros e clientes",!0,C.dJp(),null)
D.bLR=new A.Q(B.bV,D.aAY,null)
D.c9I=new A.D("Pagamentos",null,B.hp,null,null,null,null,null,null,null,null)
D.bMt=new A.Q(B.aq,D.c9I,null)
D.bVt=new A.vV("Exportar",null,null)
D.bMH=new A.Q(B.bV,D.bVt,null)
D.bSG=new A.Z(B.hK,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bVv=new A.vV("Como funciona",null,null)
D.cj6=new A.D("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZW=new A.bH(D.cj6,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.c4L=new A.P(!0,B.A,null,null,null,null,36,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccY=new A.D("Dispon\xedvel para receber",null,B.hm,null,null,null,null,null,null,null,null)
D.cfn=new A.D("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.cfM=new A.D("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.cgz=new A.D("Levantar",null,null,null,null,null,null,null,null,null,null)
D.co6=new C.aI6(null)
D.cpf=new C.aKr(null)
D.cpK=new C.rG("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.cpL=new C.rG("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.cpY=new C.Zq(B.vI,"Sem custos de levantamento",null)
D.cpZ=new C.Zq(B.hK,"Chega em 1 a 3 dias \xfateis",null)
D.cqp=new C.Zu(1,B.el,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.cqw=new C.Zu(2,G.o6,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.cqE=new C.Zu(0,O.Pm,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.cqT=new C.aR7(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYv","cUl",()=>A.eI(new C.cMe(),null,!1,null,null,y.L))
x($,"dVz","dkS",()=>B.bY.$1$1(new C.cG3(),y.i))})()};
(a=>{a["WhDXQscNJyiQ0/pbQgA2vvwrw/Q="]=a.current})($__dart_deferred_initializers__);