((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,G,C={
cBr(d){return A.f.aY(A.j.k(B.aM(d)),2,"0")+"/"+A.f.aY(A.j.k(B.ay(d)),2,"0")+"/"+B.aE(d)},
dIA(d){var x,w,v=A.j.aM(new B.ad(Date.now(),0,!1).cC(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.k.fh(v/30)+" meses"
x=A.k.fh(v/365)
w=x===1?"ano":"anos"
return"conta h\xe1 "+x+" "+w},
a7E:function a7E(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bsH:function bsH(d,e){this.a=d
this.b=e},
aLH:function aLH(d,e,f){this.c=d
this.d=e
this.a=f},
aNd:function aNd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNe:function aNe(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D,H,I,K,E,L,F
B=c[0]
A=c[2]
G=c[239]
C=a.updateHolder(c[171],C)
D=c[374]
H=c[377]
I=c[193]
K=c[226]
E=c[425]
L=c[184]
F=c[324]
C.a7E.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.c,h=k.f
if(h){x=B.a([C.dIA(i.as)],y.h)
w=i.at
if(w!=null)x.push("evento a "+C.cBr(w))
w=i.ax
if(w!=null&&w.length!==0)x.push(w)
w=i.ay
if(w!=null)x.push("~"+B.q(w)+" convidados")
v=A.e.a2(x," \xb7 ")}else if(k.x){x=B.a([],y.h)
w=i.ax
if(w!=null&&w.length!==0)x.push(A.e.gM(w.split(", ")))
w=i.at
if(w==null)w=i.f
x.push(F.lO[B.ay(w)-1]+" "+B.aE(w))
x=A.e.a2(x," \xb7 ")
v=x}else{x=C.cBr(i.f)
v=x}x=k.x
w=x?A.jx:A.bj
u=x?A.mN:new B.M(A.t,j,j,B.Y(22),j,j,A.y)
t=!h
s=t&&i.y!=null?new C.bsH(d,i):j
r=i.z
q=h?44:40
p=y.e
o=B.a([new B.dx(1,A.be,B.h(r,1,A.a2,j,j,A.aj,j,j,j),j)],p)
if(t&&i.y!=null)A.e.n(o,B.a([I.yT,D.aDf],p))
s=B.a([B.a5(B.aU(B.P(B.a([new B.cw(r,q,i.Q,!1,!0,j),A.am,B.a5(B.B(B.a([B.P(o,A.w,A.i,A.m,0,j,j),B.h(v,j,j,j,j,A.T,j,j,j)],p),A.G,A.i,A.m,0,A.v),1)],p),A.w,A.i,A.m,0,j,j),s,j),1)],p)
if(t)A.e.n(s,B.a([A.ai,new C.aLH(i.d,x,j)],p))
s=B.a([B.P(s,A.w,A.i,A.m,0,j,j)],p)
if(!t||i.x!=="published"){r=B.a([],p)
for(q=i.d,n=1;n<=5;++n)r.push(B.b2(n<=q?A.i4:A.dI,D.Mr,j,j,18))
if(h)A.e.n(r,B.a([A.ai,B.h(C.cBr(i.f),j,j,j,j,A.T,j,j,j)],p))
q=i.x
if(q!=="published"){q=q==="flagged"
o=q?A.c0.cc(0.12):A.ac
m=B.Y(99)
l=q?"Denunciada":"Removida"
A.e.n(r,B.a([A.ai,B.A(j,B.h(l,j,j,j,j,B.aF(j,j,q?A.c0:A.S,j,j,j,j,j,j,j,j,10,j,j,A.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.r,j,j,new B.M(o,j,j,m,j,j,A.y),j,j,j,K.Df,j,j,j)],p))}A.e.n(s,B.a([A.ab,B.P(r,A.w,A.i,A.m,0,j,j)],p))}r=i.e
if(r!=null&&A.f.D(r).length!==0){r=A.f.D(r)
q=x?A.j3:A.at
A.e.n(s,B.a([A.ab,B.h(r,j,j,j,j,B.aF(j,j,x?A.A:A.d8,j,j,j,j,j,j,j,j,14,j,j,A.bk,j,1.45,!0,j,j,j,j,j,j,j,j),q,j,j)],p))}r=i.r
q=r==null
if(!q&&A.f.D(r).length!==0){o=B.a([A.Q],p)
x=x&&t
t=k.d
m=k.e
l=i.w
if(x)o.push(new C.aNe(t,m,A.f.D(r),l,j))
else o.push(new C.aNd(t,m,A.f.D(r),l,h,j))
A.e.n(s,o)}if(h)h=k.r!=null||k.w!=null
else h=!1
if(h){h=B.a([],p)
x=k.r
if(x!=null)h.push(new B.Mm(q?"Responder":"Editar resposta",x,!0,j))
h.push(A.cb)
x=k.w
if(x!=null&&i.x==="published")h.push(B.aU(D.ce7,x,j))
A.e.n(s,B.a([A.Q,B.P(h,A.w,A.i,A.m,0,j,j)],p))}return B.A(j,B.B(s,A.G,A.i,A.m,0,A.v),A.r,j,j,u,j,j,j,w,j,j,j)}}
C.aLH.prototype={
u(d){var x=null,w=this.d,v=L.Ko("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",A.cm,w?A.A:A.aoM,!0,13,2),u=B.aI(x,x,w?4:3)
return B.P(B.a([v,u,B.h(""+this.c+",0",x,x,x,x,B.aF(x,x,A.A,x,x,x,x,x,x,x,x,w?12:13,x,x,A.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.e),A.w,A.i,A.K,0,x,x)}}
C.aNd.prototype={
u(d){var x=this,w=null,v=B.A(w,w,A.r,w,w,new B.M(D.akJ,w,w,B.Y(2),w,w,A.y),w,w,D.aus,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.dx(1,A.be,B.h(x.r?"A tua resposta":u,1,A.a2,w,w,A.hN,w,w,w),w),A.bl,B.b2(A.i1,$.ar,w,w,14)],t),r=x.f
if(r!=null)A.e.n(s,B.a([A.bl,B.h(C.cBr(r),w,w,w,w,H.IM,w,w,w)],t))
return new B.Av(B.P(B.a([v,B.a5(B.P(B.a([new B.cw(u,30,x.d,!1,!0,w),A.ai,B.a5(B.A(w,B.B(B.a([B.P(s,A.w,A.i,A.m,0,w,w),A.fC,B.h(x.e,w,w,w,w,D.c87,w,w,w)],t),A.G,A.i,A.m,0,A.v),A.r,w,w,D.agB,w,w,w,D.at1,w,w,w),1)],t),A.G,A.i,A.m,0,w,w),1)],t),A.I,A.i,A.m,0,w,w),w)}}
C.aNe.prototype={
u(d){var x,w=this,v=null,u=B.Y(18),t=w.c,s=y.e
t=B.a([B.P(B.a([new B.cw(t,24,w.d,!1,!0,v),A.ai,new B.dx(1,A.be,B.h(t,1,A.a2,v,v,A.dt,v,v,v),v),A.a8S,B.b2(A.i1,$.ar,"Verificado",v,16),A.ai,B.A(v,D.c9l,A.r,v,v,new B.M(A.df,v,v,B.Y(999),v,v,A.y),v,v,v,A.v2,v,v,v)],s),A.w,A.i,A.m,0,v,v),A.aE,B.h(w.e,v,v,v,v,A.IG,A.j3,v,v)],s)
x=w.f
if(x!=null)A.e.n(t,B.a([A.aE,B.h("Respondeu em "+F.lO[B.ay(x)-1]+" "+B.aE(x),v,v,v,v,A.ba,v,v,v)],s))
return B.A(v,B.B(t,A.G,A.i,A.m,0,A.v),A.r,v,v,new B.M(A.t,v,v,u,v,v,A.y),v,v,v,G.lv,v,v,1/0)}}
var z=a.updateTypes([])
C.bsH.prototype={
$0(){return B.ai(this.a).ar("/u/"+B.q(this.b.y),null,y.a)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.L,[C.a7E,C.aLH,C.aNd,C.aNe])
w(C.bsH,B.bT)})()
B.bq(b.typeUniverse,JSON.parse('{"a7E":{"L":[],"e":[],"f":[]},"aLH":{"L":[],"e":[],"f":[]},"aNd":{"L":[],"e":[],"f":[]},"aNe":{"L":[],"e":[],"f":[]}}'))
var y={h:B.w("r<c>"),e:B.w("r<e>"),a:B.w("J?")};(function constants(){D.afg=new B.ch(A.fw,E.kK,E.kK,E.kK)
D.agB=new B.M(A.ac,null,null,D.afg,null,null,A.y)
D.akJ=new B.W(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.C)
D.Mr=new B.W(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.C)
D.at1=new B.a0(12,9,12,10)
D.aus=new B.a0(21,0,12,18)
D.aDf=new B.b9(A.i3,14,A.S,null,null,null)
D.c87=new B.N(!0,A.A,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c9l=new B.D("Parceiro",null,A.k1,null,null,null,null,null,null,null,null)
D.ce7=new B.D("Denunciar",null,A.dt,null,null,null,null,null,null,null,null)})()};
(a=>{a["sXs5zrw1fxJGoESxreCz9pB1zj8="]=a.current})($__dart_deferred_initializers__);