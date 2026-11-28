((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZY(d){return C.dFu(d)},
dFu(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZY=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.R().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aM("booking_extra_options",A.T(["p_booking_id",d],m,l),l),$async$ZY)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.ap(n==null?B.am:n)
k=y.f
while(n.t()){q=n.gE(n)
J.bu(r,J.hb(k.a(q),m,l))}p=r
if(J.aR(p)===0){v=null
x=1
break}r=$.R().b
r===$&&A.b()
x=8
return A.d(r.R("bookings").am(0,"total_amount, deposit_amount").V("id",d).dP(0),$async$ZY)
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
return A.m($async$ZY,w)},
aUo(d,e,f){return C.dD7(d,e,f)},
dD7(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUo=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.R().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aM("add_booking_extras",A.T(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aUo)
case 7:s=h
r=J.hb(y.f.a(s),p,o)
o=A.ds(J.i(r,"total"))
p=A.ds(J.i(r,"deposit"))
v=new A.a1(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a3(D.c_L)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUo,w)},
yP:function yP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGD:function aGD(d){this.d=d
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
E=c[438]
C=a.updateHolder(c[132],C)
D=c[439]
C.yP.prototype={
P(){return new C.aGD(A.aJ(y.N))}}
C.aGD.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.d7(e.c,new C.bX9(h)).cY(0,0,new C.bXa()),a4=h.a.d+a3,a5=a1?a4:A.iN(B.k.a8(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.W(22)
x=y.p
w=A.a([],x)
for(v=A.eB(h.a.c,0,y.P),u=J.ap(v.a),t=v.b,v=new A.c2(u,t,A.u(v).i("c2<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.a1(t+o,u.gE(u)):A.ak(A.c4())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.q(0,m.h(n,f))
o=o.a===0?g:B.n_
m=r.q(0,m.h(n,f))?$.at:B.t
if(r.q(0,J.i(p.a,f)))k=g
else{j=new A.bb(B.V,1.5,B.ai,-1)
k=new A.dS(j,j,j,j)}i=r.q(0,J.i(p.a,f))?E.EA:g
k=A.B(g,i,B.r,g,g,new A.L(m,g,k,g,g,g,B.aw),g,22,g,g,g,g,22)
m=A.a([A.h(A.a_(J.i(p.a,"name")),g,g,g,g,B.ae,g,g,g)],x)
i=s.a(J.i(p.a,"details"))
if(J.dJ(i==null?B.am:i))m.push(A.h(J.kF(q.a(J.i(p.a,"details"))," \xb7 "),g,g,g,g,B.O,g,g,g))
o=A.B(g,A.N(A.a([k,B.af,new A.bJ(1,B.au,A.y(m,B.H,B.h,B.K,0,B.u),g),B.ah,A.h("+ "+A.aM(A.ds(J.i(p.a,"amount")),!1),g,g,g,g,B.ae,g,g,g)],x),B.w,B.h,B.l,0,g,g),B.r,g,B.i4,o,g,g,g,g,g,g,g)
w.push(new A.jp(new A.n3(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,g,g),!1,!1,g,!1,!1,new A.hz(o,new C.bXb(p,h),g,g),g))}e=A.a([new A.Gg(d,"Queres juntar alguma coisa?",e,g,g),B.a1,A.B(g,A.y(w,B.w,B.h,B.l,0,B.u),B.r,g,g,new A.L(B.a7,g,g,a0,g,g,B.y),g,g,g,B.cP,g,g,g),B.a1],x)
if(!a1)e.push(A.N(A.a([D.aAD,A.h(A.aM(a4,!1),g,g,g,g,B.O,g,g,g)],x),B.w,B.h,B.l,0,g,g))
e.push(B.aF)
e.push(A.N(A.a([A.a4(A.h(a1?"A pagar agora":"Sinal ("+B.k.aK(a2*100)+" %) agora",g,g,g,g,B.O,g,g,g),1),A.h(A.aM(a5,!0),g,g,g,g,B.c2,g,g,g)],x),B.w,B.h,B.l,0,g,g))
e.push(E.Ki)
e.push(B.bj)
e.push(A.N(A.a([A.a4(A.aW(A.B(B.L,D.c8N,B.r,g,g,E.a8t,g,52,g,g,g,g,g),new C.bXc(a6),g),1),B.ag,A.a4(A.aW(A.B(B.L,A.h("Continuar \xb7 "+A.aM(a5,!0),1,g,g,g,B.IV,g,g,g),B.r,g,g,B.HQ,g,52,g,g,g,g,g),new C.bXd(h,a6),g),2)],x),B.w,B.h,B.l,0,g,g))
return A.dQ(A.y(e,B.G,B.h,B.K,0,B.u),B.z,g,B.aq,g,g,B.a3)}}
var z=a.updateTypes([])
C.bX9.prototype={
$1(d){return this.a.d.q(0,J.i(d,"id"))},
$S:33}
C.bXa.prototype={
$2(d,e){return d+A.ds(J.i(e,"amount"))},
$S:155}
C.bXb.prototype={
$0(){var x=this.b
return x.p(new C.bX8(this.a,x))},
$S:0}
C.bX8.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.q(0,J.i(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.L(0,x.h(v,"id")):w.B(0,A.a_(x.h(v,"id")))},
$S:0}
C.bXc.prototype={
$0(){return A.am(this.a,!1).ae(A.aJ(y.N))},
$S:0}
C.bXd.prototype={
$0(){return A.am(this.b,!1).ae(A.eL(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yP,A.G)
x(C.aGD,A.Y)
x(C.bX9,A.by)
x(C.bXa,A.cN)
w(A.bR,[C.bXb,C.bX8,C.bXc,C.bXd])})()
A.bq(b.typeUniverse,JSON.parse('{"yP":{"G":[],"e":[],"f":[]},"aGD":{"Y":["yP"]}}'))
var y=(function rtii(){var x=A.w
return{t:x("r<a5<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),N:x("c"),q:x("dn"),z:x("@"),g:x("t<@>?"),a:x("+(S,S)?"),B:x("+(t<a5<c,@>>,S,S)?")}})();(function constants(){D.cf3=new A.D("Reserva + extras",null,B.O,null,null,null,null,null,null,null,null)
D.aAD=new A.bJ(1,B.au,D.cf3,null)
D.caq=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.c_L=new A.bG(D.caq,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.z,null)
D.c8N=new A.D("Sem extras",null,B.bY,null,null,null,null,null,null,null,null)})()};
(a=>{a["SnWhqq+NAJpi6PQWSQFJ+K2zczY="]=a.current})($__dart_deferred_initializers__);