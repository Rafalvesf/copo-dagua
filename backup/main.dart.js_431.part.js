((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={r9:function r9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},cv_:function cv_(){}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[111],B)
C=c[210]
B.r9.prototype={
gPi(){switch(this.c){case"awaiting_deposit":var x="A aguardar sinal"
break
case"confirmed":x="Confirmado"
break
case"payment_overdue":x="Pagamento em atraso"
break
case"disputed":x="Em disputa"
break
case"completed":x="Conclu\xeddo"
break
default:x="Contratado"
break}return x},
gau(d){return this.b}}
var z=a.updateTypes(["G<t<r9>>(au,c)"])
B.cv_.prototype={
$2(d,e){return this.aDJ(d,e)},
aDJ(a4,a5){var x=0,w=A.n(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$$2=A.j(function(a6,a7){if(a6===1){t.push(a7)
x=u}for(;;)switch(x){case 0:u=4
l=$.R().b
l===$&&A.b()
x=7
return A.d(l.P("bookings").aG(0,"status, total_amount, partner_profiles(id, business_name, cover_photo_url, partner_profile_categories(partner_categories(slug)))").V("wedding_id",a5).fo("status",C.buc),$async$$2)
case 7:s=a7
r=A.a([],y.d)
for(l=y.i,k=J.bw(s,l),j=A.u(k),k=new A.an(k,k.gA(k),j.i("an<V.E>")),i=y.k,h=y.g,j=j.i("V.E");k.t();){g=k.d
q=g==null?j.a(g):g
p=i.a(J.h(q,"partner_profiles"))
g=p
g=A.M(g==null?null:J.h(g,"business_name"))
o=g==null?null:D.f.D(g)
if(o==null||o.length===0)continue
g=p
f=h.a(g==null?null:J.h(g,"partner_profile_categories"))
n=f==null?D.an:f
m=J.e1(n)?null:i.a(J.h(l.a(J.hc(n)),"partner_categories"))
g=m
g=A.M(g==null?null:J.h(g,"slug"))
if(g==null)g="other"
e=A.M(J.h(q,"status"))
if(e==null)e=""
d=A.aR(J.h(q,"total_amount"))
if(d==null)d=null
if(d==null)d=0
a0=p
a0=A.M(a0==null?null:J.h(a0,"cover_photo_url"))
a1=p
J.bM(r,new B.r9(g,o,e,d,a0,A.M(a1==null?null:J.h(a1,"id"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a3=t.pop()
v=C.Ez
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$2,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.r9,A.K)
x(B.cv_,A.cS)})()
var y={d:A.w("r<r9>"),n:A.w("t<r9>"),i:A.w("a3<c,@>"),g:A.w("t<@>?"),k:A.w("a3<c,@>?")};(function constants(){var x=a.makeConstList
C.buc=x(["awaiting_deposit","confirmed","payment_overdue","disputed","completed"],A.w("r<c>"))
C.Ez=x([],y.d)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dH_","aS6",()=>D.bK.$2$1(new B.cv_(),y.n,A.w("c")))})()};
(a=>{a["i5OFL3uSLBDGZ/Il40QZedyXJw4="]=a.current})($__dart_deferred_initializers__);