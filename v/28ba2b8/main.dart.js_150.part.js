((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cIm(d,e){return C.dIU(d,e)},
dIU(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cIm=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cIm)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.q(J.i(s,"id"))
q=A.q(J.i(s,"code"))
p=A.d4(A.q(J.i(s,"expires_at")))
p=p==null?null:p.dM()
if(p==null)p=new A.ac(Date.now(),0,!1).el(6e8)
v=new A.YU(null,new C.avt(r,q,p))
x=1
break}r=r.b(s)?A.q(J.i(s,"result")):"error"
v=new A.YU(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.YU("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cIm,w)},
cHy(d){return C.dId(d)},
dId(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHy=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.P().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aK("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cHy)
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
return A.m($async$cHy,w)},
dKM(d,e){var x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.Mf(0,"pay-request-"+d,B.yr).O9(new C.cKr(e),B.GP,new G.Fv(H.ye,"id",d),"public","pay_requests").Q3(0)},
cNb(d){return C.dM_(d)},
dM_(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cNb=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aK("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cNb)
case 7:s=f
if(!y.f.b(s)){v=D.a23
x=1
break}r=A.q(J.i(s,"result"))
q=A.C(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.q(p==null?"":p)
o=A.aF(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.i(s,"description"))
v=new C.a67(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a23
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cNb,w)},
al9(d){return C.dJi(d)},
dJi(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$al9=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.P().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f4("event-pay",d),$async$al9)
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
if(o instanceof A.pl){q=o
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
return A.m($async$al9,w)},
avt:function avt(d,e,f){this.a=d
this.b=e
this.c=f},
cKr:function cKr(d){this.a=d},
a67:function a67(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cRr(d){return C.dMD(d)},
dMD(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cRr=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aK("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cRr)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.H9
x=1
break}o=A.q(J.i(s,"result"))
n=A.C(J.i(s,"scan_id"))
m=A.C(J.i(s,"name"))
l=A.C(J.i(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.i(s,"items"))
j=J.ar(j==null?B.ak:j)
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
J.bt(r,new C.ayb(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dK(p)
p=p===!0?"entry":"profile"}k=A.C(J.i(s,"profile_id"))
v=new C.FX(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cU){v=D.H9
x=1
break}else{v=D.H9
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cRr,w)},
aVm(d,e){return C.dMC(d,e)},
dMC(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVm=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.P().b
p===$&&A.b()
x=10
return A.d(p.aK("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVm)
case 10:o=g
x=8
break
case 9:p=$.P().b
p===$&&A.b()
x=11
return A.d(p.aK("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVm)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YS(null,"error")
x=1
break}r=A.q(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d4(A.q(q==null?"":q))
q=q==null?null:q.dM()
v=new A.YS(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.YS(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVm,w)},
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
cZe(d){return B.f.aV(B.j.k(A.ic(d)),2,"0")+":"+B.f.aV(B.j.k(A.hZ(d)),2,"0")},
d8_(d){return new C.FY(d,null)},
dnM(){return new C.Dd(null)},
dus(d){return new C.Fh(d,null)},
dBw(d){var x
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
default:x=A.aV9(d)
break}return x},
dBy(d){var x
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
dBx(d){var x
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
aOc:function aOc(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cvV:function cvV(d,e){this.a=d
this.b=e},
cvW:function cvW(d,e,f){this.a=d
this.b=e
this.c=f},
cw2:function cw2(d){this.a=d},
cw1:function cw1(d){this.a=d},
cw0:function cw0(d){this.a=d},
cw_:function cw_(d){this.a=d},
cvZ:function cvZ(d,e){this.a=d
this.b=e},
cvX:function cvX(d,e,f){this.a=d
this.b=e
this.c=f},
cvY:function cvY(d){this.a=d},
wl:function wl(d,e,f){this.c=d
this.d=e
this.a=f},
wa:function wa(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bM3:function bM3(){},
Dd:function Dd(d){this.a=d},
ac8:function ac8(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bOc:function bOc(d,e){this.a=d
this.b=e},
bO5:function bO5(d){this.a=d},
bO6:function bO6(d){this.a=d},
bO7:function bO7(d,e){this.a=d
this.b=e},
bOj:function bOj(d,e){this.a=d
this.b=e},
bOi:function bOi(){},
bOk:function bOk(d,e){this.a=d
this.b=e},
bOb:function bOb(d,e){this.a=d
this.b=e},
bOh:function bOh(d){this.a=d},
bOf:function bOf(d){this.a=d},
bOg:function bOg(d,e){this.a=d
this.b=e},
bO3:function bO3(){},
bO1:function bO1(d){this.a=d},
bO2:function bO2(d){this.a=d},
bO4:function bO4(d){this.a=d},
bOa:function bOa(d){this.a=d},
bOl:function bOl(d){this.a=d},
bO8:function bO8(d){this.a=d},
bO9:function bO9(d,e){this.a=d
this.b=e},
bOe:function bOe(){},
bOd:function bOd(d){this.a=d},
Fh:function Fh(d,e){this.c=d
this.a=e},
afS:function afS(){this.c=this.a=this.d=null},
cma:function cma(d){this.a=d},
cmb:function cmb(d,e){this.a=d
this.b=e},
cm8:function cm8(d){this.a=d},
cm9:function cm9(d){this.a=d},
cmc:function cmc(d){this.a=d},
cmd:function cmd(d){this.a=d},
aOT:function aOT(d,e,f){this.c=d
this.d=e
this.a=f},
cxH:function cxH(d){this.a=d},
cxI:function cxI(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[87]
G=c[123]
H=c[242]
C=a.updateHolder(c[14],C)
D=c[281]
I=c[234]
K=c[244]
F=c[282]
L=c[56]
M=c[284]
N=c[283]
C.avt.prototype={}
C.a67.prototype={}
C.ayb.prototype={}
C.FX.prototype={
gar(d){return this.c}}
C.ajn.prototype={
u(d){var x=null
return A.A(x,this.c,B.r,x,x,$.cTR(),x,x,x,B.cX,x,x,x)}}
C.H0.prototype={
u(d){var x=null,w=A.a([A.a5(A.h(this.c,x,x,x,x,B.ce,x,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bB,x,x,x))
v=this.e
if(v!=null)w.push(v)
return A.A(x,A.O(w,B.v,B.h,B.l,0,x),B.r,x,x,D.Ku,x,x,x,B.dW,x,x,x)}}
C.FY.prototype={
R(){return new C.aOc(A.E(y.N,y.R))}}
C.aOc.prototype={
L4(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$L4=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cRr(u.a.c),$async$L4)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ae(t).Gx("/u/"+A.q(s),null,y.X)
v=new A.aN($.aT,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$L4,w)},
a4x(d,e){var x=e.c
return x==null?"e"+e.b:x},
RD(d,e){return this.aV6(d,e)},
aV6(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$RD=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cvV(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVm(t,e),$async$RD)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cvW(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$RD,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.L4()
return A.cQ(null,B.bx,A.bD(!0,A.b7K(new C.cw2(x),w,y.A),null,B.Z,!0),!0,null)},
bdP(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bTa
break
case"own_code":x=D.bTn
break
case"not_found":x=D.bSH
break
default:x=D.bTp
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
q=A.a([B.kQ,A.b5(r,o?B.V:B.fN,p,p,96),B.a0,A.h(v,p,p,p,p,B.hP,B.a4,p,p),B.Q,A.h(u,p,p,p,p,D.c4Z,B.a4,p,p)],x)
if(o)B.e.n(q,A.a([B.dh,A.bE(B.tk,new C.cw0(this),p)],x))
return q},
bd9(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.ci(r,44,d.d,!1,!0,s),B.ae,A.a5(A.B(A.a([A.h(r,s,s,s,s,B.is,s,s,s),D.ceY],x),B.G,B.h,B.l),1),B.ad,D.coP],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.d0(B.be,s,s,A.aH(A.hh(D.cel,new C.cvZ(this,d),A.fP(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bP,s,B.ac,B.c8,s,s,s,s)),36,s),s)],x))
w=A.a([new C.ajn(A.B(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bM,D.cbG],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.n(w,this.b6X(0,d,v[t]))
return w},
b6X(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a4x(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
s=i}i=A.h(k?"A TUA MARCA\xc7\xc3O":"ENTRADA NO TEU EVENTO",n,n,n,n,B.aK,n,n,n)
x=y.p
r=A.a([A.h(f.d,n,n,n,n,B.is,n,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.qi,A.h(B.du[A.fG(q)-1]+", "+A.ay(q)+" "+B.bg[A.an(q)-1],n,n,n,n,B.M,n,n,n),n))
r.push(B.ab)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H0("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H0("Pessoas",A.q(p),n,n))
q.push(new C.H0("Chegada",n,v?new C.wl("Registada \xe0s "+C.cZe(w),!0,n):D.acN,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wl(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.coR
p=v?new C.wl("Registada \xe0s "+C.cZe(w),!0,n):D.acN
B.e.n(r,A.a([new C.H0("Bilhete",n,q,n),new C.H0("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.ls,A.h(t,n,n,n,n,B.za,n,n,n),n))
i=A.a([B.bM,i,B.ar,new C.ajn(A.B(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cvX(o,e,f):n
if(r===m)r=B.yR
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kV,n,n,n)
t.push(A.a5(A.aH(A.bE(r,q,n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ag)
x.push(A.a5(A.aH(A.hh(D.ce0,new C.cvY(o),A.fP(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.ac,B.c8,n,n,n,n)),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.v,B.h,B.l,0,n))
return i}}
C.wl.prototype={
u(d){var x=null,w=this.d,v=w?B.cy:B.dU,u=A.W(999)
return A.A(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?B.cV:B.cp,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.K(v,x,x,u,x,x,B.x),x,x,x,B.dq,x,x,x)}}
C.wa.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mg:A.h(x.c,w,w,w,w,B.eK,w,w,w)
if(x.e)v=A.hh(u,x.d,A.fP(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.ac,B.c8,w,w,w,w))
else{v=v?new C.bM3():x.d
v=A.bE(u,v,A.cj(B.z,B.z.cd(0.35),B.t,B.t,w,w,B.ac,w,w,w))}return A.aH(v,52,1/0)}}
C.Dd.prototype={
R(){return new C.ac8(new A.aE(B.aj,$.aa()))}}
C.ac8.prototype={
m(){this.V0()
var x=this.e
x.Y$=$.aa()
x.W$=0
this.a6()},
V0(){var x,w=this,v=w.y
if(v!=null){x=$.P().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.yg(v)}w.y=null
v=w.z
if(v!=null)v.aN(0)
v=w.Q
if(v!=null)v.aN(0)},
bdL(d){this.p(new C.bOc(this,d))},
RE(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$RE=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bO5(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cIm(s,t.length===0?null:t),$async$RE)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bO6(u))
q=r.b
if(q==null){s=r.a
v=u.biY(s==null?"error":s)
x=1
break}u.p(new C.bO7(u,q))
u.bmx(q)
case 1:return A.l(v,w)}})
return A.m($async$RE,w)},
bmx(d){var x=this
x.V0()
x.y=C.dKM(d.a,x.gb9X())
x.z=A.u4(B.fR,new C.bOj(x,d))
x.Q=A.u4(B.uW,new C.bOk(x,d))},
a5d(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bOb(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aN(0)
x=w.Q
if(x!=null)x.aN(0)}},
biY(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.fR(!0,new C.bOh(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a2(A.c0(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Dl(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dl=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.fR(!0,new C.bO3(),t,y.x),$async$Dl)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHy(s.a),$async$Dl)
case 6:if(u.c==null){x=1
break}case 4:u.V0()
u.p(new C.bO4(u))
case 1:return A.l(v,w)}})
return A.m($async$Dl,w)},
aoL(){this.V0()
this.p(new C.bOa(this))},
al0(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dl()
else w.aoL()
else{x=w.c
x.toString
A.am(x,!1).iw()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pU(B.lD,x.gaZo(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hP,w,w,w)
return A.bo2(u,A.cQ(w,B.bx,A.bD(!0,new A.S(D.aty,A.B(A.a([new A.d0(B.be,w,w,t,w),B.R,s,B.bM,A.a5(u?x.b75():x.bea(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bOl(x),y.K)},
b75(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bO8(o),j=$.cTR(),i=y.p
j=A.A(n,A.B(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.M,B.a4,n,n),B.ab,A.ba(n,n,n,A.h(E.cIG(m),n,n,n,n,D.c0X,n,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a3,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.asq,n,n,n)
m=A.W(999)
x=A.bA(B.fo,0.5)
m=A.a([j,B.ab,A.A(n,A.O(A.a([D.cds,B.ag,A.a5(A.cr(n,B.a6,!1,n,!0,B.y,n,A.cs(),o.e,n,n,n,n,n,2,D.aF6,B.W,!0,n,!0,n,!1,n,B.aC,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.ao,n,n,n,n,n,n,n,n,n,n,n,B.kU,!0,B.at,n,B.hd,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.K(B.t,n,x,m,n,n,B.x),n,44,n,B.bP,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bC3[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eU(v,0,j),s=J.ar(t.a),r=t.b,t=new A.cg(s,r,A.u(t).i("cg<1>"));t.t();){q=t.c
q=q>=0?new A.a0(r+q,s.gE(s)):A.al(A.c9())
p=A.a([],i)
if(q.a>0)p.push(B.ag)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c_(n,x,n,n),A.O(u,B.v,B.h,B.l,0,n)],i))}m=A.a5(A.d6(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.B(A.a([m,B.R,new C.wa("Mostrar o QR para pagar",l?o.gal1():n,!1,j,n)],i),B.E,B.h,B.l)},
bea(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cw(new A.ac(Date.now(),0,!1)).a
x=h<0?0:B.j.aP(h,1e6)
w=""+B.j.aP(x,60)+":"+B.f.aV(B.j.k(B.j.aF(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.a0("Pago \xe0s "+C.cZe(h==null?new A.ac(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bR0
break
case"cancelled":h=D.bQU
break
default:h=D.bSd
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bOe()
q=j.c
q.toString
q=A.nQ(q,!1).a1(0,$.b8(),y.D).b
p=q==null?i:q.x
q=$.cTR()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.is,B.a4,i,i))
n.push(new A.S(F.qi,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.M,B.a4,i,i),i))
n.push(B.R)
if(g)n.push(D.bXk)
else{m=A.W(16)
l=A.bA(B.fo,0.5)
k=f?1:0.15
n.push(A.A(i,A.ff(A.bpB(B.t,A.ke("/pagar/"+d.b),B.GR,B.GS,B.Z,"QR para pagar "+E.cIG(j.d),186),k),B.r,i,i,new A.K(B.t,i,l,m,i,i,B.x),i,i,i,B.cX,i,i,i))}n.push(B.R)
n.push(A.h(E.cIG(j.d),i,i,i,i,B.hP,i,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.M,B.a4,i,i))
if(f)B.e.n(n,A.a([B.ab,D.coO],o))
q=A.A(i,A.B(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.cX,i,i,i)
n=A.ba(i,i,i,h.$2("Estado",new C.wl(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a3,i)
h=A.a([A.a5(A.d6(A.a([q,B.aB,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bB,i,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.wa("Cancelar cobran\xe7a",j.gaZp(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.wa("Nova cobran\xe7a",j.gb8Q(),!1,!1,i),B.ab,new C.wa("Fechar",new C.bOd(j),!0,!1,i)],o))
else h.push(new C.wa("Mostrar outro QR",j.gal1(),!1,j.f,i))
return A.B(h,B.E,B.h,B.l)}}
C.Fh.prototype={
R(){return new C.afS()}}
C.afS.prototype={
ac(){this.ap()
this.IU()},
IU(){var x=0,w=A.n(y.H),v=this,u
var $async$IU=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cma(v))
x=2
return A.d(C.cNb(v.a.c),$async$IU)
case 2:u=e
if(v.c!=null)v.p(new C.cmb(v,u))
return A.l(null,w)}})
return A.m($async$IU,w)},
aSD(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nO("",d.c,"pay_request",d.d/100,x,x,new C.cm8(this),!1,new C.cm9(d),B.VV,x,w,C.dJl(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Uj(this.aSD(t),u)
x=s?"Pagar":C.dBy(t.a)
if(s)s=D.aIi
else{s=t.a
w=y.p
v=A.a([A.bL(A.a2u(s==="paid"?B.iL:B.qq,3,u,120),u,u),B.R,A.h(C.dBx(s),u,u,u,u,B.hf,B.a4,u,u),B.bi],w)
if(s==="error")B.e.n(v,A.a([new C.wa("Tentar outra vez",this.gaZq(),!1,!1,u),B.ab,new C.wa("Fechar",new C.cmc(d),!0,!1,u)],w))
else v.push(new C.wa("OK",new C.cmd(d),!1,!1,u))
s=v}return new C.aOT(x,s,u)}}
C.aOT.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=A.a5(A.cP(B.bw,x,B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxH(d),x,x,x,x,x,x,!1,B.aN),1),u=y.p,t=A.a([A.bL(A.A(x,x,B.r,x,x,new A.K(N.uk,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aB,A.O(A.a([A.a5(A.h(this.c,x,x,x,x,B.bm,x,x,x),1),A.pU(B.ej,new C.cxI(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a0],u)
B.e.n(t,this.d)
return A.fD(!1,B.aG,!0,x,A.B(A.a([v,A.A(x,A.B(t,B.E,B.h,B.J),B.r,x,x,M.Kv,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.iY,B.l),B.r,x,0,x,x,x,x,x,B.eY)}}
var z=a.updateTypes(["F<~>()","~()","M(N,m5<FX>)","~(c)","c(c)"])
C.cKr.prototype={
$1(d){return this.a.$1(A.q(d.e.h(0,"status")))},
$S:136}
C.cvV.prototype={
$0(){var x=this.a
return x.f=x.a4x(0,this.b)},
$S:0}
C.cvW.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a4x(0,this.b),this.c)},
$S:0}
C.cw2.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bY0
x=y.p
w=A.a([A.O(A.a([A.pU(B.lD,new C.cw1(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.c7G,B.bM],x))
else w.push(B.a0)
x=this.a
if(!v)B.e.n(w,x.bdP(t))
else B.e.n(w,x.bd9(t))
return A.d6(w,u,B.CW,u,u,!1,!1)},
$S:z+2}
C.cw1.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
C.cw0.prototype={
$0(){var x=this.a
return x.p(new C.cw_(x))},
$S:0}
C.cw_.prototype={
$0(){var x=this.a
return x.d=x.L4()},
$S:0}
C.cvZ.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).am("/u/"+A.q(this.b.r),null,y.X)},
$S:0}
C.cvX.prototype={
$0(){return this.a.RD(this.b,this.c)},
$S:0}
C.cvY.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).am("/cobrar",null,y.X)},
$S:0}
C.bM3.prototype={
$0(){},
$S:0}
C.bOc.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aP(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dN(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bO5.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bO6.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bO7.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bOj.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.fN(new A.ac(Date.now(),0,!1)))x.a5d("expired")
else x.p(new C.bOi())},
$S:66}
C.bOi.prototype={
$0(){},
$S:0}
C.bOk.prototype={
$1(d){return this.aEJ(d)},
aEJ(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.al9(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a5d("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:449}
C.bOb.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ac(Date.now(),0,!1)},
$S:0}
C.bOh.prototype={
$1(d){var x=null
return new A.eQ(D.ca_,D.cgV,A.a([A.cw(B.ms,x,x,new C.bOf(d),x,x),A.bE(D.cgN,new C.bOg(this.a,d),x)],y.p),x)},
$S:19}
C.bOf.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.bOg.prototype={
$0(){A.am(this.b,!1).bp()
var x=this.a.c
x.toString
A.ae(x).am("/partner-payments/setup",null,y.X)},
$S:0}
C.bO3.prototype={
$1(d){var x=null
return new A.eQ(D.cgi,D.cf4,A.a([A.cw(D.ceu,x,x,new C.bO1(d),x,x),A.bE(D.cc_,new C.bO2(d),x)],y.p),x)},
$S:19}
C.bO1.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.bO2.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.bO4.prototype={
$0(){return this.a.r=null},
$S:0}
C.bOa.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.jt(0,B.jb)},
$S:0}
C.bOl.prototype={
$2(d,e){if(!d)this.a.al0()},
$S:183}
C.bO8.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a5(A.ba(x,!0,x,A.fD(!1,B.aG,!0,x,A.eP(!1,t,!0,A.aH(A.bL(w?D.aDE:A.h(d,x,x,x,x,B.p8,x,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,x,new C.bO9(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fI(u,D.Kh),x,x,B.cQ),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x),1)},
$S:478}
C.bO9.prototype={
$0(){return this.a.bdL(this.b)},
$S:0}
C.bOe.prototype={
$2(d,e){var x=null
return A.A(x,A.O(A.a([A.a5(A.h(d,x,x,x,x,B.ce,x,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.Ku,x,x,x,B.cm,x,x,x)},
$S:1363}
C.bOd.prototype={
$0(){var x=this.a.c
x.toString
return A.am(x,!1).iw()},
$S:0}
C.cma.prototype={
$0(){return this.a.d=null},
$S:0}
C.cmb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cm8.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aF_(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aF_(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.al9(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.p(D.ajG)
t=r.h(s,"error")
if(t!=null)throw A.p(A.b_H(A.q(t)))
v=A.cNc(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:158}
C.cm9.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oI
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.al9(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.a0(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1364}
C.cmc.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cmd.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cxH.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
C.cxI.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dJl","dBw",4)
var u
w(u=C.ac8.prototype,"gal1","RE",0)
v(u,"gb9X","a5d",3)
w(u,"gaZp","Dl",0)
w(u,"gb8Q","aoL",1)
w(u,"gaZo","al0",1)
w(C.afS.prototype,"gaZq","IU",0)})();(function inheritance(){var x=a.inheritMany
x(A.J,[C.avt,C.a67,C.ayb,C.FX])
x(A.bw,[C.cKr,C.bOj,C.bOk,C.bOh,C.bO3,C.bO8,C.cm8])
x(A.M,[C.ajn,C.H0,C.wl,C.wa,C.aOT])
x(A.G,[C.FY,C.Dd,C.Fh])
x(A.Y,[C.aOc,C.ac8,C.afS])
x(A.bO,[C.cvV,C.cvW,C.cw1,C.cw0,C.cw_,C.cvZ,C.cvX,C.cvY,C.bM3,C.bOc,C.bO5,C.bO6,C.bO7,C.bOi,C.bOb,C.bOf,C.bOg,C.bO1,C.bO2,C.bO4,C.bOa,C.bO9,C.bOd,C.cma,C.cmb,C.cm9,C.cmc,C.cmd,C.cxH,C.cxI])
x(A.cL,[C.cw2,C.bOl,C.bOe])})()
A.br(b.typeUniverse,JSON.parse('{"ajn":{"M":[],"e":[],"f":[]},"H0":{"M":[],"e":[],"f":[]},"FY":{"G":[],"e":[],"f":[]},"aOc":{"Y":["FY"]},"wl":{"M":[],"e":[],"f":[]},"wa":{"M":[],"e":[],"f":[]},"Dd":{"G":[],"e":[],"f":[]},"ac8":{"Y":["Dd"]},"Fh":{"G":[],"e":[],"f":[]},"afS":{"Y":["Fh"]},"aOT":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cJ"),E:x("r<ayb>"),s:x("r<c>"),p:x("r<e>"),P:x("a6<c,@>"),f:x("a6<@,@>"),w:x("dh"),K:x("J"),y:x("a67"),m:x("tC"),k:x("+(c,bn)"),R:x("+at,result(ac?,c)"),u:x("+error,request(c?,avt?)"),A:x("FX"),N:x("c"),v:x("aN<FX>"),q:x("dr"),x:x("z"),z:x("@"),g:x("t<@>?"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Kh=new A.bf(B.fo,0.5,B.ai,-1)
D.af2=new A.dO(D.Kh,B.aa,B.aa,B.aa)
D.Ku=new A.K(null,null,D.af2,null,null,null,B.x)
D.ajG=new A.Dj("invalid_state")
D.asq=new A.a3(14,18,14,18)
D.aty=new A.a3(20,8,20,20)
D.aCg=new A.aY(61109,"MaterialIcons",null,!0)
D.aDE=new A.b7(D.aCg,22,B.z,null,null,null)
D.aF6=new A.dB(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bs,null,null,B.bs,B.bs,!0,null,null,null,null)
D.bXD=new A.ix(40,40,20,B.t,0,null)
D.bXv=new A.ix(null,32,12,B.t,1,null)
D.azP=new A.bQ(1,B.au,D.bXv,null)
D.bww=x([D.bXD,B.ae,D.azP],y.p)
D.bTP=new A.n6(B.bF,B.h,B.l,B.v,null,B.c5,null,0,D.bww,null)
D.bXy=new A.ix(null,120,22,B.t,1,null)
D.bXC=new A.ix(null,56,22,B.t,2,null)
D.bXE=new A.ix(null,52,26,B.t,2,null)
D.aIi=x([D.bTP,B.bM,D.bXy,B.R,D.bXC,B.a0,D.bXE],y.p)
D.bxo=x(["1","2","3"],y.s)
D.bw4=x(["4","5","6"],y.s)
D.btV=x(["7","8","9"],y.s)
D.b6B=x(["00","0","del"],y.s)
D.bC3=x([D.bxo,D.bw4,D.btV,D.b6B],A.w("r<t<c>>"))
D.a23=new C.a67("error",null,"",0,null)
D.bQU=new A.a0("Cancelado",!1)
D.bR0=new A.a0("Expirou",!1)
D.bSd=new A.a0("\xc0 espera\u2026",!1)
D.bSH=new A.bV(I.kA,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bTa=new A.bV(B.hz,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTn=new A.bV(B.kz,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTp=new A.bV(B.E7,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bz2=x([],y.E)
D.H9=new C.FX("error",null,null,null,D.bz2,"entry",null)
D.auA=new A.nz(B.iL,150,3,null,null)
D.ajg=new A.f8(B.K,null,null,D.auA,null)
D.bXk=new A.c_(null,214,D.ajg,null)
D.bY0=new A.vT(!1,3,!1,null)
D.c0X=new A.Q(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4Z=new A.Q(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7G=new A.D("Quem \xe9",null,B.hP,null,null,null,null,null,null,null,null)
D.ca_=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cbG=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mo,null,null,null,null,null,null,null,null)
D.cc_=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null,null)
D.cds=new A.D("O qu\xea",null,B.M,null,null,null,null,null,null,null,null)
D.ce0=new A.D("Cobrar",null,B.kV,null,null,null,null,null,null,null,null)
D.cel=new A.D("Ver perfil",null,K.t9,null,null,null,null,null,null,null,null)
D.ceu=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null,null)
D.ceY=new A.D("Leste o QR agora",null,B.M,null,null,null,null,null,null,null,null)
D.cf4=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null,null)
D.cgi=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null,null)
D.cgN=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null,null)
D.cgV=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null,null)
D.coO=new C.wl("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.coP=new C.wl("Verificado",!0,null)
D.acN=new C.wl("Por registar",!1,null)
D.coR=new C.wl("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUa","cTR",()=>{var w=A.W(16)
return A.dnv(A.bA(B.fo,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["koqF4nE2bjzH5eba543MeC6sQvU="]=a.current})($__dart_deferred_initializers__);