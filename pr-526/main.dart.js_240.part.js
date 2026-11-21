((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={qI:function qI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},cnj:function cnj(){}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[128],B)
C=c[233]
B.qI.prototype={
gOd(){switch(this.c){case"awaiting_deposit":var x="A aguardar sinal"
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
break}return x}}
var z=a.updateTypes(["G<r<qI>>(at,c)"])
B.cnj.prototype={
$2(d,e){return this.aB0(d,e)},
aB0(a4,a5){var x=0,w=A.m(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$$2=A.i(function(a6,a7){if(a6===1){t.push(a7)
x=u}for(;;)switch(x){case 0:u=4
l=$.Q().b
l===$&&A.b()
x=7
return A.d(l.P("bookings").az(0,"status, total_amount, partner_profiles(id, business_name, cover_photo_url, partner_profile_categories(partner_categories(slug)))").W("wedding_id",a5).f9("status",C.bt6),$async$$2)
case 7:s=a7
r=A.a([],y.d)
for(l=y.i,k=J.bv(s,l),j=A.t(k),k=new A.al(k,k.gA(k),j.i("al<V.E>")),i=y.k,h=y.g,j=j.i("V.E");k.t();){g=k.d
q=g==null?j.a(g):g
p=i.a(J.f(q,"partner_profiles"))
g=p
g=A.I(g==null?null:J.f(g,"business_name"))
o=g==null?null:D.f.D(g)
if(o==null||o.length===0)continue
g=p
f=h.a(g==null?null:J.f(g,"partner_profile_categories"))
n=f==null?D.an:f
m=J.dO(n)?null:i.a(J.f(l.a(J.h0(n)),"partner_categories"))
g=m
g=A.I(g==null?null:J.f(g,"slug"))
if(g==null)g="other"
e=A.I(J.f(q,"status"))
if(e==null)e=""
d=A.aM(J.f(q,"total_amount"))
if(d==null)d=null
if(d==null)d=0
a0=p
a0=A.I(a0==null?null:J.f(a0,"cover_photo_url"))
a1=p
J.bO(r,new B.qI(g,o,e,d,a0,A.I(a1==null?null:J.f(a1,"id"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a3=t.pop()
v=C.E6
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$2,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.qI,A.H)
x(B.cnj,A.cG)})()
var y={d:A.u("q<qI>"),n:A.u("r<qI>"),i:A.u("a6<c,@>"),g:A.u("r<@>?"),k:A.u("a6<c,@>?")};(function constants(){var x=a.makeConstList
C.bt6=x(["awaiting_deposit","confirmed","payment_overdue","disputed","completed"],A.u("q<c>"))
C.E6=x([],y.d)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"duZ","aOr",()=>D.bH.$2$1(new B.cnj(),y.n,A.u("c")))})()};
(a=>{a["u4e9Saa7RJffXE/v4pUKIFthEe8="]=a.current})($__dart_deferred_initializers__);