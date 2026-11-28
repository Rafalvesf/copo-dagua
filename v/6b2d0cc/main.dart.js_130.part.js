((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cII(d,e){return C.dKr(d,e)},
dKr(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cII=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cII)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.p(J.i(s,"id"))
q=A.p(J.i(s,"code"))
p=A.d0(A.p(J.i(s,"expires_at")))
p=p==null?null:p.dH()
if(p==null)p=new A.ab(Date.now(),0,!1).ea(6e8)
v=new A.Zf(null,new C.aw7(r,q,p))
x=1
break}r=r.b(s)?A.p(J.i(s,"result")):"error"
v=new A.Zf(r,null)
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=new A.Zf("error",null)
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cII,w)},
cHS(d){return C.dJL(d)},
dJL(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cHS=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aH("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cHS)
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
return A.m($async$cHS,w)},
dMk(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.M_(0,"pay-request-"+d,B.ys).NT(new C.cKP(e),B.GZ,new G.Fv(H.yd,"id",d),"public","pay_requests").PK(0)},
cNJ(d){return C.dNx(d)},
dNx(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cNJ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cNJ)
case 7:s=f
if(!y.f.b(s)){v=D.a2a
x=1
break}r=A.p(J.i(s,"result"))
q=A.x(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.p(p==null?"":p)
o=A.aF(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.x(J.i(s,"description"))
v=new C.a6y(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a2a
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cNJ,w)},
alD(d){return C.dKP(d)},
dKP(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$alD=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f2("event-pay",d),$async$alD)
case 7:s=f
r=s.a
o=y.N
n=y.z
o=y.f.b(r)?J.h1(r,o,n):A.R(["error","unknown_error"],o,n)
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
o=y.f.b(p)?J.h1(p,o,n):A.R(["error","unknown_error"],o,n)
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
return A.m($async$alD,w)},
aw7:function aw7(d,e,f){this.a=d
this.b=e
this.c=f},
cKP:function cKP(d){this.a=d},
a6y:function a6y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cSm(d){return C.dOd(d)},
dOd(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cSm=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aH("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cSm)
case 7:s=b2
p=y.f
if(!p.b(s)){v=D.Hg
x=1
break}o=A.p(J.i(s,"result"))
n=A.x(J.i(s,"scan_id"))
m=A.x(J.i(s,"name"))
l=A.x(J.i(s,"avatar_url"))
r=A.a([],y.E)
k=y.g
j=k.a(J.i(s,"items"))
j=J.ao(j==null?B.ah:j)
while(j.q()){q=j.gE(j)
if(p.b(q)){i=q
h=J.a6(i)
g=h.h(i,"ticket")
f=A.p(h.h(i,"kind"))
e=A.p(h.h(i,"wedding_id"))
d=A.x(h.h(i,"booking_id"))
a0=h.h(i,"event")
a0=A.p(a0==null?"Evento":a0)
a1=h.h(i,"date")
a1=A.d0(A.p(a1==null?"":a1))
a2=A.x(h.h(i,"booking_number"))
a3=A.aF(h.h(i,"people"))
a3=a3==null?null:B.k.F(a3)
a4=J.o(h.h(i,"is_paid"),!0)
a5=p.b(g)
a6=a5?A.x(J.i(g,"status")):null
if(a5){a5=A.aF(J.i(g,"quantity"))
a5=a5==null?null:B.k.F(a5)
if(a5==null)a5=1}else a5=1
a7=h.h(i,"arrived_at")
if(a7==null)a7=h.h(i,"checked_in_at")
a7=A.d0(A.p(a7==null?"":a7))
a7=a7==null?null:a7.dH()
J.o(h.h(i,"can_charge"),!0)
J.bn(r,new C.ayY(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.x(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dL(p)
p=p===!0?"entry":"profile"}k=A.x(J.i(s,"profile_id"))
v=new C.G_(o,n,m,l,r,p,k)
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
if(A.a9(a9) instanceof A.cR){v=D.Hg
x=1
break}else{v=D.Hg
x=1
break}x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cSm,w)},
aW7(d,e){return C.dOc(d,e)},
dOc(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aW7=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aH("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aW7)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aH("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aW7)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.Zd(null,"error")
x=1
break}r=A.p(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d0(A.p(q==null?"":q))
q=q==null?null:q.dH()
v=new A.Zd(q,r)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=new A.Zd(null,"error")
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aW7,w)},
ayY:function ayY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_d(d){return B.f.aP(B.j.k(A.i0(d)),2,"0")+":"+B.f.aP(B.j.k(A.hN(d)),2,"0")},
d98(d){return new C.G0(d,null)},
dpg(){return new C.Dd(null)},
dvU(d){return new C.Fh(d,null)},
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
default:x=A.aVQ(d)
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
ajT:function ajT(d,e){this.c=d
this.a=e},
H7:function H7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
G0:function G0(d,e){this.c=d
this.a=e},
aOV:function aOV(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cw_:function cw_(d,e){this.a=d
this.b=e},
cw0:function cw0(d,e,f){this.a=d
this.b=e
this.c=f},
cw7:function cw7(d){this.a=d},
cw6:function cw6(d){this.a=d},
cw5:function cw5(d){this.a=d},
cw4:function cw4(d){this.a=d},
cw3:function cw3(d,e){this.a=d
this.b=e},
cw1:function cw1(d,e,f){this.a=d
this.b=e
this.c=f},
cw2:function cw2(d){this.a=d},
wp:function wp(d,e,f){this.c=d
this.d=e
this.a=f},
we:function we(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bMT:function bMT(){},
Dd:function Dd(d){this.a=d},
acu:function acu(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bOZ:function bOZ(d,e){this.a=d
this.b=e},
bOS:function bOS(d){this.a=d},
bOT:function bOT(d){this.a=d},
bOU:function bOU(d,e){this.a=d
this.b=e},
bP5:function bP5(d,e){this.a=d
this.b=e},
bP4:function bP4(){},
bP6:function bP6(d,e){this.a=d
this.b=e},
bOY:function bOY(d,e){this.a=d
this.b=e},
bP3:function bP3(d){this.a=d},
bP1:function bP1(d){this.a=d},
bP2:function bP2(d,e){this.a=d
this.b=e},
bOQ:function bOQ(){},
bOO:function bOO(d){this.a=d},
bOP:function bOP(d){this.a=d},
bOR:function bOR(d){this.a=d},
bOX:function bOX(d){this.a=d},
bP7:function bP7(d){this.a=d},
bOV:function bOV(d){this.a=d},
bOW:function bOW(d,e){this.a=d
this.b=e},
bP0:function bP0(){},
bP_:function bP_(d){this.a=d},
Fh:function Fh(d,e){this.c=d
this.a=e},
agh:function agh(){this.c=this.a=this.d=null},
clA:function clA(d){this.a=d},
clB:function clB(d,e){this.a=d
this.b=e},
cly:function cly(d){this.a=d},
clz:function clz(d){this.a=d},
clC:function clC(d){this.a=d},
clD:function clD(d){this.a=d},
aPA:function aPA(d,e,f){this.c=d
this.d=e
this.a=f},
cxJ:function cxJ(d){this.a=d},
cxK:function cxK(d){this.a=d}},D,I,K,F,L,M,N
J=c[1]
A=c[0]
B=c[2]
E=c[86]
G=c[125]
H=c[241]
C=a.updateHolder(c[14],C)
D=c[282]
I=c[233]
K=c[243]
F=c[283]
L=c[56]
M=c[285]
N=c[284]
C.aw7.prototype={}
C.a6y.prototype={}
C.ayY.prototype={}
C.G_.prototype={
gaq(d){return this.c}}
C.ajT.prototype={
t(d){var x=null
return A.w(x,this.c,B.r,x,x,$.cUN(),x,x,x,B.cM,x,x,x)}}
C.H7.prototype={
t(d){var x=null,w=A.a([A.a4(A.h(this.c,x,x,x,x,B.cf,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bK,x,x))
v=this.e
if(v!=null)w.push(v)
return A.w(x,A.M(w,B.u,B.h,B.l,0,x),B.r,x,x,D.KE,x,x,x,B.eh,x,x,x)}}
C.G0.prototype={
P(){return new C.aOV(A.E(y.N,y.R))}}
C.aOV.prototype={
KN(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KN=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cSm(u.a.c),$async$KN)
case 3:r=e
if(r.a==="ok"&&r.f==="profile"&&r.r!=null&&u.c!=null){t=u.c
t.toString
s=r.r
A.ae(t).Gk("/u/"+A.p(s),null,y.X)
v=new A.aR($.aV,y.v)
x=1
break}v=r
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$KN,w)},
a47(d,e){var x=e.c
return x==null?"e"+e.b:x},
Rp(d,e){return this.aUW(d,e)},
aUW(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Rp=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cw_(u,e))
t=d.b
t.toString
x=3
return A.d(C.aW7(t,e),$async$Rp)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cw0(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$Rp,w)},
t(d){var x=this,w=x.d
if(w===$)w=x.d=x.KN()
return A.cP(null,B.bz,A.bE(!0,A.b8v(new C.cw7(x),w,y.A),null,B.Z,!0),!0,null)},
bdC(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bT1
break
case"own_code":x=D.bTg
break
case"not_found":x=D.bSw
break
default:x=D.bTj
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
q=A.a([B.l2,A.b4(r,o?B.V:B.fX,p,p,96),B.a0,A.h(v,p,p,p,p,B.hV,B.a6,p),B.M,A.h(u,p,p,p,p,D.c5n,B.a6,p)],x)
if(o)B.e.n(q,A.a([B.dY,new A.am(A.bD(B.t8,new C.cw5(this),p),p)],x))
return q},
bcR(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.M(A.a([new A.cg(r,44,d.d,!1,!0,s),B.aj,A.a4(A.y(A.a([A.h(r,s,s,s,s,B.jo,s,s),D.c8q],x),B.G,B.h,B.l),1),B.aa,D.cpd],x),B.u,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.S,new A.dd(B.bh,s,s,A.aG(new A.am(A.ht(D.caH,new C.cw3(this,d),A.fY(s,s,B.t,s,s,s,s,s,s,B.x,s,s,B.bZ,s,B.ab,B.c4,s,s,s,s)),s),36,s),s)],x))
w=A.a([new C.ajT(A.y(w,B.F,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bP,D.c8X],x))
else for(t=0;t<v.length;v.length===u||(0,A.I)(v),++t)B.e.n(w,this.b6q(0,d,v[t]))
return w},
b6q(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a47(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
r=A.a([A.h(f.d,n,n,n,n,B.jo,n,n)],x)
q=f.e
if(q!=null)r.push(new A.S(F.uT,A.h(B.cW[A.eC(q)-1]+", "+A.ax(q)+" "+B.be[A.aq(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ad)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H7("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H7("Pessoas",A.p(p),n,n))
q.push(new C.H7("Chegada",n,v?new C.wp("Registada \xe0s "+C.d_d(w),!0,n):D.ad0,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wp(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.cpf
p=v?new C.wp("Registada \xe0s "+C.d_d(w),!0,n):D.ad0
B.e.n(r,A.a([new C.H7("Bilhete",n,q,n),new C.H7("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.kC,A.h(t,n,n,n,n,B.ki,n,n),n))
i=A.a([B.bP,i,B.ao,new C.ajT(A.y(r,B.F,B.h,B.l),n)],x)
if(s||k)i.push(B.S)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cw1(o,e,f):n
if(r===m)r=B.yS
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.lb,n,n)
t.push(A.a4(A.aG(new A.am(A.bD(r,q,n),n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ae)
x.push(A.a4(A.aG(new A.am(A.ht(D.ccl,new C.cw2(o),A.fY(n,n,B.t,n,n,n,n,n,n,B.x,n,n,n,n,B.ab,B.c4,n,n,n,n)),n),44,n),1))
B.e.n(t,x)}i.push(A.M(t,B.u,B.h,B.l,0,n))
return i}}
C.wp.prototype={
t(d){var x=null,w=this.d,v=w?B.cL:B.dG,u=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?B.cT:B.cn,x,x,x,x,x,x,x,x,12,x,x,B.E,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.O(v,x,x,u,x,x,B.z),x,x,x,B.dJ,x,x,x)}}
C.we.prototype={
t(d){var x=this,w=null,v=x.f,u=v?B.l1:A.h(x.c,w,w,w,w,B.eJ,w,w)
if(x.e)v=new A.am(A.ht(u,x.d,A.fY(w,w,B.t,w,w,w,w,w,w,B.x,w,w,w,w,B.ab,B.c4,w,w,w,w)),w)
else{v=v?new C.bMT():x.d
v=new A.am(A.bD(u,v,A.cc(B.x,B.x.c7(0.35),B.t,B.t,w,w,B.ab,w,w,w)),w)}return A.aG(v,52,1/0)}}
C.Dd.prototype={
P(){return new C.acu(new A.aH(B.ap,$.aa()))}}
C.acu.prototype={
m(){this.UK()
var x=this.e
x.a_$=$.aa()
x.X$=0
this.a6()},
UK(){var x,w=this,v=w.y
if(v!=null){x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
x.y3(v)}w.y=null
v=w.z
if(v!=null)v.aI(0)
v=w.Q
if(v!=null)v.aI(0)},
bdx(d){this.p(new C.bOZ(this,d))},
Rq(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Rq=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bOS(u))
t=B.f.C(u.e.a.a)
s=u.d
x=3
return A.d(C.cII(s,t.length===0?null:t),$async$Rq)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bOT(u))
q=r.b
if(q==null){s=r.a
v=u.biQ(s==null?"error":s)
x=1
break}u.p(new C.bOU(u,q))
u.bmm(q)
case 1:return A.l(v,w)}})
return A.m($async$Rq,w)},
bmm(d){var x=this
x.UK()
x.y=C.dMk(d.a,x.gb9v())
x.z=A.rn(B.hw,new C.bP5(x,d))
x.Q=A.rn(B.uR,new C.bP6(x,d))},
a4P(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bOY(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aI(0)
x=w.Q
if(x!=null)x.aI(0)}},
biQ(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.hf(!0,new C.bP3(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a4(A.c7(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Dc(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dc=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.hf(!0,new C.bOQ(),t,y.x),$async$Dc)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cHS(s.a),$async$Dc)
case 6:if(u.c==null){x=1
break}case 4:u.UK()
u.p(new C.bOR(u))
case 1:return A.l(v,w)}})
return A.m($async$Dc,w)},
aoo(){this.UK()
this.p(new C.bOX(this))},
akE(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dc()
else w.aoo()
else{x=w.c
x.toString
A.an(x,!1).ix()}},
t(d){var x=this,w=null,v=x.r,u=v==null,t=A.pW(B.lQ,x.gaZh(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hV,w,w)
return A.cXW(u,A.cP(w,B.bz,A.bE(!0,new A.S(D.atr,A.y(A.a([new A.dd(B.bh,w,w,t,w),B.S,s,B.bP,A.a4(u?x.b6z():x.be_(v),1)],y.p),B.F,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bP7(x),y.K)},
b6z(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bOV(o),j=$.cUN(),i=y.p
j=A.w(n,A.y(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a6,n),B.ad,A.b9(n,n,n,A.h(E.cJ2(m),n,n,n,n,D.c19,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a3,n)],i),B.u,B.h,B.l),B.r,n,n,j,n,n,n,D.asi,n,n,n)
m=A.W(999)
x=A.bR(B.fd,0.5)
m=A.a([j,B.ad,A.w(n,A.M(A.a([D.c8D,B.ae,A.a4(A.cr(n,B.a9,!1,n,!0,B.y,n,A.ct(),o.e,n,n,n,n,n,2,D.aFk,B.Y,!0,n,!0,n,!1,n,B.aB,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.ak,n,n,n,n,n,n,n,n,n,n,n,B.my,!0,B.ax,n,B.fQ,n,n,n,n),1)],i),B.u,B.h,B.l,0,n),B.r,n,n,new A.O(B.t,n,x,m,n,n,B.z),n,44,n,B.bZ,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bBU[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eo(v,0,j),s=J.ao(t.a),r=t.b,t=new A.bW(s,r,A.u(t).i("bW<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.al(A.c0())
p=A.a([],i)
if(q.a>0)p.push(B.ae)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.bX(n,x,n,n),A.M(u,B.u,B.h,B.l,0,n)],i))}m=A.a4(A.d4(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.y(A.a([m,B.S,new C.we("Mostrar o QR para pagar",l?o.gakF():n,!1,j,n)],i),B.F,B.h,B.l)},
be_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cc(new A.ab(Date.now(),0,!1)).a
x=h<0?0:B.j.aO(h,1e6)
w=""+B.j.aO(x,60)+":"+B.f.aP(B.j.k(B.j.aC(x,60)),2,"0")
v=B.f.C(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.d_d(h==null?new A.ab(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bQP
break
case"cancelled":h=D.bQH
break
default:h=D.bS2
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bP0()
q=j.c
q.toString
q=A.n3(q,!1).a0(0,$.bb(),y.D).b
p=q==null?i:q.x
q=$.cUN()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.C(p).length!==0)n.push(A.h(B.f.C(p),i,i,i,i,B.jo,B.a6,i))
n.push(new A.S(F.uT,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a6,i),i))
n.push(B.S)
if(g)n.push(D.bXu)
else{m=A.W(16)
l=A.bR(B.fd,0.5)
k=f?1:0.15
n.push(A.w(i,A.fy(A.axc(B.t,A.kp("/pagar/"+d.b),B.yi,B.yj,B.Z,"QR para pagar "+E.cJ2(j.d),186),k),B.r,i,i,new A.O(B.t,i,l,m,i,i,B.z),i,i,i,B.cM,i,i,i))}n.push(B.S)
n.push(A.h(E.cJ2(j.d),i,i,i,i,B.hV,i,i))
n.push(B.aR)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a6,i))
if(f)B.e.n(n,A.a([B.ad,D.cpc],o))
q=A.w(i,A.y(n,B.u,B.h,B.l),B.r,i,i,q,i,i,i,B.cM,i,i,i)
n=A.b9(i,i,i,h.$2("Estado",new C.wp(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a3,i)
h=A.a([A.a4(A.d4(A.a([q,B.aA,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bK,i,i))],o),i,B.Z,i,i,!1,!1),1),B.S],o)
if(f)h.push(new C.we("Cancelar cobran\xe7a",j.gaZi(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.we("Nova cobran\xe7a",j.gb8p(),!1,!1,i),B.ad,new C.we("Fechar",new C.bP_(j),!0,!1,i)],o))
else h.push(new C.we("Mostrar outro QR",j.gakF(),!1,j.f,i))
return A.y(h,B.F,B.h,B.l)}}
C.Fh.prototype={
P(){return new C.agh()}}
C.agh.prototype={
ad(){this.ao()
this.IC()},
IC(){var x=0,w=A.n(y.H),v=this,u
var $async$IC=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.clA(v))
x=2
return A.d(C.cNJ(v.a.c),$async$IC)
case 2:u=e
if(v.c!=null)v.p(new C.clB(v,u))
return A.l(null,w)}})
return A.m($async$IC,w)},
aSu(d){var x=null,w=d.e,v=w==null?x:B.f.C(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nR("",d.c,"pay_request",d.d/100,x,x,new C.cly(this),!1,new C.clz(d),B.W0,x,w,C.dKS(),x,x)},
t(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.UE(this.aSu(t),u)
x=s?"Pagar":C.dD0(t.a)
if(s)s=D.aIu
else{s=t.a
w=y.p
v=A.a([A.bG(A.Ju(s==="paid"?B.h2:B.qb,3,u,120),u,u),B.S,A.h(C.dD_(s),u,u,u,u,B.jl,B.a6,u),B.bp],w)
if(s==="error")B.e.n(v,A.a([new C.we("Tentar outra vez",this.gaZj(),!1,!1,u),B.ad,new C.we("Fechar",new C.clC(d),!0,!1,u)],w))
else v.push(new C.we("OK",new C.clD(d),!1,!1,u))
s=v}return new C.aPA(x,s,u)}}
C.aPA.prototype={
t(d){var x=null,w=A.aU(d,x,y.w).w,v=A.a4(A.cG(B.bs,x,B.Y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cxJ(d),x,x,x,x,x,x,!1,B.aI),1),u=y.p,t=A.a([A.bG(A.w(x,x,B.r,x,x,new A.O(N.BQ,x,x,A.W(3),x,x,B.z),x,5,x,x,x,x,40),x,x),B.aA,A.M(A.a([A.a4(A.h(this.c,x,x,x,x,B.b3,x,x),1),A.pW(B.eC,new C.cxK(d),"Fechar")],u),B.u,B.h,B.l,0,x),B.a0],u)
B.e.n(t,this.d)
return A.hj(!1,B.aN,!0,x,A.y(A.a([v,A.w(x,A.y(t,B.F,B.h,B.I),B.r,x,x,M.KF,x,x,x,new A.a3(20,10,20,20+w.r.d),x,x,1/0)],u),B.u,B.k4,B.l),B.r,x,0,x,x,x,x,x,B.fK)}}
var z=a.updateTypes(["D<~>()","~()","H(N,m4<G_>)","~(c)","c(c)"])
C.cKP.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:127}
C.cw_.prototype={
$0(){var x=this.a
return x.f=x.a47(0,this.b)},
$S:0}
C.cw0.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a47(0,this.b),this.c)},
$S:0}
C.cw7.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bYc
x=y.p
w=A.a([A.M(A.a([A.pW(B.lQ,new C.cw6(d),"Voltar")],x),B.u,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.S,D.cgX,B.bP],x))
else w.push(B.a0)
x=this.a
if(!v)B.e.n(w,x.bdC(t))
else B.e.n(w,x.bcR(t))
return A.d4(w,u,B.D5,u,u,!1,!1)},
$S:z+2}
C.cw6.prototype={
$0(){return A.an(this.a,!1).ix()},
$S:0}
C.cw5.prototype={
$0(){var x=this.a
return x.p(new C.cw4(x))},
$S:0}
C.cw4.prototype={
$0(){var x=this.a
return x.d=x.KN()},
$S:0}
C.cw3.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ag("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cw1.prototype={
$0(){return this.a.Rp(this.b,this.c)},
$S:0}
C.cw2.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).ag("/cobrar",null,y.X)},
$S:0}
C.bMT.prototype={
$0(){},
$S:0}
C.bOZ.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aO(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dw(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bOS.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bOT.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bOU.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bP5.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.h0(new A.ab(Date.now(),0,!1)))x.a4P("expired")
else x.p(new C.bP4())},
$S:58}
C.bP4.prototype={
$0(){},
$S:0}
C.bP6.prototype={
$1(d){return this.aEx(d)},
aEx(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.alD(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a4P("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:492}
C.bOY.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ab(Date.now(),0,!1)},
$S:0}
C.bP3.prototype={
$1(d){var x=null
return new A.f_(D.c8R,D.cbZ,A.a([new A.am(A.cS(B.mA,x,x,new C.bP1(d),x,x),x),new A.am(A.bD(D.c9Z,new C.bP2(this.a,d),x),x)],y.p),x)},
$S:19}
C.bP1.prototype={
$0(){return A.an(this.a,!1).bi()},
$S:0}
C.bP2.prototype={
$0(){A.an(this.b,!1).bi()
var x=this.a.c
x.toString
A.ae(x).ag("/partner-payments/setup",null,y.X)},
$S:0}
C.bOQ.prototype={
$1(d){var x=null
return new A.f_(D.cbG,D.cba,A.a([new A.am(A.cS(D.cbY,x,x,new C.bOO(d),x,x),x),new A.am(A.bD(D.c9V,new C.bOP(d),x),x)],y.p),x)},
$S:19}
C.bOO.prototype={
$0(){return A.an(this.a,!1).ar(!1)},
$S:0}
C.bOP.prototype={
$0(){return A.an(this.a,!1).ar(!0)},
$S:0}
C.bOR.prototype={
$0(){return this.a.r=null},
$S:0}
C.bOX.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.kP(0,B.kf)},
$S:0}
C.bP7.prototype={
$2(d,e){if(!d)this.a.akE()},
$S:262}
C.bOV.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a4(A.b9(x,!0,x,A.hj(!1,B.aN,!0,x,A.eZ(!1,t,!0,A.aG(A.bG(w?D.aDQ:A.h(d,x,x,x,x,B.p1,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bOW(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fN(u,D.Kr),x,x,B.cX),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x),1)},
$S:275}
C.bOW.prototype={
$0(){return this.a.bdx(this.b)},
$S:0}
C.bP0.prototype={
$2(d,e){var x=null
return A.w(x,A.M(A.a([A.a4(A.h(d,x,x,x,x,B.cf,x,x),1),e],y.p),B.u,B.h,B.l,0,x),B.r,x,x,D.KE,x,x,x,B.co,x,x,x)},
$S:1373}
C.bP_.prototype={
$0(){var x=this.a.c
x.toString
return A.an(x,!1).ix()},
$S:0}
C.clA.prototype={
$0(){return this.a.d=null},
$S:0}
C.clB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cly.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEP(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEP(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.alD(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a6(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.ajC)
t=r.h(s,"error")
if(t!=null)throw A.q(A.b0p(A.p(t)))
v=A.cNK(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:147}
C.clz.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.oG
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.alD(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1374}
C.clC.prototype={
$0(){return A.iL(this.a,!0)},
$S:0}
C.clD.prototype={
$0(){return A.iL(this.a,!0)},
$S:0}
C.cxJ.prototype={
$0(){return A.iL(this.a,!0)},
$S:0}
C.cxK.prototype={
$0(){return A.iL(this.a,!0)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dKS","dCZ",4)
var u
w(u=C.acu.prototype,"gakF","Rq",0)
v(u,"gb9v","a4P",3)
w(u,"gaZi","Dc",0)
w(u,"gb8p","aoo",1)
w(u,"gaZh","akE",1)
w(C.agh.prototype,"gaZj","IC",0)})();(function inheritance(){var x=a.inheritMany
x(A.L,[C.aw7,C.a6y,C.ayY,C.G_])
x(A.bv,[C.cKP,C.bP5,C.bP6,C.bP3,C.bOQ,C.bOV,C.cly])
x(A.H,[C.ajT,C.H7,C.wp,C.we,C.aPA])
x(A.G,[C.G0,C.Dd,C.Fh])
x(A.Z,[C.aOV,C.acu,C.agh])
x(A.bN,[C.cw_,C.cw0,C.cw6,C.cw5,C.cw4,C.cw3,C.cw1,C.cw2,C.bMT,C.bOZ,C.bOS,C.bOT,C.bOU,C.bP4,C.bOY,C.bP1,C.bP2,C.bOO,C.bOP,C.bOR,C.bOX,C.bOW,C.bP_,C.clA,C.clB,C.clz,C.clC,C.clD,C.cxJ,C.cxK])
x(A.cM,[C.cw7,C.bP7,C.bP0])})()
A.bq(b.typeUniverse,JSON.parse('{"ajT":{"H":[],"e":[],"f":[]},"H7":{"H":[],"e":[],"f":[]},"G0":{"G":[],"e":[],"f":[]},"aOV":{"Z":["G0"]},"wp":{"H":[],"e":[],"f":[]},"we":{"H":[],"e":[],"f":[]},"Dd":{"G":[],"e":[],"f":[]},"acu":{"Z":["Dd"]},"Fh":{"G":[],"e":[],"f":[]},"agh":{"Z":["Fh"]},"aPA":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{D:x("cI"),E:x("r<ayY>"),s:x("r<c>"),p:x("r<e>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dC"),K:x("L"),y:x("a6y"),m:x("ot"),k:x("+(c,bj)"),R:x("+at,result(ab?,c)"),u:x("+error,request(c?,aw7?)"),A:x("G_"),N:x("c"),v:x("aR<G_>"),q:x("di"),x:x("C"),z:x("@"),g:x("t<@>?"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Kr=new A.bd(B.fd,0.5,B.af,-1)
D.afa=new A.dT(D.Kr,B.a4,B.a4,B.a4)
D.KE=new A.O(null,null,D.afa,null,null,null,B.z)
D.ajC=new A.Dj("invalid_state")
D.asi=new A.a3(14,18,14,18)
D.atr=new A.a3(20,8,20,20)
D.aCu=new A.aZ(61109,"MaterialIcons",null,!0)
D.aDQ=new A.b8(D.aCu,22,B.x,null,null,null)
D.aFk=new A.dG(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.aS,null,null,B.aS,B.aS,!0,null,null,null,null)
D.bXR=new A.k9(40,40,20,B.t,0,null)
D.bXI=new A.k9(null,32,12,B.t,1,null)
D.azV=new A.bJ(1,B.at,D.bXI,null)
D.bwt=x([D.bXR,B.aj,D.azV],y.p)
D.bU3=new A.n7(B.bQ,B.h,B.l,B.u,null,B.cc,null,0,D.bwt,null)
D.bXL=new A.k9(null,120,22,B.t,1,null)
D.bXQ=new A.k9(null,56,22,B.t,2,null)
D.bXT=new A.k9(null,52,26,B.t,2,null)
D.aIu=x([D.bU3,B.bP,D.bXL,B.S,D.bXQ,B.a0,D.bXT],y.p)
D.bxi=x(["1","2","3"],y.s)
D.bw2=x(["4","5","6"],y.s)
D.btV=x(["7","8","9"],y.s)
D.b6K=x(["00","0","del"],y.s)
D.bBU=x([D.bxi,D.bw2,D.btV,D.b6K],A.B("r<t<c>>"))
D.a2a=new C.a6y("error",null,"",0,null)
D.bQH=new A.X("Cancelado",!1)
D.bQP=new A.X("Expirou",!1)
D.bS2=new A.X("\xc0 espera\u2026",!1)
D.bSw=new A.bM(I.kK,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bT1=new A.bM(B.fl,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTg=new A.bM(B.kI,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTj=new A.bM(B.Eg,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.byX=x([],y.E)
D.Hg=new C.G_("error",null,null,null,D.byX,"entry",null)
D.auD=new A.ph(B.h2,150,3,null,null)
D.ajf=new A.f3(B.J,null,null,D.auD,null)
D.bXu=new A.bX(null,214,D.ajf,null)
D.bYc=new A.vV(!1,3,!1,null)
D.c19=new A.P(!0,B.x,null,null,null,null,44,B.E,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5n=new A.P(!0,B.x,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8q=new A.F("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c8D=new A.F("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c8R=new A.F("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c8X=new A.F("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.l8,null,null,null,null,null,null,null)
D.c9V=new A.F("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.c9Z=new A.F("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.caH=new A.F("Ver perfil",null,K.t_,null,null,null,null,null,null,null)
D.cba=new A.F("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.cbG=new A.F("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.cbY=new A.F("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.cbZ=new A.F("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.ccl=new A.F("Cobrar",null,B.lb,null,null,null,null,null,null,null)
D.cgX=new A.F("Quem \xe9",null,B.hV,null,null,null,null,null,null,null)
D.cpc=new C.wp("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.cpd=new C.wp("Verificado",!0,null)
D.ad0=new C.wp("Por registar",!1,null)
D.cpf=new C.wp("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVM","cUN",()=>{var w=A.W(16)
return A.dp_(A.bR(B.fd,0.5),w,null,B.t,null,null,B.z)})})()};
(a=>{a["uzyeTpYVfXTEFRC1KvGgQlRkBnQ="]=a.current})($__dart_deferred_initializers__);