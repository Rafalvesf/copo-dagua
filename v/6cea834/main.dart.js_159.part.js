((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cJf(d,e){return C.dKr(d,e)},
dKr(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cJf=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cJf)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.h(s,"result"),"ok")){r=A.p(J.h(s,"id"))
q=A.p(J.h(s,"code"))
p=A.d3(A.p(J.h(s,"expires_at")))
p=p==null?null:p.dI()
if(p==null)p=new A.ab(Date.now(),0,!1).em(6e8)
v=new A.YZ(null,new C.avx(r,q,p))
x=1
break}r=r.b(s)?A.p(J.h(s,"result")):"error"
v=new A.YZ(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.YZ("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cJf,w)},
cIp(d){return C.dJK(d)},
dJK(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cIp=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aG("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cIp)
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
return A.m($async$cIp,w)},
dMl(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.LT(0,"pay-request-"+d,B.yh).NM(new C.cLm(e),B.GH,new G.Ft(H.y4,"id",d),"public","pay_requests").PA(0)},
cOa(d){return C.dNy(d)},
dNy(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cOa=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cOa)
case 7:s=f
if(!y.f.b(s)){v=D.a1T
x=1
break}r=A.p(J.h(s,"result"))
q=A.A(J.h(s,"id"))
p=J.h(s,"merchant")
p=A.p(p==null?"":p)
o=A.aD(J.h(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.A(J.h(s,"description"))
v=new C.a6e(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a1T
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cOa,w)},
al6(d){return C.dKQ(d)},
dKQ(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$al6=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f3("event-pay",d),$async$al6)
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
return A.m($async$al6,w)},
avx:function avx(d,e,f){this.a=d
this.b=e
this.c=f},
cLm:function cLm(d){this.a=d},
a6e:function a6e(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cSH(d){return C.dOc(d)},
dOc(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cSH=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aG("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cSH)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.H1
x=1
break}o=A.p(J.h(s,"result"))
n=A.A(J.h(s,"scan_id"))
m=A.A(J.h(s,"name"))
l=A.A(J.h(s,"avatar_url"))
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
d=A.A(h.h(i,"booking_id"))
a0=h.h(i,"event")
a0=A.p(a0==null?"Evento":a0)
a1=h.h(i,"date")
a1=A.d3(A.p(a1==null?"":a1))
a2=A.A(h.h(i,"booking_number"))
a3=A.aD(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.A(J.h(g,"status")):null
if(a5){a5=A.aD(J.h(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.d3(A.p(a7==null?"":a7))
a7=a7==null?null:a7.dI()
J.o(h.h(i,"can_charge"),!0)
J.ba(r,new C.ayh(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.A(J.h(s,"mode"))
if(p==null){p=k.a(J.h(s,"items"))
p=p==null?null:J.dR(p)
p=p===!0?"entry":"profile"}k=A.A(J.h(s,"profile_id"))
v=new C.FY(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cU){v=D.H1
x=1
break}else{v=D.H1
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cSH,w)},
aVq(d,e){return C.dOb(d,e)},
dOb(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVq=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aG("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVq)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aG("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVq)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YX(null,"error")
x=1
break}r=A.p(J.h(s,"result"))
q=J.h(s,"arrived_at")
if(q==null)q=J.h(s,"checked_in_at")
q=A.d3(A.p(q==null?"":q))
q=q==null?null:q.dI()
v=new A.YX(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YX(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVq,w)},
ayh:function ayh(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_n(d){return B.f.aT(B.j.k(A.i_(d)),2,"0")+":"+B.f.aT(B.j.k(A.hQ(d)),2,"0")},
d9g(d){return new C.FZ(d,null)},
dph(){return new C.Dd(null)},
dvW(d){return new C.Fg(d,null)},
dCZ(d){var x
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
default:x=A.aVd(d)
break}return x},
dD0(d){var x
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
dD_(d){var x
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
ajl:function ajl(d,e){this.c=d
this.a=e},
H6:function H6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FZ:function FZ(d,e){this.c=d
this.a=e},
aOe:function aOe(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cwG:function cwG(d,e){this.a=d
this.b=e},
cwH:function cwH(d,e,f){this.a=d
this.b=e
this.c=f},
cwO:function cwO(d){this.a=d},
cwN:function cwN(d){this.a=d},
cwM:function cwM(d){this.a=d},
cwL:function cwL(d){this.a=d},
cwK:function cwK(d,e){this.a=d
this.b=e},
cwI:function cwI(d,e,f){this.a=d
this.b=e
this.c=f},
cwJ:function cwJ(d){this.a=d},
wq:function wq(d,e,f){this.c=d
this.d=e
this.a=f},
wg:function wg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bMz:function bMz(){},
Dd:function Dd(d){this.a=d},
ac8:function ac8(d){var _=this
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
afO:function afO(){this.c=this.a=this.d=null},
cmO:function cmO(d){this.a=d},
cmP:function cmP(d,e){this.a=d
this.b=e},
cmM:function cmM(d){this.a=d},
cmN:function cmN(d){this.a=d},
cmQ:function cmQ(d){this.a=d},
cmR:function cmR(d){this.a=d},
aOW:function aOW(d,e,f){this.c=d
this.d=e
this.a=f},
cyt:function cyt(d){this.a=d},
cyu:function cyu(d){this.a=d}},D,I,K,F,L,M,N
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
C.avx.prototype={}
C.a6e.prototype={}
C.ayh.prototype={}
C.FY.prototype={
gap(d){return this.c}}
C.ajl.prototype={
u(d){var x=null
return A.x(x,this.c,B.r,x,x,$.cV3(),x,x,x,B.cU,x,x,x)}}
C.H6.prototype={
u(d){var x=null,w=A.a([A.a5(A.i(this.c,x,x,x,x,B.cc,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.i(v,x,x,x,x,B.bx,x,x))
v=this.e
if(v!=null)w.push(v)
return A.x(x,A.O(w,B.u,B.h,B.l,0,x),B.r,x,x,D.Ki,x,x,x,B.dM,x,x,x)}}
C.FZ.prototype={
R(){return new C.aOe(A.D(y.N,y.R))}}
C.aOe.prototype={
KK(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KK=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cSH(u.a.c),$async$KK)
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
return A.m($async$KK,w)},
a3Z(d,e){var x=e.c
return x==null?"e"+e.b:x},
Rf(d,e){return this.aUt(d,e)},
aUt(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Rf=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cwG(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVq(t,e),$async$Rf)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cwH(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$Rf,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KK()
return A.cP(null,B.by,A.bB(!0,A.b7H(new C.cwO(x),w,y.A),null,B.Z,!0),!0,null)},
bcH(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bT7
break
case"own_code":x=D.bTk
break
case"not_found":x=D.bSE
break
default:x=D.bTm
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
q=A.a([B.kT,A.b9(r,o?B.W:B.fR,p,p,96),B.a_,A.i(v,p,p,p,p,B.hS,B.a4,p),B.P,A.i(u,p,p,p,p,D.c4Q,B.a4,p)],x)
if(o)B.e.n(q,A.a([B.d4,new A.am(A.bD(B.t3,new C.cwM(this),p),p)],x))
return q},
bc_(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.ch(r,44,d.d,!1,!0,s),B.af,A.a5(A.y(A.a([A.i(r,s,s,s,s,B.iv,s,s),D.c7Q],x),B.G,B.h,B.l),1),B.ac,D.coR],x),B.u,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.d0(B.bc,s,s,A.aK(new A.am(A.hm(D.caa,new C.cwK(this,d),A.fM(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bY,s,B.ab,B.c7,s,s,s,s)),s),36,s),s)],x))
w=A.a([new C.ajl(A.y(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bP,D.c8o],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b5L(0,d,v[t]))
return w},
b5L(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a3Z(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
r=A.a([A.i(f.d,n,n,n,n,B.iv,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.pX,A.i(B.dr[A.fI(q)-1]+", "+A.aE(q)+" "+B.bi[A.aw(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ad)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H6("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H6("Pessoas",A.p(p),n,n))
q.push(new C.H6("Chegada",n,v?new C.wq("Registada \xe0s "+C.d_n(w),!0,n):D.acH,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wq(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.coT
p=v?new C.wq("Registada \xe0s "+C.d_n(w),!0,n):D.acH
B.e.n(r,A.a([new C.H6("Bilhete",n,q,n),new C.H6("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.lq,A.i(t,n,n,n,n,B.z3,n,n),n))
i=A.a([B.bP,i,B.ar,new C.ajl(A.y(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cwI(o,e,f):n
if(r===m)r=B.yJ
else r=A.i(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kX,n,n)
t.push(A.a5(A.aK(new A.am(A.bD(r,q,n),n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ae)
x.push(A.a5(A.aK(new A.am(A.hm(D.cbM,new C.cwJ(o),A.fM(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.ab,B.c7,n,n,n,n)),n),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.u,B.h,B.l,0,n))
return i}}
C.wq.prototype={
u(d){var x=null,w=this.d,v=w?B.cz:B.dU,u=A.W(999)
return A.x(x,A.i(this.c,x,x,x,x,A.aH(x,x,w?B.cS:B.co,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.J(v,x,x,u,x,x,B.x),x,x,x,B.dm,x,x,x)}}
C.wg.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mc:A.i(x.c,w,w,w,w,B.eJ,w,w)
if(x.e)v=new A.am(A.hm(u,x.d,A.fM(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c7,w,w,w,w)),w)
else{v=v?new C.bMz():x.d
v=new A.am(A.bD(u,v,A.ce(B.z,B.z.cf(0.35),B.t,B.t,w,w,B.ab,w,w,w)),w)}return A.aK(v,52,1/0)}}
C.Dd.prototype={
R(){return new C.ac8(new A.aF(B.ak,$.aa()))}}
C.ac8.prototype={
m(){this.UC()
var x=this.e
x.Z$=$.aa()
x.W$=0
this.a6()},
UC(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.y9(v)}w.y=null
v=w.z
if(v!=null)v.aH(0)
v=w.Q
if(v!=null)v.aH(0)},
bcC(d){this.p(new C.bOF(this,d))},
Rg(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Rg=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bOy(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cJf(s,t.length===0?null:t),$async$Rg)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bOz(u))
q=r.b
if(q==null){s=r.a
v=u.bhN(s==null?"error":s)
x=1
break}u.p(new C.bOA(u,q))
u.blm(q)
case 1:return A.l(v,w)}})
return A.m($async$Rg,w)},
blm(d){var x=this
x.UC()
x.y=C.dMl(d.a,x.gb8L())
x.z=A.rr(B.hs,new C.bOM(x,d))
x.Q=A.rr(B.uK,new C.bON(x,d))},
a4F(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bOE(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aH(0)
x=w.Q
if(x!=null)x.aH(0)}},
bhN(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.h1(!0,new C.bOK(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a0(A.bZ(w,w,w,w,w,B.y,w,A.i(x,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Db(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Db=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.h1(!0,new C.bOw(),t,y.x),$async$Db)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cIp(s.a),$async$Db)
case 6:if(u.c==null){x=1
break}case 4:u.UC()
u.p(new C.bOx(u))
case 1:return A.l(v,w)}})
return A.m($async$Db,w)},
aob(){this.UC()
this.p(new C.bOD(this))},
aku(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Db()
else w.aob()
else{x=w.c
x.toString
A.al(x,!1).hA()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pW(B.lC,x.gaYJ(),"Voltar"),s=A.i(u?"Cobrar":"QR para pagar",w,w,w,w,B.hS,w,w)
return A.cY7(u,A.cP(w,B.by,A.bB(!0,new A.S(D.atq,A.y(A.a([new A.d0(B.bc,w,w,t,w),B.R,s,B.bP,A.a5(u?x.b5U():x.bd2(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bOO(x),y.K)},
b5U(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bOB(o),j=$.cV3(),i=y.p
j=A.x(n,A.y(A.a([A.i(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a4,n),B.ad,A.bj(n,n,n,A.i(E.cJA(m),n,n,n,n,D.c0J,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.u,B.h,B.l),B.r,n,n,j,n,n,n,D.asj,n,n,n)
m=A.W(999)
x=A.bG(B.fa,0.5)
m=A.a([j,B.ad,A.x(n,A.O(A.a([D.c81,B.ae,A.a5(A.cs(n,B.a6,!1,n,!0,B.y,n,A.cu(),o.e,n,n,n,n,n,2,D.aF4,B.U,!0,n,!0,n,!1,n,B.aB,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.al,n,n,n,n,n,n,n,n,n,n,n,B.kW,!0,B.au,n,B.hb,n,n,n,n),1)],i),B.u,B.h,B.l,0,n),B.r,n,n,new A.J(B.t,n,x,m,n,n,B.x),n,44,n,B.bY,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bBX[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eu(v,0,j),s=J.ao(t.a),r=t.b,t=new A.bY(s,r,A.u(t).i("bY<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.an(A.c1())
p=A.a([],i)
if(q.a>0)p.push(B.ae)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c6(n,x,n,n),A.O(u,B.u,B.h,B.l,0,n)],i))}m=A.a5(A.d6(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.y(A.a([m,B.R,new C.wg("Mostrar o QR para pagar",l?o.gakv():n,!1,j,n)],i),B.E,B.h,B.l)},
bd2(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cg(new A.ab(Date.now(),0,!1)).a
x=h<0?0:B.j.aO(h,1e6)
w=""+B.j.aO(x,60)+":"+B.f.aT(B.j.k(B.j.aK(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.d_n(h==null?new A.ab(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bQV
break
case"cancelled":h=D.bQO
break
default:h=D.bSa
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bOH()
q=j.c
q.toString
q=A.nR(q,!1).a_(0,$.b7(),y.D).b
p=q==null?i:q.x
q=$.cV3()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.i(B.f.B(p),i,i,i,i,B.iv,B.a4,i))
n.push(new A.S(F.pX,A.i(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a4,i),i))
n.push(B.R)
if(g)n.push(D.bX9)
else{m=A.W(16)
l=A.bG(B.fa,0.5)
k=f?1:0.15
n.push(A.x(i,A.fo(A.bpV(B.t,A.kj("/pagar/"+d.b),B.GJ,B.GK,B.Z,"QR para pagar "+E.cJA(j.d),186),k),B.r,i,i,new A.J(B.t,i,l,m,i,i,B.x),i,i,i,B.cU,i,i,i))}n.push(B.R)
n.push(A.i(E.cJA(j.d),i,i,i,i,B.hS,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.i(m,i,i,i,i,B.L,B.a4,i))
if(f)B.e.n(n,A.a([B.ad,D.coQ],o))
q=A.x(i,A.y(n,B.u,B.h,B.l),B.r,i,i,q,i,i,i,B.cU,i,i,i)
n=A.bj(i,i,i,h.$2("Estado",new C.wq(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a5(A.d6(A.a([q,B.aA,n,h.$2("Expira em",A.i(f?w:"\u2014",i,i,i,i,B.bx,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.wg("Cancelar cobran\xe7a",j.gaYK(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wg("Nova cobran\xe7a",j.gb7F(),!1,!1,i),B.ad,new C.wg("Fechar",new C.bOG(j),!0,!1,i)],o))
else h.push(new C.wg("Mostrar outro QR",j.gakv(),!1,j.f,i))
return A.y(h,B.E,B.h,B.l)}}
C.Fg.prototype={
R(){return new C.afO()}}
C.afO.prototype={
ad(){this.aq()
this.IC()},
IC(){var x=0,w=A.n(y.H),v=this,u
var $async$IC=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cmO(v))
x=2
return A.d(C.cOa(v.a.c),$async$IC)
case 2:u=e
if(v.c!=null)v.p(new C.cmP(v,u))
return A.l(null,w)}})
return A.m($async$IC,w)},
aS2(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nP("",d.c,"pay_request",d.d/100,x,x,new C.cmM(this),!1,new C.cmN(d),B.VL,x,w,C.dKT(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Ut(this.aS2(t),u)
x=s?"Pagar":C.dD0(t.a)
if(s)s=D.aIf
else{s=t.a
w=y.p
v=A.a([A.bO(A.a2z(s==="paid"?B.iN:B.q5,3,u,120),u,u),B.R,A.i(C.dD_(s),u,u,u,u,B.hd,B.a4,u),B.bk],w)
if(s==="error")B.e.n(v,A.a([new C.wg("Tentar outra vez",this.gaYL(),!1,!1,u),B.ad,new C.wg("Fechar",new C.cmQ(d),!0,!1,u)],w))
else v.push(new C.wg("OK",new C.cmR(d),!1,!1,u))
s=v}return new C.aOW(x,s,u)}}
C.aOW.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=A.a5(A.cp(B.bu,x,B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cyt(d),x,x,x,x,x,x,!1,B.aE),1),u=y.p,t=A.a([A.bO(A.x(x,x,B.r,x,x,new A.J(N.u9,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aA,A.O(A.a([A.a5(A.i(this.c,x,x,x,x,B.bj,x,x),1),A.pW(B.ek,new C.cyu(d),"Fechar")],u),B.u,B.h,B.l,0,x),B.a_],u)
B.e.n(t,this.d)
return A.hl(!1,B.aN,!0,x,A.y(A.a([v,A.x(x,A.y(t,B.E,B.h,B.J),B.r,x,x,M.Kj,x,x,x,new A.a4(20,10,20,20+w.r.d),x,x,1/0)],u),B.u,B.jZ,B.l),B.r,x,0,x,x,x,x,x,B.fD)}}
var z=a.updateTypes(["F<~>()","~()","L(N,m4<FY>)","~(c)","c(c)"])
C.cLm.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:158}
C.cwG.prototype={
$0(){var x=this.a
return x.f=x.a3Z(0,this.b)},
$S:0}
C.cwH.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a3Z(0,this.b),this.c)},
$S:0}
C.cwO.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bXQ
x=y.p
w=A.a([A.O(A.a([A.pW(B.lC,new C.cwN(d),"Voltar")],x),B.u,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.cgv,B.bP],x))
else w.push(B.a_)
x=this.a
if(!v)B.e.n(w,x.bcH(t))
else B.e.n(w,x.bc_(t))
return A.d6(w,u,B.CS,u,u,!1,!1)},
$S:z+2}
C.cwN.prototype={
$0(){return A.al(this.a,!1).hA()},
$S:0}
C.cwM.prototype={
$0(){var x=this.a
return x.p(new C.cwL(x))},
$S:0}
C.cwL.prototype={
$0(){var x=this.a
return x.d=x.KK()},
$S:0}
C.cwK.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).aj("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cwI.prototype={
$0(){return this.a.Rf(this.b,this.c)},
$S:0}
C.cwJ.prototype={
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
$S:56}
C.bOL.prototype={
$0(){},
$S:0}
C.bON.prototype={
$1(d){return this.aE4(d)},
aE4(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.al6(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.h(t,"state"),"paid"))s.a4F("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:481}
C.bOE.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ab(Date.now(),0,!1)},
$S:0}
C.bOK.prototype={
$1(d){var x=null
return new A.eU(D.c8i,D.cbp,A.a([new A.am(A.cK(B.mp,x,x,new C.bOI(d),x,x),x),new A.am(A.bD(D.c9q,new C.bOJ(this.a,d),x),x)],y.p),x)},
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
return new A.eU(D.cb6,D.caE,A.a([new A.am(A.cK(D.cbo,x,x,new C.bOu(d),x,x),x),new A.am(A.bD(D.c9l,new C.bOv(d),x),x)],y.p),x)},
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
x.e.k0(0,B.jd)},
$S:0}
C.bOO.prototype={
$2(d,e){if(!d)this.a.aku()},
$S:265}
C.bOB.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a5(A.bj(x,!0,x,A.hl(!1,B.aN,!0,x,A.eZ(!1,t,!0,A.aK(A.bO(w?D.aDB:A.i(d,x,x,x,x,B.oV,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bOC(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fO(u,D.K5),x,x,B.cW),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:276}
C.bOC.prototype={
$0(){return this.a.bcC(this.b)},
$S:0}
C.bOH.prototype={
$2(d,e){var x=null
return A.x(x,A.O(A.a([A.a5(A.i(d,x,x,x,x,B.cc,x,x),1),e],y.p),B.u,B.h,B.l,0,x),B.r,x,x,D.Ki,x,x,x,B.ck,x,x,x)},
$S:1376}
C.bOG.prototype={
$0(){var x=this.a.c
x.toString
return A.al(x,!1).hA()},
$S:0}
C.cmO.prototype={
$0(){return this.a.d=null},
$S:0}
C.cmP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cmM.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEl(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEl(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.al6(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.ajD)
t=r.h(s,"error")
if(t!=null)throw A.q(A.b_J(A.p(t)))
v=A.cOb(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:153}
C.cmN.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.ox
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.al6(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.h(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1377}
C.cmQ.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
C.cmR.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
C.cyt.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
C.cyu.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dKT","dCZ",4)
var u
w(u=C.ac8.prototype,"gakv","Rg",0)
v(u,"gb8L","a4F",3)
w(u,"gaYK","Db",0)
w(u,"gb7F","aob",1)
w(u,"gaYJ","aku",1)
w(C.afO.prototype,"gaYL","IC",0)})();(function inheritance(){var x=a.inheritMany
x(A.M,[C.avx,C.a6e,C.ayh,C.FY])
x(A.bu,[C.cLm,C.bOM,C.bON,C.bOK,C.bOw,C.bOB,C.cmM])
x(A.L,[C.ajl,C.H6,C.wq,C.wg,C.aOW])
x(A.G,[C.FZ,C.Dd,C.Fg])
x(A.a_,[C.aOe,C.ac8,C.afO])
x(A.bL,[C.cwG,C.cwH,C.cwN,C.cwM,C.cwL,C.cwK,C.cwI,C.cwJ,C.bMz,C.bOF,C.bOy,C.bOz,C.bOA,C.bOL,C.bOE,C.bOI,C.bOJ,C.bOu,C.bOv,C.bOx,C.bOD,C.bOC,C.bOG,C.cmO,C.cmP,C.cmN,C.cmQ,C.cmR,C.cyt,C.cyu])
x(A.cL,[C.cwO,C.bOO,C.bOH])})()
A.br(b.typeUniverse,JSON.parse('{"ajl":{"L":[],"e":[],"f":[]},"H6":{"L":[],"e":[],"f":[]},"FZ":{"G":[],"e":[],"f":[]},"aOe":{"a_":["FZ"]},"wq":{"L":[],"e":[],"f":[]},"wg":{"L":[],"e":[],"f":[]},"Dd":{"G":[],"e":[],"f":[]},"ac8":{"a_":["Dd"]},"Fg":{"G":[],"e":[],"f":[]},"afO":{"a_":["Fg"]},"aOW":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.C
return{D:x("cI"),E:x("r<ayh>"),s:x("r<c>"),p:x("r<e>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("dv"),K:x("M"),y:x("a6e"),m:x("ox"),k:x("+(c,bm)"),R:x("+at,result(ab?,c)"),u:x("+error,request(c?,avx?)"),A:x("FY"),N:x("c"),v:x("aQ<FY>"),q:x("dl"),x:x("B"),z:x("@"),g:x("t<@>?"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.K5=new A.bd(B.fa,0.5,B.ag,-1)
D.aeZ=new A.dN(D.K5,B.aa,B.aa,B.aa)
D.Ki=new A.J(null,null,D.aeZ,null,null,null,B.x)
D.ajD=new A.Dj("invalid_state")
D.asj=new A.a4(14,18,14,18)
D.atq=new A.a4(20,8,20,20)
D.aCf=new A.b0(61109,"MaterialIcons",null,!0)
D.aDB=new A.b8(D.aCf,22,B.z,null,null,null)
D.aF4=new A.dE(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.b1,null,null,B.b1,B.b1,!0,null,null,null,null)
D.bXt=new A.l_(40,40,20,B.t,0,null)
D.bXl=new A.l_(null,32,12,B.t,1,null)
D.azK=new A.bK(1,B.at,D.bXl,null)
D.bwt=x([D.bXt,B.af,D.azK],y.p)
D.bTO=new A.mk(B.bJ,B.h,B.l,B.u,null,B.cg,null,0,D.bwt,null)
D.bXn=new A.l_(null,120,22,B.t,1,null)
D.bXs=new A.l_(null,56,22,B.t,2,null)
D.bXu=new A.l_(null,52,26,B.t,2,null)
D.aIf=x([D.bTO,B.bP,D.bXn,B.R,D.bXs,B.a_,D.bXu],y.p)
D.bxj=x(["1","2","3"],y.s)
D.bw2=x(["4","5","6"],y.s)
D.btQ=x(["7","8","9"],y.s)
D.b6y=x(["00","0","del"],y.s)
D.bBX=x([D.bxj,D.bw2,D.btQ,D.b6y],A.C("r<t<c>>"))
D.a1T=new C.a6e("error",null,"",0,null)
D.bQO=new A.X("Cancelado",!1)
D.bQV=new A.X("Expirou",!1)
D.bSa=new A.X("\xc0 espera\u2026",!1)
D.bSE=new A.bX(I.kE,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bT7=new A.bX(B.hB,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTk=new A.bX(B.kD,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTm=new A.bX(B.E3,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.byZ=x([],y.E)
D.H1=new C.FY("error",null,null,null,D.byZ,"entry",null)
D.aut=new A.nz(B.iN,150,3,null,null)
D.ajf=new A.f8(B.K,null,null,D.aut,null)
D.bX9=new A.c6(null,214,D.ajf,null)
D.bXQ=new A.vY(!1,3,!1,null)
D.c0J=new A.P(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4Q=new A.P(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7Q=new A.E("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c81=new A.E("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c8i=new A.E("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c8o=new A.E("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.ml,null,null,null,null,null,null,null)
D.c9l=new A.E("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.c9q=new A.E("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.caa=new A.E("Ver perfil",null,K.rU,null,null,null,null,null,null,null)
D.caE=new A.E("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.cb6=new A.E("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.cbo=new A.E("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.cbp=new A.E("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.cbM=new A.E("Cobrar",null,B.kX,null,null,null,null,null,null,null)
D.cgv=new A.E("Quem \xe9",null,B.hS,null,null,null,null,null,null,null)
D.coQ=new C.wq("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.coR=new C.wq("Verificado",!0,null)
D.acH=new C.wq("Por registar",!1,null)
D.coT=new C.wq("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVL","cV3",()=>{var w=A.W(16)
return A.dp0(A.bG(B.fa,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["s0d8sBnd51tZSbYRLo3pYfP4OfE="]=a.current})($__dart_deferred_initializers__);