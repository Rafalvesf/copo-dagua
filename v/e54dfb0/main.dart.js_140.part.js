((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dMt(d){var x,w,v=A.aT("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).h9(C.f.C(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aN9(w,x)},
cKu(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cKu=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jL("partner_today",y.z),$async$cKu)
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
l=A.aI(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aI(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bv(r,new A.aNA([k,n,m,l]))}}p=A.aI(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aI(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avS(r,p,o)
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
return A.m($async$cKu,w)},
avS:function avS(d,e,f){this.a=d
this.b=e
this.c=f},
duw(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d5(A.q(x==null?"":x))
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
p=A.d5(A.q(p==null?"":p))
p=p==null?k:p.dQ()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ap(j==null?C.am:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.d5(A.q(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aMW(A.db(A.q(m.h(n,"at"))).dQ(),l))}}return new B.U1(h,g,x,w,v,u,r,s,q,p,o)},
cKs(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cKs=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jL("my_entries",y.z),$async$cKs)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ap(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.bv(r,B.duw(q))}v=r
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
return A.m($async$cKs,w)},
dLM(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbA().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cLz(w)
u=u.ch
u===$&&A.b()
return u.Mx(0,"entries-"+w,C.yM).Oz(new B.cLw(d),C.H9,x.$1("user_id"),v,"event_checkins").Oz(new B.cLx(d),C.H9,x.$1("user_id"),v,"booking_arrivals").Oz(new B.cLy(d),C.Ha,x.$1("buyer_id"),v,"event_tickets").Qv(0)},
U1:function U1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cLz:function cLz(d){this.a=d},
cLw:function cLw(d){this.a=d},
cLx:function cLx(d){this.a=d},
cLy:function cLy(d){this.a=d},
dr3(){return new B.Jp(null)},
ddH(d){return C.f.aW(C.j.k(A.id(d)),2,"0")+":"+C.f.aW(C.j.k(A.i_(d)),2,"0")},
Jp:function Jp(d){this.a=d},
b5q:function b5q(){},
afs:function afs(d){this.a=d},
aft:function aft(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
cb6:function cb6(d){this.a=d},
cb5:function cb5(d){this.a=d},
cb0:function cb0(d,e){this.a=d
this.b=e},
cb3:function cb3(d){this.a=d},
cb2:function cb2(d){this.a=d},
cb4:function cb4(d){this.a=d},
cb1:function cb1(d){this.a=d},
ag2:function ag2(d){this.a=d},
ag3:function ag3(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgY:function cgY(d,e){this.a=d
this.b=e},
cgZ:function cgZ(){},
adJ:function adJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bWr:function bWr(d){this.a=d},
Pg:function Pg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aeB:function aeB(d,e){this.c=d
this.a=e},
ack:function ack(d,e){this.c=d
this.a=e},
ahO:function ahO(d,e){this.c=d
this.a=e},
aju:function aju(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aj9:function aj9(d,e,f){this.c=d
this.d=e
this.a=f},
aGM:function aGM(d,e){this.c=d
this.a=e},
abJ:function abJ(d){this.a=d},
abK:function abK(d,e){var _=this
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
aTg:function aTg(){},
aTC:function aTC(){},
aTH:function aTH(){},
UY:function UY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agT:function agT(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ek$=e
_.bH$=f
_.c=_.a=null},
crL:function crL(){},
crM:function crM(d,e){this.a=d
this.b=e},
crN:function crN(d){this.a=d},
Xm:function Xm(d){this.a=d},
aF4:function aF4(d){this.a=d},
aTL:function aTL(){},
akQ:function akQ(){},
aq9:function aq9(d,e,f){this.c=d
this.a=e
this.b=f},
dum(d,e){},
a56:function a56(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJM:function aJM(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
caB:function caB(d){this.a=d},
caA:function caA(d,e){this.a=d
this.b=e},
aTA:function aTA(){},
duj(d,e){var x=null,w=d===D.arr?250:0
return new B.a59(d,w,e,new A.lo(x,x,y.J),new B.xQ(x,C.BE,x,!1,!1,C.aT,C.jl,1),$.aa())},
a59:function a59(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.W$=0
_.Y$=i
_.aI$=_.bm$=0},
bip:function bip(d){this.a=d},
biq:function biq(d){this.a=d},
bir:function bir(d){this.a=d},
bis:function bis(d){this.a=d},
xQ:function xQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayH:function ayH(d){this.a=d},
bAM:function bAM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAN:function bAN(){}},D,F,G,H,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[280]
B=a.updateHolder(c[13],B)
D=c[277]
F=c[88]
G=c[197]
H=c[123]
I=c[244]
K=c[279]
L=c[278]
B.avS.prototype={}
B.U1.prototype={}
B.Jp.prototype={
bf(d,e){var x=y.E
return e.H(A.cJ($.ba(),new B.b5q(),y.D,x),x)===C.dR?D.cpv:D.cpf}}
B.afs.prototype={
P(){return new B.aft()}}
B.aft.prototype={
ad(){var x=this
x.ao()
$.aB.b2$.push(x)
x.kw()
x.r=B.dLM(new B.cb6(x))},
m(){var x,w,v=this
$.aB.ii(v)
x=v.w
if(x!=null)x.aN(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.ys(x)}v.a5()},
nj(d){if(d===C.et)this.kw()},
DB(d){return this.b8V(d)},
kw(){return this.DB(!1)},
b8V(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$DB=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ap(o==null?D.bA3:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cKs(),$async$DB)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.cb0(u,s))
if(!d||s==null){x=1
break}for(o=J.ap(s);o.t();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga6(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null,null)
p.a2(new A.bH(o,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.z,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$DB,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDA(),q=u.d,p=y.p
q=A.a([new B.Pg("QR code",C.qS,!q,new B.cb3(u),t),new B.Pg("Scannear",C.vR,q,new B.cb4(u),t)],p)
if(u.d)p=D.bg9
else{x=A.a([D.cmn,C.S,D.aki,C.bt,D.cmV,C.av],p)
w=s==null
if(w&&!u.f)x.push(L.a9b)
else if(w)x.push(new B.ahO(r,t))
else{w=J.a7(s)
if(w.gZ(s))x.push(D.bMh)
else{v=A.a([],p)
for(w=w.gX(s);w.t();)C.e.n(v,A.a([D.qs,new B.aGM(w.gE(w),t)],p))
v.push(D.qs)
C.e.n(x,v)}}p=x}return new B.adJ(r,q,p,t)}}
B.ag2.prototype={
P(){return new B.ag3()}}
B.ag3.prototype={
ad(){this.ao()
$.aB.b2$.push(this)
this.kw()},
m(){$.aB.ii(this)
this.a5()},
nj(d){if(d===C.et)this.kw()},
kw(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kw=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cKu(),$async$kw)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cgY(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kw,w)},
Rh(){var x=0,w=A.n(y.H),v=this,u
var $async$Rh=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ai(u).aw("/cobrar",null,y.X),$async$Rh)
case 2:if(v.c!=null)v.kw()
return A.l(null,w)}})
return A.m($async$Rh,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDA(),k=y.p,j=A.a([new B.Pg("Scannear",C.vR,!0,new B.cgZ(),n),new B.Pg("Cobrar",C.o8,!1,o.gaV5(),n)],k),i=A.a([D.coc,C.S,new B.UY(290,!1,l,n),C.bt,D.cmW,C.av],k),h=m==null
if(h&&!o.e)i.push(D.bZp)
else if(h)i.push(new B.ahO(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bM2)
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
t=p}C.e.n(h,A.a([D.qs,new B.aju(s,r,t,q>0,n,n)],k))}h.push(D.qs)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aju("Cobrado hoje",k,n,!1,F.cJQ(m.b),n))
h.push(D.qs)
C.e.n(i,h)}return new B.adJ(l,j,i,n)}}
B.adJ.prototype={
u(d){var x=null,w=C.Dj.B(0,new A.a2(0,A.ax(d,C.b7,y.w).w.r.b,0,0)),v=A.a([new A.d1(C.bg,x,x,A.q1(C.lV,new B.bWr(d),"Voltar"),x),C.S,D.cdJ,C.aC,A.e2(C.bf,this.d,C.r,C.bm,8,8),C.aC],y.p)
C.e.n(v,this.e)
return A.cQ(x,C.bB,A.bF(!0,A.Bf(A.cZ(v,x,w,x,x,!1,C.a2,!1),x,this.c),x,C.a_,!1),!0,x)}}
B.Pg.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.A,t=v?$.au:C.t
return A.b8(w,!0,w,A.fs(!1,C.aE,!0,w,A.eC(!1,w,!0,A.aH(new A.R(C.bV,A.O(A.a([A.b6(x.d,u,w,w,16),C.bk,A.h(x.c,w,w,w,w,A.aJ(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.v,C.h,C.K,0,w,w),w),38,w),C.ad,!0,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ad,w,w,C.cD),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.aeB.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.O,x,x,x)}}
B.ack.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aO,x,x,x)}}
B.ahO.prototype={
u(d){var x=null
return new A.R(C.qz,A.x(A.a([D.ccE,A.cx(C.tC,x,x,this.c,x,x)],y.p),C.v,C.h,C.l,0,C.u),x)}}
B.aju.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.ab,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.O,u,u,u))
t=A.a([A.a4(A.x(s,C.H,C.h,C.l,0,C.u),1),C.ah],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cz:C.dV
w=A.W(999)
t.push(A.z(u,A.h(s,u,u,u,u,A.aJ(u,u,r?C.cY:C.cq,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(x,u,u,w,u,u,C.y),u,u,u,C.dq,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.ab,u,u,u))
return new A.R(C.cn,A.O(t,C.v,C.h,C.l,0,u,u),u)}}
B.aj9.prototype={
u(d){var x=null,w=this.d,v=w?C.cz:C.dV,u=A.W(999)
return A.z(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?C.cY:C.cq,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.y),x,x,x,C.dq,x,x,x)}}
B.aGM.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dv[A.fN(l)-1]+", "+A.aA(l)+" "+C.bn[A.ao(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.q(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a1(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga6(k)
k=m.y
if(k!=null)s=new A.a0("Entrou \xe0s "+B.ddH(k),!0)
else if(t!=null){k=new A.a0("Chegou \xe0s "+B.ddH(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bTz
else if(x)k=D.bSE
else k=m.f?D.bS6:D.bTd
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.ab,n,n,n)],k)
if(u.length!==0)x.push(new A.R(K.NA,A.h(u,n,n,n,n,C.O,n,n,n),n))
return new A.R(C.cn,A.O(A.a([A.a4(A.x(x,C.H,C.h,C.l,0,C.u),1),C.ah,new B.aj9(o,q,n)],k),C.H,C.h,C.l,0,n,n),n)}}
B.abJ.prototype={
P(){return new B.abK(new A.ac(Date.now(),0,!1),C.nA)}}
B.abK.prototype={
ad(){var x=this
x.ao()
$.aB.b2$.push(x)
x.kw()
x.as=A.uc(C.fW,new B.bHB(x))},
m(){var x,w=this
$.aB.ii(w)
x=w.Q
if(x!=null)x.aN(0)
x=w.as
if(x!=null)x.aN(0)
w.a5()},
nj(d){var x
if(d===C.et)this.kw()
else if(d===C.mY){x=this.Q
if(x!=null)x.aN(0)}},
kw(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kw=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aN(0)
x=3
return A.d(A.aVy(),$async$kw)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bHz(u,t))
s=t==null?null:t.b
if(s==null)s=C.nC
u.Q=A.dj(s,u.gDA())
case 1:return A.l(v,w)}})
return A.m($async$kw,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().H($.ba(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.C(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.C(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cK(new A.ac(Date.now(),0,!1)).a
v=x<0?0:C.k.eG(C.j.aQ(x,1000)/1000)
u=C.k.ah(C.j.aQ(x,1000)/C.j.aQ(o.z.a,1000),0,1)
x=A.W(16)
t=A.bD(C.fq,0.5)
s=A.W(16)
r=A.bD(C.fq,0.5)
k=!k
if(k)q=A.cY5(C.t,A.kG("/q/"+l.a),C.Hc,C.Hd,C.a_,"C\xf3digo QR da conta",186)
else q=o.x?D.bYY:A.bK(A.x(A.a([C.aEB,C.aH,D.cdP,A.cx(C.tC,n,n,o.gDA(),n,n)],y.p),C.v,C.h,C.K,0,C.u),n,n)
p=y.p
s=A.a([A.z(n,A.aH(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.y),n,n,n,C.cM,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ae,A.z(C.bg,A.arH(C.L,A.z(n,n,C.r,n,n,new A.I(C.uz,n,n,A.W(2),n,n,C.y),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.fq,n,n,k,n,n,C.y),n,4,n,n,n,n,214),C.aH,A.b8(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.O,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.S)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.cq(k,32,r,!1,!0,n),C.ah,new A.dc(1,C.b6,A.x(A.a([A.h(w,n,n,n,n,C.ab,n,n,n),D.c9L],p),C.H,C.h,C.l,0,C.u),n)],p),C.v,C.bW,C.l,0,n,n))
return A.z(n,A.x(s,C.v,C.h,C.l,0,C.u),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.y),n,n,n,C.cM,n,n,n)}}
B.aTg.prototype={}
B.aTC.prototype={}
B.aTH.prototype={}
B.UY.prototype={
P(){return new B.agT(B.duj(D.arq,D.bt_),null,null)}}
B.agT.prototype={
gKX(){var x,w=this,v=w.e
if(v===$){x=A.cE(null,E.Nk,null,1,null,w)
w.e!==$&&A.aX()
w.e=x
v=x}return v},
ad(){this.ao()
$.aB.b2$.push(this)},
bL(){var x,w,v=this
v.d7()
x=v.c
x.toString
if(A.ax(x,null,y.w).w.ax)v.gKX().d6(0)
else{x=v.gKX()
w=x.r
if(!(w!=null&&w.a!=null))x.adw(0,!0)}},
nj(d){if(this.f)return
if(d===C.et)this.d.kh(0)
else if(d===C.mY)this.d.d6(0)},
m(){var x=this
$.aB.ii(x)
x.gKX().m()
x.d.m()
x.aQF()},
E9(d){return this.baI(d)},
baI(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$E9=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dMt(t)
if(p==null){s=u.c.O(y.q).f
s.aAM()
s.a2(D.c_j)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d6(0),$async$E9)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ai(r).aw(m,null,y.X),$async$E9)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.kh(0),$async$E9)
case 5:case 1:return A.l(v,w)}})
return A.m($async$E9,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fX(A.W(16),A.aH(new A.bB(C.az,w,C.e9,C.z,A.a([C.jB,new B.a56(t,x.gbaH(),new B.crL(),w),A.bK(A.aH(new A.bB(C.az,w,C.aF,C.z,A.a([D.bQN,A.f9(x.gKX(),new B.crM(x,u),w)],s),w),u,u),w,w),A.ce(16,A.bK(A.z(w,D.cdu,C.r,w,w,new A.I(C.t,w,w,A.W(999),w,w,C.y),w,w,w,C.dq,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.ba)],s)
if(x.a.d)s.push(new A.ln(t,new B.crN(x),w,w,y.n))
return A.x(s,C.G,C.h,C.l,0,C.u)}}
B.Xm.prototype={
u(d){return D.aq8}}
B.aF4.prototype={
aZ(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aD(),m=A.bd()
m.r=C.t.gv(0)
m.b=C.bS
m.c=4
m.d=C.hf
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cB(n,C.aR,o,o,A.a([],v))
u.aG(new A.f1(2,44))
u.aG(new A.cS(2,16))
u.AI(D.bKo,D.yE)
u.aG(new A.cS(44,2))
d.dU(u,m)
u=new A.cB(n,C.aR,o,o,A.a([],v))
t=x-44
u.aG(new A.f1(t,2))
s=x-16
u.aG(new A.cS(s,2))
r=x-2
u.AI(new A.M(r,16),D.yE)
u.aG(new A.cS(r,44))
d.dU(u,m)
u=new A.cB(n,C.aR,o,o,A.a([],v))
q=w-44
u.aG(new A.f1(r,q))
p=w-16
u.aG(new A.cS(r,p))
r=w-2
u.AI(new A.M(s,r),D.yE)
u.aG(new A.cS(t,r))
d.dU(u,m)
v=new A.cB(n,C.aR,o,o,A.a([],v))
v.aG(new A.f1(44,r))
v.aG(new A.cS(16,r))
v.AI(new A.M(2,p),D.yE)
v.aG(new A.cS(2,q))
d.dU(v,m)},
dR(d){return!1}}
B.aTL.prototype={}
B.akQ.prototype={
m(){var x=this,w=x.bH$
if(w!=null)w.a_(0,x.ghw())
x.bH$=null
x.a5()},
bV(){this.cD()
this.d4()
this.hx()}}
B.aq9.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a56.prototype={
P(){return new B.aJM()}}
B.aJM.prototype={
b9F(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.ln(x,new B.caB(this),null,null,y.n)},
YI(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$YI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hd(t,A.u(t).i("hd<1>")).YV(s.d,!1,B.dM5())
x=2
return A.d(u.kh(0),$async$YI)
case 2:return A.l(null,w)}})
return A.m($async$YI,w)},
Ng(){var x=0,w=A.n(y.H),v=this,u
var $async$Ng=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aN(0)
x=2
return A.d(y.x.b(u)?u:A.ek(u,y.H),$async$Ng)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d6(0),$async$Ng)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$Ng,w)},
ad(){var x,w=this
w.ao()
x=w.a.c
w.d!==$&&A.bx()
w.d=x
w.YI()},
m(){this.a5()
this.Ng()},
nj(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.y9}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.kh(0)
break
case 2:w.d6(0)
break}}}
B.aTA.prototype={}
B.a59.prototype={
bk4(){var x=this
x.CW=$.I1().gawO().YV(new B.bip(x),!1,new B.biq(x))
x.cx=$.I1().gaEh().ls(new B.bir(x))
x.cy=$.I1().gaFk().ls(new B.bis(x))},
b9X(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aN(0)
w=x.cx
if(w!=null)w.aN(0)
w=x.cy
if(w!=null)w.aN(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bsY(!1,w.r===C.jl?C.jl:C.ac2))
return!0},
kh(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$kh=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xP(C.y8,A.xO(null,null,C.y8.geU(0))))
if(s.a.e){x=1
break}r=C.BE
q=new B.bAM(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bk4()
x=7
return A.d($.I1().lE(0,q),$async$kh)
case 7:p=f
if(!s.db)s.sv(0,s.a.bth(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tD){o=m
if(!s.db)s.sv(0,s.a.btj(C.BE,o,!0,!1,C.aT,C.jl,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kh,w)},
d6(d){var x=0,w=A.n(y.H),v=this
var $async$d6=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b9X()?2:3
break
case 2:x=4
return A.d($.I1().d6(0),$async$d6)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d6,w)},
u1(){var x=0,w=A.n(y.H),v,u=this,t
var $async$u1=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.al(A.xP(C.a21,A.xO(null,null,C.a21.geU(0))))
if(u.db)A.al(A.xP(C.y8,A.xO(null,null,C.y8.geU(0))))
if(!t.e){x=1
break}if(t.r===C.jl){x=1
break}x=3
return A.d($.I1().u1(),$async$u1)
case 3:case 1:return A.l(v,w)}})
return A.m($async$u1,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.h_()
x=3
return A.d($.I1().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xQ.prototype={
MJ(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xQ(w,v,f,u,t,s,r,k==null?x.w:k)},
bsY(d,e){var x=null
return this.MJ(x,x,x,x,d,x,e,x)},
bth(d,e,f,g,h,i){return this.MJ(d,e,null,f,g,h,i,null)},
btj(d,e,f,g,h,i,j){return this.MJ(null,d,e,f,g,h,i,j)},
bsH(d){var x=null
return this.MJ(x,x,x,x,x,x,x,d)},
bsC(d){var x=null
return this.MJ(x,x,x,x,x,x,d,x)}}
B.ayH.prototype={
u(d){var x=null,w=A.a([D.bLK],y.p)
w.push(A.h(C.k6.geU(0),x,x,x,x,C.aay,x,x,x))
return A.kM(A.bK(A.x(w,C.v,C.h,C.K,0,C.u),x,x),C.ap,!0)}}
B.bAM.prototype={
a_I(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("aj<1,v>")
x=A.U(new A.aj(x,new B.bAN(),w),w.i("aZ.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:y})","F<~>(mI)","Xm(N,tD,e?)","cg(N,xQ,e?)","e(N,xQ,e?)","~(L,c2)"])
B.cLz.prototype={
$1(d){return new H.FA(I.yz,d,this.a)},
$S:1375}
B.cLw.prototype={
$1(d){return this.a.$0()},
$S:155}
B.cLx.prototype={
$1(d){return this.a.$0()},
$S:155}
B.cLy.prototype={
$1(d){return this.a.$0()},
$S:155}
B.b5q.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:117}
B.cb6.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aN(0)
x.w=A.dj(C.fs,new B.cb5(x))},
$S:0}
B.cb5.prototype={
$0(){return this.a.DB(!0)},
$S:0}
B.cb0.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.cb3.prototype={
$0(){var x=this.a
return x.p(new B.cb2(x))},
$S:0}
B.cb2.prototype={
$0(){return this.a.d=!1},
$S:0}
B.cb4.prototype={
$0(){var x=this.a
return x.p(new B.cb1(x))},
$S:0}
B.cb1.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cgY.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cgZ.prototype={
$0(){},
$S:0}
B.bWr.prototype={
$0(){return A.am(this.a,!1).iD()},
$S:0}
B.bHB.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bHA())},
$S:66}
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
u.y=new A.ac(w,0,!1).em(v)
u.z=v>3e7?x:C.nA}},
$S:0}
B.crL.prototype={
$3(d,e,f){return D.cmu},
$S:z+3}
B.crM.prototype={
$2(d,e){var x=null,w=this.a.gKX().x
w===$&&A.b()
return A.ce(x,A.z(x,x,C.r,C.uz,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:214}
B.crN.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jl)return C.as
x=t===C.ac3
t=x?C.cz:C.dV
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.R(C.Ny,A.b8(u,!0,u,A.eC(!1,u,!0,A.z(u,A.O(A.a([D.aAr,A.z(u,A.h(v,u,u,u,u,A.aJ(u,u,x?C.cY:C.cq,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.y),u,u,u,C.dq,u,u,u)],y.p),C.v,C.h,C.l,0,u,u),C.r,u,G.iE,D.agU,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,this.a.d.gbEM(),u,u,u,u,u,u,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.caB.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aq9}x=e.c
if(x!=null){w=new B.ayH(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.ks(new B.caA(this.a,e))},
$S:z+5}
B.caA.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b9F(u,e)
v.a.toString
x=u.f
v=A.ah(1/0,e.a,e.b)
u=A.ah(1/0,e.c,e.d)
w=A.x2(A.vY(A.DY(C.L,A.aH($.I1().awT(),x.b,x.a),C.r,C.bL),new A.ad(v,u)),C.z,null)
return w},
$S:119}
B.bip.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1376}
B.biq.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xu(d)},
$S:74}
B.bir.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bsC(d))},
$S:1377}
B.bis.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bsH(d))},
$S:122}
B.bAN.prototype={
$1(d){return d.c},
$S:1378};(function aliases(){var x=B.akQ.prototype
x.aQF=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aft.prototype,"gDA",0,0,null,["$1$announce","$0"],["DB","kw"],1,0,0)
var t
w(t=B.ag3.prototype,"gDA","kw",0)
w(t,"gaV5","Rh",0)
w(B.abK.prototype,"gDA","kw",0)
v(B.agT.prototype,"gbaH","E9",2)
u(B,"dM5","dum",6)
w(t=B.a59.prototype,"gbEM","u1",0)
w(t,"geH","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.L,[B.avS,B.U1,B.xQ,B.bAM])
v(A.bw,[B.cLz,B.cLw,B.cLx,B.cLy,B.b5q,B.bHB,B.crL,B.crN,B.caB,B.bip,B.biq,B.bir,B.bis,B.bAN])
u(B.Jp,A.ex)
v(A.G,[B.afs,B.ag2,B.UY,B.a56])
v(A.Y,[B.aTC,B.aTH,B.aTL,B.aTA])
u(B.aft,B.aTC)
v(A.bQ,[B.cb6,B.cb5,B.cb0,B.cb3,B.cb2,B.cb4,B.cb1,B.cgY,B.cgZ,B.bWr,B.bHA,B.bHz])
u(B.ag3,B.aTH)
v(A.J,[B.adJ,B.Pg,B.aeB,B.ack,B.ahO,B.aju,B.aj9,B.aGM,B.Xm,B.ayH])
u(B.abJ,A.dA)
u(B.aTg,A.du)
u(B.abK,B.aTg)
u(B.akQ,B.aTL)
u(B.agT,B.akQ)
v(A.cL,[B.crM,B.caA])
u(B.aF4,A.qC)
u(B.aq9,A.f3)
u(B.aJM,B.aTA)
u(B.a59,A.d_)
x(B.aTg,A.eq)
x(B.aTC,A.eq)
x(B.aTH,A.eq)
x(B.aTL,A.eq)
w(B.akQ,A.iy)
x(B.aTA,A.eq)})()
A.bs(b.typeUniverse,JSON.parse('{"afs":{"G":[],"e":[],"f":[]},"ag2":{"G":[],"e":[],"f":[]},"abJ":{"G":[],"e":[],"f":[]},"Jp":{"G":[],"e":[],"f":[]},"aft":{"Y":["afs"],"eq":[]},"ag3":{"Y":["ag2"],"eq":[]},"adJ":{"J":[],"e":[],"f":[]},"Pg":{"J":[],"e":[],"f":[]},"aeB":{"J":[],"e":[],"f":[]},"ack":{"J":[],"e":[],"f":[]},"ahO":{"J":[],"e":[],"f":[]},"aju":{"J":[],"e":[],"f":[]},"aj9":{"J":[],"e":[],"f":[]},"aGM":{"J":[],"e":[],"f":[]},"abK":{"Y":["abJ"],"eq":[]},"UY":{"G":[],"e":[],"f":[]},"Xm":{"J":[],"e":[],"f":[]},"agT":{"Y":["UY"],"eq":[]},"aF4":{"aS":[]},"a56":{"G":[],"e":[],"f":[]},"aJM":{"Y":["a56"],"eq":[]},"a59":{"d_":["xQ"],"aS":[]},"ayH":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),x:x("F<~>"),k:x("r<kL>"),G:x("r<U1>"),v:x("r<fL>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("di"),Y:x("U1"),N:x("c"),n:x("ln<xQ>"),J:x("lo<mI>"),q:x("dp"),z:x("@"),r:x("t<U1>?"),g:x("t<@>?"),X:x("L?"),t:x("avS?"),E:x("rC?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ag8=new A.dN(C.u9,C.ac,C.u9,C.ac)
D.agU=new A.I(null,null,D.ag8,null,null,null,C.y)
D.cqY=new B.aj9("S\xf3 funciona na tua conta",!0,null)
D.aki=new A.fa(C.L,null,null,D.cqY,null)
D.c64=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ciC=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c64,C.a6,null,null,null,null,null,null,null)
D.bMC=new A.R(C.ft,D.ciC,null)
D.akq=new A.fa(C.L,null,null,D.bMC,null)
D.aq8=new A.pk(C.cq,!0,D.akq,null)
D.aq9=new A.pk(C.ap,!0,null,null)
D.arq=new B.aq9(0,0,"noDuplicates")
D.arr=new B.aq9(1,1,"normal")
D.qs=new A.k_(0.5,0.5,null,null,C.fq,null)
D.cdf=new A.D("Lanterna",null,C.ch,null,null,null,null,null,null,null,null)
D.aAr=new A.bI(1,C.ar,D.cdf,null)
D.cob=new B.aeB("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bRq=new B.UY(420,!0,null,null)
D.bg9=x([D.cob,C.S,D.bRq],y.p)
D.bt_=x([C.u5],y.k)
D.crD=x([],y.k)
D.bA3=x([],y.G)
D.bKo=new A.M(16,2)
D.aDb=new A.aV(57911,"MaterialIcons",null,!1)
D.aDI=new A.b7(D.aDb,null,C.t,null,null,null)
D.bLK=new A.R(C.Nv,D.aDI,null)
D.cat=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.ch,null,null,null,null,null,null,null,null)
D.bM2=new A.R(C.fX,D.cat,null)
D.ciu=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.ch,null,null,null,null,null,null,null,null)
D.bMh=new A.R(C.qz,D.ciu,null)
D.cna=new B.aF4(null)
D.ar0=new A.uX(D.cna,null,C.aT,null,null)
D.bQN=new A.eM(0,0,0,0,null,null,D.ar0,null)
D.yE=new A.b2(14,14)
D.bS6=new A.a0("Bilhete",!1)
D.bSE=new A.a0("Organizas",!1)
D.bTd=new A.a0("Por entrar",!1)
D.bTz=new A.a0("Sem bilhete pago",!1)
D.bYY=new A.iz(186,186,8,C.dO,0,null)
D.bZp=new A.oR(2,C.a_,null)
D.c9Z=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.c_j=new A.bH(D.c9Z,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.z,null)
D.c9L=new A.D("Um QR para todos os eventos",null,C.O,null,null,null,null,null,null,null,null)
D.ccE=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.ch,C.a6,null,null,null,null,null,null,null)
D.cdu=new A.D("\xc0 procura de um QR\u2026",null,C.hp,null,null,null,null,null,null,null,null)
D.cdJ=new A.D("Entrada",null,C.hq,null,null,null,null,null,null,null,null)
D.cdP=new A.D("Sem liga\xe7\xe3o",null,C.O,null,null,null,null,null,null,null,null)
D.cmn=new B.abJ(null)
D.cmu=new B.Xm(null)
D.cmV=new B.ack("D\xc1 ENTRADA EM",null)
D.cmW=new B.ack("HOJE",null)
D.coc=new B.aeB("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cpf=new B.afs(null)
D.cpv=new B.ag2(null)})()};
(a=>{a["vHTcwAqUoVqUwXQLA3a9ydy1RcU="]=a.current})($__dart_deferred_initializers__);