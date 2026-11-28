((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,K,L,F,G,H,C={DH:function DH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},KF:function KF(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cEb:function cEb(){},cEa:function cEa(){},
cZj(d){return B.e.hL(D.VX,new C.bj3(d),new C.bj4())},
cJt(d){var x=0,w=A.n(y.H)
var $async$cJt=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.H7(A.R(["action","schedule","interval",d.c],y.N,y.A)),$async$cJt)
case 2:return A.l(null,w)}})
return A.m($async$cJt,w)},
tl:function tl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bj3:function bj3(d){this.a=d},
bj4:function bj4(){},
dl6(){return new C.ED(null)},
ds7(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
ED:function ED(d){this.a=d},
aIf:function aIf(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
caV:function caV(d,e){this.a=d
this.b=e},
caT:function caT(d){this.a=d},
caU:function caU(d){this.a=d},
caW:function caW(d){this.a=d},
caX:function caX(d){this.a=d},
caS:function caS(d){this.a=d},
cb2:function cb2(d){this.a=d},
caZ:function caZ(d){this.a=d},
cb1:function cb1(){},
cb0:function cb0(d){this.a=d},
caY:function caY(d){this.a=d},
cb_:function cb_(d){this.a=d},
caR:function caR(d){this.a=d},
caQ:function caQ(){},
caL:function caL(d,e){this.a=d
this.b=e},
caM:function caM(d,e){this.a=d
this.b=e},
caN:function caN(d){this.a=d},
caO:function caO(d){this.a=d},
caP:function caP(d,e){this.a=d
this.b=e},
rg:function rg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GV:function GV(d,e){this.c=d
this.a=e},
aFG:function aFG(d){this.a=d},
c_i:function c_i(){},
aOv:function aOv(d){this.a=d},
cto:function cto(){},
Yi:function Yi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aIC:function aIC(d,e,f){this.c=d
this.e=e
this.a=f},
Ye:function Ye(d,e,f){this.c=d
this.d=e
this.a=f},
Wv:function Wv(d,e,f){this.c=d
this.d=e
this.a=f},
O4:function O4(d,e){this.c=d
this.a=e},
aH3:function aH3(){this.d=$
this.c=this.a=null},
c3J:function c3J(d,e){this.a=d
this.b=e},
c3I:function c3I(d,e){this.a=d
this.b=e},
c3K:function c3K(d){this.a=d},
c3L:function c3L(d,e){this.a=d
this.b=e},
cyt:function cyt(){},
aI1:function aI1(d){this.a=d},
akQ:function akQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Z5(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$Z5=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.aj5(),$async$Z5)
case 3:u=$.T()
t=u.b
t===$&&A.b()
s=t.gbE().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.P("partner_profiles").aw(0,"business_name").W("id",r).dz(),$async$Z5)
case 4:q=e
t=q==null?null:J.h(q,"business_name")
p=H
o=J.cN(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.P("bookings").aw(0,"id, booking_number, event_date, status, total_amount, events(partner_name_1, partner_name_2, location), proposals(title)").W("partner_id",r).dk(0,"event_date",!1),$async$Z5)
case 5:m=e
x=6
return A.d(u.b.P("payments").aw(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("partner_id",r).G4("booking_id","is",null).tF(0,"created_at"),$async$Z5)
case 6:v=p.cQv(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Z5,w)}},D,M,N,O,P,Q,I
J=c[1]
A=c[0]
B=c[2]
E=c[115]
K=c[88]
L=c[198]
F=c[101]
G=c[314]
H=c[125]
C=a.updateHolder(c[36],C)
D=c[315]
M=c[104]
N=c[179]
O=c[280]
P=c[302]
Q=c[300]
I=c[139]
C.DH.prototype={}
C.KF.prototype={}
C.tl.prototype={
I(){return"PayoutMode."+this.b}}
C.ED.prototype={
R(){return new C.aIf()}}
C.aIf.prototype={
Eo(d){return this.bkI(d)},
bkI(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Eo=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fT(!0,new C.caV(r,d),i,y.y),$async$Eo)
case 3:if(f!==!0||r.c==null){x=1
break}r.q(new C.caW(r))
u=5
x=8
return A.d(K.aSK(d.Q),$async$Eo)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gT().ah($.yR())
p=q.c
i=r.c
i.toString
n=A.aP(q.b/100,!0)
m=A.aP(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+B.f.aZ(B.i.k(A.aN(p)),2,"0")+"/"+B.f.aZ(B.i.k(A.ay(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.a4(L.v0,l),new A.a4(G.nx,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bPh],y.O)
A.aj(i).az("/pay/done",new M.a4K("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.wC){o=i
i=r.c
if(i!=null)i.O(y.q).f.a4(A.cz(null,null,null,null,null,B.z,null,A.i(F.aSi(o.a),null,null,null,null,null,null,null,null),null,B.W,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a4(D.bVw)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new C.caX(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Eo,w)},
K3(d){return this.bbp(d)},
bbp(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$K3=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=C.cZj(d.ax)
n=s.c
n.toString
x=3
return A.d(A.ck(null,new C.caS(o),!1,n,!0,!1,null,y.T),$async$K3)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(C.cJt(r),$async$K3)
case 8:s.gT().ah($.yR())
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
if(n!=null)n.O(y.q).f.a4(A.cz(null,null,null,null,null,B.z,null,A.i(F.aSi(q.a),null,null,null,null,null,null,null,null),null,B.W,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a4(N.a7S)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$K3,w)},
u(d){var x=this,w=null,v=x.gT().G($.yR(),y.I),u=$.ap,t=D.ar5.B(0,new A.a0(0,A.aw(d,B.b7,y.w).w.r.b,0,0)),s=y.p
return A.cP(w,B.bE,A.bH(!0,A.AK(A.d5(A.a([new A.S(D.asx,A.Q(A.a([new A.Eh(new C.caZ(d),w)],s),B.x,B.j,B.p,0,w,w),w),D.bJo,new A.S(B.bN,A.h3(v,new C.cb_(x),new C.cb0(x),new C.cb1(),!1,!0,!1),w),D.bJz,D.bIO],s),w,t,w,w,!1,B.a3,!1),u,new C.cb2(x)),w,B.a0,!1),!0,w)},
b7o(d){var x=null,w=A.B(x,D.aob,B.r,x,x,new A.O(B.u,x,x,A.a2(22),x,x,B.y),x,x,x,B.bg,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.C(A.a([w,D.bRP,D.clc,B.af,D.ckY,B.af,D.cl4,B.bk,new C.aIC(v,new C.caR(this),x)],y.p),B.J,B.j,B.p,0,B.v)},
aQo(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new C.caQ(),g=A.a2(22),f=A.a2(999)
f=A.B(l,A.i(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,B.jN,l,l,l),B.r,l,l,new A.O(B.eB,l,l,f,l,l,B.y),l,l,l,B.eE,l,l,l)
x=d.Q
w=x/100
v=A.i(A.aP(w,!0),l,l,l,l,B.iY,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aP(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+C.ds7(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([f,B.af,D.c8i,B.aF,v,B.Z,A.i(B.e.a3(u," "),l,l,l,l,B.h0,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aP(w,!0)
B.e.p(u,A.a([B.aB,new A.jD(f,i?new C.caL(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aP(w,!0):"Sem saldo para levantar"
B.e.p(u,A.a([B.aB,new A.jD(j,i?new C.caM(m,d):l,!1,!1,l)],q))}j=A.a([A.B(l,A.C(u,B.I,B.j,B.p,0,B.v),B.r,l,l,new A.O(B.u,l,l,g,B.bb,l,B.y),l,l,l,B.bg,l,l,l),D.cjQ],q)
if(d.gG3())B.e.p(j,A.a([B.R,new C.akQ("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new C.caN(m),B.hK,l)],q))
j.push(h.$1("A caminho"))
j.push(D.ciH)
j.push(h.$1("Por cobrar"))
j.push(D.cln)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.cki)
else for(p=0;p<x.length;x.length===w||(0,A.G)(x),++p){o=x[p]
v=A.aP(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":B.f.aZ(B.i.k(A.aN(n)),2,"0")+"/"+B.f.aZ(B.i.k(A.ay(n)),2,"0")+"/"+A.aG(n)
f.push(new C.rg(v,u,o.gPA(),l))}j.push(new C.GV(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gG3()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new C.GV(A.a([new C.rg("Dados e IBAN",l,f,new C.caO(m)),new C.rg("Modo de levantamento",l,C.cZj(t).d,new C.caP(m,d))],g),l))
return A.C(j,B.J,B.j,B.p,0,B.v)}}
C.rg.prototype={}
C.GV.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.a2(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.eE(x,0,y.z),v=J.at(w.a),u=w.b,w=new A.c6(v,u,A.u(w).i("c6<1>"));w.t();){t=w.c
t=t>=0?new A.a4(u+t,v.gE(v)):A.ai(A.c1())
s=t.b
r=s.d
t=t.a<x.length-1?Q.pg:o
q=A.a([A.i(s.a,o,o,o,o,B.aq,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.i(p,o,o,o,o,B.h1,o,o,o))
q=A.a([new A.bV(1,B.ay,A.C(q,B.I,B.bU,B.p,0,B.v),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.i(p,o,o,o,o,B.iX,o,o,o))
if(r!=null)B.e.p(q,A.a([B.bt,P.Pm],m))
l.push(A.dQ(B.c0,A.B(o,A.Q(q,B.x,B.j,B.p,0,o,o),B.r,o,B.dZ,t,o,o,o,o,o,o,o),B.a2,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,B.bc))}return A.B(o,A.C(l,B.x,B.j,B.p,0,B.v),B.r,o,o,new A.O(B.u,o,o,n,o,o,B.y),o,o,o,B.e2,o,o,o)}}
C.aFG.prototype={
bc(d,e){var x,w,v,u,t,s,r=null,q=e.G($.cLT(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bxL
w=new C.c_i()
if(x.length===0){q=q?r:p.e
return new C.GV(A.a([(q==null?0:q)>0.009?new C.rg("Pago, por libertar",r,A.aP(p.e,!1),r):D.ckj],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.G)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.eH()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.eH()))}q.push(new C.rg(t.a,s,A.aP(t.c,!0),r))}return new C.GV(q,r)}}
C.aOv.prototype={
bc(d,e){var x,w,v=null,u=e.G($.cLT(),y.Q),t=u.gv(u)
u=e.G($.cU7(),y.l)
x=u.gv(u)
if(x==null)x=B.f0
u=t==null
w=u?v:t.c
w=A.aP(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new C.rg("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new C.rg("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aP(u==null?0:u,!1),v)],y.S)
return A.C(A.a([new C.GV(u,v),B.Z,A.i("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.Mi(new C.cto())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,B.h0,v,v,v)],y.p),B.J,B.j,B.p,0,B.v)}}
C.Yi.prototype={
u(d){var x=this,w=null,v=I.cL8(w,22,1),u=y.p
return A.B(w,A.Q(A.a([A.UU(x.d,B.Vl[B.i.av(x.c,4)]),B.ag,A.a6(A.C(A.a([A.i(x.e,w,w,w,w,B.eT,w,w,w),B.bd,A.i(x.f,w,w,w,w,B.a8R,w,w,w)],u),B.I,B.j,B.p,0,B.v),1)],u),B.x,B.j,B.p,0,w,w),B.r,w,w,v,w,w,w,B.cX,w,w,w)}}
C.aIC.prototype={
u(d){var x=null,w=A.cv(B.A,B.A.ci(0.35),B.u,B.u,x,x,B.ah,x,x,B.oA),v=A.a([],y.p)
v.push(new A.dK(1,B.bh,A.i(this.c,1,B.a_,x,x,x,x,x,x),x))
return A.aO(A.bM(A.Q(v,B.x,B.j,B.P,0,x,x),this.e,w),54,x)}}
C.Ye.prototype={
u(d){var x=null
return A.Q(A.a([A.b3(this.c,$.ap,x,x,18),B.au,A.a6(A.i(this.d,x,x,x,x,B.HN,x,x,x),1)],y.p),B.x,B.j,B.p,0,x,x)}}
C.Wv.prototype={
u(d){var x=null,w=I.cL8(x,22,1)
return A.B(x,A.C(A.a([A.i(this.c,x,x,x,x,B.jO,B.a5,x,x),A.cr(B.a9S,x,x,this.d,x,x)],y.p),B.x,B.j,B.p,0,B.v),B.r,x,x,w,x,x,x,B.bg,x,x,x)}}
C.O4.prototype={
R(){return new C.aH3()}}
C.aH3.prototype={
gbfy(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.VX[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.ap:m
s=u===w?2:1
r=new A.b5(18,18)
if(t==null)t=m
else{q=new A.bb(t,s,B.ae,-1)
t=new A.dW(q,q,q,q)}s=w===D.a1g?D.aAx:B.Dn
s=A.b3(s,$.ap,m,m,m)
p=A.C(A.a([A.i(w.d,m,m,m,m,B.eT,m,m,m),A.i(w.e,m,m,m,m,B.b9,m,m,m)],l),B.I,B.j,B.p,0,B.v)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aB1:D.aB2
B.e.p(k,A.a([A.dQ(m,A.fn(m,A.Q(A.a([s,B.ag,new A.bV(1,B.ay,p,m),A.b3(o,u===w?$.ap:B.bs,m,m,m)],l),B.x,B.j,B.p,0,m,m),m,B.aN,new A.O(B.u,m,t,new A.ce(r,r,r,r),B.bb,m,B.y),B.de,m,m,m,B.dI,m),B.a2,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.c3J(n,w),m,m,m,m,m,m,!1,B.bc),B.Z],l))}return new A.eO(D.caO,A.C(k,B.x,B.j,B.P,0,B.v),A.a([A.cr(B.cK,m,m,new C.c3K(d),m,m),A.bM(B.dt,new C.c3L(n,d),m)],l),m)}}
C.aI1.prototype={
bc(d,e){var x=null,w=e.G($.dc4(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return B.ap
return new A.S(B.kc,A.un(A.i("Taxas de servi\xe7o de reservas que cancelaste: "+A.aP(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,B.Hz,x,x,x),B.u,B.dI,14,B.hK),x)}}
C.akQ.prototype={
u(d){var x=this,w=null,v=x.f,u=A.a6(A.i(x.c,2,B.a_,w,w,B.ds,w,w,w),1),t=A.a2(16)
return A.dQ(B.c0,A.un(A.Q(A.a([new A.Hv(v,w),B.au,u,B.au,A.B(B.K,A.i(x.d,w,w,w,w,B.rO,w,w,w),B.r,w,w,new A.O(B.A,w,w,t,w,w,B.y),w,32,w,B.dA,w,w,w)],y.p),B.x,B.j,B.p,0,w,w),B.u,B.Mt,14,v),B.a2,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,B.bc)}}
var z=a.updateTypes(["F<KF>(au)","v(DH,DH)","z(tl)","tl()","O4(N)","Wv(L,c_)","e(mr)","F<lF>()"])
C.cEb.prototype={
$1(d){return this.aFh(d)},
aFh(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.C3(b6)
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
for(s=y.a,p=J.bo(b2,s),o=A.u(p),p=new A.ak(p,p.gA(p),o.i("ak<V.E>")),n=y.h,m=y.g,o=o.i("V.E"),l=0,k=0,j=0,i=0;p.t();){h=p.d
if(h==null)h=o.a(h)
g=J.a7(h)
f=A.dp(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bo(e==null?B.aj:e,s)
d=A.u(e)
e=new A.ak(e,e.gA(e),d.i("ak<V.E>"))
d=d.i("V.E")
a0=0
a1=0
while(e.t()){a2=e.d
if(a2==null)a2=d.a(a2)
a3=J.a7(a2)
a4=A.dp(a3.h(a2,"amount"))
if(J.o(a3.h(a2,"status"),"paid"))a0+=a4
if(J.o(a3.h(a2,"status"),"paid")&&a3.au(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.J(a3.h(a2,"paid_at"))
a7=A.ei(a6==null?"":a6)
a6=A.J(g.h(h,"event_date"))
a8=A.ei(a6==null?"":a6)
a6=A.cQA(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.ei(1728e8)
else a9=a8==null?null:a8.ei(2592e8)
q.push(new C.DH(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}B.e.cO(q,new C.cEa())
v=new C.KF(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
C.cEa.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bF(9999,1,1,0,0)
x=e.d
return w.bC(0,x==null?A.bF(9999,1,1,0,0):x)},
$S:z+1}
C.bj3.prototype={
$1(d){return d.c===this.a},
$S:z+2}
C.bj4.prototype={
$0(){return D.a1h},
$S:z+3}
C.caV.prototype={
$1(d){var x,w=null,v=this.b,u=A.i(A.aP(v.Q/100,!0),w,w,w,w,D.c0k,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eO(D.caq,A.C(A.a([u,B.R,new C.Ye(G.nx,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),B.Z,D.ckx,B.Z,D.ckw],x),B.J,B.j,B.P,0,B.v),A.a([A.cr(B.cK,w,w,new C.caT(d),w,w),A.bM(D.cbt,new C.caU(d),w)],x),w)},
$S:18}
C.caT.prototype={
$0(){return A.as(this.a,!1).ak(!1)},
$S:0}
C.caU.prototype={
$0(){return A.as(this.a,!1).ak(!0)},
$S:0}
C.caW.prototype={
$0(){return this.a.w=!0},
$S:0}
C.caX.prototype={
$0(){return this.a.w=!1},
$S:0}
C.caS.prototype={
$1(d){return new C.O4(this.a,null)},
$S:z+4}
C.cb2.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gT()
t=$.yR()
u.ah(t)
u.ah($.cLT())
x=2
return A.d(u.a1(0,t.gej(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
C.caZ.prototype={
$0(){var x=this.a,w=A.aj(x).c
w===$&&A.b()
return w.jc()?A.aj(x).ak(null):A.aj(x).bQ(0,"/partner-home",null)},
$S:0}
C.cb1.prototype={
$0(){var x=null
return new A.S(new A.a0(40,40,40,40),A.bT(A.a_W(x,$.ap,x,x,x,x,x,x,x,x),x,x),x)},
$S:84}
C.cb0.prototype={
$2(d,e){var x=d instanceof E.wC?F.aSi(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new C.Wv(x,new C.caY(this.a),null)},
$S:z+5}
C.caY.prototype={
$0(){return this.a.gT().ah($.yR())},
$S:0}
C.cb_.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aQo(d):w.b7o(d)},
$S:z+6}
C.caR.prototype={
$0(){var x=this.a.c
x.toString
return A.aj(x).az("/partner-payments/setup",null,y.X)},
$S:0}
C.caQ.prototype={
$1(d){return new A.S(D.aqS,new A.kI(d,null),null)},
$S:324}
C.caL.prototype={
$0(){return this.a.Eo(this.b)},
$S:0}
C.caM.prototype={
$0(){return this.a.Eo(this.b)},
$S:0}
C.caN.prototype={
$0(){var x=this.a.c
x.toString
return A.aj(x).az("/partner-payments/setup",null,y.X)},
$S:0}
C.caO.prototype={
$0(){var x=this.a.c
x.toString
return A.aj(x).az("/partner-payments/setup",null,y.X)},
$S:0}
C.caP.prototype={
$0(){return this.a.K3(this.b)},
$S:0}
C.c_i.prototype={
$1(d){return B.f.aZ(B.i.k(A.aN(d)),2,"0")+"/"+B.f.aZ(B.i.k(A.ay(d)),2,"0")},
$S:132}
C.cto.prototype={
$1(d){return A.aP(d,!1)},
$S:174}
C.c3J.prototype={
$0(){var x=this.a
return x.q(new C.c3I(x,this.b))},
$S:0}
C.c3I.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.c3K.prototype={
$0(){return A.as(this.a,!1).bJ()},
$S:0}
C.c3L.prototype={
$0(){return A.as(this.b,!1).ak(this.a.gbfy())},
$S:0}
C.cyt.prototype={
$1(d){return this.aE6(d)},
aE6(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
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
n=A.aL(J.h(q,"amount"))
if(n==null)n=0
m=A.aL(J.h(q,"settled_amount"))
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
x(C,"dzW","Z5",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[C.DH,C.KF,C.rg])
x(A.bx,[C.cEb,C.bj3,C.caV,C.caS,C.cb_,C.caQ,C.c_i,C.cto,C.cyt])
x(A.cS,[C.cEa,C.cb0])
w(C.tl,A.fx)
x(A.bR,[C.bj4,C.caT,C.caU,C.caW,C.caX,C.cb2,C.caZ,C.cb1,C.caY,C.caR,C.caL,C.caM,C.caN,C.caO,C.caP,C.c3J,C.c3I,C.c3K,C.c3L])
w(C.ED,A.dD)
w(C.aIf,A.dv)
x(A.K,[C.GV,C.Yi,C.aIC,C.Ye,C.Wv,C.akQ])
x(A.eo,[C.aFG,C.aOv,C.aI1])
w(C.O4,A.I)
w(C.aH3,A.a1)})()
A.bw(b.typeUniverse,JSON.parse('{"Wv":{"K":[],"e":[],"f":[]},"O4":{"I":[],"e":[],"f":[]},"ED":{"I":[],"e":[],"f":[]},"aIf":{"a1":["ED"]},"GV":{"K":[],"e":[],"f":[]},"aFG":{"I":[],"e":[],"f":[]},"aOv":{"I":[],"e":[],"f":[]},"Yi":{"K":[],"e":[],"f":[]},"aIC":{"K":[],"e":[],"f":[]},"Ye":{"K":[],"e":[],"f":[]},"aH3":{"a1":["O4"]},"aI1":{"I":[],"e":[],"f":[]},"akQ":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.x
return{I:x("ax<mr>"),l:x("ax<f2>"),Q:x("ax<KF>"),Z:x("ax<P>"),P:x("F<mr>"),b:x("t<DH>"),O:x("t<+(aW,c)>"),s:x("t<c>"),p:x("t<e>"),S:x("t<rg>"),a:x("a5<c,@>"),w:x("dx"),L:x("KF"),T:x("tl"),e:x("lF"),N:x("c"),z:x("rg"),q:x("dA"),y:x("z"),i:x("P"),A:x("@"),g:x("r<@>?"),h:x("a5<c,@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cdp=new A.D("Recebe pagamentos na app",null,B.mf,null,null,null,null,null,null,null,null)
D.c9I=new A.D("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,B.rR,null,null,null,null,null,null,null,null)
D.bBk=x([D.cdp,B.aF,D.c9I],y.p)
D.aob=new A.ke(B.a3,B.j,B.p,B.I,null,B.v,null,0,D.bBk,null)
D.aqS=new A.a0(0,20,0,12)
D.ar5=new A.a0(0,8,0,40)
D.asx=new A.a0(20,4,20,0)
D.aAx=new A.aW(57389,"HeroiconsSolid",null,!1)
D.aB1=new A.aW(58627,"MaterialIcons",null,!1)
D.aB2=new A.aW(58628,"MaterialIcons",null,!1)
D.bxL=x([],y.b)
D.a1g=new C.tl("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a1h=new C.tl("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bKz=new C.tl("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bKy=new C.tl("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.VX=x([D.a1g,D.a1h,D.bKz,D.bKy],A.x("t<tl>"))
D.ayO=new H.Dh("Lucros e clientes",!0,C.dzW(),null)
D.bIO=new A.S(B.bN,D.ayO,null)
D.c5a=new A.D("Pagamentos",null,B.jR,null,null,null,null,null,null,null,null)
D.bJo=new A.S(B.ax,D.c5a,null)
D.bRN=new A.vB("Exportar",null,null)
D.bJz=new A.S(B.bN,D.bRN,null)
D.bPh=new A.a4(B.hW,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bRP=new A.vB("Como funciona",null,null)
D.cdR=new A.D("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bVw=new A.bJ(D.cdR,null,null,null,null,null,null,null,null,null,null,null,null,B.W,!1,null,null,null,B.z,null)
D.c0k=new A.M(!0,B.A,null,null,null,null,36,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8i=new A.D("Dispon\xedvel para receber",null,B.h1,null,null,null,null,null,null,null,null)
D.caq=new A.D("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.caO=new A.D("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.cbt=new A.D("Levantar",null,null,null,null,null,null,null,null,null,null)
D.ciH=new C.aFG(null)
D.cjQ=new C.aI1(null)
D.cki=new C.rg("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.ckj=new C.rg("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.ckw=new C.Ye(B.uZ,"Sem custos de levantamento",null)
D.ckx=new C.Ye(B.hW,"Chega em 1 a 3 dias \xfateis",null)
D.ckY=new C.Yi(1,B.e5,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.cl4=new C.Yi(2,G.nx,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.clc=new C.Yi(0,O.O1,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.cln=new C.aOv(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOF","cLT",()=>A.ez(new C.cEb(),null,!1,null,null,y.L))
x($,"dLQ","dc4",()=>B.bT.$1$1(new C.cyt(),y.i))})()};
(a=>{a["iWXin0aKq2pDOb+plXp/R2KpH/0="]=a.current})($__dart_deferred_initializers__);