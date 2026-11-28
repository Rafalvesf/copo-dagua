((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dmC(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aM($.aT,x.i("aM<+(1,2)>")),v=new A.Oe(d.a,e.i("Oe<0>")),u=new A.Oe(d.b,f.i("Oe<0>"))
A.dw7(B.a([v,u],y.a),new A.b6Z(new B.Pk(w,x.i("Pk<+(1,2)>")),v,u,e,f))
return w},
dw7(d,e){var x={},w=x.a=x.b=0,v=new A.bWQ(x,d,e)
for(;w<2;++w)d[w].blT(v)},
b6Z:function b6Z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5o:function a5o(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Oe:function Oe(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bWR:function bWR(d,e){this.a=d
this.b=e},
bWS:function bWS(d,e){this.a=d
this.b=e},
bWQ:function bWQ(d,e,f){this.a=d
this.b=e
this.c=f},
akj(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akj=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.T().b
n===$&&B.b()
x=6
return B.d(n.R("platform_settings").az(0,"*").W("id",1).dP(0),$async$akj)
case 6:t=e
$.cFa=B.dt(J.h(t,"platform_commission_percentage"))
$.cVw=B.b59(J.h(t,"organizer_fee_tiers"),$.cFa)
s=J.h(t,"partner_fee_tiers")
r=new A.cBy()
if(y.j.b(s)&&J.dO(s)){q=B.a([],y.s)
for(n=J.bk(s,y.f),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<U.E>")),m=m.i("U.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.q(r.$1(B.dt(J.h(p,"pct"))))+"% acima":B.q(r.$1(B.dt(J.h(p,"pct"))))+"% at\xe9 "+B.aQ(B.dt(J.h(p,"up_to")),!1)
J.bw(q,l)}$.cFb=J.kc(q,", ")}else{k=B.aK(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cFb=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akj,w)},
cUZ(d){var x
if(typeof d=="number")x=d
else{x=B.fo(B.q(d))
if(x==null)x=0}return x},
d7C(d){var x
if(d==null)x=null
else{x=B.dL(B.q(d))
x=x==null?null:x.eg()}return x},
cAr(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cx(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a5(B.a([v,C.f.D(J.cx(x==null?"":x))],y.s),new A.cAy(),y.U).a3(0," & ")
return x.length===0?"Cliente":x},
cUt(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.A(g,y.c)
for(x=J.c9(a0),w=x.gV(a0);w.t();){v=w.gE(w)
f.j(0,B.a1(J.h(v,"id")),v)}u=new A.czT(a2)
t=new A.czU()
w=B.a([],y.P)
for(v=J.c9(a1),s=v.gV(a1);s.t();)w.push(new A.czS(f,s.gE(s),a2,d,t).$0())
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
o=I.cDx(p,J.cx(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.dL(B.q(m))
m=m==null?h:m.eg()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cx(l==null?"":l)
k=D.bGy.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fo(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FH(o,p,n,m,l,k,j,v==null?0:v))}return new A.lL(e,d,g,w,D.Wo,D.Wp,h)},
cBy:function cBy(){},
FH:function FH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ra:function ra(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lL:function lL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
brP:function brP(){},
brQ:function brQ(){},
brJ:function brJ(){},
brN:function brN(){},
brO:function brO(){},
brI:function brI(){},
brL:function brL(){},
brM:function brM(){},
brK:function brK(){},
cAy:function cAy(){},
czT:function czT(d){this.a=d},
czU:function czU(){},
czS:function czS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DE:function DE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFK:function aFK(){this.c=this.a=this.d=null},
bV2:function bV2(d,e){this.a=d
this.b=e},
bV3:function bV3(d){this.a=d},
bV7:function bV7(d,e){this.a=d
this.b=e},
bV6:function bV6(d){this.a=d},
bV8:function bV8(d,e){this.a=d
this.b=e},
bV5:function bV5(d){this.a=d},
bV9:function bV9(d,e){this.a=d
this.b=e},
bV4:function bV4(d){this.a=d},
YP:function YP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,L
J=c[1]
B=c[0]
C=c[2]
H=c[288]
F=c[139]
K=c[328]
I=c[145]
E=c[69]
G=c[146]
A=a.updateHolder(c[128],A)
D=c[428]
L=c[420]
A.a5o.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.q(u.a)},
gmW(){var x=this.c
x=x==null?null:x.b
return x==null?B.f7.prototype.gmW.call(this):x}}
A.Oe.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
blT(d){this.a.cC(new A.bWR(this,d),new A.bWS(this,d),y.d)}}
A.FH.prototype={
gFl(){var x=this.r-this.w
return x<0?0:x}}
A.ra.prototype={
gbwp(){return this.e==="Pago"},
gpO(d){var x=this.z
return x>0?x:this.f}}
A.lL.prototype={
gaBa(){var x=this.d
return new B.a5(x,new A.brP(),B.a8(x).i("a5<1>")).d7(0,0,new A.brQ())},
gaxQ(){return C.e.d7(this.c,0,new A.brJ())},
gaBb(){var x=this.d
return new B.a5(x,new A.brN(),B.a8(x).i("a5<1>")).d7(0,0,new A.brO())},
gaxR(){return C.e.d7(this.c,0,new A.brI())},
gbzu(){var x=this.d
return new B.a5(x,new A.brL(),B.a8(x).i("a5<1>")).d7(0,0,new A.brM())},
gay5(){return C.e.d7(this.e,0,new A.brK())}}
A.DE.prototype={
P(){return new A.aFK()},
m6(d){return this.e.$0()}}
A.aFK.prototype={
zx(d,e){return this.bg1(d,e)},
bg1(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zx=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bV2(r,d))
u=4
q=null
x=7
return B.d(A.dmC(new B.a3(r.a.m6(0),B.db("files","")),y.e,y.z),$async$zx)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zx)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a4(D.bYT)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bV3(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zx,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.a0(22)
u=u.c
x=w.d
return B.D(v,B.B(B.a([new A.YP(L.OS,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bV7(w,t),v),H.Cu,new A.YP(C.E9,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bV8(w,t),v),H.Cu,new A.YP(C.nK,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bV9(w,t),v)],y.p),C.G,C.j,C.m,0,C.v),C.r,v,v,new B.O(C.t,v,v,s,C.bb,v,C.y),v,v,v,C.nl,v,v,v)}}
A.YP.prototype={
u(d){var x,w,v,u=this,t=null,s=B.a0(14),r=u.f,q=r?t:u.r,p=B.a0(12)
p=B.D(C.L,B.b2(u.c,$.ap,t,t,20),C.r,t,t,new B.O(C.ac,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a6(B.B(B.a([B.i(u.d,t,t,t,t,C.bT,t,t,t),B.i(u.e,t,t,t,t,C.fz,t,t,t)],x),C.G,C.j,C.m,0,C.v),1)
v=$.ap
return B.eF(!1,s,!0,new B.R(C.nh,B.Q(B.a([p,C.ag,w,r?B.aJ(B.anB(t,v,t,t,t,t,t,2,t,t),20,20):B.b2(K.ve,v,t,t,20)],x),C.w,C.j,C.m,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["y(ra)","P(P,ra)","F<~>(lL)","P(P,FH)","P(P,Mb)","ra()"])
A.b6Z.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a3(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jR(new A.a5o(new B.a3(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a5o<+(1?,2?),+(h8?,h8?)>")))}},
$S:20}
A.bWR.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("by(1)")}}
A.bWS.prototype={
$2(d,e){this.a.c=new B.h8(d,e)
this.b.$1(1)},
$S:22}
A.bWQ.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:20}
A.cBy.prototype={
$1(d){return C.k.ao(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:178}
A.brP.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.brQ.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.brJ.prototype={
$2(d,e){return d+e.gFl()},
$S:z+3}
A.brN.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.brO.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lo(x,w>0?w:x))},
$S:z+1}
A.brI.prototype={
$2(d,e){var x=e.gFl()
return d+(x+G.lo(x,e.r))},
$S:z+3}
A.brL.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.brM.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lo(x,w>0?w:x)},
$S:z+1}
A.brK.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cAy.prototype={
$1(d){return d.length!==0},
$S:8}
A.czT.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cAr(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cx(x==null?"Parceiro":x)}return x},
$S:453}
A.czU.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cx(x==null?"":x)},
$S:453}
A.czS.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cAr(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cx(k)
k=l?p:J.h(m,"booking_number")
k=I.cDx(k,x,l?p:J.h(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bH5.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bHj.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cUZ(n.h(o,"amount"))
s=A.d7C(n.h(o,"paid_at"))
r=A.d7C(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cx(o==null?"":o)
n=q.e.$1(m)
return new A.ra(k,w,j,v,u,t,s,r,o,n,A.cUZ(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bV2.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bV3.prototype={
$0(){return this.a.d=null},
$S:0}
A.bV7.prototype={
$0(){return this.a.zx("pdf",new A.bV6(this.b))},
$S:0}
A.bV6.prototype={
$1(d){return this.aEm(d)},
aEm(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cJV(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.cVU(d,"pdf")
B.cm("files")
v=F.ZJ(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bV8.prototype={
$0(){return this.a.zx("xlsx",new A.bV5(this.b))},
$S:0}
A.bV5.prototype={
$1(d){return this.aEl(d)},
aEl(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dHy(d,u.a)
B.cm("files")
s=E.cVU(d,"xlsx")
B.cm("files")
v=F.ZJ(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bV9.prototype={
$0(){return this.a.zx("rec",new A.bV4(this.b))},
$S:0}
A.bV4.prototype={
$1(d){return this.aEk(d)},
aEk(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cJI(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.cVU(new A.lL("Comprovativos",d.b,d.c,d.d,D.Wo,D.Wp,null),"pdf")
B.cm("files")
x=3
return B.d(F.ZJ(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.b6Z,A.bWR,A.bWQ,A.cBy,A.brP,A.brN,A.brL,A.cAy,A.czT,A.czU,A.bV6,A.bV5,A.bV4])
w(A.a5o,B.f7)
x(B.I,[A.Oe,A.FH,A.ra,A.lL])
x(B.cR,[A.bWS,A.brQ,A.brJ,A.brO,A.brI,A.brM,A.brK])
x(B.bR,[A.czS,A.bV2,A.bV3,A.bV7,A.bV8,A.bV9])
w(A.DE,B.K)
w(A.aFK,B.a_)
w(A.YP,B.L)})()
B.bq(b.typeUniverse,JSON.parse('{"a5o":{"f7":[]},"DE":{"K":[],"e":[],"f":[]},"aFK":{"a_":["DE"]},"YP":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c4<c,c>"),b:x("r<FH>"),P:x("r<ra>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Oe<@>>"),j:x("t<@>"),c:x("a4<c,@>"),f:x("a4<@,@>"),d:x("by"),e:x("lL"),N:x("c"),U:x("a5<c>"),q:x("ds"),i:x("P"),z:x("@"),Y:x("a4<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Wp=x([],B.w("r<a7p>"))
D.Wo=x([],B.w("r<Mb>"))
D.bJb={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bGy=new B.c4(D.bJb,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIP={deposit:0,final_payment:1,guest_share:2}
D.bH5=new B.c4(D.bIP,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bJ2={paid:0,pending:1,failed:2,refunded:3}
D.bHj=new B.c4(D.bJ2,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cd1=new B.E("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bYT=new B.bI(D.cd1,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)})()};
(a=>{a["37LWskZ525ZH7oGAJ20tlOdQ6Ck="]=a.current})($__dart_deferred_initializers__);