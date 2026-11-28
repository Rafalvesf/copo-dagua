((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d3j(d){return typeof d=="number"?new A.ac(A.j5(C.k.F(d)*1000,0),0,!1):null},
d3i(d){var x,w,v,u=J.a7(d)
A.a_(u.h(d,"id"))
x=C.k.F(A.du(u.h(d,"amount_cents")))
w=B.d3j(u.h(d,"arrival_date"))
v=B.d3j(u.h(d,"created"))
u=A.C(u.h(d,"status"))
return new B.Do(x,w,v,u==null?"pending":u)},
b0v(d){return y.i.b(d)?J.da(d,new B.b0w(),y.w).by(0):C.a6},
cVn(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.Mm
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.jY
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.jY
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a7(w)
q=B.b0v(r.h(w,"currently_due"))
B.b0v(r.h(w,"eventually_due"))
p=B.b0v(r.h(w,"past_due"))
B.b0v(r.h(w,"pending_verification"))
r=A.C(r.h(w,"disabled_reason"))
o=v==null
n=A.C(o?k:J.i(v,"last4"))
A.C(o?k:J.i(v,"bank_name"))
m=J.a7(u)
l=A.aF(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aF(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.C(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.ak
return new B.mH(!0,x,t,s,q,p,r,n,o,m,J.da(j,new B.b0u(),y.v).by(0),l)},
HF(d){return B.dE4(d)},
dE4(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HF=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.P().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.dd(d,n,m)
if($.aUG)J.b2(s,"scope","organizer")
x=7
return A.d(o.f5("connect-account",s),$async$HF)
case 7:r=f
s=J.h_(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a9(k)
if(s instanceof A.pm){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.C(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.C(J.i(p,"message")):null
throw A.p(new B.x0(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HF,w)},
Do:function Do(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
mH:function mH(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
b0w:function b0w(){},
b0u:function b0u(){},
x0:function x0(d,e){this.a=d
this.b=e},
cMw:function cMw(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[124],B)
D=c[359]
B.Do.prototype={
gQ0(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mH.prototype={
gGj(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.x0.prototype={$ibg:1}
var z=a.updateTypes(["Do(@)","F<mH>(at)"])
B.b0w.prototype={
$1(d){return J.cy(d)},
$S:68}
B.b0u.prototype={
$1(d){return B.d3i(y.B.a(d))},
$S:z+0}
B.cMw.prototype={
$1(d){return this.aGI(d)},
aGI(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HF(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cVn(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.J,[B.Do,B.mH,B.x0])
x(A.bw,[B.b0w,B.b0u,B.cMw])})()
A.bt(b.typeUniverse,JSON.parse('{"x0":{"bg":[]}}'))
var y={v:A.w("Do"),F:A.w("mH"),i:A.w("t<@>"),y:A.w("a4<c,@>"),B:A.w("a4<@,@>"),w:A.w("c"),b:A.w("@"),d:A.w("t<@>?"),u:A.w("a4<@,@>?")};(function constants(){var x=a.makeConstList
D.bzd=x([],A.w("r<Do>"))
D.Mm=new B.mH(!1,!1,!1,!1,C.a6,C.a6,null,null,0,0,D.bzd,"manual")})();(function staticFields(){$.aUG=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZ0","zh",()=>C.bP.$1$1(new B.cMw(),y.F))})()};
(a=>{a["BcldxjMN6E53E4bi+DyMS6Q0gDo="]=a.current})($__dart_deferred_initializers__);