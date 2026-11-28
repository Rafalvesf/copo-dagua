((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dvA(d){return new A.EY(d,null)},
dc7(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dc6(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mG||x===C.tz
case 1:x=d.y
return x===C.jr||x===C.eN
case 2:return d.y===C.hk}},
H0:function H0(d,e){this.a=d
this.b=e},
cGu:function cGu(){},
EY:function EY(d,e){this.d=d
this.a=e},
afw:function afw(){var _=this
_.d=_.w=$
_.c=_.a=null},
ceS:function ceS(d,e,f){this.a=d
this.b=e
this.c=f},
ceL:function ceL(d){this.a=d},
ceM:function ceM(d,e,f){this.a=d
this.b=e
this.c=f},
ceN:function ceN(){},
ceO:function ceO(){},
ceP:function ceP(d,e,f){this.a=d
this.b=e
this.c=f},
ceQ:function ceQ(){},
ceR:function ceR(){},
cf1:function cf1(d){this.a=d},
cf2:function cf2(d){this.a=d},
ceY:function ceY(d,e){this.a=d
this.b=e},
ceX:function ceX(d,e){this.a=d
this.b=e},
cf0:function cf0(){},
cf_:function cf_(d){this.a=d},
ceT:function ceT(d){this.a=d},
ceZ:function ceZ(d,e){this.a=d
this.b=e},
ceU:function ceU(){},
ceV:function ceV(){},
ceW:function ceW(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[186]
A=a.updateHolder(c[33],A)
D=c[350]
F=c[104]
A.H0.prototype={
I(){return"_BookingSegment."+this.b}}
A.EY.prototype={
R(){return new A.afw()}}
A.afw.prototype={
U8(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.H)(f),++w){v=f[w]
u.push(new F.Ve(v,new A.ceS(this,e,v),!0,null))}return B.eR(u,0)},
aTk(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gS(),l=m.G($.dmb(),y.w),k=l.gv(l)
if(k==null)k=C.lO
m=m.G($.pa().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.qJ
w=B.a([],y.p)
for(m=J.ao(k),l=J.ca(x);m.q();){v=m.gE(m)
u=J.a7(v)
t=u.h(v,"booking_id")
s=B.eK(l.ca(x,new A.ceL(B.A(t==null?u.h(v,"quote_request_id"):t))))
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
break}r=B.A(u.h(v,"from_value"))
q=r==null?n:C.f.B(r)
if(q==null)q=""
v=B.A(u.h(v,"to_value"))
p=v==null?n:C.f.B(v)
if(p==null)p=""
v=s.d
u=s.as
r=s.Q
t+=": "
t=q.length===0?t+p:t+q+" \u2192 "+p
o=s.f
w.push(new B.tg(new B.ch(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.ceM(this,d,s),C.j.aO(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c3("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
aZU(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzM()===D.zA?h.aTk(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.dc7(h.gzM())
switch(h.gzM().a){case 0:w="Sem pedidos por tratar"
break
case 1:w="Ainda sem reservas confirmadas"
break
case 2:w="Ainda sem eventos conclu\xeddos"
break
default:w=g}switch(h.gzM().a){case 0:v="Os pedidos de or\xe7amento e de reserva aparecem aqui."
break
case 1:v="As reservas aceites e pagas aparecem aqui."
break
case 2:v="Os eventos que j\xe1 fizeste aparecem aqui."
break
default:v=g}u=y.p
return B.a([new B.c3(x,g,B.a([B.JT(C.eA,C.eR,v,w)],u),16,g)],u)}switch(h.gzM().a){case 0:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
t=B.U(new B.a6(e,new A.ceN(),x),w)
s=B.U(new B.a6(e,new A.ceO(),x),w)
x=y.p
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.s,p=0;p<t.length;t.length===r||(0,B.H)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.aE(m)+" "+C.bi[B.aw(m)-1]+" "+B.aM(m)],q)
k=o.CW
if(k!=null)l.push(B.p(k)+" pessoas")
u.push(new B.tg(new B.ch(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a2(l," \xb7 "),"Responder",new A.ceP(h,d,o),C.j.aO(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c3("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c3("Proposta enviada \xb7 "+v,g,B.a([h.U8(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
j=B.U(new B.a6(e,new A.ceQ(),x),w)
i=B.U(new B.a6(e,new A.ceR(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c3("\xc0 espera do sinal \xb7 "+v,g,B.a([h.U8(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c3("Confirmadas \xb7 "+v,g,B.a([h.U8(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c3("Conclu\xeddos \xb7 "+e.length,g,B.a([h.U8(0,d,e)],x),16,g)],x)}},
gzM(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abA
break
case"concluidos":x=D.abB
break
default:x=D.zA
break}w=this.w=x}return w},
b6N(d){return A.dc6(d,this.gzM())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.pa().$1(s),y.T),q=r.gv(r),p=new A.cf1(q==null?C.qJ:q),o=B.aT(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.brU[x]
v=A.dc7(w)
u=w===D.zA?p.$1(w):s
n.push(new B.ek(v,t.gzM()===w,u,new A.ceY(t,w),s))}v=y.p
n=B.a([D.bX1,new E.mb(n,16,!1,s)],v)
C.e.n(n,B.hE(r,new A.ceZ(t,d),new A.cf_(t),new A.cf0(),!1,!0,!1))
return B.cP(s,C.cQ,new B.bA(C.aw,s,C.aD,C.y,B.a([B.d6(n,s,new B.a4(20,o.r.b+12,20,140),s,s,!1,!1),D.bPn],v),s),!0,s)}}
var z=a.updateTypes(["B(eI)","v(H0)"])
A.cGu.prototype={
$1(d){return this.aEC(d)},
aEC(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("booking_change_requests").al(0,"id, booking_id, quote_request_id, kind, from_value, to_value, created_at").V("status","open").Br("requested_by_role","partner").cK(0,"created_at",!1),$async$$1)
case 7:s=f
r=B.a([],y.t)
for(p=J.ao(s),o=y.f,n=y.N,m=y.z;p.q();){q=p.gE(p)
J.ba(r,B.dV(o.a(q),n,m))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
v=C.lO
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1519}
A.ceS.prototype={
$0(){var x=this.c
return B.ae(this.b).aj("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceL.prototype={
$1(d){return d.a===this.a},
$S:36}
A.ceM.prototype={
$0(){var x=this.c
return B.ae(this.b).aj("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceN.prototype={
$1(d){return!d.ax},
$S:36}
A.ceO.prototype={
$1(d){return d.ax},
$S:36}
A.ceP.prototype={
$0(){var x=this.c
return B.ae(this.b).aj("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceQ.prototype={
$1(d){return d.y===C.jr},
$S:36}
A.ceR.prototype={
$1(d){return d.y===C.eN},
$S:36}
A.cf1.prototype={
$1(d){return J.db(this.a,new A.cf2(d)).gA(0)},
$S:z+1}
A.cf2.prototype={
$1(d){return A.dc6(d,this.a)},
$S:36}
A.ceY.prototype={
$0(){var x=this.a
return x.p(new A.ceX(x,this.b))},
$S:0}
A.ceX.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cf0.prototype={
$0(){return D.bv7},
$S:77}
A.cf_.prototype={
$2(d,e){return B.a([new B.jk("N\xe3o foi poss\xedvel carregar.",new A.ceT(this.a),null)],y.p)},
$S:1520}
A.ceT.prototype={
$0(){return this.a.gS().ai($.pa().$1(null))},
$S:0}
A.ceZ.prototype={
$1(d){var x,w=null,v=this.a,u=J.ca(d),t=u.ca(d,v.gb6M()),s=B.U(t,t.$ti.i("w.E")),r=u.ca(d,new A.ceU()).gA(0),q=u.ca(d,new A.ceV()).gA(0),p=u.ca(d,new A.ceW()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vn(new B.S(C.jD,B.e5(C.bh,B.a([new B.dU(""+q+" por responder",C.hE,w),new B.dU(""+p+" "+t,C.dd,w)],x),C.r,C.bl,8,8),w),w,"Pedidos recebidos",C.hG,w,u,""+r)],x)
C.e.n(x,v.aZU(this.b,s))
return x},
$S:1521}
A.ceU.prototype={
$1(d){return d.at},
$S:36}
A.ceV.prototype={
$1(d){return d.y===C.mG&&!d.ax},
$S:36}
A.ceW.prototype={
$1(d){return d.ax&&d.y===C.tz},
$S:36};(function installTearOffs(){var x=a._instance_1u
x(A.afw.prototype,"gb6M","b6N",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.H0,B.f7)
w(B.bu,[A.cGu,A.ceL,A.ceN,A.ceO,A.ceQ,A.ceR,A.cf1,A.cf2,A.ceZ,A.ceU,A.ceV,A.ceW])
x(A.EY,B.dC)
x(A.afw,B.dw)
w(B.bL,[A.ceS,A.ceM,A.ceP,A.ceY,A.ceX,A.cf0,A.ceT])
x(A.cf_,B.cL)})()
B.br(b.typeUniverse,JSON.parse('{"EY":{"G":[],"e":[],"f":[]},"afw":{"a_":["EY"]}}'))
var y=(function rtii(){var x=B.C
return{T:x("ax<t<eI>>"),w:x("ax<t<a3<c,@>>>"),E:x("r<ek>"),t:x("r<a3<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a3<c,@>>"),f:x("a3<@,@>"),l:x("dv"),N:x("c"),z:x("@"),X:x("M?")}})();(function constants(){var x=a.makeConstList
D.zA=new A.H0(0,"recebidos")
D.abA=new A.H0(1,"confirmados")
D.abB=new A.H0(2,"concluidos")
D.brU=x([D.zA,D.abA,D.abB],B.C("r<H0>"))
D.bv7=x([C.a1E],y.p)
D.bLV=new B.Lr(C.a1P,null)
D.bPn=new B.eM(0,null,0,0,null,null,D.bLV,null)
D.c7Y=new B.E("Pedidos",null,C.hS,null,null,null,null,null,null,null)
D.acR=new B.d0(C.bc,null,null,D.c7Y,null)
D.bX1=new B.c6(null,44,D.acR,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXe","dmb",()=>C.bK.$1$1(new A.cGu(),y.D))})()};
(a=>{a["MSFb8uwX1+VqqD38O9+xvfIbuPw="]=a.current})($__dart_deferred_initializers__);