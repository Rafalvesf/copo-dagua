((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,D={
cqZ(d){return A.f.aT(A.i.k(B.aR(d)),2,"0")+"/"+A.f.aT(A.i.k(B.aB(d)),2,"0")+"/"+B.aF(d)},
dua(d){var x,w,v=A.i.aX(new B.ah(Date.now(),0,!1).dd(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.j.fc(v/30)+" meses"
x=A.j.fc(v/365)
w=x===1?"ano":"anos"
return"conta h\xe1 "+x+" "+w},
a5I:function a5I(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aIj:function aIj(d,e){this.c=d
this.a=e},
aJI:function aJI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},C,F,G,H,E
B=c[0]
A=c[2]
D=a.updateHolder(c[160],D)
C=c[362]
F=c[423]
G=c[367]
H=c[234]
E=c[435]
D.a5I.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.c,k=n.f
if(k){x=B.a([D.dua(l.Q)],y.h)
w=l.as
if(w!=null)x.push("evento a "+D.cqZ(w))
w=l.at
if(w!=null&&w.length!==0)x.push(w)
w=l.ax
if(w!=null)x.push("~"+B.q(w)+" convidados")
v=A.e.aa(x," \xb7 ")}else v=D.cqZ(l.f)
x=B.X(22)
w=l.y
u=k?44:40
t=y.e
w=B.a([new B.dL(w,u,l.z,!1,!0,m),A.ax,B.a9(B.G(B.a([B.i(w,1,A.X,m,A.aH,m,m,m),B.i(v,m,m,m,A.a6,m,m,m)],t),A.J,A.l,A.q,0,A.w),1)],t)
u=!k
if(u)A.e.p(w,B.a([A.ay,new D.aIj(l.d,m)],t))
w=B.a([B.Y(w,A.x,A.l,A.q,0,m,m)],t)
if(!u||l.x!=="published"){u=B.a([],t)
for(s=l.d,r=1;r<=5;++r)u.push(B.b6(r<=s?A.ih:A.dA,C.KX,m,m,18))
if(k)A.e.p(u,B.a([A.ay,B.i(D.cqZ(l.f),m,m,m,A.a6,m,m,m)],t))
s=l.x
if(s!=="published"){s=s==="flagged"
q=s?A.cc.c4(0.12):A.af
p=B.X(99)
o=s?"Denunciada":"Removida"
A.e.p(u,B.a([A.ay,B.F(m,B.i(o,m,m,m,B.aH(m,m,s?A.cc:A.Q,m,m,m,m,m,m,m,m,10,m,m,A.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.r,m,m,new B.M(q,m,m,p,m,m,A.y),m,m,m,H.MD,m,m,m)],t))}A.e.p(w,B.a([A.a8,B.Y(u,A.x,A.l,A.q,0,m,m)],t))}u=l.e
if(u!=null&&A.f.D(u).length!==0)A.e.p(w,B.a([A.a8,B.i(A.f.D(u),m,m,m,C.bXw,m,m,m)],t))
u=l.r
s=u==null
if(!s&&A.f.D(u).length!==0)A.e.p(w,B.a([A.V,new D.aJI(n.d,n.e,A.f.D(u),l.w,k,m)],t))
if(k)k=n.r!=null||n.w!=null
else k=!1
if(k){k=B.a([],t)
u=n.r
if(u!=null)k.push(new B.EM(s?"Responder":"Editar resposta",u,!0,m))
k.push(A.bN)
u=n.w
if(u!=null&&l.x==="published")k.push(B.b0(C.c8N,u,m))
A.e.p(w,B.a([A.V,B.Y(k,A.x,A.l,A.q,0,m,m)],t))}return B.F(m,B.G(w,A.J,A.l,A.q,0,A.w),A.r,m,m,new B.M(A.u,m,m,x,m,m,A.y),m,m,m,A.bc,m,m,m)}}
D.aIj.prototype={
u(d){var x=null
return B.Y(B.a([C.aFW,A.GG,B.i(""+this.c+",0",x,x,x,A.dE,x,x,x)],y.e),A.x,A.l,A.U,0,x,x)}}
D.aJI.prototype={
u(d){var x=this,w=null,v=B.F(w,w,A.r,w,w,new B.M(C.aiE,w,w,B.X(2),w,w,A.y),w,w,C.aso,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.ef(1,A.bC,B.i(x.r?"A tua resposta":u,1,A.X,w,A.oe,w,w,w),w),A.bp,B.b6(A.jX,$.an,w,w,14)],t),r=x.f
if(r!=null)A.e.p(s,B.a([A.bp,B.i(D.cqZ(r),w,w,w,G.Hh,w,w,w)],t))
return new B.zE(B.Y(B.a([v,B.a9(B.Y(B.a([new B.dL(u,30,x.d,!1,!0,w),A.ay,B.a9(B.F(w,B.G(B.a([B.Y(s,A.x,A.l,A.q,0,w,w),A.eJ,B.i(x.e,w,w,w,C.c36,w,w,w)],t),A.J,A.l,A.q,0,A.w),A.r,w,w,C.aet,w,w,w,C.aqX,w,w,w),1)],t),A.J,A.l,A.q,0,w,w),1)],t),A.I,A.l,A.q,0,w,w),w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(B.O,[D.a5I,D.aIj,D.aJI])})()
B.bt(b.typeUniverse,JSON.parse('{"a5I":{"O":[],"e":[],"f":[]},"aIj":{"O":[],"e":[],"f":[]},"aJI":{"O":[],"e":[],"f":[]}}'))
var y={h:B.w("r<c>"),e:B.w("r<e>")};(function constants(){C.adf=new B.c_(A.fg,E.ke,E.ke,E.ke)
C.aet=new B.M(A.af,null,null,C.adf,null,null,A.y)
C.aiE=new B.P(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.C)
C.KX=new B.P(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.C)
C.aqX=new B.a0(12,9,12,10)
C.aso=new B.a0(21,0,12,18)
C.aFW=new B.k9("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",13,F.KU,2,!0,A.cb,null)
C.bXw=new B.H(!0,A.i6,null,null,null,null,14,A.bg,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c36=new B.H(!0,A.A,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8N=new B.B("Denunciar",null,A.dE,null,null,null,null,null,null,null,null)})()};
(a=>{a["QNtOLyjQqcbi5i3lKis4xJZSeVY="]=a.current})($__dart_deferred_initializers__);