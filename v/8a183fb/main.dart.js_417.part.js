((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dGb(){var x,w=$.Qm(),v=J.nK(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aY(B.j.hZ(w.r_(256),16),2,"0")
return B.e.hP(v)},
aUM(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUM=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.R()
q=r.b
q===$&&A.b()
q=q.gbB().e.a
u=(q==null?null:q.r).a
t=B.f.q(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dGb()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.rf(s,d,new A.v1(!1,f)),$async$aUM)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Cv(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUM,w)},
dcw(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rM(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rM=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.c1(null,new C.cMU(),!1,d,!0,!1,null,l),$async$rM)
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
return A.d(new A.lF().Zo(85,2048,B.fx),$async$rM)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kr(),$async$rM)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fs(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUM(t,s,C.dcw(s)),$async$rM)
case 12:v=new j.Iv(f,r,s)
x=1
break
case 7:x=13
return A.d($.dgT().yc(D.bAd,null,null),$async$rM)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rM)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a3(D.c_Q)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbut(p))
if(B.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUM(t,l,C.dcw(l)),$async$rM)
case 15:v=new j.Iv(f,r,l)
x=1
break
case 8:x=16
return A.d(A.c1(null,new C.cMV(),!1,d,!0,!1,null,l),$async$rM)
case 16:n=f
v=n==null?null:new C.Iv("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.c1(null,new C.cMW(),!1,d,!0,!0,null,l),$async$rM)
case 17:m=f
v=m==null?null:new C.Iv(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rM,w)},
Iv:function Iv(d,e,f){this.a=d
this.b=e
this.c=f},
cMU:function cMU(){},
cMV:function cMV(){},
cMW:function cMW(){},
NS:function NS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJv:function bJv(d,e){this.a=d
this.b=e},
Zu:function Zu(d){this.a=d},
cyl:function cyl(d,e){this.a=d
this.b=e},
Ov:function Ov(d){this.a=d},
adW:function adW(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZv:function bZv(d){this.a=d},
bZw:function bZw(d,e){this.a=d
this.b=e},
bZx:function bZx(d){this.a=d},
bZy:function bZy(d){this.a=d},
bZA:function bZA(d){this.a=d},
bZz:function bZz(d,e,f){this.a=d
this.b=e
this.c=f},
R9:function R9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_p:function b_p(d,e){this.a=d
this.b=e},
b_m:function b_m(d){this.a=d},
b_o:function b_o(d){this.a=d},
b_n:function b_n(d){this.a=d},
b_q:function b_q(d){this.a=d},
dyo(d){return new C.w8(d,A.E(y.N,y.F),new A.ad(A.j0(0,0),0,!1))},
d_i(d){var x,w=J.a7(d)
if(w.gZ(d))return null
x=w.dt(d,new C.cSS(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w8:function w8(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bE8:function bE8(){},
bE9:function bE9(d){this.a=d},
bE6:function bE6(){},
bE7:function bE7(){},
bEa:function bEa(d,e){this.a=d
this.b=e},
bEb:function bEb(d){this.a=d},
bE5:function bE5(d){this.a=d},
bEe:function bEe(){},
bEf:function bEf(){},
bEc:function bEc(){},
bEd:function bEd(){},
cSS:function cSS(){},
a_t(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_t=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a3(D.c_f)
x=1
break}x=3
return A.d(A.c1(null,new C.cSe(A.dM(h,0,A.eF(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_t)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wz(d,e,f,u.c,u.d,g,t),$async$a_t)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_t,w)},
Bd:function Bd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSe:function cSe(d){this.a=d},
cSd:function cSd(d,e){this.a=d
this.b=e},
cUD(d,e,f,g,h,i,j,k,l){return new C.aob(g,d,k,h,i,e,j,l,f,null)},
aob:function aob(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.a=m},
b_C:function b_C(){},
b_z:function b_z(d){this.a=d},
b_B:function b_B(d){this.a=d},
b_A:function b_A(d){this.a=d},
cGo(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ah)
v=new A.b2(16,16)
u=d[x]
w.push(new A.bJ(1,B.au,A.B(t,A.y(A.a([A.h(u.a,1,B.a2,t,t,B.c2,t,t,t),B.aY,A.h(u.b,t,t,t,t,B.bb,B.a6,t,t)],s),B.w,B.h,B.l,0,B.u),B.r,t,t,new A.L(B.a7,t,t,new A.cd(v,v,v,v),t,t,B.y),t,t,t,D.av7,t,t,t),t))
B.e.n(r,w)}return A.N(r,B.w,B.h,B.l,0,t,t)},
akR(d,e,f){var x,w=null
if(f){x=A.fJ(w,w,w,w,w,w,w,w,w,B.A,w,w,w,w,B.ad,B.c7,w,w,B.d4,w)
x=A.h5(A.h(d,w,w,w,w,w,w,w,w),e,x)}else{x=A.cn(B.A,w,w,B.t,w,w,B.ad,w,w,B.d4)
x=A.bF(A.h(d,w,w,w,w,w,w,w,w),e,x)}return A.aG(x,52,w)},
cZ9(d,e,f,g){var x=null,w=y.p,v=A.a([new A.d8(1,B.b7,A.h(d,x,x,x,x,B.c2,B.a6,x,x),x)],w)
if(g)B.e.n(v,A.a([B.e7,D.PX],w))
v=A.a([new A.cp(d,76,e,!1,!0,x),B.aF,A.N(v,B.w,B.h,B.K,0,x,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aY,A.h(f,x,x,x,x,B.O,B.a6,x,x)],w))
return new A.bD(B.az,x,B.aG,B.z,A.a([new A.Q(B.jG,A.bN(A.y(v,B.w,B.h,B.l,0,B.u),x,x),x),D.bQG],w),x)},
cG7(d,e){var x,w,v=null,u=A.ax(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a1)
w.push(e[x])
B.e.n(s,w)}return A.bE(!0,new A.ee(new A.aQ(0,1/0,0,u.a.b*0.9),A.dQ(A.y(s,B.G,B.h,B.l,0,B.u),B.z,v,B.aq,v,v,B.a3),v),v,B.a_,!1)},
acd:function acd(d,e){this.c=d
this.a=e},
bPr:function bPr(d){this.a=d},
d2e(d){var x,w,v,u
for(x=new A.cg(d),w=y.E,x=new A.al(x,x.gA(0),w.i("al<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bEI[B.j.aq(v,5)]},
cUC(d,e,f,g,h,i,j){return new C.aoa(d,i,f,e,g,j,h,null)},
zJ:function zJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aoa:function aoa(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_s:function b_s(d,e){this.a=d
this.b=e},
b_t:function b_t(d,e){this.a=d
this.b=e},
b_v:function b_v(){},
b_u:function b_u(d){this.a=d},
b_r:function b_r(d,e){this.a=d
this.b=e},
Rb:function Rb(d,e){this.c=d
this.a=e},
Km:function Km(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeH:function aeH(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c7w:function c7w(d,e){this.a=d
this.b=e},
bo0:function bo0(d,e){this.a=d
this.b=e},
aYg:function aYg(){},
aYh:function aYh(){},
alQ:function alQ(){},
Iy:function Iy(){},
b06:function b06(d,e){this.a=d
this.b=e},
acc:function acc(){},
d5Q(d,e,f,g,h,i,j,k){return new C.a5m(A.dJT(C.dKA(),i,j),d,g,h,e,A.alg(e),f,i.i("@<0>").b7(j).b7(k).i("a5m<1,2,3>"))},
bjo(d,e,f,g,h,i,j,k,l,m){return new A.xT(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xT<1,2>"))},
a5m:function a5m(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,P,Q,R,S,T,F
J=c[1]
A=c[0]
B=c[2]
G=c[404]
H=c[381]
I=c[178]
K=c[432]
L=c[335]
M=c[154]
E=c[240]
N=c[187]
O=c[431]
C=a.updateHolder(c[120],C)
D=c[235]
P=c[379]
Q=c[395]
R=c[270]
S=c[182]
T=c[430]
F=c[233]
C.Iv.prototype={
gao(d){return this.c}}
C.NS.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eC(!1,w,!0,new A.Q(B.hA,A.y(A.a([A.B(x,A.b4(this.c,$.at,x,x,26),B.r,x,x,new A.L(B.a7,x,x,v,x,x,B.y),x,58,x,x,x,x,58),B.aF,A.h(this.d,x,x,x,x,B.hl,x,x,x)],y.p),B.w,B.h,B.K,0,B.u),x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bJv(this,d),x,x,x,x,x,x,x)}}
C.Zu.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bxW[x]
v=new A.b2(14,14)
s.push(A.eC(!1,new A.cd(v,v,v,v),!0,new A.Q(B.qC,A.asr(w,B.kq,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new C.cyl(d,w),u,u,u,u,u,u,u))}return new A.Q(D.atJ,A.y(A.a([D.ceY,B.R,A.SC(1,s,4,8,8,u,B.dD,!0)],t),B.H,B.h,B.K,0,B.u),u)}}
C.Ov.prototype={
P(){return new C.adW(new A.aF(B.al,$.aa()),D.m2)}}
C.adW.prototype={
ad(){this.ar()
this.Ij("")},
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
Ij(d){return this.bhZ(d)},
bhZ(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Ij=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZv(s))
v=3
m=B.f.C(d)
l=m.length===0
r=l?"trending":"search"
k=A.q(r)
q=A.E(y.N,y.z)
J.b3(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b3(q,"limit","24")
J.b3(q,"rating","pg")
l=!l
if(l)J.b3(q,"q",m)
if(l)J.b3(q,"lang","pt")
p=A.ajn("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aV8(p,null),$async$Ij)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bu.jU(0,A.jc(A.ja(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.bZw(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bZx(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bZy(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ij,w)},
u(d){var x=this,w=null,v=A.ax(d,w,y.w).w,u=A.cs(w,B.a8,!1,w,!0,B.z,w,A.cx(),x.d,w,w,w,w,w,2,D.aFJ,B.Z,!0,w,!0,w,!1,w,B.aD,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaUr(),w,!1,w,w,!1,w,!0,w,B.aq,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.ar,w,B.b2,w,B.tm,w,w),t=x.r
if(t!=null)t=A.bN(A.h(t,w,w,w,w,B.l_,B.a6,w,w),w,w)
else t=x.f?D.bZ_:N.a3h(w,B.Z,T.a9g,new C.bZA(x),x.e.length,w,w,!1)
return A.aG(new A.Q(D.atG,A.y(A.a([u,B.ac,A.a4(t,1),B.aF,D.adT],y.p),B.H,B.h,B.l,0,B.u),w),v.a.b*0.62,w)}}
C.R9.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.ax(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b2(s.c,"asset:"))return A.asr(B.f.bF(s.c,6),B.kq,120,120)
if(p==="image"||p==="gif")return A.cT(r,A.fV(A.W(16),new A.ee(new A.aQ(0,q,0,320),A.k1(s.c,new C.b_n(q),B.bK,r,new C.b_o(q),r,r),r),B.ba),B.Z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_p(s,d),r,r,r,r,r,r,!1,B.aQ)
p=A.W(16)
x=s.f
w=x?$.at:B.a7
v=A.W(16)
u=A.b4(O.Pn,x?B.t:$.at,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a2,r,r,A.aI(r,r,x?B.t:B.A,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eC(!1,p,!0,A.B(r,A.N(A.a([u,B.ag,new A.d8(1,B.b7,t,r),B.bm,A.b4(L.vE,x?B.t:B.V,r,r,18)],y.p),B.w,B.h,B.K,0,r,r),B.r,r,new A.aQ(0,q,0,1/0),new A.L(w,r,r,v,r,r,B.y),r,r,r,D.ata,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new C.b_q(s),r,r,r,r,r,r,r)},
gao(d){return this.e}}
C.w8.prototype={
d7(){var x=this,w=y.T,v=A.eT(x).H(A.cI($.ba(),new C.bE8(),y.D,w),w)
A.eT(x).YU(new C.bE9(x))
if(v==null)return B.a8
w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Mk(0,"typing:"+x.x,B.yH).bzp(new C.bEa(x,v),"typing")
w.Qg(0)
x.y=w
x.Q=A.u8(B.fS,new C.bEb(x))
return B.a8},
al_(){var x,w=this,v=w.z
v.eg(v,new C.bE5(new A.ad(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c6(v,v.r,v.e,A.u(v).i("c6<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aR(w.ga4(0))||!B.e.ea(x,J.dm_(w.ga4(0))))w.sa4(0,x)},
adr(d){var x,w=this,v=w.y,u=A.eT(w).a1(0,$.ba(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ad(Date.now(),0,!1)
if(x.cK(w.as).a<2e6)return
w.as=x
v.af2(0,"typing",A.T(["id",t,"name",d],y.N,y.z),B.Hg).cD(new C.bEe(),new C.bEf(),y.H)},
d5(d){var x=this.y,w=A.eT(this).a1(0,$.ba(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ad(A.j0(0,0),0,!1)
x.af2(0,"typing",A.T(["id",v,"stop",!0],y.N,y.z),B.Hg).cD(new C.bEc(),new C.bEd(),y.H)}}
C.Bd.prototype={}
C.aob.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cp(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.d8(1,B.b7,A.h(s.c,1,B.a2,r,r,B.ae,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.e7,D.PX],x))
w=A.a([A.N(w,B.w,B.h,B.l,0,r,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.Q(B.v9,A.B(r,A.h(v,1,r,r,r,B.hW,r,r,r),B.r,r,r,new A.L(B.cJ,r,r,u,r,r,B.y),r,r,r,B.vf,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a2,r,r,A.aI(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b3,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.N(A.a([q,B.af,A.a4(A.y(w,B.H,B.h,B.K,0,B.u),1)],x),B.w,B.h,B.l,0,r,r)
q=A.a([new A.d1(0,B.bn,B.A.cd(0.06),B.GF,14)],y.V)
w=A.ax(d,B.b4,y.w).w
v=new C.b_C().$3(K.PL,"Voltar",new C.b_z(d))
u=s.r
v=A.a([v,B.af,A.a4(u==null?t:A.aW(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Er(A.B(B.L,Q.EB,B.r,r,r,B.cg,r,44,r,r,r,r,44),r,new C.b_A(s),new C.b_B(s),r,D.bQx,"Mais op\xe7\xf5es",y.N)],x))
return A.B(r,A.y(A.a([A.N(v,B.w,B.h,B.l,0,r,r)],x),B.G,B.h,B.K,0,B.u),B.r,r,r,new A.L(B.t,r,r,B.u3,q,r,B.y),r,r,r,new A.a2(20,w.r.b+20,20,14),r,r,r)},
gao(d){return this.c}}
C.acd.prototype={
u(d){var x=null
return A.b8(x,!0,x,A.cT(x,A.B(x,B.lX,B.r,x,x,new A.L(B.A,x,this.c?A.bB(B.t,2):x,x,x,x,B.aw),x,44,x,x,x,x,44),B.Z,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPr(d),x,x,x,x,x,x,!1,B.aQ),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zJ.prototype={
u(d){var x=null,w=A.ax(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.A:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.Q(E.Nw,A.h(v,x,x,x,x,A.aI(x,x,C.d2e(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aI(x,x,s?B.t:B.A,x,x,x,x,x,x,x,x,15,x,x,B.bq,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ee(new A.aQ(0,w.a.a*0.78,0,1/0),A.B(x,A.y(o,B.H,B.h,B.K,0,B.u),B.r,x,x,new A.L(r,x,x,new A.cd(F.yA,F.yA,new A.b2(q,q),new A.b2(p,p)),x,x,B.y),x,x,x,new A.a2(14,t,14,10),x,x,x),x)}}
C.aoa.prototype={
aiP(d){if(!A.uf(this.c.a.a)){d.O(y.q).f.a3(D.c_u)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aW(A.B(B.L,B.PO,B.r,t,t,B.cg,t,44,t,t,t,t,44),u.e,t),B.ag],s))
x=A.W(24)
r.push(A.a4(A.B(B.bg,A.cs(t,B.a8,!1,t,!0,B.z,t,A.cx(),u.c,t,t,t,t,t,2,A.iI(t,B.bw,t,B.a_,t,t,t,t,!0,B.bw,t,t,t,t,t,t,!1,t,t,t,t,B.bw,t,t,t,t,t,t,t,t,B.mC,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.Z,!0,t,!0,t,!1,t,B.aD,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_s(u,d),t,!1,t,t,!1,t,!0,t,B.aq,t,t,t,t,t,t,t,t,t,t,t,B.ff,!0,B.ar,t,B.b2,t,B.aag,t,t),B.r,t,t,new A.L(B.a7,t,t,x,t,t,B.y),t,48,t,B.bU,t,t,t),1))
r.push(B.ag)
r.push(A.b8(t,!0,t,A.aW(A.B(B.L,D.aEm,B.r,t,t,B.cg,t,44,t,t,t,t,44),new C.b_t(u,d),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.N(r,B.w,B.h,B.l,0,t,t)
r=A.a([new A.d1(0,B.bn,B.A.cd(0.12),B.kO,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aG(A.Tw(B.z,new C.b_u(u),v,t,t,B.bx,new C.b_v()),34,t),B.ac],s))
x.push(w)
return A.B(t,A.bE(!0,new A.Q(B.hy,A.y(x,B.G,B.h,B.K,0,B.u),t),t,D.asK,!1),B.r,t,t,new A.L(B.t,t,t,B.pI,r,t,B.y),t,t,t,t,t,t,t)}}
C.Rb.prototype={
u(d){var x=null,w=this.c
return A.cUl(B.fl,w==null?D.bYv:new A.Q(D.atN,A.bN(A.h(w,x,x,x,x,B.kg,x,x,x),x,x),x),B.cv,B.aE)}}
C.Km.prototype={
P(){return new C.aeH()}}
C.aeH.prototype={
ad(){var x,w=this
w.ar()
x=w.a
w.e=x.d
x.c.an(0,w.ga1W())},
ba(d){var x,w,v=this
v.bz(d)
x=d.c
if(x!==v.a.c){w=v.ga1W()
x.a_(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga1W())
this.a6()},
aUu(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbC(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c7w(w,x))},
b7C(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.ax(x,null,y.w).w
w=this.a
if(x.ax)w.c.hQ(0)
else w.c.iJ(0,B.eT,G.CY)},
u(d){var x,w,v,u=this,t=null,s=B.j.ag(u.a.d-u.e,0,99),r=y.p,q=A.a([A.j5(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.B(B.L,D.aEf,B.r,t,t,D.agy,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bB(B.A,2)
r.push(A.ce(t,A.B(B.L,A.h(""+s,t,t,t,t,B.hl,t,t,t),B.r,t,B.lp,new A.L(B.t,t,v,x,t,t,B.y),t,20,t,B.Dm,t,t,t),t,t,t,-6,-6,t))}q.push(A.ce(16,A.b8(t,!0,t,A.aW(new A.bD(B.az,t,B.aG,B.r,r,t),u.gb7B(),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bD(B.az,t,B.aG,B.z,q,t)}}
C.bo0.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aYg.prototype={
$1(d){return A.mV(d,null,!0,null,null,y.S,y.z)},
gXp(d){return D.ahX},
ayY(d,e,f,g,h){return this.gXp(this).$3$1(e,f,g,h)}}
C.aYh.prototype={
$3$1(d,e,f,g){return C.d5Q(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alQ.prototype={}
C.Iy.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b06(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.acc.prototype={}
C.a5m.prototype={}
var z=a.updateTypes(["~()","Zu(O)","Ov(O)","F<~>(c)","t<c>()","w8(c)","xT<0^,1^>(0^(){$allTransitiveDependencies!A<h6>?,argument!K?,dependencies!A<h6>?,from!kL?,isAutoDispose!x,name!c?,retry!bp?(v,K)?})<fd<1^>,K?>"])
C.cMU.prototype={
$1(d){var x=null,w=y.p
return new A.Q(D.auc,A.y(A.a([A.N(A.a([new C.NS(B.jX,"Foto","photo",x),new C.NS(D.aCM,"Ficheiro","file",x),new C.NS(R.jU,"Sticker","sticker",x),new C.NS(D.aCE,"GIF","gif",x)],w),B.w,B.Gn,B.l,0,x,x)],w),B.w,B.h,B.K,0,B.u),x)},
$S:74}
C.cMV.prototype={
$1(d){return D.cqE},
$S:z+1}
C.cMW.prototype={
$1(d){return D.cnT},
$S:z+2}
C.bJv.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e)},
$S:0}
C.cyl.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.bZv.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZw.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bh(this.b,y.P),v=A.u(w),w=new A.al(w,w.gA(w),v.i("al<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bu(s,new A.a1(A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZx.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZy.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZA.prototype={
$2(d,e){var x=null,w=this.a
return A.eC(!1,x,!0,A.fV(A.W(10),A.k1(w.e[e].a,x,B.bK,x,x,x,x),B.ba),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bZz(w,d,e),x,x,x,x,x,x,x)},
$S:346}
C.bZz.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e[this.c].b)},
$S:0}
C.b_p.prototype={
$0(){var x=y.H
return A.am(this.b,!1).hD(A.ty(new C.b_m(this.a),null,x),x)},
$S:0}
C.b_m.prototype={
$1(d){var x=null
return A.kt(A.cUm(B.ao,x,B.t,x),B.ao,A.bN(I.cVK(B.a_,A.pn(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1334}
C.b_o.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1335}
C.b_n.prototype={
$3(d,e,f){var x=null
return A.B(x,D.aEu,B.r,B.a7,x,x,x,120,x,x,x,x,this.a)},
$S:71}
C.b_q.prototype={
$0(){return A.ze(A.dw(this.a.c,0,null),B.qT,null)},
$S:0}
C.bE8.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:19}
C.bE9.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yi(x).cD(new C.bE6(),new C.bE7(),y.H)}},
$S:0}
C.bE6.prototype={
$1(d){},
$S:118}
C.bE7.prototype={
$1(d){},
$S:11}
C.bEa.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e5(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:B.f.C(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.L(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a1(v,new A.ad(Date.now(),0,!1).e6(5e6)))}u.al_()},
$S:227}
C.bEb.prototype={
$1(d){return this.a.al_()},
$S:67}
C.bE5.prototype={
$2(d,e){return e.b.eA(this.a)},
$S:1336}
C.bEe.prototype={
$1(d){},
$S:256}
C.bEf.prototype={
$1(d){},
$S:11}
C.bEc.prototype={
$1(d){},
$S:256}
C.bEd.prototype={
$1(d){},
$S:11}
C.cSS.prototype={
$1(d){return B.e.gK(d.split(" "))},
$S:24}
C.cSe.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.C(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a2,r,r,B.IZ,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jl(!1,B.a_,r,r,!0,r,r,r,!0,r,D.aEe,r,r,r,r,new C.cSd(d,u),!1,r,r,r,r,r,s,r,t,r,E.PW,r))}return A.bE(!0,new A.Q(D.atK,A.y(A.a([D.cg2,B.av,D.caG,B.S,new A.d8(1,B.b7,A.d0(p,r,r,r,r,!1,B.a3,!0),r)],q),B.H,B.h,B.K,0,B.u),r),r,B.a_,!0)},
$S:47}
C.cSd.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.b_C.prototype={
$3(d,e,f){var x=null
return A.kV(A.aW(A.B(B.L,d,B.r,x,x,B.cg,x,44,x,x,x,x,44),f,x),x,e)},
$S:1337}
C.b_z.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
C.b_B.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_A.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bo_(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bQs)
return r},
$S:55}
C.bPr.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
C.b_s.prototype={
$1(d){return this.a.aiP(this.b)},
$S:3}
C.b_t.prototype={
$0(){return this.a.aiP(this.b)},
$S:0}
C.b_v.prototype={
$2(d,e){return B.ag},
$S:105}
C.b_u.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bB(B.A,1.5)
return A.aW(A.B(B.L,A.h(w.w[e],x,x,x,x,B.dP,x,x,x),B.r,x,x,new A.L(B.t,x,u,v,x,x,B.y),x,34,x,B.cO,x,x,x),new C.b_r(w,e),x)},
$S:183}
C.b_r.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c7w.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b06.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Iy.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adW.prototype,"gaUr","Ij",3)
w(C,"dLx","dyo",5)
v(C.w8.prototype,"giM","d7",4)
var t
v(t=C.aeH.prototype,"ga1W","aUu",0)
v(t,"gb7B","b7C",0)
u(C,"dKA",1,function(){return{$allTransitiveDependencies:B.cM,argument:B.cM,dependencies:B.cM,from:B.cM,isAutoDispose:B.cM,name:B.cM,retry:B.cM}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bjo",function(d,e,f,g,h,i,j,k){return C.bjo(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjo(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjo(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.K,[C.Iv,C.Bd,C.aYg,C.aYh,C.alQ])
w(A.by,[C.cMU,C.cMV,C.cMW,C.b_m,C.b_o,C.b_n,C.bE8,C.bE6,C.bE7,C.bEa,C.bEb,C.bEe,C.bEf,C.bEc,C.bEd,C.cSS,C.cSe,C.b_C,C.b_B,C.b_A,C.b_s])
w(A.I,[C.NS,C.Zu,C.R9,C.aob,C.acd,C.zJ,C.aoa,C.Rb])
w(A.bR,[C.bJv,C.cyl,C.bZv,C.bZw,C.bZx,C.bZy,C.bZz,C.b_p,C.b_q,C.bE9,C.cSd,C.b_z,C.bPr,C.b_t,C.b_r,C.c7w,C.b06])
w(A.G,[C.Ov,C.Km])
w(A.Y,[C.adW,C.aeH])
w(A.cN,[C.bZA,C.bE5,C.b_v,C.b_u])
v(C.w8,A.fd)
v(C.bo0,A.f8)
v(C.acc,A.kL)
v(C.Iy,C.acc)
v(C.a5m,C.Iy)
x(C.acc,C.alQ)})()
A.bq(b.typeUniverse,JSON.parse('{"Zu":{"I":[],"e":[],"f":[]},"Ov":{"G":[],"e":[],"f":[]},"NS":{"I":[],"e":[],"f":[]},"adW":{"Y":["Ov"]},"R9":{"I":[],"e":[],"f":[]},"w8":{"fd":["t<c>"]},"aob":{"I":[],"e":[],"f":[]},"acd":{"I":[],"e":[],"f":[]},"Km":{"G":[],"e":[],"f":[]},"zJ":{"I":[],"e":[],"f":[]},"aoa":{"I":[],"e":[],"f":[]},"Rb":{"I":[],"e":[],"f":[]},"aeH":{"Y":["Km"]},"Iy":{"kL":[],"h6":[],"H8":[],"lH":[]},"a5m":{"Iy":["1","2","2","3","2","xT<1,2>"],"kL":[],"h6":[],"H8":[],"lH":[],"Iy.0":"1"}}'))
A.PJ(b.typeUniverse,JSON.parse('{"alQ":5,"acc":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),E:x("cg"),V:x("r<d1>"),X:x("r<pH<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("df"),S:x("fd<@>"),F:x("+(c,ad)"),C:x("Bd"),N:x("c"),q:x("dn"),z:x("@"),r:x("v"),B:x("Iv?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c9j=new A.D("Powered by GIPHY",null,H.IX,null,null,null,null,null,null,null,null)
D.adT=new A.cZ(B.e0,null,null,D.c9j,null)
D.agy=new A.L(B.A,null,null,null,B.ie,null,B.aw)
D.L6=new C.aYg()
D.ahX=new C.aYh()
D.asK=new A.a2(0,0,0,24)
D.ata=new A.a2(12,10,14,10)
D.atG=new A.a2(16,16,16,12)
D.atJ=new A.a2(16,16,16,24)
D.atK=new A.a2(16,16,16,8)
D.atN=new A.a2(16,2,16,8)
D.auc=new A.a2(20,18,20,24)
D.av7=new A.a2(8,12,8,12)
D.aCE=new A.aV(57404,"HeroiconsSolid",null,!1)
D.aCM=new A.aV(57436,"HeroiconsSolid",null,!1)
D.PX=new A.b7(B.i9,18,B.bp,null,"Verificado",null)
D.aEe=new A.b7(B.fY,null,B.V,null,null,null)
D.aCq=new A.aV(57347,"HeroiconsSolid",null,!1)
D.aEf=new A.b7(D.aCq,20,B.t,null,null,null)
D.aEm=new A.b7(B.lU,20,B.t,null,null,null)
D.aEu=new A.b7(B.jX,null,B.V,null,null,null)
D.aDv=new A.b7(B.vJ,null,null,null,null,null)
D.aFJ=new A.dF(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aDv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxW=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bAd=x([],A.w("r<d9u>"))
D.bAg=x([],A.w("r<+(c,~())>"))
D.m2=x([],y.L)
D.anp=new A.X(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.aod=new A.X(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.apg=new A.X(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.anP=new A.X(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bEI=x([D.anp,B.d_,D.aod,D.apg,D.anP],A.w("r<X>"))
D.bQs=new A.jM("report",!0,P.abw,null,A.w("jM<c>"))
D.bQx=new C.bo0(1,"under")
D.cmT=new C.acd(!1,null)
D.bQG=new A.eM(null,0,0,null,null,null,D.cmT,null)
D.bYv=new A.c_(1/0,null,null,null)
D.bZ_=new S.yo(12,3,null)
D.cge=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.c_f=new A.bG(D.cge,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.z,null)
D.chn=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.c_u=new A.bG(D.chn,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.z,null)
D.cfE=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.c_Q=new A.bG(D.cfE,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.z,null)
D.caG=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.O,null,null,null,null,null,null,null,null)
D.ceY=new A.D("Stickers",null,B.ae,null,null,null,null,null,null,null,null)
D.cg2=new A.D("Que mensagem queres denunciar?",null,B.hh,null,null,null,null,null,null,null,null)
D.cnT=new C.Ov(null)
D.cqE=new C.Zu(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZ3","CP",()=>D.L6.ayY(0,C.dLx(),A.w("w8"),A.w("t<c>"),y.N))})()};
(a=>{a["pLpEuE3zATbtVfHcwgsGp07zu1Y="]=a.current})($__dart_deferred_initializers__);