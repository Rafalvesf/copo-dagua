((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D={mv:function mv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.db=x},cBr:function cBr(){},
aSp(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.lF[A.jS(x)-1]+", "+A.aM(x)+" "+B.cp[A.ay(x)-1]
return""+A.aM(x)+" "+B.cp[A.ay(x)-1]+" \u2013 "+A.aM(w)+" "+B.cp[A.ay(w)-1]},
d5O(d){var x
if(d.at)return C.bOY
x=d.ax
if(x!=null)return new A.a5("DESDE",A.aO(x,!1))
return C.bOK},
dzS(d){var x
switch(d){case"concerto":x=E.fN
break
case"mercado":x=B.Dw
break
case"feira":x=B.bT
break
case"festival":x=E.fN
break
case"desporto":x=B.v4
break
case"cultura":x=F.ny
break
default:x=B.bT
break}return x},
a1r:function a1r(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,F,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[86],D)
C=c[237]
F=c[314]
E=c[380]
D.mv.prototype={
ga7x(){switch(this.c){case"concerto":var x="Concerto"
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
D.a1r.prototype={
v(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.kr(u,w,B.bM,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.p(u,A.a([C.aph,A.ci(8,A.i("Foto: "+A.q(v.db),1,B.a_,w,w,C.c3t,w,w,w),w,w,12,60,w,w)],x))
v=new A.bK(B.aC,w,B.eR,B.z,u,w)}else v=A.C(B.K,A.b2(D.dzS(v.c),B.t,w,w,this.d),B.r,B.fc,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<r<mv>>(au)"])
D.cBr.prototype={
$1(d){return this.aED(d)},
aED(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.af(Date.now(),0,!1)
a8=""+A.aG(a7)+"-"+B.f.aZ(B.i.k(A.ay(a7)),2,"0")+"-"+B.f.aZ(B.i.k(A.aM(a7)),2,"0")
u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.P("external_events").cj(0).W("published",!0).Yc("ends_on.gte."+A.q(a8)+",and(ends_on.is.null,starts_on.gte."+A.q(a8)+")").tF(0,"starts_on").jm(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bo(s,y.i),o=A.u(p),p=new A.ai(p,p.gA(p),o.i("ai<U.E>")),o=o.i("U.E");p.t();){n=p.d
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
a2=A.aN(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aN(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.e5(m.h(n,"is_free"))
a5=A.aN(m.h(n,"price_from"))
if(a5==null)a5=null
J.by(r,new D.mv(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.J(m.h(n,"price_note")),A.J(m.h(n,"ticket_url")),A.J(m.h(n,"source_url")),A.J(m.h(n,"organizer")),A.J(m.h(n,"image_url")),A.J(m.h(n,"image_credit"))))}v=r
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
x(D.mv,A.L)
x(D.cBr,A.bw)
x(D.a1r,A.M)})()
A.bx(b.typeUniverse,JSON.parse('{"a1r":{"M":[],"e":[],"f":[]}}'))
var y={a:A.x("t<mv>"),l:A.x("t<e>"),e:A.x("r<mv>"),i:A.x("a4<c,@>")};(function constants(){var x=a.makeConstList
C.bAQ=x([B.ak,B.amq],A.x("t<W>"))
C.aGG=new A.km(B.K,B.fz,B.dC,C.bAQ,null,null)
C.aeB=new A.O(null,null,null,null,null,C.aGG,B.y)
C.aph=new A.p_(C.aeB,B.cX,null,null)
C.VE=x([],y.a)
C.bOK=new A.a5("ENTRADA","Paga")
C.bOY=new A.a5("ENTRADA","Gr\xe1tis")
C.c3t=new A.K(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dNy","cLG",()=>A.ey(new D.cBr(),null,!1,null,null,y.e))})()};
(a=>{a["14E3CWVVlXTTmDuoppMyH7mIXeA="]=a.current})($__dart_deferred_initializers__);