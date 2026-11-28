((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aUy(d){return C.dHw(d)},
dHw(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aUy=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.Q().b
j===$&&A.b()
x=7
return A.d(j.P("platform_settings").cl(0).V("id",1).dQ(0),$async$aUy)
case 7:s=a5
j=A.aG(J.i(s,"cancellation_penalty_days"))
i=j==null?null:B.k.F(j)
d=i==null?30:i
j=A.aG(J.i(s,"deposit_refund_window_hours"))
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
j=$.Q().b
j===$&&A.b()
x=12
return A.d(j.P("bookings").aj(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").V("id",a3).cj(),$async$aUy)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.dr(n)?null:J.fs(n)
else f=n
m=f
j=y.Y.a(m)
j=A.dX(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.ap(j==null?B.al:j)
while(j.t()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.d5(A.Z(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.awK(q,a0)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUy,w)},
awK:function awK(d,e){this.b=d
this.e=e},
alc(d,e){return C.dIY(d,e)},
dIY(d,e){var x=0,w=A.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m
var $async$alc=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("booking_cancel_state",A.R(["p_booking_id",d],y.R,q),q),$async$alc)
case 7:s=g
if(y.f.b(s)){r=A.aG(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.d5(A.q(q==null?"":q))
q=q==null?null:q.dP()
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
return A.d(C.aUy(d),$async$alc)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0D(q,r?null:n.dP().ek(A.ec(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$alc,w)},
ddp(d){return F.WS[A.fI(d)-1]+", "+A.az(d)+" "+B.bm[A.ao(d)-1]+" \xe0s "+B.f.aW(B.j.k(A.ib(d)),2,"0")+":"+B.f.aW(B.j.k(A.hX(d)),2,"0")},
d9H(d,e,f,g,h,i,j,k,l){return new C.BQ(k,j,g,l,i,h,f,e,d,null)},
a0D:function a0D(d,e){this.a=d
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
aDt:function aDt(d){this.d=d
this.c=this.a=null},
bMJ:function bMJ(d){this.a=d},
bMK:function bMK(d,e){this.a=d
this.b=e},
bML:function bML(d,e){this.a=d
this.b=e},
bMM:function bMM(d,e){this.a=d
this.b=e},
bMN:function bMN(d,e){this.a=d
this.b=e},
bMO:function bMO(d){this.a=d},
ad2:function ad2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ag5:function ag5(d,e,f,g){var _=this
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
E=c[250]
F=c[420]
G=c[235]
C=a.updateHolder(c[75],C)
D=c[419]
H=c[251]
C.awK.prototype={}
C.a0D.prototype={}
C.BQ.prototype={
R(){return new C.aDt(new A.aE(B.ak,$.aa()))}}
C.aDt.prototype={
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ac(Date.now(),0,!1).f5(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.ddp(h)+"). Se cancelares, o cliente recebe os "+A.aK(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aK(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.ddp(h)+", recebes o sinal todo de volta."
x="O sinal ainda \xe9 devolvido"}else{w="Se cancelares, "+e.f+" \xe9 avisado e a reserva fica sem efeito."
x="Ainda n\xe3o pagaste nada"}h=!a0
v=!h||a1?B.fj:B.fi
if(a0)u="Se n\xe3o conseguires mesmo fazer o evento, fala com a equipa \xc0 Nossa!."
else{e=l.a
if(e.e)u="O cliente \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
else{g=i>0&&f&&g?"Depois dessa hora, o sinal deixa de ser devolvido. Esta a\xe7\xe3o n\xe3o pode ser desfeita.":e.f+" \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
u=g}}g=A.a([],y.L)
e=i>0
if(e){d=l.a.e?"Sinal pago pelo cliente":"Sinal pago"
g.push(new A.a_(d,A.aK(i,!0)))}if(l.a.e&&e)g.push(new A.a_("Devolvido ao cliente",A.aK(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new A.a_("Resto ("+A.aK(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.aO(a2,k,y.w).w
t=l.a
s=y.p
t=A.O(A.a([A.a5(A.A(A.a([A.h(t.c,k,k,k,k,B.bj,k,k,k),B.aV,A.h(t.d,k,k,k,k,B.N,k,k,k)],s),B.G,B.h,B.l),1),B.ag,new C.aNU(B.ek,"Fechar",new C.bMJ(a2),k)],s),B.v,B.h,B.l,0,k)
r=A.a([A.qi(A.O(A.a([A.x(k,k,B.r,k,k,new A.I(A.PU(v),k,k,k,k,k,B.au),k,8,B.dC,k,k,k,8),B.ag,A.a5(A.A(A.a([A.h(x,k,k,k,k,B.aa,k,k,k),B.aV,A.h(w,k,k,k,k,B.c2,k,k,k)],s),B.G,B.h,B.l),1)],s),B.G,B.h,B.l,0,k),B.t,E.iK,16,v)],s)
q=l.a
if(q.e)q=q.y!=null||q.z!=null
else q=!1
if(q){q=A.W(22)
p=A.a([],s)
if(l.a.y!=null)p.push(new C.ad2("Propor outro dia","O sinal fica para o dia novo",new C.bMK(l,a2),k))
o=l.a
if(o.y!=null&&o.z!=null)p.push(B.ls)
if(l.a.z!=null)p.push(new C.ad2("Pedir altera\xe7\xe3o","Pessoas, hora ou o que est\xe1 inclu\xeddo",new C.bML(l,a2),k))
B.e.n(r,A.a([B.a0,D.c84,B.Q,A.x(k,A.A(p,B.v,B.h,B.l),B.r,k,k,new A.I(B.a6,k,k,q,k,k,B.x),k,k,k,B.cz,k,k,k)],s))}if(g.length!==0&&h){q=A.W(22)
p=A.a([],s)
for(n=0;o=g.length,n<o;++n){o=n===o-1?k:B.hq
m=g[n]
p.push(A.x(k,A.O(A.a([new A.bI(1,B.as,A.h(m.a,k,k,k,k,B.N,k,k,k),k),A.h(m.b,k,k,k,k,B.bD,k,k,k)],s),B.v,B.h,B.l,0,k),B.r,k,k,new A.I(k,k,o,k,k,k,B.x),k,48,k,k,k,k,k))}g=A.a([B.a0,D.cbM,B.Q,A.x(k,A.A(p,B.v,B.h,B.l),B.r,k,k,new A.I(B.a6,k,k,q,k,k,B.x),k,k,k,B.cz,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.Q,A.O(A.a([D.azq,A.h(A.aK(a1?0:i,!0),k,k,k,k,B.bV,k,k,k)],s),B.eT,B.h,B.l,0,B.aK)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aN,k,k,k)
q=A.W(26)
B.e.n(r,A.a([B.a0,e,B.Q,A.x(B.bf,A.cs(k,B.a7,!1,k,!0,B.y,k,A.ct(),l.d,k,k,k,k,k,2,A.iT(k,B.bt,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.mr,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.W,!0,k,!0,k,!1,k,B.aC,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.an,k,k,k,k,k,k,k,k,k,k,k,B.fe,!0,B.av,k,B.b_,k,k,k,k),B.r,k,k,new A.I(B.a6,k,k,q,k,k,B.x),k,52,k,B.fT,k,k,k)],s))}r.push(B.a0)
r.push(A.h(u,k,k,k,k,B.c2,k,k,k))
h=A.dU(A.A(r,B.F,B.h,B.l),B.y,k,B.eg,k,B.a1)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a5(new C.ag5(g,!0,a0?new C.bMM(l,a2):new C.bMN(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bD(!0,new A.S(new A.a3(0,0,0,d.f.d),A.A(A.a([new A.S(B.jD,t,k),new A.de(1,B.b8,h,k),new A.S(G.qm,A.O(A.a([g,B.af,A.a5(new C.ag5(e,!1,new C.bMO(a2),k),1)],s),B.v,B.h,B.l,0,k),k)],s),B.F,B.h,B.J),k),k,B.Z,!1)}}
C.ad2.prototype={
u(d){var x=null,w=y.p
return A.eL(!1,x,!0,new A.e6(H.tV,A.O(A.a([A.a5(A.A(A.a([A.h(this.c,x,x,x,x,B.aa,x,x,x),A.h(this.d,x,x,x,x,B.N,x,x,x)],w),B.G,B.h,B.J),1),D.aDo],w),B.v,B.h,B.l,0,x),x),x,!0,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,x)}}
C.ag5.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fF(w,w,B.t,w,w,w,w,w,w,B.z,w,w,B.i1,w,B.ac,B.c6,w,w,B.d0,w)
x=A.h5(A.h(u,2,w,w,w,w,B.a5,w,w),v,x)
v=x}else{x=A.cj(B.z,w,w,B.t,w,B.i1,B.ac,w,w,B.d0)
x=A.bE(A.h(u,2,w,w,w,w,B.a5,w,w),v,x)
v=x}return A.aH(v,52,w)}}
C.aNU.prototype={
u(d){var x=null
return A.ba(x,!0,x,A.cL(x,A.x(B.K,A.b6(this.c,B.t,x,x,20),B.r,x,x,B.cc,x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.aJ),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a4,x)}}
var z=a.updateTypes([])
C.bMJ.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.bMK.prototype={
$0(){A.am(this.b,!1).bp()
this.a.a.y.$0()},
$S:0}
C.bML.prototype={
$0(){A.am(this.b,!1).bp()
this.a.a.z.$0()},
$S:0}
C.bMM.prototype={
$0(){A.am(this.b,!1).bp()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bMN.prototype={
$0(){return A.am(this.b,!1).ae(B.f.B(this.a.d.a.a))},
$S:0}
C.bMO.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[C.awK,C.a0D])
w(C.BQ,A.G)
w(C.aDt,A.Y)
x(A.bP,[C.bMJ,C.bMK,C.bML,C.bMM,C.bMN,C.bMO])
x(A.L,[C.ad2,C.ag5,C.aNU])})()
A.bn(b.typeUniverse,JSON.parse('{"BQ":{"G":[],"e":[],"f":[]},"aDt":{"Y":["BQ"]},"ad2":{"L":[],"e":[],"f":[]},"ag5":{"L":[],"e":[],"f":[]},"aNU":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("a0D"),L:x("r<+(c,c)>"),p:x("r<e>"),j:x("t<@>"),f:x("a4<@,@>"),w:x("dg"),N:x("awK"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a4<@,@>?")}})();(function constants(){D.ch5=new A.D("Recebes de volta",null,B.N,null,null,null,null,null,null,null,null)
D.azq=new A.bI(1,B.as,D.ch5,null)
D.aDo=new A.b7(B.P9,null,B.U,null,null,null)
D.c84=new A.D("O QUE PODES FAZER",null,B.aN,null,null,null,null,null,null,null,null)
D.cbM=new A.D("AS CONTAS",null,B.aN,null,null,null,null,null,null,null,null)})()};
(a=>{a["e9jJTFp5llTHwOu7WBRtqopDt70="]=a.current})($__dart_deferred_initializers__);