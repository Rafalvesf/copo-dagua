((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,E,L,M,N,B={
dBK(){var x,w=$.PZ(),v=J.nE(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aW(C.i.hZ(w.r1(256),16),2,"0")
return C.e.hR(v)},
aTJ(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aTJ=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.T()
q=r.b
q===$&&A.b()
q=q.gbE().e.a
u=(q==null?null:q.r).a
t=C.f.p(e,".")?C.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dBK()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.rh(s,d,new A.uX(!1,f)),$async$aTJ)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Co(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTJ,w)},
d8o(d){var x,w=C.e.ga5(d.split(".")).toLowerCase()
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
rC(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rC=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.cn(null,new B.cJ4(),!1,d,!0,!1,null,l),$async$rC)
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
return A.d(new A.lD().YW(85,2048,C.fm),$async$rC)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kr(),$async$rC)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.fs(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aTJ(t,s,B.d8o(s)),$async$rC)
case 12:v=new j.Ij(f,r,s)
x=1
break
case 7:x=13
return A.d($.dcB().y9(D.bzl,null,null),$async$rC)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rC)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.bZp)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.c4(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbte(p))
if(C.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aTJ(t,l,B.d8o(l)),$async$rC)
case 15:v=new j.Ij(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cn(null,new B.cJ5(),!1,d,!0,!1,null,l),$async$rC)
case 16:n=f
v=n==null?null:new B.Ij("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cn(null,new B.cJ6(),!1,d,!0,!0,null,l),$async$rC)
case 17:m=f
v=m==null?null:new B.Ij(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rC,w)},
Ij:function Ij(d,e,f){this.a=d
this.b=e
this.c=f},
cJ4:function cJ4(){},
cJ5:function cJ5(){},
cJ6:function cJ6(){},
NG:function NG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bI3:function bI3(d,e){this.a=d
this.b=e},
Z0:function Z0(d){this.a=d},
cuK:function cuK(d,e){this.a=d
this.b=e},
Of:function Of(d){this.a=d},
adl:function adl(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bXo:function bXo(d){this.a=d},
bXp:function bXp(d,e){this.a=d
this.b=e},
bXq:function bXq(d){this.a=d},
bXr:function bXr(d){this.a=d},
bXt:function bXt(d){this.a=d},
bXs:function bXs(d,e,f){this.a=d
this.b=e
this.c=f},
QL:function QL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZk:function aZk(d,e){this.a=d
this.b=e},
aZh:function aZh(d){this.a=d},
aZj:function aZj(d){this.a=d},
aZi:function aZi(d){this.a=d},
aZl:function aZl(d){this.a=d},
du0(d){return new B.w2(d,A.A(y.N,y.F),new A.ae(A.iX(0,0),0,!1))},
cWg(d){var x,w=J.a6(d)
if(w.gY(d))return null
x=w.dz(d,new B.cOQ(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w2:function w2(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bCU:function bCU(){},
bCV:function bCV(d){this.a=d},
bCS:function bCS(){},
bCT:function bCT(){},
bCW:function bCW(d,e){this.a=d
this.b=e},
bCX:function bCX(d){this.a=d},
bCR:function bCR(d){this.a=d},
bD_:function bD_(){},
bD0:function bD0(){},
bCY:function bCY(){},
bCZ:function bCZ(){},
cOQ:function cOQ(){},
a__(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a__=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.bYR)
x=1
break}x=3
return A.d(A.cn(null,new B.cOc(A.e3(h,0,A.eT(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a__)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(K.wq(d,e,f,u.c,u.d,g,t),$async$a__)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a__,w)},
B9:function B9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cOc:function cOc(d){this.a=d},
cOb:function cOb(d,e){this.a=d
this.b=e},
cQA(d,e,f,g,h,i,j){return new B.ann(f,d,i,j,g,h,e,null)},
ann:function ann(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZr:function aZr(){},
aZo:function aZo(d){this.a=d},
aZq:function aZq(d){this.a=d},
aZp:function aZp(){},
cZb(d){var x,w,v,u
for(x=new A.cb(d),w=y.V,x=new A.ak(x,x.gA(0),w.i("ak<U.E>")),w=w.i("U.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDP[C.i.ar(v,5)]},
zC:function zC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
QM:function QM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aZm:function aZm(d,e){this.a=d
this.b=e},
aZn:function aZn(d,e){this.a=d
this.b=e},
QO:function QO(d,e){this.c=d
this.a=e},
bmP:function bmP(d,e){this.a=d
this.b=e},
aXb:function aXb(){},
aXc:function aXc(){},
al2:function al2(){},
Im:function Im(){},
aZV:function aZV(d,e){this.a=d
this.b=e},
abD:function abD(){},
d1N(d,e,f,g,h,i,j,k){return new B.a4Q(A.dFt(B.dGa(),i,j),d,g,h,e,A.akt(e),f,i.i("@<0>").b6(j).b6(k).i("a4Q<1,2,3>"))},
bid(d,e,f,g,h,i,j,k,l,m){return new A.xK(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("xK<1,2>"))},
a4Q:function a4Q(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,O,P,Q,R,S,T,F
J=c[1]
A=c[0]
C=c[2]
G=c[374]
H=c[172]
I=c[326]
K=c[152]
E=c[229]
L=c[264]
M=c[180]
N=c[421]
B=a.updateHolder(c[117],B)
D=c[238]
O=c[372]
P=c[387]
Q=c[399]
R=c[246]
S=c[259]
T=c[420]
F=c[334]
B.Ij.prototype={
gap(d){return this.c}}
B.NG.prototype={
u(d){var x=null,w=A.a1(18),v=A.a1(18)
return A.eJ(!1,w,!0,new A.R(C.hr,A.C(A.a([A.E(x,A.b2(this.c,$.ap,x,x,26),C.r,x,x,new A.O(C.ac,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aE,A.i(this.d,x,x,x,x,C.j4,x,x,x)],y.p),C.w,C.j,C.L,0,C.v),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bI3(this,d),x,x,x,x,x,x,x)}}
B.Z0.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bx2[x]
v=new A.b4(14,14)
s.push(A.eJ(!1,new A.ce(v,v,v,v),!0,new A.R(C.qi,A.arB(w,C.ke,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cuK(d,w),u,u,u,u,u,u,u))}return new A.R(D.at3,A.C(A.a([D.cdb,C.P,A.Sh(1,s,4,8,8,u,C.dW,!0)],t),C.H,C.j,C.L,0,C.v),u)}}
B.Of.prototype={
P(){return new B.adl(new A.aI(C.an,$.ac()),D.byZ)}}
B.adl.prototype={
al(){this.aH()
this.Ia("")},
m(){var x=this.d
x.Z$=$.ac()
x.X$=0
this.a7()},
Ia(d){return this.bgN(d)},
bgN(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Ia=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bXo(s))
v=3
m=C.f.D(d)
l=m.length===0
r=l?"trending":"search"
k=A.q(r)
q=A.A(y.N,y.z)
J.b6(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b6(q,"limit","24")
J.b6(q,"rating","pg")
l=!l
if(l)J.b6(q,"q",m)
if(l)J.b6(q,"lang","pt")
p=A.aiE("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aU5(p,null),$async$Ia)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bp.jU(0,A.j9(A.j7(q.e)).bI(0,q.w),null)),"data"))
s.q(new B.bXp(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bXq(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bXr(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ia,w)},
u(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cN(w,C.a9,!1,w,!0,C.z,w,A.cQ(),x.d,w,w,w,w,w,2,D.aF1,C.a2,!0,w,!0,w,!1,w,C.aI,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTF(),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.at,w,C.b8,w,C.t2,w,w),t=x.r
if(t!=null)t=A.bN(A.i(t,w,w,w,w,C.k2,C.a5,w,w),w,w)
else t=x.f?C.cX:M.a2L(w,C.a2,T.a8H,new B.bXt(x),x.e.length,w,w,!1)
return A.aL(new A.R(D.at0,A.C(A.a([u,C.aa,A.a7(t,1),C.aE,D.adg],y.p),C.H,C.j,C.m,0,C.v),w),v.a.b*0.62,w)}}
B.QL.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b4(s.c,"asset:"))return A.arB(C.f.bD(s.c,6),C.ke,120,120)
if(p==="image"||p==="gif")return A.dP(r,A.fX(A.a1(16),new A.ez(new A.aP(0,q,0,320),A.ks(s.c,new B.aZi(q),C.bG,r,new B.aZj(q),r,r),r),C.b0),C.a2,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aZk(s,d),r,r,r,r,r,r,!1,C.bd)
p=A.a1(16)
x=s.f
w=x?$.ap:C.ac
v=A.a1(16)
u=A.b2(N.OQ,x?C.t:$.ap,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a0,r,r,A.aG(r,r,x?C.t:C.A,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eJ(!1,p,!0,A.E(r,A.Q(A.a([u,C.al,new A.dL(1,C.bi,t,r),C.bq,A.b2(I.vf,x?C.t:C.S,r,r,18)],y.p),C.w,C.j,C.L,0,r,r),C.r,r,new A.aP(0,q,0,1/0),new A.O(w,r,r,v,r,r,C.y),r,r,r,D.asu,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aZl(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
B.w2.prototype={
d4(){var x=this,w=y.T,v=A.eP(x).H(A.cv($.b8(),new B.bCU(),y.D,w),w)
A.eP(x).Yr(new B.bCV(x))
if(v==null)return C.a9
w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.M3(0,"typing:"+x.x,C.yg).bya(new B.bCW(x,v),"typing")
w.Q2(0)
x.y=w
x.Q=A.w1(C.fN,new B.bCX(x))
return C.a9},
akj(){var x,w=this,v=w.z
v.ed(v,new B.bCR(new A.ae(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cd(v,v.r,v.e,A.u(v).i("cd<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aT(w.ga2(0))||!C.e.e9(x,J.dhG(w.ga2(0))))w.sa2(0,x)},
acJ(d){var x,w=this,v=w.y,u=A.eP(w).a1(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ae(Date.now(),0,!1)
if(x.cV(w.as).a<2e6)return
w.as=x
v.ael(0,"typing",A.S(["id",t,"name",d],y.N,y.z),C.GL).cC(new B.bD_(),new B.bD0(),y.H)},
d2(d){var x=this.y,w=A.eP(this).a1(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ae(A.iX(0,0),0,!1)
x.ael(0,"typing",A.S(["id",v,"stop",!0],y.N,y.z),C.GL).cC(new B.bCY(),new B.bCZ(),y.H)}}
B.B9.prototype={}
B.ann.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cF(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a0,r,r,L.Is,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a0,r,r,A.aG(r,r,s.f?C.e8:C.S,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.Q(A.a([q,C.ar,A.a7(A.C(w,C.H,C.j,C.L,0,C.v),1)],x),C.w,C.j,C.m,0,r,r)
q=A.a([new A.cY(0,C.bk,C.A.cd(0.06),C.Gc,14)],y.E)
w=A.aw(d,C.b5,y.w).w
v=new B.aZr().$3(C.lH,"Voltar",new B.aZo(d))
t=s.r
v=A.a([v,C.ar,A.a7(t==null?u:A.aU(u,t,r),1)],x)
C.e.n(v,A.a([C.al,A.Ef(A.E(C.K,P.Ec,C.r,r,r,C.cG,r,44,r,r,r,r,44),r,new B.aZp(),new B.aZq(s),r,D.bPG,"Mais op\xe7\xf5es",y.N)],x))
return A.E(r,A.C(A.a([A.Q(v,C.w,C.j,C.m,0,r,r)],x),C.J,C.j,C.L,0,C.v),C.r,r,r,new A.O(C.t,r,r,r,q,r,C.y),r,r,r,new A.a2(16,w.r.b+10,16,12),r,r,r)},
gap(d){return this.c}}
B.zC.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.R(E.N1,A.i(v,x,x,x,x,A.aG(x,x,B.cZb(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,x,A.aG(x,x,s?C.t:C.A,x,x,x,x,x,x,x,x,15,x,x,C.bh,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ez(new A.aP(0,w.a.a*0.78,0,1/0),A.E(x,A.C(o,C.H,C.j,C.L,0,C.v),C.r,x,x,new A.O(r,x,x,new A.ce(F.y9,F.y9,new A.b4(q,q),new A.b4(p,p)),x,x,C.y),x,x,x,new A.a2(14,t,14,10),x,x,x),x)}}
B.QM.prototype={
ai6(d){if(!A.u8(this.c.a.a)){d.O(y.q).f.a4(D.bZ5)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.n(u,A.a([A.aU(A.E(C.K,C.Ph,C.r,w,w,C.cG,w,44,w,w,w,w,44),x.e,w),C.al],v))
v=A.a1(999)
u.push(A.a7(A.E(C.bm,A.cN(w,C.a9,!1,w,!0,C.z,w,A.cQ(),x.c,w,w,w,w,w,2,A.jg(w,C.ca,w,C.a_,w,w,w,w,!0,C.ca,w,w,w,w,w,w,!1,w,w,w,w,C.ca,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a2,!0,w,!0,w,!1,w,C.aI,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aZm(x,d),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,C.ha,!0,C.at,w,C.b8,w,C.a9F,w,w),C.r,w,w,new A.O(C.ac,w,w,v,w,w,C.y),w,44,w,C.bL,w,w,w),1))
u.push(C.al)
u.push(A.aU(A.E(C.K,D.aI7,C.r,w,w,C.cG,w,44,w,w,w,w,44),new B.aZn(x,d),w))
return A.E(w,A.bD(!0,new A.R(R.Ni,A.Q(u,C.w,C.j,C.m,0,w,w),w),w,Q.N2,!1),C.r,C.t,w,w,w,w,w,w,w,w,w)}}
B.QO.prototype={
u(d){var x=null,w=this.c
return A.cQi(C.fD,w==null?D.bXj:new A.R(D.at7,A.bN(A.i(w,x,x,x,x,C.hM,x,x,x),x,x),x),C.cl,C.aD)}}
B.bmP.prototype={
I(){return"PopupMenuPosition."+this.b}}
B.aXb.prototype={
$1(d){return A.mS(d,null,!0,null,null,y.S,y.z)},
gWZ(d){return D.ahe},
ayg(d,e,f,g,h){return this.gWZ(this).$3$1(e,f,g,h)}}
B.aXc.prototype={
$3$1(d,e,f,g){return B.d1N(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.al2.prototype={}
B.Im.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aZV(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.abD.prototype={}
B.a4Q.prototype={}
var z=a.updateTypes(["Z0(N)","Of(N)","F<~>(c)","t<c>()","w2(c)","xK<0^,1^>(0^(){$allTransitiveDependencies!z<h2>?,argument!H?,dependencies!z<h2>?,from!kG?,isAutoDispose!y,name!c?,retry!bo?(v,H)?})<fb<1^>,H?>"])
B.cJ4.prototype={
$1(d){var x=null,w=y.p
return new A.R(D.atA,A.C(A.a([A.Q(A.a([new B.NG(C.jK,"Foto","photo",x),new B.NG(D.aC7,"Ficheiro","file",x),new B.NG(S.jH,"Sticker","sticker",x),new B.NG(D.aC0,"GIF","gif",x)],w),C.w,C.FT,C.m,0,x,x)],w),C.w,C.j,C.L,0,C.v),x)},
$S:68}
B.cJ5.prototype={
$1(d){return D.coC},
$S:z+0}
B.cJ6.prototype={
$1(d){return D.clS},
$S:z+1}
B.bI3.prototype={
$0(){return A.aq(this.b,!1).aj(this.a.e)},
$S:0}
B.cuK.prototype={
$0(){return A.aq(this.a,!1).aj(this.b)},
$S:0}
B.bXo.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bXp.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bk(this.b,y.P),v=A.u(w),w=new A.ak(w,w.gA(w),v.i("ak<U.E>")),u=y.f,v=v.i("U.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bw(s,new A.a3(A.a0(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a0(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bXq.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bXr.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bXt.prototype={
$2(d,e){var x=null,w=this.a
return A.eJ(!1,x,!0,A.fX(A.a1(10),A.ks(w.e[e].a,x,C.bG,x,x,x,x),C.b0),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bXs(w,d,e),x,x,x,x,x,x,x)},
$S:491}
B.bXs.prototype={
$0(){return A.aq(this.b,!1).aj(this.a.e[this.c].b)},
$S:0}
B.aZk.prototype={
$0(){var x=y.H
return A.aq(this.b,!1).ie(A.to(new B.aZh(this.a),null,x),x)},
$S:0}
B.aZh.prototype={
$1(d){var x=null
return A.kq(A.cQk(C.ak,x,C.t,x),C.ak,A.bN(H.cRK(C.a_,A.qG(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1338}
B.aZj.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:170}
B.aZi.prototype={
$3(d,e,f){var x=null
return A.E(x,D.aDO,C.r,C.ac,x,x,x,120,x,x,x,x,this.a)},
$S:63}
B.aZl.prototype={
$0(){return A.z5(A.dr(this.a.c,0,null),C.qA,null)},
$S:0}
B.bCU.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
B.bCV.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yf(x).cC(new B.bCS(),new B.bCT(),y.H)}},
$S:0}
B.bCS.prototype={
$1(d){},
$S:120}
B.bCT.prototype={
$1(d){},
$S:14}
B.bCW.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e6(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.B(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.B(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a3(v,new A.ae(Date.now(),0,!1).ee(5e6)))}u.akj()},
$S:269}
B.bCX.prototype={
$1(d){return this.a.akj()},
$S:73}
B.bCR.prototype={
$2(d,e){return e.b.eR(this.a)},
$S:1340}
B.bD_.prototype={
$1(d){},
$S:239}
B.bD0.prototype={
$1(d){},
$S:14}
B.bCY.prototype={
$1(d){},
$S:239}
B.bCZ.prototype={
$1(d){},
$S:14}
B.cOQ.prototype={
$1(d){return C.e.gM(d.split(" "))},
$S:24}
B.cOc.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a0,r,r,C.Ir,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r,r)
p.push(A.j_(!1,C.a_,r,r,!0,r,r,r,!0,r,D.aDC,r,r,r,r,new B.cOb(d,u),!1,r,r,r,r,r,s,r,t,r,E.Pp,r))}return A.bD(!0,new A.R(D.at4,A.C(A.a([D.cee,C.as,D.c97,C.Y,new A.dL(1,C.bi,A.d_(p,r,r,r,r,!1,C.a1,!0),r)],q),C.H,C.j,C.L,0,C.v),r),r,C.a_,!0)},
$S:43}
B.cOb.prototype={
$0(){return A.aq(this.a,!1).aj(this.b)},
$S:0}
B.aZr.prototype={
$3(d,e,f){var x=null
return A.kR(A.aU(A.E(C.K,d,C.r,x,x,C.cG,x,44,x,x,x,x,44),f,x),x,e)},
$S:1341}
B.aZo.prototype={
$0(){return A.aq(this.a,!1).iz()},
$S:0}
B.aZq.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aZp.prototype={
$1(d){return D.bxX},
$S:55}
B.aZm.prototype={
$1(d){return this.a.ai6(this.b)},
$S:3}
B.aZn.prototype={
$0(){return this.a.ai6(this.b)},
$S:0}
B.aZV.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Im.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.adl.prototype,"gaTF","Ia",2)
w(B,"dH6","du0",4)
v(B.w2.prototype,"giJ","d4",3)
u(B,"dGa",1,function(){return{$allTransitiveDependencies:C.cH,argument:C.cH,dependencies:C.cH,from:C.cH,isAutoDispose:C.cH,name:C.cH,retry:C.cH}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bid",function(d,e,f,g,h,i,j,k){return B.bid(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bid(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bid(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.H,[B.Ij,B.B9,B.aXb,B.aXc,B.al2])
w(A.bx,[B.cJ4,B.cJ5,B.cJ6,B.aZh,B.aZj,B.aZi,B.bCU,B.bCS,B.bCT,B.bCW,B.bCX,B.bD_,B.bD0,B.bCY,B.bCZ,B.cOQ,B.cOc,B.aZr,B.aZq,B.aZp,B.aZm])
w(A.L,[B.NG,B.Z0,B.QL,B.ann,B.zC,B.QM,B.QO])
w(A.bR,[B.bI3,B.cuK,B.bXo,B.bXp,B.bXq,B.bXr,B.bXs,B.aZk,B.aZl,B.bCV,B.cOb,B.aZo,B.aZn,B.aZV])
v(B.Of,A.J)
v(B.adl,A.a_)
w(A.cR,[B.bXt,B.bCR])
v(B.w2,A.fb)
v(B.bmP,A.fr)
v(B.abD,A.kG)
v(B.Im,B.abD)
v(B.a4Q,B.Im)
x(B.abD,B.al2)})()
A.br(b.typeUniverse,JSON.parse('{"Z0":{"L":[],"e":[],"f":[]},"Of":{"J":[],"e":[],"f":[]},"NG":{"L":[],"e":[],"f":[]},"adl":{"a_":["Of"]},"QL":{"L":[],"e":[],"f":[]},"w2":{"fb":["t<c>"]},"ann":{"L":[],"e":[],"f":[]},"zC":{"L":[],"e":[],"f":[]},"QM":{"L":[],"e":[],"f":[]},"QO":{"L":[],"e":[],"f":[]},"Im":{"kG":[],"h2":[],"GX":[],"lF":[]},"a4Q":{"Im":["1","2","2","3","2","xK<1,2>"],"kG":[],"h2":[],"GX":[],"lF":[],"Im.0":"1"}}'))
A.Pn(b.typeUniverse,JSON.parse('{"al2":5,"abD":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cG"),V:x("cb"),E:x("r<cY>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dn"),S:x("fb<@>"),F:x("+(c,ae)"),C:x("B9"),N:x("c"),q:x("ds"),z:x("@"),r:x("v"),B:x("Ij?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c7Q=new A.D("Powered by GIPHY",null,G.Iq,null,null,null,null,null,null,null,null)
D.adg=new A.dc(C.dR,null,null,D.c7Q,null)
D.KB=new B.aXb()
D.ahe=new B.aXc()
D.asu=new A.a2(12,10,14,10)
D.at0=new A.a2(16,16,16,12)
D.at3=new A.a2(16,16,16,24)
D.at4=new A.a2(16,16,16,8)
D.at7=new A.a2(16,2,16,8)
D.atA=new A.a2(20,18,20,24)
D.aC0=new A.aV(57404,"HeroiconsSolid",null,!1)
D.aC7=new A.aV(57436,"HeroiconsSolid",null,!1)
D.aDC=new A.ba(C.fl,null,C.S,null,null,null)
D.aDO=new A.ba(C.jK,null,C.S,null,null,null)
D.aCT=new A.ba(C.vk,null,null,null,null,null)
D.aF1=new A.dT(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aI7=new A.qM("M12 19V5M5 12l7-7 7 7",18,C.t,2.4,!1,C.d0,null)
D.bx2=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bPB=new A.jG("report",!0,O.aaS,null,A.w("jG<c>"))
D.bxX=x([D.bPB],A.w("r<px<c>>"))
D.bzl=x([],A.w("r<d5q>"))
D.byZ=x([],y.L)
D.amH=new A.W(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.anw=new A.W(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.aoz=new A.W(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.an6=new A.W(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bDP=x([D.amH,C.e8,D.anw,D.aoz,D.an6],A.w("r<W>"))
D.bPG=new B.bmP(1,"under")
D.bXj=new A.c5(1/0,null,null,null)
D.ceq=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bYR=new A.bI(D.ceq,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)
D.cfu=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bZ5=new A.bI(D.cfu,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)
D.cdR=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bZp=new A.bI(D.cdR,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)
D.c97=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.W,null,null,null,null,null,null,null,null)
D.cdb=new A.D("Stickers",null,C.ao,null,null,null,null,null,null,null,null)
D.cee=new A.D("Que mensagem queres denunciar?",null,C.fy,null,null,null,null,null,null,null,null)
D.clS=new B.Of(null)
D.coC=new B.Z0(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUA","CG",()=>D.KB.ayg(0,B.dH6(),A.w("w2"),A.w("t<c>"),y.N))})()};
(a=>{a["xJ/88t2tyfi2QEN6WDS4XcWRvb0="]=a.current})($__dart_deferred_initializers__);