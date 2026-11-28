((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aUP(d){return C.dHz(d)},
dHz(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aUP=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.R().b
j===$&&A.b()
x=7
return A.d(j.R("platform_settings").ck(0).V("id",1).dP(0),$async$aUP)
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
j=$.R().b
j===$&&A.b()
x=12
return A.d(j.R("bookings").am(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").V("id",a3).cS(),$async$aUP)
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
j=J.ap(j==null?B.am:j)
while(j.t()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.dh(A.a_(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.awW(q,a0)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUP,w)},
awW:function awW(d,e){this.b=d
this.e=e},
all(d,e){return C.dJ0(d,e)},
dJ0(d,e){var x=0,w=A.n(y.p),v,u=2,t=[],s,r,q,p,o,n,m
var $async$all=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.R().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aM("booking_cancel_state",A.T(["p_booking_id",d],y.R,q),q),$async$all)
case 7:s=g
if(y.f.b(s)){r=A.aL(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.dh(A.q(q==null?"":q))
q=q==null?null:q.e1()
v=new C.a0E(r,q)
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
return A.d(C.aUP(d),$async$all)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0E(q,r?null:n.e1().e6(A.e4(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$all,w)},
ddt(d){return F.Xo[A.fR(d)-1]+", "+A.aH(d)+" "+B.bG[A.au(d)-1]+" \xe0s "+B.f.aY(B.j.k(A.ic(d)),2,"0")+":"+B.f.aY(B.j.k(A.hY(d)),2,"0")},
d9J(d,e,f,g,h,i,j){return new C.BU(i,h,e,j,g,f,d,null)},
a0E:function a0E(d,e){this.a=d
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
aDJ:function aDJ(d){this.d=d
this.c=this.a=null},
bMH:function bMH(d){this.a=d},
bMI:function bMI(d,e){this.a=d
this.b=e},
bMJ:function bMJ(d,e){this.a=d
this.b=e},
bMK:function bMK(d){this.a=d},
ag5:function ag5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aOe:function aOe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D
J=c[1]
A=c[0]
B=c[2]
E=c[246]
F=c[414]
G=c[230]
C=a.updateHolder(c[75],C)
D=c[413]
C.awW.prototype={}
C.a0E.prototype={}
C.BU.prototype={
P(){return new C.aDJ(new A.aF(B.al,$.aa()))}}
C.aDJ.prototype={
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ad(Date.now(),0,!1).eA(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.ddt(h)+"). Se cancelares, o cliente recebe os "+A.aM(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aM(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.ddt(h)+", recebes o sinal todo de volta."
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
g.push(new A.a1(d,A.aM(i,!0)))}if(l.a.e&&e)g.push(new A.a1("Devolvido ao cliente",A.aM(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new A.a1("Resto ("+A.aM(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.ax(a2,k,y.w).w
t=l.a
s=y.D
t=A.N(A.a([A.a4(A.y(A.a([A.h(t.c,k,k,k,k,B.bk,k,k,k),B.aY,A.h(t.d,k,k,k,k,B.O,k,k,k)],s),B.H,B.h,B.l,0,B.u),1),B.ah,new C.aOe(B.em,"Fechar",new C.bMH(a2),k)],s),B.w,B.h,B.l,0,k,k)
r=A.a([A.qo(A.N(A.a([A.B(k,k,B.r,k,k,new A.L(A.PZ(v),k,k,k,k,k,B.aw),k,8,B.dy,k,k,k,8),B.ah,A.a4(A.y(A.a([A.h(x,k,k,k,k,B.ae,k,k,k),B.aY,A.h(w,k,k,k,k,B.c9,k,k,k)],s),B.H,B.h,B.l,0,B.u),1)],s),B.H,B.h,B.l,0,k,k),B.t,E.iO,16,v)],s)
if(g.length!==0&&h){q=A.W(22)
p=A.a([],s)
for(o=0;n=g.length,o<n;++o){n=o===n-1?k:B.i3
m=g[o]
p.push(A.B(k,A.N(A.a([new A.bJ(1,B.au,A.h(m.a,k,k,k,k,B.O,k,k,k),k),A.h(m.b,k,k,k,k,B.bD,k,k,k)],s),B.w,B.h,B.l,0,k,k),B.r,k,k,new A.L(k,k,n,k,k,k,B.y),k,48,k,k,k,k,k))}g=A.a([B.a1,D.ccN,B.S,A.B(k,A.y(p,B.w,B.h,B.l,0,B.u),B.r,k,k,new A.L(B.a7,k,k,q,k,k,B.y),k,k,k,B.cP,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.S,A.N(A.a([D.aAf,A.h(A.aM(a1?0:i,!0),k,k,k,k,B.c2,k,k,k)],s),B.eS,B.h,B.l,0,B.aM,k)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aL,k,k,k)
q=A.W(26)
B.e.n(r,A.a([B.a1,e,B.S,A.B(B.bg,A.cs(k,B.a8,!1,k,!0,B.z,k,A.cx(),l.d,k,k,k,k,k,2,A.iI(k,B.bw,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.mC,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.Z,!0,k,!0,k,!1,k,B.aD,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aq,k,k,k,k,k,k,k,k,k,k,k,B.ff,!0,B.ar,k,B.b2,k,k,k,k),B.r,k,k,new A.L(B.a7,k,k,q,k,k,B.y),k,52,k,B.fs,k,k,k)],s))}r.push(B.a1)
r.push(A.h(u,k,k,k,k,B.c9,k,k,k))
h=A.dQ(A.y(r,B.G,B.h,B.l,0,B.u),B.z,k,B.eh,k,k,B.a3)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a4(new C.ag5(g,!0,a0?new C.bMI(l,a2):new C.bMJ(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bE(!0,new A.Q(new A.a2(0,0,0,d.f.d),A.y(A.a([new A.Q(B.jI,t,k),new A.d8(1,B.b7,h,k),new A.Q(G.qA,A.N(A.a([g,B.ag,A.a4(new C.ag5(e,!1,new C.bMK(a2),k),1)],s),B.w,B.h,B.l,0,k,k),k)],s),B.G,B.h,B.K,0,B.u),k),k,B.a_,!1)}}
C.ag5.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fJ(w,w,B.t,w,w,w,w,w,w,B.A,w,w,B.iN,w,B.ad,B.c7,w,w,B.d4,w)
x=A.h5(A.h(u,2,w,w,w,w,B.a6,w,w),v,x)
v=x}else{x=A.cn(B.A,w,w,B.t,w,B.iN,B.ad,w,w,B.d4)
x=A.bF(A.h(u,2,w,w,w,w,B.a6,w,w),v,x)
v=x}return A.aG(v,52,w)}}
C.aOe.prototype={
u(d){var x=null
return A.b8(x,!0,x,A.cT(x,A.B(B.L,A.b4(this.c,B.t,x,x,20),B.r,x,x,B.cg,x,44,x,x,x,x,44),B.Z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.aQ),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
var z=a.updateTypes([])
C.bMH.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
C.bMI.prototype={
$0(){A.am(this.b,!1).bx()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bMJ.prototype={
$0(){return A.am(this.b,!1).ae(B.f.C(this.a.d.a.a))},
$S:0}
C.bMK.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.K,[C.awW,C.a0E])
w(C.BU,A.G)
w(C.aDJ,A.Y)
x(A.bR,[C.bMH,C.bMI,C.bMJ,C.bMK])
x(A.I,[C.ag5,C.aOe])})()
A.bq(b.typeUniverse,JSON.parse('{"BU":{"G":[],"e":[],"f":[]},"aDJ":{"Y":["BU"]},"ag5":{"I":[],"e":[],"f":[]},"aOe":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{p:x("a0E"),L:x("r<+(c,c)>"),D:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("df"),N:x("awW"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a5<@,@>?")}})();(function constants(){D.ci3=new A.D("Recebes de volta",null,B.O,null,null,null,null,null,null,null,null)
D.aAf=new A.bJ(1,B.au,D.ci3,null)
D.ccN=new A.D("AS CONTAS",null,B.aL,null,null,null,null,null,null,null,null)})()};
(a=>{a["ykIB939hzb08bRaYYQah/UqUaZc="]=a.current})($__dart_deferred_initializers__);