((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D={mG:function mG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.db=x},cF4:function cF4(){},
aU1(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.lL[A.jT(x)-1]+", "+A.aM(x)+" "+B.co[A.ay(x)-1]
return""+A.aM(x)+" "+B.co[A.ay(x)-1]+" \u2013 "+A.aM(w)+" "+B.co[A.ay(w)-1]},
d9N(d){var x
if(d.at)return C.bRl
x=d.ax
if(x!=null)return new A.a3("DESDE",A.aQ(x,!1))
return C.bR3},
dEt(d){var x
switch(d){case"concerto":x=E.fS
break
case"mercado":x=B.E4
break
case"feira":x=B.bL
break
case"festival":x=E.fS
break
case"desporto":x=B.vj
break
case"cultura":x=F.nF
break
default:x=B.bL
break}return x},
a2d:function a2d(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,F,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[90],D)
C=c[277]
F=c[262]
E=c[260]
D.mG.prototype={
ga82(){switch(this.c){case"concerto":var x="Concerto"
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
D.a2d.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.ks(u,w,B.bG,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.aqz,A.cg(8,A.i("Foto: "+A.q(v.db),1,B.a0,w,w,C.c6t,w,w,w),w,w,12,60,w,w)],x))
v=new A.bE(B.aC,w,B.ex,B.z,u,w)}else v=A.E(B.K,A.b2(D.dEt(v.c),B.t,w,w,this.d),B.r,B.e7,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mG>>(au)"])
D.cF4.prototype={
$1(d){return this.aFt(d)},
aFt(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ae(Date.now(),0,!1)
a8=""+A.aE(a7)+"-"+B.f.aW(B.i.k(A.ay(a7)),2,"0")+"-"+B.f.aW(B.i.k(A.aM(a7)),2,"0")
u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.R("external_events").cj(0).W("published",!0).YI("ends_on.gte."+A.q(a8)+",and(ends_on.is.null,starts_on.gte."+A.q(a8)+")").tK(0,"starts_on").jp(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bk(s,y.i),o=A.u(p),p=new A.ak(p,p.gA(p),o.i("ak<U.E>")),o=o.i("U.E");p.t();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a6(n)
l=A.a0(m.h(n,"id"))
k=A.a0(m.h(n,"title"))
j=A.B(m.h(n,"category"))
if(j==null)j="festa"
i=A.B(m.h(n,"description"))
h=A.d8(A.a0(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.d8(A.a0(m.h(n,"ends_on")))
f=A.B(m.h(n,"time_label"))
e=A.B(m.h(n,"venue"))
d=A.B(m.h(n,"address"))
a0=A.a0(m.h(n,"city"))
a1=A.B(m.h(n,"district"))
a2=A.aJ(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aJ(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dU(m.h(n,"is_free"))
a5=A.aJ(m.h(n,"price_from"))
if(a5==null)a5=null
J.bw(r,new D.mG(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.B(m.h(n,"price_note")),A.B(m.h(n,"ticket_url")),A.B(m.h(n,"source_url")),A.B(m.h(n,"organizer")),A.B(m.h(n,"image_url")),A.B(m.h(n,"image_credit"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
v=C.Wr
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
x(D.mG,A.H)
x(D.cF4,A.bx)
x(D.a2d,A.L)})()
A.bs(b.typeUniverse,JSON.parse('{"a2d":{"L":[],"e":[],"f":[]}}'))
var y={a:A.w("r<mG>"),l:A.w("r<e>"),e:A.w("t<mG>"),i:A.w("a4<c,@>")};(function constants(){var x=a.makeConstList
C.bCL=x([B.am,B.anD],A.w("r<W>"))
C.aIe=new A.km(B.K,B.fD,B.dF,C.bCL,null,null)
C.afR=new A.O(null,null,null,null,null,C.aIe,B.y)
C.aqz=new A.p7(C.afR,B.cY,null,null)
C.Wr=x([],y.a)
C.bR3=new A.a3("ENTRADA","Paga")
C.bRl=new A.a3("ENTRADA","Gr\xe1tis")
C.c6t=new A.M(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dSr","cPB",()=>A.eE(new D.cF4(),null,!1,null,null,y.e))})()};
(a=>{a["N3viNteQTzkyfAOldXaMi8ysZZA="]=a.current})($__dart_deferred_initializers__);