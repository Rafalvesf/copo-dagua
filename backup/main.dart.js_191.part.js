((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,F,C={
cEi(d){return A.f.aN(A.j.k(B.aw(d)),2,"0")+"/"+A.f.aN(A.j.k(B.aq(d)),2,"0")+"/"+B.aD(d)},
dNO(d){var x,w,v=A.j.aL(new B.aa(Date.now(),0,!1).cc(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.k.eO(v/30)+" meses"
x=A.k.eO(v/365)
w=x===1?"ano":"anos"
return"conta h\xe1 "+x+" "+w},
a8q:function a8q(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bv3:function bv3(d,e){this.a=d
this.b=e},
aMN:function aMN(d,e,f){this.c=d
this.d=e
this.a=f},
aOj:function aOj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aOk:function aOk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D,G,H,I,K,E
B=c[0]
A=c[2]
F=c[264]
C=a.updateHolder(c[177],C)
D=c[238]
G=c[384]
H=c[196]
I=c[185]
K=c[229]
E=c[435]
C.a8q.prototype={
t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.c,h=k.f
if(h){x=B.a([C.dNO(i.as)],y.h)
w=i.at
if(w!=null)x.push("evento a "+C.cEi(w))
w=i.ax
if(w!=null&&w.length!==0)x.push(w)
w=i.ay
if(w!=null)x.push("~"+B.p(w)+" convidados")
v=A.e.a1(x," \xb7 ")}else if(k.x){x=B.a([],y.h)
w=i.ax
if(w!=null&&w.length!==0)x.push(A.e.gJ(w.split(", ")))
w=i.at
if(w==null)w=i.f
x.push(F.fE[B.aq(w)-1]+" "+B.aD(w))
x=A.e.a1(x," \xb7 ")
v=x}else{x=C.cEi(i.f)
v=x}x=k.x
w=x?A.hx:A.bt
u=x?A.mQ:new B.O(A.t,j,j,B.W(22),j,j,A.y)
t=!h
s=t&&i.y!=null?new C.bv3(d,i):j
r=i.z
q=h?44:40
p=y.e
o=B.a([new B.dg(1,A.be,B.h(r,1,A.a1,j,j,A.aa,j,j),j)],p)
if(t&&i.y!=null)A.e.n(o,B.a([H.yO,D.P3],p))
s=B.a([B.a5(B.aO(B.N(B.a([new B.cg(r,q,i.Q,!1,!0,j),A.af,B.a5(B.x(B.a([B.N(o,A.u,A.h,A.l,0,j),B.h(v,j,j,j,j,A.L,j,j)],p),A.G,A.h,A.l),1)],p),A.u,A.h,A.l,0,j),s,j),1)],p)
if(t)A.e.n(s,B.a([A.ab,new C.aMN(i.d,x,j)],p))
s=B.a([B.N(s,A.u,A.h,A.l,0,j)],p)
if(!t||i.x!=="published"){r=B.a([],p)
for(q=i.d,n=1;n<=5;++n)r.push(B.b4(n<=q?A.fA:A.eB,D.Md,j,j,18))
if(h)A.e.n(r,B.a([A.ab,B.h(C.cEi(i.f),j,j,j,j,A.L,j,j)],p))
q=i.x
if(q!=="published"){q=q==="flagged"
o=q?A.bX.c3(0.12):A.ac
m=B.W(99)
l=q?"Denunciada":"Removida"
A.e.n(r,B.a([A.ab,B.w(j,B.h(l,j,j,j,j,B.aH(j,j,q?A.bX:A.V,j,j,j,j,j,j,j,j,10,j,j,A.E,j,j,!0,j,j,j,j,j,j,j,j),j,j),A.r,j,j,new B.O(o,j,j,m,j,j,A.y),j,j,j,D.NL,j,j,j)],p))}A.e.n(s,B.a([A.ae,B.N(r,A.u,A.h,A.l,0,j)],p))}r=i.e
if(r!=null&&A.f.C(r).length!==0){r=A.f.C(r)
q=x?A.iq:A.ay
A.e.n(s,B.a([A.ae,B.h(r,j,j,j,j,B.aH(j,j,x?A.z:A.cn,j,j,j,j,j,j,j,j,14,j,j,A.bj,j,1.45,!0,j,j,j,j,j,j,j,j),q,j)],p))}r=i.r
q=r==null
if(!q&&A.f.C(r).length!==0){o=B.a([A.S],p)
x=x&&t
t=k.d
m=k.e
l=i.w
if(x)o.push(new C.aOk(t,m,A.f.C(r),l,j))
else o.push(new C.aOj(t,m,A.f.C(r),l,h,j))
A.e.n(s,o)}if(h)h=k.r!=null||k.w!=null
else h=!1
if(h){h=B.a([],p)
x=k.r
if(x!=null)h.push(new B.MF(q?"Responder":"Editar resposta",x,!0,j))
h.push(A.cc)
x=k.w
if(x!=null&&i.x==="published")h.push(B.aO(D.cfj,x,j))
A.e.n(s,B.a([A.S,B.N(h,A.u,A.h,A.l,0,j)],p))}return B.w(j,B.x(s,A.G,A.h,A.l),A.r,j,j,u,j,j,j,w,j,j,j)}}
C.aMN.prototype={
t(d){var x=null,w=this.d,v=I.a4N("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",K.cQ,w?A.z:A.anT,!0,13,2),u=B.aG(x,x,w?4:3)
return B.N(B.a([v,u,B.h(""+this.c+",0",x,x,x,x,B.aH(x,x,A.z,x,x,x,x,x,x,x,x,w?12:13,x,x,A.E,x,x,!0,x,x,x,x,x,x,x,x),x,x)],y.e),A.u,A.h,A.I,0,x)}}
C.aOj.prototype={
t(d){var x=this,w=null,v=B.w(w,w,A.r,w,w,new B.O(D.ajW,w,w,B.W(2),w,w,A.y),w,w,D.atu,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.dg(1,A.be,B.h(x.r?"A tua resposta":u,1,A.a1,w,w,A.kh,w,w),w),A.bg,B.b4(A.hC,$.ay,w,w,14)],t),r=x.f
if(r!=null)A.e.n(s,B.a([A.bg,B.h(C.cEi(r),w,w,w,w,G.Iv,w,w)],t))
return new B.tn(B.N(B.a([v,B.a5(B.N(B.a([new B.cg(u,30,x.d,!1,!0,w),A.ab,B.a5(B.w(w,B.x(B.a([B.N(s,A.u,A.h,A.l,0,w),A.je,B.h(x.e,w,w,w,w,D.c7v,w,w)],t),A.G,A.h,A.l),A.r,w,w,D.afY,w,w,w,D.as8,w,w,w),1)],t),A.G,A.h,A.l,0,w),1)],t),A.F,A.h,A.l,0,w),w)}}
C.aOk.prototype={
t(d){var x,w=this,v=null,u=B.W(18),t=w.c,s=y.e
t=B.a([B.N(B.a([new B.cg(t,24,w.d,!1,!0,v),A.ab,new B.dg(1,A.be,B.h(t,1,A.a1,v,v,A.dx,v,v),v),A.bXi,B.b4(A.hC,$.ay,"Verificado",v,16),A.ab,B.w(v,D.cba,A.r,v,v,new B.O(A.cL,v,v,B.W(999),v,v,A.y),v,v,v,A.D6,v,v,v)],s),A.u,A.h,A.l,0,v),A.aE,B.h(w.e,v,v,v,v,A.It,A.iq,v)],s)
x=w.f
if(x!=null)A.e.n(t,B.a([A.aE,B.h("Respondeu em "+F.fE[B.aq(x)-1]+" "+B.aD(x),v,v,v,v,A.bk,v,v)],s))
return B.w(v,B.x(t,A.G,A.h,A.l),A.r,v,v,new B.O(A.t,v,v,u,v,v,A.y),v,v,v,A.ff,v,v,1/0)}}
var z=a.updateTypes([])
C.bv3.prototype={
$0(){return B.ae(this.a).ag("/u/"+B.p(this.b.y),null,y.a)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.H,[C.a8q,C.aMN,C.aOj,C.aOk])
w(C.bv3,B.bO)})()
B.bq(b.typeUniverse,JSON.parse('{"a8q":{"H":[],"e":[],"f":[]},"aMN":{"H":[],"e":[],"f":[]},"aOj":{"H":[],"e":[],"f":[]},"aOk":{"H":[],"e":[],"f":[]}}'))
var y={h:B.B("r<c>"),e:B.B("r<e>"),a:B.B("L?")};(function constants(){D.aeF=new B.cJ(A.fL,E.kS,E.kS,E.kS)
D.afY=new B.O(A.ac,null,null,D.aeF,null,null,A.y)
D.ajW=new B.Y(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.C)
D.Md=new B.Y(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.C)
D.as8=new B.a3(12,9,12,10)
D.atu=new B.a3(21,0,12,18)
D.NL=new B.a3(8,2,8,2)
D.P3=new B.ba(A.h7,14,A.V,null,null,null)
D.c7v=new B.P(!0,A.z,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cba=new B.E("Parceiro",null,A.jk,null,null,null,null,null,null,null)
D.cfj=new B.E("Denunciar",null,A.dx,null,null,null,null,null,null,null)})()};
(a=>{a["ZcOwYo6gH3LAu0QRqT+7js3XkMw="]=a.current})($__dart_deferred_initializers__);