((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,E,F,B={cmN:function cmN(){},cmM:function cmM(){}}
J=c[1]
A=c[0]
C=c[2]
D=c[180]
E=c[190]
F=c[175]
B=a.updateHolder(c[95],B)
var z=a.updateTypes(["H<fb>(ax)"])
B.cmN.prototype={
$1(d){return this.aAG(d)},
aAG(b5){var x=0,w=A.n(y.k),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$$1=A.j(function(b6,b7){if(b6===1){t.push(b7)
x=u}for(;;)switch(x){case 0:b1=y.g
b5.M(A.cz($.bp(),new B.cmM(),y.e,b1),b1)
u=4
b1=$.Z()
a2=b1.b
a2===$&&A.b()
x=7
return A.d(a2.S("platform_settings").aP(0,"*").a0("id",1).dZ(0),$async$$1)
case 7:s=b7
r=null
a2=A.b9(J.h(s,"partner_free_months"))
a3=a2==null?null:C.k.D(a2)
q=a3==null?0:a3
a2=A.b9(J.h(s,"partner_free_extra_months"))
a4=a2==null?null:C.k.D(a2)
p=a4==null?0:a4
b1=b1.b
a2=b1.gbK().e.a
a2=a2==null?null:a2.r
o=a2==null?null:a2.a
x=o!=null?8:9
break
case 8:u=11
x=14
return A.d(b1.S("partner_profiles").aP(0,"founder_number").a0("id",o).em(),$async$$1)
case 14:n=b7
b1=A.b9(J.h(s,"founder_free_months"))
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
case 15:b1=$.Z()
a2=b1.b
a2===$&&A.b()
x=17
return A.d(a2.S("partner_profiles").aP(0,"created_at").a0("id",o).em(),$async$$1)
case 17:l=b7
a2=l
a2=a2==null?null:J.h(a2,"created_at")
a2=A.h_(A.u(a2==null?"":a2))
k=a2==null?null:a2.fq()
x=k!=null?18:19
break
case 18:j=A.c_(A.aJ(k),A.aD(k)+q,A.aV(k),0,0)
r=j
x=p>0&&!new A.ao(Date.now(),0,!1).f8(j)?20:21
break
case 20:b1=b1.b.S("payments").aP(0,"id").a0("partner_id",o).a0("status","paid")
x=22
return A.d(A.pV(b1.tS(b1.w7("paid_at","lt."+j.lQ().cp())),b1.$ti.c).lE(1),$async$$1)
case 22:i=b7
if(J.eh(i))r=A.c_(A.aJ(k),A.aD(k)+q+p,A.aV(k),0,0)
case 21:case 19:case 16:b1=J.h(s,"partner_fee_tiers")
a2=A.b9(J.h(s,"partner_fee_percentage"))
if(a2==null)a2=null
if(a2==null)a2=0
h=F.aXk(b1,a2,r)
x=o!=null?23:24
break
case 23:x=25
return A.d(b5.a2(0,$.cBj().$1(o).ghr(),y.j),$async$$1)
case 25:g=b7
if(g!=null)h=new D.fb(g.b.a,g.b.b,r)
case 24:x=o!=null?26:27
break
case 26:u=29
b1=$.Z().b
b1===$&&A.b()
x=32
return A.d(b1.S("partner_profiles").aP(0,"pro_until").a0("id",o).em(),$async$$1)
case 32:f=b7
b1=f
b1=b1==null?null:J.h(b1,"pro_until")
e=A.h_(A.u(b1==null?"":b1))
b1=A.b9(J.h(s,"pro_fee_discount"))
a7=b1==null?null:b1
d=a7==null?0:a7
if(e!=null&&e.ii(new A.ao(Date.now(),0,!1))&&d>0){a0=A.a([],y.l)
for(b1=h.a,a2=b1.length,a8=0;a8<b1.length;b1.length===a2||(0,A.L)(b1),++a8){a1=b1[a8]
a9=a1.b
b0=a1.a-d<0?0:a1.a-d
J.cg(a0,new A.US(b0,a9))}b1=h.b-d<0?0:h.b-d
a2=h.c
v=new D.fb(a0,b1,a2)
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
v=E.fX
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
B.cmM.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18};(function inheritance(){var x=a.inheritMany
x(A.bv,[B.cmN,B.cmM])})()
var y={e:A.v("cI"),k:A.v("fb"),j:A.v("H<+organizer,partner(fb,fb)?>"),l:A.v("q<+pct,upTo(X,X?)>"),g:A.v("c?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dsf","cBi",()=>A.eD(new B.cmN(),null,!1,null,null,y.k))})()};
(a=>{a["b0jTytEUVAWWK3SBiW8GX9r6B58="]=a.current})($__dart_deferred_initializers__);