((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cHO(d,e){return C.dIH(d,e)},
dIH(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cHO=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cHO)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.p(J.i(s,"id"))
q=A.p(J.i(s,"code"))
p=A.d0(A.p(J.i(s,"expires_at")))
p=p==null?null:p.dF()
if(p==null)p=new A.ac(Date.now(),0,!1).ek(6e8)
v=new A.YJ(null,new C.av3(r,q,p))
x=1
break}r=r.b(s)?A.p(J.i(s,"result")):"error"
v=new A.YJ(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.YJ("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cHO,w)},
cH_(d){return C.dI0(d)},
dI0(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cH_=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aG("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cH_)
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
return A.m($async$cH_,w)},
dKA(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.LR(0,"pay-request-"+d,B.yf).NH(new C.cJU(e),B.GC,new G.Fj(H.y2,"id",d),"public","pay_requests").Pv(0)},
cMG(d){return C.dLN(d)},
dLN(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cMG=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cMG)
case 7:s=f
if(!y.f.b(s)){v=D.a1N
x=1
break}r=A.p(J.i(s,"result"))
q=A.B(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.p(p==null?"":p)
o=A.aC(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.B(J.i(s,"description"))
v=new C.a5U(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a1N
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cMG,w)},
akH(d){return C.dJ5(d)},
dJ5(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$akH=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f3("event-pay",d),$async$akH)
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
if(o instanceof A.pl){q=o
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
return A.m($async$akH,w)},
av3:function av3(d,e,f){this.a=d
this.b=e
this.c=f},
cJU:function cJU(d){this.a=d},
a5U:function a5U(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cR8(d){return C.dMr(d)},
dMr(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cR8=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aG("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cR8)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.GX
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
J.bq(r,new C.axN(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.B(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dJ(p)
p=p===!0?"entry":"profile"}k=A.B(J.i(s,"profile_id"))
v=new C.FL(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cS){v=D.GX
x=1
break}else{v=D.GX
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cR8,w)},
aUK(d,e){return C.dMq(d,e)},
dMq(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUK=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aG("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aUK)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aG("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aUK)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YH(null,"error")
x=1
break}r=A.p(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d0(A.p(q==null?"":q))
q=q==null?null:q.dF()
v=new A.YH(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YH(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUK,w)},
axN:function axN(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
FL:function FL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cYQ(d){return B.f.aT(B.j.k(A.hX(d)),2,"0")+":"+B.f.aT(B.j.k(A.hN(d)),2,"0")},
d7E(d){return new C.FM(d,null)},
dnz(){return new C.D2(null)},
due(d){return new C.F5(d,null)},
dBi(d){var x
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
default:x=A.aUx(d)
break}return x},
dBk(d){var x
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
dBj(d){var x
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
aiZ:function aiZ(d,e){this.c=d
this.a=e},
GS:function GS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FM:function FM(d,e){this.c=d
this.a=e},
aNC:function aNC(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cvo:function cvo(d,e){this.a=d
this.b=e},
cvp:function cvp(d,e,f){this.a=d
this.b=e
this.c=f},
cvw:function cvw(d){this.a=d},
cvv:function cvv(d){this.a=d},
cvu:function cvu(d){this.a=d},
cvt:function cvt(d){this.a=d},
cvs:function cvs(d,e){this.a=d
this.b=e},
cvq:function cvq(d,e,f){this.a=d
this.b=e
this.c=f},
cvr:function cvr(d){this.a=d},
wi:function wi(d,e,f){this.c=d
this.d=e
this.a=f},
w8:function w8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bLA:function bLA(){},
D2:function D2(d){this.a=d},
abO:function abO(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bNE:function bNE(d,e){this.a=d
this.b=e},
bNx:function bNx(d){this.a=d},
bNy:function bNy(d){this.a=d},
bNz:function bNz(d,e){this.a=d
this.b=e},
bNL:function bNL(d,e){this.a=d
this.b=e},
bNK:function bNK(){},
bNM:function bNM(d,e){this.a=d
this.b=e},
bND:function bND(d,e){this.a=d
this.b=e},
bNJ:function bNJ(d){this.a=d},
bNH:function bNH(d){this.a=d},
bNI:function bNI(d,e){this.a=d
this.b=e},
bNv:function bNv(){},
bNt:function bNt(d){this.a=d},
bNu:function bNu(d){this.a=d},
bNw:function bNw(d){this.a=d},
bNC:function bNC(d){this.a=d},
bNN:function bNN(d){this.a=d},
bNA:function bNA(d){this.a=d},
bNB:function bNB(d,e){this.a=d
this.b=e},
bNG:function bNG(){},
bNF:function bNF(d){this.a=d},
F5:function F5(d,e){this.c=d
this.a=e},
afr:function afr(){this.c=this.a=this.d=null},
clE:function clE(d){this.a=d},
clF:function clF(d,e){this.a=d
this.b=e},
clC:function clC(d){this.a=d},
clD:function clD(d){this.a=d},
clG:function clG(d){this.a=d},
clH:function clH(d){this.a=d},
aOi:function aOi(d,e,f){this.c=d
this.d=e
this.a=f},
cxa:function cxa(d){this.a=d},
cxb:function cxb(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[87]
G=c[124]
H=c[239]
C=a.updateHolder(c[14],C)
D=c[278]
I=c[231]
K=c[241]
F=c[279]
L=c[56]
M=c[281]
N=c[280]
C.av3.prototype={}
C.a5U.prototype={}
C.axN.prototype={}
C.FL.prototype={
gap(d){return this.c}}
C.aiZ.prototype={
u(d){var x=null
return A.x(x,this.c,B.r,x,x,$.cTu(),x,x,x,B.cT,x,x,x)}}
C.GS.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.cc,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bx,x,x))
v=this.e
if(v!=null)w.push(v)
return A.x(x,A.N(w,B.v,B.h,B.l,0,x),B.r,x,x,D.Kh,x,x,x,B.dM,x,x,x)}}
C.FM.prototype={
S(){return new C.aNC(A.E(y.N,y.R))}}
C.aNC.prototype={
KH(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KH=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cR8(u.a.c),$async$KH)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ad(t).Gf("/u/"+A.p(s),null,y.X)
v=new A.aP($.aT,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$KH,w)},
a3T(d,e){var x=e.c
return x==null?"e"+e.b:x},
R7(d,e){return this.aU8(d,e)},
aU8(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$R7=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cvo(u,e))
t=d.b
t.toString
x=3
return A.d(C.aUK(t,e),$async$R7)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cvp(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$R7,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KH()
return A.cO(null,B.by,A.bz(!0,A.b7_(new C.cvw(x),w,y.A),null,B.Z,!0),!0,null)},
bch(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bST
break
case"own_code":x=D.bT5
break
case"not_found":x=D.bSp
break
default:x=D.bT7
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
q=A.a([B.kS,A.b8(r,o?B.V:B.fP,p,p,96),B.a_,A.h(v,p,p,p,p,B.hP,B.a3,p),B.P,A.h(u,p,p,p,p,D.c4x,B.a3,p)],x)
if(o)B.e.n(q,A.a([B.d4,A.bA(B.t2,new C.cvu(this),p)],x))
return q},
bbA(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.N(A.a([new A.cf(r,44,d.d,!1,!0,s),B.af,A.a4(A.z(A.a([A.h(r,s,s,s,s,B.it,s,s),D.c7w],x),B.G,B.h,B.l),1),B.ab,D.cow],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.cY(B.bb,s,s,A.aJ(A.hh(D.c9Q,new C.cvs(this,d),A.fL(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bY,s,B.aa,B.c6,s,s,s,s)),36,s),s)],x))
w=A.a([new C.aiZ(A.z(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bN,D.c84],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b5m(0,d,v[t]))
return w},
b5m(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a3T(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
if(q!=null)r.push(new A.S(F.pV,A.h(B.dp[A.fE(q)-1]+", "+A.aD(q)+" "+B.bg[A.av(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ac)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.GS("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.GS("Pessoas",A.p(p),n,n))
q.push(new C.GS("Chegada",n,v?new C.wi("Registada \xe0s "+C.cYQ(w),!0,n):D.acB,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wi(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.coy
p=v?new C.wi("Registada \xe0s "+C.cYQ(w),!0,n):D.acB
B.e.n(r,A.a([new C.GS("Bilhete",n,q,n),new C.GS("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.ln,A.h(t,n,n,n,n,B.z0,n,n),n))
i=A.a([B.bN,i,B.ar,new C.aiZ(A.z(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cvq(o,e,f):n
if(r===m)r=B.yH
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kW,n,n)
t.push(A.a4(A.aJ(A.bA(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ae)
x.push(A.a4(A.aJ(A.hh(D.cbr,new C.cvr(o),A.fL(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.aa,B.c6,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.N(t,B.v,B.h,B.l,0,n))
return i}}
C.wi.prototype={
u(d){var x=null,w=this.d,v=w?B.cx:B.dU,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?B.cR:B.cn,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.I(v,x,x,u,x,x,B.x),x,x,x,B.dk,x,x,x)}}
C.w8.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.m9:A.h(x.c,w,w,w,w,B.eH,w,w)
if(x.e)v=A.hh(u,x.d,A.fL(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.aa,B.c6,w,w,w,w))
else{v=v?new C.bLA():x.d
v=A.bA(u,v,A.cb(B.z,B.z.cc(0.35),B.t,B.t,w,w,B.aa,w,w,w))}return A.aJ(v,52,1/0)}}
C.D2.prototype={
S(){return new C.abO(new A.aE(B.ak,$.aa()))}}
C.abO.prototype={
m(){this.Uv()
var x=this.e
x.Z$=$.aa()
x.W$=0
this.a7()},
Uv(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.y0(v)}w.y=null
v=w.z
if(v!=null)v.aK(0)
v=w.Q
if(v!=null)v.aK(0)},
bcd(d){this.p(new C.bNE(this,d))},
R9(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$R9=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bNx(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cHO(s,t.length===0?null:t),$async$R9)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bNy(u))
q=r.b
if(q==null){s=r.a
v=u.bho(s==null?"error":s)
x=1
break}u.p(new C.bNz(u,q))
u.bkX(q)
case 1:return A.l(v,w)}})
return A.m($async$R9,w)},
bkX(d){var x=this
x.Uv()
x.y=C.dKA(d.a,x.gb8m())
x.z=A.u3(B.hq,new C.bNL(x,d))
x.Q=A.u3(B.uI,new C.bNM(x,d))},
a4z(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bND(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aK(0)
x=w.Q
if(x!=null)x.aK(0)}},
bho(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fY(!0,new C.bNJ(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a0(A.bX(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
D7(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$D7=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fY(!0,new C.bNv(),t,y.x),$async$D7)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cH_(s.a),$async$D7)
case 6:if(u.c==null){x=1
break}case 4:u.Uv()
u.p(new C.bNw(u))
case 1:return A.l(v,w)}})
return A.m($async$D7,w)},
ao1(){this.Uv()
this.p(new C.bNC(this))},
akm(){var x,w=this
if(w.r!=null)if(w.w==="open")w.D7()
else w.ao1()
else{x=w.c
x.toString
A.am(x,!1).i6()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pS(B.lz,x.gaYo(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hP,w,w)
return A.cWw(u,A.cO(w,B.by,A.bz(!0,new A.S(D.atl,A.z(A.a([new A.cY(B.bb,w,w,t,w),B.R,s,B.bN,A.a4(u?x.b5v():x.bcD(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bNN(x),y.K)},
b5v(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bNA(o),j=$.cTu(),i=y.p
j=A.x(n,A.z(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a3,n),B.ac,A.bh(n,n,n,A.h(E.cI8(m),n,n,n,n,D.c0q,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.ase,n,n,n)
m=A.W(999)
x=A.bD(B.f9,0.5)
m=A.a([j,B.ac,A.x(n,A.N(A.a([D.c7I,B.ae,A.a4(A.cr(n,B.a6,!1,n,!0,B.y,n,A.ct(),o.e,n,n,n,n,n,2,D.aEY,B.W,!0,n,!0,n,!1,n,B.aB,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.al,n,n,n,n,n,n,n,n,n,n,n,B.kV,!0,B.au,n,B.hb,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.I(B.t,n,x,m,n,n,B.x),n,44,n,B.bY,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bBQ[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.et(v,0,j),s=J.an(t.a),r=t.b,t=new A.bW(s,r,A.u(t).i("bW<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.al(A.c_())
p=A.a([],i)
if(q.a>0)p.push(B.ae)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c4(n,x,n,n),A.N(u,B.v,B.h,B.l,0,n)],i))}m=A.a4(A.d4(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.z(A.a([m,B.R,new C.w8("Mostrar o QR para pagar",l?o.gakn():n,!1,j,n)],i),B.E,B.h,B.l)},
bcD(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cs(new A.ac(Date.now(),0,!1)).a
x=h<0?0:B.j.aO(h,1e6)
w=""+B.j.aO(x,60)+":"+B.f.aT(B.j.k(B.j.aI(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.cYQ(h==null?new A.ac(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bQJ
break
case"cancelled":h=D.bQC
break
default:h=D.bRW
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bNG()
q=j.c
q.toString
q=A.nN(q,!1).a_(0,$.b6(),y.D).b
p=q==null?i:q.x
q=$.cTu()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.it,B.a3,i))
n.push(new A.S(F.pV,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a3,i),i))
n.push(B.R)
if(g)n.push(D.bWS)
else{m=A.W(16)
l=A.bD(B.f9,0.5)
k=f?1:0.15
n.push(A.x(i,A.fa(A.bp0(B.t,A.kd("/pagar/"+d.b),B.GE,B.GF,B.Z,"QR para pagar "+E.cI8(j.d),186),k),B.r,i,i,new A.I(B.t,i,l,m,i,i,B.x),i,i,i,B.cT,i,i,i))}n.push(B.R)
n.push(A.h(E.cI8(j.d),i,i,i,i,B.hP,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a3,i))
if(f)B.e.n(n,A.a([B.ac,D.cov],o))
q=A.x(i,A.z(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.cT,i,i,i)
n=A.bh(i,i,i,h.$2("Estado",new C.wi(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a4(A.d4(A.a([q,B.aA,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bx,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.w8("Cancelar cobran\xe7a",j.gaYp(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.w8("Nova cobran\xe7a",j.gb7g(),!1,!1,i),B.ac,new C.w8("Fechar",new C.bNF(j),!0,!1,i)],o))
else h.push(new C.w8("Mostrar outro QR",j.gakn(),!1,j.f,i))
return A.z(h,B.E,B.h,B.l)}}
C.F5.prototype={
S(){return new C.afr()}}
C.afr.prototype={
ad(){this.aq()
this.Ix()},
Ix(){var x=0,w=A.n(y.H),v=this,u
var $async$Ix=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.clE(v))
x=2
return A.d(C.cMG(v.a.c),$async$Ix)
case 2:u=e
if(v.c!=null)v.p(new C.clF(v,u))
return A.l(null,w)}})
return A.m($async$Ix,w)},
aRK(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nL("",d.c,"pay_request",d.d/100,x,x,new C.clC(this),!1,new C.clD(d),B.VE,x,w,C.dJ8(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Ub(this.aRK(t),u)
x=s?"Pagar":C.dBk(t.a)
if(s)s=D.aI9
else{s=t.a
w=y.p
v=A.a([A.bN(A.a2h(s==="paid"?B.iK:B.q3,3,u,120),u,u),B.R,A.h(C.dBj(s),u,u,u,u,B.hd,B.a3,u),B.bh],w)
if(s==="error")B.e.n(v,A.a([new C.w8("Tentar outra vez",this.gaYq(),!1,!1,u),B.ac,new C.w8("Fechar",new C.clG(d),!0,!1,u)],w))
else v.push(new C.w8("OK",new C.clH(d),!1,!1,u))
s=v}return new C.aOi(x,s,u)}}
C.aOi.prototype={
u(d){var x=null,w=A.aS(d,x,y.w).w,v=A.a4(A.cp(B.bu,x,B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxa(d),x,x,x,x,x,x,!1,B.aE),1),u=y.p,t=A.a([A.bN(A.x(x,x,B.r,x,x,new A.I(N.u7,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aA,A.N(A.a([A.a4(A.h(this.c,x,x,x,x,B.bi,x,x),1),A.pS(B.ei,new C.cxb(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a_],u)
B.e.n(t,this.d)
return A.hg(!1,B.aM,!0,x,A.z(A.a([v,A.x(x,A.z(t,B.E,B.h,B.J),B.r,x,x,M.Ki,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.jX,B.l),B.r,x,0,x,x,x,x,x,B.fz)}}
var z=a.updateTypes(["F<~>()","~()","M(O,m2<FL>)","~(c)","c(c)"])
C.cJU.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:155}
C.cvo.prototype={
$0(){var x=this.a
return x.f=x.a3T(0,this.b)},
$S:0}
C.cvp.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a3T(0,this.b),this.c)},
$S:0}
C.cvw.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bXy
x=y.p
w=A.a([A.N(A.a([A.pS(B.lz,new C.cvv(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.cga,B.bN],x))
else w.push(B.a_)
x=this.a
if(!v)B.e.n(w,x.bch(t))
else B.e.n(w,x.bbA(t))
return A.d4(w,u,B.CN,u,u,!1,!1)},
$S:z+2}
C.cvv.prototype={
$0(){return A.am(this.a,!1).i6()},
$S:0}
C.cvu.prototype={
$0(){var x=this.a
return x.p(new C.cvt(x))},
$S:0}
C.cvt.prototype={
$0(){var x=this.a
return x.d=x.KH()},
$S:0}
C.cvs.prototype={
$0(){var x=this.a.c
x.toString
return A.ad(x).ak("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cvq.prototype={
$0(){return this.a.R7(this.b,this.c)},
$S:0}
C.cvr.prototype={
$0(){var x=this.a.c
x.toString
return A.ad(x).ak("/cobrar",null,y.X)},
$S:0}
C.bLA.prototype={
$0(){},
$S:0}
C.bNE.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aO(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dA(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bNx.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bNy.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bNz.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bNL.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.hc(new A.ac(Date.now(),0,!1)))x.a4z("expired")
else x.p(new C.bNK())},
$S:67}
C.bNK.prototype={
$0(){},
$S:0}
C.bNM.prototype={
$1(d){return this.aDR(d)},
aDR(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.akH(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a4z("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:505}
C.bND.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ac(Date.now(),0,!1)},
$S:0}
C.bNJ.prototype={
$1(d){var x=null
return new A.eS(D.c7Z,D.cb4,A.a([A.cG(B.mm,x,x,new C.bNH(d),x,x),A.bA(D.c95,new C.bNI(this.a,d),x)],y.p),x)},
$S:19}
C.bNH.prototype={
$0(){return A.am(this.a,!1).bj()},
$S:0}
C.bNI.prototype={
$0(){A.am(this.b,!1).bj()
var x=this.a.c
x.toString
A.ad(x).ak("/partner-payments/setup",null,y.X)},
$S:0}
C.bNv.prototype={
$1(d){var x=null
return new A.eS(D.caM,D.caj,A.a([A.cG(D.cb3,x,x,new C.bNt(d),x,x),A.bA(D.c90,new C.bNu(d),x)],y.p),x)},
$S:19}
C.bNt.prototype={
$0(){return A.am(this.a,!1).af(!1)},
$S:0}
C.bNu.prototype={
$0(){return A.am(this.a,!1).af(!0)},
$S:0}
C.bNw.prototype={
$0(){return this.a.r=null},
$S:0}
C.bNC.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.k_(0,B.j8)},
$S:0}
C.bNN.prototype={
$2(d,e){if(!d)this.a.akm()},
$S:233}
C.bNA.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a4(A.bh(x,!0,x,A.hg(!1,B.aM,!0,x,A.eW(!1,t,!0,A.aJ(A.bN(w?D.aDv:A.h(d,x,x,x,x,B.oT,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bNB(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fN(u,D.K4),x,x,B.cW),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:229}
C.bNB.prototype={
$0(){return this.a.bcd(this.b)},
$S:0}
C.bNG.prototype={
$2(d,e){var x=null
return A.x(x,A.N(A.a([A.a4(A.h(d,x,x,x,x,B.cc,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.Kh,x,x,x,B.cj,x,x,x)},
$S:1367}
C.bNF.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).i6()},
$S:0}
C.clE.prototype={
$0(){return this.a.d=null},
$S:0}
C.clF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.clC.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aE7(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aE7(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.akH(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.ajw)
t=r.h(s,"error")
if(t!=null)throw A.q(A.b_4(A.p(t)))
v=A.cMH(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:151}
C.clD.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.ou
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.akH(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1368}
C.clG.prototype={
$0(){return A.ad(this.a).af(null)},
$S:0}
C.clH.prototype={
$0(){return A.ad(this.a).af(null)},
$S:0}
C.cxa.prototype={
$0(){return A.ad(this.a).af(null)},
$S:0}
C.cxb.prototype={
$0(){return A.ad(this.a).af(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dJ8","dBi",4)
var u
w(u=C.abO.prototype,"gakn","R9",0)
v(u,"gb8m","a4z",3)
w(u,"gaYp","D7",0)
w(u,"gb7g","ao1",1)
w(u,"gaYo","akm",1)
w(C.afr.prototype,"gaYq","Ix",0)})();(function inheritance(){var x=a.inheritMany
x(A.L,[C.av3,C.a5U,C.axN,C.FL])
x(A.br,[C.cJU,C.bNL,C.bNM,C.bNJ,C.bNv,C.bNA,C.clC])
x(A.M,[C.aiZ,C.GS,C.wi,C.w8,C.aOi])
x(A.G,[C.FM,C.D2,C.F5])
x(A.a0,[C.aNC,C.abO,C.afr])
x(A.bK,[C.cvo,C.cvp,C.cvv,C.cvu,C.cvt,C.cvs,C.cvq,C.cvr,C.bLA,C.bNE,C.bNx,C.bNy,C.bNz,C.bNK,C.bND,C.bNH,C.bNI,C.bNt,C.bNu,C.bNw,C.bNC,C.bNB,C.bNF,C.clE,C.clF,C.clD,C.clG,C.clH,C.cxa,C.cxb])
x(A.cJ,[C.cvw,C.bNN,C.bNG])})()
A.bp(b.typeUniverse,JSON.parse('{"aiZ":{"M":[],"e":[],"f":[]},"GS":{"M":[],"e":[],"f":[]},"FM":{"G":[],"e":[],"f":[]},"aNC":{"a0":["FM"]},"wi":{"M":[],"e":[],"f":[]},"w8":{"M":[],"e":[],"f":[]},"D2":{"G":[],"e":[],"f":[]},"abO":{"a0":["D2"]},"F5":{"G":[],"e":[],"f":[]},"afr":{"a0":["F5"]},"aOi":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{D:x("cE"),E:x("r<axN>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("ds"),K:x("L"),y:x("a5U"),m:x("ou"),k:x("+(c,bk)"),R:x("+at,result(ac?,c)"),u:x("+error,request(c?,av3?)"),A:x("FL"),N:x("c"),v:x("aP<FL>"),q:x("dk"),x:x("C"),z:x("@"),g:x("t<@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.K4=new A.bf(B.f9,0.5,B.aj,-1)
D.aeS=new A.dL(D.K4,B.ad,B.ad,B.ad)
D.Kh=new A.I(null,null,D.aeS,null,null,null,B.x)
D.ajw=new A.D8("invalid_state")
D.ase=new A.a3(14,18,14,18)
D.atl=new A.a3(20,8,20,20)
D.aC9=new A.aZ(61109,"MaterialIcons",null,!0)
D.aDv=new A.b7(D.aC9,22,B.z,null,null,null)
D.aEY=new A.dD(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.br,null,null,B.br,B.br,!0,null,null,null,null)
D.bXb=new A.kT(40,40,20,B.t,0,null)
D.bX3=new A.kT(null,32,12,B.t,1,null)
D.azD=new A.bI(1,B.at,D.bX3,null)
D.bwm=x([D.bXb,B.af,D.azD],y.p)
D.bTw=new A.nQ(B.bJ,B.h,B.l,B.v,null,B.cg,null,0,D.bwm,null)
D.bX5=new A.kT(null,120,22,B.t,1,null)
D.bXa=new A.kT(null,56,22,B.t,2,null)
D.bXc=new A.kT(null,52,26,B.t,2,null)
D.aI9=x([D.bTw,B.bN,D.bX5,B.R,D.bXa,B.a_,D.bXc],y.p)
D.bxc=x(["1","2","3"],y.s)
D.bvW=x(["4","5","6"],y.s)
D.btJ=x(["7","8","9"],y.s)
D.b6s=x(["00","0","del"],y.s)
D.bBQ=x([D.bxc,D.bvW,D.btJ,D.b6s],A.y("r<t<c>>"))
D.a1N=new C.a5U("error",null,"",0,null)
D.bQC=new A.X("Cancelado",!1)
D.bQJ=new A.X("Expirou",!1)
D.bRW=new A.X("\xc0 espera\u2026",!1)
D.bSp=new A.bV(I.kC,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bST=new A.bV(B.hy,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bT5=new A.bV(B.kB,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bT7=new A.bV(B.DZ,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.byR=x([],y.E)
D.GX=new C.FL("error",null,null,null,D.byR,"entry",null)
D.aum=new A.nv(B.iK,150,3,null,null)
D.aj9=new A.f4(B.K,null,null,D.aum,null)
D.bWS=new A.c4(null,214,D.aj9,null)
D.bXy=new A.vR(!1,3,!1,null)
D.c0q=new A.P(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4x=new A.P(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7w=new A.D("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c7I=new A.D("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c7Z=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c84=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mi,null,null,null,null,null,null,null)
D.c90=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.c95=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.c9Q=new A.D("Ver perfil",null,K.rT,null,null,null,null,null,null,null)
D.caj=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.caM=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.cb3=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.cb4=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.cbr=new A.D("Cobrar",null,B.kW,null,null,null,null,null,null,null)
D.cga=new A.D("Quem \xe9",null,B.hP,null,null,null,null,null,null,null)
D.cov=new C.wi("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cow=new C.wi("Verificado",!0,null)
D.acB=new C.wi("Por registar",!1,null)
D.coy=new C.wi("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTW","cTu",()=>{var w=A.W(16)
return A.dni(A.bD(B.f9,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["NBnSB38FVFk+uW+mUAaP8fIoNM8="]=a.current})($__dart_deferred_initializers__);