((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,E,F,G,H,I,C={
dF9(d){var x,w
if(d>=1000){x=d/1000
if(x===B.k.hC(x))w=B.k.a8(x,0)
else{w=B.k.a8(x,1)
w=A.aX(w,".",",")}return w+"k"}return B.k.a8(d,0)},
dFx(d,e){if(e===0)return d===0?0:null
return(d-e)/e*100},
dvq(){return new C.Fa(null)},
db8(d,e){var x,w=d-e
if(w===0)return"igual a antes"
x=w>0?"+":"\u2212"
return x+Math.abs(w)+" que antes"},
db9(d){var x=B.k.aN(d)
if(x===0)return null
return""+B.k.aN(Math.abs(d))+"%"},
Fa:function Fa(d){this.a=d},
aKq:function aKq(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cjL:function cjL(d){this.a=d},
cjK:function cjK(d,e){this.a=d
this.b=e},
cjO:function cjO(){},
cjN:function cjN(d){this.a=d},
cjJ:function cjJ(d){this.a=d},
cjM:function cjM(){},
aKF:function aKF(d,e,f){this.c=d
this.d=e
this.a=f},
co_:function co_(d,e){this.a=d
this.b=e},
Xn:function Xn(d,e){this.c=d
this.a=e},
bSB:function bSB(d){this.a=d},
bSC:function bSC(d){this.a=d},
aew:function aew(d,e,f){this.c=d
this.d=e
this.a=f},
XM:function XM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aLE:function aLE(d){this.a=d},
cpE:function cpE(d){this.a=d},
cpG:function cpG(d){this.a=d},
cpF:function cpF(d){this.a=d},
dg3(d){var x,w,v,u,t
if(d<=0)return 1
x=Math.pow(10,B.k.eN(Math.log(d)/2.302585092994046))
for(w=[1,2,2.5,5,10],v=w.length,u=0;u<v;++u){t=w[u]*x
if(t>=d)return t}return 10*x},
d9l(d,e,f){return new C.a91(f,e,d,null)},
a4m:function a4m(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIt:function aIt(){this.c=this.a=this.d=null},
c87:function c87(d,e,f){this.a=d
this.b=e
this.c=f},
c8d:function c8d(d,e){this.a=d
this.b=e},
c8b:function c8b(d,e){this.a=d
this.b=e},
c8a:function c8a(d,e){this.a=d
this.b=e},
c89:function c89(d){this.a=d},
c88:function c88(d){this.a=d},
c8c:function c8c(){},
aQO:function aQO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIu:function aIu(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
c8e:function c8e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a91:function a91(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aOY:function aOY(){this.c=this.a=this.d=null},
cye:function cye(d,e){this.a=d
this.b=e},
cyd:function cyd(d,e){this.a=d
this.b=e}},D,K
A=c[0]
B=c[2]
E=c[209]
F=c[380]
G=c[195]
H=c[288]
I=c[186]
C=a.updateHolder(c[41],C)
D=c[379]
K=c[270]
C.Fa.prototype={
R(){return new C.aKq(B.p9)}}
C.aKq.prototype={
u(d){var x=this,w=null,v=x.gS().G($.am5().$1(x.w),y.B),u=B.ni.C(0,new A.a4(0,A.aT(d,B.b5,y.w).w.r.b,0,0))
return A.cP(w,B.by,A.bB(!1,A.d6(A.a([D.bLn,new A.S(H.Ne,new C.aKF(x.w,new C.cjL(x),w),w),A.hD(v,new C.cjM(),new C.cjN(x),new C.cjO(),!1,!0,!1),D.cns],y.p),w,u,w,w,!1,!1),w,B.Z,!1),!0,w)}}
C.aKF.prototype={
u(d){var x,w,v,u=A.a([],y.D)
for(x=this.c,w=0;w<3;++w){v=D.bu7[w]
u.push(new A.ek(v.c,v===x,null,new C.co_(this,v),null))}return new I.mb(u,0,!1,null)}}
C.Xn.prototype={
ahw(d){return this.c.a===B.mA?B.bg[A.aw(d)-1]+" "+A.aM(d):""+A.aE(d)+" "+B.bg[A.aw(d)-1]},
blC(){var x,w,v=this.c,u=v.d,t=u.length,s=A.ep([0,t/3|0,B.j.aO(2*t,3),t-1],y.S),r=A.a([],y.s)
for(v=v.a===B.mA,x=0;x<t;++x){if(s.t(0,x))if(v)w=B.bg[A.aw(u[x].a)-1]
else{w=u[x].a
w=""+A.aE(w)+"/"+A.aw(w)}else w=""
r.push(w)}return r},
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n="Reservas",m=p.c,l=m.b,k=m.c,j=C.dFx(l,k),i=l===0&&m.x===0&&m.f===0,h=A.W(22),g=A.h(A.aJ(l,!1),o,o,o,o,B.mk,o,o),f=y.p,e=A.a([],f)
if(j!=null&&C.db9(j)!=null){x=j>=0
w=x?"+":"\u2212"
v=C.db9(j)
x=x?B.cU:B.dd
e.push(new A.dU(w+A.p(v),x,o))}e.push(new A.dU("vs. "+A.aJ(k,!1)+" antes",B.dd,o))
k=A.x(o,A.y(A.a([D.cdl,B.ar,g,B.ad,A.e4(B.bf,e,B.r,B.bl,6,6)],f),B.G,B.h,B.l),B.r,o,o,new A.J(B.t,o,o,h,o,o,B.x),o,o,o,B.cI,o,o,1/0)
h=y.n
g=A.a([],h)
for(e=m.d,x=e.length,u=0;u<e.length;e.length===x||(0,A.G)(e),++u)g.push(e[u].b)
e=A.a([],h)
for(x=m.e,w=x.length,u=0;u<x.length;x.length===w||(0,A.G)(x),++u)e.push(x[u].b)
g=A.a([new C.a4m(g,e,p.blC(),C.dN3(),new C.bSB(p),o),B.aE,D.bTO],f)
if(i)g.push(D.aB3)
e=m.f
x=C.db8(e,m.r)
w=m.x
v=""+w
t=C.db8(w,m.y)
s=B.k.aN((w===0?0:m.as/w)*100)
r=m.as
l=A.a([new A.DX(A.a([new A.lb(n,""+e,x,o),new A.lb("Pedidos",v,t,o),new A.lb("Convers\xe3o",""+s+" %",""+r+" de "+v+" pedidos",o),new A.lb("Valor m\xe9dio",A.aJ(e===0?0:l/e,!1),"por reserva",o)],y.Q),o)],f)
h=A.a([],h)
for(e=m.at,x=e.length,u=0;u<e.length;e.length===x||(0,A.G)(e),++u)h.push(e[u].b)
x=A.a([],y.s)
for(v=e.length,u=0;u<e.length;e.length===v||(0,A.G)(e),++u){t=e[u].a
x.push(""+A.aE(t)+"/"+A.aw(t))}h=A.a([C.d9l(new C.bSC(p),x,h),D.aB2],f)
w=A.a([new C.XM("Pedidos recebidos",w,w,o),B.aA,new C.XM("Propostas enviadas",m.Q,w,o),B.aA,new C.XM(n,r,w,o)],f)
e=m.ax
x=e==null
if(x)v="\u2014"
else{v=B.k.a8(e,1)
v=A.aX(v,".",",")}v=A.h(v,o,o,o,o,B.hS,o,o)
t=A.a([],f)
for(q=1;q<=5;++q){s=x?0:e
t.push(A.b9(s>=q-0.25?B.fv:B.ek,B.z,o,o,18))}e=A.O(t,B.v,B.h,B.l,0,o)
m=m.ay
if(m===0)m="Ainda sem avalia\xe7\xf5es"
else{x=m===1?"avalia\xe7\xe3o":"avalia\xe7\xf5es"
x=""+m+" "+x
m=x}return new A.S(B.jF,A.y(A.a([k,new A.c2("Receita",o,g,16,o),new A.c2("N\xfameros",o,l,16,o),new A.c2("Pedidos por semana",o,h,16,o),new A.c2("Do pedido \xe0 reserva",o,w,16,o),new A.c2("Avalia\xe7\xf5es",o,A.a([A.O(A.a([v,B.fJ,A.a5(A.y(A.a([e,B.aU,A.h(m,o,o,o,o,B.L,o,o)],f),B.G,B.h,B.l),1)],f),B.v,B.h,B.l,0,o)],f),16,o)],f),B.G,B.h,B.l),o)}}
C.aew.prototype={
u(d){var x,w,v,u,t=null
if(this.c){x=y.p
w=A.a([],x)
for(v=0;v<3;++v){u=A.a([A.x(t,t,B.r,E.u5,t,t,t,2,t,t,t,t,4)],x)
if(v<2)u.push(G.yJ)
B.e.n(w,u)}x=A.O(w,B.v,B.h,B.l,0,t)}else x=A.x(t,t,B.r,$.au,t,t,t,t,t,t,t,t,t)
return A.O(A.a([A.aK(x,2,16),B.bj,A.h(this.d,t,t,t,t,B.be,t,t)],y.p),B.v,B.h,B.J,0,t)}}
C.XM.prototype={
u(d){var x,w,v,u=this,t=null,s=u.e,r=s===0?0:u.d/s
s=u.c
x=""+u.d
w=""+B.k.aN(r*100)
v=y.p
return A.bj(t,t,t,A.y(A.a([A.O(A.a([A.a5(A.h(s,t,t,t,t,E.z6,t,t),1),A.h(x,t,t,t,t,B.dZ,t,t),A.h(" \xb7 "+w+"%",t,t,t,t,B.L,t,t)],v),B.v,B.h,B.l,0,t),B.aE,new A.kL(r,10,t,B.bG,t)],v),B.G,B.h,B.l),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,s+": "+x+", "+w+"%",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t)}}
C.aLE.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=e.G($.zc(),y.h),i=j.gv(j)
if(i!=null)j=!i.a&&!i.b
else j=!0
if(j)return B.ao
x=$.au
if(!i.b){j=A.W(22)
w=A.W(22)
return new A.S(D.Nj,A.eY(!1,j,!0,A.x(k,A.O(A.a([A.b9(B.nL,x,k,k,k),B.af,D.azi,B.vr],y.p),B.v,B.h,B.l,0,k),B.r,k,k,new A.J(B.t,k,k,w,k,k,B.x),k,k,k,B.bo,k,k,k),k,!0,k,k,k,k,k,k,k,k,new C.cpE(d),k,k,k,k,k,k,k),k)}j=e.G($.d2i(),y.H)
v=j.gv(j)
if(v==null||!v.a)return B.ao
j=v.c
u=j===0?k:B.k.aN((v.b-j)/j*100)
j=v.b
t=j===0?k:B.k.aN(v.e/j*100)
s=new C.cpG(x)
w=y.p
r=A.O(A.a([A.b9(B.vj,x,k,k,18),B.bj,D.c7C],w),B.v,B.h,B.l,0,k)
if(u==null)q=k
else{q=u>=0?"+":""
q=q+A.p(u)+"% vs. 30 dias antes"}q=A.O(A.a([s.$3("Visitas ao perfil",""+j,q),B.ae,s.$2("Come\xe7aram um pedido",""+v.d)],w),B.v,B.h,B.l,0,k)
j=v.e
p=t==null?k:A.p(t)+"% das visitas"
p=A.a([r,B.R,q,B.ad,A.O(A.a([s.$3("Pedidos recebidos",""+j,p),B.ae,s.$2("Cliques no destaque",""+v.f)],w),B.v,B.h,B.l,0,k)],w)
j=v.r
if(j.length!==0){r=A.W(22)
q=A.a([],y.n)
for(o=j.length,n=0;n<j.length;j.length===o||(0,A.G)(j),++n)q.push(j[n].b)
o=A.a([],y.s)
for(m=j.length,n=0;n<j.length;j.length===m||(0,A.G)(j),++n){l=j[n].a
o.push(""+A.aE(l)+"/"+A.aw(l))}B.e.n(p,A.a([B.R,A.x(k,C.d9l(new C.cpF(v),o,q),B.r,k,k,new A.J(B.t,k,k,r,k,k,B.x),k,k,k,D.asc,k,k,k)],w))}return new A.S(D.Nj,A.y(p,B.G,B.h,B.l),k)}}
C.a4m.prototype={
R(){return new C.aIt()},
ayA(d){return this.f.$1(d)},
brm(d){return this.r.$1(d)}}
C.aIt.prototype={
ai_(d,e){var x=this.a.c.length
if(x<2)return
this.p(new C.c87(this,B.k.af((d.a-40)/(e-40-8),0,1),x))},
u(d){return A.kV(new C.c8d(this,this.d))}}
C.aQO.prototype={
u(d){var x=null,w=A.W(12),v=A.h(this.d,x,x,x,x,B.kb,x,x),u=this.e,t=this.c
return A.x(x,A.y(A.a([v,A.h(u==null?t:t+" \xb7 antes "+u,x,x,x,x,D.c3P,x,x)],y.p),B.G,B.h,B.J),B.r,x,x,new A.J(B.z,x,x,w,x,x,B.x),x,x,x,D.arX,x,x,x)}}
C.aIu.prototype={
aZ(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.b,a1=a0.length,a2=A.U(a0,y.i),a3=e.c
B.e.n(a2,a3)
x=C.dg3(B.e.cV(a2,0,B.mM))
a2=a5.a
w=a5.b
v=w-10-22
u=new C.c8e(a1,a2-40-8,v,x)
$.aB()
t=A.bd()
t.r=B.bG.gv(0)
t.c=1
for(s=[0,0.5,1],r=s.length,q=a2-8,p=e.e,o=0;o<r;++o){n=s[o]
m=10+v*(1-n)
a4.lM(new A.K(40,m),new A.K(q,m),t)
e.ai0(a4,p.$1(x*n),new A.K(34,m),B.dB)}s=e.d
w-=8
l=0
for(;;){if(!(l<s.length&&l<a1))break
A:{r=s[l]
if(r.length===0)break A
e.ai0(a4,r,new A.K(u.$2(l,0).a,w),B.a4)}++l}if(a1<2)return
w=a3.length
if(w===a1){w=$.aB()
s=A.a([],y.v)
k=new A.cB(w.r,B.aP,d,d,s)
k.aB(new A.f_(u.$2(0,a3[0]).a,u.$2(0,a3[0]).b))
for(l=1;l<a1;++l){w=new A.cS(u.$2(l,a3[l]).a,u.$2(l,a3[l]).b)
s.push(w)
r=k.f
if(r!=null)w.e4(r)
k.ih()}$.aB()
a3=A.bd()
a3.r=E.u5.gv(0)
a3.c=2
a3.b=B.bM
a3.d=B.h8
e.aVw(a4,k,a3)}a3=$.aB()
w=A.a([],y.v)
j=new A.cB(a3.r,B.aP,d,d,w)
j.aB(new A.f_(u.$2(0,a0[0]).a,u.$2(0,a0[0]).b))
for(l=1;l<a1;++l){a3=new A.cS(u.$2(l,a0[l]).a,u.$2(l,a0[l]).b)
w.push(a3)
s=j.f
if(s!=null)a3.e4(s)
j.ih()}i=A.Ji(j)
h=a1-1
i.aB(new A.cS(u.$2(h,0).a,u.$2(h,0).b))
i.aB(new A.cS(u.$2(0,0).a,u.$2(0,0).b))
i.aB(new A.ns())
$.aB()
a3=A.bd()
w=10+v
a3.srj(new A.jK(B.dj,B.f7,B.dx,A.a([$.au.cc(0.18),$.au.cc(0)],y.O),d,d).Wv(0,new A.ac(0,10,0+a2,w)))
a4.dP(i,a3)
a3=A.bd()
a3.r=$.au.gv(0)
a3.c=2
a3.b=B.bM
a3.e=B.kV
a3.d=B.h8
a4.dP(j,a3)
g=e.f
a2=g==null
h=a2?h:g
f=u.$2(h,a0[h])
if(!a2){a0=f.a
a2=A.bd()
a2.r=B.W.cc(0.4).gv(0)
a2.c=1
a4.lM(new A.K(a0,10),new A.K(a0,w),a2)}a0=A.bd()
a0.r=B.t.gv(0)
a4.fw(f,6,a0)
a0=A.bd()
a0.r=$.au.gv(0)
a4.fw(f,4,a0)},
aVw(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=A.Ji(e),w=A.a([],y.L),v=new A.DE(x,!1,w),u=x.a,t=y.v;v.q();){s=v.c
if(s===0||v.f)A.an(A.iv('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new A.zQ(v,s)
q=0
for(;;){v.uS()
p=w[s].b
p===$&&A.b()
if(!(q<p.a.length()))break
v.uS()
p=w[s].b
p===$&&A.b()
p=Math.min(q+4,p.a.length())
d.dP(new A.cB(u,x.b,null,new A.kE([r,q,p,!0]),A.a([],t)),f)
q+=8}}},
ai0(d,e,f,g){var x,w,v=null,u=A.Nk(v,B.i9,v,v,v,A.eO(v,v,v,v,v,v,v,v,v,D.c1o,e),B.au,B.bZ,v,B.mY,B.d6)
u.Nl()
x=f.a
switch(g.a){case 1:x-=u.b.c
break
case 2:x-=u.b.c/2
break
default:break}w=u.b.a.c
u.aZ(d,new A.K(x,f.b-w.gb0(w)/2))},
dN(d){return d.b!==this.b||d.c!==this.c||d.f!=this.f}}
C.a91.prototype={
R(){return new C.aOY()},
Ms(d){return this.e.$1(d)}}
C.aOY.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=C.dg3(B.e.cV(q.a.c,0,B.mM)),n=q.d
if(n==null)n=q.a.c.length-1
q.a.toString
x=y.p
w=A.a([],x)
for(v=0;u=q.a,v<u.c.length;++v){u=u.Ms(v)
t=A.a([],x)
s=v===n
if(s)t.push(new A.S(B.nh,A.h(B.k.a8(q.a.c[v],0),p,p,p,p,D.c3C,p,p),p))
r=Math.max(3,80*q.a.c[v]/o)
t.push(A.fJ(p,p,p,B.aL,new A.J(s?$.au:D.ajM,p,p,B.tB,p,p,B.x),B.kw,p,r,p,p,p))
t.push(B.aE)
t.push(A.h(q.a.d[v],p,p,p,p,F.Io,p,p))
t=A.cp(B.bu,new A.S(B.CT,A.y(t,B.v,B.jZ,B.l),p),B.U,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.cye(q,v),p,p,p,p,p,p,!1,B.aD)
w.push(new A.bJ(1,B.at,new A.js(new A.n5(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,u,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.a5,p,p,p,p),!1,!1,p,!1,!1,t,p),p))}return A.aK(A.O(w,B.dJ,B.h,B.l,0,p),120,p)}}
var z=a.updateTypes(["Xn(vD)","c(T)"])
C.cjL.prototype={
$1(d){var x=this.a
return x.p(new C.cjK(x,d))},
$S:1522}
C.cjK.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cjO.prototype={
$0(){return D.bL2},
$S:90}
C.cjN.prototype={
$2(d,e){return new A.S(B.MV,new A.jk("N\xe3o foi poss\xedvel carregar os resultados.",new C.cjJ(this.a),null),null)},
$S:230}
C.cjJ.prototype={
$0(){var x=this.a
return x.gS().ai($.am5().$1(x.w))},
$S:0}
C.cjM.prototype={
$1(d){return new C.Xn(d,null)},
$S:z+0}
C.co_.prototype={
$0(){return this.a.d.$1(this.b)},
$S:0}
C.bSB.prototype={
$1(d){var x=this.a
return x.ahw(x.c.d[d].a)},
$S:37}
C.bSC.prototype={
$1(d){var x=this.a,w=x.c.at
return"Semana de "+x.ahw(w[d].a)+": "+B.k.aN(w[d].b)+" pedidos"},
$S:37}
C.cpE.prototype={
$0(){return A.ae(this.a).aj("/partner-pro",null,y.X)},
$S:0}
C.cpG.prototype={
$3(d,e,f){var x=null,w=A.W(22),v=A.a([A.h(d,x,x,x,x,B.ke,x,x),B.ar,A.h(e,x,x,x,x,D.c4k,x,x)],y.p)
if(f!=null)v.push(A.h(f,x,x,x,x,A.aI(x,x,this.a,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x))
return A.a5(A.x(x,A.y(v,B.G,B.h,B.l),B.r,x,x,new A.J(B.t,x,x,w,x,x,B.x),x,x,x,B.cT,x,x,x),1)},
$2(d,e){return this.$3(d,e,null)},
$S:1523}
C.cpF.prototype={
$1(d){var x=this.a.r[d],w=x.a
return"Semana de "+A.aE(w)+"/"+A.aw(w)+": "+x.b+" visitas"},
$S:37}
C.c87.prototype={
$0(){return this.a.d=B.k.aN(this.b*(this.c-1))},
$S:0}
C.c8d.prototype={
$2(d,e){var x,w,v,u,t=null,s=e.b,r=this.a,q=r.a,p=this.b
q=A.a([A.fT(t,t,t,new C.aIu(q.c,q.d,q.e,q.f,p,t),new A.af(s,170))],y.p)
if(p!=null){x=r.a
w=x.c.length
w=w<2?0:-1+2*p/(w-1)
x=x.brm(p)
v=r.a
v=v.ayA(v.c[p])
u=r.a
p=u.ayA(u.d[p])
q.push(A.cb(t,new A.d_(new A.iB(w,-1),t,t,new C.aQO(x,v,p,t),t),t,t,0,0,0,t))}return A.bj(t,t,t,A.cp(t,new A.bA(B.aw,t,B.aC,B.r,q,t),B.U,!1,t,t,t,t,new C.c89(r),t,new C.c8a(r,s),t,t,t,t,t,t,t,t,t,t,t,t,new C.c8b(r,s),new C.c8c(),t,t,t,!1,B.aD),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Gr\xe1fico de linha",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t)},
$S:1524}
C.c8b.prototype={
$1(d){return this.a.ai_(d.b,this.b)},
$S:62}
C.c8a.prototype={
$1(d){return this.a.ai_(d.b,this.b)},
$S:40}
C.c89.prototype={
$1(d){var x=this.a
return x.p(new C.c88(x))},
$S:55}
C.c88.prototype={
$0(){return this.a.d=null},
$S:0}
C.c8c.prototype={
$1(d){},
$S:114}
C.c8e.prototype={
$2(d,e){var x=this,w=x.a
return new A.K(40+(w<2?0:x.b*d/(w-1)),10+x.c*(1-e/x.d))},
$S:1525}
C.cye.prototype={
$0(){var x=this.a
return x.p(new C.cyd(x,this.b))},
$S:0}
C.cyd.prototype={
$0(){return this.a.d=this.b},
$S:0};(function installTearOffs(){var x=a._static_1
x(C,"dN3","dF9",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Fa,A.dC)
x(C.aKq,A.dw)
w(A.bu,[C.cjL,C.cjM,C.bSB,C.bSC,C.cpG,C.cpF,C.c8b,C.c8a,C.c89,C.c8c])
w(A.bL,[C.cjK,C.cjO,C.cjJ,C.co_,C.cpE,C.c87,C.c88,C.cye,C.cyd])
w(A.cK,[C.cjN,C.c8d,C.c8e])
w(A.L,[C.aKF,C.Xn,C.aew,C.XM,C.aQO])
x(C.aLE,A.ew)
w(A.H,[C.a4m,C.a91])
w(A.a_,[C.aIt,C.aOY])
x(C.aIu,A.qs)})()
A.br(b.typeUniverse,JSON.parse('{"Xn":{"L":[],"e":[],"f":[]},"Fa":{"H":[],"e":[],"f":[]},"aKq":{"a_":["Fa"]},"aKF":{"L":[],"e":[],"f":[]},"aew":{"L":[],"e":[],"f":[]},"XM":{"L":[],"e":[],"f":[]},"aLE":{"H":[],"e":[],"f":[]},"a4m":{"H":[],"e":[],"f":[]},"a91":{"H":[],"e":[],"f":[]},"aIt":{"a_":["a4m"]},"aQO":{"L":[],"e":[],"f":[]},"aIu":{"aV":[]},"aOY":{"a_":["a91"]}}'))
var y=(function rtii(){var x=A.z
return{B:x("ax<vD>"),h:x("ax<vE>"),H:x("ax<Fv>"),L:x("r<aYc>"),O:x("r<Z>"),Q:x("r<lb>"),D:x("r<ek>"),v:x("r<fG>"),s:x("r<c>"),p:x("r<e>"),n:x("r<T>"),w:x("du"),i:x("T"),S:x("v"),X:x("M?")}})();(function constants(){var x=a.makeConstList
D.ajM=new A.Z(1,0.788235294117647,0.8274509803921568,0.6901960784313725,B.C)
D.arX=new A.a4(10,6,10,6)
D.asc=new A.a4(14,16,14,10)
D.Nj=new A.a4(20,24,20,0)
D.c3_=new A.P(!0,B.z,null,null,null,null,13.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cgU=new A.D("Com o Premium v\xeas as visitas ao teu perfil por semana, quantos come\xe7aram um pedido e a convers\xe3o.",null,D.c3_,null,null,null,null,null,null,null)
D.azi=new A.bJ(1,B.at,D.cgU,null)
D.aB2=new A.h6("\xdaltimas 8 semanas.",8,null)
D.aB3=new A.h6("Ainda sem pedidos nem reservas neste per\xedodo.",10,null)
D.acY=new A.uJ("7 dias",7,0,"week")
D.bu7=x([D.acY,B.p9,B.mA],A.z("r<uJ>"))
D.bXh=new A.kZ(null,180,20,B.fU,0,null)
D.btk=x([B.rP,B.R,B.rP,B.bh,D.bXh],y.p)
D.ap2=new A.j5(B.av,B.h,B.l,B.v,null,B.cg,null,0,D.btk,null)
D.bL2=new A.S(B.al,D.ap2,null)
D.bLn=new A.lP("Resultados",null,!0,null,20,!0,null)
D.cmp=new C.aew(!1,"Este per\xedodo",null)
D.cmo=new C.aew(!0,"Per\xedodo anterior",null)
D.bvu=x([D.cmp,B.yI,D.cmo],y.p)
D.bTO=new A.nS(B.bJ,B.h,B.l,B.v,null,B.cg,null,0,D.bvu,null)
D.c1o=new A.P(!0,B.W,null,"LouisGeorgeCafe",B.cV,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3C=new A.P(!0,B.z,null,null,null,null,11,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3P=new A.P(!0,K.uc,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4k=new A.P(!0,B.z,null,null,null,null,24,B.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7C=new A.D("Premium \xb7 \xfaltimos 30 dias",null,B.bi,null,null,null,null,null,null,null)
D.cdl=new A.D("RECEITA \xb7 RESERVAS CONFIRMADAS",null,B.aH,null,null,null,null,null,null,null)
D.cns=new C.aLE(null)})()};
(a=>{a["oJBWulMnTZqeKILHuaj3ltrWBuM="]=a.current})($__dart_deferred_initializers__);