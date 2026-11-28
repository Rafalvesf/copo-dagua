((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZY(d){return C.dHo(d)},
dHo(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZY=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.P().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aG("booking_extra_options",A.R(["p_booking_id",d],m,l),l),$async$ZY)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.ao(n==null?B.aj:n)
k=y.f
while(n.q()){q=n.gE(n)
J.ba(r,J.h2(k.a(q),m,l))}p=r
if(J.aN(p)===0){v=null
x=1
break}r=$.P().b
r===$&&A.b()
x=8
return A.d(r.P("bookings").al(0,"total_amount, deposit_amount").V("id",d).e9(0),$async$ZY)
case 8:o=f
r=A.dv(J.h(o,"total_amount"))
n=A.dv(J.h(o,"deposit_amount"))
v=new A.bX(p,r,n)
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
return A.m($async$ZY,w)},
aUc(d,e,f){return C.dF_(d,e,f)},
dF_(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUc=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.P().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aG("add_booking_extras",A.R(["p_booking_id",e,"p_extra_ids",f.bx(0)],p,o),o),$async$aUc)
case 7:s=h
r=J.h2(y.f.a(s),p,o)
o=A.dv(J.h(r,"total"))
p=A.dv(J.h(r,"deposit"))
v=new A.X(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a0(D.bYx)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUc,w)},
yN:function yN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGv:function aGv(d){this.d=d
this.c=this.a=null},
bXQ:function bXQ(d){this.a=d},
bXR:function bXR(){},
bXS:function bXS(d,e){this.a=d
this.b=e},
bXP:function bXP(d,e){this.a=d
this.b=e},
bXT:function bXT(d){this.a=d},
bXU:function bXU(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[441]
C=a.updateHolder(c[133],C)
D=c[442]
C.yN.prototype={
R(){return new C.aGv(A.aL(y.N))}}
C.aGv.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.db(e.c,new C.bXQ(h)).cV(0,0,new C.bXR()),a4=h.a.d+a3,a5=a1?a4:A.iO(B.k.a8(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.W(22)
x=y.p
w=A.a([],x)
for(v=A.eu(h.a.c,0,y.P),u=J.ao(v.a),t=v.b,v=new A.bY(u,t,A.u(v).i("bY<1>")),s=y.g,r=h.d,q=y.j;v.q();){p={}
o=v.c
o=o>=0?new A.X(t+o,u.gE(u)):A.an(A.c1())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.t(0,m.h(n,f))
o=o.a===0?g:B.mI
m=r.t(0,m.h(n,f))?$.au:B.t
if(r.t(0,J.h(p.a,f)))k=g
else{j=new A.be(B.W,1.5,B.ag,-1)
k=new A.dN(j,j,j,j)}i=r.t(0,J.h(p.a,f))?E.E7:g
k=A.x(g,i,B.r,g,g,new A.J(m,g,k,g,g,g,B.ap),g,22,g,g,g,g,22)
m=A.a([A.i(A.Y(J.h(p.a,"name")),g,g,g,g,B.a9,g,g)],x)
i=s.a(J.h(p.a,"details"))
if(J.dR(i==null?B.aj:i))m.push(A.i(J.kL(q.a(J.h(p.a,"details"))," \xb7 "),g,g,g,g,B.L,g,g))
o=A.x(g,A.O(A.a([k,B.af,new A.bK(1,B.at,A.y(m,B.G,B.h,B.J),g),B.ae,A.i("+ "+A.aJ(A.dv(J.h(p.a,"amount")),!1),g,g,g,g,B.a9,g,g)],x),B.u,B.h,B.l,0,g),B.r,g,B.hl,o,g,g,g,g,g,g,g)
w.push(new A.js(new A.n6(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,g,g),!1,!1,g,!1,!1,new A.hz(o,new C.bXS(p,h),g,g),g))}e=A.a([new A.Gk(d,"Queres juntar alguma coisa?",e,g,g),B.a_,A.x(g,A.y(w,B.u,B.h,B.l),B.r,g,g,new A.J(B.a3,g,g,a0,g,g,B.x),g,g,g,B.cs,g,g,g),B.a_],x)
if(!a1)e.push(A.O(A.a([D.azi,A.i(A.aJ(a4,!1),g,g,g,g,B.L,g,g)],x),B.u,B.h,B.l,0,g))
e.push(B.aC)
e.push(A.O(A.a([A.a5(A.i(a1?"A pagar agora":"Sinal ("+B.k.aN(a2*100)+" %) agora",g,g,g,g,B.L,g,g),1),A.i(A.aJ(a5,!0),g,g,g,g,B.c6,g,g)],x),B.u,B.h,B.l,0,g))
e.push(E.JE)
e.push(B.bj)
e.push(A.O(A.a([A.a5(A.aX(A.x(B.K,D.cee,B.r,g,g,E.a7H,g,52,g,g,g,g,g),new C.bXT(a6),g),1),B.ac,A.a5(A.aX(A.x(B.K,A.i("Continuar \xb7 "+A.aJ(a5,!0),1,g,g,g,B.z4,g,g),B.r,g,g,B.Hl,g,52,g,g,g,g,g),new C.bXU(h,a6),g),2)],x),B.u,B.h,B.l,0,g))
return A.dS(A.y(e,B.E,B.h,B.J),B.y,g,B.al,g,B.av)}}
var z=a.updateTypes([])
C.bXQ.prototype={
$1(d){return this.a.d.t(0,J.h(d,"id"))},
$S:32}
C.bXR.prototype={
$2(d,e){return d+A.dv(J.h(e,"amount"))},
$S:162}
C.bXS.prototype={
$0(){var x=this.b
return x.p(new C.bXP(this.a,x))},
$S:0}
C.bXP.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.t(0,J.h(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.K(0,x.h(v,"id")):w.C(0,A.Y(x.h(v,"id")))},
$S:0}
C.bXT.prototype={
$0(){return A.al(this.a,!1).ah(A.aL(y.N))},
$S:0}
C.bXU.prototype={
$0(){return A.al(this.b,!1).ah(A.eA(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yN,A.G)
x(C.aGv,A.a_)
x(C.bXQ,A.bu)
x(C.bXR,A.cK)
w(A.bL,[C.bXS,C.bXP,C.bXT,C.bXU])})()
A.br(b.typeUniverse,JSON.parse('{"yN":{"G":[],"e":[],"f":[]},"aGv":{"a_":["yN"]}}'))
var y=(function rtii(){var x=A.z
return{t:x("r<a3<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a3<c,@>"),f:x("a3<@,@>"),N:x("c"),q:x("dl"),z:x("@"),g:x("t<@>?"),a:x("+(T,T)?"),B:x("+(t<a3<c,@>>,T,T)?")}})();(function constants(){D.ceE=new A.D("Reserva + extras",null,B.L,null,null,null,null,null,null,null)
D.azi=new A.bK(1,B.at,D.ceE,null)
D.cbB=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null)
D.bYx=new A.bF(D.cbB,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cee=new A.D("Sem extras",null,B.c3,null,null,null,null,null,null,null)})()};
(a=>{a["bMkRRvfr2KArBlv46CLivajdIGo="]=a.current})($__dart_deferred_initializers__);