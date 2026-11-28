((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dty(d){return new A.EM(d,null)},
daa(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
da9(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mB||x===C.tw
case 1:x=d.y
return x===C.jn||x===C.eN
case 2:return d.y===C.hj}},
GL:function GL(d,e){this.a=d
this.b=e},
cER:function cER(){},
EM:function EM(d,e){this.d=d
this.a=e},
af7:function af7(){var _=this
_.d=_.w=$
_.c=_.a=null},
cdv:function cdv(d,e,f){this.a=d
this.b=e
this.c=f},
cdo:function cdo(d){this.a=d},
cdp:function cdp(d,e,f){this.a=d
this.b=e
this.c=f},
cdq:function cdq(){},
cdr:function cdr(){},
cds:function cds(d,e,f){this.a=d
this.b=e
this.c=f},
cdt:function cdt(){},
cdu:function cdu(){},
cdF:function cdF(d){this.a=d},
cdG:function cdG(d){this.a=d},
cdB:function cdB(d,e){this.a=d
this.b=e},
cdA:function cdA(d,e){this.a=d
this.b=e},
cdE:function cdE(){},
cdD:function cdD(d){this.a=d},
cdw:function cdw(d){this.a=d},
cdC:function cdC(d,e){this.a=d
this.b=e},
cdx:function cdx(){},
cdy:function cdy(){},
cdz:function cdz(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[185]
A=a.updateHolder(c[33],A)
D=c[349]
F=c[104]
A.GL.prototype={
I(){return"_BookingSegment."+this.b}}
A.EM.prototype={
S(){return new A.af7()}}
A.af7.prototype={
U_(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.G)(f),++w){v=f[w]
u.push(new F.UV(v,new A.cdv(this,e,v),!0,null))}return B.eR(u,0)},
aSX(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gR(),l=m.G($.dka(),y.w),k=l.gv(l)
if(k==null)k=C.lK
m=m.G($.p5().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.qH
w=B.a([],y.p)
for(m=J.an(k),l=J.c8(x);m.q();){v=m.gE(m)
u=J.a7(v)
t=u.h(v,"booking_id")
s=B.eK(l.cb(x,new A.cdo(B.B(t==null?u.h(v,"quote_request_id"):t))))
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
w.push(new B.t8(new B.cf(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.cdp(this,d,s),C.j.aO(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c1("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
aZw(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzE()===D.zw?h.aSX(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.daa(h.gzE())
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
return B.a([new B.c1(x,g,B.a([B.Jz(C.ey,C.eR,v,w)],u),16,g)],u)}switch(h.gzE().a){case 0:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
t=B.U(new B.a6(e,new A.cdq(),x),w)
s=B.U(new B.a6(e,new A.cdr(),x),w)
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
u.push(new B.t8(new B.cf(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a0(l," \xb7 "),"Responder",new A.cds(h,d,o),C.j.aO(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c1("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c1("Proposta enviada \xb7 "+v,g,B.a([h.U_(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
j=B.U(new B.a6(e,new A.cdt(),x),w)
i=B.U(new B.a6(e,new A.cdu(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c1("\xc0 espera do sinal \xb7 "+v,g,B.a([h.U_(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c1("Confirmadas \xb7 "+v,g,B.a([h.U_(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c1("Conclu\xeddos \xb7 "+e.length,g,B.a([h.U_(0,d,e)],x),16,g)],x)}},
gzE(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abt
break
case"concluidos":x=D.abu
break
default:x=D.zw
break}w=this.w=x}return w},
b6l(d){return A.da9(d,this.gzE())},
u(d){var x,w,v,u,t=this,s=null,r=t.gR().G($.p5().$1(s),y.T),q=r.gv(r),p=new A.cdF(q==null?C.qH:q),o=B.aS(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.brK[x]
v=A.daa(w)
u=w===D.zw?p.$1(w):s
n.push(new B.ei(v,t.gzE()===w,u,new A.cdB(t,w),s))}v=y.p
n=B.a([D.bWH,new E.m9(n,16,!1,s)],v)
C.e.n(n,B.hC(r,new A.cdC(t,d),new A.cdD(t),new A.cdE(),!1,!0,!1))
return B.cO(s,C.cQ,new B.bC(C.aw,s,C.aC,C.y,B.a([B.d4(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPb],v),s),!0,s)}}
var z=a.updateTypes(["C(eI)","v(GL)"])
A.cER.prototype={
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
v=C.lK
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
A.cdv.prototype={
$0(){var x=this.c
return B.ac(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdo.prototype={
$1(d){return d.a===this.a},
$S:35}
A.cdp.prototype={
$0(){var x=this.c
return B.ac(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdq.prototype={
$1(d){return!d.ax},
$S:35}
A.cdr.prototype={
$1(d){return d.ax},
$S:35}
A.cds.prototype={
$0(){var x=this.c
return B.ac(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdt.prototype={
$1(d){return d.y===C.jn},
$S:35}
A.cdu.prototype={
$1(d){return d.y===C.eN},
$S:35}
A.cdF.prototype={
$1(d){return J.da(this.a,new A.cdG(d)).gA(0)},
$S:z+1}
A.cdG.prototype={
$1(d){return A.da9(d,this.a)},
$S:35}
A.cdB.prototype={
$0(){var x=this.a
return x.p(new A.cdA(x,this.b))},
$S:0}
A.cdA.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cdE.prototype={
$0(){return D.buY},
$S:76}
A.cdD.prototype={
$2(d,e){return B.a([new B.jf("N\xe3o foi poss\xedvel carregar.",new A.cdw(this.a),null)],y.p)},
$S:1509}
A.cdw.prototype={
$0(){return this.a.gR().aj($.p5().$1(null))},
$S:0}
A.cdC.prototype={
$1(d){var x,w=null,v=this.a,u=J.c8(d),t=u.cb(d,v.gb6k()),s=B.U(t,t.$ti.i("w.E")),r=u.cb(d,new A.cdx()).gA(0),q=u.cb(d,new A.cdy()).gA(0),p=u.cb(d,new A.cdz()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vg(new B.S(C.jB,B.e3(C.bf,B.a([new B.dT(""+q+" por responder",C.hB,w),new B.dT(""+p+" "+t,C.dc,w)],x),C.r,C.bk,8,8),w),w,"Pedidos recebidos",C.hD,w,u,""+r)],x)
C.e.n(x,v.aZw(this.b,s))
return x},
$S:1510}
A.cdx.prototype={
$1(d){return d.at},
$S:35}
A.cdy.prototype={
$1(d){return d.y===C.mB&&!d.ax},
$S:35}
A.cdz.prototype={
$1(d){return d.ax&&d.y===C.tw},
$S:35};(function installTearOffs(){var x=a._instance_1u
x(A.af7.prototype,"gb6k","b6l",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GL,B.ff)
w(B.bt,[A.cER,A.cdo,A.cdq,A.cdr,A.cdt,A.cdu,A.cdF,A.cdG,A.cdC,A.cdx,A.cdy,A.cdz])
x(A.EM,B.dB)
x(A.af7,B.dv)
w(B.bK,[A.cdv,A.cdp,A.cds,A.cdB,A.cdA,A.cdE,A.cdw])
x(A.cdD,B.cJ)})()
B.bq(b.typeUniverse,JSON.parse('{"EM":{"H":[],"e":[],"f":[]},"af7":{"a1":["EM"]}}'))
var y=(function rtii(){var x=B.y
return{T:x("aw<t<eI>>"),w:x("aw<t<a5<c,@>>>"),E:x("r<ei>"),t:x("r<a5<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a5<c,@>>"),f:x("a5<@,@>"),l:x("ds"),N:x("c"),z:x("@"),X:x("L?")}})();(function constants(){var x=a.makeConstList
D.zw=new A.GL(0,"recebidos")
D.abt=new A.GL(1,"confirmados")
D.abu=new A.GL(2,"concluidos")
D.brK=x([D.zw,D.abt,D.abu],B.y("r<GL>"))
D.buY=x([C.a1x],y.p)
D.bLJ=new B.L9(C.a1I,null)
D.bPb=new B.eE(0,null,0,0,null,null,D.bLJ,null)
D.c7x=new B.D("Pedidos",null,C.hP,null,null,null,null,null,null,null)
D.acJ=new B.cY(C.bb,null,null,D.c7x,null)
D.bWH=new B.c4(null,44,D.acJ,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dV0","dka",()=>C.bO.$1$1(new A.cER(),y.D))})()};
(a=>{a["+M4cko2xTvt35BoDzeKGkVPJvB0="]=a.current})($__dart_deferred_initializers__);