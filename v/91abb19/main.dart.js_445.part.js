((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZC(d){return C.dCc(d)},
dCc(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZC=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.T().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aT("booking_extra_options",A.S(["p_booking_id",d],m,l),l),$async$ZC)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.aq(n==null?B.al:n)
k=y.f
while(n.t()){q=n.gE(n)
J.bt(r,J.h7(k.a(q),m,l))}p=r
if(J.aR(p)===0){v=null
x=1
break}r=$.T().b
r===$&&A.b()
x=8
return A.d(r.R("bookings").az(0,"total_amount, deposit_amount").X("id",d).dP(0),$async$ZC)
case 8:o=f
r=A.du(J.i(o,"total_amount"))
n=A.du(J.i(o,"deposit_amount"))
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
return A.m($async$ZC,w)},
aTH(d,e,f){return C.dzS(d,e,f)},
dzS(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aTH=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.T().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aT("add_booking_extras",A.S(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aTH)
case 7:s=h
r=J.h7(y.f.a(s),p,o)
o=A.du(J.i(r,"total"))
p=A.du(J.i(r,"deposit"))
v=new A.a3(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a4(D.c_r)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aTH,w)},
yM:function yM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aG_:function aG_(d){this.d=d
this.c=this.a=null},
bVH:function bVH(d){this.a=d},
bVI:function bVI(){},
bVJ:function bVJ(d,e){this.a=d
this.b=e},
bVG:function bVG(d,e){this.a=d
this.b=e},
bVK:function bVK(d){this.a=d},
bVL:function bVL(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[429]
C=a.updateHolder(c[130],C)
D=c[430]
C.yM.prototype={
P(){return new C.aG_(A.aH(y.N))}}
C.aG_.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.dc(e.c,new C.bVH(h)).d2(0,0,new C.bVI()),a4=h.a.d+a3,a5=a1?a4:A.iV(B.k.a8(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.Y(22)
x=y.p
w=A.a([],x)
for(v=A.eA(h.a.c,0,y.P),u=J.aq(v.a),t=v.b,v=new A.c0(u,t,A.u(v).i("c0<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.a3(t+o,u.gE(u)):A.aj(A.c2())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.p(0,m.h(n,f))
o=o.a===0?g:B.mN
m=r.p(0,m.h(n,f))?$.ar:B.t
if(r.p(0,J.i(p.a,f)))k=g
else{j=new A.bc(B.S,1.5,B.ag,-1)
k=new A.dR(j,j,j,j)}i=r.p(0,J.i(p.a,f))?E.Eu:g
k=A.A(g,i,B.r,g,g,new A.M(m,g,k,g,g,g,B.ax),g,22,g,g,g,g,22)
m=A.a([A.h(A.a2(J.i(p.a,"name")),g,g,g,g,B.aj,g,g,g)],x)
i=s.a(J.i(p.a,"details"))
if(J.dQ(i==null?B.al:i))m.push(A.h(J.ke(q.a(J.i(p.a,"details"))," \xb7 "),g,g,g,g,B.T,g,g,g))
o=A.A(g,A.P(A.a([k,B.ah,new A.bR(1,B.aw,A.B(m,B.G,B.i,B.K,0,B.v),g),B.am,A.h("+ "+A.aQ(A.du(J.i(p.a,"amount")),!1),g,g,g,g,B.aj,g,g,g)],x),B.w,B.i,B.m,0,g,g),B.r,g,B.jl,o,g,g,g,g,g,g,g)
w.push(new A.jY(new A.oG(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,g,g),!1,!1,g,!1,!1,new A.hv(o,new C.bVJ(p,h),g,g),g))}e=A.a([new A.G9(d,"Queres juntar alguma coisa?",e,g,g),B.a3,A.A(g,A.B(w,B.w,B.i,B.m,0,B.v),B.r,g,g,new A.M(B.ac,g,g,a0,g,g,B.y),g,g,g,B.dS,g,g,g),B.a3],x)
if(!a1)e.push(A.P(A.a([D.aAv,A.h(A.aQ(a4,!1),g,g,g,g,B.T,g,g,g)],x),B.w,B.i,B.m,0,g,g))
e.push(B.aE)
e.push(A.P(A.a([A.a5(A.h(a1?"A pagar agora":"Sinal ("+B.k.aK(a2*100)+" %) agora",g,g,g,g,B.T,g,g,g),1),A.h(A.aQ(a5,!0),g,g,g,g,B.c6,g,g,g)],x),B.w,B.i,B.m,0,g,g))
e.push(E.K7)
e.push(B.bg)
e.push(A.P(A.a([A.a5(A.aU(A.A(B.L,D.c8u,B.r,g,g,E.a8g,g,52,g,g,g,g,g),new C.bVK(a6),g),1),B.ai,A.a5(A.aU(A.A(B.L,A.h("Continuar \xb7 "+A.aQ(a5,!0),1,g,g,g,B.IK,g,g,g),B.r,g,g,B.HG,g,52,g,g,g,g,g),new C.bVL(h,a6),g),2)],x),B.w,B.i,B.m,0,g,g))
return A.dV(A.B(e,B.I,B.i,B.K,0,B.v),B.z,g,B.au,g,g,B.a1)}}
var z=a.updateTypes([])
C.bVH.prototype={
$1(d){return this.a.d.p(0,J.i(d,"id"))},
$S:35}
C.bVI.prototype={
$2(d,e){return d+A.du(J.i(e,"amount"))},
$S:155}
C.bVJ.prototype={
$0(){var x=this.b
return x.q(new C.bVG(this.a,x))},
$S:0}
C.bVG.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.p(0,J.i(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.K(0,x.h(v,"id")):w.B(0,A.a2(x.h(v,"id")))},
$S:0}
C.bVK.prototype={
$0(){return A.ap(this.a,!1).aj(A.aH(y.N))},
$S:0}
C.bVL.prototype={
$0(){return A.ap(this.b,!1).aj(A.eQ(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yM,A.H)
x(C.aG_,A.a_)
x(C.bVH,A.bx)
x(C.bVI,A.cQ)
w(A.bT,[C.bVJ,C.bVG,C.bVK,C.bVL])})()
A.bq(b.typeUniverse,JSON.parse('{"yM":{"H":[],"e":[],"f":[]},"aG_":{"a_":["yM"]}}'))
var y=(function rtii(){var x=A.w
return{t:x("r<a4<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),N:x("c"),q:x("dt"),z:x("@"),g:x("t<@>?"),a:x("+(R,R)?"),B:x("+(t<a4<c,@>>,R,R)?")}})();(function constants(){D.cex=new A.D("Reserva + extras",null,B.T,null,null,null,null,null,null,null,null)
D.aAv=new A.bR(1,B.aw,D.cex,null)
D.ca5=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.c_r=new A.bJ(D.ca5,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.z,null)
D.c8u=new A.D("Sem extras",null,B.c3,null,null,null,null,null,null,null,null)})()};
(a=>{a["QBLF9QQJqDv4fHrNIOsHhdyMy6U="]=a.current})($__dart_deferred_initializers__);