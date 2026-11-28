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
_.db=x},cG3:function cG3(){},
aUn(d){var x=d.e,w=d.f
if(w==null||w.l(0,x))return B.iL[A.j4(x)-1]+", "+A.aM(x)+" "+B.ch[A.ay(x)-1]
return""+A.aM(x)+" "+B.ch[A.ay(x)-1]+" \u2013 "+A.aM(w)+" "+B.ch[A.ay(w)-1]},
daO(d){var x
if(d.at)return C.bS3
x=d.ax
if(x!=null)return new A.a3("DESDE",A.aQ(x,!1))
return C.bRN},
dFF(d){var x
switch(d){case"concerto":x=E.fT
break
case"mercado":x=B.En
break
case"feira":x=B.bN
break
case"festival":x=E.fT
break
case"desporto":x=B.vx
break
case"cultura":x=F.nR
break
default:x=B.bN
break}return x},
a2k:function a2k(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},C,F,E
J=c[1]
A=c[0]
B=c[2]
D=a.updateHolder(c[91],D)
C=c[281]
F=c[266]
E=c[264]
D.mJ.prototype={
ga86(){switch(this.c){case"concerto":var x="Concerto"
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
D.a2k.prototype={
u(d){var x,w=null,v=this.c,u=v.cy
if(u!=null){x=y.l
u=A.a([A.jZ(u,w,B.bS,w,w,w,w)],x)
if(this.e&&v.db!=null)B.e.n(u,A.a([C.ar6,A.cb(8,A.h("Foto: "+A.q(v.db),1,B.a2,w,w,C.c7C,w,w,w),w,w,12,60,w,w)],x))
v=new A.bB(B.aA,w,B.ej,B.z,u,w)}else v=A.A(B.L,A.b2(D.dFF(v.c),B.t,w,w,this.d),B.r,B.d8,w,w,w,w,w,w,w,w,w)
return v}}
var z=a.updateTypes(["F<t<mJ>>(au)"])
D.cG3.prototype={
$1(d){return this.aFz(d)},
aFz(b0){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$$1=A.j(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a7=new A.ad(Date.now(),0,!1)
a8=""+A.aE(a7)+"-"+B.f.aY(B.j.k(A.ay(a7)),2,"0")+"-"+B.f.aY(B.j.k(A.aM(a7)),2,"0")
u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.R("external_events").cj(0).X("published",!0).YI("ends_on.gte."+A.q(a8)+",and(ends_on.is.null,starts_on.gte."+A.q(a8)+")").tJ(0,"starts_on").jo(60),$async$$1)
case 7:s=b2
r=A.a([],y.a)
for(p=J.bl(s,y.i),o=A.u(p),p=new A.ak(p,p.gA(p),o.i("ak<U.E>")),o=o.i("U.E");p.t();){n=p.d
q=n==null?o.a(n):n
n=q
m=J.a7(n)
l=A.a2(m.h(n,"id"))
k=A.a2(m.h(n,"title"))
j=A.E(m.h(n,"category"))
if(j==null)j="festa"
i=A.E(m.h(n,"description"))
h=A.d9(A.a2(m.h(n,"starts_on")))
g=m.h(n,"ends_on")==null?null:A.d9(A.a2(m.h(n,"ends_on")))
f=A.E(m.h(n,"time_label"))
e=A.E(m.h(n,"venue"))
d=A.E(m.h(n,"address"))
a0=A.a2(m.h(n,"city"))
a1=A.E(m.h(n,"district"))
a2=A.aK(m.h(n,"latitude"))
if(a2==null)a2=null
a3=A.aK(m.h(n,"longitude"))
if(a3==null)a3=null
a4=A.dW(m.h(n,"is_free"))
a5=A.aK(m.h(n,"price_from"))
if(a5==null)a5=null
J.bt(r,new D.mJ(l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4!==!1,a5,A.E(m.h(n,"price_note")),A.E(m.h(n,"ticket_url")),A.E(m.h(n,"source_url")),A.E(m.h(n,"organizer")),A.E(m.h(n,"image_url")),A.E(m.h(n,"image_credit"))))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a9=t.pop()
v=C.WL
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
x(D.cG3,A.bx)
x(D.a2k,A.L)})()
A.bq(b.typeUniverse,JSON.parse('{"a2k":{"L":[],"e":[],"f":[]}}'))
var y={a:A.w("r<mJ>"),l:A.w("r<e>"),e:A.w("t<mJ>"),i:A.w("a4<c,@>")};(function constants(){var x=a.makeConstList
C.bDs=x([B.ao,B.ao9],A.w("r<W>"))
C.aIU=new A.kq(B.L,B.fF,B.dK,C.bDs,null,null)
C.agk=new A.M(null,null,null,null,null,C.aIU,B.y)
C.ar6=new A.pd(C.agk,B.cZ,null,null)
C.WL=x([],y.a)
C.bRN=new A.a3("ENTRADA","Paga")
C.bS3=new A.a3("ENTRADA","Gr\xe1tis")
C.c7C=new A.N(!0,B.t,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTz","cQB",()=>A.eE(new D.cG3(),null,!1,null,null,y.e))})()};
(a=>{a["2l+3KCjfyuQqOo4uOQiQWyBJHws="]=a.current})($__dart_deferred_initializers__);