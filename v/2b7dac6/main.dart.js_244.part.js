((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,D={mL:function mL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.db=x},cJ1:function cJ1(){},
aUR(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.dt[A.fG(x)-1]+", "+A.ay(x)+" "+B.bk[A.ao(x)-1]
return""+A.ay(x)+" "+B.bk[A.ao(x)-1]+" \u2013 "+A.ay(w)+" "+B.bk[A.ao(w)-1]},
del(d){var x
if(d.at)return C.bRj
x=d.ax
if(x!=null)return new A.a0("DESDE",A.aK(x,!1))
return C.bR3},
dJl(d){var x
switch(d){case"concerto":x=E.h_
break
case"mercado":x=B.E7
break
case"feira":x=B.bP
break
case"festival":x=E.h_
break
case"desporto":x=B.vt
break
case"cultura":x=F.nS
break
default:x=B.bP
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
C=c[285]
F=c[272]
E=c[270]
D.mL.prototype={
ga8r(){switch(this.c){case"concerto":var x="Concerto"
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
u=A.a([A.k3(u,w,B.bG,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.aqn,A.c7(8,A.h("Foto: "+A.q(v.db),1,B.a1,w,w,C.c6C,w,w,w),w,w,12,60,w,w)],x))
v=new A.bB(B.ax,w,B.e7,B.y,u,w)}else v=A.x(B.K,A.b5(D.dJl(v.c),B.t,w,w,this.d),B.r,B.cp,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mL>>(au)"])
D.cJ1.prototype={
$1(d){return this.aFU(d)},
aFU(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ac(Date.now(),0,!1)
a8=""+A.ax(a7)+"-"+B.f.aV(B.j.k(A.ao(a7)),2,"0")+"-"+B.f.aV(B.j.k(A.ay(a7)),2,"0")
u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.P("external_events").cl(0).V("published",!0).Oa("ends_on.gte."+A.q(a8)+",and(ends_on.is.null,starts_on.gte."+A.q(a8)+")").tD(0,"starts_on").hh(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bh(s,y.i),o=A.u(p),p=new A.aj(p,p.gA(p),o.i("aj<V.E>")),o=o.i("V.E");p.t();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a7(n)
l=A.Z(m.h(n,"id"))
k=A.Z(m.h(n,"title"))
j=A.C(m.h(n,"category"))
if(j==null)j="festa"
i=A.C(m.h(n,"description"))
h=A.db(A.Z(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.db(A.Z(m.h(n,"ends_on")))
f=A.C(m.h(n,"time_label"))
e=A.C(m.h(n,"venue"))
d=A.C(m.h(n,"address"))
a0=A.Z(m.h(n,"city"))
a1=A.C(m.h(n,"district"))
a2=A.aF(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aF(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dW(m.h(n,"is_free"))
a5=A.aF(m.h(n,"price_from"))
if(a5==null)a5=null
J.bt(r,new D.mL(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.C(m.h(n,"price_note")),A.C(m.h(n,"ticket_url")),A.C(m.h(n,"source_url")),A.C(m.h(n,"organizer")),A.C(m.h(n,"image_url")),A.C(m.h(n,"image_credit"))))}v=r
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
x(D.mL,A.J)
x(D.cJ1,A.bw)
x(D.a2I,A.M)})()
A.br(b.typeUniverse,JSON.parse('{"a2I":{"M":[],"e":[],"f":[]}}'))
var y={a:A.w("r<mL>"),l:A.w("r<e>"),e:A.w("t<mL>"),i:A.w("a5<c,@>")};(function constants(){var x=a.makeConstList
C.bCH=x([B.am,B.anr],A.w("r<X>"))
C.aI7=new A.jZ(B.K,B.f4,B.dG,C.bCH,null,null)
C.afB=new A.K(null,null,null,null,null,C.aI7,B.x)
C.aqn=new A.nt(C.afB,B.cG,null,null)
C.Wr=x([],y.a)
C.bR3=new A.a0("ENTRADA","Paga")
C.bRj=new A.a0("ENTRADA","Gr\xe1tis")
C.c6C=new A.P(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXt","cU3",()=>A.ey(new D.cJ1(),null,!1,null,null,y.e))})()};
(a=>{a["gp7OdPjzd46VvNv8tG5GocCI3ng="]=a.current})($__dart_deferred_initializers__);