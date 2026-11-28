((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
ds0(d,e,f){var x=e.i("@<0>").b8(f),w=new B.aO($.aU,x.i("aO<+(1,2)>")),v=new A.OF(d.a,e.i("OF<0>")),u=new A.OF(d.b,f.i("OF<0>"))
A.dBz(B.a([v,u],y.a),new A.b8p(new B.PR(w,x.i("PR<+(1,2)>")),v,u,e,f))
return w},
dBz(d,e){var x={},w=x.a=x.b=0,v=new A.bZQ(x,d,e)
for(;w<2;++w)d[w].bo7(v)},
b8p:function b8p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a63:function a63(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
OF:function OF(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bZR:function bZR(d,e){this.a=d
this.b=e},
bZS:function bZS(d,e){this.a=d
this.b=e},
bZQ:function bZQ(d,e,f){this.a=d
this.b=e
this.c=f},
alj(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$alj=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.Q().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").ak(0,"*").V("id",1).dS(0),$async$alj)
case 6:t=e
$.cJV=B.dt(J.i(t,"platform_commission_percentage"))
$.d_C=B.b6B(J.i(t,"organizer_fee_tiers"),$.cJV)
s=J.i(t,"partner_fee_tiers")
r=new A.cGf()
if(y.j.b(s)&&J.dI(s)){q=B.a([],y.s)
for(n=J.bi(s,y.f),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.dt(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.dt(J.i(p,"pct"))))+"% at\xe9 "+B.aM(B.dt(J.i(p,"up_to")),!1)
J.bv(q,l)}$.cJW=J.kI(q,", ")}else{k=B.aI(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cJW=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$alj,w)},
d_3(d){var x
if(typeof d=="number")x=d
else{x=B.eY(B.q(d))
if(x==null)x=0}return x},
dcP(d){var x
if(d==null)x=null
else{x=B.d5(B.q(d))
x=x==null?null:x.dQ()}return x},
cF5(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.C(J.cA(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.C(J.cA(x==null?"":x))],y.s),new A.cFc(),y.U).a0(0," & ")
return x.length===0?"Cliente":x},
cZw(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.cb(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.Z(J.i(v,"id")),v)}u=new A.cEx(a2)
t=new A.cEy()
w=B.a([],y.P)
for(v=J.cb(a1),s=v.gX(a1);s.t();)w.push(new A.cEw(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.Z(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.eY(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cIi(p,J.cA(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d5(B.q(m))
m=m==null?h:m.dQ()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cA(l==null?"":l)
k=D.bHu.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eY(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FX(o,p,n,m,l,k,j,v==null?0:v))}return new A.lP(e,d,g,w,D.WV,D.WW,h)},
cGf:function cGf(){},
FX:function FX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
rm:function rm(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lP:function lP(d,e,f,g,h,i,j){var _=this
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
cFc:function cFc(){},
cEx:function cEx(d){this.a=d},
cEy:function cEy(){},
cEw:function cEw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DS:function DS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGW:function aGW(){this.c=this.a=this.d=null},
bY2:function bY2(d,e){this.a=d
this.b=e},
bY3:function bY3(d){this.a=d},
bY7:function bY7(d,e){this.a=d
this.b=e},
bY6:function bY6(d){this.a=d},
bY8:function bY8(d,e){this.a=d
this.b=e},
bY5:function bY5(d){this.a=d},
bY9:function bY9(d,e){this.a=d
this.b=e},
bY4:function bY4(d){this.a=d},
Zr:function Zr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[293]
F=c[144]
K=c[334]
I=c[150]
E=c[69]
G=c[151]
A=a.updateHolder(c[133],A)
D=c[440]
L=c[431]
A.a63.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.q(u.a)},
gn1(){var x=this.c
x=x==null?null:x.b
return x==null?B.fc.prototype.gn1.call(this):x}}
A.OF.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bo7(d){this.a.cG(new A.bZR(this,d),new A.bZS(this,d),y.d)}}
A.FX.prototype={
gFI(){var x=this.r-this.w
return x<0?0:x}}
A.rm.prototype={
gbyF(){return this.e==="Pago"},
gpZ(d){var x=this.z
return x>0?x:this.f}}
A.lP.prototype={
gaCA(){var x=this.d
return new B.a6(x,new A.btn(),B.a8(x).i("a6<1>")).cZ(0,0,new A.bto())},
gazf(){return C.e.cZ(this.c,0,new A.bth())},
gaCB(){var x=this.d
return new B.a6(x,new A.btl(),B.a8(x).i("a6<1>")).cZ(0,0,new A.btm())},
gazg(){return C.e.cZ(this.c,0,new A.btg())},
gbBN(){var x=this.d
return new B.a6(x,new A.btj(),B.a8(x).i("a6<1>")).cZ(0,0,new A.btk())},
gazv(){return C.e.cZ(this.e,0,new A.bti())}}
A.DS.prototype={
R(){return new A.aGW()},
m9(d){return this.e.$0()}}
A.aGW.prototype={
zN(d,e){return this.bid(d,e)},
bid(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zN=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bY2(r,d))
u=4
q=null
x=7
return B.d(A.ds0(new B.a0(r.a.m9(0),B.df("files","")),y.e,y.z),$async$zN)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zN)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a1(D.c_6)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bY3(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zN,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.z(v,B.y(B.a([new A.Zr(L.Pn,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bY7(w,t),v),H.CR,new A.Zr(C.Ex,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bY8(w,t),v),H.CR,new A.Zr(C.lW,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bY9(w,t),v)],y.p),C.H,C.h,C.l,0,C.u),C.r,v,v,new B.I(C.t,v,v,s,C.bj,v,C.y),v,v,v,C.i8,v,v,v)}}
A.Zr.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.z(C.L,B.b6(u.c,$.au,t,t,20),C.r,t,t,new B.I(C.a7,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.y(B.a([B.h(u.d,t,t,t,t,C.bF,t,t,t),B.h(u.e,t,t,t,t,C.hp,t,t,t)],x),C.H,C.h,C.l,0,C.u),1)
v=$.au
return B.eI(!1,s,!0,new B.R(C.nH,B.O(B.a([p,C.af,w,r?B.aH(B.aoC(t,v,t,t,t,t,t,2,t,t),20,20):B.b6(K.vJ,v,t,t,20)],x),C.w,C.h,C.l,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["x(rm)","S(S,rm)","F<~>(lP)","S(S,FX)","S(S,MA)","rm()"])
A.b8p.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dK(0,new B.a0(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jU(new A.a63(new B.a0(x,w),t,d,v.d.i("@<0>").b8(v.e).i("a63<+(1?,2?),+(hf?,hf?)>")))}},
$S:15}
A.bZR.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bo(1)")}}
A.bZS.prototype={
$2(d,e){this.a.c=new B.hf(d,e)
this.b.$1(1)},
$S:23}
A.bZQ.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cGf.prototype={
$1(d){return C.k.ar(d,1)===0?C.k.a9(d,0):C.k.a9(d,1)},
$S:163}
A.btn.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bto.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bth.prototype={
$2(d,e){return d+e.gFI()},
$S:z+3}
A.btl.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btm.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lr(x,w>0?w:x))},
$S:z+1}
A.btg.prototype={
$2(d,e){var x=e.gFI()
return d+(x+G.lr(x,e.r))},
$S:z+3}
A.btj.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btk.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lr(x,w>0?w:x)},
$S:z+1}
A.bti.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cFc.prototype={
$1(d){return d.length!==0},
$S:7}
A.cEx.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cF5(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cA(x==null?"Parceiro":x)}return x},
$S:536}
A.cEy.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cA(x==null?"":x)},
$S:536}
A.cEw.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cF5(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cA(k)
k=l?p:J.i(m,"booking_number")
k=I.cIi(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bI2.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bIg.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.d_3(n.h(o,"amount"))
s=A.dcP(n.h(o,"paid_at"))
r=A.dcP(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cA(o==null?"":o)
n=q.e.$1(m)
return new A.rm(k,w,j,v,u,t,s,r,o,n,A.d_3(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bY2.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bY3.prototype={
$0(){return this.a.d=null},
$S:0}
A.bY7.prototype={
$0(){return this.a.zN("pdf",new A.bY6(this.b))},
$S:0}
A.bY6.prototype={
$1(d){return this.aFM(d)},
aFM(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cOM(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.d0_(d,"pdf")
B.cm("files")
v=F.a_m(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bY8.prototype={
$0(){return this.a.zN("xlsx",new A.bY5(this.b))},
$S:0}
A.bY5.prototype={
$1(d){return this.aFL(d)},
aFL(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dN2(d,u.a)
B.cm("files")
s=E.d0_(d,"xlsx")
B.cm("files")
v=F.a_m(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bY9.prototype={
$0(){return this.a.zN("rec",new A.bY4(this.b))},
$S:0}
A.bY4.prototype={
$1(d){return this.aFK(d)},
aFK(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cOz(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.d0_(new A.lP("Comprovativos",d.b,d.c,d.d,D.WV,D.WW,null),"pdf")
B.cm("files")
x=3
return B.d(F.a_m(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.by,[A.b8p,A.bZR,A.bZQ,A.cGf,A.btn,A.btl,A.btj,A.cFc,A.cEx,A.cEy,A.bY6,A.bY5,A.bY4])
w(A.a63,B.fc)
x(B.L,[A.OF,A.FX,A.rm,A.lP])
x(B.cL,[A.bZS,A.bto,A.bth,A.btm,A.btg,A.btk,A.bti])
x(B.bQ,[A.cEw,A.bY2,A.bY3,A.bY7,A.bY8,A.bY9])
w(A.DS,B.G)
w(A.aGW,B.Y)
w(A.Zr,B.J)})()
B.bs(b.typeUniverse,JSON.parse('{"a63":{"fc":[]},"DS":{"G":[],"e":[],"f":[]},"aGW":{"Y":["DS"]},"Zr":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c5<c,c>"),b:x("r<FX>"),P:x("r<rm>"),s:x("r<c>"),p:x("r<e>"),a:x("r<OF<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bo"),e:x("lP"),N:x("c"),U:x("a6<c>"),q:x("dp"),i:x("S"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.WW=x([],B.w("r<a84>"))
D.WV=x([],B.w("r<MA>"))
D.bK7={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bHu=new B.c5(D.bK7,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bJL={deposit:0,final_payment:1,guest_share:2}
D.bI2=new B.c5(D.bJL,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bJZ={paid:0,pending:1,failed:2,refunded:3}
D.bIg=new B.c5(D.bJZ,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.ceA=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.c_6=new B.bH(D.ceA,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.z,null)})()};
(a=>{a["abPWlgZ1+pWHKRBvmv3akjAeJKc="]=a.current})($__dart_deferred_initializers__);