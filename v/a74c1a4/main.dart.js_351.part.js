((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dth(d){return new A.EM(d,null)},
d9U(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
d9T(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mA||x===C.tw
case 1:x=d.y
return x===C.jn||x===C.eO
case 2:return d.y===C.hj}},
GL:function GL(d,e){this.a=d
this.b=e},
cEG:function cEG(){},
EM:function EM(d,e){this.d=d
this.a=e},
af6:function af6(){var _=this
_.d=_.w=$
_.c=_.a=null},
cdk:function cdk(d,e,f){this.a=d
this.b=e
this.c=f},
cdd:function cdd(d){this.a=d},
cde:function cde(d,e,f){this.a=d
this.b=e
this.c=f},
cdf:function cdf(){},
cdg:function cdg(){},
cdh:function cdh(d,e,f){this.a=d
this.b=e
this.c=f},
cdi:function cdi(){},
cdj:function cdj(){},
cdu:function cdu(d){this.a=d},
cdv:function cdv(d){this.a=d},
cdq:function cdq(d,e){this.a=d
this.b=e},
cdp:function cdp(d,e){this.a=d
this.b=e},
cdt:function cdt(){},
cds:function cds(d){this.a=d},
cdl:function cdl(d){this.a=d},
cdr:function cdr(d,e){this.a=d
this.b=e},
cdm:function cdm(){},
cdn:function cdn(){},
cdo:function cdo(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[183]
A=a.updateHolder(c[33],A)
D=c[347]
F=c[104]
A.GL.prototype={
I(){return"_BookingSegment."+this.b}}
A.EM.prototype={
S(){return new A.af6()}}
A.af6.prototype={
TY(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.G)(f),++w){v=f[w]
u.push(new F.UV(v,new A.cdk(this,e,v),!0,null))}return B.eR(u,0)},
aSX(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gR(),l=m.G($.djU(),y.w),k=l.gv(l)
if(k==null)k=C.lJ
m=m.G($.p5().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.qI
w=B.a([],y.p)
for(m=J.an(k),l=J.c8(x);m.q();){v=m.gE(m)
u=J.a7(v)
t=u.h(v,"booking_id")
s=B.eK(l.cb(x,new A.cdd(B.B(t==null?u.h(v,"quote_request_id"):t))))
if(s==null)continue
switch(u.h(v,"kind")){case"people":t="Pessoas"
break
case"time":t="Hora"
break
case"scope":t="O que inclui"
break
case"date":t="Outro dia"
break
default:t="Outra coisa"
break}r=B.B(u.h(v,"from_value"))
q=r==null?n:C.f.B(r)
if(q==null)q=""
v=B.B(u.h(v,"to_value"))
p=v==null?n:C.f.B(v)
if(p==null)p=""
v=s.d
u=s.as
r=s.Q
t+=": "
t=q.length===0?t+p:t+q+" \u2192 "+p
o=s.f
w.push(new B.t8(new B.cf(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.cde(this,d,s),C.j.aO(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c1("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
aZw(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzE()===D.zv?h.aSX(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.d9U(h.gzE())
switch(h.gzE().a){case 0:w="Sem pedidos por tratar"
break
case 1:w="Ainda sem reservas confirmadas"
break
case 2:w="Ainda sem eventos conclu\xeddos"
break
default:w=g}switch(h.gzE().a){case 0:v="Os pedidos de or\xe7amento e de reserva aparecem aqui."
break
case 1:v="As reservas aceites e pagas aparecem aqui."
break
case 2:v="Os eventos que j\xe1 fizeste aparecem aqui."
break
default:v=g}u=y.p
return B.a([new B.c1(x,g,B.a([B.Jz(C.ez,C.eR,v,w)],u),16,g)],u)}switch(h.gzE().a){case 0:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
t=B.U(new B.a6(e,new A.cdf(),x),w)
s=B.U(new B.a6(e,new A.cdg(),x),w)
x=y.p
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.s,p=0;p<t.length;t.length===r||(0,B.G)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.aD(m)+" "+C.bg[B.av(m)-1]+" "+B.aL(m)],q)
k=o.CW
if(k!=null)l.push(B.p(k)+" pessoas")
u.push(new B.t8(new B.cf(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a0(l," \xb7 "),"Responder",new A.cdh(h,d,o),C.j.aO(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c1("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c1("Proposta enviada \xb7 "+v,g,B.a([h.TY(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
j=B.U(new B.a6(e,new A.cdi(),x),w)
i=B.U(new B.a6(e,new A.cdj(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c1("\xc0 espera do sinal \xb7 "+v,g,B.a([h.TY(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c1("Confirmadas \xb7 "+v,g,B.a([h.TY(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c1("Conclu\xeddos \xb7 "+e.length,g,B.a([h.TY(0,d,e)],x),16,g)],x)}},
gzE(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abs
break
case"concluidos":x=D.abt
break
default:x=D.zv
break}w=this.w=x}return w},
b6l(d){return A.d9T(d,this.gzE())},
u(d){var x,w,v,u,t=this,s=null,r=t.gR().G($.p5().$1(s),y.T),q=r.gv(r),p=new A.cdu(q==null?C.qI:q),o=B.aR(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.brJ[x]
v=A.d9U(w)
u=w===D.zv?p.$1(w):s
n.push(new B.ei(v,t.gzE()===w,u,new A.cdq(t,w),s))}v=y.p
n=B.a([D.bWG,new E.m9(n,16,!1,s)],v)
C.e.n(n,B.hC(r,new A.cdr(t,d),new A.cds(t),new A.cdt(),!1,!0,!1))
return B.cO(s,C.cR,new B.bC(C.aw,s,C.aC,C.y,B.a([B.d4(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPa],v),s),!0,s)}}
var z=a.updateTypes(["C(eI)","v(GL)"])
A.cEG.prototype={
$1(d){return this.aEl(d)},
aEl(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&B.b()
x=7
return B.d(p.P("booking_change_requests").ai(0,"id, booking_id, quote_request_id, kind, from_value, to_value, created_at").U("status","open").Bl("requested_by_role","partner").cJ(0,"created_at",!1),$async$$1)
case 7:s=f
r=B.a([],y.t)
for(p=J.an(s),o=y.f,n=y.N,m=y.z;p.q();){q=p.gE(p)
J.bp(r,B.dX(o.a(q),n,m))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
v=C.lJ
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1508}
A.cdk.prototype={
$0(){var x=this.c
return B.ac(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdd.prototype={
$1(d){return d.a===this.a},
$S:34}
A.cde.prototype={
$0(){var x=this.c
return B.ac(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdf.prototype={
$1(d){return!d.ax},
$S:34}
A.cdg.prototype={
$1(d){return d.ax},
$S:34}
A.cdh.prototype={
$0(){var x=this.c
return B.ac(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdi.prototype={
$1(d){return d.y===C.jn},
$S:34}
A.cdj.prototype={
$1(d){return d.y===C.eO},
$S:34}
A.cdu.prototype={
$1(d){return J.da(this.a,new A.cdv(d)).gA(0)},
$S:z+1}
A.cdv.prototype={
$1(d){return A.d9T(d,this.a)},
$S:34}
A.cdq.prototype={
$0(){var x=this.a
return x.p(new A.cdp(x,this.b))},
$S:0}
A.cdp.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cdt.prototype={
$0(){return D.buX},
$S:76}
A.cds.prototype={
$2(d,e){return B.a([new B.jf("N\xe3o foi poss\xedvel carregar.",new A.cdl(this.a),null)],y.p)},
$S:1509}
A.cdl.prototype={
$0(){return this.a.gR().aj($.p5().$1(null))},
$S:0}
A.cdr.prototype={
$1(d){var x,w=null,v=this.a,u=J.c8(d),t=u.cb(d,v.gb6k()),s=B.U(t,t.$ti.i("w.E")),r=u.cb(d,new A.cdm()).gA(0),q=u.cb(d,new A.cdn()).gA(0),p=u.cb(d,new A.cdo()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vg(new B.S(C.jz,B.e_(C.be,B.a([new B.dT(""+q+" por responder",C.hA,w),new B.dT(""+p+" "+t,C.dc,w)],x),C.r,C.bk,8,8),w),w,"Pedidos recebidos",C.hC,w,u,""+r)],x)
C.e.n(x,v.aZw(this.b,s))
return x},
$S:1510}
A.cdm.prototype={
$1(d){return d.at},
$S:34}
A.cdn.prototype={
$1(d){return d.y===C.mA&&!d.ax},
$S:34}
A.cdo.prototype={
$1(d){return d.ax&&d.y===C.tw},
$S:34};(function installTearOffs(){var x=a._instance_1u
x(A.af6.prototype,"gb6k","b6l",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GL,B.ff)
w(B.bv,[A.cEG,A.cdd,A.cdf,A.cdg,A.cdi,A.cdj,A.cdu,A.cdv,A.cdr,A.cdm,A.cdn,A.cdo])
x(A.EM,B.dA)
x(A.af6,B.dv)
w(B.bN,[A.cdk,A.cde,A.cdh,A.cdq,A.cdp,A.cdt,A.cdl])
x(A.cds,B.cJ)})()
B.bt(b.typeUniverse,JSON.parse('{"EM":{"H":[],"e":[],"f":[]},"af6":{"a1":["EM"]}}'))
var y=(function rtii(){var x=B.z
return{T:x("aw<t<eI>>"),w:x("aw<t<a5<c,@>>>"),E:x("r<ei>"),t:x("r<a5<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a5<c,@>>"),f:x("a5<@,@>"),l:x("ds"),N:x("c"),z:x("@"),X:x("L?")}})();(function constants(){var x=a.makeConstList
D.zv=new A.GL(0,"recebidos")
D.abs=new A.GL(1,"confirmados")
D.abt=new A.GL(2,"concluidos")
D.brJ=x([D.zv,D.abs,D.abt],B.z("r<GL>"))
D.buX=x([C.a1x],y.p)
D.bLI=new B.L9(C.a1I,null)
D.bPa=new B.eE(0,null,0,0,null,null,D.bLI,null)
D.c7y=new B.D("Pedidos",null,C.hO,null,null,null,null,null,null,null)
D.acI=new B.cY(C.ba,null,null,D.c7y,null)
D.bWG=new B.c4(null,44,D.acI,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUJ","djU",()=>C.bO.$1$1(new A.cEG(),y.D))})()};
(a=>{a["1fnuLgNKr0fAEp4MDtupz2PsRAU="]=a.current})($__dart_deferred_initializers__);