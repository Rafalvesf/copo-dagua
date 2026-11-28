((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZU(d){return C.dFr(d)},
dFr(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZU=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.Q().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aK("booking_extra_options",A.R(["p_booking_id",d],m,l),l),$async$ZU)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.ap(n==null?B.al:n)
k=y.f
while(n.t()){q=n.gE(n)
J.bt(r,J.hb(k.a(q),m,l))}p=r
if(J.aQ(p)===0){v=null
x=1
break}r=$.Q().b
r===$&&A.b()
x=8
return A.d(r.P("bookings").aj(0,"total_amount, deposit_amount").V("id",d).dQ(0),$async$ZU)
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
return A.m($async$ZU,w)},
aU6(d,e,f){return C.dD4(d,e,f)},
dD4(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aU6=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.Q().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aK("add_booking_extras",A.R(["p_booking_id",e,"p_extra_ids",f.bx(0)],p,o),o),$async$aU6)
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
if(d.e!=null)d.O(y.q).f.a2(D.bZJ)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aU6,w)},
yN:function yN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGm:function aGm(d){this.d=d
this.c=this.a=null},
bXf:function bXf(d){this.a=d},
bXg:function bXg(){},
bXh:function bXh(d,e){this.a=d
this.b=e},
bXe:function bXe(d,e){this.a=d
this.b=e},
bXi:function bXi(d){this.a=d},
bXj:function bXj(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[443]
C=a.updateHolder(c[133],C)
D=c[444]
C.yN.prototype={
R(){return new C.aGm(A.aL(y.N))}}
C.aGm.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.da(e.c,new C.bXf(h)).cW(0,0,new C.bXg()),a4=h.a.d+a3,a5=a1?a4:A.iN(B.k.a9(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.W(22)
x=y.p
w=A.a([],x)
for(v=A.ey(h.a.c,0,y.P),u=J.ap(v.a),t=v.b,v=new A.c3(u,t,A.u(v).i("c3<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.a_(t+o,u.gE(u)):A.al(A.c5())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.q(0,m.h(n,f))
o=o.a===0?g:B.mP
m=r.q(0,m.h(n,f))?$.at:B.t
if(r.q(0,J.i(p.a,f)))k=g
else{j=new A.bf(B.U,1.5,B.aj,-1)
k=new A.dN(j,j,j,j)}i=r.q(0,J.i(p.a,f))?E.Ef:g
k=A.x(g,i,B.r,g,g,new A.I(m,g,k,g,g,g,B.au),g,22,g,g,g,g,22)
m=A.a([A.h(A.Z(J.i(p.a,"name")),g,g,g,g,B.aa,g,g,g)],x)
i=s.a(J.i(p.a,"details"))
if(J.dI(i==null?B.al:i))m.push(A.h(J.kG(q.a(J.i(p.a,"details"))," \xb7 "),g,g,g,g,B.N,g,g,g))
o=A.x(g,A.O(A.a([k,B.ae,new A.bI(1,B.as,A.A(m,B.G,B.h,B.J),g),B.ag,A.h("+ "+A.aK(A.dt(J.i(p.a,"amount")),!1),g,g,g,g,B.aa,g,g,g)],x),B.v,B.h,B.l,0,g),B.r,g,B.hY,o,g,g,g,g,g,g,g)
w.push(new A.jt(new A.n5(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,g,g),!1,!1,g,!1,!1,new A.hw(o,new C.bXh(p,h),g,g),g))}e=A.a([new A.Gd(d,"Queres juntar alguma coisa?",e,g,g),B.a0,A.x(g,A.A(w,B.v,B.h,B.l),B.r,g,g,new A.I(B.a6,g,g,a0,g,g,B.x),g,g,g,B.cz,g,g,g),B.a0],x)
if(!a1)e.push(A.O(A.a([D.azO,A.h(A.aK(a4,!1),g,g,g,g,B.N,g,g,g)],x),B.v,B.h,B.l,0,g))
e.push(B.aD)
e.push(A.O(A.a([A.a5(A.h(a1?"A pagar agora":"Sinal ("+B.k.aM(a2*100)+" %) agora",g,g,g,g,B.N,g,g,g),1),A.h(A.aK(a5,!0),g,g,g,g,B.bV,g,g,g)],x),B.v,B.h,B.l,0,g))
e.push(E.JR)
e.push(B.bh)
e.push(A.O(A.a([A.a5(A.aX(A.x(B.K,D.c7M,B.r,g,g,E.a7V,g,52,g,g,g,g,g),new C.bXi(a6),g),1),B.af,A.a5(A.aX(A.x(B.K,A.h("Continuar \xb7 "+A.aK(a5,!0),1,g,g,g,B.zb,g,g,g),B.r,g,g,B.Hv,g,52,g,g,g,g,g),new C.bXj(h,a6),g),2)],x),B.v,B.h,B.l,0,g))
return A.dU(A.A(e,B.F,B.h,B.J),B.y,g,B.an,g,B.a1)}}
var z=a.updateTypes([])
C.bXf.prototype={
$1(d){return this.a.d.q(0,J.i(d,"id"))},
$S:34}
C.bXg.prototype={
$2(d,e){return d+A.dt(J.i(e,"amount"))},
$S:172}
C.bXh.prototype={
$0(){var x=this.b
return x.p(new C.bXe(this.a,x))},
$S:0}
C.bXe.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.q(0,J.i(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.M(0,x.h(v,"id")):w.C(0,A.Z(x.h(v,"id")))},
$S:0}
C.bXi.prototype={
$0(){return A.am(this.a,!1).ae(A.aL(y.N))},
$S:0}
C.bXj.prototype={
$0(){return A.am(this.b,!1).ae(A.eG(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yN,A.G)
x(C.aGm,A.Y)
x(C.bXf,A.bu)
x(C.bXg,A.cK)
w(A.bP,[C.bXh,C.bXe,C.bXi,C.bXj])})()
A.bn(b.typeUniverse,JSON.parse('{"yN":{"G":[],"e":[],"f":[]},"aGm":{"Y":["yN"]}}'))
var y=(function rtii(){var x=A.w
return{t:x("r<a4<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),N:x("c"),q:x("dp"),z:x("@"),g:x("t<@>?"),a:x("+(T,T)?"),B:x("+(t<a4<c,@>>,T,T)?")}})();(function constants(){D.ce4=new A.D("Reserva + extras",null,B.N,null,null,null,null,null,null,null,null)
D.azO=new A.bI(1,B.as,D.ce4,null)
D.c9q=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.bZJ=new A.bF(D.c9q,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c7M=new A.D("Sem extras",null,B.bW,null,null,null,null,null,null,null,null)})()};
(a=>{a["KZkT17ecFBnmhBkU6i/NxkWWXyA="]=a.current})($__dart_deferred_initializers__);