((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,H,L,F,M,I,E,G,A={
d9h(d,e,f){var x=e.i("@<0>").b8(f),w=new B.aJ($.aN,x.i("aJ<+(1,2)>")),v=new A.N7(d.a,e.i("N7<0>")),u=new A.N7(d.b,f.i("N7<0>"))
A.diG(B.a([v,u],y.a),new A.b2y(new B.Oa(w,x.i("Oa<+(1,2)>")),v,u,e,f))
return w},
diG(d,e){var x={},w=x.a=x.b=0,v=new A.bPB(x,d,e)
for(;w<2;++w)d[w].biV(v)},
b2y:function b2y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3y:function a3y(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
N7:function N7(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bPC:function bPC(d,e){this.a=d
this.b=e},
bPD:function bPD(d,e){this.a=d
this.b=e},
bPB:function bPB(d,e,f){this.a=d
this.b=e
this.c=f},
ai8(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$ai8=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.S().b
n===$&&B.b()
x=6
return B.d(n.T("platform_settings").aI(0,"*").X("id",1).e_(0),$async$ai8)
case 6:t=e
$.cu6=B.dT(J.h(t,"platform_commission_percentage"))
$.cJL=N.b0K(J.h(t,"organizer_fee_tiers"),$.cu6,null)
s=J.h(t,"partner_fee_tiers")
r=new A.cra()
if(y.j.b(s)&&J.ey(s)){q=B.a([],y.s)
for(n=J.by(s,y.f),m=B.u(n),n=new B.ap(n,n.gA(n),m.i("ap<T.E>")),m=m.i("T.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.q(r.$1(B.dT(J.h(p,"pct"))))+"% acima":B.q(r.$1(B.dT(J.h(p,"pct"))))+"% at\xe9 "+B.bh(B.dT(J.h(p,"up_to")),!1)
J.bT(q,l)}$.cu7=J.nN(q,", ")}else{k=B.aX(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cu7=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$ai8,w)},
cJd(d){var x
if(typeof d=="number")x=d
else{x=B.f4(B.q(d))
if(x==null)x=0}return x},
cWo(d){var x
if(d==null)x=null
else{x=B.eO(B.q(d))
x=x==null?null:x.f6()}return x},
cq8(d){var x,w,v
if(d==null)return"Cliente"
x=J.a5(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cL(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a4(B.a([v,C.f.D(J.cL(x==null?"":x))],y.s),new A.cqf(),y.U).ah(0," & ")
return x.length===0?"Cliente":x},
cIJ(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.A(g,y.c)
for(x=J.cA(a0),w=x.gW(a0);w.t();){v=w.gF(w)
f.j(0,B.a2(J.h(v,"id")),v)}u=new A.cpz(a2)
t=new A.cpA()
w=B.a([],y.P)
for(v=J.cA(a1),s=v.gW(a1);s.t();)w.push(new A.cpy(f,s.gF(s),a2,d,t).$0())
r=B.A(g,y.i)
for(g=v.gW(a1);g.t();){f=g.gF(g)
v=J.a5(f)
if(J.o(v.h(f,i),"paid")){q=B.a2(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.f4(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gW(a0),x=y.Y;f.t();){v=f.gF(f)
s=J.a5(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.csT(p,J.cL(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.eO(B.q(m))
m=m==null?h:m.f6()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cL(l==null?"":l)
k=D.bDr.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.f4(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.EK(o,p,n,m,l,k,j,v==null?0:v))}return new A.lr(e,d,g,w,D.Vd,D.Ve,h)},
cra:function cra(){},
EK:function EK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
qA:function qA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lr:function lr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bmE:function bmE(){},
bmF:function bmF(){},
bmy:function bmy(){},
bmC:function bmC(){},
bmD:function bmD(){},
bmx:function bmx(){},
bmA:function bmA(){},
bmB:function bmB(){},
bmz:function bmz(){},
cqf:function cqf(){},
cpz:function cpz(d){this.a=d},
cpA:function cpA(){},
cpy:function cpy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CN:function CN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCV:function aCV(){this.c=this.a=this.d=null},
bO4:function bO4(d,e){this.a=d
this.b=e},
bO5:function bO5(d){this.a=d},
bO9:function bO9(d,e){this.a=d
this.b=e},
bO8:function bO8(d){this.a=d},
bOa:function bOa(d,e){this.a=d
this.b=e},
bO7:function bO7(d){this.a=d},
bOb:function bOb(d,e){this.a=d
this.b=e},
bO6:function bO6(d){this.a=d},
Xh:function Xh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,N,O
J=c[1]
B=c[0]
C=c[2]
K=c[269]
H=c[270]
L=c[292]
F=c[139]
M=c[319]
I=c[143]
E=c[66]
G=c[144]
A=a.updateHolder(c[128],A)
D=c[454]
N=c[176]
O=c[447]
A.a3y.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.q(u.a)},
gmR(){var x=this.c
x=x==null?null:x.b
return x==null?B.eS.prototype.gmR.call(this):x}}
A.N7.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
biV(d){this.a.cD(new A.bPC(this,d),new A.bPD(this,d),y.d)}}
A.EK.prototype={
gEQ(){var x=this.r-this.w
return x<0?0:x}}
A.qA.prototype={
gbtq(){return this.e==="Pago"},
gpI(d){var x=this.z
return x>0?x:this.f}}
A.lr.prototype={
gazG(){var x=this.d
return new B.a4(x,new A.bmE(),B.a6(x).i("a4<1>")).dM(0,0,new A.bmF())},
gawq(){return C.e.dM(this.c,0,new A.bmy())},
gazH(){var x=this.d
return new B.a4(x,new A.bmC(),B.a6(x).i("a4<1>")).dM(0,0,new A.bmD())},
gawr(){return C.e.dM(this.c,0,new A.bmx())},
gbwB(){var x=this.d
return new B.a4(x,new A.bmA(),B.a6(x).i("a4<1>")).dM(0,0,new A.bmB())},
gawF(){return C.e.dM(this.e,0,new A.bmz())}}
A.CN.prototype={
R(){return new A.aCV()},
lX(d){return this.e.$0()}}
A.aCV.prototype={
zg(d,e){return this.bdc(d,e)},
bdc(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zg=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bO4(r,d))
u=4
q=null
x=7
return B.d(A.d9h(new B.af(r.a.lX(0),B.db("files","")),y.e,y.z),$async$zg)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zg)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.S(y.q).f.a7(D.bTX)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bO5(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zg,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.Z(22)
u=u.c
x=w.d
return B.G(v,B.I(B.a([new A.Xh(O.NI,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bO9(w,t),v),H.BE,new A.Xh(C.D8,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bOa(w,t),v),H.BE,new A.Xh(C.nc,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bOb(w,t),v)],y.p),C.L,C.l,C.q,0,C.w),C.t,v,v,new B.N(C.u,v,v,s,C.aE,v,C.y),v,v,v,C.pF,v,v,v)}}
A.Xh.prototype={
u(d){var x,w,v,u=this,t=null,s=B.Z(14),r=u.f,q=r?t:u.r,p=B.Z(12)
p=B.G(C.P,B.b6(u.c,$.ao,t,t,20),C.t,t,t,new B.N(C.am,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.ae(B.I(B.a([B.i(u.d,t,t,t,C.ce,t,t,t),B.i(u.e,t,t,t,L.fo,t,t,t)],x),C.L,C.l,C.q,0,C.w),1)
v=$.ao
return B.eC(!1,s,!0,new B.U(K.pz,B.a_(B.a([p,C.aw,w,r?B.aS(B.ZZ(t,v,t,t,t,t,t,2,t,t),20,20):B.b6(M.uP,v,t,t,20)],x),C.x,C.l,C.q,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(qA)","R(R,qA)","E<~>(lr)","R(R,EK)","R(R,Lb)","qA()"])
A.b2y.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.af(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.kf(new A.a3y(new B.af(x,w),t,d,v.d.i("@<0>").b8(v.e).i("a3y<+(1?,2?),+(h0?,h0?)>")))}},
$S:23}
A.bPC.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bz(1)")}}
A.bPD.prototype={
$2(d,e){this.a.c=new B.h0(d,e)
this.b.$1(1)},
$S:20}
A.bPB.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:23}
A.cra.prototype={
$1(d){return C.j.an(d,1)===0?C.j.ac(d,0):C.j.ac(d,1)},
$S:133}
A.bmE.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bmF.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bmy.prototype={
$2(d,e){return d+e.gEQ()},
$S:z+3}
A.bmC.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bmD.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.l4(x,w>0?w:x))},
$S:z+1}
A.bmx.prototype={
$2(d,e){var x=e.gEQ()
return d+(x+G.l4(x,e.r))},
$S:z+3}
A.bmA.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bmB.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.l4(x,w>0?w:x)},
$S:z+1}
A.bmz.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cqf.prototype={
$1(d){return d.length!==0},
$S:9}
A.cpz.prototype={
$1(d){var x=J.a5(d),w=y.Y
if(this.a)x=A.cq8(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cL(x==null?"Parceiro":x)}return x},
$S:417}
A.cpA.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cL(x==null?"":x)},
$S:417}
A.cpy.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a5(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cq8(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cL(k)
k=I.csT(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bDY.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bEb.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cJd(n.h(o,"amount"))
s=A.cWo(n.h(o,"paid_at"))
r=A.cWo(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cL(o==null?"":o)
n=q.e.$1(m)
return new A.qA(k,w,j,v,u,t,s,r,o,n,A.cJd(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bO4.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bO5.prototype={
$0(){return this.a.d=null},
$S:0}
A.bO9.prototype={
$0(){return this.a.zg("pdf",new A.bO8(this.b))},
$S:0}
A.bO8.prototype={
$1(d){return this.aCT(d)},
aCT(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cr("files")
B.cr("files")
x=3
return B.d(E.cyu(d,u.a),$async$$1)
case 3:t=f
B.cr("files")
s=E.cK8(d,"pdf")
B.cr("files")
v=F.Y9(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bOa.prototype={
$0(){return this.a.zg("xlsx",new A.bO7(this.b))},
$S:0}
A.bO7.prototype={
$1(d){return this.aCS(d)},
aCS(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cr("files")
B.cr("files")
t=E.dtp(d,u.a)
B.cr("files")
s=E.cK8(d,"xlsx")
B.cr("files")
v=F.Y9(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bOb.prototype={
$0(){return this.a.zg("rec",new A.bO6(this.b))},
$S:0}
A.bO6.prototype={
$1(d){return this.aCR(d)},
aCR(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cr("files")
B.cr("files")
x=2
return B.d(E.cyi(d,v.a),$async$$1)
case 2:u=f
B.cr("files")
t=E.cK8(new A.lr("Comprovativos",d.b,d.c,d.d,D.Vd,D.Ve,null),"pdf")
B.cr("files")
x=3
return B.d(F.Y9(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.b2y,A.bPC,A.bPB,A.cra,A.bmE,A.bmC,A.bmA,A.cqf,A.cpz,A.cpA,A.bO8,A.bO7,A.bO6])
w(A.a3y,B.eS)
x(B.J,[A.N7,A.EK,A.qA,A.lr])
x(B.cM,[A.bPD,A.bmF,A.bmy,A.bmD,A.bmx,A.bmB,A.bmz])
x(B.bL,[A.cpy,A.bO4,A.bO5,A.bO9,A.bOa,A.bOb])
w(A.CN,B.H)
w(A.aCV,B.a1)
w(A.Xh,B.O)})()
B.bt(b.typeUniverse,JSON.parse('{"a3y":{"eS":[]},"CN":{"H":[],"e":[],"f":[]},"aCV":{"a1":["CN"]},"Xh":{"O":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.v
return{w:x("c5<c,c>"),b:x("r<EK>"),P:x("r<qA>"),s:x("r<c>"),p:x("r<e>"),a:x("r<N7<@>>"),j:x("t<@>"),c:x("a3<c,@>"),f:x("a3<@,@>"),d:x("bz"),e:x("lr"),N:x("c"),U:x("a4<c>"),q:x("dF"),i:x("R"),z:x("@"),Y:x("a3<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Ve=x([],B.v("r<a5z>"))
D.Vd=x([],B.v("r<Lb>"))
D.bFS={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bDr=new B.c5(D.bFS,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bFw={deposit:0,final_payment:1,guest_share:2}
D.bDY=new B.c5(D.bFw,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bFJ={paid:0,pending:1,failed:2,refunded:3}
D.bEb=new B.c5(D.bFJ,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c82=new B.C("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bTX=new B.bY(D.c82,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)})()};
(a=>{a["AU+FKdGdkbmeaEiq2xQPjJT0gAY="]=a.current})($__dart_deferred_initializers__);