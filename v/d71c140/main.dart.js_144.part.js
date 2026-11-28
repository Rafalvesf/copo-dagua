((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cFP(d,e){return C.dFM(d,e)},
dFM(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cFP=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.S().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aT("create_pay_request",A.T(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cFP)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.dK(A.q(J.i(s,"expires_at")))
p=p==null?null:p.e0()
if(p==null)p=new A.ac(Date.now(),0,!1).e9(6e8)
v=new A.YH(null,new C.avi(r,q,p))
x=1
break}r=r.b(s)?A.q(J.i(s,"result")):"error"
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
return A.m($async$cFP,w)},
cF0(d){return C.dF5(d)},
dF5(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cF0=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.S().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aT("cancel_pay_request",A.T(["p_id",d],y.N,s),s),$async$cF0)
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
return A.m($async$cF0,w)},
dHC(d,e){var x=$.S().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.M3(0,"pay-request-"+d,B.yv).O5(new C.cHR(e),B.H3,new G.Fq(H.yi,"id",d),"public","pay_requests").Q_(0)},
cKs(d){return C.dIP(d)},
dIP(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cKs=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.S().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aT("pay_request_info",A.T(["p_code",d],y.N,q),q),$async$cKs)
case 7:s=f
if(!y.f.b(s)){v=D.a2y
x=1
break}r=A.q(J.i(s,"result"))
q=A.E(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.q(p==null?"":p)
o=A.aL(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.E(J.i(s,"description"))
v=new C.a5T(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a2y
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cKs,w)},
al2(d){return C.dG9(d)},
dG9(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$al2=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.S().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f6("event-pay",d),$async$al2)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.h8(r,o,n):A.T(["error","unknown_error"],o,n)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
if(o instanceof A.pj){q=o
p=q.b
o=y.N
n=y.z
o=y.f.b(p)?J.h8(p,o,n):A.T(["error","unknown_error"],o,n)
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
return A.m($async$al2,w)},
avi:function avi(d,e,f){this.a=d
this.b=e
this.c=f},
cHR:function cHR(d){this.a=d},
a5T:function a5T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cOE(d){return C.dJs(d)},
dJs(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cOE=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.S().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aT("scan_qr",A.T(["p_token",b0],y.N,o),o),$async$cOE)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.Hn
x=1
break}o=A.q(J.i(s,"result"))
n=A.E(J.i(s,"scan_id"))
m=A.E(J.i(s,"name"))
l=A.E(J.i(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.i(s,"items"))
j=J.aq(j==null?B.am:j)
while(j.t()){q=j.gE(j)
if(p.b(q)){i=q
h=J.a7(i)
g=h.h(i,"ticket")
f=A.q(h.h(i,"kind"))
e=A.q(h.h(i,"wedding_id"))
d=A.E(h.h(i,"booking_id"))
a0=h.h(i,"event")
a0=A.q(a0==null?"Evento":a0)
a1=h.h(i,"date")
a1=A.dK(A.q(a1==null?"":a1))
a2=A.E(h.h(i,"booking_number"))
a3=A.aL(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.E(J.i(g,"status")):null
if(a5){a5=A.aL(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.dK(A.q(a7==null?"":a7))
a7=a7==null?null:a7.e0()
J.o(h.h(i,"can_charge"),!0)
J.by(r,new C.ay0(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.E(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dR(p)
p=p===!0?"entry":"profile"}k=A.E(J.i(s,"profile_id"))
v=new C.FS(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cU){v=D.Hn
x=1
break}else{v=D.Hn
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cOE,w)},
aV9(d,e){return C.dJr(d,e)},
dJr(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aV9=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.S().b
p===$&&A.b()
x=10
return A.d(p.aT("scan_booking_arrival",A.T(["p_scan",d,"p_booking",e.c],r,q),q),$async$aV9)
case 10:o=g
x=8
break
case 9:p=$.S().b
p===$&&A.b()
x=11
return A.d(p.aT("scan_check_in",A.T(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aV9)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YF(null,"error")
x=1
break}r=A.q(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.dK(A.q(q==null?"":q))
q=q==null?null:q.e0()
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
return A.m($async$aV9,w)},
ay0:function ay0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
FS:function FS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cWj(d){return B.f.aX(B.j.k(A.hM(d)),2,"0")+":"+B.f.aX(B.j.k(A.hv(d)),2,"0")},
d52(d){return new C.FT(d,null)},
dkL(){return new C.D9(null)},
dro(d){return new C.Fc(d,null)},
dyr(d){var x
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
default:x=A.aUY(d)
break}return x},
dyt(d){var x
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
dys(d){var x
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
ajd:function ajd(d,e){this.c=d
this.a=e},
GX:function GX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FT:function FT(d,e){this.c=d
this.a=e},
aO8:function aO8(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cte:function cte(d,e){this.a=d
this.b=e},
ctf:function ctf(d,e,f){this.a=d
this.b=e
this.c=f},
ctm:function ctm(d){this.a=d},
ctl:function ctl(d){this.a=d},
ctk:function ctk(d){this.a=d},
ctj:function ctj(d){this.a=d},
cti:function cti(d,e){this.a=d
this.b=e},
ctg:function ctg(d,e,f){this.a=d
this.b=e
this.c=f},
cth:function cth(d){this.a=d},
wn:function wn(d,e,f){this.c=d
this.d=e
this.a=f},
wc:function wc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bL4:function bL4(){},
D9:function D9(d){this.a=d},
abS:function abS(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bMP:function bMP(d,e){this.a=d
this.b=e},
bMI:function bMI(d){this.a=d},
bMJ:function bMJ(d){this.a=d},
bMK:function bMK(d,e){this.a=d
this.b=e},
bMW:function bMW(d,e){this.a=d
this.b=e},
bMV:function bMV(){},
bMX:function bMX(d,e){this.a=d
this.b=e},
bMO:function bMO(d,e){this.a=d
this.b=e},
bMU:function bMU(d){this.a=d},
bMS:function bMS(d){this.a=d},
bMT:function bMT(d,e){this.a=d
this.b=e},
bMG:function bMG(){},
bME:function bME(d){this.a=d},
bMF:function bMF(d){this.a=d},
bMH:function bMH(d){this.a=d},
bMN:function bMN(d){this.a=d},
bMY:function bMY(d){this.a=d},
bML:function bML(d){this.a=d},
bMM:function bMM(d,e){this.a=d
this.b=e},
bMR:function bMR(){},
bMQ:function bMQ(d){this.a=d},
Fc:function Fc(d,e){this.c=d
this.a=e},
afF:function afF(){this.c=this.a=this.d=null},
cka:function cka(d){this.a=d},
ckb:function ckb(d,e){this.a=d
this.b=e},
ck8:function ck8(d){this.a=d},
ck9:function ck9(d){this.a=d},
ckc:function ckc(d){this.a=d},
ckd:function ckd(d){this.a=d},
aOP:function aOP(d,e,f){this.c=d
this.d=e
this.a=f},
cv0:function cv0(d){this.a=d},
cv1:function cv1(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[88]
G=c[121]
H=c[236]
C=a.updateHolder(c[14],C)
D=c[276]
I=c[280]
K=c[239]
F=c[277]
L=c[56]
M=c[279]
N=c[278]
C.avi.prototype={}
C.a5T.prototype={}
C.ay0.prototype={}
C.FS.prototype={
gar(d){return this.c}}
C.ajd.prototype={
u(d){var x=null
return A.A(x,this.c,B.r,x,x,$.cQV(),x,x,x,B.cv,x,x,x)}}
C.GX.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.cf,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bL,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.A(x,A.P(w,B.w,B.i,B.m,0,x,x),B.r,x,x,D.KQ,x,x,x,B.e1,x,x,x)}}
C.FT.prototype={
P(){return new C.aO8(A.D(y.N,y.R))}}
C.aO8.prototype={
KV(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KV=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cOE(u.a.c),$async$KV)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ai(t).Gv("/u/"+A.q(s),null,y.X)
v=new A.aN($.aT,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$KV,w)},
a4j(d,e){var x=e.c
return x==null?"e"+e.b:x},
Rr(d,e){return this.aUY(d,e)},
aUY(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Rr=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.q(new C.cte(u,e))
t=d.b
t.toString
x=3
return A.d(C.aV9(t,e),$async$Rr)
case 3:s=g
if(u.c==null){x=1
break}u.q(new C.ctf(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$Rr,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KV()
return A.cO(null,B.by,A.bC(!0,A.cT1(new C.ctm(x),w,y.A),null,B.Z,!0),!0,null)},
bdG(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bU9
break
case"own_code":x=D.bUk
break
case"not_found":x=D.bTE
break
default:x=D.bUm
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
q=A.a([B.t9,A.b2(r,o?B.T:B.fo,p,p,96),B.a1,A.h(v,p,p,p,p,B.hh,B.a6,p,p),B.X,A.h(u,p,p,p,p,D.c67,B.a6,p,p)],x)
if(o)B.e.n(q,A.a([B.cM,A.bF(B.tn,new C.ctk(this),p)],x))
return q},
bd0(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.P(A.a([new A.cv(r,44,d.d,!1,!0,s),B.af,A.a4(A.B(A.a([A.h(r,s,s,s,s,B.il,s,s,s),D.cg2],x),B.G,B.i,B.m,0,B.v),1),B.ae,D.cqd],x),B.w,B.i,B.m,0,s,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.Q,new A.d0(B.bh,s,s,A.aI(A.hs(D.cfp,new C.cti(this,d),A.fS(s,s,B.t,s,s,s,s,s,s,B.A,s,s,B.bN,s,B.ad,B.cd,s,s,s,s)),36,s),s)],x))
w=A.a([new C.ajd(A.B(w,B.I,B.i,B.m,0,B.v),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.br,D.ccU],x))
else for(t=0;t<v.length;v.length===u||(0,A.J)(v),++t)B.e.n(w,this.b6U(0,d,v[t]))
return w},
b6U(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a4j(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
s=i}i=A.h(k?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",n,n,n,n,B.b8,n,n,n)
x=y.p
r=A.a([A.h(f.d,n,n,n,n,B.il,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.Q(F.qn,A.h(B.hE[A.is(q)-1]+", "+A.aK(q)+" "+B.c2[A.ax(q)-1],n,n,n,n,B.R,n,n,n),n))
r.push(B.ac)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.GX("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.GX("Pessoas",A.q(p),n,n))
q.push(new C.GX("Chegada",n,v?new C.wn("Registada \xe0s "+C.cWj(w),!0,n):D.adB,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wn(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cqf
p=v?new C.wn("Registada \xe0s "+C.cWj(w),!0,n):D.adB
B.e.n(r,A.a([new C.GX("Bilhete",n,q,n),new C.GX("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.Q(B.qp,A.h(t,n,n,n,n,B.zd,n,n,n),n))
i=A.a([B.br,i,B.as,new C.ajd(A.B(r,B.I,B.i,B.m,0,B.v),n)],x)
if(s||k)i.push(B.Q)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.ctg(o,e,f):n
if(r===m)r=B.yV
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.k6,n,n,n)
t.push(A.a4(A.aI(A.bF(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ak)
x.push(A.a4(A.aI(A.hs(D.cf7,new C.cth(o),A.fS(n,n,B.t,n,n,n,n,n,n,B.A,n,n,n,n,B.ad,B.cd,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.P(t,B.w,B.i,B.m,0,n,n))
return i}}
C.wn.prototype={
u(d){var x=null,w=this.d,v=w?B.d9:B.f6,u=A.X(999)
return A.A(x,A.h(this.c,x,x,x,x,A.aF(x,x,w?B.d_:B.d8,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.M(v,x,x,u,x,x,B.y),x,x,x,B.dx,x,x,x)}}
C.wc.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.ml:A.h(x.c,w,w,w,w,B.eG,w,w,w)
if(x.e)v=A.hs(u,x.d,A.fS(w,w,B.t,w,w,w,w,w,w,B.A,w,w,w,w,B.ad,B.cd,w,w,w,w))
else{v=v?new C.bL4():x.d
v=A.bF(u,v,A.cp(B.A,B.A.cc(0.35),B.t,B.t,w,w,B.ad,w,w,w))}return A.aI(v,52,1/0)}}
C.D9.prototype={
P(){return new C.abS(new A.aJ(B.ap,$.ad()))}}
C.abS.prototype={
m(){this.UF()
var x=this.e
x.Z$=$.ad()
x.W$=0
this.a6()},
UF(){var x,w=this,v=w.y
if(v!=null){x=$.S().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yc(v)}w.y=null
v=w.z
if(v!=null)v.aL(0)
v=w.Q
if(v!=null)v.aL(0)},
bdC(d){this.q(new C.bMP(this,d))},
Rs(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Rs=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.q(new C.bMI(u))
t=B.f.C(u.e.a.a)
s=u.d
x=3
return A.d(C.cFP(s,t.length===0?null:t),$async$Rs)
case 3:r=e
if(u.c==null){x=1
break}u.q(new C.bMJ(u))
q=r.b
if(q==null){s=r.a
v=u.biI(s==null?"error":s)
x=1
break}u.q(new C.bMK(u,q))
u.bmt(q)
case 1:return A.l(v,w)}})
return A.m($async$Rs,w)},
bmt(d){var x=this
x.UF()
x.y=C.dHC(d.a,x.gb9S())
x.z=A.u5(B.fR,new C.bMW(x,d))
x.Q=A.u5(B.uY,new C.bMX(x,d))},
a4Y(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.q(new C.bMO(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aL(0)
x=w.Q
if(x!=null)x.aL(0)}},
biI(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fV(!0,new C.bMU(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a4(A.cB(w,w,w,w,w,B.z,w,A.h(x,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Di(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Di=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fV(!0,new C.bMG(),t,y.x),$async$Di)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cF0(s.a),$async$Di)
case 6:if(u.c==null){x=1
break}case 4:u.UF()
u.q(new C.bMH(u))
case 1:return A.l(v,w)}})
return A.m($async$Di,w)},
aoo(){this.UF()
this.q(new C.bMN(this))},
akH(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Di()
else w.aoo()
else{x=w.c
x.toString
A.an(x,!1).iy()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pU(B.lN,x.gaZ8(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hh,w,w,w)
return A.bnr(u,A.cO(w,B.by,A.bC(!0,new A.Q(D.aut,A.B(A.a([new A.d0(B.bh,w,w,t,w),B.Q,s,B.br,A.a4(u?x.b72():x.be1(v),1)],y.p),B.I,B.i,B.m,0,B.v),w),w,B.Z,!0),!0,w),new C.bMY(x),y.K)},
b72(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bML(o),j=$.cQV(),i=y.p
j=A.A(n,A.B(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.R,B.a6,n,n),B.ac,A.b9(n,n,n,A.h(E.cG7(m),n,n,n,n,D.c2_,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.w,B.i,B.m,0,B.v),B.r,n,n,j,n,n,n,D.ath,n,n,n)
m=A.X(999)
x=A.bA(B.fn,0.5)
m=A.a([j,B.ac,A.A(n,A.P(A.a([D.cey,B.ak,A.a4(A.cC(n,B.a9,!1,n,!0,B.z,n,A.cI(),o.e,n,n,n,n,n,2,D.aFX,B.a0,!0,n,!0,n,!1,n,B.aG,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.au,n,n,n,n,n,n,n,n,n,n,n,B.kW,!0,B.at,n,B.h9,n,n,n,n),1)],i),B.w,B.i,B.m,0,n,n),B.r,n,n,new A.M(B.t,n,x,m,n,n,B.y),n,44,n,B.bN,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bCZ[w]
x=B.e.gM(v)==="1"?16:10
u=A.a([],i)
for(t=A.eA(v,0,j),s=J.aq(t.a),r=t.b,t=new A.c0(s,r,A.u(t).i("c0<1>"));t.t();){q=t.c
q=q>=0?new A.a3(r+q,s.gE(s)):A.aj(A.c2())
p=A.a([],i)
if(q.a>0)p.push(B.ak)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c4(n,x,n,n),A.P(u,B.w,B.i,B.m,0,n,n)],i))}m=A.a4(A.cX(m,n,B.Z,n,n,!1,B.a2,!1),1)
j=o.f
return A.B(A.a([m,B.Q,new C.wc("Mostrar o QR para pagar",l?o.gakI():n,!1,j,n)],i),B.I,B.i,B.m,0,B.v)},
be1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cK(new A.ac(Date.now(),0,!1)).a
x=h<0?0:B.j.aN(h,1e6)
w=""+B.j.aN(x,60)+":"+B.f.aX(B.j.k(B.j.ao(x,60)),2,"0")
v=B.f.C(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.a3("Pago \xe0s "+C.cWj(h==null?new A.ac(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bRV
break
case"cancelled":h=D.bRN
break
default:h=D.bTa
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bMR()
q=j.c
q.toString
q=A.oy(q,!1).a0(0,$.b8(),y.D).b
p=q==null?i:q.x
q=$.cQV()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.C(p).length!==0)n.push(A.h(B.f.C(p),i,i,i,i,B.il,B.a6,i,i))
n.push(new A.Q(F.qn,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.R,B.a6,i,i),i))
n.push(B.Q)
if(g)n.push(D.bYp)
else{m=A.X(16)
l=A.bA(B.fn,0.5)
k=f?1:0.15
n.push(A.A(i,A.fd(A.cU9(B.t,A.kC("/pagar/"+d.b),B.H5,B.H6,B.Z,"QR para pagar "+E.cG7(j.d),186),k),B.r,i,i,new A.M(B.t,i,l,m,i,i,B.y),i,i,i,B.cv,i,i,i))}n.push(B.Q)
n.push(A.h(E.cG7(j.d),i,i,i,i,B.hh,i,i,i))
n.push(B.b0)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.R,B.a6,i,i))
if(f)B.e.n(n,A.a([B.ac,D.cqc],o))
q=A.A(i,A.B(n,B.w,B.i,B.m,0,B.v),B.r,i,i,q,i,i,i,B.cv,i,i,i)
n=A.b9(i,i,i,h.$2("Estado",new C.wn(r,t,i)),!1,i,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a4(A.cX(A.a([q,B.aC,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bL,i,i,i))],o),i,B.Z,i,i,!1,B.a2,!1),1),B.Q],o)
if(f)h.push(new C.wc("Cancelar cobran\xe7a",j.gaZ9(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wc("Nova cobran\xe7a",j.gb8K(),!1,!1,i),B.ac,new C.wc("Fechar",new C.bMQ(j),!0,!1,i)],o))
else h.push(new C.wc("Mostrar outro QR",j.gakI(),!1,j.f,i))
return A.B(h,B.I,B.i,B.m,0,B.v)}}
C.Fc.prototype={
P(){return new C.afF()}}
C.afF.prototype={
ak(){this.aD()
this.IO()},
IO(){var x=0,w=A.n(y.H),v=this,u
var $async$IO=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.q(new C.cka(v))
x=2
return A.d(C.cKs(v.a.c),$async$IO)
case 2:u=e
if(v.c!=null)v.q(new C.ckb(v,u))
return A.l(null,w)}})
return A.m($async$IO,w)},
aSs(d){var x=null,w=d.e,v=w==null?x:B.f.C(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.os("",d.c,"pay_request",d.d/100,x,x,new C.ck8(this),!1,new C.ck9(d),B.Wk,x,w,C.dGc(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.U7(this.aSs(t),u)
x=s?"Pagar":C.dyt(t.a)
if(s)s=D.aJc
else{s=t.a
w=y.p
v=A.a([A.bO(A.a2h(s==="paid"?B.jB:B.qv,3,u,120),u,u),B.Q,A.h(C.dys(s),u,u,u,u,B.he,B.a6,u,u),B.bi],w)
if(s==="error")B.e.n(v,A.a([new C.wc("Tentar outra vez",this.gaZa(),!1,!1,u),B.ac,new C.wc("Fechar",new C.ckc(d),!0,!1,u)],w))
else v.push(new C.wc("OK",new C.ckd(d),!1,!1,u))
s=v}return new C.aOP(x,s,u)}}
C.aOP.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=A.a4(A.db(B.bU,x,B.a0,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cv0(d),x,x,x,x,x,x,!1,B.b_),1),u=y.p,t=A.a([A.bO(A.A(x,x,B.r,x,x,new A.M(N.um,x,x,A.X(3),x,x,B.y),x,5,x,x,x,x,40),x,x),B.aC,A.P(A.a([A.a4(A.h(this.c,x,x,x,x,B.bl,x,x,x),1),A.pU(B.ew,new C.cv1(d),"Fechar")],u),B.w,B.i,B.m,0,x,x),B.a1],u)
B.e.n(t,this.d)
return A.fo(!1,B.aD,!0,x,A.B(A.a([v,A.A(x,A.B(t,B.I,B.i,B.K,0,B.v),B.r,x,x,M.KR,x,x,x,new A.a0(20,10,20,20+w.r.d),x,x,1/0)],u),B.w,B.iU,B.m,0,B.v),B.r,x,0,x,x,x,x,x,B.ey)}}
var z=a.updateTypes(["F<~>()","~()","I(O,nl<FS>)","~(c)","c(c)"])
C.cHR.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:149}
C.cte.prototype={
$0(){var x=this.a
return x.f=x.a4j(0,this.b)},
$S:0}
C.ctf.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4j(0,this.b),this.c)},
$S:0}
C.ctm.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bZ5
x=y.p
w=A.a([A.P(A.a([A.pU(B.lN,new C.ctl(d),"Voltar")],x),B.w,B.i,B.m,0,u,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.Q,D.c8T,B.br],x))
else w.push(B.a1)
x=this.a
if(!v)B.e.n(w,x.bdG(t))
else B.e.n(w,x.bd0(t))
return A.cX(w,u,B.D9,u,u,!1,B.a2,!1)},
$S:z+2}
C.ctl.prototype={
$0(){return A.an(this.a,!1).iy()},
$S:0}
C.ctk.prototype={
$0(){var x=this.a
return x.q(new C.ctj(x))},
$S:0}
C.ctj.prototype={
$0(){var x=this.a
return x.d=x.KV()},
$S:0}
C.cti.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).ap("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.ctg.prototype={
$0(){return this.a.Rr(this.b,this.c)},
$S:0}
C.cth.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).ap("/cobrar",null,y.X)},
$S:0}
C.bL4.prototype={
$0(){},
$S:0}
C.bMP.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aN(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dW(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bMI.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bMJ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bMK.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bMW.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.h4(new A.ac(Date.now(),0,!1)))x.a4Y("expired")
else x.q(new C.bMV())},
$S:65}
C.bMV.prototype={
$0(){},
$S:0}
C.bMX.prototype={
$1(d){return this.aEv(d)},
aEv(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.al2(A.T(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a4Y("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:454}
C.bMO.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ac(Date.now(),0,!1)},
$S:0}
C.bMU.prototype={
$1(d){var x=null
return new A.eS(D.cbc,D.ci_,A.a([A.cu(B.mw,x,x,new C.bMS(d),x,x),A.bF(D.chS,new C.bMT(this.a,d),x)],y.p),x)},
$S:18}
C.bMS.prototype={
$0(){return A.an(this.a,!1).bB()},
$S:0}
C.bMT.prototype={
$0(){A.an(this.b,!1).bB()
var x=this.a.c
x.toString
A.ai(x).ap("/partner-payments/setup",null,y.X)},
$S:0}
C.bMG.prototype={
$1(d){var x=null
return new A.eS(D.cho,D.cg8,A.a([A.cu(D.cfx,x,x,new C.bME(d),x,x),A.bF(D.cde,new C.bMF(d),x)],y.p),x)},
$S:18}
C.bME.prototype={
$0(){return A.an(this.a,!1).aj(!1)},
$S:0}
C.bMF.prototype={
$0(){return A.an(this.a,!1).aj(!0)},
$S:0}
C.bMH.prototype={
$0(){return this.a.r=null},
$S:0}
C.bMN.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.j6(0,B.j5)},
$S:0}
C.bMY.prototype={
$2(d,e){if(!d)this.a.akH()},
$S:185}
C.bML.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.X(16),t=A.X(16)
return A.a4(A.b9(x,!0,x,A.fo(!1,B.aD,!0,x,A.eB(!1,t,!0,A.aI(A.bO(w?D.aEt:A.h(d,x,x,x,x,B.p5,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bMM(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fD(u,D.KC),x,x,B.cC),!1,x,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:270}
C.bMM.prototype={
$0(){return this.a.bdC(this.b)},
$S:0}
C.bMR.prototype={
$2(d,e){var x=null
return A.A(x,A.P(A.a([A.a4(A.h(d,x,x,x,x,B.cf,x,x,x),1),e],y.p),B.w,B.i,B.m,0,x,x),B.r,x,x,D.KQ,x,x,x,B.cm,x,x,x)},
$S:1373}
C.bMQ.prototype={
$0(){var x=this.a.c
x.toString
return A.an(x,!1).iy()},
$S:0}
C.cka.prototype={
$0(){return this.a.d=null},
$S:0}
C.ckb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ck8.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEL(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEL(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.al2(A.T(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.aku)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b_m(A.q(t)))
v=A.cKt(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:150}
C.ck9.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oG
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.al2(A.T(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.a3(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1374}
C.ckc.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
C.ckd.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
C.cv0.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
C.cv1.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dGc","dyr",4)
var u
w(u=C.abS.prototype,"gakI","Rs",0)
v(u,"gb9S","a4Y",3)
w(u,"gaZ9","Di",0)
w(u,"gb8K","aoo",1)
w(u,"gaZ8","akH",1)
w(C.afF.prototype,"gaZa","IO",0)})();(function inheritance(){var x=a.inheritMany
x(A.K,[C.avi,C.a5T,C.ay0,C.FS])
x(A.bw,[C.cHR,C.bMW,C.bMX,C.bMU,C.bMG,C.bML,C.ck8])
x(A.I,[C.ajd,C.GX,C.wn,C.wc,C.aOP])
x(A.G,[C.FT,C.D9,C.Fc])
x(A.a_,[C.aO8,C.abS,C.afF])
x(A.bS,[C.cte,C.ctf,C.ctl,C.ctk,C.ctj,C.cti,C.ctg,C.cth,C.bL4,C.bMP,C.bMI,C.bMJ,C.bMK,C.bMV,C.bMO,C.bMS,C.bMT,C.bME,C.bMF,C.bMH,C.bMN,C.bMM,C.bMQ,C.cka,C.ckb,C.ck9,C.ckc,C.ckd,C.cv0,C.cv1])
x(A.cQ,[C.ctm,C.bMY,C.bMR])})()
A.bp(b.typeUniverse,JSON.parse('{"ajd":{"I":[],"e":[],"f":[]},"GX":{"I":[],"e":[],"f":[]},"FT":{"G":[],"e":[],"f":[]},"aO8":{"a_":["FT"]},"wn":{"I":[],"e":[],"f":[]},"wc":{"I":[],"e":[],"f":[]},"D9":{"G":[],"e":[],"f":[]},"abS":{"a_":["D9"]},"Fc":{"G":[],"e":[],"f":[]},"afF":{"a_":["Fc"]},"aOP":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),E:x("r<ay0>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dg"),K:x("K"),y:x("a5T"),m:x("tD"),k:x("+(c,bx)"),R:x("+at,result(ac?,c)"),u:x("+error,request(c?,avi?)"),A:x("FS"),N:x("c"),v:x("aN<FS>"),q:x("du"),x:x("x"),z:x("@"),g:x("t<@>?"),X:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.KC=new A.bc(B.fn,0.5,B.ai,-1)
D.afT=new A.dS(D.KC,B.ab,B.ab,B.ab)
D.KQ=new A.M(null,null,D.afT,null,null,null,B.y)
D.aku=new A.De("invalid_state")
D.ath=new A.a0(14,18,14,18)
D.aut=new A.a0(20,8,20,20)
D.aD5=new A.aW(61109,"MaterialIcons",null,!0)
D.aEt=new A.ba(D.aD5,22,B.A,null,null,null)
D.aFX=new A.dM(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bH,null,null,B.bH,B.bH,!0,null,null,null,null)
D.bYI=new A.ix(40,40,20,B.t,0,null)
D.bYA=new A.ix(null,32,12,B.t,1,null)
D.aAK=new A.bQ(1,B.av,D.bYA,null)
D.bxt=x([D.bYI,B.af,D.aAK],y.p)
D.bUO=new A.me(B.bt,B.i,B.m,B.w,null,B.v,null,0,D.bxt,null)
D.bYD=new A.ix(null,120,22,B.t,1,null)
D.bYH=new A.ix(null,56,22,B.t,2,null)
D.bYJ=new A.ix(null,52,26,B.t,2,null)
D.aJc=x([D.bUO,B.br,D.bYD,B.Q,D.bYH,B.a1,D.bYJ],y.p)
D.byl=x(["1","2","3"],y.s)
D.bx2=x(["4","5","6"],y.s)
D.buT=x(["7","8","9"],y.s)
D.b7u=x(["00","0","del"],y.s)
D.bCZ=x([D.byl,D.bx2,D.buT,D.b7u],A.w("r<t<c>>"))
D.a2y=new C.a5T("error",null,"",0,null)
D.bRN=new A.a3("Cancelado",!1)
D.bRV=new A.a3("Expirou",!1)
D.bTa=new A.a3("\xc0 espera\u2026",!1)
D.bTE=new A.bW(I.Eu,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bU9=new A.bW(B.hA,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bUk=new A.bW(B.kE,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bUm=new A.bW(B.Eq,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bzY=x([],y.E)
D.Hn=new C.FS("error",null,null,null,D.bzY,"entry",null)
D.avt=new A.nt(B.jB,150,3,null,null)
D.ak5=new A.fw(B.L,null,null,D.avt,null)
D.bYp=new A.c4(null,214,D.ak5,null)
D.bZ5=new A.vW(!1,3,!1,null)
D.c2_=new A.N(!0,B.A,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c67=new A.N(!0,B.A,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8T=new A.C("Quem \xe9",null,B.hh,null,null,null,null,null,null,null,null)
D.cbc=new A.C("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.ccU=new A.C("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mt,null,null,null,null,null,null,null,null)
D.cde=new A.C("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.cey=new A.C("O qu\xea",null,B.R,null,null,null,null,null,null,null,null)
D.cf7=new A.C("Cobrar",null,B.k6,null,null,null,null,null,null,null,null)
D.cfp=new A.C("Ver perfil",null,K.tf,null,null,null,null,null,null,null,null)
D.cfx=new A.C("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cg2=new A.C("Leste o QR agora",null,B.R,null,null,null,null,null,null,null,null)
D.cg8=new A.C("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.cho=new A.C("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.chS=new A.C("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.ci_=new A.C("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.cqc=new C.wn("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cqd=new C.wn("Verificado",!0,null)
D.adB=new C.wn("Por registar",!1,null)
D.cqf=new C.wn("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dQT","cQV",()=>{var w=A.X(16)
return A.dku(A.bA(B.fn,0.5),w,null,B.t,null,null,B.y)})})()};
(a=>{a["7p7wsgtIGXZ/eo2/LlBBu/GjCdg="]=a.current})($__dart_deferred_initializers__);