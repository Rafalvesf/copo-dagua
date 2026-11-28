((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D={mw:function mw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.db=x},cBu:function cBu(){},
aSq(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.lC[A.jS(x)-1]+", "+A.aN(x)+" "+B.co[A.ay(x)-1]
return""+A.aN(x)+" "+B.co[A.ay(x)-1]+" \u2013 "+A.aN(w)+" "+B.co[A.ay(w)-1]},
d5S(d){var x
if(d.at)return C.bP1
x=d.ax
if(x!=null)return new A.a4("DESDE",A.aP(x,!1))
return C.bOO},
dzX(d){var x
switch(d){case"concerto":x=E.fL
break
case"mercado":x=B.Dw
break
case"feira":x=B.bS
break
case"festival":x=E.fL
break
case"desporto":x=B.v4
break
case"cultura":x=F.nx
break
default:x=B.bS
break}return x},
a1t:function a1t(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,F,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[87],D)
C=c[237]
F=c[314]
E=c[381]
D.mw.prototype={
ga7v(){switch(this.c){case"concerto":var x="Concerto"
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
D.a1t.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.kr(u,w,B.bL,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.p(u,A.a([C.aph,A.ci(8,A.i("Foto: "+A.q(v.db),1,B.a_,w,w,C.c3y,w,w,w),w,w,12,60,w,w)],x))
v=new A.bK(B.aC,w,B.eR,B.z,u,w)}else v=A.B(B.K,A.b3(D.dzX(v.c),B.u,w,w,this.d),B.r,B.fb,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<r<mw>>(au)"])
D.cBu.prototype={
$1(d){return this.aEB(d)},
aEB(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.af(Date.now(),0,!1)
a8=""+A.aG(a7)+"-"+B.f.aZ(B.i.k(A.ay(a7)),2,"0")+"-"+B.f.aZ(B.i.k(A.aN(a7)),2,"0")
u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.P("external_events").cj(0).W("published",!0).Yc("ends_on.gte."+A.q(a8)+",and(ends_on.is.null,starts_on.gte."+A.q(a8)+")").tF(0,"starts_on").jm(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bo(s,y.i),o=A.u(p),p=new A.ak(p,p.gA(p),o.i("ak<V.E>")),o=o.i("V.E");p.t();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a7(n)
l=A.a_(m.h(n,"id"))
k=A.a_(m.h(n,"title"))
j=A.J(m.h(n,"category"))
if(j==null)j="festa"
i=A.J(m.h(n,"description"))
h=A.d8(A.a_(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.d8(A.a_(m.h(n,"ends_on")))
f=A.J(m.h(n,"time_label"))
e=A.J(m.h(n,"venue"))
d=A.J(m.h(n,"address"))
a0=A.a_(m.h(n,"city"))
a1=A.J(m.h(n,"district"))
a2=A.aL(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aL(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.e6(m.h(n,"is_free"))
a5=A.aL(m.h(n,"price_from"))
if(a5==null)a5=null
J.by(r,new D.mw(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.J(m.h(n,"price_note")),A.J(m.h(n,"ticket_url")),A.J(m.h(n,"source_url")),A.J(m.h(n,"organizer")),A.J(m.h(n,"image_url")),A.J(m.h(n,"image_credit"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
v=C.VE
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
x(D.mw,A.L)
x(D.cBu,A.bx)
x(D.a1t,A.K)})()
A.bw(b.typeUniverse,JSON.parse('{"a1t":{"K":[],"e":[],"f":[]}}'))
var y={a:A.x("t<mw>"),l:A.x("t<e>"),e:A.x("r<mw>"),i:A.x("a5<c,@>")};(function constants(){var x=a.makeConstList
C.bAV=x([B.ak,B.amq],A.x("t<U>"))
C.aGJ=new A.km(B.K,B.fy,B.dD,C.bAV,null,null)
C.aeB=new A.O(null,null,null,null,null,C.aGJ,B.y)
C.aph=new A.p_(C.aeB,B.cW,null,null)
C.VE=x([],y.a)
C.bOO=new A.a4("ENTRADA","Paga")
C.bP1=new A.a4("ENTRADA","Gr\xe1tis")
C.c3y=new A.M(!0,B.u,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dND","cLJ",()=>A.ez(new D.cBu(),null,!1,null,null,y.e))})()};
(a=>{a["yLh3MlKYkdzHWRtTJu1MbbSdIsg="]=a.current})($__dart_deferred_initializers__);