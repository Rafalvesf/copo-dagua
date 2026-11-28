((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZZ(d){return C.dG0(d)},
dG0(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.R().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aL("booking_extra_options",A.T(["p_booking_id",d],m,l),l),$async$ZZ)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.ao(n==null?B.am:n)
k=y.f
while(n.t()){q=n.gE(n)
J.bt(r,J.hb(k.a(q),m,l))}p=r
if(J.aR(p)===0){v=null
x=1
break}r=$.R().b
r===$&&A.b()
x=8
return A.d(r.P("bookings").al(0,"total_amount, deposit_amount").V("id",d).dR(0),$async$ZZ)
case 8:o=f
r=A.ds(J.i(o,"total_amount"))
n=A.ds(J.i(o,"deposit_amount"))
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
return A.m($async$ZZ,w)},
aUs(d,e,f){return C.dDE(d,e,f)},
dDE(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUs=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.R().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aL("add_booking_extras",A.T(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aUs)
case 7:s=h
r=J.hb(y.f.a(s),p,o)
o=A.ds(J.i(r,"total"))
p=A.ds(J.i(r,"deposit"))
v=new A.Z(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a2(D.c_Q)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUs,w)},
yP:function yP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGH:function aGH(d){this.d=d
this.c=this.a=null},
bXB:function bXB(d){this.a=d},
bXC:function bXC(){},
bXD:function bXD(d,e){this.a=d
this.b=e},
bXA:function bXA(d,e){this.a=d
this.b=e},
bXE:function bXE(d){this.a=d},
bXF:function bXF(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[438]
C=a.updateHolder(c[132],C)
D=c[439]
C.yP.prototype={
R(){return new C.aGH(A.aK(y.N))}}
C.aGH.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.d5(e.c,new C.bXB(h)).cZ(0,0,new C.bXC()),a4=h.a.d+a3,a5=a1?a4:A.iO(B.k.a8(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.V(22)
x=y.p
w=A.a([],x)
for(v=A.eB(h.a.c,0,y.P),u=J.ao(v.a),t=v.b,v=new A.c3(u,t,A.u(v).i("c3<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.Z(t+o,u.gE(u)):A.ak(A.c5())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.q(0,m.h(n,f))
o=o.a===0?g:B.n3
m=r.q(0,m.h(n,f))?$.au:B.t
if(r.q(0,J.i(p.a,f)))k=g
else{j=new A.bb(B.V,1.5,B.ai,-1)
k=new A.dN(j,j,j,j)}i=r.q(0,J.i(p.a,f))?E.EB:g
k=A.z(g,i,B.r,g,g,new A.I(m,g,k,g,g,g,B.aw),g,22,g,g,g,g,22)
m=A.a([A.h(A.a0(J.i(p.a,"name")),g,g,g,g,B.ab,g,g,g)],x)
i=s.a(J.i(p.a,"details"))
if(J.dJ(i==null?B.am:i))m.push(A.h(J.kF(q.a(J.i(p.a,"details"))," \xb7 "),g,g,g,g,B.N,g,g,g))
o=A.z(g,A.N(A.a([k,B.af,new A.bJ(1,B.at,A.x(m,B.H,B.h,B.K,0,B.u),g),B.ah,A.h("+ "+A.aM(A.ds(J.i(p.a,"amount")),!1),g,g,g,g,B.ab,g,g,g)],x),B.w,B.h,B.l,0,g,g),B.r,g,B.i5,o,g,g,g,g,g,g,g)
w.push(new A.jq(new A.n4(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,g,g),!1,!1,g,!1,!1,new A.hz(o,new C.bXD(p,h),g,g),g))}e=A.a([new A.Gf(d,"Queres juntar alguma coisa?",e,g,g),B.a1,A.z(g,A.x(w,B.w,B.h,B.l,0,B.u),B.r,g,g,new A.I(B.a7,g,g,a0,g,g,B.y),g,g,g,B.cK,g,g,g),B.a1],x)
if(!a1)e.push(A.N(A.a([D.aAJ,A.h(A.aM(a4,!1),g,g,g,g,B.N,g,g,g)],x),B.w,B.h,B.l,0,g,g))
e.push(B.aF)
e.push(A.N(A.a([A.a4(A.h(a1?"A pagar agora":"Sinal ("+B.k.aK(a2*100)+" %) agora",g,g,g,g,B.N,g,g,g),1),A.h(A.aM(a5,!0),g,g,g,g,B.c2,g,g,g)],x),B.w,B.h,B.l,0,g,g))
e.push(E.Ki)
e.push(B.bj)
e.push(A.N(A.a([A.a4(A.aW(A.z(B.L,D.c8S,B.r,g,g,E.a8u,g,52,g,g,g,g,g),new C.bXE(a6),g),1),B.ag,A.a4(A.aW(A.z(B.L,A.h("Continuar \xb7 "+A.aM(a5,!0),1,g,g,g,B.IV,g,g,g),B.r,g,g,B.HQ,g,52,g,g,g,g,g),new C.bXF(h,a6),g),2)],x),B.w,B.h,B.l,0,g,g))
return A.dR(A.x(e,B.G,B.h,B.K,0,B.u),B.z,g,B.aq,g,g,B.a3)}}
var z=a.updateTypes([])
C.bXB.prototype={
$1(d){return this.a.d.q(0,J.i(d,"id"))},
$S:33}
C.bXC.prototype={
$2(d,e){return d+A.ds(J.i(e,"amount"))},
$S:182}
C.bXD.prototype={
$0(){var x=this.b
return x.p(new C.bXA(this.a,x))},
$S:0}
C.bXA.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.q(0,J.i(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.L(0,x.h(v,"id")):w.B(0,A.a0(x.h(v,"id")))},
$S:0}
C.bXE.prototype={
$0(){return A.am(this.a,!1).ae(A.aK(y.N))},
$S:0}
C.bXF.prototype={
$0(){return A.am(this.b,!1).ae(A.eL(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yP,A.G)
x(C.aGH,A.Y)
x(C.bXB,A.bz)
x(C.bXC,A.cN)
w(A.bR,[C.bXD,C.bXA,C.bXE,C.bXF])})()
A.br(b.typeUniverse,JSON.parse('{"yP":{"G":[],"e":[],"f":[]},"aGH":{"Y":["yP"]}}'))
var y=(function rtii(){var x=A.w
return{t:x("r<a5<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),N:x("c"),q:x("dn"),z:x("@"),g:x("t<@>?"),a:x("+(S,S)?"),B:x("+(t<a5<c,@>>,S,S)?")}})();(function constants(){D.cf6=new A.D("Reserva + extras",null,B.N,null,null,null,null,null,null,null,null)
D.aAJ=new A.bJ(1,B.at,D.cf6,null)
D.cav=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.c_Q=new A.bH(D.cav,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.c8S=new A.D("Sem extras",null,B.bX,null,null,null,null,null,null,null,null)})()};
(a=>{a["SHsU0+W4gW5/AU/2lBcTR6QqpH8="]=a.current})($__dart_deferred_initializers__);