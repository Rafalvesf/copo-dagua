((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,E,L,M,N,B={
dxe(){var x,w=$.Pv(),v=J.nt(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aZ(C.i.hU(w.qX(256),16),2,"0")
return C.e.hM(v)},
aS5(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aS5=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.T()
q=r.b
q===$&&A.b()
q=q.gbE().e.a
u=(q==null?null:q.r).a
t=C.f.n(e,".")?C.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dxe()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.rb(s,d,new A.uJ(!1,f)),$async$aS5)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cb(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aS5,w)},
d4o(d){var x,w=C.e.ga5(d.split(".")).toLowerCase()
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
rn(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rn=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.ck(null,new B.cFf(),!1,d,!0,!1,null,l),$async$rn)
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
return A.d(new A.ly().Yp(85,2048,C.fi),$async$rn)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kn(),$async$rn)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.fo(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aS5(t,s,B.d4o(s)),$async$rn)
case 12:v=new j.HQ(f,r,s)
x=1
break
case 7:x=13
return A.d($.d8A().xX(D.bxt,null,null),$async$rn)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kn(),$async$rn)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.bWo)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.c4(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbrL(p))
if(C.f.fo(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aS5(t,l,B.d4o(l)),$async$rn)
case 15:v=new j.HQ(f,r,l)
x=1
break
case 8:x=16
return A.d(A.ck(null,new B.cFg(),!1,d,!0,!1,null,l),$async$rn)
case 16:n=f
v=n==null?null:new B.HQ("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.ck(null,new B.cFh(),!1,d,!0,!0,null,l),$async$rn)
case 17:m=f
v=m==null?null:new B.HQ(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rn,w)},
HQ:function HQ(d,e,f){this.a=d
this.b=e
this.c=f},
cFf:function cFf(){},
cFg:function cFg(){},
cFh:function cFh(){},
Nc:function Nc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bFw:function bFw(d,e){this.a=d
this.b=e},
Yi:function Yi(d){this.a=d},
cqV:function cqV(d,e){this.a=d
this.b=e},
NM:function NM(d){this.a=d},
acp:function acp(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bU5:function bU5(d){this.a=d},
bU6:function bU6(d,e){this.a=d
this.b=e},
bU7:function bU7(d){this.a=d},
bU8:function bU8(d){this.a=d},
bUa:function bUa(d){this.a=d},
bU9:function bU9(d,e,f){this.a=d
this.b=e
this.c=f},
Qg:function Qg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aXB:function aXB(d,e){this.a=d
this.b=e},
aXy:function aXy(d){this.a=d},
aXA:function aXA(d){this.a=d},
aXz:function aXz(d){this.a=d},
aXC:function aXC(d){this.a=d},
dpy(d){return new B.vO(d,A.A(y.N,y.F),new A.af(A.iW(0,0),0,!1))},
cSo(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dw(d,new B.cKO(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
vO:function vO(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bAi:function bAi(){},
bAj:function bAj(d){this.a=d},
bAg:function bAg(){},
bAh:function bAh(){},
bAk:function bAk(d,e){this.a=d
this.b=e},
bAl:function bAl(d){this.a=d},
bAf:function bAf(d){this.a=d},
bAo:function bAo(){},
bAp:function bAp(){},
bAm:function bAm(){},
bAn:function bAn(){},
cKO:function cKO(){},
Zg(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$Zg=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.bVQ)
x=1
break}x=3
return A.d(A.ck(null,new B.cKd(A.dW(h,0,A.eO(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$Zg)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(K.w8(d,e,f,u.c,u.d,g,t),$async$Zg)
case 4:case 1:return A.l(v,w)}})
return A.m($async$Zg,w)},
AM:function AM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cKd:function cKd(d){this.a=d},
cKc:function cKc(d,e){this.a=d
this.b=e},
cMD(d,e,f,g,h,i,j){return new B.ame(f,d,i,j,g,h,e,null)},
ame:function ame(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aXI:function aXI(){},
aXF:function aXF(d){this.a=d},
aXH:function aXH(d){this.a=d},
aXG:function aXG(){},
cVi(d){var x,w,v,u
for(x=new A.c8(d),w=y.V,x=new A.ai(x,x.gA(0),w.i("ai<U.E>")),w=w.i("U.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bBT[C.i.av(v,5)]},
zd:function zd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Qh:function Qh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXD:function aXD(d,e){this.a=d
this.b=e},
aXE:function aXE(d,e){this.a=d
this.b=e},
Qj:function Qj(d,e){this.c=d
this.a=e},
bkn:function bkn(d,e){this.a=d
this.b=e},
aVy:function aVy(){},
aVz:function aVz(){},
ajV:function ajV(){},
HW:function HW(){},
aYa:function aYa(d,e){this.a=d
this.b=e},
aaK:function aaK(){},
cYO(d,e,f,g,h,i,j,k){return new B.a40(A.dAQ(B.dBu(),i,j),d,g,h,e,A.ajl(e),f,i.i("@<0>").b6(j).b6(k).i("a40<1,2,3>"))},
bfR(d,e,f,g,h,i,j,k,l,m){return new A.xn(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("xn<1,2>"))},
a40:function a40(d,e,f,g,h,i,j,k){var _=this
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
G=c[343]
H=c[164]
I=c[289]
K=c[145]
E=c[222]
L=c[382]
M=c[172]
N=c[401]
B=a.updateHolder(c[113],B)
D=c[230]
O=c[341]
P=c[358]
Q=c[373]
R=c[377]
S=c[379]
T=c[400]
F=c[298]
B.HQ.prototype={
gar(d){return this.c}}
B.Nc.prototype={
v(d){var x=null,w=A.a2(18),v=A.a2(18)
return A.eR(!1,w,!0,new A.R(C.hl,A.B(A.a([A.C(x,A.b2(this.c,$.ap,x,x,26),C.r,x,x,new A.O(C.aa,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aF,A.i(this.d,x,x,x,x,C.jP,x,x,x)],y.p),C.x,C.j,C.P,0,C.v),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bFw(this,d),x,x,x,x,x,x,x)}}
B.Yi.prototype={
v(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bvb[x]
v=new A.b5(14,14)
s.push(A.eR(!1,new A.cc(v,v,v,v),!0,new A.R(C.q3,A.aqq(w,C.k0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cqV(d,w),u,u,u,u,u,u,u))}return new A.R(D.arN,A.B(A.a([D.ca0,C.R,A.RL(1,s,4,8,8,u,C.eL,!0)],t),C.I,C.j,C.P,0,C.v),u)}}
B.NM.prototype={
R(){return new B.acp(new A.aI(C.ao,$.ad()),D.bx8)}}
B.acp.prototype={
am(){this.aJ()
this.HV("")},
m(){var x=this.d
x.Z$=$.ad()
x.X$=0
this.a8()},
HV(d){return this.bfq(d)},
bfq(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HV=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bU5(s))
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
p=A.ahw("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aSt(p,null),$async$HV)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bn.jP(0,A.j9(A.j6(q.e)).bH(0,q.w),null)),"data"))
s.q(new B.bU6(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bU7(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bU8(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HV,w)},
v(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cM(w,C.a9,!1,w,!0,C.z,w,A.cQ(),x.d,w,w,w,w,w,2,D.aDu,C.a2,!0,w,!0,w,!1,w,C.aK,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaSN(),w,!1,w,w,!1,w,!0,w,C.ax,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.as,w,C.ba,w,C.rL,w,w),t=x.r
if(t!=null)t=A.bT(A.i(t,w,w,w,w,C.iY,C.a5,w,w),w,w)
else t=x.f?C.br:M.a2_(w,C.a2,T.a7I,new B.bUa(x),x.e.length,w,w,!1)
return A.aP(new A.R(D.arK,A.B(A.a([u,C.ae,A.a6(t,1),C.aF,D.acc],y.p),C.I,C.j,C.o,0,C.v),w),v.a.b*0.62,w)}}
B.Qg.prototype={
v(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b3(s.c,"asset:"))return A.aqq(C.f.bD(s.c,6),C.k0,120,120)
if(p==="image"||p==="gif")return A.dP(r,A.hh(A.a2(16),new A.eu(new A.aL(0,q,0,320),A.kr(s.c,new B.aXz(q),C.bM,r,new B.aXA(q),r,r),r),C.b6),C.a2,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aXB(s,d),r,r,r,r,r,r,!1,C.bc)
p=A.a2(16)
x=s.f
w=x?$.ap:C.aa
v=A.a2(16)
u=A.b2(N.O3,x?C.t:$.ap,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a_,r,r,A.aH(r,r,x?C.t:C.A,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eR(!1,p,!0,A.C(r,A.Q(A.a([u,C.aj,new A.dL(1,C.bh,t,r),C.bt,A.b2(I.uX,x?C.t:C.T,r,r,18)],y.p),C.x,C.j,C.P,0,r,r),C.r,r,new A.aL(0,q,0,1/0),new A.O(w,r,r,v,r,r,C.y),r,r,r,D.ard,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aXC(s),r,r,r,r,r,r,r)},
gar(d){return this.e}}
B.vO.prototype={
d1(){var x=this,w=y.T,v=A.eI(x).F(A.cw($.b8(),new B.bAi(),y.D,w),w)
A.eI(x).XV(new B.bAj(x))
if(v==null)return C.a9
w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.a7z(0,"typing:"+x.x,C.a5M).bwI(new B.bAk(x,v),"typing")
w.aer(0)
x.y=w
x.Q=A.Bf(C.hh,new B.bAl(x))
return C.a9},
ajM(){var x,w=this,v=w.z
v.ec(v,new B.bAf(new A.af(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cb(v,v.r,v.e,A.u(v).i("cb<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aS(w.ga2(0))||!C.e.e8(x,J.ddF(w.ga2(0))))w.sa2(0,x)},
aca(d){var x,w=this,v=w.y,u=A.eI(w).a1(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.af(Date.now(),0,!1)
if(x.d0(w.as).a<2e6)return
w.as=x
v.adM(0,"typing",A.S(["id",t,"name",d],y.N,y.z),C.G9).cB(new B.bAo(),new B.bAp(),y.H)},
fT(d){var x=this.y,w=A.eI(this).a1(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.af(A.iW(0,0),0,!1)
x.adM(0,"typing",A.S(["id",v,"stop",!0],y.N,y.z),C.G9).cB(new B.bAm(),new B.bAn(),y.H)}}
B.AM.prototype={}
B.ame.prototype={
v(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cA(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a_,r,r,L.HO,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a_,r,r,A.aH(r,r,s.f?C.eZ:C.T,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.Q(A.a([q,C.au,A.a6(A.B(w,C.I,C.j,C.P,0,C.v),1)],x),C.x,C.j,C.o,0,r,r)
q=A.a([new A.cX(0,C.bi,C.A.ci(0.06),C.FC,14)],y.E)
w=A.aw(d,C.b9,y.w).w
v=new B.aXI().$3(C.lA,"Voltar",new B.aXF(d))
t=s.r
v=A.a([v,C.au,A.a6(t==null?u:A.aT(u,t,r),1)],x)
C.e.p(v,A.a([C.aj,A.DS(A.C(C.K,P.DC,C.r,r,r,C.cE,r,44,r,r,r,r,44),r,new B.aXG(),new B.aXH(s),r,D.bNn,"Mais op\xe7\xf5es",y.N)],x))
return A.C(r,A.B(A.a([A.Q(v,C.x,C.j,C.o,0,r,r)],x),C.J,C.j,C.P,0,C.v),C.r,r,r,new A.O(C.t,r,r,r,q,r,C.y),r,r,r,new A.a0(16,w.r.b+10,16,12),r,r,r)},
gar(d){return this.c}}
B.zd.prototype={
v(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.R(E.Mh,A.i(v,x,x,x,x,A.aH(x,x,B.cVi(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,x,A.aH(x,x,s?C.t:C.A,x,x,x,x,x,x,x,x,15,x,x,C.be,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.eu(new A.aL(0,w.a.a*0.78,0,1/0),A.C(x,A.B(o,C.I,C.j,C.P,0,C.v),C.r,x,x,new A.O(r,x,x,new A.cc(F.xP,F.xP,new A.b5(q,q),new A.b5(p,p)),x,x,C.y),x,x,x,new A.a0(14,t,14,10),x,x,x),x)}}
B.Qh.prototype={
ahy(d){if(!A.tW(this.c.a.a)){d.O(y.q).f.a4(D.bW4)
return}this.d.$0()},
v(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.p(u,A.a([A.aT(A.C(C.K,C.Ou,C.r,w,w,C.cE,w,44,w,w,w,w,44),x.e,w),C.aj],v))
v=A.a2(999)
u.push(A.a6(A.C(C.bq,A.cM(w,C.a9,!1,w,!0,C.z,w,A.cQ(),x.c,w,w,w,w,w,2,A.jf(w,C.cf,w,C.a0,w,w,w,w,!0,C.cf,w,w,w,w,w,w,!1,w,w,w,w,C.cf,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a2,!0,w,!0,w,!1,w,C.aK,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aXD(x,d),w,!1,w,w,!1,w,!0,w,C.ax,w,w,w,w,w,w,w,w,w,w,w,C.hD,!0,C.as,w,C.ba,w,C.a8F,w,w),C.r,w,w,new A.O(C.aa,w,w,v,w,w,C.y),w,44,w,C.bQ,w,w,w),1))
u.push(C.aj)
u.push(A.aT(A.C(C.K,D.aGy,C.r,w,w,C.cE,w,44,w,w,w,w,44),new B.aXE(x,d),w))
return A.C(w,A.bH(!0,new A.R(R.Mx,A.Q(u,C.x,C.j,C.o,0,w,w),w),w,Q.Mi,!1),C.r,C.t,w,w,w,w,w,w,w,w,w)}}
B.Qj.prototype={
v(d){var x=null,w=this.c
return A.cMl(C.fz,w==null?D.bUK:new A.R(D.arR,A.bT(A.i(w,x,x,x,x,C.hF,x,x,x),x,x),x),C.cn,C.aE)}}
B.bkn.prototype={
I(){return"PopupMenuPosition."+this.b}}
B.aVy.prototype={
$1(d){return A.mI(d,null,!0,null,null,y.S,y.z)},
gWu(d){return D.afZ},
axA(d,e,f,g,h){return this.gWu(this).$3$1(e,f,g,h)}}
B.aVz.prototype={
$3$1(d,e,f,g){return B.cYO(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.ajV.prototype={}
B.HW.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aYa(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.aaK.prototype={}
B.a40.prototype={}
var z=a.updateTypes(["Yi(N)","NM(N)","F<~>(c)","r<c>()","vO(c)","xn<0^,1^>(0^(){$allTransitiveDependencies!y<fZ>?,argument!L?,dependencies!y<fZ>?,from!kD?,isAutoDispose!z,name!c?,retry!bm?(v,L)?})<f6<1^>,L?>"])
B.cFf.prototype={
$1(d){var x=null,w=y.p
return new A.R(D.ask,A.B(A.a([A.Q(A.a([new B.Nc(C.jx,"Foto","photo",x),new B.Nc(D.aAF,"Ficheiro","file",x),new B.Nc(S.ju,"Sticker","sticker",x),new B.Nc(D.aAx,"GIF","gif",x)],w),C.x,C.Fi,C.o,0,x,x)],w),C.x,C.j,C.P,0,C.v),x)},
$S:69}
B.cFg.prototype={
$1(d){return D.clc},
$S:z+0}
B.cFh.prototype={
$1(d){return D.ciw},
$S:z+1}
B.bFw.prototype={
$0(){return A.as(this.b,!1).ak(this.a.e)},
$S:0}
B.cqV.prototype={
$0(){return A.as(this.a,!1).ak(this.b)},
$S:0}
B.bU5.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bU6.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bo(this.b,y.P),v=A.u(w),w=new A.ai(w,w.gA(w),v.i("ai<U.E>")),u=y.f,v=v.i("U.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.by(s,new A.a5(A.a_(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a_(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bU7.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bU8.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bUa.prototype={
$2(d,e){var x=null,w=this.a
return A.eR(!1,x,!0,A.hh(A.a2(10),A.kr(w.e[e].a,x,C.bM,x,x,x,x),C.b6),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bU9(w,d,e),x,x,x,x,x,x,x)},
$S:461}
B.bU9.prototype={
$0(){return A.as(this.b,!1).ak(this.a.e[this.c].b)},
$S:0}
B.aXB.prototype={
$0(){var x=y.H
return A.as(this.b,!1).ia(A.tb(new B.aXy(this.a),null,x),x)},
$S:0}
B.aXy.prototype={
$1(d){var x=null
return A.kp(A.cMn(C.al,x,C.t,x),C.al,A.bT(H.cNQ(C.a0,A.qv(this.a.c,x,x,!1,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1319}
B.aXA.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:182}
B.aXz.prototype={
$3(d,e,f){var x=null
return A.C(x,D.aCh,C.r,C.aa,x,x,x,120,x,x,x,x,this.a)},
$S:63}
B.aXC.prototype={
$0(){return A.yH(A.dn(this.a.c,0,null),C.qj,null)},
$S:0}
B.bAi.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:16}
B.bAj.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aX(0)
x=w.y
w.y=null
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.Gu(x).cB(new B.bAg(),new B.bAh(),y.H)}},
$S:0}
B.bAg.prototype={
$1(d){},
$S:114}
B.bAh.prototype={
$1(d){},
$S:14}
B.bAk.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e0(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.J(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.J(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a5(v,new A.af(Date.now(),0,!1).ei(5e6)))}u.ajM()},
$S:243}
B.bAl.prototype={
$1(d){return this.a.ajM()},
$S:78}
B.bAf.prototype={
$2(d,e){return e.b.eQ(this.a)},
$S:1321}
B.bAo.prototype={
$1(d){},
$S:227}
B.bAp.prototype={
$1(d){},
$S:14}
B.bAm.prototype={
$1(d){},
$S:227}
B.bAn.prototype={
$1(d){},
$S:14}
B.cKO.prototype={
$1(d){return C.e.gM(d.split(" "))},
$S:24}
B.cKd.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a_,r,r,C.HN,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r,r)
p.push(A.iZ(!1,C.a0,r,r,!0,r,r,r,!0,r,D.aC5,r,r,r,r,new B.cKc(d,u),!1,r,r,r,r,r,s,r,t,r,E.OC,r))}return A.bH(!0,new A.R(D.arO,A.B(A.a([D.cb1,C.aq,D.c65,C.Y,new A.dL(1,C.bh,A.d5(p,r,r,r,r,!1,C.a3,!0),r)],q),C.I,C.j,C.P,0,C.v),r),r,C.a0,!0)},
$S:42}
B.cKc.prototype={
$0(){return A.as(this.a,!1).ak(this.b)},
$S:0}
B.aXI.prototype={
$3(d,e,f){var x=null
return A.kN(A.aT(A.C(C.K,d,C.r,x,x,C.cE,x,44,x,x,x,x,44),f,x),x,e)},
$S:1322}
B.aXF.prototype={
$0(){return A.as(this.a,!1).jU()},
$S:0}
B.aXH.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aXG.prototype={
$1(d){return D.bw5},
$S:55}
B.aXD.prototype={
$1(d){return this.a.ahy(this.b)},
$S:3}
B.aXE.prototype={
$0(){return this.a.ahy(this.b)},
$S:0}
B.aYa.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("HW.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.acp.prototype,"gaSN","HV",2)
w(B,"dCn","dpy",4)
v(B.vO.prototype,"giF","d1",3)
u(B,"dBu",1,function(){return{$allTransitiveDependencies:C.cF,argument:C.cF,dependencies:C.cF,from:C.cF,isAutoDispose:C.cF,name:C.cF,retry:C.cF}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bfR",function(d,e,f,g,h,i,j,k){return B.bfR(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bfR(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bfR(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[B.HQ,B.AM,B.aVy,B.aVz,B.ajV])
w(A.bw,[B.cFf,B.cFg,B.cFh,B.aXy,B.aXA,B.aXz,B.bAi,B.bAg,B.bAh,B.bAk,B.bAl,B.bAo,B.bAp,B.bAm,B.bAn,B.cKO,B.cKd,B.aXI,B.aXH,B.aXG,B.aXD])
w(A.M,[B.Nc,B.Yi,B.Qg,B.ame,B.zd,B.Qh,B.Qj])
w(A.bR,[B.bFw,B.cqV,B.bU5,B.bU6,B.bU7,B.bU8,B.bU9,B.aXB,B.aXC,B.bAj,B.cKc,B.aXF,B.aXE,B.aYa])
v(B.NM,A.I)
v(B.acp,A.a1)
w(A.cS,[B.bUa,B.bAf])
v(B.vO,A.f6)
v(B.bkn,A.fy)
v(B.aaK,A.kD)
v(B.HW,B.aaK)
v(B.a40,B.HW)
x(B.aaK,B.ajV)})()
A.bx(b.typeUniverse,JSON.parse('{"Yi":{"M":[],"e":[],"f":[]},"NM":{"I":[],"e":[],"f":[]},"Nc":{"M":[],"e":[],"f":[]},"acp":{"a1":["NM"]},"Qg":{"M":[],"e":[],"f":[]},"vO":{"f6":["r<c>"]},"ame":{"M":[],"e":[],"f":[]},"zd":{"M":[],"e":[],"f":[]},"Qh":{"M":[],"e":[],"f":[]},"Qj":{"M":[],"e":[],"f":[]},"HW":{"kD":[],"fZ":[],"Gx":[],"lA":[]},"a40":{"HW":["1","2","2","3","2","xn<1,2>"],"kD":[],"fZ":[],"Gx":[],"lA":[],"HW.0":"1"}}'))
A.OU(b.typeUniverse,JSON.parse('{"ajV":5,"aaK":6}'))
var y=(function rtii(){var x=A.x
return{D:x("cG"),V:x("c8"),E:x("t<cX>"),L:x("t<+(c,c)>"),s:x("t<c>"),p:x("t<e>"),j:x("r<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dx"),S:x("f6<@>"),F:x("+(c,af)"),C:x("AM"),N:x("c"),q:x("dA"),z:x("@"),r:x("v"),B:x("HQ?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c4P=new A.D("Powered by GIPHY",null,G.HM,null,null,null,null,null,null,null,null)
D.acc=new A.dg(C.dO,null,null,D.c4P,null)
D.JT=new B.aVy()
D.afZ=new B.aVz()
D.ard=new A.a0(12,10,14,10)
D.arK=new A.a0(16,16,16,12)
D.arN=new A.a0(16,16,16,24)
D.arO=new A.a0(16,16,16,8)
D.arR=new A.a0(16,2,16,8)
D.ask=new A.a0(20,18,20,24)
D.aAx=new A.aW(57404,"HeroiconsSolid",null,!1)
D.aAF=new A.aW(57436,"HeroiconsSolid",null,!1)
D.aC5=new A.be(C.fh,null,C.T,null,null,null)
D.aCh=new A.be(C.jx,null,C.T,null,null,null)
D.aBp=new A.be(C.v3,null,null,null,null,null)
D.aDu=new A.dR(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aBp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGy=new A.qB("M12 19V5M5 12l7-7 7 7",18,C.t,2.4,!1,C.d7,null)
D.bvb=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bNi=new A.jG("report",!0,O.a9R,null,A.x("jG<c>"))
D.bw5=x([D.bNi],A.x("t<pq<c>>"))
D.bxt=x([],A.x("t<d1o>"))
D.bx8=x([],y.L)
D.als=new A.W(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.ami=new A.W(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.anm=new A.W(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.alT=new A.W(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bBT=x([D.als,C.eZ,D.ami,D.anm,D.alT],A.x("t<W>"))
D.bNn=new B.bkn(1,"under")
D.bUK=new A.c5(1/0,null,null,null)
D.cbd=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bVQ=new A.bJ(D.cbd,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)
D.cch=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bW4=new A.bJ(D.cch,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)
D.caH=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bWo=new A.bJ(D.caH,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)
D.c65=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.Z,null,null,null,null,null,null,null,null)
D.ca0=new A.D("Stickers",null,C.ar,null,null,null,null,null,null,null,null)
D.cb1=new A.D("Que mensagem queres denunciar?",null,C.fw,null,null,null,null,null,null,null,null)
D.ciw=new B.NM(null)
D.clc=new B.Yi(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dPF","Ck",()=>D.JT.axA(0,B.dCn(),A.x("vO"),A.x("r<c>"),y.N))})()};
(a=>{a["CTmE/+55g9VK+Z6KK05aAopVBoI="]=a.current})($__dart_deferred_initializers__);