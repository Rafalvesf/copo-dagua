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
_.db=x},cJu:function cJu(){},
aVw(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.cW[A.eC(x)-1]+", "+A.ax(x)+" "+B.be[A.aq(x)-1]
return""+A.ax(x)+" "+B.be[A.aq(x)-1]+" \u2013 "+A.ax(w)+" "+B.be[A.aq(w)-1]},
d_V(d){var x
if(d.at)return C.bR2
x=d.ax
if(x!=null)return new A.X("DESDE",A.aL(x,!1))
return C.bQO},
dKZ(d){var x
switch(d){case"concerto":x=E.hF
break
case"mercado":x=B.Ef
break
case"feira":x=B.bV
break
case"festival":x=E.hF
break
case"desporto":x=B.vt
break
case"cultura":x=F.nU
break
default:x=B.bV
break}return x},
a31:function a31(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,E,F
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[90],D)
C=c[287]
E=c[271]
F=c[273]
D.mM.prototype={
ga8a(){switch(this.c){case"concerto":var x="Concerto"
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
D.a31.prototype={
t(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.jv(u,w,B.bv,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.aqj,A.cd(8,A.h("Foto: "+A.p(v.db),1,B.a1,w,w,C.c6U,w,w),w,w,12,60,w,w)],x))
v=new A.bB(B.av,w,B.e0,B.y,u,w)}else v=A.w(B.J,A.b4(D.dKZ(v.c),B.t,w,w,this.d),B.r,B.cn,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["D<t<mM>>(at)"])
D.cJu.prototype={
$1(d){return this.aFK(d)},
aFK(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ab(Date.now(),0,!1)
a8=""+A.aD(a7)+"-"+B.f.aP(B.j.k(A.aq(a7)),2,"0")+"-"+B.f.aP(B.j.k(A.ax(a7)),2,"0")
u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.R("external_events").cu(0).V("published",!0).NV("ends_on.gte."+A.p(a8)+",and(ends_on.is.null,starts_on.gte."+A.p(a8)+")").tv(0,"starts_on").hg(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bi(s,y.i),o=A.u(p),p=new A.aj(p,p.gA(p),o.i("aj<V.E>")),o=o.i("V.E");p.q();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a6(n)
l=A.a0(m.h(n,"id"))
k=A.a0(m.h(n,"title"))
j=A.x(m.h(n,"category"))
if(j==null)j="festa"
i=A.x(m.h(n,"description"))
h=A.d9(A.a0(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.d9(A.a0(m.h(n,"ends_on")))
f=A.x(m.h(n,"time_label"))
e=A.x(m.h(n,"venue"))
d=A.x(m.h(n,"address"))
a0=A.a0(m.h(n,"city"))
a1=A.x(m.h(n,"district"))
a2=A.aF(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aF(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dS(m.h(n,"is_free"))
a5=A.aF(m.h(n,"price_from"))
if(a5==null)a5=null
J.bn(r,new D.mM(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.x(m.h(n,"price_note")),A.x(m.h(n,"ticket_url")),A.x(m.h(n,"source_url")),A.x(m.h(n,"organizer")),A.x(m.h(n,"image_url")),A.x(m.h(n,"image_credit"))))}v=r
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
x(D.mM,A.L)
x(D.cJu,A.bv)
x(D.a31,A.H)})()
A.bq(b.typeUniverse,JSON.parse('{"a31":{"H":[],"e":[],"f":[]}}'))
var y={a:A.B("r<mM>"),l:A.B("r<e>"),e:A.B("t<mM>"),i:A.B("a5<c,@>")};(function constants(){var x=a.makeConstList
C.bCw=x([B.as,B.anm],A.B("r<Y>"))
C.aIf=new A.k2(B.J,B.f9,B.dz,C.bCw,null,null)
C.afG=new A.O(null,null,null,null,null,C.aIf,B.z)
C.aqj=new A.ny(C.afG,B.cE,null,null)
C.Wr=x([],y.a)
C.bQO=new A.X("ENTRADA","Paga")
C.bR2=new A.X("ENTRADA","Gr\xe1tis")
C.c6U=new A.P(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZe","cV7",()=>A.ey(new D.cJu(),null,!1,null,null,y.e))})()};
(a=>{a["uRgOYIlnslHytajdkMZ975TUHak="]=a.current})($__dart_deferred_initializers__);