((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
duW(d){return new A.EU(d,null)},
dbt(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dbs(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mG||x===C.tA
case 1:x=d.y
return x===C.jo||x===C.eO
case 2:return d.y===C.hk}},
GU:function GU(d,e){this.a=d
this.b=e},
cG0:function cG0(){},
EU:function EU(d,e){this.d=d
this.a=e},
afm:function afm(){var _=this
_.d=_.w=$
_.c=_.a=null},
cer:function cer(d,e,f){this.a=d
this.b=e
this.c=f},
cek:function cek(d){this.a=d},
cel:function cel(d,e,f){this.a=d
this.b=e
this.c=f},
cem:function cem(){},
cen:function cen(){},
ceo:function ceo(d,e,f){this.a=d
this.b=e
this.c=f},
cep:function cep(){},
ceq:function ceq(){},
ceB:function ceB(d){this.a=d},
ceC:function ceC(d){this.a=d},
cex:function cex(d,e){this.a=d
this.b=e},
cew:function cew(d,e){this.a=d
this.b=e},
ceA:function ceA(){},
cez:function cez(d){this.a=d},
ces:function ces(d){this.a=d},
cey:function cey(d,e){this.a=d
this.b=e},
cet:function cet(){},
ceu:function ceu(){},
cev:function cev(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[186]
A=a.updateHolder(c[33],A)
D=c[350]
F=c[104]
A.GU.prototype={
I(){return"_BookingSegment."+this.b}}
A.EU.prototype={
R(){return new A.afm()}}
A.afm.prototype={
U6(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.G)(f),++w){v=f[w]
u.push(new F.V6(v,new A.cer(this,e,v),!0,null))}return B.eR(u,0)},
aTb(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gS(),l=m.G($.dlw(),y.w),k=l.gv(l)
if(k==null)k=C.lO
m=m.G($.p9().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.qK
w=B.a([],y.p)
for(m=J.ao(k),l=J.c8(x);m.q();){v=m.gE(m)
u=J.a7(v)
t=u.h(v,"booking_id")
s=B.eL(l.ca(x,new A.cek(B.C(t==null?u.h(v,"quote_request_id"):t))))
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
w.push(new B.td(new B.cg(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.cel(this,d,s),C.j.aO(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c2("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
aZL(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzK()===D.zz?h.aTb(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.dbt(h.gzK())
switch(h.gzK().a){case 0:w="Sem pedidos por tratar"
break
case 1:w="Ainda sem reservas confirmadas"
break
case 2:w="Ainda sem eventos conclu\xeddos"
break
default:w=g}switch(h.gzK().a){case 0:v="Os pedidos de or\xe7amento e de reserva aparecem aqui."
break
case 1:v="As reservas aceites e pagas aparecem aqui."
break
case 2:v="Os eventos que j\xe1 fizeste aparecem aqui."
break
default:v=g}u=y.p
return B.a([new B.c2(x,g,B.a([B.JJ(C.eA,C.eS,v,w)],u),16,g)],u)}switch(h.gzK().a){case 0:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
t=B.U(new B.a6(e,new A.cem(),x),w)
s=B.U(new B.a6(e,new A.cen(),x),w)
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
u.push(new B.td(new B.cg(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a2(l," \xb7 "),"Responder",new A.ceo(h,d,o),C.j.aO(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c2("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c2("Proposta enviada \xb7 "+v,g,B.a([h.U6(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
j=B.U(new B.a6(e,new A.cep(),x),w)
i=B.U(new B.a6(e,new A.ceq(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c2("\xc0 espera do sinal \xb7 "+v,g,B.a([h.U6(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c2("Confirmadas \xb7 "+v,g,B.a([h.U6(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c2("Conclu\xeddos \xb7 "+e.length,g,B.a([h.U6(0,d,e)],x),16,g)],x)}},
gzK(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.aby
break
case"concluidos":x=D.abz
break
default:x=D.zz
break}w=this.w=x}return w},
b6E(d){return A.dbs(d,this.gzK())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.p9().$1(s),y.T),q=r.gv(r),p=new A.ceB(q==null?C.qK:q),o=B.aT(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.brP[x]
v=A.dbt(w)
u=w===D.zz?p.$1(w):s
n.push(new B.ek(v,t.gzK()===w,u,new A.cex(t,w),s))}v=y.p
n=B.a([D.bWS,new E.mb(n,16,!1,s)],v)
C.e.n(n,B.hD(r,new A.cey(t,d),new A.cez(t),new A.ceA(),!1,!0,!1))
return B.cP(s,C.cP,new B.bA(C.aw,s,C.aC,C.y,B.a([B.d6(n,s,new B.a4(20,o.r.b+12,20,140),s,s,!1,!1),D.bPh],v),s),!0,s)}}
var z=a.updateTypes(["B(eJ)","v(GU)"])
A.cG0.prototype={
$1(d){return this.aEw(d)},
aEw(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("booking_change_requests").al(0,"id, booking_id, quote_request_id, kind, from_value, to_value, created_at").V("status","open").Bq("requested_by_role","partner").cI(0,"created_at",!1),$async$$1)
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
A.cer.prototype={
$0(){var x=this.c
return B.ae(this.b).aj("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cek.prototype={
$1(d){return d.a===this.a},
$S:36}
A.cel.prototype={
$0(){var x=this.c
return B.ae(this.b).aj("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cem.prototype={
$1(d){return!d.ax},
$S:36}
A.cen.prototype={
$1(d){return d.ax},
$S:36}
A.ceo.prototype={
$0(){var x=this.c
return B.ae(this.b).aj("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cep.prototype={
$1(d){return d.y===C.jo},
$S:36}
A.ceq.prototype={
$1(d){return d.y===C.eO},
$S:36}
A.ceB.prototype={
$1(d){return J.db(this.a,new A.ceC(d)).gA(0)},
$S:z+1}
A.ceC.prototype={
$1(d){return A.dbs(d,this.a)},
$S:36}
A.cex.prototype={
$0(){var x=this.a
return x.p(new A.cew(x,this.b))},
$S:0}
A.cew.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ceA.prototype={
$0(){return D.bv2},
$S:79}
A.cez.prototype={
$2(d,e){return B.a([new B.ji("N\xe3o foi poss\xedvel carregar.",new A.ces(this.a),null)],y.p)},
$S:1517}
A.ces.prototype={
$0(){return this.a.gS().ai($.p9().$1(null))},
$S:0}
A.cey.prototype={
$1(d){var x,w=null,v=this.a,u=J.c8(d),t=u.ca(d,v.gb6D()),s=B.U(t,t.$ti.i("w.E")),r=u.ca(d,new A.cet()).gA(0),q=u.ca(d,new A.ceu()).gA(0),p=u.ca(d,new A.cev()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vj(new B.S(C.jC,B.e4(C.bf,B.a([new B.dU(""+q+" por responder",C.hE,w),new B.dU(""+p+" "+t,C.dd,w)],x),C.r,C.bl,8,8),w),w,"Pedidos recebidos",C.hG,w,u,""+r)],x)
C.e.n(x,v.aZL(this.b,s))
return x},
$S:1518}
A.cet.prototype={
$1(d){return d.at},
$S:36}
A.ceu.prototype={
$1(d){return d.y===C.mG&&!d.ax},
$S:36}
A.cev.prototype={
$1(d){return d.ax&&d.y===C.tA},
$S:36};(function installTearOffs(){var x=a._instance_1u
x(A.afm.prototype,"gb6D","b6E",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GU,B.fg)
w(B.bt,[A.cG0,A.cek,A.cem,A.cen,A.cep,A.ceq,A.ceB,A.ceC,A.cey,A.cet,A.ceu,A.cev])
x(A.EU,B.dC)
x(A.afm,B.dw)
w(B.bL,[A.cer,A.cel,A.ceo,A.cex,A.cew,A.ceA,A.ces])
x(A.cez,B.cK)})()
B.br(b.typeUniverse,JSON.parse('{"EU":{"H":[],"e":[],"f":[]},"afm":{"a_":["EU"]}}'))
var y=(function rtii(){var x=B.z
return{T:x("ax<t<eJ>>"),w:x("ax<t<a3<c,@>>>"),E:x("r<ek>"),t:x("r<a3<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a3<c,@>>"),f:x("a3<@,@>"),l:x("du"),N:x("c"),z:x("@"),X:x("M?")}})();(function constants(){var x=a.makeConstList
D.zz=new A.GU(0,"recebidos")
D.aby=new A.GU(1,"confirmados")
D.abz=new A.GU(2,"concluidos")
D.brP=x([D.zz,D.aby,D.abz],B.z("r<GU>"))
D.bv2=x([C.a1B],y.p)
D.bLP=new B.Li(C.a1M,null)
D.bPh=new B.eF(0,null,0,0,null,null,D.bLP,null)
D.c7M=new B.D("Pedidos",null,C.hS,null,null,null,null,null,null,null)
D.acO=new B.d_(C.bc,null,null,D.c7M,null)
D.bWS=new B.c5(null,44,D.acO,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWv","dlw",()=>C.bP.$1$1(new A.cG0(),y.D))})()};
(a=>{a["LkbfbBYgo9esj3iwt14eBTj0oZk="]=a.current})($__dart_deferred_initializers__);