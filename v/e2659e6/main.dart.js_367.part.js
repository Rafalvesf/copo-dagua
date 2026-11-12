((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,H,L,F,M,I,E,G,A={
cYp(d,e,f){var x=e.i("@<0>").b3(f),w=new B.aH($.aQ,x.i("aH<+(1,2)>")),v=new A.Lu(d.a,e.i("Lu<0>")),u=new A.Lu(d.b,f.i("Lu<0>"))
A.d6r(B.a([v,u],y.a),new A.aZ9(new B.Mt(w,x.i("Mt<+(1,2)>")),v,u,e,f))
return w},
d6r(d,e){var x={},w=x.a=x.b=0,v=new A.bIK(x,d,e)
for(;w<2;++w)d[w].bdR(v)},
aZ9:function aZ9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1b:function a1b(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Lu:function Lu(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bIL:function bIL(d,e){this.a=d
this.b=e},
bIM:function bIM(d,e){this.a=d
this.b=e},
bIK:function bIK(d,e,f){this.a=d
this.b=e
this.c=f},
afh(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$afh=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.Z().b
n===$&&B.b()
x=6
return B.d(n.S("platform_settings").aP(0,"*").a0("id",1).dZ(0),$async$afh)
case 6:t=e
$.ck3=B.e_(J.h(t,"platform_commission_percentage"))
$.cz7=N.aXq(J.h(t,"organizer_fee_tiers"),$.ck3,null)
s=J.h(t,"partner_fee_tiers")
r=new A.chj()
if(y.j.b(s)&&J.eU(s)){q=B.a([],y.s)
for(n=J.bA(s,y.f),m=B.r(n),n=new B.ap(n,n.gv(n),m.i("ap<a8.E>")),m=m.i("a8.E");n.p();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.u(r.$1(B.e_(J.h(p,"pct"))))+"% acima":B.u(r.$1(B.e_(J.h(p,"pct"))))+"% at\xe9 "+B.by(B.e_(J.h(p,"up_to")),!1)
J.cg(q,l)}$.ck4=J.qw(q,", ")}else{k=B.b9(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.ck4=o>0?B.u(r.$1(o))+"%":""}v=1
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
return B.m($async$afh,w)},
cyz(d){var x
if(typeof d=="number")x=d
else{x=B.fE(B.u(d))
if(x==null)x=0}return x},
cLo(d){var x
if(d==null)x=null
else{x=B.h_(B.u(d))
x=x==null?null:x.fq()}return x},
cgk(d){var x,w,v
if(d==null)return"Cliente"
x=J.a3(d)
w=x.h(d,"partner_name_1")
v=C.f.L(J.cJ(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a4(B.a([v,C.f.L(J.cJ(x==null?"":x))],y.s),new A.cgr(),y.U).aq(0," & ")
return x.length===0?"Cliente":x},
cy6(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.B(g,y.c)
for(x=J.cv(a0),w=x.gW(a0);w.p();){v=w.gF(w)
f.j(0,B.a1(J.h(v,"id")),v)}u=new A.cfN(a2)
t=new A.cfO()
w=B.a([],y.P)
for(v=J.cv(a1),s=v.gW(a1);s.p();)w.push(new A.cfM(f,s.gF(s),a2,d,t).$0())
r=B.B(g,y.i)
for(g=v.gW(a1);g.p();){f=g.gF(g)
v=J.a3(f)
if(J.o(v.h(f,i),"paid")){q=B.a1(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.fE(B.u(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gW(a0),x=y.Y;f.p();){v=f.gF(f)
s=J.a3(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.ciW(p,J.cJ(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.h_(B.u(m))
m=m==null?h:m.fq()}l=x.a(s.h(v,"weddings"))
l=l==null?h:J.h(l,"location")
l=J.cJ(l==null?"":l)
k=D.bxO.h(0,s.h(v,i))
if(k==null)k=B.u(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.fE(B.u(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.Do(o,p,n,m,l,k,j,v==null?0:v))}return new A.l0(e,d,g,w,D.TU,D.TV,h)},
chj:function chj(){},
Do:function Do(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
q_:function q_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
l0:function l0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bhS:function bhS(){},
bhT:function bhT(){},
bhM:function bhM(){},
bhQ:function bhQ(){},
bhR:function bhR(){},
bhL:function bhL(){},
bhO:function bhO(){},
bhP:function bhP(){},
bhN:function bhN(){},
cgr:function cgr(){},
cfN:function cfN(d){this.a=d},
cfO:function cfO(){},
cfM:function cfM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Bw:function Bw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
az3:function az3(){this.c=this.a=this.d=null},
bH9:function bH9(d,e){this.a=d
this.b=e},
bHa:function bHa(d){this.a=d},
bHe:function bHe(d,e){this.a=d
this.b=e},
bHd:function bHd(d){this.a=d},
bHf:function bHf(d,e){this.a=d
this.b=e},
bHc:function bHc(d){this.a=d},
bHg:function bHg(d,e){this.a=d
this.b=e},
bHb:function bHb(d){this.a=d},
V8:function V8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,N,O
J=c[1]
B=c[0]
C=c[2]
K=c[258]
H=c[259]
L=c[281]
F=c[133]
M=c[303]
I=c[137]
E=c[64]
G=c[138]
A=a.updateHolder(c[123],A)
D=c[450]
N=c[175]
O=c[442]
A.a1b.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.u(u.a)},
gmD(){var x=this.c
x=x==null?null:x.b
return x==null?B.eM.prototype.gmD.call(this):x}}
A.Lu.prototype={
gq(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bdR(d){this.a.cJ(new A.bIL(this,d),new A.bIM(this,d),y.d)}}
A.Do.prototype={
gDI(){var x=this.r-this.w
return x<0?0:x}}
A.q_.prototype={
gboe(){return this.e==="Pago"},
gpq(d){var x=this.z
return x>0?x:this.f}}
A.l0.prototype={
gawz(){var x=this.d
return new B.a4(x,new A.bhS(),B.a6(x).i("a4<1>")).dS(0,0,new A.bhT())},
gatk(){return C.e.dS(this.c,0,new A.bhM())},
gawA(){var x=this.d
return new B.a4(x,new A.bhQ(),B.a6(x).i("a4<1>")).dS(0,0,new A.bhR())},
gatl(){return C.e.dS(this.c,0,new A.bhL())},
gbrh(){var x=this.d
return new B.a4(x,new A.bhO(),B.a6(x).i("a4<1>")).dS(0,0,new A.bhP())},
gaty(){return C.e.dS(this.e,0,new A.bhN())}}
A.Bw.prototype={
R(){return new A.az3()},
lG(d){return this.e.$0()}}
A.az3.prototype={
yv(d,e){return this.b8i(d,e)},
b8i(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$yv=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.t(new A.bH9(r,d))
u=4
q=null
x=7
return B.d(A.cYp(new B.ag(r.a.lG(0),B.dk("files","")),y.e,y.z),$async$yv)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$yv)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.T(y.q).f.ah(D.bNr)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.t(new A.bHa(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$yv,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.T(22)
u=u.c
x=w.d
return B.E(v,B.I(B.a([new A.V8(O.MH,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bHe(w,t),v),H.B2,new A.V8(C.jO,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bHf(w,t),v),H.B2,new A.V8(C.iU,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bHg(w,t),v)],y.p),C.I,C.m,C.q,0,C.w),C.t,v,v,new B.K(C.v,v,v,s,C.ap,v,C.y),v,v,v,v,C.mp,v,v,v)}}
A.V8.prototype={
u(d){var x,w,v,u=this,t=null,s=B.T(14),r=u.f,q=r?t:u.r,p=B.T(12)
p=B.E(C.S,B.aJ(u.c,$.a5,t,t,20),C.t,t,t,new B.K(C.af,t,t,p,t,t,C.y),t,40,t,t,t,t,t,40)
x=y.p
w=B.ac(B.I(B.a([B.i(u.d,t,t,t,C.c0,t,t,t),B.i(u.e,t,t,t,L.eW,t,t,t)],x),C.I,C.m,C.q,0,C.w),1)
v=$.a5
return B.eY(!1,s,!0,new B.a_(K.mn,B.W(B.a([p,C.ar,w,r?B.aT(B.B5(t,v,t,t,t,t,t,2,t,t),20,20):B.aJ(M.u5,v,t,t,20)],x),C.x,C.m,C.q,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(q_)","V(V,q_)","H<~>(l0)","V(V,Do)","V(V,JG)","q_()"])
A.aZ9.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dC(0,new B.ag(t.gq(0),s.gq(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.kh(new A.a1b(new B.ag(x,w),t,d,v.d.i("@<0>").b3(v.e).i("a1b<+(1?,2?),+(fL?,fL?)>")))}},
$S:15}
A.bIL.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bw(1)")}}
A.bIM.prototype={
$2(d,e){this.a.c=new B.fL(d,e)
this.b.$1(1)},
$S:22}
A.bIK.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.chj.prototype={
$1(d){return C.k.aj(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:124}
A.bhS.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bhT.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bhM.prototype={
$2(d,e){return d+e.gDI()},
$S:z+3}
A.bhQ.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bhR.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.kF(x,w>0?w:x))},
$S:z+1}
A.bhL.prototype={
$2(d,e){var x=e.gDI()
return d+(x+G.kF(x,e.r))},
$S:z+3}
A.bhO.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bhP.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.kF(x,w>0?w:x)},
$S:z+1}
A.bhN.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cgr.prototype={
$1(d){return d.length!==0},
$S:9}
A.cfN.prototype={
$1(d){var x=J.a3(d),w=y.Y
if(this.a)x=A.cgk(w.a(x.h(d,"weddings")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cJ(x==null?"Parceiro":x)}return x},
$S:445}
A.cfO.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cJ(x==null?"":x)},
$S:445}
A.cfM.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a3(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"weddings"),j=y.Y,i=A.cgk(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cJ(k)
k=I.ciW(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.byp.h(0,n.h(o,"type"))
if(v==null)v=B.u(n.h(o,"type"))
u=D.byr.h(0,n.h(o,"status"))
if(u==null)u=B.u(n.h(o,"status"))
t=A.cyz(n.h(o,"amount"))
s=A.cLo(n.h(o,"paid_at"))
r=A.cLo(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cJ(o==null?"":o)
n=q.e.$1(m)
return new A.q_(k,w,j,v,u,t,s,r,o,n,A.cyz(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bH9.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bHa.prototype={
$0(){return this.a.d=null},
$S:0}
A.bHe.prototype={
$0(){return this.a.yv("pdf",new A.bHd(this.b))},
$S:0}
A.bHd.prototype={
$1(d){return this.azo(d)},
azo(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cu("files")
B.cu("files")
x=3
return B.d(E.coe(d,u.a),$async$$1)
case 3:t=f
B.cu("files")
s=E.czt(d,"pdf")
B.cu("files")
v=F.VY(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bHf.prototype={
$0(){return this.a.yv("xlsx",new A.bHc(this.b))},
$S:0}
A.bHc.prototype={
$1(d){return this.azn(d)},
azn(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cu("files")
B.cu("files")
t=E.dgf(d,u.a)
B.cu("files")
s=E.czt(d,"xlsx")
B.cu("files")
v=F.VY(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bHg.prototype={
$0(){return this.a.yv("rec",new A.bHb(this.b))},
$S:0}
A.bHb.prototype={
$1(d){return this.azm(d)},
azm(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cu("files")
B.cu("files")
x=2
return B.d(E.co3(d,v.a),$async$$1)
case 2:u=f
B.cu("files")
t=E.czt(new A.l0("Comprovativos",d.b,d.c,d.d,D.TU,D.TV,null),"pdf")
B.cu("files")
x=3
return B.d(F.VY(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.aZ9,A.bIL,A.bIK,A.chj,A.bhS,A.bhQ,A.bhO,A.cgr,A.cfN,A.cfO,A.bHd,A.bHc,A.bHb])
w(A.a1b,B.eM)
x(B.F,[A.Lu,A.Do,A.q_,A.l0])
x(B.cD,[A.bIM,A.bhT,A.bhM,A.bhR,A.bhL,A.bhP,A.bhN])
x(B.bI,[A.cfM,A.bH9,A.bHa,A.bHe,A.bHf,A.bHg])
w(A.Bw,B.G)
w(A.az3,B.a0)
w(A.V8,B.M)})()
B.bx(b.typeUniverse,JSON.parse('{"a1b":{"eM":[]},"Bw":{"G":[],"e":[],"f":[]},"az3":{"a0":["Bw"]},"V8":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.v
return{w:x("ch<c,c>"),b:x("q<Do>"),P:x("q<q_>"),s:x("q<c>"),p:x("q<e>"),a:x("q<Lu<@>>"),j:x("t<@>"),c:x("a2<c,@>"),f:x("a2<@,@>"),d:x("bw"),e:x("l0"),N:x("c"),U:x("a4<c>"),q:x("dD"),i:x("V"),z:x("@"),Y:x("a2<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.TV=x([],B.v("q<a34>"))
D.TU=x([],B.v("q<JG>"))
D.bA_={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bxO=new B.ch(D.bA_,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bzH={deposit:0,final_payment:1}
D.byp=new B.ch(D.bzH,["Sinal","Pagamento final"],y.w)
D.bzU={paid:0,pending:1,failed:2,refunded:3}
D.byr=new B.ch(D.bzU,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c0J=new B.J("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bNr=new B.cc(D.c0J,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)})()};
(a=>{a["9IM0FBse3lD88DqxfdUF/wPjkYA="]=a.current})($__dart_deferred_initializers__);