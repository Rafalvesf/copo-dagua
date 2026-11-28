((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
ds5(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aQ($.aU,x.i("aQ<+(1,2)>")),v=new A.Ow(d.a,e.i("Ow<0>")),u=new A.Ow(d.b,f.i("Ow<0>"))
A.dBE(B.a([v,u],y.a),new A.b7A(new B.PH(w,x.i("PH<+(1,2)>")),v,u,e,f))
return w},
dBE(d,e){var x={},w=x.a=x.b=0,v=new A.bZ2(x,d,e)
for(;w<2;++w)d[w].blb(v)},
b7A:function b7A(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5M:function a5M(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Ow:function Ow(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bZ3:function bZ3(d,e){this.a=d
this.b=e},
bZ4:function bZ4(d,e){this.a=d
this.b=e},
bZ2:function bZ2(d,e,f){this.a=d
this.b=e
this.c=f},
akF(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akF=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return B.d(B.ale(),$async$akF)
case 6:t=e
$.cJt=B.dv(J.i(t,"platform_commission_percentage"))
$.d_v=B.b5T(J.i(t,"organizer_fee_tiers"),$.cJt)
s=J.i(t,"partner_fee_tiers")
r=new A.cFF()
if(y.j.b(s)&&J.dR(s)){q=B.a([],y.s)
for(n=J.be(s,y.f),m=B.u(n),n=new B.ag(n,n.gA(n),m.i("ag<V.E>")),m=m.i("V.E");n.q();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.p(r.$1(B.dv(J.i(p,"pct"))))+"% acima":B.p(r.$1(B.dv(J.i(p,"pct"))))+"% at\xe9 "+B.aJ(B.dv(J.i(p,"up_to")),!1)
J.bb(q,l)}$.cJu=J.kJ(q,", ")}else{k=B.aD(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cJu=o>0?B.p(r.$1(o))+"%":""}v=1
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
return B.m($async$akF,w)},
cZX(d){var x
if(typeof d=="number")x=d
else{x=B.eV(B.p(d))
if(x==null)x=0}return x},
dcI(d){var x
if(d==null)x=null
else{x=B.d2(B.p(d))
x=x==null?null:x.dH()}return x},
cEm(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cy(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.B(J.cy(x==null?"":x))],y.s),new A.cEt(),y.U).a2(0," & ")
return x.length===0?"Cliente":x},
cZp(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.c8(a0),w=x.gX(a0);w.q();){v=w.gE(w)
f.j(0,B.Y(J.i(v,"id")),v)}u=new A.cDN(a2)
t=new A.cDO()
w=B.a([],y.P)
for(v=J.c8(a1),s=v.gX(a1);s.q();)w.push(new A.cDM(f,s.gE(s),a2,d,t).$0())
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
o=I.cHO(p,J.cy(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d2(B.p(m))
m=m==null?h:m.dH()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cy(l==null?"":l)
k=D.bG9.h(0,s.h(v,i))
if(k==null)k=B.p(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eV(B.p(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FN(o,p,n,m,l,k,j,v==null?0:v))}return new A.lU(e,d,g,w,D.W1,D.W2,h)},
cFF:function cFF(){},
FN:function FN(d,e,f,g,h,i,j,k){var _=this
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
lU:function lU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bt5:function bt5(){},
bt6:function bt6(){},
bt_:function bt_(){},
bt3:function bt3(){},
bt4:function bt4(){},
bsZ:function bsZ(){},
bt1:function bt1(){},
bt2:function bt2(){},
bt0:function bt0(){},
cEt:function cEt(){},
cDN:function cDN(d){this.a=d},
cDO:function cDO(){},
cDM:function cDM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DL:function DL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGe:function aGe(){this.c=this.a=this.d=null},
bXf:function bXf(d,e){this.a=d
this.b=e},
bXg:function bXg(d){this.a=d},
bXk:function bXk(d,e){this.a=d
this.b=e},
bXj:function bXj(d){this.a=d},
bXl:function bXl(d,e){this.a=d
this.b=e},
bXi:function bXi(d){this.a=d},
bXm:function bXm(d,e){this.a=d
this.b=e},
bXh:function bXh(d){this.a=d},
Za:function Za(d,e,f,g,h,i){var _=this
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
A.a5M.prototype={
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
A.Ow.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
blb(d){this.a.cs(new A.bZ3(this,d),new A.bZ4(this,d),y.d)}}
A.FN.prototype={
gFf(){var x=this.r-this.w
return x<0?0:x}}
A.r9.prototype={
gbvF(){return this.e==="Pago"},
gpQ(d){var x=this.z
return x>0?x:this.f}}
A.lU.prototype={
gaAW(){var x=this.d
return new B.a6(x,new A.bt5(),B.a8(x).i("a6<1>")).cU(0,0,new A.bt6())},
gaxD(){return C.e.cU(this.c,0,new A.bt_())},
gaAX(){var x=this.d
return new B.a6(x,new A.bt3(),B.a8(x).i("a6<1>")).cU(0,0,new A.bt4())},
gaxE(){return C.e.cU(this.c,0,new A.bsZ())},
gbyK(){var x=this.d
return new B.a6(x,new A.bt1(),B.a8(x).i("a6<1>")).cU(0,0,new A.bt2())},
gaxT(){return C.e.cU(this.e,0,new A.bt0())}}
A.DL.prototype={
R(){return new A.aGe()},
lZ(d){return this.e.$0()}}
A.aGe.prototype={
zs(d,e){return this.bfw(d,e)},
bfw(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zs=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bXf(r,d))
u=4
q=null
x=7
return B.d(A.ds5(new B.X(r.a.lZ(0),B.dd("files","")),y.e,y.z),$async$zs)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zs)
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
if(r.c!=null)r.p(new A.bXg(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zs,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.x(v,B.y(B.a([new A.Za(L.Oz,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bXk(w,t),v),H.Cn,new A.Za(C.E3,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bXl(w,t),v),H.Cn,new A.Za(C.qe,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bXm(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.I(C.t,v,v,s,C.br,v,C.x),v,v,v,C.i6,v,v,v)}}
A.Za.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.x(C.K,B.b9(u.c,$.au,t,t,20),C.r,t,t,new B.I(C.a3,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a5(B.y(B.a([B.h(u.d,t,t,t,t,C.bx,t,t),B.h(u.e,t,t,t,t,C.hg,t,t)],x),C.G,C.h,C.l),1)
v=$.au
return B.eY(!1,s,!0,new B.S(C.nl,B.O(B.a([p,C.af,w,r?B.aK(B.ao0(t,v,t,t,t,t,t,2,t,t),20,20):B.b9(K.ve,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["B(r9)","T(T,r9)","F<~>(lU)","T(T,FN)","T(T,Mo)","r9()"])
A.b7A.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dF(0,new B.X(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jF(new A.a5M(new B.X(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a5M<+(1?,2?),+(hg?,hg?)>")))}},
$S:14}
A.bZ3.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bm(1)")}}
A.bZ4.prototype={
$2(d,e){this.a.c=new B.hg(d,e)
this.b.$1(1)},
$S:25}
A.bZ2.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:14}
A.cFF.prototype={
$1(d){return C.k.aI(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:181}
A.bt5.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt6.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bt_.prototype={
$2(d,e){return d+e.gFf()},
$S:z+3}
A.bt3.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt4.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lv(x,w>0?w:x))},
$S:z+1}
A.bsZ.prototype={
$2(d,e){var x=e.gFf()
return d+(x+G.lv(x,e.r))},
$S:z+3}
A.bt1.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt2.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lv(x,w>0?w:x)},
$S:z+1}
A.bt0.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cEt.prototype={
$1(d){return d.length!==0},
$S:6}
A.cDN.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cEm(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cy(x==null?"Parceiro":x)}return x},
$S:517}
A.cDO.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cy(x==null?"":x)},
$S:517}
A.cDM.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cEm(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cy(k)
k=l?p:J.i(m,"booking_number")
k=I.cHO(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGG.h(0,n.h(o,"type"))
if(v==null)v=B.p(n.h(o,"type"))
u=D.bGT.h(0,n.h(o,"status"))
if(u==null)u=B.p(n.h(o,"status"))
t=A.cZX(n.h(o,"amount"))
s=A.dcI(n.h(o,"paid_at"))
r=A.dcI(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cy(o==null?"":o)
n=q.e.$1(m)
return new A.r9(k,w,j,v,u,t,s,r,o,n,A.cZX(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bXf.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bXg.prototype={
$0(){return this.a.d=null},
$S:0}
A.bXk.prototype={
$0(){return this.a.zs("pdf",new A.bXj(this.b))},
$S:0}
A.bXj.prototype={
$1(d){return this.aE5(d)},
aE5(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=3
return B.d(E.cOI(d,u.a),$async$$1)
case 3:t=f
B.cn("files")
s=E.d_T(d,"pdf")
B.cn("files")
v=F.a_4(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXl.prototype={
$0(){return this.a.zs("xlsx",new A.bXi(this.b))},
$S:0}
A.bXi.prototype={
$1(d){return this.aE4(d)},
aE4(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
t=E.dNd(d,u.a)
B.cn("files")
s=E.d_T(d,"xlsx")
B.cn("files")
v=F.a_4(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXm.prototype={
$0(){return this.a.zs("rec",new A.bXh(this.b))},
$S:0}
A.bXh.prototype={
$1(d){return this.aE3(d)},
aE3(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=2
return B.d(E.cOv(d,v.a),$async$$1)
case 2:u=f
B.cn("files")
t=E.d_T(new A.lU("Comprovativos",d.b,d.c,d.d,D.W1,D.W2,null),"pdf")
B.cn("files")
x=3
return B.d(F.a_4(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bt,[A.b7A,A.bZ3,A.bZ2,A.cFF,A.bt5,A.bt3,A.bt1,A.cEt,A.cDN,A.cDO,A.bXj,A.bXi,A.bXh])
w(A.a5M,B.f8)
x(B.M,[A.Ow,A.FN,A.r9,A.lU])
x(B.cK,[A.bZ4,A.bt6,A.bt_,A.bt4,A.bsZ,A.bt2,A.bt0])
x(B.bL,[A.cDM,A.bXf,A.bXg,A.bXk,A.bXl,A.bXm])
w(A.DL,B.H)
w(A.aGe,B.a_)
w(A.Za,B.L)})()
B.br(b.typeUniverse,JSON.parse('{"a5M":{"f8":[]},"DL":{"H":[],"e":[],"f":[]},"aGe":{"a_":["DL"]},"Za":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.z
return{w:x("c6<c,c>"),b:x("r<FN>"),P:x("r<r9>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Ow<@>>"),j:x("t<@>"),c:x("a3<c,@>"),f:x("a3<@,@>"),d:x("bm"),e:x("lU"),N:x("c"),U:x("a6<c>"),q:x("dl"),i:x("T"),z:x("@"),Y:x("a3<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.W2=x([],B.z("r<a7O>"))
D.W1=x([],B.z("r<Mo>"))
D.bIK={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bG9=new B.c6(D.bIK,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIn={deposit:0,final_payment:1,guest_share:2}
D.bGG=new B.c6(D.bIn,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIB={paid:0,pending:1,failed:2,refunded:3}
D.bGT=new B.c6(D.bIB,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c7N=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.bZm=new B.bG(D.c7N,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["JXy2v3ICzUPOI5oy+QbP+tdC9ds="]=a.current})($__dart_deferred_initializers__);