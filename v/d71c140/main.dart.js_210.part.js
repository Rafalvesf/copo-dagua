((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,G,C={
cBV(d){return A.f.aX(A.j.k(B.aK(d)),2,"0")+"/"+A.f.aX(A.j.k(B.ax(d)),2,"0")+"/"+B.aD(d)},
dJf(d){var x,w,v=A.j.aN(new B.ac(Date.now(),0,!1).cK(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.k.fh(v/30)+" meses"
x=A.k.fh(v/365)
w=x===1?"ano":"anos"
return"conta h\xe1 "+x+" "+w},
a7O:function a7O(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bsZ:function bsZ(d,e){this.a=d
this.b=e},
aLY:function aLY(d,e,f){this.c=d
this.d=e
this.a=f},
aNu:function aNu(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNv:function aNv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D,H,I,K,E,L,F
B=c[0]
A=c[2]
G=c[240]
C=a.updateHolder(c[172],C)
D=c[377]
H=c[380]
I=c[194]
K=c[226]
E=c[430]
L=c[185]
F=c[326]
C.a7O.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.c,h=k.f
if(h){x=B.a([C.dJf(i.as)],y.h)
w=i.at
if(w!=null)x.push("evento a "+C.cBV(w))
w=i.ax
if(w!=null&&w.length!==0)x.push(w)
w=i.ay
if(w!=null)x.push("~"+B.q(w)+" convidados")
v=A.e.a2(x," \xb7 ")}else if(k.x){x=B.a([],y.h)
w=i.ax
if(w!=null&&w.length!==0)x.push(A.e.gM(w.split(", ")))
w=i.at
if(w==null)w=i.f
x.push(F.lU[B.ax(w)-1]+" "+B.aD(w))
x=A.e.a2(x," \xb7 ")
v=x}else{x=C.cBV(i.f)
v=x}x=k.x
w=x?A.jz:A.bj
u=x?A.mR:new B.M(A.t,j,j,B.X(22),j,j,A.y)
t=!h
s=t&&i.y!=null?new C.bsZ(d,i):j
r=i.z
q=h?44:40
p=y.e
o=B.a([new B.di(1,A.bd,B.h(r,1,A.a3,j,j,A.aj,j,j,j),j)],p)
if(t&&i.y!=null)A.e.n(o,B.a([I.yU,D.aDl],p))
s=B.a([B.a4(B.aU(B.P(B.a([new B.cv(r,q,i.Q,!1,!0,j),A.ak,B.a4(B.B(B.a([B.P(o,A.w,A.i,A.m,0,j,j),B.h(v,j,j,j,j,A.R,j,j,j)],p),A.G,A.i,A.m,0,A.v),1)],p),A.w,A.i,A.m,0,j,j),s,j),1)],p)
if(t)A.e.n(s,B.a([A.ae,new C.aLY(i.d,x,j)],p))
s=B.a([B.P(s,A.w,A.i,A.m,0,j,j)],p)
if(!t||i.x!=="published"){r=B.a([],p)
for(q=i.d,n=1;n<=5;++n)r.push(B.b2(n<=q?A.i6:A.dM,D.Mt,j,j,18))
if(h)A.e.n(r,B.a([A.ae,B.h(C.cBV(i.f),j,j,j,j,A.R,j,j,j)],p))
q=i.x
if(q!=="published"){q=q==="flagged"
o=q?A.c0.cc(0.12):A.aa
m=B.X(99)
l=q?"Denunciada":"Removida"
A.e.n(r,B.a([A.ae,B.A(j,B.h(l,j,j,j,j,B.aF(j,j,q?A.c0:A.T,j,j,j,j,j,j,j,j,10,j,j,A.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.r,j,j,new B.M(o,j,j,m,j,j,A.y),j,j,j,K.Dh,j,j,j)],p))}A.e.n(s,B.a([A.ac,B.P(r,A.w,A.i,A.m,0,j,j)],p))}r=i.e
if(r!=null&&A.f.C(r).length!==0){r=A.f.C(r)
q=x?A.j4:A.at
A.e.n(s,B.a([A.ac,B.h(r,j,j,j,j,B.aF(j,j,x?A.A:A.d8,j,j,j,j,j,j,j,j,14,j,j,A.bk,j,1.45,!0,j,j,j,j,j,j,j,j),q,j,j)],p))}r=i.r
q=r==null
if(!q&&A.f.C(r).length!==0){o=B.a([A.Q],p)
x=x&&t
t=k.d
m=k.e
l=i.w
if(x)o.push(new C.aNv(t,m,A.f.C(r),l,j))
else o.push(new C.aNu(t,m,A.f.C(r),l,h,j))
A.e.n(s,o)}if(h)h=k.r!=null||k.w!=null
else h=!1
if(h){h=B.a([],p)
x=k.r
if(x!=null)h.push(new B.Mo(q?"Responder":"Editar resposta",x,!0,j))
h.push(A.cc)
x=k.w
if(x!=null&&i.x==="published")h.push(B.aU(D.cei,x,j))
A.e.n(s,B.a([A.Q,B.P(h,A.w,A.i,A.m,0,j,j)],p))}return B.A(j,B.B(s,A.G,A.i,A.m,0,A.v),A.r,j,j,u,j,j,j,w,j,j,j)}}
C.aLY.prototype={
u(d){var x=null,w=this.d,v=L.Kq("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",A.cn,w?A.A:A.aoS,!0,13,2),u=B.aI(x,x,w?4:3)
return B.P(B.a([v,u,B.h(""+this.c+",0",x,x,x,x,B.aF(x,x,A.A,x,x,x,x,x,x,x,x,w?12:13,x,x,A.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.e),A.w,A.i,A.K,0,x,x)}}
C.aNu.prototype={
u(d){var x=this,w=null,v=B.A(w,w,A.r,w,w,new B.M(D.akP,w,w,B.X(2),w,w,A.y),w,w,D.aux,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.di(1,A.bd,B.h(x.r?"A tua resposta":u,1,A.a3,w,w,A.hQ,w,w,w),w),A.bm,B.b2(A.i3,$.ar,w,w,14)],t),r=x.f
if(r!=null)A.e.n(s,B.a([A.bm,B.h(C.cBV(r),w,w,w,w,H.IO,w,w,w)],t))
return new B.Av(B.P(B.a([v,B.a4(B.P(B.a([new B.cv(u,30,x.d,!1,!0,w),A.ae,B.a4(B.A(w,B.B(B.a([B.P(s,A.w,A.i,A.m,0,w,w),A.fF,B.h(x.e,w,w,w,w,D.c8d,w,w,w)],t),A.G,A.i,A.m,0,A.v),A.r,w,w,D.agH,w,w,w,D.at7,w,w,w),1)],t),A.G,A.i,A.m,0,w,w),1)],t),A.I,A.i,A.m,0,w,w),w)}}
C.aNv.prototype={
u(d){var x,w=this,v=null,u=B.X(18),t=w.c,s=y.e
t=B.a([B.P(B.a([new B.cv(t,24,w.d,!1,!0,v),A.ae,new B.di(1,A.bd,B.h(t,1,A.a3,v,v,A.dt,v,v,v),v),A.a8X,B.b2(A.i3,$.ar,"Verificado",v,16),A.ae,B.A(v,D.c9s,A.r,v,v,new B.M(A.d9,v,v,B.X(999),v,v,A.y),v,v,v,A.v4,v,v,v)],s),A.w,A.i,A.m,0,v,v),A.aE,B.h(w.e,v,v,v,v,A.II,A.j4,v,v)],s)
x=w.f
if(x!=null)A.e.n(t,B.a([A.aE,B.h("Respondeu em "+F.lU[B.ax(x)-1]+" "+B.aD(x),v,v,v,v,A.bc,v,v,v)],s))
return B.A(v,B.B(t,A.G,A.i,A.m,0,A.v),A.r,v,v,new B.M(A.t,v,v,u,v,v,A.y),v,v,v,G.jA,v,v,1/0)}}
var z=a.updateTypes([])
C.bsZ.prototype={
$0(){return B.ai(this.a).ap("/u/"+B.q(this.b.y),null,y.a)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.I,[C.a7O,C.aLY,C.aNu,C.aNv])
w(C.bsZ,B.bS)})()
B.bp(b.typeUniverse,JSON.parse('{"a7O":{"I":[],"e":[],"f":[]},"aLY":{"I":[],"e":[],"f":[]},"aNu":{"I":[],"e":[],"f":[]},"aNv":{"I":[],"e":[],"f":[]}}'))
var y={h:B.w("r<c>"),e:B.w("r<e>"),a:B.w("K?")};(function constants(){D.afm=new B.ci(A.fz,E.kP,E.kP,E.kP)
D.agH=new B.M(A.aa,null,null,D.afm,null,null,A.y)
D.akP=new B.W(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.C)
D.Mt=new B.W(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.C)
D.at7=new B.a0(12,9,12,10)
D.aux=new B.a0(21,0,12,18)
D.aDl=new B.ba(A.i5,14,A.T,null,null,null)
D.c8d=new B.N(!0,A.A,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c9s=new B.C("Parceiro",null,A.j8,null,null,null,null,null,null,null,null)
D.cei=new B.C("Denunciar",null,A.dt,null,null,null,null,null,null,null,null)})()};
(a=>{a["B7bgHoDgvooOXNjGPeAOkifPTXE="]=a.current})($__dart_deferred_initializers__);