((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dLo(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).h5(C.f.C(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMQ(w,x)},
cJv(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJv=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.jI("partner_today",y.z),$async$cJv)
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
l=A.aH(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aH(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bt(r,new A.aNg([k,n,m,l]))}}p=A.aH(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aH(J.i(s,"charged_count"))
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
return A.m($async$cJv,w)},
avy:function avy(d,e,f){this.a=d
this.b=e
this.c=f},
dtu(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d2(A.q(x==null?"":x))
w=A.C(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.C(J.i(i,"status")):k
if(s){s=A.aH(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aH(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d2(A.q(p==null?"":p))
p=p==null?k:p.dP()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ao(j==null?C.am:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.d2(A.q(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aMC(A.dd(A.q(m.h(n,"at"))).dP(),l))}}return new B.TU(h,g,x,w,v,u,r,s,q,p,o)},
cJt(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJt=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.jI("my_entries",y.z),$async$cJt)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.bt(r,B.dtu(q))}v=r
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
return A.m($async$cJt,w)},
dKI(d){var x,w,v="public",u=$.R().b
u===$&&A.b()
x=u.gbA().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKA(w)
u=u.ch
u===$&&A.b()
return u.Mn(0,"entries-"+w,C.yJ).On(new B.cKx(d),C.H9,x.$1("user_id"),v,"event_checkins").On(new B.cKy(d),C.H9,x.$1("user_id"),v,"booking_arrivals").On(new B.cKz(d),C.Ha,x.$1("buyer_id"),v,"event_tickets").Qi(0)},
TU:function TU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKA:function cKA(d){this.a=d},
cKx:function cKx(d){this.a=d},
cKy:function cKy(d){this.a=d},
cKz:function cKz(d){this.a=d},
dq2(){return new B.Jk(null)},
dcG(d){return C.f.aY(C.j.k(A.ic(d)),2,"0")+":"+C.f.aY(C.j.k(A.hY(d)),2,"0")},
Jk:function Jk(d){this.a=d},
b51:function b51(){},
af7:function af7(d){this.a=d},
af8:function af8(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
cai:function cai(d){this.a=d},
cah:function cah(d){this.a=d},
cac:function cac(d,e){this.a=d
this.b=e},
caf:function caf(d){this.a=d},
cae:function cae(d){this.a=d},
cag:function cag(d){this.a=d},
cad:function cad(d){this.a=d},
afI:function afI(d){this.a=d},
afJ:function afJ(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cg9:function cg9(d,e){this.a=d
this.b=e},
cga:function cga(){},
adp:function adp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVH:function bVH(d){this.a=d},
P9:function P9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aeg:function aeg(d,e){this.c=d
this.a=e},
ac2:function ac2(d,e){this.c=d
this.a=e},
ahq:function ahq(d,e){this.c=d
this.a=e},
aj7:function aj7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiN:function aiN(d,e,f){this.c=d
this.d=e
this.a=f},
aGs:function aGs(d,e){this.c=d
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
bH5:function bH5(d){this.a=d},
bH4:function bH4(){},
bH3:function bH3(d,e){this.a=d
this.b=e},
aSV:function aSV(){},
aTg:function aTg(){},
aTl:function aTl(){},
UP:function UP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agy:function agy(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ej$=e
_.bH$=f
_.c=_.a=null},
cqW:function cqW(){},
cqX:function cqX(d,e){this.a=d
this.b=e},
cqY:function cqY(d){this.a=d},
Xc:function Xc(d){this.a=d},
aEM:function aEM(d){this.a=d},
aTp:function aTp(){},
akt:function akt(){},
apQ:function apQ(d,e,f){this.c=d
this.a=e
this.b=f},
dtk(d,e){},
a4M:function a4M(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJs:function aJs(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9N:function c9N(d){this.a=d},
c9M:function c9M(d,e){this.a=d
this.b=e},
aTe:function aTe(){},
dth(d,e){var x=null,w=d===D.arq?250:0
return new B.a4P(d,w,e,new A.ll(x,x,y.J),new B.xO(x,C.BE,x,!1,!1,C.aT,C.jk,1),$.aa())},
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
bi4:function bi4(d){this.a=d},
bi5:function bi5(d){this.a=d},
bi6:function bi6(d){this.a=d},
bi7:function bi7(d){this.a=d},
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
bAg:function bAg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAh:function bAh(){}},D,F,G,H,I,K,L
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
B.avy.prototype={}
B.TU.prototype={}
B.Jk.prototype={
bg(d,e){var x=y.E
return e.H(A.cI($.ba(),new B.b51(),y.D,x),x)===C.dR?D.cpk:D.cp4}}
B.af7.prototype={
R(){return new B.af8()}}
B.af8.prototype={
ac(){var x=this
x.au()
$.aB.b4$.push(x)
x.kv()
x.r=B.dKI(new B.cai(x))},
m(){var x,w,v=this
$.aB.ie(v)
x=v.w
if(x!=null)x.aM(0)
x=v.r
if(x!=null){w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yh(x)}v.a6()},
ng(d){if(d===C.ev)this.kv()},
Du(d){return this.b8a(d)},
kv(){return this.Du(!1)},
b8a(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Du=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.bzW:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJt(),$async$Du)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.cac(u,s))
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
return A.m($async$Du,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDt(),q=u.d,p=y.p
q=A.a([new B.P9("QR code",C.qQ,!q,new B.caf(u),t),new B.P9("Scannear",C.vO,q,new B.cag(u),t)],p)
if(u.d)p=D.bg2
else{x=A.a([D.cmc,C.R,D.aki,C.bt,D.cmK,C.av],p)
w=s==null
if(w&&!u.f)x.push(L.a9c)
else if(w)x.push(new B.ahq(r,t))
else{w=J.a7(s)
if(w.gZ(s))x.push(D.bMa)
else{v=A.a([],p)
for(w=w.gX(s);w.t();)C.e.n(v,A.a([D.qr,new B.aGs(w.gE(w),t)],p))
v.push(D.qr)
C.e.n(x,v)}}p=x}return new B.adp(r,q,p,t)}}
B.afI.prototype={
R(){return new B.afJ()}}
B.afJ.prototype={
ac(){this.au()
$.aB.b4$.push(this)
this.kv()},
m(){$.aB.ie(this)
this.a6()},
ng(d){if(d===C.ev)this.kv()},
kv(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJv(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cg9(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
R2(){var x=0,w=A.n(y.H),v=this,u
var $async$R2=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ag(u).ap("/cobrar",null,y.X),$async$R2)
case 2:if(v.c!=null)v.kv()
return A.l(null,w)}})
return A.m($async$R2,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDt(),k=y.p,j=A.a([new B.P9("Scannear",C.vO,!0,new B.cga(),n),new B.P9("Cobrar",C.o7,!1,o.gaUx(),n)],k),i=A.a([D.co2,C.R,new B.UP(290,!1,l,n),C.bt,D.cmL,C.av],k),h=m==null
if(h&&!o.e)i.push(D.bZi)
else if(h)i.push(new B.ahq(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bLW)
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
t=p}C.e.n(h,A.a([D.qr,new B.aj7(s,r,t,q>0,n,n)],k))}h.push(D.qr)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aj7("Cobrado hoje",k,n,!1,F.cIR(m.b),n))
h.push(D.qr)
C.e.n(i,h)}return new B.adp(l,j,i,n)}}
B.adp.prototype={
u(d){var x=null,w=C.Dj.B(0,new A.a2(0,A.ax(d,C.b4,y.w).w.r.b,0,0)),v=A.a([new A.cZ(C.bg,x,x,A.q_(C.lX,new B.bVH(d),"Voltar"),x),C.R,D.cdB,C.aC,A.e1(C.bf,this.d,C.r,C.bl,8,8),C.aC],y.p)
C.e.n(v,this.e)
return A.cP(x,C.bA,A.bF(!0,A.yg(A.d0(v,x,w,x,x,!1,C.a3,!1),x,this.c),x,C.a_,!1),!0,x)}}
B.P9.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.A,t=v?$.au:C.t
return A.b8(w,!0,w,A.fq(!1,C.aE,!0,w,A.eC(!1,w,!0,A.aI(new A.Q(C.bU,A.N(A.a([A.b4(x.d,u,w,w,16),C.bn,A.h(x.c,w,w,w,w,A.aJ(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.w,C.h,C.K,0,w,w),w),38,w),C.ae,!0,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ae,w,w,C.cE),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.aeg.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.N,x,x,x)}}
B.ac2.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aJ,x,x,x)}}
B.ahq.prototype={
u(d){var x=null
return new A.Q(C.qx,A.x(A.a([D.ccw,A.cx(C.tA,x,x,this.c,x,x)],y.p),C.w,C.h,C.l,0,C.u),x)}}
B.aj7.prototype={
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
B.aiN.prototype={
u(d){var x=null,w=this.d,v=w?C.cA:C.dV,u=A.V(999)
return A.z(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?C.d_:C.cr,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.y),x,x,x,C.dn,x,x,x)}}
B.aGs.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dt[A.fr(l)-1]+", "+A.aA(l)+" "+C.bm[A.ar(l)-1])
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
if(k!=null)s=new A.Z("Entrou \xe0s "+B.dcG(k),!0)
else if(t!=null){k=new A.Z("Chegou \xe0s "+B.dcG(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bTs
else if(x)k=D.bSx
else k=m.f?D.bS_:D.bT6
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.ab,n,n,n)],k)
if(u.length!==0)x.push(new A.Q(K.NA,A.h(u,n,n,n,n,C.N,n,n,n),n))
return new A.Q(C.co,A.N(A.a([A.a4(A.x(x,C.H,C.h,C.l,0,C.u),1),C.ah,new B.aiN(o,q,n)],k),C.H,C.h,C.l,0,n,n),n)}}
B.abr.prototype={
R(){return new B.abs(new A.ab(Date.now(),0,!1),C.nz)}}
B.abs.prototype={
ac(){var x=this
x.au()
$.aB.b4$.push(x)
x.kv()
x.as=A.u9(C.fU,new B.bH5(x))},
m(){var x,w=this
$.aB.ie(w)
x=w.Q
if(x!=null)x.aM(0)
x=w.as
if(x!=null)x.aM(0)
w.a6()},
ng(d){var x
if(d===C.ev)this.kv()
else if(d===C.mX){x=this.Q
if(x!=null)x.aM(0)}},
kv(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aM(0)
x=3
return A.d(A.aVb(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bH3(u,t))
s=t==null?null:t.b
if(s==null)s=C.nB
u.Q=A.dh(s,u.gDt())
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().H($.ba(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.C(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.C(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cH(new A.ab(Date.now(),0,!1)).a
v=x<0?0:C.k.eG(C.j.aQ(x,1000)/1000)
u=C.k.ag(C.j.aQ(x,1000)/C.j.aQ(o.z.a,1000),0,1)
x=A.V(16)
t=A.bB(C.fr,0.5)
s=A.V(16)
r=A.bB(C.fr,0.5)
k=!k
if(k)q=A.cX6(C.t,A.kC("/q/"+l.a),C.Hc,C.Hd,C.a_,"C\xf3digo QR da conta",186)
else q=o.x?D.bYR:A.bN(A.x(A.a([C.aEv,C.aF,D.cdH,A.cx(C.tA,n,n,o.gDt(),n,n)],y.p),C.w,C.h,C.K,0,C.u),n,n)
p=y.p
s=A.a([A.z(n,A.aI(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.y),n,n,n,C.cB,n,n,214)],p)
if(k){k=A.V(2)
C.e.n(s,A.a([C.ad,A.z(C.bg,A.arn(C.L,A.z(n,n,C.r,n,n,new A.I(C.uw,n,n,A.V(2),n,n,C.y),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.fr,n,n,k,n,n,C.y),n,4,n,n,n,n,214),C.aF,A.b8(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.N,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.N(A.a([new A.cp(k,32,r,!1,!0,n),C.ah,new A.d9(1,C.b7,A.x(A.a([A.h(w,n,n,n,n,C.ab,n,n,n),D.c9D],p),C.H,C.h,C.l,0,C.u),n)],p),C.w,C.bW,C.l,0,n,n))
return A.z(n,A.x(s,C.w,C.h,C.l,0,C.u),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.y),n,n,n,C.cB,n,n,n)}}
B.aSV.prototype={}
B.aTg.prototype={}
B.aTl.prototype={}
B.UP.prototype={
R(){return new B.agy(B.dth(D.arp,D.bsT),null,null)}}
B.agy.prototype={
gKO(){var x,w=this,v=w.e
if(v===$){x=A.cE(null,E.Nk,null,1,null,w)
w.e!==$&&A.aX()
w.e=x
v=x}return v},
ac(){this.au()
$.aB.b4$.push(this)},
bL(){var x,w,v=this
v.d6()
x=v.c
x.toString
if(A.ax(x,null,y.w).w.ax)v.gKO().d5(0)
else{x=v.gKO()
w=x.r
if(!(w!=null&&w.a!=null))x.ada(0,!0)}},
ng(d){if(this.f)return
if(d===C.ev)this.d.kh(0)
else if(d===C.mX)this.d.d5(0)},
m(){var x=this
$.aB.ie(x)
x.gKO().m()
x.d.m()
x.aQ6()},
E3(d){return this.b9Y(d)},
b9Y(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$E3=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dLo(t)
if(p==null){s=u.c.O(y.q).f
s.aAd()
s.a2(D.c_c)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d5(0),$async$E3)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ag(r).ap(m,null,y.X),$async$E3)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.kh(0),$async$E3)
case 5:case 1:return A.l(v,w)}})
return A.m($async$E3,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fW(A.V(16),A.aI(new A.bD(C.aA,w,C.e8,C.z,A.a([C.jz,new B.a4M(t,x.gb9X(),new B.cqW(),w),A.bN(A.aI(new A.bD(C.aA,w,C.aG,C.z,A.a([D.bQG,A.f9(x.gKO(),new B.cqX(x,u),w)],s),w),u,u),w,w),A.ce(16,A.bN(A.z(w,D.cdm,C.r,w,w,new A.I(C.t,w,w,A.V(999),w,w,C.y),w,w,w,C.dn,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.ba)],s)
if(x.a.d)s.push(new A.lk(t,new B.cqY(x),w,w,y.n))
return A.x(s,C.G,C.h,C.l,0,C.u)}}
B.Xc.prototype={
u(d){return D.aq7}}
B.aEM.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aD(),m=A.bc()
m.r=C.t.gv(0)
m.b=C.bR
m.c=4
m.d=C.hc
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cB(n,C.aR,o,o,A.a([],v))
u.aB(new A.f1(2,44))
u.aB(new A.cS(2,16))
u.Az(D.bKh,D.yB)
u.aB(new A.cS(44,2))
d.dT(u,m)
u=new A.cB(n,C.aR,o,o,A.a([],v))
t=x-44
u.aB(new A.f1(t,2))
s=x-16
u.aB(new A.cS(s,2))
r=x-2
u.Az(new A.M(r,16),D.yB)
u.aB(new A.cS(r,44))
d.dT(u,m)
u=new A.cB(n,C.aR,o,o,A.a([],v))
q=w-44
u.aB(new A.f1(r,q))
p=w-16
u.aB(new A.cS(r,p))
r=w-2
u.Az(new A.M(s,r),D.yB)
u.aB(new A.cS(t,r))
d.dT(u,m)
v=new A.cB(n,C.aR,o,o,A.a([],v))
v.aB(new A.f1(44,r))
v.aB(new A.cS(16,r))
v.Az(new A.M(2,p),D.yB)
v.aB(new A.cS(2,q))
d.dT(v,m)},
dQ(d){return!1}}
B.aTp.prototype={}
B.akt.prototype={
m(){var x=this,w=x.bH$
if(w!=null)w.a_(0,x.ghs())
x.bH$=null
x.a6()},
bU(){this.cB()
this.d3()
this.ht()}}
B.apQ.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4M.prototype={
R(){return new B.aJs()}}
B.aJs.prototype={
b8U(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lk(x,new B.c9N(this),null,null,y.n)},
Yn(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$Yn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.ha(t,A.u(t).i("ha<1>")).YB(s.d,!1,B.dL1())
x=2
return A.d(u.kh(0),$async$Yn)
case 2:return A.l(null,w)}})
return A.m($async$Yn,w)},
N6(){var x=0,w=A.n(y.H),v=this,u
var $async$N6=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aM(0)
x=2
return A.d(y.x.b(u)?u:A.ej(u,y.H),$async$N6)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d5(0),$async$N6)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$N6,w)},
ac(){var x,w=this
w.au()
x=w.a.c
w.d!==$&&A.bv()
w.d=x
w.Yn()},
m(){this.a6()
this.N6()},
ng(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.y6}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.kh(0)
break
case 2:w.d5(0)
break}}}
B.aTe.prototype={}
B.a4P.prototype={
bjg(){var x=this
x.CW=$.HX().gawg().YB(new B.bi4(x),!1,new B.bi5(x))
x.cx=$.HX().gaDJ().lr(new B.bi6(x))
x.cy=$.HX().gaEN().lr(new B.bi7(x))},
b9b(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aM(0)
w=x.cx
if(w!=null)w.aM(0)
w=x.cy
if(w!=null)w.aM(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bs8(!1,w.r===C.jk?C.jk:C.ac1))
return!0},
kh(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$kh=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xN(C.y5,A.xM(null,null,C.y5.geT(0))))
if(s.a.e){x=1
break}r=C.BE
q=new B.bAg(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bjg()
x=7
return A.d($.HX().lE(0,q),$async$kh)
case 7:p=f
if(!s.db)s.sv(0,s.a.bsr(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tC){o=m
if(!s.db)s.sv(0,s.a.bst(C.BE,o,!0,!1,C.aT,C.jk,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kh,w)},
d5(d){var x=0,w=A.n(y.H),v=this
var $async$d5=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b9b()?2:3
break
case 2:x=4
return A.d($.HX().d5(0),$async$d5)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d5,w)},
u_(){var x=0,w=A.n(y.H),v,u=this,t
var $async$u_=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.ak(A.xN(C.a22,A.xM(null,null,C.a22.geT(0))))
if(u.db)A.ak(A.xN(C.y5,A.xM(null,null,C.y5.geT(0))))
if(!t.e){x=1
break}if(t.r===C.jk){x=1
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
MA(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xO(w,v,f,u,t,s,r,k==null?x.w:k)},
bs8(d,e){var x=null
return this.MA(x,x,x,x,d,x,e,x)},
bsr(d,e,f,g,h,i){return this.MA(d,e,null,f,g,h,i,null)},
bst(d,e,f,g,h,i,j){return this.MA(null,d,e,f,g,h,i,j)},
brS(d){var x=null
return this.MA(x,x,x,x,x,x,x,d)},
brN(d){var x=null
return this.MA(x,x,x,x,x,x,d,x)}}
B.ayn.prototype={
u(d){var x=null,w=A.a([D.bLD],y.p)
w.push(A.h(C.k5.geT(0),x,x,x,x,C.aay,x,x,x))
return A.kI(A.bN(A.x(w,C.w,C.h,C.K,0,C.u),x,x),C.ap,!0)}}
B.bAg.prototype={
a_p(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("aj<1,v>")
x=A.U(new A.aj(x,new B.bAh(),w),w.i("aZ.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:y})","F<~>(mz)","Xc(O,tC,e?)","cj(O,xO,e?)","e(O,xO,e?)","~(L,bX)"])
B.cKA.prototype={
$1(d){return new H.Fw(I.yw,d,this.a)},
$S:1376}
B.cKx.prototype={
$1(d){return this.a.$0()},
$S:134}
B.cKy.prototype={
$1(d){return this.a.$0()},
$S:134}
B.cKz.prototype={
$1(d){return this.a.$0()},
$S:134}
B.b51.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:112}
B.cai.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aM(0)
x.w=A.dh(C.fV,new B.cah(x))},
$S:0}
B.cah.prototype={
$0(){return this.a.Du(!0)},
$S:0}
B.cac.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.caf.prototype={
$0(){var x=this.a
return x.p(new B.cae(x))},
$S:0}
B.cae.prototype={
$0(){return this.a.d=!1},
$S:0}
B.cag.prototype={
$0(){var x=this.a
return x.p(new B.cad(x))},
$S:0}
B.cad.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cg9.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cga.prototype={
$0(){},
$S:0}
B.bVH.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
B.bH5.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bH4())},
$S:68}
B.bH4.prototype={
$0(){},
$S:0}
B.bH3.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ab(w,0,!1).e3(v)
u.z=v>3e7?x:C.nz}},
$S:0}
B.cqW.prototype={
$3(d,e,f){return D.cmj},
$S:z+3}
B.cqX.prototype={
$2(d,e){var x=null,w=this.a.gKO().x
w===$&&A.b()
return A.ce(x,A.z(x,x,C.r,C.uw,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:213}
B.cqY.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jk)return C.au
x=t===C.ac2
t=x?C.cA:C.dV
w=A.V(999)
v=x?"Ligada":"Desligada"
return new A.Q(C.Ny,A.b8(u,!0,u,A.eC(!1,u,!0,A.z(u,A.N(A.a([D.aAn,A.z(u,A.h(v,u,u,u,u,A.aJ(u,u,x?C.d_:C.cr,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.y),u,u,u,C.dn,u,u,u)],y.p),C.w,C.h,C.l,0,u,u),C.r,u,G.iD,D.agU,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,this.a.d.gbDS(),u,u,u,u,u,u,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c9N.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aq8}x=e.c
if(x!=null){w=new B.ayn(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kp(new B.c9M(this.a,e))},
$S:z+5}
B.c9M.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b8U(u,e)
v.a.toString
x=u.f
v=A.ah(1/0,e.a,e.b)
u=A.ah(1/0,e.c,e.d)
w=A.x0(A.vX(A.DU(C.L,A.aI($.HX().awl(),x.b,x.a),C.r,C.bK),new A.ad(v,u)),C.z,null)
return w},
$S:117}
B.bi4.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1377}
B.bi5.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xg(d)},
$S:74}
B.bi6.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.brN(d))},
$S:1378}
B.bi7.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.brS(d))},
$S:121}
B.bAh.prototype={
$1(d){return d.c},
$S:1379};(function aliases(){var x=B.akt.prototype
x.aQ6=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af8.prototype,"gDt",0,0,null,["$1$announce","$0"],["Du","kv"],1,0,0)
var t
w(t=B.afJ.prototype,"gDt","kv",0)
w(t,"gaUx","R2",0)
w(B.abs.prototype,"gDt","kv",0)
v(B.agy.prototype,"gb9X","E3",2)
u(B,"dL1","dtk",6)
w(t=B.a4P.prototype,"gbDS","u_",0)
w(t,"geH","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.L,[B.avy,B.TU,B.xO,B.bAg])
v(A.bz,[B.cKA,B.cKx,B.cKy,B.cKz,B.b51,B.bH5,B.cqW,B.cqY,B.c9N,B.bi4,B.bi5,B.bi6,B.bi7,B.bAh])
u(B.Jk,A.eq)
v(A.G,[B.af7,B.afI,B.UP,B.a4M])
v(A.Y,[B.aTg,B.aTl,B.aTp,B.aTe])
u(B.af8,B.aTg)
v(A.bR,[B.cai,B.cah,B.cac,B.caf,B.cae,B.cag,B.cad,B.cg9,B.cga,B.bVH,B.bH4,B.bH3])
u(B.afJ,B.aTl)
v(A.J,[B.adp,B.P9,B.aeg,B.ac2,B.ahq,B.aj7,B.aiN,B.aGs,B.Xc,B.ayn])
u(B.abr,A.dA)
u(B.aSV,A.dt)
u(B.abs,B.aSV)
u(B.akt,B.aTp)
u(B.agy,B.akt)
v(A.cN,[B.cqX,B.c9M])
u(B.aEM,A.qA)
u(B.apQ,A.f8)
u(B.aJs,B.aTe)
u(B.a4P,A.d4)
x(B.aSV,A.ep)
x(B.aTg,A.ep)
x(B.aTl,A.ep)
x(B.aTp,A.ep)
w(B.akt,A.ix)
x(B.aTe,A.ep)})()
A.br(b.typeUniverse,JSON.parse('{"af7":{"G":[],"e":[],"f":[]},"afI":{"G":[],"e":[],"f":[]},"abr":{"G":[],"e":[],"f":[]},"Jk":{"G":[],"e":[],"f":[]},"af8":{"Y":["af7"],"ep":[]},"afJ":{"Y":["afI"],"ep":[]},"adp":{"J":[],"e":[],"f":[]},"P9":{"J":[],"e":[],"f":[]},"aeg":{"J":[],"e":[],"f":[]},"ac2":{"J":[],"e":[],"f":[]},"ahq":{"J":[],"e":[],"f":[]},"aj7":{"J":[],"e":[],"f":[]},"aiN":{"J":[],"e":[],"f":[]},"aGs":{"J":[],"e":[],"f":[]},"abs":{"Y":["abr"],"ep":[]},"UP":{"G":[],"e":[],"f":[]},"Xc":{"J":[],"e":[],"f":[]},"agy":{"Y":["UP"],"ep":[]},"aEM":{"aT":[]},"a4M":{"G":[],"e":[],"f":[]},"aJs":{"Y":["a4M"],"ep":[]},"a4P":{"d4":["xO"],"aT":[]},"ayn":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),x:x("F<~>"),k:x("r<kH>"),G:x("r<TU>"),v:x("r<fL>"),S:x("r<+at,partner(ab,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dg"),Y:x("TU"),N:x("c"),n:x("lk<xO>"),J:x("ll<mz>"),q:x("dn"),z:x("@"),r:x("t<TU>?"),g:x("t<@>?"),X:x("L?"),t:x("avy?"),E:x("rA?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ag8=new A.dN(C.u7,C.ac,C.u7,C.ac)
D.agU=new A.I(null,null,D.ag8,null,null,null,C.y)
D.cqN=new B.aiN("S\xf3 funciona na tua conta",!0,null)
D.aki=new A.fz(C.L,null,null,D.cqN,null)
D.c5Y=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cir=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c5Y,C.a6,null,null,null,null,null,null,null)
D.bMv=new A.Q(C.ft,D.cir,null)
D.akq=new A.fz(C.L,null,null,D.bMv,null)
D.aq7=new A.pg(C.cr,!0,D.akq,null)
D.aq8=new A.pg(C.ap,!0,null,null)
D.arp=new B.apQ(0,0,"noDuplicates")
D.arq=new B.apQ(1,1,"normal")
D.qr=new A.jV(0.5,0.5,null,null,C.fr,null)
D.cd7=new A.D("Lanterna",null,C.ch,null,null,null,null,null,null,null,null)
D.aAn=new A.bJ(1,C.at,D.cd7,null)
D.co1=new B.aeg("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bRj=new B.UP(420,!0,null,null)
D.bg2=x([D.co1,C.R,D.bRj],y.p)
D.bsT=x([C.u3],y.k)
D.crt=x([],y.k)
D.bzW=x([],y.G)
D.bKh=new A.M(16,2)
D.aD5=new A.aV(57911,"MaterialIcons",null,!1)
D.aDD=new A.b7(D.aD5,null,C.t,null,null,null)
D.bLD=new A.Q(C.Nv,D.aDD,null)
D.cal=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.ch,null,null,null,null,null,null,null,null)
D.bLW=new A.Q(C.fW,D.cal,null)
D.cij=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.ch,null,null,null,null,null,null,null,null)
D.bMa=new A.Q(C.qx,D.cij,null)
D.cn_=new B.aEM(null)
D.ar_=new A.uU(D.cn_,null,C.aT,null,null)
D.bQG=new A.eM(0,0,0,0,null,null,D.ar_,null)
D.yB=new A.b2(14,14)
D.bS_=new A.Z("Bilhete",!1)
D.bSx=new A.Z("Organizas",!1)
D.bT6=new A.Z("Por entrar",!1)
D.bTs=new A.Z("Sem bilhete pago",!1)
D.bYR=new A.iy(186,186,8,C.dN,0,null)
D.bZi=new A.oO(2,C.a_,null)
D.c9R=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.c_c=new A.bH(D.c9R,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.z,null)
D.c9D=new A.D("Um QR para todos os eventos",null,C.N,null,null,null,null,null,null,null,null)
D.ccw=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.ch,C.a6,null,null,null,null,null,null,null)
D.cdm=new A.D("\xc0 procura de um QR\u2026",null,C.ho,null,null,null,null,null,null,null,null)
D.cdB=new A.D("Entrada",null,C.hp,null,null,null,null,null,null,null,null)
D.cdH=new A.D("Sem liga\xe7\xe3o",null,C.N,null,null,null,null,null,null,null,null)
D.cmc=new B.abr(null)
D.cmj=new B.Xc(null)
D.cmK=new B.ac2("D\xc1 ENTRADA EM",null)
D.cmL=new B.ac2("HOJE",null)
D.co2=new B.aeg("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cp4=new B.af7(null)
D.cpk=new B.afI(null)})()};
(a=>{a["EdytnV88XDhZZlVBlouISBjON+Y="]=a.current})($__dart_deferred_initializers__);