((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cHm(d,e){return C.dI3(d,e)},
dI3(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cHm=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cHm)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.p(J.i(s,"id"))
q=A.p(J.i(s,"code"))
p=A.d0(A.p(J.i(s,"expires_at")))
p=p==null?null:p.dF()
if(p==null)p=new A.ae(Date.now(),0,!1).ek(6e8)
v=new A.YH(null,new C.auZ(r,q,p))
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
return A.m($async$cHm,w)},
cGy(d){return C.dHn(d)},
dHn(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cGy=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.P().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aG("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cGy)
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
return A.m($async$cGy,w)},
dJV(d,e){var x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.LS(0,"pay-request-"+d,B.ye).NG(new C.cJr(e),B.GA,new G.Fi(H.y1,"id",d),"public","pay_requests").Pu(0)},
cMd(d){return C.dL7(d)},
dL7(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cMd=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cMd)
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
return A.m($async$cMd,w)},
akE(d){return C.dIr(d)},
dIr(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$akE=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.P().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f2("event-pay",d),$async$akE)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.fY(r,o,n):A.R(["error","unknown_error"],o,n)
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
o=y.f.b(p)?J.fY(p,o,n):A.R(["error","unknown_error"],o,n)
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
return A.m($async$akE,w)},
auZ:function auZ(d,e,f){this.a=d
this.b=e
this.c=f},
cJr:function cJr(d){this.a=d},
a5R:function a5R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cQC(d){return C.dLL(d)},
dLL(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cQC=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aG("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cQC)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.GV
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
J.bp(r,new C.axI(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.B(J.i(s,"mode"))
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
if(A.a9(a9) instanceof A.cS){v=D.GV
x=1
break}else{v=D.GV
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cQC,w)},
aUE(d,e){return C.dLK(d,e)},
dLK(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUE=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.P().b
p===$&&A.b()
x=10
return A.d(p.aG("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aUE)
case 10:o=g
x=8
break
case 9:p=$.P().b
p===$&&A.b()
x=11
return A.d(p.aG("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aUE)
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
return A.m($async$aUE,w)},
axI:function axI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cYh(d){return B.f.aT(B.j.k(A.hX(d)),2,"0")+":"+B.f.aT(B.j.k(A.hN(d)),2,"0")},
d73(d){return new C.FL(d,null)},
dmY(){return new C.D1(null)},
dtD(d){return new C.F4(d,null)},
dAH(d){var x
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
default:x=A.aUr(d)
break}return x},
dAJ(d){var x
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
dAI(d){var x
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
aiW:function aiW(d,e){this.c=d
this.a=e},
GR:function GR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FL:function FL(d,e){this.c=d
this.a=e},
aNx:function aNx(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cuY:function cuY(d,e){this.a=d
this.b=e},
cuZ:function cuZ(d,e,f){this.a=d
this.b=e
this.c=f},
cv5:function cv5(d){this.a=d},
cv4:function cv4(d){this.a=d},
cv3:function cv3(d){this.a=d},
cv2:function cv2(d){this.a=d},
cv1:function cv1(d,e){this.a=d
this.b=e},
cv_:function cv_(d,e,f){this.a=d
this.b=e
this.c=f},
cv0:function cv0(d){this.a=d},
wh:function wh(d,e,f){this.c=d
this.d=e
this.a=f},
w7:function w7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bLm:function bLm(){},
D1:function D1(d){this.a=d},
abK:function abK(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bNq:function bNq(d,e){this.a=d
this.b=e},
bNj:function bNj(d){this.a=d},
bNk:function bNk(d){this.a=d},
bNl:function bNl(d,e){this.a=d
this.b=e},
bNx:function bNx(d,e){this.a=d
this.b=e},
bNw:function bNw(){},
bNy:function bNy(d,e){this.a=d
this.b=e},
bNp:function bNp(d,e){this.a=d
this.b=e},
bNv:function bNv(d){this.a=d},
bNt:function bNt(d){this.a=d},
bNu:function bNu(d,e){this.a=d
this.b=e},
bNh:function bNh(){},
bNf:function bNf(d){this.a=d},
bNg:function bNg(d){this.a=d},
bNi:function bNi(d){this.a=d},
bNo:function bNo(d){this.a=d},
bNz:function bNz(d){this.a=d},
bNm:function bNm(d){this.a=d},
bNn:function bNn(d,e){this.a=d
this.b=e},
bNs:function bNs(){},
bNr:function bNr(d){this.a=d},
F4:function F4(d,e){this.c=d
this.a=e},
afo:function afo(){this.c=this.a=this.d=null},
cle:function cle(d){this.a=d},
clf:function clf(d,e){this.a=d
this.b=e},
clc:function clc(d){this.a=d},
cld:function cld(d){this.a=d},
clg:function clg(d){this.a=d},
clh:function clh(d){this.a=d},
aOd:function aOd(d,e,f){this.c=d
this.d=e
this.a=f},
cwK:function cwK(d){this.a=d},
cwL:function cwL(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[87]
G=c[123]
H=c[236]
C=a.updateHolder(c[14],C)
D=c[275]
I=c[228]
K=c[238]
F=c[276]
L=c[56]
M=c[278]
N=c[277]
C.auZ.prototype={}
C.a5R.prototype={}
C.axI.prototype={}
C.FK.prototype={
gap(d){return this.c}}
C.aiW.prototype={
u(d){var x=null
return A.x(x,this.c,B.r,x,x,$.cSY(),x,x,x,B.cV,x,x,x)}}
C.GR.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.cc,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bx,x,x))
v=this.e
if(v!=null)w.push(v)
return A.x(x,A.O(w,B.v,B.h,B.l,0,x),B.r,x,x,D.Kg,x,x,x,B.dM,x,x,x)}}
C.FL.prototype={
S(){return new C.aNx(A.E(y.N,y.R))}}
C.aNx.prototype={
KI(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cQC(u.a.c),$async$KI)
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
a3T(d,e){var x=e.c
return x==null?"e"+e.b:x},
R5(d,e){return this.aU5(d,e)},
aU5(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$R5=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cuY(u,e))
t=d.b
t.toString
x=3
return A.d(C.aUE(t,e),$async$R5)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cuZ(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$R5,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KI()
return A.cO(null,B.by,A.bA(!0,A.b6U(new C.cv5(x),w,y.A),null,B.Z,!0),!0,null)},
bce(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bSP
break
case"own_code":x=D.bT1
break
case"not_found":x=D.bSl
break
default:x=D.bT3
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
q=A.a([B.kR,A.b8(r,o?B.V:B.fO,p,p,96),B.a0,A.h(v,p,p,p,p,B.hO,B.a4,p),B.P,A.h(u,p,p,p,p,D.c4s,B.a4,p)],x)
if(o)B.e.n(q,A.a([B.d5,A.bB(B.t1,new C.cv3(this),p)],x))
return q},
bbx(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.cf(r,44,d.d,!1,!0,s),B.ae,A.a4(A.y(A.a([A.h(r,s,s,s,s,B.it,s,s),D.c7q],x),B.G,B.h,B.l),1),B.ab,D.coq],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.cY(B.ba,s,s,A.aJ(A.hh(D.c9K,new C.cv1(this,d),A.fK(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bW,s,B.aa,B.c6,s,s,s,s)),36,s),s)],x))
w=A.a([new C.aiW(A.y(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bN,D.c7Z],x))
else for(t=0;t<v.length;v.length===u||(0,A.G)(v),++t)B.e.n(w,this.b5j(0,d,v[t]))
return w},
b5j(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a3T(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
if(q!=null)r.push(new A.S(F.pW,A.h(B.dp[A.fD(q)-1]+", "+A.aD(q)+" "+B.bg[A.av(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ac)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.GR("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.GR("Pessoas",A.p(p),n,n))
q.push(new C.GR("Chegada",n,v?new C.wh("Registada \xe0s "+C.cYh(w),!0,n):D.acz,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wh(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cos
p=v?new C.wh("Registada \xe0s "+C.cYh(w),!0,n):D.acz
B.e.n(r,A.a([new C.GR("Bilhete",n,q,n),new C.GR("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.lm,A.h(t,n,n,n,n,B.z_,n,n),n))
i=A.a([B.bN,i,B.ar,new C.aiW(A.y(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cv_(o,e,f):n
if(r===m)r=B.yG
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kW,n,n)
t.push(A.a4(A.aJ(A.bB(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.af)
x.push(A.a4(A.aJ(A.hh(D.cbl,new C.cv0(o),A.fK(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.aa,B.c6,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.v,B.h,B.l,0,n))
return i}}
C.wh.prototype={
u(d){var x=null,w=this.d,v=w?B.cx:B.dT,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?B.cT:B.cn,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.I(v,x,x,u,x,x,B.x),x,x,x,B.dk,x,x,x)}}
C.w7.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.m7:A.h(x.c,w,w,w,w,B.eI,w,w)
if(x.e)v=A.hh(u,x.d,A.fK(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.aa,B.c6,w,w,w,w))
else{v=v?new C.bLm():x.d
v=A.bB(u,v,A.cc(B.z,B.z.cc(0.35),B.t,B.t,w,w,B.aa,w,w,w))}return A.aJ(v,52,1/0)}}
C.D1.prototype={
S(){return new C.abK(new A.aE(B.ak,$.aa()))}}
C.abK.prototype={
m(){this.Ur()
var x=this.e
x.Z$=$.aa()
x.W$=0
this.a7()},
Ur(){var x,w=this,v=w.y
if(v!=null){x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.y_(v)}w.y=null
v=w.z
if(v!=null)v.aL(0)
v=w.Q
if(v!=null)v.aL(0)},
bca(d){this.p(new C.bNq(this,d))},
R6(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$R6=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bNj(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cHm(s,t.length===0?null:t),$async$R6)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bNk(u))
q=r.b
if(q==null){s=r.a
v=u.bhl(s==null?"error":s)
x=1
break}u.p(new C.bNl(u,q))
u.bkU(q)
case 1:return A.l(v,w)}})
return A.m($async$R6,w)},
bkU(d){var x=this
x.Ur()
x.y=C.dJV(d.a,x.gb8j())
x.z=A.u2(B.hq,new C.bNx(x,d))
x.Q=A.u2(B.uH,new C.bNy(x,d))},
a4z(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bNp(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aL(0)
x=w.Q
if(x!=null)x.aL(0)}},
bhl(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fO(!0,new C.bNv(this),x,y.H)
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
return A.d(A.fO(!0,new C.bNh(),t,y.x),$async$D6)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cGy(s.a),$async$D6)
case 6:if(u.c==null){x=1
break}case 4:u.Ur()
u.p(new C.bNi(u))
case 1:return A.l(v,w)}})
return A.m($async$D6,w)},
ao_(){this.Ur()
this.p(new C.bNo(this))},
akk(){var x,w=this
if(w.r!=null)if(w.w==="open")w.D6()
else w.ao_()
else{x=w.c
x.toString
A.am(x,!1).i6()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pR(B.lx,x.gaYl(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hO,w,w)
return A.cW_(u,A.cO(w,B.by,A.bA(!0,new A.S(D.ath,A.y(A.a([new A.cY(B.ba,w,w,t,w),B.R,s,B.bN,A.a4(u?x.b5s():x.bcA(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bNz(x),y.K)},
b5s(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bNm(o),j=$.cSY(),i=y.p
j=A.x(n,A.y(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a4,n),B.ac,A.bk(n,n,n,A.h(E.cHG(m),n,n,n,n,D.c0q,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a6,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.asa,n,n,n)
m=A.W(999)
x=A.bz(B.f9,0.5)
m=A.a([j,B.ac,A.x(n,A.O(A.a([D.c7C,B.af,A.a4(A.cp(n,B.a5,!1,n,!0,B.y,n,A.cr(),o.e,n,n,n,n,n,2,D.aEU,B.W,!0,n,!0,n,!1,n,B.aB,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.al,n,n,n,n,n,n,n,n,n,n,n,B.kV,!0,B.au,n,B.hb,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.I(B.t,n,x,m,n,n,B.x),n,44,n,B.bW,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bBM[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.et(v,0,j),s=J.an(t.a),r=t.b,t=new A.bW(s,r,A.u(t).i("bW<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.al(A.c_())
p=A.a([],i)
if(q.a>0)p.push(B.af)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c4(n,x,n,n),A.O(u,B.v,B.h,B.l,0,n)],i))}m=A.a4(A.d4(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.y(A.a([m,B.R,new C.w7("Mostrar o QR para pagar",l?o.gakl():n,!1,j,n)],i),B.E,B.h,B.l)},
bcA(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cu(new A.ae(Date.now(),0,!1)).a
x=h<0?0:B.j.aO(h,1e6)
w=""+B.j.aO(x,60)+":"+B.f.aT(B.j.k(B.j.aI(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.cYh(h==null?new A.ae(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bQF
break
case"cancelled":h=D.bQy
break
default:h=D.bRS
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bNs()
q=j.c
q.toString
q=A.nM(q,!1).a_(0,$.b6(),y.D).b
p=q==null?i:q.x
q=$.cSY()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.it,B.a4,i))
n.push(new A.S(F.pW,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a4,i),i))
n.push(B.R)
if(g)n.push(D.bWO)
else{m=A.W(16)
l=A.bz(B.f9,0.5)
k=f?1:0.15
n.push(A.x(i,A.fa(A.boU(B.t,A.kd("/pagar/"+d.b),B.GC,B.GD,B.Z,"QR para pagar "+E.cHG(j.d),186),k),B.r,i,i,new A.I(B.t,i,l,m,i,i,B.x),i,i,i,B.cV,i,i,i))}n.push(B.R)
n.push(A.h(E.cHG(j.d),i,i,i,i,B.hO,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a4,i))
if(f)B.e.n(n,A.a([B.ac,D.cop],o))
q=A.x(i,A.y(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.cV,i,i,i)
n=A.bk(i,i,i,h.$2("Estado",new C.wh(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a6,i)
h=A.a([A.a4(A.d4(A.a([q,B.aA,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bx,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.w7("Cancelar cobran\xe7a",j.gaYm(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.w7("Nova cobran\xe7a",j.gb7d(),!1,!1,i),B.ac,new C.w7("Fechar",new C.bNr(j),!0,!1,i)],o))
else h.push(new C.w7("Mostrar outro QR",j.gakl(),!1,j.f,i))
return A.y(h,B.E,B.h,B.l)}}
C.F4.prototype={
S(){return new C.afo()}}
C.afo.prototype={
ad(){this.aq()
this.Ix()},
Ix(){var x=0,w=A.n(y.H),v=this,u
var $async$Ix=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cle(v))
x=2
return A.d(C.cMd(v.a.c),$async$Ix)
case 2:u=e
if(v.c!=null)v.p(new C.clf(v,u))
return A.l(null,w)}})
return A.m($async$Ix,w)},
aRH(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nK("",d.c,"pay_request",d.d/100,x,x,new C.clc(this),!1,new C.cld(d),B.VD,x,w,C.dIu(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.U9(this.aRH(t),u)
x=s?"Pagar":C.dAJ(t.a)
if(s)s=D.aI5
else{s=t.a
w=y.p
v=A.a([A.bM(A.a2f(s==="paid"?B.iK:B.q3,3,u,120),u,u),B.R,A.h(C.dAI(s),u,u,u,u,B.hd,B.a4,u),B.bi],w)
if(s==="error")B.e.n(v,A.a([new C.w7("Tentar outra vez",this.gaYn(),!1,!1,u),B.ac,new C.w7("Fechar",new C.clg(d),!0,!1,u)],w))
else v.push(new C.w7("OK",new C.clh(d),!1,!1,u))
s=v}return new C.aOd(x,s,u)}}
C.aOd.prototype={
u(d){var x=null,w=A.aR(d,x,y.w).w,v=A.a4(A.ct(B.bu,x,B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cwK(d),x,x,x,x,x,x,!1,B.aF),1),u=y.p,t=A.a([A.bM(A.x(x,x,B.r,x,x,new A.I(N.u6,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aA,A.O(A.a([A.a4(A.h(this.c,x,x,x,x,B.bj,x,x),1),A.pR(B.ei,new C.cwL(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a0],u)
B.e.n(t,this.d)
return A.hg(!1,B.aM,!0,x,A.y(A.a([v,A.x(x,A.y(t,B.E,B.h,B.J),B.r,x,x,M.Kh,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.jV,B.l),B.r,x,0,x,x,x,x,x,B.fy)}}
var z=a.updateTypes(["F<~>()","~()","M(N,m2<FK>)","~(c)","c(c)"])
C.cJr.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:155}
C.cuY.prototype={
$0(){var x=this.a
return x.f=x.a3T(0,this.b)},
$S:0}
C.cuZ.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a3T(0,this.b),this.c)},
$S:0}
C.cv5.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bXu
x=y.p
w=A.a([A.O(A.a([A.pR(B.lx,new C.cv4(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.cg4,B.bN],x))
else w.push(B.a0)
x=this.a
if(!v)B.e.n(w,x.bce(t))
else B.e.n(w,x.bbx(t))
return A.d4(w,u,B.CL,u,u,!1,!1)},
$S:z+2}
C.cv4.prototype={
$0(){return A.am(this.a,!1).i6()},
$S:0}
C.cv3.prototype={
$0(){var x=this.a
return x.p(new C.cv2(x))},
$S:0}
C.cv2.prototype={
$0(){var x=this.a
return x.d=x.KI()},
$S:0}
C.cv1.prototype={
$0(){var x=this.a.c
x.toString
return A.ac(x).ak("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cv_.prototype={
$0(){return this.a.R5(this.b,this.c)},
$S:0}
C.cv0.prototype={
$0(){var x=this.a.c
x.toString
return A.ac(x).ak("/cobrar",null,y.X)},
$S:0}
C.bLm.prototype={
$0(){},
$S:0}
C.bNq.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aO(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dF(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bNj.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bNk.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bNl.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bNx.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.hc(new A.ae(Date.now(),0,!1)))x.a4z("expired")
else x.p(new C.bNw())},
$S:67}
C.bNw.prototype={
$0(){},
$S:0}
C.bNy.prototype={
$1(d){return this.aDO(d)},
aDO(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.akE(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a4z("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:505}
C.bNp.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ae(Date.now(),0,!1)},
$S:0}
C.bNv.prototype={
$1(d){var x=null
return new A.eQ(D.c7T,D.caZ,A.a([A.cE(B.mj,x,x,new C.bNt(d),x,x),A.bB(D.c9_,new C.bNu(this.a,d),x)],y.p),x)},
$S:19}
C.bNt.prototype={
$0(){return A.am(this.a,!1).bl()},
$S:0}
C.bNu.prototype={
$0(){A.am(this.b,!1).bl()
var x=this.a.c
x.toString
A.ac(x).ak("/partner-payments/setup",null,y.X)},
$S:0}
C.bNh.prototype={
$1(d){var x=null
return new A.eQ(D.caG,D.cad,A.a([A.cE(D.caY,x,x,new C.bNf(d),x,x),A.bB(D.c8V,new C.bNg(d),x)],y.p),x)},
$S:19}
C.bNf.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.bNg.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.bNi.prototype={
$0(){return this.a.r=null},
$S:0}
C.bNo.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.k_(0,B.j8)},
$S:0}
C.bNz.prototype={
$2(d,e){if(!d)this.a.akk()},
$S:233}
C.bNm.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a4(A.bk(x,!0,x,A.hg(!1,B.aM,!0,x,A.eW(!1,t,!0,A.aJ(A.bM(w?D.aDr:A.h(d,x,x,x,x,B.oU,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bNn(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fM(u,D.K3),x,x,B.cY),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a6,x),1)},
$S:229}
C.bNn.prototype={
$0(){return this.a.bca(this.b)},
$S:0}
C.bNs.prototype={
$2(d,e){var x=null
return A.x(x,A.O(A.a([A.a4(A.h(d,x,x,x,x,B.cc,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.Kg,x,x,x,B.cj,x,x,x)},
$S:1367}
C.bNr.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).i6()},
$S:0}
C.cle.prototype={
$0(){return this.a.d=null},
$S:0}
C.clf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.clc.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aE4(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aE4(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.akE(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.ajt)
t=r.h(s,"error")
if(t!=null)throw A.q(A.aZZ(A.p(t)))
v=A.cMe(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:151}
C.cld.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.ov
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.akE(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1368}
C.clg.prototype={
$0(){return A.ac(this.a).ae(null)},
$S:0}
C.clh.prototype={
$0(){return A.ac(this.a).ae(null)},
$S:0}
C.cwK.prototype={
$0(){return A.ac(this.a).ae(null)},
$S:0}
C.cwL.prototype={
$0(){return A.ac(this.a).ae(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dIu","dAH",4)
var u
w(u=C.abK.prototype,"gakl","R6",0)
v(u,"gb8j","a4z",3)
w(u,"gaYm","D6",0)
w(u,"gb7d","ao_",1)
w(u,"gaYl","akk",1)
w(C.afo.prototype,"gaYn","Ix",0)})();(function inheritance(){var x=a.inheritMany
x(A.L,[C.auZ,C.a5R,C.axI,C.FK])
x(A.bv,[C.cJr,C.bNx,C.bNy,C.bNv,C.bNh,C.bNm,C.clc])
x(A.M,[C.aiW,C.GR,C.wh,C.w7,C.aOd])
x(A.H,[C.FL,C.D1,C.F4])
x(A.a1,[C.aNx,C.abK,C.afo])
x(A.bN,[C.cuY,C.cuZ,C.cv4,C.cv3,C.cv2,C.cv1,C.cv_,C.cv0,C.bLm,C.bNq,C.bNj,C.bNk,C.bNl,C.bNw,C.bNp,C.bNt,C.bNu,C.bNf,C.bNg,C.bNi,C.bNo,C.bNn,C.bNr,C.cle,C.clf,C.cld,C.clg,C.clh,C.cwK,C.cwL])
x(A.cJ,[C.cv5,C.bNz,C.bNs])})()
A.bt(b.typeUniverse,JSON.parse('{"aiW":{"M":[],"e":[],"f":[]},"GR":{"M":[],"e":[],"f":[]},"FL":{"H":[],"e":[],"f":[]},"aNx":{"a1":["FL"]},"wh":{"M":[],"e":[],"f":[]},"w7":{"M":[],"e":[],"f":[]},"D1":{"H":[],"e":[],"f":[]},"abK":{"a1":["D1"]},"F4":{"H":[],"e":[],"f":[]},"afo":{"a1":["F4"]},"aOd":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{D:x("cF"),E:x("r<axI>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("ds"),K:x("L"),y:x("a5R"),m:x("tz"),k:x("+(c,bj)"),R:x("+at,result(ae?,c)"),u:x("+error,request(c?,auZ?)"),A:x("FK"),N:x("c"),v:x("aP<FK>"),q:x("dp"),x:x("C"),z:x("@"),g:x("t<@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.K3=new A.bf(B.f9,0.5,B.aj,-1)
D.aeQ=new A.dL(D.K3,B.ad,B.ad,B.ad)
D.Kg=new A.I(null,null,D.aeQ,null,null,null,B.x)
D.ajt=new A.D7("invalid_state")
D.asa=new A.a3(14,18,14,18)
D.ath=new A.a3(20,8,20,20)
D.aC5=new A.aZ(61109,"MaterialIcons",null,!0)
D.aDr=new A.b7(D.aC5,22,B.z,null,null,null)
D.aEU=new A.dC(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.br,null,null,B.br,B.br,!0,null,null,null,null)
D.bX7=new A.kT(40,40,20,B.t,0,null)
D.bX_=new A.kT(null,32,12,B.t,1,null)
D.azz=new A.bI(1,B.at,D.bX_,null)
D.bwi=x([D.bX7,B.ae,D.azz],y.p)
D.bTs=new A.nP(B.bJ,B.h,B.l,B.v,null,B.cg,null,0,D.bwi,null)
D.bX1=new A.kT(null,120,22,B.t,1,null)
D.bX6=new A.kT(null,56,22,B.t,2,null)
D.bX8=new A.kT(null,52,26,B.t,2,null)
D.aI5=x([D.bTs,B.bN,D.bX1,B.R,D.bX6,B.a0,D.bX8],y.p)
D.bx8=x(["1","2","3"],y.s)
D.bvS=x(["4","5","6"],y.s)
D.btF=x(["7","8","9"],y.s)
D.b6o=x(["00","0","del"],y.s)
D.bBM=x([D.bx8,D.bvS,D.btF,D.b6o],A.z("r<t<c>>"))
D.a1M=new C.a5R("error",null,"",0,null)
D.bQy=new A.X("Cancelado",!1)
D.bQF=new A.X("Expirou",!1)
D.bRS=new A.X("\xc0 espera\u2026",!1)
D.bSl=new A.bV(I.kA,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bSP=new A.bV(B.hy,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bT1=new A.bV(B.kz,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bT3=new A.bV(B.DX,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.byN=x([],y.E)
D.GV=new C.FK("error",null,null,null,D.byN,"entry",null)
D.aui=new A.nv(B.iK,150,3,null,null)
D.aj6=new A.f4(B.K,null,null,D.aui,null)
D.bWO=new A.c4(null,214,D.aj6,null)
D.bXu=new A.vQ(!1,3,!1,null)
D.c0q=new A.Q(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4s=new A.Q(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7q=new A.D("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c7C=new A.D("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c7T=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c7Z=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mf,null,null,null,null,null,null,null)
D.c8V=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.c9_=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.c9K=new A.D("Ver perfil",null,K.rS,null,null,null,null,null,null,null)
D.cad=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.caG=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.caY=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.caZ=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.cbl=new A.D("Cobrar",null,B.kW,null,null,null,null,null,null,null)
D.cg4=new A.D("Quem \xe9",null,B.hO,null,null,null,null,null,null,null)
D.cop=new C.wh("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.coq=new C.wh("Verificado",!0,null)
D.acz=new C.wh("Por registar",!1,null)
D.cos=new C.wh("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTf","cSY",()=>{var w=A.W(16)
return A.dmH(A.bz(B.f9,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["zHHF8TGM63d1YcdQXkBQ2ie5RnM="]=a.current})($__dart_deferred_initializers__);