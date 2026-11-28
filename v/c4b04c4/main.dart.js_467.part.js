((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dE1(d){var x="partner_category",w=J.a7(d),v=A.a0(w.h(d,"name")),u=A.ds(w.h(d,"amount")),t=A.C(w.h(d,x))==null?null:A.qI(G.W5,A.a0(w.h(d,x)))
return new B.nq(v,u,t,A.ds(w.h(d,"allocated")))},
dnA(){return new B.zF()},
dnB(d){var x
A:{if("venue"===d){x=E.yh
break A}if("catering"===d){x=E.yd
break A}if("photography"===d){x=E.ye
break A}if("music_dj"===d||"bands_musicians"===d){x=E.yf
break A}if("flowers_decor"===d){x=E.yg
break A}x=null
break A}return x},
uP:function uP(d,e){this.a=d
this.b=e},
zF:function zF(){this.b=this.x=null},
aZt:function aZt(){},
aZu:function aZu(d,e){this.a=d
this.b=e},
aZv:function aZv(){},
aZw:function aZw(){},
aZx:function aZx(){},
aZy:function aZy(){},
aZr:function aZr(d){this.a=d},
aZs:function aZs(d){this.a=d},
aZz:function aZz(d){this.a=d},
nq:function nq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i3:function i3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
a0Q:function a0Q(d,e){this.b=d
this.c=e},
aZA:function aZA(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[117]
E=c[222]
G=c[417]
B=a.updateHolder(c[77],B)
C=c[416]
B.uP.prototype={
axB(d,e){var x=e==null?this.a:e
return new B.uP(x,d==null?this.b:d)},
ip(d){return this.axB(null,d)},
axm(d){return this.axB(d,null)}}
B.zF.prototype={
d7(){var x=y.V,w=A.eU(this).H(A.cI($.cr(),new B.aZt(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.jj(new B.aZu(this,w),y.H)
return C.ahM},
c_(d,e){return this.byj(0,e)},
byj(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ip(!0))
u=$.R()
t=u.b
t===$&&A.b()
s=e.a
r=t.P("budgets").ck(0).V("wedding_id",s).cn().b5(new B.aZv(),y.h)
q=u.b.P("budget_categories").ck(0).V("wedding_id",s).cT(0,"position",!0).b5(new B.aZw(),y.p)
p=v.Id(s).cE(new B.aZx(),new B.aZy(),y.Y)
x=2
return A.d(r,$async$c_)
case 2:o=g
x=3
return A.d(q,$async$c_)
case 3:n=g
x=o!=null?4:6
break
case 4:m=A.ds(J.i(o,"total"))
x=5
break
case 6:m=e.as
if(m==null)m=0
x=m>0?7:8
break
case 7:x=9
return A.d(u.b.P("budgets").yw(A.T(["wedding_id",s,"total",m],y.N,y.K)),$async$c_)
case 9:case 8:case 5:l=J.d8(n,B.dI8(),y.u).by(0)
x=10
return A.d(p,$async$c_)
case 10:k=g
if(k!=null)v.b8Y(l,k)
v.sa4(0,new B.uP(!1,new B.a0Q(m,l)))
return A.l(null,w)}})
return A.m($async$c_,w)},
a_4(d){var x=0,w=A.n(y.H),v=this,u
var $async$a_4=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eU(v).a1(0,$.cr(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.c_(0,u),$async$a_4)
case 4:case 3:return A.l(null,w)}})
return A.m($async$a_4,w)},
Id(d){return this.aSX(d)},
aSX(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Id=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.R().b
a0===$&&A.b()
x=3
return A.d(a0.P("bookings").al(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").V("wedding_id",a2),$async$Id)
case 3:u=a4
a0=y.O
t=A.E(y.N,a0)
s=A.E(a0,y.i)
r=A.a([],y.s)
for(a0=y.P,q=J.bh(u,a0),p=A.u(q),q=new A.al(q,q.gA(q),p.i("al<W.E>")),o=y.h,n=y.g,p=p.i("W.E");q.t();){m=q.d
if(m==null)m=p.a(m)
l=J.a7(m)
k=o.a(l.h(m,"partner_profiles"))
j=n.a(k==null?null:J.i(k,"partner_profile_categories"))
if(j==null)j=D.am
k=J.a7(j)
i=k.gZ(j)?null:o.a(J.i(a0.a(k.gK(j)),"partner_categories"))
k=i==null
h=A.C(k?null:J.i(i,"slug"))
if(h==null)h="other"
g=A.C(k?null:J.i(i,"label_pt"))
f=new A.Z(h,g==null?"Outros":g)
e=A.a0(l.h(m,"id"))
t.j(0,e,f)
if(C.bWt.q(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aH(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.R().b
q===$&&A.b()
a1=J
x=4
return A.d(q.P("payments").al(0,"booking_id, amount, refunded_amount, status").dN("booking_id",r).dN("status",["paid","refunded"]),$async$Id)
case 4:a0=a1.bh(a4,a0),q=A.u(a0),a0=new A.al(a0,a0.gA(a0),q.i("al<W.E>")),q=q.i("W.E")
case 5:if(!a0.t()){x=6
break}p=a0.d
if(p==null)p=q.a(p)
o=J.a7(p)
f=t.h(0,A.a0(o.h(p,"booking_id")))
if(f==null){x=5
break}n=A.ds(o.h(p,"amount"))
p=A.aH(o.h(p,"refunded_amount"))
if(p==null)p=null
d=n-(p==null?0:p)
if(d>0){p=s.h(0,f)
s.j(0,f,(p==null?0:p)+d)}x=5
break
case 6:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Id,w)},
b8Y(d,e){var x,w,v,u,t,s,r,q
for(x=J.uE(e),x=x.gX(x);x.t();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.dnB(u.a)
s=D.e.G5(d,new B.aZr(t))
if(s<0)s=D.e.G5(d,new B.aZs(w))
if(s>=0){r=d[s]
d[s]=new B.nq(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.du9(t)
w=q==null?w.a:q
D.e.B(d,new B.nq(w,v.b,t,0))}}},
P4(d,e){return this.bEg(d,e)},
bEg(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$P4=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.ga4(0).b
if(l==null||k==null){x=1
break}t=$.R()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.P("budget_categories").bh(0,A.T(["allocated",e],r,r)).V("wedding_id",l).V("name",d).al(0,"id"),$async$P4)
case 5:x=j.dq(g)?3:4
break
case 3:s=k.c
q=A.eO(new A.a6(s,new B.aZz(d),A.a8(s).i("a6<1>")))
t=t.b.P("budget_categories")
if(q==null)r=null
else{r=q.c
r=r==null?null:r.b}x=6
return A.d(t.da(0,A.T(["wedding_id",l,"name",d,"partner_category",r,"amount",0,"allocated",e,"position",s.length],y.N,y.X)),$async$P4)
case 6:case 4:t=u.ga4(0)
s=k.b
r=A.a([],y.Q)
for(p=k.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.H)(p),++n){q=p[n]
m=q.a
r.push(m===d?new B.nq(m,q.b,q.c,e):q)}u.sa4(0,t.axm(new B.a0Q(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$P4,w)},
a_O(d){return this.bEy(d)},
bEy(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$a_O=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.R().b
t===$&&A.b()
x=3
return A.d(t.P("budgets").yw(A.T(["wedding_id",r,"total",d,"updated_at",new A.ab(Date.now(),0,!1).cg()],y.N,y.K)),$async$a_O)
case 3:s=u.ga4(0).b
if(s==null){x=1
break}u.sa4(0,u.ga4(0).axm(new B.a0Q(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$a_O,w)}}
B.nq.prototype={
gao(d){return this.a}}
B.i3.prototype={}
B.a0Q.prototype={
gq_(){return D.e.cZ(this.c,0,new B.aZA())}}
var z=a.updateTypes(["y(nq)","uP()","S(S,nq)","nq(a5<c,@>)","zF()"])
B.aZt.prototype={
$1(d){return d.b},
$S:171}
B.aZu.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.aZv.prototype={
$1(d){return d},
$S:301}
B.aZw.prototype={
$1(d){return d},
$S:31}
B.aZx.prototype={
$1(d){return d},
$S:1332}
B.aZy.prototype={
$1(d){return null},
$S:11}
B.aZr.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aZs.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.aZz.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aZA.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dI8","dE1",3)
w(B,"dI7","dnA",4)
v(B.zF.prototype,"giM","d7",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[B.uP,B.nq,B.i3,B.a0Q])
w(B.zF,A.fd)
x(A.bz,[B.aZt,B.aZv,B.aZw,B.aZx,B.aZy,B.aZr,B.aZs,B.aZz])
w(B.aZu,A.bR)
w(B.aZA,A.cN)})()
A.br(b.typeUniverse,JSON.parse('{"zF":{"fd":["uP"]}}'))
var y=(function rtii(){var x=A.w
return{u:x("nq"),v:x("ef"),Q:x("r<nq>"),s:x("r<c>"),p:x("t<a5<c,@>>"),P:x("a5<c,@>"),W:x("a5<+(c,c),S>"),K:x("L"),O:x("+(c,c)"),N:x("c"),i:x("S"),z:x("@"),V:x("fm?"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<+(c,c),S>?"),X:x("L?"),H:x("~")}})();(function constants(){C.ahM=new B.uP(!1,null)
C.bJP={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bWt=new A.eA(C.bJP,5,A.w("eA<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWP","CK",()=>A.mW(B.dI7(),null,!1,null,null,A.w("zF"),A.w("uP")))})()};
(a=>{a["nraA1Dgk4PlPcOHcoEqIu9nMLa4="]=a.current})($__dart_deferred_initializers__);