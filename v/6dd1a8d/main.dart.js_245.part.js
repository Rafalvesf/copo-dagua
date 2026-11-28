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
_.db=x},cJT:function cJT(){},
aV_(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.dv[A.fg(x)-1]+", "+A.ay(x)+" "+B.bg[A.an(x)-1]
return""+A.ay(x)+" "+B.bg[A.an(x)-1]+" \u2013 "+A.ay(w)+" "+B.bg[A.an(w)-1]},
dfp(d){var x
if(d.at)return C.bRB
x=d.ax
if(x!=null)return new A.Z("DESDE",A.aK(x,!1))
return C.bRl},
dKv(d){var x
switch(d){case"concerto":x=E.h1
break
case"mercado":x=B.Eg
break
case"feira":x=B.bR
break
case"festival":x=E.h1
break
case"desporto":x=B.vx
break
case"cultura":x=F.nV
break
default:x=B.bR
break}return x},
a2L:function a2L(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,F,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[91],D)
C=c[284]
F=c[270]
E=c[268]
D.mM.prototype={
ga8y(){switch(this.c){case"concerto":var x="Concerto"
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
D.a2L.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.k5(u,w,B.bG,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.aqA,A.cb(8,A.h("Foto: "+A.q(v.db),1,B.a1,w,w,C.c6R,w,w,w),w,w,12,60,w,w)],x))
v=new A.bC(B.ax,w,B.e6,B.y,u,w)}else v=A.y(B.K,A.b5(D.dKv(v.c),B.t,w,w,this.d),B.r,B.cp,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mM>>(at)"])
D.cJT.prototype={
$1(d){return this.aG5(d)},
aG5(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ac(Date.now(),0,!1)
a8=""+A.ax(a7)+"-"+B.f.aU(B.j.k(A.an(a7)),2,"0")+"-"+B.f.aU(B.j.k(A.ay(a7)),2,"0")
u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.P("external_events").cm(0).U("published",!0).Of("ends_on.gte."+A.q(a8)+",and(ends_on.is.null,starts_on.gte."+A.q(a8)+")").tD(0,"starts_on").hh(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bi(s,y.i),o=A.u(p),p=new A.aj(p,p.gA(p),o.i("aj<V.E>")),o=o.i("V.E");p.t();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a7(n)
l=A.a_(m.h(n,"id"))
k=A.a_(m.h(n,"title"))
j=A.C(m.h(n,"category"))
if(j==null)j="festa"
i=A.C(m.h(n,"description"))
h=A.dd(A.a_(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.dd(A.a_(m.h(n,"ends_on")))
f=A.C(m.h(n,"time_label"))
e=A.C(m.h(n,"venue"))
d=A.C(m.h(n,"address"))
a0=A.a_(m.h(n,"city"))
a1=A.C(m.h(n,"district"))
a2=A.aF(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aF(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dX(m.h(n,"is_free"))
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
v=C.Wt
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
x(D.mM,A.K)
x(D.cJT,A.bx)
x(D.a2L,A.M)})()
A.bu(b.typeUniverse,JSON.parse('{"a2L":{"M":[],"e":[],"f":[]}}'))
var y={a:A.x("r<mM>"),l:A.x("r<e>"),e:A.x("t<mM>"),i:A.x("a5<c,@>")};(function constants(){var x=a.makeConstList
C.bCZ=x([B.al,B.anD],A.x("r<X>"))
C.aIo=new A.k0(B.K,B.f9,B.dG,C.bCZ,null,null)
C.afM=new A.J(null,null,null,null,null,C.aIo,B.x)
C.aqA=new A.nx(C.afM,B.cG,null,null)
C.Wt=x([],y.a)
C.bRl=new A.Z("ENTRADA","Paga")
C.bRB=new A.Z("ENTRADA","Gr\xe1tis")
C.c6R=new A.Q(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYG","cV0",()=>A.ez(new D.cJT(),null,!1,null,null,y.e))})()};
(a=>{a["dRG/kUK3wgMjN7SHsqD/VmrC6s4="]=a.current})($__dart_deferred_initializers__);