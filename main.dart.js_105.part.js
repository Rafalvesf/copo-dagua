((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d3N(d){return typeof d=="number"?new A.aa(A.jk(C.k.F(d)*1000,0),0,!1):null},
d3M(d){var x,w,v,u=J.a6(d)
A.a0(u.h(d,"id"))
x=C.k.F(A.dt(u.h(d,"amount_cents")))
w=B.d3N(u.h(d,"arrival_date"))
v=B.d3N(u.h(d,"created"))
u=A.y(u.h(d,"status"))
return new B.Dp(x,w,v,u==null?"pending":u)},
b1g(d){return y.i.b(d)?J.dm(d,new B.b1h(),y.w).bx(0):C.a8},
cW3(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a6(d)
if(!J.o(j.h(d,"has_account"),!0))return D.Mp
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.k3
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.k3
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a6(w)
q=B.b1g(r.h(w,"currently_due"))
B.b1g(r.h(w,"eventually_due"))
p=B.b1g(r.h(w,"past_due"))
B.b1g(r.h(w,"pending_verification"))
r=A.y(r.h(w,"disabled_reason"))
o=v==null
n=A.y(o?k:J.i(v,"last4"))
A.y(o?k:J.i(v,"bank_name"))
m=J.a6(u)
l=A.aF(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aF(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.y(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.aj
return new B.mJ(!0,x,t,s,q,p,r,n,o,m,J.dm(j,new B.b1f(),y.v).bx(0),l)},
HM(d){return B.dF4(d)},
dF4(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HM=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d7(d,n,m)
if($.aVm)J.b3(s,"scope","organizer")
x=7
return A.d(o.f2("connect-account",s),$async$HM)
case 7:r=f
s=J.h2(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a9(k)
if(s instanceof A.pr){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.y(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.y(J.i(p,"message")):null
throw A.q(new B.x9(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HM,w)},
Dp:function Dp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
mJ:function mJ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
b1h:function b1h(){},
b1f:function b1f(){},
x9:function x9(d,e){this.a=d
this.b=e},
cMI:function cMI(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[126],B)
D=c[363]
B.Dp.prototype={
gPG(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mJ.prototype={
gG8(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.x9.prototype={$ibf:1}
var z=a.updateTypes(["Dp(@)","D<mJ>(at)"])
B.b1h.prototype={
$1(d){return J.cy(d)},
$S:87}
B.b1f.prototype={
$1(d){return B.d3M(y.B.a(d))},
$S:z+0}
B.cMI.prototype={
$1(d){return this.aGy(d)},
aGy(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HM(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cW3(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.L,[B.Dp,B.mJ,B.x9])
x(A.bv,[B.b1h,B.b1f,B.cMI])})()
A.bq(b.typeUniverse,JSON.parse('{"x9":{"bf":[]}}'))
var y={v:A.B("Dp"),F:A.B("mJ"),i:A.B("t<@>"),y:A.B("a4<c,@>"),B:A.B("a4<@,@>"),w:A.B("c"),b:A.B("@"),d:A.B("t<@>?"),u:A.B("a4<@,@>?")};(function constants(){var x=a.makeConstList
D.bz_=x([],A.B("r<Dp>"))
D.Mp=new B.mJ(!1,!1,!1,!1,C.a8,C.a8,null,null,0,0,D.bz_,"manual")})();(function staticFields(){$.aVm=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_f","zk",()=>C.bM.$1$1(new B.cMI(),y.F))})()};
(a=>{a["G1N8LUxufo5L9NpmJZjTNZlHYDE="]=a.current})($__dart_deferred_initializers__);