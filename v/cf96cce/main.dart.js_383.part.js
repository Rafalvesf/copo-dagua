((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dpq(d,e,f){var x=e.i("@<0>").b6(f),w=new B.aO($.aU,x.i("aO<+(1,2)>")),v=new A.Oq(d.a,e.i("Oq<0>")),u=new A.Oq(d.b,f.i("Oq<0>"))
A.dyY(B.a([v,u],y.a),new A.b7M(new B.Pz(w,x.i("Pz<+(1,2)>")),v,u,e,f))
return w},
dyY(d,e){var x={},w=x.a=x.b=0,v=new A.bYs(x,d,e)
for(;w<2;++w)d[w].bmV(v)},
b7M:function b7M(d,e,f,g,h){var _=this
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
bYt:function bYt(d,e){this.a=d
this.b=e},
bYu:function bYu(d,e){this.a=d
this.b=e},
bYs:function bYs(d,e,f){this.a=d
this.b=e
this.c=f},
akR(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akR=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.S().b
n===$&&B.b()
x=6
return B.d(n.R("platform_settings").ao(0,"*").W("id",1).dP(0),$async$akR)
case 6:t=e
$.cHC=B.dw(J.i(t,"platform_commission_percentage"))
$.cY9=B.b5Y(J.i(t,"organizer_fee_tiers"),$.cHC)
s=J.i(t,"partner_fee_tiers")
r=new A.cDZ()
if(y.j.b(s)&&J.dR(s)){q=B.a([],y.s)
for(n=J.bl(s,y.f),m=B.u(n),n=new B.al(n,n.gA(n),m.i("al<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.dw(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.dw(J.i(p,"pct"))))+"% at\xe9 "+B.aM(B.dw(J.i(p,"up_to")),!1)
J.by(q,l)}$.cHD=J.kF(q,", ")}else{k=B.aL(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cHD=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akR,w)},
cXC(d){var x
if(typeof d=="number")x=d
else{x=B.f5(B.q(d))
if(x==null)x=0}return x},
dah(d){var x
if(d==null)x=null
else{x=B.dq(B.q(d))
x=x==null?null:x.e0()}return x},
cCR(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.C(J.cA(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.C(J.cA(x==null?"":x))],y.s),new A.cCY(),y.U).a2(0," & ")
return x.length===0?"Cliente":x},
cX5(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.cb(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.a1(J.i(v,"id")),v)}u=new A.cCi(a2)
t=new A.cCj()
w=B.a([],y.P)
for(v=J.cb(a1),s=v.gX(a1);s.t();)w.push(new A.cCh(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.a1(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.f5(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cG0(p,J.cA(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.dq(B.q(m))
m=m==null?h:m.e0()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cA(l==null?"":l)
k=D.bHd.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.f5(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FQ(o,p,n,m,l,k,j,v==null?0:v))}return new A.lM(e,d,g,w,D.WL,D.WM,h)},
cDZ:function cDZ(){},
FQ:function FQ(d,e,f,g,h,i,j,k){var _=this
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
lM:function lM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bsD:function bsD(){},
bsE:function bsE(){},
bsx:function bsx(){},
bsB:function bsB(){},
bsC:function bsC(){},
bsw:function bsw(){},
bsz:function bsz(){},
bsA:function bsA(){},
bsy:function bsy(){},
cCY:function cCY(){},
cCi:function cCi(d){this.a=d},
cCj:function cCj(){},
cCh:function cCh(d,e,f,g,h){var _=this
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
aGr:function aGr(){this.c=this.a=this.d=null},
bWF:function bWF(d,e){this.a=d
this.b=e},
bWG:function bWG(d){this.a=d},
bWK:function bWK(d,e){this.a=d
this.b=e},
bWJ:function bWJ(d){this.a=d},
bWL:function bWL(d,e){this.a=d
this.b=e},
bWI:function bWI(d){this.a=d},
bWM:function bWM(d,e){this.a=d
this.b=e},
bWH:function bWH(d){this.a=d},
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
bmV(d){this.a.cC(new A.bYt(this,d),new A.bYu(this,d),y.d)}}
A.FQ.prototype={
gFz(){var x=this.r-this.w
return x<0?0:x}}
A.re.prototype={
gbxr(){return this.e==="Pago"},
gpP(d){var x=this.z
return x>0?x:this.f}}
A.lM.prototype={
gaBJ(){var x=this.d
return new B.a6(x,new A.bsD(),B.a8(x).i("a6<1>")).d_(0,0,new A.bsE())},
gayo(){return C.e.d_(this.c,0,new A.bsx())},
gaBK(){var x=this.d
return new B.a6(x,new A.bsB(),B.a8(x).i("a6<1>")).d_(0,0,new A.bsC())},
gayp(){return C.e.d_(this.c,0,new A.bsw())},
gbAv(){var x=this.d
return new B.a6(x,new A.bsz(),B.a8(x).i("a6<1>")).d_(0,0,new A.bsA())},
gayE(){return C.e.d_(this.e,0,new A.bsy())}}
A.DL.prototype={
P(){return new A.aGr()},
m8(d){return this.e.$0()}}
A.aGr.prototype={
zC(d,e){return this.bh2(d,e)},
bh2(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zC=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bWF(r,d))
u=4
q=null
x=7
return B.d(A.dpq(new B.a3(r.a.m8(0),B.dd("files","")),y.e,y.z),$async$zC)
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
if(n!=null)n.O(y.q).f.a3(D.bZP)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bWG(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zC,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.X(22)
u=u.c
x=w.d
return B.B(v,B.A(B.a([new A.Zb(L.Pf,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bWK(w,t),v),H.CM,new A.Zb(C.Et,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bWL(w,t),v),H.CM,new A.Zb(C.lQ,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bWM(w,t),v)],y.p),C.H,C.h,C.l,0,C.u),C.r,v,v,new B.M(C.t,v,v,s,C.bh,v,C.y),v,v,v,C.jC,v,v,v)}}
A.Zb.prototype={
u(d){var x,w,v,u=this,t=null,s=B.X(14),r=u.f,q=r?t:u.r,p=B.X(12)
p=B.B(C.L,B.b2(u.c,$.at,t,t,20),C.r,t,t,new B.M(C.a7,t,t,p,t,t,C.y),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.A(B.a([B.h(u.d,t,t,t,t,C.bG,t,t,t),B.h(u.e,t,t,t,t,C.hi,t,t,t)],x),C.H,C.h,C.l,0,C.u),1)
v=$.at
return B.eC(!1,s,!0,new B.Q(C.nB,B.O(B.a([p,C.af,w,r?B.aG(B.ao9(t,v,t,t,t,t,t,2,t,t),20,20):B.b2(K.vA,v,t,t,20)],x),C.w,C.h,C.l,0,t,t),t),t,!0,t,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["x(re)","R(R,re)","F<~>(lM)","R(R,FQ)","R(R,Ml)","re()"])
A.b7M.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.a3(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jR(new A.a5L(new B.a3(x,w),t,d,v.d.i("@<0>").b6(v.e).i("a5L<+(1?,2?),+(ha?,ha?)>")))}},
$S:15}
A.bYt.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bx(1)")}}
A.bYu.prototype={
$2(d,e){this.a.c=new B.ha(d,e)
this.b.$1(1)},
$S:22}
A.bYs.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cDZ.prototype={
$1(d){return C.k.ap(d,1)===0?C.k.a8(d,0):C.k.a8(d,1)},
$S:162}
A.bsD.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsE.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.bsx.prototype={
$2(d,e){return d+e.gFz()},
$S:z+3}
A.bsB.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsC.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lp(x,w>0?w:x))},
$S:z+1}
A.bsw.prototype={
$2(d,e){var x=e.gFz()
return d+(x+G.lp(x,e.r))},
$S:z+3}
A.bsz.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bsA.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lp(x,w>0?w:x)},
$S:z+1}
A.bsy.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cCY.prototype={
$1(d){return d.length!==0},
$S:8}
A.cCi.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cCR(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cA(x==null?"Parceiro":x)}return x},
$S:350}
A.cCj.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cA(x==null?"":x)},
$S:350}
A.cCh.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cCR(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cA(k)
k=l?p:J.i(m,"booking_number")
k=I.cG0(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bHM.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bI_.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.cXC(n.h(o,"amount"))
s=A.dah(n.h(o,"paid_at"))
r=A.dah(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cA(o==null?"":o)
n=q.e.$1(m)
return new A.re(k,w,j,v,u,t,s,r,o,n,A.cXC(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bWF.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bWG.prototype={
$0(){return this.a.d=null},
$S:0}
A.bWK.prototype={
$0(){return this.a.zC("pdf",new A.bWJ(this.b))},
$S:0}
A.bWJ.prototype={
$1(d){return this.aEV(d)},
aEV(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cp("files")
B.cp("files")
x=3
return B.d(E.cMo(d,u.a),$async$$1)
case 3:t=f
B.cp("files")
s=E.cYx(d,"pdf")
B.cp("files")
v=F.a_5(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bWL.prototype={
$0(){return this.a.zC("xlsx",new A.bWI(this.b))},
$S:0}
A.bWI.prototype={
$1(d){return this.aEU(d)},
aEU(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cp("files")
B.cp("files")
t=E.dKo(d,u.a)
B.cp("files")
s=E.cYx(d,"xlsx")
B.cp("files")
v=F.a_5(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bWM.prototype={
$0(){return this.a.zC("rec",new A.bWH(this.b))},
$S:0}
A.bWH.prototype={
$1(d){return this.aET(d)},
aET(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.cp("files")
B.cp("files")
x=2
return B.d(E.cMb(d,v.a),$async$$1)
case 2:u=f
B.cp("files")
t=E.cYx(new A.lM("Comprovativos",d.b,d.c,d.d,D.WL,D.WM,null),"pdf")
B.cp("files")
x=3
return B.d(F.a_5(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.b7M,A.bYt,A.bYs,A.cDZ,A.bsD,A.bsB,A.bsz,A.cCY,A.cCi,A.cCj,A.bWJ,A.bWI,A.bWH])
w(A.a5L,B.f9)
x(B.J,[A.Oq,A.FQ,A.re,A.lM])
x(B.cO,[A.bYu,A.bsE,A.bsx,A.bsC,A.bsw,A.bsA,A.bsy])
x(B.bQ,[A.cCh,A.bWF,A.bWG,A.bWK,A.bWL,A.bWM])
w(A.DL,B.G)
w(A.aGr,B.Z)
w(A.Zb,B.H)})()
B.bn(b.typeUniverse,JSON.parse('{"a5L":{"f9":[]},"DL":{"G":[],"e":[],"f":[]},"aGr":{"Z":["DL"]},"Zb":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{w:x("c2<c,c>"),b:x("r<FQ>"),P:x("r<re>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Oq<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bx"),e:x("lM"),N:x("c"),U:x("a6<c>"),q:x("dm"),i:x("R"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.WM=x([],B.w("r<a7M>"))
D.WL=x([],B.w("r<Ml>"))
D.bJR={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bHd=new B.c2(D.bJR,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bJu={deposit:0,final_payment:1,guest_share:2}
D.bHM=new B.c2(D.bJu,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bJI={paid:0,pending:1,failed:2,refunded:3}
D.bI_=new B.c2(D.bJI,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cef=new B.C("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZP=new B.bG(D.cef,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.z,null)})()};
(a=>{a["E/1yt4MrI4TBjDlS7o7WpWcKi5k="]=a.current})($__dart_deferred_initializers__);