((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,E,L,M,N,B={
dBX(){var x,w=$.Q0(),v=J.nH(16,y.N)
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
s=u+"/"+B.dBX()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.rh(s,d,new A.uX(!1,f)),$async$aTN)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Cp(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTN,w)},
d8t(d){var x,w=C.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.cn(null,new B.cJa(),!1,d,!0,!1,null,l),$async$rC)
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
return A.d(new A.lD().YX(85,2048,C.fo),$async$rC)
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
return A.d(B.aTN(t,s,B.d8t(s)),$async$rC)
case 12:v=new j.Il(f,r,s)
x=1
break
case 7:x=13
return A.d($.dcO().y9(D.bzm,null,null),$async$rC)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rC)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.bZA)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.c4(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbtg(p))
if(C.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aTN(t,l,B.d8t(l)),$async$rC)
case 15:v=new j.Il(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cn(null,new B.cJb(),!1,d,!0,!1,null,l),$async$rC)
case 16:n=f
v=n==null?null:new B.Il("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cn(null,new B.cJc(),!1,d,!0,!0,null,l),$async$rC)
case 17:m=f
v=m==null?null:new B.Il(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rC,w)},
Il:function Il(d,e,f){this.a=d
this.b=e
this.c=f},
cJa:function cJa(){},
cJb:function cJb(){},
cJc:function cJc(){},
NJ:function NJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bIb:function bIb(d,e){this.a=d
this.b=e},
Z4:function Z4(d){this.a=d},
cuQ:function cuQ(d,e){this.a=d
this.b=e},
Oi:function Oi(d){this.a=d},
adq:function adq(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bXw:function bXw(d){this.a=d},
bXx:function bXx(d,e){this.a=d
this.b=e},
bXy:function bXy(d){this.a=d},
bXz:function bXz(d){this.a=d},
bXB:function bXB(d){this.a=d},
bXA:function bXA(d,e,f){this.a=d
this.b=e
this.c=f},
QN:function QN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZr:function aZr(d,e){this.a=d
this.b=e},
aZo:function aZo(d){this.a=d},
aZq:function aZq(d){this.a=d},
aZp:function aZp(d){this.a=d},
aZs:function aZs(d){this.a=d},
dud(d){return new B.w2(d,A.A(y.N,y.F),new A.ae(A.iY(0,0),0,!1))},
cWl(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dz(d,new B.cOW(),y.N).by(0)
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
bD1:function bD1(){},
bD2:function bD2(d){this.a=d},
bD_:function bD_(){},
bD0:function bD0(){},
bD3:function bD3(d,e){this.a=d
this.b=e},
bD4:function bD4(d){this.a=d},
bCZ:function bCZ(d){this.a=d},
bD7:function bD7(){},
bD8:function bD8(){},
bD5:function bD5(){},
bD6:function bD6(){},
cOW:function cOW(){},
a_3(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_3=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.bZ1)
x=1
break}x=3
return A.d(A.cn(null,new B.cOi(A.e3(h,0,A.eT(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_3)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(K.wq(d,e,f,u.c,u.d,g,t),$async$a_3)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_3,w)},
B9:function B9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cOi:function cOi(d){this.a=d},
cOh:function cOh(d,e){this.a=d
this.b=e},
cQG(d,e,f,g,h,i,j){return new B.ant(f,d,i,j,g,h,e,null)},
ant:function ant(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZy:function aZy(){},
aZv:function aZv(d){this.a=d},
aZx:function aZx(d){this.a=d},
aZw:function aZw(){},
cZg(d){var x,w,v,u
for(x=new A.cc(d),w=y.V,x=new A.ak(x,x.gA(0),w.i("ak<U.E>")),w=w.i("U.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDR[C.i.ar(v,5)]},
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
aZt:function aZt(d,e){this.a=d
this.b=e},
aZu:function aZu(d,e){this.a=d
this.b=e},
QQ:function QQ(d,e){this.c=d
this.a=e},
bmV:function bmV(d,e){this.a=d
this.b=e},
aXi:function aXi(){},
aXj:function aXj(){},
al8:function al8(){},
Io:function Io(){},
b_1:function b_1(d,e){this.a=d
this.b=e},
abI:function abI(){},
d1S(d,e,f,g,h,i,j,k){return new B.a4V(A.dFG(B.dGn(),i,j),d,g,h,e,A.akz(e),f,i.i("@<0>").b6(j).b6(k).i("a4V<1,2,3>"))},
bik(d,e,f,g,h,i,j,k,l,m){return new A.xL(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("xL<1,2>"))},
a4V:function a4V(d,e,f,g,h,i,j,k){var _=this
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
P=c[387]
Q=c[398]
R=c[245]
S=c[258]
T=c[418]
F=c[332]
B.Il.prototype={
gap(d){return this.c}}
B.NJ.prototype={
u(d){var x=null,w=A.a0(18),v=A.a0(18)
return A.eF(!1,w,!0,new A.Q(C.hr,A.B(A.a([A.D(x,A.b2(this.c,$.ap,x,x,26),C.r,x,x,new A.O(C.ac,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aF,A.i(this.d,x,x,x,x,C.j4,x,x,x)],y.p),C.w,C.j,C.K,0,C.v),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bIb(this,d),x,x,x,x,x,x,x)}}
B.Z4.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bx3[x]
v=new A.b4(14,14)
s.push(A.eF(!1,new A.cf(v,v,v,v),!0,new A.Q(C.qi,A.arH(w,C.kd,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cuQ(d,w),u,u,u,u,u,u,u))}return new A.Q(D.at3,A.B(A.a([D.cdk,C.P,A.Sj(1,s,4,8,8,u,C.ds,!0)],t),C.G,C.j,C.K,0,C.v),u)}}
B.Oi.prototype={
P(){return new B.adq(new A.aI(C.ao,$.ac()),D.bz_)}}
B.adq.prototype={
al(){this.aH()
this.Ia("")},
m(){var x=this.d
x.Z$=$.ac()
x.X$=0
this.a7()},
Ia(d){return this.bgP(d)},
bgP(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Ia=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bXw(s))
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
p=A.aiK("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aU9(p,null),$async$Ia)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bq.jU(0,A.ja(A.j8(q.e)).bI(0,q.w),null)),"data"))
s.q(new B.bXx(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bXy(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bXz(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ia,w)},
u(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cN(w,C.a9,!1,w,!0,C.z,w,A.cQ(),x.d,w,w,w,w,w,2,D.aF1,C.a2,!0,w,!0,w,!1,w,C.aJ,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTF(),w,!1,w,w,!1,w,!0,w,C.aw,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.au,w,C.b8,w,C.t2,w,w),t=x.r
if(t!=null)t=A.bN(A.i(t,w,w,w,w,C.k2,C.a5,w,w),w,w)
else t=x.f?C.cW:M.a2P(w,C.a2,T.a8L,new B.bXB(x),x.e.length,w,w,!1)
return A.aJ(new A.Q(D.at0,A.B(A.a([u,C.aa,A.a6(t,1),C.aF,D.adi],y.p),C.G,C.j,C.m,0,C.v),w),v.a.b*0.62,w)}}
B.QN.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b4(s.c,"asset:"))return A.arH(C.f.bD(s.c,6),C.kd,120,120)
if(p==="image"||p==="gif")return A.dP(r,A.fX(A.a0(16),new A.eA(new A.aP(0,q,0,320),A.kt(s.c,new B.aZp(q),C.bG,r,new B.aZq(q),r,r),r),C.b1),C.a2,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aZr(s,d),r,r,r,r,r,r,!1,C.bd)
p=A.a0(16)
x=s.f
w=x?$.ap:C.ac
v=A.a0(16)
u=A.b2(N.OT,x?C.t:$.ap,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a0,r,r,A.aG(r,r,x?C.t:C.A,r,r,r,r,r,r,r,r,13,r,r,C.J,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eF(!1,p,!0,A.D(r,A.R(A.a([u,C.ak,new A.dL(1,C.bi,t,r),C.br,A.b2(I.ve,x?C.t:C.S,r,r,18)],y.p),C.w,C.j,C.K,0,r,r),C.r,r,new A.aP(0,q,0,1/0),new A.O(w,r,r,v,r,r,C.y),r,r,r,D.asw,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aZs(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
B.w2.prototype={
d4(){var x=this,w=y.T,v=A.eP(x).H(A.cv($.b8(),new B.bD1(),y.D,w),w)
A.eP(x).Ys(new B.bD2(x))
if(v==null)return C.a9
w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.M3(0,"typing:"+x.x,C.yf).byc(new B.bD3(x,v),"typing")
w.Q2(0)
x.y=w
x.Q=A.w1(C.hp,new B.bD4(x))
return C.a9},
akk(){var x,w=this,v=w.z
v.ed(v,new B.bCZ(new A.ae(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.ce(v,v.r,v.e,A.u(v).i("ce<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aS(w.ga2(0))||!C.e.e6(x,J.dhT(w.ga2(0))))w.sa2(0,x)},
acK(d){var x,w=this,v=w.y,u=A.eP(w).a1(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ae(Date.now(),0,!1)
if(x.cV(w.as).a<2e6)return
w.as=x
v.aem(0,"typing",A.S(["id",t,"name",d],y.N,y.z),C.GM).cC(new B.bD7(),new B.bD8(),y.H)},
d2(d){var x=this.y,w=A.eP(this).a1(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ae(A.iY(0,0),0,!1)
x.aem(0,"typing",A.S(["id",v,"stop",!0],y.N,y.z),C.GM).cC(new B.bD5(),new B.bD6(),y.H)}}
B.B9.prototype={}
B.ant.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cF(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a0,r,r,L.Iv,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a0,r,r,A.aG(r,r,s.f?C.e8:C.S,r,r,r,r,r,r,r,r,12,r,r,C.J,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.R(A.a([q,C.ar,A.a6(A.B(w,C.G,C.j,C.K,0,C.v),1)],x),C.w,C.j,C.m,0,r,r)
q=A.a([new A.cY(0,C.bl,C.A.cd(0.06),C.Gd,14)],y.E)
w=A.aw(d,C.b5,y.w).w
v=new B.aZy().$3(C.lH,"Voltar",new B.aZv(d))
t=s.r
v=A.a([v,C.ar,A.a6(t==null?u:A.aU(u,t,r),1)],x)
C.e.n(v,A.a([C.ak,A.Eg(A.D(C.L,P.Ed,C.r,r,r,C.cG,r,44,r,r,r,r,44),r,new B.aZw(),new B.aZx(s),r,D.bPK,"Mais op\xe7\xf5es",y.N)],x))
return A.D(r,A.B(A.a([A.R(v,C.w,C.j,C.m,0,r,r)],x),C.I,C.j,C.K,0,C.v),C.r,r,r,new A.O(C.t,r,r,r,q,r,C.y),r,r,r,new A.a2(16,w.r.b+10,16,12),r,r,r)},
gap(d){return this.c}}
B.zD.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.Q(E.N3,A.i(v,x,x,x,x,A.aG(x,x,B.cZg(v),x,x,x,x,x,x,x,x,12,x,x,C.J,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,x,A.aG(x,x,s?C.t:C.A,x,x,x,x,x,x,x,x,15,x,x,C.bh,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.eA(new A.aP(0,w.a.a*0.78,0,1/0),A.D(x,A.B(o,C.G,C.j,C.K,0,C.v),C.r,x,x,new A.O(r,x,x,new A.cf(F.y8,F.y8,new A.b4(q,q),new A.b4(p,p)),x,x,C.y),x,x,x,new A.a2(14,t,14,10),x,x,x),x)}}
B.QO.prototype={
ai7(d){if(!A.u8(this.c.a.a)){d.O(y.q).f.a4(D.bZg)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.n(u,A.a([A.aU(A.D(C.L,C.Pk,C.r,w,w,C.cG,w,44,w,w,w,w,44),x.e,w),C.ak],v))
v=A.a0(999)
u.push(A.a6(A.D(C.bk,A.cN(w,C.a9,!1,w,!0,C.z,w,A.cQ(),x.c,w,w,w,w,w,2,A.jh(w,C.ca,w,C.a_,w,w,w,w,!0,C.ca,w,w,w,w,w,w,!1,w,w,w,w,C.ca,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a2,!0,w,!0,w,!1,w,C.aJ,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aZt(x,d),w,!1,w,w,!1,w,!0,w,C.aw,w,w,w,w,w,w,w,w,w,w,w,C.h9,!0,C.au,w,C.b8,w,C.a9J,w,w),C.r,w,w,new A.O(C.ac,w,w,v,w,w,C.y),w,44,w,C.bL,w,w,w),1))
u.push(C.ak)
u.push(A.aU(A.D(C.L,D.aI7,C.r,w,w,C.cG,w,44,w,w,w,w,44),new B.aZu(x,d),w))
return A.D(w,A.bC(!0,new A.Q(R.Nm,A.R(u,C.w,C.j,C.m,0,w,w),w),w,Q.N4,!1),C.r,C.t,w,w,w,w,w,w,w,w,w)}}
B.QQ.prototype={
u(d){var x=null,w=this.c
return A.cQo(C.fE,w==null?D.bXq:new A.Q(D.at7,A.bN(A.i(w,x,x,x,x,C.hM,x,x,x),x,x),x),C.cl,C.aE)}}
B.bmV.prototype={
I(){return"PopupMenuPosition."+this.b}}
B.aXi.prototype={
$1(d){return A.mU(d,null,!0,null,null,y.S,y.z)},
gX_(d){return D.ahh},
ayg(d,e,f,g,h){return this.gX_(this).$3$1(e,f,g,h)}}
B.aXj.prototype={
$3$1(d,e,f,g){return B.d1S(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.al8.prototype={}
B.Io.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.b_1(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.abI.prototype={}
B.a4V.prototype={}
var z=a.updateTypes(["Z4(N)","Oi(N)","F<~>(c)","t<c>()","w2(c)","xL<0^,1^>(0^(){$allTransitiveDependencies!z<h2>?,argument!I?,dependencies!z<h2>?,from!kH?,isAutoDispose!y,name!c?,retry!bo?(v,I)?})<fb<1^>,I?>"])
B.cJa.prototype={
$1(d){var x=null,w=y.p
return new A.Q(D.atA,A.B(A.a([A.R(A.a([new B.NJ(C.jK,"Foto","photo",x),new B.NJ(D.aC7,"Ficheiro","file",x),new B.NJ(S.jH,"Sticker","sticker",x),new B.NJ(D.aC0,"GIF","gif",x)],w),C.w,C.FU,C.m,0,x,x)],w),C.w,C.j,C.K,0,C.v),x)},
$S:72}
B.cJb.prototype={
$1(d){return D.coL},
$S:z+0}
B.cJc.prototype={
$1(d){return D.cm0},
$S:z+1}
B.bIb.prototype={
$0(){return A.aq(this.b,!1).aj(this.a.e)},
$S:0}
B.cuQ.prototype={
$0(){return A.aq(this.a,!1).aj(this.b)},
$S:0}
B.bXw.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bXx.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bk(this.b,y.P),v=A.u(w),w=new A.ak(w,w.gA(w),v.i("ak<U.E>")),u=y.f,v=v.i("U.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bw(s,new A.a3(A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bXy.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bXz.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bXB.prototype={
$2(d,e){var x=null,w=this.a
return A.eF(!1,x,!0,A.fX(A.a0(10),A.kt(w.e[e].a,x,C.bG,x,x,x,x),C.b1),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bXA(w,d,e),x,x,x,x,x,x,x)},
$S:343}
B.bXA.prototype={
$0(){return A.aq(this.b,!1).aj(this.a.e[this.c].b)},
$S:0}
B.aZr.prototype={
$0(){var x=y.H
return A.aq(this.b,!1).ie(A.to(new B.aZo(this.a),null,x),x)},
$S:0}
B.aZo.prototype={
$1(d){var x=null
return A.kr(A.cQq(C.al,x,C.t,x),C.al,A.bN(H.cRQ(C.a_,A.qH(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1339}
B.aZq.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1340}
B.aZp.prototype={
$3(d,e,f){var x=null
return A.D(x,D.aDO,C.r,C.ac,x,x,x,120,x,x,x,x,this.a)},
$S:65}
B.aZs.prototype={
$0(){return A.z6(A.dr(this.a.c,0,null),C.qA,null)},
$S:0}
B.bD1.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.bD2.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yf(x).cC(new B.bD_(),new B.bD0(),y.H)}},
$S:0}
B.bD_.prototype={
$1(d){},
$S:120}
B.bD0.prototype={
$1(d){},
$S:14}
B.bD3.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e7(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a3(v,new A.ae(Date.now(),0,!1).ee(5e6)))}u.akk()},
$S:207}
B.bD4.prototype={
$1(d){return this.a.akk()},
$S:70}
B.bCZ.prototype={
$2(d,e){return e.b.eR(this.a)},
$S:1341}
B.bD7.prototype={
$1(d){},
$S:244}
B.bD8.prototype={
$1(d){},
$S:14}
B.bD5.prototype={
$1(d){},
$S:244}
B.bD6.prototype={
$1(d){},
$S:14}
B.cOW.prototype={
$1(d){return C.e.gM(d.split(" "))},
$S:24}
B.cOi.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a0,r,r,C.Iu,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r,r)
p.push(A.j0(!1,C.a_,r,r,!0,r,r,r,!0,r,D.aDC,r,r,r,r,new B.cOh(d,u),!1,r,r,r,r,r,s,r,t,r,E.Ps,r))}return A.bC(!0,new A.Q(D.at4,A.B(A.a([D.ch9,C.at,D.c9b,C.X,new A.dL(1,C.bi,A.cZ(p,r,r,r,r,!1,C.a1,!0),r)],q),C.G,C.j,C.K,0,C.v),r),r,C.a_,!0)},
$S:44}
B.cOh.prototype={
$0(){return A.aq(this.a,!1).aj(this.b)},
$S:0}
B.aZy.prototype={
$3(d,e,f){var x=null
return A.kR(A.aU(A.D(C.L,d,C.r,x,x,C.cG,x,44,x,x,x,x,44),f,x),x,e)},
$S:1342}
B.aZv.prototype={
$0(){return A.aq(this.a,!1).iz()},
$S:0}
B.aZx.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aZw.prototype={
$1(d){return D.bxY},
$S:54}
B.aZt.prototype={
$1(d){return this.a.ai7(this.b)},
$S:3}
B.aZu.prototype={
$0(){return this.a.ai7(this.b)},
$S:0}
B.b_1.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Io.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.adq.prototype,"gaTF","Ia",2)
w(B,"dHj","dud",4)
v(B.w2.prototype,"giK","d4",3)
u(B,"dGn",1,function(){return{$allTransitiveDependencies:C.cH,argument:C.cH,dependencies:C.cH,from:C.cH,isAutoDispose:C.cH,name:C.cH,retry:C.cH}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bik",function(d,e,f,g,h,i,j,k){return B.bik(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bik(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bik(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.I,[B.Il,B.B9,B.aXi,B.aXj,B.al8])
w(A.bx,[B.cJa,B.cJb,B.cJc,B.aZo,B.aZq,B.aZp,B.bD1,B.bD_,B.bD0,B.bD3,B.bD4,B.bD7,B.bD8,B.bD5,B.bD6,B.cOW,B.cOi,B.aZy,B.aZx,B.aZw,B.aZt])
w(A.L,[B.NJ,B.Z4,B.QN,B.ant,B.zD,B.QO,B.QQ])
w(A.bR,[B.bIb,B.cuQ,B.bXw,B.bXx,B.bXy,B.bXz,B.bXA,B.aZr,B.aZs,B.bD2,B.cOh,B.aZv,B.aZu,B.b_1])
v(B.Oi,A.K)
v(B.adq,A.a_)
w(A.cR,[B.bXB,B.bCZ])
v(B.w2,A.fb)
v(B.bmV,A.fr)
v(B.abI,A.kH)
v(B.Io,B.abI)
v(B.a4V,B.Io)
x(B.abI,B.al8)})()
A.br(b.typeUniverse,JSON.parse('{"Z4":{"L":[],"e":[],"f":[]},"Oi":{"K":[],"e":[],"f":[]},"NJ":{"L":[],"e":[],"f":[]},"adq":{"a_":["Oi"]},"QN":{"L":[],"e":[],"f":[]},"w2":{"fb":["t<c>"]},"ant":{"L":[],"e":[],"f":[]},"zD":{"L":[],"e":[],"f":[]},"QO":{"L":[],"e":[],"f":[]},"QQ":{"L":[],"e":[],"f":[]},"Io":{"kH":[],"h2":[],"GY":[],"lF":[]},"a4V":{"Io":["1","2","2","3","2","xL<1,2>"],"kH":[],"h2":[],"GY":[],"lF":[],"Io.0":"1"}}'))
A.Pq(b.typeUniverse,JSON.parse('{"al8":5,"abI":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cG"),V:x("cc"),E:x("r<cY>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dn"),S:x("fb<@>"),F:x("+(c,ae)"),C:x("B9"),N:x("c"),q:x("ds"),z:x("@"),r:x("v"),B:x("Il?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c7W=new A.E("Powered by GIPHY",null,G.It,null,null,null,null,null,null,null,null)
D.adi=new A.d4(C.dS,null,null,D.c7W,null)
D.KE=new B.aXi()
D.ahh=new B.aXj()
D.asw=new A.a2(12,10,14,10)
D.at0=new A.a2(16,16,16,12)
D.at3=new A.a2(16,16,16,24)
D.at4=new A.a2(16,16,16,8)
D.at7=new A.a2(16,2,16,8)
D.atA=new A.a2(20,18,20,24)
D.aC0=new A.aV(57404,"HeroiconsSolid",null,!1)
D.aC7=new A.aV(57436,"HeroiconsSolid",null,!1)
D.aDC=new A.ba(C.fn,null,C.S,null,null,null)
D.aDO=new A.ba(C.jK,null,C.S,null,null,null)
D.aCT=new A.ba(C.vj,null,null,null,null,null)
D.aF1=new A.dT(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aI7=new A.qN("M12 19V5M5 12l7-7 7 7",18,C.t,2.4,!1,C.d_,null)
D.bx3=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bPF=new A.jH("report",!0,O.aaV,null,A.w("jH<c>"))
D.bxY=x([D.bPF],A.w("r<pz<c>>"))
D.bzm=x([],A.w("r<d5v>"))
D.bz_=x([],y.L)
D.amK=new A.W(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.anz=new A.W(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.aoC=new A.W(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.an9=new A.W(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bDR=x([D.amK,C.e8,D.anz,D.aoC,D.an9],A.w("r<W>"))
D.bPK=new B.bmV(1,"under")
D.bXq=new A.c5(1/0,null,null,null)
D.ceD=new A.E("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bZ1=new A.bI(D.ceD,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cfH=new A.E("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bZg=new A.bI(D.cfH,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.ce4=new A.E("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bZA=new A.bI(D.ce4,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.c9b=new A.E("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.W,null,null,null,null,null,null,null,null)
D.cdk=new A.E("Stickers",null,C.ap,null,null,null,null,null,null,null,null)
D.ch9=new A.E("Que mensagem queres denunciar?",null,C.ej,null,null,null,null,null,null,null,null)
D.cm0=new B.Oi(null)
D.coL=new B.Z4(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUG","CH",()=>D.KE.ayg(0,B.dHj(),A.w("w2"),A.w("t<c>"),y.N))})()};
(a=>{a["m9KMZHdzRV669Ry6xAejX0dwNHI="]=a.current})($__dart_deferred_initializers__);