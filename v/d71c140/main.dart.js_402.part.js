((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={kg:function kg(d,e){this.a=d
this.b=e},
PR(d){var x=0,w=A.n(y.w),v,u,t,s,r,q,p,o,n
var $async$PR=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.alw(null,d),$async$PR)
case 3:u=$.S().b
u===$&&A.b()
x=4
return A.d(u.R("bookings").az(0,"status, total_amount, deposit_amount, payments(type, status)").X("proposal_id",d).dl(0,"created_at",!1).jo(1).dA(),$async$PR)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a7(t)
s=A.E(u.h(t,"status"))
if(s==null)s=""
if(B.f.b4(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.d.a(u.h(t,"payments"))
q=new C.cGN(r==null?B.am:r)
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
return A.m($async$PR,w)},
cGN:function cGN(d){this.a=d},
cGO:function cGO(d,e){this.a=d
this.b=e},
d_M(d,e,f,g,h,i,j,k,l,m,n,o,p){return new C.jz(i,h,p,o,l,n,m,k,j,f,e,d)},
jz:function jz(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ax=o},
dBm(d){var x,w,v=new A.ac(Date.now(),0,!1),u=B.j.aN(A.bB(A.aD(v),A.ax(v),A.aK(v),0,0).cK(A.bB(A.aD(d),A.ax(d),A.aK(d),0,0)).a,864e8)
if(u===0)return"Hoje"
if(u===1)return"Ontem"
x=B.c2[A.ax(d)-1]
w=A.aD(d)===A.aD(v)?"":" "+A.aD(d)
return""+A.aK(d)+" "+x+w},
dbb(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=y.u,i=A.a([],j)
for(x=g!=null,w=0;w<f.length;){v=f[w]
u=v.r
t=u.e0()
s=w===0
r=s?k:f[w-1].r.e0()
if(r==null||A.aD(r)!==A.aD(t)||A.ax(r)!==A.ax(t)||A.aK(r)!==A.aK(t)){s=s?0:8
q=new A.b5(999,999)
i.push(new A.Q(new A.a0(0,s,0,12),new A.fw(B.L,k,k,A.A(k,A.h(C.dBm(t),k,k,k,k,B.hR,k,k,k),B.r,k,k,new A.M(B.f6,k,k,new A.ci(q,q,q,q),k,k,B.y),k,k,k,F.NE,k,k,k),k),k))}p=e.$1(v);++w
o=w<f.length?f[w]:k
n=!0
if(o!=null)if(J.o(e.$1(o),p)){s=o.r.e0()
s=B.j.aN(s.b-t.b+1000*(s.a-t.a),6e7)>10
n=s}s=p?B.dY:B.bh
i.push(new A.d0(s,k,k,d.$2(v,p),k))
if(n){m=!1
if(p){if(x){s=g.a
q=u.a
if(s>=q)u=s===q&&g.b<u.b
else u=!0
u=!u}else u=m
m=u}u=p?B.dY:B.bh
s=B.f.aX(B.j.k(A.hM(t)),2,"0")
q=B.f.aX(B.j.k(A.hv(t)),2,"0")
s=A.a([A.h(s+":"+q,k,k,k,k,H.zh,k,k,k)],j)
if(p){q=m?"Vista":"Enviada"
l=m?D.aIV:D.aIM
B.e.n(s,A.a([B.ej,new A.jY(new A.oH(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.a5,k,k,k,k),!1,!1,k,!1,!1,l,k)],j))}i.push(new A.Q(D.asQ,new A.d0(u,k,k,A.P(s,B.w,B.i,B.K,0,k,k),k),k))}else i.push(B.X)}return i},
d_N(d,e,f,g,h,i,j,k,l,m){return new C.anU(f,l,k,i,e,d,h,j,m,null)},
anU:function anU(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.z=k
_.Q=l
_.a=m},
b_d:function b_d(){},
QW:function QW(d,e){this.a=d
this.b=e},
biR:function biR(){}},D,H,I
J=c[1]
A=c[0]
B=c[2]
E=c[277]
F=c[363]
G=c[119]
C=a.updateHolder(c[83],C)
D=c[229]
H=c[242]
I=c[395]
C.kg.prototype={
ax1(d,e){var x=d==null?this.a:d
return new C.kg(x,e==null?this.b:e)},
io(d){return this.ax1(d,null)},
F5(d){return this.ax1(null,d)}}
C.jz.prototype={}
C.anU.prototype={
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
switch(a5.Q.a){case 0:x=new A.rx([B.eO,B.t,B.A,B.eO,A.bA(B.eO,1.5)])
break
case 1:x=new A.rx([B.c0,B.t,B.A,B.c0,A.bA(B.c0,1.5)])
break
case 2:x=D.bUt
break
case 3:x=D.bUu
break
case 4:x=D.bUv
break
default:x=a6}x=x.a
w=x[0]
v=a6
u=a6
t=a6
s=a6
r=x[1]
q=x[2]
p=x[3]
o=x[4]
s=o
t=p
u=q
v=r
n=new C.b_d()
x=B.k.ae(A.aw(a7,a6,y.x).w.a.a*0.78,260,320)
m=A.X(22)
l=w==null?a6:A.bA(w,1.5)
k=y.u
j=A.a([A.P(A.a([A.A(B.L,D.aIP,B.r,a6,a6,B.mS,a6,28,a6,a6,a6,a6,28),B.ae,A.a4(A.h(a5.c.toUpperCase(),a6,a6,a6,a6,B.b8,a6,a6,a6),1)],k),B.w,B.i,B.m,0,a6,a6)],k)
i=A.X(999)
B.e.n(j,A.a([B.ac,new A.d0(B.bh,a6,a6,A.A(a6,A.P(A.a([A.A(a6,a6,B.r,a6,a6,new A.M(t,a6,a6,a6,a6,a6,B.ax),a6,7,a6,a6,a6,a6,7),B.bm,A.h(a5.z,a6,a6,a6,a6,A.aF(a6,a6,u,a6,a6,a6,a6,a6,a6,a6,a6,12,a6,a6,B.F,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)],k),B.w,B.i,B.K,0,a6,a6),B.r,a6,a6,new A.M(v,a6,s,i,a6,a6,B.y),a6,a6,a6,B.nu,a6,a6,a6),a6)],k))
j.push(B.ac)
j.push(A.h(a5.d,2,B.a3,a6,a6,B.aj,a6,a6,a6))
i=a5.e
if(i!=null&&i.length!==0)j.push(new A.Q(E.qn,A.h(i,a6,a6,a6,a6,B.R,a6,a6,a6),a6))
j.push(B.ac)
i=a5.f
if(i!=null)j.push(n.$2("Total",A.aQ(i,!1)))
i=a5.r
if(i!=null)j.push(n.$2("Sinal para confirmar",A.aQ(i,!1)))
i=a5.x
if(i!=null)B.e.n(j,A.a([B.as,A.h(i,a6,a6,a6,a6,B.te,a6,a6,a6)],k))
i=a5.w
if(i.length!==0){h=A.a([],k)
for(g=0;g<i.length;++g){f=A.a([],k)
if(g>0)f.push(B.ae)
e=i[g]
d=e.b
a0=e.c
a1=a0&&d!=null?B.A:B.t
a2=new A.b5(999,999)
if(a0&&d!=null)a3=a6
else{a4=new A.bc(d==null?B.fn:B.A,1.5,B.ai,-1)
a3=new A.dS(a4,a4,a4,a4)}if(d==null)a0=B.T
else a0=a0?B.t:B.A
f.push(new A.bQ(1,B.av,new A.hx(A.A(B.L,A.h(e.a,1,B.a3,a6,a6,new A.N(!0,a0,a6,a6,a6,a6,13,B.F,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),B.r,a6,a6,new A.M(a1,a6,a3,new A.ci(a2,a2,a2,a2),a6,a6,B.y),a6,36,a6,B.hu,a6,a6,a6),d,a6,a6),a6))
B.e.n(h,f)}B.e.n(j,A.a([B.Q,A.P(h,B.w,B.i,B.m,0,a6,a6)],k))}return A.aI(A.A(a6,A.B(j,B.I,B.i,B.m,0,B.v),B.r,a6,a6,new A.M(B.t,a6,l,m,a6,a6,B.y),a6,a6,a6,B.bj,a6,a6,a6),a6,x)}}
C.QW.prototype={
I(){return"ChatCardTone."+this.b}}
C.biR.prototype={
$3$1(d,e,f,g){return G.d3o(d,null,!1,null,null,e,f,g)},
$1(d){var x=y.b
return this.$3$1(d,y.i,x,x)}}
var z=a.updateTypes([])
C.cGN.prototype={
$2(d,e){return J.qh(this.a,new C.cGO(d,e))},
$S:399}
C.cGO.prototype={
$1(d){var x=J.a7(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:82}
C.b_d.prototype={
$2(d,e){var x=null
return A.A(x,A.P(A.a([A.a4(A.h(d,x,x,x,x,B.R,x,x,x),1),A.h(e,x,x,x,x,B.bL,x,x,x)],y.u),B.w,B.i,B.m,0,x,x),B.r,x,x,I.KP,x,x,x,B.e1,x,x,x)},
$S:143};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.K,[C.kg,C.jz,C.biR])
x(A.cQ,[C.cGN,C.b_d])
w(C.cGO,A.bw)
w(C.anU,A.I)
w(C.QW,A.f6)})()
A.bp(b.typeUniverse,JSON.parse('{"anU":{"I":[],"e":[],"f":[]}}'))
var y={u:A.w("r<e>"),x:A.w("dg"),i:A.w("fc<@>"),b:A.w("@"),d:A.w("t<@>?"),w:A.w("c?")};(function constants(){var x=a.makeConstList
D.L7=new C.biR()
D.Lx=new C.QW(2,"done")
D.u8=new C.QW(3,"doneLine")
D.n8=new C.QW(4,"neutral")
D.bA0=x([],A.w("r<jz>"))
D.Ly=new C.kg(!1,D.bA0)
D.asQ=new A.a0(0,4,0,12)
D.aIM=new A.lE("M5 12.5l4.5 4.5L19 7.5",14,B.T,2.4,!1,B.cn,null)
D.aIP=new A.lE("M3 3h8l10 10-8 8L3 11V3zM7 6.5a1 1 0 1 0 0 .01",14,B.d8,2,!1,B.cn,null)
D.aIV=new A.lE("M2 12.5l4.5 4.5L16 7.5M11 15.5l1.5 1.5L22 7.5",16,B.bv,2.4,!1,B.cn,null)
D.bAA=x([],A.w("r<wQ>"))
D.u7=new C.QW(0,"pending")
D.a7f=new A.a3("Tudo pago",D.u8)
D.a7l=new A.a3("Reserva cancelada",D.n8)
D.bUt=new A.rx([null,B.d9,B.d_,B.d_,null])
D.bUu=new A.rx([B.bv,B.d9,B.d_,B.d_,null])
D.bUv=new A.rx([null,B.f6,B.d8,B.T,null])
D.cg3=new A.C("N\xe3o foi poss\xedvel enviar o anexo. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.a9o=new A.bG(D.cg3,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.z,null)})()};
(a=>{a["3rukUSNa24CbHZmyUDQ6RRXScdc="]=a.current})($__dart_deferred_initializers__);