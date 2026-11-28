((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D={mJ:function mJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.db=x},cIO:function cIO(){},
aV3(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.dY[A.fR(x)-1]+", "+A.aH(x)+" "+B.bG[A.au(x)-1]
return""+A.aH(x)+" "+B.bG[A.au(x)-1]+" \u2013 "+A.aH(w)+" "+B.bG[A.au(w)-1]},
ddZ(d){var x
if(d.at)return C.bSi
x=d.ax
if(x!=null)return new A.a1("DESDE",A.aM(x,!1))
return C.bS2},
dIU(d){var x
switch(d){case"concerto":x=E.fZ
break
case"mercado":x=B.Et
break
case"feira":x=B.bQ
break
case"festival":x=E.fZ
break
case"desporto":x=B.vL
break
case"cultura":x=F.o4
break
default:x=B.bQ
break}return x},
a2J:function a2J(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,F,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[91],D)
C=c[286]
F=c[273]
E=c[271]
D.mJ.prototype={
ga8J(){switch(this.c){case"concerto":var x="Concerto"
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
D.a2J.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.k1(u,w,B.bK,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.arh,A.ce(8,A.h("Foto: "+A.q(v.db),1,B.a2,w,w,C.c7V,w,w,w),w,w,12,60,w,w)],x))
v=new A.bD(B.az,w,B.e8,B.z,u,w)}else v=A.B(B.L,A.b4(D.dIU(v.c),B.t,w,w,this.d),B.r,B.cq,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mJ>>(av)"])
D.cIO.prototype={
$1(d){return this.aGd(d)},
aGd(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ad(Date.now(),0,!1)
a8=""+A.aD(a7)+"-"+B.f.aY(B.j.k(A.au(a7)),2,"0")+"-"+B.f.aY(B.j.k(A.aH(a7)),2,"0")
u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.R("external_events").ck(0).V("published",!0).Zb("ends_on.gte."+A.q(a8)+",and(ends_on.is.null,starts_on.gte."+A.q(a8)+")").tK(0,"starts_on").hS(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bh(s,y.i),o=A.u(p),p=new A.al(p,p.gA(p),o.i("al<V.E>")),o=o.i("V.E");p.t();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a7(n)
l=A.a_(m.h(n,"id"))
k=A.a_(m.h(n,"title"))
j=A.C(m.h(n,"category"))
if(j==null)j="festa"
i=A.C(m.h(n,"description"))
h=A.dc(A.a_(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.dc(A.a_(m.h(n,"ends_on")))
f=A.C(m.h(n,"time_label"))
e=A.C(m.h(n,"venue"))
d=A.C(m.h(n,"address"))
a0=A.a_(m.h(n,"city"))
a1=A.C(m.h(n,"district"))
a2=A.aL(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aL(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dY(m.h(n,"is_free"))
a5=A.aL(m.h(n,"price_from"))
if(a5==null)a5=null
J.bu(r,new D.mJ(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.C(m.h(n,"price_note")),A.C(m.h(n,"ticket_url")),A.C(m.h(n,"source_url")),A.C(m.h(n,"organizer")),A.C(m.h(n,"image_url")),A.C(m.h(n,"image_credit"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
v=C.X0
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
x(D.mJ,A.K)
x(D.cIO,A.by)
x(D.a2J,A.I)})()
A.bq(b.typeUniverse,JSON.parse('{"a2J":{"I":[],"e":[],"f":[]}}'))
var y={a:A.w("r<mJ>"),l:A.w("r<e>"),e:A.w("t<mJ>"),i:A.w("a5<c,@>")};(function constants(){var x=a.makeConstList
C.bDG=x([B.ap,B.aol],A.w("r<X>"))
C.aJ2=new A.jY(B.L,B.fl,B.dF,C.bDG,null,null)
C.agx=new A.L(null,null,null,null,null,C.aJ2,B.y)
C.arh=new A.nu(C.agx,B.cN,null,null)
C.X0=x([],y.a)
C.bS2=new A.a1("ENTRADA","Paga")
C.bSi=new A.a1("ENTRADA","Gr\xe1tis")
C.c7V=new A.P(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWX","cTG",()=>A.eI(new D.cIO(),null,!1,null,null,y.e))})()};
(a=>{a["Nv9mtp0Ei1WGdIXtOpQSvChhMeQ="]=a.current})($__dart_deferred_initializers__);