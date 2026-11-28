((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
duY(d){return new A.F_(d,null)},
dbv(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dbu(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mG||x===C.ty
case 1:x=d.y
return x===C.jr||x===C.eN
case 2:return d.y===C.hk}},
H2:function H2(d,e){this.a=d
this.b=e},
cFP:function cFP(){},
F_:function F_(d,e){this.d=d
this.a=e},
afy:function afy(){var _=this
_.d=_.w=$
_.c=_.a=null},
cec:function cec(d,e,f){this.a=d
this.b=e
this.c=f},
ce5:function ce5(d){this.a=d},
ce6:function ce6(d,e,f){this.a=d
this.b=e
this.c=f},
ce7:function ce7(){},
ce8:function ce8(){},
ce9:function ce9(d,e,f){this.a=d
this.b=e
this.c=f},
cea:function cea(){},
ceb:function ceb(){},
cem:function cem(d){this.a=d},
cen:function cen(d){this.a=d},
cei:function cei(d,e){this.a=d
this.b=e},
ceh:function ceh(d,e){this.a=d
this.b=e},
cel:function cel(){},
cek:function cek(d){this.a=d},
ced:function ced(d){this.a=d},
cej:function cej(d,e){this.a=d
this.b=e},
cee:function cee(){},
cef:function cef(){},
ceg:function ceg(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[186]
A=a.updateHolder(c[33],A)
D=c[350]
F=c[104]
A.H2.prototype={
I(){return"_BookingSegment."+this.b}}
A.F_.prototype={
P(){return new A.afy()}}
A.afy.prototype={
U5(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.H)(f),++w){v=f[w]
u.push(new F.Vg(v,new A.cec(this,e,v),!0,null))}return B.eQ(u,0)},
aTe(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gR(),l=m.G($.dlz(),y.w),k=l.gv(l)
if(k==null)k=C.lO
m=m.G($.p8().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.qI
w=B.a([],y.p)
for(m=J.ao(k),l=J.ca(x);m.q();){v=m.gE(m)
u=J.a6(v)
t=u.h(v,"booking_id")
s=B.f4(l.cb(x,new A.ce5(B.A(t==null?u.h(v,"quote_request_id"):t))))
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
w.push(new B.th(new B.ch(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.ce6(this,d,s),C.j.aO(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c3("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
aZP(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzK()===D.zz?h.aTe(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.dbv(h.gzK())
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
return B.a([new B.c3(x,g,B.a([B.JV(C.eA,C.eR,v,w)],u),16,g)],u)}switch(h.gzK().a){case 0:x=B.a8(e).i("a7<1>")
w=x.i("y.E")
t=B.U(new B.a7(e,new A.ce7(),x),w)
s=B.U(new B.a7(e,new A.ce8(),x),w)
x=y.p
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.s,p=0;p<t.length;t.length===r||(0,B.H)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.aE(m)+" "+C.bi[B.aw(m)-1]+" "+B.aL(m)],q)
k=o.CW
if(k!=null)l.push(B.p(k)+" pessoas")
u.push(new B.th(new B.ch(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a2(l," \xb7 "),"Responder",new A.ce9(h,d,o),C.j.aO(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c3("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c3("Proposta enviada \xb7 "+v,g,B.a([h.U5(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a7<1>")
w=x.i("y.E")
j=B.U(new B.a7(e,new A.cea(),x),w)
i=B.U(new B.a7(e,new A.ceb(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c3("\xc0 espera do sinal \xb7 "+v,g,B.a([h.U5(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c3("Confirmadas \xb7 "+v,g,B.a([h.U5(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c3("Conclu\xeddos \xb7 "+e.length,g,B.a([h.U5(0,d,e)],x),16,g)],x)}},
gzK(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abA
break
case"concluidos":x=D.abB
break
default:x=D.zz
break}w=this.w=x}return w},
b6H(d){return A.dbu(d,this.gzK())},
u(d){var x,w,v,u,t=this,s=null,r=t.gR().G($.p8().$1(s),y.T),q=r.gv(r),p=new A.cem(q==null?C.qI:q),o=B.aT(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.brU[x]
v=A.dbv(w)
u=w===D.zz?p.$1(w):s
n.push(new B.ej(v,t.gzK()===w,u,new A.cei(t,w),s))}v=y.p
n=B.a([D.bX_,new E.mc(n,16,!1,s)],v)
C.e.p(n,B.hE(r,new A.cej(t,d),new A.cek(t),new A.cel(),!1,!0,!1))
return B.cP(s,C.cQ,new B.bA(C.aw,s,C.aD,C.y,B.a([B.d6(n,s,new B.a4(20,o.r.b+12,20,140),s,s,!1,!1),D.bPm],v),s),!0,s)}}
var z=a.updateTypes(["C(eI)","v(H2)"])
A.cFP.prototype={
$1(d){return this.aEw(d)},
aEw(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.S("booking_change_requests").an(0,"id, booking_id, quote_request_id, kind, from_value, to_value, created_at").X("status","open").Bq("requested_by_role","partner").cJ(0,"created_at",!1),$async$$1)
case 7:s=f
r=B.a([],y.t)
for(p=J.ao(s),o=y.f,n=y.N,m=y.z;p.q();){q=p.gE(p)
J.bn(r,B.dV(o.a(q),n,m))}v=r
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
$S:1514}
A.cec.prototype={
$0(){var x=this.c
return B.ae(this.b).ah("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ce5.prototype={
$1(d){return d.a===this.a},
$S:33}
A.ce6.prototype={
$0(){var x=this.c
return B.ae(this.b).ah("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ce7.prototype={
$1(d){return!d.ax},
$S:33}
A.ce8.prototype={
$1(d){return d.ax},
$S:33}
A.ce9.prototype={
$0(){var x=this.c
return B.ae(this.b).ah("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cea.prototype={
$1(d){return d.y===C.jr},
$S:33}
A.ceb.prototype={
$1(d){return d.y===C.eN},
$S:33}
A.cem.prototype={
$1(d){return J.dm(this.a,new A.cen(d)).gA(0)},
$S:z+1}
A.cen.prototype={
$1(d){return A.dbu(d,this.a)},
$S:33}
A.cei.prototype={
$0(){var x=this.a
return x.n(new A.ceh(x,this.b))},
$S:0}
A.ceh.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cel.prototype={
$0(){return D.bv7},
$S:77}
A.cek.prototype={
$2(d,e){return B.a([new B.jl("N\xe3o foi poss\xedvel carregar.",new A.ced(this.a),null)],y.p)},
$S:1515}
A.ced.prototype={
$0(){return this.a.gR().ai($.p8().$1(null))},
$S:0}
A.cej.prototype={
$1(d){var x,w=null,v=this.a,u=J.ca(d),t=u.cb(d,v.gb6G()),s=B.U(t,t.$ti.i("y.E")),r=u.cb(d,new A.cee()).gA(0),q=u.cb(d,new A.cef()).gA(0),p=u.cb(d,new A.ceg()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vo(new B.S(C.jD,B.e5(C.bh,B.a([new B.dU(""+q+" por responder",C.hE,w),new B.dU(""+p+" "+t,C.dd,w)],x),C.r,C.bl,8,8),w),w,"Pedidos recebidos",C.hG,w,u,""+r)],x)
C.e.p(x,v.aZP(this.b,s))
return x},
$S:1516}
A.cee.prototype={
$1(d){return d.at},
$S:33}
A.cef.prototype={
$1(d){return d.y===C.mG&&!d.ax},
$S:33}
A.ceg.prototype={
$1(d){return d.ax&&d.y===C.ty},
$S:33};(function installTearOffs(){var x=a._instance_1u
x(A.afy.prototype,"gb6G","b6H",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.H2,B.f7)
w(B.bu,[A.cFP,A.ce5,A.ce7,A.ce8,A.cea,A.ceb,A.cem,A.cen,A.cej,A.cee,A.cef,A.ceg])
x(A.F_,B.dC)
x(A.afy,B.dw)
w(B.bL,[A.cec,A.ce6,A.ce9,A.cei,A.ceh,A.cel,A.ced])
x(A.cek,B.cL)})()
B.br(b.typeUniverse,JSON.parse('{"F_":{"G":[],"e":[],"f":[]},"afy":{"Z":["F_"]}}'))
var y=(function rtii(){var x=B.B
return{T:x("ax<t<eI>>"),w:x("ax<t<a3<c,@>>>"),E:x("r<ej>"),t:x("r<a3<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a3<c,@>>"),f:x("a3<@,@>"),l:x("dv"),N:x("c"),z:x("@"),X:x("M?")}})();(function constants(){var x=a.makeConstList
D.zz=new A.H2(0,"recebidos")
D.abA=new A.H2(1,"confirmados")
D.abB=new A.H2(2,"concluidos")
D.brU=x([D.zz,D.abA,D.abB],B.B("r<H2>"))
D.bv7=x([C.a1E],y.p)
D.bLU=new B.Lt(C.a1P,null)
D.bPm=new B.eL(0,null,0,0,null,null,D.bLU,null)
D.c7X=new B.D("Pedidos",null,C.hS,null,null,null,null,null,null,null)
D.acR=new B.d0(C.bc,null,null,D.c7X,null)
D.bX_=new B.c6(null,44,D.acR,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWF","dlz",()=>C.bK.$1$1(new A.cFP(),y.D))})()};
(a=>{a["Bqo1FiDdfVlM+GjtyG0qCvJbC4I="]=a.current})($__dart_deferred_initializers__);