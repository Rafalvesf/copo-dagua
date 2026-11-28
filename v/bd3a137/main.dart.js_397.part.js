((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
drL(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aQ($.aV,x.i("aQ<+(1,2)>")),v=new A.Ou(d.a,e.i("Ou<0>")),u=new A.Ou(d.b,f.i("Ou<0>"))
A.dBj(B.a([v,u],y.a),new A.b7t(new B.PF(w,x.i("PF<+(1,2)>")),v,u,e,f))
return w},
dBj(d,e){var x={},w=x.a=x.b=0,v=new A.bYQ(x,d,e)
for(;w<2;++w)d[w].bl6(v)},
b7t:function b7t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5H:function a5H(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Ou:function Ou(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bYR:function bYR(d,e){this.a=d
this.b=e},
bYS:function bYS(d,e){this.a=d
this.b=e},
bYQ:function bYQ(d,e,f){this.a=d
this.b=e
this.c=f},
akA(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akA=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.Q().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").ai(0,"*").U("id",1).dO(0),$async$akA)
case 6:t=e
$.cJb=B.dv(J.i(t,"platform_commission_percentage"))
$.d_b=B.b5M(J.i(t,"organizer_fee_tiers"),$.cJb)
s=J.i(t,"partner_fee_tiers")
r=new A.cFq()
if(y.j.b(s)&&J.dL(s)){q=B.a([],y.s)
for(n=J.be(s,y.f),m=B.u(n),n=new B.ag(n,n.gA(n),m.i("ag<V.E>")),m=m.i("V.E");n.q();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.p(r.$1(B.dv(J.i(p,"pct"))))+"% acima":B.p(r.$1(B.dv(J.i(p,"pct"))))+"% at\xe9 "+B.aJ(B.dv(J.i(p,"up_to")),!1)
J.br(q,l)}$.cJc=J.kI(q,", ")}else{k=B.aD(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cJc=o>0?B.p(r.$1(o))+"%":""}v=1
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
return B.m($async$akA,w)},
cZD(d){var x
if(typeof d=="number")x=d
else{x=B.eV(B.p(d))
if(x==null)x=0}return x},
dco(d){var x
if(d==null)x=null
else{x=B.d2(B.p(d))
x=x==null?null:x.dG()}return x},
cE7(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cy(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.B(J.cy(x==null?"":x))],y.s),new A.cEe(),y.U).a1(0," & ")
return x.length===0?"Cliente":x},
cZ5(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.c9(a0),w=x.gX(a0);w.q();){v=w.gE(w)
f.j(0,B.Y(J.i(v,"id")),v)}u=new A.cDz(a2)
t=new A.cDA()
w=B.a([],y.P)
for(v=J.c9(a1),s=v.gX(a1);s.q();)w.push(new A.cDy(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.q();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.Y(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.eV(B.p(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.q();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cHw(p,J.cy(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d2(B.p(m))
m=m==null?h:m.dG()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cy(l==null?"":l)
k=D.bG9.h(0,s.h(v,i))
if(k==null)k=B.p(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eV(B.p(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FL(o,p,n,m,l,k,j,v==null?0:v))}return new A.lT(e,d,g,w,D.W0,D.W1,h)},
cFq:function cFq(){},
FL:function FL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
r9:function r9(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lT:function lT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bsZ:function bsZ(){},
bt_:function bt_(){},
bsT:function bsT(){},
bsX:function bsX(){},
bsY:function bsY(){},
bsS:function bsS(){},
bsV:function bsV(){},
bsW:function bsW(){},
bsU:function bsU(){},
cEe:function cEe(){},
cDz:function cDz(d){this.a=d},
cDA:function cDA(){},
cDy:function cDy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DI:function DI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aG7:function aG7(){this.c=this.a=this.d=null},
bX2:function bX2(d,e){this.a=d
this.b=e},
bX3:function bX3(d){this.a=d},
bX7:function bX7(d,e){this.a=d
this.b=e},
bX6:function bX6(d){this.a=d},
bX8:function bX8(d,e){this.a=d
this.b=e},
bX5:function bX5(d){this.a=d},
bX9:function bX9(d,e){this.a=d
this.b=e},
bX4:function bX4(d){this.a=d},
Z7:function Z7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[291]
F=c[146]
K=c[331]
I=c[152]
E=c[69]
G=c[153]
A=a.updateHolder(c[134],A)
D=c[442]
L=c[432]
A.a5H.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.p(u.a)},
gmX(){var x=this.c
x=x==null?null:x.b
return x==null?B.f8.prototype.gmX.call(this):x}}
A.Ou.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bl6(d){this.a.cB(new A.bYR(this,d),new A.bYS(this,d),y.d)}}
A.FL.prototype={
gFc(){var x=this.r-this.w
return x<0?0:x}}
A.r9.prototype={
gbvx(){return this.e==="Pago"},
gpQ(d){var x=this.z
return x>0?x:this.f}}
A.lT.prototype={
gaAT(){var x=this.d
return new B.a6(x,new A.bsZ(),B.a8(x).i("a6<1>")).cU(0,0,new A.bt_())},
gaxA(){return C.e.cU(this.c,0,new A.bsT())},
gaAU(){var x=this.d
return new B.a6(x,new A.bsX(),B.a8(x).i("a6<1>")).cU(0,0,new A.bsY())},
gaxB(){return C.e.cU(this.c,0,new A.bsS())},
gbyC(){var x=this.d
return new B.a6(x,new A.bsV(),B.a8(x).i("a6<1>")).cU(0,0,new A.bsW())},
gaxQ(){return C.e.cU(this.e,0,new A.bsU())}}
A.DI.prototype={
R(){return new A.aG7()},
lZ(d){return this.e.$0()}}
A.aG7.prototype={
zp(d,e){return this.bfs(d,e)},
bfs(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zp=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bX2(r,d))
u=4
q=null
x=7
return B.d(A.drL(new B.X(r.a.lZ(0),B.dd("files","")),y.e,y.z),$async$zp)
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
if(n!=null)n.O(y.q).f.a0(D.bZm)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bX3(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zp,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.x(v,B.y(B.a([new A.Z7(L.Oy,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bX7(w,t),v),H.Cm,new A.Z7(C.E2,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bX8(w,t),v),H.Cm,new A.Z7(C.qd,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bX9(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.I(C.t,v,v,s,C.bq,v,C.x),v,v,v,C.i5,v,v,v)}}
A.Z7.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.x(C.K,B.b9(u.c,$.au,t,t,20),C.r,t,t,new B.I(C.a4,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.y(B.a([B.h(u.d,t,t,t,t,C.bx,t,t),B.h(u.e,t,t,t,t,C.hg,t,t)],x),C.G,C.h,C.l),1)
v=$.au
return B.eY(!1,s,!0,new B.S(C.nk,B.O(B.a([p,C.af,w,r?B.aK(B.anV(t,v,t,t,t,t,t,2,t,t),20,20):B.b9(K.vd,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["C(r9)","T(T,r9)","F<~>(lT)","T(T,FL)","T(T,Mm)","r9()"])
A.b7t.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dE(0,new B.X(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jF(new A.a5H(new B.X(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a5H<+(1?,2?),+(hf?,hf?)>")))}},
$S:15}
A.bYR.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bl(1)")}}
A.bYS.prototype={
$2(d,e){this.a.c=new B.hf(d,e)
this.b.$1(1)},
$S:25}
A.bYQ.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cFq.prototype={
$1(d){return C.k.aI(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:164}
A.bsZ.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt_.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bsT.prototype={
$2(d,e){return d+e.gFc()},
$S:z+3}
A.bsX.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsY.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lv(x,w>0?w:x))},
$S:z+1}
A.bsS.prototype={
$2(d,e){var x=e.gFc()
return d+(x+G.lv(x,e.r))},
$S:z+3}
A.bsV.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsW.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lv(x,w>0?w:x)},
$S:z+1}
A.bsU.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cEe.prototype={
$1(d){return d.length!==0},
$S:6}
A.cDz.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cE7(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cy(x==null?"Parceiro":x)}return x},
$S:375}
A.cDA.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cy(x==null?"":x)},
$S:375}
A.cDy.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cE7(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cy(k)
k=l?p:J.i(m,"booking_number")
k=I.cHw(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGG.h(0,n.h(o,"type"))
if(v==null)v=B.p(n.h(o,"type"))
u=D.bGT.h(0,n.h(o,"status"))
if(u==null)u=B.p(n.h(o,"status"))
t=A.cZD(n.h(o,"amount"))
s=A.dco(n.h(o,"paid_at"))
r=A.dco(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cy(o==null?"":o)
n=q.e.$1(m)
return new A.r9(k,w,j,v,u,t,s,r,o,n,A.cZD(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bX2.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bX3.prototype={
$0(){return this.a.d=null},
$S:0}
A.bX7.prototype={
$0(){return this.a.zp("pdf",new A.bX6(this.b))},
$S:0}
A.bX6.prototype={
$1(d){return this.aE2(d)},
aE2(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=3
return B.d(E.cOo(d,u.a),$async$$1)
case 3:t=f
B.cn("files")
s=E.d_z(d,"pdf")
B.cn("files")
v=F.a_1(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bX8.prototype={
$0(){return this.a.zp("xlsx",new A.bX5(this.b))},
$S:0}
A.bX5.prototype={
$1(d){return this.aE1(d)},
aE1(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
t=E.dMT(d,u.a)
B.cn("files")
s=E.d_z(d,"xlsx")
B.cn("files")
v=F.a_1(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bX9.prototype={
$0(){return this.a.zp("rec",new A.bX4(this.b))},
$S:0}
A.bX4.prototype={
$1(d){return this.aE0(d)},
aE0(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=2
return B.d(E.cOb(d,v.a),$async$$1)
case 2:u=f
B.cn("files")
t=E.d_z(new A.lT("Comprovativos",d.b,d.c,d.d,D.W0,D.W1,null),"pdf")
B.cn("files")
x=3
return B.d(F.a_1(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bt,[A.b7t,A.bYR,A.bYQ,A.cFq,A.bsZ,A.bsX,A.bsV,A.cEe,A.cDz,A.cDA,A.bX6,A.bX5,A.bX4])
w(A.a5H,B.f8)
x(B.M,[A.Ou,A.FL,A.r9,A.lT])
x(B.cK,[A.bYS,A.bt_,A.bsT,A.bsY,A.bsS,A.bsW,A.bsU])
x(B.bL,[A.cDy,A.bX2,A.bX3,A.bX7,A.bX8,A.bX9])
w(A.DI,B.G)
w(A.aG7,B.a_)
w(A.Z7,B.L)})()
B.bq(b.typeUniverse,JSON.parse('{"a5H":{"f8":[]},"DI":{"G":[],"e":[],"f":[]},"aG7":{"a_":["DI"]},"Z7":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.z
return{w:x("c6<c,c>"),b:x("r<FL>"),P:x("r<r9>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Ou<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bl"),e:x("lT"),N:x("c"),U:x("a6<c>"),q:x("dl"),i:x("T"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.W1=x([],B.z("r<a7J>"))
D.W0=x([],B.z("r<Mm>"))
D.bIK={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bG9=new B.c6(D.bIK,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIn={deposit:0,final_payment:1,guest_share:2}
D.bGG=new B.c6(D.bIn,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIB={paid:0,pending:1,failed:2,refunded:3}
D.bGT=new B.c6(D.bIB,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c7N=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.bZm=new B.bG(D.c7N,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["WeBz34itm1Wix3WAw/+pjDR2MOs="]=a.current})($__dart_deferred_initializers__);