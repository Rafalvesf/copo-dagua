((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,G,C={
cEr(d){return A.f.aY(A.j.k(B.aC(d)),2,"0")+"/"+A.f.aY(A.j.k(B.ar(d)),2,"0")+"/"+B.az(d)},
dMb(d){var x,w,v=A.j.aS(new B.ac(Date.now(),0,!1).cL(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.k.fh(v/30)+" meses"
x=A.k.fh(v/365)
w=x===1?"ano":"anos"
return"conta h\xe1 "+x+" "+w},
a80:function a80(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
btA:function btA(d,e){this.a=d
this.b=e},
aMm:function aMm(d,e,f){this.c=d
this.d=e
this.a=f},
aNT:function aNT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNU:function aNU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D,H,I,E,K,F
B=c[0]
A=c[2]
G=c[246]
C=a.updateHolder(c[174],C)
D=c[239]
H=c[382]
I=c[197]
E=c[434]
K=c[186]
F=c[330]
C.a80.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.c,h=k.f
if(h){x=B.a([C.dMb(i.as)],y.h)
w=i.at
if(w!=null)x.push("evento a "+C.cEr(w))
w=i.ax
if(w!=null&&w.length!==0)x.push(w)
w=i.ay
if(w!=null)x.push("~"+B.q(w)+" convidados")
v=A.e.a0(x," \xb7 ")}else if(k.x){x=B.a([],y.h)
w=i.ax
if(w!=null&&w.length!==0)x.push(A.e.gK(w.split(", ")))
w=i.at
if(w==null)w=i.f
x.push(F.m1[B.ar(w)-1]+" "+B.az(w))
x=A.e.a0(x," \xb7 ")
v=x}else{x=C.cEr(i.f)
v=x}x=k.x
w=x?A.iN:A.bh
u=x?A.n_:new B.I(A.t,j,j,B.V(22),j,j,A.y)
t=!h
s=t&&i.y!=null?new C.btA(d,i):j
r=i.z
q=h?44:40
p=y.e
o=B.a([new B.d8(1,A.b7,B.h(r,1,A.a2,j,j,A.ab,j,j,j),j)],p)
if(t&&i.y!=null)A.e.n(o,B.a([I.z6,D.aDs],p))
s=B.a([B.a4(B.aW(B.N(B.a([new B.cp(r,q,i.Q,!1,!0,j),A.ah,B.a4(B.x(B.a([B.N(o,A.w,A.h,A.l,0,j,j),B.h(v,j,j,j,j,A.N,j,j,j)],p),A.H,A.h,A.l,0,A.u),1)],p),A.w,A.h,A.l,0,j,j),s,j),1)],p)
if(t)A.e.n(s,B.a([A.ag,new C.aMm(i.d,x,j)],p))
s=B.a([B.N(s,A.w,A.h,A.l,0,j,j)],p)
if(!t||i.x!=="published"){r=B.a([],p)
for(q=i.d,n=1;n<=5;++n)r.push(B.b4(n<=q?A.hK:A.dZ,D.MC,j,j,18))
if(h)A.e.n(r,B.a([A.ag,B.h(C.cEr(i.f),j,j,j,j,A.N,j,j,j)],p))
q=i.x
if(q!=="published"){q=q==="flagged"
o=q?A.c1.cd(0.12):A.a7
m=B.V(99)
l=q?"Denunciada":"Removida"
A.e.n(r,B.a([A.ag,B.z(j,B.h(l,j,j,j,j,B.aJ(j,j,q?A.c1:A.V,j,j,j,j,j,j,j,j,10,j,j,A.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.r,j,j,new B.I(o,j,j,m,j,j,A.y),j,j,j,D.Ok,j,j,j)],p))}A.e.n(s,B.a([A.ad,B.N(r,A.w,A.h,A.l,0,j,j)],p))}r=i.e
if(r!=null&&A.f.C(r).length!==0){r=A.f.C(r)
q=x?A.jd:A.ar
A.e.n(s,B.a([A.ad,B.h(r,j,j,j,j,B.aJ(j,j,x?A.A:A.cr,j,j,j,j,j,j,j,j,14,j,j,A.bq,j,1.45,!0,j,j,j,j,j,j,j,j),q,j,j)],p))}r=i.r
q=r==null
if(!q&&A.f.C(r).length!==0){o=B.a([A.R],p)
x=x&&t
t=k.d
m=k.e
l=i.w
if(x)o.push(new C.aNU(t,m,A.f.C(r),l,j))
else o.push(new C.aNT(t,m,A.f.C(r),l,h,j))
A.e.n(s,o)}if(h)h=k.r!=null||k.w!=null
else h=!1
if(h){h=B.a([],p)
x=k.r
if(x!=null)h.push(new B.Mw(q?"Responder":"Editar resposta",x,!0,j))
h.push(A.cf)
x=k.w
if(x!=null&&i.x==="published")h.push(B.aW(D.ceF,x,j))
A.e.n(s,B.a([A.R,B.N(h,A.w,A.h,A.l,0,j,j)],p))}return B.z(j,B.x(s,A.H,A.h,A.l,0,A.u),A.r,j,j,u,j,j,j,w,j,j,j)}}
C.aMm.prototype={
u(d){var x=null,w=this.d,v=K.Ty("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",A.cD,w?A.A:A.ap2,!0,13,2),u=B.aH(x,x,w?4:3)
return B.N(B.a([v,u,B.h(""+this.c+",0",x,x,x,x,B.aJ(x,x,A.A,x,x,x,x,x,x,x,x,w?12:13,x,x,A.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.e),A.w,A.h,A.K,0,x,x)}}
C.aNT.prototype={
u(d){var x=this,w=null,v=B.z(w,w,A.r,w,w,new B.I(D.al1,w,w,B.V(2),w,w,A.y),w,w,D.auE,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.d8(1,A.b7,B.h(x.r?"A tua resposta":u,1,A.a2,w,w,A.hm,w,w,w),w),A.bm,B.b4(A.ia,$.au,w,w,14)],t),r=x.f
if(r!=null)A.e.n(s,B.a([A.bm,B.h(C.cEr(r),w,w,w,w,H.IX,w,w,w)],t))
return new B.Aw(B.N(B.a([v,B.a4(B.N(B.a([new B.cp(u,30,x.d,!1,!0,w),A.ag,B.a4(B.z(w,B.x(B.a([B.N(s,A.w,A.h,A.l,0,w,w),A.ip,B.h(x.e,w,w,w,w,D.c8u,w,w,w)],t),A.H,A.h,A.l,0,A.u),A.r,w,w,D.agV,w,w,w,D.ati,w,w,w),1)],t),A.H,A.h,A.l,0,w,w),1)],t),A.G,A.h,A.l,0,w,w),w)}}
C.aNU.prototype={
u(d){var x,w=this,v=null,u=B.V(18),t=w.c,s=y.e
t=B.a([B.N(B.a([new B.cp(t,24,w.d,!1,!0,v),A.ag,new B.d8(1,A.b7,B.h(t,1,A.a2,v,v,A.dQ,v,v,v),v),A.a95,B.b4(A.ia,$.au,"Verificado",v,16),A.ag,B.z(v,D.c9K,A.r,v,v,new B.I(A.cA,v,v,B.V(999),v,v,A.y),v,v,v,A.vf,v,v,v)],s),A.w,A.h,A.l,0,v,v),A.aF,B.h(w.e,v,v,v,v,A.IR,A.jd,v,v)],s)
x=w.f
if(x!=null)A.e.n(t,B.a([A.aF,B.h("Respondeu em "+F.m1[B.ar(x)-1]+" "+B.az(x),v,v,v,v,A.bb,v,v,v)],s))
return B.z(v,B.x(t,A.H,A.h,A.l,0,A.u),A.r,v,v,new B.I(A.t,v,v,u,v,v,A.y),v,v,v,G.iP,v,v,1/0)}}
var z=a.updateTypes([])
C.btA.prototype={
$0(){return B.ah(this.a).av("/u/"+B.q(this.b.y),null,y.a)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.J,[C.a80,C.aMm,C.aNT,C.aNU])
w(C.btA,B.bR)})()
B.bq(b.typeUniverse,JSON.parse('{"a80":{"J":[],"e":[],"f":[]},"aMm":{"J":[],"e":[],"f":[]},"aNT":{"J":[],"e":[],"f":[]},"aNU":{"J":[],"e":[],"f":[]}}'))
var y={h:B.w("r<c>"),e:B.w("r<e>"),a:B.w("L?")};(function constants(){D.afy=new B.cd(A.fD,E.kT,E.kT,E.kT)
D.agV=new B.I(A.a7,null,null,D.afy,null,null,A.y)
D.al1=new B.X(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.C)
D.MC=new B.X(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.C)
D.ati=new B.a2(12,9,12,10)
D.auE=new B.a2(21,0,12,18)
D.Ok=new B.a2(8,2,8,2)
D.aDs=new B.b7(A.id,14,A.V,null,null,null)
D.c8u=new B.P(!0,A.A,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c9K=new B.D("Parceiro",null,A.hj,null,null,null,null,null,null,null,null)
D.ceF=new B.D("Denunciar",null,A.dQ,null,null,null,null,null,null,null,null)})()};
(a=>{a["zggG+8HRbryDgnQYy2Sai3hNijs="]=a.current})($__dart_deferred_initializers__);