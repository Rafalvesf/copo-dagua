((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dms(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aM($.aS,x.i("aM<+(1,2)>")),v=new A.Of(d.a,e.i("Of<0>")),u=new A.Of(d.b,f.i("Of<0>"))
A.dvZ(B.a([v,u],y.a),new A.b6W(new B.Pl(w,x.i("Pl<+(1,2)>")),v,u,e,f))
return w},
dvZ(d,e){var x={},w=x.a=x.b=0,v=new A.bWM(x,d,e)
for(;w<2;++w)d[w].blZ(v)},
b6W:function b6W(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5m:function a5m(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Of:function Of(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bWN:function bWN(d,e){this.a=d
this.b=e},
bWO:function bWO(d,e){this.a=d
this.b=e},
bWM:function bWM(d,e,f){this.a=d
this.b=e
this.c=f},
akg(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akg=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.T().b
n===$&&B.b()
x=6
return B.d(n.R("platform_settings").az(0,"*").W("id",1).dP(0),$async$akg)
case 6:t=e
$.cF6=B.dt(J.h(t,"platform_commission_percentage"))
$.cVs=B.b56(J.h(t,"organizer_fee_tiers"),$.cF6)
s=J.h(t,"partner_fee_tiers")
r=new A.cBu()
if(y.j.b(s)&&J.dO(s)){q=B.a([],y.s)
for(n=J.bk(s,y.f),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<U.E>")),m=m.i("U.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.q(r.$1(B.dt(J.h(p,"pct"))))+"% acima":B.q(r.$1(B.dt(J.h(p,"pct"))))+"% at\xe9 "+B.aQ(B.dt(J.h(p,"up_to")),!1)
J.bw(q,l)}$.cF7=J.kb(q,", ")}else{k=B.aK(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cF7=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akg,w)},
cUV(d){var x
if(typeof d=="number")x=d
else{x=B.fo(B.q(d))
if(x==null)x=0}return x},
d7y(d){var x
if(d==null)x=null
else{x=B.dK(B.q(d))
x=x==null?null:x.eh()}return x},
cAn(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cx(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a5(B.a([v,C.f.D(J.cx(x==null?"":x))],y.s),new A.cAu(),y.U).a3(0," & ")
return x.length===0?"Cliente":x},
cUp(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.A(g,y.c)
for(x=J.c9(a0),w=x.gV(a0);w.t();){v=w.gE(w)
f.j(0,B.a1(J.h(v,"id")),v)}u=new A.czP(a2)
t=new A.czQ()
w=B.a([],y.P)
for(v=J.c9(a1),s=v.gV(a1);s.t();)w.push(new A.czO(f,s.gE(s),a2,d,t).$0())
r=B.A(g,y.i)
for(g=v.gV(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.a1(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.fo(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gV(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.cDt(p,J.cx(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.dK(B.q(m))
m=m==null?h:m.eh()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cx(l==null?"":l)
k=D.bGv.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fo(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FH(o,p,n,m,l,k,j,v==null?0:v))}return new A.lK(e,d,g,w,D.Wp,D.Wq,h)},
cBu:function cBu(){},
FH:function FH(d,e,f,g,h,i,j,k){var _=this
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
lK:function lK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
brL:function brL(){},
brM:function brM(){},
brF:function brF(){},
brJ:function brJ(){},
brK:function brK(){},
brE:function brE(){},
brH:function brH(){},
brI:function brI(){},
brG:function brG(){},
cAu:function cAu(){},
czP:function czP(d){this.a=d},
czQ:function czQ(){},
czO:function czO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DD:function DD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFI:function aFI(){this.c=this.a=this.d=null},
bUZ:function bUZ(d,e){this.a=d
this.b=e},
bV_:function bV_(d){this.a=d},
bV3:function bV3(d,e){this.a=d
this.b=e},
bV2:function bV2(d){this.a=d},
bV4:function bV4(d,e){this.a=d
this.b=e},
bV1:function bV1(d){this.a=d},
bV5:function bV5(d,e){this.a=d
this.b=e},
bV0:function bV0(d){this.a=d},
YQ:function YQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[285]
F=c[142]
K=c[324]
I=c[147]
E=c[69]
G=c[148]
A=a.updateHolder(c[131],A)
D=c[426]
L=c[419]
A.a5m.prototype={
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
return x==null?B.f7.prototype.gmY.call(this):x}}
A.Of.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
blZ(d){this.a.cC(new A.bWN(this,d),new A.bWO(this,d),y.d)}}
A.FH.prototype={
gFp(){var x=this.r-this.w
return x<0?0:x}}
A.r9.prototype={
gbws(){return this.e==="Pago"},
gpQ(d){var x=this.z
return x>0?x:this.f}}
A.lK.prototype={
gaBh(){var x=this.d
return new B.a5(x,new A.brL(),B.a8(x).i("a5<1>")).d7(0,0,new A.brM())},
gaxX(){return C.e.d7(this.c,0,new A.brF())},
gaBi(){var x=this.d
return new B.a5(x,new A.brJ(),B.a8(x).i("a5<1>")).d7(0,0,new A.brK())},
gaxY(){return C.e.d7(this.c,0,new A.brE())},
gbzx(){var x=this.d
return new B.a5(x,new A.brH(),B.a8(x).i("a5<1>")).d7(0,0,new A.brI())},
gayc(){return C.e.d7(this.e,0,new A.brG())}}
A.DD.prototype={
P(){return new A.aFI()},
m6(d){return this.e.$0()}}
A.aFI.prototype={
zB(d,e){return this.bg6(d,e)},
bg6(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zB=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bUZ(r,d))
u=4
q=null
x=7
return B.d(A.dms(new B.a3(r.a.m6(0),B.db("files","")),y.e,y.z),$async$zB)
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
if(n!=null)n.O(y.q).f.a4(D.bYJ)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bV_(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zB,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.a0(22)
u=u.c
x=w.d
return B.D(v,B.B(B.a([new A.YQ(L.OT,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bV3(w,t),v),H.Cs,new A.YQ(C.E9,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bV4(w,t),v),H.Cs,new A.YQ(C.nK,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bV5(w,t),v)],y.p),C.H,C.j,C.m,0,C.v),C.r,v,v,new B.O(C.t,v,v,s,C.bb,v,C.y),v,v,v,C.nn,v,v,v)}}
A.YQ.prototype={
u(d){var x,w,v,u=this,t=null,s=B.a0(14),r=u.f,q=r?t:u.r,p=B.a0(12)
p=B.D(C.K,B.b2(u.c,$.ap,t,t,20),C.r,t,t,new B.O(C.ac,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a6(B.B(B.a([B.i(u.d,t,t,t,t,C.bS,t,t,t),B.i(u.e,t,t,t,t,C.fA,t,t,t)],x),C.H,C.j,C.m,0,C.v),1)
v=$.ap
return B.eJ(!1,s,!0,new B.R(C.nj,B.Q(B.a([p,C.ag,w,r?B.aJ(B.any(t,v,t,t,t,t,t,2,t,t),20,20):B.b2(K.vf,v,t,t,20)],x),C.w,C.j,C.m,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["y(r9)","P(P,r9)","F<~>(lK)","P(P,FH)","P(P,Ma)","r9()"])
A.b6W.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a3(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jS(new A.a5m(new B.a3(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a5m<+(1?,2?),+(h8?,h8?)>")))}},
$S:20}
A.bWN.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("by(1)")}}
A.bWO.prototype={
$2(d,e){this.a.c=new B.h8(d,e)
this.b.$1(1)},
$S:23}
A.bWM.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:20}
A.cBu.prototype={
$1(d){return C.k.ar(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:179}
A.brL.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.brM.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.brF.prototype={
$2(d,e){return d+e.gFp()},
$S:z+3}
A.brJ.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.brK.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.ln(x,w>0?w:x))},
$S:z+1}
A.brE.prototype={
$2(d,e){var x=e.gFp()
return d+(x+G.ln(x,e.r))},
$S:z+3}
A.brH.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.brI.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.ln(x,w>0?w:x)},
$S:z+1}
A.brG.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cAu.prototype={
$1(d){return d.length!==0},
$S:8}
A.czP.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cAn(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cx(x==null?"Parceiro":x)}return x},
$S:451}
A.czQ.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cx(x==null?"":x)},
$S:451}
A.czO.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cAn(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cx(k)
k=l?p:J.h(m,"booking_number")
k=I.cDt(k,x,l?p:J.h(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bH2.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bHg.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cUV(n.h(o,"amount"))
s=A.d7y(n.h(o,"paid_at"))
r=A.d7y(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cx(o==null?"":o)
n=q.e.$1(m)
return new A.r9(k,w,j,v,u,t,s,r,o,n,A.cUV(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bUZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bV_.prototype={
$0(){return this.a.d=null},
$S:0}
A.bV3.prototype={
$0(){return this.a.zB("pdf",new A.bV2(this.b))},
$S:0}
A.bV2.prototype={
$1(d){return this.aEt(d)},
aEt(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cJQ(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.cVQ(d,"pdf")
B.cm("files")
v=F.ZK(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bV4.prototype={
$0(){return this.a.zB("xlsx",new A.bV1(this.b))},
$S:0}
A.bV1.prototype={
$1(d){return this.aEs(d)},
aEs(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dHn(d,u.a)
B.cm("files")
s=E.cVQ(d,"xlsx")
B.cm("files")
v=F.ZK(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bV5.prototype={
$0(){return this.a.zB("rec",new A.bV0(this.b))},
$S:0}
A.bV0.prototype={
$1(d){return this.aEr(d)},
aEr(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cJD(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.cVQ(new A.lK("Comprovativos",d.b,d.c,d.d,D.Wp,D.Wq,null),"pdf")
B.cm("files")
x=3
return B.d(F.ZK(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.b6W,A.bWN,A.bWM,A.cBu,A.brL,A.brJ,A.brH,A.cAu,A.czP,A.czQ,A.bV2,A.bV1,A.bV0])
w(A.a5m,B.f7)
x(B.H,[A.Of,A.FH,A.r9,A.lK])
x(B.cR,[A.bWO,A.brM,A.brF,A.brK,A.brE,A.brI,A.brG])
x(B.bR,[A.czO,A.bUZ,A.bV_,A.bV3,A.bV4,A.bV5])
w(A.DD,B.J)
w(A.aFI,B.a_)
w(A.YQ,B.L)})()
B.br(b.typeUniverse,JSON.parse('{"a5m":{"f7":[]},"DD":{"J":[],"e":[],"f":[]},"aFI":{"a_":["DD"]},"YQ":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c3<c,c>"),b:x("r<FH>"),P:x("r<r9>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Of<@>>"),j:x("t<@>"),c:x("a4<c,@>"),f:x("a4<@,@>"),d:x("by"),e:x("lK"),N:x("c"),U:x("a5<c>"),q:x("ds"),i:x("P"),z:x("@"),Y:x("a4<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Wq=x([],B.w("r<a7n>"))
D.Wp=x([],B.w("r<Ma>"))
D.bJ8={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bGv=new B.c3(D.bJ8,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIM={deposit:0,final_payment:1,guest_share:2}
D.bH2=new B.c3(D.bIM,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bJ_={paid:0,pending:1,failed:2,refunded:3}
D.bHg=new B.c3(D.bJ_,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.ccU=new B.E("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bYJ=new B.bI(D.ccU,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)})()};
(a=>{a["GF8P/4GPjuPF4U0/GloRiXVomVo="]=a.current})($__dart_deferred_initializers__);