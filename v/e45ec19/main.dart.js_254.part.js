((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D={mO:function mO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=x},cJB:function cJB(){},
aV0(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.d3[A.fp(x)-1]+", "+A.aD(x)+" "+B.be[A.aw(x)-1]
return""+A.aD(x)+" "+B.be[A.aw(x)-1]+" \u2013 "+A.aD(w)+" "+B.be[A.aw(w)-1]},
d_K(d){var x
if(d.at)return C.bRh
x=d.ax
if(x!=null)return new A.X("DESDE",A.aJ(x,!1))
return C.bR1},
dKE(d){var x
switch(d){case"concerto":x=E.h1
break
case"mercado":x=B.E5
break
case"feira":x=B.bS
break
case"festival":x=E.h1
break
case"desporto":x=B.vi
break
case"cultura":x=F.nJ
break
default:x=B.bS
break}return x},
a2P:function a2P(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,F,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[91],D)
C=c[283]
F=c[269]
E=c[267]
D.mO.prototype={
ga7V(){switch(this.c){case"concerto":var x="Concerto"
break
case"mercado":x="Mercado"
break
case"feira":x="Feira"
break
case"festival":x="Festival"
break
case"festa":x="Festa"
break
case"desporto":x="Desporto"
break
case"cultura":x="Cultura"
break
default:x="Evento"
break}return x}}
D.a2P.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.jx(u,w,B.bz,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.p(u,A.a([C.aqm,A.c8(8,A.h("Foto: "+A.p(v.db),1,B.a1,w,w,C.c6A,w,w),w,w,12,60,w,w)],x))
v=new A.bA(B.aw,w,B.e_,B.y,u,w)}else v=A.w(B.K,A.b9(D.dKE(v.c),B.t,w,w,this.d),B.r,B.co,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mO>>(at)"])
D.cJB.prototype={
$1(d){return this.aFc(d)},
aFc(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ad(Date.now(),0,!1)
a8=""+A.aL(a7)+"-"+B.f.aT(B.j.k(A.aw(a7)),2,"0")+"-"+B.f.aT(B.j.k(A.aD(a7)),2,"0")
u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.S("external_events").cv(0).X("published",!0).NN("ends_on.gte."+A.p(a8)+",and(ends_on.is.null,starts_on.gte."+A.p(a8)+")").tu(0,"starts_on").hg(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bj(s,y.i),o=A.u(p),p=new A.aj(p,p.gA(p),o.i("aj<V.E>")),o=o.i("V.E");p.q();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a6(n)
l=A.a_(m.h(n,"id"))
k=A.a_(m.h(n,"title"))
j=A.B(m.h(n,"category"))
if(j==null)j="festa"
i=A.B(m.h(n,"description"))
h=A.da(A.a_(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.da(A.a_(m.h(n,"ends_on")))
f=A.B(m.h(n,"time_label"))
e=A.B(m.h(n,"venue"))
d=A.B(m.h(n,"address"))
a0=A.a_(m.h(n,"city"))
a1=A.B(m.h(n,"district"))
a2=A.aE(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aE(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dW(m.h(n,"is_free"))
a5=A.aE(m.h(n,"price_from"))
if(a5==null)a5=null
J.bn(r,new D.mO(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.B(m.h(n,"price_note")),A.B(m.h(n,"ticket_url")),A.B(m.h(n,"source_url")),A.B(m.h(n,"organizer")),A.B(m.h(n,"image_url")),A.B(m.h(n,"image_credit"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
v=C.We
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(D.mO,A.M)
x(D.cJB,A.bu)
x(D.a2P,A.L)})()
A.br(b.typeUniverse,JSON.parse('{"a2P":{"L":[],"e":[],"f":[]}}'))
var y={a:A.A("r<mO>"),l:A.A("r<e>"),e:A.A("t<mO>"),i:A.A("a3<c,@>")};(function constants(){var x=a.makeConstList
C.bCJ=x([B.as,B.anp],A.A("r<Y>"))
C.aI7=new A.jp(B.K,B.eL,B.dj,C.bCJ,null,null)
C.afx=new A.J(null,null,null,null,null,C.aI7,B.x)
C.aqm=new A.mK(C.afx,B.cA,null,null)
C.We=x([],y.a)
C.bR1=new A.X("ENTRADA","Paga")
C.bRh=new A.X("ENTRADA","Gr\xe1tis")
C.c6A=new A.P(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYV","cV1",()=>A.ey(new D.cJB(),null,!1,null,null,y.e))})()};
(a=>{a["aKcyYSTdpZUU4SnRreZUr+wwRZE="]=a.current})($__dart_deferred_initializers__);