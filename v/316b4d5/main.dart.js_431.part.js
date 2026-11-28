((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,M,N,O,I,P,K,L,Q,H,E,F,R,G,C={kt:function kt(d,e){this.a=d
this.b=e},
Qh(d){var x=0,w=A.n(y.T),v,u,t,s,r,q,p,o,n
var $async$Qh=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.am0(null,d),$async$Qh)
case 3:u=$.Q().b
u===$&&A.b()
x=4
return A.d(u.R("bookings").al(0,"status, total_amount, deposit_amount, payments(type, status)").V("proposal_id",d).cK(0,"created_at",!1).hg(1).cd(),$async$Qh)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a6(t)
s=A.y(u.h(t,"status"))
if(s==null)s=""
if(B.f.b2(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.O.a(u.h(t,"payments"))
q=new C.cJB(r==null?B.aj:r)
if(q.$2("final_payment","pending")){v="final_due"
x=1
break}if(q.$2("final_payment","paid")){v="paid"
x=1
break}if(s==="completed"){v="completed"
x=1
break}p=A.aF(u.h(t,"total_amount"))
o=p==null?null:p
if(o==null)o=0
if(o>0){u=A.aF(u.h(t,"deposit_amount"))
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
return A.m($async$Qh,w)},
cJB:function cJB(d){this.a=d},
cJC:function cJC(d,e){this.a=d
this.b=e},
b0g(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return new C.jG(l,j,k,s,r,o,q,p,n,m,i,g,h,f,e,d)},
jG:function jG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
_.ay=q
_.ch=r
_.CW=s},
d2S(d,e,f,g,h){return new C.a0O(d,f,h,g,e,null)},
cZL(d){return B.cP[A.ey(d)-1]+", "+A.aw(d)+" "+B.bd[A.aq(d)-1]},
a0O:function a0O(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.a=i},
ac2:function ac2(){var _=this
_.z=_.y=_.x=_.w=null
_.d=$
_.c=_.a=null},
bKC:function bKC(d,e,f){this.a=d
this.b=e
this.c=f},
bKD:function bKD(d){this.a=d},
bKE:function bKE(){},
bKF:function bKF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKG:function bKG(d,e){this.a=d
this.b=e},
bKH:function bKH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKI:function bKI(d){this.a=d},
ddr(d,e){var x
if(e==null)return""
if(d==="date"){x=A.d_(e)
if(x!=null)return B.cP[A.ey(x)-1]+", "+A.aw(x)+" "+B.bd[A.aq(x)-1]}if(d==="people")return e+" pessoas"
return e},
Rq:function Rq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEu:function aEu(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
bOn:function bOn(d,e){this.a=d
this.b=e},
bOl:function bOl(d){this.a=d},
bOm:function bOm(d){this.a=d},
bOo:function bOo(d,e){this.a=d
this.b=e},
bOp:function bOp(d,e){this.a=d
this.b=e},
bOq:function bOq(d,e){this.a=d
this.b=e},
bOr:function bOr(d,e){this.a=d
this.b=e},
ddN(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=A.W(22),k=y.p,j=A.a([],k)
for(x=J.a6(d),w=0;w<x.gA(d);++w){v=w===x.gA(d)-1?m:B.fT
u=new A.b7(12,12)
u=A.w(m,D.aDm,B.r,m,m,new A.O(B.cn,m,m,new A.cJ(u,u,u,u),m,m,B.y),m,44,m,m,m,m,44)
t=A.a([A.h(x.h(d,w).a,m,m,m,m,B.aa,m,m)],k)
if(x.h(d,w).b.length!==0)t.push(A.h(x.h(d,w).b,m,m,m,m,B.L,m,m))
t=A.x(t,B.G,B.h,B.l)
s=x.h(d,w)
r=new A.b7(999,999)
if(x.h(d,w).f==null)q=m
else{q=x.h(d,w).f
q.toString
p=new A.b9(q,1.5,B.ah,-1)
q=new A.dT(p,p,p,p)}o=x.h(d,w)
n=x.h(d,w)
j.push(A.d5(B.bu,A.w(m,A.N(A.a([u,B.al,new A.bK(1,B.au,t,m),B.ab,A.w(m,A.h(o.c,m,m,m,m,new A.P(!0,n.e,m,m,m,m,12,B.E,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m),B.r,m,m,new A.O(s.d,m,q,new A.cJ(r,r,r,r),m,m,B.y),m,m,m,B.i5,m,m,m),B.bg,B.lT],k),B.u,B.h,B.l,0,m),B.r,m,B.jB,new A.O(m,m,v,m,m,m,B.y),m,m,m,B.ei,m,m,m),B.a_,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.cF3(e,d,w),m,m,m,m,m,m,!1,B.b_))}return A.w(m,A.x(j,B.u,B.h,B.l),B.r,m,m,new A.O(B.ac,m,m,l,m,m,B.y),m,m,m,B.cN,m,m,m)},
dHb(d,e,f){var x,w,v=null,u="Cancelado",t=A.a(d.split(" \xb7 "),y.s),s=B.e.gJ(t),r=A.dq(t,1,v,y.N).a1(0," \xb7 ")
if(e!=null){x=A.y(J.i(e,"status"))
switch(x==null?"":x){case"confirmed":x=new C.kL(s,r,"Reservado",B.cL,B.cU,v,"")
break
case"completed":x=new C.kL(s,r,"Conclu\xeddo",B.dG,B.cn,v,"")
break
case"awaiting_deposit":x=new C.kL(s,r,"Aceite",B.t,B.z,B.dT,"")
break
default:x=new C.kL(s,r,u,B.dG,B.cn,v,"")
break}return x}x=f==null
w=A.y(x?v:J.i(f,"status"))
if(w==null)w=""
if((x?v:J.i(f,"cancelled_at"))!=null)return new C.kL(s,r,u,B.dG,B.cn,v,"")
A:{if("proposal_sent"===w){x=new C.kL(s,r,"Proposta",B.t,B.z,B.dT,"")
break A}if("pending"===w||"viewed"===w){x=new C.kL(s,r,"Pedido",B.t,B.z,B.dT,"")
break A}if("accepted"===w){x=new C.kL(s,r,"Aceite",B.cL,B.cU,v,"")
break A}x=new C.kL(s,r,"Sem resposta",B.dG,B.cn,v,"")
break A}return x},
alg(d,e,f){return C.dHc(d,e,f)},
dHc(a4,a5,a6){var x=0,w=A.n(y.o),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$alg=A.j(function(a7,a8){if(a7===1){t.push(a8)
x=u}for(;;)switch(x){case 0:if(a6.length===0){v=new A.aha([0,B.a8,0,D.bz9])
x=1
break}s=B.aj
r=B.aj
u=4
q=$.Q().b
q===$&&A.b()
x=7
return A.d(q.R("bookings").al(0,"id, wedding_id, status, total_amount").V("partner_id",a5).dE("wedding_id",a6),$async$alg)
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
q=$.Q().b
q===$&&A.b()
x=12
return A.d(q.R("quote_requests").al(0,"id, wedding_id, status, cancelled_at, created_at").V("partner_id",a5).dE("wedding_id",a6).cK(0,"created_at",!1),$async$alg)
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
n=A.F(q,o)
for(m=J.bi(s,o),l=A.u(m),m=new A.aj(m,m.gA(m),l.i("aj<V.E>")),l=l.i("V.E");m.q();){k=m.d
if(k==null)k=l.a(k)
j=J.a6(k)
i=A.a0(j.h(k,"wedding_id"))
h=A.y(j.h(k,"status"))
if(h==null)h=""
if(!n.av(0,i)||h==="confirmed"||h==="completed")n.j(0,i,k)}g=A.F(q,o)
for(o=J.bi(r,o),m=A.u(o),o=new A.aj(o,o.gA(o),m.i("aj<V.E>")),m=m.i("V.E");o.q();){l=o.d
if(l==null)l=m.a(l)
g.bK(0,A.a0(J.i(l,"wedding_id")),new C.cF4(l))}o=n.$ti
q=A.eM(new A.bB(n,o.i("bB<1>")),q)
m=g.$ti
q.n(0,new A.bB(g,m.i("bB<1>")))
f=A.U(q,A.u(q).c)
q=A.a([],y.R)
for(l=f.length,e=0;e<f.length;f.length===l||(0,A.I)(f),++e){i=f[e]
k=a4.h(0,i)
if(k==null)k="Evento"
k=C.dHb(k,n.h(0,i),g.h(0,i))
q.push(new C.kL(k.a,k.b,k.c,k.d,k.e,k.f,i))}for(o=o.i("c5<2>"),l=new A.c5(n,n.r,n.e,o),k=y.s,d=0;l.q();){j=l.d
a0=J.a6(j)
if(B.e.u(A.a(["confirmed","completed","awaiting_deposit"],k),a0.h(j,"status"))){j=A.aF(a0.h(j,"total_amount"))
d+=j==null?0:j}}m=m.i("cq<2>")
a1=new A.a7(new A.cq(g,m),new C.cF5(),m.i("a7<z.E>")).gA(0)
k=A.a([],k)
for(o=new A.c5(n,n.r,n.e,o);o.q();)k.push(A.a0(J.i(o.d,"id")))
v=new A.aha([d,k,a1,q])
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$alg,w)},
kL:function kL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cF3:function cF3(d,e,f){this.a=d
this.b=e
this.c=f},
cF4:function cF4(d){this.a=d},
cF5:function cF5(){},
dFG(d){var x,w,v=new A.aa(Date.now(),0,!1),u=B.j.aL(A.bw(A.aD(v),A.aq(v),A.aw(v),0,0).cc(A.bw(A.aD(d),A.aq(d),A.aw(d),0,0)).a,864e8)
if(u===0)return"Hoje"
if(u===1)return"Ontem"
x=B.bd[A.aq(d)-1]
w=A.aD(d)===A.aD(v)?"":" "+A.aD(d)
return""+A.aw(d)+" "+x+w},
dfe(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=y.p,k=A.a([],l)
for(x=g!=null,w=0;w<f.length;++w){v=f[w]
u=v.r
t=u.dH()
s=w===0
r=s?m:f[w-1].r.dH()
if(r==null||A.aD(r)!==A.aD(t)||A.aq(r)!==A.aq(t)||A.aw(r)!==A.aw(t)){s=s?0:8
q=new A.b7(999,999)
k.push(new A.S(new A.a3(0,s,0,12),new A.eX(B.J,m,m,A.w(m,A.h(C.dFG(t),m,m,m,m,B.za,m,m),B.r,m,m,new A.O(B.dG,m,m,new A.cJ(q,q,q,q),m,m,B.y),m,m,m,Q.Ne,m,m,m),m),m))}p=e.$1(v)
s=p?B.dQ:B.bi
k.push(new A.dd(s,m,m,d.$2(v,p),m))
o=!1
if(p){if(x){s=g.a
q=u.a
if(s>=q)u=s===q&&g.b<u.b
else u=!0
u=!u}else u=o
o=u}u=p?B.dQ:B.bi
s=B.f.aN(B.j.k(A.i0(t)),2,"0")
q=B.f.aN(B.j.k(A.hN(t)),2,"0")
s=A.a([A.h(s+":"+q,m,m,m,m,D.c29,m,m)],l)
if(p){q=o?"Vista":"Enviada"
n=o?D.aIa:D.aI2
B.e.n(s,A.a([B.dM,new A.k9(new A.oJ(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,q,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a5,m,m,m,m),!1,!1,m,!1,!1,n,m)],l))}k.push(new A.S(D.atZ,new A.dd(u,m,m,A.N(s,B.u,B.h,B.I,0,m),m),m))}return k},
m7(d,e,f,g,h,i,j,k,l,m,n,o,p){return new C.aov(g,o,n,k,e,d,f,h,l,j,m,p,null)},
ij:function ij(d,e,f){this.a=d
this.b=e
this.c=f},
aov:function aov(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b0h:function b0h(){},
ID:function ID(d,e){this.a=d
this.b=e},
cSS(d,e,f,g,h,i,j,k,l,m,n){var x=0,w=A.n(y.y),v
var $async$cSS=A.j(function(o,p){if(o===1)return A.k(p,w)
for(;;)switch(x){case 0:x=3
return A.d(A.bR(null,new C.cST(m,k,h,f,l,g,j,i,n,e),!1,d,!0,!0,null,y.y),$async$cSS)
case 3:v=p===!0
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cSS,w)},
cSM(d,e,f,g,h,i,j,k,l){var x=0,w=A.n(y.y),v
var $async$cSM=A.j(function(m,n){if(m===1)return A.k(n,w)
for(;;)switch(x){case 0:x=3
return A.d(A.bR(null,new C.cSN(e,j,k,g,l,h,i,f),!1,d,!0,!0,null,y.y),$async$cSM)
case 3:v=n===!0
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cSM,w)},
cST:function cST(d,e,f,g,h,i,j,k,l,m){var _=this
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
Ov:function Ov(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aGC:function aGC(){var _=this
_.r=_.f=_.e=_.d=$
_.w=!1
_.c=_.a=null},
bVv:function bVv(d){this.a=d},
bVw:function bVw(d){this.a=d},
bVF:function bVF(d){this.a=d},
bVE:function bVE(d,e){this.a=d
this.b=e},
bVG:function bVG(d){this.a=d},
bVD:function bVD(d,e){this.a=d
this.b=e},
bVH:function bVH(d){this.a=d},
bVC:function bVC(d,e){this.a=d
this.b=e},
bVI:function bVI(d,e){this.a=d
this.b=e},
bVA:function bVA(d){this.a=d},
bVx:function bVx(d){this.a=d},
bVy:function bVy(d){this.a=d},
bVB:function bVB(d){this.a=d},
bVJ:function bVJ(d){this.a=d},
bVz:function bVz(d){this.a=d},
cSN:function cSN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
Ot:function Ot(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aGB:function aGB(d){var _=this
_.d=d
_.w=_.r=_.f=_.e=$
_.x=!1
_.c=_.a=null},
bV1:function bV1(d,e,f){this.a=d
this.b=e
this.c=f},
bV0:function bV0(d,e){this.a=d
this.b=e},
bV2:function bV2(d){this.a=d},
bV3:function bV3(d,e){this.a=d
this.b=e},
bV4:function bV4(d){this.a=d},
bV5:function bV5(d){this.a=d},
bVb:function bVb(d,e){this.a=d
this.b=e},
bVa:function bVa(d,e){this.a=d
this.b=e},
bVc:function bVc(d){this.a=d},
bV9:function bV9(d,e){this.a=d
this.b=e},
bVd:function bVd(d){this.a=d},
bV8:function bV8(){},
bVe:function bVe(d){this.a=d},
bV7:function bV7(d){this.a=d},
bVf:function bVf(d,e){this.a=d
this.b=e},
bV6:function bV6(d,e){this.a=d
this.b=e},
bz3:function bz3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d8J(d,e,f,g,h,i,j){return new C.a8f(d,i,j,h,g,f,e,null)},
a8f:function a8f(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.y=j
_.a=k},
aOl:function aOl(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
csY:function csY(d,e){this.a=d
this.b=e},
csZ:function csZ(d){this.a=d},
ct_:function ct_(d){this.a=d},
ct1:function ct1(d,e){this.a=d
this.b=e},
ct2:function ct2(d,e){this.a=d
this.b=e},
ct3:function ct3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ct0:function ct0(){},
ct4:function ct4(d,e){this.a=d
this.b=e},
ct5:function ct5(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bk1:function bk1(){}},D,S
J=c[1]
A=c[0]
B=c[2]
M=c[233]
N=c[283]
O=c[214]
I=c[313]
P=c[348]
K=c[229]
L=c[186]
Q=c[371]
H=c[208]
E=c[122]
F=c[353]
R=c[123]
G=c[234]
C=a.updateHolder(c[81],C)
D=c[230]
S=c[401]
C.kt.prototype={
ax5(d,e){var x=d==null?this.a:d
return new C.kt(x,e==null?this.b:e)},
im(d){return this.ax5(d,null)},
t5(d){return this.ax5(null,d)}}
C.jG.prototype={}
C.a0O.prototype={
P(){return new C.ac2()}}
C.ac2.prototype={
ad(){this.ao()
this.z6()},
z6(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$z6=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
r={}
q=$.Q()
p=q.b
p===$&&A.b()
x=6
return A.d(p.R("bookings").al(0,"id, wedding_id, event_date, status, total_amount, deposit_amount, people, cancelled_at").V("id",t.a.d).cd(),$async$z6)
case 6:s=e
r.a=r.b=r.c=null
x=s!=null?7:8
break
case 7:v=10
j=r
x=13
return A.d(q.b.R("payments").al(0,"id, amount, due_at, status").V("booking_id",t.a.d).Bt("type","deposit").cK(0,"created_at",!1).hg(1).cd(),$async$z6)
case 13:j.c=e
v=3
x=12
break
case 10:v=9
n=u.pop()
x=12
break
case 9:x=3
break
case 12:v=15
q=$.Q().b
q===$&&A.b()
j=r
x=18
return A.d(q.R("reviews").al(0,"rating, comment").V("booking_id",t.a.d).cd(),$async$z6)
case 18:j.b=e
v=3
x=17
break
case 15:v=14
m=u.pop()
x=17
break
case 14:x=3
break
case 17:v=20
q=$.Q().b
q===$&&A.b()
j=r
x=23
return A.d(q.R("events").al(0,"event_type, ceremony_time, venue, location").V("id",A.a0(J.i(s,"wedding_id"))).cd(),$async$z6)
case 23:j.a=e
v=3
x=22
break
case 20:v=19
l=u.pop()
x=22
break
case 19:x=3
break
case 22:case 8:if(t.c!=null)t.p(new C.bKC(r,t,s))
v=1
x=5
break
case 3:v=2
k=u.pop()
x=5
break
case 2:x=1
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$z6,w)},
T6(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$T6=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=null
u=4
x=7
return A.d(s.gS().a0(0,$.iy().gdO(),y.M),$async$T6)
case 7:r=e
m=A.f9(J.dP(r,new C.bKD(s)))
u=2
x=6
break
case 4:u=3
l=t.pop()
x=6
break
case 3:x=2
break
case 6:p=s.c
if(p==null){x=1
break}o=y.X
if(m==null)A.ae(p).ag("/bookings",null,o)
else{n=m
A.ae(p).ag("/bookings/detail",n,o)}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$T6,w)},
t(b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8="Ver reserva",a9="estrelas",b0="Pagamento",b1="Resto da reserva",b2="Cancelaste",b3=a6.w
if(b3==null)return B.l0
x=J.a6(b3)
w=x.h(b3,"event_date")
v=A.d_(A.p(w==null?"":w))
w=a6.z
u=A.zS(A.y(w==null?a7:J.i(w,"event_type"))).c
w=a6.z
w=A.y(w==null?a7:J.i(w,"ceremony_time"))
t=w==null?a7:B.f.C(w)
w=a6.z
w=A.y(w==null?a7:J.i(w,"venue"))
s=w==null?a7:B.f.C(w)
if(s==null)s=""
w=a6.z
w=A.y(w==null?a7:J.i(w,"location"))
r=w==null?a7:B.f.C(w)
if(r==null)r=""
q=new A.a7(A.a([s,r],y.s),new C.bKE(),y.U).a1(0," \xb7 ")
w=A.aF(x.h(b3,"people"))
p=w==null?a7:B.k.F(w)
o=A.aF(x.h(b3,"total_amount"))
if(o==null)o=0
w=a6.x
n=A.aF(w==null?a7:J.i(w,"amount"))
if(n==null)n=0
w=a6.x
w=w==null?a7:J.i(w,"due_at")
w=A.d_(A.p(w==null?"":w))
m=w==null?a7:w.dH()
w=a6.x
l=J.o(w==null?a7:J.i(w,"status"),"paid")
k=a6.a.r
w=v==null
if(w)j=""
else{i=C.cZL(v)
j=i+(t==null||t.length===0?"":" \xb7 "+t)}i=a6.a
switch(i.e){case"reminder":x=j.length===0?"Amanh\xe3":j
w=i.f
if(w)h=u+(p==null?"":" \xb7 "+A.p(p)+" pessoas")
else h=k+" \xb7 "+u
g=q.length===0
f=g?a7:q
i=i.w
w=!w&&l?"O resto j\xe1 est\xe1 pago.":a7
e=A.a([],y.l)
if(!g)e.push(new C.ij("Como chegar",new C.bKF(b4,s,u,r),!1))
if(!a6.a.f)e.push(new C.ij(a8,a6.ga4Q(),!0))
return C.m7(e,a7,i,"Amanh\xe3",B.fz,a7,w,a7,G.ig,x,f,h,D.eg)
case"review":x=a6.y
x=A.aF(x==null?a7:J.i(x,"rating"))
d=x==null?a7:B.k.F(x)
if(a6.a.f){x=d==null
if(x)i="\xc0 espera da avalia\xe7\xe3o"
else{i=d===1?"estrela":a9
i="Recebeste "+A.p(d)+" "+i}x=x?D.eg:D.ks
w=w?u:u+" \xb7 "+C.cZL(v)
h=a6.a.w
g=a6.y
g=A.y(g==null?a7:J.i(g,"comment"))
if((g==null?a7:B.f.C(g).length!==0)===!0){g=a6.y
g.toString
g="\xab"+B.f.C(A.a0(J.i(g,"comment")))+"\xbb"}else g=a7
return C.m7(D.kK,a7,h,"Avalia\xe7\xe3o",B.fA,a7,g,a7,G.ig,i,w,k,x)}a0=w?a7:v.ea(2592e9)
x=d==null
i=!x
if(i){h=d===1?"estrela":a9
h="Avaliaste com "+A.p(d)+" "+h}else h=a0==null?"Por avaliar":"Avalia at\xe9 "+A.aw(a0)+" "+B.bd[A.aq(a0)-1]
i=i?D.ks:D.kr
w=w?u:u+" \xb7 "+C.cZL(v)
g=a6.a.w
f=x?"A tua avalia\xe7\xe3o ajuda outros organizadores.":a7
return C.m7(x?A.a([new C.ij("Avaliar",a6.ga4Q(),!0)],y.l):D.kK,a7,g,"Como correu?",B.fA,a7,f,a7,G.ig,h,w,k,i)
case"final_due":a1=new A.aa(Date.now(),0,!1)
x=m==null
a2=x?a7:B.j.aL(A.bw(A.aD(m),A.aq(m),A.aw(m),0,0).cc(A.bw(A.aD(a1),A.aq(a1),A.aw(a1),0,0)).a,864e8)
a3=x?"":" \xb7 at\xe9 "+A.aw(m)+" "+B.bd[A.aq(m)-1]
x=a6.a
if(x.f){w=l?"Resto recebido":"Resto por receber"
i=l?D.kt:D.eg
x=x.w
h=l?"Recebido":"A receber"
h=A.a([new A.X(h,A.aL(n,!1))],y.L)
g=l?a7:"Avisamos o organizador 6 dias antes e nos \xfaltimos 3."
return C.m7(D.kK,a7,x,b0,B.lQ,a7,g,a7,h,w,k+a3,b1,i)}if(l)w="Pago"
else if(a2==null)w="Por pagar"
else if(a2<=0)w="Termina hoje"
else{w=a2===1?"dia":"dias"
w="Faltam "+A.p(a2)+" "+w}if(l)i=D.kt
else i=(a2==null?99:a2)<=3?D.ajv:D.kr
x=x.w
h=l?"Pago":"A pagar"
h=A.a([new A.X(h,A.aL(n,!1))],y.L)
g=l?a7:"Sem o pagamento, a reserva \xe9 cancelada."
f=l||a6.x==null?D.kK:A.a([new C.ij("Pagar mais tarde",new C.bKG(b4,m),!1),new C.ij("Pagar",new C.bKH(a6,b4,k,n),!0)],y.l)
return C.m7(f,a7,x,b0,B.lQ,a7,g,a7,h,w,k+a3,b1,i)
case"menus":x=i.f
w=x?"Prontos":"Enviado ao parceiro"
h=p==null?"Menus escolhidos":"Menus de "+A.p(p)+" pessoas"
g=j.length===0?u:u+" \xb7 "+j
i=i.w
f=x?"Ver tudo":a8
return C.m7(A.a([new C.ij(f,x?new C.bKI(b4):a6.ga4Q(),!1)],y.l),a7,i,"Menus e alergias",B.qe,a7,a7,a7,G.ig,w,g,h,D.ks)
default:a4=J.o(x.h(b3,"status"),"cancelled_by_partner")
x=x.h(b3,"cancelled_at")
x=A.d_(A.p(x==null?"":x))
a5=x==null?a7:x.dH()
x=a6.a
i=x.f
if(i)h=a4?b2:"Cancelada pelo organizador"
else h=a4?"Cancelada pelo parceiro":b2
if(i)w=w?a7:"O dia "+A.aw(v)+" "+B.bd[A.aq(v)-1]+" ficou livre"
else w=a5==null?a7:"Cancelada a "+A.aw(a5)+" "+B.bd[A.aq(a5)-1]
x=x.w
i=A.a([],y.L)
if(o>0&&!a6.a.f)i.push(new A.X("Total da reserva",A.aL(o,!1)))
return C.m7(D.kK,a7,x,"Reserva cancelada",M.kI,a7,a7,a7,i,h,w,k+" \xb7 "+u,D.eg)}}}
C.Rq.prototype={
P(){return new C.aEu()}}
C.aEu.prototype={
ad(){this.ao()
this.z8()},
z8(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$z8=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
r=$.Q().b
r===$&&A.b()
x=6
return A.d(r.R("booking_change_requests").al(0,"kind, from_value, to_value, message, status, booking_id, quote_request_id, new_price").V("id",t.a.c).cd(),$async$z8)
case 6:s=e
if(t.c!=null)t.p(new C.bOn(t,s))
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
return A.m($async$z8,w)},
z0(d,e,f){return this.aRq(d,e,f)},
aRq(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o
var $async$z0=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.p(new C.bOl(r))
u=4
q=$.Q().b
q===$&&A.b()
x=7
return A.d(q.aH(d,e,y.z),$async$z0)
case 7:x=8
return A.d(r.z8(),$async$z0)
case 8:q=r.c
if(q!=null)q.O(y.q).f.a4(A.c7(null,null,null,null,null,B.x,null,A.h(f,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 4:u=3
o=t.pop()
q=r.c
if(q!=null)q.O(y.q).f.a4(D.a8W)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new C.bOm(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$z0,w)},
ru(d){return this.aYh(d)},
aYh(a7){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6
var $async$ru=A.j(function(a8,a9){if(a8===1){t.push(a9)
x=u}for(;;)switch(x){case 0:a3=J.a6(a7)
a4=A.y(a3.h(a7,"kind"))
if(a4==null)a4="other"
x=a4==="date"?3:4
break
case 3:j=a3.h(a7,"from_value")
i=A.d_(A.p(j==null?"":j))
j=a3.h(a7,"to_value")
h=A.d_(A.p(j==null?"":j))
if(i==null||h==null){x=1
break}r=null
u=6
q=A.y(a3.h(a7,"quote_request_id"))
p=A.y(a3.h(a7,"booking_id"))
x=q!=null?9:11
break
case 9:j=$.Q().b
j===$&&A.b()
x=12
return A.d(j.R("proposals").al(0,"price").V("quote_request_id",q).V("status","sent").cK(0,"created_at",!1).hg(1).cd(),$async$ru)
case 12:o=a9
j=o
g=A.aF(j==null?null:J.i(j,"price"))
r=g==null?null:g
x=10
break
case 11:x=p!=null?13:14
break
case 13:j=$.Q().b
j===$&&A.b()
x=15
return A.d(j.R("bookings").al(0,"total_amount").V("id",p).cd(),$async$ru)
case 15:n=a9
j=n
g=A.aF(j==null?null:J.i(j,"total_amount"))
r=g==null?null:g
case 14:case 10:u=2
x=8
break
case 6:u=5
a5=t.pop()
x=8
break
case 5:x=2
break
case 8:j=s.c
if(j==null){x=1
break}e=s.a
d=e.c
a0=e.f
if(a0==null)a0="o cliente"
e=e.r
if(e==null)e="Proposta de outro dia"
a1=A.y(a3.h(a7,"message"))
a3=A.aF(a3.h(a7,"new_price"))
if(a3==null)a3=null
x=18
return A.d(C.cSM(j,d,r,i,a1,a3,a0,e,h),$async$ru)
case 18:x=a9?16:17
break
case 16:x=19
return A.d(s.z8(),$async$ru)
case 19:case 17:x=1
break
case 4:m=A.y(a3.h(a7,"booking_id"))
if(m==null){x=1
break}l=0
u=21
j=$.Q().b
j===$&&A.b()
x=24
return A.d(j.R("bookings").al(0,"people").V("id",m).cd(),$async$ru)
case 24:k=a9
j=k
j=A.aF(j==null?null:J.i(j,"people"))
a2=j==null?null:B.k.F(j)
l=a2==null?0:a2
u=2
x=23
break
case 21:u=20
a6=t.pop()
x=23
break
case 20:x=2
break
case 23:j=s.c
if(j==null){x=1
break}e=a3.h(a7,"from_value")
e=A.e1(A.p(e==null?"":e),null)
if(e==null)e=l
d=s.a.c
a0=a3.h(a7,"to_value")
x=27
return A.d(E.a_I(j,m,e,new C.bz3(d,a4,A.p(a0==null?"":a0),A.y(a3.h(a7,"message"))),"A outra parte","Pedido de altera\xe7\xe3o"),$async$ru)
case 27:x=a9?25:26
break
case 25:x=28
return A.d(s.z8(),$async$ru)
case 28:case 26:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ru,w)},
t(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1="to_value",a2="from_value",a3="Outro dia",a4="new_price",a5=d.d
if(a5==null)return B.l0
x=J.a6(a5)
w=A.y(x.h(a5,"kind"))
if(w==null)w="other"
v=A.y(x.h(a5,"status"))
if(v==null)v="open"
u=C.ddr(w,A.y(x.h(a5,a1)))
t=C.ddr(w,A.y(x.h(a5,a2)))
switch(v){case"accepted":s=D.bQD
break
case"declined":s=D.bRj
break
case"cancelled":s=D.a6B
break
default:s=d.a.d
r=s?"Enviado \xb7 \xe0 espera":"Por responder"
r=new A.X(r,s?D.eg:D.kr)
s=r
break}q=a0
p=s.b
q=p
o=d.a.c
if(w==="people"){r=x.h(a5,a2)
n=A.e1(A.p(r==null?"":r),a0)
r=x.h(a5,a1)
m=A.e1(A.p(r==null?"":r),a0)
r=n!=null&&m!=null&&m<n?"Menos":"Mais"
l=x.h(a5,a2)
k=r+" pessoas: "+A.p(l==null?"?":l)+" \u2192 "+A.p(x.h(a5,a1))}else if(w==="time")k="Hora: "+u
else k=t.length===0?u:t+" \u2192 "+u
r=A.y(x.h(a5,"message"))
j=r==null?a0:B.f.C(r)
switch(w){case"date":r=a3
break
case"scope":r="O que inclui"
break
case"other":r="Outra coisa"
break
default:r=a0
break}l=w==="date"
i=l?H.jT:P.vl
h=d.a
g=h.r
f=l?a3:"Pedido de altera\xe7\xe3o"
if(l)r=h.d?"O dia pedido j\xe1 est\xe1 ocupado":a0
else r=r!=null?r:a0
h=h.e
l=A.a([],y.L)
if(x.h(a5,a4)!=null)l.push(new A.X("Novo total",A.aL(A.dt(x.h(a5,a4)),!1)))
x=j==null||j.length===0?a0:"\xab"+j+"\xbb"
if(v!=="open"||d.e)e=D.kK
else{e=y.l
e=d.a.d?A.a([new C.ij("Cancelar",new C.bOo(d,o),!1),new C.ij("Editar",new C.bOp(d,a5),!1)],e):A.a([new C.ij("Recusar",new C.bOq(d,o),!1),new C.ij("Aceitar",new C.bOr(d,o),!0)],e)}return C.m7(e,a0,g,f,i,h,x,a0,l,s.a,r,k,q)}}
C.kL.prototype={}
C.ij.prototype={}
C.aov.prototype={
t(a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null
switch(a7.ax.a){case 0:x=new A.Ce([B.dT,B.t,B.z,B.dT,A.bE(B.dT,1.5)])
break
case 1:x=new A.Ce([B.bX,B.t,B.z,B.bX,A.bE(B.bX,1.5)])
break
case 2:x=D.bTv
break
case 3:x=D.bTw
break
case 4:x=D.bTx
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
n=new C.b0h()
x=B.k.ah(A.aT(a9,a8,y.w).w.a.a*0.78,260,320)
m=A.W(22)
l=w==null?a8:A.bE(w,1.5)
k=y.p
j=A.a([A.N(A.a([A.w(B.J,A.b4(a7.y,B.cn,a8,a8,16),B.r,a8,a8,B.pm,a8,28,a8,a8,a8,a8,28),B.ab,A.a5(A.h(a7.c.toUpperCase(),a8,a8,a8,a8,B.aH,a8,a8),1)],k),B.u,B.h,B.l,0,a8)],k)
i=A.W(999)
B.e.n(j,A.a([B.ae,new A.dd(B.bi,a8,a8,A.w(a8,A.N(A.a([A.w(a8,a8,B.r,a8,a8,new A.O(t,a8,a8,a8,a8,a8,B.ar),a8,7,a8,a8,a8,a8,7),B.bg,A.h(a7.at,a8,a8,a8,a8,A.aH(a8,a8,u,a8,a8,a8,a8,a8,a8,a8,a8,12,a8,a8,B.E,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8)],k),B.u,B.h,B.I,0,a8),B.r,a8,a8,new A.O(v,a8,s,i,a8,a8,B.y),a8,a8,a8,B.i5,a8,a8,a8),a8)],k))
j.push(B.ae)
j.push(A.h(a7.d,2,B.a1,a8,a8,B.aa,a8,a8))
i=a7.e
if(i!=null&&i.length!==0)j.push(new A.S(N.uP,A.h(i,a8,a8,a8,a8,B.L,a8,a8),a8))
i=a7.x
if(i!=null&&i.length!==0){h=A.W(999)
j.push(new A.S(B.kA,new A.dd(B.bi,a8,a8,A.w(a8,A.N(A.a([D.aE7,B.bg,new A.dg(1,B.be,A.h(i,1,B.a1,a8,a8,B.za,a8,a8),a8)],k),B.u,B.h,B.I,0,a8),B.r,a8,a8,new A.O(B.ac,a8,a8,h,a8,a8,B.y),a8,a8,a8,B.i5,a8,a8,a8),a8),a8))}j.push(B.ae)
for(i=a7.z,h=i.length,g=0;g<i.length;i.length===h||(0,A.I)(i),++g){f=i[g]
j.push(n.$2(f.a,f.b))}i=a7.f
if(i!=null)j.push(n.$2("Total",A.aL(i,!1)))
i=a7.r
if(i!=null)j.push(n.$2("Sinal para confirmar",A.aL(i,!1)))
i=a7.Q
if(i!=null)B.e.n(j,A.a([B.ap,A.h(i,a8,a8,a8,a8,B.rW,a8,a8)],k))
i=a7.w
if(i.length!==0){h=A.a([],k)
for(e=0;e<i.length;++e){d=A.a([],k)
if(e>0)d.push(B.ab)
a0=i[e]
a1=a0.b
a2=a0.c
a3=a2&&a1!=null?B.a4:B.t
a4=new A.b7(999,999)
if(a2&&a1!=null)a5=a8
else{a6=new A.b9(a1==null?B.fd:B.z,1.5,B.ah,-1)
a5=new A.dT(a6,a6,a6,a6)}if(a1==null)a2=B.V
else a2=a2?B.t:B.z
d.push(new A.bK(1,B.au,new A.iF(A.w(B.J,A.h(a0.a,1,B.a1,a8,a8,new A.P(!0,a2,a8,a8,a8,a8,13,B.E,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8),B.r,a8,a8,new A.O(a3,a8,a5,new A.cJ(a4,a4,a4,a4),a8,a8,B.y),a8,36,a8,B.iO,a8,a8,a8),a1,a8,a8),a8))
B.e.n(h,d)}B.e.n(j,A.a([B.S,A.N(h,B.u,B.h,B.l,0,a8)],k))}return A.aG(A.w(a8,A.x(j,B.F,B.h,B.l),B.r,a8,a8,new A.O(B.t,a8,l,m,a8,a8,B.y),a8,a8,a8,B.bt,a8,a8,a8),a8,x)}}
C.ID.prototype={
I(){return"ChatCardTone."+this.b}}
C.Ov.prototype={
P(){return new C.aGC()}}
C.aGC.prototype={
gD_(){var x=this.d
if(x===$){x=this.a.r
x=this.d=x<1?1:x}return x},
gzf(){var x,w=this.e
if(w===$){x=this.a.x
if(x==null)x=""
w=this.e=new A.aI(new A.bH(x,B.aG,B.az),$.ab())}return w},
gQU(d){var x,w=this.f
if(w===$){x=this.a.z
if(x==null)x=""
w=this.f=new A.aI(new A.bH(x,B.aG,B.az),$.ab())}return w},
gQT(){var x,w=this.r
if(w===$){x=this.a.Q
if(x==null)x=""
w=this.r=new A.aI(new A.bH(x,B.aG,B.az),$.ab())}return w},
m(){var x=this,w=x.gzf(),v=w.a_$=$.ab()
w.X$=0
w=x.gQU(0)
w.a_$=v
w.X$=0
w=x.gQT()
w.a_$=v
w.X$=0
x.a6()},
kQ(d,e){return this.bgr(d,e)},
bgr(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p
var $async$kQ=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.w){x=1
break}s.p(new C.bVv(s))
u=4
x=7
return A.d(d.$0(),$async$kQ)
case 7:r=s.c
if(r==null){x=1
break}r.O(y.q).f.a4(A.c7(null,null,null,null,null,B.x,null,A.h(e,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r=s.c
r.toString
A.ap(r,!1).au(!0)
u=2
x=6
break
case 4:u=3
p=t.pop()
if(s.c==null){x=1
break}s.p(new C.bVw(s))
s.c.O(y.q).f.a4(A.c7(null,null,null,null,null,B.x,null,A.h("N\xe3o foi poss\xedvel guardar. V\xea se as horas est\xe3o como 14:00.",null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kQ,w)},
t(d){var x,w,v,u,t,s,r=this,q=null,p=r.a
p=p.d
x=y.p
w=A.a([],x)
v=r.a
if(v.y)w.push(new E.O5("J\xe1 tem uma proposta","Ao guardar, "+v.d+" \xe9 avisado e pode enviar uma proposta nova. A atual deixa de valer.",q))
v=A.W(22)
u=A.a([A.h(r.a.e,q,q,q,q,B.aa,q,q)],x)
t=r.a.f
if(t.length!==0)u.push(A.h(t,q,q,q,q,B.L,q,q))
v=A.w(q,new A.e7(B.cJ,A.N(A.a([A.a5(A.x(u,B.G,B.h,B.I),1),A.w(q,I.vt,B.r,q,q,B.tO,q,24,q,q,q,q,24)],x),B.u,B.h,B.l,0,q),q),B.r,q,q,new A.O(B.ac,q,q,v,q,q,B.y),q,q,q,B.cN,q,q,q)
w.push(A.x(A.a([A.h("PARA QUE EVENTO",q,q,q,q,B.aH,q,q),B.M,v],x),B.F,B.h,B.l))
v=r.gD_()
w.push(A.x(A.a([A.h("PESSOAS",q,q,q,q,B.aH,q,q),B.M,new E.ZL("",v,"",new C.bVF(r),q)],x),B.F,B.h,B.l))
v=$.d1J()
u=r.gQU(0).a.a
if(u.length===0)u=q
t=A.a(["Sem fim"],y.s)
B.e.n(t,v)
s=r.gQT().a.a
if(s.length===0)s="Sem fim"
w.push(new A.pW(A.a([new A.jA("COME\xc7A \xc0S",v,u,new C.bVG(r),"14:00"),new A.jA("ACABA \xc0S",t,s,new C.bVH(r),q)],y.I),q))
s=r.gzf()
w.push(A.x(A.a([A.h("O QUE PROCURAS",q,q,q,q,B.aH,q,q),B.M,new E.uh(s,"O que procuras",4,q,q)],x),B.F,B.h,B.l))
w.push(D.caH)
x=r.w
v=x?q:new C.bVI(r,d)
return E.aVa(d,w,new E.H5("Cancelar pedido",v,"Guardar",x?q:new C.bVJ(r),1,q),new E.Hj("Editar pedido","Pedido de or\xe7amento \xb7 "+p,q))}}
C.Ot.prototype={
P(){return new C.aGB(D.byJ)}}
C.aGB.prototype={
aW4(d){return B.cP[A.ey(d)-1]+", "+A.aw(d)+" "+B.bd[A.aq(d)-1]},
aqZ(d,e){return A.aD(d)===A.aD(e)&&A.aq(d)===A.aq(e)&&A.aw(d)===A.aw(e)},
ga21(){var x=this.e
return x===$?this.e=this.a.r:x},
gTe(){var x=this.f
return x===$?this.f=this.a.x!=null:x},
gnO(){var x,w,v=this,u=v.r
if(u===$){x=v.a.x
x=x==null?"":B.k.aa(x,0)
w=$.ab()
v.r!==$&&A.b_()
u=v.r=new A.aI(new A.bH(x,B.aG,B.az),w)}return u},
gzf(){var x,w=this.w
if(w===$){x=this.a.w
if(x==null)x=""
w=this.w=new A.aI(new A.bH(x,B.aG,B.az),$.ab())}return w},
ad(){this.ao()
this.SD()},
SD(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$SD=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:j=A.a([],y.g)
v=3
o=$.Q().b
o===$&&A.b()
n=o.gbs().e.a
n=n==null?null:n.r
s=n==null?null:n.a
o=o.R("bookings").al(0,"event_date")
n=s
x=6
return A.d(o.V("partner_id",n==null?"":n).dE("status",["awaiting_deposit","confirmed"]),$async$SD)
case 6:r=e
for(o=J.an(r);o.q();){q=o.gE(o)
n=J.i(q,"event_date")
p=A.d_(A.p(n==null?"":n))
if(p!=null)J.bn(j,p)}v=1
x=5
break
case 3:v=2
i=u.pop()
x=5
break
case 2:x=1
break
case 5:l=t.a.f
o=Date.now()
n=y._
k=A.U(new A.a7(A.a([new A.X(A.bw(A.aD(l),A.aq(l),A.aw(l)-1,0,0),"Dia antes"),new A.X(A.bw(A.aD(l),A.aq(l),A.aw(l)+1,0,0),"Dia a seguir"),new A.X(A.bw(A.aD(l),A.aq(l),A.aw(l)+7,0,0),"Uma semana depois"),new A.X(A.bw(A.aD(l),A.aq(l),A.aw(l)+14,0,0),"Duas semanas depois")],y.r),new C.bV1(t,new A.aa(o,0,!1),j),n),n.i("z.E"))
if(!B.e.c8(k,new C.bV2(t)))B.e.es(k,0,new A.X(t.a.r,"O dia que propuseste"))
if(t.c!=null)t.p(new C.bV3(t,k))
return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$SD,w)},
m(){var x=this.gnO(),w=$.ab()
x.a_$=w
x.X$=0
x=this.gzf()
x.a_$=w
x.X$=0
this.a6()},
kQ(d,e){return this.bgq(d,e)},
bgq(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p
var $async$kQ=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.x){x=1
break}s.p(new C.bV4(s))
u=4
x=7
return A.d(d.$0(),$async$kQ)
case 7:r=s.c
if(r==null){x=1
break}r.O(y.q).f.a4(A.c7(null,null,null,null,null,B.x,null,A.h(e,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r=s.c
r.toString
A.ap(r,!1).au(!0)
u=2
x=6
break
case 4:u=3
p=t.pop()
if(s.c==null){x=1
break}s.p(new C.bV5(s))
s.c.O(y.q).f.a4(A.c7(null,null,null,null,null,B.x,null,A.h("N\xe3o foi poss\xedvel guardar. Tenta novamente.",null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kQ,w)},
t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gnO(),f=B.f.C(g.a.a)
f=A.aY(f," ","")
x=A.f3(A.aY(f,",","."))
w=B.e.gJ(i.a.d.split(" "))
f=i.a
v=f.e
u=A.W(22)
t=y.p
u=A.w(h,A.N(A.a([A.a5(A.x(A.a([F.ab1,B.aS,A.h(i.aW4(f.f),h,h,h,h,B.aa,h,h)],t),B.G,B.h,B.l),1),A.w(h,F.ab2,B.r,h,h,new A.O(B.dG,h,h,A.W(999),h,h,B.y),h,h,h,B.dJ,h,h,h)],t),B.u,B.h,B.l,0,h),B.r,h,h,new A.O(B.ac,h,h,u,h,h,B.y),h,h,h,B.iN,h,h,h)
f=A.W(22)
s=A.a([],t)
for(r=0;q=i.d,p=q.length,r<p;++r){p=r===p-1?h:B.fT
q=q[r]
o=q.a
q=A.x(A.a([A.h(B.cP[A.ey(o)-1]+", "+A.aw(o)+" "+B.bd[A.aq(o)-1],h,h,h,h,B.aa,h,h),A.h(q.b,h,h,h,h,B.L,h,h)],t),B.G,B.h,B.I)
o=i.d[r].a
n=i.e
if(n===$){n=i.e=i.a.r
m=n}else m=n
l=A.aD(o)===A.aD(n)&&A.aq(o)===A.aq(n)&&A.aw(o)===A.aw(n)?B.a4:B.at
if(A.aD(o)===A.aD(m)&&A.aq(o)===A.aq(m)&&A.aw(o)===A.aw(m))k=h
else{j=new A.b9(O.kw,1.5,B.ah,-1)
k=new A.dT(j,j,j,j)}o=A.aD(o)===A.aD(m)&&A.aq(o)===A.aq(m)&&A.aw(o)===A.aw(m)?I.vt:h
s.push(A.d5(B.bu,A.w(h,A.N(A.a([new A.bK(1,B.au,q,h),A.w(h,o,B.r,h,h,new A.O(l,h,k,h,h,h,B.ar),h,24,h,h,h,h,24)],t),B.u,B.h,B.l,0,h),B.r,h,B.cJ,new A.O(h,h,p,h,h,h,B.y),h,h,h,h,h,h,h),B.a_,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.bVb(i,r),h,h,h,h,h,h,!1,B.b_))}f=A.w(h,A.x(s,B.u,B.h,B.l),B.r,h,h,new A.O(B.ac,h,h,f,h,h,B.y),h,h,h,B.cN,h,h,h)
f=A.x(A.a([A.h("DIAS LIVRES NA TUA AGENDA",h,h,h,h,B.aH,h,h),B.M,f],t),B.F,B.h,B.l)
s=i.a.y
s=A.a([s==null?"Mesmo pre\xe7o":"Mesmo pre\xe7o \xb7 "+A.aL(s,!1),"Outro pre\xe7o"],y.s)
q=i.gTe()?1:0
q=A.a([new E.Pl(s,q,new C.bVc(i),h)],t)
if(i.gTe()){s=A.W(26)
p=A.bE(B.z,1.5)
B.e.n(q,A.a([B.M,A.w(h,A.N(A.a([F.aaK,B.af,A.a5(A.cr(h,B.a8,!1,h,!0,B.x,h,A.ct(),g,h,h,h,h,h,2,F.PI,B.a_,!0,h,!0,h,!1,h,B.aD,h,h,h,h,B.hi,h,h,h,1,h,h,!1,"\u2022",h,new C.bVd(i),h,h,h,!1,h,h,!1,h,!0,h,B.am,h,h,h,h,h,h,h,h,h,h,h,B.bU,!0,B.ay,h,B.b3,h,h,h,h),1),F.aaW],t),B.u,B.h,B.l,0,h),B.r,h,h,new A.O(B.t,h,p,s,h,h,B.y),h,52,h,B.fg,h,h,h)],t))}g=A.x(q,B.F,B.h,B.l)
g=A.x(A.a([A.h("PRE\xc7O",h,h,h,h,B.aH,h,h),B.M,g],t),B.F,B.h,B.l)
s=i.gzf()
t=A.a([new E.O5("Enviado \xb7 por responder","Enquanto "+w+" n\xe3o responder, podes mudar o dia ou cancelar.",h),u,f,g,A.x(A.a([A.h("MENSAGEM PARA "+w.toUpperCase(),h,h,h,h,B.aH,h,h),B.M,new E.uh(s,h,2,h,h)],t),B.F,B.h,B.l),A.h("Se "+w+" aceitar, o dia do pedido muda para este. O dia do evento n\xe3o muda sozinho.",h,h,h,h,B.bK,h,h)],t)
g=i.x
f=g?h:new C.bVe(i)
if(!g)if(i.gTe())g=x==null||x<=0
else g=!1
else g=!0
return E.aVa(d,t,new E.H5("Cancelar",f,"Guardar",g?h:new C.bVf(i,x),1,h),new E.Hj("Editar outro dia",v,h))}}
C.bz3.prototype={}
C.a8f.prototype={
P(){return new C.aOl()}}
C.aOl.prototype={
ad(){this.ao()
this.zT()},
zT(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$zT=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
r=$.Q().b
r===$&&A.b()
x=6
return A.d(r.R("quote_requests").al(0,"id, status, people, message, event_date, location, cancelled_at, package_snapshot, start_time, end_time").V("wedding_id",t.a.c).V("partner_id",t.a.d).cK(0,"created_at",!1).hg(1).cd(),$async$zT)
case 6:s=e
if(t.c!=null)t.p(new C.csY(t,s))
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
return A.m($async$zT,w)},
zX(d,e,f){return this.bgn(d,e,f)},
bgn(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o
var $async$zX=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.p(new C.csZ(r))
u=4
q=$.Q().b
q===$&&A.b()
x=7
return A.d(q.aH(d,e,y.z),$async$zX)
case 7:x=8
return A.d(r.zT(),$async$zX)
case 8:q=r.c
if(q!=null)q.O(y.q).f.a4(A.c7(null,null,null,null,null,B.x,null,A.h(f,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 4:u=3
o=t.pop()
q=r.c
if(q!=null)q.O(y.q).f.a4(D.a8W)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new C.ct_(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$zX,w)},
KF(d){var x,w="location",v=J.a6(d),u=v.h(d,"event_date"),t=A.d_(A.p(u==null?"":u))
u=A.a([],y.s)
if(t!=null)u.push(B.cP[A.ey(t)-1]+", "+A.aw(t)+" "+B.bd[A.aq(t)-1])
x=A.y(v.h(d,w))
x=x==null?null:B.f.C(x).length!==0
if(x===!0)u.push(B.f.C(A.a0(v.h(d,w))))
return B.e.a1(u," \xb7 ")},
t(a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6="package_snapshot",a7="Pedido de or\xe7amento",a8=a4.d
if(a8==null)return B.l0
x=J.a6(a8)
w=A.a0(x.h(a8,"id"))
v=A.y(x.h(a8,"status"))
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
o=A.aF(x.h(a8,"people"))
n=o==null?a5:B.k.F(o)
o=A.y(x.h(a8,"message"))
m=o==null?a5:B.f.C(o)
o=A.y(t?a5:J.i(s,"name"))
l=o==null?a5:B.f.C(o)
if(l==null)l=""
t=A.y(x.h(a8,"start_time"))
k=t==null?a5:B.f.C(t)
x=A.y(x.h(a8,"end_time"))
j=x==null?a5:B.f.C(x)
if(k==null||k.length===0)i=a5
else i=j==null||j.length===0?k:k+" \u2013 "+j
h=l.length===0?a7:"Pacote "+l
if(!u)g=D.a6B
else{A:{if("proposal_sent"===v){x=a4.a.e?D.bQs:D.bQp
break A}if("accepted"===v){x=D.bQC
break A}if("declined"===v||"expired"===v){x=new A.X(a4.a.e?"Recusado":"Sem resposta ou recusado",D.eg)
break A}if(a4.a.e)x=D.H0
else{x=r?"\xc0 espera do parceiro \xb7 at\xe9 48 h":"Enviado \xb7 \xe0 espera da resposta"
x=new A.X(x,r?D.kr:D.eg)}break A}g=x}f=g.a
e=a5
d=g.b
e=d
a0=f
a1=A.a([],y.l)
x=!a4.e
if(x&&a4.a.e&&p){a1.push(new C.ij("Recusar",new C.ct1(a4,w),!1))
if(r)a1.push(new C.ij("Aceitar",new C.ct2(a4,w),!0))
else a1.push(new C.ij("Enviar proposta",new C.ct3(a4,a9,w,a8,h,i,n,m),!0))}else if(x&&!a4.a.e&&q){if(r)a1.push(new C.ij("Cancelar pedido",new C.ct4(a4,w),!1))
a1.push(new C.ij("Editar pedido",new C.ct5(a4,a9,w,a8,n,m,v,k,j),!1))}x=r?B.OJ:B.qf
u=a4.a.y
t=r?"Pedido de reserva":a7
o=a4.KF(a8).length===0?a5:a4.KF(a8)
a2=A.a([],y.L)
if(n!=null)a2.push(new A.X("Pessoas",A.p(n)))
if(i!=null)a2.push(new A.X("Hora",i))
if(m==null||m.length===0)a3=r&&p&&!a4.a.e?"Se n\xe3o aceitar em 48 h, o sinal \xe9 libertado.":a5
else a3="\xab"+m+"\xbb"
return C.m7(a1,a5,u,t,x,a5,a3,a5,a2,a0,o,h,e)}}
C.bk1.prototype={
$3$1(d,e,f,g){return R.d7f(d,null,!1,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
var z=a.updateTypes(["D<~>()","Ov(M)","Ot(M)"])
C.cJB.prototype={
$2(d,e){return J.mC(this.a,new C.cJC(d,e))},
$S:447}
C.cJC.prototype={
$1(d){var x=J.a6(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:63}
C.bKC.prototype={
$0(){var x,w=this.b
w.w=this.c
x=this.a
w.x=x.c
w.y=x.b
w.z=x.a},
$S:0}
C.bKD.prototype={
$1(d){return d.a===this.a.a.d},
$S:51}
C.bKE.prototype={
$1(d){return d.length!==0},
$S:7}
C.bKF.prototype={
$0(){var x=this,w=x.b
if(w.length===0)w=x.c
return A.Qx(x.a,x.d,w,null,null)},
$S:0}
C.bKG.prototype={
$0(){var x=null,w=this.a.O(y.q).f,v=this.b
w.a4(A.c7(x,x,x,x,x,B.x,x,A.h(v==null?"Podes pagar mais tarde nas Reservas.":"Podes pagar at\xe9 "+A.aw(v)+" "+B.bd[A.aq(v)-1]+", nas Reservas.",x,x,x,x,x,x,x),x,B.U,x,x,x,x,x,x,x,x,x,x))},
$S:0}
C.bKH.prototype={
$0(){var x=this,w=null,v=x.a.x
v.toString
v=A.a0(J.i(v,"id"))
A.ae(x.b).ag("/pay",new A.nS(v,x.c,"final_payment",x.d,w,w,w,!1,w,w,w,w,w,w,w),y.X)},
$S:0}
C.bKI.prototype={
$0(){return A.ae(this.a).ag("/partner-requests",null,y.X)},
$S:0}
C.bOn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bOl.prototype={
$0(){return this.a.e=!0},
$S:0}
C.bOm.prototype={
$0(){return this.a.e=!1},
$S:0}
C.bOo.prototype={
$0(){return this.a.z0("cancel_booking_change",A.R(["p_id",this.b],y.N,y.z),"Cancelado.")},
$S:0}
C.bOp.prototype={
$0(){return this.a.ru(this.b)},
$S:0}
C.bOq.prototype={
$0(){return this.a.z0("respond_booking_change",A.R(["p_id",this.b,"p_accept",!1],y.N,y.z),"Recusaste.")},
$S:0}
C.bOr.prototype={
$0(){return this.a.z0("respond_booking_change",A.R(["p_id",this.b,"p_accept",!0],y.N,y.z),"Aceite.")},
$S:0}
C.cF3.prototype={
$0(){return this.a.$1(J.i(this.b,this.c))},
$S:0}
C.cF4.prototype={
$0(){return this.a},
$S:223}
C.cF5.prototype={
$1(d){var x=J.a6(d)
if(x.h(d,"cancelled_at")==null)x=J.o(x.h(d,"status"),"pending")||J.o(x.h(d,"status"),"viewed")
else x=!1
return x},
$S:41}
C.b0h.prototype={
$2(d,e){var x=null
return A.w(x,A.N(A.a([A.a5(A.h(d,x,x,x,x,B.L,x,x),1),A.h(e,x,x,x,x,B.bL,x,x)],y.p),B.u,B.h,B.l,0,x),B.r,x,x,S.Kw,x,x,x,B.ei,x,x,x)},
$S:192}
C.cST.prototype={
$1(d){var x=this
return new C.Ov(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,null)},
$S:z+1}
C.bVv.prototype={
$0(){return this.a.w=!0},
$S:0}
C.bVw.prototype={
$0(){return this.a.w=!1},
$S:0}
C.bVF.prototype={
$1(d){var x=this.a
return x.p(new C.bVE(x,d))},
$S:14}
C.bVE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bVG.prototype={
$1(d){var x=this.a
return x.p(new C.bVD(x,d))},
$S:3}
C.bVD.prototype={
$0(){var x=this.b
this.a.gQU(0).sbu(0,x)
return x},
$S:0}
C.bVH.prototype={
$1(d){var x=this.a
return x.p(new C.bVC(x,d))},
$S:3}
C.bVC.prototype={
$0(){var x=this.a.gQT(),w=this.b
if(w==="Sem fim")w=""
x.sbu(0,w)
return w},
$S:0}
C.bVI.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.d(A.hf(!0,new C.bVA(t),u.b,y.y),$async$$0)
case 3:if(e!==!0||t.c==null){x=1
break}x=4
return A.d(t.kQ(new C.bVB(t),"Pedido cancelado."),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
C.bVA.prototype={
$1(d){var x=null
return new A.f0(D.cef,A.h(this.a.a.d+" \xe9 avisado. Se havia sinal cativo, \xe9 libertado.",x,x,x,x,x,x,x),A.a([new A.am(A.cR(B.t4,x,x,new C.bVx(d),x,x),x),new A.am(A.bD(D.cdl,new C.bVy(d),x),x)],y.p),x)},
$S:19}
C.bVx.prototype={
$0(){return A.ap(this.a,!1).au(!1)},
$S:0}
C.bVy.prototype={
$0(){return A.ap(this.a,!1).au(!0)},
$S:0}
C.bVB.prototype={
$0(){var x=$.Q().b
x===$&&A.b()
return x.aH("cancel_quote_request",A.R(["p_id",this.a.a.c],y.N,y.z),y.H)},
$S:122}
C.bVJ.prototype={
$0(){var x=this.a
return x.kQ(new C.bVz(x),"Pedido atualizado.")},
$S:0}
C.bVz.prototype={
$0(){var x,w,v,u,t,s=$.Q().b
s===$&&A.b()
x=this.a
w=x.a.c
v=x.gD_()
u=B.f.C(x.gzf().a.a)
if(u.length===0)u=null
t=B.f.C(x.gQU(0).a.a)
if(t.length===0)t=null
x=B.f.C(x.gQT().a.a)
return s.aH("update_quote_request",A.R(["p_id",w,"p_people",v,"p_message",u,"p_start",t,"p_end",x.length===0?null:x],y.N,y.z),y.H)},
$S:122}
C.cSN.prototype={
$1(d){var x=this
return new C.Ot(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,null)},
$S:z+2}
C.bV1.prototype={
$1(d){return d.a.h0(this.b)&&!B.e.c8(this.c,new C.bV0(this.a,d))},
$S:271}
C.bV0.prototype={
$1(d){return this.a.aqZ(d,this.b.a)},
$S:123}
C.bV2.prototype={
$1(d){var x=this.a
return x.aqZ(d.a,x.a.r)},
$S:271}
C.bV3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bV4.prototype={
$0(){return this.a.x=!0},
$S:0}
C.bV5.prototype={
$0(){return this.a.x=!1},
$S:0}
C.bVb.prototype={
$0(){var x=this.a
return x.p(new C.bVa(x,this.b))},
$S:0}
C.bVa.prototype={
$0(){var x=this.a
return x.e=x.d[this.b].a},
$S:0}
C.bVc.prototype={
$1(d){var x=this.a
return x.p(new C.bV9(x,d))},
$S:14}
C.bV9.prototype={
$0(){return this.a.f=this.b===1},
$S:0}
C.bVd.prototype={
$1(d){return this.a.p(new C.bV8())},
$S:3}
C.bV8.prototype={
$0(){},
$S:0}
C.bVe.prototype={
$0(){var x=this.a
return x.kQ(new C.bV7(x),"Cancelado.")},
$S:0}
C.bV7.prototype={
$0(){var x=$.Q().b
x===$&&A.b()
return x.aH("cancel_booking_change",A.R(["p_id",this.a.a.c],y.N,y.z),y.H)},
$S:122}
C.bVf.prototype={
$0(){var x=this.a
return x.kQ(new C.bV6(x,this.b),"Outro dia atualizado.")},
$S:0}
C.bV6.prototype={
$0(){var x,w,v,u,t,s,r=$.Q().b
r===$&&A.b()
x=this.a
w=x.a.c
v=x.ga21()
u=B.f.aN(B.j.k(A.aq(x.ga21())),2,"0")
t=B.f.aN(B.j.k(A.aw(x.ga21())),2,"0")
s=B.f.C(x.gzf().a.a)
if(s.length===0)s=null
x=x.gTe()?this.b:0
return r.aH("update_booking_change",A.R(["p_id",w,"p_to",""+A.aD(v)+"-"+u+"-"+t,"p_message",s,"p_price",x],y.N,y.z),y.H)},
$S:122}
C.csY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.csZ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ct_.prototype={
$0(){return this.a.e=!1},
$S:0}
C.ct1.prototype={
$0(){return this.a.zX("decline_quote_request",A.R(["p_quote_request_id",this.b],y.N,y.z),"Pedido recusado.")},
$S:0}
C.ct2.prototype={
$0(){return this.a.zX("accept_package_request",A.R(["p_quote_request_id",this.b],y.N,y.z),"Pedido aceite.")},
$S:0}
C.ct3.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=v.a
q=r.a
p=q.c
q=q.f
u=v.d
t=B.e.gJ(r.KF(u).split(" \xb7 "))
u=A.a([r.KF(u)],y.s)
s=v.f
if(s!=null)u.push(s)
s=v.r
if(s!=null)u.push(A.p(s)+" pessoas")
x=4
return A.d(E.a_K(v.b,q,p,t,null,v.c,new A.a7(u,new C.ct0(),y.U).a1(0," \xb7 "),v.w,v.e),$async$$0)
case 4:x=e?2:3
break
case 2:x=5
return A.d(r.zT(),$async$$0)
case 5:case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
C.ct0.prototype={
$1(d){return d.length!==0},
$S:7}
C.ct4.prototype={
$0(){return this.a.zX("cancel_quote_request",A.R(["p_id",this.b],y.N,y.z),"Pedido cancelado.")},
$S:0}
C.ct5.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
r=s.f
q=s.r
if(q==null)q="Evento"
s=s.w
if(s==null)s=t.KF(v.d)
u=v.e
if(u==null){t.a.toString
u=null}if(u==null)u=1
t.a.toString
x=4
return A.d(C.cSS(v.b,v.x,s,null,q,v.r==="proposal_sent",v.f,r,u,v.c,v.w),$async$$0)
case 4:x=e?2:3
break
case 2:x=5
return A.d(t.zT(),$async$$0)
case 5:case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(C.ac2.prototype,"ga4Q","T6",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[C.kt,C.jG,C.kL,C.ij,C.bz3,C.bk1])
x(A.cM,[C.cJB,C.b0h])
x(A.bv,[C.cJC,C.bKD,C.bKE,C.cF5,C.cST,C.bVF,C.bVG,C.bVH,C.bVA,C.cSN,C.bV1,C.bV0,C.bV2,C.bVc,C.bVd,C.ct0])
w(C.a0O,A.dB)
w(C.ac2,A.dx)
x(A.bO,[C.bKC,C.bKF,C.bKG,C.bKH,C.bKI,C.bOn,C.bOl,C.bOm,C.bOo,C.bOp,C.bOq,C.bOr,C.cF3,C.cF4,C.bVv,C.bVw,C.bVE,C.bVD,C.bVC,C.bVI,C.bVx,C.bVy,C.bVB,C.bVJ,C.bVz,C.bV3,C.bV4,C.bV5,C.bVb,C.bVa,C.bV9,C.bV8,C.bVe,C.bV7,C.bVf,C.bV6,C.csY,C.csZ,C.ct_,C.ct1,C.ct2,C.ct3,C.ct4,C.ct5])
x(A.G,[C.Rq,C.Ov,C.Ot,C.a8f])
x(A.Z,[C.aEu,C.aGC,C.aGB,C.aOl])
w(C.aov,A.H)
w(C.ID,A.fj)})()
A.bq(b.typeUniverse,JSON.parse('{"a0O":{"G":[],"e":[],"f":[]},"ac2":{"Z":["a0O"]},"Rq":{"G":[],"e":[],"f":[]},"aEu":{"Z":["Rq"]},"aov":{"H":[],"e":[],"f":[]},"Ov":{"G":[],"e":[],"f":[]},"Ot":{"G":[],"e":[],"f":[]},"aGC":{"Z":["Ov"]},"aGB":{"Z":["Ot"]},"a8f":{"G":[],"e":[],"f":[]},"aOl":{"Z":["a8f"]}}'))
var y=(function rtii(){var x=A.B
return{M:x("D<t<fK>>"),l:x("r<ij>"),g:x("r<aa>"),r:x("r<+(aa,c)>"),L:x("r<+(c,c)>"),s:x("r<c>"),I:x("r<jA>"),p:x("r<e>"),R:x("r<kL>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dC"),S:x("fq<@>"),o:x("+booked,bookingIds,pending,rows(T,t<c>,v,t<kL>)"),N:x("c"),_:x("a7<+(aa,c)>"),U:x("a7<c>"),q:x("dj"),y:x("C"),z:x("@"),O:x("t<@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.KP=new C.bk1()
D.kr=new C.ID(0,"pending")
D.ajv=new C.ID(1,"urgent")
D.ks=new C.ID(2,"done")
D.kt=new C.ID(3,"doneLine")
D.eg=new C.ID(4,"neutral")
D.byY=x([],A.B("r<jG>"))
D.Lg=new C.kt(!1,D.byY)
D.atZ=new A.a3(4,3,4,8)
D.aDm=new A.ba(H.jT,20,B.t,null,null,null)
D.aE7=new A.ba(H.jT,12,B.cn,null,null,null)
D.aI2=new L.n0("M5 12.5l4.5 4.5L19 7.5",14,B.V,2.4,!1,K.cQ,null)
D.aIa=new L.n0("M2 12.5l4.5 4.5L16 7.5M11 15.5l1.5 1.5L22 7.5",16,B.a4,2.4,!1,K.cQ,null)
D.kK=x([],y.l)
D.bz9=x([],y.R)
D.byJ=x([],y.r)
D.bQp=new A.X("Proposta recebida",D.ks)
D.bQs=new A.X("Proposta enviada",D.eg)
D.bQC=new A.X("Aceite",D.ks)
D.bQD=new A.X("Aceite",D.kt)
D.a6B=new A.X("Cancelado",D.eg)
D.H0=new A.X("Por responder",D.kr)
D.bRj=new A.X("Recusado",D.eg)
D.bTv=new A.Ce([null,B.cL,B.cU,B.cU,null])
D.bTw=new A.Ce([B.a4,B.cL,B.cU,B.cU,null])
D.bTx=new A.Ce([null,B.dG,B.cn,B.V,null])
D.cel=new A.E("Ainda n\xe3o h\xe1 uma reserva aceite nesta conversa.",null,null,null,null,null,null,null,null,null)
D.a8R=new A.bI(D.cel,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.x,null)
D.c85=new A.E("N\xe3o foi poss\xedvel concluir. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.a8W=new A.bI(D.c85,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.x,null)
D.cgq=new A.E("N\xe3o foi poss\xedvel enviar o anexo. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.a8X=new A.bI(D.cgq,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.x,null)
D.c29=new A.P(!0,B.V,null,null,null,null,12,B.b1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.caH=new A.E("O dia e o local v\xeam do evento: mudam-se nas Defini\xe7\xf5es do evento.",null,B.bK,null,null,null,null,null,null,null)
D.cdl=new A.E("Cancelar pedido",null,null,null,null,null,null,null,null,null)
D.cef=new A.E("Cancelar o pedido?",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["o+Mvj344IO/hfWxMGAIM14muXb4="]=a.current})($__dart_deferred_initializers__);