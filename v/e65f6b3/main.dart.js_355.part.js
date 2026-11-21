((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,K,H,F,L,I,E,G,A={
d9Z(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aK($.aP,x.i("aK<+(1,2)>")),v=new A.N8(d.a,e.i("N8<0>")),u=new A.N8(d.b,f.i("N8<0>"))
A.djl(B.a([v,u],y.a),new A.b2A(new B.Oa(w,x.i("Oa<+(1,2)>")),v,u,e,f))
return w},
djl(d,e){var x={},w=x.a=x.b=0,v=new A.bPX(x,d,e)
for(;w<2;++w)d[w].biS(v)},
b2A:function b2A(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3w:function a3w(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
N8:function N8(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bPY:function bPY(d,e){this.a=d
this.b=e},
bPZ:function bPZ(d,e){this.a=d
this.b=e},
bPX:function bPX(d,e,f){this.a=d
this.b=e
this.c=f},
ai5(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$ai5=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.R().b
n===$&&B.b()
x=6
return B.d(n.S("platform_settings").aG(0,"*").X("id",1).dT(0),$async$ai5)
case 6:t=e
$.cuO=B.dR(J.h(t,"platform_commission_percentage"))
$.cKq=M.b0M(J.h(t,"organizer_fee_tiers"),$.cuO,null)
s=J.h(t,"partner_fee_tiers")
r=new A.crR()
if(y.j.b(s)&&J.eA(s)){q=B.a([],y.s)
for(n=J.bw(s,y.f),m=B.u(n),n=new B.ao(n,n.gA(n),m.i("ao<T.E>")),m=m.i("T.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.h(p,"up_to")==null?B.q(r.$1(B.dR(J.h(p,"pct"))))+"% acima":B.q(r.$1(B.dR(J.h(p,"pct"))))+"% at\xe9 "+B.b8(B.dR(J.h(p,"up_to")),!1)
J.bS(q,l)}$.cuP=J.md(q,", ")}else{k=B.aV(J.h(t,"partner_fee_percentage"))
o=k==null?0:k
$.cuP=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$ai5,w)},
cJS(d){var x
if(typeof d=="number")x=d
else{x=B.f7(B.q(d))
if(x==null)x=0}return x},
cX4(d){var x
if(d==null)x=null
else{x=B.eN(B.q(d))
x=x==null?null:x.f4()}return x},
cqO(d){var x,w,v
if(d==null)return"Cliente"
x=J.a5(d)
w=x.h(d,"partner_name_1")
v=C.f.D(J.cL(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a4(B.a([v,C.f.D(J.cL(x==null?"":x))],y.s),new A.cqV(),y.U).aa(0," & ")
return x.length===0?"Cliente":x},
cJn(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.A(g,y.c)
for(x=J.cv(a0),w=x.gW(a0);w.t();){v=w.gG(w)
f.j(0,B.a2(J.h(v,"id")),v)}u=new A.cqe(a2)
t=new A.cqf()
w=B.a([],y.P)
for(v=J.cv(a1),s=v.gW(a1);s.t();)w.push(new A.cqd(f,s.gG(s),a2,d,t).$0())
r=B.A(g,y.i)
for(g=v.gW(a1);g.t();){f=g.gG(g)
v=J.a5(f)
if(J.p(v.h(f,i),"paid")){q=B.a2(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.f7(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gW(a0),x=y.Y;f.t();){v=f.gG(f)
s=J.a5(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.h(o,"business_name")
if(o==null)o=a2?d:""
o=I.ctz(p,J.cL(o))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.eN(B.q(m))
m=m==null?h:m.f4()}l=x.a(s.h(v,"events"))
l=l==null?h:J.h(l,"location")
l=J.cL(l==null?"":l)
k=D.bDM.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.f7(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.EH(o,p,n,m,l,k,j,v==null?0:v))}return new A.lr(e,d,g,w,D.Vd,D.Ve,h)},
crR:function crR(){},
EH:function EH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
qz:function qz(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bmB:function bmB(){},
bmC:function bmC(){},
bmv:function bmv(){},
bmz:function bmz(){},
bmA:function bmA(){},
bmu:function bmu(){},
bmx:function bmx(){},
bmy:function bmy(){},
bmw:function bmw(){},
cqV:function cqV(){},
cqe:function cqe(d){this.a=d},
cqf:function cqf(){},
cqd:function cqd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CK:function CK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCU:function aCU(){this.c=this.a=this.d=null},
bOq:function bOq(d,e){this.a=d
this.b=e},
bOr:function bOr(d){this.a=d},
bOv:function bOv(d,e){this.a=d
this.b=e},
bOu:function bOu(d){this.a=d},
bOw:function bOw(d,e){this.a=d
this.b=e},
bOt:function bOt(d){this.a=d},
bOx:function bOx(d,e){this.a=d
this.b=e},
bOs:function bOs(d){this.a=d},
Xi:function Xi(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},D,M,N
J=c[1]
B=c[0]
C=c[2]
K=c[263]
H=c[264]
F=c[136]
L=c[309]
I=c[140]
E=c[66]
G=c[141]
A=a.updateHolder(c[126],A)
D=c[440]
M=c[173]
N=c[433]
A.a3w.prototype={
k(d){var x,w,v="ParallelWaitError",u=this.c
if(u==null){u=this.d
x=u<=1
if(x)return v
return"ParallelWaitError("+u+" errors)"}x=this.d
w=x>1
if(w)x="("+x+" errors)"
else x=""
return v+x+": "+B.q(u.a)},
gmO(){var x=this.c
x=x==null?null:x.b
return x==null?B.eW.prototype.gmO.call(this):x}}
A.N8.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
biS(d){this.a.cA(new A.bPY(this,d),new A.bPZ(this,d),y.d)}}
A.EH.prototype={
gEU(){var x=this.r-this.w
return x<0?0:x}}
A.qz.prototype={
gbtg(){return this.e==="Pago"},
gpE(d){var x=this.z
return x>0?x:this.f}}
A.lr.prototype={
gazD(){var x=this.d
return new B.a4(x,new A.bmB(),B.a6(x).i("a4<1>")).dG(0,0,new A.bmC())},
gawn(){return C.e.dG(this.c,0,new A.bmv())},
gazE(){var x=this.d
return new B.a4(x,new A.bmz(),B.a6(x).i("a4<1>")).dG(0,0,new A.bmA())},
gawo(){return C.e.dG(this.c,0,new A.bmu())},
gbwo(){var x=this.d
return new B.a4(x,new A.bmx(),B.a6(x).i("a4<1>")).dG(0,0,new A.bmy())},
gawC(){return C.e.dG(this.e,0,new A.bmw())}}
A.CK.prototype={
P(){return new A.aCU()},
lW(d){return this.e.$0()}}
A.aCU.prototype={
za(d,e){return this.bd4(d,e)},
bd4(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$za=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.q(new A.bOq(r,d))
u=4
q=null
x=7
return B.d(A.d9Z(new B.ab(r.a.lW(0),B.da("files","")),y.e,y.z),$async$za)
case 7:p=g
q=p.a
x=8
return B.d(e.$1(q),$async$za)
case 8:s.push(6)
x=5
break
case 4:u=3
m=t.pop()
n=r.c
if(n!=null)n.R(y.q).f.a7(D.bUr)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new A.bOr(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$za,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.X(22)
u=u.c
x=w.d
return B.F(v,B.G(B.a([new A.Xi(N.NJ,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bOv(w,t),v),H.BE,new A.Xi(C.Dd,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bOw(w,t),v),H.BE,new A.Xi(C.na,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bOx(w,t),v)],y.p),C.J,C.l,C.q,0,C.w),C.r,v,v,new B.M(C.u,v,v,s,C.aK,v,C.y),v,v,v,C.pG,v,v,v)}}
A.Xi.prototype={
u(d){var x,w,v,u=this,t=null,s=B.X(14),r=u.f,q=r?t:u.r,p=B.X(12)
p=B.F(C.O,B.b6(u.c,$.an,t,t,20),C.r,t,t,new B.M(C.af,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a9(B.G(B.a([B.i(u.d,t,t,t,C.bY,t,t,t),B.i(u.e,t,t,t,C.f1,t,t,t)],x),C.J,C.l,C.q,0,C.w),1)
v=$.an
return B.eJ(!1,s,!0,new B.V(K.pA,B.Y(B.a([p,C.am,w,r?B.aM(B.a__(t,v,t,t,t,t,t,2,t,t),20,20):B.b6(L.uS,v,t,t,20)],x),C.x,C.l,C.q,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["z(qz)","S(S,qz)","E<~>(lr)","S(S,EH)","S(S,L9)","qz()"])
A.b2A.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dE(0,new B.ab(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.ka(new A.a3w(new B.ab(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a3w<+(1?,2?),+(fZ?,fZ?)>")))}},
$S:24}
A.bPY.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("by(1)")}}
A.bPZ.prototype={
$2(d,e){this.a.c=new B.fZ(d,e)
this.b.$1(1)},
$S:21}
A.bPX.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:24}
A.crR.prototype={
$1(d){return C.j.an(d,1)===0?C.j.ac(d,0):C.j.ac(d,1)},
$S:130}
A.bmB.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bmC.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bmv.prototype={
$2(d,e){return d+e.gEU()},
$S:z+3}
A.bmz.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bmA.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.l3(x,w>0?w:x))},
$S:z+1}
A.bmu.prototype={
$2(d,e){var x=e.gEU()
return d+(x+G.l3(x,e.r))},
$S:z+3}
A.bmx.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bmy.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.l3(x,w>0?w:x)},
$S:z+1}
A.bmw.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cqV.prototype={
$1(d){return d.length!==0},
$S:8}
A.cqe.prototype={
$1(d){var x=J.a5(d),w=y.Y
if(this.a)x=A.cqO(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.h(x,"business_name")
x=J.cL(x==null?"Parceiro":x)}return x},
$S:434}
A.cqf.prototype={
$1(d){var x=d==null?null:J.h(d,"proposals")
y.Y.a(x)
x=x==null?null:J.h(x,"title")
return J.cL(x==null?"":x)},
$S:434}
A.cqd.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a5(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.h(m,"events"),j=y.Y,i=A.cqO(j.a(k))
k=j.a(l?p:J.h(m,"partner_profiles"))
k=k==null?p:J.h(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cL(k)
k=I.ctz(l?p:J.h(m,"booking_number"),x)
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bEi.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bEw.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cJS(n.h(o,"amount"))
s=A.cX4(n.h(o,"paid_at"))
r=A.cX4(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cL(o==null?"":o)
n=q.e.$1(m)
return new A.qz(k,w,j,v,u,t,s,r,o,n,A.cJS(l?p:J.h(m,"total_amount")))},
$S:z+5}
A.bOq.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bOr.prototype={
$0(){return this.a.d=null},
$S:0}
A.bOv.prototype={
$0(){return this.a.za("pdf",new A.bOu(this.b))},
$S:0}
A.bOu.prototype={
$1(d){return this.aCQ(d)},
aCQ(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
x=3
return B.d(E.czb(d,u.a),$async$$1)
case 3:t=f
B.cq("files")
s=E.cKO(d,"pdf")
B.cq("files")
v=F.Ya(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bOw.prototype={
$0(){return this.a.za("xlsx",new A.bOt(this.b))},
$S:0}
A.bOt.prototype={
$1(d){return this.aCP(d)},
aCP(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
t=E.du6(d,u.a)
B.cq("files")
s=E.cKO(d,"xlsx")
B.cq("files")
v=F.Ya(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bOx.prototype={
$0(){return this.a.za("rec",new A.bOs(this.b))},
$S:0}
A.bOs.prototype={
$1(d){return this.aCO(d)},
aCO(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cq("files")
B.cq("files")
x=2
return B.d(E.cz_(d,v.a),$async$$1)
case 2:u=f
B.cq("files")
t=E.cKO(new A.lr("Comprovativos",d.b,d.c,d.d,D.Vd,D.Ve,null),"pdf")
B.cq("files")
x=3
return B.d(F.Ya(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.b2A,A.bPY,A.bPX,A.crR,A.bmB,A.bmz,A.bmx,A.cqV,A.cqe,A.cqf,A.bOu,A.bOt,A.bOs])
w(A.a3w,B.eW)
x(B.J,[A.N8,A.EH,A.qz,A.lr])
x(B.cM,[A.bPZ,A.bmC,A.bmv,A.bmA,A.bmu,A.bmy,A.bmw])
x(B.bN,[A.cqd,A.bOq,A.bOr,A.bOv,A.bOw,A.bOx])
w(A.CK,B.I)
w(A.aCU,B.a1)
w(A.Xi,B.O)})()
B.bt(b.typeUniverse,JSON.parse('{"a3w":{"eW":[]},"CK":{"I":[],"e":[],"f":[]},"aCU":{"a1":["CK"]},"Xi":{"O":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c6<c,c>"),b:x("r<EH>"),P:x("r<qz>"),s:x("r<c>"),p:x("r<e>"),a:x("r<N8<@>>"),j:x("t<@>"),c:x("a3<c,@>"),f:x("a3<@,@>"),d:x("by"),e:x("lr"),N:x("c"),U:x("a4<c>"),q:x("dF"),i:x("S"),z:x("@"),Y:x("a3<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Ve=x([],B.w("r<a5x>"))
D.Vd=x([],B.w("r<L9>"))
D.bGc={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bDM=new B.c6(D.bGc,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bFR={deposit:0,final_payment:1,guest_share:2}
D.bEi=new B.c6(D.bFR,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bG3={paid:0,pending:1,failed:2,refunded:3}
D.bEw=new B.c6(D.bG3,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.c8E=new B.B("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bUr=new B.bX(D.c8E,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)})()};
(a=>{a["+fBKnwYVxGOv186qR521Bsq8Ywk="]=a.current})($__dart_deferred_initializers__);