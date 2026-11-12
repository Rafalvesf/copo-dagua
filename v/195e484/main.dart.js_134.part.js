((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cDD(d){return typeof d=="number"?new A.an(A.iC(C.k.D(d)*1000,0),0,!1):null},
cDC(d){var x,w,v,u=J.a3(d)
A.a1(u.h(d,"id"))
x=C.k.D(A.e_(u.h(d,"amount_cents")))
w=B.cDD(u.h(d,"arrival_date"))
v=B.cDD(u.h(d,"created"))
u=A.P(u.h(d,"status"))
return new B.xK(x,w,v,u==null?"pending":u)},
aSH(d){return y.i.b(d)?J.d1(d,new B.aSI(),y.w).bB(0):C.a9},
cvg(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=J.a3(d)
if(!J.o(h.h(d,"has_account"),!0))return D.Kc
x=y.u
w=x.a(h.h(d,"requirements"))
if(w==null)w=C.jU
v=x.a(h.h(d,"bank"))
u=x.a(h.h(d,"balance"))
if(u==null)u=C.jU
x=J.o(h.h(d,"details_submitted"),!0)
t=J.o(h.h(d,"charges_enabled"),!0)
s=J.o(h.h(d,"payouts_enabled"),!0)
r=J.a3(w)
q=B.aSH(r.h(w,"currently_due"))
p=B.aSH(r.h(w,"eventually_due"))
o=B.aSH(r.h(w,"past_due"))
n=B.aSH(r.h(w,"pending_verification"))
r=A.P(r.h(w,"disabled_reason"))
m=v==null
l=A.P(m?i:J.h(v,"last4"))
A.P(m?i:J.h(v,"bank_name"))
k=J.a3(u)
j=A.b9(k.h(u,"available_cents"))
m=j==null?i:C.k.D(j)
if(m==null)m=0
k=A.b9(k.h(u,"pending_cents"))
k=k==null?i:C.k.D(k)
if(k==null)k=0
j=A.P(h.h(d,"payout_schedule"))
if(j==null)j="daily"
h=y.d.a(h.h(d,"payouts"))
if(h==null)h=C.at
return new B.lV(!0,x,t,s,q,p,o,n,r,l,m,k,J.d1(h,new B.aSG(),y.v).bB(0),j)},
F7(d){return B.d9O(d)},
d9O(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$F7=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.Z().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.dh(d,n,m)
if($.aMP)J.bk(s,"scope","organizer")
x=7
return A.d(o.fO("connect-account",s),$async$F7)
case 7:r=f
s=J.ih(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.aa(k)
if(s instanceof A.r2){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.P(J.h(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.P(J.h(p,"message")):null
throw A.p(new B.vh(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$F7,w)},
xK:function xK(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
lV:function lV(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.Q=n
_.as=o
_.at=p
_.ax=q},
aSI:function aSI(){},
aSG:function aSG(){},
vh:function vh(d,e){this.a=d
this.b=e},
cnk:function cnk(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[111],B)
D=c[343]
B.xK.prototype={
gNL(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.lV.prototype={
gAo(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.vh.prototype={$ibf:1}
var z=a.updateTypes(["xK(@)","H<lV>(ax)"])
B.aSI.prototype={
$1(d){return J.cJ(d)},
$S:60}
B.aSG.prototype={
$1(d){return B.cDC(y.B.a(d))},
$S:z+0}
B.cnk.prototype={
$1(d){return this.aAI(d)},
aAI(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.F7(A.Q(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cvg(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.G,[B.xK,B.lV,B.vh])
x(A.bv,[B.aSI,B.aSG,B.cnk])})()
A.bx(b.typeUniverse,JSON.parse('{"vh":{"bf":[]}}'))
var y={v:A.v("xK"),F:A.v("lV"),i:A.v("t<@>"),y:A.v("a2<c,@>"),B:A.v("a2<@,@>"),w:A.v("c"),b:A.v("@"),d:A.v("t<@>?"),u:A.v("a2<@,@>?")};(function constants(){var x=a.makeConstList
D.brg=x([],A.v("q<xK>"))
D.Kc=new B.lV(!1,!1,!1,!1,C.a9,C.a9,C.a9,C.a9,null,null,0,0,D.brg,"manual")})();(function staticFields(){$.aMP=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dt0","xh",()=>C.cW.$1$1(new B.cnk(),y.F))})()};
(a=>{a["UTXN+qAjQy212Vpras0i+Twil9s="]=a.current})($__dart_deferred_initializers__);