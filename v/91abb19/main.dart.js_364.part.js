((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dny(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aN($.aT,x.i("aN<+(1,2)>")),v=new A.Oj(d.a,e.i("Oj<0>")),u=new A.Oj(d.b,f.i("Oj<0>"))
A.dx3(B.a([v,u],y.a),new A.b7d(new B.Pq(w,x.i("Pq<+(1,2)>")),v,u,e,f))
return w},
dx3(d,e){var x={},w=x.a=x.b=0,v=new A.bXl(x,d,e)
for(;w<2;++w)d[w].bmj(v)},
b7d:function b7d(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5r:function a5r(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Oj:function Oj(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bXm:function bXm(d,e){this.a=d
this.b=e},
bXn:function bXn(d,e){this.a=d
this.b=e},
bXl:function bXl(d,e,f){this.a=d
this.b=e
this.c=f},
akt(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akt=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.T().b
n===$&&B.b()
x=6
return B.d(n.R("platform_settings").az(0,"*").X("id",1).dP(0),$async$akt)
case 6:t=e
$.cG0=B.du(J.i(t,"platform_commission_percentage"))
$.cWm=B.b5p(J.i(t,"organizer_fee_tiers"),$.cG0)
s=J.i(t,"partner_fee_tiers")
r=new A.cCm()
if(y.j.b(s)&&J.dQ(s)){q=B.a([],y.s)
for(n=J.bl(s,y.f),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<U.E>")),m=m.i("U.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.du(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.du(J.i(p,"pct"))))+"% at\xe9 "+B.aQ(B.du(J.i(p,"up_to")),!1)
J.bt(q,l)}$.cG1=J.ke(q,", ")}else{k=B.aK(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cG1=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akt,w)},
cVP(d){var x
if(typeof d=="number")x=d
else{x=B.fp(B.q(d))
if(x==null)x=0}return x},
d8u(d){var x
if(d==null)x=null
else{x=B.dN(B.q(d))
x=x==null?null:x.e8()}return x},
cBg(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cy(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.D(J.cy(x==null?"":x))],y.s),new A.cBn(),y.U).a2(0," & ")
return x.length===0?"Cliente":x},
cVi(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.C(g,y.c)
for(x=J.c5(a0),w=x.gV(a0);w.t();){v=w.gE(w)
f.j(0,B.a2(J.i(v,"id")),v)}u=new A.cAI(a2)
t=new A.cAJ()
w=B.a([],y.P)
for(v=J.c5(a1),s=v.gV(a1);s.t();)w.push(new A.cAH(f,s.gE(s),a2,d,t).$0())
r=B.C(g,y.i)
for(g=v.gV(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.a2(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.fp(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gV(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cEn(p,J.cy(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.dN(B.q(m))
m=m==null?h:m.e8()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cy(l==null?"":l)
k=D.bH8.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fp(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FL(o,p,n,m,l,k,j,v==null?0:v))}return new A.lL(e,d,g,w,D.WF,D.WG,h)},
cCm:function cCm(){},
FL:function FL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
rb:function rb(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lL:function lL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bs3:function bs3(){},
bs4:function bs4(){},
brY:function brY(){},
bs1:function bs1(){},
bs2:function bs2(){},
brX:function brX(){},
bs_:function bs_(){},
bs0:function bs0(){},
brZ:function brZ(){},
cBn:function cBn(){},
cAI:function cAI(d){this.a=d},
cAJ:function cAJ(){},
cAH:function cAH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DH:function DH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFY:function aFY(){this.c=this.a=this.d=null},
bVy:function bVy(d,e){this.a=d
this.b=e},
bVz:function bVz(d){this.a=d},
bVD:function bVD(d,e){this.a=d
this.b=e},
bVC:function bVC(d){this.a=d},
bVE:function bVE(d,e){this.a=d
this.b=e},
bVB:function bVB(d){this.a=d},
bVF:function bVF(d,e){this.a=d
this.b=e},
bVA:function bVA(d){this.a=d},
YU:function YU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[289]
F=c[142]
K=c[329]
I=c[148]
E=c[69]
G=c[149]
A=a.updateHolder(c[131],A)
D=c[431]
L=c[423]
A.a5r.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.q(u.a)},
gmX(){var x=this.c
x=x==null?null:x.b
return x==null?B.f7.prototype.gmX.call(this):x}}
A.Oj.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bmj(d){this.a.cE(new A.bXm(this,d),new A.bXn(this,d),y.d)}}
A.FL.prototype={
gFn(){var x=this.r-this.w
return x<0?0:x}}
A.rb.prototype={
gbwQ(){return this.e==="Pago"},
gpP(d){var x=this.z
return x>0?x:this.f}}
A.lL.prototype={
gaBk(){var x=this.d
return new B.a6(x,new A.bs3(),B.a8(x).i("a6<1>")).d2(0,0,new A.bs4())},
gay_(){return C.e.d2(this.c,0,new A.brY())},
gaBl(){var x=this.d
return new B.a6(x,new A.bs1(),B.a8(x).i("a6<1>")).d2(0,0,new A.bs2())},
gay0(){return C.e.d2(this.c,0,new A.brX())},
gbzV(){var x=this.d
return new B.a6(x,new A.bs_(),B.a8(x).i("a6<1>")).d2(0,0,new A.bs0())},
gayf(){return C.e.d2(this.e,0,new A.brZ())}}
A.DH.prototype={
P(){return new A.aFY()},
m8(d){return this.e.$0()}}
A.aFY.prototype={
zx(d,e){return this.bgr(d,e)},
bgr(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zx=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bVy(r,d))
u=4
q=null
x=7
return B.d(A.dny(new B.a3(r.a.m8(0),B.db("files","")),y.e,y.z),$async$zx)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zx)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a4(D.bZG)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bVz(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zx,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.Y(22)
u=u.c
x=w.d
return B.A(v,B.B(B.a([new A.YU(L.P9,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bVD(w,t),v),H.CF,new A.YU(C.Eq,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bVE(w,t),v),H.CF,new A.YU(C.nS,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bVF(w,t),v)],y.p),C.G,C.i,C.m,0,C.v),C.r,v,v,new B.M(C.t,v,v,s,C.bf,v,C.y),v,v,v,C.nt,v,v,v)}}
A.YU.prototype={
u(d){var x,w,v,u=this,t=null,s=B.Y(14),r=u.f,q=r?t:u.r,p=B.Y(12)
p=B.A(C.L,B.b2(u.c,$.ar,t,t,20),C.r,t,t,new B.M(C.ac,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a5(B.B(B.a([B.h(u.d,t,t,t,t,C.bQ,t,t,t),B.h(u.e,t,t,t,t,C.hd,t,t,t)],x),C.G,C.i,C.m,0,C.v),1)
v=$.ar
return B.eF(!1,s,!0,new B.Q(C.np,B.P(B.a([p,C.ah,w,r?B.aI(B.anK(t,v,t,t,t,t,t,2,t,t),20,20):B.b2(K.vr,v,t,t,20)],x),C.w,C.i,C.m,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["y(rb)","R(R,rb)","F<~>(lL)","R(R,FL)","R(R,Mg)","rb()"])
A.b7d.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a3(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jR(new A.a5r(new B.a3(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a5r<+(1?,2?),+(h9?,h9?)>")))}},
$S:21}
A.bXm.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("by(1)")}}
A.bXn.prototype={
$2(d,e){this.a.c=new B.h9(d,e)
this.b.$1(1)},
$S:23}
A.bXl.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:21}
A.cCm.prototype={
$1(d){return C.k.ao(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:153}
A.bs3.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bs4.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.brY.prototype={
$2(d,e){return d+e.gFn()},
$S:z+3}
A.bs1.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bs2.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.ln(x,w>0?w:x))},
$S:z+1}
A.brX.prototype={
$2(d,e){var x=e.gFn()
return d+(x+G.ln(x,e.r))},
$S:z+3}
A.bs_.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bs0.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.ln(x,w>0?w:x)},
$S:z+1}
A.brZ.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cBn.prototype={
$1(d){return d.length!==0},
$S:8}
A.cAI.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cBg(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cy(x==null?"Parceiro":x)}return x},
$S:401}
A.cAJ.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cy(x==null?"":x)},
$S:401}
A.cAH.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cBg(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cy(k)
k=l?p:J.i(m,"booking_number")
k=I.cEn(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bHH.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bHV.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cVP(n.h(o,"amount"))
s=A.d8u(n.h(o,"paid_at"))
r=A.d8u(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cy(o==null?"":o)
n=q.e.$1(m)
return new A.rb(k,w,j,v,u,t,s,r,o,n,A.cVP(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bVy.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bVz.prototype={
$0(){return this.a.d=null},
$S:0}
A.bVD.prototype={
$0(){return this.a.zx("pdf",new A.bVC(this.b))},
$S:0}
A.bVC.prototype={
$1(d){return this.aEw(d)},
aEw(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=3
return B.d(E.cKK(d,u.a),$async$$1)
case 3:t=f
B.cn("files")
s=E.cWK(d,"pdf")
B.cn("files")
v=F.ZO(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bVE.prototype={
$0(){return this.a.zx("xlsx",new A.bVB(this.b))},
$S:0}
A.bVB.prototype={
$1(d){return this.aEv(d)},
aEv(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
t=E.dIw(d,u.a)
B.cn("files")
s=E.cWK(d,"xlsx")
B.cn("files")
v=F.ZO(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bVF.prototype={
$0(){return this.a.zx("rec",new A.bVA(this.b))},
$S:0}
A.bVA.prototype={
$1(d){return this.aEu(d)},
aEu(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=2
return B.d(E.cKx(d,v.a),$async$$1)
case 2:u=f
B.cn("files")
t=E.cWK(new A.lL("Comprovativos",d.b,d.c,d.d,D.WF,D.WG,null),"pdf")
B.cn("files")
x=3
return B.d(F.ZO(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.b7d,A.bXm,A.bXl,A.cCm,A.bs3,A.bs1,A.bs_,A.cBn,A.cAI,A.cAJ,A.bVC,A.bVB,A.bVA])
w(A.a5r,B.f7)
x(B.J,[A.Oj,A.FL,A.rb,A.lL])
x(B.cQ,[A.bXn,A.bs4,A.brY,A.bs2,A.brX,A.bs0,A.brZ])
x(B.bT,[A.cAH,A.bVy,A.bVz,A.bVD,A.bVE,A.bVF])
w(A.DH,B.H)
w(A.aFY,B.a_)
w(A.YU,B.L)})()
B.bq(b.typeUniverse,JSON.parse('{"a5r":{"f7":[]},"DH":{"H":[],"e":[],"f":[]},"aFY":{"a_":["DH"]},"YU":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c1<c,c>"),b:x("r<FL>"),P:x("r<rb>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Oj<@>>"),j:x("t<@>"),c:x("a4<c,@>"),f:x("a4<@,@>"),d:x("by"),e:x("lL"),N:x("c"),U:x("a6<c>"),q:x("dt"),i:x("R"),z:x("@"),Y:x("a4<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.WG=x([],B.w("r<a7t>"))
D.WF=x([],B.w("r<Mg>"))
D.bJM={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bH8=new B.c1(D.bJM,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bJp={deposit:0,final_payment:1,guest_share:2}
D.bHH=new B.c1(D.bJp,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bJD={paid:0,pending:1,failed:2,refunded:3}
D.bHV=new B.c1(D.bJD,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cdZ=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZG=new B.bJ(D.cdZ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)})()};
(a=>{a["Rji/eGH0ZmFgWaWdvdtH4JR/X7U="]=a.current})($__dart_deferred_initializers__);