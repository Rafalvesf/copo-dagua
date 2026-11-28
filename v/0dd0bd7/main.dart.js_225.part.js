((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,G,C={
cDG(d){return A.f.aT(A.j.k(B.aD(d)),2,"0")+"/"+A.f.aT(A.j.k(B.av(d)),2,"0")+"/"+B.aL(d)},
dMe(d){var x,w,v=A.j.aO(new B.ac(Date.now(),0,!1).cs(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.k.eN(v/30)+" meses"
x=A.k.eN(v/365)
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
bte:function bte(d,e){this.a=d
this.b=e},
aLu:function aLu(d,e,f){this.c=d
this.d=e
this.a=f},
aN0:function aN0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aN1:function aN1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D,H,I,E,K,F
B=c[0]
A=c[2]
G=c[242]
C=a.updateHolder(c[174],C)
D=c[236]
H=c[380]
I=c[195]
E=c[435]
K=c[185]
F=c[326]
C.a7O.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.c,h=k.f
if(h){x=B.a([C.dMe(i.as)],y.h)
w=i.at
if(w!=null)x.push("evento a "+C.cDG(w))
w=i.ax
if(w!=null&&w.length!==0)x.push(w)
w=i.ay
if(w!=null)x.push("~"+B.p(w)+" convidados")
v=A.e.a1(x," \xb7 ")}else if(k.x){x=B.a([],y.h)
w=i.ax
if(w!=null&&w.length!==0)x.push(A.e.gJ(w.split(", ")))
w=i.at
if(w==null)w=i.f
x.push(F.lK[B.av(w)-1]+" "+B.aL(w))
x=A.e.a1(x," \xb7 ")
v=x}else{x=C.cDG(i.f)
v=x}x=k.x
w=x?A.i1:A.bn
u=x?A.mE:new B.I(A.t,j,j,B.W(22),j,j,A.x)
t=!h
s=t&&i.y!=null?new C.bte(d,i):j
r=i.z
q=h?44:40
p=y.e
o=B.a([new B.dh(1,A.ba,B.h(r,1,A.a1,j,j,A.a9,j,j),j)],p)
if(t&&i.y!=null)A.e.n(o,B.a([I.yG,D.OO],p))
s=B.a([B.a4(B.aX(B.N(B.a([new B.cf(r,q,i.Q,!1,!0,j),A.ae,B.a4(B.z(B.a([B.N(o,A.v,A.h,A.l,0,j),B.h(v,j,j,j,j,A.L,j,j)],p),A.G,A.h,A.l),1)],p),A.v,A.h,A.l,0,j),s,j),1)],p)
if(t)A.e.n(s,B.a([A.ab,new C.aLu(i.d,x,j)],p))
s=B.a([B.N(s,A.v,A.h,A.l,0,j)],p)
if(!t||i.x!=="published"){r=B.a([],p)
for(q=i.d,n=1;n<=5;++n)r.push(B.b8(n<=q?A.fs:A.eh,D.LY,j,j,18))
if(h)A.e.n(r,B.a([A.ab,B.h(C.cDG(i.f),j,j,j,j,A.L,j,j)],p))
q=i.x
if(q!=="published"){q=q==="flagged"
o=q?A.bX.cc(0.12):A.a4
m=B.W(99)
l=q?"Denunciada":"Removida"
A.e.n(r,B.a([A.ab,B.x(j,B.h(l,j,j,j,j,B.aH(j,j,q?A.bX:A.V,j,j,j,j,j,j,j,j,10,j,j,A.F,j,j,!0,j,j,j,j,j,j,j,j),j,j),A.r,j,j,new B.I(o,j,j,m,j,j,A.x),j,j,j,D.Nx,j,j,j)],p))}A.e.n(s,B.a([A.ac,B.N(r,A.v,A.h,A.l,0,j)],p))}r=i.e
if(r!=null&&A.f.B(r).length!==0){r=A.f.B(r)
q=x?A.iq:A.au
A.e.n(s,B.a([A.ac,B.h(r,j,j,j,j,B.aH(j,j,x?A.z:A.cn,j,j,j,j,j,j,j,j,14,j,j,A.bl,j,1.45,!0,j,j,j,j,j,j,j,j),q,j)],p))}r=i.r
q=r==null
if(!q&&A.f.B(r).length!==0){o=B.a([A.R],p)
x=x&&t
t=k.d
m=k.e
l=i.w
if(x)o.push(new C.aN1(t,m,A.f.B(r),l,j))
else o.push(new C.aN0(t,m,A.f.B(r),l,h,j))
A.e.n(s,o)}if(h)h=k.r!=null||k.w!=null
else h=!1
if(h){h=B.a([],p)
x=k.r
if(x!=null)h.push(new B.Mo(q?"Responder":"Editar resposta",x,!0,j))
h.push(A.ck)
x=k.w
if(x!=null&&i.x==="published")h.push(B.aX(D.ceo,x,j))
A.e.n(s,B.a([A.R,B.N(h,A.v,A.h,A.l,0,j)],p))}return B.x(j,B.z(s,A.G,A.h,A.l),A.r,j,j,u,j,j,j,w,j,j,j)}}
C.aLu.prototype={
u(d){var x=null,w=this.d,v=K.Tm("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",A.cz,w?A.z:A.anS,!0,13,2),u=B.aJ(x,x,w?4:3)
return B.N(B.a([v,u,B.h(""+this.c+",0",x,x,x,x,B.aH(x,x,A.z,x,x,x,x,x,x,x,x,w?12:13,x,x,A.F,x,x,!0,x,x,x,x,x,x,x,x),x,x)],y.e),A.v,A.h,A.J,0,x)}}
C.aN0.prototype={
u(d){var x=this,w=null,v=B.x(w,w,A.r,w,w,new B.I(D.ajR,w,w,B.W(2),w,w,A.x),w,w,D.atp,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.dh(1,A.ba,B.h(x.r?"A tua resposta":u,1,A.a1,w,w,A.hO,w,w),w),A.bj,B.b8(A.i8,$.at,w,w,14)],t),r=x.f
if(r!=null)A.e.n(s,B.a([A.bj,B.h(C.cDG(r),w,w,w,w,H.Im,w,w)],t))
return new B.Ai(B.N(B.a([v,B.a4(B.N(B.a([new B.cf(u,30,x.d,!1,!0,w),A.ab,B.a4(B.x(w,B.z(B.a([B.N(s,A.v,A.h,A.l,0,w),A.j4,B.h(x.e,w,w,w,w,D.c6A,w,w)],t),A.G,A.h,A.l),A.r,w,w,D.afH,w,w,w,D.as4,w,w,w),1)],t),A.G,A.h,A.l,0,w),1)],t),A.E,A.h,A.l,0,w),w)}}
C.aN1.prototype={
u(d){var x,w=this,v=null,u=B.W(18),t=w.c,s=y.e
t=B.a([B.N(B.a([new B.cf(t,24,w.d,!1,!0,v),A.ab,new B.dh(1,A.ba,B.h(t,1,A.a1,v,v,A.dZ,v,v),v),A.bWH,B.b8(A.i8,$.at,"Verificado",v,16),A.ab,B.x(v,D.caf,A.r,v,v,new B.I(A.cx,v,v,B.W(999),v,v,A.x),v,v,v,A.CT,v,v,v)],s),A.v,A.h,A.l,0,v),A.aD,B.h(w.e,v,v,v,v,A.Ii,A.iq,v)],s)
x=w.f
if(x!=null)A.e.n(t,B.a([A.aD,B.h("Respondeu em "+F.lK[B.av(x)-1]+" "+B.aL(x),v,v,v,v,A.be,v,v)],s))
return B.x(v,B.z(t,A.G,A.h,A.l),A.r,v,v,new B.I(A.t,v,v,u,v,v,A.x),v,v,v,G.i3,v,v,1/0)}}
var z=a.updateTypes([])
C.bte.prototype={
$0(){return B.ad(this.a).ak("/u/"+B.p(this.b.y),null,y.a)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.M,[C.a7O,C.aLu,C.aN0,C.aN1])
w(C.bte,B.bK)})()
B.bp(b.typeUniverse,JSON.parse('{"a7O":{"M":[],"e":[],"f":[]},"aLu":{"M":[],"e":[],"f":[]},"aN0":{"M":[],"e":[],"f":[]},"aN1":{"M":[],"e":[],"f":[]}}'))
var y={h:B.y("r<c>"),e:B.y("r<e>"),a:B.y("L?")};(function constants(){D.aen=new B.cy(A.fB,E.kM,E.kM,E.kM)
D.afH=new B.I(A.a4,null,null,D.aen,null,null,A.x)
D.ajR=new B.Z(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.C)
D.LY=new B.Z(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.C)
D.as4=new B.a3(12,9,12,10)
D.atp=new B.a3(21,0,12,18)
D.Nx=new B.a3(8,2,8,2)
D.OO=new B.b7(A.ib,14,A.V,null,null,null)
D.c6A=new B.P(!0,A.z,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.caf=new B.D("Parceiro",null,A.he,null,null,null,null,null,null,null)
D.ceo=new B.D("Denunciar",null,A.dZ,null,null,null,null,null,null,null)})()};
(a=>{a["tp9sLpHz9+juZNaAHvbe3gVdyao="]=a.current})($__dart_deferred_initializers__);