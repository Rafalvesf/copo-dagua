((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,E,F,B={cnG:function cnG(){},cnF:function cnF(){}}
J=c[1]
A=c[0]
C=c[2]
D=c[180]
E=c[193]
F=c[176]
B=a.updateHolder(c[95],B)
var z=a.updateTypes(["H<fc>(ax)"])
B.cnG.prototype={
$1(d){return this.aAZ(d)},
aAZ(b5){var x=0,w=A.n(y.k),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$$1=A.j(function(b6,b7){if(b6===1){t.push(b7)
x=u}for(;;)switch(x){case 0:b1=y.g
b5.M(A.cB($.be(),new B.cnF(),y.e,b1),b1)
u=4
b1=$.W()
a2=b1.b
a2===$&&A.b()
x=7
return A.d(a2.T("platform_settings").aN(0,"*").a_("id",1).e_(0),$async$$1)
case 7:s=b7
r=null
a2=A.b8(J.h(s,"partner_free_months"))
a3=a2==null?null:C.k.D(a2)
q=a3==null?0:a3
a2=A.b8(J.h(s,"partner_free_extra_months"))
a4=a2==null?null:C.k.D(a2)
p=a4==null?0:a4
b1=b1.b
a2=b1.gbI().e.a
a2=a2==null?null:a2.r
o=a2==null?null:a2.a
x=o!=null?8:9
break
case 8:u=11
x=14
return A.d(b1.T("partner_profiles").aN(0,"founder_number").a_("id",o).ec(),$async$$1)
case 14:n=b7
b1=A.b8(J.h(s,"founder_free_months"))
a5=b1==null?null:C.k.D(b1)
m=a5==null?0:a5
b1=n
if((b1==null?null:J.h(b1,"founder_number"))!=null&&m>q)q=m
u=4
x=13
break
case 11:u=10
b2=t.pop()
x=13
break
case 10:x=4
break
case 13:case 9:x=q>0&&o!=null?15:16
break
case 15:b1=$.W()
a2=b1.b
a2===$&&A.b()
x=17
return A.d(a2.T("partner_profiles").aN(0,"created_at").a_("id",o).ec(),$async$$1)
case 17:l=b7
a2=l
a2=a2==null?null:J.h(a2,"created_at")
a2=A.fN(A.u(a2==null?"":a2))
k=a2==null?null:a2.fq()
x=k!=null?18:19
break
case 18:j=A.cd(A.aM(k),A.aH(k)+q,A.aY(k),0,0)
r=j
x=p>0&&!new A.am(Date.now(),0,!1).fj(j)?20:21
break
case 20:b1=b1.b.T("payments").aN(0,"id").a_("partner_id",o).a_("status","paid")
x=22
return A.d(A.pX(b1.tR(b1.w7("paid_at","lt."+j.lP().cu())),b1.$ti.c).lD(1),$async$$1)
case 22:i=b7
if(J.ef(i))r=A.cd(A.aM(k),A.aH(k)+q+p,A.aY(k),0,0)
case 21:case 19:case 16:b1=J.h(s,"partner_fee_tiers")
a2=A.b8(J.h(s,"partner_fee_percentage"))
if(a2==null)a2=null
if(a2==null)a2=0
h=F.aXE(b1,a2,r)
x=o!=null?23:24
break
case 23:x=25
return A.d(b5.a2(0,$.cCj().$1(o).ghr(),y.j),$async$$1)
case 25:g=b7
if(g!=null)h=new D.fc(g.b.a,g.b.b,r)
case 24:x=o!=null?26:27
break
case 26:u=29
b1=$.W().b
b1===$&&A.b()
x=32
return A.d(b1.T("partner_profiles").aN(0,"pro_until").a_("id",o).ec(),$async$$1)
case 32:f=b7
b1=f
b1=b1==null?null:J.h(b1,"pro_until")
e=A.fN(A.u(b1==null?"":b1))
b1=A.b8(J.h(s,"pro_fee_discount"))
a7=b1==null?null:b1
d=a7==null?0:a7
if(e!=null&&e.iD(new A.am(Date.now(),0,!1))&&d>0){a0=A.a([],y.l)
for(b1=h.a,a2=b1.length,a8=0;a8<b1.length;b1.length===a2||(0,A.K)(b1),++a8){a1=b1[a8]
a9=a1.b
b0=a1.a-d<0?0:a1.a-d
J.cg(a0,new A.V7(b0,a9))}b1=h.b-d<0?0:h.b-d
a2=h.c
v=new D.fc(a0,b1,a2)
x=1
break}u=4
x=31
break
case 29:u=28
b3=t.pop()
x=31
break
case 28:x=4
break
case 31:case 27:a0=h
v=a0
x=1
break
u=2
x=6
break
case 4:u=3
b4=t.pop()
v=E.fW
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0}
B.cnF.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18};(function inheritance(){var x=a.inheritMany
x(A.bv,[B.cnG,B.cnF])})()
var y={e:A.v("cC"),k:A.v("fc"),j:A.v("H<+organizer,partner(fc,fc)?>"),l:A.v("q<+pct,upTo(V,V?)>"),g:A.v("c?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dto","cCi",()=>A.eA(new B.cnG(),null,!1,null,null,y.k))})()};
(a=>{a["zxce0vmb3djv+wXExtvva1Q2Pr0="]=a.current})($__dart_deferred_initializers__);