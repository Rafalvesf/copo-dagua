((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,H,L,F,M,I,E,G,A={
cZ3(d,e,f){var x=e.i("@<0>").b4(f),w=new B.aH($.aQ,x.i("aH<+(1,2)>")),v=new A.Lz(d.a,e.i("Lz<0>")),u=new A.Lz(d.b,f.i("Lz<0>"))
A.d76(B.a([v,u],y.a),new A.aZh(new B.My(w,x.i("My<+(1,2)>")),v,u,e,f))
return w},
d76(d,e){var x={},w=x.a=x.b=0,v=new A.bJ5(x,d,e)
for(;w<2;++w)d[w].be_(v)},
aZh:function aZh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1j:function a1j(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Lz:function Lz(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bJ6:function bJ6(d,e){this.a=d
this.b=e},
bJ7:function bJ7(d,e){this.a=d
this.b=e},
bJ5:function bJ5(d,e,f){this.a=d
this.b=e
this.c=f},
afm(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$afm=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.Z().b
n===$&&B.b()
x=6
return B.d(n.S("platform_settings").aO(0,"*").a0("id",1).e_(0),$async$afm)
case 6:t=e
$.ckA=B.e_(J.h(t,"platform_commission_percentage"))
$.czK=N.aXy(J.h(t,"organizer_fee_tiers"),$.ckA,null)
s=J.h(t,"partner_fee_tiers")
r=new A.chR()
if(y.j.b(s)&&J.eU(s)){q=B.a([],y.s)
for(n=J.bA(s,y.f),m=B.r(n),n=new B.ap(n,n.gv(n),m.i("ap<a6.E>")),m=m.i("a6.E");n.p();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.u(r.$1(B.e_(J.h(p,"pct"))))+"% acima":B.u(r.$1(B.e_(J.h(p,"pct"))))+"% at\xe9 "+B.by(B.e_(J.h(p,"up_to")),!1)
J.ce(q,l)}$.ckB=J.qx(q,", ")}else{k=B.b9(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.ckB=o>0?B.u(r.$1(o))+"%":""}v=1
x=5
break
case 3:v=2
i=u.pop()
x=5
break
case 2:x=1
break
case 5:return B.l(null,w)
case 1:return B.k(u.at(-1),w)}})
return B.m($async$afm,w)},
czb(d){var x
if(typeof d=="number")x=d
else{x=B.fF(B.u(d))
if(x==null)x=0}return x},
cM0(d){var x
if(d==null)x=null
else{x=B.fO(B.u(d))
x=x==null?null:x.fq()}return x},
cgS(d){var x,w,v
if(d==null)return"Cliente"
x=J.a3(d)
w=x.h(d,"partner_name_1")
v=C.f.L(J.cJ(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a4(B.a([v,C.f.L(J.cJ(x==null?"":x))],y.s),new A.cgZ(),y.U).ao(0," & ")
return x.length===0?"Cliente":x},
cyJ(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.B(g,y.c)
for(x=J.cr(a0),w=x.gW(a0);w.p();){v=w.gF(w)
f.j(0,B.a1(J.h(v,"id")),v)}u=new A.cgk(a2)
t=new A.cgl()
w=B.a([],y.P)
for(v=J.cr(a1),s=v.gW(a1);s.p();)w.push(new A.cgj(f,s.gF(s),a2,d,t).$0())
r=B.B(g,y.i)
for(g=v.gW(a1);g.p();){f=g.gF(g)
v=J.a3(f)
if(J.o(v.h(f,i),"paid")){q=B.a1(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.fF(B.u(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gW(a0),x=y.Y;f.p();){v=f.gF(f)
s=J.a3(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.cjt(p,J.cJ(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.fO(B.u(m))
m=m==null?h:m.fq()}l=x.a(s.h(v,"weddings"))
l=l==null?h:J.h(l,"location")
l=J.cJ(l==null?"":l)
k=D.bxT.h(0,s.h(v,i))
if(k==null)k=B.u(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fF(B.u(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.Dp(o,p,n,m,l,k,j,v==null?0:v))}return new A.l0(e,d,g,w,D.TW,D.TX,h)},
chR:function chR(){},
Dp:function Dp(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
q_:function q_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
l0:function l0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bi1:function bi1(){},
bi2:function bi2(){},
bhW:function bhW(){},
bi_:function bi_(){},
bi0:function bi0(){},
bhV:function bhV(){},
bhY:function bhY(){},
bhZ:function bhZ(){},
bhX:function bhX(){},
cgZ:function cgZ(){},
cgk:function cgk(d){this.a=d},
cgl:function cgl(){},
cgj:function cgj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Bx:function Bx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aza:function aza(){this.c=this.a=this.d=null},
bHv:function bHv(d,e){this.a=d
this.b=e},
bHw:function bHw(d){this.a=d},
bHA:function bHA(d,e){this.a=d
this.b=e},
bHz:function bHz(d){this.a=d},
bHB:function bHB(d,e){this.a=d
this.b=e},
bHy:function bHy(d){this.a=d},
bHC:function bHC(d,e){this.a=d
this.b=e},
bHx:function bHx(d){this.a=d},
Vg:function Vg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,N,O
J=c[1]
B=c[0]
C=c[2]
K=c[258]
H=c[259]
L=c[281]
F=c[133]
M=c[302]
I=c[137]
E=c[64]
G=c[138]
A=a.updateHolder(c[123],A)
D=c[447]
N=c[175]
O=c[439]
A.a1j.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.u(u.a)},
gmD(){var x=this.c
x=x==null?null:x.b
return x==null?B.eM.prototype.gmD.call(this):x}}
A.Lz.prototype={
gt(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
be_(d){this.a.cJ(new A.bJ6(this,d),new A.bJ7(this,d),y.d)}}
A.Dp.prototype={
gDJ(){var x=this.r-this.w
return x<0?0:x}}
A.q_.prototype={
gbon(){return this.e==="Pago"},
gpq(d){var x=this.z
return x>0?x:this.f}}
A.l0.prototype={
gawD(){var x=this.d
return new B.a4(x,new A.bi1(),B.a7(x).i("a4<1>")).dS(0,0,new A.bi2())},
gatp(){return C.e.dS(this.c,0,new A.bhW())},
gawE(){var x=this.d
return new B.a4(x,new A.bi_(),B.a7(x).i("a4<1>")).dS(0,0,new A.bi0())},
gatq(){return C.e.dS(this.c,0,new A.bhV())},
gbrq(){var x=this.d
return new B.a4(x,new A.bhY(),B.a7(x).i("a4<1>")).dS(0,0,new A.bhZ())},
gatD(){return C.e.dS(this.e,0,new A.bhX())}}
A.Bx.prototype={
R(){return new A.aza()},
lG(d){return this.e.$0()}}
A.aza.prototype={
yv(d,e){return this.b8q(d,e)},
b8q(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$yv=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bHv(r,d))
u=4
q=null
x=7
return B.d(A.cZ3(new B.ag(r.a.lG(0),B.dl("files","")),y.e,y.z),$async$yv)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$yv)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.T(y.q).f.af(D.bNA)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bHw(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$yv,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.T(22)
u=u.c
x=w.d
return B.E(v,B.I(B.a([new A.Vg(O.MJ,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bHA(w,t),v),H.B4,new A.Vg(C.jO,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bHB(w,t),v),H.B4,new A.Vg(C.iV,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bHC(w,t),v)],y.p),C.I,C.l,C.q,0,C.w),C.t,v,v,new B.K(C.v,v,v,s,C.aq,v,C.y),v,v,v,v,C.mp,v,v,v)}}
A.Vg.prototype={
u(d){var x,w,v,u=this,t=null,s=B.T(14),r=u.f,q=r?t:u.r,p=B.T(12)
p=B.E(C.S,B.aJ(u.c,$.a5,t,t,20),C.t,t,t,new B.K(C.af,t,t,p,t,t,C.y),t,40,t,t,t,t,t,40)
x=y.p
w=B.ab(B.I(B.a([B.i(u.d,t,t,t,C.c1,t,t,t),B.i(u.e,t,t,t,L.eW,t,t,t)],x),C.I,C.l,C.q,0,C.w),1)
v=$.a5
return B.eY(!1,s,!0,new B.a_(K.mn,B.V(B.a([p,C.as,w,r?B.aT(B.B6(t,v,t,t,t,t,t,2,t,t),20,20):B.aJ(M.u7,v,t,t,20)],x),C.x,C.l,C.q,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(q_)","W(W,q_)","H<~>(l0)","W(W,Dp)","W(W,JI)","q_()"])
A.aZh.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dC(0,new B.ag(t.gt(0),s.gt(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.kh(new A.a1j(new B.ag(x,w),t,d,v.d.i("@<0>").b4(v.e).i("a1j<+(1?,2?),+(fL?,fL?)>")))}},
$S:15}
A.bJ6.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bw(1)")}}
A.bJ7.prototype={
$2(d,e){this.a.c=new B.fL(d,e)
this.b.$1(1)},
$S:22}
A.bJ5.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.chR.prototype={
$1(d){return C.k.aj(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:117}
A.bi1.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bi2.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bhW.prototype={
$2(d,e){return d+e.gDJ()},
$S:z+3}
A.bi_.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bi0.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.kF(x,w>0?w:x))},
$S:z+1}
A.bhV.prototype={
$2(d,e){var x=e.gDJ()
return d+(x+G.kF(x,e.r))},
$S:z+3}
A.bhY.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bhZ.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.kF(x,w>0?w:x)},
$S:z+1}
A.bhX.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cgZ.prototype={
$1(d){return d.length!==0},
$S:8}
A.cgk.prototype={
$1(d){var x=J.a3(d),w=y.Y
if(this.a)x=A.cgS(w.a(x.h(d,"weddings")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cJ(x==null?"Parceiro":x)}return x},
$S:420}
A.cgl.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cJ(x==null?"":x)},
$S:420}
A.cgj.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a3(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"weddings"),j=y.Y,i=A.cgS(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cJ(k)
k=I.cjt(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.byu.h(0,n.h(o,"type"))
if(v==null)v=B.u(n.h(o,"type"))
u=D.byw.h(0,n.h(o,"status"))
if(u==null)u=B.u(n.h(o,"status"))
t=A.czb(n.h(o,"amount"))
s=A.cM0(n.h(o,"paid_at"))
r=A.cM0(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cJ(o==null?"":o)
n=q.e.$1(m)
return new A.q_(k,w,j,v,u,t,s,r,o,n,A.czb(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bHv.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bHw.prototype={
$0(){return this.a.d=null},
$S:0}
A.bHA.prototype={
$0(){return this.a.yv("pdf",new A.bHz(this.b))},
$S:0}
A.bHz.prototype={
$1(d){return this.azs(d)},
azs(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
x=3
return B.d(E.coN(d,u.a),$async$$1)
case 3:t=f
B.cq("files")
s=E.cA5(d,"pdf")
B.cq("files")
v=F.W6(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bHB.prototype={
$0(){return this.a.yv("xlsx",new A.bHy(this.b))},
$S:0}
A.bHy.prototype={
$1(d){return this.azr(d)},
azr(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
t=E.dgV(d,u.a)
B.cq("files")
s=E.cA5(d,"xlsx")
B.cq("files")
v=F.W6(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bHC.prototype={
$0(){return this.a.yv("rec",new A.bHx(this.b))},
$S:0}
A.bHx.prototype={
$1(d){return this.azq(d)},
azq(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
x=2
return B.d(E.coC(d,v.a),$async$$1)
case 2:u=f
B.cq("files")
t=E.cA5(new A.l0("Comprovativos",d.b,d.c,d.d,D.TW,D.TX,null),"pdf")
B.cq("files")
x=3
return B.d(F.W6(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.aZh,A.bJ6,A.bJ5,A.chR,A.bi1,A.bi_,A.bhY,A.cgZ,A.cgk,A.cgl,A.bHz,A.bHy,A.bHx])
w(A.a1j,B.eM)
x(B.G,[A.Lz,A.Dp,A.q_,A.l0])
x(B.cF,[A.bJ7,A.bi2,A.bhW,A.bi0,A.bhV,A.bhZ,A.bhX])
x(B.bI,[A.cgj,A.bHv,A.bHw,A.bHA,A.bHB,A.bHC])
w(A.Bx,B.F)
w(A.aza,B.a0)
w(A.Vg,B.M)})()
B.bx(b.typeUniverse,JSON.parse('{"a1j":{"eM":[]},"Bx":{"F":[],"e":[],"f":[]},"aza":{"a0":["Bx"]},"Vg":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.v
return{w:x("ch<c,c>"),b:x("q<Dp>"),P:x("q<q_>"),s:x("q<c>"),p:x("q<e>"),a:x("q<Lz<@>>"),j:x("t<@>"),c:x("a2<c,@>"),f:x("a2<@,@>"),d:x("bw"),e:x("l0"),N:x("c"),U:x("a4<c>"),q:x("dC"),i:x("W"),z:x("@"),Y:x("a2<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.TX=x([],B.v("q<a3c>"))
D.TW=x([],B.v("q<JI>"))
D.bA4={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bxT=new B.ch(D.bA4,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bzM={deposit:0,final_payment:1}
D.byu=new B.ch(D.bzM,["Sinal","Pagamento final"],y.w)
D.bzZ={paid:0,pending:1,failed:2,refunded:3}
D.byw=new B.ch(D.bzZ,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c0V=new B.J("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bNA=new B.cd(D.c0V,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)})()};
(a=>{a["erf/SII4cnWnuPOkna6w5FPvy9o="]=a.current})($__dart_deferred_initializers__);