((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cIC(d,e){return C.dJC(d,e)},
dJC(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cIC=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cIC)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.p(J.i(s,"id"))
q=A.p(J.i(s,"code"))
p=A.d2(A.p(J.i(s,"expires_at")))
p=p==null?null:p.dH()
if(p==null)p=new A.ab(Date.now(),0,!1).em(6e8)
v=new A.YP(null,new C.avi(r,q,p))
x=1
break}r=r.b(s)?A.p(J.i(s,"result")):"error"
v=new A.YP(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.YP("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cIC,w)},
cHO(d){return C.dIW(d)},
dIW(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHO=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aH("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cHO)
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
return A.m($async$cHO,w)},
dLv(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.LU(0,"pay-request-"+d,B.yh).NL(new C.cKI(e),B.GE,new G.Fo(H.y4,"id",d),"public","pay_requests").Pz(0)},
cNu(d){return C.dMI(d)},
dMI(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cNu=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cNu)
case 7:s=f
if(!y.f.b(s)){v=D.a1P
x=1
break}r=A.p(J.i(s,"result"))
q=A.C(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.p(p==null?"":p)
o=A.aD(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.i(s,"description"))
v=new C.a5Z(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a1P
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cNu,w)},
akT(d){return C.dK0(d)},
dK0(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$akT=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f3("event-pay",d),$async$akT)
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
if(o instanceof A.po){q=o
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
return A.m($async$akT,w)},
avi:function avi(d,e,f){this.a=d
this.b=e
this.c=f},
cKI:function cKI(d){this.a=d},
a5Z:function a5Z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cS_(d){return C.dNm(d)},
dNm(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cS_=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aH("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cS_)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.GZ
x=1
break}o=A.p(J.i(s,"result"))
n=A.C(J.i(s,"scan_id"))
m=A.C(J.i(s,"name"))
l=A.C(J.i(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.i(s,"items"))
j=J.ao(j==null?B.ai:j)
while(j.q()){q=j.gE(j)
if(p.b(q)){i=q
h=J.a7(i)
g=h.h(i,"ticket")
f=A.p(h.h(i,"kind"))
e=A.p(h.h(i,"wedding_id"))
d=A.C(h.h(i,"booking_id"))
a0=h.h(i,"event")
a0=A.p(a0==null?"Evento":a0)
a1=h.h(i,"date")
a1=A.d2(A.p(a1==null?"":a1))
a2=A.C(h.h(i,"booking_number"))
a3=A.aD(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.C(J.i(g,"status")):null
if(a5){a5=A.aD(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.d2(A.p(a7==null?"":a7))
a7=a7==null?null:a7.dH()
J.o(h.h(i,"can_charge"),!0)
J.bb(r,new C.ay0(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dR(p)
p=p===!0?"entry":"profile"}k=A.C(J.i(s,"profile_id"))
v=new C.FR(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cU){v=D.GZ
x=1
break}else{v=D.GZ
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cS_,w)},
aV7(d,e){return C.dNl(d,e)},
dNl(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aV7=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aH("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aV7)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aH("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aV7)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YN(null,"error")
x=1
break}r=A.p(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d2(A.p(q==null?"":q))
q=q==null?null:q.dH()
v=new A.YN(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YN(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aV7,w)},
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
FR:function FR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cZH(d){return B.f.aT(B.j.k(A.hZ(d)),2,"0")+":"+B.f.aT(B.j.k(A.hO(d)),2,"0")},
d8v(d){return new C.FS(d,null)},
dot(){return new C.D8(null)},
dv9(d){return new C.Fb(d,null)},
dCc(d){var x
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
default:x=A.aUV(d)
break}return x},
dCe(d){var x
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
dCd(d){var x
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
aj7:function aj7(d,e){this.c=d
this.a=e},
GY:function GY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FS:function FS(d,e){this.c=d
this.a=e},
aNY:function aNY(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cw4:function cw4(d,e){this.a=d
this.b=e},
cw5:function cw5(d,e,f){this.a=d
this.b=e
this.c=f},
cwc:function cwc(d){this.a=d},
cwb:function cwb(d){this.a=d},
cwa:function cwa(d){this.a=d},
cw9:function cw9(d){this.a=d},
cw8:function cw8(d,e){this.a=d
this.b=e},
cw6:function cw6(d,e,f){this.a=d
this.b=e
this.c=f},
cw7:function cw7(d){this.a=d},
wl:function wl(d,e,f){this.c=d
this.d=e
this.a=f},
wb:function wb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bM2:function bM2(){},
D8:function D8(d){this.a=d},
abV:function abV(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bO6:function bO6(d,e){this.a=d
this.b=e},
bO_:function bO_(d){this.a=d},
bO0:function bO0(d){this.a=d},
bO1:function bO1(d,e){this.a=d
this.b=e},
bOd:function bOd(d,e){this.a=d
this.b=e},
bOc:function bOc(){},
bOe:function bOe(d,e){this.a=d
this.b=e},
bO5:function bO5(d,e){this.a=d
this.b=e},
bOb:function bOb(d){this.a=d},
bO9:function bO9(d){this.a=d},
bOa:function bOa(d,e){this.a=d
this.b=e},
bNY:function bNY(){},
bNW:function bNW(d){this.a=d},
bNX:function bNX(d){this.a=d},
bNZ:function bNZ(d){this.a=d},
bO4:function bO4(d){this.a=d},
bOf:function bOf(d){this.a=d},
bO2:function bO2(d){this.a=d},
bO3:function bO3(d,e){this.a=d
this.b=e},
bO8:function bO8(){},
bO7:function bO7(d){this.a=d},
Fb:function Fb(d,e){this.c=d
this.a=e},
afA:function afA(){this.c=this.a=this.d=null},
cmg:function cmg(d){this.a=d},
cmh:function cmh(d,e){this.a=d
this.b=e},
cme:function cme(d){this.a=d},
cmf:function cmf(d){this.a=d},
cmi:function cmi(d){this.a=d},
cmj:function cmj(d){this.a=d},
aOF:function aOF(d,e,f){this.c=d
this.d=e
this.a=f},
cxS:function cxS(d){this.a=d},
cxT:function cxT(d){this.a=d}},D,I,K,F,L,M,N
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
C.avi.prototype={}
C.a5Z.prototype={}
C.ay0.prototype={}
C.FR.prototype={
gap(d){return this.c}}
C.aj7.prototype={
u(d){var x=null
return A.x(x,this.c,B.r,x,x,$.cUm(),x,x,x,B.cT,x,x,x)}}
C.GY.prototype={
u(d){var x=null,w=A.a([A.a5(A.h(this.c,x,x,x,x,B.cc,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bx,x,x))
v=this.e
if(v!=null)w.push(v)
return A.x(x,A.O(w,B.v,B.h,B.l,0,x),B.r,x,x,D.Ki,x,x,x,B.dM,x,x,x)}}
C.FS.prototype={
R(){return new C.aNY(A.E(y.N,y.R))}}
C.aNY.prototype={
KL(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KL=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cS_(u.a.c),$async$KL)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ae(t).Gj("/u/"+A.p(s),null,y.X)
v=new A.aQ($.aU,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$KL,w)},
a3W(d,e){var x=e.c
return x==null?"e"+e.b:x},
Rd(d,e){return this.aUh(d,e)},
aUh(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Rd=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cw4(u,e))
t=d.b
t.toString
x=3
return A.d(C.aV7(t,e),$async$Rd)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cw5(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$Rd,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KL()
return A.cP(null,B.by,A.bB(!0,A.b7n(new C.cwc(x),w,y.A),null,B.Z,!0),!0,null)},
bcv(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bT1
break
case"own_code":x=D.bTe
break
case"not_found":x=D.bSy
break
default:x=D.bTg
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
q=A.a([B.kT,A.b9(r,o?B.W:B.fR,p,p,96),B.a_,A.h(v,p,p,p,p,B.hR,B.a3,p),B.P,A.h(u,p,p,p,p,D.c4F,B.a3,p)],x)
if(o)B.e.n(q,A.a([B.d4,new A.am(A.bD(B.t4,new C.cwa(this),p),p)],x))
return q},
bbN(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.cg(r,44,d.d,!1,!0,s),B.af,A.a5(A.y(A.a([A.h(r,s,s,s,s,B.iu,s,s),D.c7E],x),B.G,B.h,B.l),1),B.ab,D.coE],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.d_(B.bc,s,s,A.aK(new A.am(A.hk(D.c9Y,new C.cw8(this,d),A.fM(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bY,s,B.aa,B.c7,s,s,s,s)),s),36,s),s)],x))
w=A.a([new C.aj7(A.y(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bO,D.c8c],x))
else for(t=0;t<v.length;v.length===u||(0,A.G)(v),++t)B.e.n(w,this.b5z(0,d,v[t]))
return w},
b5z(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a3W(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
r=A.a([A.h(f.d,n,n,n,n,B.iu,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.pX,A.h(B.dq[A.fF(q)-1]+", "+A.aE(q)+" "+B.bg[A.aw(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ac)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.GY("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.GY("Pessoas",A.p(p),n,n))
q.push(new C.GY("Chegada",n,v?new C.wl("Registada \xe0s "+C.cZH(w),!0,n):D.acE,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wl(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.coG
p=v?new C.wl("Registada \xe0s "+C.cZH(w),!0,n):D.acE
B.e.n(r,A.a([new C.GY("Bilhete",n,q,n),new C.GY("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.lq,A.h(t,n,n,n,n,B.z2,n,n),n))
i=A.a([B.bO,i,B.ar,new C.aj7(A.y(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cw6(o,e,f):n
if(r===m)r=B.yJ
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kX,n,n)
t.push(A.a5(A.aK(new A.am(A.bD(r,q,n),n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ae)
x.push(A.a5(A.aK(new A.am(A.hk(D.cbz,new C.cw7(o),A.fM(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.aa,B.c7,n,n,n,n)),n),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.v,B.h,B.l,0,n))
return i}}
C.wl.prototype={
u(d){var x=null,w=this.d,v=w?B.cz:B.dU,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?B.cR:B.cn,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.I(v,x,x,u,x,x,B.x),x,x,x,B.dl,x,x,x)}}
C.wb.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mc:A.h(x.c,w,w,w,w,B.eJ,w,w)
if(x.e)v=new A.am(A.hk(u,x.d,A.fM(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.aa,B.c7,w,w,w,w)),w)
else{v=v?new C.bM2():x.d
v=new A.am(A.bD(u,v,A.cc(B.z,B.z.cc(0.35),B.t,B.t,w,w,B.aa,w,w,w)),w)}return A.aK(v,52,1/0)}}
C.D8.prototype={
R(){return new C.abV(new A.aF(B.ak,$.aa()))}}
C.abV.prototype={
m(){this.UA()
var x=this.e
x.Z$=$.aa()
x.W$=0
this.a6()},
UA(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.y6(v)}w.y=null
v=w.z
if(v!=null)v.aK(0)
v=w.Q
if(v!=null)v.aK(0)},
bcq(d){this.p(new C.bO6(this,d))},
Re(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Re=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bO_(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cIC(s,t.length===0?null:t),$async$Re)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bO0(u))
q=r.b
if(q==null){s=r.a
v=u.bhC(s==null?"error":s)
x=1
break}u.p(new C.bO1(u,q))
u.bla(q)
case 1:return A.l(v,w)}})
return A.m($async$Re,w)},
bla(d){var x=this
x.UA()
x.y=C.dLv(d.a,x.gb8z())
x.z=A.u6(B.hr,new C.bOd(x,d))
x.Q=A.u6(B.uK,new C.bOe(x,d))},
a4C(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bO5(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aK(0)
x=w.Q
if(x!=null)x.aK(0)}},
bhC(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.h1(!0,new C.bOb(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a0(A.bY(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Da(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Da=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.h1(!0,new C.bNY(),t,y.x),$async$Da)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHO(s.a),$async$Da)
case 6:if(u.c==null){x=1
break}case 4:u.UA()
u.p(new C.bNZ(u))
case 1:return A.l(v,w)}})
return A.m($async$Da,w)},
ao7(){this.UA()
this.p(new C.bO4(this))},
aks(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Da()
else w.ao7()
else{x=w.c
x.toString
A.al(x,!1).hz()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pV(B.lC,x.gaYx(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hR,w,w)
return A.cXq(u,A.cP(w,B.by,A.bB(!0,new A.S(D.atm,A.y(A.a([new A.d_(B.bc,w,w,t,w),B.R,s,B.bO,A.a5(u?x.b5I():x.bcR(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bOf(x),y.K)},
b5I(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bO2(o),j=$.cUm(),i=y.p
j=A.x(n,A.y(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a3,n),B.ac,A.bj(n,n,n,A.h(E.cIX(m),n,n,n,n,D.c0y,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.asf,n,n,n)
m=A.W(999)
x=A.bF(B.fa,0.5)
m=A.a([j,B.ac,A.x(n,A.O(A.a([D.c7Q,B.ae,A.a5(A.cs(n,B.a6,!1,n,!0,B.y,n,A.cu(),o.e,n,n,n,n,n,2,D.aF_,B.U,!0,n,!0,n,!1,n,B.aB,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.al,n,n,n,n,n,n,n,n,n,n,n,B.kW,!0,B.au,n,B.hb,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.I(B.t,n,x,m,n,n,B.x),n,44,n,B.bY,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bBS[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eu(v,0,j),s=J.ao(t.a),r=t.b,t=new A.bX(s,r,A.u(t).i("bX<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.an(A.c0())
p=A.a([],i)
if(q.a>0)p.push(B.ae)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c5(n,x,n,n),A.O(u,B.v,B.h,B.l,0,n)],i))}m=A.a5(A.d6(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.y(A.a([m,B.R,new C.wb("Mostrar o QR para pagar",l?o.gakt():n,!1,j,n)],i),B.E,B.h,B.l)},
bcR(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cg(new A.ab(Date.now(),0,!1)).a
x=h<0?0:B.j.aO(h,1e6)
w=""+B.j.aO(x,60)+":"+B.f.aT(B.j.k(B.j.aI(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.cZH(h==null?new A.ab(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bQP
break
case"cancelled":h=D.bQI
break
default:h=D.bS4
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bO8()
q=j.c
q.toString
q=A.nP(q,!1).a_(0,$.b7(),y.D).b
p=q==null?i:q.x
q=$.cUm()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.iu,B.a3,i))
n.push(new A.S(F.pX,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a3,i),i))
n.push(B.R)
if(g)n.push(D.bX_)
else{m=A.W(16)
l=A.bF(B.fa,0.5)
k=f?1:0.15
n.push(A.x(i,A.f3(A.bpq(B.t,A.kg("/pagar/"+d.b),B.GG,B.GH,B.Z,"QR para pagar "+E.cIX(j.d),186),k),B.r,i,i,new A.I(B.t,i,l,m,i,i,B.x),i,i,i,B.cT,i,i,i))}n.push(B.R)
n.push(A.h(E.cIX(j.d),i,i,i,i,B.hR,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a3,i))
if(f)B.e.n(n,A.a([B.ac,D.coD],o))
q=A.x(i,A.y(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.cT,i,i,i)
n=A.bj(i,i,i,h.$2("Estado",new C.wl(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a5(A.d6(A.a([q,B.aA,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bx,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.wb("Cancelar cobran\xe7a",j.gaYy(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wb("Nova cobran\xe7a",j.gb7t(),!1,!1,i),B.ac,new C.wb("Fechar",new C.bO7(j),!0,!1,i)],o))
else h.push(new C.wb("Mostrar outro QR",j.gakt(),!1,j.f,i))
return A.y(h,B.E,B.h,B.l)}}
C.Fb.prototype={
R(){return new C.afA()}}
C.afA.prototype={
ad(){this.aq()
this.IB()},
IB(){var x=0,w=A.n(y.H),v=this,u
var $async$IB=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cmg(v))
x=2
return A.d(C.cNu(v.a.c),$async$IB)
case 2:u=e
if(v.c!=null)v.p(new C.cmh(v,u))
return A.l(null,w)}})
return A.m($async$IB,w)},
aRT(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nN("",d.c,"pay_request",d.d/100,x,x,new C.cme(this),!1,new C.cmf(d),B.VG,x,w,C.dK3(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Ui(this.aRT(t),u)
x=s?"Pagar":C.dCe(t.a)
if(s)s=D.aIb
else{s=t.a
w=y.p
v=A.a([A.bO(A.a2l(s==="paid"?B.iM:B.q5,3,u,120),u,u),B.R,A.h(C.dCd(s),u,u,u,u,B.hd,B.a3,u),B.bh],w)
if(s==="error")B.e.n(v,A.a([new C.wb("Tentar outra vez",this.gaYz(),!1,!1,u),B.ac,new C.wb("Fechar",new C.cmi(d),!0,!1,u)],w))
else v.push(new C.wb("OK",new C.cmj(d),!1,!1,u))
s=v}return new C.aOF(x,s,u)}}
C.aOF.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=A.a5(A.cp(B.bu,x,B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxS(d),x,x,x,x,x,x,!1,B.aD),1),u=y.p,t=A.a([A.bO(A.x(x,x,B.r,x,x,new A.I(N.ua,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aA,A.O(A.a([A.a5(A.h(this.c,x,x,x,x,B.bi,x,x),1),A.pV(B.ek,new C.cxT(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a_],u)
B.e.n(t,this.d)
return A.hj(!1,B.aN,!0,x,A.y(A.a([v,A.x(x,A.y(t,B.E,B.h,B.J),B.r,x,x,M.Kj,x,x,x,new A.a4(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.jZ,B.l),B.r,x,0,x,x,x,x,x,B.fD)}}
var z=a.updateTypes(["F<~>()","~()","L(N,m4<FR>)","~(c)","c(c)"])
C.cKI.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:153}
C.cw4.prototype={
$0(){var x=this.a
return x.f=x.a3W(0,this.b)},
$S:0}
C.cw5.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a3W(0,this.b),this.c)},
$S:0}
C.cwc.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bXG
x=y.p
w=A.a([A.O(A.a([A.pV(B.lC,new C.cwb(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.cgi,B.bO],x))
else w.push(B.a_)
x=this.a
if(!v)B.e.n(w,x.bcv(t))
else B.e.n(w,x.bbN(t))
return A.d6(w,u,B.CQ,u,u,!1,!1)},
$S:z+2}
C.cwb.prototype={
$0(){return A.al(this.a,!1).hz()},
$S:0}
C.cwa.prototype={
$0(){var x=this.a
return x.p(new C.cw9(x))},
$S:0}
C.cw9.prototype={
$0(){var x=this.a
return x.d=x.KL()},
$S:0}
C.cw8.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).aj("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cw6.prototype={
$0(){return this.a.Rd(this.b,this.c)},
$S:0}
C.cw7.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).aj("/cobrar",null,y.X)},
$S:0}
C.bM2.prototype={
$0(){},
$S:0}
C.bO6.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aO(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dB(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bO_.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bO0.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bO1.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bOd.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.he(new A.ab(Date.now(),0,!1)))x.a4C("expired")
else x.p(new C.bOc())},
$S:64}
C.bOc.prototype={
$0(){},
$S:0}
C.bOe.prototype={
$1(d){return this.aDX(d)},
aDX(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.akT(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a4C("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:503}
C.bO5.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ab(Date.now(),0,!1)},
$S:0}
C.bOb.prototype={
$1(d){var x=null
return new A.eU(D.c86,D.cbc,A.a([new A.am(A.cJ(B.mp,x,x,new C.bO9(d),x,x),x),new A.am(A.bD(D.c9d,new C.bOa(this.a,d),x),x)],y.p),x)},
$S:19}
C.bO9.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
C.bOa.prototype={
$0(){A.al(this.b,!1).bk()
var x=this.a.c
x.toString
A.ae(x).aj("/partner-payments/setup",null,y.X)},
$S:0}
C.bNY.prototype={
$1(d){var x=null
return new A.eU(D.caU,D.car,A.a([new A.am(A.cJ(D.cbb,x,x,new C.bNW(d),x,x),x),new A.am(A.bD(D.c98,new C.bNX(d),x),x)],y.p),x)},
$S:19}
C.bNW.prototype={
$0(){return A.al(this.a,!1).af(!1)},
$S:0}
C.bNX.prototype={
$0(){return A.al(this.a,!1).af(!0)},
$S:0}
C.bNZ.prototype={
$0(){return this.a.r=null},
$S:0}
C.bO4.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.k_(0,B.ja)},
$S:0}
C.bOf.prototype={
$2(d,e){if(!d)this.a.aks()},
$S:235}
C.bO2.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a5(A.bj(x,!0,x,A.hj(!1,B.aN,!0,x,A.eY(!1,t,!0,A.aK(A.bO(w?D.aDx:A.h(d,x,x,x,x,B.oW,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bO3(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fO(u,D.K5),x,x,B.cW),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:231}
C.bO3.prototype={
$0(){return this.a.bcq(this.b)},
$S:0}
C.bO8.prototype={
$2(d,e){var x=null
return A.x(x,A.O(A.a([A.a5(A.h(d,x,x,x,x,B.cc,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.Ki,x,x,x,B.cj,x,x,x)},
$S:1375}
C.bO7.prototype={
$0(){var x=this.a.c
x.toString
return A.al(x,!1).hz()},
$S:0}
C.cmg.prototype={
$0(){return this.a.d=null},
$S:0}
C.cmh.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cme.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEd(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEd(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.akT(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.ajz)
t=r.h(s,"error")
if(t!=null)throw A.q(A.b_r(A.p(t)))
v=A.cNv(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:157}
C.cmf.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.ox
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.akT(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1376}
C.cmi.prototype={
$0(){return A.ae(this.a).af(null)},
$S:0}
C.cmj.prototype={
$0(){return A.ae(this.a).af(null)},
$S:0}
C.cxS.prototype={
$0(){return A.ae(this.a).af(null)},
$S:0}
C.cxT.prototype={
$0(){return A.ae(this.a).af(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dK3","dCc",4)
var u
w(u=C.abV.prototype,"gakt","Re",0)
v(u,"gb8z","a4C",3)
w(u,"gaYy","Da",0)
w(u,"gb7t","ao7",1)
w(u,"gaYx","aks",1)
w(C.afA.prototype,"gaYz","IB",0)})();(function inheritance(){var x=a.inheritMany
x(A.M,[C.avi,C.a5Z,C.ay0,C.FR])
x(A.bt,[C.cKI,C.bOd,C.bOe,C.bOb,C.bNY,C.bO2,C.cme])
x(A.L,[C.aj7,C.GY,C.wl,C.wb,C.aOF])
x(A.H,[C.FS,C.D8,C.Fb])
x(A.a_,[C.aNY,C.abV,C.afA])
x(A.bL,[C.cw4,C.cw5,C.cwb,C.cwa,C.cw9,C.cw8,C.cw6,C.cw7,C.bM2,C.bO6,C.bO_,C.bO0,C.bO1,C.bOc,C.bO5,C.bO9,C.bOa,C.bNW,C.bNX,C.bNZ,C.bO4,C.bO3,C.bO7,C.cmg,C.cmh,C.cmf,C.cmi,C.cmj,C.cxS,C.cxT])
x(A.cK,[C.cwc,C.bOf,C.bO8])})()
A.br(b.typeUniverse,JSON.parse('{"aj7":{"L":[],"e":[],"f":[]},"GY":{"L":[],"e":[],"f":[]},"FS":{"H":[],"e":[],"f":[]},"aNY":{"a_":["FS"]},"wl":{"L":[],"e":[],"f":[]},"wb":{"L":[],"e":[],"f":[]},"D8":{"H":[],"e":[],"f":[]},"abV":{"a_":["D8"]},"Fb":{"H":[],"e":[],"f":[]},"afA":{"a_":["Fb"]},"aOF":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.A
return{D:x("cH"),E:x("r<ay0>"),s:x("r<c>"),p:x("r<e>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("du"),K:x("M"),y:x("a5Z"),m:x("ow"),k:x("+(c,bl)"),R:x("+at,result(ab?,c)"),u:x("+error,request(c?,avi?)"),A:x("FR"),N:x("c"),v:x("aQ<FR>"),q:x("dl"),x:x("B"),z:x("@"),g:x("t<@>?"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.K5=new A.bh(B.fa,0.5,B.aj,-1)
D.aeV=new A.dM(D.K5,B.ad,B.ad,B.ad)
D.Ki=new A.I(null,null,D.aeV,null,null,null,B.x)
D.ajz=new A.De("invalid_state")
D.asf=new A.a4(14,18,14,18)
D.atm=new A.a4(20,8,20,20)
D.aCb=new A.b0(61109,"MaterialIcons",null,!0)
D.aDx=new A.b8(D.aCb,22,B.z,null,null,null)
D.aF_=new A.dE(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.br,null,null,B.br,B.br,!0,null,null,null,null)
D.bXj=new A.kY(40,40,20,B.t,0,null)
D.bXb=new A.kY(null,32,12,B.t,1,null)
D.azF=new A.bJ(1,B.at,D.bXb,null)
D.bwo=x([D.bXj,B.af,D.azF],y.p)
D.bTF=new A.nS(B.bJ,B.h,B.l,B.v,null,B.cg,null,0,D.bwo,null)
D.bXd=new A.kY(null,120,22,B.t,1,null)
D.bXi=new A.kY(null,56,22,B.t,2,null)
D.bXk=new A.kY(null,52,26,B.t,2,null)
D.aIb=x([D.bTF,B.bO,D.bXd,B.R,D.bXi,B.a_,D.bXk],y.p)
D.bxe=x(["1","2","3"],y.s)
D.bvY=x(["4","5","6"],y.s)
D.btL=x(["7","8","9"],y.s)
D.b6u=x(["00","0","del"],y.s)
D.bBS=x([D.bxe,D.bvY,D.btL,D.b6u],A.A("r<t<c>>"))
D.a1P=new C.a5Z("error",null,"",0,null)
D.bQI=new A.X("Cancelado",!1)
D.bQP=new A.X("Expirou",!1)
D.bS4=new A.X("\xc0 espera\u2026",!1)
D.bSy=new A.bW(I.kE,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bT1=new A.bW(B.hA,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTe=new A.bW(B.kD,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTg=new A.bW(B.E1,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.byT=x([],y.E)
D.GZ=new C.FR("error",null,null,null,D.byT,"entry",null)
D.auo=new A.nx(B.iM,150,3,null,null)
D.ajc=new A.f6(B.K,null,null,D.auo,null)
D.bX_=new A.c5(null,214,D.ajc,null)
D.bXG=new A.vU(!1,3,!1,null)
D.c0y=new A.P(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4F=new A.P(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7E=new A.D("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c7Q=new A.D("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c86=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c8c=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.ml,null,null,null,null,null,null,null)
D.c98=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.c9d=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.c9Y=new A.D("Ver perfil",null,K.rV,null,null,null,null,null,null,null)
D.car=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.caU=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.cbb=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.cbc=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.cbz=new A.D("Cobrar",null,B.kX,null,null,null,null,null,null,null)
D.cgi=new A.D("Quem \xe9",null,B.hR,null,null,null,null,null,null,null)
D.coD=new C.wl("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.coE=new C.wl("Verificado",!0,null)
D.acE=new C.wl("Por registar",!1,null)
D.coG=new C.wl("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUT","cUm",()=>{var w=A.W(16)
return A.doc(A.bF(B.fa,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["Lg3KXDW1Mel4SPZ7vtXLW2REq7k="]=a.current})($__dart_deferred_initializers__);