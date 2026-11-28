((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZW(d){return C.dH7(d)},
dH7(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZW=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.P().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aK("booking_extra_options",A.R(["p_booking_id",d],m,l),l),$async$ZW)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.ao(n==null?B.ai:n)
k=y.f
while(n.t()){q=n.gE(n)
J.br(r,J.h_(k.a(q),m,l))}p=r
if(J.aQ(p)===0){v=null
x=1
break}r=$.P().b
r===$&&A.b()
x=8
return A.d(r.P("bookings").ai(0,"total_amount, deposit_amount").U("id",d).dR(0),$async$ZW)
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
return A.m($async$ZW,w)},
aUi(d,e,f){return C.dEJ(d,e,f)},
dEJ(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUi=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.P().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aK("add_booking_extras",A.R(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aUi)
case 7:s=h
r=J.h_(y.f.a(s),p,o)
o=A.du(J.i(r,"total"))
p=A.du(J.i(r,"deposit"))
v=new A.X(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a2(D.bZT)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUi,w)},
yP:function yP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGC:function aGC(d){this.d=d
this.c=this.a=null},
bXY:function bXY(d){this.a=d},
bXZ:function bXZ(){},
bY_:function bY_(d,e){this.a=d
this.b=e},
bXX:function bXX(d,e){this.a=d
this.b=e},
bY0:function bY0(d){this.a=d},
bY1:function bY1(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[439]
C=a.updateHolder(c[132],C)
D=c[440]
C.yP.prototype={
R(){return new C.aGC(A.aL(y.N))}}
C.aGC.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.dd(e.c,new C.bXY(h)).d_(0,0,new C.bXZ()),a4=h.a.d+a3,a5=a1?a4:A.iP(B.k.a9(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.W(22)
x=y.p
w=A.a([],x)
for(v=A.ew(h.a.c,0,y.P),u=J.ao(v.a),t=v.b,v=new A.bX(u,t,A.u(v).i("bX<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.X(t+o,u.gE(u)):A.al(A.c0())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.q(0,m.h(n,f))
o=o.a===0?g:B.mP
m=r.q(0,m.h(n,f))?$.au:B.t
if(r.q(0,J.i(p.a,f)))k=g
else{j=new A.bh(B.W,1.5,B.aj,-1)
k=new A.dN(j,j,j,j)}i=r.q(0,J.i(p.a,f))?E.Em:g
k=A.y(g,i,B.r,g,g,new A.I(m,g,k,g,g,g,B.aq),g,22,g,g,g,g,22)
m=A.a([A.h(A.a_(J.i(p.a,"name")),g,g,g,g,B.a9,g,g,g)],x)
i=s.a(J.i(p.a,"details"))
if(J.dM(i==null?B.ai:i))m.push(A.h(J.kI(q.a(J.i(p.a,"details"))," \xb7 "),g,g,g,g,B.L,g,g,g))
o=A.y(g,A.O(A.a([k,B.ae,new A.bK(1,B.at,A.z(m,B.F,B.h,B.J),g),B.af,A.h("+ "+A.aK(A.du(J.i(p.a,"amount")),!1),g,g,g,g,B.a9,g,g,g)],x),B.v,B.h,B.l,0,g),B.r,g,B.ho,o,g,g,g,g,g,g,g)
w.push(new A.ju(new A.n9(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a3,g,g,g,g),!1,!1,g,!1,!1,new A.ih(o,new C.bY_(p,h),g,g),g))}e=A.a([new A.Gg(d,"Queres juntar alguma coisa?",e,g,g),B.a_,A.y(g,A.z(w,B.v,B.h,B.l),B.r,g,g,new A.I(B.a4,g,g,a0,g,g,B.x),g,g,g,B.cu,g,g,g),B.a_],x)
if(!a1)e.push(A.O(A.a([D.azW,A.h(A.aK(a4,!1),g,g,g,g,B.L,g,g,g)],x),B.v,B.h,B.l,0,g))
e.push(B.aF)
e.push(A.O(A.a([A.a4(A.h(a1?"A pagar agora":"Sinal ("+B.k.aL(a2*100)+" %) agora",g,g,g,g,B.L,g,g,g),1),A.h(A.aK(a5,!0),g,g,g,g,B.c1,g,g,g)],x),B.v,B.h,B.l,0,g))
e.push(E.JU)
e.push(B.bi)
e.push(A.O(A.a([A.a4(A.aW(A.y(B.K,D.c7M,B.r,g,g,E.a7W,g,52,g,g,g,g,g),new C.bY0(a6),g),1),B.ac,A.a4(A.aW(A.y(B.K,A.h("Continuar \xb7 "+A.aK(a5,!0),1,g,g,g,B.zf,g,g,g),B.r,g,g,B.HB,g,52,g,g,g,g,g),new C.bY1(h,a6),g),2)],x),B.v,B.h,B.l,0,g))
return A.dT(A.z(e,B.E,B.h,B.J),B.y,g,B.an,g,B.av)}}
var z=a.updateTypes([])
C.bXY.prototype={
$1(d){return this.a.d.q(0,J.i(d,"id"))},
$S:34}
C.bXZ.prototype={
$2(d,e){return d+A.du(J.i(e,"amount"))},
$S:170}
C.bY_.prototype={
$0(){var x=this.b
return x.p(new C.bXX(this.a,x))},
$S:0}
C.bXX.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.q(0,J.i(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.K(0,x.h(v,"id")):w.C(0,A.a_(x.h(v,"id")))},
$S:0}
C.bY0.prototype={
$0(){return A.am(this.a,!1).ae(A.aL(y.N))},
$S:0}
C.bY1.prototype={
$0(){return A.am(this.b,!1).ae(A.eB(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yP,A.G)
x(C.aGC,A.Z)
x(C.bXY,A.bx)
x(C.bXZ,A.cL)
w(A.bQ,[C.bY_,C.bXX,C.bY0,C.bY1])})()
A.bu(b.typeUniverse,JSON.parse('{"yP":{"G":[],"e":[],"f":[]},"aGC":{"Z":["yP"]}}'))
var y=(function rtii(){var x=A.x
return{t:x("r<a5<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),N:x("c"),q:x("dr"),z:x("@"),g:x("t<@>?"),a:x("+(T,T)?"),B:x("+(t<a5<c,@>>,T,T)?")}})();(function constants(){D.ce_=new A.D("Reserva + extras",null,B.L,null,null,null,null,null,null,null,null)
D.azW=new A.bK(1,B.at,D.ce_,null)
D.c9o=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.bZT=new A.bF(D.c9o,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c7M=new A.D("Sem extras",null,B.c5,null,null,null,null,null,null,null,null)})()};
(a=>{a["QM2k6o1wJD7XW11S64sc3PsvKbY="]=a.current})($__dart_deferred_initializers__);