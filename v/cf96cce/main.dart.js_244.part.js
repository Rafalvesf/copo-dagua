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
_.db=x},cHF:function cHF(){},
aUS(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.ez[A.hi(x)-1]+", "+A.aH(x)+" "+B.bO[A.ax(x)-1]
return""+A.aH(x)+" "+B.bO[A.ax(x)-1]+" \u2013 "+A.aH(w)+" "+B.bO[A.ax(w)-1]},
dcF(d){var x
if(d.at)return C.bS8
x=d.ax
if(x!=null)return new A.a3("DESDE",A.aM(x,!1))
return C.bRT},
dHw(d){var x
switch(d){case"concerto":x=E.fY
break
case"mercado":x=B.Eq
break
case"feira":x=B.bN
break
case"festival":x=E.fY
break
case"desporto":x=B.vH
break
case"cultura":x=F.o_
break
default:x=B.bN
break}return x},
a2F:function a2F(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,F,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[92],D)
C=c[284]
F=c[271]
E=c[269]
D.mJ.prototype={
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
D.a2F.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.k0(u,w,B.bR,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.ar7,A.cc(8,A.h("Foto: "+A.q(v.db),1,B.a3,w,w,C.c7L,w,w,w),w,w,12,60,w,w)],x))
v=new A.bE(B.aB,w,B.en,B.z,u,w)}else v=A.B(B.L,A.b2(D.dHw(v.c),B.t,w,w,this.d),B.r,B.d0,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mJ>>(au)"])
D.cHF.prototype={
$1(d){return this.aFY(d)},
aFY(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ad(Date.now(),0,!1)
a8=""+A.aD(a7)+"-"+B.f.aY(B.j.k(A.ax(a7)),2,"0")+"-"+B.f.aY(B.j.k(A.aH(a7)),2,"0")
u=4
p=$.S().b
p===$&&A.b()
x=7
return A.d(p.R("external_events").cj(0).W("published",!0).Z_("ends_on.gte."+A.q(a8)+",and(ends_on.is.null,starts_on.gte."+A.q(a8)+")").tK(0,"starts_on").i8(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bl(s,y.i),o=A.u(p),p=new A.al(p,p.gA(p),o.i("al<V.E>")),o=o.i("V.E");p.t();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a7(n)
l=A.a1(m.h(n,"id"))
k=A.a1(m.h(n,"title"))
j=A.D(m.h(n,"category"))
if(j==null)j="festa"
i=A.D(m.h(n,"description"))
h=A.db(A.a1(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.db(A.a1(m.h(n,"ends_on")))
f=A.D(m.h(n,"time_label"))
e=A.D(m.h(n,"venue"))
d=A.D(m.h(n,"address"))
a0=A.a1(m.h(n,"city"))
a1=A.D(m.h(n,"district"))
a2=A.aL(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aL(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dX(m.h(n,"is_free"))
a5=A.aL(m.h(n,"price_from"))
if(a5==null)a5=null
J.by(r,new D.mJ(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.D(m.h(n,"price_note")),A.D(m.h(n,"ticket_url")),A.D(m.h(n,"source_url")),A.D(m.h(n,"organizer")),A.D(m.h(n,"image_url")),A.D(m.h(n,"image_credit"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
v=C.WR
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
x(D.mJ,A.J)
x(D.cHF,A.bw)
x(D.a2F,A.H)})()
A.bn(b.typeUniverse,JSON.parse('{"a2F":{"H":[],"e":[],"f":[]}}'))
var y={a:A.w("r<mJ>"),l:A.w("r<e>"),e:A.w("t<mJ>"),i:A.w("a5<c,@>")};(function constants(){var x=a.makeConstList
C.bDx=x([B.ap,B.aob],A.w("r<W>"))
C.aIW=new A.kp(B.L,B.fI,B.dN,C.bDx,null,null)
C.agn=new A.M(null,null,null,null,null,C.aIW,B.y)
C.ar7=new A.og(C.agn,B.cW,null,null)
C.WR=x([],y.a)
C.bRT=new A.a3("ENTRADA","Paga")
C.bS8=new A.a3("ENTRADA","Gr\xe1tis")
C.c7L=new A.P(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVv","cSo",()=>A.eG(new D.cHF(),null,!1,null,null,y.e))})()};
(a=>{a["xk3tdz4Gi3p87r8mCzB/cHHdD6k="]=a.current})($__dart_deferred_initializers__);