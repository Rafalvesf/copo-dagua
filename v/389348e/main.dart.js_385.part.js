((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
drg(d,e,f){var x=e.i("@<0>").b8(f),w=new B.aN($.aT,x.i("aN<+(1,2)>")),v=new A.Ov(d.a,e.i("Ov<0>")),u=new A.Ov(d.b,f.i("Ov<0>"))
A.dAQ(B.a([v,u],y.a),new A.b7U(new B.PH(w,x.i("PH<+(1,2)>")),v,u,e,f))
return w},
dAQ(d,e){var x={},w=x.a=x.b=0,v=new A.bZj(x,d,e)
for(;w<2;++w)d[w].bmv(v)},
b7U:function b7U(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5T:function a5T(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Ov:function Ov(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bZk:function bZk(d,e){this.a=d
this.b=e},
bZl:function bZl(d,e){this.a=d
this.b=e},
bZj:function bZj(d,e,f){this.a=d
this.b=e
this.c=f},
akT(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akT=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.Q().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").aj(0,"*").V("id",1).dQ(0),$async$akT)
case 6:t=e
$.cJ4=B.du(J.i(t,"platform_commission_percentage"))
$.cZV=B.b65(J.i(t,"organizer_fee_tiers"),$.cJ4)
s=J.i(t,"partner_fee_tiers")
r=new A.cFo()
if(y.j.b(s)&&J.dK(s)){q=B.a([],y.s)
for(n=J.bh(s,y.f),m=B.u(n),n=new B.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.du(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.du(J.i(p,"pct"))))+"% at\xe9 "+B.aK(B.du(J.i(p,"up_to")),!1)
J.bt(q,l)}$.cJ5=J.kH(q,", ")}else{k=B.aF(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cJ5=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akT,w)},
cZm(d){var x
if(typeof d=="number")x=d
else{x=B.eW(B.q(d))
if(x==null)x=0}return x},
dc2(d){var x
if(d==null)x=null
else{x=B.d4(B.q(d))
x=x==null?null:x.dM()}return x},
cEc(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cx(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a4(B.a([v,C.f.B(J.cx(x==null?"":x))],y.s),new A.cEj(),y.U).a0(0," & ")
return x.length===0?"Cliente":x},
cYP(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.cc(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.Z(J.i(v,"id")),v)}u=new A.cDE(a2)
t=new A.cDF()
w=B.a([],y.P)
for(v=J.cc(a1),s=v.gX(a1);s.t();)w.push(new A.cDD(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.Z(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.eW(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cHr(p,J.cx(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d4(B.q(m))
m=m==null?h:m.dM()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cx(l==null?"":l)
k=D.bGm.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eW(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FR(o,p,n,m,l,k,j,v==null?0:v))}return new A.lR(e,d,g,w,D.Wj,D.Wk,h)},
cFo:function cFo(){},
FR:function FR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
rd:function rd(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lR:function lR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bt9:function bt9(){},
bta:function bta(){},
bt3:function bt3(){},
bt7:function bt7(){},
bt8:function bt8(){},
bt2:function bt2(){},
bt5:function bt5(){},
bt6:function bt6(){},
bt4:function bt4(){},
cEj:function cEj(){},
cDE:function cDE(d){this.a=d},
cDF:function cDF(){},
cDD:function cDD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DL:function DL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGp:function aGp(){this.c=this.a=this.d=null},
bXw:function bXw(d,e){this.a=d
this.b=e},
bXx:function bXx(d){this.a=d},
bXB:function bXB(d,e){this.a=d
this.b=e},
bXA:function bXA(d){this.a=d},
bXC:function bXC(d,e){this.a=d
this.b=e},
bXz:function bXz(d){this.a=d},
bXD:function bXD(d,e){this.a=d
this.b=e},
bXy:function bXy(d){this.a=d},
Zc:function Zc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[294]
F=c[144]
K=c[334]
I=c[150]
E=c[69]
G=c[151]
A=a.updateHolder(c[133],A)
D=c[443]
L=c[433]
A.a5T.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.q(u.a)},
gmY(){var x=this.c
x=x==null?null:x.b
return x==null?B.fa.prototype.gmY.call(this):x}}
A.Ov.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bmv(d){this.a.cC(new A.bZk(this,d),new A.bZl(this,d),y.d)}}
A.FR.prototype={
gFp(){var x=this.r-this.w
return x<0?0:x}}
A.rd.prototype={
gbwT(){return this.e==="Pago"},
gpS(d){var x=this.z
return x>0?x:this.f}}
A.lR.prototype={
gaBF(){var x=this.d
return new B.a4(x,new A.bt9(),B.a8(x).i("a4<1>")).d_(0,0,new A.bta())},
gayl(){return C.e.d_(this.c,0,new A.bt3())},
gaBG(){var x=this.d
return new B.a4(x,new A.bt7(),B.a8(x).i("a4<1>")).d_(0,0,new A.bt8())},
gaym(){return C.e.d_(this.c,0,new A.bt2())},
gbA0(){var x=this.d
return new B.a4(x,new A.bt5(),B.a8(x).i("a4<1>")).d_(0,0,new A.bt6())},
gayB(){return C.e.d_(this.e,0,new A.bt4())}}
A.DL.prototype={
R(){return new A.aGp()},
m3(d){return this.e.$0()}}
A.aGp.prototype={
zB(d,e){return this.bgP(d,e)},
bgP(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zB=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bXw(r,d))
u=4
q=null
x=7
return B.d(A.drg(new B.a0(r.a.m3(0),B.dg("files","")),y.e,y.z),$async$zB)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zB)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a2(D.bYJ)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bXx(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zB,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.y(v,B.A(B.a([new A.Zc(L.OP,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bXB(w,t),v),H.Cv,new A.Zc(C.Ea,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bXC(w,t),v),H.Cv,new A.Zc(C.nV,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bXD(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.K(C.t,v,v,s,C.bn,v,C.x),v,v,v,C.i2,v,v,v)}}
A.Zc.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.y(C.K,B.b5(u.c,$.at,t,t,20),C.r,t,t,new B.K(C.a5,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a5(B.A(B.a([B.h(u.d,t,t,t,t,C.bB,t,t,t),B.h(u.e,t,t,t,t,C.hi,t,t,t)],x),C.G,C.h,C.l),1)
v=$.at
return B.eP(!1,s,!0,new B.S(C.nt,B.O(B.a([p,C.ad,w,r?B.aH(B.aob(t,v,t,t,t,t,t,2,t,t),20,20):B.b5(K.vq,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["B(rd)","T(T,rd)","F<~>(lR)","T(T,FR)","T(T,Mo)","rd()"])
A.b7U.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a0(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jN(new A.a5T(new B.a0(x,w),t,d,v.d.i("@<0>").b8(v.e).i("a5T<+(1?,2?),+(hd?,hd?)>")))}},
$S:15}
A.bZk.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bn(1)")}}
A.bZl.prototype={
$2(d,e){this.a.c=new B.hd(d,e)
this.b.$1(1)},
$S:23}
A.bZj.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cFo.prototype={
$1(d){return C.k.aF(d,1)===0?C.k.a9(d,0):C.k.a9(d,1)},
$S:178}
A.bt9.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bta.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bt3.prototype={
$2(d,e){return d+e.gFp()},
$S:z+3}
A.bt7.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt8.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lt(x,w>0?w:x))},
$S:z+1}
A.bt2.prototype={
$2(d,e){var x=e.gFp()
return d+(x+G.lt(x,e.r))},
$S:z+3}
A.bt5.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt6.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lt(x,w>0?w:x)},
$S:z+1}
A.bt4.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cEj.prototype={
$1(d){return d.length!==0},
$S:6}
A.cDE.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cEc(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cx(x==null?"Parceiro":x)}return x},
$S:448}
A.cDF.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cx(x==null?"":x)},
$S:448}
A.cDD.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cEc(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cx(k)
k=l?p:J.i(m,"booking_number")
k=I.cHr(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGV.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bH8.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cZm(n.h(o,"amount"))
s=A.dc2(n.h(o,"paid_at"))
r=A.dc2(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cx(o==null?"":o)
n=q.e.$1(m)
return new A.rd(k,w,j,v,u,t,s,r,o,n,A.cZm(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bXw.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bXx.prototype={
$0(){return this.a.d=null},
$S:0}
A.bXB.prototype={
$0(){return this.a.zB("pdf",new A.bXA(this.b))},
$S:0}
A.bXA.prototype={
$1(d){return this.aES(d)},
aES(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cO4(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.d_j(d,"pdf")
B.cm("files")
v=F.a_6(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXC.prototype={
$0(){return this.a.zB("xlsx",new A.bXz(this.b))},
$S:0}
A.bXz.prototype={
$1(d){return this.aER(d)},
aER(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dMl(d,u.a)
B.cm("files")
s=E.d_j(d,"xlsx")
B.cm("files")
v=F.a_6(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXD.prototype={
$0(){return this.a.zB("rec",new A.bXy(this.b))},
$S:0}
A.bXy.prototype={
$1(d){return this.aEQ(d)},
aEQ(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cNS(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.d_j(new A.lR("Comprovativos",d.b,d.c,d.d,D.Wj,D.Wk,null),"pdf")
B.cm("files")
x=3
return B.d(F.a_6(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.b7U,A.bZk,A.bZj,A.cFo,A.bt9,A.bt7,A.bt5,A.cEj,A.cDE,A.cDF,A.bXA,A.bXz,A.bXy])
w(A.a5T,B.fa)
x(B.J,[A.Ov,A.FR,A.rd,A.lR])
x(B.cK,[A.bZl,A.bta,A.bt3,A.bt8,A.bt2,A.bt6,A.bt4])
x(B.bP,[A.cDD,A.bXw,A.bXx,A.bXB,A.bXC,A.bXD])
w(A.DL,B.G)
w(A.aGp,B.Y)
w(A.Zc,B.M)})()
B.br(b.typeUniverse,JSON.parse('{"a5T":{"fa":[]},"DL":{"G":[],"e":[],"f":[]},"aGp":{"Y":["DL"]},"Zc":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c3<c,c>"),b:x("r<FR>"),P:x("r<rd>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Ov<@>>"),j:x("t<@>"),c:x("a6<c,@>"),f:x("a6<@,@>"),d:x("bn"),e:x("lR"),N:x("c"),U:x("a4<c>"),q:x("dr"),i:x("T"),z:x("@"),Y:x("a6<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Wk=x([],B.w("r<a7V>"))
D.Wj=x([],B.w("r<Mo>"))
D.bJ_={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bGm=new B.c3(D.bJ_,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bID={deposit:0,final_payment:1,guest_share:2}
D.bGV=new B.c3(D.bID,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIR={paid:0,pending:1,failed:2,refunded:3}
D.bH8=new B.c3(D.bIR,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cd7=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bYJ=new B.bF(D.cd7,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["vGI4CGcn+qX9WYkl7a/ib0jT6EE="]=a.current})($__dart_deferred_initializers__);