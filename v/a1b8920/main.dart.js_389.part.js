((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
drv(d,e,f){var x=e.i("@<0>").b8(f),w=new B.aN($.aT,x.i("aN<+(1,2)>")),v=new A.Ow(d.a,e.i("Ow<0>")),u=new A.Ow(d.b,f.i("Ow<0>"))
A.dB4(B.a([v,u],y.a),new A.b7R(new B.PH(w,x.i("PH<+(1,2)>")),v,u,e,f))
return w},
dB4(d,e){var x={},w=x.a=x.b=0,v=new A.bZf(x,d,e)
for(;w<2;++w)d[w].bmx(v)},
b7R:function b7R(d,e,f,g,h){var _=this
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
bZg:function bZg(d,e){this.a=d
this.b=e},
bZh:function bZh(d,e){this.a=d
this.b=e},
bZf:function bZf(d,e,f){this.a=d
this.b=e
this.c=f},
akP(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akP=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.P().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").ai(0,"*").V("id",1).dQ(0),$async$akP)
case 6:t=e
$.cJe=B.du(J.i(t,"platform_commission_percentage"))
$.d_5=B.b62(J.i(t,"organizer_fee_tiers"),$.cJe)
s=J.i(t,"partner_fee_tiers")
r=new A.cFw()
if(y.j.b(s)&&J.dK(s)){q=B.a([],y.s)
for(n=J.bh(s,y.f),m=B.u(n),n=new B.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.du(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.du(J.i(p,"pct"))))+"% at\xe9 "+B.aK(B.du(J.i(p,"up_to")),!1)
J.br(q,l)}$.cJf=J.kG(q,", ")}else{k=B.aF(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cJf=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akP,w)},
cZx(d){var x
if(typeof d=="number")x=d
else{x=B.eW(B.q(d))
if(x==null)x=0}return x},
dcg(d){var x
if(d==null)x=null
else{x=B.d4(B.q(d))
x=x==null?null:x.dM()}return x},
cEf(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cy(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a5(B.a([v,C.f.B(J.cy(x==null?"":x))],y.s),new A.cEm(),y.U).a0(0," & ")
return x.length===0?"Cliente":x},
cZ_(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.c7(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.a_(J.i(v,"id")),v)}u=new A.cDH(a2)
t=new A.cDI()
w=B.a([],y.P)
for(v=J.c7(a1),s=v.gX(a1);s.t();)w.push(new A.cDG(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.a_(v.h(f,"booking_id"))
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
o=I.cHA(p,J.cy(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d4(B.q(m))
m=m==null?h:m.dM()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cy(l==null?"":l)
k=D.bGs.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eW(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FT(o,p,n,m,l,k,j,v==null?0:v))}return new A.lT(e,d,g,w,D.Wg,D.Wh,h)},
cFw:function cFw(){},
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
bt5:function bt5(){},
bt6:function bt6(){},
bt_:function bt_(){},
bt3:function bt3(){},
bt4:function bt4(){},
bsZ:function bsZ(){},
bt1:function bt1(){},
bt2:function bt2(){},
bt0:function bt0(){},
cEm:function cEm(){},
cDH:function cDH(d){this.a=d},
cDI:function cDI(){},
cDG:function cDG(d,e,f,g,h){var _=this
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
aGn:function aGn(){this.c=this.a=this.d=null},
bXs:function bXs(d,e){this.a=d
this.b=e},
bXt:function bXt(d){this.a=d},
bXx:function bXx(d,e){this.a=d
this.b=e},
bXw:function bXw(d){this.a=d},
bXy:function bXy(d,e){this.a=d
this.b=e},
bXv:function bXv(d){this.a=d},
bXz:function bXz(d,e){this.a=d
this.b=e},
bXu:function bXu(d){this.a=d},
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
H=c[294]
F=c[143]
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
bmx(d){this.a.cE(new A.bZg(this,d),new A.bZh(this,d),y.d)}}
A.FT.prototype={
gFr(){var x=this.r-this.w
return x<0?0:x}}
A.rc.prototype={
gbwV(){return this.e==="Pago"},
gpS(d){var x=this.z
return x>0?x:this.f}}
A.lT.prototype={
gaBF(){var x=this.d
return new B.a5(x,new A.bt5(),B.a8(x).i("a5<1>")).d_(0,0,new A.bt6())},
gayl(){return C.e.d_(this.c,0,new A.bt_())},
gaBG(){var x=this.d
return new B.a5(x,new A.bt3(),B.a8(x).i("a5<1>")).d_(0,0,new A.bt4())},
gaym(){return C.e.d_(this.c,0,new A.bsZ())},
gbA2(){var x=this.d
return new B.a5(x,new A.bt1(),B.a8(x).i("a5<1>")).d_(0,0,new A.bt2())},
gayB(){return C.e.d_(this.e,0,new A.bt0())}}
A.DO.prototype={
R(){return new A.aGn()},
m3(d){return this.e.$0()}}
A.aGn.prototype={
zB(d,e){return this.bgR(d,e)},
bgR(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zB=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bXs(r,d))
u=4
q=null
x=7
return B.d(A.drv(new B.Z(r.a.m3(0),B.dg("files","")),y.e,y.z),$async$zB)
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
if(n!=null)n.O(y.q).f.a2(D.bYO)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bXt(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zB,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.B(v,B.A(B.a([new A.Zc(L.OM,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bXx(w,t),v),H.Cv,new A.Zc(C.Ea,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bXy(w,t),v),H.Cv,new A.Zc(C.qz,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bXz(w,t),v)],y.p),C.F,C.h,C.l),C.r,v,v,new B.K(C.t,v,v,s,C.br,v,C.x),v,v,v,C.i2,v,v,v)}}
A.Zc.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.B(C.K,B.b5(u.c,$.au,t,t,20),C.r,t,t,new B.K(C.a5,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a6(B.A(B.a([B.h(u.d,t,t,t,t,C.bB,t,t,t),B.h(u.e,t,t,t,t,C.hi,t,t,t)],x),C.F,C.h,C.l),1)
v=$.au
return B.eR(!1,s,!0,new B.T(C.nu,B.O(B.a([p,C.ae,w,r?B.aH(B.ao7(t,v,t,t,t,t,t,2,t,t),20,20):B.b5(K.vr,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(rc)","S(S,rc)","F<~>(lT)","S(S,FT)","S(S,Mp)","rc()"])
A.b7R.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.Z(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jN(new A.a5Q(new B.Z(x,w),t,d,v.d.i("@<0>").b8(v.e).i("a5Q<+(1?,2?),+(hd?,hd?)>")))}},
$S:15}
A.bZg.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bn(1)")}}
A.bZh.prototype={
$2(d,e){this.a.c=new B.hd(d,e)
this.b.$1(1)},
$S:25}
A.bZf.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cFw.prototype={
$1(d){return C.k.aF(d,1)===0?C.k.a9(d,0):C.k.a9(d,1)},
$S:178}
A.bt5.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt6.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bt_.prototype={
$2(d,e){return d+e.gFr()},
$S:z+3}
A.bt3.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt4.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lu(x,w>0?w:x))},
$S:z+1}
A.bsZ.prototype={
$2(d,e){var x=e.gFr()
return d+(x+G.lu(x,e.r))},
$S:z+3}
A.bt1.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt2.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lu(x,w>0?w:x)},
$S:z+1}
A.bt0.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cEm.prototype={
$1(d){return d.length!==0},
$S:6}
A.cDH.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cEf(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cy(x==null?"Parceiro":x)}return x},
$S:476}
A.cDI.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cy(x==null?"":x)},
$S:476}
A.cDG.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cEf(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cy(k)
k=l?p:J.i(m,"booking_number")
k=I.cHA(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bH0.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bHe.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cZx(n.h(o,"amount"))
s=A.dcg(n.h(o,"paid_at"))
r=A.dcg(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cy(o==null?"":o)
n=q.e.$1(m)
return new A.rc(k,w,j,v,u,t,s,r,o,n,A.cZx(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bXs.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bXt.prototype={
$0(){return this.a.d=null},
$S:0}
A.bXx.prototype={
$0(){return this.a.zB("pdf",new A.bXw(this.b))},
$S:0}
A.bXw.prototype={
$1(d){return this.aER(d)},
aER(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=3
return B.d(E.cOe(d,u.a),$async$$1)
case 3:t=f
B.cn("files")
s=E.d_u(d,"pdf")
B.cn("files")
v=F.a_6(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXy.prototype={
$0(){return this.a.zB("xlsx",new A.bXv(this.b))},
$S:0}
A.bXv.prototype={
$1(d){return this.aEQ(d)},
aEQ(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
t=E.dMC(d,u.a)
B.cn("files")
s=E.d_u(d,"xlsx")
B.cn("files")
v=F.a_6(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXz.prototype={
$0(){return this.a.zB("rec",new A.bXu(this.b))},
$S:0}
A.bXu.prototype={
$1(d){return this.aEP(d)},
aEP(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cn("files")
B.cn("files")
x=2
return B.d(E.cO1(d,v.a),$async$$1)
case 2:u=f
B.cn("files")
t=E.d_u(new A.lT("Comprovativos",d.b,d.c,d.d,D.Wg,D.Wh,null),"pdf")
B.cn("files")
x=3
return B.d(F.a_6(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.b7R,A.bZg,A.bZf,A.cFw,A.bt5,A.bt3,A.bt1,A.cEm,A.cDH,A.cDI,A.bXw,A.bXv,A.bXu])
w(A.a5Q,B.fa)
x(B.J,[A.Ow,A.FT,A.rc,A.lT])
x(B.cK,[A.bZh,A.bt6,A.bt_,A.bt4,A.bsZ,A.bt2,A.bt0])
x(B.bO,[A.cDG,A.bXs,A.bXt,A.bXx,A.bXy,A.bXz])
w(A.DO,B.G)
w(A.aGn,B.Y)
w(A.Zc,B.M)})()
B.bt(b.typeUniverse,JSON.parse('{"a5Q":{"fa":[]},"DO":{"G":[],"e":[],"f":[]},"aGn":{"Y":["DO"]},"Zc":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c3<c,c>"),b:x("r<FT>"),P:x("r<rc>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Ow<@>>"),j:x("t<@>"),c:x("a4<c,@>"),f:x("a4<@,@>"),d:x("bn"),e:x("lT"),N:x("c"),U:x("a5<c>"),q:x("dr"),i:x("S"),z:x("@"),Y:x("a4<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Wh=x([],B.w("r<a7S>"))
D.Wg=x([],B.w("r<Mp>"))
D.bJ5={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bGs=new B.c3(D.bJ5,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIJ={deposit:0,final_payment:1,guest_share:2}
D.bH0=new B.c3(D.bIJ,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIX={paid:0,pending:1,failed:2,refunded:3}
D.bHe=new B.c3(D.bIX,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cd3=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bYO=new B.bF(D.cd3,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["aJErOgsqcKT6txdZCA/98YQUIbY="]=a.current})($__dart_deferred_initializers__);