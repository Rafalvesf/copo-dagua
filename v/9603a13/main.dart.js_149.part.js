((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dLl(d){var x,w,v=A.aR("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fX(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aLY(w,x)},
cIU(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cIU=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jf("partner_today",y.z),$async$cIU)
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
J.br(r,new A.aMo([k,n,m,l]))}}p=A.aD(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aD(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.auZ(r,p,o)
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
return A.m($async$cIU,w)},
auZ:function auZ(d,e,f){this.a=d
this.b=e
this.c=f},
dtl(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
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
o.push(new A.aLK(A.dc(A.p(m.h(n,"at"))).dF(),l))}}return new B.TI(h,g,x,w,v,u,r,s,q,p,o)},
cIS(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cIS=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jf("my_entries",y.z),$async$cIS)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.br(r,B.dtl(q))}v=r
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
return A.m($async$cIS,w)},
dKF(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbu().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cJZ(w)
u=u.ch
u===$&&A.b()
return u.LR(0,"entries-"+w,C.yg).NH(new B.cJW(d),C.GC,x.$1("user_id"),v,"event_checkins").NH(new B.cJX(d),C.GC,x.$1("user_id"),v,"booking_arrivals").NH(new B.cJY(d),C.GD,x.$1("buyer_id"),v,"event_tickets").Pv(0)},
TI:function TI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cJZ:function cJZ(d){this.a=d},
cJW:function cJW(d){this.a=d},
cJX:function cJX(d){this.a=d},
cJY:function cJY(d){this.a=d},
dpS(){return new B.Jc(null)},
dcn(d){return C.f.aT(C.j.k(A.hY(d)),2,"0")+":"+C.f.aT(C.j.k(A.hO(d)),2,"0")},
Jc:function Jc(d){this.a=d},
b4a:function b4a(){},
aeC:function aeC(d){this.a=d},
aeD:function aeD(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c9t:function c9t(d){this.a=d},
c9s:function c9s(d){this.a=d},
c9n:function c9n(d,e){this.a=d
this.b=e},
c9q:function c9q(d){this.a=d},
c9p:function c9p(d){this.a=d},
c9r:function c9r(d){this.a=d},
c9o:function c9o(d){this.a=d},
afe:function afe(d){this.a=d},
aff:function aff(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cfC:function cfC(d,e){this.a=d
this.b=e},
cfD:function cfD(){},
ad_:function ad_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bUO:function bUO(d){this.a=d},
P0:function P0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
adQ:function adQ(d,e){this.c=d
this.a=e},
abL:function abL(d,e){this.c=d
this.a=e},
ah_:function ah_(d,e){this.c=d
this.a=e},
aiC:function aiC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aim:function aim(d,e,f){this.c=d
this.d=e
this.a=f},
aFF:function aFF(d,e){this.c=d
this.a=e},
aba:function aba(d){this.a=d},
abb:function abb(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bGR:function bGR(d){this.a=d},
bGQ:function bGQ(){},
bGP:function bGP(d,e){this.a=d
this.b=e},
aS0:function aS0(){},
aSm:function aSm(){},
aSr:function aSr(){},
UE:function UE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ag5:function ag5(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ex$=e
_.bM$=f
_.c=_.a=null},
cqF:function cqF(){},
cqG:function cqG(d,e){this.a=d
this.b=e},
cqH:function cqH(d){this.a=d},
X2:function X2(d){this.a=d},
aE7:function aE7(d){this.a=d},
aSv:function aSv(){},
ajU:function ajU(){},
ap9:function ap9(d,e,f){this.c=d
this.a=e
this.b=f},
dtb(d,e){},
a4B:function a4B(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aIC:function aIC(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9_:function c9_(d){this.a=d},
c8Z:function c8Z(d,e){this.a=d
this.b=e},
aSk:function aSk(){},
dt8(d,e){var x=null,w=d===D.aqe?250:0
return new B.a4E(d,w,e,new A.lp(x,x,y.J),new B.xG(x,C.Ba,x,!1,!1,C.aT,C.jc,1),$.aa())},
a4E:function a4E(d,e,f,g,h,i){var _=this
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
bh1:function bh1(d){this.a=d},
bh2:function bh2(d){this.a=d},
bh3:function bh3(d){this.a=d},
bh4:function bh4(d){this.a=d},
xG:function xG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
axP:function axP(d){this.a=d},
bA0:function bA0(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bA1:function bA1(){}},D,F,G,H,I,K,L,M
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
B.auZ.prototype={}
B.TI.prototype={}
B.Jc.prototype={
b9(d,e){var x=y.E
return e.G(A.cD($.b7(),new B.b4a(),y.D,x),x)===C.dQ?D.cn6:D.cmR}}
B.aeC.prototype={
S(){return new B.aeD()}}
B.aeD.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.km()
x.r=B.dKF(new B.c9t(x))},
m(){var x,w,v=this
$.az.i9(v)
x=v.w
if(x!=null)x.aK(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y0(x)}v.a7()},
nd(d){if(d===C.eq)this.km()},
D5(d){return this.b5X(d)},
km(){return this.D5(!1)},
b5X(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$D5=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.bzp:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cIS(),$async$D5)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.c9n(u,s))
if(!d||s==null){x=1
break}for(o=J.ao(s);o.q();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null)
p.a0(new A.bF(o,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$D5,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gD4(),q=u.d,p=y.p
q=A.a([new B.P0("QR code",C.qd,!q,new B.c9q(u),t),new B.P0("Scannear",C.vj,q,new B.c9r(u),t)],p)
if(u.d)p=D.beO
else{x=A.a([D.cjZ,C.R,D.aj8,C.bN,D.ckw,C.ar],p)
w=s==null
if(w&&!u.f)x.push(M.a8i)
else if(w)x.push(new B.ah_(r,t))
else{w=J.a7(s)
if(w.gY(s))x.push(D.bKq)
else{v=A.a([],p)
for(w=w.gX(s);w.q();)C.e.n(v,A.a([D.pN,new B.aFF(w.gE(w),t)],p))
v.push(D.pN)
C.e.n(x,v)}}p=x}return new B.ad_(r,q,p,t)}}
B.afe.prototype={
S(){return new B.aff()}}
B.aff.prototype={
ad(){this.aq()
$.az.b4$.push(this)
this.km()},
m(){$.az.i9(this)
this.a7()},
nd(d){if(d===C.eq)this.km()},
km(){var x=0,w=A.n(y.H),v,u=this,t
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cIU(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cfC(u,t))
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
Qh(){var x=0,w=A.n(y.H),v=this,u
var $async$Qh=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ad(u).ak("/cobrar",null,y.X),$async$Qh)
case 2:if(v.c!=null)v.km()
return A.l(null,w)}})
return A.m($async$Qh,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gD4(),k=y.p,j=A.a([new B.P0("Scannear",C.vj,!0,new B.cfD(),n),new B.P0("Cobrar",C.nJ,!1,o.gaT3(),n)],k),i=A.a([D.clM,C.R,new B.UE(290,!1,l,n),C.bN,D.ckx,C.ar],k),h=m==null
if(h&&!o.e)i.push(H.a8f)
else if(h)i.push(new B.ah_(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKN)
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
t=p}C.e.n(h,A.a([D.pN,new B.aiC(s,r,t,q>0,n,n)],k))}h.push(D.pN)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aiC("Cobrado hoje",k,n,!1,F.cIe(m.b),n))
h.push(D.pN)
C.e.n(i,h)}return new B.ad_(l,j,i,n)}}
B.ad_.prototype={
u(d){var x=null,w=C.CO.C(0,new A.a3(0,A.aT(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d_(C.bb,x,x,A.pT(C.lz,new B.bUO(d),"Voltar"),x),C.R,D.cag,C.aA,A.e4(C.bf,this.d,C.r,C.bk,8,8),C.aA],y.p)
C.e.n(v,this.e)
return A.cP(x,C.by,A.bA(!0,A.B_(A.d6(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.P0.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.bi(w,!0,w,A.hh(!1,C.aM,!0,w,A.eX(!1,w,!0,A.aK(new A.S(C.bY,A.N(A.a([A.b9(x.d,u,w,w,16),C.bj,A.h(x.c,w,w,w,w,A.aI(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.v,C.h,C.J,0,w),w),38,w),C.aa,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.aa,w,w,C.cW),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.adQ.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x)}}
B.abL.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aH,x,x)}}
B.ah_.prototype={
u(d){var x=null
return new A.S(C.pU,A.z(A.a([D.c7q,new A.al(A.cH(C.t2,x,x,this.c,x,x),x)],y.p),C.v,C.h,C.l),x)}}
B.aiC.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u))
t=A.a([A.a4(A.z(s,C.G,C.h,C.l),1),C.ae],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cx:C.dU
w=A.W(999)
t.push(A.x(u,A.h(s,u,u,u,u,A.aI(u,u,r?C.cR:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.I(x,u,u,w,u,u,C.x),u,u,u,C.dl,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u))
return new A.S(C.cj,A.N(t,C.v,C.h,C.l,0,u),u)}}
B.aim.prototype={
u(d){var x=null,w=this.d,v=w?C.cx:C.dU,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?C.cR:C.cn,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.x),x,x,x,C.dl,x,x,x)}}
B.aFF.prototype={
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
if(k!=null)s=new A.X("Entrou \xe0s "+B.dcn(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.dcn(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bS2
else if(x)k=D.bR7
else k=m.f?D.bQA:D.bRH
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n)],k)
if(u.length!==0)x.push(new A.S(L.MP,A.h(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.cj,A.N(A.a([A.a4(A.z(x,C.G,C.h,C.l),1),C.ae,new B.aim(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.aba.prototype={
S(){return new B.abb(new A.ac(Date.now(),0,!1),C.lm)}}
B.abb.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.km()
x.as=A.u4(C.hq,new B.bGR(x))},
m(){var x,w=this
$.az.i9(w)
x=w.Q
if(x!=null)x.aK(0)
x=w.as
if(x!=null)x.aK(0)
w.a7()},
nd(d){var x
if(d===C.eq)this.km()
else if(d===C.my){x=this.Q
if(x!=null)x.aK(0)}},
km(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aK(0)
x=3
return A.d(A.aUj(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bGP(u,t))
s=t==null?null:t.b
if(s==null)s=C.ku
u.Q=A.df(s,u.gD4())
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gR().G($.b7(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.B(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.B(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cs(new A.ac(Date.now(),0,!1)).a
v=x<0?0:C.k.eD(C.j.aO(x,1000)/1000)
u=C.k.ae(C.j.aO(x,1000)/C.j.aO(o.z.a,1000),0,1)
x=A.W(16)
t=A.bE(C.f9,0.5)
s=A.W(16)
r=A.bE(C.f9,0.5)
k=!k
if(k)q=A.bp2(C.t,A.ke("/q/"+l.a),C.GF,C.GG,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bX4:A.bO(A.z(A.a([C.aDn,C.aD,D.cel,new A.al(A.cH(C.t2,n,n,o.gD4(),n,n),n)],y.p),C.v,C.h,C.J),n,n)
p=y.p
s=A.a([A.x(n,A.aK(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.x),n,n,n,C.cT,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ac,A.x(C.bb,A.aqJ(C.K,A.x(n,n,C.r,n,n,new A.I(C.u4,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.f9,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aD,A.bi(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.N(A.a([new A.cg(k,32,r,!1,!0,n),C.ae,new A.di(1,C.ba,A.z(A.a([A.h(w,n,n,n,n,C.a9,n,n),D.cge],p),C.G,C.h,C.l),n)],p),C.v,C.bR,C.l,0,n))
return A.x(n,A.z(s,C.v,C.h,C.l),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.x),n,n,n,C.cT,n,n,n)}}
B.aS0.prototype={}
B.aSm.prototype={}
B.aSr.prototype={}
B.UE.prototype={
S(){return new B.ag5(B.dt8(D.aqd,D.brE),null,null)}}
B.ag5.prototype={
gKg(){var x,w=this,v=w.e
if(v===$){x=A.cJ(null,E.MB,null,null,w)
w.e!==$&&A.b0()
w.e=x
v=x}return v},
ad(){this.aq()
$.az.b4$.push(this)},
c0(){var x,w,v=this
v.e0()
x=v.c
x.toString
if(A.aT(x,null,y.w).w.ax)v.gKg().cZ(0)
else{x=v.gKg()
w=x.r
if(!(w!=null&&w.a!=null))x.aBU(0,!0)}},
nd(d){if(this.f)return
if(d===C.eq)this.d.jZ(0)
else if(d===C.my)this.d.cZ(0)},
m(){var x=this
$.az.i9(x)
x.gKg().m()
x.d.m()
x.aON()},
DF(d){return this.b7J(d)},
b7J(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DF=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dLl(t)
if(p==null){s=u.c.O(y.q).f
s.XB()
s.a0(D.bYp)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.cZ(0),$async$DF)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ad(r).ak(m,null,y.X),$async$DF)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.jZ(0),$async$DF)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DF,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fR(A.W(16),A.aK(new A.bC(C.aw,w,C.e4,C.y,A.a([C.jr,new B.a4B(t,x.gb7I(),new B.cqF(),w),A.bO(A.aK(new A.bC(C.aw,w,C.aC,C.y,A.a([D.bPg,A.f4(x.gKg(),new B.cqG(x,u),w)],s),w),u,u),w,w),A.cb(16,A.bO(A.x(w,D.ceH,C.r,w,w,new A.I(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dl,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bc)],s)
if(x.a.d)s.push(new A.lo(t,new B.cqH(x),w,w,y.n))
return A.z(s,C.E,C.h,C.l)}}
B.X2.prototype={
u(d){return D.aoV}}
B.aE7.prototype={
b0(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aC(),m=A.bc()
m.r=C.t.gv(0)
m.b=C.bL
m.c=4
m.d=C.h8
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cA(n,C.aP,o,o,A.a([],v))
u.aB(new A.eZ(2,44))
u.aB(new A.cR(2,16))
u.Ag(D.bIU,D.y8)
u.aB(new A.cR(44,2))
d.dO(u,m)
u=new A.cA(n,C.aP,o,o,A.a([],v))
t=x-44
u.aB(new A.eZ(t,2))
s=x-16
u.aB(new A.cR(s,2))
r=x-2
u.Ag(new A.K(r,16),D.y8)
u.aB(new A.cR(r,44))
d.dO(u,m)
u=new A.cA(n,C.aP,o,o,A.a([],v))
q=w-44
u.aB(new A.eZ(r,q))
p=w-16
u.aB(new A.cR(r,p))
r=w-2
u.Ag(new A.K(s,r),D.y8)
u.aB(new A.cR(t,r))
d.dO(u,m)
v=new A.cA(n,C.aP,o,o,A.a([],v))
v.aB(new A.eZ(44,r))
v.aB(new A.cR(16,r))
v.Ag(new A.K(2,p),D.y8)
v.aB(new A.cR(2,q))
d.dO(v,m)},
dU(d){return!1}}
B.aSv.prototype={}
B.ajU.prototype={
m(){var x=this,w=x.bM$
if(w!=null)w.a2(0,x.ghU())
x.bM$=null
x.a7()},
bV(){this.cH()
this.d6()
this.hV()}}
B.ap9.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4B.prototype={
S(){return new B.aIC()}}
B.aIC.prototype={
b6H(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lo(x,new B.c9_(this),null,null,y.n)},
XK(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XK=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hb(t,A.u(t).i("hb<1>")).XX(s.d,!1,B.dKZ())
x=2
return A.d(u.jZ(0),$async$XK)
case 2:return A.l(null,w)}})
return A.m($async$XK,w)},
Mu(){var x=0,w=A.n(y.H),v=this,u
var $async$Mu=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aK(0)
x=2
return A.d(y.x.b(u)?u:A.eg(u,y.H),$async$Mu)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.cZ(0),$async$Mu)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$Mu,w)},
ad(){var x,w=this
w.aq()
x=w.a.c
w.d!==$&&A.bu()
w.d=x
w.XK()},
m(){this.a7()
this.Mu()},
nd(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xE}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.jZ(0)
break
case 2:w.cZ(0)
break}}}
B.aSk.prototype={}
B.a4E.prototype={
bh4(){var x=this
x.CW=$.HO().gav4().XX(new B.bh1(x),!1,new B.bh2(x))
x.cx=$.HO().gaCr().li(new B.bh3(x))
x.cy=$.HO().gaDu().li(new B.bh4(x))},
b6Y(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aK(0)
w=x.cx
if(w!=null)w.aK(0)
w=x.cy
if(w!=null)w.aK(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bpG(!1,w.r===C.jc?C.jc:C.aaU))
return!0},
jZ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$jZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xF(C.xD,A.xE(null,null,C.xD.geS(0))))
if(s.a.e){x=1
break}r=C.Ba
q=new B.bA0(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bh4()
x=7
return A.d($.HO().lt(0,q),$async$jZ)
case 7:p=f
if(!s.db)s.sv(0,s.a.bq0(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tu){o=m
if(!s.db)s.sv(0,s.a.bq2(C.Ba,o,!0,!1,C.aT,C.jc,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$jZ,w)},
cZ(d){var x=0,w=A.n(y.H),v=this
var $async$cZ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b6Y()?2:3
break
case 2:x=4
return A.d($.HO().cZ(0),$async$cZ)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cZ,w)},
tI(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.am(A.xF(C.a12,A.xE(null,null,C.a12.geS(0))))
if(u.db)A.am(A.xF(C.xD,A.xE(null,null,C.xD.geS(0))))
if(!t.e){x=1
break}if(t.r===C.jc){x=1
break}x=3
return A.d($.HO().tI(),$async$tI)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tI,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.h7()
x=3
return A.d($.HO().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xG.prototype={
M4(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xG(w,v,f,u,t,s,r,k==null?x.w:k)},
bpG(d,e){var x=null
return this.M4(x,x,x,x,d,x,e,x)},
bq0(d,e,f,g,h,i){return this.M4(d,e,null,f,g,h,i,null)},
bq2(d,e,f,g,h,i,j){return this.M4(null,d,e,f,g,h,i,j)},
bpr(d){var x=null
return this.M4(x,x,x,x,x,x,x,d)},
bpm(d){var x=null
return this.M4(x,x,x,x,x,x,d,x)}}
B.axP.prototype={
u(d){var x=null,w=A.a([D.bKd],y.p)
w.push(A.h(C.k_.geS(0),x,x,x,x,C.a9H,x,x))
return A.kK(A.bO(A.z(w,C.v,C.h,C.J),x,x),C.an,!0)}}
B.bA0.prototype={
ZA(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ai<1,v>")
x=A.U(new A.ai(x,new B.bA1(),w),w.i("aV.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:C})","F<~>(my)","X2(O,tu,e?)","cj(O,xG,e?)","e(O,xG,e?)","~(L,c7)"])
B.cJZ.prototype={
$1(d){return new I.Fl(K.y3,d,this.a)},
$S:1370}
B.cJW.prototype={
$1(d){return this.a.$0()},
$S:156}
B.cJX.prototype={
$1(d){return this.a.$0()},
$S:156}
B.cJY.prototype={
$1(d){return this.a.$0()},
$S:156}
B.b4a.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:108}
B.c9t.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aK(0)
x.w=A.df(C.fp,new B.c9s(x))},
$S:0}
B.c9s.prototype={
$0(){return this.a.D5(!0)},
$S:0}
B.c9n.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c9q.prototype={
$0(){var x=this.a
return x.p(new B.c9p(x))},
$S:0}
B.c9p.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c9r.prototype={
$0(){var x=this.a
return x.p(new B.c9o(x))},
$S:0}
B.c9o.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cfC.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cfD.prototype={
$0(){},
$S:0}
B.bUO.prototype={
$0(){return A.an(this.a,!1).i6()},
$S:0}
B.bGR.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bGQ())},
$S:63}
B.bGQ.prototype={
$0(){},
$S:0}
B.bGP.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ac(w,0,!1).ek(v)
u.z=v>3e7?x:C.lm}},
$S:0}
B.cqF.prototype={
$3(d,e,f){return D.ck5},
$S:z+3}
B.cqG.prototype={
$2(d,e){var x=null,w=this.a.gKg().x
w===$&&A.b()
return A.cb(x,A.x(x,x,C.r,C.u4,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:279}
B.cqH.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jc)return C.ao
x=t===C.aaV
t=x?C.cx:C.dU
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.MN,A.bi(u,!0,u,A.eX(!1,u,!0,A.x(u,A.N(A.a([D.azC,A.x(u,A.h(v,u,u,u,u,A.aI(u,u,x?C.cR:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.x),u,u,u,C.dl,u,u,u)],y.p),C.v,C.h,C.l,0,u),C.r,u,G.hW,D.afG,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbBj(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c9_.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aoW}x=e.c
if(x!=null){w=new B.axP(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.lf(new B.c8Z(this.a,e))},
$S:z+5}
B.c8Z.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b6H(u,e)
v.a.toString
x=u.f
v=A.ak(1/0,e.a,e.b)
u=A.ak(1/0,e.c,e.d)
w=A.wV(A.G4(A.Ju(C.K,A.aK($.HO().av9(),x.b,x.a),C.r,C.bE),new A.af(v,u)),C.y,null)
return w},
$S:105}
B.bh1.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1371}
B.bh2.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.x6(d)},
$S:71}
B.bh3.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpm(d))},
$S:1372}
B.bh4.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpr(d))},
$S:120}
B.bA1.prototype={
$1(d){return d.c},
$S:1373};(function aliases(){var x=B.ajU.prototype
x.aON=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aeD.prototype,"gD4",0,0,null,["$1$announce","$0"],["D5","km"],1,0,0)
var t
w(t=B.aff.prototype,"gD4","km",0)
w(t,"gaT3","Qh",0)
w(B.abb.prototype,"gD4","km",0)
v(B.ag5.prototype,"gb7I","DF",2)
u(B,"dKZ","dtb",6)
w(t=B.a4E.prototype,"gbBj","tI",0)
w(t,"geE","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.L,[B.auZ,B.TI,B.xG,B.bA0])
v(A.bs,[B.cJZ,B.cJW,B.cJX,B.cJY,B.b4a,B.bGR,B.cqF,B.cqH,B.c9_,B.bh1,B.bh2,B.bh3,B.bh4,B.bA1])
u(B.Jc,A.ew)
v(A.G,[B.aeC,B.afe,B.UE,B.a4B])
v(A.a0,[B.aSm,B.aSr,B.aSv,B.aSk])
u(B.aeD,B.aSm)
v(A.bL,[B.c9t,B.c9s,B.c9n,B.c9q,B.c9p,B.c9r,B.c9o,B.cfC,B.cfD,B.bUO,B.bGQ,B.bGP])
u(B.aff,B.aSr)
v(A.M,[B.ad_,B.P0,B.adQ,B.abL,B.ah_,B.aiC,B.aim,B.aFF,B.X2,B.axP])
u(B.aba,A.dC)
u(B.aS0,A.dw)
u(B.abb,B.aS0)
u(B.ajU,B.aSv)
u(B.ag5,B.ajU)
v(A.cK,[B.cqG,B.c8Z])
u(B.aE7,A.qo)
u(B.ap9,A.fg)
u(B.aIC,B.aSk)
u(B.a4E,A.d3)
x(B.aS0,A.em)
x(B.aSm,A.em)
x(B.aSr,A.em)
x(B.aSv,A.em)
w(B.ajU,A.iX)
x(B.aSk,A.em)})()
A.bq(b.typeUniverse,JSON.parse('{"aeC":{"G":[],"e":[],"f":[]},"afe":{"G":[],"e":[],"f":[]},"aba":{"G":[],"e":[],"f":[]},"Jc":{"G":[],"e":[],"f":[]},"aeD":{"a0":["aeC"],"em":[]},"aff":{"a0":["afe"],"em":[]},"ad_":{"M":[],"e":[],"f":[]},"P0":{"M":[],"e":[],"f":[]},"adQ":{"M":[],"e":[],"f":[]},"abL":{"M":[],"e":[],"f":[]},"ah_":{"M":[],"e":[],"f":[]},"aiC":{"M":[],"e":[],"f":[]},"aim":{"M":[],"e":[],"f":[]},"aFF":{"M":[],"e":[],"f":[]},"abb":{"a0":["aba"],"em":[]},"UE":{"G":[],"e":[],"f":[]},"X2":{"M":[],"e":[],"f":[]},"ag5":{"a0":["UE"],"em":[]},"aE7":{"aW":[]},"a4B":{"G":[],"e":[],"f":[]},"aIC":{"a0":["a4B"],"em":[]},"a4E":{"d3":["xG"],"aW":[]},"axP":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{D:x("cF"),x:x("F<~>"),k:x("r<kJ>"),G:x("r<TI>"),v:x("r<fD>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dt"),Y:x("TI"),N:x("c"),n:x("lo<xG>"),J:x("lp<my>"),q:x("dl"),z:x("@"),r:x("t<TI>?"),g:x("t<@>?"),X:x("L?"),t:x("auZ?"),E:x("ro?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aeX=new A.dM(C.tC,C.ad,C.tC,C.ad)
D.afG=new A.I(null,null,D.aeX,null,null,null,C.x)
D.cox=new B.aim("S\xf3 funciona na tua conta",!0,null)
D.aj8=new A.f5(C.K,null,null,D.cox,null)
D.c46=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ca6=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c46,C.a3,null,null,null,null,null,null)
D.bKu=new A.S(C.hu,D.ca6,null)
D.ajd=new A.f5(C.K,null,null,D.bKu,null)
D.aoV=new A.pf(C.cn,!0,D.ajd,null)
D.aoW=new A.pf(C.an,!0,null,null)
D.aqd=new B.ap9(0,0,"noDuplicates")
D.aqe=new B.ap9(1,1,"normal")
D.pN=new A.ko(0.5,0.5,null,null,C.f9,null)
D.cfE=new A.D("Lanterna",null,C.cc,null,null,null,null,null,null,null)
D.azC=new A.bJ(1,C.at,D.cfE,null)
D.clL=new B.adQ("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bPU=new B.UE(420,!0,null,null)
D.beO=x([D.clL,C.R,D.bPU],y.p)
D.brE=x([C.tx],y.k)
D.cpd=x([],y.k)
D.bzp=x([],y.G)
D.bIU=new A.K(16,2)
D.aC1=new A.b_(57911,"MaterialIcons",null,!1)
D.aCw=new A.b8(D.aC1,null,C.t,null,null,null)
D.bKd=new A.S(C.MK,D.aCw,null)
D.ccb=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cc,null,null,null,null,null,null,null)
D.bKq=new A.S(C.pU,D.ccb,null)
D.cgv=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cc,null,null,null,null,null,null,null)
D.bKN=new A.S(C.fV,D.cgv,null)
D.ckM=new B.aE7(null)
D.apO=new A.uT(D.ckM,null,C.aT,null,null)
D.bPg=new A.eF(0,0,0,0,null,null,D.apO,null)
D.y8=new A.b6(14,14)
D.bQA=new A.X("Bilhete",!1)
D.bR7=new A.X("Organizas",!1)
D.bRH=new A.X("Por entrar",!1)
D.bS2=new A.X("Sem bilhete pago",!1)
D.bX4=new A.kU(186,186,8,C.fT,0,null)
D.c8q=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bYp=new A.bF(D.c8q,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c7q=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cc,C.a3,null,null,null,null,null,null)
D.cag=new A.D("Entrada",null,C.hP,null,null,null,null,null,null,null)
D.cel=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.ceH=new A.D("\xc0 procura de um QR\u2026",null,C.hO,null,null,null,null,null,null,null)
D.cge=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.cjZ=new B.aba(null)
D.ck5=new B.X2(null)
D.ckw=new B.abL("D\xc1 ENTRADA EM",null)
D.ckx=new B.abL("HOJE",null)
D.clM=new B.adQ("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cmR=new B.aeC(null)
D.cn6=new B.afe(null)})()};
(a=>{a["K3CElpl0Szs4pUNg3xdTQdq/oCs="]=a.current})($__dart_deferred_initializers__);