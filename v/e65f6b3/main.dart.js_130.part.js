((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cOn(d){return typeof d=="number"?new A.ah(A.iM(C.j.F(d)*1000,0),0,!1):null},
cOm(d){var x,w,v,u=J.a5(d)
A.a2(u.h(d,"id"))
x=C.j.F(A.dR(u.h(d,"amount_cents")))
w=B.cOn(u.h(d,"arrival_date"))
v=B.cOn(u.h(d,"created"))
u=A.L(u.h(d,"status"))
return new B.Cp(x,w,v,u==null?"pending":u)},
aWR(d){return y.i.b(d)?J.d0(d,new B.aWS(),y.w).bB(0):C.a7},
cFL(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a5(d)
if(!J.p(j.h(d,"has_account"),!0))return D.Ld
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.jh
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.jh
x=J.p(j.h(d,"details_submitted"),!0)
t=J.p(j.h(d,"charges_enabled"),!0)
s=J.p(j.h(d,"payouts_enabled"),!0)
r=J.a5(w)
q=B.aWR(r.h(w,"currently_due"))
B.aWR(r.h(w,"eventually_due"))
p=B.aWR(r.h(w,"past_due"))
B.aWR(r.h(w,"pending_verification"))
r=A.L(r.h(w,"disabled_reason"))
o=v==null
n=A.L(o?k:J.h(v,"last4"))
A.L(o?k:J.h(v,"bank_name"))
m=J.a5(u)
l=A.aV(m.h(u,"available_cents"))
o=l==null?k:C.j.F(l)
if(o==null)o=0
m=A.aV(m.h(u,"pending_cents"))
m=m==null?k:C.j.F(m)
if(m==null)m=0
l=A.L(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.an
return new B.ml(!0,x,t,s,q,p,r,n,o,m,J.d0(j,new B.aWQ(),y.v).bB(0),l)},
Gz(d){return B.dmc(d)},
dmc(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$Gz=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.R().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d8(d,n,m)
if($.aQx)J.ba(s,"scope","organizer")
x=7
return A.d(o.fv("connect-account",s),$async$Gz)
case 7:r=f
s=J.hQ(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a7(k)
if(s instanceof A.rA){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.L(J.h(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.L(J.h(p,"message")):null
throw A.o(new B.wf(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Gz,w)},
Cp:function Cp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
ml:function ml(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aWS:function aWS(){},
aWQ:function aWQ(){},
wf:function wf(d,e){this.a=d
this.b=e},
cxF:function cxF(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[116],B)
D=c[338]
B.Cp.prototype={
gPb(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.ml.prototype={
gFL(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.wf.prototype={$ibj:1}
var z=a.updateTypes(["Cp(@)","E<ml>(at)"])
B.aWS.prototype={
$1(d){return J.cL(d)},
$S:64}
B.aWQ.prototype={
$1(d){return B.cOm(y.B.a(d))},
$S:z+0}
B.cxF.prototype={
$1(d){return this.aEi(d)},
aEi(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.Gz(A.Q(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cFL(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.J,[B.Cp,B.ml,B.wf])
x(A.bv,[B.aWS,B.aWQ,B.cxF])})()
A.bt(b.typeUniverse,JSON.parse('{"wf":{"bj":[]}}'))
var y={v:A.w("Cp"),F:A.w("ml"),i:A.w("t<@>"),y:A.w("a3<c,@>"),B:A.w("a3<@,@>"),w:A.w("c"),b:A.w("@"),d:A.w("t<@>?"),u:A.w("a3<@,@>?")};(function constants(){var x=a.makeConstList
D.bwD=x([],A.w("r<Cp>"))
D.Ld=new B.ml(!1,!1,!1,!1,C.a7,C.a7,null,null,0,0,D.bwD,"manual")})();(function staticFields(){$.aQx=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dGL","ys",()=>C.cj.$1$1(new B.cxF(),y.F))})()};
(a=>{a["G03VOaMxvrW8VP7TlCmjFTl6ys4="]=a.current})($__dart_deferred_initializers__);