((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cID(d,e){return C.dJR(d,e)},
dJR(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cID=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cID)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.p(J.i(s,"id"))
q=A.p(J.i(s,"code"))
p=A.d3(A.p(J.i(s,"expires_at")))
p=p==null?null:p.dJ()
if(p==null)p=new A.ad(Date.now(),0,!1).en(6e8)
v=new A.Z0(null,new C.avy(r,q,p))
x=1
break}r=r.b(s)?A.p(J.i(s,"result")):"error"
v=new A.Z0(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.Z0("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cID,w)},
cHN(d){return C.dJ9(d)},
dJ9(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHN=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aG("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cHN)
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
return A.m($async$cHN,w)},
dLL(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.LR(0,"pay-request-"+d,B.yg).NK(new C.cKK(e),B.GH,new G.Fv(H.y3,"id",d),"public","pay_requests").Py(0)},
cNz(d){return C.dMY(d)},
dMY(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cNz=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cNz)
case 7:s=f
if(!y.f.b(s)){v=D.a1T
x=1
break}r=A.p(J.i(s,"result"))
q=A.A(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.p(p==null?"":p)
o=A.aD(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.A(J.i(s,"description"))
v=new C.a6g(r,q,p,o,n)
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
return A.m($async$cNz,w)},
al8(d){return C.dKf(d)},
dKf(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$al8=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f2("event-pay",d),$async$al8)
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
avy:function avy(d,e,f){this.a=d
this.b=e
this.c=f},
cKK:function cKK(d){this.a=d},
a6g:function a6g(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cS6(d){return C.dND(d)},
dND(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cS6=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aG("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cS6)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.H1
x=1
break}o=A.p(J.i(s,"result"))
n=A.A(J.i(s,"scan_id"))
m=A.A(J.i(s,"name"))
l=A.A(J.i(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.i(s,"items"))
j=J.ao(j==null?B.aj:j)
while(j.q()){q=j.gE(j)
if(p.b(q)){i=q
h=J.a6(i)
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
a6=a5?A.A(J.i(g,"status")):null
if(a5){a5=A.aD(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.d3(A.p(a7==null?"":a7))
a7=a7==null?null:a7.dJ()
J.o(h.h(i,"can_charge"),!0)
J.bn(r,new C.ayi(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.A(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dQ(p)
p=p===!0?"entry":"profile"}k=A.A(J.i(s,"profile_id"))
v=new C.G_(o,n,m,l,r,p,k)
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
return A.m($async$cS6,w)},
aVr(d,e){return C.dNC(d,e)},
dNC(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVr=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aG("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVr)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aG("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVr)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YZ(null,"error")
x=1
break}r=A.p(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d3(A.p(q==null?"":q))
q=q==null?null:q.dJ()
v=new A.YZ(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YZ(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVr,w)},
ayi:function ayi(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
G_:function G_(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cZO(d){return B.f.aT(B.j.k(A.i_(d)),2,"0")+":"+B.f.aT(B.j.k(A.hQ(d)),2,"0")},
d8F(d){return new C.G0(d,null)},
doF(){return new C.Df(null)},
dvj(d){return new C.Fi(d,null)},
dCn(d){var x
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
default:x=A.aVe(d)
break}return x},
dCp(d){var x
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
dCo(d){var x
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
H8:function H8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
G0:function G0(d,e){this.c=d
this.a=e},
aOg:function aOg(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cw0:function cw0(d,e){this.a=d
this.b=e},
cw1:function cw1(d,e,f){this.a=d
this.b=e
this.c=f},
cw8:function cw8(d){this.a=d},
cw7:function cw7(d){this.a=d},
cw6:function cw6(d){this.a=d},
cw5:function cw5(d){this.a=d},
cw4:function cw4(d,e){this.a=d
this.b=e},
cw2:function cw2(d,e,f){this.a=d
this.b=e
this.c=f},
cw3:function cw3(d){this.a=d},
wr:function wr(d,e,f){this.c=d
this.d=e
this.a=f},
wh:function wh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bLU:function bLU(){},
Df:function Df(d){this.a=d},
aca:function aca(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bO_:function bO_(d,e){this.a=d
this.b=e},
bNT:function bNT(d){this.a=d},
bNU:function bNU(d){this.a=d},
bNV:function bNV(d,e){this.a=d
this.b=e},
bO6:function bO6(d,e){this.a=d
this.b=e},
bO5:function bO5(){},
bO7:function bO7(d,e){this.a=d
this.b=e},
bNZ:function bNZ(d,e){this.a=d
this.b=e},
bO4:function bO4(d){this.a=d},
bO2:function bO2(d){this.a=d},
bO3:function bO3(d,e){this.a=d
this.b=e},
bNR:function bNR(){},
bNP:function bNP(d){this.a=d},
bNQ:function bNQ(d){this.a=d},
bNS:function bNS(d){this.a=d},
bNY:function bNY(d){this.a=d},
bO8:function bO8(d){this.a=d},
bNW:function bNW(d){this.a=d},
bNX:function bNX(d,e){this.a=d
this.b=e},
bO1:function bO1(){},
bO0:function bO0(d){this.a=d},
Fi:function Fi(d,e){this.c=d
this.a=e},
afQ:function afQ(){this.c=this.a=this.d=null},
cm8:function cm8(d){this.a=d},
cm9:function cm9(d,e){this.a=d
this.b=e},
cm6:function cm6(d){this.a=d},
cm7:function cm7(d){this.a=d},
cma:function cma(d){this.a=d},
cmb:function cmb(d){this.a=d},
aOY:function aOY(d,e,f){this.c=d
this.d=e
this.a=f},
cxO:function cxO(d){this.a=d},
cxP:function cxP(d){this.a=d}},D,I,K,F,L,M,N
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
C.avy.prototype={}
C.a6g.prototype={}
C.ayi.prototype={}
C.G_.prototype={
gao(d){return this.c}}
C.ajn.prototype={
u(d){var x=null
return A.w(x,this.c,B.r,x,x,$.cUt(),x,x,x,B.cU,x,x,x)}}
C.H8.prototype={
u(d){var x=null,w=A.a([A.a5(A.h(this.c,x,x,x,x,B.cc,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bx,x,x))
v=this.e
if(v!=null)w.push(v)
return A.w(x,A.O(w,B.u,B.h,B.l,0,x),B.r,x,x,D.Ki,x,x,x,B.dN,x,x,x)}}
C.G0.prototype={
P(){return new C.aOg(A.E(y.N,y.R))}}
C.aOg.prototype={
KI(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cS6(u.a.c),$async$KI)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ae(t).Gi("/u/"+A.p(s),null,y.X)
v=new A.aQ($.aU,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$KI,w)},
a3V(d,e){var x=e.c
return x==null?"e"+e.b:x},
Rd(d,e){return this.aUo(d,e)},
aUo(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Rd=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.n(new C.cw0(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVr(t,e),$async$Rd)
case 3:s=g
if(u.c==null){x=1
break}u.n(new C.cw1(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$Rd,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KI()
return A.cP(null,B.by,A.bB(!0,A.b7I(new C.cw8(x),w,y.A),null,B.Z,!0),!0,null)},
bcB(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
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
q=A.a([B.kS,A.b9(r,o?B.W:B.fR,p,p,96),B.a_,A.h(v,p,p,p,p,B.hS,B.a4,p),B.P,A.h(u,p,p,p,p,D.c4P,B.a4,p)],x)
if(o)B.e.p(q,A.a([B.d4,new A.ak(A.bD(B.t2,new C.cw6(this),p),p)],x))
return q},
bbU(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.ch(r,44,d.d,!1,!0,s),B.af,A.a5(A.x(A.a([A.h(r,s,s,s,s,B.iv,s,s),D.c7P],x),B.G,B.h,B.l),1),B.ac,D.coQ],x),B.u,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.p(w,A.a([B.R,new A.d0(B.bc,s,s,A.aK(new A.ak(A.hm(D.ca9,new C.cw4(this,d),A.fN(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bY,s,B.ab,B.c7,s,s,s,s)),s),36,s),s)],x))
w=A.a([new C.ajn(A.x(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.p(w,A.a([B.bP,D.c8n],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.p(w,this.b5F(0,d,v[t]))
return w},
b5F(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a3V(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
r=A.a([A.h(f.d,n,n,n,n,B.iv,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.pW,A.h(B.dr[A.fI(q)-1]+", "+A.aE(q)+" "+B.bi[A.aw(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ad)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H8("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H8("Pessoas",A.p(p),n,n))
q.push(new C.H8("Chegada",n,v?new C.wr("Registada \xe0s "+C.cZO(w),!0,n):D.acH,n))
B.e.p(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wr(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.coS
p=v?new C.wr("Registada \xe0s "+C.cZO(w),!0,n):D.acH
B.e.p(r,A.a([new C.H8("Bilhete",n,q,n),new C.H8("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.lq,A.h(t,n,n,n,n,B.z2,n,n),n))
i=A.a([B.bP,i,B.ar,new C.ajn(A.x(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cw2(o,e,f):n
if(r===m)r=B.yI
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kX,n,n)
t.push(A.a5(A.aK(new A.ak(A.bD(r,q,n),n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ae)
x.push(A.a5(A.aK(new A.ak(A.hm(D.cbL,new C.cw3(o),A.fN(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.ab,B.c7,n,n,n,n)),n),44,n),1))
B.e.p(t,x)}i.push(A.O(t,B.u,B.h,B.l,0,n))
return i}}
C.wr.prototype={
u(d){var x=null,w=this.d,v=w?B.cz:B.dU,u=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?B.cS:B.co,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.J(v,x,x,u,x,x,B.x),x,x,x,B.dm,x,x,x)}}
C.wh.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.md:A.h(x.c,w,w,w,w,B.eJ,w,w)
if(x.e)v=new A.ak(A.hm(u,x.d,A.fN(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c7,w,w,w,w)),w)
else{v=v?new C.bLU():x.d
v=new A.ak(A.bD(u,v,A.ce(B.z,B.z.ce(0.35),B.t,B.t,w,w,B.ab,w,w,w)),w)}return A.aK(v,52,1/0)}}
C.Df.prototype={
P(){return new C.aca(new A.aF(B.ak,$.aa()))}}
C.aca.prototype={
m(){this.Uz()
var x=this.e
x.Z$=$.aa()
x.V$=0
this.a6()},
Uz(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.y7(v)}w.y=null
v=w.z
if(v!=null)v.aH(0)
v=w.Q
if(v!=null)v.aH(0)},
bcw(d){this.n(new C.bO_(this,d))},
Re(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Re=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.n(new C.bNT(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cID(s,t.length===0?null:t),$async$Re)
case 3:r=e
if(u.c==null){x=1
break}u.n(new C.bNU(u))
q=r.b
if(q==null){s=r.a
v=u.bhH(s==null?"error":s)
x=1
break}u.n(new C.bNV(u,q))
u.blg(q)
case 1:return A.l(v,w)}})
return A.m($async$Re,w)},
blg(d){var x=this
x.Uz()
x.y=C.dLL(d.a,x.gb8F())
x.z=A.rs(B.hs,new C.bO6(x,d))
x.Q=A.rs(B.uJ,new C.bO7(x,d))},
a4B(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.n(new C.bNZ(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aH(0)
x=w.Q
if(x!=null)x.aH(0)}},
bhH(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.h1(!0,new C.bO4(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a0(A.bZ(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Da(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Da=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.h1(!0,new C.bNR(),t,y.x),$async$Da)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHN(s.a),$async$Da)
case 6:if(u.c==null){x=1
break}case 4:u.Uz()
u.n(new C.bNS(u))
case 1:return A.l(v,w)}})
return A.m($async$Da,w)},
ao5(){this.Uz()
this.n(new C.bNY(this))},
akp(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Da()
else w.ao5()
else{x=w.c
x.toString
A.an(x,!1).iu()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pX(B.lC,x.gaYE(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hS,w,w)
return A.cXy(u,A.cP(w,B.by,A.bB(!0,new A.S(D.atq,A.x(A.a([new A.d0(B.bc,w,w,t,w),B.R,s,B.bP,A.a5(u?x.b5O():x.bcX(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bO8(x),y.K)},
b5O(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bNW(o),j=$.cUt(),i=y.p
j=A.w(n,A.x(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a4,n),B.ad,A.bh(n,n,n,A.h(E.cIY(m),n,n,n,n,D.c0I,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.u,B.h,B.l),B.r,n,n,j,n,n,n,D.asj,n,n,n)
m=A.W(999)
x=A.bG(B.fa,0.5)
m=A.a([j,B.ad,A.w(n,A.O(A.a([D.c80,B.ae,A.a5(A.cs(n,B.a6,!1,n,!0,B.y,n,A.cu(),o.e,n,n,n,n,n,2,D.aF4,B.U,!0,n,!0,n,!1,n,B.aB,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.al,n,n,n,n,n,n,n,n,n,n,n,B.kW,!0,B.au,n,B.hb,n,n,n,n),1)],i),B.u,B.h,B.l,0,n),B.r,n,n,new A.J(B.t,n,x,m,n,n,B.x),n,44,n,B.bY,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bBX[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eu(v,0,j),s=J.ao(t.a),r=t.b,t=new A.bY(s,r,A.u(t).i("bY<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.am(A.c1())
p=A.a([],i)
if(q.a>0)p.push(B.ae)
p.push(k.$1(q.b))
B.e.p(u,p)}B.e.p(m,A.a([new A.c6(n,x,n,n),A.O(u,B.u,B.h,B.l,0,n)],i))}m=A.a5(A.d6(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.x(A.a([m,B.R,new C.wh("Mostrar o QR para pagar",l?o.gakq():n,!1,j,n)],i),B.E,B.h,B.l)},
bcX(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cf(new A.ad(Date.now(),0,!1)).a
x=h<0?0:B.j.aO(h,1e6)
w=""+B.j.aO(x,60)+":"+B.f.aT(B.j.k(B.j.aK(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.cZO(h==null?new A.ad(Date.now(),0,!1):h),!0)
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
h=new C.bO1()
q=j.c
q.toString
q=A.n3(q,!1).a_(0,$.b7(),y.D).b
p=q==null?i:q.x
q=$.cUt()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.iv,B.a4,i))
n.push(new A.S(F.pW,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a4,i),i))
n.push(B.R)
if(g)n.push(D.bX7)
else{m=A.W(16)
l=A.bG(B.fa,0.5)
k=f?1:0.15
n.push(A.w(i,A.fn(A.bpW(B.t,A.kk("/pagar/"+d.b),B.GJ,B.GK,B.Z,"QR para pagar "+E.cIY(j.d),186),k),B.r,i,i,new A.J(B.t,i,l,m,i,i,B.x),i,i,i,B.cU,i,i,i))}n.push(B.R)
n.push(A.h(E.cIY(j.d),i,i,i,i,B.hS,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a4,i))
if(f)B.e.p(n,A.a([B.ad,D.coP],o))
q=A.w(i,A.x(n,B.u,B.h,B.l),B.r,i,i,q,i,i,i,B.cU,i,i,i)
n=A.bh(i,i,i,h.$2("Estado",new C.wr(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a5(A.d6(A.a([q,B.aA,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bx,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.wh("Cancelar cobran\xe7a",j.gaYF(),!0,!1,i))
else if(g)B.e.p(h,A.a([new C.wh("Nova cobran\xe7a",j.gb7z(),!1,!1,i),B.ad,new C.wh("Fechar",new C.bO0(j),!0,!1,i)],o))
else h.push(new C.wh("Mostrar outro QR",j.gakq(),!1,j.f,i))
return A.x(h,B.E,B.h,B.l)}}
C.Fi.prototype={
P(){return new C.afQ()}}
C.afQ.prototype={
ac(){this.ap()
this.IA()},
IA(){var x=0,w=A.n(y.H),v=this,u
var $async$IA=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.n(new C.cm8(v))
x=2
return A.d(C.cNz(v.a.c),$async$IA)
case 2:u=e
if(v.c!=null)v.n(new C.cm9(v,u))
return A.l(null,w)}})
return A.m($async$IA,w)},
aRX(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nQ("",d.c,"pay_request",d.d/100,x,x,new C.cm6(this),!1,new C.cm7(d),B.VL,x,w,C.dKi(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Uv(this.aRX(t),u)
x=s?"Pagar":C.dCp(t.a)
if(s)s=D.aIf
else{s=t.a
w=y.p
v=A.a([A.bN(A.a2B(s==="paid"?B.iN:B.q4,3,u,120),u,u),B.R,A.h(C.dCo(s),u,u,u,u,B.hd,B.a4,u),B.bk],w)
if(s==="error")B.e.p(v,A.a([new C.wh("Tentar outra vez",this.gaYG(),!1,!1,u),B.ad,new C.wh("Fechar",new C.cma(d),!0,!1,u)],w))
else v.push(new C.wh("OK",new C.cmb(d),!1,!1,u))
s=v}return new C.aOY(x,s,u)}}
C.aOY.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=A.a5(A.cp(B.bu,x,B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxO(d),x,x,x,x,x,x,!1,B.aE),1),u=y.p,t=A.a([A.bN(A.w(x,x,B.r,x,x,new A.J(N.u8,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aA,A.O(A.a([A.a5(A.h(this.c,x,x,x,x,B.bj,x,x),1),A.pX(B.el,new C.cxP(d),"Fechar")],u),B.u,B.h,B.l,0,x),B.a_],u)
B.e.p(t,this.d)
return A.hl(!1,B.aN,!0,x,A.x(A.a([v,A.w(x,A.x(t,B.E,B.h,B.J),B.r,x,x,M.Kj,x,x,x,new A.a4(20,10,20,20+w.r.d),x,x,1/0)],u),B.u,B.jZ,B.l),B.r,x,0,x,x,x,x,x,B.fD)}}
var z=a.updateTypes(["F<~>()","~()","L(N,m5<G_>)","~(c)","c(c)"])
C.cKK.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:156}
C.cw0.prototype={
$0(){var x=this.a
return x.f=x.a3V(0,this.b)},
$S:0}
C.cw1.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a3V(0,this.b),this.c)},
$S:0}
C.cw8.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bXO
x=y.p
w=A.a([A.O(A.a([A.pX(B.lC,new C.cw7(d),"Voltar")],x),B.u,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.p(w,A.a([B.R,D.cgu,B.bP],x))
else w.push(B.a_)
x=this.a
if(!v)B.e.p(w,x.bcB(t))
else B.e.p(w,x.bbU(t))
return A.d6(w,u,B.CS,u,u,!1,!1)},
$S:z+2}
C.cw7.prototype={
$0(){return A.an(this.a,!1).iu()},
$S:0}
C.cw6.prototype={
$0(){var x=this.a
return x.n(new C.cw5(x))},
$S:0}
C.cw5.prototype={
$0(){var x=this.a
return x.d=x.KI()},
$S:0}
C.cw4.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ah("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cw2.prototype={
$0(){return this.a.Rd(this.b,this.c)},
$S:0}
C.cw3.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ah("/cobrar",null,y.X)},
$S:0}
C.bLU.prototype={
$0(){},
$S:0}
C.bO_.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aO(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dB(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bNT.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bNU.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bNV.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bO6.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.he(new A.ad(Date.now(),0,!1)))x.a4B("expired")
else x.n(new C.bO5())},
$S:62}
C.bO5.prototype={
$0(){},
$S:0}
C.bO7.prototype={
$1(d){return this.aDZ(d)},
aDZ(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.al8(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a4B("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:488}
C.bNZ.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ad(Date.now(),0,!1)},
$S:0}
C.bO4.prototype={
$1(d){var x=null
return new A.eT(D.c8h,D.cbo,A.a([new A.ak(A.cK(B.mp,x,x,new C.bO2(d),x,x),x),new A.ak(A.bD(D.c9p,new C.bO3(this.a,d),x),x)],y.p),x)},
$S:19}
C.bO2.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
C.bO3.prototype={
$0(){A.an(this.b,!1).bj()
var x=this.a.c
x.toString
A.ae(x).ah("/partner-payments/setup",null,y.X)},
$S:0}
C.bNR.prototype={
$1(d){var x=null
return new A.eT(D.cb5,D.caD,A.a([new A.ak(A.cK(D.cbn,x,x,new C.bNP(d),x,x),x),new A.ak(A.bD(D.c9k,new C.bNQ(d),x),x)],y.p),x)},
$S:19}
C.bNP.prototype={
$0(){return A.an(this.a,!1).aq(!1)},
$S:0}
C.bNQ.prototype={
$0(){return A.an(this.a,!1).aq(!0)},
$S:0}
C.bNS.prototype={
$0(){return this.a.r=null},
$S:0}
C.bNY.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.k_(0,B.jd)},
$S:0}
C.bO8.prototype={
$2(d,e){if(!d)this.a.akp()},
$S:234}
C.bNW.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a5(A.bh(x,!0,x,A.hl(!1,B.aN,!0,x,A.eY(!1,t,!0,A.aK(A.bN(w?D.aDB:A.h(d,x,x,x,x,B.oU,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bNX(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fP(u,D.K5),x,x,B.cW),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:230}
C.bNX.prototype={
$0(){return this.a.bcw(this.b)},
$S:0}
C.bO1.prototype={
$2(d,e){var x=null
return A.w(x,A.O(A.a([A.a5(A.h(d,x,x,x,x,B.cc,x,x),1),e],y.p),B.u,B.h,B.l,0,x),B.r,x,x,D.Ki,x,x,x,B.ck,x,x,x)},
$S:1371}
C.bO0.prototype={
$0(){var x=this.a.c
x.toString
return A.an(x,!1).iu()},
$S:0}
C.cm8.prototype={
$0(){return this.a.d=null},
$S:0}
C.cm9.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cm6.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEf(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEf(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.al8(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a6(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.ajD)
t=r.h(s,"error")
if(t!=null)throw A.q(A.b_L(A.p(t)))
v=A.cNA(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:140}
C.cm7.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.ow
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.al8(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1372}
C.cma.prototype={
$0(){return A.iO(this.a,!0)},
$S:0}
C.cmb.prototype={
$0(){return A.iO(this.a,!0)},
$S:0}
C.cxO.prototype={
$0(){return A.iO(this.a,!0)},
$S:0}
C.cxP.prototype={
$0(){return A.iO(this.a,!0)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dKi","dCn",4)
var u
w(u=C.aca.prototype,"gakq","Re",0)
v(u,"gb8F","a4B",3)
w(u,"gaYF","Da",0)
w(u,"gb7z","ao5",1)
w(u,"gaYE","akp",1)
w(C.afQ.prototype,"gaYG","IA",0)})();(function inheritance(){var x=a.inheritMany
x(A.M,[C.avy,C.a6g,C.ayi,C.G_])
x(A.bu,[C.cKK,C.bO6,C.bO7,C.bO4,C.bNR,C.bNW,C.cm6])
x(A.L,[C.ajn,C.H8,C.wr,C.wh,C.aOY])
x(A.G,[C.G0,C.Df,C.Fi])
x(A.Z,[C.aOg,C.aca,C.afQ])
x(A.bL,[C.cw0,C.cw1,C.cw7,C.cw6,C.cw5,C.cw4,C.cw2,C.cw3,C.bLU,C.bO_,C.bNT,C.bNU,C.bNV,C.bO5,C.bNZ,C.bO2,C.bO3,C.bNP,C.bNQ,C.bNS,C.bNY,C.bNX,C.bO0,C.cm8,C.cm9,C.cm7,C.cma,C.cmb,C.cxO,C.cxP])
x(A.cL,[C.cw8,C.bO8,C.bO1])})()
A.br(b.typeUniverse,JSON.parse('{"ajn":{"L":[],"e":[],"f":[]},"H8":{"L":[],"e":[],"f":[]},"G0":{"G":[],"e":[],"f":[]},"aOg":{"Z":["G0"]},"wr":{"L":[],"e":[],"f":[]},"wh":{"L":[],"e":[],"f":[]},"Df":{"G":[],"e":[],"f":[]},"aca":{"Z":["Df"]},"Fi":{"G":[],"e":[],"f":[]},"afQ":{"Z":["Fi"]},"aOY":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{D:x("cI"),E:x("r<ayi>"),s:x("r<c>"),p:x("r<e>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("dv"),K:x("M"),y:x("a6g"),m:x("ow"),k:x("+(c,bm)"),R:x("+at,result(ad?,c)"),u:x("+error,request(c?,avy?)"),A:x("G_"),N:x("c"),v:x("aQ<G_>"),q:x("dj"),x:x("C"),z:x("@"),g:x("t<@>?"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.K5=new A.bc(B.fa,0.5,B.ag,-1)
D.aeZ=new A.dN(D.K5,B.aa,B.aa,B.aa)
D.Ki=new A.J(null,null,D.aeZ,null,null,null,B.x)
D.ajD=new A.Dl("invalid_state")
D.asj=new A.a4(14,18,14,18)
D.atq=new A.a4(20,8,20,20)
D.aCf=new A.b0(61109,"MaterialIcons",null,!0)
D.aDB=new A.b8(D.aCf,22,B.z,null,null,null)
D.aF4=new A.dE(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.b1,null,null,B.b1,B.b1,!0,null,null,null,null)
D.bXr=new A.l_(40,40,20,B.t,0,null)
D.bXj=new A.l_(null,32,12,B.t,1,null)
D.azK=new A.bK(1,B.at,D.bXj,null)
D.bwt=x([D.bXr,B.af,D.azK],y.p)
D.bTN=new A.mm(B.bJ,B.h,B.l,B.u,null,B.cg,null,0,D.bwt,null)
D.bXl=new A.l_(null,120,22,B.t,1,null)
D.bXq=new A.l_(null,56,22,B.t,2,null)
D.bXs=new A.l_(null,52,26,B.t,2,null)
D.aIf=x([D.bTN,B.bP,D.bXl,B.R,D.bXq,B.a_,D.bXs],y.p)
D.bxj=x(["1","2","3"],y.s)
D.bw2=x(["4","5","6"],y.s)
D.btQ=x(["7","8","9"],y.s)
D.b6y=x(["00","0","del"],y.s)
D.bBX=x([D.bxj,D.bw2,D.btQ,D.b6y],A.B("r<t<c>>"))
D.a1T=new C.a6g("error",null,"",0,null)
D.bQN=new A.X("Cancelado",!1)
D.bQU=new A.X("Expirou",!1)
D.bS9=new A.X("\xc0 espera\u2026",!1)
D.bSD=new A.bX(I.kD,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bT6=new A.bX(B.hB,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTj=new A.bX(B.kC,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTl=new A.bX(B.E3,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.byZ=x([],y.E)
D.H1=new C.G_("error",null,null,null,D.byZ,"entry",null)
D.aut=new A.nB(B.iN,150,3,null,null)
D.ajf=new A.f8(B.K,null,null,D.aut,null)
D.bX7=new A.c6(null,214,D.ajf,null)
D.bXO=new A.vZ(!1,3,!1,null)
D.c0I=new A.P(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4P=new A.P(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7P=new A.D("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c80=new A.D("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c8h=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c8n=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.ml,null,null,null,null,null,null,null)
D.c9k=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.c9p=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.ca9=new A.D("Ver perfil",null,K.rT,null,null,null,null,null,null,null)
D.caD=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.cb5=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.cbn=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.cbo=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.cbL=new A.D("Cobrar",null,B.kX,null,null,null,null,null,null,null)
D.cgu=new A.D("Quem \xe9",null,B.hS,null,null,null,null,null,null,null)
D.coP=new C.wr("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.coQ=new C.wr("Verificado",!0,null)
D.acH=new C.wr("Por registar",!1,null)
D.coS=new C.wr("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVb","cUt",()=>{var w=A.W(16)
return A.doo(A.bG(B.fa,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["BdKmKgQd4W4DPWU7rUfw/UNfGZY="]=a.current})($__dart_deferred_initializers__);