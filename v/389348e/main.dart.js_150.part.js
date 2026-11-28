((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cIn(d,e){return C.dIT(d,e)},
dIT(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cIn=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cIn)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.d4(A.q(J.i(s,"expires_at")))
p=p==null?null:p.dM()
if(p==null)p=new A.ac(Date.now(),0,!1).el(6e8)
v=new A.YT(null,new C.avv(r,q,p))
x=1
break}r=r.b(s)?A.q(J.i(s,"result")):"error"
v=new A.YT(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.YT("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cIn,w)},
cHz(d){return C.dIc(d)},
dIc(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHz=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aK("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cHz)
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
return A.m($async$cHz,w)},
dKL(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.Mf(0,"pay-request-"+d,B.ys).O9(new C.cKr(e),B.GQ,new G.Ft(H.yf,"id",d),"public","pay_requests").Q3(0)},
cNb(d){return C.dLZ(d)},
dLZ(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cNb=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cNb)
case 7:s=f
if(!y.f.b(s)){v=D.a25
x=1
break}r=A.q(J.i(s,"result"))
q=A.C(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.q(p==null?"":p)
o=A.aF(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.i(s,"description"))
v=new C.a6a(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a25
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cNb,w)},
alc(d){return C.dJh(d)},
dJh(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$alc=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f4("event-pay",d),$async$alc)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.h_(r,o,n):A.R(["error","unknown_error"],o,n)
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
o=y.f.b(p)?J.h_(p,o,n):A.R(["error","unknown_error"],o,n)
v=o
x=1
break}else{o=A.R(["error","network"],y.N,y.z)
v=o
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$alc,w)},
avv:function avv(d,e,f){this.a=d
this.b=e
this.c=f},
cKr:function cKr(d){this.a=d},
a6a:function a6a(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cRr(d){return C.dMC(d)},
dMC(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cRr=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aK("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cRr)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.Ha
x=1
break}o=A.q(J.i(s,"result"))
n=A.C(J.i(s,"scan_id"))
m=A.C(J.i(s,"name"))
l=A.C(J.i(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.i(s,"items"))
j=J.ar(j==null?B.ak:j)
while(j.t()){q=j.gE(j)
if(p.b(q)){i=q
h=J.a7(i)
g=h.h(i,"ticket")
f=A.q(h.h(i,"kind"))
e=A.q(h.h(i,"wedding_id"))
d=A.C(h.h(i,"booking_id"))
a0=h.h(i,"event")
a0=A.q(a0==null?"Evento":a0)
a1=h.h(i,"date")
a1=A.d4(A.q(a1==null?"":a1))
a2=A.C(h.h(i,"booking_number"))
a3=A.aF(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.C(J.i(g,"status")):null
if(a5){a5=A.aF(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.d4(A.q(a7==null?"":a7))
a7=a7==null?null:a7.dM()
J.o(h.h(i,"can_charge"),!0)
J.bt(r,new C.ayd(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dK(p)
p=p===!0?"entry":"profile"}k=A.C(J.i(s,"profile_id"))
v=new C.FV(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cT){v=D.Ha
x=1
break}else{v=D.Ha
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cRr,w)},
aVo(d,e){return C.dMB(d,e)},
dMB(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVo=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aK("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVo)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aK("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVo)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YR(null,"error")
x=1
break}r=A.q(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d4(A.q(q==null?"":q))
q=q==null?null:q.dM()
v=new A.YR(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YR(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVo,w)},
ayd:function ayd(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
FV:function FV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cZe(d){return B.f.aV(B.j.k(A.ic(d)),2,"0")+":"+B.f.aV(B.j.k(A.hY(d)),2,"0")},
d7Z(d){return new C.FW(d,null)},
dnM(){return new C.Dc(null)},
dus(d){return new C.Ff(d,null)},
dBw(d){var x
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
default:x=A.aVb(d)
break}return x},
dBy(d){var x
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
dBx(d){var x
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
ajq:function ajq(d,e){this.c=d
this.a=e},
H_:function H_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FW:function FW(d,e){this.c=d
this.a=e},
aOe:function aOe(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cvW:function cvW(d,e){this.a=d
this.b=e},
cvX:function cvX(d,e,f){this.a=d
this.b=e
this.c=f},
cw3:function cw3(d){this.a=d},
cw2:function cw2(d){this.a=d},
cw1:function cw1(d){this.a=d},
cw0:function cw0(d){this.a=d},
cw_:function cw_(d,e){this.a=d
this.b=e},
cvY:function cvY(d,e,f){this.a=d
this.b=e
this.c=f},
cvZ:function cvZ(d){this.a=d},
wl:function wl(d,e,f){this.c=d
this.d=e
this.a=f},
wa:function wa(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bM4:function bM4(){},
Dc:function Dc(d){this.a=d},
acb:function acb(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bOd:function bOd(d,e){this.a=d
this.b=e},
bO6:function bO6(d){this.a=d},
bO7:function bO7(d){this.a=d},
bO8:function bO8(d,e){this.a=d
this.b=e},
bOk:function bOk(d,e){this.a=d
this.b=e},
bOj:function bOj(){},
bOl:function bOl(d,e){this.a=d
this.b=e},
bOc:function bOc(d,e){this.a=d
this.b=e},
bOi:function bOi(d){this.a=d},
bOg:function bOg(d){this.a=d},
bOh:function bOh(d,e){this.a=d
this.b=e},
bO4:function bO4(){},
bO2:function bO2(d){this.a=d},
bO3:function bO3(d){this.a=d},
bO5:function bO5(d){this.a=d},
bOb:function bOb(d){this.a=d},
bOm:function bOm(d){this.a=d},
bO9:function bO9(d){this.a=d},
bOa:function bOa(d,e){this.a=d
this.b=e},
bOf:function bOf(){},
bOe:function bOe(d){this.a=d},
Ff:function Ff(d,e){this.c=d
this.a=e},
afV:function afV(){this.c=this.a=this.d=null},
cmb:function cmb(d){this.a=d},
cmc:function cmc(d,e){this.a=d
this.b=e},
cm9:function cm9(d){this.a=d},
cma:function cma(d){this.a=d},
cmd:function cmd(d){this.a=d},
cme:function cme(d){this.a=d},
aOV:function aOV(d,e,f){this.c=d
this.d=e
this.a=f},
cxI:function cxI(d){this.a=d},
cxJ:function cxJ(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[87]
G=c[122]
H=c[242]
C=a.updateHolder(c[14],C)
D=c[281]
I=c[234]
K=c[244]
F=c[282]
L=c[56]
M=c[284]
N=c[283]
C.avv.prototype={}
C.a6a.prototype={}
C.ayd.prototype={}
C.FV.prototype={
gar(d){return this.c}}
C.ajq.prototype={
u(d){var x=null
return A.y(x,this.c,B.r,x,x,$.cTR(),x,x,x,B.cP,x,x,x)}}
C.H_.prototype={
u(d){var x=null,w=A.a([A.a5(A.h(this.c,x,x,x,x,B.ce,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bB,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.y(x,A.O(w,B.v,B.h,B.l,0,x),B.r,x,x,D.Kw,x,x,x,B.dX,x,x,x)}}
C.FW.prototype={
R(){return new C.aOe(A.E(y.N,y.R))}}
C.aOe.prototype={
L4(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$L4=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cRr(u.a.c),$async$L4)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ae(t).Gx("/u/"+A.q(s),null,y.X)
v=new A.aN($.aT,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$L4,w)},
a4x(d,e){var x=e.c
return x==null?"e"+e.b:x},
RD(d,e){return this.aV7(d,e)},
aV7(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$RD=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cvW(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVo(t,e),$async$RD)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cvX(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$RD,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.L4()
return A.cP(null,B.bx,A.bD(!0,A.b7M(new C.cw3(x),w,y.A),null,B.a_,!0),!0,null)},
bdQ(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bTb
break
case"own_code":x=D.bTo
break
case"not_found":x=D.bSI
break
default:x=D.bTq
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
q=A.a([B.kR,A.b5(r,o?B.V:B.fN,p,p,96),B.a0,A.h(v,p,p,p,p,B.hj,B.a4,p,p),B.R,A.h(u,p,p,p,p,D.c50,B.a4,p,p)],x)
if(o)B.e.n(q,A.a([B.cS,A.bE(B.tl,new C.cw1(this),p)],x))
return q},
bda(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.ci(r,44,d.d,!1,!0,s),B.ad,A.a5(A.A(A.a([A.h(r,s,s,s,s,B.is,s,s,s),D.cf5],x),B.G,B.h,B.l),1),B.ae,D.coY],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.Q,new A.d_(B.bc,s,s,A.aH(A.hh(D.ces,new C.cw_(this,d),A.fP(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bQ,s,B.ab,B.c8,s,s,s,s)),36,s),s)],x))
w=A.a([new C.ajq(A.A(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bE,D.cbN],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b6Y(0,d,v[t]))
return w},
b6Y(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a4x(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
s=i}i=A.h(k?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",n,n,n,n,B.aK,n,n,n)
x=y.p
r=A.a([A.h(f.d,n,n,n,n,B.is,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.qh,A.h(B.du[A.fG(q)-1]+", "+A.ay(q)+" "+B.bh[A.an(q)-1],n,n,n,n,B.M,n,n,n),n))
r.push(B.ac)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H_("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H_("Pessoas",A.q(p),n,n))
q.push(new C.H_("Chegada",n,v?new C.wl("Registada \xe0s "+C.cZe(w),!0,n):D.acO,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wl(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cp_
p=v?new C.wl("Registada \xe0s "+C.cZe(w),!0,n):D.acO
B.e.n(r,A.a([new C.H_("Bilhete",n,q,n),new C.H_("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.ls,A.h(t,n,n,n,n,B.zb,n,n,n),n))
i=A.a([B.bE,i,B.aq,new C.ajq(A.A(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.Q)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cvY(o,e,f):n
if(r===m)r=B.yS
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kW,n,n,n)
t.push(A.a5(A.aH(A.bE(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.af)
x.push(A.a5(A.aH(A.hh(D.ce8,new C.cvZ(o),A.fP(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.ab,B.c8,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.v,B.h,B.l,0,n))
return i}}
C.wl.prototype={
u(d){var x=null,w=this.d,v=w?B.cy:B.dV,u=A.W(999)
return A.y(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?B.cX:B.cp,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.K(v,x,x,u,x,x,B.x),x,x,x,B.dp,x,x,x)}}
C.wa.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mg:A.h(x.c,w,w,w,w,B.eK,w,w,w)
if(x.e)v=A.hh(u,x.d,A.fP(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c8,w,w,w,w))
else{v=v?new C.bM4():x.d
v=A.bE(u,v,A.cj(B.z,B.z.cd(0.35),B.t,B.t,w,w,B.ab,w,w,w))}return A.aH(v,52,1/0)}}
C.Dc.prototype={
R(){return new C.acb(new A.aE(B.aj,$.aa()))}}
C.acb.prototype={
m(){this.V0()
var x=this.e
x.Y$=$.aa()
x.W$=0
this.a6()},
V0(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yg(v)}w.y=null
v=w.z
if(v!=null)v.aN(0)
v=w.Q
if(v!=null)v.aN(0)},
bdM(d){this.p(new C.bOd(this,d))},
RE(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$RE=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bO6(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cIn(s,t.length===0?null:t),$async$RE)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bO7(u))
q=r.b
if(q==null){s=r.a
v=u.biZ(s==null?"error":s)
x=1
break}u.p(new C.bO8(u,q))
u.bmy(q)
case 1:return A.l(v,w)}})
return A.m($async$RE,w)},
bmy(d){var x=this
x.V0()
x.y=C.dKL(d.a,x.gb9Y())
x.z=A.u5(B.fR,new C.bOk(x,d))
x.Q=A.u5(B.uW,new C.bOl(x,d))},
a5d(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bOc(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aN(0)
x=w.Q
if(x!=null)x.aN(0)}},
biZ(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fR(!0,new C.bOi(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a2(A.c0(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Dl(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dl=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fR(!0,new C.bO4(),t,y.x),$async$Dl)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHz(s.a),$async$Dl)
case 6:if(u.c==null){x=1
break}case 4:u.V0()
u.p(new C.bO5(u))
case 1:return A.l(v,w)}})
return A.m($async$Dl,w)},
aoM(){this.V0()
this.p(new C.bOb(this))},
al1(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dl()
else w.aoM()
else{x=w.c
x.toString
A.am(x,!1).iw()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pU(B.lD,x.gaZp(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hj,w,w,w)
return A.bo4(u,A.cP(w,B.bx,A.bD(!0,new A.S(D.atB,A.A(A.a([new A.d_(B.bc,w,w,t,w),B.Q,s,B.bE,A.a5(u?x.b76():x.beb(v),1)],y.p),B.E,B.h,B.l),w),w,B.a_,!0),!0,w),new C.bOm(x),y.K)},
b76(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bO9(o),j=$.cTR(),i=y.p
j=A.y(n,A.A(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.M,B.a4,n,n),B.ac,A.ba(n,n,n,A.h(E.cIH(m),n,n,n,n,D.c0Y,n,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a3,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.ass,n,n,n)
m=A.W(999)
x=A.bA(B.fo,0.5)
m=A.a([j,B.ac,A.y(n,A.O(A.a([D.cdz,B.af,A.a5(A.cr(n,B.a6,!1,n,!0,B.y,n,A.cs(),o.e,n,n,n,n,n,2,D.aF9,B.W,!0,n,!0,n,!1,n,B.aC,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.ao,n,n,n,n,n,n,n,n,n,n,n,B.kV,!0,B.at,n,B.hd,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.K(B.t,n,x,m,n,n,B.x),n,44,n,B.bQ,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bC5[w]
x=B.e.gL(v)==="1"?16:10
u=A.a([],i)
for(t=A.eU(v,0,j),s=J.ar(t.a),r=t.b,t=new A.cg(s,r,A.u(t).i("cg<1>"));t.t();){q=t.c
q=q>=0?new A.a0(r+q,s.gE(s)):A.al(A.c9())
p=A.a([],i)
if(q.a>0)p.push(B.af)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c_(n,x,n,n),A.O(u,B.v,B.h,B.l,0,n)],i))}m=A.a5(A.d6(m,n,B.a_,n,n,!1,!1),1)
j=o.f
return A.A(A.a([m,B.Q,new C.wa("Mostrar o QR para pagar",l?o.gal2():n,!1,j,n)],i),B.E,B.h,B.l)},
beb(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cw(new A.ac(Date.now(),0,!1)).a
x=h<0?0:B.j.aP(h,1e6)
w=""+B.j.aP(x,60)+":"+B.f.aV(B.j.k(B.j.aF(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.a0("Pago \xe0s "+C.cZe(h==null?new A.ac(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bR1
break
case"cancelled":h=D.bQV
break
default:h=D.bSe
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bOf()
q=j.c
q.toString
q=A.nO(q,!1).a1(0,$.b8(),y.D).b
p=q==null?i:q.x
q=$.cTR()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.is,B.a4,i,i))
n.push(new A.S(F.qh,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.M,B.a4,i,i),i))
n.push(B.Q)
if(g)n.push(D.bXk)
else{m=A.W(16)
l=A.bA(B.fo,0.5)
k=f?1:0.15
n.push(A.y(i,A.ff(A.cX4(B.t,A.ke("/pagar/"+d.b),B.GS,B.GT,B.a_,"QR para pagar "+E.cIH(j.d),186),k),B.r,i,i,new A.K(B.t,i,l,m,i,i,B.x),i,i,i,B.cP,i,i,i))}n.push(B.Q)
n.push(A.h(E.cIH(j.d),i,i,i,i,B.hj,i,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.M,B.a4,i,i))
if(f)B.e.n(n,A.a([B.ac,D.coX],o))
q=A.y(i,A.A(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.cP,i,i,i)
n=A.ba(i,i,i,h.$2("Estado",new C.wl(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a3,i)
h=A.a([A.a5(A.d6(A.a([q,B.aB,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bB,i,i,i))],o),i,B.a_,i,i,!1,!1),1),B.Q],o)
if(f)h.push(new C.wa("Cancelar cobran\xe7a",j.gaZq(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wa("Nova cobran\xe7a",j.gb8R(),!1,!1,i),B.ac,new C.wa("Fechar",new C.bOe(j),!0,!1,i)],o))
else h.push(new C.wa("Mostrar outro QR",j.gal2(),!1,j.f,i))
return A.A(h,B.E,B.h,B.l)}}
C.Ff.prototype={
R(){return new C.afV()}}
C.afV.prototype={
ac(){this.ap()
this.IU()},
IU(){var x=0,w=A.n(y.H),v=this,u
var $async$IU=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cmb(v))
x=2
return A.d(C.cNb(v.a.c),$async$IU)
case 2:u=e
if(v.c!=null)v.p(new C.cmc(v,u))
return A.l(null,w)}})
return A.m($async$IU,w)},
aSE(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nM("",d.c,"pay_request",d.d/100,x,x,new C.cm9(this),!1,new C.cma(d),B.VY,x,w,C.dJk(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Uj(this.aSE(t),u)
x=s?"Pagar":C.dBy(t.a)
if(s)s=D.aIk
else{s=t.a
w=y.p
v=A.a([A.bL(A.a2v(s==="paid"?B.iL:B.qq,3,u,120),u,u),B.Q,A.h(C.dBx(s),u,u,u,u,B.hf,B.a4,u,u),B.bj],w)
if(s==="error")B.e.n(v,A.a([new C.wa("Tentar outra vez",this.gaZr(),!1,!1,u),B.ac,new C.wa("Fechar",new C.cmd(d),!0,!1,u)],w))
else v.push(new C.wa("OK",new C.cme(d),!1,!1,u))
s=v}return new C.aOV(x,s,u)}}
C.aOV.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=A.a5(A.cO(B.bw,x,B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxI(d),x,x,x,x,x,x,!1,B.aN),1),u=y.p,t=A.a([A.bL(A.y(x,x,B.r,x,x,new A.K(N.uk,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aB,A.O(A.a([A.a5(A.h(this.c,x,x,x,x,B.bl,x,x,x),1),A.pU(B.el,new C.cxJ(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a0],u)
B.e.n(t,this.d)
return A.fD(!1,B.aG,!0,x,A.A(A.a([v,A.y(x,A.A(t,B.E,B.h,B.J),B.r,x,x,M.Kx,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.iY,B.l),B.r,x,0,x,x,x,x,x,B.eZ)}}
var z=a.updateTypes(["F<~>()","~()","M(N,m3<FV>)","~(c)","c(c)"])
C.cKr.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:136}
C.cvW.prototype={
$0(){var x=this.a
return x.f=x.a4x(0,this.b)},
$S:0}
C.cvX.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4x(0,this.b),this.c)},
$S:0}
C.cw3.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bY0
x=y.p
w=A.a([A.O(A.a([A.pU(B.lD,new C.cw2(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.Q,D.c7K,B.bE],x))
else w.push(B.a0)
x=this.a
if(!v)B.e.n(w,x.bdQ(t))
else B.e.n(w,x.bda(t))
return A.d6(w,u,B.CX,u,u,!1,!1)},
$S:z+2}
C.cw2.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
C.cw1.prototype={
$0(){var x=this.a
return x.p(new C.cw0(x))},
$S:0}
C.cw0.prototype={
$0(){var x=this.a
return x.d=x.L4()},
$S:0}
C.cw_.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).am("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.cvY.prototype={
$0(){return this.a.RD(this.b,this.c)},
$S:0}
C.cvZ.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).am("/cobrar",null,y.X)},
$S:0}
C.bM4.prototype={
$0(){},
$S:0}
C.bOd.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aP(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dN(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bO6.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bO7.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bO8.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bOk.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.fN(new A.ac(Date.now(),0,!1)))x.a5d("expired")
else x.p(new C.bOj())},
$S:66}
C.bOj.prototype={
$0(){},
$S:0}
C.bOl.prototype={
$1(d){return this.aEL(d)},
aEL(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.alc(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a5d("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:449}
C.bOc.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ac(Date.now(),0,!1)},
$S:0}
C.bOi.prototype={
$1(d){var x=null
return new A.eQ(D.ca4,D.ch2,A.a([A.cw(B.mt,x,x,new C.bOg(d),x,x),A.bE(D.cgV,new C.bOh(this.a,d),x)],y.p),x)},
$S:19}
C.bOg.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.bOh.prototype={
$0(){A.am(this.b,!1).bp()
var x=this.a.c
x.toString
A.ae(x).am("/partner-payments/setup",null,y.X)},
$S:0}
C.bO4.prototype={
$1(d){var x=null
return new A.eQ(D.cgq,D.cfc,A.a([A.cw(D.ceA,x,x,new C.bO2(d),x,x),A.bE(D.cc6,new C.bO3(d),x)],y.p),x)},
$S:19}
C.bO2.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.bO3.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.bO5.prototype={
$0(){return this.a.r=null},
$S:0}
C.bOb.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.jt(0,B.jb)},
$S:0}
C.bOm.prototype={
$2(d,e){if(!d)this.a.al1()},
$S:183}
C.bO9.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a5(A.ba(x,!0,x,A.fD(!1,B.aG,!0,x,A.eP(!1,t,!0,A.aH(A.bL(w?D.aDH:A.h(d,x,x,x,x,B.p6,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,new C.bOa(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fI(u,D.Kj),x,x,B.cR),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x),1)},
$S:278}
C.bOa.prototype={
$0(){return this.a.bdM(this.b)},
$S:0}
C.bOf.prototype={
$2(d,e){var x=null
return A.y(x,A.O(A.a([A.a5(A.h(d,x,x,x,x,B.ce,x,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.Kw,x,x,x,B.cm,x,x,x)},
$S:1360}
C.bOe.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).iw()},
$S:0}
C.cmb.prototype={
$0(){return this.a.d=null},
$S:0}
C.cmc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cm9.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aF1(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aF1(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.alc(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.ajH)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b_J(A.q(t)))
v=A.cNc(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:158}
C.cma.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oI
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.alc(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.a0(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1361}
C.cmd.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cme.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cxI.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cxJ.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dJk","dBw",4)
var u
w(u=C.acb.prototype,"gal2","RE",0)
v(u,"gb9Y","a5d",3)
w(u,"gaZq","Dl",0)
w(u,"gb8R","aoM",1)
w(u,"gaZp","al1",1)
w(C.afV.prototype,"gaZr","IU",0)})();(function inheritance(){var x=a.inheritMany
x(A.J,[C.avv,C.a6a,C.ayd,C.FV])
x(A.bw,[C.cKr,C.bOk,C.bOl,C.bOi,C.bO4,C.bO9,C.cm9])
x(A.M,[C.ajq,C.H_,C.wl,C.wa,C.aOV])
x(A.G,[C.FW,C.Dc,C.Ff])
x(A.Y,[C.aOe,C.acb,C.afV])
x(A.bP,[C.cvW,C.cvX,C.cw2,C.cw1,C.cw0,C.cw_,C.cvY,C.cvZ,C.bM4,C.bOd,C.bO6,C.bO7,C.bO8,C.bOj,C.bOc,C.bOg,C.bOh,C.bO2,C.bO3,C.bO5,C.bOb,C.bOa,C.bOe,C.cmb,C.cmc,C.cma,C.cmd,C.cme,C.cxI,C.cxJ])
x(A.cK,[C.cw3,C.bOm,C.bOf])})()
A.br(b.typeUniverse,JSON.parse('{"ajq":{"M":[],"e":[],"f":[]},"H_":{"M":[],"e":[],"f":[]},"FW":{"G":[],"e":[],"f":[]},"aOe":{"Y":["FW"]},"wl":{"M":[],"e":[],"f":[]},"wa":{"M":[],"e":[],"f":[]},"Dc":{"G":[],"e":[],"f":[]},"acb":{"Y":["Dc"]},"Ff":{"G":[],"e":[],"f":[]},"afV":{"Y":["Ff"]},"aOV":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cI"),E:x("r<ayd>"),s:x("r<c>"),p:x("r<e>"),P:x("a6<c,@>"),f:x("a6<@,@>"),w:x("dh"),K:x("J"),y:x("a6a"),m:x("tD"),k:x("+(c,bn)"),R:x("+at,result(ac?,c)"),u:x("+error,request(c?,avv?)"),A:x("FV"),N:x("c"),v:x("aN<FV>"),q:x("dr"),x:x("B"),z:x("@"),g:x("t<@>?"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Kj=new A.bf(B.fo,0.5,B.ai,-1)
D.af3=new A.dO(D.Kj,B.aa,B.aa,B.aa)
D.Kw=new A.K(null,null,D.af3,null,null,null,B.x)
D.ajH=new A.Dh("invalid_state")
D.ass=new A.a3(14,18,14,18)
D.atB=new A.a3(20,8,20,20)
D.aCj=new A.aY(61109,"MaterialIcons",null,!0)
D.aDH=new A.b7(D.aCj,22,B.z,null,null,null)
D.aF9=new A.dB(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bs,null,null,B.bs,B.bs,!0,null,null,null,null)
D.bXD=new A.ix(40,40,20,B.t,0,null)
D.bXv=new A.ix(null,32,12,B.t,1,null)
D.azT=new A.bO(1,B.au,D.bXv,null)
D.bwA=x([D.bXD,B.ad,D.azT],y.p)
D.bTR=new A.mk(B.bC,B.h,B.l,B.v,null,B.c2,null,0,D.bwA,null)
D.bXy=new A.ix(null,120,22,B.t,1,null)
D.bXC=new A.ix(null,56,22,B.t,2,null)
D.bXE=new A.ix(null,52,26,B.t,2,null)
D.aIk=x([D.bTR,B.bE,D.bXy,B.Q,D.bXC,B.a0,D.bXE],y.p)
D.bxs=x(["1","2","3"],y.s)
D.bw8=x(["4","5","6"],y.s)
D.btZ=x(["7","8","9"],y.s)
D.b6D=x(["00","0","del"],y.s)
D.bC5=x([D.bxs,D.bw8,D.btZ,D.b6D],A.w("r<t<c>>"))
D.a25=new C.a6a("error",null,"",0,null)
D.bQV=new A.a0("Cancelado",!1)
D.bR1=new A.a0("Expirou",!1)
D.bSe=new A.a0("\xc0 espera\u2026",!1)
D.bSI=new A.bV(I.kB,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bTb=new A.bV(B.hA,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTo=new A.bV(B.kA,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTq=new A.bV(B.E8,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bz4=x([],y.E)
D.Ha=new C.FV("error",null,null,null,D.bz4,"entry",null)
D.auD=new A.nw(B.iL,150,3,null,null)
D.ajh=new A.f8(B.K,null,null,D.auD,null)
D.bXk=new A.c_(null,214,D.ajh,null)
D.bY0=new A.vT(!1,3,!1,null)
D.c0Y=new A.P(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c50=new A.P(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7K=new A.D("Quem \xe9",null,B.hj,null,null,null,null,null,null,null,null)
D.ca4=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cbN=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mp,null,null,null,null,null,null,null,null)
D.cc6=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.cdz=new A.D("O qu\xea",null,B.M,null,null,null,null,null,null,null,null)
D.ce8=new A.D("Cobrar",null,B.kW,null,null,null,null,null,null,null,null)
D.ces=new A.D("Ver perfil",null,K.t9,null,null,null,null,null,null,null,null)
D.ceA=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cf5=new A.D("Leste o QR agora",null,B.M,null,null,null,null,null,null,null,null)
D.cfc=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.cgq=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.cgV=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.ch2=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.coX=new C.wl("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.coY=new C.wl("Verificado",!0,null)
D.acO=new C.wl("Por registar",!1,null)
D.cp_=new C.wl("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dU9","cTR",()=>{var w=A.W(16)
return A.dnv(A.bA(B.fo,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["HyBhYEnCsnN1VSOHeQGJFvGwmLo="]=a.current})($__dart_deferred_initializers__);