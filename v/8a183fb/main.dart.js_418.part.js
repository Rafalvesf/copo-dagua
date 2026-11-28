((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,H,I,E,K,C={ki:function ki(d,e){this.a=d
this.b=e},
Q3(d){var x=0,w=A.n(y.T),v,u,t,s,r,q,p,o,n
var $async$Q3=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.alO(null,d),$async$Q3)
case 3:u=$.R().b
u===$&&A.b()
x=4
return A.d(u.R("bookings").am(0,"status, total_amount, deposit_amount, payments(type, status)").V("proposal_id",d).d1(0,"created_at",!1).hS(1).cS(),$async$Q3)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a7(t)
s=A.C(u.h(t,"status"))
if(s==null)s=""
if(B.f.b2(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
q=new C.cJ3(r==null?B.am:r)
if(q.$2("final_payment","pending")){v="final_due"
x=1
break}if(q.$2("final_payment","paid")){v="paid"
x=1
break}if(s==="completed"){v="completed"
x=1
break}p=A.aL(u.h(t,"total_amount"))
o=p==null?null:p
if(o==null)o=0
if(o>0){u=A.aL(u.h(t,"deposit_amount"))
if(u==null)u=null
n=(u==null?0:u)>=o}else n=!1
if(n&&q.$2("deposit","paid")){v="paid"
x=1
break}if(q.$2("deposit","paid")||s==="confirmed"){v="deposit_paid"
x=1
break}v="deposit_due"
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Q3,w)},
cJ3:function cJ3(d){this.a=d},
cJ4:function cJ4(d,e){this.a=d
this.b=e},
d2f(d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new C.jB(j,h,i,q,p,m,o,n,l,k,g,f,e,d)},
jB:function jB(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.ay=q},
dbY(d,e){var x
if(e==null)return""
if(d==="date"){x=A.dh(e)
if(x!=null)return B.dY[A.fR(x)-1]+", "+A.aH(x)+" "+B.bG[A.au(x)-1]}if(d==="people")return e+" pessoas"
return e},
R7:function R7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDT:function aDT(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
bNe:function bNe(d,e){this.a=d
this.b=e},
bNc:function bNc(d){this.a=d},
bNd:function bNd(d){this.a=d},
bNf:function bNf(d,e){this.a=d
this.b=e},
bNg:function bNg(d,e){this.a=d
this.b=e},
bNh:function bNh(d,e){this.a=d
this.b=e},
bNi:function bNi(d,e){this.a=d
this.b=e},
dck(d){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=A.W(22),k=y.p,j=A.a([],k)
for(x=J.a7(d),w=0;w<x.gA(d);++w){v=w===x.gA(d)-1?m:B.i3
u=new A.b2(12,12)
u=A.B(m,D.aE2,B.r,m,m,new A.L(B.cq,m,m,new A.cd(u,u,u,u),m,m,B.y),m,44,m,m,m,m,44)
t=A.a([A.h(x.h(d,w).a,m,m,m,m,B.ae,m,m,m)],k)
if(x.h(d,w).b.length!==0)t.push(A.h(x.h(d,w).b,m,m,m,m,B.O,m,m,m))
t=A.y(t,B.H,B.h,B.l,0,B.u)
s=x.h(d,w)
r=new A.b2(999,999)
if(x.h(d,w).f==null)q=m
else{q=x.h(d,w).f
q.toString
p=new A.bb(q,1.5,B.ai,-1)
q=new A.dS(p,p,p,p)}o=x.h(d,w)
n=x.h(d,w)
j.push(A.B(m,A.N(A.a([u,B.af,new A.bJ(1,B.au,t,m),B.ag,A.B(m,A.h(o.c,m,m,m,m,new A.P(!0,n.e,m,m,m,m,12,B.F,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),B.r,m,m,new A.L(s.d,m,q,new A.cd(r,r,r,r),m,m,B.y),m,m,m,B.i7,m,m,m)],k),B.w,B.h,B.l,0,m,m),B.r,m,B.i4,new A.L(m,m,v,m,m,m,B.y),m,m,m,B.dV,m,m,m))}return A.B(m,A.y(j,B.w,B.h,B.l,0,B.u),B.r,m,m,new A.L(B.a7,m,m,l,m,m,B.y),m,m,m,B.cP,m,m,m)},
dFm(d,e,f){var x,w,v=null,u="Cancelado",t=A.a(d.split(" \xb7 "),y.s),s=B.e.gK(t),r=A.dM(t,1,v,y.N).a0(0," \xb7 ")
if(e!=null){x=A.C(J.i(e,"status"))
switch(x==null?"":x){case"confirmed":x=new C.ng(s,r,"Reservado",B.cJ,B.d_,v)
break
case"completed":x=new C.ng(s,r,"Conclu\xeddo",B.e2,B.cq,v)
break
case"awaiting_deposit":x=new C.ng(s,r,"Aceite",B.t,B.A,B.dL)
break
default:x=new C.ng(s,r,u,B.e2,B.cq,v)
break}return x}x=f==null
w=A.C(x?v:J.i(f,"status"))
if(w==null)w=""
if((x?v:J.i(f,"cancelled_at"))!=null)return new C.ng(s,r,u,B.e2,B.cq,v)
A:{if("proposal_sent"===w){x=new C.ng(s,r,"Proposta",B.t,B.A,B.dL)
break A}if("pending"===w||"viewed"===w){x=new C.ng(s,r,"Pedido",B.t,B.A,B.dL)
break A}if("accepted"===w){x=new C.ng(s,r,"Aceite",B.cJ,B.d_,v)
break A}x=new C.ng(s,r,"Sem resposta",B.e2,B.cq,v)
break A}return x},
akX(d,e,f){return C.dFn(d,e,f)},
dFn(a4,a5,a6){var x=0,w=A.n(y.o),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$akX=A.j(function(a7,a8){if(a7===1){t.push(a8)
x=u}for(;;)switch(x){case 0:if(a6.length===0){v=new A.agN([0,B.a8,0,D.bAf])
x=1
break}s=B.am
r=B.am
u=4
q=$.R().b
q===$&&A.b()
x=7
return A.d(q.R("bookings").am(0,"id, wedding_id, status, total_amount").V("partner_id",a5).dV("wedding_id",a6),$async$akX)
case 7:s=a8
u=2
x=6
break
case 4:u=3
a2=t.pop()
x=6
break
case 3:x=2
break
case 6:u=9
q=$.R().b
q===$&&A.b()
x=12
return A.d(q.R("quote_requests").am(0,"id, wedding_id, status, cancelled_at, created_at").V("partner_id",a5).dV("wedding_id",a6).d1(0,"created_at",!1),$async$akX)
case 12:r=a8
u=2
x=11
break
case 9:u=8
a3=t.pop()
x=11
break
case 8:x=2
break
case 11:q=y.N
o=y.P
n=A.E(q,o)
for(m=J.bh(s,o),l=A.u(m),m=new A.al(m,m.gA(m),l.i("al<V.E>")),l=l.i("V.E");m.t();){k=m.d
if(k==null)k=l.a(k)
j=J.a7(k)
i=A.a_(j.h(k,"wedding_id"))
h=A.C(j.h(k,"status"))
if(h==null)h=""
if(!n.aw(0,i)||h==="confirmed"||h==="completed")n.j(0,i,k)}g=A.E(q,o)
for(o=J.bh(r,o),m=A.u(o),o=new A.al(o,o.gA(o),m.i("al<V.E>")),m=m.i("V.E");o.t();){l=o.d
if(l==null)l=m.a(l)
g.bK(0,A.a_(J.i(l,"wedding_id")),new C.cEL(l))}o=n.$ti
q=A.eL(new A.bA(n,o.i("bA<1>")),q)
m=g.$ti
q.n(0,new A.bA(g,m.i("bA<1>")))
f=A.U(q,A.u(q).c)
q=A.a([],y.R)
for(l=f.length,e=0;e<f.length;f.length===l||(0,A.H)(f),++e){i=f[e]
k=a4.h(0,i)
if(k==null)k="Evento"
q.push(C.dFm(k,n.h(0,i),g.h(0,i)))}for(o=o.i("c6<2>"),l=new A.c6(n,n.r,n.e,o),k=y.s,d=0;l.t();){j=l.d
a0=J.a7(j)
if(B.e.q(A.a(["confirmed","completed","awaiting_deposit"],k),a0.h(j,"status"))){j=A.aL(a0.h(j,"total_amount"))
d+=j==null?0:j}}m=m.i("cD<2>")
a1=new A.a6(new A.cD(g,m),new C.cEM(),m.i("a6<A.E>")).gA(0)
k=A.a([],k)
for(o=new A.c6(n,n.r,n.e,o);o.t();)k.push(A.a_(J.i(o.d,"id")))
v=new A.agN([d,k,a1,q])
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akX,w)},
ng:function ng(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cEL:function cEL(d){this.a=d},
cEM:function cEM(){},
dDW(d){var x,w,v=new A.ad(Date.now(),0,!1),u=B.j.aT(A.bz(A.aD(v),A.au(v),A.aH(v),0,0).cK(A.bz(A.aD(d),A.au(d),A.aH(d),0,0)).a,864e8)
if(u===0)return"Hoje"
if(u===1)return"Ontem"
x=B.bG[A.au(d)-1]
w=A.aD(d)===A.aD(v)?"":" "+A.aD(d)
return""+A.aH(d)+" "+x+w},
ddG(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=y.p,k=A.a([],l)
for(x=g!=null,w=0;w<f.length;++w){v=f[w]
u=v.r
t=u.e1()
s=w===0
r=s?m:f[w-1].r.e1()
if(r==null||A.aD(r)!==A.aD(t)||A.au(r)!==A.au(t)||A.aH(r)!==A.aH(t)){s=s?0:8
q=new A.b2(999,999)
k.push(new A.Q(new A.a2(0,s,0,12),new A.fy(B.L,m,m,A.B(m,A.h(C.dDW(t),m,m,m,m,B.tu,m,m,m),B.r,m,m,new A.L(B.e2,m,m,new A.cd(q,q,q,q),m,m,B.y),m,m,m,I.NL,m,m,m),m),m))}p=e.$1(v)
s=p?B.e0:B.bg
k.push(new A.cZ(s,m,m,d.$2(v,p),m))
o=!1
if(p){if(x){s=g.a
q=u.a
if(s>=q)u=s===q&&g.b<u.b
else u=!0
u=!u}else u=o
o=u}u=p?B.e0:B.bg
s=B.f.aY(B.j.k(A.ic(t)),2,"0")
q=B.f.aY(B.j.k(A.hY(t)),2,"0")
s=A.a([A.h(s+":"+q,m,m,m,m,D.c36,m,m,m)],l)
if(p){q=o?"Vista":"Enviada"
n=o?D.aIY:D.aIR
B.e.n(s,A.a([B.e7,new A.jp(new A.n3(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,q,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a5,m,m,m,m),!1,!1,m,!1,!1,n,m)],l))}k.push(new A.Q(D.auZ,new A.cZ(u,m,m,A.N(s,B.w,B.h,B.K,0,m,m),m),m))}return k},
uP(d,e,f,g,h,i,j,k,l,m,n,o,p){return new C.aoc(g,o,n,k,e,d,f,h,l,j,m,p,null)},
jR:function jR(d,e,f){this.a=d
this.b=e
this.c=f},
aoc:function aoc(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.at=n
_.ax=o
_.a=p},
b_J:function b_J(){},
Ra:function Ra(d,e){this.a=d
this.b=e},
cRH(d,e,f,g,h,i,j,k,l,m,n){var x=0,w=A.n(y.y),v
var $async$cRH=A.j(function(o,p){if(o===1)return A.k(p,w)
for(;;)switch(x){case 0:x=3
return A.d(A.c1(null,new C.cRI(m,k,h,f,l,g,j,i,n,e),!1,d,!0,!0,null,y.y),$async$cRH)
case 3:v=p===!0
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cRH,w)},
alM(d,e,f,g,h,i){var x=0,w=A.n(y.y),v
var $async$alM=A.j(function(j,k){if(j===1)return A.k(k,w)
for(;;)switch(x){case 0:x=3
return A.d(A.c1(null,new C.cRu(e,h,i,f,g),!1,d,!0,!0,null,y.y),$async$alM)
case 3:v=k===!0
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$alM,w)},
aiw:function aiw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cyh:function cyh(){},
cyj:function cyj(d){this.a=d},
cyk:function cyk(d){this.a=d},
aei:function aei(d,e,f){this.c=d
this.d=e
this.a=f},
cRI:function cRI(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
Og:function Og(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.a=n},
aG9:function aG9(){var _=this
_.r=_.f=_.e=_.d=$
_.w=!1
_.c=_.a=null},
bUL:function bUL(d){this.a=d},
bUM:function bUM(d){this.a=d},
bUT:function bUT(d){this.a=d},
bUS:function bUS(d,e){this.a=d
this.b=e},
bUU:function bUU(d,e){this.a=d
this.b=e},
bUQ:function bUQ(d){this.a=d},
bUN:function bUN(d){this.a=d},
bUO:function bUO(d){this.a=d},
bUR:function bUR(d){this.a=d},
bUV:function bUV(d){this.a=d},
bUP:function bUP(d){this.a=d},
bxx:function bxx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cRu:function cRu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NZ:function NZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDU:function aDU(d,e,f,g){var _=this
_.d=0
_.e=$
_.f=d
_.r=e
_.w=f
_.x=g
_.y=!1
_.c=_.a=null},
bNw:function bNw(){},
bNl:function bNl(d){this.a=d},
bNm:function bNm(d){this.a=d},
bNk:function bNk(d){this.a=d},
bNj:function bNj(){},
bNr:function bNr(){},
bNs:function bNs(d){this.a=d},
bNq:function bNq(d,e){this.a=d
this.b=e},
bNt:function bNt(d){this.a=d},
bNp:function bNp(d,e){this.a=d
this.b=e},
bNu:function bNu(d){this.a=d},
bNo:function bNo(d){this.a=d},
bNv:function bNv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNn:function bNn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d7j(d,e,f,g,h,i,j){return new C.a7R(d,i,j,h,g,f,e,null)},
a7R:function a7R(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.y=j
_.a=k},
aNT:function aNT(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
ct_:function ct_(d,e){this.a=d
this.b=e},
ct0:function ct0(d){this.a=d},
ct1:function ct1(d){this.a=d},
ct3:function ct3(d,e){this.a=d
this.b=e},
ct4:function ct4(d,e){this.a=d
this.b=e},
ct5:function ct5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ct2:function ct2(){},
ct6:function ct6(d,e){this.a=d
this.b=e},
ct7:function ct7(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bjn:function bjn(){}},D,L,M,N
J=c[1]
A=c[0]
B=c[2]
F=c[210]
G=c[282]
H=c[312]
I=c[365]
E=c[119]
K=c[120]
C=a.updateHolder(c[83],C)
D=c[231]
L=c[169]
M=c[399]
N=c[400]
C.ki.prototype={
axB(d,e){var x=d==null?this.a:d
return new C.ki(x,e==null?this.b:e)},
ip(d){return this.axB(d,null)},
Fi(d){return this.axB(null,d)}}
C.jB.prototype={}
C.R7.prototype={
P(){return new C.aDT()}}
C.aDT.prototype={
ad(){this.ar()
this.D5()},
D5(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$D5=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
r=$.R().b
r===$&&A.b()
x=6
return A.d(r.R("booking_change_requests").am(0,"kind, from_value, to_value, message, status, booking_id, new_price").V("id",t.a.c).cS(),$async$D5)
case 6:s=e
if(t.c!=null)t.p(new C.bNe(t,s))
v=1
x=5
break
case 3:v=2
p=u.pop()
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$D5,w)},
wr(d,e,f){return this.aRX(d,e,f)},
aRX(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o
var $async$wr=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.p(new C.bNc(r))
u=4
q=$.R().b
q===$&&A.b()
x=7
return A.d(q.aM(d,e,y.z),$async$wr)
case 7:x=8
return A.d(r.D5(),$async$wr)
case 8:q=r.c
if(q!=null)q.O(y.q).f.a3(A.c7(null,null,null,null,null,B.z,null,A.h(f,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 4:u=3
o=t.pop()
q=r.c
if(q!=null)q.O(y.q).f.a3(D.a9o)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new C.bNd(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$wr,w)},
wz(d){return this.aYK(d)},
aYK(a0){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$wz=A.j(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=J.a7(a0)
e=A.C(f.h(a0,"kind"))
if(e==null)e="other"
x=e==="date"?3:4
break
case 3:f=f.h(a0,"to_value")
o=A.dh(A.q(f==null?"":f))
if(o==null)o=new A.ad(Date.now(),0,!1)
n=new A.ad(Date.now(),0,!1)
f=s.c
f.toString
m=o.eA(n)?n:o
x=5
return A.d(L.a_p(f,n,m,A.bz(A.aD(n)+3,1,1,0,0),D.bF9),$async$wz)
case 5:l=a2
if(l==null||s.c==null){x=1
break}f=B.f.aY(B.j.k(A.au(l)),2,"0")
m=B.f.aY(B.j.k(A.aH(l)),2,"0")
x=6
return A.d(s.wr("update_booking_change",A.T(["p_id",s.a.c,"p_to",""+A.aD(l)+"-"+f+"-"+m],y.N,y.z),"Dia mudado."),$async$wz)
case 6:x=1
break
case 4:r=A.C(f.h(a0,"booking_id"))
if(r==null){x=1
break}q=0
u=8
m=$.R().b
m===$&&A.b()
x=11
return A.d(m.R("bookings").am(0,"people").V("id",r).cS(),$async$wz)
case 11:p=a2
m=p
m=A.aL(m==null?null:J.i(m,"people"))
k=m==null?null:B.k.F(m)
q=k==null?0:k
u=2
x=10
break
case 8:u=7
d=t.pop()
x=10
break
case 7:x=2
break
case 10:m=s.c
if(m==null){x=1
break}i=f.h(a0,"from_value")
i=A.ev(A.q(i==null?"":i),null)
if(i==null)i=q
h=s.a.c
g=f.h(a0,"to_value")
x=14
return A.d(C.alM(m,r,i,new C.bxx(h,e,A.q(g==null?"":g),A.C(f.h(a0,"message"))),"A outra parte","Pedido de altera\xe7\xe3o"),$async$wz)
case 14:x=a2?12:13
break
case 12:x=15
return A.d(s.D5(),$async$wz)
case 15:case 13:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$wz,w)},
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1="to_value",a2="from_value",a3="Outro dia",a4="new_price",a5=d.d
if(a5==null)return B.mv
x=J.a7(a5)
w=A.C(x.h(a5,"kind"))
if(w==null)w="other"
v=A.C(x.h(a5,"status"))
if(v==null)v="open"
u=C.dbY(w,A.C(x.h(a5,a1)))
t=C.dbY(w,A.C(x.h(a5,a2)))
switch(v){case"accepted":s=D.bRR
break
case"declined":s=D.bSz
break
case"cancelled":s=D.a7d
break
default:s=d.a.d
r=s?"Enviado \xb7 \xe0 espera":"Por responder"
r=new A.a1(r,s?D.fp:D.ni)
s=r
break}q=a0
p=s.b
q=p
o=d.a.c
if(w==="people"){r=x.h(a5,a2)
n=A.ev(A.q(r==null?"":r),a0)
r=x.h(a5,a1)
m=A.ev(A.q(r==null?"":r),a0)
r=n!=null&&m!=null&&m<n?"Menos":"Mais"
l=x.h(a5,a2)
k=r+" pessoas: "+A.q(l==null?"?":l)+" \u2192 "+A.q(x.h(a5,a1))}else if(w==="time")k="Hora: "+u
else k=t.length===0?u:t+" \u2192 "+u
r=A.C(x.h(a5,"message"))
j=r==null?a0:B.f.C(r)
switch(w){case"date":r=a3
break
case"scope":r="O que inclui"
break
case"other":r="Outra coisa"
break
default:r=a0
break}l=w==="date"
i=l?F.lR:N.Er
h=d.a
g=h.f
f=l?a3:"Pedido de altera\xe7\xe3o"
if(l)r=h.d?"O dia pedido j\xe1 est\xe1 ocupado":a0
else r=r!=null?r:a0
h=h.e
l=A.a([],y.L)
if(x.h(a5,a4)!=null)l.push(new A.a1("Novo total",A.aM(A.ds(x.h(a5,a4)),!1)))
x=j==null||j.length===0?a0:"\xab"+j+"\xbb"
if(v!=="open"||d.e)e=D.FD
else{e=y.l
e=d.a.d?A.a([new C.jR("Cancelar",new C.bNf(d,o),!1),new C.jR("Editar",new C.bNg(d,a5),!1)],e):A.a([new C.jR("Recusar",new C.bNh(d,o),!1),new C.jR("Aceitar",new C.bNi(d,o),!0)],e)}return C.uP(e,a0,g,f,i,h,x,a0,l,s.a,r,k,q)}}
C.ng.prototype={}
C.jR.prototype={}
C.aoc.prototype={
u(a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null
switch(a7.ax.a){case 0:x=new A.rE([B.dL,B.t,B.A,B.dL,A.bB(B.dL,1.5)])
break
case 1:x=new A.rE([B.c1,B.t,B.A,B.c1,A.bB(B.c1,1.5)])
break
case 2:x=D.bUD
break
case 3:x=D.bUE
break
case 4:x=D.bUF
break
default:x=a8}x=x.a
w=x[0]
v=a8
u=a8
t=a8
s=a8
r=x[1]
q=x[2]
p=x[3]
o=x[4]
s=o
t=p
u=q
v=r
n=new C.b_J()
x=B.k.ag(A.ax(a9,a8,y.w).w.a.a*0.78,260,320)
m=A.W(22)
l=w==null?a8:A.bB(w,1.5)
k=y.p
j=A.a([A.N(A.a([A.B(B.L,A.b4(a7.y,B.cq,a8,a8,16),B.r,a8,a8,B.n1,a8,28,a8,a8,a8,a8,28),B.ag,A.a4(A.h(a7.c.toUpperCase(),a8,a8,a8,a8,B.aL,a8,a8,a8),1)],k),B.w,B.h,B.l,0,a8,a8)],k)
i=A.W(999)
B.e.n(j,A.a([B.ac,new A.cZ(B.bg,a8,a8,A.B(a8,A.N(A.a([A.B(a8,a8,B.r,a8,a8,new A.L(t,a8,a8,a8,a8,a8,B.aw),a8,7,a8,a8,a8,a8,7),B.bm,A.h(a7.at,a8,a8,a8,a8,A.aI(a8,a8,u,a8,a8,a8,a8,a8,a8,a8,a8,12,a8,a8,B.F,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)],k),B.w,B.h,B.K,0,a8,a8),B.r,a8,a8,new A.L(v,a8,s,i,a8,a8,B.y),a8,a8,a8,B.i7,a8,a8,a8),a8)],k))
j.push(B.ac)
j.push(A.h(a7.d,2,B.a2,a8,a8,B.ae,a8,a8,a8))
i=a7.e
if(i!=null&&i.length!==0)j.push(new A.Q(G.qw,A.h(i,a8,a8,a8,a8,B.O,a8,a8,a8),a8))
i=a7.x
if(i!=null&&i.length!==0){h=A.W(999)
j.push(new A.Q(B.nG,new A.cZ(B.bg,a8,a8,A.B(a8,A.N(A.a([D.aEQ,B.bm,new A.d8(1,B.b7,A.h(i,1,B.a2,a8,a8,B.tu,a8,a8,a8),a8)],k),B.w,B.h,B.K,0,a8,a8),B.r,a8,a8,new A.L(B.a7,a8,a8,h,a8,a8,B.y),a8,a8,a8,B.i7,a8,a8,a8),a8),a8))}j.push(B.ac)
for(i=a7.z,h=i.length,g=0;g<i.length;i.length===h||(0,A.H)(i),++g){f=i[g]
j.push(n.$2(f.a,f.b))}i=a7.f
if(i!=null)j.push(n.$2("Total",A.aM(i,!1)))
i=a7.r
if(i!=null)j.push(n.$2("Sinal para confirmar",A.aM(i,!1)))
i=a7.Q
if(i!=null)B.e.n(j,A.a([B.av,A.h(i,a8,a8,a8,a8,B.tn,a8,a8,a8)],k))
i=a7.w
if(i.length!==0){h=A.a([],k)
for(e=0;e<i.length;++e){d=A.a([],k)
if(e>0)d.push(B.ag)
a0=i[e]
a1=a0.b
a2=a0.c
a3=a2&&a1!=null?B.A:B.t
a4=new A.b2(999,999)
if(a2&&a1!=null)a5=a8
else{a6=new A.bb(a1==null?B.fq:B.A,1.5,B.ai,-1)
a5=new A.dS(a6,a6,a6,a6)}if(a1==null)a2=B.V
else a2=a2?B.t:B.A
d.push(new A.bJ(1,B.au,new A.hz(A.B(B.L,A.h(a0.a,1,B.a2,a8,a8,new A.P(!0,a2,a8,a8,a8,a8,13,B.F,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),B.r,a8,a8,new A.L(a3,a8,a5,new A.cd(a4,a4,a4,a4),a8,a8,B.y),a8,36,a8,B.hz,a8,a8,a8),a1,a8,a8),a8))
B.e.n(h,d)}B.e.n(j,A.a([B.R,A.N(h,B.w,B.h,B.l,0,a8,a8)],k))}return A.aG(A.B(a8,A.y(j,B.G,B.h,B.l,0,B.u),B.r,a8,a8,new A.L(B.t,a8,l,m,a8,a8,B.y),a8,a8,a8,B.bh,a8,a8,a8),a8,x)}}
C.Ra.prototype={
I(){return"ChatCardTone."+this.b}}
C.aiw.prototype={
u(d){var x=this,w=null,v=new C.cyh(),u=A.W(22),t=y.p,s=A.a([],t),r=x.c
if(r.length!==0)s.push(A.h(r,w,w,w,w,B.O,w,w,w))
s.push(A.h(""+x.d+" pessoas",w,w,w,w,B.ae,w,w,w))
r=x.e
if(r.length!==0)s.push(A.h(r,w,w,w,w,B.O,w,w,w))
return A.B(w,A.N(A.a([A.a4(A.y(s,B.H,B.h,B.l,0,B.u),1),v.$3("\u2212",!1,new C.cyj(x)),B.af,v.$3("+",!0,new C.cyk(x))],t),B.w,B.h,B.l,0,w,w),B.r,w,w,new A.L(B.a7,w,w,u,w,w,B.y),w,w,w,B.D8,w,w,w)}}
C.aei.prototype={
u(d){var x=null,w=A.W(26)
return A.B(x,A.N(A.a([A.h(this.c,x,x,x,x,B.O,x,x,x),B.ag,A.a4(A.cs(x,B.a8,!1,x,!0,B.z,x,A.cx(),this.d,x,x,x,x,x,2,D.Qm,B.Z,!0,x,!0,x,!1,x,B.aD,x,x,A.a([new A.DT(A.aS("[0-9:]",!0,!1,!1),!0,"")],y.V),x,B.hV,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,B.aq,x,x,x,x,x,x,x,x,x,x,x,B.bY,!0,B.ar,x,B.b2,x,x,x,x),1)],y.p),B.w,B.h,B.l,0,x,x),B.r,x,x,new A.L(B.a7,x,x,w,x,x,B.y),x,52,x,B.fs,x,x,x)}}
C.Og.prototype={
P(){return new C.aG9()}}
C.aG9.prototype={
gDf(){var x=this.d
if(x===$){x=this.a.r
x=this.d=x<1?1:x}return x},
ga2D(){var x,w=this.e
if(w===$){x=this.a.x
if(x==null)x=""
w=this.e=new A.aF(new A.bH(x,B.aI,B.aB),$.aa())}return w},
ga2E(d){var x,w=this.f
if(w===$){x=this.a.z
if(x==null)x=""
w=this.f=new A.aF(new A.bH(x,B.aI,B.aB),$.aa())}return w},
ga2C(){var x,w=this.r
if(w===$){x=this.a.Q
if(x==null)x=""
w=this.r=new A.aF(new A.bH(x,B.aI,B.aB),$.aa())}return w},
m(){var x=this,w=x.ga2D(),v=w.Y$=$.aa()
w.W$=0
w=x.ga2E(0)
w.Y$=v
w.W$=0
w=x.ga2C()
w.Y$=v
w.W$=0
x.a6()},
q9(d,e){return this.bhg(d,e)},
bhg(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p
var $async$q9=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.w){x=1
break}s.p(new C.bUL(s))
u=4
x=7
return A.d(d.$0(),$async$q9)
case 7:r=s.c
if(r==null){x=1
break}r.O(y.q).f.a3(A.c7(null,null,null,null,null,B.z,null,A.h(e,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r=s.c
r.toString
A.am(r,!1).ae(!0)
u=2
x=6
break
case 4:u=3
p=t.pop()
if(s.c==null){x=1
break}s.p(new C.bUM(s))
s.c.O(y.q).f.a3(A.c7(null,null,null,null,null,B.z,null,A.h("N\xe3o foi poss\xedvel guardar. V\xea se as horas est\xe3o como 14:00.",null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$q9,w)},
u(d){var x,w,v,u,t,s=this,r=null,q=s.a
q=q.d
x=y.p
w=A.a([],x)
v=s.a
if(v.y)w.push(new E.X0("J\xe1 tem uma proposta","Ao guardar, "+v.d+" \xe9 avisado e pode enviar uma proposta nova. A atual deixa de valer.",r))
v=A.W(22)
u=A.a([A.h(s.a.e,r,r,r,r,B.ae,r,r,r)],x)
t=s.a.f
if(t.length!==0)u.push(A.h(t,r,r,r,r,B.O,r,r,r))
v=A.B(r,new A.ee(B.db,A.N(A.a([A.a4(A.y(u,B.H,B.h,B.K,0,B.u),1),A.B(r,H.Ey,B.r,r,r,B.u8,r,24,r,r,r,r,24)],x),B.w,B.h,B.l,0,r,r),r),B.r,r,r,new A.L(B.a7,r,r,v,r,r,B.y),r,r,r,B.cP,r,r,r)
w.push(A.y(A.a([A.h("PARA QUE EVENTO",r,r,r,r,B.aL,r,r,r),B.S,v],x),B.G,B.h,B.l,0,B.u))
v=s.gDf()
w.push(A.y(A.a([A.h("PESSOAS",r,r,r,r,B.aL,r,r,r),B.S,new C.aiw("",v,"",new C.bUT(s),r)],x),B.G,B.h,B.l,0,B.u))
v=A.N(A.a([A.a4(new C.aei("In\xedcio",s.ga2E(0),r),1),B.ag,A.a4(new C.aei("Fim",s.ga2C(),r),1)],x),B.w,B.h,B.l,0,r,r)
w.push(A.y(A.a([A.h("HORA",r,r,r,r,B.aL,r,r,r),B.S,v],x),B.G,B.h,B.l,0,B.u))
v=s.ga2D()
w.push(A.y(A.a([A.h("O QUE PROCURAS",r,r,r,r,B.aL,r,r,r),B.S,new E.wf(v,"O que procuras",4,r,r)],x),B.G,B.h,B.l,0,B.u))
w.push(D.chb)
x=s.w
v=x?r:new C.bUU(s,d)
return E.cG8(d,w,new E.NX("Cancelar pedido",v,"Guardar",x?r:new C.bUV(s),1,r),new E.OB("Editar pedido","Pedido de or\xe7amento \xb7 "+q,r))}}
C.bxx.prototype={}
C.NZ.prototype={
P(){var x=$.aa()
return new C.aDU(new A.aF(B.al,x),new A.aF(B.al,x),new A.aF(B.al,x),new A.aF(B.al,x))}}
C.aDU.prototype={
gDf(){var x=this.e
return x===$?this.e=this.a.f+1:x},
ad(){var x,w,v,u,t=this
t.ar()
x=t.a.r
if(x!=null){w=x.b
t.d=B.j.ag(B.e.dh(D.G1,w),0,3)
v=x.d
if(v==null)v=""
t.x.sbt(0,v)
if(w==="people"){v=A.ev(x.c,null)
t.e=v==null?t.gDf():v}if(w==="time"){v=y.e
u=A.U(new A.aj(A.a(x.c.split("\u2013"),y.s),new C.bNw(),v),v.i("aY.E"))
t.f.sbt(0,B.e.gK(u))
if(u.length>1)t.r.sbt(0,u[1])}if(w==="scope"||w==="other")t.w.sbt(0,x.c)}},
m(){var x=this,w=x.f,v=w.Y$=$.aa()
w.W$=0
w=x.r
w.Y$=v
w.W$=0
w=x.w
w.Y$=v
w.W$=0
w=x.x
w.Y$=v
w.W$=0
x.a6()},
gaWH(){var x,w,v=this
switch(D.G1[v.d]){case"people":x=""+v.gDf()
break
case"time":x=B.f.C(v.f.a.a)
if(x.length===0)x=null
else{x=A.a([x],y.s)
w=B.f.C(v.r.a.a)
if(w.length!==0)x.push(w)
x=B.e.a0(x," \u2013 ")}break
default:x=B.f.C(v.w.a.a)
if(x.length===0)x=null
break}return x},
q9(d,e){return this.bhf(d,e)},
bhf(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p
var $async$q9=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.y){x=1
break}s.p(new C.bNl(s))
u=4
x=7
return A.d(d.$0(),$async$q9)
case 7:r=s.c
if(r==null){x=1
break}r.O(y.q).f.a3(A.c7(null,null,null,null,null,B.z,null,A.h(e,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r=s.c
r.toString
A.am(r,!1).ae(!0)
u=2
x=6
break
case 4:u=3
p=t.pop()
if(s.c==null){x=1
break}s.p(new C.bNm(s))
s.c.O(y.q).f.a3(A.c7(null,null,null,null,null,B.z,null,A.h("N\xe3o foi poss\xedvel enviar. Tenta novamente.",null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$q9,w)},
anK(d,e){var x=null,w=A.W(26)
return A.a4(A.B(x,A.N(A.a([A.h(d,x,x,x,x,B.O,x,x,x),B.ag,A.a4(A.cs(x,B.a8,!1,x,!0,B.z,x,A.cx(),e,x,x,x,x,x,2,D.Qm,B.Z,!0,x,!0,x,!1,x,B.aD,x,x,A.a([new A.DT(A.aS("[0-9:]",!0,!1,!1),!0,"")],y.V),x,B.hV,x,x,x,1,x,x,!1,"\u2022",x,new C.bNk(this),x,x,x,!1,x,x,!1,x,!0,x,B.aq,x,x,x,x,x,x,x,x,x,x,x,B.bY,!0,B.ar,x,B.b2,x,x,x,x),1)],y.p),B.w,B.h,B.l,0,x,x),B.r,x,x,new A.L(B.a7,x,x,w,x,x,B.y),x,52,x,B.fs,x,x,x),1)},
u(d){var x,w,v,u,t,s=this,r=null,q=s.a,p=q.r!=null,o=D.G1[s.d],n=p?"Editar altera\xe7\xe3o":"Pedir altera\xe7\xe3o"
q=q.e
x=y.p
w=A.a([],x)
if(p)w.push(new E.X0("Enviado \xb7 por responder","Enquanto "+s.a.d+" n\xe3o responder, podes mudar ou cancelar.",r))
v=s.d
u=p?new C.bNr():new C.bNs(s)
w.push(A.y(A.a([A.h("O QUE MUDA",r,r,r,r,B.aL,r,r,r),B.S,new E.YF(D.bBb,v,u,r)],x),B.G,B.h,B.l,0,B.u))
if(o==="people")w.push(new C.aiw("Agora "+s.a.f+" \xb7 passa a",s.gDf(),"",new C.bNt(s),r))
else if(o==="time")w.push(A.y(A.a([D.ceC,B.S,A.N(A.a([s.anK("In\xedcio",s.f),B.ag,s.anK("Fim",s.r)],x),B.w,B.h,B.l,0,r,r)],x),B.G,B.h,B.l,0,B.u))
else{v=o==="scope"?"Trocar o \xe1lbum de 30 pelo de 50 p\xe1ginas.":"Escreve o que querem mudar."
w.push(new E.wf(s.w,v,3,r,r))}w.push(A.y(A.a([A.h("MENSAGEM (OPCIONAL)",r,r,r,r,B.aL,r,r,r),B.S,new E.wf(s.x,r,2,r,r)],x),B.G,B.h,B.l,0,B.u))
w.push(A.h(s.a.d+" aceita ou recusa. Se o pre\xe7o mudar, chega uma proposta nova para aceitar.",r,r,r,r,B.c9,r,r,r))
x=p?"Cancelar pedido":r
v=s.y
u=v?r:new C.bNu(s)
t=p?"Guardar":"Enviar pedido"
return E.cG8(d,w,new E.NX(x,u,t,v?r:new C.bNv(s,d,p,o),1,r),new E.OB(n,q,r))}}
C.a7R.prototype={
P(){return new C.aNT()}}
C.aNT.prototype={
ad(){this.ar()
this.A5()},
A5(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$A5=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
r=$.R().b
r===$&&A.b()
x=6
return A.d(r.R("quote_requests").am(0,"id, status, people, message, event_date, location, cancelled_at, package_snapshot, start_time, end_time").V("wedding_id",t.a.c).V("partner_id",t.a.d).d1(0,"created_at",!1).hS(1).cS(),$async$A5)
case 6:s=e
if(t.c!=null)t.p(new C.ct_(t,s))
v=1
x=5
break
case 3:v=2
p=u.pop()
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$A5,w)},
A7(d,e,f){return this.bhd(d,e,f)},
bhd(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o
var $async$A7=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.p(new C.ct0(r))
u=4
q=$.R().b
q===$&&A.b()
x=7
return A.d(q.aM(d,e,y.z),$async$A7)
case 7:x=8
return A.d(r.A5(),$async$A7)
case 8:q=r.c
if(q!=null)q.O(y.q).f.a3(A.c7(null,null,null,null,null,B.z,null,A.h(f,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 4:u=3
o=t.pop()
q=r.c
if(q!=null)q.O(y.q).f.a3(D.a9o)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new C.ct1(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$A7,w)},
L3(d){var x,w="location",v=J.a7(d),u=v.h(d,"event_date"),t=A.dh(A.q(u==null?"":u))
u=A.a([],y.s)
if(t!=null)u.push(B.dY[A.fR(t)-1]+", "+A.aH(t)+" "+B.bG[A.au(t)-1])
x=A.C(v.h(d,w))
x=x==null?null:B.f.C(x).length!==0
if(x===!0)u.push(B.f.C(A.a_(v.h(d,w))))
return B.e.a0(u," \xb7 ")},
u(a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6="package_snapshot",a7="Pedido de or\xe7amento",a8=a4.d
if(a8==null)return B.mv
x=J.a7(a8)
w=A.a_(x.h(a8,"id"))
v=A.C(x.h(a8,"status"))
if(v==null)v="pending"
u=x.h(a8,"cancelled_at")==null
t=y.f
s=t.b(x.h(a8,a6))?t.a(x.h(a8,a6)):a5
t=s==null
r=!t
if(u)q=v==="pending"||v==="viewed"||v==="proposal_sent"
else q=!1
if(u)p=v==="pending"||v==="viewed"
else p=!1
o=A.aL(x.h(a8,"people"))
n=o==null?a5:B.k.F(o)
o=A.C(x.h(a8,"message"))
m=o==null?a5:B.f.C(o)
o=A.C(t?a5:J.i(s,"name"))
l=o==null?a5:B.f.C(o)
if(l==null)l=""
t=A.C(x.h(a8,"start_time"))
k=t==null?a5:B.f.C(t)
x=A.C(x.h(a8,"end_time"))
j=x==null?a5:B.f.C(x)
if(k==null||k.length===0)i=a5
else i=j==null||j.length===0?k:k+" \u2013 "+j
h=l.length===0?a7:"Pacote "+l
if(!u)g=D.a7d
else{A:{if("proposal_sent"===v){x=a4.a.e?D.bRK:D.bRI
break A}if("accepted"===v){x=D.bRQ
break A}if("declined"===v||"expired"===v){x=new A.a1(a4.a.e?"Recusado":"Sem resposta ou recusado",D.fp)
break A}if(a4.a.e)x=D.Hk
else{x=r?"\xc0 espera do parceiro \xb7 at\xe9 48 h":"Enviado \xb7 \xe0 espera da resposta"
x=new A.a1(x,r?D.ni:D.fp)}break A}g=x}f=g.a
e=a5
d=g.b
e=d
a0=f
a1=A.a([],y.l)
x=!a4.e
if(x&&a4.a.e&&p){a1.push(new C.jR("Recusar",new C.ct3(a4,w),!1))
if(r)a1.push(new C.jR("Aceitar",new C.ct4(a4,w),!0))
else a1.push(new C.jR("Enviar proposta",new C.ct5(a4,a9,w,a8,h,i,n,m),!0))}else if(x&&!a4.a.e&&q){if(r)a1.push(new C.jR("Cancelar pedido",new C.ct6(a4,w),!1))
a1.push(new C.jR("Editar pedido",new C.ct7(a4,a9,w,a8,n,m,v,k,j),!1))}x=r?B.Pj:B.lS
u=a4.a.y
t=r?"Pedido de reserva":a7
o=a4.L3(a8).length===0?a5:a4.L3(a8)
a2=A.a([],y.L)
if(n!=null)a2.push(new A.a1("Pessoas",A.q(n)))
if(i!=null)a2.push(new A.a1("Hora",i))
if(m==null||m.length===0)a3=r&&p&&!a4.a.e?"Se n\xe3o aceitar em 48 h, o sinal \xe9 libertado.":a5
else a3="\xab"+m+"\xbb"
return C.uP(a1,a5,u,t,x,a5,a3,a5,a2,a0,o,h,e)}}
C.bjn.prototype={
$3$1(d,e,f,g){return K.d5Q(d,null,!1,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
var z=a.updateTypes(["Og(O)","NZ(O)"])
C.cJ3.prototype={
$2(d,e){return J.qm(this.a,new C.cJ4(d,e))},
$S:395}
C.cJ4.prototype={
$1(d){var x=J.a7(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:75}
C.bNe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bNc.prototype={
$0(){return this.a.e=!0},
$S:0}
C.bNd.prototype={
$0(){return this.a.e=!1},
$S:0}
C.bNf.prototype={
$0(){return this.a.wr("cancel_booking_change",A.T(["p_id",this.b],y.N,y.z),"Cancelado.")},
$S:0}
C.bNg.prototype={
$0(){return this.a.wz(this.b)},
$S:0}
C.bNh.prototype={
$0(){return this.a.wr("respond_booking_change",A.T(["p_id",this.b,"p_accept",!1],y.N,y.z),"Recusaste.")},
$S:0}
C.bNi.prototype={
$0(){return this.a.wr("respond_booking_change",A.T(["p_id",this.b,"p_accept",!0],y.N,y.z),"Aceite.")},
$S:0}
C.cEL.prototype={
$0(){return this.a},
$S:215}
C.cEM.prototype={
$1(d){var x=J.a7(d)
if(x.h(d,"cancelled_at")==null)x=J.o(x.h(d,"status"),"pending")||J.o(x.h(d,"status"),"viewed")
else x=!1
return x},
$S:33}
C.b_J.prototype={
$2(d,e){var x=null
return A.B(x,A.N(A.a([A.a4(A.h(d,x,x,x,x,B.O,x,x,x),1),A.h(e,x,x,x,x,B.bD,x,x,x)],y.p),B.w,B.h,B.l,0,x,x),B.r,x,x,M.KX,x,x,x,B.dV,x,x,x)},
$S:150}
C.cyh.prototype={
$3(d,e,f){var x=null,w=e?B.A:B.t,v=e?x:A.bB(B.A,1.5)
return A.cT(x,A.B(B.L,A.h(d,x,x,x,x,A.aI(x,x,e?B.t:B.A,x,x,x,x,x,x,x,x,20,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.L(w,x,v,x,x,x,B.aw),x,44,x,x,x,x,44),B.Z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,B.aQ)},
$S:1348}
C.cyj.prototype={
$0(){var x=this.a,w=x.d
w=w>1?w-1:1
return x.f.$1(w)},
$S:0}
C.cyk.prototype={
$0(){var x=this.a
return x.f.$1(x.d+1)},
$S:0}
C.cRI.prototype={
$1(d){var x=this
return new C.Og(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,null)},
$S:z+0}
C.bUL.prototype={
$0(){return this.a.w=!0},
$S:0}
C.bUM.prototype={
$0(){return this.a.w=!1},
$S:0}
C.bUT.prototype={
$1(d){var x=this.a
return x.p(new C.bUS(x,d))},
$S:15}
C.bUS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bUU.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.d(A.fT(!0,new C.bUQ(t),u.b,y.y),$async$$0)
case 3:if(e!==!0||t.c==null){x=1
break}x=4
return A.d(t.q9(new C.bUR(t),"Pedido cancelado."),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
C.bUQ.prototype={
$1(d){var x=null
return new A.eU(D.chT,A.h(this.a.a.d+" \xe9 avisado. Se havia sinal cativo, \xe9 libertado.",x,x,x,x,x,x,x,x),A.a([A.cw(B.tw,x,x,new C.bUN(d),x,x),A.bF(D.ce5,new C.bUO(d),x)],y.p),x)},
$S:18}
C.bUN.prototype={
$0(){return A.am(this.a,!1).ae(!1)},
$S:0}
C.bUO.prototype={
$0(){return A.am(this.a,!1).ae(!0)},
$S:0}
C.bUR.prototype={
$0(){var x=$.R().b
x===$&&A.b()
return x.aM("cancel_quote_request",A.T(["p_id",this.a.a.c],y.N,y.z),y.H)},
$S:188}
C.bUV.prototype={
$0(){var x=this.a
return x.q9(new C.bUP(x),"Pedido atualizado.")},
$S:0}
C.bUP.prototype={
$0(){var x,w,v,u,t,s=$.R().b
s===$&&A.b()
x=this.a
w=x.a.c
v=x.gDf()
u=B.f.C(x.ga2D().a.a)
if(u.length===0)u=null
t=B.f.C(x.ga2E(0).a.a)
if(t.length===0)t=null
x=B.f.C(x.ga2C().a.a)
return s.aM("update_quote_request",A.T(["p_id",w,"p_people",v,"p_message",u,"p_start",t,"p_end",x.length===0?null:x],y.N,y.z),y.H)},
$S:188}
C.cRu.prototype={
$1(d){var x=this
return new C.NZ(x.a,x.b,x.c,x.d,x.e,null)},
$S:z+1}
C.bNw.prototype={
$1(d){return B.f.C(d)},
$S:24}
C.bNl.prototype={
$0(){return this.a.y=!0},
$S:0}
C.bNm.prototype={
$0(){return this.a.y=!1},
$S:0}
C.bNk.prototype={
$1(d){return this.a.p(new C.bNj())},
$S:3}
C.bNj.prototype={
$0(){},
$S:0}
C.bNr.prototype={
$1(d){},
$S:15}
C.bNs.prototype={
$1(d){var x=this.a
return x.p(new C.bNq(x,d))},
$S:15}
C.bNq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bNt.prototype={
$1(d){var x=this.a
return x.p(new C.bNp(x,d))},
$S:15}
C.bNp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bNu.prototype={
$0(){var x=this.a
return x.q9(new C.bNo(x),"Pedido cancelado.")},
$S:0}
C.bNo.prototype={
$0(){var x=$.R().b
x===$&&A.b()
return x.aM("cancel_booking_change",A.T(["p_id",this.a.a.r.a],y.N,y.z),y.H)},
$S:188}
C.bNv.prototype={
$0(){var x,w,v=this,u=null,t=v.a,s=t.gaWH()
if(s==null){v.b.O(y.q).f.a3(A.c7(u,u,u,u,u,B.z,u,A.h("Diz o que muda.",u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}x=v.c
w=x?"Altera\xe7\xe3o guardada.":"Pedido de altera\xe7\xe3o enviado."
t.q9(new C.bNn(t,x,s,v.d),w)},
$S:0}
C.bNn.prototype={
$0(){var x,w,v=this,u=v.a,t=v.c
if(v.b){x=$.R().b
x===$&&A.b()
w=u.a.r.a
u=B.f.C(u.x.a.a)
u=x.aM("update_booking_change",A.T(["p_id",w,"p_to",t,"p_message",u.length===0?null:u],y.N,y.z),y.H)}else{x=$.R().b
x===$&&A.b()
w=u.a.c
u=B.f.C(u.x.a.a)
if(u.length===0)u=null
u=x.aM("request_booking_change",A.T(["p_booking",w,"p_kind",v.d,"p_to",t,"p_message",u],y.N,y.z),y.H)}return u},
$S:188}
C.ct_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ct0.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ct1.prototype={
$0(){return this.a.e=!1},
$S:0}
C.ct3.prototype={
$0(){return this.a.A7("decline_quote_request",A.T(["p_quote_request_id",this.b],y.N,y.z),"Pedido recusado.")},
$S:0}
C.ct4.prototype={
$0(){return this.a.A7("accept_package_request",A.T(["p_quote_request_id",this.b],y.N,y.z),"Pedido aceite.")},
$S:0}
C.ct5.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=v.a
q=r.a
p=q.c
q=q.f
u=v.d
t=B.e.gK(r.L3(u).split(" \xb7 "))
u=A.a([r.L3(u)],y.s)
s=v.f
if(s!=null)u.push(s)
s=v.r
if(s!=null)u.push(A.q(s)+" pessoas")
x=4
return A.d(E.alN(v.b,q,p,t,null,v.c,new A.a6(u,new C.ct2(),y.U).a0(0," \xb7 "),v.w,v.e),$async$$0)
case 4:x=e?2:3
break
case 2:x=5
return A.d(r.A5(),$async$$0)
case 5:case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
C.ct2.prototype={
$1(d){return d.length!==0},
$S:7}
C.ct6.prototype={
$0(){return this.a.A7("cancel_quote_request",A.T(["p_id",this.b],y.N,y.z),"Pedido cancelado.")},
$S:0}
C.ct7.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
r=s.f
q=s.r
if(q==null)q="Evento"
s=s.w
if(s==null)s=t.L3(v.d)
u=v.e
if(u==null){t.a.toString
u=null}if(u==null)u=1
t.a.toString
x=4
return A.d(C.cRH(v.b,v.x,s,null,q,v.r==="proposal_sent",v.f,r,u,v.c,v.w),$async$$0)
case 4:x=e?2:3
break
case 2:x=5
return A.d(t.A5(),$async$$0)
case 5:case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.K,[C.ki,C.jB,C.ng,C.jR,C.bxx,C.bjn])
x(A.cN,[C.cJ3,C.b_J])
x(A.by,[C.cJ4,C.cEM,C.cyh,C.cRI,C.bUT,C.bUQ,C.cRu,C.bNw,C.bNk,C.bNr,C.bNs,C.bNt,C.ct2])
x(A.G,[C.R7,C.Og,C.NZ,C.a7R])
x(A.Y,[C.aDT,C.aG9,C.aDU,C.aNT])
x(A.bR,[C.bNe,C.bNc,C.bNd,C.bNf,C.bNg,C.bNh,C.bNi,C.cEL,C.cyj,C.cyk,C.bUL,C.bUM,C.bUS,C.bUU,C.bUN,C.bUO,C.bUR,C.bUV,C.bUP,C.bNl,C.bNm,C.bNj,C.bNq,C.bNp,C.bNu,C.bNo,C.bNv,C.bNn,C.ct_,C.ct0,C.ct1,C.ct3,C.ct4,C.ct5,C.ct6,C.ct7])
x(A.I,[C.aoc,C.aiw,C.aei])
w(C.Ra,A.f8)})()
A.bq(b.typeUniverse,JSON.parse('{"R7":{"G":[],"e":[],"f":[]},"aDT":{"Y":["R7"]},"aoc":{"I":[],"e":[],"f":[]},"Og":{"G":[],"e":[],"f":[]},"NZ":{"G":[],"e":[],"f":[]},"aiw":{"I":[],"e":[],"f":[]},"aei":{"I":[],"e":[],"f":[]},"aG9":{"Y":["Og"]},"aDU":{"Y":["NZ"]},"a7R":{"G":[],"e":[],"f":[]},"aNT":{"Y":["a7R"]}}'))
var y=(function rtii(){var x=A.w
return{l:x("r<jR>"),L:x("r<+(c,c)>"),s:x("r<c>"),V:x("r<rt>"),p:x("r<e>"),R:x("r<ng>"),P:x("a5<c,@>"),f:x("a5<@,@>"),e:x("aj<c,c>"),w:x("df"),S:x("fd<@>"),o:x("+booked,bookingIds,pending,rows(S,t<c>,v,t<ng>)"),N:x("c"),U:x("a6<c>"),q:x("dn"),y:x("x"),z:x("@"),g:x("t<@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Lf=new C.bjn()
D.ni=new C.Ra(0,"pending")
D.pV=new C.Ra(2,"done")
D.nj=new C.Ra(3,"doneLine")
D.fp=new C.Ra(4,"neutral")
D.bA4=x([],A.w("r<jB>"))
D.LF=new C.ki(!1,D.bA4)
D.auZ=new A.a2(4,3,4,8)
D.aE2=new A.b7(F.lR,20,B.t,null,null,null)
D.aEQ=new A.b7(F.lR,12,B.cq,null,null,null)
D.Qm=new A.dF(null,null,null,null,null,null,null,null,null,null,"00:00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bw,!0,null,null,null,null)
D.aIR=new A.mU("M5 12.5l4.5 4.5L19 7.5",14,B.V,2.4,!1,B.cC,null)
D.aIY=new A.mU("M2 12.5l4.5 4.5L16 7.5M11 15.5l1.5 1.5L22 7.5",16,B.bp,2.4,!1,B.cC,null)
D.FD=x([],y.l)
D.bAf=x([],y.R)
D.bBb=x(["Pessoas","Hora","O que inclui","Outra coisa"],y.s)
D.G1=x(["people","time","scope","other"],y.s)
D.bF9=new A.vm("pt",null,"PT")
D.bRI=new A.a1("Proposta recebida",D.pV)
D.bRK=new A.a1("Proposta enviada",D.fp)
D.bRQ=new A.a1("Aceite",D.pV)
D.bRR=new A.a1("Aceite",D.nj)
D.a7d=new A.a1("Cancelado",D.fp)
D.Hk=new A.a1("Por responder",D.ni)
D.bSz=new A.a1("Recusado",D.fp)
D.bUD=new A.rE([null,B.cJ,B.d_,B.d_,null])
D.bUE=new A.rE([B.bp,B.cJ,B.d_,B.d_,null])
D.bUF=new A.rE([null,B.e2,B.cq,B.V,null])
D.ccx=new A.D("N\xe3o foi poss\xedvel concluir. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.a9o=new A.bG(D.ccx,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.z,null)
D.cfV=new A.D("Ainda n\xe3o h\xe1 uma reserva aceite nesta conversa.",null,null,null,null,null,null,null,null,null,null)
D.a9s=new A.bG(D.cfV,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.z,null)
D.cgs=new A.D("N\xe3o foi poss\xedvel enviar o anexo. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.a9x=new A.bG(D.cgs,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.z,null)
D.c36=new A.P(!0,B.V,null,null,null,null,12,B.b3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ce5=new A.D("Cancelar pedido",null,null,null,null,null,null,null,null,null,null)
D.ceC=new A.D("Passa a",null,B.O,null,null,null,null,null,null,null,null)
D.chb=new A.D("O dia e o local v\xeam do evento: mudam-se nas Defini\xe7\xf5es do evento.",null,B.c9,null,null,null,null,null,null,null,null)
D.chT=new A.D("Cancelar o pedido?",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["zvt6kLOunnHMkiG0ZAvFWwPg8zU="]=a.current})($__dart_deferred_initializers__);