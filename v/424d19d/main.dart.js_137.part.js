((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d3D(d){return typeof d=="number"?new A.ad(A.jm(C.k.F(d)*1000,0),0,!1):null},
d3C(d){var x,w,v,u=J.a6(d)
A.a_(u.h(d,"id"))
x=C.k.F(A.ds(u.h(d,"amount_cents")))
w=B.d3D(u.h(d,"arrival_date"))
v=B.d3D(u.h(d,"created"))
u=A.A(u.h(d,"status"))
return new B.Dp(x,w,v,u==null?"pending":u)},
b0B(d){return y.i.b(d)?J.dl(d,new B.b0C(),y.w).bx(0):C.a6},
cVT(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a6(d)
if(!J.o(j.h(d,"has_account"),!0))return D.Mb
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.k_
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.k_
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a6(w)
q=B.b0B(r.h(w,"currently_due"))
B.b0B(r.h(w,"eventually_due"))
p=B.b0B(r.h(w,"past_due"))
B.b0B(r.h(w,"pending_verification"))
r=A.A(r.h(w,"disabled_reason"))
o=v==null
n=A.A(o?k:J.i(v,"last4"))
A.A(o?k:J.i(v,"bank_name"))
m=J.a6(u)
l=A.aD(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aD(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.A(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.aj
return new B.mI(!0,x,t,s,q,p,r,n,o,m,J.dl(j,new B.b0A(),y.v).bx(0),l)},
HM(d){return B.dEH(d)},
dEH(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HM=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d8(d,n,m)
if($.aUJ)J.b2(s,"scope","organizer")
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
if(s instanceof A.pp){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.A(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.A(J.i(p,"message")):null
throw A.q(new B.x5(o,s))}else throw k
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
b0C:function b0C(){},
b0A:function b0A(){},
x5:function x5(d,e){this.a=d
this.b=e},
cMJ:function cMJ(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[125],B)
D=c[356]
B.Dp.prototype={
gPv(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mI.prototype={
gG6(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.x5.prototype={$ibg:1}
var z=a.updateTypes(["Dp(@)","F<mI>(at)"])
B.b0C.prototype={
$1(d){return J.cy(d)},
$S:83}
B.b0A.prototype={
$1(d){return B.d3C(y.B.a(d))},
$S:z+0}
B.cMJ.prototype={
$1(d){return this.aFY(d)},
aFY(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HM(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cVT(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.M,[B.Dp,B.mI,B.x5])
x(A.bu,[B.b0C,B.b0A,B.cMJ])})()
A.br(b.typeUniverse,JSON.parse('{"x5":{"bg":[]}}'))
var y={v:A.B("Dp"),F:A.B("mI"),i:A.B("t<@>"),y:A.B("a3<c,@>"),B:A.B("a3<@,@>"),w:A.B("c"),b:A.B("@"),d:A.B("t<@>?"),u:A.B("a3<@,@>?")};(function constants(){var x=a.makeConstList
D.bz2=x([],A.B("r<Dp>"))
D.Mb=new B.mI(!1,!1,!1,!1,C.a6,C.a6,null,null,0,0,D.bz2,"manual")})();(function staticFields(){$.aUJ=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZR","zh",()=>C.bK.$1$1(new B.cMJ(),y.F))})()};
(a=>{a["xxMwxfA2hTnk7MhO3E1SZuHzSsw="]=a.current})($__dart_deferred_initializers__);