((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dux(d){return new A.ES(d,null)},
db5(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
db4(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mF||x===C.tA
case 1:x=d.y
return x===C.jm||x===C.eN
case 2:return d.y===C.hj}},
GR:function GR(d,e){this.a=d
this.b=e},
cFI:function cFI(){},
ES:function ES(d,e){this.d=d
this.a=e},
aff:function aff(){var _=this
_.d=_.w=$
_.c=_.a=null},
cea:function cea(d,e,f){this.a=d
this.b=e
this.c=f},
ce3:function ce3(d){this.a=d},
ce4:function ce4(d,e,f){this.a=d
this.b=e
this.c=f},
ce5:function ce5(){},
ce6:function ce6(){},
ce7:function ce7(d,e,f){this.a=d
this.b=e
this.c=f},
ce8:function ce8(){},
ce9:function ce9(){},
cek:function cek(d){this.a=d},
cel:function cel(d){this.a=d},
ceg:function ceg(d,e){this.a=d
this.b=e},
cef:function cef(d,e){this.a=d
this.b=e},
cej:function cej(){},
cei:function cei(d){this.a=d},
ceb:function ceb(d){this.a=d},
ceh:function ceh(d,e){this.a=d
this.b=e},
cec:function cec(){},
ced:function ced(){},
cee:function cee(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[186]
A=a.updateHolder(c[33],A)
D=c[350]
F=c[104]
A.GR.prototype={
I(){return"_BookingSegment."+this.b}}
A.ES.prototype={
R(){return new A.aff()}}
A.aff.prototype={
U2(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.H)(f),++w){v=f[w]
u.push(new F.V2(v,new A.cea(this,e,v),!0,null))}return B.eR(u,0)},
aT5(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gS(),l=m.G($.dl7(),y.w),k=l.gv(l)
if(k==null)k=C.lN
m=m.G($.p8().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.qK
w=B.a([],y.p)
for(m=J.ao(k),l=J.c9(x);m.q();){v=m.gE(m)
u=J.a7(v)
t=u.h(v,"booking_id")
s=B.eL(l.ca(x,new A.ce3(B.B(t==null?u.h(v,"quote_request_id"):t))))
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
w.push(new B.td(new B.cg(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.ce4(this,d,s),C.j.aO(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c2("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
aZF(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzG()===D.zz?h.aT5(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.db5(h.gzG())
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
return B.a([new B.c2(x,g,B.a([B.JH(C.ez,C.eR,v,w)],u),16,g)],u)}switch(h.gzG().a){case 0:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
t=B.U(new B.a6(e,new A.ce5(),x),w)
s=B.U(new B.a6(e,new A.ce6(),x),w)
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
u.push(new B.td(new B.cg(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a1(l," \xb7 "),"Responder",new A.ce7(h,d,o),C.j.aO(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c2("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c2("Proposta enviada \xb7 "+v,g,B.a([h.U2(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
j=B.U(new B.a6(e,new A.ce8(),x),w)
i=B.U(new B.a6(e,new A.ce9(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c2("\xc0 espera do sinal \xb7 "+v,g,B.a([h.U2(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c2("Confirmadas \xb7 "+v,g,B.a([h.U2(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c2("Conclu\xeddos \xb7 "+e.length,g,B.a([h.U2(0,d,e)],x),16,g)],x)}},
gzG(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.aby
break
case"concluidos":x=D.abz
break
default:x=D.zz
break}w=this.w=x}return w},
b6y(d){return A.db4(d,this.gzG())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.p8().$1(s),y.T),q=r.gv(r),p=new A.cek(q==null?C.qK:q),o=B.aT(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.brR[x]
v=A.db5(w)
u=w===D.zz?p.$1(w):s
n.push(new B.ej(v,t.gzG()===w,u,new A.ceg(t,w),s))}v=y.p
n=B.a([D.bWU,new E.ma(n,16,!1,s)],v)
C.e.n(n,B.hD(r,new A.ceh(t,d),new A.cei(t),new A.cej(),!1,!0,!1))
return B.cP(s,C.cP,new B.bA(C.aw,s,C.aC,C.y,B.a([B.d6(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPj],v),s),!0,s)}}
var z=a.updateTypes(["C(eJ)","v(GR)"])
A.cFI.prototype={
$1(d){return this.aEs(d)},
aEs(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
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
v=C.lN
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1514}
A.cea.prototype={
$0(){var x=this.c
return B.ae(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ce3.prototype={
$1(d){return d.a===this.a},
$S:35}
A.ce4.prototype={
$0(){var x=this.c
return B.ae(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ce5.prototype={
$1(d){return!d.ax},
$S:35}
A.ce6.prototype={
$1(d){return d.ax},
$S:35}
A.ce7.prototype={
$0(){var x=this.c
return B.ae(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ce8.prototype={
$1(d){return d.y===C.jm},
$S:35}
A.ce9.prototype={
$1(d){return d.y===C.eN},
$S:35}
A.cek.prototype={
$1(d){return J.db(this.a,new A.cel(d)).gA(0)},
$S:z+1}
A.cel.prototype={
$1(d){return A.db4(d,this.a)},
$S:35}
A.ceg.prototype={
$0(){var x=this.a
return x.p(new A.cef(x,this.b))},
$S:0}
A.cef.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cej.prototype={
$0(){return D.bv4},
$S:76}
A.cei.prototype={
$2(d,e){return B.a([new B.jh("N\xe3o foi poss\xedvel carregar.",new A.ceb(this.a),null)],y.p)},
$S:1515}
A.ceb.prototype={
$0(){return this.a.gS().aj($.p8().$1(null))},
$S:0}
A.ceh.prototype={
$1(d){var x,w=null,v=this.a,u=J.c9(d),t=u.ca(d,v.gb6x()),s=B.U(t,t.$ti.i("w.E")),r=u.ca(d,new A.cec()).gA(0),q=u.ca(d,new A.ced()).gA(0),p=u.ca(d,new A.cee()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vj(new B.S(C.jB,B.e4(C.bf,B.a([new B.dU(""+q+" por responder",C.hB,w),new B.dU(""+p+" "+t,C.dd,w)],x),C.r,C.bk,8,8),w),w,"Pedidos recebidos",C.hD,w,u,""+r)],x)
C.e.n(x,v.aZF(this.b,s))
return x},
$S:1516}
A.cec.prototype={
$1(d){return d.at},
$S:35}
A.ced.prototype={
$1(d){return d.y===C.mF&&!d.ax},
$S:35}
A.cee.prototype={
$1(d){return d.ax&&d.y===C.tA},
$S:35};(function installTearOffs(){var x=a._instance_1u
x(A.aff.prototype,"gb6x","b6y",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GR,B.fg)
w(B.bs,[A.cFI,A.ce3,A.ce5,A.ce6,A.ce8,A.ce9,A.cek,A.cel,A.ceh,A.cec,A.ced,A.cee])
x(A.ES,B.dC)
x(A.aff,B.dw)
w(B.bL,[A.cea,A.ce4,A.ce7,A.ceg,A.cef,A.cej,A.ceb])
x(A.cei,B.cK)})()
B.bq(b.typeUniverse,JSON.parse('{"ES":{"G":[],"e":[],"f":[]},"aff":{"a0":["ES"]}}'))
var y=(function rtii(){var x=B.y
return{T:x("ax<t<eJ>>"),w:x("ax<t<a5<c,@>>>"),E:x("r<ej>"),t:x("r<a5<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a5<c,@>>"),f:x("a5<@,@>"),l:x("dt"),N:x("c"),z:x("@"),X:x("M?")}})();(function constants(){var x=a.makeConstList
D.zz=new A.GR(0,"recebidos")
D.aby=new A.GR(1,"confirmados")
D.abz=new A.GR(2,"concluidos")
D.brR=x([D.zz,D.aby,D.abz],B.y("r<GR>"))
D.bv4=x([C.a1B],y.p)
D.bLR=new B.Lg(C.a1M,null)
D.bPj=new B.eF(0,null,0,0,null,null,D.bLR,null)
D.c7O=new B.D("Pedidos",null,C.hP,null,null,null,null,null,null,null)
D.acO=new B.d_(C.bc,null,null,D.c7O,null)
D.bWU=new B.c5(null,44,D.acO,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dW4","dl7",()=>C.bP.$1$1(new A.cFI(),y.D))})()};
(a=>{a["hwkdvsSHPRj7EnBnTdFBtGgnlVI="]=a.current})($__dart_deferred_initializers__);