((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cZI(d){return typeof d=="number"?new A.ae(A.iY(C.k.F(d)*1000,0),0,!1):null},
cZH(d){var x,w,v,u=J.a7(d)
A.a1(u.h(d,"id"))
x=C.k.F(A.dt(u.h(d,"amount_cents")))
w=B.cZI(u.h(d,"arrival_date"))
v=B.cZI(u.h(d,"created"))
u=A.C(u.h(d,"status"))
return new B.Df(x,w,v,u==null?"pending":u)},
b_E(d){return y.i.b(d)?J.d3(d,new B.b_F(),y.w).by(0):C.a9},
cQN(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.Mj
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.jK
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.jK
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
if(j==null)j=C.ak
return new B.mC(!0,x,t,s,q,p,r,n,o,m,J.d3(j,new B.b_D(),y.v).by(0),l)},
Hv(d){return B.dz5(d)},
dz5(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$Hv=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.T().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d5(d,n,m)
if($.aTY)J.b6(s,"scope","organizer")
x=7
return A.d(o.f6("connect-account",s),$async$Hv)
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
if(s instanceof A.pg){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.C(J.h(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.C(J.h(p,"message")):null
throw A.p(new B.wY(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Hv,w)},
Df:function Df(d,e,f,g){var _=this
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
wY:function wY(d,e){this.a=d
this.b=e},
cIh:function cIh(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[118],B)
D=c[349]
B.Df.prototype={
gPQ(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mC.prototype={
gGc(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.wY.prototype={$ibf:1}
var z=a.updateTypes(["Df(@)","F<mC>(av)"])
B.b_F.prototype={
$1(d){return J.cx(d)},
$S:70}
B.b_D.prototype={
$1(d){return B.cZH(y.B.a(d))},
$S:z+0}
B.cIh.prototype={
$1(d){return this.aG8(d)},
aG8(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.Hv(A.S(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cQN(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.I,[B.Df,B.mC,B.wY])
x(A.bx,[B.b_F,B.b_D,B.cIh])})()
A.bq(b.typeUniverse,JSON.parse('{"wY":{"bf":[]}}'))
var y={v:A.w("Df"),F:A.w("mC"),i:A.w("t<@>"),y:A.w("a4<c,@>"),B:A.w("a4<@,@>"),w:A.w("c"),b:A.w("@"),d:A.w("t<@>?"),u:A.w("a4<@,@>?")};(function constants(){var x=a.makeConstList
D.bzk=x([],A.w("r<Df>"))
D.Mj=new B.mC(!1,!1,!1,!1,C.a9,C.a9,null,null,0,0,D.bzk,"manual")})();(function staticFields(){$.aTY=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTH","zh",()=>C.bU.$1$1(new B.cIh(),y.F))})()};
(a=>{a["oFDuVJyHbmQYrtNh2GwS4Kxzw+U="]=a.current})($__dart_deferred_initializers__);