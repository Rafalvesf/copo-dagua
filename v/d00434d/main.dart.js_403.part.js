((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={kg:function kg(d,e){this.a=d
this.b=e},
PR(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p,o,n
var $async$PR=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.alx(null,d),$async$PR)
case 3:u=$.T().b
u===$&&A.b()
x=4
return A.d(u.R("bookings").az(0,"status, total_amount, deposit_amount, payments(type, status)").X("proposal_id",d).dl(0,"created_at",!1).jo(1).ds(),$async$PR)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a7(t)
s=A.E(u.h(t,"status"))
if(s==null)s=""
if(B.f.b4(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.d.a(u.h(t,"payments"))
q=new C.cGW(r==null?B.am:r)
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
cGW:function cGW(d){this.a=d},
cGX:function cGX(d,e){this.a=d
this.b=e},
d_W(d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new C.jz(j,i,q,p,m,o,n,l,k,g,f,e,d)},
jz:function jz(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d9E(d,e){var x
if(e==null)return""
if(d==="date"){x=A.dH(e)
if(x!=null)return B.h_[A.ic(x)-1]+", "+A.aK(x)+" "+B.c_[A.ax(x)-1]}if(d==="people")return e+" pessoas"
return e},
QU:function QU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDB:function aDB(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
bMH:function bMH(d,e){this.a=d
this.b=e},
bMF:function bMF(d){this.a=d},
bMG:function bMG(d){this.a=d},
bMI:function bMI(d,e){this.a=d
this.b=e},
bMJ:function bMJ(d,e){this.a=d
this.b=e},
bMK:function bMK(d,e){this.a=d
this.b=e},
dBw(d){var x,w,v=new A.ac(Date.now(),0,!1),u=B.j.aN(A.bB(A.aD(v),A.ax(v),A.aK(v),0,0).cK(A.bB(A.aD(d),A.ax(d),A.aK(d),0,0)).a,864e8)
if(u===0)return"Hoje"
if(u===1)return"Ontem"
x=B.c_[A.ax(d)-1]
w=A.aD(d)===A.aD(v)?"":" "+A.aD(d)
return""+A.aK(d)+" "+x+w},
dbl(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=y.u,i=A.a([],j)
for(x=g!=null,w=0;w<f.length;){v=f[w]
u=v.r
t=u.e0()
s=w===0
r=s?k:f[w-1].r.e0()
if(r==null||A.aD(r)!==A.aD(t)||A.ax(r)!==A.ax(t)||A.aK(r)!==A.aK(t)){s=s?0:8
q=new A.b5(999,999)
i.push(new A.Q(new A.a0(0,s,0,12),new A.fw(B.L,k,k,A.A(k,A.h(C.dBw(t),k,k,k,k,B.hR,k,k,k),B.r,k,k,new A.M(B.f6,k,k,new A.ci(q,q,q,q),k,k,B.y),k,k,k,F.NE,k,k,k),k),k))}p=e.$1(v);++w
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
s=B.f.aW(B.j.k(A.hM(t)),2,"0")
q=B.f.aW(B.j.k(A.hv(t)),2,"0")
s=A.a([A.h(s+":"+q,k,k,k,k,H.zh,k,k,k)],j)
if(p){q=m?"Vista":"Enviada"
l=m?D.aIX:D.aIO
B.e.n(s,A.a([B.ej,new A.jY(new A.oH(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.a5,k,k,k,k),!1,!1,k,!1,!1,l,k)],j))}i.push(new A.Q(D.asS,new A.d0(u,k,k,A.P(s,B.w,B.i,B.K,0,k,k),k),k))}else i.push(B.X)}return i},
cSk(d,e,f,g,h,i,j,k,l,m){return new C.anV(f,l,k,i,e,d,h,j,m,null)},
qq:function qq(d,e,f){this.a=d
this.b=e
this.c=f},
anV:function anV(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_f:function b_f(){},
QX:function QX(d,e){this.a=d
this.b=e},
biT:function biT(){}},D,H,I
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
ax4(d,e){var x=d==null?this.a:d
return new C.kg(x,e==null?this.b:e)},
io(d){return this.ax4(d,null)},
F7(d){return this.ax4(null,d)}}
C.jz.prototype={}
C.QU.prototype={
P(){return new C.aDB()}}
C.aDB.prototype={
ai(){this.aA()
this.I9()},
I9(){var x=0,w=A.n(y.q),v=1,u=[],t=this,s,r,q,p
var $async$I9=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
r=$.T().b
r===$&&A.b()
x=6
return A.d(r.R("booking_change_requests").az(0,"kind, from_value, to_value, message, status").X("id",t.a.c).ds(),$async$I9)
case 6:s=e
if(t.c!=null)t.p(new C.bMH(t,s))
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
return A.m($async$I9,w)},
zd(d,e,f){return this.aRr(d,e,f)},
aRr(d,e,f){var x=0,w=A.n(y.q),v,u=2,t=[],s=[],r=this,q,p,o
var $async$zd=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.p(new C.bMF(r))
u=4
q=$.T().b
q===$&&A.b()
x=7
return A.d(q.aS(d,e,y.b),$async$zd)
case 7:x=8
return A.d(r.I9(),$async$zd)
case 8:q=r.c
if(q!=null)q.O(y.v).f.a4(A.cx(null,null,null,null,null,B.z,null,A.h(f,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
s.push(6)
x=5
break
case 4:u=3
o=t.pop()
q=r.c
if(q!=null)q.O(y.v).f.a4(D.bZI)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new C.bMG(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$zd,w)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.d
if(f==null)return B.oT
x=J.a7(f)
w=A.E(x.h(f,"kind"))
if(w==null)w="other"
v=A.E(x.h(f,"status"))
if(v==null)v="open"
u=C.d9E(w,A.E(x.h(f,"to_value")))
t=C.d9E(w,A.E(x.h(f,"from_value")))
switch(v){case"accepted":s=D.bRI
break
case"declined":s=D.a7a
break
case"cancelled":s=D.bRP
break
default:s=new A.a3(h.a.d?"Enviada \xb7 \xe0 espera da resposta":"Por responder",D.pM)
break}r=g
q=s.b
r=q
p=h.a.c
o=v==="open"
n=w==="date"
m=n?"Proposta de outro dia":"Pedido de altera\xe7\xe3o"
l=t.length===0?u:u+" em vez de "+t
x=A.E(x.h(f,"message"))
k=h.a
j=k.e
n=o&&n?"Se aceitares, o dia do pedido muda. O dia do evento n\xe3o muda sozinho.":g
if(!o||h.e)k=D.WX
else{i=y.a
k=k.d?A.a([new C.qq("Cancelar",new C.bMI(h,p),!1)],i):A.a([new C.qq("Recusar",new C.bMJ(h,p),!1),new C.qq("Aceitar",new C.bMK(h,p),!0)],i)}return C.cSk(k,g,m,j,n,g,s.a,x,l,r)}}
C.qq.prototype={}
C.anV.prototype={
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null
switch(a5.Q.a){case 0:x=new A.ry([B.eP,B.t,B.A,B.eP,A.bA(B.eP,1.5)])
break
case 1:x=new A.ry([B.c1,B.t,B.A,B.c1,A.bA(B.c1,1.5)])
break
case 2:x=D.bUv
break
case 3:x=D.bUw
break
case 4:x=D.bUx
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
n=new C.b_f()
x=B.k.ae(A.aw(a7,a6,y.x).w.a.a*0.78,260,320)
m=A.X(22)
l=w==null?a6:A.bA(w,1.5)
k=y.u
j=A.a([A.P(A.a([A.A(B.L,D.aIR,B.r,a6,a6,B.mT,a6,28,a6,a6,a6,a6,28),B.ae,A.a4(A.h(a5.c.toUpperCase(),a6,a6,a6,a6,B.b8,a6,a6,a6),1)],k),B.w,B.i,B.m,0,a6,a6)],k)
i=A.X(999)
B.e.n(j,A.a([B.ac,new A.d0(B.bh,a6,a6,A.A(a6,A.P(A.a([A.A(a6,a6,B.r,a6,a6,new A.M(t,a6,a6,a6,a6,a6,B.ax),a6,7,a6,a6,a6,a6,7),B.bm,A.h(a5.z,a6,a6,a6,a6,A.aF(a6,a6,u,a6,a6,a6,a6,a6,a6,a6,a6,12,a6,a6,B.F,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)],k),B.w,B.i,B.K,0,a6,a6),B.r,a6,a6,new A.M(v,a6,s,i,a6,a6,B.y),a6,a6,a6,B.nu,a6,a6,a6),a6)],k))
j.push(B.ac)
j.push(A.h(a5.d,2,B.a3,a6,a6,B.aj,a6,a6,a6))
i=a5.e
if(i!=null&&i.length!==0)j.push(new A.Q(E.qq,A.h(i,a6,a6,a6,a6,B.R,a6,a6,a6),a6))
j.push(B.ac)
i=a5.f
if(i!=null)j.push(n.$2("Total",A.aQ(i,!1)))
i=a5.r
if(i!=null)j.push(n.$2("Sinal para confirmar",A.aQ(i,!1)))
i=a5.x
if(i!=null)B.e.n(j,A.a([B.as,A.h(i,a6,a6,a6,a6,B.tg,a6,a6,a6)],k))
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
f.push(new A.bQ(1,B.av,new A.hx(A.A(B.L,A.h(e.a,1,B.a3,a6,a6,new A.N(!0,a0,a6,a6,a6,a6,13,B.F,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),B.r,a6,a6,new A.M(a1,a6,a3,new A.ci(a2,a2,a2,a2),a6,a6,B.y),a6,36,a6,B.hv,a6,a6,a6),d,a6,a6),a6))
B.e.n(h,f)}B.e.n(j,A.a([B.Q,A.P(h,B.w,B.i,B.m,0,a6,a6)],k))}return A.aI(A.A(a6,A.B(j,B.I,B.i,B.m,0,B.v),B.r,a6,a6,new A.M(B.t,a6,l,m,a6,a6,B.y),a6,a6,a6,B.bj,a6,a6,a6),a6,x)}}
C.QX.prototype={
I(){return"ChatCardTone."+this.b}}
C.biT.prototype={
$3$1(d,e,f,g){return G.d3x(d,null,!1,null,null,e,f,g)},
$1(d){var x=y.b
return this.$3$1(d,y.i,x,x)}}
var z=a.updateTypes([])
C.cGW.prototype={
$2(d,e){return J.qh(this.a,new C.cGX(d,e))},
$S:399}
C.cGX.prototype={
$1(d){var x=J.a7(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:83}
C.bMH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bMF.prototype={
$0(){return this.a.e=!0},
$S:0}
C.bMG.prototype={
$0(){return this.a.e=!1},
$S:0}
C.bMI.prototype={
$0(){return this.a.zd("cancel_booking_change",A.S(["p_id",this.b],y.w,y.b),"Cancelado.")},
$S:0}
C.bMJ.prototype={
$0(){return this.a.zd("respond_booking_change",A.S(["p_id",this.b,"p_accept",!1],y.w,y.b),"Recusaste.")},
$S:0}
C.bMK.prototype={
$0(){return this.a.zd("respond_booking_change",A.S(["p_id",this.b,"p_accept",!0],y.w,y.b),"Aceite.")},
$S:0}
C.b_f.prototype={
$2(d,e){var x=null
return A.A(x,A.P(A.a([A.a4(A.h(d,x,x,x,x,B.R,x,x,x),1),A.h(e,x,x,x,x,B.bL,x,x,x)],y.u),B.w,B.i,B.m,0,x,x),B.r,x,x,I.KP,x,x,x,B.e1,x,x,x)},
$S:143};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.K,[C.kg,C.jz,C.qq,C.biT])
x(A.cQ,[C.cGW,C.b_f])
w(C.cGX,A.bw)
w(C.QU,A.G)
w(C.aDB,A.a_)
x(A.bR,[C.bMH,C.bMF,C.bMG,C.bMI,C.bMJ,C.bMK])
w(C.anV,A.I)
w(C.QX,A.f6)})()
A.bp(b.typeUniverse,JSON.parse('{"QU":{"G":[],"e":[],"f":[]},"aDB":{"a_":["QU"]},"anV":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{a:x("r<qq>"),u:x("r<e>"),x:x("dg"),i:x("fc<@>"),w:x("c"),v:x("dq"),b:x("@"),d:x("t<@>?"),y:x("c?"),q:x("~")}})();(function constants(){var x=a.makeConstList
D.L7=new C.biT()
D.pM=new C.QX(0,"pending")
D.Lx=new C.QX(2,"done")
D.pN=new C.QX(3,"doneLine")
D.lq=new C.QX(4,"neutral")
D.bA2=x([],A.w("r<jz>"))
D.Ly=new C.kg(!1,D.bA2)
D.asS=new A.a0(0,4,0,12)
D.aIO=new A.lE("M5 12.5l4.5 4.5L19 7.5",14,B.T,2.4,!1,B.cn,null)
D.aIR=new A.lE("M3 3h8l10 10-8 8L3 11V3zM7 6.5a1 1 0 1 0 0 .01",14,B.d8,2,!1,B.cn,null)
D.aIX=new A.lE("M2 12.5l4.5 4.5L16 7.5M11 15.5l1.5 1.5L22 7.5",16,B.bv,2.4,!1,B.cn,null)
D.WX=x([],y.a)
D.bRI=new A.a3("Aceite",D.pN)
D.bRP=new A.a3("Cancelada",D.lq)
D.a7a=new A.a3("Recusada",D.lq)
D.a7h=new A.a3("Tudo pago",D.pN)
D.a7n=new A.a3("Reserva cancelada",D.lq)
D.bUv=new A.ry([null,B.d9,B.d_,B.d_,null])
D.bUw=new A.ry([B.bv,B.d9,B.d_,B.d_,null])
D.bUx=new A.ry([null,B.f6,B.d8,B.T,null])
D.cck=new A.C("N\xe3o foi poss\xedvel concluir. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZI=new A.bG(D.cck,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.z,null)
D.cg7=new A.C("N\xe3o foi poss\xedvel enviar o anexo. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.a9q=new A.bG(D.cg7,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.z,null)})()};
(a=>{a["cuAltKgIJjSmjvFutb8fDM3rwQc="]=a.current})($__dart_deferred_initializers__);