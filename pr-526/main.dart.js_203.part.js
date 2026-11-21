((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,D={
ckF(d){return A.f.aS(A.i.j(B.aN(d)),2,"0")+"/"+A.f.aS(A.i.j(B.ay(d)),2,"0")+"/"+B.aD(d)},
dlM(d){var x,w,v=A.i.aV(new B.an(Date.now(),0,!1).da(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.k.f7(v/30)+" meses"
x=A.k.f7(v/365)
w=x===1?"ano":"anos"
return"conta h\xe1 "+x+" "+w},
a44:function a44(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF8:function aF8(d,e){this.c=d
this.a=e},
aGx:function aGx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},C,F,G,H,E
B=c[0]
A=c[2]
D=a.updateHolder(c[161],D)
C=c[372]
F=c[432]
G=c[376]
H=c[246]
E=c[445]
D.a44.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.c,k=n.f
if(k){x=B.a([D.dlM(l.Q)],y.h)
w=l.as
if(w!=null)x.push("evento a "+D.ckF(w))
w=l.at
if(w!=null&&w.length!==0)x.push(w)
w=l.ax
if(w!=null)x.push("~"+B.p(w)+" convidados")
v=A.e.a6(x," \xb7 ")}else v=D.ckF(l.f)
x=B.W(22)
w=l.y
u=k?44:40
t=y.e
w=B.a([new B.e0(w,u,l.z,!1,!0,m),A.aw,B.a5(B.D(B.a([B.h(w,1,A.a1,m,A.aC,m,m,m),B.h(v,m,m,m,A.a5,m,m,m)],t),A.I,A.j,A.q,0,A.w),1)],t)
u=!k
if(u)A.e.q(w,B.a([A.ax,new D.aF8(l.d,m)],t))
w=B.a([B.S(w,A.x,A.j,A.q,0,m,m)],t)
if(!u||l.x!=="published"){u=B.a([],t)
for(s=l.d,r=1;r<=5;++r)u.push(B.b0(r<=s?A.ic:A.dy,C.Ky,m,m,18))
if(k)A.e.q(u,B.a([A.ax,B.h(D.ckF(l.f),m,m,m,A.a5,m,m,m)],t))
s=l.x
if(s!=="published"){s=s==="flagged"
q=s?A.cc.bV(0.12):A.ag
p=B.W(99)
o=s?"Denunciada":"Removida"
A.e.q(u,B.a([A.ax,B.B(m,B.h(o,m,m,m,B.aF(m,m,s?A.cc:A.P,m,m,m,m,m,m,m,m,10,m,m,A.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.r,m,m,new B.J(q,m,m,p,m,m,A.y),m,m,m,H.M9,m,m,m)],t))}A.e.q(w,B.a([A.aa,B.S(u,A.x,A.j,A.q,0,m,m)],t))}u=l.e
if(u!=null&&A.f.D(u).length!==0)A.e.q(w,B.a([A.aa,B.h(A.f.D(u),m,m,m,C.bWR,m,m,m)],t))
u=l.r
s=u==null
if(!s&&A.f.D(u).length!==0)A.e.q(w,B.a([A.U,new D.aGx(n.d,n.e,A.f.D(u),l.w,k,m)],t))
if(k)k=n.r!=null||n.w!=null
else k=!1
if(k){k=B.a([],t)
u=n.r
if(u!=null)k.push(new B.E_(s?"Responder":"Editar resposta",u,!0,m))
k.push(A.bS)
u=n.w
if(u!=null&&l.x==="published")k.push(B.aY(C.c8f,u,m))
A.e.q(w,B.a([A.U,B.S(k,A.x,A.j,A.q,0,m,m)],t))}return B.B(m,B.D(w,A.I,A.j,A.q,0,A.w),A.r,m,m,new B.J(A.u,m,m,x,m,m,A.y),m,m,m,A.b8,m,m,m)}}
D.aF8.prototype={
u(d){var x=null
return B.S(B.a([C.aF6,A.Gh,B.h(""+this.c+",0",x,x,x,A.dB,x,x,x)],y.e),A.x,A.j,A.V,0,x,x)}}
D.aGx.prototype={
u(d){var x=this,w=null,v=B.B(w,w,A.r,w,w,new B.J(C.ahQ,w,w,B.W(2),w,w,A.y),w,w,C.arz,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.ed(1,A.bJ,B.h(x.r?"A tua resposta":u,1,A.a1,w,A.lM,w,w,w),w),A.bC,B.b0(A.jP,$.ag,w,w,14)],t),r=x.f
if(r!=null)A.e.q(s,B.a([A.bC,B.h(D.ckF(r),w,w,w,G.GW,w,w,w)],t))
return new B.yX(B.S(B.a([v,B.a5(B.S(B.a([new B.e0(u,30,x.d,!1,!0,w),A.ax,B.a5(B.B(w,B.D(B.a([B.S(s,A.x,A.j,A.q,0,w,w),A.eI,B.h(x.e,w,w,w,C.c2r,w,w,w)],t),A.I,A.j,A.q,0,A.w),A.r,w,w,C.adM,w,w,w,C.aq6,w,w,w),1)],t),A.I,A.j,A.q,0,w,w),1)],t),A.J,A.j,A.q,0,w,w),w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(B.O,[D.a44,D.aF8,D.aGx])})()
B.bj(b.typeUniverse,JSON.parse('{"a44":{"O":[],"e":[]},"aF8":{"O":[],"e":[]},"aGx":{"O":[],"e":[]}}'))
var y={h:B.u("q<c>"),e:B.u("q<e>")};(function constants(){C.acx=new B.bX(A.ff,E.k6,E.k6,E.k6)
C.adM=new B.J(A.ag,null,null,C.acx,null,null,A.y)
C.ahQ=new B.P(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.C)
C.Ky=new B.P(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.C)
C.aq6=new B.Z(12,9,12,10)
C.arz=new B.Z(21,0,12,18)
C.aF6=new B.jY("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",13,F.Kv,2,!0,A.ca,null)
C.bWR=new B.E(!0,A.i1,null,null,null,null,14,A.be,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c2r=new B.E(!0,A.z,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8f=new B.z("Denunciar",null,A.dB,null,null,null,null,null,null,null,null)})()};
(a=>{a["CeetcHPuBpx8wy7/uTp1uduRRQg="]=a.current})($__dart_deferred_initializers__);