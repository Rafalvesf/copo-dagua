((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dsv(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aQ($.aU,x.i("aQ<+(1,2)>")),v=new A.OD(d.a,e.i("OD<0>")),u=new A.OD(d.b,f.i("OD<0>"))
A.dC2(B.a([v,u],y.a),new A.b7P(new B.PO(w,x.i("PO<+(1,2)>")),v,u,e,f))
return w},
dC2(d,e){var x={},w=x.a=x.b=0,v=new A.bZm(x,d,e)
for(;w<2;++w)d[w].bli(v)},
b7P:function b7P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5V:function a5V(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
OD:function OD(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bZn:function bZn(d,e){this.a=d
this.b=e},
bZo:function bZo(d,e){this.a=d
this.b=e},
bZm:function bZm(d,e,f){this.a=d
this.b=e
this.c=f},
akO(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akO=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return B.d(B.aln(),$async$akO)
case 6:t=e
$.cJO=B.dv(J.h(t,"platform_commission_percentage"))
$.d_S=B.b66(J.h(t,"organizer_fee_tiers"),$.cJO)
s=J.h(t,"partner_fee_tiers")
r=new A.cFZ()
if(y.j.b(s)&&J.dR(s)){q=B.a([],y.s)
for(n=J.bf(s,y.f),m=B.u(n),n=new B.af(n,n.gA(n),m.i("af<V.E>")),m=m.i("V.E");n.q();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.p(r.$1(B.dv(J.h(p,"pct"))))+"% acima":B.p(r.$1(B.dv(J.h(p,"pct"))))+"% at\xe9 "+B.aJ(B.dv(J.h(p,"up_to")),!1)
J.b9(q,l)}$.cJP=J.kJ(q,", ")}else{k=B.aD(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cJP=o>0?B.p(r.$1(o))+"%":""}v=1
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
d_j(d){var x
if(typeof d=="number")x=d
else{x=B.eV(B.p(d))
if(x==null)x=0}return x},
dd6(d){var x
if(d==null)x=null
else{x=B.d2(B.p(d))
x=x==null?null:x.dH()}return x},
cEG(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cy(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.B(J.cy(x==null?"":x))],y.s),new A.cEN(),y.U).a2(0," & ")
return x.length===0?"Cliente":x},
cZM(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.c9(a0),w=x.gX(a0);w.q();){v=w.gE(w)
f.j(0,B.Y(J.h(v,"id")),v)}u=new A.cE6(a2)
t=new A.cE7()
w=B.a([],y.P)
for(v=J.c9(a1),s=v.gX(a1);s.q();)w.push(new A.cE5(f,s.gE(s),a2,d,t).$0())
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
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.cI7(p,J.cy(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d2(B.p(m))
m=m==null?h:m.dH()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cy(l==null?"":l)
k=D.bG9.h(0,s.h(v,i))
if(k==null)k=B.p(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eV(B.p(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FS(o,p,n,m,l,k,j,v==null?0:v))}return new A.lU(e,d,g,w,D.W2,D.W3,h)},
cFZ:function cFZ(){},
FS:function FS(d,e,f,g,h,i,j,k){var _=this
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
btn:function btn(){},
bto:function bto(){},
bth:function bth(){},
btl:function btl(){},
btm:function btm(){},
btg:function btg(){},
btj:function btj(){},
btk:function btk(){},
bti:function bti(){},
cEN:function cEN(){},
cE6:function cE6(d){this.a=d},
cE7:function cE7(){},
cE5:function cE5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DO:function DO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGr:function aGr(){this.c=this.a=this.d=null},
bXz:function bXz(d,e){this.a=d
this.b=e},
bXA:function bXA(d){this.a=d},
bXE:function bXE(d,e){this.a=d
this.b=e},
bXD:function bXD(d){this.a=d},
bXF:function bXF(d,e){this.a=d
this.b=e},
bXC:function bXC(d){this.a=d},
bXG:function bXG(d,e){this.a=d
this.b=e},
bXB:function bXB(d){this.a=d},
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
H=c[291]
F=c[146]
K=c[331]
I=c[152]
E=c[69]
G=c[153]
A=a.updateHolder(c[134],A)
D=c[442]
L=c[432]
A.a5V.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.p(u.a)},
gmY(){var x=this.c
x=x==null?null:x.b
return x==null?B.f8.prototype.gmY.call(this):x}}
A.OD.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bli(d){this.a.cs(new A.bZn(this,d),new A.bZo(this,d),y.d)}}
A.FS.prototype={
gFi(){var x=this.r-this.w
return x<0?0:x}}
A.rb.prototype={
gbvO(){return this.e==="Pago"},
gpS(d){var x=this.z
return x>0?x:this.f}}
A.lU.prototype={
gaAZ(){var x=this.d
return new B.a6(x,new A.btn(),B.a8(x).i("a6<1>")).cV(0,0,new A.bto())},
gaxG(){return C.e.cV(this.c,0,new A.bth())},
gaB_(){var x=this.d
return new B.a6(x,new A.btl(),B.a8(x).i("a6<1>")).cV(0,0,new A.btm())},
gaxH(){return C.e.cV(this.c,0,new A.btg())},
gbyT(){var x=this.d
return new B.a6(x,new A.btj(),B.a8(x).i("a6<1>")).cV(0,0,new A.btk())},
gaxW(){return C.e.cV(this.e,0,new A.bti())}}
A.DO.prototype={
R(){return new A.aGr()},
m0(d){return this.e.$0()}}
A.aGr.prototype={
zw(d,e){return this.bfF(d,e)},
bfF(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zw=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bXz(r,d))
u=4
q=null
x=7
return B.d(A.dsv(new B.X(r.a.m0(0),B.dd("files","")),y.e,y.z),$async$zw)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zw)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a0(D.bZr)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bXA(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zw,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.x(v,B.y(B.a([new A.Zg(L.OA,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bXE(w,t),v),H.Co,new A.Zg(C.E3,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bXF(w,t),v),H.Co,new A.Zg(C.qf,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bXG(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.J(C.t,v,v,s,C.br,v,C.x),v,v,v,C.i7,v,v,v)}}
A.Zg.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.x(C.K,B.ba(u.c,$.au,t,t,20),C.r,t,t,new B.J(C.a3,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a5(B.y(B.a([B.i(u.d,t,t,t,t,C.bx,t,t),B.i(u.e,t,t,t,t,C.hg,t,t)],x),C.G,C.h,C.l),1)
v=$.au
return B.eY(!1,s,!0,new B.S(C.nk,B.O(B.a([p,C.af,w,r?B.aK(B.ao9(t,v,t,t,t,t,t,2,t,t),20,20):B.ba(K.vf,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["C(rb)","T(T,rb)","F<~>(lU)","T(T,FS)","T(T,Mt)","rb()"])
A.b7P.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dF(0,new B.X(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jF(new A.a5V(new B.X(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a5V<+(1?,2?),+(hg?,hg?)>")))}},
$S:15}
A.bZn.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bm(1)")}}
A.bZo.prototype={
$2(d,e){this.a.c=new B.hg(d,e)
this.b.$1(1)},
$S:25}
A.bZm.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cFZ.prototype={
$1(d){return C.k.aI(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:179}
A.btn.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bto.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bth.prototype={
$2(d,e){return d+e.gFi()},
$S:z+3}
A.btl.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btm.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lv(x,w>0?w:x))},
$S:z+1}
A.btg.prototype={
$2(d,e){var x=e.gFi()
return d+(x+G.lv(x,e.r))},
$S:z+3}
A.btj.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btk.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lv(x,w>0?w:x)},
$S:z+1}
A.bti.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cEN.prototype={
$1(d){return d.length!==0},
$S:6}
A.cE6.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cEG(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cy(x==null?"Parceiro":x)}return x},
$S:453}
A.cE7.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cy(x==null?"":x)},
$S:453}
A.cE5.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cEG(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cy(k)
k=l?p:J.h(m,"booking_number")
k=I.cI7(k,x,l?p:J.h(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGG.h(0,n.h(o,"type"))
if(v==null)v=B.p(n.h(o,"type"))
u=D.bGT.h(0,n.h(o,"status"))
if(u==null)u=B.p(n.h(o,"status"))
t=A.d_j(n.h(o,"amount"))
s=A.dd6(n.h(o,"paid_at"))
r=A.dd6(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cy(o==null?"":o)
n=q.e.$1(m)
return new A.rb(k,w,j,v,u,t,s,r,o,n,A.d_j(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bXz.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bXA.prototype={
$0(){return this.a.d=null},
$S:0}
A.bXE.prototype={
$0(){return this.a.zw("pdf",new A.bXD(this.b))},
$S:0}
A.bXD.prototype={
$1(d){return this.aEa(d)},
aEa(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=3
return B.d(E.cP4(d,u.a),$async$$1)
case 3:t=f
B.cn("files")
s=E.d0f(d,"pdf")
B.cn("files")
v=F.a_a(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXF.prototype={
$0(){return this.a.zw("xlsx",new A.bXC(this.b))},
$S:0}
A.bXC.prototype={
$1(d){return this.aE9(d)},
aE9(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
t=E.dNF(d,u.a)
B.cn("files")
s=E.d0f(d,"xlsx")
B.cn("files")
v=F.a_a(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXG.prototype={
$0(){return this.a.zw("rec",new A.bXB(this.b))},
$S:0}
A.bXB.prototype={
$1(d){return this.aE8(d)},
aE8(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=2
return B.d(E.cOS(d,v.a),$async$$1)
case 2:u=f
B.cn("files")
t=E.d0f(new A.lU("Comprovativos",d.b,d.c,d.d,D.W2,D.W3,null),"pdf")
B.cn("files")
x=3
return B.d(F.a_a(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bu,[A.b7P,A.bZn,A.bZm,A.cFZ,A.btn,A.btl,A.btj,A.cEN,A.cE6,A.cE7,A.bXD,A.bXC,A.bXB])
w(A.a5V,B.f8)
x(B.M,[A.OD,A.FS,A.rb,A.lU])
x(B.cK,[A.bZo,A.bto,A.bth,A.btm,A.btg,A.btk,A.bti])
x(B.bL,[A.cE5,A.bXz,A.bXA,A.bXE,A.bXF,A.bXG])
w(A.DO,B.H)
w(A.aGr,B.a_)
w(A.Zg,B.L)})()
B.br(b.typeUniverse,JSON.parse('{"a5V":{"f8":[]},"DO":{"H":[],"e":[],"f":[]},"aGr":{"a_":["DO"]},"Zg":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.z
return{w:x("c6<c,c>"),b:x("r<FS>"),P:x("r<rb>"),s:x("r<c>"),p:x("r<e>"),a:x("r<OD<@>>"),j:x("t<@>"),c:x("a3<c,@>"),f:x("a3<@,@>"),d:x("bm"),e:x("lU"),N:x("c"),U:x("a6<c>"),q:x("dl"),i:x("T"),z:x("@"),Y:x("a3<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.W3=x([],B.z("r<a7X>"))
D.W2=x([],B.z("r<Mt>"))
D.bIK={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bG9=new B.c6(D.bIK,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIn={deposit:0,final_payment:1,guest_share:2}
D.bGG=new B.c6(D.bIn,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIB={paid:0,pending:1,failed:2,refunded:3}
D.bGT=new B.c6(D.bIB,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c7S=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.bZr=new B.bF(D.c7S,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["grfYFsTMV/P5CPVH2v46Uvq2S9I="]=a.current})($__dart_deferred_initializers__);