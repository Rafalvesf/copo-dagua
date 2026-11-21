((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
ddd(d){return new A.DR(d,null)},
dkq(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
cVP(d,e){var x
switch(e.a){case 0:x=d.y
return x===D.oI||x===D.oJ
case 1:x=d.y
return x===D.mg||x===D.hZ
case 2:return d.y===D.jH}},
FL:function FL(d,e){this.a=d
this.b=e},
DR:function DR(d,e){this.d=d
this.a=e},
ad_:function ad_(){var _=this
_.d=_.w=$
_.c=_.a=null},
c37:function c37(d){this.a=d},
c38:function c38(d){this.a=d},
c33:function c33(d,e){this.a=d
this.b=e},
c32:function c32(d,e){this.a=d
this.b=e},
c36:function c36(){},
c35:function c35(d){this.a=d},
c2Y:function c2Y(d){this.a=d},
c34:function c34(d,e){this.a=d
this.b=e},
c2Z:function c2Z(){},
c3_:function c3_(){},
c30:function c30(){},
c31:function c31(d,e){this.a=d
this.b=e}},C,F,G,H,E
J=c[1]
B=c[0]
D=c[2]
A=a.updateHolder(c[30],A)
C=c[331]
F=c[170]
G=c[211]
H=c[98]
E=c[192]
A.FL.prototype={
H(){return"_BookingSegment."+this.b}}
A.DR.prototype={
R(){return new A.ad_()}}
A.ad_.prototype={
ganP(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=C.aak
break
case"concluidos":x=C.aal
break
default:x=C.I1
break}w=this.w=x}return w},
b55(d){return A.cVP(d,this.ganP())},
u(d){var x,w,v,u,t=this,s=null,r=t.gU().L($.vR().$1(s),y.g),q=r.gv(r),p=new A.c37(q==null?D.wP:q),o=B.au(d,D.bb,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=C.bpT[x]
v=A.dkq(w)
u=w===C.I1?p.$1(w):s
n.push(new E.e5(v,t.ganP()===w,u,new A.c33(t,w),s))}v=y.e
n=B.a([C.bTF,new E.lj(n,16,s)],v)
D.e.p(n,B.fN(r,new A.c34(t,d),new A.c35(t),new A.c36(),!1,!0,!1))
return B.cP(s,D.d4,new B.bN(D.aC,s,D.aF,D.z,B.a([B.d2(n,s,new B.a0(20,o.r.b+12,20,140),s,s,!1,D.a0,!1),C.bMz],v),s),!0,s)}}
var z=a.updateTypes(["z(ed)","v(FL)"])
A.c37.prototype={
$1(d){return J.dr(this.a,new A.c38(d)).gA(0)},
$S:z+1}
A.c38.prototype={
$1(d){return A.cVP(d,this.a)},
$S:63}
A.c33.prototype={
$0(){var x=this.a
return x.q(new A.c32(x,this.b))},
$S:0}
A.c32.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.c36.prototype={
$0(){return C.bwa},
$S:77}
A.c35.prototype={
$2(d,e){return B.a([new B.j4("N\xe3o foi poss\xedvel carregar.",new A.c2Y(this.a),null)],y.e)},
$S:1406}
A.c2Y.prototype={
$0(){return this.a.gU().al($.vR().$1(null))},
$S:0}
A.c34.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.cw(d),q=r.dj(d,this.a.gb54()),p=B.V(q,q.$ti.i("y.E")),o=r.dj(d,new A.c2Z()).gA(0),n=r.dj(d,new A.c3_()).gA(0),m=r.dj(d,new A.c30()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=F.Dn(new B.X(D.mN,B.ez(D.bk,B.a([new B.eW(""+n+" por responder",D.jd,s),new B.eW(""+m+" "+q,D.eA,s)],x),D.r,D.bH,8,8),s),s,"Pedidos recebidos",G.k7,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(C.aED)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.K)(p),++u){t=p[u]
q.push(new H.a5v(t,new A.c31(v,t),!0,s))}return B.a([r,B.hK(q,16)],x)},
$S:1407}
A.c2Z.prototype={
$1(d){return d.at},
$S:63}
A.c3_.prototype={
$1(d){return d.y===D.oI&&!d.ax},
$S:63}
A.c30.prototype={
$1(d){return d.ax&&d.y===D.oJ},
$S:63}
A.c31.prototype={
$0(){var x=this.b
return B.ar(this.a).aU("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.ad_.prototype,"gb54","b55",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.FL,B.fv)
x(A.DR,B.ds)
x(A.ad_,B.di)
w(B.bv,[A.c37,A.c38,A.c34,A.c2Z,A.c3_,A.c30])
w(B.bM,[A.c33,A.c32,A.c36,A.c2Y,A.c31])
x(A.c35,B.cM)})()
B.bt(b.typeUniverse,JSON.parse('{"DR":{"I":[],"e":[],"f":[]},"ad_":{"a1":["DR"]}}'))
var y={g:B.w("aE<t<ed>>"),k:B.w("r<e5>"),e:B.w("r<e>"),h:B.w("dk"),a:B.w("J?")};(function constants(){var x=a.makeConstList
C.aED=new B.iG(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
C.I1=new A.FL(0,"recebidos")
C.aak=new A.FL(1,"confirmados")
C.aal=new A.FL(2,"concluidos")
C.bpT=x([C.I1,C.aak,C.aal],B.w("r<FL>"))
C.bwa=x([D.qT],y.e)
C.bJd=new B.K8(D.a0K,null)
C.bMz=new B.fS(0,null,0,0,null,null,C.bJd,null)
C.c5r=new B.C("Pedidos",null,D.jw,null,null,null,null,null,null,null,null)
C.abI=new B.dI(D.bP,null,null,C.c5r,null)
C.bTF=new B.cd(null,44,C.abI,null)})()};
(a=>{a["TRhih1IecFIqCQuX/vFukKX8c6g="]=a.current})($__dart_deferred_initializers__);