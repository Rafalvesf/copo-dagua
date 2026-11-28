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
_.db=x},cJa:function cJa(){},
aUv(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.dq[A.fF(x)-1]+", "+A.aE(x)+" "+B.bg[A.aw(x)-1]
return""+A.aE(x)+" "+B.bg[A.aw(x)-1]+" \u2013 "+A.aE(w)+" "+B.bg[A.aw(w)-1]},
deJ(d){var x
if(d.at)return C.bR5
x=d.ax
if(x!=null)return new A.X("DESDE",A.aJ(x,!1))
return C.bQQ},
dJU(d){var x
switch(d){case"concerto":x=E.h_
break
case"mercado":x=B.E_
break
case"feira":x=B.bQ
break
case"festival":x=E.h_
break
case"desporto":x=B.vi
break
case"cultura":x=F.nK
break
default:x=B.bQ
break}return x},
a2x:function a2x(d,e,f,g){var _=this
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
D.mJ.prototype={
ga7R(){switch(this.c){case"concerto":var x="Concerto"
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
D.a2x.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.k5(u,w,B.bE,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.aqd,A.cb(8,A.h("Foto: "+A.p(v.db),1,B.a1,w,w,C.c6e,w,w),w,w,12,60,w,w)],x))
v=new A.bA(B.aw,w,B.e4,B.y,u,w)}else v=A.x(B.K,A.b9(D.dJU(v.c),B.t,w,w,this.d),B.r,B.cn,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mJ>>(at)"])
D.cJa.prototype={
$1(d){return this.aF6(d)},
aF6(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ac(Date.now(),0,!1)
a8=""+A.aM(a7)+"-"+B.f.aT(B.j.k(A.aw(a7)),2,"0")+"-"+B.f.aT(B.j.k(A.aE(a7)),2,"0")
u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.P("external_events").ck(0).U("published",!0).NK("ends_on.gte."+A.p(a8)+",and(ends_on.is.null,starts_on.gte."+A.p(a8)+")").tt(0,"starts_on").hd(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.be(s,y.i),o=A.u(p),p=new A.ag(p,p.gA(p),o.i("ag<V.E>")),o=o.i("V.E");p.q();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a7(n)
l=A.Y(m.h(n,"id"))
k=A.Y(m.h(n,"title"))
j=A.B(m.h(n,"category"))
if(j==null)j="festa"
i=A.B(m.h(n,"description"))
h=A.dc(A.Y(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.dc(A.Y(m.h(n,"ends_on")))
f=A.B(m.h(n,"time_label"))
e=A.B(m.h(n,"venue"))
d=A.B(m.h(n,"address"))
a0=A.Y(m.h(n,"city"))
a1=A.B(m.h(n,"district"))
a2=A.aD(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aD(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dV(m.h(n,"is_free"))
a5=A.aD(m.h(n,"price_from"))
if(a5==null)a5=null
J.br(r,new D.mJ(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.B(m.h(n,"price_note")),A.B(m.h(n,"ticket_url")),A.B(m.h(n,"source_url")),A.B(m.h(n,"organizer")),A.B(m.h(n,"image_url")),A.B(m.h(n,"image_credit"))))}v=r
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
x(D.mJ,A.M)
x(D.cJa,A.bs)
x(D.a2x,A.L)})()
A.bq(b.typeUniverse,JSON.parse('{"a2x":{"L":[],"e":[],"f":[]}}'))
var y={a:A.y("r<mJ>"),l:A.y("r<e>"),e:A.y("t<mJ>"),i:A.y("a5<c,@>")};(function constants(){var x=a.makeConstList
C.bCx=x([B.as,B.ani],A.y("r<Z>"))
C.aI_=new A.jJ(B.K,B.f6,B.dw,C.bCx,null,null)
C.afs=new A.I(null,null,null,null,null,C.aI_,B.x)
C.aqd=new A.nu(C.afs,B.cF,null,null)
C.W8=x([],y.a)
C.bQQ=new A.X("ENTRADA","Paga")
C.bR5=new A.X("ENTRADA","Gr\xe1tis")
C.c6e=new A.P(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dY5","cUn",()=>A.ez(new D.cJa(),null,!1,null,null,y.e))})()};
(a=>{a["RETziU/i6CPiR9rO04XyYkfzr1o="]=a.current})($__dart_deferred_initializers__);