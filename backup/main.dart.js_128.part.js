((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
cQb(d){return typeof d=="number"?new A.ai(A.iO(C.j.G(d)*1000,0),0,!1):null},
cQa(d){var x,w,v,u=J.a5(d)
A.a2(u.h(d,"id"))
x=C.j.G(A.dA(u.h(d,"amount_cents")))
w=B.cQb(u.h(d,"arrival_date"))
v=B.cQb(u.h(d,"created"))
u=A.M(u.h(d,"status"))
return new B.Cw(x,w,v,u==null?"pending":u)},
aXh(d){return y.i.b(d)?J.d0(d,new B.aXi(),y.w).bz(0):C.aa},
cHl(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a5(d)
if(!J.o(j.h(d,"has_account"),!0))return D.Lq
x=y.u
w=x.a(j.h(d,"requirements"))
if(w==null)w=C.jm
v=x.a(j.h(d,"bank"))
u=x.a(j.h(d,"balance"))
if(u==null)u=C.jm
x=J.o(j.h(d,"details_submitted"),!0)
t=J.o(j.h(d,"charges_enabled"),!0)
s=J.o(j.h(d,"payouts_enabled"),!0)
r=J.a5(w)
q=B.aXh(r.h(w,"currently_due"))
B.aXh(r.h(w,"eventually_due"))
p=B.aXh(r.h(w,"past_due"))
B.aXh(r.h(w,"pending_verification"))
r=A.M(r.h(w,"disabled_reason"))
o=v==null
n=A.M(o?k:J.h(v,"last4"))
A.M(o?k:J.h(v,"bank_name"))
m=J.a5(u)
l=A.aR(m.h(u,"available_cents"))
o=l==null?k:C.j.G(l)
if(o==null)o=0
m=A.aR(m.h(u,"pending_cents"))
m=m==null?k:C.j.G(m)
if(m==null)m=0
l=A.M(j.h(d,"payout_schedule"))
if(l==null)l="daily"
j=y.d.a(j.h(d,"payouts"))
if(j==null)j=C.an
return new B.ml(!0,x,t,s,q,p,r,n,o,m,J.d0(j,new B.aXg(),y.v).bz(0),l)},
GG(d){return B.doM(d)},
doM(d){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$GG=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
o=$.R().b
o===$&&A.b()
o=o.ax
o===$&&A.b()
n=y.w
m=y.b
s=A.d8(d,n,m)
if($.aQW)J.bc(s,"scope","organizer")
x=7
return A.d(o.fp("connect-account",s),$async$GG)
case 7:r=f
s=J.hr(y.B.a(r.a),n,m)
v=s
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
s=A.a9(k)
if(s instanceof A.q8){q=s
p=q.b
s=y.B
if(s.b(p)){o=A.M(J.h(p,"error"))
if(o==null)o="unknown_error"}else o="unknown_error"
s=s.b(p)?A.M(J.h(p,"message")):null
throw A.p(new B.wj(o,s))}else throw k
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GG,w)},
Cw:function Cw(d,e,f,g){var _=this
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
aXi:function aXi(){},
aXg:function aXg(){},
wj:function wj(d,e){this.a=d
this.b=e},
cza:function cza(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[114],B)
D=c[325]
B.Cw.prototype={
gPi(){switch(this.e){case"paid":var x="Depositado"
break
case"failed":x="Falhou"
break
case"canceled":x="Cancelado"
break
default:x="A caminho"
break}return x}}
B.ml.prototype={
gFM(){return this.e.length!==0||this.r.length!==0||!this.b}}
B.wj.prototype={$ibj:1}
var z=a.updateTypes(["Cw(@)","G<ml>(au)"])
B.aXi.prototype={
$1(d){return J.cJ(d)},
$S:68}
B.aXg.prototype={
$1(d){return B.cQa(y.B.a(d))},
$S:z+0}
B.cza.prototype={
$1(d){return this.aEG(d)},
aEG(d){var x=0,w=A.n(y.F),v,u
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=B
x=3
return A.d(B.GG(A.Q(["action","status"],y.w,y.b)),$async$$1)
case 3:v=u.cHl(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.K,[B.Cw,B.ml,B.wj])
x(A.bx,[B.aXi,B.aXg,B.cza])})()
A.bu(b.typeUniverse,JSON.parse('{"wj":{"bj":[]}}'))
var y={v:A.w("Cw"),F:A.w("ml"),i:A.w("t<@>"),y:A.w("a3<c,@>"),B:A.w("a3<@,@>"),w:A.w("c"),b:A.w("@"),d:A.w("t<@>?"),u:A.w("a3<@,@>?")};(function constants(){var x=a.makeConstList
D.bwV=x([],A.w("r<Cw>"))
D.Lq=new B.ml(!1,!1,!1,!1,C.aa,C.aa,null,null,0,0,D.bwV,"manual")})();(function staticFields(){$.aQW=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dIE","yx",()=>C.ch.$1$1(new B.cza(),y.F))})()};
(a=>{a["YEQSA4KG/YBxvCSdtCKbm+tFLjY="]=a.current})($__dart_deferred_initializers__);