((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,D={
cqj(d){return A.f.aU(A.i.k(B.aQ(d)),2,"0")+"/"+A.f.aU(A.i.k(B.aC(d)),2,"0")+"/"+B.aG(d)},
dtt(d){var x,w,v=A.i.aX(new B.ai(Date.now(),0,!1).dd(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.j.fg(v/30)+" meses"
x=A.j.fg(v/365)
w=x===1?"ano":"anos"
return"conta h\xe1 "+x+" "+w},
a5K:function a5K(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aIj:function aIj(d,e){this.c=d
this.a=e},
aJL:function aJL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i}},C,F,G,H,E
B=c[0]
A=c[2]
D=a.updateHolder(c[164],D)
C=c[374]
F=c[434]
G=c[378]
H=c[237]
E=c[449]
D.a5K.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.c,k=n.f
if(k){x=B.a([D.dtt(l.Q)],y.h)
w=l.as
if(w!=null)x.push("evento a "+D.cqj(w))
w=l.at
if(w!=null&&w.length!==0)x.push(w)
w=l.ax
if(w!=null)x.push("~"+B.q(w)+" convidados")
v=A.e.ah(x," \xb7 ")}else v=D.cqj(l.f)
x=B.Z(22)
w=l.y
u=k?44:40
t=y.e
w=B.a([new B.e7(w,u,l.z,!1,!0,m),A.aB,B.ae(B.I(B.a([B.i(w,1,A.a2,m,A.aT,m,m,m),B.i(v,m,m,m,A.ah,m,m,m)],t),A.L,A.l,A.q,0,A.w),1)],t)
u=!k
if(u)A.e.p(w,B.a([A.aC,new D.aIj(l.d,m)],t))
w=B.a([B.a_(w,A.x,A.l,A.q,0,m,m)],t)
if(!u||l.x!=="published"){u=B.a([],t)
for(s=l.d,r=1;r<=5;++r)u.push(B.b6(r<=s?A.k4:A.dB,C.KU,m,m,18))
if(k)A.e.p(u,B.a([A.aC,B.i(D.cqj(l.f),m,m,m,A.ah,m,m,m)],t))
s=l.x
if(s!=="published"){s=s==="flagged"
q=s?A.cb.cg(0.12):A.am
p=B.Z(99)
o=s?"Denunciada":"Removida"
A.e.p(u,B.a([A.aC,B.G(m,B.i(o,m,m,m,B.aE(m,m,s?A.cb:A.R,m,m,m,m,m,m,m,m,10,m,m,A.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.t,m,m,new B.N(q,m,m,p,m,m,A.y),m,m,m,H.ME,m,m,m)],t))}A.e.p(w,B.a([A.ab,B.a_(u,A.x,A.l,A.q,0,m,m)],t))}u=l.e
if(u!=null&&A.f.D(u).length!==0)A.e.p(w,B.a([A.ab,B.i(A.f.D(u),m,m,m,C.bWY,m,m,m)],t))
u=l.r
s=u==null
if(!s&&A.f.D(u).length!==0)A.e.p(w,B.a([A.U,new D.aJL(n.d,n.e,A.f.D(u),l.w,k,m)],t))
if(k)k=n.r!=null||n.w!=null
else k=!1
if(k){k=B.a([],t)
u=n.r
if(u!=null)k.push(new B.EP(s?"Responder":"Editar resposta",u,!0,m))
k.push(A.c2)
u=n.w
if(u!=null&&l.x==="published")k.push(B.ba(C.c8b,u,m))
A.e.p(w,B.a([A.U,B.a_(k,A.x,A.l,A.q,0,m,m)],t))}return B.G(m,B.I(w,A.L,A.l,A.q,0,A.w),A.t,m,m,new B.N(A.u,m,m,x,m,m,A.y),m,m,m,A.be,m,m,m)}}
D.aIj.prototype={
u(d){var x=null
return B.a_(B.a([C.aFz,A.GG,B.i(""+this.c+",0",x,x,x,A.dN,x,x,x)],y.e),A.x,A.l,A.W,0,x,x)}}
D.aJL.prototype={
u(d){var x=this,w=null,v=B.G(w,w,A.t,w,w,new B.N(C.aix,w,w,B.Z(2),w,w,A.y),w,w,C.asb,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.ei(1,A.bE,B.i(x.r?"A tua resposta":u,1,A.a2,w,A.oc,w,w,w),w),A.bC,B.b6(A.jX,$.ao,w,w,14)],t),r=x.f
if(r!=null)A.e.p(s,B.a([A.bC,B.i(D.cqj(r),w,w,w,G.Hh,w,w,w)],t))
return new B.zF(B.a_(B.a([v,B.ae(B.a_(B.a([new B.e7(u,30,x.d,!1,!0,w),A.aC,B.ae(B.G(w,B.I(B.a([B.a_(s,A.x,A.l,A.q,0,w,w),A.eJ,B.i(x.e,w,w,w,C.c2x,w,w,w)],t),A.L,A.l,A.q,0,A.w),A.t,w,w,C.aen,w,w,w,C.aqO,w,w,w),1)],t),A.L,A.l,A.q,0,w,w),1)],t),A.I,A.l,A.q,0,w,w),w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(B.O,[D.a5K,D.aIj,D.aJL])})()
B.bt(b.typeUniverse,JSON.parse('{"a5K":{"O":[],"e":[],"f":[]},"aIj":{"O":[],"e":[],"f":[]},"aJL":{"O":[],"e":[],"f":[]}}'))
var y={h:B.v("r<c>"),e:B.v("r<e>")};(function constants(){C.ad8=new B.c1(A.fh,E.kf,E.kf,E.kf)
C.aen=new B.N(A.am,null,null,C.ad8,null,null,A.y)
C.aix=new B.P(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.C)
C.KU=new B.P(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.C)
C.aqO=new B.a0(12,9,12,10)
C.asb=new B.a0(21,0,12,18)
C.aFz=new B.jG("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",13,F.KR,2,!0,A.cd,null)
C.bWY=new B.F(!0,A.iT,null,null,null,null,14,A.bf,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c2x=new B.F(!0,A.A,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8b=new B.C("Denunciar",null,A.dN,null,null,null,null,null,null,null,null)})()};
(a=>{a["sjVu7siciOL4KXasNnTvRTnknnY="]=a.current})($__dart_deferred_initializers__);