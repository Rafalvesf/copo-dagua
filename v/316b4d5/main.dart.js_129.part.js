((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cIz(d,e){return C.dKe(d,e)},
dKe(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cIz=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cIz)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.p(J.i(s,"id"))
q=A.p(J.i(s,"code"))
p=A.d_(A.p(J.i(s,"expires_at")))
p=p==null?null:p.dH()
if(p==null)p=new A.aa(Date.now(),0,!1).ea(6e8)
v=new A.Ze(null,new C.aw6(r,q,p))
x=1
break}r=r.b(s)?A.p(J.i(s,"result")):"error"
v=new A.Ze(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.Ze("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cIz,w)},
cHJ(d){return C.dJy(d)},
dJy(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHJ=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aH("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cHJ)
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
return A.m($async$cHJ,w)},
dM7(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.M_(0,"pay-request-"+d,B.yp).NT(new C.cKG(e),B.GT,new G.Fx(H.ya,"id",d),"public","pay_requests").PJ(0)},
cNA(d){return C.dNk(d)},
dNk(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cNA=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cNA)
case 7:s=f
if(!y.f.b(s)){v=D.a24
x=1
break}r=A.p(J.i(s,"result"))
q=A.y(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.p(p==null?"":p)
o=A.aF(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.y(J.i(s,"description"))
v=new C.a6w(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a24
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cNA,w)},
alB(d){return C.dKC(d)},
dKC(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$alB=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f2("event-pay",d),$async$alB)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.h2(r,o,n):A.R(["error","unknown_error"],o,n)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
if(o instanceof A.pr){q=o
p=q.b
o=y.N
n=y.z
o=y.f.b(p)?J.h2(p,o,n):A.R(["error","unknown_error"],o,n)
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
return A.m($async$alB,w)},
aw6:function aw6(d,e,f){this.a=d
this.b=e
this.c=f},
cKG:function cKG(d){this.a=d},
a6w:function a6w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cSb(d){return C.dO0(d)},
dO0(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cSb=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aH("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cSb)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.Ha
x=1
break}o=A.p(J.i(s,"result"))
n=A.y(J.i(s,"scan_id"))
m=A.y(J.i(s,"name"))
l=A.y(J.i(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.i(s,"items"))
j=J.an(j==null?B.aj:j)
while(j.q()){q=j.gE(j)
if(p.b(q)){i=q
h=J.a6(i)
g=h.h(i,"ticket")
f=A.p(h.h(i,"kind"))
e=A.p(h.h(i,"wedding_id"))
d=A.y(h.h(i,"booking_id"))
a0=h.h(i,"event")
a0=A.p(a0==null?"Evento":a0)
a1=h.h(i,"date")
a1=A.d_(A.p(a1==null?"":a1))
a2=A.y(h.h(i,"booking_number"))
a3=A.aF(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.y(J.i(g,"status")):null
if(a5){a5=A.aF(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.d_(A.p(a7==null?"":a7))
a7=a7==null?null:a7.dH()
J.o(h.h(i,"can_charge"),!0)
J.bn(r,new C.ayX(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.y(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dM(p)
p=p===!0?"entry":"profile"}k=A.y(J.i(s,"profile_id"))
v=new C.G1(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cQ){v=D.Ha
x=1
break}else{v=D.Ha
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cSb,w)},
aW9(d,e){return C.dO_(d,e)},
dO_(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aW9=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aH("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aW9)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aH("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aW9)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.Zc(null,"error")
x=1
break}r=A.p(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d_(A.p(q==null?"":q))
q=q==null?null:q.dH()
v=new A.Zc(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.Zc(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aW9,w)},
ayX:function ayX(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
G1:function G1(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d_1(d){return B.f.aN(B.j.k(A.i0(d)),2,"0")+":"+B.f.aN(B.j.k(A.hN(d)),2,"0")},
d8X(d){return new C.G2(d,null)},
dp3(){return new C.Df(null)},
dvH(d){return new C.Fj(d,null)},
dCM(d){var x
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
default:x=A.aVT(d)
break}return x},
dCO(d){var x
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
dCN(d){var x
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
ajR:function ajR(d,e){this.c=d
this.a=e},
H9:function H9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
G2:function G2(d,e){this.c=d
this.a=e},
aOV:function aOV(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cvS:function cvS(d,e){this.a=d
this.b=e},
cvT:function cvT(d,e,f){this.a=d
this.b=e
this.c=f},
cw_:function cw_(d){this.a=d},
cvZ:function cvZ(d){this.a=d},
cvY:function cvY(d){this.a=d},
cvX:function cvX(d){this.a=d},
cvW:function cvW(d,e){this.a=d
this.b=e},
cvU:function cvU(d,e,f){this.a=d
this.b=e
this.c=f},
cvV:function cvV(d){this.a=d},
wq:function wq(d,e,f){this.c=d
this.d=e
this.a=f},
wf:function wf(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bMP:function bMP(){},
Df:function Df(d){this.a=d},
acs:function acs(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bOU:function bOU(d,e){this.a=d
this.b=e},
bON:function bON(d){this.a=d},
bOO:function bOO(d){this.a=d},
bOP:function bOP(d,e){this.a=d
this.b=e},
bP0:function bP0(d,e){this.a=d
this.b=e},
bP_:function bP_(){},
bP1:function bP1(d,e){this.a=d
this.b=e},
bOT:function bOT(d,e){this.a=d
this.b=e},
bOZ:function bOZ(d){this.a=d},
bOX:function bOX(d){this.a=d},
bOY:function bOY(d,e){this.a=d
this.b=e},
bOL:function bOL(){},
bOJ:function bOJ(d){this.a=d},
bOK:function bOK(d){this.a=d},
bOM:function bOM(d){this.a=d},
bOS:function bOS(d){this.a=d},
bP2:function bP2(d){this.a=d},
bOQ:function bOQ(d){this.a=d},
bOR:function bOR(d,e){this.a=d
this.b=e},
bOW:function bOW(){},
bOV:function bOV(d){this.a=d},
Fj:function Fj(d,e){this.c=d
this.a=e},
agf:function agf(){this.c=this.a=this.d=null},
clt:function clt(d){this.a=d},
clu:function clu(d,e){this.a=d
this.b=e},
clr:function clr(d){this.a=d},
cls:function cls(d){this.a=d},
clv:function clv(d){this.a=d},
clw:function clw(d){this.a=d},
aPC:function aPC(d,e,f){this.c=d
this.d=e
this.a=f},
cxB:function cxB(d){this.a=d},
cxC:function cxC(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[86]
G=c[125]
H=c[241]
C=a.updateHolder(c[14],C)
D=c[282]
I=c[233]
K=c[243]
F=c[283]
L=c[56]
M=c[285]
N=c[284]
C.aw6.prototype={}
C.a6w.prototype={}
C.ayX.prototype={}
C.G1.prototype={
gar(d){return this.c}}
C.ajR.prototype={
t(d){var x=null
return A.w(x,this.c,B.r,x,x,$.cUB(),x,x,x,B.cM,x,x,x)}}
C.H9.prototype={
t(d){var x=null,w=A.a([A.a5(A.h(this.c,x,x,x,x,B.ce,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bL,x,x))
v=this.e
if(v!=null)w.push(v)
return A.w(x,A.N(w,B.u,B.h,B.l,0,x),B.r,x,x,D.Kx,x,x,x,B.ei,x,x,x)}}
C.G2.prototype={
P(){return new C.aOV(A.F(y.N,y.R))}}
C.aOV.prototype={
KN(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KN=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cSb(u.a.c),$async$KN)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ae(t).Gk("/u/"+A.p(s),null,y.X)
v=new A.aR($.aV,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$KN,w)},
a44(d,e){var x=e.c
return x==null?"e"+e.b:x},
Ro(d,e){return this.aUW(d,e)},
aUW(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Ro=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cvS(u,e))
t=d.b
t.toString
x=3
return A.d(C.aW9(t,e),$async$Ro)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cvT(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$Ro,w)},
t(d){var x=this,w=x.d
if(w===$)w=x.d=x.KN()
return A.cO(null,B.bA,A.bF(!0,A.b8x(new C.cw_(x),w,y.A),null,B.Y,!0),!0,null)},
bdB(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bT2
break
case"own_code":x=D.bTh
break
case"not_found":x=D.bSx
break
default:x=D.bTk
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
q=A.a([B.l0,A.b4(r,o?B.V:B.fW,p,p,96),B.a0,A.h(v,p,p,p,p,B.hT,B.a3,p),B.M,A.h(u,p,p,p,p,D.c5r,B.a3,p)],x)
if(o)B.e.n(q,A.a([B.dZ,new A.am(A.bD(B.t5,new C.cvY(this),p),p)],x))
return q},
bcP(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.N(A.a([new A.cg(r,44,d.d,!1,!0,s),B.al,A.a5(A.x(A.a([A.h(r,s,s,s,s,B.jm,s,s),D.c8v],x),B.G,B.h,B.l),1),B.ab,D.cpm],x),B.u,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.S,new A.dd(B.bi,s,s,A.aG(new A.am(A.ht(D.caM,new C.cvW(this,d),A.fZ(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.c_,s,B.a9,B.bm,s,s,s,s)),s),36,s),s)],x))
w=A.a([new C.ajR(A.x(w,B.F,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bQ,D.c91],x))
else for(t=0;t<v.length;v.length===u||(0,A.I)(v),++t)B.e.n(w,this.b6q(0,d,v[t]))
return w},
b6q(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a44(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
r=A.a([A.h(f.d,n,n,n,n,B.jm,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.uP,A.h(B.cP[A.ey(q)-1]+", "+A.aw(q)+" "+B.bd[A.aq(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ae)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H9("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H9("Pessoas",A.p(p),n,n))
q.push(new C.H9("Chegada",n,v?new C.wq("Registada \xe0s "+C.d_1(w),!0,n):D.acY,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wq(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cpo
p=v?new C.wq("Registada \xe0s "+C.d_1(w),!0,n):D.acY
B.e.n(r,A.a([new C.H9("Bilhete",n,q,n),new C.H9("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.kA,A.h(t,n,n,n,n,B.kg,n,n),n))
i=A.a([B.bQ,i,B.ap,new C.ajR(A.x(r,B.F,B.h,B.l),n)],x)
if(s||k)i.push(B.S)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cvU(o,e,f):n
if(r===m)r=B.yP
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.l9,n,n)
t.push(A.a5(A.aG(new A.am(A.bD(r,q,n),n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.af)
x.push(A.a5(A.aG(new A.am(A.ht(D.ccq,new C.cvV(o),A.fZ(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.a9,B.bm,n,n,n,n)),n),44,n),1))
B.e.n(t,x)}i.push(A.N(t,B.u,B.h,B.l,0,n))
return i}}
C.wq.prototype={
t(d){var x=null,w=this.d,v=w?B.cL:B.dG,u=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?B.cU:B.cn,x,x,x,x,x,x,x,x,12,x,x,B.E,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.O(v,x,x,u,x,x,B.y),x,x,x,B.dJ,x,x,x)}}
C.wf.prototype={
t(d){var x=this,w=null,v=x.f,u=v?B.kZ:A.h(x.c,w,w,w,w,B.eI,w,w)
if(x.e)v=new A.am(A.ht(u,x.d,A.fZ(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.a9,B.bm,w,w,w,w)),w)
else{v=v?new C.bMP():x.d
v=new A.am(A.bD(u,v,A.cd(B.a4,B.z.c3(0.35),B.t,B.t,w,w,B.a9,w,w,w)),w)}return A.aG(v,52,1/0)}}
C.Df.prototype={
P(){return new C.acs(new A.aI(B.aq,$.ab()))}}
C.acs.prototype={
m(){this.UI()
var x=this.e
x.a_$=$.ab()
x.X$=0
this.a6()},
UI(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.y4(v)}w.y=null
v=w.z
if(v!=null)v.aI(0)
v=w.Q
if(v!=null)v.aI(0)},
bdw(d){this.p(new C.bOU(this,d))},
Rp(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Rp=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bON(u))
t=B.f.C(u.e.a.a)
s=u.d
x=3
return A.d(C.cIz(s,t.length===0?null:t),$async$Rp)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bOO(u))
q=r.b
if(q==null){s=r.a
v=u.biP(s==null?"error":s)
x=1
break}u.p(new C.bOP(u,q))
u.bml(q)
case 1:return A.l(v,w)}})
return A.m($async$Rp,w)},
bml(d){var x=this
x.UI()
x.y=C.dM7(d.a,x.gb9v())
x.z=A.rn(B.hu,new C.bP0(x,d))
x.Q=A.rn(B.uN,new C.bP1(x,d))},
a4M(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bOT(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aI(0)
x=w.Q
if(x!=null)x.aI(0)}},
biP(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.hf(!0,new C.bOZ(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a4(A.c7(w,w,w,w,w,B.x,w,A.h(x,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Dc(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dc=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.hf(!0,new C.bOL(),t,y.x),$async$Dc)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHJ(s.a),$async$Dc)
case 6:if(u.c==null){x=1
break}case 4:u.UI()
u.p(new C.bOM(u))
case 1:return A.l(v,w)}})
return A.m($async$Dc,w)},
aoo(){this.UI()
this.p(new C.bOS(this))},
akD(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dc()
else w.aoo()
else{x=w.c
x.toString
A.ap(x,!1).ji()}},
t(d){var x=this,w=null,v=x.r,u=v==null,t=A.pY(B.lO,x.gaZh(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hT,w,w)
return A.cXK(u,A.cO(w,B.bA,A.bF(!0,new A.S(D.atq,A.x(A.a([new A.dd(B.bi,w,w,t,w),B.S,s,B.bQ,A.a5(u?x.b6z():x.bdZ(v),1)],y.p),B.F,B.h,B.l),w),w,B.Y,!0),!0,w),new C.bP2(x),y.K)},
b6z(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bOQ(o),j=$.cUB(),i=y.p
j=A.w(n,A.x(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a3,n),B.ae,A.bh(n,n,n,A.h(E.cIU(m),n,n,n,n,D.c1d,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.u,B.h,B.l),B.r,n,n,j,n,n,n,D.ash,n,n,n)
m=A.W(999)
x=A.bE(B.fd,0.5)
m=A.a([j,B.ae,A.w(n,A.N(A.a([D.c8I,B.af,A.a5(A.cr(n,B.a8,!1,n,!0,B.x,n,A.ct(),o.e,n,n,n,n,n,2,D.aFj,B.a_,!0,n,!0,n,!1,n,B.aD,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.am,n,n,n,n,n,n,n,n,n,n,n,B.mw,!0,B.ay,n,B.fP,n,n,n,n),1)],i),B.u,B.h,B.l,0,n),B.r,n,n,new A.O(B.t,n,x,m,n,n,B.y),n,44,n,B.c_,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bBT[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eo(v,0,j),s=J.an(t.a),r=t.b,t=new A.bX(s,r,A.u(t).i("bX<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.al(A.c0())
p=A.a([],i)
if(q.a>0)p.push(B.af)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.bU(n,x,n,n),A.N(u,B.u,B.h,B.l,0,n)],i))}m=A.a5(A.d3(m,n,B.Y,n,n,!1,!1),1)
j=o.f
return A.x(A.a([m,B.S,new C.wf("Mostrar o QR para pagar",l?o.gakE():n,!1,j,n)],i),B.F,B.h,B.l)},
bdZ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cc(new A.aa(Date.now(),0,!1)).a
x=h<0?0:B.j.aL(h,1e6)
w=""+B.j.aL(x,60)+":"+B.f.aN(B.j.k(B.j.aD(x,60)),2,"0")
v=B.f.C(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.d_1(h==null?new A.aa(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bQQ
break
case"cancelled":h=D.bQI
break
default:h=D.bS3
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bOW()
q=j.c
q.toString
q=A.n6(q,!1).a0(0,$.bb(),y.D).b
p=q==null?i:q.x
q=$.cUB()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.C(p).length!==0)n.push(A.h(B.f.C(p),i,i,i,i,B.jm,B.a3,i))
n.push(new A.S(F.uP,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a3,i),i))
n.push(B.S)
if(g)n.push(D.bXu)
else{m=A.W(16)
l=A.bE(B.fd,0.5)
k=f?1:0.15
n.push(A.w(i,A.fz(A.axb(B.t,A.kp("/pagar/"+d.b),B.yf,B.yg,B.Y,"QR para pagar "+E.cIU(j.d),186),k),B.r,i,i,new A.O(B.t,i,l,m,i,i,B.y),i,i,i,B.cM,i,i,i))}n.push(B.S)
n.push(A.h(E.cIU(j.d),i,i,i,i,B.hT,i,i))
n.push(B.aS)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a3,i))
if(f)B.e.n(n,A.a([B.ae,D.cpl],o))
q=A.w(i,A.x(n,B.u,B.h,B.l),B.r,i,i,q,i,i,i,B.cM,i,i,i)
n=A.bh(i,i,i,h.$2("Estado",new C.wq(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a5(A.d3(A.a([q,B.aB,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bL,i,i))],o),i,B.Y,i,i,!1,!1),1),B.S],o)
if(f)h.push(new C.wf("Cancelar cobran\xe7a",j.gaZi(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wf("Nova cobran\xe7a",j.gb8p(),!1,!1,i),B.ae,new C.wf("Fechar",new C.bOV(j),!0,!1,i)],o))
else h.push(new C.wf("Mostrar outro QR",j.gakE(),!1,j.f,i))
return A.x(h,B.F,B.h,B.l)}}
C.Fj.prototype={
P(){return new C.agf()}}
C.agf.prototype={
ad(){this.ao()
this.IC()},
IC(){var x=0,w=A.n(y.H),v=this,u
var $async$IC=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.clt(v))
x=2
return A.d(C.cNA(v.a.c),$async$IC)
case 2:u=e
if(v.c!=null)v.p(new C.clu(v,u))
return A.l(null,w)}})
return A.m($async$IC,w)},
aSu(d){var x=null,w=d.e,v=w==null?x:B.f.C(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nS("",d.c,"pay_request",d.d/100,x,x,new C.clr(this),!1,new C.cls(d),B.VV,x,w,C.dKF(),x,x)},
t(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.UD(this.aSu(t),u)
x=s?"Pagar":C.dCO(t.a)
if(s)s=D.aIt
else{s=t.a
w=y.p
v=A.a([A.bG(A.Jv(s==="paid"?B.h1:B.q8,3,u,120),u,u),B.S,A.h(C.dCN(s),u,u,u,u,B.jj,B.a3,u),B.br],w)
if(s==="error")B.e.n(v,A.a([new C.wf("Tentar outra vez",this.gaZj(),!1,!1,u),B.ae,new C.wf("Fechar",new C.clv(d),!0,!1,u)],w))
else v.push(new C.wf("OK",new C.clw(d),!1,!1,u))
s=v}return new C.aPC(x,s,u)}}
C.aPC.prototype={
t(d){var x=null,w=A.aT(d,x,y.w).w,v=A.a5(A.d5(B.bu,x,B.a_,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxB(d),x,x,x,x,x,x,!1,B.b_),1),u=y.p,t=A.a([A.bG(A.w(x,x,B.r,x,x,new A.O(N.BM,x,x,A.W(3),x,x,B.y),x,5,x,x,x,x,40),x,x),B.aB,A.N(A.a([A.a5(A.h(this.c,x,x,x,x,B.b4,x,x),1),A.pY(B.id,new C.cxC(d),"Fechar")],u),B.u,B.h,B.l,0,x),B.a0],u)
B.e.n(t,this.d)
return A.hj(!1,B.aN,!0,x,A.x(A.a([v,A.w(x,A.x(t,B.F,B.h,B.I),B.r,x,x,M.Ky,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.u,B.k2,B.l),B.r,x,0,x,x,x,x,x,B.fJ)}}
var z=a.updateTypes(["D<~>()","~()","H(M,m5<G1>)","~(c)","c(c)"])
C.cKG.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:127}
C.cvS.prototype={
$0(){var x=this.a
return x.f=x.a44(0,this.b)},
$S:0}
C.cvT.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a44(0,this.b),this.c)},
$S:0}
C.cw_.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bYd
x=y.p
w=A.a([A.N(A.a([A.pY(B.lO,new C.cvZ(d),"Voltar")],x),B.u,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.S,D.ch2,B.bQ],x))
else w.push(B.a0)
x=this.a
if(!v)B.e.n(w,x.bdB(t))
else B.e.n(w,x.bcP(t))
return A.d3(w,u,B.D0,u,u,!1,!1)},
$S:z+2}
C.cvZ.prototype={
$0(){return A.ap(this.a,!1).ji()},
$S:0}
C.cvY.prototype={
$0(){var x=this.a
return x.p(new C.cvX(x))},
$S:0}
C.cvX.prototype={
$0(){var x=this.a
return x.d=x.KN()},
$S:0}
C.cvW.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ag("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cvU.prototype={
$0(){return this.a.Ro(this.b,this.c)},
$S:0}
C.cvV.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ag("/cobrar",null,y.X)},
$S:0}
C.bMP.prototype={
$0(){},
$S:0}
C.bOU.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aL(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dl(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bON.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bOO.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bOP.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bP0.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.h0(new A.aa(Date.now(),0,!1)))x.a4M("expired")
else x.p(new C.bP_())},
$S:58}
C.bP_.prototype={
$0(){},
$S:0}
C.bP1.prototype={
$1(d){return this.aEx(d)},
aEx(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.alB(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a4M("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:492}
C.bOT.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.aa(Date.now(),0,!1)},
$S:0}
C.bOZ.prototype={
$1(d){var x=null
return new A.f0(D.c8W,D.cc3,A.a([new A.am(A.cR(B.my,x,x,new C.bOX(d),x,x),x),new A.am(A.bD(D.ca3,new C.bOY(this.a,d),x),x)],y.p),x)},
$S:19}
C.bOX.prototype={
$0(){return A.ap(this.a,!1).by()},
$S:0}
C.bOY.prototype={
$0(){A.ap(this.b,!1).by()
var x=this.a.c
x.toString
A.ae(x).ag("/partner-payments/setup",null,y.X)},
$S:0}
C.bOL.prototype={
$1(d){var x=null
return new A.f0(D.cbL,D.cbf,A.a([new A.am(A.cR(D.cc2,x,x,new C.bOJ(d),x,x),x),new A.am(A.bD(D.ca_,new C.bOK(d),x),x)],y.p),x)},
$S:19}
C.bOJ.prototype={
$0(){return A.ap(this.a,!1).au(!1)},
$S:0}
C.bOK.prototype={
$0(){return A.ap(this.a,!1).au(!0)},
$S:0}
C.bOM.prototype={
$0(){return this.a.r=null},
$S:0}
C.bOS.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.kP(0,B.kd)},
$S:0}
C.bP2.prototype={
$2(d,e){if(!d)this.a.akD()},
$S:262}
C.bOQ.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a5(A.bh(x,!0,x,A.hj(!1,B.aN,!0,x,A.f_(!1,t,!0,A.aG(A.bG(w?D.aDP:A.h(d,x,x,x,x,B.p_,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bOR(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fP(u,D.Kk),x,x,B.cX),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:275}
C.bOR.prototype={
$0(){return this.a.bdw(this.b)},
$S:0}
C.bOW.prototype={
$2(d,e){var x=null
return A.w(x,A.N(A.a([A.a5(A.h(d,x,x,x,x,B.ce,x,x),1),e],y.p),B.u,B.h,B.l,0,x),B.r,x,x,D.Kx,x,x,x,B.co,x,x,x)},
$S:1373}
C.bOV.prototype={
$0(){var x=this.a.c
x.toString
return A.ap(x,!1).ji()},
$S:0}
C.clt.prototype={
$0(){return this.a.d=null},
$S:0}
C.clu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.clr.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEP(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEP(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.alB(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a6(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.ajA)
t=r.h(s,"error")
if(t!=null)throw A.q(A.b0r(A.p(t)))
v=A.cNB(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:147}
C.cls.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oD
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.alB(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1374}
C.clv.prototype={
$0(){return A.iL(this.a,!0)},
$S:0}
C.clw.prototype={
$0(){return A.iL(this.a,!0)},
$S:0}
C.cxB.prototype={
$0(){return A.iL(this.a,!0)},
$S:0}
C.cxC.prototype={
$0(){return A.iL(this.a,!0)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dKF","dCM",4)
var u
w(u=C.acs.prototype,"gakE","Rp",0)
v(u,"gb9v","a4M",3)
w(u,"gaZi","Dc",0)
w(u,"gb8p","aoo",1)
w(u,"gaZh","akD",1)
w(C.agf.prototype,"gaZj","IC",0)})();(function inheritance(){var x=a.inheritMany
x(A.L,[C.aw6,C.a6w,C.ayX,C.G1])
x(A.bv,[C.cKG,C.bP0,C.bP1,C.bOZ,C.bOL,C.bOQ,C.clr])
x(A.H,[C.ajR,C.H9,C.wq,C.wf,C.aPC])
x(A.G,[C.G2,C.Df,C.Fj])
x(A.Z,[C.aOV,C.acs,C.agf])
x(A.bO,[C.cvS,C.cvT,C.cvZ,C.cvY,C.cvX,C.cvW,C.cvU,C.cvV,C.bMP,C.bOU,C.bON,C.bOO,C.bOP,C.bP_,C.bOT,C.bOX,C.bOY,C.bOJ,C.bOK,C.bOM,C.bOS,C.bOR,C.bOV,C.clt,C.clu,C.cls,C.clv,C.clw,C.cxB,C.cxC])
x(A.cM,[C.cw_,C.bP2,C.bOW])})()
A.bq(b.typeUniverse,JSON.parse('{"ajR":{"H":[],"e":[],"f":[]},"H9":{"H":[],"e":[],"f":[]},"G2":{"G":[],"e":[],"f":[]},"aOV":{"Z":["G2"]},"wq":{"H":[],"e":[],"f":[]},"wf":{"H":[],"e":[],"f":[]},"Df":{"G":[],"e":[],"f":[]},"acs":{"Z":["Df"]},"Fj":{"G":[],"e":[],"f":[]},"agf":{"Z":["Fj"]},"aPC":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{D:x("cI"),E:x("r<ayX>"),s:x("r<c>"),p:x("r<e>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dC"),K:x("L"),y:x("a6w"),m:x("ov"),k:x("+(c,bj)"),R:x("+at,result(aa?,c)"),u:x("+error,request(c?,aw6?)"),A:x("G1"),N:x("c"),v:x("aR<G1>"),q:x("dj"),x:x("C"),z:x("@"),g:x("t<@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Kk=new A.b9(B.fd,0.5,B.ah,-1)
D.af7=new A.dT(D.Kk,B.ad,B.ad,B.ad)
D.Kx=new A.O(null,null,D.af7,null,null,null,B.y)
D.ajA=new A.Dl("invalid_state")
D.ash=new A.a3(14,18,14,18)
D.atq=new A.a3(20,8,20,20)
D.aCt=new A.aZ(61109,"MaterialIcons",null,!0)
D.aDP=new A.ba(D.aCt,22,B.z,null,null,null)
D.aFj=new A.dH(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.aT,null,null,B.aT,B.aT,!0,null,null,null,null)
D.bXS=new A.ka(40,40,20,B.t,0,null)
D.bXJ=new A.ka(null,32,12,B.t,1,null)
D.azU=new A.bK(1,B.au,D.bXJ,null)
D.bwt=x([D.bXS,B.al,D.azU],y.p)
D.bU4=new A.na(B.bR,B.h,B.l,B.u,null,B.cb,null,0,D.bwt,null)
D.bXM=new A.ka(null,120,22,B.t,1,null)
D.bXR=new A.ka(null,56,22,B.t,2,null)
D.bXU=new A.ka(null,52,26,B.t,2,null)
D.aIt=x([D.bU4,B.bQ,D.bXM,B.S,D.bXR,B.a0,D.bXU],y.p)
D.bxi=x(["1","2","3"],y.s)
D.bw2=x(["4","5","6"],y.s)
D.btU=x(["7","8","9"],y.s)
D.b6J=x(["00","0","del"],y.s)
D.bBT=x([D.bxi,D.bw2,D.btU,D.b6J],A.B("r<t<c>>"))
D.a24=new C.a6w("error",null,"",0,null)
D.bQI=new A.X("Cancelado",!1)
D.bQQ=new A.X("Expirou",!1)
D.bS3=new A.X("\xc0 espera\u2026",!1)
D.bSx=new A.bN(I.kI,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bT2=new A.bN(B.fy,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTh=new A.bN(B.kG,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTk=new A.bN(B.Eb,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.byW=x([],y.E)
D.Ha=new C.G1("error",null,null,null,D.byW,"entry",null)
D.auC=new A.pj(B.h1,150,3,null,null)
D.ajd=new A.eX(B.J,null,null,D.auC,null)
D.bXu=new A.bU(null,214,D.ajd,null)
D.bYd=new A.vX(!1,3,!1,null)
D.c1d=new A.P(!0,B.z,null,null,null,null,44,B.E,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5r=new A.P(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8v=new A.E("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c8I=new A.E("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c8W=new A.E("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c91=new A.E("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.l6,null,null,null,null,null,null,null)
D.ca_=new A.E("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.ca3=new A.E("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.caM=new A.E("Ver perfil",null,K.rX,null,null,null,null,null,null,null)
D.cbf=new A.E("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.cbL=new A.E("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.cc2=new A.E("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.cc3=new A.E("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.ccq=new A.E("Cobrar",null,B.l9,null,null,null,null,null,null,null)
D.ch2=new A.E("Quem \xe9",null,B.hT,null,null,null,null,null,null,null)
D.cpl=new C.wq("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cpm=new C.wq("Verificado",!0,null)
D.acY=new C.wq("Por registar",!1,null)
D.cpo=new C.wq("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVB","cUB",()=>{var w=A.W(16)
return A.doN(A.bE(B.fd,0.5),w,null,B.t,null,null,B.y)})})()};
(a=>{a["0xNDbVJWTWCaMYmNgeLoBe9B2/w="]=a.current})($__dart_deferred_initializers__);