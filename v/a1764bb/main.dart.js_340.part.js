((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dil(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aK($.aU,x.i("aK<+(1,2)>")),v=new A.NL(d.a,e.i("NL<0>")),u=new A.NL(d.b,f.i("NL<0>"))
A.drG(B.a([v,u],y.a),new A.b4R(new B.OR(w,x.i("OR<+(1,2)>")),v,u,e,f))
return w},
drG(d,e){var x={},w=x.a=x.b=0,v=new A.bTx(x,d,e)
for(;w<2;++w)d[w].bkA(v)},
b4R:function b4R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4v:function a4v(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
NL:function NL(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bTy:function bTy(d,e){this.a=d
this.b=e},
bTz:function bTz(d,e){this.a=d
this.b=e},
bTx:function bTx(d,e,f){this.a=d
this.b=e
this.c=f},
aj7(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$aj7=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.T().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").aw(0,"*").W("id",1).dN(0),$async$aj7)
case 6:t=e
$.cBx=B.dp(J.h(t,"platform_commission_percentage"))
$.cRF=B.b32(J.h(t,"organizer_fee_tiers"),$.cBx)
s=J.h(t,"partner_fee_tiers")
r=new A.cy4()
if(y.j.b(s)&&J.dP(s)){q=B.a([],y.s)
for(n=J.bo(s,y.f),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.q(r.$1(B.dp(J.h(p,"pct"))))+"% acima":B.q(r.$1(B.dp(J.h(p,"pct"))))+"% at\xe9 "+B.aP(B.dp(J.h(p,"up_to")),!1)
J.by(q,l)}$.cBy=J.ka(q,", ")}else{k=B.aL(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cBy=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$aj7,w)},
cR7(d){var x
if(typeof d=="number")x=d
else{x=B.fi(B.q(d))
if(x==null)x=0}return x},
d3F(d){var x
if(d==null)x=null
else{x=B.ej(B.q(d))
x=x==null?null:x.eH()}return x},
cwZ(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cN(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a3(B.a([v,C.f.D(J.cN(x==null?"":x))],y.s),new A.cx5(),y.U).a3(0," & ")
return x.length===0?"Cliente":x},
cQB(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.A(g,y.c)
for(x=J.c9(a0),w=x.gV(a0);w.t();){v=w.gE(w)
f.j(0,B.a_(J.h(v,"id")),v)}u=new A.cwq(a2)
t=new A.cwr()
w=B.a([],y.P)
for(v=J.c9(a1),s=v.gV(a1);s.t();)w.push(new A.cwp(f,s.gE(s),a2,d,t).$0())
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
o=I.cA2(p,J.cN(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.ej(B.q(m))
m=m==null?h:m.eH()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cN(l==null?"":l)
k=D.bEB.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fi(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.Fi(o,p,n,m,l,k,j,v==null?0:v))}return new A.lF(e,d,g,w,D.Vy,D.Vz,h)},
cy4:function cy4(){},
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
cx5:function cx5(){},
cwq:function cwq(d){this.a=d},
cwr:function cwr(){},
cwp:function cwp(d,e,f,g,h){var _=this
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
bRK:function bRK(d,e){this.a=d
this.b=e},
bRL:function bRL(d){this.a=d},
bRP:function bRP(d,e){this.a=d
this.b=e},
bRO:function bRO(d){this.a=d},
bRQ:function bRQ(d,e){this.a=d
this.b=e},
bRN:function bRN(d){this.a=d},
bRR:function bRR(d,e){this.a=d
this.b=e},
bRM:function bRM(d){this.a=d},
Y7:function Y7(d,e,f,g,h,i){var _=this
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
A.a4v.prototype={
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
bkA(d){this.a.cB(new A.bTy(this,d),new A.bTz(this,d),y.d)}}
A.Fi.prototype={
gFa(){var x=this.r-this.w
return x<0?0:x}}
A.qY.prototype={
gbv0(){return this.e==="Pago"},
gpM(d){var x=this.z
return x>0?x:this.f}}
A.lF.prototype={
gaAz(){var x=this.d
return new B.a3(x,new A.bpk(),B.a8(x).i("a3<1>")).dc(0,0,new A.bpl())},
gaxg(){return C.e.dc(this.c,0,new A.bpe())},
gaAA(){var x=this.d
return new B.a3(x,new A.bpi(),B.a8(x).i("a3<1>")).dc(0,0,new A.bpj())},
gaxh(){return C.e.dc(this.c,0,new A.bpd())},
gby6(){var x=this.d
return new B.a3(x,new A.bpg(),B.a8(x).i("a3<1>")).dc(0,0,new A.bph())},
gaxw(){return C.e.dc(this.e,0,new A.bpf())}}
A.Dh.prototype={
R(){return new A.aEd()},
m_(d){return this.e.$0()}}
A.aEd.prototype={
zp(d,e){return this.beK(d,e)},
beK(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zp=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bRK(r,d))
u=4
q=null
x=7
return B.d(A.dil(new B.a4(r.a.m_(0),B.dc("files","")),y.e,y.z),$async$zp)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zp)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a4(D.bVF)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bRL(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zp,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.a2(22)
u=u.c
x=w.d
return B.B(v,B.C(B.a([new A.Y7(L.O3,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bRP(w,t),v),H.BU,new A.Y7(C.Dy,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bRQ(w,t),v),H.BU,new A.Y7(C.ny,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bRR(w,t),v)],y.p),C.I,C.j,C.p,0,C.v),C.r,v,v,new B.O(C.u,v,v,s,C.bb,v,C.y),v,v,v,C.nc,v,v,v)}}
A.Y7.prototype={
u(d){var x,w,v,u=this,t=null,s=B.a2(14),r=u.f,q=r?t:u.r,p=B.a2(12)
p=B.B(C.K,B.b3(u.c,$.ap,t,t,20),C.r,t,t,new B.O(C.aa,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a6(B.C(B.a([B.i(u.d,t,t,t,t,C.bW,t,t,t),B.i(u.e,t,t,t,t,C.fv,t,t,t)],x),C.I,C.j,C.p,0,C.v),1)
v=$.ap
return B.eR(!1,s,!0,new B.S(C.n8,B.Q(B.a([p,C.ag,w,r?B.aO(B.a_X(t,v,t,t,t,t,t,2,t,t),20,20):B.b3(K.uX,v,t,t,20)],x),C.x,C.j,C.p,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(qY)","P(P,qY)","F<~>(lF)","P(P,Fi)","P(P,LI)","qY()"])
A.b4R.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dH(0,new B.a4(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.kg(new A.a4v(new B.a4(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a4v<+(1?,2?),+(h2?,h2?)>")))}},
$S:19}
A.bTy.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bA(1)")}}
A.bTz.prototype={
$2(d,e){this.a.c=new B.h2(d,e)
this.b.$1(1)},
$S:22}
A.bTx.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:19}
A.cy4.prototype={
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
A.cx5.prototype={
$1(d){return d.length!==0},
$S:8}
A.cwq.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cwZ(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cN(x==null?"Parceiro":x)}return x},
$S:501}
A.cwr.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cN(x==null?"":x)},
$S:501}
A.cwp.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cwZ(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cN(k)
k=I.cA2(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bF8.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bFm.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cR7(n.h(o,"amount"))
s=A.d3F(n.h(o,"paid_at"))
r=A.d3F(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cN(o==null?"":o)
n=q.e.$1(m)
return new A.qY(k,w,j,v,u,t,s,r,o,n,A.cR7(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bRK.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bRL.prototype={
$0(){return this.a.d=null},
$S:0}
A.bRP.prototype={
$0(){return this.a.zp("pdf",new A.bRO(this.b))},
$S:0}
A.bRO.prototype={
$1(d){return this.aDI(d)},
aDI(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
x=3
return B.d(E.cG5(d,u.a),$async$$1)
case 3:t=f
B.ct("files")
s=E.cS3(d,"pdf")
B.ct("files")
v=F.Z0(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bRQ.prototype={
$0(){return this.a.zp("xlsx",new A.bRN(this.b))},
$S:0}
A.bRN.prototype={
$1(d){return this.aDH(d)},
aDH(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
t=E.dCM(d,u.a)
B.ct("files")
s=E.cS3(d,"xlsx")
B.ct("files")
v=F.Z0(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bRR.prototype={
$0(){return this.a.zp("rec",new A.bRM(this.b))},
$S:0}
A.bRM.prototype={
$1(d){return this.aDG(d)},
aDG(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
x=2
return B.d(E.cFT(d,v.a),$async$$1)
case 2:u=f
B.ct("files")
t=E.cS3(new A.lF("Comprovativos",d.b,d.c,d.d,D.Vy,D.Vz,null),"pdf")
B.ct("files")
x=3
return B.d(F.Z0(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.b4R,A.bTy,A.bTx,A.cy4,A.bpk,A.bpi,A.bpg,A.cx5,A.cwq,A.cwr,A.bRO,A.bRN,A.bRM])
w(A.a4v,B.f1)
x(B.L,[A.NL,A.Fi,A.qY,A.lF])
x(B.cT,[A.bTz,A.bpl,A.bpe,A.bpj,A.bpd,A.bph,A.bpf])
x(B.bR,[A.cwp,A.bRK,A.bRL,A.bRP,A.bRQ,A.bRR])
w(A.Dh,B.I)
w(A.aEd,B.a1)
w(A.Y7,B.K)})()
B.bw(b.typeUniverse,JSON.parse('{"a4v":{"f1":[]},"Dh":{"I":[],"e":[],"f":[]},"aEd":{"a1":["Dh"]},"Y7":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.x
return{w:x("c0<c,c>"),b:x("t<Fi>"),P:x("t<qY>"),s:x("t<c>"),p:x("t<e>"),a:x("t<NL<@>>"),j:x("r<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bA"),e:x("lF"),N:x("c"),U:x("a3<c>"),q:x("dA"),i:x("P"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Vz=x([],B.x("t<a6v>"))
D.Vy=x([],B.x("t<LI>"))
D.bH4={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bEB=new B.c0(D.bH4,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bGI={deposit:0,final_payment:1,guest_share:2}
D.bF8=new B.c0(D.bGI,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bGW={paid:0,pending:1,failed:2,refunded:3}
D.bFm=new B.c0(D.bGW,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c9F=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bVF=new B.bJ(D.c9F,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)})()};
(a=>{a["/hLKiDsxymZ6ly4v+BnzkSgaQoU="]=a.current})($__dart_deferred_initializers__);