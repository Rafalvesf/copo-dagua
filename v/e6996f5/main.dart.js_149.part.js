((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dLU(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fX(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMb(w,x)},
cJo(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJo=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jf("partner_today",y.z),$async$cJo)
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
J.br(r,new A.aMC([k,n,m,l]))}}p=A.aD(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aD(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.av7(r,p,o)
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
return A.m($async$cJo,w)},
av7:function av7(d,e,f){this.a=d
this.b=e
this.c=f},
dtU(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
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
p=p==null?k:p.dF()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ao(j==null?C.ai:j)
while(j.q()){n=j.gE(j)
if(t.b(n)&&A.d2(A.p(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.p(l==null?"Parceiro":l)
o.push(new A.aLY(A.dc(A.p(m.h(n,"at"))).dF(),l))}}return new B.TM(h,g,x,w,v,u,r,s,q,p,o)},
cJm(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJm=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jf("my_entries",y.z),$async$cJm)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.br(r,B.dtU(q))}v=r
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
return A.m($async$cJm,w)},
dLd(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbu().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKt(w)
u=u.ch
u===$&&A.b()
return u.LS(0,"entries-"+w,C.yh).NI(new B.cKq(d),C.GD,x.$1("user_id"),v,"event_checkins").NI(new B.cKr(d),C.GD,x.$1("user_id"),v,"booking_arrivals").NI(new B.cKs(d),C.GE,x.$1("buyer_id"),v,"event_tickets").Pw(0)},
TM:function TM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKt:function cKt(d){this.a=d},
cKq:function cKq(d){this.a=d},
cKr:function cKr(d){this.a=d},
cKs:function cKs(d){this.a=d},
dqp(){return new B.Jf(null)},
dcT(d){return C.f.aT(C.j.k(A.hZ(d)),2,"0")+":"+C.f.aT(C.j.k(A.hO(d)),2,"0")},
Jf:function Jf(d){this.a=d},
b4o:function b4o(){},
aeH:function aeH(d){this.a=d},
aeI:function aeI(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c9U:function c9U(d){this.a=d},
c9T:function c9T(d){this.a=d},
c9O:function c9O(d,e){this.a=d
this.b=e},
c9R:function c9R(d){this.a=d},
c9Q:function c9Q(d){this.a=d},
c9S:function c9S(d){this.a=d},
c9P:function c9P(d){this.a=d},
afj:function afj(d){this.a=d},
afk:function afk(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cg2:function cg2(d,e){this.a=d
this.b=e},
cg3:function cg3(){},
ad4:function ad4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bV6:function bV6(d){this.a=d},
P4:function P4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
adV:function adV(d,e){this.c=d
this.a=e},
abO:function abO(d,e){this.c=d
this.a=e},
ah4:function ah4(d,e){this.c=d
this.a=e},
aiH:function aiH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
air:function air(d,e,f){this.c=d
this.d=e
this.a=f},
aFQ:function aFQ(d,e){this.c=d
this.a=e},
abd:function abd(d){this.a=d},
abe:function abe(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bH7:function bH7(d){this.a=d},
bH6:function bH6(){},
bH5:function bH5(d,e){this.a=d
this.b=e},
aSg:function aSg(){},
aSC:function aSC(){},
aSH:function aSH(){},
UI:function UI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aga:function aga(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.eo$=e
_.bH$=f
_.c=_.a=null},
cr5:function cr5(){},
cr6:function cr6(d,e){this.a=d
this.b=e},
cr7:function cr7(d){this.a=d},
X5:function X5(d){this.a=d},
aEi:function aEi(d){this.a=d},
aSL:function aSL(){},
ak_:function ak_(){},
api:function api(d,e,f){this.c=d
this.a=e
this.b=f},
dtK(d,e){},
a4D:function a4D(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aIP:function aIP(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9q:function c9q(d){this.a=d},
c9p:function c9p(d,e){this.a=d
this.b=e},
aSA:function aSA(){},
dtH(d,e){var x=null,w=d===D.aqg?250:0
return new B.a4G(d,w,e,new A.lp(x,x,y.J),new B.xH(x,C.Bb,x,!1,!1,C.aR,C.jc,1),$.aa())},
a4G:function a4G(d,e,f,g,h,i){var _=this
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
bhg:function bhg(d){this.a=d},
bhh:function bhh(d){this.a=d},
bhi:function bhi(d){this.a=d},
bhj:function bhj(d){this.a=d},
xH:function xH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
axY:function axY(d){this.a=d},
bAg:function bAg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAh:function bAh(){}},D,F,G,H,I,K,L,M
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
B.av7.prototype={}
B.TM.prototype={}
B.Jf.prototype={
b9(d,e){var x=y.E
return e.G(A.cB($.b7(),new B.b4o(),y.D,x),x)===C.dQ?D.cng:D.cn0}}
B.aeH.prototype={
R(){return new B.aeI()}}
B.aeI.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.km()
x.r=B.dLd(new B.c9U(x))},
m(){var x,w,v=this
$.az.i9(v)
x=v.w
if(x!=null)x.aK(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y3(x)}v.a7()},
ne(d){if(d===C.es)this.km()},
D5(d){return this.b65(d)},
km(){return this.D5(!1)},
b65(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$D5=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.bzt:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJm(),$async$D5)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.c9O(u,s))
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
q=A.a([new B.P4("QR code",C.qf,!q,new B.c9R(u),t),new B.P4("Scannear",C.vk,q,new B.c9S(u),t)],p)
if(u.d)p=D.beS
else{x=A.a([D.ck8,C.R,D.ajc,C.bO,D.ckG,C.ar],p)
w=s==null
if(w&&!u.f)x.push(M.a8m)
else if(w)x.push(new B.ah4(r,t))
else{w=J.a7(s)
if(w.gY(s))x.push(D.bKv)
else{v=A.a([],p)
for(w=w.gX(s);w.q();)C.e.n(v,A.a([D.pO,new B.aFQ(w.gE(w),t)],p))
v.push(D.pO)
C.e.n(x,v)}}p=x}return new B.ad4(r,q,p,t)}}
B.afj.prototype={
R(){return new B.afk()}}
B.afk.prototype={
ad(){this.aq()
$.az.b4$.push(this)
this.km()},
m(){$.az.i9(this)
this.a7()},
ne(d){if(d===C.es)this.km()},
km(){var x=0,w=A.n(y.H),v,u=this,t
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJo(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cg2(u,t))
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
Qi(){var x=0,w=A.n(y.H),v=this,u
var $async$Qi=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ae(u).ak("/cobrar",null,y.X),$async$Qi)
case 2:if(v.c!=null)v.km()
return A.l(null,w)}})
return A.m($async$Qi,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gD4(),k=y.p,j=A.a([new B.P4("Scannear",C.vk,!0,new B.cg3(),n),new B.P4("Cobrar",C.nL,!1,o.gaT8(),n)],k),i=A.a([D.clW,C.R,new B.UI(290,!1,l,n),C.bO,D.ckH,C.ar],k),h=m==null
if(h&&!o.e)i.push(H.a8j)
else if(h)i.push(new B.ah4(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKS)
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
t=p}C.e.n(h,A.a([D.pO,new B.aiH(s,r,t,q>0,n,n)],k))}h.push(D.pO)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aiH("Cobrado hoje",k,n,!1,F.cIJ(m.b),n))
h.push(D.pO)
C.e.n(i,h)}return new B.ad4(l,j,i,n)}}
B.ad4.prototype={
u(d){var x=null,w=C.CP.C(0,new A.a3(0,A.aT(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d_(C.bc,x,x,A.pU(C.lB,new B.bV6(d),"Voltar"),x),C.R,D.caq,C.aA,A.e4(C.bf,this.d,C.r,C.bk,8,8),C.aA],y.p)
C.e.n(v,this.e)
return A.cP(x,C.by,A.bB(!0,A.B0(A.d6(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.P4.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.bi(w,!0,w,A.hh(!1,C.aM,!0,w,A.eY(!1,w,!0,A.aK(new A.S(C.bY,A.O(A.a([A.b9(x.d,u,w,w,16),C.bj,A.h(x.c,w,w,w,w,A.aI(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.v,C.h,C.J,0,w),w),38,w),C.aa,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.aa,w,w,C.cW),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.adV.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x)}}
B.abO.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aH,x,x)}}
B.ah4.prototype={
u(d){var x=null
return new A.S(C.pW,A.z(A.a([D.c7A,new A.am(A.cJ(C.t4,x,x,this.c,x,x),x)],y.p),C.v,C.h,C.l),x)}}
B.aiH.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u))
t=A.a([A.a4(A.z(s,C.G,C.h,C.l),1),C.ae],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cx:C.dU
w=A.W(999)
t.push(A.x(u,A.h(s,u,u,u,u,A.aI(u,u,r?C.cR:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.I(x,u,u,w,u,u,C.x),u,u,u,C.dl,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u))
return new A.S(C.cj,A.O(t,C.v,C.h,C.l,0,u),u)}}
B.air.prototype={
u(d){var x=null,w=this.d,v=w?C.cx:C.dU,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?C.cR:C.cn,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.x),x,x,x,C.dl,x,x,x)}}
B.aFQ.prototype={
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
if(k!=null)s=new A.X("Entrou \xe0s "+B.dcT(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.dcT(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSd
else if(x)k=D.bRf
else k=m.f?D.bQI:D.bRP
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n)],k)
if(u.length!==0)x.push(new A.S(L.MS,A.h(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.cj,A.O(A.a([A.a4(A.z(x,C.G,C.h,C.l),1),C.ae,new B.air(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abd.prototype={
R(){return new B.abe(new A.ac(Date.now(),0,!1),C.lo)}}
B.abe.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.km()
x.as=A.u6(C.hq,new B.bH7(x))},
m(){var x,w=this
$.az.i9(w)
x=w.Q
if(x!=null)x.aK(0)
x=w.as
if(x!=null)x.aK(0)
w.a7()},
ne(d){var x
if(d===C.es)this.km()
else if(d===C.mA){x=this.Q
if(x!=null)x.aK(0)}},
km(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aK(0)
x=3
return A.d(A.aUz(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bH5(u,t))
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
t=A.bF(C.f9,0.5)
s=A.W(16)
r=A.bF(C.f9,0.5)
k=!k
if(k)q=A.bpj(C.t,A.kg("/q/"+l.a),C.GG,C.GH,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXe:A.bO(A.z(A.a([C.aDr,C.aE,D.cev,new A.am(A.cJ(C.t4,n,n,o.gD4(),n,n),n)],y.p),C.v,C.h,C.J),n,n)
p=y.p
s=A.a([A.x(n,A.aK(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.x),n,n,n,C.cT,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ac,A.x(C.bc,A.aqS(C.K,A.x(n,n,C.r,n,n,new A.I(C.u6,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.f9,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aE,A.bi(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.cg(k,32,r,!1,!0,n),C.ae,new A.di(1,C.bb,A.z(A.a([A.h(w,n,n,n,n,C.a9,n,n),D.cgo],p),C.G,C.h,C.l),n)],p),C.v,C.bR,C.l,0,n))
return A.x(n,A.z(s,C.v,C.h,C.l),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.x),n,n,n,C.cT,n,n,n)}}
B.aSg.prototype={}
B.aSC.prototype={}
B.aSH.prototype={}
B.UI.prototype={
R(){return new B.aga(B.dtH(D.aqf,D.brI),null,null)}}
B.aga.prototype={
gKi(){var x,w=this,v=w.e
if(v===$){x=A.cG(null,E.ME,null,null,w)
w.e!==$&&A.b_()
w.e=x
v=x}return v},
ad(){this.aq()
$.az.b4$.push(this)},
c0(){var x,w,v=this
v.e0()
x=v.c
x.toString
if(A.aT(x,null,y.w).w.ax)v.gKi().cX(0)
else{x=v.gKi()
w=x.r
if(!(w!=null&&w.a!=null))x.aBX(0,!0)}},
ne(d){if(this.f)return
if(d===C.es)this.d.jZ(0)
else if(d===C.mA)this.d.cX(0)},
m(){var x=this
$.az.i9(x)
x.gKi().m()
x.d.m()
x.aOR()},
DG(d){return this.b7S(d)},
b7S(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DG=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dLU(t)
if(p==null){s=u.c.O(y.q).f
s.XC()
s.a0(D.bYz)
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
s=A.a([A.fR(A.W(16),A.aK(new A.bA(C.aw,w,C.e4,C.y,A.a([C.js,new B.a4D(t,x.gb7R(),new B.cr5(),w),A.bO(A.aK(new A.bA(C.aw,w,C.aC,C.y,A.a([D.bPl,A.eT(x.gKi(),new B.cr6(x,u),w)],s),w),u,u),w,w),A.cb(16,A.bO(A.x(w,D.ceR,C.r,w,w,new A.I(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dl,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.ba)],s)
if(x.a.d)s.push(new A.lo(t,new B.cr7(x),w,w,y.n))
return A.z(s,C.E,C.h,C.l)}}
B.X5.prototype={
u(d){return D.aoY}}
B.aEi.prototype={
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
u.Ag(D.bIZ,D.y9)
u.aA(new A.cR(44,2))
d.dP(u,m)
u=new A.cA(n,C.aO,o,o,A.a([],v))
t=x-44
u.aA(new A.f_(t,2))
s=x-16
u.aA(new A.cR(s,2))
r=x-2
u.Ag(new A.K(r,16),D.y9)
u.aA(new A.cR(r,44))
d.dP(u,m)
u=new A.cA(n,C.aO,o,o,A.a([],v))
q=w-44
u.aA(new A.f_(r,q))
p=w-16
u.aA(new A.cR(r,p))
r=w-2
u.Ag(new A.K(s,r),D.y9)
u.aA(new A.cR(t,r))
d.dP(u,m)
v=new A.cA(n,C.aO,o,o,A.a([],v))
v.aA(new A.f_(44,r))
v.aA(new A.cR(16,r))
v.Ag(new A.K(2,p),D.y9)
v.aA(new A.cR(2,q))
d.dP(v,m)},
dM(d){return!1}}
B.aSL.prototype={}
B.ak_.prototype={
m(){var x=this,w=x.bH$
if(w!=null)w.a2(0,x.ghm())
x.bH$=null
x.a7()},
bT(){this.cv()
this.cY()
this.hn()}}
B.api.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4D.prototype={
R(){return new B.aIP()}}
B.aIP.prototype={
b6Q(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lo(x,new B.c9q(this),null,null,y.n)},
XL(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XL=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hc(t,A.u(t).i("hc<1>")).XY(s.d,!1,B.dLx())
x=2
return A.d(u.jZ(0),$async$XL)
case 2:return A.l(null,w)}})
return A.m($async$XL,w)},
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
w.d!==$&&A.bu()
w.d=x
w.XL()},
m(){this.a7()
this.Mv()},
ne(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xF}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.jZ(0)
break
case 2:w.cX(0)
break}}}
B.aSA.prototype={}
B.a4G.prototype={
bhd(){var x=this
x.CW=$.HR().gav7().XY(new B.bhg(x),!1,new B.bhh(x))
x.cx=$.HR().gaCu().li(new B.bhi(x))
x.cy=$.HR().gaDx().li(new B.bhj(x))},
b76(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aK(0)
w=x.cx
if(w!=null)w.aK(0)
w=x.cy
if(w!=null)w.aK(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bpP(!1,w.r===C.jc?C.jc:C.aaY))
return!0},
jZ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$jZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xG(C.xE,A.xF(null,null,C.xE.geS(0))))
if(s.a.e){x=1
break}r=C.Bb
q=new B.bAg(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bhd()
x=7
return A.d($.HR().lt(0,q),$async$jZ)
case 7:p=f
if(!s.db)s.sv(0,s.a.bq9(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tx){o=m
if(!s.db)s.sv(0,s.a.bqb(C.Bb,o,!0,!1,C.aR,C.jc,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$jZ,w)},
cX(d){var x=0,w=A.n(y.H),v=this
var $async$cX=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b76()?2:3
break
case 2:x=4
return A.d($.HR().cX(0),$async$cX)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cX,w)},
tI(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.an(A.xG(C.a15,A.xF(null,null,C.a15.geS(0))))
if(u.db)A.an(A.xG(C.xE,A.xF(null,null,C.xE.geS(0))))
if(!t.e){x=1
break}if(t.r===C.jc){x=1
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
bpP(d,e){var x=null
return this.M5(x,x,x,x,d,x,e,x)},
bq9(d,e,f,g,h,i){return this.M5(d,e,null,f,g,h,i,null)},
bqb(d,e,f,g,h,i,j){return this.M5(null,d,e,f,g,h,i,j)},
bpA(d){var x=null
return this.M5(x,x,x,x,x,x,x,d)},
bpv(d){var x=null
return this.M5(x,x,x,x,x,x,d,x)}}
B.axY.prototype={
u(d){var x=null,w=A.a([D.bKi],y.p)
w.push(A.h(C.k0.geS(0),x,x,x,x,C.a9L,x,x))
return A.kK(A.bO(A.z(w,C.v,C.h,C.J),x,x),C.an,!0)}}
B.bAg.prototype={
ZB(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bAh(),w),w.i("aW.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:C})","F<~>(mz)","X5(N,tx,e?)","cj(N,xH,e?)","e(N,xH,e?)","~(M,c7)"])
B.cKt.prototype={
$1(d){return new I.Fn(K.y4,d,this.a)},
$S:1375}
B.cKq.prototype={
$1(d){return this.a.$0()},
$S:126}
B.cKr.prototype={
$1(d){return this.a.$0()},
$S:126}
B.cKs.prototype={
$1(d){return this.a.$0()},
$S:126}
B.b4o.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:112}
B.c9U.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aK(0)
x.w=A.df(C.fq,new B.c9T(x))},
$S:0}
B.c9T.prototype={
$0(){return this.a.D5(!0)},
$S:0}
B.c9O.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c9R.prototype={
$0(){var x=this.a
return x.p(new B.c9Q(x))},
$S:0}
B.c9Q.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c9S.prototype={
$0(){var x=this.a
return x.p(new B.c9P(x))},
$S:0}
B.c9P.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cg2.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cg3.prototype={
$0(){},
$S:0}
B.bV6.prototype={
$0(){return A.al(this.a,!1).hz()},
$S:0}
B.bH7.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bH6())},
$S:65}
B.bH6.prototype={
$0(){},
$S:0}
B.bH5.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ac(w,0,!1).el(v)
u.z=v>3e7?x:C.lo}},
$S:0}
B.cr5.prototype={
$3(d,e,f){return D.ckf},
$S:z+3}
B.cr6.prototype={
$2(d,e){var x=null,w=this.a.gKi().x
w===$&&A.b()
return A.cb(x,A.x(x,x,C.r,C.u6,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:216}
B.cr7.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jc)return C.ao
x=t===C.aaZ
t=x?C.cx:C.dU
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.MQ,A.bi(u,!0,u,A.eY(!1,u,!0,A.x(u,A.O(A.a([D.azG,A.x(u,A.h(v,u,u,u,u,A.aI(u,u,x?C.cR:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.x),u,u,u,C.dl,u,u,u)],y.p),C.v,C.h,C.l,0,u),C.r,u,G.hW,D.afK,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbBs(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c9q.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aoZ}x=e.c
if(x!=null){w=new B.axY(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kR(new B.c9p(this.a,e))},
$S:z+5}
B.c9p.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b6Q(u,e)
v.a.toString
x=u.f
v=A.aj(1/0,e.a,e.b)
u=A.aj(1/0,e.c,e.d)
w=A.uS(A.G7(A.Jy(C.K,A.aK($.HR().avc(),x.b,x.a),C.r,C.bE),new A.af(v,u)),C.y,null)
return w},
$S:111}
B.bhg.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1376}
B.bhh.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.x7(d)},
$S:73}
B.bhi.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpv(d))},
$S:1377}
B.bhj.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpA(d))},
$S:106}
B.bAh.prototype={
$1(d){return d.c},
$S:1378};(function aliases(){var x=B.ak_.prototype
x.aOR=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aeI.prototype,"gD4",0,0,null,["$1$announce","$0"],["D5","km"],1,0,0)
var t
w(t=B.afk.prototype,"gD4","km",0)
w(t,"gaT8","Qi",0)
w(B.abe.prototype,"gD4","km",0)
v(B.aga.prototype,"gb7R","DG",2)
u(B,"dLx","dtK",6)
w(t=B.a4G.prototype,"gbBs","tI",0)
w(t,"geE","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.M,[B.av7,B.TM,B.xH,B.bAg])
v(A.bs,[B.cKt,B.cKq,B.cKr,B.cKs,B.b4o,B.bH7,B.cr5,B.cr7,B.c9q,B.bhg,B.bhh,B.bhi,B.bhj,B.bAh])
u(B.Jf,A.ew)
v(A.G,[B.aeH,B.afj,B.UI,B.a4D])
v(A.a0,[B.aSC,B.aSH,B.aSL,B.aSA])
u(B.aeI,B.aSC)
v(A.bL,[B.c9U,B.c9T,B.c9O,B.c9R,B.c9Q,B.c9S,B.c9P,B.cg2,B.cg3,B.bV6,B.bH6,B.bH5])
u(B.afk,B.aSH)
v(A.L,[B.ad4,B.P4,B.adV,B.abO,B.ah4,B.aiH,B.air,B.aFQ,B.X5,B.axY])
u(B.abd,A.dC)
u(B.aSg,A.dw)
u(B.abe,B.aSg)
u(B.ak_,B.aSL)
u(B.aga,B.ak_)
v(A.cK,[B.cr6,B.c9p])
u(B.aEi,A.qq)
u(B.api,A.fg)
u(B.aIP,B.aSA)
u(B.a4G,A.d3)
x(B.aSg,A.em)
x(B.aSC,A.em)
x(B.aSH,A.em)
x(B.aSL,A.em)
w(B.ak_,A.iu)
x(B.aSA,A.em)})()
A.bq(b.typeUniverse,JSON.parse('{"aeH":{"G":[],"e":[],"f":[]},"afj":{"G":[],"e":[],"f":[]},"abd":{"G":[],"e":[],"f":[]},"Jf":{"G":[],"e":[],"f":[]},"aeI":{"a0":["aeH"],"em":[]},"afk":{"a0":["afj"],"em":[]},"ad4":{"L":[],"e":[],"f":[]},"P4":{"L":[],"e":[],"f":[]},"adV":{"L":[],"e":[],"f":[]},"abO":{"L":[],"e":[],"f":[]},"ah4":{"L":[],"e":[],"f":[]},"aiH":{"L":[],"e":[],"f":[]},"air":{"L":[],"e":[],"f":[]},"aFQ":{"L":[],"e":[],"f":[]},"abe":{"a0":["abd"],"em":[]},"UI":{"G":[],"e":[],"f":[]},"X5":{"L":[],"e":[],"f":[]},"aga":{"a0":["UI"],"em":[]},"aEi":{"aU":[]},"a4D":{"G":[],"e":[],"f":[]},"aIP":{"a0":["a4D"],"em":[]},"a4G":{"d3":["xH"],"aU":[]},"axY":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{D:x("cH"),x:x("F<~>"),k:x("r<kJ>"),G:x("r<TM>"),v:x("r<fD>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dt"),Y:x("TM"),N:x("c"),n:x("lo<xH>"),J:x("lp<mz>"),q:x("dl"),z:x("@"),r:x("t<TM>?"),g:x("t<@>?"),X:x("M?"),t:x("av7?"),E:x("rs?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.af0=new A.dN(C.tE,C.ad,C.tE,C.ad)
D.afK=new A.I(null,null,D.af0,null,null,null,C.x)
D.coH=new B.air("S\xf3 funciona na tua conta",!0,null)
D.ajc=new A.f6(C.K,null,null,D.coH,null)
D.c4g=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cag=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4g,C.a3,null,null,null,null,null,null)
D.bKz=new A.S(C.hu,D.cag,null)
D.ajh=new A.f6(C.K,null,null,D.bKz,null)
D.aoY=new A.pg(C.cn,!0,D.ajh,null)
D.aoZ=new A.pg(C.an,!0,null,null)
D.aqf=new B.api(0,0,"noDuplicates")
D.aqg=new B.api(1,1,"normal")
D.pO=new A.kp(0.5,0.5,null,null,C.f9,null)
D.cfO=new A.D("Lanterna",null,C.cc,null,null,null,null,null,null,null)
D.azG=new A.bJ(1,C.at,D.cfO,null)
D.clV=new B.adV("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bPZ=new B.UI(420,!0,null,null)
D.beS=x([D.clV,C.R,D.bPZ],y.p)
D.brI=x([C.tz],y.k)
D.cpn=x([],y.k)
D.bzt=x([],y.G)
D.bIZ=new A.K(16,2)
D.aC5=new A.b0(57911,"MaterialIcons",null,!1)
D.aCA=new A.b8(D.aC5,null,C.t,null,null,null)
D.bKi=new A.S(C.MN,D.aCA,null)
D.ccl=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cc,null,null,null,null,null,null,null)
D.bKv=new A.S(C.pW,D.ccl,null)
D.cgF=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cc,null,null,null,null,null,null,null)
D.bKS=new A.S(C.fV,D.cgF,null)
D.ckW=new B.aEi(null)
D.apQ=new A.qp(D.ckW,null,C.aR,null,null)
D.bPl=new A.eF(0,0,0,0,null,null,D.apQ,null)
D.y9=new A.b6(14,14)
D.bQI=new A.X("Bilhete",!1)
D.bRf=new A.X("Organizas",!1)
D.bRP=new A.X("Por entrar",!1)
D.bSd=new A.X("Sem bilhete pago",!1)
D.bXe=new A.kV(186,186,8,C.fT,0,null)
D.c8A=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bYz=new A.bG(D.c8A,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c7A=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cc,C.a3,null,null,null,null,null,null)
D.caq=new A.D("Entrada",null,C.hP,null,null,null,null,null,null,null)
D.cev=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.ceR=new A.D("\xc0 procura de um QR\u2026",null,C.hO,null,null,null,null,null,null,null)
D.cgo=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.ck8=new B.abd(null)
D.ckf=new B.X5(null)
D.ckG=new B.abO("D\xc1 ENTRADA EM",null)
D.ckH=new B.abO("HOJE",null)
D.clW=new B.adV("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cn0=new B.aeH(null)
D.cng=new B.afj(null)})()};
(a=>{a["EpyVdCZfupALVnlX8sfWpv2hVdQ="]=a.current})($__dart_deferred_initializers__);