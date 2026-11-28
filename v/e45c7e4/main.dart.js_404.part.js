((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,K,L,F,G,H,C={E3:function E3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},L6:function L6(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cI_:function cI_(){},cHZ:function cHZ(){},
d2i(d){return B.e.hQ(D.WO,new C.blu(d),new C.blv())},
cNt(d){var x=0,w=A.n(y.H)
var $async$cNt=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.Hw(A.S(["action","schedule","interval",d.c],y.N,y.A)),$async$cNt)
case 2:return A.l(null,w)}})
return A.m($async$cNt,w)},
tA:function tA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
blu:function blu(d){this.a=d},
blv:function blv(){},
dpr(){return new C.F_(null)},
dww(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
F_:function F_(d){this.a=d},
aJL:function aJL(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
cer:function cer(d,e){this.a=d
this.b=e},
cep:function cep(d){this.a=d},
ceq:function ceq(d){this.a=d},
ces:function ces(d){this.a=d},
cet:function cet(d){this.a=d},
ceo:function ceo(d){this.a=d},
cez:function cez(d){this.a=d},
cev:function cev(d){this.a=d},
cey:function cey(){},
cex:function cex(d){this.a=d},
ceu:function ceu(d){this.a=d},
cew:function cew(d){this.a=d},
cen:function cen(d){this.a=d},
cem:function cem(){},
ceh:function ceh(d,e){this.a=d
this.b=e},
cei:function cei(d,e){this.a=d
this.b=e},
cej:function cej(d){this.a=d},
cek:function cek(d){this.a=d},
cel:function cel(d,e){this.a=d
this.b=e},
rv:function rv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Hj:function Hj(d,e){this.c=d
this.a=e},
aHa:function aHa(d){this.a=d},
c2D:function c2D(){},
aQ5:function aQ5(d){this.a=d},
cxe:function cxe(){},
Z2:function Z2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aK7:function aK7(d,e,f){this.c=d
this.e=e
this.a=f},
YZ:function YZ(d,e,f){this.c=d
this.d=e
this.a=f},
Xd:function Xd(d,e,f){this.c=d
this.d=e
this.a=f},
Oy:function Oy(d,e){this.c=d
this.a=e},
aIz:function aIz(){this.d=$
this.c=this.a=null},
c75:function c75(d,e){this.a=d
this.b=e},
c74:function c74(d,e){this.a=d
this.b=e},
c76:function c76(d){this.a=d},
c77:function c77(d,e){this.a=d
this.b=e},
cBZ:function cBZ(){},
aJx:function aJx(d){this.a=d},
am2:function am2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZR(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$ZR=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.akg(),$async$ZR)
case 3:u=$.T()
t=u.b
t===$&&A.b()
s=t.gbE().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.R("partner_profiles").az(0,"business_name").W("id",r).dA(),$async$ZR)
case 4:q=e
t=q==null?null:J.h(q,"business_name")
p=H
o=J.cx(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.R("bookings").az(0,"*, events(partner_name_1, partner_name_2, location), proposals(title)").W("partner_id",r).dl(0,"event_date",!1),$async$ZR)
case 5:m=e
x=6
return A.d(u.b.R("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("partner_id",r).Gj("booking_id","is",null).tK(0,"created_at"),$async$ZR)
case 6:v=p.cUp(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$ZR,w)}},D,M,N,O,P,Q,I
J=c[1]
A=c[0]
B=c[2]
E=c[119]
K=c[91]
L=c[204]
F=c[104]
G=c[261]
H=c[131]
C=a.updateHolder(c[38],C)
D=c[345]
M=c[108]
N=c[186]
O=c[318]
P=c[336]
Q=c[334]
I=c[146]
C.E3.prototype={}
C.L6.prototype={}
C.tA.prototype={
I(){return"PayoutMode."+this.b}}
C.F_.prototype={
P(){return new C.aJL()}}
C.aJL.prototype={
ED(d){return this.bm7(d)},
bm7(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$ED=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fM(!0,new C.cer(r,d),i,y.y),$async$ED)
case 3:if(f!==!0||r.c==null){x=1
break}r.q(new C.ces(r))
u=5
x=8
return A.d(K.aUq(d.Q),$async$ED)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gT().ai($.ze())
p=q.c
i=r.c
i.toString
n=A.aQ(q.b/100,!0)
m=A.aQ(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+B.f.aW(B.i.k(A.aN(p)),2,"0")+"/"+B.f.aW(B.i.k(A.ay(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.a3(L.qt,l),new A.a3(G.nJ,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bRJ],y.O)
A.ai(i).aq("/pay/done",new M.a5C("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.wW){o=i
i=r.c
if(i!=null)i.O(y.q).f.a4(A.cA(null,null,null,null,null,B.z,null,A.i(F.aTY(o.a),null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a4(D.bYB)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new C.cet(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ED,w)},
Kn(d){return this.bcJ(d)},
bcJ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Kn=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=C.d2i(d.ax)
n=s.c
n.toString
x=3
return A.d(A.cn(null,new C.ceo(o),!1,n,!0,!1,null,y.T),$async$Kn)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(C.cNt(r),$async$Kn)
case 8:s.gT().ai($.ze())
n=s.c
if(n!=null)n.O(y.q).f.a4(A.cA(null,null,null,null,null,B.z,null,A.i("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.wW){q=n
n=s.c
if(n!=null)n.O(y.q).f.a4(A.cA(null,null,null,null,null,B.z,null,A.i(F.aTY(q.a),null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a4(N.a8U)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Kn,w)},
u(d){var x=this,w=null,v=x.gT().H($.ze(),y.I),u=$.ap,t=D.aso.B(0,new A.a2(0,A.aw(d,B.b5,y.w).w.r.b,0,0)),s=y.p
return A.cM(w,B.bx,A.bE(!0,A.y8(A.cZ(A.a([new A.R(D.atN,A.Q(A.a([new A.EE(new C.cev(d),w)],s),B.w,B.j,B.m,0,w,w),w),D.bLB,new A.R(B.bM,A.h9(v,new C.cew(x),new C.cex(x),new C.cey(),!1,!0,!1),w),D.bLP,D.bKY],s),w,t,w,w,!1,B.a1,!1),u,new C.cez(x)),w,B.a_,!1),!0,w)},
b8z(d){var x=null,w=A.D(x,D.apt,B.r,x,x,new A.O(B.t,x,x,A.a0(22),x,x,B.y),x,x,x,B.bg,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.B(A.a([w,D.bUm,D.coK,B.aa,D.cov,B.aa,D.coC,B.bf,new C.aK7(v,new C.cen(this),x)],y.p),B.J,B.j,B.m,0,B.v)},
aRg(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=new C.cem(),g=A.a0(22),f=A.a0(999)
f=A.D(l,A.i(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,B.k2,l,l,l),B.r,l,l,new A.O(B.dU,l,l,f,l,l,B.y),l,l,l,B.dN,l,l,l)
x=d.Q
w=x/100
v=A.i(A.aQ(w,!0),l,l,l,l,B.j5,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aQ(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+C.dww(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([f,B.aa,D.cbs,B.aE,v,B.X,A.i(B.e.a3(u," "),l,l,l,l,B.h9,l,l,l)],q)
if(r&&j&&x>0){f=m.w?k:"Levantar j\xe1 "+A.aQ(w,!0)
B.e.n(u,A.a([B.aA,new A.jF(f,i?new C.ceh(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aQ(w,!0):"Sem saldo para levantar"
B.e.n(u,A.a([B.aA,new A.jF(j,i?new C.cei(m,d):l,!1,!1,l)],q))}j=A.a([A.D(l,A.B(u,B.H,B.j,B.m,0,B.v),B.r,l,l,new A.O(B.t,l,l,g,B.bb,l,B.y),l,l,l,B.bg,l,l,l),D.cnm],q)
if(d.gGi())B.e.n(j,A.a([B.P,new C.am2("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new C.cej(m),B.hR,l)],q))
j.push(h.$1("A caminho"))
j.push(D.cmc)
j.push(h.$1("Por cobrar"))
j.push(D.coW)
j.push(h.$1("Levantamentos"))
g=y.S
f=A.a([],g)
x=d.at
w=x.length
if(w===0)f.push(D.cnQ)
else for(p=0;p<x.length;x.length===w||(0,A.K)(x),++p){o=x[p]
v=A.aQ(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":B.f.aW(B.i.k(A.aN(n)),2,"0")+"/"+B.f.aW(B.i.k(A.ay(n)),2,"0")+"/"+A.aE(n)
f.push(new C.rv(v,u,o.gQ_(),l))}j.push(new C.Hj(f,l))
j.push(h.$1("Conta"))
f=d.y
if(f==null)f=d.gGi()?"Em falta":""
else f="\xb7\xb7\xb7\xb7 "+f
j.push(new C.Hj(A.a([new C.rv("Dados e IBAN",l,f,new C.cek(m)),new C.rv("Modo de levantamento",l,C.d2i(t).d,new C.cel(m,d))],g),l))
return A.B(j,B.J,B.j,B.m,0,B.v)}}
C.rv.prototype={}
C.Hj.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.a0(22),m=y.p,l=A.a([],m)
for(x=this.c,w=A.ew(x,0,y.z),v=J.ar(w.a),u=w.b,w=new A.bX(v,u,A.u(w).i("bX<1>"));w.t();){t=w.c
t=t>=0?new A.a3(u+t,v.gE(v)):A.aj(A.c1())
s=t.b
r=s.d
t=t.a<x.length-1?Q.pv:o
q=A.a([A.i(s.a,o,o,o,o,B.ao,o,o,o)],m)
p=s.b
if(p!=null&&p.length!==0)q.push(A.i(p,o,o,o,o,B.hc,o,o,o))
q=A.a([new A.bT(1,B.aw,A.B(q,B.H,B.bU,B.m,0,B.v),o)],m)
p=s.c
if(p!=null&&p.length!==0)q.push(A.i(p,o,o,o,o,B.j3,o,o,o))
if(r!=null)B.e.n(q,A.a([B.bq,P.Qc],m))
l.push(A.dP(B.bY,A.D(o,A.Q(q,B.w,B.j,B.m,0,o,o),B.r,o,B.e4,t,o,o,o,o,o,o,o),B.a2,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,B.bd))}return A.D(o,A.B(l,B.w,B.j,B.m,0,B.v),B.r,o,o,new A.O(B.t,o,o,n,o,o,B.y),o,o,o,B.e9,o,o,o)}}
C.aHa.prototype={
bc(d,e){var x,w,v,u,t,s,r=null,q=e.H($.cPR(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bzA
w=new C.c2D()
if(x.length===0){q=q?r:p.e
return new C.Hj(A.a([(q==null?0:q)>0.009?new C.rv("Pago, por libertar",r,A.aQ(p.e,!1),r):D.cnR],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.K)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.eh()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.eh()))}q.push(new C.rv(t.a,s,A.aQ(t.c,!0),r))}return new C.Hj(q,r)}}
C.aQ5.prototype={
bc(d,e){var x,w,v=null,u=e.H($.cPR(),y.Q),t=u.gv(u)
u=e.H($.cY1(),y.l)
x=u.gv(u)
if(x==null)x=B.f5
u=t==null
w=u?v:t.c
w=A.aQ(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new C.rv("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new C.rv("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aQ(u==null?0:u,!1),v)],y.S)
return A.B(A.a([new C.Hj(u,v),B.X,A.i("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.MG(new C.cxe())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,B.h9,v,v,v)],y.p),B.J,B.j,B.m,0,B.v)}}
C.Z2.prototype={
u(d){var x=this,w=null,v=I.cP5(w,22,1),u=y.p
return A.D(w,A.Q(A.a([A.VA(x.d,B.Wb[B.i.ar(x.c,4)]),B.ag,A.a6(A.B(A.a([A.i(x.e,w,w,w,w,B.eZ,w,w,w),B.be,A.i(x.f,w,w,w,w,B.a9U,w,w,w)],u),B.H,B.j,B.m,0,B.v),1)],u),B.w,B.j,B.m,0,w,w),B.r,w,w,v,w,w,w,B.cT,w,w,w)}}
C.aK7.prototype={
u(d){var x=null,w=A.cu(B.A,B.A.cd(0.35),B.t,B.t,x,x,B.af,x,x,B.oP),v=A.a([],y.p)
v.push(new A.dL(1,B.bi,A.i(this.c,1,B.a0,x,x,x,x,x,x),x))
return A.aJ(A.bD(A.Q(v,B.w,B.j,B.L,0,x,x),this.e,w),54,x)}}
C.YZ.prototype={
u(d){var x=null
return A.Q(A.a([A.b2(this.c,$.ap,x,x,18),B.aq,A.a6(A.i(this.d,x,x,x,x,B.Iu,x,x,x),1)],y.p),B.w,B.j,B.m,0,x,x)}}
C.Xd.prototype={
u(d){var x=null,w=I.cP5(x,22,1)
return A.D(x,A.B(A.a([A.i(this.c,x,x,x,x,B.k3,B.a5,x,x),A.cp(B.z5,x,x,this.d,x,x)],y.p),B.w,B.j,B.m,0,B.v),B.r,x,x,w,x,x,x,B.bg,x,x,x)}}
C.Oy.prototype={
P(){return new C.aIz()}}
C.aIz.prototype={
gbgX(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.WO[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.ap:m
s=u===w?2:1
r=new A.b4(18,18)
if(t==null)t=m
else{q=new A.bd(t,s,B.ah,-1)
t=new A.dV(q,q,q,q)}s=w===D.a2g?D.aBZ:B.DY
s=A.b2(s,$.ap,m,m,m)
p=A.B(A.a([A.i(w.d,m,m,m,m,B.eZ,m,m,m),A.i(w.e,m,m,m,m,B.b9,m,m,m)],l),B.H,B.j,B.m,0,B.v)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aCr:D.aCs
B.e.n(k,A.a([A.dP(m,A.fv(m,A.Q(A.a([s,B.ag,new A.bT(1,B.aw,p,m),A.b2(o,u===w?$.ap:B.bu,m,m,m)],l),B.w,B.j,B.m,0,m,m),m,B.aM,new A.O(B.t,m,t,new A.cf(r,r,r,r),B.bb,m,B.y),B.dg,m,m,m,B.dO,m),B.a2,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.c75(n,w),m,m,m,m,m,m,!1,B.bd),B.X],l))}return new A.eK(D.ce5,A.B(k,B.w,B.j,B.L,0,B.v),A.a([A.cp(B.cL,m,m,new C.c76(d),m,m),A.bD(B.dw,new C.c77(n,d),m)],l),m)}}
C.aJx.prototype={
bc(d,e){var x=null,w=e.H($.dg4(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return B.ar
return new A.R(B.ko,A.uA(A.i("Taxas de servi\xe7o de reservas que cancelaste: "+A.aQ(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,B.Ih,x,x,x),B.t,B.dO,14,B.hR),x)}}
C.am2.prototype={
u(d){var x=this,w=null,v=x.f,u=A.a6(A.i(x.c,2,B.a0,w,w,B.dv,w,w,w),1),t=A.a0(16)
return A.dP(B.bY,A.uA(A.Q(A.a([new A.HX(v,w),B.aq,u,B.aq,A.D(B.K,A.i(x.d,w,w,w,w,B.t5,w,w,w),B.r,w,w,new A.O(B.A,w,w,t,w,w,B.y),w,32,w,B.dC,w,w,w)],y.p),B.w,B.j,B.m,0,w,w),B.t,B.Nj,14,v),B.a2,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,B.bd)}}
var z=a.updateTypes(["F<L6>(av)","v(E3,E3)","y(tA)","tA()","Oy(N)","Xd(H,bW)","e(mB)","F<lK>()"])
C.cI_.prototype={
$1(d){return this.aGa(d)},
aGa(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.Cp(b6)
b2=null
b3=!0
u=4
s=$.T().b
s===$&&A.b()
x=7
return A.d(s.R("bookings").az(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").W("partner_id",b1).eP("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
return A.d(s.R("bookings").az(0,"total_amount, status, payments(type, status, amount, released_at)").W("partner_id",b1).eP("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
return A.d(s.R("bookings").az(0,"total_amount, status, payments(type, status, amount)").W("partner_id",b1).eP("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
for(s=y.a,p=J.bk(b2,s),o=A.u(p),p=new A.ak(p,p.gA(p),o.i("ak<U.E>")),n=y.h,m=y.g,o=o.i("U.E"),l=0,k=0,j=0,i=0;p.t();){h=p.d
if(h==null)h=o.a(h)
g=J.a7(h)
f=A.dt(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bk(e==null?B.aj:e,s)
d=A.u(e)
e=new A.ak(e,e.gA(e),d.i("ak<U.E>"))
d=d.i("U.E")
a0=0
a1=0
while(e.t()){a2=e.d
if(a2==null)a2=d.a(a2)
a3=J.a7(a2)
a4=A.dt(a3.h(a2,"amount"))
if(J.o(a3.h(a2,"status"),"paid"))a0+=a4
if(J.o(a3.h(a2,"status"),"paid")&&a3.aw(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.C(a3.h(a2,"paid_at"))
a7=A.dK(a6==null?"":a6)
a6=A.C(g.h(h,"event_date"))
a8=A.dK(a6==null?"":a6)
a6=A.cUu(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.ee(1728e8)
else a9=a8==null?null:a8.ee(2592e8)
q.push(new C.E3(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}B.e.cO(q,new C.cHZ())
v=new C.L6(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
C.cHZ.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bG(9999,1,1,0,0)
x=e.d
return w.bC(0,x==null?A.bG(9999,1,1,0,0):x)},
$S:z+1}
C.blu.prototype={
$1(d){return d.c===this.a},
$S:z+2}
C.blv.prototype={
$0(){return D.a2h},
$S:z+3}
C.cer.prototype={
$1(d){var x,w=null,v=this.b,u=A.i(A.aQ(v.Q/100,!0),w,w,w,w,D.c3p,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eK(D.cdH,A.B(A.a([u,B.P,new C.YZ(G.nJ,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),B.X,D.co4,B.X,D.co3],x),B.J,B.j,B.L,0,B.v),A.a([A.cp(B.cL,w,w,new C.cep(d),w,w),A.bD(D.ceO,new C.ceq(d),w)],x),w)},
$S:16}
C.cep.prototype={
$0(){return A.aq(this.a,!1).aj(!1)},
$S:0}
C.ceq.prototype={
$0(){return A.aq(this.a,!1).aj(!0)},
$S:0}
C.ces.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cet.prototype={
$0(){return this.a.w=!1},
$S:0}
C.ceo.prototype={
$1(d){return new C.Oy(this.a,null)},
$S:z+4}
C.cez.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gT()
t=$.ze()
u.ai(t)
u.ai($.cPR())
x=2
return A.d(u.a1(0,t.gem(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
C.cev.prototype={
$0(){var x=this.a,w=A.ai(x).c
w===$&&A.b()
return w.jf()?A.ai(x).aj(null):A.ai(x).bS(0,"/partner-home",null)},
$S:0}
C.cey.prototype={
$0(){return new A.R(new A.a2(40,40,40,40),D.bY_,null)},
$S:85}
C.cex.prototype={
$2(d,e){var x=d instanceof E.wW?F.aTY(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new C.Xd(x,new C.ceu(this.a),null)},
$S:z+5}
C.ceu.prototype={
$0(){return this.a.gT().ai($.ze())},
$S:0}
C.cew.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aRg(d):w.b8z(d)},
$S:z+6}
C.cen.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).aq("/partner-payments/setup",null,y.X)},
$S:0}
C.cem.prototype={
$1(d){return new A.R(D.asb,new A.ko(d,null),null)},
$S:272}
C.ceh.prototype={
$0(){return this.a.ED(this.b)},
$S:0}
C.cei.prototype={
$0(){return this.a.ED(this.b)},
$S:0}
C.cej.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).aq("/partner-payments/setup",null,y.X)},
$S:0}
C.cek.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).aq("/partner-payments/setup",null,y.X)},
$S:0}
C.cel.prototype={
$0(){return this.a.Kn(this.b)},
$S:0}
C.c2D.prototype={
$1(d){return B.f.aW(B.i.k(A.aN(d)),2,"0")+"/"+B.f.aW(B.i.k(A.ay(d)),2,"0")},
$S:139}
C.cxe.prototype={
$1(d){return A.aQ(d,!1)},
$S:179}
C.c75.prototype={
$0(){var x=this.a
return x.q(new C.c74(x,this.b))},
$S:0}
C.c74.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.c76.prototype={
$0(){return A.aq(this.a,!1).bJ()},
$S:0}
C.c77.prototype={
$0(){return A.aq(this.b,!1).aj(this.a.gbgX())},
$S:0}
C.cBZ.prototype={
$1(d){return this.aEV(d)},
aEV(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.R("partner_charges").az(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.ar(s);p.t();){q=p.gE(p)
o=r
n=A.aK(J.h(q,"amount"))
if(n==null)n=0
m=A.aK(J.h(q,"settled_amount"))
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
$S:187};(function installTearOffs(){var x=a._static_0
x(C,"dEx","ZR",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.H,[C.E3,C.L6,C.rv])
x(A.bx,[C.cI_,C.blu,C.cer,C.ceo,C.cew,C.cem,C.c2D,C.cxe,C.cBZ])
x(A.cR,[C.cHZ,C.cex])
w(C.tA,A.fr)
x(A.bR,[C.blv,C.cep,C.ceq,C.ces,C.cet,C.cez,C.cev,C.cey,C.ceu,C.cen,C.ceh,C.cei,C.cej,C.cek,C.cel,C.c75,C.c74,C.c76,C.c77])
w(C.F_,A.dD)
w(C.aJL,A.dy)
x(A.L,[C.Hj,C.Z2,C.aK7,C.YZ,C.Xd,C.am2])
x(A.en,[C.aHa,C.aQ5,C.aJx])
w(C.Oy,A.J)
w(C.aIz,A.a_)})()
A.br(b.typeUniverse,JSON.parse('{"Xd":{"L":[],"e":[],"f":[]},"Oy":{"J":[],"e":[],"f":[]},"F_":{"J":[],"e":[],"f":[]},"aJL":{"a_":["F_"]},"Hj":{"L":[],"e":[],"f":[]},"aHa":{"J":[],"e":[],"f":[]},"aQ5":{"J":[],"e":[],"f":[]},"Z2":{"L":[],"e":[],"f":[]},"aK7":{"L":[],"e":[],"f":[]},"YZ":{"L":[],"e":[],"f":[]},"aIz":{"a_":["Oy"]},"aJx":{"J":[],"e":[],"f":[]},"am2":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{I:x("ax<mB>"),l:x("ax<f8>"),Q:x("ax<L6>"),Z:x("ax<P>"),P:x("F<mB>"),b:x("r<E3>"),O:x("r<+(aV,c)>"),s:x("r<c>"),p:x("r<e>"),S:x("r<rv>"),a:x("a4<c,@>"),w:x("dn"),L:x("L6"),T:x("tA"),e:x("lK"),N:x("c"),z:x("rv"),q:x("ds"),y:x("y"),i:x("P"),A:x("@"),g:x("t<@>?"),h:x("a4<c,@>?"),X:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cgQ=new A.E("Recebe pagamentos na app",null,B.j6,null,null,null,null,null,null,null,null)
D.ccZ=new A.E("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,B.t8,null,null,null,null,null,null,null,null)
D.bDe=x([D.cgQ,B.aE,D.ccZ],y.p)
D.apt=new A.jd(B.a1,B.j,B.m,B.H,null,B.v,null,0,D.bDe,null)
D.asb=new A.a2(0,20,0,12)
D.aso=new A.a2(0,8,0,40)
D.atN=new A.a2(20,4,20,0)
D.aBZ=new A.aV(57389,"HeroiconsSolid",null,!1)
D.aCr=new A.aV(58627,"MaterialIcons",null,!1)
D.aCs=new A.aV(58628,"MaterialIcons",null,!1)
D.bzA=x([],y.b)
D.a2g=new C.tA("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a2h=new C.tA("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bMO=new C.tA("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bMN=new C.tA("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.WO=x([D.a2g,D.a2h,D.bMO,D.bMN],A.w("r<tA>"))
D.aAf=new H.DD("Lucros e clientes",!0,C.dEx(),null)
D.bKY=new A.R(B.bM,D.aAf,null)
D.c8g=new A.E("Pagamentos",null,B.hd,null,null,null,null,null,null,null,null)
D.bLB=new A.R(B.av,D.c8g,null)
D.bUk=new A.vQ("Exportar",null,null)
D.bLP=new A.R(B.bM,D.bUk,null)
D.bRJ=new A.a3(B.hw,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.bUm=new A.vQ("Como funciona",null,null)
D.bY_=new A.yf(4,B.a_,null)
D.chh=new A.E("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bYB=new A.bI(D.chh,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.z,null)
D.c3p=new A.M(!0,B.A,null,null,null,null,36,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbs=new A.E("Dispon\xedvel para receber",null,B.hc,null,null,null,null,null,null,null,null)
D.cdH=new A.E("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.ce5=new A.E("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.ceO=new A.E("Levantar",null,null,null,null,null,null,null,null,null,null)
D.cmc=new C.aHa(null)
D.cnm=new C.aJx(null)
D.cnQ=new C.rv("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.cnR=new C.rv("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.co3=new C.YZ(B.vg,"Sem custos de levantamento",null)
D.co4=new C.YZ(B.hw,"Chega em 1 a 3 dias \xfateis",null)
D.cov=new C.Z2(1,B.ec,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.coC=new C.Z2(2,G.nJ,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.coK=new C.Z2(0,O.OS,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)
D.coW=new C.aQ5(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTy","cPR",()=>A.eE(new C.cI_(),null,!1,null,null,y.L))
x($,"dQD","dg4",()=>B.bT.$1$1(new C.cBZ(),y.i))})()};
(a=>{a["xuAgZFrujWAxsK/WbCF5Q9NcRoo="]=a.current})($__dart_deferred_initializers__);