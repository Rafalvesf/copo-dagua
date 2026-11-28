((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cH6(d,e){return C.dH9(d,e)},
dH9(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cH6=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.S().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aM("create_pay_request",A.T(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cH6)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.dq(A.q(J.i(s,"expires_at")))
p=p==null?null:p.e0()
if(p==null)p=new A.ad(Date.now(),0,!1).e5(6e8)
v=new A.YS(null,new C.avt(r,q,p))
x=1
break}r=r.b(s)?A.q(J.i(s,"result")):"error"
v=new A.YS(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.YS("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cH6,w)},
cGi(d){return C.dGt(d)},
dGt(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cGi=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.S().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aM("cancel_pay_request",A.T(["p_id",d],y.N,s),s),$async$cGi)
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
return A.m($async$cGi,w)},
dJ_(d,e){var x=$.S().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.Mg(0,"pay-request-"+d,B.yE).Oh(new C.cJ8(e),B.H6,new G.Fv(H.yr,"id",d),"public","pay_requests").Qb(0)},
cLK(d){return C.dKc(d)},
dKc(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cLK=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.S().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aM("pay_request_info",A.T(["p_code",d],y.N,q),q),$async$cLK)
case 7:s=f
if(!y.f.b(s)){v=D.a2B
x=1
break}r=A.q(J.i(s,"result"))
q=A.D(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.q(p==null?"":p)
o=A.aL(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.D(J.i(s,"description"))
v=new C.a62(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a2B
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cLK,w)},
alb(d){return C.dHx(d)},
dHx(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$alb=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.S().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f6("event-pay",d),$async$alb)
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
if(o instanceof A.pl){q=o
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
return A.m($async$alb,w)},
avt:function avt(d,e,f){this.a=d
this.b=e
this.c=f},
cJ8:function cJ8(d){this.a=d},
a62:function a62(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cPW(d){return C.dKQ(d)},
dKQ(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cPW=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.S().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aM("scan_qr",A.T(["p_token",b0],y.N,o),o),$async$cPW)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.Hr
x=1
break}o=A.q(J.i(s,"result"))
n=A.D(J.i(s,"scan_id"))
m=A.D(J.i(s,"name"))
l=A.D(J.i(s,"avatar_url"))
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
d=A.D(h.h(i,"booking_id"))
a0=h.h(i,"event")
a0=A.q(a0==null?"Evento":a0)
a1=h.h(i,"date")
a1=A.dq(A.q(a1==null?"":a1))
a2=A.D(h.h(i,"booking_number"))
a3=A.aL(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.D(J.i(g,"status")):null
if(a5){a5=A.aL(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.dq(A.q(a7==null?"":a7))
a7=a7==null?null:a7.e0()
J.o(h.h(i,"can_charge"),!0)
J.by(r,new C.ayb(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.D(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dR(p)
p=p===!0?"entry":"profile"}k=A.D(J.i(s,"profile_id"))
v=new C.FX(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cT){v=D.Hr
x=1
break}else{v=D.Hr
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cPW,w)},
aVn(d,e){return C.dKP(d,e)},
dKP(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVn=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.S().b
p===$&&A.b()
x=10
return A.d(p.aM("scan_booking_arrival",A.T(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVn)
case 10:o=g
x=8
break
case 9:p=$.S().b
p===$&&A.b()
x=11
return A.d(p.aM("scan_check_in",A.T(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVn)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YQ(null,"error")
x=1
break}r=A.q(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.dq(A.q(q==null?"":q))
q=q==null?null:q.e0()
v=new A.YQ(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YQ(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVn,w)},
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
cXE(d){return B.f.aY(B.j.k(A.ic(d)),2,"0")+":"+B.f.aY(B.j.k(A.hY(d)),2,"0")},
d6m(d){return new C.FY(d,null)},
dm6(){return new C.Dc(null)},
dsL(d){return new C.Fh(d,null)},
dzQ(d){var x
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
default:x=A.aVb(d)
break}return x},
dzS(d){var x
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
dzR(d){var x
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
ajn:function ajn(d,e){this.c=d
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
cus:function cus(d,e){this.a=d
this.b=e},
cut:function cut(d,e,f){this.a=d
this.b=e
this.c=f},
cuA:function cuA(d){this.a=d},
cuz:function cuz(d){this.a=d},
cuy:function cuy(d){this.a=d},
cux:function cux(d){this.a=d},
cuw:function cuw(d,e){this.a=d
this.b=e},
cuu:function cuu(d,e,f){this.a=d
this.b=e
this.c=f},
cuv:function cuv(d){this.a=d},
wp:function wp(d,e,f){this.c=d
this.d=e
this.a=f},
we:function we(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bLo:function bLo(){},
Dc:function Dc(d){this.a=d},
ac1:function ac1(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bNt:function bNt(d,e){this.a=d
this.b=e},
bNm:function bNm(d){this.a=d},
bNn:function bNn(d){this.a=d},
bNo:function bNo(d,e){this.a=d
this.b=e},
bNA:function bNA(d,e){this.a=d
this.b=e},
bNz:function bNz(){},
bNB:function bNB(d,e){this.a=d
this.b=e},
bNs:function bNs(d,e){this.a=d
this.b=e},
bNy:function bNy(d){this.a=d},
bNw:function bNw(d){this.a=d},
bNx:function bNx(d,e){this.a=d
this.b=e},
bNk:function bNk(){},
bNi:function bNi(d){this.a=d},
bNj:function bNj(d){this.a=d},
bNl:function bNl(d){this.a=d},
bNr:function bNr(d){this.a=d},
bNC:function bNC(d){this.a=d},
bNp:function bNp(d){this.a=d},
bNq:function bNq(d,e){this.a=d
this.b=e},
bNv:function bNv(){},
bNu:function bNu(d){this.a=d},
Fh:function Fh(d,e){this.c=d
this.a=e},
afO:function afO(){this.c=this.a=this.d=null},
ckO:function ckO(d){this.a=d},
ckP:function ckP(d,e){this.a=d
this.b=e},
ckM:function ckM(d){this.a=d},
ckN:function ckN(d){this.a=d},
ckQ:function ckQ(d){this.a=d},
ckR:function ckR(d){this.a=d},
aP2:function aP2(d,e,f){this.c=d
this.d=e
this.a=f},
cwe:function cwe(d){this.a=d},
cwf:function cwf(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[88]
G=c[122]
H=c[242]
C=a.updateHolder(c[14],C)
D=c[279]
I=c[234]
K=c[245]
F=c[280]
L=c[56]
M=c[282]
N=c[281]
C.avt.prototype={}
C.a62.prototype={}
C.ayb.prototype={}
C.FX.prototype={
gaq(d){return this.c}}
C.ajn.prototype={
u(d){var x=null
return A.B(x,this.c,B.r,x,x,$.cSf(),x,x,x,B.cz,x,x,x)}}
C.H0.prototype={
u(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.ch,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bG,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.B(x,A.N(w,B.w,B.h,B.l,0,x,x),B.r,x,x,D.KU,x,x,x,B.ec,x,x,x)}}
C.FY.prototype={
P(){return new C.aOm(A.E(y.N,y.R))}}
C.aOm.prototype={
L7(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$L7=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cPW(u.a.c),$async$L7)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ai(t).GF("/u/"+A.q(s),null,y.X)
v=new A.aO($.aU,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$L7,w)},
a4E(d,e){var x=e.c
return x==null?"e"+e.b:x},
RH(d,e){return this.aVm(d,e)},
aVm(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$RH=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cus(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVn(t,e),$async$RH)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cut(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$RH,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.L7()
return A.cP(null,B.bz,A.bC(!0,A.cUn(new C.cuA(x),w,y.A),null,B.a_,!0),!0,null)},
be9(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bU4
break
case"own_code":x=D.bUh
break
case"not_found":x=D.bTB
break
default:x=D.bUj
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
q=A.a([B.mr,A.b3(r,o?B.U:B.fq,p,p,96),B.a1,A.h(v,p,p,p,p,B.hl,B.a6,p,p),B.S,A.h(u,p,p,p,p,D.c6c,B.a6,p,p)],x)
if(o)B.e.n(q,A.a([B.cN,A.bE(B.tt,new C.cuy(this),p)],x))
return q},
bdu(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.N(A.a([new A.cy(r,44,d.d,!1,!0,s),B.af,A.a4(A.A(A.a([A.h(r,s,s,s,s,B.ip,s,s,s),D.cgg],x),B.H,B.h,B.l,0,B.u),1),B.ag,D.cqx],x),B.w,B.h,B.l,0,s,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.d1(B.bg,s,s,A.aG(A.hf(D.cfC,new C.cuw(this,d),A.fP(s,s,B.t,s,s,s,s,s,s,B.A,s,s,B.bT,s,B.ad,B.c9,s,s,s,s)),36,s),s)],x))
w=A.a([new C.ajn(A.A(w,B.G,B.h,B.l,0,B.u),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bs,D.cd1],x))
else for(t=0;t<v.length;v.length===u||(0,A.K)(v),++t)B.e.n(w,this.b7l(0,d,v[t]))
return w},
b7l(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a4E(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
r=A.a([A.h(f.d,n,n,n,n,B.ip,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.Q(F.qu,A.h(B.ez[A.hi(q)-1]+", "+A.aI(q)+" "+B.bO[A.ax(q)-1],n,n,n,n,B.P,n,n,n),n))
r.push(B.ac)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H0("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H0("Pessoas",A.q(p),n,n))
q.push(new C.H0("Chegada",n,v?new C.wp("Registada \xe0s "+C.cXE(w),!0,n):D.adz,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wp(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cqz
p=v?new C.wp("Registada \xe0s "+C.cXE(w),!0,n):D.adz
B.e.n(r,A.a([new C.H0("Bilhete",n,q,n),new C.H0("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.Q(B.qw,A.h(t,n,n,n,n,B.zn,n,n,n),n))
i=A.a([B.bs,i,B.au,new C.ajn(A.A(r,B.G,B.h,B.l,0,B.u),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cuu(o,e,f):n
if(r===m)r=B.z4
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kZ,n,n,n)
t.push(A.a4(A.aG(A.bE(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ah)
x.push(A.a4(A.aG(A.hf(D.cfk,new C.cuv(o),A.fP(n,n,B.t,n,n,n,n,n,n,B.A,n,n,n,n,B.ad,B.c9,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.N(t,B.w,B.h,B.l,0,n,n))
return i}}
C.wp.prototype={
u(d){var x=null,w=this.d,v=w?B.d1:B.f7,u=A.W(999)
return A.B(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?B.dc:B.d0,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.M(v,x,x,u,x,x,B.y),x,x,x,B.dz,x,x,x)}}
C.we.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mp:A.h(x.c,w,w,w,w,B.eJ,w,w,w)
if(x.e)v=A.hf(u,x.d,A.fP(w,w,B.t,w,w,w,w,w,w,B.A,w,w,w,w,B.ad,B.c9,w,w,w,w))
else{v=v?new C.bLo():x.d
v=A.bE(u,v,A.cq(B.A,B.A.cc(0.35),B.t,B.t,w,w,B.ad,w,w,w))}return A.aG(v,52,1/0)}}
C.Dc.prototype={
P(){return new C.ac1(new A.aE(B.al,$.aa()))}}
C.ac1.prototype={
m(){this.UV()
var x=this.e
x.Y$=$.aa()
x.V$=0
this.a6()},
UV(){var x,w=this,v=w.y
if(v!=null){x=$.S().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yh(v)}w.y=null
v=w.z
if(v!=null)v.aL(0)
v=w.Q
if(v!=null)v.aL(0)},
be5(d){this.p(new C.bNt(this,d))},
RI(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$RI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bNm(u))
t=B.f.C(u.e.a.a)
s=u.d
x=3
return A.d(C.cH6(s,t.length===0?null:t),$async$RI)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bNn(u))
q=r.b
if(q==null){s=r.a
v=u.bjg(s==null?"error":s)
x=1
break}u.p(new C.bNo(u,q))
u.bn1(q)
case 1:return A.l(v,w)}})
return A.m($async$RI,w)},
bn1(d){var x=this
x.UV()
x.y=C.dJ_(d.a,x.gbaj())
x.z=A.u5(B.fS,new C.bNA(x,d))
x.Q=A.u5(B.v3,new C.bNB(x,d))},
a5i(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bNs(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aL(0)
x=w.Q
if(x!=null)x.aL(0)}},
bjg(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fR(!0,new C.bNy(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a3(A.c6(w,w,w,w,w,B.z,w,A.h(x,w,w,w,w,w,w,w,w),w,B.V,w,w,w,w,w,w,w,w,w,w))},
Ds(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Ds=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fR(!0,new C.bNk(),t,y.x),$async$Ds)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cGi(s.a),$async$Ds)
case 6:if(u.c==null){x=1
break}case 4:u.UV()
u.p(new C.bNl(u))
case 1:return A.l(v,w)}})
return A.m($async$Ds,w)},
aoK(){this.UV()
this.p(new C.bNr(this))},
al1(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Ds()
else w.aoK()
else{x=w.c
x.toString
A.am(x,!1).iz()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pW(B.lO,x.gaZB(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hl,w,w,w)
return A.bnJ(u,A.cP(w,B.bz,A.bC(!0,new A.Q(D.auo,A.A(A.a([new A.d1(B.bg,w,w,t,w),B.R,s,B.bs,A.a4(u?x.b7u():x.bev(v),1)],y.p),B.G,B.h,B.l,0,B.u),w),w,B.a_,!0),!0,w),new C.bNC(x),y.K)},
b7u(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bNp(o),j=$.cSf(),i=y.p
j=A.B(n,A.A(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.P,B.a6,n,n),B.ac,A.b8(n,n,n,A.h(E.cHp(m),n,n,n,n,D.c22,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.w,B.h,B.l,0,B.u),B.r,n,n,j,n,n,n,D.atd,n,n,n)
m=A.W(999)
x=A.bz(B.fp,0.5)
m=A.a([j,B.ac,A.B(n,A.N(A.a([D.ceK,B.ah,A.a4(A.cr(n,B.a8,!1,n,!0,B.z,n,A.cw(),o.e,n,n,n,n,n,2,D.aFW,B.Z,!0,n,!0,n,!1,n,B.aD,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.ar,n,n,n,n,n,n,n,n,n,n,n,B.kY,!0,B.aq,n,B.hc,n,n,n,n),1)],i),B.w,B.h,B.l,0,n,n),B.r,n,n,new A.M(B.t,n,x,m,n,n,B.y),n,44,n,B.bT,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bCY[w]
x=B.e.gM(v)==="1"?16:10
u=A.a([],i)
for(t=A.eB(v,0,j),s=J.aq(t.a),r=t.b,t=new A.c0(s,r,A.u(t).i("c0<1>"));t.t();){q=t.c
q=q>=0?new A.a3(r+q,s.gE(s)):A.aj(A.c3())
p=A.a([],i)
if(q.a>0)p.push(B.ah)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c1(n,x,n,n),A.N(u,B.w,B.h,B.l,0,n,n)],i))}m=A.a4(A.d0(m,n,B.a_,n,n,!1,B.a2,!1),1)
j=o.f
return A.A(A.a([m,B.R,new C.we("Mostrar o QR para pagar",l?o.gal2():n,!1,j,n)],i),B.G,B.h,B.l,0,B.u)},
bev(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cS(new A.ad(Date.now(),0,!1)).a
x=h<0?0:B.j.aT(h,1e6)
w=""+B.j.aT(x,60)+":"+B.f.aY(B.j.k(B.j.ap(x,60)),2,"0")
v=B.f.C(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.a3("Pago \xe0s "+C.cXE(h==null?new A.ad(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bRV
break
case"cancelled":h=D.bRO
break
default:h=D.bT7
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bNv()
q=j.c
q.toString
q=A.oB(q,!1).a0(0,$.ba(),y.D).b
p=q==null?i:q.x
q=$.cSf()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.C(p).length!==0)n.push(A.h(B.f.C(p),i,i,i,i,B.ip,B.a6,i,i))
n.push(new A.Q(F.qu,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.P,B.a6,i,i),i))
n.push(B.R)
if(g)n.push(D.bYr)
else{m=A.W(16)
l=A.bz(B.fp,0.5)
k=f?1:0.15
n.push(A.B(i,A.fe(A.cVu(B.t,A.kC("/pagar/"+d.b),B.H8,B.H9,B.a_,"QR para pagar "+E.cHp(j.d),186),k),B.r,i,i,new A.M(B.t,i,l,m,i,i,B.y),i,i,i,B.cz,i,i,i))}n.push(B.R)
n.push(A.h(E.cHp(j.d),i,i,i,i,B.hl,i,i,i))
n.push(B.b1)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.P,B.a6,i,i))
if(f)B.e.n(n,A.a([B.ac,D.cqw],o))
q=A.B(i,A.A(n,B.w,B.h,B.l,0,B.u),B.r,i,i,q,i,i,i,B.cz,i,i,i)
n=A.b8(i,i,i,h.$2("Estado",new C.wp(r,t,i)),!1,i,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a4(A.d0(A.a([q,B.aC,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bG,i,i,i))],o),i,B.a_,i,i,!1,B.a2,!1),1),B.R],o)
if(f)h.push(new C.we("Cancelar cobran\xe7a",j.gaZC(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.we("Nova cobran\xe7a",j.gb9b(),!1,!1,i),B.ac,new C.we("Fechar",new C.bNu(j),!0,!1,i)],o))
else h.push(new C.we("Mostrar outro QR",j.gal2(),!1,j.f,i))
return A.A(h,B.G,B.h,B.l,0,B.u)}}
C.Fh.prototype={
P(){return new C.afO()}}
C.afO.prototype={
ag(){this.aA()
this.IY()},
IY(){var x=0,w=A.n(y.H),v=this,u
var $async$IY=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.ckO(v))
x=2
return A.d(C.cLK(v.a.c),$async$IY)
case 2:u=e
if(v.c!=null)v.p(new C.ckP(v,u))
return A.l(null,w)}})
return A.m($async$IY,w)},
aSR(d){var x=null,w=d.e,v=w==null?x:B.f.C(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.ou("",d.c,"pay_request",d.d/100,x,x,new C.ckM(this),!1,new C.ckN(d),B.Wo,x,w,C.dHA(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Uf(this.aSR(t),u)
x=s?"Pagar":C.dzS(t.a)
if(s)s=D.aJ9
else{s=t.a
w=y.p
v=A.a([A.bO(A.a2s(s==="paid"?B.jE:B.qE,3,u,120),u,u),B.R,A.h(C.dzR(s),u,u,u,u,B.hi,B.a6,u,u),B.bi],w)
if(s==="error")B.e.n(v,A.a([new C.we("Tentar outra vez",this.gaZD(),!1,!1,u),B.ac,new C.we("Fechar",new C.ckQ(d),!0,!1,u)],w))
else v.push(new C.we("OK",new C.ckR(d),!1,!1,u))
s=v}return new C.aP2(x,s,u)}}
C.aP2.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=A.a4(A.cV(B.bV,x,B.Z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cwe(d),x,x,x,x,x,x,!1,B.aU),1),u=y.p,t=A.a([A.bO(A.B(x,x,B.r,x,x,new A.M(N.us,x,x,A.W(3),x,x,B.y),x,5,x,x,x,x,40),x,x),B.aC,A.N(A.a([A.a4(A.h(this.c,x,x,x,x,B.bk,x,x,x),1),A.pW(B.ei,new C.cwf(d),"Fechar")],u),B.w,B.h,B.l,0,x,x),B.a1],u)
B.e.n(t,this.d)
return A.fo(!1,B.aE,!0,x,A.A(A.a([v,A.B(x,A.A(t,B.G,B.h,B.K,0,B.u),B.r,x,x,M.KV,x,x,x,new A.a0(20,10,20,20+w.r.d),x,x,1/0)],u),B.w,B.iY,B.l,0,B.u),B.r,x,0,x,x,x,x,x,B.eA)}}
var z=a.updateTypes(["F<~>()","~()","H(O,nn<FX>)","~(c)","c(c)"])
C.cJ8.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:148}
C.cus.prototype={
$0(){var x=this.a
return x.f=x.a4E(0,this.b)},
$S:0}
C.cut.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4E(0,this.b),this.c)},
$S:0}
C.cuA.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bZ7
x=y.p
w=A.a([A.N(A.a([A.pW(B.lO,new C.cuz(d),"Voltar")],x),B.w,B.h,B.l,0,u,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.c8Y,B.bs],x))
else w.push(B.a1)
x=this.a
if(!v)B.e.n(w,x.be9(t))
else B.e.n(w,x.bdu(t))
return A.d0(w,u,B.De,u,u,!1,B.a2,!1)},
$S:z+2}
C.cuz.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
C.cuy.prototype={
$0(){var x=this.a
return x.p(new C.cux(x))},
$S:0}
C.cux.prototype={
$0(){var x=this.a
return x.d=x.L7()},
$S:0}
C.cuw.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).au("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.cuu.prototype={
$0(){return this.a.RH(this.b,this.c)},
$S:0}
C.cuv.prototype={
$0(){var x=this.a.c
x.toString
return A.ai(x).au("/cobrar",null,y.X)},
$S:0}
C.bLo.prototype={
$0(){},
$S:0}
C.bNt.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aT(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dW(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bNm.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bNn.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bNo.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bNA.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.h5(new A.ad(Date.now(),0,!1)))x.a5i("expired")
else x.p(new C.bNz())},
$S:67}
C.bNz.prototype={
$0(){},
$S:0}
C.bNB.prototype={
$1(d){return this.aET(d)},
aET(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.alb(A.T(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a5i("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:452}
C.bNs.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ad(Date.now(),0,!1)},
$S:0}
C.bNy.prototype={
$1(d){var x=null
return new A.eR(D.cbh,D.cig,A.a([A.cv(B.mC,x,x,new C.bNw(d),x,x),A.bE(D.ci8,new C.bNx(this.a,d),x)],y.p),x)},
$S:17}
C.bNw.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0}
C.bNx.prototype={
$0(){A.am(this.b,!1).bB()
var x=this.a.c
x.toString
A.ai(x).au("/partner-payments/setup",null,y.X)},
$S:0}
C.bNk.prototype={
$1(d){var x=null
return new A.eR(D.chD,D.cgm,A.a([A.cv(D.cfK,x,x,new C.bNi(d),x,x),A.bE(D.cdl,new C.bNj(d),x)],y.p),x)},
$S:17}
C.bNi.prototype={
$0(){return A.am(this.a,!1).ad(!1)},
$S:0}
C.bNj.prototype={
$0(){return A.am(this.a,!1).ad(!0)},
$S:0}
C.bNl.prototype={
$0(){return this.a.r=null},
$S:0}
C.bNr.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.j7(0,B.j9)},
$S:0}
C.bNC.prototype={
$2(d,e){if(!d)this.a.al1()},
$S:180}
C.bNp.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a4(A.b8(x,!0,x,A.fo(!1,B.aE,!0,x,A.eC(!1,t,!0,A.aG(A.bO(w?D.aEs:A.h(d,x,x,x,x,B.pd,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bNq(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fD(u,D.KG),x,x,B.cC),!1,x,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:239}
C.bNq.prototype={
$0(){return this.a.be5(this.b)},
$S:0}
C.bNv.prototype={
$2(d,e){var x=null
return A.B(x,A.N(A.a([A.a4(A.h(d,x,x,x,x,B.ch,x,x,x),1),e],y.p),B.w,B.h,B.l,0,x,x),B.r,x,x,D.KU,x,x,x,B.cn,x,x,x)},
$S:1368}
C.bNu.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).iz()},
$S:0}
C.ckO.prototype={
$0(){return this.a.d=null},
$S:0}
C.ckP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ckM.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aF8(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aF8(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.alb(A.T(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.aks)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b_E(A.q(t)))
v=A.cLL(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:131}
C.ckN.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oP
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.alb(A.T(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.a3(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1369}
C.ckQ.prototype={
$0(){return A.ai(this.a).ad(null)},
$S:0}
C.ckR.prototype={
$0(){return A.ai(this.a).ad(null)},
$S:0}
C.cwe.prototype={
$0(){return A.ai(this.a).ad(null)},
$S:0}
C.cwf.prototype={
$0(){return A.ai(this.a).ad(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dHA","dzQ",4)
var u
w(u=C.ac1.prototype,"gal2","RI",0)
v(u,"gbaj","a5i",3)
w(u,"gaZC","Ds",0)
w(u,"gb9b","aoK",1)
w(u,"gaZB","al1",1)
w(C.afO.prototype,"gaZD","IY",0)})();(function inheritance(){var x=a.inheritMany
x(A.J,[C.avt,C.a62,C.ayb,C.FX])
x(A.bx,[C.cJ8,C.bNA,C.bNB,C.bNy,C.bNk,C.bNp,C.ckM])
x(A.H,[C.ajn,C.H0,C.wp,C.we,C.aP2])
x(A.G,[C.FY,C.Dc,C.Fh])
x(A.Z,[C.aOm,C.ac1,C.afO])
x(A.bQ,[C.cus,C.cut,C.cuz,C.cuy,C.cux,C.cuw,C.cuu,C.cuv,C.bLo,C.bNt,C.bNm,C.bNn,C.bNo,C.bNz,C.bNs,C.bNw,C.bNx,C.bNi,C.bNj,C.bNl,C.bNr,C.bNq,C.bNu,C.ckO,C.ckP,C.ckN,C.ckQ,C.ckR,C.cwe,C.cwf])
x(A.cO,[C.cuA,C.bNC,C.bNv])})()
A.bn(b.typeUniverse,JSON.parse('{"ajn":{"H":[],"e":[],"f":[]},"H0":{"H":[],"e":[],"f":[]},"FY":{"G":[],"e":[],"f":[]},"aOm":{"Z":["FY"]},"wp":{"H":[],"e":[],"f":[]},"we":{"H":[],"e":[],"f":[]},"Dc":{"G":[],"e":[],"f":[]},"ac1":{"Z":["Dc"]},"Fh":{"G":[],"e":[],"f":[]},"afO":{"Z":["Fh"]},"aP2":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),E:x("r<ayb>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("df"),K:x("J"),y:x("a62"),m:x("tF"),k:x("+(c,br)"),R:x("+at,result(ad?,c)"),u:x("+error,request(c?,avt?)"),A:x("FX"),N:x("c"),v:x("aO<FX>"),q:x("dm"),x:x("x"),z:x("@"),g:x("t<@>?"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.KG=new A.bc(B.fp,0.5,B.ak,-1)
D.afR=new A.dS(D.KG,B.ab,B.ab,B.ab)
D.KU=new A.M(null,null,D.afR,null,null,null,B.y)
D.aks=new A.Dh("invalid_state")
D.atd=new A.a0(14,18,14,18)
D.auo=new A.a0(20,8,20,20)
D.aD1=new A.aV(61109,"MaterialIcons",null,!0)
D.aEs=new A.b7(D.aD1,22,B.A,null,null,null)
D.aFW=new A.dE(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bw,null,null,B.bw,B.bw,!0,null,null,null,null)
D.bYK=new A.ix(40,40,20,B.t,0,null)
D.bYC=new A.ix(null,32,12,B.t,1,null)
D.aAG=new A.bP(1,B.aw,D.bYC,null)
D.bxs=x([D.bYK,B.af,D.aAG],y.p)
D.bUP=new A.me(B.bx,B.h,B.l,B.w,null,B.u,null,0,D.bxs,null)
D.bYF=new A.ix(null,120,22,B.t,1,null)
D.bYJ=new A.ix(null,56,22,B.t,2,null)
D.bYL=new A.ix(null,52,26,B.t,2,null)
D.aJ9=x([D.bUP,B.bs,D.bYF,B.R,D.bYJ,B.a1,D.bYL],y.p)
D.byk=x(["1","2","3"],y.s)
D.bx0=x(["4","5","6"],y.s)
D.buR=x(["7","8","9"],y.s)
D.b7s=x(["00","0","del"],y.s)
D.bCY=x([D.byk,D.bx0,D.buR,D.b7s],A.w("r<t<c>>"))
D.a2B=new C.a62("error",null,"",0,null)
D.bRO=new A.a3("Cancelado",!1)
D.bRV=new A.a3("Expirou",!1)
D.bT7=new A.a3("\xc0 espera\u2026",!1)
D.bTB=new A.bW(I.lS,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bU4=new A.bW(B.hE,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bUh=new A.bW(B.kG,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bUj=new A.bW(B.Er,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bzV=x([],y.E)
D.Hr=new C.FX("error",null,null,null,D.bzV,"entry",null)
D.avp=new A.nv(B.jE,150,3,null,null)
D.ak4=new A.fw(B.L,null,null,D.avp,null)
D.bYr=new A.c1(null,214,D.ak4,null)
D.bZ7=new A.vW(!1,3,!1,null)
D.c22=new A.P(!0,B.A,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6c=new A.P(!0,B.A,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8Y=new A.C("Quem \xe9",null,B.hl,null,null,null,null,null,null,null,null)
D.cbh=new A.C("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cd1=new A.C("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mz,null,null,null,null,null,null,null,null)
D.cdl=new A.C("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.ceK=new A.C("O qu\xea",null,B.P,null,null,null,null,null,null,null,null)
D.cfk=new A.C("Cobrar",null,B.kZ,null,null,null,null,null,null,null,null)
D.cfC=new A.C("Ver perfil",null,K.tl,null,null,null,null,null,null,null,null)
D.cfK=new A.C("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.cgg=new A.C("Leste o QR agora",null,B.P,null,null,null,null,null,null,null,null)
D.cgm=new A.C("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.chD=new A.C("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.ci8=new A.C("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cig=new A.C("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.cqw=new C.wp("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cqx=new C.wp("Verificado",!0,null)
D.adz=new C.wp("Por registar",!1,null)
D.cqz=new C.wp("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dSh","cSf",()=>{var w=A.W(16)
return A.dlQ(A.bz(B.fp,0.5),w,null,B.t,null,null,B.y)})})()};
(a=>{a["u+/w9ioPGbjIf9oR+W0nXJsCqI8="]=a.current})($__dart_deferred_initializers__);