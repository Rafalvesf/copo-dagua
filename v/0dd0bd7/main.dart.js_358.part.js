((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dtT(d){return new A.EN(d,null)},
dau(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dat(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mD||x===C.tx
case 1:x=d.y
return x===C.jm||x===C.eN
case 2:return d.y===C.hj}},
GM:function GM(d,e){this.a=d
this.b=e},
cF7:function cF7(){},
EN:function EN(d,e){this.d=d
this.a=e},
af9:function af9(){var _=this
_.d=_.w=$
_.c=_.a=null},
cdI:function cdI(d,e,f){this.a=d
this.b=e
this.c=f},
cdB:function cdB(d){this.a=d},
cdC:function cdC(d,e,f){this.a=d
this.b=e
this.c=f},
cdD:function cdD(){},
cdE:function cdE(){},
cdF:function cdF(d,e,f){this.a=d
this.b=e
this.c=f},
cdG:function cdG(){},
cdH:function cdH(){},
cdS:function cdS(d){this.a=d},
cdT:function cdT(d){this.a=d},
cdO:function cdO(d,e){this.a=d
this.b=e},
cdN:function cdN(d,e){this.a=d
this.b=e},
cdR:function cdR(){},
cdQ:function cdQ(d){this.a=d},
cdJ:function cdJ(d){this.a=d},
cdP:function cdP(d,e){this.a=d
this.b=e},
cdK:function cdK(){},
cdL:function cdL(){},
cdM:function cdM(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[186]
A=a.updateHolder(c[33],A)
D=c[350]
F=c[104]
A.GM.prototype={
I(){return"_BookingSegment."+this.b}}
A.EN.prototype={
S(){return new A.af9()}}
A.af9.prototype={
U1(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.H)(f),++w){v=f[w]
u.push(new F.UX(v,new A.cdI(this,e,v),!0,null))}return B.eQ(u,0)},
aT_(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gR(),l=m.G($.dkv(),y.w),k=l.gv(l)
if(k==null)k=C.lL
m=m.G($.p6().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.qI
w=B.a([],y.p)
for(m=J.an(k),l=J.c8(x);m.q();){v=m.gE(m)
u=J.a7(v)
t=u.h(v,"booking_id")
s=B.eK(l.ca(x,new A.cdB(B.B(t==null?u.h(v,"quote_request_id"):t))))
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
w.push(new B.t9(new B.cf(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.cdC(this,d,s),C.j.aO(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c1("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
aZz(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzG()===D.zx?h.aT_(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.dau(h.gzG())
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
return B.a([new B.c1(x,g,B.a([B.JB(C.ey,C.eR,v,w)],u),16,g)],u)}switch(h.gzG().a){case 0:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
t=B.U(new B.a6(e,new A.cdD(),x),w)
s=B.U(new B.a6(e,new A.cdE(),x),w)
x=y.p
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.s,p=0;p<t.length;t.length===r||(0,B.H)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.aD(m)+" "+C.bg[B.av(m)-1]+" "+B.aL(m)],q)
k=o.CW
if(k!=null)l.push(B.p(k)+" pessoas")
u.push(new B.t9(new B.cf(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a1(l," \xb7 "),"Responder",new A.cdF(h,d,o),C.j.aO(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c1("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c1("Proposta enviada \xb7 "+v,g,B.a([h.U1(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
j=B.U(new B.a6(e,new A.cdG(),x),w)
i=B.U(new B.a6(e,new A.cdH(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c1("\xc0 espera do sinal \xb7 "+v,g,B.a([h.U1(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c1("Confirmadas \xb7 "+v,g,B.a([h.U1(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c1("Conclu\xeddos \xb7 "+e.length,g,B.a([h.U1(0,d,e)],x),16,g)],x)}},
gzG(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abu
break
case"concluidos":x=D.abv
break
default:x=D.zx
break}w=this.w=x}return w},
b6o(d){return A.dat(d,this.gzG())},
u(d){var x,w,v,u,t=this,s=null,r=t.gR().G($.p6().$1(s),y.T),q=r.gv(r),p=new A.cdS(q==null?C.qI:q),o=B.aS(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.brN[x]
v=A.dau(w)
u=w===D.zx?p.$1(w):s
n.push(new B.ei(v,t.gzG()===w,u,new A.cdO(t,w),s))}v=y.p
n=B.a([D.bWK,new E.m9(n,16,!1,s)],v)
C.e.n(n,B.hC(r,new A.cdP(t,d),new A.cdQ(t),new A.cdR(),!1,!0,!1))
return B.cO(s,C.cP,new B.bB(C.aw,s,C.aC,C.y,B.a([B.d4(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPe],v),s),!0,s)}}
var z=a.updateTypes(["C(eI)","v(GM)"])
A.cF7.prototype={
$1(d){return this.aEo(d)},
aEo(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("booking_change_requests").ai(0,"id, booking_id, quote_request_id, kind, from_value, to_value, created_at").U("status","open").Bm("requested_by_role","partner").cJ(0,"created_at",!1),$async$$1)
case 7:s=f
r=B.a([],y.t)
for(p=J.an(s),o=y.f,n=y.N,m=y.z;p.q();){q=p.gE(p)
J.bq(r,B.dX(o.a(q),n,m))}v=r
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
$S:1508}
A.cdI.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdB.prototype={
$1(d){return d.a===this.a},
$S:35}
A.cdC.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdD.prototype={
$1(d){return!d.ax},
$S:35}
A.cdE.prototype={
$1(d){return d.ax},
$S:35}
A.cdF.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cdG.prototype={
$1(d){return d.y===C.jm},
$S:35}
A.cdH.prototype={
$1(d){return d.y===C.eN},
$S:35}
A.cdS.prototype={
$1(d){return J.da(this.a,new A.cdT(d)).gA(0)},
$S:z+1}
A.cdT.prototype={
$1(d){return A.dat(d,this.a)},
$S:35}
A.cdO.prototype={
$0(){var x=this.a
return x.p(new A.cdN(x,this.b))},
$S:0}
A.cdN.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cdR.prototype={
$0(){return D.bv0},
$S:76}
A.cdQ.prototype={
$2(d,e){return B.a([new B.jg("N\xe3o foi poss\xedvel carregar.",new A.cdJ(this.a),null)],y.p)},
$S:1509}
A.cdJ.prototype={
$0(){return this.a.gR().aj($.p6().$1(null))},
$S:0}
A.cdP.prototype={
$1(d){var x,w=null,v=this.a,u=J.c8(d),t=u.ca(d,v.gb6n()),s=B.U(t,t.$ti.i("w.E")),r=u.ca(d,new A.cdK()).gA(0),q=u.ca(d,new A.cdL()).gA(0),p=u.ca(d,new A.cdM()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vh(new B.S(C.jA,B.e3(C.bf,B.a([new B.dT(""+q+" por responder",C.hB,w),new B.dT(""+p+" "+t,C.dc,w)],x),C.r,C.bk,8,8),w),w,"Pedidos recebidos",C.hD,w,u,""+r)],x)
C.e.n(x,v.aZz(this.b,s))
return x},
$S:1510}
A.cdK.prototype={
$1(d){return d.at},
$S:35}
A.cdL.prototype={
$1(d){return d.y===C.mD&&!d.ax},
$S:35}
A.cdM.prototype={
$1(d){return d.ax&&d.y===C.tx},
$S:35};(function installTearOffs(){var x=a._instance_1u
x(A.af9.prototype,"gb6n","b6o",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GM,B.ff)
w(B.br,[A.cF7,A.cdB,A.cdD,A.cdE,A.cdG,A.cdH,A.cdS,A.cdT,A.cdP,A.cdK,A.cdL,A.cdM])
x(A.EN,B.dB)
x(A.af9,B.dv)
w(B.bK,[A.cdI,A.cdC,A.cdF,A.cdO,A.cdN,A.cdR,A.cdJ])
x(A.cdQ,B.cJ)})()
B.bp(b.typeUniverse,JSON.parse('{"EN":{"G":[],"e":[],"f":[]},"af9":{"a0":["EN"]}}'))
var y=(function rtii(){var x=B.y
return{T:x("aw<t<eI>>"),w:x("aw<t<a5<c,@>>>"),E:x("r<ei>"),t:x("r<a5<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a5<c,@>>"),f:x("a5<@,@>"),l:x("ds"),N:x("c"),z:x("@"),X:x("L?")}})();(function constants(){var x=a.makeConstList
D.zx=new A.GM(0,"recebidos")
D.abu=new A.GM(1,"confirmados")
D.abv=new A.GM(2,"concluidos")
D.brN=x([D.zx,D.abu,D.abv],B.y("r<GM>"))
D.bv0=x([C.a1y],y.p)
D.bLM=new B.Lb(C.a1J,null)
D.bPe=new B.eE(0,null,0,0,null,null,D.bLM,null)
D.c7E=new B.D("Pedidos",null,C.hP,null,null,null,null,null,null,null)
D.acK=new B.cY(C.bb,null,null,D.c7E,null)
D.bWK=new B.c4(null,44,D.acK,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVp","dkv",()=>C.bO.$1$1(new A.cF7(),y.D))})()};
(a=>{a["y91RM7UaObnIQ7XAD0IEKwKlTrc="]=a.current})($__dart_deferred_initializers__);