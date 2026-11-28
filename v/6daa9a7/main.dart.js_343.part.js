((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
diF(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aK($.aU,x.i("aK<+(1,2)>")),v=new A.NQ(d.a,e.i("NQ<0>")),u=new A.NQ(d.b,f.i("NQ<0>"))
A.drY(B.a([v,u],y.a),new A.b5g(new B.OW(w,x.i("OW<+(1,2)>")),v,u,e,f))
return w},
drY(d,e){var x={},w=x.a=x.b=0,v=new A.bU9(x,d,e)
for(;w<2;++w)d[w].bkC(v)},
b5g:function b5g(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4D:function a4D(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
NQ:function NQ(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bUa:function bUa(d,e){this.a=d
this.b=e},
bUb:function bUb(d,e){this.a=d
this.b=e},
bU9:function bU9(d,e,f){this.a=d
this.b=e
this.c=f},
ajg(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$ajg=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.T().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").aw(0,"*").W("id",1).dN(0),$async$ajg)
case 6:t=e
$.cBU=B.dp(J.h(t,"platform_commission_percentage"))
$.cRW=B.b3r(J.h(t,"organizer_fee_tiers"),$.cBU)
s=J.h(t,"partner_fee_tiers")
r=new A.cyl()
if(y.j.b(s)&&J.dP(s)){q=B.a([],y.s)
for(n=J.bo(s,y.f),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.q(r.$1(B.dp(J.h(p,"pct"))))+"% acima":B.q(r.$1(B.dp(J.h(p,"pct"))))+"% at\xe9 "+B.aP(B.dp(J.h(p,"up_to")),!1)
J.by(q,l)}$.cBV=J.kb(q,", ")}else{k=B.aL(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cBV=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$ajg,w)},
cRo(d){var x
if(typeof d=="number")x=d
else{x=B.fi(B.q(d))
if(x==null)x=0}return x},
d3W(d){var x
if(d==null)x=null
else{x=B.ej(B.q(d))
x=x==null?null:x.eH()}return x},
cxf(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cN(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a3(B.a([v,C.f.D(J.cN(x==null?"":x))],y.s),new A.cxm(),y.U).a3(0," & ")
return x.length===0?"Cliente":x},
cQS(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.A(g,y.c)
for(x=J.c9(a0),w=x.gV(a0);w.t();){v=w.gE(w)
f.j(0,B.a_(J.h(v,"id")),v)}u=new A.cwH(a2)
t=new A.cwI()
w=B.a([],y.P)
for(v=J.c9(a1),s=v.gV(a1);s.t();)w.push(new A.cwG(f,s.gE(s),a2,d,t).$0())
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
o=I.cAj(p,J.cN(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.ej(B.q(m))
m=m==null?h:m.eH()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cN(l==null?"":l)
k=D.bEW.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fi(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.Fo(o,p,n,m,l,k,j,v==null?0:v))}return new A.lF(e,d,g,w,D.VC,D.VD,h)},
cyl:function cyl(){},
Fo:function Fo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
qZ:function qZ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bpK:function bpK(){},
bpL:function bpL(){},
bpE:function bpE(){},
bpI:function bpI(){},
bpJ:function bpJ(){},
bpD:function bpD(){},
bpG:function bpG(){},
bpH:function bpH(){},
bpF:function bpF(){},
cxm:function cxm(){},
cwH:function cwH(d){this.a=d},
cwI:function cwI(){},
cwG:function cwG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dn:function Dn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEt:function aEt(){this.c=this.a=this.d=null},
bSm:function bSm(d,e){this.a=d
this.b=e},
bSn:function bSn(d){this.a=d},
bSr:function bSr(d,e){this.a=d
this.b=e},
bSq:function bSq(d){this.a=d},
bSs:function bSs(d,e){this.a=d
this.b=e},
bSp:function bSp(d){this.a=d},
bSt:function bSt(d,e){this.a=d
this.b=e},
bSo:function bSo(d){this.a=d},
Yg:function Yg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[272]
F=c[138]
K=c[312]
I=c[144]
E=c[67]
G=c[145]
A=a.updateHolder(c[128],A)
D=c[417]
L=c[409]
A.a4D.prototype={
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
A.NQ.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bkC(d){this.a.cB(new A.bUa(this,d),new A.bUb(this,d),y.d)}}
A.Fo.prototype={
gFa(){var x=this.r-this.w
return x<0?0:x}}
A.qZ.prototype={
gbv0(){return this.e==="Pago"},
gpM(d){var x=this.z
return x>0?x:this.f}}
A.lF.prototype={
gaAz(){var x=this.d
return new B.a3(x,new A.bpK(),B.a8(x).i("a3<1>")).dc(0,0,new A.bpL())},
gaxg(){return C.e.dc(this.c,0,new A.bpE())},
gaAA(){var x=this.d
return new B.a3(x,new A.bpI(),B.a8(x).i("a3<1>")).dc(0,0,new A.bpJ())},
gaxh(){return C.e.dc(this.c,0,new A.bpD())},
gby6(){var x=this.d
return new B.a3(x,new A.bpG(),B.a8(x).i("a3<1>")).dc(0,0,new A.bpH())},
gaxw(){return C.e.dc(this.e,0,new A.bpF())}}
A.Dn.prototype={
R(){return new A.aEt()},
m_(d){return this.e.$0()}}
A.aEt.prototype={
zq(d,e){return this.beM(d,e)},
beM(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zq=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bSm(r,d))
u=4
q=null
x=7
return B.d(A.diF(new B.a4(r.a.m_(0),B.dc("files","")),y.e,y.z),$async$zq)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zq)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a4(D.bWt)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bSn(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zq,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.a2(22)
u=u.c
x=w.d
return B.C(v,B.B(B.a([new A.Yg(L.O7,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bSr(w,t),v),H.BT,new A.Yg(C.Dz,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bSs(w,t),v),H.BT,new A.Yg(C.ny,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bSt(w,t),v)],y.p),C.I,C.j,C.o,0,C.v),C.r,v,v,new B.O(C.u,v,v,s,C.bb,v,C.y),v,v,v,C.nc,v,v,v)}}
A.Yg.prototype={
u(d){var x,w,v,u=this,t=null,s=B.a2(14),r=u.f,q=r?t:u.r,p=B.a2(12)
p=B.C(C.K,B.b3(u.c,$.ap,t,t,20),C.r,t,t,new B.O(C.a8,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a6(B.B(B.a([B.i(u.d,t,t,t,t,C.bV,t,t,t),B.i(u.e,t,t,t,t,C.fw,t,t,t)],x),C.I,C.j,C.o,0,C.v),1)
v=$.ap
return B.eR(!1,s,!0,new B.Q(C.n8,B.R(B.a([p,C.ag,w,r?B.aO(B.amw(t,v,t,t,t,t,t,2,t,t),20,20):B.b3(K.uY,v,t,t,20)],x),C.x,C.j,C.o,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["y(qZ)","P(P,qZ)","F<~>(lF)","P(P,Fo)","P(P,LM)","qZ()"])
A.b5g.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dH(0,new B.a4(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.kg(new A.a4D(new B.a4(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a4D<+(1?,2?),+(h2?,h2?)>")))}},
$S:19}
A.bUa.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bA(1)")}}
A.bUb.prototype={
$2(d,e){this.a.c=new B.h2(d,e)
this.b.$1(1)},
$S:22}
A.bU9.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:19}
A.cyl.prototype={
$1(d){return C.k.aq(d,1)===0?C.k.a7(d,0):C.k.a7(d,1)},
$S:177}
A.bpK.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bpL.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bpE.prototype={
$2(d,e){return d+e.gFa()},
$S:z+3}
A.bpI.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bpJ.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lk(x,w>0?w:x))},
$S:z+1}
A.bpD.prototype={
$2(d,e){var x=e.gFa()
return d+(x+G.lk(x,e.r))},
$S:z+3}
A.bpG.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bpH.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lk(x,w>0?w:x)},
$S:z+1}
A.bpF.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cxm.prototype={
$1(d){return d.length!==0},
$S:8}
A.cwH.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cxf(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cN(x==null?"Parceiro":x)}return x},
$S:447}
A.cwI.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cN(x==null?"":x)},
$S:447}
A.cwG.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cxf(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cN(k)
k=I.cAj(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bFt.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bFH.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cRo(n.h(o,"amount"))
s=A.d3W(n.h(o,"paid_at"))
r=A.d3W(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cN(o==null?"":o)
n=q.e.$1(m)
return new A.qZ(k,w,j,v,u,t,s,r,o,n,A.cRo(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bSm.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bSn.prototype={
$0(){return this.a.d=null},
$S:0}
A.bSr.prototype={
$0(){return this.a.zq("pdf",new A.bSq(this.b))},
$S:0}
A.bSq.prototype={
$1(d){return this.aDI(d)},
aDI(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
x=3
return B.d(E.cGs(d,u.a),$async$$1)
case 3:t=f
B.ct("files")
s=E.cSk(d,"pdf")
B.ct("files")
v=F.Z9(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bSs.prototype={
$0(){return this.a.zq("xlsx",new A.bSp(this.b))},
$S:0}
A.bSp.prototype={
$1(d){return this.aDH(d)},
aDH(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
t=E.dD3(d,u.a)
B.ct("files")
s=E.cSk(d,"xlsx")
B.ct("files")
v=F.Z9(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bSt.prototype={
$0(){return this.a.zq("rec",new A.bSo(this.b))},
$S:0}
A.bSo.prototype={
$1(d){return this.aDG(d)},
aDG(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.ct("files")
B.ct("files")
x=2
return B.d(E.cGf(d,v.a),$async$$1)
case 2:u=f
B.ct("files")
t=E.cSk(new A.lF("Comprovativos",d.b,d.c,d.d,D.VC,D.VD,null),"pdf")
B.ct("files")
x=3
return B.d(F.Z9(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.b5g,A.bUa,A.bU9,A.cyl,A.bpK,A.bpI,A.bpG,A.cxm,A.cwH,A.cwI,A.bSq,A.bSp,A.bSo])
w(A.a4D,B.f2)
x(B.L,[A.NQ,A.Fo,A.qZ,A.lF])
x(B.cS,[A.bUb,A.bpL,A.bpE,A.bpJ,A.bpD,A.bpH,A.bpF])
x(B.bR,[A.cwG,A.bSm,A.bSn,A.bSr,A.bSs,A.bSt])
w(A.Dn,B.I)
w(A.aEt,B.a1)
w(A.Yg,B.K)})()
B.bu(b.typeUniverse,JSON.parse('{"a4D":{"f2":[]},"Dn":{"I":[],"e":[],"f":[]},"aEt":{"a1":["Dn"]},"Yg":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c0<c,c>"),b:x("t<Fo>"),P:x("t<qZ>"),s:x("t<c>"),p:x("t<e>"),a:x("t<NQ<@>>"),j:x("r<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bA"),e:x("lF"),N:x("c"),U:x("a3<c>"),q:x("dA"),i:x("P"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.VD=x([],B.w("t<a6D>"))
D.VC=x([],B.w("t<LM>"))
D.bHp={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bEW=new B.c0(D.bHp,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bH2={deposit:0,final_payment:1,guest_share:2}
D.bFt=new B.c0(D.bH2,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bHg={paid:0,pending:1,failed:2,refunded:3}
D.bFH=new B.c0(D.bHg,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cas=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bWt=new B.bK(D.cas,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)})()};
(a=>{a["s3BMo8uth6HNy1PWxXZ7XkGTVqA="]=a.current})($__dart_deferred_initializers__);