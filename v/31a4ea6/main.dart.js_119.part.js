((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dN_(d){var x,w,v=A.aT("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fA(C.f.C(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aNc(w,x)},
cJI(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJI=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.ie("partner_today",y.z),$async$cJI)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.ao(o==null?C.ah:o)
while(o.q()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.p(n==null?"Evento":n)
m=A.x(J.i(q,"booking_number"))
l=A.aF(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aF(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bn(r,new A.aND([k,n,m,l]))}}p=A.aF(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aF(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.aw1(r,p,o)
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
return A.m($async$cJI,w)},
aw1:function aw1(d,e,f){this.a=d
this.b=e
this.c=f},
duV(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a6(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
g=A.p(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d0(A.p(x==null?"":x))
w=A.x(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.x(J.i(i,"status")):k
if(s){s=A.aF(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aF(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d0(A.p(p==null?"":p))
p=p==null?k:p.dH()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ao(j==null?C.ah:j)
while(j.q()){n=j.gE(j)
if(t.b(n)&&A.d0(A.p(J.i(n,"at")))!=null){m=J.a6(n)
l=m.h(n,"partner")
l=A.p(l==null?"Parceiro":l)
o.push(new A.aN_(A.d9(A.p(m.h(n,"at"))).dH(),l))}}return new B.U6(h,g,x,w,v,u,r,s,q,p,o)},
cJG(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJG=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.ie("my_entries",y.z),$async$cJG)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.bn(r,B.duV(q))}v=r
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
return A.m($async$cJG,w)},
dMj(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbt().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKO(w)
u=u.ch
u===$&&A.b()
return u.M_(0,"entries-"+w,C.ys).NT(new B.cKL(d),C.GY,x.$1("user_id"),v,"event_checkins").NT(new B.cKM(d),C.GY,x.$1("user_id"),v,"booking_arrivals").NT(new B.cKN(d),C.GZ,x.$1("buyer_id"),v,"event_tickets").PK(0)},
U6:function U6(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKO:function cKO(d){this.a=d},
cKL:function cKL(d){this.a=d},
cKM:function cKM(d){this.a=d},
cKN:function cKN(d){this.a=d},
drt(){return new B.Jp(null)},
ddO(d){return C.f.aP(C.j.k(A.i0(d)),2,"0")+":"+C.f.aP(C.j.k(A.hN(d)),2,"0")},
Jp:function Jp(d){this.a=d},
b5u:function b5u(){},
afo:function afo(d){this.a=d},
afp:function afp(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
cb4:function cb4(d){this.a=d},
cb3:function cb3(d){this.a=d},
caZ:function caZ(d,e){this.a=d
this.b=e},
cb1:function cb1(d){this.a=d},
cb0:function cb0(d){this.a=d},
cb2:function cb2(d){this.a=d},
cb_:function cb_(d){this.a=d},
ag2:function ag2(d){this.a=d},
ag3:function ag3(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgD:function cgD(d,e){this.a=d
this.b=e},
cgE:function cgE(){},
adH:function adH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bW5:function bW5(d){this.a=d},
Pj:function Pj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aeB:function aeB(d,e){this.c=d
this.a=e},
acq:function acq(d,e){this.c=d
this.a=e},
ahR:function ahR(d,e){this.c=d
this.a=e},
ajt:function ajt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ajc:function ajc(d,e,f){this.c=d
this.d=e
this.a=f},
aGS:function aGS(d,e){this.c=d
this.a=e},
abP:function abP(d){this.a=d},
abQ:function abQ(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bI5:function bI5(d){this.a=d},
bI4:function bI4(){},
bI3:function bI3(d,e){this.a=d
this.b=e},
aTg:function aTg(){},
aTC:function aTC(){},
aTH:function aTH(){},
V4:function V4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agW:function agW(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.e7$=e
_.bB$=f
_.c=_.a=null},
cqH:function cqH(){},
cqI:function cqI(d,e){this.a=d
this.b=e},
cqJ:function cqJ(d){this.a=d},
Xz:function Xz(d){this.a=d},
aFh:function aFh(d){this.a=d},
aTL:function aTL(){},
akP:function akP(){},
aq4:function aq4(d,e,f){this.c=d
this.a=e
this.b=f},
duL(d,e){},
a5e:function a5e(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJQ:function aJQ(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
caB:function caB(d){this.a=d},
caA:function caA(d,e){this.a=d
this.b=e},
aTA:function aTA(){},
duI(d,e){var x=null,w=d===D.aqm?250:0
return new B.a5h(d,w,e,new A.lr(x,x,y.J),new B.xT(x,C.Bm,x,!1,!1,C.aQ,C.jq,1),$.aa())},
a5h:function a5h(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.X$=0
_.a_$=i
_.aE$=_.bu$=0},
biB:function biB(d){this.a=d},
biC:function biC(d){this.a=d},
biD:function biD(d){this.a=d},
biE:function biE(d){this.a=d},
xT:function xT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayZ:function ayZ(d){this.a=d},
bBT:function bBT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bBU:function bBU(){}},D,E,F,G,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
D=c[277]
E=c[86]
F=c[194]
G=c[279]
H=c[125]
I=c[241]
K=c[280]
L=c[278]
M=c[281]
B.aw1.prototype={}
B.U6.prototype={}
B.Jp.prototype={
b8(d,e){var x=y.E
return e.G(A.cA($.bb(),new B.b5u(),y.D,x),x)===C.d4?D.co_:D.cnI}}
B.afo.prototype={
P(){return new B.afp()}}
B.afp.prototype={
ad(){var x=this
x.ao()
$.aA.b3$.push(x)
x.km()
x.r=B.dMj(new B.cb4(x))},
m(){var x,w,v=this
$.aA.ic(v)
x=v.w
if(x!=null)x.aI(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y3(x)}v.a6()},
nj(d){if(d===C.et)this.km()},
Da(d){return this.b6Z(d)},
km(){return this.Da(!1)},
b6Z(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Da=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.byI:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJG(),$async$Da)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.caZ(u,s))
if(!d||s==null){x=1
break}for(o=J.ao(s);o.q();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null)
p.a4(new A.bH(o,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.y,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Da,w)},
t(d){var x,w,v,u=this,t=null,s=u.e,r=u.gD9(),q=u.d,p=y.p
q=A.a([new B.Pj("QR code",C.vq,!q,new B.cb1(u),t),new B.Pj("Scannear",C.vv,q,new B.cb2(u),t)],p)
if(u.d)p=D.bf5
else{x=A.a([D.ckP,C.S,D.aje,C.bP,D.cln,C.ao],p)
w=s==null
if(w&&!u.f)x.push(L.a8I)
else if(w)x.push(new B.ahR(r,t))
else{w=J.a6(s)
if(w.gY(s))x.push(D.bKk)
else{v=A.a([],p)
for(w=w.gW(s);w.q();)C.e.n(v,A.a([D.pV,new B.aGS(w.gE(w),t)],p))
v.push(D.pV)
C.e.n(x,v)}}p=x}return new B.adH(r,q,p,t)}}
B.ag2.prototype={
P(){return new B.ag3()}}
B.ag3.prototype={
ad(){this.ao()
$.aA.b3$.push(this)
this.km()},
m(){$.aA.ic(this)
this.a6()},
nj(d){if(d===C.et)this.km()},
km(){var x=0,w=A.n(y.H),v,u=this,t
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJI(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cgD(u,t))
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
Qw(){var x=0,w=A.n(y.H),v=this,u
var $async$Qw=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ae(u).ag("/cobrar",null,y.X),$async$Qw)
case 2:if(v.c!=null)v.km()
return A.l(null,w)}})
return A.m($async$Qw,w)},
t(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gD9(),k=y.p,j=A.a([new B.Pj("Scannear",C.vv,!0,new B.cgE(),n),new B.Pj("Cobrar",C.lS,!1,o.gaTP(),n)],k),i=A.a([D.cmD,C.S,new B.V4(290,!1,l,n),C.bP,D.clo,C.ao],k),h=m==null
if(h&&!o.e)i.push(G.a8F)
else if(h)i.push(new B.ahR(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKJ)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.I)(x),++u){t=x[u].a
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
t=p}C.e.n(h,A.a([D.pV,new B.ajt(s,r,t,q>0,n,n)],k))}h.push(D.pV)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.ajt("Cobrado hoje",k,n,!1,E.cJ2(m.b),n))
h.push(D.pV)
C.e.n(i,h)}return new B.adH(l,j,i,n)}}
B.adH.prototype={
t(d){var x=null,w=C.D5.B(0,new A.a3(0,A.aU(d,C.b4,y.w).w.r.b,0,0)),v=A.a([new A.dd(C.bh,x,x,A.pW(C.lQ,new B.bW5(d),"Voltar"),x),C.S,D.cb5,C.aA,A.em(C.bj,this.d,C.r,C.bo,8,8),C.aA],y.p)
C.e.n(v,this.e)
return A.cP(x,C.bz,A.bE(!0,A.B3(A.d4(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.Pj.prototype={
t(d){var x=this,w=null,v=x.e,u=v?C.t:C.x,t=v?$.ay:C.t
return A.b9(w,!0,w,A.hj(!1,C.aN,!0,w,A.eZ(!1,w,!0,A.aG(new A.S(C.bZ,A.M(A.a([A.b4(x.d,u,w,w,16),C.bf,A.h(x.c,w,w,w,w,A.aI(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.E,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.u,C.h,C.I,0,w),w),38,w),C.ab,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ab,w,w,C.cX),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a3,w)}}
B.aeB.prototype={
t(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x)}}
B.acq.prototype={
t(d){var x=null
return A.h(this.c,x,x,x,x,C.aH,x,x)}}
B.ahR.prototype={
t(d){var x=null
return new A.S(C.q2,A.y(A.a([D.c8h,new A.am(A.cS(C.t8,x,x,this.c,x,x),x)],y.p),C.u,C.h,C.l),x)}}
B.ajt.prototype={
t(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.ac,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u))
t=A.a([A.a4(A.y(s,C.G,C.h,C.l),1),C.ae],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cL:C.dG
w=A.W(999)
t.push(A.w(u,A.h(s,u,u,u,u,A.aI(u,u,r?C.cT:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.E,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.O(x,u,u,w,u,u,C.z),u,u,u,C.dJ,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.ac,u,u))
return new A.S(C.co,A.M(t,C.u,C.h,C.l,0,u),u)}}
B.ajc.prototype={
t(d){var x=null,w=this.d,v=w?C.cL:C.dG,u=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?C.cT:C.cn,x,x,x,x,x,x,x,x,12,x,x,C.E,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.O(v,x,x,u,x,x,C.z),x,x,x,C.dJ,x,x,x)}}
B.aGS.prototype={
t(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.cW[A.eC(l)-1]+", "+A.ax(l)+" "+C.be[A.aq(l)-1])
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
if(k!=null)s=new A.X("Entrou \xe0s "+B.ddO(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.ddO(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSa
else if(x)k=D.bRb
else k=m.f?D.bQF:D.bRL
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.ac,n,n)],k)
if(u.length!==0)x.push(new A.S(K.N9,A.h(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.co,A.M(A.a([A.a4(A.y(x,C.G,C.h,C.l),1),C.ae,new B.ajc(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abP.prototype={
P(){return new B.abQ(new A.ab(Date.now(),0,!1),C.lE)}}
B.abQ.prototype={
ad(){var x=this
x.ao()
$.aA.b3$.push(x)
x.km()
x.as=A.rn(C.hw,new B.bI5(x))},
m(){var x,w=this
$.aA.ic(w)
x=w.Q
if(x!=null)x.aI(0)
x=w.as
if(x!=null)x.aI(0)
w.a6()},
nj(d){var x
if(d===C.et)this.km()
else if(d===C.mM){x=this.Q
if(x!=null)x.aI(0)}},
km(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aI(0)
x=3
return A.d(A.alF(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bI3(u,t))
s=t==null?null:t.b
if(s==null)s=C.jN
u.Q=A.de(s,u.gD9())
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
t(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().G($.bb(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.C(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.C(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cc(new A.ab(Date.now(),0,!1)).a
v=x<0?0:C.k.eF(C.j.aO(x,1000)/1000)
u=C.k.ah(C.j.aO(x,1000)/C.j.aO(o.z.a,1000),0,1)
x=A.W(16)
t=A.bR(C.fd,0.5)
s=A.W(16)
r=A.bR(C.fd,0.5)
k=!k
if(k)q=A.axc(C.t,A.kp("/q/"+l.a),C.yi,C.yj,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXJ:A.bG(A.y(A.a([C.Ps,C.aD,D.cf9,new A.am(A.cS(C.t8,n,n,o.gD9(),n,n),n)],y.p),C.u,C.h,C.I),n,n)
p=y.p
s=A.a([A.w(n,A.aG(q,186,186),C.r,n,n,new A.O(C.t,n,r,s,n,n,C.z),n,n,n,C.cM,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ad,A.w(C.bh,A.arM(C.J,A.w(n,n,C.r,n,n,new A.O(C.uc,n,n,A.W(2),n,n,C.z),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.O(C.fd,n,n,k,n,n,C.z),n,4,n,n,n,n,214),C.aD,A.b9(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a3,n)],p))}s.push(C.S)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.M(A.a([new A.cg(k,32,r,!1,!0,n),C.ae,new A.dl(1,C.bc,A.y(A.a([A.h(w,n,n,n,n,C.ac,n,n),D.ch2],p),C.G,C.h,C.l),n)],p),C.u,C.bT,C.l,0,n))
return A.w(n,A.y(s,C.u,C.h,C.l),C.r,n,n,new A.O(C.t,n,t,x,n,n,C.z),n,n,n,C.cM,n,n,n)}}
B.aTg.prototype={}
B.aTC.prototype={}
B.aTH.prototype={}
B.V4.prototype={
P(){return new B.agW(B.duI(D.aql,D.brU),null,null)}}
B.agW.prototype={
gKo(){var x,w=this,v=w.e
if(v===$){x=A.cF(null,M.MZ,null,null,w)
w.e!==$&&A.b_()
w.e=x
v=x}return v},
ad(){this.ao()
$.aA.b3$.push(this)},
bX(){var x,w,v=this
v.dI()
x=v.c
x.toString
if(A.aU(x,null,y.w).w.ax)v.gKo().cY(0)
else{x=v.gKo()
w=x.r
if(!(w!=null&&w.a!=null))x.aCw(0,!0)}},
nj(d){if(this.f)return
if(d===C.et)this.d.jY(0)
else if(d===C.mM)this.d.cY(0)},
m(){var x=this
$.aA.ic(x)
x.gKo().m()
x.d.m()
x.aPw()},
DK(d){return this.b8S(d)},
b8S(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DK=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dN_(t)
if(p==null){s=u.c.O(y.q).f
s.XQ()
s.a4(D.bZ3)
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
return A.d(A.ae(r).ag(m,null,y.X),$async$DK)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.jY(0),$async$DK)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DK,w)},
t(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.hX(A.W(16),A.aG(new A.bB(C.av,w,C.e0,C.y,A.a([C.iH,new B.a5e(t,x.gb8R(),new B.cqH(),w),A.bG(A.aG(new A.bB(C.av,w,C.aC,C.y,A.a([D.bPg,A.eW(x.gKo(),new B.cqI(x,u),w)],s),w),u,u),w,w),A.cd(16,A.bG(A.w(w,D.cfu,C.r,w,w,new A.O(C.t,w,w,A.W(999),w,w,C.z),w,w,w,C.dJ,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bg)],s)
if(x.a.d)s.push(new A.kf(t,new B.cqJ(x),w,w,y.n))
return A.y(s,C.F,C.h,C.l)}}
B.Xz.prototype={
t(d){return D.ap_}}
B.aFh.prototype={
b0(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aC(),m=A.be()
m.r=C.t.gv(0)
m.b=C.bR
m.c=4
m.d=C.ip
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cN(n,C.aT,o,o,A.a([],v))
u.aF(new A.fe(2,44))
u.aF(new A.cU(2,16))
u.Al(D.bIX,D.yk)
u.aF(new A.cU(44,2))
d.e0(u,m)
u=new A.cN(n,C.aT,o,o,A.a([],v))
t=x-44
u.aF(new A.fe(t,2))
s=x-16
u.aF(new A.cU(s,2))
r=x-2
u.Al(new A.K(r,16),D.yk)
u.aF(new A.cU(r,44))
d.e0(u,m)
u=new A.cN(n,C.aT,o,o,A.a([],v))
q=w-44
u.aF(new A.fe(r,q))
p=w-16
u.aF(new A.cU(r,p))
r=w-2
u.Al(new A.K(s,r),D.yk)
u.aF(new A.cU(t,r))
d.e0(u,m)
v=new A.cN(n,C.aT,o,o,A.a([],v))
v.aF(new A.fe(44,r))
v.aF(new A.cU(16,r))
v.Al(new A.K(2,p),D.yk)
v.aF(new A.cU(2,q))
d.e0(v,m)},
e_(d){return!1}}
B.aTL.prototype={}
B.akP.prototype={
m(){var x=this,w=x.bB$
if(w!=null)w.a2(0,x.gfH())
x.bB$=null
x.a6()},
bS(){this.cr()
this.cN()
this.fI()}}
B.aq4.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a5e.prototype={
P(){return new B.aJQ()}}
B.aJQ.prototype={
b7M(d,e){this.a.toString
return},
t(d){var x=this.d
x===$&&A.b()
return new A.kf(x,new B.caB(this),null,null,y.n)},
XZ(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XZ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hd(t,A.u(t).i("hd<1>")).Yb(s.d,!1,B.dMD())
x=2
return A.d(u.jY(0),$async$XZ)
case 2:return A.l(null,w)}})
return A.m($async$XZ,w)},
MF(){var x=0,w=A.n(y.H),v=this,u
var $async$MF=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aI(0)
x=2
return A.d(y.x.b(u)?u:A.e6(u,y.H),$async$MF)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.cY(0),$async$MF)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$MF,w)},
ad(){var x,w=this
w.ao()
x=w.a.c
w.d!==$&&A.bu()
w.d=x
w.XZ()},
m(){this.a6()
this.MF()},
nj(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xN}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.jY(0)
break
case 2:w.cY(0)
break}}}
B.aTA.prototype={}
B.a5h.prototype={
biu(){var x=this
x.CW=$.HY().gavB().Yb(new B.biB(x),!1,new B.biC(x))
x.cx=$.HY().gaD5().li(new B.biD(x))
x.cy=$.HY().gaE9().li(new B.biE(x))},
b83(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aI(0)
w=x.cx
if(w!=null)w.aI(0)
w=x.cy
if(w!=null)w.aI(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.br3(!1,w.r===C.jq?C.jq:C.abi))
return!0},
jY(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$jY=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xS(C.xM,A.xR(null,null,C.xM.geT(0))))
if(s.a.e){x=1
break}r=C.Bm
q=new B.bBT(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.biu()
x=7
return A.d($.HY().lt(0,q),$async$jY)
case 7:p=f
if(!s.db)s.sv(0,s.a.brp(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tz){o=m
if(!s.db)s.sv(0,s.a.brr(C.Bm,o,!0,!1,C.aQ,C.jq,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$jY,w)},
cY(d){var x=0,w=A.n(y.H),v=this
var $async$cY=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b83()?2:3
break
case 2:x=4
return A.d($.HY().cY(0),$async$cY)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cY,w)},
tJ(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tJ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.al(A.xS(C.a1p,A.xR(null,null,C.a1p.geT(0))))
if(u.db)A.al(A.xS(C.xM,A.xR(null,null,C.xM.geT(0))))
if(!t.e){x=1
break}if(t.r===C.jq){x=1
break}x=3
return A.d($.HY().tJ(),$async$tJ)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tJ,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.ha()
x=3
return A.d($.HY().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xT.prototype={
Me(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xT(w,v,f,u,t,s,r,k==null?x.w:k)},
br3(d,e){var x=null
return this.Me(x,x,x,x,d,x,e,x)},
brp(d,e,f,g,h,i){return this.Me(d,e,null,f,g,h,i,null)},
brr(d,e,f,g,h,i,j){return this.Me(null,d,e,f,g,h,i,j)},
bqO(d){var x=null
return this.Me(x,x,x,x,x,x,x,d)},
bqJ(d){var x=null
return this.Me(x,x,x,x,x,x,d,x)}}
B.ayZ.prototype={
t(d){var x=null,w=A.a([D.bK6],y.p)
w.push(A.h(C.k7.geT(0),x,x,x,x,C.aa1,x,x))
return A.ku(A.bG(A.y(w,C.u,C.h,C.I),x,x),C.an,!0)}}
B.bBT.prototype={
ZP(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bBU(),w),w.i("aX.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["D<~>()","D<~>({announce:C})","D<~>(mC)","Xz(N,tz,e?)","ch(N,xT,e?)","e(N,xT,e?)","~(L,c6)"])
B.cKO.prototype={
$1(d){return new H.Fv(I.yd,d,this.a)},
$S:1375}
B.cKL.prototype={
$1(d){return this.a.$0()},
$S:127}
B.cKM.prototype={
$1(d){return this.a.$0()},
$S:127}
B.cKN.prototype={
$1(d){return this.a.$0()},
$S:127}
B.b5u.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:117}
B.cb4.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aI(0)
x.w=A.de(C.eg,new B.cb3(x))},
$S:0}
B.cb3.prototype={
$0(){return this.a.Da(!0)},
$S:0}
B.caZ.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.cb1.prototype={
$0(){var x=this.a
return x.p(new B.cb0(x))},
$S:0}
B.cb0.prototype={
$0(){return this.a.d=!1},
$S:0}
B.cb2.prototype={
$0(){var x=this.a
return x.p(new B.cb_(x))},
$S:0}
B.cb_.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cgD.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cgE.prototype={
$0(){},
$S:0}
B.bW5.prototype={
$0(){return A.an(this.a,!1).ix()},
$S:0}
B.bI5.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bI4())},
$S:58}
B.bI4.prototype={
$0(){},
$S:0}
B.bI3.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ab(w,0,!1).ea(v)
u.z=v>3e7?x:C.lE}},
$S:0}
B.cqH.prototype={
$3(d,e,f){return D.ckX},
$S:z+3}
B.cqI.prototype={
$2(d,e){var x=null,w=this.a.gKo().x
w===$&&A.b()
return A.cd(x,A.w(x,x,C.r,C.uc,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:213}
B.cqJ.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jq)return C.aq
x=t===C.abj
t=x?C.cL:C.dG
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(D.arN,A.b9(u,!0,u,A.eZ(!1,u,!0,A.w(u,A.M(A.a([D.azU,A.w(u,A.h(v,u,u,u,u,A.aI(u,u,x?C.cT:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.E,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.O(t,u,u,w,u,u,C.z),u,u,u,C.dJ,u,u,u)],y.p),C.u,C.h,C.l,0,u),C.r,u,F.kq,D.afZ,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbCJ(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a3,u),u)},
$S:z+4}
B.caB.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.ap0}x=e.c
if(x!=null){w=new B.ayZ(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.jo(new B.caA(this.a,e))},
$S:z+5}
B.caA.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b7M(u,e)
v.a.toString
x=u.f
v=A.ai(1/0,e.a,e.b)
u=A.ai(1/0,e.c,e.d)
w=A.uT(A.Gi(A.DT(C.J,A.aG($.HY().avG(),x.b,x.a),C.r,C.bv),new A.af(v,u)),C.y,null)
return w},
$S:112}
B.biB.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1376}
B.biC.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xb(d)},
$S:66}
B.biD.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqJ(d))},
$S:1377}
B.biE.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqO(d))},
$S:116}
B.bBU.prototype={
$1(d){return d.c},
$S:1378};(function aliases(){var x=B.akP.prototype
x.aPw=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.afp.prototype,"gD9",0,0,null,["$1$announce","$0"],["Da","km"],1,0,0)
var t
w(t=B.ag3.prototype,"gD9","km",0)
w(t,"gaTP","Qw",0)
w(B.abQ.prototype,"gD9","km",0)
v(B.agW.prototype,"gb8R","DK",2)
u(B,"dMD","duL",6)
w(t=B.a5h.prototype,"gbCJ","tJ",0)
w(t,"geG","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.L,[B.aw1,B.U6,B.xT,B.bBT])
v(A.bv,[B.cKO,B.cKL,B.cKM,B.cKN,B.b5u,B.bI5,B.cqH,B.cqJ,B.caB,B.biB,B.biC,B.biD,B.biE,B.bBU])
u(B.Jp,A.ev)
v(A.G,[B.afo,B.ag2,B.V4,B.a5e])
v(A.Z,[B.aTC,B.aTH,B.aTL,B.aTA])
u(B.afp,B.aTC)
v(A.bN,[B.cb4,B.cb3,B.caZ,B.cb1,B.cb0,B.cb2,B.cb_,B.cgD,B.cgE,B.bW5,B.bI4,B.bI3])
u(B.ag3,B.aTH)
v(A.H,[B.adH,B.Pj,B.aeB,B.acq,B.ahR,B.ajt,B.ajc,B.aGS,B.Xz,B.ayZ])
u(B.abP,A.dB)
u(B.aTg,A.dx)
u(B.abQ,B.aTg)
u(B.akP,B.aTL)
u(B.agW,B.akP)
v(A.cM,[B.cqI,B.caA])
u(B.aFh,A.qo)
u(B.aq4,A.fj)
u(B.aJQ,B.aTA)
u(B.a5h,A.d_)
x(B.aTg,A.el)
x(B.aTC,A.el)
x(B.aTH,A.el)
x(B.aTL,A.el)
w(B.akP,A.hQ)
x(B.aTA,A.el)})()
A.bq(b.typeUniverse,JSON.parse('{"afo":{"G":[],"e":[],"f":[]},"ag2":{"G":[],"e":[],"f":[]},"abP":{"G":[],"e":[],"f":[]},"Jp":{"G":[],"e":[],"f":[]},"afp":{"Z":["afo"],"el":[]},"ag3":{"Z":["ag2"],"el":[]},"adH":{"H":[],"e":[],"f":[]},"Pj":{"H":[],"e":[],"f":[]},"aeB":{"H":[],"e":[],"f":[]},"acq":{"H":[],"e":[],"f":[]},"ahR":{"H":[],"e":[],"f":[]},"ajt":{"H":[],"e":[],"f":[]},"ajc":{"H":[],"e":[],"f":[]},"aGS":{"H":[],"e":[],"f":[]},"abQ":{"Z":["abP"],"el":[]},"V4":{"G":[],"e":[],"f":[]},"Xz":{"H":[],"e":[],"f":[]},"agW":{"Z":["V4"],"el":[]},"aFh":{"aW":[]},"a5e":{"G":[],"e":[],"f":[]},"aJQ":{"Z":["a5e"],"el":[]},"a5h":{"d_":["xT"],"aW":[]},"ayZ":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{D:x("cI"),x:x("D<~>"),k:x("r<kP>"),G:x("r<U6>"),v:x("r<fI>"),S:x("r<+at,partner(ab,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dC"),Y:x("U6"),N:x("c"),n:x("kf<xT>"),J:x("lr<mC>"),q:x("di"),z:x("@"),r:x("t<U6>?"),g:x("t<@>?"),X:x("L?"),t:x("aw1?"),E:x("rr?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afe=new A.dT(C.tL,C.a4,C.tL,C.a4)
D.afZ=new A.O(null,null,D.afe,null,null,null,C.z)
D.cpd=new B.ajc("S\xf3 funciona na tua conta",!0,null)
D.aje=new A.f3(C.J,null,null,D.cpd,null)
D.c4U=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.caX=new A.F("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4U,C.a6,null,null,null,null,null,null)
D.bKo=new A.S(C.i7,D.caX,null)
D.aji=new A.f3(C.J,null,null,D.bKo,null)
D.ap_=new A.og(C.cn,!0,D.aji,null)
D.ap0=new A.og(C.an,!0,null,null)
D.aql=new B.aq4(0,0,"noDuplicates")
D.aqm=new B.aq4(1,1,"normal")
D.pV=new A.kz(0.5,0.5,null,null,C.fd,null)
D.arN=new A.a3(0,14,0,0)
D.cgo=new A.F("Lanterna",null,C.cf,null,null,null,null,null,null,null)
D.azU=new A.bJ(1,C.at,D.cgo,null)
D.cmC=new B.aeB("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bPT=new B.V4(420,!0,null,null)
D.bf5=x([D.cmC,C.S,D.bPT],y.p)
D.brU=x([C.tG],y.k)
D.cpU=x([],y.k)
D.byI=x([],y.G)
D.bIX=new A.K(16,2)
D.aCm=new A.aZ(57911,"MaterialIcons",null,!1)
D.aCT=new A.b8(D.aCm,null,C.t,null,null,null)
D.bK6=new A.S(C.N5,D.aCT,null)
D.cd3=new A.F("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cf,null,null,null,null,null,null,null)
D.bKk=new A.S(C.q2,D.cd3,null)
D.chh=new A.F("Sem marca\xe7\xf5es para hoje.",null,C.cf,null,null,null,null,null,null,null)
D.bKJ=new A.S(C.h_,D.chh,null)
D.clC=new B.aFh(null)
D.apW=new A.rZ(D.clC,null,C.aQ,null,null)
D.bPg=new A.eU(0,0,0,0,null,null,D.apW,null)
D.yk=new A.b7(14,14)
D.bQF=new A.X("Bilhete",!1)
D.bRb=new A.X("Organizas",!1)
D.bRL=new A.X("Por entrar",!1)
D.bSa=new A.X("Sem bilhete pago",!1)
D.bXJ=new A.k9(186,186,8,C.ff,0,null)
D.c9i=new A.F("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bZ3=new A.bH(D.c9i,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.y,null)
D.c8h=new A.F("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cf,C.a6,null,null,null,null,null,null)
D.cb5=new A.F("Entrada",null,C.hV,null,null,null,null,null,null,null)
D.cf9=new A.F("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.cfu=new A.F("\xc0 procura de um QR\u2026",null,C.kj,null,null,null,null,null,null,null)
D.ch2=new A.F("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.ckP=new B.abP(null)
D.ckX=new B.Xz(null)
D.cln=new B.acq("D\xc1 ENTRADA EM",null)
D.clo=new B.acq("HOJE",null)
D.cmD=new B.aeB("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cnI=new B.afo(null)
D.co_=new B.ag2(null)})()};
(a=>{a["idDfgMfyonzHQkgYYukzemLOA34="]=a.current})($__dart_deferred_initializers__);