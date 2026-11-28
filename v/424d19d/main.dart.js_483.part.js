((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZZ(d){return C.dGV(d)},
dGV(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.Q().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aG("booking_extra_options",A.R(["p_booking_id",d],m,l),l),$async$ZZ)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.ao(n==null?B.aj:n)
k=y.f
while(n.q()){q=n.gE(n)
J.bn(r,J.h2(k.a(q),m,l))}p=r
if(J.aO(p)===0){v=null
x=1
break}r=$.Q().b
r===$&&A.b()
x=8
return A.d(r.S("bookings").an(0,"total_amount, deposit_amount").X("id",d).e9(0),$async$ZZ)
case 8:o=f
r=A.ds(J.i(o,"total_amount"))
n=A.ds(J.i(o,"deposit_amount"))
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
return A.m($async$ZZ,w)},
aU9(d,e,f){return C.dEu(d,e,f)},
dEu(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aU9=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.Q().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aG("add_booking_extras",A.R(["p_booking_id",e,"p_extra_ids",f.bx(0)],p,o),o),$async$aU9)
case 7:s=h
r=J.h2(y.f.a(s),p,o)
o=A.ds(J.i(r,"total"))
p=A.ds(J.i(r,"deposit"))
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
return A.m($async$aU9,w)},
yP:function yP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGt:function aGt(d){this.d=d
this.c=this.a=null},
bX9:function bX9(d){this.a=d},
bXa:function bXa(){},
bXb:function bXb(d,e){this.a=d
this.b=e},
bX8:function bX8(d,e){this.a=d
this.b=e},
bXc:function bXc(d){this.a=d},
bXd:function bXd(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[441]
C=a.updateHolder(c[133],C)
D=c[442]
C.yP.prototype={
P(){return new C.aGt(A.aN(y.N))}}
C.aGt.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.dm(e.c,new C.bX9(h)).cV(0,0,new C.bXa()),a4=h.a.d+a3,a5=a1?a4:A.iN(B.k.a8(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.W(22)
x=y.p
w=A.a([],x)
for(v=A.eu(h.a.c,0,y.P),u=J.ao(v.a),t=v.b,v=new A.bY(u,t,A.u(v).i("bY<1>")),s=y.g,r=h.d,q=y.j;v.q();){p={}
o=v.c
o=o>=0?new A.X(t+o,u.gE(u)):A.am(A.c1())
p.a=null
n=p.a=o.b
m=J.a6(n)
l=r.t(0,m.h(n,f))
o=o.a===0?g:B.mH
m=r.t(0,m.h(n,f))?$.au:B.t
if(r.t(0,J.i(p.a,f)))k=g
else{j=new A.bc(B.W,1.5,B.ag,-1)
k=new A.dN(j,j,j,j)}i=r.t(0,J.i(p.a,f))?E.E7:g
k=A.w(g,i,B.r,g,g,new A.J(m,g,k,g,g,g,B.ap),g,22,g,g,g,g,22)
m=A.a([A.h(A.a_(J.i(p.a,"name")),g,g,g,g,B.a9,g,g)],x)
i=s.a(J.i(p.a,"details"))
if(J.dQ(i==null?B.aj:i))m.push(A.h(J.kL(q.a(J.i(p.a,"details"))," \xb7 "),g,g,g,g,B.L,g,g))
o=A.w(g,A.O(A.a([k,B.af,new A.bK(1,B.at,A.x(m,B.G,B.h,B.J),g),B.ae,A.h("+ "+A.aJ(A.ds(J.i(p.a,"amount")),!1),g,g,g,g,B.a9,g,g)],x),B.u,B.h,B.l,0,g),B.r,g,B.hl,o,g,g,g,g,g,g,g)
w.push(new A.jt(new A.n8(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,g,g),!1,!1,g,!1,!1,new A.hz(o,new C.bXb(p,h),g,g),g))}e=A.a([new A.Gm(d,"Queres juntar alguma coisa?",e,g,g),B.a_,A.w(g,A.x(w,B.u,B.h,B.l),B.r,g,g,new A.J(B.a3,g,g,a0,g,g,B.x),g,g,g,B.cs,g,g,g),B.a_],x)
if(!a1)e.push(A.O(A.a([D.azk,A.h(A.aJ(a4,!1),g,g,g,g,B.L,g,g)],x),B.u,B.h,B.l,0,g))
e.push(B.aC)
e.push(A.O(A.a([A.a5(A.h(a1?"A pagar agora":"Sinal ("+B.k.aN(a2*100)+" %) agora",g,g,g,g,B.L,g,g),1),A.h(A.aJ(a5,!0),g,g,g,g,B.c6,g,g)],x),B.u,B.h,B.l,0,g))
e.push(E.JD)
e.push(B.bk)
e.push(A.O(A.a([A.a5(A.aX(A.w(B.K,D.ceg,B.r,g,g,E.a7E,g,52,g,g,g,g,g),new C.bXc(a6),g),1),B.ac,A.a5(A.aX(A.w(B.K,A.h("Continuar \xb7 "+A.aJ(a5,!0),1,g,g,g,B.z1,g,g),B.r,g,g,B.Hm,g,52,g,g,g,g,g),new C.bXd(h,a6),g),2)],x),B.u,B.h,B.l,0,g))
return A.dR(A.x(e,B.E,B.h,B.J),B.y,g,B.al,g,B.av)}}
var z=a.updateTypes([])
C.bX9.prototype={
$1(d){return this.a.d.t(0,J.i(d,"id"))},
$S:41}
C.bXa.prototype={
$2(d,e){return d+A.ds(J.i(e,"amount"))},
$S:183}
C.bXb.prototype={
$0(){var x=this.b
return x.n(new C.bX8(this.a,x))},
$S:0}
C.bX8.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.t(0,J.i(v.a,"id"))
v=v.a
x=J.a6(v)
return u?w.K(0,x.h(v,"id")):w.C(0,A.a_(x.h(v,"id")))},
$S:0}
C.bXc.prototype={
$0(){return A.an(this.a,!1).aq(A.aN(y.N))},
$S:0}
C.bXd.prototype={
$0(){return A.an(this.b,!1).aq(A.eE(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yP,A.G)
x(C.aGt,A.Z)
x(C.bX9,A.bu)
x(C.bXa,A.cL)
w(A.bL,[C.bXb,C.bX8,C.bXc,C.bXd])})()
A.br(b.typeUniverse,JSON.parse('{"yP":{"G":[],"e":[],"f":[]},"aGt":{"Z":["yP"]}}'))
var y=(function rtii(){var x=A.B
return{t:x("r<a3<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a3<c,@>"),f:x("a3<@,@>"),N:x("c"),q:x("dj"),z:x("@"),g:x("t<@>?"),a:x("+(T,T)?"),B:x("+(t<a3<c,@>>,T,T)?")}})();(function constants(){D.ceG=new A.D("Reserva + extras",null,B.L,null,null,null,null,null,null,null)
D.azk=new A.bK(1,B.at,D.ceG,null)
D.cbD=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null)
D.bYx=new A.bF(D.cbD,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.ceg=new A.D("Sem extras",null,B.c3,null,null,null,null,null,null,null)})()};
(a=>{a["Fs4+HDqD98P3U+xZtLBIUU+x/pg="]=a.current})($__dart_deferred_initializers__);