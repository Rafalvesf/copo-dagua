((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={rP:function rP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},cI5:function cI5(){}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[115],B)
C=c[214]
B.rP.prototype={
gPx(){switch(this.c){case"awaiting_deposit":var x="A aguardar sinal"
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
gap(d){return this.b}}
var z=a.updateTypes(["F<t<rP>>(at,c)"])
B.cI5.prototype={
$2(d,e){return this.aES(d,e)},
aES(a4,a5){var x=0,w=A.n(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$$2=A.j(function(a6,a7){if(a6===1){t.push(a7)
x=u}for(;;)switch(x){case 0:u=4
l=$.P().b
l===$&&A.b()
x=7
return A.d(l.P("bookings").al(0,"status, total_amount, partner_profiles(id, business_name, cover_photo_url, partner_profile_categories(partner_categories(slug)))").V("wedding_id",a5).da("status",C.bw7),$async$$2)
case 7:s=a7
r=A.a([],y.d)
for(l=y.i,k=J.bf(s,l),j=A.u(k),k=new A.af(k,k.gA(k),j.i("af<V.E>")),i=y.k,h=y.g,j=j.i("V.E");k.q();){g=k.d
q=g==null?j.a(g):g
p=i.a(J.h(q,"partner_profiles"))
g=p
g=A.B(g==null?null:J.h(g,"business_name"))
o=g==null?null:D.f.B(g)
if(o==null||o.length===0)continue
g=p
f=h.a(g==null?null:J.h(g,"partner_profile_categories"))
n=f==null?D.aj:f
m=J.dg(n)?null:i.a(J.h(l.a(J.fi(n)),"partner_categories"))
g=m
g=A.B(g==null?null:J.h(g,"slug"))
if(g==null)g="other"
e=A.B(J.h(q,"status"))
if(e==null)e=""
d=A.aD(J.h(q,"total_amount"))
if(d==null)d=null
if(d==null)d=0
a0=p
a0=A.B(a0==null?null:J.h(a0,"cover_photo_url"))
a1=p
J.b9(r,new B.rP(g,o,e,d,a0,A.B(a1==null?null:J.h(a1,"id"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a3=t.pop()
v=C.Fk
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
x(B.rP,A.M)
x(B.cI5,A.cK)})()
var y={d:A.z("r<rP>"),n:A.z("t<rP>"),i:A.z("a3<c,@>"),g:A.z("t<@>?"),k:A.z("a3<c,@>?")};(function constants(){var x=a.makeConstList
C.bw7=x(["awaiting_deposit","confirmed","payment_overdue","disputed","completed"],A.z("r<c>"))
C.Fk=x([],y.d)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYd","aW3",()=>D.bz.$2$1(new B.cI5(),y.n,A.z("c")))})()};
(a=>{a["ctp9ZL6KrnXrjo9TIfuTnIu3AD4="]=a.current})($__dart_deferred_initializers__);