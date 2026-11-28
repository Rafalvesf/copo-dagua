((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,K,L,F,G,H,B={Ec:function Ec(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Ll:function Ll(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},cMi:function cMi(){},cMh:function cMh(){},
d7_(d){return C.e.hx(D.WC,new B.bmE(d),new B.bmF())},
cRQ(d){var x=0,w=A.n(y.H)
var $async$cRQ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(E.HF(A.R(["action","schedule","interval",d.c],y.N,y.A)),$async$cRQ)
case 2:return A.l(null,w)}})
return A.m($async$cRQ,w)},
tE:function tE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.a=g
_.b=h},
bmE:function bmE(d){this.a=d},
bmF:function bmF(){},
duw(){return new B.F7(null)},
dBD(d){var x
switch(d){case"weekly":x="\xe0s sextas-feiras"
break
case"monthly":x="no dia 1 de cada m\xeas"
break
default:x="todos os dias"
break}return x},
F7:function F7(d){this.a=d},
aKm:function aKm(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
cho:function cho(d,e){this.a=d
this.b=e},
chm:function chm(d){this.a=d},
chn:function chn(d){this.a=d},
chp:function chp(d){this.a=d},
chq:function chq(d){this.a=d},
chl:function chl(d){this.a=d},
chw:function chw(d){this.a=d},
chs:function chs(d){this.a=d},
chv:function chv(){},
chu:function chu(d){this.a=d},
chr:function chr(d){this.a=d},
cht:function cht(d){this.a=d},
chk:function chk(d){this.a=d},
chf:function chf(d,e){this.a=d
this.b=e},
chg:function chg(d,e){this.a=d
this.b=e},
chh:function chh(d){this.a=d},
chi:function chi(d){this.a=d},
chj:function chj(d,e){this.a=d
this.b=e},
rz:function rz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Hs:function Hs(d,e){this.c=d
this.a=e},
aHN:function aHN(d){this.a=d},
c5q:function c5q(){},
aQM:function aQM(d){this.a=d},
cB7:function cB7(){},
Zp:function Zp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKN:function aKN(d,e,f){this.c=d
this.e=e
this.a=f},
Zl:function Zl(d,e,f){this.c=d
this.d=e
this.a=f},
Xw:function Xw(d,e,f){this.c=d
this.d=e
this.a=f},
OP:function OP(d,e){this.c=d
this.a=e},
aJ9:function aJ9(){this.d=$
this.c=this.a=null},
c9Y:function c9Y(d,e){this.a=d
this.b=e},
c9X:function c9X(d,e){this.a=d
this.b=e},
c9Z:function c9Z(d){this.a=d},
ca_:function ca_(d,e){this.a=d
this.b=e},
cG1:function cG1(){},
aK7:function aK7(d){this.a=d},
amB:function amB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_c(){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m
var $async$a_c=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(H.akP(),$async$a_c)
case 3:u=$.P()
t=u.b
t===$&&A.b()
s=t.gbx().e.a
r=(s==null?null:s.r).a
x=4
return A.d(t.P("partner_profiles").ai(0,"business_name").V("id",r).ck(),$async$a_c)
case 4:q=e
t=q==null?null:J.i(q,"business_name")
p=H
o=J.cy(t==null?"Parceiro":t)
n="Lucros e clientes"
x=5
return A.d(u.b.P("bookings").ai(0,"*, events(partner_name_1, partner_name_2, location), proposals(title)").V("partner_id",r).cO(0,"event_date",!1),$async$a_c)
case 5:m=e
x=6
return A.d(u.b.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("partner_id",r).Gk("booking_id","is",null).tD(0,"created_at"),$async$a_c)
case 6:v=p.cZ_(o,n,m,e,!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$a_c,w)}},D,M,N,O,P,Q,R,I
J=c[1]
A=c[0]
C=c[2]
E=c[124]
K=c[92]
L=c[209]
F=c[106]
G=c[272]
H=c[133]
B=a.updateHolder(c[38],B)
D=c[358]
M=c[109]
N=c[264]
O=c[191]
P=c[327]
Q=c[346]
R=c[344]
I=c[148]
B.Ec.prototype={}
B.Ll.prototype={}
B.tE.prototype={
I(){return"PayoutMode."+this.b}}
B.F7.prototype={
R(){return new B.aKm()}}
B.aKm.prototype={
EH(d){return this.bmG(d)},
bmG(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$EH=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:i=r.c
i.toString
x=3
return A.d(A.fR(!0,new B.cho(r,d),i,y.y),$async$EH)
case 3:if(f!==!0||r.c==null){x=1
break}r.p(new B.chp(r))
u=5
x=8
return A.d(K.aVd(d.Q),$async$EH)
case 8:q=f
if(r.c==null){s=[1]
x=6
break}r.gS().ak($.zh())
p=q.c
i=r.c
i.toString
n=A.aK(q.b/100,!0)
m=A.aK(q.b/100,!0)
l=p==null?"Chega em 1 a 3 dias \xfateis.":"Previsto at\xe9 "+C.f.aV(C.j.k(A.ay(p)),2,"0")+"/"+C.f.aV(C.j.k(A.an(p)),2,"0")+"."
k=d.y
if(k==null)k="\u2014"
k=A.a([new A.Z(L.lF,l),new A.Z(G.nV,"IBAN \u2022\u2022\u2022\u2022 "+k),D.bRE],y.O)
A.ae(i).al("/pay/done",new M.a65("","",n,"Levantamento pedido!",m+" a caminho do teu IBAN",k,"Ver pagamentos","/partner-payments","Voltar ao in\xedcio","/partner-home"),y.X)
s.push(7)
x=6
break
case 5:u=4
h=t.pop()
i=A.a9(h)
if(i instanceof E.x0){o=i
i=r.c
if(i!=null)i.O(y.q).f.a2(A.c0(null,null,null,null,null,C.y,null,A.h(F.aUH(o.a),null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}else{i=r.c
if(i!=null)i.O(y.q).f.a2(D.bYG)}s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.p(new B.chq(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$EH,w)},
Kv(d){return this.bdj(d)},
bdj(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Kv=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=B.d7_(d.ax)
n=s.c
n.toString
x=3
return A.d(A.bW(null,new B.chl(o),!1,n,!0,!1,null,y.T),$async$Kv)
case 3:r=f
if(r==null||r===o||s.c==null){x=1
break}u=5
x=8
return A.d(B.cRQ(r),$async$Kv)
case 8:s.gS().ak($.zh())
n=s.c
if(n!=null)n.O(y.q).f.a2(A.c0(null,null,null,null,null,C.y,null,A.h("Levantamentos: "+r.d.toLowerCase(),null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=7
break
case 5:u=4
m=t.pop()
n=A.a9(m)
if(n instanceof E.x0){q=n
n=s.c
if(n!=null)n.O(y.q).f.a2(A.c0(null,null,null,null,null,C.y,null,A.h(F.aUH(q.a),null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}else{n=s.c
if(n!=null)n.O(y.q).f.a2(O.I_)}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Kv,w)},
u(d){var x=this,w=null,v=x.gS().G($.zh(),y.I),u=$.au,t=D.as6.C(0,new A.a3(0,A.aO(d,C.b5,y.w).w.r.b,0,0)),s=y.p
return A.cQ(w,C.bx,A.bD(!0,A.B4(A.d6(A.a([new A.T(D.atu,A.O(A.a([new A.EM(new B.chs(d),w)],s),C.v,C.h,C.l,0,w),w),D.bKO,new A.T(C.bO,A.hC(v,new B.cht(x),new B.chu(x),new B.chv(),!1,!0,!1),w),D.bLj],s),w,t,w,w,!1,!1),u,new B.chw(x)),w,C.Z,!1),!0,w)},
b93(d){var x=null,w=A.B(x,D.apc,C.r,x,x,new A.K(C.t,x,x,A.W(22),x,x,C.x),x,x,x,C.bn,x,x,x),v=d.a?"Continuar ativa\xe7\xe3o":"Ativar pagamentos"
return A.A(A.a([w,D.bUp,D.coL,C.ab,D.cow,C.ab,D.coD,C.bi,new B.aKN(v,new B.chk(this),x)],y.p),C.E,C.h,C.l)},
aRC(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="A pedir\u2026",j=d.d,i=j&&d.Q>0&&!m.w,h=A.W(22),g=A.W(999)
g=A.B(l,A.h(d.c&&j?"Pagamentos ativos":"Em verifica\xe7\xe3o",l,l,l,l,C.hg,l,l,l),C.r,l,l,new A.K(C.cy,l,l,g,l,l,C.x),l,l,l,C.dq,l,l,l)
x=d.Q
w=x/100
v=A.h(A.aK(w,!0),l,l,l,l,C.jg,l,l,l)
u=A.a([],y.s)
t=d.as
if(t>0)u.push("A chegar "+A.aK(t/100,!0)+".")
t=d.ax
s=t==="manual"
r=!s
if(r&&d.y!=null)u.push("Vai sozinho para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+" "+B.dBD(t)+".")
if(s&&d.y!=null)u.push("Levantas para a conta \xb7\xb7\xb7\xb7 "+A.q(d.y)+".")
q=y.p
u=A.a([g,C.ab,D.cbs,C.aF,v,C.Q,A.h(C.e.a0(u," "),l,l,l,l,C.he,l,l,l)],q)
if(r&&j&&x>0){g=m.w?k:"Levantar j\xe1 "+A.aK(w,!0)
C.e.n(u,A.a([C.aB,new A.jM(g,i?new B.chf(m,d):l,!0,!1,l)],q))}if(s){if(m.w)j=k
else if(!j)j="Levantamentos por ativar"
else j=x>0?"Levantar "+A.aK(w,!0):"Sem saldo para levantar"
C.e.n(u,A.a([C.aB,new A.jM(j,i?new B.chg(m,d):l,!1,!1,l)],q))}j=A.a([A.B(l,A.A(u,C.F,C.h,C.l),C.r,l,l,new A.K(C.t,l,l,h,l,l,C.x),l,l,l,C.bn,l,l,l),D.cnn],q)
if(d.gGj())C.e.n(j,A.a([C.R,new B.amB("A Stripe precisa de mais dados para n\xe3o parar os pagamentos.","Completar",new B.chh(m),C.f5,l)],q))
j.push(D.bUj)
j.push(D.bUm)
h=y.S
g=A.a([],h)
x=d.at
w=x.length
if(w===0)g.push(D.cnR)
else for(p=0;p<x.length;x.length===w||(0,A.H)(x),++p){o=x[p]
v=A.aK(o.b/100,!0)
n=o.d
if(n==null)n=o.c
u=n==null?"":C.f.aV(C.j.k(A.ay(n)),2,"0")+"/"+C.f.aV(C.j.k(A.an(n)),2,"0")+"/"+A.ax(n)
g.push(new B.rz(v,u,o.gQ0(),l))}j.push(new A.cc("Levantamentos",l,A.a([new B.Hs(g,l)],q),16,l))
g=d.y
if(g==null)g=d.gGj()?"Em falta":""
else g="\xb7\xb7\xb7\xb7 "+g
j.push(new A.cc("Conta",l,A.a([new B.Hs(A.a([new B.rz("Dados e IBAN",l,g,new B.chi(m)),new B.rz("Modo de levantamento",l,B.d7_(t).d,new B.chj(m,d))],h),l)],q),16,l))
return A.A(j,C.E,C.h,C.l)}}
B.rz.prototype={}
B.Hs.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=y.p,m=A.a([],n)
for(x=this.c,w=A.eK(x,0,y.z),v=J.ap(w.a),u=w.b,w=new A.c9(v,u,A.u(w).i("c9<1>"));w.t();){t=w.c
t=t>=0?new A.Z(u+t,v.gE(v)):A.al(A.c6())
s=t.b
r=s.d
t=t.a<x.length-1?R.mQ:o
q=A.a([A.h(s.a,o,o,o,o,C.a9,o,o,o)],n)
p=s.b
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,C.hh,o,o,o))
q=A.a([new A.bQ(1,C.au,A.A(q,C.F,C.bS,C.l),o)],n)
p=s.c
if(p!=null&&p.length!==0)q.push(A.h(p,o,o,o,o,C.jf,o,o,o))
if(r!=null)C.e.n(q,A.a([C.bh,Q.Q6],n))
m.push(A.cP(C.bw,A.B(o,A.O(q,C.v,C.h,C.l,0,o),C.r,o,C.d2,t,o,o,o,o,o,o,o),C.W,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o,o,o,o,o,o,!1,C.aN))}return A.B(o,A.A(m,C.v,C.h,C.l),C.r,o,o,o,o,o,o,C.Z,o,o,o)}}
B.aHN.prototype={
bb(d,e){var x,w,v,u,t,s,r=null,q=e.G($.cUv(),y.Q),p=q.gv(q)
q=p==null
x=q?r:p.a
if(x==null)x=D.bzy
w=new B.c5q()
if(x.length===0){q=q?r:p.e
return new B.Hs(A.a([(q==null?0:q)>0.009?new B.rz("Pago, por libertar",r,A.aK(p.e,!1),r):D.cnS],y.S),r)}q=A.a([],y.S)
for(v=x.length,u=0;u<x.length;x.length===v||(0,A.H)(x),++u){t=x[u]
if(t.b){s=t.d
s=s==null?"Sinal \xb7 liberta em 48 h":"Sinal \xb7 liberta a "+A.q(w.$1(s.dM()))}else{s=t.d
s=s==null?"Resto \xb7 3 dias depois do evento":"Resto \xb7 liberta a "+A.q(w.$1(s.dM()))}q.push(new B.rz(t.a,s,A.aK(t.c,!0),r))}return new B.Hs(q,r)}}
B.aQM.prototype={
bb(d,e){var x,w,v=null,u=e.G($.cUv(),y.Q),t=u.gv(u)
u=e.G($.d1H(),y.l)
x=u.gv(u)
if(x==null)x=C.fd
u=t==null
w=u?v:t.c
w=A.aK(w==null?0:w,!1)
u=u?v:t.d
u=A.a([new B.rz("Sinais por pagar","Os clientes ainda n\xe3o pagaram",w,v),new B.rz("Restante por cobrar","Pago at\xe9 30 dias antes do evento",A.aK(u==null?0:u,!1),v)],y.S)
return A.A(A.a([new B.Hs(u,v),C.Q,A.h("O sinal \xe9 libertado 48 h depois de o cliente o pagar; o restante, 3 dias depois do evento."+(x.a.length===0&&x.b<=0?"":" Valores antes da taxa da \xc0 Nossa! ("+x.MP(new B.cB7())+" do valor da reserva, IVA inclu\xeddo), descontada nessa altura."),v,v,v,v,C.he,v,v,v)],y.p),C.E,C.h,C.l)}}
B.Zp.prototype={
u(d){var x=this,w=null,v=I.cTI(w,22,1),u=y.p
return A.B(w,A.O(A.a([A.VR(x.d,C.W3[C.j.aF(x.c,4)]),C.ae,A.a6(A.A(A.a([A.h(x.e,w,w,w,w,C.eJ,w,w,w),C.aU,A.h(x.f,w,w,w,w,C.a9O,w,w,w)],u),C.F,C.h,C.l),1)],u),C.v,C.h,C.l,0,w),C.r,w,w,v,w,w,w,C.cY,w,w,w)}}
B.aKN.prototype={
u(d){var x=null,w=A.ck(C.z,C.z.ce(0.35),C.t,C.t,x,x,C.ac,x,x,C.p3),v=A.a([],y.p)
v.push(new A.df(1,C.b9,A.h(this.c,1,C.a1,x,x,x,x,x,x),x))
return A.aH(A.bE(A.O(v,C.v,C.h,C.J,0,x),this.e,w),54,x)}}
B.Zl.prototype={
u(d){var x=null
return A.O(A.a([A.b5(this.c,$.au,x,x,18),C.ag,A.a6(A.h(this.d,x,x,x,x,C.IC,x,x,x),1)],y.p),C.v,C.h,C.l,0,x)}}
B.Xw.prototype={
u(d){var x=null,w=I.cTI(x,22,1)
return A.B(x,A.A(A.a([A.h(this.c,x,x,x,x,C.mr,C.a4,x,x),A.cx(C.tl,x,x,this.d,x,x)],y.p),C.v,C.h,C.l),C.r,x,x,w,x,x,x,C.bn,x,x,x)}}
B.OP.prototype={
R(){return new B.aJ9()}}
B.aJ9.prototype={
gbhH(){var x=this.d
return x===$?this.d=this.a.c:x},
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.p,k=A.a([],l)
for(x=0;x<4;++x){w=D.WC[x]
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
t=v===w?$.au:m
s=u===w?2:1
r=new A.b6(18,18)
if(t==null)t=m
else{q=new A.bf(t,s,C.ai,-1)
t=new A.dO(q,q,q,q)}s=w===D.a24?D.aBT:C.DZ
s=A.b5(s,$.au,m,m,m)
p=A.A(A.a([A.h(w.d,m,m,m,m,C.eJ,m,m,m),A.h(w.e,m,m,m,m,C.bf,m,m,m)],l),C.F,C.h,C.l)
v=n.d
if(v===$){v=n.d=n.a.c
u=v}else u=v
o=v===w?D.aCl:D.aCm
C.e.n(k,A.a([A.cP(m,A.fB(m,A.O(A.a([s,C.ae,new A.bQ(1,C.au,p,m),A.b5(o,u===w?$.au:C.bH,m,m,m)],l),C.v,C.h,C.l,0,m),m,C.aO,new A.K(C.t,m,t,new A.cz(r,r,r,r),C.br,m,C.x),C.dm,m,m,m,C.eg,m),C.W,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.c9Y(n,w),m,m,m,m,m,m,!1,C.aN),C.Q],l))}return new A.eS(D.cei,A.A(k,C.v,C.h,C.J),A.a([A.cx(C.cS,m,m,new B.c9Z(d),m,m),A.bE(C.dA,new B.ca_(n,d),m)],l),m)}}
B.aK7.prototype={
bb(d,e){var x=null,w=e.G($.dl0(),y.Z),v=w.gv(w)
if(v==null)v=0
if(v<=0.004)return C.ap
return new A.T(C.jD,A.pb(A.h("Taxas de servi\xe7o de reservas que cancelaste: "+A.aK(v,!0)+". S\xe3o descontadas nos pr\xf3ximos pagamentos.",x,x,x,x,C.a9E,x,x,x),C.t,C.eg,14,C.f5),x)}}
B.amB.prototype={
u(d){var x=this,w=null,v=x.f,u=A.a6(A.h(x.c,2,C.a1,w,w,C.e_,w,w,w),1),t=A.W(16)
return A.cP(C.bw,A.pb(A.O(A.a([new A.I7(v,w),C.ag,u,C.ag,A.B(C.K,A.h(x.d,w,w,w,w,C.kU,w,w,w),C.r,w,w,new A.K(C.z,w,w,t,w,w,C.x),w,32,w,C.cP,w,w,w)],y.p),C.v,C.h,C.l,0,w),C.t,C.Nh,14,v),C.W,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.e,w,w,w,w,w,w,!1,C.aN)}}
var z=a.updateTypes(["F<Ll>(at)","v(Ec,Ec)","z(tE)","tE()","OP(N)","Xw(J,c1)","e(mH)","F<lT>()"])
B.cMi.prototype={
$1(d){return this.aGD(d)},
aGD(b6){var x=0,w=A.n(y.L),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$$1=A.j(function(b7,b8){if(b7===1){t.push(b8)
x=u}for(;;)switch(x){case 0:b1=A.Cu(b6)
b2=null
b3=!0
u=4
s=$.P().b
s===$&&A.b()
x=7
return A.d(s.P("bookings").ai(0,"total_amount, status, event_date, profiles(full_name), events(partner_name_1, partner_name_2), payments(type, status, amount, released_at, paid_at)").V("partner_id",b1).dO("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
s=$.P().b
s===$&&A.b()
x=15
return A.d(s.P("bookings").ai(0,"total_amount, status, payments(type, status, amount, released_at)").V("partner_id",b1).dO("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
case 15:b2=b8
u=3
x=14
break
case 12:u=11
b5=t.pop()
x=A.a9(b5) instanceof A.cU?16:18
break
case 16:s=$.P().b
s===$&&A.b()
x=19
return A.d(s.P("bookings").ai(0,"total_amount, status, payments(type, status, amount)").V("partner_id",b1).dO("status",["awaiting_deposit","confirmed","completed"]),$async$$1)
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
for(s=y.a,p=J.bh(b2,s),o=A.u(p),p=new A.aj(p,p.gA(p),o.i("aj<V.E>")),n=y.h,m=y.g,o=o.i("V.E"),l=0,k=0,j=0,i=0;p.t();){h=p.d
if(h==null)h=o.a(h)
g=J.a7(h)
f=A.du(g.h(h,"total_amount"))
e=m.a(g.h(h,"payments"))
e=J.bh(e==null?C.ak:e,s)
d=A.u(e)
e=new A.aj(e,e.gA(e),d.i("aj<V.E>"))
d=d.i("V.E")
a0=0
a1=0
while(e.t()){a2=e.d
if(a2==null)a2=d.a(a2)
a3=J.a7(a2)
a4=A.du(a3.h(a2,"amount"))
if(J.o(a3.h(a2,"status"),"paid"))a0+=a4
if(J.o(a3.h(a2,"status"),"paid")&&a3.av(a2,"released_at")&&a3.h(a2,"released_at")==null){i+=a4
if(b3){a5=J.o(a3.h(a2,"type"),"deposit")
a6=A.C(a3.h(a2,"paid_at"))
a7=A.d4(a6==null?"":a6)
a6=A.C(g.h(h,"event_date"))
a8=A.d4(a6==null?"":a6)
a6=A.cZ4(n.a(g.h(h,"events")),n.a(g.h(h,"profiles")))
if(a5)a9=a7==null?null:a7.el(1728e8)
else a9=a8==null?null:a8.el(2592e8)
q.push(new B.Ec(a6,a5,a4,a9))}}if(J.o(a3.h(a2,"status"),"pending")&&J.o(a3.h(a2,"type"),"deposit"))a1+=a4}l+=a0
k+=a1
b0=f-a0-a1
if(b0>0.009)j+=b0}C.e.cw(q,new B.cMh())
v=new B.Ll(q,k,j,i)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
B.cMh.prototype={
$2(d,e){var x,w=d.d
if(w==null)w=A.bm(9999,1,1,0,0)
x=e.d
return w.bC(0,x==null?A.bm(9999,1,1,0,0):x)},
$S:z+1}
B.bmE.prototype={
$1(d){return d.c===this.a},
$S:z+2}
B.bmF.prototype={
$0(){return D.a25},
$S:z+3}
B.cho.prototype={
$1(d){var x,w=null,v=this.b,u=A.h(A.aK(v.Q/100,!0),w,w,w,w,D.c3s,w,w,w)
v=v.y
if(v==null)v="\u2014"
x=y.p
return new A.eS(D.cdV,A.A(A.a([u,C.R,new B.Zl(G.nV,"Para o IBAN \u2022\u2022\u2022\u2022 "+v,w),C.Q,D.co5,C.Q,D.co4],x),C.E,C.h,C.J),A.a([A.cx(C.cS,w,w,new B.chm(d),w,w),A.bE(D.cf6,new B.chn(d),w)],x),w)},
$S:19}
B.chm.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
B.chn.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
B.chp.prototype={
$0(){return this.a.w=!0},
$S:0}
B.chq.prototype={
$0(){return this.a.w=!1},
$S:0}
B.chl.prototype={
$1(d){return new B.OP(this.a,null)},
$S:z+4}
B.chw.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a.gS()
t=$.zh()
u.ak(t)
u.ak($.cUv())
x=2
return A.d(u.a1(0,t.ge_(),y.P),$async$$0)
case 2:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.chs.prototype={
$0(){var x=this.a,w=A.ae(x).c
w===$&&A.b()
return w.j7()?A.ae(x).ae(null):A.ae(x).bQ(0,"/partner-home",null)},
$S:0}
B.chv.prototype={
$0(){return new A.T(new A.a3(40,40,40,40),C.a8w,null)},
$S:91}
B.chu.prototype={
$2(d,e){var x=d instanceof E.x0?F.aUH(d.a):"N\xe3o foi poss\xedvel carregar os pagamentos."
return new B.Xw(x,new B.chr(this.a),null)},
$S:z+5}
B.chr.prototype={
$0(){return this.a.gS().ak($.zh())},
$S:0}
B.cht.prototype={
$1(d){var x=d.a&&d.b,w=this.a
return x?w.aRC(d):w.b93(d)},
$S:z+6}
B.chk.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).al("/partner-payments/setup",null,y.X)},
$S:0}
B.chf.prototype={
$0(){return this.a.EH(this.b)},
$S:0}
B.chg.prototype={
$0(){return this.a.EH(this.b)},
$S:0}
B.chh.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).al("/partner-payments/setup",null,y.X)},
$S:0}
B.chi.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).al("/partner-payments/setup",null,y.X)},
$S:0}
B.chj.prototype={
$0(){return this.a.Kv(this.b)},
$S:0}
B.c5q.prototype={
$1(d){return C.f.aV(C.j.k(A.ay(d)),2,"0")+"/"+C.f.aV(C.j.k(A.an(d)),2,"0")},
$S:152}
B.cB7.prototype={
$1(d){return A.aK(d,!1)},
$S:178}
B.c9Y.prototype={
$0(){var x=this.a
return x.p(new B.c9X(x,this.b))},
$S:0}
B.c9X.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.c9Z.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.ca_.prototype={
$0(){return A.am(this.b,!1).ae(this.a.gbhH())},
$S:0}
B.cG1.prototype={
$1(d){return this.aFk(d)},
aFk(d){var x=0,w=A.n(y.i),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.P("partner_charges").ai(0,"amount, settled_amount"),$async$$1)
case 7:s=f
r=0
for(p=J.ap(s);p.t();){q=p.gE(p)
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
$S:179};(function installTearOffs(){var x=a._static_0
x(B,"dJH","a_c",7)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[B.Ec,B.Ll,B.rz])
x(A.bw,[B.cMi,B.bmE,B.cho,B.chl,B.cht,B.c5q,B.cB7,B.cG1])
x(A.cK,[B.cMh,B.chu])
w(B.tE,A.eX)
x(A.bO,[B.bmF,B.chm,B.chn,B.chp,B.chq,B.chw,B.chs,B.chv,B.chr,B.chk,B.chf,B.chg,B.chh,B.chi,B.chj,B.c9Y,B.c9X,B.c9Z,B.ca_])
w(B.F7,A.dA)
w(B.aKm,A.dv)
x(A.M,[B.Hs,B.Zp,B.aKN,B.Zl,B.Xw,B.amB])
x(A.et,[B.aHN,B.aQM,B.aK7])
w(B.OP,A.G)
w(B.aJ9,A.Y)})()
A.bt(b.typeUniverse,JSON.parse('{"Xw":{"M":[],"e":[],"f":[]},"OP":{"G":[],"e":[],"f":[]},"F7":{"G":[],"e":[],"f":[]},"aKm":{"Y":["F7"]},"Hs":{"M":[],"e":[],"f":[]},"aHN":{"G":[],"e":[],"f":[]},"aQM":{"G":[],"e":[],"f":[]},"Zp":{"M":[],"e":[],"f":[]},"aKN":{"M":[],"e":[],"f":[]},"Zl":{"M":[],"e":[],"f":[]},"aJ9":{"Y":["OP"]},"aK7":{"G":[],"e":[],"f":[]},"amB":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{I:x("az<mH>"),l:x("az<fb>"),Q:x("az<Ll>"),Z:x("az<S>"),P:x("F<mH>"),b:x("r<Ec>"),O:x("r<+(aZ,c)>"),s:x("r<c>"),p:x("r<e>"),S:x("r<rz>"),a:x("a4<c,@>"),w:x("dh"),L:x("Ll"),T:x("tE"),e:x("lT"),N:x("c"),z:x("rz"),q:x("dr"),y:x("z"),i:x("S"),A:x("@"),g:x("t<@>?"),h:x("a4<c,@>?"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ch8=new A.D("Recebe pagamentos na app",null,C.is,null,null,null,null,null,null,null,null)
D.cd8=new A.D("Os clientes pagam dentro da \xc0 Nossa! e o dinheiro vai para a tua conta.",null,C.tg,null,null,null,null,null,null,null,null)
D.bDa=x([D.ch8,C.aF,D.cd8],y.p)
D.apc=new A.j4(C.av,C.h,C.l,C.F,null,C.c5,null,0,D.bDa,null)
D.as6=new A.a3(0,8,0,40)
D.atu=new A.a3(20,4,20,0)
D.aBT=new A.aZ(57389,"HeroiconsSolid",null,!1)
D.aCl=new A.aZ(58627,"MaterialIcons",null,!1)
D.aCm=new A.aZ(58628,"MaterialIcons",null,!1)
D.bzy=x([],y.b)
D.a24=new B.tE("manual","Manual","Levantas quando quiseres, com o bot\xe3o Levantar",0,"manual")
D.a25=new B.tE("daily","Autom\xe1tico \xb7 di\xe1rio","A Stripe envia o saldo dispon\xedvel todos os dias",1,"daily")
D.bMC=new B.tE("weekly","Autom\xe1tico \xb7 semanal","Todas as sextas-feiras",2,"weekly")
D.bMB=new B.tE("monthly","Autom\xe1tico \xb7 mensal","No dia 1 de cada m\xeas",3,"monthly")
D.WC=x([D.a24,D.a25,D.bMC,D.bMB],A.w("r<tE>"))
D.aHk=new A.lL("Pagamentos","O que recebeste e o que est\xe1 para chegar.",null)
D.bKO=new A.T(C.ao,D.aHk,null)
D.azY=new H.DO("Lucros e clientes",!0,B.dJH(),null)
D.bCA=x([D.azY],y.p)
D.bUi=new A.cc("Exportar",null,D.bCA,16,null)
D.bLj=new A.T(C.bO,D.bUi,null)
D.bRE=new A.Z(C.hB,"Acompanha o estado em Pagamentos \u203a Levantamentos.")
D.cmd=new B.aHN(null)
D.bxS=x([D.cmd],y.p)
D.bUj=new A.cc("A caminho",null,D.bxS,16,null)
D.cp_=new B.aQM(null)
D.bxT=x([D.cp_],y.p)
D.bUm=new A.cc("Por cobrar",null,D.bxT,16,null)
D.bUp=new A.ME("Como funciona",null,null)
D.chz=new A.D("N\xe3o foi poss\xedvel levantar. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bYG=new A.bF(D.chz,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c3s=new A.Q(!0,C.z,null,null,null,null,36,C.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbs=new A.D("Dispon\xedvel para receber",null,C.hh,null,null,null,null,null,null,null,null)
D.cdV=new A.D("Levantar saldo",null,null,null,null,null,null,null,null,null,null)
D.cei=new A.D("Modo de levantamento",null,null,null,null,null,null,null,null,null,null)
D.cf6=new A.D("Levantar",null,null,null,null,null,null,null,null,null,null)
D.cnn=new B.aK7(null)
D.cnR=new B.rz("Ainda n\xe3o fizeste nenhum levantamento.",null,null,null)
D.cnS=new B.rz("Nada a caminho","Os pagamentos aparecem aqui quando os clientes pagam.",null,null)
D.co4=new B.Zl(N.E_,"Sem custos de levantamento",null)
D.co5=new B.Zl(C.hB,"Chega em 1 a 3 dias \xfateis",null)
D.cow=new B.Zp(1,C.eU,"Os clientes pagam na app","O sinal e o restante entram no teu saldo, j\xe1 sem a taxa de servi\xe7o.",null)
D.coD=new B.Zp(2,G.nV,"Levantas para o IBAN","Um toque em Levantar e o dinheiro chega em 1 a 3 dias \xfateis.",null)
D.coL=new B.Zp(0,P.OL,"Confirma os teus dados","Identidade, morada e IBAN \u2014 pedidos pela Stripe, cerca de 5 minutos.",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYV","cUv",()=>A.ey(new B.cMi(),null,!1,null,null,y.L))
x($,"dVW","dl0",()=>C.bP.$1$1(new B.cG1(),y.i))})()};
(a=>{a["jZ6erWpPn405oVUUrEOsTzU0Q5Y="]=a.current})($__dart_deferred_initializers__);