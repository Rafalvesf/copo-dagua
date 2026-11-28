((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cIw(d,e){return C.dJ9(d,e)},
dJ9(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cIw=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cIw)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.d4(A.q(J.i(s,"expires_at")))
p=p==null?null:p.dM()
if(p==null)p=new A.ac(Date.now(),0,!1).el(6e8)
v=new A.YT(null,new C.avt(r,q,p))
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
return A.m($async$cIw,w)},
cHI(d){return C.dIt(d)},
dIt(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHI=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.P().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aK("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cHI)
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
return A.m($async$cHI,w)},
dL1(d,e){var x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.Mf(0,"pay-request-"+d,B.yr).O9(new C.cKB(e),B.GQ,new G.Fv(H.ye,"id",d),"public","pay_requests").Q3(0)},
cNl(d){return C.dMf(d)},
dMf(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cNl=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cNl)
case 7:s=f
if(!y.f.b(s)){v=D.a23
x=1
break}r=A.q(J.i(s,"result"))
q=A.C(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.q(p==null?"":p)
o=A.aF(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.i(s,"description"))
v=new C.a67(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a23
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cNl,w)},
al8(d){return C.dJy(d)},
dJy(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$al8=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.P().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f5("event-pay",d),$async$al8)
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
if(o instanceof A.pm){q=o
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
return A.m($async$al8,w)},
avt:function avt(d,e,f){this.a=d
this.b=e
this.c=f},
cKB:function cKB(d){this.a=d},
a67:function a67(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cRC(d){return C.dMT(d)},
dMT(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cRC=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aK("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cRC)
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
j=J.ap(j==null?B.ak:j)
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
J.br(r,new C.ayb(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dK(p)
p=p===!0?"entry":"profile"}k=A.C(J.i(s,"profile_id"))
v=new C.FX(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cU){v=D.Ha
x=1
break}else{v=D.Ha
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cRC,w)},
aVm(d,e){return C.dMS(d,e)},
dMS(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVm=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.P().b
p===$&&A.b()
x=10
return A.d(p.aK("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVm)
case 10:o=g
x=8
break
case 9:p=$.P().b
p===$&&A.b()
x=11
return A.d(p.aK("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVm)
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
return A.m($async$aVm,w)},
ayb:function ayb(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
FX:function FX(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cZp(d){return B.f.aV(B.j.k(A.ic(d)),2,"0")+":"+B.f.aV(B.j.k(A.i_(d)),2,"0")},
d8c(d){return new C.FY(d,null)},
do0(){return new C.De(null)},
duH(d){return new C.Fh(d,null)},
dBL(d){var x
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
default:x=A.aV9(d)
break}return x},
dBN(d){var x
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
dBM(d){var x
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
H0:function H0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FY:function FY(d,e){this.c=d
this.a=e},
aOc:function aOc(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cvZ:function cvZ(d,e){this.a=d
this.b=e},
cw_:function cw_(d,e,f){this.a=d
this.b=e
this.c=f},
cw6:function cw6(d){this.a=d},
cw5:function cw5(d){this.a=d},
cw4:function cw4(d){this.a=d},
cw3:function cw3(d){this.a=d},
cw2:function cw2(d,e){this.a=d
this.b=e},
cw0:function cw0(d,e,f){this.a=d
this.b=e
this.c=f},
cw1:function cw1(d){this.a=d},
wm:function wm(d,e,f){this.c=d
this.d=e
this.a=f},
wb:function wb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bM0:function bM0(){},
De:function De(d){this.a=d},
ac7:function ac7(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bO9:function bO9(d,e){this.a=d
this.b=e},
bO2:function bO2(d){this.a=d},
bO3:function bO3(d){this.a=d},
bO4:function bO4(d,e){this.a=d
this.b=e},
bOg:function bOg(d,e){this.a=d
this.b=e},
bOf:function bOf(){},
bOh:function bOh(d,e){this.a=d
this.b=e},
bO8:function bO8(d,e){this.a=d
this.b=e},
bOe:function bOe(d){this.a=d},
bOc:function bOc(d){this.a=d},
bOd:function bOd(d,e){this.a=d
this.b=e},
bO0:function bO0(){},
bNZ:function bNZ(d){this.a=d},
bO_:function bO_(d){this.a=d},
bO1:function bO1(d){this.a=d},
bO7:function bO7(d){this.a=d},
bOi:function bOi(d){this.a=d},
bO5:function bO5(d){this.a=d},
bO6:function bO6(d,e){this.a=d
this.b=e},
bOb:function bOb(){},
bOa:function bOa(d){this.a=d},
Fh:function Fh(d,e){this.c=d
this.a=e},
afR:function afR(){this.c=this.a=this.d=null},
cme:function cme(d){this.a=d},
cmf:function cmf(d,e){this.a=d
this.b=e},
cmc:function cmc(d){this.a=d},
cmd:function cmd(d){this.a=d},
cmg:function cmg(d){this.a=d},
cmh:function cmh(d){this.a=d},
aOT:function aOT(d,e,f){this.c=d
this.d=e
this.a=f},
cxL:function cxL(d){this.a=d},
cxM:function cxM(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[87]
G=c[123]
H=c[241]
C=a.updateHolder(c[14],C)
D=c[281]
I=c[233]
K=c[243]
F=c[282]
L=c[56]
M=c[284]
N=c[283]
C.avt.prototype={}
C.a67.prototype={}
C.ayb.prototype={}
C.FX.prototype={
gar(d){return this.c}}
C.ajm.prototype={
u(d){var x=null
return A.B(x,this.c,B.r,x,x,$.cU1(),x,x,x,B.cY,x,x,x)}}
C.H0.prototype={
u(d){var x=null,w=A.a([A.a6(A.h(this.c,x,x,x,x,B.cj,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bB,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.B(x,A.O(w,B.v,B.h,B.l,0,x),B.r,x,x,D.Ku,x,x,x,B.dW,x,x,x)}}
C.FY.prototype={
R(){return new C.aOc(A.E(y.N,y.R))}}
C.aOc.prototype={
L4(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$L4=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cRC(u.a.c),$async$L4)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ae(t).Gy("/u/"+A.q(s),null,y.X)
v=new A.aN($.aT,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$L4,w)},
a4y(d,e){var x=e.c
return x==null?"e"+e.b:x},
RD(d,e){return this.aV9(d,e)},
aV9(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$RD=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cvZ(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVm(t,e),$async$RD)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cw_(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$RD,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.L4()
return A.cQ(null,B.bx,A.bD(!0,A.b7J(new C.cw6(x),w,y.A),null,B.Z,!0),!0,null)},
bdS(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bTg
break
case"own_code":x=D.bTt
break
case"not_found":x=D.bSN
break
default:x=D.bTv
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
q=A.a([B.kQ,A.b5(r,o?B.V:B.fN,p,p,96),B.a0,A.h(v,p,p,p,p,B.hQ,B.a4,p,p),B.Q,A.h(u,p,p,p,p,D.c53,B.a4,p,p)],x)
if(o)B.e.n(q,A.a([B.dh,A.bE(B.tl,new C.cw4(this),p)],x))
return q},
bdc(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.ci(r,44,d.d,!1,!0,s),B.ae,A.a6(A.A(A.a([A.h(r,s,s,s,s,B.is,s,s,s),D.cf1],x),B.F,B.h,B.l),1),B.ad,D.coT],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.d0(B.be,s,s,A.aH(A.hh(D.ceo,new C.cw2(this,d),A.fP(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bQ,s,B.ac,B.c8,s,s,s,s)),36,s),s)],x))
w=A.a([new C.ajm(A.A(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bM,D.cbK],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b7_(0,d,v[t]))
return w},
b7_(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a4y(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
r=A.a([A.h(f.d,n,n,n,n,B.is,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.T(F.qi,A.h(B.dv[A.fH(q)-1]+", "+A.ay(q)+" "+B.bg[A.an(q)-1],n,n,n,n,B.L,n,n,n),n))
r.push(B.ab)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H0("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H0("Pessoas",A.q(p),n,n))
q.push(new C.H0("Chegada",n,v?new C.wm("Registada \xe0s "+C.cZp(w),!0,n):D.acP,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wm(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.coV
p=v?new C.wm("Registada \xe0s "+C.cZp(w),!0,n):D.acP
B.e.n(r,A.a([new C.H0("Bilhete",n,q,n),new C.H0("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.T(B.lt,A.h(t,n,n,n,n,B.za,n,n,n),n))
i=A.a([B.bM,i,B.ar,new C.ajm(A.A(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cw0(o,e,f):n
if(r===m)r=B.yR
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kW,n,n,n)
t.push(A.a6(A.aH(A.bE(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ag)
x.push(A.a6(A.aH(A.hh(D.ce3,new C.cw1(o),A.fP(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.ac,B.c8,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.v,B.h,B.l,0,n))
return i}}
C.wm.prototype={
u(d){var x=null,w=this.d,v=w?B.cy:B.dU,u=A.W(999)
return A.B(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?B.cW:B.cp,x,x,x,x,x,x,x,x,12,x,x,B.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.K(v,x,x,u,x,x,B.x),x,x,x,B.dq,x,x,x)}}
C.wb.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mi:A.h(x.c,w,w,w,w,B.eK,w,w,w)
if(x.e)v=A.hh(u,x.d,A.fP(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.ac,B.c8,w,w,w,w))
else{v=v?new C.bM0():x.d
v=A.bE(u,v,A.ck(B.z,B.z.ce(0.35),B.t,B.t,w,w,B.ac,w,w,w))}return A.aH(v,52,1/0)}}
C.De.prototype={
R(){return new C.ac7(new A.aE(B.aj,$.aa()))}}
C.ac7.prototype={
m(){this.V0()
var x=this.e
x.Y$=$.aa()
x.W$=0
this.a6()},
V0(){var x,w=this,v=w.y
if(v!=null){x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yg(v)}w.y=null
v=w.z
if(v!=null)v.aN(0)
v=w.Q
if(v!=null)v.aN(0)},
bdO(d){this.p(new C.bO9(this,d))},
RE(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$RE=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bO2(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cIw(s,t.length===0?null:t),$async$RE)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bO3(u))
q=r.b
if(q==null){s=r.a
v=u.bj0(s==null?"error":s)
x=1
break}u.p(new C.bO4(u,q))
u.bmA(q)
case 1:return A.l(v,w)}})
return A.m($async$RE,w)},
bmA(d){var x=this
x.V0()
x.y=C.dL1(d.a,x.gba_())
x.z=A.u5(B.fR,new C.bOg(x,d))
x.Q=A.u5(B.uX,new C.bOh(x,d))},
a5e(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bO8(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aN(0)
x=w.Q
if(x!=null)x.aN(0)}},
bj0(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fR(!0,new C.bOe(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a2(A.c0(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Dn(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fR(!0,new C.bO0(),t,y.x),$async$Dn)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHI(s.a),$async$Dn)
case 6:if(u.c==null){x=1
break}case 4:u.V0()
u.p(new C.bO1(u))
case 1:return A.l(v,w)}})
return A.m($async$Dn,w)},
aoM(){this.V0()
this.p(new C.bO7(this))},
al1(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dn()
else w.aoM()
else{x=w.c
x.toString
A.am(x,!1).iw()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pV(B.lE,x.gaZr(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hQ,w,w,w)
return A.bo_(u,A.cQ(w,B.bx,A.bD(!0,new A.T(D.atB,A.A(A.a([new A.d0(B.be,w,w,t,w),B.R,s,B.bM,A.a6(u?x.b78():x.bed(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bOi(x),y.K)},
b78(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bO5(o),j=$.cU1(),i=y.p
j=A.B(n,A.A(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a4,n,n),B.ab,A.ba(n,n,n,A.h(E.cIQ(m),n,n,n,n,D.c11,n,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a3,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.ast,n,n,n)
m=A.W(999)
x=A.bA(B.fa,0.5)
m=A.a([j,B.ab,A.B(n,A.O(A.a([D.cdv,B.ag,A.a6(A.cs(n,B.a6,!1,n,!0,B.y,n,A.ct(),o.e,n,n,n,n,n,2,D.aFd,B.W,!0,n,!0,n,!1,n,B.aC,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.ao,n,n,n,n,n,n,n,n,n,n,n,B.kV,!0,B.at,n,B.hd,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.K(B.t,n,x,m,n,n,B.x),n,44,n,B.bQ,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bCa[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eK(v,0,j),s=J.ap(t.a),r=t.b,t=new A.c9(s,r,A.u(t).i("c9<1>"));t.t();){q=t.c
q=q>=0?new A.Z(r+q,s.gE(s)):A.al(A.c6())
p=A.a([],i)
if(q.a>0)p.push(B.ag)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c_(n,x,n,n),A.O(u,B.v,B.h,B.l,0,n)],i))}m=A.a6(A.d6(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.A(A.a([m,B.R,new C.wb("Mostrar o QR para pagar",l?o.gal2():n,!1,j,n)],i),B.E,B.h,B.l)},
bed(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cA(new A.ac(Date.now(),0,!1)).a
x=h<0?0:B.j.aP(h,1e6)
w=""+B.j.aP(x,60)+":"+B.f.aV(B.j.k(B.j.aF(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.Z("Pago \xe0s "+C.cZp(h==null?new A.ac(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bR6
break
case"cancelled":h=D.bR_
break
default:h=D.bSj
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bOb()
q=j.c
q.toString
q=A.nR(q,!1).a1(0,$.b8(),y.D).b
p=q==null?i:q.x
q=$.cU1()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.is,B.a4,i,i))
n.push(new A.T(F.qi,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a4,i,i),i))
n.push(B.R)
if(g)n.push(D.bXr)
else{m=A.W(16)
l=A.bA(B.fa,0.5)
k=f?1:0.15
n.push(A.B(i,A.fe(A.bpy(B.t,A.kf("/pagar/"+d.b),B.GS,B.GT,B.Z,"QR para pagar "+E.cIQ(j.d),186),k),B.r,i,i,new A.K(B.t,i,l,m,i,i,B.x),i,i,i,B.cY,i,i,i))}n.push(B.R)
n.push(A.h(E.cIQ(j.d),i,i,i,i,B.hQ,i,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a4,i,i))
if(f)B.e.n(n,A.a([B.ab,D.coS],o))
q=A.B(i,A.A(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.cY,i,i,i)
n=A.ba(i,i,i,h.$2("Estado",new C.wm(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a3,i)
h=A.a([A.a6(A.d6(A.a([q,B.aB,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bB,i,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.wb("Cancelar cobran\xe7a",j.gaZs(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wb("Nova cobran\xe7a",j.gb8T(),!1,!1,i),B.ab,new C.wb("Fechar",new C.bOa(j),!0,!1,i)],o))
else h.push(new C.wb("Mostrar outro QR",j.gal2(),!1,j.f,i))
return A.A(h,B.E,B.h,B.l)}}
C.Fh.prototype={
R(){return new C.afR()}}
C.afR.prototype={
ac(){this.ap()
this.IV()},
IV(){var x=0,w=A.n(y.H),v=this,u
var $async$IV=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cme(v))
x=2
return A.d(C.cNl(v.a.c),$async$IV)
case 2:u=e
if(v.c!=null)v.p(new C.cmf(v,u))
return A.l(null,w)}})
return A.m($async$IV,w)},
aSF(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nP("",d.c,"pay_request",d.d/100,x,x,new C.cmc(this),!1,new C.cmd(d),B.VV,x,w,C.dJB(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Uh(this.aSF(t),u)
x=s?"Pagar":C.dBN(t.a)
if(s)s=D.aIo
else{s=t.a
w=y.p
v=A.a([A.bL(A.a2t(s==="paid"?B.iL:B.qq,3,u,120),u,u),B.R,A.h(C.dBM(s),u,u,u,u,B.hf,B.a4,u,u),B.bi],w)
if(s==="error")B.e.n(v,A.a([new C.wb("Tentar outra vez",this.gaZt(),!1,!1,u),B.ab,new C.wb("Fechar",new C.cmg(d),!0,!1,u)],w))
else v.push(new C.wb("OK",new C.cmh(d),!1,!1,u))
s=v}return new C.aOT(x,s,u)}}
C.aOT.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=A.a6(A.cP(B.bw,x,B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxL(d),x,x,x,x,x,x,!1,B.aN),1),u=y.p,t=A.a([A.bL(A.B(x,x,B.r,x,x,new A.K(N.ul,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aB,A.O(A.a([A.a6(A.h(this.c,x,x,x,x,B.bl,x,x,x),1),A.pV(B.el,new C.cxM(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a0],u)
B.e.n(t,this.d)
return A.fE(!1,B.aG,!0,x,A.A(A.a([v,A.B(x,A.A(t,B.E,B.h,B.J),B.r,x,x,M.Kv,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.iY,B.l),B.r,x,0,x,x,x,x,x,B.eZ)}}
var z=a.updateTypes(["F<~>()","~()","M(N,m5<FX>)","~(c)","c(c)"])
C.cKB.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:132}
C.cvZ.prototype={
$0(){var x=this.a
return x.f=x.a4y(0,this.b)},
$S:0}
C.cw_.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4y(0,this.b),this.c)},
$S:0}
C.cw6.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bY5
x=y.p
w=A.a([A.O(A.a([A.pV(B.lE,new C.cw5(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.c7L,B.bM],x))
else w.push(B.a0)
x=this.a
if(!v)B.e.n(w,x.bdS(t))
else B.e.n(w,x.bdc(t))
return A.d6(w,u,B.CX,u,u,!1,!1)},
$S:z+2}
C.cw5.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
C.cw4.prototype={
$0(){var x=this.a
return x.p(new C.cw3(x))},
$S:0}
C.cw3.prototype={
$0(){var x=this.a
return x.d=x.L4()},
$S:0}
C.cw2.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).al("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.cw0.prototype={
$0(){return this.a.RD(this.b,this.c)},
$S:0}
C.cw1.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).al("/cobrar",null,y.X)},
$S:0}
C.bM0.prototype={
$0(){},
$S:0}
C.bO9.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aP(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dN(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bO2.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bO3.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bO4.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bOg.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.fN(new A.ac(Date.now(),0,!1)))x.a5e("expired")
else x.p(new C.bOf())},
$S:67}
C.bOf.prototype={
$0(){},
$S:0}
C.bOh.prototype={
$1(d){return this.aEK(d)},
aEK(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.al8(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a5e("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:477}
C.bO8.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ac(Date.now(),0,!1)},
$S:0}
C.bOe.prototype={
$1(d){var x=null
return new A.eS(D.ca4,D.cgZ,A.a([A.cx(B.mu,x,x,new C.bOc(d),x,x),A.bE(D.cgR,new C.bOd(this.a,d),x)],y.p),x)},
$S:19}
C.bOc.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.bOd.prototype={
$0(){A.am(this.b,!1).bp()
var x=this.a.c
x.toString
A.ae(x).al("/partner-payments/setup",null,y.X)},
$S:0}
C.bO0.prototype={
$1(d){var x=null
return new A.eS(D.cgm,D.cf8,A.a([A.cx(D.cex,x,x,new C.bNZ(d),x,x),A.bE(D.cc3,new C.bO_(d),x)],y.p),x)},
$S:19}
C.bNZ.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.bO_.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.bO1.prototype={
$0(){return this.a.r=null},
$S:0}
C.bO7.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.jt(0,B.jb)},
$S:0}
C.bOi.prototype={
$2(d,e){if(!d)this.a.al1()},
$S:175}
C.bO5.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a6(A.ba(x,!0,x,A.fE(!1,B.aG,!0,x,A.eR(!1,t,!0,A.aH(A.bL(w?D.aDM:A.h(d,x,x,x,x,B.p8,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,new C.bO6(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fI(u,D.Kh),x,x,B.cR),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x),1)},
$S:491}
C.bO6.prototype={
$0(){return this.a.bdO(this.b)},
$S:0}
C.bOb.prototype={
$2(d,e){var x=null
return A.B(x,A.O(A.a([A.a6(A.h(d,x,x,x,x,B.cj,x,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.Ku,x,x,x,B.cm,x,x,x)},
$S:1363}
C.bOa.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).iw()},
$S:0}
C.cme.prototype={
$0(){return this.a.d=null},
$S:0}
C.cmf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cmc.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aF0(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aF0(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.al8(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.ajI)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b_G(A.q(t)))
v=A.cNm(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:131}
C.cmd.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oJ
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.al8(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.Z(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1364}
C.cmg.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cmh.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cxL.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cxM.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dJB","dBL",4)
var u
w(u=C.ac7.prototype,"gal2","RE",0)
v(u,"gba_","a5e",3)
w(u,"gaZs","Dn",0)
w(u,"gb8T","aoM",1)
w(u,"gaZr","al1",1)
w(C.afR.prototype,"gaZt","IV",0)})();(function inheritance(){var x=a.inheritMany
x(A.J,[C.avt,C.a67,C.ayb,C.FX])
x(A.bw,[C.cKB,C.bOg,C.bOh,C.bOe,C.bO0,C.bO5,C.cmc])
x(A.M,[C.ajm,C.H0,C.wm,C.wb,C.aOT])
x(A.G,[C.FY,C.De,C.Fh])
x(A.Y,[C.aOc,C.ac7,C.afR])
x(A.bO,[C.cvZ,C.cw_,C.cw5,C.cw4,C.cw3,C.cw2,C.cw0,C.cw1,C.bM0,C.bO9,C.bO2,C.bO3,C.bO4,C.bOf,C.bO8,C.bOc,C.bOd,C.bNZ,C.bO_,C.bO1,C.bO7,C.bO6,C.bOa,C.cme,C.cmf,C.cmd,C.cmg,C.cmh,C.cxL,C.cxM])
x(A.cK,[C.cw6,C.bOi,C.bOb])})()
A.bt(b.typeUniverse,JSON.parse('{"ajm":{"M":[],"e":[],"f":[]},"H0":{"M":[],"e":[],"f":[]},"FY":{"G":[],"e":[],"f":[]},"aOc":{"Y":["FY"]},"wm":{"M":[],"e":[],"f":[]},"wb":{"M":[],"e":[],"f":[]},"De":{"G":[],"e":[],"f":[]},"ac7":{"Y":["De"]},"Fh":{"G":[],"e":[],"f":[]},"afR":{"Y":["Fh"]},"aOT":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cJ"),E:x("r<ayb>"),s:x("r<c>"),p:x("r<e>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dh"),K:x("J"),y:x("a67"),m:x("tD"),k:x("+(c,bn)"),R:x("+at,result(ac?,c)"),u:x("+error,request(c?,avt?)"),A:x("FX"),N:x("c"),v:x("aN<FX>"),q:x("dr"),x:x("z"),z:x("@"),g:x("t<@>?"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Kh=new A.bf(B.fa,0.5,B.ai,-1)
D.af4=new A.dO(D.Kh,B.aa,B.aa,B.aa)
D.Ku=new A.K(null,null,D.af4,null,null,null,B.x)
D.ajI=new A.Dk("invalid_state")
D.ast=new A.a3(14,18,14,18)
D.atB=new A.a3(20,8,20,20)
D.aCo=new A.aZ(61109,"MaterialIcons",null,!0)
D.aDM=new A.b7(D.aCo,22,B.z,null,null,null)
D.aFd=new A.dB(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bs,null,null,B.bs,B.bs,!0,null,null,null,null)
D.bXK=new A.iy(40,40,20,B.t,0,null)
D.bXC=new A.iy(null,32,12,B.t,1,null)
D.azS=new A.bQ(1,B.au,D.bXC,null)
D.bwC=x([D.bXK,B.ae,D.azS],y.p)
D.bTV=new A.n7(B.bF,B.h,B.l,B.v,null,B.c5,null,0,D.bwC,null)
D.bXF=new A.iy(null,120,22,B.t,1,null)
D.bXJ=new A.iy(null,56,22,B.t,2,null)
D.bXL=new A.iy(null,52,26,B.t,2,null)
D.aIo=x([D.bTV,B.bM,D.bXF,B.R,D.bXJ,B.a0,D.bXL],y.p)
D.bxu=x(["1","2","3"],y.s)
D.bwa=x(["4","5","6"],y.s)
D.bu_=x(["7","8","9"],y.s)
D.b6G=x(["00","0","del"],y.s)
D.bCa=x([D.bxu,D.bwa,D.bu_,D.b6G],A.w("r<t<c>>"))
D.a23=new C.a67("error",null,"",0,null)
D.bR_=new A.Z("Cancelado",!1)
D.bR6=new A.Z("Expirou",!1)
D.bSj=new A.Z("\xc0 espera\u2026",!1)
D.bSN=new A.bV(I.kA,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bTg=new A.bV(B.hB,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTt=new A.bV(B.kz,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTv=new A.bV(B.E8,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bz9=x([],y.E)
D.Ha=new C.FX("error",null,null,null,D.bz9,"entry",null)
D.auD=new A.nA(B.iL,150,3,null,null)
D.aji=new A.f8(B.K,null,null,D.auD,null)
D.bXr=new A.c_(null,214,D.aji,null)
D.bY5=new A.vU(!1,3,!1,null)
D.c11=new A.Q(!0,B.z,null,null,null,null,44,B.G,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c53=new A.Q(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7L=new A.D("Quem \xe9",null,B.hQ,null,null,null,null,null,null,null,null)
D.ca4=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cbK=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mq,null,null,null,null,null,null,null,null)
D.cc3=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.cdv=new A.D("O qu\xea",null,B.L,null,null,null,null,null,null,null,null)
D.ce3=new A.D("Cobrar",null,B.kW,null,null,null,null,null,null,null,null)
D.ceo=new A.D("Ver perfil",null,K.ta,null,null,null,null,null,null,null,null)
D.cex=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cf1=new A.D("Leste o QR agora",null,B.L,null,null,null,null,null,null,null,null)
D.cf8=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.cgm=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.cgR=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cgZ=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.coS=new C.wm("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.coT=new C.wm("Verificado",!0,null)
D.acP=new C.wm("Por registar",!1,null)
D.coV=new C.wm("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUq","cU1",()=>{var w=A.W(16)
return A.dnK(A.bA(B.fa,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["SMPt2g1RHK4+xzllDI1AAW0tlXM="]=a.current})($__dart_deferred_initializers__);