((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D={mK:function mK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.db=x},cJG:function cJG(){},
aUN(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.dr[A.fI(x)-1]+", "+A.aE(x)+" "+B.bg[A.aw(x)-1]
return""+A.aE(x)+" "+B.bg[A.aw(x)-1]+" \u2013 "+A.aE(w)+" "+B.bg[A.aw(w)-1]},
dfl(d){var x
if(d.at)return C.bR2
x=d.ax
if(x!=null)return new A.X("DESDE",A.aJ(x,!1))
return C.bQN},
dKx(d){var x
switch(d){case"concerto":x=E.h0
break
case"mercado":x=B.E0
break
case"feira":x=B.bQ
break
case"festival":x=E.h0
break
case"desporto":x=B.vj
break
case"cultura":x=F.nJ
break
default:x=B.bQ
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
C=c[283]
F=c[269]
E=c[267]
D.mK.prototype={
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
D.a2G.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.k7(u,w,B.bF,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.aqb,A.cb(8,A.h("Foto: "+A.p(v.db),1,B.a1,w,w,C.c6e,w,w),w,w,12,60,w,w)],x))
v=new A.bA(B.aw,w,B.e4,B.y,u,w)}else v=A.x(B.K,A.b9(D.dKx(v.c),B.t,w,w,this.d),B.r,B.co,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mK>>(at)"])
D.cJG.prototype={
$1(d){return this.aFd(d)},
aFd(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ab(Date.now(),0,!1)
a8=""+A.aM(a7)+"-"+B.f.aT(B.j.k(A.aw(a7)),2,"0")+"-"+B.f.aT(B.j.k(A.aE(a7)),2,"0")
u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.P("external_events").cl(0).V("published",!0).NO("ends_on.gte."+A.p(a8)+",and(ends_on.is.null,starts_on.gte."+A.p(a8)+")").tv(0,"starts_on").hf(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bf(s,y.i),o=A.u(p),p=new A.ag(p,p.gA(p),o.i("ag<V.E>")),o=o.i("V.E");p.q();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a7(n)
l=A.Y(m.h(n,"id"))
k=A.Y(m.h(n,"title"))
j=A.C(m.h(n,"category"))
if(j==null)j="festa"
i=A.C(m.h(n,"description"))
h=A.dc(A.Y(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.dc(A.Y(m.h(n,"ends_on")))
f=A.C(m.h(n,"time_label"))
e=A.C(m.h(n,"venue"))
d=A.C(m.h(n,"address"))
a0=A.Y(m.h(n,"city"))
a1=A.C(m.h(n,"district"))
a2=A.aD(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aD(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dW(m.h(n,"is_free"))
a5=A.aD(m.h(n,"price_from"))
if(a5==null)a5=null
J.bb(r,new D.mK(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.C(m.h(n,"price_note")),A.C(m.h(n,"ticket_url")),A.C(m.h(n,"source_url")),A.C(m.h(n,"organizer")),A.C(m.h(n,"image_url")),A.C(m.h(n,"image_credit"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
v=C.W8
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
x(D.mK,A.M)
x(D.cJG,A.bu)
x(D.a2G,A.L)})()
A.br(b.typeUniverse,JSON.parse('{"a2G":{"L":[],"e":[],"f":[]}}'))
var y={a:A.z("r<mK>"),l:A.z("r<e>"),e:A.z("t<mK>"),i:A.z("a3<c,@>")};(function constants(){var x=a.makeConstList
C.bCt=x([B.as,B.ang],A.z("r<Z>"))
C.aHW=new A.jK(B.K,B.f7,B.dx,C.bCt,null,null)
C.afr=new A.J(null,null,null,null,null,C.aHW,B.x)
C.aqb=new A.nu(C.afr,B.cG,null,null)
C.W8=x([],y.a)
C.bQN=new A.X("ENTRADA","Paga")
C.bR2=new A.X("ENTRADA","Gr\xe1tis")
C.c6e=new A.P(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYN","cUY",()=>A.ez(new D.cJG(),null,!1,null,null,y.e))})()};
(a=>{a["z8X+1WG78fSbc0f6m3IVJGgifEc="]=a.current})($__dart_deferred_initializers__);