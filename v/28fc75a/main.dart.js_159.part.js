((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,C={
cIU(d,e){return C.dJZ(d,e)},
dJZ(d,e){var x=0,w=A.n(y.u),v,u=2,t=[],s,r,q,p,o,n
var $async$cIU=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("create_pay_request",A.R(["p_amount_cents",d,"p_description",e],y.N,q),q),$async$cIU)
case 7:s=g
r=y.f
if(r.b(s)&&J.o(J.i(s,"result"),"ok")){r=A.p(J.i(s,"id"))
q=A.p(J.i(s,"code"))
p=A.d2(A.p(J.i(s,"expires_at")))
p=p==null?null:p.dH()
if(p==null)p=new A.ab(Date.now(),0,!1).en(6e8)
v=new A.YU(null,new C.avs(r,q,p))
x=1
break}r=r.b(s)?A.p(J.i(s,"result")):"error"
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
return A.m($async$cIU,w)},
cI4(d){return C.dJh(d)},
dJh(d){var x=0,w=A.n(y.H),v=1,u=[],t,s,r,q
var $async$cI4=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:v=3
t=$.Q().b
t===$&&A.b()
s=y.z
x=6
return A.d(t.aH("cancel_pay_request",A.R(["p_id",d],y.N,s),s),$async$cI4)
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
return A.m($async$cI4,w)},
dLT(d,e){var x=$.Q().b
x===$&&A.b()
x=x.ch
x===$&&A.b()
return x.LU(0,"pay-request-"+d,B.yi).NM(new C.cL0(e),B.GE,new G.Fr(H.y5,"id",d),"public","pay_requests").PA(0)},
cNN(d){return C.dN5(d)},
dN5(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cNN=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("pay_request_info",A.R(["p_code",d],y.N,q),q),$async$cNN)
case 7:s=f
if(!y.f.b(s)){v=D.a1Q
x=1
break}r=A.p(J.i(s,"result"))
q=A.C(J.i(s,"id"))
p=J.i(s,"merchant")
p=A.p(p==null?"":p)
o=A.aD(J.i(s,"amount_cents"))
o=o==null?null:B.k.F(o)
if(o==null)o=0
n=A.C(J.i(s,"description"))
v=new C.a66(r,q,p,o,n)
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
v=D.a1Q
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cNN,w)},
al0(d){return C.dKn(d)},
dKn(d){var x=0,w=A.n(y.P),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$al0=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
x=7
return A.d(o.f3("event-pay",d),$async$al0)
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
return A.m($async$al0,w)},
avs:function avs(d,e,f){this.a=d
this.b=e
this.c=f},
cL0:function cL0(d){this.a=d},
a66:function a66(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cSi(d){return C.dNK(d)},
dNK(b0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cSi=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
o=y.z
x=7
return A.d(p.aH("scan_qr",A.R(["p_token",b0],y.N,o),o),$async$cSi)
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
j=J.ao(j==null?B.aj:j)
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
J.bb(r,new C.ayb(f,e,d,a0,a1,a2,a3,a4,a6,a5,a7))}}p=A.C(J.i(s,"mode"))
if(p==null){p=k.a(J.i(s,"items"))
p=p==null?null:J.dR(p)
p=p===!0?"entry":"profile"}k=A.C(J.i(s,"profile_id"))
v=new C.FU(o,n,m,l,r,p,k)
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
return A.m($async$cSi,w)},
aVj(d,e){return C.dNJ(d,e)},
dNJ(d,e){var x=0,w=A.n(y.R),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVj=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=y.N
q=y.z
x=e.a==="booking"?7:9
break
case 7:p=$.Q().b
p===$&&A.b()
x=10
return A.d(p.aH("scan_booking_arrival",A.R(["p_scan",d,"p_booking",e.c],r,q),q),$async$aVj)
case 10:o=g
x=8
break
case 9:p=$.Q().b
p===$&&A.b()
x=11
return A.d(p.aH("scan_check_in",A.R(["p_scan",d,"p_wedding",e.b],r,q),q),$async$aVj)
case 11:o=g
case 8:s=o
if(!y.f.b(s)){v=new A.YS(null,"error")
x=1
break}r=A.p(J.i(s,"result"))
q=J.i(s,"arrived_at")
if(q==null)q=J.i(s,"checked_in_at")
q=A.d2(A.p(q==null?"":q))
q=q==null?null:q.dH()
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
return A.m($async$aVj,w)},
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
FU:function FU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d__(d){return B.f.aT(B.j.k(A.i_(d)),2,"0")+":"+B.f.aT(B.j.k(A.hP(d)),2,"0")},
d8Q(d){return new C.FV(d,null)},
doP(){return new C.Db(null)},
dvv(d){return new C.Fe(d,null)},
dCx(d){var x
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
default:x=A.aV6(d)
break}return x},
dCz(d){var x
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
dCy(d){var x
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
aje:function aje(d,e){this.c=d
this.a=e},
H1:function H1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
FV:function FV(d,e){this.c=d
this.a=e},
aO9:function aO9(d){var _=this
_.d=$
_.e=d
_.c=_.a=_.f=null},
cwk:function cwk(d,e){this.a=d
this.b=e},
cwl:function cwl(d,e,f){this.a=d
this.b=e
this.c=f},
cws:function cws(d){this.a=d},
cwr:function cwr(d){this.a=d},
cwq:function cwq(d){this.a=d},
cwp:function cwp(d){this.a=d},
cwo:function cwo(d,e){this.a=d
this.b=e},
cwm:function cwm(d,e,f){this.a=d
this.b=e
this.c=f},
cwn:function cwn(d){this.a=d},
wo:function wo(d,e,f){this.c=d
this.d=e
this.a=f},
we:function we(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bMg:function bMg(){},
Db:function Db(d){this.a=d},
ac0:function ac0(d){var _=this
_.d=0
_.e=d
_.f=!1
_.r=null
_.w="open"
_.c=_.a=_.Q=_.z=_.y=_.x=null},
bOm:function bOm(d,e){this.a=d
this.b=e},
bOf:function bOf(d){this.a=d},
bOg:function bOg(d){this.a=d},
bOh:function bOh(d,e){this.a=d
this.b=e},
bOt:function bOt(d,e){this.a=d
this.b=e},
bOs:function bOs(){},
bOu:function bOu(d,e){this.a=d
this.b=e},
bOl:function bOl(d,e){this.a=d
this.b=e},
bOr:function bOr(d){this.a=d},
bOp:function bOp(d){this.a=d},
bOq:function bOq(d,e){this.a=d
this.b=e},
bOd:function bOd(){},
bOb:function bOb(d){this.a=d},
bOc:function bOc(d){this.a=d},
bOe:function bOe(d){this.a=d},
bOk:function bOk(d){this.a=d},
bOv:function bOv(d){this.a=d},
bOi:function bOi(d){this.a=d},
bOj:function bOj(d,e){this.a=d
this.b=e},
bOo:function bOo(){},
bOn:function bOn(d){this.a=d},
Fe:function Fe(d,e){this.c=d
this.a=e},
afG:function afG(){this.c=this.a=this.d=null},
cmw:function cmw(d){this.a=d},
cmx:function cmx(d,e){this.a=d
this.b=e},
cmu:function cmu(d){this.a=d},
cmv:function cmv(d){this.a=d},
cmy:function cmy(d){this.a=d},
cmz:function cmz(d){this.a=d},
aOR:function aOR(d,e,f){this.c=d
this.d=e
this.a=f},
cy7:function cy7(d){this.a=d},
cy8:function cy8(d){this.a=d}},D,I,K,F,L,M,N
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
C.avs.prototype={}
C.a66.prototype={}
C.ayb.prototype={}
C.FU.prototype={
gap(d){return this.c}}
C.aje.prototype={
u(d){var x=null
return A.x(x,this.c,B.r,x,x,$.cUF(),x,x,x,B.cT,x,x,x)}}
C.H1.prototype={
u(d){var x=null,w=A.a([A.a5(A.h(this.c,x,x,x,x,B.cc,x,x),1)],y.p),v=this.d
if(v!=null)w.push(A.h(v,x,x,x,x,B.bx,x,x))
v=this.e
if(v!=null)w.push(v)
return A.x(x,A.O(w,B.v,B.h,B.l,0,x),B.r,x,x,D.Ki,x,x,x,B.dM,x,x,x)}}
C.FV.prototype={
R(){return new C.aO9(A.E(y.N,y.R))}}
C.aO9.prototype={
KL(){var x=0,w=A.n(y.A),v,u=this,t,s,r
var $async$KL=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cSi(u.a.c),$async$KL)
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
a3X(d,e){var x=e.c
return x==null?"e"+e.b:x},
Rf(d,e){return this.aUp(d,e)},
aUp(d,e){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Rf=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:u.p(new C.cwk(u,e))
t=d.b
t.toString
x=3
return A.d(C.aVj(t,e),$async$Rf)
case 3:s=g
if(u.c==null){x=1
break}u.p(new C.cwl(u,e,s))
case 1:return A.l(v,w)}})
return A.m($async$Rf,w)},
u(d){var x=this,w=x.d
if(w===$)w=x.d=x.KL()
return A.cP(null,B.by,A.bB(!0,A.b7A(new C.cws(x),w,y.A),null,B.Z,!0),!0,null)},
bcD(d){var x,w,v,u,t,s,r,q,p=null,o=d.a
switch(o){case"expired":x=D.bT0
break
case"own_code":x=D.bTd
break
case"not_found":x=D.bSx
break
default:x=D.bTf
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
q=A.a([B.kU,A.b9(r,o?B.W:B.fR,p,p,96),B.a_,A.h(v,p,p,p,p,B.hS,B.a4,p),B.P,A.h(u,p,p,p,p,D.c4H,B.a4,p)],x)
if(o)B.e.n(q,A.a([B.d4,new A.am(A.bD(B.t4,new C.cwq(this),p),p)],x))
return q},
bbV(d){var x,w,v,u,t,s=null,r=d.c
if(r==null)r="Convidado"
x=y.p
w=A.a([A.O(A.a([new A.ch(r,44,d.d,!1,!0,s),B.af,A.a5(A.y(A.a([A.h(r,s,s,s,s,B.iw,s,s),D.c7G],x),B.G,B.h,B.l),1),B.ac,D.coG],x),B.v,B.h,B.l,0,s)],x)
if(d.r!=null)B.e.n(w,A.a([B.R,new A.d_(B.bb,s,s,A.aK(new A.am(A.hk(D.ca_,new C.cwo(this,d),A.fM(s,s,B.t,s,s,s,s,s,s,B.z,s,s,B.bY,s,B.ab,B.c7,s,s,s,s)),s),36,s),s)],x))
w=A.a([new C.aje(A.y(w,B.E,B.h,B.l),s)],x)
v=d.e
u=v.length
if(u===0)B.e.n(w,A.a([B.bO,D.c8e],x))
else for(t=0;t<v.length;v.length===u||(0,A.G)(v),++t)B.e.n(w,this.b5H(0,d,v[t]))
return w},
b5H(d,e,f){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a3X(0,f),l=o.e.h(0,m),k=f.a==="booking",j=!k&&f.w&&f.x!=="paid",i=l==null
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
if(q!=null)r.push(new A.S(F.pX,A.h(B.dr[A.fI(q)-1]+", "+A.aE(q)+" "+B.bg[A.aw(q)-1],n,n,n,n,B.L,n,n),n))
r.push(B.ad)
if(k){q=A.a([],x)
p=f.f
if(p!=null)q.push(new C.H1("Marca\xe7\xe3o",p,n,n))
p=f.r
if(p!=null)q.push(new C.H1("Pessoas",A.p(p),n,n))
q.push(new C.H1("Chegada",n,v?new C.wo("Registada \xe0s "+C.d__(w),!0,n):D.acE,n))
B.e.n(r,q)}else{if(f.x==="paid"){q=f.y
q=new C.wo(q===1?"Pago \xb7 1 pessoa":"Pago \xb7 "+q+" pessoas",!0,n)}else q=D.coI
p=v?new C.wo("Registada \xe0s "+C.d__(w),!0,n):D.acE
B.e.n(r,A.a([new C.H1("Bilhete",n,q,n),new C.H1("Entrada",n,p,n)],x))}if(t!=null)r.push(new A.S(B.lq,A.h(t,n,n,n,n,B.z3,n,n),n))
i=A.a([B.bO,i,B.ar,new C.aje(A.y(r,B.E,B.h,B.l),n)],x)
if(s||k)i.push(B.R)
t=A.a([],x)
if(s){r=o.f
q=r==null?new C.cwm(o,e,f):n
if(r===m)r=B.yK
else r=A.h(k?"Registar chegada":"Registar entrada",n,n,n,n,B.kY,n,n)
t.push(A.a5(A.aK(new A.am(A.bD(r,q,n),n),44,n),1))}if(k){x=A.a([],x)
if(s)x.push(B.ae)
x.push(A.a5(A.aK(new A.am(A.hk(D.cbB,new C.cwn(o),A.fM(n,n,B.t,n,n,n,n,n,n,B.z,n,n,n,n,B.ab,B.c7,n,n,n,n)),n),44,n),1))
B.e.n(t,x)}i.push(A.O(t,B.v,B.h,B.l,0,n))
return i}}
C.wo.prototype={
u(d){var x=null,w=this.d,v=w?B.cz:B.dU,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?B.cR:B.co,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),B.r,x,x,new A.J(v,x,x,u,x,x,B.x),x,x,x,B.dm,x,x,x)}}
C.we.prototype={
u(d){var x=this,w=null,v=x.f,u=v?B.mc:A.h(x.c,w,w,w,w,B.eJ,w,w)
if(x.e)v=new A.am(A.hk(u,x.d,A.fM(w,w,B.t,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c7,w,w,w,w)),w)
else{v=v?new C.bMg():x.d
v=new A.am(A.bD(u,v,A.cd(B.z,B.z.cc(0.35),B.t,B.t,w,w,B.ab,w,w,w)),w)}return A.aK(v,52,1/0)}}
C.Db.prototype={
R(){return new C.ac0(new A.aF(B.ak,$.aa()))}}
C.ac0.prototype={
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
x.ya(v)}w.y=null
v=w.z
if(v!=null)v.aK(0)
v=w.Q
if(v!=null)v.aK(0)},
bcy(d){this.p(new C.bOm(this,d))},
Rg(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q
var $async$Rg=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.d<50||u.f){x=1
break}u.p(new C.bOf(u))
t=B.f.B(u.e.a.a)
s=u.d
x=3
return A.d(C.cIU(s,t.length===0?null:t),$async$Rg)
case 3:r=e
if(u.c==null){x=1
break}u.p(new C.bOg(u))
q=r.b
if(q==null){s=r.a
v=u.bhI(s==null?"error":s)
x=1
break}u.p(new C.bOh(u,q))
u.blh(q)
case 1:return A.l(v,w)}})
return A.m($async$Rg,w)},
blh(d){var x=this
x.UC()
x.y=C.dLT(d.a,x.gb8H())
x.z=A.ua(B.hs,new C.bOt(x,d))
x.Q=A.ua(B.uL,new C.bOu(x,d))},
a4D(d){var x,w=this
if(w.c!=null){x=w.w
x=d===x||x==="paid"}else x=!0
if(x)return
w.p(new C.bOl(w,d))
if(d!=="open"){x=w.z
if(x!=null)x.aK(0)
x=w.Q
if(x!=null)x.aK(0)}},
bhI(d){var x,w=null
if(d==="not_onboarded"){x=this.c
x.toString
A.h1(!0,new C.bOr(this),x,y.H)
return}switch(d){case"not_partner":x="S\xf3 os parceiros podem cobrar com QR."
break
case"invalid_amount":x="O valor n\xe3o \xe9 v\xe1lido."
break
default:x="N\xe3o foi poss\xedvel criar a cobran\xe7a. Verifica a liga\xe7\xe3o e tenta outra vez."
break}this.c.O(y.q).f.a0(A.bY(w,w,w,w,w,B.y,w,A.h(x,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Dd(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Dd=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.r
if(s==null){x=1
break}x=u.w==="open"?3:4
break
case 3:t=u.c
t.toString
x=5
return A.d(A.h1(!0,new C.bOd(),t,y.x),$async$Dd)
case 5:if(e!==!0||u.c==null){x=1
break}x=6
return A.d(C.cI4(s.a),$async$Dd)
case 6:if(u.c==null){x=1
break}case 4:u.UC()
u.p(new C.bOe(u))
case 1:return A.l(v,w)}})
return A.m($async$Dd,w)},
ao8(){this.UC()
this.p(new C.bOk(this))},
aks(){var x,w=this
if(w.r!=null)if(w.w==="open")w.Dd()
else w.ao8()
else{x=w.c
x.toString
A.al(x,!1).hA()}},
u(d){var x=this,w=null,v=x.r,u=v==null,t=A.pW(B.lC,x.gaYF(),"Voltar"),s=A.h(u?"Cobrar":"QR para pagar",w,w,w,w,B.hS,w,w)
return A.cXJ(u,A.cP(w,B.by,A.bB(!0,new A.S(D.atk,A.y(A.a([new A.d_(B.bb,w,w,t,w),B.R,s,B.bO,A.a5(u?x.b5Q():x.bcZ(v),1)],y.p),B.E,B.h,B.l),w),w,B.Z,!0),!0,w),new C.bOv(x),y.K)},
b5Q(){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m>=50,k=new C.bOi(o),j=$.cUF(),i=y.p
j=A.x(n,A.y(A.a([A.h(l?"Quem paga escolhe como paga quando ler o QR":"M\xednimo 0,50 \u20ac",n,n,n,n,B.L,B.a4,n),B.ad,A.bj(n,n,n,A.h(E.cJe(m),n,n,n,n,D.c0A,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.a5,n)],i),B.v,B.h,B.l),B.r,n,n,j,n,n,n,D.asd,n,n,n)
m=A.W(999)
x=A.bH(B.fa,0.5)
m=A.a([j,B.ad,A.x(n,A.O(A.a([D.c7S,B.ae,A.a5(A.cs(n,B.a6,!1,n,!0,B.y,n,A.cv(),o.e,n,n,n,n,n,2,D.aEY,B.U,!0,n,!0,n,!1,n,B.aB,n,n,n,n,n,n,80,n,1,n,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.al,n,n,n,n,n,n,n,n,n,n,n,B.kX,!0,B.au,n,B.hb,n,n,n,n),1)],i),B.v,B.h,B.l,0,n),B.r,n,n,new A.J(B.t,n,x,m,n,n,B.x),n,44,n,B.bY,n,n,n)],i)
for(j=y.N,w=0;w<4;++w){v=D.bBQ[w]
x=B.e.gJ(v)==="1"?16:10
u=A.a([],i)
for(t=A.eu(v,0,j),s=J.ao(t.a),r=t.b,t=new A.bX(s,r,A.u(t).i("bX<1>"));t.q();){q=t.c
q=q>=0?new A.X(r+q,s.gE(s)):A.an(A.c0())
p=A.a([],i)
if(q.a>0)p.push(B.ae)
p.push(k.$1(q.b))
B.e.n(u,p)}B.e.n(m,A.a([new A.c5(n,x,n,n),A.O(u,B.v,B.h,B.l,0,n)],i))}m=A.a5(A.d6(m,n,B.Z,n,n,!1,!1),1)
j=o.f
return A.y(A.a([m,B.R,new C.we("Mostrar o QR para pagar",l?o.gakt():n,!1,j,n)],i),B.E,B.h,B.l)},
bcZ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h==="paid",f=h==="open"
h=d.c.cf(new A.ab(Date.now(),0,!1)).a
x=h<0?0:B.j.aO(h,1e6)
w=""+B.j.aO(x,60)+":"+B.f.aT(B.j.k(B.j.aI(x,60)),2,"0")
v=B.f.B(j.e.a.a)
switch(j.w){case"paid":h=j.x
h=new A.X("Pago \xe0s "+C.d__(h==null?new A.ab(Date.now(),0,!1):h),!0)
break
case"expired":h=D.bQO
break
case"cancelled":h=D.bQH
break
default:h=D.bS3
break}u=h.a
t=i
s=h.b
t=s
r=u
h=new C.bOo()
q=j.c
q.toString
q=A.nP(q,!1).a_(0,$.b7(),y.D).b
p=q==null?i:q.x
q=$.cUF()
o=y.p
n=A.a([],o)
if(p!=null&&B.f.B(p).length!==0)n.push(A.h(B.f.B(p),i,i,i,i,B.iw,B.a4,i))
n.push(new A.S(F.pX,A.h(v.length===0?"Pagamento no balc\xe3o":v,i,i,i,i,B.L,B.a4,i),i))
n.push(B.R)
if(g)n.push(D.bX1)
else{m=A.W(16)
l=A.bH(B.fa,0.5)
k=f?1:0.15
n.push(A.x(i,A.f3(A.bpE(B.t,A.ki("/pagar/"+d.b),B.GG,B.GH,B.Z,"QR para pagar "+E.cJe(j.d),186),k),B.r,i,i,new A.J(B.t,i,l,m,i,i,B.x),i,i,i,B.cT,i,i,i))}n.push(B.R)
n.push(A.h(E.cJe(j.d),i,i,i,i,B.hS,i,i))
n.push(B.aU)
if(g)m="O dinheiro vai para a tua conta de pagamentos."
else m=f?"Pede ao cliente para ler este QR com a app \xc0 Nossa!":"Este QR j\xe1 n\xe3o funciona."
n.push(A.h(m,i,i,i,i,B.L,B.a4,i))
if(f)B.e.n(n,A.a([B.ad,D.coF],o))
q=A.x(i,A.y(n,B.v,B.h,B.l),B.r,i,i,q,i,i,i,B.cT,i,i,i)
n=A.bj(i,i,i,h.$2("Estado",new C.wo(r,t,i)),!1,i,i,i,!1,i,!1,i,i,i,i,i,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a5,i)
h=A.a([A.a5(A.d6(A.a([q,B.aA,n,h.$2("Expira em",A.h(f?w:"\u2014",i,i,i,i,B.bx,i,i))],o),i,B.Z,i,i,!1,!1),1),B.R],o)
if(f)h.push(new C.we("Cancelar cobran\xe7a",j.gaYG(),!0,!1,i))
else if(g)B.e.n(h,A.a([new C.we("Nova cobran\xe7a",j.gb7B(),!1,!1,i),B.ad,new C.we("Fechar",new C.bOn(j),!0,!1,i)],o))
else h.push(new C.we("Mostrar outro QR",j.gakt(),!1,j.f,i))
return A.y(h,B.E,B.h,B.l)}}
C.Fe.prototype={
R(){return new C.afG()}}
C.afG.prototype={
ad(){this.aq()
this.IB()},
IB(){var x=0,w=A.n(y.H),v=this,u
var $async$IB=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(v.d!=null)v.p(new C.cmw(v))
x=2
return A.d(C.cNN(v.a.c),$async$IB)
case 2:u=e
if(v.c!=null)v.p(new C.cmx(v,u))
return A.l(null,w)}})
return A.m($async$IB,w)},
aRZ(d){var x=null,w=d.e,v=w==null?x:B.f.B(w)
if(v==null)v=""
w=v.length===0?"Pagamento no balc\xe3o":v
return new A.nN("",d.c,"pay_request",d.d/100,x,x,new C.cmu(this),!1,new C.cmv(d),B.VH,x,w,C.dKq(),x,x)},
u(d){var x,w,v,u=null,t=this.d,s=t==null
if(!s&&t.a==="ok")return new L.Un(this.aRZ(t),u)
x=s?"Pagar":C.dCz(t.a)
if(s)s=D.aI9
else{s=t.a
w=y.p
v=A.a([A.bO(A.a2s(s==="paid"?B.iN:B.q5,3,u,120),u,u),B.R,A.h(C.dCy(s),u,u,u,u,B.hd,B.a4,u),B.bh],w)
if(s==="error")B.e.n(v,A.a([new C.we("Tentar outra vez",this.gaYH(),!1,!1,u),B.ad,new C.we("Fechar",new C.cmy(d),!0,!1,u)],w))
else v.push(new C.we("OK",new C.cmz(d),!1,!1,u))
s=v}return new C.aOR(x,s,u)}}
C.aOR.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=A.a5(A.cp(B.bu,x,B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.cy7(d),x,x,x,x,x,x,!1,B.aD),1),u=y.p,t=A.a([A.bO(A.x(x,x,B.r,x,x,new A.J(N.ua,x,x,A.W(3),x,x,B.x),x,5,x,x,x,x,40),x,x),B.aA,A.O(A.a([A.a5(A.h(this.c,x,x,x,x,B.bi,x,x),1),A.pW(B.el,new C.cy8(d),"Fechar")],u),B.v,B.h,B.l,0,x),B.a_],u)
B.e.n(t,this.d)
return A.hj(!1,B.aN,!0,x,A.y(A.a([v,A.x(x,A.y(t,B.E,B.h,B.J),B.r,x,x,M.Kj,x,x,x,new A.a4(20,10,20,20+w.r.d),x,x,1/0)],u),B.v,B.jZ,B.l),B.r,x,0,x,x,x,x,x,B.fD)}}
var z=a.updateTypes(["F<~>()","~()","L(N,m4<FU>)","~(c)","c(c)"])
C.cL0.prototype={
$1(d){return this.a.$1(A.p(d.e.h(0,"status")))},
$S:153}
C.cwk.prototype={
$0(){var x=this.a
return x.f=x.a3X(0,this.b)},
$S:0}
C.cwl.prototype={
$0(){var x=this.a
x.f=null
x.e.j(0,x.a3X(0,this.b),this.c)},
$S:0}
C.cws.prototype={
$2(d,e){var x,w,v,u=null,t=e.b
if(t==null)return D.bXI
x=y.p
w=A.a([A.O(A.a([A.pW(B.lC,new C.cwr(d),"Voltar")],x),B.v,B.h,B.l,0,u)],x)
v=t.a==="ok"
if(v)B.e.n(w,A.a([B.R,D.cgk,B.bO],x))
else w.push(B.a_)
x=this.a
if(!v)B.e.n(w,x.bcD(t))
else B.e.n(w,x.bbV(t))
return A.d6(w,u,B.CQ,u,u,!1,!1)},
$S:z+2}
C.cwr.prototype={
$0(){return A.al(this.a,!1).hA()},
$S:0}
C.cwq.prototype={
$0(){var x=this.a
return x.p(new C.cwp(x))},
$S:0}
C.cwp.prototype={
$0(){var x=this.a
return x.d=x.KL()},
$S:0}
C.cwo.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).aj("/u/"+A.p(this.b.r),null,y.X)},
$S:0}
C.cwm.prototype={
$0(){return this.a.Rf(this.b,this.c)},
$S:0}
C.cwn.prototype={
$0(){var x=this.a.c
x.toString
return A.ae(x).aj("/cobrar",null,y.X)},
$S:0}
C.bMg.prototype={
$0(){},
$S:0}
C.bOm.prototype={
$0(){var x=this.b,w=this.a,v=w.d
switch(x){case"del":x=B.j.aO(v,10)
break
case"00":x=v*100
break
default:x=v*10+A.dB(x,null)
break}if(x<=999999)w.d=x},
$S:0}
C.bOf.prototype={
$0(){return this.a.f=!0},
$S:0}
C.bOg.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bOh.prototype={
$0(){var x=this.a
x.r=this.b
x.w="open"
x.x=null},
$S:0}
C.bOt.prototype={
$1(d){var x=this.a
if(x.c==null)return
if(x.w==="open"&&!this.b.c.he(new A.ab(Date.now(),0,!1)))x.a4D("expired")
else x.p(new C.bOs())},
$S:64}
C.bOs.prototype={
$0(){},
$S:0}
C.bOu.prototype={
$1(d){return this.aE1(d)},
aE1(d){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.w!=="open"){x=1
break}x=3
return A.d(C.al0(A.R(["action","sync","id",u.b.a],y.N,y.z)),$async$$1)
case 3:t=f
if(s.c!=null&&J.o(J.i(t,"state"),"paid"))s.a4D("paid")
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:503}
C.bOl.prototype={
$0(){var x=this.a,w=this.b
x.w=w
if(w==="paid")x.x=new A.ab(Date.now(),0,!1)},
$S:0}
C.bOr.prototype={
$1(d){var x=null
return new A.eU(D.c88,D.cbe,A.a([new A.am(A.cJ(B.mp,x,x,new C.bOp(d),x,x),x),new A.am(A.bD(D.c9f,new C.bOq(this.a,d),x),x)],y.p),x)},
$S:19}
C.bOp.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
C.bOq.prototype={
$0(){A.al(this.b,!1).bj()
var x=this.a.c
x.toString
A.ae(x).aj("/partner-payments/setup",null,y.X)},
$S:0}
C.bOd.prototype={
$1(d){var x=null
return new A.eU(D.caW,D.cat,A.a([new A.am(A.cJ(D.cbd,x,x,new C.bOb(d),x,x),x),new A.am(A.bD(D.c9a,new C.bOc(d),x),x)],y.p),x)},
$S:19}
C.bOb.prototype={
$0(){return A.al(this.a,!1).ah(!1)},
$S:0}
C.bOc.prototype={
$0(){return A.al(this.a,!1).ah(!0)},
$S:0}
C.bOe.prototype={
$0(){return this.a.r=null},
$S:0}
C.bOk.prototype={
$0(){var x=this.a
x.r=null
x.d=0
x.e.k_(0,B.jb)},
$S:0}
C.bOv.prototype={
$2(d,e){if(!d)this.a.aks()},
$S:235}
C.bOi.prototype={
$1(d){var x=null,w=d==="del",v=w?"Apagar":d,u=A.W(16),t=A.W(16)
return A.a5(A.bj(x,!0,x,A.hj(!1,B.aN,!0,x,A.eY(!1,t,!0,A.aK(A.bO(w?D.aDv:A.h(d,x,x,x,x,B.oV,x,x),x,x),60,x),x,!0,x,x,x,x,x,x,x,x,new C.bOj(this.a,d),x,x,x,x,x,x,x),B.r,B.t,0,x,x,new A.fO(u,D.K5),x,x,B.cW),!1,x,x,x,!0,x,!1,x,x,x,x,x,x,x,x,v,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x),1)},
$S:231}
C.bOj.prototype={
$0(){return this.a.bcy(this.b)},
$S:0}
C.bOo.prototype={
$2(d,e){var x=null
return A.x(x,A.O(A.a([A.a5(A.h(d,x,x,x,x,B.cc,x,x),1),e],y.p),B.v,B.h,B.l,0,x),B.r,x,x,D.Ki,x,x,x,B.ck,x,x,x)},
$S:1375}
C.bOn.prototype={
$0(){var x=this.a.c
x.toString
return A.al(x,!1).hA()},
$S:0}
C.cmw.prototype={
$0(){return this.a.d=null},
$S:0}
C.cmx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cmu.prototype={
$3$paymentMethodId$phone(d,e,f){return this.aEi(d,e,f)},
$1(d){return this.$3$paymentMethodId$phone(d,null,null)},
$2$phone(d,e){return this.$3$paymentMethodId$phone(d,null,e)},
$2$paymentMethodId(d,e){return this.$3$paymentMethodId$phone(d,e,null)},
aEi(d,e,f){var x=0,w=A.n(y.m),v,u=this,t,s,r
var $async$$3$paymentMethodId$phone=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.al0(A.R(["action","intent","code",u.a.a.c,"method",d.c],y.N,y.z)),$async$$3$paymentMethodId$phone)
case 3:s=h
r=J.a7(s)
if(J.o(r.h(s,"state"),"paid"))throw A.q(D.ajy)
t=r.h(s,"error")
if(t!=null)throw A.q(A.b_C(A.p(t)))
v=A.cNO(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$3$paymentMethodId$phone,w)},
$S:157}
C.cmv.prototype={
$0(){var x=0,w=A.n(y.k),v,u=this,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.b
if(t==null){v=B.ow
x=1
break}s=A
r=J
q=J
x=3
return A.d(C.al0(A.R(["action","sync","id",t],y.N,y.z)),$async$$0)
case 3:v=new s.X(r.o(q.i(e,"state"),"paid")?"paid":"open",null)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1376}
C.cmy.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
C.cmz.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
C.cy7.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
C.cy8.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_1u
x(C,"dKq","dCx",4)
var u
w(u=C.ac0.prototype,"gakt","Rg",0)
v(u,"gb8H","a4D",3)
w(u,"gaYG","Dd",0)
w(u,"gb7B","ao8",1)
w(u,"gaYF","aks",1)
w(C.afG.prototype,"gaYH","IB",0)})();(function inheritance(){var x=a.inheritMany
x(A.M,[C.avs,C.a66,C.ayb,C.FU])
x(A.bu,[C.cL0,C.bOt,C.bOu,C.bOr,C.bOd,C.bOi,C.cmu])
x(A.L,[C.aje,C.H1,C.wo,C.we,C.aOR])
x(A.H,[C.FV,C.Db,C.Fe])
x(A.a_,[C.aO9,C.ac0,C.afG])
x(A.bL,[C.cwk,C.cwl,C.cwr,C.cwq,C.cwp,C.cwo,C.cwm,C.cwn,C.bMg,C.bOm,C.bOf,C.bOg,C.bOh,C.bOs,C.bOl,C.bOp,C.bOq,C.bOb,C.bOc,C.bOe,C.bOk,C.bOj,C.bOn,C.cmw,C.cmx,C.cmv,C.cmy,C.cmz,C.cy7,C.cy8])
x(A.cK,[C.cws,C.bOv,C.bOo])})()
A.br(b.typeUniverse,JSON.parse('{"aje":{"L":[],"e":[],"f":[]},"H1":{"L":[],"e":[],"f":[]},"FV":{"H":[],"e":[],"f":[]},"aO9":{"a_":["FV"]},"wo":{"L":[],"e":[],"f":[]},"we":{"L":[],"e":[],"f":[]},"Db":{"H":[],"e":[],"f":[]},"ac0":{"a_":["Db"]},"Fe":{"H":[],"e":[],"f":[]},"afG":{"a_":["Fe"]},"aOR":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{D:x("cH"),E:x("r<ayb>"),s:x("r<c>"),p:x("r<e>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("du"),K:x("M"),y:x("a66"),m:x("ow"),k:x("+(c,bm)"),R:x("+at,result(ab?,c)"),u:x("+error,request(c?,avs?)"),A:x("FU"),N:x("c"),v:x("aQ<FU>"),q:x("dl"),x:x("B"),z:x("@"),g:x("t<@>?"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.K5=new A.be(B.fa,0.5,B.ag,-1)
D.aeV=new A.dN(D.K5,B.aa,B.aa,B.aa)
D.Ki=new A.J(null,null,D.aeV,null,null,null,B.x)
D.ajy=new A.Dh("invalid_state")
D.asd=new A.a4(14,18,14,18)
D.atk=new A.a4(20,8,20,20)
D.aC9=new A.b0(61109,"MaterialIcons",null,!0)
D.aDv=new A.b8(D.aC9,22,B.z,null,null,null)
D.aEY=new A.dE(null,null,null,null,null,null,null,null,null,null,"2 gin t\xf3nico (opcional)",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,!1,null,null,null,null,B.bk,null,null,B.bk,B.bk,!0,null,null,null,null)
D.bXl=new A.kZ(40,40,20,B.t,0,null)
D.bXd=new A.kZ(null,32,12,B.t,1,null)
D.azD=new A.bJ(1,B.at,D.bXd,null)
D.bwm=x([D.bXl,B.af,D.azD],y.p)
D.bTG=new A.nS(B.bJ,B.h,B.l,B.v,null,B.cg,null,0,D.bwm,null)
D.bXf=new A.kZ(null,120,22,B.t,1,null)
D.bXk=new A.kZ(null,56,22,B.t,2,null)
D.bXm=new A.kZ(null,52,26,B.t,2,null)
D.aI9=x([D.bTG,B.bO,D.bXf,B.R,D.bXk,B.a_,D.bXm],y.p)
D.bxc=x(["1","2","3"],y.s)
D.bvW=x(["4","5","6"],y.s)
D.btJ=x(["7","8","9"],y.s)
D.b6s=x(["00","0","del"],y.s)
D.bBQ=x([D.bxc,D.bvW,D.btJ,D.b6s],A.z("r<t<c>>"))
D.a1Q=new C.a66("error",null,"",0,null)
D.bQH=new A.X("Cancelado",!1)
D.bQO=new A.X("Expirou",!1)
D.bS3=new A.X("\xc0 espera\u2026",!1)
D.bSx=new A.bW(I.kF,"QR inv\xe1lido","Este c\xf3digo n\xe3o \xe9 um QR da \xc0 Nossa! v\xe1lido.")
D.bT0=new A.bW(B.hB,"QR expirado","Este QR j\xe1 mudou. Pede para mostrar o QR outra vez e l\xea de novo.")
D.bTd=new A.bW(B.kE,"\xc9 o teu QR","Este \xe9 o teu pr\xf3prio QR.")
D.bTf=new A.bW(B.E1,"N\xe3o foi poss\xedvel ler","Verifica a liga\xe7\xe3o e tenta outra vez.")
D.byR=x([],y.E)
D.GZ=new C.FU("error",null,null,null,D.byR,"entry",null)
D.aum=new A.nx(B.iN,150,3,null,null)
D.ajb=new A.f6(B.K,null,null,D.aum,null)
D.bX1=new A.c5(null,214,D.ajb,null)
D.bXI=new A.vX(!1,3,!1,null)
D.c0A=new A.P(!0,B.z,null,null,null,null,44,B.F,null,-0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4H=new A.P(!0,B.z,null,null,null,null,16,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7G=new A.D("Leste o QR agora",null,B.L,null,null,null,null,null,null,null)
D.c7S=new A.D("O qu\xea",null,B.L,null,null,null,null,null,null,null)
D.c88=new A.D("Ativa os pagamentos",null,null,null,null,null,null,null,null,null)
D.c8e=new A.D("Esta pessoa n\xe3o tem marca\xe7\xf5es contigo nem entradas em eventos que organizas.",null,B.ml,null,null,null,null,null,null,null)
D.c9a=new A.D("Cancelar cobran\xe7a",null,null,null,null,null,null,null,null,null)
D.c9f=new A.D("Ativar pagamentos",null,null,null,null,null,null,null,null,null)
D.ca_=new A.D("Ver perfil",null,K.rV,null,null,null,null,null,null,null)
D.cat=new A.D("O QR deixa de funcionar e o cliente j\xe1 n\xe3o consegue pagar com ele.",null,null,null,null,null,null,null,null,null)
D.caW=new A.D("Cancelar a cobran\xe7a?",null,null,null,null,null,null,null,null,null)
D.cbd=new A.D("Continuar \xe0 espera",null,null,null,null,null,null,null,null,null)
D.cbe=new A.D("Para cobrar com QR tens de ativar os pagamentos na app (Stripe). \xc9 para l\xe1 que vai o dinheiro que recebes.",null,null,null,null,null,null,null,null,null)
D.cbB=new A.D("Cobrar",null,B.kY,null,null,null,null,null,null,null)
D.cgk=new A.D("Quem \xe9",null,B.hS,null,null,null,null,null,null,null)
D.coF=new C.wo("Uso \xfanico \xb7 s\xf3 uma pessoa pode pagar",!0,null)
D.coG=new C.wo("Verificado",!0,null)
D.acE=new C.wo("Por registar",!1,null)
D.coI=new C.wo("Sem bilhete pago",!1,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVi","cUF",()=>{var w=A.W(16)
return A.doy(A.bH(B.fa,0.5),w,null,B.t,null,null,B.x)})})()};
(a=>{a["L3a/2J/dXUGq+Wpq0/v5d2+lkUc="]=a.current})($__dart_deferred_initializers__);