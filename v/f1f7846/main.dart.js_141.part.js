((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dLd(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).h5(C.f.C(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMO(w,x)},
cJm(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJm=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.jI("partner_today",y.z),$async$cJm)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.ao(o==null?C.am:o)
while(o.t()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.q(n==null?"Evento":n)
m=A.C(J.i(q,"booking_number"))
l=A.aI(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aI(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bt(r,new A.aNe([k,n,m,l]))}}p=A.aI(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aI(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avw(r,p,o)
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
return A.m($async$cJm,w)},
avw:function avw(d,e,f){this.a=d
this.b=e
this.c=f},
dtj(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.dd(A.q(x==null?"":x))
w=A.C(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.C(J.i(i,"status")):k
if(s){s=A.aI(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aI(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.dd(A.q(p==null?"":p))
p=p==null?k:p.e1()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ao(j==null?C.am:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.dd(A.q(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aMA(A.dc(A.q(m.h(n,"at"))).e1(),l))}}return new B.TT(h,g,x,w,v,u,r,s,q,p,o)},
cJk(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJk=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.jI("my_entries",y.z),$async$cJk)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.bt(r,B.dtj(q))}v=r
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
return A.m($async$cJk,w)},
dKx(d){var x,w,v="public",u=$.R().b
u===$&&A.b()
x=u.gbA().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKr(w)
u=u.ch
u===$&&A.b()
return u.Ml(0,"entries-"+w,C.yI).Om(new B.cKo(d),C.H9,x.$1("user_id"),v,"event_checkins").Om(new B.cKp(d),C.H9,x.$1("user_id"),v,"booking_arrivals").Om(new B.cKq(d),C.Ha,x.$1("buyer_id"),v,"event_tickets").Qh(0)},
TT:function TT(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKr:function cKr(d){this.a=d},
cKo:function cKo(d){this.a=d},
cKp:function cKp(d){this.a=d},
cKq:function cKq(d){this.a=d},
dpS(){return new B.Jj(null)},
dcv(d){return C.f.aY(C.j.k(A.ic(d)),2,"0")+":"+C.f.aY(C.j.k(A.hY(d)),2,"0")},
Jj:function Jj(d){this.a=d},
b5_:function b5_(){},
af5:function af5(d){this.a=d},
af6:function af6(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
ca9:function ca9(d){this.a=d},
ca8:function ca8(d){this.a=d},
ca3:function ca3(d,e){this.a=d
this.b=e},
ca6:function ca6(d){this.a=d},
ca5:function ca5(d){this.a=d},
ca7:function ca7(d){this.a=d},
ca4:function ca4(d){this.a=d},
afG:function afG(d){this.a=d},
afH:function afH(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cg0:function cg0(d,e){this.a=d
this.b=e},
cg1:function cg1(){},
adn:function adn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVy:function bVy(d){this.a=d},
P8:function P8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aee:function aee(d,e){this.c=d
this.a=e},
ac0:function ac0(d,e){this.c=d
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
aGq:function aGq(d,e){this.c=d
this.a=e},
abq:function abq(d){this.a=d},
abr:function abr(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bH3:function bH3(d){this.a=d},
bH2:function bH2(){},
bH1:function bH1(d,e){this.a=d
this.b=e},
aST:function aST(){},
aTe:function aTe(){},
aTj:function aTj(){},
UO:function UO(d,e,f,g){var _=this
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
cqN:function cqN(){},
cqO:function cqO(d,e){this.a=d
this.b=e},
cqP:function cqP(d){this.a=d},
Xb:function Xb(d){this.a=d},
aEK:function aEK(d){this.a=d},
aTn:function aTn(){},
akr:function akr(){},
apO:function apO(d,e,f){this.c=d
this.a=e
this.b=f},
dt9(d,e){},
a4L:function a4L(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJq:function aJq(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9E:function c9E(d){this.a=d},
c9D:function c9D(d,e){this.a=d
this.b=e},
aTc:function aTc(){},
dt6(d,e){var x=null,w=d===D.arp?250:0
return new B.a4O(d,w,e,new A.ll(x,x,y.J),new B.xO(x,C.BD,x,!1,!1,C.aT,C.jj,1),$.aa())},
a4O:function a4O(d,e,f,g,h,i){var _=this
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
bi2:function bi2(d){this.a=d},
bi3:function bi3(d){this.a=d},
bi4:function bi4(d){this.a=d},
bi5:function bi5(d){this.a=d},
xO:function xO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayl:function ayl(d){this.a=d},
bAe:function bAe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAf:function bAf(){}},D,F,G,H,I,K,L
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
B.avw.prototype={}
B.TT.prototype={}
B.Jj.prototype={
bg(d,e){var x=y.E
return e.H(A.cI($.ba(),new B.b5_(),y.D,x),x)===C.dR?D.cpj:D.cp3}}
B.af5.prototype={
R(){return new B.af6()}}
B.af6.prototype={
ad(){var x=this
x.ar()
$.aA.b4$.push(x)
x.kv()
x.r=B.dKx(new B.ca9(x))},
m(){var x,w,v=this
$.aA.ie(v)
x=v.w
if(x!=null)x.aM(0)
x=v.r
if(x!=null){w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yh(x)}v.a6()},
ng(d){if(d===C.eu)this.kv()},
Dt(d){return this.b87(d)},
kv(){return this.Dt(!1)},
b87(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Dt=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.bzU:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJk(),$async$Dt)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.ca3(u,s))
if(!d||s==null){x=1
break}for(o=J.ao(s);o.t();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null,null)
p.a2(new A.bH(o,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.z,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Dt,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDs(),q=u.d,p=y.p
q=A.a([new B.P8("QR code",C.qN,!q,new B.ca6(u),t),new B.P8("Scannear",C.vN,q,new B.ca7(u),t)],p)
if(u.d)p=D.bg1
else{x=A.a([D.cmb,C.R,D.aki,C.bs,D.cmJ,C.av],p)
w=s==null
if(w&&!u.f)x.push(L.a9c)
else if(w)x.push(new B.aho(r,t))
else{w=J.a7(s)
if(w.gZ(s))x.push(D.bM9)
else{v=A.a([],p)
for(w=w.gX(s);w.t();)C.e.n(v,A.a([D.qp,new B.aGq(w.gE(w),t)],p))
v.push(D.qp)
C.e.n(x,v)}}p=x}return new B.adn(r,q,p,t)}}
B.afG.prototype={
R(){return new B.afH()}}
B.afH.prototype={
ad(){this.ar()
$.aA.b4$.push(this)
this.kv()},
m(){$.aA.ie(this)
this.a6()},
ng(d){if(d===C.eu)this.kv()},
kv(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJm(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cg0(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
R1(){var x=0,w=A.n(y.H),v=this,u
var $async$R1=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ah(u).av("/cobrar",null,y.X),$async$R1)
case 2:if(v.c!=null)v.kv()
return A.l(null,w)}})
return A.m($async$R1,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDs(),k=y.p,j=A.a([new B.P8("Scannear",C.vN,!0,new B.cg1(),n),new B.P8("Cobrar",C.vH,!1,o.gaUu(),n)],k),i=A.a([D.co1,C.R,new B.UO(290,!1,l,n),C.bs,D.cmK,C.av],k),h=m==null
if(h&&!o.e)i.push(D.bZh)
else if(h)i.push(new B.aho(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bLV)
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
h.push(new B.aj5("Cobrado hoje",k,n,!1,F.cII(m.b),n))
h.push(D.qp)
C.e.n(i,h)}return new B.adn(l,j,i,n)}}
B.adn.prototype={
u(d){var x=null,w=C.Di.B(0,new A.a2(0,A.ax(d,C.b4,y.w).w.r.b,0,0)),v=A.a([new A.cZ(C.bg,x,x,A.pZ(C.lQ,new B.bVy(d),"Voltar"),x),C.R,D.cdA,C.aC,A.e1(C.bf,this.d,C.r,C.bl,8,8),C.aC],y.p)
C.e.n(v,this.e)
return A.cP(x,C.bA,A.bF(!0,A.yg(A.d0(v,x,w,x,x,!1,C.a3,!1),x,this.c),x,C.a_,!1),!0,x)}}
B.P8.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.A,t=v?$.au:C.t
return A.b8(w,!0,w,A.fq(!1,C.aE,!0,w,A.eC(!1,w,!0,A.aH(new A.Q(C.bU,A.N(A.a([A.b4(x.d,u,w,w,16),C.bm,A.h(x.c,w,w,w,w,A.aJ(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.w,C.h,C.K,0,w,w),w),38,w),C.ae,!0,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ae,w,w,C.cE),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.aee.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.N,x,x,x)}}
B.ac0.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aJ,x,x,x)}}
B.aho.prototype={
u(d){var x=null
return new A.Q(C.qv,A.x(A.a([D.ccv,A.cx(C.tx,x,x,this.c,x,x)],y.p),C.w,C.h,C.l,0,C.u),x)}}
B.aj5.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.ab,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.N,u,u,u))
t=A.a([A.a4(A.x(s,C.H,C.h,C.l,0,C.u),1),C.ah],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cA:C.dV
w=A.V(999)
t.push(A.z(u,A.h(s,u,u,u,u,A.aJ(u,u,r?C.d_:C.cr,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(x,u,u,w,u,u,C.y),u,u,u,C.dn,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.ab,u,u,u))
return new A.Q(C.co,A.N(t,C.w,C.h,C.l,0,u,u),u)}}
B.aiL.prototype={
u(d){var x=null,w=this.d,v=w?C.cA:C.dV,u=A.V(999)
return A.z(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?C.d_:C.cr,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.y),x,x,x,C.dn,x,x,x)}}
B.aGq.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dB[A.fE(l)-1]+", "+A.aC(l)+" "+C.by[A.ar(l)-1])
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
if(k!=null)s=new A.a_("Entrou \xe0s "+B.dcv(k),!0)
else if(t!=null){k=new A.a_("Chegou \xe0s "+B.dcv(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bTr
else if(x)k=D.bSw
else k=m.f?D.bRZ:D.bT5
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.ab,n,n,n)],k)
if(u.length!==0)x.push(new A.Q(K.NA,A.h(u,n,n,n,n,C.N,n,n,n),n))
return new A.Q(C.co,A.N(A.a([A.a4(A.x(x,C.H,C.h,C.l,0,C.u),1),C.ah,new B.aiL(o,q,n)],k),C.H,C.h,C.l,0,n,n),n)}}
B.abq.prototype={
R(){return new B.abr(new A.ac(Date.now(),0,!1),C.nx)}}
B.abr.prototype={
ad(){var x=this
x.ar()
$.aA.b4$.push(x)
x.kv()
x.as=A.u8(C.fT,new B.bH3(x))},
m(){var x,w=this
$.aA.ie(w)
x=w.Q
if(x!=null)x.aM(0)
x=w.as
if(x!=null)x.aM(0)
w.a6()},
ng(d){var x
if(d===C.eu)this.kv()
else if(d===C.mT){x=this.Q
if(x!=null)x.aM(0)}},
kv(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aM(0)
x=3
return A.d(A.aV9(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bH1(u,t))
s=t==null?null:t.b
if(s==null)s=C.nz
u.Q=A.dh(s,u.gDs())
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().H($.ba(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.C(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.C(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cL(new A.ac(Date.now(),0,!1)).a
v=x<0?0:C.k.eG(C.j.aS(x,1000)/1000)
u=C.k.ag(C.j.aS(x,1000)/C.j.aS(o.z.a,1000),0,1)
x=A.V(16)
t=A.bB(C.fr,0.5)
s=A.V(16)
r=A.bB(C.fr,0.5)
k=!k
if(k)q=A.cWY(C.t,A.kC("/q/"+l.a),C.Hc,C.Hd,C.a_,"C\xf3digo QR da conta",186)
else q=o.x?D.bYQ:A.bN(A.x(A.a([C.aEu,C.aF,D.cdG,A.cx(C.tx,n,n,o.gDs(),n,n)],y.p),C.w,C.h,C.K,0,C.u),n,n)
p=y.p
s=A.a([A.z(n,A.aH(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.y),n,n,n,C.cB,n,n,214)],p)
if(k){k=A.V(2)
C.e.n(s,A.a([C.ad,A.z(C.bg,A.arl(C.L,A.z(n,n,C.r,n,n,new A.I(C.ut,n,n,A.V(2),n,n,C.y),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.fr,n,n,k,n,n,C.y),n,4,n,n,n,n,214),C.aF,A.b8(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.N,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.N(A.a([new A.cp(k,32,r,!1,!0,n),C.ah,new A.d8(1,C.b7,A.x(A.a([A.h(w,n,n,n,n,C.ab,n,n,n),D.c9C],p),C.H,C.h,C.l,0,C.u),n)],p),C.w,C.bW,C.l,0,n,n))
return A.z(n,A.x(s,C.w,C.h,C.l,0,C.u),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.y),n,n,n,C.cB,n,n,n)}}
B.aST.prototype={}
B.aTe.prototype={}
B.aTj.prototype={}
B.UO.prototype={
R(){return new B.agw(B.dt6(D.aro,D.bsS),null,null)}}
B.agw.prototype={
gKM(){var x,w=this,v=w.e
if(v===$){x=A.cE(null,E.Nk,null,1,null,w)
w.e!==$&&A.aX()
w.e=x
v=x}return v},
ad(){this.ar()
$.aA.b4$.push(this)},
bL(){var x,w,v=this
v.d6()
x=v.c
x.toString
if(A.ax(x,null,y.w).w.ax)v.gKM().d5(0)
else{x=v.gKM()
w=x.r
if(!(w!=null&&w.a!=null))x.ad7(0,!0)}},
ng(d){if(this.f)return
if(d===C.eu)this.d.kh(0)
else if(d===C.mT)this.d.d5(0)},
m(){var x=this
$.aA.ie(x)
x.gKM().m()
x.d.m()
x.aQ3()},
E2(d){return this.b9V(d)},
b9V(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$E2=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dLd(t)
if(p==null){s=u.c.O(y.q).f
s.aAa()
s.a2(D.c_b)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d5(0),$async$E2)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ah(r).av(m,null,y.X),$async$E2)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.kh(0),$async$E2)
case 5:case 1:return A.l(v,w)}})
return A.m($async$E2,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fV(A.V(16),A.aH(new A.bD(C.aA,w,C.e8,C.z,A.a([C.jy,new B.a4L(t,x.gb9U(),new B.cqN(),w),A.bN(A.aH(new A.bD(C.aA,w,C.aG,C.z,A.a([D.bQF,A.f9(x.gKM(),new B.cqO(x,u),w)],s),w),u,u),w,w),A.ce(16,A.bN(A.z(w,D.cdl,C.r,w,w,new A.I(C.t,w,w,A.V(999),w,w,C.y),w,w,w,C.dn,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.ba)],s)
if(x.a.d)s.push(new A.lk(t,new B.cqP(x),w,w,y.n))
return A.x(s,C.G,C.h,C.l,0,C.u)}}
B.Xb.prototype={
u(d){return D.aq6}}
B.aEK.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aD(),m=A.bc()
m.r=C.t.gv(0)
m.b=C.bR
m.c=4
m.d=C.ha
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cB(n,C.aR,o,o,A.a([],v))
u.aB(new A.f1(2,44))
u.aB(new A.cS(2,16))
u.Ay(D.bKg,D.yA)
u.aB(new A.cS(44,2))
d.dS(u,m)
u=new A.cB(n,C.aR,o,o,A.a([],v))
t=x-44
u.aB(new A.f1(t,2))
s=x-16
u.aB(new A.cS(s,2))
r=x-2
u.Ay(new A.M(r,16),D.yA)
u.aB(new A.cS(r,44))
d.dS(u,m)
u=new A.cB(n,C.aR,o,o,A.a([],v))
q=w-44
u.aB(new A.f1(r,q))
p=w-16
u.aB(new A.cS(r,p))
r=w-2
u.Ay(new A.M(s,r),D.yA)
u.aB(new A.cS(t,r))
d.dS(u,m)
v=new A.cB(n,C.aR,o,o,A.a([],v))
v.aB(new A.f1(44,r))
v.aB(new A.cS(16,r))
v.Ay(new A.M(2,p),D.yA)
v.aB(new A.cS(2,q))
d.dS(v,m)},
dP(d){return!1}}
B.aTn.prototype={}
B.akr.prototype={
m(){var x=this,w=x.bH$
if(w!=null)w.a_(0,x.ghr())
x.bH$=null
x.a6()},
bU(){this.cA()
this.d3()
this.hs()}}
B.apO.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4L.prototype={
R(){return new B.aJq()}}
B.aJq.prototype={
b8R(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lk(x,new B.c9E(this),null,null,y.n)},
Yj(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$Yj=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.ha(t,A.u(t).i("ha<1>")).Yx(s.d,!1,B.dKR())
x=2
return A.d(u.kh(0),$async$Yj)
case 2:return A.l(null,w)}})
return A.m($async$Yj,w)},
N4(){var x=0,w=A.n(y.H),v=this,u
var $async$N4=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aM(0)
x=2
return A.d(y.x.b(u)?u:A.ej(u,y.H),$async$N4)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d5(0),$async$N4)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$N4,w)},
ad(){var x,w=this
w.ar()
x=w.a.c
w.d!==$&&A.bv()
w.d=x
w.Yj()},
m(){this.a6()
this.N4()},
ng(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.y5}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.kh(0)
break
case 2:w.d5(0)
break}}}
B.aTc.prototype={}
B.a4O.prototype={
bjd(){var x=this
x.CW=$.HX().gawd().Yx(new B.bi2(x),!1,new B.bi3(x))
x.cx=$.HX().gaDG().lr(new B.bi4(x))
x.cy=$.HX().gaEK().lr(new B.bi5(x))},
b98(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aM(0)
w=x.cx
if(w!=null)w.aM(0)
w=x.cy
if(w!=null)w.aM(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bs5(!1,w.r===C.jj?C.jj:C.ac1))
return!0},
kh(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$kh=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xN(C.y4,A.xM(null,null,C.y4.geT(0))))
if(s.a.e){x=1
break}r=C.BD
q=new B.bAe(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bjd()
x=7
return A.d($.HX().lE(0,q),$async$kh)
case 7:p=f
if(!s.db)s.sv(0,s.a.bso(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tB){o=m
if(!s.db)s.sv(0,s.a.bsq(C.BD,o,!0,!1,C.aT,C.jj,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kh,w)},
d5(d){var x=0,w=A.n(y.H),v=this
var $async$d5=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b98()?2:3
break
case 2:x=4
return A.d($.HX().d5(0),$async$d5)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d5,w)},
u_(){var x=0,w=A.n(y.H),v,u=this,t
var $async$u_=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.ak(A.xN(C.a22,A.xM(null,null,C.a22.geT(0))))
if(u.db)A.ak(A.xN(C.y4,A.xM(null,null,C.y4.geT(0))))
if(!t.e){x=1
break}if(t.r===C.jj){x=1
break}x=3
return A.d($.HX().u_(),$async$u_)
case 3:case 1:return A.l(v,w)}})
return A.m($async$u_,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.fX()
x=3
return A.d($.HX().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xO.prototype={
My(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xO(w,v,f,u,t,s,r,k==null?x.w:k)},
bs5(d,e){var x=null
return this.My(x,x,x,x,d,x,e,x)},
bso(d,e,f,g,h,i){return this.My(d,e,null,f,g,h,i,null)},
bsq(d,e,f,g,h,i,j){return this.My(null,d,e,f,g,h,i,j)},
brP(d){var x=null
return this.My(x,x,x,x,x,x,x,d)},
brK(d){var x=null
return this.My(x,x,x,x,x,x,d,x)}}
B.ayl.prototype={
u(d){var x=null,w=A.a([D.bLC],y.p)
w.push(A.h(C.k4.geT(0),x,x,x,x,C.aay,x,x,x))
return A.kI(A.bN(A.x(w,C.w,C.h,C.K,0,C.u),x,x),C.ap,!0)}}
B.bAe.prototype={
a_l(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("aj<1,v>")
x=A.U(new A.aj(x,new B.bAf(),w),w.i("aZ.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:y})","F<~>(my)","Xb(O,tB,e?)","cj(O,xO,e?)","e(O,xO,e?)","~(L,bX)"])
B.cKr.prototype={
$1(d){return new H.Fw(I.yv,d,this.a)},
$S:1376}
B.cKo.prototype={
$1(d){return this.a.$0()},
$S:134}
B.cKp.prototype={
$1(d){return this.a.$0()},
$S:134}
B.cKq.prototype={
$1(d){return this.a.$0()},
$S:134}
B.b5_.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:112}
B.ca9.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aM(0)
x.w=A.dh(C.fU,new B.ca8(x))},
$S:0}
B.ca8.prototype={
$0(){return this.a.Dt(!0)},
$S:0}
B.ca3.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.ca6.prototype={
$0(){var x=this.a
return x.p(new B.ca5(x))},
$S:0}
B.ca5.prototype={
$0(){return this.a.d=!1},
$S:0}
B.ca7.prototype={
$0(){var x=this.a
return x.p(new B.ca4(x))},
$S:0}
B.ca4.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cg0.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cg1.prototype={
$0(){},
$S:0}
B.bVy.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
B.bH3.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bH2())},
$S:64}
B.bH2.prototype={
$0(){},
$S:0}
B.bH1.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ac(w,0,!1).e6(v)
u.z=v>3e7?x:C.nx}},
$S:0}
B.cqN.prototype={
$3(d,e,f){return D.cmi},
$S:z+3}
B.cqO.prototype={
$2(d,e){var x=null,w=this.a.gKM().x
w===$&&A.b()
return A.ce(x,A.z(x,x,C.r,C.ut,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:213}
B.cqP.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jj)return C.au
x=t===C.ac2
t=x?C.cA:C.dV
w=A.V(999)
v=x?"Ligada":"Desligada"
return new A.Q(C.Ny,A.b8(u,!0,u,A.eC(!1,u,!0,A.z(u,A.N(A.a([D.aAm,A.z(u,A.h(v,u,u,u,u,A.aJ(u,u,x?C.d_:C.cr,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.y),u,u,u,C.dn,u,u,u)],y.p),C.w,C.h,C.l,0,u,u),C.r,u,G.iC,D.agU,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,this.a.d.gbDP(),u,u,u,u,u,u,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c9E.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aq7}x=e.c
if(x!=null){w=new B.ayl(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kp(new B.c9D(this.a,e))},
$S:z+5}
B.c9D.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b8R(u,e)
v.a.toString
x=u.f
v=A.ag(1/0,e.a,e.b)
u=A.ag(1/0,e.c,e.d)
w=A.x0(A.vX(A.DU(C.L,A.aH($.HX().awi(),x.b,x.a),C.r,C.bK),new A.ad(v,u)),C.z,null)
return w},
$S:117}
B.bi2.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1377}
B.bi3.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xg(d)},
$S:74}
B.bi4.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.brK(d))},
$S:1378}
B.bi5.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.brP(d))},
$S:121}
B.bAf.prototype={
$1(d){return d.c},
$S:1379};(function aliases(){var x=B.akr.prototype
x.aQ3=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af6.prototype,"gDs",0,0,null,["$1$announce","$0"],["Dt","kv"],1,0,0)
var t
w(t=B.afH.prototype,"gDs","kv",0)
w(t,"gaUu","R1",0)
w(B.abr.prototype,"gDs","kv",0)
v(B.agw.prototype,"gb9U","E2",2)
u(B,"dKR","dt9",6)
w(t=B.a4O.prototype,"gbDP","u_",0)
w(t,"geH","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.L,[B.avw,B.TT,B.xO,B.bAe])
v(A.bz,[B.cKr,B.cKo,B.cKp,B.cKq,B.b5_,B.bH3,B.cqN,B.cqP,B.c9E,B.bi2,B.bi3,B.bi4,B.bi5,B.bAf])
u(B.Jj,A.eq)
v(A.G,[B.af5,B.afG,B.UO,B.a4L])
v(A.Y,[B.aTe,B.aTj,B.aTn,B.aTc])
u(B.af6,B.aTe)
v(A.bR,[B.ca9,B.ca8,B.ca3,B.ca6,B.ca5,B.ca7,B.ca4,B.cg0,B.cg1,B.bVy,B.bH2,B.bH1])
u(B.afH,B.aTj)
v(A.J,[B.adn,B.P8,B.aee,B.ac0,B.aho,B.aj5,B.aiL,B.aGq,B.Xb,B.ayl])
u(B.abq,A.dD)
u(B.aST,A.dz)
u(B.abr,B.aST)
u(B.akr,B.aTn)
u(B.agw,B.akr)
v(A.cN,[B.cqO,B.c9D])
u(B.aEK,A.qz)
u(B.apO,A.f8)
u(B.aJq,B.aTc)
u(B.a4O,A.d3)
x(B.aST,A.ep)
x(B.aTe,A.ep)
x(B.aTj,A.ep)
x(B.aTn,A.ep)
w(B.akr,A.iw)
x(B.aTc,A.ep)})()
A.bq(b.typeUniverse,JSON.parse('{"af5":{"G":[],"e":[],"f":[]},"afG":{"G":[],"e":[],"f":[]},"abq":{"G":[],"e":[],"f":[]},"Jj":{"G":[],"e":[],"f":[]},"af6":{"Y":["af5"],"ep":[]},"afH":{"Y":["afG"],"ep":[]},"adn":{"J":[],"e":[],"f":[]},"P8":{"J":[],"e":[],"f":[]},"aee":{"J":[],"e":[],"f":[]},"ac0":{"J":[],"e":[],"f":[]},"aho":{"J":[],"e":[],"f":[]},"aj5":{"J":[],"e":[],"f":[]},"aiL":{"J":[],"e":[],"f":[]},"aGq":{"J":[],"e":[],"f":[]},"abr":{"Y":["abq"],"ep":[]},"UO":{"G":[],"e":[],"f":[]},"Xb":{"J":[],"e":[],"f":[]},"agw":{"Y":["UO"],"ep":[]},"aEK":{"aT":[]},"a4L":{"G":[],"e":[],"f":[]},"aJq":{"Y":["a4L"],"ep":[]},"a4O":{"d3":["xO"],"aT":[]},"ayl":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),x:x("F<~>"),k:x("r<kH>"),G:x("r<TT>"),v:x("r<fL>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dg"),Y:x("TT"),N:x("c"),n:x("lk<xO>"),J:x("ll<my>"),q:x("dn"),z:x("@"),r:x("t<TT>?"),g:x("t<@>?"),X:x("L?"),t:x("avw?"),E:x("rz?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ag8=new A.dN(C.u4,C.ac,C.u4,C.ac)
D.agU=new A.I(null,null,D.ag8,null,null,null,C.y)
D.cqM=new B.aiL("S\xf3 funciona na tua conta",!0,null)
D.aki=new A.fy(C.L,null,null,D.cqM,null)
D.c5X=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ciq=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c5X,C.a6,null,null,null,null,null,null,null)
D.bMu=new A.Q(C.ft,D.ciq,null)
D.akq=new A.fy(C.L,null,null,D.bMu,null)
D.aq6=new A.pf(C.cr,!0,D.akq,null)
D.aq7=new A.pf(C.ap,!0,null,null)
D.aro=new B.apO(0,0,"noDuplicates")
D.arp=new B.apO(1,1,"normal")
D.qp=new A.jV(0.5,0.5,null,null,C.fr,null)
D.cd6=new A.D("Lanterna",null,C.ch,null,null,null,null,null,null,null,null)
D.aAm=new A.bJ(1,C.at,D.cd6,null)
D.co0=new B.aee("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bRi=new B.UO(420,!0,null,null)
D.bg1=x([D.co0,C.R,D.bRi],y.p)
D.bsS=x([C.u0],y.k)
D.crs=x([],y.k)
D.bzU=x([],y.G)
D.bKg=new A.M(16,2)
D.aD4=new A.aV(57911,"MaterialIcons",null,!1)
D.aDC=new A.b7(D.aD4,null,C.t,null,null,null)
D.bLC=new A.Q(C.Nv,D.aDC,null)
D.cak=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.ch,null,null,null,null,null,null,null,null)
D.bLV=new A.Q(C.fV,D.cak,null)
D.cii=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.ch,null,null,null,null,null,null,null,null)
D.bM9=new A.Q(C.qv,D.cii,null)
D.cmZ=new B.aEK(null)
D.aqZ=new A.uU(D.cmZ,null,C.aT,null,null)
D.bQF=new A.eM(0,0,0,0,null,null,D.aqZ,null)
D.yA=new A.b2(14,14)
D.bRZ=new A.a_("Bilhete",!1)
D.bSw=new A.a_("Organizas",!1)
D.bT5=new A.a_("Por entrar",!1)
D.bTr=new A.a_("Sem bilhete pago",!1)
D.bYQ=new A.ix(186,186,8,C.dN,0,null)
D.bZh=new A.oN(2,C.a_,null)
D.c9Q=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.c_b=new A.bH(D.c9Q,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.z,null)
D.c9C=new A.D("Um QR para todos os eventos",null,C.N,null,null,null,null,null,null,null,null)
D.ccv=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.ch,C.a6,null,null,null,null,null,null,null)
D.cdl=new A.D("\xc0 procura de um QR\u2026",null,C.hm,null,null,null,null,null,null,null,null)
D.cdA=new A.D("Entrada",null,C.hn,null,null,null,null,null,null,null,null)
D.cdG=new A.D("Sem liga\xe7\xe3o",null,C.N,null,null,null,null,null,null,null,null)
D.cmb=new B.abq(null)
D.cmi=new B.Xb(null)
D.cmJ=new B.ac0("D\xc1 ENTRADA EM",null)
D.cmK=new B.ac0("HOJE",null)
D.co1=new B.aee("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cp3=new B.af5(null)
D.cpj=new B.afG(null)})()};
(a=>{a["hP7OKiJAJZm6PAnfyVZFZYEnddk="]=a.current})($__dart_deferred_initializers__);