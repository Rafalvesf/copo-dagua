((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dMe(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fZ(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMm(w,x)},
cJG(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJG=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jg("partner_today",y.z),$async$cJG)
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
m=A.C(J.i(q,"booking_number"))
l=A.aD(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aD(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bb(r,new A.aMN([k,n,m,l]))}}p=A.aD(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aD(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avg(r,p,o)
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
return A.m($async$cJG,w)},
avg:function avg(d,e,f){this.a=d
this.b=e
this.c=f},
due(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
g=A.p(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d2(A.p(x==null?"":x))
w=A.C(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.C(J.i(i,"status")):k
if(s){s=A.aD(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aD(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d2(A.p(p==null?"":p))
p=p==null?k:p.dH()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ao(j==null?C.ai:j)
while(j.q()){n=j.gE(j)
if(t.b(n)&&A.d2(A.p(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.p(l==null?"Parceiro":l)
o.push(new A.aM8(A.dc(A.p(m.h(n,"at"))).dH(),l))}}return new B.TP(h,g,x,w,v,u,r,s,q,p,o)},
cJE(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJE=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jg("my_entries",y.z),$async$cJE)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.bb(r,B.due(q))}v=r
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
return A.m($async$cJE,w)},
dLy(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbu().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKL(w)
u=u.ch
u===$&&A.b()
return u.LU(0,"entries-"+w,C.yh).NL(new B.cKI(d),C.GD,x.$1("user_id"),v,"event_checkins").NL(new B.cKJ(d),C.GD,x.$1("user_id"),v,"booking_arrivals").NL(new B.cKK(d),C.GE,x.$1("buyer_id"),v,"event_tickets").Pz(0)},
TP:function TP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKL:function cKL(d){this.a=d},
cKI:function cKI(d){this.a=d},
cKJ:function cKJ(d){this.a=d},
cKK:function cKK(d){this.a=d},
dqK(){return new B.Jg(null)},
ddd(d){return C.f.aT(C.j.k(A.hZ(d)),2,"0")+":"+C.f.aT(C.j.k(A.hO(d)),2,"0")},
Jg:function Jg(d){this.a=d},
b4z:function b4z(){},
aeM:function aeM(d){this.a=d},
aeN:function aeN(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
ca7:function ca7(d){this.a=d},
ca6:function ca6(d){this.a=d},
ca1:function ca1(d,e){this.a=d
this.b=e},
ca4:function ca4(d){this.a=d},
ca3:function ca3(d){this.a=d},
ca5:function ca5(d){this.a=d},
ca2:function ca2(d){this.a=d},
afo:function afo(d){this.a=d},
afp:function afp(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgg:function cgg(d,e){this.a=d
this.b=e},
cgh:function cgh(){},
ad9:function ad9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVk:function bVk(d){this.a=d},
P5:function P5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ae_:function ae_(d,e){this.c=d
this.a=e},
abT:function abT(d,e){this.c=d
this.a=e},
ah9:function ah9(d,e){this.c=d
this.a=e},
aiM:function aiM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiw:function aiw(d,e,f){this.c=d
this.d=e
this.a=f},
aG_:function aG_(d,e){this.c=d
this.a=e},
abi:function abi(d){this.a=d},
abj:function abj(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bHl:function bHl(d){this.a=d},
bHk:function bHk(){},
bHj:function bHj(d,e){this.a=d
this.b=e},
aSr:function aSr(){},
aSN:function aSN(){},
aSS:function aSS(){},
UL:function UL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agf:function agf(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ec$=e
_.bE$=f
_.c=_.a=null},
crj:function crj(){},
crk:function crk(d,e){this.a=d
this.b=e},
crl:function crl(d){this.a=d},
X9:function X9(d){this.a=d},
aEr:function aEr(d){this.a=d},
aSW:function aSW(){},
ak6:function ak6(){},
apr:function apr(d,e,f){this.c=d
this.a=e
this.b=f},
du4(d,e){},
a4I:function a4I(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJ_:function aJ_(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9E:function c9E(d){this.a=d},
c9D:function c9D(d,e){this.a=d
this.b=e},
aSL:function aSL(){},
du1(d,e){var x=null,w=d===D.aqg?250:0
return new B.a4L(d,w,e,new A.lq(x,x,y.J),new B.xH(x,C.Bb,x,!1,!1,C.aR,C.je,1),$.aa())},
a4L:function a4L(d,e,f,g,h,i){var _=this
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
bhr:function bhr(d){this.a=d},
bhs:function bhs(d){this.a=d},
bht:function bht(d){this.a=d},
bhu:function bhu(d){this.a=d},
xH:function xH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ay5:function ay5(d){this.a=d},
bAu:function bAu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAv:function bAv(){}},D,F,G,H,I,K,L,M
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
B.avg.prototype={}
B.TP.prototype={}
B.Jg.prototype={
ba(d,e){var x=y.E
return e.G(A.cC($.b7(),new B.b4z(),y.D,x),x)===C.dQ?D.cne:D.cmZ}}
B.aeM.prototype={
R(){return new B.aeN()}}
B.aeN.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.km()
x.r=B.dLy(new B.ca7(x))},
m(){var x,w,v=this
$.az.ia(v)
x=v.w
if(x!=null)x.aK(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y6(x)}v.a6()},
ng(d){if(d===C.es)this.km()},
D8(d){return this.b6a(d)},
km(){return this.D8(!1)},
b6a(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$D8=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.bzr:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJE(),$async$D8)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.ca1(u,s))
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
return A.m($async$D8,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gD7(),q=u.d,p=y.p
q=A.a([new B.P5("QR code",C.qf,!q,new B.ca4(u),t),new B.P5("Scannear",C.vk,q,new B.ca5(u),t)],p)
if(u.d)p=D.beQ
else{x=A.a([D.ck6,C.R,D.ajc,C.bO,D.ckE,C.ar],p)
w=s==null
if(w&&!u.f)x.push(M.a8m)
else if(w)x.push(new B.ah9(r,t))
else{w=J.a7(s)
if(w.gY(s))x.push(D.bKt)
else{v=A.a([],p)
for(w=w.gX(s);w.q();)C.e.n(v,A.a([D.pO,new B.aG_(w.gE(w),t)],p))
v.push(D.pO)
C.e.n(x,v)}}p=x}return new B.ad9(r,q,p,t)}}
B.afo.prototype={
R(){return new B.afp()}}
B.afp.prototype={
ad(){this.aq()
$.az.b4$.push(this)
this.km()},
m(){$.az.ia(this)
this.a6()},
ng(d){if(d===C.es)this.km()},
km(){var x=0,w=A.n(y.H),v,u=this,t
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJG(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cgg(u,t))
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
Qm(){var x=0,w=A.n(y.H),v=this,u
var $async$Qm=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ae(u).aj("/cobrar",null,y.X),$async$Qm)
case 2:if(v.c!=null)v.km()
return A.l(null,w)}})
return A.m($async$Qm,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gD7(),k=y.p,j=A.a([new B.P5("Scannear",C.vk,!0,new B.cgh(),n),new B.P5("Cobrar",C.nL,!1,o.gaTd(),n)],k),i=A.a([D.clU,C.R,new B.UL(290,!1,l,n),C.bO,D.ckF,C.ar],k),h=m==null
if(h&&!o.e)i.push(H.a8j)
else if(h)i.push(new B.ah9(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKQ)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.G)(x),++u){t=x[u].a
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
t=p}C.e.n(h,A.a([D.pO,new B.aiM(s,r,t,q>0,n,n)],k))}h.push(D.pO)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aiM("Cobrado hoje",k,n,!1,F.cJ0(m.b),n))
h.push(D.pO)
C.e.n(i,h)}return new B.ad9(l,j,i,n)}}
B.ad9.prototype={
u(d){var x=null,w=C.CQ.C(0,new A.a4(0,A.aT(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d_(C.bc,x,x,A.pV(C.lC,new B.bVk(d),"Voltar"),x),C.R,D.cao,C.aA,A.e4(C.bf,this.d,C.r,C.bk,8,8),C.aA],y.p)
C.e.n(v,this.e)
return A.cP(x,C.by,A.bB(!0,A.B1(A.d6(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.P5.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.bj(w,!0,w,A.hj(!1,C.aN,!0,w,A.eY(!1,w,!0,A.aK(new A.S(C.bY,A.O(A.a([A.b9(x.d,u,w,w,16),C.bj,A.h(x.c,w,w,w,w,A.aI(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.v,C.h,C.J,0,w),w),38,w),C.aa,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.aa,w,w,C.cW),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.ae_.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x)}}
B.abT.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aH,x,x)}}
B.ah9.prototype={
u(d){var x=null
return new A.S(C.pW,A.y(A.a([D.c7y,new A.am(A.cJ(C.t4,x,x,this.c,x,x),x)],y.p),C.v,C.h,C.l),x)}}
B.aiM.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u))
t=A.a([A.a5(A.y(s,C.G,C.h,C.l),1),C.ae],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cz:C.dU
w=A.W(999)
t.push(A.x(u,A.h(s,u,u,u,u,A.aI(u,u,r?C.cR:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.I(x,u,u,w,u,u,C.x),u,u,u,C.dm,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u))
return new A.S(C.ck,A.O(t,C.v,C.h,C.l,0,u),u)}}
B.aiw.prototype={
u(d){var x=null,w=this.d,v=w?C.cz:C.dU,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?C.cR:C.co,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.x),x,x,x,C.dm,x,x,x)}}
B.aG_.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dr[A.fG(l)-1]+", "+A.aE(l)+" "+C.bg[A.aw(l)-1])
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
if(k!=null)s=new A.X("Entrou \xe0s "+B.ddd(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.ddd(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSb
else if(x)k=D.bRd
else k=m.f?D.bQG:D.bRN
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n)],k)
if(u.length!==0)x.push(new A.S(L.MS,A.h(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.ck,A.O(A.a([A.a5(A.y(x,C.G,C.h,C.l),1),C.ae,new B.aiw(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abi.prototype={
R(){return new B.abj(new A.ab(Date.now(),0,!1),C.lp)}}
B.abj.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.km()
x.as=A.u6(C.hs,new B.bHl(x))},
m(){var x,w=this
$.az.ia(w)
x=w.Q
if(x!=null)x.aK(0)
x=w.as
if(x!=null)x.aK(0)
w.a6()},
ng(d){var x
if(d===C.es)this.km()
else if(d===C.mB){x=this.Q
if(x!=null)x.aK(0)}},
km(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aK(0)
x=3
return A.d(A.aUK(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bHj(u,t))
s=t==null?null:t.b
if(s==null)s=C.ky
u.Q=A.df(s,u.gD7())
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().G($.b7(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.B(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.B(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cg(new A.ab(Date.now(),0,!1)).a
v=x<0?0:C.k.eD(C.j.aO(x,1000)/1000)
u=C.k.ae(C.j.aO(x,1000)/C.j.aO(o.z.a,1000),0,1)
x=A.W(16)
t=A.bF(C.fa,0.5)
s=A.W(16)
r=A.bF(C.fa,0.5)
k=!k
if(k)q=A.bpu(C.t,A.kg("/q/"+l.a),C.GG,C.GH,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXc:A.bO(A.y(A.a([C.aDp,C.aE,D.cet,new A.am(A.cJ(C.t4,n,n,o.gD7(),n,n),n)],y.p),C.v,C.h,C.J),n,n)
p=y.p
s=A.a([A.x(n,A.aK(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.x),n,n,n,C.cT,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ac,A.x(C.bc,A.ar0(C.K,A.x(n,n,C.r,n,n,new A.I(C.u6,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.fa,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aE,A.bj(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.cg(k,32,r,!1,!0,n),C.ae,new A.di(1,C.bb,A.y(A.a([A.h(w,n,n,n,n,C.a9,n,n),D.cgm],p),C.G,C.h,C.l),n)],p),C.v,C.bR,C.l,0,n))
return A.x(n,A.y(s,C.v,C.h,C.l),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.x),n,n,n,C.cT,n,n,n)}}
B.aSr.prototype={}
B.aSN.prototype={}
B.aSS.prototype={}
B.UL.prototype={
R(){return new B.agf(B.du1(D.aqf,D.brG),null,null)}}
B.agf.prototype={
gKk(){var x,w=this,v=w.e
if(v===$){x=A.cz(null,E.ME,null,null,w)
w.e!==$&&A.b_()
w.e=x
v=x}return v},
ad(){this.aq()
$.az.b4$.push(this)},
bV(){var x,w,v=this
v.dD()
x=v.c
x.toString
if(A.aT(x,null,y.w).w.ax)v.gKk().cY(0)
else{x=v.gKk()
w=x.r
if(!(w!=null&&w.a!=null))x.aC_(0,!0)}},
ng(d){if(this.f)return
if(d===C.es)this.d.jZ(0)
else if(d===C.mB)this.d.cY(0)},
m(){var x=this
$.az.ia(x)
x.gKk().m()
x.d.m()
x.aOW()},
DK(d){return this.b7X(d)},
b7X(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DK=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dMe(t)
if(p==null){s=u.c.O(y.q).f
s.XG()
s.a0(D.bYx)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.cY(0),$async$DK)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ae(r).aj(m,null,y.X),$async$DK)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.jZ(0),$async$DK)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DK,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fT(A.W(16),A.aK(new A.bA(C.aw,w,C.e4,C.y,A.a([C.ju,new B.a4I(t,x.gb7W(),new B.crj(),w),A.bO(A.aK(new A.bA(C.aw,w,C.aC,C.y,A.a([D.bPj,A.eT(x.gKk(),new B.crk(x,u),w)],s),w),u,u),w,w),A.cb(16,A.bO(A.x(w,D.ceP,C.r,w,w,new A.I(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dm,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.ba)],s)
if(x.a.d)s.push(new A.lp(t,new B.crl(x),w,w,y.n))
return A.y(s,C.E,C.h,C.l)}}
B.X9.prototype={
u(d){return D.aoY}}
B.aEr.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.bc()
m.r=C.t.gv(0)
m.b=C.bM
m.c=4
m.d=C.h8
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cB(n,C.aP,o,o,A.a([],v))
u.aA(new A.f_(2,44))
u.aA(new A.cS(2,16))
u.Aj(D.bIX,D.y9)
u.aA(new A.cS(44,2))
d.dP(u,m)
u=new A.cB(n,C.aP,o,o,A.a([],v))
t=x-44
u.aA(new A.f_(t,2))
s=x-16
u.aA(new A.cS(s,2))
r=x-2
u.Aj(new A.K(r,16),D.y9)
u.aA(new A.cS(r,44))
d.dP(u,m)
u=new A.cB(n,C.aP,o,o,A.a([],v))
q=w-44
u.aA(new A.f_(r,q))
p=w-16
u.aA(new A.cS(r,p))
r=w-2
u.Aj(new A.K(s,r),D.y9)
u.aA(new A.cS(t,r))
d.dP(u,m)
v=new A.cB(n,C.aP,o,o,A.a([],v))
v.aA(new A.f_(44,r))
v.aA(new A.cS(16,r))
v.Aj(new A.K(2,p),D.y9)
v.aA(new A.cS(2,q))
d.dP(v,m)},
dN(d){return!1}}
B.aSW.prototype={}
B.ak6.prototype={
m(){var x=this,w=x.bE$
if(w!=null)w.a3(0,x.gfS())
x.bE$=null
x.a6()},
bS(){this.cp()
this.cO()
this.fT()}}
B.apr.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4I.prototype={
R(){return new B.aJ_()}}
B.aJ_.prototype={
b6V(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lp(x,new B.c9E(this),null,null,y.n)},
XP(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XP=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.he(t,A.u(t).i("he<1>")).Y1(s.d,!1,B.dLS())
x=2
return A.d(u.jZ(0),$async$XP)
case 2:return A.l(null,w)}})
return A.m($async$XP,w)},
My(){var x=0,w=A.n(y.H),v=this,u
var $async$My=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aK(0)
x=2
return A.d(y.x.b(u)?u:A.ea(u,y.H),$async$My)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.cY(0),$async$My)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$My,w)},
ad(){var x,w=this
w.aq()
x=w.a.c
w.d!==$&&A.bv()
w.d=x
w.XP()},
m(){this.a6()
this.My()},
ng(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xE}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.jZ(0)
break
case 2:w.cY(0)
break}}}
B.aSL.prototype={}
B.a4L.prototype={
bhi(){var x=this
x.CW=$.HS().gava().Y1(new B.bhr(x),!1,new B.bhs(x))
x.cx=$.HS().gaCx().li(new B.bht(x))
x.cy=$.HS().gaDA().li(new B.bhu(x))},
b7b(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aK(0)
w=x.cx
if(w!=null)w.aK(0)
w=x.cy
if(w!=null)w.aK(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bpY(!1,w.r===C.je?C.je:C.aaY))
return!0},
jZ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$jZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xG(C.xD,A.xF(null,null,C.xD.geS(0))))
if(s.a.e){x=1
break}r=C.Bb
q=new B.bAu(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bhi()
x=7
return A.d($.HS().lt(0,q),$async$jZ)
case 7:p=f
if(!s.db)s.sv(0,s.a.bqi(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tx){o=m
if(!s.db)s.sv(0,s.a.bqk(C.Bb,o,!0,!1,C.aR,C.je,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$jZ,w)},
cY(d){var x=0,w=A.n(y.H),v=this
var $async$cY=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b7b()?2:3
break
case 2:x=4
return A.d($.HS().cY(0),$async$cY)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cY,w)},
tJ(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tJ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.an(A.xG(C.a15,A.xF(null,null,C.a15.geS(0))))
if(u.db)A.an(A.xG(C.xD,A.xF(null,null,C.xD.geS(0))))
if(!t.e){x=1
break}if(t.r===C.je){x=1
break}x=3
return A.d($.HS().tJ(),$async$tJ)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tJ,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.h9()
x=3
return A.d($.HS().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xH.prototype={
M8(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xH(w,v,f,u,t,s,r,k==null?x.w:k)},
bpY(d,e){var x=null
return this.M8(x,x,x,x,d,x,e,x)},
bqi(d,e,f,g,h,i){return this.M8(d,e,null,f,g,h,i,null)},
bqk(d,e,f,g,h,i,j){return this.M8(null,d,e,f,g,h,i,j)},
bpJ(d){var x=null
return this.M8(x,x,x,x,x,x,x,d)},
bpE(d){var x=null
return this.M8(x,x,x,x,x,x,d,x)}}
B.ay5.prototype={
u(d){var x=null,w=A.a([D.bKg],y.p)
w.push(A.h(C.k1.geS(0),x,x,x,x,C.a9L,x,x))
return A.kN(A.bO(A.y(w,C.v,C.h,C.J),x,x),C.an,!0)}}
B.bAu.prototype={
ZF(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bAv(),w),w.i("aW.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:B})","F<~>(mA)","X9(N,tx,e?)","cj(N,xH,e?)","e(N,xH,e?)","~(M,c7)"])
B.cKL.prototype={
$1(d){return new I.Fp(K.y4,d,this.a)},
$S:1377}
B.cKI.prototype={
$1(d){return this.a.$0()},
$S:153}
B.cKJ.prototype={
$1(d){return this.a.$0()},
$S:153}
B.cKK.prototype={
$1(d){return this.a.$0()},
$S:153}
B.b4z.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:116}
B.ca7.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aK(0)
x.w=A.df(C.ex,new B.ca6(x))},
$S:0}
B.ca6.prototype={
$0(){return this.a.D8(!0)},
$S:0}
B.ca1.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.ca4.prototype={
$0(){var x=this.a
return x.p(new B.ca3(x))},
$S:0}
B.ca3.prototype={
$0(){return this.a.d=!1},
$S:0}
B.ca5.prototype={
$0(){var x=this.a
return x.p(new B.ca2(x))},
$S:0}
B.ca2.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cgg.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cgh.prototype={
$0(){},
$S:0}
B.bVk.prototype={
$0(){return A.al(this.a,!1).hz()},
$S:0}
B.bHl.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bHk())},
$S:64}
B.bHk.prototype={
$0(){},
$S:0}
B.bHj.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ab(w,0,!1).em(v)
u.z=v>3e7?x:C.lp}},
$S:0}
B.crj.prototype={
$3(d,e,f){return D.ckd},
$S:z+3}
B.crk.prototype={
$2(d,e){var x=null,w=this.a.gKk().x
w===$&&A.b()
return A.cb(x,A.x(x,x,C.r,C.u6,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:261}
B.crl.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.je)return C.ao
x=t===C.aaZ
t=x?C.cz:C.dU
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.MQ,A.bj(u,!0,u,A.eY(!1,u,!0,A.x(u,A.O(A.a([D.azE,A.x(u,A.h(v,u,u,u,u,A.aI(u,u,x?C.cR:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.x),u,u,u,C.dm,u,u,u)],y.p),C.v,C.h,C.l,0,u),C.r,u,G.hZ,D.afK,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbBB(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c9E.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aoZ}x=e.c
if(x!=null){w=new B.ay5(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kU(new B.c9D(this.a,e))},
$S:z+5}
B.c9D.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b6V(u,e)
v.a.toString
x=u.f
v=A.aj(1/0,e.a,e.b)
u=A.aj(1/0,e.c,e.d)
w=A.uS(A.G9(A.Jz(C.K,A.aK($.HS().avg(),x.b,x.a),C.r,C.bE),new A.af(v,u)),C.y,null)
return w},
$S:107}
B.bhr.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1378}
B.bhs.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xa(d)},
$S:68}
B.bht.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpE(d))},
$S:1379}
B.bhu.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpJ(d))},
$S:122}
B.bAv.prototype={
$1(d){return d.c},
$S:1380};(function aliases(){var x=B.ak6.prototype
x.aOW=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aeN.prototype,"gD7",0,0,null,["$1$announce","$0"],["D8","km"],1,0,0)
var t
w(t=B.afp.prototype,"gD7","km",0)
w(t,"gaTd","Qm",0)
w(B.abj.prototype,"gD7","km",0)
v(B.agf.prototype,"gb7W","DK",2)
u(B,"dLS","du4",6)
w(t=B.a4L.prototype,"gbBB","tJ",0)
w(t,"geE","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.M,[B.avg,B.TP,B.xH,B.bAu])
v(A.bt,[B.cKL,B.cKI,B.cKJ,B.cKK,B.b4z,B.bHl,B.crj,B.crl,B.c9E,B.bhr,B.bhs,B.bht,B.bhu,B.bAv])
u(B.Jg,A.ew)
v(A.H,[B.aeM,B.afo,B.UL,B.a4I])
v(A.a_,[B.aSN,B.aSS,B.aSW,B.aSL])
u(B.aeN,B.aSN)
v(A.bL,[B.ca7,B.ca6,B.ca1,B.ca4,B.ca3,B.ca5,B.ca2,B.cgg,B.cgh,B.bVk,B.bHk,B.bHj])
u(B.afp,B.aSS)
v(A.L,[B.ad9,B.P5,B.ae_,B.abT,B.ah9,B.aiM,B.aiw,B.aG_,B.X9,B.ay5])
u(B.abi,A.dC)
u(B.aSr,A.dw)
u(B.abj,B.aSr)
u(B.ak6,B.aSW)
u(B.agf,B.ak6)
v(A.cK,[B.crk,B.c9D])
u(B.aEr,A.qr)
u(B.apr,A.fg)
u(B.aJ_,B.aSL)
u(B.a4L,A.d3)
x(B.aSr,A.en)
x(B.aSN,A.en)
x(B.aSS,A.en)
x(B.aSW,A.en)
w(B.ak6,A.i0)
x(B.aSL,A.en)})()
A.br(b.typeUniverse,JSON.parse('{"aeM":{"H":[],"e":[],"f":[]},"afo":{"H":[],"e":[],"f":[]},"abi":{"H":[],"e":[],"f":[]},"Jg":{"H":[],"e":[],"f":[]},"aeN":{"a_":["aeM"],"en":[]},"afp":{"a_":["afo"],"en":[]},"ad9":{"L":[],"e":[],"f":[]},"P5":{"L":[],"e":[],"f":[]},"ae_":{"L":[],"e":[],"f":[]},"abT":{"L":[],"e":[],"f":[]},"ah9":{"L":[],"e":[],"f":[]},"aiM":{"L":[],"e":[],"f":[]},"aiw":{"L":[],"e":[],"f":[]},"aG_":{"L":[],"e":[],"f":[]},"abj":{"a_":["abi"],"en":[]},"UL":{"H":[],"e":[],"f":[]},"X9":{"L":[],"e":[],"f":[]},"agf":{"a_":["UL"],"en":[]},"aEr":{"aV":[]},"a4I":{"H":[],"e":[],"f":[]},"aJ_":{"a_":["a4I"],"en":[]},"a4L":{"d3":["xH"],"aV":[]},"ay5":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.A
return{D:x("cH"),x:x("F<~>"),k:x("r<kM>"),G:x("r<TP>"),v:x("r<fE>"),S:x("r<+at,partner(ab,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a3<@,@>"),w:x("du"),Y:x("TP"),N:x("c"),n:x("lp<xH>"),J:x("lq<mA>"),q:x("dl"),z:x("@"),r:x("t<TP>?"),g:x("t<@>?"),X:x("M?"),t:x("avg?"),E:x("rs?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.af0=new A.dN(C.tE,C.ad,C.tE,C.ad)
D.afK=new A.I(null,null,D.af0,null,null,null,C.x)
D.coF=new B.aiw("S\xf3 funciona na tua conta",!0,null)
D.ajc=new A.f6(C.K,null,null,D.coF,null)
D.c4e=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cae=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4e,C.a3,null,null,null,null,null,null)
D.bKx=new A.S(C.hx,D.cae,null)
D.ajh=new A.f6(C.K,null,null,D.bKx,null)
D.aoY=new A.ph(C.co,!0,D.ajh,null)
D.aoZ=new A.ph(C.an,!0,null,null)
D.aqf=new B.apr(0,0,"noDuplicates")
D.aqg=new B.apr(1,1,"normal")
D.pO=new A.kq(0.5,0.5,null,null,C.fa,null)
D.cfM=new A.D("Lanterna",null,C.cc,null,null,null,null,null,null,null)
D.azE=new A.bJ(1,C.at,D.cfM,null)
D.clT=new B.ae_("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bPX=new B.UL(420,!0,null,null)
D.beQ=x([D.clT,C.R,D.bPX],y.p)
D.brG=x([C.tz],y.k)
D.cpl=x([],y.k)
D.bzr=x([],y.G)
D.bIX=new A.K(16,2)
D.aC3=new A.b0(57911,"MaterialIcons",null,!1)
D.aCy=new A.b8(D.aC3,null,C.t,null,null,null)
D.bKg=new A.S(C.MN,D.aCy,null)
D.ccj=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cc,null,null,null,null,null,null,null)
D.bKt=new A.S(C.pW,D.ccj,null)
D.cgD=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cc,null,null,null,null,null,null,null)
D.bKQ=new A.S(C.fW,D.cgD,null)
D.ckU=new B.aEr(null)
D.apQ=new A.qq(D.ckU,null,C.aR,null,null)
D.bPj=new A.eF(0,0,0,0,null,null,D.apQ,null)
D.y9=new A.b6(14,14)
D.bQG=new A.X("Bilhete",!1)
D.bRd=new A.X("Organizas",!1)
D.bRN=new A.X("Por entrar",!1)
D.bSb=new A.X("Sem bilhete pago",!1)
D.bXc=new A.kY(186,186,8,C.fU,0,null)
D.c8y=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bYx=new A.bG(D.c8y,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c7y=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cc,C.a3,null,null,null,null,null,null)
D.cao=new A.D("Entrada",null,C.hS,null,null,null,null,null,null,null)
D.cet=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.ceP=new A.D("\xc0 procura de um QR\u2026",null,C.hR,null,null,null,null,null,null,null)
D.cgm=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.ck6=new B.abi(null)
D.ckd=new B.X9(null)
D.ckE=new B.abT("D\xc1 ENTRADA EM",null)
D.ckF=new B.abT("HOJE",null)
D.clU=new B.ae_("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cmZ=new B.aeM(null)
D.cne=new B.afo(null)})()};
(a=>{a["u5enAdMCKBEuryVGjaTuPucF+lQ="]=a.current})($__dart_deferred_initializers__);