((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d2H(d){return typeof d=="number"?new A.ac(A.j3(C.k.F(d)*1000,0),0,!1):null},
d2G(d){var x,w,v,u=J.a7(d)
A.Z(u.h(d,"id"))
x=C.k.F(A.dt(u.h(d,"amount_cents")))
w=B.d2H(u.h(d,"arrival_date"))
v=B.d2H(u.h(d,"created"))
u=A.C(u.h(d,"status"))
return new B.Dl(x,w,v,u==null?"pending":u)},
b0v(d){return y.i.b(d)?J.d9(d,new B.b0w(),y.w).bx(0):C.a7},
cUI(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.Mo
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.jX
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.jX
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
l=A.aG(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aG(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.C(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.al
return new B.mG(!0,x,t,s,q,p,r,n,o,m,J.d9(j,new B.b0u(),y.v).bx(0),l)},
HD(d){return B.dDl(d)},
dDl(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HD=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.dc(d,n,m)
if($.aUF)J.b3(s,"scope","organizer")
x=7
return A.d(o.f4("connect-account",s),$async$HD)
case 7:r=f
s=J.hb(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a9(k)
if(s instanceof A.pi){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.C(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.C(J.i(p,"message")):null
throw A.p(new B.x_(o,s))}else throw k
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
b0w:function b0w(){},
b0u:function b0u(){},
x_:function x_(d,e){this.a=d
this.b=e},
cLV:function cLV(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[124],B)
D=c[363]
B.Dl.prototype={
gPZ(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mG.prototype={
gGg(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.x_.prototype={$ibg:1}
var z=a.updateTypes(["Dl(@)","F<mG>(av)"])
B.b0w.prototype={
$1(d){return J.cy(d)},
$S:68}
B.b0u.prototype={
$1(d){return B.d2G(y.B.a(d))},
$S:z+0}
B.cLV.prototype={
$1(d){return this.aGE(d)},
aGE(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HD(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cUI(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.J,[B.Dl,B.mG,B.x_])
x(A.bu,[B.b0w,B.b0u,B.cLV])})()
A.bn(b.typeUniverse,JSON.parse('{"x_":{"bg":[]}}'))
var y={v:A.w("Dl"),F:A.w("mG"),i:A.w("t<@>"),y:A.w("a4<c,@>"),B:A.w("a4<@,@>"),w:A.w("c"),b:A.w("@"),d:A.w("t<@>?"),u:A.w("a4<@,@>?")};(function constants(){var x=a.makeConstList
D.bzf=x([],A.w("r<Dl>"))
D.Mo=new B.mG(!1,!1,!1,!1,C.a7,C.a7,null,null,0,0,D.bzf,"manual")})();(function staticFields(){$.aUF=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYa","zh",()=>C.bR.$1$1(new B.cLV(),y.F))})()};
(a=>{a["wv0p7QPm86+lzESkYzbnUmZ1RNA="]=a.current})($__dart_deferred_initializers__);