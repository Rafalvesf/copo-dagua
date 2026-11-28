((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d32(d){return typeof d=="number"?new A.ac(A.j3(C.k.F(d)*1000,0),0,!1):null},
d31(d){var x,w,v,u=J.a7(d)
A.Z(u.h(d,"id"))
x=C.k.F(A.dt(u.h(d,"amount_cents")))
w=B.d32(u.h(d,"arrival_date"))
v=B.d32(u.h(d,"created"))
u=A.C(u.h(d,"status"))
return new B.Dl(x,w,v,u==null?"pending":u)},
b0x(d){return y.i.b(d)?J.d9(d,new B.b0y(),y.w).by(0):C.a6},
cV5(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.Mp
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
q=B.b0x(r.h(w,"currently_due"))
B.b0x(r.h(w,"eventually_due"))
p=B.b0x(r.h(w,"past_due"))
B.b0x(r.h(w,"pending_verification"))
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
return new B.mG(!0,x,t,s,q,p,r,n,o,m,J.d9(j,new B.b0w(),y.v).by(0),l)},
HD(d){return B.dDK(d)},
dDK(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HD=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.dd(d,n,m)
if($.aUH)J.b2(s,"scope","organizer")
x=7
return A.d(o.f4("connect-account",s),$async$HD)
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
if(s instanceof A.pj){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.C(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.C(J.i(p,"message")):null
throw A.p(new B.wZ(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HD,w)},
Dl:function Dl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
mG:function mG(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
b0y:function b0y(){},
b0w:function b0w(){},
wZ:function wZ(d,e){this.a=d
this.b=e},
cMg:function cMg(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[123],B)
D=c[358]
B.Dl.prototype={
gQ_(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mG.prototype={
gGg(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.wZ.prototype={$ibg:1}
var z=a.updateTypes(["Dl(@)","F<mG>(au)"])
B.b0y.prototype={
$1(d){return J.cx(d)},
$S:72}
B.b0w.prototype={
$1(d){return B.d31(y.B.a(d))},
$S:z+0}
B.cMg.prototype={
$1(d){return this.aGG(d)},
aGG(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HD(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cV5(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.J,[B.Dl,B.mG,B.wZ])
x(A.bw,[B.b0y,B.b0w,B.cMg])})()
A.br(b.typeUniverse,JSON.parse('{"wZ":{"bg":[]}}'))
var y={v:A.w("Dl"),F:A.w("mG"),i:A.w("t<@>"),y:A.w("a5<c,@>"),B:A.w("a5<@,@>"),w:A.w("c"),b:A.w("@"),d:A.w("t<@>?"),u:A.w("a5<@,@>?")};(function constants(){var x=a.makeConstList
D.bz9=x([],A.w("r<Dl>"))
D.Mp=new B.mG(!1,!1,!1,!1,C.a6,C.a6,null,null,0,0,D.bz9,"manual")})();(function staticFields(){$.aUH=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYC","zh",()=>C.bS.$1$1(new B.cMg(),y.F))})()};
(a=>{a["QBGuMKt93l/DrSTDRJjF5XcKCIQ="]=a.current})($__dart_deferred_initializers__);