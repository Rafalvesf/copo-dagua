((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aUz(d){return C.dIm(d)},
dIm(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aUz=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.P().b
j===$&&A.b()
x=7
return A.d(j.P("platform_settings").cm(0).V("id",1).dQ(0),$async$aUz)
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
return A.d(j.P("bookings").ai(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").V("id",a3).ck(),$async$aUz)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.di(n)?null:J.fk(n)
else f=n
m=f
j=y.Y.a(m)
j=A.dW(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.ap(j==null?B.ak:j)
while(j.t()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.d4(A.a_(e==null?"":e))
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
ala(d,e){return C.dJP(d,e)},
dJP(d,e){var x=0,w=A.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ala=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("booking_cancel_state",A.R(["p_booking_id",d],y.R,q),q),$async$ala)
case 7:s=g
if(y.f.b(s)){r=A.aF(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.d4(A.q(q==null?"":q))
q=q==null?null:q.dM()
v=new C.a0D(r,q)
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
return A.d(C.aUz(d),$async$ala)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0D(q,r?null:n.dM().el(A.ec(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ala,w)},
dea(d){return F.WJ[A.fH(d)-1]+", "+A.ay(d)+" "+B.bg[A.an(d)-1]+" \xe0s "+B.f.aV(B.j.k(A.ic(d)),2,"0")+":"+B.f.aV(B.j.k(A.i_(d)),2,"0")},
daq(d,e,f,g,h,i,j,k,l){return new C.BR(k,j,g,l,i,h,f,e,d,null)},
a0D:function a0D(d,e){this.a=d
this.b=e},
BR:function BR(d,e,f,g,h,i,j,k,l,m){var _=this
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
bN3:function bN3(d){this.a=d},
bN4:function bN4(d,e){this.a=d
this.b=e},
bN5:function bN5(d,e){this.a=d
this.b=e},
bN6:function bN6(d,e){this.a=d
this.b=e},
bN7:function bN7(d,e){this.a=d
this.b=e},
bN8:function bN8(d){this.a=d},
ad0:function ad0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ag3:function ag3(d,e,f,g){var _=this
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
E=c[244]
F=c[415]
G=c[229]
C=a.updateHolder(c[75],C)
D=c[414]
H=c[245]
C.awO.prototype={}
C.a0D.prototype={}
C.BR.prototype={
R(){return new C.aDw(new A.aE(B.aj,$.aa()))}}
C.aDw.prototype={
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ac(Date.now(),0,!1).f0(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.dea(h)+"). Se cancelares, o cliente recebe os "+A.aK(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aK(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.dea(h)+", recebes o sinal todo de volta."
x="O sinal ainda \xe9 devolvido"}else{w="Se cancelares, "+e.f+" \xe9 avisado e a reserva fica sem efeito."
x="Ainda n\xe3o pagaste nada"}h=!a0
v=!h||a1?B.f6:B.f5
if(a0)u="Se n\xe3o conseguires mesmo fazer o evento, fala com a equipa \xc0 Nossa!."
else{e=l.a
if(e.e)u="O cliente \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
else{g=i>0&&f&&g?"Depois dessa hora, o sinal deixa de ser devolvido. Esta a\xe7\xe3o n\xe3o pode ser desfeita.":e.f+" \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
u=g}}g=A.a([],y.L)
e=i>0
if(e){d=l.a.e?"Sinal pago pelo cliente":"Sinal pago"
g.push(new A.Z(d,A.aK(i,!0)))}if(l.a.e&&e)g.push(new A.Z("Devolvido ao cliente",A.aK(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new A.Z("Resto ("+A.aK(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.aO(a2,k,y.w).w
t=l.a
s=y.p
t=A.O(A.a([A.a6(A.A(A.a([A.h(t.c,k,k,k,k,B.bl,k,k,k),B.aU,A.h(t.d,k,k,k,k,B.L,k,k,k)],s),B.F,B.h,B.l),1),B.ag,new C.aNU(B.el,"Fechar",new C.bN3(a2),k)],s),B.v,B.h,B.l,0,k)
r=A.a([A.pb(A.O(A.a([A.B(k,k,B.r,k,k,new A.K(A.HL(v),k,k,k,k,k,B.as),k,8,B.dp,k,k,k,8),B.ag,A.a6(A.A(A.a([A.h(x,k,k,k,k,B.a9,k,k,k),B.aU,A.h(w,k,k,k,k,B.bZ,k,k,k)],s),B.F,B.h,B.l),1)],s),B.F,B.h,B.l,0,k),B.t,E.i1,16,v)],s)
q=l.a
if(q.e)q=q.y!=null||q.z!=null
else q=!1
if(q){q=A.W(22)
p=A.a([],s)
if(l.a.y!=null)p.push(new C.ad0("Propor outro dia","O sinal fica para o dia novo",new C.bN4(l,a2),k))
o=l.a
if(o.y!=null&&o.z!=null)p.push(B.lr)
if(l.a.z!=null)p.push(new C.ad0("Pedir altera\xe7\xe3o","Pessoas, hora ou o que est\xe1 inclu\xeddo",new C.bN5(l,a2),k))
B.e.n(r,A.a([B.a0,D.c7K,B.Q,A.B(k,A.A(p,B.v,B.h,B.l),B.r,k,k,new A.K(B.a5,k,k,q,k,k,B.x),k,k,k,B.cG,k,k,k)],s))}if(g.length!==0&&h){q=A.W(22)
p=A.a([],s)
for(n=0;o=g.length,n<o;++n){o=n===o-1?k:B.hn
m=g[n]
p.push(A.B(k,A.O(A.a([new A.bQ(1,B.au,A.h(m.a,k,k,k,k,B.L,k,k,k),k),A.h(m.b,k,k,k,k,B.bB,k,k,k)],s),B.v,B.h,B.l,0,k),B.r,k,k,new A.K(k,k,o,k,k,k,B.x),k,48,k,k,k,k,k))}g=A.a([B.a0,D.cbn,B.Q,A.B(k,A.A(p,B.v,B.h,B.l),B.r,k,k,new A.K(B.a5,k,k,q,k,k,B.x),k,k,k,B.cG,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.Q,A.O(A.a([D.azn,A.h(A.aK(a1?0:i,!0),k,k,k,k,B.c1,k,k,k)],s),B.ee,B.h,B.l,0,B.aI)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aJ,k,k,k)
q=A.W(26)
B.e.n(r,A.a([B.a0,e,B.Q,A.B(B.be,A.cs(k,B.a6,!1,k,!0,B.y,k,A.ct(),l.d,k,k,k,k,k,2,A.iV(k,B.bs,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.mp,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.W,!0,k,!0,k,!1,k,B.aC,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ao,k,k,k,k,k,k,k,k,k,k,k,B.fj,!0,B.at,k,B.b_,k,k,k,k),B.r,k,k,new A.K(B.a5,k,k,q,k,k,B.x),k,52,k,B.fT,k,k,k)],s))}r.push(B.a0)
r.push(A.h(u,k,k,k,k,B.bZ,k,k,k))
h=A.dT(A.A(r,B.E,B.h,B.l),B.y,k,B.eh,k,B.av)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a6(new C.ag3(g,!0,a0?new C.bN6(l,a2):new C.bN7(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bD(!0,new A.T(new A.a3(0,0,0,d.f.d),A.A(A.a([new A.T(B.jF,t,k),new A.df(1,B.b9,h,k),new A.T(G.qm,A.O(A.a([g,B.ad,A.a6(new C.ag3(e,!1,new C.bN8(a2),k),1)],s),B.v,B.h,B.l,0,k),k)],s),B.E,B.h,B.J),k),k,B.Z,!1)}}
C.ad0.prototype={
u(d){var x=null,w=y.p
return A.eR(!1,x,!0,new A.e6(H.tW,A.O(A.a([A.a6(A.A(A.a([A.h(this.c,x,x,x,x,B.a9,x,x,x),A.h(this.d,x,x,x,x,B.L,x,x,x)],w),B.F,B.h,B.J),1),D.aDt],w),B.v,B.h,B.l,0,x),x),x,!0,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,x)}}
C.ag3.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fP(w,w,B.t,w,w,w,w,w,w,B.z,w,w,B.i0,w,B.ac,B.c8,w,w,B.d0,w)
x=A.hh(A.h(u,2,w,w,w,w,B.a4,w,w),v,x)
v=x}else{x=A.ck(B.z,w,w,B.t,w,B.i0,B.ac,w,w,B.d0)
x=A.bE(A.h(u,2,w,w,w,w,B.a4,w,w),v,x)
v=x}return A.aH(v,52,w)}}
C.aNU.prototype={
u(d){var x=null
return A.ba(x,!0,x,A.cP(x,A.B(B.K,A.b5(this.c,B.t,x,x,20),B.r,x,x,B.cc,x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.aN),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x)}}
var z=a.updateTypes([])
C.bN3.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.bN4.prototype={
$0(){A.am(this.b,!1).bp()
this.a.a.y.$0()},
$S:0}
C.bN5.prototype={
$0(){A.am(this.b,!1).bp()
this.a.a.z.$0()},
$S:0}
C.bN6.prototype={
$0(){A.am(this.b,!1).bp()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bN7.prototype={
$0(){return A.am(this.b,!1).ae(B.f.B(this.a.d.a.a))},
$S:0}
C.bN8.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[C.awO,C.a0D])
w(C.BR,A.G)
w(C.aDw,A.Y)
x(A.bO,[C.bN3,C.bN4,C.bN5,C.bN6,C.bN7,C.bN8])
x(A.M,[C.ad0,C.ag3,C.aNU])})()
A.bt(b.typeUniverse,JSON.parse('{"BR":{"G":[],"e":[],"f":[]},"aDw":{"Y":["BR"]},"ad0":{"M":[],"e":[],"f":[]},"ag3":{"M":[],"e":[],"f":[]},"aNU":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("a0D"),L:x("r<+(c,c)>"),p:x("r<e>"),j:x("t<@>"),f:x("a4<@,@>"),w:x("dh"),N:x("awO"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a4<@,@>?")}})();(function constants(){D.cgC=new A.D("Recebes de volta",null,B.L,null,null,null,null,null,null,null,null)
D.azn=new A.bQ(1,B.au,D.cgC,null)
D.aDt=new A.b7(B.P2,null,B.V,null,null,null)
D.c7K=new A.D("O QUE PODES FAZER",null,B.aJ,null,null,null,null,null,null,null,null)
D.cbn=new A.D("AS CONTAS",null,B.aJ,null,null,null,null,null,null,null,null)})()};
(a=>{a["t6hTK4c/eijJRHgM/yU6ohb9zLg="]=a.current})($__dart_deferred_initializers__);