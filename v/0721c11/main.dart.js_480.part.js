((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={tf:function tf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},ciN:function ciN(){},ciL:function ciL(){},ciK:function ciK(){},Xg:function Xg(d,e){this.c=d
this.a=e},aQ3:function aQ3(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[71],B)
D=c[221]
B.tf.prototype={
gNJ(){switch(this.c){case"awaiting_deposit":var x="A aguardar sinal"
break
case"confirmed":x="Confirmado"
break
case"payment_overdue":x="Pagamento em atraso"
break
case"disputed":x="Em disputa"
break
case"completed":x="Conclu\xeddo"
break
default:x="Contratado"
break}return x},
gaF(d){return this.b}}
B.Xg.prototype={
u(d){var x,w,v,u,t,s,r=null,q=$.a4,p=y.p,o=A.a([],p)
for(x=J.aE(this.c);x.p();){w=x.gF(x)
v=$.e1
u=new A.aX(999,999)
t=new A.ba(q.bZ(0.25),1,C.ac,-1)
s=A.aJ(C.dy,q,r,r,13)
v=A.E(r,A.X(A.a([s,C.xk,new A.eo(1,C.bM,A.i(w,1,C.a4,r,new A.C(!0,q,r,r,r,r,14,C.bl,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r),r),A.aJ(C.h2,q,r,r,16)],p),C.x,C.m,C.a_,0,r,r),C.t,r,D.abX,new A.L(v,r,new A.eh(t,t,t,t),new A.bW(u,u,u,u),r,r,C.y),r,r,r,r,D.ao5,r,r,r)
o.push(new A.mf(new A.zf(r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,"Contratado na app: "+w+". Abrir reservas",r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,C.a6,r,r,r,r),!1,!1,r,!1,!1,new A.hZ(v,new B.aQ3(d),r,r),r))}return A.ef(C.bj,o,C.t,C.bw,6,6)}}
var z=a.updateTypes(["H<t<tf>>(ax,c)"])
B.ciN.prototype={
$2(d,e){return this.azP(d,e)},
azP(a3,a4){var x=0,w=A.n(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$$2=A.j(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:u=4
l=$.Z().b
l===$&&A.b()
x=7
return A.d(l.S("bookings").aP(0,"status, total_amount, partner_profiles(business_name, cover_photo_url, partner_profile_categories(partner_categories(slug)))").a0("wedding_id",a4).fC("status",D.bnP),$async$$2)
case 7:s=a6
r=A.a([],y.K)
for(l=y.P,k=J.bA(s,l),j=A.r(k),k=new A.ap(k,k.gv(k),j.i("ap<a8.E>")),i=y.h,h=y.g,j=j.i("a8.E");k.p();){g=k.d
q=g==null?j.a(g):g
p=i.a(J.h(q,"partner_profiles"))
g=p
g=A.P(g==null?null:J.h(g,"business_name"))
o=g==null?null:C.f.L(g)
if(o==null||o.length===0)continue
g=p
f=h.a(g==null?null:J.h(g,"partner_profile_categories"))
n=f==null?C.as:f
m=J.eg(n)?null:i.a(J.h(l.a(J.hA(n)),"partner_categories"))
g=m
g=A.P(g==null?null:J.h(g,"slug"))
if(g==null)g="other"
e=A.P(J.h(q,"status"))
if(e==null)e=""
d=A.b9(J.h(q,"total_amount"))
if(d==null)d=null
if(d==null)d=0
a0=p
J.cg(r,new B.tf(g,o,e,d,A.P(a0==null?null:J.h(a0,"cover_photo_url"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a2=t.pop()
v=D.DM
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$2,w)},
$S:z+0}
B.ciL.prototype={
$2(d,e){return this.azN(d,e)},
azN(d,e){var x=0,w=A.n(y.O),v,u,t,s,r,q,p
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=A.B(y.N,y.a)
p=J
x=3
return A.d(d.M($.cAT().$1(e).ghr(),y.B),$async$$2)
case 3:u=p.aE(g)
case 4:if(!u.p()){x=5
break}t=u.gF(u)
s=q.bS(0,t.a,new B.ciK())
t=t.b
r=J.a3(s)
if(!r.n(s,t))r.B(s,t)
x=4
break
case 5:v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:1181}
B.ciK.prototype={
$0(){return A.a([],y.s)},
$S:449}
B.aQ3.prototype={
$0(){return A.av(this.a).b5("/bookings",null,y.Q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.tf,A.F)
w(A.cD,[B.ciN,B.ciL])
w(A.bI,[B.ciK,B.aQ3])
x(B.Xg,A.M)})()
A.bx(b.typeUniverse,JSON.parse('{"Xg":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.v
return{B:x("H<t<tf>>"),K:x("q<tf>"),s:x("q<c>"),p:x("q<e>"),X:x("t<tf>"),a:x("t<c>"),P:x("a2<c,@>"),O:x("a2<c,t<c>>"),N:x("c"),g:x("t<@>?"),h:x("a2<c,@>?"),Q:x("F?")}})();(function constants(){var x=a.makeConstList
D.abX=new A.aK(0,1/0,32,1/0)
D.ao5=new A.V(8,5,6,5)
D.bnP=x(["awaiting_deposit","confirmed","payment_overdue","disputed","completed"],y.s)
D.DM=x([],y.K)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dqF","cAT",()=>C.bN.$2$1(new B.ciN(),y.X,y.N))
x($,"dqD","cAS",()=>C.bN.$2$1(new B.ciL(),y.O,y.N))})()};
(a=>{a["+4joUS6jDbieTofCqxmJB5rc0+E="]=a.current})($__dart_deferred_initializers__);