((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dMA(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).h2(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMF(w,x)},
cKa(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cKa=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.jm("partner_today",y.z),$async$cKa)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.ao(o==null?C.ai:o)
while(o.t()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.p(n==null?"Evento":n)
m=A.C(J.i(q,"booking_number"))
l=A.aE(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aE(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.br(r,new A.aN5([k,n,m,l]))}}p=A.aE(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aE(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avz(r,p,o)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cKa,w)},
avz:function avz(d,e,f){this.a=d
this.b=e
this.c=f},
duy(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
g=A.p(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d4(A.p(x==null?"":x))
w=A.C(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.C(J.i(i,"status")):k
if(s){s=A.aE(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aE(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d4(A.p(p==null?"":p))
p=p==null?k:p.dM()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ao(j==null?C.ai:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.d4(A.p(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.p(l==null?"Parceiro":l)
o.push(new A.aMr(A.de(A.p(m.h(n,"at"))).dM(),l))}}return new B.TP(h,g,x,w,v,u,r,s,q,p,o)},
cK8(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cK8=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.jm("my_entries",y.z),$async$cK8)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.br(r,B.duy(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cK8,w)},
dLT(d){var x,w,v="public",u=$.P().b
u===$&&A.b()
x=u.gbw().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cLf(w)
u=u.ch
u===$&&A.b()
return u.Mj(0,"entries-"+w,C.yw).Od(new B.cLc(d),C.GV,x.$1("user_id"),v,"event_checkins").Od(new B.cLd(d),C.GV,x.$1("user_id"),v,"booking_arrivals").Od(new B.cLe(d),C.GW,x.$1("buyer_id"),v,"event_tickets").Q7(0)},
TP:function TP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cLf:function cLf(d){this.a=d},
cLc:function cLc(d){this.a=d},
cLd:function cLd(d){this.a=d},
cLe:function cLe(d){this.a=d},
dr4(){return new B.Jj(null)},
ddD(d){return C.f.aU(C.j.k(A.i0(d)),2,"0")+":"+C.f.aU(C.j.k(A.hQ(d)),2,"0")},
Jj:function Jj(d){this.a=d},
b4X:function b4X(){},
af8:function af8(d){this.a=d},
af9:function af9(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
caI:function caI(d){this.a=d},
caH:function caH(d){this.a=d},
caC:function caC(d,e){this.a=d
this.b=e},
caF:function caF(d){this.a=d},
caE:function caE(d){this.a=d},
caG:function caG(d){this.a=d},
caD:function caD(d){this.a=d},
afL:function afL(d){this.a=d},
afM:function afM(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgP:function cgP(d,e){this.a=d
this.b=e},
cgQ:function cgQ(){},
ads:function ads(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bW0:function bW0(d){this.a=d},
P8:function P8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aej:function aej(d,e){this.c=d
this.a=e},
ac8:function ac8(d,e){this.c=d
this.a=e},
ahw:function ahw(d,e){this.c=d
this.a=e},
aj7:function aj7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiT:function aiT(d,e,f){this.c=d
this.d=e
this.a=f},
aGn:function aGn(d,e){this.c=d
this.a=e},
abx:function abx(d){this.a=d},
aby:function aby(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bHB:function bHB(d){this.a=d},
bHA:function bHA(){},
bHz:function bHz(d,e){this.a=d
this.b=e},
aSL:function aSL(){},
aT6:function aT6(){},
aTb:function aTb(){},
UL:function UL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agC:function agC(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.eo$=e
_.bK$=f
_.c=_.a=null},
crM:function crM(){},
crN:function crN(d,e){this.a=d
this.b=e},
crO:function crO(d){this.a=d},
X9:function X9(d){this.a=d},
aEJ:function aEJ(d){this.a=d},
aTf:function aTf(){},
aks:function aks(){},
apK:function apK(d,e,f){this.c=d
this.a=e
this.b=f},
duo(d,e){},
a4S:function a4S(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJk:function aJk(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
cab:function cab(d){this.a=d},
caa:function caa(d,e){this.a=d
this.b=e},
aT4:function aT4(){},
dul(d,e){var x=null,w=d===D.aqD?250:0
return new B.a4V(d,w,e,new A.lq(x,x,y.J),new B.xP(x,C.Bp,x,!1,!1,C.aT,C.ji,1),$.aa())},
a4V:function a4V(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.W$=0
_.Y$=i
_.aI$=_.bu$=0},
bhU:function bhU(d){this.a=d},
bhV:function bhV(d){this.a=d},
bhW:function bhW(d){this.a=d},
bhX:function bhX(d){this.a=d},
xP:function xP(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayo:function ayo(d){this.a=d},
bAM:function bAM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAN:function bAN(){}},D,F,G,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
E=c[278]
B=a.updateHolder(c[13],B)
D=c[274]
F=c[87]
G=c[193]
H=c[276]
I=c[123]
K=c[240]
L=c[277]
M=c[275]
B.avz.prototype={}
B.TP.prototype={}
B.Jj.prototype={
ba(d,e){var x=y.E
return e.G(A.cH($.b7(),new B.b4X(),y.D,x),x)===C.dR?D.cnR:D.cnB}}
B.af8.prototype={
R(){return new B.af9()}}
B.af9.prototype={
ac(){var x=this
x.ap()
$.aA.b4$.push(x)
x.kq()
x.r=B.dLT(new B.caI(x))},
m(){var x,w,v=this
$.aA.ie(v)
x=v.w
if(x!=null)x.aN(0)
x=v.r
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yg(x)}v.a6()},
nf(d){if(d===C.et)this.kq()},
Dl(d){return this.b7L(d)},
kq(){return this.Dl(!1)},
b7L(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Dl=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.bzb:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cK8(),$async$Dl)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.caC(u,s))
if(!d||s==null){x=1
break}for(o=J.ao(s);o.t();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null,null)
p.a2(new A.bF(o,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Dl,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDk(),q=u.d,p=y.p
q=A.a([new B.P8("QR code",C.qA,!q,new B.caF(u),t),new B.P8("Scannear",C.vz,q,new B.caG(u),t)],p)
if(u.d)p=D.bfj
else{x=A.a([D.ckL,C.R,D.ajt,C.bN,D.cli,C.as],p)
w=s==null
if(w&&!u.f)x.push(M.a8E)
else if(w)x.push(new B.ahw(r,t))
else{w=J.a7(s)
if(w.gZ(s))x.push(D.bLq)
else{v=A.a([],p)
for(w=w.gX(s);w.t();)C.e.n(v,A.a([D.qb,new B.aGn(w.gE(w),t)],p))
v.push(D.qb)
C.e.n(x,v)}}p=x}return new B.ads(r,q,p,t)}}
B.afL.prototype={
R(){return new B.afM()}}
B.afM.prototype={
ac(){this.ap()
$.aA.b4$.push(this)
this.kq()},
m(){$.aA.ie(this)
this.a6()},
nf(d){if(d===C.et)this.kq()},
kq(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kq=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cKa(),$async$kq)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cgP(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kq,w)},
QT(){var x=0,w=A.n(y.H),v=this,u
var $async$QT=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ad(u).ak("/cobrar",null,y.X),$async$QT)
case 2:if(v.c!=null)v.kq()
return A.l(null,w)}})
return A.m($async$QT,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDk(),k=y.p,j=A.a([new B.P8("Scannear",C.vz,!0,new B.cgQ(),n),new B.P8("Cobrar",C.nX,!1,o.gaUf(),n)],k),i=A.a([D.cmy,C.R,new B.UL(290,!1,l,n),C.bN,D.clj,C.as],k),h=m==null
if(h&&!o.e)i.push(H.a8B)
else if(h)i.push(new B.ahw(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bLa)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.p(q)+" pessoas")
r=C.e.a0(r," \xb7 ")
q=t[3]
if(q!=null){t=t[0]
q=A.p(q)
q=t>0?""+t+" de "+q+" chegaram":"0 de "+q
p=q
q=t
t=p}else{t=t[0]
q=t===1?"1 chegou":""+t+" chegaram"
p=q
q=t
t=p}C.e.n(h,A.a([D.qb,new B.aj7(s,r,t,q>0,n,n)],k))}h.push(D.qb)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aj7("Cobrado hoje",k,n,!1,F.cJv(m.b),n))
h.push(D.qb)
C.e.n(i,h)}return new B.ads(l,j,i,n)}}
B.ads.prototype={
u(d){var x=null,w=C.D4.C(0,new A.a3(0,A.aO(d,C.b6,y.w).w.r.b,0,0)),v=A.a([new A.cX(C.bc,x,x,A.pX(C.lF,new B.bW0(d),"Voltar"),x),C.R,D.ccr,C.aB,A.e2(C.be,this.d,C.r,C.bk,8,8),C.aB],y.p)
C.e.n(v,this.e)
return A.cQ(x,C.by,A.bA(!0,A.B5(A.d5(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.P8.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.b9(w,!0,w,A.fF(!1,C.aG,!0,w,A.eR(!1,w,!0,A.aH(new A.S(C.bQ,A.O(A.a([A.b5(x.d,u,w,w,16),C.bh,A.h(x.c,w,w,w,w,A.aJ(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.v,C.h,C.J,0,w),w),38,w),C.ab,!0,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ab,w,w,C.cS),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a3,w)}}
B.aej.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x,x)}}
B.ac8.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aI,x,x,x)}}
B.ahw.prototype={
u(d){var x=null
return new A.S(C.qi,A.z(A.a([D.cbo,A.cA(C.tm,x,x,this.c,x,x)],y.p),C.v,C.h,C.l),x)}}
B.aj7.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u,u))
t=A.a([A.a4(A.z(s,C.F,C.h,C.l),1),C.af],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cz:C.dV
w=A.W(999)
t.push(A.y(u,A.h(s,u,u,u,u,A.aJ(u,u,r?C.cY:C.cp,u,u,u,u,u,u,u,u,12,u,u,C.G,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(x,u,u,w,u,u,C.x),u,u,u,C.dr,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u,u))
return new A.S(C.cm,A.O(t,C.v,C.h,C.l,0,u),u)}}
B.aiT.prototype={
u(d){var x=null,w=this.d,v=w?C.cz:C.dV,u=A.W(999)
return A.y(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?C.cY:C.cp,x,x,x,x,x,x,x,x,12,x,x,C.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.x),x,x,x,C.dr,x,x,x)}}
B.aGn.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dv[A.fg(l)-1]+", "+A.ay(l)+" "+C.bg[A.an(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.p(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a0(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.X("Entrou \xe0s "+B.ddD(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.ddD(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSJ
else if(x)k=D.bRO
else k=m.f?D.bRg:D.bSn
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n,n)],k)
if(u.length!==0)x.push(new A.S(L.N9,A.h(u,n,n,n,n,C.L,n,n,n),n))
return new A.S(C.cm,A.O(A.a([A.a4(A.z(x,C.F,C.h,C.l),1),C.af,new B.aiT(o,q,n)],k),C.F,C.h,C.l,0,n),n)}}
B.abx.prototype={
R(){return new B.aby(new A.ac(Date.now(),0,!1),C.nl)}}
B.aby.prototype={
ac(){var x=this
x.ap()
$.aA.b4$.push(x)
x.kq()
x.as=A.u6(C.fU,new B.bHB(x))},
m(){var x,w=this
$.aA.ie(w)
x=w.Q
if(x!=null)x.aN(0)
x=w.as
if(x!=null)x.aN(0)
w.a6()},
nf(d){var x
if(d===C.et)this.kq()
else if(d===C.mI){x=this.Q
if(x!=null)x.aN(0)}},
kq(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kq=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aN(0)
x=3
return A.d(A.aV4(),$async$kq)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bHz(u,t))
s=t==null?null:t.b
if(s==null)s=C.nn
u.Q=A.dm(s,u.gDk())
case 1:return A.l(v,w)}})
return A.m($async$kq,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().G($.b7(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.B(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.B(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cA(new A.ac(Date.now(),0,!1)).a
v=x<0?0:C.k.eD(C.j.aP(x,1000)/1000)
u=C.k.ah(C.j.aP(x,1000)/C.j.aP(o.z.a,1000),0,1)
x=A.W(16)
t=A.bB(C.fc,0.5)
s=A.W(16)
r=A.bB(C.fc,0.5)
k=!k
if(k)q=A.bpW(C.t,A.kf("/q/"+l.a),C.GY,C.GZ,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXX:A.bM(A.z(A.a([C.aDT,C.aF,D.ccx,A.cA(C.tm,n,n,o.gDk(),n,n)],y.p),C.v,C.h,C.J),n,n)
p=y.p
s=A.a([A.y(n,A.aH(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.x),n,n,n,C.d_,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ad,A.y(C.bc,A.ari(C.K,A.y(n,n,C.r,n,n,new A.I(C.uj,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.fc,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aF,A.b9(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a3,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.cj(k,32,r,!1,!0,n),C.af,new A.d8(1,C.b3,A.z(A.a([A.h(w,n,n,n,n,C.a9,n,n,n),D.c8y],p),C.F,C.h,C.l),n)],p),C.v,C.bS,C.l,0,n))
return A.y(n,A.z(s,C.v,C.h,C.l),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.x),n,n,n,C.d_,n,n,n)}}
B.aSL.prototype={}
B.aT6.prototype={}
B.aTb.prototype={}
B.UL.prototype={
R(){return new B.agC(B.dul(D.aqC,D.bs8),null,null)}}
B.agC.prototype={
gKH(){var x,w=this,v=w.e
if(v===$){x=A.cJ(null,E.MU,null,1,null,w)
w.e!==$&&A.aZ()
w.e=x
v=x}return v},
ac(){this.ap()
$.aA.b4$.push(this)},
bT(){var x,w,v=this
v.dz()
x=v.c
x.toString
if(A.aO(x,null,y.w).w.ax)v.gKH().d3(0)
else{x=v.gKH()
w=x.r
if(!(w!=null&&w.a!=null))x.acY(0,!0)}},
nf(d){if(this.f)return
if(d===C.et)this.d.ka(0)
else if(d===C.mI)this.d.d3(0)},
m(){var x=this
$.aA.ie(x)
x.gKH().m()
x.d.m()
x.aPT()},
DU(d){return this.b9x(d)},
b9x(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DU=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dMA(t)
if(p==null){s=u.c.O(y.q).f
s.azZ()
s.a2(D.bZg)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d3(0),$async$DU)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ad(r).ak(m,null,y.X),$async$DU)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.ka(0),$async$DU)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DU,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fT(A.W(16),A.aH(new A.bC(C.ax,w,C.e6,C.y,A.a([C.jx,new B.a4S(t,x.gb9w(),new B.crM(),w),A.bM(A.aH(new A.bC(C.ax,w,C.aD,C.y,A.a([D.bPW,A.f6(x.gKH(),new B.crN(x,u),w)],s),w),u,u),w,w),A.cb(16,A.bM(A.y(w,D.ccc,C.r,w,w,new A.I(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dr,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bb)],s)
if(x.a.d)s.push(new A.lp(t,new B.crO(x),w,w,y.n))
return A.z(s,C.E,C.h,C.l)}}
B.X9.prototype={
u(d){return D.apj}}
B.aEJ.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aD(),m=A.bd()
m.r=C.t.gv(0)
m.b=C.bL
m.c=4
m.d=C.hb
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cD(n,C.aQ,o,o,A.a([],v))
u.aC(new A.eZ(2,44))
u.aC(new A.cS(2,16))
u.Av(D.bJy,D.yo)
u.aC(new A.cS(44,2))
d.dU(u,m)
u=new A.cD(n,C.aQ,o,o,A.a([],v))
t=x-44
u.aC(new A.eZ(t,2))
s=x-16
u.aC(new A.cS(s,2))
r=x-2
u.Av(new A.L(r,16),D.yo)
u.aC(new A.cS(r,44))
d.dU(u,m)
u=new A.cD(n,C.aQ,o,o,A.a([],v))
q=w-44
u.aC(new A.eZ(r,q))
p=w-16
u.aC(new A.cS(r,p))
r=w-2
u.Av(new A.L(s,r),D.yo)
u.aC(new A.cS(t,r))
d.dU(u,m)
v=new A.cD(n,C.aQ,o,o,A.a([],v))
v.aC(new A.eZ(44,r))
v.aC(new A.cS(16,r))
v.Av(new A.L(2,p),D.yo)
v.aC(new A.cS(2,q))
d.dU(v,m)},
e_(d){return!1}}
B.aTf.prototype={}
B.aks.prototype={
m(){var x=this,w=x.bK$
if(w!=null)w.a1(0,x.ghG())
x.bK$=null
x.a6()},
bW(){this.cG()
this.d4()
this.hH()}}
B.apK.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4S.prototype={
R(){return new B.aJk()}}
B.aJk.prototype={
b8v(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lp(x,new B.cab(this),null,null,y.n)},
Yh(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$Yh=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hc(t,A.u(t).i("hc<1>")).Yu(s.d,!1,B.dMc())
x=2
return A.d(u.ka(0),$async$Yh)
case 2:return A.l(null,w)}})
return A.m($async$Yh,w)},
MZ(){var x=0,w=A.n(y.H),v=this,u
var $async$MZ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aN(0)
x=2
return A.d(y.x.b(u)?u:A.ei(u,y.H),$async$MZ)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d3(0),$async$MZ)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$MZ,w)},
ac(){var x,w=this
w.ap()
x=w.a.c
w.d!==$&&A.bv()
w.d=x
w.Yh()},
m(){this.a6()
this.MZ()},
nf(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xU}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.ka(0)
break
case 2:w.d3(0)
break}}}
B.aT4.prototype={}
B.a4V.prototype={
biU(){var x=this
x.CW=$.HW().gaw2().Yu(new B.bhU(x),!1,new B.bhV(x))
x.cx=$.HW().gaDr().ln(new B.bhW(x))
x.cy=$.HW().gaEw().ln(new B.bhX(x))},
b8M(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aN(0)
w=x.cx
if(w!=null)w.aN(0)
w=x.cy
if(w!=null)w.aN(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.brx(!1,w.r===C.ji?C.ji:C.abf))
return!0},
ka(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$ka=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xO(C.xT,A.xN(null,null,C.xT.geT(0))))
if(s.a.e){x=1
break}r=C.Bp
q=new B.bAM(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.biU()
x=7
return A.d($.HW().lz(0,q),$async$ka)
case 7:p=f
if(!s.db)s.sv(0,s.a.brR(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tw){o=m
if(!s.db)s.sv(0,s.a.brT(C.Bp,o,!0,!1,C.aT,C.ji,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ka,w)},
d3(d){var x=0,w=A.n(y.H),v=this
var $async$d3=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b8M()?2:3
break
case 2:x=4
return A.d($.HW().d3(0),$async$d3)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d3,w)},
tT(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tT=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.al(A.xO(C.a1r,A.xN(null,null,C.a1r.geT(0))))
if(u.db)A.al(A.xO(C.xT,A.xN(null,null,C.xT.geT(0))))
if(!t.e){x=1
break}if(t.r===C.ji){x=1
break}x=3
return A.d($.HW().tT(),$async$tT)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tT,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aW(0)
u.fW()
x=3
return A.d($.HW().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xP.prototype={
Mx(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xP(w,v,f,u,t,s,r,k==null?x.w:k)},
brx(d,e){var x=null
return this.Mx(x,x,x,x,d,x,e,x)},
brR(d,e,f,g,h,i){return this.Mx(d,e,null,f,g,h,i,null)},
brT(d,e,f,g,h,i,j){return this.Mx(null,d,e,f,g,h,i,j)},
bri(d){var x=null
return this.Mx(x,x,x,x,x,x,x,d)},
brd(d){var x=null
return this.Mx(x,x,x,x,x,x,d,x)}}
B.ayo.prototype={
u(d){var x=null,w=A.a([D.bKT],y.p)
w.push(A.h(C.k1.geT(0),x,x,x,x,C.aa_,x,x,x))
return A.kM(A.bM(A.z(w,C.v,C.h,C.J),x,x),C.ao,!0)}}
B.bAM.prototype={
a_h(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bAN(),w),w.i("aV.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:B})","F<~>(mD)","X9(N,tw,e?)","ck(N,xP,e?)","e(N,xP,e?)","~(K,c4)"])
B.cLf.prototype={
$1(d){return new I.Fv(K.yj,d,this.a)},
$S:1370}
B.cLc.prototype={
$1(d){return this.a.$0()},
$S:136}
B.cLd.prototype={
$1(d){return this.a.$0()},
$S:136}
B.cLe.prototype={
$1(d){return this.a.$0()},
$S:136}
B.b4X.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:109}
B.caI.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aN(0)
x.w=A.dm(C.fr,new B.caH(x))},
$S:0}
B.caH.prototype={
$0(){return this.a.Dl(!0)},
$S:0}
B.caC.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.caF.prototype={
$0(){var x=this.a
return x.p(new B.caE(x))},
$S:0}
B.caE.prototype={
$0(){return this.a.d=!1},
$S:0}
B.caG.prototype={
$0(){var x=this.a
return x.p(new B.caD(x))},
$S:0}
B.caD.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cgP.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cgQ.prototype={
$0(){},
$S:0}
B.bW0.prototype={
$0(){return A.am(this.a,!1).ia()},
$S:0}
B.bHB.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bHA())},
$S:65}
B.bHA.prototype={
$0(){},
$S:0}
B.bHz.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ac(w,0,!1).el(v)
u.z=v>3e7?x:C.nl}},
$S:0}
B.crM.prototype={
$3(d,e,f){return D.ckS},
$S:z+3}
B.crN.prototype={
$2(d,e){var x=null,w=this.a.gKH().x
w===$&&A.b()
return A.cb(x,A.y(x,x,C.r,C.uj,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:273}
B.crO.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.ji)return C.ap
x=t===C.abg
t=x?C.cz:C.dV
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.N7,A.b9(u,!0,u,A.eR(!1,u,!0,A.y(u,A.O(A.a([D.azB,A.y(u,A.h(v,u,u,u,u,A.aJ(u,u,x?C.cY:C.cp,u,u,u,u,u,u,u,u,12,u,u,C.G,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.x),u,u,u,C.dr,u,u,u)],y.p),C.v,C.h,C.l,0,u),C.r,u,G.hX,D.ag3,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,this.a.d.gbDe(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a3,u),u)},
$S:z+4}
B.cab.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.apk}x=e.c
if(x!=null){w=new B.ayo(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kT(new B.caa(this.a,e))},
$S:z+5}
B.caa.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b8v(u,e)
v.a.toString
x=u.f
v=A.ai(1/0,e.a,e.b)
u=A.ai(1/0,e.c,e.d)
w=A.x_(A.Gd(A.JC(C.K,A.aH($.HW().aw7(),x.b,x.a),C.r,C.bG),new A.af(v,u)),C.y,null)
return w},
$S:114}
B.bhU.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1371}
B.bhV.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xi(d)},
$S:70}
B.bhW.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.brd(d))},
$S:1372}
B.bhX.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bri(d))},
$S:119}
B.bAN.prototype={
$1(d){return d.c},
$S:1373};(function aliases(){var x=B.aks.prototype
x.aPT=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af9.prototype,"gDk",0,0,null,["$1$announce","$0"],["Dl","kq"],1,0,0)
var t
w(t=B.afM.prototype,"gDk","kq",0)
w(t,"gaUf","QT",0)
w(B.aby.prototype,"gDk","kq",0)
v(B.agC.prototype,"gb9w","DU",2)
u(B,"dMc","duo",6)
w(t=B.a4V.prototype,"gbDe","tT",0)
w(t,"geF","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.K,[B.avz,B.TP,B.xP,B.bAM])
v(A.bx,[B.cLf,B.cLc,B.cLd,B.cLe,B.b4X,B.bHB,B.crM,B.crO,B.cab,B.bhU,B.bhV,B.bhW,B.bhX,B.bAN])
u(B.Jj,A.ey)
v(A.G,[B.af8,B.afL,B.UL,B.a4S])
v(A.Z,[B.aT6,B.aTb,B.aTf,B.aT4])
u(B.af9,B.aT6)
v(A.bQ,[B.caI,B.caH,B.caC,B.caF,B.caE,B.caG,B.caD,B.cgP,B.cgQ,B.bW0,B.bHA,B.bHz])
u(B.afM,B.aTb)
v(A.M,[B.ads,B.P8,B.aej,B.ac8,B.ahw,B.aj7,B.aiT,B.aGn,B.X9,B.ayo])
u(B.abx,A.dB)
u(B.aSL,A.dv)
u(B.aby,B.aSL)
u(B.aks,B.aTf)
u(B.agC,B.aks)
v(A.cL,[B.crN,B.caa])
u(B.aEJ,A.qv)
u(B.apK,A.f_)
u(B.aJk,B.aT4)
u(B.a4V,A.d0)
x(B.aSL,A.en)
x(B.aT6,A.en)
x(B.aTb,A.en)
x(B.aTf,A.en)
w(B.aks,A.iJ)
x(B.aT4,A.en)})()
A.bu(b.typeUniverse,JSON.parse('{"af8":{"G":[],"e":[],"f":[]},"afL":{"G":[],"e":[],"f":[]},"abx":{"G":[],"e":[],"f":[]},"Jj":{"G":[],"e":[],"f":[]},"af9":{"Z":["af8"],"en":[]},"afM":{"Z":["afL"],"en":[]},"ads":{"M":[],"e":[],"f":[]},"P8":{"M":[],"e":[],"f":[]},"aej":{"M":[],"e":[],"f":[]},"ac8":{"M":[],"e":[],"f":[]},"ahw":{"M":[],"e":[],"f":[]},"aj7":{"M":[],"e":[],"f":[]},"aiT":{"M":[],"e":[],"f":[]},"aGn":{"M":[],"e":[],"f":[]},"aby":{"Z":["abx"],"en":[]},"UL":{"G":[],"e":[],"f":[]},"X9":{"M":[],"e":[],"f":[]},"agC":{"Z":["UL"],"en":[]},"aEJ":{"aU":[]},"a4S":{"G":[],"e":[],"f":[]},"aJk":{"Z":["a4S"],"en":[]},"a4V":{"d0":["xP"],"aU":[]},"ayo":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.x
return{D:x("cK"),x:x("F<~>"),k:x("r<kL>"),G:x("r<TP>"),v:x("r<fG>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dh"),Y:x("TP"),N:x("c"),n:x("lp<xP>"),J:x("lq<mD>"),q:x("dr"),z:x("@"),r:x("t<TP>?"),g:x("t<@>?"),X:x("K?"),t:x("avz?"),E:x("ru?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afi=new A.dN(C.tT,C.aa,C.tT,C.aa)
D.ag3=new A.I(null,null,D.afi,null,null,null,C.x)
D.cph=new B.aiT("S\xf3 funciona na tua conta",!0,null)
D.ajt=new A.f1(C.K,null,null,D.cph,null)
D.c4W=new A.Q(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.chj=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4W,C.a5,null,null,null,null,null,null,null)
D.bLK=new A.S(C.hx,D.chj,null)
D.ajB=new A.f1(C.K,null,null,D.bLK,null)
D.apj=new A.pi(C.cp,!0,D.ajB,null)
D.apk=new A.pi(C.ao,!0,null,null)
D.aqC=new B.apK(0,0,"noDuplicates")
D.aqD=new B.apK(1,1,"normal")
D.qb=new A.jZ(0.5,0.5,null,null,C.fc,null)
D.cbY=new A.D("Lanterna",null,C.ce,null,null,null,null,null,null,null,null)
D.azB=new A.bK(1,C.at,D.cbY,null)
D.cmx=new B.aej("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bQA=new B.UL(420,!0,null,null)
D.bfj=x([D.cmx,C.R,D.bQA],y.p)
D.bs8=x([C.tP],y.k)
D.cpX=x([],y.k)
D.bzb=x([],y.G)
D.bJy=new A.L(16,2)
D.aCv=new A.aY(57911,"MaterialIcons",null,!1)
D.aD0=new A.b8(D.aCv,null,C.t,null,null,null)
D.bKT=new A.S(C.N4,D.aD0,null)
D.c9e=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.ce,null,null,null,null,null,null,null,null)
D.bLa=new A.S(C.fV,D.c9e,null)
D.chb=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.ce,null,null,null,null,null,null,null,null)
D.bLq=new A.S(C.qi,D.chb,null)
D.cly=new B.aEJ(null)
D.aqc=new A.uU(D.cly,null,C.aT,null,null)
D.bPW=new A.eG(0,0,0,0,null,null,D.aqc,null)
D.yo=new A.b6(14,14)
D.bRg=new A.X("Bilhete",!1)
D.bRO=new A.X("Organizas",!1)
D.bSn=new A.X("Por entrar",!1)
D.bSJ=new A.X("Sem bilhete pago",!1)
D.bXX=new A.iz(186,186,8,C.dN,0,null)
D.c8K=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.bZg=new A.bF(D.c8K,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c8y=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null,null)
D.cbo=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.ce,C.a5,null,null,null,null,null,null,null)
D.ccc=new A.D("\xc0 procura de um QR\u2026",null,C.hQ,null,null,null,null,null,null,null,null)
D.ccr=new A.D("Entrada",null,C.hR,null,null,null,null,null,null,null,null)
D.ccx=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null,null)
D.ckL=new B.abx(null)
D.ckS=new B.X9(null)
D.cli=new B.ac8("D\xc1 ENTRADA EM",null)
D.clj=new B.ac8("HOJE",null)
D.cmy=new B.aej("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cnB=new B.af8(null)
D.cnR=new B.afL(null)})()};
(a=>{a["odvbdBDdgEHGZDZazIJwJQS7nJ8="]=a.current})($__dart_deferred_initializers__);