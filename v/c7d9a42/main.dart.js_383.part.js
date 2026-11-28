((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dpA(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aO($.aU,x.i("aO<+(1,2)>")),v=new A.Oq(d.a,e.i("Oq<0>")),u=new A.Oq(d.b,f.i("Oq<0>"))
A.dz8(B.a([v,u],y.a),new A.b7N(new B.Pz(w,x.i("Pz<+(1,2)>")),v,u,e,f))
return w},
dz8(d,e){var x={},w=x.a=x.b=0,v=new A.bYt(x,d,e)
for(;w<2;++w)d[w].bmZ(v)},
b7N:function b7N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5L:function a5L(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Oq:function Oq(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bYu:function bYu(d,e){this.a=d
this.b=e},
bYv:function bYv(d,e){this.a=d
this.b=e},
bYt:function bYt(d,e,f){this.a=d
this.b=e
this.c=f},
akS(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akS=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.S().b
n===$&&B.b()
x=6
return B.d(n.R("platform_settings").an(0,"*").W("id",1).dP(0),$async$akS)
case 6:t=e
$.cHM=B.ds(J.i(t,"platform_commission_percentage"))
$.cYj=B.b5Z(J.i(t,"organizer_fee_tiers"),$.cHM)
s=J.i(t,"partner_fee_tiers")
r=new A.cE8()
if(y.j.b(s)&&J.dR(s)){q=B.a([],y.s)
for(n=J.bl(s,y.f),m=B.u(n),n=new B.al(n,n.gA(n),m.i("al<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.ds(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.ds(J.i(p,"pct"))))+"% at\xe9 "+B.aM(B.ds(J.i(p,"up_to")),!1)
J.by(q,l)}$.cHN=J.kF(q,", ")}else{k=B.aL(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cHN=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akS,w)},
cXM(d){var x
if(typeof d=="number")x=d
else{x=B.f0(B.q(d))
if(x==null)x=0}return x},
dar(d){var x
if(d==null)x=null
else{x=B.dq(B.q(d))
x=x==null?null:x.e0()}return x},
cD0(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.C(J.cA(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.C(J.cA(x==null?"":x))],y.s),new A.cD7(),y.U).a2(0," & ")
return x.length===0?"Cliente":x},
cXf(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.cb(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.a1(J.i(v,"id")),v)}u=new A.cCs(a2)
t=new A.cCt()
w=B.a([],y.P)
for(v=J.cb(a1),s=v.gX(a1);s.t();)w.push(new A.cCr(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.a1(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.f0(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cGa(p,J.cA(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.dq(B.q(m))
m=m==null?h:m.e0()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cA(l==null?"":l)
k=D.bHe.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.f0(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FR(o,p,n,m,l,k,j,v==null?0:v))}return new A.lM(e,d,g,w,D.WM,D.WN,h)},
cE8:function cE8(){},
FR:function FR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
rf:function rf(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bsE:function bsE(){},
bsF:function bsF(){},
bsy:function bsy(){},
bsC:function bsC(){},
bsD:function bsD(){},
bsx:function bsx(){},
bsA:function bsA(){},
bsB:function bsB(){},
bsz:function bsz(){},
cD7:function cD7(){},
cCs:function cCs(d){this.a=d},
cCt:function cCt(){},
cCr:function cCr(d,e,f,g,h){var _=this
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
aGs:function aGs(){this.c=this.a=this.d=null},
bWG:function bWG(d,e){this.a=d
this.b=e},
bWH:function bWH(d){this.a=d},
bWL:function bWL(d,e){this.a=d
this.b=e},
bWK:function bWK(d){this.a=d},
bWM:function bWM(d,e){this.a=d
this.b=e},
bWJ:function bWJ(d){this.a=d},
bWN:function bWN(d,e){this.a=d
this.b=e},
bWI:function bWI(d){this.a=d},
Zb:function Zb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[292]
F=c[144]
K=c[333]
I=c[150]
E=c[69]
G=c[151]
A=a.updateHolder(c[133],A)
D=c[440]
L=c[431]
A.a5L.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.q(u.a)},
gmX(){var x=this.c
x=x==null?null:x.b
return x==null?B.f9.prototype.gmX.call(this):x}}
A.Oq.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bmZ(d){this.a.cC(new A.bYu(this,d),new A.bYv(this,d),y.d)}}
A.FR.prototype={
gFz(){var x=this.r-this.w
return x<0?0:x}}
A.rf.prototype={
gbxv(){return this.e==="Pago"},
gpP(d){var x=this.z
return x>0?x:this.f}}
A.lM.prototype={
gaBN(){var x=this.d
return new B.a6(x,new A.bsE(),B.a8(x).i("a6<1>")).d_(0,0,new A.bsF())},
gays(){return C.e.d_(this.c,0,new A.bsy())},
gaBO(){var x=this.d
return new B.a6(x,new A.bsC(),B.a8(x).i("a6<1>")).d_(0,0,new A.bsD())},
gayt(){return C.e.d_(this.c,0,new A.bsx())},
gbAz(){var x=this.d
return new B.a6(x,new A.bsA(),B.a8(x).i("a6<1>")).d_(0,0,new A.bsB())},
gayI(){return C.e.d_(this.e,0,new A.bsz())}}
A.DL.prototype={
P(){return new A.aGs()},
m8(d){return this.e.$0()}}
A.aGs.prototype={
zC(d,e){return this.bh6(d,e)},
bh6(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zC=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bWG(r,d))
u=4
q=null
x=7
return B.d(A.dpA(new B.a3(r.a.m8(0),B.dd("files","")),y.e,y.z),$async$zC)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zC)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a3(D.bZQ)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bWH(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zC,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.B(v,B.A(B.a([new A.Zb(L.Pf,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bWL(w,t),v),H.CM,new A.Zb(C.Et,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bWM(w,t),v),H.CM,new A.Zb(C.lP,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bWN(w,t),v)],y.p),C.H,C.h,C.l,0,C.u),C.r,v,v,new B.M(C.t,v,v,s,C.bh,v,C.y),v,v,v,C.jC,v,v,v)}}
A.Zb.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.B(C.L,B.b3(u.c,$.at,t,t,20),C.r,t,t,new B.M(C.a7,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.A(B.a([B.h(u.d,t,t,t,t,C.bG,t,t,t),B.h(u.e,t,t,t,t,C.hk,t,t,t)],x),C.H,C.h,C.l,0,C.u),1)
v=$.at
return B.eC(!1,s,!0,new B.Q(C.nB,B.N(B.a([p,C.af,w,r?B.aG(B.aoa(t,v,t,t,t,t,t,2,t,t),20,20):B.b3(K.vA,v,t,t,20)],x),C.w,C.h,C.l,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["x(rf)","R(R,rf)","F<~>(lM)","R(R,FR)","R(R,Ml)","rf()"])
A.b7N.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a3(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jR(new A.a5L(new B.a3(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a5L<+(1?,2?),+(ha?,ha?)>")))}},
$S:15}
A.bYu.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("br(1)")}}
A.bYv.prototype={
$2(d,e){this.a.c=new B.ha(d,e)
this.b.$1(1)},
$S:23}
A.bYt.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cE8.prototype={
$1(d){return C.k.ap(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:175}
A.bsE.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsF.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bsy.prototype={
$2(d,e){return d+e.gFz()},
$S:z+3}
A.bsC.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsD.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lp(x,w>0?w:x))},
$S:z+1}
A.bsx.prototype={
$2(d,e){var x=e.gFz()
return d+(x+G.lp(x,e.r))},
$S:z+3}
A.bsA.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsB.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lp(x,w>0?w:x)},
$S:z+1}
A.bsz.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cD7.prototype={
$1(d){return d.length!==0},
$S:8}
A.cCs.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cD0(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cA(x==null?"Parceiro":x)}return x},
$S:451}
A.cCt.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cA(x==null?"":x)},
$S:451}
A.cCr.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cD0(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cA(k)
k=l?p:J.i(m,"booking_number")
k=I.cGa(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bHN.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bI0.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cXM(n.h(o,"amount"))
s=A.dar(n.h(o,"paid_at"))
r=A.dar(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cA(o==null?"":o)
n=q.e.$1(m)
return new A.rf(k,w,j,v,u,t,s,r,o,n,A.cXM(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bWG.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bWH.prototype={
$0(){return this.a.d=null},
$S:0}
A.bWL.prototype={
$0(){return this.a.zC("pdf",new A.bWK(this.b))},
$S:0}
A.bWK.prototype={
$1(d){return this.aEZ(d)},
aEZ(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cp("files")
B.cp("files")
x=3
return B.d(E.cMy(d,u.a),$async$$1)
case 3:t=f
B.cp("files")
s=E.cYH(d,"pdf")
B.cp("files")
v=F.a_5(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bWM.prototype={
$0(){return this.a.zC("xlsx",new A.bWJ(this.b))},
$S:0}
A.bWJ.prototype={
$1(d){return this.aEY(d)},
aEY(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cp("files")
B.cp("files")
t=E.dKz(d,u.a)
B.cp("files")
s=E.cYH(d,"xlsx")
B.cp("files")
v=F.a_5(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bWN.prototype={
$0(){return this.a.zC("rec",new A.bWI(this.b))},
$S:0}
A.bWI.prototype={
$1(d){return this.aEX(d)},
aEX(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cp("files")
B.cp("files")
x=2
return B.d(E.cMl(d,v.a),$async$$1)
case 2:u=f
B.cp("files")
t=E.cYH(new A.lM("Comprovativos",d.b,d.c,d.d,D.WM,D.WN,null),"pdf")
B.cp("files")
x=3
return B.d(F.a_5(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.b7N,A.bYu,A.bYt,A.cE8,A.bsE,A.bsC,A.bsA,A.cD7,A.cCs,A.cCt,A.bWK,A.bWJ,A.bWI])
w(A.a5L,B.f9)
x(B.J,[A.Oq,A.FR,A.rf,A.lM])
x(B.cO,[A.bYv,A.bsF,A.bsy,A.bsD,A.bsx,A.bsB,A.bsz])
x(B.bQ,[A.cCr,A.bWG,A.bWH,A.bWL,A.bWM,A.bWN])
w(A.DL,B.G)
w(A.aGs,B.Z)
w(A.Zb,B.H)})()
B.bn(b.typeUniverse,JSON.parse('{"a5L":{"f9":[]},"DL":{"G":[],"e":[],"f":[]},"aGs":{"Z":["DL"]},"Zb":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c2<c,c>"),b:x("r<FR>"),P:x("r<rf>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Oq<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("br"),e:x("lM"),N:x("c"),U:x("a6<c>"),q:x("dm"),i:x("R"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.WN=x([],B.w("r<a7M>"))
D.WM=x([],B.w("r<Ml>"))
D.bJS={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bHe=new B.c2(D.bJS,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bJv={deposit:0,final_payment:1,guest_share:2}
D.bHN=new B.c2(D.bJv,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bJJ={paid:0,pending:1,failed:2,refunded:3}
D.bI0=new B.c2(D.bJJ,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cej=new B.C("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZQ=new B.bF(D.cej,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.z,null)})()};
(a=>{a["D/++sQjADn57AAnryKMwa4snW7I="]=a.current})($__dart_deferred_initializers__);