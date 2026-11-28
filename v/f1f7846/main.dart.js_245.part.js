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
_.db=x},cJ8:function cJ8(){},
aV6(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.dB[A.fE(x)-1]+", "+A.aC(x)+" "+B.by[A.ar(x)-1]
return""+A.aC(x)+" "+B.by[A.ar(x)-1]+" \u2013 "+A.aC(w)+" "+B.by[A.ar(w)-1]},
del(d){var x
if(d.at)return C.bSm
x=d.ax
if(x!=null)return new A.a_("DESDE",A.aM(x,!1))
return C.bS6},
dJf(d){var x
switch(d){case"concerto":x=E.h_
break
case"mercado":x=B.Eu
break
case"feira":x=B.bQ
break
case"festival":x=E.h_
break
case"desporto":x=B.vL
break
case"cultura":x=F.o4
break
default:x=B.bQ
break}return x},
a2I:function a2I(d,e,f,g){var _=this
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
ga8M(){switch(this.c){case"concerto":var x="Concerto"
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
D.a2I.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.k1(u,w,B.bK,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.arm,A.ce(8,A.h("Foto: "+A.q(v.db),1,B.a2,w,w,C.c7Z,w,w,w),w,w,12,60,w,w)],x))
v=new A.bD(B.aA,w,B.e8,B.z,u,w)}else v=A.z(B.L,A.b4(D.dJf(v.c),B.t,w,w,this.d),B.r,B.cr,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mJ>>(av)"])
D.cJ8.prototype={
$1(d){return this.aGh(d)},
aGh(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ac(Date.now(),0,!1)
a8=""+A.az(a7)+"-"+B.f.aY(B.j.k(A.ar(a7)),2,"0")+"-"+B.f.aY(B.j.k(A.aC(a7)),2,"0")
u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.P("external_events").ck(0).V("published",!0).Ze("ends_on.gte."+A.q(a8)+",and(ends_on.is.null,starts_on.gte."+A.q(a8)+")").tL(0,"starts_on").hD(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bh(s,y.i),o=A.u(p),p=new A.al(p,p.gA(p),o.i("al<W.E>")),o=o.i("W.E");p.t();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a7(n)
l=A.a0(m.h(n,"id"))
k=A.a0(m.h(n,"title"))
j=A.C(m.h(n,"category"))
if(j==null)j="festa"
i=A.C(m.h(n,"description"))
h=A.dc(A.a0(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.dc(A.a0(m.h(n,"ends_on")))
f=A.C(m.h(n,"time_label"))
e=A.C(m.h(n,"venue"))
d=A.C(m.h(n,"address"))
a0=A.a0(m.h(n,"city"))
a1=A.C(m.h(n,"district"))
a2=A.aI(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aI(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dY(m.h(n,"is_free"))
a5=A.aI(m.h(n,"price_from"))
if(a5==null)a5=null
J.bt(r,new D.mJ(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.C(m.h(n,"price_note")),A.C(m.h(n,"ticket_url")),A.C(m.h(n,"source_url")),A.C(m.h(n,"organizer")),A.C(m.h(n,"image_url")),A.C(m.h(n,"image_credit"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
v=C.X1
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
x(D.mJ,A.L)
x(D.cJ8,A.bz)
x(D.a2I,A.J)})()
A.bq(b.typeUniverse,JSON.parse('{"a2I":{"J":[],"e":[],"f":[]}}'))
var y={a:A.w("r<mJ>"),l:A.w("r<e>"),e:A.w("t<mJ>"),i:A.w("a5<c,@>")};(function constants(){var x=a.makeConstList
C.bDL=x([B.ao,B.aoq],A.w("r<X>"))
C.aJ6=new A.jY(B.L,B.fm,B.dG,C.bDL,null,null)
C.agC=new A.I(null,null,null,null,null,C.aJ6,B.y)
C.arm=new A.nu(C.agC,B.cO,null,null)
C.X1=x([],y.a)
C.bS6=new A.a_("ENTRADA","Paga")
C.bSm=new A.a_("ENTRADA","Gr\xe1tis")
C.c7Z=new A.P(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXi","cU2",()=>A.eI(new D.cJ8(),null,!1,null,null,y.e))})()};
(a=>{a["LqbKykhC2gpRPyLGlhgcxLYHbDQ="]=a.current})($__dart_deferred_initializers__);