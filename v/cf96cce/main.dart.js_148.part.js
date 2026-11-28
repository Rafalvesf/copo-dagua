((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cGX(d,e){return C.dGZ(d,e)},
dGZ(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cGX=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.S().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aM("create_pay_request",A.T(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cGX)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.dq(A.q(J.i(s,"expires_at")))
p=p==null?null:p.e0()
if(p==null)p=new A.ad(Date.now(),0,!1).e5(6e8)
v=new A.YS(null,new C.avs(r,q,p))
x=1
break}r=r.b(s)?A.q(J.i(s,"result")):"error"
v=new A.YS(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.YS("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cGX,w)},
cG8(d){return C.dGi(d)},
dGi(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cG8=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.S().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aM("cancel_pay_request",A.T(["p_id",d],y.N,s),s),$async$cG8)
case 6:v=1
x=5
break
case 3:v=2
q=u.pop()
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$cG8,w)},
dIP(d,e){var x=$.S().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.Mg(0,"pay-request-"+d,B.yE).Oh(new C.cIZ(e),B.H6,new G.Fu(H.yr,"id",d),"public","pay_requests").Qb(0)},
cLA(d){return C.dK1(d)},
dK1(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cLA=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.S().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aM("pay_request_info",A.T(["p_code",d],y.N,q),q),$async$cLA)
case 7:s=f
if(!y.f.b(s)){v=D.a2A
x=1
break}r=A.q(J.i(s,"result"))
q=A.D(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.q(p==null?"":p)
o=A.aL(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.D(J.i(s,"description"))
v=new C.a62(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a2A
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cLA,w)},
ala(d){return C.dHm(d)},
dHm(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ala=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.S().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f6("event-pay",d),$async$ala)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.h8(r,o,n):A.T(["error","unknown_error"],o,n)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
if(o instanceof A.pk){q=o
p=q.b
o=y.N
n=y.z
o=y.f.b(p)?J.h8(p,o,n):A.T(["error","unknown_error"],o,n)
v=o
x=1
break}else{o=A.T(["error","network"],y.N,y.z)
v=o
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ala,w)},
avs:function avs(d,e,f){this.a=d
this.b=e
this.c=f},
cIZ:function cIZ(d){this.a=d},
a62:function a62(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cPM(d){return C.dKF(d)},
dKF(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cPM=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.S().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aM("scan_qr",A.T(["p_token",b0],y.N,o),o),$async$cPM)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.Hr
x=1
break}o=A.q(J.i(s,"result"))
n=A.D(J.i(s,"scan_id"))
m=A.D(J.i(s,"name"))
l=A.D(J.i(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.i(s,"items"))
j=J.aq(j==null?B.an:j)
while(j.t()){q=j.gE(j)
if(p.b(q)){i=q
h=J.a7(i)
g=h.h(i,"ticket")
f=A.q(h.h(i,"kind"))
e=A.q(h.h(i,"wedding_id"))
d=A.D(h.h(i,"booking_id"))
a0=h.h(i,"event")
a0=A.q(a0==null?"Evento":a0)
a1=h.h(i,"date")
a1=A.dq(A.q(a1==null?"":a1))
a2=A.D(h.h(i,"booking_number"))
a3=A.aL(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.D(J.i(g,"status")):null
if(a5){a5=A.aL(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.dq(A.q(a7==null?"":a7))
a7=a7==null?null:a7.e0()
J.o(h.h(i,"can_charge"),!0)
J.by(r,new C.aya(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.D(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dR(p)
p=p===!0?"entry":"profile"}k=A.D(J.i(s,"profile_id"))
v=new C.FW(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cT){v=D.Hr
x=1
break}else{v=D.Hr
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cPM,w)},
aVm(d,e){return C.dKE(d,e)},
dKE(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVm=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.S().b
p===$&&A.b()
x=10
return A.d(p.aM("scan_booking_arrival",A.T(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVm)
case 10:o=g
x=8
break
case 9:p=$.S().b
p===$&&A.b()
x=11
return A.d(p.aM("scan_check_in",A.T(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVm)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YQ(null,"error")
x=1
break}r=A.q(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.dq(A.q(q==null?"":q))
q=q==null?null:q.e0()
v=new A.YQ(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YQ(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVm,w)},
aya:function aya(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n},
FW:function FW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cXu(d){return B.f.aY(B.j.k(A.ic(d)),2,"0")+":"+B.f.aY(B.j.k(A.hY(d)),2,"0")},
d6c(d){return new C.FX(d,null)},
dlX(){return new C.Dc(null)},
dsB(d){return new C.Fg(d,null)},
dzF(d){var x
switch(d){case"expired":x="Este QR expirou. Pede ao parceiro para mostrar outro."
break
case"used":x="Este QR j\xe1 foi usado por outra pessoa."
break
case"own_request":x="N\xe3o podes pagar uma cobran\xe7a tua."
break
case"not_found":x="Este QR n\xe3o \xe9 v\xe1lido."
break
case"declined":x="O cart\xe3o foi recusado. Experimenta outro."
break
case"network":x="Sem liga\xe7\xe3o. Verifica a internet e tenta outra vez."
break
default:x=A.aVa(d)
break}return x},
dzH(d){var x
switch(d){case"paid":x="Pago"
break
case"expired":x="QR expirado"
break
case"used":x="QR j\xe1 usado"
break
case"own_request":x="\xc9 a tua cobran\xe7a"
break
case"not_found":x="QR inv\xe1lido"
break
default:x="Sem liga\xe7\xe3o"
break}return x},
dzG(d){var x
switch(d){case"paid":x="J\xe1 pagaste esta conta."
break
case"expired":x="Este QR j\xe1 n\xe3o est\xe1 v\xe1lido. Pede ao parceiro para mostrar um novo."
break
case"used":x="Outra pessoa j\xe1 pagou ou est\xe1 a pagar com este QR."
break
case"own_request":x="N\xe3o podes pagar uma cobran\xe7a tua. Mostra este QR ao cliente para ele pagar."
break
case"not_found":x="Este QR n\xe3o \xe9 de uma cobran\xe7a da \xc0 Nossa!"
break
default:x="N\xe3o foi poss\xedvel abrir o pagamento. Verifica a liga\xe7\xe3o e tenta outra vez."
break}return x},
ajm:function ajm(d,e){this.c=d
this.a=e},
H_:function H_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FX:function FX(d,e){this.c=d
this.a=e},
aOl:function aOl(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cui:function cui(d,e){this.a=d
this.b=e},
cuj:function cuj(d,e,f){this.a=d
this.b=e
this.c=f},
cuq:function cuq(d){this.a=d},
cup:function cup(d){this.a=d},
cuo:function cuo(d){this.a=d},
cun:function cun(d){this.a=d},
cum:function cum(d,e){this.a=d
this.b=e},
cuk:function cuk(d,e,f){this.a=d
this.b=e
this.c=f},
cul:function cul(d){this.a=d},
wp:function wp(d,e,f){this.c=d
this.d=e
this.a=f},
we:function we(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bLn:function bLn(){},
Dc:function Dc(d){this.a=d},
ac1:function ac1(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bNs:function bNs(d,e){this.a=d
this.b=e},
bNl:function bNl(d){this.a=d},
bNm:function bNm(d){this.a=d},
bNn:function bNn(d,e){this.a=d
this.b=e},
bNz:function bNz(d,e){this.a=d
this.b=e},
bNy:function bNy(){},
bNA:function bNA(d,e){this.a=d
this.b=e},
bNr:function bNr(d,e){this.a=d
this.b=e},
bNx:function bNx(d){this.a=d},
bNv:function bNv(d){this.a=d},
bNw:function bNw(d,e){this.a=d
this.b=e},
bNj:function bNj(){},
bNh:function bNh(d){this.a=d},
bNi:function bNi(d){this.a=d},
bNk:function bNk(d){this.a=d},
bNq:function bNq(d){this.a=d},
bNB:function bNB(d){this.a=d},
bNo:function bNo(d){this.a=d},
bNp:function bNp(d,e){this.a=d
this.b=e},
bNu:function bNu(){},
bNt:function bNt(d){this.a=d},
Fg:function Fg(d,e){this.c=d
this.a=e},
afN:function afN(){this.c=this.a=this.d=null},
ckN:function ckN(d){this.a=d},
ckO:function ckO(d,e){this.a=d
this.b=e},
ckL:function ckL(d){this.a=d},
ckM:function ckM(d){this.a=d},
ckP:function ckP(d){this.a=d},
ckQ:function ckQ(d){this.a=d},
aP1:function aP1(d,e,f){this.c=d
this.d=e
this.a=f},
cw4:function cw4(d){this.a=d},
cw5:function cw5(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[88]
G=c[122]
H=c[242]
C=a.updateHolder(c[14],C)
D=c[279]
I=c[234]
K=c[245]
F=c[280]
L=c[56]
M=c[282]
N=c[281]
C.avs.prototype={}
C.a62.prototype={}
C.aya.prototype={}
C.FW.prototype={
gaq(d){return this.c}}
C.ajm.prototype={
u(d){var x=null
return A.B(x,this.c,B.r,x,x,$.cS5(),x,x,x,B.cz,x,x,x)}}
C.H_.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.ch,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bG,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.B(x,A.O(w,B.w,B.h,B.l,0,x,x),B.r,x,x,D.KU,x,x,x,B.ec,x,x,x)}}
C.FX.prototype={
P(){return new C.aOl(A.E(y.N,y.R))}}
C.aOl.prototype={
L7(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$L7=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cPM(u.a.c),$async$L7)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ai(t).GF("/u/"+A.q(s),null,y.X)
v=new A.aO($.aU,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$L7,w)},
a4B(d,e){var x=e.c
return x==null?"e"+e.b:x},
RF(d,e){return this.aVi(d,e)},
aVi(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$RF=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cui(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVm(t,e),$async$RF)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cuj(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$RF,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.L7()
return A.cP(null,B.bz,A.bC(!0,A.cUd(new C.cuq(x),w,y.A),null,B.a_,!0),!0,null)},
be5(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bU3
break
case"own_code":x=D.bUg
break
case"not_found":x=D.bTA
break
default:x=D.bUi
break}w=x.a
v=p
u=p
t=x.b
s=x.c
u=s
v=t
r=w
o=o==="error"
x=y.p
q=A.a([B.mr,A.b2(r,o?B.U:B.fq,p,p,96),B.a1,A.h(v,p,p,p,p,B.hj,B.a6,p,p),B.T,A.h(u,p,p,p,p,D.c6a,B.a6,p,p)],x)
if(o)B.e.n(q,A.a([B.cM,A.bD(B.tt,new C.cuo(this),p)],x))
return q},
bdq(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.cx(r,44,d.d,!1,!0,s),B.af,A.a4(A.A(A.a([A.h(r,s,s,s,s,B.ip,s,s,s),D.cgb],x),B.H,B.h,B.l,0,B.u),1),B.ag,D.cqr],x),B.w,B.h,B.l,0,s,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.d1(B.bg,s,s,A.aG(A.hf(D.cfx,new C.cum(this,d),A.fP(s,s,B.t,s,s,s,s,s,s,B.A,s,s,B.bT,s,B.ad,B.c9,s,s,s,s)),36,s),s)],x))
w=A.a([new C.ajm(A.A(w,B.G,B.h,B.l,0,B.u),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bs,D.ccZ],x))
else for(t=0;t<v.length;v.length===u||(0,A.K)(v),++t)B.e.n(w,this.b7h(0,d,v[t]))
return w},
b7h(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a4B(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
if((i?n:l.b)!=="ok")x=(i?n:l.b)==="already"
else x=!0
if(x){x=l.a
w=x==null?f.z:x}else w=f.z
x=w==null
v=!x
u=i?n:l.b
A:{if("expired"===u){t="A leitura expirou. L\xea o QR outra vez."
break A}if("not_paid"===u){t="Bilhete por pagar: n\xe3o d\xe1 entrada."
break A}if("refunded"===u){t="Bilhete reembolsado: n\xe3o d\xe1 entrada."
break A}if("ok"===u||"already"===u||u==null){t=n
break A}t="N\xe3o foi poss\xedvel registar. Tenta outra vez."
break A}s=!1
if(x)if(!j){i=i||l.b==="error"
s=i}i=A.h(k?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",n,n,n,n,B.aS,n,n,n)
x=y.p
r=A.a([A.h(f.d,n,n,n,n,B.ip,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.Q(F.qu,A.h(B.ez[A.hi(q)-1]+", "+A.aH(q)+" "+B.bO[A.ax(q)-1],n,n,n,n,B.P,n,n,n),n))
r.push(B.ac)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H_("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H_("Pessoas",A.q(p),n,n))
q.push(new C.H_("Chegada",n,v?new C.wp("Registada \xe0s "+C.cXu(w),!0,n):D.ady,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wp(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cqt
p=v?new C.wp("Registada \xe0s "+C.cXu(w),!0,n):D.ady
B.e.n(r,A.a([new C.H_("Bilhete",n,q,n),new C.H_("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.Q(B.qw,A.h(t,n,n,n,n,B.zn,n,n,n),n))
i=A.a([B.bs,i,B.au,new C.ajm(A.A(r,B.G,B.h,B.l,0,B.u),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cuk(o,e,f):n
if(r===m)r=B.z4
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.l_,n,n,n)
t.push(A.a4(A.aG(A.bD(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ak)
x.push(A.a4(A.aG(A.hf(D.cff,new C.cul(o),A.fP(n,n,B.t,n,n,n,n,n,n,B.A,n,n,n,n,B.ad,B.c9,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.w,B.h,B.l,0,n,n))
return i}}
C.wp.prototype={
u(d){var x=null,w=this.d,v=w?B.d1:B.f7,u=A.X(999)
return A.B(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?B.dc:B.d0,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.M(v,x,x,u,x,x,B.y),x,x,x,B.dz,x,x,x)}}
C.we.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mp:A.h(x.c,w,w,w,w,B.eJ,w,w,w)
if(x.e)v=A.hf(u,x.d,A.fP(w,w,B.t,w,w,w,w,w,w,B.A,w,w,w,w,B.ad,B.c9,w,w,w,w))
else{v=v?new C.bLn():x.d
v=A.bD(u,v,A.cq(B.A,B.A.cc(0.35),B.t,B.t,w,w,B.ad,w,w,w))}return A.aG(v,52,1/0)}}
C.Dc.prototype={
P(){return new C.ac1(new A.aF(B.al,$.ab()))}}
C.ac1.prototype={
m(){this.UU()
var x=this.e
x.Z$=$.ab()
x.V$=0
this.a6()},
UU(){var x,w=this,v=w.y
if(v!=null){x=$.S().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yh(v)}w.y=null
v=w.z
if(v!=null)v.aL(0)
v=w.Q
if(v!=null)v.aL(0)},
be1(d){this.p(new C.bNs(this,d))},
RH(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$RH=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bNl(u))
t=B.f.C(u.e.a.a)
s=u.d
x=3
return A.d(C.cGX(s,t.length===0?null:t),$async$RH)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bNm(u))
q=r.b
if(q==null){s=r.a
v=u.bjc(s==null?"error":s)
x=1
break}u.p(new C.bNn(u,q))
u.bmY(q)
case 1:return A.l(v,w)}})
return A.m($async$RH,w)},
bmY(d){var x=this
x.UU()
x.y=C.dIP(d.a,x.gbaf())
x.z=A.u4(B.fR,new C.bNz(x,d))
x.Q=A.u4(B.v3,new C.bNA(x,d))},
a5f(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bNr(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aL(0)
x=w.Q
if(x!=null)x.aL(0)}},
bjc(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fR(!0,new C.bNx(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a3(A.c6(w,w,w,w,w,B.z,w,A.h(x,w,w,w,w,w,w,w,w),w,B.V,w,w,w,w,w,w,w,w,w,w))},
Ds(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Ds=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fR(!0,new C.bNj(),t,y.x),$async$Ds)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cG8(s.a),$async$Ds)
case 6:if(u.c==null){x=1
break}case 4:u.UU()
u.p(new C.bNk(u))
case 1:return A.l(v,w)}})
return A.m($async$Ds,w)},
aoH(){this.UU()
this.p(new C.bNq(this))},
akZ(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Ds()
else w.aoH()
else{x=w.c
x.toString
A.am(x,!1).iz()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pV(B.lP,x.gaZx(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hj,w,w,w)
return A.bnI(u,A.cP(w,B.bz,A.bC(!0,new A.Q(D.aun,A.A(A.a([new A.d1(B.bg,w,w,t,w),B.R,s,B.bs,A.a4(u?x.b7q():x.ber(v),1)],y.p),B.G,B.h,B.l,0,B.u),w),w,B.a_,!0),!0,w),new C.bNB(x),y.K)},
b7q(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bNo(o),j=$.cS5(),i=y.p
j=A.B(n,A.A(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.P,B.a6,n,n),B.ac,A.b8(n,n,n,A.h(E.cHf(m),n,n,n,n,D.c20,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.w,B.h,B.l,0,B.u),B.r,n,n,j,n,n,n,D.atc,n,n,n)
m=A.X(999)
x=A.bz(B.fp,0.5)
m=A.a([j,B.ac,A.B(n,A.O(A.a([D.ceF,B.ak,A.a4(A.cw(n,B.a8,!1,n,!0,B.z,n,A.cz(),o.e,n,n,n,n,n,2,D.aFU,B.Z,!0,n,!0,n,!1,n,B.aF,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.at,n,n,n,n,n,n,n,n,n,n,n,B.kZ,!0,B.as,n,B.hb,n,n,n,n),1)],i),B.w,B.h,B.l,0,n,n),B.r,n,n,new A.M(B.t,n,x,m,n,n,B.y),n,44,n,B.bT,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bCX[w]
x=B.e.gM(v)==="1"?16:10
u=A.a([],i)
for(t=A.eB(v,0,j),s=J.aq(t.a),r=t.b,t=new A.c0(s,r,A.u(t).i("c0<1>"));t.t();){q=t.c
q=q>=0?new A.a3(r+q,s.gE(s)):A.aj(A.c3())
p=A.a([],i)
if(q.a>0)p.push(B.ak)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c1(n,x,n,n),A.O(u,B.w,B.h,B.l,0,n,n)],i))}m=A.a4(A.d0(m,n,B.a_,n,n,!1,B.a2,!1),1)
j=o.f
return A.A(A.a([m,B.R,new C.we("Mostrar o QR para pagar",l?o.gal_():n,!1,j,n)],i),B.G,B.h,B.l,0,B.u)},
ber(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cS(new A.ad(Date.now(),0,!1)).a
x=h<0?0:B.j.aT(h,1e6)
w=""+B.j.aT(x,60)+":"+B.f.aY(B.j.k(B.j.ap(x,60)),2,"0")
v=B.f.C(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.a3("Pago \xe0s "+C.cXu(h==null?new A.ad(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bRU
break
case"cancelled":h=D.bRN
break
default:h=D.bT6
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bNu()
q=j.c
q.toString
q=A.oA(q,!1).a0(0,$.ba(),y.D).b
p=q==null?i:q.x
q=$.cS5()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.C(p).length!==0)n.push(A.h(B.f.C(p),i,i,i,i,B.ip,B.a6,i,i))
n.push(new A.Q(F.qu,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.P,B.a6,i,i),i))
n.push(B.R)
if(g)n.push(D.bYq)
else{m=A.X(16)
l=A.bz(B.fp,0.5)
k=f?1:0.15
n.push(A.B(i,A.fe(A.cVk(B.t,A.kC("/pagar/"+d.b),B.H8,B.H9,B.a_,"QR para pagar "+E.cHf(j.d),186),k),B.r,i,i,new A.M(B.t,i,l,m,i,i,B.y),i,i,i,B.cz,i,i,i))}n.push(B.R)
n.push(A.h(E.cHf(j.d),i,i,i,i,B.hj,i,i,i))
n.push(B.b1)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.P,B.a6,i,i))
if(f)B.e.n(n,A.a([B.ac,D.cqq],o))
q=A.B(i,A.A(n,B.w,B.h,B.l,0,B.u),B.r,i,i,q,i,i,i,B.cz,i,i,i)
n=A.b8(i,i,i,h.$2("Estado",new C.wp(r,t,i)),!1,i,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a4(A.d0(A.a([q,B.aC,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bG,i,i,i))],o),i,B.a_,i,i,!1,B.a2,!1),1),B.R],o)
if(f)h.push(new C.we("Cancelar cobran\xe7a",j.gaZy(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.we("Nova cobran\xe7a",j.gb97(),!1,!1,i),B.ac,new C.we("Fechar",new C.bNt(j),!0,!1,i)],o))
else h.push(new C.we("Mostrar outro QR",j.gal_(),!1,j.f,i))
return A.A(h,B.G,B.h,B.l,0,B.u)}}
C.Fg.prototype={
P(){return new C.afN()}}
C.afN.prototype={
ah(){this.aA()
this.IY()},
IY(){var x=0,w=A.n(y.H),v=this,u
var $async$IY=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.ckN(v))
x=2
return A.d(C.cLA(v.a.c),$async$IY)
case 2:u=e
if(v.c!=null)v.p(new C.ckO(v,u))
return A.l(null,w)}})
return A.m($async$IY,w)},
aSN(d){var x=null,w=d.e,v=w==null?x:B.f.C(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.ou("",d.c,"pay_request",d.d/100,x,x,new C.ckL(this),!1,new C.ckM(d),B.Wn,x,w,C.dHp(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Uf(this.aSN(t),u)
x=s?"Pagar":C.dzH(t.a)
if(s)s=D.aJ8
else{s=t.a
w=y.p
v=A.a([A.bO(A.a2s(s==="paid"?B.jE:B.qE,3,u,120),u,u),B.R,A.h(C.dzG(s),u,u,u,u,B.hg,B.a6,u,u),B.bi],w)
if(s==="error")B.e.n(v,A.a([new C.we("Tentar outra vez",this.gaZz(),!1,!1,u),B.ac,new C.we("Fechar",new C.ckP(d),!0,!1,u)],w))
else v.push(new C.we("OK",new C.ckQ(d),!1,!1,u))
s=v}return new C.aP1(x,s,u)}}
C.aP1.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=A.a4(A.cW(B.bV,x,B.Z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cw4(d),x,x,x,x,x,x,!1,B.aV),1),u=y.p,t=A.a([A.bO(A.B(x,x,B.r,x,x,new A.M(N.us,x,x,A.X(3),x,x,B.y),x,5,x,x,x,x,40),x,x),B.aC,A.O(A.a([A.a4(A.h(this.c,x,x,x,x,B.bk,x,x,x),1),A.pV(B.ei,new C.cw5(d),"Fechar")],u),B.w,B.h,B.l,0,x,x),B.a1],u)
B.e.n(t,this.d)
return A.fo(!1,B.aD,!0,x,A.A(A.a([v,A.B(x,A.A(t,B.G,B.h,B.K,0,B.u),B.r,x,x,M.KV,x,x,x,new A.a0(20,10,20,20+w.r.d),x,x,1/0)],u),B.w,B.iY,B.l,0,B.u),B.r,x,0,x,x,x,x,x,B.eA)}}
var z=a.updateTypes(["F<~>()","~()","H(N,nn<FW>)","~(c)","c(c)"])
C.cIZ.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:133}
C.cui.prototype={
$0(){var x=this.a
return x.f=x.a4B(0,this.b)},
$S:0}
C.cuj.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4B(0,this.b),this.c)},
$S:0}
C.cuq.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bZ6
x=y.p
w=A.a([A.O(A.a([A.pV(B.lP,new C.cup(d),"Voltar")],x),B.w,B.h,B.l,0,u,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.c8W,B.bs],x))
else w.push(B.a1)
x=this.a
if(!v)B.e.n(w,x.be5(t))
else B.e.n(w,x.bdq(t))
return A.d0(w,u,B.De,u,u,!1,B.a2,!1)},
$S:z+2}
C.cup.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
C.cuo.prototype={
$0(){var x=this.a
return x.p(new C.cun(x))},
$S:0}
C.cun.prototype={
$0(){var x=this.a
return x.d=x.L7()},
$S:0}
C.cum.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).au("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.cuk.prototype={
$0(){return this.a.RF(this.b,this.c)},
$S:0}
C.cul.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).au("/cobrar",null,y.X)},
$S:0}
C.bLn.prototype={
$0(){},
$S:0}
C.bNs.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aT(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dW(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bNl.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bNm.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bNn.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bNz.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.h5(new A.ad(Date.now(),0,!1)))x.a5f("expired")
else x.p(new C.bNy())},
$S:65}
C.bNy.prototype={
$0(){},
$S:0}
C.bNA.prototype={
$1(d){return this.aEP(d)},
aEP(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.ala(A.T(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a5f("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:349}
C.bNr.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ad(Date.now(),0,!1)},
$S:0}
C.bNx.prototype={
$1(d){var x=null
return new A.eR(D.cbf,D.cib,A.a([A.cu(B.mC,x,x,new C.bNv(d),x,x),A.bD(D.ci3,new C.bNw(this.a,d),x)],y.p),x)},
$S:18}
C.bNv.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0}
C.bNw.prototype={
$0(){A.am(this.b,!1).bB()
var x=this.a.c
x.toString
A.ai(x).au("/partner-payments/setup",null,y.X)},
$S:0}
C.bNj.prototype={
$1(d){var x=null
return new A.eR(D.chy,D.cgh,A.a([A.cu(D.cfF,x,x,new C.bNh(d),x,x),A.bD(D.cdi,new C.bNi(d),x)],y.p),x)},
$S:18}
C.bNh.prototype={
$0(){return A.am(this.a,!1).ad(!1)},
$S:0}
C.bNi.prototype={
$0(){return A.am(this.a,!1).ad(!0)},
$S:0}
C.bNk.prototype={
$0(){return this.a.r=null},
$S:0}
C.bNq.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.j7(0,B.j9)},
$S:0}
C.bNB.prototype={
$2(d,e){if(!d)this.a.akZ()},
$S:174}
C.bNo.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.X(16),t=A.X(16)
return A.a4(A.b8(x,!0,x,A.fo(!1,B.aD,!0,x,A.eC(!1,t,!0,A.aG(A.bO(w?D.aEr:A.h(d,x,x,x,x,B.pd,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bNp(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fD(u,D.KG),x,x,B.cC),!1,x,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:268}
C.bNp.prototype={
$0(){return this.a.be1(this.b)},
$S:0}
C.bNu.prototype={
$2(d,e){var x=null
return A.B(x,A.O(A.a([A.a4(A.h(d,x,x,x,x,B.ch,x,x,x),1),e],y.p),B.w,B.h,B.l,0,x,x),B.r,x,x,D.KU,x,x,x,B.cn,x,x,x)},
$S:1368}
C.bNt.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).iz()},
$S:0}
C.ckN.prototype={
$0(){return this.a.d=null},
$S:0}
C.ckO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ckL.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aF4(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aF4(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.ala(A.T(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.akr)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b_D(A.q(t)))
v=A.cLB(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:138}
C.ckM.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oP
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.ala(A.T(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.a3(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1369}
C.ckP.prototype={
$0(){return A.ai(this.a).ad(null)},
$S:0}
C.ckQ.prototype={
$0(){return A.ai(this.a).ad(null)},
$S:0}
C.cw4.prototype={
$0(){return A.ai(this.a).ad(null)},
$S:0}
C.cw5.prototype={
$0(){return A.ai(this.a).ad(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dHp","dzF",4)
var u
w(u=C.ac1.prototype,"gal_","RH",0)
v(u,"gbaf","a5f",3)
w(u,"gaZy","Ds",0)
w(u,"gb97","aoH",1)
w(u,"gaZx","akZ",1)
w(C.afN.prototype,"gaZz","IY",0)})();(function inheritance(){var x=a.inheritMany
x(A.J,[C.avs,C.a62,C.aya,C.FW])
x(A.bw,[C.cIZ,C.bNz,C.bNA,C.bNx,C.bNj,C.bNo,C.ckL])
x(A.H,[C.ajm,C.H_,C.wp,C.we,C.aP1])
x(A.G,[C.FX,C.Dc,C.Fg])
x(A.Z,[C.aOl,C.ac1,C.afN])
x(A.bQ,[C.cui,C.cuj,C.cup,C.cuo,C.cun,C.cum,C.cuk,C.cul,C.bLn,C.bNs,C.bNl,C.bNm,C.bNn,C.bNy,C.bNr,C.bNv,C.bNw,C.bNh,C.bNi,C.bNk,C.bNq,C.bNp,C.bNt,C.ckN,C.ckO,C.ckM,C.ckP,C.ckQ,C.cw4,C.cw5])
x(A.cO,[C.cuq,C.bNB,C.bNu])})()
A.bn(b.typeUniverse,JSON.parse('{"ajm":{"H":[],"e":[],"f":[]},"H_":{"H":[],"e":[],"f":[]},"FX":{"G":[],"e":[],"f":[]},"aOl":{"Z":["FX"]},"wp":{"H":[],"e":[],"f":[]},"we":{"H":[],"e":[],"f":[]},"Dc":{"G":[],"e":[],"f":[]},"ac1":{"Z":["Dc"]},"Fg":{"G":[],"e":[],"f":[]},"afN":{"Z":["Fg"]},"aP1":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),E:x("r<aya>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("df"),K:x("J"),y:x("a62"),m:x("tE"),k:x("+(c,bx)"),R:x("+at,result(ad?,c)"),u:x("+error,request(c?,avs?)"),A:x("FW"),N:x("c"),v:x("aO<FW>"),q:x("dm"),x:x("x"),z:x("@"),g:x("t<@>?"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.KG=new A.bc(B.fp,0.5,B.aj,-1)
D.afQ=new A.dS(D.KG,B.ab,B.ab,B.ab)
D.KU=new A.M(null,null,D.afQ,null,null,null,B.y)
D.akr=new A.Dh("invalid_state")
D.atc=new A.a0(14,18,14,18)
D.aun=new A.a0(20,8,20,20)
D.aD0=new A.aV(61109,"MaterialIcons",null,!0)
D.aEr=new A.b7(D.aD0,22,B.A,null,null,null)
D.aFU=new A.dJ(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.by,null,null,B.by,B.by,!0,null,null,null,null)
D.bYJ=new A.ix(40,40,20,B.t,0,null)
D.bYB=new A.ix(null,32,12,B.t,1,null)
D.aAF=new A.bP(1,B.aw,D.bYB,null)
D.bxr=x([D.bYJ,B.af,D.aAF],y.p)
D.bUO=new A.me(B.bw,B.h,B.l,B.w,null,B.u,null,0,D.bxr,null)
D.bYE=new A.ix(null,120,22,B.t,1,null)
D.bYI=new A.ix(null,56,22,B.t,2,null)
D.bYK=new A.ix(null,52,26,B.t,2,null)
D.aJ8=x([D.bUO,B.bs,D.bYE,B.R,D.bYI,B.a1,D.bYK],y.p)
D.byj=x(["1","2","3"],y.s)
D.bx_=x(["4","5","6"],y.s)
D.buQ=x(["7","8","9"],y.s)
D.b7r=x(["00","0","del"],y.s)
D.bCX=x([D.byj,D.bx_,D.buQ,D.b7r],A.w("r<t<c>>"))
D.a2A=new C.a62("error",null,"",0,null)
D.bRN=new A.a3("Cancelado",!1)
D.bRU=new A.a3("Expirou",!1)
D.bT6=new A.a3("\xc0 espera\u2026",!1)
D.bTA=new A.bW(I.lT,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bU3=new A.bW(B.hD,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bUg=new A.bW(B.kG,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bUi=new A.bW(B.Er,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bzU=x([],y.E)
D.Hr=new C.FW("error",null,null,null,D.bzU,"entry",null)
D.avo=new A.nv(B.jE,150,3,null,null)
D.ak3=new A.fw(B.L,null,null,D.avo,null)
D.bYq=new A.c1(null,214,D.ak3,null)
D.bZ6=new A.vW(!1,3,!1,null)
D.c20=new A.P(!0,B.A,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6a=new A.P(!0,B.A,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8W=new A.C("Quem \xe9",null,B.hj,null,null,null,null,null,null,null,null)
D.cbf=new A.C("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.ccZ=new A.C("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mz,null,null,null,null,null,null,null,null)
D.cdi=new A.C("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.ceF=new A.C("O qu\xea",null,B.P,null,null,null,null,null,null,null,null)
D.cff=new A.C("Cobrar",null,B.l_,null,null,null,null,null,null,null,null)
D.cfx=new A.C("Ver perfil",null,K.tl,null,null,null,null,null,null,null,null)
D.cfF=new A.C("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cgb=new A.C("Leste o QR agora",null,B.P,null,null,null,null,null,null,null,null)
D.cgh=new A.C("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.chy=new A.C("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.ci3=new A.C("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cib=new A.C("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.cqq=new C.wp("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cqr=new C.wp("Verificado",!0,null)
D.ady=new C.wp("Por registar",!1,null)
D.cqt=new C.wp("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dS6","cS5",()=>{var w=A.X(16)
return A.dlG(A.bz(B.fp,0.5),w,null,B.t,null,null,B.y)})})()};
(a=>{a["ZHtaGSIpMBhQ4XQTB/ynyMPhR84="]=a.current})($__dart_deferred_initializers__);