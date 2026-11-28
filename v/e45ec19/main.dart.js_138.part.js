((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d3S(d){return typeof d=="number"?new A.ad(A.jm(C.k.F(d)*1000,0),0,!1):null},
d3R(d){var x,w,v,u=J.a6(d)
A.a_(u.h(d,"id"))
x=C.k.F(A.dt(u.h(d,"amount_cents")))
w=B.d3S(u.h(d,"arrival_date"))
v=B.d3S(u.h(d,"created"))
u=A.B(u.h(d,"status"))
return new B.Dp(x,w,v,u==null?"pending":u)},
b0I(d){return y.i.b(d)?J.dl(d,new B.b0J(),y.w).bx(0):C.a6},
cW7(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a6(d)
if(!J.o(j.h(d,"has_account"),!0))return D.Mc
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.k0
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.k0
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a6(w)
q=B.b0I(r.h(w,"currently_due"))
B.b0I(r.h(w,"eventually_due"))
p=B.b0I(r.h(w,"past_due"))
B.b0I(r.h(w,"pending_verification"))
r=A.B(r.h(w,"disabled_reason"))
o=v==null
n=A.B(o?k:J.i(v,"last4"))
A.B(o?k:J.i(v,"bank_name"))
m=J.a6(u)
l=A.aE(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aE(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.B(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.aj
return new B.mI(!0,x,t,s,q,p,r,n,o,m,J.dl(j,new B.b0H(),y.v).bx(0),l)},
HO(d){return B.dEW(d)},
dEW(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HO=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d8(d,n,m)
if($.aUQ)J.b2(s,"scope","organizer")
x=7
return A.d(o.f2("connect-account",s),$async$HO)
case 7:r=f
s=J.h3(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a9(k)
if(s instanceof A.pp){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.B(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.B(J.i(p,"message")):null
throw A.q(new B.x6(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HO,w)},
Dp:function Dp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
mI:function mI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
b0J:function b0J(){},
b0H:function b0H(){},
x6:function x6(d,e){this.a=d
this.b=e},
cMV:function cMV(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[125],B)
D=c[356]
B.Dp.prototype={
gPw(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mI.prototype={
gG6(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.x6.prototype={$ibg:1}
var z=a.updateTypes(["Dp(@)","F<mI>(at)"])
B.b0J.prototype={
$1(d){return J.cy(d)},
$S:83}
B.b0H.prototype={
$1(d){return B.d3R(y.B.a(d))},
$S:z+0}
B.cMV.prototype={
$1(d){return this.aG_(d)},
aG_(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HO(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cW7(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.M,[B.Dp,B.mI,B.x6])
x(A.bu,[B.b0J,B.b0H,B.cMV])})()
A.br(b.typeUniverse,JSON.parse('{"x6":{"bg":[]}}'))
var y={v:A.A("Dp"),F:A.A("mI"),i:A.A("t<@>"),y:A.A("a3<c,@>"),B:A.A("a3<@,@>"),w:A.A("c"),b:A.A("@"),d:A.A("t<@>?"),u:A.A("a3<@,@>?")};(function constants(){var x=a.makeConstList
D.bzb=x([],A.A("r<Dp>"))
D.Mc=new B.mI(!1,!1,!1,!1,C.a6,C.a6,null,null,0,0,D.bzb,"manual")})();(function staticFields(){$.aUQ=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_5","zh",()=>C.bK.$1$1(new B.cMV(),y.F))})()};
(a=>{a["twP45ly7+eVPyphwkFMZ+u7H0Sk="]=a.current})($__dart_deferred_initializers__);