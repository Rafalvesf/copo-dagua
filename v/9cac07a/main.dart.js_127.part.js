((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d1u(d){return typeof d=="number"?new A.ad(A.j1(C.k.F(d)*1000,0),0,!1):null},
d1t(d){var x,w,v,u=J.a7(d)
A.a1(u.h(d,"id"))
x=C.k.F(A.ds(u.h(d,"amount_cents")))
w=B.d1u(u.h(d,"arrival_date"))
v=B.d1u(u.h(d,"created"))
u=A.D(u.h(d,"status"))
return new B.Dl(x,w,v,u==null?"pending":u)},
b0t(d){return y.i.b(d)?J.d7(d,new B.b0u(),y.w).by(0):C.a8},
cTA(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.MI
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.jX
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.jX
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a7(w)
q=B.b0t(r.h(w,"currently_due"))
B.b0t(r.h(w,"eventually_due"))
p=B.b0t(r.h(w,"past_due"))
B.b0t(r.h(w,"pending_verification"))
r=A.D(r.h(w,"disabled_reason"))
o=v==null
n=A.D(o?k:J.i(v,"last4"))
A.D(o?k:J.i(v,"bank_name"))
m=J.a7(u)
l=A.aL(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aL(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.D(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.am
return new B.mD(!0,x,t,s,q,p,r,n,o,m,J.d7(j,new B.b0s(),y.v).by(0),l)},
HE(d){return B.dC9(d)},
dC9(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HE=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.S().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d8(d,n,m)
if($.aUK)J.b2(s,"scope","organizer")
x=7
return A.d(o.f6("connect-account",s),$async$HE)
case 7:r=f
s=J.h8(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a9(k)
if(s instanceof A.pl){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.D(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.D(J.i(p,"message")):null
throw A.p(new B.x0(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HE,w)},
Dl:function Dl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
mD:function mD(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.x=j
_.y=k
_.Q=l
_.as=m
_.at=n
_.ax=o},
b0u:function b0u(){},
b0s:function b0s(){},
x0:function x0(d,e){this.a=d
this.b=e},
cKV:function cKV(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[123],B)
D=c[355]
B.Dl.prototype={
gQ8(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mD.prototype={
gGp(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.x0.prototype={$ibg:1}
var z=a.updateTypes(["Dl(@)","F<mD>(au)"])
B.b0u.prototype={
$1(d){return J.cA(d)},
$S:73}
B.b0s.prototype={
$1(d){return B.d1t(y.B.a(d))},
$S:z+0}
B.cKV.prototype={
$1(d){return this.aGN(d)},
aGN(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HE(A.T(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cTA(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.J,[B.Dl,B.mD,B.x0])
x(A.bx,[B.b0u,B.b0s,B.cKV])})()
A.bn(b.typeUniverse,JSON.parse('{"x0":{"bg":[]}}'))
var y={v:A.w("Dl"),F:A.w("mD"),i:A.w("t<@>"),y:A.w("a5<c,@>"),B:A.w("a5<@,@>"),w:A.w("c"),b:A.w("@"),d:A.w("t<@>?"),u:A.w("a5<@,@>?")};(function constants(){var x=a.makeConstList
D.bA_=x([],A.w("r<Dl>"))
D.MI=new B.mD(!1,!1,!1,!1,C.a8,C.a8,null,null,0,0,D.bA_,"manual")})();(function staticFields(){$.aUK=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWO","zi",()=>C.bX.$1$1(new B.cKV(),y.F))})()};
(a=>{a["YuuAIOqIngw9z2BAgJTFbVANYdg="]=a.current})($__dart_deferred_initializers__);