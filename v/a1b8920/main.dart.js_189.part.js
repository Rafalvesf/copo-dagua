((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
cTC(d,e,f){var x=0,w=A.n(y.H),v,u
var $async$cTC=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=$.P().b
u===$&&A.b()
v=y.z
x=2
return A.d(u.aK("update_gift_envelope",A.R(["p_id",d,"p_received",e,"p_thanked",f],y.N,v),v),$async$cTC)
case 2:return A.l(null,w)}})
return A.m($async$cTC,w)},
cIT:function cIT(){},
dqf(){return new B.Jk(null)},
Jk:function Jk(d){this.a=d},
b4N:function b4N(){},
b4O:function b4O(){},
b4P:function b4P(){},
b4Q:function b4Q(){},
b4R:function b4R(){},
b4V:function b4V(d,e,f){this.a=d
this.b=e
this.c=f},
b4U:function b4U(d,e){this.a=d
this.b=e},
b4S:function b4S(d,e){this.a=d
this.b=e},
b4T:function b4T(d,e){this.a=d
this.b=e},
d4W(d,e){return new B.arP(d,e,null)},
arP:function arP(d,e,f){this.c=d
this.d=e
this.a=f}},D,F,E,I,G
J=c[1]
A=c[0]
C=c[2]
H=c[293]
B=a.updateHolder(c[16],B)
D=c[300]
F=c[96]
E=c[299]
I=c[301]
G=c[157]
B.Jk.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=y.T,j=e.G(A.cG($.cr(),new B.b4N(),y.v,k),k)
if(j==null)x=E.oj
else{k=e.G($.cUg().$1(j),y.D)
k=k.gv(k)
x=k==null?E.oj:k}k=J.c7(x)
w=k.d_(x,0,new B.b4O())
v=k.cd(x,new B.b4P()).d_(0,0,new B.b4Q())
u=k.cd(x,new B.b4R()).gA(0)
t=new B.b4V(d,j,e)
s=H.CR.C(0,new A.a3(0,A.aO(d,C.b5,y.w).w.r.b,0,0))
r=F.cIP(w)
q=k.gA(x)
p=k.gA(x)===1?"envelope":"envelopes"
o=y.p
n=A.a([B.d4W(F.cIP(v)+" confirmado",!0)],o)
if(u>0)n.push(B.d4W(""+u+" por agradecer",!1))
r=A.a([D.bLO,A.d4H(D.brH,A.e1(C.bd,n,C.r,C.bj,8,8),"ENVELOPES",""+q+" "+p,r),C.ab,D.ccl,C.aB],o)
if(k.gZ(x))r.push(D.bKJ)
for(k=k.gX(x);k.t();){q=k.gE(k)
p=new A.b6(20,20)
n=A.h(q.b,l,l,l,l,D.c1w,l,l,l)
m=q.c
if(m===C.k.hA(m))m=C.k.a9(m,0)
else{m=C.k.a9(m,2)
m=A.aW(m,".",",")}m=A.O(A.a([new A.bQ(1,C.au,n,l),A.h(m+" \u20ac",l,l,l,l,I.a9L,l,l,l)],o),C.v,C.h,C.l,0,l)
n=q.r
n=A.a([m,A.h(C.f.aV(C.j.k(A.ay(n)),2,"0")+"/"+C.f.aV(C.j.k(A.an(n)),2,"0")+"/"+A.ax(n),l,l,l,l,C.bf,l,l,l)],o)
m=q.d
if((m==null?"":m).length!==0)C.e.n(n,A.a([C.Q,A.h("\xab"+A.q(m)+"\xbb",l,l,l,l,D.c51,l,l,l)],o))
n.push(C.ab)
n.push(new A.GN(C.bd,8,8,C.bj,C.r,A.a([G.b6d(D.cgl,l,new B.b4S(t,q),q.e,l,l),G.b6d(D.cc0,l,new B.b4T(t,q),q.f,l,l)],o),l))
r.push(new A.T(C.ez,A.B(l,A.A(n,C.E,C.h,C.l),C.r,l,l,new A.K(C.t,l,l,new A.cz(p,p,p,p),C.br,l,C.x),l,l,l,C.cY,l,l,l),l))}return A.cQ(l,C.bx,A.bD(!0,A.B4(A.d6(r,l,s,l,l,!1,!1),l,new B.b4U(j,e)),l,C.Z,!1),!0,l)}}
B.arP.prototype={
u(d){var x=this.d?C.d5:C.dt
return new A.dY(this.c,x,null)}}
var z=a.updateTypes(["S(S,lc)","z(lc)","F<t<lc>>(at,c)","F<~>(lc{received:z?,thanked:z?})"])
B.cIT.prototype={
$2(d,e){return this.aFI(d,e)},
aFI(d,e){var x=0,w=A.n(y.S),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.P("gift_envelopes").cm(0).V("wedding_id",e).cO(0,"created_at",!1),$async$$2)
case 7:s=g
r=A.a([],y.V)
for(p=J.bh(s,y.P),o=A.u(p),p=new A.aj(p,p.gA(p),o.i("aj<V.E>")),o=o.i("V.E");p.t();){n=p.d
q=n==null?o.a(n):n
J.br(r,F.d4A(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
if(A.a9(l) instanceof A.cU){v=E.oj
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
B.b4N.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:37}
B.b4O.prototype={
$2(d,e){return d+e.c},
$S:z+0}
B.b4P.prototype={
$1(d){return d.e},
$S:z+1}
B.b4Q.prototype={
$2(d,e){return d+e.c},
$S:z+0}
B.b4R.prototype={
$1(d){return!d.f},
$S:z+1}
B.b4V.prototype={
aEu(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q
var $async$$3$received$thanked=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.d(B.cTC(d.a,e,f),$async$$3$received$thanked)
case 6:v=1
x=5
break
case 3:v=2
q=u.pop()
r=t.a
if(r.e!=null)r.O(y.q).f.a2(C.eE)
x=5
break
case 2:x=1
break
case 5:r=t.b
if(r!=null)t.c.ak($.cUg().$1(r))
return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$$3$received$thanked,w)},
$3$received$thanked(d,e,f){return this.aEu(d,e,f)},
$1(d){return this.$3$received$thanked(d,null,null)},
$2$thanked(d,e){return this.$3$received$thanked(d,null,e)},
$2$received(d,e){return this.$3$received$thanked(d,e,null)},
$S:z+3}
B.b4U.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a
if(u!=null)v.b.ak($.cUg().$1(u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.b4S.prototype={
$1(d){return this.a.$2$received(this.b,d)},
$S:10}
B.b4T.prototype={
$1(d){return this.a.$2$thanked(this.b,d)},
$S:10};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cK,[B.cIT,B.b4O,B.b4Q])
w(B.Jk,A.et)
x(A.bw,[B.b4N,B.b4P,B.b4R,B.b4V,B.b4S,B.b4T])
w(B.b4U,A.bO)
w(B.arP,A.M)})()
A.bt(b.typeUniverse,JSON.parse('{"Jk":{"G":[],"e":[],"f":[]},"arP":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("az<t<lc>>"),v:x("ed"),V:x("r<lc>"),p:x("r<e>"),S:x("t<lc>"),P:x("a4<c,@>"),w:x("dh"),N:x("c"),q:x("dr"),z:x("@"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.brH=x([C.kx,C.eU,C.iP],A.w("r<aZ>"))
D.as_=new A.a3(0,30,0,30)
D.cfF=new A.D("Ainda n\xe3o h\xe1 envelopes.",null,C.mr,C.a4,null,null,null,null,null,null,null)
D.bKJ=new A.T(D.as_,D.cfF,null)
D.bLO=new A.lO("Envelopes",null,!0,null,20,!0,null)
D.c1w=new A.Q(!0,C.z,null,null,null,null,15.5,C.d4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c51=new A.Q(!0,C.z,null,null,null,null,14,null,C.jK,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cc0=new A.D("Agradecido",null,null,null,null,null,null,null,null,null,null)
D.ccl=new A.D('Os convidados transferem diretamente para o vosso IBAN (em Para os convidados \u203a Presentes). Marquem "Chegou" quando o virem no banco.',null,E.aal,null,null,null,null,null,null,null,null)
D.cgl=new A.D("Chegou",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXB","cUg",()=>C.bC.$2$1(new B.cIT(),y.S,y.N))})()};
(a=>{a["dDFyIHOsPhJ6bH2jcyDIl4FcBfA="]=a.current})($__dart_deferred_initializers__);