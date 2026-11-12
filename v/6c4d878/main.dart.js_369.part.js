((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,H,L,F,M,I,E,G,A={
cYf(d,e,f){var x=e.i("@<0>").b3(f),w=new B.aH($.aQ,x.i("aH<+(1,2)>")),v=new A.Lt(d.a,e.i("Lt<0>")),u=new A.Lt(d.b,f.i("Lt<0>"))
A.d6h(B.a([v,u],y.a),new A.aZ3(new B.Ms(w,x.i("Ms<+(1,2)>")),v,u,e,f))
return w},
d6h(d,e){var x={},w=x.a=x.b=0,v=new A.bIB(x,d,e)
for(;w<2;++w)d[w].bdO(v)},
aZ3:function aZ3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a18:function a18(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Lt:function Lt(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bIC:function bIC(d,e){this.a=d
this.b=e},
bID:function bID(d,e){this.a=d
this.b=e},
bIB:function bIB(d,e,f){this.a=d
this.b=e
this.c=f},
afd(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$afd=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.Z().b
n===$&&B.b()
x=6
return B.d(n.S("platform_settings").aP(0,"*").a0("id",1).dZ(0),$async$afd)
case 6:t=e
$.cjV=B.e0(J.h(t,"platform_commission_percentage"))
$.cz_=N.aXk(J.h(t,"organizer_fee_tiers"),$.cjV,null)
s=J.h(t,"partner_fee_tiers")
r=new A.chb()
if(y.j.b(s)&&J.eU(s)){q=B.a([],y.s)
for(n=J.bA(s,y.f),m=B.r(n),n=new B.ap(n,n.gv(n),m.i("ap<a8.E>")),m=m.i("a8.E");n.p();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.u(r.$1(B.e0(J.h(p,"pct"))))+"% acima":B.u(r.$1(B.e0(J.h(p,"pct"))))+"% at\xe9 "+B.by(B.e0(J.h(p,"up_to")),!1)
J.cg(q,l)}$.cjW=J.qw(q,", ")}else{k=B.b9(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cjW=o>0?B.u(r.$1(o))+"%":""}v=1
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
return B.m($async$afd,w)},
cyr(d){var x
if(typeof d=="number")x=d
else{x=B.fD(B.u(d))
if(x==null)x=0}return x},
cLf(d){var x
if(d==null)x=null
else{x=B.h_(B.u(d))
x=x==null?null:x.fq()}return x},
cgc(d){var x,w,v
if(d==null)return"Cliente"
x=J.a3(d)
w=x.h(d,"partner_name_1")
v=C.f.L(J.cJ(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a5(B.a([v,C.f.L(J.cJ(x==null?"":x))],y.s),new A.cgj(),y.U).aq(0," & ")
return x.length===0?"Cliente":x},
cxZ(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.B(g,y.c)
for(x=J.cu(a0),w=x.gW(a0);w.p();){v=w.gF(w)
f.j(0,B.a1(J.h(v,"id")),v)}u=new A.cfF(a2)
t=new A.cfG()
w=B.a([],y.P)
for(v=J.cu(a1),s=v.gW(a1);s.p();)w.push(new A.cfE(f,s.gF(s),a2,d,t).$0())
r=B.B(g,y.i)
for(g=v.gW(a1);g.p();){f=g.gF(g)
v=J.a3(f)
if(J.o(v.h(f,i),"paid")){q=B.a1(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.fD(B.u(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gW(a0),x=y.Y;f.p();){v=f.gF(f)
s=J.a3(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.ciO(p,J.cJ(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.h_(B.u(m))
m=m==null?h:m.fq()}l=x.a(s.h(v,"weddings"))
l=l==null?h:J.h(l,"location")
l=J.cJ(l==null?"":l)
k=D.bxM.h(0,s.h(v,i))
if(k==null)k=B.u(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fD(B.u(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.Do(o,p,n,m,l,k,j,v==null?0:v))}return new A.l0(e,d,g,w,D.TU,D.TV,h)},
chb:function chb(){},
Do:function Do(d,e,f,g,h,i,j,k){var _=this
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
bhL:function bhL(){},
bhM:function bhM(){},
bhF:function bhF(){},
bhJ:function bhJ(){},
bhK:function bhK(){},
bhE:function bhE(){},
bhH:function bhH(){},
bhI:function bhI(){},
bhG:function bhG(){},
cgj:function cgj(){},
cfF:function cfF(d){this.a=d},
cfG:function cfG(){},
cfE:function cfE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Bw:function Bw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayY:function ayY(){this.c=this.a=this.d=null},
bH0:function bH0(d,e){this.a=d
this.b=e},
bH1:function bH1(d){this.a=d},
bH5:function bH5(d,e){this.a=d
this.b=e},
bH4:function bH4(d){this.a=d},
bH6:function bH6(d,e){this.a=d
this.b=e},
bH3:function bH3(d){this.a=d},
bH7:function bH7(d,e){this.a=d
this.b=e},
bH2:function bH2(d){this.a=d},
V7:function V7(d,e,f,g,h,i){var _=this
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
M=c[303]
I=c[137]
E=c[64]
G=c[138]
A=a.updateHolder(c[123],A)
D=c[451]
N=c[175]
O=c[443]
A.a18.prototype={
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
A.Lt.prototype={
gq(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bdO(d){this.a.cJ(new A.bIC(this,d),new A.bID(this,d),y.d)}}
A.Do.prototype={
gDI(){var x=this.r-this.w
return x<0?0:x}}
A.q_.prototype={
gbob(){return this.e==="Pago"},
gpq(d){var x=this.z
return x>0?x:this.f}}
A.l0.prototype={
gawz(){var x=this.d
return new B.a5(x,new A.bhL(),B.a6(x).i("a5<1>")).dS(0,0,new A.bhM())},
gatk(){return C.e.dS(this.c,0,new A.bhF())},
gawA(){var x=this.d
return new B.a5(x,new A.bhJ(),B.a6(x).i("a5<1>")).dS(0,0,new A.bhK())},
gatl(){return C.e.dS(this.c,0,new A.bhE())},
gbre(){var x=this.d
return new B.a5(x,new A.bhH(),B.a6(x).i("a5<1>")).dS(0,0,new A.bhI())},
gaty(){return C.e.dS(this.e,0,new A.bhG())}}
A.Bw.prototype={
R(){return new A.ayY()},
lG(d){return this.e.$0()}}
A.ayY.prototype={
yv(d,e){return this.b8g(d,e)},
b8g(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$yv=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.t(new A.bH0(r,d))
u=4
q=null
x=7
return B.d(A.cYf(new B.ag(r.a.lG(0),B.dk("files","")),y.e,y.z),$async$yv)
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
if(n!=null)n.T(y.q).f.ah(D.bNm)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new A.bH1(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$yv,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.T(22)
u=u.c
x=w.d
return B.E(v,B.I(B.a([new A.V7(O.MG,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bH5(w,t),v),H.B1,new A.V7(C.jO,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bH6(w,t),v),H.B1,new A.V7(C.iT,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bH7(w,t),v)],y.p),C.I,C.l,C.q,0,C.w),C.t,v,v,new B.K(C.v,v,v,s,C.an,v,C.y),v,v,v,v,C.mp,v,v,v)}}
A.V7.prototype={
u(d){var x,w,v,u=this,t=null,s=B.T(14),r=u.f,q=r?t:u.r,p=B.T(12)
p=B.E(C.T,B.aI(u.c,$.a4,t,t,20),C.t,t,t,new B.K(C.af,t,t,p,t,t,C.y),t,40,t,t,t,t,t,40)
x=y.p
w=B.ab(B.I(B.a([B.i(u.d,t,t,t,C.c0,t,t,t),B.i(u.e,t,t,t,L.eY,t,t,t)],x),C.I,C.l,C.q,0,C.w),1)
v=$.a4
return B.eY(!1,s,!0,new B.a_(K.mm,B.W(B.a([p,C.at,w,r?B.aT(B.B5(t,v,t,t,t,t,t,2,t,t),20,20):B.aI(M.u2,v,t,t,20)],x),C.x,C.l,C.q,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(q_)","X(X,q_)","H<~>(l0)","X(X,Do)","X(X,JF)","q_()"])
A.aZ3.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dC(0,new B.ag(t.gq(0),s.gq(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.kh(new A.a18(new B.ag(x,w),t,d,v.d.i("@<0>").b3(v.e).i("a18<+(1?,2?),+(fK?,fK?)>")))}},
$S:15}
A.bIC.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bw(1)")}}
A.bID.prototype={
$2(d,e){this.a.c=new B.fK(d,e)
this.b.$1(1)},
$S:22}
A.bIB.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.chb.prototype={
$1(d){return C.k.aj(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:124}
A.bhL.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bhM.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bhF.prototype={
$2(d,e){return d+e.gDI()},
$S:z+3}
A.bhJ.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bhK.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.kF(x,w>0?w:x))},
$S:z+1}
A.bhE.prototype={
$2(d,e){var x=e.gDI()
return d+(x+G.kF(x,e.r))},
$S:z+3}
A.bhH.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bhI.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.kF(x,w>0?w:x)},
$S:z+1}
A.bhG.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cgj.prototype={
$1(d){return d.length!==0},
$S:9}
A.cfF.prototype={
$1(d){var x=J.a3(d),w=y.Y
if(this.a)x=A.cgc(w.a(x.h(d,"weddings")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cJ(x==null?"Parceiro":x)}return x},
$S:445}
A.cfG.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cJ(x==null?"":x)},
$S:445}
A.cfE.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a3(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"weddings"),j=y.Y,i=A.cgc(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cJ(k)
k=I.ciO(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.byn.h(0,n.h(o,"type"))
if(v==null)v=B.u(n.h(o,"type"))
u=D.byp.h(0,n.h(o,"status"))
if(u==null)u=B.u(n.h(o,"status"))
t=A.cyr(n.h(o,"amount"))
s=A.cLf(n.h(o,"paid_at"))
r=A.cLf(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cJ(o==null?"":o)
n=q.e.$1(m)
return new A.q_(k,w,j,v,u,t,s,r,o,n,A.cyr(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bH0.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bH1.prototype={
$0(){return this.a.d=null},
$S:0}
A.bH5.prototype={
$0(){return this.a.yv("pdf",new A.bH4(this.b))},
$S:0}
A.bH4.prototype={
$1(d){return this.azn(d)},
azn(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
x=3
return B.d(E.co5(d,u.a),$async$$1)
case 3:t=f
B.ct("files")
s=E.czl(d,"pdf")
B.ct("files")
v=F.VX(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bH6.prototype={
$0(){return this.a.yv("xlsx",new A.bH3(this.b))},
$S:0}
A.bH3.prototype={
$1(d){return this.azm(d)},
azm(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
t=E.dg5(d,u.a)
B.ct("files")
s=E.czl(d,"xlsx")
B.ct("files")
v=F.VX(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bH7.prototype={
$0(){return this.a.yv("rec",new A.bH2(this.b))},
$S:0}
A.bH2.prototype={
$1(d){return this.azl(d)},
azl(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
x=2
return B.d(E.cnV(d,v.a),$async$$1)
case 2:u=f
B.ct("files")
t=E.czl(new A.l0("Comprovativos",d.b,d.c,d.d,D.TU,D.TV,null),"pdf")
B.ct("files")
x=3
return B.d(F.VX(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.aZ3,A.bIC,A.bIB,A.chb,A.bhL,A.bhJ,A.bhH,A.cgj,A.cfF,A.cfG,A.bH4,A.bH3,A.bH2])
w(A.a18,B.eM)
x(B.F,[A.Lt,A.Do,A.q_,A.l0])
x(B.cD,[A.bID,A.bhM,A.bhF,A.bhK,A.bhE,A.bhI,A.bhG])
x(B.bI,[A.cfE,A.bH0,A.bH1,A.bH5,A.bH6,A.bH7])
w(A.Bw,B.G)
w(A.ayY,B.a0)
w(A.V7,B.M)})()
B.bx(b.typeUniverse,JSON.parse('{"a18":{"eM":[]},"Bw":{"G":[],"e":[],"f":[]},"ayY":{"a0":["Bw"]},"V7":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.v
return{w:x("ch<c,c>"),b:x("q<Do>"),P:x("q<q_>"),s:x("q<c>"),p:x("q<e>"),a:x("q<Lt<@>>"),j:x("t<@>"),c:x("a2<c,@>"),f:x("a2<@,@>"),d:x("bw"),e:x("l0"),N:x("c"),U:x("a5<c>"),q:x("dD"),i:x("X"),z:x("@"),Y:x("a2<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.TV=x([],B.v("q<a31>"))
D.TU=x([],B.v("q<JF>"))
D.bzY={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bxM=new B.ch(D.bzY,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bzF={deposit:0,final_payment:1}
D.byn=new B.ch(D.bzF,["Sinal","Pagamento final"],y.w)
D.bzS={paid:0,pending:1,failed:2,refunded:3}
D.byp=new B.ch(D.bzS,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c0H=new B.J("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bNm=new B.cc(D.c0H,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)})()};
(a=>{a["adIBQTm7/rGqnuqMyvRHXm5sr1k="]=a.current})($__dart_deferred_initializers__);