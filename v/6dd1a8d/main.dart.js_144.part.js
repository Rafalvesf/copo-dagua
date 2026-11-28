((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dMv(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).h2(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aME(w,x)},
cK6(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cK6=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.jm("partner_today",y.z),$async$cK6)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.ap(o==null?C.ak:o)
while(o.t()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.q(n==null?"Evento":n)
m=A.C(J.i(q,"booking_number"))
l=A.aF(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aF(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.br(r,new A.aN4([k,n,m,l]))}}p=A.aF(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aF(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avy(r,p,o)
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
return A.m($async$cK6,w)},
avy:function avy(d,e,f){this.a=d
this.b=e
this.c=f},
duu(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d4(A.q(x==null?"":x))
w=A.C(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.C(J.i(i,"status")):k
if(s){s=A.aF(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aF(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d4(A.q(p==null?"":p))
p=p==null?k:p.dM()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ap(j==null?C.ak:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.d4(A.q(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aMq(A.dd(A.q(m.h(n,"at"))).dM(),l))}}return new B.TP(h,g,x,w,v,u,r,s,q,p,o)},
cK4(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cK4=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.jm("my_entries",y.z),$async$cK4)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ap(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.br(r,B.duu(q))}v=r
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
return A.m($async$cK4,w)},
dLO(d){var x,w,v="public",u=$.P().b
u===$&&A.b()
x=u.gbw().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cLb(w)
u=u.ch
u===$&&A.b()
return u.Mj(0,"entries-"+w,C.yw).Od(new B.cL8(d),C.GV,x.$1("user_id"),v,"event_checkins").Od(new B.cL9(d),C.GV,x.$1("user_id"),v,"booking_arrivals").Od(new B.cLa(d),C.GW,x.$1("buyer_id"),v,"event_tickets").Q7(0)},
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
cLb:function cLb(d){this.a=d},
cL8:function cL8(d){this.a=d},
cL9:function cL9(d){this.a=d},
cLa:function cLa(d){this.a=d},
dr0(){return new B.Jj(null)},
ddz(d){return C.f.aU(C.j.k(A.i0(d)),2,"0")+":"+C.f.aU(C.j.k(A.hQ(d)),2,"0")},
Jj:function Jj(d){this.a=d},
b4W:function b4W(){},
af8:function af8(d){this.a=d},
af9:function af9(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
caG:function caG(d){this.a=d},
caF:function caF(d){this.a=d},
caA:function caA(d,e){this.a=d
this.b=e},
caD:function caD(d){this.a=d},
caC:function caC(d){this.a=d},
caE:function caE(d){this.a=d},
caB:function caB(d){this.a=d},
afK:function afK(d){this.a=d},
afL:function afL(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgN:function cgN(d,e){this.a=d
this.b=e},
cgO:function cgO(){},
ads:function ads(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVZ:function bVZ(d){this.a=d},
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
ahv:function ahv(d,e){this.c=d
this.a=e},
aj6:function aj6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiS:function aiS(d,e,f){this.c=d
this.d=e
this.a=f},
aGm:function aGm(d,e){this.c=d
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
bHz:function bHz(d){this.a=d},
bHy:function bHy(){},
bHx:function bHx(d,e){this.a=d
this.b=e},
aSK:function aSK(){},
aT5:function aT5(){},
aTa:function aTa(){},
UL:function UL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agB:function agB(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.eo$=e
_.bK$=f
_.c=_.a=null},
crK:function crK(){},
crL:function crL(d,e){this.a=d
this.b=e},
crM:function crM(d){this.a=d},
X9:function X9(d){this.a=d},
aEI:function aEI(d){this.a=d},
aTe:function aTe(){},
akr:function akr(){},
apJ:function apJ(d,e,f){this.c=d
this.a=e
this.b=f},
duk(d,e){},
a4S:function a4S(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJj:function aJj(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
ca9:function ca9(d){this.a=d},
ca8:function ca8(d,e){this.a=d
this.b=e},
aT3:function aT3(){},
duh(d,e){var x=null,w=d===D.aqD?250:0
return new B.a4V(d,w,e,new A.lq(x,x,y.J),new B.xO(x,C.Bp,x,!1,!1,C.aT,C.ji,1),$.aa())},
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
bhT:function bhT(d){this.a=d},
bhU:function bhU(d){this.a=d},
bhV:function bhV(d){this.a=d},
bhW:function bhW(d){this.a=d},
xO:function xO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayn:function ayn(d){this.a=d},
bAK:function bAK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAL:function bAL(){}},D,F,G,H,I,K,L,M
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
B.avy.prototype={}
B.TP.prototype={}
B.Jj.prototype={
ba(d,e){var x=y.E
return e.G(A.cH($.b7(),new B.b4W(),y.D,x),x)===C.dQ?D.cnO:D.cny}}
B.af8.prototype={
R(){return new B.af9()}}
B.af9.prototype={
ac(){var x=this
x.ap()
$.aA.b4$.push(x)
x.kq()
x.r=B.dLO(new B.caG(x))},
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
o=J.ap(o==null?D.bz8:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cK4(),$async$Dl)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.caA(u,s))
if(!d||s==null){x=1
break}for(o=J.ap(s);o.t();){t=o.gE(o)
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
q=A.a([new B.P8("QR code",C.qA,!q,new B.caD(u),t),new B.P8("Scannear",C.vz,q,new B.caE(u),t)],p)
if(u.d)p=D.bfg
else{x=A.a([D.ckI,C.R,D.ajt,C.bN,D.clf,C.as],p)
w=s==null
if(w&&!u.f)x.push(M.a8E)
else if(w)x.push(new B.ahv(r,t))
else{w=J.a7(s)
if(w.gZ(s))x.push(D.bLn)
else{v=A.a([],p)
for(w=w.gX(s);w.t();)C.e.n(v,A.a([D.qa,new B.aGm(w.gE(w),t)],p))
v.push(D.qa)
C.e.n(x,v)}}p=x}return new B.ads(r,q,p,t)}}
B.afK.prototype={
R(){return new B.afL()}}
B.afL.prototype={
ac(){this.ap()
$.aA.b4$.push(this)
this.kq()},
m(){$.aA.ie(this)
this.a6()},
nf(d){if(d===C.et)this.kq()},
kq(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kq=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cK6(),$async$kq)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cgN(u,t))
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
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDk(),k=y.p,j=A.a([new B.P8("Scannear",C.vz,!0,new B.cgO(),n),new B.P8("Cobrar",C.nW,!1,o.gaUf(),n)],k),i=A.a([D.cmv,C.R,new B.UL(290,!1,l,n),C.bN,D.clg,C.as],k),h=m==null
if(h&&!o.e)i.push(H.a8B)
else if(h)i.push(new B.ahv(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bL7)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.q(q)+" pessoas")
r=C.e.a1(r," \xb7 ")
q=t[3]
if(q!=null){t=t[0]
q=A.q(q)
q=t>0?""+t+" de "+q+" chegaram":"0 de "+q
p=q
q=t
t=p}else{t=t[0]
q=t===1?"1 chegou":""+t+" chegaram"
p=q
q=t
t=p}C.e.n(h,A.a([D.qa,new B.aj6(s,r,t,q>0,n,n)],k))}h.push(D.qa)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aj6("Cobrado hoje",k,n,!1,F.cJr(m.b),n))
h.push(D.qa)
C.e.n(i,h)}return new B.ads(l,j,i,n)}}
B.ads.prototype={
u(d){var x=null,w=C.D4.C(0,new A.a3(0,A.aO(d,C.b6,y.w).w.r.b,0,0)),v=A.a([new A.cX(C.bc,x,x,A.pX(C.lF,new B.bVZ(d),"Voltar"),x),C.R,D.cco,C.aB,A.e2(C.be,this.d,C.r,C.bj,8,8),C.aB],y.p)
C.e.n(v,this.e)
return A.cQ(x,C.by,A.bB(!0,A.B5(A.d6(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.P8.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.b9(w,!0,w,A.fF(!1,C.aG,!0,w,A.eR(!1,w,!0,A.aH(new A.S(C.bQ,A.O(A.a([A.b5(x.d,u,w,w,16),C.bh,A.h(x.c,w,w,w,w,A.aJ(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.v,C.h,C.J,0,w),w),38,w),C.ab,!0,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ab,w,w,C.cR),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a3,w)}}
B.aej.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x,x)}}
B.ac8.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aI,x,x,x)}}
B.ahv.prototype={
u(d){var x=null
return new A.S(C.qh,A.z(A.a([D.cbl,A.cA(C.tm,x,x,this.c,x,x)],y.p),C.v,C.h,C.l),x)}}
B.aj6.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u,u))
t=A.a([A.a4(A.z(s,C.G,C.h,C.l),1),C.af],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cz:C.dU
w=A.W(999)
t.push(A.y(u,A.h(s,u,u,u,u,A.aJ(u,u,r?C.cY:C.cp,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.J(x,u,u,w,u,u,C.x),u,u,u,C.dr,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u,u))
return new A.S(C.cm,A.O(t,C.v,C.h,C.l,0,u),u)}}
B.aiS.prototype={
u(d){var x=null,w=this.d,v=w?C.cz:C.dU,u=A.W(999)
return A.y(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?C.cY:C.cp,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.J(v,x,x,u,x,x,C.x),x,x,x,C.dr,x,x,x)}}
B.aGm.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dv[A.fg(l)-1]+", "+A.ay(l)+" "+C.bg[A.an(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.q(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a1(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.Z("Entrou \xe0s "+B.ddz(k),!0)
else if(t!=null){k=new A.Z("Chegou \xe0s "+B.ddz(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSG
else if(x)k=D.bRL
else k=m.f?D.bRd:D.bSk
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n,n)],k)
if(u.length!==0)x.push(new A.S(L.N9,A.h(u,n,n,n,n,C.L,n,n,n),n))
return new A.S(C.cm,A.O(A.a([A.a4(A.z(x,C.G,C.h,C.l),1),C.af,new B.aiS(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abx.prototype={
R(){return new B.aby(new A.ac(Date.now(),0,!1),C.nl)}}
B.aby.prototype={
ac(){var x=this
x.ap()
$.aA.b4$.push(x)
x.kq()
x.as=A.u6(C.fU,new B.bHz(x))},
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
return A.d(A.aV3(),$async$kq)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bHx(u,t))
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
t=A.bA(C.fc,0.5)
s=A.W(16)
r=A.bA(C.fc,0.5)
k=!k
if(k)q=A.bpU(C.t,A.kf("/q/"+l.a),C.GY,C.GZ,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXU:A.bM(A.z(A.a([C.aDR,C.aF,D.ccu,A.cA(C.tm,n,n,o.gDk(),n,n)],y.p),C.v,C.h,C.J),n,n)
p=y.p
s=A.a([A.y(n,A.aH(q,186,186),C.r,n,n,new A.J(C.t,n,r,s,n,n,C.x),n,n,n,C.d_,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ad,A.y(C.bc,A.arh(C.K,A.y(n,n,C.r,n,n,new A.J(C.uj,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.J(C.fc,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aF,A.b9(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a3,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.cj(k,32,r,!1,!0,n),C.af,new A.de(1,C.b4,A.z(A.a([A.h(w,n,n,n,n,C.a9,n,n,n),D.c8v],p),C.G,C.h,C.l),n)],p),C.v,C.bS,C.l,0,n))
return A.y(n,A.z(s,C.v,C.h,C.l),C.r,n,n,new A.J(C.t,n,t,x,n,n,C.x),n,n,n,C.d_,n,n,n)}}
B.aSK.prototype={}
B.aT5.prototype={}
B.aTa.prototype={}
B.UL.prototype={
R(){return new B.agB(B.duh(D.aqC,D.bs5),null,null)}}
B.agB.prototype={
gKH(){var x,w=this,v=w.e
if(v===$){x=A.cJ(null,E.MU,null,1,null,w)
w.e!==$&&A.aY()
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
break}p=B.dMv(t)
if(p==null){s=u.c.O(y.q).f
s.azZ()
s.a2(D.bZd)
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
s=A.a([A.fT(A.W(16),A.aH(new A.bC(C.ax,w,C.e6,C.y,A.a([C.jx,new B.a4S(t,x.gb9w(),new B.crK(),w),A.bM(A.aH(new A.bC(C.ax,w,C.aD,C.y,A.a([D.bPT,A.f6(x.gKH(),new B.crL(x,u),w)],s),w),u,u),w,w),A.cb(16,A.bM(A.y(w,D.cc9,C.r,w,w,new A.J(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dr,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bb)],s)
if(x.a.d)s.push(new A.lp(t,new B.crM(x),w,w,y.n))
return A.z(s,C.E,C.h,C.l)}}
B.X9.prototype={
u(d){return D.apj}}
B.aEI.prototype={
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
u.Av(D.bJv,D.yo)
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
B.aTe.prototype={}
B.akr.prototype={
m(){var x=this,w=x.bK$
if(w!=null)w.a0(0,x.ghG())
x.bK$=null
x.a6()},
bW(){this.cG()
this.d4()
this.hH()}}
B.apJ.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4S.prototype={
R(){return new B.aJj()}}
B.aJj.prototype={
b8v(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lp(x,new B.ca9(this),null,null,y.n)},
Yh(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$Yh=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hb(t,A.u(t).i("hb<1>")).Yu(s.d,!1,B.dM7())
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
B.aT3.prototype={}
B.a4V.prototype={
biU(){var x=this
x.CW=$.HW().gaw2().Yu(new B.bhT(x),!1,new B.bhU(x))
x.cx=$.HW().gaDr().ln(new B.bhV(x))
x.cy=$.HW().gaEw().ln(new B.bhW(x))},
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
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xN(C.xT,A.xM(null,null,C.xT.geT(0))))
if(s.a.e){x=1
break}r=C.Bp
q=new B.bAK(r,null,s.y,s.z,s.as,!1,!1,!1)
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
if(!t.d)A.al(A.xN(C.a1r,A.xM(null,null,C.a1r.geT(0))))
if(u.db)A.al(A.xN(C.xT,A.xM(null,null,C.xT.geT(0))))
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
B.xO.prototype={
Mx(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xO(w,v,f,u,t,s,r,k==null?x.w:k)},
brx(d,e){var x=null
return this.Mx(x,x,x,x,d,x,e,x)},
brR(d,e,f,g,h,i){return this.Mx(d,e,null,f,g,h,i,null)},
brT(d,e,f,g,h,i,j){return this.Mx(null,d,e,f,g,h,i,j)},
bri(d){var x=null
return this.Mx(x,x,x,x,x,x,x,d)},
brd(d){var x=null
return this.Mx(x,x,x,x,x,x,d,x)}}
B.ayn.prototype={
u(d){var x=null,w=A.a([D.bKQ],y.p)
w.push(A.h(C.k1.geT(0),x,x,x,x,C.aa_,x,x,x))
return A.kM(A.bM(A.z(w,C.v,C.h,C.J),x,x),C.ao,!0)}}
B.bAK.prototype={
a_h(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bAL(),w),w.i("aV.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:B})","F<~>(mD)","X9(N,tw,e?)","ck(N,xO,e?)","e(N,xO,e?)","~(K,c1)"])
B.cLb.prototype={
$1(d){return new I.Fv(K.yj,d,this.a)},
$S:1370}
B.cL8.prototype={
$1(d){return this.a.$0()},
$S:136}
B.cL9.prototype={
$1(d){return this.a.$0()},
$S:136}
B.cLa.prototype={
$1(d){return this.a.$0()},
$S:136}
B.b4W.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:109}
B.caG.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aN(0)
x.w=A.dm(C.fr,new B.caF(x))},
$S:0}
B.caF.prototype={
$0(){return this.a.Dl(!0)},
$S:0}
B.caA.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.caD.prototype={
$0(){var x=this.a
return x.p(new B.caC(x))},
$S:0}
B.caC.prototype={
$0(){return this.a.d=!1},
$S:0}
B.caE.prototype={
$0(){var x=this.a
return x.p(new B.caB(x))},
$S:0}
B.caB.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cgN.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cgO.prototype={
$0(){},
$S:0}
B.bVZ.prototype={
$0(){return A.am(this.a,!1).ia()},
$S:0}
B.bHz.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bHy())},
$S:65}
B.bHy.prototype={
$0(){},
$S:0}
B.bHx.prototype={
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
B.crK.prototype={
$3(d,e,f){return D.ckP},
$S:z+3}
B.crL.prototype={
$2(d,e){var x=null,w=this.a.gKH().x
w===$&&A.b()
return A.cb(x,A.y(x,x,C.r,C.uj,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:273}
B.crM.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.ji)return C.ap
x=t===C.abg
t=x?C.cz:C.dU
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.N7,A.b9(u,!0,u,A.eR(!1,u,!0,A.y(u,A.O(A.a([D.azA,A.y(u,A.h(v,u,u,u,u,A.aJ(u,u,x?C.cY:C.cp,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.J(t,u,u,w,u,u,C.x),u,u,u,C.dr,u,u,u)],y.p),C.v,C.h,C.l,0,u),C.r,u,G.hX,D.ag3,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,this.a.d.gbDe(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a3,u),u)},
$S:z+4}
B.ca9.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.apk}x=e.c
if(x!=null){w=new B.ayn(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kT(new B.ca8(this.a,e))},
$S:z+5}
B.ca8.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b8v(u,e)
v.a.toString
x=u.f
v=A.ai(1/0,e.a,e.b)
u=A.ai(1/0,e.c,e.d)
w=A.wZ(A.Gd(A.JC(C.K,A.aH($.HW().aw7(),x.b,x.a),C.r,C.bG),new A.af(v,u)),C.y,null)
return w},
$S:114}
B.bhT.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1371}
B.bhU.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xi(d)},
$S:70}
B.bhV.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.brd(d))},
$S:1372}
B.bhW.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bri(d))},
$S:119}
B.bAL.prototype={
$1(d){return d.c},
$S:1373};(function aliases(){var x=B.akr.prototype
x.aPT=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af9.prototype,"gDk",0,0,null,["$1$announce","$0"],["Dl","kq"],1,0,0)
var t
w(t=B.afL.prototype,"gDk","kq",0)
w(t,"gaUf","QT",0)
w(B.aby.prototype,"gDk","kq",0)
v(B.agB.prototype,"gb9w","DU",2)
u(B,"dM7","duk",6)
w(t=B.a4V.prototype,"gbDe","tT",0)
w(t,"geF","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.K,[B.avy,B.TP,B.xO,B.bAK])
v(A.bx,[B.cLb,B.cL8,B.cL9,B.cLa,B.b4W,B.bHz,B.crK,B.crM,B.ca9,B.bhT,B.bhU,B.bhV,B.bhW,B.bAL])
u(B.Jj,A.ex)
v(A.G,[B.af8,B.afK,B.UL,B.a4S])
v(A.Y,[B.aT5,B.aTa,B.aTe,B.aT3])
u(B.af9,B.aT5)
v(A.bQ,[B.caG,B.caF,B.caA,B.caD,B.caC,B.caE,B.caB,B.cgN,B.cgO,B.bVZ,B.bHy,B.bHx])
u(B.afL,B.aTa)
v(A.M,[B.ads,B.P8,B.aej,B.ac8,B.ahv,B.aj6,B.aiS,B.aGm,B.X9,B.ayn])
u(B.abx,A.dA)
u(B.aSK,A.dv)
u(B.aby,B.aSK)
u(B.akr,B.aTe)
u(B.agB,B.akr)
v(A.cL,[B.crL,B.ca8])
u(B.aEI,A.qv)
u(B.apJ,A.f_)
u(B.aJj,B.aT3)
u(B.a4V,A.d0)
x(B.aSK,A.en)
x(B.aT5,A.en)
x(B.aTa,A.en)
x(B.aTe,A.en)
w(B.akr,A.iJ)
x(B.aT3,A.en)})()
A.bu(b.typeUniverse,JSON.parse('{"af8":{"G":[],"e":[],"f":[]},"afK":{"G":[],"e":[],"f":[]},"abx":{"G":[],"e":[],"f":[]},"Jj":{"G":[],"e":[],"f":[]},"af9":{"Y":["af8"],"en":[]},"afL":{"Y":["afK"],"en":[]},"ads":{"M":[],"e":[],"f":[]},"P8":{"M":[],"e":[],"f":[]},"aej":{"M":[],"e":[],"f":[]},"ac8":{"M":[],"e":[],"f":[]},"ahv":{"M":[],"e":[],"f":[]},"aj6":{"M":[],"e":[],"f":[]},"aiS":{"M":[],"e":[],"f":[]},"aGm":{"M":[],"e":[],"f":[]},"aby":{"Y":["abx"],"en":[]},"UL":{"G":[],"e":[],"f":[]},"X9":{"M":[],"e":[],"f":[]},"agB":{"Y":["UL"],"en":[]},"aEI":{"aU":[]},"a4S":{"G":[],"e":[],"f":[]},"aJj":{"Y":["a4S"],"en":[]},"a4V":{"d0":["xO"],"aU":[]},"ayn":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.x
return{D:x("cK"),x:x("F<~>"),k:x("r<kL>"),G:x("r<TP>"),v:x("r<fG>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dh"),Y:x("TP"),N:x("c"),n:x("lp<xO>"),J:x("lq<mD>"),q:x("dr"),z:x("@"),r:x("t<TP>?"),g:x("t<@>?"),X:x("K?"),t:x("avy?"),E:x("ru?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afi=new A.dN(C.tT,C.aa,C.tT,C.aa)
D.ag3=new A.J(null,null,D.afi,null,null,null,C.x)
D.cpe=new B.aiS("S\xf3 funciona na tua conta",!0,null)
D.ajt=new A.f1(C.K,null,null,D.cpe,null)
D.c4T=new A.Q(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.chg=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4T,C.a5,null,null,null,null,null,null,null)
D.bLH=new A.S(C.hx,D.chg,null)
D.ajB=new A.f1(C.K,null,null,D.bLH,null)
D.apj=new A.pi(C.cp,!0,D.ajB,null)
D.apk=new A.pi(C.ao,!0,null,null)
D.aqC=new B.apJ(0,0,"noDuplicates")
D.aqD=new B.apJ(1,1,"normal")
D.qa=new A.jZ(0.5,0.5,null,null,C.fc,null)
D.cbV=new A.D("Lanterna",null,C.ce,null,null,null,null,null,null,null,null)
D.azA=new A.bK(1,C.at,D.cbV,null)
D.cmu=new B.aej("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bQx=new B.UL(420,!0,null,null)
D.bfg=x([D.cmu,C.R,D.bQx],y.p)
D.bs5=x([C.tP],y.k)
D.cpU=x([],y.k)
D.bz8=x([],y.G)
D.bJv=new A.L(16,2)
D.aCu=new A.aZ(57911,"MaterialIcons",null,!1)
D.aCZ=new A.b8(D.aCu,null,C.t,null,null,null)
D.bKQ=new A.S(C.N4,D.aCZ,null)
D.c9b=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.ce,null,null,null,null,null,null,null,null)
D.bL7=new A.S(C.fV,D.c9b,null)
D.ch8=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.ce,null,null,null,null,null,null,null,null)
D.bLn=new A.S(C.qh,D.ch8,null)
D.clv=new B.aEI(null)
D.aqc=new A.uT(D.clv,null,C.aT,null,null)
D.bPT=new A.eF(0,0,0,0,null,null,D.aqc,null)
D.yo=new A.b6(14,14)
D.bRd=new A.Z("Bilhete",!1)
D.bRL=new A.Z("Organizas",!1)
D.bSk=new A.Z("Por entrar",!1)
D.bSG=new A.Z("Sem bilhete pago",!1)
D.bXU=new A.iz(186,186,8,C.dN,0,null)
D.c8H=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.bZd=new A.bF(D.c8H,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c8v=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null,null)
D.cbl=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.ce,C.a5,null,null,null,null,null,null,null)
D.cc9=new A.D("\xc0 procura de um QR\u2026",null,C.hQ,null,null,null,null,null,null,null,null)
D.cco=new A.D("Entrada",null,C.hR,null,null,null,null,null,null,null,null)
D.ccu=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null,null)
D.ckI=new B.abx(null)
D.ckP=new B.X9(null)
D.clf=new B.ac8("D\xc1 ENTRADA EM",null)
D.clg=new B.ac8("HOJE",null)
D.cmv=new B.aej("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cny=new B.af8(null)
D.cnO=new B.afK(null)})()};
(a=>{a["rpOeO6q1I68hysVWTWoZ2loh7bs="]=a.current})($__dart_deferred_initializers__);