((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dqI(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aP($.aT,x.i("aP<+(1,2)>")),v=new A.On(d.a,e.i("On<0>")),u=new A.On(d.b,f.i("On<0>"))
A.dAh(B.a([v,u],y.a),new A.b73(new B.Py(w,x.i("Py<+(1,2)>")),v,u,e,f))
return w},
dAh(d,e){var x={},w=x.a=x.b=0,v=new A.bYa(x,d,e)
for(;w<2;++w)d[w].bkR(v)},
b73:function b73(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5z:function a5z(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
On:function On(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bYb:function bYb(d,e){this.a=d
this.b=e},
bYc:function bYc(d,e){this.a=d
this.b=e},
bYa:function bYa(d,e,f){this.a=d
this.b=e
this.c=f},
akm(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akm=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.P().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").ai(0,"*").U("id",1).dM(0),$async$akm)
case 6:t=e
$.cIf=B.du(J.i(t,"platform_commission_percentage"))
$.cZd=B.b5m(J.i(t,"organizer_fee_tiers"),$.cIf)
s=J.i(t,"partner_fee_tiers")
r=new A.cEv()
if(y.j.b(s)&&J.dJ(s)){q=B.a([],y.s)
for(n=J.bd(s,y.f),m=B.u(n),n=new B.ag(n,n.gA(n),m.i("ag<V.E>")),m=m.i("V.E");n.q();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.p(r.$1(B.du(J.i(p,"pct"))))+"% acima":B.p(r.$1(B.du(J.i(p,"pct"))))+"% at\xe9 "+B.aI(B.du(J.i(p,"up_to")),!1)
J.bp(q,l)}$.cIg=J.kF(q,", ")}else{k=B.aC(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cIg=o>0?B.p(r.$1(o))+"%":""}v=1
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
return B.m($async$akm,w)},
cYF(d){var x
if(typeof d=="number")x=d
else{x=B.eT(B.p(d))
if(x==null)x=0}return x},
dbp(d){var x
if(d==null)x=null
else{x=B.d0(B.p(d))
x=x==null?null:x.dF()}return x},
cDe(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cx(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.B(J.cx(x==null?"":x))],y.s),new A.cDl(),y.U).a0(0," & ")
return x.length===0?"Cliente":x},
cY7(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.c8(a0),w=x.gX(a0);w.q();){v=w.gE(w)
f.j(0,B.Y(J.i(v,"id")),v)}u=new A.cCG(a2)
t=new A.cCH()
w=B.a([],y.P)
for(v=J.c8(a1),s=v.gX(a1);s.q();)w.push(new A.cCF(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.q();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.Y(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.eT(B.p(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.q();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cGB(p,J.cx(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d0(B.p(m))
m=m==null?h:m.dF()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cx(l==null?"":l)
k=D.bG3.h(0,s.h(v,i))
if(k==null)k=B.p(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eT(B.p(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FF(o,p,n,m,l,k,j,v==null?0:v))}return new A.lR(e,d,g,w,D.VY,D.VZ,h)},
cEv:function cEv(){},
FF:function FF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
r4:function r4(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bsu:function bsu(){},
bsv:function bsv(){},
bso:function bso(){},
bss:function bss(){},
bst:function bst(){},
bsn:function bsn(){},
bsq:function bsq(){},
bsr:function bsr(){},
bsp:function bsp(){},
cDl:function cDl(){},
cCG:function cCG(d){this.a=d},
cCH:function cCH(){},
cCF:function cCF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DC:function DC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFP:function aFP(){this.c=this.a=this.d=null},
bWn:function bWn(d,e){this.a=d
this.b=e},
bWo:function bWo(d){this.a=d},
bWs:function bWs(d,e){this.a=d
this.b=e},
bWr:function bWr(d){this.a=d},
bWt:function bWt(d,e){this.a=d
this.b=e},
bWq:function bWq(d){this.a=d},
bWu:function bWu(d,e){this.a=d
this.b=e},
bWp:function bWp(d){this.a=d},
Z_:function Z_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[290]
F=c[146]
K=c[330]
I=c[152]
E=c[69]
G=c[153]
A=a.updateHolder(c[134],A)
D=c[439]
L=c[429]
A.a5z.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.p(u.a)},
gmV(){var x=this.c
x=x==null?null:x.b
return x==null?B.f6.prototype.gmV.call(this):x}}
A.On.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bkR(d){this.a.cB(new A.bYb(this,d),new A.bYc(this,d),y.d)}}
A.FF.prototype={
gF9(){var x=this.r-this.w
return x<0?0:x}}
A.r4.prototype={
gbvg(){return this.e==="Pago"},
gpO(d){var x=this.z
return x>0?x:this.f}}
A.lR.prototype={
gaAL(){var x=this.d
return new B.a6(x,new A.bsu(),B.a8(x).i("a6<1>")).cU(0,0,new A.bsv())},
gaxs(){return C.e.cU(this.c,0,new A.bso())},
gaAM(){var x=this.d
return new B.a6(x,new A.bss(),B.a8(x).i("a6<1>")).cU(0,0,new A.bst())},
gaxt(){return C.e.cU(this.c,0,new A.bsn())},
gbyk(){var x=this.d
return new B.a6(x,new A.bsq(),B.a8(x).i("a6<1>")).cU(0,0,new A.bsr())},
gaxI(){return C.e.cU(this.e,0,new A.bsp())}}
A.DC.prototype={
S(){return new A.aFP()},
lY(d){return this.e.$0()}}
A.aFP.prototype={
zm(d,e){return this.bfc(d,e)},
bfc(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zm=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bWn(r,d))
u=4
q=null
x=7
return B.d(A.dqI(new B.X(r.a.lY(0),B.dc("files","")),y.e,y.z),$async$zm)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zm)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a1(D.bZd)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bWo(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zm,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.x(v,B.z(B.a([new A.Z_(L.Ov,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bWs(w,t),v),H.Ck,new A.Z_(C.E_,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bWt(w,t),v),H.Ck,new A.Z_(C.qb,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bWu(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.I(C.t,v,v,s,C.bq,v,C.x),v,v,v,C.i4,v,v,v)}}
A.Z_.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.x(C.K,B.b8(u.c,$.at,t,t,20),C.r,t,t,new B.I(C.a3,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.z(B.a([B.h(u.d,t,t,t,t,C.bx,t,t),B.h(u.e,t,t,t,t,C.hg,t,t)],x),C.G,C.h,C.l),1)
v=$.at
return B.eW(!1,s,!0,new B.S(C.nj,B.N(B.a([p,C.af,w,r?B.aJ(B.anF(t,v,t,t,t,t,t,2,t,t),20,20):B.b8(K.vb,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["C(r4)","T(T,r4)","F<~>(lR)","T(T,FF)","T(T,Mf)","r4()"])
A.b73.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dD(0,new B.X(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jF(new A.a5z(new B.X(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a5z<+(1?,2?),+(hc?,hc?)>")))}},
$S:15}
A.bYb.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bk(1)")}}
A.bYc.prototype={
$2(d,e){this.a.c=new B.hc(d,e)
this.b.$1(1)},
$S:25}
A.bYa.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cEv.prototype={
$1(d){return C.k.aI(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:179}
A.bsu.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsv.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bso.prototype={
$2(d,e){return d+e.gF9()},
$S:z+3}
A.bss.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bst.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lt(x,w>0?w:x))},
$S:z+1}
A.bsn.prototype={
$2(d,e){var x=e.gF9()
return d+(x+G.lt(x,e.r))},
$S:z+3}
A.bsq.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsr.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lt(x,w>0?w:x)},
$S:z+1}
A.bsp.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cDl.prototype={
$1(d){return d.length!==0},
$S:6}
A.cCG.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cDe(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cx(x==null?"Parceiro":x)}return x},
$S:516}
A.cCH.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cx(x==null?"":x)},
$S:516}
A.cCF.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cDe(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cx(k)
k=l?p:J.i(m,"booking_number")
k=I.cGB(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGA.h(0,n.h(o,"type"))
if(v==null)v=B.p(n.h(o,"type"))
u=D.bGN.h(0,n.h(o,"status"))
if(u==null)u=B.p(n.h(o,"status"))
t=A.cYF(n.h(o,"amount"))
s=A.dbp(n.h(o,"paid_at"))
r=A.dbp(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cx(o==null?"":o)
n=q.e.$1(m)
return new A.r4(k,w,j,v,u,t,s,r,o,n,A.cYF(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bWn.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bWo.prototype={
$0(){return this.a.d=null},
$S:0}
A.bWs.prototype={
$0(){return this.a.zm("pdf",new A.bWr(this.b))},
$S:0}
A.bWr.prototype={
$1(d){return this.aDV(d)},
aDV(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cNs(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.cZB(d,"pdf")
B.cm("files")
v=F.ZU(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bWt.prototype={
$0(){return this.a.zm("xlsx",new A.bWq(this.b))},
$S:0}
A.bWq.prototype={
$1(d){return this.aDU(d)},
aDU(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dLM(d,u.a)
B.cm("files")
s=E.cZB(d,"xlsx")
B.cm("files")
v=F.ZU(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bWu.prototype={
$0(){return this.a.zm("rec",new A.bWp(this.b))},
$S:0}
A.bWp.prototype={
$1(d){return this.aDT(d)},
aDT(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cNf(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.cZB(new A.lR("Comprovativos",d.b,d.c,d.d,D.VY,D.VZ,null),"pdf")
B.cm("files")
x=3
return B.d(F.ZU(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bt,[A.b73,A.bYb,A.bYa,A.cEv,A.bsu,A.bss,A.bsq,A.cDl,A.cCG,A.cCH,A.bWr,A.bWq,A.bWp])
w(A.a5z,B.f6)
x(B.L,[A.On,A.FF,A.r4,A.lR])
x(B.cJ,[A.bYc,A.bsv,A.bso,A.bst,A.bsn,A.bsr,A.bsp])
x(B.bK,[A.cCF,A.bWn,A.bWo,A.bWs,A.bWt,A.bWu])
w(A.DC,B.H)
w(A.aFP,B.a1)
w(A.Z_,B.M)})()
B.bq(b.typeUniverse,JSON.parse('{"a5z":{"f6":[]},"DC":{"H":[],"e":[],"f":[]},"aFP":{"a1":["DC"]},"Z_":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.y
return{w:x("c5<c,c>"),b:x("r<FF>"),P:x("r<r4>"),s:x("r<c>"),p:x("r<e>"),a:x("r<On<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bk"),e:x("lR"),N:x("c"),U:x("a6<c>"),q:x("dp"),i:x("T"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.VZ=x([],B.y("r<a7B>"))
D.VY=x([],B.y("r<Mf>"))
D.bIE={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bG3=new B.c5(D.bIE,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIh={deposit:0,final_payment:1,guest_share:2}
D.bGA=new B.c5(D.bIh,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIv={paid:0,pending:1,failed:2,refunded:3}
D.bGN=new B.c5(D.bIv,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c7y=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.bZd=new B.bE(D.c7y,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["nIZYMcJ/gz/G8TVUs4Tp9xdRrMw="]=a.current})($__dart_deferred_initializers__);