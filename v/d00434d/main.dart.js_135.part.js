((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dIr(d){var x,w,v=A.aV("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).hk(C.f.C(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMr(w,x)},
cGU(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cGU=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.jI("partner_today",y.z),$async$cGU)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.aq(o==null?C.am:o)
while(o.t()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.q(n==null?"Evento":n)
m=A.E(J.i(q,"booking_number"))
l=A.aL(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aL(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.by(r,new A.aMS([k,n,m,l]))}}p=A.aL(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aL(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avd(r,p,o)
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
return A.m($async$cGU,w)},
avd:function avd(d,e,f){this.a=d
this.b=e
this.c=f},
dqA(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.dH(A.q(x==null?"":x))
w=A.E(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.E(J.i(i,"status")):k
if(s){s=A.aL(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aL(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.dH(A.q(p==null?"":p))
p=p==null?k:p.e0()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.aq(j==null?C.am:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.dH(A.q(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aMd(A.da(A.q(m.h(n,"at"))).e0(),l))}}return new B.TE(h,g,x,w,v,u,r,s,q,p,o)},
cGS(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cGS=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.jI("my_entries",y.z),$async$cGS)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.aq(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.by(r,B.dqA(q))}v=r
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
return A.m($async$cGS,w)},
dHL(d){var x,w,v="public",u=$.T().b
u===$&&A.b()
x=u.gbD().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cHZ(w)
u=u.ch
u===$&&A.b()
return u.M6(0,"entries-"+w,C.yv).O8(new B.cHW(d),C.H2,x.$1("user_id"),v,"event_checkins").O8(new B.cHX(d),C.H2,x.$1("user_id"),v,"booking_arrivals").O8(new B.cHY(d),C.H3,x.$1("buyer_id"),v,"event_tickets").Q2(0)},
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
cHZ:function cHZ(d){this.a=d},
cHW:function cHW(d){this.a=d},
cHX:function cHX(d){this.a=d},
cHY:function cHY(d){this.a=d},
dn8(){return new B.Ja(null)},
d9P(d){return C.f.aW(C.j.k(A.hM(d)),2,"0")+":"+C.f.aW(C.j.k(A.hv(d)),2,"0")},
Ja:function Ja(d){this.a=d},
b4s:function b4s(){},
aeS:function aeS(d){this.a=d},
aeT:function aeT(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c8B:function c8B(d){this.a=d},
c8A:function c8A(d){this.a=d},
c8v:function c8v(d,e){this.a=d
this.b=e},
c8y:function c8y(d){this.a=d},
c8x:function c8x(d){this.a=d},
c8z:function c8z(d){this.a=d},
c8w:function c8w(d){this.a=d},
aft:function aft(d){this.a=d},
afu:function afu(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
ceD:function ceD(d,e){this.a=d
this.b=e},
ceE:function ceE(){},
adb:function adb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bUe:function bUe(d){this.a=d},
OV:function OV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ae1:function ae1(d,e){this.c=d
this.a=e},
abP:function abP(d,e){this.c=d
this.a=e},
ah8:function ah8(d,e){this.c=d
this.a=e},
aiR:function aiR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiw:function aiw(d,e,f){this.c=d
this.d=e
this.a=f},
aG3:function aG3(d,e){this.c=d
this.a=e},
abe:function abe(d){this.a=d},
abf:function abf(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bGt:function bGt(d){this.a=d},
bGs:function bGs(){},
bGr:function bGr(d,e){this.a=d
this.b=e},
aSu:function aSu(){},
aSQ:function aSQ(){},
aSV:function aSV(){},
Uz:function Uz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agh:function agh(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.eh$=e
_.bH$=f
_.c=_.a=null},
coE:function coE(){},
coF:function coF(d,e){this.a=d
this.b=e},
coG:function coG(d){this.a=d},
WW:function WW(d){this.a=d},
aEp:function aEp(d){this.a=d},
aSZ:function aSZ(){},
akc:function akc(){},
apv:function apv(d,e,f){this.c=d
this.a=e
this.b=f},
dqq(d,e){},
a4A:function a4A(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJ3:function aJ3(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c85:function c85(d){this.a=d},
c84:function c84(d,e){this.a=d
this.b=e},
aSO:function aSO(){},
dqn(d,e){var x=null,w=d===D.arh?250:0
return new B.a4D(d,w,e,new A.lj(x,x,y.J),new B.xK(x,C.Bt,x,!1,!1,C.aR,C.jc,1),$.ad())},
a4D:function a4D(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.W$=0
_.Z$=i
_.aH$=_.bn$=0},
bhv:function bhv(d){this.a=d},
bhw:function bhw(d){this.a=d},
bhx:function bhx(d){this.a=d},
bhy:function bhy(d){this.a=d},
xK:function xK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ay2:function ay2(d){this.a=d},
bzD:function bzD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bzE:function bzE(){}},D,F,G,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
E=c[275]
B=a.updateHolder(c[13],B)
D=c[271]
F=c[88]
G=c[192]
H=c[273]
I=c[121]
K=c[236]
L=c[274]
M=c[272]
B.avd.prototype={}
B.TE.prototype={}
B.Ja.prototype={
bc(d,e){var x=y.E
return e.H(A.cw($.b8(),new B.b4s(),y.D,x),x)===C.dP?D.coR:D.coA}}
B.aeS.prototype={
P(){return new B.aeT()}}
B.aeT.prototype={
ai(){var x=this
x.aA()
$.az.b3$.push(x)
x.kv()
x.r=B.dHL(new B.c8B(x))},
m(){var x,w,v=this
$.az.ic(v)
x=v.w
if(x!=null)x.aL(0)
x=v.r
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yc(x)}v.a6()},
nf(d){if(d===C.eq)this.kv()},
Di(d){return this.b7u(d)},
kv(){return this.Di(!1)},
b7u(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Di=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.D(y.N,y.Y)
o=u.e
o=J.aq(o==null?D.bAB:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cGS(),$async$Di)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.c8v(u,s))
if(!d||s==null){x=1
break}for(o=J.aq(s);o.t();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null,null)
p.a4(new A.bG(o,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Di,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDh(),q=u.d,p=y.p
q=A.a([new B.OV("QR code",C.qG,!q,new B.c8y(u),t),new B.OV("Scannear",C.vB,q,new B.c8z(u),t)],p)
if(u.d)p=D.bfV
else{x=A.a([D.clL,C.Q,D.ak6,C.br,D.cmi,C.as],p)
w=s==null
if(w&&!u.f)x.push(M.a95)
else if(w)x.push(new B.ah8(r,t))
else{w=J.a7(s)
if(w.gY(s))x.push(D.bM1)
else{v=A.a([],p)
for(w=w.gV(s);w.t();)C.e.n(v,A.a([D.qi,new B.aG3(w.gE(w),t)],p))
v.push(D.qi)
C.e.n(x,v)}}p=x}return new B.adb(r,q,p,t)}}
B.aft.prototype={
P(){return new B.afu()}}
B.afu.prototype={
ai(){this.aA()
$.az.b3$.push(this)
this.kv()},
m(){$.az.ic(this)
this.a6()},
nf(d){if(d===C.eq)this.kv()},
kv(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cGU(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.ceD(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
QM(){var x=0,w=A.n(y.H),v=this,u
var $async$QM=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ai(u).ap("/cobrar",null,y.X),$async$QM)
case 2:if(v.c!=null)v.kv()
return A.l(null,w)}})
return A.m($async$QM,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDh(),k=y.p,j=A.a([new B.OV("Scannear",C.vB,!0,new B.ceE(),n),new B.OV("Cobrar",H.Eh,!1,o.gaTU(),n)],k),i=A.a([D.cny,C.Q,new B.Uz(290,!1,l,n),C.br,D.cmj,C.as],k),h=m==null
if(h&&!o.e)i.push(D.bZ4)
else if(h)i.push(new B.ah8(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bLN)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.J)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.q(q)+" pessoas")
r=C.e.a2(r," \xb7 ")
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
t=p}C.e.n(h,A.a([D.qi,new B.aiR(s,r,t,q>0,n,n)],k))}h.push(D.qi)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aiR("Cobrado hoje",k,n,!1,F.cGg(m.b),n))
h.push(D.qi)
C.e.n(i,h)}return new B.adb(l,j,i,n)}}
B.adb.prototype={
u(d){var x=null,w=C.D9.B(0,new A.a0(0,A.aw(d,C.b2,y.w).w.r.b,0,0)),v=A.a([new A.d0(C.bh,x,x,A.pU(C.lO,new B.bUe(d),"Voltar"),x),C.Q,D.cdj,C.aC,A.eb(C.bf,this.d,C.r,C.bn,8,8),C.aC],y.p)
C.e.n(v,this.e)
return A.cO(x,C.by,A.bC(!0,A.yc(A.cX(v,x,w,x,x,!1,C.a2,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.OV.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.A,t=v?$.ar:C.t
return A.b9(w,!0,w,A.fo(!1,C.aD,!0,w,A.eB(!1,w,!0,A.aI(new A.Q(C.bN,A.P(A.a([A.b2(x.d,u,w,w,16),C.bm,A.h(x.c,w,w,w,w,A.aF(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.w,C.i,C.K,0,w,w),w),38,w),C.ad,!0,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ad,w,w,C.cC),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.ae1.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.R,x,x,x)}}
B.abP.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.b8,x,x,x)}}
B.ah8.prototype={
u(d){var x=null
return new A.Q(C.qp,A.B(A.a([D.ccf,A.cu(C.tp,x,x,this.c,x,x)],y.p),C.w,C.i,C.m,0,C.v),x)}}
B.aiR.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.aj,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.R,u,u,u))
t=A.a([A.a4(A.B(s,C.G,C.i,C.m,0,C.v),1),C.ak],t)
s=v.e
if(s!=null){r=v.f
x=r?C.d9:C.f6
w=A.X(999)
t.push(A.A(u,A.h(s,u,u,u,u,A.aF(u,u,r?C.d_:C.d8,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.M(x,u,u,w,u,u,C.y),u,u,u,C.dx,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.aj,u,u,u))
return new A.Q(C.cm,A.P(t,C.w,C.i,C.m,0,u,u),u)}}
B.aiw.prototype={
u(d){var x=null,w=this.d,v=w?C.d9:C.f6,u=A.X(999)
return A.A(x,A.h(this.c,x,x,x,x,A.aF(x,x,w?C.d_:C.d8,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.M(v,x,x,u,x,x,C.y),x,x,x,C.dx,x,x,x)}}
B.aG3.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.h_[A.ic(l)-1]+", "+A.aK(l)+" "+C.c_[A.ax(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.q(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a2(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.a3("Entrou \xe0s "+B.d9P(k),!0)
else if(t!=null){k=new A.a3("Chegou \xe0s "+B.d9P(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bTj
else if(x)k=D.bSm
else k=m.f?D.bRN:D.bSZ
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.aj,n,n,n)],k)
if(u.length!==0)x.push(new A.Q(L.Nt,A.h(u,n,n,n,n,C.R,n,n,n),n))
return new A.Q(C.cm,A.P(A.a([A.a4(A.B(x,C.G,C.i,C.m,0,C.v),1),C.ak,new B.aiw(o,q,n)],k),C.G,C.i,C.m,0,n,n),n)}}
B.abe.prototype={
P(){return new B.abf(new A.ac(Date.now(),0,!1),C.nk)}}
B.abf.prototype={
ai(){var x=this
x.aA()
$.az.b3$.push(x)
x.kv()
x.as=A.u6(C.fR,new B.bGt(x))},
m(){var x,w=this
$.az.ic(w)
x=w.Q
if(x!=null)x.aL(0)
x=w.as
if(x!=null)x.aL(0)
w.a6()},
nf(d){var x
if(d===C.eq)this.kv()
else if(d===C.mK){x=this.Q
if(x!=null)x.aL(0)}},
kv(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aL(0)
x=3
return A.d(A.aUK(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bGr(u,t))
s=t==null?null:t.b
if(s==null)s=C.nm
u.Q=A.de(s,u.gDh())
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().H($.b8(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.C(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.C(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cK(new A.ac(Date.now(),0,!1)).a
v=x<0?0:C.k.eF(C.j.aN(x,1000)/1000)
u=C.k.ae(C.j.aN(x,1000)/C.j.aN(o.z.a,1000),0,1)
x=A.X(16)
t=A.bA(C.fn,0.5)
s=A.X(16)
r=A.bA(C.fn,0.5)
k=!k
if(k)q=A.cUj(C.t,A.kC("/q/"+l.a),C.H5,C.H6,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bYD:A.bO(A.B(A.a([C.aEo,C.aE,D.cdp,A.cu(C.tp,n,n,o.gDh(),n,n)],y.p),C.w,C.i,C.K,0,C.v),n,n)
p=y.p
s=A.a([A.A(n,A.aI(q,186,186),C.r,n,n,new A.M(C.t,n,r,s,n,n,C.y),n,n,n,C.cv,n,n,214)],p)
if(k){k=A.X(2)
C.e.n(s,A.a([C.ac,A.A(C.bh,A.ar2(C.L,A.A(n,n,C.r,n,n,new A.M(C.uj,n,n,A.X(2),n,n,C.y),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.M(C.fn,n,n,k,n,n,C.y),n,4,n,n,n,n,214),C.aE,A.b9(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.R,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.Q)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.P(A.a([new A.cv(k,32,r,!1,!0,n),C.ak,new A.di(1,C.bd,A.B(A.a([A.h(w,n,n,n,n,C.aj,n,n,n),D.c9n],p),C.G,C.i,C.m,0,C.v),n)],p),C.w,C.bV,C.m,0,n,n))
return A.A(n,A.B(s,C.w,C.i,C.m,0,C.v),C.r,n,n,new A.M(C.t,n,t,x,n,n,C.y),n,n,n,C.cv,n,n,n)}}
B.aSu.prototype={}
B.aSQ.prototype={}
B.aSV.prototype={}
B.Uz.prototype={
P(){return new B.agh(B.dqn(D.arg,D.bsL),null,null)}}
B.agh.prototype={
gKz(){var x,w=this,v=w.e
if(v===$){x=A.cD(null,E.Nb,null,1,null,w)
w.e!==$&&A.aX()
w.e=x
v=x}return v},
ai(){this.aA()
$.az.b3$.push(this)},
bK(){var x,w,v=this
v.d4()
x=v.c
x.toString
if(A.aw(x,null,y.w).w.ax)v.gKz().d3(0)
else{x=v.gKz()
w=x.r
if(!(w!=null&&w.a!=null))x.acA(0,!0)}},
nf(d){if(this.f)return
if(d===C.eq)this.d.kh(0)
else if(d===C.mK)this.d.d3(0)},
m(){var x=this
$.az.ic(x)
x.gKz().m()
x.d.m()
x.aPt()},
DS(d){return this.b9h(d)},
b9h(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DS=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dIr(t)
if(p==null){s=u.c.O(y.q).f
s.azB()
s.a4(D.c__)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d3(0),$async$DS)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ai(r).ap(m,null,y.X),$async$DS)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.kh(0),$async$DS)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DS,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fZ(A.X(16),A.aI(new A.bD(C.aA,w,C.el,C.z,A.a([C.q6,new B.a4A(t,x.gb9g(),new B.coE(),w),A.bO(A.aI(new A.bD(C.aA,w,C.aH,C.z,A.a([D.bQx,A.f7(x.gKz(),new B.coF(x,u),w)],s),w),u,u),w,w),A.cb(16,A.bO(A.A(w,D.cd4,C.r,w,w,new A.M(C.t,w,w,A.X(999),w,w,C.y),w,w,w,C.dx,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.ba)],s)
if(x.a.d)s.push(new A.lS(t,new B.coG(x),w,w,y.n))
return A.B(s,C.I,C.i,C.m,0,C.v)}}
B.WW.prototype={
u(d){return D.aq_}}
B.aEp.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.bb()
m.r=C.t.gv(0)
m.b=C.bQ
m.c=4
m.d=C.h7
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cA(n,C.aP,o,o,A.a([],v))
u.aB(new A.eY(2,44))
u.aB(new A.cR(2,16))
u.Ap(D.bK5,D.yn)
u.aB(new A.cR(44,2))
d.dR(u,m)
u=new A.cA(n,C.aP,o,o,A.a([],v))
t=x-44
u.aB(new A.eY(t,2))
s=x-16
u.aB(new A.cR(s,2))
r=x-2
u.Ap(new A.L(r,16),D.yn)
u.aB(new A.cR(r,44))
d.dR(u,m)
u=new A.cA(n,C.aP,o,o,A.a([],v))
q=w-44
u.aB(new A.eY(r,q))
p=w-16
u.aB(new A.cR(r,p))
r=w-2
u.Ap(new A.L(s,r),D.yn)
u.aB(new A.cR(t,r))
d.dR(u,m)
v=new A.cA(n,C.aP,o,o,A.a([],v))
v.aB(new A.eY(44,r))
v.aB(new A.cR(16,r))
v.Ap(new A.L(2,p),D.yn)
v.aB(new A.cR(2,q))
d.dR(v,m)},
dO(d){return!1}}
B.aSZ.prototype={}
B.akc.prototype={
m(){var x=this,w=x.bH$
if(w!=null)w.a_(0,x.ghr())
x.bH$=null
x.a6()},
bU(){this.cB()
this.d0()
this.hs()}}
B.apv.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4A.prototype={
P(){return new B.aJ3()}}
B.aJ3.prototype={
b8d(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lS(x,new B.c85(this),null,null,y.n)},
XT(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XT=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.h7(t,A.u(t).i("h7<1>")).Y6(s.d,!1,B.dI4())
x=2
return A.d(u.kh(0),$async$XT)
case 2:return A.l(null,w)}})
return A.m($async$XT,w)},
MQ(){var x=0,w=A.n(y.H),v=this,u
var $async$MQ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aL(0)
x=2
return A.d(y.x.b(u)?u:A.ei(u,y.H),$async$MQ)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d3(0),$async$MQ)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$MQ,w)},
ai(){var x,w=this
w.aA()
x=w.a.c
w.d!==$&&A.bs()
w.d=x
w.XT()},
m(){this.a6()
this.MQ()},
nf(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xT}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.kh(0)
break
case 2:w.d3(0)
break}}}
B.aSO.prototype={}
B.a4D.prototype={
bir(){var x=this
x.CW=$.HP().gavD().Y6(new B.bhv(x),!1,new B.bhw(x))
x.cx=$.HP().gaD6().lq(new B.bhx(x))
x.cy=$.HP().gaEa().lq(new B.bhy(x))},
b8v(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aL(0)
w=x.cx
if(w!=null)w.aL(0)
w=x.cy
if(w!=null)w.aL(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.brh(!1,w.r===C.jc?C.jc:C.abQ))
return!0},
kh(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$kh=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xJ(C.xS,A.xI(null,null,C.xS.geT(0))))
if(s.a.e){x=1
break}r=C.Bt
q=new B.bzD(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bir()
x=7
return A.d($.HP().lD(0,q),$async$kh)
case 7:p=f
if(!s.db)s.sv(0,s.a.brA(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tx){o=m
if(!s.db)s.sv(0,s.a.brC(C.Bt,o,!0,!1,C.aR,C.jc,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kh,w)},
d3(d){var x=0,w=A.n(y.H),v=this
var $async$d3=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b8v()?2:3
break
case 2:x=4
return A.d($.HP().d3(0),$async$d3)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d3,w)},
tY(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tY=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.aj(A.xJ(C.a1R,A.xI(null,null,C.a1R.geT(0))))
if(u.db)A.aj(A.xJ(C.xS,A.xI(null,null,C.xS.geT(0))))
if(!t.e){x=1
break}if(t.r===C.jc){x=1
break}x=3
return A.d($.HP().tY(),$async$tY)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tY,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.fW()
x=3
return A.d($.HP().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xK.prototype={
Mj(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xK(w,v,f,u,t,s,r,k==null?x.w:k)},
brh(d,e){var x=null
return this.Mj(x,x,x,x,d,x,e,x)},
brA(d,e,f,g,h,i){return this.Mj(d,e,null,f,g,h,i,null)},
brC(d,e,f,g,h,i,j){return this.Mj(null,d,e,f,g,h,i,j)},
br0(d){var x=null
return this.Mj(x,x,x,x,x,x,x,d)},
bqW(d){var x=null
return this.Mj(x,x,x,x,x,x,d,x)}}
B.ay2.prototype={
u(d){var x=null,w=A.a([D.bLs],y.p)
w.push(A.h(C.jU.geT(0),x,x,x,x,C.aaq,x,x,x))
return A.kh(A.bO(A.B(w,C.w,C.i,C.K,0,C.v),x,x),C.ao,!0)}}
B.bzD.prototype={
ZV(){var x,w,v=this,u=A.D(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("al<1,v>")
x=A.U(new A.al(x,new B.bzE(),w),w.i("aZ.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:x})","F<~>(my)","WW(O,tx,e?)","ch(O,xK,e?)","e(O,xK,e?)","~(K,bX)"])
B.cHZ.prototype={
$1(d){return new I.Fq(K.yi,d,this.a)},
$S:1375}
B.cHW.prototype={
$1(d){return this.a.$0()},
$S:149}
B.cHX.prototype={
$1(d){return this.a.$0()},
$S:149}
B.cHY.prototype={
$1(d){return this.a.$0()},
$S:149}
B.b4s.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:117}
B.c8B.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aL(0)
x.w=A.de(C.fS,new B.c8A(x))},
$S:0}
B.c8A.prototype={
$0(){return this.a.Di(!0)},
$S:0}
B.c8v.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c8y.prototype={
$0(){var x=this.a
return x.p(new B.c8x(x))},
$S:0}
B.c8x.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c8z.prototype={
$0(){var x=this.a
return x.p(new B.c8w(x))},
$S:0}
B.c8w.prototype={
$0(){return this.a.d=!0},
$S:0}
B.ceD.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.ceE.prototype={
$0(){},
$S:0}
B.bUe.prototype={
$0(){return A.an(this.a,!1).iy()},
$S:0}
B.bGt.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bGs())},
$S:65}
B.bGs.prototype={
$0(){},
$S:0}
B.bGr.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ac(w,0,!1).e9(v)
u.z=v>3e7?x:C.nk}},
$S:0}
B.coE.prototype={
$3(d,e,f){return D.clS},
$S:z+3}
B.coF.prototype={
$2(d,e){var x=null,w=this.a.gKz().x
w===$&&A.b()
return A.cb(x,A.A(x,x,C.r,C.uj,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:231}
B.coG.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jc)return C.ar
x=t===C.abR
t=x?C.d9:C.f6
w=A.X(999)
v=x?"Ligada":"Desligada"
return new A.Q(C.Nr,A.b9(u,!0,u,A.eB(!1,u,!0,A.A(u,A.P(A.a([D.aAh,A.A(u,A.h(v,u,u,u,u,A.aF(u,u,x?C.d_:C.d8,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.M(t,u,u,w,u,u,C.y),u,u,u,C.dx,u,u,u)],y.p),C.w,C.i,C.m,0,u,u),C.r,u,G.jm,D.agI,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,this.a.d.gbD0(),u,u,u,u,u,u,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c85.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aq0}x=e.c
if(x!=null){w=new B.ay2(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.ko(new B.c84(this.a,e))},
$S:z+5}
B.c84.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b8d(u,e)
v.a.toString
x=u.f
v=A.ag(1/0,e.a,e.b)
u=A.ag(1/0,e.c,e.d)
w=A.wX(A.vW(A.DO(C.L,A.aI($.HP().avI(),x.b,x.a),C.r,C.bS),new A.ab(v,u)),C.z,null)
return w},
$S:106}
B.bhv.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1376}
B.bhw.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xb(d)},
$S:73}
B.bhx.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqW(d))},
$S:1377}
B.bhy.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.br0(d))},
$S:114}
B.bzE.prototype={
$1(d){return d.c},
$S:1378};(function aliases(){var x=B.akc.prototype
x.aPt=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aeT.prototype,"gDh",0,0,null,["$1$announce","$0"],["Di","kv"],1,0,0)
var t
w(t=B.afu.prototype,"gDh","kv",0)
w(t,"gaTU","QM",0)
w(B.abf.prototype,"gDh","kv",0)
v(B.agh.prototype,"gb9g","DS",2)
u(B,"dI4","dqq",6)
w(t=B.a4D.prototype,"gbD0","tY",0)
w(t,"geG","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.K,[B.avd,B.TE,B.xK,B.bzD])
v(A.bw,[B.cHZ,B.cHW,B.cHX,B.cHY,B.b4s,B.bGt,B.coE,B.coG,B.c85,B.bhv,B.bhw,B.bhx,B.bhy,B.bzE])
u(B.Ja,A.ep)
v(A.G,[B.aeS,B.aft,B.Uz,B.a4A])
v(A.a_,[B.aSQ,B.aSV,B.aSZ,B.aSO])
u(B.aeT,B.aSQ)
v(A.bR,[B.c8B,B.c8A,B.c8v,B.c8y,B.c8x,B.c8z,B.c8w,B.ceD,B.ceE,B.bUe,B.bGs,B.bGr])
u(B.afu,B.aSV)
v(A.I,[B.adb,B.OV,B.ae1,B.abP,B.ah8,B.aiR,B.aiw,B.aG3,B.WW,B.ay2])
u(B.abe,A.dB)
u(B.aSu,A.dx)
u(B.abf,B.aSu)
u(B.akc,B.aSZ)
u(B.agh,B.akc)
v(A.cQ,[B.coF,B.c84])
u(B.aEp,A.qv)
u(B.apv,A.f6)
u(B.aJ3,B.aSO)
u(B.a4D,A.d7)
x(B.aSu,A.eo)
x(B.aSQ,A.eo)
x(B.aSV,A.eo)
x(B.aSZ,A.eo)
w(B.akc,A.iw)
x(B.aSO,A.eo)})()
A.bp(b.typeUniverse,JSON.parse('{"aeS":{"G":[],"e":[],"f":[]},"aft":{"G":[],"e":[],"f":[]},"abe":{"G":[],"e":[],"f":[]},"Ja":{"G":[],"e":[],"f":[]},"aeT":{"a_":["aeS"],"eo":[]},"afu":{"a_":["aft"],"eo":[]},"adb":{"I":[],"e":[],"f":[]},"OV":{"I":[],"e":[],"f":[]},"ae1":{"I":[],"e":[],"f":[]},"abP":{"I":[],"e":[],"f":[]},"ah8":{"I":[],"e":[],"f":[]},"aiR":{"I":[],"e":[],"f":[]},"aiw":{"I":[],"e":[],"f":[]},"aG3":{"I":[],"e":[],"f":[]},"abf":{"a_":["abe"],"eo":[]},"Uz":{"G":[],"e":[],"f":[]},"WW":{"I":[],"e":[],"f":[]},"agh":{"a_":["Uz"],"eo":[]},"aEp":{"aS":[]},"a4A":{"G":[],"e":[],"f":[]},"aJ3":{"a_":["a4A"],"eo":[]},"a4D":{"d7":["xK"],"aS":[]},"ay2":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),x:x("F<~>"),k:x("r<kH>"),G:x("r<TE>"),v:x("r<fI>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dg"),Y:x("TE"),N:x("c"),n:x("lS<xK>"),J:x("lj<my>"),q:x("dq"),z:x("@"),r:x("t<TE>?"),g:x("t<@>?"),X:x("K?"),t:x("avd?"),E:x("rt?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afZ=new A.dS(C.tX,C.ab,C.tX,C.ab)
D.agI=new A.M(null,null,D.afZ,null,null,null,C.y)
D.cqi=new B.aiw("S\xf3 funciona na tua conta",!0,null)
D.ak6=new A.fw(C.L,null,null,D.cqi,null)
D.c5J=new A.N(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ci0=new A.C("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c5J,C.a6,null,null,null,null,null,null,null)
D.bMm=new A.Q(C.f7,D.ci0,null)
D.ake=new A.fw(C.L,null,null,D.bMm,null)
D.aq_=new A.pc(C.d8,!0,D.ake,null)
D.aq0=new A.pc(C.ao,!0,null,null)
D.arg=new B.apv(0,0,"noDuplicates")
D.arh=new B.apv(1,1,"normal")
D.qi=new A.jR(0.5,0.5,null,null,C.fn,null)
D.ccQ=new A.C("Lanterna",null,C.cf,null,null,null,null,null,null,null,null)
D.aAh=new A.bQ(1,C.av,D.ccQ,null)
D.cnx=new B.ae1("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bR8=new B.Uz(420,!0,null,null)
D.bfV=x([D.cnx,C.Q,D.bR8],y.p)
D.bsL=x([C.tT],y.k)
D.cqZ=x([],y.k)
D.bAB=x([],y.G)
D.bK5=new A.L(16,2)
D.aD_=new A.aW(57911,"MaterialIcons",null,!1)
D.aDy=new A.ba(D.aD_,null,C.t,null,null,null)
D.bLs=new A.Q(C.Nn,D.aDy,null)
D.ca5=new A.C("Sem marca\xe7\xf5es para hoje.",null,C.cf,null,null,null,null,null,null,null,null)
D.bLN=new A.Q(C.ht,D.ca5,null)
D.chT=new A.C("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cf,null,null,null,null,null,null,null,null)
D.bM1=new A.Q(C.qp,D.chT,null)
D.cmw=new B.aEp(null)
D.aqS=new A.uR(D.cmw,null,C.aR,null,null)
D.bQx=new A.eZ(0,0,0,0,null,null,D.aqS,null)
D.yn=new A.b5(14,14)
D.bRN=new A.a3("Bilhete",!1)
D.bSm=new A.a3("Organizas",!1)
D.bSZ=new A.a3("Por entrar",!1)
D.bTj=new A.a3("Sem bilhete pago",!1)
D.bYD=new A.ix(186,186,8,C.dJ,0,null)
D.bZ4=new A.oK(2,C.Z,null)
D.c9B=new A.C("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.c__=new A.bG(D.c9B,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.c9n=new A.C("Um QR para todos os eventos",null,C.R,null,null,null,null,null,null,null,null)
D.ccf=new A.C("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cf,C.a6,null,null,null,null,null,null,null)
D.cd4=new A.C("\xc0 procura de um QR\u2026",null,C.hQ,null,null,null,null,null,null,null,null)
D.cdj=new A.C("Entrada",null,C.hi,null,null,null,null,null,null,null,null)
D.cdp=new A.C("Sem liga\xe7\xe3o",null,C.R,null,null,null,null,null,null,null,null)
D.clL=new B.abe(null)
D.clS=new B.WW(null)
D.cmi=new B.abP("D\xc1 ENTRADA EM",null)
D.cmj=new B.abP("HOJE",null)
D.cny=new B.ae1("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.coA=new B.aeS(null)
D.coR=new B.aft(null)})()};
(a=>{a["dnXSyUgrqf/hVyiNqIoVofjBn2I="]=a.current})($__dart_deferred_initializers__);