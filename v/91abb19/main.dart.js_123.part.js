((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d_y(d){return typeof d=="number"?new A.ad(A.iZ(C.k.F(d)*1000,0),0,!1):null},
d_x(d){var x,w,v,u=J.a7(d)
A.a2(u.h(d,"id"))
x=C.k.F(A.du(u.h(d,"amount_cents")))
w=B.d_y(u.h(d,"arrival_date"))
v=B.d_y(u.h(d,"created"))
u=A.E(u.h(d,"status"))
return new B.Dh(x,w,v,u==null?"pending":u)},
b_U(d){return y.i.b(d)?J.d4(d,new B.b_V(),y.w).by(0):C.a9},
cRC(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.ME
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.jP
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.jP
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a7(w)
q=B.b_U(r.h(w,"currently_due"))
B.b_U(r.h(w,"eventually_due"))
p=B.b_U(r.h(w,"past_due"))
B.b_U(r.h(w,"pending_verification"))
r=A.E(r.h(w,"disabled_reason"))
o=v==null
n=A.E(o?k:J.i(v,"last4"))
A.E(o?k:J.i(v,"bank_name"))
m=J.a7(u)
l=A.aK(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aK(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.E(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.al
return new B.mD(!0,x,t,s,q,p,r,n,o,m,J.d4(j,new B.b_T(),y.v).by(0),l)},
Hz(d){return B.dA4(d)},
dA4(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$Hz=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.T().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d5(d,n,m)
if($.aUe)J.b6(s,"scope","organizer")
x=7
return A.d(o.f6("connect-account",s),$async$Hz)
case 7:r=f
s=J.h7(y.B.a(r.a),n,m)
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
return A.m($async$Hz,w)},
Dh:function Dh(d,e,f,g){var _=this
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
b_V:function b_V(){},
b_T:function b_T(){},
x_:function x_(d,e){this.a=d
this.b=e},
cJ6:function cJ6(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[121],B)
D=c[351]
B.Dh.prototype={
gPU(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mD.prototype={
gGe(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.x_.prototype={$ibg:1}
var z=a.updateTypes(["Dh(@)","F<mD>(au)"])
B.b_V.prototype={
$1(d){return J.cy(d)},
$S:68}
B.b_T.prototype={
$1(d){return B.d_x(y.B.a(d))},
$S:z+0}
B.cJ6.prototype={
$1(d){return this.aGk(d)},
aGk(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.Hz(A.S(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cRC(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.J,[B.Dh,B.mD,B.x_])
x(A.bx,[B.b_V,B.b_T,B.cJ6])})()
A.bq(b.typeUniverse,JSON.parse('{"x_":{"bg":[]}}'))
var y={v:A.w("Dh"),F:A.w("mD"),i:A.w("t<@>"),y:A.w("a4<c,@>"),B:A.w("a4<@,@>"),w:A.w("c"),b:A.w("@"),d:A.w("t<@>?"),u:A.w("a4<@,@>?")};(function constants(){var x=a.makeConstList
D.bzW=x([],A.w("r<Dh>"))
D.ME=new B.mD(!1,!1,!1,!1,C.a9,C.a9,null,null,0,0,D.bzW,"manual")})();(function staticFields(){$.aUe=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUH","zj",()=>C.bW.$1$1(new B.cJ6(),y.F))})()};
(a=>{a["Fd5JyV9TUbuMHGXG/Qztos711/Y="]=a.current})($__dart_deferred_initializers__);