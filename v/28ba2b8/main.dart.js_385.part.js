((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
drg(d,e,f){var x=e.i("@<0>").b8(f),w=new B.aN($.aT,x.i("aN<+(1,2)>")),v=new A.Ow(d.a,e.i("Ow<0>")),u=new A.Ow(d.b,f.i("Ow<0>"))
A.dAQ(B.a([v,u],y.a),new A.b7S(new B.PH(w,x.i("PH<+(1,2)>")),v,u,e,f))
return w},
dAQ(d,e){var x={},w=x.a=x.b=0,v=new A.bZi(x,d,e)
for(;w<2;++w)d[w].bmu(v)},
b7S:function b7S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5Q:function a5Q(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Ow:function Ow(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bZj:function bZj(d,e){this.a=d
this.b=e},
bZk:function bZk(d,e){this.a=d
this.b=e},
bZi:function bZi(d,e,f){this.a=d
this.b=e
this.c=f},
akQ(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akQ=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.P().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").aj(0,"*").V("id",1).dQ(0),$async$akQ)
case 6:t=e
$.cJ4=B.du(J.i(t,"platform_commission_percentage"))
$.cZV=B.b63(J.i(t,"organizer_fee_tiers"),$.cJ4)
s=J.i(t,"partner_fee_tiers")
r=new A.cFn()
if(y.j.b(s)&&J.dK(s)){q=B.a([],y.s)
for(n=J.bh(s,y.f),m=B.u(n),n=new B.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.du(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.du(J.i(p,"pct"))))+"% at\xe9 "+B.aK(B.du(J.i(p,"up_to")),!1)
J.bt(q,l)}$.cJ5=J.kG(q,", ")}else{k=B.aF(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cJ5=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akQ,w)},
cZm(d){var x
if(typeof d=="number")x=d
else{x=B.eW(B.q(d))
if(x==null)x=0}return x},
dc3(d){var x
if(d==null)x=null
else{x=B.d4(B.q(d))
x=x==null?null:x.dM()}return x},
cEb(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cx(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a4(B.a([v,C.f.B(J.cx(x==null?"":x))],y.s),new A.cEi(),y.U).a0(0," & ")
return x.length===0?"Cliente":x},
cYP(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.cc(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.Z(J.i(v,"id")),v)}u=new A.cDD(a2)
t=new A.cDE()
w=B.a([],y.P)
for(v=J.cc(a1),s=v.gX(a1);s.t();)w.push(new A.cDC(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.Z(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.eW(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cHq(p,J.cx(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d4(B.q(m))
m=m==null?h:m.dM()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cx(l==null?"":l)
k=D.bGl.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eW(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FT(o,p,n,m,l,k,j,v==null?0:v))}return new A.lT(e,d,g,w,D.Wg,D.Wh,h)},
cFn:function cFn(){},
FT:function FT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
rc:function rc(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bt8:function bt8(){},
bt9:function bt9(){},
bt2:function bt2(){},
bt6:function bt6(){},
bt7:function bt7(){},
bt1:function bt1(){},
bt4:function bt4(){},
bt5:function bt5(){},
bt3:function bt3(){},
cEi:function cEi(){},
cDD:function cDD(d){this.a=d},
cDE:function cDE(){},
cDC:function cDC(d,e,f,g,h){var _=this
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
aGn:function aGn(){this.c=this.a=this.d=null},
bXv:function bXv(d,e){this.a=d
this.b=e},
bXw:function bXw(d){this.a=d},
bXA:function bXA(d,e){this.a=d
this.b=e},
bXz:function bXz(d){this.a=d},
bXB:function bXB(d,e){this.a=d
this.b=e},
bXy:function bXy(d){this.a=d},
bXC:function bXC(d,e){this.a=d
this.b=e},
bXx:function bXx(d){this.a=d},
Zd:function Zd(d,e,f,g,h,i){var _=this
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
K=c[334]
I=c[150]
E=c[69]
G=c[151]
A=a.updateHolder(c[133],A)
D=c[442]
L=c[432]
A.a5Q.prototype={
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
A.Ow.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bmu(d){this.a.cC(new A.bZj(this,d),new A.bZk(this,d),y.d)}}
A.FT.prototype={
gFp(){var x=this.r-this.w
return x<0?0:x}}
A.rc.prototype={
gbwS(){return this.e==="Pago"},
gpS(d){var x=this.z
return x>0?x:this.f}}
A.lT.prototype={
gaBE(){var x=this.d
return new B.a4(x,new A.bt8(),B.a8(x).i("a4<1>")).d_(0,0,new A.bt9())},
gayk(){return C.e.d_(this.c,0,new A.bt2())},
gaBF(){var x=this.d
return new B.a4(x,new A.bt6(),B.a8(x).i("a4<1>")).d_(0,0,new A.bt7())},
gayl(){return C.e.d_(this.c,0,new A.bt1())},
gbA_(){var x=this.d
return new B.a4(x,new A.bt4(),B.a8(x).i("a4<1>")).d_(0,0,new A.bt5())},
gayA(){return C.e.d_(this.e,0,new A.bt3())}}
A.DN.prototype={
R(){return new A.aGn()},
m3(d){return this.e.$0()}}
A.aGn.prototype={
zB(d,e){return this.bgO(d,e)},
bgO(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zB=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bXv(r,d))
u=4
q=null
x=7
return B.d(A.drg(new B.a0(r.a.m3(0),B.dg("files","")),y.e,y.z),$async$zB)
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
if(n!=null)n.O(y.q).f.a2(D.bYJ)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bXw(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zB,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.A(v,B.B(B.a([new A.Zd(L.OM,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bXA(w,t),v),H.Cu,new A.Zd(C.E9,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bXB(w,t),v),H.Cu,new A.Zd(C.nV,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bXC(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.K(C.t,v,v,s,C.bp,v,C.x),v,v,v,C.i2,v,v,v)}}
A.Zd.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.A(C.K,B.b5(u.c,$.au,t,t,20),C.r,t,t,new B.K(C.a5,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a5(B.B(B.a([B.h(u.d,t,t,t,t,C.bB,t,t,t),B.h(u.e,t,t,t,t,C.hi,t,t,t)],x),C.G,C.h,C.l),1)
v=$.au
return B.eP(!1,s,!0,new B.S(C.ns,B.O(B.a([p,C.ae,w,r?B.aH(B.ao8(t,v,t,t,t,t,t,2,t,t),20,20):B.b5(K.vq,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(rc)","T(T,rc)","F<~>(lT)","T(T,FT)","T(T,Mp)","rc()"])
A.b7S.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a0(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jN(new A.a5Q(new B.a0(x,w),t,d,v.d.i("@<0>").b8(v.e).i("a5Q<+(1?,2?),+(hd?,hd?)>")))}},
$S:15}
A.bZj.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bn(1)")}}
A.bZk.prototype={
$2(d,e){this.a.c=new B.hd(d,e)
this.b.$1(1)},
$S:23}
A.bZi.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cFn.prototype={
$1(d){return C.k.aF(d,1)===0?C.k.a9(d,0):C.k.a9(d,1)},
$S:178}
A.bt8.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt9.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bt2.prototype={
$2(d,e){return d+e.gFp()},
$S:z+3}
A.bt6.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt7.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lu(x,w>0?w:x))},
$S:z+1}
A.bt1.prototype={
$2(d,e){var x=e.gFp()
return d+(x+G.lu(x,e.r))},
$S:z+3}
A.bt4.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt5.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lu(x,w>0?w:x)},
$S:z+1}
A.bt3.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cEi.prototype={
$1(d){return d.length!==0},
$S:6}
A.cDD.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cEb(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cx(x==null?"Parceiro":x)}return x},
$S:448}
A.cDE.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cx(x==null?"":x)},
$S:448}
A.cDC.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cEb(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cx(k)
k=l?p:J.i(m,"booking_number")
k=I.cHq(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGU.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bH7.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cZm(n.h(o,"amount"))
s=A.dc3(n.h(o,"paid_at"))
r=A.dc3(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cx(o==null?"":o)
n=q.e.$1(m)
return new A.rc(k,w,j,v,u,t,s,r,o,n,A.cZm(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bXv.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bXw.prototype={
$0(){return this.a.d=null},
$S:0}
A.bXA.prototype={
$0(){return this.a.zB("pdf",new A.bXz(this.b))},
$S:0}
A.bXz.prototype={
$1(d){return this.aEQ(d)},
aEQ(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cO4(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.d_j(d,"pdf")
B.cm("files")
v=F.a_7(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXB.prototype={
$0(){return this.a.zB("xlsx",new A.bXy(this.b))},
$S:0}
A.bXy.prototype={
$1(d){return this.aEP(d)},
aEP(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dMm(d,u.a)
B.cm("files")
s=E.d_j(d,"xlsx")
B.cm("files")
v=F.a_7(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXC.prototype={
$0(){return this.a.zB("rec",new A.bXx(this.b))},
$S:0}
A.bXx.prototype={
$1(d){return this.aEO(d)},
aEO(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cNS(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.d_j(new A.lT("Comprovativos",d.b,d.c,d.d,D.Wg,D.Wh,null),"pdf")
B.cm("files")
x=3
return B.d(F.a_7(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.b7S,A.bZj,A.bZi,A.cFn,A.bt8,A.bt6,A.bt4,A.cEi,A.cDD,A.cDE,A.bXz,A.bXy,A.bXx])
w(A.a5Q,B.fa)
x(B.J,[A.Ow,A.FT,A.rc,A.lT])
x(B.cL,[A.bZk,A.bt9,A.bt2,A.bt7,A.bt1,A.bt5,A.bt3])
x(B.bO,[A.cDC,A.bXv,A.bXw,A.bXA,A.bXB,A.bXC])
w(A.DN,B.G)
w(A.aGn,B.Y)
w(A.Zd,B.M)})()
B.br(b.typeUniverse,JSON.parse('{"a5Q":{"fa":[]},"DN":{"G":[],"e":[],"f":[]},"aGn":{"Y":["DN"]},"Zd":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c3<c,c>"),b:x("r<FT>"),P:x("r<rc>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Ow<@>>"),j:x("t<@>"),c:x("a6<c,@>"),f:x("a6<@,@>"),d:x("bn"),e:x("lT"),N:x("c"),U:x("a4<c>"),q:x("dr"),i:x("T"),z:x("@"),Y:x("a6<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Wh=x([],B.w("r<a7S>"))
D.Wg=x([],B.w("r<Mp>"))
D.bIZ={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bGl=new B.c3(D.bIZ,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIC={deposit:0,final_payment:1,guest_share:2}
D.bGU=new B.c3(D.bIC,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIQ={paid:0,pending:1,failed:2,refunded:3}
D.bH7=new B.c3(D.bIQ,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cd0=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bYJ=new B.bF(D.cd0,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["rNGG04fpjhWiDsc8K9g462kLvzY="]=a.current})($__dart_deferred_initializers__);