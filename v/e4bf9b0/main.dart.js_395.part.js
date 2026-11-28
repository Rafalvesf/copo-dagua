((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,E,L,M,N,B={
dBI(){var x,w=$.PZ(),v=J.nE(16,y.N)
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
s=u+"/"+B.dBI()+"."+t
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
d8m(d){var x,w=C.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.cn(null,new B.cJ3(),!1,d,!0,!1,null,l),$async$rC)
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
return A.d(new A.lD().YV(85,2048,C.fm),$async$rC)
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
return A.d(B.aTJ(t,s,B.d8m(s)),$async$rC)
case 12:v=new j.Ii(f,r,s)
x=1
break
case 7:x=13
return A.d($.dcz().y9(D.bzi,null,null),$async$rC)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rC)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.bZo)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.c4(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbtd(p))
if(C.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aTJ(t,l,B.d8m(l)),$async$rC)
case 15:v=new j.Ii(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cn(null,new B.cJ4(),!1,d,!0,!1,null,l),$async$rC)
case 16:n=f
v=n==null?null:new B.Ii("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cn(null,new B.cJ5(),!1,d,!0,!0,null,l),$async$rC)
case 17:m=f
v=m==null?null:new B.Ii(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rC,w)},
Ii:function Ii(d,e,f){this.a=d
this.b=e
this.c=f},
cJ3:function cJ3(){},
cJ4:function cJ4(){},
cJ5:function cJ5(){},
NG:function NG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bI4:function bI4(d,e){this.a=d
this.b=e},
Z0:function Z0(d){this.a=d},
cuJ:function cuJ(d,e){this.a=d
this.b=e},
Of:function Of(d){this.a=d},
adl:function adl(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bXp:function bXp(d){this.a=d},
bXq:function bXq(d,e){this.a=d
this.b=e},
bXr:function bXr(d){this.a=d},
bXs:function bXs(d){this.a=d},
bXu:function bXu(d){this.a=d},
bXt:function bXt(d,e,f){this.a=d
this.b=e
this.c=f},
QL:function QL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZl:function aZl(d,e){this.a=d
this.b=e},
aZi:function aZi(d){this.a=d},
aZk:function aZk(d){this.a=d},
aZj:function aZj(d){this.a=d},
aZm:function aZm(d){this.a=d},
dtZ(d){return new B.w2(d,A.A(y.N,y.F),new A.ae(A.iX(0,0),0,!1))},
cWe(d){var x,w=J.a6(d)
if(w.gY(d))return null
x=w.dz(d,new B.cOO(),y.N).by(0)
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
bCV:function bCV(){},
bCW:function bCW(d){this.a=d},
bCT:function bCT(){},
bCU:function bCU(){},
bCX:function bCX(d,e){this.a=d
this.b=e},
bCY:function bCY(d){this.a=d},
bCS:function bCS(d){this.a=d},
bD0:function bD0(){},
bD1:function bD1(){},
bCZ:function bCZ(){},
bD_:function bD_(){},
cOO:function cOO(){},
a__(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a__=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.bYQ)
x=1
break}x=3
return A.d(A.cn(null,new B.cOa(A.e3(h,0,A.eT(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a__)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(K.wq(d,e,f,u.c,u.d,g,t),$async$a__)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a__,w)},
B8:function B8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cOa:function cOa(d){this.a=d},
cO9:function cO9(d,e){this.a=d
this.b=e},
cQy(d,e,f,g,h,i,j){return new B.ann(f,d,i,j,g,h,e,null)},
ann:function ann(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZs:function aZs(){},
aZp:function aZp(d){this.a=d},
aZr:function aZr(d){this.a=d},
aZq:function aZq(){},
cZ9(d){var x,w,v,u
for(x=new A.cb(d),w=y.V,x=new A.ak(x,x.gA(0),w.i("ak<U.E>")),w=w.i("U.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDO[C.i.aq(v,5)]},
zB:function zB(d,e,f,g){var _=this
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
aZn:function aZn(d,e){this.a=d
this.b=e},
aZo:function aZo(d,e){this.a=d
this.b=e},
QO:function QO(d,e){this.c=d
this.a=e},
bmQ:function bmQ(d,e){this.a=d
this.b=e},
aXc:function aXc(){},
aXd:function aXd(){},
al2:function al2(){},
Il:function Il(){},
aZW:function aZW(d,e){this.a=d
this.b=e},
abD:function abD(){},
d1L(d,e,f,g,h,i,j,k){return new B.a4Q(A.dFr(B.dG8(),i,j),d,g,h,e,A.akt(e),f,i.i("@<0>").b6(j).b6(k).i("a4Q<1,2,3>"))},
bie(d,e,f,g,h,i,j,k,l,m){return new A.xJ(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("xJ<1,2>"))},
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
B.Ii.prototype={
gap(d){return this.c}}
B.NG.prototype={
u(d){var x=null,w=A.a1(18),v=A.a1(18)
return A.eJ(!1,w,!0,new A.R(C.hq,A.C(A.a([A.E(x,A.b2(this.c,$.ap,x,x,26),C.r,x,x,new A.O(C.a9,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aE,A.i(this.d,x,x,x,x,C.j3,x,x,x)],y.p),C.w,C.j,C.L,0,C.v),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bI4(this,d),x,x,x,x,x,x,x)}}
B.Z0.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bx_[x]
v=new A.b4(14,14)
s.push(A.eJ(!1,new A.ce(v,v,v,v),!0,new A.R(C.qh,A.arB(w,C.kc,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cuJ(d,w),u,u,u,u,u,u,u))}return new A.R(D.at2,A.C(A.a([D.cda,C.P,A.Sh(1,s,4,8,8,u,C.dW,!0)],t),C.H,C.j,C.L,0,C.v),u)}}
B.Of.prototype={
P(){return new B.adl(new A.aI(C.an,$.ac()),D.byW)}}
B.adl.prototype={
al(){this.aH()
this.I9("")},
m(){var x=this.d
x.Z$=$.ac()
x.X$=0
this.a7()},
I9(d){return this.bgM(d)},
bgM(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$I9=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bXp(s))
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
return A.d(A.aU5(p,null),$async$I9)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bp.jU(0,A.j9(A.j7(q.e)).bI(0,q.w),null)),"data"))
s.q(new B.bXq(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bXr(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bXs(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$I9,w)},
u(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cN(w,C.aa,!1,w,!0,C.z,w,A.cQ(),x.d,w,w,w,w,w,2,D.aF0,C.a2,!0,w,!0,w,!1,w,C.aI,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTE(),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.at,w,C.b8,w,C.t1,w,w),t=x.r
if(t!=null)t=A.bN(A.i(t,w,w,w,w,C.k0,C.a5,w,w),w,w)
else t=x.f?C.cX:M.a2L(w,C.a2,T.a8G,new B.bXu(x),x.e.length,w,w,!1)
return A.aL(new A.R(D.at_,A.C(A.a([u,C.ac,A.a7(t,1),C.aE,D.adf],y.p),C.H,C.j,C.m,0,C.v),w),v.a.b*0.62,w)}}
B.QL.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b4(s.c,"asset:"))return A.arB(C.f.bD(s.c,6),C.kc,120,120)
if(p==="image"||p==="gif")return A.dO(r,A.fX(A.a1(16),new A.ez(new A.aP(0,q,0,320),A.ks(s.c,new B.aZj(q),C.bG,r,new B.aZk(q),r,r),r),C.b0),C.a2,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aZl(s,d),r,r,r,r,r,r,!1,C.bd)
p=A.a1(16)
x=s.f
w=x?$.ap:C.a9
v=A.a1(16)
u=A.b2(N.OP,x?C.t:$.ap,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a0,r,r,A.aG(r,r,x?C.t:C.A,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eJ(!1,p,!0,A.E(r,A.Q(A.a([u,C.al,new A.dL(1,C.bi,t,r),C.bq,A.b2(I.vd,x?C.t:C.S,r,r,18)],y.p),C.w,C.j,C.L,0,r,r),C.r,r,new A.aP(0,q,0,1/0),new A.O(w,r,r,v,r,r,C.y),r,r,r,D.ast,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aZm(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
B.w2.prototype={
d4(){var x=this,w=y.T,v=A.eP(x).H(A.cv($.b8(),new B.bCV(),y.D,w),w)
A.eP(x).Yq(new B.bCW(x))
if(v==null)return C.aa
w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.M1(0,"typing:"+x.x,C.ye).by9(new B.bCX(x,v),"typing")
w.Q1(0)
x.y=w
x.Q=A.w1(C.fM,new B.bCY(x))
return C.aa},
aki(){var x,w=this,v=w.z
v.ed(v,new B.bCS(new A.ae(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cd(v,v.r,v.e,A.u(v).i("cd<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aS(w.ga2(0))||!C.e.e9(x,J.dhE(w.ga2(0))))w.sa2(0,x)},
acI(d){var x,w=this,v=w.y,u=A.eP(w).a1(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ae(Date.now(),0,!1)
if(x.cV(w.as).a<2e6)return
w.as=x
v.aek(0,"typing",A.S(["id",t,"name",d],y.N,y.z),C.GK).cC(new B.bD0(),new B.bD1(),y.H)},
d2(d){var x=this.y,w=A.eP(this).a1(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ae(A.iX(0,0),0,!1)
x.aek(0,"typing",A.S(["id",v,"stop",!0],y.N,y.z),C.GK).cC(new B.bCZ(),new B.bD_(),y.H)}}
B.B8.prototype={}
B.ann.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cF(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a0,r,r,L.Ir,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a0,r,r,A.aG(r,r,s.f?C.e8:C.S,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.Q(A.a([q,C.ar,A.a7(A.C(w,C.H,C.j,C.L,0,C.v),1)],x),C.w,C.j,C.m,0,r,r)
q=A.a([new A.cY(0,C.bk,C.A.cd(0.06),C.Gb,14)],y.E)
w=A.aw(d,C.b5,y.w).w
v=new B.aZs().$3(C.lG,"Voltar",new B.aZp(d))
t=s.r
v=A.a([v,C.ar,A.a7(t==null?u:A.aU(u,t,r),1)],x)
C.e.n(v,A.a([C.al,A.Ef(A.E(C.K,P.Eb,C.r,r,r,C.cG,r,44,r,r,r,r,44),r,new B.aZq(),new B.aZr(s),r,D.bPF,"Mais op\xe7\xf5es",y.N)],x))
return A.E(r,A.C(A.a([A.Q(v,C.w,C.j,C.m,0,r,r)],x),C.J,C.j,C.L,0,C.v),C.r,r,r,new A.O(C.t,r,r,r,q,r,C.y),r,r,r,new A.a2(16,w.r.b+10,16,12),r,r,r)},
gap(d){return this.c}}
B.zB.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.R(E.N0,A.i(v,x,x,x,x,A.aG(x,x,B.cZ9(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,x,A.aG(x,x,s?C.t:C.A,x,x,x,x,x,x,x,x,15,x,x,C.bh,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ez(new A.aP(0,w.a.a*0.78,0,1/0),A.E(x,A.C(o,C.H,C.j,C.L,0,C.v),C.r,x,x,new A.O(r,x,x,new A.ce(F.y7,F.y7,new A.b4(q,q),new A.b4(p,p)),x,x,C.y),x,x,x,new A.a2(14,t,14,10),x,x,x),x)}}
B.QM.prototype={
ai5(d){if(!A.u8(this.c.a.a)){d.O(y.q).f.a4(D.bZ4)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.n(u,A.a([A.aU(A.E(C.K,C.Pg,C.r,w,w,C.cG,w,44,w,w,w,w,44),x.e,w),C.al],v))
v=A.a1(999)
u.push(A.a7(A.E(C.bm,A.cN(w,C.aa,!1,w,!0,C.z,w,A.cQ(),x.c,w,w,w,w,w,2,A.jg(w,C.ca,w,C.a_,w,w,w,w,!0,C.ca,w,w,w,w,w,w,!1,w,w,w,w,C.ca,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a2,!0,w,!0,w,!1,w,C.aI,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aZn(x,d),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,C.h9,!0,C.at,w,C.b8,w,C.a9E,w,w),C.r,w,w,new A.O(C.a9,w,w,v,w,w,C.y),w,44,w,C.bP,w,w,w),1))
u.push(C.al)
u.push(A.aU(A.E(C.K,D.aI6,C.r,w,w,C.cG,w,44,w,w,w,w,44),new B.aZo(x,d),w))
return A.E(w,A.bD(!0,new A.R(R.Nh,A.Q(u,C.w,C.j,C.m,0,w,w),w),w,Q.N1,!1),C.r,C.t,w,w,w,w,w,w,w,w,w)}}
B.QO.prototype={
u(d){var x=null,w=this.c
return A.cQg(C.fD,w==null?D.bXi:new A.R(D.at6,A.bN(A.i(w,x,x,x,x,C.hL,x,x,x),x,x),x),C.cl,C.aD)}}
B.bmQ.prototype={
I(){return"PopupMenuPosition."+this.b}}
B.aXc.prototype={
$1(d){return A.mS(d,null,!0,null,null,y.S,y.z)},
gWY(d){return D.ahd},
ayf(d,e,f,g,h){return this.gWY(this).$3$1(e,f,g,h)}}
B.aXd.prototype={
$3$1(d,e,f,g){return B.d1L(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.al2.prototype={}
B.Il.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aZW(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.abD.prototype={}
B.a4Q.prototype={}
var z=a.updateTypes(["Z0(N)","Of(N)","F<~>(c)","t<c>()","w2(c)","xJ<0^,1^>(0^(){$allTransitiveDependencies!z<h2>?,argument!H?,dependencies!z<h2>?,from!kG?,isAutoDispose!y,name!c?,retry!bo?(v,H)?})<fa<1^>,H?>"])
B.cJ3.prototype={
$1(d){var x=null,w=y.p
return new A.R(D.atz,A.C(A.a([A.Q(A.a([new B.NG(C.jI,"Foto","photo",x),new B.NG(D.aC6,"Ficheiro","file",x),new B.NG(S.jF,"Sticker","sticker",x),new B.NG(D.aC_,"GIF","gif",x)],w),C.w,C.FS,C.m,0,x,x)],w),C.w,C.j,C.L,0,C.v),x)},
$S:68}
B.cJ4.prototype={
$1(d){return D.coA},
$S:z+0}
B.cJ5.prototype={
$1(d){return D.clQ},
$S:z+1}
B.bI4.prototype={
$0(){return A.aq(this.b,!1).aj(this.a.e)},
$S:0}
B.cuJ.prototype={
$0(){return A.aq(this.a,!1).aj(this.b)},
$S:0}
B.bXp.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bXq.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bk(this.b,y.P),v=A.u(w),w=new A.ak(w,w.gA(w),v.i("ak<U.E>")),u=y.f,v=v.i("U.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bw(s,new A.a3(A.a0(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a0(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bXr.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bXs.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bXu.prototype={
$2(d,e){var x=null,w=this.a
return A.eJ(!1,x,!0,A.fX(A.a1(10),A.ks(w.e[e].a,x,C.bG,x,x,x,x),C.b0),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bXt(w,d,e),x,x,x,x,x,x,x)},
$S:467}
B.bXt.prototype={
$0(){return A.aq(this.b,!1).aj(this.a.e[this.c].b)},
$S:0}
B.aZl.prototype={
$0(){var x=y.H
return A.aq(this.b,!1).ie(A.to(new B.aZi(this.a),null,x),x)},
$S:0}
B.aZi.prototype={
$1(d){var x=null
return A.kq(A.cQi(C.ak,x,C.t,x),C.ak,A.bN(H.cRI(C.a_,A.qG(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1337}
B.aZk.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:182}
B.aZj.prototype={
$3(d,e,f){var x=null
return A.E(x,D.aDN,C.r,C.a9,x,x,x,120,x,x,x,x,this.a)},
$S:63}
B.aZm.prototype={
$0(){return A.z4(A.dr(this.a.c,0,null),C.qz,null)},
$S:0}
B.bCV.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.bCW.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yf(x).cC(new B.bCT(),new B.bCU(),y.H)}},
$S:0}
B.bCT.prototype={
$1(d){},
$S:110}
B.bCU.prototype={
$1(d){},
$S:14}
B.bCX.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e6(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.B(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.B(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a3(v,new A.ae(Date.now(),0,!1).ee(5e6)))}u.aki()},
$S:228}
B.bCY.prototype={
$1(d){return this.a.aki()},
$S:69}
B.bCS.prototype={
$2(d,e){return e.b.eR(this.a)},
$S:1339}
B.bD0.prototype={
$1(d){},
$S:199}
B.bD1.prototype={
$1(d){},
$S:14}
B.bCZ.prototype={
$1(d){},
$S:199}
B.bD_.prototype={
$1(d){},
$S:14}
B.cOO.prototype={
$1(d){return C.e.gM(d.split(" "))},
$S:24}
B.cOa.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a0,r,r,C.Iq,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r,r)
p.push(A.j_(!1,C.a_,r,r,!0,r,r,r,!0,r,D.aDB,r,r,r,r,new B.cO9(d,u),!1,r,r,r,r,r,s,r,t,r,E.Po,r))}return A.bD(!0,new A.R(D.at3,A.C(A.a([D.cec,C.as,D.c96,C.Y,new A.dL(1,C.bi,A.d_(p,r,r,r,r,!1,C.a1,!0),r)],q),C.H,C.j,C.L,0,C.v),r),r,C.a_,!0)},
$S:46}
B.cO9.prototype={
$0(){return A.aq(this.a,!1).aj(this.b)},
$S:0}
B.aZs.prototype={
$3(d,e,f){var x=null
return A.kR(A.aU(A.E(C.K,d,C.r,x,x,C.cG,x,44,x,x,x,x,44),f,x),x,e)},
$S:1340}
B.aZp.prototype={
$0(){return A.aq(this.a,!1).iz()},
$S:0}
B.aZr.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aZq.prototype={
$1(d){return D.bxU},
$S:57}
B.aZn.prototype={
$1(d){return this.a.ai5(this.b)},
$S:3}
B.aZo.prototype={
$0(){return this.a.ai5(this.b)},
$S:0}
B.aZW.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Il.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.adl.prototype,"gaTE","I9",2)
w(B,"dH4","dtZ",4)
v(B.w2.prototype,"giJ","d4",3)
u(B,"dG8",1,function(){return{$allTransitiveDependencies:C.cH,argument:C.cH,dependencies:C.cH,from:C.cH,isAutoDispose:C.cH,name:C.cH,retry:C.cH}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bie",function(d,e,f,g,h,i,j,k){return B.bie(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bie(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bie(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.H,[B.Ii,B.B8,B.aXc,B.aXd,B.al2])
w(A.bx,[B.cJ3,B.cJ4,B.cJ5,B.aZi,B.aZk,B.aZj,B.bCV,B.bCT,B.bCU,B.bCX,B.bCY,B.bD0,B.bD1,B.bCZ,B.bD_,B.cOO,B.cOa,B.aZs,B.aZr,B.aZq,B.aZn])
w(A.L,[B.NG,B.Z0,B.QL,B.ann,B.zB,B.QM,B.QO])
w(A.bR,[B.bI4,B.cuJ,B.bXp,B.bXq,B.bXr,B.bXs,B.bXt,B.aZl,B.aZm,B.bCW,B.cO9,B.aZp,B.aZo,B.aZW])
v(B.Of,A.J)
v(B.adl,A.a_)
w(A.cR,[B.bXu,B.bCS])
v(B.w2,A.fa)
v(B.bmQ,A.fs)
v(B.abD,A.kG)
v(B.Il,B.abD)
v(B.a4Q,B.Il)
x(B.abD,B.al2)})()
A.bs(b.typeUniverse,JSON.parse('{"Z0":{"L":[],"e":[],"f":[]},"Of":{"J":[],"e":[],"f":[]},"NG":{"L":[],"e":[],"f":[]},"adl":{"a_":["Of"]},"QL":{"L":[],"e":[],"f":[]},"w2":{"fa":["t<c>"]},"ann":{"L":[],"e":[],"f":[]},"zB":{"L":[],"e":[],"f":[]},"QM":{"L":[],"e":[],"f":[]},"QO":{"L":[],"e":[],"f":[]},"Il":{"kG":[],"h2":[],"GW":[],"lF":[]},"a4Q":{"Il":["1","2","2","3","2","xJ<1,2>"],"kG":[],"h2":[],"GW":[],"lF":[],"Il.0":"1"}}'))
A.Pn(b.typeUniverse,JSON.parse('{"al2":5,"abD":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cG"),V:x("cb"),E:x("r<cY>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dn"),S:x("fa<@>"),F:x("+(c,ae)"),C:x("B8"),N:x("c"),q:x("ds"),z:x("@"),r:x("v"),B:x("Ii?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c7P=new A.D("Powered by GIPHY",null,G.Ip,null,null,null,null,null,null,null,null)
D.adf=new A.dc(C.dR,null,null,D.c7P,null)
D.KA=new B.aXc()
D.ahd=new B.aXd()
D.ast=new A.a2(12,10,14,10)
D.at_=new A.a2(16,16,16,12)
D.at2=new A.a2(16,16,16,24)
D.at3=new A.a2(16,16,16,8)
D.at6=new A.a2(16,2,16,8)
D.atz=new A.a2(20,18,20,24)
D.aC_=new A.aV(57404,"HeroiconsSolid",null,!1)
D.aC6=new A.aV(57436,"HeroiconsSolid",null,!1)
D.aDB=new A.ba(C.fl,null,C.S,null,null,null)
D.aDN=new A.ba(C.jI,null,C.S,null,null,null)
D.aCS=new A.ba(C.vi,null,null,null,null,null)
D.aF0=new A.dT(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aI6=new A.qM("M12 19V5M5 12l7-7 7 7",18,C.t,2.4,!1,C.d0,null)
D.bx_=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bPA=new A.jG("report",!0,O.aaR,null,A.w("jG<c>"))
D.bxU=x([D.bPA],A.w("r<px<c>>"))
D.bzi=x([],A.w("r<d5o>"))
D.byW=x([],y.L)
D.amG=new A.W(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.anv=new A.W(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.aoy=new A.W(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.an5=new A.W(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bDO=x([D.amG,C.e8,D.anv,D.aoy,D.an5],A.w("r<W>"))
D.bPF=new B.bmQ(1,"under")
D.bXi=new A.c5(1/0,null,null,null)
D.ceo=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bYQ=new A.bI(D.ceo,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)
D.cfs=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bZ4=new A.bI(D.cfs,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)
D.cdQ=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bZo=new A.bI(D.cdQ,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)
D.c96=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.W,null,null,null,null,null,null,null,null)
D.cda=new A.D("Stickers",null,C.ao,null,null,null,null,null,null,null,null)
D.cec=new A.D("Que mensagem queres denunciar?",null,C.fy,null,null,null,null,null,null,null,null)
D.clQ=new B.Of(null)
D.coA=new B.Z0(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUy","CF",()=>D.KA.ayf(0,B.dH4(),A.w("w2"),A.w("t<c>"),y.N))})()};
(a=>{a["/WrHqOjz3AxbXrfIuaLnG4ZyVLk="]=a.current})($__dart_deferred_initializers__);