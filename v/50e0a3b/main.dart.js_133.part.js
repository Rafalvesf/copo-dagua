((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cNH(d){return typeof d=="number"?new A.ai(A.iP(C.j.G(d)*1000,0),0,!1):null},
cNG(d){var x,w,v,u=J.a5(d)
A.a2(u.h(d,"id"))
x=C.j.G(A.dT(u.h(d,"amount_cents")))
w=B.cNH(u.h(d,"arrival_date"))
v=B.cNH(u.h(d,"created"))
u=A.L(u.h(d,"status"))
return new B.Cs(x,w,v,u==null?"pending":u)},
aWQ(d){return y.i.b(d)?J.d1(d,new B.aWR(),y.w).bA(0):C.a7},
cF6(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a5(d)
if(!J.o(j.h(d,"has_account"),!0))return D.L9
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.ka
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.ka
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a5(w)
q=B.aWQ(r.h(w,"currently_due"))
B.aWQ(r.h(w,"eventually_due"))
p=B.aWQ(r.h(w,"past_due"))
B.aWQ(r.h(w,"pending_verification"))
r=A.L(r.h(w,"disabled_reason"))
o=v==null
n=A.L(o?k:J.h(v,"last4"))
A.L(o?k:J.h(v,"bank_name"))
m=J.a5(u)
l=A.aX(m.h(u,"available_cents"))
o=l==null?k:C.j.G(l)
if(o==null)o=0
m=A.aX(m.h(u,"pending_cents"))
m=m==null?k:C.j.G(m)
if(m==null)m=0
l=A.L(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.ao
return new B.mk(!0,x,t,s,q,p,r,n,o,m,J.d1(j,new B.aWP(),y.v).bA(0),l)},
GB(d){return B.dlx(d)},
dlx(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$GB=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.S().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d9(d,n,m)
if($.aQA)J.b9(s,"scope","organizer")
x=7
return A.d(o.fY("connect-account",s),$async$GB)
case 7:r=f
s=J.hR(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a9(k)
if(s instanceof A.rz){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.L(J.h(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.L(J.h(p,"message")):null
throw A.p(new B.wc(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GB,w)},
Cs:function Cs(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
mk:function mk(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aWR:function aWR(){},
aWP:function aWP(){},
wc:function wc(d,e){this.a=d
this.b=e},
cwZ:function cwZ(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[117],B)
D=c[348]
B.Cs.prototype={
gP6(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.mk.prototype={
gFJ(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.wc.prototype={$ibj:1}
var z=a.updateTypes(["Cs(@)","E<mk>(au)"])
B.aWR.prototype={
$1(d){return J.cL(d)},
$S:69}
B.aWP.prototype={
$1(d){return B.cNG(y.B.a(d))},
$S:z+0}
B.cwZ.prototype={
$1(d){return this.aEl(d)},
aEl(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.GB(A.Q(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cF6(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.J,[B.Cs,B.mk,B.wc])
x(A.bw,[B.aWR,B.aWP,B.cwZ])})()
A.bt(b.typeUniverse,JSON.parse('{"wc":{"bj":[]}}'))
var y={v:A.v("Cs"),F:A.v("mk"),i:A.v("t<@>"),y:A.v("a3<c,@>"),B:A.v("a3<@,@>"),w:A.v("c"),b:A.v("@"),d:A.v("t<@>?"),u:A.v("a3<@,@>?")};(function constants(){var x=a.makeConstList
D.bwf=x([],A.v("r<Cs>"))
D.L9=new B.mk(!1,!1,!1,!1,C.a7,C.a7,null,null,0,0,D.bwf,"manual")})();(function staticFields(){$.aQA=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dG4","ys",()=>C.cm.$1$1(new B.cwZ(),y.F))})()};
(a=>{a["l95rU89D8c1OMWHUvnzEcNDrHMo="]=a.current})($__dart_deferred_initializers__);