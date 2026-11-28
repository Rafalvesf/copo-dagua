((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,H,C={
cEv(d,e){return C.dE9(d,e)},
dE9(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cEv=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.T().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aT("create_pay_request",A.S(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cEv)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.h(s,"result"),"ok")){r=A.q(J.h(s,"id"))
q=A.q(J.h(s,"code"))
p=A.dL(A.q(J.h(s,"expires_at")))
p=p==null?null:p.eg()
if(p==null)p=new A.ae(Date.now(),0,!1).ed(6e8)
v=new A.Yv(null,new C.auP(r,q,p))
x=1
break}r=r.b(s)?A.q(J.h(s,"result")):"error"
v=new A.Yv(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.Yv("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cEv,w)},
cDF(d){return C.dDr(d)},
dDr(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cDF=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.T().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aT("cancel_pay_request",A.S(["p_id",d],y.N,s),s),$async$cDF)
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
return A.m($async$cDF,w)},
dFZ(d,e){var x=$.T().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.LX(0,"pay-request-"+d,B.yf).NZ(new C.cGv(e),B.GI,new G.Fm(H.y2,"id",d),"public","pay_requests").PT(0)},
cJ6(d){return C.dHb(d)},
dHb(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cJ6=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.T().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aT("pay_request_info",A.S(["p_code",d],y.N,q),q),$async$cJ6)
case 7:s=f
if(!y.f.b(s)){v=D.a2e
x=1
break}r=A.q(J.h(s,"result"))
q=A.C(J.h(s,"id"))
p=J.h(s,"merchant")
p=A.q(p==null?"":p)
o=A.aK(J.h(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.h(s,"description"))
v=new C.a5G(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a2e
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cJ6,w)},
akE(d){return C.dEx(d)},
dEx(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$akE=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.T().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f6("event-pay",d),$async$akE)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.h6(r,o,n):A.S(["error","unknown_error"],o,n)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
if(o instanceof A.pg){q=o
p=q.b
o=y.N
n=y.z
o=y.f.b(p)?J.h6(p,o,n):A.S(["error","unknown_error"],o,n)
v=o
x=1
break}else{o=A.S(["error","network"],y.N,y.z)
v=o
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akE,w)},
auP:function auP(d,e,f){this.a=d
this.b=e
this.c=f},
cGv:function cGv(d){this.a=d},
a5G:function a5G(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cNi(d){return C.dHP(d)},
dHP(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cNi=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aT("scan_qr",A.S(["p_token",b0],y.N,o),o),$async$cNi)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.H_
x=1
break}o=A.q(J.h(s,"result"))
n=A.C(J.h(s,"scan_id"))
m=A.C(J.h(s,"name"))
l=A.C(J.h(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.h(s,"items"))
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
a1=A.dL(A.q(a1==null?"":a1))
a2=A.C(h.h(i,"booking_number"))
a3=A.aK(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.C(J.h(g,"status")):null
if(a5){a5=A.aK(J.h(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.dL(A.q(a7==null?"":a7))
a7=a7==null?null:a7.eg()
J.o(h.h(i,"can_charge"),!0)
J.bw(r,new C.axw(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.h(s,"mode"))
if(p==null){p=k.a(J.h(s,"items"))
p=p==null?null:J.dO(p)
p=p===!0?"entry":"profile"}k=A.C(J.h(s,"profile_id"))
v=new C.FN(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cU){v=D.H_
x=1
break}else{v=D.H_
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cNi,w)},
aUA(d,e){return C.dHO(d,e)},
dHO(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUA=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.T().b
p===$&&A.b()
x=10
return A.d(p.aT("scan_booking_arrival",A.S(["p_scan",d,"p_booking",e.c],r,q),q),$async$aUA)
case 10:o=g
x=8
break
case 9:p=$.T().b
p===$&&A.b()
x=11
return A.d(p.aT("scan_check_in",A.S(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aUA)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.Yt(null,"error")
x=1
break}r=A.q(J.h(s,"result"))
q=J.h(s,"arrived_at")
if(q==null)q=J.h(s,"checked_in_at")
q=A.dL(A.q(q==null?"":q))
q=q==null?null:q.eg()
v=new A.Yt(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.Yt(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUA,w)},
axw:function axw(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
FN:function FN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cB6(d){return B.f.aW(B.i.k(A.hK(d)),2,"0")+":"+B.f.aW(B.i.k(A.ht(d)),2,"0")},
d3y(d){return new C.FO(d,null)},
dj9(){return new C.D6(null)},
dpM(d){return new C.F8(d,null)},
dwN(d){var x
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
default:x=A.aUo(d)
break}return x},
dwP(d){var x
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
dwO(d){var x
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
aRb:function aRb(d,e){this.c=d
this.a=e},
FO:function FO(d,e){this.c=d
this.a=e},
aNB:function aNB(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
crV:function crV(d,e){this.a=d
this.b=e},
crW:function crW(d,e,f){this.a=d
this.b=e
this.c=f},
cs3:function cs3(d){this.a=d},
cs2:function cs2(d){this.a=d},
cs1:function cs1(d){this.a=d},
cs0:function cs0(d){this.a=d},
crZ:function crZ(d,e){this.a=d
this.b=e},
cs_:function cs_(d,e){this.a=d
this.b=e},
crX:function crX(d,e,f){this.a=d
this.b=e
this.c=f},
crY:function crY(d){this.a=d},
ai8:function ai8(d,e,f){this.c=d
this.d=e
this.a=f},
wb:function wb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bKk:function bKk(){},
D6:function D6(d){this.a=d},
abB:function abB(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bM0:function bM0(d,e){this.a=d
this.b=e},
bLU:function bLU(d){this.a=d},
bLV:function bLV(d){this.a=d},
bLW:function bLW(d,e){this.a=d
this.b=e},
bM7:function bM7(d,e){this.a=d
this.b=e},
bM6:function bM6(){},
bM8:function bM8(d,e){this.a=d
this.b=e},
bM_:function bM_(d,e){this.a=d
this.b=e},
bM5:function bM5(d){this.a=d},
bM3:function bM3(d){this.a=d},
bM4:function bM4(d,e){this.a=d
this.b=e},
bLS:function bLS(){},
bLQ:function bLQ(d){this.a=d},
bLR:function bLR(d){this.a=d},
bLT:function bLT(d){this.a=d},
bLZ:function bLZ(d){this.a=d},
bM9:function bM9(d){this.a=d},
bLX:function bLX(d){this.a=d},
bLY:function bLY(d,e){this.a=d
this.b=e},
bM2:function bM2(){},
bM1:function bM1(d){this.a=d},
F8:function F8(d,e){this.c=d
this.a=e},
afl:function afl(){this.c=this.a=this.d=null},
cj4:function cj4(d){this.a=d},
cj5:function cj5(d,e){this.a=d
this.b=e},
cj2:function cj2(d){this.a=d},
cj3:function cj3(d){this.a=d},
cj6:function cj6(d){this.a=d},
cj7:function cj7(d){this.a=d},
aOh:function aOh(d,e,f){this.c=d
this.d=e
this.a=f},
ctI:function ctI(d){this.a=d},
ctJ:function ctJ(d){this.a=d}},D,I,K,L,M,N,O
J=c[1]
A=c[0]
B=c[2]
E=c[86]
F=c[190]
G=c[117]
H=c[233]
C=a.updateHolder(c[14],C)
D=c[273]
I=c[277]
K=c[236]
L=c[276]
M=c[56]
N=c[275]
O=c[274]
C.auP.prototype={}
C.a5G.prototype={}
C.axw.prototype={}
C.FN.prototype={
gaq(d){return this.c}}
C.aRb.prototype={
u(d){var x=null
return A.D(x,this.c,B.r,x,x,new A.O(B.t,x,x,A.a0(22),x,x,B.y),x,x,x,B.bg,x,x,x)}}
C.FO.prototype={
P(){return new C.aNB(A.A(y.N,y.R))}}
C.aNB.prototype={
KP(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KP=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cNi(u.a.c),$async$KP)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ai(t).Gs("/u/"+A.q(s),null,y.X)
v=new A.aM($.aT,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$KP,w)},
a45(d,e){var x=e.c
return x==null?"e"+e.b:x},
Rl(d,e){return this.aUE(d,e)},
aUE(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Rl=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.q(new C.crV(u,e))
t=d.b
t.toString
x=3
return A.d(C.aUA(t,e),$async$Rl)
case 3:s=g
if(u.c==null){x=1
break}u.q(new C.crW(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$Rl,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KP()
return A.cM(null,B.bx,A.bC(!0,A.cRC(new C.cs3(x),w,y.A),null,B.a_,!0),!0,null)},
bd9(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bTj
break
case"own_code":x=D.bTu
break
case"not_found":x=D.bSR
break
default:x=D.bTw
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
q=A.a([B.rZ,A.b2(r,o?B.S:B.dJ,p,p,96),B.a3,A.i(v,p,p,p,p,B.h8,B.a5,p,p),B.X,A.i(u,p,p,p,p,D.aao,B.a5,p,p)],x)
if(o)B.e.n(q,A.a([B.cy,A.bD(B.z7,new C.cs1(this),p)],x))
return q},
bcv(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.bN(new A.eU(new C.crZ(r,d),s),s,s),B.P,A.i(r,s,s,s,s,B.h8,B.a5,s,s),B.at,D.ccF],x)
if(d.r!=null)B.e.n(w,A.a([B.aa,A.bN(A.aJ(A.ia(D.cem,new C.cs_(this,d),A.hq(s,s,B.t,s,s,s,s,s,s,B.A,s,s,B.bL,s,B.af,B.cg,s,s,s,s)),36,s),s,s)],x))
w.push(B.cy)
v=d.e
u=v.length
if(u===0)w.push(D.cet)
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,A.a([this.b6s(0,d,v[t]),B.P],x))
return w},
b6s(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a45(0,f),i=l.e.h(0,j),h=i==null,g=h?k:i.a
if(g==null)g=f.z
x=f.a==="booking"
w=h&&f.z!=null
v=!x
u=v&&f.w&&f.x!=="paid"
t=A.a([],y.s)
s=f.e
if(s!=null)t.push(B.f.aW(B.i.k(A.aN(s)),2,"0")+"/"+B.f.aW(B.i.k(A.ay(s)),2,"0")+"/"+A.aE(s))
if(x&&f.f!=null)t.push("Marca\xe7\xe3o "+A.q(f.f))
if(x&&f.r!=null)t.push(A.q(f.r)+" pessoas")
if(v&&f.w){if(f.x==="paid"){v=f.y
v=v===1?"Bilhete pago \xb7 1 pessoa":"Bilhete pago \xb7 "+v+" pessoas"}else v="Sem bilhete pago"
t.push(v)}r=B.e.a3(t," \xb7 ")
switch(h?k:i.b){case"ok":v=x?"Chegada":"Entrada"
t=i.a
v=new A.a3(v+" registada \xe0s "+C.cB6(t==null?new A.ae(Date.now(),0,!1):t),$.ap)
break
case"already":v=x?"chegou":"entrou"
t=g==null?"\u2014":C.cB6(g)
t=new A.a3("J\xe1 "+v+" \xe0s "+t,D.M1)
v=t
break
case"expired":v=D.bSj
break
case"not_paid":v=D.bSk
break
case"refunded":v=D.bSo
break
case null:case void 0:if(w){v=x?"chegou":"entrou"
t=f.z
t.toString
t=new A.a3("J\xe1 "+v+" \xe0s "+C.cB6(t),D.M1)
v=t}else v=u?D.bS6:D.bRm
break
default:v=D.bRu
break}q=v.a
p=k
o=v.b
p=o
n=!1
if(!w)if(!u){h=h||i.b==="error"
n=h}h=y.p
v=A.a([A.i(x?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",k,k,k,k,B.bt,k,k,k),B.at,A.i(f.d,k,k,k,k,B.j4,k,k,k)],h)
if(r.length!==0)v.push(A.i(r,k,k,k,k,B.W,k,k,k))
if(q!=null)B.e.n(v,A.a([B.X,A.i(q,k,k,k,k,A.aG(k,k,p,k,k,k,k,k,k,k,k,14,k,k,B.J,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],h))
v.push(B.P)
t=A.a([],h)
if(n){s=l.f
m=s==null?new C.crX(l,e,f):k
if(s===j)s=B.yG
else s=A.i(x?"Registar chegada":"Registar entrada",k,k,k,k,B.k_,k,k,k)
t.push(A.a6(A.aJ(A.bD(s,m,k),44,k),1))}if(x){h=A.a([],h)
if(n)h.push(B.ar)
h.push(A.a6(A.aJ(A.ia(D.ce1,new C.crY(l),A.hq(k,k,B.t,k,k,k,k,k,k,B.A,k,k,k,k,B.af,B.cg,k,k,k,k)),44,k),1))
B.e.n(t,h)}v.push(A.Q(t,B.w,B.j,B.m,0,k,k))
return new C.aRb(A.B(v,B.G,B.j,B.m,0,B.v),k)}}
C.ai8.prototype={
u(d){var x=null,w=this.d,v=w?B.dU:B.it,u=A.a0(999)
return A.D(x,A.i(this.c,x,x,x,x,A.aG(x,x,w?B.e8:B.e7,x,x,x,x,x,x,x,x,12,x,x,B.J,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.O(v,x,x,u,x,x,B.y),x,x,x,B.dM,x,x,x)}}
C.wb.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mb:A.i(x.c,w,w,w,w,B.fA,w,w,w)
if(x.e)v=A.ia(u,x.d,A.hq(w,w,B.t,w,w,w,w,w,w,B.A,w,w,w,w,B.af,B.cg,w,w,w,w))
else{v=v?new C.bKk():x.d
v=A.bD(u,v,A.cu(B.A,B.A.cd(0.35),B.t,B.t,w,w,B.af,w,w,w))}return A.aJ(v,52,1/0)}}
C.D6.prototype={
P(){return new C.abB(new A.aI(B.ao,$.ac()))}}
C.abB.prototype={
m(){this.Uw()
var x=this.e
x.Z$=$.ac()
x.X$=0
this.a7()},
Uw(){var x,w=this,v=w.y
if(v!=null){x=$.T().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yb(v)}w.y=null
v=w.z
if(v!=null)v.aL(0)
v=w.Q
if(v!=null)v.aL(0)},
bd5(d){this.q(new C.bM0(this,d))},
Rm(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Rm=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.q(new C.bLU(u))
t=B.f.D(u.e.a.a)
s=u.d
x=3
return A.d(C.cEv(s,t.length===0?null:t),$async$Rm)
case 3:r=e
if(u.c==null){x=1
break}u.q(new C.bLV(u))
q=r.b
if(q==null){s=r.a
v=u.bia(s==null?"error":s)
x=1
break}u.q(new C.bLW(u,q))
u.blW(q)
case 1:return A.l(v,w)}})
return A.m($async$Rm,w)},
blW(d){var x=this
x.Uw()
x.y=C.dFZ(d.a,x.gb9o())
x.z=A.w3(B.ho,new C.bM7(x,d))
x.Q=A.w3(B.uJ,new C.bM8(x,d))},
a4K(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.q(new C.bM_(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aL(0)
x=w.Q
if(x!=null)x.aL(0)}},
bia(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fM(!0,new C.bM5(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a4(A.cA(w,w,w,w,w,B.z,w,A.i(x,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Dg(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dg=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fM(!0,new C.bLS(),t,y.x),$async$Dg)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cDF(s.a),$async$Dg)
case 6:if(u.c==null){x=1
break}case 4:u.Uw()
u.q(new C.bLT(u))
case 1:return A.l(v,w)}})
return A.m($async$Dg,w)},
aoa(){this.Uw()
this.q(new C.bLZ(this))},
akr(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dg()
else w.aoa()
else{x=w.c
x.toString
A.aq(x,!1).ix()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pR(B.lB,x.gaYN(),"Voltar"),s=A.i(u?"Cobrar":"QR para pagar",w,w,w,w,B.h8,w,w,w)
return A.bmV(u,A.cM(w,B.bx,A.bC(!0,new A.R(D.atW,A.B(A.a([new A.d4(B.bk,w,w,t,w),B.P,s,B.bC,A.a6(u?x.b6z():x.bdv(v),1)],y.p),B.I,B.j,B.m,0,B.v),w),w,B.a_,!0),!0,w),new C.bM9(x),y.K)},
b6z(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bLX(o),j=A.a0(22)
m=A.bm(n,n,n,A.i(E.cEO(m),n,n,n,n,B.z_,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a8,n)
x=y.p
j=A.D(n,A.B(A.a([D.cgB,B.aF,m,B.aF,A.i(l?"Quem paga escolhe como paga quando ler o QR.":"M\xednimo 0,50 \u20ac",n,n,n,n,B.W,B.a5,n,n)],x),B.w,B.j,B.m,0,B.v),B.r,n,n,new A.O(B.t,n,n,j,n,n,B.y),n,n,n,B.cX,n,n,n)
m=A.a0(26)
m=A.a([j,B.aa,A.D(n,A.Q(A.a([D.cdq,B.ar,A.a6(A.cN(n,B.a9,!1,n,!0,B.z,n,A.cQ(),o.e,n,n,n,n,n,2,D.aFl,B.a2,!0,n,!0,n,!1,n,B.aJ,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.aw,n,n,n,n,n,n,n,n,n,n,n,B.h7,!0,B.au,n,B.hK,n,n,n,n),1)],x),B.w,B.j,B.m,0,n,n),B.r,n,n,new A.O(B.t,n,n,m,n,n,B.y),n,52,n,B.jt,n,n,n)],x)
for(j=y.N,w=0;w<4;++w){v=D.bCh[w]
u=A.a([],x)
for(t=A.ew(v,0,j),s=J.ar(t.a),r=t.b,t=new A.bX(s,r,A.u(t).i("bX<1>"));t.t();){q=t.c
q=q>=0?new A.a3(r+q,s.gE(s)):A.aj(A.c1())
p=A.a([],x)
if(q.a>0)p.push(B.ar)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([B.aa,A.Q(u,B.w,B.j,B.m,0,n,n)],x))}m=A.a6(A.cZ(m,n,B.a_,n,n,!1,B.a1,!1),1)
j=o.f
return A.B(A.a([m,B.P,new C.wb("Mostrar o QR para pagar",l?o.gaks():n,!1,j,n)],x),B.I,B.j,B.m,0,B.v)},
bdv(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cV(new A.ae(Date.now(),0,!1)).a
x=h<0?0:B.i.aS(h,1e6)
h=B.i.aS(x,60)
w=B.f.aW(B.i.k(B.i.ao(x,60)),2,"0")
v=B.f.D(j.e.a.a)
switch(j.w){case"paid":u=j.x
u=new A.a3("Pago \xe0s "+C.cB6(u==null?new A.ae(Date.now(),0,!1):u),!0)
break
case"expired":u=D.bRa
break
case"cancelled":u=D.bR2
break
default:u=D.bSs
break}t=u.a
s=i
r=u.b
s=r
q=t
u=new C.bM2()
p=A.a0(22)
o=y.p
n=A.a([A.i(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.j4,B.a5,i,i),B.P],o)
if(g)n.push(D.bXv)
else{m=A.a0(16)
l=A.bV(B.n2,1)
k=f?1:0.15
n.push(A.D(i,A.fc(A.d2T(B.t,A.l1("/pagar/"+d.b),B.a6H,B.a6I,B.a_,"QR para pagar "+E.cEO(j.d),186),k),B.r,i,i,new A.O(B.t,i,l,m,i,i,B.y),i,i,i,B.cT,i,i,i))}n.push(B.P)
n.push(A.i(E.cEO(j.d),i,i,i,i,B.h8,i,i,i))
n.push(B.be)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.i(m,i,i,i,i,B.W,B.a5,i,i))
if(f)B.e.n(n,A.a([B.aa,D.coZ],o))
p=A.a([A.D(i,A.B(n,B.w,B.j,B.m,0,B.v),B.r,i,i,new A.O(B.t,i,i,p,i,i,B.y),i,i,i,B.cX,i,i,i),B.aB,A.bm(i,i,i,u.$2("Estado",new C.ai8(q,s,i)),!1,i,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a8,i)],o)
if(f)p.push(u.$2("Expira em",A.i(""+h+":"+w,i,i,i,i,B.bT,i,i,i)))
p.push(B.fi)
h=A.a([A.a6(A.cZ(p,i,B.a_,i,i,!1,B.a1,!1),1),B.P],o)
if(f)h.push(new C.wb("Cancelar cobran\xe7a",j.gaYO(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wb("Nova cobran\xe7a",j.gb8g(),!1,!1,i),B.aa,new C.wb("Fechar",new C.bM1(j),!0,!1,i)],o))
else h.push(new C.wb("Mostrar outro QR",j.gaks(),!1,j.f,i))
return A.B(h,B.I,B.j,B.m,0,B.v)}}
C.F8.prototype={
P(){return new C.afl()}}
C.afl.prototype={
al(){this.aH()
this.IH()},
IH(){var x=0,w=A.n(y.H),v=this,u
var $async$IH=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.q(new C.cj4(v))
x=2
return A.d(C.cJ6(v.a.c),$async$IH)
case 2:u=e
if(v.c!=null)v.q(new C.cj5(v,u))
return A.l(null,w)}})
return A.m($async$IH,w)},
aSb(d){var x=null,w=d.e,v=w==null?x:B.f.D(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.op("",d.c,"pay_request",d.d/100,x,x,new C.cj2(this),!1,new C.cj3(d),B.W0,x,w,C.dEA(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new M.U_(this.aSb(t),u)
x=s?"Pagar":C.dwP(t.a)
if(s)s=D.aIv
else{s=t.a
w=y.p
v=A.a([A.bN(A.a22(s==="paid"?B.ju:B.ql,3,u,120),u,u),B.P,A.i(C.dwO(s),u,u,u,u,B.h9,B.a5,u,u),B.bf],w)
if(s==="error")B.e.n(v,A.a([new C.wb("Tentar outra vez",this.gaYP(),!1,!1,u),B.aa,new C.wb("Fechar",new C.cj6(d),!0,!1,u)],w))
else v.push(new C.wb("OK",new C.cj7(d),!1,!1,u))
s=v}return new C.aOh(x,s,u)}}
C.aOh.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=A.a6(A.dP(B.bZ,x,B.a2,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.ctI(d),x,x,x,x,x,x,!1,B.bd),1),u=y.p,t=A.a([A.bN(A.D(x,x,B.r,x,x,new A.O(O.u5,x,x,A.a0(3),x,x,B.y),x,5,x,x,x,x,40),x,x),B.aB,A.Q(A.a([A.a6(A.i(this.c,x,x,x,x,B.bu,x,x,x),1),A.pR(B.eO,new C.ctJ(d),"Fechar")],u),B.w,B.j,B.m,0,x,x),B.a3],u)
B.e.n(t,this.d)
return A.fn(!1,B.aE,!0,x,A.B(A.a([v,A.D(x,A.B(t,B.I,B.j,B.K,0,B.v),B.r,x,x,N.Ku,x,x,x,new A.a2(20,10,20,20+w.r.d),x,x,1/0)],u),B.w,B.iL,B.m,0,B.v),B.r,x,0,x,x,x,x,x,B.eu)}}
var z=a.updateTypes(["F<~>()","~()","L(N,nk<FN>)","~(c)","c(c)"])
C.cGv.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:149}
C.crV.prototype={
$0(){var x=this.a
return x.f=x.a45(0,this.b)},
$S:0}
C.crW.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a45(0,this.b),this.c)},
$S:0}
C.cs3.prototype={
$2(d,e){var x,w,v=null,u=e.b
if(u==null)return D.bYb
x=y.p
x=A.a([A.Q(A.a([A.pR(B.lB,new C.cs2(d),"Voltar")],x),B.w,B.j,B.m,0,v,v),B.a3],x)
w=this.a
if(u.a!=="ok")B.e.n(x,w.bd9(u))
else B.e.n(x,w.bcv(u))
return A.cZ(x,v,B.CV,v,v,!1,B.a1,!1)},
$S:z+2}
C.cs2.prototype={
$0(){return A.aq(this.a,!1).ix()},
$S:0}
C.cs1.prototype={
$0(){var x=this.a
return x.q(new C.cs0(x))},
$S:0}
C.cs0.prototype={
$0(){var x=this.a
return x.d=x.KP()},
$S:0}
C.crZ.prototype={
$1(d){var x=null,w=B.f.D(this.a),v=A.cZr(B.A,A.i(w.length===0?"?":w[0].toUpperCase(),x,x,x,x,D.c6N,x,x,x),44),u=this.b.d
return u!=null&&u.length!==0?new A.a4P(u,88,v,x):v},
$S:420}
C.cs_.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).ar("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.crX.prototype={
$0(){return this.a.Rl(this.b,this.c)},
$S:0}
C.crY.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).ar("/cobrar",null,y.X)},
$S:0}
C.bKk.prototype={
$0(){},
$S:0}
C.bM0.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.i.aS(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.e0(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bLU.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bLV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bLW.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bM7.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.hk(new A.ae(Date.now(),0,!1)))x.a4K("expired")
else x.q(new C.bM6())},
$S:72}
C.bM6.prototype={
$0(){},
$S:0}
C.bM8.prototype={
$1(d){return this.aEg(d)},
aEg(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.akE(A.S(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.h(t,"state"),"paid"))s.a4K("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:454}
C.bM_.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ae(Date.now(),0,!1)},
$S:0}
C.bM5.prototype={
$1(d){var x=null
return new A.eK(D.ca2,D.cgP,A.a([A.cs(B.mo,x,x,new C.bM3(d),x,x),A.bD(D.cgH,new C.bM4(this.a,d),x)],y.p),x)},
$S:16}
C.bM3.prototype={
$0(){return A.aq(this.a,!1).bJ()},
$S:0}
C.bM4.prototype={
$0(){A.aq(this.b,!1).bJ()
var x=this.a.c
x.toString
A.ai(x).ar("/partner-payments/setup",null,y.X)},
$S:0}
C.bLS.prototype={
$1(d){var x=null
return new A.eK(D.cgf,D.cf1,A.a([A.cs(D.cev,x,x,new C.bLQ(d),x,x),A.bD(D.cc8,new C.bLR(d),x)],y.p),x)},
$S:16}
C.bLQ.prototype={
$0(){return A.aq(this.a,!1).aj(!1)},
$S:0}
C.bLR.prototype={
$0(){return A.aq(this.a,!1).aj(!0)},
$S:0}
C.bLT.prototype={
$0(){return this.a.r=null},
$S:0}
C.bLZ.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.j4(0,B.iY)},
$S:0}
C.bM9.prototype={
$2(d,e){if(!d)this.a.akr()},
$S:154}
C.bLX.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.a0(16),t=A.a0(16)
return A.a6(A.bm(x,!0,x,A.fn(!1,B.aE,!0,u,A.eF(!1,t,!0,A.aJ(A.bN(w?D.aDU:A.i(d,x,x,x,x,B.mj,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bLY(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,x,x,x,B.cx),!1,x,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a8,x),1)},
$S:272}
C.bLY.prototype={
$0(){return this.a.bd5(this.b)},
$S:0}
C.bM2.prototype={
$2(d,e){var x=null
return A.D(x,A.Q(A.a([A.a6(A.i(d,x,x,x,x,B.cq,x,x,x),1),e],y.p),B.w,B.j,B.m,0,x,x),B.r,x,F.il,L.Kt,x,x,x,x,x,x,x)},
$S:1374}
C.bM1.prototype={
$0(){var x=this.a.c
x.toString
return A.aq(x,!1).ix()},
$S:0}
C.cj4.prototype={
$0(){return this.a.d=null},
$S:0}
C.cj5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cj2.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEv(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEv(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.akE(A.S(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.ajZ)
t=r.h(s,"error")
if(t!=null)throw A.p(A.aZP(A.q(t)))
v=A.cJ7(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:129}
C.cj3.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.ox
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.akE(A.S(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.a3(r.o(q.h(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1375}
C.cj6.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
C.cj7.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
C.ctI.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
C.ctJ.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dEA","dwN",4)
var u
w(u=C.abB.prototype,"gaks","Rm",0)
v(u,"gb9o","a4K",3)
w(u,"gaYO","Dg",0)
w(u,"gb8g","aoa",1)
w(u,"gaYN","akr",1)
w(C.afl.prototype,"gaYP","IH",0)})();(function inheritance(){var x=a.inheritMany
x(A.I,[C.auP,C.a5G,C.axw,C.FN])
x(A.bx,[C.cGv,C.crZ,C.bM7,C.bM8,C.bM5,C.bLS,C.bLX,C.cj2])
x(A.L,[C.aRb,C.ai8,C.wb,C.aOh])
x(A.K,[C.FO,C.D6,C.F8])
x(A.a_,[C.aNB,C.abB,C.afl])
x(A.bR,[C.crV,C.crW,C.cs2,C.cs1,C.cs0,C.cs_,C.crX,C.crY,C.bKk,C.bM0,C.bLU,C.bLV,C.bLW,C.bM6,C.bM_,C.bM3,C.bM4,C.bLQ,C.bLR,C.bLT,C.bLZ,C.bLY,C.bM1,C.cj4,C.cj5,C.cj3,C.cj6,C.cj7,C.ctI,C.ctJ])
x(A.cR,[C.cs3,C.bM9,C.bM2])})()
A.bq(b.typeUniverse,JSON.parse('{"aRb":{"L":[],"e":[],"f":[]},"FO":{"K":[],"e":[],"f":[]},"aNB":{"a_":["FO"]},"ai8":{"L":[],"e":[],"f":[]},"wb":{"L":[],"e":[],"f":[]},"D6":{"K":[],"e":[],"f":[]},"abB":{"a_":["D6"]},"F8":{"K":[],"e":[],"f":[]},"afl":{"a_":["F8"]},"aOh":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{E:x("r<axw>"),s:x("r<c>"),p:x("r<e>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dn"),K:x("I"),y:x("a5G"),m:x("tz"),k:x("+(c,by)"),R:x("+at,result(ae?,c)"),u:x("+error,request(c?,auP?)"),A:x("FN"),N:x("c"),v:x("aM<FN>"),q:x("ds"),x:x("y"),z:x("@"),g:x("t<@>?"),X:x("I?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ajZ=new A.Db("invalid_state")
D.M1=new A.W(1,0.6039215686274509,0.3568627450980392,0,B.C)
D.atW=new A.a2(20,8,20,20)
D.aCw=new A.aV(61109,"MaterialIcons",null,!0)
D.aDU=new A.ba(D.aCw,22,B.A,null,null,null)
D.aFl=new A.dT(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.ca,null,null,B.ca,B.ca,!0,null,null,null,null)
D.bXO=new A.iG(40,40,20,B.t,0,null)
D.bXH=new A.iG(null,32,12,B.t,1,null)
D.aAa=new A.bT(1,B.ax,D.bXH,null)
D.bwM=x([D.bXO,B.ag,D.aAa],y.p)
D.bTU=new A.me(B.bp,B.j,B.m,B.w,null,B.v,null,0,D.bwM,null)
D.bXJ=new A.iG(null,120,22,B.t,1,null)
D.bXN=new A.iG(null,56,22,B.t,2,null)
D.bXP=new A.iG(null,52,26,B.t,2,null)
D.aIv=x([D.bTU,B.bC,D.bXJ,B.P,D.bXN,B.a3,D.bXP],y.p)
D.bxE=x(["1","2","3"],y.s)
D.bwl=x(["4","5","6"],y.s)
D.bub=x(["7","8","9"],y.s)
D.b6N=x(["00","0","del"],y.s)
D.bCh=x([D.bxE,D.bwl,D.bub,D.b6N],A.w("r<t<c>>"))
D.a2e=new C.a5G("error",null,"",0,null)
D.bR2=new A.a3("Cancelado",!1)
D.bRa=new A.a3("Expirou",!1)
D.bRm=new A.a3(null,B.A)
D.bRu=new A.a3("N\xe3o foi poss\xedvel registar. Tenta outra vez.",B.dJ)
D.bS6=new A.a3("Sem bilhete pago: n\xe3o d\xe1 entrada.",B.dJ)
D.bSj=new A.a3("A leitura expirou. L\xea o QR outra vez.",B.dJ)
D.bSk=new A.a3("Bilhete por pagar.",B.dJ)
D.bSo=new A.a3("Bilhete reembolsado.",B.dJ)
D.bSs=new A.a3("\xc0 espera\u2026",!1)
D.bSR=new A.c_(I.Eb,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bTj=new A.c_(B.hv,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTu=new A.c_(B.ky,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTw=new A.c_(B.OY,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bzj=x([],y.E)
D.H_=new C.FN("error",null,null,null,D.bzj,"entry",null)
D.auX=new A.ns(B.ju,150,3,null,null)
D.ajA=new A.fN(B.L,null,null,D.auX,null)
D.bXv=new A.c3(null,214,D.ajA,null)
D.bYb=new A.vU(!1,3,!1,null)
D.aao=new A.M(!0,B.A,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6N=new A.M(!0,B.t,null,null,null,null,28,B.am,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ca2=new A.E("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cc8=new A.E("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.ccF=new A.E("QR verificado agora",null,B.W,B.a5,null,null,null,null,null,null,null)
D.cdq=new A.E("O qu\xea",null,B.W,null,null,null,null,null,null,null,null)
D.ce1=new A.E("Cobrar",null,B.k_,null,null,null,null,null,null,null,null)
D.cem=new A.E("Ver perfil",null,K.t4,null,null,null,null,null,null,null,null)
D.cet=new A.E("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,D.aao,B.a5,null,null,null,null,null,null,null)
D.cev=new A.E("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cf1=new A.E("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.cgf=new A.E("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.cgB=new A.E("VALOR",null,B.bt,null,null,null,null,null,null,null,null)
D.cgH=new A.E("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cgP=new A.E("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.coZ=new C.ai8("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)})()};
(a=>{a["zRehvf7dVKd05lw/SAcSJMCFh3k="]=a.current})($__dart_deferred_initializers__);