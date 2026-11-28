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
_.db=x},cBX:function cBX(){},
aSF(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.lF[A.jT(x)-1]+", "+A.aN(x)+" "+B.cn[A.ay(x)-1]
return""+A.aN(x)+" "+B.cn[A.ay(x)-1]+" \u2013 "+A.aN(w)+" "+B.cn[A.ay(w)-1]},
d6e(d){var x
if(d.at)return C.bPt
x=d.ax
if(x!=null)return new A.a4("DESDE",A.aP(x,!1))
return C.bPf},
dAk(d){var x
switch(d){case"concerto":x=E.fN
break
case"mercado":x=B.Dx
break
case"feira":x=B.bR
break
case"festival":x=E.fN
break
case"desporto":x=B.v5
break
case"cultura":x=F.nx
break
default:x=B.bR
break}return x},
a1C:function a1C(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,F,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[87],D)
C=c[262]
F=c[257]
E=c[255]
D.mw.prototype={
ga7w(){switch(this.c){case"concerto":var x="Concerto"
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
D.a1C.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.ks(u,w,B.bK,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.p(u,A.a([C.aps,A.ci(8,A.i("Foto: "+A.q(v.db),1,B.a0,w,w,C.c4m,w,w,w),w,w,12,60,w,w)],x))
v=new A.bH(B.aB,w,B.eS,B.z,u,w)}else v=A.C(B.K,A.b3(D.dAk(v.c),B.u,w,w,this.d),B.r,B.fd,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<r<mw>>(au)"])
D.cBX.prototype={
$1(d){return this.aEI(d)},
aEI(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
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
a4=A.dS(m.h(n,"is_free"))
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
v=C.VI
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
x(D.cBX,A.bx)
x(D.a1C,A.K)})()
A.bu(b.typeUniverse,JSON.parse('{"a1C":{"K":[],"e":[],"f":[]}}'))
var y={a:A.w("t<mw>"),l:A.w("t<e>"),e:A.w("r<mw>"),i:A.w("a5<c,@>")};(function constants(){var x=a.makeConstList
C.bBf=x([B.al,B.amy],A.w("t<U>"))
C.aGW=new A.km(B.K,B.fz,B.dD,C.bBf,null,null)
C.aeJ=new A.O(null,null,null,null,null,C.aGW,B.y)
C.aps=new A.p0(C.aeJ,B.cX,null,null)
C.VI=x([],y.a)
C.bPf=new A.a4("ENTRADA","Paga")
C.bPt=new A.a4("ENTRADA","Gr\xe1tis")
C.c4m=new A.M(!0,B.u,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dO7","cM7",()=>A.ez(new D.cBX(),null,!1,null,null,y.e))})()};
(a=>{a["XRdXzBC503NsH6PSU2p6ECXr1JI="]=a.current})($__dart_deferred_initializers__);