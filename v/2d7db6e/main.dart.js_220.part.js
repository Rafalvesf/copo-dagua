((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,G,C={
cDW(d){return A.f.aW(A.j.k(B.az(d)),2,"0")+"/"+A.f.aW(A.j.k(B.ao(d)),2,"0")+"/"+B.ax(d)},
dLP(d){var x,w,v=A.j.aP(new B.ac(Date.now(),0,!1).cH(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.k.eP(v/30)+" meses"
x=A.k.eP(v/365)
w=x===1?"ano":"anos"
return"conta h\xe1 "+x+" "+w},
a83:function a83(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bto:function bto(d,e){this.a=d
this.b=e},
aM0:function aM0(d,e,f){this.c=d
this.d=e
this.a=f},
aNx:function aNx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNy:function aNy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D,H,I,E,K,F
B=c[0]
A=c[2]
G=c[250]
C=a.updateHolder(c[176],C)
D=c[244]
H=c[387]
I=c[201]
E=c[439]
K=c[190]
F=c[333]
C.a83.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.c,h=k.f
if(h){x=B.a([C.dLP(i.as)],y.h)
w=i.at
if(w!=null)x.push("evento a "+C.cDW(w))
w=i.ax
if(w!=null&&w.length!==0)x.push(w)
w=i.ay
if(w!=null)x.push("~"+B.q(w)+" convidados")
v=A.e.a1(x," \xb7 ")}else if(k.x){x=B.a([],y.h)
w=i.ax
if(w!=null&&w.length!==0)x.push(A.e.gL(w.split(", ")))
w=i.at
if(w==null)w=i.f
x.push(F.lS[B.ao(w)-1]+" "+B.ax(w))
x=A.e.a1(x," \xb7 ")
v=x}else{x=C.cDW(i.f)
v=x}x=k.x
w=x?A.iJ:A.bg
u=x?A.mP:new B.I(A.t,j,j,B.W(22),j,j,A.x)
t=!h
s=t&&i.y!=null?new C.bto(d,i):j
r=i.z
q=h?44:40
p=y.e
o=B.a([new B.de(1,A.b8,B.h(r,1,A.a2,j,j,A.aa,j,j,j),j)],p)
if(t&&i.y!=null)A.e.n(o,B.a([I.yS,D.aCx],p))
s=B.a([B.a5(B.aX(B.O(B.a([new B.cq(r,q,i.Q,!1,!0,j),A.ag,B.a5(B.A(B.a([B.O(o,A.v,A.h,A.l,0,j),B.h(v,j,j,j,j,A.N,j,j,j)],p),A.G,A.h,A.l),1)],p),A.v,A.h,A.l,0,j),s,j),1)],p)
if(t)A.e.n(s,B.a([A.af,new C.aM0(i.d,x,j)],p))
s=B.a([B.O(s,A.v,A.h,A.l,0,j)],p)
if(!t||i.x!=="published"){r=B.a([],p)
for(q=i.d,n=1;n<=5;++n)r.push(B.b6(n<=q?A.fs:A.dZ,D.Mb,j,j,18))
if(h)A.e.n(r,B.a([A.af,B.h(C.cDW(i.f),j,j,j,j,A.N,j,j,j)],p))
q=i.x
if(q!=="published"){q=q==="flagged"
o=q?A.bZ.cd(0.12):A.a6
m=B.W(99)
l=q?"Denunciada":"Removida"
A.e.n(r,B.a([A.af,B.x(j,B.h(l,j,j,j,j,B.aI(j,j,q?A.bZ:A.U,j,j,j,j,j,j,j,j,10,j,j,A.E,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.r,j,j,new B.I(o,j,j,m,j,j,A.x),j,j,j,D.NT,j,j,j)],p))}A.e.n(s,B.a([A.ad,B.O(r,A.v,A.h,A.l,0,j)],p))}r=i.e
if(r!=null&&A.f.B(r).length!==0){r=A.f.B(r)
q=x?A.j9:A.av
A.e.n(s,B.a([A.ad,B.h(r,j,j,j,j,B.aI(j,j,x?A.z:A.cp,j,j,j,j,j,j,j,j,14,j,j,A.bp,j,1.45,!0,j,j,j,j,j,j,j,j),q,j,j)],p))}r=i.r
q=r==null
if(!q&&A.f.B(r).length!==0){o=B.a([A.R],p)
x=x&&t
t=k.d
m=k.e
l=i.w
if(x)o.push(new C.aNy(t,m,A.f.B(r),l,j))
else o.push(new C.aNx(t,m,A.f.B(r),l,h,j))
A.e.n(s,o)}if(h)h=k.r!=null||k.w!=null
else h=!1
if(h){h=B.a([],p)
x=k.r
if(x!=null)h.push(new B.Mt(q?"Responder":"Editar resposta",x,!0,j))
h.push(A.ce)
x=k.w
if(x!=null&&i.x==="published")h.push(B.aX(D.cdD,x,j))
A.e.n(s,B.a([A.R,B.O(h,A.v,A.h,A.l,0,j)],p))}return B.x(j,B.A(s,A.G,A.h,A.l),A.r,j,j,u,j,j,j,w,j,j,j)}}
C.aM0.prototype={
u(d){var x=null,w=this.d,v=K.Tu("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",A.cB,w?A.z:A.ao8,!0,13,2),u=B.aH(x,x,w?4:3)
return B.O(B.a([v,u,B.h(""+this.c+",0",x,x,x,x,B.aI(x,x,A.z,x,x,x,x,x,x,x,x,w?12:13,x,x,A.E,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.e),A.v,A.h,A.J,0,x)}}
C.aNx.prototype={
u(d){var x=this,w=null,v=B.x(w,w,A.r,w,w,new B.I(D.ak7,w,w,B.W(2),w,w,A.x),w,w,D.atJ,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.de(1,A.b8,B.h(x.r?"A tua resposta":u,1,A.a2,w,w,A.hl,w,w,w),w),A.bk,B.b6(A.i5,$.at,w,w,14)],t),r=x.f
if(r!=null)A.e.n(s,B.a([A.bk,B.h(C.cDW(r),w,w,w,w,H.IB,w,w,w)],t))
return new B.Aq(B.O(B.a([v,B.a5(B.O(B.a([new B.cq(u,30,x.d,!1,!0,w),A.af,B.a5(B.x(w,B.A(B.a([B.O(s,A.v,A.h,A.l,0,w),A.im,B.h(x.e,w,w,w,w,D.c7p,w,w,w)],t),A.G,A.h,A.l),A.r,w,w,D.afZ,w,w,w,D.asm,w,w,w),1)],t),A.G,A.h,A.l,0,w),1)],t),A.F,A.h,A.l,0,w),w)}}
C.aNy.prototype={
u(d){var x,w=this,v=null,u=B.W(18),t=w.c,s=y.e
t=B.a([B.O(B.a([new B.cq(t,24,w.d,!1,!0,v),A.af,new B.de(1,A.b8,B.h(t,1,A.a2,v,v,A.dQ,v,v,v),v),A.a8w,B.b6(A.i5,$.at,"Verificado",v,16),A.af,B.x(v,D.c8G,A.r,v,v,new B.I(A.cy,v,v,B.W(999),v,v,A.x),v,v,v,A.v3,v,v,v)],s),A.v,A.h,A.l,0,v),A.aD,B.h(w.e,v,v,v,v,A.Iw,A.j9,v,v)],s)
x=w.f
if(x!=null)A.e.n(t,B.a([A.aD,B.h("Respondeu em "+F.lS[B.ao(x)-1]+" "+B.ax(x),v,v,v,v,A.bb,v,v,v)],s))
return B.x(v,B.A(t,A.G,A.h,A.l),A.r,v,v,new B.I(A.t,v,v,u,v,v,A.x),v,v,v,G.iK,v,v,1/0)}}
var z=a.updateTypes([])
C.bto.prototype={
$0(){return B.ah(this.a).au("/u/"+B.q(this.b.y),null,y.a)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.L,[C.a83,C.aM0,C.aNx,C.aNy])
w(C.bto,B.bP)})()
B.bn(b.typeUniverse,JSON.parse('{"a83":{"L":[],"e":[],"f":[]},"aM0":{"L":[],"e":[],"f":[]},"aNx":{"L":[],"e":[],"f":[]},"aNy":{"L":[],"e":[],"f":[]}}'))
var y={h:B.w("r<c>"),e:B.w("r<e>"),a:B.w("J?")};(function constants(){D.aeD=new B.ci(A.fz,E.kN,E.kN,E.kN)
D.afZ=new B.I(A.a6,null,null,D.aeD,null,null,A.x)
D.ak7=new B.X(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.B)
D.Mb=new B.X(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.B)
D.asm=new B.a3(12,9,12,10)
D.atJ=new B.a3(21,0,12,18)
D.NT=new B.a3(8,2,8,2)
D.aCx=new B.b7(A.i8,14,A.U,null,null,null)
D.c7p=new B.P(!0,A.z,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8G=new B.D("Parceiro",null,A.hi,null,null,null,null,null,null,null,null)
D.cdD=new B.D("Denunciar",null,A.dQ,null,null,null,null,null,null,null,null)})()};
(a=>{a["7FqpPvKR3V6zOJt3NiwV+nMpHe8="]=a.current})($__dart_deferred_initializers__);