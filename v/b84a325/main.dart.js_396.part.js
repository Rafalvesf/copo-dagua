((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,E,L,M,N,B={
dBW(){var x,w=$.PZ(),v=J.nG(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aW(C.i.hW(w.r_(256),16),2,"0")
return C.e.hO(v)},
aTO(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aTO=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.T()
q=r.b
q===$&&A.b()
q=q.gbE().e.a
u=(q==null?null:q.r).a
t=C.f.p(e,".")?C.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dBW()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.rf(s,d,new A.uX(!1,f)),$async$aTO)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Cm(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTO,w)},
d8v(d){var x,w=C.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.cn(null,new B.cJc(),!1,d,!0,!1,null,l),$async$rC)
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
return A.d(new A.lE().YQ(85,2048,C.fn),$async$rC)
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
return A.d(B.aTO(t,s,B.d8v(s)),$async$rC)
case 12:v=new j.Ik(f,r,s)
x=1
break
case 7:x=13
return A.d($.dcO().y5(D.bzr,null,null),$async$rC)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rC)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.bZJ)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.c4(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbt9(p))
if(C.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aTO(t,l,B.d8v(l)),$async$rC)
case 15:v=new j.Ik(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cn(null,new B.cJd(),!1,d,!0,!1,null,l),$async$rC)
case 16:n=f
v=n==null?null:new B.Ik("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cn(null,new B.cJe(),!1,d,!0,!0,null,l),$async$rC)
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
cJc:function cJc(){},
cJd:function cJd(){},
cJe:function cJe(){},
NH:function NH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bIc:function bIc(d,e){this.a=d
this.b=e},
Z2:function Z2(d){this.a=d},
cuS:function cuS(d,e){this.a=d
this.b=e},
Og:function Og(d){this.a=d},
adr:function adr(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bXx:function bXx(d){this.a=d},
bXy:function bXy(d,e){this.a=d
this.b=e},
bXz:function bXz(d){this.a=d},
bXA:function bXA(d){this.a=d},
bXC:function bXC(d){this.a=d},
bXB:function bXB(d,e,f){this.a=d
this.b=e
this.c=f},
QL:function QL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZs:function aZs(d,e){this.a=d
this.b=e},
aZp:function aZp(d){this.a=d},
aZr:function aZr(d){this.a=d},
aZq:function aZq(d){this.a=d},
aZt:function aZt(d){this.a=d},
duc(d){return new B.w4(d,A.A(y.N,y.F),new A.ae(A.iY(0,0),0,!1))},
cWn(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dz(d,new B.cOY(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w4:function w4(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bD2:function bD2(){},
bD3:function bD3(d){this.a=d},
bD0:function bD0(){},
bD1:function bD1(){},
bD4:function bD4(d,e){this.a=d
this.b=e},
bD5:function bD5(d){this.a=d},
bD_:function bD_(d){this.a=d},
bD8:function bD8(){},
bD9:function bD9(){},
bD6:function bD6(){},
bD7:function bD7(){},
cOY:function cOY(){},
a_1(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_1=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.bZa)
x=1
break}x=3
return A.d(A.cn(null,new B.cOk(A.e3(h,0,A.eT(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_1)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(K.ws(d,e,f,u.c,u.d,g,t),$async$a_1)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_1,w)},
Bb:function Bb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cOk:function cOk(d){this.a=d},
cOj:function cOj(d,e){this.a=d
this.b=e},
cQI(d,e,f,g,h,i,j){return new B.anu(f,d,i,j,g,h,e,null)},
anu:function anu(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZz:function aZz(){},
aZw:function aZw(d){this.a=d},
aZy:function aZy(d){this.a=d},
aZx:function aZx(){},
cZi(d){var x,w,v,u
for(x=new A.cc(d),w=y.V,x=new A.ak(x,x.gA(0),w.i("ak<U.E>")),w=w.i("U.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDV[C.i.ao(v,5)]},
zG:function zG(d,e,f,g){var _=this
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
aZu:function aZu(d,e){this.a=d
this.b=e},
aZv:function aZv(d,e){this.a=d
this.b=e},
QO:function QO(d,e){this.c=d
this.a=e},
bmW:function bmW(d,e){this.a=d
this.b=e},
aXj:function aXj(){},
aXk:function aXk(){},
al9:function al9(){},
In:function In(){},
b_2:function b_2(d,e){this.a=d
this.b=e},
abJ:function abJ(){},
d1T(d,e,f,g,h,i,j,k){return new B.a4W(A.dFF(B.dGm(),i,j),d,g,h,e,A.akA(e),f,i.i("@<0>").b6(j).b6(k).i("a4W<1,2,3>"))},
bil(d,e,f,g,h,i,j,k,l,m){return new A.xN(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("xN<1,2>"))},
a4W:function a4W(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,O,P,Q,R,S,T,U,F
J=c[1]
A=c[0]
C=c[2]
G=c[375]
H=c[172]
I=c[328]
K=c[150]
E=c[231]
L=c[266]
M=c[181]
N=c[420]
B=a.updateHolder(c[116],B)
D=c[240]
O=c[373]
P=c[387]
Q=c[398]
R=c[249]
S=c[261]
T=c[177]
U=c[419]
F=c[228]
B.Ik.prototype={
gaq(d){return this.c}}
B.NH.prototype={
u(d){var x=null,w=A.a0(18),v=A.a0(18)
return A.eF(!1,w,!0,new A.R(C.hq,A.B(A.a([A.D(x,A.b2(this.c,$.ap,x,x,26),C.r,x,x,new A.O(C.ac,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aF,A.i(this.d,x,x,x,x,C.j2,x,x,x)],y.p),C.w,C.j,C.K,0,C.v),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bIc(this,d),x,x,x,x,x,x,x)}}
B.Z2.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bx8[x]
v=new A.b4(14,14)
s.push(A.eF(!1,new A.cf(v,v,v,v),!0,new A.R(C.qi,A.arI(w,C.k8,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cuS(d,w),u,u,u,u,u,u,u))}return new A.R(D.at6,A.B(A.a([D.cdt,C.P,A.Sg(1,s,4,8,8,u,C.dr,!0)],t),C.G,C.j,C.K,0,C.v),u)}}
B.Og.prototype={
P(){return new B.adr(new A.aI(C.ao,$.ac()),D.bz4)}}
B.adr.prototype={
al(){this.aH()
this.I3("")},
m(){var x=this.d
x.Z$=$.ac()
x.X$=0
this.a7()},
I3(d){return this.bgI(d)},
bgI(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$I3=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bXx(s))
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
p=A.aiL("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUa(p,null),$async$I3)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bq.jT(0,A.ja(A.j8(q.e)).bI(0,q.w),null)),"data"))
s.q(new B.bXy(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bXz(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bXA(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$I3,w)},
u(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cN(w,C.a9,!1,w,!0,C.z,w,A.cQ(),x.d,w,w,w,w,w,2,D.aF4,C.a2,!0,w,!0,w,!1,w,C.aJ,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTy(),w,!1,w,w,!1,w,!0,w,C.aw,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.au,w,C.b8,w,C.t3,w,w),t=x.r
if(t!=null)t=A.bN(A.i(t,w,w,w,w,C.jY,C.a5,w,w),w,w)
else t=x.f?D.bXV:M.a2O(w,C.a2,U.a8M,new B.bXC(x),x.e.length,w,w,!1)
return A.aJ(new A.R(D.at3,A.B(A.a([u,C.aa,A.a6(t,1),C.aF,D.adk],y.p),C.G,C.j,C.m,0,C.v),w),v.a.b*0.62,w)}}
B.QL.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b4(s.c,"asset:"))return A.arI(C.f.bD(s.c,6),C.k8,120,120)
if(p==="image"||p==="gif")return A.dP(r,A.fX(A.a0(16),new A.eA(new A.aP(0,q,0,320),A.jX(s.c,new B.aZq(q),C.bJ,r,new B.aZr(q),r,r),r),C.b1),C.a2,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aZs(s,d),r,r,r,r,r,r,!1,C.bd)
p=A.a0(16)
x=s.f
w=x?$.ap:C.ac
v=A.a0(16)
u=A.b2(N.OS,x?C.t:$.ap,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a0,r,r,A.aG(r,r,x?C.t:C.A,r,r,r,r,r,r,r,r,13,r,r,C.J,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eF(!1,p,!0,A.D(r,A.Q(A.a([u,C.ai,new A.dI(1,C.bh,t,r),C.br,A.b2(I.ve,x?C.t:C.S,r,r,18)],y.p),C.w,C.j,C.K,0,r,r),C.r,r,new A.aP(0,q,0,1/0),new A.O(w,r,r,v,r,r,C.y),r,r,r,D.asz,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aZt(s),r,r,r,r,r,r,r)},
gaq(d){return this.e}}
B.w4.prototype={
d4(){var x=this,w=y.T,v=A.eP(x).H(A.cv($.b8(),new B.bD2(),y.D,w),w)
A.eP(x).Yl(new B.bD3(x))
if(v==null)return C.a9
w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LX(0,"typing:"+x.x,C.yf).by7(new B.bD4(x,v),"typing")
w.PT(0)
x.y=w
x.Q=A.w3(C.ho,new B.bD5(x))
return C.a9},
ake(){var x,w=this,v=w.z
v.ec(v,new B.bD_(new A.ae(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.ce(v,v.r,v.e,A.u(v).i("ce<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aS(w.ga2(0))||!C.e.e6(x,J.dhT(w.ga2(0))))w.sa2(0,x)},
acF(d){var x,w=this,v=w.y,u=A.eP(w).a1(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ae(Date.now(),0,!1)
if(x.cV(w.as).a<2e6)return
w.as=x
v.aeh(0,"typing",A.S(["id",t,"name",d],y.N,y.z),C.GM).cC(new B.bD8(),new B.bD9(),y.H)},
d2(d){var x=this.y,w=A.eP(this).a1(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ae(A.iY(0,0),0,!1)
x.aeh(0,"typing",A.S(["id",v,"stop",!0],y.N,y.z),C.GM).cC(new B.bD6(),new B.bD7(),y.H)}}
B.Bb.prototype={}
B.anu.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cF(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a0,r,r,L.It,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a0,r,r,A.aG(r,r,s.f?C.e8:C.S,r,r,r,r,r,r,r,r,12,r,r,C.J,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.Q(A.a([q,C.ar,A.a6(A.B(w,C.G,C.j,C.K,0,C.v),1)],x),C.w,C.j,C.m,0,r,r)
q=A.a([new A.cY(0,C.bl,C.A.cd(0.06),C.Ge,14)],y.E)
w=A.aw(d,C.b5,y.w).w
v=new B.aZz().$3(C.lE,"Voltar",new B.aZw(d))
t=s.r
v=A.a([v,C.ar,A.a6(t==null?u:A.aU(u,t,r),1)],x)
C.e.n(v,A.a([C.ai,A.Eh(A.D(C.L,P.Ee,C.r,r,r,C.cG,r,44,r,r,r,r,44),r,new B.aZx(),new B.aZy(s),r,D.bPK,"Mais op\xe7\xf5es",y.N)],x))
return A.D(r,A.B(A.a([A.Q(v,C.w,C.j,C.m,0,r,r)],x),C.I,C.j,C.K,0,C.v),C.r,r,r,new A.O(C.t,r,r,r,q,r,C.y),r,r,r,new A.a2(16,w.r.b+10,16,12),r,r,r)},
gaq(d){return this.c}}
B.zG.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.R(E.N0,A.i(v,x,x,x,x,A.aG(x,x,B.cZi(v),x,x,x,x,x,x,x,x,12,x,x,C.J,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,x,A.aG(x,x,s?C.t:C.A,x,x,x,x,x,x,x,x,15,x,x,C.bi,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.eA(new A.aP(0,w.a.a*0.78,0,1/0),A.D(x,A.B(o,C.G,C.j,C.K,0,C.v),C.r,x,x,new A.O(r,x,x,new A.cf(F.y8,F.y8,new A.b4(q,q),new A.b4(p,p)),x,x,C.y),x,x,x,new A.a2(14,t,14,10),x,x,x),x)}}
B.QM.prototype={
ai2(d){if(!A.u8(this.c.a.a)){d.O(y.q).f.a4(D.bZp)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.n(u,A.a([A.aU(A.D(C.L,C.Pj,C.r,w,w,C.cG,w,44,w,w,w,w,44),x.e,w),C.ai],v))
v=A.a0(999)
u.push(A.a6(A.D(C.bk,A.cN(w,C.a9,!1,w,!0,C.z,w,A.cQ(),x.c,w,w,w,w,w,2,A.jh(w,C.ca,w,C.a_,w,w,w,w,!0,C.ca,w,w,w,w,w,w,!1,w,w,w,w,C.ca,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a2,!0,w,!0,w,!1,w,C.aJ,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aZu(x,d),w,!1,w,w,!1,w,!0,w,C.aw,w,w,w,w,w,w,w,w,w,w,w,C.h7,!0,C.au,w,C.b8,w,C.a9K,w,w),C.r,w,w,new A.O(C.ac,w,w,v,w,w,C.y),w,44,w,C.bL,w,w,w),1))
u.push(C.ai)
u.push(A.aU(A.D(C.L,D.aIa,C.r,w,w,C.cG,w,44,w,w,w,w,44),new B.aZv(x,d),w))
return A.D(w,A.bC(!0,new A.R(R.Nk,A.Q(u,C.w,C.j,C.m,0,w,w),w),w,Q.N1,!1),C.r,C.t,w,w,w,w,w,w,w,w,w)}}
B.QO.prototype={
u(d){var x=null,w=this.c
return A.cQq(C.fC,w==null?D.bXr:new A.R(D.ata,A.bN(A.i(w,x,x,x,x,C.hL,x,x,x),x,x),x),C.cl,C.aE)}}
B.bmW.prototype={
I(){return"PopupMenuPosition."+this.b}}
B.aXj.prototype={
$1(d){return A.mT(d,null,!0,null,null,y.S,y.z)},
gWS(d){return D.ahj},
ay9(d,e,f,g,h){return this.gWS(this).$3$1(e,f,g,h)}}
B.aXk.prototype={
$3$1(d,e,f,g){return B.d1T(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.al9.prototype={}
B.In.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.b_2(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.abJ.prototype={}
B.a4W.prototype={}
var z=a.updateTypes(["Z2(N)","Og(N)","F<~>(c)","t<c>()","w4(c)","xN<0^,1^>(0^(){$allTransitiveDependencies!z<h2>?,argument!I?,dependencies!z<h2>?,from!kI?,isAutoDispose!y,name!c?,retry!bo?(v,I)?})<fb<1^>,I?>"])
B.cJc.prototype={
$1(d){var x=null,w=y.p
return new A.R(D.atD,A.B(A.a([A.Q(A.a([new B.NH(C.jG,"Foto","photo",x),new B.NH(D.aCa,"Ficheiro","file",x),new B.NH(S.jD,"Sticker","sticker",x),new B.NH(D.aC3,"GIF","gif",x)],w),C.w,C.FV,C.m,0,x,x)],w),C.w,C.j,C.K,0,C.v),x)},
$S:68}
B.cJd.prototype={
$1(d){return D.coU},
$S:z+0}
B.cJe.prototype={
$1(d){return D.cm9},
$S:z+1}
B.bIc.prototype={
$0(){return A.aq(this.b,!1).aj(this.a.e)},
$S:0}
B.cuS.prototype={
$0(){return A.aq(this.a,!1).aj(this.b)},
$S:0}
B.bXx.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bXy.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bk(this.b,y.P),v=A.u(w),w=new A.ak(w,w.gA(w),v.i("ak<U.E>")),u=y.f,v=v.i("U.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bw(s,new A.a3(A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bXz.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bXA.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bXC.prototype={
$2(d,e){var x=null,w=this.a
return A.eF(!1,x,!0,A.fX(A.a0(10),A.jX(w.e[e].a,x,C.bJ,x,x,x,x),C.b1),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bXB(w,d,e),x,x,x,x,x,x,x)},
$S:469}
B.bXB.prototype={
$0(){return A.aq(this.b,!1).aj(this.a.e[this.c].b)},
$S:0}
B.aZs.prototype={
$0(){var x=y.H
return A.aq(this.b,!1).ib(A.to(new B.aZp(this.a),null,x),x)},
$S:0}
B.aZp.prototype={
$1(d){var x=null
return A.ks(A.cQs(C.al,x,C.t,x),C.al,A.bN(H.cRS(C.a_,A.qI(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1340}
B.aZr.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1341}
B.aZq.prototype={
$3(d,e,f){var x=null
return A.D(x,D.aDR,C.r,C.ac,x,x,x,120,x,x,x,x,this.a)},
$S:63}
B.aZt.prototype={
$0(){return A.z9(A.dr(this.a.c,0,null),C.qA,null)},
$S:0}
B.bD2.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.bD3.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yb(x).cC(new B.bD0(),new B.bD1(),y.H)}},
$S:0}
B.bD0.prototype={
$1(d){},
$S:120}
B.bD1.prototype={
$1(d){},
$S:14}
B.bD4.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e7(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a3(v,new A.ae(Date.now(),0,!1).ed(5e6)))}u.ake()},
$S:248}
B.bD5.prototype={
$1(d){return this.a.ake()},
$S:72}
B.bD_.prototype={
$2(d,e){return e.b.eR(this.a)},
$S:1342}
B.bD8.prototype={
$1(d){},
$S:212}
B.bD9.prototype={
$1(d){},
$S:14}
B.bD6.prototype={
$1(d){},
$S:212}
B.bD7.prototype={
$1(d){},
$S:14}
B.cOY.prototype={
$1(d){return C.e.gM(d.split(" "))},
$S:24}
B.cOk.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a0,r,r,C.Is,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r,r)
p.push(A.j0(!1,C.a_,r,r,!0,r,r,r,!0,r,D.aDF,r,r,r,r,new B.cOj(d,u),!1,r,r,r,r,r,s,r,t,r,E.Pr,r))}return A.bC(!0,new A.R(D.at7,A.B(A.a([D.chi,C.at,D.c9k,C.X,new A.dI(1,C.bh,A.cZ(p,r,r,r,r,!1,C.a1,!0),r)],q),C.G,C.j,C.K,0,C.v),r),r,C.a_,!0)},
$S:48}
B.cOj.prototype={
$0(){return A.aq(this.a,!1).aj(this.b)},
$S:0}
B.aZz.prototype={
$3(d,e,f){var x=null
return A.kS(A.aU(A.D(C.L,d,C.r,x,x,C.cG,x,44,x,x,x,x,44),f,x),x,e)},
$S:1343}
B.aZw.prototype={
$0(){return A.aq(this.a,!1).ix()},
$S:0}
B.aZy.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aZx.prototype={
$1(d){return D.by2},
$S:57}
B.aZu.prototype={
$1(d){return this.a.ai2(this.b)},
$S:3}
B.aZv.prototype={
$0(){return this.a.ai2(this.b)},
$S:0}
B.b_2.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("In.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.adr.prototype,"gaTy","I3",2)
w(B,"dHj","duc",4)
v(B.w4.prototype,"giJ","d4",3)
u(B,"dGm",1,function(){return{$allTransitiveDependencies:C.cH,argument:C.cH,dependencies:C.cH,from:C.cH,isAutoDispose:C.cH,name:C.cH,retry:C.cH}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bil",function(d,e,f,g,h,i,j,k){return B.bil(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bil(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bil(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.I,[B.Ik,B.Bb,B.aXj,B.aXk,B.al9])
w(A.bx,[B.cJc,B.cJd,B.cJe,B.aZp,B.aZr,B.aZq,B.bD2,B.bD0,B.bD1,B.bD4,B.bD5,B.bD8,B.bD9,B.bD6,B.bD7,B.cOY,B.cOk,B.aZz,B.aZy,B.aZx,B.aZu])
w(A.L,[B.NH,B.Z2,B.QL,B.anu,B.zG,B.QM,B.QO])
w(A.bR,[B.bIc,B.cuS,B.bXx,B.bXy,B.bXz,B.bXA,B.bXB,B.aZs,B.aZt,B.bD3,B.cOj,B.aZw,B.aZv,B.b_2])
v(B.Og,A.K)
v(B.adr,A.a_)
w(A.cR,[B.bXC,B.bD_])
v(B.w4,A.fb)
v(B.bmW,A.fr)
v(B.abJ,A.kI)
v(B.In,B.abJ)
v(B.a4W,B.In)
x(B.abJ,B.al9)})()
A.bq(b.typeUniverse,JSON.parse('{"Z2":{"L":[],"e":[],"f":[]},"Og":{"K":[],"e":[],"f":[]},"NH":{"L":[],"e":[],"f":[]},"adr":{"a_":["Og"]},"QL":{"L":[],"e":[],"f":[]},"w4":{"fb":["t<c>"]},"anu":{"L":[],"e":[],"f":[]},"zG":{"L":[],"e":[],"f":[]},"QM":{"L":[],"e":[],"f":[]},"QO":{"L":[],"e":[],"f":[]},"In":{"kI":[],"h2":[],"GX":[],"lG":[]},"a4W":{"In":["1","2","2","3","2","xN<1,2>"],"kI":[],"h2":[],"GX":[],"lG":[],"In.0":"1"}}'))
A.Po(b.typeUniverse,JSON.parse('{"al9":5,"abJ":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cG"),V:x("cc"),E:x("r<cY>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dn"),S:x("fb<@>"),F:x("+(c,ae)"),C:x("Bb"),N:x("c"),q:x("ds"),z:x("@"),r:x("v"),B:x("Ik?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c84=new A.E("Powered by GIPHY",null,G.Ir,null,null,null,null,null,null,null,null)
D.adk=new A.d4(C.dS,null,null,D.c84,null)
D.KC=new B.aXj()
D.ahj=new B.aXk()
D.asz=new A.a2(12,10,14,10)
D.at3=new A.a2(16,16,16,12)
D.at6=new A.a2(16,16,16,24)
D.at7=new A.a2(16,16,16,8)
D.ata=new A.a2(16,2,16,8)
D.atD=new A.a2(20,18,20,24)
D.aC3=new A.aV(57404,"HeroiconsSolid",null,!1)
D.aCa=new A.aV(57436,"HeroiconsSolid",null,!1)
D.aDF=new A.ba(C.fm,null,C.S,null,null,null)
D.aDR=new A.ba(C.jG,null,C.S,null,null,null)
D.aCW=new A.ba(C.vj,null,null,null,null,null)
D.aF4=new A.dT(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aIa=new A.qO("M12 19V5M5 12l7-7 7 7",18,C.t,2.4,!1,C.cZ,null)
D.bx8=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bPF=new A.jH("report",!0,O.aaW,null,A.w("jH<c>"))
D.by2=x([D.bPF],A.w("r<pA<c>>"))
D.bzr=x([],A.w("r<d5x>"))
D.bz4=x([],y.L)
D.amN=new A.W(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.anC=new A.W(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.aoF=new A.W(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.anc=new A.W(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bDV=x([D.amN,C.e8,D.anC,D.aoF,D.anc],A.w("r<W>"))
D.bPK=new B.bmW(1,"under")
D.bXr=new A.c3(1/0,null,null,null)
D.bXV=new T.yi(12,3,null)
D.ceM=new A.E("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bZa=new A.bI(D.ceM,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cfQ=new A.E("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bZp=new A.bI(D.cfQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.ced=new A.E("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bZJ=new A.bI(D.ced,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.c9k=new A.E("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.W,null,null,null,null,null,null,null,null)
D.cdt=new A.E("Stickers",null,C.ap,null,null,null,null,null,null,null,null)
D.chi=new A.E("Que mensagem queres denunciar?",null,C.ej,null,null,null,null,null,null,null,null)
D.cm9=new B.Og(null)
D.coU=new B.Z2(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUG","CI",()=>D.KC.ay9(0,B.dHj(),A.w("w4"),A.w("t<c>"),y.N))})()};
(a=>{a["1k7nrIdYj7XBdYGTGMA7LhuPxL4="]=a.current})($__dart_deferred_initializers__);