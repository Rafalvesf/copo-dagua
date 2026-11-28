((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
cU2(d,e,f){var x=0,w=A.n(y.H),v,u
var $async$cU2=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=$.Q().b
u===$&&A.b()
v=y.z
x=2
return A.d(u.aG("update_gift_envelope",A.R(["p_id",d,"p_received",e,"p_thanked",f],y.N,v),v),$async$cU2)
case 2:return A.l(null,w)}})
return A.m($async$cU2,w)},
cJ0:function cJ0(){},
dqS(){return new B.Ju(null)},
Ju:function Ju(d){this.a=d},
b4R:function b4R(){},
b4S:function b4S(){},
b4T:function b4T(){},
b4U:function b4U(){},
b4V:function b4V(){},
b4Z:function b4Z(d,e,f){this.a=d
this.b=e
this.c=f},
b4Y:function b4Y(d,e){this.a=d
this.b=e},
b4W:function b4W(d,e){this.a=d
this.b=e},
b4X:function b4X(d,e){this.a=d
this.b=e},
d5l(d,e){return new B.arT(d,e,null)},
arT:function arT(d,e,f){this.c=d
this.d=e
this.a=f}},D,F,E,I,G
J=c[1]
A=c[0]
C=c[2]
H=c[290]
B=a.updateHolder(c[16],B)
D=c[297]
F=c[96]
E=c[296]
I=c[298]
G=c[142]
B.Ju.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=y.T,j=e.G(A.cB($.cq(),new B.b4R(),y.v,k),k)
if(j==null)x=E.o9
else{k=e.G($.cUI().$1(j),y.D)
k=k.gv(k)
x=k==null?E.o9:k}k=J.ca(x)
w=k.cV(x,0,new B.b4S())
v=k.cb(x,new B.b4T()).cV(0,0,new B.b4U())
u=k.cb(x,new B.b4V()).gA(0)
t=new B.b4Z(d,j,e)
s=H.CM.C(0,new A.a4(0,A.aT(d,C.b5,y.w).w.r.b,0,0))
r=F.cIX(w)
q=k.gA(x)
p=k.gA(x)===1?"envelope":"envelopes"
o=y.p
n=A.a([B.d5l(F.cIX(v)+" confirmado",!0)],o)
if(u>0)n.push(B.d5l(""+u+" por agradecer",!1))
r=A.a([D.bLy,A.d57(D.brz,A.e5(C.bh,n,C.r,C.bl,8,8),"ENVELOPES",""+q+" "+p,r),C.ad,D.c98,C.aA],o)
if(k.gY(x))r.push(D.bLc)
for(k=k.gW(x);k.q();){q=k.gE(k)
p=new A.b5(20,20)
n=A.h(q.b,l,l,l,l,D.c1e,l,l)
m=q.c
if(m===C.k.hB(m))m=C.k.a8(m,0)
else{m=C.k.a8(m,2)
m=A.aY(m,".",",")}m=A.O(A.a([new A.bK(1,C.at,n,l),A.h(m+" \u20ac",l,l,l,l,I.a9E,l,l)],o),C.u,C.h,C.l,0,l)
n=q.r
n=A.a([m,A.h(C.f.aT(C.j.k(A.aE(n)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(n)),2,"0")+"/"+A.aL(n),l,l,l,l,C.bg,l,l)],o)
m=q.d
if((m==null?"":m).length!==0)C.e.p(n,A.a([C.P,A.h("\xab"+A.p(m)+"\xbb",l,l,l,l,D.c4N,l,l)],o))
n.push(C.ad)
n.push(new A.GV(C.bh,8,8,C.bl,C.r,A.a([G.cWq(D.cfN,l,new B.b4W(t,q),q.e,l,l),G.cWq(D.c8K,l,new B.b4X(t,q),q.f,l,l)],o),l))
r.push(new A.S(C.ey,A.w(l,A.x(n,C.E,C.h,C.l),C.r,l,l,new A.J(C.t,l,l,new A.cz(p,p,p,p),C.bs,l,C.x),l,l,l,C.cU,l,l,l),l))}return A.cP(l,C.by,A.bB(!0,A.B6(A.d6(r,l,s,l,l,!1,!1),l,new B.b4Y(j,e)),l,C.Z,!1),!0,l)}}
B.arT.prototype={
u(d){var x=this.d?C.cV:C.dd
return new A.dU(this.c,x,null)}}
var z=a.updateTypes(["T(T,lf)","C(lf)","F<t<lf>>(at,c)","F<~>(lf{received:C?,thanked:C?})"])
B.cJ0.prototype={
$2(d,e){return this.aEX(d,e)},
aEX(d,e){var x=0,w=A.n(y.S),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.S("gift_envelopes").cu(0).X("wedding_id",e).cJ(0,"created_at",!1),$async$$2)
case 7:s=g
r=A.a([],y.V)
for(p=J.bj(s,y.P),o=A.u(p),p=new A.aj(p,p.gA(p),o.i("aj<V.E>")),o=o.i("V.E");p.q();){n=p.d
q=n==null?o.a(n):n
J.bn(r,F.d51(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
if(A.a9(l) instanceof A.cU){v=E.o9
x=1
break}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$2,w)},
$S:z+2}
B.b4R.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.b4S.prototype={
$2(d,e){return d+e.c},
$S:z+0}
B.b4T.prototype={
$1(d){return d.e},
$S:z+1}
B.b4U.prototype={
$2(d,e){return d+e.c},
$S:z+0}
B.b4V.prototype={
$1(d){return!d.f},
$S:z+1}
B.b4Z.prototype={
aDJ(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q
var $async$$3$received$thanked=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.d(B.cU2(d.a,e,f),$async$$3$received$thanked)
case 6:v=1
x=5
break
case 3:v=2
q=u.pop()
r=t.a
if(r.e!=null)r.O(y.q).f.a0(C.eD)
x=5
break
case 2:x=1
break
case 5:r=t.b
if(r!=null)t.c.ai($.cUI().$1(r))
return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$$3$received$thanked,w)},
$3$received$thanked(d,e,f){return this.aDJ(d,e,f)},
$1(d){return this.$3$received$thanked(d,null,null)},
$2$thanked(d,e){return this.$3$received$thanked(d,null,e)},
$2$received(d,e){return this.$3$received$thanked(d,e,null)},
$S:z+3}
B.b4Y.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a
if(u!=null)v.b.ai($.cUI().$1(u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.b4W.prototype={
$1(d){return this.a.$2$received(this.b,d)},
$S:10}
B.b4X.prototype={
$1(d){return this.a.$2$thanked(this.b,d)},
$S:10};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cL,[B.cJ0,B.b4S,B.b4U])
w(B.Ju,A.ew)
x(A.bu,[B.b4R,B.b4T,B.b4V,B.b4Z,B.b4W,B.b4X])
w(B.b4Y,A.bL)
w(B.arT,A.L)})()
A.br(b.typeUniverse,JSON.parse('{"Ju":{"G":[],"e":[],"f":[]},"arT":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{D:x("ax<t<lf>>"),v:x("ed"),V:x("r<lf>"),p:x("r<e>"),S:x("t<lf>"),P:x("a3<c,@>"),w:x("dv"),N:x("c"),q:x("dj"),z:x("@"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.brz=x([C.kA,C.eS,C.iR],A.B("r<b0>"))
D.arR=new A.a4(0,30,0,30)
D.c7R=new A.D("Ainda n\xe3o h\xe1 envelopes.",null,C.mm,C.a4,null,null,null,null,null,null)
D.bLc=new A.S(D.arR,D.c7R,null)
D.bLy=new A.lQ("Envelopes",null,!0,null,20,!0,null)
D.c1e=new A.P(!0,C.z,null,null,null,null,15.5,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4N=new A.P(!0,C.z,null,null,null,null,14,null,C.jL,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8K=new A.D("Agradecido",null,null,null,null,null,null,null,null,null)
D.c98=new A.D('Os convidados transferem diretamente para o vosso IBAN (em Para os convidados \u203a Presentes). Marquem "Chegou" quando o virem no banco.',null,E.aae,null,null,null,null,null,null,null)
D.cfN=new A.D("Chegou",null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYp","cUI",()=>C.bz.$2$1(new B.cJ0(),y.S,y.N))})()};
(a=>{a["TSaezW+sUVRpIhsKvPwfnwMyOWs="]=a.current})($__dart_deferred_initializers__);