((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cJx(d,e){return C.dJW(d,e)},
dJW(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cJx=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aM("create_pay_request",A.T(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cJx)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.d5(A.q(J.i(s,"expires_at")))
p=p==null?null:p.dQ()
if(p==null)p=new A.ac(Date.now(),0,!1).em(6e8)
v=new A.Z8(null,new C.avY(r,q,p))
x=1
break}r=r.b(s)?A.q(J.i(s,"result")):"error"
v=new A.Z8(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.Z8("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cJx,w)},
cIJ(d){return C.dJf(d)},
dJf(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cIJ=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aM("cancel_pay_request",A.T(["p_id",d],y.N,s),s),$async$cIJ)
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
return A.m($async$cIJ,w)},
dLN(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.Mx(0,"pay-request-"+d,B.yM).Oz(new C.cLA(e),B.Ha,new G.FA(H.yz,"id",d),"public","pay_requests").Qv(0)},
cOi(d){return C.dN0(d)},
dN0(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cOi=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aM("pay_request_info",A.T(["p_code",d],y.N,q),q),$async$cOi)
case 7:s=f
if(!y.f.b(s)){v=D.a2J
x=1
break}r=A.q(J.i(s,"result"))
q=A.C(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.q(p==null?"":p)
o=A.aI(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.i(s,"description"))
v=new C.a6q(r,q,p,o,n)
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
return A.m($async$cOi,w)},
alI(d){return C.dKj(d)},
dKj(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$alI=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f6("event-pay",d),$async$alI)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.he(r,o,n):A.T(["error","unknown_error"],o,n)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
if(o instanceof A.pq){q=o
p=q.b
o=y.N
n=y.z
o=y.f.b(p)?J.he(p,o,n):A.T(["error","unknown_error"],o,n)
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
return A.m($async$alI,w)},
avY:function avY(d,e,f){this.a=d
this.b=e
this.c=f},
cLA:function cLA(d){this.a=d},
a6q:function a6q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cSu(d){return C.dNE(d)},
dNE(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cSu=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aM("scan_qr",A.T(["p_token",b0],y.N,o),o),$async$cSu)
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
a1=A.d5(A.q(a1==null?"":a1))
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
a7=A.d5(A.q(a7==null?"":a7))
a7=a7==null?null:a7.dQ()
J.o(h.h(i,"can_charge"),!0)
J.bv(r,new C.ayG(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dJ(p)
p=p===!0?"entry":"profile"}k=A.C(J.i(s,"profile_id"))
v=new C.G1(o,n,m,l,r,p,k)
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
return A.m($async$cSu,w)},
aW_(d,e){return C.dND(d,e)},
dND(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aW_=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aM("scan_booking_arrival",A.T(["p_scan",d,"p_booking",e.c],r,q),q),$async$aW_)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aM("scan_check_in",A.T(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aW_)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.Z6(null,"error")
x=1
break}r=A.q(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d5(A.q(q==null?"":q))
q=q==null?null:q.dQ()
v=new A.Z6(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.Z6(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aW_,w)},
ayG:function ayG(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_f(d){return B.f.aW(B.j.k(A.id(d)),2,"0")+":"+B.f.aW(B.j.k(A.i_(d)),2,"0")},
d93(d){return new C.G2(d,null)},
doQ(){return new C.Dk(null)},
dvu(d){return new C.Fm(d,null)},
dCA(d){var x
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
default:x=A.aVO(d)
break}return x},
dCC(d){var x
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
dCB(d){var x
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
ajS:function ajS(d,e){this.c=d
this.a=e},
H8:function H8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
G2:function G2(d,e){this.c=d
this.a=e},
aOU:function aOU(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cwH:function cwH(d,e){this.a=d
this.b=e},
cwI:function cwI(d,e,f){this.a=d
this.b=e
this.c=f},
cwP:function cwP(d){this.a=d},
cwO:function cwO(d){this.a=d},
cwN:function cwN(d){this.a=d},
cwM:function cwM(d){this.a=d},
cwL:function cwL(d,e){this.a=d
this.b=e},
cwJ:function cwJ(d,e,f){this.a=d
this.b=e
this.c=f},
cwK:function cwK(d){this.a=d},
ws:function ws(d,e,f){this.c=d
this.d=e
this.a=f},
wh:function wh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bMo:function bMo(){},
Dk:function Dk(d){this.a=d},
aco:function aco(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bOx:function bOx(d,e){this.a=d
this.b=e},
bOq:function bOq(d){this.a=d},
bOr:function bOr(d){this.a=d},
bOs:function bOs(d,e){this.a=d
this.b=e},
bOE:function bOE(d,e){this.a=d
this.b=e},
bOD:function bOD(){},
bOF:function bOF(d,e){this.a=d
this.b=e},
bOw:function bOw(d,e){this.a=d
this.b=e},
bOC:function bOC(d){this.a=d},
bOA:function bOA(d){this.a=d},
bOB:function bOB(d,e){this.a=d
this.b=e},
bOo:function bOo(){},
bOm:function bOm(d){this.a=d},
bOn:function bOn(d){this.a=d},
bOp:function bOp(d){this.a=d},
bOv:function bOv(d){this.a=d},
bOG:function bOG(d){this.a=d},
bOt:function bOt(d){this.a=d},
bOu:function bOu(d,e){this.a=d
this.b=e},
bOz:function bOz(){},
bOy:function bOy(d){this.a=d},
Fm:function Fm(d,e){this.c=d
this.a=e},
agf:function agf(){this.c=this.a=this.d=null},
cmO:function cmO(d){this.a=d},
cmP:function cmP(d,e){this.a=d
this.b=e},
cmM:function cmM(d){this.a=d},
cmN:function cmN(d){this.a=d},
cmQ:function cmQ(d){this.a=d},
cmR:function cmR(d){this.a=d},
aPA:function aPA(d,e,f){this.c=d
this.d=e
this.a=f},
cyt:function cyt(d){this.a=d},
cyu:function cyu(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[88]
G=c[123]
H=c[244]
C=a.updateHolder(c[14],C)
D=c[281]
I=c[236]
K=c[246]
F=c[282]
L=c[56]
M=c[284]
N=c[283]
C.avY.prototype={}
C.a6q.prototype={}
C.ayG.prototype={}
C.G1.prototype={
gaq(d){return this.c}}
C.ajS.prototype={
u(d){var x=null
return A.z(x,this.c,B.r,x,x,$.cUT(),x,x,x,B.cM,x,x,x)}}
C.H8.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.ch,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bF,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.z(x,A.O(w,B.v,B.h,B.l,0,x,x),B.r,x,x,D.KZ,x,x,x,B.dX,x,x,x)}}
C.G2.prototype={
P(){return new C.aOU(A.E(y.N,y.R))}}
C.aOU.prototype={
Ln(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$Ln=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cSu(u.a.c),$async$Ln)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ai(t).GR("/u/"+A.q(s),null,y.X)
v=new A.aO($.aU,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Ln,w)},
a59(d,e){var x=e.c
return x==null?"e"+e.b:x},
S5(d,e){return this.aWb(d,e)},
aWb(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$S5=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cwH(u,e))
t=d.b
t.toString
x=3
return A.d(C.aW_(t,e),$async$S5)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cwI(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$S5,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.Ln()
return A.cQ(null,B.bB,A.bF(!0,A.b8n(new C.cwP(x),w,y.A),null,B.a_,!0),!0,null)},
bfi(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bUp
break
case"own_code":x=D.bUC
break
case"not_found":x=D.bTW
break
default:x=D.bUE
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
q=A.a([B.l3,A.b6(r,o?B.V:B.fr,p,p,96),B.a1,A.h(v,p,p,p,p,B.hq,B.a6,p,p),B.R,A.h(u,p,p,p,p,D.c6w,B.a6,p,p)],x)
if(o)B.e.n(q,A.a([B.cU,A.bG(B.tC,new C.cwN(this),p)],x))
return q},
beD(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.cq(r,44,d.d,!1,!0,s),B.af,A.a4(A.x(A.a([A.h(r,s,s,s,s,B.iv,s,s,s),D.cgF],x),B.H,B.h,B.l,0,B.u),1),B.ag,D.cqX],x),B.v,B.h,B.l,0,s,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.S,new A.d1(B.bg,s,s,A.aH(A.h9(D.cg0,new C.cwL(this,d),A.fK(s,s,B.t,s,s,s,s,s,s,B.A,s,s,B.bV,s,B.ad,B.c9,s,s,s,s)),36,s),s)],x))
w=A.a([new C.ajS(A.x(w,B.G,B.h,B.l,0,B.u),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bt,D.cdn],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b8l(0,d,v[t]))
return w},
b8l(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a59(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
s=i}i=A.h(k?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",n,n,n,n,B.aO,n,n,n)
x=y.p
r=A.a([A.h(f.d,n,n,n,n,B.iv,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.R(F.qA,A.h(B.dv[A.fN(q)-1]+", "+A.aA(q)+" "+B.bn[A.ao(q)-1],n,n,n,n,B.O,n,n,n),n))
r.push(B.ae)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H8("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H8("Pessoas",A.q(p),n,n))
q.push(new C.H8("Chegada",n,v?new C.ws("Registada \xe0s "+C.d_f(w),!0,n):D.adN,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.ws(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cqZ
p=v?new C.ws("Registada \xe0s "+C.d_f(w),!0,n):D.adN
B.e.n(r,A.a([new C.H8("Bilhete",n,q,n),new C.H8("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.R(B.nJ,A.h(t,n,n,n,n,B.zu,n,n,n),n))
i=A.a([B.bt,i,B.av,new C.ajS(A.x(r,B.G,B.h,B.l,0,B.u),n)],x)
if(s||k)i.push(B.S)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cwJ(o,e,f):n
if(r===m)r=B.zc
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.l8,n,n,n)
t.push(A.a4(A.aH(A.bG(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ah)
x.push(A.a4(A.aH(A.h9(D.cfI,new C.cwK(o),A.fK(n,n,B.t,n,n,n,n,n,n,B.A,n,n,n,n,B.ad,B.c9,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.v,B.h,B.l,0,n,n))
return i}}
C.ws.prototype={
u(d){var x=null,w=this.d,v=w?B.cz:B.dV,u=A.W(999)
return A.z(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?B.cY:B.cq,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.I(v,x,x,u,x,x,B.y),x,x,x,B.dq,x,x,x)}}
C.wh.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.my:A.h(x.c,w,w,w,w,B.eK,w,w,w)
if(x.e)v=A.h9(u,x.d,A.fK(w,w,B.t,w,w,w,w,w,w,B.A,w,w,w,w,B.ad,B.c9,w,w,w,w))
else{v=v?new C.bMo():x.d
v=A.bG(u,v,A.co(B.A,B.A.ce(0.35),B.t,B.t,w,w,B.ad,w,w,w))}return A.aH(v,52,1/0)}}
C.Dk.prototype={
P(){return new C.aco(new A.aF(B.al,$.aa()))}}
C.aco.prototype={
m(){this.Vu()
var x=this.e
x.Y$=$.aa()
x.W$=0
this.a5()},
Vu(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.ys(v)}w.y=null
v=w.z
if(v!=null)v.aN(0)
v=w.Q
if(v!=null)v.aN(0)},
bfe(d){this.p(new C.bOx(this,d))},
S6(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$S6=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bOq(u))
t=B.f.C(u.e.a.a)
s=u.d
x=3
return A.d(C.cJx(s,t.length===0?null:t),$async$S6)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bOr(u))
q=r.b
if(q==null){s=r.a
v=u.bkq(s==null?"error":s)
x=1
break}u.p(new C.bOs(u,q))
u.bod(q)
case 1:return A.l(v,w)}})
return A.m($async$S6,w)},
bod(d){var x=this
x.Vu()
x.y=C.dLN(d.a,x.gbbm())
x.z=A.uc(B.fW,new C.bOE(x,d))
x.Q=A.uc(B.vd,new C.bOF(x,d))},
a5Q(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bOw(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aN(0)
x=w.Q
if(x!=null)x.aN(0)}},
bkq(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fV(!0,new C.bOC(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a2(A.c1(w,w,w,w,w,B.z,w,A.h(x,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
DD(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$DD=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fV(!0,new C.bOo(),t,y.x),$async$DD)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cIJ(s.a),$async$DD)
case 6:if(u.c==null){x=1
break}case 4:u.Vu()
u.p(new C.bOp(u))
case 1:return A.l(v,w)}})
return A.m($async$DD,w)},
apu(){this.Vu()
this.p(new C.bOv(this))},
alL(){var x,w=this
if(w.r!=null)if(w.w==="open")w.DD()
else w.apu()
else{x=w.c
x.toString
A.am(x,!1).iD()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.q1(B.lV,x.gb_s(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hq,w,w,w)
return A.boo(u,A.cQ(w,B.bB,A.bF(!0,new A.R(D.auE,A.x(A.a([new A.d1(B.bg,w,w,t,w),B.S,s,B.bt,A.a4(u?x.b8u():x.bfE(v),1)],y.p),B.G,B.h,B.l,0,B.u),w),w,B.a_,!0),!0,w),new C.bOG(x),y.K)},
b8u(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bOt(o),j=$.cUT(),i=y.p
j=A.z(n,A.x(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.O,B.a6,n,n),B.ae,A.b8(n,n,n,A.h(E.cJQ(m),n,n,n,n,D.c2o,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.v,B.h,B.l,0,B.u),B.r,n,n,j,n,n,n,D.atv,n,n,n)
m=A.W(999)
x=A.bD(B.fq,0.5)
m=A.a([j,B.ae,A.z(n,A.O(A.a([D.cf7,B.ah,A.a4(A.cs(n,B.a8,!1,n,!0,B.z,n,A.cu(),o.e,n,n,n,n,n,2,D.aGc,B.X,!0,n,!0,n,!1,n,B.aD,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.aq,n,n,n,n,n,n,n,n,n,n,n,B.l7,!0,B.at,n,B.hi,n,n,n,n),1)],i),B.v,B.h,B.l,0,n,n),B.r,n,n,new A.I(B.t,n,x,m,n,n,B.y),n,44,n,B.bV,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bDi[w]
x=B.e.gL(v)==="1"?16:10
u=A.a([],i)
for(t=A.eB(v,0,j),s=J.ap(t.a),r=t.b,t=new A.c4(s,r,A.u(t).i("c4<1>"));t.t();){q=t.c
q=q>=0?new A.a0(r+q,s.gE(s)):A.al(A.c6())
p=A.a([],i)
if(q.a>0)p.push(B.ah)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c0(n,x,n,n),A.O(u,B.v,B.h,B.l,0,n,n)],i))}m=A.a4(A.cZ(m,n,B.a_,n,n,!1,B.a2,!1),1)
j=o.f
return A.x(A.a([m,B.S,new C.wh("Mostrar o QR para pagar",l?o.galM():n,!1,j,n)],i),B.G,B.h,B.l,0,B.u)},
bfE(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cK(new A.ac(Date.now(),0,!1)).a
x=h<0?0:B.j.aQ(h,1e6)
w=""+B.j.aQ(x,60)+":"+B.f.aW(B.j.k(B.j.ar(x,60)),2,"0")
v=B.f.C(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.a0("Pago \xe0s "+C.d_f(h==null?new A.ac(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bSf
break
case"cancelled":h=D.bS8
break
default:h=D.bTs
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bOz()
q=j.c
q.toString
q=A.nU(q,!1).a0(0,$.ba(),y.D).b
p=q==null?i:q.x
q=$.cUT()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.C(p).length!==0)n.push(A.h(B.f.C(p),i,i,i,i,B.iv,B.a6,i,i))
n.push(new A.R(F.qA,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.O,B.a6,i,i),i))
n.push(B.S)
if(g)n.push(D.bYM)
else{m=A.W(16)
l=A.bD(B.fq,0.5)
k=f?1:0.15
n.push(A.z(i,A.fh(A.cY5(B.t,A.kG("/pagar/"+d.b),B.Hc,B.Hd,B.a_,"QR para pagar "+E.cJQ(j.d),186),k),B.r,i,i,new A.I(B.t,i,l,m,i,i,B.y),i,i,i,B.cM,i,i,i))}n.push(B.S)
n.push(A.h(E.cJQ(j.d),i,i,i,i,B.hq,i,i,i))
n.push(B.aX)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.O,B.a6,i,i))
if(f)B.e.n(n,A.a([B.ae,D.cqW],o))
q=A.z(i,A.x(n,B.v,B.h,B.l,0,B.u),B.r,i,i,q,i,i,i,B.cM,i,i,i)
n=A.b8(i,i,i,h.$2("Estado",new C.ws(r,t,i)),!1,i,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a4(A.cZ(A.a([q,B.aC,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bF,i,i,i))],o),i,B.a_,i,i,!1,B.a2,!1),1),B.S],o)
if(f)h.push(new C.wh("Cancelar cobran\xe7a",j.gb_t(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wh("Nova cobran\xe7a",j.gbaf(),!1,!1,i),B.ae,new C.wh("Fechar",new C.bOy(j),!0,!1,i)],o))
else h.push(new C.wh("Mostrar outro QR",j.galM(),!1,j.f,i))
return A.x(h,B.G,B.h,B.l,0,B.u)}}
C.Fm.prototype={
P(){return new C.agf()}}
C.agf.prototype={
ad(){this.ao()
this.Jc()},
Jc(){var x=0,w=A.n(y.H),v=this,u
var $async$Jc=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cmO(v))
x=2
return A.d(C.cOi(v.a.c),$async$Jc)
case 2:u=e
if(v.c!=null)v.p(new C.cmP(v,u))
return A.l(null,w)}})
return A.m($async$Jc,w)},
aTI(d){var x=null,w=d.e,v=w==null?x:B.f.C(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nS("",d.c,"pay_request",d.d/100,x,x,new C.cmM(this),!1,new C.cmN(d),B.Wy,x,w,C.dKm(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Ux(this.aTI(t),u)
x=s?"Pagar":C.dCC(t.a)
if(s)s=D.aJs
else{s=t.a
w=y.p
v=A.a([A.bK(A.a2N(s==="paid"?B.jM:B.qJ,3,u,120),u,u),B.S,A.h(C.dCB(s),u,u,u,u,B.hl,B.a6,u,u),B.bi],w)
if(s==="error")B.e.n(v,A.a([new C.wh("Tentar outra vez",this.gb_u(),!1,!1,u),B.ae,new C.wh("Fechar",new C.cmQ(d),!0,!1,u)],w))
else v.push(new C.wh("OK",new C.cmR(d),!1,!1,u))
s=v}return new C.aPA(x,s,u)}}
C.aPA.prototype={
u(d){var x=null,w=A.ax(d,x,y.w).w,v=A.a4(A.cM(B.bz,x,B.X,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cyt(d),x,x,x,x,x,x,!1,B.aL),1),u=y.p,t=A.a([A.bK(A.z(x,x,B.r,x,x,new A.I(N.uC,x,x,A.W(3),x,x,B.y),x,5,x,x,x,x,40),x,x),B.aC,A.O(A.a([A.a4(A.h(this.c,x,x,x,x,B.bl,x,x,x),1),A.q1(B.em,new C.cyu(d),"Fechar")],u),B.v,B.h,B.l,0,x,x),B.a1],u)
B.e.n(t,this.d)
return A.fs(!1,B.aE,!0,x,A.x(A.a([v,A.z(x,A.x(t,B.G,B.h,B.K,0,B.u),B.r,x,x,M.L_,x,x,x,new A.a2(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.j2,B.l,0,B.u),B.r,x,0,x,x,x,x,x,B.eA)}}
var z=a.updateTypes(["F<~>()","~()","J(N,m3<G1>)","~(c)","c(c)"])
C.cLA.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:155}
C.cwH.prototype={
$0(){var x=this.a
return x.f=x.a59(0,this.b)},
$S:0}
C.cwI.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a59(0,this.b),this.c)},
$S:0}
C.cwP.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bZs
x=y.p
w=A.a([A.O(A.a([A.q1(B.lV,new C.cwO(d),"Voltar")],x),B.v,B.h,B.l,0,u,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.S,D.c9i,B.bt],x))
else w.push(B.a1)
x=this.a
if(!v)B.e.n(w,x.bfi(t))
else B.e.n(w,x.beD(t))
return A.cZ(w,u,B.Dj,u,u,!1,B.a2,!1)},
$S:z+2}
C.cwO.prototype={
$0(){return A.am(this.a,!1).iD()},
$S:0}
C.cwN.prototype={
$0(){var x=this.a
return x.p(new C.cwM(x))},
$S:0}
C.cwM.prototype={
$0(){var x=this.a
return x.d=x.Ln()},
$S:0}
C.cwL.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).aw("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.cwJ.prototype={
$0(){return this.a.S5(this.b,this.c)},
$S:0}
C.cwK.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).aw("/cobrar",null,y.X)},
$S:0}
C.bMo.prototype={
$0(){},
$S:0}
C.bOx.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aQ(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dT(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bOq.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bOr.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bOs.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bOE.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.ha(new A.ac(Date.now(),0,!1)))x.a5Q("expired")
else x.p(new C.bOD())},
$S:66}
C.bOD.prototype={
$0(){},
$S:0}
C.bOF.prototype={
$1(d){return this.aFI(d)},
aFI(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.alI(A.T(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a5Q("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:481}
C.bOw.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ac(Date.now(),0,!1)},
$S:0}
C.bOC.prototype={
$1(d){var x=null
return new A.eU(D.cbE,D.ciF,A.a([A.cx(B.mL,x,x,new C.bOA(d),x,x),A.bG(D.cix,new C.bOB(this.a,d),x)],y.p),x)},
$S:19}
C.bOA.prototype={
$0(){return A.am(this.a,!1).bu()},
$S:0}
C.bOB.prototype={
$0(){A.am(this.b,!1).bu()
var x=this.a.c
x.toString
A.ai(x).aw("/partner-payments/setup",null,y.X)},
$S:0}
C.bOo.prototype={
$1(d){var x=null
return new A.eU(D.ci1,D.cgM,A.a([A.cx(D.cg8,x,x,new C.bOm(d),x,x),A.bG(D.cdH,new C.bOn(d),x)],y.p),x)},
$S:19}
C.bOm.prototype={
$0(){return A.am(this.a,!1).af(!1)},
$S:0}
C.bOn.prototype={
$0(){return A.am(this.a,!1).af(!0)},
$S:0}
C.bOp.prototype={
$0(){return this.a.r=null},
$S:0}
C.bOv.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.j9(0,B.jf)},
$S:0}
C.bOG.prototype={
$2(d,e){if(!d)this.a.alL()},
$S:165}
C.bOt.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a4(A.b8(x,!0,x,A.fs(!1,B.aE,!0,x,A.eC(!1,t,!0,A.aH(A.bK(w?D.aEJ:A.h(d,x,x,x,x,B.pk,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bOu(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fF(u,D.KM),x,x,B.cD),!1,x,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:273}
C.bOu.prototype={
$0(){return this.a.bfe(this.b)},
$S:0}
C.bOz.prototype={
$2(d,e){var x=null
return A.z(x,A.O(A.a([A.a4(A.h(d,x,x,x,x,B.ch,x,x,x),1),e],y.p),B.v,B.h,B.l,0,x,x),B.r,x,x,D.KZ,x,x,x,B.cn,x,x,x)},
$S:1373}
C.bOy.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).iD()},
$S:0}
C.cmO.prototype={
$0(){return this.a.d=null},
$S:0}
C.cmP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cmM.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aFZ(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aFZ(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.alI(A.T(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.akJ)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b0m(A.q(t)))
v=A.cOj(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:135}
C.cmN.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oW
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.alI(A.T(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.a0(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1374}
C.cmQ.prototype={
$0(){return A.ai(this.a).af(null)},
$S:0}
C.cmR.prototype={
$0(){return A.ai(this.a).af(null)},
$S:0}
C.cyt.prototype={
$0(){return A.ai(this.a).af(null)},
$S:0}
C.cyu.prototype={
$0(){return A.ai(this.a).af(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dKm","dCA",4)
var u
w(u=C.aco.prototype,"galM","S6",0)
v(u,"gbbm","a5Q",3)
w(u,"gb_t","DD",0)
w(u,"gbaf","apu",1)
w(u,"gb_s","alL",1)
w(C.agf.prototype,"gb_u","Jc",0)})();(function inheritance(){var x=a.inheritMany
x(A.L,[C.avY,C.a6q,C.ayG,C.G1])
x(A.bw,[C.cLA,C.bOE,C.bOF,C.bOC,C.bOo,C.bOt,C.cmM])
x(A.J,[C.ajS,C.H8,C.ws,C.wh,C.aPA])
x(A.G,[C.G2,C.Dk,C.Fm])
x(A.Y,[C.aOU,C.aco,C.agf])
x(A.bQ,[C.cwH,C.cwI,C.cwO,C.cwN,C.cwM,C.cwL,C.cwJ,C.cwK,C.bMo,C.bOx,C.bOq,C.bOr,C.bOs,C.bOD,C.bOw,C.bOA,C.bOB,C.bOm,C.bOn,C.bOp,C.bOv,C.bOu,C.bOy,C.cmO,C.cmP,C.cmN,C.cmQ,C.cmR,C.cyt,C.cyu])
x(A.cL,[C.cwP,C.bOG,C.bOz])})()
A.bs(b.typeUniverse,JSON.parse('{"ajS":{"J":[],"e":[],"f":[]},"H8":{"J":[],"e":[],"f":[]},"G2":{"G":[],"e":[],"f":[]},"aOU":{"Y":["G2"]},"ws":{"J":[],"e":[],"f":[]},"wh":{"J":[],"e":[],"f":[]},"Dk":{"G":[],"e":[],"f":[]},"aco":{"Y":["Dk"]},"Fm":{"G":[],"e":[],"f":[]},"agf":{"Y":["Fm"]},"aPA":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),E:x("r<ayG>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("di"),K:x("L"),y:x("a6q"),m:x("tK"),k:x("+(c,bo)"),R:x("+at,result(ac?,c)"),u:x("+error,request(c?,avY?)"),A:x("G1"),N:x("c"),v:x("aO<G1>"),q:x("dp"),x:x("y"),z:x("@"),g:x("t<@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.KM=new A.bc(B.fq,0.5,B.ai,-1)
D.ag4=new A.dN(D.KM,B.ac,B.ac,B.ac)
D.KZ=new A.I(null,null,D.ag4,null,null,null,B.y)
D.akJ=new A.Dp("invalid_state")
D.atv=new A.a2(14,18,14,18)
D.auE=new A.a2(20,8,20,20)
D.aDj=new A.aV(61109,"MaterialIcons",null,!0)
D.aEJ=new A.b7(D.aDj,22,B.A,null,null,null)
D.aGc=new A.dB(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bu,null,null,B.bu,B.bu,!0,null,null,null,null)
D.bZ4=new A.iz(40,40,20,B.t,0,null)
D.bYX=new A.iz(null,32,12,B.t,1,null)
D.aAW=new A.bI(1,B.ar,D.bYX,null)
D.bxM=x([D.bZ4,B.af,D.aAW],y.p)
D.bV9=new A.mo(B.bw,B.h,B.l,B.v,null,B.u,null,0,D.bxM,null)
D.bZ_=new A.iz(null,120,22,B.t,1,null)
D.bZ3=new A.iz(null,56,22,B.t,2,null)
D.bZ5=new A.iz(null,52,26,B.t,2,null)
D.aJs=x([D.bV9,B.bt,D.bZ_,B.S,D.bZ3,B.a1,D.bZ5],y.p)
D.byE=x(["1","2","3"],y.s)
D.bxk=x(["4","5","6"],y.s)
D.bv9=x(["7","8","9"],y.s)
D.b7L=x(["00","0","del"],y.s)
D.bDi=x([D.byE,D.bxk,D.bv9,D.b7L],A.w("r<t<c>>"))
D.a2J=new C.a6q("error",null,"",0,null)
D.bS8=new A.a0("Cancelado",!1)
D.bSf=new A.a0("Expirou",!1)
D.bTs=new A.a0("\xc0 espera\u2026",!1)
D.bTW=new A.bW(I.kO,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bUp=new A.bW(B.hK,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bUC=new A.bW(B.kN,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bUE=new A.bW(B.Ev,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bAh=x([],y.E)
D.Hv=new C.G1("error",null,null,null,D.bAh,"entry",null)
D.avF=new A.nC(B.jM,150,3,null,null)
D.akj=new A.fa(B.L,null,null,D.avF,null)
D.bYM=new A.c0(null,214,D.akj,null)
D.bZs=new A.vZ(!1,3,!1,null)
D.c2o=new A.P(!0,B.A,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6w=new A.P(!0,B.A,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c9i=new A.D("Quem \xe9",null,B.hq,null,null,null,null,null,null,null,null)
D.cbE=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cdn=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mH,null,null,null,null,null,null,null,null)
D.cdH=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.cf7=new A.D("O qu\xea",null,B.O,null,null,null,null,null,null,null,null)
D.cfI=new A.D("Cobrar",null,B.l8,null,null,null,null,null,null,null,null)
D.cg0=new A.D("Ver perfil",null,K.tt,null,null,null,null,null,null,null,null)
D.cg8=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cgF=new A.D("Leste o QR agora",null,B.O,null,null,null,null,null,null,null,null)
D.cgM=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.ci1=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.cix=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.ciF=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.cqW=new C.ws("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cqX=new C.ws("Verificado",!0,null)
D.adN=new C.ws("Por registar",!1,null)
D.cqZ=new C.ws("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVa","cUT",()=>{var w=A.W(16)
return A.doz(A.bD(B.fq,0.5),w,null,B.t,null,null,B.y)})})()};
(a=>{a["QpD8HlZY0hlLj9E6/RQbYTWyIQE="]=a.current})($__dart_deferred_initializers__);