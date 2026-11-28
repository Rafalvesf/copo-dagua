((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cHx(d,e){return C.dIk(d,e)},
dIk(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cHx=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cHx)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.p(J.i(s,"id"))
q=A.p(J.i(s,"code"))
p=A.d0(A.p(J.i(s,"expires_at")))
p=p==null?null:p.dF()
if(p==null)p=new A.ae(Date.now(),0,!1).ek(6e8)
v=new A.YH(null,new C.av2(r,q,p))
x=1
break}r=r.b(s)?A.p(J.i(s,"result")):"error"
v=new A.YH(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.YH("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cHx,w)},
cGJ(d){return C.dHE(d)},
dHE(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cGJ=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.P().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aG("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cGJ)
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
return A.m($async$cGJ,w)},
dKb(d,e){var x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.LS(0,"pay-request-"+d,B.ye).NG(new C.cJC(e),B.GB,new G.Fi(H.y1,"id",d),"public","pay_requests").Pu(0)},
cMo(d){return C.dLo(d)},
dLo(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cMo=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cMo)
case 7:s=f
if(!y.f.b(s)){v=D.a1M
x=1
break}r=A.p(J.i(s,"result"))
q=A.B(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.p(p==null?"":p)
o=A.aC(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.B(J.i(s,"description"))
v=new C.a5R(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a1M
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cMo,w)},
akF(d){return C.dII(d)},
dII(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$akF=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.P().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f3("event-pay",d),$async$akF)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.fZ(r,o,n):A.R(["error","unknown_error"],o,n)
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
o=y.f.b(p)?J.fZ(p,o,n):A.R(["error","unknown_error"],o,n)
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
return A.m($async$akF,w)},
av2:function av2(d,e,f){this.a=d
this.b=e
this.c=f},
cJC:function cJC(d){this.a=d},
a5R:function a5R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cQR(d){return C.dM2(d)},
dM2(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cQR=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aG("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cQR)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.GW
x=1
break}o=A.p(J.i(s,"result"))
n=A.B(J.i(s,"scan_id"))
m=A.B(J.i(s,"name"))
l=A.B(J.i(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.i(s,"items"))
j=J.an(j==null?B.ai:j)
while(j.q()){q=j.gE(j)
if(p.b(q)){i=q
h=J.a7(i)
g=h.h(i,"ticket")
f=A.p(h.h(i,"kind"))
e=A.p(h.h(i,"wedding_id"))
d=A.B(h.h(i,"booking_id"))
a0=h.h(i,"event")
a0=A.p(a0==null?"Evento":a0)
a1=h.h(i,"date")
a1=A.d0(A.p(a1==null?"":a1))
a2=A.B(h.h(i,"booking_number"))
a3=A.aC(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.B(J.i(g,"status")):null
if(a5){a5=A.aC(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.d0(A.p(a7==null?"":a7))
a7=a7==null?null:a7.dF()
J.o(h.h(i,"can_charge"),!0)
J.bp(r,new C.axM(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.B(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dJ(p)
p=p===!0?"entry":"profile"}k=A.B(J.i(s,"profile_id"))
v=new C.FK(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cS){v=D.GW
x=1
break}else{v=D.GW
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cQR,w)},
aUH(d,e){return C.dM1(d,e)},
dM1(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUH=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.P().b
p===$&&A.b()
x=10
return A.d(p.aG("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aUH)
case 10:o=g
x=8
break
case 9:p=$.P().b
p===$&&A.b()
x=11
return A.d(p.aG("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aUH)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YF(null,"error")
x=1
break}r=A.p(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d0(A.p(q==null?"":q))
q=q==null?null:q.dF()
v=new A.YF(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YF(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUH,w)},
axM:function axM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
FK:function FK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cYx(d){return B.f.aT(B.j.k(A.hX(d)),2,"0")+":"+B.f.aT(B.j.k(A.hN(d)),2,"0")},
d7k(d){return new C.FL(d,null)},
dne(){return new C.D1(null)},
dtU(d){return new C.F4(d,null)},
dAY(d){var x
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
default:x=A.aUu(d)
break}return x},
dB_(d){var x
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
dAZ(d){var x
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
aiX:function aiX(d,e){this.c=d
this.a=e},
GR:function GR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FL:function FL(d,e){this.c=d
this.a=e},
aNA:function aNA(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cv8:function cv8(d,e){this.a=d
this.b=e},
cv9:function cv9(d,e,f){this.a=d
this.b=e
this.c=f},
cvg:function cvg(d){this.a=d},
cvf:function cvf(d){this.a=d},
cve:function cve(d){this.a=d},
cvd:function cvd(d){this.a=d},
cvc:function cvc(d,e){this.a=d
this.b=e},
cva:function cva(d,e,f){this.a=d
this.b=e
this.c=f},
cvb:function cvb(d){this.a=d},
wh:function wh(d,e,f){this.c=d
this.d=e
this.a=f},
w7:function w7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bLq:function bLq(){},
D1:function D1(d){this.a=d},
abL:function abL(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bNu:function bNu(d,e){this.a=d
this.b=e},
bNn:function bNn(d){this.a=d},
bNo:function bNo(d){this.a=d},
bNp:function bNp(d,e){this.a=d
this.b=e},
bNB:function bNB(d,e){this.a=d
this.b=e},
bNA:function bNA(){},
bNC:function bNC(d,e){this.a=d
this.b=e},
bNt:function bNt(d,e){this.a=d
this.b=e},
bNz:function bNz(d){this.a=d},
bNx:function bNx(d){this.a=d},
bNy:function bNy(d,e){this.a=d
this.b=e},
bNl:function bNl(){},
bNj:function bNj(d){this.a=d},
bNk:function bNk(d){this.a=d},
bNm:function bNm(d){this.a=d},
bNs:function bNs(d){this.a=d},
bND:function bND(d){this.a=d},
bNq:function bNq(d){this.a=d},
bNr:function bNr(d,e){this.a=d
this.b=e},
bNw:function bNw(){},
bNv:function bNv(d){this.a=d},
F4:function F4(d,e){this.c=d
this.a=e},
afp:function afp(){this.c=this.a=this.d=null},
clp:function clp(d){this.a=d},
clq:function clq(d,e){this.a=d
this.b=e},
cln:function cln(d){this.a=d},
clo:function clo(d){this.a=d},
clr:function clr(d){this.a=d},
cls:function cls(d){this.a=d},
aOg:function aOg(d,e,f){this.c=d
this.d=e
this.a=f},
cwV:function cwV(d){this.a=d},
cwW:function cwW(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[87]
G=c[124]
H=c[238]
C=a.updateHolder(c[14],C)
D=c[277]
I=c[230]
K=c[240]
F=c[278]
L=c[56]
M=c[280]
N=c[279]
C.av2.prototype={}
C.a5R.prototype={}
C.axM.prototype={}
C.FK.prototype={
gap(d){return this.c}}
C.aiX.prototype={
u(d){var x=null
return A.x(x,this.c,B.r,x,x,$.cTc(),x,x,x,B.cU,x,x,x)}}
C.GR.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.cc,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bx,x,x))
v=this.e
if(v!=null)w.push(v)
return A.x(x,A.N(w,B.v,B.h,B.l,0,x),B.r,x,x,D.Kg,x,x,x,B.dM,x,x,x)}}
C.FL.prototype={
S(){return new C.aNA(A.E(y.N,y.R))}}
C.aNA.prototype={
KI(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cQR(u.a.c),$async$KI)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ac(t).Ge("/u/"+A.p(s),null,y.X)
v=new A.aP($.aT,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$KI,w)},
a3S(d,e){var x=e.c
return x==null?"e"+e.b:x},
R6(d,e){return this.aU5(d,e)},
aU5(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$R6=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cv8(u,e))
t=d.b
t.toString
x=3
return A.d(C.aUH(t,e),$async$R6)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cv9(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$R6,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KI()
return A.cO(null,B.by,A.bA(!0,A.b6W(new C.cvg(x),w,y.A),null,B.Z,!0),!0,null)},
bce(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bSQ
break
case"own_code":x=D.bT2
break
case"not_found":x=D.bSm
break
default:x=D.bT4
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
q=A.a([B.kR,A.b8(r,o?B.V:B.fP,p,p,96),B.a_,A.h(v,p,p,p,p,B.hP,B.a4,p),B.P,A.h(u,p,p,p,p,D.c4r,B.a4,p)],x)
if(o)B.e.n(q,A.a([B.d4,A.bB(B.t1,new C.cve(this),p)],x))
return q},
bbx(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.N(A.a([new A.cf(r,44,d.d,!1,!0,s),B.af,A.a4(A.z(A.a([A.h(r,s,s,s,s,B.it,s,s),D.c7p],x),B.G,B.h,B.l),1),B.ab,D.cop],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.cY(B.bb,s,s,A.aJ(A.hh(D.c9J,new C.cvc(this,d),A.fK(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bY,s,B.aa,B.c6,s,s,s,s)),36,s),s)],x))
w=A.a([new C.aiX(A.z(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bN,D.c7Y],x))
else for(t=0;t<v.length;v.length===u||(0,A.G)(v),++t)B.e.n(w,this.b5j(0,d,v[t]))
return w},
b5j(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a3S(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
s=i}i=A.h(k?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",n,n,n,n,B.aH,n,n)
x=y.p
r=A.a([A.h(f.d,n,n,n,n,B.it,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.pU,A.h(B.dp[A.fD(q)-1]+", "+A.aD(q)+" "+B.bg[A.av(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ac)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.GR("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.GR("Pessoas",A.p(p),n,n))
q.push(new C.GR("Chegada",n,v?new C.wh("Registada \xe0s "+C.cYx(w),!0,n):D.acA,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wh(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cor
p=v?new C.wh("Registada \xe0s "+C.cYx(w),!0,n):D.acA
B.e.n(r,A.a([new C.GR("Bilhete",n,q,n),new C.GR("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.lm,A.h(t,n,n,n,n,B.z_,n,n),n))
i=A.a([B.bN,i,B.ar,new C.aiX(A.z(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cva(o,e,f):n
if(r===m)r=B.yG
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kW,n,n)
t.push(A.a4(A.aJ(A.bB(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ae)
x.push(A.a4(A.aJ(A.hh(D.cbk,new C.cvb(o),A.fK(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.aa,B.c6,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.N(t,B.v,B.h,B.l,0,n))
return i}}
C.wh.prototype={
u(d){var x=null,w=this.d,v=w?B.cx:B.dU,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?B.cS:B.cn,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.I(v,x,x,u,x,x,B.x),x,x,x,B.dk,x,x,x)}}
C.w7.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.m8:A.h(x.c,w,w,w,w,B.eH,w,w)
if(x.e)v=A.hh(u,x.d,A.fK(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.aa,B.c6,w,w,w,w))
else{v=v?new C.bLq():x.d
v=A.bB(u,v,A.cb(B.z,B.z.cc(0.35),B.t,B.t,w,w,B.aa,w,w,w))}return A.aJ(v,52,1/0)}}
C.D1.prototype={
S(){return new C.abL(new A.aE(B.ak,$.aa()))}}
C.abL.prototype={
m(){this.Ut()
var x=this.e
x.Z$=$.aa()
x.W$=0
this.a7()},
Ut(){var x,w=this,v=w.y
if(v!=null){x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.y_(v)}w.y=null
v=w.z
if(v!=null)v.aL(0)
v=w.Q
if(v!=null)v.aL(0)},
bca(d){this.p(new C.bNu(this,d))},
R7(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$R7=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bNn(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cHx(s,t.length===0?null:t),$async$R7)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bNo(u))
q=r.b
if(q==null){s=r.a
v=u.bhl(s==null?"error":s)
x=1
break}u.p(new C.bNp(u,q))
u.bkU(q)
case 1:return A.l(v,w)}})
return A.m($async$R7,w)},
bkU(d){var x=this
x.Ut()
x.y=C.dKb(d.a,x.gb8j())
x.z=A.u2(B.hq,new C.bNB(x,d))
x.Q=A.u2(B.uH,new C.bNC(x,d))},
a4y(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bNt(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aL(0)
x=w.Q
if(x!=null)x.aL(0)}},
bhl(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fP(!0,new C.bNz(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a1(A.bZ(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
D6(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$D6=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fP(!0,new C.bNl(),t,y.x),$async$D6)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cGJ(s.a),$async$D6)
case 6:if(u.c==null){x=1
break}case 4:u.Ut()
u.p(new C.bNm(u))
case 1:return A.l(v,w)}})
return A.m($async$D6,w)},
ao_(){this.Ut()
this.p(new C.bNs(this))},
akk(){var x,w=this
if(w.r!=null)if(w.w==="open")w.D6()
else w.ao_()
else{x=w.c
x.toString
A.al(x,!1).i6()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pR(B.ly,x.gaYl(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hP,w,w)
return A.cWe(u,A.cO(w,B.by,A.bA(!0,new A.S(D.ati,A.z(A.a([new A.cY(B.bb,w,w,t,w),B.R,s,B.bN,A.a4(u?x.b5s():x.bcA(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bND(x),y.K)},
b5s(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bNq(o),j=$.cTc(),i=y.p
j=A.x(n,A.z(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a4,n),B.ac,A.bh(n,n,n,A.h(E.cHR(m),n,n,n,n,D.c0p,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.asb,n,n,n)
m=A.W(999)
x=A.bz(B.f9,0.5)
m=A.a([j,B.ac,A.x(n,A.N(A.a([D.c7B,B.ae,A.a4(A.cr(n,B.a6,!1,n,!0,B.y,n,A.ct(),o.e,n,n,n,n,n,2,D.aEV,B.W,!0,n,!0,n,!1,n,B.aB,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.al,n,n,n,n,n,n,n,n,n,n,n,B.kV,!0,B.au,n,B.hb,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.I(B.t,n,x,m,n,n,B.x),n,44,n,B.bY,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bBN[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.et(v,0,j),s=J.an(t.a),r=t.b,t=new A.bW(s,r,A.u(t).i("bW<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.am(A.c_())
p=A.a([],i)
if(q.a>0)p.push(B.ae)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c4(n,x,n,n),A.N(u,B.v,B.h,B.l,0,n)],i))}m=A.a4(A.d4(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.z(A.a([m,B.R,new C.w7("Mostrar o QR para pagar",l?o.gakl():n,!1,j,n)],i),B.E,B.h,B.l)},
bcA(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cu(new A.ae(Date.now(),0,!1)).a
x=h<0?0:B.j.aO(h,1e6)
w=""+B.j.aO(x,60)+":"+B.f.aT(B.j.k(B.j.aI(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.cYx(h==null?new A.ae(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bQG
break
case"cancelled":h=D.bQz
break
default:h=D.bRT
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bNw()
q=j.c
q.toString
q=A.nM(q,!1).a_(0,$.b6(),y.D).b
p=q==null?i:q.x
q=$.cTc()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.it,B.a4,i))
n.push(new A.S(F.pU,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a4,i),i))
n.push(B.R)
if(g)n.push(D.bWP)
else{m=A.W(16)
l=A.bz(B.f9,0.5)
k=f?1:0.15
n.push(A.x(i,A.fa(A.boX(B.t,A.kd("/pagar/"+d.b),B.GD,B.GE,B.Z,"QR para pagar "+E.cHR(j.d),186),k),B.r,i,i,new A.I(B.t,i,l,m,i,i,B.x),i,i,i,B.cU,i,i,i))}n.push(B.R)
n.push(A.h(E.cHR(j.d),i,i,i,i,B.hP,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a4,i))
if(f)B.e.n(n,A.a([B.ac,D.coo],o))
q=A.x(i,A.z(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.cU,i,i,i)
n=A.bh(i,i,i,h.$2("Estado",new C.wh(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a4(A.d4(A.a([q,B.aA,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bx,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.w7("Cancelar cobran\xe7a",j.gaYm(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.w7("Nova cobran\xe7a",j.gb7d(),!1,!1,i),B.ac,new C.w7("Fechar",new C.bNv(j),!0,!1,i)],o))
else h.push(new C.w7("Mostrar outro QR",j.gakl(),!1,j.f,i))
return A.z(h,B.E,B.h,B.l)}}
C.F4.prototype={
S(){return new C.afp()}}
C.afp.prototype={
ad(){this.aq()
this.Ix()},
Ix(){var x=0,w=A.n(y.H),v=this,u
var $async$Ix=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.clp(v))
x=2
return A.d(C.cMo(v.a.c),$async$Ix)
case 2:u=e
if(v.c!=null)v.p(new C.clq(v,u))
return A.l(null,w)}})
return A.m($async$Ix,w)},
aRH(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nK("",d.c,"pay_request",d.d/100,x,x,new C.cln(this),!1,new C.clo(d),B.VD,x,w,C.dIL(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.U9(this.aRH(t),u)
x=s?"Pagar":C.dB_(t.a)
if(s)s=D.aI6
else{s=t.a
w=y.p
v=A.a([A.bN(A.a2f(s==="paid"?B.iK:B.q2,3,u,120),u,u),B.R,A.h(C.dAZ(s),u,u,u,u,B.hd,B.a4,u),B.bh],w)
if(s==="error")B.e.n(v,A.a([new C.w7("Tentar outra vez",this.gaYn(),!1,!1,u),B.ac,new C.w7("Fechar",new C.clr(d),!0,!1,u)],w))
else v.push(new C.w7("OK",new C.cls(d),!1,!1,u))
s=v}return new C.aOg(x,s,u)}}
C.aOg.prototype={
u(d){var x=null,w=A.aS(d,x,y.w).w,v=A.a4(A.cp(B.bu,x,B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cwV(d),x,x,x,x,x,x,!1,B.aE),1),u=y.p,t=A.a([A.bN(A.x(x,x,B.r,x,x,new A.I(N.u6,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aA,A.N(A.a([A.a4(A.h(this.c,x,x,x,x,B.bi,x,x),1),A.pR(B.ei,new C.cwW(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a_],u)
B.e.n(t,this.d)
return A.hg(!1,B.aM,!0,x,A.z(A.a([v,A.x(x,A.z(t,B.E,B.h,B.J),B.r,x,x,M.Kh,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.jY,B.l),B.r,x,0,x,x,x,x,x,B.fz)}}
var z=a.updateTypes(["F<~>()","~()","M(O,m2<FK>)","~(c)","c(c)"])
C.cJC.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:155}
C.cv8.prototype={
$0(){var x=this.a
return x.f=x.a3S(0,this.b)},
$S:0}
C.cv9.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a3S(0,this.b),this.c)},
$S:0}
C.cvg.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bXv
x=y.p
w=A.a([A.N(A.a([A.pR(B.ly,new C.cvf(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.cg3,B.bN],x))
else w.push(B.a_)
x=this.a
if(!v)B.e.n(w,x.bce(t))
else B.e.n(w,x.bbx(t))
return A.d4(w,u,B.CM,u,u,!1,!1)},
$S:z+2}
C.cvf.prototype={
$0(){return A.al(this.a,!1).i6()},
$S:0}
C.cve.prototype={
$0(){var x=this.a
return x.p(new C.cvd(x))},
$S:0}
C.cvd.prototype={
$0(){var x=this.a
return x.d=x.KI()},
$S:0}
C.cvc.prototype={
$0(){var x=this.a.c
x.toString
return A.ac(x).ak("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cva.prototype={
$0(){return this.a.R6(this.b,this.c)},
$S:0}
C.cvb.prototype={
$0(){var x=this.a.c
x.toString
return A.ac(x).ak("/cobrar",null,y.X)},
$S:0}
C.bLq.prototype={
$0(){},
$S:0}
C.bNu.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aO(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dA(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bNn.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bNo.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bNp.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bNB.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.hc(new A.ae(Date.now(),0,!1)))x.a4y("expired")
else x.p(new C.bNA())},
$S:67}
C.bNA.prototype={
$0(){},
$S:0}
C.bNC.prototype={
$1(d){return this.aDO(d)},
aDO(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.akF(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a4y("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:505}
C.bNt.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ae(Date.now(),0,!1)},
$S:0}
C.bNz.prototype={
$1(d){var x=null
return new A.eQ(D.c7S,D.caY,A.a([A.cE(B.mk,x,x,new C.bNx(d),x,x),A.bB(D.c8Z,new C.bNy(this.a,d),x)],y.p),x)},
$S:19}
C.bNx.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
C.bNy.prototype={
$0(){A.al(this.b,!1).bj()
var x=this.a.c
x.toString
A.ac(x).ak("/partner-payments/setup",null,y.X)},
$S:0}
C.bNl.prototype={
$1(d){var x=null
return new A.eQ(D.caF,D.cac,A.a([A.cE(D.caX,x,x,new C.bNj(d),x,x),A.bB(D.c8U,new C.bNk(d),x)],y.p),x)},
$S:19}
C.bNj.prototype={
$0(){return A.al(this.a,!1).ae(!1)},
$S:0}
C.bNk.prototype={
$0(){return A.al(this.a,!1).ae(!0)},
$S:0}
C.bNm.prototype={
$0(){return this.a.r=null},
$S:0}
C.bNs.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.k_(0,B.j8)},
$S:0}
C.bND.prototype={
$2(d,e){if(!d)this.a.akk()},
$S:233}
C.bNq.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a4(A.bh(x,!0,x,A.hg(!1,B.aM,!0,x,A.eW(!1,t,!0,A.aJ(A.bN(w?D.aDs:A.h(d,x,x,x,x,B.oS,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bNr(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fM(u,D.K3),x,x,B.cX),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:229}
C.bNr.prototype={
$0(){return this.a.bca(this.b)},
$S:0}
C.bNw.prototype={
$2(d,e){var x=null
return A.x(x,A.N(A.a([A.a4(A.h(d,x,x,x,x,B.cc,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.Kg,x,x,x,B.cj,x,x,x)},
$S:1367}
C.bNv.prototype={
$0(){var x=this.a.c
x.toString
return A.al(x,!1).i6()},
$S:0}
C.clp.prototype={
$0(){return this.a.d=null},
$S:0}
C.clq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cln.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aE4(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aE4(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.akF(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.aju)
t=r.h(s,"error")
if(t!=null)throw A.q(A.b_1(A.p(t)))
v=A.cMp(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:151}
C.clo.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.ot
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.akF(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1368}
C.clr.prototype={
$0(){return A.ac(this.a).ae(null)},
$S:0}
C.cls.prototype={
$0(){return A.ac(this.a).ae(null)},
$S:0}
C.cwV.prototype={
$0(){return A.ac(this.a).ae(null)},
$S:0}
C.cwW.prototype={
$0(){return A.ac(this.a).ae(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dIL","dAY",4)
var u
w(u=C.abL.prototype,"gakl","R7",0)
v(u,"gb8j","a4y",3)
w(u,"gaYm","D6",0)
w(u,"gb7d","ao_",1)
w(u,"gaYl","akk",1)
w(C.afp.prototype,"gaYn","Ix",0)})();(function inheritance(){var x=a.inheritMany
x(A.L,[C.av2,C.a5R,C.axM,C.FK])
x(A.bt,[C.cJC,C.bNB,C.bNC,C.bNz,C.bNl,C.bNq,C.cln])
x(A.M,[C.aiX,C.GR,C.wh,C.w7,C.aOg])
x(A.H,[C.FL,C.D1,C.F4])
x(A.a1,[C.aNA,C.abL,C.afp])
x(A.bK,[C.cv8,C.cv9,C.cvf,C.cve,C.cvd,C.cvc,C.cva,C.cvb,C.bLq,C.bNu,C.bNn,C.bNo,C.bNp,C.bNA,C.bNt,C.bNx,C.bNy,C.bNj,C.bNk,C.bNm,C.bNs,C.bNr,C.bNv,C.clp,C.clq,C.clo,C.clr,C.cls,C.cwV,C.cwW])
x(A.cJ,[C.cvg,C.bND,C.bNw])})()
A.bq(b.typeUniverse,JSON.parse('{"aiX":{"M":[],"e":[],"f":[]},"GR":{"M":[],"e":[],"f":[]},"FL":{"H":[],"e":[],"f":[]},"aNA":{"a1":["FL"]},"wh":{"M":[],"e":[],"f":[]},"w7":{"M":[],"e":[],"f":[]},"D1":{"H":[],"e":[],"f":[]},"abL":{"a1":["D1"]},"F4":{"H":[],"e":[],"f":[]},"afp":{"a1":["F4"]},"aOg":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{D:x("cF"),E:x("r<axM>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("ds"),K:x("L"),y:x("a5R"),m:x("tz"),k:x("+(c,bk)"),R:x("+at,result(ae?,c)"),u:x("+error,request(c?,av2?)"),A:x("FK"),N:x("c"),v:x("aP<FK>"),q:x("dp"),x:x("C"),z:x("@"),g:x("t<@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.K3=new A.bf(B.f9,0.5,B.aj,-1)
D.aeR=new A.dL(D.K3,B.ad,B.ad,B.ad)
D.Kg=new A.I(null,null,D.aeR,null,null,null,B.x)
D.aju=new A.D7("invalid_state")
D.asb=new A.a3(14,18,14,18)
D.ati=new A.a3(20,8,20,20)
D.aC6=new A.aZ(61109,"MaterialIcons",null,!0)
D.aDs=new A.b7(D.aC6,22,B.z,null,null,null)
D.aEV=new A.dD(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.br,null,null,B.br,B.br,!0,null,null,null,null)
D.bX8=new A.kT(40,40,20,B.t,0,null)
D.bX0=new A.kT(null,32,12,B.t,1,null)
D.azA=new A.bI(1,B.at,D.bX0,null)
D.bwj=x([D.bX8,B.af,D.azA],y.p)
D.bTt=new A.nP(B.bJ,B.h,B.l,B.v,null,B.cg,null,0,D.bwj,null)
D.bX2=new A.kT(null,120,22,B.t,1,null)
D.bX7=new A.kT(null,56,22,B.t,2,null)
D.bX9=new A.kT(null,52,26,B.t,2,null)
D.aI6=x([D.bTt,B.bN,D.bX2,B.R,D.bX7,B.a_,D.bX9],y.p)
D.bx9=x(["1","2","3"],y.s)
D.bvT=x(["4","5","6"],y.s)
D.btG=x(["7","8","9"],y.s)
D.b6p=x(["00","0","del"],y.s)
D.bBN=x([D.bx9,D.bvT,D.btG,D.b6p],A.y("r<t<c>>"))
D.a1M=new C.a5R("error",null,"",0,null)
D.bQz=new A.X("Cancelado",!1)
D.bQG=new A.X("Expirou",!1)
D.bRT=new A.X("\xc0 espera\u2026",!1)
D.bSm=new A.bV(I.kB,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bSQ=new A.bV(B.hy,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bT2=new A.bV(B.kA,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bT4=new A.bV(B.DY,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.byO=x([],y.E)
D.GW=new C.FK("error",null,null,null,D.byO,"entry",null)
D.auj=new A.nv(B.iK,150,3,null,null)
D.aj7=new A.f4(B.K,null,null,D.auj,null)
D.bWP=new A.c4(null,214,D.aj7,null)
D.bXv=new A.vQ(!1,3,!1,null)
D.c0p=new A.Q(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4r=new A.Q(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7p=new A.D("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c7B=new A.D("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c7S=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c7Y=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mg,null,null,null,null,null,null,null)
D.c8U=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.c8Z=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.c9J=new A.D("Ver perfil",null,K.rS,null,null,null,null,null,null,null)
D.cac=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.caF=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.caX=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.caY=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.cbk=new A.D("Cobrar",null,B.kW,null,null,null,null,null,null,null)
D.cg3=new A.D("Quem \xe9",null,B.hP,null,null,null,null,null,null,null)
D.coo=new C.wh("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cop=new C.wh("Verificado",!0,null)
D.acA=new C.wh("Por registar",!1,null)
D.cor=new C.wh("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTx","cTc",()=>{var w=A.W(16)
return A.dmY(A.bz(B.f9,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["luCE5+8tA4k9mJfLO0eqmsKudPg="]=a.current})($__dart_deferred_initializers__);