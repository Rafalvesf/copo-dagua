((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dsk(d,e,f){var x=e.i("@<0>").b8(f),w=new B.aO($.aU,x.i("aO<+(1,2)>")),v=new A.OF(d.a,e.i("OF<0>")),u=new A.OF(d.b,f.i("OF<0>"))
A.dBT(B.a([v,u],y.a),new A.b8v(new B.PR(w,x.i("PR<+(1,2)>")),v,u,e,f))
return w},
dBT(d,e){var x={},w=x.a=x.b=0,v=new A.c_1(x,d,e)
for(;w<2;++w)d[w].boa(v)},
b8v:function b8v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a68:function a68(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
OF:function OF(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
c_2:function c_2(d,e){this.a=d
this.b=e},
c_3:function c_3(d,e){this.a=d
this.b=e},
c_1:function c_1(d,e,f){this.a=d
this.b=e
this.c=f},
alo(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$alo=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.Q().b
n===$&&B.b()
x=6
return B.d(n.R("platform_settings").ak(0,"*").V("id",1).dS(0),$async$alo)
case 6:t=e
$.cKd=B.dt(J.i(t,"platform_commission_percentage"))
$.d_W=B.b6H(J.i(t,"organizer_fee_tiers"),$.cKd)
s=J.i(t,"partner_fee_tiers")
r=new A.cGy()
if(y.j.b(s)&&J.dJ(s)){q=B.a([],y.s)
for(n=J.bi(s,y.f),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.dt(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.dt(J.i(p,"pct"))))+"% at\xe9 "+B.aM(B.dt(J.i(p,"up_to")),!1)
J.bv(q,l)}$.cKe=J.kJ(q,", ")}else{k=B.aI(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cKe=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$alo,w)},
d_n(d){var x
if(typeof d=="number")x=d
else{x=B.eY(B.q(d))
if(x==null)x=0}return x},
dd8(d){var x
if(d==null)x=null
else{x=B.d5(B.q(d))
x=x==null?null:x.dQ()}return x},
cFn(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.C(J.cA(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.C(J.cA(x==null?"":x))],y.s),new A.cFu(),y.U).a1(0," & ")
return x.length===0?"Cliente":x},
cZQ(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.cb(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.Z(J.i(v,"id")),v)}u=new A.cEP(a2)
t=new A.cEQ()
w=B.a([],y.P)
for(v=J.cb(a1),s=v.gX(a1);s.t();)w.push(new A.cEO(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.Z(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.eY(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cIB(p,J.cA(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d5(B.q(m))
m=m==null?h:m.dQ()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cA(l==null?"":l)
k=D.bHy.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eY(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FX(o,p,n,m,l,k,j,v==null?0:v))}return new A.lQ(e,d,g,w,D.WW,D.WX,h)},
cGy:function cGy(){},
FX:function FX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
rn:function rn(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lQ:function lQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
btt:function btt(){},
btu:function btu(){},
btn:function btn(){},
btr:function btr(){},
bts:function bts(){},
btm:function btm(){},
btp:function btp(){},
btq:function btq(){},
bto:function bto(){},
cFu:function cFu(){},
cEP:function cEP(d){this.a=d},
cEQ:function cEQ(){},
cEO:function cEO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DS:function DS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGZ:function aGZ(){this.c=this.a=this.d=null},
bYe:function bYe(d,e){this.a=d
this.b=e},
bYf:function bYf(d){this.a=d},
bYj:function bYj(d,e){this.a=d
this.b=e},
bYi:function bYi(d){this.a=d},
bYk:function bYk(d,e){this.a=d
this.b=e},
bYh:function bYh(d){this.a=d},
bYl:function bYl(d,e){this.a=d
this.b=e},
bYg:function bYg(d){this.a=d},
Zs:function Zs(d,e,f,g,h,i){var _=this
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
F=c[145]
K=c[335]
I=c[151]
E=c[69]
G=c[152]
A=a.updateHolder(c[134],A)
D=c[441]
L=c[432]
A.a68.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.q(u.a)},
gn1(){var x=this.c
x=x==null?null:x.b
return x==null?B.fc.prototype.gn1.call(this):x}}
A.OF.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
boa(d){this.a.cH(new A.c_2(this,d),new A.c_3(this,d),y.d)}}
A.FX.prototype={
gFK(){var x=this.r-this.w
return x<0?0:x}}
A.rn.prototype={
gbyI(){return this.e==="Pago"},
gq_(d){var x=this.z
return x>0?x:this.f}}
A.lQ.prototype={
gaCD(){var x=this.d
return new B.a6(x,new A.btt(),B.a8(x).i("a6<1>")).cZ(0,0,new A.btu())},
gazi(){return C.e.cZ(this.c,0,new A.btn())},
gaCE(){var x=this.d
return new B.a6(x,new A.btr(),B.a8(x).i("a6<1>")).cZ(0,0,new A.bts())},
gazj(){return C.e.cZ(this.c,0,new A.btm())},
gbBQ(){var x=this.d
return new B.a6(x,new A.btp(),B.a8(x).i("a6<1>")).cZ(0,0,new A.btq())},
gazy(){return C.e.cZ(this.e,0,new A.bto())}}
A.DS.prototype={
P(){return new A.aGZ()},
m9(d){return this.e.$0()}}
A.aGZ.prototype={
zO(d,e){return this.bih(d,e)},
bih(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zO=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bYe(r,d))
u=4
q=null
x=7
return B.d(A.dsk(new B.a0(r.a.m9(0),B.df("files","")),y.e,y.z),$async$zO)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zO)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a2(D.c_a)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bYf(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zO,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.z(v,B.x(B.a([new A.Zs(L.Pn,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bYj(w,t),v),H.CR,new A.Zs(C.Ex,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bYk(w,t),v),H.CR,new A.Zs(C.lX,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bYl(w,t),v)],y.p),C.H,C.h,C.l,0,C.u),C.r,v,v,new B.I(C.t,v,v,s,C.bj,v,C.y),v,v,v,C.i9,v,v,v)}}
A.Zs.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.z(C.L,B.b6(u.c,$.au,t,t,20),C.r,t,t,new B.I(C.a7,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.x(B.a([B.h(u.d,t,t,t,t,C.bF,t,t,t),B.h(u.e,t,t,t,t,C.ho,t,t,t)],x),C.H,C.h,C.l,0,C.u),1)
v=$.au
return B.eC(!1,s,!0,new B.R(C.nI,B.O(B.a([p,C.af,w,r?B.aH(B.aoF(t,v,t,t,t,t,t,2,t,t),20,20):B.b6(K.vK,v,t,t,20)],x),C.v,C.h,C.l,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["y(rn)","S(S,rn)","F<~>(lQ)","S(S,FX)","S(S,MA)","rn()"])
A.b8v.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dK(0,new B.a0(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jU(new A.a68(new B.a0(x,w),t,d,v.d.i("@<0>").b8(v.e).i("a68<+(1?,2?),+(hg?,hg?)>")))}},
$S:15}
A.c_2.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bo(1)")}}
A.c_3.prototype={
$2(d,e){this.a.c=new B.hg(d,e)
this.b.$1(1)},
$S:23}
A.c_1.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cGy.prototype={
$1(d){return C.k.ar(d,1)===0?C.k.a9(d,0):C.k.a9(d,1)},
$S:173}
A.btt.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btu.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.btn.prototype={
$2(d,e){return d+e.gFK()},
$S:z+3}
A.btr.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bts.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.ls(x,w>0?w:x))},
$S:z+1}
A.btm.prototype={
$2(d,e){var x=e.gFK()
return d+(x+G.ls(x,e.r))},
$S:z+3}
A.btp.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btq.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.ls(x,w>0?w:x)},
$S:z+1}
A.bto.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cFu.prototype={
$1(d){return d.length!==0},
$S:7}
A.cEP.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cFn(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cA(x==null?"Parceiro":x)}return x},
$S:480}
A.cEQ.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cA(x==null?"":x)},
$S:480}
A.cEO.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cFn(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cA(k)
k=l?p:J.i(m,"booking_number")
k=I.cIB(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bI6.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bIk.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.d_n(n.h(o,"amount"))
s=A.dd8(n.h(o,"paid_at"))
r=A.dd8(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cA(o==null?"":o)
n=q.e.$1(m)
return new A.rn(k,w,j,v,u,t,s,r,o,n,A.d_n(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bYe.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bYf.prototype={
$0(){return this.a.d=null},
$S:0}
A.bYj.prototype={
$0(){return this.a.zO("pdf",new A.bYi(this.b))},
$S:0}
A.bYi.prototype={
$1(d){return this.aFP(d)},
aFP(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cP6(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.d0j(d,"pdf")
B.cm("files")
v=F.a_o(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bYk.prototype={
$0(){return this.a.zO("xlsx",new A.bYh(this.b))},
$S:0}
A.bYh.prototype={
$1(d){return this.aFO(d)},
aFO(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dNn(d,u.a)
B.cm("files")
s=E.d0j(d,"xlsx")
B.cm("files")
v=F.a_o(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bYl.prototype={
$0(){return this.a.zO("rec",new A.bYg(this.b))},
$S:0}
A.bYg.prototype={
$1(d){return this.aFN(d)},
aFN(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cOU(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.d0j(new A.lQ("Comprovativos",d.b,d.c,d.d,D.WW,D.WX,null),"pdf")
B.cm("files")
x=3
return B.d(F.a_o(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.b8v,A.c_2,A.c_1,A.cGy,A.btt,A.btr,A.btp,A.cFu,A.cEP,A.cEQ,A.bYi,A.bYh,A.bYg])
w(A.a68,B.fc)
x(B.L,[A.OF,A.FX,A.rn,A.lQ])
x(B.cL,[A.c_3,A.btu,A.btn,A.bts,A.btm,A.btq,A.bto])
x(B.bQ,[A.cEO,A.bYe,A.bYf,A.bYj,A.bYk,A.bYl])
w(A.DS,B.G)
w(A.aGZ,B.Y)
w(A.Zs,B.J)})()
B.bs(b.typeUniverse,JSON.parse('{"a68":{"fc":[]},"DS":{"G":[],"e":[],"f":[]},"aGZ":{"Y":["DS"]},"Zs":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c5<c,c>"),b:x("r<FX>"),P:x("r<rn>"),s:x("r<c>"),p:x("r<e>"),a:x("r<OF<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bo"),e:x("lQ"),N:x("c"),U:x("a6<c>"),q:x("dp"),i:x("S"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.WX=x([],B.w("r<a89>"))
D.WW=x([],B.w("r<MA>"))
D.bKb={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bHy=new B.c5(D.bKb,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bJP={deposit:0,final_payment:1,guest_share:2}
D.bI6=new B.c5(D.bJP,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bK2={paid:0,pending:1,failed:2,refunded:3}
D.bIk=new B.c5(D.bK2,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.ceG=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.c_a=new B.bH(D.ceG,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.z,null)})()};
(a=>{a["uCNXXxnrHaTRqBf3n56pBUZEeBs="]=a.current})($__dart_deferred_initializers__);