((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,G,C={
cAA(d){return A.f.aW(A.i.k(B.aN(d)),2,"0")+"/"+A.f.aW(A.i.k(B.ay(d)),2,"0")+"/"+B.aE(d)},
dHC(d){var x,w,v=A.i.aS(new B.ae(Date.now(),0,!1).cV(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.k.fh(v/30)+" meses"
x=A.k.fh(v/365)
w=x===1?"ano":"anos"
return"conta h\xe1 "+x+" "+w},
a7z:function a7z(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bsr:function bsr(d,e){this.a=d
this.b=e},
aLq:function aLq(d,e,f){this.c=d
this.d=e
this.a=f},
aMX:function aMX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aMY:function aMY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D,H,I,K,E,L,F
B=c[0]
A=c[2]
G=c[234]
C=a.updateHolder(c[168],C)
D=c[370]
H=c[373]
I=c[191]
K=c[223]
E=c[421]
L=c[181]
F=c[320]
C.a7z.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.c,h=k.f
if(h){x=B.a([C.dHC(i.as)],y.h)
w=i.at
if(w!=null)x.push("evento a "+C.cAA(w))
w=i.ax
if(w!=null&&w.length!==0)x.push(w)
w=i.ay
if(w!=null)x.push("~"+B.q(w)+" convidados")
v=A.e.a3(x," \xb7 ")}else if(k.x){x=B.a([],y.h)
w=i.ax
if(w!=null&&w.length!==0)x.push(A.e.gM(w.split(", ")))
w=i.at
if(w==null)w=i.f
x.push(F.lN[B.ay(w)-1]+" "+B.aE(w))
x=A.e.a3(x," \xb7 ")
v=x}else{x=C.cAA(i.f)
v=x}x=k.x
w=x?A.ko:A.bg
u=x?A.mL:new B.O(A.t,j,j,B.a0(22),j,j,A.y)
t=!h
s=t&&i.y!=null?new C.bsr(d,i):j
r=i.z
q=h?44:40
p=y.e
o=B.a([new B.dL(1,A.bi,B.i(r,1,A.a0,j,j,A.ap,j,j,j),j)],p)
if(t&&i.y!=null)A.e.n(o,B.a([I.yE,D.aCJ],p))
s=B.a([B.a6(B.aU(B.R(B.a([new B.cF(r,q,i.Q,!1,!0,j),A.ar,B.a6(B.B(B.a([B.R(o,A.w,A.j,A.m,0,j,j),B.i(v,j,j,j,j,A.W,j,j,j)],p),A.G,A.j,A.m,0,A.v),1)],p),A.w,A.j,A.m,0,j,j),s,j),1)],p)
if(t)A.e.n(s,B.a([A.ak,new C.aLq(i.d,x,j)],p))
s=B.a([B.R(s,A.w,A.j,A.m,0,j,j)],p)
if(!t||i.x!=="published"){r=B.a([],p)
for(q=i.d,n=1;n<=5;++n)r.push(B.b2(n<=q?A.i2:A.dC,D.M9,j,j,18))
if(h)A.e.n(r,B.a([A.ak,B.i(C.cAA(i.f),j,j,j,j,A.W,j,j,j)],p))
q=i.x
if(q!=="published"){q=q==="flagged"
o=q?A.ck.cd(0.12):A.ac
m=B.a0(99)
l=q?"Denunciada":"Removida"
A.e.n(r,B.a([A.ak,B.D(j,B.i(l,j,j,j,j,B.aG(j,j,q?A.ck:A.S,j,j,j,j,j,j,j,j,10,j,j,A.J,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.r,j,j,new B.O(o,j,j,m,j,j,A.y),j,j,j,K.NS,j,j,j)],p))}A.e.n(s,B.a([A.aa,B.R(r,A.w,A.j,A.m,0,j,j)],p))}r=i.e
if(r!=null&&A.f.D(r).length!==0){r=A.f.D(r)
q=x?A.iZ:A.au
A.e.n(s,B.a([A.aa,B.i(r,j,j,j,j,B.aG(j,j,x?A.A:A.e7,j,j,j,j,j,j,j,j,14,j,j,A.bh,j,1.45,!0,j,j,j,j,j,j,j,j),q,j,j)],p))}r=i.r
q=r==null
if(!q&&A.f.D(r).length!==0){o=B.a([A.P],p)
x=x&&t
t=k.d
m=k.e
l=i.w
if(x)o.push(new C.aMY(t,m,A.f.D(r),l,j))
else o.push(new C.aMX(t,m,A.f.D(r),l,h,j))
A.e.n(s,o)}if(h)h=k.r!=null||k.w!=null
else h=!1
if(h){h=B.a([],p)
x=k.r
if(x!=null)h.push(new B.Mi(q?"Responder":"Editar resposta",x,!0,j))
h.push(A.c9)
x=k.w
if(x!=null&&i.x==="published")h.push(B.aU(D.cd2,x,j))
A.e.n(s,B.a([A.P,B.R(h,A.w,A.j,A.m,0,j,j)],p))}return B.D(j,B.B(s,A.G,A.j,A.m,0,A.v),A.r,j,j,u,j,j,j,w,j,j,j)}}
C.aLq.prototype={
u(d){var x=null,w=this.d,v=L.Tc("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",A.d_,w?A.A:A.aoj,!0,13,2),u=B.aJ(x,x,w?4:3)
return B.R(B.a([v,u,B.i(""+this.c+",0",x,x,x,x,B.aG(x,x,A.A,x,x,x,x,x,x,x,x,w?12:13,x,x,A.J,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.e),A.w,A.j,A.K,0,x,x)}}
C.aMX.prototype={
u(d){var x=this,w=null,v=B.D(w,w,A.r,w,w,new B.O(D.akg,w,w,B.a0(2),w,w,A.y),w,w,D.atX,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.dL(1,A.bi,B.i(x.r?"A tua resposta":u,1,A.a0,w,w,A.j4,w,w,w),w),A.br,B.b2(A.i_,$.ap,w,w,14)],t),r=x.f
if(r!=null)A.e.n(s,B.a([A.br,B.i(C.cAA(r),w,w,w,w,H.It,w,w,w)],t))
return new B.Ar(B.R(B.a([v,B.a6(B.R(B.a([new B.cF(u,30,x.d,!1,!0,w),A.ak,B.a6(B.D(w,B.B(B.a([B.R(s,A.w,A.j,A.m,0,w,w),A.h1,B.i(x.e,w,w,w,w,D.c79,w,w,w)],t),A.G,A.j,A.m,0,A.v),A.r,w,w,D.aga,w,w,w,D.asz,w,w,w),1)],t),A.G,A.j,A.m,0,w,w),1)],t),A.I,A.j,A.m,0,w,w),w)}}
C.aMY.prototype={
u(d){var x,w=this,v=null,u=B.a0(18),t=w.c,s=y.e
t=B.a([B.R(B.a([new B.cF(t,24,w.d,!1,!0,v),A.ak,new B.dL(1,A.bi,B.i(t,1,A.a0,v,v,A.du,v,v,v),v),A.a8C,B.b2(A.i_,$.ap,"Verificado",v,16),A.ak,B.D(v,D.c8e,A.r,v,v,new B.O(A.dU,v,v,B.a0(999),v,v,A.y),v,v,v,A.uQ,v,v,v)],s),A.w,A.j,A.m,0,v,v),A.aF,B.i(w.e,v,v,v,v,A.In,A.iZ,v,v)],s)
x=w.f
if(x!=null)A.e.n(t,B.a([A.aF,B.i("Respondeu em "+F.lN[B.ay(x)-1]+" "+B.aE(x),v,v,v,v,A.b9,v,v,v)],s))
return B.D(v,B.B(t,A.G,A.j,A.m,0,A.v),A.r,v,v,new B.O(A.t,v,v,u,v,v,A.y),v,v,v,G.ls,v,v,1/0)}}
var z=a.updateTypes([])
C.bsr.prototype={
$0(){return B.ai(this.a).aq("/u/"+B.q(this.b.y),null,y.a)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.L,[C.a7z,C.aLq,C.aMX,C.aMY])
w(C.bsr,B.bR)})()
B.br(b.typeUniverse,JSON.parse('{"a7z":{"L":[],"e":[],"f":[]},"aLq":{"L":[],"e":[],"f":[]},"aMX":{"L":[],"e":[],"f":[]},"aMY":{"L":[],"e":[],"f":[]}}'))
var y={h:B.w("r<c>"),e:B.w("r<e>"),a:B.w("I?")};(function constants(){D.aeU=new B.cf(A.fu,E.kL,E.kL,E.kL)
D.aga=new B.O(A.ac,null,null,D.aeU,null,null,A.y)
D.akg=new B.W(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.C)
D.M9=new B.W(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.C)
D.asz=new B.a2(12,9,12,10)
D.atX=new B.a2(21,0,12,18)
D.aCJ=new B.ba(A.i1,14,A.S,null,null,null)
D.c79=new B.M(!0,A.A,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8e=new B.E("Parceiro",null,A.k1,null,null,null,null,null,null,null,null)
D.cd2=new B.E("Denunciar",null,A.du,null,null,null,null,null,null,null,null)})()};
(a=>{a["TerwI5TyZ1Il3EFn25OH9EiaQRw="]=a.current})($__dart_deferred_initializers__);