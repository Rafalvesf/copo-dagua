((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,L,E,M,N,O,B={
dDK(){var x,w=$.Q8(),v=J.nH(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aW(C.j.hX(w.r_(256),16),2,"0")
return C.e.hO(v)},
aUp(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUp=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.T()
q=r.b
q===$&&A.b()
q=q.gbD().e.a
u=(q==null?null:q.r).a
t=C.f.q(e,".")?C.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dDK()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.rf(s,d,new A.v_(!1,f)),$async$aUp)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Cn(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUp,w)},
dab(d){var x,w=C.e.ga5(d.split(".")).toLowerCase()
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
rH(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rH=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.cc(null,new B.cKH(),!1,d,!0,!1,null,l),$async$rH)
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
return A.d(new A.lD().Z0(85,2048,C.ft),$async$rH)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kr(),$async$rH)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.fs(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aUp(t,s,B.dab(s)),$async$rH)
case 12:v=new j.Io(f,r,s)
x=1
break
case 7:x=13
return A.d($.dex().y6(D.bAb,null,null),$async$rH)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rH)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.c_G)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.c4(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbtM(p))
if(C.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aUp(t,l,B.dab(l)),$async$rH)
case 15:v=new j.Io(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cc(null,new B.cKI(),!1,d,!0,!1,null,l),$async$rH)
case 16:n=f
v=n==null?null:new B.Io("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cc(null,new B.cKJ(),!1,d,!0,!0,null,l),$async$rH)
case 17:m=f
v=m==null?null:new B.Io(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rH,w)},
Io:function Io(d,e,f){this.a=d
this.b=e
this.c=f},
cKH:function cKH(){},
cKI:function cKI(){},
cKJ:function cKJ(){},
NO:function NO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bIY:function bIY(d,e){this.a=d
this.b=e},
Zf:function Zf(d){this.a=d},
cwj:function cwj(d,e){this.a=d
this.b=e},
On:function On(d){this.a=d},
adJ:function adJ(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bYu:function bYu(d){this.a=d},
bYv:function bYv(d,e){this.a=d
this.b=e},
bYw:function bYw(d){this.a=d},
bYx:function bYx(d){this.a=d},
bYz:function bYz(d){this.a=d},
bYy:function bYy(d,e,f){this.a=d
this.b=e
this.c=f},
QW:function QW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_1:function b_1(d,e){this.a=d
this.b=e},
aZZ:function aZZ(d){this.a=d},
b_0:function b_0(d){this.a=d},
b__:function b__(d){this.a=d},
b_2:function b_2(d){this.a=d},
dvZ(d){return new B.w6(d,A.D(y.N,y.F),new A.ac(A.j0(0,0),0,!1))},
cY_(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dA(d,new B.cQy(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w6:function w6(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bDB:function bDB(){},
bDC:function bDC(d){this.a=d},
bDz:function bDz(){},
bDA:function bDA(){},
bDD:function bDD(d,e){this.a=d
this.b=e},
bDE:function bDE(d){this.a=d},
bDy:function bDy(d){this.a=d},
bDH:function bDH(){},
bDI:function bDI(){},
bDF:function bDF(){},
bDG:function bDG(){},
cQy:function cQy(){},
a_f(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_f=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.c_7)
x=1
break}x=3
return A.d(A.cc(null,new B.cPV(A.e4(h,0,A.eU(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_f)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(L.wv(d,e,f,u.c,u.d,g,t),$async$a_f)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_f,w)},
Bb:function Bb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cPV:function cPV(d){this.a=d},
cPU:function cPU(d,e){this.a=d
this.b=e},
cSj(d,e,f,g,h,i,j){return new B.anU(f,d,i,j,g,h,e,null)},
anU:function anU(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_8:function b_8(){},
b_5:function b_5(d){this.a=d},
b_7:function b_7(d){this.a=d},
b_6:function b_6(){},
d_V(d){var x,w,v,u
for(x=new A.cd(d),w=y.V,x=new A.ak(x,x.gA(0),w.i("ak<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bEC[C.j.ao(v,5)]},
zI:function zI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
QY:function QY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b_3:function b_3(d,e){this.a=d
this.b=e},
b_4:function b_4(d,e){this.a=d
this.b=e},
R_:function R_(d,e){this.c=d
this.a=e},
Kf:function Kf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aes:function aes(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c6g:function c6g(d,e){this.a=d
this.b=e},
bnu:function bnu(d,e){this.a=d
this.b=e},
aXT:function aXT(){},
aXU:function aXU(){},
alz:function alz(){},
Ir:function Ir(){},
b_C:function b_C(d,e){this.a=d
this.b=e},
ac0:function ac0(){},
d3x(d,e,f,g,h,i,j,k){return new B.a59(A.dHs(B.dI9(),i,j),d,g,h,e,A.al_(e),f,i.i("@<0>").b6(j).b6(k).i("a59<1,2,3>"))},
biU(d,e,f,g,h,i,j,k,l,m){return new A.xP(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("xP<1,2>"))},
a59:function a59(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,P,Q,R,S,T,U,V,F
J=c[1]
A=c[0]
C=c[2]
G=c[400]
H=c[380]
I=c[176]
K=c[331]
L=c[153]
E=c[234]
M=c[269]
N=c[184]
O=c[428]
B=a.updateHolder(c[119],B)
D=c[243]
P=c[378]
Q=c[391]
R=c[404]
S=c[252]
T=c[264]
U=c[180]
V=c[427]
F=c[231]
B.Io.prototype={
gar(d){return this.c}}
B.NO.prototype={
u(d){var x=null,w=A.X(18),v=A.X(18)
return A.eB(!1,w,!0,new A.Q(C.hw,A.B(A.a([A.A(x,A.b2(this.c,$.ar,x,x,26),C.r,x,x,new A.M(C.aa,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aE,A.h(this.d,x,x,x,x,C.hQ,x,x,x)],y.p),C.w,C.i,C.K,0,C.v),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bIY(this,d),x,x,x,x,x,x,x)}}
B.Zf.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bxS[x]
v=new A.b5(14,14)
s.push(A.eB(!1,new A.ci(v,v,v,v),!0,new A.Q(C.qv,A.as9(w,C.kh,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cwj(d,w),u,u,u,u,u,u,u))}return new A.Q(D.atG,A.B(A.a([D.ceF,C.Q,A.Ss(1,s,4,8,8,u,C.dC,!0)],t),C.G,C.i,C.K,0,C.v),u)}}
B.On.prototype={
P(){return new B.adJ(new A.aJ(C.ap,$.ad()),D.bzO)}}
B.adJ.prototype={
ai(){this.aA()
this.Ia("")},
m(){var x=this.d
x.Z$=$.ad()
x.W$=0
this.a6()},
Ia(d){return this.bhj(d)},
bhj(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Ia=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new B.bYu(s))
v=3
m=C.f.C(d)
l=m.length===0
r=l?"trending":"search"
k=A.q(r)
q=A.D(y.N,y.z)
J.b6(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b6(q,"limit","24")
J.b6(q,"rating","pg")
l=!l
if(l)J.b6(q,"q",m)
if(l)J.b6(q,"lang","pt")
p=A.aj8("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUM(p,null),$async$Ia)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(C.bu.jT(0,A.jb(A.j9(q.e)).bJ(0,q.w),null)),"data"))
s.p(new B.bYv(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new B.bYw(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.bYx(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ia,w)},
u(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cC(w,C.a9,!1,w,!0,C.z,w,A.cI(),x.d,w,w,w,w,w,2,D.aFH,C.a0,!0,w,!0,w,!1,w,C.aG,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTV(),w,!1,w,w,!1,w,!0,w,C.au,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.at,w,C.b1,w,C.tf,w,w),t=x.r
if(t!=null)t=A.bO(A.h(t,w,w,w,w,C.k4,C.a6,w,w),w,w)
else t=x.f?D.bYR:N.a33(w,C.a0,V.a9a,new B.bYz(x),x.e.length,w,w,!1)
return A.aI(new A.Q(D.atD,A.B(A.a([u,C.ac,A.a4(t,1),C.aE,D.adO],y.p),C.G,C.i,C.m,0,C.v),w),v.a.b*0.62,w)}}
B.QW.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b4(s.c,"asset:"))return A.as9(C.f.bF(s.c,6),C.kh,120,120)
if(p==="image"||p==="gif")return A.db(r,A.fZ(A.X(16),new A.ev(new A.aP(0,q,0,320),A.jZ(s.c,new B.b__(q),C.bS,r,new B.b_0(q),r,r),r),C.ba),C.a0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.b_1(s,d),r,r,r,r,r,r,!1,C.b_)
p=A.X(16)
x=s.f
w=x?$.ar:C.aa
v=A.X(16)
u=A.b2(O.Pc,x?C.t:$.ar,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,C.a3,r,r,A.aF(r,r,x?C.t:C.A,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eB(!1,p,!0,A.A(r,A.P(A.a([u,C.ae,new A.di(1,C.bd,t,r),C.bm,A.b2(K.vt,x?C.t:C.T,r,r,18)],y.p),C.w,C.i,C.K,0,r,r),C.r,r,new A.aP(0,q,0,1/0),new A.M(w,r,r,v,r,r,C.y),r,r,r,D.at6,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.b_2(s),r,r,r,r,r,r,r)},
gar(d){return this.e}}
B.w6.prototype={
d5(){var x=this,w=y.T,v=A.eP(x).H(A.cw($.b8(),new B.bDB(),y.D,w),w)
A.eP(x).Yw(new B.bDC(x))
if(v==null)return C.a9
w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.M6(0,"typing:"+x.x,C.yv).byK(new B.bDD(x,v),"typing")
w.Q2(0)
x.y=w
x.Q=A.u6(C.fR,new B.bDE(x))
return C.a9},
akw(){var x,w=this,v=w.z
v.ee(v,new B.bDy(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cf(v,v.r,v.e,A.u(v).i("cf<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aR(w.ga3(0))||!C.e.e7(x,J.djD(w.ga3(0))))w.sa3(0,x)},
acX(d){var x,w=this,v=w.y,u=A.eP(w).a0(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cK(w.as).a<2e6)return
w.as=x
v.aez(0,"typing",A.S(["id",t,"name",d],y.N,y.z),C.H9).cD(new B.bDH(),new B.bDI(),y.H)},
d3(d){var x=this.y,w=A.eP(this).a0(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.j0(0,0),0,!1)
x.aez(0,"typing",A.S(["id",v,"stop",!0],y.N,y.z),C.H9).cD(new B.bDF(),new B.bDG(),y.H)}}
B.Bb.prototype={}
B.anU.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cv(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.h(s.c,1,C.a3,r,r,M.IQ,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.h(v,1,C.a3,r,r,A.aF(r,r,s.f?C.d_:C.T,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.P(A.a([q,C.ak,A.a4(A.B(w,C.G,C.i,C.K,0,C.v),1)],x),C.w,C.i,C.m,0,r,r)
q=A.a([new A.d_(0,C.bo,C.A.cc(0.06),C.Gz,14)],y.E)
w=A.aw(d,C.b2,y.w).w
v=new B.b_8().$3(C.lQ,"Voltar",new B.b_5(d))
t=s.r
v=A.a([v,C.ak,A.a4(t==null?u:A.aU(u,t,r),1)],x)
C.e.n(v,A.a([C.ae,A.El(A.A(C.L,Q.Ex,C.r,r,r,C.ck,r,44,r,r,r,r,44),r,new B.b_6(),new B.b_7(s),r,D.bQt,"Mais op\xe7\xf5es",y.N)],x))
return A.A(r,A.B(A.a([A.P(v,C.w,C.i,C.m,0,r,r)],x),C.I,C.i,C.K,0,C.v),C.r,r,r,new A.M(C.t,r,r,r,q,r,C.y),r,r,r,new A.a0(16,w.r.b+10,16,12),r,r,r)},
gar(d){return this.c}}
B.zI.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.Q(E.No,A.h(v,x,x,x,x,A.aF(x,x,B.d_V(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aF(x,x,s?C.t:C.A,x,x,x,x,x,x,x,x,15,x,x,C.bk,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ev(new A.aP(0,w.a.a*0.78,0,1/0),A.A(x,A.B(o,C.G,C.i,C.K,0,C.v),C.r,x,x,new A.M(r,x,x,new A.ci(F.yo,F.yo,new A.b5(q,q),new A.b5(p,p)),x,x,C.y),x,x,x,new A.a0(14,t,14,10),x,x,x),x)}}
B.QY.prototype={
aik(d){if(!A.ud(this.c.a.a)){d.O(y.q).f.a4(D.c_m)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.n(u,A.a([A.aU(A.A(C.L,C.PD,C.r,w,w,C.ck,w,44,w,w,w,w,44),x.e,w),C.ae],v))
v=A.X(999)
u.push(A.a4(A.A(C.bh,A.cC(w,C.a9,!1,w,!0,C.z,w,A.cI(),x.c,w,w,w,w,w,2,A.iR(w,C.bH,w,C.Z,w,w,w,w,!0,C.bH,w,w,w,w,w,w,!1,w,w,w,w,C.bH,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a0,!0,w,!0,w,!1,w,C.aG,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.b_3(x,d),w,!1,w,w,!1,w,!0,w,C.au,w,w,w,w,w,w,w,w,w,w,w,C.ff,!0,C.at,w,C.b1,w,C.aa9,w,w),C.r,w,w,new A.M(C.aa,w,w,v,w,w,C.y),w,44,w,C.bN,w,w,w),1))
u.push(C.ae)
u.push(A.aU(A.A(C.L,D.aIQ,C.r,w,w,C.ck,w,44,w,w,w,w,44),new B.b_4(x,d),w))
return A.A(w,A.bC(!0,new A.Q(S.NH,A.P(u,C.w,C.i,C.m,0,w,w),w),w,R.Np,!1),C.r,C.t,w,w,w,w,w,w,w,w,w)}}
B.R_.prototype={
u(d){var x=null,w=this.c
return A.cS1(C.fI,w==null?D.bYm:new A.Q(D.atK,A.bO(A.h(w,x,x,x,x,C.hR,x,x,x),x,x),x),C.cq,C.aD)}}
B.Kf.prototype={
P(){return new B.aes()}}
B.aes.prototype={
ai(){var x,w=this
w.aA()
x=w.a
w.e=x.d
x.c.am(0,w.ga1y())},
ba(d){var x,w,v=this
v.bw(d)
x=d.c
if(x!==v.a.c){w=v.ga1y()
x.a_(0,w)
v.a.c.am(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga1y())
this.a6()},
aU_(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbA(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new B.c6g(w,x))},
b74(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aw(x,null,y.w).w
w=this.a
if(x.ax)w.c.hP(0)
else w.c.iI(0,C.es,G.CP)},
u(d){var x,w,v,u=this,t=null,s=C.j.ae(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iT(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.A(C.L,D.aEf,C.r,t,t,D.agt,t,44,t,t,t,t,44)],r)
if(x){x=A.X(10)
v=A.bA(C.A,2)
r.push(A.cb(t,A.A(C.L,A.h(""+s,t,t,t,t,C.hQ,t,t,t),C.r,t,C.li,new A.M(C.t,t,v,x,t,t,C.y),t,20,t,C.De,t,t,t),t,t,t,-6,-6,t))}q.push(A.cb(16,A.b9(t,!0,t,A.aU(new A.bD(C.aA,t,C.aH,C.r,r,t),u.gb73(),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,C.a5,t),t,t,t,20,t,t))}return new A.bD(C.aA,t,C.aH,C.z,q,t)}}
B.bnu.prototype={
I(){return"PopupMenuPosition."+this.b}}
B.aXT.prototype={
$1(d){return A.mU(d,null,!0,null,null,y.S,y.z)},
gX2(d){return D.ahQ},
ayr(d,e,f,g,h){return this.gX2(this).$3$1(e,f,g,h)}}
B.aXU.prototype={
$3$1(d,e,f,g){return B.d3x(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.alz.prototype={}
B.Ir.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.b_C(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.ac0.prototype={}
B.a59.prototype={}
var z=a.updateTypes(["~()","Zf(O)","On(O)","F<~>(c)","t<c>()","w6(c)","xP<0^,1^>(0^(){$allTransitiveDependencies!z<h3>?,argument!K?,dependencies!z<h3>?,from!kK?,isAutoDispose!x,name!c?,retry!bo?(v,K)?})<fc<1^>,K?>"])
B.cKH.prototype={
$1(d){var x=null,w=y.p
return new A.Q(D.auc,A.B(A.a([A.P(A.a([new B.NO(C.jO,"Foto","photo",x),new B.NO(D.aCM,"Ficheiro","file",x),new B.NO(T.jL,"Sticker","sticker",x),new B.NO(D.aCF,"GIF","gif",x)],w),C.w,C.Gf,C.m,0,x,x)],w),C.w,C.i,C.K,0,C.v),x)},
$S:72}
B.cKI.prototype={
$1(d){return D.cqb},
$S:z+1}
B.cKJ.prototype={
$1(d){return D.cnr},
$S:z+2}
B.bIY.prototype={
$0(){return A.an(this.b,!1).ak(this.a.e)},
$S:0}
B.cwj.prototype={
$0(){return A.an(this.a,!1).ak(this.b)},
$S:0}
B.bYu.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bYv.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bl(this.b,y.P),v=A.u(w),w=new A.ak(w,w.gA(w),v.i("ak<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.by(s,new A.a3(A.a2(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a2(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bYw.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bYx.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bYz.prototype={
$2(d,e){var x=null,w=this.a
return A.eB(!1,x,!0,A.fZ(A.X(10),A.jZ(w.e[e].a,x,C.bS,x,x,x,x),C.ba),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bYy(w,d,e),x,x,x,x,x,x,x)},
$S:469}
B.bYy.prototype={
$0(){return A.an(this.b,!1).ak(this.a.e[this.c].b)},
$S:0}
B.b_1.prototype={
$0(){var x=y.H
return A.an(this.b,!1).ib(A.tt(new B.aZZ(this.a),null,x),x)},
$S:0}
B.aZZ.prototype={
$1(d){var x=null
return A.kt(A.cS3(C.ao,x,C.t,x),C.ao,A.bO(I.cTr(C.Z,A.tj(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1338}
B.b_0.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1339}
B.b__.prototype={
$3(d,e,f){var x=null
return A.A(x,D.aEs,C.r,C.aa,x,x,x,120,x,x,x,x,this.a)},
$S:70}
B.b_2.prototype={
$0(){return A.zb(A.du(this.a.c,0,null),C.qN,null)},
$S:0}
B.bDB.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:16}
B.bDC.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yc(x).cD(new B.bDz(),new B.bDA(),y.H)}},
$S:0}
B.bDz.prototype={
$1(d){},
$S:122}
B.bDA.prototype={
$1(d){},
$S:13}
B.bDD.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e8(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.E(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.E(t.h(0,"name"))
x=u==null?null:C.f.C(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a3(v,new A.ac(Date.now(),0,!1).e9(5e6)))}u.akw()},
$S:242}
B.bDE.prototype={
$1(d){return this.a.akw()},
$S:65}
B.bDy.prototype={
$2(d,e){return e.b.eK(this.a)},
$S:1340}
B.bDH.prototype={
$1(d){},
$S:208}
B.bDI.prototype={
$1(d){},
$S:13}
B.bDF.prototype={
$1(d){},
$S:208}
B.bDG.prototype={
$1(d){},
$S:13}
B.cQy.prototype={
$1(d){return C.e.gM(d.split(" "))},
$S:24}
B.cPV.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v]
t=C.f.C(u.b)
t=A.h(t.length===0?"Anexo":t,2,C.a3,r,r,C.IP,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jk(!1,C.Z,r,r,!0,r,r,r,!0,r,D.aEe,r,r,r,r,new B.cPU(d,u),!1,r,r,r,r,r,s,r,t,r,E.PL,r))}return A.bC(!0,new A.Q(D.atH,A.B(A.a([D.cfJ,C.as,D.cau,C.X,new A.di(1,C.bd,A.cX(p,r,r,r,r,!1,C.a2,!0),r)],q),C.G,C.i,C.K,0,C.v),r),r,C.Z,!0)},
$S:46}
B.cPU.prototype={
$0(){return A.an(this.a,!1).ak(this.b)},
$S:0}
B.b_8.prototype={
$3(d,e,f){var x=null
return A.kT(A.aU(A.A(C.L,d,C.r,x,x,C.ck,x,44,x,x,x,x,44),f,x),x,e)},
$S:1341}
B.b_5.prototype={
$0(){return A.an(this.a,!1).iy()},
$S:0}
B.b_7.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.b_6.prototype={
$1(d){return D.byM},
$S:60}
B.b_3.prototype={
$1(d){return this.a.aik(this.b)},
$S:3}
B.b_4.prototype={
$0(){return this.a.aik(this.b)},
$S:0}
B.c6g.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
B.b_C.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Ir.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.adJ.prototype,"gaTV","Ia",3)
w(B,"dJ6","dvZ",5)
v(B.w6.prototype,"giL","d5",4)
var t
v(t=B.aes.prototype,"ga1y","aU_",0)
v(t,"gb73","b74",0)
u(B,"dI9",1,function(){return{$allTransitiveDependencies:C.cK,argument:C.cK,dependencies:C.cK,from:C.cK,isAutoDispose:C.cK,name:C.cK,retry:C.cK}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["biU",function(d,e,f,g,h,i,j,k){return B.biU(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.biU(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.biU(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.K,[B.Io,B.Bb,B.aXT,B.aXU,B.alz])
w(A.bw,[B.cKH,B.cKI,B.cKJ,B.aZZ,B.b_0,B.b__,B.bDB,B.bDz,B.bDA,B.bDD,B.bDE,B.bDH,B.bDI,B.bDF,B.bDG,B.cQy,B.cPV,B.b_8,B.b_7,B.b_6,B.b_3])
w(A.I,[B.NO,B.Zf,B.QW,B.anU,B.zI,B.QY,B.R_])
w(A.bR,[B.bIY,B.cwj,B.bYu,B.bYv,B.bYw,B.bYx,B.bYy,B.b_1,B.b_2,B.bDC,B.cPU,B.b_5,B.b_4,B.c6g,B.b_C])
w(A.G,[B.On,B.Kf])
w(A.a_,[B.adJ,B.aes])
w(A.cQ,[B.bYz,B.bDy])
v(B.w6,A.fc)
v(B.bnu,A.f6)
v(B.ac0,A.kK)
v(B.Ir,B.ac0)
v(B.a59,B.Ir)
x(B.ac0,B.alz)})()
A.bp(b.typeUniverse,JSON.parse('{"Zf":{"I":[],"e":[],"f":[]},"On":{"G":[],"e":[],"f":[]},"NO":{"I":[],"e":[],"f":[]},"adJ":{"a_":["On"]},"QW":{"I":[],"e":[],"f":[]},"w6":{"fc":["t<c>"]},"anU":{"I":[],"e":[],"f":[]},"Kf":{"G":[],"e":[],"f":[]},"zI":{"I":[],"e":[],"f":[]},"QY":{"I":[],"e":[],"f":[]},"R_":{"I":[],"e":[],"f":[]},"aes":{"a_":["Kf"]},"Ir":{"kK":[],"h3":[],"H2":[],"lG":[]},"a59":{"Ir":["1","2","2","3","2","xP<1,2>"],"kK":[],"h3":[],"H2":[],"lG":[],"Ir.0":"1"}}'))
A.Px(b.typeUniverse,JSON.parse('{"alz":5,"ac0":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),V:x("cd"),E:x("r<d_>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dg"),S:x("fc<@>"),F:x("+(c,ac)"),C:x("Bb"),N:x("c"),q:x("dq"),z:x("@"),r:x("v"),B:x("Io?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c99=new A.C("Powered by GIPHY",null,H.IO,null,null,null,null,null,null,null,null)
D.adO=new A.d0(C.dY,null,null,D.c99,null)
D.agt=new A.M(C.A,null,null,null,C.i8,null,C.ax)
D.KZ=new B.aXT()
D.ahQ=new B.aXU()
D.at6=new A.a0(12,10,14,10)
D.atD=new A.a0(16,16,16,12)
D.atG=new A.a0(16,16,16,24)
D.atH=new A.a0(16,16,16,8)
D.atK=new A.a0(16,2,16,8)
D.auc=new A.a0(20,18,20,24)
D.aCF=new A.aW(57404,"HeroiconsSolid",null,!1)
D.aCM=new A.aW(57436,"HeroiconsSolid",null,!1)
D.aEe=new A.ba(C.fs,null,C.T,null,null,null)
D.aCr=new A.aW(57347,"HeroiconsSolid",null,!1)
D.aEf=new A.ba(D.aCr,20,C.t,null,null,null)
D.aEs=new A.ba(C.jO,null,C.T,null,null,null)
D.aDw=new A.ba(C.vy,null,null,null,null,null)
D.aFH=new A.dM(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aDw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aIQ=new A.lE("M12 19V5M5 12l7-7 7 7",18,C.t,2.4,!1,C.cn,null)
D.bxS=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bQo=new A.jJ("report",!0,P.abp,null,A.w("jJ<c>"))
D.byM=x([D.bQo],A.w("r<pD<c>>"))
D.bAb=x([],A.w("r<d7a>"))
D.bzO=x([],y.L)
D.ank=new A.W(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.ao9=new A.W(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.apd=new A.W(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.anK=new A.W(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bEC=x([D.ank,C.d_,D.ao9,D.apd,D.anK],A.w("r<W>"))
D.bQt=new B.bnu(1,"under")
D.bYm=new A.c4(1/0,null,null,null)
D.bYR=new U.yk(12,3,null)
D.cfV=new A.C("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.c_7=new A.bG(D.cfV,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.ch1=new A.C("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.c_m=new A.bG(D.ch1,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cfl=new A.C("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.c_G=new A.bG(D.cfl,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cau=new A.C("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.R,null,null,null,null,null,null,null,null)
D.ceF=new A.C("Stickers",null,C.aj,null,null,null,null,null,null,null,null)
D.cfJ=new A.C("Que mensagem queres denunciar?",null,C.he,null,null,null,null,null,null,null,null)
D.cnr=new B.On(null)
D.cqb=new B.Zf(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWy","CL",()=>D.KZ.ayr(0,B.dJ6(),A.w("w6"),A.w("t<c>"),y.N))})()};
(a=>{a["Oo+jIMUrN5f9XYB/5CLNT0sGVLg="]=a.current})($__dart_deferred_initializers__);