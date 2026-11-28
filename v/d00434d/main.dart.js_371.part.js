((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
doo(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aN($.aT,x.i("aN<+(1,2)>")),v=new A.Ol(d.a,e.i("Ol<0>")),u=new A.Ol(d.b,f.i("Ol<0>"))
A.dxU(B.a([v,u],y.a),new A.b7x(new B.Pt(w,x.i("Pt<+(1,2)>")),v,u,e,f))
return w},
dxU(d,e){var x={},w=x.a=x.b=0,v=new A.bXN(x,d,e)
for(;w<2;++w)d[w].bmv(v)},
b7x:function b7x(d,e,f,g,h){var _=this
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
Ol:function Ol(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bXO:function bXO(d,e){this.a=d
this.b=e},
bXP:function bXP(d,e){this.a=d
this.b=e},
bXN:function bXN(d,e,f){this.a=d
this.b=e
this.c=f},
akJ(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akJ=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.T().b
n===$&&B.b()
x=6
return B.d(n.R("platform_settings").az(0,"*").X("id",1).dP(0),$async$akJ)
case 6:t=e
$.cGD=B.dv(J.i(t,"platform_commission_percentage"))
$.cX8=B.b5J(J.i(t,"organizer_fee_tiers"),$.cGD)
s=J.i(t,"partner_fee_tiers")
r=new A.cD0()
if(y.j.b(s)&&J.dR(s)){q=B.a([],y.s)
for(n=J.bl(s,y.f),m=B.u(n),n=new B.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.dv(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.dv(J.i(p,"pct"))))+"% at\xe9 "+B.aQ(B.dv(J.i(p,"up_to")),!1)
J.by(q,l)}$.cGE=J.kF(q,", ")}else{k=B.aL(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cGE=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akJ,w)},
cWB(d){var x
if(typeof d=="number")x=d
else{x=B.fp(B.q(d))
if(x==null)x=0}return x},
d9g(d){var x
if(d==null)x=null
else{x=B.dH(B.q(d))
x=x==null?null:x.e0()}return x},
cBT(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.C(J.cz(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.C(J.cz(x==null?"":x))],y.s),new A.cC_(),y.U).a2(0," & ")
return x.length===0?"Cliente":x},
cW4(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.D(g,y.c)
for(x=J.c5(a0),w=x.gV(a0);w.t();){v=w.gE(w)
f.j(0,B.a2(J.i(v,"id")),v)}u=new A.cBk(a2)
t=new A.cBl()
w=B.a([],y.P)
for(v=J.c5(a1),s=v.gV(a1);s.t();)w.push(new A.cBj(f,s.gE(s),a2,d,t).$0())
r=B.D(g,y.i)
for(g=v.gV(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.a2(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.fp(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gV(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cF1(p,J.cz(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.dH(B.q(m))
m=m==null?h:m.e0()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cz(l==null?"":l)
k=D.bHf.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fp(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FM(o,p,n,m,l,k,j,v==null?0:v))}return new A.lL(e,d,g,w,D.WJ,D.WK,h)},
cD0:function cD0(){},
FM:function FM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
re:function re(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bsn:function bsn(){},
bso:function bso(){},
bsh:function bsh(){},
bsl:function bsl(){},
bsm:function bsm(){},
bsg:function bsg(){},
bsj:function bsj(){},
bsk:function bsk(){},
bsi:function bsi(){},
cC_:function cC_(){},
cBk:function cBk(d){this.a=d},
cBl:function cBl(){},
cBj:function cBj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DI:function DI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGg:function aGg(){this.c=this.a=this.d=null},
bW_:function bW_(d,e){this.a=d
this.b=e},
bW0:function bW0(d){this.a=d},
bW4:function bW4(d,e){this.a=d
this.b=e},
bW3:function bW3(d){this.a=d},
bW5:function bW5(d,e){this.a=d
this.b=e},
bW2:function bW2(d){this.a=d},
bW6:function bW6(d,e){this.a=d
this.b=e},
bW1:function bW1(d){this.a=d},
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
H=c[290]
F=c[143]
K=c[331]
I=c[149]
E=c[69]
G=c[150]
A=a.updateHolder(c[132],A)
D=c[436]
L=c[428]
A.a5C.prototype={
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
return x==null?B.f8.prototype.gmX.call(this):x}}
A.Ol.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bmv(d){this.a.cD(new A.bXO(this,d),new A.bXP(this,d),y.d)}}
A.FM.prototype={
gFq(){var x=this.r-this.w
return x<0?0:x}}
A.re.prototype={
gbx1(){return this.e==="Pago"},
gpP(d){var x=this.z
return x>0?x:this.f}}
A.lL.prototype={
gaBs(){var x=this.d
return new B.a6(x,new A.bsn(),B.a8(x).i("a6<1>")).d2(0,0,new A.bso())},
gay7(){return C.e.d2(this.c,0,new A.bsh())},
gaBt(){var x=this.d
return new B.a6(x,new A.bsl(),B.a8(x).i("a6<1>")).d2(0,0,new A.bsm())},
gay8(){return C.e.d2(this.c,0,new A.bsg())},
gbA6(){var x=this.d
return new B.a6(x,new A.bsj(),B.a8(x).i("a6<1>")).d2(0,0,new A.bsk())},
gayn(){return C.e.d2(this.e,0,new A.bsi())}}
A.DI.prototype={
P(){return new A.aGg()},
m8(d){return this.e.$0()}}
A.aGg.prototype={
zy(d,e){return this.bgD(d,e)},
bgD(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zy=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bW_(r,d))
u=4
q=null
x=7
return B.d(A.doo(new B.a3(r.a.m8(0),B.dd("files","")),y.e,y.z),$async$zy)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$zy)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.O(y.q).f.a4(D.bZR)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bW0(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zy,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.X(22)
u=u.c
x=w.d
return B.A(v,B.B(B.a([new A.Z1(L.Pc,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bW4(w,t),v),H.CG,new A.Z1(C.Es,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bW5(w,t),v),H.CG,new A.Z1(C.nT,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bW6(w,t),v)],y.p),C.G,C.i,C.m,0,C.v),C.r,v,v,new B.M(C.t,v,v,s,C.bg,v,C.y),v,v,v,C.lD,v,v,v)}}
A.Z1.prototype={
u(d){var x,w,v,u=this,t=null,s=B.X(14),r=u.f,q=r?t:u.r,p=B.X(12)
p=B.A(C.L,B.b2(u.c,$.ar,t,t,20),C.r,t,t,new B.M(C.aa,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.B(B.a([B.h(u.d,t,t,t,t,C.bL,t,t,t),B.h(u.e,t,t,t,t,C.hh,t,t,t)],x),C.G,C.i,C.m,0,C.v),1)
v=$.ar
return B.eB(!1,s,!0,new B.Q(C.ns,B.P(B.a([p,C.af,w,r?B.aI(B.ao0(t,v,t,t,t,t,t,2,t,t),20,20):B.b2(K.vt,v,t,t,20)],x),C.w,C.i,C.m,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["x(re)","R(R,re)","F<~>(lL)","R(R,FM)","R(R,Mi)","re()"])
A.b7x.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a3(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jR(new A.a5C(new B.a3(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a5C<+(1?,2?),+(ha?,ha?)>")))}},
$S:21}
A.bXO.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bx(1)")}}
A.bXP.prototype={
$2(d,e){this.a.c=new B.ha(d,e)
this.b.$1(1)},
$S:23}
A.bXN.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:21}
A.cD0.prototype={
$1(d){return C.k.ao(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:190}
A.bsn.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bso.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bsh.prototype={
$2(d,e){return d+e.gFq()},
$S:z+3}
A.bsl.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsm.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.ln(x,w>0?w:x))},
$S:z+1}
A.bsg.prototype={
$2(d,e){var x=e.gFq()
return d+(x+G.ln(x,e.r))},
$S:z+3}
A.bsj.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsk.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.ln(x,w>0?w:x)},
$S:z+1}
A.bsi.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cC_.prototype={
$1(d){return d.length!==0},
$S:8}
A.cBk.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cBT(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cz(x==null?"Parceiro":x)}return x},
$S:453}
A.cBl.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cz(x==null?"":x)},
$S:453}
A.cBj.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cBT(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cz(k)
k=l?p:J.i(m,"booking_number")
k=I.cF1(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bHO.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bI1.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cWB(n.h(o,"amount"))
s=A.d9g(n.h(o,"paid_at"))
r=A.d9g(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cz(o==null?"":o)
n=q.e.$1(m)
return new A.re(k,w,j,v,u,t,s,r,o,n,A.cWB(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bW_.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bW0.prototype={
$0(){return this.a.d=null},
$S:0}
A.bW4.prototype={
$0(){return this.a.zy("pdf",new A.bW3(this.b))},
$S:0}
A.bW3.prototype={
$1(d){return this.aEE(d)},
aEE(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.co("files")
B.co("files")
x=3
return B.d(E.cLp(d,u.a),$async$$1)
case 3:t=f
B.co("files")
s=E.cXw(d,"pdf")
B.co("files")
v=F.ZX(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bW5.prototype={
$0(){return this.a.zy("xlsx",new A.bW2(this.b))},
$S:0}
A.bW2.prototype={
$1(d){return this.aED(d)},
aED(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.co("files")
B.co("files")
t=E.dJl(d,u.a)
B.co("files")
s=E.cXw(d,"xlsx")
B.co("files")
v=F.ZX(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bW6.prototype={
$0(){return this.a.zy("rec",new A.bW1(this.b))},
$S:0}
A.bW1.prototype={
$1(d){return this.aEC(d)},
aEC(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.co("files")
B.co("files")
x=2
return B.d(E.cLc(d,v.a),$async$$1)
case 2:u=f
B.co("files")
t=E.cXw(new A.lL("Comprovativos",d.b,d.c,d.d,D.WJ,D.WK,null),"pdf")
B.co("files")
x=3
return B.d(F.ZX(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.b7x,A.bXO,A.bXN,A.cD0,A.bsn,A.bsl,A.bsj,A.cC_,A.cBk,A.cBl,A.bW3,A.bW2,A.bW1])
w(A.a5C,B.f8)
x(B.K,[A.Ol,A.FM,A.re,A.lL])
x(B.cQ,[A.bXP,A.bso,A.bsh,A.bsm,A.bsg,A.bsk,A.bsi])
x(B.bR,[A.cBj,A.bW_,A.bW0,A.bW4,A.bW5,A.bW6])
w(A.DI,B.G)
w(A.aGg,B.a_)
w(A.Z1,B.I)})()
B.bp(b.typeUniverse,JSON.parse('{"a5C":{"f8":[]},"DI":{"G":[],"e":[],"f":[]},"aGg":{"a_":["DI"]},"Z1":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c1<c,c>"),b:x("r<FM>"),P:x("r<re>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Ol<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bx"),e:x("lL"),N:x("c"),U:x("a6<c>"),q:x("dq"),i:x("R"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.WK=x([],B.w("r<a7E>"))
D.WJ=x([],B.w("r<Mi>"))
D.bJT={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bHf=new B.c1(D.bJT,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bJw={deposit:0,final_payment:1,guest_share:2}
D.bHO=new B.c1(D.bJw,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bJK={paid:0,pending:1,failed:2,refunded:3}
D.bI1=new B.c1(D.bJK,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cec=new B.C("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZR=new B.bG(D.cec,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)})()};
(a=>{a["cH7RPrTGY4WU5is+RpXwPByPG7U="]=a.current})($__dart_deferred_initializers__);