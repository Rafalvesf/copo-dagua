((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,E,L,M,N,B={
dxG(){var x,w=$.PC(),v=J.nu(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aZ(C.i.hU(w.qX(256),16),2,"0")
return C.e.hM(v)},
aSl(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aSl=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.T()
q=r.b
q===$&&A.b()
q=q.gbE().e.a
u=(q==null?null:q.r).a
t=C.f.n(e,".")?C.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dxG()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.rb(s,d,new A.uN(!1,f)),$async$aSl)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cc(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aSl,w)},
d4P(d){var x,w=C.e.ga5(d.split(".")).toLowerCase()
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
rq(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rq=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.ck(null,new B.cFL(),!1,d,!0,!1,null,l),$async$rq)
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
return A.d(new A.lz().Yp(85,2048,C.fj),$async$rq)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kn(),$async$rq)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.fo(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aSl(t,s,B.d4P(s)),$async$rq)
case 12:v=new j.HW(f,r,s)
x=1
break
case 7:x=13
return A.d($.d90().xY(D.bxQ,null,null),$async$rq)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kn(),$async$rq)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.bXi)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.c4(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbrL(p))
if(C.f.fo(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aSl(t,l,B.d4P(l)),$async$rq)
case 15:v=new j.HW(f,r,l)
x=1
break
case 8:x=16
return A.d(A.ck(null,new B.cFM(),!1,d,!0,!1,null,l),$async$rq)
case 16:n=f
v=n==null?null:new B.HW("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.ck(null,new B.cFN(),!1,d,!0,!0,null,l),$async$rq)
case 17:m=f
v=m==null?null:new B.HW(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rq,w)},
HW:function HW(d,e,f){this.a=d
this.b=e
this.c=f},
cFL:function cFL(){},
cFM:function cFM(){},
cFN:function cFN(){},
Ni:function Ni(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bFQ:function bFQ(d,e){this.a=d
this.b=e},
Yu:function Yu(d){this.a=d},
crG:function crG(d,e){this.a=d
this.b=e},
NS:function NS(d){this.a=d},
acC:function acC(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bUR:function bUR(d){this.a=d},
bUS:function bUS(d,e){this.a=d
this.b=e},
bUT:function bUT(d){this.a=d},
bUU:function bUU(d){this.a=d},
bUW:function bUW(d){this.a=d},
bUV:function bUV(d,e,f){this.a=d
this.b=e
this.c=f},
Qo:function Qo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aXR:function aXR(d,e){this.a=d
this.b=e},
aXO:function aXO(d){this.a=d},
aXQ:function aXQ(d){this.a=d},
aXP:function aXP(d){this.a=d},
aXS:function aXS(d){this.a=d},
dq2(d){return new B.vS(d,A.A(y.N,y.F),new A.af(A.iW(0,0),0,!1))},
cSO(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dw(d,new B.cLk(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
vS:function vS(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bAM:function bAM(){},
bAN:function bAN(d){this.a=d},
bAK:function bAK(){},
bAL:function bAL(){},
bAO:function bAO(d,e){this.a=d
this.b=e},
bAP:function bAP(d){this.a=d},
bAJ:function bAJ(d){this.a=d},
bAS:function bAS(){},
bAT:function bAT(){},
bAQ:function bAQ(){},
bAR:function bAR(){},
cLk:function cLk(){},
Zs(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$Zs=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.bWK)
x=1
break}x=3
return A.d(A.ck(null,new B.cKJ(A.e_(h,0,A.eP(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$Zs)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(K.wd(d,e,f,u.c,u.d,g,t),$async$Zs)
case 4:case 1:return A.l(v,w)}})
return A.m($async$Zs,w)},
AR:function AR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cKJ:function cKJ(d){this.a=d},
cKI:function cKI(d,e){this.a=d
this.b=e},
cN3(d,e,f,g,h,i,j){return new B.amp(f,d,i,j,g,h,e,null)},
amp:function amp(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aXY:function aXY(){},
aXV:function aXV(d){this.a=d},
aXX:function aXX(d){this.a=d},
aXW:function aXW(){},
cVI(d){var x,w,v,u
for(x=new A.ca(d),w=y.V,x=new A.ak(x,x.gA(0),w.i("ak<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bCi[C.i.aq(v,5)]},
zi:function zi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Qp:function Qp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXT:function aXT(d,e){this.a=d
this.b=e},
aXU:function aXU(d,e){this.a=d
this.b=e},
Qr:function Qr(d,e){this.c=d
this.a=e},
bkQ:function bkQ(d,e){this.a=d
this.b=e},
aVO:function aVO(){},
aVP:function aVP(){},
ak5:function ak5(){},
I1:function I1(){},
aYq:function aYq(d,e){this.a=d
this.b=e},
aaW:function aaW(){},
cZe(d,e,f,g,h,i,j,k){return new B.a4a(A.dBi(B.dBX(),i,j),d,g,h,e,A.ajx(e),f,i.i("@<0>").b6(j).b6(k).i("a4a<1,2,3>"))},
bgh(d,e,f,g,h,i,j,k,l,m){return new A.xs(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("xs<1,2>"))},
a4a:function a4a(d,e,f,g,h,i,j,k){var _=this
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
G=c[361]
H=c[168]
I=c[312]
K=c[149]
E=c[225]
L=c[259]
M=c[176]
N=c[409]
B=a.updateHolder(c[115],B)
D=c[233]
O=c[359]
P=c[375]
Q=c[387]
R=c[241]
S=c[254]
T=c[408]
F=c[320]
B.HW.prototype={
gau(d){return this.c}}
B.Ni.prototype={
u(d){var x=null,w=A.a2(18),v=A.a2(18)
return A.eR(!1,w,!0,new A.Q(C.hl,A.B(A.a([A.C(x,A.b3(this.c,$.ap,x,x,26),C.r,x,x,new A.O(C.a8,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aF,A.i(this.d,x,x,x,x,C.jQ,x,x,x)],y.p),C.x,C.j,C.N,0,C.v),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bFQ(this,d),x,x,x,x,x,x,x)}}
B.Yu.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bvA[x]
v=new A.b5(14,14)
s.push(A.eR(!1,new A.ce(v,v,v,v),!0,new A.Q(C.q4,A.aqC(w,C.k2,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.crG(d,w),u,u,u,u,u,u,u))}return new A.Q(D.arX,A.B(A.a([D.caU,C.Q,A.RU(1,s,4,8,8,u,C.dS,!0)],t),C.I,C.j,C.N,0,C.v),u)}}
B.NS.prototype={
R(){return new B.acC(new A.aI(C.ao,$.ad()),D.bxv)}}
B.acC.prototype={
am(){this.aJ()
this.HV("")},
m(){var x=this.d
x.Z$=$.ad()
x.X$=0
this.a8()},
HV(d){return this.bfs(d)},
bfs(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HV=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bUR(s))
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
p=A.ahJ("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aSJ(p,null),$async$HV)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bp.jP(0,A.j9(A.j6(q.e)).bH(0,q.w),null)),"data"))
s.q(new B.bUS(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bUT(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bUU(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HV,w)},
u(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cM(w,C.aa,!1,w,!0,C.z,w,A.cQ(),x.d,w,w,w,w,w,2,D.aDJ,C.a3,!0,w,!0,w,!1,w,C.aK,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaSN(),w,!1,w,w,!1,w,!0,w,C.au,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.as,w,C.b8,w,C.rL,w,w),t=x.r
if(t!=null)t=A.bV(A.i(t,w,w,w,w,C.jP,C.a5,w,w),w,w)
else t=x.f?C.cQ:M.a29(w,C.a3,T.a7P,new B.bUW(x),x.e.length,w,w,!1)
return A.aO(new A.Q(D.arU,A.B(A.a([u,C.ae,A.a6(t,1),C.aF,D.ack],y.p),C.I,C.j,C.o,0,C.v),w),v.a.b*0.62,w)}}
B.Qo.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b3(s.c,"asset:"))return A.aqC(C.f.bD(s.c,6),C.k2,120,120)
if(p==="image"||p==="gif")return A.dQ(r,A.hh(A.a2(16),new A.ev(new A.aM(0,q,0,320),A.ks(s.c,new B.aXP(q),C.bK,r,new B.aXQ(q),r,r),r),C.b4),C.a3,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aXR(s,d),r,r,r,r,r,r,!1,C.bd)
p=A.a2(16)
x=s.f
w=x?$.ap:C.a8
v=A.a2(16)
u=A.b3(N.O7,x?C.u:$.ap,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a0,r,r,A.aH(r,r,x?C.u:C.A,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eR(!1,p,!0,A.C(r,A.R(A.a([u,C.ak,new A.dK(1,C.bi,t,r),C.bs,A.b3(I.uY,x?C.u:C.T,r,r,18)],y.p),C.x,C.j,C.N,0,r,r),C.r,r,new A.aM(0,q,0,1/0),new A.O(w,r,r,v,r,r,C.y),r,r,r,D.arn,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aXS(s),r,r,r,r,r,r,r)},
gau(d){return this.e}}
B.vS.prototype={
d1(){var x=this,w=y.T,v=A.eK(x).G(A.cw($.b8(),new B.bAM(),y.D,w),w)
A.eK(x).XV(new B.bAN(x))
if(v==null)return C.aa
w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.a7y(0,"typing:"+x.x,C.a5S).bwI(new B.bAO(x,v),"typing")
w.aeq(0)
x.y=w
x.Q=A.Bl(C.hi,new B.bAP(x))
return C.aa},
ajK(){var x,w=this,v=w.z
v.ec(v,new B.bAJ(new A.af(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cd(v,v.r,v.e,A.u(v).i("cd<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aS(w.ga2(0))||!C.e.e8(x,J.de5(w.ga2(0))))w.sa2(0,x)},
ac9(d){var x,w=this,v=w.y,u=A.eK(w).a1(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.af(Date.now(),0,!1)
if(x.d0(w.as).a<2e6)return
w.as=x
v.adL(0,"typing",A.S(["id",t,"name",d],y.N,y.z),C.Ga).cB(new B.bAS(),new B.bAT(),y.H)},
fT(d){var x=this.y,w=A.eK(this).a1(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.af(A.iW(0,0),0,!1)
x.adL(0,"typing",A.S(["id",v,"stop",!0],y.N,y.z),C.Ga).cB(new B.bAQ(),new B.bAR(),y.H)}}
B.AR.prototype={}
B.amp.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cA(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a0,r,r,L.HS,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a0,r,r,A.aH(r,r,s.f?C.f_:C.T,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.R(A.a([q,C.av,A.a6(A.B(w,C.I,C.j,C.N,0,C.v),1)],x),C.x,C.j,C.o,0,r,r)
q=A.a([new A.cX(0,C.bj,C.A.ci(0.06),C.FD,14)],y.E)
w=A.aw(d,C.b7,y.w).w
v=new B.aXY().$3(C.lA,"Voltar",new B.aXV(d))
t=s.r
v=A.a([v,C.av,A.a6(t==null?u:A.aT(u,t,r),1)],x)
C.e.p(v,A.a([C.ak,A.E_(A.C(C.K,P.DD,C.r,r,r,C.cD,r,44,r,r,r,r,44),r,new B.aXW(),new B.aXX(s),r,D.bNS,"Mais op\xe7\xf5es",y.N)],x))
return A.C(r,A.B(A.a([A.R(v,C.x,C.j,C.o,0,r,r)],x),C.J,C.j,C.N,0,C.v),C.r,r,r,new A.O(C.u,r,r,r,q,r,C.y),r,r,r,new A.a0(16,w.r.b+10,16,12),r,r,r)},
gau(d){return this.c}}
B.zi.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.u,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.Q(E.Ml,A.i(v,x,x,x,x,A.aH(x,x,B.cVI(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,x,A.aH(x,x,s?C.u:C.A,x,x,x,x,x,x,x,x,15,x,x,C.bg,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ev(new A.aM(0,w.a.a*0.78,0,1/0),A.C(x,A.B(o,C.I,C.j,C.N,0,C.v),C.r,x,x,new A.O(r,x,x,new A.ce(F.xP,F.xP,new A.b5(q,q),new A.b5(p,p)),x,x,C.y),x,x,x,new A.a0(14,t,14,10),x,x,x),x)}}
B.Qp.prototype={
ahx(d){if(!A.tY(this.c.a.a)){d.O(y.q).f.a4(D.bWZ)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.p(u,A.a([A.aT(A.C(C.K,C.Oy,C.r,w,w,C.cD,w,44,w,w,w,w,44),x.e,w),C.ak],v))
v=A.a2(999)
u.push(A.a6(A.C(C.bn,A.cM(w,C.aa,!1,w,!0,C.z,w,A.cQ(),x.c,w,w,w,w,w,2,A.jg(w,C.ce,w,C.a_,w,w,w,w,!0,C.ce,w,w,w,w,w,w,!1,w,w,w,w,C.ce,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a3,!0,w,!0,w,!1,w,C.aK,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aXT(x,d),w,!1,w,w,!1,w,!0,w,C.au,w,w,w,w,w,w,w,w,w,w,w,C.hE,!0,C.as,w,C.b8,w,C.a8N,w,w),C.r,w,w,new A.O(C.a8,w,w,v,w,w,C.y),w,44,w,C.bQ,w,w,w),1))
u.push(C.ak)
u.push(A.aT(A.C(C.K,D.aGO,C.r,w,w,C.cD,w,44,w,w,w,w,44),new B.aXU(x,d),w))
return A.C(w,A.bG(!0,new A.Q(R.MB,A.R(u,C.x,C.j,C.o,0,w,w),w),w,Q.Mm,!1),C.r,C.u,w,w,w,w,w,w,w,w,w)}}
B.Qr.prototype={
u(d){var x=null,w=this.c
return A.cMM(C.fz,w==null?D.bVi:new A.Q(D.as0,A.bV(A.i(w,x,x,x,x,C.hG,x,x,x),x,x),x),C.ck,C.aE)}}
B.bkQ.prototype={
I(){return"PopupMenuPosition."+this.b}}
B.aVO.prototype={
$1(d){return A.mI(d,null,!0,null,null,y.S,y.z)},
gWu(d){return D.ag6},
axA(d,e,f,g,h){return this.gWu(this).$3$1(e,f,g,h)}}
B.aVP.prototype={
$3$1(d,e,f,g){return B.cZe(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.ak5.prototype={}
B.I1.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aYq(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.aaW.prototype={}
B.a4a.prototype={}
var z=a.updateTypes(["Yu(N)","NS(N)","F<~>(c)","r<c>()","vS(c)","xs<0^,1^>(0^(){$allTransitiveDependencies!z<fZ>?,argument!L?,dependencies!z<fZ>?,from!kE?,isAutoDispose!y,name!c?,retry!bm?(v,L)?})<f6<1^>,L?>"])
B.cFL.prototype={
$1(d){var x=null,w=y.p
return new A.Q(D.ast,A.B(A.a([A.R(A.a([new B.Ni(C.jx,"Foto","photo",x),new B.Ni(D.aAT,"Ficheiro","file",x),new B.Ni(S.ju,"Sticker","sticker",x),new B.Ni(D.aAL,"GIF","gif",x)],w),C.x,C.Fj,C.o,0,x,x)],w),C.x,C.j,C.N,0,C.v),x)},
$S:68}
B.cFM.prototype={
$1(d){return D.cm1},
$S:z+0}
B.cFN.prototype={
$1(d){return D.cjl},
$S:z+1}
B.bFQ.prototype={
$0(){return A.as(this.b,!1).ak(this.a.e)},
$S:0}
B.crG.prototype={
$0(){return A.as(this.a,!1).ak(this.b)},
$S:0}
B.bUR.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bUS.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bo(this.b,y.P),v=A.u(w),w=new A.ak(w,w.gA(w),v.i("ak<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.by(s,new A.a4(A.a_(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a_(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bUT.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bUU.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bUW.prototype={
$2(d,e){var x=null,w=this.a
return A.eR(!1,x,!0,A.hh(A.a2(10),A.ks(w.e[e].a,x,C.bK,x,x,x,x),C.b4),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bUV(w,d,e),x,x,x,x,x,x,x)},
$S:462}
B.bUV.prototype={
$0(){return A.as(this.b,!1).ak(this.a.e[this.c].b)},
$S:0}
B.aXR.prototype={
$0(){var x=y.H
return A.as(this.b,!1).ia(A.te(new B.aXO(this.a),null,x),x)},
$S:0}
B.aXO.prototype={
$1(d){var x=null
return A.kq(A.cMO(C.am,x,C.u,x),C.am,A.bV(H.cOf(C.a_,A.qw(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1319}
B.aXQ.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:183}
B.aXP.prototype={
$3(d,e,f){var x=null
return A.C(x,D.aCw,C.r,C.a8,x,x,x,120,x,x,x,x,this.a)},
$S:64}
B.aXS.prototype={
$0(){return A.yM(A.dn(this.a.c,0,null),C.qk,null)},
$S:0}
B.bAM.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
B.bAN.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aX(0)
x=w.y
w.y=null
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.Gu(x).cB(new B.bAK(),new B.bAL(),y.H)}},
$S:0}
B.bAK.prototype={
$1(d){},
$S:116}
B.bAL.prototype={
$1(d){},
$S:14}
B.bAO.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e3(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.J(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.J(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a4(v,new A.af(Date.now(),0,!1).ei(5e6)))}u.ajK()},
$S:250}
B.bAP.prototype={
$1(d){return this.a.ajK()},
$S:72}
B.bAJ.prototype={
$2(d,e){return e.b.eQ(this.a)},
$S:1321}
B.bAS.prototype={
$1(d){},
$S:218}
B.bAT.prototype={
$1(d){},
$S:14}
B.bAQ.prototype={
$1(d){},
$S:218}
B.bAR.prototype={
$1(d){},
$S:14}
B.cLk.prototype={
$1(d){return C.e.gM(d.split(" "))},
$S:23}
B.cKJ.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a0,r,r,C.HR,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r,r)
p.push(A.iZ(!1,C.a_,r,r,!0,r,r,r,!0,r,D.aCk,r,r,r,r,new B.cKI(d,u),!1,r,r,r,r,r,s,r,t,r,E.OG,r))}return A.bG(!0,new A.Q(D.arY,A.B(A.a([D.cbT,C.ar,D.c6Z,C.X,new A.dK(1,C.bi,A.d5(p,r,r,r,r,!1,C.a1,!0),r)],q),C.I,C.j,C.N,0,C.v),r),r,C.a_,!0)},
$S:45}
B.cKI.prototype={
$0(){return A.as(this.a,!1).ak(this.b)},
$S:0}
B.aXY.prototype={
$3(d,e,f){var x=null
return A.kP(A.aT(A.C(C.K,d,C.r,x,x,C.cD,x,44,x,x,x,x,44),f,x),x,e)},
$S:1322}
B.aXV.prototype={
$0(){return A.as(this.a,!1).jU()},
$S:0}
B.aXX.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aXW.prototype={
$1(d){return D.bwt},
$S:54}
B.aXT.prototype={
$1(d){return this.a.ahx(this.b)},
$S:3}
B.aXU.prototype={
$0(){return this.a.ahx(this.b)},
$S:0}
B.aYq.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("I1.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.acC.prototype,"gaSN","HV",2)
w(B,"dCQ","dq2",4)
v(B.vS.prototype,"giF","d1",3)
u(B,"dBX",1,function(){return{$allTransitiveDependencies:C.cE,argument:C.cE,dependencies:C.cE,from:C.cE,isAutoDispose:C.cE,name:C.cE,retry:C.cE}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bgh",function(d,e,f,g,h,i,j,k){return B.bgh(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bgh(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bgh(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[B.HW,B.AR,B.aVO,B.aVP,B.ak5])
w(A.bx,[B.cFL,B.cFM,B.cFN,B.aXO,B.aXQ,B.aXP,B.bAM,B.bAK,B.bAL,B.bAO,B.bAP,B.bAS,B.bAT,B.bAQ,B.bAR,B.cLk,B.cKJ,B.aXY,B.aXX,B.aXW,B.aXT])
w(A.K,[B.Ni,B.Yu,B.Qo,B.amp,B.zi,B.Qp,B.Qr])
w(A.bR,[B.bFQ,B.crG,B.bUR,B.bUS,B.bUT,B.bUU,B.bUV,B.aXR,B.aXS,B.bAN,B.cKI,B.aXV,B.aXU,B.aYq])
v(B.NS,A.I)
v(B.acC,A.a1)
w(A.cS,[B.bUW,B.bAJ])
v(B.vS,A.f6)
v(B.bkQ,A.fx)
v(B.aaW,A.kE)
v(B.I1,B.aaW)
v(B.a4a,B.I1)
x(B.aaW,B.ak5)})()
A.bu(b.typeUniverse,JSON.parse('{"Yu":{"K":[],"e":[],"f":[]},"NS":{"I":[],"e":[],"f":[]},"Ni":{"K":[],"e":[],"f":[]},"acC":{"a1":["NS"]},"Qo":{"K":[],"e":[],"f":[]},"vS":{"f6":["r<c>"]},"amp":{"K":[],"e":[],"f":[]},"zi":{"K":[],"e":[],"f":[]},"Qp":{"K":[],"e":[],"f":[]},"Qr":{"K":[],"e":[],"f":[]},"I1":{"kE":[],"fZ":[],"GD":[],"lB":[]},"a4a":{"I1":["1","2","2","3","2","xs<1,2>"],"kE":[],"fZ":[],"GD":[],"lB":[],"I1.0":"1"}}'))
A.P_(b.typeUniverse,JSON.parse('{"ak5":5,"aaW":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cG"),V:x("ca"),E:x("t<cX>"),L:x("t<+(c,c)>"),s:x("t<c>"),p:x("t<e>"),j:x("r<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dx"),S:x("f6<@>"),F:x("+(c,af)"),C:x("AR"),N:x("c"),q:x("dA"),z:x("@"),r:x("v"),B:x("HW?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c5I=new A.D("Powered by GIPHY",null,G.HQ,null,null,null,null,null,null,null,null)
D.ack=new A.dd(C.dO,null,null,D.c5I,null)
D.JX=new B.aVO()
D.ag6=new B.aVP()
D.arn=new A.a0(12,10,14,10)
D.arU=new A.a0(16,16,16,12)
D.arX=new A.a0(16,16,16,24)
D.arY=new A.a0(16,16,16,8)
D.as0=new A.a0(16,2,16,8)
D.ast=new A.a0(20,18,20,24)
D.aAL=new A.aW(57404,"HeroiconsSolid",null,!1)
D.aAT=new A.aW(57436,"HeroiconsSolid",null,!1)
D.aCk=new A.bc(C.fi,null,C.T,null,null,null)
D.aCw=new A.bc(C.jx,null,C.T,null,null,null)
D.aBD=new A.bc(C.v4,null,null,null,null,null)
D.aDJ=new A.dU(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aBD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGO=new A.qC("M12 19V5M5 12l7-7 7 7",18,C.u,2.4,!1,C.d8,null)
D.bvA=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bNN=new A.jG("report",!0,O.a9Z,null,A.w("jG<c>"))
D.bwt=x([D.bNN],A.w("t<pr<c>>"))
D.bxQ=x([],A.w("t<d1P>"))
D.bxv=x([],y.L)
D.alA=new A.U(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.amq=new A.U(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.anu=new A.U(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.am0=new A.U(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bCi=x([D.alA,C.f_,D.amq,D.anu,D.am0],A.w("t<U>"))
D.bNS=new B.bkQ(1,"under")
D.bVi=new A.c3(1/0,null,null,null)
D.cc4=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bWK=new A.bK(D.cc4,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)
D.cd8=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bWZ=new A.bK(D.cd8,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)
D.cby=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bXi=new A.bK(D.cby,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)
D.c6Z=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.Z,null,null,null,null,null,null,null,null)
D.caU=new A.D("Stickers",null,C.ap,null,null,null,null,null,null,null,null)
D.cbT=new A.D("Que mensagem queres denunciar?",null,C.fv,null,null,null,null,null,null,null,null)
D.cjl=new B.NS(null)
D.cm1=new B.Yu(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dQe","Cq",()=>D.JX.axA(0,B.dCQ(),A.w("vS"),A.w("r<c>"),y.N))})()};
(a=>{a["+6LR5CwhJLd8/KpknMFG31SWlsc="]=a.current})($__dart_deferred_initializers__);