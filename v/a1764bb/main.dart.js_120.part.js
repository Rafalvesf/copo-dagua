((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cVQ(d){return typeof d=="number"?new A.af(A.iW(C.k.F(d)*1000,0),0,!1):null},
cVP(d){var x,w,v,u=J.a7(d)
A.a_(u.h(d,"id"))
x=C.k.F(A.dp(u.h(d,"amount_cents")))
w=B.cVQ(u.h(d,"arrival_date"))
v=B.cVQ(u.h(d,"created"))
u=A.J(u.h(d,"status"))
return new B.CU(x,w,v,u==null?"pending":u)},
aYO(d){return y.i.b(d)?J.d3(d,new B.aYP(),y.w).by(0):C.a9},
cMS(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d)
if(!J.o(j.h(d,"has_account"),!0))return D.LC
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.jA
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.jA
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a7(w)
q=B.aYO(r.h(w,"currently_due"))
B.aYO(r.h(w,"eventually_due"))
p=B.aYO(r.h(w,"past_due"))
B.aYO(r.h(w,"pending_verification"))
r=A.J(r.h(w,"disabled_reason"))
o=v==null
n=A.J(o?k:J.h(v,"last4"))
A.J(o?k:J.h(v,"bank_name"))
m=J.a7(u)
l=A.aL(m.h(u,"available_cents"))
o=l==null?k:C.k.F(l)
if(o==null)o=0
m=A.aL(m.h(u,"pending_cents"))
m=m==null?k:C.k.F(m)
if(m==null)m=0
l=A.J(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.aj
return new B.mr(!0,x,t,s,q,p,r,n,o,m,J.d3(j,new B.aYN(),y.v).by(0),l)},
H7(d){return B.duA(d)},
duA(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$H7=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.T().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d2(d,n,m)
if($.aSh)J.b6(s,"scope","organizer")
x=7
return A.d(o.ff("connect-account",s),$async$H7)
case 7:r=f
s=J.hv(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a9(k)
if(s instanceof A.qo){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.J(J.h(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.J(J.h(p,"message")):null
throw A.p(new B.wC(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$H7,w)},
CU:function CU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
mr:function mr(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aYP:function aYP(){},
aYN:function aYN(){},
wC:function wC(d,e){this.a=d
this.b=e},
cEv:function cEv(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[115],B)
D=c[316]
B.CU.prototype={
gPA(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mr.prototype={
gG3(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.wC.prototype={$ibj:1}
var z=a.updateTypes(["CU(@)","F<mr>(au)"])
B.aYP.prototype={
$1(d){return J.cN(d)},
$S:68}
B.aYN.prototype={
$1(d){return B.cVP(y.B.a(d))},
$S:z+0}
B.cEv.prototype={
$1(d){return this.aFo(d)},
aFo(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.H7(A.R(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cMS(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.L,[B.CU,B.mr,B.wC])
x(A.bx,[B.aYP,B.aYN,B.cEv])})()
A.bw(b.typeUniverse,JSON.parse('{"wC":{"bj":[]}}'))
var y={v:A.x("CU"),F:A.x("mr"),i:A.x("r<@>"),y:A.x("a5<c,@>"),B:A.x("a5<@,@>"),w:A.x("c"),b:A.x("@"),d:A.x("r<@>?"),u:A.x("a5<@,@>?")};(function constants(){var x=a.makeConstList
D.bxr=x([],A.x("t<CU>"))
D.LC=new B.mr(!1,!1,!1,!1,C.a9,C.a9,null,null,0,0,D.bxr,"manual")})();(function staticFields(){$.aSh=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOR","yR",()=>C.bT.$1$1(new B.cEv(),y.F))})()};
(a=>{a["VRdKfiiIdbFD/tANduayNQa9g8s="]=a.current})($__dart_deferred_initializers__);