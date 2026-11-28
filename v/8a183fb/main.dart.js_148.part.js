((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cI4(d,e){return C.dIm(d,e)},
dIm(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cI4=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.R().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aM("create_pay_request",A.T(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cI4)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.dh(A.q(J.i(s,"expires_at")))
p=p==null?null:p.e1()
if(p==null)p=new A.ad(Date.now(),0,!1).e6(6e8)
v=new A.YX(null,new C.avB(r,q,p))
x=1
break}r=r.b(s)?A.q(J.i(s,"result")):"error"
v=new A.YX(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.YX("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cI4,w)},
cHg(d){return C.dHG(d)},
dHG(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHg=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.R().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aM("cancel_pay_request",A.T(["p_id",d],y.N,s),s),$async$cHg)
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
return A.m($async$cHg,w)},
dKc(d,e){var x=$.R().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.Mk(0,"pay-request-"+d,B.yH).Ol(new C.cK7(e),B.Ha,new G.Fx(H.yu,"id",d),"public","pay_requests").Qg(0)},
cMO(d){return C.dLp(d)},
dLp(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cMO=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.R().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aM("pay_request_info",A.T(["p_code",d],y.N,q),q),$async$cMO)
case 7:s=f
if(!y.f.b(s)){v=D.a2J
x=1
break}r=A.q(J.i(s,"result"))
q=A.C(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.q(p==null?"":p)
o=A.aL(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.i(s,"description"))
v=new C.a66(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a2J
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cMO,w)},
alj(d){return C.dIK(d)},
dIK(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$alj=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.R().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f6("event-pay",d),$async$alj)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.hb(r,o,n):A.T(["error","unknown_error"],o,n)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
if(o instanceof A.pm){q=o
p=q.b
o=y.N
n=y.z
o=y.f.b(p)?J.hb(p,o,n):A.T(["error","unknown_error"],o,n)
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
return A.m($async$alj,w)},
avB:function avB(d,e,f){this.a=d
this.b=e
this.c=f},
cK7:function cK7(d){this.a=d},
a66:function a66(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cR_(d){return C.dM2(d)},
dM2(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cR_=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aM("scan_qr",A.T(["p_token",b0],y.N,o),o),$async$cR_)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.Hv
x=1
break}o=A.q(J.i(s,"result"))
n=A.C(J.i(s,"scan_id"))
m=A.C(J.i(s,"name"))
l=A.C(J.i(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.i(s,"items"))
j=J.ap(j==null?B.am:j)
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
a1=A.dh(A.q(a1==null?"":a1))
a2=A.C(h.h(i,"booking_number"))
a3=A.aL(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.C(J.i(g,"status")):null
if(a5){a5=A.aL(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.dh(A.q(a7==null?"":a7))
a7=a7==null?null:a7.e1()
J.o(h.h(i,"can_charge"),!0)
J.bu(r,new C.ayj(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dJ(p)
p=p===!0?"entry":"profile"}k=A.C(J.i(s,"profile_id"))
v=new C.FZ(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cU){v=D.Hv
x=1
break}else{v=D.Hv
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cR_,w)},
aVy(d,e){return C.dM1(d,e)},
dM1(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVy=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.R().b
p===$&&A.b()
x=10
return A.d(p.aM("scan_booking_arrival",A.T(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVy)
case 10:o=g
x=8
break
case 9:p=$.R().b
p===$&&A.b()
x=11
return A.d(p.aM("scan_check_in",A.T(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVy)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YV(null,"error")
x=1
break}r=A.q(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.dh(A.q(q==null?"":q))
q=q==null?null:q.e1()
v=new A.YV(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YV(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVy,w)},
ayj:function ayj(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
FZ:function FZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cYL(d){return B.f.aY(B.j.k(A.ic(d)),2,"0")+":"+B.f.aY(B.j.k(A.hY(d)),2,"0")},
d7v(d){return new C.G_(d,null)},
dnh(){return new C.Dd(null)},
dtW(d){return new C.Fj(d,null)},
dB0(d){var x
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
default:x=A.aVm(d)
break}return x},
dB2(d){var x
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
dB1(d){var x
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
ajt:function ajt(d,e){this.c=d
this.a=e},
H2:function H2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
G_:function G_(d,e){this.c=d
this.a=e},
aOx:function aOx(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cvm:function cvm(d,e){this.a=d
this.b=e},
cvn:function cvn(d,e,f){this.a=d
this.b=e
this.c=f},
cvu:function cvu(d){this.a=d},
cvt:function cvt(d){this.a=d},
cvs:function cvs(d){this.a=d},
cvr:function cvr(d){this.a=d},
cvq:function cvq(d,e){this.a=d
this.b=e},
cvo:function cvo(d,e,f){this.a=d
this.b=e
this.c=f},
cvp:function cvp(d){this.a=d},
wr:function wr(d,e,f){this.c=d
this.d=e
this.a=f},
wg:function wg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bLE:function bLE(){},
Dd:function Dd(d){this.a=d},
ac5:function ac5(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bNJ:function bNJ(d,e){this.a=d
this.b=e},
bNC:function bNC(d){this.a=d},
bND:function bND(d){this.a=d},
bNE:function bNE(d,e){this.a=d
this.b=e},
bNQ:function bNQ(d,e){this.a=d
this.b=e},
bNP:function bNP(){},
bNR:function bNR(d,e){this.a=d
this.b=e},
bNI:function bNI(d,e){this.a=d
this.b=e},
bNO:function bNO(d){this.a=d},
bNM:function bNM(d){this.a=d},
bNN:function bNN(d,e){this.a=d
this.b=e},
bNA:function bNA(){},
bNy:function bNy(d){this.a=d},
bNz:function bNz(d){this.a=d},
bNB:function bNB(d){this.a=d},
bNH:function bNH(d){this.a=d},
bNS:function bNS(d){this.a=d},
bNF:function bNF(d){this.a=d},
bNG:function bNG(d,e){this.a=d
this.b=e},
bNL:function bNL(){},
bNK:function bNK(d){this.a=d},
Fj:function Fj(d,e){this.c=d
this.a=e},
afT:function afT(){this.c=this.a=this.d=null},
clx:function clx(d){this.a=d},
cly:function cly(d,e){this.a=d
this.b=e},
clv:function clv(d){this.a=d},
clw:function clw(d){this.a=d},
clz:function clz(d){this.a=d},
clA:function clA(d){this.a=d},
aPd:function aPd(d,e,f){this.c=d
this.d=e
this.a=f},
cx8:function cx8(d){this.a=d},
cx9:function cx9(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[87]
G=c[122]
H=c[242]
C=a.updateHolder(c[14],C)
D=c[281]
I=c[234]
K=c[245]
F=c[282]
L=c[56]
M=c[284]
N=c[283]
C.avB.prototype={}
C.a66.prototype={}
C.ayj.prototype={}
C.FZ.prototype={
gao(d){return this.c}}
C.ajt.prototype={
u(d){var x=null
return A.B(x,this.c,B.r,x,x,$.cTn(),x,x,x,B.cA,x,x,x)}}
C.H2.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.ch,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bD,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.B(x,A.N(w,B.w,B.h,B.l,0,x,x),B.r,x,x,D.KY,x,x,x,B.dV,x,x,x)}}
C.G_.prototype={
P(){return new C.aOx(A.E(y.N,y.R))}}
C.aOx.prototype={
Lb(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$Lb=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cR_(u.a.c),$async$Lb)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ah(t).GH("/u/"+A.q(s),null,y.X)
v=new A.aO($.aU,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Lb,w)},
a4P(d,e){var x=e.c
return x==null?"e"+e.b:x},
RN(d,e){return this.aVw(d,e)},
aVw(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$RN=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cvm(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVy(t,e),$async$RN)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cvn(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$RN,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.Lb()
return A.cP(null,B.bz,A.bE(!0,A.cVu(new C.cvu(x),w,y.A),null,B.a_,!0),!0,null)},
bel(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bUd
break
case"own_code":x=D.bUq
break
case"not_found":x=D.bTK
break
default:x=D.bUs
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
q=A.a([B.mv,A.b4(r,o?B.V:B.fr,p,p,96),B.a1,A.h(v,p,p,p,p,B.hm,B.a6,p,p),B.S,A.h(u,p,p,p,p,D.c6k,B.a6,p,p)],x)
if(o)B.e.n(q,A.a([B.cR,A.bF(B.tx,new C.cvs(this),p)],x))
return q},
bdG(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.N(A.a([new A.cp(r,44,d.d,!1,!0,s),B.af,A.a4(A.y(A.a([A.h(r,s,s,s,s,B.is,s,s,s),D.cgq],x),B.H,B.h,B.l,0,B.u),1),B.ag,D.cqK],x),B.w,B.h,B.l,0,s,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.cZ(B.bg,s,s,A.aG(A.h5(D.cfM,new C.cvq(this,d),A.fJ(s,s,B.t,s,s,s,s,s,s,B.A,s,s,B.bU,s,B.ad,B.c7,s,s,s,s)),36,s),s)],x))
w=A.a([new C.ajt(A.y(w,B.G,B.h,B.l,0,B.u),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bs,D.cdb],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b7v(0,d,v[t]))
return w},
b7v(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a4P(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
s=i}i=A.h(k?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",n,n,n,n,B.aL,n,n,n)
x=y.p
r=A.a([A.h(f.d,n,n,n,n,B.is,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.Q(F.qw,A.h(B.dY[A.fR(q)-1]+", "+A.aH(q)+" "+B.bG[A.au(q)-1],n,n,n,n,B.O,n,n,n),n))
r.push(B.ac)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H2("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H2("Pessoas",A.q(p),n,n))
q.push(new C.H2("Chegada",n,v?new C.wr("Registada \xe0s "+C.cYL(w),!0,n):D.adI,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wr(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cqM
p=v?new C.wr("Registada \xe0s "+C.cYL(w),!0,n):D.adI
B.e.n(r,A.a([new C.H2("Bilhete",n,q,n),new C.H2("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.Q(B.nG,A.h(t,n,n,n,n,B.zq,n,n,n),n))
i=A.a([B.bs,i,B.av,new C.ajt(A.y(r,B.G,B.h,B.l,0,B.u),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cvo(o,e,f):n
if(r===m)r=B.z7
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.l1,n,n,n)
t.push(A.a4(A.aG(A.bF(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ah)
x.push(A.a4(A.aG(A.h5(D.cfu,new C.cvp(o),A.fJ(n,n,B.t,n,n,n,n,n,n,B.A,n,n,n,n,B.ad,B.c7,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.N(t,B.w,B.h,B.l,0,n,n))
return i}}
C.wr.prototype={
u(d){var x=null,w=this.d,v=w?B.cJ:B.e2,u=A.W(999)
return A.B(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?B.d_:B.cq,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.L(v,x,x,u,x,x,B.y),x,x,x,B.dz,x,x,x)}}
C.wg.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mt:A.h(x.c,w,w,w,w,B.eJ,w,w,w)
if(x.e)v=A.h5(u,x.d,A.fJ(w,w,B.t,w,w,w,w,w,w,B.A,w,w,w,w,B.ad,B.c7,w,w,w,w))
else{v=v?new C.bLE():x.d
v=A.bF(u,v,A.cn(B.A,B.A.cd(0.35),B.t,B.t,w,w,B.ad,w,w,w))}return A.aG(v,52,1/0)}}
C.Dd.prototype={
P(){return new C.ac5(new A.aF(B.al,$.aa()))}}
C.ac5.prototype={
m(){this.V1()
var x=this.e
x.Y$=$.aa()
x.W$=0
this.a6()},
V1(){var x,w=this,v=w.y
if(v!=null){x=$.R().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yi(v)}w.y=null
v=w.z
if(v!=null)v.aL(0)
v=w.Q
if(v!=null)v.aL(0)},
beh(d){this.p(new C.bNJ(this,d))},
RO(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$RO=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bNC(u))
t=B.f.C(u.e.a.a)
s=u.d
x=3
return A.d(C.cI4(s,t.length===0?null:t),$async$RO)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bND(u))
q=r.b
if(q==null){s=r.a
v=u.bjs(s==null?"error":s)
x=1
break}u.p(new C.bNE(u,q))
u.bnf(q)
case 1:return A.l(v,w)}})
return A.m($async$RO,w)},
bnf(d){var x=this
x.V1()
x.y=C.dKc(d.a,x.gbat())
x.z=A.u8(B.fS,new C.bNQ(x,d))
x.Q=A.u8(B.v7,new C.bNR(x,d))},
a5u(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bNI(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aL(0)
x=w.Q
if(x!=null)x.aL(0)}},
bjs(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fT(!0,new C.bNO(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a3(A.c7(w,w,w,w,w,B.z,w,A.h(x,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Du(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Du=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fT(!0,new C.bNA(),t,y.x),$async$Du)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHg(s.a),$async$Du)
case 6:if(u.c==null){x=1
break}case 4:u.V1()
u.p(new C.bNB(u))
case 1:return A.l(v,w)}})
return A.m($async$Du,w)},
aoW(){this.V1()
this.p(new C.bNH(this))},
ald(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Du()
else w.aoW()
else{x=w.c
x.toString
A.am(x,!1).iz()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pZ(B.lQ,x.gaZL(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hm,w,w,w)
return A.bnZ(u,A.cP(w,B.bz,A.bE(!0,new A.Q(D.auv,A.y(A.a([new A.cZ(B.bg,w,w,t,w),B.R,s,B.bs,A.a4(u?x.b7E():x.beH(v),1)],y.p),B.G,B.h,B.l,0,B.u),w),w,B.a_,!0),!0,w),new C.bNS(x),y.K)},
b7E(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bNF(o),j=$.cTn(),i=y.p
j=A.B(n,A.y(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.O,B.a6,n,n),B.ac,A.b8(n,n,n,A.h(E.cIn(m),n,n,n,n,D.c2c,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.w,B.h,B.l,0,B.u),B.r,n,n,j,n,n,n,D.atn,n,n,n)
m=A.W(999)
x=A.bB(B.fq,0.5)
m=A.a([j,B.ac,A.B(n,A.N(A.a([D.ceU,B.ah,A.a4(A.cs(n,B.a8,!1,n,!0,B.z,n,A.cx(),o.e,n,n,n,n,n,2,D.aG1,B.Z,!0,n,!0,n,!1,n,B.aD,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.aq,n,n,n,n,n,n,n,n,n,n,n,B.l0,!0,B.ar,n,B.hc,n,n,n,n),1)],i),B.w,B.h,B.l,0,n,n),B.r,n,n,new A.L(B.t,n,x,m,n,n,B.y),n,44,n,B.bU,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bD5[w]
x=B.e.gK(v)==="1"?16:10
u=A.a([],i)
for(t=A.eB(v,0,j),s=J.ap(t.a),r=t.b,t=new A.c2(s,r,A.u(t).i("c2<1>"));t.t();){q=t.c
q=q>=0?new A.a1(r+q,s.gE(s)):A.ak(A.c4())
p=A.a([],i)
if(q.a>0)p.push(B.ah)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c_(n,x,n,n),A.N(u,B.w,B.h,B.l,0,n,n)],i))}m=A.a4(A.d0(m,n,B.a_,n,n,!1,B.a3,!1),1)
j=o.f
return A.y(A.a([m,B.R,new C.wg("Mostrar o QR para pagar",l?o.gale():n,!1,j,n)],i),B.G,B.h,B.l,0,B.u)},
beH(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cK(new A.ad(Date.now(),0,!1)).a
x=h<0?0:B.j.aT(h,1e6)
w=""+B.j.aT(x,60)+":"+B.f.aY(B.j.k(B.j.aq(x,60)),2,"0")
v=B.f.C(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.a1("Pago \xe0s "+C.cYL(h==null?new A.ad(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bS3
break
case"cancelled":h=D.bRX
break
default:h=D.bTg
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bNL()
q=j.c
q.toString
q=A.nP(q,!1).a1(0,$.ba(),y.D).b
p=q==null?i:q.x
q=$.cTn()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.C(p).length!==0)n.push(A.h(B.f.C(p),i,i,i,i,B.is,B.a6,i,i))
n.push(new A.Q(F.qw,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.O,B.a6,i,i),i))
n.push(B.R)
if(g)n.push(D.bYA)
else{m=A.W(16)
l=A.bB(B.fq,0.5)
k=f?1:0.15
n.push(A.B(i,A.fe(A.cWB(B.t,A.kC("/pagar/"+d.b),B.Hc,B.Hd,B.a_,"QR para pagar "+E.cIn(j.d),186),k),B.r,i,i,new A.L(B.t,i,l,m,i,i,B.y),i,i,i,B.cA,i,i,i))}n.push(B.R)
n.push(A.h(E.cIn(j.d),i,i,i,i,B.hm,i,i,i))
n.push(B.aY)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.O,B.a6,i,i))
if(f)B.e.n(n,A.a([B.ac,D.cqJ],o))
q=A.B(i,A.y(n,B.w,B.h,B.l,0,B.u),B.r,i,i,q,i,i,i,B.cA,i,i,i)
n=A.b8(i,i,i,h.$2("Estado",new C.wr(r,t,i)),!1,i,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a4(A.d0(A.a([q,B.aC,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bD,i,i,i))],o),i,B.a_,i,i,!1,B.a3,!1),1),B.R],o)
if(f)h.push(new C.wg("Cancelar cobran\xe7a",j.gaZM(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wg("Nova cobran\xe7a",j.gb9l(),!1,!1,i),B.ac,new C.wg("Fechar",new C.bNK(j),!0,!1,i)],o))
else h.push(new C.wg("Mostrar outro QR",j.gale(),!1,j.f,i))
return A.y(h,B.G,B.h,B.l,0,B.u)}}
C.Fj.prototype={
P(){return new C.afT()}}
C.afT.prototype={
ad(){this.ar()
this.J_()},
J_(){var x=0,w=A.n(y.H),v=this,u
var $async$J_=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.clx(v))
x=2
return A.d(C.cMO(v.a.c),$async$J_)
case 2:u=e
if(v.c!=null)v.p(new C.cly(v,u))
return A.l(null,w)}})
return A.m($async$J_,w)},
aT2(d){var x=null,w=d.e,v=w==null?x:B.f.C(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.ow("",d.c,"pay_request",d.d/100,x,x,new C.clv(this),!1,new C.clw(d),B.Wx,x,w,C.dIN(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Uk(this.aT2(t),u)
x=s?"Pagar":C.dB2(t.a)
if(s)s=D.aJg
else{s=t.a
w=y.p
v=A.a([A.bN(A.a2w(s==="paid"?B.jJ:B.qF,3,u,120),u,u),B.R,A.h(C.dB1(s),u,u,u,u,B.hi,B.a6,u,u),B.bj],w)
if(s==="error")B.e.n(v,A.a([new C.wg("Tentar outra vez",this.gaZN(),!1,!1,u),B.ac,new C.wg("Fechar",new C.clz(d),!0,!1,u)],w))
else v.push(new C.wg("OK",new C.clA(d),!1,!1,u))
s=v}return new C.aPd(x,s,u)}}
C.aPd.prototype={
u(d){var x=null,w=A.ax(d,x,y.w).w,v=A.a4(A.cT(B.bP,x,B.Z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cx8(d),x,x,x,x,x,x,!1,B.aQ),1),u=y.p,t=A.a([A.bN(A.B(x,x,B.r,x,x,new A.L(N.uw,x,x,A.W(3),x,x,B.y),x,5,x,x,x,x,40),x,x),B.aC,A.N(A.a([A.a4(A.h(this.c,x,x,x,x,B.bk,x,x,x),1),A.pZ(B.em,new C.cx9(d),"Fechar")],u),B.w,B.h,B.l,0,x,x),B.a1],u)
B.e.n(t,this.d)
return A.fq(!1,B.aE,!0,x,A.y(A.a([v,A.B(x,A.y(t,B.G,B.h,B.K,0,B.u),B.r,x,x,M.KZ,x,x,x,new A.a2(20,10,20,20+w.r.d),x,x,1/0)],u),B.w,B.j1,B.l,0,B.u),B.r,x,0,x,x,x,x,x,B.eA)}}
var z=a.updateTypes(["F<~>()","~()","I(O,nn<FZ>)","~(c)","c(c)"])
C.cK7.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:126}
C.cvm.prototype={
$0(){var x=this.a
return x.f=x.a4P(0,this.b)},
$S:0}
C.cvn.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4P(0,this.b),this.c)},
$S:0}
C.cvu.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bZg
x=y.p
w=A.a([A.N(A.a([A.pZ(B.lQ,new C.cvt(d),"Voltar")],x),B.w,B.h,B.l,0,u,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.c95,B.bs],x))
else w.push(B.a1)
x=this.a
if(!v)B.e.n(w,x.bel(t))
else B.e.n(w,x.bdG(t))
return A.d0(w,u,B.Dh,u,u,!1,B.a3,!1)},
$S:z+2}
C.cvt.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
C.cvs.prototype={
$0(){var x=this.a
return x.p(new C.cvr(x))},
$S:0}
C.cvr.prototype={
$0(){var x=this.a
return x.d=x.Lb()},
$S:0}
C.cvq.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.cvo.prototype={
$0(){return this.a.RN(this.b,this.c)},
$S:0}
C.cvp.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/cobrar",null,y.X)},
$S:0}
C.bLE.prototype={
$0(){},
$S:0}
C.bNJ.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aT(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dX(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bNC.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bND.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bNE.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bNQ.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.h5(new A.ad(Date.now(),0,!1)))x.a5u("expired")
else x.p(new C.bNP())},
$S:67}
C.bNP.prototype={
$0(){},
$S:0}
C.bNR.prototype={
$1(d){return this.aF3(d)},
aF3(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.alj(A.T(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a5u("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:354}
C.bNI.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ad(Date.now(),0,!1)},
$S:0}
C.bNO.prototype={
$1(d){var x=null
return new A.eU(D.cbr,D.cir,A.a([A.cw(B.mG,x,x,new C.bNM(d),x,x),A.bF(D.cij,new C.bNN(this.a,d),x)],y.p),x)},
$S:18}
C.bNM.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
C.bNN.prototype={
$0(){A.am(this.b,!1).bx()
var x=this.a.c
x.toString
A.ah(x).av("/partner-payments/setup",null,y.X)},
$S:0}
C.bNA.prototype={
$1(d){var x=null
return new A.eU(D.chO,D.cgx,A.a([A.cw(D.cfU,x,x,new C.bNy(d),x,x),A.bF(D.cdv,new C.bNz(d),x)],y.p),x)},
$S:18}
C.bNy.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.bNz.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.bNB.prototype={
$0(){return this.a.r=null},
$S:0}
C.bNH.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.j7(0,B.jd)},
$S:0}
C.bNS.prototype={
$2(d,e){if(!d)this.a.ald()},
$S:154}
C.bNF.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a4(A.b8(x,!0,x,A.fq(!1,B.aE,!0,x,A.eC(!1,t,!0,A.aG(A.bN(w?D.aEx:A.h(d,x,x,x,x,B.pg,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bNG(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fE(u,D.KL),x,x,B.cD),!1,x,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:271}
C.bNG.prototype={
$0(){return this.a.beh(this.b)},
$S:0}
C.bNL.prototype={
$2(d,e){var x=null
return A.B(x,A.N(A.a([A.a4(A.h(d,x,x,x,x,B.ch,x,x,x),1),e],y.p),B.w,B.h,B.l,0,x,x),B.r,x,x,D.KY,x,x,x,B.cn,x,x,x)},
$S:1373}
C.bNK.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).iz()},
$S:0}
C.clx.prototype={
$0(){return this.a.d=null},
$S:0}
C.cly.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.clv.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aFk(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aFk(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.alj(A.T(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.akC)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b_T(A.q(t)))
v=A.cMP(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:141}
C.clw.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oS
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.alj(A.T(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.a1(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1374}
C.clz.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
C.clA.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
C.cx8.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
C.cx9.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dIN","dB0",4)
var u
w(u=C.ac5.prototype,"gale","RO",0)
v(u,"gbat","a5u",3)
w(u,"gaZM","Du",0)
w(u,"gb9l","aoW",1)
w(u,"gaZL","ald",1)
w(C.afT.prototype,"gaZN","J_",0)})();(function inheritance(){var x=a.inheritMany
x(A.K,[C.avB,C.a66,C.ayj,C.FZ])
x(A.by,[C.cK7,C.bNQ,C.bNR,C.bNO,C.bNA,C.bNF,C.clv])
x(A.I,[C.ajt,C.H2,C.wr,C.wg,C.aPd])
x(A.G,[C.G_,C.Dd,C.Fj])
x(A.Y,[C.aOx,C.ac5,C.afT])
x(A.bR,[C.cvm,C.cvn,C.cvt,C.cvs,C.cvr,C.cvq,C.cvo,C.cvp,C.bLE,C.bNJ,C.bNC,C.bND,C.bNE,C.bNP,C.bNI,C.bNM,C.bNN,C.bNy,C.bNz,C.bNB,C.bNH,C.bNG,C.bNK,C.clx,C.cly,C.clw,C.clz,C.clA,C.cx8,C.cx9])
x(A.cN,[C.cvu,C.bNS,C.bNL])})()
A.bq(b.typeUniverse,JSON.parse('{"ajt":{"I":[],"e":[],"f":[]},"H2":{"I":[],"e":[],"f":[]},"G_":{"G":[],"e":[],"f":[]},"aOx":{"Y":["G_"]},"wr":{"I":[],"e":[],"f":[]},"wg":{"I":[],"e":[],"f":[]},"Dd":{"G":[],"e":[],"f":[]},"ac5":{"Y":["Dd"]},"Fj":{"G":[],"e":[],"f":[]},"afT":{"Y":["Fj"]},"aPd":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),E:x("r<ayj>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("df"),K:x("K"),y:x("a66"),m:x("tI"),k:x("+(c,bn)"),R:x("+at,result(ad?,c)"),u:x("+error,request(c?,avB?)"),A:x("FZ"),N:x("c"),v:x("aO<FZ>"),q:x("dn"),x:x("x"),z:x("@"),g:x("t<@>?"),X:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.KL=new A.bb(B.fq,0.5,B.ai,-1)
D.ag_=new A.dS(D.KL,B.ab,B.ab,B.ab)
D.KY=new A.L(null,null,D.ag_,null,null,null,B.y)
D.akC=new A.Di("invalid_state")
D.atn=new A.a2(14,18,14,18)
D.auv=new A.a2(20,8,20,20)
D.aD7=new A.aV(61109,"MaterialIcons",null,!0)
D.aEx=new A.b7(D.aD7,22,B.A,null,null,null)
D.aG1=new A.dF(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bw,null,null,B.bw,B.bw,!0,null,null,null,null)
D.bYT=new A.ix(40,40,20,B.t,0,null)
D.bYL=new A.ix(null,32,12,B.t,1,null)
D.aAM=new A.bJ(1,B.au,D.bYL,null)
D.bxz=x([D.bYT,B.af,D.aAM],y.p)
D.bUY=new A.me(B.bx,B.h,B.l,B.w,null,B.u,null,0,D.bxz,null)
D.bYO=new A.ix(null,120,22,B.t,1,null)
D.bYS=new A.ix(null,56,22,B.t,2,null)
D.bYU=new A.ix(null,52,26,B.t,2,null)
D.aJg=x([D.bUY,B.bs,D.bYO,B.R,D.bYS,B.a1,D.bYU],y.p)
D.byr=x(["1","2","3"],y.s)
D.bx7=x(["4","5","6"],y.s)
D.buY=x(["7","8","9"],y.s)
D.b7z=x(["00","0","del"],y.s)
D.bD5=x([D.byr,D.bx7,D.buY,D.b7z],A.w("r<t<c>>"))
D.a2J=new C.a66("error",null,"",0,null)
D.bRX=new A.a1("Cancelado",!1)
D.bS3=new A.a1("Expirou",!1)
D.bTg=new A.a1("\xc0 espera\u2026",!1)
D.bTK=new A.bW(I.lV,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bUd=new A.bW(B.hF,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bUq=new A.bW(B.kI,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bUs=new A.bW(B.Eu,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bA2=x([],y.E)
D.Hv=new C.FZ("error",null,null,null,D.bA2,"entry",null)
D.avv=new A.nw(B.jJ,150,3,null,null)
D.ake=new A.fy(B.L,null,null,D.avv,null)
D.bYA=new A.c_(null,214,D.ake,null)
D.bZg=new A.vY(!1,3,!1,null)
D.c2c=new A.P(!0,B.A,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6k=new A.P(!0,B.A,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c95=new A.D("Quem \xe9",null,B.hm,null,null,null,null,null,null,null,null)
D.cbr=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cdb=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mD,null,null,null,null,null,null,null,null)
D.cdv=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.ceU=new A.D("O qu\xea",null,B.O,null,null,null,null,null,null,null,null)
D.cfu=new A.D("Cobrar",null,B.l1,null,null,null,null,null,null,null,null)
D.cfM=new A.D("Ver perfil",null,K.to,null,null,null,null,null,null,null,null)
D.cfU=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cgq=new A.D("Leste o QR agora",null,B.O,null,null,null,null,null,null,null,null)
D.cgx=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.chO=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.cij=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cir=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.cqJ=new C.wr("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cqK=new C.wr("Verificado",!0,null)
D.adI=new C.wr("Por registar",!1,null)
D.cqM=new C.wr("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTy","cTn",()=>{var w=A.W(16)
return A.dn0(A.bB(B.fq,0.5),w,null,B.t,null,null,B.y)})})()};
(a=>{a["/Mde1KGJhZfdMRql50cN1G6Cv+c="]=a.current})($__dart_deferred_initializers__);