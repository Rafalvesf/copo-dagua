((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,H,F,L,I,E,G,A={
dcA(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aK($.aP,x.i("aK<+(1,2)>")),v=new A.Ng(d.a,e.i("Ng<0>")),u=new A.Ng(d.b,f.i("Ng<0>"))
A.dlW(B.a([v,u],y.a),new A.b31(new B.Oe(w,x.i("Oe<+(1,2)>")),v,u,e,f))
return w},
dlW(d,e){var x={},w=x.a=x.b=0,v=new A.bQu(x,d,e)
for(;w<2;++w)d[w].bjy(v)},
b31:function b31(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3K:function a3K(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Ng:function Ng(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bQv:function bQv(d,e){this.a=d
this.b=e},
bQw:function bQw(d,e){this.a=d
this.b=e},
bQu:function bQu(d,e,f){this.a=d
this.b=e
this.c=f},
aij(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$aij=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.R().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").aG(0,"*").V("id",1).dO(0),$async$aij)
case 6:t=e
$.cwh=B.dA(J.h(t,"platform_commission_percentage"))
$.cM5=B.b1d(J.h(t,"organizer_fee_tiers"),$.cwh)
s=J.h(t,"partner_fee_tiers")
r=new A.ctc()
if(y.j.b(s)&&J.ev(s)){q=B.a([],y.s)
for(n=J.bw(s,y.f),m=B.u(n),n=new B.an(n,n.gA(n),m.i("an<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.q(r.$1(B.dA(J.h(p,"pct"))))+"% acima":B.q(r.$1(B.dA(J.h(p,"pct"))))+"% at\xe9 "+B.aX(B.dA(J.h(p,"up_to")),!1)
J.bM(q,l)}$.cwi=J.la(q,", ")}else{k=B.aR(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cwi=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$aij,w)},
cLw(d){var x
if(typeof d=="number")x=d
else{x=B.f9(B.q(d))
if(x==null)x=0}return x},
cYY(d){var x
if(d==null)x=null
else{x=B.eK(B.q(d))
x=x==null?null:x.eb()}return x},
cs8(d){var x,w,v
if(d==null)return"Cliente"
x=J.a5(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cJ(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a4(B.a([v,C.f.D(J.cJ(x==null?"":x))],y.s),new A.csf(),y.U).a9(0," & ")
return x.length===0?"Cliente":x},
cL1(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.B(g,y.c)
for(x=J.ct(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.a2(J.h(v,"id")),v)}u=new A.crz(a2)
t=new A.crA()
w=B.a([],y.P)
for(v=J.ct(a1),s=v.gX(a1);s.t();)w.push(new A.cry(f,s.gE(s),a2,d,t).$0())
r=B.B(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a5(f)
if(J.o(v.h(f,i),"paid")){q=B.a2(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.f9(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a5(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.cv2(p,J.cJ(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.eK(B.q(m))
m=m==null?h:m.eb()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cJ(l==null?"":l)
k=D.bE4.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.f9(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.EQ(o,p,n,m,l,k,j,v==null?0:v))}return new A.lu(e,d,g,w,D.Vl,D.Vm,h)},
ctc:function ctc(){},
EQ:function EQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
qE:function qE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lu:function lu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bn2:function bn2(){},
bn3:function bn3(){},
bmX:function bmX(){},
bn0:function bn0(){},
bn1:function bn1(){},
bmW:function bmW(){},
bmZ:function bmZ(){},
bn_:function bn_(){},
bmY:function bmY(){},
csf:function csf(){},
crz:function crz(d){this.a=d},
crA:function crA(){},
cry:function cry(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CR:function CR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDf:function aDf(){this.c=this.a=this.d=null},
bOP:function bOP(d,e){this.a=d
this.b=e},
bOQ:function bOQ(d){this.a=d},
bOU:function bOU(d,e){this.a=d
this.b=e},
bOT:function bOT(d){this.a=d},
bOV:function bOV(d,e){this.a=d
this.b=e},
bOS:function bOS(d){this.a=d},
bOW:function bOW(d,e){this.a=d
this.b=e},
bOR:function bOR(d){this.a=d},
Xr:function Xr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,M
J=c[1]
B=c[0]
C=c[2]
K=c[250]
H=c[252]
F=c[132]
L=c[298]
I=c[137]
E=c[66]
G=c[138]
A=a.updateHolder(c[124],A)
D=c[426]
M=c[418]
A.a3K.prototype={
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
return x==null?B.eY.prototype.gmR.call(this):x}}
A.Ng.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bjy(d){this.a.cA(new A.bQv(this,d),new A.bQw(this,d),y.d)}}
A.EQ.prototype={
gEV(){var x=this.r-this.w
return x<0?0:x}}
A.qE.prototype={
gbu0(){return this.e==="Pago"},
gpJ(d){var x=this.z
return x>0?x:this.f}}
A.lu.prototype={
gazY(){var x=this.d
return new B.a4(x,new A.bn2(),B.a8(x).i("a4<1>")).dA(0,0,new A.bn3())},
gawI(){return C.e.dA(this.c,0,new A.bmX())},
gazZ(){var x=this.d
return new B.a4(x,new A.bn0(),B.a8(x).i("a4<1>")).dA(0,0,new A.bn1())},
gawJ(){return C.e.dA(this.c,0,new A.bmW())},
gbx9(){var x=this.d
return new B.a4(x,new A.bmZ(),B.a8(x).i("a4<1>")).dA(0,0,new A.bn_())},
gawX(){return C.e.dA(this.e,0,new A.bmY())}}
A.CR.prototype={
S(){return new A.aDf()},
lY(d){return this.e.$0()}}
A.aDf.prototype={
zc(d,e){return this.bdI(d,e)},
bdI(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zc=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bOP(r,d))
u=4
q=null
x=7
return B.d(A.dcA(new B.a6(r.a.lY(0),B.da("files","")),y.e,y.z),$async$zc)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zc)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.R(y.q).f.a5(D.bUX)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bOQ(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zc,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.X(22)
u=u.c
x=w.d
return B.C(v,B.E(B.a([new A.Xr(M.NR,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bOU(w,t),v),H.BF,new A.Xr(C.Di,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bOV(w,t),v),H.BF,new A.Xr(C.nh,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bOW(w,t),v)],y.p),C.I,C.k,C.p,0,C.w),C.r,v,v,new B.L(C.u,v,v,s,C.aI,v,C.y),v,v,v,C.pK,v,v,v)}}
A.Xr.prototype={
u(d){var x,w,v,u=this,t=null,s=B.X(14),r=u.f,q=r?t:u.r,p=B.X(12)
p=B.C(C.O,B.b7(u.c,$.aj,t,t,20),C.r,t,t,new B.L(C.ag,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a7(B.E(B.a([B.i(u.d,t,t,t,t,C.bX,t,t,t),B.i(u.e,t,t,t,t,C.fp,t,t,t)],x),C.I,C.k,C.p,0,C.w),1)
v=$.aj
return B.eO(!1,s,!0,new B.T(K.pF,B.S(B.a([p,C.ak,w,r?B.aM(B.a_a(t,v,t,t,t,t,t,2,t,t),20,20):B.b7(L.uP,v,t,t,20)],x),C.x,C.k,C.p,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(qE)","U(U,qE)","G<~>(lu)","U(U,EQ)","U(U,Lh)","qE()"])
A.b31.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dG(0,new B.a6(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.kc(new A.a3K(new B.a6(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a3K<+(1?,2?),+(h0?,h0?)>")))}},
$S:18}
A.bQv.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bz(1)")}}
A.bQw.prototype={
$2(d,e){this.a.c=new B.h0(d,e)
this.b.$1(1)},
$S:22}
A.bQu.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:18}
A.ctc.prototype={
$1(d){return C.j.an(d,1)===0?C.j.a4(d,0):C.j.a4(d,1)},
$S:177}
A.bn2.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bn3.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bmX.prototype={
$2(d,e){return d+e.gEV()},
$S:z+3}
A.bn0.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bn1.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.l6(x,w>0?w:x))},
$S:z+1}
A.bmW.prototype={
$2(d,e){var x=e.gEV()
return d+(x+G.l6(x,e.r))},
$S:z+3}
A.bmZ.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bn_.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.l6(x,w>0?w:x)},
$S:z+1}
A.bmY.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.csf.prototype={
$1(d){return d.length!==0},
$S:8}
A.crz.prototype={
$1(d){var x=J.a5(d),w=y.Y
if(this.a)x=A.cs8(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cJ(x==null?"Parceiro":x)}return x},
$S:475}
A.crA.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cJ(x==null?"":x)},
$S:475}
A.cry.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a5(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cs8(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cJ(k)
k=I.cv2(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bEB.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bEP.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cLw(n.h(o,"amount"))
s=A.cYY(n.h(o,"paid_at"))
r=A.cYY(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cJ(o==null?"":o)
n=q.e.$1(m)
return new A.qE(k,w,j,v,u,t,s,r,o,n,A.cLw(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bOP.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bOQ.prototype={
$0(){return this.a.d=null},
$S:0}
A.bOU.prototype={
$0(){return this.a.zc("pdf",new A.bOT(this.b))},
$S:0}
A.bOT.prototype={
$1(d){return this.aDa(d)},
aDa(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cs("files")
B.cs("files")
x=3
return B.d(E.cAK(d,u.a),$async$$1)
case 3:t=f
B.cs("files")
s=E.cMu(d,"pdf")
B.cs("files")
v=F.Yi(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bOV.prototype={
$0(){return this.a.zc("xlsx",new A.bOS(this.b))},
$S:0}
A.bOS.prototype={
$1(d){return this.aD9(d)},
aD9(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cs("files")
B.cs("files")
t=E.dwL(d,u.a)
B.cs("files")
s=E.cMu(d,"xlsx")
B.cs("files")
v=F.Yi(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bOW.prototype={
$0(){return this.a.zc("rec",new A.bOR(this.b))},
$S:0}
A.bOR.prototype={
$1(d){return this.aD8(d)},
aD8(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cs("files")
B.cs("files")
x=2
return B.d(E.cAx(d,v.a),$async$$1)
case 2:u=f
B.cs("files")
t=E.cMu(new A.lu("Comprovativos",d.b,d.c,d.d,D.Vl,D.Vm,null),"pdf")
B.cs("files")
x=3
return B.d(F.Yi(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.b31,A.bQv,A.bQu,A.ctc,A.bn2,A.bn0,A.bmZ,A.csf,A.crz,A.crA,A.bOT,A.bOS,A.bOR])
w(A.a3K,B.eY)
x(B.K,[A.Ng,A.EQ,A.qE,A.lu])
x(B.cS,[A.bQw,A.bn3,A.bmX,A.bn1,A.bmW,A.bn_,A.bmY])
x(B.bS,[A.cry,A.bOP,A.bOQ,A.bOU,A.bOV,A.bOW])
w(A.CR,B.I)
w(A.aDf,B.a1)
w(A.Xr,B.O)})()
B.bu(b.typeUniverse,JSON.parse('{"a3K":{"eY":[]},"CR":{"I":[],"e":[],"f":[]},"aDf":{"a1":["CR"]},"Xr":{"O":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c5<c,c>"),b:x("r<EQ>"),P:x("r<qE>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Ng<@>>"),j:x("t<@>"),c:x("a3<c,@>"),f:x("a3<@,@>"),d:x("bz"),e:x("lu"),N:x("c"),U:x("a4<c>"),q:x("dJ"),i:x("U"),z:x("@"),Y:x("a3<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Vm=x([],B.w("r<a5K>"))
D.Vl=x([],B.w("r<Lh>"))
D.bGv={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bE4=new B.c5(D.bGv,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bG9={deposit:0,final_payment:1,guest_share:2}
D.bEB=new B.c5(D.bG9,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bGm={paid:0,pending:1,failed:2,refunded:3}
D.bEP=new B.c5(D.bGm,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c9g=new B.A("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bUX=new B.bX(D.c9g,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)})()};
(a=>{a["L2u1Dd1+pTvXGaoJzJmAPebQGBg="]=a.current})($__dart_deferred_initializers__);