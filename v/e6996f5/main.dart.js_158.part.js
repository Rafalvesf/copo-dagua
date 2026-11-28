((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cIo(d,e){return C.dJl(d,e)},
dJl(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cIo=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cIo)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.p(J.i(s,"id"))
q=A.p(J.i(s,"code"))
p=A.d2(A.p(J.i(s,"expires_at")))
p=p==null?null:p.dF()
if(p==null)p=new A.ac(Date.now(),0,!1).el(6e8)
v=new A.YO(null,new C.avd(r,q,p))
x=1
break}r=r.b(s)?A.p(J.i(s,"result")):"error"
v=new A.YO(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.YO("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cIo,w)},
cHA(d){return C.dIF(d)},
dIF(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHA=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aH("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cHA)
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
return A.m($async$cHA,w)},
dLe(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.LS(0,"pay-request-"+d,B.yh).NI(new C.cKu(e),B.GE,new G.Fn(H.y4,"id",d),"public","pay_requests").Pw(0)},
cNg(d){return C.dMr(d)},
dMr(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cNg=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cNg)
case 7:s=f
if(!y.f.b(s)){v=D.a1Q
x=1
break}r=A.p(J.i(s,"result"))
q=A.B(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.p(p==null?"":p)
o=A.aD(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.B(J.i(s,"description"))
v=new C.a5X(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a1Q
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cNg,w)},
akP(d){return C.dJK(d)},
dJK(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$akP=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f3("event-pay",d),$async$akP)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.h0(r,o,n):A.R(["error","unknown_error"],o,n)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
if(o instanceof A.pn){q=o
p=q.b
o=y.N
n=y.z
o=y.f.b(p)?J.h0(p,o,n):A.R(["error","unknown_error"],o,n)
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
return A.m($async$akP,w)},
avd:function avd(d,e,f){this.a=d
this.b=e
this.c=f},
cKu:function cKu(d){this.a=d},
a5X:function a5X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cRJ(d){return C.dN5(d)},
dN5(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cRJ=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aH("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cRJ)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.GZ
x=1
break}o=A.p(J.i(s,"result"))
n=A.B(J.i(s,"scan_id"))
m=A.B(J.i(s,"name"))
l=A.B(J.i(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.i(s,"items"))
j=J.ao(j==null?B.ai:j)
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
a1=A.d2(A.p(a1==null?"":a1))
a2=A.B(h.h(i,"booking_number"))
a3=A.aD(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.B(J.i(g,"status")):null
if(a5){a5=A.aD(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.d2(A.p(a7==null?"":a7))
a7=a7==null?null:a7.dF()
J.o(h.h(i,"can_charge"),!0)
J.br(r,new C.axX(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.B(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dL(p)
p=p===!0?"entry":"profile"}k=A.B(J.i(s,"profile_id"))
v=new C.FQ(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cT){v=D.GZ
x=1
break}else{v=D.GZ
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cRJ,w)},
aV1(d,e){return C.dN4(d,e)},
dN4(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aV1=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aH("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aV1)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aH("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aV1)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YM(null,"error")
x=1
break}r=A.p(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d2(A.p(q==null?"":q))
q=q==null?null:q.dF()
v=new A.YM(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YM(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aV1,w)},
axX:function axX(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
FQ:function FQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cZq(d){return B.f.aT(B.j.k(A.hZ(d)),2,"0")+":"+B.f.aT(B.j.k(A.hO(d)),2,"0")},
d8f(d){return new C.FR(d,null)},
doc(){return new C.D6(null)},
duT(d){return new C.Fa(d,null)},
dBW(d){var x
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
default:x=A.aUP(d)
break}return x},
dBY(d){var x
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
dBX(d){var x
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
aj4:function aj4(d,e){this.c=d
this.a=e},
GX:function GX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FR:function FR(d,e){this.c=d
this.a=e},
aNS:function aNS(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cvV:function cvV(d,e){this.a=d
this.b=e},
cvW:function cvW(d,e,f){this.a=d
this.b=e
this.c=f},
cw2:function cw2(d){this.a=d},
cw1:function cw1(d){this.a=d},
cw0:function cw0(d){this.a=d},
cw_:function cw_(d){this.a=d},
cvZ:function cvZ(d,e){this.a=d
this.b=e},
cvX:function cvX(d,e,f){this.a=d
this.b=e
this.c=f},
cvY:function cvY(d){this.a=d},
wl:function wl(d,e,f){this.c=d
this.d=e
this.a=f},
wb:function wb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bLT:function bLT(){},
D6:function D6(d){this.a=d},
abS:function abS(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bNX:function bNX(d,e){this.a=d
this.b=e},
bNQ:function bNQ(d){this.a=d},
bNR:function bNR(d){this.a=d},
bNS:function bNS(d,e){this.a=d
this.b=e},
bO3:function bO3(d,e){this.a=d
this.b=e},
bO2:function bO2(){},
bO4:function bO4(d,e){this.a=d
this.b=e},
bNW:function bNW(d,e){this.a=d
this.b=e},
bO1:function bO1(d){this.a=d},
bO_:function bO_(d){this.a=d},
bO0:function bO0(d,e){this.a=d
this.b=e},
bNO:function bNO(){},
bNM:function bNM(d){this.a=d},
bNN:function bNN(d){this.a=d},
bNP:function bNP(d){this.a=d},
bNV:function bNV(d){this.a=d},
bO5:function bO5(d){this.a=d},
bNT:function bNT(d){this.a=d},
bNU:function bNU(d,e){this.a=d
this.b=e},
bNZ:function bNZ(){},
bNY:function bNY(d){this.a=d},
Fa:function Fa(d,e){this.c=d
this.a=e},
afx:function afx(){this.c=this.a=this.d=null},
cm6:function cm6(d){this.a=d},
cm7:function cm7(d,e){this.a=d
this.b=e},
cm4:function cm4(d){this.a=d},
cm5:function cm5(d){this.a=d},
cm8:function cm8(d){this.a=d},
cm9:function cm9(d){this.a=d},
aOz:function aOz(d,e,f){this.c=d
this.d=e
this.a=f},
cxI:function cxI(d){this.a=d},
cxJ:function cxJ(d){this.a=d}},D,I,K,F,L,M,N
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
C.avd.prototype={}
C.a5X.prototype={}
C.axX.prototype={}
C.FQ.prototype={
gap(d){return this.c}}
C.aj4.prototype={
u(d){var x=null
return A.x(x,this.c,B.r,x,x,$.cU4(),x,x,x,B.cT,x,x,x)}}
C.GX.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.cc,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bx,x,x))
v=this.e
if(v!=null)w.push(v)
return A.x(x,A.O(w,B.v,B.h,B.l,0,x),B.r,x,x,D.Ki,x,x,x,B.dM,x,x,x)}}
C.FR.prototype={
R(){return new C.aNS(A.E(y.N,y.R))}}
C.aNS.prototype={
KJ(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KJ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cRJ(u.a.c),$async$KJ)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ae(t).Gh("/u/"+A.p(s),null,y.X)
v=new A.aQ($.aV,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$KJ,w)},
a3U(d,e){var x=e.c
return x==null?"e"+e.b:x},
R9(d,e){return this.aUe(d,e)},
aUe(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$R9=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cvV(u,e))
t=d.b
t.toString
x=3
return A.d(C.aV1(t,e),$async$R9)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cvW(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$R9,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KJ()
return A.cP(null,B.by,A.bB(!0,A.b7g(new C.cw2(x),w,y.A),null,B.Z,!0),!0,null)},
bcs(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bT3
break
case"own_code":x=D.bTg
break
case"not_found":x=D.bSA
break
default:x=D.bTi
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
q=A.a([B.kT,A.b9(r,o?B.W:B.fQ,p,p,96),B.a_,A.h(v,p,p,p,p,B.hP,B.a3,p),B.P,A.h(u,p,p,p,p,D.c4H,B.a3,p)],x)
if(o)B.e.n(q,A.a([B.d4,new A.am(A.bC(B.t4,new C.cw0(this),p),p)],x))
return q},
bbK(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.cg(r,44,d.d,!1,!0,s),B.af,A.a4(A.z(A.a([A.h(r,s,s,s,s,B.it,s,s),D.c7G],x),B.G,B.h,B.l),1),B.ab,D.coG],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.d_(B.bc,s,s,A.aK(new A.am(A.hi(D.ca_,new C.cvZ(this,d),A.fM(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bY,s,B.aa,B.c6,s,s,s,s)),s),36,s),s)],x))
w=A.a([new C.aj4(A.z(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bO,D.c8e],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b5w(0,d,v[t]))
return w},
b5w(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a3U(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
if(q!=null)r.push(new A.S(F.pX,A.h(B.dq[A.fF(q)-1]+", "+A.aE(q)+" "+B.bg[A.aw(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ac)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.GX("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.GX("Pessoas",A.p(p),n,n))
q.push(new C.GX("Chegada",n,v?new C.wl("Registada \xe0s "+C.cZq(w),!0,n):D.acF,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wl(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.coI
p=v?new C.wl("Registada \xe0s "+C.cZq(w),!0,n):D.acF
B.e.n(r,A.a([new C.GX("Bilhete",n,q,n),new C.GX("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.lp,A.h(t,n,n,n,n,B.z2,n,n),n))
i=A.a([B.bO,i,B.ar,new C.aj4(A.z(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cvX(o,e,f):n
if(r===m)r=B.yJ
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kX,n,n)
t.push(A.a4(A.aK(new A.am(A.bC(r,q,n),n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ae)
x.push(A.a4(A.aK(new A.am(A.hi(D.cbB,new C.cvY(o),A.fM(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.aa,B.c6,n,n,n,n)),n),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.v,B.h,B.l,0,n))
return i}}
C.wl.prototype={
u(d){var x=null,w=this.d,v=w?B.cx:B.dU,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?B.cR:B.cn,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.I(v,x,x,u,x,x,B.x),x,x,x,B.dl,x,x,x)}}
C.wb.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mb:A.h(x.c,w,w,w,w,B.eI,w,w)
if(x.e)v=new A.am(A.hi(u,x.d,A.fM(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.aa,B.c6,w,w,w,w)),w)
else{v=v?new C.bLT():x.d
v=new A.am(A.bC(u,v,A.cc(B.z,B.z.cc(0.35),B.t,B.t,w,w,B.aa,w,w,w)),w)}return A.aK(v,52,1/0)}}
C.D6.prototype={
R(){return new C.abS(new A.aF(B.ak,$.aa()))}}
C.abS.prototype={
m(){this.Uw()
var x=this.e
x.Z$=$.aa()
x.W$=0
this.a7()},
Uw(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.y3(v)}w.y=null
v=w.z
if(v!=null)v.aK(0)
v=w.Q
if(v!=null)v.aK(0)},
bcn(d){this.p(new C.bNX(this,d))},
Ra(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Ra=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bNQ(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cIo(s,t.length===0?null:t),$async$Ra)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bNR(u))
q=r.b
if(q==null){s=r.a
v=u.bhz(s==null?"error":s)
x=1
break}u.p(new C.bNS(u,q))
u.bl7(q)
case 1:return A.l(v,w)}})
return A.m($async$Ra,w)},
bl7(d){var x=this
x.Uw()
x.y=C.dLe(d.a,x.gb8w())
x.z=A.u6(B.hq,new C.bO3(x,d))
x.Q=A.u6(B.uK,new C.bO4(x,d))},
a4A(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bNW(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aK(0)
x=w.Q
if(x!=null)x.aK(0)}},
bhz(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.h_(!0,new C.bO1(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a0(A.bY(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
D7(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$D7=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.h_(!0,new C.bNO(),t,y.x),$async$D7)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHA(s.a),$async$D7)
case 6:if(u.c==null){x=1
break}case 4:u.Uw()
u.p(new C.bNP(u))
case 1:return A.l(v,w)}})
return A.m($async$D7,w)},
ao4(){this.Uw()
this.p(new C.bNV(this))},
akp(){var x,w=this
if(w.r!=null)if(w.w==="open")w.D7()
else w.ao4()
else{x=w.c
x.toString
A.al(x,!1).hz()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pU(B.lB,x.gaYu(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hP,w,w)
return A.cX8(u,A.cP(w,B.by,A.bB(!0,new A.S(D.ato,A.z(A.a([new A.d_(B.bc,w,w,t,w),B.R,s,B.bO,A.a4(u?x.b5F():x.bcO(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bO5(x),y.K)},
b5F(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bNT(o),j=$.cU4(),i=y.p
j=A.x(n,A.z(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a3,n),B.ac,A.bi(n,n,n,A.h(E.cIJ(m),n,n,n,n,D.c0A,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.ash,n,n,n)
m=A.W(999)
x=A.bF(B.f9,0.5)
m=A.a([j,B.ac,A.x(n,A.O(A.a([D.c7S,B.ae,A.a4(A.cs(n,B.a6,!1,n,!0,B.y,n,A.cu(),o.e,n,n,n,n,n,2,D.aF1,B.U,!0,n,!0,n,!1,n,B.aB,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.al,n,n,n,n,n,n,n,n,n,n,n,B.kW,!0,B.au,n,B.hb,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.I(B.t,n,x,m,n,n,B.x),n,44,n,B.bY,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bBU[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eu(v,0,j),s=J.ao(t.a),r=t.b,t=new A.bX(s,r,A.u(t).i("bX<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.an(A.c0())
p=A.a([],i)
if(q.a>0)p.push(B.ae)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c5(n,x,n,n),A.O(u,B.v,B.h,B.l,0,n)],i))}m=A.a4(A.d6(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.z(A.a([m,B.R,new C.wb("Mostrar o QR para pagar",l?o.gakq():n,!1,j,n)],i),B.E,B.h,B.l)},
bcO(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.co(new A.ac(Date.now(),0,!1)).a
x=h<0?0:B.j.aO(h,1e6)
w=""+B.j.aO(x,60)+":"+B.f.aT(B.j.k(B.j.aI(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.cZq(h==null?new A.ac(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bQR
break
case"cancelled":h=D.bQK
break
default:h=D.bS6
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bNZ()
q=j.c
q.toString
q=A.nP(q,!1).a_(0,$.b7(),y.D).b
p=q==null?i:q.x
q=$.cU4()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.it,B.a3,i))
n.push(new A.S(F.pX,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a3,i),i))
n.push(B.R)
if(g)n.push(D.bX1)
else{m=A.W(16)
l=A.bF(B.f9,0.5)
k=f?1:0.15
n.push(A.x(i,A.f3(A.bpj(B.t,A.kg("/pagar/"+d.b),B.GG,B.GH,B.Z,"QR para pagar "+E.cIJ(j.d),186),k),B.r,i,i,new A.I(B.t,i,l,m,i,i,B.x),i,i,i,B.cT,i,i,i))}n.push(B.R)
n.push(A.h(E.cIJ(j.d),i,i,i,i,B.hP,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a3,i))
if(f)B.e.n(n,A.a([B.ac,D.coF],o))
q=A.x(i,A.z(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.cT,i,i,i)
n=A.bi(i,i,i,h.$2("Estado",new C.wl(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a4(A.d6(A.a([q,B.aA,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bx,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.wb("Cancelar cobran\xe7a",j.gaYv(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wb("Nova cobran\xe7a",j.gb7q(),!1,!1,i),B.ac,new C.wb("Fechar",new C.bNY(j),!0,!1,i)],o))
else h.push(new C.wb("Mostrar outro QR",j.gakq(),!1,j.f,i))
return A.z(h,B.E,B.h,B.l)}}
C.Fa.prototype={
R(){return new C.afx()}}
C.afx.prototype={
ad(){this.aq()
this.Iz()},
Iz(){var x=0,w=A.n(y.H),v=this,u
var $async$Iz=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cm6(v))
x=2
return A.d(C.cNg(v.a.c),$async$Iz)
case 2:u=e
if(v.c!=null)v.p(new C.cm7(v,u))
return A.l(null,w)}})
return A.m($async$Iz,w)},
aRQ(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nN("",d.c,"pay_request",d.d/100,x,x,new C.cm4(this),!1,new C.cm5(d),B.VH,x,w,C.dJN(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Uh(this.aRQ(t),u)
x=s?"Pagar":C.dBY(t.a)
if(s)s=D.aId
else{s=t.a
w=y.p
v=A.a([A.bO(A.a2k(s==="paid"?B.iK:B.q5,3,u,120),u,u),B.R,A.h(C.dBX(s),u,u,u,u,B.hd,B.a3,u),B.bh],w)
if(s==="error")B.e.n(v,A.a([new C.wb("Tentar outra vez",this.gaYw(),!1,!1,u),B.ac,new C.wb("Fechar",new C.cm8(d),!0,!1,u)],w))
else v.push(new C.wb("OK",new C.cm9(d),!1,!1,u))
s=v}return new C.aOz(x,s,u)}}
C.aOz.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=A.a4(A.cp(B.bu,x,B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxI(d),x,x,x,x,x,x,!1,B.aD),1),u=y.p,t=A.a([A.bO(A.x(x,x,B.r,x,x,new A.I(N.ua,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aA,A.O(A.a([A.a4(A.h(this.c,x,x,x,x,B.bi,x,x),1),A.pU(B.ek,new C.cxJ(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a_],u)
B.e.n(t,this.d)
return A.hh(!1,B.aM,!0,x,A.z(A.a([v,A.x(x,A.z(t,B.E,B.h,B.J),B.r,x,x,M.Kj,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.jY,B.l),B.r,x,0,x,x,x,x,x,B.fB)}}
var z=a.updateTypes(["F<~>()","~()","L(N,m3<FQ>)","~(c)","c(c)"])
C.cKu.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:126}
C.cvV.prototype={
$0(){var x=this.a
return x.f=x.a3U(0,this.b)},
$S:0}
C.cvW.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a3U(0,this.b),this.c)},
$S:0}
C.cw2.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bXI
x=y.p
w=A.a([A.O(A.a([A.pU(B.lB,new C.cw1(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.cgk,B.bO],x))
else w.push(B.a_)
x=this.a
if(!v)B.e.n(w,x.bcs(t))
else B.e.n(w,x.bbK(t))
return A.d6(w,u,B.CP,u,u,!1,!1)},
$S:z+2}
C.cw1.prototype={
$0(){return A.al(this.a,!1).hz()},
$S:0}
C.cw0.prototype={
$0(){var x=this.a
return x.p(new C.cw_(x))},
$S:0}
C.cw_.prototype={
$0(){var x=this.a
return x.d=x.KJ()},
$S:0}
C.cvZ.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ak("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cvX.prototype={
$0(){return this.a.R9(this.b,this.c)},
$S:0}
C.cvY.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ak("/cobrar",null,y.X)},
$S:0}
C.bLT.prototype={
$0(){},
$S:0}
C.bNX.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aO(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dB(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bNQ.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bNR.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bNS.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bO3.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.hc(new A.ac(Date.now(),0,!1)))x.a4A("expired")
else x.p(new C.bO2())},
$S:65}
C.bO2.prototype={
$0(){},
$S:0}
C.bO4.prototype={
$1(d){return this.aDV(d)},
aDV(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.akP(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a4A("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:374}
C.bNW.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ac(Date.now(),0,!1)},
$S:0}
C.bO1.prototype={
$1(d){var x=null
return new A.eU(D.c88,D.cbe,A.a([new A.am(A.cJ(B.mo,x,x,new C.bO_(d),x,x),x),new A.am(A.bC(D.c9f,new C.bO0(this.a,d),x),x)],y.p),x)},
$S:19}
C.bO_.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
C.bO0.prototype={
$0(){A.al(this.b,!1).bk()
var x=this.a.c
x.toString
A.ae(x).ak("/partner-payments/setup",null,y.X)},
$S:0}
C.bNO.prototype={
$1(d){var x=null
return new A.eU(D.caW,D.cat,A.a([new A.am(A.cJ(D.cbd,x,x,new C.bNM(d),x,x),x),new A.am(A.bC(D.c9a,new C.bNN(d),x),x)],y.p),x)},
$S:19}
C.bNM.prototype={
$0(){return A.al(this.a,!1).af(!1)},
$S:0}
C.bNN.prototype={
$0(){return A.al(this.a,!1).af(!0)},
$S:0}
C.bNP.prototype={
$0(){return this.a.r=null},
$S:0}
C.bNV.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.k_(0,B.j8)},
$S:0}
C.bO5.prototype={
$2(d,e){if(!d)this.a.akp()},
$S:241}
C.bNT.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a4(A.bi(x,!0,x,A.hh(!1,B.aM,!0,x,A.eY(!1,t,!0,A.aK(A.bO(w?D.aDz:A.h(d,x,x,x,x,B.oV,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bNU(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fO(u,D.K5),x,x,B.cW),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:252}
C.bNU.prototype={
$0(){return this.a.bcn(this.b)},
$S:0}
C.bNZ.prototype={
$2(d,e){var x=null
return A.x(x,A.O(A.a([A.a4(A.h(d,x,x,x,x,B.cc,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.Ki,x,x,x,B.cj,x,x,x)},
$S:1373}
C.bNY.prototype={
$0(){var x=this.a.c
x.toString
return A.al(x,!1).hz()},
$S:0}
C.cm6.prototype={
$0(){return this.a.d=null},
$S:0}
C.cm7.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cm4.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEb(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEb(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.akP(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.ajA)
t=r.h(s,"error")
if(t!=null)throw A.q(A.b_k(A.p(t)))
v=A.cNh(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:147}
C.cm5.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.ow
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.akP(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1374}
C.cm8.prototype={
$0(){return A.ae(this.a).af(null)},
$S:0}
C.cm9.prototype={
$0(){return A.ae(this.a).af(null)},
$S:0}
C.cxI.prototype={
$0(){return A.ae(this.a).af(null)},
$S:0}
C.cxJ.prototype={
$0(){return A.ae(this.a).af(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dJN","dBW",4)
var u
w(u=C.abS.prototype,"gakq","Ra",0)
v(u,"gb8w","a4A",3)
w(u,"gaYv","D7",0)
w(u,"gb7q","ao4",1)
w(u,"gaYu","akp",1)
w(C.afx.prototype,"gaYw","Iz",0)})();(function inheritance(){var x=a.inheritMany
x(A.M,[C.avd,C.a5X,C.axX,C.FQ])
x(A.bs,[C.cKu,C.bO3,C.bO4,C.bO1,C.bNO,C.bNT,C.cm4])
x(A.L,[C.aj4,C.GX,C.wl,C.wb,C.aOz])
x(A.G,[C.FR,C.D6,C.Fa])
x(A.a0,[C.aNS,C.abS,C.afx])
x(A.bL,[C.cvV,C.cvW,C.cw1,C.cw0,C.cw_,C.cvZ,C.cvX,C.cvY,C.bLT,C.bNX,C.bNQ,C.bNR,C.bNS,C.bO2,C.bNW,C.bO_,C.bO0,C.bNM,C.bNN,C.bNP,C.bNV,C.bNU,C.bNY,C.cm6,C.cm7,C.cm5,C.cm8,C.cm9,C.cxI,C.cxJ])
x(A.cK,[C.cw2,C.bO5,C.bNZ])})()
A.bq(b.typeUniverse,JSON.parse('{"aj4":{"L":[],"e":[],"f":[]},"GX":{"L":[],"e":[],"f":[]},"FR":{"G":[],"e":[],"f":[]},"aNS":{"a0":["FR"]},"wl":{"L":[],"e":[],"f":[]},"wb":{"L":[],"e":[],"f":[]},"D6":{"G":[],"e":[],"f":[]},"abS":{"a0":["D6"]},"Fa":{"G":[],"e":[],"f":[]},"afx":{"a0":["Fa"]},"aOz":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{D:x("cH"),E:x("r<axX>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dt"),K:x("M"),y:x("a5X"),m:x("ow"),k:x("+(c,bl)"),R:x("+at,result(ac?,c)"),u:x("+error,request(c?,avd?)"),A:x("FQ"),N:x("c"),v:x("aQ<FQ>"),q:x("dl"),x:x("C"),z:x("@"),g:x("t<@>?"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.K5=new A.bg(B.f9,0.5,B.aj,-1)
D.aeW=new A.dN(D.K5,B.ad,B.ad,B.ad)
D.Ki=new A.I(null,null,D.aeW,null,null,null,B.x)
D.ajA=new A.Dc("invalid_state")
D.ash=new A.a3(14,18,14,18)
D.ato=new A.a3(20,8,20,20)
D.aCd=new A.b0(61109,"MaterialIcons",null,!0)
D.aDz=new A.b8(D.aCd,22,B.z,null,null,null)
D.aF1=new A.dE(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.br,null,null,B.br,B.br,!0,null,null,null,null)
D.bXl=new A.kV(40,40,20,B.t,0,null)
D.bXd=new A.kV(null,32,12,B.t,1,null)
D.azH=new A.bJ(1,B.at,D.bXd,null)
D.bwq=x([D.bXl,B.af,D.azH],y.p)
D.bTH=new A.nS(B.bJ,B.h,B.l,B.v,null,B.cg,null,0,D.bwq,null)
D.bXf=new A.kV(null,120,22,B.t,1,null)
D.bXk=new A.kV(null,56,22,B.t,2,null)
D.bXm=new A.kV(null,52,26,B.t,2,null)
D.aId=x([D.bTH,B.bO,D.bXf,B.R,D.bXk,B.a_,D.bXm],y.p)
D.bxg=x(["1","2","3"],y.s)
D.bw_=x(["4","5","6"],y.s)
D.btN=x(["7","8","9"],y.s)
D.b6w=x(["00","0","del"],y.s)
D.bBU=x([D.bxg,D.bw_,D.btN,D.b6w],A.y("r<t<c>>"))
D.a1Q=new C.a5X("error",null,"",0,null)
D.bQK=new A.X("Cancelado",!1)
D.bQR=new A.X("Expirou",!1)
D.bS6=new A.X("\xc0 espera\u2026",!1)
D.bSA=new A.bW(I.kE,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bT3=new A.bW(B.hy,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTg=new A.bW(B.kD,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTi=new A.bW(B.E0,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.byV=x([],y.E)
D.GZ=new C.FQ("error",null,null,null,D.byV,"entry",null)
D.auq=new A.nx(B.iK,150,3,null,null)
D.ajd=new A.f6(B.K,null,null,D.auq,null)
D.bX1=new A.c5(null,214,D.ajd,null)
D.bXI=new A.vU(!1,3,!1,null)
D.c0A=new A.P(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4H=new A.P(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7G=new A.D("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c7S=new A.D("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c88=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c8e=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mk,null,null,null,null,null,null,null)
D.c9a=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.c9f=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.ca_=new A.D("Ver perfil",null,K.rV,null,null,null,null,null,null,null)
D.cat=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.caW=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.cbd=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.cbe=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.cbB=new A.D("Cobrar",null,B.kX,null,null,null,null,null,null,null)
D.cgk=new A.D("Quem \xe9",null,B.hP,null,null,null,null,null,null,null)
D.coF=new C.wl("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.coG=new C.wl("Verificado",!0,null)
D.acF=new C.wl("Por registar",!1,null)
D.coI=new C.wl("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUB","cU4",()=>{var w=A.W(16)
return A.dnW(A.bF(B.f9,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["QvfPh5+ihtGKHrdBhQh717ZCQqI="]=a.current})($__dart_deferred_initializers__);