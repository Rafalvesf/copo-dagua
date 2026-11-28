((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dqr(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aP($.aT,x.i("aP<+(1,2)>")),v=new A.On(d.a,e.i("On<0>")),u=new A.On(d.b,f.i("On<0>"))
A.dA0(B.a([v,u],y.a),new A.b71(new B.Py(w,x.i("Py<+(1,2)>")),v,u,e,f))
return w},
dA0(d,e){var x={},w=x.a=x.b=0,v=new A.bY4(x,d,e)
for(;w<2;++w)d[w].bkR(v)},
b71:function b71(d,e,f,g,h){var _=this
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
bY5:function bY5(d,e){this.a=d
this.b=e},
bY6:function bY6(d,e){this.a=d
this.b=e},
bY4:function bY4(d,e,f){this.a=d
this.b=e
this.c=f},
akl(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akl=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.P().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").ai(0,"*").U("id",1).dM(0),$async$akl)
case 6:t=e
$.cI4=B.du(J.i(t,"platform_commission_percentage"))
$.cYY=B.b5j(J.i(t,"organizer_fee_tiers"),$.cI4)
s=J.i(t,"partner_fee_tiers")
r=new A.cEk()
if(y.j.b(s)&&J.dJ(s)){q=B.a([],y.s)
for(n=J.bd(s,y.f),m=B.u(n),n=new B.ag(n,n.gA(n),m.i("ag<V.E>")),m=m.i("V.E");n.q();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.p(r.$1(B.du(J.i(p,"pct"))))+"% acima":B.p(r.$1(B.du(J.i(p,"pct"))))+"% at\xe9 "+B.aI(B.du(J.i(p,"up_to")),!1)
J.bp(q,l)}$.cI5=J.kF(q,", ")}else{k=B.aC(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cI5=o>0?B.p(r.$1(o))+"%":""}v=1
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
return B.m($async$akl,w)},
cYp(d){var x
if(typeof d=="number")x=d
else{x=B.eT(B.p(d))
if(x==null)x=0}return x},
db8(d){var x
if(d==null)x=null
else{x=B.d0(B.p(d))
x=x==null?null:x.dF()}return x},
cD3(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cx(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.B(J.cx(x==null?"":x))],y.s),new A.cDa(),y.U).a0(0," & ")
return x.length===0?"Cliente":x},
cXS(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.c8(a0),w=x.gX(a0);w.q();){v=w.gE(w)
f.j(0,B.Y(J.i(v,"id")),v)}u=new A.cCv(a2)
t=new A.cCw()
w=B.a([],y.P)
for(v=J.c8(a1),s=v.gX(a1);s.q();)w.push(new A.cCu(f,s.gE(s),a2,d,t).$0())
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
o=I.cGq(p,J.cx(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d0(B.p(m))
m=m==null?h:m.dF()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cx(l==null?"":l)
k=D.bG2.h(0,s.h(v,i))
if(k==null)k=B.p(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eT(B.p(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FF(o,p,n,m,l,k,j,v==null?0:v))}return new A.lR(e,d,g,w,D.VY,D.VZ,h)},
cEk:function cEk(){},
FF:function FF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
r5:function r5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bsr:function bsr(){},
bss:function bss(){},
bsl:function bsl(){},
bsp:function bsp(){},
bsq:function bsq(){},
bsk:function bsk(){},
bsn:function bsn(){},
bso:function bso(){},
bsm:function bsm(){},
cDa:function cDa(){},
cCv:function cCv(d){this.a=d},
cCw:function cCw(){},
cCu:function cCu(d,e,f,g,h){var _=this
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
aFM:function aFM(){this.c=this.a=this.d=null},
bWh:function bWh(d,e){this.a=d
this.b=e},
bWi:function bWi(d){this.a=d},
bWm:function bWm(d,e){this.a=d
this.b=e},
bWl:function bWl(d){this.a=d},
bWn:function bWn(d,e){this.a=d
this.b=e},
bWk:function bWk(d){this.a=d},
bWo:function bWo(d,e){this.a=d
this.b=e},
bWj:function bWj(d){this.a=d},
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
H=c[288]
F=c[144]
K=c[328]
I=c[151]
E=c[69]
G=c[152]
A=a.updateHolder(c[133],A)
D=c[436]
L=c[426]
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
bkR(d){this.a.cB(new A.bY5(this,d),new A.bY6(this,d),y.d)}}
A.FF.prototype={
gF9(){var x=this.r-this.w
return x<0?0:x}}
A.r5.prototype={
gbvg(){return this.e==="Pago"},
gpN(d){var x=this.z
return x>0?x:this.f}}
A.lR.prototype={
gaAL(){var x=this.d
return new B.a6(x,new A.bsr(),B.a8(x).i("a6<1>")).cU(0,0,new A.bss())},
gaxs(){return C.e.cU(this.c,0,new A.bsl())},
gaAM(){var x=this.d
return new B.a6(x,new A.bsp(),B.a8(x).i("a6<1>")).cU(0,0,new A.bsq())},
gaxt(){return C.e.cU(this.c,0,new A.bsk())},
gbyk(){var x=this.d
return new B.a6(x,new A.bsn(),B.a8(x).i("a6<1>")).cU(0,0,new A.bso())},
gaxI(){return C.e.cU(this.e,0,new A.bsm())}}
A.DC.prototype={
S(){return new A.aFM()},
lY(d){return this.e.$0()}}
A.aFM.prototype={
zm(d,e){return this.bfc(d,e)},
bfc(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zm=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bWh(r,d))
u=4
q=null
x=7
return B.d(A.dqr(new B.X(r.a.lY(0),B.dc("files","")),y.e,y.z),$async$zm)
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
if(n!=null)n.O(y.q).f.a1(D.bZe)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bWi(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zm,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.x(v,B.y(B.a([new A.Z_(L.Ov,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bWm(w,t),v),H.Cj,new A.Z_(C.DZ,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bWn(w,t),v),H.Cj,new A.Z_(C.qc,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bWo(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.I(C.t,v,v,s,C.bq,v,C.x),v,v,v,C.i3,v,v,v)}}
A.Z_.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.x(C.K,B.b8(u.c,$.at,t,t,20),C.r,t,t,new B.I(C.a3,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.y(B.a([B.h(u.d,t,t,t,t,C.bx,t,t),B.h(u.e,t,t,t,t,C.hg,t,t)],x),C.G,C.h,C.l),1)
v=$.at
return B.eW(!1,s,!0,new B.S(C.ni,B.O(B.a([p,C.ae,w,r?B.aJ(B.anC(t,v,t,t,t,t,t,2,t,t),20,20):B.b8(K.vb,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["C(r5)","T(T,r5)","F<~>(lR)","T(T,FF)","T(T,Mf)","r5()"])
A.b71.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dD(0,new B.X(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jF(new A.a5z(new B.X(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a5z<+(1?,2?),+(hc?,hc?)>")))}},
$S:15}
A.bY5.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bj(1)")}}
A.bY6.prototype={
$2(d,e){this.a.c=new B.hc(d,e)
this.b.$1(1)},
$S:25}
A.bY4.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cEk.prototype={
$1(d){return C.k.aI(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:179}
A.bsr.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bss.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bsl.prototype={
$2(d,e){return d+e.gF9()},
$S:z+3}
A.bsp.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsq.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lt(x,w>0?w:x))},
$S:z+1}
A.bsk.prototype={
$2(d,e){var x=e.gF9()
return d+(x+G.lt(x,e.r))},
$S:z+3}
A.bsn.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bso.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lt(x,w>0?w:x)},
$S:z+1}
A.bsm.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cDa.prototype={
$1(d){return d.length!==0},
$S:6}
A.cCv.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cD3(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cx(x==null?"Parceiro":x)}return x},
$S:516}
A.cCw.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cx(x==null?"":x)},
$S:516}
A.cCu.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cD3(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cx(k)
k=l?p:J.i(m,"booking_number")
k=I.cGq(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGz.h(0,n.h(o,"type"))
if(v==null)v=B.p(n.h(o,"type"))
u=D.bGM.h(0,n.h(o,"status"))
if(u==null)u=B.p(n.h(o,"status"))
t=A.cYp(n.h(o,"amount"))
s=A.db8(n.h(o,"paid_at"))
r=A.db8(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cx(o==null?"":o)
n=q.e.$1(m)
return new A.r5(k,w,j,v,u,t,s,r,o,n,A.cYp(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bWh.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bWi.prototype={
$0(){return this.a.d=null},
$S:0}
A.bWm.prototype={
$0(){return this.a.zm("pdf",new A.bWl(this.b))},
$S:0}
A.bWl.prototype={
$1(d){return this.aDV(d)},
aDV(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cNd(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.cZl(d,"pdf")
B.cm("files")
v=F.ZU(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bWn.prototype={
$0(){return this.a.zm("xlsx",new A.bWk(this.b))},
$S:0}
A.bWk.prototype={
$1(d){return this.aDU(d)},
aDU(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dLu(d,u.a)
B.cm("files")
s=E.cZl(d,"xlsx")
B.cm("files")
v=F.ZU(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bWo.prototype={
$0(){return this.a.zm("rec",new A.bWj(this.b))},
$S:0}
A.bWj.prototype={
$1(d){return this.aDT(d)},
aDT(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cN0(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.cZl(new A.lR("Comprovativos",d.b,d.c,d.d,D.VY,D.VZ,null),"pdf")
B.cm("files")
x=3
return B.d(F.ZU(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.b71,A.bY5,A.bY4,A.cEk,A.bsr,A.bsp,A.bsn,A.cDa,A.cCv,A.cCw,A.bWl,A.bWk,A.bWj])
w(A.a5z,B.f6)
x(B.L,[A.On,A.FF,A.r5,A.lR])
x(B.cJ,[A.bY6,A.bss,A.bsl,A.bsq,A.bsk,A.bso,A.bsm])
x(B.bN,[A.cCu,A.bWh,A.bWi,A.bWm,A.bWn,A.bWo])
w(A.DC,B.H)
w(A.aFM,B.a1)
w(A.Z_,B.M)})()
B.bt(b.typeUniverse,JSON.parse('{"a5z":{"f6":[]},"DC":{"H":[],"e":[],"f":[]},"aFM":{"a1":["DC"]},"Z_":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.z
return{w:x("c5<c,c>"),b:x("r<FF>"),P:x("r<r5>"),s:x("r<c>"),p:x("r<e>"),a:x("r<On<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bj"),e:x("lR"),N:x("c"),U:x("a6<c>"),q:x("dp"),i:x("T"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.VZ=x([],B.z("r<a7B>"))
D.VY=x([],B.z("r<Mf>"))
D.bID={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bG2=new B.c5(D.bID,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIg={deposit:0,final_payment:1,guest_share:2}
D.bGz=new B.c5(D.bIg,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIu={paid:0,pending:1,failed:2,refunded:3}
D.bGM=new B.c5(D.bIu,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c7z=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.bZe=new B.bE(D.c7z,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["IrG9V45vAf8uKJ8D+jH+V0nX8ts="]=a.current})($__dart_deferred_initializers__);