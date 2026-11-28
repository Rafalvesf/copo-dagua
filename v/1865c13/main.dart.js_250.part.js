((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D={mH:function mH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.db=x},cIi:function cIi(){},
aUa(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.dp[A.fD(x)-1]+", "+A.aD(x)+" "+B.bg[A.av(x)-1]
return""+A.aD(x)+" "+B.bg[A.av(x)-1]+" \u2013 "+A.aD(w)+" "+B.bg[A.av(w)-1]},
ddO(d){var x
if(d.at)return C.bQV
x=d.ax
if(x!=null)return new A.X("DESDE",A.aI(x,!1))
return C.bQF},
dIS(d){var x
switch(d){case"concerto":x=E.h_
break
case"mercado":x=B.DX
break
case"feira":x=B.bQ
break
case"festival":x=E.h_
break
case"desporto":x=B.vf
break
case"cultura":x=F.nI
break
default:x=B.bQ
break}return x},
a2s:function a2s(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,F,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[91],D)
C=c[282]
F=c[268]
E=c[266]
D.mH.prototype={
ga7N(){switch(this.c){case"concerto":var x="Concerto"
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
D.a2s.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.k2(u,w,B.bE,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.aq9,A.ca(8,A.h("Foto: "+A.p(v.db),1,B.a1,w,w,C.c5Y,w,w),w,w,12,60,w,w)],x))
v=new A.bC(B.aw,w,B.e4,B.y,u,w)}else v=A.x(B.K,A.b8(D.dIS(v.c),B.t,w,w,this.d),B.r,B.cn,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mH>>(as)"])
D.cIi.prototype={
$1(d){return this.aF_(d)},
aF_(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ae(Date.now(),0,!1)
a8=""+A.aL(a7)+"-"+B.f.aT(B.j.k(A.av(a7)),2,"0")+"-"+B.f.aT(B.j.k(A.aD(a7)),2,"0")
u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.P("external_events").ck(0).U("published",!0).NI("ends_on.gte."+A.p(a8)+",and(ends_on.is.null,starts_on.gte."+A.p(a8)+")").ts(0,"starts_on").hd(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bd(s,y.i),o=A.u(p),p=new A.ag(p,p.gA(p),o.i("ag<V.E>")),o=o.i("V.E");p.q();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a7(n)
l=A.Y(m.h(n,"id"))
k=A.Y(m.h(n,"title"))
j=A.B(m.h(n,"category"))
if(j==null)j="festa"
i=A.B(m.h(n,"description"))
h=A.db(A.Y(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.db(A.Y(m.h(n,"ends_on")))
f=A.B(m.h(n,"time_label"))
e=A.B(m.h(n,"venue"))
d=A.B(m.h(n,"address"))
a0=A.Y(m.h(n,"city"))
a1=A.B(m.h(n,"district"))
a2=A.aC(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aC(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dU(m.h(n,"is_free"))
a5=A.aC(m.h(n,"price_from"))
if(a5==null)a5=null
J.bp(r,new D.mH(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.B(m.h(n,"price_note")),A.B(m.h(n,"ticket_url")),A.B(m.h(n,"source_url")),A.B(m.h(n,"organizer")),A.B(m.h(n,"image_url")),A.B(m.h(n,"image_credit"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
v=C.W4
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
x(D.mH,A.L)
x(D.cIi,A.bt)
x(D.a2s,A.M)})()
A.bq(b.typeUniverse,JSON.parse('{"a2s":{"M":[],"e":[],"f":[]}}'))
var y={a:A.y("r<mH>"),l:A.y("r<e>"),e:A.y("t<mH>"),i:A.y("a5<c,@>")};(function constants(){var x=a.makeConstList
C.bCp=x([B.as,B.and],A.y("r<Z>"))
C.aHT=new A.jI(B.K,B.f6,B.dv,C.bCp,null,null)
C.afn=new A.I(null,null,null,null,null,C.aHT,B.x)
C.aq9=new A.ns(C.afn,B.cF,null,null)
C.W4=x([],y.a)
C.bQF=new A.X("ENTRADA","Paga")
C.bQV=new A.X("ENTRADA","Gr\xe1tis")
C.c5Y=new A.Q(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dX_","cTv",()=>A.ey(new D.cIi(),null,!1,null,null,y.e))})()};
(a=>{a["hcMrG5zpAhbwgVIt+L0GrfK8TkM="]=a.current})($__dart_deferred_initializers__);