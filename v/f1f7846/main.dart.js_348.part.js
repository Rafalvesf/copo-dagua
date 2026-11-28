((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dtW(d){return new A.F_(d,null)},
dBb(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
daI(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.pG||x===C.pH
case 1:x=d.y
return x===C.kp||x===C.fn
case 2:return d.y===C.i4}},
GX:function GX(d,e){this.a=d
this.b=e},
F_:function F_(d,e){this.d=d
this.a=e},
afC:function afC(){var _=this
_.d=_.w=$
_.c=_.a=null},
ceo:function ceo(d){this.a=d},
cep:function cep(d){this.a=d},
cek:function cek(d,e){this.a=d
this.b=e},
cej:function cej(d,e){this.a=d
this.b=e},
cen:function cen(){},
cem:function cem(d){this.a=d},
cee:function cee(d){this.a=d},
cel:function cel(d,e){this.a=d
this.b=e},
cef:function cef(){},
ceg:function ceg(){},
ceh:function ceh(){},
cei:function cei(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[188]
A=a.updateHolder(c[33],A)
D=c[352]
F=c[103]
A.GX.prototype={
I(){return"_BookingSegment."+this.b}}
A.F_.prototype={
R(){return new A.afC()}}
A.afC.prototype={
gapS(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.acE
break
case"concluidos":x=D.acF
break
default:x=D.JB
break}w=this.w=x}return w},
b8A(d){return A.daI(d,this.gapS())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().H($.rQ().$1(s),y.g),q=r.gv(r),p=new A.ceo(q==null?C.xI:q),o=B.ax(d,C.b4,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bt1[x]
v=A.dBb(w)
u=w===D.JB?p.$1(w):s
n.push(new B.el(v,t.gapS()===w,u,new A.cek(t,w),s))}v=y.e
n=B.a([D.bYC,new E.m4(n,16,!1,s)],v)
C.e.n(n,B.hq(r,new A.cel(t,d),new A.cem(t),new A.cen(),!1,!0,!1))
return B.cP(s,C.cY,new B.bD(C.aA,s,C.aG,C.z,B.a([B.d0(n,s,new B.a2(20,o.r.b+12,20,140),s,s,!1,C.a3,!1),D.bQE],v),s),!0,s)}}
var z=a.updateTypes(["y(e3)","v(GX)"])
A.ceo.prototype={
$1(d){return J.d7(this.a,new A.cep(d)).gA(0)},
$S:z+1}
A.cep.prototype={
$1(d){return A.daI(d,this.a)},
$S:49}
A.cek.prototype={
$0(){var x=this.a
return x.p(new A.cej(x,this.b))},
$S:0}
A.cej.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cen.prototype={
$0(){return D.bwg},
$S:75}
A.cem.prototype={
$2(d,e){return B.a([new B.jf("N\xe3o foi poss\xedvel carregar.",new A.cee(this.a),null)],y.e)},
$S:1506}
A.cee.prototype={
$0(){return this.a.gS().aj($.rQ().$1(null))},
$S:0}
A.cel.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.cb(d),q=r.cW(d,this.a.gb8z()),p=B.U(q,q.$ti.i("B.E")),o=r.cW(d,new A.cef()).gA(0),n=r.cW(d,new A.ceg()).gA(0),m=r.cW(d,new A.ceh()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.vi(new B.Q(C.jG,B.e1(C.bf,B.a([new B.ex(""+n+" por responder",C.hM,s),new B.ex(""+m+" "+q,C.ez,s)],x),C.r,C.bl,8,8),s),s,"Pedidos recebidos",C.hO,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aHE)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.H)(p),++u){t=p[u]
q.push(new F.a7S(t,new A.cei(v,t),!0,s))}return B.a([r,B.fc(q,16)],x)},
$S:1507}
A.cef.prototype={
$1(d){return d.at},
$S:49}
A.ceg.prototype={
$1(d){return d.y===C.pG&&!d.ax},
$S:49}
A.ceh.prototype={
$1(d){return d.ax&&d.y===C.pH},
$S:49}
A.cei.prototype={
$0(){var x=this.b
return B.ah(this.a).av("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.afC.prototype,"gb8z","b8A",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GX,B.f8)
x(A.F_,B.dD)
x(A.afC,B.dz)
w(B.bz,[A.ceo,A.cep,A.cel,A.cef,A.ceg,A.ceh])
w(B.bR,[A.cek,A.cej,A.cen,A.cee,A.cei])
x(A.cem,B.cN)})()
B.bq(b.typeUniverse,JSON.parse('{"F_":{"G":[],"e":[],"f":[]},"afC":{"Y":["F_"]}}'))
var y={g:B.w("ay<t<e3>>"),k:B.w("r<el>"),e:B.w("r<e>"),h:B.w("dg"),a:B.w("L?")};(function constants(){var x=a.makeConstList
D.aHE=new B.i8(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.JB=new A.GX(0,"recebidos")
D.acE=new A.GX(1,"confirmados")
D.acF=new A.GX(2,"concluidos")
D.bt1=x([D.JB,D.acE,D.acF],B.w("r<GX>"))
D.bwg=x([C.a2w],y.e)
D.bNd=new B.Ln(C.a2G,null)
D.bQE=new B.eM(0,null,0,0,null,null,D.bNd,null)
D.cb8=new B.D("Pedidos",null,C.hn,null,null,null,null,null,null,null,null)
D.adX=new B.cZ(C.bg,null,null,D.cb8,null)
D.bYC=new B.c0(null,44,D.adX,null)})()};
(a=>{a["+vGTQqq7PBgkqw2waIx3fapyiZo="]=a.current})($__dart_deferred_initializers__);