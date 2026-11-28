((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d46(d){return typeof d=="number"?new A.ac(A.j6(C.k.F(d)*1000,0),0,!1):null},
d45(d){var x,w,v,u=J.a7(d)
A.a_(u.h(d,"id"))
x=C.k.F(A.du(u.h(d,"amount_cents")))
w=B.d46(u.h(d,"arrival_date"))
v=B.d46(u.h(d,"created"))
u=A.C(u.h(d,"status"))
return new B.Dp(x,w,v,u==null?"pending":u)},
b0G(d){return y.i.b(d)?J.dc(d,new B.b0H(),y.w).by(0):C.a6},
cW7(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.Mq
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
q=B.b0G(r.h(w,"currently_due"))
B.b0G(r.h(w,"eventually_due"))
p=B.b0G(r.h(w,"past_due"))
B.b0G(r.h(w,"pending_verification"))
r=A.C(r.h(w,"disabled_reason"))
o=v==null
n=A.C(o?k:J.i(v,"last4"))
A.C(o?k:J.i(v,"bank_name"))
m=J.a7(u)
l=A.aE(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aE(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.C(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.ai
return new B.mH(!0,x,t,s,q,p,r,n,o,m,J.dc(j,new B.b0F(),y.v).by(0),l)},
HF(d){return B.dEW(d)},
dEW(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$HF=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.P().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.da(d,n,m)
if($.aUR)J.b2(s,"scope","organizer")
x=7
return A.d(o.f5("connect-account",s),$async$HF)
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
if(s instanceof A.po){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.C(J.i(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.C(J.i(p,"message")):null
throw A.q(new B.x2(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HF,w)},
Dp:function Dp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
mH:function mH(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
b0H:function b0H(){},
b0F:function b0F(){},
x2:function x2(d,e){this.a=d
this.b=e},
cNd:function cNd(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[124],B)
D=c[358]
B.Dp.prototype={
gQ4(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mH.prototype={
gGj(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.x2.prototype={$ibi:1}
var z=a.updateTypes(["Dp(@)","F<mH>(at)"])
B.b0H.prototype={
$1(d){return J.cB(d)},
$S:71}
B.b0F.prototype={
$1(d){return B.d45(y.B.a(d))},
$S:z+0}
B.cNd.prototype={
$1(d){return this.aGT(d)},
aGT(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.HF(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cW7(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.K,[B.Dp,B.mH,B.x2])
x(A.bx,[B.b0H,B.b0F,B.cNd])})()
A.bu(b.typeUniverse,JSON.parse('{"x2":{"bi":[]}}'))
var y={v:A.x("Dp"),F:A.x("mH"),i:A.x("t<@>"),y:A.x("a5<c,@>"),B:A.x("a5<@,@>"),w:A.x("c"),b:A.x("@"),d:A.x("t<@>?"),u:A.x("a5<@,@>?")};(function constants(){var x=a.makeConstList
D.bzt=x([],A.x("r<Dp>"))
D.Mq=new B.mH(!1,!1,!1,!1,C.a6,C.a6,null,null,0,0,D.bzt,"manual")})();(function staticFields(){$.aUR=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZV","zi",()=>C.bO.$1$1(new B.cNd(),y.F))})()};
(a=>{a["ul31mpdEmrN4fbMNNmo19H5klWo="]=a.current})($__dart_deferred_initializers__);