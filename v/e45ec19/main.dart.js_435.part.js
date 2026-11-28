((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,I,K,L,M,F,N,O,C={
dHS(){var x,w=$.I4(),v=J.nN(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aT(B.j.hD(w.pA(256),16),2,"0")
return B.e.hz(v)},
aUG(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUG=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbu().e.a
u=(q==null?null:q.r).a
t=B.f.t(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dHS()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.S("chat-attachments")
x=3
return A.d(q.yk(s,d,new A.qE("3600",!1,f)),$async$aUG)
case 3:r=r.b.ay
r===$&&A.b()
v=r.S("chat-attachments").Ci(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUG,w)},
de_(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rL(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rL=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bP(null,new C.cNR(),!1,d,!0,!1,null,l),$async$rL)
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
return A.d(new A.lM().aB9(85,2048,B.fx),$async$rL)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kh(),$async$rL)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fc(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUG(t,s,C.de_(s)),$async$rL)
case 12:v=new j.IG(f,r,s)
x=1
break
case 7:x=13
return A.d($.din().xZ(D.bzi,null,null),$async$rL)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kh(),$async$rL)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a1(D.bZd)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.ca(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbsA(p))
if(B.f.fc(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUG(t,l,C.de_(l)),$async$rL)
case 15:v=new j.IG(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bP(null,new C.cNS(),!1,d,!0,!1,null,l),$async$rL)
case 16:n=f
v=n==null?null:new C.IG("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bP(null,new C.cNT(),!1,d,!0,!0,null,l),$async$rL)
case 17:m=f
v=m==null?null:new C.IG(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rL,w)},
IG:function IG(d,e,f){this.a=d
this.b=e
this.c=f},
cNR:function cNR(){},
cNS:function cNS(){},
cNT:function cNT(){},
O7:function O7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJJ:function bJJ(d,e){this.a=d
this.b=e},
Zz:function Zz(d){this.a=d},
czg:function czg(d,e){this.a=d
this.b=e},
OL:function OL(d){this.a=d},
adU:function adU(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZE:function bZE(d){this.a=d},
bZF:function bZF(d,e){this.a=d
this.b=e},
bZG:function bZG(d){this.a=d},
bZH:function bZH(d){this.a=d},
bZJ:function bZJ(d){this.a=d},
bZI:function bZI(d,e,f){this.a=d
this.b=e
this.c=f},
Rm:function Rm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_n:function b_n(d,e){this.a=d
this.b=e},
b_k:function b_k(d){this.a=d},
b_m:function b_m(d){this.a=d},
b_l:function b_l(d){this.a=d},
b_o:function b_o(d){this.a=d},
dA_(d){return new C.wa(d,A.E(y.N,y.F),new A.ad(A.jm(0,0),0,!1))},
d0A(d){var x,w=J.a6(d)
if(w.gY(d))return null
x=w.dn(d,new C.cUb(),y.N).bx(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
wa:function wa(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bEl:function bEl(){},
bEm:function bEm(d){this.a=d},
bEj:function bEj(){},
bEk:function bEk(){},
bEn:function bEn(d,e){this.a=d
this.b=e},
bEo:function bEo(d){this.a=d},
bEi:function bEi(d){this.a=d},
bEr:function bEr(){},
bEs:function bEs(){},
bEp:function bEp(){},
bEq:function bEq(){},
cUb:function cUb(){},
a_z(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_z=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a1(D.bZA)
x=1
break}x=3
return A.d(A.bP(null,new C.cTx(A.dr(h,0,A.et(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_z)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wB(d,e,f,u.c,u.d,g,t),$async$a_z)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_z,w)},
B9:function B9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTx:function cTx(d){this.a=d},
cTw:function cTw(d,e){this.a=d
this.b=e},
cW2(d,e,f,g,h,i,j,k,l){return new C.ao7(g,d,k,h,i,e,j,l,f,null)},
ao7:function ao7(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_A:function b_A(){},
b_x:function b_x(d){this.a=d},
b_z:function b_z(d){this.a=d},
b_y:function b_y(d){this.a=d},
cH6(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ae)
v=new A.b5(16,16)
u=d[x]
w.push(new A.bK(1,B.at,A.w(t,A.x(A.a([A.h(u.a,1,B.a1,t,t,B.c7,t,t),B.aU,A.h(u.b,t,t,t,t,B.bh,B.a4,t)],s),B.u,B.h,B.l),B.r,t,t,new A.J(B.a3,t,t,new A.cz(v,v,v,v),t,t,B.x),t,t,t,D.aua,t,t,t),t))
B.e.p(r,w)}return A.O(r,B.u,B.h,B.l,0,t)},
akK(d,e,f){var x,w=null
if(f){x=A.fO(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c8,w,w,B.cY,w)
x=new A.ak(A.hm(A.h(d,w,w,w,w,w,w,w),e,x),w)}else{x=A.ce(B.z,w,w,B.t,w,w,B.ab,w,w,B.cY)
x=new A.ak(A.bD(A.h(d,w,w,w,w,w,w,w),e,x),w)}return A.aK(x,52,w)},
d_s(d,e,f,g){var x=null,w=y.p,v=A.a([new A.dg(1,B.bb,A.h(d,x,x,x,x,B.c7,B.a4,x),x)],w)
if(g)B.e.p(v,A.a([B.dZ,D.Pe],w))
v=A.a([new A.ch(d,76,e,!1,!0,x),B.aB,A.O(v,B.u,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.p(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a4,x)],w))
return new A.bA(B.aw,x,B.aD,B.y,A.a([new A.S(B.jF,A.bM(A.x(v,B.u,B.h,B.l),x,x),x),D.bPw],w),x)},
cGO(d,e){var x,w,v=null,u=A.aT(d,B.dS,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.p(s,w)}return A.bB(!0,new A.ec(new A.aR(0,1/0,0,u.a.b*0.9),A.dR(A.x(s,B.E,B.h,B.l),B.y,v,B.al,v,B.av),v),v,B.Z,!1)},
aci:function aci(d){this.a=d},
bPR:function bPR(d){this.a=d},
d3t(d){var x,w,v,u
for(x=new A.cf(d),w=y.E,x=new A.aj(x,x.gA(0),w.i("aj<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDJ[B.j.aK(v,5)]},
cW1(d,e,f,g,h,i,j){return new C.ao6(d,i,f,e,g,j,h,null)},
zD:function zD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ao6:function ao6(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_q:function b_q(d,e){this.a=d
this.b=e},
b_r:function b_r(d,e){this.a=d
this.b=e},
b_t:function b_t(){},
b_s:function b_s(d){this.a=d},
b_p:function b_p(d,e){this.a=d
this.b=e},
Rn:function Rn(d,e){this.c=d
this.a=e},
Kw:function Kw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeC:function aeC(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c7H:function c7H(d,e){this.a=d
this.b=e},
bov:function bov(d,e){this.a=d
this.b=e},
aYd:function aYd(){},
aYe:function aYe(){},
alI:function alI(){},
IK:function IK(){},
b05:function b05(d,e){this.a=d
this.b=e},
ach:function ach(){},
d7h(d,e,f,g,h,i,j,k){return new C.a5x(A.dLG(C.dMn(),i,j),d,g,h,e,A.al8(e),f,i.i("@<0>").b7(j).b7(k).i("a5x<1,2,3>"))},
bjm(d,e,f,g,h,i,j,k,l,m){return new A.xU(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xU<1,2>"))},
a5x:function a5x(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,P,Q,R,S,T
J=c[1]
A=c[0]
B=c[2]
E=c[230]
G=c[402]
H=c[380]
I=c[178]
K=c[434]
L=c[331]
M=c[157]
F=c[237]
N=c[167]
O=c[433]
C=a.updateHolder(c[122],C)
D=c[232]
P=c[378]
Q=c[393]
R=c[266]
S=c[180]
T=c[432]
C.IG.prototype={
gap(d){return this.c}}
C.O7.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eY(!1,w,!0,new A.S(B.fX,A.x(A.a([A.w(x,A.b9(this.c,$.au,x,x,26),B.r,x,x,new A.J(B.a3,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aB,A.h(this.d,x,x,x,x,B.hR,x,x)],y.p),B.u,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,new C.bJJ(this,d),x,x,x,x,x,x,x)}}
C.Zz.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwY[x]
v=new A.b5(14,14)
s.push(A.eY(!1,new A.cz(v,v,v,v),!0,new A.S(B.q0,A.asq(w,B.ju,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.czg(d,w),u,u,u,u,u,u,u))}return new A.S(D.asI,A.x(A.a([D.c7w,B.R,A.a3q(1,s,4,8,8,u,B.dP,!0)],t),B.G,B.h,B.J),u)}}
C.OL.prototype={
P(){return new C.adU(new A.aF(B.ak,$.aa()),D.ij)}}
C.adU.prototype={
ac(){this.ao()
this.HU("")},
m(){var x=this.d
x.Z$=$.aa()
x.V$=0
this.a6()},
HU(d){return this.bgj(d)},
bgj(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HU=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.n(new C.bZE(s))
v=3
m=B.f.B(d)
l=m.length===0
r=l?"trending":"search"
k=A.p(r)
q=A.E(y.N,y.z)
J.b2(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b2(q,"limit","24")
J.b2(q,"rating","pg")
l=!l
if(l)J.b2(q,"q",m)
if(l)J.b2(q,"lang","pt")
p=A.ajk("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aV5(p,null),$async$HU)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bn.j6(0,A.jk(A.ji(q.e)).bI(0,q.w),null)),"data"))
s.n(new C.bZF(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.n(new C.bZG(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.n(new C.bZH(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HU,w)},
u(d){var x=this,w=null,v=A.aT(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.cu(),x.d,w,w,w,w,w,2,D.aER,B.U,!0,w,!0,w,!1,w,B.aC,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTk(),w,!1,w,w,!1,w,!0,w,B.al,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b0,w,B.rQ,w,w),t=x.r
if(t!=null)t=A.bM(A.h(t,w,w,w,w,B.mn,B.a4,w),w,w)
else t=x.f?D.bXK:N.b9m(T.a8v,new C.bZJ(x),x.e.length,w,w,!1)
return A.aK(new A.S(D.asG,A.x(A.a([u,B.ad,A.a5(t,1),B.aB,D.acS],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.Rm.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aT(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.aY(s.c,"asset:"))return A.asq(B.f.bF(s.c,6),B.ju,120,120)
if(p==="image"||p==="gif")return A.cp(r,A.hY(A.W(16),new A.ec(new A.aR(0,q,0,320),A.jx(s.c,new C.b_l(q),B.bz,r,new C.b_m(q),r,r),r),B.bf),B.U,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_n(s,d),r,r,r,r,r,r,!1,B.aE)
p=A.W(16)
x=s.f
w=x?$.au:B.a3
v=A.W(16)
u=A.b9(O.OE,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aH(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eY(!1,p,!0,A.w(r,A.O(A.a([u,B.ac,new A.dg(1,B.bb,t,r),B.bg,A.b9(L.vc,x?B.t:B.W,r,r,18)],y.p),B.u,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.J(w,r,r,v,r,r,B.x),r,r,r,D.asa,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.b_o(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
C.wa.prototype={
d0(){var x=this,w=y.T,v=A.eP(x).G(A.cC($.b7(),new C.bEl(),y.D,w),w)
A.eP(x).NI(new C.bEm(x))
if(v==null)return B.a6
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LS(0,"typing:"+x.x,B.yj).bxt(new C.bEn(x,v),"typing")
w.Pz(0)
x.y=w
x.Q=A.rs(B.ht,new C.bEo(x))
return B.a6},
ake(){var x,w=this,v=w.z
v.eg(v,new C.bEi(new A.ad(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c5(v,v.r,v.e,A.u(v).i("c5<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aO(w.ga2(0))||!B.e.e6(x,J.dnC(w.ga2(0))))w.sa2(0,x)},
acB(d){var x,w=this,v=w.y,u=A.eP(w).a0(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ad(Date.now(),0,!1)
if(x.cf(w.as).a<2e6)return
w.as=x
v.aeh(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GO).cG(new C.bEr(),new C.bEs(),y.H)},
cZ(d){var x=this.y,w=A.eP(this).a0(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ad(A.jm(0,0),0,!1)
x.aeh(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GO).cG(new C.bEp(),new C.bEq(),y.H)}}
C.B9.prototype={}
C.ao7.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.ch(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.dg(1,B.bb,A.h(s.c,1,B.a1,r,r,B.a9,r,r),r)],x)
if(s.z)B.e.p(w,A.a([B.dZ,D.Pe],x))
w=A.a([A.O(w,B.u,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uK,A.w(r,A.h(v,1,r,r,r,B.hf,r,r),B.r,r,r,new A.J(B.cz,r,r,u,r,r,B.x),r,r,r,B.D0,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aH(r,r,B.W,r,r,r,r,r,r,r,r,13,r,r,B.b_,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.O(A.a([q,B.af,A.a5(A.x(w,B.G,B.h,B.J),1)],x),B.u,B.h,B.l,0,r)
q=A.a([new A.d4(0,B.bm,B.z.ce(0.06),B.Gg,14)],y.V)
w=A.aT(d,B.b5,y.w).w
v=new C.b_A().$3(K.P2,"Voltar",new C.b_x(d))
u=s.r
v=A.a([v,B.af,A.a5(u==null?t:A.aV(t,u,r),1)],x)
B.e.p(v,A.a([B.af,A.Et(A.w(B.K,Q.Eb,B.r,r,r,B.bW,r,44,r,r,r,r,44),r,new C.b_y(s),new C.b_z(s),r,D.bPs,"Mais op\xe7\xf5es",y.N)],x))
return A.w(r,A.x(A.a([A.O(v,B.u,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.J(B.t,r,r,B.tA,q,r,B.x),r,r,r,new A.a4(20,w.r.b+20,20,14),r,r,r)},
gap(d){return this.c}}
C.aci.prototype={
u(d){var x=null
return A.bh(x,!0,x,A.cp(x,A.w(x,B.hC,B.r,x,x,new A.J(B.z,x,x,x,x,x,B.aq),x,44,x,x,x,x,44),B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPR(d),x,x,x,x,x,x,!1,B.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zD.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(F.MQ,A.h(v,x,x,x,x,A.aH(x,x,C.d3t(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aH(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bo,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.ec(new A.aR(0,w.a.a*0.78,0,1/0),A.w(x,A.x(o,B.G,B.h,B.J),B.r,x,x,new A.J(r,x,x,new A.cz(E.yc,E.yc,new A.b5(q,q),new A.b5(p,p)),x,x,B.x),x,x,x,new A.a4(14,t,14,10),x,x,x),x)}}
C.ao6.prototype={
ai1(d){if(!A.uk(this.c.a.a)){d.O(y.q).f.a1(D.bZ8)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.p(r,A.a([A.aV(A.w(B.K,B.P5,B.r,t,t,B.bW,t,44,t,t,t,t,44),u.e,t),B.ac],s))
x=A.W(24)
r.push(A.a5(A.w(B.bc,A.cs(t,B.a6,!1,t,!0,B.y,t,A.cu(),u.c,t,t,t,t,t,2,A.ja(t,B.b1,t,B.Z,t,t,t,t,!0,B.b1,t,t,t,t,t,t,!1,t,t,t,t,B.b1,t,t,t,t,t,t,t,t,B.mk,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.U,!0,t,!0,t,!1,t,B.aC,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_q(u,d),t,!1,t,t,!1,t,!0,t,B.al,t,t,t,t,t,t,t,t,t,t,t,B.fj,!0,B.au,t,B.b0,t,B.a9x,t,t),B.r,t,t,new A.J(B.a3,t,t,x,t,t,B.x),t,48,t,B.bR,t,t,t),1))
r.push(B.ac)
r.push(A.bh(t,!0,t,A.aV(A.w(B.K,D.aDx,B.r,t,t,B.bW,t,44,t,t,t,t,44),new C.b_r(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.O(r,B.u,B.h,B.l,0,t)
r=A.a([new A.d4(0,B.bm,B.z.ce(0.12),B.k4,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.p(x,A.a([A.aK(A.a4C(B.y,new C.b_s(u),v,t,B.js,B.bJ,new C.b_t()),34,t),B.ad],s))
x.push(w)
return A.w(t,A.bB(!0,new A.S(B.hx,A.x(x,B.E,B.h,B.J),t),t,D.arL,!1),B.r,t,t,new A.J(B.t,t,t,B.pd,r,t,B.x),t,t,t,t,t,t,t)}}
C.Rn.prototype={
u(d){var x=null,w=this.c
return A.amL(B.eL,w==null?D.bXc:new A.S(D.asM,A.bM(A.h(w,x,x,x,x,B.kf,x,x),x,x),x),B.cj,B.aN)}}
C.Kw.prototype={
P(){return new C.aeC()}}
C.aeC.prototype={
ac(){var x,w=this
w.ao()
x=w.a
w.e=x.d
x.c.al(0,w.ga1f())},
bh(d){var x,w,v=this
v.bD(d)
x=d.c
if(x!==v.a.c){w=v.ga1f()
x.a3(0,w)
v.a.c.al(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a3(0,this.ga1f())
this.a6()},
aTn(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gby(0).at
v.toString
x=v>300
if(x!==w.d)w.n(new C.c7H(w,x))},
b5P(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aT(x,null,y.w).w
w=this.a
if(x.ax)w.c.hf(0)
else w.c.i0(0,B.ev,G.CC)},
u(d){var x,w,v,u=this,t=null,s=B.j.af(u.a.d-u.e,0,99),r=y.p,q=A.a([A.j_(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.w(B.K,D.aDq,B.r,t,t,D.afy,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bG(B.z,2)
r.push(A.c8(t,A.w(B.K,A.h(""+s,t,t,t,t,B.hR,t,t),B.r,t,B.le,new A.J(B.t,t,v,x,t,t,B.x),t,20,t,B.CY,t,t,t),t,t,t,-6,-6,t))}q.push(A.c8(16,A.bh(t,!0,t,A.aV(new A.bA(B.aw,t,B.aD,B.r,r,t),u.gb5O(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bA(B.aw,t,B.aD,B.y,q,t)}}
C.bov.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aYd.prototype={
$1(d){return A.n_(d,null,!0,null,null,y.S,y.z)},
gWZ(d){return D.agX},
axW(d,e,f,g,h){return this.gWZ(this).$3$1(e,f,g,h)}}
C.aYe.prototype={
$3$1(d,e,f,g){return C.d7h(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alI.prototype={}
C.IK.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b05(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.ach.prototype={}
C.a5x.prototype={}
var z=a.updateTypes(["~()","Zz(N)","OL(N)","F<~>(c)","t<c>()","wa(c)","xU<0^,1^>(0^(){$allTransitiveDependencies!y<hd>?,argument!M?,dependencies!y<hd>?,from!kU?,isAutoDispose!C,name!c?,retry!bp?(v,M)?})<fb<1^>,M?>"])
C.cNR.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.atb,A.x(A.a([A.O(A.a([new C.O7(B.jV,"Foto","photo",x),new C.O7(D.aC1,"Ficheiro","file",x),new C.O7(R.jS,"Sticker","sticker",x),new C.O7(D.aBU,"GIF","gif",x)],w),B.u,B.a0A,B.l,0,x)],w),B.u,B.h,B.J),x)},
$S:67}
C.cNS.prototype={
$1(d){return D.cp3},
$S:z+1}
C.cNT.prototype={
$1(d){return D.cmf},
$S:z+2}
C.bJJ.prototype={
$0(){return A.an(this.b,!1).aq(this.a.e)},
$S:0}
C.czg.prototype={
$0(){return A.an(this.a,!1).aq(this.b)},
$S:0}
C.bZE.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZF.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bj(this.b,y.P),v=A.u(w),w=new A.aj(w,w.gA(w),v.i("aj<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.bn(s,new A.X(A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZG.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZH.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZJ.prototype={
$2(d,e){var x=null,w=this.a
return A.eY(!1,x,!0,A.hY(A.W(10),A.jx(w.e[e].a,x,B.bz,x,x,x,x),B.bf),x,!0,x,x,x,x,x,x,x,x,new C.bZI(w,d,e),x,x,x,x,x,x,x)},
$S:1333}
C.bZI.prototype={
$0(){return A.an(this.b,!1).aq(this.a.e[this.c].b)},
$S:0}
C.b_n.prototype={
$0(){var x=y.H
return A.an(this.b,!1).h1(A.tz(new C.b_k(this.a),null,x),x)},
$S:0}
C.b_k.prototype={
$1(d){var x=null
return A.ky(A.cVM(B.ao,x,B.t,x),B.ao,A.bM(I.cX2(B.Z,A.pq(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1334}
C.b_m.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1335}
C.b_l.prototype={
$3(d,e,f){var x=null
return A.w(x,D.aDE,B.r,B.a3,x,x,x,120,x,x,x,x,this.a)},
$S:72}
C.b_o.prototype={
$0(){return A.zb(A.dA(this.a.c,0,null),B.qg,null)},
$S:0}
C.bEl.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEm.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aE(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y7(x).cG(new C.bEj(),new C.bEk(),y.H)}},
$S:0}
C.bEj.prototype={
$1(d){},
$S:106}
C.bEk.prototype={
$1(d){},
$S:13}
C.bEn.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dV(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.B(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.B(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ad(Date.now(),0,!1).en(5e6)))}u.ake()},
$S:253}
C.bEo.prototype={
$1(d){return this.a.ake()},
$S:62}
C.bEi.prototype={
$2(d,e){return e.b.fg(this.a)},
$S:1336}
C.bEr.prototype={
$1(d){},
$S:239}
C.bEs.prototype={
$1(d){},
$S:13}
C.bEp.prototype={
$1(d){},
$S:239}
C.bEq.prototype={
$1(d){},
$S:13}
C.cUb.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:22}
C.cTx.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.Is,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.jq(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDo,r,r,r,r,new C.cTw(d,u),!1,r,r,r,r,r,s,r,t,r,F.Pd,r))}return A.bB(!0,new A.S(D.asJ,A.x(A.a([D.cae,B.ap,D.cbe,B.P,new A.dg(1,B.bb,A.d6(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:31}
C.cTw.prototype={
$0(){return A.an(this.a,!1).aq(this.b)},
$S:0}
C.b_A.prototype={
$3(d,e,f){var x=null
return A.kC(A.aV(A.w(B.K,d,B.r,x,x,B.bW,x,44,x,x,x,x,44),f,x),x,e)},
$S:1337}
C.b_x.prototype={
$0(){return A.iO(this.a,!1)},
$S:0}
C.b_z.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_y.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bou(A.h(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bPk)
return r},
$S:63}
C.bPR.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
C.b_q.prototype={
$1(d){return this.a.ai1(this.b)},
$S:3}
C.b_r.prototype={
$0(){return this.a.ai1(this.b)},
$S:0}
C.b_t.prototype={
$2(d,e){return B.ac},
$S:122}
C.b_s.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bG(B.z,1.5)
return A.aV(A.w(B.K,A.h(w.w[e],x,x,x,x,B.dR,x,x),B.r,x,x,new A.J(B.t,x,u,v,x,x,B.x),x,34,x,B.cJ,x,x,x),new C.b_p(w,e),x)},
$S:219}
C.b_p.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c7H.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b05.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IK.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adU.prototype,"gaTk","HU",3)
w(C,"dNl","dA_",5)
v(C.wa.prototype,"giF","d0",4)
var t
v(t=C.aeC.prototype,"ga1f","aTn",0)
v(t,"gb5O","b5P",0)
u(C,"dMn",1,function(){return{$allTransitiveDependencies:B.cN,argument:B.cN,dependencies:B.cN,from:B.cN,isAutoDispose:B.cN,name:B.cN,retry:B.cN}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bjm",function(d,e,f,g,h,i,j,k){return C.bjm(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjm(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjm(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.M,[C.IG,C.B9,C.aYd,C.aYe,C.alI])
w(A.bu,[C.cNR,C.cNS,C.cNT,C.b_k,C.b_m,C.b_l,C.bEl,C.bEj,C.bEk,C.bEn,C.bEo,C.bEr,C.bEs,C.bEp,C.bEq,C.cUb,C.cTx,C.b_A,C.b_z,C.b_y,C.b_q])
w(A.L,[C.O7,C.Zz,C.Rm,C.ao7,C.aci,C.zD,C.ao6,C.Rn])
w(A.bL,[C.bJJ,C.czg,C.bZE,C.bZF,C.bZG,C.bZH,C.bZI,C.b_n,C.b_o,C.bEm,C.cTw,C.b_x,C.bPR,C.b_r,C.b_p,C.c7H,C.b05])
w(A.G,[C.OL,C.Kw])
w(A.Z,[C.adU,C.aeC])
w(A.cL,[C.bZJ,C.bEi,C.b_t,C.b_s])
v(C.wa,A.fb)
v(C.bov,A.f7)
v(C.ach,A.kU)
v(C.IK,C.ach)
v(C.a5x,C.IK)
x(C.ach,C.alI)})()
A.br(b.typeUniverse,JSON.parse('{"Zz":{"L":[],"e":[],"f":[]},"OL":{"G":[],"e":[],"f":[]},"O7":{"L":[],"e":[],"f":[]},"adU":{"Z":["OL"]},"Rm":{"L":[],"e":[],"f":[]},"wa":{"fb":["t<c>"]},"ao7":{"L":[],"e":[],"f":[]},"aci":{"L":[],"e":[],"f":[]},"Kw":{"G":[],"e":[],"f":[]},"zD":{"L":[],"e":[],"f":[]},"ao6":{"L":[],"e":[],"f":[]},"Rn":{"L":[],"e":[],"f":[]},"aeC":{"Z":["Kw"]},"IK":{"kU":[],"hd":[],"Hg":[],"lP":[]},"a5x":{"IK":["1","2","2","3","2","xU<1,2>"],"kU":[],"hd":[],"Hg":[],"lP":[],"IK.0":"1"}}'))
A.PY(b.typeUniverse,JSON.parse('{"alI":5,"ach":6}'))
var y=(function rtii(){var x=A.A
return{D:x("cI"),E:x("cf"),V:x("r<d4>"),X:x("r<pF<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("dw"),S:x("fb<@>"),F:x("+(c,ad)"),C:x("B9"),N:x("c"),q:x("dj"),z:x("@"),r:x("v"),B:x("IG?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.caQ=new A.D("Powered by GIPHY",null,H.Iq,null,null,null,null,null,null,null)
D.acS=new A.d0(B.e1,null,null,D.caQ,null)
D.afy=new A.J(B.z,null,null,null,B.ii,null,B.aq)
D.Kt=new C.aYd()
D.agX=new C.aYe()
D.arL=new A.a4(0,0,0,24)
D.asa=new A.a4(12,10,14,10)
D.asG=new A.a4(16,16,16,12)
D.asI=new A.a4(16,16,16,24)
D.asJ=new A.a4(16,16,16,8)
D.asM=new A.a4(16,2,16,8)
D.atb=new A.a4(20,18,20,24)
D.aua=new A.a4(8,12,8,12)
D.aBU=new A.b0(57404,"HeroiconsSolid",null,!1)
D.aC1=new A.b0(57436,"HeroiconsSolid",null,!1)
D.Pe=new A.b8(B.ic,18,B.br,null,"Verificado",null)
D.aDo=new A.b8(B.fe,null,B.W,null,null,null)
D.aBJ=new A.b0(57347,"HeroiconsSolid",null,!1)
D.aDq=new A.b8(D.aBJ,20,B.t,null,null,null)
D.aDx=new A.b8(B.lH,20,B.t,null,null,null)
D.aDE=new A.b8(B.jV,null,B.W,null,null,null)
D.aCH=new A.b8(B.ve,null,null,null,null,null)
D.aER=new A.dE(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwY=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bzi=x([],A.A("r<daW>"))
D.bzl=x([],A.A("r<+(c,~())>"))
D.ij=x([],y.L)
D.ams=new A.Y(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.anh=new A.Y(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aok=new A.Y(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amT=new A.Y(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDJ=x([D.ams,B.cS,D.anh,D.aok,D.amT],A.A("r<Y>"))
D.bPk=new A.jO("report",!0,P.aaD,null,A.A("jO<c>"))
D.bPs=new C.bov(1,"under")
D.clj=new C.aci(null)
D.bPw=new A.eL(null,0,0,null,null,null,D.clj,null)
D.bXc=new A.c6(1/0,null,null,null)
D.bXK=new S.yn(12,3,null)
D.cav=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bZ8=new A.bF(D.cav,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cc7=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bZd=new A.bF(D.cc7,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c9e=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZA=new A.bF(D.c9e,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c7w=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null)
D.cae=new A.D("Que mensagem queres denunciar?",null,B.hQ,null,null,null,null,null,null,null)
D.cbe=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.cmf=new C.OL(null)
D.cp3=new C.Zz(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e06","CP",()=>D.Kt.axW(0,C.dNl(),A.A("wa"),A.A("t<c>"),y.N))})()};
(a=>{a["mNTMxVTfz3cm/4R9nya20OFbl4U="]=a.current})($__dart_deferred_initializers__);