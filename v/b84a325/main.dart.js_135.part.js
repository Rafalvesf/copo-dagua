((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,G,B={
dGE(d){var x,w,v=A.aW("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).hA(C.f.D(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aLT(w,x)},
cFs(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cFs=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.jI("partner_today",y.z),$async$cFs)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.h(s,"bookings"))
o=J.ar(o==null?C.ak:o)
while(o.t()){q=o.gE(o)
if(p.b(q)){n=J.h(q,"event")
n=A.q(n==null?"Evento":n)
m=A.C(J.h(q,"booking_number"))
l=A.aK(J.h(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aK(J.h(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bw(r,new A.aMj([k,n,m,l]))}}p=A.aK(J.h(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aK(J.h(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.auJ(r,p,o)
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
return A.m($async$cFs,w)},
auJ:function auJ(d,e,f){this.a=d
this.b=e
this.c=f},
doO(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.dL(A.q(x==null?"":x))
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
p=A.dL(A.q(p==null?"":p))
p=p==null?k:p.eg()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ar(j==null?C.ak:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.dL(A.q(J.h(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aLF(A.d9(A.q(m.h(n,"at"))).eg(),l))}}return new B.Tu(h,g,x,w,v,u,r,s,q,p,o)},
cFp(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cFp=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.jI("my_entries",y.z),$async$cFp)
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
return A.m($async$cFp,w)},
dFY(d){var x,w,v="public",u=$.T().b
u===$&&A.b()
x=u.gbE().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cGu(w)
u=u.ch
u===$&&A.b()
return u.LX(0,"entries-"+w,C.yf).NZ(new B.cGr(d),C.GH,x.$1("user_id"),v,"event_checkins").NZ(new B.cGs(d),C.GH,x.$1("user_id"),v,"booking_arrivals").NZ(new B.cGt(d),C.GI,x.$1("buyer_id"),v,"event_tickets").PT(0)},
Tu:function Tu(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cGu:function cGu(d){this.a=d},
cGr:function cGr(d){this.a=d},
cGs:function cGs(d){this.a=d},
cGt:function cGt(d){this.a=d},
dlm(){return new B.J5(null)},
dAJ(d){return C.f.aW(C.i.k(A.hK(d)),2,"0")+":"+C.f.aW(C.i.k(A.ht(d)),2,"0")},
J5:function J5(d){this.a=d},
b3T:function b3T(){},
aey:function aey(d){this.a=d},
aez:function aez(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c7v:function c7v(d){this.a=d},
c7u:function c7u(d){this.a=d},
c7p:function c7p(d,e){this.a=d
this.b=e},
c7s:function c7s(d){this.a=d},
c7r:function c7r(d){this.a=d},
c7t:function c7t(d){this.a=d},
c7q:function c7q(d){this.a=d},
af9:function af9(d){this.a=d},
afa:function afa(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cdx:function cdx(d,e){this.a=d
this.b=e},
cdy:function cdy(){},
acU:function acU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bTh:function bTh(d){this.a=d},
ON:function ON(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
adJ:function adJ(d,e){this.c=d
this.a=e},
abx:function abx(d,e){this.c=d
this.a=e},
agM:function agM(d,e){this.c=d
this.a=e},
ait:function ait(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFx:function aFx(d,e){this.c=d
this.a=e},
aSe:function aSe(){},
aSj:function aSj(){},
Uq:function Uq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afW:function afW(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ef$=e
_.bG$=f
_.c=_.a=null},
cnb:function cnb(){},
cnc:function cnc(d,e){this.a=d
this.b=e},
cnd:function cnd(d){this.a=d},
WN:function WN(d){this.a=d},
aDT:function aDT(d){this.a=d},
aSn:function aSn(){},
ajO:function ajO(){},
ap5:function ap5(d,e,f){this.c=d
this.a=e
this.b=f},
doE(d,e){},
a4m:function a4m(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aIy:function aIy(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c7_:function c7_(d){this.a=d},
c6Z:function c6Z(d,e){this.a=d
this.b=e},
aSc:function aSc(){},
doB(d,e){var x=null,w=d===D.aqJ?250:0
return new B.a4p(d,w,e,new A.lk(x,x,y.J),new B.xI(x,C.Bf,x,!1,!1,C.aS,C.j6,1),$.ac())},
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
xI:function xI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
axx:function axx(d){this.a=d},
bz4:function bz4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bz5:function bz5(){}},D,H,I,E,K,L,M,N
J=c[1]
A=c[0]
C=c[2]
F=c[271]
G=c[206]
B=a.updateHolder(c[13],B)
D=c[268]
H=c[86]
I=c[190]
E=c[272]
K=c[270]
L=c[117]
M=c[233]
N=c[269]
B.auJ.prototype={}
B.Tu.prototype={}
B.J5.prototype={
bc(d,e){var x=y.E
return e.H(A.cv($.b8(),new B.b3T(),y.D,x),x)===C.dF?D.cnz:D.cni}}
B.aey.prototype={
P(){return new B.aez()}}
B.aez.prototype={
al(){var x=this
x.aH()
$.az.b3$.push(x)
x.q9()
x.r=B.dFY(new B.c7v(x))},
m(){var x,w,v=this
$.az.iz(v)
x=v.w
if(x!=null)x.aL(0)
x=v.r
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yb(x)}v.a7()},
o0(d){if(d===C.eF)this.q9()},
De(d){return this.b6X(d)},
q9(){return this.De(!1)},
b6X(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$De=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.A(y.N,y.Y)
o=u.e
o=J.ar(o==null?D.bzT:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cFp(),$async$De)
case 3:s=f
if(u.c==null){x=1
break}u.q(new B.c7p(u,s))
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
return A.m($async$De,w)},
u(d){var x,w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga2y(),n=r.d,m=y.p
n=A.a([new B.ON("QR code",C.qu,!n,new B.c7s(r),q),new B.ON("Scannear",C.vm,n,new B.c7t(r),q)],m)
if(r.d)m=D.bfa
else{x=A.a([D.bIf,C.aB,D.ccm,C.cy,D.cl0,C.X],m)
w=p==null
if(w&&!r.f)x.push(N.a8H)
else if(w)x.push(new B.agM(o,q))
else if(J.dk(p))x.push(D.bLi)
else for(w=A.ew(p,0,y.Y),v=J.ar(w.a),u=w.b,w=new A.bX(v,u,A.u(w).i("bX<1>"));w.t();){t=w.c
t=t>=0?new A.a3(u+t,v.gE(v)):A.aj(A.c1())
s=A.a([],m)
if(t.a>0)s.push(C.fi)
s.push(new B.aFx(t.b,q))
C.e.n(x,s)}m=x}return new B.acU(o,n,m,q)}}
B.af9.prototype={
P(){return new B.afa()}}
B.afa.prototype={
al(){this.aH()
$.az.b3$.push(this)
this.q9()},
m(){$.az.iz(this)
this.a7()},
o0(d){if(d===C.eF)this.q9()},
q9(){var x=0,w=A.n(y.H),v,u=this,t
var $async$q9=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cFs(),$async$q9)
case 3:t=e
if(u.c==null){x=1
break}u.q(new B.cdx(u,t))
case 1:return A.l(v,w)}})
return A.m($async$q9,w)},
QD(){var x=0,w=A.n(y.H),v=this,u
var $async$QD=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ai(u).ar("/cobrar",null,y.X),$async$QD)
case 2:if(v.c!=null)v.q9()
return A.l(null,w)}})
return A.m($async$QD,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.ga2y(),k=y.p,j=A.a([new B.ON("Scannear",C.vm,!0,new B.cdy(),n),new B.ON("Cobrar",K.E_,!1,o.gaTx(),n)],k),i=A.a([D.cmg,C.P,new B.Uq(290,!1,l,n),C.bC,D.cl1,C.at],k),h=m==null
if(h&&!o.e)i.push(D.bY8)
else if(h)i.push(new B.agM(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bL1)
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
t=p}C.e.n(h,A.a([C.fi,new B.ait(s,r,t,q>0,n,n)],k))}h.push(C.fi)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.ait("Cobrado hoje",k,n,!1,H.cEO(m.b),n))
h.push(C.fi)
C.e.n(i,h)}return new B.acU(l,j,i,n)}}
B.acU.prototype={
u(d){var x=null,w=C.CV.B(0,new A.a2(0,A.aw(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d4(C.bk,x,x,A.pR(C.lB,new B.bTh(d),"Voltar"),x),C.P,D.cfK,C.aB,A.ea(C.bc,this.d,C.r,C.bj,8,8),C.aB],y.p)
C.e.n(v,this.e)
return A.cM(x,C.bx,A.bC(!0,A.ya(A.cZ(v,x,w,x,x,!1,C.a1,!1),x,this.c),x,C.a_,!1),!0,x)}}
B.ON.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.A,t=v?$.ap:C.t
return A.bm(w,!0,w,A.fn(!1,C.aE,!0,w,A.eF(!1,w,!0,A.aJ(new A.R(C.bL,A.Q(A.a([A.b2(x.d,u,w,w,16),C.br,A.i(x.c,w,w,w,w,A.aG(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.J,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.w,C.j,C.K,0,w,w),w),38,w),C.af,!0,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.af,w,w,C.cx),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a8,w)}}
B.adJ.prototype={
u(d){var x=null
return A.i(this.c,x,x,x,x,C.W,x,x,x)}}
B.abx.prototype={
u(d){var x=null
return A.i(this.c,x,x,x,x,C.bt,x,x,x)}}
B.agM.prototype={
u(d){var x=null
return new A.R(C.qe,A.B(A.a([D.cb7,A.cs(C.z7,x,x,this.c,x,x)],y.p),C.w,C.j,C.m,0,C.v),x)}}
B.ait.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.i(v.c,u,u,u,u,C.ap,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.i(r,u,u,u,u,C.W,u,u,u))
t=A.a([A.a6(A.B(s,C.G,C.j,C.m,0,C.v),1),C.ar],t)
s=v.e
if(s!=null){r=v.f
x=r?C.dU:C.it
w=A.a0(999)
t.push(A.D(u,A.i(s,u,u,u,u,A.aG(u,u,r?C.e8:C.e7,u,u,u,u,u,u,u,u,12,u,u,C.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.O(x,u,u,w,u,u,C.y),u,u,u,C.dM,u,u,u))}s=v.r
if(s!=null)t.push(A.i(s,u,u,u,u,C.ap,u,u,u))
return new A.R(C.cr,A.Q(t,C.w,C.j,C.m,0,u,u),u)}}
B.aFx.prototype={
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
if(f!=null){f=new A.a3("Entrada registada \xe0s "+B.dAJ(f),s)
r=f}else{f=w?D.bRt:D.bRx
r=f}}q=r.a
p=h
o=r.b
p=o
n=q
f=g.y!=null
w=f?s:C.t
v=f?C.d7:G.qt
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
u.push(A.i("Chegada registada: "+k.b+" \xe0s "+(i+":"+j),h,h,h,h,new A.M(!0,s,h,h,h,h,13,C.J,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h))}return new A.R(C.ng,A.Q(A.a([w,C.ag,A.a6(A.B(u,C.G,C.j,C.m,0,C.v),1)],v),C.G,C.j,C.m,0,h,h),h)}}
B.aSe.prototype={}
B.aSj.prototype={}
B.Uq.prototype={
P(){return new B.afW(B.doB(D.aqI,D.bs0),null,null)}}
B.afW.prototype={
gKq(){var x,w=this,v=w.e
if(v===$){x=A.cB(null,F.MN,null,1,null,w)
w.e!==$&&A.aX()
w.e=x
v=x}return v},
al(){this.aH()
$.az.b3$.push(this)},
bK(){var x,w,v=this
v.d3()
x=v.c
x.toString
if(A.aw(x,null,y.w).w.ax)v.gKq().d2(0)
else{x=v.gKq()
w=x.r
if(!(w!=null&&w.a!=null))x.aci(0,!0)}},
o0(d){if(this.f)return
if(d===C.eF)this.d.kh(0)
else if(d===C.ph)this.d.d2(0)},
m(){var x=this
$.az.iz(x)
x.gKq().m()
x.d.m()
x.aP9()},
DN(d){return this.b8K(d)},
b8K(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DN=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dGE(t)
if(p==null){s=u.c.O(y.q).f
s.azj()
s.a4(D.bZ1)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d2(0),$async$DN)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ai(r).ar(m,null,y.X),$async$DN)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.kh(0),$async$DN)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DN,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fX(A.a0(16),A.aJ(new A.bB(C.aC,w,C.dZ,C.z,A.a([C.pX,new B.a4m(t,x.gb8J(),new B.cnb(),w),A.bN(A.aJ(new A.bB(C.aC,w,C.aH,C.z,A.a([D.bPO,A.f6(x.gKq(),new B.cnc(x,u),w)],s),w),u,u),w,w),A.cb(16,A.bN(A.D(w,D.cbW,C.r,w,w,new A.O(C.t,w,w,A.a0(999),w,w,C.y),w,w,w,C.dM,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.b1)],s)
if(x.a.d)s.push(new A.lS(t,new B.cnd(x),w,w,y.n))
return A.B(s,C.I,C.j,C.m,0,C.v)}}
B.WN.prototype={
u(d){return D.apr}}
B.aDT.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.b9()
m.r=C.t.gv(0)
m.b=C.bO
m.c=4
m.d=C.h1
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cy(n,C.aQ,o,o,A.a([],v))
u.aA(new A.eZ(2,44))
u.aA(new A.cP(2,16))
u.Ao(D.bJo,D.y7)
u.aA(new A.cP(44,2))
d.dR(u,m)
u=new A.cy(n,C.aQ,o,o,A.a([],v))
t=x-44
u.aA(new A.eZ(t,2))
s=x-16
u.aA(new A.cP(s,2))
r=x-2
u.Ao(new A.J(r,16),D.y7)
u.aA(new A.cP(r,44))
d.dR(u,m)
u=new A.cy(n,C.aQ,o,o,A.a([],v))
q=w-44
u.aA(new A.eZ(r,q))
p=w-16
u.aA(new A.cP(r,p))
r=w-2
u.Ao(new A.J(s,r),D.y7)
u.aA(new A.cP(t,r))
d.dR(u,m)
v=new A.cy(n,C.aQ,o,o,A.a([],v))
v.aA(new A.eZ(44,r))
v.aA(new A.cP(16,r))
v.Ao(new A.J(2,p),D.y7)
v.aA(new A.cP(2,q))
d.dR(v,m)},
dO(d){return!1}}
B.aSn.prototype={}
B.ajO.prototype={
m(){var x=this,w=x.bG$
if(w!=null)w.a_(0,x.ghq())
x.bG$=null
x.a7()},
bU(){this.cA()
this.d0()
this.hr()}}
B.ap5.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4m.prototype={
P(){return new B.aIy()}}
B.aIy.prototype={
b7G(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lS(x,new B.c7_(this),null,null,y.n)},
XI(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.h5(t,A.u(t).i("h5<1>")).XW(s.d,!1,B.dGh())
x=2
return A.d(u.kh(0),$async$XI)
case 2:return A.l(null,w)}})
return A.m($async$XI,w)},
MG(){var x=0,w=A.n(y.H),v=this,u
var $async$MG=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aL(0)
x=2
return A.d(y.x.b(u)?u:A.em(u,y.H),$async$MG)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d2(0),$async$MG)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$MG,w)},
al(){var x,w=this
w.aH()
x=w.a.c
w.d!==$&&A.bs()
w.d=x
w.XI()},
m(){this.a7()
this.MG()},
o0(d){var x,w=this.d
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
B.aSc.prototype={}
B.a4p.prototype={
bhP(){var x=this
x.CW=$.HK().gavl().XW(new B.bgX(x),!1,new B.bgY(x))
x.cx=$.HK().gaCP().lp(new B.bgZ(x))
x.cy=$.HK().gaDT().lp(new B.bh_(x))},
b7Y(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aL(0)
w=x.cx
if(w!=null)w.aL(0)
w=x.cy
if(w!=null)w.aL(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bqF(!1,w.r===C.j6?C.j6:C.abm))
return!0},
kh(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$kh=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xH(C.xC,A.xG(null,null,C.xC.geT(0))))
if(s.a.e){x=1
break}r=C.Bf
q=new B.bz4(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bhP()
x=7
return A.d($.HK().lC(0,q),$async$kh)
case 7:p=f
if(!s.db)s.sv(0,s.a.bqY(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.ts){o=m
if(!s.db)s.sv(0,s.a.br_(C.Bf,o,!0,!1,C.aS,C.j6,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kh,w)},
d2(d){var x=0,w=A.n(y.H),v=this
var $async$d2=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b7Y()?2:3
break
case 2:x=4
return A.d($.HK().d2(0),$async$d2)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d2,w)},
tY(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tY=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.aj(A.xH(C.a1v,A.xG(null,null,C.a1v.geT(0))))
if(u.db)A.aj(A.xH(C.xC,A.xG(null,null,C.xC.geT(0))))
if(!t.e){x=1
break}if(t.r===C.j6){x=1
break}x=3
return A.d($.HK().tY(),$async$tY)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tY,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.fW()
x=3
return A.d($.HK().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xI.prototype={
M9(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xI(w,v,f,u,t,s,r,k==null?x.w:k)},
bqF(d,e){var x=null
return this.M9(x,x,x,x,d,x,e,x)},
bqY(d,e,f,g,h,i){return this.M9(d,e,null,f,g,h,i,null)},
br_(d,e,f,g,h,i,j){return this.M9(null,d,e,f,g,h,i,j)},
bqo(d){var x=null
return this.M9(x,x,x,x,x,x,x,d)},
bqj(d){var x=null
return this.M9(x,x,x,x,x,x,d,x)}}
B.axx.prototype={
u(d){var x=null,w=A.a([D.bKK],y.p)
w.push(A.i(C.jM.geT(0),x,x,x,x,C.aa2,x,x,x))
return A.kF(A.bN(A.B(w,C.w,C.j,C.K,0,C.v),x,x),C.al,!0)}}
B.bz4.prototype={
ZK(){var x,w,v=this,u=A.A(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("al<1,v>")
x=A.V(new A.al(x,new B.bz5(),w),w.i("aZ.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:y})","F<~>(mx)","WN(N,ts,e?)","ch(N,xI,e?)","e(N,xI,e?)","~(I,bW)"])
B.cGu.prototype={
$1(d){return new L.Fm(M.y2,d,this.a)},
$S:1376}
B.cGr.prototype={
$1(d){return this.a.$0()},
$S:149}
B.cGs.prototype={
$1(d){return this.a.$0()},
$S:149}
B.cGt.prototype={
$1(d){return this.a.$0()},
$S:149}
B.b3T.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:111}
B.c7v.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aL(0)
x.w=A.de(C.fL,new B.c7u(x))},
$S:0}
B.c7u.prototype={
$0(){return this.a.De(!0)},
$S:0}
B.c7p.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c7s.prototype={
$0(){var x=this.a
return x.q(new B.c7r(x))},
$S:0}
B.c7r.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c7t.prototype={
$0(){var x=this.a
return x.q(new B.c7q(x))},
$S:0}
B.c7q.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cdx.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cdy.prototype={
$0(){},
$S:0}
B.bTh.prototype={
$0(){return A.aq(this.a,!1).ix()},
$S:0}
B.cnb.prototype={
$3(d,e,f){return D.ckA},
$S:z+3}
B.cnc.prototype={
$2(d,e){var x=null,w=this.a.gKq().x
w===$&&A.b()
return A.cb(x,A.D(x,x,C.r,C.BD,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:239}
B.cnd.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.j6)return C.as
x=t===C.abn
t=x?C.dU:C.it
w=A.a0(999)
v=x?"Ligada":"Desligada"
return new A.R(C.N3,A.bm(u,!0,u,A.eF(!1,u,!0,A.D(u,A.Q(A.a([D.azI,A.D(u,A.i(v,u,u,u,u,A.aG(u,u,x?C.e8:C.e7,u,u,u,u,u,u,u,u,12,u,u,C.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.O(t,u,u,w,u,u,C.y),u,u,u,C.dM,u,u,u)],y.p),C.w,C.j,C.m,0,u,u),C.r,u,I.il,D.agb,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,this.a.d.gbCo(),u,u,u,u,u,u,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a8,u),u)},
$S:z+4}
B.c7_.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aps}x=e.c
if(x!=null){w=new B.axx(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kn(new B.c6Z(this.a,e))},
$S:z+5}
B.c6Z.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b7G(u,e)
v.a.toString
x=u.f
v=A.ag(1/0,e.a,e.b)
u=A.ag(1/0,e.c,e.d)
w=A.wV(A.vT(A.DK(C.L,A.aJ($.HK().avq(),x.b,x.a),C.r,C.bJ),new A.ab(v,u)),C.z,null)
return w},
$S:112}
B.bgX.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1377}
B.bgY.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xa(d)},
$S:73}
B.bgZ.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqj(d))},
$S:1378}
B.bh_.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqo(d))},
$S:117}
B.bz5.prototype={
$1(d){return d.c},
$S:1379};(function aliases(){var x=B.ajO.prototype
x.aP9=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aez.prototype,"ga2y",0,0,null,["$1$announce","$0"],["De","q9"],1,0,0)
var t
w(t=B.afa.prototype,"ga2y","q9",0)
w(t,"gaTx","QD",0)
v(B.afW.prototype,"gb8J","DN",2)
u(B,"dGh","doE",6)
w(t=B.a4p.prototype,"gbCo","tY",0)
w(t,"geF","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.I,[B.auJ,B.Tu,B.xI,B.bz4])
v(A.bx,[B.cGu,B.cGr,B.cGs,B.cGt,B.b3T,B.cnb,B.cnd,B.c7_,B.bgX,B.bgY,B.bgZ,B.bh_,B.bz5])
u(B.J5,A.en)
v(A.K,[B.aey,B.af9,B.Uq,B.a4m])
v(A.a_,[B.aSe,B.aSj,B.aSn,B.aSc])
u(B.aez,B.aSe)
v(A.bR,[B.c7v,B.c7u,B.c7p,B.c7s,B.c7r,B.c7t,B.c7q,B.cdx,B.cdy,B.bTh])
u(B.afa,B.aSj)
v(A.L,[B.acU,B.ON,B.adJ,B.abx,B.agM,B.ait,B.aFx,B.WN,B.axx])
u(B.ajO,B.aSn)
u(B.afW,B.ajO)
v(A.cR,[B.cnc,B.c6Z])
u(B.aDT,A.qp)
u(B.ap5,A.fr)
u(B.aIy,B.aSc)
u(B.a4p,A.d6)
x(B.aSe,A.ev)
x(B.aSj,A.ev)
x(B.aSn,A.ev)
w(B.ajO,A.iv)
x(B.aSc,A.ev)})()
A.bq(b.typeUniverse,JSON.parse('{"aey":{"K":[],"e":[],"f":[]},"af9":{"K":[],"e":[],"f":[]},"J5":{"K":[],"e":[],"f":[]},"aez":{"a_":["aey"],"ev":[]},"afa":{"a_":["af9"],"ev":[]},"acU":{"L":[],"e":[],"f":[]},"ON":{"L":[],"e":[],"f":[]},"adJ":{"L":[],"e":[],"f":[]},"abx":{"L":[],"e":[],"f":[]},"agM":{"L":[],"e":[],"f":[]},"ait":{"L":[],"e":[],"f":[]},"aFx":{"L":[],"e":[],"f":[]},"Uq":{"K":[],"e":[],"f":[]},"WN":{"L":[],"e":[],"f":[]},"afW":{"a_":["Uq"],"ev":[]},"aDT":{"aR":[]},"a4m":{"K":[],"e":[],"f":[]},"aIy":{"a_":["a4m"],"ev":[]},"a4p":{"d6":["xI"],"aR":[]},"axx":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cG"),x:x("F<~>"),k:x("r<kE>"),G:x("r<Tu>"),v:x("r<fG>"),S:x("r<+at,partner(ae,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a4<@,@>"),w:x("dn"),Y:x("Tu"),N:x("c"),n:x("lS<xI>"),J:x("lk<mx>"),q:x("ds"),z:x("@"),r:x("t<Tu>?"),g:x("t<@>?"),X:x("I?"),t:x("auJ?"),E:x("rq?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afu=new A.dV(E.tF,C.ab,E.tF,C.ab)
D.agb=new A.O(null,null,D.afu,null,null,null,C.y)
D.c4G=new A.M(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cgM=new A.E("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4G,C.a5,null,null,null,null,null,null,null)
D.bLC=new A.R(C.f4,D.cgM,null)
D.ajH=new A.fN(C.L,null,null,D.bLC,null)
D.apr=new A.p8(C.e7,!0,D.ajH,null)
D.aps=new A.p8(C.al,!0,null,null)
D.aqI=new B.ap5(0,0,"noDuplicates")
D.aqJ=new B.ap5(1,1,"normal")
D.cbK=new A.E("Lanterna",null,C.cq,null,null,null,null,null,null,null,null)
D.azI=new A.bT(1,C.ax,D.cbK,null)
D.cmf=new B.adJ("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bQp=new B.Uq(420,!0,null,null)
D.bfa=x([D.cmf,C.P,D.bQp],y.p)
D.bs0=x([C.tB],y.k)
D.cpE=x([],y.k)
D.bzT=x([],y.G)
D.bIf=new A.Tv(null,null)
D.bJo=new A.J(16,2)
D.aCo=new A.aV(57911,"MaterialIcons",null,!1)
D.aCY=new A.ba(D.aCo,null,C.t,null,null,null)
D.bKK=new A.R(C.N_,D.aCY,null)
D.c8Z=new A.E("Sem marca\xe7\xf5es para hoje.",null,C.cq,null,null,null,null,null,null,null,null)
D.bL1=new A.R(C.hV,D.c8Z,null)
D.cgE=new A.E("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cq,null,null,null,null,null,null,null,null)
D.bLi=new A.R(C.qe,D.cgE,null)
D.cle=new B.aDT(null)
D.aqj=new A.uO(D.cle,null,C.aS,null,null)
D.bPO=new A.f_(0,0,0,0,null,null,D.aqj,null)
D.y7=new A.b4(14,14)
D.bR9=new A.a3("Sem bilhete pago: o QR n\xe3o d\xe1 entrada",C.dJ)
D.bRt=new A.a3("\xc9s tu que organizas",C.S)
D.bRx=new A.a3("Mostra o QR \xe0 entrada",C.S)
D.bY8=new A.oG(2,C.a_,null)
D.c8v=new A.E("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.bZ1=new A.bI(D.c8v,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cb7=new A.E("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cq,C.a5,null,null,null,null,null,null,null)
D.cbW=new A.E("\xc0 procura de um QR\u2026",null,C.j2,null,null,null,null,null,null,null,null)
D.ccm=new A.E("Um QR para todos os eventos. Mostra-o \xe0 entrada, no restaurante ou ao parceiro. Muda a cada 30 segundos e s\xf3 serve para ti.",null,C.mk,C.a5,null,null,null,null,null,null,null)
D.cfK=new A.E("Entrada",null,C.h8,null,null,null,null,null,null,null,null)
D.ckA=new B.WN(null)
D.cl0=new B.abx("D\xc1 ENTRADA EM",null)
D.cl1=new B.abx("HOJE",null)
D.cmg=new B.adJ("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cni=new B.aey(null)
D.cnz=new B.af9(null)})()};
(a=>{a["Jkp1uT8216P5nkWAPe4JjQFkIqE="]=a.current})($__dart_deferred_initializers__);