((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D={mM:function mM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.db=x},cJh:function cJh(){},
aUQ(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.dv[A.fH(x)-1]+", "+A.ay(x)+" "+B.bg[A.an(x)-1]
return""+A.ay(x)+" "+B.bg[A.an(x)-1]+" \u2013 "+A.ay(w)+" "+B.bg[A.an(w)-1]},
deG(d){var x
if(d.at)return C.bRl
x=d.ax
if(x!=null)return new A.Z("DESDE",A.aK(x,!1))
return C.bR5},
dJI(d){var x
switch(d){case"concerto":x=E.fZ
break
case"mercado":x=B.E7
break
case"feira":x=B.bR
break
case"festival":x=E.fZ
break
case"desporto":x=B.vv
break
case"cultura":x=F.nV
break
default:x=B.bR
break}return x},
a2G:function a2G(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,F,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[91],D)
C=c[286]
F=c[272]
E=c[270]
D.mM.prototype={
ga8t(){switch(this.c){case"concerto":var x="Concerto"
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
D.a2G.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.k5(u,w,B.bG,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.aqo,A.ca(8,A.h("Foto: "+A.q(v.db),1,B.a1,w,w,C.c6A,w,w,w),w,w,12,60,w,w)],x))
v=new A.bB(B.ax,w,B.e6,B.y,u,w)}else v=A.B(B.K,A.b5(D.dJI(v.c),B.t,w,w,this.d),B.r,B.cp,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mM>>(at)"])
D.cJh.prototype={
$1(d){return this.aFW(d)},
aFW(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ac(Date.now(),0,!1)
a8=""+A.ax(a7)+"-"+B.f.aV(B.j.k(A.an(a7)),2,"0")+"-"+B.f.aV(B.j.k(A.ay(a7)),2,"0")
u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.P("external_events").cm(0).V("published",!0).Ob("ends_on.gte."+A.q(a8)+",and(ends_on.is.null,starts_on.gte."+A.q(a8)+")").tD(0,"starts_on").hh(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bh(s,y.i),o=A.u(p),p=new A.aj(p,p.gA(p),o.i("aj<V.E>")),o=o.i("V.E");p.t();){n=p.d
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
a2=A.aF(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aF(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dW(m.h(n,"is_free"))
a5=A.aF(m.h(n,"price_from"))
if(a5==null)a5=null
J.br(r,new D.mM(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.C(m.h(n,"price_note")),A.C(m.h(n,"ticket_url")),A.C(m.h(n,"source_url")),A.C(m.h(n,"organizer")),A.C(m.h(n,"image_url")),A.C(m.h(n,"image_credit"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
v=C.Wn
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
x(D.mM,A.J)
x(D.cJh,A.bw)
x(D.a2G,A.M)})()
A.bt(b.typeUniverse,JSON.parse('{"a2G":{"M":[],"e":[],"f":[]}}'))
var y={a:A.w("r<mM>"),l:A.w("r<e>"),e:A.w("t<mM>"),i:A.w("a4<c,@>")};(function constants(){var x=a.makeConstList
C.bCM=x([B.al,B.anr],A.w("r<X>"))
C.aIa=new A.k0(B.K,B.f7,B.dG,C.bCM,null,null)
C.afB=new A.K(null,null,null,null,null,C.aIa,B.x)
C.aqo=new A.nx(C.afB,B.cF,null,null)
C.Wn=x([],y.a)
C.bR5=new A.Z("ENTRADA","Paga")
C.bRl=new A.Z("ENTRADA","Gr\xe1tis")
C.c6A=new A.Q(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXS","cUk",()=>A.ey(new D.cJh(),null,!1,null,null,y.e))})()};
(a=>{a["WhkHGnQtAmCWBFWIVb2grj3HJ34="]=a.current})($__dart_deferred_initializers__);