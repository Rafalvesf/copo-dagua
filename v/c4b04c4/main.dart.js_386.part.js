((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dri(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aO($.aU,x.i("aO<+(1,2)>")),v=new A.Oy(d.a,e.i("Oy<0>")),u=new A.Oy(d.b,f.i("Oy<0>"))
A.dAQ(B.a([v,u],y.a),new A.b86(new B.PK(w,x.i("PK<+(1,2)>")),v,u,e,f))
return w},
dAQ(d,e){var x={},w=x.a=x.b=0,v=new A.bZf(x,d,e)
for(;w<2;++w)d[w].bnm(v)},
b86:function b86(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5P:function a5P(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Oy:function Oy(d,e){var _=this
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
al1(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$al1=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.R().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").al(0,"*").V("id",1).dR(0),$async$al1)
case 6:t=e
$.cJe=B.ds(J.i(t,"platform_commission_percentage"))
$.cZY=B.b6i(J.i(t,"organizer_fee_tiers"),$.cJe)
s=J.i(t,"partner_fee_tiers")
r=new A.cFz()
if(y.j.b(s)&&J.dJ(s)){q=B.a([],y.s)
for(n=J.bh(s,y.f),m=B.u(n),n=new B.al(n,n.gA(n),m.i("al<W.E>")),m=m.i("W.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.ds(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.ds(J.i(p,"pct"))))+"% at\xe9 "+B.aM(B.ds(J.i(p,"up_to")),!1)
J.bt(q,l)}$.cJf=J.kF(q,", ")}else{k=B.aH(J.i(t,"partner_fee_percentage"))
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
return B.m($async$al1,w)},
cZp(d){var x
if(typeof d=="number")x=d
else{x=B.eY(B.q(d))
if(x==null)x=0}return x},
dc7(d){var x
if(d==null)x=null
else{x=B.d2(B.q(d))
x=x==null?null:x.dP()}return x},
cEp(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.C(J.cA(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.C(J.cA(x==null?"":x))],y.s),new A.cEw(),y.U).a0(0," & ")
return x.length===0?"Cliente":x},
cYS(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.cb(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.a0(J.i(v,"id")),v)}u=new A.cDR(a2)
t=new A.cDS()
w=B.a([],y.P)
for(v=J.cb(a1),s=v.gX(a1);s.t();)w.push(new A.cDQ(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.a0(v.h(f,"booking_id"))
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
o=I.cHC(p,J.cA(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d2(B.q(m))
m=m==null?h:m.dP()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cA(l==null?"":l)
k=D.bHr.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eY(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FS(o,p,n,m,l,k,j,v==null?0:v))}return new A.lM(e,d,g,w,D.WW,D.WX,h)},
cFz:function cFz(){},
FS:function FS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
rk:function rk(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lM:function lM(d,e,f,g,h,i,j){var _=this
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
cEw:function cEw(){},
cDR:function cDR(d){this.a=d},
cDS:function cDS(){},
cDQ:function cDQ(d,e,f,g,h){var _=this
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
aGF:function aGF(){this.c=this.a=this.d=null},
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
H=c[294]
F=c[144]
K=c[335]
I=c[150]
E=c[69]
G=c[151]
A=a.updateHolder(c[133],A)
D=c[440]
L=c[431]
A.a5P.prototype={
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
A.Oy.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bnm(d){this.a.cE(new A.bZg(this,d),new A.bZh(this,d),y.d)}}
A.FS.prototype={
gFD(){var x=this.r-this.w
return x<0?0:x}}
A.rk.prototype={
gbxT(){return this.e==="Pago"},
gpS(d){var x=this.z
return x>0?x:this.f}}
A.lM.prototype={
gaC4(){var x=this.d
return new B.a6(x,new A.bsZ(),B.a8(x).i("a6<1>")).cZ(0,0,new A.bt_())},
gayL(){return C.e.cZ(this.c,0,new A.bsT())},
gaC5(){var x=this.d
return new B.a6(x,new A.bsX(),B.a8(x).i("a6<1>")).cZ(0,0,new A.bsY())},
gayM(){return C.e.cZ(this.c,0,new A.bsS())},
gbAY(){var x=this.d
return new B.a6(x,new A.bsV(),B.a8(x).i("a6<1>")).cZ(0,0,new A.bsW())},
gaz0(){return C.e.cZ(this.e,0,new A.bsU())}}
A.DN.prototype={
R(){return new A.aGF()},
m9(d){return this.e.$0()}}
A.aGF.prototype={
zG(d,e){return this.bhs(d,e)},
bhs(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zG=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bXs(r,d))
u=4
q=null
x=7
return B.d(A.dri(new B.Z(r.a.m9(0),B.df("files","")),y.e,y.z),$async$zG)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zG)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a2(D.c_3)
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
return B.m($async$zG,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.V(22)
u=u.c
x=w.d
return B.z(v,B.x(B.a([new A.Zh(L.Pn,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bXx(w,t),v),H.CR,new A.Zh(C.Ey,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bXy(w,t),v),H.CR,new A.Zh(C.lZ,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bXz(w,t),v)],y.p),C.H,C.h,C.l,0,C.u),C.r,v,v,new B.I(C.t,v,v,s,C.bi,v,C.y),v,v,v,C.i8,v,v,v)}}
A.Zh.prototype={
u(d){var x,w,v,u=this,t=null,s=B.V(14),r=u.f,q=r?t:u.r,p=B.V(12)
p=B.z(C.L,B.b4(u.c,$.au,t,t,20),C.r,t,t,new B.I(C.a7,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.x(B.a([B.h(u.d,t,t,t,t,C.bE,t,t,t),B.h(u.e,t,t,t,t,C.hn,t,t,t)],x),C.H,C.h,C.l,0,C.u),1)
v=$.au
return B.eC(!1,s,!0,new B.Q(C.nH,B.N(B.a([p,C.af,w,r?B.aI(B.aol(t,v,t,t,t,t,t,2,t,t),20,20):B.b4(K.vH,v,t,t,20)],x),C.w,C.h,C.l,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["y(rk)","S(S,rk)","F<~>(lM)","S(S,FS)","S(S,Mr)","rk()"])
A.b86.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.Z(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jS(new A.a5P(new B.Z(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a5P<+(1?,2?),+(hd?,hd?)>")))}},
$S:15}
A.bZg.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bn(1)")}}
A.bZh.prototype={
$2(d,e){this.a.c=new B.hd(d,e)
this.b.$1(1)},
$S:23}
A.bZf.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cFz.prototype={
$1(d){return C.k.ar(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:178}
A.bsZ.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bt_.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bsT.prototype={
$2(d,e){return d+e.gFD()},
$S:z+3}
A.bsX.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsY.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lp(x,w>0?w:x))},
$S:z+1}
A.bsS.prototype={
$2(d,e){var x=e.gFD()
return d+(x+G.lp(x,e.r))},
$S:z+3}
A.bsV.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsW.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lp(x,w>0?w:x)},
$S:z+1}
A.bsU.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cEw.prototype={
$1(d){return d.length!==0},
$S:7}
A.cDR.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cEp(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cA(x==null?"Parceiro":x)}return x},
$S:356}
A.cDS.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cA(x==null?"":x)},
$S:356}
A.cDQ.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cEp(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cA(k)
k=l?p:J.i(m,"booking_number")
k=I.cHC(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bI_.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bId.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cZp(n.h(o,"amount"))
s=A.dc7(n.h(o,"paid_at"))
r=A.dc7(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cA(o==null?"":o)
n=q.e.$1(m)
return new A.rk(k,w,j,v,u,t,s,r,o,n,A.cZp(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bXs.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bXt.prototype={
$0(){return this.a.d=null},
$S:0}
A.bXx.prototype={
$0(){return this.a.zG("pdf",new A.bXw(this.b))},
$S:0}
A.bXw.prototype={
$1(d){return this.aFh(d)},
aFh(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
x=3
return B.d(E.cO5(d,u.a),$async$$1)
case 3:t=f
B.cq("files")
s=E.d_l(d,"pdf")
B.cq("files")
v=F.a_b(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXy.prototype={
$0(){return this.a.zG("xlsx",new A.bXv(this.b))},
$S:0}
A.bXv.prototype={
$1(d){return this.aFg(d)},
aFg(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
t=E.dMi(d,u.a)
B.cq("files")
s=E.d_l(d,"xlsx")
B.cq("files")
v=F.a_b(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXz.prototype={
$0(){return this.a.zG("rec",new A.bXu(this.b))},
$S:0}
A.bXu.prototype={
$1(d){return this.aFf(d)},
aFf(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
x=2
return B.d(E.cNT(d,v.a),$async$$1)
case 2:u=f
B.cq("files")
t=E.d_l(new A.lM("Comprovativos",d.b,d.c,d.d,D.WW,D.WX,null),"pdf")
B.cq("files")
x=3
return B.d(F.a_b(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bz,[A.b86,A.bZg,A.bZf,A.cFz,A.bsZ,A.bsX,A.bsV,A.cEw,A.cDR,A.cDS,A.bXw,A.bXv,A.bXu])
w(A.a5P,B.fa)
x(B.L,[A.Oy,A.FS,A.rk,A.lM])
x(B.cN,[A.bZh,A.bt_,A.bsT,A.bsY,A.bsS,A.bsW,A.bsU])
x(B.bR,[A.cDQ,A.bXs,A.bXt,A.bXx,A.bXy,A.bXz])
w(A.DN,B.G)
w(A.aGF,B.Y)
w(A.Zh,B.J)})()
B.br(b.typeUniverse,JSON.parse('{"a5P":{"fa":[]},"DN":{"G":[],"e":[],"f":[]},"aGF":{"Y":["DN"]},"Zh":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c4<c,c>"),b:x("r<FS>"),P:x("r<rk>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Oy<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bn"),e:x("lM"),N:x("c"),U:x("a6<c>"),q:x("dn"),i:x("S"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.WX=x([],B.w("r<a7Q>"))
D.WW=x([],B.w("r<Mr>"))
D.bK4={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bHr=new B.c4(D.bK4,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bJI={deposit:0,final_payment:1,guest_share:2}
D.bI_=new B.c4(D.bJI,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bJW={paid:0,pending:1,failed:2,refunded:3}
D.bId=new B.c4(D.bJW,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cew=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.c_3=new B.bH(D.cew,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.z,null)})()};
(a=>{a["CeXYrZWsZbU7o77ZpZmUyNjR998="]=a.current})($__dart_deferred_initializers__);