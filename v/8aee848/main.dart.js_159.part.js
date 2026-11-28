((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cJc(d,e){return C.dKk(d,e)},
dKk(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cJc=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cJc)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.h(s,"result"),"ok")){r=A.p(J.h(s,"id"))
q=A.p(J.h(s,"code"))
p=A.d3(A.p(J.h(s,"expires_at")))
p=p==null?null:p.dH()
if(p==null)p=new A.ab(Date.now(),0,!1).en(6e8)
v=new A.Z_(null,new C.avz(r,q,p))
x=1
break}r=r.b(s)?A.p(J.h(s,"result")):"error"
v=new A.Z_(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.Z_("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cJc,w)},
cIn(d){return C.dJD(d)},
dJD(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cIn=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.P().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aG("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cIn)
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
return A.m($async$cIn,w)},
dMe(d,e){var x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.LU(0,"pay-request-"+d,B.yj).NM(new C.cLj(e),B.GG,new G.Ft(H.y6,"id",d),"public","pay_requests").PA(0)},
cO5(d){return C.dNr(d)},
dNr(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cO5=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cO5)
case 7:s=f
if(!y.f.b(s)){v=D.a1V
x=1
break}r=A.p(J.h(s,"result"))
q=A.B(J.h(s,"id"))
p=J.h(s,"merchant")
p=A.p(p==null?"":p)
o=A.aD(J.h(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.B(J.h(s,"description"))
v=new C.a6f(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a1V
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cO5,w)},
al8(d){return C.dKJ(d)},
dKJ(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$al8=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.P().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f3("event-pay",d),$async$al8)
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
if(o instanceof A.pp){q=o
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
return A.m($async$al8,w)},
avz:function avz(d,e,f){this.a=d
this.b=e
this.c=f},
cLj:function cLj(d){this.a=d},
a6f:function a6f(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cSC(d){return C.dO5(d)},
dO5(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cSC=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aG("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cSC)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.H0
x=1
break}o=A.p(J.h(s,"result"))
n=A.B(J.h(s,"scan_id"))
m=A.B(J.h(s,"name"))
l=A.B(J.h(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.h(s,"items"))
j=J.ao(j==null?B.aj:j)
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
a1=A.d3(A.p(a1==null?"":a1))
a2=A.B(h.h(i,"booking_number"))
a3=A.aD(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.B(J.h(g,"status")):null
if(a5){a5=A.aD(J.h(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.d3(A.p(a7==null?"":a7))
a7=a7==null?null:a7.dH()
J.o(h.h(i,"can_charge"),!0)
J.ba(r,new C.ayj(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.B(J.h(s,"mode"))
if(p==null){p=k.a(J.h(s,"items"))
p=p==null?null:J.dR(p)
p=p===!0?"entry":"profile"}k=A.B(J.h(s,"profile_id"))
v=new C.FY(o,n,m,l,r,p,k)
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
return A.m($async$cSC,w)},
aVs(d,e){return C.dO4(d,e)},
dO4(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVs=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.P().b
p===$&&A.b()
x=10
return A.d(p.aG("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVs)
case 10:o=g
x=8
break
case 9:p=$.P().b
p===$&&A.b()
x=11
return A.d(p.aG("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVs)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YY(null,"error")
x=1
break}r=A.p(J.h(s,"result"))
q=J.h(s,"arrived_at")
if(q==null)q=J.h(s,"checked_in_at")
q=A.d3(A.p(q==null?"":q))
q=q==null?null:q.dH()
v=new A.YY(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YY(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVs,w)},
ayj:function ayj(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
FY:function FY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d_i(d){return B.f.aT(B.j.k(A.i_(d)),2,"0")+":"+B.f.aT(B.j.k(A.hP(d)),2,"0")},
d9a(d){return new C.FZ(d,null)},
dp9(){return new C.Dd(null)},
dvQ(d){return new C.Fg(d,null)},
dCT(d){var x
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
default:x=A.aVf(d)
break}return x},
dCV(d){var x
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
dCU(d){var x
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
H6:function H6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FZ:function FZ(d,e){this.c=d
this.a=e},
aOi:function aOi(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cwD:function cwD(d,e){this.a=d
this.b=e},
cwE:function cwE(d,e,f){this.a=d
this.b=e
this.c=f},
cwL:function cwL(d){this.a=d},
cwK:function cwK(d){this.a=d},
cwJ:function cwJ(d){this.a=d},
cwI:function cwI(d){this.a=d},
cwH:function cwH(d,e){this.a=d
this.b=e},
cwF:function cwF(d,e,f){this.a=d
this.b=e
this.c=f},
cwG:function cwG(d){this.a=d},
wp:function wp(d,e,f){this.c=d
this.d=e
this.a=f},
wf:function wf(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bMz:function bMz(){},
Dd:function Dd(d){this.a=d},
ac9:function ac9(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bOF:function bOF(d,e){this.a=d
this.b=e},
bOy:function bOy(d){this.a=d},
bOz:function bOz(d){this.a=d},
bOA:function bOA(d,e){this.a=d
this.b=e},
bOM:function bOM(d,e){this.a=d
this.b=e},
bOL:function bOL(){},
bON:function bON(d,e){this.a=d
this.b=e},
bOE:function bOE(d,e){this.a=d
this.b=e},
bOK:function bOK(d){this.a=d},
bOI:function bOI(d){this.a=d},
bOJ:function bOJ(d,e){this.a=d
this.b=e},
bOw:function bOw(){},
bOu:function bOu(d){this.a=d},
bOv:function bOv(d){this.a=d},
bOx:function bOx(d){this.a=d},
bOD:function bOD(d){this.a=d},
bOO:function bOO(d){this.a=d},
bOB:function bOB(d){this.a=d},
bOC:function bOC(d,e){this.a=d
this.b=e},
bOH:function bOH(){},
bOG:function bOG(d){this.a=d},
Fg:function Fg(d,e){this.c=d
this.a=e},
afP:function afP(){this.c=this.a=this.d=null},
cmP:function cmP(d){this.a=d},
cmQ:function cmQ(d,e){this.a=d
this.b=e},
cmN:function cmN(d){this.a=d},
cmO:function cmO(d){this.a=d},
cmR:function cmR(d){this.a=d},
cmS:function cmS(d){this.a=d},
aP_:function aP_(d,e,f){this.c=d
this.d=e
this.a=f},
cyq:function cyq(d){this.a=d},
cyr:function cyr(d){this.a=d}},D,I,K,F,L,M,N
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
C.avz.prototype={}
C.a6f.prototype={}
C.ayj.prototype={}
C.FY.prototype={
gap(d){return this.c}}
C.ajm.prototype={
u(d){var x=null
return A.x(x,this.c,B.r,x,x,$.cUZ(),x,x,x,B.cT,x,x,x)}}
C.H6.prototype={
u(d){var x=null,w=A.a([A.a5(A.i(this.c,x,x,x,x,B.cc,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.i(v,x,x,x,x,B.bx,x,x))
v=this.e
if(v!=null)w.push(v)
return A.x(x,A.O(w,B.u,B.h,B.l,0,x),B.r,x,x,D.Kj,x,x,x,B.dM,x,x,x)}}
C.FZ.prototype={
R(){return new C.aOi(A.E(y.N,y.R))}}
C.aOi.prototype={
KL(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KL=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cSC(u.a.c),$async$KL)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ae(t).Gk("/u/"+A.p(s),null,y.X)
v=new A.aQ($.aU,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$KL,w)},
a3Z(d,e){var x=e.c
return x==null?"e"+e.b:x},
Rf(d,e){return this.aUs(d,e)},
aUs(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Rf=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cwD(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVs(t,e),$async$Rf)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cwE(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$Rf,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KL()
return A.cP(null,B.by,A.bB(!0,A.b7J(new C.cwL(x),w,y.A),null,B.Z,!0),!0,null)},
bcH(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bT6
break
case"own_code":x=D.bTj
break
case"not_found":x=D.bSD
break
default:x=D.bTl
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
q=A.a([B.kU,A.b9(r,o?B.W:B.fR,p,p,96),B.a_,A.i(v,p,p,p,p,B.hS,B.a4,p),B.P,A.i(u,p,p,p,p,D.c4O,B.a4,p)],x)
if(o)B.e.n(q,A.a([B.d4,new A.am(A.bD(B.t5,new C.cwJ(this),p),p)],x))
return q},
bbZ(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.ch(r,44,d.d,!1,!0,s),B.af,A.a5(A.y(A.a([A.i(r,s,s,s,s,B.iw,s,s),D.c7N],x),B.G,B.h,B.l),1),B.ac,D.coO],x),B.u,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.d0(B.bb,s,s,A.aK(new A.am(A.hl(D.ca7,new C.cwH(this,d),A.fM(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bY,s,B.ab,B.c7,s,s,s,s)),s),36,s),s)],x))
w=A.a([new C.ajm(A.y(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bP,D.c8l],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b5K(0,d,v[t]))
return w},
b5K(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a3Z(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
s=i}i=A.i(k?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",n,n,n,n,B.aH,n,n)
x=y.p
r=A.a([A.i(f.d,n,n,n,n,B.iw,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.q_,A.i(B.dr[A.fI(q)-1]+", "+A.aE(q)+" "+B.bh[A.aw(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ad)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H6("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H6("Pessoas",A.p(p),n,n))
q.push(new C.H6("Chegada",n,v?new C.wp("Registada \xe0s "+C.d_i(w),!0,n):D.acI,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wp(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.coQ
p=v?new C.wp("Registada \xe0s "+C.d_i(w),!0,n):D.acI
B.e.n(r,A.a([new C.H6("Bilhete",n,q,n),new C.H6("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.lr,A.i(t,n,n,n,n,B.z5,n,n),n))
i=A.a([B.bP,i,B.ar,new C.ajm(A.y(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cwF(o,e,f):n
if(r===m)r=B.yL
else r=A.i(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kY,n,n)
t.push(A.a5(A.aK(new A.am(A.bD(r,q,n),n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ae)
x.push(A.a5(A.aK(new A.am(A.hl(D.cbJ,new C.cwG(o),A.fM(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.ab,B.c7,n,n,n,n)),n),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.u,B.h,B.l,0,n))
return i}}
C.wp.prototype={
u(d){var x=null,w=this.d,v=w?B.cz:B.dU,u=A.W(999)
return A.x(x,A.i(this.c,x,x,x,x,A.aH(x,x,w?B.cR:B.co,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.J(v,x,x,u,x,x,B.x),x,x,x,B.dm,x,x,x)}}
C.wf.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.md:A.i(x.c,w,w,w,w,B.eJ,w,w)
if(x.e)v=new A.am(A.hl(u,x.d,A.fM(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c7,w,w,w,w)),w)
else{v=v?new C.bMz():x.d
v=new A.am(A.bD(u,v,A.ce(B.z,B.z.cc(0.35),B.t,B.t,w,w,B.ab,w,w,w)),w)}return A.aK(v,52,1/0)}}
C.Dd.prototype={
R(){return new C.ac9(new A.aF(B.ak,$.aa()))}}
C.ac9.prototype={
m(){this.UC()
var x=this.e
x.Z$=$.aa()
x.W$=0
this.a6()},
UC(){var x,w=this,v=w.y
if(v!=null){x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.ya(v)}w.y=null
v=w.z
if(v!=null)v.aK(0)
v=w.Q
if(v!=null)v.aK(0)},
bcC(d){this.p(new C.bOF(this,d))},
Rg(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Rg=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bOy(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cJc(s,t.length===0?null:t),$async$Rg)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bOz(u))
q=r.b
if(q==null){s=r.a
v=u.bhM(s==null?"error":s)
x=1
break}u.p(new C.bOA(u,q))
u.bll(q)
case 1:return A.l(v,w)}})
return A.m($async$Rg,w)},
bll(d){var x=this
x.UC()
x.y=C.dMe(d.a,x.gb8K())
x.z=A.ub(B.hs,new C.bOM(x,d))
x.Q=A.ub(B.uM,new C.bON(x,d))},
a4F(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bOE(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aK(0)
x=w.Q
if(x!=null)x.aK(0)}},
bhM(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.h1(!0,new C.bOK(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a0(A.bZ(w,w,w,w,w,B.y,w,A.i(x,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Dd(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dd=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.h1(!0,new C.bOw(),t,y.x),$async$Dd)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cIn(s.a),$async$Dd)
case 6:if(u.c==null){x=1
break}case 4:u.UC()
u.p(new C.bOx(u))
case 1:return A.l(v,w)}})
return A.m($async$Dd,w)},
aob(){this.UC()
this.p(new C.bOD(this))},
akv(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dd()
else w.aob()
else{x=w.c
x.toString
A.al(x,!1).hA()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pW(B.lD,x.gaYI(),"Voltar"),s=A.i(u?"Cobrar":"QR para pagar",w,w,w,w,B.hS,w,w)
return A.cY1(u,A.cP(w,B.by,A.bB(!0,new A.S(D.ato,A.y(A.a([new A.d0(B.bb,w,w,t,w),B.R,s,B.bP,A.a5(u?x.b5T():x.bd2(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bOO(x),y.K)},
b5T(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bOB(o),j=$.cUZ(),i=y.p
j=A.x(n,A.y(A.a([A.i(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a4,n),B.ad,A.bj(n,n,n,A.i(E.cJx(m),n,n,n,n,D.c0H,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.u,B.h,B.l),B.r,n,n,j,n,n,n,D.ash,n,n,n)
m=A.W(999)
x=A.bH(B.fa,0.5)
m=A.a([j,B.ad,A.x(n,A.O(A.a([D.c7Z,B.ae,A.a5(A.cs(n,B.a6,!1,n,!0,B.y,n,A.cv(),o.e,n,n,n,n,n,2,D.aF1,B.U,!0,n,!0,n,!1,n,B.aB,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.al,n,n,n,n,n,n,n,n,n,n,n,B.kX,!0,B.au,n,B.hb,n,n,n,n),1)],i),B.u,B.h,B.l,0,n),B.r,n,n,new A.J(B.t,n,x,m,n,n,B.x),n,44,n,B.bY,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bBU[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eu(v,0,j),s=J.ao(t.a),r=t.b,t=new A.bY(s,r,A.u(t).i("bY<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.an(A.c1())
p=A.a([],i)
if(q.a>0)p.push(B.ae)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c6(n,x,n,n),A.O(u,B.u,B.h,B.l,0,n)],i))}m=A.a5(A.d6(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.y(A.a([m,B.R,new C.wf("Mostrar o QR para pagar",l?o.gakw():n,!1,j,n)],i),B.E,B.h,B.l)},
bd2(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cf(new A.ab(Date.now(),0,!1)).a
x=h<0?0:B.j.aO(h,1e6)
w=""+B.j.aO(x,60)+":"+B.f.aT(B.j.k(B.j.aI(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.d_i(h==null?new A.ab(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bQU
break
case"cancelled":h=D.bQN
break
default:h=D.bS9
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bOH()
q=j.c
q.toString
q=A.nQ(q,!1).a_(0,$.b7(),y.D).b
p=q==null?i:q.x
q=$.cUZ()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.i(B.f.B(p),i,i,i,i,B.iw,B.a4,i))
n.push(new A.S(F.q_,A.i(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a4,i),i))
n.push(B.R)
if(g)n.push(D.bX7)
else{m=A.W(16)
l=A.bH(B.fa,0.5)
k=f?1:0.15
n.push(A.x(i,A.f4(A.bpV(B.t,A.kj("/pagar/"+d.b),B.GI,B.GJ,B.Z,"QR para pagar "+E.cJx(j.d),186),k),B.r,i,i,new A.J(B.t,i,l,m,i,i,B.x),i,i,i,B.cT,i,i,i))}n.push(B.R)
n.push(A.i(E.cJx(j.d),i,i,i,i,B.hS,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.i(m,i,i,i,i,B.L,B.a4,i))
if(f)B.e.n(n,A.a([B.ad,D.coN],o))
q=A.x(i,A.y(n,B.u,B.h,B.l),B.r,i,i,q,i,i,i,B.cT,i,i,i)
n=A.bj(i,i,i,h.$2("Estado",new C.wp(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a5(A.d6(A.a([q,B.aA,n,h.$2("Expira em",A.i(f?w:"\u2014",i,i,i,i,B.bx,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.wf("Cancelar cobran\xe7a",j.gaYJ(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wf("Nova cobran\xe7a",j.gb7E(),!1,!1,i),B.ad,new C.wf("Fechar",new C.bOG(j),!0,!1,i)],o))
else h.push(new C.wf("Mostrar outro QR",j.gakw(),!1,j.f,i))
return A.y(h,B.E,B.h,B.l)}}
C.Fg.prototype={
R(){return new C.afP()}}
C.afP.prototype={
ad(){this.aq()
this.IC()},
IC(){var x=0,w=A.n(y.H),v=this,u
var $async$IC=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cmP(v))
x=2
return A.d(C.cO5(v.a.c),$async$IC)
case 2:u=e
if(v.c!=null)v.p(new C.cmQ(v,u))
return A.l(null,w)}})
return A.m($async$IC,w)},
aS1(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nO("",d.c,"pay_request",d.d/100,x,x,new C.cmN(this),!1,new C.cmO(d),B.VM,x,w,C.dKM(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Ut(this.aS1(t),u)
x=s?"Pagar":C.dCV(t.a)
if(s)s=D.aId
else{s=t.a
w=y.p
v=A.a([A.bO(A.a2A(s==="paid"?B.iN:B.q8,3,u,120),u,u),B.R,A.i(C.dCU(s),u,u,u,u,B.hd,B.a4,u),B.bj],w)
if(s==="error")B.e.n(v,A.a([new C.wf("Tentar outra vez",this.gaYK(),!1,!1,u),B.ad,new C.wf("Fechar",new C.cmR(d),!0,!1,u)],w))
else v.push(new C.wf("OK",new C.cmS(d),!1,!1,u))
s=v}return new C.aP_(x,s,u)}}
C.aP_.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=A.a5(A.cp(B.bu,x,B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cyq(d),x,x,x,x,x,x,!1,B.aE),1),u=y.p,t=A.a([A.bO(A.x(x,x,B.r,x,x,new A.J(N.ub,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aA,A.O(A.a([A.a5(A.i(this.c,x,x,x,x,B.bi,x,x),1),A.pW(B.el,new C.cyr(d),"Fechar")],u),B.u,B.h,B.l,0,x),B.a_],u)
B.e.n(t,this.d)
return A.hk(!1,B.aN,!0,x,A.y(A.a([v,A.x(x,A.y(t,B.E,B.h,B.J),B.r,x,x,M.Kk,x,x,x,new A.a4(20,10,20,20+w.r.d),x,x,1/0)],u),B.u,B.k_,B.l),B.r,x,0,x,x,x,x,x,B.fD)}}
var z=a.updateTypes(["F<~>()","~()","L(N,m4<FY>)","~(c)","c(c)"])
C.cLj.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:149}
C.cwD.prototype={
$0(){var x=this.a
return x.f=x.a3Z(0,this.b)},
$S:0}
C.cwE.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a3Z(0,this.b),this.c)},
$S:0}
C.cwL.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bXO
x=y.p
w=A.a([A.O(A.a([A.pW(B.lD,new C.cwK(d),"Voltar")],x),B.u,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.cgs,B.bP],x))
else w.push(B.a_)
x=this.a
if(!v)B.e.n(w,x.bcH(t))
else B.e.n(w,x.bbZ(t))
return A.d6(w,u,B.CS,u,u,!1,!1)},
$S:z+2}
C.cwK.prototype={
$0(){return A.al(this.a,!1).hA()},
$S:0}
C.cwJ.prototype={
$0(){var x=this.a
return x.p(new C.cwI(x))},
$S:0}
C.cwI.prototype={
$0(){var x=this.a
return x.d=x.KL()},
$S:0}
C.cwH.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).aj("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cwF.prototype={
$0(){return this.a.Rf(this.b,this.c)},
$S:0}
C.cwG.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).aj("/cobrar",null,y.X)},
$S:0}
C.bMz.prototype={
$0(){},
$S:0}
C.bOF.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aO(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dB(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bOy.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bOz.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bOA.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bOM.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.he(new A.ab(Date.now(),0,!1)))x.a4F("expired")
else x.p(new C.bOL())},
$S:65}
C.bOL.prototype={
$0(){},
$S:0}
C.bON.prototype={
$1(d){return this.aE3(d)},
aE3(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.al8(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.h(t,"state"),"paid"))s.a4F("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:455}
C.bOE.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ab(Date.now(),0,!1)},
$S:0}
C.bOK.prototype={
$1(d){var x=null
return new A.eU(D.c8f,D.cbm,A.a([new A.am(A.cJ(B.mq,x,x,new C.bOI(d),x,x),x),new A.am(A.bD(D.c9n,new C.bOJ(this.a,d),x),x)],y.p),x)},
$S:19}
C.bOI.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
C.bOJ.prototype={
$0(){A.al(this.b,!1).bj()
var x=this.a.c
x.toString
A.ae(x).aj("/partner-payments/setup",null,y.X)},
$S:0}
C.bOw.prototype={
$1(d){var x=null
return new A.eU(D.cb3,D.caB,A.a([new A.am(A.cJ(D.cbl,x,x,new C.bOu(d),x,x),x),new A.am(A.bD(D.c9i,new C.bOv(d),x),x)],y.p),x)},
$S:19}
C.bOu.prototype={
$0(){return A.al(this.a,!1).ah(!1)},
$S:0}
C.bOv.prototype={
$0(){return A.al(this.a,!1).ah(!0)},
$S:0}
C.bOx.prototype={
$0(){return this.a.r=null},
$S:0}
C.bOD.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.k_(0,B.jb)},
$S:0}
C.bOO.prototype={
$2(d,e){if(!d)this.a.akv()},
$S:265}
C.bOB.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a5(A.bj(x,!0,x,A.hk(!1,B.aN,!0,x,A.eY(!1,t,!0,A.aK(A.bO(w?D.aDz:A.i(d,x,x,x,x,B.oX,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bOC(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fO(u,D.K6),x,x,B.cW),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:276}
C.bOC.prototype={
$0(){return this.a.bcC(this.b)},
$S:0}
C.bOH.prototype={
$2(d,e){var x=null
return A.x(x,A.O(A.a([A.a5(A.i(d,x,x,x,x,B.cc,x,x),1),e],y.p),B.u,B.h,B.l,0,x),B.r,x,x,D.Kj,x,x,x,B.ck,x,x,x)},
$S:1377}
C.bOG.prototype={
$0(){var x=this.a.c
x.toString
return A.al(x,!1).hA()},
$S:0}
C.cmP.prototype={
$0(){return this.a.d=null},
$S:0}
C.cmQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cmN.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEk(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEk(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.al8(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.ajC)
t=r.h(s,"error")
if(t!=null)throw A.q(A.b_L(A.p(t)))
v=A.cO6(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:130}
C.cmO.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oy
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.al8(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.h(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1378}
C.cmR.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
C.cmS.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
C.cyq.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
C.cyr.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dKM","dCT",4)
var u
w(u=C.ac9.prototype,"gakw","Rg",0)
v(u,"gb8K","a4F",3)
w(u,"gaYJ","Dd",0)
w(u,"gb7E","aob",1)
w(u,"gaYI","akv",1)
w(C.afP.prototype,"gaYK","IC",0)})();(function inheritance(){var x=a.inheritMany
x(A.M,[C.avz,C.a6f,C.ayj,C.FY])
x(A.bu,[C.cLj,C.bOM,C.bON,C.bOK,C.bOw,C.bOB,C.cmN])
x(A.L,[C.ajm,C.H6,C.wp,C.wf,C.aP_])
x(A.G,[C.FZ,C.Dd,C.Fg])
x(A.a_,[C.aOi,C.ac9,C.afP])
x(A.bL,[C.cwD,C.cwE,C.cwK,C.cwJ,C.cwI,C.cwH,C.cwF,C.cwG,C.bMz,C.bOF,C.bOy,C.bOz,C.bOA,C.bOL,C.bOE,C.bOI,C.bOJ,C.bOu,C.bOv,C.bOx,C.bOD,C.bOC,C.bOG,C.cmP,C.cmQ,C.cmO,C.cmR,C.cmS,C.cyq,C.cyr])
x(A.cK,[C.cwL,C.bOO,C.bOH])})()
A.br(b.typeUniverse,JSON.parse('{"ajm":{"L":[],"e":[],"f":[]},"H6":{"L":[],"e":[],"f":[]},"FZ":{"G":[],"e":[],"f":[]},"aOi":{"a_":["FZ"]},"wp":{"L":[],"e":[],"f":[]},"wf":{"L":[],"e":[],"f":[]},"Dd":{"G":[],"e":[],"f":[]},"ac9":{"a_":["Dd"]},"Fg":{"G":[],"e":[],"f":[]},"afP":{"a_":["Fg"]},"aP_":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{D:x("cH"),E:x("r<ayj>"),s:x("r<c>"),p:x("r<e>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("du"),K:x("M"),y:x("a6f"),m:x("ow"),k:x("+(c,bm)"),R:x("+at,result(ab?,c)"),u:x("+error,request(c?,avz?)"),A:x("FY"),N:x("c"),v:x("aQ<FY>"),q:x("dl"),x:x("C"),z:x("@"),g:x("t<@>?"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.K6=new A.be(B.fa,0.5,B.ag,-1)
D.aeZ=new A.dN(D.K6,B.aa,B.aa,B.aa)
D.Kj=new A.J(null,null,D.aeZ,null,null,null,B.x)
D.ajC=new A.Dj("invalid_state")
D.ash=new A.a4(14,18,14,18)
D.ato=new A.a4(20,8,20,20)
D.aCd=new A.b0(61109,"MaterialIcons",null,!0)
D.aDz=new A.b8(D.aCd,22,B.z,null,null,null)
D.aF1=new A.dE(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bk,null,null,B.bk,B.bk,!0,null,null,null,null)
D.bXr=new A.l_(40,40,20,B.t,0,null)
D.bXj=new A.l_(null,32,12,B.t,1,null)
D.azI=new A.bK(1,B.at,D.bXj,null)
D.bwq=x([D.bXr,B.af,D.azI],y.p)
D.bTM=new A.mk(B.bJ,B.h,B.l,B.u,null,B.cg,null,0,D.bwq,null)
D.bXl=new A.l_(null,120,22,B.t,1,null)
D.bXq=new A.l_(null,56,22,B.t,2,null)
D.bXs=new A.l_(null,52,26,B.t,2,null)
D.aId=x([D.bTM,B.bP,D.bXl,B.R,D.bXq,B.a_,D.bXs],y.p)
D.bxg=x(["1","2","3"],y.s)
D.bw_=x(["4","5","6"],y.s)
D.btN=x(["7","8","9"],y.s)
D.b6w=x(["00","0","del"],y.s)
D.bBU=x([D.bxg,D.bw_,D.btN,D.b6w],A.z("r<t<c>>"))
D.a1V=new C.a6f("error",null,"",0,null)
D.bQN=new A.X("Cancelado",!1)
D.bQU=new A.X("Expirou",!1)
D.bS9=new A.X("\xc0 espera\u2026",!1)
D.bSD=new A.bX(I.kF,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bT6=new A.bX(B.hB,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTj=new A.bX(B.kE,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTl=new A.bX(B.E3,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.byW=x([],y.E)
D.H0=new C.FY("error",null,null,null,D.byW,"entry",null)
D.aur=new A.ny(B.iN,150,3,null,null)
D.ajf=new A.f8(B.K,null,null,D.aur,null)
D.bX7=new A.c6(null,214,D.ajf,null)
D.bXO=new A.vY(!1,3,!1,null)
D.c0H=new A.Q(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4O=new A.Q(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7N=new A.D("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c7Z=new A.D("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c8f=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c8l=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mm,null,null,null,null,null,null,null)
D.c9i=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.c9n=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.ca7=new A.D("Ver perfil",null,K.rW,null,null,null,null,null,null,null)
D.caB=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.cb3=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.cbl=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.cbm=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.cbJ=new A.D("Cobrar",null,B.kY,null,null,null,null,null,null,null)
D.cgs=new A.D("Quem \xe9",null,B.hS,null,null,null,null,null,null,null)
D.coN=new C.wp("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.coO=new C.wp("Verificado",!0,null)
D.acI=new C.wp("Por registar",!1,null)
D.coQ=new C.wp("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVE","cUZ",()=>{var w=A.W(16)
return A.doT(A.bH(B.fa,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["A23VWDPLlroQmh8vKk68yDKmb8o="]=a.current})($__dart_deferred_initializers__);