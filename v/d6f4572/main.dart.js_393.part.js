((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aUE(d){return C.dGm(d)},
dGm(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aUE=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.S().b
j===$&&A.b()
x=7
return A.d(j.R("platform_settings").cj(0).W("id",1).dP(0),$async$aUE)
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
j=$.S().b
j===$&&A.b()
x=12
return A.d(j.R("bookings").an(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").W("id",a3).d0(),$async$aUE)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.dp(n)?null:J.ft(n)
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
k=A.dq(A.a1(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.awO(q,a0)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUE,w)},
awO:function awO(d,e){this.b=d
this.e=e},
ald(d,e){return C.dHO(d,e)},
dHO(d,e){var x=0,w=A.n(y.p),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ald=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.S().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aM("booking_cancel_state",A.T(["p_booking_id",d],y.R,q),q),$async$ald)
case 7:s=g
if(y.f.b(s)){r=A.aL(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.dq(A.q(q==null?"":q))
q=q==null?null:q.e0()
v=new C.a0A(r,q)
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
return A.d(C.aUE(d),$async$ald)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0A(q,r?null:n.e0().e5(A.e3(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ald,w)},
dcj(d){return F.Xg[A.hi(d)-1]+", "+A.aI(d)+" "+B.bO[A.ax(d)-1]+" \xe0s "+B.f.aY(B.j.k(A.ic(d)),2,"0")+":"+B.f.aY(B.j.k(A.hY(d)),2,"0")},
d8A(d,e,f,g,h,i,j){return new C.BT(i,h,e,j,g,f,d,null)},
a0A:function a0A(d,e){this.a=d
this.b=e},
BT:function BT(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aDB:function aDB(d){this.d=d
this.c=this.a=null},
bMr:function bMr(d){this.a=d},
bMs:function bMs(d,e){this.a=d
this.b=e},
bMt:function bMt(d,e){this.a=d
this.b=e},
bMu:function bMu(d){this.a=d},
ag0:function ag0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aO3:function aO3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D
J=c[1]
A=c[0]
B=c[2]
E=c[246]
F=c[413]
G=c[230]
C=a.updateHolder(c[75],C)
D=c[412]
C.awO.prototype={}
C.a0A.prototype={}
C.BT.prototype={
P(){return new C.aDB(new A.aE(B.al,$.aa()))}}
C.aDB.prototype={
m(){var x=this.d
x.Y$=$.aa()
x.V$=0
this.a6()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ad(Date.now(),0,!1).eA(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.dcj(h)+"). Se cancelares, o cliente recebe os "+A.aM(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aM(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.dcj(h)+", recebes o sinal todo de volta."
x="O sinal ainda \xe9 devolvido"}else{w="Se cancelares, "+e.f+" \xe9 avisado e a reserva fica sem efeito."
x="Ainda n\xe3o pagaste nada"}h=!a0
v=!h||a1?B.fk:B.fj
if(a0)u="Se n\xe3o conseguires mesmo fazer o evento, fala com a equipa \xc0 Nossa!."
else{e=l.a
if(e.e)u="O cliente \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
else{g=i>0&&f&&g?"Depois dessa hora, o sinal deixa de ser devolvido. Esta a\xe7\xe3o n\xe3o pode ser desfeita.":e.f+" \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
u=g}}g=A.a([],y.L)
e=i>0
if(e){d=l.a.e?"Sinal pago pelo cliente":"Sinal pago"
g.push(new A.a3(d,A.aM(i,!0)))}if(l.a.e&&e)g.push(new A.a3("Devolvido ao cliente",A.aM(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new A.a3("Resto ("+A.aM(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.aw(a2,k,y.w).w
t=l.a
s=y.D
t=A.N(A.a([A.a4(A.A(A.a([A.h(t.c,k,k,k,k,B.bk,k,k,k),B.b1,A.h(t.d,k,k,k,k,B.P,k,k,k)],s),B.H,B.h,B.l,0,B.u),1),B.ah,new C.aO3(B.ei,"Fechar",new C.bMr(a2),k)],s),B.w,B.h,B.l,0,k,k)
r=A.a([A.ql(A.N(A.a([A.B(k,k,B.r,k,k,new A.M(A.PT(v),k,k,k,k,k,B.av),k,8,B.dy,k,k,k,8),B.ah,A.a4(A.A(A.a([A.h(x,k,k,k,k,B.ae,k,k,k),B.b1,A.h(w,k,k,k,k,B.cf,k,k,k)],s),B.H,B.h,B.l,0,B.u),1)],s),B.H,B.h,B.l,0,k,k),B.t,E.iK,16,v)],s)
if(g.length!==0&&h){q=A.W(22)
p=A.a([],s)
for(o=0;n=g.length,o<n;++o){n=o===n-1?k:B.jo
m=g[o]
p.push(A.B(k,A.N(A.a([new A.bP(1,B.aw,A.h(m.a,k,k,k,k,B.P,k,k,k),k),A.h(m.b,k,k,k,k,B.bG,k,k,k)],s),B.w,B.h,B.l,0,k,k),B.r,k,k,new A.M(k,k,n,k,k,k,B.y),k,48,k,k,k,k,k))}g=A.a([B.a1,D.ccD,B.S,A.B(k,A.A(p,B.w,B.h,B.l,0,B.u),B.r,k,k,new A.M(B.a7,k,k,q,k,k,B.y),k,k,k,B.d2,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.S,A.N(A.a([D.aA9,A.h(A.aM(a1?0:i,!0),k,k,k,k,B.c5,k,k,k)],s),B.eS,B.h,B.l,0,B.aL,k)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aO,k,k,k)
q=A.W(26)
B.e.n(r,A.a([B.a1,e,B.S,A.B(B.bg,A.cr(k,B.a8,!1,k,!0,B.z,k,A.cw(),l.d,k,k,k,k,k,2,A.iI(k,B.bw,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.my,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.Z,!0,k,!0,k,!1,k,B.aD,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ar,k,k,k,k,k,k,k,k,k,k,k,B.ff,!0,B.aq,k,B.b2,k,k,k,k),B.r,k,k,new A.M(B.a7,k,k,q,k,k,B.y),k,52,k,B.fr,k,k,k)],s))}r.push(B.a1)
r.push(A.h(u,k,k,k,k,B.cf,k,k,k))
h=A.dQ(A.A(r,B.G,B.h,B.l,0,B.u),B.z,k,B.ed,k,k,B.a2)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a4(new C.ag0(g,!0,a0?new C.bMs(l,a2):new C.bMt(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bC(!0,new A.Q(new A.a0(0,0,0,d.f.d),A.A(A.a([new A.Q(B.jD,t,k),new A.de(1,B.bc,h,k),new A.Q(G.qz,A.N(A.a([g,B.ag,A.a4(new C.ag0(e,!1,new C.bMu(a2),k),1)],s),B.w,B.h,B.l,0,k,k),k)],s),B.G,B.h,B.K,0,B.u),k),k,B.a_,!1)}}
C.ag0.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fP(w,w,B.t,w,w,w,w,w,w,B.A,w,w,B.iJ,w,B.ad,B.c9,w,w,B.dh,w)
x=A.hf(A.h(u,2,w,w,w,w,B.a6,w,w),v,x)
v=x}else{x=A.cq(B.A,w,w,B.t,w,B.iJ,B.ad,w,w,B.dh)
x=A.bE(A.h(u,2,w,w,w,w,B.a6,w,w),v,x)
v=x}return A.aG(v,52,w)}}
C.aO3.prototype={
u(d){var x=null
return A.b8(x,!0,x,A.cV(x,A.B(B.L,A.b3(this.c,B.t,x,x,20),B.r,x,x,B.cg,x,44,x,x,x,x,44),B.Z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.aU),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
var z=a.updateTypes([])
C.bMr.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0}
C.bMs.prototype={
$0(){A.am(this.b,!1).bB()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bMt.prototype={
$0(){return A.am(this.b,!1).ad(B.f.C(this.a.d.a.a))},
$S:0}
C.bMu.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[C.awO,C.a0A])
w(C.BT,A.G)
w(C.aDB,A.Z)
x(A.bQ,[C.bMr,C.bMs,C.bMt,C.bMu])
x(A.H,[C.ag0,C.aO3])})()
A.bn(b.typeUniverse,JSON.parse('{"BT":{"G":[],"e":[],"f":[]},"aDB":{"Z":["BT"]},"ag0":{"H":[],"e":[],"f":[]},"aO3":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{p:x("a0A"),L:x("r<+(c,c)>"),D:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("df"),N:x("awO"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a5<@,@>?")}})();(function constants(){D.chT=new A.C("Recebes de volta",null,B.P,null,null,null,null,null,null,null,null)
D.aA9=new A.bP(1,B.aw,D.chT,null)
D.ccD=new A.C("AS CONTAS",null,B.aO,null,null,null,null,null,null,null,null)})()};
(a=>{a["sj0pZUL6Vxyd5RmsU1AdGdp6V4E="]=a.current})($__dart_deferred_initializers__);