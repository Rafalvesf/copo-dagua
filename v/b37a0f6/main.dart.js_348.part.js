((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
duV(d){return new A.F3(d,null)},
dCb(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dbG(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.pK||x===C.pL
case 1:x=d.y
return x===C.kq||x===C.fn
case 2:return d.y===C.i3}},
H2:function H2(d,e){this.a=d
this.b=e},
F3:function F3(d,e){this.d=d
this.a=e},
afU:function afU(){var _=this
_.d=_.w=$
_.c=_.a=null},
cfb:function cfb(d){this.a=d},
cfc:function cfc(d){this.a=d},
cf7:function cf7(d,e){this.a=d
this.b=e},
cf6:function cf6(d,e){this.a=d
this.b=e},
cfa:function cfa(){},
cf9:function cf9(d){this.a=d},
cf1:function cf1(d){this.a=d},
cf8:function cf8(d,e){this.a=d
this.b=e},
cf2:function cf2(){},
cf3:function cf3(){},
cf4:function cf4(){},
cf5:function cf5(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[190]
A=a.updateHolder(c[33],A)
D=c[353]
F=c[104]
A.H2.prototype={
I(){return"_BookingSegment."+this.b}}
A.F3.prototype={
R(){return new A.afU()}}
A.afU.prototype={
gaql(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.acE
break
case"concluidos":x=D.acF
break
default:x=D.JB
break}w=this.w=x}return w},
b9k(d){return A.dbG(d,this.gaql())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().H($.rT().$1(s),y.g),q=r.gv(r),p=new A.cfb(q==null?C.xL:q),o=B.ax(d,C.b7,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bt5[x]
v=A.dCb(w)
u=w===D.JB?p.$1(w):s
n.push(new B.el(v,t.gaql()===w,u,new A.cf7(t,w),s))}v=y.e
n=B.a([D.bYG,new E.md(n,16,!1,s)],v)
C.e.n(n,B.hG(r,new A.cf8(t,d),new A.cf9(t),new A.cfa(),!1,!0,!1))
return B.cQ(s,C.d2,new B.bB(C.ay,s,C.aE,C.z,B.a([B.cZ(n,s,new B.a2(20,o.r.b+12,20,140),s,s,!1,C.a2,!1),D.bQI],v),s),!0,s)}}
var z=a.updateTypes(["x(e3)","v(H2)"])
A.cfb.prototype={
$1(d){return J.da(this.a,new A.cfc(d)).gA(0)},
$S:z+1}
A.cfc.prototype={
$1(d){return A.dbG(d,this.a)},
$S:52}
A.cf7.prototype={
$0(){var x=this.a
return x.p(new A.cf6(x,this.b))},
$S:0}
A.cf6.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cfa.prototype={
$0(){return D.bwl},
$S:78}
A.cf9.prototype={
$2(d,e){return B.a([new B.jh("N\xe3o foi poss\xedvel carregar.",new A.cf1(this.a),null)],y.e)},
$S:1506}
A.cf1.prototype={
$0(){return this.a.gS().al($.rT().$1(null))},
$S:0}
A.cf8.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.cb(d),q=r.cX(d,this.a.gb9j()),p=B.U(q,q.$ti.i("B.E")),o=r.cX(d,new A.cf2()).gA(0),n=r.cX(d,new A.cf3()).gA(0),m=r.cX(d,new A.cf4()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.vm(new B.R(C.jJ,B.e1(C.bf,B.a([new B.ey(""+n+" por responder",C.hN,s),new B.ey(""+m+" "+q,C.ez,s)],x),C.r,C.bm,8,8),s),s,"Pedidos recebidos",C.hP,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aHI)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.H)(p),++u){t=p[u]
q.push(new F.a88(t,new A.cf5(v,t),!0,s))}return B.a([r,B.ff(q,16)],x)},
$S:1507}
A.cf2.prototype={
$1(d){return d.at},
$S:52}
A.cf3.prototype={
$1(d){return d.y===C.pK&&!d.ax},
$S:52}
A.cf4.prototype={
$1(d){return d.ax&&d.y===C.pL},
$S:52}
A.cf5.prototype={
$0(){var x=this.b
return B.ai(this.a).aw("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.afU.prototype,"gb9j","b9k",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.H2,B.f3)
x(A.F3,B.dA)
x(A.afU,B.du)
w(B.bw,[A.cfb,A.cfc,A.cf8,A.cf2,A.cf3,A.cf4])
w(B.bQ,[A.cf7,A.cf6,A.cfa,A.cf1,A.cf5])
x(A.cf9,B.cL)})()
B.bs(b.typeUniverse,JSON.parse('{"F3":{"G":[],"e":[],"f":[]},"afU":{"Y":["F3"]}}'))
var y={g:B.w("ay<t<e3>>"),k:B.w("r<el>"),e:B.w("r<e>"),h:B.w("di"),a:B.w("L?")};(function constants(){var x=a.makeConstList
D.aHI=new B.ia(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.JB=new A.H2(0,"recebidos")
D.acE=new A.H2(1,"confirmados")
D.acF=new A.H2(2,"concluidos")
D.bt5=x([D.JB,D.acE,D.acF],B.w("r<H2>"))
D.bwl=x([C.a2u],y.e)
D.bNh=new B.Lv(C.a2E,null)
D.bQI=new B.eM(0,null,0,0,null,null,D.bNh,null)
D.cbb=new B.D("Pedidos",null,C.hr,null,null,null,null,null,null,null,null)
D.adW=new B.d1(C.bg,null,null,D.cbb,null)
D.bYG=new B.c0(null,44,D.adW,null)})()};
(a=>{a["q/HjsAzFHYn94Lu6Yi0tSIX4mlA="]=a.current})($__dart_deferred_initializers__);