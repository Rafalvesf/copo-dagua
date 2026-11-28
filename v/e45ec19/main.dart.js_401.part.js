((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dsn(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aQ($.aU,x.i("aQ<+(1,2)>")),v=new A.OJ(d.a,e.i("OJ<0>")),u=new A.OJ(d.b,f.i("OJ<0>"))
A.dBW(B.a([v,u],y.a),new A.b7Y(new B.PU(w,x.i("PU<+(1,2)>")),v,u,e,f))
return w},
dBW(d,e){var x={},w=x.a=x.b=0,v=new A.bYX(x,d,e)
for(;w<2;++w)d[w].blg(v)},
b7Y:function b7Y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5Z:function a5Z(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
OJ:function OJ(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bYY:function bYY(d,e){this.a=d
this.b=e},
bYZ:function bYZ(d,e){this.a=d
this.b=e},
bYX:function bYX(d,e,f){this.a=d
this.b=e
this.c=f},
akT(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akT=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return B.d(B.alt(),$async$akT)
case 6:t=e
$.cJy=B.dt(J.i(t,"platform_commission_percentage"))
$.d_J=B.b6e(J.i(t,"organizer_fee_tiers"),$.cJy)
s=J.i(t,"partner_fee_tiers")
r=new A.cFF()
if(y.j.b(s)&&J.dQ(s)){q=B.a([],y.s)
for(n=J.bj(s,y.f),m=B.u(n),n=new B.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E");n.q();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.p(r.$1(B.dt(J.i(p,"pct"))))+"% acima":B.p(r.$1(B.dt(J.i(p,"pct"))))+"% at\xe9 "+B.aJ(B.dt(J.i(p,"up_to")),!1)
J.bn(q,l)}$.cJz=J.kM(q,", ")}else{k=B.aE(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cJz=o>0?B.p(r.$1(o))+"%":""}v=1
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
return B.m($async$akT,w)},
d_b(d){var x
if(typeof d=="number")x=d
else{x=B.eU(B.p(d))
if(x==null)x=0}return x},
dd1(d){var x
if(d==null)x=null
else{x=B.d3(B.p(d))
x=x==null?null:x.dJ()}return x},
cEn(d){var x,w,v
if(d==null)return"Cliente"
x=J.a6(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cy(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a7(B.a([v,C.f.B(J.cy(x==null?"":x))],y.s),new A.cEu(),y.U).a_(0," & ")
return x.length===0?"Cliente":x},
cZF(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.cb(a0),w=x.gW(a0);w.q();){v=w.gE(w)
f.j(0,B.a_(J.i(v,"id")),v)}u=new A.cDO(a2)
t=new A.cDP()
w=B.a([],y.P)
for(v=J.cb(a1),s=v.gW(a1);s.q();)w.push(new A.cDN(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gW(a1);g.q();){f=g.gE(g)
v=J.a6(f)
if(J.o(v.h(f,i),"paid")){q=B.a_(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.eU(B.p(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gW(a0),x=y.Y;f.q();){v=f.gE(f)
s=J.a6(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cHR(p,J.cy(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d3(B.p(m))
m=m==null?h:m.dJ()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cy(l==null?"":l)
k=D.bGn.h(0,s.h(v,i))
if(k==null)k=B.p(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eU(B.p(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FX(o,p,n,m,l,k,j,v==null?0:v))}return new A.lV(e,d,g,w,D.W7,D.W8,h)},
cFF:function cFF(){},
FX:function FX(d,e,f,g,h,i,j,k){var _=this
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
lV:function lV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
btD:function btD(){},
btE:function btE(){},
btx:function btx(){},
btB:function btB(){},
btC:function btC(){},
btw:function btw(){},
btz:function btz(){},
btA:function btA(){},
bty:function bty(){},
cEu:function cEu(){},
cDO:function cDO(d){this.a=d},
cDP:function cDP(){},
cDN:function cDN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DR:function DR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGx:function aGx(){this.c=this.a=this.d=null},
bX9:function bX9(d,e){this.a=d
this.b=e},
bXa:function bXa(d){this.a=d},
bXe:function bXe(d,e){this.a=d
this.b=e},
bXd:function bXd(d){this.a=d},
bXf:function bXf(d,e){this.a=d
this.b=e},
bXc:function bXc(d){this.a=d},
bXg:function bXg(d,e){this.a=d
this.b=e},
bXb:function bXb(d){this.a=d},
Zk:function Zk(d,e,f,g,h,i){var _=this
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
A.a5Z.prototype={
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
return x==null?B.f9.prototype.gmY.call(this):x}}
A.OJ.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
blg(d){this.a.cG(new A.bYY(this,d),new A.bYZ(this,d),y.d)}}
A.FX.prototype={
gFh(){var x=this.r-this.w
return x<0?0:x}}
A.rc.prototype={
gbvM(){return this.e==="Pago"},
gpU(d){var x=this.z
return x>0?x:this.f}}
A.lV.prototype={
gaAW(){var x=this.d
return new B.a7(x,new A.btD(),B.a8(x).i("a7<1>")).cV(0,0,new A.btE())},
gaxC(){return C.e.cV(this.c,0,new A.btx())},
gaAX(){var x=this.d
return new B.a7(x,new A.btB(),B.a8(x).i("a7<1>")).cV(0,0,new A.btC())},
gaxD(){return C.e.cV(this.c,0,new A.btw())},
gbyQ(){var x=this.d
return new B.a7(x,new A.btz(),B.a8(x).i("a7<1>")).cV(0,0,new A.btA())},
gaxS(){return C.e.cV(this.e,0,new A.bty())}}
A.DR.prototype={
P(){return new A.aGx()},
m_(d){return this.e.$0()}}
A.aGx.prototype={
zs(d,e){return this.bfD(d,e)},
bfD(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zs=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.n(new A.bX9(r,d))
u=4
q=null
x=7
return B.d(A.dsn(new B.X(r.a.m_(0),B.dc("files","")),y.e,y.z),$async$zs)
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
if(n!=null)n.O(y.q).f.a1(D.bZG)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new A.bXa(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zs,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.w(v,B.x(B.a([new A.Zk(L.OE,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bXe(w,t),v),H.Cs,new A.Zk(C.vg,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bXf(w,t),v),H.Cs,new A.Zk(C.qc,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bXg(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.J(C.t,v,v,s,C.bs,v,C.x),v,v,v,C.i8,v,v,v)}}
A.Zk.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.w(C.K,B.b9(u.c,$.au,t,t,20),C.r,t,t,new B.J(C.a3,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a5(B.x(B.a([B.h(u.d,t,t,t,t,C.bx,t,t),B.h(u.e,t,t,t,t,C.hh,t,t)],x),C.G,C.h,C.l),1)
v=$.au
return B.eY(!1,s,!0,new B.S(C.nk,B.O(B.a([p,C.af,w,r?B.aK(B.aoe(t,v,t,t,t,t,t,2,t,t),20,20):B.b9(K.vc,v,t,t,20)],x),C.u,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["C(rc)","T(T,rc)","F<~>(lV)","T(T,FX)","T(T,Mz)","rc()"])
A.b7Y.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dF(0,new B.X(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jG(new A.a5Z(new B.X(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a5Z<+(1?,2?),+(hi?,hi?)>")))}},
$S:14}
A.bYY.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bm(1)")}}
A.bYZ.prototype={
$2(d,e){this.a.c=new B.hi(d,e)
this.b.$1(1)},
$S:25}
A.bYX.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:14}
A.cFF.prototype={
$1(d){return C.k.aK(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:178}
A.btD.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btE.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.btx.prototype={
$2(d,e){return d+e.gFh()},
$S:z+3}
A.btB.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btC.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lw(x,w>0?w:x))},
$S:z+1}
A.btw.prototype={
$2(d,e){var x=e.gFh()
return d+(x+G.lw(x,e.r))},
$S:z+3}
A.btz.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btA.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lw(x,w>0?w:x)},
$S:z+1}
A.bty.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cEu.prototype={
$1(d){return d.length!==0},
$S:6}
A.cDO.prototype={
$1(d){var x=J.a6(d),w=y.Y
if(this.a)x=A.cEn(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cy(x==null?"Parceiro":x)}return x},
$S:494}
A.cDP.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cy(x==null?"":x)},
$S:494}
A.cDN.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a6(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cEn(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cy(k)
k=l?p:J.i(m,"booking_number")
k=I.cHR(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGU.h(0,n.h(o,"type"))
if(v==null)v=B.p(n.h(o,"type"))
u=D.bH6.h(0,n.h(o,"status"))
if(u==null)u=B.p(n.h(o,"status"))
t=A.d_b(n.h(o,"amount"))
s=A.dd1(n.h(o,"paid_at"))
r=A.dd1(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cy(o==null?"":o)
n=q.e.$1(m)
return new A.rc(k,w,j,v,u,t,s,r,o,n,A.d_b(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bX9.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bXa.prototype={
$0(){return this.a.d=null},
$S:0}
A.bXe.prototype={
$0(){return this.a.zs("pdf",new A.bXd(this.b))},
$S:0}
A.bXd.prototype={
$1(d){return this.aE7(d)},
aE7(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cj("files")
B.cj("files")
x=3
return B.d(E.cOS(d,u.a),$async$$1)
case 3:t=f
B.cj("files")
s=E.d07(d,"pdf")
B.cj("files")
v=F.a_e(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXf.prototype={
$0(){return this.a.zs("xlsx",new A.bXc(this.b))},
$S:0}
A.bXc.prototype={
$1(d){return this.aE6(d)},
aE6(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cj("files")
B.cj("files")
t=E.dNB(d,u.a)
B.cj("files")
s=E.d07(d,"xlsx")
B.cj("files")
v=F.a_e(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXg.prototype={
$0(){return this.a.zs("rec",new A.bXb(this.b))},
$S:0}
A.bXb.prototype={
$1(d){return this.aE5(d)},
aE5(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cj("files")
B.cj("files")
x=2
return B.d(E.cOF(d,v.a),$async$$1)
case 2:u=f
B.cj("files")
t=E.d07(new A.lV("Comprovativos",d.b,d.c,d.d,D.W7,D.W8,null),"pdf")
B.cj("files")
x=3
return B.d(F.a_e(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bu,[A.b7Y,A.bYY,A.bYX,A.cFF,A.btD,A.btB,A.btz,A.cEu,A.cDO,A.cDP,A.bXd,A.bXc,A.bXb])
w(A.a5Z,B.f9)
x(B.M,[A.OJ,A.FX,A.rc,A.lV])
x(B.cL,[A.bYZ,A.btE,A.btx,A.btC,A.btw,A.btA,A.bty])
x(B.bL,[A.cDN,A.bX9,A.bXa,A.bXe,A.bXf,A.bXg])
w(A.DR,B.G)
w(A.aGx,B.Z)
w(A.Zk,B.L)})()
B.br(b.typeUniverse,JSON.parse('{"a5Z":{"f9":[]},"DR":{"G":[],"e":[],"f":[]},"aGx":{"Z":["DR"]},"Zk":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.A
return{w:x("c7<c,c>"),b:x("r<FX>"),P:x("r<rc>"),s:x("r<c>"),p:x("r<e>"),a:x("r<OJ<@>>"),j:x("t<@>"),c:x("a3<c,@>"),f:x("a3<@,@>"),d:x("bm"),e:x("lV"),N:x("c"),U:x("a7<c>"),q:x("dj"),i:x("T"),z:x("@"),Y:x("a3<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.W8=x([],B.A("r<a80>"))
D.W7=x([],B.A("r<Mz>"))
D.bIX={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bGn=new B.c7(D.bIX,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIC={deposit:0,final_payment:1,guest_share:2}
D.bGU=new B.c7(D.bIC,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIP={paid:0,pending:1,failed:2,refunded:3}
D.bH6=new B.c7(D.bIP,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c8a=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.bZG=new B.bF(D.c8a,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["90CKb3UVzYj+p4ftXcJKh4rLehM="]=a.current})($__dart_deferred_initializers__);