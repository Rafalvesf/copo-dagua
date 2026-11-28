((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={rN:function rN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},cDt:function cDt(){}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[113],B)
C=c[211]
B.rN.prototype={
gQ_(){switch(this.c){case"awaiting_deposit":var x="A aguardar sinal"
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
var z=a.updateTypes(["F<t<rN>>(av,c)"])
B.cDt.prototype={
$2(d,e){return this.aF7(d,e)},
aF7(a4,a5){var x=0,w=A.n(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$$2=A.j(function(a6,a7){if(a6===1){t.push(a7)
x=u}for(;;)switch(x){case 0:u=4
l=$.T().b
l===$&&A.b()
x=7
return A.d(l.R("bookings").az(0,"status, total_amount, partner_profiles(id, business_name, cover_photo_url, partner_profile_categories(partner_categories(slug)))").W("wedding_id",a5).eP("status",C.bwp),$async$$2)
case 7:s=a7
r=A.a([],y.d)
for(l=y.i,k=J.bk(s,l),j=A.u(k),k=new A.ak(k,k.gA(k),j.i("ak<U.E>")),i=y.k,h=y.g,j=j.i("U.E");k.t();){g=k.d
q=g==null?j.a(g):g
p=i.a(J.h(q,"partner_profiles"))
g=p
g=A.C(g==null?null:J.h(g,"business_name"))
o=g==null?null:D.f.D(g)
if(o==null||o.length===0)continue
g=p
f=h.a(g==null?null:J.h(g,"partner_profile_categories"))
n=f==null?D.aj:f
m=J.dk(n)?null:i.a(J.h(l.a(J.fu(n)),"partner_categories"))
g=m
g=A.C(g==null?null:J.h(g,"slug"))
if(g==null)g="other"
e=A.C(J.h(q,"status"))
if(e==null)e=""
d=A.aK(J.h(q,"total_amount"))
if(d==null)d=null
if(d==null)d=0
a0=p
a0=A.C(a0==null?null:J.h(a0,"cover_photo_url"))
a1=p
J.bw(r,new B.rN(g,o,e,d,a0,A.C(a1==null?null:J.h(a1,"id"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a3=t.pop()
v=C.Fl
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
x(B.rN,A.I)
x(B.cDt,A.cR)})()
var y={d:A.w("r<rN>"),n:A.w("t<rN>"),i:A.w("a4<c,@>"),g:A.w("t<@>?"),k:A.w("a4<c,@>?")};(function constants(){var x=a.makeConstList
C.bwp=x(["awaiting_deposit","confirmed","payment_overdue","disputed","completed"],A.w("r<c>"))
C.Fl=x([],y.d)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dRP","aVd",()=>D.bH.$2$1(new B.cDt(),y.n,A.w("c")))})()};
(a=>{a["LEXyh4qWEYb47ou83D+LqhSMVkA="]=a.current})($__dart_deferred_initializers__);