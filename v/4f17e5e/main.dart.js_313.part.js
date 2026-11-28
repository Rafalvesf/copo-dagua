((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dkW(d){return new A.Et(d,null)},
ds6(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
d2i(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.p7||x===C.p8
case 1:x=d.y
return x===C.mz||x===C.h8
case 2:return d.y===C.hM}},
Gp:function Gp(d,e){this.a=d
this.b=e},
Et:function Et(d,e){this.d=d
this.a=e},
adZ:function adZ(){var _=this
_.d=_.w=$
_.c=_.a=null},
c8o:function c8o(d){this.a=d},
c8p:function c8p(d){this.a=d},
c8k:function c8k(d,e){this.a=d
this.b=e},
c8j:function c8j(d,e){this.a=d
this.b=e},
c8n:function c8n(){},
c8m:function c8m(d){this.a=d},
c8e:function c8e(d){this.a=d},
c8l:function c8l(d,e){this.a=d
this.b=e},
c8f:function c8f(){},
c8g:function c8g(){},
c8h:function c8h(){},
c8i:function c8i(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[175]
A=a.updateHolder(c[31],A)
D=c[308]
F=c[99]
A.Gp.prototype={
I(){return"_BookingSegment."+this.b}}
A.Et.prototype={
R(){return new A.adZ()}}
A.adZ.prototype={
gaot(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.aaS
break
case"concluidos":x=D.aaT
break
default:x=D.It
break}w=this.w=x}return w},
b6p(d){return A.d2i(d,this.gaot())},
u(d){var x,w,v,u,t=this,s=null,r=t.gT().G($.wb().$1(s),y.g),q=r.gv(r),p=new A.c8o(q==null?C.wZ:q),o=B.aw(d,C.b7,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bqu[x]
v=A.ds6(w)
u=w===D.It?p.$1(w):s
n.push(new B.ee(v,t.gaot()===w,u,new A.c8k(t,w),s))}v=y.e
n=B.a([D.bUS,new E.lY(n,16,!1,s)],v)
C.e.p(n,B.h3(r,new A.c8l(t,d),new A.c8m(t),new A.c8n(),!1,!0,!1))
return B.cP(s,C.cO,new B.bK(C.aC,s,C.aH,C.z,B.a([B.d5(n,s,new B.a0(20,o.r.b+12,20,140),s,s,!1,C.a3,!1),D.bNu],v),s),!0,s)}}
var z=a.updateTypes(["z(en)","v(Gp)"])
A.c8o.prototype={
$1(d){return J.d7(this.a,new A.c8p(d)).gA(0)},
$S:z+1}
A.c8p.prototype={
$1(d){return A.d2i(d,this.a)},
$S:65}
A.c8k.prototype={
$0(){var x=this.a
return x.q(new A.c8j(x,this.b))},
$S:0}
A.c8j.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.c8n.prototype={
$0(){return D.bwT},
$S:73}
A.c8m.prototype={
$2(d,e){return B.a([new B.jb("N\xe3o foi poss\xedvel carregar.",new A.c8e(this.a),null)],y.e)},
$S:1472}
A.c8e.prototype={
$0(){return this.a.gT().ah($.wb().$1(null))},
$S:0}
A.c8l.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.c9(d),q=r.cH(d,this.a.gb6o()),p=B.W(q,q.$ti.i("y.E")),o=r.cH(d,new A.c8f()).gA(0),n=r.cH(d,new A.c8g()).gA(0),m=r.cH(d,new A.c8h()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.uZ(new B.S(C.kc,B.em(C.be,B.a([new B.ep(""+n+" por responder",C.hq,s),new B.ep(""+m+" "+q,C.el,s)],x),C.r,C.bm,8,8),s),s,"Pedidos recebidos",C.hs,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aFj)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.G)(p),++u){t=p[u]
q.push(new F.a6w(t,new A.c8i(v,t),!0,s))}return B.a([r,B.f4(q,16)],x)},
$S:1473}
A.c8f.prototype={
$1(d){return d.at},
$S:65}
A.c8g.prototype={
$1(d){return d.y===C.p7&&!d.ax},
$S:65}
A.c8h.prototype={
$1(d){return d.ax&&d.y===C.p8},
$S:65}
A.c8i.prototype={
$0(){var x=this.b
return B.aj(this.a).az("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.adZ.prototype,"gb6o","b6p",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.Gp,B.fx)
x(A.Et,B.dD)
x(A.adZ,B.dv)
w(B.bx,[A.c8o,A.c8p,A.c8l,A.c8f,A.c8g,A.c8h])
w(B.bR,[A.c8k,A.c8j,A.c8n,A.c8e,A.c8i])
x(A.c8m,B.cS)})()
B.bw(b.typeUniverse,JSON.parse('{"Et":{"I":[],"e":[],"f":[]},"adZ":{"a1":["Et"]}}'))
var y={g:B.x("ax<r<en>>"),k:B.x("t<ee>"),e:B.x("t<e>"),h:B.x("dx"),a:B.x("L?")};(function constants(){var x=a.makeConstList
D.aFj=new B.i4(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.It=new A.Gp(0,"recebidos")
D.aaS=new A.Gp(1,"confirmados")
D.aaT=new A.Gp(2,"concluidos")
D.bqu=x([D.It,D.aaS,D.aaT],B.x("t<Gp>"))
D.bwT=x([C.r7],y.e)
D.bK7=new B.KG(C.a1c,null)
D.bNu=new B.f7(0,null,0,0,null,null,D.bK7,null)
D.c6z=new B.D("Pedidos",null,C.jR,null,null,null,null,null,null,null,null)
D.acb=new B.dg(C.bq,null,null,D.c6z,null)
D.bUS=new B.c7(null,44,D.acb,null)})()};
(a=>{a["JX4nPMk8EKuYrI24uZEy+IIhhGw="]=a.current})($__dart_deferred_initializers__);