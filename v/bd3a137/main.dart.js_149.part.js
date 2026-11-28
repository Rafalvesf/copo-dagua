((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dLY(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fX(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMg(w,x)},
cJs(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJs=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jf("partner_today",y.z),$async$cJs)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.ao(o==null?C.ai:o)
while(o.q()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.p(n==null?"Evento":n)
m=A.B(J.i(q,"booking_number"))
l=A.aD(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aD(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.br(r,new A.aMH([k,n,m,l]))}}p=A.aD(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aD(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avb(r,p,o)
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
return A.m($async$cJs,w)},
avb:function avb(d,e,f){this.a=d
this.b=e
this.c=f},
dtY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
g=A.p(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d2(A.p(x==null?"":x))
w=A.B(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.B(J.i(i,"status")):k
if(s){s=A.aD(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aD(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d2(A.p(p==null?"":p))
p=p==null?k:p.dG()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ao(j==null?C.ai:j)
while(j.q()){n=j.gE(j)
if(t.b(n)&&A.d2(A.p(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.p(l==null?"Parceiro":l)
o.push(new A.aM2(A.dc(A.p(m.h(n,"at"))).dG(),l))}}return new B.TN(h,g,x,w,v,u,r,s,q,p,o)},
cJq(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJq=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jf("my_entries",y.z),$async$cJq)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.br(r,B.dtY(q))}v=r
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
return A.m($async$cJq,w)},
dLh(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbu().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKx(w)
u=u.ch
u===$&&A.b()
return u.LS(0,"entries-"+w,C.yg).NI(new B.cKu(d),C.GD,x.$1("user_id"),v,"event_checkins").NI(new B.cKv(d),C.GD,x.$1("user_id"),v,"booking_arrivals").NI(new B.cKw(d),C.GE,x.$1("buyer_id"),v,"event_tickets").Pw(0)},
TN:function TN(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKx:function cKx(d){this.a=d},
cKu:function cKu(d){this.a=d},
cKv:function cKv(d){this.a=d},
cKw:function cKw(d){this.a=d},
dqt(){return new B.Jf(null)},
dcX(d){return C.f.aT(C.j.k(A.hZ(d)),2,"0")+":"+C.f.aT(C.j.k(A.hO(d)),2,"0")},
Jf:function Jf(d){this.a=d},
b4t:function b4t(){},
aeK:function aeK(d){this.a=d},
aeL:function aeL(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c9Y:function c9Y(d){this.a=d},
c9X:function c9X(d){this.a=d},
c9S:function c9S(d,e){this.a=d
this.b=e},
c9V:function c9V(d){this.a=d},
c9U:function c9U(d){this.a=d},
c9W:function c9W(d){this.a=d},
c9T:function c9T(d){this.a=d},
afm:function afm(d){this.a=d},
afn:function afn(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cg6:function cg6(d,e){this.a=d
this.b=e},
cg7:function cg7(){},
ad7:function ad7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVa:function bVa(d){this.a=d},
P4:function P4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
adY:function adY(d,e){this.c=d
this.a=e},
abR:function abR(d,e){this.c=d
this.a=e},
ah7:function ah7(d,e){this.c=d
this.a=e},
aiK:function aiK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiu:function aiu(d,e,f){this.c=d
this.d=e
this.a=f},
aFU:function aFU(d,e){this.c=d
this.a=e},
abg:function abg(d){this.a=d},
abh:function abh(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bHb:function bHb(d){this.a=d},
bHa:function bHa(){},
bH9:function bH9(d,e){this.a=d
this.b=e},
aSl:function aSl(){},
aSH:function aSH(){},
aSM:function aSM(){},
UJ:function UJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agd:function agd(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ei$=e
_.bF$=f
_.c=_.a=null},
cr9:function cr9(){},
cra:function cra(d,e){this.a=d
this.b=e},
crb:function crb(d){this.a=d},
X6:function X6(d){this.a=d},
aEm:function aEm(d){this.a=d},
aSQ:function aSQ(){},
ak3:function ak3(){},
apm:function apm(d,e,f){this.c=d
this.a=e
this.b=f},
dtO(d,e){},
a4F:function a4F(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aIU:function aIU(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9u:function c9u(d){this.a=d},
c9t:function c9t(d,e){this.a=d
this.b=e},
aSF:function aSF(){},
dtL(d,e){var x=null,w=d===D.aqf?250:0
return new B.a4I(d,w,e,new A.lq(x,x,y.J),new B.xH(x,C.Ba,x,!1,!1,C.aR,C.je,1),$.aa())},
a4I:function a4I(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.W$=0
_.Z$=i
_.aJ$=_.bv$=0},
bhl:function bhl(d){this.a=d},
bhm:function bhm(d){this.a=d},
bhn:function bhn(d){this.a=d},
bho:function bho(d){this.a=d},
xH:function xH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ay0:function ay0(d){this.a=d},
bAl:function bAl(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAm:function bAm(){}},D,F,G,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
E=c[277]
B=a.updateHolder(c[13],B)
D=c[273]
F=c[87]
G=c[193]
H=c[275]
I=c[124]
K=c[239]
L=c[276]
M=c[274]
B.avb.prototype={}
B.TN.prototype={}
B.Jf.prototype={
b9(d,e){var x=y.E
return e.G(A.cB($.b7(),new B.b4t(),y.D,x),x)===C.dQ?D.cne:D.cmZ}}
B.aeK.prototype={
R(){return new B.aeL()}}
B.aeL.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.km()
x.r=B.dLh(new B.c9Y(x))},
m(){var x,w,v=this
$.az.i9(v)
x=v.w
if(x!=null)x.aK(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y4(x)}v.a6()},
nf(d){if(d===C.es)this.km()},
D5(d){return this.b67(d)},
km(){return this.D5(!1)},
b67(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$D5=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.bzr:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJq(),$async$D5)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.c9S(u,s))
if(!d||s==null){x=1
break}for(o=J.ao(s);o.q();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null)
p.a0(new A.bG(o,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$D5,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gD4(),q=u.d,p=y.p
q=A.a([new B.P4("QR code",C.qe,!q,new B.c9V(u),t),new B.P4("Scannear",C.vj,q,new B.c9W(u),t)],p)
if(u.d)p=D.beQ
else{x=A.a([D.ck6,C.R,D.ajb,C.bO,D.ckE,C.ar],p)
w=s==null
if(w&&!u.f)x.push(M.a8l)
else if(w)x.push(new B.ah7(r,t))
else{w=J.a7(s)
if(w.gY(s))x.push(D.bKt)
else{v=A.a([],p)
for(w=w.gX(s);w.q();)C.e.n(v,A.a([D.pN,new B.aFU(w.gE(w),t)],p))
v.push(D.pN)
C.e.n(x,v)}}p=x}return new B.ad7(r,q,p,t)}}
B.afm.prototype={
R(){return new B.afn()}}
B.afn.prototype={
ad(){this.aq()
$.az.b4$.push(this)
this.km()},
m(){$.az.i9(this)
this.a6()},
nf(d){if(d===C.es)this.km()},
km(){var x=0,w=A.n(y.H),v,u=this,t
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJs(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cg6(u,t))
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
Qj(){var x=0,w=A.n(y.H),v=this,u
var $async$Qj=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ae(u).ak("/cobrar",null,y.X),$async$Qj)
case 2:if(v.c!=null)v.km()
return A.l(null,w)}})
return A.m($async$Qj,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gD4(),k=y.p,j=A.a([new B.P4("Scannear",C.vj,!0,new B.cg7(),n),new B.P4("Cobrar",C.nK,!1,o.gaTa(),n)],k),i=A.a([D.clU,C.R,new B.UJ(290,!1,l,n),C.bO,D.ckF,C.ar],k),h=m==null
if(h&&!o.e)i.push(H.a8i)
else if(h)i.push(new B.ah7(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKQ)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.p(q)+" pessoas")
r=C.e.a1(r," \xb7 ")
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
t=p}C.e.n(h,A.a([D.pN,new B.aiK(s,r,t,q>0,n,n)],k))}h.push(D.pN)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aiK("Cobrado hoje",k,n,!1,F.cIN(m.b),n))
h.push(D.pN)
C.e.n(i,h)}return new B.ad7(l,j,i,n)}}
B.ad7.prototype={
u(d){var x=null,w=C.CP.C(0,new A.a3(0,A.aT(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d_(C.bc,x,x,A.pU(C.lC,new B.bVa(d),"Voltar"),x),C.R,D.cao,C.aA,A.e4(C.bf,this.d,C.r,C.bk,8,8),C.aA],y.p)
C.e.n(v,this.e)
return A.cP(x,C.by,A.bB(!0,A.B0(A.d6(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.P4.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.bi(w,!0,w,A.hi(!1,C.aM,!0,w,A.eY(!1,w,!0,A.aK(new A.S(C.bY,A.O(A.a([A.b9(x.d,u,w,w,16),C.bj,A.h(x.c,w,w,w,w,A.aI(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.v,C.h,C.J,0,w),w),38,w),C.aa,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.aa,w,w,C.cW),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.adY.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x)}}
B.abR.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aH,x,x)}}
B.ah7.prototype={
u(d){var x=null
return new A.S(C.pV,A.y(A.a([D.c7y,new A.am(A.cJ(C.t3,x,x,this.c,x,x),x)],y.p),C.v,C.h,C.l),x)}}
B.aiK.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u))
t=A.a([A.a4(A.y(s,C.G,C.h,C.l),1),C.ae],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cy:C.dU
w=A.W(999)
t.push(A.x(u,A.h(s,u,u,u,u,A.aI(u,u,r?C.cR:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.I(x,u,u,w,u,u,C.x),u,u,u,C.dl,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u))
return new A.S(C.cj,A.O(t,C.v,C.h,C.l,0,u),u)}}
B.aiu.prototype={
u(d){var x=null,w=this.d,v=w?C.cy:C.dU,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?C.cR:C.cn,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.x),x,x,x,C.dl,x,x,x)}}
B.aFU.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dq[A.fF(l)-1]+", "+A.aE(l)+" "+C.bg[A.aw(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.p(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a1(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.X("Entrou \xe0s "+B.dcX(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.dcX(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSb
else if(x)k=D.bRd
else k=m.f?D.bQG:D.bRN
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n)],k)
if(u.length!==0)x.push(new A.S(L.MR,A.h(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.cj,A.O(A.a([A.a4(A.y(x,C.G,C.h,C.l),1),C.ae,new B.aiu(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abg.prototype={
R(){return new B.abh(new A.ac(Date.now(),0,!1),C.lp)}}
B.abh.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.km()
x.as=A.u6(C.hr,new B.bHb(x))},
m(){var x,w=this
$.az.i9(w)
x=w.Q
if(x!=null)x.aK(0)
x=w.as
if(x!=null)x.aK(0)
w.a6()},
nf(d){var x
if(d===C.es)this.km()
else if(d===C.mB){x=this.Q
if(x!=null)x.aK(0)}},
km(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aK(0)
x=3
return A.d(A.aUE(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bH9(u,t))
s=t==null?null:t.b
if(s==null)s=C.kx
u.Q=A.df(s,u.gD4())
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().G($.b7(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.B(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.B(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.co(new A.ac(Date.now(),0,!1)).a
v=x<0?0:C.k.eD(C.j.aO(x,1000)/1000)
u=C.k.ae(C.j.aO(x,1000)/C.j.aO(o.z.a,1000),0,1)
x=A.W(16)
t=A.bF(C.fa,0.5)
s=A.W(16)
r=A.bF(C.fa,0.5)
k=!k
if(k)q=A.bpo(C.t,A.kg("/q/"+l.a),C.GG,C.GH,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXc:A.bO(A.y(A.a([C.aDp,C.aE,D.cet,new A.am(A.cJ(C.t3,n,n,o.gD4(),n,n),n)],y.p),C.v,C.h,C.J),n,n)
p=y.p
s=A.a([A.x(n,A.aK(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.x),n,n,n,C.cT,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ac,A.x(C.bc,A.aqW(C.K,A.x(n,n,C.r,n,n,new A.I(C.u5,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.fa,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aE,A.bi(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.cg(k,32,r,!1,!0,n),C.ae,new A.di(1,C.bb,A.y(A.a([A.h(w,n,n,n,n,C.a9,n,n),D.cgm],p),C.G,C.h,C.l),n)],p),C.v,C.bR,C.l,0,n))
return A.x(n,A.y(s,C.v,C.h,C.l),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.x),n,n,n,C.cT,n,n,n)}}
B.aSl.prototype={}
B.aSH.prototype={}
B.aSM.prototype={}
B.UJ.prototype={
R(){return new B.agd(B.dtL(D.aqe,D.brG),null,null)}}
B.agd.prototype={
gKi(){var x,w=this,v=w.e
if(v===$){x=A.cD(null,E.ME,null,null,w)
w.e!==$&&A.b_()
w.e=x
v=x}return v},
ad(){this.aq()
$.az.b4$.push(this)},
bV(){var x,w,v=this
v.dC()
x=v.c
x.toString
if(A.aT(x,null,y.w).w.ax)v.gKi().cX(0)
else{x=v.gKi()
w=x.r
if(!(w!=null&&w.a!=null))x.aBY(0,!0)}},
nf(d){if(this.f)return
if(d===C.es)this.d.jZ(0)
else if(d===C.mB)this.d.cX(0)},
m(){var x=this
$.az.i9(x)
x.gKi().m()
x.d.m()
x.aOT()},
DG(d){return this.b7U(d)},
b7U(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DG=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dLY(t)
if(p==null){s=u.c.O(y.q).f
s.XE()
s.a0(D.bYx)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.cX(0),$async$DG)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ae(r).ak(m,null,y.X),$async$DG)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.jZ(0),$async$DG)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DG,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fS(A.W(16),A.aK(new A.bA(C.aw,w,C.e4,C.y,A.a([C.ju,new B.a4F(t,x.gb7T(),new B.cr9(),w),A.bO(A.aK(new A.bA(C.aw,w,C.aC,C.y,A.a([D.bPj,A.eT(x.gKi(),new B.cra(x,u),w)],s),w),u,u),w,w),A.cb(16,A.bO(A.x(w,D.ceP,C.r,w,w,new A.I(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dl,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.ba)],s)
if(x.a.d)s.push(new A.lp(t,new B.crb(x),w,w,y.n))
return A.y(s,C.E,C.h,C.l)}}
B.X6.prototype={
u(d){return D.aoX}}
B.aEm.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.bb()
m.r=C.t.gv(0)
m.b=C.bM
m.c=4
m.d=C.h8
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cA(n,C.aO,o,o,A.a([],v))
u.aA(new A.f_(2,44))
u.aA(new A.cR(2,16))
u.Ag(D.bIX,D.y8)
u.aA(new A.cR(44,2))
d.dQ(u,m)
u=new A.cA(n,C.aO,o,o,A.a([],v))
t=x-44
u.aA(new A.f_(t,2))
s=x-16
u.aA(new A.cR(s,2))
r=x-2
u.Ag(new A.K(r,16),D.y8)
u.aA(new A.cR(r,44))
d.dQ(u,m)
u=new A.cA(n,C.aO,o,o,A.a([],v))
q=w-44
u.aA(new A.f_(r,q))
p=w-16
u.aA(new A.cR(r,p))
r=w-2
u.Ag(new A.K(s,r),D.y8)
u.aA(new A.cR(t,r))
d.dQ(u,m)
v=new A.cA(n,C.aO,o,o,A.a([],v))
v.aA(new A.f_(44,r))
v.aA(new A.cR(16,r))
v.Ag(new A.K(2,p),D.y8)
v.aA(new A.cR(2,q))
d.dQ(v,m)},
dN(d){return!1}}
B.aSQ.prototype={}
B.ak3.prototype={
m(){var x=this,w=x.bF$
if(w!=null)w.a2(0,x.ghb())
x.bF$=null
x.a6()},
bS(){this.ct()
this.cP()
this.hc()}}
B.apm.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4F.prototype={
R(){return new B.aIU()}}
B.aIU.prototype={
b6S(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lp(x,new B.c9u(this),null,null,y.n)},
XN(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XN=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hd(t,A.u(t).i("hd<1>")).Y_(s.d,!1,B.dLB())
x=2
return A.d(u.jZ(0),$async$XN)
case 2:return A.l(null,w)}})
return A.m($async$XN,w)},
Mv(){var x=0,w=A.n(y.H),v=this,u
var $async$Mv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aK(0)
x=2
return A.d(y.x.b(u)?u:A.eg(u,y.H),$async$Mv)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.cX(0),$async$Mv)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$Mv,w)},
ad(){var x,w=this
w.aq()
x=w.a.c
w.d!==$&&A.bv()
w.d=x
w.XN()},
m(){this.a6()
this.Mv()},
nf(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xE}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.jZ(0)
break
case 2:w.cX(0)
break}}}
B.aSF.prototype={}
B.a4I.prototype={
bhf(){var x=this
x.CW=$.HR().gav8().Y_(new B.bhl(x),!1,new B.bhm(x))
x.cx=$.HR().gaCv().li(new B.bhn(x))
x.cy=$.HR().gaDy().li(new B.bho(x))},
b78(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aK(0)
w=x.cx
if(w!=null)w.aK(0)
w=x.cy
if(w!=null)w.aK(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bpR(!1,w.r===C.je?C.je:C.aaX))
return!0},
jZ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$jZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xG(C.xD,A.xF(null,null,C.xD.geS(0))))
if(s.a.e){x=1
break}r=C.Ba
q=new B.bAl(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bhf()
x=7
return A.d($.HR().lt(0,q),$async$jZ)
case 7:p=f
if(!s.db)s.sv(0,s.a.bqb(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tx){o=m
if(!s.db)s.sv(0,s.a.bqd(C.Ba,o,!0,!1,C.aR,C.je,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$jZ,w)},
cX(d){var x=0,w=A.n(y.H),v=this
var $async$cX=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b78()?2:3
break
case 2:x=4
return A.d($.HR().cX(0),$async$cX)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cX,w)},
tI(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.an(A.xG(C.a14,A.xF(null,null,C.a14.geS(0))))
if(u.db)A.an(A.xG(C.xD,A.xF(null,null,C.xD.geS(0))))
if(!t.e){x=1
break}if(t.r===C.je){x=1
break}x=3
return A.d($.HR().tI(),$async$tI)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tI,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.h7()
x=3
return A.d($.HR().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xH.prototype={
M5(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xH(w,v,f,u,t,s,r,k==null?x.w:k)},
bpR(d,e){var x=null
return this.M5(x,x,x,x,d,x,e,x)},
bqb(d,e,f,g,h,i){return this.M5(d,e,null,f,g,h,i,null)},
bqd(d,e,f,g,h,i,j){return this.M5(null,d,e,f,g,h,i,j)},
bpC(d){var x=null
return this.M5(x,x,x,x,x,x,x,d)},
bpx(d){var x=null
return this.M5(x,x,x,x,x,x,d,x)}}
B.ay0.prototype={
u(d){var x=null,w=A.a([D.bKg],y.p)
w.push(A.h(C.k1.geS(0),x,x,x,x,C.a9K,x,x))
return A.kM(A.bO(A.y(w,C.v,C.h,C.J),x,x),C.an,!0)}}
B.bAl.prototype={
ZD(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bAm(),w),w.i("aW.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:C})","F<~>(mz)","X6(N,tx,e?)","cj(N,xH,e?)","e(N,xH,e?)","~(M,c7)"])
B.cKx.prototype={
$1(d){return new I.Fn(K.y3,d,this.a)},
$S:1375}
B.cKu.prototype={
$1(d){return this.a.$0()},
$S:126}
B.cKv.prototype={
$1(d){return this.a.$0()},
$S:126}
B.cKw.prototype={
$1(d){return this.a.$0()},
$S:126}
B.b4t.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:112}
B.c9Y.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aK(0)
x.w=A.df(C.ex,new B.c9X(x))},
$S:0}
B.c9X.prototype={
$0(){return this.a.D5(!0)},
$S:0}
B.c9S.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c9V.prototype={
$0(){var x=this.a
return x.p(new B.c9U(x))},
$S:0}
B.c9U.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c9W.prototype={
$0(){var x=this.a
return x.p(new B.c9T(x))},
$S:0}
B.c9T.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cg6.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cg7.prototype={
$0(){},
$S:0}
B.bVa.prototype={
$0(){return A.al(this.a,!1).hz()},
$S:0}
B.bHb.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bHa())},
$S:65}
B.bHa.prototype={
$0(){},
$S:0}
B.bH9.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ac(w,0,!1).em(v)
u.z=v>3e7?x:C.lp}},
$S:0}
B.cr9.prototype={
$3(d,e,f){return D.ckd},
$S:z+3}
B.cra.prototype={
$2(d,e){var x=null,w=this.a.gKi().x
w===$&&A.b()
return A.cb(x,A.x(x,x,C.r,C.u5,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:216}
B.crb.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.je)return C.ao
x=t===C.aaY
t=x?C.cy:C.dU
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.MP,A.bi(u,!0,u,A.eY(!1,u,!0,A.x(u,A.O(A.a([D.azE,A.x(u,A.h(v,u,u,u,u,A.aI(u,u,x?C.cR:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.x),u,u,u,C.dl,u,u,u)],y.p),C.v,C.h,C.l,0,u),C.r,u,G.hY,D.afJ,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbBu(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c9u.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aoY}x=e.c
if(x!=null){w=new B.ay0(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kT(new B.c9t(this.a,e))},
$S:z+5}
B.c9t.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b6S(u,e)
v.a.toString
x=u.f
v=A.aj(1/0,e.a,e.b)
u=A.aj(1/0,e.c,e.d)
w=A.uS(A.G7(A.Jy(C.K,A.aK($.HR().avd(),x.b,x.a),C.r,C.bE),new A.af(v,u)),C.y,null)
return w},
$S:111}
B.bhl.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1376}
B.bhm.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.x8(d)},
$S:73}
B.bhn.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpx(d))},
$S:1377}
B.bho.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpC(d))},
$S:106}
B.bAm.prototype={
$1(d){return d.c},
$S:1378};(function aliases(){var x=B.ak3.prototype
x.aOT=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aeL.prototype,"gD4",0,0,null,["$1$announce","$0"],["D5","km"],1,0,0)
var t
w(t=B.afn.prototype,"gD4","km",0)
w(t,"gaTa","Qj",0)
w(B.abh.prototype,"gD4","km",0)
v(B.agd.prototype,"gb7T","DG",2)
u(B,"dLB","dtO",6)
w(t=B.a4I.prototype,"gbBu","tI",0)
w(t,"geE","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.M,[B.avb,B.TN,B.xH,B.bAl])
v(A.bt,[B.cKx,B.cKu,B.cKv,B.cKw,B.b4t,B.bHb,B.cr9,B.crb,B.c9u,B.bhl,B.bhm,B.bhn,B.bho,B.bAm])
u(B.Jf,A.ew)
v(A.G,[B.aeK,B.afm,B.UJ,B.a4F])
v(A.a_,[B.aSH,B.aSM,B.aSQ,B.aSF])
u(B.aeL,B.aSH)
v(A.bL,[B.c9Y,B.c9X,B.c9S,B.c9V,B.c9U,B.c9W,B.c9T,B.cg6,B.cg7,B.bVa,B.bHa,B.bH9])
u(B.afn,B.aSM)
v(A.L,[B.ad7,B.P4,B.adY,B.abR,B.ah7,B.aiK,B.aiu,B.aFU,B.X6,B.ay0])
u(B.abg,A.dC)
u(B.aSl,A.dw)
u(B.abh,B.aSl)
u(B.ak3,B.aSQ)
u(B.agd,B.ak3)
v(A.cK,[B.cra,B.c9t])
u(B.aEm,A.qq)
u(B.apm,A.fg)
u(B.aIU,B.aSF)
u(B.a4I,A.d3)
x(B.aSl,A.em)
x(B.aSH,A.em)
x(B.aSM,A.em)
x(B.aSQ,A.em)
w(B.ak3,A.ib)
x(B.aSF,A.em)})()
A.bq(b.typeUniverse,JSON.parse('{"aeK":{"G":[],"e":[],"f":[]},"afm":{"G":[],"e":[],"f":[]},"abg":{"G":[],"e":[],"f":[]},"Jf":{"G":[],"e":[],"f":[]},"aeL":{"a_":["aeK"],"em":[]},"afn":{"a_":["afm"],"em":[]},"ad7":{"L":[],"e":[],"f":[]},"P4":{"L":[],"e":[],"f":[]},"adY":{"L":[],"e":[],"f":[]},"abR":{"L":[],"e":[],"f":[]},"ah7":{"L":[],"e":[],"f":[]},"aiK":{"L":[],"e":[],"f":[]},"aiu":{"L":[],"e":[],"f":[]},"aFU":{"L":[],"e":[],"f":[]},"abh":{"a_":["abg"],"em":[]},"UJ":{"G":[],"e":[],"f":[]},"X6":{"L":[],"e":[],"f":[]},"agd":{"a_":["UJ"],"em":[]},"aEm":{"aU":[]},"a4F":{"G":[],"e":[],"f":[]},"aIU":{"a_":["a4F"],"em":[]},"a4I":{"d3":["xH"],"aU":[]},"ay0":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{D:x("cH"),x:x("F<~>"),k:x("r<kL>"),G:x("r<TN>"),v:x("r<fD>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dt"),Y:x("TN"),N:x("c"),n:x("lp<xH>"),J:x("lq<mz>"),q:x("dl"),z:x("@"),r:x("t<TN>?"),g:x("t<@>?"),X:x("M?"),t:x("avb?"),E:x("rs?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.af_=new A.dN(C.tD,C.ad,C.tD,C.ad)
D.afJ=new A.I(null,null,D.af_,null,null,null,C.x)
D.coF=new B.aiu("S\xf3 funciona na tua conta",!0,null)
D.ajb=new A.f6(C.K,null,null,D.coF,null)
D.c4e=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cae=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4e,C.a3,null,null,null,null,null,null)
D.bKx=new A.S(C.hw,D.cae,null)
D.ajg=new A.f6(C.K,null,null,D.bKx,null)
D.aoX=new A.pg(C.cn,!0,D.ajg,null)
D.aoY=new A.pg(C.an,!0,null,null)
D.aqe=new B.apm(0,0,"noDuplicates")
D.aqf=new B.apm(1,1,"normal")
D.pN=new A.kq(0.5,0.5,null,null,C.fa,null)
D.cfM=new A.D("Lanterna",null,C.cc,null,null,null,null,null,null,null)
D.azE=new A.bJ(1,C.at,D.cfM,null)
D.clT=new B.adY("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bPX=new B.UJ(420,!0,null,null)
D.beQ=x([D.clT,C.R,D.bPX],y.p)
D.brG=x([C.ty],y.k)
D.cpl=x([],y.k)
D.bzr=x([],y.G)
D.bIX=new A.K(16,2)
D.aC3=new A.b0(57911,"MaterialIcons",null,!1)
D.aCy=new A.b8(D.aC3,null,C.t,null,null,null)
D.bKg=new A.S(C.MM,D.aCy,null)
D.ccj=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cc,null,null,null,null,null,null,null)
D.bKt=new A.S(C.pV,D.ccj,null)
D.cgD=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cc,null,null,null,null,null,null,null)
D.bKQ=new A.S(C.fV,D.cgD,null)
D.ckU=new B.aEm(null)
D.apP=new A.qp(D.ckU,null,C.aR,null,null)
D.bPj=new A.eF(0,0,0,0,null,null,D.apP,null)
D.y8=new A.b6(14,14)
D.bQG=new A.X("Bilhete",!1)
D.bRd=new A.X("Organizas",!1)
D.bRN=new A.X("Por entrar",!1)
D.bSb=new A.X("Sem bilhete pago",!1)
D.bXc=new A.kX(186,186,8,C.fT,0,null)
D.c8y=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bYx=new A.bG(D.c8y,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c7y=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cc,C.a3,null,null,null,null,null,null)
D.cao=new A.D("Entrada",null,C.hR,null,null,null,null,null,null,null)
D.cet=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.ceP=new A.D("\xc0 procura de um QR\u2026",null,C.hQ,null,null,null,null,null,null,null)
D.cgm=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.ck6=new B.abg(null)
D.ckd=new B.X6(null)
D.ckE=new B.abR("D\xc1 ENTRADA EM",null)
D.ckF=new B.abR("HOJE",null)
D.clU=new B.adY("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cmZ=new B.aeK(null)
D.cne=new B.afm(null)})()};
(a=>{a["5XzyRYckrvJHs+sH5/BX7jhQSi8="]=a.current})($__dart_deferred_initializers__);