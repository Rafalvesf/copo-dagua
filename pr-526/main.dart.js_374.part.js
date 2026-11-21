((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,H,L,F,M,I,E,G,A={
d2y(d,e,f){var x=e.i("@<0>").b0(f),w=new B.aK($.aW,x.i("aK<+(1,2)>")),v=new A.M0(d.a,e.i("M0<0>")),u=new A.M0(d.b,f.i("M0<0>"))
A.db4(B.a([v,u],y.a),new A.aZA(new B.aea(w,x.i("aea<+(1,2)>")),v,u,e,f))
return w},
db4(d,e){var x={},w=x.a=x.b=0,v=new A.bJ7(x,d,e)
for(;w<2;++w)d[w].bfG(v)},
aZA:function aZA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1U:function a1U(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
M0:function M0(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bJ8:function bJ8(d,e){this.a=d
this.b=e},
bJ9:function bJ9(d,e){this.a=d
this.b=e},
bJ7:function bJ7(d,e,f){this.a=d
this.b=e
this.c=f},
agi(){var x=0,w=B.m(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$agi=B.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.Q().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").az(0,"*").W("id",1).dH(0),$async$agi)
case 6:t=e
$.coB=B.dp(J.f(t,"platform_commission_percentage"))
$.cDT=L.aXV(J.f(t,"organizer_fee_tiers"),$.coB,null)
s=J.f(t,"partner_fee_tiers")
r=new A.clw()
if(y.j.b(s)&&J.fo(s)){q=B.a([],y.s)
for(n=J.bv(s,y.f),m=B.t(n),n=new B.al(n,n.gA(n),m.i("al<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.f(p,"up_to")==null?B.p(r.$1(B.dp(J.f(p,"pct"))))+"% acima":B.p(r.$1(B.dp(J.f(p,"pct"))))+"% at\xe9 "+B.aT(B.dp(J.f(p,"up_to")),!1)
J.bO(q,l)}$.coC=J.lS(q,", ")}else{k=B.aM(J.f(t,"partner_fee_percentage"))
o=k==null?0:k
$.coC=o>0?B.p(r.$1(o))+"%":""}v=1
x=5
break
case 3:v=2
i=u.pop()
x=5
break
case 2:x=1
break
case 5:return B.k(null,w)
case 1:return B.j(u.at(-1),w)}})
return B.l($async$agi,w)},
cDl(d){var x
if(typeof d=="number")x=d
else{x=B.f0(B.p(d))
if(x==null)x=0}return x},
cPU(d){var x
if(d==null)x=null
else{x=B.et(B.p(d))
x=x==null?null:x.eJ()}return x},
cku(d){var x,w,v
if(d==null)return"Cliente"
x=J.a3(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.d1(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a2(B.a([v,C.f.D(J.d1(x==null?"":x))],y.s),new A.ckB(),y.U).a6(0," & ")
return x.length===0?"Cliente":x},
cCU(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.K(g,y.c)
for(x=J.cv(a0),w=x.gY(a0);w.t();){v=w.gG(w)
f.k(0,B.a1(J.f(v,"id")),v)}u=new A.cjY(a2)
t=new A.cjZ()
w=B.a([],y.P)
for(v=J.cv(a1),s=v.gY(a1);s.t();)w.push(new A.cjX(f,s.gG(s),a2,d,t).$0())
r=B.K(g,y.i)
for(g=v.gY(a1);g.t();){f=g.gG(g)
v=J.a3(f)
if(J.n(v.h(f,i),"paid")){q=B.a1(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.f0(B.p(f))
if(f==null)f=0}r.k(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gY(a0),x=y.Y;f.t();){v=f.gG(f)
s=J.a3(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.f(o,"business_name")
if(o==null)o=a2?d:""
o=I.cnm(p,J.d1(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.et(B.p(m))
m=m==null?h:m.eJ()}l=x.a(s.h(v,"events"))
l=l==null?h:J.f(l,"location")
l=J.d1(l==null?"":l)
k=D.bCZ.h(0,s.h(v,i))
if(k==null)k=B.p(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.f0(B.p(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.DV(o,p,n,m,l,k,j,v==null?0:v))}return new A.lc(e,d,g,w,D.UD,D.UE,h)},
clw:function clw(){},
DV:function DV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
qb:function qb(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lc:function lc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bhK:function bhK(){},
bhL:function bhL(){},
bhE:function bhE(){},
bhI:function bhI(){},
bhJ:function bhJ(){},
bhD:function bhD(){},
bhG:function bhG(){},
bhH:function bhH(){},
bhF:function bhF(){},
ckB:function ckB(){},
cjY:function cjY(d){this.a=d},
cjZ:function cjZ(){},
cjX:function cjX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
C_:function C_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azJ:function azJ(){this.c=this.a=this.d=null},
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
VH:function VH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,N
J=c[1]
B=c[0]
C=c[2]
K=c[275]
H=c[276]
L=c[189]
F=c[135]
M=c[322]
I=c[139]
E=c[66]
G=c[140]
A=a.updateHolder(c[126],A)
D=c[451]
N=c[443]
A.a1U.prototype={
j(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.p(u.a)},
gna(){var x=this.c
x=x==null?null:x.b
return x==null?B.eK.prototype.gna.call(this):x}}
A.M0.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bfG(d){this.a.cF(new A.bJ8(this,d),new A.bJ9(this,d),y.d)}}
A.DV.prototype={
gEa(){var x=this.r-this.w
return x<0?0:x}}
A.qb.prototype={
gbpG(){return this.e==="Pago"},
gpe(d){var x=this.z
return x>0?x:this.f}}
A.lc.prototype={
gaxA(){var x=this.d
return new B.a2(x,new A.bhK(),B.a8(x).i("a2<1>")).dK(0,0,new A.bhL())},
gauf(){return C.e.dK(this.c,0,new A.bhE())},
gaxB(){var x=this.d
return new B.a2(x,new A.bhI(),B.a8(x).i("a2<1>")).dK(0,0,new A.bhJ())},
gaug(){return C.e.dK(this.c,0,new A.bhD())},
gbsP(){var x=this.d
return new B.a2(x,new A.bhG(),B.a8(x).i("a2<1>")).dK(0,0,new A.bhH())},
gaur(){return C.e.dK(this.e,0,new A.bhF())}}
A.C_.prototype={
S(){return new A.azJ()},
lG(d){return this.e.$0()}}
A.azJ.prototype={
yx(d,e){return this.ba1(d,e)},
ba1(d,e){var x=0,w=B.m(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$yx=B.i(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bHv(r,d))
u=4
q=null
x=7
return B.d(A.d2y(new B.a4(r.a.lG(0),B.d7("files","")),y.e,y.z),$async$yx)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$yx)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.R(y.q).f.a3(D.bTI)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bHw(r))
x=s.pop()
break
case 6:case 1:return B.k(v,w)
case 2:return B.j(t.at(-1),w)}})
return B.l($async$yx,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.B(v,B.D(B.a([new A.VH(N.Na,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bHA(w,t),v),H.Bi,new A.VH(C.CS,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bHB(w,t),v),H.Bi,new A.VH(C.n1,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bHC(w,t),v)],y.p),C.I,C.j,C.q,0,C.w),C.r,v,v,new B.J(C.u,v,v,s,C.aJ,v,C.y),v,v,v,C.pp,v,v,v)}}
A.VH.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.B(C.O,B.b0(u.c,$.ag,t,t,20),C.r,t,t,new B.J(C.ag,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a5(B.D(B.a([B.h(u.d,t,t,t,C.bV,t,t,t),B.h(u.e,t,t,t,C.fk,t,t,t)],x),C.I,C.j,C.q,0,C.w),1)
v=$.ag
return B.eE(!1,s,!0,new B.R(K.pj,B.S(B.a([p,C.ai,w,r?B.aJ(B.Ys(t,v,t,t,t,t,t,2,t,t),20,20):B.b0(M.uy,v,t,t,20)],x),C.x,C.j,C.q,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["y(qb)","T(T,qb)","G<~>(lc)","T(T,DV)","T(T,K7)","qb()"])
A.aZA.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dC(0,new B.a4(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.k8(new A.a1U(new B.a4(x,w),t,d,v.d.i("@<0>").b0(v.e).i("a1U<+(1?,2?),+(hy?,hy?)>")))}},
$S:17}
A.bJ8.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bJ(1)")}}
A.bJ9.prototype={
$2(d,e){this.a.c=new B.hy(d,e)
this.b.$1(1)},
$S:21}
A.bJ7.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:17}
A.clw.prototype={
$1(d){return C.k.am(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:117}
A.bhK.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bhL.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bhE.prototype={
$2(d,e){return d+e.gEa()},
$S:z+3}
A.bhI.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bhJ.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.kR(x,w>0?w:x))},
$S:z+1}
A.bhD.prototype={
$2(d,e){var x=e.gEa()
return d+(x+G.kR(x,e.r))},
$S:z+3}
A.bhG.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bhH.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.kR(x,w>0?w:x)},
$S:z+1}
A.bhF.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.ckB.prototype={
$1(d){return d.length!==0},
$S:9}
A.cjY.prototype={
$1(d){var x=J.a3(d),w=y.Y
if(this.a)x=A.cku(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.f(x,"business_name")
x=J.d1(x==null?"Parceiro":x)}return x},
$S:435}
A.cjZ.prototype={
$1(d){var x=d==null?null:J.f(d,"proposals")
y.Y.a(x)
x=x==null?null:J.f(x,"title")
return J.d1(x==null?"":x)},
$S:435}
A.cjX.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a3(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.f(m,"events"),j=y.Y,i=A.cku(j.a(k))
k=j.a(l?p:J.f(m,"partner_profiles"))
k=k==null?p:J.f(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.d1(k)
k=I.cnm(l?p:J.f(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bDu.h(0,n.h(o,"type"))
if(v==null)v=B.p(n.h(o,"type"))
u=D.bDI.h(0,n.h(o,"status"))
if(u==null)u=B.p(n.h(o,"status"))
t=A.cDl(n.h(o,"amount"))
s=A.cPU(n.h(o,"paid_at"))
r=A.cPU(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.d1(o==null?"":o)
n=q.e.$1(m)
return new A.qb(k,w,j,v,u,t,s,r,o,n,A.cDl(l?p:J.f(m,"total_amount")))},
$S:z+5}
A.bHv.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bHw.prototype={
$0(){return this.a.d=null},
$S:0}
A.bHA.prototype={
$0(){return this.a.yx("pdf",new A.bHz(this.b))},
$S:0}
A.bHz.prototype={
$1(d){return this.aAt(d)},
aAt(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$$1=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:B.cp("files")
B.cp("files")
x=3
return B.d(E.csZ(d,u.a),$async$$1)
case 3:t=f
B.cp("files")
s=E.cEj(d,"pdf")
B.cp("files")
v=F.Wy(t,s,"application/pdf")
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$$1,w)},
$S:z+2}
A.bHB.prototype={
$0(){return this.a.yx("xlsx",new A.bHy(this.b))},
$S:0}
A.bHy.prototype={
$1(d){return this.aAs(d)},
aAs(d){var x=0,w=B.m(y.H),v,u=this,t,s
var $async$$1=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:B.cp("files")
B.cp("files")
t=E.dlI(d,u.a)
B.cp("files")
s=E.cEj(d,"xlsx")
B.cp("files")
v=F.Wy(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$$1,w)},
$S:z+2}
A.bHC.prototype={
$0(){return this.a.yx("rec",new A.bHx(this.b))},
$S:0}
A.bHx.prototype={
$1(d){return this.aAr(d)},
aAr(d){var x=0,w=B.m(y.H),v=this,u,t
var $async$$1=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:B.cp("files")
B.cp("files")
x=2
return B.d(E.csL(d,v.a),$async$$1)
case 2:u=f
B.cp("files")
t=E.cEj(new A.lc("Comprovativos",d.b,d.c,d.d,D.UD,D.UE,null),"pdf")
B.cp("files")
x=3
return B.d(F.Wy(u,t,"application/pdf"),$async$$1)
case 3:return B.k(null,w)}})
return B.l($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bq,[A.aZA,A.bJ8,A.bJ7,A.clw,A.bhK,A.bhI,A.bhG,A.ckB,A.cjY,A.cjZ,A.bHz,A.bHy,A.bHx])
w(A.a1U,B.eK)
x(B.H,[A.M0,A.DV,A.qb,A.lc])
x(B.cG,[A.bJ9,A.bhL,A.bhE,A.bhJ,A.bhD,A.bhH,A.bhF])
x(B.bI,[A.cjX,A.bHv,A.bHw,A.bHA,A.bHB,A.bHC])
w(A.C_,B.F)
w(A.azJ,B.a_)
w(A.VH,B.O)})()
B.bj(b.typeUniverse,JSON.parse('{"a1U":{"eK":[]},"C_":{"F":[],"e":[]},"azJ":{"a_":["C_"]},"VH":{"O":[],"e":[]}}'))
var y=(function rtii(){var x=B.u
return{w:x("c6<c,c>"),b:x("q<DV>"),P:x("q<qb>"),s:x("q<c>"),p:x("q<e>"),a:x("q<M0<@>>"),j:x("r<@>"),c:x("a6<c,@>"),f:x("a6<@,@>"),d:x("bJ"),e:x("lc"),N:x("c"),U:x("a2<c>"),q:x("dv"),i:x("T"),z:x("@"),Y:x("a6<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.UE=x([],B.u("q<a3T>"))
D.UD=x([],B.u("q<K7>"))
D.bFl={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bCZ=new B.c6(D.bFl,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bF0={deposit:0,final_payment:1,guest_share:2}
D.bDu=new B.c6(D.bF0,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bFd={paid:0,pending:1,failed:2,refunded:3}
D.bDI=new B.c6(D.bFd,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c86=new B.z("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bTI=new B.bS(D.c86,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)})()};
(a=>{a["a58wgPHhQadylSWbxCNi06yVEH8="]=a.current})($__dart_deferred_initializers__);