((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aUz(d){return C.dI4(d)},
dI4(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aUz=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.P().b
j===$&&A.b()
x=7
return A.d(j.P("platform_settings").cl(0).V("id",1).dQ(0),$async$aUz)
case 7:s=a5
j=A.aF(J.i(s,"cancellation_penalty_days"))
i=j==null?null:B.k.F(j)
d=i==null?30:i
j=A.aF(J.i(s,"deposit_refund_window_hours"))
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
j=$.P().b
j===$&&A.b()
x=12
return A.d(j.P("bookings").aj(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").V("id",a3).cj(),$async$aUz)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.dn(n)?null:J.fl(n)
else f=n
m=f
j=y.Y.a(m)
j=A.dW(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.ar(j==null?B.ak:j)
while(j.t()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.d4(A.Z(e==null?"":e))
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
return A.m($async$aUz,w)},
awO:function awO(d,e){this.b=d
this.e=e},
alb(d,e){return C.dJx(d,e)},
dJx(d,e){var x=0,w=A.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m
var $async$alb=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("booking_cancel_state",A.R(["p_booking_id",d],y.R,q),q),$async$alb)
case 7:s=g
if(y.f.b(s)){r=A.aF(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.d4(A.q(q==null?"":q))
q=q==null?null:q.dM()
v=new C.a0C(r,q)
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
return A.d(C.aUz(d),$async$alb)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0C(q,r?null:n.dM().el(A.eb(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$alb,w)},
ddV(d){return F.WK[A.fG(d)-1]+", "+A.ay(d)+" "+B.bg[A.an(d)-1]+" \xe0s "+B.f.aV(B.j.k(A.ic(d)),2,"0")+":"+B.f.aV(B.j.k(A.hZ(d)),2,"0")},
dab(d,e,f,g,h,i,j,k,l){return new C.BQ(k,j,g,l,i,h,f,e,d,null)},
a0C:function a0C(d,e){this.a=d
this.b=e},
BQ:function BQ(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
aDw:function aDw(d){this.d=d
this.c=this.a=null},
bN6:function bN6(d){this.a=d},
bN7:function bN7(d,e){this.a=d
this.b=e},
bN8:function bN8(d,e){this.a=d
this.b=e},
bN9:function bN9(d,e){this.a=d
this.b=e},
bNa:function bNa(d,e){this.a=d
this.b=e},
bNb:function bNb(d){this.a=d},
ad1:function ad1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ag4:function ag4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aNU:function aNU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D,H
J=c[1]
A=c[0]
B=c[2]
E=c[245]
F=c[415]
G=c[230]
C=a.updateHolder(c[75],C)
D=c[414]
H=c[246]
C.awO.prototype={}
C.a0C.prototype={}
C.BQ.prototype={
R(){return new C.aDw(new A.aE(B.aj,$.aa()))}}
C.aDw.prototype={
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ac(Date.now(),0,!1).f5(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.ddV(h)+"). Se cancelares, o cliente recebe os "+A.aK(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aK(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.ddV(h)+", recebes o sinal todo de volta."
x="O sinal ainda \xe9 devolvido"}else{w="Se cancelares, "+e.f+" \xe9 avisado e a reserva fica sem efeito."
x="Ainda n\xe3o pagaste nada"}h=!a0
v=!h||a1?B.f5:B.f4
if(a0)u="Se n\xe3o conseguires mesmo fazer o evento, fala com a equipa \xc0 Nossa!."
else{e=l.a
if(e.e)u="O cliente \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
else{g=i>0&&f&&g?"Depois dessa hora, o sinal deixa de ser devolvido. Esta a\xe7\xe3o n\xe3o pode ser desfeita.":e.f+" \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
u=g}}g=A.a([],y.L)
e=i>0
if(e){d=l.a.e?"Sinal pago pelo cliente":"Sinal pago"
g.push(new A.a0(d,A.aK(i,!0)))}if(l.a.e&&e)g.push(new A.a0("Devolvido ao cliente",A.aK(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new A.a0("Resto ("+A.aK(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.aO(a2,k,y.w).w
t=l.a
s=y.p
t=A.O(A.a([A.a5(A.B(A.a([A.h(t.c,k,k,k,k,B.bm,k,k,k),B.aU,A.h(t.d,k,k,k,k,B.M,k,k,k)],s),B.G,B.h,B.l),1),B.af,new C.aNU(B.ek,"Fechar",new C.bN6(a2),k)],s),B.v,B.h,B.l,0,k)
r=A.a([A.p9(A.O(A.a([A.A(k,k,B.r,k,k,new A.K(A.HJ(v),k,k,k,k,k,B.as),k,8,B.dp,k,k,k,8),B.af,A.a5(A.B(A.a([A.h(x,k,k,k,k,B.a9,k,k,k),B.aU,A.h(w,k,k,k,k,B.bZ,k,k,k)],s),B.G,B.h,B.l),1)],s),B.G,B.h,B.l,0,k),B.t,E.i1,16,v)],s)
q=l.a
if(q.e)q=q.y!=null||q.z!=null
else q=!1
if(q){q=A.W(22)
p=A.a([],s)
if(l.a.y!=null)p.push(new C.ad1("Propor outro dia","O sinal fica para o dia novo",new C.bN7(l,a2),k))
o=l.a
if(o.y!=null&&o.z!=null)p.push(B.lq)
if(l.a.z!=null)p.push(new C.ad1("Pedir altera\xe7\xe3o","Pessoas, hora ou o que est\xe1 inclu\xeddo",new C.bN8(l,a2),k))
B.e.n(r,A.a([B.a0,D.c7F,B.Q,A.A(k,A.B(p,B.v,B.h,B.l),B.r,k,k,new A.K(B.a5,k,k,q,k,k,B.x),k,k,k,B.cG,k,k,k)],s))}if(g.length!==0&&h){q=A.W(22)
p=A.a([],s)
for(n=0;o=g.length,n<o;++n){o=n===o-1?k:B.hm
m=g[n]
p.push(A.A(k,A.O(A.a([new A.bQ(1,B.au,A.h(m.a,k,k,k,k,B.M,k,k,k),k),A.h(m.b,k,k,k,k,B.bB,k,k,k)],s),B.v,B.h,B.l,0,k),B.r,k,k,new A.K(k,k,o,k,k,k,B.x),k,48,k,k,k,k,k))}g=A.a([B.a0,D.cbj,B.Q,A.A(k,A.B(p,B.v,B.h,B.l),B.r,k,k,new A.K(B.a5,k,k,q,k,k,B.x),k,k,k,B.cG,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.Q,A.O(A.a([D.azk,A.h(A.aK(a1?0:i,!0),k,k,k,k,B.c1,k,k,k)],s),B.ee,B.h,B.l,0,B.aI)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aK,k,k,k)
q=A.W(26)
B.e.n(r,A.a([B.a0,e,B.Q,A.A(B.be,A.cr(k,B.a6,!1,k,!0,B.y,k,A.cs(),l.d,k,k,k,k,k,2,A.iV(k,B.bs,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.mn,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.W,!0,k,!0,k,!1,k,B.aC,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ao,k,k,k,k,k,k,k,k,k,k,k,B.fi,!0,B.at,k,B.b_,k,k,k,k),B.r,k,k,new A.K(B.a5,k,k,q,k,k,B.x),k,52,k,B.fT,k,k,k)],s))}r.push(B.a0)
r.push(A.h(u,k,k,k,k,B.bZ,k,k,k))
h=A.dT(A.B(r,B.E,B.h,B.l),B.y,k,B.eh,k,B.av)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a5(new C.ag4(g,!0,a0?new C.bN9(l,a2):new C.bNa(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bD(!0,new A.S(new A.a3(0,0,0,d.f.d),A.B(A.a([new A.S(B.jG,t,k),new A.dd(1,B.b4,h,k),new A.S(G.qm,A.O(A.a([g,B.ae,A.a5(new C.ag4(e,!1,new C.bNb(a2),k),1)],s),B.v,B.h,B.l,0,k),k)],s),B.E,B.h,B.J),k),k,B.Z,!1)}}
C.ad1.prototype={
u(d){var x=null,w=y.p
return A.eP(!1,x,!0,new A.e5(H.tV,A.O(A.a([A.a5(A.B(A.a([A.h(this.c,x,x,x,x,B.a9,x,x,x),A.h(this.d,x,x,x,x,B.M,x,x,x)],w),B.G,B.h,B.J),1),D.aDl],w),B.v,B.h,B.l,0,x),x),x,!0,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,x)}}
C.ag4.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fP(w,w,B.t,w,w,w,w,w,w,B.z,w,w,B.i0,w,B.ac,B.c8,w,w,B.d0,w)
x=A.hh(A.h(u,2,w,w,w,w,B.a4,w,w),v,x)
v=x}else{x=A.cj(B.z,w,w,B.t,w,B.i0,B.ac,w,w,B.d0)
x=A.bE(A.h(u,2,w,w,w,w,B.a4,w,w),v,x)
v=x}return A.aH(v,52,w)}}
C.aNU.prototype={
u(d){var x=null
return A.ba(x,!0,x,A.cP(x,A.A(B.K,A.b5(this.c,B.t,x,x,20),B.r,x,x,B.cc,x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.aN),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x)}}
var z=a.updateTypes([])
C.bN6.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.bN7.prototype={
$0(){A.am(this.b,!1).bp()
this.a.a.y.$0()},
$S:0}
C.bN8.prototype={
$0(){A.am(this.b,!1).bp()
this.a.a.z.$0()},
$S:0}
C.bN9.prototype={
$0(){A.am(this.b,!1).bp()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bNa.prototype={
$0(){return A.am(this.b,!1).ae(B.f.B(this.a.d.a.a))},
$S:0}
C.bNb.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[C.awO,C.a0C])
w(C.BQ,A.G)
w(C.aDw,A.Y)
x(A.bO,[C.bN6,C.bN7,C.bN8,C.bN9,C.bNa,C.bNb])
x(A.M,[C.ad1,C.ag4,C.aNU])})()
A.br(b.typeUniverse,JSON.parse('{"BQ":{"G":[],"e":[],"f":[]},"aDw":{"Y":["BQ"]},"ad1":{"M":[],"e":[],"f":[]},"ag4":{"M":[],"e":[],"f":[]},"aNU":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("a0C"),L:x("r<+(c,c)>"),p:x("r<e>"),j:x("t<@>"),f:x("a6<@,@>"),w:x("dh"),N:x("awO"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a6<@,@>?")}})();(function constants(){D.cgy=new A.D("Recebes de volta",null,B.M,null,null,null,null,null,null,null,null)
D.azk=new A.bQ(1,B.au,D.cgy,null)
D.aDl=new A.b7(B.P3,null,B.V,null,null,null)
D.c7F=new A.D("O QUE PODES FAZER",null,B.aK,null,null,null,null,null,null,null,null)
D.cbj=new A.D("AS CONTAS",null,B.aK,null,null,null,null,null,null,null,null)})()};
(a=>{a["za4B2mRPsGd7XoLXUHl3+D1odlc="]=a.current})($__dart_deferred_initializers__);