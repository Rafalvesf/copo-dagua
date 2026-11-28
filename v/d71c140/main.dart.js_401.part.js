((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,L,E,M,N,O,B={
dDA(){var x,w=$.Q8(),v=J.nH(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aX(C.j.hX(w.r_(256),16),2,"0")
return C.e.hO(v)},
aUn(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUn=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.S()
q=r.b
q===$&&A.b()
q=q.gbD().e.a
u=(q==null?null:q.r).a
t=C.f.p(e,".")?C.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dDA()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.rf(s,d,new A.uZ(!1,f)),$async$aUn)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Cm(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUn,w)},
da1(d){var x,w=C.e.ga5(d.split(".")).toLowerCase()
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
rG(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rG=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.cc(null,new B.cKy(),!1,d,!0,!1,null,l),$async$rG)
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
return A.d(new A.lD().YY(85,2048,C.ft),$async$rG)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kr(),$async$rG)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.fs(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aUn(t,s,B.da1(s)),$async$rG)
case 12:v=new j.Io(f,r,s)
x=1
break
case 7:x=13
return A.d($.den().y6(D.bA9,null,null),$async$rG)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rG)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.c_D)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.c4(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbtH(p))
if(C.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aUn(t,l,B.da1(l)),$async$rG)
case 15:v=new j.Io(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cc(null,new B.cKz(),!1,d,!0,!1,null,l),$async$rG)
case 16:n=f
v=n==null?null:new B.Io("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cc(null,new B.cKA(),!1,d,!0,!0,null,l),$async$rG)
case 17:m=f
v=m==null?null:new B.Io(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rG,w)},
Io:function Io(d,e,f){this.a=d
this.b=e
this.c=f},
cKy:function cKy(){},
cKz:function cKz(){},
cKA:function cKA(){},
NO:function NO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bIW:function bIW(d,e){this.a=d
this.b=e},
Ze:function Ze(d){this.a=d},
cwa:function cwa(d,e){this.a=d
this.b=e},
On:function On(d){this.a=d},
adI:function adI(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bYm:function bYm(d){this.a=d},
bYn:function bYn(d,e){this.a=d
this.b=e},
bYo:function bYo(d){this.a=d},
bYp:function bYp(d){this.a=d},
bYr:function bYr(d){this.a=d},
bYq:function bYq(d,e,f){this.a=d
this.b=e
this.c=f},
QV:function QV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b__:function b__(d,e){this.a=d
this.b=e},
aZX:function aZX(d){this.a=d},
aZZ:function aZZ(d){this.a=d},
aZY:function aZY(d){this.a=d},
b_0:function b_0(d){this.a=d},
dvP(d){return new B.w5(d,A.D(y.N,y.F),new A.ac(A.j0(0,0),0,!1))},
cXQ(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dz(d,new B.cQp(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w5:function w5(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bDz:function bDz(){},
bDA:function bDA(d){this.a=d},
bDx:function bDx(){},
bDy:function bDy(){},
bDB:function bDB(d,e){this.a=d
this.b=e},
bDC:function bDC(d){this.a=d},
bDw:function bDw(d){this.a=d},
bDF:function bDF(){},
bDG:function bDG(){},
bDD:function bDD(){},
bDE:function bDE(){},
cQp:function cQp(){},
a_e(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_e=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.c_4)
x=1
break}x=3
return A.d(A.cc(null,new B.cPM(A.e4(h,0,A.eT(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_e)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(L.wu(d,e,f,u.c,u.d,g,t),$async$a_e)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_e,w)},
Bb:function Bb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cPM:function cPM(d){this.a=d},
cPL:function cPL(d,e){this.a=d
this.b=e},
cSa(d,e,f,g,h,i,j){return new B.anT(f,d,i,j,g,h,e,null)},
anT:function anT(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_6:function b_6(){},
b_3:function b_3(d){this.a=d},
b_5:function b_5(d){this.a=d},
b_4:function b_4(){},
d_L(d){var x,w,v,u
for(x=new A.cd(d),w=y.V,x=new A.ak(x,x.gA(0),w.i("ak<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bEB[C.j.ao(v,5)]},
zI:function zI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
QX:function QX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b_1:function b_1(d,e){this.a=d
this.b=e},
b_2:function b_2(d,e){this.a=d
this.b=e},
QZ:function QZ(d,e){this.c=d
this.a=e},
Kf:function Kf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aer:function aer(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c68:function c68(d,e){this.a=d
this.b=e},
bns:function bns(d,e){this.a=d
this.b=e},
aXR:function aXR(){},
aXS:function aXS(){},
aly:function aly(){},
Ir:function Ir(){},
b_A:function b_A(d,e){this.a=d
this.b=e},
ac_:function ac_(){},
d3o(d,e,f,g,h,i,j,k){return new B.a58(A.dHi(B.dI_(),i,j),d,g,h,e,A.akZ(e),f,i.i("@<0>").b6(j).b6(k).i("a58<1,2,3>"))},
biS(d,e,f,g,h,i,j,k,l,m){return new A.xP(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("xP<1,2>"))},
a58:function a58(d,e,f,g,h,i,j,k){var _=this
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
return A.eB(!1,w,!0,new A.Q(C.hv,A.B(A.a([A.A(x,A.b2(this.c,$.ar,x,x,26),C.r,x,x,new A.M(C.aa,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aE,A.h(this.d,x,x,x,x,C.hQ,x,x,x)],y.p),C.w,C.i,C.K,0,C.v),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bIW(this,d),x,x,x,x,x,x,x)}}
B.Ze.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bxQ[x]
v=new A.b5(14,14)
s.push(A.eB(!1,new A.ci(v,v,v,v),!0,new A.Q(C.qs,A.as8(w,C.kh,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cwa(d,w),u,u,u,u,u,u,u))}return new A.Q(D.atE,A.B(A.a([D.ceC,C.Q,A.Sr(1,s,4,8,8,u,C.dC,!0)],t),C.G,C.i,C.K,0,C.v),u)}}
B.On.prototype={
P(){return new B.adI(new A.aJ(C.ap,$.ad()),D.bzM)}}
B.adI.prototype={
ak(){this.aD()
this.I7("")},
m(){var x=this.d
x.Z$=$.ad()
x.W$=0
this.a6()},
I7(d){return this.bhe(d)},
bhe(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$I7=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bYm(s))
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
p=A.aj7("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUK(p,null),$async$I7)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(C.bu.jT(0,A.jb(A.j9(q.e)).bJ(0,q.w),null)),"data"))
s.q(new B.bYn(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bYo(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bYp(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$I7,w)},
u(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cC(w,C.a9,!1,w,!0,C.z,w,A.cI(),x.d,w,w,w,w,w,2,D.aFF,C.a0,!0,w,!0,w,!1,w,C.aG,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTR(),w,!1,w,w,!1,w,!0,w,C.au,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.at,w,C.b1,w,C.td,w,w),t=x.r
if(t!=null)t=A.bO(A.h(t,w,w,w,w,C.k4,C.a6,w,w),w,w)
else t=x.f?D.bYP:N.a32(w,C.a0,V.a98,new B.bYr(x),x.e.length,w,w,!1)
return A.aI(new A.Q(D.atB,A.B(A.a([u,C.ac,A.a4(t,1),C.aE,D.adM],y.p),C.G,C.i,C.m,0,C.v),w),v.a.b*0.62,w)}}
B.QV.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b4(s.c,"asset:"))return A.as8(C.f.bF(s.c,6),C.kh,120,120)
if(p==="image"||p==="gif")return A.db(r,A.fY(A.X(16),new A.ev(new A.aP(0,q,0,320),A.jZ(s.c,new B.aZY(q),C.bS,r,new B.aZZ(q),r,r),r),C.ba),C.a0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.b__(s,d),r,r,r,r,r,r,!1,C.b_)
p=A.X(16)
x=s.f
w=x?$.ar:C.aa
v=A.X(16)
u=A.b2(O.Pc,x?C.t:$.ar,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,C.a3,r,r,A.aF(r,r,x?C.t:C.A,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eB(!1,p,!0,A.A(r,A.P(A.a([u,C.ae,new A.di(1,C.bd,t,r),C.bm,A.b2(K.vt,x?C.t:C.T,r,r,18)],y.p),C.w,C.i,C.K,0,r,r),C.r,r,new A.aP(0,q,0,1/0),new A.M(w,r,r,v,r,r,C.y),r,r,r,D.at4,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.b_0(s),r,r,r,r,r,r,r)},
gar(d){return this.e}}
B.w5.prototype={
d5(){var x=this,w=y.T,v=A.eP(x).H(A.cw($.b8(),new B.bDz(),y.D,w),w)
A.eP(x).Yt(new B.bDA(x))
if(v==null)return C.a9
w=$.S().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.M3(0,"typing:"+x.x,C.yv).byF(new B.bDB(x,v),"typing")
w.Q_(0)
x.y=w
x.Q=A.u5(C.fR,new B.bDC(x))
return C.a9},
akt(){var x,w=this,v=w.z
v.ee(v,new B.bDw(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cf(v,v.r,v.e,A.u(v).i("cf<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aR(w.ga3(0))||!C.e.e7(x,J.djt(w.ga3(0))))w.sa3(0,x)},
acU(d){var x,w=this,v=w.y,u=A.eP(w).a0(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cK(w.as).a<2e6)return
w.as=x
v.aew(0,"typing",A.T(["id",t,"name",d],y.N,y.z),C.H9).cD(new B.bDF(),new B.bDG(),y.H)},
d3(d){var x=this.y,w=A.eP(this).a0(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.j0(0,0),0,!1)
x.aew(0,"typing",A.T(["id",v,"stop",!0],y.N,y.z),C.H9).cD(new B.bDD(),new B.bDE(),y.H)}}
B.Bb.prototype={}
B.anT.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cv(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.h(s.c,1,C.a3,r,r,M.IQ,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.h(v,1,C.a3,r,r,A.aF(r,r,s.f?C.d_:C.T,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.P(A.a([q,C.ak,A.a4(A.B(w,C.G,C.i,C.K,0,C.v),1)],x),C.w,C.i,C.m,0,r,r)
q=A.a([new A.d_(0,C.bo,C.A.cc(0.06),C.Gz,14)],y.E)
w=A.aw(d,C.b2,y.w).w
v=new B.b_6().$3(C.lP,"Voltar",new B.b_3(d))
t=s.r
v=A.a([v,C.ak,A.a4(t==null?u:A.aU(u,t,r),1)],x)
C.e.n(v,A.a([C.ae,A.El(A.A(C.L,Q.Ex,C.r,r,r,C.ck,r,44,r,r,r,r,44),r,new B.b_4(),new B.b_5(s),r,D.bQs,"Mais op\xe7\xf5es",y.N)],x))
return A.A(r,A.B(A.a([A.P(v,C.w,C.i,C.m,0,r,r)],x),C.I,C.i,C.K,0,C.v),C.r,r,r,new A.M(C.t,r,r,r,q,r,C.y),r,r,r,new A.a0(16,w.r.b+10,16,12),r,r,r)},
gar(d){return this.c}}
B.zI.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.Q(E.No,A.h(v,x,x,x,x,A.aF(x,x,B.d_L(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aF(x,x,s?C.t:C.A,x,x,x,x,x,x,x,x,15,x,x,C.bk,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ev(new A.aP(0,w.a.a*0.78,0,1/0),A.A(x,A.B(o,C.G,C.i,C.K,0,C.v),C.r,x,x,new A.M(r,x,x,new A.ci(F.yo,F.yo,new A.b5(q,q),new A.b5(p,p)),x,x,C.y),x,x,x,new A.a0(14,t,14,10),x,x,x),x)}}
B.QX.prototype={
aih(d){if(!A.uc(this.c.a.a)){d.O(y.q).f.a4(D.c_j)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.n(u,A.a([A.aU(A.A(C.L,C.PD,C.r,w,w,C.ck,w,44,w,w,w,w,44),x.e,w),C.ae],v))
v=A.X(999)
u.push(A.a4(A.A(C.bh,A.cC(w,C.a9,!1,w,!0,C.z,w,A.cI(),x.c,w,w,w,w,w,2,A.iR(w,C.bH,w,C.Z,w,w,w,w,!0,C.bH,w,w,w,w,w,w,!1,w,w,w,w,C.bH,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a0,!0,w,!0,w,!1,w,C.aG,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.b_1(x,d),w,!1,w,w,!1,w,!0,w,C.au,w,w,w,w,w,w,w,w,w,w,w,C.ff,!0,C.at,w,C.b1,w,C.aa7,w,w),C.r,w,w,new A.M(C.aa,w,w,v,w,w,C.y),w,44,w,C.bN,w,w,w),1))
u.push(C.ae)
u.push(A.aU(A.A(C.L,D.aIO,C.r,w,w,C.ck,w,44,w,w,w,w,44),new B.b_2(x,d),w))
return A.A(w,A.bC(!0,new A.Q(S.NH,A.P(u,C.w,C.i,C.m,0,w,w),w),w,R.Np,!1),C.r,C.t,w,w,w,w,w,w,w,w,w)}}
B.QZ.prototype={
u(d){var x=null,w=this.c
return A.cRT(C.fI,w==null?D.bYk:new A.Q(D.atI,A.bO(A.h(w,x,x,x,x,C.hR,x,x,x),x,x),x),C.cq,C.aD)}}
B.Kf.prototype={
P(){return new B.aer()}}
B.aer.prototype={
ak(){var x,w=this
w.aD()
x=w.a
w.e=x.d
x.c.am(0,w.ga1v())},
ba(d){var x,w,v=this
v.bw(d)
x=d.c
if(x!==v.a.c){w=v.ga1v()
x.a_(0,w)
v.a.c.am(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga1v())
this.a6()},
aTW(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbA(0).at
v.toString
x=v>300
if(x!==w.d)w.q(new B.c68(w,x))},
b70(){var x,w
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
r=A.a([A.A(C.L,D.aEd,C.r,t,t,D.agr,t,44,t,t,t,t,44)],r)
if(x){x=A.X(10)
v=A.bA(C.A,2)
r.push(A.cb(t,A.A(C.L,A.h(""+s,t,t,t,t,C.hQ,t,t,t),C.r,t,C.li,new A.M(C.t,t,v,x,t,t,C.y),t,20,t,C.De,t,t,t),t,t,t,-6,-6,t))}q.push(A.cb(16,A.b9(t,!0,t,A.aU(new A.bD(C.aA,t,C.aH,C.r,r,t),u.gb7_(),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,C.a5,t),t,t,t,20,t,t))}return new A.bD(C.aA,t,C.aH,C.z,q,t)}}
B.bns.prototype={
I(){return"PopupMenuPosition."+this.b}}
B.aXR.prototype={
$1(d){return A.mU(d,null,!0,null,null,y.S,y.z)},
gX_(d){return D.ahO},
ayo(d,e,f,g,h){return this.gX_(this).$3$1(e,f,g,h)}}
B.aXS.prototype={
$3$1(d,e,f,g){return B.d3o(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.aly.prototype={}
B.Ir.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.b_A(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.ac_.prototype={}
B.a58.prototype={}
var z=a.updateTypes(["~()","Ze(O)","On(O)","F<~>(c)","t<c>()","w5(c)","xP<0^,1^>(0^(){$allTransitiveDependencies!z<h3>?,argument!K?,dependencies!z<h3>?,from!kK?,isAutoDispose!x,name!c?,retry!bo?(v,K)?})<fc<1^>,K?>"])
B.cKy.prototype={
$1(d){var x=null,w=y.p
return new A.Q(D.aua,A.B(A.a([A.P(A.a([new B.NO(C.jO,"Foto","photo",x),new B.NO(D.aCK,"Ficheiro","file",x),new B.NO(T.jL,"Sticker","sticker",x),new B.NO(D.aCD,"GIF","gif",x)],w),C.w,C.Gf,C.m,0,x,x)],w),C.w,C.i,C.K,0,C.v),x)},
$S:71}
B.cKz.prototype={
$1(d){return D.cq7},
$S:z+1}
B.cKA.prototype={
$1(d){return D.cnn},
$S:z+2}
B.bIW.prototype={
$0(){return A.an(this.b,!1).aj(this.a.e)},
$S:0}
B.cwa.prototype={
$0(){return A.an(this.a,!1).aj(this.b)},
$S:0}
B.bYm.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bYn.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bl(this.b,y.P),v=A.u(w),w=new A.ak(w,w.gA(w),v.i("ak<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.by(s,new A.a3(A.a2(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a2(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bYo.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bYp.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bYr.prototype={
$2(d,e){var x=null,w=this.a
return A.eB(!1,x,!0,A.fY(A.X(10),A.jZ(w.e[e].a,x,C.bS,x,x,x,x),C.ba),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bYq(w,d,e),x,x,x,x,x,x,x)},
$S:469}
B.bYq.prototype={
$0(){return A.an(this.b,!1).aj(this.a.e[this.c].b)},
$S:0}
B.b__.prototype={
$0(){var x=y.H
return A.an(this.b,!1).ib(A.ts(new B.aZX(this.a),null,x),x)},
$S:0}
B.aZX.prototype={
$1(d){var x=null
return A.kt(A.cRV(C.ao,x,C.t,x),C.ao,A.bO(I.cTh(C.Z,A.ti(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1338}
B.aZZ.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1339}
B.aZY.prototype={
$3(d,e,f){var x=null
return A.A(x,D.aEq,C.r,C.aa,x,x,x,120,x,x,x,x,this.a)},
$S:69}
B.b_0.prototype={
$0(){return A.zb(A.dt(this.a.c,0,null),C.qK,null)},
$S:0}
B.bDz.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:16}
B.bDA.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.S().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yc(x).cD(new B.bDx(),new B.bDy(),y.H)}},
$S:0}
B.bDx.prototype={
$1(d){},
$S:106}
B.bDy.prototype={
$1(d){},
$S:13}
B.bDB.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e8(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.E(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.E(t.h(0,"name"))
x=u==null?null:C.f.C(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a3(v,new A.ac(Date.now(),0,!1).e9(5e6)))}u.akt()},
$S:242}
B.bDC.prototype={
$1(d){return this.a.akt()},
$S:65}
B.bDw.prototype={
$2(d,e){return e.b.eK(this.a)},
$S:1340}
B.bDF.prototype={
$1(d){},
$S:208}
B.bDG.prototype={
$1(d){},
$S:13}
B.bDD.prototype={
$1(d){},
$S:208}
B.bDE.prototype={
$1(d){},
$S:13}
B.cQp.prototype={
$1(d){return C.e.gM(d.split(" "))},
$S:24}
B.cPM.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v]
t=C.f.C(u.b)
t=A.h(t.length===0?"Anexo":t,2,C.a3,r,r,C.IP,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jj(!1,C.Z,r,r,!0,r,r,r,!0,r,D.aEc,r,r,r,r,new B.cPL(d,u),!1,r,r,r,r,r,s,r,t,r,E.PL,r))}return A.bC(!0,new A.Q(D.atF,A.B(A.a([D.cfF,C.as,D.car,C.X,new A.di(1,C.bd,A.cX(p,r,r,r,r,!1,C.a2,!0),r)],q),C.G,C.i,C.K,0,C.v),r),r,C.Z,!0)},
$S:46}
B.cPL.prototype={
$0(){return A.an(this.a,!1).aj(this.b)},
$S:0}
B.b_6.prototype={
$3(d,e,f){var x=null
return A.kT(A.aU(A.A(C.L,d,C.r,x,x,C.ck,x,44,x,x,x,x,44),f,x),x,e)},
$S:1341}
B.b_3.prototype={
$0(){return A.an(this.a,!1).iy()},
$S:0}
B.b_5.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.b_4.prototype={
$1(d){return D.byK},
$S:60}
B.b_1.prototype={
$1(d){return this.a.aih(this.b)},
$S:3}
B.b_2.prototype={
$0(){return this.a.aih(this.b)},
$S:0}
B.c68.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
B.b_A.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Ir.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.adI.prototype,"gaTR","I7",3)
w(B,"dIX","dvP",5)
v(B.w5.prototype,"giL","d5",4)
var t
v(t=B.aer.prototype,"ga1v","aTW",0)
v(t,"gb7_","b70",0)
u(B,"dI_",1,function(){return{$allTransitiveDependencies:C.cK,argument:C.cK,dependencies:C.cK,from:C.cK,isAutoDispose:C.cK,name:C.cK,retry:C.cK}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["biS",function(d,e,f,g,h,i,j,k){return B.biS(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.biS(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.biS(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.K,[B.Io,B.Bb,B.aXR,B.aXS,B.aly])
w(A.bw,[B.cKy,B.cKz,B.cKA,B.aZX,B.aZZ,B.aZY,B.bDz,B.bDx,B.bDy,B.bDB,B.bDC,B.bDF,B.bDG,B.bDD,B.bDE,B.cQp,B.cPM,B.b_6,B.b_5,B.b_4,B.b_1])
w(A.I,[B.NO,B.Ze,B.QV,B.anT,B.zI,B.QX,B.QZ])
w(A.bS,[B.bIW,B.cwa,B.bYm,B.bYn,B.bYo,B.bYp,B.bYq,B.b__,B.b_0,B.bDA,B.cPL,B.b_3,B.b_2,B.c68,B.b_A])
w(A.G,[B.On,B.Kf])
w(A.a_,[B.adI,B.aer])
w(A.cQ,[B.bYr,B.bDw])
v(B.w5,A.fc)
v(B.bns,A.f6)
v(B.ac_,A.kK)
v(B.Ir,B.ac_)
v(B.a58,B.Ir)
x(B.ac_,B.aly)})()
A.bp(b.typeUniverse,JSON.parse('{"Ze":{"I":[],"e":[],"f":[]},"On":{"G":[],"e":[],"f":[]},"NO":{"I":[],"e":[],"f":[]},"adI":{"a_":["On"]},"QV":{"I":[],"e":[],"f":[]},"w5":{"fc":["t<c>"]},"anT":{"I":[],"e":[],"f":[]},"Kf":{"G":[],"e":[],"f":[]},"zI":{"I":[],"e":[],"f":[]},"QX":{"I":[],"e":[],"f":[]},"QZ":{"I":[],"e":[],"f":[]},"aer":{"a_":["Kf"]},"Ir":{"kK":[],"h3":[],"H2":[],"lG":[]},"a58":{"Ir":["1","2","2","3","2","xP<1,2>"],"kK":[],"h3":[],"H2":[],"lG":[],"Ir.0":"1"}}'))
A.Px(b.typeUniverse,JSON.parse('{"aly":5,"ac_":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),V:x("cd"),E:x("r<d_>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dg"),S:x("fc<@>"),F:x("+(c,ac)"),C:x("Bb"),N:x("c"),q:x("du"),z:x("@"),r:x("v"),B:x("Io?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c96=new A.C("Powered by GIPHY",null,H.IO,null,null,null,null,null,null,null,null)
D.adM=new A.d0(C.dY,null,null,D.c96,null)
D.agr=new A.M(C.A,null,null,null,C.i8,null,C.ax)
D.KZ=new B.aXR()
D.ahO=new B.aXS()
D.at4=new A.a0(12,10,14,10)
D.atB=new A.a0(16,16,16,12)
D.atE=new A.a0(16,16,16,24)
D.atF=new A.a0(16,16,16,8)
D.atI=new A.a0(16,2,16,8)
D.aua=new A.a0(20,18,20,24)
D.aCD=new A.aW(57404,"HeroiconsSolid",null,!1)
D.aCK=new A.aW(57436,"HeroiconsSolid",null,!1)
D.aEc=new A.ba(C.fs,null,C.T,null,null,null)
D.aCp=new A.aW(57347,"HeroiconsSolid",null,!1)
D.aEd=new A.ba(D.aCp,20,C.t,null,null,null)
D.aEq=new A.ba(C.jO,null,C.T,null,null,null)
D.aDu=new A.ba(C.vy,null,null,null,null,null)
D.aFF=new A.dM(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aDu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aIO=new A.lE("M12 19V5M5 12l7-7 7 7",18,C.t,2.4,!1,C.cn,null)
D.bxQ=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bQn=new A.jJ("report",!0,P.abn,null,A.w("jJ<c>"))
D.byK=x([D.bQn],A.w("r<pD<c>>"))
D.bA9=x([],A.w("r<d71>"))
D.bzM=x([],y.L)
D.ani=new A.W(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.ao7=new A.W(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.apb=new A.W(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.anI=new A.W(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bEB=x([D.ani,C.d_,D.ao7,D.apb,D.anI],A.w("r<W>"))
D.bQs=new B.bns(1,"under")
D.bYk=new A.c4(1/0,null,null,null)
D.bYP=new U.yk(12,3,null)
D.cfR=new A.C("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.c_4=new A.bG(D.cfR,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cgY=new A.C("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.c_j=new A.bG(D.cgY,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cfh=new A.C("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.c_D=new A.bG(D.cfh,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.car=new A.C("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.R,null,null,null,null,null,null,null,null)
D.ceC=new A.C("Stickers",null,C.aj,null,null,null,null,null,null,null,null)
D.cfF=new A.C("Que mensagem queres denunciar?",null,C.hd,null,null,null,null,null,null,null,null)
D.cnn=new B.On(null)
D.cq7=new B.Ze(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWo","CL",()=>D.KZ.ayo(0,B.dIX(),A.w("w5"),A.w("t<c>"),y.N))})()};
(a=>{a["2pzPNyJQvzbqCd2qZ8AV3TW73xo="]=a.current})($__dart_deferred_initializers__);