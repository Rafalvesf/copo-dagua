((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,A={
dtO(d){return new A.EY(d,null)},
dB3(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dax(d,e){var x
switch(e.a){case 0:x=d.y
return x===D.pt||x===D.pu
case 1:x=d.y
return x===D.ke||x===D.fl
case 2:return d.y===D.hX}},
GT:function GT(d,e){this.a=d
this.b=e},
EY:function EY(d,e){this.d=d
this.a=e},
afD:function afD(){var _=this
_.d=_.w=$
_.c=_.a=null},
cem:function cem(d){this.a=d},
cen:function cen(d){this.a=d},
cei:function cei(d,e){this.a=d
this.b=e},
ceh:function ceh(d,e){this.a=d
this.b=e},
cel:function cel(){},
cek:function cek(d){this.a=d},
cec:function cec(d){this.a=d},
cej:function cej(d,e){this.a=d
this.b=e},
ced:function ced(){},
cee:function cee(){},
cef:function cef(){},
ceg:function ceg(d,e){this.a=d
this.b=e}},C,F
J=c[1]
B=c[0]
D=c[2]
E=c[191]
A=a.updateHolder(c[33],A)
C=c[356]
F=c[104]
A.GT.prototype={
I(){return"_BookingSegment."+this.b}}
A.EY.prototype={
R(){return new A.afD()}}
A.afD.prototype={
gapC(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=C.abQ
break
case"concluidos":x=C.abR
break
default:x=C.Jf
break}w=this.w=x}return w},
b7W(d){return A.dax(d,this.gapC())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.qg().$1(s),y.g),q=r.gv(r),p=new A.cem(q==null?D.xt:q),o=B.aO(d,D.b5,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=C.bs5[x]
v=A.dB3(w)
u=w===C.Jf?p.$1(w):s
n.push(new B.ek(v,t.gapC()===w,u,new A.cei(t,w),s))}v=y.e
n=B.a([C.bXx,new E.mc(n,16,!1,s)],v)
D.e.n(n,B.hC(r,new A.cej(t,d),new A.cek(t),new A.cel(),!1,!0,!1))
return B.cP(s,D.d1,new B.bB(D.ax,s,D.aE,D.y,B.a([B.d5(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),C.bPG],v),s),!0,s)}}
var z=a.updateTypes(["y(dS)","v(GT)"])
A.cem.prototype={
$1(d){return J.da(this.a,new A.cen(d)).gA(0)},
$S:z+1}
A.cen.prototype={
$1(d){return A.dax(d,this.a)},
$S:50}
A.cei.prototype={
$0(){var x=this.a
return x.p(new A.ceh(x,this.b))},
$S:0}
A.ceh.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cel.prototype={
$0(){return C.bvk},
$S:84}
A.cek.prototype={
$2(d,e){return B.a([new B.jg("N\xe3o foi poss\xedvel carregar.",new A.cec(this.a),null)],y.e)},
$S:1495}
A.cec.prototype={
$0(){return this.a.gS().ak($.qg().$1(null))},
$S:0}
A.cej.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.c8(d),q=r.cS(d,this.a.gb7V()),p=B.U(q,q.$ti.i("B.E")),o=r.cS(d,new A.ced()).gA(0),n=r.cS(d,new A.cee()).gA(0),m=r.cS(d,new A.cef()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.vh(new B.S(D.jB,B.e0(D.be,B.a([new B.ev(""+n+" por responder",D.hG,s),new B.ev(""+m+" "+q,D.ez,s)],x),D.r,D.bl,8,8),s),s,"Pedidos recebidos",D.hI,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(C.aGJ)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.H)(p),++u){t=p[u]
q.push(new F.a7X(t,new A.ceg(v,t),!0,s))}return B.a([r,B.fd(q,16)],x)},
$S:1496}
A.ced.prototype={
$1(d){return d.at},
$S:50}
A.cee.prototype={
$1(d){return d.y===D.pt&&!d.ax},
$S:50}
A.cef.prototype={
$1(d){return d.ax&&d.y===D.pu},
$S:50}
A.ceg.prototype={
$0(){var x=this.b
return B.ah(this.a).au("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.afD.prototype,"gb7V","b7W",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GT,B.eW)
x(A.EY,B.dz)
x(A.afD,B.du)
w(B.bw,[A.cem,A.cen,A.cej,A.ced,A.cee,A.cef])
w(B.bP,[A.cei,A.ceh,A.cel,A.cec,A.ceg])
x(A.cek,B.cK)})()
B.bn(b.typeUniverse,JSON.parse('{"EY":{"G":[],"e":[],"f":[]},"afD":{"Y":["EY"]}}'))
var y={g:B.w("ay<t<dS>>"),k:B.w("r<ek>"),e:B.w("r<e>"),h:B.w("dg"),a:B.w("J?")};(function constants(){var x=a.makeConstList
C.aGJ=new B.i8(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
C.Jf=new A.GT(0,"recebidos")
C.abQ=new A.GT(1,"confirmados")
C.abR=new A.GT(2,"concluidos")
C.bs5=x([C.Jf,C.abQ,C.abR],B.w("r<GT>"))
C.bvk=x([D.a1Y],y.e)
C.bMf=new B.Lj(D.a27,null)
C.bPG=new B.eH(0,null,0,0,null,null,C.bMf,null)
C.ca3=new B.D("Pedidos",null,D.hm,null,null,null,null,null,null,null,null)
C.ad2=new B.d2(D.bf,null,null,C.ca3,null)
C.bXx=new B.c0(null,44,C.ad2,null)})()};
(a=>{a["HuwL38ZwmC2hBr5vy4gVf7GZdEI="]=a.current})($__dart_deferred_initializers__);