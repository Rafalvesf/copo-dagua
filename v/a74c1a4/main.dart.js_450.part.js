((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,E,F,G,H,I,C={
dDj(d){var x,w
if(d>=1000){x=d/1000
if(x===B.k.hx(x))w=B.k.a8(x,0)
else{w=B.k.a8(x,1)
w=A.aX(w,".",",")}return w+"k"}return B.k.a8(d,0)},
dDG(d,e){if(e===0)return d===0?0:null
return(d-e)/e*100},
dty(){return new C.F0(null)},
d9l(d,e){var x,w=d-e
if(w===0)return"igual a antes"
x=w>0?"+":"\u2212"
return x+Math.abs(w)+" que antes"},
d9m(d){var x=B.k.aN(d)
if(x===0)return null
return""+B.k.aN(Math.abs(d))+"%"},
F0:function F0(d){this.a=d},
aJQ:function aJQ(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cit:function cit(d){this.a=d},
cis:function cis(d,e){this.a=d
this.b=e},
ciw:function ciw(){},
civ:function civ(d){this.a=d},
cir:function cir(d){this.a=d},
ciu:function ciu(){},
aK4:function aK4(d,e,f){this.c=d
this.d=e
this.a=f},
cmI:function cmI(d,e){this.a=d
this.b=e},
Xa:function Xa(d,e){this.c=d
this.a=e},
bRA:function bRA(d){this.a=d},
bRB:function bRB(d){this.a=d},
aee:function aee(d,e,f){this.c=d
this.d=e
this.a=f},
Xz:function Xz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aL2:function aL2(d){this.a=d},
coi:function coi(d){this.a=d},
cok:function cok(d){this.a=d},
coj:function coj(d){this.a=d},
def(d){var x,w,v,u,t
if(d<=0)return 1
x=Math.pow(10,B.k.eN(Math.log(d)/2.302585092994046))
for(w=[1,2,2.5,5,10],v=w.length,u=0;u<v;++u){t=w[u]*x
if(t>=d)return t}return 10*x},
d7y(d,e,f){return new C.a8M(f,e,d,null)},
a46:function a46(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHT:function aHT(){this.c=this.a=this.d=null},
c6Z:function c6Z(d,e,f){this.a=d
this.b=e
this.c=f},
c74:function c74(d,e){this.a=d
this.b=e},
c72:function c72(d,e){this.a=d
this.b=e},
c71:function c71(d,e){this.a=d
this.b=e},
c70:function c70(d){this.a=d},
c7_:function c7_(d){this.a=d},
c73:function c73(){},
aQ9:function aQ9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHU:function aHU(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
c75:function c75(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a8M:function a8M(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aOk:function aOk(){this.c=this.a=this.d=null},
cwR:function cwR(d,e){this.a=d
this.b=e},
cwQ:function cwQ(d,e){this.a=d
this.b=e}},D,K
A=c[0]
B=c[2]
E=c[206]
F=c[377]
G=c[192]
H=c[285]
I=c[183]
C=a.updateHolder(c[41],C)
D=c[376]
K=c[267]
C.F0.prototype={
S(){return new C.aJQ(B.p9)}}
C.aJQ.prototype={
u(d){var x=this,w=null,v=x.gR().G($.alJ().$1(x.w),y.B),u=B.ng.C(0,new A.a3(0,A.aR(d,B.b5,y.w).w.r.b,0,0))
return A.cO(w,B.by,A.bA(!1,A.d4(A.a([D.bLi,new A.S(H.Na,new C.aK4(x.w,new C.cit(x),w),w),A.hC(v,new C.ciu(),new C.civ(x),new C.ciw(),!1,!0,!1),D.cnc],y.p),w,u,w,w,!1,!1),w,B.Z,!1),!0,w)}}
C.aK4.prototype={
u(d){var x,w,v,u=A.a([],y.D)
for(x=this.c,w=0;w<3;++w){v=D.bu3[w]
u.push(new A.ei(v.c,v===x,null,new C.cmI(this,v),null))}return new I.m9(u,0,!1,null)}}
C.Xa.prototype={
ahq(d){return this.c.a===B.mu?B.bg[A.av(d)-1]+" "+A.aL(d):""+A.aD(d)+" "+B.bg[A.av(d)-1]},
ble(){var x,w,v=this.c,u=v.d,t=u.length,s=A.eo([0,t/3|0,B.j.aO(2*t,3),t-1],y.S),r=A.a([],y.s)
for(v=v.a===B.mu,x=0;x<t;++x){if(s.t(0,x))if(v)w=B.bg[A.av(u[x].a)-1]
else{w=u[x].a
w=""+A.aD(w)+"/"+A.av(w)}else w=""
r.push(w)}return r},
u(d){var x,w,v,u,t,s,r,q,p=this,o=null,n="Reservas",m=p.c,l=m.b,k=m.c,j=C.dDG(l,k),i=l===0&&m.x===0&&m.f===0,h=A.W(22),g=A.h(A.aI(l,!1),o,o,o,o,B.kU,o,o),f=y.p,e=A.a([],f)
if(j!=null&&C.d9m(j)!=null){x=j>=0
w=x?"+":"\u2212"
v=C.d9m(j)
x=x?B.cW:B.dc
e.push(new A.dT(w+A.p(v),x,o))}e.push(new A.dT("vs. "+A.aI(k,!1)+" antes",B.dc,o))
k=A.x(o,A.y(A.a([D.cd5,B.ar,g,B.ac,A.e_(B.be,e,B.r,B.bk,6,6)],f),B.G,B.h,B.l),B.r,o,o,new A.I(B.t,o,o,h,o,o,B.x),o,o,o,B.cH,o,o,1/0)
h=y.n
g=A.a([],h)
for(e=m.d,x=e.length,u=0;u<e.length;e.length===x||(0,A.G)(e),++u)g.push(e[u].b)
e=A.a([],h)
for(x=m.e,w=x.length,u=0;u<x.length;x.length===w||(0,A.G)(x),++u)e.push(x[u].b)
g=A.a([new C.a46(g,e,p.ble(),C.dL5(),new C.bRA(p),o),B.aD,D.bTA],f)
if(i)g.push(D.aB_)
e=m.f
x=C.d9l(e,m.r)
w=m.x
v=""+w
t=C.d9l(w,m.y)
s=B.k.aN((w===0?0:m.as/w)*100)
r=m.as
l=A.a([new A.DM(A.a([new A.l7(n,""+e,x,o),new A.l7("Pedidos",v,t,o),new A.l7("Convers\xe3o",""+s+" %",""+r+" de "+v+" pedidos",o),new A.l7("Valor m\xe9dio",A.aI(e===0?0:l/e,!1),"por reserva",o)],y.Q),o)],f)
h=A.a([],h)
for(e=m.at,x=e.length,u=0;u<e.length;e.length===x||(0,A.G)(e),++u)h.push(e[u].b)
x=A.a([],y.s)
for(v=e.length,u=0;u<e.length;e.length===v||(0,A.G)(e),++u){t=e[u].a
x.push(""+A.aD(t)+"/"+A.av(t))}h=A.a([C.d7y(new C.bRB(p),x,h),D.aAZ],f)
w=A.a([new C.Xz("Pedidos recebidos",w,w,o),B.aA,new C.Xz("Propostas enviadas",m.Q,w,o),B.aA,new C.Xz(n,r,w,o)],f)
e=m.ax
x=e==null
if(x)v="\u2014"
else{v=B.k.a8(e,1)
v=A.aX(v,".",",")}v=A.h(v,o,o,o,o,B.hO,o,o)
t=A.a([],f)
for(q=1;q<=5;++q){s=x?0:e
t.push(A.b8(s>=q-0.25?B.fr:B.eh,B.z,o,o,18))}e=A.O(t,B.v,B.h,B.l,0,o)
m=m.ay
if(m===0)m="Ainda sem avalia\xe7\xf5es"
else{x=m===1?"avalia\xe7\xe3o":"avalia\xe7\xf5es"
x=""+m+" "+x
m=x}return new A.S(B.jC,A.y(A.a([k,new A.c1("Receita",o,g,16,o),new A.c1("N\xfameros",o,l,16,o),new A.c1("Pedidos por semana",o,h,16,o),new A.c1("Do pedido \xe0 reserva",o,w,16,o),new A.c1("Avalia\xe7\xf5es",o,A.a([A.O(A.a([v,B.fF,A.a4(A.y(A.a([e,B.aU,A.h(m,o,o,o,o,B.L,o,o)],f),B.G,B.h,B.l),1)],f),B.v,B.h,B.l,0,o)],f),16,o)],f),B.G,B.h,B.l),o)}}
C.aee.prototype={
u(d){var x,w,v,u,t=null
if(this.c){x=y.p
w=A.a([],x)
for(v=0;v<3;++v){u=A.a([A.x(t,t,B.r,E.u1,t,t,t,2,t,t,t,t,4)],x)
if(v<2)u.push(G.yF)
B.e.n(w,u)}x=A.O(w,B.v,B.h,B.l,0,t)}else x=A.x(t,t,B.r,$.at,t,t,t,t,t,t,t,t,t)
return A.O(A.a([A.aJ(x,2,16),B.bh,A.h(this.d,t,t,t,t,B.bf,t,t)],y.p),B.v,B.h,B.J,0,t)}}
C.Xz.prototype={
u(d){var x,w,v,u=this,t=null,s=u.e,r=s===0?0:u.d/s
s=u.c
x=""+u.d
w=""+B.k.aN(r*100)
v=y.p
return A.bk(t,t,t,A.y(A.a([A.O(A.a([A.a4(A.h(s,t,t,t,t,E.z2,t,t),1),A.h(x,t,t,t,t,B.dZ,t,t),A.h(" \xb7 "+w+"%",t,t,t,t,B.L,t,t)],v),B.v,B.h,B.l,0,t),B.aD,new A.kH(r,10,t,B.bF,t)],v),B.G,B.h,B.l),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,s+": "+x+", "+w+"%",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a6,t)}}
C.aL2.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=e.G($.z5(),y.h),i=j.gv(j)
if(i!=null)j=!i.a&&!i.b
else j=!0
if(j)return B.ao
x=$.at
if(!i.b){j=A.W(22)
w=A.W(22)
return new A.S(D.Nf,A.eW(!1,j,!0,A.x(k,A.O(A.a([A.b8(B.nL,x,k,k,k),B.ae,D.aze,B.vn],y.p),B.v,B.h,B.l,0,k),B.r,k,k,new A.I(B.t,k,k,w,k,k,B.x),k,k,k,B.bn,k,k,k),k,!0,k,k,k,k,k,k,k,k,new C.coi(d),k,k,k,k,k,k,k),k)}j=e.G($.d0z(),y.H)
v=j.gv(j)
if(v==null||!v.a)return B.ao
j=v.c
u=j===0?k:B.k.aN((v.b-j)/j*100)
j=v.b
t=j===0?k:B.k.aN(v.e/j*100)
s=new C.cok(x)
w=y.p
r=A.O(A.a([A.b8(B.vf,x,k,k,18),B.bh,D.c7m],w),B.v,B.h,B.l,0,k)
if(u==null)q=k
else{q=u>=0?"+":""
q=q+A.p(u)+"% vs. 30 dias antes"}q=A.O(A.a([s.$3("Visitas ao perfil",""+j,q),B.af,s.$2("Come\xe7aram um pedido",""+v.d)],w),B.v,B.h,B.l,0,k)
j=v.e
p=t==null?k:A.p(t)+"% das visitas"
p=A.a([r,B.R,q,B.ac,A.O(A.a([s.$3("Pedidos recebidos",""+j,p),B.af,s.$2("Cliques no destaque",""+v.f)],w),B.v,B.h,B.l,0,k)],w)
j=v.r
if(j.length!==0){r=A.W(22)
q=A.a([],y.n)
for(o=j.length,n=0;n<j.length;j.length===o||(0,A.G)(j),++n)q.push(j[n].b)
o=A.a([],y.s)
for(m=j.length,n=0;n<j.length;j.length===m||(0,A.G)(j),++n){l=j[n].a
o.push(""+A.aD(l)+"/"+A.av(l))}B.e.n(p,A.a([B.R,A.x(k,C.d7y(new C.coj(v),o,q),B.r,k,k,new A.I(B.t,k,k,r,k,k,B.x),k,k,k,D.as9,k,k,k)],w))}return new A.S(D.Nf,A.y(p,B.G,B.h,B.l),k)}}
C.a46.prototype={
S(){return new C.aHT()},
ayp(d){return this.f.$1(d)},
bqX(d){return this.r.$1(d)}}
C.aHT.prototype={
ahU(d,e){var x=this.a.c.length
if(x<2)return
this.p(new C.c6Z(this,B.k.af((d.a-40)/(e-40-8),0,1),x))},
u(d){return A.le(new C.c74(this,this.d))}}
C.aQ9.prototype={
u(d){var x=null,w=A.W(12),v=A.h(this.d,x,x,x,x,B.k6,x,x),u=this.e,t=this.c
return A.x(x,A.y(A.a([v,A.h(u==null?t:t+" \xb7 antes "+u,x,x,x,x,D.c3z,x,x)],y.p),B.G,B.h,B.J),B.r,x,x,new A.I(B.z,x,x,w,x,x,B.x),x,x,x,D.arU,x,x,x)}}
C.aHU.prototype={
b0(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.b,a1=a0.length,a2=A.U(a0,y.i),a3=e.c
B.e.n(a2,a3)
x=C.def(B.e.cU(a2,0,B.mG))
a2=a5.a
w=a5.b
v=w-10-22
u=new C.c75(a1,a2-40-8,v,x)
$.aB()
t=A.bb()
t.r=B.bF.gv(0)
t.c=1
for(s=[0,0.5,1],r=s.length,q=a2-8,p=e.e,o=0;o<r;++o){n=s[o]
m=10+v*(1-n)
a4.lK(new A.K(40,m),new A.K(q,m),t)
e.ahV(a4,p.$1(x*n),new A.K(34,m),B.dA)}s=e.d
w-=8
l=0
for(;;){if(!(l<s.length&&l<a1))break
A:{r=s[l]
if(r.length===0)break A
e.ahV(a4,r,new A.K(u.$2(l,0).a,w),B.a4)}++l}if(a1<2)return
w=a3.length
if(w===a1){w=$.aB()
s=A.a([],y.v)
k=new A.cz(w.r,B.aP,d,d,s)
k.aB(new A.eY(u.$2(0,a3[0]).a,u.$2(0,a3[0]).b))
for(l=1;l<a1;++l){w=new A.cQ(u.$2(l,a3[l]).a,u.$2(l,a3[l]).b)
s.push(w)
r=k.f
if(r!=null)w.e5(r)
k.ie()}$.aB()
a3=A.bb()
a3.r=E.u1.gv(0)
a3.c=2
a3.b=B.bL
a3.d=B.h8
e.aVc(a4,k,a3)}a3=$.aB()
w=A.a([],y.v)
j=new A.cz(a3.r,B.aP,d,d,w)
j.aB(new A.eY(u.$2(0,a0[0]).a,u.$2(0,a0[0]).b))
for(l=1;l<a1;++l){a3=new A.cQ(u.$2(l,a0[l]).a,u.$2(l,a0[l]).b)
w.push(a3)
s=j.f
if(s!=null)a3.e5(s)
j.ie()}i=A.J6(j)
h=a1-1
i.aB(new A.cQ(u.$2(h,0).a,u.$2(h,0).b))
i.aB(new A.cQ(u.$2(0,0).a,u.$2(0,0).b))
i.aB(new A.nq())
$.aB()
a3=A.bb()
w=10+v
a3.srg(new A.jI(B.dF,B.f6,B.dv,A.a([$.at.cc(0.18),$.at.cc(0)],y.O),d,d).Wk(0,new A.ad(0,10,0+a2,w)))
a4.dO(i,a3)
a3=A.bb()
a3.r=$.at.gv(0)
a3.c=2
a3.b=B.bL
a3.e=B.kS
a3.d=B.h8
a4.dO(j,a3)
g=e.f
a2=g==null
h=a2?h:g
f=u.$2(h,a0[h])
if(!a2){a0=f.a
a2=A.bb()
a2.r=B.V.cc(0.4).gv(0)
a2.c=1
a4.lK(new A.K(a0,10),new A.K(a0,w),a2)}a0=A.bb()
a0.r=B.t.gv(0)
a4.fv(f,6,a0)
a0=A.bb()
a0.r=$.at.gv(0)
a4.fv(f,4,a0)},
aVc(d,e,f){var x,w,v,u,t,s,r,q,p
for(x=A.J6(e),w=A.a([],y.L),v=new A.Dt(x,!1,w),u=x.a,t=y.v;v.q();){s=v.c
if(s===0||v.f)A.al(A.ir('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new A.zJ(v,s)
q=0
for(;;){v.uN()
p=w[s].b
p===$&&A.b()
if(!(q<p.a.length()))break
v.uN()
p=w[s].b
p===$&&A.b()
p=Math.min(q+4,p.a.length())
d.dO(new A.cz(u,x.b,null,new A.kB([r,q,p,!0]),A.a([],t)),f)
q+=8}}},
ahV(d,e,f,g){var x,w,v=null,u=A.N9(v,B.i5,v,v,v,A.eN(v,v,v,v,v,v,v,v,v,D.c1c,e),B.au,B.bY,v,B.mS,B.d6)
u.Nh()
x=f.a
switch(g.a){case 1:x-=u.b.c
break
case 2:x-=u.b.c/2
break
default:break}w=u.b.a.c
u.b0(d,new A.K(x,f.b-w.gaZ(w)/2))},
dU(d){return d.b!==this.b||d.c!==this.c||d.f!=this.f}}
C.a8M.prototype={
S(){return new C.aOk()},
Mo(d){return this.e.$1(d)}}
C.aOk.prototype={
u(d){var x,w,v,u,t,s,r,q=this,p=null,o=C.def(B.e.cU(q.a.c,0,B.mG)),n=q.d
if(n==null)n=q.a.c.length-1
q.a.toString
x=y.p
w=A.a([],x)
for(v=0;u=q.a,v<u.c.length;++v){u=u.Mo(v)
t=A.a([],x)
s=v===n
if(s)t.push(new A.S(B.nf,A.h(B.k.a8(q.a.c[v],0),p,p,p,p,D.c3n,p,p),p))
r=Math.max(3,80*q.a.c[v]/o)
t.push(A.fF(p,p,p,B.aL,new A.I(s?$.at:D.ajH,p,p,B.tx,p,p,B.x),B.n8,p,r,p,p,p))
t.push(B.aD)
t.push(A.h(q.a.d[v],p,p,p,p,F.Ik,p,p))
t=A.ct(B.bu,new A.S(B.CO,A.y(t,B.v,B.jV,B.l),p),B.W,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.cwR(q,v),p,p,p,p,p,p,!1,B.aF)
w.push(new A.bI(1,B.at,new A.jr(new A.n3(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,u,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.a6,p,p,p,p),!1,!1,p,!1,!1,t,p),p))}return A.aJ(A.O(w,B.dJ,B.h,B.l,0,p),120,p)}}
var z=a.updateTypes(["Xa(vw)","c(T)"])
C.cit.prototype={
$1(d){var x=this.a
return x.p(new C.cis(x,d))},
$S:1514}
C.cis.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ciw.prototype={
$0(){return D.bKY},
$S:87}
C.civ.prototype={
$2(d,e){return new A.S(B.MR,new A.jf("N\xe3o foi poss\xedvel carregar os resultados.",new C.cir(this.a),null),null)},
$S:228}
C.cir.prototype={
$0(){var x=this.a
return x.gR().aj($.alJ().$1(x.w))},
$S:0}
C.ciu.prototype={
$1(d){return new C.Xa(d,null)},
$S:z+0}
C.cmI.prototype={
$0(){return this.a.d.$1(this.b)},
$S:0}
C.bRA.prototype={
$1(d){var x=this.a
return x.ahq(x.c.d[d].a)},
$S:38}
C.bRB.prototype={
$1(d){var x=this.a,w=x.c.at
return"Semana de "+x.ahq(w[d].a)+": "+B.k.aN(w[d].b)+" pedidos"},
$S:38}
C.coi.prototype={
$0(){return A.ac(this.a).ak("/partner-pro",null,y.X)},
$S:0}
C.cok.prototype={
$3(d,e,f){var x=null,w=A.W(22),v=A.a([A.h(d,x,x,x,x,B.k8,x,x),B.ar,A.h(e,x,x,x,x,D.c44,x,x)],y.p)
if(f!=null)v.push(A.h(f,x,x,x,x,A.aH(x,x,this.a,x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x))
return A.a4(A.x(x,A.y(v,B.G,B.h,B.l),B.r,x,x,new A.I(B.t,x,x,w,x,x,B.x),x,x,x,B.cV,x,x,x),1)},
$2(d,e){return this.$3(d,e,null)},
$S:1515}
C.coj.prototype={
$1(d){var x=this.a.r[d],w=x.a
return"Semana de "+A.aD(w)+"/"+A.av(w)+": "+x.b+" visitas"},
$S:38}
C.c6Z.prototype={
$0(){return this.a.d=B.k.aN(this.b*(this.c-1))},
$S:0}
C.c74.prototype={
$2(d,e){var x,w,v,u,t=null,s=e.b,r=this.a,q=r.a,p=this.b
q=A.a([A.h_(t,t,t,new C.aHU(q.c,q.d,q.e,q.f,p,t),new A.af(s,170))],y.p)
if(p!=null){x=r.a
w=x.c.length
w=w<2?0:-1+2*p/(w-1)
x=x.bqX(p)
v=r.a
v=v.ayp(v.c[p])
u=r.a
p=u.ayp(u.d[p])
q.push(A.ca(t,new A.cY(new A.ix(w,-1),t,t,new C.aQ9(x,v,p,t),t),t,t,0,0,0,t))}return A.bk(t,t,t,A.ct(t,new A.bC(B.aw,t,B.aC,B.r,q,t),B.W,!1,t,t,t,t,new C.c70(r),t,new C.c71(r,s),t,t,t,t,t,t,t,t,t,t,t,t,new C.c72(r,s),new C.c73(),t,t,t,!1,B.aF),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Gr\xe1fico de linha",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a6,t)},
$S:1516}
C.c72.prototype={
$1(d){return this.a.ahU(d.b,this.b)},
$S:55}
C.c71.prototype={
$1(d){return this.a.ahU(d.b,this.b)},
$S:40}
C.c70.prototype={
$1(d){var x=this.a
return x.p(new C.c7_(x))},
$S:63}
C.c7_.prototype={
$0(){return this.a.d=null},
$S:0}
C.c73.prototype={
$1(d){},
$S:108}
C.c75.prototype={
$2(d,e){var x=this,w=x.a
return new A.K(40+(w<2?0:x.b*d/(w-1)),10+x.c*(1-e/x.d))},
$S:1517}
C.cwR.prototype={
$0(){var x=this.a
return x.p(new C.cwQ(x,this.b))},
$S:0}
C.cwQ.prototype={
$0(){return this.a.d=this.b},
$S:0};(function installTearOffs(){var x=a._static_1
x(C,"dL5","dDj",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.F0,A.dA)
x(C.aJQ,A.dv)
w(A.bv,[C.cit,C.ciu,C.bRA,C.bRB,C.cok,C.coj,C.c72,C.c71,C.c70,C.c73])
w(A.bN,[C.cis,C.ciw,C.cir,C.cmI,C.coi,C.c6Z,C.c7_,C.cwR,C.cwQ])
w(A.cJ,[C.civ,C.c74,C.c75])
w(A.M,[C.aK4,C.Xa,C.aee,C.Xz,C.aQ9])
x(C.aL2,A.ev)
w(A.H,[C.a46,C.a8M])
w(A.a1,[C.aHT,C.aOk])
x(C.aHU,A.qn)})()
A.bt(b.typeUniverse,JSON.parse('{"Xa":{"M":[],"e":[],"f":[]},"F0":{"H":[],"e":[],"f":[]},"aJQ":{"a1":["F0"]},"aK4":{"M":[],"e":[],"f":[]},"aee":{"M":[],"e":[],"f":[]},"Xz":{"M":[],"e":[],"f":[]},"aL2":{"H":[],"e":[],"f":[]},"a46":{"H":[],"e":[],"f":[]},"a8M":{"H":[],"e":[],"f":[]},"aHT":{"a1":["a46"]},"aQ9":{"M":[],"e":[],"f":[]},"aHU":{"aV":[]},"aOk":{"a1":["a8M"]}}'))
var y=(function rtii(){var x=A.z
return{B:x("aw<vw>"),h:x("aw<vx>"),H:x("aw<Fm>"),L:x("r<aXA>"),O:x("r<Z>"),Q:x("r<l7>"),D:x("r<ei>"),v:x("r<fB>"),s:x("r<c>"),p:x("r<e>"),n:x("r<T>"),w:x("ds"),i:x("T"),S:x("v"),X:x("L?")}})();(function constants(){var x=a.makeConstList
D.ajH=new A.Z(1,0.788235294117647,0.8274509803921568,0.6901960784313725,B.C)
D.arU=new A.a3(10,6,10,6)
D.as9=new A.a3(14,16,14,10)
D.Nf=new A.a3(20,24,20,0)
D.c2N=new A.Q(!0,B.z,null,null,null,null,13.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cgE=new A.D("Com o Premium v\xeas as visitas ao teu perfil por semana, quantos come\xe7aram um pedido e a convers\xe3o.",null,D.c2N,null,null,null,null,null,null,null)
D.aze=new A.bI(1,B.at,D.cgE,null)
D.aAZ=new A.h2("\xdaltimas 8 semanas.",8,null)
D.aB_=new A.h2("Ainda sem pedidos nem reservas neste per\xedodo.",10,null)
D.acT=new A.uB("7 dias",7,0,"week")
D.bu3=x([D.acT,B.p9,B.mu],A.z("r<uB>"))
D.bX3=new A.kT(null,180,20,B.fR,0,null)
D.btg=x([B.rM,B.R,B.rM,B.bi,D.bX3],y.p)
D.aoZ=new A.j0(B.av,B.h,B.l,B.v,null,B.cg,null,0,D.btg,null)
D.bKY=new A.S(B.al,D.aoZ,null)
D.bLi=new A.lM("Resultados",null,!0,null,20,!0,null)
D.cm9=new C.aee(!1,"Este per\xedodo",null)
D.cm8=new C.aee(!0,"Per\xedodo anterior",null)
D.bvq=x([D.cm9,B.yE,D.cm8],y.p)
D.bTA=new A.nP(B.bJ,B.h,B.l,B.v,null,B.cg,null,0,D.bvq,null)
D.c1c=new A.Q(!0,B.V,null,"LouisGeorgeCafe",B.cX,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3n=new A.Q(!0,B.z,null,null,null,null,11,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3z=new A.Q(!0,K.u8,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c44=new A.Q(!0,B.z,null,null,null,null,24,B.d3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7m=new A.D("Premium \xb7 \xfaltimos 30 dias",null,B.bj,null,null,null,null,null,null,null)
D.cd5=new A.D("RECEITA \xb7 RESERVAS CONFIRMADAS",null,B.aH,null,null,null,null,null,null,null)
D.cnc=new C.aL2(null)})()};
(a=>{a["Hnrjyhch2ravQQzLPj1qM5cXRjg="]=a.current})($__dart_deferred_initializers__);