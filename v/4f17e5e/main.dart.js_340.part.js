((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dif(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aK($.aU,x.i("aK<+(1,2)>")),v=new A.NL(d.a,e.i("NL<0>")),u=new A.NL(d.b,f.i("NL<0>"))
A.drA(B.a([v,u],y.a),new A.b4R(new B.OR(w,x.i("OR<+(1,2)>")),v,u,e,f))
return w},
drA(d,e){var x={},w=x.a=x.b=0,v=new A.bTr(x,d,e)
for(;w<2;++w)d[w].bky(v)},
b4R:function b4R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4u:function a4u(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
NL:function NL(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bTs:function bTs(d,e){this.a=d
this.b=e},
bTt:function bTt(d,e){this.a=d
this.b=e},
bTr:function bTr(d,e,f){this.a=d
this.b=e
this.c=f},
aj5(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$aj5=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.T().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").aw(0,"*").W("id",1).dN(0),$async$aj5)
case 6:t=e
$.cBr=B.dp(J.h(t,"platform_commission_percentage"))
$.cRz=B.b32(J.h(t,"organizer_fee_tiers"),$.cBr)
s=J.h(t,"partner_fee_tiers")
r=new A.cxZ()
if(y.j.b(s)&&J.dP(s)){q=B.a([],y.s)
for(n=J.bo(s,y.f),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.q(r.$1(B.dp(J.h(p,"pct"))))+"% acima":B.q(r.$1(B.dp(J.h(p,"pct"))))+"% at\xe9 "+B.aP(B.dp(J.h(p,"up_to")),!1)
J.by(q,l)}$.cBs=J.ka(q,", ")}else{k=B.aL(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cBs=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$aj5,w)},
cR1(d){var x
if(typeof d=="number")x=d
else{x=B.fi(B.q(d))
if(x==null)x=0}return x},
d3z(d){var x
if(d==null)x=null
else{x=B.ei(B.q(d))
x=x==null?null:x.eH()}return x},
cwT(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cN(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a3(B.a([v,C.f.D(J.cN(x==null?"":x))],y.s),new A.cx_(),y.U).a3(0," & ")
return x.length===0?"Cliente":x},
cQv(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.A(g,y.c)
for(x=J.c9(a0),w=x.gV(a0);w.t();){v=w.gE(w)
f.j(0,B.a_(J.h(v,"id")),v)}u=new A.cwk(a2)
t=new A.cwl()
w=B.a([],y.P)
for(v=J.c9(a1),s=v.gV(a1);s.t();)w.push(new A.cwj(f,s.gE(s),a2,d,t).$0())
r=B.A(g,y.i)
for(g=v.gV(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.a_(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.fi(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gV(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.czX(p,J.cN(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.ei(B.q(m))
m=m==null?h:m.eH()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cN(l==null?"":l)
k=D.bEB.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fi(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.Fi(o,p,n,m,l,k,j,v==null?0:v))}return new A.lF(e,d,g,w,D.Vy,D.Vz,h)},
cxZ:function cxZ(){},
Fi:function Fi(d,e,f,g,h,i,j,k){var _=this
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
lF:function lF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bpk:function bpk(){},
bpl:function bpl(){},
bpe:function bpe(){},
bpi:function bpi(){},
bpj:function bpj(){},
bpd:function bpd(){},
bpg:function bpg(){},
bph:function bph(){},
bpf:function bpf(){},
cx_:function cx_(){},
cwk:function cwk(d){this.a=d},
cwl:function cwl(){},
cwj:function cwj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dh:function Dh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEd:function aEd(){this.c=this.a=this.d=null},
bRE:function bRE(d,e){this.a=d
this.b=e},
bRF:function bRF(d){this.a=d},
bRJ:function bRJ(d,e){this.a=d
this.b=e},
bRI:function bRI(d){this.a=d},
bRK:function bRK(d,e){this.a=d
this.b=e},
bRH:function bRH(d){this.a=d},
bRL:function bRL(d,e){this.a=d
this.b=e},
bRG:function bRG(d){this.a=d},
Y5:function Y5(d,e,f,g,h,i){var _=this
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
F=c[135]
K=c[289]
I=c[141]
E=c[67]
G=c[142]
A=a.updateHolder(c[125],A)
D=c[411]
L=c[402]
A.a4u.prototype={
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
return x==null?B.f1.prototype.gmS.call(this):x}}
A.NL.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bky(d){this.a.cB(new A.bTs(this,d),new A.bTt(this,d),y.d)}}
A.Fi.prototype={
gFa(){var x=this.r-this.w
return x<0?0:x}}
A.qY.prototype={
gbuZ(){return this.e==="Pago"},
gpM(d){var x=this.z
return x>0?x:this.f}}
A.lF.prototype={
gaAx(){var x=this.d
return new B.a3(x,new A.bpk(),B.a8(x).i("a3<1>")).dc(0,0,new A.bpl())},
gaxe(){return C.e.dc(this.c,0,new A.bpe())},
gaAy(){var x=this.d
return new B.a3(x,new A.bpi(),B.a8(x).i("a3<1>")).dc(0,0,new A.bpj())},
gaxf(){return C.e.dc(this.c,0,new A.bpd())},
gby4(){var x=this.d
return new B.a3(x,new A.bpg(),B.a8(x).i("a3<1>")).dc(0,0,new A.bph())},
gaxu(){return C.e.dc(this.e,0,new A.bpf())}}
A.Dh.prototype={
R(){return new A.aEd()},
m_(d){return this.e.$0()}}
A.aEd.prototype={
zo(d,e){return this.beI(d,e)},
beI(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zo=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bRE(r,d))
u=4
q=null
x=7
return B.d(A.dif(new B.a4(r.a.m_(0),B.dc("files","")),y.e,y.z),$async$zo)
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
if(n!=null)n.O(y.q).f.a4(D.bVE)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bRF(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zo,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.a2(22)
u=u.c
x=w.d
return B.B(v,B.C(B.a([new A.Y5(L.O3,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bRJ(w,t),v),H.BU,new A.Y5(C.Dy,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bRK(w,t),v),H.BU,new A.Y5(C.ny,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bRL(w,t),v)],y.p),C.I,C.j,C.p,0,C.v),C.r,v,v,new B.O(C.u,v,v,s,C.bb,v,C.y),v,v,v,C.nc,v,v,v)}}
A.Y5.prototype={
u(d){var x,w,v,u=this,t=null,s=B.a2(14),r=u.f,q=r?t:u.r,p=B.a2(12)
p=B.B(C.K,B.b3(u.c,$.ap,t,t,20),C.r,t,t,new B.O(C.aa,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a6(B.C(B.a([B.i(u.d,t,t,t,t,C.bW,t,t,t),B.i(u.e,t,t,t,t,C.fv,t,t,t)],x),C.I,C.j,C.p,0,C.v),1)
v=$.ap
return B.eR(!1,s,!0,new B.S(C.n8,B.Q(B.a([p,C.ag,w,r?B.aO(B.a_W(t,v,t,t,t,t,t,2,t,t),20,20):B.b3(K.uX,v,t,t,20)],x),C.x,C.j,C.p,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(qY)","P(P,qY)","F<~>(lF)","P(P,Fi)","P(P,LI)","qY()"])
A.b4R.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dH(0,new B.a4(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.kg(new A.a4u(new B.a4(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a4u<+(1?,2?),+(h2?,h2?)>")))}},
$S:19}
A.bTs.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bA(1)")}}
A.bTt.prototype={
$2(d,e){this.a.c=new B.h2(d,e)
this.b.$1(1)},
$S:22}
A.bTr.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:19}
A.cxZ.prototype={
$1(d){return C.k.av(d,1)===0?C.k.a7(d,0):C.k.a7(d,1)},
$S:174}
A.bpk.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bpl.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bpe.prototype={
$2(d,e){return d+e.gFa()},
$S:z+3}
A.bpi.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bpj.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lk(x,w>0?w:x))},
$S:z+1}
A.bpd.prototype={
$2(d,e){var x=e.gFa()
return d+(x+G.lk(x,e.r))},
$S:z+3}
A.bpg.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bph.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lk(x,w>0?w:x)},
$S:z+1}
A.bpf.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cx_.prototype={
$1(d){return d.length!==0},
$S:8}
A.cwk.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cwT(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cN(x==null?"Parceiro":x)}return x},
$S:501}
A.cwl.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cN(x==null?"":x)},
$S:501}
A.cwj.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cwT(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cN(k)
k=I.czX(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bF8.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bFm.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cR1(n.h(o,"amount"))
s=A.d3z(n.h(o,"paid_at"))
r=A.d3z(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cN(o==null?"":o)
n=q.e.$1(m)
return new A.qY(k,w,j,v,u,t,s,r,o,n,A.cR1(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bRE.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bRF.prototype={
$0(){return this.a.d=null},
$S:0}
A.bRJ.prototype={
$0(){return this.a.zo("pdf",new A.bRI(this.b))},
$S:0}
A.bRI.prototype={
$1(d){return this.aDG(d)},
aDG(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
x=3
return B.d(E.cG_(d,u.a),$async$$1)
case 3:t=f
B.ct("files")
s=E.cRY(d,"pdf")
B.ct("files")
v=F.YZ(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bRK.prototype={
$0(){return this.a.zo("xlsx",new A.bRH(this.b))},
$S:0}
A.bRH.prototype={
$1(d){return this.aDF(d)},
aDF(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
t=E.dCG(d,u.a)
B.ct("files")
s=E.cRY(d,"xlsx")
B.ct("files")
v=F.YZ(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bRL.prototype={
$0(){return this.a.zo("rec",new A.bRG(this.b))},
$S:0}
A.bRG.prototype={
$1(d){return this.aDE(d)},
aDE(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
x=2
return B.d(E.cFN(d,v.a),$async$$1)
case 2:u=f
B.ct("files")
t=E.cRY(new A.lF("Comprovativos",d.b,d.c,d.d,D.Vy,D.Vz,null),"pdf")
B.ct("files")
x=3
return B.d(F.YZ(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.b4R,A.bTs,A.bTr,A.cxZ,A.bpk,A.bpi,A.bpg,A.cx_,A.cwk,A.cwl,A.bRI,A.bRH,A.bRG])
w(A.a4u,B.f1)
x(B.L,[A.NL,A.Fi,A.qY,A.lF])
x(B.cS,[A.bTt,A.bpl,A.bpe,A.bpj,A.bpd,A.bph,A.bpf])
x(B.bR,[A.cwj,A.bRE,A.bRF,A.bRJ,A.bRK,A.bRL])
w(A.Dh,B.I)
w(A.aEd,B.a1)
w(A.Y5,B.K)})()
B.bw(b.typeUniverse,JSON.parse('{"a4u":{"f1":[]},"Dh":{"I":[],"e":[],"f":[]},"aEd":{"a1":["Dh"]},"Y5":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.x
return{w:x("c0<c,c>"),b:x("t<Fi>"),P:x("t<qY>"),s:x("t<c>"),p:x("t<e>"),a:x("t<NL<@>>"),j:x("r<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bA"),e:x("lF"),N:x("c"),U:x("a3<c>"),q:x("dA"),i:x("P"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Vz=x([],B.x("t<a6u>"))
D.Vy=x([],B.x("t<LI>"))
D.bH4={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bEB=new B.c0(D.bH4,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bGI={deposit:0,final_payment:1,guest_share:2}
D.bF8=new B.c0(D.bGI,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bGW={paid:0,pending:1,failed:2,refunded:3}
D.bFm=new B.c0(D.bGW,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c9D=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bVE=new B.bJ(D.c9D,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)})()};
(a=>{a["zH3KHAF79MOB6PU4d22+lg/MUdc="]=a.current})($__dart_deferred_initializers__);