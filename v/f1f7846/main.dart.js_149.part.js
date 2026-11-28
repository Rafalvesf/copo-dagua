((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cIp(d,e){return C.dII(d,e)},
dII(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cIp=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.R().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aL("create_pay_request",A.T(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cIp)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.dd(A.q(J.i(s,"expires_at")))
p=p==null?null:p.e1()
if(p==null)p=new A.ac(Date.now(),0,!1).e6(6e8)
v=new A.YX(null,new C.avC(r,q,p))
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
return A.m($async$cIp,w)},
cHB(d){return C.dI1(d)},
dI1(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHB=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.R().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aL("cancel_pay_request",A.T(["p_id",d],y.N,s),s),$async$cHB)
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
return A.m($async$cHB,w)},
dKy(d,e){var x=$.R().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.Ml(0,"pay-request-"+d,B.yI).Om(new C.cKs(e),B.Ha,new G.Fw(H.yv,"id",d),"public","pay_requests").Qh(0)},
cN8(d){return C.dLL(d)},
dLL(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cN8=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.R().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aL("pay_request_info",A.T(["p_code",d],y.N,q),q),$async$cN8)
case 7:s=f
if(!y.f.b(s)){v=D.a2K
x=1
break}r=A.q(J.i(s,"result"))
q=A.C(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.q(p==null?"":p)
o=A.aI(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.i(s,"description"))
v=new C.a65(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a2K
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cN8,w)},
alj(d){return C.dJ5(d)},
dJ5(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
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
avC:function avC(d,e,f){this.a=d
this.b=e
this.c=f},
cKs:function cKs(d){this.a=d},
a65:function a65(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cRk(d){return C.dMo(d)},
dMo(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cRk=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aL("scan_qr",A.T(["p_token",b0],y.N,o),o),$async$cRk)
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
j=J.ao(j==null?B.am:j)
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
a1=A.dd(A.q(a1==null?"":a1))
a2=A.C(h.h(i,"booking_number"))
a3=A.aI(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.C(J.i(g,"status")):null
if(a5){a5=A.aI(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.dd(A.q(a7==null?"":a7))
a7=a7==null?null:a7.e1()
J.o(h.h(i,"can_charge"),!0)
J.bt(r,new C.ayk(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dJ(p)
p=p===!0?"entry":"profile"}k=A.C(J.i(s,"profile_id"))
v=new C.FY(o,n,m,l,r,p,k)
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
return A.m($async$cRk,w)},
aVB(d,e){return C.dMn(d,e)},
dMn(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVB=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.R().b
p===$&&A.b()
x=10
return A.d(p.aL("scan_booking_arrival",A.T(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVB)
case 10:o=g
x=8
break
case 9:p=$.R().b
p===$&&A.b()
x=11
return A.d(p.aL("scan_check_in",A.T(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVB)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YV(null,"error")
x=1
break}r=A.q(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.dd(A.q(q==null?"":q))
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
return A.m($async$aVB,w)},
ayk:function ayk(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
FY:function FY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cZ7(d){return B.f.aY(B.j.k(A.ic(d)),2,"0")+":"+B.f.aY(B.j.k(A.hY(d)),2,"0")},
d7S(d){return new C.FZ(d,null)},
dnE(){return new C.Dd(null)},
duh(d){return new C.Fi(d,null)},
dBm(d){var x
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
default:x=A.aVp(d)
break}return x},
dBo(d){var x
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
dBn(d){var x
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
FZ:function FZ(d,e){this.c=d
this.a=e},
aOz:function aOz(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cvI:function cvI(d,e){this.a=d
this.b=e},
cvJ:function cvJ(d,e,f){this.a=d
this.b=e
this.c=f},
cvQ:function cvQ(d){this.a=d},
cvP:function cvP(d){this.a=d},
cvO:function cvO(d){this.a=d},
cvN:function cvN(d){this.a=d},
cvM:function cvM(d,e){this.a=d
this.b=e},
cvK:function cvK(d,e,f){this.a=d
this.b=e
this.c=f},
cvL:function cvL(d){this.a=d},
wq:function wq(d,e,f){this.c=d
this.d=e
this.a=f},
wf:function wf(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bLH:function bLH(){},
Dd:function Dd(d){this.a=d},
ac4:function ac4(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bNM:function bNM(d,e){this.a=d
this.b=e},
bNF:function bNF(d){this.a=d},
bNG:function bNG(d){this.a=d},
bNH:function bNH(d,e){this.a=d
this.b=e},
bNT:function bNT(d,e){this.a=d
this.b=e},
bNS:function bNS(){},
bNU:function bNU(d,e){this.a=d
this.b=e},
bNL:function bNL(d,e){this.a=d
this.b=e},
bNR:function bNR(d){this.a=d},
bNP:function bNP(d){this.a=d},
bNQ:function bNQ(d,e){this.a=d
this.b=e},
bND:function bND(){},
bNB:function bNB(d){this.a=d},
bNC:function bNC(d){this.a=d},
bNE:function bNE(d){this.a=d},
bNK:function bNK(d){this.a=d},
bNV:function bNV(d){this.a=d},
bNI:function bNI(d){this.a=d},
bNJ:function bNJ(d,e){this.a=d
this.b=e},
bNO:function bNO(){},
bNN:function bNN(d){this.a=d},
Fi:function Fi(d,e){this.c=d
this.a=e},
afT:function afT(){this.c=this.a=this.d=null},
clQ:function clQ(d){this.a=d},
clR:function clR(d,e){this.a=d
this.b=e},
clO:function clO(d){this.a=d},
clP:function clP(d){this.a=d},
clS:function clS(d){this.a=d},
clT:function clT(d){this.a=d},
aPf:function aPf(d,e,f){this.c=d
this.d=e
this.a=f},
cxu:function cxu(d){this.a=d},
cxv:function cxv(d){this.a=d}},D,I,K,F,L,M,N
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
C.avC.prototype={}
C.a65.prototype={}
C.ayk.prototype={}
C.FY.prototype={
gao(d){return this.c}}
C.ajt.prototype={
u(d){var x=null
return A.z(x,this.c,B.r,x,x,$.cTK(),x,x,x,B.cB,x,x,x)}}
C.H2.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.ch,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bE,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.z(x,A.N(w,B.w,B.h,B.l,0,x,x),B.r,x,x,D.KY,x,x,x,B.dX,x,x,x)}}
C.FZ.prototype={
R(){return new C.aOz(A.E(y.N,y.R))}}
C.aOz.prototype={
Lc(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$Lc=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cRk(u.a.c),$async$Lc)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ah(t).GI("/u/"+A.q(s),null,y.X)
v=new A.aO($.aU,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Lc,w)},
a4S(d,e){var x=e.c
return x==null?"e"+e.b:x},
RO(d,e){return this.aVA(d,e)},
aVA(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$RO=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cvI(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVB(t,e),$async$RO)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cvJ(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$RO,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.Lc()
return A.cP(null,B.bA,A.bF(!0,A.cVR(new C.cvQ(x),w,y.A),null,B.a_,!0),!0,null)},
ber(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bUh
break
case"own_code":x=D.bUu
break
case"not_found":x=D.bTO
break
default:x=D.bUw
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
q=A.a([B.mv,A.b4(r,o?B.V:B.fs,p,p,96),B.a1,A.h(v,p,p,p,p,B.hn,B.a6,p,p),B.S,A.h(u,p,p,p,p,D.c6o,B.a6,p,p)],x)
if(o)B.e.n(q,A.a([B.cR,A.bG(B.tx,new C.cvO(this),p)],x))
return q},
bdM(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.N(A.a([new A.cp(r,44,d.d,!1,!0,s),B.af,A.a4(A.x(A.a([A.h(r,s,s,s,s,B.it,s,s,s),D.cgt],x),B.H,B.h,B.l,0,B.u),1),B.ag,D.cqL],x),B.w,B.h,B.l,0,s,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.cZ(B.bg,s,s,A.aH(A.h5(D.cfP,new C.cvM(this,d),A.fK(s,s,B.t,s,s,s,s,s,s,B.A,s,s,B.bU,s,B.ae,B.c8,s,s,s,s)),36,s),s)],x))
w=A.a([new C.ajt(A.x(w,B.G,B.h,B.l,0,B.u),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bs,D.cde],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b7B(0,d,v[t]))
return w},
b7B(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a4S(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
s=i}i=A.h(k?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",n,n,n,n,B.aJ,n,n,n)
x=y.p
r=A.a([A.h(f.d,n,n,n,n,B.it,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.Q(F.qw,A.h(B.dB[A.fE(q)-1]+", "+A.aC(q)+" "+B.by[A.ar(q)-1],n,n,n,n,B.N,n,n,n),n))
r.push(B.ad)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H2("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H2("Pessoas",A.q(p),n,n))
q.push(new C.H2("Chegada",n,v?new C.wq("Registada \xe0s "+C.cZ7(w),!0,n):D.adN,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wq(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cqN
p=v?new C.wq("Registada \xe0s "+C.cZ7(w),!0,n):D.adN
B.e.n(r,A.a([new C.H2("Bilhete",n,q,n),new C.H2("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.Q(B.nG,A.h(t,n,n,n,n,B.zr,n,n,n),n))
i=A.a([B.bs,i,B.av,new C.ajt(A.x(r,B.G,B.h,B.l,0,B.u),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cvK(o,e,f):n
if(r===m)r=B.z8
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.l2,n,n,n)
t.push(A.a4(A.aH(A.bG(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ah)
x.push(A.a4(A.aH(A.h5(D.cfw,new C.cvL(o),A.fK(n,n,B.t,n,n,n,n,n,n,B.A,n,n,n,n,B.ae,B.c8,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.N(t,B.w,B.h,B.l,0,n,n))
return i}}
C.wq.prototype={
u(d){var x=null,w=this.d,v=w?B.cA:B.dV,u=A.V(999)
return A.z(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?B.d_:B.cr,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.I(v,x,x,u,x,x,B.y),x,x,x,B.dn,x,x,x)}}
C.wf.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mt:A.h(x.c,w,w,w,w,B.eJ,w,w,w)
if(x.e)v=A.h5(u,x.d,A.fK(w,w,B.t,w,w,w,w,w,w,B.A,w,w,w,w,B.ae,B.c8,w,w,w,w))
else{v=v?new C.bLH():x.d
v=A.bG(u,v,A.cn(B.A,B.A.cd(0.35),B.t,B.t,w,w,B.ae,w,w,w))}return A.aH(v,52,1/0)}}
C.Dd.prototype={
R(){return new C.ac4(new A.aF(B.al,$.aa()))}}
C.ac4.prototype={
m(){this.V4()
var x=this.e
x.Y$=$.aa()
x.W$=0
this.a6()},
V4(){var x,w=this,v=w.y
if(v!=null){x=$.R().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yh(v)}w.y=null
v=w.z
if(v!=null)v.aM(0)
v=w.Q
if(v!=null)v.aM(0)},
ben(d){this.p(new C.bNM(this,d))},
RP(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$RP=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bNF(u))
t=B.f.C(u.e.a.a)
s=u.d
x=3
return A.d(C.cIp(s,t.length===0?null:t),$async$RP)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bNG(u))
q=r.b
if(q==null){s=r.a
v=u.bjz(s==null?"error":s)
x=1
break}u.p(new C.bNH(u,q))
u.bnm(q)
case 1:return A.l(v,w)}})
return A.m($async$RP,w)},
bnm(d){var x=this
x.V4()
x.y=C.dKy(d.a,x.gbaz())
x.z=A.u8(B.fT,new C.bNT(x,d))
x.Q=A.u8(B.v7,new C.bNU(x,d))},
a5x(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bNL(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aM(0)
x=w.Q
if(x!=null)x.aM(0)}},
bjz(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fT(!0,new C.bNR(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a2(A.c3(w,w,w,w,w,B.z,w,A.h(x,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
Dv(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fT(!0,new C.bND(),t,y.x),$async$Dv)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHB(s.a),$async$Dv)
case 6:if(u.c==null){x=1
break}case 4:u.V4()
u.p(new C.bNE(u))
case 1:return A.l(v,w)}})
return A.m($async$Dv,w)},
aoZ(){this.V4()
this.p(new C.bNK(this))},
alg(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dv()
else w.aoZ()
else{x=w.c
x.toString
A.am(x,!1).iz()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pZ(B.lQ,x.gaZR(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hn,w,w,w)
return A.bo1(u,A.cP(w,B.bA,A.bF(!0,new A.Q(D.auA,A.x(A.a([new A.cZ(B.bg,w,w,t,w),B.R,s,B.bs,A.a4(u?x.b7K():x.beN(v),1)],y.p),B.G,B.h,B.l,0,B.u),w),w,B.a_,!0),!0,w),new C.bNV(x),y.K)},
b7K(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bNI(o),j=$.cTK(),i=y.p
j=A.z(n,A.x(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.N,B.a6,n,n),B.ad,A.b8(n,n,n,A.h(E.cII(m),n,n,n,n,D.c2g,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.w,B.h,B.l,0,B.u),B.r,n,n,j,n,n,n,D.ats,n,n,n)
m=A.V(999)
x=A.bB(B.fr,0.5)
m=A.a([j,B.ad,A.z(n,A.N(A.a([D.ceW,B.ah,A.a4(A.cs(n,B.a8,!1,n,!0,B.z,n,A.cu(),o.e,n,n,n,n,n,2,D.aG5,B.Y,!0,n,!0,n,!1,n,B.aD,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.aq,n,n,n,n,n,n,n,n,n,n,n,B.l1,!0,B.ar,n,B.hd,n,n,n,n),1)],i),B.w,B.h,B.l,0,n,n),B.r,n,n,new A.I(B.t,n,x,m,n,n,B.y),n,44,n,B.bU,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bDa[w]
x=B.e.gK(v)==="1"?16:10
u=A.a([],i)
for(t=A.eB(v,0,j),s=J.ao(t.a),r=t.b,t=new A.c2(s,r,A.u(t).i("c2<1>"));t.t();){q=t.c
q=q>=0?new A.a_(r+q,s.gE(s)):A.ak(A.c5())
p=A.a([],i)
if(q.a>0)p.push(B.ah)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c0(n,x,n,n),A.N(u,B.w,B.h,B.l,0,n,n)],i))}m=A.a4(A.d0(m,n,B.a_,n,n,!1,B.a3,!1),1)
j=o.f
return A.x(A.a([m,B.R,new C.wf("Mostrar o QR para pagar",l?o.galh():n,!1,j,n)],i),B.G,B.h,B.l,0,B.u)},
beN(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cL(new A.ac(Date.now(),0,!1)).a
x=h<0?0:B.j.aS(h,1e6)
w=""+B.j.aS(x,60)+":"+B.f.aY(B.j.k(B.j.aq(x,60)),2,"0")
v=B.f.C(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.a_("Pago \xe0s "+C.cZ7(h==null?new A.ac(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bS7
break
case"cancelled":h=D.bS0
break
default:h=D.bTk
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bNO()
q=j.c
q.toString
q=A.nO(q,!1).a1(0,$.ba(),y.D).b
p=q==null?i:q.x
q=$.cTK()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.C(p).length!==0)n.push(A.h(B.f.C(p),i,i,i,i,B.it,B.a6,i,i))
n.push(new A.Q(F.qw,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.N,B.a6,i,i),i))
n.push(B.R)
if(g)n.push(D.bYE)
else{m=A.V(16)
l=A.bB(B.fr,0.5)
k=f?1:0.15
n.push(A.z(i,A.fe(A.cWY(B.t,A.kC("/pagar/"+d.b),B.Hc,B.Hd,B.a_,"QR para pagar "+E.cII(j.d),186),k),B.r,i,i,new A.I(B.t,i,l,m,i,i,B.y),i,i,i,B.cB,i,i,i))}n.push(B.R)
n.push(A.h(E.cII(j.d),i,i,i,i,B.hn,i,i,i))
n.push(B.aW)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.N,B.a6,i,i))
if(f)B.e.n(n,A.a([B.ad,D.cqK],o))
q=A.z(i,A.x(n,B.w,B.h,B.l,0,B.u),B.r,i,i,q,i,i,i,B.cB,i,i,i)
n=A.b8(i,i,i,h.$2("Estado",new C.wq(r,t,i)),!1,i,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a4(A.d0(A.a([q,B.aC,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bE,i,i,i))],o),i,B.a_,i,i,!1,B.a3,!1),1),B.R],o)
if(f)h.push(new C.wf("Cancelar cobran\xe7a",j.gaZS(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wf("Nova cobran\xe7a",j.gb9r(),!1,!1,i),B.ad,new C.wf("Fechar",new C.bNN(j),!0,!1,i)],o))
else h.push(new C.wf("Mostrar outro QR",j.galh(),!1,j.f,i))
return A.x(h,B.G,B.h,B.l,0,B.u)}}
C.Fi.prototype={
R(){return new C.afT()}}
C.afT.prototype={
ad(){this.ar()
this.J0()},
J0(){var x=0,w=A.n(y.H),v=this,u
var $async$J0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.clQ(v))
x=2
return A.d(C.cN8(v.a.c),$async$J0)
case 2:u=e
if(v.c!=null)v.p(new C.clR(v,u))
return A.l(null,w)}})
return A.m($async$J0,w)},
aT6(d){var x=null,w=d.e,v=w==null?x:B.f.C(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.ow("",d.c,"pay_request",d.d/100,x,x,new C.clO(this),!1,new C.clP(d),B.Wy,x,w,C.dJ8(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Un(this.aT6(t),u)
x=s?"Pagar":C.dBo(t.a)
if(s)s=D.aJk
else{s=t.a
w=y.p
v=A.a([A.bN(A.a2v(s==="paid"?B.jJ:B.qF,3,u,120),u,u),B.R,A.h(C.dBn(s),u,u,u,u,B.hi,B.a6,u,u),B.bj],w)
if(s==="error")B.e.n(v,A.a([new C.wf("Tentar outra vez",this.gaZT(),!1,!1,u),B.ad,new C.wf("Fechar",new C.clS(d),!0,!1,u)],w))
else v.push(new C.wf("OK",new C.clT(d),!1,!1,u))
s=v}return new C.aPf(x,s,u)}}
C.aPf.prototype={
u(d){var x=null,w=A.ax(d,x,y.w).w,v=A.a4(A.cR(B.bN,x,B.Y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxu(d),x,x,x,x,x,x,!1,B.aP),1),u=y.p,t=A.a([A.bN(A.z(x,x,B.r,x,x,new A.I(N.uw,x,x,A.V(3),x,x,B.y),x,5,x,x,x,x,40),x,x),B.aC,A.N(A.a([A.a4(A.h(this.c,x,x,x,x,B.bk,x,x,x),1),A.pZ(B.em,new C.cxv(d),"Fechar")],u),B.w,B.h,B.l,0,x,x),B.a1],u)
B.e.n(t,this.d)
return A.fq(!1,B.aE,!0,x,A.x(A.a([v,A.z(x,A.x(t,B.G,B.h,B.K,0,B.u),B.r,x,x,M.KZ,x,x,x,new A.a2(20,10,20,20+w.r.d),x,x,1/0)],u),B.w,B.j2,B.l,0,B.u),B.r,x,0,x,x,x,x,x,B.eA)}}
var z=a.updateTypes(["F<~>()","~()","J(O,nn<FY>)","~(c)","c(c)"])
C.cKs.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:134}
C.cvI.prototype={
$0(){var x=this.a
return x.f=x.a4S(0,this.b)},
$S:0}
C.cvJ.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4S(0,this.b),this.c)},
$S:0}
C.cvQ.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bZk
x=y.p
w=A.a([A.N(A.a([A.pZ(B.lQ,new C.cvP(d),"Voltar")],x),B.w,B.h,B.l,0,u,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.c99,B.bs],x))
else w.push(B.a1)
x=this.a
if(!v)B.e.n(w,x.ber(t))
else B.e.n(w,x.bdM(t))
return A.d0(w,u,B.Di,u,u,!1,B.a3,!1)},
$S:z+2}
C.cvP.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
C.cvO.prototype={
$0(){var x=this.a
return x.p(new C.cvN(x))},
$S:0}
C.cvN.prototype={
$0(){var x=this.a
return x.d=x.Lc()},
$S:0}
C.cvM.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.cvK.prototype={
$0(){return this.a.RO(this.b,this.c)},
$S:0}
C.cvL.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/cobrar",null,y.X)},
$S:0}
C.bLH.prototype={
$0(){},
$S:0}
C.bNM.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aS(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dT(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bNF.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bNG.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bNH.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bNT.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.fP(new A.ac(Date.now(),0,!1)))x.a5x("expired")
else x.p(new C.bNS())},
$S:64}
C.bNS.prototype={
$0(){},
$S:0}
C.bNU.prototype={
$1(d){return this.aF7(d)},
aF7(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.alj(A.T(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a5x("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:355}
C.bNL.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ac(Date.now(),0,!1)},
$S:0}
C.bNR.prototype={
$1(d){var x=null
return new A.eU(D.cbv,D.cit,A.a([A.cx(B.mG,x,x,new C.bNP(d),x,x),A.bG(D.cil,new C.bNQ(this.a,d),x)],y.p),x)},
$S:19}
C.bNP.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
C.bNQ.prototype={
$0(){A.am(this.b,!1).bx()
var x=this.a.c
x.toString
A.ah(x).av("/partner-payments/setup",null,y.X)},
$S:0}
C.bND.prototype={
$1(d){var x=null
return new A.eU(D.chQ,D.cgA,A.a([A.cx(D.cfX,x,x,new C.bNB(d),x,x),A.bG(D.cdy,new C.bNC(d),x)],y.p),x)},
$S:19}
C.bNB.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.bNC.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.bNE.prototype={
$0(){return this.a.r=null},
$S:0}
C.bNK.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.j7(0,B.je)},
$S:0}
C.bNV.prototype={
$2(d,e){if(!d)this.a.alg()},
$S:164}
C.bNI.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.V(16),t=A.V(16)
return A.a4(A.b8(x,!0,x,A.fq(!1,B.aE,!0,x,A.eC(!1,t,!0,A.aH(A.bN(w?D.aEC:A.h(d,x,x,x,x,B.pg,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bNJ(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fF(u,D.KL),x,x,B.cE),!1,x,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:272}
C.bNJ.prototype={
$0(){return this.a.ben(this.b)},
$S:0}
C.bNO.prototype={
$2(d,e){var x=null
return A.z(x,A.N(A.a([A.a4(A.h(d,x,x,x,x,B.ch,x,x,x),1),e],y.p),B.w,B.h,B.l,0,x,x),B.r,x,x,D.KY,x,x,x,B.co,x,x,x)},
$S:1374}
C.bNN.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).iz()},
$S:0}
C.clQ.prototype={
$0(){return this.a.d=null},
$S:0}
C.clR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.clO.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aFo(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aFo(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.alj(A.T(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.akH)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b_W(A.q(t)))
v=A.cN9(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:146}
C.clP.prototype={
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
case 3:v=new s.a_(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1375}
C.clS.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
C.clT.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
C.cxu.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
C.cxv.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dJ8","dBm",4)
var u
w(u=C.ac4.prototype,"galh","RP",0)
v(u,"gbaz","a5x",3)
w(u,"gaZS","Dv",0)
w(u,"gb9r","aoZ",1)
w(u,"gaZR","alg",1)
w(C.afT.prototype,"gaZT","J0",0)})();(function inheritance(){var x=a.inheritMany
x(A.L,[C.avC,C.a65,C.ayk,C.FY])
x(A.bz,[C.cKs,C.bNT,C.bNU,C.bNR,C.bND,C.bNI,C.clO])
x(A.J,[C.ajt,C.H2,C.wq,C.wf,C.aPf])
x(A.G,[C.FZ,C.Dd,C.Fi])
x(A.Y,[C.aOz,C.ac4,C.afT])
x(A.bR,[C.cvI,C.cvJ,C.cvP,C.cvO,C.cvN,C.cvM,C.cvK,C.cvL,C.bLH,C.bNM,C.bNF,C.bNG,C.bNH,C.bNS,C.bNL,C.bNP,C.bNQ,C.bNB,C.bNC,C.bNE,C.bNK,C.bNJ,C.bNN,C.clQ,C.clR,C.clP,C.clS,C.clT,C.cxu,C.cxv])
x(A.cN,[C.cvQ,C.bNV,C.bNO])})()
A.bq(b.typeUniverse,JSON.parse('{"ajt":{"J":[],"e":[],"f":[]},"H2":{"J":[],"e":[],"f":[]},"FZ":{"G":[],"e":[],"f":[]},"aOz":{"Y":["FZ"]},"wq":{"J":[],"e":[],"f":[]},"wf":{"J":[],"e":[],"f":[]},"Dd":{"G":[],"e":[],"f":[]},"ac4":{"Y":["Dd"]},"Fi":{"G":[],"e":[],"f":[]},"afT":{"Y":["Fi"]},"aPf":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),E:x("r<ayk>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dg"),K:x("L"),y:x("a65"),m:x("tI"),k:x("+(c,bn)"),R:x("+at,result(ac?,c)"),u:x("+error,request(c?,avC?)"),A:x("FY"),N:x("c"),v:x("aO<FY>"),q:x("dn"),x:x("y"),z:x("@"),g:x("t<@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.KL=new A.bb(B.fr,0.5,B.ai,-1)
D.ag4=new A.dN(D.KL,B.ac,B.ac,B.ac)
D.KY=new A.I(null,null,D.ag4,null,null,null,B.y)
D.akH=new A.Di("invalid_state")
D.ats=new A.a2(14,18,14,18)
D.auA=new A.a2(20,8,20,20)
D.aDc=new A.aV(61109,"MaterialIcons",null,!0)
D.aEC=new A.b7(D.aDc,22,B.A,null,null,null)
D.aG5=new A.dF(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bw,null,null,B.bw,B.bw,!0,null,null,null,null)
D.bYX=new A.ix(40,40,20,B.t,0,null)
D.bYP=new A.ix(null,32,12,B.t,1,null)
D.aAR=new A.bJ(1,B.at,D.bYP,null)
D.bxD=x([D.bYX,B.af,D.aAR],y.p)
D.bV1=new A.me(B.bx,B.h,B.l,B.w,null,B.u,null,0,D.bxD,null)
D.bYS=new A.ix(null,120,22,B.t,1,null)
D.bYW=new A.ix(null,56,22,B.t,2,null)
D.bYY=new A.ix(null,52,26,B.t,2,null)
D.aJk=x([D.bV1,B.bs,D.bYS,B.R,D.bYW,B.a1,D.bYY],y.p)
D.byv=x(["1","2","3"],y.s)
D.bxb=x(["4","5","6"],y.s)
D.bv1=x(["7","8","9"],y.s)
D.b7D=x(["00","0","del"],y.s)
D.bDa=x([D.byv,D.bxb,D.bv1,D.b7D],A.w("r<t<c>>"))
D.a2K=new C.a65("error",null,"",0,null)
D.bS0=new A.a_("Cancelado",!1)
D.bS7=new A.a_("Expirou",!1)
D.bTk=new A.a_("\xc0 espera\u2026",!1)
D.bTO=new A.bW(I.lV,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bUh=new A.bW(B.hI,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bUu=new A.bW(B.kJ,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bUw=new A.bW(B.Ev,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bA7=x([],y.E)
D.Hv=new C.FY("error",null,null,null,D.bA7,"entry",null)
D.avA=new A.nw(B.jJ,150,3,null,null)
D.akj=new A.fy(B.L,null,null,D.avA,null)
D.bYE=new A.c0(null,214,D.akj,null)
D.bZk=new A.vY(!1,3,!1,null)
D.c2g=new A.P(!0,B.A,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6o=new A.P(!0,B.A,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c99=new A.D("Quem \xe9",null,B.hn,null,null,null,null,null,null,null,null)
D.cbv=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cde=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mD,null,null,null,null,null,null,null,null)
D.cdy=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.ceW=new A.D("O qu\xea",null,B.N,null,null,null,null,null,null,null,null)
D.cfw=new A.D("Cobrar",null,B.l2,null,null,null,null,null,null,null,null)
D.cfP=new A.D("Ver perfil",null,K.to,null,null,null,null,null,null,null,null)
D.cfX=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cgt=new A.D("Leste o QR agora",null,B.N,null,null,null,null,null,null,null,null)
D.cgA=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.chQ=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.cil=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cit=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.cqK=new C.wq("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cqL=new C.wq("Verificado",!0,null)
D.adN=new C.wq("Por registar",!1,null)
D.cqN=new C.wq("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTU","cTK",()=>{var w=A.V(16)
return A.dnn(A.bB(B.fr,0.5),w,null,B.t,null,null,B.y)})})()};
(a=>{a["6132KZFqrZrFhHaC+TMzdrTdqMc="]=a.current})($__dart_deferred_initializers__);