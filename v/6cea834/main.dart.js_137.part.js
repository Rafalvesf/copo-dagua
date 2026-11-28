((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d4f(d){return typeof d=="number"?new A.ab(A.jl(C.k.F(d)*1000,0),0,!1):null},
d4e(d){var x,w,v,u=J.a7(d)
A.Y(u.h(d,"id"))
x=C.k.F(A.ds(u.h(d,"amount_cents")))
w=B.d4f(u.h(d,"arrival_date"))
v=B.d4f(u.h(d,"created"))
u=A.A(u.h(d,"status"))
return new B.Dn(x,w,v,u==null?"pending":u)},
b0z(d){return y.i.b(d)?J.d7(d,new B.b0A(),y.w).bw(0):C.a6},
cWs(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
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
r=J.a7(w)
q=B.b0z(r.h(w,"currently_due"))
B.b0z(r.h(w,"eventually_due"))
p=B.b0z(r.h(w,"past_due"))
B.b0z(r.h(w,"pending_verification"))
r=A.A(r.h(w,"disabled_reason"))
o=v==null
n=A.A(o?k:J.h(v,"last4"))
A.A(o?k:J.h(v,"bank_name"))
m=J.a7(u)
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
return new B.mG(!0,x,t,s,q,p,r,n,o,m,J.d7(j,new B.b0y(),y.v).bw(0),l)},
HK(d){return B.dFi(d)},
dFi(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HK=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d9(d,n,m)
if($.aUI)J.b1(s,"scope","organizer")
x=7
return A.d(o.f3("connect-account",s),$async$HK)
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
if(s.b(p)){o=A.A(J.h(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.A(J.h(p,"message")):null
throw A.q(new B.x4(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HK,w)},
Dn:function Dn(d,e,f,g){var _=this
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
b0A:function b0A(){},
b0y:function b0y(){},
x4:function x4(d,e){this.a=d
this.b=e},
cNk:function cNk(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[125],B)
D=c[356]
B.Dn.prototype={
gPx(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mG.prototype={
gG7(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.x4.prototype={$ibi:1}
var z=a.updateTypes(["Dn(@)","F<mG>(at)"])
B.b0A.prototype={
$1(d){return J.cy(d)},
$S:73}
B.b0y.prototype={
$1(d){return B.d4e(y.B.a(d))},
$S:z+0}
B.cNk.prototype={
$1(d){return this.aG3(d)},
aG3(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HK(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cWs(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.M,[B.Dn,B.mG,B.x4])
x(A.bu,[B.b0A,B.b0y,B.cNk])})()
A.br(b.typeUniverse,JSON.parse('{"x4":{"bi":[]}}'))
var y={v:A.C("Dn"),F:A.C("mG"),i:A.C("t<@>"),y:A.C("a3<c,@>"),B:A.C("a3<@,@>"),w:A.C("c"),b:A.C("@"),d:A.C("t<@>?"),u:A.C("a3<@,@>?")};(function constants(){var x=a.makeConstList
D.bz2=x([],A.C("r<Dn>"))
D.Mb=new B.mG(!1,!1,!1,!1,C.a6,C.a6,null,null,0,0,D.bz2,"manual")})();(function staticFields(){$.aUI=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_q","zg",()=>C.bK.$1$1(new B.cNk(),y.F))})()};
(a=>{a["7u/1wcN9mYJ7L9rHaJNEgS3qzRk="]=a.current})($__dart_deferred_initializers__);