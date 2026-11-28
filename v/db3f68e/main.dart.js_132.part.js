((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,G,B={
dGE(d){var x,w,v=A.aW("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).hC(C.f.D(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aLS(w,x)},
cFq(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cFq=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.jJ("partner_today",y.z),$async$cFq)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.h(s,"bookings"))
o=J.ar(o==null?C.aj:o)
while(o.t()){q=o.gE(o)
if(p.b(q)){n=J.h(q,"event")
n=A.q(n==null?"Evento":n)
m=A.C(J.h(q,"booking_number"))
l=A.aK(J.h(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aK(J.h(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bw(r,new A.aMi([k,n,m,l]))}}p=A.aK(J.h(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aK(J.h(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.auI(r,p,o)
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
return A.m($async$cFq,w)},
auI:function auI(d,e,f){this.a=d
this.b=e
this.c=f},
doO(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.dK(A.q(x==null?"":x))
w=A.C(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.C(J.h(i,"status")):k
if(s){s=A.aK(J.h(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aK(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.dK(A.q(p==null?"":p))
p=p==null?k:p.eh()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ar(j==null?C.aj:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.dK(A.q(J.h(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aLE(A.d9(A.q(m.h(n,"at"))).eh(),l))}}return new B.Tx(h,g,x,w,v,u,r,s,q,p,o)},
cFn(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cFn=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.jJ("my_entries",y.z),$async$cFn)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ar(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.bw(r,B.doO(q))}v=r
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
return A.m($async$cFn,w)},
dFZ(d){var x,w,v="public",u=$.T().b
u===$&&A.b()
x=u.gbE().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cGs(w)
u=u.ch
u===$&&A.b()
return u.M3(0,"entries-"+w,C.yf).O7(new B.cGp(d),C.GH,x.$1("user_id"),v,"event_checkins").O7(new B.cGq(d),C.GH,x.$1("user_id"),v,"booking_arrivals").O7(new B.cGr(d),C.GI,x.$1("buyer_id"),v,"event_tickets").Q2(0)},
Tx:function Tx(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cGs:function cGs(d){this.a=d},
cGp:function cGp(d){this.a=d},
cGq:function cGq(d){this.a=d},
cGr:function cGr(d){this.a=d},
dlm(){return new B.J6(null)},
dAK(d){return C.f.aW(C.i.k(A.hK(d)),2,"0")+":"+C.f.aW(C.i.k(A.ht(d)),2,"0")},
J6:function J6(d){this.a=d},
b3T:function b3T(){},
aex:function aex(d){this.a=d},
aey:function aey(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c7u:function c7u(d){this.a=d},
c7t:function c7t(d){this.a=d},
c7o:function c7o(d,e){this.a=d
this.b=e},
c7r:function c7r(d){this.a=d},
c7q:function c7q(d){this.a=d},
c7s:function c7s(d){this.a=d},
c7p:function c7p(d){this.a=d},
af8:function af8(d){this.a=d},
af9:function af9(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cdw:function cdw(d,e){this.a=d
this.b=e},
cdx:function cdx(){},
acT:function acT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bTg:function bTg(d){this.a=d},
OP:function OP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
adI:function adI(d,e){this.c=d
this.a=e},
abw:function abw(d,e){this.c=d
this.a=e},
agL:function agL(d,e){this.c=d
this.a=e},
ais:function ais(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFw:function aFw(d,e){this.c=d
this.a=e},
aSd:function aSd(){},
aSi:function aSi(){},
Ut:function Ut(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afV:function afV(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.eg$=e
_.bG$=f
_.c=_.a=null},
cna:function cna(){},
cnb:function cnb(d,e){this.a=d
this.b=e},
cnc:function cnc(d){this.a=d},
WP:function WP(d){this.a=d},
aDR:function aDR(d){this.a=d},
aSm:function aSm(){},
ajN:function ajN(){},
ap3:function ap3(d,e,f){this.c=d
this.a=e
this.b=f},
doE(d,e){},
a4m:function a4m(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aIx:function aIx(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c6Z:function c6Z(d){this.a=d},
c6Y:function c6Y(d,e){this.a=d
this.b=e},
aSb:function aSb(){},
doB(d,e){var x=null,w=d===D.aqG?250:0
return new B.a4p(d,w,e,new A.lj(x,x,y.J),new B.xG(x,C.Bc,x,!1,!1,C.aS,C.j8,1),$.ac())},
a4p:function a4p(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.X$=0
_.Z$=i
_.aG$=_.bn$=0},
bgX:function bgX(d){this.a=d},
bgY:function bgY(d){this.a=d},
bgZ:function bgZ(d){this.a=d},
bh_:function bh_(d){this.a=d},
xG:function xG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
axw:function axw(d){this.a=d},
bz3:function bz3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bz4:function bz4(){}},D,H,I,E,K,L,M,N
J=c[1]
A=c[0]
C=c[2]
F=c[268]
G=c[204]
B=a.updateHolder(c[13],B)
D=c[265]
H=c[86]
I=c[189]
E=c[269]
K=c[267]
L=c[118]
M=c[231]
N=c[266]
B.auI.prototype={}
B.Tx.prototype={}
B.J6.prototype={
bc(d,e){var x=y.E
return e.H(A.cv($.b8(),new B.b3T(),y.D,x),x)===C.dG?D.cnq:D.cn9}}
B.aex.prototype={
P(){return new B.aey()}}
B.aey.prototype={
al(){var x=this
x.aH()
$.az.b3$.push(x)
x.qb()
x.r=B.dFZ(new B.c7u(x))},
m(){var x,w,v=this
$.az.iB(v)
x=v.w
if(x!=null)x.aL(0)
x=v.r
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yf(x)}v.a7()},
o1(d){if(d===C.eH)this.qb()},
Dh(d){return this.b73(d)},
qb(){return this.Dh(!1)},
b73(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Dh=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.A(y.N,y.Y)
o=u.e
o=J.ar(o==null?D.bzO:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cFn(),$async$Dh)
case 3:s=f
if(u.c==null){x=1
break}u.q(new B.c7o(u,s))
if(!d||s==null){x=1
break}for(o=J.ar(s);o.t();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.i(q,null,null,null,null,null,null,null,null)
p.a4(new A.bI(o,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Dh,w)},
u(d){var x,w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga2G(),n=r.d,m=y.p
n=A.a([new B.OP("QR code",C.qu,!n,new B.c7r(r),q),new B.OP("Scannear",C.vm,n,new B.c7s(r),q)],m)
if(r.d)m=D.bf7
else{x=A.a([D.bIb,C.aB,D.ccd,C.cy,D.ckS,C.X],m)
w=p==null
if(w&&!r.f)x.push(N.a8H)
else if(w)x.push(new B.agL(o,q))
else if(J.dk(p))x.push(D.bLh)
else for(w=A.ew(p,0,y.Y),v=J.ar(w.a),u=w.b,w=new A.bX(v,u,A.u(w).i("bX<1>"));w.t();){t=w.c
t=t>=0?new A.a3(u+t,v.gE(v)):A.aj(A.c1())
s=A.a([],m)
if(t.a>0)s.push(C.fi)
s.push(new B.aFw(t.b,q))
C.e.n(x,s)}m=x}return new B.acT(o,n,m,q)}}
B.af8.prototype={
P(){return new B.af9()}}
B.af9.prototype={
al(){this.aH()
$.az.b3$.push(this)
this.qb()},
m(){$.az.iB(this)
this.a7()},
o1(d){if(d===C.eH)this.qb()},
qb(){var x=0,w=A.n(y.H),v,u=this,t
var $async$qb=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cFq(),$async$qb)
case 3:t=e
if(u.c==null){x=1
break}u.q(new B.cdw(u,t))
case 1:return A.l(v,w)}})
return A.m($async$qb,w)},
QN(){var x=0,w=A.n(y.H),v=this,u
var $async$QN=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ai(u).aq("/cobrar",null,y.X),$async$QN)
case 2:if(v.c!=null)v.qb()
return A.l(null,w)}})
return A.m($async$QN,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.ga2G(),k=y.p,j=A.a([new B.OP("Scannear",C.vm,!0,new B.cdx(),n),new B.OP("Cobrar",K.DZ,!1,o.gaTE(),n)],k),i=A.a([D.cm7,C.P,new B.Ut(290,!1,l,n),C.bC,D.ckT,C.at],k),h=m==null
if(h&&!o.e)i.push(D.bY_)
else if(h)i.push(new B.agL(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKZ)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.q(q)+" pessoas")
r=C.e.a3(r," \xb7 ")
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
t=p}C.e.n(h,A.a([C.fi,new B.ais(s,r,t,q>0,n,n)],k))}h.push(C.fi)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.ais("Cobrado hoje",k,n,!1,H.cEM(m.b),n))
h.push(C.fi)
C.e.n(i,h)}return new B.acT(l,j,i,n)}}
B.acT.prototype={
u(d){var x=null,w=C.CU.B(0,new A.a2(0,A.aw(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d4(C.bk,x,x,A.pQ(C.lE,new B.bTg(d),"Voltar"),x),C.P,D.cfB,C.aB,A.ea(C.bc,this.d,C.r,C.bj,8,8),C.aB],y.p)
C.e.n(v,this.e)
return A.cM(x,C.bx,A.bC(!0,A.y8(A.cZ(v,x,w,x,x,!1,C.a1,!1),x,this.c),x,C.a_,!1),!0,x)}}
B.OP.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.A,t=v?$.ap:C.t
return A.bm(w,!0,w,A.fn(!1,C.aE,!0,w,A.eF(!1,w,!0,A.aJ(new A.Q(C.bL,A.R(A.a([A.b2(x.d,u,w,w,16),C.br,A.i(x.c,w,w,w,w,A.aG(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.J,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.w,C.j,C.K,0,w,w),w),38,w),C.af,!0,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.af,w,w,C.cx),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a8,w)}}
B.adI.prototype={
u(d){var x=null
return A.i(this.c,x,x,x,x,C.W,x,x,x)}}
B.abw.prototype={
u(d){var x=null
return A.i(this.c,x,x,x,x,C.bt,x,x,x)}}
B.agL.prototype={
u(d){var x=null
return new A.Q(C.qe,A.B(A.a([D.caZ,A.cs(C.z3,x,x,this.c,x,x)],y.p),C.w,C.j,C.m,0,C.v),x)}}
B.ais.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.i(v.c,u,u,u,u,C.ap,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.i(r,u,u,u,u,C.W,u,u,u))
t=A.a([A.a6(A.B(s,C.G,C.j,C.m,0,C.v),1),C.ar],t)
s=v.e
if(s!=null){r=v.f
x=r?C.dU:C.iv
w=A.a0(999)
t.push(A.D(u,A.i(s,u,u,u,u,A.aG(u,u,r?C.e8:C.e7,u,u,u,u,u,u,u,u,12,u,u,C.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.O(x,u,u,w,u,u,C.y),u,u,u,C.dM,u,u,u))}s=v.r
if(s!=null)t.push(A.i(s,u,u,u,u,C.ap,u,u,u))
return new A.Q(C.cr,A.R(t,C.w,C.j,C.m,0,u,u),u)}}
B.aFw.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=this.c,f=new A.ae(Date.now(),0,!1),e=A.bG(A.aE(f),A.ay(f),A.aN(f),0,0)
f=g.c
if(f==null)x=h
else{w=A.aE(f)
v=!1
if(w===A.aE(e)){w=A.ay(f)
if(w===A.ay(e)){w=A.aN(f)
w=w===A.aN(e)}else w=v}else w=v
x=w?"Hoje":""+A.aN(f)+" "+C.co[A.ay(f)-1]}f=A.a([],y.s)
if(x!=null)f.push(x)
w=g.d
if(w!=null)f.push(w)
w=g.x
if(w!=null)f.push("Mesa "+A.q(w))
w=g.e
if(w)f.push("Organizas")
v=!w
if(v&&g.f&&g.r==="paid"){u=g.w
f.push(u===1?"Bilhete \xb7 1 pessoa":"Bilhete \xb7 "+u+" pessoas")}t=C.e.a3(f," \xb7 ")
s=$.ap
if(v&&g.f&&g.r!=="paid")r=D.bR9
else{f=g.y
if(f!=null){f=new A.a3("Entrada registada \xe0s "+B.dAK(f),s)
r=f}else{f=w?D.bRt:D.bRx
r=f}}q=r.a
p=h
o=r.b
p=o
n=q
f=g.y!=null
w=f?s:C.t
v=f?C.d8:G.qt
w=A.D(h,A.b2(v,f?C.t:C.A,h,h,20),C.r,h,h,new A.O(w,h,h,h,h,h,C.aA),h,44,h,h,h,h,44)
v=y.p
u=A.a([A.i(g.b,h,h,h,h,C.ap,h,h,h)],v)
if(t.length!==0)u.push(A.i(t,h,h,h,h,C.W,h,h,h))
u.push(C.at)
u.push(A.i(n,h,h,h,h,A.aG(h,h,p,h,h,h,h,h,h,h,h,13,h,h,C.J,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))
for(f=g.z,m=f.length,l=0;l<f.length;f.length===m||(0,A.H)(f),++l){k=f[l]
j=k.a
i=C.f.aW(C.i.k(A.hK(j)),2,"0")
j=C.f.aW(C.i.k(A.ht(j)),2,"0")
u.push(A.i("Chegada registada: "+k.b+" \xe0s "+(i+":"+j),h,h,h,h,new A.M(!0,s,h,h,h,h,13,C.J,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h))}return new A.Q(C.nj,A.R(A.a([w,C.ag,A.a6(A.B(u,C.G,C.j,C.m,0,C.v),1)],v),C.G,C.j,C.m,0,h,h),h)}}
B.aSd.prototype={}
B.aSi.prototype={}
B.Ut.prototype={
P(){return new B.afV(B.doB(D.aqF,D.brY),null,null)}}
B.afV.prototype={
gKx(){var x,w=this,v=w.e
if(v===$){x=A.cB(null,F.MQ,null,1,null,w)
w.e!==$&&A.aX()
w.e=x
v=x}return v},
al(){this.aH()
$.az.b3$.push(this)},
bK(){var x,w,v=this
v.d3()
x=v.c
x.toString
if(A.aw(x,null,y.w).w.ax)v.gKx().d2(0)
else{x=v.gKx()
w=x.r
if(!(w!=null&&w.a!=null))x.acn(0,!0)}},
o1(d){if(this.f)return
if(d===C.eH)this.d.kh(0)
else if(d===C.ph)this.d.d2(0)},
m(){var x=this
$.az.iB(x)
x.gKx().m()
x.d.m()
x.aPg()},
DQ(d){return this.b8R(d)},
b8R(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DQ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dGE(t)
if(p==null){s=u.c.O(y.q).f
s.azq()
s.a4(D.bYT)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d2(0),$async$DQ)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ai(r).aq(m,null,y.X),$async$DQ)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.kh(0),$async$DQ)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DQ,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fX(A.a0(16),A.aJ(new A.bB(C.aC,w,C.eh,C.z,A.a([C.pX,new B.a4m(t,x.gb8Q(),new B.cna(),w),A.bN(A.aJ(new A.bB(C.aC,w,C.aH,C.z,A.a([D.bPO,A.f6(x.gKx(),new B.cnb(x,u),w)],s),w),u,u),w,w),A.cb(16,A.bN(A.D(w,D.cbN,C.r,w,w,new A.O(C.t,w,w,A.a0(999),w,w,C.y),w,w,w,C.dM,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.b1)],s)
if(x.a.d)s.push(new A.lS(t,new B.cnc(x),w,w,y.n))
return A.B(s,C.I,C.j,C.m,0,C.v)}}
B.WP.prototype={
u(d){return D.apo}}
B.aDR.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.b9()
m.r=C.t.gv(0)
m.b=C.bO
m.c=4
m.d=C.h3
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cy(n,C.aQ,o,o,A.a([],v))
u.aA(new A.eY(2,44))
u.aA(new A.cP(2,16))
u.As(D.bJk,D.y7)
u.aA(new A.cP(44,2))
d.dR(u,m)
u=new A.cy(n,C.aQ,o,o,A.a([],v))
t=x-44
u.aA(new A.eY(t,2))
s=x-16
u.aA(new A.cP(s,2))
r=x-2
u.As(new A.J(r,16),D.y7)
u.aA(new A.cP(r,44))
d.dR(u,m)
u=new A.cy(n,C.aQ,o,o,A.a([],v))
q=w-44
u.aA(new A.eY(r,q))
p=w-16
u.aA(new A.cP(r,p))
r=w-2
u.As(new A.J(s,r),D.y7)
u.aA(new A.cP(t,r))
d.dR(u,m)
v=new A.cy(n,C.aQ,o,o,A.a([],v))
v.aA(new A.eY(44,r))
v.aA(new A.cP(16,r))
v.As(new A.J(2,p),D.y7)
v.aA(new A.cP(2,q))
d.dR(v,m)},
dO(d){return!1}}
B.aSm.prototype={}
B.ajN.prototype={
m(){var x=this,w=x.bG$
if(w!=null)w.a_(0,x.ghs())
x.bG$=null
x.a7()},
bU(){this.cA()
this.d0()
this.ht()}}
B.ap3.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4m.prototype={
P(){return new B.aIx()}}
B.aIx.prototype={
b7N(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lS(x,new B.c6Z(this),null,null,y.n)},
XP(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XP=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.h5(t,A.u(t).i("h5<1>")).Y2(s.d,!1,B.dGi())
x=2
return A.d(u.kh(0),$async$XP)
case 2:return A.l(null,w)}})
return A.m($async$XP,w)},
MP(){var x=0,w=A.n(y.H),v=this,u
var $async$MP=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aL(0)
x=2
return A.d(y.x.b(u)?u:A.em(u,y.H),$async$MP)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d2(0),$async$MP)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$MP,w)},
al(){var x,w=this
w.aH()
x=w.a.c
w.d!==$&&A.bs()
w.d=x
w.XP()},
m(){this.a7()
this.MP()},
o1(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xD}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.kh(0)
break
case 2:w.d2(0)
break}}}
B.aSb.prototype={}
B.a4p.prototype={
bhW(){var x=this
x.CW=$.HL().gavs().Y2(new B.bgX(x),!1,new B.bgY(x))
x.cx=$.HL().gaCW().lp(new B.bgZ(x))
x.cy=$.HL().gaE_().lp(new B.bh_(x))},
b84(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aL(0)
w=x.cx
if(w!=null)w.aL(0)
w=x.cy
if(w!=null)w.aL(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bqM(!1,w.r===C.j8?C.j8:C.abl))
return!0},
kh(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$kh=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xF(C.xC,A.xE(null,null,C.xC.geT(0))))
if(s.a.e){x=1
break}r=C.Bc
q=new B.bz3(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bhW()
x=7
return A.d($.HL().lC(0,q),$async$kh)
case 7:p=f
if(!s.db)s.sv(0,s.a.br4(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.ts){o=m
if(!s.db)s.sv(0,s.a.br6(C.Bc,o,!0,!1,C.aS,C.j8,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kh,w)},
d2(d){var x=0,w=A.n(y.H),v=this
var $async$d2=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b84()?2:3
break
case 2:x=4
return A.d($.HL().d2(0),$async$d2)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d2,w)},
u_(){var x=0,w=A.n(y.H),v,u=this,t
var $async$u_=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.aj(A.xF(C.a1w,A.xE(null,null,C.a1w.geT(0))))
if(u.db)A.aj(A.xF(C.xC,A.xE(null,null,C.xC.geT(0))))
if(!t.e){x=1
break}if(t.r===C.j8){x=1
break}x=3
return A.d($.HL().u_(),$async$u_)
case 3:case 1:return A.l(v,w)}})
return A.m($async$u_,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.fX()
x=3
return A.d($.HL().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xG.prototype={
Mh(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xG(w,v,f,u,t,s,r,k==null?x.w:k)},
bqM(d,e){var x=null
return this.Mh(x,x,x,x,d,x,e,x)},
br4(d,e,f,g,h,i){return this.Mh(d,e,null,f,g,h,i,null)},
br6(d,e,f,g,h,i,j){return this.Mh(null,d,e,f,g,h,i,j)},
bqv(d){var x=null
return this.Mh(x,x,x,x,x,x,x,d)},
bqq(d){var x=null
return this.Mh(x,x,x,x,x,x,d,x)}}
B.axw.prototype={
u(d){var x=null,w=A.a([D.bKG],y.p)
w.push(A.i(C.jR.geT(0),x,x,x,x,C.aa1,x,x,x))
return A.kE(A.bN(A.B(w,C.w,C.j,C.K,0,C.v),x,x),C.al,!0)}}
B.bz3.prototype={
ZS(){var x,w,v=this,u=A.A(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("al<1,v>")
x=A.V(new A.al(x,new B.bz4(),w),w.i("aZ.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:y})","F<~>(mx)","WP(N,ts,e?)","ch(N,xG,e?)","e(N,xG,e?)","~(I,bW)"])
B.cGs.prototype={
$1(d){return new L.Fm(M.y2,d,this.a)},
$S:1375}
B.cGp.prototype={
$1(d){return this.a.$0()},
$S:137}
B.cGq.prototype={
$1(d){return this.a.$0()},
$S:137}
B.cGr.prototype={
$1(d){return this.a.$0()},
$S:137}
B.b3T.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:111}
B.c7u.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aL(0)
x.w=A.de(C.fN,new B.c7t(x))},
$S:0}
B.c7t.prototype={
$0(){return this.a.Dh(!0)},
$S:0}
B.c7o.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c7r.prototype={
$0(){var x=this.a
return x.q(new B.c7q(x))},
$S:0}
B.c7q.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c7s.prototype={
$0(){var x=this.a
return x.q(new B.c7p(x))},
$S:0}
B.c7p.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cdw.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cdx.prototype={
$0(){},
$S:0}
B.bTg.prototype={
$0(){return A.aq(this.a,!1).iz()},
$S:0}
B.cna.prototype={
$3(d,e,f){return D.ckr},
$S:z+3}
B.cnb.prototype={
$2(d,e){var x=null,w=this.a.gKx().x
w===$&&A.b()
return A.cb(x,A.D(x,x,C.r,C.BA,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:222}
B.cnc.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.j8)return C.as
x=t===C.abm
t=x?C.dU:C.iv
w=A.a0(999)
v=x?"Ligada":"Desligada"
return new A.Q(C.N6,A.bm(u,!0,u,A.eF(!1,u,!0,A.D(u,A.R(A.a([D.azF,A.D(u,A.i(v,u,u,u,u,A.aG(u,u,x?C.e8:C.e7,u,u,u,u,u,u,u,u,12,u,u,C.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.O(t,u,u,w,u,u,C.y),u,u,u,C.dM,u,u,u)],y.p),C.w,C.j,C.m,0,u,u),C.r,u,I.io,D.ag9,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,this.a.d.gbCs(),u,u,u,u,u,u,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a8,u),u)},
$S:z+4}
B.c6Z.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.app}x=e.c
if(x!=null){w=new B.axw(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.km(new B.c6Y(this.a,e))},
$S:z+5}
B.c6Y.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b7N(u,e)
v.a.toString
x=u.f
v=A.ag(1/0,e.a,e.b)
u=A.ag(1/0,e.c,e.d)
w=A.wT(A.vS(A.DJ(C.L,A.aJ($.HL().avx(),x.b,x.a),C.r,C.bG),new A.ab(v,u)),C.z,null)
return w},
$S:112}
B.bgX.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1376}
B.bgY.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xc(d)},
$S:71}
B.bgZ.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqq(d))},
$S:1377}
B.bh_.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqv(d))},
$S:117}
B.bz4.prototype={
$1(d){return d.c},
$S:1378};(function aliases(){var x=B.ajN.prototype
x.aPg=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aey.prototype,"ga2G",0,0,null,["$1$announce","$0"],["Dh","qb"],1,0,0)
var t
w(t=B.af9.prototype,"ga2G","qb",0)
w(t,"gaTE","QN",0)
v(B.afV.prototype,"gb8Q","DQ",2)
u(B,"dGi","doE",6)
w(t=B.a4p.prototype,"gbCs","u_",0)
w(t,"geG","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.I,[B.auI,B.Tx,B.xG,B.bz3])
v(A.bx,[B.cGs,B.cGp,B.cGq,B.cGr,B.b3T,B.cna,B.cnc,B.c6Z,B.bgX,B.bgY,B.bgZ,B.bh_,B.bz4])
u(B.J6,A.en)
v(A.K,[B.aex,B.af8,B.Ut,B.a4m])
v(A.a_,[B.aSd,B.aSi,B.aSm,B.aSb])
u(B.aey,B.aSd)
v(A.bR,[B.c7u,B.c7t,B.c7o,B.c7r,B.c7q,B.c7s,B.c7p,B.cdw,B.cdx,B.bTg])
u(B.af9,B.aSi)
v(A.L,[B.acT,B.OP,B.adI,B.abw,B.agL,B.ais,B.aFw,B.WP,B.axw])
u(B.ajN,B.aSm)
u(B.afV,B.ajN)
v(A.cR,[B.cnb,B.c6Y])
u(B.aDR,A.qo)
u(B.ap3,A.fr)
u(B.aIx,B.aSb)
u(B.a4p,A.d6)
x(B.aSd,A.ev)
x(B.aSi,A.ev)
x(B.aSm,A.ev)
w(B.ajN,A.iv)
x(B.aSb,A.ev)})()
A.br(b.typeUniverse,JSON.parse('{"aex":{"K":[],"e":[],"f":[]},"af8":{"K":[],"e":[],"f":[]},"J6":{"K":[],"e":[],"f":[]},"aey":{"a_":["aex"],"ev":[]},"af9":{"a_":["af8"],"ev":[]},"acT":{"L":[],"e":[],"f":[]},"OP":{"L":[],"e":[],"f":[]},"adI":{"L":[],"e":[],"f":[]},"abw":{"L":[],"e":[],"f":[]},"agL":{"L":[],"e":[],"f":[]},"ais":{"L":[],"e":[],"f":[]},"aFw":{"L":[],"e":[],"f":[]},"Ut":{"K":[],"e":[],"f":[]},"WP":{"L":[],"e":[],"f":[]},"afV":{"a_":["Ut"],"ev":[]},"aDR":{"aR":[]},"a4m":{"K":[],"e":[],"f":[]},"aIx":{"a_":["a4m"],"ev":[]},"a4p":{"d6":["xG"],"aR":[]},"axw":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cG"),x:x("F<~>"),k:x("r<kD>"),G:x("r<Tx>"),v:x("r<fH>"),S:x("r<+at,partner(ae,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a4<@,@>"),w:x("dn"),Y:x("Tx"),N:x("c"),n:x("lS<xG>"),J:x("lj<mx>"),q:x("ds"),z:x("@"),r:x("t<Tx>?"),g:x("t<@>?"),X:x("I?"),t:x("auI?"),E:x("rq?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afs=new A.dV(E.tE,C.ab,E.tE,C.ab)
D.ag9=new A.O(null,null,D.afs,null,null,null,C.y)
D.c4x=new A.M(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cgD=new A.E("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4x,C.a5,null,null,null,null,null,null,null)
D.bLC=new A.Q(C.fj,D.cgD,null)
D.ajE=new A.fF(C.L,null,null,D.bLC,null)
D.apo=new A.p7(C.e7,!0,D.ajE,null)
D.app=new A.p7(C.al,!0,null,null)
D.aqF=new B.ap3(0,0,"noDuplicates")
D.aqG=new B.ap3(1,1,"normal")
D.cbB=new A.E("Lanterna",null,C.cq,null,null,null,null,null,null,null,null)
D.azF=new A.bT(1,C.ax,D.cbB,null)
D.cm6=new B.adI("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bQp=new B.Ut(420,!0,null,null)
D.bf7=x([D.cm6,C.P,D.bQp],y.p)
D.brY=x([C.tA],y.k)
D.cpv=x([],y.k)
D.bzO=x([],y.G)
D.bIb=new A.Ty(null,null)
D.bJk=new A.J(16,2)
D.aCl=new A.aV(57911,"MaterialIcons",null,!1)
D.aCV=new A.ba(D.aCl,null,C.t,null,null,null)
D.bKG=new A.Q(C.N2,D.aCV,null)
D.c8Q=new A.E("Sem marca\xe7\xf5es para hoje.",null,C.cq,null,null,null,null,null,null,null,null)
D.bKZ=new A.Q(C.hW,D.c8Q,null)
D.cgv=new A.E("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cq,null,null,null,null,null,null,null,null)
D.bLh=new A.Q(C.qe,D.cgv,null)
D.cl5=new B.aDR(null)
D.aqg=new A.uO(D.cl5,null,C.aS,null,null)
D.bPO=new A.eZ(0,0,0,0,null,null,D.aqg,null)
D.y7=new A.b4(14,14)
D.bR9=new A.a3("Sem bilhete pago: o QR n\xe3o d\xe1 entrada",C.dK)
D.bRt=new A.a3("\xc9s tu que organizas",C.S)
D.bRx=new A.a3("Mostra o QR \xe0 entrada",C.S)
D.bY_=new A.yf(2,C.a_,null)
D.c8m=new A.E("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.bYT=new A.bI(D.c8m,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.caZ=new A.E("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cq,C.a5,null,null,null,null,null,null,null)
D.cbN=new A.E("\xc0 procura de um QR\u2026",null,C.j4,null,null,null,null,null,null,null,null)
D.ccd=new A.E("Um QR para todos os eventos. Mostra-o \xe0 entrada, no restaurante ou ao parceiro. Muda a cada 30 segundos e s\xf3 serve para ti.",null,C.mn,C.a5,null,null,null,null,null,null,null)
D.cfB=new A.E("Entrada",null,C.ha,null,null,null,null,null,null,null,null)
D.ckr=new B.WP(null)
D.ckS=new B.abw("D\xc1 ENTRADA EM",null)
D.ckT=new B.abw("HOJE",null)
D.cm7=new B.adI("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cn9=new B.aex(null)
D.cnq=new B.af8(null)})()};
(a=>{a["G8Wr5tk/6+GEcS7G3IOu3PGxO1I="]=a.current})($__dart_deferred_initializers__);