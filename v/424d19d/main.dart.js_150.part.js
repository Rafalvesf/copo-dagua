((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dMq(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fZ(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMz(w,x)},
cJD(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJD=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.ji("partner_today",y.z),$async$cJD)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.ao(o==null?C.aj:o)
while(o.q()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.p(n==null?"Evento":n)
m=A.A(J.i(q,"booking_number"))
l=A.aD(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aD(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bn(r,new A.aN_([k,n,m,l]))}}p=A.aD(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aD(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avs(r,p,o)
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
return A.m($async$cJD,w)},
avs:function avs(d,e,f){this.a=d
this.b=e
this.c=f},
duk(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a6(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
g=A.p(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d3(A.p(x==null?"":x))
w=A.A(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.A(J.i(i,"status")):k
if(s){s=A.aD(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aD(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d3(A.p(p==null?"":p))
p=p==null?k:p.dJ()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ao(j==null?C.aj:j)
while(j.q()){n=j.gE(j)
if(t.b(n)&&A.d3(A.p(J.i(n,"at")))!=null){m=J.a6(n)
l=m.h(n,"partner")
l=A.p(l==null?"Parceiro":l)
o.push(new A.aMl(A.da(A.p(m.h(n,"at"))).dJ(),l))}}return new B.U_(h,g,x,w,v,u,r,s,q,p,o)},
cJB(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJB=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.ji("my_entries",y.z),$async$cJB)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.bn(r,B.duk(q))}v=r
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
return A.m($async$cJB,w)},
dLK(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbu().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKJ(w)
u=u.ch
u===$&&A.b()
return u.LR(0,"entries-"+w,C.yg).NK(new B.cKG(d),C.GG,x.$1("user_id"),v,"event_checkins").NK(new B.cKH(d),C.GG,x.$1("user_id"),v,"booking_arrivals").NK(new B.cKI(d),C.GH,x.$1("buyer_id"),v,"event_tickets").Py(0)},
U_:function U_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKJ:function cKJ(d){this.a=d},
cKG:function cKG(d){this.a=d},
cKH:function cKH(d){this.a=d},
cKI:function cKI(d){this.a=d},
dqR(){return new B.Jt(null)},
ddj(d){return C.f.aT(C.j.k(A.i_(d)),2,"0")+":"+C.f.aT(C.j.k(A.hQ(d)),2,"0")},
Jt:function Jt(d){this.a=d},
b4Q:function b4Q(){},
af_:function af_(d){this.a=d},
af0:function af0(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c9W:function c9W(d){this.a=d},
c9V:function c9V(d){this.a=d},
c9Q:function c9Q(d,e){this.a=d
this.b=e},
c9T:function c9T(d){this.a=d},
c9S:function c9S(d){this.a=d},
c9U:function c9U(d){this.a=d},
c9R:function c9R(d){this.a=d},
afC:function afC(d){this.a=d},
afD:function afD(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cg4:function cg4(d,e){this.a=d
this.b=e},
cg5:function cg5(){},
adn:function adn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bV6:function bV6(d){this.a=d},
Pj:function Pj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aed:function aed(d,e){this.c=d
this.a=e},
ac6:function ac6(d,e){this.c=d
this.a=e},
ahn:function ahn(d,e){this.c=d
this.a=e},
aj_:function aj_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiK:function aiK(d,e,f){this.c=d
this.d=e
this.a=f},
aGd:function aGd(d,e){this.c=d
this.a=e},
abw:function abw(d){this.a=d},
abx:function abx(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bH8:function bH8(d){this.a=d},
bH7:function bH7(){},
bH6:function bH6(d,e){this.a=d
this.b=e},
aSE:function aSE(){},
aT_:function aT_(){},
aT4:function aT4(){},
UW:function UW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ags:function ags(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ed$=e
_.bE$=f
_.c=_.a=null},
cr7:function cr7(){},
cr8:function cr8(d,e){this.a=d
this.b=e},
cr9:function cr9(d){this.a=d},
Xi:function Xi(d){this.a=d},
aEF:function aEF(d){this.a=d},
aT8:function aT8(){},
akj:function akj(){},
apD:function apD(d,e,f){this.c=d
this.a=e
this.b=f},
dua(d,e){},
a4X:function a4X(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJd:function aJd(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9s:function c9s(d){this.a=d},
c9r:function c9r(d,e){this.a=d
this.b=e},
aSY:function aSY(){},
du7(d,e){var x=null,w=d===D.aqk?250:0
return new B.a5_(d,w,e,new A.lr(x,x,y.J),new B.xP(x,C.Bc,x,!1,!1,C.aR,C.jh,1),$.aa())},
a5_:function a5_(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.V$=0
_.Z$=i
_.aJ$=_.bv$=0},
bhO:function bhO(d){this.a=d},
bhP:function bhP(d){this.a=d},
bhQ:function bhQ(d){this.a=d},
bhR:function bhR(d){this.a=d},
xP:function xP(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayj:function ayj(d){this.a=d},
bAW:function bAW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAX:function bAX(){}},D,F,G,H,I,K,L,M
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
B.avs.prototype={}
B.U_.prototype={}
B.Jt.prototype={
b9(d,e){var x=y.E
return e.G(A.cB($.b7(),new B.b4Q(),y.D,x),x)===C.dF?D.cnq:D.cna}}
B.af_.prototype={
P(){return new B.af0()}}
B.af0.prototype={
ac(){var x=this
x.ap()
$.az.b3$.push(x)
x.km()
x.r=B.dLK(new B.c9W(x))},
m(){var x,w,v=this
$.az.i9(v)
x=v.w
if(x!=null)x.aH(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y7(x)}v.a6()},
nh(d){if(d===C.es)this.km()},
D8(d){return this.b6e(d)},
km(){return this.D8(!1)},
b6e(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$D8=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.byK:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJB(),$async$D8)
case 3:s=f
if(u.c==null){x=1
break}u.n(new B.c9Q(u,s))
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
return A.m($async$D8,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gD7(),q=u.d,p=y.p
q=A.a([new B.Pj("QR code",C.qe,!q,new B.c9T(u),t),new B.Pj("Scannear",C.vj,q,new B.c9U(u),t)],p)
if(u.d)p=D.beU
else{x=A.a([D.cki,C.R,D.aje,C.bP,D.ckQ,C.ar],p)
w=s==null
if(w&&!u.f)x.push(M.a8o)
else if(w)x.push(new B.ahn(r,t))
else{w=J.a6(s)
if(w.gY(s))x.push(D.bKw)
else{v=A.a([],p)
for(w=w.gW(s);w.q();)C.e.p(v,A.a([D.pM,new B.aGd(w.gE(w),t)],p))
v.push(D.pM)
C.e.p(x,v)}}p=x}return new B.adn(r,q,p,t)}}
B.afC.prototype={
P(){return new B.afD()}}
B.afD.prototype={
ac(){this.ap()
$.az.b3$.push(this)
this.km()},
m(){$.az.i9(this)
this.a6()},
nh(d){if(d===C.es)this.km()},
km(){var x=0,w=A.n(y.H),v,u=this,t
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJD(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.cg4(u,t))
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
Ql(){var x=0,w=A.n(y.H),v=this,u
var $async$Ql=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ae(u).ah("/cobrar",null,y.X),$async$Ql)
case 2:if(v.c!=null)v.km()
return A.l(null,w)}})
return A.m($async$Ql,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gD7(),k=y.p,j=A.a([new B.Pj("Scannear",C.vj,!0,new B.cg5(),n),new B.Pj("Cobrar",C.nJ,!1,o.gaTh(),n)],k),i=A.a([D.cm5,C.R,new B.UW(290,!1,l,n),C.bP,D.ckR,C.ar],k),h=m==null
if(h&&!o.e)i.push(H.a8l)
else if(h)i.push(new B.ahn(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKV)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.p(q)+" pessoas")
r=C.e.a2(r," \xb7 ")
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
t=p}C.e.p(h,A.a([D.pM,new B.aj_(s,r,t,q>0,n,n)],k))}h.push(D.pM)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aj_("Cobrado hoje",k,n,!1,F.cIY(m.b),n))
h.push(D.pM)
C.e.p(i,h)}return new B.adn(l,j,i,n)}}
B.adn.prototype={
u(d){var x=null,w=C.CS.C(0,new A.a4(0,A.aT(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d0(C.bc,x,x,A.pX(C.lC,new B.bV6(d),"Voltar"),x),C.R,D.caA,C.aA,A.e5(C.bh,this.d,C.r,C.bl,8,8),C.aA],y.p)
C.e.p(v,this.e)
return A.cP(x,C.by,A.bB(!0,A.B6(A.d6(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.Pj.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.bh(w,!0,w,A.hl(!1,C.aN,!0,w,A.eY(!1,w,!0,A.aK(new A.S(C.bY,A.O(A.a([A.b9(x.d,u,w,w,16),C.bf,A.h(x.c,w,w,w,w,A.aH(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.u,C.h,C.J,0,w),w),38,w),C.ab,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ab,w,w,C.cW),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.aed.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x)}}
B.ac6.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aH,x,x)}}
B.ahn.prototype={
u(d){var x=null
return new A.S(C.pV,A.x(A.a([D.c7J,new A.ak(A.cK(C.t2,x,x,this.c,x,x),x)],y.p),C.u,C.h,C.l),x)}}
B.aj_.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u))
t=A.a([A.a5(A.x(s,C.G,C.h,C.l),1),C.ae],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cz:C.dU
w=A.W(999)
t.push(A.w(u,A.h(s,u,u,u,u,A.aH(u,u,r?C.cS:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.J(x,u,u,w,u,u,C.x),u,u,u,C.dm,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u))
return new A.S(C.ck,A.O(t,C.u,C.h,C.l,0,u),u)}}
B.aiK.prototype={
u(d){var x=null,w=this.d,v=w?C.cz:C.dU,u=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?C.cS:C.co,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.J(v,x,x,u,x,x,C.x),x,x,x,C.dm,x,x,x)}}
B.aGd.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dr[A.fI(l)-1]+", "+A.aE(l)+" "+C.bi[A.aw(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.p(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a2(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.X("Entrou \xe0s "+B.ddj(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.ddj(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSg
else if(x)k=D.bRi
else k=m.f?D.bQL:D.bRS
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n)],k)
if(u.length!==0)x.push(new A.S(L.MT,A.h(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.ck,A.O(A.a([A.a5(A.x(x,C.G,C.h,C.l),1),C.ae,new B.aiK(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abw.prototype={
P(){return new B.abx(new A.ad(Date.now(),0,!1),C.lp)}}
B.abx.prototype={
ac(){var x=this
x.ap()
$.az.b3$.push(x)
x.km()
x.as=A.rs(C.hs,new B.bH8(x))},
m(){var x,w=this
$.az.i9(w)
x=w.Q
if(x!=null)x.aH(0)
x=w.as
if(x!=null)x.aH(0)
w.a6()},
nh(d){var x
if(d===C.es)this.km()
else if(d===C.mB){x=this.Q
if(x!=null)x.aH(0)}},
km(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aH(0)
x=3
return A.d(A.aUY(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.bH6(u,t))
s=t==null?null:t.b
if(s==null)s=C.kw
u.Q=A.dd(s,u.gD7())
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gR().G($.b7(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.B(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.B(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cf(new A.ad(Date.now(),0,!1)).a
v=x<0?0:C.k.eD(C.j.aO(x,1000)/1000)
u=C.k.af(C.j.aO(x,1000)/C.j.aO(o.z.a,1000),0,1)
x=A.W(16)
t=A.bG(C.fa,0.5)
s=A.W(16)
r=A.bG(C.fa,0.5)
k=!k
if(k)q=A.bpW(C.t,A.kk("/q/"+l.a),C.GJ,C.GK,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXk:A.bN(A.x(A.a([C.aDt,C.aC,D.ceF,new A.ak(A.cK(C.t2,n,n,o.gD7(),n,n),n)],y.p),C.u,C.h,C.J),n,n)
p=y.p
s=A.a([A.w(n,A.aK(q,186,186),C.r,n,n,new A.J(C.t,n,r,s,n,n,C.x),n,n,n,C.cU,n,n,214)],p)
if(k){k=A.W(2)
C.e.p(s,A.a([C.ad,A.w(C.bc,A.arc(C.K,A.w(n,n,C.r,n,n,new A.J(C.u4,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.J(C.fa,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aC,A.bh(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.ch(k,32,r,!1,!0,n),C.ae,new A.dg(1,C.bb,A.x(A.a([A.h(w,n,n,n,n,C.a9,n,n),D.cgy],p),C.G,C.h,C.l),n)],p),C.u,C.bQ,C.l,0,n))
return A.w(n,A.x(s,C.u,C.h,C.l),C.r,n,n,new A.J(C.t,n,t,x,n,n,C.x),n,n,n,C.cU,n,n,n)}}
B.aSE.prototype={}
B.aT_.prototype={}
B.aT4.prototype={}
B.UW.prototype={
P(){return new B.ags(B.du7(D.aqj,D.brL),null,null)}}
B.ags.prototype={
gKh(){var x,w=this,v=w.e
if(v===$){x=A.cD(null,E.MF,null,null,w)
w.e!==$&&A.b_()
w.e=x
v=x}return v},
ac(){this.ap()
$.az.b3$.push(this)},
bV(){var x,w,v=this
v.dC()
x=v.c
x.toString
if(A.aT(x,null,y.w).w.ax)v.gKh().cZ(0)
else{x=v.gKh()
w=x.r
if(!(w!=null&&w.a!=null))x.aC_(0,!0)}},
nh(d){if(this.f)return
if(d===C.es)this.d.jZ(0)
else if(d===C.mB)this.d.cZ(0)},
m(){var x=this
$.az.i9(x)
x.gKh().m()
x.d.m()
x.aOX()},
DL(d){return this.b80(d)},
b80(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DL=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dMq(t)
if(p==null){s=u.c.O(y.q).f
s.XF()
s.a0(D.bYG)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.cZ(0),$async$DL)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ae(r).ah(m,null,y.X),$async$DL)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.jZ(0),$async$DL)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DL,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.hY(A.W(16),A.aK(new A.bA(C.aw,w,C.e5,C.y,A.a([C.jx,new B.a4X(t,x.gb8_(),new B.cr7(),w),A.bN(A.aK(new A.bA(C.aw,w,C.aD,C.y,A.a([D.bPo,A.eW(x.gKh(),new B.cr8(x,u),w)],s),w),u,u),w,w),A.cc(16,A.bN(A.w(w,D.cf0,C.r,w,w,new A.J(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dm,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.be)],s)
if(x.a.d)s.push(new A.ke(t,new B.cr9(x),w,w,y.n))
return A.x(s,C.E,C.h,C.l)}}
B.Xi.prototype={
u(d){return D.ap0}}
B.aEF.prototype={
b0(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.bd()
m.r=C.t.gv(0)
m.b=C.bN
m.c=4
m.d=C.h8
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cA(n,C.aP,o,o,A.a([],v))
u.aB(new A.f_(2,44))
u.aB(new A.cS(2,16))
u.Aj(D.bJ0,D.y8)
u.aB(new A.cS(44,2))
d.dP(u,m)
u=new A.cA(n,C.aP,o,o,A.a([],v))
t=x-44
u.aB(new A.f_(t,2))
s=x-16
u.aB(new A.cS(s,2))
r=x-2
u.Aj(new A.K(r,16),D.y8)
u.aB(new A.cS(r,44))
d.dP(u,m)
u=new A.cA(n,C.aP,o,o,A.a([],v))
q=w-44
u.aB(new A.f_(r,q))
p=w-16
u.aB(new A.cS(r,p))
r=w-2
u.Aj(new A.K(s,r),D.y8)
u.aB(new A.cS(t,r))
d.dP(u,m)
v=new A.cA(n,C.aP,o,o,A.a([],v))
v.aB(new A.f_(44,r))
v.aB(new A.cS(16,r))
v.Aj(new A.K(2,p),D.y8)
v.aB(new A.cS(2,q))
d.dP(v,m)},
dV(d){return!1}}
B.aT8.prototype={}
B.akj.prototype={
m(){var x=this,w=x.bE$
if(w!=null)w.a3(0,x.gfS())
x.bE$=null
x.a6()},
bS(){this.cr()
this.cP()
this.fT()}}
B.apD.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4X.prototype={
P(){return new B.aJd()}}
B.aJd.prototype={
b6Z(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.ke(x,new B.c9s(this),null,null,y.n)},
XO(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XO=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hf(t,A.u(t).i("hf<1>")).Y0(s.d,!1,B.dM3())
x=2
return A.d(u.jZ(0),$async$XO)
case 2:return A.l(null,w)}})
return A.m($async$XO,w)},
Mx(){var x=0,w=A.n(y.H),v=this,u
var $async$Mx=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aH(0)
x=2
return A.d(y.x.b(u)?u:A.ea(u,y.H),$async$Mx)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.cZ(0),$async$Mx)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$Mx,w)},
ac(){var x,w=this
w.ap()
x=w.a.c
w.d!==$&&A.bw()
w.d=x
w.XO()},
m(){this.a6()
this.Mx()},
nh(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xD}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.jZ(0)
break
case 2:w.cZ(0)
break}}}
B.aSY.prototype={}
B.a5_.prototype={
bhn(){var x=this
x.CW=$.I1().gav6().Y0(new B.bhO(x),!1,new B.bhP(x))
x.cx=$.I1().gaCy().li(new B.bhQ(x))
x.cy=$.I1().gaDB().li(new B.bhR(x))},
b7f(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aH(0)
w=x.cx
if(w!=null)w.aH(0)
w=x.cy
if(w!=null)w.aH(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bq0(!1,w.r===C.jh?C.jh:C.ab_))
return!0},
jZ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$jZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xO(C.xC,A.xN(null,null,C.xC.geS(0))))
if(s.a.e){x=1
break}r=C.Bc
q=new B.bAW(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bhn()
x=7
return A.d($.I1().lt(0,q),$async$jZ)
case 7:p=f
if(!s.db)s.sv(0,s.a.bqm(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tC){o=m
if(!s.db)s.sv(0,s.a.bqo(C.Bc,o,!0,!1,C.aR,C.jh,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$jZ,w)},
cZ(d){var x=0,w=A.n(y.H),v=this
var $async$cZ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b7f()?2:3
break
case 2:x=4
return A.d($.I1().cZ(0),$async$cZ)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cZ,w)},
tI(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.am(A.xO(C.a18,A.xN(null,null,C.a18.geS(0))))
if(u.db)A.am(A.xO(C.xC,A.xN(null,null,C.xC.geS(0))))
if(!t.e){x=1
break}if(t.r===C.jh){x=1
break}x=3
return A.d($.I1().tI(),$async$tI)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tI,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.h9()
x=3
return A.d($.I1().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xP.prototype={
M6(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xP(w,v,f,u,t,s,r,k==null?x.w:k)},
bq0(d,e){var x=null
return this.M6(x,x,x,x,d,x,e,x)},
bqm(d,e,f,g,h,i){return this.M6(d,e,null,f,g,h,i,null)},
bqo(d,e,f,g,h,i,j){return this.M6(null,d,e,f,g,h,i,j)},
bpM(d){var x=null
return this.M6(x,x,x,x,x,x,x,d)},
bpH(d){var x=null
return this.M6(x,x,x,x,x,x,d,x)}}
B.ayj.prototype={
u(d){var x=null,w=A.a([D.bKj],y.p)
w.push(A.h(C.k1.geS(0),x,x,x,x,C.a9M,x,x))
return A.kP(A.bN(A.x(w,C.u,C.h,C.J),x,x),C.ao,!0)}}
B.bAW.prototype={
ZE(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("al<1,v>")
x=A.U(new A.al(x,new B.bAX(),w),w.i("aW.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:C})","F<~>(mD)","Xi(N,tC,e?)","cg(N,xP,e?)","e(N,xP,e?)","~(M,c8)"])
B.cKJ.prototype={
$1(d){return new I.Fv(K.y3,d,this.a)},
$S:1373}
B.cKG.prototype={
$1(d){return this.a.$0()},
$S:156}
B.cKH.prototype={
$1(d){return this.a.$0()},
$S:156}
B.cKI.prototype={
$1(d){return this.a.$0()},
$S:156}
B.b4Q.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:118}
B.c9W.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aH(0)
x.w=A.dd(C.ef,new B.c9V(x))},
$S:0}
B.c9V.prototype={
$0(){return this.a.D8(!0)},
$S:0}
B.c9Q.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c9T.prototype={
$0(){var x=this.a
return x.n(new B.c9S(x))},
$S:0}
B.c9S.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c9U.prototype={
$0(){var x=this.a
return x.n(new B.c9R(x))},
$S:0}
B.c9R.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cg4.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cg5.prototype={
$0(){},
$S:0}
B.bV6.prototype={
$0(){return A.an(this.a,!1).iu()},
$S:0}
B.bH8.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.bH7())},
$S:62}
B.bH7.prototype={
$0(){},
$S:0}
B.bH6.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ad(w,0,!1).en(v)
u.z=v>3e7?x:C.lp}},
$S:0}
B.cr7.prototype={
$3(d,e,f){return D.ckp},
$S:z+3}
B.cr8.prototype={
$2(d,e){var x=null,w=this.a.gKh().x
w===$&&A.b()
return A.cc(x,A.w(x,x,C.r,C.u4,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:262}
B.cr9.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jh)return C.an
x=t===C.ab0
t=x?C.cz:C.dU
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.MR,A.bh(u,!0,u,A.eY(!1,u,!0,A.w(u,A.O(A.a([D.azJ,A.w(u,A.h(v,u,u,u,u,A.aH(u,u,x?C.cS:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.J(t,u,u,w,u,u,C.x),u,u,u,C.dm,u,u,u)],y.p),C.u,C.h,C.l,0,u),C.r,u,G.hZ,D.afM,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbBG(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c9s.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.ap1}x=e.c
if(x!=null){w=new B.ayj(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kw(new B.c9r(this.a,e))},
$S:z+5}
B.c9r.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b6Z(u,e)
v.a.toString
x=u.f
v=A.ai(1/0,e.a,e.b)
u=A.ai(1/0,e.c,e.d)
w=A.uY(A.Gi(A.JM(C.K,A.aK($.I1().avb(),x.b,x.a),C.r,C.bD),new A.af(v,u)),C.y,null)
return w},
$S:116}
B.bhO.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1374}
B.bhP.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xc(d)},
$S:70}
B.bhQ.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpH(d))},
$S:1375}
B.bhR.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpM(d))},
$S:115}
B.bAX.prototype={
$1(d){return d.c},
$S:1376};(function aliases(){var x=B.akj.prototype
x.aOX=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af0.prototype,"gD7",0,0,null,["$1$announce","$0"],["D8","km"],1,0,0)
var t
w(t=B.afD.prototype,"gD7","km",0)
w(t,"gaTh","Ql",0)
w(B.abx.prototype,"gD7","km",0)
v(B.ags.prototype,"gb8_","DL",2)
u(B,"dM3","dua",6)
w(t=B.a5_.prototype,"gbBG","tI",0)
w(t,"geE","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.M,[B.avs,B.U_,B.xP,B.bAW])
v(A.bu,[B.cKJ,B.cKG,B.cKH,B.cKI,B.b4Q,B.bH8,B.cr7,B.cr9,B.c9s,B.bhO,B.bhP,B.bhQ,B.bhR,B.bAX])
u(B.Jt,A.ew)
v(A.G,[B.af_,B.afC,B.UW,B.a4X])
v(A.Z,[B.aT_,B.aT4,B.aT8,B.aSY])
u(B.af0,B.aT_)
v(A.bL,[B.c9W,B.c9V,B.c9Q,B.c9T,B.c9S,B.c9U,B.c9R,B.cg4,B.cg5,B.bV6,B.bH7,B.bH6])
u(B.afD,B.aT4)
v(A.L,[B.adn,B.Pj,B.aed,B.ac6,B.ahn,B.aj_,B.aiK,B.aGd,B.Xi,B.ayj])
u(B.abw,A.dC)
u(B.aSE,A.dw)
u(B.abx,B.aSE)
u(B.akj,B.aT8)
u(B.ags,B.akj)
v(A.cL,[B.cr8,B.c9r])
u(B.aEF,A.qt)
u(B.apD,A.f7)
u(B.aJd,B.aSY)
u(B.a5_,A.cZ)
x(B.aSE,A.em)
x(B.aT_,A.em)
x(B.aT4,A.em)
x(B.aT8,A.em)
w(B.akj,A.i1)
x(B.aSY,A.em)})()
A.br(b.typeUniverse,JSON.parse('{"af_":{"G":[],"e":[],"f":[]},"afC":{"G":[],"e":[],"f":[]},"abw":{"G":[],"e":[],"f":[]},"Jt":{"G":[],"e":[],"f":[]},"af0":{"Z":["af_"],"em":[]},"afD":{"Z":["afC"],"em":[]},"adn":{"L":[],"e":[],"f":[]},"Pj":{"L":[],"e":[],"f":[]},"aed":{"L":[],"e":[],"f":[]},"ac6":{"L":[],"e":[],"f":[]},"ahn":{"L":[],"e":[],"f":[]},"aj_":{"L":[],"e":[],"f":[]},"aiK":{"L":[],"e":[],"f":[]},"aGd":{"L":[],"e":[],"f":[]},"abx":{"Z":["abw"],"em":[]},"UW":{"G":[],"e":[],"f":[]},"Xi":{"L":[],"e":[],"f":[]},"ags":{"Z":["UW"],"em":[]},"aEF":{"aV":[]},"a4X":{"G":[],"e":[],"f":[]},"aJd":{"Z":["a4X"],"em":[]},"a5_":{"cZ":["xP"],"aV":[]},"ayj":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{D:x("cI"),x:x("F<~>"),k:x("r<kO>"),G:x("r<U_>"),v:x("r<fG>"),S:x("r<+at,partner(ad,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a3<@,@>"),w:x("dv"),Y:x("U_"),N:x("c"),n:x("ke<xP>"),J:x("lr<mD>"),q:x("dj"),z:x("@"),r:x("t<U_>?"),g:x("t<@>?"),X:x("M?"),t:x("avs?"),E:x("rw?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.af3=new A.dN(C.tC,C.aa,C.tC,C.aa)
D.afM=new A.J(null,null,D.af3,null,null,null,C.x)
D.coR=new B.aiK("S\xf3 funciona na tua conta",!0,null)
D.aje=new A.f8(C.K,null,null,D.coR,null)
D.c4o=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.caq=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4o,C.a4,null,null,null,null,null,null)
D.bKA=new A.S(C.hx,D.caq,null)
D.ajj=new A.f8(C.K,null,null,D.bKA,null)
D.ap0=new A.ph(C.co,!0,D.ajj,null)
D.ap1=new A.ph(C.ao,!0,null,null)
D.aqj=new B.apD(0,0,"noDuplicates")
D.aqk=new B.apD(1,1,"normal")
D.pM=new A.kt(0.5,0.5,null,null,C.fa,null)
D.cfY=new A.D("Lanterna",null,C.cc,null,null,null,null,null,null,null)
D.azJ=new A.bK(1,C.at,D.cfY,null)
D.cm4=new B.aed("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bQ1=new B.UW(420,!0,null,null)
D.beU=x([D.cm4,C.R,D.bQ1],y.p)
D.brL=x([C.tx],y.k)
D.cpw=x([],y.k)
D.byK=x([],y.G)
D.bJ0=new A.K(16,2)
D.aC7=new A.b0(57911,"MaterialIcons",null,!1)
D.aCC=new A.b8(D.aC7,null,C.t,null,null,null)
D.bKj=new A.S(C.MO,D.aCC,null)
D.ccv=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cc,null,null,null,null,null,null,null)
D.bKw=new A.S(C.pV,D.ccv,null)
D.cgP=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cc,null,null,null,null,null,null,null)
D.bKV=new A.S(C.fW,D.cgP,null)
D.cl5=new B.aEF(null)
D.apU=new A.qs(D.cl5,null,C.aR,null,null)
D.bPo=new A.eL(0,0,0,0,null,null,D.apU,null)
D.y8=new A.b5(14,14)
D.bQL=new A.X("Bilhete",!1)
D.bRi=new A.X("Organizas",!1)
D.bRS=new A.X("Por entrar",!1)
D.bSg=new A.X("Sem bilhete pago",!1)
D.bXk=new A.l_(186,186,8,C.fU,0,null)
D.c8J=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bYG=new A.bF(D.c8J,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c7J=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cc,C.a4,null,null,null,null,null,null)
D.caA=new A.D("Entrada",null,C.hS,null,null,null,null,null,null,null)
D.ceF=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.cf0=new A.D("\xc0 procura de um QR\u2026",null,C.hR,null,null,null,null,null,null,null)
D.cgy=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.cki=new B.abw(null)
D.ckp=new B.Xi(null)
D.ckQ=new B.ac6("D\xc1 ENTRADA EM",null)
D.ckR=new B.ac6("HOJE",null)
D.cm5=new B.aed("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cna=new B.af_(null)
D.cnq=new B.afC(null)})()};
(a=>{a["mWWoB+TdOGdwjLLiz9xuARZRJwY="]=a.current})($__dart_deferred_initializers__);