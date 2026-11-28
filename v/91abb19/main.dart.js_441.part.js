((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dAf(d){var x="partner_category",w=J.a7(d),v=A.a2(w.h(d,"name")),u=A.du(w.h(d,"amount")),t=A.E(w.h(d,x))==null?null:A.qA(G.VO,A.a2(w.h(d,x)))
return new B.nn(v,u,t,A.du(w.h(d,"allocated")))},
djQ(){return new B.zE()},
djR(d){var x
A:{if("venue"===d){x=E.y2
break A}if("catering"===d){x=E.xZ
break A}if("photography"===d){x=E.y_
break A}if("music_dj"===d||"bands_musicians"===d){x=E.y0
break A}if("flowers_decor"===d){x=E.y1
break A}x=null
break A}return x},
uL:function uL(d,e){this.a=d
this.b=e},
zE:function zE(){this.b=this.x=null},
aYH:function aYH(){},
aYI:function aYI(d,e){this.a=d
this.b=e},
aYJ:function aYJ(){},
aYK:function aYK(){},
aYL:function aYL(){},
aYM:function aYM(){},
aYF:function aYF(d){this.a=d},
aYG:function aYG(d){this.a=d},
aYN:function aYN(d){this.a=d},
nn:function nn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i4:function i4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
a0s:function a0s(d,e){this.b=d
this.c=e},
aYO:function aYO(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[117]
E=c[218]
G=c[408]
B=a.updateHolder(c[76],B)
C=c[407]
B.uL.prototype={
awQ(d,e){var x=e==null?this.a:e
return new B.uL(x,d==null?this.b:d)},
io(d){return this.awQ(null,d)},
awB(d){return this.awQ(d,null)}}
B.zE.prototype={
d5(){var x=y.V,w=A.eP(this).H(A.cv($.ck(),new B.aYH(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.jg(new B.aYI(this,w),y.H)
return C.ahs},
c_(d,e){return this.bxg(0,e)},
bxg(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa3(0,v.ga3(0).io(!0))
u=$.T()
t=u.b
t===$&&A.b()
s=e.a
r=t.R("budgets").cj(0).X("wedding_id",s).dA().b7(new B.aYJ(),y.h)
q=u.b.R("budget_categories").cj(0).X("wedding_id",s).dl(0,"position",!0).b7(new B.aYK(),y.p)
p=v.HY(s).cE(new B.aYL(),new B.aYM(),y.Y)
x=2
return A.d(r,$async$c_)
case 2:o=g
x=3
return A.d(q,$async$c_)
case 3:n=g
x=o!=null?4:6
break
case 4:m=A.du(J.i(o,"total"))
x=5
break
case 6:m=e.as
if(m==null)m=0
x=m>0?7:8
break
case 7:x=9
return A.d(u.b.R("budgets").yq(A.S(["wedding_id",s,"total",m],y.N,y.K)),$async$c_)
case 9:case 8:case 5:l=J.d4(n,B.dEl(),y.u).by(0)
x=10
return A.d(p,$async$c_)
case 10:k=g
if(k!=null)v.b86(l,k)
v.sa3(0,new B.uL(!1,new B.a0s(m,l)))
return A.l(null,w)}})
return A.m($async$c_,w)},
Zu(d){var x=0,w=A.n(y.H),v=this,u
var $async$Zu=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eP(v).a0(0,$.ck(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.c_(0,u),$async$Zu)
case 4:case 3:return A.l(null,w)}})
return A.m($async$Zu,w)},
HY(d){return this.aSa(d)},
aSa(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$HY=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.T().b
a0===$&&A.b()
x=3
return A.d(a0.R("bookings").az(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").X("wedding_id",a2),$async$HY)
case 3:u=a4
a0=y.O
t=A.C(y.N,a0)
s=A.C(a0,y.i)
r=A.a([],y.s)
for(a0=y.P,q=J.bl(u,a0),p=A.u(q),q=new A.ak(q,q.gA(q),p.i("ak<U.E>")),o=y.h,n=y.g,p=p.i("U.E");q.t();){m=q.d
if(m==null)m=p.a(m)
l=J.a7(m)
k=o.a(l.h(m,"partner_profiles"))
j=n.a(k==null?null:J.i(k,"partner_profile_categories"))
if(j==null)j=D.al
k=J.a7(j)
i=k.gY(j)?null:o.a(J.i(a0.a(k.gM(j)),"partner_categories"))
k=i==null
h=A.E(k?null:J.i(i,"slug"))
if(h==null)h="other"
g=A.E(k?null:J.i(i,"label_pt"))
f=new A.a3(h,g==null?"Outros":g)
e=A.a2(l.h(m,"id"))
t.j(0,e,f)
if(C.bW7.p(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aK(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.T().b
q===$&&A.b()
a1=J
x=4
return A.d(q.R("payments").az(0,"booking_id, amount, refunded_amount, status").eP("booking_id",r).eP("status",["paid","refunded"]),$async$HY)
case 4:a0=a1.bl(a4,a0),q=A.u(a0),a0=new A.ak(a0,a0.gA(a0),q.i("ak<U.E>")),q=q.i("U.E")
case 5:if(!a0.t()){x=6
break}p=a0.d
if(p==null)p=q.a(p)
o=J.a7(p)
f=t.h(0,A.a2(o.h(p,"booking_id")))
if(f==null){x=5
break}n=A.du(o.h(p,"amount"))
p=A.aK(o.h(p,"refunded_amount"))
if(p==null)p=null
d=n-(p==null?0:p)
if(d>0){p=s.h(0,f)
s.j(0,f,(p==null?0:p)+d)}x=5
break
case 6:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$HY,w)},
b86(d,e){var x,w,v,u,t,s,r,q
for(x=J.uz(e),x=x.gV(x);x.t();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.djR(u.a)
s=D.e.FQ(d,new B.aYF(t))
if(s<0)s=D.e.FQ(d,new B.aYG(w))
if(s>=0){r=d[s]
d[s]=new B.nn(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.dqp(t)
w=q==null?w.a:q
D.e.B(d,new B.nn(w,v.b,t,0))}}},
OJ(d,e){return this.bDe(d,e)},
bDe(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$OJ=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.ga3(0).b
if(l==null||k==null){x=1
break}t=$.T()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.R("budget_categories").bh(0,A.S(["allocated",e],r,r)).X("wedding_id",l).X("name",d).az(0,"id"),$async$OJ)
case 5:x=j.dn(g)?3:4
break
case 3:s=k.c
q=A.eV(new A.a6(s,new B.aYN(d),A.a8(s).i("a6<1>")))
t=t.b.R("budget_categories")
if(q==null)r=null
else{r=q.c
r=r==null?null:r.b}x=6
return A.d(t.de(0,A.S(["wedding_id",l,"name",d,"partner_category",r,"amount",0,"allocated",e,"position",s.length],y.N,y.X)),$async$OJ)
case 6:case 4:t=u.ga3(0)
s=k.b
r=A.a([],y.Q)
for(p=k.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.I)(p),++n){q=p[n]
m=q.a
r.push(m===d?new B.nn(m,q.b,q.c,e):q)}u.sa3(0,t.awB(new B.a0s(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$OJ,w)},
a_d(d){return this.bDw(d)},
bDw(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$a_d=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.T().b
t===$&&A.b()
x=3
return A.d(t.R("budgets").yq(A.S(["wedding_id",r,"total",d,"updated_at",new A.ad(Date.now(),0,!1).ci()],y.N,y.K)),$async$a_d)
case 3:s=u.ga3(0).b
if(s==null){x=1
break}u.sa3(0,u.ga3(0).awB(new B.a0s(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$a_d,w)}}
B.nn.prototype={
gaq(d){return this.a}}
B.i4.prototype={}
B.a0s.prototype={
gpX(){return D.e.d2(this.c,0,new B.aYO())}}
var z=a.updateTypes(["y(nn)","uL()","R(R,nn)","nn(a4<c,@>)","zE()"])
B.aYH.prototype={
$1(d){return d.b},
$S:186}
B.aYI.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.aYJ.prototype={
$1(d){return d},
$S:382}
B.aYK.prototype={
$1(d){return d},
$S:29}
B.aYL.prototype={
$1(d){return d},
$S:1336}
B.aYM.prototype={
$1(d){return null},
$S:13}
B.aYF.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aYG.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.aYN.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aYO.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dEl","dAf",3)
w(B,"dEk","djQ",4)
v(B.zE.prototype,"giL","d5",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[B.uL,B.nn,B.i4,B.a0s])
w(B.zE,A.fb)
x(A.bx,[B.aYH,B.aYJ,B.aYK,B.aYL,B.aYM,B.aYF,B.aYG,B.aYN])
w(B.aYI,A.bT)
w(B.aYO,A.cQ)})()
A.bq(b.typeUniverse,JSON.parse('{"zE":{"fb":["uL"]}}'))
var y=(function rtii(){var x=A.w
return{u:x("nn"),v:x("ed"),Q:x("r<nn>"),s:x("r<c>"),p:x("t<a4<c,@>>"),P:x("a4<c,@>"),W:x("a4<+(c,c),R>"),K:x("J"),O:x("+(c,c)"),N:x("c"),i:x("R"),z:x("@"),V:x("fy?"),g:x("t<@>?"),h:x("a4<c,@>?"),Y:x("a4<+(c,c),R>?"),X:x("J?"),H:x("~")}})();(function constants(){C.ahs=new B.uL(!1,null)
C.bJw={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bW7=new A.ez(C.bJw,5,A.w("ez<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dSV","CE",()=>A.mU(B.dEk(),null,!1,null,null,A.w("zE"),A.w("uL")))})()};
(a=>{a["POSIQiq1XPnBogSa1Nqfwq0GfLo="]=a.current})($__dart_deferred_initializers__);