((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cHZ(d,e){return C.dIn(d,e)},
dIn(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cHZ=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cHZ)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.d5(A.q(J.i(s,"expires_at")))
p=p==null?null:p.dP()
if(p==null)p=new A.ac(Date.now(),0,!1).ek(6e8)
v=new A.YT(null,new C.avq(r,q,p))
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
return A.m($async$cHZ,w)},
cHa(d){return C.dHH(d)},
dHH(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHa=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aK("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cHa)
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
return A.m($async$cHa,w)},
dKe(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.Me(0,"pay-request-"+d,B.yt).O8(new C.cK1(e),B.GQ,new G.Ft(H.yg,"id",d),"public","pay_requests").Q1(0)},
cMK(d){return C.dLs(d)},
dLs(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cMK=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cMK)
case 7:s=f
if(!y.f.b(s)){v=D.a2a
x=1
break}r=A.q(J.i(s,"result"))
q=A.C(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.q(p==null?"":p)
o=A.aG(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.i(s,"description"))
v=new C.a68(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a2a
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cMK,w)},
ala(d){return C.dIL(d)},
dIL(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ala=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f4("event-pay",d),$async$ala)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.hb(r,o,n):A.R(["error","unknown_error"],o,n)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
if(o instanceof A.pi){q=o
p=q.b
o=y.N
n=y.z
o=y.f.b(p)?J.hb(p,o,n):A.R(["error","unknown_error"],o,n)
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
return A.m($async$ala,w)},
avq:function avq(d,e,f){this.a=d
this.b=e
this.c=f},
cK1:function cK1(d){this.a=d},
a68:function a68(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cR0(d){return C.dM5(d)},
dM5(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cR0=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aK("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cR0)
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
j=J.ap(j==null?B.al:j)
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
a1=A.d5(A.q(a1==null?"":a1))
a2=A.C(h.h(i,"booking_number"))
a3=A.aG(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.C(J.i(g,"status")):null
if(a5){a5=A.aG(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.d5(A.q(a7==null?"":a7))
a7=a7==null?null:a7.dP()
J.o(h.h(i,"can_charge"),!0)
J.bt(r,new C.ay8(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dI(p)
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
return A.m($async$cR0,w)},
aVj(d,e){return C.dM4(d,e)},
dM4(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVj=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aK("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVj)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aK("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVj)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YR(null,"error")
x=1
break}r=A.q(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d5(A.q(q==null?"":q))
q=q==null?null:q.dP()
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
return A.m($async$aVj,w)},
ay8:function ay8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cYM(d){return B.f.aW(B.j.k(A.ib(d)),2,"0")+":"+B.f.aW(B.j.k(A.hX(d)),2,"0")},
d7x(d){return new C.FV(d,null)},
dng(){return new C.Dc(null)},
dtX(d){return new C.Ff(d,null)},
dB1(d){var x
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
default:x=A.aV7(d)
break}return x},
dB3(d){var x
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
dB2(d){var x
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
ajo:function ajo(d,e){this.c=d
this.a=e},
GZ:function GZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FV:function FV(d,e){this.c=d
this.a=e},
aOd:function aOd(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cvy:function cvy(d,e){this.a=d
this.b=e},
cvz:function cvz(d,e,f){this.a=d
this.b=e
this.c=f},
cvG:function cvG(d){this.a=d},
cvF:function cvF(d){this.a=d},
cvE:function cvE(d){this.a=d},
cvD:function cvD(d){this.a=d},
cvC:function cvC(d,e){this.a=d
this.b=e},
cvA:function cvA(d,e,f){this.a=d
this.b=e
this.c=f},
cvB:function cvB(d){this.a=d},
wl:function wl(d,e,f){this.c=d
this.d=e
this.a=f},
wa:function wa(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bLH:function bLH(){},
Dc:function Dc(d){this.a=d},
ac9:function ac9(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bNQ:function bNQ(d,e){this.a=d
this.b=e},
bNJ:function bNJ(d){this.a=d},
bNK:function bNK(d){this.a=d},
bNL:function bNL(d,e){this.a=d
this.b=e},
bNX:function bNX(d,e){this.a=d
this.b=e},
bNW:function bNW(){},
bNY:function bNY(d,e){this.a=d
this.b=e},
bNP:function bNP(d,e){this.a=d
this.b=e},
bNV:function bNV(d){this.a=d},
bNT:function bNT(d){this.a=d},
bNU:function bNU(d,e){this.a=d
this.b=e},
bNH:function bNH(){},
bNF:function bNF(d){this.a=d},
bNG:function bNG(d){this.a=d},
bNI:function bNI(d){this.a=d},
bNO:function bNO(d){this.a=d},
bNZ:function bNZ(d){this.a=d},
bNM:function bNM(d){this.a=d},
bNN:function bNN(d,e){this.a=d
this.b=e},
bNS:function bNS(){},
bNR:function bNR(d){this.a=d},
Ff:function Ff(d,e){this.c=d
this.a=e},
afT:function afT(){this.c=this.a=this.d=null},
clG:function clG(d){this.a=d},
clH:function clH(d,e){this.a=d
this.b=e},
clE:function clE(d){this.a=d},
clF:function clF(d){this.a=d},
clI:function clI(d){this.a=d},
clJ:function clJ(d){this.a=d},
aOU:function aOU(d,e,f){this.c=d
this.d=e
this.a=f},
cxk:function cxk(d){this.a=d},
cxl:function cxl(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[88]
G=c[123]
H=c[247]
C=a.updateHolder(c[14],C)
D=c[284]
I=c[239]
K=c[249]
F=c[285]
L=c[56]
M=c[287]
N=c[286]
C.avq.prototype={}
C.a68.prototype={}
C.ay8.prototype={}
C.FU.prototype={
gaq(d){return this.c}}
C.ajo.prototype={
u(d){var x=null
return A.x(x,this.c,B.r,x,x,$.cTo(),x,x,x,B.cI,x,x,x)}}
C.GZ.prototype={
u(d){var x=null,w=A.a([A.a5(A.h(this.c,x,x,x,x,B.cf,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bD,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.x(x,A.O(w,B.v,B.h,B.l,0,x),B.r,x,x,D.Kw,x,x,x,B.dX,x,x,x)}}
C.FV.prototype={
R(){return new C.aOd(A.E(y.N,y.R))}}
C.aOd.prototype={
L3(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$L3=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cR0(u.a.c),$async$L3)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ah(t).Gw("/u/"+A.q(s),null,y.X)
v=new A.aN($.aT,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$L3,w)},
a4u(d,e){var x=e.c
return x==null?"e"+e.b:x},
RB(d,e){return this.aV4(d,e)},
aV4(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$RB=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cvy(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVj(t,e),$async$RB)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cvz(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$RB,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.L3()
return A.cP(null,B.bz,A.bD(!0,A.b7H(new C.cvG(x),w,y.A),null,B.Z,!0),!0,null)},
bdL(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bTj
break
case"own_code":x=D.bTw
break
case"not_found":x=D.bSQ
break
default:x=D.bTy
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
q=A.a([B.kS,A.b6(r,o?B.U:B.fo,p,p,96),B.a0,A.h(v,p,p,p,p,B.hm,B.a5,p,p),B.Q,A.h(u,p,p,p,p,D.c5j,B.a5,p,p)],x)
if(o)B.e.n(q,A.a([B.cS,A.bE(B.tl,new C.cvE(this),p)],x))
return q},
bd5(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.cq(r,44,d.d,!1,!0,s),B.ae,A.a5(A.A(A.a([A.h(r,s,s,s,s,B.ir,s,s,s),D.cft],x),B.G,B.h,B.l),1),B.af,D.cpq],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.d3(B.bf,s,s,A.aH(A.h5(D.ceP,new C.cvC(this,d),A.fF(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bQ,s,B.ac,B.c6,s,s,s,s)),36,s),s)],x))
w=A.a([new C.ajo(A.A(w,B.F,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bs,D.cca],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b6U(0,d,v[t]))
return w},
b6U(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a4u(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
s=i}i=A.h(k?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",n,n,n,n,B.aN,n,n,n)
x=y.p
r=A.a([A.h(f.d,n,n,n,n,B.ir,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.qi,A.h(B.dt[A.fI(q)-1]+", "+A.az(q)+" "+B.bm[A.ao(q)-1],n,n,n,n,B.N,n,n,n),n))
r.push(B.ad)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.GZ("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.GZ("Pessoas",A.q(p),n,n))
q.push(new C.GZ("Chegada",n,v?new C.wl("Registada \xe0s "+C.cYM(w),!0,n):D.acV,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wl(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cps
p=v?new C.wl("Registada \xe0s "+C.cYM(w),!0,n):D.acV
B.e.n(r,A.a([new C.GZ("Bilhete",n,q,n),new C.GZ("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.nu,A.h(t,n,n,n,n,B.zc,n,n,n),n))
i=A.a([B.bs,i,B.at,new C.ajo(A.A(r,B.F,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cvA(o,e,f):n
if(r===m)r=B.yU
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kX,n,n,n)
t.push(A.a5(A.aH(A.bE(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ag)
x.push(A.a5(A.aH(A.h5(D.cev,new C.cvB(o),A.fF(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.ac,B.c6,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.v,B.h,B.l,0,n))
return i}}
C.wl.prototype={
u(d){var x=null,w=this.d,v=w?B.cy:B.dV,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?B.cX:B.cp,x,x,x,x,x,x,x,x,12,x,x,B.E,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.I(v,x,x,u,x,x,B.x),x,x,x,B.dn,x,x,x)}}
C.wa.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mj:A.h(x.c,w,w,w,w,B.eK,w,w,w)
if(x.e)v=A.h5(u,x.d,A.fF(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.ac,B.c6,w,w,w,w))
else{v=v?new C.bLH():x.d
v=A.bE(u,v,A.cj(B.z,B.z.cd(0.35),B.t,B.t,w,w,B.ac,w,w,w))}return A.aH(v,52,1/0)}}
C.Dc.prototype={
R(){return new C.ac9(new A.aE(B.ak,$.aa()))}}
C.ac9.prototype={
m(){this.UY()
var x=this.e
x.Y$=$.aa()
x.W$=0
this.a6()},
UY(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yg(v)}w.y=null
v=w.z
if(v!=null)v.aN(0)
v=w.Q
if(v!=null)v.aN(0)},
bdH(d){this.p(new C.bNQ(this,d))},
RC(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$RC=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bNJ(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cHZ(s,t.length===0?null:t),$async$RC)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bNK(u))
q=r.b
if(q==null){s=r.a
v=u.biU(s==null?"error":s)
x=1
break}u.p(new C.bNL(u,q))
u.bmt(q)
case 1:return A.l(v,w)}})
return A.m($async$RC,w)},
bmt(d){var x=this
x.UY()
x.y=C.dKe(d.a,x.gb9U())
x.z=A.u5(B.fR,new C.bNX(x,d))
x.Q=A.u5(B.uW,new C.bNY(x,d))},
a5a(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bNP(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aN(0)
x=w.Q
if(x!=null)x.aN(0)}},
biU(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fR(!0,new C.bNV(this),x,y.H)
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
return A.d(A.fR(!0,new C.bNH(),t,y.x),$async$Dl)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHa(s.a),$async$Dl)
case 6:if(u.c==null){x=1
break}case 4:u.UY()
u.p(new C.bNI(u))
case 1:return A.l(v,w)}})
return A.m($async$Dl,w)},
aoK(){this.UY()
this.p(new C.bNO(this))},
al_(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dl()
else w.aoK()
else{x=w.c
x.toString
A.am(x,!1).iw()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pS(B.lG,x.gaZm(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hm,w,w,w)
return A.bnH(u,A.cP(w,B.bz,A.bD(!0,new A.S(D.atG,A.A(A.a([new A.d3(B.bf,w,w,t,w),B.R,s,B.bs,A.a5(u?x.b72():x.be6(v),1)],y.p),B.F,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bNZ(x),y.K)},
b72(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bNM(o),j=$.cTo(),i=y.p
j=A.x(n,A.A(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.N,B.a5,n,n),B.ad,A.ba(n,n,n,A.h(E.cIh(m),n,n,n,n,D.c1c,n,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a4,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.asx,n,n,n)
m=A.W(999)
x=A.bA(B.fn,0.5)
m=A.a([j,B.ad,A.x(n,A.O(A.a([D.cdV,B.ag,A.a5(A.cs(n,B.a7,!1,n,!0,B.y,n,A.ct(),o.e,n,n,n,n,n,2,D.aFa,B.W,!0,n,!0,n,!1,n,B.aC,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.an,n,n,n,n,n,n,n,n,n,n,n,B.kW,!0,B.av,n,B.he,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.I(B.t,n,x,m,n,n,B.x),n,44,n,B.bQ,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bCc[w]
x=B.e.gL(v)==="1"?16:10
u=A.a([],i)
for(t=A.ey(v,0,j),s=J.ap(t.a),r=t.b,t=new A.c3(s,r,A.u(t).i("c3<1>"));t.t();){q=t.c
q=q>=0?new A.a_(r+q,s.gE(s)):A.al(A.c5())
p=A.a([],i)
if(q.a>0)p.push(B.ag)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c_(n,x,n,n),A.O(u,B.v,B.h,B.l,0,n)],i))}m=A.a5(A.d_(m,n,B.Z,n,n,!1,B.a1,!1),1)
j=o.f
return A.A(A.a([m,B.R,new C.wa("Mostrar o QR para pagar",l?o.gal0():n,!1,j,n)],i),B.F,B.h,B.l)},
be6(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cH(new A.ac(Date.now(),0,!1)).a
x=h<0?0:B.j.aP(h,1e6)
w=""+B.j.aP(x,60)+":"+B.f.aW(B.j.k(B.j.aG(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.a_("Pago \xe0s "+C.cYM(h==null?new A.ac(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bR9
break
case"cancelled":h=D.bR2
break
default:h=D.bSm
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bNS()
q=j.c
q.toString
q=A.nN(q,!1).a0(0,$.b9(),y.D).b
p=q==null?i:q.x
q=$.cTo()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.ir,B.a5,i,i))
n.push(new A.S(F.qi,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.N,B.a5,i,i),i))
n.push(B.R)
if(g)n.push(D.bXz)
else{m=A.W(16)
l=A.bA(B.fn,0.5)
k=f?1:0.15
n.push(A.x(i,A.ff(A.cWB(B.t,A.kD("/pagar/"+d.b),B.GS,B.GT,B.Z,"QR para pagar "+E.cIh(j.d),186),k),B.r,i,i,new A.I(B.t,i,l,m,i,i,B.x),i,i,i,B.cI,i,i,i))}n.push(B.R)
n.push(A.h(E.cIh(j.d),i,i,i,i,B.hm,i,i,i))
n.push(B.aV)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.N,B.a5,i,i))
if(f)B.e.n(n,A.a([B.ad,D.cpp],o))
q=A.x(i,A.A(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.cI,i,i,i)
n=A.ba(i,i,i,h.$2("Estado",new C.wl(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a4,i)
h=A.a([A.a5(A.d_(A.a([q,B.aB,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bD,i,i,i))],o),i,B.Z,i,i,!1,B.a1,!1),1),B.R],o)
if(f)h.push(new C.wa("Cancelar cobran\xe7a",j.gaZn(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wa("Nova cobran\xe7a",j.gb8N(),!1,!1,i),B.ad,new C.wa("Fechar",new C.bNR(j),!0,!1,i)],o))
else h.push(new C.wa("Mostrar outro QR",j.gal0(),!1,j.f,i))
return A.A(h,B.F,B.h,B.l)}}
C.Ff.prototype={
R(){return new C.afT()}}
C.afT.prototype={
ac(){this.ao()
this.IT()},
IT(){var x=0,w=A.n(y.H),v=this,u
var $async$IT=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.clG(v))
x=2
return A.d(C.cMK(v.a.c),$async$IT)
case 2:u=e
if(v.c!=null)v.p(new C.clH(v,u))
return A.l(null,w)}})
return A.m($async$IT,w)},
aSB(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nL("",d.c,"pay_request",d.d/100,x,x,new C.clE(this),!1,new C.clF(d),B.W2,x,w,C.dIO(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Ui(this.aSB(t),u)
x=s?"Pagar":C.dB3(t.a)
if(s)s=D.aIp
else{s=t.a
w=y.p
v=A.a([A.bM(A.a2v(s==="paid"?B.jE:B.qr,3,u,120),u,u),B.R,A.h(C.dB2(s),u,u,u,u,B.hh,B.a5,u,u),B.bh],w)
if(s==="error")B.e.n(v,A.a([new C.wa("Tentar outra vez",this.gaZo(),!1,!1,u),B.ad,new C.wa("Fechar",new C.clI(d),!0,!1,u)],w))
else v.push(new C.wa("OK",new C.clJ(d),!1,!1,u))
s=v}return new C.aOU(x,s,u)}}
C.aOU.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=A.a5(A.cL(B.by,x,B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxk(d),x,x,x,x,x,x,!1,B.aJ),1),u=y.p,t=A.a([A.bM(A.x(x,x,B.r,x,x,new A.I(N.uj,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aB,A.O(A.a([A.a5(A.h(this.c,x,x,x,x,B.bj,x,x,x),1),A.pS(B.ek,new C.cxl(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a0],u)
B.e.n(t,this.d)
return A.fE(!1,B.aG,!0,x,A.A(A.a([v,A.x(x,A.A(t,B.F,B.h,B.J),B.r,x,x,M.Kx,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.iY,B.l),B.r,x,0,x,x,x,x,x,B.eA)}}
var z=a.updateTypes(["F<~>()","~()","L(N,m3<FU>)","~(c)","c(c)"])
C.cK1.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:135}
C.cvy.prototype={
$0(){var x=this.a
return x.f=x.a4u(0,this.b)},
$S:0}
C.cvz.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4u(0,this.b),this.c)},
$S:0}
C.cvG.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bYf
x=y.p
w=A.a([A.O(A.a([A.pS(B.lG,new C.cvF(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.c85,B.bs],x))
else w.push(B.a0)
x=this.a
if(!v)B.e.n(w,x.bdL(t))
else B.e.n(w,x.bd5(t))
return A.d_(w,u,B.D_,u,u,!1,B.a1,!1)},
$S:z+2}
C.cvF.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
C.cvE.prototype={
$0(){var x=this.a
return x.p(new C.cvD(x))},
$S:0}
C.cvD.prototype={
$0(){var x=this.a
return x.d=x.L3()},
$S:0}
C.cvC.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.cvA.prototype={
$0(){return this.a.RB(this.b,this.c)},
$S:0}
C.cvB.prototype={
$0(){var x=this.a.c
x.toString
return A.ah(x).av("/cobrar",null,y.X)},
$S:0}
C.bLH.prototype={
$0(){},
$S:0}
C.bNQ.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aP(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dM(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bNJ.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bNK.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bNL.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bNX.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.h3(new A.ac(Date.now(),0,!1)))x.a5a("expired")
else x.p(new C.bNW())},
$S:67}
C.bNW.prototype={
$0(){},
$S:0}
C.bNY.prototype={
$1(d){return this.aEJ(d)},
aEJ(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.ala(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a5a("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:294}
C.bNP.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ac(Date.now(),0,!1)},
$S:0}
C.bNV.prototype={
$1(d){var x=null
return new A.eR(D.car,D.cht,A.a([A.cx(B.mw,x,x,new C.bNT(d),x,x),A.bE(D.chl,new C.bNU(this.a,d),x)],y.p),x)},
$S:19}
C.bNT.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.bNU.prototype={
$0(){A.am(this.b,!1).bp()
var x=this.a.c
x.toString
A.ah(x).av("/partner-payments/setup",null,y.X)},
$S:0}
C.bNH.prototype={
$1(d){var x=null
return new A.eR(D.cgQ,D.cfA,A.a([A.cx(D.ceX,x,x,new C.bNF(d),x,x),A.bE(D.ccu,new C.bNG(d),x)],y.p),x)},
$S:19}
C.bNF.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.bNG.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.bNI.prototype={
$0(){return this.a.r=null},
$S:0}
C.bNO.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.js(0,B.ja)},
$S:0}
C.bNZ.prototype={
$2(d,e){if(!d)this.a.al_()},
$S:183}
C.bNM.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a5(A.ba(x,!0,x,A.fE(!1,B.aG,!0,x,A.eL(!1,t,!0,A.aH(A.bM(w?D.aDI:A.h(d,x,x,x,x,B.p4,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,new C.bNN(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fJ(u,D.Kj),x,x,B.cR),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a4,x),1)},
$S:226}
C.bNN.prototype={
$0(){return this.a.bdH(this.b)},
$S:0}
C.bNS.prototype={
$2(d,e){var x=null
return A.x(x,A.O(A.a([A.a5(A.h(d,x,x,x,x,B.cf,x,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.Kw,x,x,x,B.cm,x,x,x)},
$S:1359}
C.bNR.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).iw()},
$S:0}
C.clG.prototype={
$0(){return this.a.d=null},
$S:0}
C.clH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.clE.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aF_(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aF_(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.ala(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.ajO)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b_G(A.q(t)))
v=A.cML(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:147}
C.clF.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oH
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.ala(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.a_(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1360}
C.clI.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
C.clJ.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
C.cxk.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
C.cxl.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dIO","dB1",4)
var u
w(u=C.ac9.prototype,"gal0","RC",0)
v(u,"gb9U","a5a",3)
w(u,"gaZn","Dl",0)
w(u,"gb8N","aoK",1)
w(u,"gaZm","al_",1)
w(C.afT.prototype,"gaZo","IT",0)})();(function inheritance(){var x=a.inheritMany
x(A.J,[C.avq,C.a68,C.ay8,C.FU])
x(A.bu,[C.cK1,C.bNX,C.bNY,C.bNV,C.bNH,C.bNM,C.clE])
x(A.L,[C.ajo,C.GZ,C.wl,C.wa,C.aOU])
x(A.G,[C.FV,C.Dc,C.Ff])
x(A.Y,[C.aOd,C.ac9,C.afT])
x(A.bP,[C.cvy,C.cvz,C.cvF,C.cvE,C.cvD,C.cvC,C.cvA,C.cvB,C.bLH,C.bNQ,C.bNJ,C.bNK,C.bNL,C.bNW,C.bNP,C.bNT,C.bNU,C.bNF,C.bNG,C.bNI,C.bNO,C.bNN,C.bNR,C.clG,C.clH,C.clF,C.clI,C.clJ,C.cxk,C.cxl])
x(A.cK,[C.cvG,C.bNZ,C.bNS])})()
A.bn(b.typeUniverse,JSON.parse('{"ajo":{"L":[],"e":[],"f":[]},"GZ":{"L":[],"e":[],"f":[]},"FV":{"G":[],"e":[],"f":[]},"aOd":{"Y":["FV"]},"wl":{"L":[],"e":[],"f":[]},"wa":{"L":[],"e":[],"f":[]},"Dc":{"G":[],"e":[],"f":[]},"ac9":{"Y":["Dc"]},"Ff":{"G":[],"e":[],"f":[]},"afT":{"Y":["Ff"]},"aOU":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cB"),E:x("r<ay8>"),s:x("r<c>"),p:x("r<e>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dg"),K:x("J"),y:x("a68"),m:x("tC"),k:x("+(c,bm)"),R:x("+at,result(ac?,c)"),u:x("+error,request(c?,avq?)"),A:x("FU"),N:x("c"),v:x("aN<FU>"),q:x("dp"),x:x("y"),z:x("@"),g:x("t<@>?"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Kj=new A.bf(B.fn,0.5,B.aj,-1)
D.afa=new A.dN(D.Kj,B.ab,B.ab,B.ab)
D.Kw=new A.I(null,null,D.afa,null,null,null,B.x)
D.ajO=new A.Dh("invalid_state")
D.asx=new A.a3(14,18,14,18)
D.atG=new A.a3(20,8,20,20)
D.aCk=new A.aW(61109,"MaterialIcons",null,!0)
D.aDI=new A.b7(D.aCk,22,B.z,null,null,null)
D.aFa=new A.dA(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bt,null,null,B.bt,B.bt,!0,null,null,null,null)
D.bXS=new A.iw(40,40,20,B.t,0,null)
D.bXK=new A.iw(null,32,12,B.t,1,null)
D.azY=new A.bI(1,B.as,D.bXK,null)
D.bwG=x([D.bXS,B.ae,D.azY],y.p)
D.bU3=new A.mk(B.bx,B.h,B.l,B.v,null,B.c5,null,0,D.bwG,null)
D.bXN=new A.iw(null,120,22,B.t,1,null)
D.bXR=new A.iw(null,56,22,B.t,2,null)
D.bXT=new A.iw(null,52,26,B.t,2,null)
D.aIp=x([D.bU3,B.bs,D.bXN,B.R,D.bXR,B.a0,D.bXT],y.p)
D.bxy=x(["1","2","3"],y.s)
D.bwe=x(["4","5","6"],y.s)
D.bu4=x(["7","8","9"],y.s)
D.b6I=x(["00","0","del"],y.s)
D.bCc=x([D.bxy,D.bwe,D.bu4,D.b6I],A.w("r<t<c>>"))
D.a2a=new C.a68("error",null,"",0,null)
D.bR2=new A.a_("Cancelado",!1)
D.bR9=new A.a_("Expirou",!1)
D.bSm=new A.a_("\xc0 espera\u2026",!1)
D.bSQ=new A.bV(I.kC,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bTj=new A.bV(B.hE,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTw=new A.bV(B.kB,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTy=new A.bV(B.Ea,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bzb=x([],y.E)
D.Ha=new C.FU("error",null,null,null,D.bzb,"entry",null)
D.auH=new A.nw(B.jE,150,3,null,null)
D.ajo=new A.f8(B.K,null,null,D.auH,null)
D.bXz=new A.c_(null,214,D.ajo,null)
D.bYf=new A.vT(!1,3,!1,null)
D.c1c=new A.P(!0,B.z,null,null,null,null,44,B.E,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5j=new A.P(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c85=new A.D("Quem \xe9",null,B.hm,null,null,null,null,null,null,null,null)
D.car=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cca=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.ms,null,null,null,null,null,null,null,null)
D.ccu=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.cdV=new A.D("O qu\xea",null,B.N,null,null,null,null,null,null,null,null)
D.cev=new A.D("Cobrar",null,B.kX,null,null,null,null,null,null,null,null)
D.ceP=new A.D("Ver perfil",null,K.tc,null,null,null,null,null,null,null,null)
D.ceX=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cft=new A.D("Leste o QR agora",null,B.N,null,null,null,null,null,null,null,null)
D.cfA=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.cgQ=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.chl=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cht=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.cpp=new C.wl("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cpq=new C.wl("Verificado",!0,null)
D.acV=new C.wl("Por registar",!1,null)
D.cps=new C.wl("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTD","cTo",()=>{var w=A.W(16)
return A.dn_(A.bA(B.fn,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["RY4HHSWsYAqgbgcxuNdswSdlfSg="]=a.current})($__dart_deferred_initializers__);