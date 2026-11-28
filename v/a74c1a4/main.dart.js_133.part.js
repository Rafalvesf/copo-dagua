((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d29(d){return typeof d=="number"?new A.ae(A.jg(C.k.F(d)*1000,0),0,!1):null},
d28(d){var x,w,v,u=J.a7(d)
A.Y(u.h(d,"id"))
x=C.k.F(A.du(u.h(d,"amount_cents")))
w=B.d29(u.h(d,"arrival_date"))
v=B.d29(u.h(d,"created"))
u=A.B(u.h(d,"status"))
return new B.Db(x,w,v,u==null?"pending":u)},
b_O(d){return y.i.b(d)?J.d9(d,new B.b_P(),y.w).bx(0):C.a5},
cUj(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.M8
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.jW
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.jW
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a7(w)
q=B.b_O(r.h(w,"currently_due"))
B.b_O(r.h(w,"eventually_due"))
p=B.b_O(r.h(w,"past_due"))
B.b_O(r.h(w,"pending_verification"))
r=A.B(r.h(w,"disabled_reason"))
o=v==null
n=A.B(o?k:J.i(v,"last4"))
A.B(o?k:J.i(v,"bank_name"))
m=J.a7(u)
l=A.aC(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aC(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.B(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.ai
return new B.mD(!0,x,t,s,q,p,r,n,o,m,J.d9(j,new B.b_N(),y.v).bx(0),l)},
Hu(d){return B.dD_(d)},
dD_(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$Hu=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.P().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d7(d,n,m)
if($.aTY)J.b2(s,"scope","organizer")
x=7
return A.d(o.f2("connect-account",s),$async$Hu)
case 7:r=f
s=J.fY(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a9(k)
if(s instanceof A.pk){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.B(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.B(J.i(p,"message")):null
throw A.q(new B.wW(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Hu,w)},
Db:function Db(d,e,f,g){var _=this
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
b_P:function b_P(){},
b_N:function b_N(){},
wW:function wW(d,e){this.a=d
this.b=e},
cLn:function cLn(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[124],B)
D=c[353]
B.Db.prototype={
gPr(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mD.prototype={
gG_(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.wW.prototype={$ibg:1}
var z=a.updateTypes(["Db(@)","F<mD>(as)"])
B.b_P.prototype={
$1(d){return J.cx(d)},
$S:68}
B.b_N.prototype={
$1(d){return B.d28(y.B.a(d))},
$S:z+0}
B.cLn.prototype={
$1(d){return this.aFN(d)},
aFN(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.Hu(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cUj(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.L,[B.Db,B.mD,B.wW])
x(A.bv,[B.b_P,B.b_N,B.cLn])})()
A.bt(b.typeUniverse,JSON.parse('{"wW":{"bg":[]}}'))
var y={v:A.z("Db"),F:A.z("mD"),i:A.z("t<@>"),y:A.z("a5<c,@>"),B:A.z("a5<@,@>"),w:A.z("c"),b:A.z("@"),d:A.z("t<@>?"),u:A.z("a5<@,@>?")};(function constants(){var x=a.makeConstList
D.byR=x([],A.z("r<Db>"))
D.M8=new B.mD(!1,!1,!1,!1,C.a5,C.a5,null,null,0,0,D.byR,"manual")})();(function staticFields(){$.aTY=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXS","z6",()=>C.bO.$1$1(new B.cLn(),y.F))})()};
(a=>{a["77Xv6qHNU8rLH1JEKZTAUXBOonc="]=a.current})($__dart_deferred_initializers__);