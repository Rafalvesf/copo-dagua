((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dtZ(d){return new A.EQ(d,null)},
daA(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
daz(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mD||x===C.ty
case 1:x=d.y
return x===C.jm||x===C.eN
case 2:return d.y===C.hj}},
GO:function GO(d,e){this.a=d
this.b=e},
cFd:function cFd(){},
EQ:function EQ(d,e){this.d=d
this.a=e},
afa:function afa(){var _=this
_.d=_.w=$
_.c=_.a=null},
cdK:function cdK(d,e,f){this.a=d
this.b=e
this.c=f},
cdD:function cdD(d){this.a=d},
cdE:function cdE(d,e,f){this.a=d
this.b=e
this.c=f},
cdF:function cdF(){},
cdG:function cdG(){},
cdH:function cdH(d,e,f){this.a=d
this.b=e
this.c=f},
cdI:function cdI(){},
cdJ:function cdJ(){},
cdU:function cdU(d){this.a=d},
cdV:function cdV(d){this.a=d},
cdQ:function cdQ(d,e){this.a=d
this.b=e},
cdP:function cdP(d,e){this.a=d
this.b=e},
cdT:function cdT(){},
cdS:function cdS(d){this.a=d},
cdL:function cdL(d){this.a=d},
cdR:function cdR(d,e){this.a=d
this.b=e},
cdM:function cdM(){},
cdN:function cdN(){},
cdO:function cdO(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[186]
A=a.updateHolder(c[33],A)
D=c[350]
F=c[104]
A.GO.prototype={
I(){return"_BookingSegment."+this.b}}
A.EQ.prototype={
S(){return new A.afa()}}
A.afa.prototype={
U1(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.H)(f),++w){v=f[w]
u.push(new F.UZ(v,new A.cdK(this,e,v),!0,null))}return B.eR(u,0)},
aT0(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gR(),l=m.G($.dkB(),y.w),k=l.gv(l)
if(k==null)k=C.lL
m=m.G($.p7().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.qI
w=B.a([],y.p)
for(m=J.ao(k),l=J.c9(x);m.q();){v=m.gE(m)
u=J.a7(v)
t=u.h(v,"booking_id")
s=B.eL(l.ca(x,new A.cdD(B.B(t==null?u.h(v,"quote_request_id"):t))))
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
w.push(new B.ta(new B.cg(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.cdE(this,d,s),C.j.aO(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c2("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
aZA(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzG()===D.zy?h.aT0(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.daA(h.gzG())
switch(h.gzG().a){case 0:w="Sem pedidos por tratar"
break
case 1:w="Ainda sem reservas confirmadas"
break
case 2:w="Ainda sem eventos conclu\xeddos"
break
default:w=g}switch(h.gzG().a){case 0:v="Os pedidos de or\xe7amento e de reserva aparecem aqui."
break
case 1:v="As reservas aceites e pagas aparecem aqui."
break
case 2:v="Os eventos que j\xe1 fizeste aparecem aqui."
break
default:v=g}u=y.p
return B.a([new B.c2(x,g,B.a([B.JD(C.ey,C.eR,v,w)],u),16,g)],u)}switch(h.gzG().a){case 0:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
t=B.U(new B.a6(e,new A.cdF(),x),w)
s=B.U(new B.a6(e,new A.cdG(),x),w)
x=y.p
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.s,p=0;p<t.length;t.length===r||(0,B.H)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.aE(m)+" "+C.bg[B.aw(m)-1]+" "+B.aM(m)],q)
k=o.CW
if(k!=null)l.push(B.p(k)+" pessoas")
u.push(new B.ta(new B.cg(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a1(l," \xb7 "),"Responder",new A.cdH(h,d,o),C.j.aO(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c2("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c2("Proposta enviada \xb7 "+v,g,B.a([h.U1(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
j=B.U(new B.a6(e,new A.cdI(),x),w)
i=B.U(new B.a6(e,new A.cdJ(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c2("\xc0 espera do sinal \xb7 "+v,g,B.a([h.U1(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c2("Confirmadas \xb7 "+v,g,B.a([h.U1(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c2("Conclu\xeddos \xb7 "+e.length,g,B.a([h.U1(0,d,e)],x),16,g)],x)}},
gzG(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abu
break
case"concluidos":x=D.abv
break
default:x=D.zy
break}w=this.w=x}return w},
b6p(d){return A.daz(d,this.gzG())},
u(d){var x,w,v,u,t=this,s=null,r=t.gR().G($.p7().$1(s),y.T),q=r.gv(r),p=new A.cdU(q==null?C.qI:q),o=B.aT(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.brN[x]
v=A.daA(w)
u=w===D.zy?p.$1(w):s
n.push(new B.ej(v,t.gzG()===w,u,new A.cdQ(t,w),s))}v=y.p
n=B.a([D.bWK,new E.ma(n,16,!1,s)],v)
C.e.n(n,B.hD(r,new A.cdR(t,d),new A.cdS(t),new A.cdT(),!1,!0,!1))
return B.cP(s,C.cP,new B.bC(C.aw,s,C.aC,C.y,B.a([B.d6(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPe],v),s),!0,s)}}
var z=a.updateTypes(["C(eJ)","v(GO)"])
A.cFd.prototype={
$1(d){return this.aEp(d)},
aEp(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("booking_change_requests").ai(0,"id, booking_id, quote_request_id, kind, from_value, to_value, created_at").U("status","open").Bm("requested_by_role","partner").cJ(0,"created_at",!1),$async$$1)
case 7:s=f
r=B.a([],y.t)
for(p=J.ao(s),o=y.f,n=y.N,m=y.z;p.q();){q=p.gE(p)
J.br(r,B.dY(o.a(q),n,m))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
v=C.lL
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1509}
A.cdK.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdD.prototype={
$1(d){return d.a===this.a},
$S:35}
A.cdE.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdF.prototype={
$1(d){return!d.ax},
$S:35}
A.cdG.prototype={
$1(d){return d.ax},
$S:35}
A.cdH.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdI.prototype={
$1(d){return d.y===C.jm},
$S:35}
A.cdJ.prototype={
$1(d){return d.y===C.eN},
$S:35}
A.cdU.prototype={
$1(d){return J.db(this.a,new A.cdV(d)).gA(0)},
$S:z+1}
A.cdV.prototype={
$1(d){return A.daz(d,this.a)},
$S:35}
A.cdQ.prototype={
$0(){var x=this.a
return x.p(new A.cdP(x,this.b))},
$S:0}
A.cdP.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cdT.prototype={
$0(){return D.bv0},
$S:81}
A.cdS.prototype={
$2(d,e){return B.a([new B.jh("N\xe3o foi poss\xedvel carregar.",new A.cdL(this.a),null)],y.p)},
$S:1510}
A.cdL.prototype={
$0(){return this.a.gR().aj($.p7().$1(null))},
$S:0}
A.cdR.prototype={
$1(d){var x,w=null,v=this.a,u=J.c9(d),t=u.ca(d,v.gb6o()),s=B.U(t,t.$ti.i("w.E")),r=u.ca(d,new A.cdM()).gA(0),q=u.ca(d,new A.cdN()).gA(0),p=u.ca(d,new A.cdO()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vi(new B.S(C.jA,B.e4(C.bf,B.a([new B.dU(""+q+" por responder",C.hB,w),new B.dU(""+p+" "+t,C.dd,w)],x),C.r,C.bk,8,8),w),w,"Pedidos recebidos",C.hD,w,u,""+r)],x)
C.e.n(x,v.aZA(this.b,s))
return x},
$S:1511}
A.cdM.prototype={
$1(d){return d.at},
$S:35}
A.cdN.prototype={
$1(d){return d.y===C.mD&&!d.ax},
$S:35}
A.cdO.prototype={
$1(d){return d.ax&&d.y===C.ty},
$S:35};(function installTearOffs(){var x=a._instance_1u
x(A.afa.prototype,"gb6o","b6p",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GO,B.fg)
w(B.bs,[A.cFd,A.cdD,A.cdF,A.cdG,A.cdI,A.cdJ,A.cdU,A.cdV,A.cdR,A.cdM,A.cdN,A.cdO])
x(A.EQ,B.dC)
x(A.afa,B.dw)
w(B.bL,[A.cdK,A.cdE,A.cdH,A.cdQ,A.cdP,A.cdT,A.cdL])
x(A.cdS,B.cK)})()
B.bq(b.typeUniverse,JSON.parse('{"EQ":{"G":[],"e":[],"f":[]},"afa":{"a0":["EQ"]}}'))
var y=(function rtii(){var x=B.y
return{T:x("ax<t<eJ>>"),w:x("ax<t<a5<c,@>>>"),E:x("r<ej>"),t:x("r<a5<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a5<c,@>>"),f:x("a5<@,@>"),l:x("dt"),N:x("c"),z:x("@"),X:x("L?")}})();(function constants(){var x=a.makeConstList
D.zy=new A.GO(0,"recebidos")
D.abu=new A.GO(1,"confirmados")
D.abv=new A.GO(2,"concluidos")
D.brN=x([D.zy,D.abu,D.abv],B.y("r<GO>"))
D.bv0=x([C.a1y],y.p)
D.bLM=new B.Lc(C.a1J,null)
D.bPe=new B.eF(0,null,0,0,null,null,D.bLM,null)
D.c7E=new B.D("Pedidos",null,C.hP,null,null,null,null,null,null,null)
D.acK=new B.d_(C.bb,null,null,D.c7E,null)
D.bWK=new B.c5(null,44,D.acK,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVv","dkB",()=>C.bO.$1$1(new A.cFd(),y.D))})()};
(a=>{a["Zq2R82bVbk6Uz6MRWNfZpolkEdk="]=a.current})($__dart_deferred_initializers__);