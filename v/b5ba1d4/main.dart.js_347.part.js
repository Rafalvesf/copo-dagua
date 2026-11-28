((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
du4(d){return new A.EW(d,null)},
daN(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
daM(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mM||x===C.tO
case 1:x=d.y
return x===C.jr||x===C.eQ
case 2:return d.y===C.hV}},
GT:function GT(d,e){this.a=d
this.b=e},
EW:function EW(d,e){this.d=d
this.a=e},
afB:function afB(){var _=this
_.d=_.w=$
_.c=_.a=null},
cey:function cey(d,e,f){this.a=d
this.b=e
this.c=f},
cet:function cet(){},
ceu:function ceu(){},
cev:function cev(d,e,f){this.a=d
this.b=e
this.c=f},
cew:function cew(){},
cex:function cex(){},
ceI:function ceI(d){this.a=d},
ceJ:function ceJ(d){this.a=d},
ceE:function ceE(d,e){this.a=d
this.b=e},
ceD:function ceD(d,e){this.a=d
this.b=e},
ceH:function ceH(){},
ceG:function ceG(d){this.a=d},
cez:function cez(d){this.a=d},
ceF:function ceF(d,e){this.a=d
this.b=e},
ceA:function ceA(){},
ceB:function ceB(){},
ceC:function ceC(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[188]
A=a.updateHolder(c[33],A)
D=c[353]
F=c[104]
A.GT.prototype={
I(){return"_BookingSegment."+this.b}}
A.EW.prototype={
R(){return new A.afB()}}
A.afB.prototype={
Ux(d,e,f){var x,w,v,u=B.a([],y.u)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.H)(f),++w){v=f[w]
u.push(new F.a7V(v,new A.cey(this,e,v),!0,null))}return B.eV(u,0)},
b_A(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(e.length===0){x=A.daN(h.gE_())
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
return B.a([new B.cA(x,g,B.a([B.JJ(C.hD,C.fa,v,w)],u),16,g)],u)}switch(h.gE_().a){case 0:x=B.a8(e).i("a4<1>")
w=x.i("x.E")
t=B.U(new B.a4(e,new A.cet(),x),w)
s=B.U(new B.a4(e,new A.ceu(),x),w)
x=y.u
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.x,p=0;p<t.length;t.length===r||(0,B.H)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.ay(m)+" "+C.bg[B.an(m)-1]+" "+B.ax(m)],q)
k=o.CW
if(k!=null)l.push(B.q(k)+" pessoas")
u.push(new B.v5(new B.ci(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a0(l," \xb7 "),"Responder",new A.cev(h,d,o),C.j.aP(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.cA("Por responder \xb7 "+v,g,u,16,g))}v=s.length
if(v!==0)w.push(new B.cA("Proposta enviada \xb7 "+v,g,B.a([h.Ux(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a4<1>")
w=x.i("x.E")
j=B.U(new B.a4(e,new A.cew(),x),w)
i=B.U(new B.a4(e,new A.cex(),x),w)
x=y.u
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.cA("\xc0 espera do sinal \xb7 "+v,g,B.a([h.Ux(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.cA("Confirmadas \xb7 "+v,g,B.a([h.Ux(0,d,i)],x),16,g))
return w
case 2:x=y.u
return B.a([new B.cA("Conclu\xeddos \xb7 "+e.length,g,B.a([h.Ux(0,d,e)],x),16,g)],x)}},
gE_(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abI
break
case"concluidos":x=D.abJ
break
default:x=D.Jd
break}w=this.w=x}return w},
b7Y(d){return A.daM(d,this.gE_())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.qj().$1(s),y.w),q=r.gv(r),p=new A.ceI(q==null?C.xr:q),o=B.aO(d,C.b6,y.A).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.brX[x]
v=A.daN(w)
u=w===D.Jd?p.$1(w):s
n.push(new B.ek(v,t.gE_()===w,u,new A.ceE(t,w),s))}v=y.u
n=B.a([D.bXi,new E.me(n,16,!1,s)],v)
C.e.n(n,B.hC(r,new A.ceF(t,d),new A.ceG(t),new A.ceH(),!1,!0,!1))
return B.cQ(s,C.d1,new B.bB(C.ax,s,C.aD,C.y,B.a([B.d6(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPv],v),s),!0,s)}}
var z=a.updateTypes(["z(eI)","v(GT)"])
A.cey.prototype={
$0(){var x=this.c
return B.ae(this.b).am("/partner-requests/"+x.a,x,y.q)},
$S:0}
A.cet.prototype={
$1(d){return!d.ax},
$S:41}
A.ceu.prototype={
$1(d){return d.ax},
$S:41}
A.cev.prototype={
$0(){var x=this.c
return B.ae(this.b).am("/partner-requests/"+x.a,x,y.q)},
$S:0}
A.cew.prototype={
$1(d){return d.y===C.jr},
$S:41}
A.cex.prototype={
$1(d){return d.y===C.eQ},
$S:41}
A.ceI.prototype={
$1(d){return J.db(this.a,new A.ceJ(d)).gA(0)},
$S:z+1}
A.ceJ.prototype={
$1(d){return A.daM(d,this.a)},
$S:41}
A.ceE.prototype={
$0(){var x=this.a
return x.p(new A.ceD(x,this.b))},
$S:0}
A.ceD.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ceH.prototype={
$0(){return D.bva},
$S:78}
A.ceG.prototype={
$2(d,e){return B.a([new B.ji("N\xe3o foi poss\xedvel carregar.",new A.cez(this.a),null)],y.u)},
$S:1500}
A.cez.prototype={
$0(){return this.a.gS().ak($.qj().$1(null))},
$S:0}
A.ceF.prototype={
$1(d){var x,w=null,v=this.a,u=J.cc(d),t=u.cS(d,v.gb7X()),s=B.U(t,t.$ti.i("x.E")),r=u.cS(d,new A.ceA()).gA(0),q=u.cS(d,new A.ceB()).gA(0),p=u.cS(d,new A.ceC()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.u
x=B.a([B.vh(new B.S(C.jE,B.e_(C.bd,B.a([new B.ed(""+q+" por responder",C.hB,w),new B.ed(""+p+" "+t,C.dO,w)],x),C.r,C.bj,8,8),w),w,"Pedidos recebidos",C.hE,w,u,""+r)],x)
C.e.n(x,v.b_A(this.b,s))
return x},
$S:1501}
A.ceA.prototype={
$1(d){return d.at},
$S:41}
A.ceB.prototype={
$1(d){return d.y===C.mM&&!d.ax},
$S:41}
A.ceC.prototype={
$1(d){return d.ax&&d.y===C.tO},
$S:41};(function installTearOffs(){var x=a._instance_1u
x(A.afB.prototype,"gb7X","b7Y",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GT,B.eX)
x(A.EW,B.dA)
x(A.afB,B.dv)
w(B.bO,[A.cey,A.cev,A.ceE,A.ceD,A.ceH,A.cez])
w(B.bw,[A.cet,A.ceu,A.cew,A.cex,A.ceI,A.ceJ,A.ceF,A.ceA,A.ceB,A.ceC])
x(A.ceG,B.cL)})()
B.br(b.typeUniverse,JSON.parse('{"EW":{"G":[],"e":[],"f":[]},"afB":{"Y":["EW"]}}'))
var y={w:B.w("az<t<eI>>"),k:B.w("r<ek>"),x:B.w("r<c>"),u:B.w("r<e>"),A:B.w("dh"),q:B.w("J?")};(function constants(){var x=a.makeConstList
D.Jd=new A.GT(0,"recebidos")
D.abI=new A.GT(1,"confirmados")
D.abJ=new A.GT(2,"concluidos")
D.brX=x([D.Jd,D.abI,D.abJ],B.w("r<GT>"))
D.bva=x([C.a1P],y.u)
D.bM3=new B.Lk(C.a2_,null)
D.bPv=new B.eF(0,null,0,0,null,null,D.bM3,null)
D.c9D=new B.D("Pedidos",null,C.hP,null,null,null,null,null,null,null,null)
D.acV=new B.d0(C.be,null,null,D.c9D,null)
D.bXi=new B.c_(null,44,D.acV,null)})()};
(a=>{a["gpxSvta3VTsAJlje1fzdzbZfiFc="]=a.current})($__dart_deferred_initializers__);