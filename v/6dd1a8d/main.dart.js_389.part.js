((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,F,K,I,E,G,A={
dsh(d,e,f){var x=e.i("@<0>").b8(f),w=new B.aN($.aT,x.i("aN<+(1,2)>")),v=new A.Oy(d.a,e.i("Oy<0>")),u=new A.Oy(d.b,f.i("Oy<0>"))
A.dBS(B.a([v,u],y.a),new A.b80(new B.PJ(w,x.i("PJ<+(1,2)>")),v,u,e,f))
return w},
dBS(d,e){var x={},w=x.a=x.b=0,v=new A.bZA(x,d,e)
for(;w<2;++w)d[w].bmM(v)},
b80:function b80(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5V:function a5V(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.$ti=g},
Oy:function Oy(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
bZB:function bZB(d,e){this.a=d
this.b=e},
bZC:function bZC(d,e){this.a=d
this.b=e},
bZA:function bZA(d,e,f){this.a=d
this.b=e
this.c=f},
akX(){var x=0,w=B.n(y.H),v=1,u=[],t,s,r,q,p,o,n,m,l,k,j,i
var $async$akX=B.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
n=$.P().b
n===$&&B.b()
x=6
return B.d(n.P("platform_settings").ai(0,"*").U("id",1).dR(0),$async$akX)
case 6:t=e
$.cJQ=B.du(J.i(t,"platform_commission_percentage"))
$.d_P=B.b6c(J.i(t,"organizer_fee_tiers"),$.cJQ)
s=J.i(t,"partner_fee_tiers")
r=new A.cG7()
if(y.j.b(s)&&J.dM(s)){q=B.a([],y.s)
for(n=J.bi(s,y.f),m=B.u(n),n=new B.aj(n,n.gA(n),m.i("aj<V.E>")),m=m.i("V.E");n.t();){l=n.d
p=l==null?m.a(l):l
l=J.i(p,"up_to")==null?B.q(r.$1(B.du(J.i(p,"pct"))))+"% acima":B.q(r.$1(B.du(J.i(p,"pct"))))+"% at\xe9 "+B.aK(B.du(J.i(p,"up_to")),!1)
J.br(q,l)}$.cJR=J.kI(q,", ")}else{k=B.aF(J.i(t,"partner_fee_percentage"))
o=k==null?0:k
$.cJR=o>0?B.q(r.$1(o))+"%":""}v=1
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
return B.m($async$akX,w)},
d_f(d){var x
if(typeof d=="number")x=d
else{x=B.eW(B.q(d))
if(x==null)x=0}return x},
dd0(d){var x
if(d==null)x=null
else{x=B.d4(B.q(d))
x=x==null?null:x.dM()}return x},
cER(d){var x,w,v
if(d==null)return"Cliente"
x=J.a7(d)
w=x.h(d,"partner_name_1")
v=C.f.B(J.cB(w==null?"":w))
x=x.h(d,"partner_name_2")
x=new B.a6(B.a([v,C.f.B(J.cB(x==null?"":x))],y.s),new A.cEY(),y.U).a1(0," & ")
return x.length===0?"Cliente":x},
cZI(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="status",h=null,g=y.N,f=B.E(g,y.c)
for(x=J.c8(a0),w=x.gX(a0);w.t();){v=w.gE(w)
f.j(0,B.a_(J.i(v,"id")),v)}u=new A.cEi(a2)
t=new A.cEj()
w=B.a([],y.P)
for(v=J.c8(a1),s=v.gX(a1);s.t();)w.push(new A.cEh(f,s.gE(s),a2,d,t).$0())
r=B.E(g,y.i)
for(g=v.gX(a1);g.t();){f=g.gE(g)
v=J.a7(f)
if(J.o(v.h(f,i),"paid")){q=B.a_(v.h(f,"booking_id"))
s=r.h(0,q)
if(s==null)s=0
f=v.h(f,"amount")
if(!(typeof f=="number")){f=B.eW(B.q(f))
if(f==null)f=0}r.j(0,q,s+f)}}g=B.a([],y.b)
for(f=x.gX(a0),x=y.Y;f.t();){v=f.gE(f)
s=J.a7(v)
p=s.h(v,"booking_number")
o=x.a(s.h(v,"partner_profiles"))
o=o==null?h:J.i(o,"business_name")
if(o==null)o=a2?d:""
o=I.cIb(p,J.cB(o),s.h(v,"reference"))
p=u.$1(v)
n=t.$1(v)
m=s.h(v,"event_date")
if(m==null)m=h
else{m=B.d4(B.q(m))
m=m==null?h:m.dM()}l=x.a(s.h(v,"events"))
l=l==null?h:J.i(l,"location")
l=J.cB(l==null?"":l)
k=D.bGF.h(0,s.h(v,i))
if(k==null)k=B.q(s.h(v,i))
j=s.h(v,"total_amount")
if(!(typeof j=="number")){j=B.eW(B.q(j))
if(j==null)j=0}v=r.h(0,s.h(v,"id"))
g.push(new A.FT(o,p,n,m,l,k,j,v==null?0:v))}return new A.lT(e,d,g,w,D.Wm,D.Wn,h)},
cG7:function cG7(){},
FT:function FT(d,e,f,g,h,i,j,k){var _=this
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
lT:function lT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
btr:function btr(){},
bts:function bts(){},
btl:function btl(){},
btp:function btp(){},
btq:function btq(){},
btk:function btk(){},
btn:function btn(){},
bto:function bto(){},
btm:function btm(){},
cEY:function cEY(){},
cEi:function cEi(d){this.a=d},
cEj:function cEj(){},
cEh:function cEh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DP:function DP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGz:function aGz(){this.c=this.a=this.d=null},
bXN:function bXN(d,e){this.a=d
this.b=e},
bXO:function bXO(d){this.a=d},
bXS:function bXS(d,e){this.a=d
this.b=e},
bXR:function bXR(d){this.a=d},
bXT:function bXT(d,e){this.a=d
this.b=e},
bXQ:function bXQ(d){this.a=d},
bXU:function bXU(d,e){this.a=d
this.b=e},
bXP:function bXP(d){this.a=d},
Zf:function Zf(d,e,f,g,h,i){var _=this
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
F=c[143]
K=c[332]
I=c[150]
E=c[69]
G=c[151]
A=a.updateHolder(c[133],A)
D=c[441]
L=c[431]
A.a5V.prototype={
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
return x==null?B.fa.prototype.gmY.call(this):x}}
A.Oy.prototype={
gv(d){var x=this.b
if(x==null)this.$ti.c.a(x)
return x},
bmM(d){this.a.cE(new A.bZB(this,d),new A.bZC(this,d),y.d)}}
A.FT.prototype={
gFr(){var x=this.r-this.w
return x<0?0:x}}
A.re.prototype={
gbxa(){return this.e==="Pago"},
gpS(d){var x=this.z
return x>0?x:this.f}}
A.lT.prototype={
gaBP(){var x=this.d
return new B.a6(x,new A.btr(),B.a8(x).i("a6<1>")).d_(0,0,new A.bts())},
gayu(){return C.e.d_(this.c,0,new A.btl())},
gaBQ(){var x=this.d
return new B.a6(x,new A.btp(),B.a8(x).i("a6<1>")).d_(0,0,new A.btq())},
gayv(){return C.e.d_(this.c,0,new A.btk())},
gbAi(){var x=this.d
return new B.a6(x,new A.btn(),B.a8(x).i("a6<1>")).d_(0,0,new A.bto())},
gayK(){return C.e.d_(this.e,0,new A.btm())}}
A.DP.prototype={
R(){return new A.aGz()},
m3(d){return this.e.$0()}}
A.aGz.prototype={
zB(d,e){return this.bh5(d,e)},
bh5(d,e){var x=0,w=B.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m
var $async$zB=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.d!=null){x=1
break}r.p(new A.bXN(r,d))
u=4
q=null
x=7
return B.d(A.dsh(new B.Z(r.a.m3(0),B.dg("files","")),y.e,y.z),$async$zB)
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
if(n!=null)n.O(y.q).f.a2(D.bZ4)
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.p(new A.bXO(r))
x=s.pop()
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$zB,w)},
u(d){var x,w=this,v=null,u=w.a,t=u.d,s=B.W(22)
u=u.c
x=w.d
return B.y(v,B.z(B.a([new A.Zf(L.OR,u+" \xb7 PDF","Resumo, reservas e pagamentos",x==="pdf",new A.bXS(w,t),v),H.CD,new A.Zf(C.Ej,u+" \xb7 Excel","Uma folha por tabela, pronta a filtrar",x==="xlsx",new A.bXT(w,t),v),H.CD,new A.Zf(C.qz,"Comprovativos de pagamento \xb7 PDF","Um por pagamento feito na app (n\xe3o substitui a fatura)",x==="rec",new A.bXU(w,t),v)],y.p),C.G,C.h,C.l),C.r,v,v,new B.J(C.t,v,v,s,C.bs,v,C.x),v,v,v,C.i3,v,v,v)}}
A.Zf.prototype={
u(d){var x,w,v,u=this,t=null,s=B.W(14),r=u.f,q=r?t:u.r,p=B.W(12)
p=B.y(C.K,B.b5(u.c,$.au,t,t,20),C.r,t,t,new B.J(C.a4,t,t,p,t,t,C.x),t,40,t,t,t,t,40)
x=y.p
w=B.a4(B.z(B.a([B.h(u.d,t,t,t,t,C.bx,t,t,t),B.h(u.e,t,t,t,t,C.hj,t,t,t)],x),C.G,C.h,C.l),1)
v=$.au
return B.eR(!1,s,!0,new B.S(C.nu,B.O(B.a([p,C.ae,w,r?B.aH(B.aog(t,v,t,t,t,t,t,2,t,t),20,20):B.b5(K.vt,v,t,t,20)],x),C.v,C.h,C.l,0,t),t),t,!0,t,t,t,t,t,t,t,t,t,q,t,t,t,t,t,t,t)}}
var z=a.updateTypes(["B(re)","T(T,re)","F<~>(lT)","T(T,FT)","T(T,Mr)","re()"])
A.b80.prototype={
$1(d){var x,w,v=this,u=v.a,t=v.b,s=v.c
if(d===0)u.dI(0,new B.Z(t.gv(0),s.gv(0)))
else{x=t.b
w=s.b
t=t.c
if(t==null)t=s.c
u.jN(new A.a5V(new B.Z(x,w),t,d,v.d.i("@<0>").b8(v.e).i("a5V<+(1?,2?),+(hd?,hd?)>")))}},
$S:15}
A.bZB.prototype={
$1(d){this.a.b=d
this.b.$1(0)},
$S(){return this.a.$ti.i("bm(1)")}}
A.bZC.prototype={
$2(d,e){this.a.c=new B.hd(d,e)
this.b.$1(1)},
$S:23}
A.bZA.prototype={
$1(d){var x=this.a,w=x.a+=d
if(++x.b===2)this.c.$1(w)},
$S:15}
A.cG7.prototype={
$1(d){return C.k.aB(d,1)===0?C.k.a9(d,0):C.k.a9(d,1)},
$S:179}
A.btr.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bts.prototype={
$2(d,e){return d+e.f},
$S:z+1}
A.btl.prototype={
$2(d,e){return d+e.gFr()},
$S:z+3}
A.btp.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.btq.prototype={
$2(d,e){var x=e.f,w=e.z
return d+(x+G.lv(x,w>0?w:x))},
$S:z+1}
A.btk.prototype={
$2(d,e){var x=e.gFr()
return d+(x+G.lv(x,e.r))},
$S:z+3}
A.btn.prototype={
$1(d){return d.e==="Pago"},
$S:z+0}
A.bto.prototype={
$2(d,e){var x=e.f,w=e.z
return d+G.lv(x,w>0?w:x)},
$S:z+1}
A.btm.prototype={
$2(d,e){return d+e.c},
$S:z+4}
A.cEY.prototype={
$1(d){return d.length!==0},
$S:6}
A.cEi.prototype={
$1(d){var x=J.a7(d),w=y.Y
if(this.a)x=A.cER(w.a(x.h(d,"events")))
else{x=w.a(x.h(d,"partner_profiles"))
x=x==null?null:J.i(x,"business_name")
x=J.cB(x==null?"Parceiro":x)}return x},
$S:450}
A.cEj.prototype={
$1(d){var x=d==null?null:J.i(d,"proposals")
y.Y.a(x)
x=x==null?null:J.i(x,"title")
return J.cB(x==null?"":x)},
$S:450}
A.cEh.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p=null,o=q.b,n=J.a7(o),m=q.a.h(0,n.h(o,"booking_id")),l=m==null,k=l?p:J.i(m,"events"),j=y.Y,i=A.cER(j.a(k))
k=j.a(l?p:J.i(m,"partner_profiles"))
k=k==null?p:J.i(k,"business_name")
if(k==null)k=q.c?q.d:""
x=J.cB(k)
k=l?p:J.i(m,"booking_number")
k=I.cIb(k,x,l?p:J.i(m,"reference"))
j=q.c
w=j?i:q.d
j=j?q.d:x
v=D.bHd.h(0,n.h(o,"type"))
if(v==null)v=B.q(n.h(o,"type"))
u=D.bHr.h(0,n.h(o,"status"))
if(u==null)u=B.q(n.h(o,"status"))
t=A.d_f(n.h(o,"amount"))
s=A.dd0(n.h(o,"paid_at"))
r=A.dd0(n.h(o,"due_at"))
o=n.h(o,"provider")
o=J.cB(o==null?"":o)
n=q.e.$1(m)
return new A.re(k,w,j,v,u,t,s,r,o,n,A.d_f(l?p:J.i(m,"total_amount")))},
$S:z+5}
A.bXN.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bXO.prototype={
$0(){return this.a.d=null},
$S:0}
A.bXS.prototype={
$0(){return this.a.zB("pdf",new A.bXR(this.b))},
$S:0}
A.bXR.prototype={
$1(d){return this.aF0(d)},
aF0(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.co("files")
B.co("files")
x=3
return B.d(E.cOT(d,u.a),$async$$1)
case 3:t=f
B.co("files")
s=E.d0d(d,"pdf")
B.co("files")
v=F.a_a(t,s,"application/pdf")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXT.prototype={
$0(){return this.a.zB("xlsx",new A.bXQ(this.b))},
$S:0}
A.bXQ.prototype={
$1(d){return this.aF_(d)},
aF_(d){var x=0,w=B.n(y.H),v,u=this,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.co("files")
B.co("files")
t=E.dNp(d,u.a)
B.co("files")
s=E.d0d(d,"xlsx")
B.co("files")
v=F.a_a(t,s,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:z+2}
A.bXU.prototype={
$0(){return this.a.zB("rec",new A.bXP(this.b))},
$S:0}
A.bXP.prototype={
$1(d){return this.aEZ(d)},
aEZ(d){var x=0,w=B.n(y.H),v=this,u,t
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:B.co("files")
B.co("files")
x=2
return B.d(E.cOG(d,v.a),$async$$1)
case 2:u=f
B.co("files")
t=E.d0d(new A.lT("Comprovativos",d.b,d.c,d.d,D.Wm,D.Wn,null),"pdf")
B.co("files")
x=3
return B.d(F.a_a(u,t,"application/pdf"),$async$$1)
case 3:return B.l(null,w)}})
return B.m($async$$1,w)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.b80,A.bZB,A.bZA,A.cG7,A.btr,A.btp,A.btn,A.cEY,A.cEi,A.cEj,A.bXR,A.bXQ,A.bXP])
w(A.a5V,B.fa)
x(B.K,[A.Oy,A.FT,A.re,A.lT])
x(B.cL,[A.bZC,A.bts,A.btl,A.btq,A.btk,A.bto,A.btm])
x(B.bQ,[A.cEh,A.bXN,A.bXO,A.bXS,A.bXT,A.bXU])
w(A.DP,B.G)
w(A.aGz,B.Y)
w(A.Zf,B.M)})()
B.bu(b.typeUniverse,JSON.parse('{"a5V":{"fa":[]},"DP":{"G":[],"e":[],"f":[]},"aGz":{"Y":["DP"]},"Zf":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.x
return{w:x("c4<c,c>"),b:x("r<FT>"),P:x("r<re>"),s:x("r<c>"),p:x("r<e>"),a:x("r<Oy<@>>"),j:x("t<@>"),c:x("a5<c,@>"),f:x("a5<@,@>"),d:x("bm"),e:x("lT"),N:x("c"),U:x("a6<c>"),q:x("dr"),i:x("T"),z:x("@"),Y:x("a5<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Wn=x([],B.x("r<a7X>"))
D.Wm=x([],B.x("r<Mr>"))
D.bJi={awaiting_deposit:0,confirmed:1,completed:2,expired:3,cancelled_by_couple:4,cancelled_by_partner:5,payment_overdue:6,disputed:7}
D.bGF=new B.c4(D.bJi,["A aguardar sinal","Confirmada","Conclu\xedda","Expirada","Cancelada pelo cliente","Cancelada pelo parceiro","Pagamento em atraso","Em disputa"],y.w)
D.bIW={deposit:0,final_payment:1,guest_share:2}
D.bHd=new B.c4(D.bIW,["Sinal","Pagamento final","Parte de convidado"],y.w)
D.bJ9={paid:0,pending:1,failed:2,refunded:3}
D.bHr=new B.c4(D.bJ9,["Pago","Pendente","Falhou","Reembolsado"],y.w)
D.cdm=new B.D("N\xe3o foi poss\xedvel gerar o ficheiro. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZ4=new B.bF(D.cdm,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)})()};
(a=>{a["OKLRGa/gz2BECv8aeiiPjwrq96c="]=a.current})($__dart_deferred_initializers__);