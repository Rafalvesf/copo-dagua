((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,K,L,F,M,N,O,P,B={
dbz(){var x,w=$.N1(),v=J.m3(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aW(C.i.hX(w.t5(256),16),2,"0")
return C.e.im(v)},
aMx(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aMx=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Z()
q=r.b
q===$&&A.b()
q=q.gbK().e.a
u=(q==null?null:q.r).a
t=C.f.n(e,".")?C.e.ga4(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dbz()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.S("chat-attachments")
x=3
return A.d(q.qL(s,d,new A.ty(!1,f)),$async$aMx)
case 3:r=r.b.ay
r===$&&A.b()
v=r.S("chat-attachments").B4(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aMx,w)},
cMc(d){var x,w=C.e.ga4(d.split(".")).toLowerCase()
A:{if("jpg"===w||"jpeg"===w){x="image/jpeg"
break A}if("png"===w){x="image/png"
break A}if("gif"===w){x="image/gif"
break A}if("webp"===w){x="image/webp"
break A}if("heic"===w){x="image/heic"
break A}if("pdf"===w){x="application/pdf"
break A}if("doc"===w){x="application/msword"
break A}if("docx"===w){x="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
break A}if("xls"===w){x="application/vnd.ms-excel"
break A}if("xlsx"===w){x="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
break A}x="application/octet-stream"
break A}return x},
qu(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$qu=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.cd(null,new B.cnA(),d,!0,!1,null,l),$async$qu)
case 3:k=f
if(k==null||d.e==null){v=null
x=1
break}case 4:switch(k){case"photo":x=6
break
case"file":x=7
break
case"sticker":x=8
break
case"gif":x=9
break
default:x=5
break}break
case 6:x=10
return A.d(new A.ln().W1(85,2048,C.fA),$async$qu)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.ks(),$async$qu)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.hL(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aMx(t,s,B.cMc(s)),$async$qu)
case 12:v=new j.FY(f,r,s)
x=1
break
case 7:x=13
return A.d($.cPq().x5(D.bqB,null,null),$async$qu)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.ks(),$async$qu)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.T(y.q).f.ah(D.bO5)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.cl(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbkR(p))
if(C.f.hL(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aMx(t,l,B.cMc(l)),$async$qu)
case 15:v=new j.FY(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cd(null,new B.cnB(),d,!0,!1,null,l),$async$qu)
case 16:n=f
v=n==null?null:new B.FY("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cd(null,new B.cnC(),d,!0,!0,null,l),$async$qu)
case 17:m=f
v=m==null?null:new B.FY(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$qu,w)},
FY:function FY(d,e,f){this.a=d
this.b=e
this.c=f},
cnA:function cnA(){},
cnB:function cnB(){},
cnC:function cnC(){},
L2:function L2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bwP:function bwP(d,e){this.a=d
this.b=e},
Vi:function Vi(d){this.a=d},
caE:function caE(d,e){this.a=d
this.b=e},
Lw:function Lw(d){this.a=d},
a8V:function a8V(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bJl:function bJl(d){this.a=d},
bJm:function bJm(d,e){this.a=d
this.b=e},
bJn:function bJn(d){this.a=d},
bJo:function bJo(d){this.a=d},
bJq:function bJq(d){this.a=d},
bJp:function bJp(d,e,f){this.a=d
this.b=e
this.c=f},
NM:function NM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aRq:function aRq(d,e){this.a=d
this.b=e},
aRn:function aRn(d){this.a=d},
aRp:function aRp(d){this.a=d},
aRo:function aRo(d){this.a=d},
aRr:function aRr(d){this.a=d},
d4F(d){return new B.ur(d,A.B(y.N,y.F),new A.an(A.iC(0,0),0,!1))},
czO(d){var x,w=J.a3(d)
if(w.ga_(d))return null
x=w.du(d,new B.csH(),y.N).bB(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
ur:function ur(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bsy:function bsy(){},
bsz:function bsz(d){this.a=d},
bsw:function bsw(){},
bsx:function bsx(){},
bsA:function bsA(d,e){this.a=d
this.b=e},
bsB:function bsB(d){this.a=d},
bsv:function bsv(d){this.a=d},
bsE:function bsE(){},
bsF:function bsF(){},
bsC:function bsC(){},
bsD:function bsD(){},
csH:function csH(){},
Wc(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$Wc=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.T(y.q).f.ah(D.bNG)
x=1
break}x=3
return A.d(A.cd(null,new B.csb(A.hm(h,0,A.jg(12,"count",y.r),A.a6(h).c).bB(0)),d,!0,!0,null,y.C),$async$Wc)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(L.uQ(d,e,f,u.c,u.d,g,t),$async$Wc)
case 4:case 1:return A.l(v,w)}})
return A.m($async$Wc,w)},
z8:function z8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csb:function csb(d){this.a=d},
csa:function csa(d,e){this.a=d
this.b=e},
cuv(d,e,f,g,h,i,j){return new B.aig(f,d,i,j,g,h,e,null)},
aig:function aig(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aRw:function aRw(){},
aRt:function aRt(d){this.a=d},
aRv:function aRv(d){this.a=d},
aRu:function aRu(){},
cCB(d){var x,w,v,u
for(x=new A.bV(d),w=y.V,x=new A.ap(x,x.gv(0),w.i("ap<a8.E>")),w=w.i("a8.E"),v=0;x.p();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bvh[C.i.aj(v,5)]},
xz:function xz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
NN:function NN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aRs:function aRs(d){this.a=d},
NP:function NP(d,e){this.c=d
this.a=e},
aPz:function aPz(){},
aPA:function aPA(){},
ag_:function ag_(){},
G4:function G4(){},
aRZ:function aRZ(d,e){this.a=d
this.b=e},
a7g:function a7g(){},
cG1(d,e,f,g,h,i,j,k){return new B.a0J(A.df0(B.dfB(),i,j),d,g,h,e,A.afx(e),f,i.i("@<0>").b3(j).b3(k).i("a0J<1,2,3>"))},
b90(d,e,f,g,h,i,j,k,l,m){return new A.w1(d,h,f,j,k,g,e,i,l.i("@<0>").b3(m).i("w1<1,2>"))},
a0J:function a0J(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,Q,R,S,T,U,V
J=c[1]
A=c[0]
C=c[2]
E=c[313]
G=c[182]
H=c[387]
I=c[371]
K=c[303]
L=c[145]
F=c[241]
M=c[408]
N=c[296]
O=c[358]
P=c[442]
B=a.updateHolder(c[110],B)
D=c[245]
Q=c[367]
R=c[388]
S=c[126]
T=c[406]
U=c[319]
V=c[431]
B.FY.prototype={
gaF(d){return this.c}}
B.L2.prototype={
u(d){var x=null,w=A.T(18),v=A.T(18)
return A.eY(!1,w,!0,new A.a_(C.ed,A.I(A.a([A.E(x,A.aJ(this.c,$.a5,x,x,26),C.t,x,x,new A.K(C.af,x,x,v,x,x,C.y),x,58,x,x,x,x,x,58),C.aF,A.i(this.d,x,x,x,C.lE,x,x,x)],y.p),C.x,C.m,C.a_,0,C.w),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bwP(this,d),x,x,x,x,x,x,x)}}
B.Vi.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bov[x]
v=new A.aX(14,14)
s.push(A.eY(!1,new A.bW(v,v,v,v),!0,new A.a_(C.fX,A.a_7(w,C.jr,u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.caE(d,w),u,u,u,u,u,u,u))}return new A.a_(D.amC,A.I(A.a([D.c17,C.Z,A.yb(1,s,4,8,8,u,C.e4,!0)],t),C.I,C.m,C.a_,0,C.w),u)}}
B.Lw.prototype={
R(){return new B.a8V(new A.aM(C.aj,$.ah()),D.bqY)}}
B.a8V.prototype={
ak(){this.aG()
this.IM("")},
m(){var x=this.d
x.Z$=$.ah()
x.U$=0
this.a9()},
IM(d){return this.b8V(d)},
b8V(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$IM=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.t(new B.bJl(s))
v=3
m=C.f.L(d)
l=m.length===0
r=l?"trending":"search"
k=A.u(r)
q=A.B(y.N,y.z)
J.bj(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.bj(q,"limit","24")
J.bj(q,"rating","pg")
l=!l
if(l)J.bj(q,"q",m)
if(l)J.bj(q,"lang","pt")
p=A.adM("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aMS(p,null),$async$IM)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bt.jB(0,A.iS(A.iP(q.e)).bD(0,q.w),null)),"data"))
s.t(new B.bJm(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.t(new B.bJn(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bJo(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$IM,w)},
u(d){var x=this,w=null,v=A.at(d,w,y.w).w,u=A.cB(w,C.a9,!1,w,!0,C.C,w,A.cH(),x.d,w,w,w,w,w,2,D.aye,C.X,!0,w,!0,w,!1,w,C.aG,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gb8U(),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.au,w,C.b6,w,C.xC,w,w),t=x.r
if(t!=null)t=A.bF(A.i(t,w,w,w,C.eV,C.aa,w,w),w,w)
else t=x.f?C.bk:G.ZJ(w,C.X,V.a5X,new B.bJq(x),x.e.length,w,w,!1)
return A.aT(new A.a_(D.amz,A.I(A.a([u,C.a5,A.ac(t,1),C.aF,D.aaj],y.p),C.I,C.m,C.q,0,C.w),w),v.a.b*0.62,w)}}
B.NM.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.at(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.be(s.c,"asset:"))return A.a_7(C.f.bP(s.c,6),C.jr,120,r,120)
if(p==="image"||p==="gif")return A.dX(r,A.eu(A.T(16),new A.ev(new A.aK(0,q,0,320),A.l4(s.c,new B.aRo(q),C.bZ,r,new B.aRp(q),r,r),r),C.aH),C.X,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aRq(s,d),r,r,r,r,r,r,!1,C.bm)
p=A.T(16)
x=s.f
w=x?$.a5:C.af
v=A.T(16)
u=A.aJ(P.MH,x?C.v:$.a5,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a2,r,A.as(r,r,x?C.v:C.E,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eY(!1,p,!0,A.E(r,A.W(A.a([u,C.an,new A.eo(1,C.bM,t,r),C.bq,A.aJ(K.u5,x?C.v:C.L,r,r,18)],y.p),C.x,C.m,C.a_,0,r,r),C.t,r,new A.aK(0,q,0,1/0),new A.K(w,r,r,v,r,r,C.y),r,r,r,r,D.am2,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aRr(s),r,r,r,r,r,r,r)},
gaF(d){return this.e}}
B.ur.prototype={
cY(){var x=this,w=y.T,v=A.en(x).M(A.cA($.bp(),new B.bsy(),y.D,w),w)
A.en(x).a7M(new B.bsz(x))
if(v==null)return C.a9
w=$.Z().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.a4I(0,"typing:"+x.x,C.a44).bpW(new B.bsA(x,v),"typing")
w.abe(0)
x.y=w
x.Q=A.wG(C.fV,new B.bsB(x))
return C.a9},
agk(){var x,w=this,v=w.z
v.e6(v,new B.bsv(new A.an(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cs(v,v.r,v.e,A.r(v).i("cs<2>"));v.p();)x.push(v.d.a)
if(x.length!==J.b0(w.ga1(0))||!C.e.eb(x,J.cU5(w.ga1(0))))w.sa1(0,x)},
a95(d){var x,w=this,v=w.y,u=A.en(w).a2(0,$.bp(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.an(Date.now(),0,!1)
if(x.df(w.as).a<2e6)return
w.as=x
v.aaz(0,"typing",A.R(["id",t,"name",d],y.N,y.z),C.Fc).cJ(new B.bsE(),new B.bsF(),y.H)},
fK(d){var x=this.y,w=A.en(this).a2(0,$.bp(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.an(A.iC(0,0),0,!1)
x.aaz(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),C.Fc).cJ(new B.bsC(),new B.bsD(),y.H)}}
B.z8.prototype={}
B.aig.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.fw(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a2,r,M.GC,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a2,r,A.as(r,r,s.f?C.fT:C.L,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.W(A.a([q,C.aW,A.ac(A.I(w,C.I,C.m,C.a_,0,C.w),1)],x),C.x,C.m,C.q,0,r,r)
q=A.a([new A.cy(0,C.bi,C.E.bW(0.06),C.EA,14)],y.E)
w=A.at(d,C.bb,y.w).w
v=new B.aRw().$3(H.ur,"Voltar",new B.aRt(d))
t=s.r
v=A.a([v,C.aW,A.ac(t==null?u:A.b_(u,t,r),1)],x)
C.e.A(v,A.a([C.an,A.Jg(A.E(C.S,R.NL,C.t,r,r,C.kx,r,44,r,r,r,r,r,44),r,new B.aRu(),new B.aRv(s),C.ed,C.a3i,"Mais op\xe7\xf5es",y.N)],x))
return A.E(r,A.I(A.a([A.W(v,C.x,C.m,C.q,0,r,r)],x),C.T,C.m,C.a_,0,C.w),C.t,r,r,new A.K(C.v,r,r,r,q,r,C.y),r,r,r,r,new A.X(16,w.r.b+10,16,12),r,r,r)},
gaF(d){return this.c}}
B.xz.prototype={
u(d){var x=null,w=A.at(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.E:C.v,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.a_(F.KQ,A.i(v,x,x,x,A.as(x,x,B.cCB(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,A.as(x,x,s?C.v:C.E,x,x,x,x,x,x,x,x,15,x,x,C.bf,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ev(new A.aK(0,w.a.a*0.78,0,1/0),A.E(x,A.I(o,C.I,C.m,C.a_,0,C.w),C.t,x,x,new A.K(r,x,x,new A.bW(E.wU,E.wU,new A.aX(q,q),new A.aX(p,p)),x,x,C.y),x,x,x,x,new A.X(14,t,14,10),x,x,x),x)}}
B.NN.prototype={
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.A(u,A.a([A.b_(A.E(C.S,D.azX,C.t,w,w,C.kx,w,44,w,w,w,w,w,44),x.e,w),C.an],v))
v=A.T(999)
u.push(A.ac(A.E(C.c1,A.cB(w,C.a9,!1,w,!0,C.C,w,A.cH(),x.c,w,w,w,w,w,2,A.jO(w,C.ca,w,C.V,w,w,w,w,!0,C.ca,w,w,w,w,w,w,!1,w,w,w,w,C.ca,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.X,!0,w,!0,w,!1,w,C.aG,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aRs(x),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,N.xH,!0,C.au,w,C.b6,w,C.a6K,w,w),C.t,w,w,new A.K(C.af,w,w,v,w,w,C.y),w,44,w,w,C.cl,w,w,w),1))
u.push(C.an)
u.push(A.b_(A.E(C.S,D.azZ,C.t,w,w,C.of,w,44,w,w,w,w,w,44),x.d,w))
return A.E(w,A.bn(!0,new A.a_(T.L6,A.W(u,C.x,C.m,C.q,0,w,w),w),w,D.alq,!1),C.t,C.v,w,w,w,w,w,w,w,w,w,w)}}
B.NP.prototype={
u(d){var x=null,w=this.c
return A.cud(C.fm,w==null?D.bMR:new A.a_(D.amG,A.bF(A.i(w,x,x,x,C.fj,x,x,x),x,x),x),C.cH,C.az)}}
B.aPz.prototype={
$1(d){return A.lu(d,null,!0,null,null,y.S,y.z)},
gUa(d){return D.ado},
atC(d,e,f,g,h){return this.gUa(this).$3$1(e,f,g,h)}}
B.aPA.prototype={
$3$1(d,e,f,g){return B.cG1(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.ag_.prototype={}
B.G4.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aRZ(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.a7g.prototype={}
B.a0J.prototype={}
var z=a.updateTypes(["Vi(N)","Lw(N)","H<~>(c)","t<c>()","ur(c)","w1<0^,1^>(0^(){$allTransitiveDependencies!y<fF>?,argument!F?,dependencies!y<fF>?,from!k1?,isAutoDispose!z,name!c?,retry!bk?(w,F)?})<eO<1^>,F?>"])
B.cnA.prototype={
$1(d){var x=null,w=y.p
return new A.a_(D.ana,A.I(A.a([A.W(A.a([new B.L2(C.jL,"Foto","photo",x),new B.L2(D.avi,"Ficheiro","file",x),new B.L2(U.iV,"Sticker","sticker",x),new B.L2(D.av7,"GIF","gif",x)],w),C.x,C.Ei,C.q,0,x,x)],w),C.x,C.m,C.a_,0,C.w),x)},
$S:119}
B.cnB.prototype={
$1(d){return D.cbm},
$S:z+0}
B.cnC.prototype={
$1(d){return D.c8T},
$S:z+1}
B.bwP.prototype={
$0(){return A.aC(this.b,!1).b0(this.a.e)},
$S:0}
B.caE.prototype={
$0(){return A.aC(this.a,!1).b0(this.b)},
$S:0}
B.bJl.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bJm.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bA(this.b,y.P),v=A.r(w),w=new A.ap(w,w.gv(w),v.i("ap<a8.E>")),u=y.f,v=v.i("a8.E");w.p();){t=w.d
x=t==null?v.a(t):t
J.cg(s,new A.ag(A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bJn.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bJo.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bJq.prototype={
$2(d,e){var x=null,w=this.a
return A.eY(!1,x,!0,A.eu(A.T(10),A.l4(w.e[e].a,x,C.bZ,x,x,x,x),C.aH),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bJp(w,d,e),x,x,x,x,x,x,x)},
$S:450}
B.bJp.prototype={
$0(){return A.aC(this.b,!1).b0(this.a.e[this.c].b)},
$S:0}
B.aRq.prototype={
$0(){var x=y.H
return A.aC(this.b,!1).ir(A.tR(new B.aRn(this.a),null,x),x)},
$S:0}
B.aRn.prototype={
$1(d){var x=null
return A.ku(A.cuf(C.ah,x,C.v,x),C.ah,A.bF(S.cF1(C.V,A.ym(this.a.c,x,x,!1,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1190}
B.aRp.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:156}
B.aRo.prototype={
$3(d,e,f){var x=null
return A.E(x,D.ax1,C.t,C.af,x,x,x,120,x,x,x,x,x,this.a)},
$S:72}
B.aRr.prototype={
$0(){return A.xc(A.dh(this.a.c,0,null),C.pe,null)},
$S:0}
B.bsy.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.bsz.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aQ(0)
x=w.y
w.y=null
if(x!=null){w=$.Z().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.F_(x).cJ(new B.bsw(),new B.bsx(),y.H)}},
$S:0}
B.bsw.prototype={
$1(d){},
$S:95}
B.bsx.prototype={
$1(d){},
$S:13}
B.bsA.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.eN(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.P(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.P(t.h(0,"name"))
x=u==null?null:C.f.L(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.ag(v,new A.an(Date.now(),0,!1).fe(5e6)))}u.agk()},
$S:211}
B.bsB.prototype={
$1(d){return this.a.agk()},
$S:59}
B.bsv.prototype={
$2(d,e){return e.b.f8(this.a)},
$S:1192}
B.bsE.prototype={
$1(d){},
$S:231}
B.bsF.prototype={
$1(d){},
$S:13}
B.bsC.prototype={
$1(d){},
$S:231}
B.bsD.prototype={
$1(d){},
$S:13}
B.csH.prototype={
$1(d){return C.e.gN(d.split(" "))},
$S:23}
B.csb.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v]
t=C.f.L(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a2,r,C.Gy,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r)
p.push(A.i8(!1,C.V,r,r,!0,r,r,r,!0,r,D.awP,r,r,r,r,new B.csa(d,u),!1,r,r,r,r,r,s,r,t,r,F.N8,r))}return A.bn(!0,new A.a_(D.amD,A.I(A.a([D.c2a,C.aK,D.bYB,C.a4,new A.eo(1,C.bM,A.cL(p,r,r,r,r,!1,C.Y,!0),r)],q),C.I,C.m,C.a_,0,C.w),r),r,C.V,!0)},
$S:51}
B.csa.prototype={
$0(){return A.aC(this.a,!1).b0(this.b)},
$S:0}
B.aRw.prototype={
$3(d,e,f){var x=null
return A.kz(A.b_(A.E(C.S,d,C.t,x,x,C.kx,x,44,x,x,x,x,x,44),f,x),x,e)},
$S:1193}
B.aRt.prototype={
$0(){return A.aC(this.a,!1).qu()},
$S:0}
B.aRv.prototype={
$1(d){return this.a.w.$0()},
$S:6}
B.aRu.prototype={
$1(d){return D.bpo},
$S:77}
B.aRs.prototype={
$1(d){return this.a.d.$0()},
$S:6}
B.aRZ.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("G4.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.a8V.prototype,"gb8U","IM",2)
w(B,"dg1","d4F",4)
v(B.ur.prototype,"gi7","cY",3)
u(B,"dfB",1,function(){return{$allTransitiveDependencies:C.cz,argument:C.cz,dependencies:C.cz,from:C.cz,isAutoDispose:C.cz,name:C.cz,retry:C.cz}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["b90",function(d,e,f,g,h,i,j,k){return B.b90(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.b90(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.b90(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.F,[B.FY,B.z8,B.aPz,B.aPA,B.ag_])
w(A.bv,[B.cnA,B.cnB,B.cnC,B.aRn,B.aRp,B.aRo,B.bsy,B.bsw,B.bsx,B.bsA,B.bsB,B.bsE,B.bsF,B.bsC,B.bsD,B.csH,B.csb,B.aRw,B.aRv,B.aRu,B.aRs])
w(A.M,[B.L2,B.Vi,B.NM,B.aig,B.xz,B.NN,B.NP])
w(A.bI,[B.bwP,B.caE,B.bJl,B.bJm,B.bJn,B.bJo,B.bJp,B.aRq,B.aRr,B.bsz,B.csa,B.aRt,B.aRZ])
v(B.Lw,A.G)
v(B.a8V,A.a0)
w(A.cD,[B.bJq,B.bsv])
v(B.ur,A.eO)
v(B.a7g,A.k1)
v(B.G4,B.a7g)
v(B.a0J,B.G4)
x(B.a7g,B.ag_)})()
A.bx(b.typeUniverse,JSON.parse('{"Vi":{"M":[],"e":[],"f":[]},"Lw":{"G":[],"e":[],"f":[]},"L2":{"M":[],"e":[],"f":[]},"a8V":{"a0":["Lw"]},"NM":{"M":[],"e":[],"f":[]},"ur":{"eO":["t<c>"]},"aig":{"M":[],"e":[],"f":[]},"xz":{"M":[],"e":[],"f":[]},"NN":{"M":[],"e":[],"f":[]},"NP":{"M":[],"e":[],"f":[]},"G4":{"k1":[],"fF":[],"Ex":[],"kX":[]},"a0J":{"G4":["1","2","2","3","2","w1<1,2>"],"k1":[],"fF":[],"Ex":[],"kX":[],"G4.0":"1"}}'))
A.VB(b.typeUniverse,JSON.parse('{"ag_":5,"a7g":6}'))
var y=(function rtii(){var x=A.v
return{D:x("cI"),V:x("bV"),E:x("q<cy>"),L:x("q<+(c,c)>"),s:x("q<c>"),p:x("q<e>"),j:x("t<@>"),P:x("a2<c,@>"),f:x("a2<@,@>"),w:x("d8"),S:x("eO<@>"),F:x("+(c,an)"),C:x("z8"),N:x("c"),q:x("dD"),z:x("@"),r:x("w"),B:x("FY?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bXC=new A.J("Powered by GIPHY",null,I.Gw,null,null,null,null,null,null,null,null)
D.aaj=new A.dP(C.f0,null,null,D.bXC,null)
D.Iu=new B.aPz()
D.ado=new B.aPA()
D.alq=new A.X(0,0,0,20)
D.am2=new A.X(12,10,14,10)
D.amz=new A.X(16,16,16,12)
D.amC=new A.X(16,16,16,24)
D.amD=new A.X(16,16,16,8)
D.amG=new A.X(16,2,16,8)
D.ana=new A.X(20,18,20,24)
D.av7=new A.aB(57404,"HeroiconsSolid",null,!1)
D.avi=new A.aB(57436,"HeroiconsSolid",null,!1)
D.awP=new A.aY(C.h2,null,C.L,null,null,null)
D.ax1=new A.aY(C.jL,null,C.L,null,null,null)
D.aye=new A.dz(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,O.Cy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.azX=new A.lr("M12 5v14M5 12h14",20,C.E,2.4,!1,C.h8,null)
D.azZ=new A.lr("M12 19V5M5 12l7-7 7 7",18,C.v,2.4,!1,C.h8,null)
D.bov=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bFx=new A.ks("report",!0,Q.a7K,null,A.v("ks<c>"))
D.bpo=x([D.bFx],A.v("q<pU<c>>"))
D.bqB=x([],A.v("q<cJp>"))
D.bqY=x([],y.L)
D.agD=new A.O(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.A)
D.aht=new A.O(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.A)
D.aiv=new A.O(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.A)
D.ah_=new A.O(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.A)
D.bvh=x([D.agD,C.fT,D.aht,D.aiv,D.ah_],A.v("q<O>"))
D.bMR=new A.cf(1/0,null,null,null)
D.c2j=new A.J("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bNG=new A.cc(D.c2j,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)
D.c1N=new A.J("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bO5=new A.cc(D.c1N,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)
D.bYB=new A.J("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.bh,null,null,null,null,null,null,null,null)
D.c17=new A.J("Stickers",null,C.co,null,null,null,null,null,null,null,null)
D.c2a=new A.J("Que mensagem queres denunciar?",null,C.cT,null,null,null,null,null,null,null,null)
D.c8T=new B.Lw(null)
D.cbm=new B.Vi(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dte","AE",()=>D.Iu.atC(0,B.dg1(),A.v("ur"),A.v("t<c>"),y.N))})()};
(a=>{a["7iIbhybFkWuLz7QnFGXoxDWVaRw="]=a.current})($__dart_deferred_initializers__);