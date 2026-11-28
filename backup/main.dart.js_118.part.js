((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dMN(d){var x,w,v=A.aU("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fB(C.f.C(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aNd(w,x)},
cJz(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJz=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.ie("partner_today",y.z),$async$cJz)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.an(o==null?C.aj:o)
while(o.q()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.p(n==null?"Evento":n)
m=A.y(J.i(q,"booking_number"))
l=A.aF(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aF(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bn(r,new A.aNE([k,n,m,l]))}}p=A.aF(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aF(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.aw0(r,p,o)
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
return A.m($async$cJz,w)},
aw0:function aw0(d,e,f){this.a=d
this.b=e
this.c=f},
duI(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a6(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
g=A.p(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d_(A.p(x==null?"":x))
w=A.y(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.y(J.i(i,"status")):k
if(s){s=A.aF(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aF(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d_(A.p(p==null?"":p))
p=p==null?k:p.dH()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.an(j==null?C.aj:j)
while(j.q()){n=j.gE(j)
if(t.b(n)&&A.d_(A.p(J.i(n,"at")))!=null){m=J.a6(n)
l=m.h(n,"partner")
l=A.p(l==null?"Parceiro":l)
o.push(new A.aN0(A.d9(A.p(m.h(n,"at"))).dH(),l))}}return new B.U5(h,g,x,w,v,u,r,s,q,p,o)},
cJx(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJx=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.ie("my_entries",y.z),$async$cJx)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.an(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.bn(r,B.duI(q))}v=r
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
return A.m($async$cJx,w)},
dM6(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbs().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKF(w)
u=u.ch
u===$&&A.b()
return u.M_(0,"entries-"+w,C.yp).NT(new B.cKC(d),C.GS,x.$1("user_id"),v,"event_checkins").NT(new B.cKD(d),C.GS,x.$1("user_id"),v,"booking_arrivals").NT(new B.cKE(d),C.GT,x.$1("buyer_id"),v,"event_tickets").PJ(0)},
U5:function U5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKF:function cKF(d){this.a=d},
cKC:function cKC(d){this.a=d},
cKD:function cKD(d){this.a=d},
cKE:function cKE(d){this.a=d},
drg(){return new B.Jq(null)},
ddC(d){return C.f.aN(C.j.k(A.i0(d)),2,"0")+":"+C.f.aN(C.j.k(A.hN(d)),2,"0")},
Jq:function Jq(d){this.a=d},
b5w:function b5w(){},
afm:function afm(d){this.a=d},
afn:function afn(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
cb0:function cb0(d){this.a=d},
cb_:function cb_(d){this.a=d},
caV:function caV(d,e){this.a=d
this.b=e},
caY:function caY(d){this.a=d},
caX:function caX(d){this.a=d},
caZ:function caZ(d){this.a=d},
caW:function caW(d){this.a=d},
ag0:function ag0(d){this.a=d},
ag1:function ag1(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgx:function cgx(d,e){this.a=d
this.b=e},
cgy:function cgy(){},
adF:function adF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bW3:function bW3(d){this.a=d},
Pj:function Pj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aez:function aez(d,e){this.c=d
this.a=e},
aco:function aco(d,e){this.c=d
this.a=e},
ahO:function ahO(d,e){this.c=d
this.a=e},
ajr:function ajr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aja:function aja(d,e,f){this.c=d
this.d=e
this.a=f},
aGS:function aGS(d,e){this.c=d
this.a=e},
abN:function abN(d){this.a=d},
abO:function abO(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bI3:function bI3(d){this.a=d},
bI2:function bI2(){},
bI1:function bI1(d,e){this.a=d
this.b=e},
aTi:function aTi(){},
aTE:function aTE(){},
aTJ:function aTJ(){},
V3:function V3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agT:function agT(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.e7$=e
_.bB$=f
_.c=_.a=null},
cqz:function cqz(){},
cqA:function cqA(d,e){this.a=d
this.b=e},
cqB:function cqB(d){this.a=d},
Xy:function Xy(d){this.a=d},
aFh:function aFh(d){this.a=d},
aTN:function aTN(){},
akN:function akN(){},
aq1:function aq1(d,e,f){this.c=d
this.a=e
this.b=f},
duy(d,e){},
a5c:function a5c(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJQ:function aJQ(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
cax:function cax(d){this.a=d},
caw:function caw(d,e){this.a=d
this.b=e},
aTC:function aTC(){},
duv(d,e){var x=null,w=d===D.aqk?250:0
return new B.a5f(d,w,e,new A.ls(x,x,y.J),new B.xU(x,C.Bi,x,!1,!1,C.aR,C.jo,1),$.ab())},
a5f:function a5f(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.X$=0
_.a_$=i
_.aF$=_.bt$=0},
biC:function biC(d){this.a=d},
biD:function biD(d){this.a=d},
biE:function biE(d){this.a=d},
biF:function biF(d){this.a=d},
xU:function xU(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayY:function ayY(d){this.a=d},
bBR:function bBR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bBS:function bBS(){}},D,E,F,G,H,I,K,L,M
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
B.aw0.prototype={}
B.U5.prototype={}
B.Jq.prototype={
b8(d,e){var x=y.E
return e.G(A.cA($.bb(),new B.b5w(),y.D,x),x)===C.d4?D.co7:D.cnQ}}
B.afm.prototype={
P(){return new B.afn()}}
B.afn.prototype={
ad(){var x=this
x.ao()
$.aA.b3$.push(x)
x.km()
x.r=B.dM6(new B.cb0(x))},
m(){var x,w,v=this
$.aA.ic(v)
x=v.w
if(x!=null)x.aI(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y4(x)}v.a6()},
nj(d){if(d===C.et)this.km()},
Da(d){return this.b6Z(d)},
km(){return this.Da(!1)},
b6Z(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Da=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.F(y.N,y.Y)
o=u.e
o=J.an(o==null?D.byH:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJx(),$async$Da)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.caV(u,s))
if(!d||s==null){x=1
break}for(o=J.an(s);o.q();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null)
p.a4(new A.bI(o,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.x,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Da,w)},
t(d){var x,w,v,u=this,t=null,s=u.e,r=u.gD9(),q=u.d,p=y.p
q=A.a([new B.Pj("QR code",C.vm,!q,new B.caY(u),t),new B.Pj("Scannear",C.vr,q,new B.caZ(u),t)],p)
if(u.d)p=D.bf4
else{x=A.a([D.ckW,C.S,D.ajc,C.bQ,D.clv,C.ap],p)
w=s==null
if(w&&!u.f)x.push(L.a8G)
else if(w)x.push(new B.ahO(r,t))
else{w=J.a6(s)
if(w.gY(s))x.push(D.bKk)
else{v=A.a([],p)
for(w=w.gW(s);w.q();)C.e.n(v,A.a([D.pS,new B.aGS(w.gE(w),t)],p))
v.push(D.pS)
C.e.n(x,v)}}p=x}return new B.adF(r,q,p,t)}}
B.ag0.prototype={
P(){return new B.ag1()}}
B.ag1.prototype={
ad(){this.ao()
$.aA.b3$.push(this)
this.km()},
m(){$.aA.ic(this)
this.a6()},
nj(d){if(d===C.et)this.km()},
km(){var x=0,w=A.n(y.H),v,u=this,t
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJz(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cgx(u,t))
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
Qv(){var x=0,w=A.n(y.H),v=this,u
var $async$Qv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ae(u).ag("/cobrar",null,y.X),$async$Qv)
case 2:if(v.c!=null)v.km()
return A.l(null,w)}})
return A.m($async$Qv,w)},
t(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gD9(),k=y.p,j=A.a([new B.Pj("Scannear",C.vr,!0,new B.cgy(),n),new B.Pj("Cobrar",C.lQ,!1,o.gaTP(),n)],k),i=A.a([D.cmL,C.S,new B.V3(290,!1,l,n),C.bQ,D.clw,C.ap],k),h=m==null
if(h&&!o.e)i.push(G.a8D)
else if(h)i.push(new B.ahO(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKK)
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
t=p}C.e.n(h,A.a([D.pS,new B.ajr(s,r,t,q>0,n,n)],k))}h.push(D.pS)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.ajr("Cobrado hoje",k,n,!1,E.cIU(m.b),n))
h.push(D.pS)
C.e.n(i,h)}return new B.adF(l,j,i,n)}}
B.adF.prototype={
t(d){var x=null,w=C.D0.B(0,new A.a3(0,A.aT(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.dd(C.bi,x,x,A.pY(C.lO,new B.bW3(d),"Voltar"),x),C.S,D.cbb,C.aB,A.em(C.bl,this.d,C.r,C.bq,8,8),C.aB],y.p)
C.e.n(v,this.e)
return A.cO(x,C.bA,A.bF(!0,A.B5(A.d3(v,x,w,x,x,!1,!1),x,this.c),x,C.Y,!1),!0,x)}}
B.Pj.prototype={
t(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.ay:C.t
return A.bh(w,!0,w,A.hj(!1,C.aN,!0,w,A.f_(!1,w,!0,A.aG(new A.S(C.c_,A.N(A.a([A.b4(x.d,u,w,w,16),C.bg,A.h(x.c,w,w,w,w,A.aH(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.E,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.u,C.h,C.I,0,w),w),38,w),C.a9,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.a9,w,w,C.cX),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.aez.prototype={
t(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x)}}
B.aco.prototype={
t(d){var x=null
return A.h(this.c,x,x,x,x,C.aH,x,x)}}
B.ahO.prototype={
t(d){var x=null
return new A.S(C.q_,A.x(A.a([D.c8n,new A.am(A.cR(C.t5,x,x,this.c,x,x),x)],y.p),C.u,C.h,C.l),x)}}
B.ajr.prototype={
t(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.aa,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u))
t=A.a([A.a5(A.x(s,C.G,C.h,C.l),1),C.af],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cL:C.dG
w=A.W(999)
t.push(A.w(u,A.h(s,u,u,u,u,A.aH(u,u,r?C.cU:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.E,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.O(x,u,u,w,u,u,C.y),u,u,u,C.dJ,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.aa,u,u))
return new A.S(C.co,A.N(t,C.u,C.h,C.l,0,u),u)}}
B.aja.prototype={
t(d){var x=null,w=this.d,v=w?C.cL:C.dG,u=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?C.cU:C.cn,x,x,x,x,x,x,x,x,12,x,x,C.E,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.O(v,x,x,u,x,x,C.y),x,x,x,C.dJ,x,x,x)}}
B.aGS.prototype={
t(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.cP[A.ey(l)-1]+", "+A.aw(l)+" "+C.bd[A.aq(l)-1])
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
if(k!=null)s=new A.X("Entrou \xe0s "+B.ddC(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.ddC(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSb
else if(x)k=D.bRc
else k=m.f?D.bQG:D.bRM
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.aa,n,n)],k)
if(u.length!==0)x.push(new A.S(K.N3,A.h(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.co,A.N(A.a([A.a5(A.x(x,C.G,C.h,C.l),1),C.af,new B.aja(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abN.prototype={
P(){return new B.abO(new A.aa(Date.now(),0,!1),C.lC)}}
B.abO.prototype={
ad(){var x=this
x.ao()
$.aA.b3$.push(x)
x.km()
x.as=A.rn(C.hu,new B.bI3(x))},
m(){var x,w=this
$.aA.ic(w)
x=w.Q
if(x!=null)x.aI(0)
x=w.as
if(x!=null)x.aI(0)
w.a6()},
nj(d){var x
if(d===C.et)this.km()
else if(d===C.mK){x=this.Q
if(x!=null)x.aI(0)}},
km(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$km=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aI(0)
x=3
return A.d(A.alD(),$async$km)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bI1(u,t))
s=t==null?null:t.b
if(s==null)s=C.jL
u.Q=A.de(s,u.gD9())
case 1:return A.l(v,w)}})
return A.m($async$km,w)},
t(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().G($.bb(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.C(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.C(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cc(new A.aa(Date.now(),0,!1)).a
v=x<0?0:C.k.eF(C.j.aL(x,1000)/1000)
u=C.k.ah(C.j.aL(x,1000)/C.j.aL(o.z.a,1000),0,1)
x=A.W(16)
t=A.bE(C.fd,0.5)
s=A.W(16)
r=A.bE(C.fd,0.5)
k=!k
if(k)q=A.axb(C.t,A.kp("/q/"+l.a),C.yf,C.yg,C.Y,"C\xf3digo QR da conta",186)
else q=o.x?D.bXK:A.bG(A.x(A.a([C.Pm,C.aE,D.cfg,new A.am(A.cR(C.t5,n,n,o.gD9(),n,n),n)],y.p),C.u,C.h,C.I),n,n)
p=y.p
s=A.a([A.w(n,A.aG(q,186,186),C.r,n,n,new A.O(C.t,n,r,s,n,n,C.y),n,n,n,C.cM,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ae,A.w(C.bi,A.arJ(C.J,A.w(n,n,C.r,n,n,new A.O(C.u8,n,n,A.W(2),n,n,C.y),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.O(C.fd,n,n,k,n,n,C.y),n,4,n,n,n,n,214),C.aE,A.bh(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.S)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.N(A.a([new A.cg(k,32,r,!1,!0,n),C.af,new A.dg(1,C.be,A.x(A.a([A.h(w,n,n,n,n,C.aa,n,n),D.ch9],p),C.G,C.h,C.l),n)],p),C.u,C.bT,C.l,0,n))
return A.w(n,A.x(s,C.u,C.h,C.l),C.r,n,n,new A.O(C.t,n,t,x,n,n,C.y),n,n,n,C.cM,n,n,n)}}
B.aTi.prototype={}
B.aTE.prototype={}
B.aTJ.prototype={}
B.V3.prototype={
P(){return new B.agT(B.duv(D.aqj,D.brT),null,null)}}
B.agT.prototype={
gKo(){var x,w=this,v=w.e
if(v===$){x=A.cF(null,M.MT,null,null,w)
w.e!==$&&A.b_()
w.e=x
v=x}return v},
ad(){this.ao()
$.aA.b3$.push(this)},
bX(){var x,w,v=this
v.dI()
x=v.c
x.toString
if(A.aT(x,null,y.w).w.ax)v.gKo().cY(0)
else{x=v.gKo()
w=x.r
if(!(w!=null&&w.a!=null))x.aCw(0,!0)}},
nj(d){if(this.f)return
if(d===C.et)this.d.jY(0)
else if(d===C.mK)this.d.cY(0)},
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
break}p=B.dMN(t)
if(p==null){s=u.c.O(y.q).f
s.XN()
s.a4(D.bZ4)
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
s=A.a([A.hX(A.W(16),A.aG(new A.by(C.aw,w,C.e0,C.x,A.a([C.iF,new B.a5c(t,x.gb8R(),new B.cqz(),w),A.bG(A.aG(new A.by(C.aw,w,C.aC,C.x,A.a([D.bPh,A.eW(x.gKo(),new B.cqA(x,u),w)],s),w),u,u),w,w),A.ca(16,A.bG(A.w(w,D.cfB,C.r,w,w,new A.O(C.t,w,w,A.W(999),w,w,C.y),w,w,w,C.dJ,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bh)],s)
if(x.a.d)s.push(new A.kg(t,new B.cqB(x),w,w,y.n))
return A.x(s,C.F,C.h,C.l)}}
B.Xy.prototype={
t(d){return D.aoX}}
B.aFh.prototype={
aX(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aC(),m=A.bd()
m.r=C.t.gv(0)
m.b=C.bS
m.c=4
m.d=C.ip
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cG(n,C.aP,o,o,A.a([],v))
u.aq(new A.f2(2,44))
u.aq(new A.cT(2,16))
u.Al(D.bIX,D.yh)
u.aq(new A.cT(44,2))
d.dQ(u,m)
u=new A.cG(n,C.aP,o,o,A.a([],v))
t=x-44
u.aq(new A.f2(t,2))
s=x-16
u.aq(new A.cT(s,2))
r=x-2
u.Al(new A.K(r,16),D.yh)
u.aq(new A.cT(r,44))
d.dQ(u,m)
u=new A.cG(n,C.aP,o,o,A.a([],v))
q=w-44
u.aq(new A.f2(r,q))
p=w-16
u.aq(new A.cT(r,p))
r=w-2
u.Al(new A.K(s,r),D.yh)
u.aq(new A.cT(t,r))
d.dQ(u,m)
v=new A.cG(n,C.aP,o,o,A.a([],v))
v.aq(new A.f2(44,r))
v.aq(new A.cT(16,r))
v.Al(new A.K(2,p),D.yh)
v.aq(new A.cT(2,q))
d.dQ(v,m)},
dN(d){return!1}}
B.aTN.prototype={}
B.akN.prototype={
m(){var x=this,w=x.bB$
if(w!=null)w.a2(0,x.gfI())
x.bB$=null
x.a6()},
bS(){this.cr()
this.cN()
this.fJ()}}
B.aq1.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a5c.prototype={
P(){return new B.aJQ()}}
B.aJQ.prototype={
b7M(d,e){this.a.toString
return},
t(d){var x=this.d
x===$&&A.b()
return new A.kg(x,new B.cax(this),null,null,y.n)},
XW(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XW=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hd(t,A.u(t).i("hd<1>")).Y8(s.d,!1,B.dMq())
x=2
return A.d(u.jY(0),$async$XW)
case 2:return A.l(null,w)}})
return A.m($async$XW,w)},
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
w.XW()},
m(){this.a6()
this.MF()},
nj(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xK}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.jY(0)
break
case 2:w.cY(0)
break}}}
B.aTC.prototype={}
B.a5f.prototype={
bit(){var x=this
x.CW=$.I_().gavB().Y8(new B.biC(x),!1,new B.biD(x))
x.cx=$.I_().gaD5().li(new B.biE(x))
x.cy=$.I_().gaE9().li(new B.biF(x))},
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
x.sv(0,w.br2(!1,w.r===C.jo?C.jo:C.abf))
return!0},
jY(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$jY=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xT(C.xJ,A.xS(null,null,C.xJ.geT(0))))
if(s.a.e){x=1
break}r=C.Bi
q=new B.bBR(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bit()
x=7
return A.d($.I_().lt(0,q),$async$jY)
case 7:p=f
if(!s.db)s.sv(0,s.a.bro(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tz){o=m
if(!s.db)s.sv(0,s.a.brq(C.Bi,o,!0,!1,C.aR,C.jo,1))}else throw l
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
return A.d($.I_().cY(0),$async$cY)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cY,w)},
tJ(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tJ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.al(A.xT(C.a1j,A.xS(null,null,C.a1j.geT(0))))
if(u.db)A.al(A.xT(C.xJ,A.xS(null,null,C.xJ.geT(0))))
if(!t.e){x=1
break}if(t.r===C.jo){x=1
break}x=3
return A.d($.I_().tJ(),$async$tJ)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tJ,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.ha()
x=3
return A.d($.I_().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xU.prototype={
Me(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xU(w,v,f,u,t,s,r,k==null?x.w:k)},
br2(d,e){var x=null
return this.Me(x,x,x,x,d,x,e,x)},
bro(d,e,f,g,h,i){return this.Me(d,e,null,f,g,h,i,null)},
brq(d,e,f,g,h,i,j){return this.Me(null,d,e,f,g,h,i,j)},
bqN(d){var x=null
return this.Me(x,x,x,x,x,x,x,d)},
bqI(d){var x=null
return this.Me(x,x,x,x,x,x,d,x)}}
B.ayY.prototype={
t(d){var x=null,w=A.a([D.bK6],y.p)
w.push(A.h(C.k5.geT(0),x,x,x,x,C.a9Z,x,x))
return A.ku(A.bG(A.x(w,C.u,C.h,C.I),x,x),C.ao,!0)}}
B.bBR.prototype={
ZN(){var x,w,v=this,u=A.F(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bBS(),w),w.i("aX.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["D<~>()","D<~>({announce:C})","D<~>(mE)","Xy(M,tz,e?)","ch(M,xU,e?)","e(M,xU,e?)","~(L,c6)"])
B.cKF.prototype={
$1(d){return new H.Fx(I.ya,d,this.a)},
$S:1375}
B.cKC.prototype={
$1(d){return this.a.$0()},
$S:127}
B.cKD.prototype={
$1(d){return this.a.$0()},
$S:127}
B.cKE.prototype={
$1(d){return this.a.$0()},
$S:127}
B.b5w.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:117}
B.cb0.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aI(0)
x.w=A.de(C.eh,new B.cb_(x))},
$S:0}
B.cb_.prototype={
$0(){return this.a.Da(!0)},
$S:0}
B.caV.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.caY.prototype={
$0(){var x=this.a
return x.p(new B.caX(x))},
$S:0}
B.caX.prototype={
$0(){return this.a.d=!1},
$S:0}
B.caZ.prototype={
$0(){var x=this.a
return x.p(new B.caW(x))},
$S:0}
B.caW.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cgx.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cgy.prototype={
$0(){},
$S:0}
B.bW3.prototype={
$0(){return A.ap(this.a,!1).ji()},
$S:0}
B.bI3.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bI2())},
$S:58}
B.bI2.prototype={
$0(){},
$S:0}
B.bI1.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.aa(w,0,!1).ea(v)
u.z=v>3e7?x:C.lC}},
$S:0}
B.cqz.prototype={
$3(d,e,f){return D.cl4},
$S:z+3}
B.cqA.prototype={
$2(d,e){var x=null,w=this.a.gKo().x
w===$&&A.b()
return A.ca(x,A.w(x,x,C.r,C.u8,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:213}
B.cqB.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jo)return C.ag
x=t===C.abg
t=x?C.cL:C.dG
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(D.arM,A.bh(u,!0,u,A.f_(!1,u,!0,A.w(u,A.N(A.a([D.azT,A.w(u,A.h(v,u,u,u,u,A.aH(u,u,x?C.cU:C.cn,u,u,u,u,u,u,u,u,12,u,u,C.E,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.O(t,u,u,w,u,u,C.y),u,u,u,C.dJ,u,u,u)],y.p),C.u,C.h,C.l,0,u),C.r,u,F.ko,D.afX,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbCI(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.cax.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aoY}x=e.c
if(x!=null){w=new B.ayY(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.jp(new B.caw(this.a,e))},
$S:z+5}
B.caw.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b7M(u,e)
v.a.toString
x=u.f
v=A.ai(1/0,e.a,e.b)
u=A.ai(1/0,e.c,e.d)
w=A.uW(A.Gk(A.DV(C.J,A.aG($.I_().avG(),x.b,x.a),C.r,C.bx),new A.af(v,u)),C.x,null)
return w},
$S:112}
B.biC.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1376}
B.biD.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xc(d)},
$S:67}
B.biE.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqI(d))},
$S:1377}
B.biF.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqN(d))},
$S:116}
B.bBS.prototype={
$1(d){return d.c},
$S:1378};(function aliases(){var x=B.akN.prototype
x.aPw=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.afn.prototype,"gD9",0,0,null,["$1$announce","$0"],["Da","km"],1,0,0)
var t
w(t=B.ag1.prototype,"gD9","km",0)
w(t,"gaTP","Qv",0)
w(B.abO.prototype,"gD9","km",0)
v(B.agT.prototype,"gb8R","DK",2)
u(B,"dMq","duy",6)
w(t=B.a5f.prototype,"gbCI","tJ",0)
w(t,"geG","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.L,[B.aw0,B.U5,B.xU,B.bBR])
v(A.bv,[B.cKF,B.cKC,B.cKD,B.cKE,B.b5w,B.bI3,B.cqz,B.cqB,B.cax,B.biC,B.biD,B.biE,B.biF,B.bBS])
u(B.Jq,A.ev)
v(A.G,[B.afm,B.ag0,B.V3,B.a5c])
v(A.Z,[B.aTE,B.aTJ,B.aTN,B.aTC])
u(B.afn,B.aTE)
v(A.bO,[B.cb0,B.cb_,B.caV,B.caY,B.caX,B.caZ,B.caW,B.cgx,B.cgy,B.bW3,B.bI2,B.bI1])
u(B.ag1,B.aTJ)
v(A.H,[B.adF,B.Pj,B.aez,B.aco,B.ahO,B.ajr,B.aja,B.aGS,B.Xy,B.ayY])
u(B.abN,A.dB)
u(B.aTi,A.dx)
u(B.abO,B.aTi)
u(B.akN,B.aTN)
u(B.agT,B.akN)
v(A.cM,[B.cqA,B.caw])
u(B.aFh,A.qq)
u(B.aq1,A.fj)
u(B.aJQ,B.aTC)
u(B.a5f,A.cZ)
x(B.aTi,A.el)
x(B.aTE,A.el)
x(B.aTJ,A.el)
x(B.aTN,A.el)
w(B.akN,A.hQ)
x(B.aTC,A.el)})()
A.bq(b.typeUniverse,JSON.parse('{"afm":{"G":[],"e":[],"f":[]},"ag0":{"G":[],"e":[],"f":[]},"abN":{"G":[],"e":[],"f":[]},"Jq":{"G":[],"e":[],"f":[]},"afn":{"Z":["afm"],"el":[]},"ag1":{"Z":["ag0"],"el":[]},"adF":{"H":[],"e":[],"f":[]},"Pj":{"H":[],"e":[],"f":[]},"aez":{"H":[],"e":[],"f":[]},"aco":{"H":[],"e":[],"f":[]},"ahO":{"H":[],"e":[],"f":[]},"ajr":{"H":[],"e":[],"f":[]},"aja":{"H":[],"e":[],"f":[]},"aGS":{"H":[],"e":[],"f":[]},"abO":{"Z":["abN"],"el":[]},"V3":{"G":[],"e":[],"f":[]},"Xy":{"H":[],"e":[],"f":[]},"agT":{"Z":["V3"],"el":[]},"aFh":{"aW":[]},"a5c":{"G":[],"e":[],"f":[]},"aJQ":{"Z":["a5c"],"el":[]},"a5f":{"cZ":["xU"],"aW":[]},"ayY":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{D:x("cI"),x:x("D<~>"),k:x("r<kQ>"),G:x("r<U5>"),v:x("r<fJ>"),S:x("r<+at,partner(aa,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a4<@,@>"),w:x("dC"),Y:x("U5"),N:x("c"),n:x("kg<xU>"),J:x("ls<mE>"),q:x("dj"),z:x("@"),r:x("t<U5>?"),g:x("t<@>?"),X:x("L?"),t:x("aw0?"),E:x("rr?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afb=new A.dT(C.tH,C.ad,C.tH,C.ad)
D.afX=new A.O(null,null,D.afb,null,null,null,C.y)
D.cpn=new B.aja("S\xf3 funciona na tua conta",!0,null)
D.ajc=new A.eX(C.J,null,null,D.cpn,null)
D.c4Z=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cb2=new A.E("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4Z,C.a3,null,null,null,null,null,null)
D.bKo=new A.S(C.i6,D.cb2,null)
D.ajg=new A.eX(C.J,null,null,D.bKo,null)
D.aoX=new A.oi(C.cn,!0,D.ajg,null)
D.aoY=new A.oi(C.ao,!0,null,null)
D.aqj=new B.aq1(0,0,"noDuplicates")
D.aqk=new B.aq1(1,1,"normal")
D.pS=new A.kA(0.5,0.5,null,null,C.fd,null)
D.arM=new A.a3(0,14,0,0)
D.cgv=new A.E("Lanterna",null,C.ce,null,null,null,null,null,null,null)
D.azT=new A.bK(1,C.au,D.cgv,null)
D.cmK=new B.aez("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bPU=new B.V3(420,!0,null,null)
D.bf4=x([D.cmK,C.S,D.bPU],y.p)
D.brT=x([C.tD],y.k)
D.cq3=x([],y.k)
D.byH=x([],y.G)
D.bIX=new A.K(16,2)
D.aCl=new A.aZ(57911,"MaterialIcons",null,!1)
D.aCS=new A.ba(D.aCl,null,C.t,null,null,null)
D.bK6=new A.S(C.N_,D.aCS,null)
D.cd9=new A.E("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.ce,null,null,null,null,null,null,null)
D.bKk=new A.S(C.q_,D.cd9,null)
D.cho=new A.E("Sem marca\xe7\xf5es para hoje.",null,C.ce,null,null,null,null,null,null,null)
D.bKK=new A.S(C.fZ,D.cho,null)
D.clK=new B.aFh(null)
D.apT=new A.rZ(D.clK,null,C.aR,null,null)
D.bPh=new A.eU(0,0,0,0,null,null,D.apT,null)
D.yh=new A.b7(14,14)
D.bQG=new A.X("Bilhete",!1)
D.bRc=new A.X("Organizas",!1)
D.bRM=new A.X("Por entrar",!1)
D.bSb=new A.X("Sem bilhete pago",!1)
D.bXK=new A.ka(186,186,8,C.fe,0,null)
D.c9o=new A.E("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bZ4=new A.bI(D.c9o,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.x,null)
D.c8n=new A.E("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.ce,C.a3,null,null,null,null,null,null)
D.cbb=new A.E("Entrada",null,C.hT,null,null,null,null,null,null,null)
D.cfg=new A.E("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.cfB=new A.E("\xc0 procura de um QR\u2026",null,C.kh,null,null,null,null,null,null,null)
D.ch9=new A.E("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.ckW=new B.abN(null)
D.cl4=new B.Xy(null)
D.clv=new B.aco("D\xc1 ENTRADA EM",null)
D.clw=new B.aco("HOJE",null)
D.cmL=new B.aez("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cnQ=new B.afm(null)
D.co7=new B.ag0(null)})()};
(a=>{a["hoFQ2gYXDIM9sNjUA1cHnGgEjgI="]=a.current})($__dart_deferred_initializers__);