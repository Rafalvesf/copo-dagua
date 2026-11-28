((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dv8(d){return new A.F3(d,null)},
dCp(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dbU(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.pK||x===C.pL
case 1:x=d.y
return x===C.kq||x===C.fn
case 2:return d.y===C.i3}},
H2:function H2(d,e){this.a=d
this.b=e},
F3:function F3(d,e){this.d=d
this.a=e},
afZ:function afZ(){var _=this
_.d=_.w=$
_.c=_.a=null},
cfl:function cfl(d){this.a=d},
cfm:function cfm(d){this.a=d},
cfh:function cfh(d,e){this.a=d
this.b=e},
cfg:function cfg(d,e){this.a=d
this.b=e},
cfk:function cfk(){},
cfj:function cfj(d){this.a=d},
cfb:function cfb(d){this.a=d},
cfi:function cfi(d,e){this.a=d
this.b=e},
cfc:function cfc(){},
cfd:function cfd(){},
cfe:function cfe(){},
cff:function cff(d,e){this.a=d
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
P(){return new A.afZ()}}
A.afZ.prototype={
gaqo(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.acF
break
case"concluidos":x=D.acG
break
default:x=D.JB
break}w=this.w=x}return w},
b9n(d){return A.dbU(d,this.gaqo())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().H($.qp().$1(s),y.g),q=r.gv(r),p=new A.cfl(q==null?C.xM:q),o=B.ax(d,C.b7,y.h).w,n=B.a([],y.k)
for(x=0;x<3;++x){w=D.bt9[x]
v=A.dCp(w)
u=w===D.JB?p.$1(w):s
n.push(new B.em(v,t.gaqo()===w,u,new A.cfh(t,w),s))}v=y.e
n=B.a([D.bYK,new E.me(n,16,!1,s)],v)
C.e.n(n,B.hG(r,new A.cfi(t,d),new A.cfj(t),new A.cfk(),!1,!0,!1))
return B.cQ(s,C.d2,new B.bB(C.az,s,C.aF,C.z,B.a([B.cZ(n,s,new B.a2(20,o.r.b+12,20,140),s,s,!1,C.a2,!1),D.bQM],v),s),!0,s)}}
var z=a.updateTypes(["y(dV)","v(H2)"])
A.cfl.prototype={
$1(d){return J.da(this.a,new A.cfm(d)).gA(0)},
$S:z+1}
A.cfm.prototype={
$1(d){return A.dbU(d,this.a)},
$S:53}
A.cfh.prototype={
$0(){var x=this.a
return x.p(new A.cfg(x,this.b))},
$S:0}
A.cfg.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cfk.prototype={
$0(){return D.bwp},
$S:80}
A.cfj.prototype={
$2(d,e){return B.a([new B.jh("N\xe3o foi poss\xedvel carregar.",new A.cfb(this.a),null)],y.e)},
$S:1506}
A.cfb.prototype={
$0(){return this.a.gS().al($.qp().$1(null))},
$S:0}
A.cfi.prototype={
$1(d){var x,w,v,u,t,s=null,r=J.cb(d),q=r.cX(d,this.a.gb9m()),p=B.U(q,q.$ti.i("B.E")),o=r.cX(d,new A.cfc()).gA(0),n=r.cX(d,new A.cfd()).gA(0),m=r.cX(d,new A.cfe()).gA(0)
r=o===1?"pedido no total":"pedidos no total"
q=m===1?"proposta enviada":"propostas enviadas"
x=y.e
r=B.vm(new B.R(C.jJ,B.e2(C.bf,B.a([new B.ey(""+n+" por responder",C.hM,s),new B.ey(""+m+" "+q,C.ez,s)],x),C.r,C.bm,8,8),s),s,"Pedidos recebidos",C.hO,s,r,""+o)
q=B.a([],x)
w=p.length
if(w===0)q.push(D.aHM)
else for(v=this.b,u=0;u<p.length;p.length===w||(0,B.H)(p),++u){t=p[u]
q.push(new F.a8c(t,new A.cff(v,t),!0,s))}return B.a([r,B.ff(q,16)],x)},
$S:1507}
A.cfc.prototype={
$1(d){return d.at},
$S:53}
A.cfd.prototype={
$1(d){return d.y===C.pK&&!d.ax},
$S:53}
A.cfe.prototype={
$1(d){return d.ax&&d.y===C.pL},
$S:53}
A.cff.prototype={
$0(){var x=this.b
return B.ai(this.a).aw("/partner-requests/"+x.a,x,y.a)},
$S:0};(function installTearOffs(){var x=a._instance_1u
x(A.afZ.prototype,"gb9m","b9n",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.H2,B.f3)
x(A.F3,B.dA)
x(A.afZ,B.du)
w(B.bw,[A.cfl,A.cfm,A.cfi,A.cfc,A.cfd,A.cfe])
w(B.bQ,[A.cfh,A.cfg,A.cfk,A.cfb,A.cff])
x(A.cfj,B.cL)})()
B.bs(b.typeUniverse,JSON.parse('{"F3":{"G":[],"e":[],"f":[]},"afZ":{"Y":["F3"]}}'))
var y={g:B.w("az<t<dV>>"),k:B.w("r<em>"),e:B.w("r<e>"),h:B.w("di"),a:B.w("L?")};(function constants(){var x=a.makeConstList
D.aHM=new B.ia(null,"Sem pedidos aqui","Muda o filtro em cima para ver os outros.",null,!1,null,!1,null)
D.JB=new A.H2(0,"recebidos")
D.acF=new A.H2(1,"confirmados")
D.acG=new A.H2(2,"concluidos")
D.bt9=x([D.JB,D.acF,D.acG],B.w("r<H2>"))
D.bwp=x([C.a2v],y.e)
D.bNl=new B.Lv(C.a2F,null)
D.bQM=new B.eM(0,null,0,0,null,null,D.bNl,null)
D.cbg=new B.D("Pedidos",null,C.hq,null,null,null,null,null,null,null,null)
D.adX=new B.d1(C.bg,null,null,D.cbg,null)
D.bYK=new B.c0(null,44,D.adX,null)})()};
(a=>{a["AtdCFM0rO+2EgE9868mMzR377gc="]=a.current})($__dart_deferred_initializers__);