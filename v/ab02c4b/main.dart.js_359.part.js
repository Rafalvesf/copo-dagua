((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dv5(d){return new A.EV(d,null)},
dbD(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dbC(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mG||x===C.tA
case 1:x=d.y
return x===C.jp||x===C.eO
case 2:return d.y===C.hk}},
GV:function GV(d,e){this.a=d
this.b=e},
cG7:function cG7(){},
EV:function EV(d,e){this.d=d
this.a=e},
afn:function afn(){var _=this
_.d=_.w=$
_.c=_.a=null},
cey:function cey(d,e,f){this.a=d
this.b=e
this.c=f},
cer:function cer(d){this.a=d},
ces:function ces(d,e,f){this.a=d
this.b=e
this.c=f},
cet:function cet(){},
ceu:function ceu(){},
cev:function cev(d,e,f){this.a=d
this.b=e
this.c=f},
cew:function cew(){},
cex:function cex(){},
ceI:function ceI(d){this.a=d},
ceJ:function ceJ(d){this.a=d},
ceE:function ceE(d,e){this.a=d
this.b=e},
ceD:function ceD(d,e){this.a=d
this.b=e},
ceH:function ceH(){},
ceG:function ceG(d){this.a=d},
cez:function cez(d){this.a=d},
ceF:function ceF(d,e){this.a=d
this.b=e},
ceA:function ceA(){},
ceB:function ceB(){},
ceC:function ceC(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[186]
A=a.updateHolder(c[33],A)
D=c[350]
F=c[104]
A.GV.prototype={
I(){return"_BookingSegment."+this.b}}
A.EV.prototype={
R(){return new A.afn()}}
A.afn.prototype={
U8(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.G)(f),++w){v=f[w]
u.push(new F.V7(v,new A.cey(this,e,v),!0,null))}return B.eR(u,0)},
aTf(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gS(),l=m.G($.dlG(),y.w),k=l.gv(l)
if(k==null)k=C.lO
m=m.G($.pa().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.qK
w=B.a([],y.p)
for(m=J.ao(k),l=J.c9(x);m.q();){v=m.gE(m)
u=J.a7(v)
t=u.h(v,"booking_id")
s=B.eL(l.ca(x,new A.cer(B.C(t==null?u.h(v,"quote_request_id"):t))))
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
break}r=B.C(u.h(v,"from_value"))
q=r==null?n:C.f.B(r)
if(q==null)q=""
v=B.C(u.h(v,"to_value"))
p=v==null?n:C.f.B(v)
if(p==null)p=""
v=s.d
u=s.as
r=s.Q
t+=": "
t=q.length===0?t+p:t+q+" \u2192 "+p
o=s.f
w.push(new B.te(new B.ch(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.ces(this,d,s),C.j.aO(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c2("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
aZP(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzO()===D.zA?h.aTf(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.dbD(h.gzO())
switch(h.gzO().a){case 0:w="Sem pedidos por tratar"
break
case 1:w="Ainda sem reservas confirmadas"
break
case 2:w="Ainda sem eventos conclu\xeddos"
break
default:w=g}switch(h.gzO().a){case 0:v="Os pedidos de or\xe7amento e de reserva aparecem aqui."
break
case 1:v="As reservas aceites e pagas aparecem aqui."
break
case 2:v="Os eventos que j\xe1 fizeste aparecem aqui."
break
default:v=g}u=y.p
return B.a([new B.c2(x,g,B.a([B.JK(C.eA,C.eS,v,w)],u),16,g)],u)}switch(h.gzO().a){case 0:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
t=B.U(new B.a6(e,new A.cet(),x),w)
s=B.U(new B.a6(e,new A.ceu(),x),w)
x=y.p
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.s,p=0;p<t.length;t.length===r||(0,B.G)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.aE(m)+" "+C.bg[B.aw(m)-1]+" "+B.aM(m)],q)
k=o.CW
if(k!=null)l.push(B.p(k)+" pessoas")
u.push(new B.te(new B.ch(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a2(l," \xb7 "),"Responder",new A.cev(h,d,o),C.j.aO(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c2("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c2("Proposta enviada \xb7 "+v,g,B.a([h.U8(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
j=B.U(new B.a6(e,new A.cew(),x),w)
i=B.U(new B.a6(e,new A.cex(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c2("\xc0 espera do sinal \xb7 "+v,g,B.a([h.U8(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c2("Confirmadas \xb7 "+v,g,B.a([h.U8(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c2("Conclu\xeddos \xb7 "+e.length,g,B.a([h.U8(0,d,e)],x),16,g)],x)}},
gzO(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abx
break
case"concluidos":x=D.aby
break
default:x=D.zA
break}w=this.w=x}return w},
b6I(d){return A.dbC(d,this.gzO())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.pa().$1(s),y.T),q=r.gv(r),p=new A.ceI(q==null?C.qK:q),o=B.aT(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.brN[x]
v=A.dbD(w)
u=w===D.zA?p.$1(w):s
n.push(new B.ek(v,t.gzO()===w,u,new A.ceE(t,w),s))}v=y.p
n=B.a([D.bWU,new E.mb(n,16,!1,s)],v)
C.e.n(n,B.hD(r,new A.ceF(t,d),new A.ceG(t),new A.ceH(),!1,!0,!1))
return B.cP(s,C.cP,new B.bA(C.aw,s,C.aC,C.y,B.a([B.d6(n,s,new B.a4(20,o.r.b+12,20,140),s,s,!1,!1),D.bPf],v),s),!0,s)}}
var z=a.updateTypes(["B(eJ)","v(GV)"])
A.cG7.prototype={
$1(d){return this.aEy(d)},
aEy(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("booking_change_requests").al(0,"id, booking_id, quote_request_id, kind, from_value, to_value, created_at").V("status","open").Bt("requested_by_role","partner").cK(0,"created_at",!1),$async$$1)
case 7:s=f
r=B.a([],y.t)
for(p=J.ao(s),o=y.f,n=y.N,m=y.z;p.q();){q=p.gE(p)
J.bb(r,B.dV(o.a(q),n,m))}v=r
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
$S:1516}
A.cey.prototype={
$0(){var x=this.c
return B.ae(this.b).aj("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cer.prototype={
$1(d){return d.a===this.a},
$S:36}
A.ces.prototype={
$0(){var x=this.c
return B.ae(this.b).aj("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cet.prototype={
$1(d){return!d.ax},
$S:36}
A.ceu.prototype={
$1(d){return d.ax},
$S:36}
A.cev.prototype={
$0(){var x=this.c
return B.ae(this.b).aj("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cew.prototype={
$1(d){return d.y===C.jp},
$S:36}
A.cex.prototype={
$1(d){return d.y===C.eO},
$S:36}
A.ceI.prototype={
$1(d){return J.db(this.a,new A.ceJ(d)).gA(0)},
$S:z+1}
A.ceJ.prototype={
$1(d){return A.dbC(d,this.a)},
$S:36}
A.ceE.prototype={
$0(){var x=this.a
return x.p(new A.ceD(x,this.b))},
$S:0}
A.ceD.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ceH.prototype={
$0(){return D.bv0},
$S:79}
A.ceG.prototype={
$2(d,e){return B.a([new B.jk("N\xe3o foi poss\xedvel carregar.",new A.cez(this.a),null)],y.p)},
$S:1517}
A.cez.prototype={
$0(){return this.a.gS().ai($.pa().$1(null))},
$S:0}
A.ceF.prototype={
$1(d){var x,w=null,v=this.a,u=J.c9(d),t=u.ca(d,v.gb6H()),s=B.U(t,t.$ti.i("w.E")),r=u.ca(d,new A.ceA()).gA(0),q=u.ca(d,new A.ceB()).gA(0),p=u.ca(d,new A.ceC()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vm(new B.S(C.jC,B.e4(C.bf,B.a([new B.dU(""+q+" por responder",C.hE,w),new B.dU(""+p+" "+t,C.dd,w)],x),C.r,C.bl,8,8),w),w,"Pedidos recebidos",C.hG,w,u,""+r)],x)
C.e.n(x,v.aZP(this.b,s))
return x},
$S:1518}
A.ceA.prototype={
$1(d){return d.at},
$S:36}
A.ceB.prototype={
$1(d){return d.y===C.mG&&!d.ax},
$S:36}
A.ceC.prototype={
$1(d){return d.ax&&d.y===C.tA},
$S:36};(function installTearOffs(){var x=a._instance_1u
x(A.afn.prototype,"gb6H","b6I",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GV,B.fg)
w(B.bu,[A.cG7,A.cer,A.cet,A.ceu,A.cew,A.cex,A.ceI,A.ceJ,A.ceF,A.ceA,A.ceB,A.ceC])
x(A.EV,B.dC)
x(A.afn,B.dw)
w(B.bL,[A.cey,A.ces,A.cev,A.ceE,A.ceD,A.ceH,A.cez])
x(A.ceG,B.cK)})()
B.br(b.typeUniverse,JSON.parse('{"EV":{"H":[],"e":[],"f":[]},"afn":{"a_":["EV"]}}'))
var y=(function rtii(){var x=B.z
return{T:x("ax<t<eJ>>"),w:x("ax<t<a3<c,@>>>"),E:x("r<ek>"),t:x("r<a3<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a3<c,@>>"),f:x("a3<@,@>"),l:x("du"),N:x("c"),z:x("@"),X:x("M?")}})();(function constants(){var x=a.makeConstList
D.zA=new A.GV(0,"recebidos")
D.abx=new A.GV(1,"confirmados")
D.aby=new A.GV(2,"concluidos")
D.brN=x([D.zA,D.abx,D.aby],B.z("r<GV>"))
D.bv0=x([C.a1B],y.p)
D.bLN=new B.Lj(C.a1M,null)
D.bPf=new B.eF(0,null,0,0,null,null,D.bLN,null)
D.c7O=new B.D("Pedidos",null,C.hS,null,null,null,null,null,null,null)
D.acN=new B.d_(C.bb,null,null,D.c7O,null)
D.bWU=new B.c5(null,44,D.acN,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWE","dlG",()=>C.bP.$1$1(new A.cG7(),y.D))})()};
(a=>{a["Evh6LolQoSNgYM2tNXb1ZSm1+gw="]=a.current})($__dart_deferred_initializers__);