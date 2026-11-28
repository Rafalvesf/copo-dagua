((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cIP(d,e){return C.dK5(d,e)},
dK5(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cIP=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cIP)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.p(J.i(s,"id"))
q=A.p(J.i(s,"code"))
p=A.d3(A.p(J.i(s,"expires_at")))
p=p==null?null:p.dJ()
if(p==null)p=new A.ad(Date.now(),0,!1).en(6e8)
v=new A.Z1(null,new C.avC(r,q,p))
x=1
break}r=r.b(s)?A.p(J.i(s,"result")):"error"
v=new A.Z1(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.Z1("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cIP,w)},
cHZ(d){return C.dJo(d)},
dJo(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHZ=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aH("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cHZ)
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
return A.m($async$cHZ,w)},
dM_(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.LS(0,"pay-request-"+d,B.yj).NL(new C.cKW(e),B.GK,new G.Fx(H.y4,"id",d),"public","pay_requests").Pz(0)},
cNL(d){return C.dNc(d)},
dNc(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cNL=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cNL)
case 7:s=f
if(!y.f.b(s)){v=D.a1V
x=1
break}r=A.p(J.i(s,"result"))
q=A.B(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.p(p==null?"":p)
o=A.aE(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.B(J.i(s,"description"))
v=new C.a6g(r,q,p,o,n)
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
return A.m($async$cNL,w)},
alb(d){return C.dKu(d)},
dKu(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$alb=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f2("event-pay",d),$async$alb)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.h3(r,o,n):A.R(["error","unknown_error"],o,n)
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
o=y.f.b(p)?J.h3(p,o,n):A.R(["error","unknown_error"],o,n)
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
return A.m($async$alb,w)},
avC:function avC(d,e,f){this.a=d
this.b=e
this.c=f},
cKW:function cKW(d){this.a=d},
a6g:function a6g(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cSl(d){return C.dNS(d)},
dNS(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cSl=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aH("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cSl)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.H2
x=1
break}o=A.p(J.i(s,"result"))
n=A.B(J.i(s,"scan_id"))
m=A.B(J.i(s,"name"))
l=A.B(J.i(s,"avatar_url"))
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
d=A.B(h.h(i,"booking_id"))
a0=h.h(i,"event")
a0=A.p(a0==null?"Evento":a0)
a1=h.h(i,"date")
a1=A.d3(A.p(a1==null?"":a1))
a2=A.B(h.h(i,"booking_number"))
a3=A.aE(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.B(J.i(g,"status")):null
if(a5){a5=A.aE(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.d3(A.p(a7==null?"":a7))
a7=a7==null?null:a7.dJ()
J.o(h.h(i,"can_charge"),!0)
J.bn(r,new C.ayo(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.B(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dQ(p)
p=p===!0?"entry":"profile"}k=A.B(J.i(s,"profile_id"))
v=new C.G1(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cU){v=D.H2
x=1
break}else{v=D.H2
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cSl,w)},
aVy(d,e){return C.dNR(d,e)},
dNR(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVy=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aH("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVy)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aH("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVy)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.Z_(null,"error")
x=1
break}r=A.p(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d3(A.p(q==null?"":q))
q=q==null?null:q.dJ()
v=new A.Z_(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.Z_(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVy,w)},
ayo:function ayo(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_2(d){return B.f.aT(B.j.k(A.i_(d)),2,"0")+":"+B.f.aT(B.j.k(A.hQ(d)),2,"0")},
d8X(d){return new C.G2(d,null)},
doW(){return new C.Df(null)},
dvy(d){return new C.Fk(d,null)},
dCC(d){var x
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
default:x=A.aVk(d)
break}return x},
dCE(d){var x
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
dCD(d){var x
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
ajq:function ajq(d,e){this.c=d
this.a=e},
Ha:function Ha(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
G2:function G2(d,e){this.c=d
this.a=e},
aOm:function aOm(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cwc:function cwc(d,e){this.a=d
this.b=e},
cwd:function cwd(d,e,f){this.a=d
this.b=e
this.c=f},
cwk:function cwk(d){this.a=d},
cwj:function cwj(d){this.a=d},
cwi:function cwi(d){this.a=d},
cwh:function cwh(d){this.a=d},
cwg:function cwg(d,e){this.a=d
this.b=e},
cwe:function cwe(d,e,f){this.a=d
this.b=e
this.c=f},
cwf:function cwf(d){this.a=d},
ws:function ws(d,e,f){this.c=d
this.d=e
this.a=f},
wi:function wi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bM0:function bM0(){},
Df:function Df(d){this.a=d},
aca:function aca(d){var _=this
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
Fk:function Fk(d,e){this.c=d
this.a=e},
afT:function afT(){this.c=this.a=this.d=null},
cmk:function cmk(d){this.a=d},
cml:function cml(d,e){this.a=d
this.b=e},
cmi:function cmi(d){this.a=d},
cmj:function cmj(d){this.a=d},
cmm:function cmm(d){this.a=d},
cmn:function cmn(d){this.a=d},
aP3:function aP3(d,e,f){this.c=d
this.d=e
this.a=f},
cy_:function cy_(d){this.a=d},
cy0:function cy0(d){this.a=d}},D,I,K,F,L,M,N
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
C.avC.prototype={}
C.a6g.prototype={}
C.ayo.prototype={}
C.G1.prototype={
gap(d){return this.c}}
C.ajq.prototype={
u(d){var x=null
return A.w(x,this.c,B.r,x,x,$.cUI(),x,x,x,B.cU,x,x,x)}}
C.Ha.prototype={
u(d){var x=null,w=A.a([A.a5(A.h(this.c,x,x,x,x,B.cc,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bx,x,x))
v=this.e
if(v!=null)w.push(v)
return A.w(x,A.O(w,B.u,B.h,B.l,0,x),B.r,x,x,D.Kk,x,x,x,B.dN,x,x,x)}}
C.G2.prototype={
P(){return new C.aOm(A.E(y.N,y.R))}}
C.aOm.prototype={
KJ(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KJ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cSl(u.a.c),$async$KJ)
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
return A.m($async$KJ,w)},
a3W(d,e){var x=e.c
return x==null?"e"+e.b:x},
Re(d,e){return this.aUq(d,e)},
aUq(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Re=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.n(new C.cwc(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVy(t,e),$async$Re)
case 3:s=g
if(u.c==null){x=1
break}u.n(new C.cwd(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$Re,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KJ()
return A.cP(null,B.by,A.bB(!0,A.b7Q(new C.cwk(x),w,y.A),null,B.Z,!0),!0,null)},
bcE(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bTf
break
case"own_code":x=D.bTs
break
case"not_found":x=D.bSM
break
default:x=D.bTu
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
q=A.a([B.kU,A.b9(r,o?B.W:B.fS,p,p,96),B.a_,A.h(v,p,p,p,p,B.hS,B.a4,p),B.P,A.h(u,p,p,p,p,D.c51,B.a4,p)],x)
if(o)B.e.p(q,A.a([B.d5,new A.ak(A.bD(B.t1,new C.cwi(this),p),p)],x))
return q},
bbX(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.ch(r,44,d.d,!1,!0,s),B.af,A.a5(A.x(A.a([A.h(r,s,s,s,s,B.iw,s,s),D.c81],x),B.G,B.h,B.l),1),B.ac,D.cp9],x),B.u,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.p(w,A.a([B.R,new A.d0(B.bc,s,s,A.aK(new A.ak(A.hm(D.cam,new C.cwg(this,d),A.fO(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bR,s,B.ab,B.c8,s,s,s,s)),s),36,s),s)],x))
w=A.a([new C.ajq(A.x(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.p(w,A.a([B.bP,D.c8A],x))
else for(t=0;t<v.length;v.length===u||(0,A.H)(v),++t)B.e.p(w,this.b5I(0,d,v[t]))
return w},
b5I(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a3W(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
r=A.a([A.h(f.d,n,n,n,n,B.iw,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.uJ,A.h(B.d3[A.fp(q)-1]+", "+A.aD(q)+" "+B.be[A.aw(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ad)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.Ha("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.Ha("Pessoas",A.p(p),n,n))
q.push(new C.Ha("Chegada",n,v?new C.ws("Registada \xe0s "+C.d_2(w),!0,n):D.acJ,n))
B.e.p(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.ws(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cpb
p=v?new C.ws("Registada \xe0s "+C.d_2(w),!0,n):D.acJ
B.e.p(r,A.a([new C.Ha("Bilhete",n,q,n),new C.Ha("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.lr,A.h(t,n,n,n,n,B.z5,n,n),n))
i=A.a([B.bP,i,B.ap,new C.ajq(A.x(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cwe(o,e,f):n
if(r===m)r=B.yL
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kZ,n,n)
t.push(A.a5(A.aK(new A.ak(A.bD(r,q,n),n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ae)
x.push(A.a5(A.aK(new A.ak(A.hm(D.cc_,new C.cwf(o),A.fO(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.ab,B.c8,n,n,n,n)),n),44,n),1))
B.e.p(t,x)}i.push(A.O(t,B.u,B.h,B.l,0,n))
return i}}
C.ws.prototype={
u(d){var x=null,w=this.d,v=w?B.cz:B.dV,u=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?B.cS:B.co,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.J(v,x,x,u,x,x,B.x),x,x,x,B.dp,x,x,x)}}
C.wi.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.me:A.h(x.c,w,w,w,w,B.eJ,w,w)
if(x.e)v=new A.ak(A.hm(u,x.d,A.fO(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c8,w,w,w,w)),w)
else{v=v?new C.bM0():x.d
v=new A.ak(A.bD(u,v,A.ce(B.z,B.z.ce(0.35),B.t,B.t,w,w,B.ab,w,w,w)),w)}return A.aK(v,52,1/0)}}
C.Df.prototype={
P(){return new C.aca(new A.aF(B.ak,$.aa()))}}
C.aca.prototype={
m(){this.UA()
var x=this.e
x.Z$=$.aa()
x.V$=0
this.a6()},
UA(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.y7(v)}w.y=null
v=w.z
if(v!=null)v.aE(0)
v=w.Q
if(v!=null)v.aE(0)},
bcz(d){this.n(new C.bO6(this,d))},
Rf(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Rf=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.n(new C.bO_(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cIP(s,t.length===0?null:t),$async$Rf)
case 3:r=e
if(u.c==null){x=1
break}u.n(new C.bO0(u))
q=r.b
if(q==null){s=r.a
v=u.bhK(s==null?"error":s)
x=1
break}u.n(new C.bO1(u,q))
u.blj(q)
case 1:return A.l(v,w)}})
return A.m($async$Rf,w)},
blj(d){var x=this
x.UA()
x.y=C.dM_(d.a,x.gb8I())
x.z=A.rs(B.ht,new C.bOd(x,d))
x.Q=A.rs(B.uI,new C.bOe(x,d))},
a4C(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.n(new C.bO5(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aE(0)
x=w.Q
if(x!=null)x.aE(0)}},
bhK(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.h2(!0,new C.bOb(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a1(A.bZ(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Da(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Da=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.h2(!0,new C.bNY(),t,y.x),$async$Da)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHZ(s.a),$async$Da)
case 6:if(u.c==null){x=1
break}case 4:u.UA()
u.n(new C.bNZ(u))
case 1:return A.l(v,w)}})
return A.m($async$Da,w)},
ao7(){this.UA()
this.n(new C.bO4(this))},
akr(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Da()
else w.ao7()
else{x=w.c
x.toString
A.an(x,!1).iu()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pX(B.lD,x.gaYG(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hS,w,w)
return A.cXN(u,A.cP(w,B.by,A.bB(!0,new A.S(D.atv,A.x(A.a([new A.d0(B.bc,w,w,t,w),B.R,s,B.bP,A.a5(u?x.b5R():x.bd_(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bOf(x),y.K)},
b5R(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bO2(o),j=$.cUI(),i=y.p
j=A.w(n,A.x(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a4,n),B.ad,A.bh(n,n,n,A.h(E.cJ9(m),n,n,n,n,D.c0T,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.u,B.h,B.l),B.r,n,n,j,n,n,n,D.aso,n,n,n)
m=A.W(999)
x=A.bG(B.fa,0.5)
m=A.a([j,B.ad,A.w(n,A.O(A.a([D.c8d,B.ae,A.a5(A.cs(n,B.a6,!1,n,!0,B.y,n,A.cu(),o.e,n,n,n,n,n,2,D.aFa,B.U,!0,n,!0,n,!1,n,B.aC,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.al,n,n,n,n,n,n,n,n,n,n,n,B.kY,!0,B.au,n,B.hc,n,n,n,n),1)],i),B.u,B.h,B.l,0,n),B.r,n,n,new A.J(B.t,n,x,m,n,n,B.x),n,44,n,B.bR,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bC5[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eu(v,0,j),s=J.ao(t.a),r=t.b,t=new A.bY(s,r,A.u(t).i("bY<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.am(A.c1())
p=A.a([],i)
if(q.a>0)p.push(B.ae)
p.push(k.$1(q.b))
B.e.p(u,p)}B.e.p(m,A.a([new A.c6(n,x,n,n),A.O(u,B.u,B.h,B.l,0,n)],i))}m=A.a5(A.d6(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.x(A.a([m,B.R,new C.wi("Mostrar o QR para pagar",l?o.gaks():n,!1,j,n)],i),B.E,B.h,B.l)},
bd_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cf(new A.ad(Date.now(),0,!1)).a
x=h<0?0:B.j.aO(h,1e6)
w=""+B.j.aO(x,60)+":"+B.f.aT(B.j.k(B.j.aK(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.d_2(h==null?new A.ad(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bR2
break
case"cancelled":h=D.bQW
break
default:h=D.bSi
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bO8()
q=j.c
q.toString
q=A.n4(q,!1).a0(0,$.b7(),y.D).b
p=q==null?i:q.x
q=$.cUI()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.iw,B.a4,i))
n.push(new A.S(F.uJ,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a4,i),i))
n.push(B.R)
if(g)n.push(D.bXh)
else{m=A.W(16)
l=A.bG(B.fa,0.5)
k=f?1:0.15
n.push(A.w(i,A.fo(A.awG(B.t,A.jV("/pagar/"+d.b),B.y9,B.ya,B.Z,"QR para pagar "+E.cJ9(j.d),186),k),B.r,i,i,new A.J(B.t,i,l,m,i,i,B.x),i,i,i,B.cU,i,i,i))}n.push(B.R)
n.push(A.h(E.cJ9(j.d),i,i,i,i,B.hS,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a4,i))
if(f)B.e.p(n,A.a([B.ad,D.cp8],o))
q=A.w(i,A.x(n,B.u,B.h,B.l),B.r,i,i,q,i,i,i,B.cU,i,i,i)
n=A.bh(i,i,i,h.$2("Estado",new C.ws(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a5(A.d6(A.a([q,B.aA,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bx,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.wi("Cancelar cobran\xe7a",j.gaYH(),!0,!1,i))
else if(g)B.e.p(h,A.a([new C.wi("Nova cobran\xe7a",j.gb7C(),!1,!1,i),B.ad,new C.wi("Fechar",new C.bO7(j),!0,!1,i)],o))
else h.push(new C.wi("Mostrar outro QR",j.gaks(),!1,j.f,i))
return A.x(h,B.E,B.h,B.l)}}
C.Fk.prototype={
P(){return new C.afT()}}
C.afT.prototype={
ac(){this.ao()
this.IA()},
IA(){var x=0,w=A.n(y.H),v=this,u
var $async$IA=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.n(new C.cmk(v))
x=2
return A.d(C.cNL(v.a.c),$async$IA)
case 2:u=e
if(v.c!=null)v.n(new C.cml(v,u))
return A.l(null,w)}})
return A.m($async$IA,w)},
aRZ(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nS("",d.c,"pay_request",d.d/100,x,x,new C.cmi(this),!1,new C.cmj(d),B.VN,x,w,C.dKx(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Uw(this.aRZ(t),u)
x=s?"Pagar":C.dCE(t.a)
if(s)s=D.aIm
else{s=t.a
w=y.p
v=A.a([A.bM(A.a2B(s==="paid"?B.iO:B.q3,3,u,120),u,u),B.R,A.h(C.dCD(s),u,u,u,u,B.he,B.a4,u),B.bk],w)
if(s==="error")B.e.p(v,A.a([new C.wi("Tentar outra vez",this.gaYI(),!1,!1,u),B.ad,new C.wi("Fechar",new C.cmm(d),!0,!1,u)],w))
else v.push(new C.wi("OK",new C.cmn(d),!1,!1,u))
s=v}return new C.aP3(x,s,u)}}
C.aP3.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=A.a5(A.cp(B.bu,x,B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cy_(d),x,x,x,x,x,x,!1,B.aE),1),u=y.p,t=A.a([A.bM(A.w(x,x,B.r,x,x,new A.J(N.u7,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aA,A.O(A.a([A.a5(A.h(this.c,x,x,x,x,B.bj,x,x),1),A.pX(B.em,new C.cy0(d),"Fechar")],u),B.u,B.h,B.l,0,x),B.a_],u)
B.e.p(t,this.d)
return A.hl(!1,B.aN,!0,x,A.x(A.a([v,A.w(x,A.x(t,B.E,B.h,B.J),B.r,x,x,M.Kl,x,x,x,new A.a4(20,10,20,20+w.r.d),x,x,1/0)],u),B.u,B.k_,B.l),B.r,x,0,x,x,x,x,x,B.fE)}}
var z=a.updateTypes(["F<~>()","~()","L(N,m5<G1>)","~(c)","c(c)"])
C.cKW.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:156}
C.cwc.prototype={
$0(){var x=this.a
return x.f=x.a3W(0,this.b)},
$S:0}
C.cwd.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a3W(0,this.b),this.c)},
$S:0}
C.cwk.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bXZ
x=y.p
w=A.a([A.O(A.a([A.pX(B.lD,new C.cwj(d),"Voltar")],x),B.u,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.p(w,A.a([B.R,D.cgL,B.bP],x))
else w.push(B.a_)
x=this.a
if(!v)B.e.p(w,x.bcE(t))
else B.e.p(w,x.bbX(t))
return A.d6(w,u,B.CV,u,u,!1,!1)},
$S:z+2}
C.cwj.prototype={
$0(){return A.an(this.a,!1).iu()},
$S:0}
C.cwi.prototype={
$0(){var x=this.a
return x.n(new C.cwh(x))},
$S:0}
C.cwh.prototype={
$0(){var x=this.a
return x.d=x.KJ()},
$S:0}
C.cwg.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ag("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cwe.prototype={
$0(){return this.a.Re(this.b,this.c)},
$S:0}
C.cwf.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ag("/cobrar",null,y.X)},
$S:0}
C.bM0.prototype={
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
if(x.w==="open"&&!this.b.c.he(new A.ad(Date.now(),0,!1)))x.a4C("expired")
else x.n(new C.bOc())},
$S:62}
C.bOc.prototype={
$0(){},
$S:0}
C.bOe.prototype={
$1(d){return this.aE0(d)},
aE0(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.alb(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a4C("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:488}
C.bO5.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ad(Date.now(),0,!1)},
$S:0}
C.bOb.prototype={
$1(d){var x=null
return new A.eT(D.c8u,D.cbD,A.a([new A.ak(A.cK(B.mq,x,x,new C.bO9(d),x,x),x),new A.ak(A.bD(D.c9C,new C.bOa(this.a,d),x),x)],y.p),x)},
$S:19}
C.bO9.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
C.bOa.prototype={
$0(){A.an(this.b,!1).bj()
var x=this.a.c
x.toString
A.ae(x).ag("/partner-payments/setup",null,y.X)},
$S:0}
C.bNY.prototype={
$1(d){var x=null
return new A.eT(D.cbk,D.caS,A.a([new A.ak(A.cK(D.cbC,x,x,new C.bNW(d),x,x),x),new A.ak(A.bD(D.c9x,new C.bNX(d),x),x)],y.p),x)},
$S:19}
C.bNW.prototype={
$0(){return A.an(this.a,!1).aq(!1)},
$S:0}
C.bNX.prototype={
$0(){return A.an(this.a,!1).aq(!0)},
$S:0}
C.bNZ.prototype={
$0(){return this.a.r=null},
$S:0}
C.bO4.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.k_(0,B.jd)},
$S:0}
C.bOf.prototype={
$2(d,e){if(!d)this.a.akr()},
$S:235}
C.bO2.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a5(A.bh(x,!0,x,A.hl(!1,B.aN,!0,x,A.eY(!1,t,!0,A.aK(A.bM(w?D.aDH:A.h(d,x,x,x,x,B.oU,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bO3(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fQ(u,D.K7),x,x,B.cW),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:231}
C.bO3.prototype={
$0(){return this.a.bcz(this.b)},
$S:0}
C.bO8.prototype={
$2(d,e){var x=null
return A.w(x,A.O(A.a([A.a5(A.h(d,x,x,x,x,B.cc,x,x),1),e],y.p),B.u,B.h,B.l,0,x),B.r,x,x,D.Kk,x,x,x,B.ck,x,x,x)},
$S:1371}
C.bO7.prototype={
$0(){var x=this.a.c
x.toString
return A.an(x,!1).iu()},
$S:0}
C.cmk.prototype={
$0(){return this.a.d=null},
$S:0}
C.cml.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cmi.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEh(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEh(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.alb(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a6(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.ajG)
t=r.h(s,"error")
if(t!=null)throw A.q(A.b_S(A.p(t)))
v=A.cNM(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:140}
C.cmj.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.ow
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.alb(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1372}
C.cmm.prototype={
$0(){return A.iO(this.a,!0)},
$S:0}
C.cmn.prototype={
$0(){return A.iO(this.a,!0)},
$S:0}
C.cy_.prototype={
$0(){return A.iO(this.a,!0)},
$S:0}
C.cy0.prototype={
$0(){return A.iO(this.a,!0)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dKx","dCC",4)
var u
w(u=C.aca.prototype,"gaks","Rf",0)
v(u,"gb8I","a4C",3)
w(u,"gaYH","Da",0)
w(u,"gb7C","ao7",1)
w(u,"gaYG","akr",1)
w(C.afT.prototype,"gaYI","IA",0)})();(function inheritance(){var x=a.inheritMany
x(A.M,[C.avC,C.a6g,C.ayo,C.G1])
x(A.bu,[C.cKW,C.bOd,C.bOe,C.bOb,C.bNY,C.bO2,C.cmi])
x(A.L,[C.ajq,C.Ha,C.ws,C.wi,C.aP3])
x(A.G,[C.G2,C.Df,C.Fk])
x(A.Z,[C.aOm,C.aca,C.afT])
x(A.bL,[C.cwc,C.cwd,C.cwj,C.cwi,C.cwh,C.cwg,C.cwe,C.cwf,C.bM0,C.bO6,C.bO_,C.bO0,C.bO1,C.bOc,C.bO5,C.bO9,C.bOa,C.bNW,C.bNX,C.bNZ,C.bO4,C.bO3,C.bO7,C.cmk,C.cml,C.cmj,C.cmm,C.cmn,C.cy_,C.cy0])
x(A.cL,[C.cwk,C.bOf,C.bO8])})()
A.br(b.typeUniverse,JSON.parse('{"ajq":{"L":[],"e":[],"f":[]},"Ha":{"L":[],"e":[],"f":[]},"G2":{"G":[],"e":[],"f":[]},"aOm":{"Z":["G2"]},"ws":{"L":[],"e":[],"f":[]},"wi":{"L":[],"e":[],"f":[]},"Df":{"G":[],"e":[],"f":[]},"aca":{"Z":["Df"]},"Fk":{"G":[],"e":[],"f":[]},"afT":{"Z":["Fk"]},"aP3":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.A
return{D:x("cI"),E:x("r<ayo>"),s:x("r<c>"),p:x("r<e>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("dw"),K:x("M"),y:x("a6g"),m:x("ox"),k:x("+(c,bm)"),R:x("+at,result(ad?,c)"),u:x("+error,request(c?,avC?)"),A:x("G1"),N:x("c"),v:x("aQ<G1>"),q:x("dj"),x:x("C"),z:x("@"),g:x("t<@>?"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.K7=new A.bc(B.fa,0.5,B.ag,-1)
D.af0=new A.dN(D.K7,B.aa,B.aa,B.aa)
D.Kk=new A.J(null,null,D.af0,null,null,null,B.x)
D.ajG=new A.Dl("invalid_state")
D.aso=new A.a4(14,18,14,18)
D.atv=new A.a4(20,8,20,20)
D.aCm=new A.b0(61109,"MaterialIcons",null,!0)
D.aDH=new A.b8(D.aCm,22,B.z,null,null,null)
D.aFa=new A.dE(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.b1,null,null,B.b1,B.b1,!0,null,null,null,null)
D.bXC=new A.kB(40,40,20,B.t,0,null)
D.bXt=new A.kB(null,32,12,B.t,1,null)
D.azS=new A.bK(1,B.at,D.bXt,null)
D.bwC=x([D.bXC,B.af,D.azS],y.p)
D.bTW=new A.mm(B.bJ,B.h,B.l,B.u,null,B.cg,null,0,D.bwC,null)
D.bXw=new A.kB(null,120,22,B.t,1,null)
D.bXB=new A.kB(null,56,22,B.t,2,null)
D.bXD=new A.kB(null,52,26,B.t,2,null)
D.aIm=x([D.bTW,B.bP,D.bXw,B.R,D.bXB,B.a_,D.bXD],y.p)
D.bxs=x(["1","2","3"],y.s)
D.bwb=x(["4","5","6"],y.s)
D.btZ=x(["7","8","9"],y.s)
D.b6F=x(["00","0","del"],y.s)
D.bC5=x([D.bxs,D.bwb,D.btZ,D.b6F],A.A("r<t<c>>"))
D.a1V=new C.a6g("error",null,"",0,null)
D.bQW=new A.X("Cancelado",!1)
D.bR2=new A.X("Expirou",!1)
D.bSi=new A.X("\xc0 espera\u2026",!1)
D.bSM=new A.bX(I.kF,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bTf=new A.bX(B.hB,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTs=new A.bX(B.kD,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTu=new A.bX(B.E6,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.bz7=x([],y.E)
D.H2=new C.G1("error",null,null,null,D.bz7,"entry",null)
D.auB=new A.nD(B.iO,150,3,null,null)
D.aji=new A.f8(B.K,null,null,D.auB,null)
D.bXh=new A.c6(null,214,D.aji,null)
D.bXZ=new A.w_(!1,3,!1,null)
D.c0T=new A.P(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c51=new A.P(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c81=new A.D("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c8d=new A.D("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c8u=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c8A=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.mm,null,null,null,null,null,null,null)
D.c9x=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.c9C=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.cam=new A.D("Ver perfil",null,K.rS,null,null,null,null,null,null,null)
D.caS=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.cbk=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.cbC=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.cbD=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.cc_=new A.D("Cobrar",null,B.kZ,null,null,null,null,null,null,null)
D.cgL=new A.D("Quem \xe9",null,B.hS,null,null,null,null,null,null,null)
D.cp8=new C.ws("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cp9=new C.ws("Verificado",!0,null)
D.acJ=new C.ws("Por registar",!1,null)
D.cpb=new C.ws("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVq","cUI",()=>{var w=A.W(16)
return A.doF(A.bG(B.fa,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["NvNIqiLA2gdHy/G+/rkYc97xQyU="]=a.current})($__dart_deferred_initializers__);