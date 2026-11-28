((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,H,I,E,K,C={kh:function kh(d,e){this.a=d
this.b=e},
PY(d){var x=0,w=A.n(y.T),v,u,t,s,r,q,p,o,n
var $async$PY=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.alG(null,d),$async$PY)
case 3:u=$.S().b
u===$&&A.b()
x=4
return A.d(u.R("bookings").an(0,"status, total_amount, deposit_amount, payments(type, status)").W("proposal_id",d).d4(0,"created_at",!1).hR(1).d0(),$async$PY)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a7(t)
s=A.D(u.h(t,"status"))
if(s==null)s=""
if(B.f.b2(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
q=new C.cI4(r==null?B.am:r)
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
return A.m($async$PY,w)},
cI4:function cI4(d){this.a=d},
cI5:function cI5(d,e){this.a=d
this.b=e},
d16(d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new C.jB(j,i,q,p,m,o,n,l,k,g,f,e,d)},
jB:function jB(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=d
_.d=e
_.e=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p},
daP(d,e){var x
if(e==null)return""
if(d==="date"){x=A.dq(e)
if(x!=null)return B.ez[A.hi(x)-1]+", "+A.aI(x)+" "+B.bO[A.ax(x)-1]}if(d==="people")return e+" pessoas"
return e},
R0:function R0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDL:function aDL(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
bMZ:function bMZ(d,e){this.a=d
this.b=e},
bMX:function bMX(d){this.a=d},
bMY:function bMY(d){this.a=d},
bN_:function bN_(d,e){this.a=d
this.b=e},
bN0:function bN0(d,e){this.a=d
this.b=e},
bN1:function bN1(d,e){this.a=d
this.b=e},
bN2:function bN2(d,e){this.a=d
this.b=e},
dCL(d){var x,w,v=new A.ad(Date.now(),0,!1),u=B.j.aT(A.bB(A.aD(v),A.ax(v),A.aI(v),0,0).cS(A.bB(A.aD(d),A.ax(d),A.aI(d),0,0)).a,864e8)
if(u===0)return"Hoje"
if(u===1)return"Ontem"
x=B.bO[A.ax(d)-1]
w=A.aD(d)===A.aD(v)?"":" "+A.aD(d)
return""+A.aI(d)+" "+x+w},
dcw(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=y.p,k=A.a([],l)
for(x=g!=null,w=0;w<f.length;++w){v=f[w]
u=v.r
t=u.e0()
s=w===0
r=s?m:f[w-1].r.e0()
if(r==null||A.aD(r)!==A.aD(t)||A.ax(r)!==A.ax(t)||A.aI(r)!==A.aI(t)){s=s?0:8
q=new A.b5(999,999)
k.push(new A.Q(new A.a0(0,s,0,12),new A.fw(B.L,m,m,A.B(m,A.h(C.dCL(t),m,m,m,m,B.zs,m,m,m),B.r,m,m,new A.M(B.f7,m,m,new A.ch(q,q,q,q),m,m,B.y),m,m,m,I.NF,m,m,m),m),m))}p=e.$1(v)
s=p?B.dY:B.bg
k.push(new A.d1(s,m,m,d.$2(v,p),m))
o=!1
if(p){if(x){s=g.a
q=u.a
if(s>=q)u=s===q&&g.b<u.b
else u=!0
u=!u}else u=o
o=u}u=p?B.dY:B.bg
s=B.f.aY(B.j.k(A.ic(t)),2,"0")
q=B.f.aY(B.j.k(A.hY(t)),2,"0")
s=A.a([A.h(s+":"+q,m,m,m,m,D.c2X,m,m,m)],l)
if(p){q=o?"Vista":"Enviada"
n=o?D.aIS:D.aIL
B.e.n(s,A.a([B.el,new A.jp(new A.n4(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,q,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a5,m,m,m,m),!1,!1,m,!1,!1,n,m)],l))}k.push(new A.Q(D.auU,new A.d1(u,m,m,A.N(s,B.w,B.h,B.K,0,m,m),m),m))}return k},
uN(d,e,f,g,h,i,j,k,l,m,n,o){return new C.ao4(f,n,m,j,e,d,g,k,i,l,o,null)},
jR:function jR(d,e,f){this.a=d
this.b=e
this.c=f},
ao4:function ao4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.as=m
_.at=n
_.a=o},
b_v:function b_v(){},
R3:function R3(d,e){this.a=d
this.b=e},
cQC(d,e,f,g,h,i,j,k,l,m,n){var x=0,w=A.n(y.y),v
var $async$cQC=A.j(function(o,p){if(o===1)return A.k(p,w)
for(;;)switch(x){case 0:x=3
return A.d(A.c9(null,new C.cQD(m,k,h,f,l,g,j,i,n,e),!1,d,!0,!0,null,y.y),$async$cQC)
case 3:v=p===!0
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cQC,w)},
alE(d,e,f,g,h,i){var x=0,w=A.n(y.y),v
var $async$alE=A.j(function(j,k){if(j===1)return A.k(k,w)
for(;;)switch(x){case 0:x=3
return A.d(A.c9(null,new C.cQq(e,h,i,f,g),!1,d,!0,!0,null,y.y),$async$alE)
case 3:v=k===!0
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$alE,w)},
aiq:function aiq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cxn:function cxn(){},
cxp:function cxp(d){this.a=d},
cxq:function cxq(d){this.a=d},
aed:function aed(d,e,f){this.c=d
this.d=e
this.a=f},
cQD:function cQD(d,e,f,g,h,i,j,k,l,m){var _=this
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
Od:function Od(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aG0:function aG0(){var _=this
_.r=_.f=_.e=_.d=$
_.w=!1
_.c=_.a=null},
bUq:function bUq(d){this.a=d},
bUr:function bUr(d){this.a=d},
bUy:function bUy(d){this.a=d},
bUx:function bUx(d,e){this.a=d
this.b=e},
bUz:function bUz(d,e){this.a=d
this.b=e},
bUv:function bUv(d){this.a=d},
bUs:function bUs(d){this.a=d},
bUt:function bUt(d){this.a=d},
bUw:function bUw(d){this.a=d},
bUA:function bUA(d){this.a=d},
bUu:function bUu(d){this.a=d},
bxh:function bxh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cQq:function cQq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NX:function NX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDM:function aDM(d,e,f,g){var _=this
_.d=0
_.e=$
_.f=d
_.r=e
_.w=f
_.x=g
_.y=!1
_.c=_.a=null},
bNg:function bNg(){},
bN5:function bN5(d){this.a=d},
bN6:function bN6(d){this.a=d},
bN4:function bN4(d){this.a=d},
bN3:function bN3(){},
bNb:function bNb(){},
bNc:function bNc(d){this.a=d},
bNa:function bNa(d,e){this.a=d
this.b=e},
bNd:function bNd(d){this.a=d},
bN9:function bN9(d,e){this.a=d
this.b=e},
bNe:function bNe(d){this.a=d},
bN8:function bN8(d){this.a=d},
bNf:function bNf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bN7:function bN7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d6a(d,e,f,g,h,i){return new C.a7N(d,h,i,g,f,e,null)},
a7N:function a7N(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aNI:function aNI(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cs5:function cs5(d,e){this.a=d
this.b=e},
cs6:function cs6(d){this.a=d},
cs7:function cs7(d){this.a=d},
cs9:function cs9(d,e){this.a=d
this.b=e},
csa:function csa(d,e){this.a=d
this.b=e},
csb:function csb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cs8:function cs8(){},
csc:function csc(d,e){this.a=d
this.b=e},
csd:function csd(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bj8:function bj8(){}},D,L,M,N
J=c[1]
A=c[0]
B=c[2]
F=c[210]
G=c[280]
H=c[310]
I=c[364]
E=c[119]
K=c[120]
C=a.updateHolder(c[83],C)
D=c[231]
L=c[169]
M=c[398]
N=c[399]
C.kh.prototype={
axp(d,e){var x=d==null?this.a:d
return new C.kh(x,e==null?this.b:e)},
ip(d){return this.axp(d,null)},
Fg(d){return this.axp(null,d)}}
C.jB.prototype={}
C.R0.prototype={
P(){return new C.aDL()}}
C.aDL.prototype={
ag(){this.aA()
this.D3()},
D3(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$D3=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
r=$.S().b
r===$&&A.b()
x=6
return A.d(r.R("booking_change_requests").an(0,"kind, from_value, to_value, message, status, booking_id, new_price").W("id",t.a.c).d0(),$async$D3)
case 6:s=e
if(t.c!=null)t.p(new C.bMZ(t,s))
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
return A.m($async$D3,w)},
wq(d,e,f){return this.aRL(d,e,f)},
aRL(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o
var $async$wq=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.p(new C.bMX(r))
u=4
q=$.S().b
q===$&&A.b()
x=7
return A.d(q.aM(d,e,y.z),$async$wq)
case 7:x=8
return A.d(r.D3(),$async$wq)
case 8:q=r.c
if(q!=null)q.O(y.q).f.a3(A.c6(null,null,null,null,null,B.z,null,A.h(f,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 4:u=3
o=t.pop()
q=r.c
if(q!=null)q.O(y.q).f.a3(D.a9g)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new C.bMY(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$wq,w)},
wy(d){return this.aYA(d)},
aYA(a0){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$wy=A.j(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:f=J.a7(a0)
e=A.D(f.h(a0,"kind"))
if(e==null)e="other"
x=e==="date"?3:4
break
case 3:f=f.h(a0,"to_value")
o=A.dq(A.q(f==null?"":f))
if(o==null)o=new A.ad(Date.now(),0,!1)
n=new A.ad(Date.now(),0,!1)
f=s.c
f.toString
m=o.eA(n)?n:o
x=5
return A.d(L.a_l(f,n,m,A.bB(A.aD(n)+3,1,1,0,0),D.bF1),$async$wy)
case 5:l=a2
if(l==null||s.c==null){x=1
break}f=B.f.aY(B.j.k(A.ax(l)),2,"0")
m=B.f.aY(B.j.k(A.aI(l)),2,"0")
x=6
return A.d(s.wq("update_booking_change",A.T(["p_id",s.a.c,"p_to",""+A.aD(l)+"-"+f+"-"+m],y.N,y.z),"Dia mudado."),$async$wy)
case 6:x=1
break
case 4:r=A.D(f.h(a0,"booking_id"))
if(r==null){x=1
break}q=0
u=8
m=$.S().b
m===$&&A.b()
x=11
return A.d(m.R("bookings").an(0,"people").W("id",r).d0(),$async$wy)
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
return A.d(C.alE(m,r,i,new C.bxh(h,e,A.q(g==null?"":g),A.D(f.h(a0,"message"))),"A outra parte","Pedido de altera\xe7\xe3o"),$async$wy)
case 14:x=a2?12:13
break
case 12:x=15
return A.d(s.D3(),$async$wy)
case 15:case 13:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$wy,w)},
u(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="to_value",a1="from_value",a2="Outro dia",a3="new_price",a4=e.d
if(a4==null)return B.mr
x=J.a7(a4)
w=A.D(x.h(a4,"kind"))
if(w==null)w="other"
v=A.D(x.h(a4,"status"))
if(v==null)v="open"
u=C.daP(w,A.D(x.h(a4,a0)))
t=C.daP(w,A.D(x.h(a4,a1)))
switch(v){case"accepted":s=D.bRI
break
case"declined":s=D.bSq
break
case"cancelled":s=D.a75
break
default:s=e.a.d
r=s?"Enviado \xb7 \xe0 espera":"Por responder"
r=new A.a3(r,s?D.fo:D.nf)
s=r
break}q=d
p=s.b
q=p
o=e.a.c
if(w==="people"){r=x.h(a4,a1)
n=A.ev(A.q(r==null?"":r),d)
r=x.h(a4,a0)
m=A.ev(A.q(r==null?"":r),d)
r=n!=null&&m!=null&&m<n?"Menos":"Mais"
l=x.h(a4,a1)
k=r+" pessoas: "+A.q(l==null?"?":l)+" \u2192 "+A.q(x.h(a4,a0))}else if(w==="time")k="Hora: "+u
else k=t.length===0?u:t+" \u2192 "+u
r=A.D(x.h(a4,"message"))
j=r==null?d:B.f.C(r)
switch(w){case"date":r=a2
break
case"scope":r="O que inclui"
break
case"other":r="Outra coisa"
break
default:r=d
break}l=w==="date"
i=l?F.o0:N.Eo
h=l?a2:"Pedido de altera\xe7\xe3o"
if(l)r=e.a.d?"O dia pedido j\xe1 est\xe1 ocupado":d
else r=r!=null?r:d
l=e.a.e
g=A.a([],y.L)
if(x.h(a4,a3)!=null)g.push(new A.a3("Novo total",A.aM(A.ds(x.h(a4,a3)),!1)))
x=j==null||j.length===0?d:"\xab"+j+"\xbb"
if(v!=="open"||e.e)f=D.FA
else{f=y.l
f=e.a.d?A.a([new C.jR("Cancelar",new C.bN_(e,o),!1),new C.jR("Editar",new C.bN0(e,a4),!1)],f):A.a([new C.jR("Recusar",new C.bN1(e,o),!1),new C.jR("Aceitar",new C.bN2(e,o),!0)],f)}return C.uN(f,d,h,i,l,x,d,g,s.a,r,k,q)}}
C.jR.prototype={}
C.ao4.prototype={
u(a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null
switch(a7.at.a){case 0:x=new A.rA([B.eb,B.t,B.A,B.eb,A.bz(B.eb,1.5)])
break
case 1:x=new A.rA([B.c1,B.t,B.A,B.c1,A.bz(B.c1,1.5)])
break
case 2:x=D.bUu
break
case 3:x=D.bUv
break
case 4:x=D.bUw
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
n=new C.b_v()
x=B.k.af(A.aw(a9,a8,y.w).w.a.a*0.78,260,320)
m=A.W(22)
l=w==null?a8:A.bz(w,1.5)
k=y.p
j=A.a([A.N(A.a([A.B(B.L,A.b3(a7.x,B.d0,a8,a8,16),B.r,a8,a8,B.mZ,a8,28,a8,a8,a8,a8,28),B.ag,A.a4(A.h(a7.c.toUpperCase(),a8,a8,a8,a8,B.aO,a8,a8,a8),1)],k),B.w,B.h,B.l,0,a8,a8)],k)
i=A.W(999)
B.e.n(j,A.a([B.ac,new A.d1(B.bg,a8,a8,A.B(a8,A.N(A.a([A.B(a8,a8,B.r,a8,a8,new A.M(t,a8,a8,a8,a8,a8,B.av),a8,7,a8,a8,a8,a8,7),B.bn,A.h(a7.as,a8,a8,a8,a8,A.aH(a8,a8,u,a8,a8,a8,a8,a8,a8,a8,a8,12,a8,a8,B.F,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)],k),B.w,B.h,B.K,0,a8,a8),B.r,a8,a8,new A.M(v,a8,s,i,a8,a8,B.y),a8,a8,a8,B.lC,a8,a8,a8),a8)],k))
j.push(B.ac)
j.push(A.h(a7.d,2,B.a3,a8,a8,B.ae,a8,a8,a8))
i=a7.e
if(i!=null&&i.length!==0)j.push(new A.Q(G.qu,A.h(i,a8,a8,a8,a8,B.P,a8,a8,a8),a8))
j.push(B.ac)
for(i=a7.y,h=i.length,g=0;g<i.length;i.length===h||(0,A.K)(i),++g){f=i[g]
j.push(n.$2(f.a,f.b))}i=a7.f
if(i!=null)j.push(n.$2("Total",A.aM(i,!1)))
i=a7.r
if(i!=null)j.push(n.$2("Sinal para confirmar",A.aM(i,!1)))
i=a7.z
if(i!=null)B.e.n(j,A.a([B.au,A.h(i,a8,a8,a8,a8,B.tk,a8,a8,a8)],k))
i=a7.w
if(i.length!==0){h=A.a([],k)
for(e=0;e<i.length;++e){d=A.a([],k)
if(e>0)d.push(B.ag)
a0=i[e]
a1=a0.b
a2=a0.c
a3=a2&&a1!=null?B.A:B.t
a4=new A.b5(999,999)
if(a2&&a1!=null)a5=a8
else{a6=new A.bc(a1==null?B.fp:B.A,1.5,B.ak,-1)
a5=new A.dS(a6,a6,a6,a6)}if(a1==null)a2=B.U
else a2=a2?B.t:B.A
d.push(new A.bP(1,B.aw,new A.hx(A.B(B.L,A.h(a0.a,1,B.a3,a8,a8,new A.P(!0,a2,a8,a8,a8,a8,13,B.F,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),B.r,a8,a8,new A.M(a3,a8,a5,new A.ch(a4,a4,a4,a4),a8,a8,B.y),a8,36,a8,B.hy,a8,a8,a8),a1,a8,a8),a8))
B.e.n(h,d)}B.e.n(j,A.a([B.R,A.N(h,B.w,B.h,B.l,0,a8,a8)],k))}return A.aG(A.B(a8,A.A(j,B.G,B.h,B.l,0,B.u),B.r,a8,a8,new A.M(B.t,a8,l,m,a8,a8,B.y),a8,a8,a8,B.bj,a8,a8,a8),a8,x)}}
C.R3.prototype={
I(){return"ChatCardTone."+this.b}}
C.aiq.prototype={
u(d){var x=this,w=null,v=new C.cxn(),u=A.W(22),t=y.p,s=A.a([],t),r=x.c
if(r.length!==0)s.push(A.h(r,w,w,w,w,B.P,w,w,w))
s.push(A.h(""+x.d+" pessoas",w,w,w,w,B.ae,w,w,w))
r=x.e
if(r.length!==0)s.push(A.h(r,w,w,w,w,B.P,w,w,w))
return A.B(w,A.N(A.a([A.a4(A.A(s,B.H,B.h,B.l,0,B.u),1),v.$3("\u2212",!1,new C.cxp(x)),B.af,v.$3("+",!0,new C.cxq(x))],t),B.w,B.h,B.l,0,w,w),B.r,w,w,new A.M(B.a7,w,w,u,w,w,B.y),w,w,w,B.D5,w,w,w)}}
C.aed.prototype={
u(d){var x=null,w=A.W(26)
return A.B(x,A.N(A.a([A.h(this.c,x,x,x,x,B.P,x,x,x),B.ag,A.a4(A.cr(x,B.a8,!1,x,!0,B.z,x,A.cw(),this.d,x,x,x,x,x,2,D.Qd,B.Z,!0,x,!0,x,!1,x,B.aD,x,x,A.a([new A.DR(A.aT("[0-9:]",!0,!1,!1),!0,"")],y.V),x,B.hU,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,B.ar,x,x,x,x,x,x,x,x,x,x,x,B.bY,!0,B.aq,x,B.b2,x,x,x,x),1)],y.p),B.w,B.h,B.l,0,x,x),B.r,x,x,new A.M(B.a7,x,x,w,x,x,B.y),x,52,x,B.fr,x,x,x)}}
C.Od.prototype={
P(){return new C.aG0()}}
C.aG0.prototype={
gDd(){var x=this.d
if(x===$){x=this.a.r
x=this.d=x<1?1:x}return x},
ga2s(){var x,w=this.e
if(w===$){x=this.a.x
if(x==null)x=""
w=this.e=new A.aE(new A.bD(x,B.aI,B.aA),$.aa())}return w},
ga2t(d){var x,w=this.f
if(w===$){x=this.a.z
if(x==null)x=""
w=this.f=new A.aE(new A.bD(x,B.aI,B.aA),$.aa())}return w},
ga2r(){var x,w=this.r
if(w===$){x=this.a.Q
if(x==null)x=""
w=this.r=new A.aE(new A.bD(x,B.aI,B.aA),$.aa())}return w},
m(){var x=this,w=x.ga2s(),v=w.Y$=$.aa()
w.V$=0
w=x.ga2t(0)
w.Y$=v
w.V$=0
w=x.ga2r()
w.Y$=v
w.V$=0
x.a6()},
q9(d,e){return this.bh4(d,e)},
bh4(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p
var $async$q9=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.w){x=1
break}s.p(new C.bUq(s))
u=4
x=7
return A.d(d.$0(),$async$q9)
case 7:r=s.c
if(r==null){x=1
break}r.O(y.q).f.a3(A.c6(null,null,null,null,null,B.z,null,A.h(e,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
r=s.c
r.toString
A.am(r,!1).ad(!0)
u=2
x=6
break
case 4:u=3
p=t.pop()
if(s.c==null){x=1
break}s.p(new C.bUr(s))
s.c.O(y.q).f.a3(A.c6(null,null,null,null,null,B.z,null,A.h("N\xe3o foi poss\xedvel guardar. V\xea se as horas est\xe3o como 14:00.",null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
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
if(v.y)w.push(new E.WW("J\xe1 tem uma proposta","Ao guardar, "+v.d+" \xe9 avisado e pode enviar uma proposta nova. A atual deixa de valer.",r))
v=A.W(22)
u=A.a([A.h(s.a.e,r,r,r,r,B.ae,r,r,r)],x)
t=s.a.f
if(t.length!==0)u.push(A.h(t,r,r,r,r,B.P,r,r,r))
v=A.B(r,new A.ek(B.d9,A.N(A.a([A.a4(A.A(u,B.H,B.h,B.K,0,B.u),1),A.B(r,H.Ev,B.r,r,r,B.u4,r,24,r,r,r,r,24)],x),B.w,B.h,B.l,0,r,r),r),B.r,r,r,new A.M(B.a7,r,r,v,r,r,B.y),r,r,r,B.d2,r,r,r)
w.push(A.A(A.a([A.h("PARA QUE EVENTO",r,r,r,r,B.aO,r,r,r),B.S,v],x),B.G,B.h,B.l,0,B.u))
v=s.gDd()
w.push(A.A(A.a([A.h("PESSOAS",r,r,r,r,B.aO,r,r,r),B.S,new C.aiq("",v,"",new C.bUy(s),r)],x),B.G,B.h,B.l,0,B.u))
v=A.N(A.a([A.a4(new C.aed("In\xedcio",s.ga2t(0),r),1),B.ag,A.a4(new C.aed("Fim",s.ga2r(),r),1)],x),B.w,B.h,B.l,0,r,r)
w.push(A.A(A.a([A.h("HORA",r,r,r,r,B.aO,r,r,r),B.S,v],x),B.G,B.h,B.l,0,B.u))
v=s.ga2s()
w.push(A.A(A.a([A.h("O QUE PROCURAS",r,r,r,r,B.aO,r,r,r),B.S,new E.wd(v,"O que procuras",4,r,r)],x),B.G,B.h,B.l,0,B.u))
w.push(D.ch0)
x=s.w
v=x?r:new C.bUz(s,d)
return E.cFb(d,w,new E.NV("Cancelar pedido",v,"Guardar",x?r:new C.bUA(s),1,r),new E.Ox("Editar pedido","Pedido de or\xe7amento \xb7 "+q,r))}}
C.bxh.prototype={}
C.NX.prototype={
P(){var x=$.aa()
return new C.aDM(new A.aE(B.al,x),new A.aE(B.al,x),new A.aE(B.al,x),new A.aE(B.al,x))}}
C.aDM.prototype={
gDd(){var x=this.e
return x===$?this.e=this.a.f+1:x},
ag(){var x,w,v,u,t=this
t.aA()
x=t.a.r
if(x!=null){w=x.b
t.d=B.j.af(B.e.dh(D.FY,w),0,3)
v=x.d
if(v==null)v=""
t.x.sbt(0,v)
if(w==="people"){v=A.ev(x.c,null)
t.e=v==null?t.gDd():v}if(w==="time"){v=y.e
u=A.U(new A.ak(A.a(x.c.split("\u2013"),y.s),new C.bNg(),v),v.i("aZ.E"))
t.f.sbt(0,B.e.gM(u))
if(u.length>1)t.r.sbt(0,u[1])}if(w==="scope"||w==="other")t.w.sbt(0,x.c)}},
m(){var x=this,w=x.f,v=w.Y$=$.aa()
w.V$=0
w=x.r
w.Y$=v
w.V$=0
w=x.w
w.Y$=v
w.V$=0
w=x.x
w.Y$=v
w.V$=0
x.a6()},
gaWx(){var x,w,v=this
switch(D.FY[v.d]){case"people":x=""+v.gDd()
break
case"time":x=B.f.C(v.f.a.a)
if(x.length===0)x=null
else{x=A.a([x],y.s)
w=B.f.C(v.r.a.a)
if(w.length!==0)x.push(w)
x=B.e.a2(x," \u2013 ")}break
default:x=B.f.C(v.w.a.a)
if(x.length===0)x=null
break}return x},
q9(d,e){return this.bh3(d,e)},
bh3(d,e){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p
var $async$q9=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(s.y){x=1
break}s.p(new C.bN5(s))
u=4
x=7
return A.d(d.$0(),$async$q9)
case 7:r=s.c
if(r==null){x=1
break}r.O(y.q).f.a3(A.c6(null,null,null,null,null,B.z,null,A.h(e,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
r=s.c
r.toString
A.am(r,!1).ad(!0)
u=2
x=6
break
case 4:u=3
p=t.pop()
if(s.c==null){x=1
break}s.p(new C.bN6(s))
s.c.O(y.q).f.a3(A.c6(null,null,null,null,null,B.z,null,A.h("N\xe3o foi poss\xedvel enviar. Tenta novamente.",null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$q9,w)},
any(d,e){var x=null,w=A.W(26)
return A.a4(A.B(x,A.N(A.a([A.h(d,x,x,x,x,B.P,x,x,x),B.ag,A.a4(A.cr(x,B.a8,!1,x,!0,B.z,x,A.cw(),e,x,x,x,x,x,2,D.Qd,B.Z,!0,x,!0,x,!1,x,B.aD,x,x,A.a([new A.DR(A.aT("[0-9:]",!0,!1,!1),!0,"")],y.V),x,B.hU,x,x,x,1,x,x,!1,"\u2022",x,new C.bN4(this),x,x,x,!1,x,x,!1,x,!0,x,B.ar,x,x,x,x,x,x,x,x,x,x,x,B.bY,!0,B.aq,x,B.b2,x,x,x,x),1)],y.p),B.w,B.h,B.l,0,x,x),B.r,x,x,new A.M(B.a7,x,x,w,x,x,B.y),x,52,x,B.fr,x,x,x),1)},
u(d){var x,w,v,u,t,s=this,r=null,q=s.a,p=q.r!=null,o=D.FY[s.d],n=p?"Editar altera\xe7\xe3o":"Pedir altera\xe7\xe3o"
q=q.e
x=y.p
w=A.a([],x)
if(p)w.push(new E.WW("Enviado \xb7 por responder","Enquanto "+s.a.d+" n\xe3o responder, podes mudar ou cancelar.",r))
v=s.d
u=p?new C.bNb():new C.bNc(s)
w.push(A.A(A.a([A.h("O QUE MUDA",r,r,r,r,B.aO,r,r,r),B.S,new E.YA(D.bB5,v,u,r)],x),B.G,B.h,B.l,0,B.u))
if(o==="people")w.push(new C.aiq("Agora "+s.a.f+" \xb7 passa a",s.gDd(),"",new C.bNd(s),r))
else if(o==="time")w.push(A.A(A.a([D.ces,B.S,A.N(A.a([s.any("In\xedcio",s.f),B.ag,s.any("Fim",s.r)],x),B.w,B.h,B.l,0,r,r)],x),B.G,B.h,B.l,0,B.u))
else{v=o==="scope"?"Trocar o \xe1lbum de 30 pelo de 50 p\xe1ginas.":"Escreve o que querem mudar."
w.push(new E.wd(s.w,v,3,r,r))}w.push(A.A(A.a([A.h("MENSAGEM (OPCIONAL)",r,r,r,r,B.aO,r,r,r),B.S,new E.wd(s.x,r,2,r,r)],x),B.G,B.h,B.l,0,B.u))
w.push(A.h(s.a.d+" aceita ou recusa. Se o pre\xe7o mudar, chega uma proposta nova para aceitar.",r,r,r,r,B.cf,r,r,r))
x=p?"Cancelar pedido":r
v=s.y
u=v?r:new C.bNe(s)
t=p?"Guardar":"Enviar pedido"
return E.cFb(d,w,new E.NV(x,u,t,v?r:new C.bNf(s,d,p,o),1,r),new E.Ox(n,q,r))}}
C.a7N.prototype={
P(){return new C.aNI()}}
C.aNI.prototype={
ag(){this.aA()
this.A4()},
A4(){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p
var $async$A4=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
r=$.S().b
r===$&&A.b()
x=6
return A.d(r.R("quote_requests").an(0,"id, status, people, message, event_date, location, cancelled_at, package_snapshot, start_time, end_time").W("wedding_id",t.a.c).W("partner_id",t.a.d).d4(0,"created_at",!1).hR(1).d0(),$async$A4)
case 6:s=e
if(t.c!=null)t.p(new C.cs5(t,s))
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
return A.m($async$A4,w)},
A6(d,e,f){return this.bh1(d,e,f)},
bh1(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o
var $async$A6=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.p(new C.cs6(r))
u=4
q=$.S().b
q===$&&A.b()
x=7
return A.d(q.aM(d,e,y.z),$async$A6)
case 7:x=8
return A.d(r.A4(),$async$A6)
case 8:q=r.c
if(q!=null)q.O(y.q).f.a3(A.c6(null,null,null,null,null,B.z,null,A.h(f,null,null,null,null,null,null,null,null),null,B.V,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 4:u=3
o=t.pop()
q=r.c
if(q!=null)q.O(y.q).f.a3(D.a9g)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new C.cs7(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$A6,w)},
L_(d){var x,w="location",v=J.a7(d),u=v.h(d,"event_date"),t=A.dq(A.q(u==null?"":u))
u=A.a([],y.s)
if(t!=null)u.push(B.ez[A.hi(t)-1]+", "+A.aI(t)+" "+B.bO[A.ax(t)-1])
x=A.D(v.h(d,w))
x=x==null?null:B.f.C(x).length!==0
if(x===!0)u.push(B.f.C(A.a1(v.h(d,w))))
return B.e.a2(u," \xb7 ")},
u(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5="package_snapshot",a6="Pedido de or\xe7amento",a7=a3.d
if(a7==null)return B.mr
x=J.a7(a7)
w=A.a1(x.h(a7,"id"))
v=A.D(x.h(a7,"status"))
if(v==null)v="pending"
u=x.h(a7,"cancelled_at")==null
t=y.f
s=t.b(x.h(a7,a5))?t.a(x.h(a7,a5)):a4
t=s==null
r=!t
if(u)q=v==="pending"||v==="viewed"||v==="proposal_sent"
else q=!1
if(u)p=v==="pending"||v==="viewed"
else p=!1
o=A.aL(x.h(a7,"people"))
n=o==null?a4:B.k.F(o)
o=A.D(x.h(a7,"message"))
m=o==null?a4:B.f.C(o)
o=A.D(t?a4:J.i(s,"name"))
l=o==null?a4:B.f.C(o)
if(l==null)l=""
t=A.D(x.h(a7,"start_time"))
k=t==null?a4:B.f.C(t)
x=A.D(x.h(a7,"end_time"))
j=x==null?a4:B.f.C(x)
if(k==null||k.length===0)i=a4
else i=j==null||j.length===0?k:k+" \u2013 "+j
h=l.length===0?a6:"Pacote "+l
if(!u)g=D.a75
else{A:{if("proposal_sent"===v){x=a3.a.e?D.bRB:D.bRz
break A}if("accepted"===v){x=D.bRH
break A}if("declined"===v||"expired"===v){x=new A.a3(a3.a.e?"Recusado":"Sem resposta ou recusado",D.fo)
break A}if(a3.a.e)x=D.Hg
else{x=r?"\xc0 espera do parceiro \xb7 at\xe9 48 h":"Enviado \xb7 \xe0 espera da resposta"
x=new A.a3(x,r?D.nf:D.fo)}break A}g=x}f=g.a
e=a4
d=g.b
e=d
a0=f
a1=A.a([],y.l)
x=!a3.e
if(x&&a3.a.e&&p){a1.push(new C.jR("Recusar",new C.cs9(a3,w),!1))
if(r)a1.push(new C.jR("Aceitar",new C.csa(a3,w),!0))
else a1.push(new C.jR("Enviar proposta",new C.csb(a3,a8,w,a7,h,i,n,m),!0))}else if(x&&!a3.a.e&&q){if(r)a1.push(new C.jR("Cancelar pedido",new C.csc(a3,w),!1))
a1.push(new C.jR("Editar pedido",new C.csd(a3,a8,w,a7,n,m,v,k,j),!1))}x=r?B.Pb:B.lP
u=r?"Pedido de reserva":a6
t=a3.L_(a7).length===0?a4:a3.L_(a7)
o=A.a([],y.L)
if(n!=null)o.push(new A.a3("Pessoas",A.q(n)))
if(i!=null)o.push(new A.a3("Hora",i))
if(m==null||m.length===0)a2=r&&p&&!a3.a.e?"Se n\xe3o aceitar em 48 h, o sinal \xe9 libertado.":a4
else a2="\xab"+m+"\xbb"
return C.uN(a1,a4,u,x,a4,a2,a4,o,a0,t,h,e)}}
C.bj8.prototype={
$3$1(d,e,f,g){return K.d4H(d,null,!1,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
var z=a.updateTypes(["Od(O)","NX(O)"])
C.cI4.prototype={
$2(d,e){return J.qj(this.a,new C.cI5(d,e))},
$S:396}
C.cI5.prototype={
$1(d){var x=J.a7(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:77}
C.bMZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bMX.prototype={
$0(){return this.a.e=!0},
$S:0}
C.bMY.prototype={
$0(){return this.a.e=!1},
$S:0}
C.bN_.prototype={
$0(){return this.a.wq("cancel_booking_change",A.T(["p_id",this.b],y.N,y.z),"Cancelado.")},
$S:0}
C.bN0.prototype={
$0(){return this.a.wy(this.b)},
$S:0}
C.bN1.prototype={
$0(){return this.a.wq("respond_booking_change",A.T(["p_id",this.b,"p_accept",!1],y.N,y.z),"Recusaste.")},
$S:0}
C.bN2.prototype={
$0(){return this.a.wq("respond_booking_change",A.T(["p_id",this.b,"p_accept",!0],y.N,y.z),"Aceite.")},
$S:0}
C.b_v.prototype={
$2(d,e){var x=null
return A.B(x,A.N(A.a([A.a4(A.h(d,x,x,x,x,B.P,x,x,x),1),A.h(e,x,x,x,x,B.bG,x,x,x)],y.p),B.w,B.h,B.l,0,x,x),B.r,x,x,M.KT,x,x,x,B.ec,x,x,x)},
$S:144}
C.cxn.prototype={
$3(d,e,f){var x=null,w=e?B.A:B.t,v=e?x:A.bz(B.A,1.5)
return A.cV(x,A.B(B.L,A.h(d,x,x,x,x,A.aH(x,x,e?B.t:B.A,x,x,x,x,x,x,x,x,20,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.M(w,x,v,x,x,x,B.av),x,44,x,x,x,x,44),B.Z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,B.aU)},
$S:1345}
C.cxp.prototype={
$0(){var x=this.a,w=x.d
w=w>1?w-1:1
return x.f.$1(w)},
$S:0}
C.cxq.prototype={
$0(){var x=this.a
return x.f.$1(x.d+1)},
$S:0}
C.cQD.prototype={
$1(d){var x=this
return new C.Od(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,null)},
$S:z+0}
C.bUq.prototype={
$0(){return this.a.w=!0},
$S:0}
C.bUr.prototype={
$0(){return this.a.w=!1},
$S:0}
C.bUy.prototype={
$1(d){var x=this.a
return x.p(new C.bUx(x,d))},
$S:15}
C.bUx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bUz.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.d(A.fR(!0,new C.bUv(t),u.b,y.y),$async$$0)
case 3:if(e!==!0||t.c==null){x=1
break}x=4
return A.d(t.q9(new C.bUw(t),"Pedido cancelado."),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
C.bUv.prototype={
$1(d){var x=null
return new A.eR(D.chI,A.h(this.a.a.d+" \xe9 avisado. Se havia sinal cativo, \xe9 libertado.",x,x,x,x,x,x,x,x),A.a([A.cv(B.ts,x,x,new C.bUs(d),x,x),A.bE(D.cdW,new C.bUt(d),x)],y.p),x)},
$S:17}
C.bUs.prototype={
$0(){return A.am(this.a,!1).ad(!1)},
$S:0}
C.bUt.prototype={
$0(){return A.am(this.a,!1).ad(!0)},
$S:0}
C.bUw.prototype={
$0(){var x=$.S().b
x===$&&A.b()
return x.aM("cancel_quote_request",A.T(["p_id",this.a.a.c],y.N,y.z),y.H)},
$S:185}
C.bUA.prototype={
$0(){var x=this.a
return x.q9(new C.bUu(x),"Pedido atualizado.")},
$S:0}
C.bUu.prototype={
$0(){var x,w,v,u,t,s=$.S().b
s===$&&A.b()
x=this.a
w=x.a.c
v=x.gDd()
u=B.f.C(x.ga2s().a.a)
if(u.length===0)u=null
t=B.f.C(x.ga2t(0).a.a)
if(t.length===0)t=null
x=B.f.C(x.ga2r().a.a)
return s.aM("update_quote_request",A.T(["p_id",w,"p_people",v,"p_message",u,"p_start",t,"p_end",x.length===0?null:x],y.N,y.z),y.H)},
$S:185}
C.cQq.prototype={
$1(d){var x=this
return new C.NX(x.a,x.b,x.c,x.d,x.e,null)},
$S:z+1}
C.bNg.prototype={
$1(d){return B.f.C(d)},
$S:24}
C.bN5.prototype={
$0(){return this.a.y=!0},
$S:0}
C.bN6.prototype={
$0(){return this.a.y=!1},
$S:0}
C.bN4.prototype={
$1(d){return this.a.p(new C.bN3())},
$S:3}
C.bN3.prototype={
$0(){},
$S:0}
C.bNb.prototype={
$1(d){},
$S:15}
C.bNc.prototype={
$1(d){var x=this.a
return x.p(new C.bNa(x,d))},
$S:15}
C.bNa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bNd.prototype={
$1(d){var x=this.a
return x.p(new C.bN9(x,d))},
$S:15}
C.bN9.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bNe.prototype={
$0(){var x=this.a
return x.q9(new C.bN8(x),"Pedido cancelado.")},
$S:0}
C.bN8.prototype={
$0(){var x=$.S().b
x===$&&A.b()
return x.aM("cancel_booking_change",A.T(["p_id",this.a.a.r.a],y.N,y.z),y.H)},
$S:185}
C.bNf.prototype={
$0(){var x,w,v=this,u=null,t=v.a,s=t.gaWx()
if(s==null){v.b.O(y.q).f.a3(A.c6(u,u,u,u,u,B.z,u,A.h("Diz o que muda.",u,u,u,u,u,u,u,u),u,B.V,u,u,u,u,u,u,u,u,u,u))
return}x=v.c
w=x?"Altera\xe7\xe3o guardada.":"Pedido de altera\xe7\xe3o enviado."
t.q9(new C.bN7(t,x,s,v.d),w)},
$S:0}
C.bN7.prototype={
$0(){var x,w,v=this,u=v.a,t=v.c
if(v.b){x=$.S().b
x===$&&A.b()
w=u.a.r.a
u=B.f.C(u.x.a.a)
u=x.aM("update_booking_change",A.T(["p_id",w,"p_to",t,"p_message",u.length===0?null:u],y.N,y.z),y.H)}else{x=$.S().b
x===$&&A.b()
w=u.a.c
u=B.f.C(u.x.a.a)
if(u.length===0)u=null
u=x.aM("request_booking_change",A.T(["p_booking",w,"p_kind",v.d,"p_to",t,"p_message",u],y.N,y.z),y.H)}return u},
$S:185}
C.cs5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cs6.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cs7.prototype={
$0(){return this.a.e=!1},
$S:0}
C.cs9.prototype={
$0(){return this.a.A6("decline_quote_request",A.T(["p_quote_request_id",this.b],y.N,y.z),"Pedido recusado.")},
$S:0}
C.csa.prototype={
$0(){return this.a.A6("accept_package_request",A.T(["p_quote_request_id",this.b],y.N,y.z),"Pedido aceite.")},
$S:0}
C.csb.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=v.a
q=r.a
p=q.c
q=q.f
u=v.d
t=B.e.gM(r.L_(u).split(" \xb7 "))
u=A.a([r.L_(u)],y.s)
s=v.f
if(s!=null)u.push(s)
s=v.r
if(s!=null)u.push(A.q(s)+" pessoas")
x=4
return A.d(E.alF(v.b,q,p,t,null,v.c,new A.a6(u,new C.cs8(),y.U).a2(0," \xb7 "),v.w,v.e),$async$$0)
case 4:x=e?2:3
break
case 2:x=5
return A.d(r.A4(),$async$$0)
case 5:case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
C.cs8.prototype={
$1(d){return d.length!==0},
$S:8}
C.csc.prototype={
$0(){return this.a.A6("cancel_quote_request",A.T(["p_id",this.b],y.N,y.z),"Pedido cancelado.")},
$S:0}
C.csd.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r,q
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=v.a
s=t.a
r=s.f
q=s.r
if(q==null)q="Evento"
s=s.w
if(s==null)s=t.L_(v.d)
u=v.e
if(u==null){t.a.toString
u=null}if(u==null)u=1
t.a.toString
x=4
return A.d(C.cQC(v.b,v.x,s,null,q,v.r==="proposal_sent",v.f,r,u,v.c,v.w),$async$$0)
case 4:x=e?2:3
break
case 2:x=5
return A.d(t.A4(),$async$$0)
case 5:case 3:return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[C.kh,C.jB,C.jR,C.bxh,C.bj8])
x(A.cO,[C.cI4,C.b_v])
x(A.bx,[C.cI5,C.cxn,C.cQD,C.bUy,C.bUv,C.cQq,C.bNg,C.bN4,C.bNb,C.bNc,C.bNd,C.cs8])
x(A.G,[C.R0,C.Od,C.NX,C.a7N])
x(A.Z,[C.aDL,C.aG0,C.aDM,C.aNI])
x(A.bQ,[C.bMZ,C.bMX,C.bMY,C.bN_,C.bN0,C.bN1,C.bN2,C.cxp,C.cxq,C.bUq,C.bUr,C.bUx,C.bUz,C.bUs,C.bUt,C.bUw,C.bUA,C.bUu,C.bN5,C.bN6,C.bN3,C.bNa,C.bN9,C.bNe,C.bN8,C.bNf,C.bN7,C.cs5,C.cs6,C.cs7,C.cs9,C.csa,C.csb,C.csc,C.csd])
x(A.H,[C.ao4,C.aiq,C.aed])
w(C.R3,A.f7)})()
A.bn(b.typeUniverse,JSON.parse('{"R0":{"G":[],"e":[],"f":[]},"aDL":{"Z":["R0"]},"ao4":{"H":[],"e":[],"f":[]},"Od":{"G":[],"e":[],"f":[]},"NX":{"G":[],"e":[],"f":[]},"aiq":{"H":[],"e":[],"f":[]},"aed":{"H":[],"e":[],"f":[]},"aG0":{"Z":["Od"]},"aDM":{"Z":["NX"]},"a7N":{"G":[],"e":[],"f":[]},"aNI":{"Z":["a7N"]}}'))
var y=(function rtii(){var x=A.w
return{l:x("r<jR>"),L:x("r<+(c,c)>"),s:x("r<c>"),V:x("r<rp>"),p:x("r<e>"),f:x("a5<@,@>"),e:x("ak<c,c>"),w:x("df"),S:x("fd<@>"),N:x("c"),U:x("a6<c>"),q:x("dm"),y:x("x"),z:x("@"),g:x("t<@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.La=new C.bj8()
D.nf=new C.R3(0,"pending")
D.pS=new C.R3(2,"done")
D.ng=new C.R3(3,"doneLine")
D.fo=new C.R3(4,"neutral")
D.bzY=x([],A.w("r<jB>"))
D.LA=new C.kh(!1,D.bzY)
D.auU=new A.a0(4,3,4,8)
D.Qd=new A.dE(null,null,null,null,null,null,null,null,null,null,"00:00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bw,!0,null,null,null,null)
D.aIL=new A.mU("M5 12.5l4.5 4.5L19 7.5",14,B.U,2.4,!1,B.cB,null)
D.aIS=new A.mU("M2 12.5l4.5 4.5L16 7.5M11 15.5l1.5 1.5L22 7.5",16,B.bp,2.4,!1,B.cB,null)
D.FA=x([],y.l)
D.bB5=x(["Pessoas","Hora","O que inclui","Outra coisa"],y.s)
D.FY=x(["people","time","scope","other"],y.s)
D.bF1=new A.vj("pt",null,"PT")
D.bRz=new A.a3("Proposta recebida",D.pS)
D.bRB=new A.a3("Proposta enviada",D.fo)
D.bRH=new A.a3("Aceite",D.pS)
D.bRI=new A.a3("Aceite",D.ng)
D.a75=new A.a3("Cancelado",D.fo)
D.Hg=new A.a3("Por responder",D.nf)
D.bSq=new A.a3("Recusado",D.fo)
D.bUu=new A.rA([null,B.d1,B.dc,B.dc,null])
D.bUv=new A.rA([B.bp,B.d1,B.dc,B.dc,null])
D.bUw=new A.rA([null,B.f7,B.d0,B.U,null])
D.ccn=new A.C("N\xe3o foi poss\xedvel concluir. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.a9g=new A.bF(D.ccn,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.cfL=new A.C("Ainda n\xe3o h\xe1 uma reserva aceite nesta conversa.",null,null,null,null,null,null,null,null,null,null)
D.a9l=new A.bF(D.cfL,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.cgh=new A.C("N\xe3o foi poss\xedvel enviar o anexo. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.a9q=new A.bF(D.cgh,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.c2X=new A.P(!0,B.U,null,null,null,null,12,B.b3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cdW=new A.C("Cancelar pedido",null,null,null,null,null,null,null,null,null,null)
D.ces=new A.C("Passa a",null,B.P,null,null,null,null,null,null,null,null)
D.ch0=new A.C("O dia e o local v\xeam do evento: mudam-se nas Defini\xe7\xf5es do evento.",null,B.cf,null,null,null,null,null,null,null,null)
D.chI=new A.C("Cancelar o pedido?",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["O5vS1TToRWBvV5RAX4dV4MGPLyE="]=a.current})($__dart_deferred_initializers__);