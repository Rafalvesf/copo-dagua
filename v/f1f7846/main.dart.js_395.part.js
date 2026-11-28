((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aUS(d){return C.dHV(d)},
dHV(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aUS=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.R().b
j===$&&A.b()
x=7
return A.d(j.P("platform_settings").ck(0).V("id",1).dQ(0),$async$aUS)
case 7:s=a5
j=A.aI(J.i(s,"cancellation_penalty_days"))
i=j==null?null:B.k.F(j)
d=i==null?30:i
j=A.aI(J.i(s,"deposit_refund_window_hours"))
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
j=$.R().b
j===$&&A.b()
x=12
return A.d(j.P("bookings").am(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").V("id",a3).cJ(),$async$aUS)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.dq(n)?null:J.fv(n)
else f=n
m=f
j=y.Y.a(m)
j=A.dY(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.ao(j==null?B.am:j)
while(j.t()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.dd(A.a0(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.awX(q,a0)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUS,w)},
awX:function awX(d,e){this.b=d
this.e=e},
all(d,e){return C.dJm(d,e)},
dJm(d,e){var x=0,w=A.n(y.p),v,u=2,t=[],s,r,q,p,o,n,m
var $async$all=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.R().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aL("booking_cancel_state",A.T(["p_booking_id",d],y.R,q),q),$async$all)
case 7:s=g
if(y.f.b(s)){r=A.aI(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.dd(A.q(q==null?"":q))
q=q==null?null:q.e1()
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
return A.d(C.aUS(d),$async$all)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0D(q,r?null:n.e1().e6(A.e4(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$all,w)},
ddQ(d){return F.Xp[A.fE(d)-1]+", "+A.aC(d)+" "+B.by[A.ar(d)-1]+" \xe0s "+B.f.aY(B.j.k(A.ic(d)),2,"0")+":"+B.f.aY(B.j.k(A.hY(d)),2,"0")},
da5(d,e,f,g,h,i,j){return new C.BU(i,h,e,j,g,f,d,null)},
a0D:function a0D(d,e){this.a=d
this.b=e},
BU:function BU(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aDK:function aDK(d){this.d=d
this.c=this.a=null},
bMK:function bMK(d){this.a=d},
bML:function bML(d,e){this.a=d
this.b=e},
bMM:function bMM(d,e){this.a=d
this.b=e},
bMN:function bMN(d){this.a=d},
ag5:function ag5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aOg:function aOg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D
J=c[1]
A=c[0]
B=c[2]
E=c[246]
F=c[415]
G=c[230]
C=a.updateHolder(c[75],C)
D=c[414]
C.awX.prototype={}
C.a0D.prototype={}
C.BU.prototype={
R(){return new C.aDK(new A.aF(B.al,$.aa()))}}
C.aDK.prototype={
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ac(Date.now(),0,!1).eK(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.ddQ(h)+"). Se cancelares, o cliente recebe os "+A.aM(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aM(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.ddQ(h)+", recebes o sinal todo de volta."
x="O sinal ainda \xe9 devolvido"}else{w="Se cancelares, "+e.f+" \xe9 avisado e a reserva fica sem efeito."
x="Ainda n\xe3o pagaste nada"}h=!a0
v=!h||a1?B.fl:B.fk
if(a0)u="Se n\xe3o conseguires mesmo fazer o evento, fala com a equipa \xc0 Nossa!."
else{e=l.a
if(e.e)u="O cliente \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
else{g=i>0&&f&&g?"Depois dessa hora, o sinal deixa de ser devolvido. Esta a\xe7\xe3o n\xe3o pode ser desfeita.":e.f+" \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
u=g}}g=A.a([],y.L)
e=i>0
if(e){d=l.a.e?"Sinal pago pelo cliente":"Sinal pago"
g.push(new A.a_(d,A.aM(i,!0)))}if(l.a.e&&e)g.push(new A.a_("Devolvido ao cliente",A.aM(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new A.a_("Resto ("+A.aM(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.ax(a2,k,y.w).w
t=l.a
s=y.D
t=A.N(A.a([A.a4(A.x(A.a([A.h(t.c,k,k,k,k,B.bk,k,k,k),B.aW,A.h(t.d,k,k,k,k,B.N,k,k,k)],s),B.H,B.h,B.l,0,B.u),1),B.ah,new C.aOg(B.em,"Fechar",new C.bMK(a2),k)],s),B.w,B.h,B.l,0,k,k)
r=A.a([A.qo(A.N(A.a([A.z(k,k,B.r,k,k,new A.I(A.Q1(v),k,k,k,k,k,B.aw),k,8,B.dz,k,k,k,8),B.ah,A.a4(A.x(A.a([A.h(x,k,k,k,k,B.ab,k,k,k),B.aW,A.h(w,k,k,k,k,B.c6,k,k,k)],s),B.H,B.h,B.l,0,B.u),1)],s),B.H,B.h,B.l,0,k,k),B.t,E.iP,16,v)],s)
if(g.length!==0&&h){q=A.V(22)
p=A.a([],s)
for(o=0;n=g.length,o<n;++o){n=o===n-1?k:B.hs
m=g[o]
p.push(A.z(k,A.N(A.a([new A.bJ(1,B.at,A.h(m.a,k,k,k,k,B.N,k,k,k),k),A.h(m.b,k,k,k,k,B.bE,k,k,k)],s),B.w,B.h,B.l,0,k,k),B.r,k,k,new A.I(k,k,n,k,k,k,B.y),k,48,k,k,k,k,k))}g=A.a([B.a1,D.ccQ,B.S,A.z(k,A.x(p,B.w,B.h,B.l,0,B.u),B.r,k,k,new A.I(B.a7,k,k,q,k,k,B.y),k,k,k,B.cK,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.S,A.N(A.a([D.aAk,A.h(A.aM(a1?0:i,!0),k,k,k,k,B.c2,k,k,k)],s),B.eS,B.h,B.l,0,B.aM,k)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aJ,k,k,k)
q=A.V(26)
B.e.n(r,A.a([B.a1,e,B.S,A.z(B.bg,A.cs(k,B.a8,!1,k,!0,B.z,k,A.cu(),l.d,k,k,k,k,k,2,A.iI(k,B.bw,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.mC,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.Y,!0,k,!0,k,!1,k,B.aD,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aq,k,k,k,k,k,k,k,k,k,k,k,B.fg,!0,B.ar,k,B.b2,k,k,k,k),B.r,k,k,new A.I(B.a7,k,k,q,k,k,B.y),k,52,k,B.f8,k,k,k)],s))}r.push(B.a1)
r.push(A.h(u,k,k,k,k,B.c6,k,k,k))
h=A.dR(A.x(r,B.G,B.h,B.l,0,B.u),B.z,k,B.eh,k,k,B.a3)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a4(new C.ag5(g,!0,a0?new C.bML(l,a2):new C.bMM(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bF(!0,new A.Q(new A.a2(0,0,0,d.f.d),A.x(A.a([new A.Q(B.jI,t,k),new A.d8(1,B.b7,h,k),new A.Q(G.qA,A.N(A.a([g,B.ag,A.a4(new C.ag5(e,!1,new C.bMN(a2),k),1)],s),B.w,B.h,B.l,0,k,k),k)],s),B.G,B.h,B.K,0,B.u),k),k,B.a_,!1)}}
C.ag5.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fK(w,w,B.t,w,w,w,w,w,w,B.A,w,w,B.iO,w,B.ae,B.c8,w,w,B.d4,w)
x=A.h5(A.h(u,2,w,w,w,w,B.a6,w,w),v,x)
v=x}else{x=A.cn(B.A,w,w,B.t,w,B.iO,B.ae,w,w,B.d4)
x=A.bG(A.h(u,2,w,w,w,w,B.a6,w,w),v,x)
v=x}return A.aH(v,52,w)}}
C.aOg.prototype={
u(d){var x=null
return A.b8(x,!0,x,A.cR(x,A.z(B.L,A.b4(this.c,B.t,x,x,20),B.r,x,x,B.cg,x,44,x,x,x,x,44),B.Y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.aP),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
var z=a.updateTypes([])
C.bMK.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
C.bML.prototype={
$0(){A.am(this.b,!1).bx()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bMM.prototype={
$0(){return A.am(this.b,!1).ae(B.f.C(this.a.d.a.a))},
$S:0}
C.bMN.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[C.awX,C.a0D])
w(C.BU,A.G)
w(C.aDK,A.Y)
x(A.bR,[C.bMK,C.bML,C.bMM,C.bMN])
x(A.J,[C.ag5,C.aOg])})()
A.bq(b.typeUniverse,JSON.parse('{"BU":{"G":[],"e":[],"f":[]},"aDK":{"Y":["BU"]},"ag5":{"J":[],"e":[],"f":[]},"aOg":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{p:x("a0D"),L:x("r<+(c,c)>"),D:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dg"),N:x("awX"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a5<@,@>?")}})();(function constants(){D.ci5=new A.D("Recebes de volta",null,B.N,null,null,null,null,null,null,null,null)
D.aAk=new A.bJ(1,B.at,D.ci5,null)
D.ccQ=new A.D("AS CONTAS",null,B.aJ,null,null,null,null,null,null,null,null)})()};
(a=>{a["nAYEHdxQPo+WJzFpwSlC1pB6nQc="]=a.current})($__dart_deferred_initializers__);