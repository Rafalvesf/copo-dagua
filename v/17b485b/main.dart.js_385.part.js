((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dqY(d,e,f){var x=e.i("@<0>").b8(f),w=new B.aN($.aT,x.i("aN<+(1,2)>")),v=new A.Ot(d.a,e.i("Ot<0>")),u=new A.Ot(d.b,f.i("Ot<0>"))
A.dAx(B.a([v,u],y.a),new A.b7V(new B.PF(w,x.i("PF<+(1,2)>")),v,u,e,f))
return w},
dAx(d,e){var x={},w=x.a=x.b=0,v=new A.bZ2(x,d,e)
for(;w<2;++w)d[w].bmq(v)},
b7V:function b7V(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5S:function a5S(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Ot:function Ot(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bZ3:function bZ3(d,e){this.a=d
this.b=e},
bZ4:function bZ4(d,e){this.a=d
this.b=e},
bZ2:function bZ2(d,e,f){this.a=d
this.b=e
this.c=f},
akS(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akS=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.Q().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").aj(0,"*").V("id",1).dQ(0),$async$akS)
case 6:t=e
$.cIQ=B.dt(J.i(t,"platform_commission_percentage"))
$.cZG=B.b66(J.i(t,"organizer_fee_tiers"),$.cIQ)
s=J.i(t,"partner_fee_tiers")
r=new A.cF9()
if(y.j.b(s)&&J.dI(s)){q=B.a([],y.s)
for(n=J.bh(s,y.f),m=B.u(n),n=new B.al(n,n.gA(n),m.i("al<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.dt(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.dt(J.i(p,"pct"))))+"% at\xe9 "+B.aK(B.dt(J.i(p,"up_to")),!1)
J.bt(q,l)}$.cIR=J.kG(q,", ")}else{k=B.aG(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cIR=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akS,w)},
cZ6(d){var x
if(typeof d=="number")x=d
else{x=B.eV(B.q(d))
if(x==null)x=0}return x},
dbM(d){var x
if(d==null)x=null
else{x=B.d4(B.q(d))
x=x==null?null:x.dP()}return x},
cDY(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cy(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.B(J.cy(x==null?"":x))],y.s),new A.cE4(),y.U).a2(0," & ")
return x.length===0?"Cliente":x},
cYz(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.c8(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.Z(J.i(v,"id")),v)}u=new A.cDp(a2)
t=new A.cDq()
w=B.a([],y.P)
for(v=J.c8(a1),s=v.gX(a1);s.t();)w.push(new A.cDo(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.Z(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.eV(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cHc(p,J.cy(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d4(B.q(m))
m=m==null?h:m.dP()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cy(l==null?"":l)
k=D.bGs.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eV(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FR(o,p,n,m,l,k,j,v==null?0:v))}return new A.lR(e,d,g,w,D.Wq,D.Wr,h)},
cF9:function cF9(){},
FR:function FR(d,e,f,g,h,i,j,k){var _=this
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
lR:function lR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bsS:function bsS(){},
bsT:function bsT(){},
bsM:function bsM(){},
bsQ:function bsQ(){},
bsR:function bsR(){},
bsL:function bsL(){},
bsO:function bsO(){},
bsP:function bsP(){},
bsN:function bsN(){},
cE4:function cE4(){},
cDp:function cDp(d){this.a=d},
cDq:function cDq(){},
cDo:function cDo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DN:function DN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGn:function aGn(){this.c=this.a=this.d=null},
bXf:function bXf(d,e){this.a=d
this.b=e},
bXg:function bXg(d){this.a=d},
bXk:function bXk(d,e){this.a=d
this.b=e},
bXj:function bXj(d){this.a=d},
bXl:function bXl(d,e){this.a=d
this.b=e},
bXi:function bXi(d){this.a=d},
bXm:function bXm(d,e){this.a=d
this.b=e},
bXh:function bXh(d){this.a=d},
Ze:function Ze(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[296]
F=c[145]
K=c[337]
I=c[151]
E=c[69]
G=c[152]
A=a.updateHolder(c[134],A)
D=c[444]
L=c[435]
A.a5S.prototype={
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
A.Ot.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bmq(d){this.a.cC(new A.bZ3(this,d),new A.bZ4(this,d),y.d)}}
A.FR.prototype={
gFo(){var x=this.r-this.w
return x<0?0:x}}
A.rb.prototype={
gbwO(){return this.e==="Pago"},
gpS(d){var x=this.z
return x>0?x:this.f}}
A.lR.prototype={
gaBE(){var x=this.d
return new B.a6(x,new A.bsS(),B.a8(x).i("a6<1>")).cW(0,0,new A.bsT())},
gayk(){return C.e.cW(this.c,0,new A.bsM())},
gaBF(){var x=this.d
return new B.a6(x,new A.bsQ(),B.a8(x).i("a6<1>")).cW(0,0,new A.bsR())},
gayl(){return C.e.cW(this.c,0,new A.bsL())},
gbzW(){var x=this.d
return new B.a6(x,new A.bsO(),B.a8(x).i("a6<1>")).cW(0,0,new A.bsP())},
gayA(){return C.e.cW(this.e,0,new A.bsN())}}
A.DN.prototype={
R(){return new A.aGn()},
m3(d){return this.e.$0()}}
A.aGn.prototype={
zB(d,e){return this.bgK(d,e)},
bgK(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zB=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bXf(r,d))
u=4
q=null
x=7
return B.d(A.dqY(new B.a_(r.a.m3(0),B.df("files","")),y.e,y.z),$async$zB)
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
if(n!=null)n.O(y.q).f.a1(D.bYY)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bXg(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zB,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.x(v,B.A(B.a([new A.Ze(L.OU,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bXk(w,t),v),H.Cy,new A.Ze(C.Ec,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bXl(w,t),v),H.Cy,new A.Ze(C.lI,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bXm(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.I(C.t,v,v,s,C.bi,v,C.x),v,v,v,C.i2,v,v,v)}}
A.Ze.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.x(C.K,B.b6(u.c,$.at,t,t,20),C.r,t,t,new B.I(C.a5,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.A(B.a([B.h(u.d,t,t,t,t,C.bC,t,t,t),B.h(u.e,t,t,t,t,C.hk,t,t,t)],x),C.G,C.h,C.l),1)
v=$.at
return B.eL(!1,s,!0,new B.S(C.nt,B.O(B.a([p,C.ad,w,r?B.aH(B.ao9(t,v,t,t,t,t,t,2,t,t),20,20):B.b6(K.vr,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["y(rb)","T(T,rb)","F<~>(lR)","T(T,FR)","T(T,Mm)","rb()"])
A.b7V.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a_(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jN(new A.a5S(new B.a_(x,w),t,d,v.d.i("@<0>").b8(v.e).i("a5S<+(1?,2?),+(hd?,hd?)>")))}},
$S:15}
A.bZ3.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bm(1)")}}
A.bZ4.prototype={
$2(d,e){this.a.c=new B.hd(d,e)
this.b.$1(1)},
$S:23}
A.bZ2.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cF9.prototype={
$1(d){return C.k.aG(d,1)===0?C.k.a9(d,0):C.k.a9(d,1)},
$S:177}
A.bsS.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsT.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bsM.prototype={
$2(d,e){return d+e.gFo()},
$S:z+3}
A.bsQ.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsR.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lt(x,w>0?w:x))},
$S:z+1}
A.bsL.prototype={
$2(d,e){var x=e.gFo()
return d+(x+G.lt(x,e.r))},
$S:z+3}
A.bsO.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsP.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lt(x,w>0?w:x)},
$S:z+1}
A.bsN.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cE4.prototype={
$1(d){return d.length!==0},
$S:6}
A.cDp.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cDY(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cy(x==null?"Parceiro":x)}return x},
$S:528}
A.cDq.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cy(x==null?"":x)},
$S:528}
A.cDo.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cDY(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cy(k)
k=l?p:J.i(m,"booking_number")
k=I.cHc(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bH0.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bHe.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cZ6(n.h(o,"amount"))
s=A.dbM(n.h(o,"paid_at"))
r=A.dbM(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cy(o==null?"":o)
n=q.e.$1(m)
return new A.rb(k,w,j,v,u,t,s,r,o,n,A.cZ6(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bXf.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bXg.prototype={
$0(){return this.a.d=null},
$S:0}
A.bXk.prototype={
$0(){return this.a.zB("pdf",new A.bXj(this.b))},
$S:0}
A.bXj.prototype={
$1(d){return this.aEQ(d)},
aEQ(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cNO(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.d_4(d,"pdf")
B.cm("files")
v=F.a_8(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXl.prototype={
$0(){return this.a.zB("xlsx",new A.bXi(this.b))},
$S:0}
A.bXi.prototype={
$1(d){return this.aEP(d)},
aEP(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dM3(d,u.a)
B.cm("files")
s=E.d_4(d,"xlsx")
B.cm("files")
v=F.a_8(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXm.prototype={
$0(){return this.a.zB("rec",new A.bXh(this.b))},
$S:0}
A.bXh.prototype={
$1(d){return this.aEO(d)},
aEO(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cNB(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.d_4(new A.lR("Comprovativos",d.b,d.c,d.d,D.Wq,D.Wr,null),"pdf")
B.cm("files")
x=3
return B.d(F.a_8(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.b7V,A.bZ3,A.bZ2,A.cF9,A.bsS,A.bsQ,A.bsO,A.cE4,A.cDp,A.cDq,A.bXj,A.bXi,A.bXh])
w(A.a5S,B.fa)
x(B.J,[A.Ot,A.FR,A.rb,A.lR])
x(B.cK,[A.bZ4,A.bsT,A.bsM,A.bsR,A.bsL,A.bsP,A.bsN])
x(B.bP,[A.cDo,A.bXf,A.bXg,A.bXk,A.bXl,A.bXm])
w(A.DN,B.G)
w(A.aGn,B.Y)
w(A.Ze,B.L)})()
B.bn(b.typeUniverse,JSON.parse('{"a5S":{"fa":[]},"DN":{"G":[],"e":[],"f":[]},"aGn":{"Y":["DN"]},"Ze":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c5<c,c>"),b:x("r<FR>"),P:x("r<rb>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Ot<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bm"),e:x("lR"),N:x("c"),U:x("a6<c>"),q:x("dp"),i:x("T"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Wr=x([],B.w("r<a7U>"))
D.Wq=x([],B.w("r<Mm>"))
D.bJ5={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bGs=new B.c5(D.bJ5,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIJ={deposit:0,final_payment:1,guest_share:2}
D.bH0=new B.c5(D.bIJ,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIX={paid:0,pending:1,failed:2,refunded:3}
D.bHe=new B.c5(D.bIX,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cdt=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bYY=new B.bF(D.cdt,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["a7dyDNp4pUvLDM4FAPWyj93gAyw="]=a.current})($__dart_deferred_initializers__);