((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cZG(d){return typeof d=="number"?new A.ae(A.iY(C.k.F(d)*1000,0),0,!1):null},
cZF(d){var x,w,v,u=J.a7(d)
A.a1(u.h(d,"id"))
x=C.k.F(A.dt(u.h(d,"amount_cents")))
w=B.cZG(u.h(d,"arrival_date"))
v=B.cZG(u.h(d,"created"))
u=A.C(u.h(d,"status"))
return new B.De(x,w,v,u==null?"pending":u)},
b_E(d){return y.i.b(d)?J.d3(d,new B.b_F(),y.w).by(0):C.a9},
cQL(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.Mm
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
q=B.b_E(r.h(w,"currently_due"))
B.b_E(r.h(w,"eventually_due"))
p=B.b_E(r.h(w,"past_due"))
B.b_E(r.h(w,"pending_verification"))
r=A.C(r.h(w,"disabled_reason"))
o=v==null
n=A.C(o?k:J.h(v,"last4"))
A.C(o?k:J.h(v,"bank_name"))
m=J.a7(u)
l=A.aK(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aK(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.C(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.aj
return new B.mC(!0,x,t,s,q,p,r,n,o,m,J.d3(j,new B.b_D(),y.v).by(0),l)},
Hw(d){return B.dz6(d)},
dz6(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$Hw=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.T().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d5(d,n,m)
if($.aTX)J.b6(s,"scope","organizer")
x=7
return A.d(o.f6("connect-account",s),$async$Hw)
case 7:r=f
s=J.h6(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a9(k)
if(s instanceof A.pf){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.C(J.h(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.C(J.h(p,"message")):null
throw A.p(new B.wW(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Hw,w)},
De:function De(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
mC:function mC(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
b_F:function b_F(){},
b_D:function b_D(){},
wW:function wW(d,e){this.a=d
this.b=e},
cIf:function cIf(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[119],B)
D=c[346]
B.De.prototype={
gQ_(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mC.prototype={
gGi(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.wW.prototype={$ibf:1}
var z=a.updateTypes(["De(@)","F<mC>(av)"])
B.b_F.prototype={
$1(d){return J.cx(d)},
$S:69}
B.b_D.prototype={
$1(d){return B.cZF(y.B.a(d))},
$S:z+0}
B.cIf.prototype={
$1(d){return this.aGf(d)},
aGf(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.Hw(A.S(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cQL(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.I,[B.De,B.mC,B.wW])
x(A.bx,[B.b_F,B.b_D,B.cIf])})()
A.br(b.typeUniverse,JSON.parse('{"wW":{"bf":[]}}'))
var y={v:A.w("De"),F:A.w("mC"),i:A.w("t<@>"),y:A.w("a4<c,@>"),B:A.w("a4<@,@>"),w:A.w("c"),b:A.w("@"),d:A.w("t<@>?"),u:A.w("a4<@,@>?")};(function constants(){var x=a.makeConstList
D.bzf=x([],A.w("r<De>"))
D.Mm=new B.mC(!1,!1,!1,!1,C.a9,C.a9,null,null,0,0,D.bzf,"manual")})();(function staticFields(){$.aTX=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTH","ze",()=>C.bU.$1$1(new B.cIf(),y.F))})()};
(a=>{a["0HAG4lwSvAr2YSGGR3X1DE4cICE="]=a.current})($__dart_deferred_initializers__);