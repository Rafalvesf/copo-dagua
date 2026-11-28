((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={rW:function rW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},cHr:function cHr(){}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[113],B)
C=c[216]
B.rW.prototype={
gQe(){switch(this.c){case"awaiting_deposit":var x="A aguardar sinal"
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
gao(d){return this.b}}
var z=a.updateTypes(["F<t<rW>>(av,c)"])
B.cHr.prototype={
$2(d,e){return this.aFV(d,e)},
aFV(a4,a5){var x=0,w=A.n(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$$2=A.j(function(a6,a7){if(a6===1){t.push(a7)
x=u}for(;;)switch(x){case 0:u=4
l=$.R().b
l===$&&A.b()
x=7
return A.d(l.P("bookings").am(0,"status, total_amount, partner_profiles(id, business_name, cover_photo_url, partner_profile_categories(partner_categories(slug)))").V("wedding_id",a5).dN("status",C.bxl),$async$$2)
case 7:s=a7
r=A.a([],y.d)
for(l=y.i,k=J.bh(s,l),j=A.u(k),k=new A.al(k,k.gA(k),j.i("al<W.E>")),i=y.k,h=y.g,j=j.i("W.E");k.t();){g=k.d
q=g==null?j.a(g):g
p=i.a(J.i(q,"partner_profiles"))
g=p
g=A.C(g==null?null:J.i(g,"business_name"))
o=g==null?null:D.f.C(g)
if(o==null||o.length===0)continue
g=p
f=h.a(g==null?null:J.i(g,"partner_profile_categories"))
n=f==null?D.am:f
m=J.dq(n)?null:i.a(J.i(l.a(J.fv(n)),"partner_categories"))
g=m
g=A.C(g==null?null:J.i(g,"slug"))
if(g==null)g="other"
e=A.C(J.i(q,"status"))
if(e==null)e=""
d=A.aI(J.i(q,"total_amount"))
if(d==null)d=null
if(d==null)d=0
a0=p
a0=A.C(a0==null?null:J.i(a0,"cover_photo_url"))
a1=p
J.bt(r,new B.rW(g,o,e,d,a0,A.C(a1==null?null:J.i(a1,"id"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a3=t.pop()
v=C.FO
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
x(B.rW,A.L)
x(B.cHr,A.cN)})()
var y={d:A.w("r<rW>"),n:A.w("t<rW>"),i:A.w("a5<c,@>"),g:A.w("t<@>?"),k:A.w("a5<c,@>?")};(function constants(){var x=a.makeConstList
C.bxl=x(["awaiting_deposit","confirmed","payment_overdue","disputed","completed"],A.w("r<c>"))
C.FO=x([],y.d)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWy","aWf",()=>D.bL.$2$1(new B.cHr(),y.n,A.w("c")))})()};
(a=>{a["FL6846gobirxhxipUV8mRqs1C5k="]=a.current})($__dart_deferred_initializers__);