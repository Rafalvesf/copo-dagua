((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cDS(d){return typeof d=="number"?new A.am(A.iA(C.k.D(d)*1000,0),0,!1):null},
cDR(d){var x,w,v,u=J.a3(d)
A.a1(u.h(d,"id"))
x=C.k.D(A.e1(u.h(d,"amount_cents")))
w=B.cDS(u.h(d,"arrival_date"))
v=B.cDS(u.h(d,"created"))
u=A.P(u.h(d,"status"))
return new B.xP(x,w,v,u==null?"pending":u)},
aSM(d){return y.i.b(d)?J.d1(d,new B.aSN(),y.w).bB(0):C.aa},
cvw(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=J.a3(d)
if(!J.o(h.h(d,"has_account"),!0))return D.K8
x=y.u
w=x.a(h.h(d,"requirements"))
if(w==null)w=C.jP
v=x.a(h.h(d,"bank"))
u=x.a(h.h(d,"balance"))
if(u==null)u=C.jP
x=J.o(h.h(d,"details_submitted"),!0)
t=J.o(h.h(d,"charges_enabled"),!0)
s=J.o(h.h(d,"payouts_enabled"),!0)
r=J.a3(w)
q=B.aSM(r.h(w,"currently_due"))
p=B.aSM(r.h(w,"eventually_due"))
o=B.aSM(r.h(w,"past_due"))
n=B.aSM(r.h(w,"pending_verification"))
r=A.P(r.h(w,"disabled_reason"))
m=v==null
l=A.P(m?i:J.h(v,"last4"))
A.P(m?i:J.h(v,"bank_name"))
k=J.a3(u)
j=A.b8(k.h(u,"available_cents"))
m=j==null?i:C.k.D(j)
if(m==null)m=0
k=A.b8(k.h(u,"pending_cents"))
k=k==null?i:C.k.D(k)
if(k==null)k=0
j=A.P(h.h(d,"payout_schedule"))
if(j==null)j="daily"
h=y.d.a(h.h(d,"payouts"))
if(h==null)h=C.at
return new B.lV(!0,x,t,s,q,p,o,n,r,l,m,k,J.d1(h,new B.aSL(),y.v).bB(0),j)},
Fe(d){return B.da9(d)},
da9(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$Fe=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.W().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.dg(d,n,m)
if($.aMU)J.bg(s,"scope","organizer")
x=7
return A.d(o.fP("connect-account",s),$async$Fe)
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
if(s instanceof A.r4){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.P(J.h(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.P(J.h(p,"message")):null
throw A.p(new B.vf(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Fe,w)},
xP:function xP(d,e,f,g){var _=this
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
aSN:function aSN(){},
aSL:function aSL(){},
vf:function vf(d,e){this.a=d
this.b=e},
cnw:function cnw(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[113],B)
D=c[333]
B.xP.prototype={
gNT(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.lV.prototype={
gAr(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.vf.prototype={$ibi:1}
var z=a.updateTypes(["xP(@)","H<lV>(ax)"])
B.aSN.prototype={
$1(d){return J.cG(d)},
$S:59}
B.aSL.prototype={
$1(d){return B.cDR(y.B.a(d))},
$S:z+0}
B.cnw.prototype={
$1(d){return this.aAV(d)},
aAV(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.Fe(A.Q(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cvw(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.F,[B.xP,B.lV,B.vf])
x(A.bv,[B.aSN,B.aSL,B.cnw])})()
A.bx(b.typeUniverse,JSON.parse('{"vf":{"bi":[]}}'))
var y={v:A.v("xP"),F:A.v("lV"),i:A.v("t<@>"),y:A.v("a2<c,@>"),B:A.v("a2<@,@>"),w:A.v("c"),b:A.v("@"),d:A.v("t<@>?"),u:A.v("a2<@,@>?")};(function constants(){var x=a.makeConstList
D.bri=x([],A.v("q<xP>"))
D.K8=new B.lV(!1,!1,!1,!1,C.aa,C.aa,C.aa,C.aa,null,null,0,0,D.bri,"manual")})();(function staticFields(){$.aMU=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dtk","xk",()=>C.cY.$1$1(new B.cnw(),y.F))})()};
(a=>{a["BnVkiH/pMlxg5K7ISz/31WvftvA="]=a.current})($__dart_deferred_initializers__);