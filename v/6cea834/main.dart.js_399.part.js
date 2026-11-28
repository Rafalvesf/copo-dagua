((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dsL(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aQ($.aU,x.i("aQ<+(1,2)>")),v=new A.OH(d.a,e.i("OH<0>")),u=new A.OH(d.b,f.i("OH<0>"))
A.dCi(B.a([v,u],y.a),new A.b7P(new B.PS(w,x.i("PS<+(1,2)>")),v,u,e,f))
return w},
dCi(d,e){var x={},w=x.a=x.b=0,v=new A.bZt(x,d,e)
for(;w<2;++w)d[w].blj(v)},
b7P:function b7P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5X:function a5X(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
OH:function OH(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bZu:function bZu(d,e){this.a=d
this.b=e},
bZv:function bZv(d,e){this.a=d
this.b=e},
bZt:function bZt(d,e,f){this.a=d
this.b=e
this.c=f},
akO(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akO=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return B.d(B.aln(),$async$akO)
case 6:t=e
$.cJZ=B.ds(J.h(t,"platform_commission_percentage"))
$.d04=B.b66(J.h(t,"organizer_fee_tiers"),$.cJZ)
s=J.h(t,"partner_fee_tiers")
r=new A.cG8()
if(y.j.b(s)&&J.dR(s)){q=B.a([],y.s)
for(n=J.bf(s,y.f),m=B.u(n),n=new B.af(n,n.gA(n),m.i("af<V.E>")),m=m.i("V.E");n.q();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.p(r.$1(B.ds(J.h(p,"pct"))))+"% acima":B.p(r.$1(B.ds(J.h(p,"pct"))))+"% at\xe9 "+B.aJ(B.ds(J.h(p,"up_to")),!1)
J.ba(q,l)}$.cK_=J.kL(q,", ")}else{k=B.aD(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cK_=o>0?B.p(r.$1(o))+"%":""}v=1
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
return B.m($async$akO,w)},
d_w(d){var x
if(typeof d=="number")x=d
else{x=B.eV(B.p(d))
if(x==null)x=0}return x},
ddm(d){var x
if(d==null)x=null
else{x=B.d3(B.p(d))
x=x==null?null:x.dI()}return x},
cER(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cy(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.B(J.cy(x==null?"":x))],y.s),new A.cEY(),y.U).a2(0," & ")
return x.length===0?"Cliente":x},
d__(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.D(g,y.c)
for(x=J.ca(a0),w=x.gX(a0);w.q();){v=w.gE(w)
f.j(0,B.Y(J.h(v,"id")),v)}u=new A.cEh(a2)
t=new A.cEi()
w=B.a([],y.P)
for(v=J.ca(a1),s=v.gX(a1);s.q();)w.push(new A.cEg(f,s.gE(s),a2,d,t).$0())
r=B.D(g,y.i)
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
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.cIh(p,J.cy(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d3(B.p(m))
m=m==null?h:m.dI()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cy(l==null?"":l)
k=D.bGe.h(0,s.h(v,i))
if(k==null)k=B.p(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eV(B.p(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FT(o,p,n,m,l,k,j,v==null?0:v))}return new A.lU(e,d,g,w,D.W5,D.W6,h)},
cG8:function cG8(){},
FT:function FT(d,e,f,g,h,i,j,k){var _=this
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
lU:function lU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
btv:function btv(){},
btw:function btw(){},
btp:function btp(){},
btt:function btt(){},
btu:function btu(){},
bto:function bto(){},
btr:function btr(){},
bts:function bts(){},
btq:function btq(){},
cEY:function cEY(){},
cEh:function cEh(d){this.a=d},
cEi:function cEi(){},
cEg:function cEg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DP:function DP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGp:function aGp(){this.c=this.a=this.d=null},
bXG:function bXG(d,e){this.a=d
this.b=e},
bXH:function bXH(d){this.a=d},
bXL:function bXL(d,e){this.a=d
this.b=e},
bXK:function bXK(d){this.a=d},
bXM:function bXM(d,e){this.a=d
this.b=e},
bXJ:function bXJ(d){this.a=d},
bXN:function bXN(d,e){this.a=d
this.b=e},
bXI:function bXI(d){this.a=d},
Zh:function Zh(d,e,f,g,h,i){var _=this
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
D=c[443]
L=c[433]
A.a5X.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.p(u.a)},
gmZ(){var x=this.c
x=x==null?null:x.b
return x==null?B.f9.prototype.gmZ.call(this):x}}
A.OH.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
blj(d){this.a.cr(new A.bZu(this,d),new A.bZv(this,d),y.d)}}
A.FT.prototype={
gFi(){var x=this.r-this.w
return x<0?0:x}}
A.rb.prototype={
gbvP(){return this.e==="Pago"},
gpU(d){var x=this.z
return x>0?x:this.f}}
A.lU.prototype={
gaB_(){var x=this.d
return new B.a6(x,new A.btv(),B.a8(x).i("a6<1>")).cV(0,0,new A.btw())},
gaxG(){return C.e.cV(this.c,0,new A.btp())},
gaB0(){var x=this.d
return new B.a6(x,new A.btt(),B.a8(x).i("a6<1>")).cV(0,0,new A.btu())},
gaxH(){return C.e.cV(this.c,0,new A.bto())},
gbyT(){var x=this.d
return new B.a6(x,new A.btr(),B.a8(x).i("a6<1>")).cV(0,0,new A.bts())},
gaxW(){return C.e.cV(this.e,0,new A.btq())}}
A.DP.prototype={
R(){return new A.aGp()},
m0(d){return this.e.$0()}}
A.aGp.prototype={
zu(d,e){return this.bfG(d,e)},
bfG(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zu=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bXG(r,d))
u=4
q=null
x=7
return B.d(A.dsL(new B.X(r.a.m0(0),B.dd("files","")),y.e,y.z),$async$zu)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zu)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a0(D.bZx)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bXH(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zu,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.x(v,B.y(B.a([new A.Zh(L.OD,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bXL(w,t),v),H.Cp,new A.Zh(C.vg,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bXM(w,t),v),H.Cp,new A.Zh(C.qe,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bXN(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.J(C.t,v,v,s,C.bs,v,C.x),v,v,v,C.i7,v,v,v)}}
A.Zh.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.x(C.K,B.b9(u.c,$.au,t,t,20),C.r,t,t,new B.J(C.a3,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a5(B.y(B.a([B.i(u.d,t,t,t,t,C.bx,t,t),B.i(u.e,t,t,t,t,C.hg,t,t)],x),C.G,C.h,C.l),1)
v=$.au
return B.eZ(!1,s,!0,new B.S(C.nj,B.O(B.a([p,C.af,w,r?B.aK(B.ao9(t,v,t,t,t,t,t,2,t,t),20,20):B.b9(K.vd,v,t,t,20)],x),C.u,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["B(rb)","T(T,rb)","F<~>(lU)","T(T,FT)","T(T,Mx)","rb()"])
A.b7P.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dF(0,new B.X(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jH(new A.a5X(new B.X(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a5X<+(1?,2?),+(hi?,hi?)>")))}},
$S:14}
A.bZu.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bm(1)")}}
A.bZv.prototype={
$2(d,e){this.a.c=new B.hi(d,e)
this.b.$1(1)},
$S:25}
A.bZt.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:14}
A.cG8.prototype={
$1(d){return C.k.aK(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:178}
A.btv.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btw.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.btp.prototype={
$2(d,e){return d+e.gFi()},
$S:z+3}
A.btt.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btu.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lv(x,w>0?w:x))},
$S:z+1}
A.bto.prototype={
$2(d,e){var x=e.gFi()
return d+(x+G.lv(x,e.r))},
$S:z+3}
A.btr.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bts.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lv(x,w>0?w:x)},
$S:z+1}
A.btq.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cEY.prototype={
$1(d){return d.length!==0},
$S:6}
A.cEh.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cER(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cy(x==null?"Parceiro":x)}return x},
$S:480}
A.cEi.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cy(x==null?"":x)},
$S:480}
A.cEg.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cER(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cy(k)
k=l?p:J.h(m,"booking_number")
k=I.cIh(k,x,l?p:J.h(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGL.h(0,n.h(o,"type"))
if(v==null)v=B.p(n.h(o,"type"))
u=D.bGY.h(0,n.h(o,"status"))
if(u==null)u=B.p(n.h(o,"status"))
t=A.d_w(n.h(o,"amount"))
s=A.ddm(n.h(o,"paid_at"))
r=A.ddm(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cy(o==null?"":o)
n=q.e.$1(m)
return new A.rb(k,w,j,v,u,t,s,r,o,n,A.d_w(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bXG.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bXH.prototype={
$0(){return this.a.d=null},
$S:0}
A.bXL.prototype={
$0(){return this.a.zu("pdf",new A.bXK(this.b))},
$S:0}
A.bXK.prototype={
$1(d){return this.aEb(d)},
aEb(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=3
return B.d(E.cPh(d,u.a),$async$$1)
case 3:t=f
B.cn("files")
s=E.d0s(d,"pdf")
B.cn("files")
v=F.a_b(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXM.prototype={
$0(){return this.a.zu("xlsx",new A.bXJ(this.b))},
$S:0}
A.bXJ.prototype={
$1(d){return this.aEa(d)},
aEa(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
t=E.dNW(d,u.a)
B.cn("files")
s=E.d0s(d,"xlsx")
B.cn("files")
v=F.a_b(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXN.prototype={
$0(){return this.a.zu("rec",new A.bXI(this.b))},
$S:0}
A.bXI.prototype={
$1(d){return this.aE9(d)},
aE9(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=2
return B.d(E.cP4(d,v.a),$async$$1)
case 2:u=f
B.cn("files")
t=E.d0s(new A.lU("Comprovativos",d.b,d.c,d.d,D.W5,D.W6,null),"pdf")
B.cn("files")
x=3
return B.d(F.a_b(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bu,[A.b7P,A.bZu,A.bZt,A.cG8,A.btv,A.btt,A.btr,A.cEY,A.cEh,A.cEi,A.bXK,A.bXJ,A.bXI])
w(A.a5X,B.f9)
x(B.M,[A.OH,A.FT,A.rb,A.lU])
x(B.cL,[A.bZv,A.btw,A.btp,A.btu,A.bto,A.bts,A.btq])
x(B.bL,[A.cEg,A.bXG,A.bXH,A.bXL,A.bXM,A.bXN])
w(A.DP,B.G)
w(A.aGp,B.a_)
w(A.Zh,B.L)})()
B.br(b.typeUniverse,JSON.parse('{"a5X":{"f9":[]},"DP":{"G":[],"e":[],"f":[]},"aGp":{"a_":["DP"]},"Zh":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.C
return{w:x("c7<c,c>"),b:x("r<FT>"),P:x("r<rb>"),s:x("r<c>"),p:x("r<e>"),a:x("r<OH<@>>"),j:x("t<@>"),c:x("a3<c,@>"),f:x("a3<@,@>"),d:x("bm"),e:x("lU"),N:x("c"),U:x("a6<c>"),q:x("dl"),i:x("T"),z:x("@"),Y:x("a3<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.W6=x([],B.C("r<a7Z>"))
D.W5=x([],B.C("r<Mx>"))
D.bIP={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bGe=new B.c7(D.bIP,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIs={deposit:0,final_payment:1,guest_share:2}
D.bGL=new B.c7(D.bIs,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIG={paid:0,pending:1,failed:2,refunded:3}
D.bGY=new B.c7(D.bIG,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c7Z=new B.E("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.bZx=new B.bF(D.c7Z,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["i3/uU1ryCnEViBh9nOgqMkTyk/g="]=a.current})($__dart_deferred_initializers__);