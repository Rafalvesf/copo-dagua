((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,H,C={
cEt(d,e){return C.dEa(d,e)},
dEa(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cEt=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.T().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aT("create_pay_request",A.S(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cEt)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.h(s,"result"),"ok")){r=A.q(J.h(s,"id"))
q=A.q(J.h(s,"code"))
p=A.dK(A.q(J.h(s,"expires_at")))
p=p==null?null:p.eh()
if(p==null)p=new A.ae(Date.now(),0,!1).ee(6e8)
v=new A.Yx(null,new C.auO(r,q,p))
x=1
break}r=r.b(s)?A.q(J.h(s,"result")):"error"
v=new A.Yx(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.Yx("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cEt,w)},
cDD(d){return C.dDs(d)},
dDs(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cDD=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.T().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aT("cancel_pay_request",A.S(["p_id",d],y.N,s),s),$async$cDD)
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
return A.m($async$cDD,w)},
dG_(d,e){var x=$.T().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.M3(0,"pay-request-"+d,B.yf).O7(new C.cGt(e),B.GI,new G.Fm(H.y2,"id",d),"public","pay_requests").Q2(0)},
cJ4(d){return C.dHb(d)},
dHb(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cJ4=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.T().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aT("pay_request_info",A.S(["p_code",d],y.N,q),q),$async$cJ4)
case 7:s=f
if(!y.f.b(s)){v=D.a2f
x=1
break}r=A.q(J.h(s,"result"))
q=A.C(J.h(s,"id"))
p=J.h(s,"merchant")
p=A.q(p==null?"":p)
o=A.aK(J.h(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.h(s,"description"))
v=new C.a5F(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a2f
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cJ4,w)},
akD(d){return C.dEy(d)},
dEy(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$akD=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.T().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f6("event-pay",d),$async$akD)
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
if(o instanceof A.pf){q=o
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
return A.m($async$akD,w)},
auO:function auO(d,e,f){this.a=d
this.b=e
this.c=f},
cGt:function cGt(d){this.a=d},
a5F:function a5F(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cNg(d){return C.dHP(d)},
dHP(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cNg=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aT("scan_qr",A.S(["p_token",b0],y.N,o),o),$async$cNg)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.H0
x=1
break}o=A.q(J.h(s,"result"))
n=A.C(J.h(s,"scan_id"))
m=A.C(J.h(s,"name"))
l=A.C(J.h(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.h(s,"items"))
j=J.ar(j==null?B.aj:j)
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
a1=A.dK(A.q(a1==null?"":a1))
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
a7=A.dK(A.q(a7==null?"":a7))
a7=a7==null?null:a7.eh()
J.o(h.h(i,"can_charge"),!0)
J.bw(r,new C.axv(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.h(s,"mode"))
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
if(A.a9(a9) instanceof A.cU){v=D.H0
x=1
break}else{v=D.H0
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cNg,w)},
aUz(d,e){return C.dHO(d,e)},
dHO(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUz=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.T().b
p===$&&A.b()
x=10
return A.d(p.aT("scan_booking_arrival",A.S(["p_scan",d,"p_booking",e.c],r,q),q),$async$aUz)
case 10:o=g
x=8
break
case 9:p=$.T().b
p===$&&A.b()
x=11
return A.d(p.aT("scan_check_in",A.S(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aUz)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.Yv(null,"error")
x=1
break}r=A.q(J.h(s,"result"))
q=J.h(s,"arrived_at")
if(q==null)q=J.h(s,"checked_in_at")
q=A.dK(A.q(q==null?"":q))
q=q==null?null:q.eh()
v=new A.Yv(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.Yv(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUz,w)},
axv:function axv(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cB4(d){return B.f.aW(B.i.k(A.hK(d)),2,"0")+":"+B.f.aW(B.i.k(A.ht(d)),2,"0")},
d3x(d){return new C.FO(d,null)},
dja(){return new C.D5(null)},
dpN(d){return new C.F8(d,null)},
dwO(d){var x
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
default:x=A.aUn(d)
break}return x},
dwQ(d){var x
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
dwP(d){var x
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
aRa:function aRa(d,e){this.c=d
this.a=e},
FO:function FO(d,e){this.c=d
this.a=e},
aNA:function aNA(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
crU:function crU(d,e){this.a=d
this.b=e},
crV:function crV(d,e,f){this.a=d
this.b=e
this.c=f},
cs1:function cs1(d){this.a=d},
cs0:function cs0(d){this.a=d},
cs_:function cs_(d){this.a=d},
crZ:function crZ(d){this.a=d},
crY:function crY(d,e){this.a=d
this.b=e},
crW:function crW(d,e,f){this.a=d
this.b=e
this.c=f},
crX:function crX(d){this.a=d},
ai7:function ai7(d,e,f){this.c=d
this.d=e
this.a=f},
w9:function w9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bKj:function bKj(){},
D5:function D5(d){this.a=d},
abA:function abA(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bM_:function bM_(d,e){this.a=d
this.b=e},
bLT:function bLT(d){this.a=d},
bLU:function bLU(d){this.a=d},
bLV:function bLV(d,e){this.a=d
this.b=e},
bM6:function bM6(d,e){this.a=d
this.b=e},
bM5:function bM5(){},
bM7:function bM7(d,e){this.a=d
this.b=e},
bLZ:function bLZ(d,e){this.a=d
this.b=e},
bM4:function bM4(d){this.a=d},
bM2:function bM2(d){this.a=d},
bM3:function bM3(d,e){this.a=d
this.b=e},
bLR:function bLR(){},
bLP:function bLP(d){this.a=d},
bLQ:function bLQ(d){this.a=d},
bLS:function bLS(d){this.a=d},
bLY:function bLY(d){this.a=d},
bM8:function bM8(d){this.a=d},
bLW:function bLW(d){this.a=d},
bLX:function bLX(d,e){this.a=d
this.b=e},
bM1:function bM1(){},
bM0:function bM0(d){this.a=d},
F8:function F8(d,e){this.c=d
this.a=e},
afk:function afk(){this.c=this.a=this.d=null},
cj3:function cj3(d){this.a=d},
cj4:function cj4(d,e){this.a=d
this.b=e},
cj1:function cj1(d){this.a=d},
cj2:function cj2(d){this.a=d},
cj5:function cj5(d){this.a=d},
cj6:function cj6(d){this.a=d},
aOg:function aOg(d,e,f){this.c=d
this.d=e
this.a=f},
ctG:function ctG(d){this.a=d},
ctH:function ctH(d){this.a=d}},D,I,K,L,M,N,O
J=c[1]
A=c[0]
B=c[2]
E=c[86]
F=c[189]
G=c[118]
H=c[231]
C=a.updateHolder(c[14],C)
D=c[270]
I=c[274]
K=c[233]
L=c[273]
M=c[56]
N=c[272]
O=c[271]
C.auO.prototype={}
C.a5F.prototype={}
C.axv.prototype={}
C.FN.prototype={
gap(d){return this.c}}
C.aRa.prototype={
u(d){var x=null
return A.D(x,this.c,B.r,x,x,new A.O(B.t,x,x,A.a0(22),x,x,B.y),x,x,x,B.bg,x,x,x)}}
C.FO.prototype={
P(){return new C.aNA(A.A(y.N,y.R))}}
C.aNA.prototype={
KW(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KW=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cNg(u.a.c),$async$KW)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ai(t).Gy("/u/"+A.q(s),null,y.X)
v=new A.aM($.aT,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$KW,w)},
a4d(d,e){var x=e.c
return x==null?"e"+e.b:x},
Rv(d,e){return this.aUL(d,e)},
aUL(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Rv=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.q(new C.crU(u,e))
t=d.b
t.toString
x=3
return A.d(C.aUz(t,e),$async$Rv)
case 3:s=g
if(u.c==null){x=1
break}u.q(new C.crV(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$Rv,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KW()
return A.cM(null,B.bx,A.bC(!0,A.cRA(new C.cs1(x),w,y.A),null,B.a_,!0),!0,null)},
bdg(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
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
q=A.a([B.rZ,A.b2(r,o?B.S:B.dK,p,p,96),B.a3,A.i(v,p,p,p,p,B.ha,B.a5,p,p),B.X,A.i(u,p,p,p,p,D.aan,B.a5,p,p)],x)
if(o)B.e.n(q,A.a([B.cy,A.bE(B.z3,new C.cs_(this),p)],x))
return q},
bcC(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=d.d
x=x!=null&&x.length!==0?new A.AI(x,1,s,B.zj):s
w=B.f.D(r)
v=y.p
x=A.a([A.bN(A.cZp(B.A,A.i(w.length===0?"?":w[0].toUpperCase(),s,s,s,s,D.c6F,s,s,s),x,44),s,s),B.P,A.i(r,s,s,s,s,B.ha,B.a5,s,s),B.at,D.ccx],v)
if(d.r!=null)B.e.n(x,A.a([B.aa,A.bN(A.aJ(A.ia(D.cee,new C.crY(this,d),A.hq(s,s,B.t,s,s,s,s,s,s,B.A,s,s,B.bL,s,B.af,B.cg,s,s,s,s)),36,s),s,s)],v))
x.push(B.cy)
w=d.e
u=w.length
if(u===0)x.push(D.cel)
else for(t=0;t<w.length;w.length===u||(0,A.H)(w),++t)B.e.n(x,A.a([this.b6z(0,d,w[t]),B.P],v))
return x},
b6z(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a4d(0,f),i=l.e.h(0,j),h=i==null,g=h?k:i.a
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
v=new A.a3(v+" registada \xe0s "+C.cB4(t==null?new A.ae(Date.now(),0,!1):t),$.ap)
break
case"already":v=x?"chegou":"entrou"
t=g==null?"\u2014":C.cB4(g)
t=new A.a3("J\xe1 "+v+" \xe0s "+t,D.M4)
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
t=new A.a3("J\xe1 "+v+" \xe0s "+C.cB4(t),D.M4)
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
v=A.a([A.i(x?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",k,k,k,k,B.bt,k,k,k),B.at,A.i(f.d,k,k,k,k,B.j6,k,k,k)],h)
if(r.length!==0)v.push(A.i(r,k,k,k,k,B.W,k,k,k))
if(q!=null)B.e.n(v,A.a([B.X,A.i(q,k,k,k,k,A.aG(k,k,p,k,k,k,k,k,k,k,k,14,k,k,B.J,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],h))
v.push(B.P)
t=A.a([],h)
if(n){s=l.f
m=s==null?new C.crW(l,e,f):k
if(s===j)s=B.yG
else s=A.i(x?"Registar chegada":"Registar entrada",k,k,k,k,B.k4,k,k,k)
t.push(A.a6(A.aJ(A.bE(s,m,k),44,k),1))}if(x){h=A.a([],h)
if(n)h.push(B.ar)
h.push(A.a6(A.aJ(A.ia(D.cdU,new C.crX(l),A.hq(k,k,B.t,k,k,k,k,k,k,B.A,k,k,k,k,B.af,B.cg,k,k,k,k)),44,k),1))
B.e.n(t,h)}v.push(A.R(t,B.w,B.j,B.m,0,k,k))
return new C.aRa(A.B(v,B.G,B.j,B.m,0,B.v),k)}}
C.ai7.prototype={
u(d){var x=null,w=this.d,v=w?B.dU:B.iv,u=A.a0(999)
return A.D(x,A.i(this.c,x,x,x,x,A.aG(x,x,w?B.e9:B.e8,x,x,x,x,x,x,x,x,12,x,x,B.J,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.O(v,x,x,u,x,x,B.y),x,x,x,B.dM,x,x,x)}}
C.w9.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.me:A.i(x.c,w,w,w,w,B.fB,w,w,w)
if(x.e)v=A.ia(u,x.d,A.hq(w,w,B.t,w,w,w,w,w,w,B.A,w,w,w,w,B.af,B.cg,w,w,w,w))
else{v=v?new C.bKj():x.d
v=A.bE(u,v,A.cu(B.A,B.A.cd(0.35),B.t,B.t,w,w,B.af,w,w,w))}return A.aJ(v,52,1/0)}}
C.D5.prototype={
P(){return new C.abA(new A.aI(B.ao,$.ac()))}}
C.abA.prototype={
m(){this.UG()
var x=this.e
x.Z$=$.ac()
x.X$=0
this.a7()},
UG(){var x,w=this,v=w.y
if(v!=null){x=$.T().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yf(v)}w.y=null
v=w.z
if(v!=null)v.aL(0)
v=w.Q
if(v!=null)v.aL(0)},
bdc(d){this.q(new C.bM_(this,d))},
Rw(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Rw=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.q(new C.bLT(u))
t=B.f.D(u.e.a.a)
s=u.d
x=3
return A.d(C.cEt(s,t.length===0?null:t),$async$Rw)
case 3:r=e
if(u.c==null){x=1
break}u.q(new C.bLU(u))
q=r.b
if(q==null){s=r.a
v=u.bii(s==null?"error":s)
x=1
break}u.q(new C.bLV(u,q))
u.bm3(q)
case 1:return A.l(v,w)}})
return A.m($async$Rw,w)},
bm3(d){var x=this
x.UG()
x.y=C.dG_(d.a,x.gb9v())
x.z=A.w1(B.hp,new C.bM6(x,d))
x.Q=A.w1(B.uI,new C.bM7(x,d))},
a4S(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.q(new C.bLZ(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aL(0)
x=w.Q
if(x!=null)x.aL(0)}},
bii(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fN(!0,new C.bM4(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a4(A.cA(w,w,w,w,w,B.z,w,A.i(x,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Dj(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dj=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fN(!0,new C.bLR(),t,y.x),$async$Dj)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cDD(s.a),$async$Dj)
case 6:if(u.c==null){x=1
break}case 4:u.UG()
u.q(new C.bLS(u))
case 1:return A.l(v,w)}})
return A.m($async$Dj,w)},
aoh(){this.UG()
this.q(new C.bLY(this))},
akx(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dj()
else w.aoh()
else{x=w.c
x.toString
A.aq(x,!1).iz()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pQ(B.lE,x.gaYU(),"Voltar"),s=A.i(u?"Cobrar":"QR para pagar",w,w,w,w,B.ha,w,w,w)
return A.bmU(u,A.cM(w,B.bx,A.bC(!0,new A.Q(D.atT,A.B(A.a([new A.d4(B.bk,w,w,t,w),B.P,s,B.bC,A.a6(u?x.b6G():x.bdC(v),1)],y.p),B.I,B.j,B.m,0,B.v),w),w,B.a_,!0),!0,w),new C.bM8(x),y.K)},
b6G(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bLW(o),j=A.a0(22)
m=A.bm(n,n,n,A.i(E.cEM(m),n,n,n,n,B.yW,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a8,n)
x=y.p
j=A.D(n,A.B(A.a([D.cgt,B.aF,m,B.aF,A.i(l?"Quem paga escolhe como paga quando ler o QR.":"M\xednimo 0,50 \u20ac",n,n,n,n,B.W,B.a5,n,n)],x),B.w,B.j,B.m,0,B.v),B.r,n,n,new A.O(B.t,n,n,j,n,n,B.y),n,n,n,B.cY,n,n,n)
m=A.a0(26)
m=A.a([j,B.aa,A.D(n,A.R(A.a([D.cdi,B.ar,A.a6(A.cN(n,B.a9,!1,n,!0,B.z,n,A.cQ(),o.e,n,n,n,n,n,2,D.aFi,B.a2,!0,n,!0,n,!1,n,B.aJ,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.aw,n,n,n,n,n,n,n,n,n,n,n,B.h9,!0,B.au,n,B.hL,n,n,n,n),1)],x),B.w,B.j,B.m,0,n,n),B.r,n,n,new A.O(B.t,n,n,m,n,n,B.y),n,52,n,B.jx,n,n,n)],x)
for(j=y.N,w=0;w<4;++w){v=D.bCc[w]
u=A.a([],x)
for(t=A.ew(v,0,j),s=J.ar(t.a),r=t.b,t=new A.bX(s,r,A.u(t).i("bX<1>"));t.t();){q=t.c
q=q>=0?new A.a3(r+q,s.gE(s)):A.aj(A.c1())
p=A.a([],x)
if(q.a>0)p.push(B.ar)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([B.aa,A.R(u,B.w,B.j,B.m,0,n,n)],x))}m=A.a6(A.cZ(m,n,B.a_,n,n,!1,B.a1,!1),1)
j=o.f
return A.B(A.a([m,B.P,new C.w9("Mostrar o QR para pagar",l?o.gaky():n,!1,j,n)],x),B.I,B.j,B.m,0,B.v)},
bdC(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cV(new A.ae(Date.now(),0,!1)).a
x=h<0?0:B.i.aS(h,1e6)
h=B.i.aS(x,60)
w=B.f.aW(B.i.k(B.i.ar(x,60)),2,"0")
v=B.f.D(j.e.a.a)
switch(j.w){case"paid":u=j.x
u=new A.a3("Pago \xe0s "+C.cB4(u==null?new A.ae(Date.now(),0,!1):u),!0)
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
u=new C.bM1()
p=A.a0(22)
o=y.p
n=A.a([A.i(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.j6,B.a5,i,i),B.P],o)
if(g)n.push(D.bXv)
else{m=A.a0(16)
l=A.bV(B.n5,1)
k=f?1:0.15
n.push(A.D(i,A.fc(A.d2S(B.t,A.l0("/pagar/"+d.b),B.a6I,B.a6J,B.a_,"QR para pagar "+E.cEM(j.d),186),k),B.r,i,i,new A.O(B.t,i,l,m,i,i,B.y),i,i,i,B.cT,i,i,i))}n.push(B.P)
n.push(A.i(E.cEM(j.d),i,i,i,i,B.ha,i,i,i))
n.push(B.be)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.i(m,i,i,i,i,B.W,B.a5,i,i))
if(f)B.e.n(n,A.a([B.aa,D.coR],o))
p=A.a([A.D(i,A.B(n,B.w,B.j,B.m,0,B.v),B.r,i,i,new A.O(B.t,i,i,p,i,i,B.y),i,i,i,B.cY,i,i,i),B.aB,A.bm(i,i,i,u.$2("Estado",new C.ai7(q,s,i)),!1,i,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a8,i)],o)
if(f)p.push(u.$2("Expira em",A.i(""+h+":"+w,i,i,i,i,B.bT,i,i,i)))
p.push(B.fi)
h=A.a([A.a6(A.cZ(p,i,B.a_,i,i,!1,B.a1,!1),1),B.P],o)
if(f)h.push(new C.w9("Cancelar cobran\xe7a",j.gaYV(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.w9("Nova cobran\xe7a",j.gb8n(),!1,!1,i),B.aa,new C.w9("Fechar",new C.bM0(j),!0,!1,i)],o))
else h.push(new C.w9("Mostrar outro QR",j.gaky(),!1,j.f,i))
return A.B(h,B.I,B.j,B.m,0,B.v)}}
C.F8.prototype={
P(){return new C.afk()}}
C.afk.prototype={
al(){this.aH()
this.IO()},
IO(){var x=0,w=A.n(y.H),v=this,u
var $async$IO=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.q(new C.cj3(v))
x=2
return A.d(C.cJ4(v.a.c),$async$IO)
case 2:u=e
if(v.c!=null)v.q(new C.cj4(v,u))
return A.l(null,w)}})
return A.m($async$IO,w)},
aSi(d){var x=null,w=d.e,v=w==null?x:B.f.D(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.op("",d.c,"pay_request",d.d/100,x,x,new C.cj1(this),!1,new C.cj2(d),B.W1,x,w,C.dEB(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new M.U2(this.aSi(t),u)
x=s?"Pagar":C.dwQ(t.a)
if(s)s=D.aIt
else{s=t.a
w=y.p
v=A.a([A.bN(A.a24(s==="paid"?B.jy:B.ql,3,u,120),u,u),B.P,A.i(C.dwP(s),u,u,u,u,B.hb,B.a5,u,u),B.bf],w)
if(s==="error")B.e.n(v,A.a([new C.w9("Tentar outra vez",this.gaYW(),!1,!1,u),B.aa,new C.w9("Fechar",new C.cj5(d),!0,!1,u)],w))
else v.push(new C.w9("OK",new C.cj6(d),!1,!1,u))
s=v}return new C.aOg(x,s,u)}}
C.aOg.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=A.a6(A.dP(B.bZ,x,B.a2,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.ctG(d),x,x,x,x,x,x,!1,B.bd),1),u=y.p,t=A.a([A.bN(A.D(x,x,B.r,x,x,new A.O(O.u4,x,x,A.a0(3),x,x,B.y),x,5,x,x,x,x,40),x,x),B.aB,A.R(A.a([A.a6(A.i(this.c,x,x,x,x,B.bu,x,x,x),1),A.pQ(B.eP,new C.ctH(d),"Fechar")],u),B.w,B.j,B.m,0,x,x),B.a3],u)
B.e.n(t,this.d)
return A.fn(!1,B.aE,!0,x,A.B(A.a([v,A.D(x,A.B(t,B.I,B.j,B.K,0,B.v),B.r,x,x,N.Kw,x,x,x,new A.a2(20,10,20,20+w.r.d),x,x,1/0)],u),B.w,B.jO,B.m,0,B.v),B.r,x,0,x,x,x,x,x,B.ew)}}
var z=a.updateTypes(["F<~>()","~()","L(N,nl<FN>)","~(c)","c(c)"])
C.cGt.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:137}
C.crU.prototype={
$0(){var x=this.a
return x.f=x.a4d(0,this.b)},
$S:0}
C.crV.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4d(0,this.b),this.c)},
$S:0}
C.cs1.prototype={
$2(d,e){var x,w,v=null,u=e.b
if(u==null)return D.bY3
x=y.p
x=A.a([A.R(A.a([A.pQ(B.lE,new C.cs0(d),"Voltar")],x),B.w,B.j,B.m,0,v,v),B.a3],x)
w=this.a
if(u.a!=="ok")B.e.n(x,w.bdg(u))
else B.e.n(x,w.bcC(u))
return A.cZ(x,v,B.CU,v,v,!1,B.a1,!1)},
$S:z+2}
C.cs0.prototype={
$0(){return A.aq(this.a,!1).iz()},
$S:0}
C.cs_.prototype={
$0(){var x=this.a
return x.q(new C.crZ(x))},
$S:0}
C.crZ.prototype={
$0(){var x=this.a
return x.d=x.KW()},
$S:0}
C.crY.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).aq("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.crW.prototype={
$0(){return this.a.Rv(this.b,this.c)},
$S:0}
C.crX.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).aq("/cobrar",null,y.X)},
$S:0}
C.bKj.prototype={
$0(){},
$S:0}
C.bM_.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.i.aS(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.e0(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bLT.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bLU.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bLV.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bM6.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.hm(new A.ae(Date.now(),0,!1)))x.a4S("expired")
else x.q(new C.bM5())},
$S:70}
C.bM5.prototype={
$0(){},
$S:0}
C.bM7.prototype={
$1(d){return this.aEn(d)},
aEn(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.akD(A.S(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.h(t,"state"),"paid"))s.a4S("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:385}
C.bLZ.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ae(Date.now(),0,!1)},
$S:0}
C.bM4.prototype={
$1(d){var x=null
return new A.eK(D.c9V,D.cgH,A.a([A.cs(B.mr,x,x,new C.bM2(d),x,x),A.bE(D.cgz,new C.bM3(this.a,d),x)],y.p),x)},
$S:16}
C.bM2.prototype={
$0(){return A.aq(this.a,!1).bJ()},
$S:0}
C.bM3.prototype={
$0(){A.aq(this.b,!1).bJ()
var x=this.a.c
x.toString
A.ai(x).aq("/partner-payments/setup",null,y.X)},
$S:0}
C.bLR.prototype={
$1(d){var x=null
return new A.eK(D.cg7,D.ceU,A.a([A.cs(D.cen,x,x,new C.bLP(d),x,x),A.bE(D.cc0,new C.bLQ(d),x)],y.p),x)},
$S:16}
C.bLP.prototype={
$0(){return A.aq(this.a,!1).aj(!1)},
$S:0}
C.bLQ.prototype={
$0(){return A.aq(this.a,!1).aj(!0)},
$S:0}
C.bLS.prototype={
$0(){return this.a.r=null},
$S:0}
C.bLY.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.j5(0,B.j_)},
$S:0}
C.bM8.prototype={
$2(d,e){if(!d)this.a.akx()},
$S:183}
C.bLW.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.a0(16),t=A.a0(16)
return A.a6(A.bm(x,!0,x,A.fn(!1,B.aE,!0,u,A.eF(!1,t,!0,A.aJ(A.bN(w?D.aDR:A.i(d,x,x,x,x,B.mm,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bLX(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,x,x,x,B.cx),!1,x,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a8,x),1)},
$S:213}
C.bLX.prototype={
$0(){return this.a.bdc(this.b)},
$S:0}
C.bM1.prototype={
$2(d,e){var x=null
return A.D(x,A.R(A.a([A.a6(A.i(d,x,x,x,x,B.cq,x,x,x),1),e],y.p),B.w,B.j,B.m,0,x,x),B.r,x,F.io,L.Kv,x,x,x,x,x,x,x)},
$S:1373}
C.bM0.prototype={
$0(){var x=this.a.c
x.toString
return A.aq(x,!1).iz()},
$S:0}
C.cj3.prototype={
$0(){return this.a.d=null},
$S:0}
C.cj4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cj1.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEC(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEC(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.akD(A.S(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.ajW)
t=r.h(s,"error")
if(t!=null)throw A.p(A.aZO(A.q(t)))
v=A.cJ5(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:131}
C.cj2.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.ox
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.akD(A.S(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.a3(r.o(q.h(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1374}
C.cj5.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
C.cj6.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
C.ctG.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
C.ctH.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dEB","dwO",4)
var u
w(u=C.abA.prototype,"gaky","Rw",0)
v(u,"gb9v","a4S",3)
w(u,"gaYV","Dj",0)
w(u,"gb8n","aoh",1)
w(u,"gaYU","akx",1)
w(C.afk.prototype,"gaYW","IO",0)})();(function inheritance(){var x=a.inheritMany
x(A.I,[C.auO,C.a5F,C.axv,C.FN])
x(A.bx,[C.cGt,C.bM6,C.bM7,C.bM4,C.bLR,C.bLW,C.cj1])
x(A.L,[C.aRa,C.ai7,C.w9,C.aOg])
x(A.K,[C.FO,C.D5,C.F8])
x(A.a_,[C.aNA,C.abA,C.afk])
x(A.bR,[C.crU,C.crV,C.cs0,C.cs_,C.crZ,C.crY,C.crW,C.crX,C.bKj,C.bM_,C.bLT,C.bLU,C.bLV,C.bM5,C.bLZ,C.bM2,C.bM3,C.bLP,C.bLQ,C.bLS,C.bLY,C.bLX,C.bM0,C.cj3,C.cj4,C.cj2,C.cj5,C.cj6,C.ctG,C.ctH])
x(A.cR,[C.cs1,C.bM8,C.bM1])})()
A.br(b.typeUniverse,JSON.parse('{"aRa":{"L":[],"e":[],"f":[]},"FO":{"K":[],"e":[],"f":[]},"aNA":{"a_":["FO"]},"ai7":{"L":[],"e":[],"f":[]},"w9":{"L":[],"e":[],"f":[]},"D5":{"K":[],"e":[],"f":[]},"abA":{"a_":["D5"]},"F8":{"K":[],"e":[],"f":[]},"afk":{"a_":["F8"]},"aOg":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{E:x("r<axv>"),s:x("r<c>"),p:x("r<e>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dn"),K:x("I"),y:x("a5F"),m:x("tz"),k:x("+(c,by)"),R:x("+at,result(ae?,c)"),u:x("+error,request(c?,auO?)"),A:x("FN"),N:x("c"),v:x("aM<FN>"),q:x("ds"),x:x("y"),z:x("@"),g:x("t<@>?"),X:x("I?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ajW=new A.Da("invalid_state")
D.M4=new A.W(1,0.6039215686274509,0.3568627450980392,0,B.C)
D.atT=new A.a2(20,8,20,20)
D.aCt=new A.aV(61109,"MaterialIcons",null,!0)
D.aDR=new A.ba(D.aCt,22,B.A,null,null,null)
D.aFi=new A.dT(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.ca,null,null,B.ca,B.ca,!0,null,null,null,null)
D.bXO=new A.iS(40,40,20,B.t,0,null)
D.bXH=new A.iS(null,32,12,B.t,1,null)
D.aA7=new A.bT(1,B.ax,D.bXH,null)
D.bwH=x([D.bXO,B.ag,D.aA7],y.p)
D.bTT=new A.me(B.bp,B.j,B.m,B.w,null,B.v,null,0,D.bwH,null)
D.bXJ=new A.iS(null,120,22,B.t,1,null)
D.bXN=new A.iS(null,56,22,B.t,2,null)
D.bXP=new A.iS(null,52,26,B.t,2,null)
D.aIt=x([D.bTT,B.bC,D.bXJ,B.P,D.bXN,B.a3,D.bXP],y.p)
D.bxz=x(["1","2","3"],y.s)
D.bwh=x(["4","5","6"],y.s)
D.bu8=x(["7","8","9"],y.s)
D.b6K=x(["00","0","del"],y.s)
D.bCc=x([D.bxz,D.bwh,D.bu8,D.b6K],A.w("r<t<c>>"))
D.a2f=new C.a5F("error",null,"",0,null)
D.bR2=new A.a3("Cancelado",!1)
D.bRa=new A.a3("Expirou",!1)
D.bRm=new A.a3(null,B.A)
D.bRu=new A.a3("N\xe3o foi poss\xedvel registar. Tenta outra vez.",B.dK)
D.bS6=new A.a3("Sem bilhete pago: n\xe3o d\xe1 entrada.",B.dK)
D.bSj=new A.a3("A leitura expirou. L\xea o QR outra vez.",B.dK)
D.bSk=new A.a3("Bilhete por pagar.",B.dK)
D.bSo=new A.a3("Bilhete reembolsado.",B.dK)
D.bSs=new A.a3("\xc0 espera\u2026",!1)
D.bSR=new A.c_(I.Ea,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bTj=new A.c_(B.hw,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTu=new A.c_(B.kB,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTw=new A.c_(B.OZ,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bze=x([],y.E)
D.H0=new C.FN("error",null,null,null,D.bze,"entry",null)
D.auU=new A.nt(B.jy,150,3,null,null)
D.ajy=new A.fF(B.L,null,null,D.auU,null)
D.bXv=new A.c3(null,214,D.ajy,null)
D.bY3=new A.G4(!1,3,null)
D.aan=new A.M(!0,B.A,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6F=new A.M(!0,B.t,null,null,null,null,28,B.am,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c9V=new A.E("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cc0=new A.E("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.ccx=new A.E("QR verificado agora",null,B.W,B.a5,null,null,null,null,null,null,null)
D.cdi=new A.E("O qu\xea",null,B.W,null,null,null,null,null,null,null,null)
D.cdU=new A.E("Cobrar",null,B.k4,null,null,null,null,null,null,null,null)
D.cee=new A.E("Ver perfil",null,K.t3,null,null,null,null,null,null,null,null)
D.cel=new A.E("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,D.aan,B.a5,null,null,null,null,null,null,null)
D.cen=new A.E("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.ceU=new A.E("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.cg7=new A.E("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.cgt=new A.E("VALOR",null,B.bt,null,null,null,null,null,null,null,null)
D.cgz=new A.E("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cgH=new A.E("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.coR=new C.ai7("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)})()};
(a=>{a["oJpWabhKPgMz7lkAAxFDN7S9svo="]=a.current})($__dart_deferred_initializers__);