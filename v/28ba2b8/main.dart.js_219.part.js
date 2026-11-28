((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,G,C={
cEm(d){return A.f.aV(A.j.k(B.ay(d)),2,"0")+"/"+A.f.aV(A.j.k(B.an(d)),2,"0")+"/"+B.ax(d)},
dMq(d){var x,w,v=A.j.aP(new B.ac(Date.now(),0,!1).cw(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.k.eP(v/30)+" meses"
x=A.k.eP(v/365)
w=x===1?"ano":"anos"
return"conta h\xe1 "+x+" "+w},
a82:function a82(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
btM:function btM(d,e){this.a=d
this.b=e},
aM1:function aM1(d,e,f){this.c=d
this.d=e
this.a=f},
aNy:function aNy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNz:function aNz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D,H,I,E,K,F
B=c[0]
A=c[2]
G=c[245]
C=a.updateHolder(c[173],C)
D=c[239]
H=c[383]
I=c[197]
E=c[435]
K=c[186]
F=c[329]
C.a82.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.c,h=k.f
if(h){x=B.a([C.dMq(i.as)],y.h)
w=i.at
if(w!=null)x.push("evento a "+C.cEm(w))
w=i.ax
if(w!=null&&w.length!==0)x.push(w)
w=i.ay
if(w!=null)x.push("~"+B.q(w)+" convidados")
v=A.e.a0(x," \xb7 ")}else if(k.x){x=B.a([],y.h)
w=i.ax
if(w!=null&&w.length!==0)x.push(A.e.gJ(w.split(", ")))
w=i.at
if(w==null)w=i.f
x.push(F.lP[B.an(w)-1]+" "+B.ax(w))
x=A.e.a0(x," \xb7 ")
v=x}else{x=C.cEm(i.f)
v=x}x=k.x
w=x?A.iK:A.bk
u=x?A.mN:new B.K(A.t,j,j,B.W(22),j,j,A.x)
t=!h
s=t&&i.y!=null?new C.btM(d,i):j
r=i.z
q=h?44:40
p=y.e
o=B.a([new B.df(1,A.b9,B.h(r,1,A.a1,j,j,A.a9,j,j,j),j)],p)
if(t&&i.y!=null)A.e.n(o,B.a([I.yQ,D.aCu],p))
s=B.a([B.a5(B.aW(B.O(B.a([new B.ci(r,q,i.Q,!1,!0,j),A.ag,B.a5(B.B(B.a([B.O(o,A.v,A.h,A.l,0,j),B.h(v,j,j,j,j,A.M,j,j,j)],p),A.G,A.h,A.l),1)],p),A.v,A.h,A.l,0,j),s,j),1)],p)
if(t)A.e.n(s,B.a([A.ad,new C.aM1(i.d,x,j)],p))
s=B.a([B.O(s,A.v,A.h,A.l,0,j)],p)
if(!t||i.x!=="published"){r=B.a([],p)
for(q=i.d,n=1;n<=5;++n)r.push(B.b5(n<=q?A.fr:A.e3,D.Ma,j,j,18))
if(h)A.e.n(r,B.a([A.ad,B.h(C.cEm(i.f),j,j,j,j,A.M,j,j,j)],p))
q=i.x
if(q!=="published"){q=q==="flagged"
o=q?A.bX.cd(0.12):A.a5
m=B.W(99)
l=q?"Denunciada":"Removida"
A.e.n(r,B.a([A.ad,B.A(j,B.h(l,j,j,j,j,B.aJ(j,j,q?A.bX:A.V,j,j,j,j,j,j,j,j,10,j,j,A.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.r,j,j,new B.K(o,j,j,m,j,j,A.x),j,j,j,D.NN,j,j,j)],p))}A.e.n(s,B.a([A.ab,B.O(r,A.v,A.h,A.l,0,j)],p))}r=i.e
if(r!=null&&A.f.B(r).length!==0){r=A.f.B(r)
q=x?A.ip:A.at
A.e.n(s,B.a([A.ab,B.h(r,j,j,j,j,B.aJ(j,j,x?A.z:A.cp,j,j,j,j,j,j,j,j,14,j,j,A.bo,j,1.45,!0,j,j,j,j,j,j,j,j),q,j,j)],p))}r=i.r
q=r==null
if(!q&&A.f.B(r).length!==0){o=B.a([A.R],p)
x=x&&t
t=k.d
m=k.e
l=i.w
if(x)o.push(new C.aNz(t,m,A.f.B(r),l,j))
else o.push(new C.aNy(t,m,A.f.B(r),l,h,j))
A.e.n(s,o)}if(h)h=k.r!=null||k.w!=null
else h=!1
if(h){h=B.a([],p)
x=k.r
if(x!=null)h.push(new B.Mw(q?"Responder":"Editar resposta",x,!0,j))
h.push(A.ci)
x=k.w
if(x!=null&&i.x==="published")h.push(B.aW(D.cda,x,j))
A.e.n(s,B.a([A.R,B.O(h,A.v,A.h,A.l,0,j)],p))}return B.A(j,B.B(s,A.G,A.h,A.l),A.r,j,j,u,j,j,j,w,j,j,j)}}
C.aM1.prototype={
u(d){var x=null,w=this.d,v=K.Tv("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",A.cA,w?A.z:A.ao1,!0,13,2),u=B.aH(x,x,w?4:3)
return B.O(B.a([v,u,B.h(""+this.c+",0",x,x,x,x,B.aJ(x,x,A.z,x,x,x,x,x,x,x,x,w?12:13,x,x,A.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.e),A.v,A.h,A.J,0,x)}}
C.aNy.prototype={
u(d){var x=this,w=null,v=B.A(w,w,A.r,w,w,new B.K(D.ak0,w,w,B.W(2),w,w,A.x),w,w,D.atC,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.df(1,A.b9,B.h(x.r?"A tua resposta":u,1,A.a1,w,w,A.hO,w,w,w),w),A.bh,B.b5(A.i6,$.au,w,w,14)],t),r=x.f
if(r!=null)A.e.n(s,B.a([A.bh,B.h(C.cEm(r),w,w,w,w,H.Iz,w,w,w)],t))
return new B.Ar(B.O(B.a([v,B.a5(B.O(B.a([new B.ci(u,30,x.d,!1,!0,w),A.ad,B.a5(B.A(w,B.B(B.a([B.O(s,A.v,A.h,A.l,0,w),A.j7,B.h(x.e,w,w,w,w,D.c70,w,w,w)],t),A.G,A.h,A.l),A.r,w,w,D.afS,w,w,w,D.asg,w,w,w),1)],t),A.G,A.h,A.l,0,w),1)],t),A.E,A.h,A.l,0,w),w)}}
C.aNz.prototype={
u(d){var x,w=this,v=null,u=B.W(18),t=w.c,s=y.e
t=B.a([B.O(B.a([new B.ci(t,24,w.d,!1,!0,v),A.ad,new B.df(1,A.b9,B.h(t,1,A.a1,v,v,A.e_,v,v,v),v),A.bX8,B.b5(A.i6,$.au,"Verificado",v,16),A.ad,B.A(v,D.c8e,A.r,v,v,new B.K(A.cy,v,v,B.W(999),v,v,A.x),v,v,v,A.D1,v,v,v)],s),A.v,A.h,A.l,0,v),A.aF,B.h(w.e,v,v,v,v,A.Iv,A.ip,v,v)],s)
x=w.f
if(x!=null)A.e.n(t,B.a([A.aF,B.h("Respondeu em "+F.lP[B.an(x)-1]+" "+B.ax(x),v,v,v,v,A.bf,v,v,v)],s))
return B.A(v,B.B(t,A.G,A.h,A.l),A.r,v,v,new B.K(A.t,v,v,u,v,v,A.x),v,v,v,G.i1,v,v,1/0)}}
var z=a.updateTypes([])
C.btM.prototype={
$0(){return B.ae(this.a).am("/u/"+B.q(this.b.y),null,y.a)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.M,[C.a82,C.aM1,C.aNy,C.aNz])
w(C.btM,B.bO)})()
B.br(b.typeUniverse,JSON.parse('{"a82":{"M":[],"e":[],"f":[]},"aM1":{"M":[],"e":[],"f":[]},"aNy":{"M":[],"e":[],"f":[]},"aNz":{"M":[],"e":[],"f":[]}}'))
var y={h:B.w("r<c>"),e:B.w("r<e>"),a:B.w("J?")};(function constants(){D.aew=new B.cy(A.fy,E.kL,E.kL,E.kL)
D.afS=new B.K(A.a5,null,null,D.aew,null,null,A.x)
D.ak0=new B.X(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.C)
D.Ma=new B.X(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.C)
D.asg=new B.a3(12,9,12,10)
D.atC=new B.a3(21,0,12,18)
D.NN=new B.a3(8,2,8,2)
D.aCu=new B.b7(A.i9,14,A.V,null,null,null)
D.c70=new B.Q(!0,A.z,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8e=new B.D("Parceiro",null,A.hg,null,null,null,null,null,null,null,null)
D.cda=new B.D("Denunciar",null,A.e_,null,null,null,null,null,null,null,null)})()};
(a=>{a["19rdF9xl9x0SFQPogfjYupBLsbc="]=a.current})($__dart_deferred_initializers__);