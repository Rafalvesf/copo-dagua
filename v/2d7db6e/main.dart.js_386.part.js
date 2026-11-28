((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dqH(d,e,f){var x=e.i("@<0>").b8(f),w=new B.aN($.aT,x.i("aN<+(1,2)>")),v=new A.Os(d.a,e.i("Os<0>")),u=new A.Os(d.b,f.i("Os<0>"))
A.dAg(B.a([v,u],y.a),new A.b7O(new B.PE(w,x.i("PE<+(1,2)>")),v,u,e,f))
return w},
dAg(d,e){var x={},w=x.a=x.b=0,v=new A.bYU(x,d,e)
for(;w<2;++w)d[w].bmq(v)},
b7O:function b7O(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5R:function a5R(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Os:function Os(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bYV:function bYV(d,e){this.a=d
this.b=e},
bYW:function bYW(d,e){this.a=d
this.b=e},
bYU:function bYU(d,e,f){this.a=d
this.b=e
this.c=f},
akR(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akR=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.Q().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").aj(0,"*").V("id",1).dQ(0),$async$akR)
case 6:t=e
$.cIB=B.dt(J.i(t,"platform_commission_percentage"))
$.cZo=B.b6_(J.i(t,"organizer_fee_tiers"),$.cIB)
s=J.i(t,"partner_fee_tiers")
r=new A.cEW()
if(y.j.b(s)&&J.dI(s)){q=B.a([],y.s)
for(n=J.bh(s,y.f),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.dt(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.dt(J.i(p,"pct"))))+"% at\xe9 "+B.aK(B.dt(J.i(p,"up_to")),!1)
J.bt(q,l)}$.cIC=J.kG(q,", ")}else{k=B.aG(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cIC=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akR,w)},
cYQ(d){var x
if(typeof d=="number")x=d
else{x=B.eV(B.q(d))
if(x==null)x=0}return x},
dbw(d){var x
if(d==null)x=null
else{x=B.d5(B.q(d))
x=x==null?null:x.dP()}return x},
cDL(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cy(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.B(J.cy(x==null?"":x))],y.s),new A.cDS(),y.U).a1(0," & ")
return x.length===0?"Cliente":x},
cYi(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.c8(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.Z(J.i(v,"id")),v)}u=new A.cDc(a2)
t=new A.cDd()
w=B.a([],y.P)
for(v=J.c8(a1),s=v.gX(a1);s.t();)w.push(new A.cDb(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.Z(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.eV(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cGZ(p,J.cy(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d5(B.q(m))
m=m==null?h:m.dP()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cy(l==null?"":l)
k=D.bGs.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eV(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FQ(o,p,n,m,l,k,j,v==null?0:v))}return new A.lQ(e,d,g,w,D.Wp,D.Wq,h)},
cEW:function cEW(){},
FQ:function FQ(d,e,f,g,h,i,j,k){var _=this
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
lQ:function lQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bsL:function bsL(){},
bsM:function bsM(){},
bsF:function bsF(){},
bsJ:function bsJ(){},
bsK:function bsK(){},
bsE:function bsE(){},
bsH:function bsH(){},
bsI:function bsI(){},
bsG:function bsG(){},
cDS:function cDS(){},
cDc:function cDc(d){this.a=d},
cDd:function cDd(){},
cDb:function cDb(d,e,f,g,h){var _=this
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
aGk:function aGk(){this.c=this.a=this.d=null},
bX6:function bX6(d,e){this.a=d
this.b=e},
bX7:function bX7(d){this.a=d},
bXb:function bXb(d,e){this.a=d
this.b=e},
bXa:function bXa(d){this.a=d},
bXc:function bXc(d,e){this.a=d
this.b=e},
bX9:function bX9(d){this.a=d},
bXd:function bXd(d,e){this.a=d
this.b=e},
bX8:function bX8(d){this.a=d},
Zc:function Zc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[297]
F=c[145]
K=c[338]
I=c[151]
E=c[69]
G=c[152]
A=a.updateHolder(c[134],A)
D=c[445]
L=c[436]
A.a5R.prototype={
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
return x==null?B.fa.prototype.gmY.call(this):x}}
A.Os.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bmq(d){this.a.cC(new A.bYV(this,d),new A.bYW(this,d),y.d)}}
A.FQ.prototype={
gFo(){var x=this.r-this.w
return x<0?0:x}}
A.rb.prototype={
gbwO(){return this.e==="Pago"},
gpS(d){var x=this.z
return x>0?x:this.f}}
A.lQ.prototype={
gaBE(){var x=this.d
return new B.a6(x,new A.bsL(),B.a8(x).i("a6<1>")).cW(0,0,new A.bsM())},
gayk(){return C.e.cW(this.c,0,new A.bsF())},
gaBF(){var x=this.d
return new B.a6(x,new A.bsJ(),B.a8(x).i("a6<1>")).cW(0,0,new A.bsK())},
gayl(){return C.e.cW(this.c,0,new A.bsE())},
gbzW(){var x=this.d
return new B.a6(x,new A.bsH(),B.a8(x).i("a6<1>")).cW(0,0,new A.bsI())},
gayA(){return C.e.cW(this.e,0,new A.bsG())}}
A.DL.prototype={
R(){return new A.aGk()},
m3(d){return this.e.$0()}}
A.aGk.prototype={
zB(d,e){return this.bgK(d,e)},
bgK(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zB=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bX6(r,d))
u=4
q=null
x=7
return B.d(A.dqH(new B.a_(r.a.m3(0),B.df("files","")),y.e,y.z),$async$zB)
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
if(n!=null)n.O(y.q).f.a2(D.bYY)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bX7(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zB,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.x(v,B.A(B.a([new A.Zc(L.OT,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bXb(w,t),v),H.Cy,new A.Zc(C.Ec,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bXc(w,t),v),H.Cy,new A.Zc(C.lI,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bXd(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.I(C.t,v,v,s,C.bi,v,C.x),v,v,v,C.i2,v,v,v)}}
A.Zc.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.x(C.K,B.b6(u.c,$.at,t,t,20),C.r,t,t,new B.I(C.a6,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a5(B.A(B.a([B.h(u.d,t,t,t,t,C.bD,t,t,t),B.h(u.e,t,t,t,t,C.hk,t,t,t)],x),C.G,C.h,C.l),1)
v=$.at
return B.eL(!1,s,!0,new B.S(C.nt,B.O(B.a([p,C.ae,w,r?B.aH(B.ao7(t,v,t,t,t,t,t,2,t,t),20,20):B.b6(K.vr,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["y(rb)","T(T,rb)","F<~>(lQ)","T(T,FQ)","T(T,Mm)","rb()"])
A.b7O.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a_(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jN(new A.a5R(new B.a_(x,w),t,d,v.d.i("@<0>").b8(v.e).i("a5R<+(1?,2?),+(hd?,hd?)>")))}},
$S:15}
A.bYV.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bm(1)")}}
A.bYW.prototype={
$2(d,e){this.a.c=new B.hd(d,e)
this.b.$1(1)},
$S:23}
A.bYU.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cEW.prototype={
$1(d){return C.k.aG(d,1)===0?C.k.a9(d,0):C.k.a9(d,1)},
$S:178}
A.bsL.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsM.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bsF.prototype={
$2(d,e){return d+e.gFo()},
$S:z+3}
A.bsJ.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsK.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lr(x,w>0?w:x))},
$S:z+1}
A.bsE.prototype={
$2(d,e){var x=e.gFo()
return d+(x+G.lr(x,e.r))},
$S:z+3}
A.bsH.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsI.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lr(x,w>0?w:x)},
$S:z+1}
A.bsG.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cDS.prototype={
$1(d){return d.length!==0},
$S:6}
A.cDc.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cDL(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cy(x==null?"Parceiro":x)}return x},
$S:287}
A.cDd.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cy(x==null?"":x)},
$S:287}
A.cDb.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cDL(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cy(k)
k=l?p:J.i(m,"booking_number")
k=I.cGZ(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bH0.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bHe.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cYQ(n.h(o,"amount"))
s=A.dbw(n.h(o,"paid_at"))
r=A.dbw(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cy(o==null?"":o)
n=q.e.$1(m)
return new A.rb(k,w,j,v,u,t,s,r,o,n,A.cYQ(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bX6.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bX7.prototype={
$0(){return this.a.d=null},
$S:0}
A.bXb.prototype={
$0(){return this.a.zB("pdf",new A.bXa(this.b))},
$S:0}
A.bXa.prototype={
$1(d){return this.aEQ(d)},
aEQ(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cNz(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.cZN(d,"pdf")
B.cm("files")
v=F.a_6(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXc.prototype={
$0(){return this.a.zB("xlsx",new A.bX9(this.b))},
$S:0}
A.bX9.prototype={
$1(d){return this.aEP(d)},
aEP(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dLL(d,u.a)
B.cm("files")
s=E.cZN(d,"xlsx")
B.cm("files")
v=F.a_6(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXd.prototype={
$0(){return this.a.zB("rec",new A.bX8(this.b))},
$S:0}
A.bX8.prototype={
$1(d){return this.aEO(d)},
aEO(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cNm(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.cZN(new A.lQ("Comprovativos",d.b,d.c,d.d,D.Wp,D.Wq,null),"pdf")
B.cm("files")
x=3
return B.d(F.a_6(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bu,[A.b7O,A.bYV,A.bYU,A.cEW,A.bsL,A.bsJ,A.bsH,A.cDS,A.cDc,A.cDd,A.bXa,A.bX9,A.bX8])
w(A.a5R,B.fa)
x(B.J,[A.Os,A.FQ,A.rb,A.lQ])
x(B.cK,[A.bYW,A.bsM,A.bsF,A.bsK,A.bsE,A.bsI,A.bsG])
x(B.bP,[A.cDb,A.bX6,A.bX7,A.bXb,A.bXc,A.bXd])
w(A.DL,B.G)
w(A.aGk,B.Y)
w(A.Zc,B.L)})()
B.bn(b.typeUniverse,JSON.parse('{"a5R":{"fa":[]},"DL":{"G":[],"e":[],"f":[]},"aGk":{"Y":["DL"]},"Zc":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c4<c,c>"),b:x("r<FQ>"),P:x("r<rb>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Os<@>>"),j:x("t<@>"),c:x("a4<c,@>"),f:x("a4<@,@>"),d:x("bm"),e:x("lQ"),N:x("c"),U:x("a6<c>"),q:x("dp"),i:x("T"),z:x("@"),Y:x("a4<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Wq=x([],B.w("r<a7T>"))
D.Wp=x([],B.w("r<Mm>"))
D.bJ5={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bGs=new B.c4(D.bJ5,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIJ={deposit:0,final_payment:1,guest_share:2}
D.bH0=new B.c4(D.bIJ,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIX={paid:0,pending:1,failed:2,refunded:3}
D.bHe=new B.c4(D.bIX,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cdt=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bYY=new B.bF(D.cdt,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["JibimzcXT5gt0CYfYQhHGdYzBvQ="]=a.current})($__dart_deferred_initializers__);