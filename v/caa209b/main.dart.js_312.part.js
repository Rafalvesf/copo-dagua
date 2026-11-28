((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dkS(d){return new A.Er(d,null)},
ds1(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
d2e(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.p7||x===C.p8
case 1:x=d.y
return x===C.mB||x===C.h9
case 2:return d.y===C.hM}},
Gn:function Gn(d,e){this.a=d
this.b=e},
Er:function Er(d,e){this.d=d
this.a=e},
adY:function adY(){var _=this
_.d=_.w=$
_.c=_.a=null},
c8l:function c8l(d){this.a=d},
c8m:function c8m(d){this.a=d},
c8h:function c8h(d,e){this.a=d
this.b=e},
c8g:function c8g(d,e){this.a=d
this.b=e},
c8k:function c8k(){},
c8j:function c8j(d){this.a=d},
c8b:function c8b(d){this.a=d},
c8i:function c8i(d,e){this.a=d
this.b=e},
c8c:function c8c(){},
c8d:function c8d(){},
c8e:function c8e(){},
c8f:function c8f(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[174]
A=a.updateHolder(c[31],A)
D=c[308]
F=c[98]
A.Gn.prototype={
I(){return"_BookingSegment."+this.b}}
A.Er.prototype={
R(){return new A.adY()}}
A.adY.prototype={
gaov(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.aaS
break
case"concluidos":x=D.aaT
break
default:x=D.Is
break}w=this.w=x}return w},
b6r(d){return A.d2e(d,this.gaov())},
v(d){var x,w,v,u,t=this,s=null,r=t.gT().F($.wb().$1(s),y.g),q=r.gu(r),p=new A.c8l(q==null?C.wZ:q),o=B.aw(d,C.b9,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bqq[x]
v=A.ds1(w)
u=w===D.Is?p.$1(w):s
n.push(new B.ed(v,t.gaov()===w,u,new A.c8h(t,w),s))}v=y.e
n=B.a([D.bUN,new E.lX(n,16,!1,s)],v)
C.e.p(n,B.h3(r,new A.c8i(t,d),new A.c8j(t),new A.c8k(),!1,!0,!1))
return B.cP(s,C.cO,new B.bK(C.aC,s,C.aH,C.z,B.a([B.d5(n,s,new B.a0(20,o.r.b+12,20,140),s,s,!1,C.a3,!1),D.bNq],v),s),!0,s)}}
var z=a.updateTypes(["z(el)","v(Gn)"])
A.c8l.prototype={
$1(d){return J.d7(this.a,new A.c8m(d)).gA(0)},
$S:z+1}
A.c8m.prototype={
$1(d){return A.d2e(d,this.a)},
$S:65}
A.c8h.prototype={
$0(){var x=this.a
return x.q(new A.c8g(x,this.b))},
$S:0}
A.c8g.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.c8k.prototype={
$0(){return D.bwO},
$S:73}
A.c8j.prototype={
$2(d,e){return B.a([new B.jb("N\xe3o foi poss\xedvel carregar.",new A.c8b(this.a),null)],y.e)},
$S:1472}
A.c8b.prototype={
$0(){return this.a.gT().ah($.wb().$1(null))},
$S:0}
A.c8i.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.c7(d),q=r.cH(d,this.a.gb6q()),p=B.V(q,q.$ti.i("y.E")),o=r.cH(d,new A.c8c()).gA(0),n=r.cH(d,new A.c8d()).gA(0),m=r.cH(d,new A.c8e()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.uZ(new B.R(C.ka,B.eo(C.bf,B.a([new B.eq(""+n+" por responder",C.hq,s),new B.eq(""+m+" "+q,C.el,s)],x),C.r,C.bp,8,8),s),s,"Pedidos recebidos",C.hs,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aFh)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.G)(p),++u){t=p[u]
q.push(new F.a6v(t,new A.c8f(v,t),!0,s))}return B.a([r,B.f5(q,16)],x)},
$S:1473}
A.c8c.prototype={
$1(d){return d.at},
$S:65}
A.c8d.prototype={
$1(d){return d.y===C.p7&&!d.ax},
$S:65}
A.c8e.prototype={
$1(d){return d.ax&&d.y===C.p8},
$S:65}
A.c8f.prototype={
$0(){var x=this.b
return B.aj(this.a).az("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.adY.prototype,"gb6q","b6r",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.Gn,B.fy)
x(A.Er,B.dD)
x(A.adY,B.dv)
w(B.bw,[A.c8l,A.c8m,A.c8i,A.c8c,A.c8d,A.c8e])
w(B.bR,[A.c8h,A.c8g,A.c8k,A.c8b,A.c8f])
x(A.c8j,B.cS)})()
B.bx(b.typeUniverse,JSON.parse('{"Er":{"I":[],"e":[],"f":[]},"adY":{"a1":["Er"]}}'))
var y={g:B.x("ax<r<el>>"),k:B.x("t<ed>"),e:B.x("t<e>"),h:B.x("dx"),a:B.x("L?")};(function constants(){var x=a.makeConstList
D.aFh=new B.i4(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.Is=new A.Gn(0,"recebidos")
D.aaS=new A.Gn(1,"confirmados")
D.aaT=new A.Gn(2,"concluidos")
D.bqq=x([D.Is,D.aaS,D.aaT],B.x("t<Gn>"))
D.bwO=x([C.r7],y.e)
D.bK3=new B.KF(C.a1c,null)
D.bNq=new B.f8(0,null,0,0,null,null,D.bK3,null)
D.c6u=new B.D("Pedidos",null,C.jR,null,null,null,null,null,null,null,null)
D.acb=new B.dg(C.bq,null,null,D.c6u,null)
D.bUN=new B.c5(null,44,D.acb,null)})()};
(a=>{a["evMFLibLZAwpset3Gx04A5qylGw="]=a.current})($__dart_deferred_initializers__);