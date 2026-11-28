((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
Zy(d){return C.dB5(d)},
dB5(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Zy=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.T().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aT("booking_extra_options",A.S(["p_booking_id",d],m,l),l),$async$Zy)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.ar(n==null?B.aj:n)
k=y.f
while(n.t()){q=n.gE(n)
J.bw(r,J.h6(k.a(q),m,l))}p=r
if(J.aT(p)===0){v=null
x=1
break}r=$.T().b
r===$&&A.b()
x=8
return A.d(r.R("bookings").az(0,"total_amount, deposit_amount").W("id",d).dP(0),$async$Zy)
case 8:o=f
r=A.dt(J.h(o,"total_amount"))
n=A.dt(J.h(o,"deposit_amount"))
v=new A.c_(p,r,n)
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
return A.m($async$Zy,w)},
aTp(d,e,f){return C.dyK(d,e,f)},
dyK(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aTp=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.T().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aT("add_booking_extras",A.S(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aTp)
case 7:s=h
r=J.h6(y.f.a(s),p,o)
o=A.dt(J.h(r,"total"))
p=A.dt(J.h(r,"deposit"))
v=new A.a3(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a4(D.bZu)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aTp,w)},
yH:function yH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFK:function aFK(d){this.d=d
this.c=this.a=null},
bV7:function bV7(d){this.a=d},
bV8:function bV8(){},
bV9:function bV9(d,e){this.a=d
this.b=e},
bV6:function bV6(d,e){this.a=d
this.b=e},
bVa:function bVa(d){this.a=d},
bVb:function bVb(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[424]
C=a.updateHolder(c[130],C)
D=c[425]
C.yH.prototype={
P(){return new C.aFK(A.aH(y.N))}}
C.aFK.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.dc(e.c,new C.bV7(h)).d7(0,0,new C.bV8()),a4=h.a.d+a3,a5=a1?a4:A.iU(B.k.a8(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.a0(22)
x=y.p
w=A.a([],x)
for(v=A.ew(h.a.c,0,y.P),u=J.ar(v.a),t=v.b,v=new A.bX(u,t,A.u(v).i("bX<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.a3(t+o,u.gE(u)):A.aj(A.c1())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.p(0,m.h(n,f))
o=o.a===0?g:B.mL
m=r.p(0,m.h(n,f))?$.ap:B.t
if(r.p(0,J.h(p.a,f)))k=g
else{j=new A.bd(B.S,1.5,B.ah,-1)
k=new A.dV(j,j,j,j)}i=r.p(0,J.h(p.a,f))?E.Ed:g
k=A.D(g,i,B.r,g,g,new A.O(m,g,k,g,g,g,B.az),g,22,g,g,g,g,22)
m=A.a([A.i(A.a1(J.h(p.a,"name")),g,g,g,g,B.ao,g,g,g)],x)
i=s.a(J.h(p.a,"details"))
if(J.dO(i==null?B.aj:i))m.push(A.i(J.kb(q.a(J.h(p.a,"details"))," \xb7 "),g,g,g,g,B.W,g,g,g))
o=A.D(g,A.Q(A.a([k,B.ag,new A.bT(1,B.aw,A.B(m,B.H,B.j,B.L,0,B.v),g),B.aq,A.i("+ "+A.aQ(A.dt(J.h(p.a,"amount")),!1),g,g,g,g,B.ao,g,g,g)],x),B.w,B.j,B.m,0,g,g),B.r,g,B.ji,o,g,g,g,g,g,g,g)
w.push(new A.kP(new A.rc(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,g,g),!1,!1,g,!1,!1,new A.hM(o,new C.bV9(p,h),g,g),g))}e=A.a([new A.G6(d,"Queres juntar alguma coisa?",e,g,g),B.a3,A.D(g,A.B(w,B.w,B.j,B.m,0,B.v),B.r,g,g,new A.O(B.ac,g,g,a0,g,g,B.y),g,g,g,B.e9,g,g,g),B.a3],x)
if(!a1)e.push(A.Q(A.a([D.aA1,A.i(A.aQ(a4,!1),g,g,g,g,B.W,g,g,g)],x),B.w,B.j,B.m,0,g,g))
e.push(B.aE)
e.push(A.Q(A.a([A.a6(A.i(a1?"A pagar agora":"Sinal ("+B.k.aK(a2*100)+" %) agora",g,g,g,g,B.W,g,g,g),1),A.i(A.aQ(a5,!0),g,g,g,g,B.c4,g,g,g)],x),B.w,B.j,B.m,0,g,g))
e.push(E.JR)
e.push(B.bf)
e.push(A.Q(A.a([A.a6(A.aU(A.D(B.K,D.c7w,B.r,g,g,E.a80,g,52,g,g,g,g,g),new C.bVa(a6),g),1),B.ak,A.a6(A.aU(A.D(B.K,A.i("Continuar \xb7 "+A.aQ(a5,!0),1,g,g,g,B.Iq,g,g,g),B.r,g,g,B.Hm,g,52,g,g,g,g,g),new C.bVb(h,a6),g),2)],x),B.w,B.j,B.m,0,g,g))
return A.dX(A.B(e,B.J,B.j,B.L,0,B.v),B.z,g,B.av,g,g,B.a1)}}
var z=a.updateTypes([])
C.bV7.prototype={
$1(d){return this.a.d.p(0,J.h(d,"id"))},
$S:35}
C.bV8.prototype={
$2(d,e){return d+A.dt(J.h(e,"amount"))},
$S:164}
C.bV9.prototype={
$0(){var x=this.b
return x.q(new C.bV6(this.a,x))},
$S:0}
C.bV6.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.p(0,J.h(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.K(0,x.h(v,"id")):w.B(0,A.a1(x.h(v,"id")))},
$S:0}
C.bVa.prototype={
$0(){return A.aq(this.a,!1).aj(A.aH(y.N))},
$S:0}
C.bVb.prototype={
$0(){return A.aq(this.b,!1).aj(A.eQ(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yH,A.J)
x(C.aFK,A.a_)
x(C.bV7,A.bx)
x(C.bV8,A.cR)
w(A.bR,[C.bV9,C.bV6,C.bVa,C.bVb])})()
A.br(b.typeUniverse,JSON.parse('{"yH":{"J":[],"e":[],"f":[]},"aFK":{"a_":["yH"]}}'))
var y=(function rtii(){var x=A.w
return{t:x("r<a4<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),N:x("c"),q:x("ds"),z:x("@"),g:x("t<@>?"),a:x("+(P,P)?"),B:x("+(t<a4<c,@>>,P,P)?")}})();(function constants(){D.cdr=new A.E("Reserva + extras",null,B.W,null,null,null,null,null,null,null,null)
D.aA1=new A.bT(1,B.aw,D.cdr,null)
D.c92=new A.E("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.bZu=new A.bI(D.c92,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.z,null)
D.c7w=new A.E("Sem extras",null,B.c1,null,null,null,null,null,null,null,null)})()};
(a=>{a["S45dbevBN26Um4urBYIDkKiT6gk="]=a.current})($__dart_deferred_initializers__);