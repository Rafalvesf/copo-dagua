((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d3R(d){return typeof d=="number"?new A.ac(A.j4(C.k.F(d)*1000,0),0,!1):null},
d3Q(d){var x,w,v,u=J.a7(d)
A.Z(u.h(d,"id"))
x=C.k.F(A.dt(u.h(d,"amount_cents")))
w=B.d3R(u.h(d,"arrival_date"))
v=B.d3R(u.h(d,"created"))
u=A.C(u.h(d,"status"))
return new B.Ds(x,w,v,u==null?"pending":u)},
b15(d){return y.i.b(d)?J.d9(d,new B.b16(),y.w).by(0):C.a8},
cVT(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.MQ
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.k4
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.k4
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a7(w)
q=B.b15(r.h(w,"currently_due"))
B.b15(r.h(w,"eventually_due"))
p=B.b15(r.h(w,"past_due"))
B.b15(r.h(w,"pending_verification"))
r=A.C(r.h(w,"disabled_reason"))
o=v==null
n=A.C(o?k:J.i(v,"last4"))
A.C(o?k:J.i(v,"bank_name"))
m=J.a7(u)
l=A.aI(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aI(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.C(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.am
return new B.mJ(!0,x,t,s,q,p,r,n,o,m,J.d9(j,new B.b14(),y.v).by(0),l)},
HM(d){return B.dEA(d)},
dEA(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HM=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.dd(d,n,m)
if($.aVg)J.b3(s,"scope","organizer")
x=7
return A.d(o.f6("connect-account",s),$async$HM)
case 7:r=f
s=J.hd(y.B.a(r.a),n,m)
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
if(s.b(p)){o=A.C(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.C(J.i(p,"message")):null
throw A.p(new B.x5(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HM,w)},
Ds:function Ds(d,e,f,g){var _=this
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
b16:function b16(){},
b14:function b14(){},
x5:function x5(d,e){this.a=d
this.b=e},
cN8:function cN8(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[123],B)
D=c[358]
B.Ds.prototype={
gQq(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mJ.prototype={
gGz(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.x5.prototype={$ibh:1}
var z=a.updateTypes(["Ds(@)","F<mJ>(av)"])
B.b16.prototype={
$1(d){return J.cA(d)},
$S:75}
B.b14.prototype={
$1(d){return B.d3Q(y.B.a(d))},
$S:z+0}
B.cN8.prototype={
$1(d){return this.aHA(d)},
aHA(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HM(A.T(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cVT(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.L,[B.Ds,B.mJ,B.x5])
x(A.by,[B.b16,B.b14,B.cN8])})()
A.bs(b.typeUniverse,JSON.parse('{"x5":{"bh":[]}}'))
var y={v:A.w("Ds"),F:A.w("mJ"),i:A.w("t<@>"),y:A.w("a5<c,@>"),B:A.w("a5<@,@>"),w:A.w("c"),b:A.w("@"),d:A.w("t<@>?"),u:A.w("a5<@,@>?")};(function constants(){var x=a.makeConstList
D.bAh=x([],A.w("r<Ds>"))
D.MQ=new B.mJ(!1,!1,!1,!1,C.a8,C.a8,null,null,0,0,D.bAh,"manual")})();(function staticFields(){$.aVg=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZm","zn",()=>C.bX.$1$1(new B.cN8(),y.F))})()};
(a=>{a["QksJGV6L/IbYTDfXZIobC0ylB4E="]=a.current})($__dart_deferred_initializers__);