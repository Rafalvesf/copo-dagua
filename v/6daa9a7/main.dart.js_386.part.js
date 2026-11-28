((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,K,L,F,G,H,C={DN:function DN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},KJ:function KJ(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cEE:function cEE(){},cED:function cED(){},
cZH(d){return B.e.hL(D.W0,new C.bjt(d),new C.bju())},
cJW(d){var x=0,w=A.n(y.H)
var $async$cJW=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.Hb(A.S(["action","schedule","interval",d.c],y.N,y.A)),$async$cJW)
case 2:return A.l(null,w)}})
return A.m($async$cJW,w)},
to:function to(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bjt:function bjt(d){this.a=d},
bju:function bju(){},
dlw(){return new C.EJ(null)},
dsv(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
EJ:function EJ(d){this.a=d},
aIv:function aIv(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
cbD:function cbD(d,e){this.a=d
this.b=e},
cbB:function cbB(d){this.a=d},
cbC:function cbC(d){this.a=d},
cbE:function cbE(d){this.a=d},
cbF:function cbF(d){this.a=d},
cbA:function cbA(d){this.a=d},
cbL:function cbL(d){this.a=d},
cbH:function cbH(d){this.a=d},
cbK:function cbK(){},
cbJ:function cbJ(d){this.a=d},
cbG:function cbG(d){this.a=d},
cbI:function cbI(d){this.a=d},
cbz:function cbz(d){this.a=d},
cby:function cby(){},
cbt:function cbt(d,e){this.a=d
this.b=e},
cbu:function cbu(d,e){this.a=d
this.b=e},
cbv:function cbv(d){this.a=d},
cbw:function cbw(d){this.a=d},
cbx:function cbx(d,e){this.a=d
this.b=e},
rj:function rj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GZ:function GZ(d,e){this.c=d
this.a=e},
aFW:function aFW(d){this.a=d},
c00:function c00(){},
aOL:function aOL(d){this.a=d},
cu6:function cu6(){},
Yt:function Yt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aIS:function aIS(d,e,f){this.c=d
this.e=e
this.a=f},
Yp:function Yp(d,e,f){this.c=d
this.d=e
this.a=f},
WG:function WG(d,e,f){this.c=d
this.d=e
this.a=f},
O9:function O9(d,e){this.c=d
this.a=e},
aHj:function aHj(){this.d=$
this.c=this.a=null},
c4r:function c4r(d,e){this.a=d
this.b=e},
c4q:function c4q(d,e){this.a=d
this.b=e},
c4s:function c4s(d){this.a=d},
c4t:function c4t(d,e){this.a=d
this.b=e},
cyQ:function cyQ(){},
aIh:function aIh(d){this.a=d},
al0:function al0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Zg(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$Zg=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.ajg(),$async$Zg)
case 3:u=$.T()
t=u.b
t===$&&A.b()
s=t.gbE().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.P("partner_profiles").aw(0,"business_name").W("id",r).dz(),$async$Zg)
case 4:q=e
t=q==null?null:J.h(q,"business_name")
p=H
o=J.cN(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.P("bookings").aw(0,"id, booking_number, event_date, status, total_amount, events(partner_name_1, partner_name_2, location), proposals(title)").W("partner_id",r).dk(0,"event_date",!1),$async$Zg)
case 5:m=e
x=6
return A.d(u.b.P("payments").aw(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("partner_id",r).G4("booking_id","is",null).tF(0,"created_at"),$async$Zg)
case 6:v=p.cQS(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Zg,w)}},D,M,N,O,P,Q,I
J=c[1]
A=c[0]
B=c[2]
E=c[116]
K=c[88]
L=c[201]
F=c[101]
G=c[257]
H=c[128]
C=a.updateHolder(c[36],C)
D=c[334]
M=c[105]
N=c[182]
O=c[306]
P=c[324]
Q=c[322]
I=c[142]
C.DN.prototype={}
C.KJ.prototype={}
C.to.prototype={
I(){return"PayoutMode."+this.b}}
C.EJ.prototype={
R(){return new C.aIv()}}
C.aIv.prototype={
Eo(d){return this.bkK(d)},
bkK(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Eo=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fT(!0,new C.cbD(r,d),i,y.y),$async$Eo)
case 3:if(f!==!0||r.c==null){x=1
break}r.q(new C.cbE(r))
u=5
x=8
return A.d(K.aSZ(d.Q),$async$Eo)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gT().ah($.yU())
p=q.c
i=r.c
i.toString
n=A.aP(q.b/100,!0)
m=A.aP(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+B.f.aZ(B.i.k(A.aN(p)),2,"0")+"/"+B.f.aZ(B.i.k(A.ay(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.a4(L.v1,l),new A.a4(G.nx,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bPJ],y.O)
A.aj(i).az("/pay/done",new M.a4T("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.wG){o=i
i=r.c
if(i!=null)i.O(y.q).f.a4(A.cz(null,null,null,null,null,B.z,null,A.i(F.aSx(o.a),null,null,null,null,null,null,null,null),null,B.W,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a4(D.bWl)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new C.cbF(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Eo,w)},
K5(d){return this.bbt(d)},
bbt(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$K5=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=C.cZH(d.ax)
n=s.c
n.toString
x=3
return A.d(A.ck(null,new C.cbA(o),!1,n,!0,!1,null,y.T),$async$K5)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(C.cJW(r),$async$K5)
case 8:s.gT().ah($.yU())
n=s.c
if(n!=null)n.O(y.q).f.a4(A.cz(null,null,null,null,null,B.z,null,A.i("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null,null),null,B.W,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.wG){q=n
n=s.c
if(n!=null)n.O(y.q).f.a4(A.cz(null,null,null,null,null,B.z,null,A.i(F.aSx(q.a),null,null,null,null,null,null,null,null),null,B.W,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a4(N.a7Z)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$K5,w)},
u(d){var x=this,w=null,v=x.gT().G($.yU(),y.I),u=$.ap,t=D.arf.B(0,new A.a0(0,A.aw(d,B.b7,y.w).w.r.b,0,0)),s=y.p
return A.cP(w,B.bE,A.bG(!0,A.AN(A.d5(A.a([new A.Q(D.asF,A.R(A.a([new A.En(new C.cbH(d),w)],s),B.x,B.j,B.o,0,w,w),w),D.bJM,new A.Q(B.bM,A.h3(v,new C.cbI(x),new C.cbJ(x),new C.cbK(),!1,!0,!1),w),D.bJY,D.bJb],s),w,t,w,w,!1,B.a1,!1),u,new C.cbL(x)),w,B.a_,!1),!0,w)},
b7s(d){var x=null,w=A.C(x,D.aoj,B.r,x,x,new A.O(B.u,x,x,A.a2(22),x,x,B.y),x,x,x,B.bh,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.B(A.a([w,D.bSh,D.cm_,B.ae,D.clL,B.ae,D.clS,B.bf,new C.aIS(v,new C.cbz(this),x)],y.p),B.J,B.j,B.o,0,B.v)},
aQq(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new C.cby(),g=A.a2(22),f=A.a2(999)
f=A.C(l,A.i(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,B.jO,l,l,l),B.r,l,l,new A.O(B.eD,l,l,f,l,l,B.y),l,l,l,B.eG,l,l,l)
x=d.Q
w=x/100
v=A.i(A.aP(w,!0),l,l,l,l,B.iZ,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aP(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+C.dsv(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([f,B.ae,D.c97,B.aF,v,B.X,A.i(B.e.a3(u," "),l,l,l,l,B.h2,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aP(w,!0)
B.e.p(u,A.a([B.aC,new A.jE(f,i?new C.cbt(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aP(w,!0):"Sem saldo para levantar"
B.e.p(u,A.a([B.aC,new A.jE(j,i?new C.cbu(m,d):l,!1,!1,l)],q))}j=A.a([A.C(l,A.B(u,B.I,B.j,B.o,0,B.v),B.r,l,l,new A.O(B.u,l,l,g,B.bb,l,B.y),l,l,l,B.bh,l,l,l),D.ckD],q)
if(d.gG3())B.e.p(j,A.a([B.Q,new C.al0("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new C.cbv(m),B.hL,l)],q))
j.push(h.$1("A caminho"))
j.push(D.cju)
j.push(h.$1("Por cobrar"))
j.push(D.cma)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.cl5)
else for(p=0;p<x.length;x.length===w||(0,A.G)(x),++p){o=x[p]
v=A.aP(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":B.f.aZ(B.i.k(A.aN(n)),2,"0")+"/"+B.f.aZ(B.i.k(A.ay(n)),2,"0")+"/"+A.aG(n)
f.push(new C.rj(v,u,o.gPA(),l))}j.push(new C.GZ(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gG3()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new C.GZ(A.a([new C.rj("Dados e IBAN",l,f,new C.cbw(m)),new C.rj("Modo de levantamento",l,C.cZH(t).d,new C.cbx(m,d))],g),l))
return A.B(j,B.J,B.j,B.o,0,B.v)}}
C.rj.prototype={}
C.GZ.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.a2(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.eE(x,0,y.z),v=J.at(w.a),u=w.b,w=new A.c7(v,u,A.u(w).i("c7<1>"));w.t();){t=w.c
t=t>=0?new A.a4(u+t,v.gE(v)):A.ai(A.c1())
s=t.b
r=s.d
t=t.a<x.length-1?Q.ph:o
q=A.a([A.i(s.a,o,o,o,o,B.ap,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.i(p,o,o,o,o,B.h3,o,o,o))
q=A.a([new A.bT(1,B.ay,A.B(q,B.I,B.bT,B.o,0,B.v),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.i(p,o,o,o,o,B.iY,o,o,o))
if(r!=null)B.e.p(q,A.a([B.bs,P.Pq],m))
l.push(A.dQ(B.c_,A.C(o,A.R(q,B.x,B.j,B.o,0,o,o),B.r,o,B.e0,t,o,o,o,o,o,o,o),B.a3,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,B.bd))}return A.C(o,A.B(l,B.x,B.j,B.o,0,B.v),B.r,o,o,new A.O(B.u,o,o,n,o,o,B.y),o,o,o,B.e4,o,o,o)}}
C.aFW.prototype={
bc(d,e){var x,w,v,u,t,s,r=null,q=e.G($.cMh(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.by2
w=new C.c00()
if(x.length===0){q=q?r:p.e
return new C.GZ(A.a([(q==null?0:q)>0.009?new C.rj("Pago, por libertar",r,A.aP(p.e,!1),r):D.cl6],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.G)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.eH()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.eH()))}q.push(new C.rj(t.a,s,A.aP(t.c,!0),r))}return new C.GZ(q,r)}}
C.aOL.prototype={
bc(d,e){var x,w,v=null,u=e.G($.cMh(),y.Q),t=u.gv(u)
u=e.G($.cUv(),y.l)
x=u.gv(u)
if(x==null)x=B.f1
u=t==null
w=u?v:t.c
w=A.aP(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new C.rj("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new C.rj("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aP(u==null?0:u,!1),v)],y.S)
return A.B(A.a([new C.GZ(u,v),B.X,A.i("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.Mi(new C.cu6())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,B.h2,v,v,v)],y.p),B.J,B.j,B.o,0,B.v)}}
C.Yt.prototype={
u(d){var x=this,w=null,v=I.cLw(w,22,1),u=y.p
return A.C(w,A.R(A.a([A.V3(x.d,B.Vp[B.i.aq(x.c,4)]),B.ag,A.a6(A.B(A.a([A.i(x.e,w,w,w,w,B.eU,w,w,w),B.be,A.i(x.f,w,w,w,w,B.a8Z,w,w,w)],u),B.I,B.j,B.o,0,B.v),1)],u),B.x,B.j,B.o,0,w,w),B.r,w,w,v,w,w,w,B.cY,w,w,w)}}
C.aIS.prototype={
u(d){var x=null,w=A.cv(B.A,B.A.ci(0.35),B.u,B.u,x,x,B.ah,x,x,B.oB),v=A.a([],y.p)
v.push(new A.dK(1,B.bi,A.i(this.c,1,B.a0,x,x,x,x,x,x),x))
return A.aO(A.bM(A.R(v,B.x,B.j,B.N,0,x,x),this.e,w),54,x)}}
C.Yp.prototype={
u(d){var x=null
return A.R(A.a([A.b3(this.c,$.ap,x,x,18),B.av,A.a6(A.i(this.d,x,x,x,x,B.HR,x,x,x),1)],y.p),B.x,B.j,B.o,0,x,x)}}
C.WG.prototype={
u(d){var x=null,w=I.cLw(x,22,1)
return A.C(x,A.B(A.a([A.i(this.c,x,x,x,x,B.jP,B.a5,x,x),A.cr(B.aa_,x,x,this.d,x,x)],y.p),B.x,B.j,B.o,0,B.v),B.r,x,x,w,x,x,x,B.bh,x,x,x)}}
C.O9.prototype={
R(){return new C.aHj()}}
C.aHj.prototype={
gbfC(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.W0[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.ap:m
s=u===w?2:1
r=new A.b5(18,18)
if(t==null)t=m
else{q=new A.bb(t,s,B.af,-1)
t=new A.dY(q,q,q,q)}s=w===D.a1m?D.aAI:B.Do
s=A.b3(s,$.ap,m,m,m)
p=A.B(A.a([A.i(w.d,m,m,m,m,B.eU,m,m,m),A.i(w.e,m,m,m,m,B.b9,m,m,m)],l),B.I,B.j,B.o,0,B.v)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aBc:D.aBd
B.e.p(k,A.a([A.dQ(m,A.fn(m,A.R(A.a([s,B.ag,new A.bT(1,B.ay,p,m),A.b3(o,u===w?$.ap:B.br,m,m,m)],l),B.x,B.j,B.o,0,m,m),m,B.aN,new A.O(B.u,m,t,new A.ce(r,r,r,r),B.bb,m,B.y),B.de,m,m,m,B.dI,m),B.a3,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.c4r(n,w),m,m,m,m,m,m,!1,B.bd),B.X],l))}return new A.eO(D.cbD,A.B(k,B.x,B.j,B.N,0,B.v),A.a([A.cr(B.cK,m,m,new C.c4s(d),m,m),A.bM(B.dt,new C.c4t(n,d),m)],l),m)}}
C.aIh.prototype={
bc(d,e){var x=null,w=e.G($.dcr(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return B.aq
return new A.Q(B.kd,A.ur(A.i("Taxas de servi\xe7o de reservas que cancelaste: "+A.aP(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,B.HD,x,x,x),B.u,B.dI,14,B.hL),x)}}
C.al0.prototype={
u(d){var x=this,w=null,v=x.f,u=A.a6(A.i(x.c,2,B.a0,w,w,B.ds,w,w,w),1),t=A.a2(16)
return A.dQ(B.c_,A.ur(A.R(A.a([new A.Hz(v,w),B.av,u,B.av,A.C(B.K,A.i(x.d,w,w,w,w,B.rO,w,w,w),B.r,w,w,new A.O(B.A,w,w,t,w,w,B.y),w,32,w,B.dA,w,w,w)],y.p),B.x,B.j,B.o,0,w,w),B.u,B.Mx,14,v),B.a3,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,B.bd)}}
var z=a.updateTypes(["F<KJ>(au)","v(DN,DN)","y(to)","to()","O9(N)","WG(L,bY)","e(mr)","F<lF>()"])
C.cEE.prototype={
$1(d){return this.aFo(d)},
aFo(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.C7(b6)
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
x=A.a9(b4) instanceof A.cT?8:10
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
x=A.a9(b5) instanceof A.cT?16:18
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
if(J.o(a3.h(a2,"status"),"paid")&&a3.av(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.J(a3.h(a2,"paid_at"))
a7=A.ej(a6==null?"":a6)
a6=A.J(g.h(h,"event_date"))
a8=A.ej(a6==null?"":a6)
a6=A.cQX(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.ei(1728e8)
else a9=a8==null?null:a8.ei(2592e8)
q.push(new C.DN(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}B.e.cO(q,new C.cED())
v=new C.KJ(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
C.cED.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bF(9999,1,1,0,0)
x=e.d
return w.bC(0,x==null?A.bF(9999,1,1,0,0):x)},
$S:z+1}
C.bjt.prototype={
$1(d){return d.c===this.a},
$S:z+2}
C.bju.prototype={
$0(){return D.a1n},
$S:z+3}
C.cbD.prototype={
$1(d){var x,w=null,v=this.b,u=A.i(A.aP(v.Q/100,!0),w,w,w,w,D.c18,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eO(D.cbf,A.B(A.a([u,B.Q,new C.Yp(G.nx,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),B.X,D.clk,B.X,D.clj],x),B.J,B.j,B.N,0,B.v),A.a([A.cr(B.cK,w,w,new C.cbB(d),w,w),A.bM(D.cci,new C.cbC(d),w)],x),w)},
$S:18}
C.cbB.prototype={
$0(){return A.as(this.a,!1).ak(!1)},
$S:0}
C.cbC.prototype={
$0(){return A.as(this.a,!1).ak(!0)},
$S:0}
C.cbE.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cbF.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cbA.prototype={
$1(d){return new C.O9(this.a,null)},
$S:z+4}
C.cbL.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gT()
t=$.yU()
u.ah(t)
u.ah($.cMh())
x=2
return A.d(u.a1(0,t.gej(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:2}
C.cbH.prototype={
$0(){var x=this.a,w=A.aj(x).c
w===$&&A.b()
return w.jc()?A.aj(x).ak(null):A.aj(x).bQ(0,"/partner-home",null)},
$S:0}
C.cbK.prototype={
$0(){return new A.Q(new A.a0(40,40,40,40),D.bVQ,null)},
$S:84}
C.cbJ.prototype={
$2(d,e){var x=d instanceof E.wG?F.aSx(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new C.WG(x,new C.cbG(this.a),null)},
$S:z+5}
C.cbG.prototype={
$0(){return this.a.gT().ah($.yU())},
$S:0}
C.cbI.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aQq(d):w.b7s(d)},
$S:z+6}
C.cbz.prototype={
$0(){var x=this.a.c
x.toString
return A.aj(x).az("/partner-payments/setup",null,y.X)},
$S:0}
C.cby.prototype={
$1(d){return new A.Q(D.ar2,new A.kn(d,null),null)},
$S:484}
C.cbt.prototype={
$0(){return this.a.Eo(this.b)},
$S:0}
C.cbu.prototype={
$0(){return this.a.Eo(this.b)},
$S:0}
C.cbv.prototype={
$0(){var x=this.a.c
x.toString
return A.aj(x).az("/partner-payments/setup",null,y.X)},
$S:0}
C.cbw.prototype={
$0(){var x=this.a.c
x.toString
return A.aj(x).az("/partner-payments/setup",null,y.X)},
$S:0}
C.cbx.prototype={
$0(){return this.a.K5(this.b)},
$S:0}
C.c00.prototype={
$1(d){return B.f.aZ(B.i.k(A.aN(d)),2,"0")+"/"+B.f.aZ(B.i.k(A.ay(d)),2,"0")},
$S:148}
C.cu6.prototype={
$1(d){return A.aP(d,!1)},
$S:177}
C.c4r.prototype={
$0(){var x=this.a
return x.q(new C.c4q(x,this.b))},
$S:0}
C.c4q.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.c4s.prototype={
$0(){return A.as(this.a,!1).bJ()},
$S:0}
C.c4t.prototype={
$0(){return A.as(this.b,!1).ak(this.a.gbfC())},
$S:0}
C.cyQ.prototype={
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
$S:186};(function installTearOffs(){var x=a._static_0
x(C,"dAj","Zg",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[C.DN,C.KJ,C.rj])
x(A.bx,[C.cEE,C.bjt,C.cbD,C.cbA,C.cbI,C.cby,C.c00,C.cu6,C.cyQ])
x(A.cS,[C.cED,C.cbJ])
w(C.to,A.fx)
x(A.bR,[C.bju,C.cbB,C.cbC,C.cbE,C.cbF,C.cbL,C.cbH,C.cbK,C.cbG,C.cbz,C.cbt,C.cbu,C.cbv,C.cbw,C.cbx,C.c4r,C.c4q,C.c4s,C.c4t])
w(C.EJ,A.dD)
w(C.aIv,A.dv)
x(A.K,[C.GZ,C.Yt,C.aIS,C.Yp,C.WG,C.al0])
x(A.eo,[C.aFW,C.aOL,C.aIh])
w(C.O9,A.I)
w(C.aHj,A.a1)})()
A.bu(b.typeUniverse,JSON.parse('{"WG":{"K":[],"e":[],"f":[]},"O9":{"I":[],"e":[],"f":[]},"EJ":{"I":[],"e":[],"f":[]},"aIv":{"a1":["EJ"]},"GZ":{"K":[],"e":[],"f":[]},"aFW":{"I":[],"e":[],"f":[]},"aOL":{"I":[],"e":[],"f":[]},"Yt":{"K":[],"e":[],"f":[]},"aIS":{"K":[],"e":[],"f":[]},"Yp":{"K":[],"e":[],"f":[]},"aHj":{"a1":["O9"]},"aIh":{"I":[],"e":[],"f":[]},"al0":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{I:x("ax<mr>"),l:x("ax<f3>"),Q:x("ax<KJ>"),Z:x("ax<P>"),P:x("F<mr>"),b:x("t<DN>"),O:x("t<+(aW,c)>"),s:x("t<c>"),p:x("t<e>"),S:x("t<rj>"),a:x("a5<c,@>"),w:x("dx"),L:x("KJ"),T:x("to"),e:x("lF"),N:x("c"),z:x("rj"),q:x("dA"),y:x("y"),i:x("P"),A:x("@"),g:x("r<@>?"),h:x("a5<c,@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cee=new A.D("Recebe pagamentos na app",null,B.mh,null,null,null,null,null,null,null,null)
D.cax=new A.D("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,B.rR,null,null,null,null,null,null,null,null)
D.bBF=x([D.cee,B.aF,D.cax],y.p)
D.aoj=new A.jc(B.a1,B.j,B.o,B.I,null,B.v,null,0,D.bBF,null)
D.ar2=new A.a0(0,20,0,12)
D.arf=new A.a0(0,8,0,40)
D.asF=new A.a0(20,4,20,0)
D.aAI=new A.aW(57389,"HeroiconsSolid",null,!1)
D.aBc=new A.aW(58627,"MaterialIcons",null,!1)
D.aBd=new A.aW(58628,"MaterialIcons",null,!1)
D.by2=x([],y.b)
D.a1m=new C.to("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a1n=new C.to("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bL_=new C.to("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bKZ=new C.to("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.W0=x([D.a1m,D.a1n,D.bL_,D.bKZ],A.w("t<to>"))
D.ayZ=new H.Dn("Lucros e clientes",!0,C.dAj(),null)
D.bJb=new A.Q(B.bM,D.ayZ,null)
D.c5Z=new A.D("Pagamentos",null,B.jS,null,null,null,null,null,null,null,null)
D.bJM=new A.Q(B.au,D.c5Z,null)
D.bSf=new A.vG("Exportar",null,null)
D.bJY=new A.Q(B.bM,D.bSf,null)
D.bPJ=new A.a4(B.hX,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bSh=new A.vG("Como funciona",null,null)
D.bVQ=new A.B1(4,B.a_,null)
D.ceG=new A.D("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bWl=new A.bK(D.ceG,null,null,null,null,null,null,null,null,null,null,null,null,B.W,!1,null,null,null,B.z,null)
D.c18=new A.M(!0,B.A,null,null,null,null,36,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c97=new A.D("Dispon\xedvel para receber",null,B.h3,null,null,null,null,null,null,null,null)
D.cbf=new A.D("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.cbD=new A.D("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.cci=new A.D("Levantar",null,null,null,null,null,null,null,null,null,null)
D.cju=new C.aFW(null)
D.ckD=new C.aIh(null)
D.cl5=new C.rj("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.cl6=new C.rj("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.clj=new C.Yp(B.v_,"Sem custos de levantamento",null)
D.clk=new C.Yp(B.hX,"Chega em 1 a 3 dias \xfateis",null)
D.clL=new C.Yt(1,B.e7,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.clS=new C.Yt(2,G.nx,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.cm_=new C.Yt(0,O.O5,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.cma=new C.aOL(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dP9","cMh",()=>A.ez(new C.cEE(),null,!1,null,null,y.L))
x($,"dMe","dcr",()=>B.bS.$1$1(new C.cyQ(),y.i))})()};
(a=>{a["FnYp3VPfvUlFZ2E1WbvqQFKhwA4="]=a.current})($__dart_deferred_initializers__);