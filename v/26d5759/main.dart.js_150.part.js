((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dN0(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fZ(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMx(w,x)},
cKg(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cKg=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.ji("partner_today",y.z),$async$cKg)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.h(s,"bookings"))
o=J.ao(o==null?C.aj:o)
while(o.q()){q=o.gE(o)
if(p.b(q)){n=J.h(q,"event")
n=A.p(n==null?"Evento":n)
m=A.A(J.h(q,"booking_number"))
l=A.aD(J.h(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aD(J.h(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.ba(r,new A.aMY([k,n,m,l]))}}p=A.aD(J.h(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aD(J.h(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avr(r,p,o)
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
return A.m($async$cKg,w)},
avr:function avr(d,e,f){this.a=d
this.b=e
this.c=f},
duX(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
g=A.p(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d3(A.p(x==null?"":x))
w=A.A(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.A(J.h(i,"status")):k
if(s){s=A.aD(J.h(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aD(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d3(A.p(p==null?"":p))
p=p==null?k:p.dI()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ao(j==null?C.aj:j)
while(j.q()){n=j.gE(j)
if(t.b(n)&&A.d3(A.p(J.h(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.p(l==null?"Parceiro":l)
o.push(new A.aMj(A.dc(A.p(m.h(n,"at"))).dI(),l))}}return new B.TY(h,g,x,w,v,u,r,s,q,p,o)},
cKe(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cKe=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.ji("my_entries",y.z),$async$cKe)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.ba(r,B.duX(q))}v=r
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
return A.m($async$cKe,w)},
dMk(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbu().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cLm(w)
u=u.ch
u===$&&A.b()
return u.LT(0,"entries-"+w,C.yh).NM(new B.cLj(d),C.GG,x.$1("user_id"),v,"event_checkins").NM(new B.cLk(d),C.GG,x.$1("user_id"),v,"booking_arrivals").NM(new B.cLl(d),C.GH,x.$1("buyer_id"),v,"event_tickets").PA(0)},
TY:function TY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cLm:function cLm(d){this.a=d},
cLj:function cLj(d){this.a=d},
cLk:function cLk(d){this.a=d},
cLl:function cLl(d){this.a=d},
drt(){return new B.Jr(null)},
ddW(d){return C.f.aT(C.j.k(A.i_(d)),2,"0")+":"+C.f.aT(C.j.k(A.hQ(d)),2,"0")},
Jr:function Jr(d){this.a=d},
b4O:function b4O(){},
aeY:function aeY(d){this.a=d},
aeZ:function aeZ(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
caB:function caB(d){this.a=d},
caA:function caA(d){this.a=d},
cav:function cav(d,e){this.a=d
this.b=e},
cay:function cay(d){this.a=d},
cax:function cax(d){this.a=d},
caz:function caz(d){this.a=d},
caw:function caw(d){this.a=d},
afA:function afA(d){this.a=d},
afB:function afB(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgK:function cgK(d,e){this.a=d
this.b=e},
cgL:function cgL(){},
adl:function adl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVM:function bVM(d){this.a=d},
Ph:function Ph(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aeb:function aeb(d,e){this.c=d
this.a=e},
ac4:function ac4(d,e){this.c=d
this.a=e},
ahl:function ahl(d,e){this.c=d
this.a=e},
aiY:function aiY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiI:function aiI(d,e,f){this.c=d
this.d=e
this.a=f},
aGb:function aGb(d,e){this.c=d
this.a=e},
abu:function abu(d){this.a=d},
abv:function abv(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bHO:function bHO(d){this.a=d},
bHN:function bHN(){},
bHM:function bHM(d,e){this.a=d
this.b=e},
aSD:function aSD(){},
aSZ:function aSZ(){},
aT3:function aT3(){},
UU:function UU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agq:function agq(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ed$=e
_.bE$=f
_.c=_.a=null},
crN:function crN(){},
crO:function crO(d,e){this.a=d
this.b=e},
crP:function crP(d){this.a=d},
Xg:function Xg(d){this.a=d},
aED:function aED(d){this.a=d},
aT7:function aT7(){},
akh:function akh(){},
apC:function apC(d,e,f){this.c=d
this.a=e
this.b=f},
duN(d,e){},
a4V:function a4V(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJb:function aJb(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
ca7:function ca7(d){this.a=d},
ca6:function ca6(d,e){this.a=d
this.b=e},
aSX:function aSX(){},
duK(d,e){var x=null,w=d===D.aqk?250:0
return new B.a4Y(d,w,e,new A.lq(x,x,y.J),new B.xO(x,C.Bd,x,!1,!1,C.aR,C.jh,1),$.aa())},
a4Y:function a4Y(d,e,f,g,h,i){var _=this
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
bhN:function bhN(d){this.a=d},
bhO:function bhO(d){this.a=d},
bhP:function bhP(d){this.a=d},
bhQ:function bhQ(d){this.a=d},
xO:function xO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayi:function ayi(d){this.a=d},
bAV:function bAV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAW:function bAW(){}},D,F,G,H,I,K,L,M
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
B.avr.prototype={}
B.TY.prototype={}
B.Jr.prototype={
b9(d,e){var x=y.E
return e.G(A.cB($.b7(),new B.b4O(),y.D,x),x)===C.dQ?D.cnr:D.cnb}}
B.aeY.prototype={
R(){return new B.aeZ()}}
B.aeZ.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.kn()
x.r=B.dMk(new B.caB(x))},
m(){var x,w,v=this
$.az.ia(v)
x=v.w
if(x!=null)x.aH(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y9(x)}v.a6()},
nj(d){if(d===C.es)this.kn()},
D9(d){return this.b6k(d)},
kn(){return this.D9(!1)},
b6k(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$D9=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.D(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.byK:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cKe(),$async$D9)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.cav(u,s))
if(!d||s==null){x=1
break}for(o=J.ao(s);o.q();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.i(q,null,null,null,null,null,null,null)
p.a0(new A.bF(o,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$D9,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gD8(),q=u.d,p=y.p
q=A.a([new B.Ph("QR code",C.qf,!q,new B.cay(u),t),new B.Ph("Scannear",C.vk,q,new B.caz(u),t)],p)
if(u.d)p=D.beU
else{x=A.a([D.ckj,C.R,D.aje,C.bP,D.ckR,C.ar],p)
w=s==null
if(w&&!u.f)x.push(M.a8o)
else if(w)x.push(new B.ahl(r,t))
else{w=J.a7(s)
if(w.gY(s))x.push(D.bKx)
else{v=A.a([],p)
for(w=w.gX(s);w.q();)C.e.n(v,A.a([D.pN,new B.aGb(w.gE(w),t)],p))
v.push(D.pN)
C.e.n(x,v)}}p=x}return new B.adl(r,q,p,t)}}
B.afA.prototype={
R(){return new B.afB()}}
B.afB.prototype={
ad(){this.aq()
$.az.b4$.push(this)
this.kn()},
m(){$.az.ia(this)
this.a6()},
nj(d){if(d===C.es)this.kn()},
kn(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cKg(),$async$kn)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cgK(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kn,w)},
Qn(){var x=0,w=A.n(y.H),v=this,u
var $async$Qn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ae(u).aj("/cobrar",null,y.X),$async$Qn)
case 2:if(v.c!=null)v.kn()
return A.l(null,w)}})
return A.m($async$Qn,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gD8(),k=y.p,j=A.a([new B.Ph("Scannear",C.vk,!0,new B.cgL(),n),new B.Ph("Cobrar",C.nJ,!1,o.gaTn(),n)],k),i=A.a([D.cm6,C.R,new B.UU(290,!1,l,n),C.bP,D.ckS,C.ar],k),h=m==null
if(h&&!o.e)i.push(H.a8l)
else if(h)i.push(new B.ahl(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKW)
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
t=p}C.e.n(h,A.a([D.pN,new B.aiY(s,r,t,q>0,n,n)],k))}h.push(D.pN)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aiY("Cobrado hoje",k,n,!1,F.cJB(m.b),n))
h.push(D.pN)
C.e.n(i,h)}return new B.adl(l,j,i,n)}}
B.adl.prototype={
u(d){var x=null,w=C.CS.C(0,new A.a4(0,A.aT(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d0(C.bc,x,x,A.pW(C.lC,new B.bVM(d),"Voltar"),x),C.R,D.caB,C.aA,A.e5(C.bh,this.d,C.r,C.bl,8,8),C.aA],y.p)
C.e.n(v,this.e)
return A.cP(x,C.by,A.bB(!0,A.B5(A.d6(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.Ph.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.bj(w,!0,w,A.hl(!1,C.aN,!0,w,A.eZ(!1,w,!0,A.aK(new A.S(C.bY,A.O(A.a([A.b9(x.d,u,w,w,16),C.bf,A.i(x.c,w,w,w,w,A.aH(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.u,C.h,C.J,0,w),w),38,w),C.ab,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ab,w,w,C.cW),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.aeb.prototype={
u(d){var x=null
return A.i(this.c,x,x,x,x,C.L,x,x)}}
B.ac4.prototype={
u(d){var x=null
return A.i(this.c,x,x,x,x,C.aH,x,x)}}
B.ahl.prototype={
u(d){var x=null
return new A.S(C.pW,A.y(A.a([D.c7K,new A.al(A.cK(C.t3,x,x,this.c,x,x),x)],y.p),C.u,C.h,C.l),x)}}
B.aiY.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.i(v.c,u,u,u,u,C.a9,u,u)],t),r=v.d
if(r.length!==0)s.push(A.i(r,u,u,u,u,C.L,u,u))
t=A.a([A.a5(A.y(s,C.G,C.h,C.l),1),C.ae],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cz:C.dU
w=A.W(999)
t.push(A.x(u,A.i(s,u,u,u,u,A.aH(u,u,r?C.cS:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.J(x,u,u,w,u,u,C.x),u,u,u,C.dm,u,u,u))}s=v.r
if(s!=null)t.push(A.i(s,u,u,u,u,C.a9,u,u))
return new A.S(C.ck,A.O(t,C.u,C.h,C.l,0,u),u)}}
B.aiI.prototype={
u(d){var x=null,w=this.d,v=w?C.cz:C.dU,u=A.W(999)
return A.x(x,A.i(this.c,x,x,x,x,A.aH(x,x,w?C.cS:C.co,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.J(v,x,x,u,x,x,C.x),x,x,x,C.dm,x,x,x)}}
B.aGb.prototype={
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
if(k!=null)s=new A.X("Entrou \xe0s "+B.ddW(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.ddW(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSh
else if(x)k=D.bRj
else k=m.f?D.bQM:D.bRT
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.i(m.b,n,n,n,n,C.a9,n,n)],k)
if(u.length!==0)x.push(new A.S(L.MT,A.i(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.ck,A.O(A.a([A.a5(A.y(x,C.G,C.h,C.l),1),C.ae,new B.aiI(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abu.prototype={
R(){return new B.abv(new A.ab(Date.now(),0,!1),C.lp)}}
B.abv.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.kn()
x.as=A.rr(C.hs,new B.bHO(x))},
m(){var x,w=this
$.az.ia(w)
x=w.Q
if(x!=null)x.aH(0)
x=w.as
if(x!=null)x.aH(0)
w.a6()},
nj(d){var x
if(d===C.es)this.kn()
else if(d===C.mB){x=this.Q
if(x!=null)x.aH(0)}},
kn(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aH(0)
x=3
return A.d(A.aUX(),$async$kn)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bHM(u,t))
s=t==null?null:t.b
if(s==null)s=C.kx
u.Q=A.df(s,u.gD8())
case 1:return A.l(v,w)}})
return A.m($async$kn,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().G($.b7(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.B(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.B(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cg(new A.ab(Date.now(),0,!1)).a
v=x<0?0:C.k.eE(C.j.aO(x,1000)/1000)
u=C.k.af(C.j.aO(x,1000)/C.j.aO(o.z.a,1000),0,1)
x=A.W(16)
t=A.bG(C.fa,0.5)
s=A.W(16)
r=A.bG(C.fa,0.5)
k=!k
if(k)q=A.bpV(C.t,A.kj("/q/"+l.a),C.GJ,C.GK,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXm:A.bO(A.y(A.a([C.aDt,C.aC,D.ceG,new A.al(A.cK(C.t3,n,n,o.gD8(),n,n),n)],y.p),C.u,C.h,C.J),n,n)
p=y.p
s=A.a([A.x(n,A.aK(q,186,186),C.r,n,n,new A.J(C.t,n,r,s,n,n,C.x),n,n,n,C.cU,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ad,A.x(C.bc,A.arb(C.K,A.x(n,n,C.r,n,n,new A.J(C.u5,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.J(C.fa,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aC,A.bj(n,n,n,A.i("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.ch(k,32,r,!1,!0,n),C.ae,new A.di(1,C.bb,A.y(A.a([A.i(w,n,n,n,n,C.a9,n,n),D.cgz],p),C.G,C.h,C.l),n)],p),C.u,C.bQ,C.l,0,n))
return A.x(n,A.y(s,C.u,C.h,C.l),C.r,n,n,new A.J(C.t,n,t,x,n,n,C.x),n,n,n,C.cU,n,n,n)}}
B.aSD.prototype={}
B.aSZ.prototype={}
B.aT3.prototype={}
B.UU.prototype={
R(){return new B.agq(B.duK(D.aqj,D.brL),null,null)}}
B.agq.prototype={
gKj(){var x,w=this,v=w.e
if(v===$){x=A.cD(null,E.MF,null,null,w)
w.e!==$&&A.b_()
w.e=x
v=x}return v},
ad(){this.aq()
$.az.b4$.push(this)},
bV(){var x,w,v=this
v.dD()
x=v.c
x.toString
if(A.aT(x,null,y.w).w.ax)v.gKj().cZ(0)
else{x=v.gKj()
w=x.r
if(!(w!=null&&w.a!=null))x.aC5(0,!0)}},
nj(d){if(this.f)return
if(d===C.es)this.d.k_(0)
else if(d===C.mB)this.d.cZ(0)},
m(){var x=this
$.az.ia(x)
x.gKj().m()
x.d.m()
x.aP2()},
DM(d){return this.b86(d)},
b86(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DM=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dN0(t)
if(p==null){s=u.c.O(y.q).f
s.XJ()
s.a0(D.bYI)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.cZ(0),$async$DM)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ae(r).aj(m,null,y.X),$async$DM)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.k_(0),$async$DM)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DM,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.hY(A.W(16),A.aK(new A.bA(C.aw,w,C.e4,C.y,A.a([C.jx,new B.a4V(t,x.gb85(),new B.crN(),w),A.bO(A.aK(new A.bA(C.aw,w,C.aD,C.y,A.a([D.bPp,A.eX(x.gKj(),new B.crO(x,u),w)],s),w),u,u),w,w),A.cc(16,A.bO(A.x(w,D.cf1,C.r,w,w,new A.J(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dm,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.be)],s)
if(x.a.d)s.push(new A.kd(t,new B.crP(x),w,w,y.n))
return A.y(s,C.E,C.h,C.l)}}
B.Xg.prototype={
u(d){return D.ap0}}
B.aED.prototype={
b0(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.be()
m.r=C.t.gv(0)
m.b=C.bN
m.c=4
m.d=C.h8
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cA(n,C.aP,o,o,A.a([],v))
u.aB(new A.f0(2,44))
u.aB(new A.cS(2,16))
u.Al(D.bJ1,D.y9)
u.aB(new A.cS(44,2))
d.dP(u,m)
u=new A.cA(n,C.aP,o,o,A.a([],v))
t=x-44
u.aB(new A.f0(t,2))
s=x-16
u.aB(new A.cS(s,2))
r=x-2
u.Al(new A.K(r,16),D.y9)
u.aB(new A.cS(r,44))
d.dP(u,m)
u=new A.cA(n,C.aP,o,o,A.a([],v))
q=w-44
u.aB(new A.f0(r,q))
p=w-16
u.aB(new A.cS(r,p))
r=w-2
u.Al(new A.K(s,r),D.y9)
u.aB(new A.cS(t,r))
d.dP(u,m)
v=new A.cA(n,C.aP,o,o,A.a([],v))
v.aB(new A.f0(44,r))
v.aB(new A.cS(16,r))
v.Al(new A.K(2,p),D.y9)
v.aB(new A.cS(2,q))
d.dP(v,m)},
dV(d){return!1}}
B.aT7.prototype={}
B.akh.prototype={
m(){var x=this,w=x.bE$
if(w!=null)w.a3(0,x.gfS())
x.bE$=null
x.a6()},
bS(){this.cv()
this.cP()
this.fT()}}
B.apC.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4V.prototype={
R(){return new B.aJb()}}
B.aJb.prototype={
b74(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.kd(x,new B.ca7(this),null,null,y.n)},
XS(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XS=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hf(t,A.u(t).i("hf<1>")).Y4(s.d,!1,B.dME())
x=2
return A.d(u.k_(0),$async$XS)
case 2:return A.l(null,w)}})
return A.m($async$XS,w)},
Mz(){var x=0,w=A.n(y.H),v=this,u
var $async$Mz=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aH(0)
x=2
return A.d(y.x.b(u)?u:A.ea(u,y.H),$async$Mz)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.cZ(0),$async$Mz)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$Mz,w)},
ad(){var x,w=this
w.aq()
x=w.a.c
w.d!==$&&A.bw()
w.d=x
w.XS()},
m(){this.a6()
this.Mz()},
nj(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xE}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.k_(0)
break
case 2:w.cZ(0)
break}}}
B.aSX.prototype={}
B.a4Y.prototype={
bht(){var x=this
x.CW=$.I_().gavc().Y4(new B.bhN(x),!1,new B.bhO(x))
x.cx=$.I_().gaCE().lj(new B.bhP(x))
x.cy=$.I_().gaDH().lj(new B.bhQ(x))},
b7l(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aH(0)
w=x.cx
if(w!=null)w.aH(0)
w=x.cy
if(w!=null)w.aH(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bq6(!1,w.r===C.jh?C.jh:C.ab_))
return!0},
k_(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$k_=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xN(C.xD,A.xM(null,null,C.xD.geS(0))))
if(s.a.e){x=1
break}r=C.Bd
q=new B.bAV(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bht()
x=7
return A.d($.I_().lu(0,q),$async$k_)
case 7:p=f
if(!s.db)s.sv(0,s.a.bqs(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tB){o=m
if(!s.db)s.sv(0,s.a.bqu(C.Bd,o,!0,!1,C.aR,C.jh,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$k_,w)},
cZ(d){var x=0,w=A.n(y.H),v=this
var $async$cZ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b7l()?2:3
break
case 2:x=4
return A.d($.I_().cZ(0),$async$cZ)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cZ,w)},
tJ(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tJ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.an(A.xN(C.a18,A.xM(null,null,C.a18.geS(0))))
if(u.db)A.an(A.xN(C.xD,A.xM(null,null,C.xD.geS(0))))
if(!t.e){x=1
break}if(t.r===C.jh){x=1
break}x=3
return A.d($.I_().tJ(),$async$tJ)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tJ,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.h9()
x=3
return A.d($.I_().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xO.prototype={
M8(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xO(w,v,f,u,t,s,r,k==null?x.w:k)},
bq6(d,e){var x=null
return this.M8(x,x,x,x,d,x,e,x)},
bqs(d,e,f,g,h,i){return this.M8(d,e,null,f,g,h,i,null)},
bqu(d,e,f,g,h,i,j){return this.M8(null,d,e,f,g,h,i,j)},
bpS(d){var x=null
return this.M8(x,x,x,x,x,x,x,d)},
bpN(d){var x=null
return this.M8(x,x,x,x,x,x,d,x)}}
B.ayi.prototype={
u(d){var x=null,w=A.a([D.bKk],y.p)
w.push(A.i(C.k1.geS(0),x,x,x,x,C.a9M,x,x))
return A.kP(A.bO(A.y(w,C.u,C.h,C.J),x,x),C.ao,!0)}}
B.bAV.prototype={
ZH(){var x,w,v=this,u=A.D(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bAW(),w),w.i("aV.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:B})","F<~>(mB)","Xg(N,tB,e?)","cg(N,xO,e?)","e(N,xO,e?)","~(M,c8)"])
B.cLm.prototype={
$1(d){return new I.Ft(K.y4,d,this.a)},
$S:1378}
B.cLj.prototype={
$1(d){return this.a.$0()},
$S:158}
B.cLk.prototype={
$1(d){return this.a.$0()},
$S:158}
B.cLl.prototype={
$1(d){return this.a.$0()},
$S:158}
B.b4O.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:109}
B.caB.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aH(0)
x.w=A.df(C.ee,new B.caA(x))},
$S:0}
B.caA.prototype={
$0(){return this.a.D9(!0)},
$S:0}
B.cav.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.cay.prototype={
$0(){var x=this.a
return x.p(new B.cax(x))},
$S:0}
B.cax.prototype={
$0(){return this.a.d=!1},
$S:0}
B.caz.prototype={
$0(){var x=this.a
return x.p(new B.caw(x))},
$S:0}
B.caw.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cgK.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cgL.prototype={
$0(){},
$S:0}
B.bVM.prototype={
$0(){return A.am(this.a,!1).hA()},
$S:0}
B.bHO.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bHN())},
$S:56}
B.bHN.prototype={
$0(){},
$S:0}
B.bHM.prototype={
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
B.crN.prototype={
$3(d,e,f){return D.ckq},
$S:z+3}
B.crO.prototype={
$2(d,e){var x=null,w=this.a.gKj().x
w===$&&A.b()
return A.cc(x,A.x(x,x,C.r,C.u5,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:217}
B.crP.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jh)return C.an
x=t===C.ab0
t=x?C.cz:C.dU
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.MR,A.bj(u,!0,u,A.eZ(!1,u,!0,A.x(u,A.O(A.a([D.azJ,A.x(u,A.i(v,u,u,u,u,A.aH(u,u,x?C.cS:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.J(t,u,u,w,u,u,C.x),u,u,u,C.dm,u,u,u)],y.p),C.u,C.h,C.l,0,u),C.r,u,G.hZ,D.afM,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbBM(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.ca7.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.ap1}x=e.c
if(x!=null){w=new B.ayi(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kv(new B.ca6(this.a,e))},
$S:z+5}
B.ca6.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b74(u,e)
v.a.toString
x=u.f
v=A.aj(1/0,e.a,e.b)
u=A.aj(1/0,e.c,e.d)
w=A.uX(A.Gg(A.JK(C.K,A.aK($.I_().avi(),x.b,x.a),C.r,C.bD),new A.ag(v,u)),C.y,null)
return w},
$S:107}
B.bhN.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1379}
B.bhO.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xe(d)},
$S:71}
B.bhP.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpN(d))},
$S:1380}
B.bhQ.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpS(d))},
$S:124}
B.bAW.prototype={
$1(d){return d.c},
$S:1381};(function aliases(){var x=B.akh.prototype
x.aP2=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aeZ.prototype,"gD8",0,0,null,["$1$announce","$0"],["D9","kn"],1,0,0)
var t
w(t=B.afB.prototype,"gD8","kn",0)
w(t,"gaTn","Qn",0)
w(B.abv.prototype,"gD8","kn",0)
v(B.agq.prototype,"gb85","DM",2)
u(B,"dME","duN",6)
w(t=B.a4Y.prototype,"gbBM","tJ",0)
w(t,"geF","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.M,[B.avr,B.TY,B.xO,B.bAV])
v(A.bu,[B.cLm,B.cLj,B.cLk,B.cLl,B.b4O,B.bHO,B.crN,B.crP,B.ca7,B.bhN,B.bhO,B.bhP,B.bhQ,B.bAW])
u(B.Jr,A.ew)
v(A.G,[B.aeY,B.afA,B.UU,B.a4V])
v(A.a_,[B.aSZ,B.aT3,B.aT7,B.aSX])
u(B.aeZ,B.aSZ)
v(A.bL,[B.caB,B.caA,B.cav,B.cay,B.cax,B.caz,B.caw,B.cgK,B.cgL,B.bVM,B.bHN,B.bHM])
u(B.afB,B.aT3)
v(A.L,[B.adl,B.Ph,B.aeb,B.ac4,B.ahl,B.aiY,B.aiI,B.aGb,B.Xg,B.ayi])
u(B.abu,A.dC)
u(B.aSD,A.dw)
u(B.abv,B.aSD)
u(B.akh,B.aT7)
u(B.agq,B.akh)
v(A.cL,[B.crO,B.ca6])
u(B.aED,A.qs)
u(B.apC,A.f7)
u(B.aJb,B.aSX)
u(B.a4Y,A.cZ)
x(B.aSD,A.en)
x(B.aSZ,A.en)
x(B.aT3,A.en)
x(B.aT7,A.en)
w(B.akh,A.i1)
x(B.aSX,A.en)})()
A.br(b.typeUniverse,JSON.parse('{"aeY":{"G":[],"e":[],"f":[]},"afA":{"G":[],"e":[],"f":[]},"abu":{"G":[],"e":[],"f":[]},"Jr":{"G":[],"e":[],"f":[]},"aeZ":{"a_":["aeY"],"en":[]},"afB":{"a_":["afA"],"en":[]},"adl":{"L":[],"e":[],"f":[]},"Ph":{"L":[],"e":[],"f":[]},"aeb":{"L":[],"e":[],"f":[]},"ac4":{"L":[],"e":[],"f":[]},"ahl":{"L":[],"e":[],"f":[]},"aiY":{"L":[],"e":[],"f":[]},"aiI":{"L":[],"e":[],"f":[]},"aGb":{"L":[],"e":[],"f":[]},"abv":{"a_":["abu"],"en":[]},"UU":{"G":[],"e":[],"f":[]},"Xg":{"L":[],"e":[],"f":[]},"agq":{"a_":["UU"],"en":[]},"aED":{"aW":[]},"a4V":{"G":[],"e":[],"f":[]},"aJb":{"a_":["a4V"],"en":[]},"a4Y":{"cZ":["xO"],"aW":[]},"ayi":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.C
return{D:x("cI"),x:x("F<~>"),k:x("r<kO>"),G:x("r<TY>"),v:x("r<fG>"),S:x("r<+at,partner(ab,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a3<@,@>"),w:x("dv"),Y:x("TY"),N:x("c"),n:x("kd<xO>"),J:x("lq<mB>"),q:x("dl"),z:x("@"),r:x("t<TY>?"),g:x("t<@>?"),X:x("M?"),t:x("avr?"),E:x("rv?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.af3=new A.dN(C.tD,C.aa,C.tD,C.aa)
D.afM=new A.J(null,null,D.af3,null,null,null,C.x)
D.coS=new B.aiI("S\xf3 funciona na tua conta",!0,null)
D.aje=new A.f8(C.K,null,null,D.coS,null)
D.c4p=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.car=new A.E("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4p,C.a4,null,null,null,null,null,null)
D.bKB=new A.S(C.hx,D.car,null)
D.ajj=new A.f8(C.K,null,null,D.bKB,null)
D.ap0=new A.pi(C.co,!0,D.ajj,null)
D.ap1=new A.pi(C.ao,!0,null,null)
D.aqj=new B.apC(0,0,"noDuplicates")
D.aqk=new B.apC(1,1,"normal")
D.pN=new A.ks(0.5,0.5,null,null,C.fa,null)
D.cfZ=new A.E("Lanterna",null,C.cc,null,null,null,null,null,null,null)
D.azJ=new A.bK(1,C.at,D.cfZ,null)
D.cm5=new B.aeb("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bQ2=new B.UU(420,!0,null,null)
D.beU=x([D.cm5,C.R,D.bQ2],y.p)
D.brL=x([C.ty],y.k)
D.cpx=x([],y.k)
D.byK=x([],y.G)
D.bJ1=new A.K(16,2)
D.aC7=new A.b0(57911,"MaterialIcons",null,!1)
D.aCC=new A.b8(D.aC7,null,C.t,null,null,null)
D.bKk=new A.S(C.MO,D.aCC,null)
D.ccw=new A.E("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cc,null,null,null,null,null,null,null)
D.bKx=new A.S(C.pW,D.ccw,null)
D.cgQ=new A.E("Sem marca\xe7\xf5es para hoje.",null,C.cc,null,null,null,null,null,null,null)
D.bKW=new A.S(C.fW,D.cgQ,null)
D.cl6=new B.aED(null)
D.apU=new A.qr(D.cl6,null,C.aR,null,null)
D.bPp=new A.eM(0,0,0,0,null,null,D.apU,null)
D.y9=new A.b5(14,14)
D.bQM=new A.X("Bilhete",!1)
D.bRj=new A.X("Organizas",!1)
D.bRT=new A.X("Por entrar",!1)
D.bSh=new A.X("Sem bilhete pago",!1)
D.bXm=new A.l_(186,186,8,C.fU,0,null)
D.c8K=new A.E("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bYI=new A.bF(D.c8K,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c7K=new A.E("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cc,C.a4,null,null,null,null,null,null)
D.caB=new A.E("Entrada",null,C.hS,null,null,null,null,null,null,null)
D.ceG=new A.E("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.cf1=new A.E("\xc0 procura de um QR\u2026",null,C.hR,null,null,null,null,null,null,null)
D.cgz=new A.E("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.ckj=new B.abu(null)
D.ckq=new B.Xg(null)
D.ckR=new B.ac4("D\xc1 ENTRADA EM",null)
D.ckS=new B.ac4("HOJE",null)
D.cm6=new B.aeb("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cnb=new B.aeY(null)
D.cnr=new B.afA(null)})()};
(a=>{a["Rnxxin9gaOZ+rB8NEyASlvClH7g="]=a.current})($__dart_deferred_initializers__);