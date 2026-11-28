((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d3z(d){return typeof d=="number"?new A.ab(A.jj(C.k.F(d)*1000,0),0,!1):null},
d3y(d){var x,w,v,u=J.a7(d)
A.Y(u.h(d,"id"))
x=C.k.F(A.dv(u.h(d,"amount_cents")))
w=B.d3z(u.h(d,"arrival_date"))
v=B.d3z(u.h(d,"created"))
u=A.C(u.h(d,"status"))
return new B.Di(x,w,v,u==null?"pending":u)},
b0g(d){return y.i.b(d)?J.da(d,new B.b0h(),y.w).bx(0):C.a6},
cVJ(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
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
q=B.b0g(r.h(w,"currently_due"))
B.b0g(r.h(w,"eventually_due"))
p=B.b0g(r.h(w,"past_due"))
B.b0g(r.h(w,"pending_verification"))
r=A.C(r.h(w,"disabled_reason"))
o=v==null
n=A.C(o?k:J.i(v,"last4"))
A.C(o?k:J.i(v,"bank_name"))
m=J.a7(u)
l=A.aD(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aD(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.C(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.ai
return new B.mF(!0,x,t,s,q,p,r,n,o,m,J.da(j,new B.b0f(),y.v).bx(0),l)},
HB(d){return B.dEv(d)},
dEv(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HB=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Q().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d8(d,n,m)
if($.aUq)J.b2(s,"scope","organizer")
x=7
return A.d(o.f3("connect-account",s),$async$HB)
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
if(s instanceof A.po){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.C(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.C(J.i(p,"message")):null
throw A.q(new B.wZ(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HB,w)},
Di:function Di(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
mF:function mF(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
b0h:function b0h(){},
b0f:function b0f(){},
wZ:function wZ(d,e){this.a=d
this.b=e},
cME:function cME(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[125],B)
D=c[356]
B.Di.prototype={
gPw(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mF.prototype={
gG4(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.wZ.prototype={$ibi:1}
var z=a.updateTypes(["Di(@)","F<mF>(at)"])
B.b0h.prototype={
$1(d){return J.cy(d)},
$S:71}
B.b0f.prototype={
$1(d){return B.d3y(y.B.a(d))},
$S:z+0}
B.cME.prototype={
$1(d){return this.aFW(d)},
aFW(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HB(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cVJ(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.M,[B.Di,B.mF,B.wZ])
x(A.bt,[B.b0h,B.b0f,B.cME])})()
A.br(b.typeUniverse,JSON.parse('{"wZ":{"bi":[]}}'))
var y={v:A.A("Di"),F:A.A("mF"),i:A.A("t<@>"),y:A.A("a3<c,@>"),B:A.A("a3<@,@>"),w:A.A("c"),b:A.A("@"),d:A.A("t<@>?"),u:A.A("a3<@,@>?")};(function constants(){var x=a.makeConstList
D.byX=x([],A.A("r<Di>"))
D.Mb=new B.mF(!1,!1,!1,!1,C.a6,C.a6,null,null,0,0,D.byX,"manual")})();(function staticFields(){$.aUq=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZx","za",()=>C.bP.$1$1(new B.cME(),y.F))})()};
(a=>{a["cpbLZYlIVNK2fLjJcwdtx95PeeA="]=a.current})($__dart_deferred_initializers__);