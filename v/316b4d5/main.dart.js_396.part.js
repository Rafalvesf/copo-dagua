((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dsw(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aR($.aV,x.i("aR<+(1,2)>")),v=new A.OI(d.a,e.i("OI<0>")),u=new A.OI(d.b,f.i("OI<0>"))
A.dC5(B.a([v,u],y.a),new A.b8F(new B.PU(w,x.i("PU<+(1,2)>")),v,u,e,f))
return w},
dC5(d,e){var x={},w=x.a=x.b=0,v=new A.bZN(x,d,e)
for(;w<2;++w)d[w].bmh(v)},
b8F:function b8F(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6d:function a6d(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
OI:function OI(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bZO:function bZO(d,e){this.a=d
this.b=e},
bZP:function bZP(d,e){this.a=d
this.b=e},
bZN:function bZN(d,e,f){this.a=d
this.b=e
this.c=f},
alj(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$alj=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return B.d(B.alP(),$async$alj)
case 6:t=e
$.cJi=B.dt(J.i(t,"platform_commission_percentage"))
$.d_I=B.b6O(J.i(t,"organizer_fee_tiers"),$.cJi)
s=J.i(t,"partner_fee_tiers")
r=new A.cFo()
if(y.j.b(s)&&J.dM(s)){q=B.a([],y.s)
for(n=J.bi(s,y.f),m=B.u(n),n=new B.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E");n.q();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.p(r.$1(B.dt(J.i(p,"pct"))))+"% acima":B.p(r.$1(B.dt(J.i(p,"pct"))))+"% at\xe9 "+B.aL(B.dt(J.i(p,"up_to")),!1)
J.bn(q,l)}$.cJj=J.m3(q,", ")}else{k=B.aF(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cJj=o>0?B.p(r.$1(o))+"%":""}v=1
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
d_a(d){var x
if(typeof d=="number")x=d
else{x=B.f3(B.p(d))
if(x==null)x=0}return x},
dd3(d){var x
if(d==null)x=null
else{x=B.d_(B.p(d))
x=x==null?null:x.dH()}return x},
cE6(d){var x,w,v
if(d==null)return"Cliente"
x=J.a6(d)
w=x.h(d,"partner_name_1")
v=C.f.C(J.cy(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a7(B.a([v,C.f.C(J.cy(x==null?"":x))],y.s),new A.cEd(),y.U).a1(0," & ")
return x.length===0?"Cliente":x},
cZC(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.F(g,y.c)
for(x=J.cb(a0),w=x.gW(a0);w.q();){v=w.gE(w)
f.j(0,B.a0(J.i(v,"id")),v)}u=new A.cDx(a2)
t=new A.cDy()
w=B.a([],y.P)
for(v=J.cb(a1),s=v.gW(a1);s.q();)w.push(new A.cDw(f,s.gE(s),a2,d,t).$0())
r=B.F(g,y.i)
for(g=v.gW(a1);g.q();){f=g.gE(g)
v=J.a6(f)
if(J.o(v.h(f,i),"paid")){q=B.a0(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.f3(B.p(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gW(a0),x=y.Y;f.q();){v=f.gE(f)
s=J.a6(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cHB(p,J.cy(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d_(B.p(m))
m=m==null?h:m.dH()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cy(l==null?"":l)
k=D.bG8.h(0,s.h(v,i))
if(k==null)k=B.p(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.f3(B.p(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FW(o,p,n,m,l,k,j,v==null?0:v))}return new A.lU(e,d,g,w,D.We,D.Wf,h)},
cFo:function cFo(){},
FW:function FW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
r6:function r6(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bug:function bug(){},
buh:function buh(){},
bua:function bua(){},
bue:function bue(){},
buf:function buf(){},
bu9:function bu9(){},
buc:function buc(){},
bud:function bud(){},
bub:function bub(){},
cEd:function cEd(){},
cDx:function cDx(d){this.a=d},
cDy:function cDy(){},
cDw:function cDw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DQ:function DQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aH5:function aH5(){this.c=this.a=this.d=null},
bY_:function bY_(d,e){this.a=d
this.b=e},
bY0:function bY0(d){this.a=d},
bY4:function bY4(d,e){this.a=d
this.b=e},
bY3:function bY3(d){this.a=d},
bY5:function bY5(d,e){this.a=d
this.b=e},
bY2:function bY2(d){this.a=d},
bY6:function bY6(d,e){this.a=d
this.b=e},
bY1:function bY1(d){this.a=d},
Zx:function Zx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[296]
F=c[143]
K=c[336]
I=c[150]
E=c[69]
G=c[151]
A=a.updateHolder(c[134],A)
D=c[441]
L=c[433]
A.a6d.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.p(u.a)},
gn_(){var x=this.c
x=x==null?null:x.b
return x==null?B.fd.prototype.gn_.call(this):x}}
A.OI.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bmh(d){this.a.cH(new A.bZO(this,d),new A.bZP(this,d),y.d)}}
A.FW.prototype={
gFi(){var x=this.r-this.w
return x<0?0:x}}
A.r6.prototype={
gbwL(){return this.e==="Pago"},
gpX(d){var x=this.z
return x>0?x:this.f}}
A.lU.prototype={
gaBr(){var x=this.d
return new B.a7(x,new A.bug(),B.a8(x).i("a7<1>")).cQ(0,0,new A.buh())},
gay6(){return C.e.cQ(this.c,0,new A.bua())},
gaBs(){var x=this.d
return new B.a7(x,new A.bue(),B.a8(x).i("a7<1>")).cQ(0,0,new A.buf())},
gay7(){return C.e.cQ(this.c,0,new A.bu9())},
gbzP(){var x=this.d
return new B.a7(x,new A.buc(),B.a8(x).i("a7<1>")).cQ(0,0,new A.bud())},
gaym(){return C.e.cQ(this.e,0,new A.bub())}}
A.DQ.prototype={
P(){return new A.aH5()},
m_(d){return this.e.$0()}}
A.aH5.prototype={
zq(d,e){return this.bgt(d,e)},
bgt(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zq=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bY_(r,d))
u=4
q=null
x=7
return B.d(A.dsw(new B.X(r.a.m_(0),B.dc("files","")),y.e,y.z),$async$zq)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zq)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a4(D.bZU)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bY0(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zq,w)},
t(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.w(v,B.x(B.a([new A.Zx(L.ON,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bY4(w,t),v),H.CA,new A.Zx(C.vn,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bY5(w,t),v),H.CA,new A.Zx(C.qf,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bY6(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.O(C.t,v,v,s,C.bv,v,C.y),v,v,v,C.iN,v,v,v)}}
A.Zx.prototype={
t(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.w(C.J,B.b4(u.c,$.ay,t,t,20),C.r,t,t,new B.O(C.ac,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a5(B.x(B.a([B.h(u.d,t,t,t,t,C.bL,t,t),B.h(u.e,t,t,t,t,C.hk,t,t)],x),C.G,C.h,C.l),1)
v=$.ay
return B.f_(!1,s,!0,new B.S(C.nr,B.N(B.a([p,C.al,w,r?B.aG(B.Rw(t,v,t,t,t,t,t,2,t,t),20,20):B.b4(K.vi,v,t,t,20)],x),C.u,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["C(r6)","T(T,r6)","D<~>(lU)","T(T,FW)","T(T,Mw)","r6()"])
A.b8F.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dD(0,new B.X(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jH(new A.a6d(new B.X(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a6d<+(1?,2?),+(hh?,hh?)>")))}},
$S:14}
A.bZO.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bj(1)")}}
A.bZP.prototype={
$2(d,e){this.a.c=new B.hh(d,e)
this.b.$1(1)},
$S:24}
A.bZN.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:14}
A.cFo.prototype={
$1(d){return C.k.aD(d,1)===0?C.k.aa(d,0):C.k.aa(d,1)},
$S:187}
A.bug.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.buh.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bua.prototype={
$2(d,e){return d+e.gFi()},
$S:z+3}
A.bue.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.buf.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lw(x,w>0?w:x))},
$S:z+1}
A.bu9.prototype={
$2(d,e){var x=e.gFi()
return d+(x+G.lw(x,e.r))},
$S:z+3}
A.buc.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bud.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lw(x,w>0?w:x)},
$S:z+1}
A.bub.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cEd.prototype={
$1(d){return d.length!==0},
$S:7}
A.cDx.prototype={
$1(d){var x=J.a6(d),w=y.Y
if(this.a)x=A.cE6(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cy(x==null?"Parceiro":x)}return x},
$S:477}
A.cDy.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cy(x==null?"":x)},
$S:477}
A.cDw.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a6(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cE6(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cy(k)
k=l?p:J.i(m,"booking_number")
k=I.cHB(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGF.h(0,n.h(o,"type"))
if(v==null)v=B.p(n.h(o,"type"))
u=D.bGQ.h(0,n.h(o,"status"))
if(u==null)u=B.p(n.h(o,"status"))
t=A.d_a(n.h(o,"amount"))
s=A.dd3(n.h(o,"paid_at"))
r=A.dd3(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cy(o==null?"":o)
n=q.e.$1(m)
return new A.r6(k,w,j,v,u,t,s,r,o,n,A.d_a(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bY_.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bY0.prototype={
$0(){return this.a.d=null},
$S:0}
A.bY4.prototype={
$0(){return this.a.zq("pdf",new A.bY3(this.b))},
$S:0}
A.bY3.prototype={
$1(d){return this.aEE(d)},
aEE(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cj("files")
B.cj("files")
x=3
return B.d(E.cOF(d,u.a),$async$$1)
case 3:t=f
B.cj("files")
s=E.d04(d,"pdf")
B.cj("files")
v=F.a_r(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bY5.prototype={
$0(){return this.a.zq("xlsx",new A.bY2(this.b))},
$S:0}
A.bY2.prototype={
$1(d){return this.aED(d)},
aED(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cj("files")
B.cj("files")
t=E.dNJ(d,u.a)
B.cj("files")
s=E.d04(d,"xlsx")
B.cj("files")
v=F.a_r(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bY6.prototype={
$0(){return this.a.zq("rec",new A.bY1(this.b))},
$S:0}
A.bY1.prototype={
$1(d){return this.aEC(d)},
aEC(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cj("files")
B.cj("files")
x=2
return B.d(E.cOr(d,v.a),$async$$1)
case 2:u=f
B.cj("files")
t=E.d04(new A.lU("Comprovativos",d.b,d.c,d.d,D.We,D.Wf,null),"pdf")
B.cj("files")
x=3
return B.d(F.a_r(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.b8F,A.bZO,A.bZN,A.cFo,A.bug,A.bue,A.buc,A.cEd,A.cDx,A.cDy,A.bY3,A.bY2,A.bY1])
w(A.a6d,B.fd)
x(B.L,[A.OI,A.FW,A.r6,A.lU])
x(B.cM,[A.bZP,A.buh,A.bua,A.buf,A.bu9,A.bud,A.bub])
x(B.bO,[A.cDw,A.bY_,A.bY0,A.bY4,A.bY5,A.bY6])
w(A.DQ,B.G)
w(A.aH5,B.Z)
w(A.Zx,B.H)})()
B.bq(b.typeUniverse,JSON.parse('{"a6d":{"fd":[]},"DQ":{"G":[],"e":[],"f":[]},"aH5":{"Z":["DQ"]},"Zx":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.B
return{w:x("c9<c,c>"),b:x("r<FW>"),P:x("r<r6>"),s:x("r<c>"),p:x("r<e>"),a:x("r<OI<@>>"),j:x("t<@>"),c:x("a4<c,@>"),f:x("a4<@,@>"),d:x("bj"),e:x("lU"),N:x("c"),U:x("a7<c>"),q:x("dj"),i:x("T"),z:x("@"),Y:x("a4<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Wf=x([],B.B("r<a8e>"))
D.We=x([],B.B("r<Mw>"))
D.bIK={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bG8=new B.c9(D.bIK,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIl={deposit:0,final_payment:1,guest_share:2}
D.bGF=new B.c9(D.bIl,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIA={paid:0,pending:1,failed:2,refunded:3}
D.bGQ=new B.c9(D.bIA,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c8E=new B.E("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.bZU=new B.bI(D.c8E,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.x,null)})()};
(a=>{a["6fYlk524HjO2YtuAn+2aaBQ7Yoo="]=a.current})($__dart_deferred_initializers__);