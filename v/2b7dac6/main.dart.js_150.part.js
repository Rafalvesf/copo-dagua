((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cIh(d,e){return C.dIN(d,e)},
dIN(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cIh=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cIh)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.d2(A.q(J.i(s,"expires_at")))
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
return A.m($async$cIh,w)},
cHt(d){return C.dI6(d)},
dI6(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHt=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aK("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cHt)
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
return A.m($async$cHt,w)},
dKF(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.Me(0,"pay-request-"+d,B.yr).O8(new C.cKl(e),B.GQ,new G.Fs(H.ye,"id",d),"public","pay_requests").Q2(0)},
cN5(d){return C.dLT(d)},
dLT(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cN5=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cN5)
case 7:s=f
if(!y.f.b(s)){v=D.a26
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
v=D.a26
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cN5,w)},
alc(d){return C.dJb(d)},
dJb(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
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
if(o instanceof A.pj){q=o
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
cKl:function cKl(d){this.a=d},
a6a:function a6a(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cRl(d){return C.dMw(d)},
dMw(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cRl=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aK("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cRl)
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
a1=A.d2(A.q(a1==null?"":a1))
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
a7=A.d2(A.q(a7==null?"":a7))
a7=a7==null?null:a7.dM()
J.o(h.h(i,"can_charge"),!0)
J.bt(r,new C.ayd(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dK(p)
p=p===!0?"entry":"profile"}k=A.C(J.i(s,"profile_id"))
v=new C.FU(o,n,m,l,r,p,k)
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
return A.m($async$cRl,w)},
aVn(d,e){return C.dMv(d,e)},
dMv(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVn=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aK("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVn)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aK("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVn)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YR(null,"error")
x=1
break}r=A.q(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d2(A.q(q==null?"":q))
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
return A.m($async$aVn,w)},
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
FU:function FU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cZ8(d){return B.f.aV(B.j.k(A.ic(d)),2,"0")+":"+B.f.aV(B.j.k(A.hZ(d)),2,"0")},
d7T(d){return new C.FV(d,null)},
dnF(){return new C.Dc(null)},
dul(d){return new C.Fe(d,null)},
dBq(d){var x
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
dBs(d){var x
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
dBr(d){var x
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
GZ:function GZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FV:function FV(d,e){this.c=d
this.a=e},
aOe:function aOe(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cvQ:function cvQ(d,e){this.a=d
this.b=e},
cvR:function cvR(d,e,f){this.a=d
this.b=e
this.c=f},
cvY:function cvY(d){this.a=d},
cvX:function cvX(d){this.a=d},
cvW:function cvW(d){this.a=d},
cvV:function cvV(d){this.a=d},
cvU:function cvU(d,e){this.a=d
this.b=e},
cvS:function cvS(d,e,f){this.a=d
this.b=e
this.c=f},
cvT:function cvT(d){this.a=d},
wk:function wk(d,e,f){this.c=d
this.d=e
this.a=f},
w9:function w9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bM3:function bM3(){},
Dc:function Dc(d){this.a=d},
acb:function acb(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bOc:function bOc(d,e){this.a=d
this.b=e},
bO5:function bO5(d){this.a=d},
bO6:function bO6(d){this.a=d},
bO7:function bO7(d,e){this.a=d
this.b=e},
bOj:function bOj(d,e){this.a=d
this.b=e},
bOi:function bOi(){},
bOk:function bOk(d,e){this.a=d
this.b=e},
bOb:function bOb(d,e){this.a=d
this.b=e},
bOh:function bOh(d){this.a=d},
bOf:function bOf(d){this.a=d},
bOg:function bOg(d,e){this.a=d
this.b=e},
bO3:function bO3(){},
bO1:function bO1(d){this.a=d},
bO2:function bO2(d){this.a=d},
bO4:function bO4(d){this.a=d},
bOa:function bOa(d){this.a=d},
bOl:function bOl(d){this.a=d},
bO8:function bO8(d){this.a=d},
bO9:function bO9(d,e){this.a=d
this.b=e},
bOe:function bOe(){},
bOd:function bOd(d){this.a=d},
Fe:function Fe(d,e){this.c=d
this.a=e},
afV:function afV(){this.c=this.a=this.d=null},
cm5:function cm5(d){this.a=d},
cm6:function cm6(d,e){this.a=d
this.b=e},
cm3:function cm3(d){this.a=d},
cm4:function cm4(d){this.a=d},
cm7:function cm7(d){this.a=d},
cm8:function cm8(d){this.a=d},
aOV:function aOV(d,e,f){this.c=d
this.d=e
this.a=f},
cxC:function cxC(d){this.a=d},
cxD:function cxD(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[87]
G=c[122]
H=c[242]
C=a.updateHolder(c[14],C)
D=c[280]
I=c[234]
K=c[244]
F=c[281]
L=c[56]
M=c[283]
N=c[282]
C.avv.prototype={}
C.a6a.prototype={}
C.ayd.prototype={}
C.FU.prototype={
gar(d){return this.c}}
C.ajq.prototype={
u(d){var x=null
return A.x(x,this.c,B.r,x,x,$.cTL(),x,x,x,B.cP,x,x,x)}}
C.GZ.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.ce,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bC,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.x(x,A.O(w,B.v,B.h,B.l,0,x),B.r,x,x,D.Kx,x,x,x,B.dX,x,x,x)}}
C.FV.prototype={
R(){return new C.aOe(A.E(y.N,y.R))}}
C.aOe.prototype={
L3(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$L3=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cRl(u.a.c),$async$L3)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ae(t).Gw("/u/"+A.q(s),null,y.X)
v=new A.aN($.aT,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$L3,w)},
a4v(d,e){var x=e.c
return x==null?"e"+e.b:x},
RC(d,e){return this.aV6(d,e)},
aV6(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$RC=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cvQ(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVn(t,e),$async$RC)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cvR(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$RC,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.L3()
return A.cP(null,B.by,A.bD(!0,A.b7L(new C.cvY(x),w,y.A),null,B.a_,!0),!0,null)},
bdO(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bTe
break
case"own_code":x=D.bTr
break
case"not_found":x=D.bSL
break
default:x=D.bTt
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
q=A.a([B.kQ,A.b5(r,o?B.V:B.fN,p,p,96),B.a0,A.h(v,p,p,p,p,B.hj,B.a4,p,p),B.R,A.h(u,p,p,p,p,D.c53,B.a4,p,p)],x)
if(o)B.e.n(q,A.a([B.cS,A.bE(B.tk,new C.cvW(this),p)],x))
return q},
bd8(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.ci(r,44,d.d,!1,!0,s),B.ad,A.a4(A.A(A.a([A.h(r,s,s,s,s,B.iq,s,s,s),D.cf8],x),B.G,B.h,B.l),1),B.ae,D.cp2],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.Q,new A.d3(B.bf,s,s,A.aH(A.hh(D.cev,new C.cvU(this,d),A.fP(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bQ,s,B.ab,B.c8,s,s,s,s)),36,s),s)],x))
w=A.a([new C.ajq(A.A(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bx,D.cbQ],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b6W(0,d,v[t]))
return w},
b6W(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a4v(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
r=A.a([A.h(f.d,n,n,n,n,B.iq,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.qh,A.h(B.dt[A.fG(q)-1]+", "+A.ay(q)+" "+B.bk[A.ao(q)-1],n,n,n,n,B.M,n,n,n),n))
r.push(B.ac)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.GZ("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.GZ("Pessoas",A.q(p),n,n))
q.push(new C.GZ("Chegada",n,v?new C.wk("Registada \xe0s "+C.cZ8(w),!0,n):D.acP,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wk(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cp4
p=v?new C.wk("Registada \xe0s "+C.cZ8(w),!0,n):D.acP
B.e.n(r,A.a([new C.GZ("Bilhete",n,q,n),new C.GZ("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.lt,A.h(t,n,n,n,n,B.za,n,n,n),n))
i=A.a([B.bx,i,B.aq,new C.ajq(A.A(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.Q)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cvS(o,e,f):n
if(r===m)r=B.yR
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kV,n,n,n)
t.push(A.a4(A.aH(A.bE(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ag)
x.push(A.a4(A.aH(A.hh(D.ceb,new C.cvT(o),A.fP(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.ab,B.c8,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.v,B.h,B.l,0,n))
return i}}
C.wk.prototype={
u(d){var x=null,w=this.d,v=w?B.cy:B.dV,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?B.cX:B.cp,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.K(v,x,x,u,x,x,B.x),x,x,x,B.dp,x,x,x)}}
C.w9.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mh:A.h(x.c,w,w,w,w,B.eK,w,w,w)
if(x.e)v=A.hh(u,x.d,A.fP(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c8,w,w,w,w))
else{v=v?new C.bM3():x.d
v=A.bE(u,v,A.cj(B.z,B.z.cd(0.35),B.t,B.t,w,w,B.ab,w,w,w))}return A.aH(v,52,1/0)}}
C.Dc.prototype={
R(){return new C.acb(new A.aE(B.aj,$.aa()))}}
C.acb.prototype={
m(){this.UZ()
var x=this.e
x.Y$=$.aa()
x.W$=0
this.a6()},
UZ(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yg(v)}w.y=null
v=w.z
if(v!=null)v.aN(0)
v=w.Q
if(v!=null)v.aN(0)},
bdK(d){this.p(new C.bOc(this,d))},
RD(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$RD=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bO5(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cIh(s,t.length===0?null:t),$async$RD)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bO6(u))
q=r.b
if(q==null){s=r.a
v=u.biX(s==null?"error":s)
x=1
break}u.p(new C.bO7(u,q))
u.bmw(q)
case 1:return A.l(v,w)}})
return A.m($async$RD,w)},
bmw(d){var x=this
x.UZ()
x.y=C.dKF(d.a,x.gb9W())
x.z=A.u5(B.fR,new C.bOj(x,d))
x.Q=A.u5(B.uV,new C.bOk(x,d))},
a5b(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bOb(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aN(0)
x=w.Q
if(x!=null)x.aN(0)}},
biX(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fR(!0,new C.bOh(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a1(A.c0(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Dl(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dl=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fR(!0,new C.bO3(),t,y.x),$async$Dl)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHt(s.a),$async$Dl)
case 6:if(u.c==null){x=1
break}case 4:u.UZ()
u.p(new C.bO4(u))
case 1:return A.l(v,w)}})
return A.m($async$Dl,w)},
aoK(){this.UZ()
this.p(new C.bOa(this))},
al_(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dl()
else w.aoK()
else{x=w.c
x.toString
A.am(x,!1).iw()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pT(B.lE,x.gaZo(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hj,w,w,w)
return A.bo3(u,A.cP(w,B.by,A.bD(!0,new A.S(D.atB,A.A(A.a([new A.d3(B.bf,w,w,t,w),B.Q,s,B.bx,A.a4(u?x.b74():x.be9(v),1)],y.p),B.E,B.h,B.l),w),w,B.a_,!0),!0,w),new C.bOl(x),y.K)},
b74(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bO8(o),j=$.cTL(),i=y.p
j=A.x(n,A.A(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.M,B.a4,n,n),B.ac,A.ba(n,n,n,A.h(E.cIB(m),n,n,n,n,D.c10,n,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a3,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.ass,n,n,n)
m=A.W(999)
x=A.bA(B.fo,0.5)
m=A.a([j,B.ac,A.x(n,A.O(A.a([D.cdC,B.ag,A.a4(A.cr(n,B.a6,!1,n,!0,B.y,n,A.cs(),o.e,n,n,n,n,n,2,D.aF6,B.W,!0,n,!0,n,!1,n,B.aC,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.ao,n,n,n,n,n,n,n,n,n,n,n,B.kU,!0,B.at,n,B.hd,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.K(B.t,n,x,m,n,n,B.x),n,44,n,B.bQ,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bC6[w]
x=B.e.gL(v)==="1"?16:10
u=A.a([],i)
for(t=A.eU(v,0,j),s=J.ar(t.a),r=t.b,t=new A.cg(s,r,A.u(t).i("cg<1>"));t.t();){q=t.c
q=q>=0?new A.a0(r+q,s.gE(s)):A.al(A.c9())
p=A.a([],i)
if(q.a>0)p.push(B.ag)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c_(n,x,n,n),A.O(u,B.v,B.h,B.l,0,n)],i))}m=A.a4(A.d5(m,n,B.a_,n,n,!1,!1),1)
j=o.f
return A.A(A.a([m,B.Q,new C.w9("Mostrar o QR para pagar",l?o.gal0():n,!1,j,n)],i),B.E,B.h,B.l)},
be9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cH(new A.ac(Date.now(),0,!1)).a
x=h<0?0:B.j.aP(h,1e6)
w=""+B.j.aP(x,60)+":"+B.f.aV(B.j.k(B.j.aF(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.a0("Pago \xe0s "+C.cZ8(h==null?new A.ac(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bR4
break
case"cancelled":h=D.bQY
break
default:h=D.bSh
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bOe()
q=j.c
q.toString
q=A.nO(q,!1).a0(0,$.b8(),y.D).b
p=q==null?i:q.x
q=$.cTL()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.iq,B.a4,i,i))
n.push(new A.S(F.qh,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.M,B.a4,i,i),i))
n.push(B.Q)
if(g)n.push(D.bXn)
else{m=A.W(16)
l=A.bA(B.fo,0.5)
k=f?1:0.15
n.push(A.x(i,A.ff(A.cWZ(B.t,A.kd("/pagar/"+d.b),B.GS,B.GT,B.a_,"QR para pagar "+E.cIB(j.d),186),k),B.r,i,i,new A.K(B.t,i,l,m,i,i,B.x),i,i,i,B.cP,i,i,i))}n.push(B.Q)
n.push(A.h(E.cIB(j.d),i,i,i,i,B.hj,i,i,i))
n.push(B.aV)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.M,B.a4,i,i))
if(f)B.e.n(n,A.a([B.ac,D.cp1],o))
q=A.x(i,A.A(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.cP,i,i,i)
n=A.ba(i,i,i,h.$2("Estado",new C.wk(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a3,i)
h=A.a([A.a4(A.d5(A.a([q,B.aB,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bC,i,i,i))],o),i,B.a_,i,i,!1,!1),1),B.Q],o)
if(f)h.push(new C.w9("Cancelar cobran\xe7a",j.gaZp(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.w9("Nova cobran\xe7a",j.gb8P(),!1,!1,i),B.ac,new C.w9("Fechar",new C.bOd(j),!0,!1,i)],o))
else h.push(new C.w9("Mostrar outro QR",j.gal0(),!1,j.f,i))
return A.A(h,B.E,B.h,B.l)}}
C.Fe.prototype={
R(){return new C.afV()}}
C.afV.prototype={
ac(){this.ap()
this.IT()},
IT(){var x=0,w=A.n(y.H),v=this,u
var $async$IT=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cm5(v))
x=2
return A.d(C.cN5(v.a.c),$async$IT)
case 2:u=e
if(v.c!=null)v.p(new C.cm6(v,u))
return A.l(null,w)}})
return A.m($async$IT,w)},
aSD(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nM("",d.c,"pay_request",d.d/100,x,x,new C.cm3(this),!1,new C.cm4(d),B.VZ,x,w,C.dJe(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Uj(this.aSD(t),u)
x=s?"Pagar":C.dBs(t.a)
if(s)s=D.aIl
else{s=t.a
w=y.p
v=A.a([A.bL(A.a2v(s==="paid"?B.iK:B.qq,3,u,120),u,u),B.Q,A.h(C.dBr(s),u,u,u,u,B.hf,B.a4,u,u),B.bi],w)
if(s==="error")B.e.n(v,A.a([new C.w9("Tentar outra vez",this.gaZq(),!1,!1,u),B.ac,new C.w9("Fechar",new C.cm7(d),!0,!1,u)],w))
else v.push(new C.w9("OK",new C.cm8(d),!1,!1,u))
s=v}return new C.aOV(x,s,u)}}
C.aOV.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=A.a4(A.cO(B.bw,x,B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxC(d),x,x,x,x,x,x,!1,B.aN),1),u=y.p,t=A.a([A.bL(A.x(x,x,B.r,x,x,new A.K(N.uj,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aB,A.O(A.a([A.a4(A.h(this.c,x,x,x,x,B.bj,x,x,x),1),A.pT(B.ek,new C.cxD(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a0],u)
B.e.n(t,this.d)
return A.fD(!1,B.aG,!0,x,A.A(A.a([v,A.x(x,A.A(t,B.E,B.h,B.J),B.r,x,x,M.Ky,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.iX,B.l),B.r,x,0,x,x,x,x,x,B.eY)}}
var z=a.updateTypes(["F<~>()","~()","M(N,m3<FU>)","~(c)","c(c)"])
C.cKl.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:136}
C.cvQ.prototype={
$0(){var x=this.a
return x.f=x.a4v(0,this.b)},
$S:0}
C.cvR.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4v(0,this.b),this.c)},
$S:0}
C.cvY.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bY3
x=y.p
w=A.a([A.O(A.a([A.pT(B.lE,new C.cvX(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.Q,D.c7O,B.bx],x))
else w.push(B.a0)
x=this.a
if(!v)B.e.n(w,x.bdO(t))
else B.e.n(w,x.bd8(t))
return A.d5(w,u,B.CW,u,u,!1,!1)},
$S:z+2}
C.cvX.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
C.cvW.prototype={
$0(){var x=this.a
return x.p(new C.cvV(x))},
$S:0}
C.cvV.prototype={
$0(){var x=this.a
return x.d=x.L3()},
$S:0}
C.cvU.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).am("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.cvS.prototype={
$0(){return this.a.RC(this.b,this.c)},
$S:0}
C.cvT.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).am("/cobrar",null,y.X)},
$S:0}
C.bM3.prototype={
$0(){},
$S:0}
C.bOc.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aP(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dN(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bO5.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bO6.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bO7.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bOj.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.fN(new A.ac(Date.now(),0,!1)))x.a5b("expired")
else x.p(new C.bOi())},
$S:65}
C.bOi.prototype={
$0(){},
$S:0}
C.bOk.prototype={
$1(d){return this.aEK(d)},
aEK(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.alc(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a5b("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:449}
C.bOb.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ac(Date.now(),0,!1)},
$S:0}
C.bOh.prototype={
$1(d){var x=null
return new A.eQ(D.ca8,D.ch6,A.a([A.cw(B.mu,x,x,new C.bOf(d),x,x),A.bE(D.cgZ,new C.bOg(this.a,d),x)],y.p),x)},
$S:18}
C.bOf.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.bOg.prototype={
$0(){A.am(this.b,!1).bp()
var x=this.a.c
x.toString
A.ae(x).am("/partner-payments/setup",null,y.X)},
$S:0}
C.bO3.prototype={
$1(d){var x=null
return new A.eQ(D.cgu,D.cff,A.a([A.cw(D.ceD,x,x,new C.bO1(d),x,x),A.bE(D.cc9,new C.bO2(d),x)],y.p),x)},
$S:18}
C.bO1.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.bO2.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.bO4.prototype={
$0(){return this.a.r=null},
$S:0}
C.bOa.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.jt(0,B.jb)},
$S:0}
C.bOl.prototype={
$2(d,e){if(!d)this.a.al_()},
$S:183}
C.bO8.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a4(A.ba(x,!0,x,A.fD(!1,B.aG,!0,x,A.eP(!1,t,!0,A.aH(A.bL(w?D.aDE:A.h(d,x,x,x,x,B.p5,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,new C.bO9(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fI(u,D.Kk),x,x,B.cR),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x),1)},
$S:278}
C.bO9.prototype={
$0(){return this.a.bdK(this.b)},
$S:0}
C.bOe.prototype={
$2(d,e){var x=null
return A.x(x,A.O(A.a([A.a4(A.h(d,x,x,x,x,B.ce,x,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.Kx,x,x,x,B.cm,x,x,x)},
$S:1360}
C.bOd.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).iw()},
$S:0}
C.cm5.prototype={
$0(){return this.a.d=null},
$S:0}
C.cm6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cm3.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aF0(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aF0(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.alc(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.ajI)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b_I(A.q(t)))
v=A.cN6(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:158}
C.cm4.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oH
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
C.cm7.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cm8.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cxC.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cxD.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dJe","dBq",4)
var u
w(u=C.acb.prototype,"gal0","RD",0)
v(u,"gb9W","a5b",3)
w(u,"gaZp","Dl",0)
w(u,"gb8P","aoK",1)
w(u,"gaZo","al_",1)
w(C.afV.prototype,"gaZq","IT",0)})();(function inheritance(){var x=a.inheritMany
x(A.J,[C.avv,C.a6a,C.ayd,C.FU])
x(A.bw,[C.cKl,C.bOj,C.bOk,C.bOh,C.bO3,C.bO8,C.cm3])
x(A.M,[C.ajq,C.GZ,C.wk,C.w9,C.aOV])
x(A.G,[C.FV,C.Dc,C.Fe])
x(A.Y,[C.aOe,C.acb,C.afV])
x(A.bO,[C.cvQ,C.cvR,C.cvX,C.cvW,C.cvV,C.cvU,C.cvS,C.cvT,C.bM3,C.bOc,C.bO5,C.bO6,C.bO7,C.bOi,C.bOb,C.bOf,C.bOg,C.bO1,C.bO2,C.bO4,C.bOa,C.bO9,C.bOd,C.cm5,C.cm6,C.cm4,C.cm7,C.cm8,C.cxC,C.cxD])
x(A.cK,[C.cvY,C.bOl,C.bOe])})()
A.br(b.typeUniverse,JSON.parse('{"ajq":{"M":[],"e":[],"f":[]},"GZ":{"M":[],"e":[],"f":[]},"FV":{"G":[],"e":[],"f":[]},"aOe":{"Y":["FV"]},"wk":{"M":[],"e":[],"f":[]},"w9":{"M":[],"e":[],"f":[]},"Dc":{"G":[],"e":[],"f":[]},"acb":{"Y":["Dc"]},"Fe":{"G":[],"e":[],"f":[]},"afV":{"Y":["Fe"]},"aOV":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cI"),E:x("r<ayd>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dg"),K:x("J"),y:x("a6a"),m:x("tD"),k:x("+(c,bm)"),R:x("+at,result(ac?,c)"),u:x("+error,request(c?,avv?)"),A:x("FU"),N:x("c"),v:x("aN<FU>"),q:x("dq"),x:x("B"),z:x("@"),g:x("t<@>?"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Kk=new A.bf(B.fo,0.5,B.ai,-1)
D.af4=new A.dO(D.Kk,B.aa,B.aa,B.aa)
D.Kx=new A.K(null,null,D.af4,null,null,null,B.x)
D.ajI=new A.Dh("invalid_state")
D.ass=new A.a3(14,18,14,18)
D.atB=new A.a3(20,8,20,20)
D.aCg=new A.aY(61109,"MaterialIcons",null,!0)
D.aDE=new A.b7(D.aCg,22,B.z,null,null,null)
D.aF6=new A.dB(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bs,null,null,B.bs,B.bs,!0,null,null,null,null)
D.bXG=new A.ix(40,40,20,B.t,0,null)
D.bXy=new A.ix(null,32,12,B.t,1,null)
D.azS=new A.bQ(1,B.au,D.bXy,null)
D.bwB=x([D.bXG,B.ad,D.azS],y.p)
D.bTU=new A.mk(B.bD,B.h,B.l,B.v,null,B.c5,null,0,D.bwB,null)
D.bXB=new A.ix(null,120,22,B.t,1,null)
D.bXF=new A.ix(null,56,22,B.t,2,null)
D.bXH=new A.ix(null,52,26,B.t,2,null)
D.aIl=x([D.bTU,B.bx,D.bXB,B.Q,D.bXF,B.a0,D.bXH],y.p)
D.bxt=x(["1","2","3"],y.s)
D.bw9=x(["4","5","6"],y.s)
D.bu_=x(["7","8","9"],y.s)
D.b6E=x(["00","0","del"],y.s)
D.bC6=x([D.bxt,D.bw9,D.bu_,D.b6E],A.w("r<t<c>>"))
D.a26=new C.a6a("error",null,"",0,null)
D.bQY=new A.a0("Cancelado",!1)
D.bR4=new A.a0("Expirou",!1)
D.bSh=new A.a0("\xc0 espera\u2026",!1)
D.bSL=new A.bV(I.kA,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bTe=new A.bV(B.hA,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTr=new A.bV(B.kz,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTt=new A.bV(B.E8,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bz5=x([],y.E)
D.Ha=new C.FU("error",null,null,null,D.bz5,"entry",null)
D.auD=new A.nw(B.iK,150,3,null,null)
D.aji=new A.f9(B.K,null,null,D.auD,null)
D.bXn=new A.c_(null,214,D.aji,null)
D.bY3=new A.vS(!1,3,!1,null)
D.c10=new A.P(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c53=new A.P(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7O=new A.D("Quem \xe9",null,B.hj,null,null,null,null,null,null,null,null)
D.ca8=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cbQ=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mq,null,null,null,null,null,null,null,null)
D.cc9=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.cdC=new A.D("O qu\xea",null,B.M,null,null,null,null,null,null,null,null)
D.ceb=new A.D("Cobrar",null,B.kV,null,null,null,null,null,null,null,null)
D.cev=new A.D("Ver perfil",null,K.t9,null,null,null,null,null,null,null,null)
D.ceD=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cf8=new A.D("Leste o QR agora",null,B.M,null,null,null,null,null,null,null,null)
D.cff=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.cgu=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.cgZ=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.ch6=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.cp1=new C.wk("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cp2=new C.wk("Verificado",!0,null)
D.acP=new C.wk("Por registar",!1,null)
D.cp4=new C.wk("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dU3","cTL",()=>{var w=A.W(16)
return A.dno(A.bA(B.fo,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["Dsjw8uNoqxyhzMnCE3falGeURRQ="]=a.current})($__dart_deferred_initializers__);