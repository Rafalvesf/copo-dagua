((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZJ(d){return C.dCT(d)},
dCT(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZJ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.S().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aT("booking_extra_options",A.T(["p_booking_id",d],m,l),l),$async$ZJ)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.aq(n==null?B.am:n)
k=y.f
while(n.t()){q=n.gE(n)
J.by(r,J.h8(k.a(q),m,l))}p=r
if(J.aR(p)===0){v=null
x=1
break}r=$.S().b
r===$&&A.b()
x=8
return A.d(r.R("bookings").az(0,"total_amount, deposit_amount").X("id",d).dP(0),$async$ZJ)
case 8:o=f
r=A.dv(J.i(o,"total_amount"))
n=A.dv(J.i(o,"deposit_amount"))
v=new A.bW(p,r,n)
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
return A.m($async$ZJ,w)},
aU_(d,e,f){return C.dAy(d,e,f)},
dAy(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aU_=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.S().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aT("add_booking_extras",A.T(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aU_)
case 7:s=h
r=J.h8(y.f.a(s),p,o)
o=A.dv(J.i(r,"total"))
p=A.dv(J.i(r,"deposit"))
v=new A.a3(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a4(D.c_y)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aU_,w)},
yM:function yM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGg:function aGg(d){this.d=d
this.c=this.a=null},
bW0:function bW0(d){this.a=d},
bW1:function bW1(){},
bW2:function bW2(d,e){this.a=d
this.b=e},
bW_:function bW_(d,e){this.a=d
this.b=e},
bW3:function bW3(d){this.a=d},
bW4:function bW4(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[434]
C=a.updateHolder(c[131],C)
D=c[435]
C.yM.prototype={
P(){return new C.aGg(A.aH(y.N))}}
C.aGg.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.d5(e.c,new C.bW0(h)).d2(0,0,new C.bW1()),a4=h.a.d+a3,a5=a1?a4:A.iX(B.k.a8(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.X(22)
x=y.p
w=A.a([],x)
for(v=A.eA(h.a.c,0,y.P),u=J.aq(v.a),t=v.b,v=new A.c0(u,t,A.u(v).i("c0<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.a3(t+o,u.gE(u)):A.aj(A.c2())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.p(0,m.h(n,f))
o=o.a===0?g:B.mR
m=r.p(0,m.h(n,f))?$.ar:B.t
if(r.p(0,J.i(p.a,f)))k=g
else{j=new A.bc(B.T,1.5,B.ai,-1)
k=new A.dS(j,j,j,j)}i=r.p(0,J.i(p.a,f))?E.Ew:g
k=A.A(g,i,B.r,g,g,new A.M(m,g,k,g,g,g,B.ax),g,22,g,g,g,g,22)
m=A.a([A.h(A.a2(J.i(p.a,"name")),g,g,g,g,B.aj,g,g,g)],x)
i=s.a(J.i(p.a,"details"))
if(J.dR(i==null?B.am:i))m.push(A.h(J.kF(q.a(J.i(p.a,"details"))," \xb7 "),g,g,g,g,B.R,g,g,g))
o=A.A(g,A.P(A.a([k,B.af,new A.bQ(1,B.av,A.B(m,B.G,B.i,B.K,0,B.v),g),B.ak,A.h("+ "+A.aQ(A.dv(J.i(p.a,"amount")),!1),g,g,g,g,B.aj,g,g,g)],x),B.w,B.i,B.m,0,g,g),B.r,g,B.jn,o,g,g,g,g,g,g,g)
w.push(new A.jY(new A.oH(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,g,g),!1,!1,g,!1,!1,new A.hx(o,new C.bW2(p,h),g,g),g))}e=A.a([new A.Ga(d,"Queres juntar alguma coisa?",e,g,g),B.a1,A.A(g,A.B(w,B.w,B.i,B.m,0,B.v),B.r,g,g,new A.M(B.aa,g,g,a0,g,g,B.y),g,g,g,B.dy,g,g,g),B.a1],x)
if(!a1)e.push(A.P(A.a([D.aAB,A.h(A.aQ(a4,!1),g,g,g,g,B.R,g,g,g)],x),B.w,B.i,B.m,0,g,g))
e.push(B.aE)
e.push(A.P(A.a([A.a4(A.h(a1?"A pagar agora":"Sinal ("+B.k.aK(a2*100)+" %) agora",g,g,g,g,B.R,g,g,g),1),A.h(A.aQ(a5,!0),g,g,g,g,B.c4,g,g,g)],x),B.w,B.i,B.m,0,g,g))
e.push(E.K9)
e.push(B.bi)
e.push(A.P(A.a([A.a4(A.aU(A.A(B.L,D.c8A,B.r,g,g,E.a8l,g,52,g,g,g,g,g),new C.bW3(a6),g),1),B.ae,A.a4(A.aU(A.A(B.L,A.h("Continuar \xb7 "+A.aQ(a5,!0),1,g,g,g,B.IM,g,g,g),B.r,g,g,B.HI,g,52,g,g,g,g,g),new C.bW4(h,a6),g),2)],x),B.w,B.i,B.m,0,g,g))
return A.dO(A.B(e,B.I,B.i,B.K,0,B.v),B.z,g,B.au,g,g,B.a2)}}
var z=a.updateTypes([])
C.bW0.prototype={
$1(d){return this.a.d.p(0,J.i(d,"id"))},
$S:35}
C.bW1.prototype={
$2(d,e){return d+A.dv(J.i(e,"amount"))},
$S:189}
C.bW2.prototype={
$0(){var x=this.b
return x.q(new C.bW_(this.a,x))},
$S:0}
C.bW_.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.p(0,J.i(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.K(0,x.h(v,"id")):w.B(0,A.a2(x.h(v,"id")))},
$S:0}
C.bW3.prototype={
$0(){return A.an(this.a,!1).aj(A.aH(y.N))},
$S:0}
C.bW4.prototype={
$0(){return A.an(this.b,!1).aj(A.eK(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yM,A.G)
x(C.aGg,A.a_)
x(C.bW0,A.bw)
x(C.bW1,A.cQ)
w(A.bS,[C.bW2,C.bW_,C.bW3,C.bW4])})()
A.bp(b.typeUniverse,JSON.parse('{"yM":{"G":[],"e":[],"f":[]},"aGg":{"a_":["yM"]}}'))
var y=(function rtii(){var x=A.w
return{t:x("r<a5<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),N:x("c"),q:x("du"),z:x("@"),g:x("t<@>?"),a:x("+(R,R)?"),B:x("+(t<a5<c,@>>,R,R)?")}})();(function constants(){D.ceI=new A.C("Reserva + extras",null,B.R,null,null,null,null,null,null,null,null)
D.aAB=new A.bQ(1,B.av,D.ceI,null)
D.cac=new A.C("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.c_y=new A.bG(D.cac,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.z,null)
D.c8A=new A.C("Sem extras",null,B.c5,null,null,null,null,null,null,null,null)})()};
(a=>{a["E4803E5L/hkRGPerScqy42e9vyI="]=a.current})($__dart_deferred_initializers__);