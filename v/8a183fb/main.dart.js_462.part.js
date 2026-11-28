((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dDv(d){var x="partner_category",w=J.a7(d),v=A.a_(w.h(d,"name")),u=A.ds(w.h(d,"amount")),t=A.C(w.h(d,x))==null?null:A.qH(G.W4,A.a_(w.h(d,x)))
return new B.np(v,u,t,A.ds(w.h(d,"allocated")))},
dn2(){return new B.zF()},
dn3(d){var x
A:{if("venue"===d){x=E.yf
break A}if("catering"===d){x=E.yb
break A}if("photography"===d){x=E.yc
break A}if("music_dj"===d||"bands_musicians"===d){x=E.yd
break A}if("flowers_decor"===d){x=E.ye
break A}x=null
break A}return x},
uN:function uN(d,e){this.a=d
this.b=e},
zF:function zF(){this.b=this.x=null},
aZo:function aZo(){},
aZp:function aZp(d,e){this.a=d
this.b=e},
aZq:function aZq(){},
aZr:function aZr(){},
aZs:function aZs(){},
aZt:function aZt(){},
aZm:function aZm(d){this.a=d},
aZn:function aZn(d){this.a=d},
aZu:function aZu(d){this.a=d},
np:function np(d,e,f,g){var _=this
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
aZv:function aZv(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[117]
E=c[222]
G=c[416]
B=a.updateHolder(c[77],B)
C=c[415]
B.uN.prototype={
axu(d,e){var x=e==null?this.a:e
return new B.uN(x,d==null?this.b:d)},
ip(d){return this.axu(null,d)},
axf(d){return this.axu(d,null)}}
B.zF.prototype={
d7(){var x=y.V,w=A.eT(this).H(A.cI($.cr(),new B.aZo(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.ji(new B.aZp(this,w),y.H)
return C.ahH},
c_(d,e){return this.by9(0,e)},
by9(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ip(!0))
u=$.R()
t=u.b
t===$&&A.b()
s=e.a
r=t.R("budgets").ck(0).V("wedding_id",s).cS().b5(new B.aZq(),y.h)
q=u.b.R("budget_categories").ck(0).V("wedding_id",s).d1(0,"position",!0).b5(new B.aZr(),y.p)
p=v.Ia(s).cD(new B.aZs(),new B.aZt(),y.Y)
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
return A.d(u.b.R("budgets").yx(A.T(["wedding_id",s,"total",m],y.N,y.K)),$async$c_)
case 9:case 8:case 5:l=J.d6(n,B.dHC(),y.u).by(0)
x=10
return A.d(p,$async$c_)
case 10:k=g
if(k!=null)v.b8P(l,k)
v.sa4(0,new B.uN(!1,new B.a0Q(m,l)))
return A.l(null,w)}})
return A.m($async$c_,w)},
ZY(d){var x=0,w=A.n(y.H),v=this,u
var $async$ZY=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eT(v).a1(0,$.cr(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.c_(0,u),$async$ZY)
case 4:case 3:return A.l(null,w)}})
return A.m($async$ZY,w)},
Ia(d){return this.aSQ(d)},
aSQ(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ia=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.R().b
a0===$&&A.b()
x=3
return A.d(a0.R("bookings").am(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").V("wedding_id",a2),$async$Ia)
case 3:u=a4
a0=y.O
t=A.E(y.N,a0)
s=A.E(a0,y.i)
r=A.a([],y.s)
for(a0=y.P,q=J.bh(u,a0),p=A.u(q),q=new A.al(q,q.gA(q),p.i("al<V.E>")),o=y.h,n=y.g,p=p.i("V.E");q.t();){m=q.d
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
f=new A.a1(h,g==null?"Outros":g)
e=A.a_(l.h(m,"id"))
t.j(0,e,f)
if(C.bWo.q(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aL(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.R().b
q===$&&A.b()
a1=J
x=4
return A.d(q.R("payments").am(0,"booking_id, amount, refunded_amount, status").dV("booking_id",r).dV("status",["paid","refunded"]),$async$Ia)
case 4:a0=a1.bh(a4,a0),q=A.u(a0),a0=new A.al(a0,a0.gA(a0),q.i("al<V.E>")),q=q.i("V.E")
case 5:if(!a0.t()){x=6
break}p=a0.d
if(p==null)p=q.a(p)
o=J.a7(p)
f=t.h(0,A.a_(o.h(p,"booking_id")))
if(f==null){x=5
break}n=A.ds(o.h(p,"amount"))
p=A.aL(o.h(p,"refunded_amount"))
if(p==null)p=null
d=n-(p==null?0:p)
if(d>0){p=s.h(0,f)
s.j(0,f,(p==null?0:p)+d)}x=5
break
case 6:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Ia,w)},
b8P(d,e){var x,w,v,u,t,s,r,q
for(x=J.uC(e),x=x.gX(x);x.t();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.dn3(u.a)
s=D.e.G3(d,new B.aZm(t))
if(s<0)s=D.e.G3(d,new B.aZn(w))
if(s>=0){r=d[s]
d[s]=new B.np(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.dtD(t)
w=q==null?w.a:q
D.e.B(d,new B.np(w,v.b,t,0))}}},
P2(d,e){return this.bE6(d,e)},
bE6(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$P2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.ga4(0).b
if(l==null||k==null){x=1
break}t=$.R()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.R("budget_categories").bh(0,A.T(["allocated",e],r,r)).V("wedding_id",l).V("name",d).am(0,"id"),$async$P2)
case 5:x=j.dq(g)?3:4
break
case 3:s=k.c
q=A.eV(new A.a6(s,new B.aZu(d),A.a8(s).i("a6<1>")))
t=t.b.R("budget_categories")
if(q==null)r=null
else{r=q.c
r=r==null?null:r.b}x=6
return A.d(t.da(0,A.T(["wedding_id",l,"name",d,"partner_category",r,"amount",0,"allocated",e,"position",s.length],y.N,y.X)),$async$P2)
case 6:case 4:t=u.ga4(0)
s=k.b
r=A.a([],y.Q)
for(p=k.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.H)(p),++n){q=p[n]
m=q.a
r.push(m===d?new B.np(m,q.b,q.c,e):q)}u.sa4(0,t.axf(new B.a0Q(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$P2,w)},
a_H(d){return this.bEo(d)},
bEo(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$a_H=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.R().b
t===$&&A.b()
x=3
return A.d(t.R("budgets").yx(A.T(["wedding_id",r,"total",d,"updated_at",new A.ad(Date.now(),0,!1).cg()],y.N,y.K)),$async$a_H)
case 3:s=u.ga4(0).b
if(s==null){x=1
break}u.sa4(0,u.ga4(0).axf(new B.a0Q(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$a_H,w)}}
B.np.prototype={
gao(d){return this.a}}
B.i3.prototype={}
B.a0Q.prototype={
gpX(){return D.e.cY(this.c,0,new B.aZv())}}
var z=a.updateTypes(["x(np)","uN()","S(S,np)","np(a5<c,@>)","zF()"])
B.aZo.prototype={
$1(d){return d.b},
$S:160}
B.aZp.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.aZq.prototype={
$1(d){return d},
$S:300}
B.aZr.prototype={
$1(d){return d},
$S:29}
B.aZs.prototype={
$1(d){return d},
$S:1332}
B.aZt.prototype={
$1(d){return null},
$S:11}
B.aZm.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aZn.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.aZu.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aZv.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dHC","dDv",3)
w(B,"dHB","dn2",4)
v(B.zF.prototype,"giM","d7",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.K,[B.uN,B.np,B.i3,B.a0Q])
w(B.zF,A.fd)
x(A.by,[B.aZo,B.aZq,B.aZr,B.aZs,B.aZt,B.aZm,B.aZn,B.aZu])
w(B.aZp,A.bR)
w(B.aZv,A.cN)})()
A.bq(b.typeUniverse,JSON.parse('{"zF":{"fd":["uN"]}}'))
var y=(function rtii(){var x=A.w
return{u:x("np"),v:x("ef"),Q:x("r<np>"),s:x("r<c>"),p:x("t<a5<c,@>>"),P:x("a5<c,@>"),W:x("a5<+(c,c),S>"),K:x("K"),O:x("+(c,c)"),N:x("c"),i:x("S"),z:x("@"),V:x("fm?"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<+(c,c),S>?"),X:x("K?"),H:x("~")}})();(function constants(){C.ahH=new B.uN(!1,null)
C.bJK={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bWo=new A.eA(C.bJK,5,A.w("eA<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWi","CJ",()=>A.mV(B.dHB(),null,!1,null,null,A.w("zF"),A.w("uN")))})()};
(a=>{a["8aldXdV33kmI7EXveTejjDKB6rE="]=a.current})($__dart_deferred_initializers__);