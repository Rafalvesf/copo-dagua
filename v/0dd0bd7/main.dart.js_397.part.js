((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dr2(d,e,f){var x=e.i("@<0>").b7(f),w=new B.aP($.aT,x.i("aP<+(1,2)>")),v=new A.Op(d.a,e.i("Op<0>")),u=new A.Op(d.b,f.i("Op<0>"))
A.dAC(B.a([v,u],y.a),new A.b77(new B.PA(w,x.i("PA<+(1,2)>")),v,u,e,f))
return w},
dAC(d,e){var x={},w=x.a=x.b=0,v=new A.bYn(x,d,e)
for(;w<2;++w)d[w].bkU(v)},
b77:function b77(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5C:function a5C(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Op:function Op(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bYo:function bYo(d,e){this.a=d
this.b=e},
bYp:function bYp(d,e){this.a=d
this.b=e},
bYn:function bYn(d,e,f){this.a=d
this.b=e
this.c=f},
ako(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$ako=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.Q().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").ai(0,"*").U("id",1).dM(0),$async$ako)
case 6:t=e
$.cIx=B.du(J.i(t,"platform_commission_percentage"))
$.cZx=B.b5q(J.i(t,"organizer_fee_tiers"),$.cIx)
s=J.i(t,"partner_fee_tiers")
r=new A.cEM()
if(y.j.b(s)&&J.dJ(s)){q=B.a([],y.s)
for(n=J.bd(s,y.f),m=B.u(n),n=new B.ag(n,n.gA(n),m.i("ag<V.E>")),m=m.i("V.E");n.q();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.p(r.$1(B.du(J.i(p,"pct"))))+"% acima":B.p(r.$1(B.du(J.i(p,"pct"))))+"% at\xe9 "+B.aI(B.du(J.i(p,"up_to")),!1)
J.bq(q,l)}$.cIy=J.kF(q,", ")}else{k=B.aC(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cIy=o>0?B.p(r.$1(o))+"%":""}v=1
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
return B.m($async$ako,w)},
cYZ(d){var x
if(typeof d=="number")x=d
else{x=B.eT(B.p(d))
if(x==null)x=0}return x},
dbJ(d){var x
if(d==null)x=null
else{x=B.d0(B.p(d))
x=x==null?null:x.dF()}return x},
cDu(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cx(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.B(J.cx(x==null?"":x))],y.s),new A.cDB(),y.U).a1(0," & ")
return x.length===0?"Cliente":x},
cYq(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.c8(a0),w=x.gX(a0);w.q();){v=w.gE(w)
f.j(0,B.Y(J.i(v,"id")),v)}u=new A.cCW(a2)
t=new A.cCX()
w=B.a([],y.P)
for(v=J.c8(a1),s=v.gX(a1);s.q();)w.push(new A.cCV(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.q();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.Y(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.eT(B.p(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.q();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cGS(p,J.cx(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d0(B.p(m))
m=m==null?h:m.dF()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cx(l==null?"":l)
k=D.bG6.h(0,s.h(v,i))
if(k==null)k=B.p(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eT(B.p(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FG(o,p,n,m,l,k,j,v==null?0:v))}return new A.lR(e,d,g,w,D.VZ,D.W_,h)},
cEM:function cEM(){},
FG:function FG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
r5:function r5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
lR:function lR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bsB:function bsB(){},
bsC:function bsC(){},
bsv:function bsv(){},
bsz:function bsz(){},
bsA:function bsA(){},
bsu:function bsu(){},
bsx:function bsx(){},
bsy:function bsy(){},
bsw:function bsw(){},
cDB:function cDB(){},
cCW:function cCW(d){this.a=d},
cCX:function cCX(){},
cCV:function cCV(d,e,f,g,h){var _=this
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
aFR:function aFR(){this.c=this.a=this.d=null},
bWA:function bWA(d,e){this.a=d
this.b=e},
bWB:function bWB(d){this.a=d},
bWF:function bWF(d,e){this.a=d
this.b=e},
bWE:function bWE(d){this.a=d},
bWG:function bWG(d,e){this.a=d
this.b=e},
bWD:function bWD(d){this.a=d},
bWH:function bWH(d,e){this.a=d
this.b=e},
bWC:function bWC(d){this.a=d},
Z1:function Z1(d,e,f,g,h,i){var _=this
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
D=c[442]
L=c[432]
A.a5C.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.p(u.a)},
gmW(){var x=this.c
x=x==null?null:x.b
return x==null?B.f6.prototype.gmW.call(this):x}}
A.Op.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bkU(d){this.a.cB(new A.bYo(this,d),new A.bYp(this,d),y.d)}}
A.FG.prototype={
gFa(){var x=this.r-this.w
return x<0?0:x}}
A.r5.prototype={
gbvk(){return this.e==="Pago"},
gpP(d){var x=this.z
return x>0?x:this.f}}
A.lR.prototype={
gaAO(){var x=this.d
return new B.a6(x,new A.bsB(),B.a8(x).i("a6<1>")).cU(0,0,new A.bsC())},
gaxv(){return C.e.cU(this.c,0,new A.bsv())},
gaAP(){var x=this.d
return new B.a6(x,new A.bsz(),B.a8(x).i("a6<1>")).cU(0,0,new A.bsA())},
gaxw(){return C.e.cU(this.c,0,new A.bsu())},
gbyp(){var x=this.d
return new B.a6(x,new A.bsx(),B.a8(x).i("a6<1>")).cU(0,0,new A.bsy())},
gaxL(){return C.e.cU(this.e,0,new A.bsw())}}
A.DD.prototype={
S(){return new A.aFR()},
lZ(d){return this.e.$0()}}
A.aFR.prototype={
zo(d,e){return this.bff(d,e)},
bff(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zo=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bWA(r,d))
u=4
q=null
x=7
return B.d(A.dr2(new B.X(r.a.lZ(0),B.dc("files","")),y.e,y.z),$async$zo)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zo)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a0(D.bZe)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bWB(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zo,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.x(v,B.z(B.a([new A.Z1(L.Ow,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bWF(w,t),v),H.Cl,new A.Z1(C.E0,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bWG(w,t),v),H.Cl,new A.Z1(C.qc,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bWH(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.I(C.t,v,v,s,C.bq,v,C.x),v,v,v,C.i4,v,v,v)}}
A.Z1.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.x(C.K,B.b8(u.c,$.at,t,t,20),C.r,t,t,new B.I(C.a4,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.z(B.a([B.h(u.d,t,t,t,t,C.bx,t,t),B.h(u.e,t,t,t,t,C.hg,t,t)],x),C.G,C.h,C.l),1)
v=$.at
return B.eW(!1,s,!0,new B.S(C.nj,B.N(B.a([p,C.af,w,r?B.aJ(B.anH(t,v,t,t,t,t,t,2,t,t),20,20):B.b8(K.vc,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["C(r5)","T(T,r5)","F<~>(lR)","T(T,FG)","T(T,Mh)","r5()"])
A.b77.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dD(0,new B.X(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jF(new A.a5C(new B.X(x,w),t,d,v.d.i("@<0>").b7(v.e).i("a5C<+(1?,2?),+(hc?,hc?)>")))}},
$S:15}
A.bYo.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bk(1)")}}
A.bYp.prototype={
$2(d,e){this.a.c=new B.hc(d,e)
this.b.$1(1)},
$S:25}
A.bYn.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cEM.prototype={
$1(d){return C.k.aI(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:179}
A.bsB.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsC.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bsv.prototype={
$2(d,e){return d+e.gFa()},
$S:z+3}
A.bsz.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsA.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lt(x,w>0?w:x))},
$S:z+1}
A.bsu.prototype={
$2(d,e){var x=e.gFa()
return d+(x+G.lt(x,e.r))},
$S:z+3}
A.bsx.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsy.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lt(x,w>0?w:x)},
$S:z+1}
A.bsw.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cDB.prototype={
$1(d){return d.length!==0},
$S:6}
A.cCW.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cDu(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cx(x==null?"Parceiro":x)}return x},
$S:516}
A.cCX.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cx(x==null?"":x)},
$S:516}
A.cCV.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cDu(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cx(k)
k=l?p:J.i(m,"booking_number")
k=I.cGS(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bGD.h(0,n.h(o,"type"))
if(v==null)v=B.p(n.h(o,"type"))
u=D.bGQ.h(0,n.h(o,"status"))
if(u==null)u=B.p(n.h(o,"status"))
t=A.cYZ(n.h(o,"amount"))
s=A.dbJ(n.h(o,"paid_at"))
r=A.dbJ(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cx(o==null?"":o)
n=q.e.$1(m)
return new A.r5(k,w,j,v,u,t,s,r,o,n,A.cYZ(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bWA.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bWB.prototype={
$0(){return this.a.d=null},
$S:0}
A.bWF.prototype={
$0(){return this.a.zo("pdf",new A.bWE(this.b))},
$S:0}
A.bWE.prototype={
$1(d){return this.aDY(d)},
aDY(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=3
return B.d(E.cNK(d,u.a),$async$$1)
case 3:t=f
B.cm("files")
s=E.cZV(d,"pdf")
B.cm("files")
v=F.ZW(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bWG.prototype={
$0(){return this.a.zo("xlsx",new A.bWD(this.b))},
$S:0}
A.bWD.prototype={
$1(d){return this.aDX(d)},
aDX(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
t=E.dMa(d,u.a)
B.cm("files")
s=E.cZV(d,"xlsx")
B.cm("files")
v=F.ZW(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bWH.prototype={
$0(){return this.a.zo("rec",new A.bWC(this.b))},
$S:0}
A.bWC.prototype={
$1(d){return this.aDW(d)},
aDW(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cm("files")
B.cm("files")
x=2
return B.d(E.cNx(d,v.a),$async$$1)
case 2:u=f
B.cm("files")
t=E.cZV(new A.lR("Comprovativos",d.b,d.c,d.d,D.VZ,D.W_,null),"pdf")
B.cm("files")
x=3
return B.d(F.ZW(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.br,[A.b77,A.bYo,A.bYn,A.cEM,A.bsB,A.bsz,A.bsx,A.cDB,A.cCW,A.cCX,A.bWE,A.bWD,A.bWC])
w(A.a5C,B.f6)
x(B.L,[A.Op,A.FG,A.r5,A.lR])
x(B.cJ,[A.bYp,A.bsC,A.bsv,A.bsA,A.bsu,A.bsy,A.bsw])
x(B.bK,[A.cCV,A.bWA,A.bWB,A.bWF,A.bWG,A.bWH])
w(A.DD,B.G)
w(A.aFR,B.a0)
w(A.Z1,B.M)})()
B.bp(b.typeUniverse,JSON.parse('{"a5C":{"f6":[]},"DD":{"G":[],"e":[],"f":[]},"aFR":{"a0":["DD"]},"Z1":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.y
return{w:x("c5<c,c>"),b:x("r<FG>"),P:x("r<r5>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Op<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bk"),e:x("lR"),N:x("c"),U:x("a6<c>"),q:x("dk"),i:x("T"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.W_=x([],B.y("r<a7E>"))
D.VZ=x([],B.y("r<Mh>"))
D.bIH={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bG6=new B.c5(D.bIH,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIk={deposit:0,final_payment:1,guest_share:2}
D.bGD=new B.c5(D.bIk,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bIy={paid:0,pending:1,failed:2,refunded:3}
D.bGQ=new B.c5(D.bIy,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c7F=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null)
D.bZe=new B.bE(D.c7F,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["PSMIWC9iW6BMDPLidDgzQzYGBR4="]=a.current})($__dart_deferred_initializers__);