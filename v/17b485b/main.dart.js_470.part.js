((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZV(d){return C.dFI(d)},
dFI(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZV=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.Q().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aK("booking_extra_options",A.R(["p_booking_id",d],m,l),l),$async$ZV)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.ap(n==null?B.ak:n)
k=y.f
while(n.t()){q=n.gE(n)
J.bt(r,J.hb(k.a(q),m,l))}p=r
if(J.aQ(p)===0){v=null
x=1
break}r=$.Q().b
r===$&&A.b()
x=8
return A.d(r.P("bookings").aj(0,"total_amount, deposit_amount").V("id",d).dQ(0),$async$ZV)
case 8:o=f
r=A.dt(J.i(o,"total_amount"))
n=A.dt(J.i(o,"deposit_amount"))
v=new A.bV(p,r,n)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ZV,w)},
aU9(d,e,f){return C.dDl(d,e,f)},
dDl(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aU9=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.Q().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aK("add_booking_extras",A.R(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aU9)
case 7:s=h
r=J.hb(y.f.a(s),p,o)
o=A.dt(J.i(r,"total"))
p=A.dt(J.i(r,"deposit"))
v=new A.a_(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a1(D.bZJ)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aU9,w)},
yP:function yP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGp:function aGp(d){this.d=d
this.c=this.a=null},
bXo:function bXo(d){this.a=d},
bXp:function bXp(){},
bXq:function bXq(d,e){this.a=d
this.b=e},
bXn:function bXn(d,e){this.a=d
this.b=e},
bXr:function bXr(d){this.a=d},
bXs:function bXs(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[442]
C=a.updateHolder(c[133],C)
D=c[443]
C.yP.prototype={
R(){return new C.aGp(A.aL(y.N))}}
C.aGp.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.da(e.c,new C.bXo(h)).cW(0,0,new C.bXp()),a4=h.a.d+a3,a5=a1?a4:A.iN(B.k.a9(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.W(22)
x=y.p
w=A.a([],x)
for(v=A.ex(h.a.c,0,y.P),u=J.ap(v.a),t=v.b,v=new A.bX(u,t,A.u(v).i("bX<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.a_(t+o,u.gE(u)):A.ak(A.c4())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.q(0,m.h(n,f))
o=o.a===0?g:B.mP
m=r.q(0,m.h(n,f))?$.at:B.t
if(r.q(0,J.i(p.a,f)))k=g
else{j=new A.bf(B.U,1.5,B.ai,-1)
k=new A.dN(j,j,j,j)}i=r.q(0,J.i(p.a,f))?E.Ef:g
k=A.x(g,i,B.r,g,g,new A.I(m,g,k,g,g,g,B.at),g,22,g,g,g,g,22)
m=A.a([A.h(A.Z(J.i(p.a,"name")),g,g,g,g,B.a9,g,g,g)],x)
i=s.a(J.i(p.a,"details"))
if(J.dI(i==null?B.ak:i))m.push(A.h(J.kG(q.a(J.i(p.a,"details"))," \xb7 "),g,g,g,g,B.N,g,g,g))
o=A.x(g,A.O(A.a([k,B.ad,new A.bH(1,B.ap,A.A(m,B.G,B.h,B.J),g),B.af,A.h("+ "+A.aK(A.dt(J.i(p.a,"amount")),!1),g,g,g,g,B.a9,g,g,g)],x),B.v,B.h,B.l,0,g),B.r,g,B.hY,o,g,g,g,g,g,g,g)
w.push(new A.jt(new A.n5(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a3,g,g,g,g),!1,!1,g,!1,!1,new A.hw(o,new C.bXq(p,h),g,g),g))}e=A.a([new A.Ge(d,"Queres juntar alguma coisa?",e,g,g),B.a0,A.x(g,A.A(w,B.v,B.h,B.l),B.r,g,g,new A.I(B.a5,g,g,a0,g,g,B.x),g,g,g,B.cz,g,g,g),B.a0],x)
if(!a1)e.push(A.O(A.a([D.azP,A.h(A.aK(a4,!1),g,g,g,g,B.N,g,g,g)],x),B.v,B.h,B.l,0,g))
e.push(B.aD)
e.push(A.O(A.a([A.a4(A.h(a1?"A pagar agora":"Sinal ("+B.k.aM(a2*100)+" %) agora",g,g,g,g,B.N,g,g,g),1),A.h(A.aK(a5,!0),g,g,g,g,B.bV,g,g,g)],x),B.v,B.h,B.l,0,g))
e.push(E.JS)
e.push(B.bh)
e.push(A.O(A.a([A.a4(A.aX(A.x(B.K,D.c7M,B.r,g,g,E.a7X,g,52,g,g,g,g,g),new C.bXr(a6),g),1),B.ae,A.a4(A.aX(A.x(B.K,A.h("Continuar \xb7 "+A.aK(a5,!0),1,g,g,g,B.zb,g,g,g),B.r,g,g,B.Hv,g,52,g,g,g,g,g),new C.bXs(h,a6),g),2)],x),B.v,B.h,B.l,0,g))
return A.dU(A.A(e,B.F,B.h,B.J),B.y,g,B.am,g,B.av)}}
var z=a.updateTypes([])
C.bXo.prototype={
$1(d){return this.a.d.q(0,J.i(d,"id"))},
$S:34}
C.bXp.prototype={
$2(d,e){return d+A.dt(J.i(e,"amount"))},
$S:164}
C.bXq.prototype={
$0(){var x=this.b
return x.p(new C.bXn(this.a,x))},
$S:0}
C.bXn.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.q(0,J.i(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.M(0,x.h(v,"id")):w.C(0,A.Z(x.h(v,"id")))},
$S:0}
C.bXr.prototype={
$0(){return A.am(this.a,!1).ae(A.aL(y.N))},
$S:0}
C.bXs.prototype={
$0(){return A.am(this.b,!1).ae(A.eG(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yP,A.G)
x(C.aGp,A.Y)
x(C.bXo,A.bw)
x(C.bXp,A.cK)
w(A.bP,[C.bXq,C.bXn,C.bXr,C.bXs])})()
A.bn(b.typeUniverse,JSON.parse('{"yP":{"G":[],"e":[],"f":[]},"aGp":{"Y":["yP"]}}'))
var y=(function rtii(){var x=A.w
return{t:x("r<a5<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),N:x("c"),q:x("dp"),z:x("@"),g:x("t<@>?"),a:x("+(T,T)?"),B:x("+(t<a5<c,@>>,T,T)?")}})();(function constants(){D.ce4=new A.D("Reserva + extras",null,B.N,null,null,null,null,null,null,null,null)
D.azP=new A.bH(1,B.ap,D.ce4,null)
D.c9q=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.bZJ=new A.bF(D.c9q,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c7M=new A.D("Sem extras",null,B.bW,null,null,null,null,null,null,null,null)})()};
(a=>{a["2WqLPSXUAf7F9Ix8cK9i1LXQXNI="]=a.current})($__dart_deferred_initializers__);