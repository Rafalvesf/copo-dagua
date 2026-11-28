((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aUs(d){return C.dF8(d)},
dF8(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aUs=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.T().b
j===$&&A.b()
x=7
return A.d(j.R("platform_settings").cj(0).X("id",1).dP(0),$async$aUs)
case 7:s=a5
j=A.aL(J.i(s,"cancellation_penalty_days"))
i=j==null?null:B.k.F(j)
d=i==null?30:i
j=A.aL(J.i(s,"deposit_refund_window_hours"))
h=j==null?null:B.k.F(j)
a0=h==null?48:h
u=2
x=6
break
case 4:u=3
a1=t.pop()
x=6
break
case 3:x=2
break
case 6:r=!0
q=null
p=!1
u=9
j=$.T().b
j===$&&A.b()
x=12
return A.d(j.R("bookings").az(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").X("id",a3).ds(),$async$aUs)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.dn(n)?null:J.fu(n)
else f=n
m=f
j=y.Y.a(m)
j=A.dX(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.aq(j==null?B.am:j)
while(j.t()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.dH(A.a2(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.awE(q,a0)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUs,w)},
awE:function awE(d,e){this.b=d
this.e=e},
al5(d,e){return C.dGA(d,e)},
dGA(d,e){var x=0,w=A.n(y.p),v,u=2,t=[],s,r,q,p,o,n,m
var $async$al5=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.T().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aS("booking_cancel_state",A.S(["p_booking_id",d],y.R,q),q),$async$al5)
case 7:s=g
if(y.f.b(s)){r=A.aL(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.dH(A.q(q==null?"":q))
q=q==null?null:q.e0()
v=new C.a0q(r,q)
x=1
break}u=2
x=6
break
case 4:u=3
m=t.pop()
x=6
break
case 3:x=2
break
case 6:x=8
return A.d(C.aUs(d),$async$al5)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0q(q,r?null:n.e0().e9(A.e6(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$al5,w)},
db8(d){return F.Xe[A.ic(d)-1]+", "+A.aK(d)+" "+B.c_[A.ax(d)-1]+" \xe0s "+B.f.aW(B.j.k(A.hM(d)),2,"0")+":"+B.f.aW(B.j.k(A.hv(d)),2,"0")},
d7p(d,e,f,g,h,i,j){return new C.BQ(i,h,e,j,g,f,d,null)},
a0q:function a0q(d,e){this.a=d
this.b=e},
BQ:function BQ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aDr:function aDr(d){this.d=d
this.c=this.a=null},
bM9:function bM9(d){this.a=d},
bMa:function bMa(d,e){this.a=d
this.b=e},
bMb:function bMb(d,e){this.a=d
this.b=e},
bMc:function bMc(d){this.a=d},
afT:function afT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aNT:function aNT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D
J=c[1]
A=c[0]
B=c[2]
E=c[240]
F=c[411]
G=c[227]
C=a.updateHolder(c[75],C)
D=c[410]
C.awE.prototype={}
C.a0q.prototype={}
C.BQ.prototype={
P(){return new C.aDr(new A.aJ(B.ap,$.ad()))}}
C.aDr.prototype={
m(){var x=this.d
x.Z$=$.ad()
x.W$=0
this.a6()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ac(Date.now(),0,!1).eK(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.db8(h)+"). Se cancelares, o cliente recebe os "+A.aQ(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aQ(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.db8(h)+", recebes o sinal todo de volta."
x="O sinal ainda \xe9 devolvido"}else{w="Se cancelares, "+e.f+" \xe9 avisado e a reserva fica sem efeito."
x="Ainda n\xe3o pagaste nada"}h=!a0
v=!h||a1?B.fj:B.fH
if(a0)u="Se n\xe3o conseguires mesmo fazer o evento, fala com a equipa \xc0 Nossa!."
else{e=l.a
if(e.e)u="O cliente \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
else{g=i>0&&f&&g?"Depois dessa hora, o sinal deixa de ser devolvido. Esta a\xe7\xe3o n\xe3o pode ser desfeita.":e.f+" \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
u=g}}g=A.a([],y.L)
e=i>0
if(e){d=l.a.e?"Sinal pago pelo cliente":"Sinal pago"
g.push(new A.a3(d,A.aQ(i,!0)))}if(l.a.e&&e)g.push(new A.a3("Devolvido ao cliente",A.aQ(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new A.a3("Resto ("+A.aQ(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.aw(a2,k,y.w).w
t=l.a
s=y.D
t=A.P(A.a([A.a4(A.B(A.a([A.h(t.c,k,k,k,k,B.bl,k,k,k),B.b0,A.h(t.d,k,k,k,k,B.R,k,k,k)],s),B.G,B.i,B.m,0,B.v),1),B.ak,new C.aNT(B.ew,"Fechar",new C.bM9(a2),k)],s),B.w,B.i,B.m,0,k,k)
r=A.a([A.qj(A.P(A.a([A.A(k,k,B.r,k,k,new A.M(A.ZT(v),k,k,k,k,k,B.ax),k,8,B.dL,k,k,k,8),B.ak,A.a4(A.B(A.a([A.h(x,k,k,k,k,B.aj,k,k,k),B.b0,A.h(w,k,k,k,k,B.cy,k,k,k)],s),B.G,B.i,B.m,0,B.v),1)],s),B.G,B.i,B.m,0,k,k),B.t,E.jA,16,v)],s)
if(g.length!==0&&h){q=A.X(22)
p=A.a([],s)
for(o=0;n=g.length,o<n;++o){n=o===n-1?k:B.kg
m=g[o]
p.push(A.A(k,A.P(A.a([new A.bQ(1,B.av,A.h(m.a,k,k,k,k,B.R,k,k,k),k),A.h(m.b,k,k,k,k,B.bL,k,k,k)],s),B.w,B.i,B.m,0,k,k),B.r,k,k,new A.M(k,k,n,k,k,k,B.y),k,48,k,k,k,k,k))}g=A.a([B.a1,D.ccz,B.X,A.A(k,A.B(p,B.w,B.i,B.m,0,B.v),B.r,k,k,new A.M(B.aa,k,k,q,k,k,B.y),k,k,k,B.dy,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.X,A.P(A.a([D.aAf,A.h(A.aQ(a1?0:i,!0),k,k,k,k,B.c4,k,k,k)],s),B.eQ,B.i,B.m,0,B.aL,k)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.b8,k,k,k)
q=A.X(26)
B.e.n(r,A.a([B.a1,e,B.X,A.A(B.bh,A.cC(k,B.a9,!1,k,!0,B.z,k,A.cI(),l.d,k,k,k,k,k,2,A.iR(k,B.bH,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.tj,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a0,!0,k,!0,k,!1,k,B.aG,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.au,k,k,k,k,k,k,k,k,k,k,k,B.ff,!0,B.at,k,B.b1,k,k,k,k),B.r,k,k,new A.M(B.aa,k,k,q,k,k,B.y),k,52,k,B.i0,k,k,k)],s))}r.push(B.a1)
r.push(A.h(u,k,k,k,k,B.cy,k,k,k))
h=A.dO(A.B(r,B.I,B.i,B.m,0,B.v),B.z,k,B.e2,k,k,B.a2)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a4(new C.afT(g,!0,a0?new C.bMa(l,a2):new C.bMb(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bC(!0,new A.Q(new A.a0(0,0,0,d.f.d),A.B(A.a([new A.Q(B.kv,t,k),new A.di(1,B.bd,h,k),new A.Q(G.v_,A.P(A.a([g,B.ae,A.a4(new C.afT(e,!1,new C.bMc(a2),k),1)],s),B.w,B.i,B.m,0,k,k),k)],s),B.I,B.i,B.K,0,B.v),k),k,B.Z,!1)}}
C.afT.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fT(w,w,B.t,w,w,w,w,w,w,B.A,w,w,B.iF,w,B.ad,B.cd,w,w,B.dE,w)
x=A.hs(A.h(u,2,w,w,w,w,B.a6,w,w),v,x)
v=x}else{x=A.cp(B.A,w,w,B.t,w,B.iF,B.ad,w,w,B.dE)
x=A.bF(A.h(u,2,w,w,w,w,B.a6,w,w),v,x)
v=x}return A.aI(v,52,w)}}
C.aNT.prototype={
u(d){var x=null
return A.b9(x,!0,x,A.db(x,A.A(B.L,A.b2(this.c,B.t,x,x,20),B.r,x,x,B.ck,x,44,x,x,x,x,44),B.a0,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.b_),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
var z=a.updateTypes([])
C.bM9.prototype={
$0(){return A.an(this.a,!1).bB()},
$S:0}
C.bMa.prototype={
$0(){A.an(this.b,!1).bB()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bMb.prototype={
$0(){return A.an(this.b,!1).ak(B.f.C(this.a.d.a.a))},
$S:0}
C.bMc.prototype={
$0(){return A.an(this.a,!1).bB()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.K,[C.awE,C.a0q])
w(C.BQ,A.G)
w(C.aDr,A.a_)
x(A.bR,[C.bM9,C.bMa,C.bMb,C.bMc])
x(A.I,[C.afT,C.aNT])})()
A.bp(b.typeUniverse,JSON.parse('{"BQ":{"G":[],"e":[],"f":[]},"aDr":{"a_":["BQ"]},"afT":{"I":[],"e":[],"f":[]},"aNT":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{p:x("a0q"),L:x("r<+(c,c)>"),D:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dg"),N:x("awE"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a5<@,@>?")}})();(function constants(){D.chG=new A.C("Recebes de volta",null,B.R,null,null,null,null,null,null,null,null)
D.aAf=new A.bQ(1,B.av,D.chG,null)
D.ccz=new A.C("AS CONTAS",null,B.b8,null,null,null,null,null,null,null,null)})()};
(a=>{a["Z7m6dBdt4bs+GNZqzWIGrApyo48="]=a.current})($__dart_deferred_initializers__);