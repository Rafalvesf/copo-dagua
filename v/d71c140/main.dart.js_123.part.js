((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d0a(d){return typeof d=="number"?new A.ac(A.j0(C.k.F(d)*1000,0),0,!1):null},
d09(d){var x,w,v,u=J.a7(d)
A.a2(u.h(d,"id"))
x=C.k.F(A.dv(u.h(d,"amount_cents")))
w=B.d0a(u.h(d,"arrival_date"))
v=B.d0a(u.h(d,"created"))
u=A.E(u.h(d,"status"))
return new B.Di(x,w,v,u==null?"pending":u)},
b0b(d){return y.i.b(d)?J.d4(d,new B.b0c(),y.w).by(0):C.a9},
cSe(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.MG
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.jS
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.jS
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a7(w)
q=B.b0b(r.h(w,"currently_due"))
B.b0b(r.h(w,"eventually_due"))
p=B.b0b(r.h(w,"past_due"))
B.b0b(r.h(w,"pending_verification"))
r=A.E(r.h(w,"disabled_reason"))
o=v==null
n=A.E(o?k:J.i(v,"last4"))
A.E(o?k:J.i(v,"bank_name"))
m=J.a7(u)
l=A.aL(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aL(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.E(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.am
return new B.mD(!0,x,t,s,q,p,r,n,o,m,J.d4(j,new B.b0a(),y.v).by(0),l)},
HA(d){return B.dAL(d)},
dAL(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HA=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.S().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d6(d,n,m)
if($.aUw)J.b6(s,"scope","organizer")
x=7
return A.d(o.f6("connect-account",s),$async$HA)
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
if(s instanceof A.pj){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.E(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.E(J.i(p,"message")):null
throw A.p(new B.x_(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HA,w)},
Di:function Di(d,e,f,g){var _=this
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
b0c:function b0c(){},
b0a:function b0a(){},
x_:function x_(d,e){this.a=d
this.b=e},
cJD:function cJD(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[122],B)
D=c[354]
B.Di.prototype={
gPX(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mD.prototype={
gGf(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.x_.prototype={$ibg:1}
var z=a.updateTypes(["Di(@)","F<mD>(au)"])
B.b0c.prototype={
$1(d){return J.cy(d)},
$S:68}
B.b0a.prototype={
$1(d){return B.d09(y.B.a(d))},
$S:z+0}
B.cJD.prototype={
$1(d){return this.aGp(d)},
aGp(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HA(A.T(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cSe(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.K,[B.Di,B.mD,B.x_])
x(A.bw,[B.b0c,B.b0a,B.cJD])})()
A.bp(b.typeUniverse,JSON.parse('{"x_":{"bg":[]}}'))
var y={v:A.w("Di"),F:A.w("mD"),i:A.w("t<@>"),y:A.w("a5<c,@>"),B:A.w("a5<@,@>"),w:A.w("c"),b:A.w("@"),d:A.w("t<@>?"),u:A.w("a5<@,@>?")};(function constants(){var x=a.makeConstList
D.bA2=x([],A.w("r<Di>"))
D.MG=new B.mD(!1,!1,!1,!1,C.a9,C.a9,null,null,0,0,D.bA2,"manual")})();(function staticFields(){$.aUw=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVp","zj",()=>C.bW.$1$1(new B.cJD(),y.F))})()};
(a=>{a["qsnb84L0409ReGif8X2CGcTPpMk="]=a.current})($__dart_deferred_initializers__);