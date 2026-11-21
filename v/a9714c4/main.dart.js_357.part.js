((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,H,F,L,I,E,G,A={
d9J(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aK($.aP,x.i("aK<+(1,2)>")),v=new A.N6(d.a,e.i("N6<0>")),u=new A.N6(d.b,f.i("N6<0>"))
A.dj5(B.a([v,u],y.a),new A.b2x(new B.O8(w,x.i("O8<+(1,2)>")),v,u,e,f))
return w},
dj5(d,e){var x={},w=x.a=x.b=0,v=new A.bPO(x,d,e)
for(;w<2;++w)d[w].biU(v)},
b2x:function b2x(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3t:function a3t(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
N6:function N6(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bPP:function bPP(d,e){this.a=d
this.b=e},
bPQ:function bPQ(d,e){this.a=d
this.b=e},
bPO:function bPO(d,e,f){this.a=d
this.b=e
this.c=f},
ai2(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$ai2=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.R().b
n===$&&B.b()
x=6
return B.d(n.T("platform_settings").aG(0,"*").X("id",1).dS(0),$async$ai2)
case 6:t=e
$.cuA=B.dQ(J.h(t,"platform_commission_percentage"))
$.cKe=M.b0J(J.h(t,"organizer_fee_tiers"),$.cuA,null)
s=J.h(t,"partner_fee_tiers")
r=new A.crE()
if(y.j.b(s)&&J.eB(s)){q=B.a([],y.s)
for(n=J.bw(s,y.f),m=B.u(n),n=new B.ao(n,n.gA(n),m.i("ao<T.E>")),m=m.i("T.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.q(r.$1(B.dQ(J.h(p,"pct"))))+"% acima":B.q(r.$1(B.dQ(J.h(p,"pct"))))+"% at\xe9 "+B.b6(B.dQ(J.h(p,"up_to")),!1)
J.bS(q,l)}$.cuB=J.md(q,", ")}else{k=B.aV(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cuB=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$ai2,w)},
cJF(d){var x
if(typeof d=="number")x=d
else{x=B.f8(B.q(d))
if(x==null)x=0}return x},
cWR(d){var x
if(d==null)x=null
else{x=B.eM(B.q(d))
x=x==null?null:x.f4()}return x},
cqB(d){var x,w,v
if(d==null)return"Cliente"
x=J.a5(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cL(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a4(B.a([v,C.f.D(J.cL(x==null?"":x))],y.s),new A.cqI(),y.U).ab(0," & ")
return x.length===0?"Cliente":x},
cJa(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.A(g,y.c)
for(x=J.cw(a0),w=x.gW(a0);w.t();){v=w.gG(w)
f.j(0,B.a2(J.h(v,"id")),v)}u=new A.cq1(a2)
t=new A.cq2()
w=B.a([],y.P)
for(v=J.cw(a1),s=v.gW(a1);s.t();)w.push(new A.cq0(f,s.gG(s),a2,d,t).$0())
r=B.A(g,y.i)
for(g=v.gW(a1);g.t();){f=g.gG(g)
v=J.a5(f)
if(J.p(v.h(f,i),"paid")){q=B.a2(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.f8(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gW(a0),x=y.Y;f.t();){v=f.gG(f)
s=J.a5(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.ctm(p,J.cL(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.eM(B.q(m))
m=m==null?h:m.f4()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cL(l==null?"":l)
k=D.bDO.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.f8(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.EG(o,p,n,m,l,k,j,v==null?0:v))}return new A.lr(e,d,g,w,D.V7,D.V8,h)},
crE:function crE(){},
EG:function EG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
qz:function qz(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lr:function lr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bms:function bms(){},
bmt:function bmt(){},
bmm:function bmm(){},
bmq:function bmq(){},
bmr:function bmr(){},
bml:function bml(){},
bmo:function bmo(){},
bmp:function bmp(){},
bmn:function bmn(){},
cqI:function cqI(){},
cq1:function cq1(d){this.a=d},
cq2:function cq2(){},
cq0:function cq0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CJ:function CJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCQ:function aCQ(){this.c=this.a=this.d=null},
bOh:function bOh(d,e){this.a=d
this.b=e},
bOi:function bOi(d){this.a=d},
bOm:function bOm(d,e){this.a=d
this.b=e},
bOl:function bOl(d){this.a=d},
bOn:function bOn(d,e){this.a=d
this.b=e},
bOk:function bOk(d){this.a=d},
bOo:function bOo(d,e){this.a=d
this.b=e},
bOj:function bOj(d){this.a=d},
Xh:function Xh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,M,N
J=c[1]
B=c[0]
C=c[2]
K=c[265]
H=c[266]
F=c[136]
L=c[312]
I=c[140]
E=c[66]
G=c[141]
A=a.updateHolder(c[126],A)
D=c[443]
M=c[173]
N=c[436]
A.a3t.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.q(u.a)},
gmP(){var x=this.c
x=x==null?null:x.b
return x==null?B.eV.prototype.gmP.call(this):x}}
A.N6.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
biU(d){this.a.cA(new A.bPP(this,d),new A.bPQ(this,d),y.d)}}
A.EG.prototype={
gEU(){var x=this.r-this.w
return x<0?0:x}}
A.qz.prototype={
gbti(){return this.e==="Pago"},
gpE(d){var x=this.z
return x>0?x:this.f}}
A.lr.prototype={
gazE(){var x=this.d
return new B.a4(x,new A.bms(),B.a6(x).i("a4<1>")).dG(0,0,new A.bmt())},
gawo(){return C.e.dG(this.c,0,new A.bmm())},
gazF(){var x=this.d
return new B.a4(x,new A.bmq(),B.a6(x).i("a4<1>")).dG(0,0,new A.bmr())},
gawp(){return C.e.dG(this.c,0,new A.bml())},
gbwq(){var x=this.d
return new B.a4(x,new A.bmo(),B.a6(x).i("a4<1>")).dG(0,0,new A.bmp())},
gawD(){return C.e.dG(this.e,0,new A.bmn())}}
A.CJ.prototype={
R(){return new A.aCQ()},
lX(d){return this.e.$0()}}
A.aCQ.prototype={
za(d,e){return this.bd6(d,e)},
bd6(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$za=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bOh(r,d))
u=4
q=null
x=7
return B.d(A.d9J(new B.ac(r.a.lX(0),B.da("files","")),y.e,y.z),$async$za)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$za)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.S(y.q).f.a7(D.bUo)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bOi(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$za,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.F(v,B.G(B.a([new A.Xh(N.NE,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bOm(w,t),v),H.BF,new A.Xh(C.Dg,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bOn(w,t),v),H.BF,new A.Xh(C.nb,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bOo(w,t),v)],y.p),C.J,C.l,C.q,0,C.w),C.r,v,v,new B.M(C.u,v,v,s,C.aH,v,C.y),v,v,v,C.pE,v,v,v)}}
A.Xh.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.F(C.O,B.b9(u.c,$.al,t,t,20),C.r,t,t,new B.M(C.af,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a9(B.G(B.a([B.i(u.d,t,t,t,C.c7,t,t,t),B.i(u.e,t,t,t,C.f1,t,t,t)],x),C.J,C.l,C.q,0,C.w),1)
v=$.al
return B.eJ(!1,s,!0,new B.X(K.py,B.Y(B.a([p,C.ao,w,r?B.aN(B.ZY(t,v,t,t,t,t,t,2,t,t),20,20):B.b9(L.uR,v,t,t,20)],x),C.x,C.l,C.q,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(qz)","S(S,qz)","E<~>(lr)","S(S,EG)","S(S,L8)","qz()"])
A.b2x.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dE(0,new B.ac(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.kb(new A.a3t(new B.ac(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a3t<+(1?,2?),+(fZ?,fZ?)>")))}},
$S:23}
A.bPP.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("by(1)")}}
A.bPQ.prototype={
$2(d,e){this.a.c=new B.fZ(d,e)
this.b.$1(1)},
$S:21}
A.bPO.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:23}
A.crE.prototype={
$1(d){return C.j.an(d,1)===0?C.j.ac(d,0):C.j.ac(d,1)},
$S:134}
A.bms.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bmt.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bmm.prototype={
$2(d,e){return d+e.gEU()},
$S:z+3}
A.bmq.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bmr.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.l3(x,w>0?w:x))},
$S:z+1}
A.bml.prototype={
$2(d,e){var x=e.gEU()
return d+(x+G.l3(x,e.r))},
$S:z+3}
A.bmo.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bmp.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.l3(x,w>0?w:x)},
$S:z+1}
A.bmn.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cqI.prototype={
$1(d){return d.length!==0},
$S:8}
A.cq1.prototype={
$1(d){var x=J.a5(d),w=y.Y
if(this.a)x=A.cqB(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cL(x==null?"Parceiro":x)}return x},
$S:467}
A.cq2.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cL(x==null?"":x)},
$S:467}
A.cq0.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a5(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cqB(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cL(k)
k=I.ctm(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bEk.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bEy.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cJF(n.h(o,"amount"))
s=A.cWR(n.h(o,"paid_at"))
r=A.cWR(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cL(o==null?"":o)
n=q.e.$1(m)
return new A.qz(k,w,j,v,u,t,s,r,o,n,A.cJF(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bOh.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bOi.prototype={
$0(){return this.a.d=null},
$S:0}
A.bOm.prototype={
$0(){return this.a.za("pdf",new A.bOl(this.b))},
$S:0}
A.bOl.prototype={
$1(d){return this.aCR(d)},
aCR(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
x=3
return B.d(E.cyY(d,u.a),$async$$1)
case 3:t=f
B.cq("files")
s=E.cKC(d,"pdf")
B.cq("files")
v=F.Y9(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bOn.prototype={
$0(){return this.a.za("xlsx",new A.bOk(this.b))},
$S:0}
A.bOk.prototype={
$1(d){return this.aCQ(d)},
aCQ(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
t=E.dtS(d,u.a)
B.cq("files")
s=E.cKC(d,"xlsx")
B.cq("files")
v=F.Y9(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bOo.prototype={
$0(){return this.a.za("rec",new A.bOj(this.b))},
$S:0}
A.bOj.prototype={
$1(d){return this.aCP(d)},
aCP(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
x=2
return B.d(E.cyM(d,v.a),$async$$1)
case 2:u=f
B.cq("files")
t=E.cKC(new A.lr("Comprovativos",d.b,d.c,d.d,D.V7,D.V8,null),"pdf")
B.cq("files")
x=3
return B.d(F.Y9(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.b2x,A.bPP,A.bPO,A.crE,A.bms,A.bmq,A.bmo,A.cqI,A.cq1,A.cq2,A.bOl,A.bOk,A.bOj])
w(A.a3t,B.eV)
x(B.J,[A.N6,A.EG,A.qz,A.lr])
x(B.cM,[A.bPQ,A.bmt,A.bmm,A.bmr,A.bml,A.bmp,A.bmn])
x(B.bM,[A.cq0,A.bOh,A.bOi,A.bOm,A.bOn,A.bOo])
w(A.CJ,B.I)
w(A.aCQ,B.a1)
w(A.Xh,B.O)})()
B.bt(b.typeUniverse,JSON.parse('{"a3t":{"eV":[]},"CJ":{"I":[],"e":[],"f":[]},"aCQ":{"a1":["CJ"]},"Xh":{"O":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c6<c,c>"),b:x("r<EG>"),P:x("r<qz>"),s:x("r<c>"),p:x("r<e>"),a:x("r<N6<@>>"),j:x("t<@>"),c:x("a3<c,@>"),f:x("a3<@,@>"),d:x("by"),e:x("lr"),N:x("c"),U:x("a4<c>"),q:x("dF"),i:x("S"),z:x("@"),Y:x("a3<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.V8=x([],B.w("r<a5t>"))
D.V7=x([],B.w("r<L8>"))
D.bGe={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bDO=new B.c6(D.bGe,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bFT={deposit:0,final_payment:1,guest_share:2}
D.bEk=new B.c6(D.bFT,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bG5={paid:0,pending:1,failed:2,refunded:3}
D.bEy=new B.c6(D.bG5,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c8A=new B.C("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bUo=new B.bX(D.c8A,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)})()};
(a=>{a["YBUJO5jimRrWvOvPuMJWvfmv1d0="]=a.current})($__dart_deferred_initializers__);