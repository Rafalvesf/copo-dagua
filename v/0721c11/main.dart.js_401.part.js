((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,K,L,F,M,N,O,P,B={
dbp(){var x,w=$.N0(),v=J.m3(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aW(C.i.hX(w.t5(256),16),2,"0")
return C.e.ik(v)},
aMr(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aMr=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Z()
q=r.b
q===$&&A.b()
q=q.gbK().e.a
u=(q==null?null:q.r).a
t=C.f.n(e,".")?C.e.ga4(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dbp()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.S("chat-attachments")
x=3
return A.d(q.qK(s,d,new A.tx(!1,f)),$async$aMr)
case 3:r=r.b.ay
r===$&&A.b()
v=r.S("chat-attachments").B4(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aMr,w)},
cM3(d){var x,w=C.e.ga4(d.split(".")).toLowerCase()
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
qu(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$qu=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.cd(null,new B.cnr(),d,!0,!1,null,l),$async$qu)
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
return A.d(new A.ln().W1(85,2048,C.fA),$async$qu)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.ks(),$async$qu)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.hL(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aMr(t,s,B.cM3(s)),$async$qu)
case 12:v=new j.FX(f,r,s)
x=1
break
case 7:x=13
return A.d($.cPg().x5(D.bqx,null,null),$async$qu)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.ks(),$async$qu)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.T(y.q).f.ah(D.bNZ)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.cl(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbkP(p))
if(C.f.hL(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aMr(t,l,B.cM3(l)),$async$qu)
case 15:v=new j.FX(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cd(null,new B.cns(),d,!0,!1,null,l),$async$qu)
case 16:n=f
v=n==null?null:new B.FX("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cd(null,new B.cnt(),d,!0,!0,null,l),$async$qu)
case 17:m=f
v=m==null?null:new B.FX(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$qu,w)},
FX:function FX(d,e,f){this.a=d
this.b=e
this.c=f},
cnr:function cnr(){},
cns:function cns(){},
cnt:function cnt(){},
L1:function L1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bwH:function bwH(d,e){this.a=d
this.b=e},
Vh:function Vh(d){this.a=d},
caw:function caw(d,e){this.a=d
this.b=e},
Lv:function Lv(d){this.a=d},
a8S:function a8S(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bJd:function bJd(d){this.a=d},
bJe:function bJe(d,e){this.a=d
this.b=e},
bJf:function bJf(d){this.a=d},
bJg:function bJg(d){this.a=d},
bJi:function bJi(d){this.a=d},
bJh:function bJh(d,e,f){this.a=d
this.b=e
this.c=f},
NL:function NL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aRk:function aRk(d,e){this.a=d
this.b=e},
aRh:function aRh(d){this.a=d},
aRj:function aRj(d){this.a=d},
aRi:function aRi(d){this.a=d},
aRl:function aRl(d){this.a=d},
d4v(d){return new B.uq(d,A.B(y.N,y.F),new A.ao(A.iC(0,0),0,!1))},
czF(d){var x,w=J.a3(d)
if(w.ga_(d))return null
x=w.du(d,new B.csy(),y.N).bB(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
uq:function uq(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bss:function bss(){},
bst:function bst(d){this.a=d},
bsq:function bsq(){},
bsr:function bsr(){},
bsu:function bsu(d,e){this.a=d
this.b=e},
bsv:function bsv(d){this.a=d},
bsp:function bsp(d){this.a=d},
bsy:function bsy(){},
bsz:function bsz(){},
bsw:function bsw(){},
bsx:function bsx(){},
csy:function csy(){},
Wb(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$Wb=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.T(y.q).f.ah(D.bNz)
x=1
break}x=3
return A.d(A.cd(null,new B.cs2(A.hm(h,0,A.jg(12,"count",y.r),A.a6(h).c).bB(0)),d,!0,!0,null,y.C),$async$Wb)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(L.uP(d,e,f,u.c,u.d,g,t),$async$Wb)
case 4:case 1:return A.l(v,w)}})
return A.m($async$Wb,w)},
z7:function z7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cs2:function cs2(d){this.a=d},
cs1:function cs1(d,e){this.a=d
this.b=e},
cum(d,e,f,g,h,i,j){return new B.aib(f,d,i,j,g,h,e,null)},
aib:function aib(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aRq:function aRq(){},
aRn:function aRn(d){this.a=d},
aRp:function aRp(d){this.a=d},
aRo:function aRo(){},
cCs(d){var x,w,v,u
for(x=new A.bV(d),w=y.V,x=new A.ap(x,x.gv(0),w.i("ap<a8.E>")),w=w.i("a8.E"),v=0;x.p();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bvd[C.i.aj(v,5)]},
xy:function xy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
NM:function NM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aRm:function aRm(d){this.a=d},
NO:function NO(d,e){this.c=d
this.a=e},
aPt:function aPt(){},
aPu:function aPu(){},
afW:function afW(){},
G3:function G3(){},
aRT:function aRT(d,e){this.a=d
this.b=e},
a7d:function a7d(){},
cFT(d,e,f,g,h,i,j,k){return new B.a0G(A.deR(B.dfr(),i,j),d,g,h,e,A.aft(e),f,i.i("@<0>").b3(j).b3(k).i("a0G<1,2,3>"))},
b8V(d,e,f,g,h,i,j,k,l,m){return new A.w1(d,h,f,j,k,g,e,i,l.i("@<0>").b3(m).i("w1<1,2>"))},
a0G:function a0G(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,Q,R,S,T,U,V
J=c[1]
A=c[0]
C=c[2]
E=c[313]
G=c[182]
H=c[387]
I=c[371]
K=c[303]
L=c[145]
F=c[240]
M=c[408]
N=c[296]
O=c[358]
P=c[443]
B=a.updateHolder(c[110],B)
D=c[244]
Q=c[367]
R=c[388]
S=c[126]
T=c[406]
U=c[319]
V=c[432]
B.FX.prototype={
gaF(d){return this.c}}
B.L1.prototype={
u(d){var x=null,w=A.T(18),v=A.T(18)
return A.eY(!1,w,!0,new A.a_(C.ed,A.I(A.a([A.E(x,A.aJ(this.c,$.a4,x,x,26),C.t,x,x,new A.L(C.af,x,x,v,x,x,C.y),x,58,x,x,x,x,x,58),C.aF,A.i(this.d,x,x,x,C.nI,x,x,x)],y.p),C.x,C.m,C.a_,0,C.w),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bwH(this,d),x,x,x,x,x,x,x)}}
B.Vh.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bor[x]
v=new A.aX(14,14)
s.push(A.eY(!1,new A.bW(v,v,v,v),!0,new A.a_(C.fW,A.a_4(w,C.jq,u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.caw(d,w),u,u,u,u,u,u,u))}return new A.a_(D.amz,A.I(A.a([D.c12,C.Y,A.ya(1,s,4,8,8,u,C.e3,!0)],t),C.I,C.m,C.a_,0,C.w),u)}}
B.Lv.prototype={
R(){return new B.a8S(new A.aM(C.aj,$.ah()),D.bqU)}}
B.a8S.prototype={
ak(){this.aG()
this.IM("")},
m(){var x=this.d
x.Z$=$.ah()
x.U$=0
this.aa()},
IM(d){return this.b8U(d)},
b8U(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$IM=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.t(new B.bJd(s))
v=3
m=C.f.L(d)
l=m.length===0
r=l?"trending":"search"
k=A.u(r)
q=A.B(y.N,y.z)
J.bj(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.bj(q,"limit","24")
J.bj(q,"rating","pg")
l=!l
if(l)J.bj(q,"q",m)
if(l)J.bj(q,"lang","pt")
p=A.adJ("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aMM(p,null),$async$IM)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bt.jB(0,A.iR(A.iO(q.e)).bD(0,q.w),null)),"data"))
s.t(new B.bJe(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.t(new B.bJf(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new B.bJg(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$IM,w)},
u(d){var x=this,w=null,v=A.at(d,w,y.w).w,u=A.cA(w,C.a9,!1,w,!0,C.C,w,A.cH(),x.d,w,w,w,w,w,2,D.aya,C.X,!0,w,!0,w,!1,w,C.aG,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gb8T(),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.au,w,C.b6,w,C.xz,w,w),t=x.r
if(t!=null)t=A.bF(A.i(t,w,w,w,C.eW,C.aa,w,w),w,w)
else t=x.f?C.bk:G.ZG(w,C.X,V.a5V,new B.bJi(x),x.e.length,w,w,!1)
return A.aT(new A.a_(D.amw,A.I(A.a([u,C.a5,A.ac(t,1),C.aF,D.aad],y.p),C.I,C.m,C.q,0,C.w),w),v.a.b*0.62,w)}}
B.NL.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.at(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.be(s.c,"asset:"))return A.a_4(C.f.bO(s.c,6),C.jq,120,r,120)
if(p==="image"||p==="gif")return A.dX(r,A.eu(A.T(16),new A.ev(new A.aK(0,q,0,320),A.l4(s.c,new B.aRi(q),C.bZ,r,new B.aRj(q),r,r),r),C.aH),C.X,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aRk(s,d),r,r,r,r,r,r,!1,C.bn)
p=A.T(16)
x=s.f
w=x?$.a4:C.af
v=A.T(16)
u=A.aJ(P.ME,x?C.v:$.a4,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a4,r,A.as(r,r,x?C.v:C.E,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eY(!1,p,!0,A.E(r,A.X(A.a([u,C.an,new A.eo(1,C.bM,t,r),C.bp,A.aJ(K.u2,x?C.v:C.L,r,r,18)],y.p),C.x,C.m,C.a_,0,r,r),C.t,r,new A.aK(0,q,0,1/0),new A.L(w,r,r,v,r,r,C.y),r,r,r,r,D.alX,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aRl(s),r,r,r,r,r,r,r)},
gaF(d){return this.e}}
B.uq.prototype={
cY(){var x=this,w=y.T,v=A.en(x).M(A.cz($.bp(),new B.bss(),y.D,w),w)
A.en(x).a7M(new B.bst(x))
if(v==null)return C.a9
w=$.Z().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.a4I(0,"typing:"+x.x,C.a42).bpU(new B.bsu(x,v),"typing")
w.abe(0)
x.y=w
x.Q=A.wG(C.fU,new B.bsv(x))
return C.a9},
agk(){var x,w=this,v=w.z
v.e6(v,new B.bsp(new A.ao(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cr(v,v.r,v.e,A.r(v).i("cr<2>"));v.p();)x.push(v.d.a)
if(x.length!==J.b0(w.ga1(0))||!C.e.eb(x,J.cTW(w.ga1(0))))w.sa1(0,x)},
a95(d){var x,w=this,v=w.y,u=A.en(w).a2(0,$.bp(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ao(Date.now(),0,!1)
if(x.dj(w.as).a<2e6)return
w.as=x
v.aaz(0,"typing",A.R(["id",t,"name",d],y.N,y.z),C.Fa).cJ(new B.bsy(),new B.bsz(),y.H)},
fK(d){var x=this.y,w=A.en(this).a2(0,$.bp(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ao(A.iC(0,0),0,!1)
x.aaz(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),C.Fa).cJ(new B.bsw(),new B.bsx(),y.H)}}
B.z7.prototype={}
B.aib.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.fw(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a4,r,M.GC,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a4,r,A.as(r,r,s.f?C.i_:C.L,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.X(A.a([q,C.aX,A.ac(A.I(w,C.I,C.m,C.a_,0,C.w),1)],x),C.x,C.m,C.q,0,r,r)
q=A.a([new A.cC(0,C.bi,C.E.bZ(0.06),C.Ey,14)],y.E)
w=A.at(d,C.bc,y.w).w
v=new B.aRq().$3(H.uo,"Voltar",new B.aRn(d))
t=s.r
v=A.a([v,C.aX,A.ac(t==null?u:A.b_(u,t,r),1)],x)
C.e.A(v,A.a([C.an,A.Jf(A.E(C.S,R.NI,C.t,r,r,C.kv,r,44,r,r,r,r,r,44),r,new B.aRo(),new B.aRp(s),C.ed,C.a3g,"Mais op\xe7\xf5es",y.N)],x))
return A.E(r,A.I(A.a([A.X(v,C.x,C.m,C.q,0,r,r)],x),C.T,C.m,C.a_,0,C.w),C.t,r,r,new A.L(C.v,r,r,r,q,r,C.y),r,r,r,r,new A.V(16,w.r.b+10,16,12),r,r,r)},
gaF(d){return this.c}}
B.xy.prototype={
u(d){var x=null,w=A.at(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.E:C.v,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.a_(F.KN,A.i(v,x,x,x,A.as(x,x,B.cCs(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,A.as(x,x,s?C.v:C.E,x,x,x,x,x,x,x,x,15,x,x,C.bd,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ev(new A.aK(0,w.a.a*0.78,0,1/0),A.E(x,A.I(o,C.I,C.m,C.a_,0,C.w),C.t,x,x,new A.L(r,x,x,new A.bW(E.wR,E.wR,new A.aX(q,q),new A.aX(p,p)),x,x,C.y),x,x,x,x,new A.V(14,t,14,10),x,x,x),x)}}
B.NM.prototype={
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.A(u,A.a([A.b_(A.E(C.S,D.azT,C.t,w,w,C.kv,w,44,w,w,w,w,w,44),x.e,w),C.an],v))
v=A.T(999)
u.push(A.ac(A.E(C.c1,A.cA(w,C.a9,!1,w,!0,C.C,w,A.cH(),x.c,w,w,w,w,w,2,A.jO(w,C.ca,w,C.V,w,w,w,w,!0,C.ca,w,w,w,w,w,w,!1,w,w,w,w,C.ca,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.X,!0,w,!0,w,!1,w,C.aG,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aRm(x),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,N.xE,!0,C.au,w,C.b6,w,C.a6I,w,w),C.t,w,w,new A.L(C.af,w,w,v,w,w,C.y),w,44,w,w,C.cl,w,w,w),1))
u.push(C.an)
u.push(A.b_(A.E(C.S,D.azV,C.t,w,w,C.oc,w,44,w,w,w,w,w,44),x.d,w))
return A.E(w,A.bn(!0,new A.a_(T.L2,A.X(u,C.x,C.m,C.q,0,w,w),w),w,D.alj,!1),C.t,C.v,w,w,w,w,w,w,w,w,w,w)}}
B.NO.prototype={
u(d){var x=null,w=this.c
return A.cu4(C.fn,w==null?D.bMK:new A.a_(D.amD,A.bF(A.i(w,x,x,x,C.fk,x,x,x),x,x),x),C.cH,C.az)}}
B.aPt.prototype={
$1(d){return A.lu(d,null,!0,null,null,y.S,y.z)},
gUa(d){return D.adh},
atC(d,e,f,g,h){return this.gUa(this).$3$1(e,f,g,h)}}
B.aPu.prototype={
$3$1(d,e,f,g){return B.cFT(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.afW.prototype={}
B.G3.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aRT(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.a7d.prototype={}
B.a0G.prototype={}
var z=a.updateTypes(["Vh(N)","Lv(N)","H<~>(c)","t<c>()","uq(c)","w1<0^,1^>(0^(){$allTransitiveDependencies!y<fF>?,argument!F?,dependencies!y<fF>?,from!k1?,isAutoDispose!z,name!c?,retry!bk?(w,F)?})<eO<1^>,F?>"])
B.cnr.prototype={
$1(d){var x=null,w=y.p
return new A.a_(D.an6,A.I(A.a([A.X(A.a([new B.L1(C.jK,"Foto","photo",x),new B.L1(D.ave,"Ficheiro","file",x),new B.L1(U.iU,"Sticker","sticker",x),new B.L1(D.av3,"GIF","gif",x)],w),C.x,C.Eh,C.q,0,x,x)],w),C.x,C.m,C.a_,0,C.w),x)},
$S:119}
B.cns.prototype={
$1(d){return D.cbi},
$S:z+0}
B.cnt.prototype={
$1(d){return D.c8P},
$S:z+1}
B.bwH.prototype={
$0(){return A.aC(this.b,!1).b0(this.a.e)},
$S:0}
B.caw.prototype={
$0(){return A.aC(this.a,!1).b0(this.b)},
$S:0}
B.bJd.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bJe.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bA(this.b,y.P),v=A.r(w),w=new A.ap(w,w.gv(w),v.i("ap<a8.E>")),u=y.f,v=v.i("a8.E");w.p();){t=w.d
x=t==null?v.a(t):t
J.cg(s,new A.ag(A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bJf.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bJg.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bJi.prototype={
$2(d,e){var x=null,w=this.a
return A.eY(!1,x,!0,A.eu(A.T(10),A.l4(w.e[e].a,x,C.bZ,x,x,x,x),C.aH),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bJh(w,d,e),x,x,x,x,x,x,x)},
$S:450}
B.bJh.prototype={
$0(){return A.aC(this.b,!1).b0(this.a.e[this.c].b)},
$S:0}
B.aRk.prototype={
$0(){var x=y.H
return A.aC(this.b,!1).ip(A.tQ(new B.aRh(this.a),null,x),x)},
$S:0}
B.aRh.prototype={
$1(d){var x=null
return A.ku(A.cu6(C.ah,x,C.v,x),C.ah,A.bF(S.cET(C.V,A.yl(this.a.c,x,x,!1,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1189}
B.aRj.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:156}
B.aRi.prototype={
$3(d,e,f){var x=null
return A.E(x,D.awY,C.t,C.af,x,x,x,120,x,x,x,x,x,this.a)},
$S:72}
B.aRl.prototype={
$0(){return A.xc(A.dh(this.a.c,0,null),C.pb,null)},
$S:0}
B.bss.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.bst.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aQ(0)
x=w.y
w.y=null
if(x!=null){w=$.Z().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.F_(x).cJ(new B.bsq(),new B.bsr(),y.H)}},
$S:0}
B.bsq.prototype={
$1(d){},
$S:95}
B.bsr.prototype={
$1(d){},
$S:13}
B.bsu.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.eN(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.P(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.P(t.h(0,"name"))
x=u==null?null:C.f.L(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.ag(v,new A.ao(Date.now(),0,!1).fe(5e6)))}u.agk()},
$S:211}
B.bsv.prototype={
$1(d){return this.a.agk()},
$S:59}
B.bsp.prototype={
$2(d,e){return e.b.f8(this.a)},
$S:1191}
B.bsy.prototype={
$1(d){},
$S:231}
B.bsz.prototype={
$1(d){},
$S:13}
B.bsw.prototype={
$1(d){},
$S:231}
B.bsx.prototype={
$1(d){},
$S:13}
B.csy.prototype={
$1(d){return C.e.gN(d.split(" "))},
$S:23}
B.cs2.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
t=C.f.L(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a4,r,C.Gy,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r)
p.push(A.i8(!1,C.V,r,r,!0,r,r,r,!0,r,D.awK,r,r,r,r,new B.cs1(d,u),!1,r,r,r,r,r,s,r,t,r,F.N5,r))}return A.bn(!0,new A.a_(D.amA,A.I(A.a([D.c26,C.aK,D.bYy,C.a3,new A.eo(1,C.bM,A.cL(p,r,r,r,r,!1,C.Z,!0),r)],q),C.I,C.m,C.a_,0,C.w),r),r,C.V,!0)},
$S:51}
B.cs1.prototype={
$0(){return A.aC(this.a,!1).b0(this.b)},
$S:0}
B.aRq.prototype={
$3(d,e,f){var x=null
return A.kz(A.b_(A.E(C.S,d,C.t,x,x,C.kv,x,44,x,x,x,x,x,44),f,x),x,e)},
$S:1192}
B.aRn.prototype={
$0(){return A.aC(this.a,!1).qt()},
$S:0}
B.aRp.prototype={
$1(d){return this.a.w.$0()},
$S:6}
B.aRo.prototype={
$1(d){return D.bpk},
$S:77}
B.aRm.prototype={
$1(d){return this.a.d.$0()},
$S:6}
B.aRT.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("G3.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.a8S.prototype,"gb8T","IM",2)
w(B,"dfS","d4v",4)
v(B.uq.prototype,"gi5","cY",3)
u(B,"dfr",1,function(){return{$allTransitiveDependencies:C.cA,argument:C.cA,dependencies:C.cA,from:C.cA,isAutoDispose:C.cA,name:C.cA,retry:C.cA}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["b8V",function(d,e,f,g,h,i,j,k){return B.b8V(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.b8V(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.b8V(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.F,[B.FX,B.z7,B.aPt,B.aPu,B.afW])
w(A.bv,[B.cnr,B.cns,B.cnt,B.aRh,B.aRj,B.aRi,B.bss,B.bsq,B.bsr,B.bsu,B.bsv,B.bsy,B.bsz,B.bsw,B.bsx,B.csy,B.cs2,B.aRq,B.aRp,B.aRo,B.aRm])
w(A.M,[B.L1,B.Vh,B.NL,B.aib,B.xy,B.NM,B.NO])
w(A.bI,[B.bwH,B.caw,B.bJd,B.bJe,B.bJf,B.bJg,B.bJh,B.aRk,B.aRl,B.bst,B.cs1,B.aRn,B.aRT])
v(B.Lv,A.G)
v(B.a8S,A.a0)
w(A.cD,[B.bJi,B.bsp])
v(B.uq,A.eO)
v(B.a7d,A.k1)
v(B.G3,B.a7d)
v(B.a0G,B.G3)
x(B.a7d,B.afW)})()
A.bx(b.typeUniverse,JSON.parse('{"Vh":{"M":[],"e":[],"f":[]},"Lv":{"G":[],"e":[],"f":[]},"L1":{"M":[],"e":[],"f":[]},"a8S":{"a0":["Lv"]},"NL":{"M":[],"e":[],"f":[]},"uq":{"eO":["t<c>"]},"aib":{"M":[],"e":[],"f":[]},"xy":{"M":[],"e":[],"f":[]},"NM":{"M":[],"e":[],"f":[]},"NO":{"M":[],"e":[],"f":[]},"G3":{"k1":[],"fF":[],"Ew":[],"kX":[]},"a0G":{"G3":["1","2","2","3","2","w1<1,2>"],"k1":[],"fF":[],"Ew":[],"kX":[],"G3.0":"1"}}'))
A.VA(b.typeUniverse,JSON.parse('{"afW":5,"a7d":6}'))
var y=(function rtii(){var x=A.v
return{D:x("cI"),V:x("bV"),E:x("q<cC>"),L:x("q<+(c,c)>"),s:x("q<c>"),p:x("q<e>"),j:x("t<@>"),P:x("a2<c,@>"),f:x("a2<@,@>"),w:x("d8"),S:x("eO<@>"),F:x("+(c,ao)"),C:x("z7"),N:x("c"),q:x("dD"),z:x("@"),r:x("w"),B:x("FX?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bXz=new A.J("Powered by GIPHY",null,I.Gw,null,null,null,null,null,null,null,null)
D.aad=new A.dP(C.f1,null,null,D.bXz,null)
D.It=new B.aPt()
D.adh=new B.aPu()
D.alj=new A.V(0,0,0,20)
D.alX=new A.V(12,10,14,10)
D.amw=new A.V(16,16,16,12)
D.amz=new A.V(16,16,16,24)
D.amA=new A.V(16,16,16,8)
D.amD=new A.V(16,2,16,8)
D.an6=new A.V(20,18,20,24)
D.av3=new A.aB(57404,"HeroiconsSolid",null,!1)
D.ave=new A.aB(57436,"HeroiconsSolid",null,!1)
D.awK=new A.aY(C.h1,null,C.L,null,null,null)
D.awY=new A.aY(C.jK,null,C.L,null,null,null)
D.aya=new A.dz(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,O.Cx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.azT=new A.lr("M12 5v14M5 12h14",20,C.E,2.4,!1,C.h7,null)
D.azV=new A.lr("M12 19V5M5 12l7-7 7 7",18,C.v,2.4,!1,C.h7,null)
D.bor=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bFt=new A.ks("report",!0,Q.a7G,null,A.v("ks<c>"))
D.bpk=x([D.bFt],A.v("q<pU<c>>"))
D.bqx=x([],A.v("q<cJg>"))
D.bqU=x([],y.L)
D.agw=new A.O(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.A)
D.ahm=new A.O(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.A)
D.aio=new A.O(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.A)
D.agT=new A.O(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.A)
D.bvd=x([D.agw,C.i_,D.ahm,D.aio,D.agT],A.v("q<O>"))
D.bMK=new A.cf(1/0,null,null,null)
D.c2f=new A.J("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bNz=new A.cc(D.c2f,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)
D.c1J=new A.J("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bNZ=new A.cc(D.c1J,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)
D.bYy=new A.J("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.bh,null,null,null,null,null,null,null,null)
D.c12=new A.J("Stickers",null,C.co,null,null,null,null,null,null,null,null)
D.c26=new A.J("Que mensagem queres denunciar?",null,C.cT,null,null,null,null,null,null,null,null)
D.c8P=new B.Lv(null)
D.cbi=new B.Vh(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dt4","AD",()=>D.It.atC(0,B.dfS(),A.v("uq"),A.v("t<c>"),y.N))})()};
(a=>{a["Hh0+BEdsSG4OpY9MjGphn1pm2aE="]=a.current})($__dart_deferred_initializers__);