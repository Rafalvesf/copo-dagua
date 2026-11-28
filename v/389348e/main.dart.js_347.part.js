((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
du6(d){return new A.EW(d,null)},
daO(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
daN(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mN||x===C.tP
case 1:x=d.y
return x===C.jr||x===C.eQ
case 2:return d.y===C.hV}},
GU:function GU(d,e){this.a=d
this.b=e},
EW:function EW(d,e){this.d=d
this.a=e},
afE:function afE(){var _=this
_.d=_.w=$
_.c=_.a=null},
cez:function cez(d,e,f){this.a=d
this.b=e
this.c=f},
ceu:function ceu(){},
cev:function cev(){},
cew:function cew(d,e,f){this.a=d
this.b=e
this.c=f},
cex:function cex(){},
cey:function cey(){},
ceJ:function ceJ(d){this.a=d},
ceK:function ceK(d){this.a=d},
ceF:function ceF(d,e){this.a=d
this.b=e},
ceE:function ceE(d,e){this.a=d
this.b=e},
ceI:function ceI(){},
ceH:function ceH(d){this.a=d},
ceA:function ceA(d){this.a=d},
ceG:function ceG(d,e){this.a=d
this.b=e},
ceB:function ceB(){},
ceC:function ceC(){},
ceD:function ceD(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[188]
A=a.updateHolder(c[33],A)
D=c[353]
F=c[103]
A.GU.prototype={
I(){return"_BookingSegment."+this.b}}
A.EW.prototype={
R(){return new A.afE()}}
A.afE.prototype={
Ux(d,e,f){var x,w,v,u=B.a([],y.u)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.H)(f),++w){v=f[w]
u.push(new F.a7Y(v,new A.cez(this,e,v),!0,null))}return B.eV(u,0)},
b_C(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(e.length===0){x=A.daO(h.gE_())
switch(h.gE_().a){case 0:w="Sem pedidos por tratar"
break
case 1:w="Ainda sem reservas confirmadas"
break
case 2:w="Ainda sem eventos conclu\xeddos"
break
default:w=g}switch(h.gE_().a){case 0:v="Os pedidos de or\xe7amento e de reserva aparecem aqui."
break
case 1:v="As reservas aceites e pagas aparecem aqui."
break
case 2:v="Os eventos que j\xe1 fizeste aparecem aqui."
break
default:v=g}u=y.u
return B.a([new B.d0(x,g,B.a([B.JJ(C.hE,C.fa,v,w)],u),16,g)],u)}switch(h.gE_().a){case 0:x=B.a8(e).i("a4<1>")
w=x.i("x.E")
t=B.U(new B.a4(e,new A.ceu(),x),w)
s=B.U(new B.a4(e,new A.cev(),x),w)
x=y.u
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.x,p=0;p<t.length;t.length===r||(0,B.H)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.ay(m)+" "+C.bh[B.an(m)-1]+" "+B.ax(m)],q)
k=o.CW
if(k!=null)l.push(B.q(k)+" pessoas")
u.push(new B.v5(new B.ci(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a0(l," \xb7 "),"Responder",new A.cew(h,d,o),C.j.aP(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.d0("Por responder \xb7 "+v,g,u,16,g))}v=s.length
if(v!==0)w.push(new B.d0("Proposta enviada \xb7 "+v,g,B.a([h.Ux(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a4<1>")
w=x.i("x.E")
j=B.U(new B.a4(e,new A.cex(),x),w)
i=B.U(new B.a4(e,new A.cey(),x),w)
x=y.u
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.d0("\xc0 espera do sinal \xb7 "+v,g,B.a([h.Ux(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.d0("Confirmadas \xb7 "+v,g,B.a([h.Ux(0,d,i)],x),16,g))
return w
case 2:x=y.u
return B.a([new B.d0("Conclu\xeddos \xb7 "+e.length,g,B.a([h.Ux(0,d,e)],x),16,g)],x)}},
gE_(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abJ
break
case"concluidos":x=D.abK
break
default:x=D.Je
break}w=this.w=x}return w},
b8_(d){return A.daN(d,this.gE_())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.qj().$1(s),y.w),q=r.gv(r),p=new A.ceJ(q==null?C.xr:q),o=B.aO(d,C.b6,y.A).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bs_[x]
v=A.daO(w)
u=w===D.Je?p.$1(w):s
n.push(new B.ej(v,t.gE_()===w,u,new A.ceF(t,w),s))}v=y.u
n=B.a([D.bXi,new E.mc(n,16,!1,s)],v)
C.e.n(n,B.hC(r,new A.ceG(t,d),new A.ceH(t),new A.ceI(),!1,!0,!1))
return B.cP(s,C.d1,new B.bB(C.ax,s,C.aD,C.y,B.a([B.d6(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPy],v),s),!0,s)}}
var z=a.updateTypes(["B(eI)","v(GU)"])
A.cez.prototype={
$0(){var x=this.c
return B.ae(this.b).am("/partner-requests/"+x.a,x,y.q)},
$S:0}
A.ceu.prototype={
$1(d){return!d.ax},
$S:41}
A.cev.prototype={
$1(d){return d.ax},
$S:41}
A.cew.prototype={
$0(){var x=this.c
return B.ae(this.b).am("/partner-requests/"+x.a,x,y.q)},
$S:0}
A.cex.prototype={
$1(d){return d.y===C.jr},
$S:41}
A.cey.prototype={
$1(d){return d.y===C.eQ},
$S:41}
A.ceJ.prototype={
$1(d){return J.db(this.a,new A.ceK(d)).gA(0)},
$S:z+1}
A.ceK.prototype={
$1(d){return A.daN(d,this.a)},
$S:41}
A.ceF.prototype={
$0(){var x=this.a
return x.p(new A.ceE(x,this.b))},
$S:0}
A.ceE.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ceI.prototype={
$0(){return D.bve},
$S:78}
A.ceH.prototype={
$2(d,e){return B.a([new B.jh("N\xe3o foi poss\xedvel carregar.",new A.ceA(this.a),null)],y.u)},
$S:1500}
A.ceA.prototype={
$0(){return this.a.gS().ak($.qj().$1(null))},
$S:0}
A.ceG.prototype={
$1(d){var x,w=null,v=this.a,u=J.cc(d),t=u.cS(d,v.gb7Z()),s=B.U(t,t.$ti.i("x.E")),r=u.cS(d,new A.ceB()).gA(0),q=u.cS(d,new A.ceC()).gA(0),p=u.cS(d,new A.ceD()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.u
x=B.a([B.vh(new B.S(C.jE,B.e_(C.bf,B.a([new B.eo(""+q+" por responder",C.hC,w),new B.eo(""+p+" "+t,C.e3,w)],x),C.r,C.bk,8,8),w),w,"Pedidos recebidos",C.hF,w,u,""+r)],x)
C.e.n(x,v.b_C(this.b,s))
return x},
$S:1501}
A.ceB.prototype={
$1(d){return d.at},
$S:41}
A.ceC.prototype={
$1(d){return d.y===C.mN&&!d.ax},
$S:41}
A.ceD.prototype={
$1(d){return d.ax&&d.y===C.tP},
$S:41};(function installTearOffs(){var x=a._instance_1u
x(A.afE.prototype,"gb7Z","b8_",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GU,B.eX)
x(A.EW,B.dA)
x(A.afE,B.dv)
w(B.bP,[A.cez,A.cew,A.ceF,A.ceE,A.ceI,A.ceA])
w(B.bw,[A.ceu,A.cev,A.cex,A.cey,A.ceJ,A.ceK,A.ceG,A.ceB,A.ceC,A.ceD])
x(A.ceH,B.cK)})()
B.br(b.typeUniverse,JSON.parse('{"EW":{"G":[],"e":[],"f":[]},"afE":{"Y":["EW"]}}'))
var y={w:B.w("az<t<eI>>"),k:B.w("r<ej>"),x:B.w("r<c>"),u:B.w("r<e>"),A:B.w("dh"),q:B.w("J?")};(function constants(){var x=a.makeConstList
D.Je=new A.GU(0,"recebidos")
D.abJ=new A.GU(1,"confirmados")
D.abK=new A.GU(2,"concluidos")
D.bs_=x([D.Je,D.abJ,D.abK],B.w("r<GU>"))
D.bve=x([C.a1R],y.u)
D.bM6=new B.Ll(C.a21,null)
D.bPy=new B.eF(0,null,0,0,null,null,D.bM6,null)
D.c9I=new B.D("Pedidos",null,C.hj,null,null,null,null,null,null,null,null)
D.acW=new B.d_(C.bc,null,null,D.c9I,null)
D.bXi=new B.c_(null,44,D.acW,null)})()};
(a=>{a["1zB6Z/2y9UgLUDxMyt7eajeWMKo="]=a.current})($__dart_deferred_initializers__);