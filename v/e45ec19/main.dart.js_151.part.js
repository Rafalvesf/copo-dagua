((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dMF(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fZ(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMF(w,x)},
cJP(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJP=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.ji("partner_today",y.z),$async$cJP)
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
m=A.B(J.i(q,"booking_number"))
l=A.aE(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aE(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bn(r,new A.aN5([k,n,m,l]))}}p=A.aE(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aE(J.i(s,"charged_count"))
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
return A.m($async$cJP,w)},
avw:function avw(d,e,f){this.a=d
this.b=e
this.c=f},
duz(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a6(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
g=A.p(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d3(A.p(x==null?"":x))
w=A.B(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.B(J.i(i,"status")):k
if(s){s=A.aE(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aE(j.h(d,"table"))
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
o.push(new A.aMr(A.da(A.p(m.h(n,"at"))).dJ(),l))}}return new B.U0(h,g,x,w,v,u,r,s,q,p,o)},
cJN(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJN=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.ji("my_entries",y.z),$async$cJN)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.bn(r,B.duz(q))}v=r
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
return A.m($async$cJN,w)},
dLZ(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbu().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKV(w)
u=u.ch
u===$&&A.b()
return u.LS(0,"entries-"+w,C.yj).NL(new B.cKS(d),C.GJ,x.$1("user_id"),v,"event_checkins").NL(new B.cKT(d),C.GJ,x.$1("user_id"),v,"booking_arrivals").NL(new B.cKU(d),C.GK,x.$1("buyer_id"),v,"event_tickets").Pz(0)},
U0:function U0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKV:function cKV(d){this.a=d},
cKS:function cKS(d){this.a=d},
cKT:function cKT(d){this.a=d},
cKU:function cKU(d){this.a=d},
dr7(){return new B.Ju(null)},
ddB(d){return C.f.aT(C.j.k(A.i_(d)),2,"0")+":"+C.f.aT(C.j.k(A.hQ(d)),2,"0")},
Ju:function Ju(d){this.a=d},
b4X:function b4X(){},
af0:function af0(d){this.a=d},
af1:function af1(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
ca6:function ca6(d){this.a=d},
ca5:function ca5(d){this.a=d},
ca0:function ca0(d,e){this.a=d
this.b=e},
ca3:function ca3(d){this.a=d},
ca2:function ca2(d){this.a=d},
ca4:function ca4(d){this.a=d},
ca1:function ca1(d){this.a=d},
afF:function afF(d){this.a=d},
afG:function afG(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgg:function cgg(d,e){this.a=d
this.b=e},
cgh:function cgh(){},
adn:function adn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVd:function bVd(d){this.a=d},
Pj:function Pj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aee:function aee(d,e){this.c=d
this.a=e},
ac6:function ac6(d,e){this.c=d
this.a=e},
ahr:function ahr(d,e){this.c=d
this.a=e},
aj2:function aj2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiO:function aiO(d,e,f){this.c=d
this.d=e
this.a=f},
aGj:function aGj(d,e){this.c=d
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
bHf:function bHf(d){this.a=d},
bHe:function bHe(){},
bHd:function bHd(d,e){this.a=d
this.b=e},
aSL:function aSL(){},
aT6:function aT6(){},
aTb:function aTb(){},
UX:function UX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agw:function agw(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ed$=e
_.bE$=f
_.c=_.a=null},
crj:function crj(){},
crk:function crk(d,e){this.a=d
this.b=e},
crl:function crl(d){this.a=d},
Xj:function Xj(d){this.a=d},
aEL:function aEL(d){this.a=d},
aTf:function aTf(){},
akm:function akm(){},
apH:function apH(d,e,f){this.c=d
this.a=e
this.b=f},
dup(d,e){},
a4X:function a4X(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJj:function aJj(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9D:function c9D(d){this.a=d},
c9C:function c9C(d,e){this.a=d
this.b=e},
aT4:function aT4(){},
dum(d,e){var x=null,w=d===D.aqp?250:0
return new B.a5_(d,w,e,new A.ls(x,x,y.J),new B.xQ(x,C.Bf,x,!1,!1,C.aR,C.jh,1),$.aa())},
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
bhW:function bhW(d){this.a=d},
bhX:function bhX(d){this.a=d},
bhY:function bhY(d){this.a=d},
bhZ:function bhZ(d){this.a=d},
xQ:function xQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayp:function ayp(d){this.a=d},
bB2:function bB2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bB3:function bB3(){}},D,F,G,H,I,K,L,M
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
B.avw.prototype={}
B.U0.prototype={}
B.Ju.prototype={
b9(d,e){var x=y.E
return e.G(A.cC($.b7(),new B.b4X(),y.D,x),x)===C.dF?D.cnK:D.cns}}
B.af0.prototype={
P(){return new B.af1()}}
B.af1.prototype={
ac(){var x=this
x.ao()
$.az.b3$.push(x)
x.km()
x.r=B.dLZ(new B.ca6(x))},
m(){var x,w,v=this
$.az.i9(v)
x=v.w
if(x!=null)x.aE(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y7(x)}v.a6()},
nh(d){if(d===C.et)this.km()},
D8(d){return this.b6h(d)},
km(){return this.D8(!1)},
b6h(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$D8=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.byT:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJN(),$async$D8)
case 3:s=f
if(u.c==null){x=1
break}u.n(new B.ca0(u,s))
if(!d||s==null){x=1
break}for(o=J.ao(s);o.q();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null)
p.a1(new A.bF(o,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$D8,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gD7(),q=u.d,p=y.p
q=A.a([new B.Pj("QR code",C.vf,!q,new B.ca3(u),t),new B.Pj("Scannear",C.vk,q,new B.ca4(u),t)],p)
if(u.d)p=D.bf1
else{x=A.a([D.ckB,C.R,D.ajh,C.bP,D.cl8,C.ap],p)
w=s==null
if(w&&!u.f)x.push(M.a8q)
else if(w)x.push(new B.ahr(r,t))
else{w=J.a6(s)
if(w.gY(s))x.push(D.bKF)
else{v=A.a([],p)
for(w=w.gW(s);w.q();)C.e.p(v,A.a([D.pM,new B.aGj(w.gE(w),t)],p))
v.push(D.pM)
C.e.p(x,v)}}p=x}return new B.adn(r,q,p,t)}}
B.afF.prototype={
P(){return new B.afG()}}
B.afG.prototype={
ac(){this.ao()
$.az.b3$.push(this)
this.km()},
m(){$.az.i9(this)
this.a6()},
nh(d){if(d===C.et)this.km()},
km(){var x=0,w=A.n(y.H),v,u=this,t
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJP(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.cgg(u,t))
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
Qm(){var x=0,w=A.n(y.H),v=this,u
var $async$Qm=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ae(u).ag("/cobrar",null,y.X),$async$Qm)
case 2:if(v.c!=null)v.km()
return A.l(null,w)}})
return A.m($async$Qm,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gD7(),k=y.p,j=A.a([new B.Pj("Scannear",C.vk,!0,new B.cgh(),n),new B.Pj("Cobrar",C.nK,!1,o.gaTj(),n)],k),i=A.a([D.cmn,C.R,new B.UX(290,!1,l,n),C.bP,D.cl9,C.ap],k),h=m==null
if(h&&!o.e)i.push(H.a8n)
else if(h)i.push(new B.ahr(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bL3)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.p(q)+" pessoas")
r=C.e.a_(r," \xb7 ")
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
t=p}C.e.p(h,A.a([D.pM,new B.aj2(s,r,t,q>0,n,n)],k))}h.push(D.pM)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aj2("Cobrado hoje",k,n,!1,F.cJ9(m.b),n))
h.push(D.pM)
C.e.p(i,h)}return new B.adn(l,j,i,n)}}
B.adn.prototype={
u(d){var x=null,w=C.CV.C(0,new A.a4(0,A.aT(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d0(C.bc,x,x,A.pX(C.lD,new B.bVd(d),"Voltar"),x),C.R,D.caO,C.aA,A.e5(C.bi,this.d,C.r,C.bl,8,8),C.aA],y.p)
C.e.p(v,this.e)
return A.cP(x,C.by,A.bB(!0,A.B5(A.d6(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.Pj.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.bh(w,!0,w,A.hl(!1,C.aN,!0,w,A.eY(!1,w,!0,A.aK(new A.S(C.bR,A.O(A.a([A.b9(x.d,u,w,w,16),C.bg,A.h(x.c,w,w,w,w,A.aH(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.u,C.h,C.J,0,w),w),38,w),C.ab,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ab,w,w,C.cW),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.aee.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x)}}
B.ac6.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aH,x,x)}}
B.ahr.prototype={
u(d){var x=null
return new A.S(C.pV,A.x(A.a([D.c7W,new A.ak(A.cK(C.t1,x,x,this.c,x,x),x)],y.p),C.u,C.h,C.l),x)}}
B.aj2.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u))
t=A.a([A.a5(A.x(s,C.G,C.h,C.l),1),C.ae],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cz:C.dV
w=A.W(999)
t.push(A.w(u,A.h(s,u,u,u,u,A.aH(u,u,r?C.cS:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.J(x,u,u,w,u,u,C.x),u,u,u,C.dp,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u))
return new A.S(C.ck,A.O(t,C.u,C.h,C.l,0,u),u)}}
B.aiO.prototype={
u(d){var x=null,w=this.d,v=w?C.cz:C.dV,u=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?C.cS:C.co,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.J(v,x,x,u,x,x,C.x),x,x,x,C.dp,x,x,x)}}
B.aGj.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.d3[A.fp(l)-1]+", "+A.aD(l)+" "+C.be[A.aw(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.p(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a_(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.X("Entrou \xe0s "+B.ddB(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.ddB(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSp
else if(x)k=D.bRr
else k=m.f?D.bQU:D.bS0
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n)],k)
if(u.length!==0)x.push(new A.S(L.MU,A.h(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.ck,A.O(A.a([A.a5(A.x(x,C.G,C.h,C.l),1),C.ae,new B.aiO(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abw.prototype={
P(){return new B.abx(new A.ad(Date.now(),0,!1),C.lq)}}
B.abx.prototype={
ac(){var x=this
x.ao()
$.az.b3$.push(x)
x.km()
x.as=A.rs(C.ht,new B.bHf(x))},
m(){var x,w=this
$.az.i9(w)
x=w.Q
if(x!=null)x.aE(0)
x=w.as
if(x!=null)x.aE(0)
w.a6()},
nh(d){var x
if(d===C.et)this.km()
else if(d===C.mC){x=this.Q
if(x!=null)x.aE(0)}},
km(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aE(0)
x=3
return A.d(A.ale(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.bHd(u,t))
s=t==null?null:t.b
if(s==null)s=C.jC
u.Q=A.db(s,u.gD7())
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
if(k)q=A.awG(C.t,A.jV("/q/"+l.a),C.y9,C.ya,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXu:A.bM(A.x(A.a([C.Ph,C.aB,D.ceV,new A.ak(A.cK(C.t1,n,n,o.gD7(),n,n),n)],y.p),C.u,C.h,C.J),n,n)
p=y.p
s=A.a([A.w(n,A.aK(q,186,186),C.r,n,n,new A.J(C.t,n,r,s,n,n,C.x),n,n,n,C.cU,n,n,214)],p)
if(k){k=A.W(2)
C.e.p(s,A.a([C.ad,A.w(C.bc,A.arg(C.K,A.w(n,n,C.r,n,n,new A.J(C.u3,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.J(C.fa,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aB,A.bh(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.ch(k,32,r,!1,!0,n),C.ae,new A.dg(1,C.bb,A.x(A.a([A.h(w,n,n,n,n,C.a9,n,n),D.cgQ],p),C.G,C.h,C.l),n)],p),C.u,C.bQ,C.l,0,n))
return A.w(n,A.x(s,C.u,C.h,C.l),C.r,n,n,new A.J(C.t,n,t,x,n,n,C.x),n,n,n,C.cU,n,n,n)}}
B.aSL.prototype={}
B.aT6.prototype={}
B.aTb.prototype={}
B.UX.prototype={
P(){return new B.agw(B.dum(D.aqo,D.brU),null,null)}}
B.agw.prototype={
gKi(){var x,w=this,v=w.e
if(v===$){x=A.cE(null,E.MG,null,null,w)
w.e!==$&&A.b_()
w.e=x
v=x}return v},
ac(){this.ao()
$.az.b3$.push(this)},
bV(){var x,w,v=this
v.dC()
x=v.c
x.toString
if(A.aT(x,null,y.w).w.ax)v.gKi().cZ(0)
else{x=v.gKi()
w=x.r
if(!(w!=null&&w.a!=null))x.aC1(0,!0)}},
nh(d){if(this.f)return
if(d===C.et)this.d.jZ(0)
else if(d===C.mC)this.d.cZ(0)},
m(){var x=this
$.az.i9(x)
x.gKi().m()
x.d.m()
x.aOZ()},
DL(d){return this.b83(d)},
b83(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DL=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dMF(t)
if(p==null){s=u.c.O(y.q).f
s.XG()
s.a1(D.bYR)
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
return A.d(A.ae(r).ag(m,null,y.X),$async$DL)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.jZ(0),$async$DL)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DL,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.hY(A.W(16),A.aK(new A.bA(C.aw,w,C.e_,C.y,A.a([C.jx,new B.a4X(t,x.gb82(),new B.crj(),w),A.bM(A.aK(new A.bA(C.aw,w,C.aD,C.y,A.a([D.bPx,A.eW(x.gKi(),new B.crk(x,u),w)],s),w),u,u),w,w),A.c8(16,A.bM(A.w(w,D.cfg,C.r,w,w,new A.J(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dp,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bf)],s)
if(x.a.d)s.push(new A.kf(t,new B.crl(x),w,w,y.n))
return A.x(s,C.E,C.h,C.l)}}
B.Xj.prototype={
u(d){return D.ap4}}
B.aEL.prototype={
b0(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.bd()
m.r=C.t.gv(0)
m.b=C.bN
m.c=4
m.d=C.h9
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cB(n,C.aP,o,o,A.a([],v))
u.aB(new A.f_(2,44))
u.aB(new A.cS(2,16))
u.Aj(D.bJ9,D.yb)
u.aB(new A.cS(44,2))
d.dP(u,m)
u=new A.cB(n,C.aP,o,o,A.a([],v))
t=x-44
u.aB(new A.f_(t,2))
s=x-16
u.aB(new A.cS(s,2))
r=x-2
u.Aj(new A.K(r,16),D.yb)
u.aB(new A.cS(r,44))
d.dP(u,m)
u=new A.cB(n,C.aP,o,o,A.a([],v))
q=w-44
u.aB(new A.f_(r,q))
p=w-16
u.aB(new A.cS(r,p))
r=w-2
u.Aj(new A.K(s,r),D.yb)
u.aB(new A.cS(t,r))
d.dP(u,m)
v=new A.cB(n,C.aP,o,o,A.a([],v))
v.aB(new A.f_(44,r))
v.aB(new A.cS(16,r))
v.Aj(new A.K(2,p),D.yb)
v.aB(new A.cS(2,q))
d.dP(v,m)},
dV(d){return!1}}
B.aTf.prototype={}
B.akm.prototype={
m(){var x=this,w=x.bE$
if(w!=null)w.a3(0,x.gfS())
x.bE$=null
x.a6()},
bS(){this.cr()
this.cP()
this.fT()}}
B.apH.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4X.prototype={
P(){return new B.aJj()}}
B.aJj.prototype={
b71(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.kf(x,new B.c9D(this),null,null,y.n)},
XP(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XP=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hf(t,A.u(t).i("hf<1>")).Y1(s.d,!1,B.dMi())
x=2
return A.d(u.jZ(0),$async$XP)
case 2:return A.l(null,w)}})
return A.m($async$XP,w)},
My(){var x=0,w=A.n(y.H),v=this,u
var $async$My=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aE(0)
x=2
return A.d(y.x.b(u)?u:A.ea(u,y.H),$async$My)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.cZ(0),$async$My)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$My,w)},
ac(){var x,w=this
w.ao()
x=w.a.c
w.d!==$&&A.bw()
w.d=x
w.XP()},
m(){this.a6()
this.My()},
nh(d){var x,w=this.d
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
B.aT4.prototype={}
B.a5_.prototype={
bhq(){var x=this
x.CW=$.I3().gav8().Y1(new B.bhW(x),!1,new B.bhX(x))
x.cx=$.I3().gaCA().li(new B.bhY(x))
x.cy=$.I3().gaDD().li(new B.bhZ(x))},
b7i(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aE(0)
w=x.cx
if(w!=null)w.aE(0)
w=x.cy
if(w!=null)w.aE(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bq3(!1,w.r===C.jh?C.jh:C.ab0))
return!0},
jZ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$jZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xP(C.xD,A.xO(null,null,C.xD.geS(0))))
if(s.a.e){x=1
break}r=C.Bf
q=new B.bB2(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bhq()
x=7
return A.d($.I3().lt(0,q),$async$jZ)
case 7:p=f
if(!s.db)s.sv(0,s.a.bqp(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tD){o=m
if(!s.db)s.sv(0,s.a.bqr(C.Bf,o,!0,!1,C.aR,C.jh,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$jZ,w)},
cZ(d){var x=0,w=A.n(y.H),v=this
var $async$cZ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b7i()?2:3
break
case 2:x=4
return A.d($.I3().cZ(0),$async$cZ)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cZ,w)},
tI(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.am(A.xP(C.a1a,A.xO(null,null,C.a1a.geS(0))))
if(u.db)A.am(A.xP(C.xD,A.xO(null,null,C.xD.geS(0))))
if(!t.e){x=1
break}if(t.r===C.jh){x=1
break}x=3
return A.d($.I3().tI(),$async$tI)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tI,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.h9()
x=3
return A.d($.I3().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xQ.prototype={
M7(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xQ(w,v,f,u,t,s,r,k==null?x.w:k)},
bq3(d,e){var x=null
return this.M7(x,x,x,x,d,x,e,x)},
bqp(d,e,f,g,h,i){return this.M7(d,e,null,f,g,h,i,null)},
bqr(d,e,f,g,h,i,j){return this.M7(null,d,e,f,g,h,i,j)},
bpP(d){var x=null
return this.M7(x,x,x,x,x,x,x,d)},
bpK(d){var x=null
return this.M7(x,x,x,x,x,x,d,x)}}
B.ayp.prototype={
u(d){var x=null,w=A.a([D.bKs],y.p)
w.push(A.h(C.k2.geS(0),x,x,x,x,C.a9O,x,x))
return A.kQ(A.bM(A.x(w,C.u,C.h,C.J),x,x),C.ao,!0)}}
B.bB2.prototype={
ZF(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("al<1,v>")
x=A.U(new A.al(x,new B.bB3(),w),w.i("aY.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:C})","F<~>(mD)","Xj(N,tD,e?)","cg(N,xQ,e?)","e(N,xQ,e?)","~(M,c9)"])
B.cKV.prototype={
$1(d){return new I.Fx(K.y4,d,this.a)},
$S:1373}
B.cKS.prototype={
$1(d){return this.a.$0()},
$S:156}
B.cKT.prototype={
$1(d){return this.a.$0()},
$S:156}
B.cKU.prototype={
$1(d){return this.a.$0()},
$S:156}
B.b4X.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:118}
B.ca6.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aE(0)
x.w=A.db(C.ef,new B.ca5(x))},
$S:0}
B.ca5.prototype={
$0(){return this.a.D8(!0)},
$S:0}
B.ca0.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.ca3.prototype={
$0(){var x=this.a
return x.n(new B.ca2(x))},
$S:0}
B.ca2.prototype={
$0(){return this.a.d=!1},
$S:0}
B.ca4.prototype={
$0(){var x=this.a
return x.n(new B.ca1(x))},
$S:0}
B.ca1.prototype={
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
B.bVd.prototype={
$0(){return A.an(this.a,!1).iu()},
$S:0}
B.bHf.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.bHe())},
$S:62}
B.bHe.prototype={
$0(){},
$S:0}
B.bHd.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ad(w,0,!1).en(v)
u.z=v>3e7?x:C.lq}},
$S:0}
B.crj.prototype={
$3(d,e,f){return D.ckI},
$S:z+3}
B.crk.prototype={
$2(d,e){var x=null,w=this.a.gKi().x
w===$&&A.b()
return A.c8(x,A.w(x,x,C.r,C.u3,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:263}
B.crl.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jh)return C.an
x=t===C.ab1
t=x?C.cz:C.dV
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.MS,A.bh(u,!0,u,A.eY(!1,u,!0,A.w(u,A.O(A.a([D.azR,A.w(u,A.h(v,u,u,u,u,A.aH(u,u,x?C.cS:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.J(t,u,u,w,u,u,C.x),u,u,u,C.dp,u,u,u)],y.p),C.u,C.h,C.l,0,u),C.r,u,G.hZ,D.afP,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbBJ(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c9D.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.ap5}x=e.c
if(x!=null){w=new B.ayp(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kw(new B.c9C(this.a,e))},
$S:z+5}
B.c9C.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b71(u,e)
v.a.toString
x=u.f
v=A.ai(1/0,e.a,e.b)
u=A.ai(1/0,e.c,e.d)
w=A.uZ(A.Gk(A.DW(C.K,A.aK($.I3().avd(),x.b,x.a),C.r,C.bz),new A.af(v,u)),C.y,null)
return w},
$S:116}
B.bhW.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1374}
B.bhX.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xc(d)},
$S:70}
B.bhY.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpK(d))},
$S:1375}
B.bhZ.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpP(d))},
$S:115}
B.bB3.prototype={
$1(d){return d.c},
$S:1376};(function aliases(){var x=B.akm.prototype
x.aOZ=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af1.prototype,"gD7",0,0,null,["$1$announce","$0"],["D8","km"],1,0,0)
var t
w(t=B.afG.prototype,"gD7","km",0)
w(t,"gaTj","Qm",0)
w(B.abx.prototype,"gD7","km",0)
v(B.agw.prototype,"gb82","DL",2)
u(B,"dMi","dup",6)
w(t=B.a5_.prototype,"gbBJ","tI",0)
w(t,"geE","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.M,[B.avw,B.U0,B.xQ,B.bB2])
v(A.bu,[B.cKV,B.cKS,B.cKT,B.cKU,B.b4X,B.bHf,B.crj,B.crl,B.c9D,B.bhW,B.bhX,B.bhY,B.bhZ,B.bB3])
u(B.Ju,A.ew)
v(A.G,[B.af0,B.afF,B.UX,B.a4X])
v(A.Z,[B.aT6,B.aTb,B.aTf,B.aT4])
u(B.af1,B.aT6)
v(A.bL,[B.ca6,B.ca5,B.ca0,B.ca3,B.ca2,B.ca4,B.ca1,B.cgg,B.cgh,B.bVd,B.bHe,B.bHd])
u(B.afG,B.aTb)
v(A.L,[B.adn,B.Pj,B.aee,B.ac6,B.ahr,B.aj2,B.aiO,B.aGj,B.Xj,B.ayp])
u(B.abw,A.dC)
u(B.aSL,A.dx)
u(B.abx,B.aSL)
u(B.akm,B.aTf)
u(B.agw,B.akm)
v(A.cL,[B.crk,B.c9C])
u(B.aEL,A.qt)
u(B.apH,A.f7)
u(B.aJj,B.aT4)
u(B.a5_,A.cZ)
x(B.aSL,A.em)
x(B.aT6,A.em)
x(B.aTb,A.em)
x(B.aTf,A.em)
w(B.akm,A.i1)
x(B.aT4,A.em)})()
A.br(b.typeUniverse,JSON.parse('{"af0":{"G":[],"e":[],"f":[]},"afF":{"G":[],"e":[],"f":[]},"abw":{"G":[],"e":[],"f":[]},"Ju":{"G":[],"e":[],"f":[]},"af1":{"Z":["af0"],"em":[]},"afG":{"Z":["afF"],"em":[]},"adn":{"L":[],"e":[],"f":[]},"Pj":{"L":[],"e":[],"f":[]},"aee":{"L":[],"e":[],"f":[]},"ac6":{"L":[],"e":[],"f":[]},"ahr":{"L":[],"e":[],"f":[]},"aj2":{"L":[],"e":[],"f":[]},"aiO":{"L":[],"e":[],"f":[]},"aGj":{"L":[],"e":[],"f":[]},"abx":{"Z":["abw"],"em":[]},"UX":{"G":[],"e":[],"f":[]},"Xj":{"L":[],"e":[],"f":[]},"agw":{"Z":["UX"],"em":[]},"aEL":{"aW":[]},"a4X":{"G":[],"e":[],"f":[]},"aJj":{"Z":["a4X"],"em":[]},"a5_":{"cZ":["xQ"],"aW":[]},"ayp":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.A
return{D:x("cI"),x:x("F<~>"),k:x("r<kP>"),G:x("r<U0>"),v:x("r<fH>"),S:x("r<+at,partner(ad,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a3<@,@>"),w:x("dw"),Y:x("U0"),N:x("c"),n:x("kf<xQ>"),J:x("ls<mD>"),q:x("dj"),z:x("@"),r:x("t<U0>?"),g:x("t<@>?"),X:x("M?"),t:x("avw?"),E:x("rw?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.af5=new A.dN(C.tB,C.aa,C.tB,C.aa)
D.afP=new A.J(null,null,D.af5,null,null,null,C.x)
D.cpa=new B.aiO("S\xf3 funciona na tua conta",!0,null)
D.ajh=new A.f8(C.K,null,null,D.cpa,null)
D.c4A=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.caE=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4A,C.a4,null,null,null,null,null,null)
D.bKJ=new A.S(C.hy,D.caE,null)
D.ajm=new A.f8(C.K,null,null,D.bKJ,null)
D.ap4=new A.ph(C.co,!0,D.ajm,null)
D.ap5=new A.ph(C.ao,!0,null,null)
D.aqo=new B.apH(0,0,"noDuplicates")
D.aqp=new B.apH(1,1,"normal")
D.pM=new A.kt(0.5,0.5,null,null,C.fa,null)
D.cgd=new A.D("Lanterna",null,C.cc,null,null,null,null,null,null,null)
D.azR=new A.bK(1,C.at,D.cgd,null)
D.cmm=new B.aee("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bQa=new B.UX(420,!0,null,null)
D.bf1=x([D.cmm,C.R,D.bQa],y.p)
D.brU=x([C.tw],y.k)
D.cpP=x([],y.k)
D.byT=x([],y.G)
D.bJ9=new A.K(16,2)
D.aCe=new A.b0(57911,"MaterialIcons",null,!1)
D.aCJ=new A.b8(D.aCe,null,C.t,null,null,null)
D.bKs=new A.S(C.MP,D.aCJ,null)
D.ccK=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cc,null,null,null,null,null,null,null)
D.bKF=new A.S(C.pV,D.ccK,null)
D.ch6=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cc,null,null,null,null,null,null,null)
D.bL3=new A.S(C.fW,D.ch6,null)
D.cln=new B.aEL(null)
D.apY=new A.qs(D.cln,null,C.aR,null,null)
D.bPx=new A.eL(0,0,0,0,null,null,D.apY,null)
D.yb=new A.b5(14,14)
D.bQU=new A.X("Bilhete",!1)
D.bRr=new A.X("Organizas",!1)
D.bS0=new A.X("Por entrar",!1)
D.bSp=new A.X("Sem bilhete pago",!1)
D.bXu=new A.kB(186,186,8,C.fs,0,null)
D.c8W=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bYR=new A.bF(D.c8W,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c7W=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cc,C.a4,null,null,null,null,null,null)
D.caO=new A.D("Entrada",null,C.hS,null,null,null,null,null,null,null)
D.ceV=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.cfg=new A.D("\xc0 procura de um QR\u2026",null,C.hR,null,null,null,null,null,null,null)
D.cgQ=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.ckB=new B.abw(null)
D.ckI=new B.Xj(null)
D.cl8=new B.ac6("D\xc1 ENTRADA EM",null)
D.cl9=new B.ac6("HOJE",null)
D.cmn=new B.aee("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cns=new B.af0(null)
D.cnK=new B.afF(null)})()};
(a=>{a["MIe0BwFmhn91596/0umbnS2ua7g="]=a.current})($__dart_deferred_initializers__);