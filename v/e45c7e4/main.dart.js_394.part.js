((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,E,L,M,N,B={
dBN(){var x,w=$.Q0(),v=J.nG(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aW(C.i.hZ(w.r1(256),16),2,"0")
return C.e.hR(v)},
aTN(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aTN=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.T()
q=r.b
q===$&&A.b()
q=q.gbE().e.a
u=(q==null?null:q.r).a
t=C.f.p(e,".")?C.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dBN()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.rh(s,d,new A.uX(!1,f)),$async$aTN)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Co(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTN,w)},
d8r(d){var x,w=C.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.cn(null,new B.cJ8(),!1,d,!0,!1,null,l),$async$rC)
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
return A.d(new A.lD().YW(85,2048,C.fn),$async$rC)
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
return A.d(B.aTN(t,s,B.d8r(s)),$async$rC)
case 12:v=new j.Ik(f,r,s)
x=1
break
case 7:x=13
return A.d($.dcE().y9(D.bzn,null,null),$async$rC)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rC)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.bZz)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.c4(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbte(p))
if(C.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aTN(t,l,B.d8r(l)),$async$rC)
case 15:v=new j.Ik(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cn(null,new B.cJ9(),!1,d,!0,!1,null,l),$async$rC)
case 16:n=f
v=n==null?null:new B.Ik("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cn(null,new B.cJa(),!1,d,!0,!0,null,l),$async$rC)
case 17:m=f
v=m==null?null:new B.Ik(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rC,w)},
Ik:function Ik(d,e,f){this.a=d
this.b=e
this.c=f},
cJ8:function cJ8(){},
cJ9:function cJ9(){},
cJa:function cJa(){},
NI:function NI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bI8:function bI8(d,e){this.a=d
this.b=e},
Z3:function Z3(d){this.a=d},
cuO:function cuO(d,e){this.a=d
this.b=e},
Oh:function Oh(d){this.a=d},
adp:function adp(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bXt:function bXt(d){this.a=d},
bXu:function bXu(d,e){this.a=d
this.b=e},
bXv:function bXv(d){this.a=d},
bXw:function bXw(d){this.a=d},
bXy:function bXy(d){this.a=d},
bXx:function bXx(d,e,f){this.a=d
this.b=e
this.c=f},
QN:function QN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZo:function aZo(d,e){this.a=d
this.b=e},
aZl:function aZl(d){this.a=d},
aZn:function aZn(d){this.a=d},
aZm:function aZm(d){this.a=d},
aZp:function aZp(d){this.a=d},
du3(d){return new B.w2(d,A.A(y.N,y.F),new A.ae(A.iY(0,0),0,!1))},
cWj(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dz(d,new B.cOU(),y.N).by(0)
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
bCZ:function bCZ(){},
bD_:function bD_(d){this.a=d},
bCX:function bCX(){},
bCY:function bCY(){},
bD0:function bD0(d,e){this.a=d
this.b=e},
bD1:function bD1(d){this.a=d},
bCW:function bCW(d){this.a=d},
bD4:function bD4(){},
bD5:function bD5(){},
bD2:function bD2(){},
bD3:function bD3(){},
cOU:function cOU(){},
a_2(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_2=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.bZ0)
x=1
break}x=3
return A.d(A.cn(null,new B.cOg(A.e3(h,0,A.eT(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_2)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(K.wq(d,e,f,u.c,u.d,g,t),$async$a_2)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_2,w)},
B9:function B9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cOg:function cOg(d){this.a=d},
cOf:function cOf(d,e){this.a=d
this.b=e},
cQE(d,e,f,g,h,i,j){return new B.anr(f,d,i,j,g,h,e,null)},
anr:function anr(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZv:function aZv(){},
aZs:function aZs(d){this.a=d},
aZu:function aZu(d){this.a=d},
aZt:function aZt(){},
cZe(d){var x,w,v,u
for(x=new A.cb(d),w=y.V,x=new A.ak(x,x.gA(0),w.i("ak<U.E>")),w=w.i("U.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDS[C.i.ar(v,5)]},
zD:function zD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
QO:function QO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aZq:function aZq(d,e){this.a=d
this.b=e},
aZr:function aZr(d,e){this.a=d
this.b=e},
QQ:function QQ(d,e){this.c=d
this.a=e},
bmS:function bmS(d,e){this.a=d
this.b=e},
aXf:function aXf(){},
aXg:function aXg(){},
al6:function al6(){},
In:function In(){},
aZZ:function aZZ(d,e){this.a=d
this.b=e},
abH:function abH(){},
d1Q(d,e,f,g,h,i,j,k){return new B.a4U(A.dFw(B.dGd(),i,j),d,g,h,e,A.akx(e),f,i.i("@<0>").b6(j).b6(k).i("a4U<1,2,3>"))},
bih(d,e,f,g,h,i,j,k,l,m){return new A.xL(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("xL<1,2>"))},
a4U:function a4U(d,e,f,g,h,i,j,k){var _=this
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
G=c[373]
H=c[172]
I=c[324]
K=c[152]
E=c[229]
L=c[263]
M=c[180]
N=c[419]
B=a.updateHolder(c[117],B)
D=c[237]
O=c[371]
P=c[386]
Q=c[398]
R=c[245]
S=c[258]
T=c[418]
F=c[332]
B.Ik.prototype={
gap(d){return this.c}}
B.NI.prototype={
u(d){var x=null,w=A.a0(18),v=A.a0(18)
return A.eJ(!1,w,!0,new A.R(C.hr,A.B(A.a([A.D(x,A.b2(this.c,$.ap,x,x,26),C.r,x,x,new A.O(C.ac,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aE,A.i(this.d,x,x,x,x,C.j4,x,x,x)],y.p),C.w,C.j,C.L,0,C.v),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bI8(this,d),x,x,x,x,x,x,x)}}
B.Z3.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bx4[x]
v=new A.b4(14,14)
s.push(A.eJ(!1,new A.cf(v,v,v,v),!0,new A.R(C.qi,A.arF(w,C.ke,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cuO(d,w),u,u,u,u,u,u,u))}return new A.R(D.at4,A.B(A.a([D.cdl,C.P,A.Sj(1,s,4,8,8,u,C.dt,!0)],t),C.H,C.j,C.L,0,C.v),u)}}
B.Oh.prototype={
P(){return new B.adp(new A.aI(C.an,$.ac()),D.bz0)}}
B.adp.prototype={
al(){this.aH()
this.Ia("")},
m(){var x=this.d
x.Z$=$.ac()
x.X$=0
this.a7()},
Ia(d){return this.bgN(d)},
bgN(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Ia=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bXt(s))
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
p=A.aiI("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aU9(p,null),$async$Ia)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bp.jU(0,A.ja(A.j8(q.e)).bI(0,q.w),null)),"data"))
s.q(new B.bXu(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bXv(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bXw(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ia,w)},
u(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cN(w,C.a9,!1,w,!0,C.z,w,A.cQ(),x.d,w,w,w,w,w,2,D.aF2,C.a2,!0,w,!0,w,!1,w,C.aI,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTF(),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.at,w,C.b8,w,C.t2,w,w),t=x.r
if(t!=null)t=A.bN(A.i(t,w,w,w,w,C.k3,C.a5,w,w),w,w)
else t=x.f?C.cX:M.a2O(w,C.a2,T.a8K,new B.bXy(x),x.e.length,w,w,!1)
return A.aJ(new A.R(D.at1,A.B(A.a([u,C.aa,A.a6(t,1),C.aE,D.adj],y.p),C.H,C.j,C.m,0,C.v),w),v.a.b*0.62,w)}}
B.QN.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b4(s.c,"asset:"))return A.arF(C.f.bD(s.c,6),C.ke,120,120)
if(p==="image"||p==="gif")return A.dP(r,A.fX(A.a0(16),new A.eA(new A.aP(0,q,0,320),A.kt(s.c,new B.aZm(q),C.bG,r,new B.aZn(q),r,r),r),C.b0),C.a2,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aZo(s,d),r,r,r,r,r,r,!1,C.bd)
p=A.a0(16)
x=s.f
w=x?$.ap:C.ac
v=A.a0(16)
u=A.b2(N.OT,x?C.t:$.ap,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a0,r,r,A.aG(r,r,x?C.t:C.A,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eJ(!1,p,!0,A.D(r,A.Q(A.a([u,C.ak,new A.dL(1,C.bi,t,r),C.bq,A.b2(I.vf,x?C.t:C.S,r,r,18)],y.p),C.w,C.j,C.L,0,r,r),C.r,r,new A.aP(0,q,0,1/0),new A.O(w,r,r,v,r,r,C.y),r,r,r,D.asw,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aZp(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
B.w2.prototype={
d4(){var x=this,w=y.T,v=A.eP(x).H(A.cv($.b8(),new B.bCZ(),y.D,w),w)
A.eP(x).Yr(new B.bD_(x))
if(v==null)return C.a9
w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.M3(0,"typing:"+x.x,C.yg).bya(new B.bD0(x,v),"typing")
w.Q2(0)
x.y=w
x.Q=A.w1(C.fN,new B.bD1(x))
return C.a9},
akj(){var x,w=this,v=w.z
v.ed(v,new B.bCW(new A.ae(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cd(v,v.r,v.e,A.u(v).i("cd<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aT(w.ga2(0))||!C.e.e9(x,J.dhJ(w.ga2(0))))w.sa2(0,x)},
acJ(d){var x,w=this,v=w.y,u=A.eP(w).a1(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ae(Date.now(),0,!1)
if(x.cV(w.as).a<2e6)return
w.as=x
v.ael(0,"typing",A.S(["id",t,"name",d],y.N,y.z),C.GN).cC(new B.bD4(),new B.bD5(),y.H)},
d2(d){var x=this.y,w=A.eP(this).a1(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ae(A.iY(0,0),0,!1)
x.ael(0,"typing",A.S(["id",v,"stop",!0],y.N,y.z),C.GN).cC(new B.bD2(),new B.bD3(),y.H)}}
B.B9.prototype={}
B.anr.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cF(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a0,r,r,L.Iv,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a0,r,r,A.aG(r,r,s.f?C.e8:C.S,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.Q(A.a([q,C.aq,A.a6(A.B(w,C.H,C.j,C.L,0,C.v),1)],x),C.w,C.j,C.m,0,r,r)
q=A.a([new A.cY(0,C.bl,C.A.cd(0.06),C.Ge,14)],y.E)
w=A.aw(d,C.b5,y.w).w
v=new B.aZv().$3(C.lI,"Voltar",new B.aZs(d))
t=s.r
v=A.a([v,C.aq,A.a6(t==null?u:A.aU(u,t,r),1)],x)
C.e.n(v,A.a([C.ak,A.Eg(A.D(C.K,P.Ee,C.r,r,r,C.cG,r,44,r,r,r,r,44),r,new B.aZt(),new B.aZu(s),r,D.bPK,"Mais op\xe7\xf5es",y.N)],x))
return A.D(r,A.B(A.a([A.Q(v,C.w,C.j,C.m,0,r,r)],x),C.J,C.j,C.L,0,C.v),C.r,r,r,new A.O(C.t,r,r,r,q,r,C.y),r,r,r,new A.a2(16,w.r.b+10,16,12),r,r,r)},
gap(d){return this.c}}
B.zD.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.R(E.N4,A.i(v,x,x,x,x,A.aG(x,x,B.cZe(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,x,A.aG(x,x,s?C.t:C.A,x,x,x,x,x,x,x,x,15,x,x,C.bh,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.eA(new A.aP(0,w.a.a*0.78,0,1/0),A.D(x,A.B(o,C.H,C.j,C.L,0,C.v),C.r,x,x,new A.O(r,x,x,new A.cf(F.y9,F.y9,new A.b4(q,q),new A.b4(p,p)),x,x,C.y),x,x,x,new A.a2(14,t,14,10),x,x,x),x)}}
B.QO.prototype={
ai6(d){if(!A.u8(this.c.a.a)){d.O(y.q).f.a4(D.bZf)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.n(u,A.a([A.aU(A.D(C.K,C.Pk,C.r,w,w,C.cG,w,44,w,w,w,w,44),x.e,w),C.ak],v))
v=A.a0(999)
u.push(A.a6(A.D(C.bk,A.cN(w,C.a9,!1,w,!0,C.z,w,A.cQ(),x.c,w,w,w,w,w,2,A.jh(w,C.ca,w,C.a_,w,w,w,w,!0,C.ca,w,w,w,w,w,w,!1,w,w,w,w,C.ca,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a2,!0,w,!0,w,!1,w,C.aI,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aZq(x,d),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,C.ha,!0,C.at,w,C.b8,w,C.a9I,w,w),C.r,w,w,new A.O(C.ac,w,w,v,w,w,C.y),w,44,w,C.bL,w,w,w),1))
u.push(C.ak)
u.push(A.aU(A.D(C.K,D.aI8,C.r,w,w,C.cG,w,44,w,w,w,w,44),new B.aZr(x,d),w))
return A.D(w,A.bE(!0,new A.R(R.Nn,A.Q(u,C.w,C.j,C.m,0,w,w),w),w,Q.N5,!1),C.r,C.t,w,w,w,w,w,w,w,w,w)}}
B.QQ.prototype={
u(d){var x=null,w=this.c
return A.cQm(C.fE,w==null?D.bXo:new A.R(D.at8,A.bN(A.i(w,x,x,x,x,C.hM,x,x,x),x,x),x),C.cl,C.aD)}}
B.bmS.prototype={
I(){return"PopupMenuPosition."+this.b}}
B.aXf.prototype={
$1(d){return A.mT(d,null,!0,null,null,y.S,y.z)},
gWZ(d){return D.ahh},
ayg(d,e,f,g,h){return this.gWZ(this).$3$1(e,f,g,h)}}
B.aXg.prototype={
$3$1(d,e,f,g){return B.d1Q(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.al6.prototype={}
B.In.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aZZ(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.abH.prototype={}
B.a4U.prototype={}
var z=a.updateTypes(["Z3(N)","Oh(N)","F<~>(c)","t<c>()","w2(c)","xL<0^,1^>(0^(){$allTransitiveDependencies!z<h2>?,argument!H?,dependencies!z<h2>?,from!kH?,isAutoDispose!y,name!c?,retry!bo?(v,H)?})<fb<1^>,H?>"])
B.cJ8.prototype={
$1(d){var x=null,w=y.p
return new A.R(D.atB,A.B(A.a([A.Q(A.a([new B.NI(C.jL,"Foto","photo",x),new B.NI(D.aC8,"Ficheiro","file",x),new B.NI(S.jI,"Sticker","sticker",x),new B.NI(D.aC1,"GIF","gif",x)],w),C.w,C.FV,C.m,0,x,x)],w),C.w,C.j,C.L,0,C.v),x)},
$S:68}
B.cJ9.prototype={
$1(d){return D.coM},
$S:z+0}
B.cJa.prototype={
$1(d){return D.cm1},
$S:z+1}
B.bI8.prototype={
$0(){return A.aq(this.b,!1).aj(this.a.e)},
$S:0}
B.cuO.prototype={
$0(){return A.aq(this.a,!1).aj(this.b)},
$S:0}
B.bXt.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bXu.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bk(this.b,y.P),v=A.u(w),w=new A.ak(w,w.gA(w),v.i("ak<U.E>")),u=y.f,v=v.i("U.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bw(s,new A.a3(A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bXv.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bXw.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bXy.prototype={
$2(d,e){var x=null,w=this.a
return A.eJ(!1,x,!0,A.fX(A.a0(10),A.kt(w.e[e].a,x,C.bG,x,x,x,x),C.b0),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bXx(w,d,e),x,x,x,x,x,x,x)},
$S:467}
B.bXx.prototype={
$0(){return A.aq(this.b,!1).aj(this.a.e[this.c].b)},
$S:0}
B.aZo.prototype={
$0(){var x=y.H
return A.aq(this.b,!1).ie(A.to(new B.aZl(this.a),null,x),x)},
$S:0}
B.aZl.prototype={
$1(d){var x=null
return A.kr(A.cQo(C.al,x,C.t,x),C.al,A.bN(H.cRO(C.a_,A.qH(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1338}
B.aZn.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1339}
B.aZm.prototype={
$3(d,e,f){var x=null
return A.D(x,D.aDP,C.r,C.ac,x,x,x,120,x,x,x,x,this.a)},
$S:63}
B.aZp.prototype={
$0(){return A.z6(A.dr(this.a.c,0,null),C.qA,null)},
$S:0}
B.bCZ.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.bD_.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yf(x).cC(new B.bCX(),new B.bCY(),y.H)}},
$S:0}
B.bCX.prototype={
$1(d){},
$S:120}
B.bCY.prototype={
$1(d){},
$S:13}
B.bD0.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e6(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a3(v,new A.ae(Date.now(),0,!1).ee(5e6)))}u.akj()},
$S:247}
B.bD1.prototype={
$1(d){return this.a.akj()},
$S:72}
B.bCW.prototype={
$2(d,e){return e.b.eR(this.a)},
$S:1340}
B.bD4.prototype={
$1(d){},
$S:213}
B.bD5.prototype={
$1(d){},
$S:13}
B.bD2.prototype={
$1(d){},
$S:213}
B.bD3.prototype={
$1(d){},
$S:13}
B.cOU.prototype={
$1(d){return C.e.gM(d.split(" "))},
$S:24}
B.cOg.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a0,r,r,C.Iu,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r,r)
p.push(A.j0(!1,C.a_,r,r,!0,r,r,r,!0,r,D.aDD,r,r,r,r,new B.cOf(d,u),!1,r,r,r,r,r,s,r,t,r,E.Ps,r))}return A.bE(!0,new A.R(D.at5,A.B(A.a([D.ceo,C.as,D.c9h,C.X,new A.dL(1,C.bi,A.cZ(p,r,r,r,r,!1,C.a1,!0),r)],q),C.H,C.j,C.L,0,C.v),r),r,C.a_,!0)},
$S:47}
B.cOf.prototype={
$0(){return A.aq(this.a,!1).aj(this.b)},
$S:0}
B.aZv.prototype={
$3(d,e,f){var x=null
return A.kR(A.aU(A.D(C.K,d,C.r,x,x,C.cG,x,44,x,x,x,x,44),f,x),x,e)},
$S:1341}
B.aZs.prototype={
$0(){return A.aq(this.a,!1).iz()},
$S:0}
B.aZu.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aZt.prototype={
$1(d){return D.bxZ},
$S:61}
B.aZq.prototype={
$1(d){return this.a.ai6(this.b)},
$S:3}
B.aZr.prototype={
$0(){return this.a.ai6(this.b)},
$S:0}
B.aZZ.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("In.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.adp.prototype,"gaTF","Ia",2)
w(B,"dH9","du3",4)
v(B.w2.prototype,"giJ","d4",3)
u(B,"dGd",1,function(){return{$allTransitiveDependencies:C.cH,argument:C.cH,dependencies:C.cH,from:C.cH,isAutoDispose:C.cH,name:C.cH,retry:C.cH}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bih",function(d,e,f,g,h,i,j,k){return B.bih(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bih(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bih(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.H,[B.Ik,B.B9,B.aXf,B.aXg,B.al6])
w(A.bx,[B.cJ8,B.cJ9,B.cJa,B.aZl,B.aZn,B.aZm,B.bCZ,B.bCX,B.bCY,B.bD0,B.bD1,B.bD4,B.bD5,B.bD2,B.bD3,B.cOU,B.cOg,B.aZv,B.aZu,B.aZt,B.aZq])
w(A.L,[B.NI,B.Z3,B.QN,B.anr,B.zD,B.QO,B.QQ])
w(A.bR,[B.bI8,B.cuO,B.bXt,B.bXu,B.bXv,B.bXw,B.bXx,B.aZo,B.aZp,B.bD_,B.cOf,B.aZs,B.aZr,B.aZZ])
v(B.Oh,A.J)
v(B.adp,A.a_)
w(A.cR,[B.bXy,B.bCW])
v(B.w2,A.fb)
v(B.bmS,A.fr)
v(B.abH,A.kH)
v(B.In,B.abH)
v(B.a4U,B.In)
x(B.abH,B.al6)})()
A.br(b.typeUniverse,JSON.parse('{"Z3":{"L":[],"e":[],"f":[]},"Oh":{"J":[],"e":[],"f":[]},"NI":{"L":[],"e":[],"f":[]},"adp":{"a_":["Oh"]},"QN":{"L":[],"e":[],"f":[]},"w2":{"fb":["t<c>"]},"anr":{"L":[],"e":[],"f":[]},"zD":{"L":[],"e":[],"f":[]},"QO":{"L":[],"e":[],"f":[]},"QQ":{"L":[],"e":[],"f":[]},"In":{"kH":[],"h2":[],"GY":[],"lF":[]},"a4U":{"In":["1","2","2","3","2","xL<1,2>"],"kH":[],"h2":[],"GY":[],"lF":[],"In.0":"1"}}'))
A.Pp(b.typeUniverse,JSON.parse('{"al6":5,"abH":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cG"),V:x("cb"),E:x("r<cY>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dn"),S:x("fb<@>"),F:x("+(c,ae)"),C:x("B9"),N:x("c"),q:x("ds"),z:x("@"),r:x("v"),B:x("Ik?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c8_=new A.E("Powered by GIPHY",null,G.It,null,null,null,null,null,null,null,null)
D.adj=new A.d4(C.dS,null,null,D.c8_,null)
D.KE=new B.aXf()
D.ahh=new B.aXg()
D.asw=new A.a2(12,10,14,10)
D.at1=new A.a2(16,16,16,12)
D.at4=new A.a2(16,16,16,24)
D.at5=new A.a2(16,16,16,8)
D.at8=new A.a2(16,2,16,8)
D.atB=new A.a2(20,18,20,24)
D.aC1=new A.aV(57404,"HeroiconsSolid",null,!1)
D.aC8=new A.aV(57436,"HeroiconsSolid",null,!1)
D.aDD=new A.ba(C.fm,null,C.S,null,null,null)
D.aDP=new A.ba(C.jL,null,C.S,null,null,null)
D.aCU=new A.ba(C.vk,null,null,null,null,null)
D.aF2=new A.dT(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aI8=new A.qN("M12 19V5M5 12l7-7 7 7",18,C.t,2.4,!1,C.d0,null)
D.bx4=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bPF=new A.jH("report",!0,O.aaV,null,A.w("jH<c>"))
D.bxZ=x([D.bPF],A.w("r<pz<c>>"))
D.bzn=x([],A.w("r<d5t>"))
D.bz0=x([],y.L)
D.amK=new A.W(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.anz=new A.W(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.aoC=new A.W(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.an9=new A.W(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bDS=x([D.amK,C.e8,D.anz,D.aoC,D.an9],A.w("r<W>"))
D.bPK=new B.bmS(1,"under")
D.bXo=new A.c8(1/0,null,null,null)
D.ceA=new A.E("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bZ0=new A.bI(D.ceA,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cfE=new A.E("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bZf=new A.bI(D.cfE,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.ce0=new A.E("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bZz=new A.bI(D.ce0,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.c9h=new A.E("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.W,null,null,null,null,null,null,null,null)
D.cdl=new A.E("Stickers",null,C.ao,null,null,null,null,null,null,null,null)
D.ceo=new A.E("Que mensagem queres denunciar?",null,C.fz,null,null,null,null,null,null,null,null)
D.cm1=new B.Oh(null)
D.coM=new B.Z3(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUD","CH",()=>D.KE.ayg(0,B.dH9(),A.w("w2"),A.w("t<c>"),y.N))})()};
(a=>{a["9xzheSzdaZpWocf/6XoppRxEWKY="]=a.current})($__dart_deferred_initializers__);