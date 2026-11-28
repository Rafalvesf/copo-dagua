((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dER(d){var x="partner_category",w=J.a7(d),v=A.Z(w.h(d,"name")),u=A.dt(w.h(d,"amount")),t=A.C(w.h(d,x))==null?null:A.qJ(G.W4,A.Z(w.h(d,x)))
return new B.nu(v,u,t,A.dt(w.h(d,"allocated")))},
don(){return new B.zI()},
doo(d){var x
A:{if("venue"===d){x=E.yj
break A}if("catering"===d){x=E.yf
break A}if("photography"===d){x=E.yg
break A}if("music_dj"===d||"bands_musicians"===d){x=E.yh
break A}if("flowers_decor"===d){x=E.yi
break A}x=null
break A}return x},
uR:function uR(d,e){this.a=d
this.b=e},
zI:function zI(){this.b=this.x=null},
aZM:function aZM(){},
aZN:function aZN(d,e){this.a=d
this.b=e},
aZO:function aZO(){},
aZP:function aZP(){},
aZQ:function aZQ(){},
aZR:function aZR(){},
aZK:function aZK(d){this.a=d},
aZL:function aZL(d){this.a=d},
aZS:function aZS(d){this.a=d},
nu:function nu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i5:function i5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
a12:function a12(d,e){this.b=d
this.c=e},
aZT:function aZT(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[118]
E=c[224]
G=c[418]
B=a.updateHolder(c[77],B)
C=c[417]
B.uR.prototype={
ay5(d,e){var x=e==null?this.a:e
return new B.uR(x,d==null?this.b:d)},
it(d){return this.ay5(null,d)},
axR(d){return this.ay5(d,null)}}
B.zI.prototype={
d8(){var x=y.V,w=A.eT(this).H(A.cJ($.cr(),new B.aZM(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.jl(new B.aZN(this,w),y.H)
return C.ahL},
c1(d,e){return this.bz5(0,e)},
bz5(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$c1=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).it(!0))
u=$.Q()
t=u.b
t===$&&A.b()
s=e.a
r=t.P("budgets").cn(0).V("wedding_id",s).cm().b6(new B.aZO(),y.h)
q=u.b.P("budget_categories").cn(0).V("wedding_id",s).cV(0,"position",!0).b6(new B.aZP(),y.p)
p=v.Il(s).cG(new B.aZQ(),new B.aZR(),y.Y)
x=2
return A.d(r,$async$c1)
case 2:o=g
x=3
return A.d(q,$async$c1)
case 3:n=g
x=o!=null?4:6
break
case 4:m=A.dt(J.i(o,"total"))
x=5
break
case 6:m=e.as
if(m==null)m=0
x=m>0?7:8
break
case 7:x=9
return A.d(u.b.P("budgets").yF(A.T(["wedding_id",s,"total",m],y.N,y.K)),$async$c1)
case 9:case 8:case 5:l=J.d9(n,B.dIY(),y.u).by(0)
x=10
return A.d(p,$async$c1)
case 10:k=g
if(k!=null)v.b9G(l,k)
v.sa4(0,new B.uR(!1,new B.a12(m,l)))
return A.l(null,w)}})
return A.m($async$c1,w)},
a_k(d){var x=0,w=A.n(y.H),v=this,u
var $async$a_k=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eT(v).a0(0,$.cr(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.c1(0,u),$async$a_k)
case 4:case 3:return A.l(null,w)}})
return A.m($async$a_k,w)},
Il(d){return this.aTs(d)},
aTs(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Il=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.Q().b
a0===$&&A.b()
x=3
return A.d(a0.P("bookings").ak(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").V("wedding_id",a2),$async$Il)
case 3:u=a4
a0=y.O
t=A.E(y.N,a0)
s=A.E(a0,y.i)
r=A.a([],y.s)
for(a0=y.P,q=J.bi(u,a0),p=A.u(q),q=new A.ak(q,q.gA(q),p.i("ak<V.E>")),o=y.h,n=y.g,p=p.i("V.E");q.t();){m=q.d
if(m==null)m=p.a(m)
l=J.a7(m)
k=o.a(l.h(m,"partner_profiles"))
j=n.a(k==null?null:J.i(k,"partner_profile_categories"))
if(j==null)j=D.am
k=J.a7(j)
i=k.gZ(j)?null:o.a(J.i(a0.a(k.gL(j)),"partner_categories"))
k=i==null
h=A.C(k?null:J.i(i,"slug"))
if(h==null)h="other"
g=A.C(k?null:J.i(i,"label_pt"))
f=new A.a0(h,g==null?"Outros":g)
e=A.Z(l.h(m,"id"))
t.j(0,e,f)
if(C.bWw.q(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aI(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.Q().b
q===$&&A.b()
a1=J
x=4
return A.d(q.P("payments").ak(0,"booking_id, amount, refunded_amount, status").dO("booking_id",r).dO("status",["paid","refunded"]),$async$Il)
case 4:a0=a1.bi(a4,a0),q=A.u(a0),a0=new A.ak(a0,a0.gA(a0),q.i("ak<V.E>")),q=q.i("V.E")
case 5:if(!a0.t()){x=6
break}p=a0.d
if(p==null)p=q.a(p)
o=J.a7(p)
f=t.h(0,A.Z(o.h(p,"booking_id")))
if(f==null){x=5
break}n=A.dt(o.h(p,"amount"))
p=A.aI(o.h(p,"refunded_amount"))
if(p==null)p=null
d=n-(p==null?0:p)
if(d>0){p=s.h(0,f)
s.j(0,f,(p==null?0:p)+d)}x=5
break
case 6:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Il,w)},
b9G(d,e){var x,w,v,u,t,s,r,q
for(x=J.uG(e),x=x.gX(x);x.t();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.doo(u.a)
s=D.e.Ga(d,new B.aZK(t))
if(s<0)s=D.e.Ga(d,new B.aZL(w))
if(s>=0){r=d[s]
d[s]=new B.nu(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.duY(t)
w=q==null?w.a:q
D.e.B(d,new B.nu(w,v.b,t,0))}}},
Pe(d,e){return this.bF7(d,e)},
bF7(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Pe=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.ga4(0).b
if(l==null||k==null){x=1
break}t=$.Q()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.P("budget_categories").bi(0,A.T(["allocated",e],r,r)).V("wedding_id",l).V("name",d).ak(0,"id"),$async$Pe)
case 5:x=j.dr(g)?3:4
break
case 3:s=k.c
q=A.eV(new A.a6(s,new B.aZS(d),A.a8(s).i("a6<1>")))
t=t.b.P("budget_categories")
if(q==null)r=null
else{r=q.c
r=r==null?null:r.b}x=6
return A.d(t.dd(0,A.T(["wedding_id",l,"name",d,"partner_category",r,"amount",0,"allocated",e,"position",s.length],y.N,y.X)),$async$Pe)
case 6:case 4:t=u.ga4(0)
s=k.b
r=A.a([],y.Q)
for(p=k.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.H)(p),++n){q=p[n]
m=q.a
r.push(m===d?new B.nu(m,q.b,q.c,e):q)}u.sa4(0,t.axR(new B.a12(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$Pe,w)},
a04(d){return this.bFp(d)},
bFp(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$a04=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.Q().b
t===$&&A.b()
x=3
return A.d(t.P("budgets").yF(A.T(["wedding_id",r,"total",d,"updated_at",new A.ac(Date.now(),0,!1).ck()],y.N,y.K)),$async$a04)
case 3:s=u.ga4(0).b
if(s==null){x=1
break}u.sa4(0,u.ga4(0).axR(new B.a12(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$a04,w)}}
B.nu.prototype={
gaq(d){return this.a}}
B.i5.prototype={}
B.a12.prototype={
gq5(){return D.e.cZ(this.c,0,new B.aZT())}}
var z=a.updateTypes(["x(nu)","uR()","S(S,nu)","nu(a5<c,@>)","zI()"])
B.aZM.prototype={
$1(d){return d.b},
$S:176}
B.aZN.prototype={
$0(){return this.a.c1(0,this.b)},
$S:1}
B.aZO.prototype={
$1(d){return d},
$S:423}
B.aZP.prototype={
$1(d){return d},
$S:31}
B.aZQ.prototype={
$1(d){return d},
$S:1332}
B.aZR.prototype={
$1(d){return null},
$S:11}
B.aZK.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aZL.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.aZS.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aZT.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dIY","dER",3)
w(B,"dIX","don",4)
v(B.zI.prototype,"giP","d8",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[B.uR,B.nu,B.i5,B.a12])
w(B.zI,A.fg)
x(A.bw,[B.aZM,B.aZO,B.aZP,B.aZQ,B.aZR,B.aZK,B.aZL,B.aZS])
w(B.aZN,A.bQ)
w(B.aZT,A.cL)})()
A.bs(b.typeUniverse,JSON.parse('{"zI":{"fg":["uR"]}}'))
var y=(function rtii(){var x=A.w
return{u:x("nu"),v:x("ef"),Q:x("r<nu>"),s:x("r<c>"),p:x("t<a5<c,@>>"),P:x("a5<c,@>"),W:x("a5<+(c,c),S>"),K:x("L"),O:x("+(c,c)"),N:x("c"),i:x("S"),z:x("@"),V:x("fo?"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<+(c,c),S>?"),X:x("L?"),H:x("~")}})();(function constants(){C.ahL=new B.uR(!1,null)
C.bJS={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bWw=new A.eA(C.bJS,5,A.w("eA<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXH","CQ",()=>A.n_(B.dIX(),null,!1,null,null,A.w("zI"),A.w("uR")))})()};
(a=>{a["22o9f/S2pnQQqmQjPFIHDw05r7w="]=a.current})($__dart_deferred_initializers__);