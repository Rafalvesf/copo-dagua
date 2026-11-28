((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dib(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aK($.aU,x.i("aK<+(1,2)>")),v=new A.NK(d.a,e.i("NK<0>")),u=new A.NK(d.b,f.i("NK<0>"))
A.drv(B.a([v,u],y.a),new A.b4Q(new B.OQ(w,x.i("OQ<+(1,2)>")),v,u,e,f))
return w},
drv(d,e){var x={},w=x.a=x.b=0,v=new A.bTo(x,d,e)
for(;w<2;++w)d[w].bkA(v)},
b4Q:function b4Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4t:function a4t(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
NK:function NK(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bTp:function bTp(d,e){this.a=d
this.b=e},
bTq:function bTq(d,e){this.a=d
this.b=e},
bTo:function bTo(d,e,f){this.a=d
this.b=e
this.c=f},
aj4(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$aj4=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.T().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").aw(0,"*").W("id",1).dN(0),$async$aj4)
case 6:t=e
$.cBo=B.dt(J.h(t,"platform_commission_percentage"))
$.cRw=B.b31(J.h(t,"organizer_fee_tiers"),$.cBo)
s=J.h(t,"partner_fee_tiers")
r=new A.cxW()
if(y.j.b(s)&&J.dO(s)){q=B.a([],y.s)
for(n=J.bo(s,y.f),m=B.u(n),n=new B.ai(n,n.gA(n),m.i("ai<U.E>")),m=m.i("U.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.q(r.$1(B.dt(J.h(p,"pct"))))+"% acima":B.q(r.$1(B.dt(J.h(p,"pct"))))+"% at\xe9 "+B.aO(B.dt(J.h(p,"up_to")),!1)
J.by(q,l)}$.cBp=J.ka(q,", ")}else{k=B.aN(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cBp=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$aj4,w)},
cQZ(d){var x
if(typeof d=="number")x=d
else{x=B.fj(B.q(d))
if(x==null)x=0}return x},
d3v(d){var x
if(d==null)x=null
else{x=B.eh(B.q(d))
x=x==null?null:x.eH()}return x},
cwQ(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cN(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a3(B.a([v,C.f.D(J.cN(x==null?"":x))],y.s),new A.cwX(),y.U).a3(0," & ")
return x.length===0?"Cliente":x},
cQs(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.A(g,y.c)
for(x=J.c7(a0),w=x.gV(a0);w.t();){v=w.gE(w)
f.j(0,B.a_(J.h(v,"id")),v)}u=new A.cwh(a2)
t=new A.cwi()
w=B.a([],y.P)
for(v=J.c7(a1),s=v.gV(a1);s.t();)w.push(new A.cwg(f,s.gE(s),a2,d,t).$0())
r=B.A(g,y.i)
for(g=v.gV(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.a_(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.fj(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gV(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.czU(p,J.cN(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.eh(B.q(m))
m=m==null?h:m.eH()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cN(l==null?"":l)
k=D.bEx.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fj(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.Fg(o,p,n,m,l,k,j,v==null?0:v))}return new A.lE(e,d,g,w,D.Vy,D.Vz,h)},
cxW:function cxW(){},
Fg:function Fg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
qY:function qY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lE:function lE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bph:function bph(){},
bpi:function bpi(){},
bpb:function bpb(){},
bpf:function bpf(){},
bpg:function bpg(){},
bpa:function bpa(){},
bpd:function bpd(){},
bpe:function bpe(){},
bpc:function bpc(){},
cwX:function cwX(){},
cwh:function cwh(d){this.a=d},
cwi:function cwi(){},
cwg:function cwg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Df:function Df(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEd:function aEd(){this.c=this.a=this.d=null},
bRB:function bRB(d,e){this.a=d
this.b=e},
bRC:function bRC(d){this.a=d},
bRG:function bRG(d,e){this.a=d
this.b=e},
bRF:function bRF(d){this.a=d},
bRH:function bRH(d,e){this.a=d
this.b=e},
bRE:function bRE(d){this.a=d},
bRI:function bRI(d,e){this.a=d
this.b=e},
bRD:function bRD(d){this.a=d},
Y4:function Y4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[247]
F=c[134]
K=c[289]
I=c[140]
E=c[67]
G=c[141]
A=a.updateHolder(c[124],A)
D=c[408]
L=c[401]
A.a4t.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.q(u.a)},
gmS(){var x=this.c
x=x==null?null:x.b
return x==null?B.f2.prototype.gmS.call(this):x}}
A.NK.prototype={
gu(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bkA(d){this.a.cB(new A.bTp(this,d),new A.bTq(this,d),y.d)}}
A.Fg.prototype={
gFa(){var x=this.r-this.w
return x<0?0:x}}
A.qY.prototype={
gbv0(){return this.e==="Pago"},
gpM(d){var x=this.z
return x>0?x:this.f}}
A.lE.prototype={
gaAz(){var x=this.d
return new B.a3(x,new A.bph(),B.a8(x).i("a3<1>")).dc(0,0,new A.bpi())},
gaxg(){return C.e.dc(this.c,0,new A.bpb())},
gaAA(){var x=this.d
return new B.a3(x,new A.bpf(),B.a8(x).i("a3<1>")).dc(0,0,new A.bpg())},
gaxh(){return C.e.dc(this.c,0,new A.bpa())},
gby6(){var x=this.d
return new B.a3(x,new A.bpd(),B.a8(x).i("a3<1>")).dc(0,0,new A.bpe())},
gaxw(){return C.e.dc(this.e,0,new A.bpc())}}
A.Df.prototype={
R(){return new A.aEd()},
m_(d){return this.e.$0()}}
A.aEd.prototype={
zo(d,e){return this.beK(d,e)},
beK(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zo=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bRB(r,d))
u=4
q=null
x=7
return B.d(A.dib(new B.a5(r.a.m_(0),B.dc("files","")),y.e,y.z),$async$zo)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zo)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a4(D.bVz)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bRC(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zo,w)},
v(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.a2(22)
u=u.c
x=w.d
return B.C(v,B.B(B.a([new A.Y4(L.O3,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bRG(w,t),v),H.BV,new A.Y4(C.Dy,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bRH(w,t),v),H.BV,new A.Y4(C.nz,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bRI(w,t),v)],y.p),C.I,C.j,C.o,0,C.v),C.r,v,v,new B.O(C.t,v,v,s,C.b0,v,C.y),v,v,v,C.nd,v,v,v)}}
A.Y4.prototype={
v(d){var x,w,v,u=this,t=null,s=B.a2(14),r=u.f,q=r?t:u.r,p=B.a2(12)
p=B.C(C.K,B.b2(u.c,$.ap,t,t,20),C.r,t,t,new B.O(C.aa,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a6(B.B(B.a([B.i(u.d,t,t,t,t,C.bS,t,t,t),B.i(u.e,t,t,t,t,C.f6,t,t,t)],x),C.I,C.j,C.o,0,C.v),1)
v=$.ap
return B.eR(!1,s,!0,new B.R(C.lj,B.Q(B.a([p,C.ai,w,r?B.aP(B.a_U(t,v,t,t,t,t,t,2,t,t),20,20):B.b2(K.uX,v,t,t,20)],x),C.x,C.j,C.o,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(qY)","P(P,qY)","F<~>(lE)","P(P,Fg)","P(P,LH)","qY()"])
A.b4Q.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dH(0,new B.a5(t.gu(0),s.gu(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.kg(new A.a4t(new B.a5(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a4t<+(1?,2?),+(h2?,h2?)>")))}},
$S:19}
A.bTp.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bA(1)")}}
A.bTq.prototype={
$2(d,e){this.a.c=new B.h2(d,e)
this.b.$1(1)},
$S:22}
A.bTo.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:19}
A.cxW.prototype={
$1(d){return C.k.av(d,1)===0?C.k.a7(d,0):C.k.a7(d,1)},
$S:174}
A.bph.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bpi.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bpb.prototype={
$2(d,e){return d+e.gFa()},
$S:z+3}
A.bpf.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bpg.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lj(x,w>0?w:x))},
$S:z+1}
A.bpa.prototype={
$2(d,e){var x=e.gFa()
return d+(x+G.lj(x,e.r))},
$S:z+3}
A.bpd.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bpe.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lj(x,w>0?w:x)},
$S:z+1}
A.bpc.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cwX.prototype={
$1(d){return d.length!==0},
$S:8}
A.cwh.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cwQ(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cN(x==null?"Parceiro":x)}return x},
$S:501}
A.cwi.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cN(x==null?"":x)},
$S:501}
A.cwg.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cwQ(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cN(k)
k=I.czU(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bF4.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bFi.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cQZ(n.h(o,"amount"))
s=A.d3v(n.h(o,"paid_at"))
r=A.d3v(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cN(o==null?"":o)
n=q.e.$1(m)
return new A.qY(k,w,j,v,u,t,s,r,o,n,A.cQZ(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bRB.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bRC.prototype={
$0(){return this.a.d=null},
$S:0}
A.bRG.prototype={
$0(){return this.a.zo("pdf",new A.bRF(this.b))},
$S:0}
A.bRF.prototype={
$1(d){return this.aDI(d)},
aDI(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
x=3
return B.d(E.cFX(d,u.a),$async$$1)
case 3:t=f
B.ct("files")
s=E.cRV(d,"pdf")
B.ct("files")
v=F.YY(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bRH.prototype={
$0(){return this.a.zo("xlsx",new A.bRE(this.b))},
$S:0}
A.bRE.prototype={
$1(d){return this.aDH(d)},
aDH(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
t=E.dCB(d,u.a)
B.ct("files")
s=E.cRV(d,"xlsx")
B.ct("files")
v=F.YY(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bRI.prototype={
$0(){return this.a.zo("rec",new A.bRD(this.b))},
$S:0}
A.bRD.prototype={
$1(d){return this.aDG(d)},
aDG(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
x=2
return B.d(E.cFK(d,v.a),$async$$1)
case 2:u=f
B.ct("files")
t=E.cRV(new A.lE("Comprovativos",d.b,d.c,d.d,D.Vy,D.Vz,null),"pdf")
B.ct("files")
x=3
return B.d(F.YY(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.b4Q,A.bTp,A.bTo,A.cxW,A.bph,A.bpf,A.bpd,A.cwX,A.cwh,A.cwi,A.bRF,A.bRE,A.bRD])
w(A.a4t,B.f2)
x(B.L,[A.NK,A.Fg,A.qY,A.lE])
x(B.cS,[A.bTq,A.bpi,A.bpb,A.bpg,A.bpa,A.bpe,A.bpc])
x(B.bR,[A.cwg,A.bRB,A.bRC,A.bRG,A.bRH,A.bRI])
w(A.Df,B.I)
w(A.aEd,B.a1)
w(A.Y4,B.M)})()
B.bx(b.typeUniverse,JSON.parse('{"a4t":{"f2":[]},"Df":{"I":[],"e":[],"f":[]},"aEd":{"a1":["Df"]},"Y4":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.x
return{w:x("c0<c,c>"),b:x("t<Fg>"),P:x("t<qY>"),s:x("t<c>"),p:x("t<e>"),a:x("t<NK<@>>"),j:x("r<@>"),c:x("a4<c,@>"),f:x("a4<@,@>"),d:x("bA"),e:x("lE"),N:x("c"),U:x("a3<c>"),q:x("dA"),i:x("P"),z:x("@"),Y:x("a4<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Vz=x([],B.x("t<a6t>"))
D.Vy=x([],B.x("t<LH>"))
D.bH0={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bEx=new B.c0(D.bH0,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bGE={deposit:0,final_payment:1,guest_share:2}
D.bF4=new B.c0(D.bGE,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bGS={paid:0,pending:1,failed:2,refunded:3}
D.bFi=new B.c0(D.bGS,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c9z=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bVz=new B.bJ(D.c9z,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)})()};
(a=>{a["hEKfPLMCZEnJLshB46Uip3yzbMM="]=a.current})($__dart_deferred_initializers__);