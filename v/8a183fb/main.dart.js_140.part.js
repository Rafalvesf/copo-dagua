((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dKS(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).h4(C.f.C(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMM(w,x)},
cJ1(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJ1=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.jI("partner_today",y.z),$async$cJ1)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.ap(o==null?C.am:o)
while(o.t()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.q(n==null?"Evento":n)
m=A.C(J.i(q,"booking_number"))
l=A.aL(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aL(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bu(r,new A.aNc([k,n,m,l]))}}p=A.aL(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aL(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avv(r,p,o)
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
return A.m($async$cJ1,w)},
avv:function avv(d,e,f){this.a=d
this.b=e
this.c=f},
dsY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.dh(A.q(x==null?"":x))
w=A.C(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.C(J.i(i,"status")):k
if(s){s=A.aL(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aL(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.dh(A.q(p==null?"":p))
p=p==null?k:p.e1()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ap(j==null?C.am:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.dh(A.q(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aMy(A.dc(A.q(m.h(n,"at"))).e1(),l))}}return new B.TQ(h,g,x,w,v,u,r,s,q,p,o)},
cJ_(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJ_=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.jI("my_entries",y.z),$async$cJ_)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ap(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.bu(r,B.dsY(q))}v=r
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
return A.m($async$cJ_,w)},
dKb(d){var x,w,v="public",u=$.R().b
u===$&&A.b()
x=u.gbB().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cK6(w)
u=u.ch
u===$&&A.b()
return u.Mk(0,"entries-"+w,C.yH).Ol(new B.cK3(d),C.H9,x.$1("user_id"),v,"event_checkins").Ol(new B.cK4(d),C.H9,x.$1("user_id"),v,"booking_arrivals").Ol(new B.cK5(d),C.Ha,x.$1("buyer_id"),v,"event_tickets").Qg(0)},
TQ:function TQ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cK6:function cK6(d){this.a=d},
cK3:function cK3(d){this.a=d},
cK4:function cK4(d){this.a=d},
cK5:function cK5(d){this.a=d},
dpv(){return new B.Jh(null)},
dc8(d){return C.f.aY(C.j.k(A.ic(d)),2,"0")+":"+C.f.aY(C.j.k(A.hY(d)),2,"0")},
Jh:function Jh(d){this.a=d},
b4X:function b4X(){},
af5:function af5(d){this.a=d},
af6:function af6(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c9R:function c9R(d){this.a=d},
c9Q:function c9Q(d){this.a=d},
c9L:function c9L(d,e){this.a=d
this.b=e},
c9O:function c9O(d){this.a=d},
c9N:function c9N(d){this.a=d},
c9P:function c9P(d){this.a=d},
c9M:function c9M(d){this.a=d},
afG:function afG(d){this.a=d},
afH:function afH(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cfI:function cfI(d,e){this.a=d
this.b=e},
cfJ:function cfJ(){},
ado:function ado(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVf:function bVf(d){this.a=d},
P5:function P5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aef:function aef(d,e){this.c=d
this.a=e},
ac1:function ac1(d,e){this.c=d
this.a=e},
aho:function aho(d,e){this.c=d
this.a=e},
aj5:function aj5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiL:function aiL(d,e,f){this.c=d
this.d=e
this.a=f},
aGo:function aGo(d,e){this.c=d
this.a=e},
abr:function abr(d){this.a=d},
abs:function abs(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bH0:function bH0(d){this.a=d},
bH_:function bH_(){},
bGZ:function bGZ(d,e){this.a=d
this.b=e},
aSR:function aSR(){},
aTc:function aTc(){},
aTh:function aTh(){},
UL:function UL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agw:function agw(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ej$=e
_.bH$=f
_.c=_.a=null},
cqu:function cqu(){},
cqv:function cqv(d,e){this.a=d
this.b=e},
cqw:function cqw(d){this.a=d},
X9:function X9(d){this.a=d},
aEJ:function aEJ(d){this.a=d},
aTl:function aTl(){},
akr:function akr(){},
apN:function apN(d,e,f){this.c=d
this.a=e
this.b=f},
dsO(d,e){},
a4M:function a4M(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJo:function aJo(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9l:function c9l(d){this.a=d},
c9k:function c9k(d,e){this.a=d
this.b=e},
aTa:function aTa(){},
dsL(d,e){var x=null,w=d===D.ark?250:0
return new B.a4P(d,w,e,new A.ll(x,x,y.J),new B.xO(x,C.BC,x,!1,!1,C.aT,C.ji,1),$.aa())},
a4P:function a4P(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.W$=0
_.Y$=i
_.aH$=_.bn$=0},
bi_:function bi_(d){this.a=d},
bi0:function bi0(d){this.a=d},
bi1:function bi1(d){this.a=d},
bi2:function bi2(d){this.a=d},
xO:function xO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayk:function ayk(d){this.a=d},
bAb:function bAb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAc:function bAc(){}},D,F,G,H,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[280]
B=a.updateHolder(c[13],B)
D=c[277]
F=c[87]
G=c[195]
H=c[122]
I=c[242]
K=c[279]
L=c[278]
B.avv.prototype={}
B.TQ.prototype={}
B.Jh.prototype={
bg(d,e){var x=y.E
return e.H(A.cI($.ba(),new B.b4X(),y.D,x),x)===C.dQ?D.cpi:D.cp2}}
B.af5.prototype={
P(){return new B.af6()}}
B.af6.prototype={
ad(){var x=this
x.ar()
$.az.b4$.push(x)
x.kv()
x.r=B.dKb(new B.c9R(x))},
m(){var x,w,v=this
$.az.ie(v)
x=v.w
if(x!=null)x.aL(0)
x=v.r
if(x!=null){w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yi(x)}v.a6()},
nf(d){if(d===C.eu)this.kv()},
Ds(d){return this.b81(d)},
kv(){return this.Ds(!1)},
b81(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Ds=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ap(o==null?D.bzQ:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJ_(),$async$Ds)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.c9L(u,s))
if(!d||s==null){x=1
break}for(o=J.ap(s);o.t();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null,null)
p.a3(new A.bG(o,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.z,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Ds,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDr(),q=u.d,p=y.p
q=A.a([new B.P5("QR code",C.qN,!q,new B.c9O(u),t),new B.P5("Scannear",C.vN,q,new B.c9P(u),t)],p)
if(u.d)p=D.bfY
else{x=A.a([D.cma,C.R,D.akd,C.bs,D.cmI,C.av],p)
w=s==null
if(w&&!u.f)x.push(L.a9b)
else if(w)x.push(new B.aho(r,t))
else{w=J.a7(s)
if(w.gZ(s))x.push(D.bM5)
else{v=A.a([],p)
for(w=w.gX(s);w.t();)C.e.n(v,A.a([D.qp,new B.aGo(w.gE(w),t)],p))
v.push(D.qp)
C.e.n(x,v)}}p=x}return new B.ado(r,q,p,t)}}
B.afG.prototype={
P(){return new B.afH()}}
B.afH.prototype={
ad(){this.ar()
$.az.b4$.push(this)
this.kv()},
m(){$.az.ie(this)
this.a6()},
nf(d){if(d===C.eu)this.kv()},
kv(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJ1(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cfI(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
R0(){var x=0,w=A.n(y.H),v=this,u
var $async$R0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ah(u).av("/cobrar",null,y.X),$async$R0)
case 2:if(v.c!=null)v.kv()
return A.l(null,w)}})
return A.m($async$R0,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDr(),k=y.p,j=A.a([new B.P5("Scannear",C.vN,!0,new B.cfJ(),n),new B.P5("Cobrar",C.vH,!1,o.gaUq(),n)],k),i=A.a([D.co0,C.R,new B.UL(290,!1,l,n),C.bs,D.cmJ,C.av],k),h=m==null
if(h&&!o.e)i.push(D.bZd)
else if(h)i.push(new B.aho(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bLR)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.q(q)+" pessoas")
r=C.e.a0(r," \xb7 ")
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
t=p}C.e.n(h,A.a([D.qp,new B.aj5(s,r,t,q>0,n,n)],k))}h.push(D.qp)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aj5("Cobrado hoje",k,n,!1,F.cIn(m.b),n))
h.push(D.qp)
C.e.n(i,h)}return new B.ado(l,j,i,n)}}
B.ado.prototype={
u(d){var x=null,w=C.Dh.B(0,new A.a2(0,A.ax(d,C.b4,y.w).w.r.b,0,0)),v=A.a([new A.cZ(C.bg,x,x,A.pZ(C.lQ,new B.bVf(d),"Voltar"),x),C.R,D.cdx,C.aC,A.e1(C.bf,this.d,C.r,C.bl,8,8),C.aC],y.p)
C.e.n(v,this.e)
return A.cP(x,C.bz,A.bE(!0,A.yg(A.d0(v,x,w,x,x,!1,C.a3,!1),x,this.c),x,C.a_,!1),!0,x)}}
B.P5.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.A,t=v?$.at:C.t
return A.b8(w,!0,w,A.fq(!1,C.aE,!0,w,A.eC(!1,w,!0,A.aG(new A.Q(C.bU,A.N(A.a([A.b4(x.d,u,w,w,16),C.bm,A.h(x.c,w,w,w,w,A.aI(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.w,C.h,C.K,0,w,w),w),38,w),C.ad,!0,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ad,w,w,C.cD),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.aef.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.O,x,x,x)}}
B.ac1.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aL,x,x,x)}}
B.aho.prototype={
u(d){var x=null
return new A.Q(C.qv,A.y(A.a([D.ccs,A.cw(C.tx,x,x,this.c,x,x)],y.p),C.w,C.h,C.l,0,C.u),x)}}
B.aj5.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.ae,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.O,u,u,u))
t=A.a([A.a4(A.y(s,C.H,C.h,C.l,0,C.u),1),C.ah],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cJ:C.e2
w=A.W(999)
t.push(A.B(u,A.h(s,u,u,u,u,A.aI(u,u,r?C.d_:C.cq,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.L(x,u,u,w,u,u,C.y),u,u,u,C.dz,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.ae,u,u,u))
return new A.Q(C.cn,A.N(t,C.w,C.h,C.l,0,u,u),u)}}
B.aiL.prototype={
u(d){var x=null,w=this.d,v=w?C.cJ:C.e2,u=A.W(999)
return A.B(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?C.d_:C.cq,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.L(v,x,x,u,x,x,C.y),x,x,x,C.dz,x,x,x)}}
B.aGo.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dY[A.fR(l)-1]+", "+A.aH(l)+" "+C.bG[A.au(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.q(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a0(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.a1("Entrou \xe0s "+B.dc8(k),!0)
else if(t!=null){k=new A.a1("Chegou \xe0s "+B.dc8(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bTn
else if(x)k=D.bSs
else k=m.f?D.bRV:D.bT1
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.ae,n,n,n)],k)
if(u.length!==0)x.push(new A.Q(K.NA,A.h(u,n,n,n,n,C.O,n,n,n),n))
return new A.Q(C.cn,A.N(A.a([A.a4(A.y(x,C.H,C.h,C.l,0,C.u),1),C.ah,new B.aiL(o,q,n)],k),C.H,C.h,C.l,0,n,n),n)}}
B.abr.prototype={
P(){return new B.abs(new A.ad(Date.now(),0,!1),C.nx)}}
B.abs.prototype={
ad(){var x=this
x.ar()
$.az.b4$.push(x)
x.kv()
x.as=A.u8(C.fS,new B.bH0(x))},
m(){var x,w=this
$.az.ie(w)
x=w.Q
if(x!=null)x.aL(0)
x=w.as
if(x!=null)x.aL(0)
w.a6()},
nf(d){var x
if(d===C.eu)this.kv()
else if(d===C.mT){x=this.Q
if(x!=null)x.aL(0)}},
kv(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aL(0)
x=3
return A.d(A.aV6(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bGZ(u,t))
s=t==null?null:t.b
if(s==null)s=C.nz
u.Q=A.dg(s,u.gDr())
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().H($.ba(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.C(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.C(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cK(new A.ad(Date.now(),0,!1)).a
v=x<0?0:C.k.eH(C.j.aT(x,1000)/1000)
u=C.k.ag(C.j.aT(x,1000)/C.j.aT(o.z.a,1000),0,1)
x=A.W(16)
t=A.bB(C.fq,0.5)
s=A.W(16)
r=A.bB(C.fq,0.5)
k=!k
if(k)q=A.cWB(C.t,A.kC("/q/"+l.a),C.Hc,C.Hd,C.a_,"C\xf3digo QR da conta",186)
else q=o.x?D.bYM:A.bN(A.y(A.a([C.aEp,C.aF,D.cdD,A.cw(C.tx,n,n,o.gDr(),n,n)],y.p),C.w,C.h,C.K,0,C.u),n,n)
p=y.p
s=A.a([A.B(n,A.aG(q,186,186),C.r,n,n,new A.L(C.t,n,r,s,n,n,C.y),n,n,n,C.cA,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ac,A.B(C.bg,A.ark(C.L,A.B(n,n,C.r,n,n,new A.L(C.ut,n,n,A.W(2),n,n,C.y),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.L(C.fq,n,n,k,n,n,C.y),n,4,n,n,n,n,214),C.aF,A.b8(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.O,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.N(A.a([new A.cp(k,32,r,!1,!0,n),C.ah,new A.d8(1,C.b7,A.y(A.a([A.h(w,n,n,n,n,C.ae,n,n,n),D.c9y],p),C.H,C.h,C.l,0,C.u),n)],p),C.w,C.bW,C.l,0,n,n))
return A.B(n,A.y(s,C.w,C.h,C.l,0,C.u),C.r,n,n,new A.L(C.t,n,t,x,n,n,C.y),n,n,n,C.cA,n,n,n)}}
B.aSR.prototype={}
B.aTc.prototype={}
B.aTh.prototype={}
B.UL.prototype={
P(){return new B.agw(B.dsL(D.arj,D.bsO),null,null)}}
B.agw.prototype={
gKL(){var x,w=this,v=w.e
if(v===$){x=A.cE(null,E.Nk,null,1,null,w)
w.e!==$&&A.aX()
w.e=x
v=x}return v},
ad(){this.ar()
$.az.b4$.push(this)},
bL(){var x,w,v=this
v.d6()
x=v.c
x.toString
if(A.ax(x,null,y.w).w.ax)v.gKL().d5(0)
else{x=v.gKL()
w=x.r
if(!(w!=null&&w.a!=null))x.ad4(0,!0)}},
nf(d){if(this.f)return
if(d===C.eu)this.d.kh(0)
else if(d===C.mT)this.d.d5(0)},
m(){var x=this
$.az.ie(x)
x.gKL().m()
x.d.m()
x.aQ_()},
E1(d){return this.b9P(d)},
b9P(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$E1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dKS(t)
if(p==null){s=u.c.O(y.q).f
s.aA6()
s.a3(D.c_7)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d5(0),$async$E1)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ah(r).av(m,null,y.X),$async$E1)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.kh(0),$async$E1)
case 5:case 1:return A.l(v,w)}})
return A.m($async$E1,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fV(A.W(16),A.aG(new A.bD(C.az,w,C.e8,C.z,A.a([C.jx,new B.a4M(t,x.gb9O(),new B.cqu(),w),A.bN(A.aG(new A.bD(C.az,w,C.aG,C.z,A.a([D.bQB,A.f9(x.gKL(),new B.cqv(x,u),w)],s),w),u,u),w,w),A.ce(16,A.bN(A.B(w,D.cdi,C.r,w,w,new A.L(C.t,w,w,A.W(999),w,w,C.y),w,w,w,C.dz,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.ba)],s)
if(x.a.d)s.push(new A.lk(t,new B.cqw(x),w,w,y.n))
return A.y(s,C.G,C.h,C.l,0,C.u)}}
B.X9.prototype={
u(d){return D.aq1}}
B.aEJ.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.bc()
m.r=C.t.gv(0)
m.b=C.bR
m.c=4
m.d=C.h9
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cB(n,C.aR,o,o,A.a([],v))
u.aB(new A.f0(2,44))
u.aB(new A.cR(2,16))
u.Aw(D.bKc,D.yz)
u.aB(new A.cR(44,2))
d.dR(u,m)
u=new A.cB(n,C.aR,o,o,A.a([],v))
t=x-44
u.aB(new A.f0(t,2))
s=x-16
u.aB(new A.cR(s,2))
r=x-2
u.Aw(new A.M(r,16),D.yz)
u.aB(new A.cR(r,44))
d.dR(u,m)
u=new A.cB(n,C.aR,o,o,A.a([],v))
q=w-44
u.aB(new A.f0(r,q))
p=w-16
u.aB(new A.cR(r,p))
r=w-2
u.Aw(new A.M(s,r),D.yz)
u.aB(new A.cR(t,r))
d.dR(u,m)
v=new A.cB(n,C.aR,o,o,A.a([],v))
v.aB(new A.f0(44,r))
v.aB(new A.cR(16,r))
v.Aw(new A.M(2,p),D.yz)
v.aB(new A.cR(2,q))
d.dR(v,m)},
dO(d){return!1}}
B.aTl.prototype={}
B.akr.prototype={
m(){var x=this,w=x.bH$
if(w!=null)w.a_(0,x.ghr())
x.bH$=null
x.a6()},
bU(){this.cA()
this.d3()
this.hs()}}
B.apN.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4M.prototype={
P(){return new B.aJo()}}
B.aJo.prototype={
b8L(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lk(x,new B.c9l(this),null,null,y.n)},
Yg(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$Yg=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.ha(t,A.u(t).i("ha<1>")).Yu(s.d,!1,B.dKv())
x=2
return A.d(u.kh(0),$async$Yg)
case 2:return A.l(null,w)}})
return A.m($async$Yg,w)},
N3(){var x=0,w=A.n(y.H),v=this,u
var $async$N3=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aL(0)
x=2
return A.d(y.x.b(u)?u:A.ej(u,y.H),$async$N3)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d5(0),$async$N3)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$N3,w)},
ad(){var x,w=this
w.ar()
x=w.a.c
w.d!==$&&A.bt()
w.d=x
w.Yg()},
m(){this.a6()
this.N3()},
nf(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.y4}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.kh(0)
break
case 2:w.d5(0)
break}}}
B.aTa.prototype={}
B.a4P.prototype={
bj6(){var x=this
x.CW=$.HV().gaw9().Yu(new B.bi_(x),!1,new B.bi0(x))
x.cx=$.HV().gaDC().lq(new B.bi1(x))
x.cy=$.HV().gaEG().lq(new B.bi2(x))},
b92(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aL(0)
w=x.cx
if(w!=null)w.aL(0)
w=x.cy
if(w!=null)w.aL(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.brZ(!1,w.r===C.ji?C.ji:C.abX))
return!0},
kh(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$kh=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xN(C.y3,A.xM(null,null,C.y3.geT(0))))
if(s.a.e){x=1
break}r=C.BC
q=new B.bAb(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bj6()
x=7
return A.d($.HV().lD(0,q),$async$kh)
case 7:p=f
if(!s.db)s.sv(0,s.a.bsh(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tB){o=m
if(!s.db)s.sv(0,s.a.bsj(C.BC,o,!0,!1,C.aT,C.ji,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kh,w)},
d5(d){var x=0,w=A.n(y.H),v=this
var $async$d5=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b92()?2:3
break
case 2:x=4
return A.d($.HV().d5(0),$async$d5)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d5,w)},
tZ(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tZ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.ak(A.xN(C.a21,A.xM(null,null,C.a21.geT(0))))
if(u.db)A.ak(A.xN(C.y3,A.xM(null,null,C.y3.geT(0))))
if(!t.e){x=1
break}if(t.r===C.ji){x=1
break}x=3
return A.d($.HV().tZ(),$async$tZ)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tZ,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.fW()
x=3
return A.d($.HV().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xO.prototype={
Mx(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xO(w,v,f,u,t,s,r,k==null?x.w:k)},
brZ(d,e){var x=null
return this.Mx(x,x,x,x,d,x,e,x)},
bsh(d,e,f,g,h,i){return this.Mx(d,e,null,f,g,h,i,null)},
bsj(d,e,f,g,h,i,j){return this.Mx(null,d,e,f,g,h,i,j)},
brI(d){var x=null
return this.Mx(x,x,x,x,x,x,x,d)},
brD(d){var x=null
return this.Mx(x,x,x,x,x,x,d,x)}}
B.ayk.prototype={
u(d){var x=null,w=A.a([D.bLy],y.p)
w.push(A.h(C.k4.geT(0),x,x,x,x,C.aax,x,x,x))
return A.kI(A.bN(A.y(w,C.w,C.h,C.K,0,C.u),x,x),C.ao,!0)}}
B.bAb.prototype={
a_i(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("aj<1,v>")
x=A.U(new A.aj(x,new B.bAc(),w),w.i("aY.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:x})","F<~>(my)","X9(O,tB,e?)","cj(O,xO,e?)","e(O,xO,e?)","~(K,bX)"])
B.cK6.prototype={
$1(d){return new H.Fx(I.yu,d,this.a)},
$S:1375}
B.cK3.prototype={
$1(d){return this.a.$0()},
$S:126}
B.cK4.prototype={
$1(d){return this.a.$0()},
$S:126}
B.cK5.prototype={
$1(d){return this.a.$0()},
$S:126}
B.b4X.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:116}
B.c9R.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aL(0)
x.w=A.dg(C.fT,new B.c9Q(x))},
$S:0}
B.c9Q.prototype={
$0(){return this.a.Ds(!0)},
$S:0}
B.c9L.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c9O.prototype={
$0(){var x=this.a
return x.p(new B.c9N(x))},
$S:0}
B.c9N.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c9P.prototype={
$0(){var x=this.a
return x.p(new B.c9M(x))},
$S:0}
B.c9M.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cfI.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cfJ.prototype={
$0(){},
$S:0}
B.bVf.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
B.bH0.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bH_())},
$S:67}
B.bH_.prototype={
$0(){},
$S:0}
B.bGZ.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ad(w,0,!1).e6(v)
u.z=v>3e7?x:C.nx}},
$S:0}
B.cqu.prototype={
$3(d,e,f){return D.cmh},
$S:z+3}
B.cqv.prototype={
$2(d,e){var x=null,w=this.a.gKL().x
w===$&&A.b()
return A.ce(x,A.B(x,x,C.r,C.ut,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:213}
B.cqw.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.ji)return C.at
x=t===C.abY
t=x?C.cJ:C.e2
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.Q(C.Ny,A.b8(u,!0,u,A.eC(!1,u,!0,A.B(u,A.N(A.a([D.aAh,A.B(u,A.h(v,u,u,u,u,A.aI(u,u,x?C.d_:C.cq,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.L(t,u,u,w,u,u,C.y),u,u,u,C.dz,u,u,u)],y.p),C.w,C.h,C.l,0,u,u),C.r,u,G.iB,D.agP,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,this.a.d.gbDI(),u,u,u,u,u,u,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c9l.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aq2}x=e.c
if(x!=null){w=new B.ayk(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kp(new B.c9k(this.a,e))},
$S:z+5}
B.c9k.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b8L(u,e)
v.a.toString
x=u.f
v=A.ag(1/0,e.a,e.b)
u=A.ag(1/0,e.c,e.d)
w=A.x1(A.vX(A.DU(C.L,A.aG($.HV().awe(),x.b,x.a),C.r,C.bK),new A.ac(v,u)),C.z,null)
return w},
$S:117}
B.bi_.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1376}
B.bi0.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xh(d)},
$S:72}
B.bi1.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.brD(d))},
$S:1377}
B.bi2.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.brI(d))},
$S:113}
B.bAc.prototype={
$1(d){return d.c},
$S:1378};(function aliases(){var x=B.akr.prototype
x.aQ_=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af6.prototype,"gDr",0,0,null,["$1$announce","$0"],["Ds","kv"],1,0,0)
var t
w(t=B.afH.prototype,"gDr","kv",0)
w(t,"gaUq","R0",0)
w(B.abs.prototype,"gDr","kv",0)
v(B.agw.prototype,"gb9O","E1",2)
u(B,"dKv","dsO",6)
w(t=B.a4P.prototype,"gbDI","tZ",0)
w(t,"geI","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.K,[B.avv,B.TQ,B.xO,B.bAb])
v(A.by,[B.cK6,B.cK3,B.cK4,B.cK5,B.b4X,B.bH0,B.cqu,B.cqw,B.c9l,B.bi_,B.bi0,B.bi1,B.bi2,B.bAc])
u(B.Jh,A.eq)
v(A.G,[B.af5,B.afG,B.UL,B.a4M])
v(A.Y,[B.aTc,B.aTh,B.aTl,B.aTa])
u(B.af6,B.aTc)
v(A.bR,[B.c9R,B.c9Q,B.c9L,B.c9O,B.c9N,B.c9P,B.c9M,B.cfI,B.cfJ,B.bVf,B.bH_,B.bGZ])
u(B.afH,B.aTh)
v(A.I,[B.ado,B.P5,B.aef,B.ac1,B.aho,B.aj5,B.aiL,B.aGo,B.X9,B.ayk])
u(B.abr,A.dD)
u(B.aSR,A.dz)
u(B.abs,B.aSR)
u(B.akr,B.aTl)
u(B.agw,B.akr)
v(A.cN,[B.cqv,B.c9k])
u(B.aEJ,A.qz)
u(B.apN,A.f8)
u(B.aJo,B.aTa)
u(B.a4P,A.d3)
x(B.aSR,A.ep)
x(B.aTc,A.ep)
x(B.aTh,A.ep)
x(B.aTl,A.ep)
w(B.akr,A.iw)
x(B.aTa,A.ep)})()
A.bq(b.typeUniverse,JSON.parse('{"af5":{"G":[],"e":[],"f":[]},"afG":{"G":[],"e":[],"f":[]},"abr":{"G":[],"e":[],"f":[]},"Jh":{"G":[],"e":[],"f":[]},"af6":{"Y":["af5"],"ep":[]},"afH":{"Y":["afG"],"ep":[]},"ado":{"I":[],"e":[],"f":[]},"P5":{"I":[],"e":[],"f":[]},"aef":{"I":[],"e":[],"f":[]},"ac1":{"I":[],"e":[],"f":[]},"aho":{"I":[],"e":[],"f":[]},"aj5":{"I":[],"e":[],"f":[]},"aiL":{"I":[],"e":[],"f":[]},"aGo":{"I":[],"e":[],"f":[]},"abs":{"Y":["abr"],"ep":[]},"UL":{"G":[],"e":[],"f":[]},"X9":{"I":[],"e":[],"f":[]},"agw":{"Y":["UL"],"ep":[]},"aEJ":{"aT":[]},"a4M":{"G":[],"e":[],"f":[]},"aJo":{"Y":["a4M"],"ep":[]},"a4P":{"d3":["xO"],"aT":[]},"ayk":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),x:x("F<~>"),k:x("r<kH>"),G:x("r<TQ>"),v:x("r<fK>"),S:x("r<+at,partner(ad,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("df"),Y:x("TQ"),N:x("c"),n:x("lk<xO>"),J:x("ll<my>"),q:x("dn"),z:x("@"),r:x("t<TQ>?"),g:x("t<@>?"),X:x("K?"),t:x("avv?"),E:x("rz?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ag3=new A.dS(C.u4,C.ab,C.u4,C.ab)
D.agP=new A.L(null,null,D.ag3,null,null,null,C.y)
D.cqL=new B.aiL("S\xf3 funciona na tua conta",!0,null)
D.akd=new A.fy(C.L,null,null,D.cqL,null)
D.c5T=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cio=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c5T,C.a6,null,null,null,null,null,null,null)
D.bMq=new A.Q(C.ft,D.cio,null)
D.akl=new A.fy(C.L,null,null,D.bMq,null)
D.aq1=new A.pf(C.cq,!0,D.akl,null)
D.aq2=new A.pf(C.ao,!0,null,null)
D.arj=new B.apN(0,0,"noDuplicates")
D.ark=new B.apN(1,1,"normal")
D.qp=new A.jV(0.5,0.5,null,null,C.fq,null)
D.cd3=new A.D("Lanterna",null,C.ch,null,null,null,null,null,null,null,null)
D.aAh=new A.bJ(1,C.au,D.cd3,null)
D.co_=new B.aef("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bRe=new B.UL(420,!0,null,null)
D.bfY=x([D.co_,C.R,D.bRe],y.p)
D.bsO=x([C.u0],y.k)
D.crr=x([],y.k)
D.bzQ=x([],y.G)
D.bKc=new A.M(16,2)
D.aD_=new A.aV(57911,"MaterialIcons",null,!1)
D.aDx=new A.b7(D.aD_,null,C.t,null,null,null)
D.bLy=new A.Q(C.Nv,D.aDx,null)
D.cag=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.ch,null,null,null,null,null,null,null,null)
D.bLR=new A.Q(C.fU,D.cag,null)
D.cig=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.ch,null,null,null,null,null,null,null,null)
D.bM5=new A.Q(C.qv,D.cig,null)
D.cmY=new B.aEJ(null)
D.aqU=new A.uT(D.cmY,null,C.aT,null,null)
D.bQB=new A.eM(0,0,0,0,null,null,D.aqU,null)
D.yz=new A.b2(14,14)
D.bRV=new A.a1("Bilhete",!1)
D.bSs=new A.a1("Organizas",!1)
D.bT1=new A.a1("Por entrar",!1)
D.bTn=new A.a1("Sem bilhete pago",!1)
D.bYM=new A.ix(186,186,8,C.dM,0,null)
D.bZd=new A.oN(2,C.a_,null)
D.c9M=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.c_7=new A.bG(D.c9M,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.z,null)
D.c9y=new A.D("Um QR para todos os eventos",null,C.O,null,null,null,null,null,null,null,null)
D.ccs=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.ch,C.a6,null,null,null,null,null,null,null)
D.cdi=new A.D("\xc0 procura de um QR\u2026",null,C.hl,null,null,null,null,null,null,null,null)
D.cdx=new A.D("Entrada",null,C.hm,null,null,null,null,null,null,null,null)
D.cdD=new A.D("Sem liga\xe7\xe3o",null,C.O,null,null,null,null,null,null,null,null)
D.cma=new B.abr(null)
D.cmh=new B.X9(null)
D.cmI=new B.ac1("D\xc1 ENTRADA EM",null)
D.cmJ=new B.ac1("HOJE",null)
D.co0=new B.aef("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cp2=new B.af5(null)
D.cpi=new B.afG(null)})()};
(a=>{a["mwHYcd1KASTvDSbuRevm69IbbIA="]=a.current})($__dart_deferred_initializers__);