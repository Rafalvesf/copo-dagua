((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dtx(d){return new A.EX(d,null)},
dAN(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dah(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.pt||x===C.pu
case 1:x=d.y
return x===C.ke||x===C.fk
case 2:return d.y===C.hX}},
GT:function GT(d,e){this.a=d
this.b=e},
EX:function EX(d,e){this.d=d
this.a=e},
afC:function afC(){var _=this
_.d=_.w=$
_.c=_.a=null},
ce9:function ce9(d){this.a=d},
cea:function cea(d){this.a=d},
ce5:function ce5(d,e){this.a=d
this.b=e},
ce4:function ce4(d,e){this.a=d
this.b=e},
ce8:function ce8(){},
ce7:function ce7(d){this.a=d},
ce_:function ce_(d){this.a=d},
ce6:function ce6(d,e){this.a=d
this.b=e},
ce0:function ce0(){},
ce1:function ce1(){},
ce2:function ce2(){},
ce3:function ce3(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[192]
A=a.updateHolder(c[33],A)
D=c[357]
F=c[104]
A.GT.prototype={
I(){return"_BookingSegment."+this.b}}
A.EX.prototype={
R(){return new A.afC()}}
A.afC.prototype={
gapC(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abP
break
case"concluidos":x=D.abQ
break
default:x=D.Je
break}w=this.w=x}return w},
b7V(d){return A.dah(d,this.gapC())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.qg().$1(s),y.g),q=r.gv(r),p=new A.ce9(q==null?C.xt:q),o=B.aO(d,C.b5,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bs5[x]
v=A.dAN(w)
u=w===D.Je?p.$1(w):s
n.push(new B.ek(v,t.gapC()===w,u,new A.ce5(t,w),s))}v=y.e
n=B.a([D.bXx,new E.mc(n,16,!1,s)],v)
C.e.n(n,B.hC(r,new A.ce6(t,d),new A.ce7(t),new A.ce8(),!1,!0,!1))
return B.cP(s,C.d1,new B.bB(C.ax,s,C.aE,C.y,B.a([B.d_(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,C.a1,!1),D.bPG],v),s),!0,s)}}
var z=a.updateTypes(["y(dS)","v(GT)"])
A.ce9.prototype={
$1(d){return J.da(this.a,new A.cea(d)).gA(0)},
$S:z+1}
A.cea.prototype={
$1(d){return A.dah(d,this.a)},
$S:50}
A.ce5.prototype={
$0(){var x=this.a
return x.p(new A.ce4(x,this.b))},
$S:0}
A.ce4.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ce8.prototype={
$0(){return D.bvk},
$S:80}
A.ce7.prototype={
$2(d,e){return B.a([new B.jg("N\xe3o foi poss\xedvel carregar.",new A.ce_(this.a),null)],y.e)},
$S:1492}
A.ce_.prototype={
$0(){return this.a.gS().ak($.qg().$1(null))},
$S:0}
A.ce6.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.c8(d),q=r.cS(d,this.a.gb7U()),p=B.U(q,q.$ti.i("B.E")),o=r.cS(d,new A.ce0()).gA(0),n=r.cS(d,new A.ce1()).gA(0),m=r.cS(d,new A.ce2()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.vg(new B.S(C.jB,B.e0(C.be,B.a([new B.ev(""+n+" por responder",C.hG,s),new B.ev(""+m+" "+q,C.ez,s)],x),C.r,C.bl,8,8),s),s,"Pedidos recebidos",C.hI,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aGJ)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.H)(p),++u){t=p[u]
q.push(new F.a7W(t,new A.ce3(v,t),!0,s))}return B.a([r,B.fd(q,16)],x)},
$S:1493}
A.ce0.prototype={
$1(d){return d.at},
$S:50}
A.ce1.prototype={
$1(d){return d.y===C.pt&&!d.ax},
$S:50}
A.ce2.prototype={
$1(d){return d.ax&&d.y===C.pu},
$S:50}
A.ce3.prototype={
$0(){var x=this.b
return B.ah(this.a).au("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.afC.prototype,"gb7U","b7V",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GT,B.eW)
x(A.EX,B.dz)
x(A.afC,B.du)
w(B.bu,[A.ce9,A.cea,A.ce6,A.ce0,A.ce1,A.ce2])
w(B.bP,[A.ce5,A.ce4,A.ce8,A.ce_,A.ce3])
x(A.ce7,B.cK)})()
B.bn(b.typeUniverse,JSON.parse('{"EX":{"G":[],"e":[],"f":[]},"afC":{"Y":["EX"]}}'))
var y={g:B.w("ay<t<dS>>"),k:B.w("r<ek>"),e:B.w("r<e>"),h:B.w("dg"),a:B.w("J?")};(function constants(){var x=a.makeConstList
D.aGJ=new B.i8(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.Je=new A.GT(0,"recebidos")
D.abP=new A.GT(1,"confirmados")
D.abQ=new A.GT(2,"concluidos")
D.bs5=x([D.Je,D.abP,D.abQ],B.w("r<GT>"))
D.bvk=x([C.a1W],y.e)
D.bMf=new B.Lj(C.a25,null)
D.bPG=new B.eH(0,null,0,0,null,null,D.bMf,null)
D.ca3=new B.D("Pedidos",null,C.hm,null,null,null,null,null,null,null,null)
D.ad1=new B.d3(C.bf,null,null,D.ca3,null)
D.bXx=new B.c_(null,44,D.ad1,null)})()};
(a=>{a["6aCmZ8+GnhAzTYADRZPkaruwz80="]=a.current})($__dart_deferred_initializers__);