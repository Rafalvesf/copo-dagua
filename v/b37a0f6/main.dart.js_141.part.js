((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dMf(d){var x,w,v=A.aT("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).h9(C.f.C(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aN7(w,x)},
cKf(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cKf=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jL("partner_today",y.z),$async$cKf)
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
J.bv(r,new A.aNy([k,n,m,l]))}}p=A.aI(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aI(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avQ(r,p,o)
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
return A.m($async$cKf,w)},
avQ:function avQ(d,e,f){this.a=d
this.b=e
this.c=f},
dui(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
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
o.push(new A.aMU(A.db(A.q(m.h(n,"at"))).dQ(),l))}}return new B.U1(h,g,x,w,v,u,r,s,q,p,o)},
cKd(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cKd=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jL("my_entries",y.z),$async$cKd)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ap(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.bv(r,B.dui(q))}v=r
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
return A.m($async$cKd,w)},
dLy(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbA().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cLk(w)
u=u.ch
u===$&&A.b()
return u.Mv(0,"entries-"+w,C.yL).Ox(new B.cLh(d),C.H9,x.$1("user_id"),v,"event_checkins").Ox(new B.cLi(d),C.H9,x.$1("user_id"),v,"booking_arrivals").Ox(new B.cLj(d),C.Ha,x.$1("buyer_id"),v,"event_tickets").Qt(0)},
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
cLk:function cLk(d){this.a=d},
cLh:function cLh(d){this.a=d},
cLi:function cLi(d){this.a=d},
cLj:function cLj(d){this.a=d},
dqQ(){return new B.Jp(null)},
ddt(d){return C.f.aX(C.j.k(A.id(d)),2,"0")+":"+C.f.aX(C.j.k(A.i_(d)),2,"0")},
Jp:function Jp(d){this.a=d},
b5l:function b5l(){},
afn:function afn(d){this.a=d},
afo:function afo(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
caX:function caX(d){this.a=d},
caW:function caW(d){this.a=d},
caR:function caR(d,e){this.a=d
this.b=e},
caU:function caU(d){this.a=d},
caT:function caT(d){this.a=d},
caV:function caV(d){this.a=d},
caS:function caS(d){this.a=d},
afY:function afY(d){this.a=d},
afZ:function afZ(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgO:function cgO(d,e){this.a=d
this.b=e},
cgP:function cgP(){},
adE:function adE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bWh:function bWh(d){this.a=d},
Pg:function Pg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aew:function aew(d,e){this.c=d
this.a=e},
acg:function acg(d,e){this.c=d
this.a=e},
ahJ:function ahJ(d,e){this.c=d
this.a=e},
ajq:function ajq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aj5:function aj5(d,e,f){this.c=d
this.d=e
this.a=f},
aGK:function aGK(d,e){this.c=d
this.a=e},
abF:function abF(d){this.a=d},
abG:function abG(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bHw:function bHw(d){this.a=d},
bHv:function bHv(){},
bHu:function bHu(d,e){this.a=d
this.b=e},
aTc:function aTc(){},
aTy:function aTy(){},
aTD:function aTD(){},
UY:function UY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agO:function agO(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ek$=e
_.bH$=f
_.c=_.a=null},
crB:function crB(){},
crC:function crC(d,e){this.a=d
this.b=e},
crD:function crD(d){this.a=d},
Xl:function Xl(d){this.a=d},
aF2:function aF2(d){this.a=d},
aTH:function aTH(){},
akM:function akM(){},
aq7:function aq7(d,e,f){this.c=d
this.a=e
this.b=f},
du8(d,e){},
a52:function a52(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJK:function aJK(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
car:function car(d){this.a=d},
caq:function caq(d,e){this.a=d
this.b=e},
aTw:function aTw(){},
du5(d,e){var x=null,w=d===D.arq?250:0
return new B.a55(d,w,e,new A.lo(x,x,y.J),new B.xQ(x,C.BE,x,!1,!1,C.aT,C.jl,1),$.aa())},
a55:function a55(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.W$=0
_.Y$=i
_.aI$=_.bl$=0},
bik:function bik(d){this.a=d},
bil:function bil(d){this.a=d},
bim:function bim(d){this.a=d},
bin:function bin(d){this.a=d},
xQ:function xQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayF:function ayF(d){this.a=d},
bAH:function bAH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAI:function bAI(){}},D,F,G,H,I,K,L
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
B.avQ.prototype={}
B.U1.prototype={}
B.Jp.prototype={
bf(d,e){var x=y.E
return e.H(A.cJ($.ba(),new B.b5l(),y.D,x),x)===C.dR?D.cpo:D.cp8}}
B.afn.prototype={
R(){return new B.afo()}}
B.afo.prototype={
ae(){var x=this
x.ao()
$.aB.b2$.push(x)
x.kw()
x.r=B.dLy(new B.caX(x))},
m(){var x,w,v=this
$.aB.ii(v)
x=v.w
if(x!=null)x.aN(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yr(x)}v.a5()},
nj(d){if(d===C.et)this.kw()},
Dz(d){return this.b8S(d)},
kw(){return this.Dz(!1)},
b8S(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Dz=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ap(o==null?D.bA_:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cKd(),$async$Dz)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.caR(u,s))
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
return A.m($async$Dz,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDy(),q=u.d,p=y.p
q=A.a([new B.Pg("QR code",C.qS,!q,new B.caU(u),t),new B.Pg("Scannear",C.vQ,q,new B.caV(u),t)],p)
if(u.d)p=D.bg5
else{x=A.a([D.cmg,C.S,D.akh,C.bt,D.cmO,C.av],p)
w=s==null
if(w&&!u.f)x.push(L.a9a)
else if(w)x.push(new B.ahJ(r,t))
else{w=J.a7(s)
if(w.gZ(s))x.push(D.bMd)
else{v=A.a([],p)
for(w=w.gX(s);w.t();)C.e.n(v,A.a([D.qs,new B.aGK(w.gE(w),t)],p))
v.push(D.qs)
C.e.n(x,v)}}p=x}return new B.adE(r,q,p,t)}}
B.afY.prototype={
R(){return new B.afZ()}}
B.afZ.prototype={
ae(){this.ao()
$.aB.b2$.push(this)
this.kw()},
m(){$.aB.ii(this)
this.a5()},
nj(d){if(d===C.et)this.kw()},
kw(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kw=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cKf(),$async$kw)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cgO(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kw,w)},
Rf(){var x=0,w=A.n(y.H),v=this,u
var $async$Rf=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ai(u).aw("/cobrar",null,y.X),$async$Rf)
case 2:if(v.c!=null)v.kw()
return A.l(null,w)}})
return A.m($async$Rf,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDy(),k=y.p,j=A.a([new B.Pg("Scannear",C.vQ,!0,new B.cgP(),n),new B.Pg("Cobrar",C.o8,!1,o.gaV2(),n)],k),i=A.a([D.co5,C.S,new B.UY(290,!1,l,n),C.bt,D.cmP,C.av],k),h=m==null
if(h&&!o.e)i.push(D.bZl)
else if(h)i.push(new B.ahJ(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bLZ)
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
t=p}C.e.n(h,A.a([D.qs,new B.ajq(s,r,t,q>0,n,n)],k))}h.push(D.qs)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.ajq("Cobrado hoje",k,n,!1,F.cJB(m.b),n))
h.push(D.qs)
C.e.n(i,h)}return new B.adE(l,j,i,n)}}
B.adE.prototype={
u(d){var x=null,w=C.Dj.B(0,new A.a2(0,A.ax(d,C.b7,y.w).w.r.b,0,0)),v=A.a([new A.d1(C.bg,x,x,A.q1(C.lU,new B.bWh(d),"Voltar"),x),C.S,D.cdE,C.aC,A.e1(C.bf,this.d,C.r,C.bm,8,8),C.aC],y.p)
C.e.n(v,this.e)
return A.cQ(x,C.bB,A.bF(!0,A.Bf(A.cZ(v,x,w,x,x,!1,C.a2,!1),x,this.c),x,C.a_,!1),!0,x)}}
B.Pg.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.A,t=v?$.au:C.t
return A.b7(w,!0,w,A.fr(!1,C.aD,!0,w,A.eI(!1,w,!0,A.aH(new A.R(C.bV,A.O(A.a([A.b6(x.d,u,w,w,16),C.bk,A.h(x.c,w,w,w,w,A.aJ(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.w,C.h,C.K,0,w,w),w),38,w),C.ad,!0,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ad,w,w,C.cC),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.aew.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.O,x,x,x)}}
B.acg.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aP,x,x,x)}}
B.ahJ.prototype={
u(d){var x=null
return new A.R(C.qz,A.y(A.a([D.ccz,A.cv(C.tC,x,x,this.c,x,x)],y.p),C.w,C.h,C.l,0,C.u),x)}}
B.ajq.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.ab,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.O,u,u,u))
t=A.a([A.a4(A.y(s,C.H,C.h,C.l,0,C.u),1),C.ah],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cz:C.dV
w=A.W(999)
t.push(A.z(u,A.h(s,u,u,u,u,A.aJ(u,u,r?C.cY:C.cq,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(x,u,u,w,u,u,C.y),u,u,u,C.dq,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.ab,u,u,u))
return new A.R(C.cn,A.O(t,C.w,C.h,C.l,0,u,u),u)}}
B.aj5.prototype={
u(d){var x=null,w=this.d,v=w?C.cz:C.dV,u=A.W(999)
return A.z(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?C.cY:C.cq,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.y),x,x,x,C.dq,x,x,x)}}
B.aGK.prototype={
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
if(k!=null)s=new A.a0("Entrou \xe0s "+B.ddt(k),!0)
else if(t!=null){k=new A.a0("Chegou \xe0s "+B.ddt(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bTv
else if(x)k=D.bSA
else k=m.f?D.bS2:D.bT9
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.ab,n,n,n)],k)
if(u.length!==0)x.push(new A.R(K.NA,A.h(u,n,n,n,n,C.O,n,n,n),n))
return new A.R(C.cn,A.O(A.a([A.a4(A.y(x,C.H,C.h,C.l,0,C.u),1),C.ah,new B.aj5(o,q,n)],k),C.H,C.h,C.l,0,n,n),n)}}
B.abF.prototype={
R(){return new B.abG(new A.ac(Date.now(),0,!1),C.nA)}}
B.abG.prototype={
ae(){var x=this
x.ao()
$.aB.b2$.push(x)
x.kw()
x.as=A.uc(C.fW,new B.bHw(x))},
m(){var x,w=this
$.aB.ii(w)
x=w.Q
if(x!=null)x.aN(0)
x=w.as
if(x!=null)x.aN(0)
w.a5()},
nj(d){var x
if(d===C.et)this.kw()
else if(d===C.mX){x=this.Q
if(x!=null)x.aN(0)}},
kw(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kw=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aN(0)
x=3
return A.d(A.aVu(),$async$kw)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bHu(u,t))
s=t==null?null:t.b
if(s==null)s=C.nC
u.Q=A.dj(s,u.gDy())
case 1:return A.l(v,w)}})
return A.m($async$kw,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().H($.ba(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.C(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.C(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cJ(new A.ac(Date.now(),0,!1)).a
v=x<0?0:C.k.eG(C.j.aQ(x,1000)/1000)
u=C.k.ah(C.j.aQ(x,1000)/C.j.aQ(o.z.a,1000),0,1)
x=A.W(16)
t=A.bC(C.fq,0.5)
s=A.W(16)
r=A.bC(C.fq,0.5)
k=!k
if(k)q=A.cXS(C.t,A.kG("/q/"+l.a),C.Hc,C.Hd,C.a_,"C\xf3digo QR da conta",186)
else q=o.x?D.bYU:A.bK(A.y(A.a([C.aEz,C.aG,D.cdK,A.cv(C.tC,n,n,o.gDy(),n,n)],y.p),C.w,C.h,C.K,0,C.u),n,n)
p=y.p
s=A.a([A.z(n,A.aH(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.y),n,n,n,C.cK,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ae,A.z(C.bg,A.arF(C.L,A.z(n,n,C.r,n,n,new A.I(C.uy,n,n,A.W(2),n,n,C.y),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.fq,n,n,k,n,n,C.y),n,4,n,n,n,n,214),C.aG,A.b7(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.O,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.S)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.cq(k,32,r,!1,!0,n),C.ah,new A.dc(1,C.b6,A.y(A.a([A.h(w,n,n,n,n,C.ab,n,n,n),D.c9G],p),C.H,C.h,C.l,0,C.u),n)],p),C.w,C.bW,C.l,0,n,n))
return A.z(n,A.y(s,C.w,C.h,C.l,0,C.u),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.y),n,n,n,C.cK,n,n,n)}}
B.aTc.prototype={}
B.aTy.prototype={}
B.aTD.prototype={}
B.UY.prototype={
R(){return new B.agO(B.du5(D.arp,D.bsW),null,null)}}
B.agO.prototype={
gKV(){var x,w=this,v=w.e
if(v===$){x=A.cE(null,E.Nk,null,1,null,w)
w.e!==$&&A.aW()
w.e=x
v=x}return v},
ae(){this.ao()
$.aB.b2$.push(this)},
bL(){var x,w,v=this
v.d7()
x=v.c
x.toString
if(A.ax(x,null,y.w).w.ax)v.gKV().d6(0)
else{x=v.gKV()
w=x.r
if(!(w!=null&&w.a!=null))x.adu(0,!0)}},
nj(d){if(this.f)return
if(d===C.et)this.d.kh(0)
else if(d===C.mX)this.d.d6(0)},
m(){var x=this
$.aB.ii(x)
x.gKV().m()
x.d.m()
x.aQC()},
E7(d){return this.baF(d)},
baF(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$E7=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dMf(t)
if(p==null){s=u.c.O(y.q).f
s.aAJ()
s.a2(D.c_f)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d6(0),$async$E7)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ai(r).aw(m,null,y.X),$async$E7)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.kh(0),$async$E7)
case 5:case 1:return A.l(v,w)}})
return A.m($async$E7,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fX(A.W(16),A.aH(new A.bB(C.ay,w,C.e9,C.z,A.a([C.jB,new B.a52(t,x.gbaE(),new B.crB(),w),A.bK(A.aH(new A.bB(C.ay,w,C.aE,C.z,A.a([D.bQJ,A.f9(x.gKV(),new B.crC(x,u),w)],s),w),u,u),w,w),A.ce(16,A.bK(A.z(w,D.cdp,C.r,w,w,new A.I(C.t,w,w,A.W(999),w,w,C.y),w,w,w,C.dq,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.ba)],s)
if(x.a.d)s.push(new A.ln(t,new B.crD(x),w,w,y.n))
return A.y(s,C.G,C.h,C.l,0,C.u)}}
B.Xl.prototype={
u(d){return D.aq7}}
B.aF2.prototype={
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
u.AH(D.bKk,D.yD)
u.aG(new A.cS(44,2))
d.dU(u,m)
u=new A.cB(n,C.aR,o,o,A.a([],v))
t=x-44
u.aG(new A.f1(t,2))
s=x-16
u.aG(new A.cS(s,2))
r=x-2
u.AH(new A.M(r,16),D.yD)
u.aG(new A.cS(r,44))
d.dU(u,m)
u=new A.cB(n,C.aR,o,o,A.a([],v))
q=w-44
u.aG(new A.f1(r,q))
p=w-16
u.aG(new A.cS(r,p))
r=w-2
u.AH(new A.M(s,r),D.yD)
u.aG(new A.cS(t,r))
d.dU(u,m)
v=new A.cB(n,C.aR,o,o,A.a([],v))
v.aG(new A.f1(44,r))
v.aG(new A.cS(16,r))
v.AH(new A.M(2,p),D.yD)
v.aG(new A.cS(2,q))
d.dU(v,m)},
dR(d){return!1}}
B.aTH.prototype={}
B.akM.prototype={
m(){var x=this,w=x.bH$
if(w!=null)w.a_(0,x.ghw())
x.bH$=null
x.a5()},
bV(){this.cC()
this.d4()
this.hx()}}
B.aq7.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a52.prototype={
R(){return new B.aJK()}}
B.aJK.prototype={
b9C(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.ln(x,new B.car(this),null,null,y.n)},
YG(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$YG=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hd(t,A.u(t).i("hd<1>")).YT(s.d,!1,B.dLS())
x=2
return A.d(u.kh(0),$async$YG)
case 2:return A.l(null,w)}})
return A.m($async$YG,w)},
Ne(){var x=0,w=A.n(y.H),v=this,u
var $async$Ne=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aN(0)
x=2
return A.d(y.x.b(u)?u:A.ej(u,y.H),$async$Ne)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d6(0),$async$Ne)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$Ne,w)},
ae(){var x,w=this
w.ao()
x=w.a.c
w.d!==$&&A.bx()
w.d=x
w.YG()},
m(){this.a5()
this.Ne()},
nj(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.y8}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.kh(0)
break
case 2:w.d6(0)
break}}}
B.aTw.prototype={}
B.a55.prototype={
bk1(){var x=this
x.CW=$.I1().gawL().YT(new B.bik(x),!1,new B.bil(x))
x.cx=$.I1().gaEe().ls(new B.bim(x))
x.cy=$.I1().gaFh().ls(new B.bin(x))},
b9U(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aN(0)
w=x.cx
if(w!=null)w.aN(0)
w=x.cy
if(w!=null)w.aN(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bsV(!1,w.r===C.jl?C.jl:C.ac1))
return!0},
kh(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$kh=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xP(C.y7,A.xO(null,null,C.y7.geU(0))))
if(s.a.e){x=1
break}r=C.BE
q=new B.bAH(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bk1()
x=7
return A.d($.I1().lE(0,q),$async$kh)
case 7:p=f
if(!s.db)s.sv(0,s.a.bte(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tD){o=m
if(!s.db)s.sv(0,s.a.btg(C.BE,o,!0,!1,C.aT,C.jl,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kh,w)},
d6(d){var x=0,w=A.n(y.H),v=this
var $async$d6=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b9U()?2:3
break
case 2:x=4
return A.d($.I1().d6(0),$async$d6)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d6,w)},
u0(){var x=0,w=A.n(y.H),v,u=this,t
var $async$u0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.al(A.xP(C.a20,A.xO(null,null,C.a20.geU(0))))
if(u.db)A.al(A.xP(C.y7,A.xO(null,null,C.y7.geU(0))))
if(!t.e){x=1
break}if(t.r===C.jl){x=1
break}x=3
return A.d($.I1().u0(),$async$u0)
case 3:case 1:return A.l(v,w)}})
return A.m($async$u0,w)},
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
MH(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xQ(w,v,f,u,t,s,r,k==null?x.w:k)},
bsV(d,e){var x=null
return this.MH(x,x,x,x,d,x,e,x)},
bte(d,e,f,g,h,i){return this.MH(d,e,null,f,g,h,i,null)},
btg(d,e,f,g,h,i,j){return this.MH(null,d,e,f,g,h,i,j)},
bsE(d){var x=null
return this.MH(x,x,x,x,x,x,x,d)},
bsz(d){var x=null
return this.MH(x,x,x,x,x,x,d,x)}}
B.ayF.prototype={
u(d){var x=null,w=A.a([D.bLG],y.p)
w.push(A.h(C.k6.geU(0),x,x,x,x,C.aax,x,x,x))
return A.kM(A.bK(A.y(w,C.w,C.h,C.K,0,C.u),x,x),C.ap,!0)}}
B.bAH.prototype={
a_G(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("aj<1,v>")
x=A.U(new A.aj(x,new B.bAI(),w),w.i("aZ.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:x})","F<~>(mG)","Xl(N,tD,e?)","cg(N,xQ,e?)","e(N,xQ,e?)","~(L,c2)"])
B.cLk.prototype={
$1(d){return new H.FA(I.yy,d,this.a)},
$S:1376}
B.cLh.prototype={
$1(d){return this.a.$0()},
$S:156}
B.cLi.prototype={
$1(d){return this.a.$0()},
$S:156}
B.cLj.prototype={
$1(d){return this.a.$0()},
$S:156}
B.b5l.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:110}
B.caX.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aN(0)
x.w=A.dj(C.fs,new B.caW(x))},
$S:0}
B.caW.prototype={
$0(){return this.a.Dz(!0)},
$S:0}
B.caR.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.caU.prototype={
$0(){var x=this.a
return x.p(new B.caT(x))},
$S:0}
B.caT.prototype={
$0(){return this.a.d=!1},
$S:0}
B.caV.prototype={
$0(){var x=this.a
return x.p(new B.caS(x))},
$S:0}
B.caS.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cgO.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cgP.prototype={
$0(){},
$S:0}
B.bWh.prototype={
$0(){return A.am(this.a,!1).iD()},
$S:0}
B.bHw.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bHv())},
$S:68}
B.bHv.prototype={
$0(){},
$S:0}
B.bHu.prototype={
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
B.crB.prototype={
$3(d,e,f){return D.cmn},
$S:z+3}
B.crC.prototype={
$2(d,e){var x=null,w=this.a.gKV().x
w===$&&A.b()
return A.ce(x,A.z(x,x,C.r,C.uy,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:234}
B.crD.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jl)return C.as
x=t===C.ac2
t=x?C.cz:C.dV
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.R(C.Ny,A.b7(u,!0,u,A.eI(!1,u,!0,A.z(u,A.O(A.a([D.aAp,A.z(u,A.h(v,u,u,u,u,A.aJ(u,u,x?C.cY:C.cq,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.y),u,u,u,C.dq,u,u,u)],y.p),C.w,C.h,C.l,0,u,u),C.r,u,G.iD,D.agT,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,this.a.d.gbEJ(),u,u,u,u,u,u,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.car.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aq8}x=e.c
if(x!=null){w=new B.ayF(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.ks(new B.caq(this.a,e))},
$S:z+5}
B.caq.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b9C(u,e)
v.a.toString
x=u.f
v=A.ah(1/0,e.a,e.b)
u=A.ah(1/0,e.c,e.d)
w=A.x2(A.vY(A.DY(C.L,A.aH($.I1().awQ(),x.b,x.a),C.r,C.bL),new A.ad(v,u)),C.z,null)
return w},
$S:108}
B.bik.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1377}
B.bil.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xs(d)},
$S:70}
B.bim.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bsz(d))},
$S:1378}
B.bin.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bsE(d))},
$S:121}
B.bAI.prototype={
$1(d){return d.c},
$S:1379};(function aliases(){var x=B.akM.prototype
x.aQC=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.afo.prototype,"gDy",0,0,null,["$1$announce","$0"],["Dz","kw"],1,0,0)
var t
w(t=B.afZ.prototype,"gDy","kw",0)
w(t,"gaV2","Rf",0)
w(B.abG.prototype,"gDy","kw",0)
v(B.agO.prototype,"gbaE","E7",2)
u(B,"dLS","du8",6)
w(t=B.a55.prototype,"gbEJ","u0",0)
w(t,"geH","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.L,[B.avQ,B.U1,B.xQ,B.bAH])
v(A.bw,[B.cLk,B.cLh,B.cLi,B.cLj,B.b5l,B.bHw,B.crB,B.crD,B.car,B.bik,B.bil,B.bim,B.bin,B.bAI])
u(B.Jp,A.ex)
v(A.G,[B.afn,B.afY,B.UY,B.a52])
v(A.Y,[B.aTy,B.aTD,B.aTH,B.aTw])
u(B.afo,B.aTy)
v(A.bQ,[B.caX,B.caW,B.caR,B.caU,B.caT,B.caV,B.caS,B.cgO,B.cgP,B.bWh,B.bHv,B.bHu])
u(B.afZ,B.aTD)
v(A.J,[B.adE,B.Pg,B.aew,B.acg,B.ahJ,B.ajq,B.aj5,B.aGK,B.Xl,B.ayF])
u(B.abF,A.dA)
u(B.aTc,A.du)
u(B.abG,B.aTc)
u(B.akM,B.aTH)
u(B.agO,B.akM)
v(A.cL,[B.crC,B.caq])
u(B.aF2,A.qB)
u(B.aq7,A.f3)
u(B.aJK,B.aTw)
u(B.a55,A.d_)
x(B.aTc,A.ep)
x(B.aTy,A.ep)
x(B.aTD,A.ep)
x(B.aTH,A.ep)
w(B.akM,A.iy)
x(B.aTw,A.ep)})()
A.bs(b.typeUniverse,JSON.parse('{"afn":{"G":[],"e":[],"f":[]},"afY":{"G":[],"e":[],"f":[]},"abF":{"G":[],"e":[],"f":[]},"Jp":{"G":[],"e":[],"f":[]},"afo":{"Y":["afn"],"ep":[]},"afZ":{"Y":["afY"],"ep":[]},"adE":{"J":[],"e":[],"f":[]},"Pg":{"J":[],"e":[],"f":[]},"aew":{"J":[],"e":[],"f":[]},"acg":{"J":[],"e":[],"f":[]},"ahJ":{"J":[],"e":[],"f":[]},"ajq":{"J":[],"e":[],"f":[]},"aj5":{"J":[],"e":[],"f":[]},"aGK":{"J":[],"e":[],"f":[]},"abG":{"Y":["abF"],"ep":[]},"UY":{"G":[],"e":[],"f":[]},"Xl":{"J":[],"e":[],"f":[]},"agO":{"Y":["UY"],"ep":[]},"aF2":{"aS":[]},"a52":{"G":[],"e":[],"f":[]},"aJK":{"Y":["a52"],"ep":[]},"a55":{"d_":["xQ"],"aS":[]},"ayF":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),x:x("F<~>"),k:x("r<kL>"),G:x("r<U1>"),v:x("r<fL>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("di"),Y:x("U1"),N:x("c"),n:x("ln<xQ>"),J:x("lo<mG>"),q:x("dp"),z:x("@"),r:x("t<U1>?"),g:x("t<@>?"),X:x("L?"),t:x("avQ?"),E:x("rB?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ag7=new A.dN(C.u9,C.ac,C.u9,C.ac)
D.agT=new A.I(null,null,D.ag7,null,null,null,C.y)
D.cqR=new B.aj5("S\xf3 funciona na tua conta",!0,null)
D.akh=new A.fa(C.L,null,null,D.cqR,null)
D.c60=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.civ=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c60,C.a6,null,null,null,null,null,null,null)
D.bMy=new A.R(C.ft,D.civ,null)
D.akp=new A.fa(C.L,null,null,D.bMy,null)
D.aq7=new A.pk(C.cq,!0,D.akp,null)
D.aq8=new A.pk(C.ap,!0,null,null)
D.arp=new B.aq7(0,0,"noDuplicates")
D.arq=new B.aq7(1,1,"normal")
D.qs=new A.k_(0.5,0.5,null,null,C.fq,null)
D.cda=new A.D("Lanterna",null,C.ch,null,null,null,null,null,null,null,null)
D.aAp=new A.bI(1,C.ar,D.cda,null)
D.co4=new B.aew("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bRm=new B.UY(420,!0,null,null)
D.bg5=x([D.co4,C.S,D.bRm],y.p)
D.bsW=x([C.u5],y.k)
D.crw=x([],y.k)
D.bA_=x([],y.G)
D.bKk=new A.M(16,2)
D.aD9=new A.aV(57911,"MaterialIcons",null,!1)
D.aDH=new A.b8(D.aD9,null,C.t,null,null,null)
D.bLG=new A.R(C.Nv,D.aDH,null)
D.cao=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.ch,null,null,null,null,null,null,null,null)
D.bLZ=new A.R(C.fX,D.cao,null)
D.cin=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.ch,null,null,null,null,null,null,null,null)
D.bMd=new A.R(C.qz,D.cin,null)
D.cn3=new B.aF2(null)
D.ar_=new A.uX(D.cn3,null,C.aT,null,null)
D.bQJ=new A.eM(0,0,0,0,null,null,D.ar_,null)
D.yD=new A.b2(14,14)
D.bS2=new A.a0("Bilhete",!1)
D.bSA=new A.a0("Organizas",!1)
D.bT9=new A.a0("Por entrar",!1)
D.bTv=new A.a0("Sem bilhete pago",!1)
D.bYU=new A.iz(186,186,8,C.dO,0,null)
D.bZl=new A.oR(2,C.a_,null)
D.c9U=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.c_f=new A.bH(D.c9U,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.z,null)
D.c9G=new A.D("Um QR para todos os eventos",null,C.O,null,null,null,null,null,null,null,null)
D.ccz=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.ch,C.a6,null,null,null,null,null,null,null)
D.cdp=new A.D("\xc0 procura de um QR\u2026",null,C.hq,null,null,null,null,null,null,null,null)
D.cdE=new A.D("Entrada",null,C.hr,null,null,null,null,null,null,null,null)
D.cdK=new A.D("Sem liga\xe7\xe3o",null,C.O,null,null,null,null,null,null,null,null)
D.cmg=new B.abF(null)
D.cmn=new B.Xl(null)
D.cmO=new B.acg("D\xc1 ENTRADA EM",null)
D.cmP=new B.acg("HOJE",null)
D.co5=new B.aew("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cp8=new B.afn(null)
D.cpo=new B.afY(null)})()};
(a=>{a["oUiiMuW20KpcKwTJLsRoKx7du3g="]=a.current})($__dart_deferred_initializers__);