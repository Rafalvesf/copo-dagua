((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dKA(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fX(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aLR(w,x)},
cIl(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cIl=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.jf("partner_today",y.z),$async$cIl)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.an(o==null?C.ai:o)
while(o.q()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.p(n==null?"Evento":n)
m=A.B(J.i(q,"booking_number"))
l=A.aC(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aC(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bp(r,new A.aMh([k,n,m,l]))}}p=A.aC(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aC(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.auT(r,p,o)
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
return A.m($async$cIl,w)},
auT:function auT(d,e,f){this.a=d
this.b=e
this.c=f},
dsE(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
g=A.p(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d0(A.p(x==null?"":x))
w=A.B(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.B(J.i(i,"status")):k
if(s){s=A.aC(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aC(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d0(A.p(p==null?"":p))
p=p==null?k:p.dF()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.an(j==null?C.ai:j)
while(j.q()){n=j.gE(j)
if(t.b(n)&&A.d0(A.p(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.p(l==null?"Parceiro":l)
o.push(new A.aLD(A.db(A.p(m.h(n,"at"))).dF(),l))}}return new B.TE(h,g,x,w,v,u,r,s,q,p,o)},
cIj(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cIj=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.jf("my_entries",y.z),$async$cIj)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.an(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.bp(r,B.dsE(q))}v=r
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
return A.m($async$cIj,w)},
dJU(d){var x,w,v="public",u=$.P().b
u===$&&A.b()
x=u.gbu().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cJq(w)
u=u.ch
u===$&&A.b()
return u.LS(0,"entries-"+w,C.ye).NG(new B.cJn(d),C.Gz,x.$1("user_id"),v,"event_checkins").NG(new B.cJo(d),C.Gz,x.$1("user_id"),v,"booking_arrivals").NG(new B.cJp(d),C.GA,x.$1("buyer_id"),v,"event_tickets").Pu(0)},
TE:function TE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cJq:function cJq(d){this.a=d},
cJn:function cJn(d){this.a=d},
cJo:function cJo(d){this.a=d},
cJp:function cJp(d){this.a=d},
dpa(){return new B.J7(null)},
dbH(d){return C.f.aT(C.j.k(A.hX(d)),2,"0")+":"+C.f.aT(C.j.k(A.hN(d)),2,"0")},
J7:function J7(d){this.a=d},
b42:function b42(){},
aey:function aey(d){this.a=d},
aez:function aez(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c95:function c95(d){this.a=d},
c94:function c94(d){this.a=d},
c9_:function c9_(d,e){this.a=d
this.b=e},
c92:function c92(d){this.a=d},
c91:function c91(d){this.a=d},
c93:function c93(d){this.a=d},
c90:function c90(d){this.a=d},
afa:function afa(d){this.a=d},
afb:function afb(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cfb:function cfb(d,e){this.a=d
this.b=e},
cfc:function cfc(){},
acW:function acW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bUt:function bUt(d){this.a=d},
OY:function OY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
adM:function adM(d,e){this.c=d
this.a=e},
abG:function abG(d,e){this.c=d
this.a=e},
agW:function agW(d,e){this.c=d
this.a=e},
aiy:function aiy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aii:function aii(d,e,f){this.c=d
this.d=e
this.a=f},
aFz:function aFz(d,e){this.c=d
this.a=e},
ab5:function ab5(d){this.a=d},
ab6:function ab6(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bGB:function bGB(d){this.a=d},
bGA:function bGA(){},
bGz:function bGz(d,e){this.a=d
this.b=e},
aRU:function aRU(){},
aSf:function aSf(){},
aSk:function aSk(){},
UA:function UA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ag1:function ag1(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ex$=e
_.bM$=f
_.c=_.a=null},
cq8:function cq8(){},
cq9:function cq9(d,e){this.a=d
this.b=e},
cqa:function cqa(d){this.a=d},
WZ:function WZ(d){this.a=d},
aE2:function aE2(d){this.a=d},
aSo:function aSo(){},
ajQ:function ajQ(){},
ap3:function ap3(d,e,f){this.c=d
this.a=e
this.b=f},
dsu(d,e){},
a4x:function a4x(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aIw:function aIw(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c8C:function c8C(d){this.a=d},
c8B:function c8B(d,e){this.a=d
this.b=e},
aSd:function aSd(){},
dsr(d,e){var x=null,w=d===D.aqb?250:0
return new B.a4A(d,w,e,new A.lo(x,x,y.J),new B.xF(x,C.B7,x,!1,!1,C.aT,C.jd,1),$.aa())},
a4A:function a4A(d,e,f,g,h,i){var _=this
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
bgT:function bgT(d){this.a=d},
bgU:function bgU(d){this.a=d},
bgV:function bgV(d){this.a=d},
bgW:function bgW(d){this.a=d},
xF:function xF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
axJ:function axJ(d){this.a=d},
bzM:function bzM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bzN:function bzN(){}},D,F,G,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
E=c[274]
B=a.updateHolder(c[13],B)
D=c[270]
F=c[87]
G=c[190]
H=c[272]
I=c[123]
K=c[236]
L=c[273]
M=c[271]
B.auT.prototype={}
B.TE.prototype={}
B.J7.prototype={
b9(d,e){var x=y.E
return e.G(A.cC($.b6(),new B.b42(),y.D,x),x)===C.dP?D.cn0:D.cmL}}
B.aey.prototype={
S(){return new B.aez()}}
B.aez.prototype={
ad(){var x=this
x.aq()
$.ay.b4$.push(x)
x.km()
x.r=B.dJU(new B.c95(x))},
m(){var x,w,v=this
$.ay.i9(v)
x=v.w
if(x!=null)x.aL(0)
x=v.r
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y_(x)}v.a7()},
nc(d){if(d===C.eq)this.km()},
D4(d){return this.b5T(d)},
km(){return this.D4(!1)},
b5T(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$D4=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.an(o==null?D.bzl:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cIj(),$async$D4)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.c9_(u,s))
if(!d||s==null){x=1
break}for(o=J.an(s);o.q();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null)
p.a1(new A.bE(o,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$D4,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gD3(),q=u.d,p=y.p
q=A.a([new B.OY("QR code",C.qd,!q,new B.c92(u),t),new B.OY("Scannear",C.vh,q,new B.c93(u),t)],p)
if(u.d)p=D.beK
else{x=A.a([D.cjT,C.R,D.aj5,C.bN,D.ckq,C.ar],p)
w=s==null
if(w&&!u.f)x.push(M.a8h)
else if(w)x.push(new B.agW(r,t))
else{w=J.a7(s)
if(w.gY(s))x.push(D.bKm)
else{v=A.a([],p)
for(w=w.gX(s);w.q();)C.e.n(v,A.a([D.pO,new B.aFz(w.gE(w),t)],p))
v.push(D.pO)
C.e.n(x,v)}}p=x}return new B.acW(r,q,p,t)}}
B.afa.prototype={
S(){return new B.afb()}}
B.afb.prototype={
ad(){this.aq()
$.ay.b4$.push(this)
this.km()},
m(){$.ay.i9(this)
this.a7()},
nc(d){if(d===C.eq)this.km()},
km(){var x=0,w=A.n(y.H),v,u=this,t
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cIl(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cfb(u,t))
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
Qg(){var x=0,w=A.n(y.H),v=this,u
var $async$Qg=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ac(u).ak("/cobrar",null,y.X),$async$Qg)
case 2:if(v.c!=null)v.km()
return A.l(null,w)}})
return A.m($async$Qg,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gD3(),k=y.p,j=A.a([new B.OY("Scannear",C.vh,!0,new B.cfc(),n),new B.OY("Cobrar",C.nK,!1,o.gaT_(),n)],k),i=A.a([D.clG,C.R,new B.UA(290,!1,l,n),C.bN,D.ckr,C.ar],k),h=m==null
if(h&&!o.e)i.push(H.a8e)
else if(h)i.push(new B.agW(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKJ)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.G)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.p(q)+" pessoas")
r=C.e.a0(r," \xb7 ")
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
t=p}C.e.n(h,A.a([D.pO,new B.aiy(s,r,t,q>0,n,n)],k))}h.push(D.pO)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aiy("Cobrado hoje",k,n,!1,F.cHG(m.b),n))
h.push(D.pO)
C.e.n(i,h)}return new B.acW(l,j,i,n)}}
B.acW.prototype={
u(d){var x=null,w=C.CL.C(0,new A.a3(0,A.aR(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.cY(C.ba,x,x,A.pR(C.lx,new B.bUt(d),"Voltar"),x),C.R,D.caa,C.aA,A.e_(C.be,this.d,C.r,C.bk,8,8),C.aA],y.p)
C.e.n(v,this.e)
return A.cO(x,C.by,A.bA(!0,A.AW(A.d4(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.OY.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.at:C.t
return A.bk(w,!0,w,A.hg(!1,C.aM,!0,w,A.eW(!1,w,!0,A.aJ(new A.S(C.bW,A.O(A.a([A.b8(x.d,u,w,w,16),C.bh,A.h(x.c,w,w,w,w,A.aH(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.v,C.h,C.J,0,w),w),38,w),C.aa,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.aa,w,w,C.cY),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a6,w)}}
B.adM.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x)}}
B.abG.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aH,x,x)}}
B.agW.prototype={
u(d){var x=null
return new A.S(C.pV,A.y(A.a([D.c7k,A.cE(C.t1,x,x,this.c,x,x)],y.p),C.v,C.h,C.l),x)}}
B.aiy.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u))
t=A.a([A.a4(A.y(s,C.G,C.h,C.l),1),C.af],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cx:C.dT
w=A.W(999)
t.push(A.x(u,A.h(s,u,u,u,u,A.aH(u,u,r?C.cT:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.I(x,u,u,w,u,u,C.x),u,u,u,C.dk,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u))
return new A.S(C.cj,A.O(t,C.v,C.h,C.l,0,u),u)}}
B.aii.prototype={
u(d){var x=null,w=this.d,v=w?C.cx:C.dT,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?C.cT:C.cn,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.x),x,x,x,C.dk,x,x,x)}}
B.aFz.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dp[A.fD(l)-1]+", "+A.aD(l)+" "+C.bg[A.av(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.p(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a0(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.X("Entrou \xe0s "+B.dbH(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.dbH(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bRZ
else if(x)k=D.bR3
else k=m.f?D.bQw:D.bRD
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n)],k)
if(u.length!==0)x.push(new A.S(L.MO,A.h(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.cj,A.O(A.a([A.a4(A.y(x,C.G,C.h,C.l),1),C.af,new B.aii(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.ab5.prototype={
S(){return new B.ab6(new A.ae(Date.now(),0,!1),C.n9)}}
B.ab6.prototype={
ad(){var x=this
x.aq()
$.ay.b4$.push(x)
x.km()
x.as=A.u2(C.hq,new B.bGB(x))},
m(){var x,w=this
$.ay.i9(w)
x=w.Q
if(x!=null)x.aL(0)
x=w.as
if(x!=null)x.aL(0)
w.a7()},
nc(d){var x
if(d===C.eq)this.km()
else if(d===C.mv){x=this.Q
if(x!=null)x.aL(0)}},
km(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aL(0)
x=3
return A.d(A.aUb(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bGz(u,t))
s=t==null?null:t.b
if(s==null)s=C.nb
u.Q=A.di(s,u.gD3())
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gR().G($.b6(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.B(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.B(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cu(new A.ae(Date.now(),0,!1)).a
v=x<0?0:C.k.eD(C.j.aO(x,1000)/1000)
u=C.k.af(C.j.aO(x,1000)/C.j.aO(o.z.a,1000),0,1)
x=A.W(16)
t=A.bz(C.f9,0.5)
s=A.W(16)
r=A.bz(C.f9,0.5)
k=!k
if(k)q=A.boU(C.t,A.kd("/q/"+l.a),C.GC,C.GD,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bX0:A.bM(A.y(A.a([C.aDj,C.aD,D.cef,A.cE(C.t1,n,n,o.gD3(),n,n)],y.p),C.v,C.h,C.J),n,n)
p=y.p
s=A.a([A.x(n,A.aJ(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.x),n,n,n,C.cV,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ac,A.x(C.ba,A.aqC(C.K,A.x(n,n,C.r,n,n,new A.I(C.u2,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.f9,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aD,A.bk(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a6,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.cf(k,32,r,!1,!0,n),C.af,new A.dl(1,C.bc,A.y(A.a([A.h(w,n,n,n,n,C.a9,n,n),D.cg8],p),C.G,C.h,C.l),n)],p),C.v,C.bX,C.l,0,n))
return A.x(n,A.y(s,C.v,C.h,C.l),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.x),n,n,n,C.cV,n,n,n)}}
B.aRU.prototype={}
B.aSf.prototype={}
B.aSk.prototype={}
B.UA.prototype={
S(){return new B.ag1(B.dsr(D.aqa,D.brA),null,null)}}
B.ag1.prototype={
gKh(){var x,w=this,v=w.e
if(v===$){x=A.cI(null,E.MA,null,null,w)
w.e!==$&&A.b_()
w.e=x
v=x}return v},
ad(){this.aq()
$.ay.b4$.push(this)},
c0(){var x,w,v=this
v.e0()
x=v.c
x.toString
if(A.aR(x,null,y.w).w.ax)v.gKh().cZ(0)
else{x=v.gKh()
w=x.r
if(!(w!=null&&w.a!=null))x.aBQ(0,!0)}},
nc(d){if(this.f)return
if(d===C.eq)this.d.jZ(0)
else if(d===C.mv)this.d.cZ(0)},
m(){var x=this
$.ay.i9(x)
x.gKh().m()
x.d.m()
x.aOJ()},
DE(d){return this.b7F(d)},
b7F(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DE=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dKA(t)
if(p==null){s=u.c.O(y.q).f
s.ayW()
s.a1(D.bYp)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.cZ(0),$async$DE)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ac(r).ak(m,null,y.X),$async$DE)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.jZ(0),$async$DE)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DE,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fQ(A.W(16),A.aJ(new A.bC(C.aw,w,C.e4,C.y,A.a([C.js,new B.a4x(t,x.gb7E(),new B.cq8(),w),A.bM(A.aJ(new A.bC(C.aw,w,C.aC,C.y,A.a([D.bPb,A.f3(x.gKh(),new B.cq9(x,u),w)],s),w),u,u),w,w),A.ca(16,A.bM(A.x(w,D.ceB,C.r,w,w,new A.I(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dk,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bb)],s)
if(x.a.d)s.push(new A.ln(t,new B.cqa(x),w,w,y.n))
return A.y(s,C.E,C.h,C.l)}}
B.WZ.prototype={
u(d){return D.aoS}}
B.aE2.prototype={
b0(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.bb()
m.r=C.t.gv(0)
m.b=C.bL
m.c=4
m.d=C.h8
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cz(n,C.aP,o,o,A.a([],v))
u.aB(new A.eY(2,44))
u.aB(new A.cQ(2,16))
u.Ae(D.bIQ,D.y6)
u.aB(new A.cQ(44,2))
d.dO(u,m)
u=new A.cz(n,C.aP,o,o,A.a([],v))
t=x-44
u.aB(new A.eY(t,2))
s=x-16
u.aB(new A.cQ(s,2))
r=x-2
u.Ae(new A.K(r,16),D.y6)
u.aB(new A.cQ(r,44))
d.dO(u,m)
u=new A.cz(n,C.aP,o,o,A.a([],v))
q=w-44
u.aB(new A.eY(r,q))
p=w-16
u.aB(new A.cQ(r,p))
r=w-2
u.Ae(new A.K(s,r),D.y6)
u.aB(new A.cQ(t,r))
d.dO(u,m)
v=new A.cz(n,C.aP,o,o,A.a([],v))
v.aB(new A.eY(44,r))
v.aB(new A.cQ(16,r))
v.Ae(new A.K(2,p),D.y6)
v.aB(new A.cQ(2,q))
d.dO(v,m)},
dU(d){return!1}}
B.aSo.prototype={}
B.ajQ.prototype={
m(){var x=this,w=x.bM$
if(w!=null)w.a2(0,x.ghU())
x.bM$=null
x.a7()},
bV(){this.cH()
this.d6()
this.hV()}}
B.ap3.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4x.prototype={
S(){return new B.aIw()}}
B.aIw.prototype={
b6D(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.ln(x,new B.c8C(this),null,null,y.n)},
XF(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XF=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.ha(t,A.u(t).i("ha<1>")).XS(s.d,!1,B.dKd())
x=2
return A.d(u.jZ(0),$async$XF)
case 2:return A.l(null,w)}})
return A.m($async$XF,w)},
Mv(){var x=0,w=A.n(y.H),v=this,u
var $async$Mv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aL(0)
x=2
return A.d(y.x.b(u)?u:A.eg(u,y.H),$async$Mv)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.cZ(0),$async$Mv)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$Mv,w)},
ad(){var x,w=this
w.aq()
x=w.a.c
w.d!==$&&A.br()
w.d=x
w.XF()},
m(){this.a7()
this.Mv()},
nc(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xC}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.jZ(0)
break
case 2:w.cZ(0)
break}}}
B.aSd.prototype={}
B.a4A.prototype={
bh_(){var x=this
x.CW=$.HL().gav1().XS(new B.bgT(x),!1,new B.bgU(x))
x.cx=$.HL().gaCn().li(new B.bgV(x))
x.cy=$.HL().gaDq().li(new B.bgW(x))},
b6U(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aL(0)
w=x.cx
if(w!=null)w.aL(0)
w=x.cy
if(w!=null)w.aL(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bpC(!1,w.r===C.jd?C.jd:C.aaS))
return!0},
jZ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$jZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xE(C.xB,A.xD(null,null,C.xB.geS(0))))
if(s.a.e){x=1
break}r=C.B7
q=new B.bzM(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bh_()
x=7
return A.d($.HL().lt(0,q),$async$jZ)
case 7:p=f
if(!s.db)s.sv(0,s.a.bpX(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tr){o=m
if(!s.db)s.sv(0,s.a.bpZ(C.B7,o,!0,!1,C.aT,C.jd,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$jZ,w)},
cZ(d){var x=0,w=A.n(y.H),v=this
var $async$cZ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b6U()?2:3
break
case 2:x=4
return A.d($.HL().cZ(0),$async$cZ)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cZ,w)},
tG(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tG=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.al(A.xE(C.a11,A.xD(null,null,C.a11.geS(0))))
if(u.db)A.al(A.xE(C.xB,A.xD(null,null,C.xB.geS(0))))
if(!t.e){x=1
break}if(t.r===C.jd){x=1
break}x=3
return A.d($.HL().tG(),$async$tG)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tG,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aW(0)
u.h7()
x=3
return A.d($.HL().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xF.prototype={
M5(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xF(w,v,f,u,t,s,r,k==null?x.w:k)},
bpC(d,e){var x=null
return this.M5(x,x,x,x,d,x,e,x)},
bpX(d,e,f,g,h,i){return this.M5(d,e,null,f,g,h,i,null)},
bpZ(d,e,f,g,h,i,j){return this.M5(null,d,e,f,g,h,i,j)},
bpn(d){var x=null
return this.M5(x,x,x,x,x,x,x,d)},
bpi(d){var x=null
return this.M5(x,x,x,x,x,x,d,x)}}
B.axJ.prototype={
u(d){var x=null,w=A.a([D.bK9],y.p)
w.push(A.h(C.jY.geS(0),x,x,x,x,C.a9D,x,x))
return A.kJ(A.bM(A.y(w,C.v,C.h,C.J),x,x),C.an,!0)}}
B.bzM.prototype={
Zx(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ai<1,v>")
x=A.U(new A.ai(x,new B.bzN(),w),w.i("aU.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:C})","F<~>(my)","WZ(N,tr,e?)","ci(N,xF,e?)","e(N,xF,e?)","~(L,c6)"])
B.cJq.prototype={
$1(d){return new I.Fi(K.y1,d,this.a)},
$S:1369}
B.cJn.prototype={
$1(d){return this.a.$0()},
$S:155}
B.cJo.prototype={
$1(d){return this.a.$0()},
$S:155}
B.cJp.prototype={
$1(d){return this.a.$0()},
$S:155}
B.b42.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:120}
B.c95.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aL(0)
x.w=A.di(C.fp,new B.c94(x))},
$S:0}
B.c94.prototype={
$0(){return this.a.D4(!0)},
$S:0}
B.c9_.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c92.prototype={
$0(){var x=this.a
return x.p(new B.c91(x))},
$S:0}
B.c91.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c93.prototype={
$0(){var x=this.a
return x.p(new B.c90(x))},
$S:0}
B.c90.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cfb.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cfc.prototype={
$0(){},
$S:0}
B.bUt.prototype={
$0(){return A.am(this.a,!1).i6()},
$S:0}
B.bGB.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bGA())},
$S:67}
B.bGA.prototype={
$0(){},
$S:0}
B.bGz.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ae(w,0,!1).ek(v)
u.z=v>3e7?x:C.n9}},
$S:0}
B.cq8.prototype={
$3(d,e,f){return D.ck_},
$S:z+3}
B.cq9.prototype={
$2(d,e){var x=null,w=this.a.gKh().x
w===$&&A.b()
return A.ca(x,A.x(x,x,C.r,C.u2,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:259}
B.cqa.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jd)return C.ao
x=t===C.aaT
t=x?C.cx:C.dT
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.MM,A.bk(u,!0,u,A.eW(!1,u,!0,A.x(u,A.O(A.a([D.azy,A.x(u,A.h(v,u,u,u,u,A.aH(u,u,x?C.cT:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.x),u,u,u,C.dk,u,u,u)],y.p),C.v,C.h,C.l,0,u),C.r,u,G.hV,D.afE,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbBc(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a6,u),u)},
$S:z+4}
B.c8C.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aoT}x=e.c
if(x!=null){w=new B.axJ(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.le(new B.c8B(this.a,e))},
$S:z+5}
B.c8B.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b6D(u,e)
v.a.toString
x=u.f
v=A.ak(1/0,e.a,e.b)
u=A.ak(1/0,e.c,e.d)
w=A.wT(A.G1(A.Jq(C.K,A.aJ($.HL().av6(),x.b,x.a),C.r,C.bE),new A.af(v,u)),C.y,null)
return w},
$S:116}
B.bgT.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1370}
B.bgU.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.x5(d)},
$S:70}
B.bgV.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpi(d))},
$S:1371}
B.bgW.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpn(d))},
$S:119}
B.bzN.prototype={
$1(d){return d.c},
$S:1372};(function aliases(){var x=B.ajQ.prototype
x.aOJ=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aez.prototype,"gD3",0,0,null,["$1$announce","$0"],["D4","km"],1,0,0)
var t
w(t=B.afb.prototype,"gD3","km",0)
w(t,"gaT_","Qg",0)
w(B.ab6.prototype,"gD3","km",0)
v(B.ag1.prototype,"gb7E","DE",2)
u(B,"dKd","dsu",6)
w(t=B.a4A.prototype,"gbBc","tG",0)
w(t,"geE","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.L,[B.auT,B.TE,B.xF,B.bzM])
v(A.bv,[B.cJq,B.cJn,B.cJo,B.cJp,B.b42,B.bGB,B.cq8,B.cqa,B.c8C,B.bgT,B.bgU,B.bgV,B.bgW,B.bzN])
u(B.J7,A.ev)
v(A.H,[B.aey,B.afa,B.UA,B.a4x])
v(A.a1,[B.aSf,B.aSk,B.aSo,B.aSd])
u(B.aez,B.aSf)
v(A.bN,[B.c95,B.c94,B.c9_,B.c92,B.c91,B.c93,B.c90,B.cfb,B.cfc,B.bUt,B.bGA,B.bGz])
u(B.afb,B.aSk)
v(A.M,[B.acW,B.OY,B.adM,B.abG,B.agW,B.aiy,B.aii,B.aFz,B.WZ,B.axJ])
u(B.ab5,A.dA)
u(B.aRU,A.dv)
u(B.ab6,B.aRU)
u(B.ajQ,B.aSo)
u(B.ag1,B.ajQ)
v(A.cJ,[B.cq9,B.c8B])
u(B.aE2,A.qn)
u(B.ap3,A.ff)
u(B.aIw,B.aSd)
u(B.a4A,A.d1)
x(B.aRU,A.el)
x(B.aSf,A.el)
x(B.aSk,A.el)
x(B.aSo,A.el)
w(B.ajQ,A.iV)
x(B.aSd,A.el)})()
A.bt(b.typeUniverse,JSON.parse('{"aey":{"H":[],"e":[],"f":[]},"afa":{"H":[],"e":[],"f":[]},"ab5":{"H":[],"e":[],"f":[]},"J7":{"H":[],"e":[],"f":[]},"aez":{"a1":["aey"],"el":[]},"afb":{"a1":["afa"],"el":[]},"acW":{"M":[],"e":[],"f":[]},"OY":{"M":[],"e":[],"f":[]},"adM":{"M":[],"e":[],"f":[]},"abG":{"M":[],"e":[],"f":[]},"agW":{"M":[],"e":[],"f":[]},"aiy":{"M":[],"e":[],"f":[]},"aii":{"M":[],"e":[],"f":[]},"aFz":{"M":[],"e":[],"f":[]},"ab6":{"a1":["ab5"],"el":[]},"UA":{"H":[],"e":[],"f":[]},"WZ":{"M":[],"e":[],"f":[]},"ag1":{"a1":["UA"],"el":[]},"aE2":{"aV":[]},"a4x":{"H":[],"e":[],"f":[]},"aIw":{"a1":["a4x"],"el":[]},"a4A":{"d1":["xF"],"aV":[]},"axJ":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{D:x("cF"),x:x("F<~>"),k:x("r<kI>"),G:x("r<TE>"),v:x("r<fB>"),S:x("r<+at,partner(ae,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("ds"),Y:x("TE"),N:x("c"),n:x("ln<xF>"),J:x("lo<my>"),q:x("dp"),z:x("@"),r:x("t<TE>?"),g:x("t<@>?"),X:x("L?"),t:x("auT?"),E:x("rn?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aeV=new A.dL(C.tA,C.ad,C.tA,C.ad)
D.afE=new A.I(null,null,D.aeV,null,null,null,C.x)
D.cor=new B.aii("S\xf3 funciona na tua conta",!0,null)
D.aj5=new A.f4(C.K,null,null,D.cor,null)
D.c40=new A.Q(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ca0=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c40,C.a4,null,null,null,null,null,null)
D.bKq=new A.S(C.hu,D.ca0,null)
D.aja=new A.f4(C.K,null,null,D.bKq,null)
D.aoS=new A.pd(C.cn,!0,D.aja,null)
D.aoT=new A.pd(C.an,!0,null,null)
D.aqa=new B.ap3(0,0,"noDuplicates")
D.aqb=new B.ap3(1,1,"normal")
D.pO=new A.kn(0.5,0.5,null,null,C.f9,null)
D.cfy=new A.D("Lanterna",null,C.cc,null,null,null,null,null,null,null)
D.azy=new A.bI(1,C.at,D.cfy,null)
D.clF=new B.adM("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bPQ=new B.UA(420,!0,null,null)
D.beK=x([D.clF,C.R,D.bPQ],y.p)
D.brA=x([C.tv],y.k)
D.cp7=x([],y.k)
D.bzl=x([],y.G)
D.bIQ=new A.K(16,2)
D.aBY=new A.aZ(57911,"MaterialIcons",null,!1)
D.aCs=new A.b7(D.aBY,null,C.t,null,null,null)
D.bK9=new A.S(C.MJ,D.aCs,null)
D.cc5=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cc,null,null,null,null,null,null,null)
D.bKm=new A.S(C.pV,D.cc5,null)
D.cgp=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cc,null,null,null,null,null,null,null)
D.bKJ=new A.S(C.fT,D.cgp,null)
D.ckG=new B.aE2(null)
D.apL=new A.uR(D.ckG,null,C.aT,null,null)
D.bPb=new A.eE(0,0,0,0,null,null,D.apL,null)
D.y6=new A.b5(14,14)
D.bQw=new A.X("Bilhete",!1)
D.bR3=new A.X("Organizas",!1)
D.bRD=new A.X("Por entrar",!1)
D.bRZ=new A.X("Sem bilhete pago",!1)
D.bX0=new A.kT(186,186,8,C.fR,0,null)
D.c8k=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bYp=new A.bE(D.c8k,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c7k=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cc,C.a4,null,null,null,null,null,null)
D.caa=new A.D("Entrada",null,C.hO,null,null,null,null,null,null,null)
D.cef=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.ceB=new A.D("\xc0 procura de um QR\u2026",null,C.hN,null,null,null,null,null,null,null)
D.cg8=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.cjT=new B.ab5(null)
D.ck_=new B.WZ(null)
D.ckq=new B.abG("D\xc1 ENTRADA EM",null)
D.ckr=new B.abG("HOJE",null)
D.clG=new B.adM("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cmL=new B.aey(null)
D.cn0=new B.afa(null)})()};
(a=>{a["C8h0SqNSiTP/kcgIhZONAYu3FJY="]=a.current})($__dart_deferred_initializers__);