((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,H,L,F,M,I,E,G,A={
cZm(d,e,f){var x=e.i("@<0>").b4(f),w=new B.aG($.aQ,x.i("aG<+(1,2)>")),v=new A.LG(d.a,e.i("LG<0>")),u=new A.LG(d.b,f.i("LG<0>"))
A.d7s(B.a([v,u],y.a),new A.aZn(new B.ME(w,x.i("ME<+(1,2)>")),v,u,e,f))
return w},
d7s(d,e){var x={},w=x.a=x.b=0,v=new A.bJ5(x,d,e)
for(;w<2;++w)d[w].bei(v)},
aZn:function aZn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1o:function a1o(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
LG:function LG(d,e){var _=this
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
afq(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$afq=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.W().b
n===$&&B.b()
x=6
return B.d(n.T("platform_settings").aN(0,"*").a_("id",1).e_(0),$async$afq)
case 6:t=e
$.ckM=B.e1(J.h(t,"platform_commission_percentage"))
$.czW=N.aXE(J.h(t,"organizer_fee_tiers"),$.ckM,null)
s=J.h(t,"partner_fee_tiers")
r=new A.ci2()
if(y.j.b(s)&&J.eS(s)){q=B.a([],y.s)
for(n=J.bA(s,y.f),m=B.r(n),n=new B.ap(n,n.gv(n),m.i("ap<a5.E>")),m=m.i("a5.E");n.p();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.u(r.$1(B.e1(J.h(p,"pct"))))+"% acima":B.u(r.$1(B.e1(J.h(p,"pct"))))+"% at\xe9 "+B.by(B.e1(J.h(p,"up_to")),!1)
J.cg(q,l)}$.ckN=J.qA(q,", ")}else{k=B.b8(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.ckN=o>0?B.u(r.$1(o))+"%":""}v=1
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
return B.m($async$afq,w)},
czo(d){var x
if(typeof d=="number")x=d
else{x=B.fT(B.u(d))
if(x==null)x=0}return x},
cMj(d){var x
if(d==null)x=null
else{x=B.fN(B.u(d))
x=x==null?null:x.fq()}return x},
ch3(d){var x,w,v
if(d==null)return"Cliente"
x=J.a3(d)
w=x.h(d,"partner_name_1")
v=C.f.L(J.cG(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a4(B.a([v,C.f.L(J.cG(x==null?"":x))],y.s),new A.cha(),y.U).ap(0," & ")
return x.length===0?"Cliente":x},
cyX(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.B(g,y.c)
for(x=J.cs(a0),w=x.gW(a0);w.p();){v=w.gF(w)
f.j(0,B.a1(J.h(v,"id")),v)}u=new A.cgw(a2)
t=new A.cgx()
w=B.a([],y.P)
for(v=J.cs(a1),s=v.gW(a1);s.p();)w.push(new A.cgv(f,s.gF(s),a2,d,t).$0())
r=B.B(g,y.i)
for(g=v.gW(a1);g.p();){f=g.gF(g)
v=J.a3(f)
if(J.o(v.h(f,i),"paid")){q=B.a1(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.fT(B.u(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gW(a0),x=y.Y;f.p();){v=f.gF(f)
s=J.a3(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.cjF(p,J.cG(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.fN(B.u(m))
m=m==null?h:m.fq()}l=x.a(s.h(v,"weddings"))
l=l==null?h:J.h(l,"location")
l=J.cG(l==null?"":l)
k=D.bxW.h(0,s.h(v,i))
if(k==null)k=B.u(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fT(B.u(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.Dy(o,p,n,m,l,k,j,v==null?0:v))}return new A.l0(e,d,g,w,D.TR,D.TS,h)},
ci2:function ci2(){},
Dy:function Dy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
q1:function q1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bif:function bif(){},
big:function big(){},
bi9:function bi9(){},
bid:function bid(){},
bie:function bie(){},
bi8:function bi8(){},
bib:function bib(){},
bic:function bic(){},
bia:function bia(){},
cha:function cha(){},
cgw:function cgw(d){this.a=d},
cgx:function cgx(){},
cgv:function cgv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
BC:function BC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azk:function azk(){this.c=this.a=this.d=null},
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
Vm:function Vm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,N,O
J=c[1]
B=c[0]
C=c[2]
K=c[259]
H=c[260]
L=c[283]
F=c[135]
M=c[304]
I=c[139]
E=c[64]
G=c[140]
A=a.updateHolder(c[125],A)
D=c[445]
N=c[176]
O=c[435]
A.a1o.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.u(u.a)},
gmC(){var x=this.c
x=x==null?null:x.b
return x==null?B.eK.prototype.gmC.call(this):x}}
A.LG.prototype={
gt(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bei(d){this.a.cJ(new A.bJ6(this,d),new A.bJ7(this,d),y.d)}}
A.Dy.prototype={
gDP(){var x=this.r-this.w
return x<0?0:x}}
A.q1.prototype={
gboG(){return this.e==="Pago"},
gpq(d){var x=this.z
return x>0?x:this.f}}
A.l0.prototype={
gawR(){var x=this.d
return new B.a4(x,new A.bif(),B.a6(x).i("a4<1>")).dT(0,0,new A.big())},
gatD(){return C.e.dT(this.c,0,new A.bi9())},
gawS(){var x=this.d
return new B.a4(x,new A.bid(),B.a6(x).i("a4<1>")).dT(0,0,new A.bie())},
gatE(){return C.e.dT(this.c,0,new A.bi8())},
gbrI(){var x=this.d
return new B.a4(x,new A.bib(),B.a6(x).i("a4<1>")).dT(0,0,new A.bic())},
gatR(){return C.e.dT(this.e,0,new A.bia())}}
A.BC.prototype={
R(){return new A.azk()},
lF(d){return this.e.$0()}}
A.azk.prototype={
yw(d,e){return this.b8I(d,e)},
b8I(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$yw=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bHv(r,d))
u=4
q=null
x=7
return B.d(A.cZm(new B.ag(r.a.lF(0),B.dm("files","")),y.e,y.z),$async$yw)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$yw)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.S(y.q).f.ad(D.bO2)
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
return B.m($async$yw,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.T(22)
u=u.c
x=w.d
return B.E(v,B.J(B.a([new A.Vm(O.MG,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bHA(w,t),v),H.B4,new A.Vm(C.jI,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bHB(w,t),v),H.B4,new A.Vm(C.iT,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bHC(w,t),v)],y.p),C.I,C.m,C.q,0,C.w),C.t,v,v,new B.L(C.v,v,v,s,C.ap,v,C.y),v,v,v,v,C.mm,v,v,v)}}
A.Vm.prototype={
u(d){var x,w,v,u=this,t=null,s=B.T(14),r=u.f,q=r?t:u.r,p=B.T(12)
p=B.E(C.T,B.aK(u.c,$.a9,t,t,20),C.t,t,t,new B.L(C.ag,t,t,p,t,t,C.y),t,40,t,t,t,t,t,40)
x=y.p
w=B.ac(B.J(B.a([B.i(u.d,t,t,t,C.c5,t,t,t),B.i(u.e,t,t,t,L.eX,t,t,t)],x),C.I,C.m,C.q,0,C.w),1)
v=$.a9
return B.eX(!1,s,!0,new B.a_(K.ml,B.Z(B.a([p,C.aj,w,r?B.aU(B.xJ(t,v,t,t,t,t,t,2,t,t),20,20):B.aK(M.u7,v,t,t,20)],x),C.x,C.m,C.q,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(q1)","V(V,q1)","H<~>(l0)","V(V,Dy)","V(V,JP)","q1()"])
A.aZn.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dC(0,new B.ag(t.gt(0),s.gt(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.kh(new A.a1o(new B.ag(x,w),t,d,v.d.i("@<0>").b4(v.e).i("a1o<+(1?,2?),+(fL?,fL?)>")))}},
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
A.ci2.prototype={
$1(d){return C.k.ah(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:119}
A.bif.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.big.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bi9.prototype={
$2(d,e){return d+e.gDP()},
$S:z+3}
A.bid.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bie.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.kF(x,w>0?w:x))},
$S:z+1}
A.bi8.prototype={
$2(d,e){var x=e.gDP()
return d+(x+G.kF(x,e.r))},
$S:z+3}
A.bib.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bic.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.kF(x,w>0?w:x)},
$S:z+1}
A.bia.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cha.prototype={
$1(d){return d.length!==0},
$S:9}
A.cgw.prototype={
$1(d){var x=J.a3(d),w=y.Y
if(this.a)x=A.ch3(w.a(x.h(d,"weddings")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cG(x==null?"Parceiro":x)}return x},
$S:308}
A.cgx.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cG(x==null?"":x)},
$S:308}
A.cgv.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a3(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"weddings"),j=y.Y,i=A.ch3(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cG(k)
k=I.cjF(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.byx.h(0,n.h(o,"type"))
if(v==null)v=B.u(n.h(o,"type"))
u=D.byz.h(0,n.h(o,"status"))
if(u==null)u=B.u(n.h(o,"status"))
t=A.czo(n.h(o,"amount"))
s=A.cMj(n.h(o,"paid_at"))
r=A.cMj(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cG(o==null?"":o)
n=q.e.$1(m)
return new A.q1(k,w,j,v,u,t,s,r,o,n,A.czo(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bHv.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bHw.prototype={
$0(){return this.a.d=null},
$S:0}
A.bHA.prototype={
$0(){return this.a.yw("pdf",new A.bHz(this.b))},
$S:0}
A.bHz.prototype={
$1(d){return this.azF(d)},
azF(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cr("files")
B.cr("files")
x=3
return B.d(E.coZ(d,u.a),$async$$1)
case 3:t=f
B.cr("files")
s=E.cAj(d,"pdf")
B.cr("files")
v=F.Wc(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bHB.prototype={
$0(){return this.a.yw("xlsx",new A.bHy(this.b))},
$S:0}
A.bHy.prototype={
$1(d){return this.azE(d)},
azE(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cr("files")
B.cr("files")
t=E.dhd(d,u.a)
B.cr("files")
s=E.cAj(d,"xlsx")
B.cr("files")
v=F.Wc(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bHC.prototype={
$0(){return this.a.yw("rec",new A.bHx(this.b))},
$S:0}
A.bHx.prototype={
$1(d){return this.azD(d)},
azD(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cr("files")
B.cr("files")
x=2
return B.d(E.coO(d,v.a),$async$$1)
case 2:u=f
B.cr("files")
t=E.cAj(new A.l0("Comprovativos",d.b,d.c,d.d,D.TR,D.TS,null),"pdf")
B.cr("files")
x=3
return B.d(F.Wc(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.aZn,A.bJ6,A.bJ5,A.ci2,A.bif,A.bid,A.bib,A.cha,A.cgw,A.cgx,A.bHz,A.bHy,A.bHx])
w(A.a1o,B.eK)
x(B.F,[A.LG,A.Dy,A.q1,A.l0])
x(B.cD,[A.bJ7,A.big,A.bi9,A.bie,A.bi8,A.bic,A.bia])
x(B.bI,[A.cgv,A.bHv,A.bHw,A.bHA,A.bHB,A.bHC])
w(A.BC,B.G)
w(A.azk,B.a0)
w(A.Vm,B.N)})()
B.bx(b.typeUniverse,JSON.parse('{"a1o":{"eK":[]},"BC":{"G":[],"e":[],"f":[]},"azk":{"a0":["BC"]},"Vm":{"N":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.v
return{w:x("ch<c,c>"),b:x("q<Dy>"),P:x("q<q1>"),s:x("q<c>"),p:x("q<e>"),a:x("q<LG<@>>"),j:x("t<@>"),c:x("a2<c,@>"),f:x("a2<@,@>"),d:x("bw"),e:x("l0"),N:x("c"),U:x("a4<c>"),q:x("dB"),i:x("V"),z:x("@"),Y:x("a2<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.TS=x([],B.v("q<a3i>"))
D.TR=x([],B.v("q<JP>"))
D.bA8={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bxW=new B.ch(D.bA8,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bzO={deposit:0,final_payment:1}
D.byx=new B.ch(D.bzO,["Sinal","Pagamento final"],y.w)
D.bA2={paid:0,pending:1,failed:2,refunded:3}
D.byz=new B.ch(D.bA2,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c1l=new B.I("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bO2=new B.c4(D.c1l,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.D,null)})()};
(a=>{a["xa9XJ2yHdXLmIn8VAriz6iLXv+I="]=a.current})($__dart_deferred_initializers__);