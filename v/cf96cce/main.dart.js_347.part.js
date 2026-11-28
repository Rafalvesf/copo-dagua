((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dsf(d){return new A.EY(d,null)},
dzu(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
d92(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.pD||x===C.pE
case 1:x=d.y
return x===C.kk||x===C.fl
case 2:return d.y===C.i0}},
GV:function GV(d,e){this.a=d
this.b=e},
EY:function EY(d,e){this.d=d
this.a=e},
afw:function afw(){var _=this
_.d=_.w=$
_.c=_.a=null},
cdt:function cdt(d){this.a=d},
cdu:function cdu(d){this.a=d},
cdp:function cdp(d,e){this.a=d
this.b=e},
cdo:function cdo(d,e){this.a=d
this.b=e},
cds:function cds(){},
cdr:function cdr(d){this.a=d},
cdj:function cdj(d){this.a=d},
cdq:function cdq(d,e){this.a=d
this.b=e},
cdk:function cdk(){},
cdl:function cdl(){},
cdm:function cdm(){},
cdn:function cdn(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[188]
A=a.updateHolder(c[33],A)
D=c[349]
F=c[104]
A.GV.prototype={
I(){return"_BookingSegment."+this.b}}
A.EY.prototype={
P(){return new A.afw()}}
A.afw.prototype={
gapA(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.acp
break
case"concluidos":x=D.acq
break
default:x=D.Jw
break}w=this.w=x}return w},
b8g(d){return A.d92(d,this.gapA())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().H($.rL().$1(s),y.g),q=r.gv(r),p=new A.cdt(q==null?C.xE:q),o=B.aw(d,C.b4,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bsQ[x]
v=A.dzu(w)
u=w===D.Jw?p.$1(w):s
n.push(new B.el(v,t.gapA()===w,u,new A.cdp(t,w),s))}v=y.e
n=B.a([D.bYo,new E.m4(n,16,!1,s)],v)
C.e.n(n,B.hp(r,new A.cdq(t,d),new A.cdr(t),new A.cds(),!1,!0,!1))
return B.cP(s,C.cT,new B.bE(C.aB,s,C.aH,C.z,B.a([B.d0(n,s,new B.a0(20,o.r.b+12,20,140),s,s,!1,C.a2,!1),D.bQs],v),s),!0,s)}}
var z=a.updateTypes(["x(e1)","v(GV)"])
A.cdt.prototype={
$1(d){return J.d4(this.a,new A.cdu(d)).gA(0)},
$S:z+1}
A.cdu.prototype={
$1(d){return A.d92(d,this.a)},
$S:51}
A.cdp.prototype={
$0(){var x=this.a
return x.p(new A.cdo(x,this.b))},
$S:0}
A.cdo.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cds.prototype={
$0(){return D.bw4},
$S:82}
A.cdr.prototype={
$2(d,e){return B.a([new B.jf("N\xe3o foi poss\xedvel carregar.",new A.cdj(this.a),null)],y.e)},
$S:1500}
A.cdj.prototype={
$0(){return this.a.gS().ak($.rL().$1(null))},
$S:0}
A.cdq.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.cb(d),q=r.cI(d,this.a.gb8f()),p=B.U(q,q.$ti.i("z.E")),o=r.cI(d,new A.cdk()).gA(0),n=r.cI(d,new A.cdl()).gA(0),m=r.cI(d,new A.cdm()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.vd(new B.Q(C.kx,B.e7(C.bf,B.a([new B.ex(""+n+" por responder",C.hH,s),new B.ex(""+m+" "+q,C.ey,s)],x),C.r,C.bl,8,8),s),s,"Pedidos recebidos",C.hJ,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aHt)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.K)(p),++u){t=p[u]
q.push(new F.a7P(t,new A.cdn(v,t),!0,s))}return B.a([r,B.fc(q,16)],x)},
$S:1501}
A.cdk.prototype={
$1(d){return d.at},
$S:51}
A.cdl.prototype={
$1(d){return d.y===C.pD&&!d.ax},
$S:51}
A.cdm.prototype={
$1(d){return d.ax&&d.y===C.pE},
$S:51}
A.cdn.prototype={
$0(){var x=this.b
return B.ai(this.a).au("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.afw.prototype,"gb8f","b8g",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GV,B.f7)
x(A.EY,B.dC)
x(A.afw,B.dy)
w(B.bw,[A.cdt,A.cdu,A.cdq,A.cdk,A.cdl,A.cdm])
w(B.bQ,[A.cdp,A.cdo,A.cds,A.cdj,A.cdn])
x(A.cdr,B.cO)})()
B.bn(b.typeUniverse,JSON.parse('{"EY":{"G":[],"e":[],"f":[]},"afw":{"Z":["EY"]}}'))
var y={g:B.w("ay<t<e1>>"),k:B.w("r<el>"),e:B.w("r<e>"),h:B.w("df"),a:B.w("J?")};(function constants(){var x=a.makeConstList
D.aHt=new B.i9(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.Jw=new A.GV(0,"recebidos")
D.acp=new A.GV(1,"confirmados")
D.acq=new A.GV(2,"concluidos")
D.bsQ=x([D.Jw,D.acp,D.acq],B.w("r<GV>"))
D.bw4=x([C.a2m],y.e)
D.bN1=new B.Li(C.a2w,null)
D.bQs=new B.f_(0,null,0,0,null,null,D.bN1,null)
D.caT=new B.C("Pedidos",null,C.hj,null,null,null,null,null,null,null,null)
D.adI=new B.d1(C.bg,null,null,D.caT,null)
D.bYo=new B.c1(null,44,D.adI,null)})()};
(a=>{a["Sjb4gQfHAsuzDlc82cwXoRmPMrU="]=a.current})($__dart_deferred_initializers__);