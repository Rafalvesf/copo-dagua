((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dmn(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aN($.aT,x.i("aN<+(1,2)>")),v=new A.Od(d.a,e.i("Od<0>")),u=new A.Od(d.b,f.i("Od<0>"))
A.dvU(B.a([v,u],y.a),new A.b6T(new B.Pj(w,x.i("Pj<+(1,2)>")),v,u,e,f))
return w},
dvU(d,e){var x={},w=x.a=x.b=0,v=new A.bWI(x,d,e)
for(;w<2;++w)d[w].blY(v)},
b6T:function b6T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5i:function a5i(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Od:function Od(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bWJ:function bWJ(d,e){this.a=d
this.b=e},
bWK:function bWK(d,e){this.a=d
this.b=e},
bWI:function bWI(d,e,f){this.a=d
this.b=e
this.c=f},
akc(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akc=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.T().b
n===$&&B.b()
x=6
return B.d(n.R("platform_settings").az(0,"*").W("id",1).dP(0),$async$akc)
case 6:t=e
$.cF1=B.dt(J.h(t,"platform_commission_percentage"))
$.cVn=B.b53(J.h(t,"organizer_fee_tiers"),$.cF1)
s=J.h(t,"partner_fee_tiers")
r=new A.cBp()
if(y.j.b(s)&&J.dS(s)){q=B.a([],y.s)
for(n=J.bk(s,y.f),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<U.E>")),m=m.i("U.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.q(r.$1(B.dt(J.h(p,"pct"))))+"% acima":B.q(r.$1(B.dt(J.h(p,"pct"))))+"% at\xe9 "+B.aQ(B.dt(J.h(p,"up_to")),!1)
J.bw(q,l)}$.cF2=J.ka(q,", ")}else{k=B.aJ(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cF2=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akc,w)},
cUQ(d){var x
if(typeof d=="number")x=d
else{x=B.fp(B.q(d))
if(x==null)x=0}return x},
d7t(d){var x
if(d==null)x=null
else{x=B.dK(B.q(d))
x=x==null?null:x.eh()}return x},
cAi(d){var x,w,v
if(d==null)return"Cliente"
x=J.a6(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cx(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a5(B.a([v,C.f.D(J.cx(x==null?"":x))],y.s),new A.cAp(),y.U).a3(0," & ")
return x.length===0?"Cliente":x},
cUk(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.A(g,y.c)
for(x=J.c9(a0),w=x.gV(a0);w.t();){v=w.gE(w)
f.j(0,B.a0(J.h(v,"id")),v)}u=new A.czK(a2)
t=new A.czL()
w=B.a([],y.P)
for(v=J.c9(a1),s=v.gV(a1);s.t();)w.push(new A.czJ(f,s.gE(s),a2,d,t).$0())
r=B.A(g,y.i)
for(g=v.gV(a1);g.t();){f=g.gE(g)
v=J.a6(f)
if(J.o(v.h(f,i),"paid")){q=B.a0(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.fp(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gV(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a6(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.cDo(p,J.cx(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.dK(B.q(m))
m=m==null?h:m.eh()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cx(l==null?"":l)
k=D.bGr.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fp(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FG(o,p,n,m,l,k,j,v==null?0:v))}return new A.lK(e,d,g,w,D.Wl,D.Wm,h)},
cBp:function cBp(){},
FG:function FG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
r8:function r8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lK:function lK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
brJ:function brJ(){},
brK:function brK(){},
brD:function brD(){},
brH:function brH(){},
brI:function brI(){},
brC:function brC(){},
brF:function brF(){},
brG:function brG(){},
brE:function brE(){},
cAp:function cAp(){},
czK:function czK(d){this.a=d},
czL:function czL(){},
czJ:function czJ(d,e,f,g,h){var _=this
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
aFE:function aFE(){this.c=this.a=this.d=null},
bUV:function bUV(d,e){this.a=d
this.b=e},
bUW:function bUW(d){this.a=d},
bV_:function bV_(d,e){this.a=d
this.b=e},
bUZ:function bUZ(d){this.a=d},
bV0:function bV0(d,e){this.a=d
this.b=e},
bUY:function bUY(d){this.a=d},
bV1:function bV1(d,e){this.a=d
this.b=e},
bUX:function bUX(d){this.a=d},
YN:function YN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[287]
F=c[142]
K=c[326]
I=c[147]
E=c[69]
G=c[148]
A=a.updateHolder(c[131],A)
D=c[428]
L=c[421]
A.a5i.prototype={
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
return x==null?B.f6.prototype.gmY.call(this):x}}
A.Od.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
blY(d){this.a.cC(new A.bWJ(this,d),new A.bWK(this,d),y.d)}}
A.FG.prototype={
gFp(){var x=this.r-this.w
return x<0?0:x}}
A.r8.prototype={
gbwr(){return this.e==="Pago"},
gpQ(d){var x=this.z
return x>0?x:this.f}}
A.lK.prototype={
gaBg(){var x=this.d
return new B.a5(x,new A.brJ(),B.a8(x).i("a5<1>")).d7(0,0,new A.brK())},
gaxW(){return C.e.d7(this.c,0,new A.brD())},
gaBh(){var x=this.d
return new B.a5(x,new A.brH(),B.a8(x).i("a5<1>")).d7(0,0,new A.brI())},
gaxX(){return C.e.d7(this.c,0,new A.brC())},
gbzw(){var x=this.d
return new B.a5(x,new A.brF(),B.a8(x).i("a5<1>")).d7(0,0,new A.brG())},
gayb(){return C.e.d7(this.e,0,new A.brE())}}
A.DC.prototype={
P(){return new A.aFE()},
m6(d){return this.e.$0()}}
A.aFE.prototype={
zB(d,e){return this.bg5(d,e)},
bg5(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zB=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bUV(r,d))
u=4
q=null
x=7
return B.d(A.dmn(new B.a3(r.a.m6(0),B.da("files","")),y.e,y.z),$async$zB)
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
if(n!=null)n.O(y.q).f.a4(D.bYy)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bUW(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zB,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.a1(22)
u=u.c
x=w.d
return B.E(v,B.C(B.a([new A.YN(L.OP,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bV_(w,t),v),H.Cr,new A.YN(C.E6,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bV0(w,t),v),H.Cr,new A.YN(C.nG,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bV1(w,t),v)],y.p),C.H,C.j,C.m,0,C.v),C.r,v,v,new B.O(C.t,v,v,s,C.bb,v,C.y),v,v,v,C.nk,v,v,v)}}
A.YN.prototype={
u(d){var x,w,v,u=this,t=null,s=B.a1(14),r=u.f,q=r?t:u.r,p=B.a1(12)
p=B.E(C.K,B.b2(u.c,$.ap,t,t,20),C.r,t,t,new B.O(C.a9,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a7(B.C(B.a([B.i(u.d,t,t,t,t,C.bS,t,t,t),B.i(u.e,t,t,t,t,C.fz,t,t,t)],x),C.H,C.j,C.m,0,C.v),1)
v=$.ap
return B.eJ(!1,s,!0,new B.R(C.ng,B.Q(B.a([p,C.ah,w,r?B.aL(B.anu(t,v,t,t,t,t,t,2,t,t),20,20):B.b2(K.vd,v,t,t,20)],x),C.w,C.j,C.m,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["y(r8)","P(P,r8)","F<~>(lK)","P(P,FG)","P(P,M8)","r8()"])
A.b6T.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a3(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jS(new A.a5i(new B.a3(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a5i<+(1?,2?),+(h8?,h8?)>")))}},
$S:20}
A.bWJ.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("by(1)")}}
A.bWK.prototype={
$2(d,e){this.a.c=new B.h8(d,e)
this.b.$1(1)},
$S:22}
A.bWI.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:20}
A.cBp.prototype={
$1(d){return C.k.aq(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:154}
A.brJ.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.brK.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.brD.prototype={
$2(d,e){return d+e.gFp()},
$S:z+3}
A.brH.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.brI.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.ln(x,w>0?w:x))},
$S:z+1}
A.brC.prototype={
$2(d,e){var x=e.gFp()
return d+(x+G.ln(x,e.r))},
$S:z+3}
A.brF.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.brG.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.ln(x,w>0?w:x)},
$S:z+1}
A.brE.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cAp.prototype={
$1(d){return d.length!==0},
$S:8}
A.czK.prototype={
$1(d){var x=J.a6(d),w=y.Y
if(this.a)x=A.cAi(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cx(x==null?"Parceiro":x)}return x},
$S:451}
A.czL.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cx(x==null?"":x)},
$S:451}
A.czJ.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a6(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cAi(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cx(k)
k=l?p:J.h(m,"booking_number")
k=I.cDo(k,x,l?p:J.h(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGZ.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bHc.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cUQ(n.h(o,"amount"))
s=A.d7t(n.h(o,"paid_at"))
r=A.d7t(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cx(o==null?"":o)
n=q.e.$1(m)
return new A.r8(k,w,j,v,u,t,s,r,o,n,A.cUQ(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bUV.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bUW.prototype={
$0(){return this.a.d=null},
$S:0}
A.bV_.prototype={
$0(){return this.a.zB("pdf",new A.bUZ(this.b))},
$S:0}
A.bUZ.prototype={
$1(d){return this.aEs(d)},
aEs(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cJL(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.cVL(d,"pdf")
B.cm("files")
v=F.ZH(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bV0.prototype={
$0(){return this.a.zB("xlsx",new A.bUY(this.b))},
$S:0}
A.bUY.prototype={
$1(d){return this.aEr(d)},
aEr(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dHi(d,u.a)
B.cm("files")
s=E.cVL(d,"xlsx")
B.cm("files")
v=F.ZH(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bV1.prototype={
$0(){return this.a.zB("rec",new A.bUX(this.b))},
$S:0}
A.bUX.prototype={
$1(d){return this.aEq(d)},
aEq(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cJy(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.cVL(new A.lK("Comprovativos",d.b,d.c,d.d,D.Wl,D.Wm,null),"pdf")
B.cm("files")
x=3
return B.d(F.ZH(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.b6T,A.bWJ,A.bWI,A.cBp,A.brJ,A.brH,A.brF,A.cAp,A.czK,A.czL,A.bUZ,A.bUY,A.bUX])
w(A.a5i,B.f6)
x(B.H,[A.Od,A.FG,A.r8,A.lK])
x(B.cR,[A.bWK,A.brK,A.brD,A.brI,A.brC,A.brG,A.brE])
x(B.bR,[A.czJ,A.bUV,A.bUW,A.bV_,A.bV0,A.bV1])
w(A.DC,B.J)
w(A.aFE,B.a_)
w(A.YN,B.L)})()
B.bs(b.typeUniverse,JSON.parse('{"a5i":{"f6":[]},"DC":{"J":[],"e":[],"f":[]},"aFE":{"a_":["DC"]},"YN":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c3<c,c>"),b:x("r<FG>"),P:x("r<r8>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Od<@>>"),j:x("t<@>"),c:x("a4<c,@>"),f:x("a4<@,@>"),d:x("by"),e:x("lK"),N:x("c"),U:x("a5<c>"),q:x("ds"),i:x("P"),z:x("@"),Y:x("a4<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Wm=x([],B.w("r<a7j>"))
D.Wl=x([],B.w("r<M8>"))
D.bJ4={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bGr=new B.c3(D.bJ4,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bII={deposit:0,final_payment:1,guest_share:2}
D.bGZ=new B.c3(D.bII,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIW={paid:0,pending:1,failed:2,refunded:3}
D.bHc=new B.c3(D.bIW,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.ccJ=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bYy=new B.bI(D.ccJ,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)})()};
(a=>{a["K4be2dTUkZuVErqn8xMmSBitRHo="]=a.current})($__dart_deferred_initializers__);