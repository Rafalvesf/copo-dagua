((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={kh:function kh(d,e){this.a=d
this.b=e},
PO(d){var x=0,w=A.n(y.w),v,u,t,s,r,q,p,o,n
var $async$PO=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.alg(null,d),$async$PO)
case 3:u=$.T().b
u===$&&A.b()
x=4
return A.d(u.R("bookings").az(0,"status, total_amount, deposit_amount, payments(type, status)").X("proposal_id",d).dl(0,"created_at",!1).jo(1).dA(),$async$PO)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a7(t)
s=A.E(u.h(t,"status"))
if(s==null)s=""
if(B.f.b4(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.d.a(u.h(t,"payments"))
q=new C.cGj(r==null?B.al:r)
if(q.$2("final_payment","pending")){v="final_due"
x=1
break}if(q.$2("final_payment","paid")){v="paid"
x=1
break}if(s==="completed"){v="completed"
x=1
break}p=A.aK(u.h(t,"total_amount"))
o=p==null?null:p
if(o==null)o=0
if(o>0){u=A.aK(u.h(t,"deposit_amount"))
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
return A.m($async$PO,w)},
cGj:function cGj(d){this.a=d},
cGk:function cGk(d,e){this.a=d
this.b=e},
d_9(d,e,f,g,h,i,j,k,l,m,n,o,p){return new C.jz(i,h,p,o,l,n,m,k,j,f,e,d)},
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
dAG(d){var x,w,v=new A.ad(Date.now(),0,!1),u=B.j.aM(A.bD(A.aE(v),A.ay(v),A.aM(v),0,0).cC(A.bD(A.aE(d),A.ay(d),A.aM(d),0,0)).a,864e8)
if(u===0)return"Hoje"
if(u===1)return"Ontem"
x=B.ch[A.ay(d)-1]
w=A.aE(d)===A.aE(v)?"":" "+A.aE(d)
return""+A.aM(d)+" "+x+w},
dav(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=y.u,i=A.a([],j)
for(x=g!=null,w=0;w<f.length;){v=f[w]
u=v.r
t=u.e8()
s=w===0
r=s?k:f[w-1].r.e8()
if(r==null||A.aE(r)!==A.aE(t)||A.ay(r)!==A.ay(t)||A.aM(r)!==A.aM(t)){s=s?0:8
q=new A.b5(999,999)
i.push(new A.Q(new A.a0(0,s,0,12),new A.fw(B.L,k,k,A.A(k,A.h(C.dAG(t),k,k,k,k,B.hO,k,k,k),B.r,k,k,new A.M(B.fl,k,k,new A.ch(q,q,q,q),k,k,B.y),k,k,k,F.NA,k,k,k),k),k))}p=e.$1(v);++w
o=w<f.length?f[w]:k
n=!0
if(o!=null)if(J.o(e.$1(o),p)){s=o.r.e8()
s=B.j.aM(s.b-t.b+1000*(s.a-t.a),6e7)>10
n=s}s=p?B.dW:B.bi
i.push(new A.d0(s,k,k,d.$2(v,p),k))
if(n){m=!1
if(p){if(x){s=g.a
q=u.a
if(s>=q)u=s===q&&g.b<u.b
else u=!0
u=!u}else u=m
m=u}u=p?B.dW:B.bi
s=B.f.aY(B.j.k(A.hY(t)),2,"0")
q=B.f.aY(B.j.k(A.hK(t)),2,"0")
s=A.a([A.h(s+":"+q,k,k,k,k,H.zh,k,k,k)],j)
if(p){q=m?"Vista":"Enviada"
l=m?D.aIP:D.aIG
B.e.n(s,A.a([B.eh,new A.jY(new A.oG(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.a5,k,k,k,k),!1,!1,k,!1,!1,l,k)],j))}i.push(new A.Q(D.asK,new A.d0(u,k,k,A.P(s,B.w,B.i,B.K,0,k,k),k),k))}else i.push(B.X)}return i},
d_a(d,e,f,g,h,i,j,k,l,m){return new C.anE(f,l,k,i,e,d,h,j,m,null)},
anE:function anE(d,e,f,g,h,i,j,k,l,m){var _=this
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
aZW:function aZW(){},
QT:function QT(d,e){this.a=d
this.b=e},
biz:function biz(){}},D,H,I
J=c[1]
A=c[0]
B=c[2]
E=c[276]
F=c[360]
G=c[118]
C=a.updateHolder(c[82],C)
D=c[228]
H=c[241]
I=c[392]
C.kh.prototype={
awX(d,e){var x=d==null?this.a:d
return new C.kh(x,e==null?this.b:e)},
io(d){return this.awX(d,null)},
F4(d){return this.awX(null,d)}}
C.jz.prototype={}
C.anE.prototype={
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
switch(a5.Q.a){case 0:x=new A.rv([B.eM,B.t,B.A,B.eM,A.bA(B.eM,1.5)])
break
case 1:x=new A.rv([B.c0,B.t,B.A,B.c0,A.bA(B.c0,1.5)])
break
case 2:x=D.bUm
break
case 3:x=D.bUn
break
case 4:x=D.bUo
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
n=new C.aZW()
x=B.k.ae(A.aw(a7,a6,y.x).w.a.a*0.78,260,320)
m=A.Y(22)
l=w==null?a6:A.bA(w,1.5)
k=y.u
j=A.a([A.P(A.a([A.A(B.L,D.aIJ,B.r,a6,a6,B.mO,a6,28,a6,a6,a6,a6,28),B.ai,A.a5(A.h(a5.c.toUpperCase(),a6,a6,a6,a6,B.bh,a6,a6,a6),1)],k),B.w,B.i,B.m,0,a6,a6)],k)
i=A.Y(999)
B.e.n(j,A.a([B.ab,new A.d0(B.bi,a6,a6,A.A(a6,A.P(A.a([A.A(a6,a6,B.r,a6,a6,new A.M(t,a6,a6,a6,a6,a6,B.ax),a6,7,a6,a6,a6,a6,7),B.bl,A.h(a5.z,a6,a6,a6,a6,A.aF(a6,a6,u,a6,a6,a6,a6,a6,a6,a6,a6,12,a6,a6,B.F,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)],k),B.w,B.i,B.K,0,a6,a6),B.r,a6,a6,new A.M(v,a6,s,i,a6,a6,B.y),a6,a6,a6,B.ns,a6,a6,a6),a6)],k))
j.push(B.ab)
j.push(A.h(a5.d,2,B.a2,a6,a6,B.aj,a6,a6,a6))
i=a5.e
if(i!=null&&i.length!==0)j.push(new A.Q(E.qn,A.h(i,a6,a6,a6,a6,B.T,a6,a6,a6),a6))
j.push(B.ab)
i=a5.f
if(i!=null)j.push(n.$2("Total",A.aQ(i,!1)))
i=a5.r
if(i!=null)j.push(n.$2("Sinal para confirmar",A.aQ(i,!1)))
i=a5.x
if(i!=null)B.e.n(j,A.a([B.as,A.h(i,a6,a6,a6,a6,B.te,a6,a6,a6)],k))
i=a5.w
if(i.length!==0){h=A.a([],k)
for(g=0;g<i.length;++g){f=A.a([],k)
if(g>0)f.push(B.ai)
e=i[g]
d=e.b
a0=e.c
a1=a0&&d!=null?B.A:B.t
a2=new A.b5(999,999)
if(a0&&d!=null)a3=a6
else{a4=new A.bc(d==null?B.fj:B.A,1.5,B.ag,-1)
a3=new A.dR(a4,a4,a4,a4)}if(d==null)a0=B.S
else a0=a0?B.t:B.A
f.push(new A.bR(1,B.aw,new A.hv(A.A(B.L,A.h(e.a,1,B.a2,a6,a6,new A.N(!0,a0,a6,a6,a6,a6,13,B.F,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),B.r,a6,a6,new A.M(a1,a6,a3,new A.ch(a2,a2,a2,a2),a6,a6,B.y),a6,36,a6,B.hs,a6,a6,a6),d,a6,a6),a6))
B.e.n(h,f)}B.e.n(j,A.a([B.Q,A.P(h,B.w,B.i,B.m,0,a6,a6)],k))}return A.aI(A.A(a6,A.B(j,B.I,B.i,B.m,0,B.v),B.r,a6,a6,new A.M(B.t,a6,l,m,a6,a6,B.y),a6,a6,a6,B.bj,a6,a6,a6),a6,x)}}
C.QT.prototype={
I(){return"ChatCardTone."+this.b}}
C.biz.prototype={
$3$1(d,e,f,g){return G.d2M(d,null,!1,null,null,e,f,g)},
$1(d){var x=y.b
return this.$3$1(d,y.i,x,x)}}
var z=a.updateTypes([])
C.cGj.prototype={
$2(d,e){return J.rH(this.a,new C.cGk(d,e))},
$S:311}
C.cGk.prototype={
$1(d){var x=J.a7(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:74}
C.aZW.prototype={
$2(d,e){var x=null
return A.A(x,A.P(A.a([A.a5(A.h(d,x,x,x,x,B.T,x,x,x),1),A.h(e,x,x,x,x,B.bQ,x,x,x)],y.u),B.w,B.i,B.m,0,x,x),B.r,x,x,I.KN,x,x,x,B.e0,x,x,x)},
$S:141};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[C.kh,C.jz,C.biz])
x(A.cQ,[C.cGj,C.aZW])
w(C.cGk,A.bx)
w(C.anE,A.L)
w(C.QT,A.fg)})()
A.bq(b.typeUniverse,JSON.parse('{"anE":{"L":[],"e":[],"f":[]}}'))
var y={u:A.w("r<e>"),x:A.w("dm"),i:A.w("fb<@>"),b:A.w("@"),d:A.w("t<@>?"),w:A.w("c?")};(function constants(){var x=a.makeConstList
D.L5=new C.biz()
D.Lv=new C.QT(2,"done")
D.u7=new C.QT(3,"doneLine")
D.n4=new C.QT(4,"neutral")
D.bzU=x([],A.w("r<jz>"))
D.Lw=new C.kh(!1,D.bzU)
D.asK=new A.a0(0,4,0,12)
D.aIG=new A.lE("M5 12.5l4.5 4.5L19 7.5",14,B.S,2.4,!1,B.cm,null)
D.aIJ=new A.lE("M3 3h8l10 10-8 8L3 11V3zM7 6.5a1 1 0 1 0 0 .01",14,B.d8,2,!1,B.cm,null)
D.aIP=new A.lE("M2 12.5l4.5 4.5L16 7.5M11 15.5l1.5 1.5L22 7.5",16,B.bw,2.4,!1,B.cm,null)
D.bAt=x([],A.w("r<wQ>"))
D.u6=new C.QT(0,"pending")
D.a7a=new A.a3("Tudo pago",D.u7)
D.a7g=new A.a3("Reserva cancelada",D.n4)
D.bUm=new A.rv([null,B.df,B.cY,B.cY,null])
D.bUn=new A.rv([B.bw,B.df,B.cY,B.cY,null])
D.bUo=new A.rv([null,B.fl,B.d8,B.S,null])
D.cfS=new A.D("N\xe3o foi poss\xedvel enviar o anexo. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.a9i=new A.bJ(D.cfS,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.z,null)})()};
(a=>{a["2u3rWlHU2OzDbG28iI3KiS6XZtU="]=a.current})($__dart_deferred_initializers__);