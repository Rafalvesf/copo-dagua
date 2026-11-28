((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZS(d){return C.dFZ(d)},
dFZ(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZS=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.P().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aK("booking_extra_options",A.R(["p_booking_id",d],m,l),l),$async$ZS)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.ar(n==null?B.ak:n)
k=y.f
while(n.t()){q=n.gE(n)
J.bt(r,J.h_(k.a(q),m,l))}p=r
if(J.aQ(p)===0){v=null
x=1
break}r=$.P().b
r===$&&A.b()
x=8
return A.d(r.P("bookings").aj(0,"total_amount, deposit_amount").V("id",d).dQ(0),$async$ZS)
case 8:o=f
r=A.du(J.i(o,"total_amount"))
n=A.du(J.i(o,"deposit_amount"))
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
return A.m($async$ZS,w)},
aU7(d,e,f){return C.dDB(d,e,f)},
dDB(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aU7=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.P().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aK("add_booking_extras",A.R(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aU7)
case 7:s=h
r=J.h_(y.f.a(s),p,o)
o=A.du(J.i(r,"total"))
p=A.du(J.i(r,"deposit"))
v=new A.a0(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a2(D.bZu)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aU7,w)},
yN:function yN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGp:function aGp(d){this.d=d
this.c=this.a=null},
bXE:function bXE(d){this.a=d},
bXF:function bXF(){},
bXG:function bXG(d,e){this.a=d
this.b=e},
bXD:function bXD(d,e){this.a=d
this.b=e},
bXH:function bXH(d){this.a=d},
bXI:function bXI(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[440]
C=a.updateHolder(c[132],C)
D=c[441]
C.yN.prototype={
R(){return new C.aGp(A.aL(y.N))}}
C.aGp.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.db(e.c,new C.bXE(h)).d_(0,0,new C.bXF()),a4=h.a.d+a3,a5=a1?a4:A.iN(B.k.a9(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.W(22)
x=y.p
w=A.a([],x)
for(v=A.eU(h.a.c,0,y.P),u=J.ar(v.a),t=v.b,v=new A.cg(u,t,A.u(v).i("cg<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.a0(t+o,u.gE(u)):A.al(A.c9())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.q(0,m.h(n,f))
o=o.a===0?g:B.mN
m=r.q(0,m.h(n,f))?$.at:B.t
if(r.q(0,J.i(p.a,f)))k=g
else{j=new A.bf(B.V,1.5,B.ai,-1)
k=new A.dO(j,j,j,j)}i=r.q(0,J.i(p.a,f))?E.Ed:g
k=A.A(g,i,B.r,g,g,new A.K(m,g,k,g,g,g,B.as),g,22,g,g,g,g,22)
m=A.a([A.h(A.Z(J.i(p.a,"name")),g,g,g,g,B.a9,g,g,g)],x)
i=s.a(J.i(p.a,"details"))
if(J.dK(i==null?B.ak:i))m.push(A.h(J.kG(q.a(J.i(p.a,"details"))," \xb7 "),g,g,g,g,B.M,g,g,g))
o=A.A(g,A.O(A.a([k,B.ad,new A.bQ(1,B.au,A.B(m,B.G,B.h,B.J),g),B.af,A.h("+ "+A.aK(A.du(J.i(p.a,"amount")),!1),g,g,g,g,B.a9,g,g,g)],x),B.v,B.h,B.l,0,g),B.r,g,B.hW,o,g,g,g,g,g,g,g)
w.push(new A.ju(new A.n7(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a3,g,g,g,g),!1,!1,g,!1,!1,new A.ih(o,new C.bXG(p,h),g,g),g))}e=A.a([new A.Ge(d,"Queres juntar alguma coisa?",e,g,g),B.a0,A.A(g,A.B(w,B.v,B.h,B.l),B.r,g,g,new A.K(B.a5,g,g,a0,g,g,B.x),g,g,g,B.cG,g,g,g),B.a0],x)
if(!a1)e.push(A.O(A.a([D.azG,A.h(A.aK(a4,!1),g,g,g,g,B.M,g,g,g)],x),B.v,B.h,B.l,0,g))
e.push(B.aF)
e.push(A.O(A.a([A.a5(A.h(a1?"A pagar agora":"Sinal ("+B.k.aL(a2*100)+" %) agora",g,g,g,g,B.M,g,g,g),1),A.h(A.aK(a5,!0),g,g,g,g,B.c1,g,g,g)],x),B.v,B.h,B.l,0,g))
e.push(E.JQ)
e.push(B.bi)
e.push(A.O(A.a([A.a5(A.aW(A.A(B.K,D.c7n,B.r,g,g,E.a7P,g,52,g,g,g,g,g),new C.bXH(a6),g),1),B.ae,A.a5(A.aW(A.A(B.K,A.h("Continuar \xb7 "+A.aK(a5,!0),1,g,g,g,B.za,g,g,g),B.r,g,g,B.Hv,g,52,g,g,g,g,g),new C.bXI(h,a6),g),2)],x),B.v,B.h,B.l,0,g))
return A.dT(A.B(e,B.E,B.h,B.J),B.y,g,B.ao,g,B.av)}}
var z=a.updateTypes([])
C.bXE.prototype={
$1(d){return this.a.d.q(0,J.i(d,"id"))},
$S:34}
C.bXF.prototype={
$2(d,e){return d+A.du(J.i(e,"amount"))},
$S:181}
C.bXG.prototype={
$0(){var x=this.b
return x.p(new C.bXD(this.a,x))},
$S:0}
C.bXD.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.q(0,J.i(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.M(0,x.h(v,"id")):w.C(0,A.Z(x.h(v,"id")))},
$S:0}
C.bXH.prototype={
$0(){return A.am(this.a,!1).ae(A.aL(y.N))},
$S:0}
C.bXI.prototype={
$0(){return A.am(this.b,!1).ae(A.eE(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yN,A.G)
x(C.aGp,A.Y)
x(C.bXE,A.bw)
x(C.bXF,A.cL)
w(A.bO,[C.bXG,C.bXD,C.bXH,C.bXI])})()
A.br(b.typeUniverse,JSON.parse('{"yN":{"G":[],"e":[],"f":[]},"aGp":{"Y":["yN"]}}'))
var y=(function rtii(){var x=A.w
return{t:x("r<a6<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a6<c,@>"),f:x("a6<@,@>"),N:x("c"),q:x("dr"),z:x("@"),g:x("t<@>?"),a:x("+(T,T)?"),B:x("+(t<a6<c,@>>,T,T)?")}})();(function constants(){D.cdB=new A.D("Reserva + extras",null,B.M,null,null,null,null,null,null,null,null)
D.azG=new A.bQ(1,B.au,D.cdB,null)
D.c8Z=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.bZu=new A.bF(D.c8Z,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c7n=new A.D("Sem extras",null,B.c4,null,null,null,null,null,null,null,null)})()};
(a=>{a["39avnwk/0jJ9wcHsXtSZItjwAlo="]=a.current})($__dart_deferred_initializers__);