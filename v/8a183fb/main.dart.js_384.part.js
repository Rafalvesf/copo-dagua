((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dqL(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aO($.aU,x.i("aO<+(1,2)>")),v=new A.Ot(d.a,e.i("Ot<0>")),u=new A.Ot(d.b,f.i("Ot<0>"))
A.dAj(B.a([v,u],y.a),new A.b81(new B.PF(w,x.i("PF<+(1,2)>")),v,u,e,f))
return w},
dAj(d,e){var x={},w=x.a=x.b=0,v=new A.bYO(x,d,e)
for(;w<2;++w)d[w].bnc(v)},
b81:function b81(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5P:function a5P(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Ot:function Ot(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bYP:function bYP(d,e){this.a=d
this.b=e},
bYQ:function bYQ(d,e){this.a=d
this.b=e},
bYO:function bYO(d,e,f){this.a=d
this.b=e
this.c=f},
al_(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$al_=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.R().b
n===$&&B.b()
x=6
return B.d(n.R("platform_settings").am(0,"*").V("id",1).dP(0),$async$al_)
case 6:t=e
$.cIL=B.ds(J.i(t,"platform_commission_percentage"))
$.cZr=B.b6d(J.i(t,"organizer_fee_tiers"),$.cIL)
s=J.i(t,"partner_fee_tiers")
r=new A.cF4()
if(y.j.b(s)&&J.dJ(s)){q=B.a([],y.s)
for(n=J.bh(s,y.f),m=B.u(n),n=new B.al(n,n.gA(n),m.i("al<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.ds(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.ds(J.i(p,"pct"))))+"% at\xe9 "+B.aM(B.ds(J.i(p,"up_to")),!1)
J.bu(q,l)}$.cIM=J.kF(q,", ")}else{k=B.aL(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cIM=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$al_,w)},
cYT(d){var x
if(typeof d=="number")x=d
else{x=B.f1(B.q(d))
if(x==null)x=0}return x},
dbA(d){var x
if(d==null)x=null
else{x=B.dh(B.q(d))
x=x==null?null:x.e1()}return x},
cDV(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.C(J.cA(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.C(J.cA(x==null?"":x))],y.s),new A.cE1(),y.U).a0(0," & ")
return x.length===0?"Cliente":x},
cYm(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.cb(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.a_(J.i(v,"id")),v)}u=new A.cDm(a2)
t=new A.cDn()
w=B.a([],y.P)
for(v=J.cb(a1),s=v.gX(a1);s.t();)w.push(new A.cDl(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.a_(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.f1(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cH8(p,J.cA(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.dh(B.q(m))
m=m==null?h:m.e1()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cA(l==null?"":l)
k=D.bHm.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.f1(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FT(o,p,n,m,l,k,j,v==null?0:v))}return new A.lM(e,d,g,w,D.WV,D.WW,h)},
cF4:function cF4(){},
FT:function FT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
rj:function rj(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lM:function lM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bsU:function bsU(){},
bsV:function bsV(){},
bsO:function bsO(){},
bsS:function bsS(){},
bsT:function bsT(){},
bsN:function bsN(){},
bsQ:function bsQ(){},
bsR:function bsR(){},
bsP:function bsP(){},
cE1:function cE1(){},
cDm:function cDm(d){this.a=d},
cDn:function cDn(){},
cDl:function cDl(d,e,f,g,h){var _=this
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
aGB:function aGB(){this.c=this.a=this.d=null},
bX0:function bX0(d,e){this.a=d
this.b=e},
bX1:function bX1(d){this.a=d},
bX5:function bX5(d,e){this.a=d
this.b=e},
bX4:function bX4(d){this.a=d},
bX6:function bX6(d,e){this.a=d
this.b=e},
bX3:function bX3(d){this.a=d},
bX7:function bX7(d,e){this.a=d
this.b=e},
bX2:function bX2(d){this.a=d},
Zg:function Zg(d,e,f,g,h,i){var _=this
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
K=c[335]
I=c[150]
E=c[69]
G=c[151]
A=a.updateHolder(c[133],A)
D=c[440]
L=c[431]
A.a5P.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.q(u.a)},
gmX(){var x=this.c
x=x==null?null:x.b
return x==null?B.fa.prototype.gmX.call(this):x}}
A.Ot.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bnc(d){this.a.cD(new A.bYP(this,d),new A.bYQ(this,d),y.d)}}
A.FT.prototype={
gFB(){var x=this.r-this.w
return x<0?0:x}}
A.rj.prototype={
gbxJ(){return this.e==="Pago"},
gpP(d){var x=this.z
return x>0?x:this.f}}
A.lM.prototype={
gaBY(){var x=this.d
return new B.a6(x,new A.bsU(),B.a8(x).i("a6<1>")).cY(0,0,new A.bsV())},
gayE(){return C.e.cY(this.c,0,new A.bsO())},
gaBZ(){var x=this.d
return new B.a6(x,new A.bsS(),B.a8(x).i("a6<1>")).cY(0,0,new A.bsT())},
gayF(){return C.e.cY(this.c,0,new A.bsN())},
gbAO(){var x=this.d
return new B.a6(x,new A.bsQ(),B.a8(x).i("a6<1>")).cY(0,0,new A.bsR())},
gayU(){return C.e.cY(this.e,0,new A.bsP())}}
A.DN.prototype={
P(){return new A.aGB()},
m8(d){return this.e.$0()}}
A.aGB.prototype={
zD(d,e){return this.bhi(d,e)},
bhi(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zD=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bX0(r,d))
u=4
q=null
x=7
return B.d(A.dqL(new B.a1(r.a.m8(0),B.de("files","")),y.e,y.z),$async$zD)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zD)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a3(D.bZZ)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bX1(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zD,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.B(v,B.y(B.a([new A.Zg(L.Pn,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bX5(w,t),v),H.CP,new A.Zg(C.Ew,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bX6(w,t),v),H.CP,new A.Zg(C.lS,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bX7(w,t),v)],y.p),C.H,C.h,C.l,0,C.u),C.r,v,v,new B.L(C.t,v,v,s,C.bi,v,C.y),v,v,v,C.jH,v,v,v)}}
A.Zg.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.B(C.L,B.b4(u.c,$.at,t,t,20),C.r,t,t,new B.L(C.a7,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.y(B.a([B.h(u.d,t,t,t,t,C.bD,t,t,t),B.h(u.e,t,t,t,t,C.hk,t,t,t)],x),C.H,C.h,C.l,0,C.u),1)
v=$.at
return B.eC(!1,s,!0,new B.Q(C.nF,B.N(B.a([p,C.af,w,r?B.aG(B.aoi(t,v,t,t,t,t,t,2,t,t),20,20):B.b4(K.vE,v,t,t,20)],x),C.w,C.h,C.l,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["x(rj)","S(S,rj)","F<~>(lM)","S(S,FT)","S(S,Mn)","rj()"])
A.b81.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a1(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jS(new A.a5P(new B.a1(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a5P<+(1?,2?),+(hd?,hd?)>")))}},
$S:15}
A.bYP.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bn(1)")}}
A.bYQ.prototype={
$2(d,e){this.a.c=new B.hd(d,e)
this.b.$1(1)},
$S:23}
A.bYO.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cF4.prototype={
$1(d){return C.k.aq(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:181}
A.bsU.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsV.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bsO.prototype={
$2(d,e){return d+e.gFB()},
$S:z+3}
A.bsS.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsT.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lp(x,w>0?w:x))},
$S:z+1}
A.bsN.prototype={
$2(d,e){var x=e.gFB()
return d+(x+G.lp(x,e.r))},
$S:z+3}
A.bsQ.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsR.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lp(x,w>0?w:x)},
$S:z+1}
A.bsP.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cE1.prototype={
$1(d){return d.length!==0},
$S:7}
A.cDm.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cDV(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cA(x==null?"Parceiro":x)}return x},
$S:355}
A.cDn.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cA(x==null?"":x)},
$S:355}
A.cDl.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cDV(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cA(k)
k=l?p:J.i(m,"booking_number")
k=I.cH8(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bHV.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bI8.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cYT(n.h(o,"amount"))
s=A.dbA(n.h(o,"paid_at"))
r=A.dbA(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cA(o==null?"":o)
n=q.e.$1(m)
return new A.rj(k,w,j,v,u,t,s,r,o,n,A.cYT(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bX0.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bX1.prototype={
$0(){return this.a.d=null},
$S:0}
A.bX5.prototype={
$0(){return this.a.zD("pdf",new A.bX4(this.b))},
$S:0}
A.bX4.prototype={
$1(d){return this.aFa(d)},
aFa(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
x=3
return B.d(E.cNC(d,u.a),$async$$1)
case 3:t=f
B.cq("files")
s=E.cZP(d,"pdf")
B.cq("files")
v=F.a_a(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bX6.prototype={
$0(){return this.a.zD("xlsx",new A.bX3(this.b))},
$S:0}
A.bX3.prototype={
$1(d){return this.aF9(d)},
aF9(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
t=E.dLM(d,u.a)
B.cq("files")
s=E.cZP(d,"xlsx")
B.cq("files")
v=F.a_a(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bX7.prototype={
$0(){return this.a.zD("rec",new A.bX2(this.b))},
$S:0}
A.bX2.prototype={
$1(d){return this.aF8(d)},
aF8(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
x=2
return B.d(E.cNp(d,v.a),$async$$1)
case 2:u=f
B.cq("files")
t=E.cZP(new A.lM("Comprovativos",d.b,d.c,d.d,D.WV,D.WW,null),"pdf")
B.cq("files")
x=3
return B.d(F.a_a(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.by,[A.b81,A.bYP,A.bYO,A.cF4,A.bsU,A.bsS,A.bsQ,A.cE1,A.cDm,A.cDn,A.bX4,A.bX3,A.bX2])
w(A.a5P,B.fa)
x(B.K,[A.Ot,A.FT,A.rj,A.lM])
x(B.cN,[A.bYQ,A.bsV,A.bsO,A.bsT,A.bsN,A.bsR,A.bsP])
x(B.bR,[A.cDl,A.bX0,A.bX1,A.bX5,A.bX6,A.bX7])
w(A.DN,B.G)
w(A.aGB,B.Y)
w(A.Zg,B.I)})()
B.bq(b.typeUniverse,JSON.parse('{"a5P":{"fa":[]},"DN":{"G":[],"e":[],"f":[]},"aGB":{"Y":["DN"]},"Zg":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c3<c,c>"),b:x("r<FT>"),P:x("r<rj>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Ot<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bn"),e:x("lM"),N:x("c"),U:x("a6<c>"),q:x("dn"),i:x("S"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.WW=x([],B.w("r<a7Q>"))
D.WV=x([],B.w("r<Mn>"))
D.bK_={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bHm=new B.c3(D.bK_,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bJD={deposit:0,final_payment:1,guest_share:2}
D.bHV=new B.c3(D.bJD,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bJR={paid:0,pending:1,failed:2,refunded:3}
D.bI8=new B.c3(D.bJR,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cet=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZZ=new B.bG(D.cet,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.z,null)})()};
(a=>{a["yfxrRBQ06Fx9EBP0fNEwcSe1Xtw="]=a.current})($__dart_deferred_initializers__);