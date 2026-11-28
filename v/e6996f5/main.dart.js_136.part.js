((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d3k(d){return typeof d=="number"?new A.ac(A.ji(C.k.F(d)*1000,0),0,!1):null},
d3j(d){var x,w,v,u=J.a7(d)
A.Y(u.h(d,"id"))
x=C.k.F(A.dv(u.h(d,"amount_cents")))
w=B.d3k(u.h(d,"arrival_date"))
v=B.d3k(u.h(d,"created"))
u=A.B(u.h(d,"status"))
return new B.Dg(x,w,v,u==null?"pending":u)},
b09(d){return y.i.b(d)?J.da(d,new B.b0a(),y.w).bx(0):C.a6},
cVr(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.Mb
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.jZ
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.jZ
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a7(w)
q=B.b09(r.h(w,"currently_due"))
B.b09(r.h(w,"eventually_due"))
p=B.b09(r.h(w,"past_due"))
B.b09(r.h(w,"pending_verification"))
r=A.B(r.h(w,"disabled_reason"))
o=v==null
n=A.B(o?k:J.i(v,"last4"))
A.B(o?k:J.i(v,"bank_name"))
m=J.a7(u)
l=A.aD(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aD(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.B(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.ai
return new B.mE(!0,x,t,s,q,p,r,n,o,m,J.da(j,new B.b08(),y.v).bx(0),l)},
HA(d){return B.dEe(d)},
dEe(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HA=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d8(d,n,m)
if($.aUk)J.b3(s,"scope","organizer")
x=7
return A.d(o.f3("connect-account",s),$async$HA)
case 7:r=f
s=J.h0(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a9(k)
if(s instanceof A.pn){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.B(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.B(J.i(p,"message")):null
throw A.q(new B.wZ(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HA,w)},
Dg:function Dg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
mE:function mE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
b0a:function b0a(){},
b08:function b08(){},
wZ:function wZ(d,e){this.a=d
this.b=e},
cMq:function cMq(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[125],B)
D=c[356]
B.Dg.prototype={
gPt(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mE.prototype={
gG2(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.wZ.prototype={$ibh:1}
var z=a.updateTypes(["Dg(@)","F<mE>(at)"])
B.b0a.prototype={
$1(d){return J.cy(d)},
$S:71}
B.b08.prototype={
$1(d){return B.d3j(y.B.a(d))},
$S:z+0}
B.cMq.prototype={
$1(d){return this.aFU(d)},
aFU(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HA(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cVr(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.M,[B.Dg,B.mE,B.wZ])
x(A.bs,[B.b0a,B.b08,B.cMq])})()
A.bq(b.typeUniverse,JSON.parse('{"wZ":{"bh":[]}}'))
var y={v:A.y("Dg"),F:A.y("mE"),i:A.y("t<@>"),y:A.y("a5<c,@>"),B:A.y("a5<@,@>"),w:A.y("c"),b:A.y("@"),d:A.y("t<@>?"),u:A.y("a5<@,@>?")};(function constants(){var x=a.makeConstList
D.byZ=x([],A.y("r<Dg>"))
D.Mb=new B.mE(!1,!1,!1,!1,C.a6,C.a6,null,null,0,0,D.byZ,"manual")})();(function staticFields(){$.aUk=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZf","za",()=>C.bP.$1$1(new B.cMq(),y.F))})()};
(a=>{a["Mrc8P/Uw99ZMQd8G443qhPD0xN0="]=a.current})($__dart_deferred_initializers__);