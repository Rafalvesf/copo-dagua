((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cJ7(d,e){return C.dJX(d,e)},
dJX(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cJ7=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cJ7)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.d4(A.q(J.i(s,"expires_at")))
p=p==null?null:p.dM()
if(p==null)p=new A.ac(Date.now(),0,!1).el(6e8)
v=new A.YW(null,new C.avE(r,q,p))
x=1
break}r=r.b(s)?A.q(J.i(s,"result")):"error"
v=new A.YW(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.YW("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cJ7,w)},
cIj(d){return C.dJg(d)},
dJg(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cIj=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.P().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aK("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cIj)
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
return A.m($async$cIj,w)},
dLP(d,e){var x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.Mj(0,"pay-request-"+d,B.yw).Od(new C.cLc(e),B.GW,new G.Fv(H.yj,"id",d),"public","pay_requests").Q7(0)},
cO_(d){return C.dN2(d)},
dN2(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cO_=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cO_)
case 7:s=f
if(!y.f.b(s)){v=D.a29
x=1
break}r=A.q(J.i(s,"result"))
q=A.C(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.q(p==null?"":p)
o=A.aF(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.i(s,"description"))
v=new C.a6c(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a29
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cO_,w)},
alf(d){return C.dKl(d)},
dKl(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$alf=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.P().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f5("event-pay",d),$async$alf)
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
if(o instanceof A.po){q=o
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
return A.m($async$alf,w)},
avE:function avE(d,e,f){this.a=d
this.b=e
this.c=f},
cLc:function cLc(d){this.a=d},
a6c:function a6c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cSh(d){return C.dNG(d)},
dNG(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cSh=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aK("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cSh)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.Hg
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
J.br(r,new C.aym(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dM(p)
p=p===!0?"entry":"profile"}k=A.C(J.i(s,"profile_id"))
v=new C.FX(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cU){v=D.Hg
x=1
break}else{v=D.Hg
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cSh,w)},
aVw(d,e){return C.dNF(d,e)},
dNF(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVw=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.P().b
p===$&&A.b()
x=10
return A.d(p.aK("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVw)
case 10:o=g
x=8
break
case 9:p=$.P().b
p===$&&A.b()
x=11
return A.d(p.aK("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVw)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YU(null,"error")
x=1
break}r=A.q(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d4(A.q(q==null?"":q))
q=q==null?null:q.dM()
v=new A.YU(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YU(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVw,w)},
aym:function aym(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_7(d){return B.f.aU(B.j.k(A.i0(d)),2,"0")+":"+B.f.aU(B.j.k(A.hQ(d)),2,"0")},
d8X(d){return new C.FY(d,null)},
doN(){return new C.Df(null)},
dvu(d){return new C.Fh(d,null)},
dCy(d){var x
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
default:x=A.aVj(d)
break}return x},
dCA(d){var x
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
dCz(d){var x
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
aju:function aju(d,e){this.c=d
this.a=e},
H0:function H0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FY:function FY(d,e){this.c=d
this.a=e},
aOm:function aOm(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cwA:function cwA(d,e){this.a=d
this.b=e},
cwB:function cwB(d,e,f){this.a=d
this.b=e
this.c=f},
cwI:function cwI(d){this.a=d},
cwH:function cwH(d){this.a=d},
cwG:function cwG(d){this.a=d},
cwF:function cwF(d){this.a=d},
cwE:function cwE(d,e){this.a=d
this.b=e},
cwC:function cwC(d,e,f){this.a=d
this.b=e
this.c=f},
cwD:function cwD(d){this.a=d},
wn:function wn(d,e,f){this.c=d
this.d=e
this.a=f},
wc:function wc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bMl:function bMl(){},
Df:function Df(d){this.a=d},
acc:function acc(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bOu:function bOu(d,e){this.a=d
this.b=e},
bOn:function bOn(d){this.a=d},
bOo:function bOo(d){this.a=d},
bOp:function bOp(d,e){this.a=d
this.b=e},
bOB:function bOB(d,e){this.a=d
this.b=e},
bOA:function bOA(){},
bOC:function bOC(d,e){this.a=d
this.b=e},
bOt:function bOt(d,e){this.a=d
this.b=e},
bOz:function bOz(d){this.a=d},
bOx:function bOx(d){this.a=d},
bOy:function bOy(d,e){this.a=d
this.b=e},
bOl:function bOl(){},
bOj:function bOj(d){this.a=d},
bOk:function bOk(d){this.a=d},
bOm:function bOm(d){this.a=d},
bOs:function bOs(d){this.a=d},
bOD:function bOD(d){this.a=d},
bOq:function bOq(d){this.a=d},
bOr:function bOr(d,e){this.a=d
this.b=e},
bOw:function bOw(){},
bOv:function bOv(d){this.a=d},
Fh:function Fh(d,e){this.c=d
this.a=e},
afY:function afY(){this.c=this.a=this.d=null},
cmQ:function cmQ(d){this.a=d},
cmR:function cmR(d,e){this.a=d
this.b=e},
cmO:function cmO(d){this.a=d},
cmP:function cmP(d){this.a=d},
cmS:function cmS(d){this.a=d},
cmT:function cmT(d){this.a=d},
aP2:function aP2(d,e,f){this.c=d
this.d=e
this.a=f},
cym:function cym(d){this.a=d},
cyn:function cyn(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[87]
G=c[123]
H=c[240]
C=a.updateHolder(c[14],C)
D=c[279]
I=c[232]
K=c[242]
F=c[280]
L=c[56]
M=c[282]
N=c[281]
C.avE.prototype={}
C.a6c.prototype={}
C.aym.prototype={}
C.FX.prototype={
gar(d){return this.c}}
C.aju.prototype={
u(d){var x=null
return A.y(x,this.c,B.r,x,x,$.cUI(),x,x,x,B.d_,x,x,x)}}
C.H0.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.ce,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bx,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.y(x,A.O(w,B.v,B.h,B.l,0,x),B.r,x,x,D.KA,x,x,x,B.dW,x,x,x)}}
C.FY.prototype={
R(){return new C.aOm(A.E(y.N,y.R))}}
C.aOm.prototype={
L7(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$L7=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cSh(u.a.c),$async$L7)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ad(t).Gy("/u/"+A.q(s),null,y.X)
v=new A.aN($.aT,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$L7,w)},
a4D(d,e){var x=e.c
return x==null?"e"+e.b:x},
RI(d,e){return this.aVl(d,e)},
aVl(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$RI=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cwA(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVw(t,e),$async$RI)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cwB(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$RI,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.L7()
return A.cQ(null,B.by,A.bB(!0,A.b7T(new C.cwI(x),w,y.A),null,B.Z,!0),!0,null)},
be6(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bTw
break
case"own_code":x=D.bTJ
break
case"not_found":x=D.bT2
break
default:x=D.bTL
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
q=A.a([B.kS,A.b5(r,o?B.W:B.fQ,p,p,96),B.a_,A.h(v,p,p,p,p,B.hR,B.a5,p,p),B.Q,A.h(u,p,p,p,p,D.c5k,B.a5,p,p)],x)
if(o)B.e.n(q,A.a([B.d8,A.bE(B.tm,new C.cwG(this),p)],x))
return q},
bdp(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.cj(r,44,d.d,!1,!0,s),B.ae,A.a4(A.z(A.a([A.h(r,s,s,s,s,B.it,s,s,s),D.cfm],x),B.G,B.h,B.l),1),B.ac,D.cpd],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.cX(B.bc,s,s,A.aH(A.hi(D.ceI,new C.cwE(this,d),A.fP(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bQ,s,B.ab,B.c9,s,s,s,s)),36,s),s)],x))
w=A.a([new C.aju(A.z(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bN,D.cc2],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b7b(0,d,v[t]))
return w},
b7b(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a4D(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
s=i}i=A.h(k?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",n,n,n,n,B.aI,n,n,n)
x=y.p
r=A.a([A.h(f.d,n,n,n,n,B.it,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.qi,A.h(B.dv[A.fg(q)-1]+", "+A.ay(q)+" "+B.bg[A.an(q)-1],n,n,n,n,B.L,n,n,n),n))
r.push(B.ad)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H0("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H0("Pessoas",A.q(p),n,n))
q.push(new C.H0("Chegada",n,v?new C.wn("Registada \xe0s "+C.d_7(w),!0,n):D.acZ,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wn(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cpf
p=v?new C.wn("Registada \xe0s "+C.d_7(w),!0,n):D.acZ
B.e.n(r,A.a([new C.H0("Bilhete",n,q,n),new C.H0("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.lu,A.h(t,n,n,n,n,B.zg,n,n,n),n))
i=A.a([B.bN,i,B.as,new C.aju(A.z(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cwC(o,e,f):n
if(r===m)r=B.yX
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kX,n,n,n)
t.push(A.a4(A.aH(A.bE(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.af)
x.push(A.a4(A.aH(A.hi(D.ceo,new C.cwD(o),A.fP(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.ab,B.c9,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.v,B.h,B.l,0,n))
return i}}
C.wn.prototype={
u(d){var x=null,w=this.d,v=w?B.cz:B.dU,u=A.W(999)
return A.y(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?B.cY:B.cp,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.J(v,x,x,u,x,x,B.x),x,x,x,B.dr,x,x,x)}}
C.wc.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mi:A.h(x.c,w,w,w,w,B.eL,w,w,w)
if(x.e)v=A.hi(u,x.d,A.fP(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c9,w,w,w,w))
else{v=v?new C.bMl():x.d
v=A.bE(u,v,A.ci(B.z,B.z.ce(0.35),B.t,B.t,w,w,B.ab,w,w,w))}return A.aH(v,52,1/0)}}
C.Df.prototype={
R(){return new C.acc(new A.aE(B.aj,$.aa()))}}
C.acc.prototype={
m(){this.V5()
var x=this.e
x.Y$=$.aa()
x.W$=0
this.a6()},
V5(){var x,w=this,v=w.y
if(v!=null){x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yg(v)}w.y=null
v=w.z
if(v!=null)v.aN(0)
v=w.Q
if(v!=null)v.aN(0)},
be2(d){this.p(new C.bOu(this,d))},
RJ(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$RJ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bOn(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cJ7(s,t.length===0?null:t),$async$RJ)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bOo(u))
q=r.b
if(q==null){s=r.a
v=u.bjf(s==null?"error":s)
x=1
break}u.p(new C.bOp(u,q))
u.bmP(q)
case 1:return A.l(v,w)}})
return A.m($async$RJ,w)},
bmP(d){var x=this
x.V5()
x.y=C.dLP(d.a,x.gbab())
x.z=A.u6(B.fU,new C.bOB(x,d))
x.Q=A.u6(B.uZ,new C.bOC(x,d))},
a5j(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bOt(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aN(0)
x=w.Q
if(x!=null)x.aN(0)}},
bjf(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fR(!0,new C.bOz(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a2(A.bZ(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Dn(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fR(!0,new C.bOl(),t,y.x),$async$Dn)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cIj(s.a),$async$Dn)
case 6:if(u.c==null){x=1
break}case 4:u.V5()
u.p(new C.bOm(u))
case 1:return A.l(v,w)}})
return A.m($async$Dn,w)},
aoW(){this.V5()
this.p(new C.bOs(this))},
alb(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dn()
else w.aoW()
else{x=w.c
x.toString
A.am(x,!1).ia()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pX(B.lF,x.gaZD(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hR,w,w,w)
return A.bol(u,A.cQ(w,B.by,A.bB(!0,new A.S(D.atM,A.z(A.a([new A.cX(B.bc,w,w,t,w),B.R,s,B.bN,A.a4(u?x.b7k():x.bes(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bOD(x),y.K)},
b7k(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bOq(o),j=$.cUI(),i=y.p
j=A.y(n,A.z(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a5,n,n),B.ad,A.b9(n,n,n,A.h(E.cJr(m),n,n,n,n,D.c1i,n,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a3,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.asF,n,n,n)
m=A.W(999)
x=A.bA(B.fc,0.5)
m=A.a([j,B.ad,A.y(n,A.O(A.a([D.cdO,B.af,A.a4(A.cs(n,B.a6,!1,n,!0,B.y,n,A.cu(),o.e,n,n,n,n,n,2,D.aFq,B.U,!0,n,!0,n,!1,n,B.aC,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.an,n,n,n,n,n,n,n,n,n,n,n,B.kW,!0,B.au,n,B.he,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.J(B.t,n,x,m,n,n,B.x),n,44,n,B.bQ,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bCn[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eK(v,0,j),s=J.ap(t.a),r=t.b,t=new A.ca(s,r,A.u(t).i("ca<1>"));t.t();){q=t.c
q=q>=0?new A.Z(r+q,s.gE(s)):A.al(A.c7())
p=A.a([],i)
if(q.a>0)p.push(B.af)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.bY(n,x,n,n),A.O(u,B.v,B.h,B.l,0,n)],i))}m=A.a4(A.d6(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.z(A.a([m,B.R,new C.wc("Mostrar o QR para pagar",l?o.galc():n,!1,j,n)],i),B.E,B.h,B.l)},
bes(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cA(new A.ac(Date.now(),0,!1)).a
x=h<0?0:B.j.aP(h,1e6)
w=""+B.j.aP(x,60)+":"+B.f.aU(B.j.k(B.j.aB(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.Z("Pago \xe0s "+C.d_7(h==null?new A.ac(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bRm
break
case"cancelled":h=D.bRf
break
default:h=D.bSz
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bOw()
q=j.c
q.toString
q=A.nT(q,!1).a_(0,$.b7(),y.D).b
p=q==null?i:q.x
q=$.cUI()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.it,B.a5,i,i))
n.push(new A.S(F.qi,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a5,i,i),i))
n.push(B.R)
if(g)n.push(D.bXH)
else{m=A.W(16)
l=A.bA(B.fc,0.5)
k=f?1:0.15
n.push(A.y(i,A.fe(A.bpU(B.t,A.kf("/pagar/"+d.b),B.GY,B.GZ,B.Z,"QR para pagar "+E.cJr(j.d),186),k),B.r,i,i,new A.J(B.t,i,l,m,i,i,B.x),i,i,i,B.d_,i,i,i))}n.push(B.R)
n.push(A.h(E.cJr(j.d),i,i,i,i,B.hR,i,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a5,i,i))
if(f)B.e.n(n,A.a([B.ad,D.cpc],o))
q=A.y(i,A.z(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.d_,i,i,i)
n=A.b9(i,i,i,h.$2("Estado",new C.wn(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a3,i)
h=A.a([A.a4(A.d6(A.a([q,B.aB,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bx,i,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.wc("Cancelar cobran\xe7a",j.gaZE(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wc("Nova cobran\xe7a",j.gb94(),!1,!1,i),B.ad,new C.wc("Fechar",new C.bOv(j),!0,!1,i)],o))
else h.push(new C.wc("Mostrar outro QR",j.galc(),!1,j.f,i))
return A.z(h,B.E,B.h,B.l)}}
C.Fh.prototype={
R(){return new C.afY()}}
C.afY.prototype={
ac(){this.ap()
this.IV()},
IV(){var x=0,w=A.n(y.H),v=this,u
var $async$IV=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cmQ(v))
x=2
return A.d(C.cO_(v.a.c),$async$IV)
case 2:u=e
if(v.c!=null)v.p(new C.cmR(v,u))
return A.l(null,w)}})
return A.m($async$IV,w)},
aSR(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nR("",d.c,"pay_request",d.d/100,x,x,new C.cmO(this),!1,new C.cmP(d),B.W0,x,w,C.dKo(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Uk(this.aSR(t),u)
x=s?"Pagar":C.dCA(t.a)
if(s)s=D.aIC
else{s=t.a
w=y.p
v=A.a([A.bM(A.a2y(s==="paid"?B.iL:B.qq,3,u,120),u,u),B.R,A.h(C.dCz(s),u,u,u,u,B.hg,B.a5,u,u),B.bi],w)
if(s==="error")B.e.n(v,A.a([new C.wc("Tentar outra vez",this.gaZF(),!1,!1,u),B.ad,new C.wc("Fechar",new C.cmS(d),!0,!1,u)],w))
else v.push(new C.wc("OK",new C.cmT(d),!1,!1,u))
s=v}return new C.aP2(x,s,u)}}
C.aP2.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=A.a4(A.cy(B.br,x,B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cym(d),x,x,x,x,x,x,!1,B.aH),1),u=y.p,t=A.a([A.bM(A.y(x,x,B.r,x,x,new A.J(N.un,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aB,A.O(A.a([A.a4(A.h(this.c,x,x,x,x,B.bk,x,x,x),1),A.pX(B.el,new C.cyn(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a_],u)
B.e.n(t,this.d)
return A.fF(!1,B.aG,!0,x,A.z(A.a([v,A.y(x,A.z(t,B.E,B.h,B.J),B.r,x,x,M.KB,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.iZ,B.l),B.r,x,0,x,x,x,x,x,B.f_)}}
var z=a.updateTypes(["F<~>()","~()","M(N,m5<FX>)","~(c)","c(c)"])
C.cLc.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:136}
C.cwA.prototype={
$0(){var x=this.a
return x.f=x.a4D(0,this.b)},
$S:0}
C.cwB.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4D(0,this.b),this.c)},
$S:0}
C.cwI.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bYm
x=y.p
w=A.a([A.O(A.a([A.pX(B.lF,new C.cwH(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.c82,B.bN],x))
else w.push(B.a_)
x=this.a
if(!v)B.e.n(w,x.be6(t))
else B.e.n(w,x.bdp(t))
return A.d6(w,u,B.D4,u,u,!1,!1)},
$S:z+2}
C.cwH.prototype={
$0(){return A.am(this.a,!1).ia()},
$S:0}
C.cwG.prototype={
$0(){var x=this.a
return x.p(new C.cwF(x))},
$S:0}
C.cwF.prototype={
$0(){var x=this.a
return x.d=x.L7()},
$S:0}
C.cwE.prototype={
$0(){var x=this.a.c
x.toString
return A.ad(x).ak("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.cwC.prototype={
$0(){return this.a.RI(this.b,this.c)},
$S:0}
C.cwD.prototype={
$0(){var x=this.a.c
x.toString
return A.ad(x).ak("/cobrar",null,y.X)},
$S:0}
C.bMl.prototype={
$0(){},
$S:0}
C.bOu.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aP(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dP(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bOn.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bOo.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bOp.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bOB.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.fO(new A.ac(Date.now(),0,!1)))x.a5j("expired")
else x.p(new C.bOA())},
$S:65}
C.bOA.prototype={
$0(){},
$S:0}
C.bOC.prototype={
$1(d){return this.aEU(d)},
aEU(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.alf(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a5j("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:451}
C.bOt.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ac(Date.now(),0,!1)},
$S:0}
C.bOz.prototype={
$1(d){var x=null
return new A.eS(D.can,D.chj,A.a([A.cA(B.mu,x,x,new C.bOx(d),x,x),A.bE(D.chb,new C.bOy(this.a,d),x)],y.p),x)},
$S:19}
C.bOx.prototype={
$0(){return A.am(this.a,!1).bm()},
$S:0}
C.bOy.prototype={
$0(){A.am(this.b,!1).bm()
var x=this.a.c
x.toString
A.ad(x).ak("/partner-payments/setup",null,y.X)},
$S:0}
C.bOl.prototype={
$1(d){var x=null
return new A.eS(D.cgH,D.cft,A.a([A.cA(D.ceR,x,x,new C.bOj(d),x,x),A.bE(D.ccm,new C.bOk(d),x)],y.p),x)},
$S:19}
C.bOj.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.bOk.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.bOm.prototype={
$0(){return this.a.r=null},
$S:0}
C.bOs.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.jt(0,B.jc)},
$S:0}
C.bOD.prototype={
$2(d,e){if(!d)this.a.alb()},
$S:184}
C.bOq.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a4(A.b9(x,!0,x,A.fF(!1,B.aG,!0,x,A.eR(!1,t,!0,A.aH(A.bM(w?D.aDZ:A.h(d,x,x,x,x,B.p8,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,new C.bOr(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fI(u,D.Kn),x,x,B.cR),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x),1)},
$S:236}
C.bOr.prototype={
$0(){return this.a.be2(this.b)},
$S:0}
C.bOw.prototype={
$2(d,e){var x=null
return A.y(x,A.O(A.a([A.a4(A.h(d,x,x,x,x,B.ce,x,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.KA,x,x,x,B.cm,x,x,x)},
$S:1368}
C.bOv.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).ia()},
$S:0}
C.cmQ.prototype={
$0(){return this.a.d=null},
$S:0}
C.cmR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cmO.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aFa(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aFa(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.alf(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.ajU)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b_Q(A.q(t)))
v=A.cO0(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:137}
C.cmP.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oJ
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.alf(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.Z(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1369}
C.cmS.prototype={
$0(){return A.ad(this.a).ae(null)},
$S:0}
C.cmT.prototype={
$0(){return A.ad(this.a).ae(null)},
$S:0}
C.cym.prototype={
$0(){return A.ad(this.a).ae(null)},
$S:0}
C.cyn.prototype={
$0(){return A.ad(this.a).ae(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dKo","dCy",4)
var u
w(u=C.acc.prototype,"galc","RJ",0)
v(u,"gbab","a5j",3)
w(u,"gaZE","Dn",0)
w(u,"gb94","aoW",1)
w(u,"gaZD","alb",1)
w(C.afY.prototype,"gaZF","IV",0)})();(function inheritance(){var x=a.inheritMany
x(A.K,[C.avE,C.a6c,C.aym,C.FX])
x(A.bx,[C.cLc,C.bOB,C.bOC,C.bOz,C.bOl,C.bOq,C.cmO])
x(A.M,[C.aju,C.H0,C.wn,C.wc,C.aP2])
x(A.G,[C.FY,C.Df,C.Fh])
x(A.Y,[C.aOm,C.acc,C.afY])
x(A.bQ,[C.cwA,C.cwB,C.cwH,C.cwG,C.cwF,C.cwE,C.cwC,C.cwD,C.bMl,C.bOu,C.bOn,C.bOo,C.bOp,C.bOA,C.bOt,C.bOx,C.bOy,C.bOj,C.bOk,C.bOm,C.bOs,C.bOr,C.bOv,C.cmQ,C.cmR,C.cmP,C.cmS,C.cmT,C.cym,C.cyn])
x(A.cL,[C.cwI,C.bOD,C.bOw])})()
A.bu(b.typeUniverse,JSON.parse('{"aju":{"M":[],"e":[],"f":[]},"H0":{"M":[],"e":[],"f":[]},"FY":{"G":[],"e":[],"f":[]},"aOm":{"Y":["FY"]},"wn":{"M":[],"e":[],"f":[]},"wc":{"M":[],"e":[],"f":[]},"Df":{"G":[],"e":[],"f":[]},"acc":{"Y":["Df"]},"Fh":{"G":[],"e":[],"f":[]},"afY":{"Y":["Fh"]},"aP2":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.x
return{D:x("cK"),E:x("r<aym>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dh"),K:x("K"),y:x("a6c"),m:x("tE"),k:x("+(c,bm)"),R:x("+at,result(ac?,c)"),u:x("+error,request(c?,avE?)"),A:x("FX"),N:x("c"),v:x("aN<FX>"),q:x("dr"),x:x("B"),z:x("@"),g:x("t<@>?"),X:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Kn=new A.bg(B.fc,0.5,B.ai,-1)
D.afd=new A.dN(D.Kn,B.aa,B.aa,B.aa)
D.KA=new A.J(null,null,D.afd,null,null,null,B.x)
D.ajU=new A.Dl("invalid_state")
D.asF=new A.a3(14,18,14,18)
D.atM=new A.a3(20,8,20,20)
D.aCC=new A.aZ(61109,"MaterialIcons",null,!0)
D.aDZ=new A.b8(D.aCC,22,B.z,null,null,null)
D.aFq=new A.dC(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bt,null,null,B.bt,B.bt,!0,null,null,null,null)
D.bY0=new A.iz(40,40,20,B.t,0,null)
D.bXT=new A.iz(null,32,12,B.t,1,null)
D.aA3=new A.bK(1,B.at,D.bXT,null)
D.bwP=x([D.bY0,B.ae,D.aA3],y.p)
D.bUa=new A.n7(B.bF,B.h,B.l,B.v,null,B.c5,null,0,D.bwP,null)
D.bXW=new A.iz(null,120,22,B.t,1,null)
D.bY_=new A.iz(null,56,22,B.t,2,null)
D.bY1=new A.iz(null,52,26,B.t,2,null)
D.aIC=x([D.bUa,B.bN,D.bXW,B.R,D.bY_,B.a_,D.bY1],y.p)
D.bxH=x(["1","2","3"],y.s)
D.bwn=x(["4","5","6"],y.s)
D.buc=x(["7","8","9"],y.s)
D.b6U=x(["00","0","del"],y.s)
D.bCn=x([D.bxH,D.bwn,D.buc,D.b6U],A.x("r<t<c>>"))
D.a29=new C.a6c("error",null,"",0,null)
D.bRf=new A.Z("Cancelado",!1)
D.bRm=new A.Z("Expirou",!1)
D.bSz=new A.Z("\xc0 espera\u2026",!1)
D.bT2=new A.bV(I.kC,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bTw=new A.bV(B.hC,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTJ=new A.bV(B.kB,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTL=new A.bV(B.Eh,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bzm=x([],y.E)
D.Hg=new C.FX("error",null,null,null,D.bzm,"entry",null)
D.auO=new A.nA(B.iL,150,3,null,null)
D.aju=new A.f1(B.K,null,null,D.auO,null)
D.bXH=new A.bY(null,214,D.aju,null)
D.bYm=new A.vV(!1,3,!1,null)
D.c1i=new A.Q(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5k=new A.Q(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c82=new A.D("Quem \xe9",null,B.hR,null,null,null,null,null,null,null,null)
D.can=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cc2=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mq,null,null,null,null,null,null,null,null)
D.ccm=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.cdO=new A.D("O qu\xea",null,B.L,null,null,null,null,null,null,null,null)
D.ceo=new A.D("Cobrar",null,B.kX,null,null,null,null,null,null,null,null)
D.ceI=new A.D("Ver perfil",null,K.tb,null,null,null,null,null,null,null,null)
D.ceR=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cfm=new A.D("Leste o QR agora",null,B.L,null,null,null,null,null,null,null,null)
D.cft=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.cgH=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.chb=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.chj=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.cpc=new C.wn("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cpd=new C.wn("Verificado",!0,null)
D.acZ=new C.wn("Por registar",!1,null)
D.cpf=new C.wn("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVd","cUI",()=>{var w=A.W(16)
return A.dow(A.bA(B.fc,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["Xo6YGbnT0IXDUbVSTP97t6niO/0="]=a.current})($__dart_deferred_initializers__);