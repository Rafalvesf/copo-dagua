((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
cUa(d,e,f){var x=0,w=A.n(y.H),v,u
var $async$cUa=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=$.Q().b
u===$&&A.b()
v=y.z
x=2
return A.d(u.aH("update_gift_envelope",A.R(["p_id",d,"p_received",e,"p_thanked",f],y.N,v),v),$async$cUa)
case 2:return A.l(null,w)}})
return A.m($async$cUa,w)},
cJe:function cJe(){},
dqZ(){return new B.Jj(null)},
Jj:function Jj(d){this.a=d},
b4H:function b4H(){},
b4I:function b4I(){},
b4J:function b4J(){},
b4K:function b4K(){},
b4L:function b4L(){},
b4P:function b4P(d,e,f){this.a=d
this.b=e
this.c=f},
b4O:function b4O(d,e){this.a=d
this.b=e},
b4M:function b4M(d,e){this.a=d
this.b=e},
b4N:function b4N(d,e){this.a=d
this.b=e},
d5t(d,e){return new B.arL(d,e,null)},
arL:function arL(d,e,f){this.c=d
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
B.Jj.prototype={
bb(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=y.T,j=e.G(A.cC($.cq(),new B.b4H(),y.v,k),k)
if(j==null)x=E.o9
else{k=e.G($.cUQ().$1(j),y.D)
k=k.gv(k)
x=k==null?E.o9:k}k=J.c9(x)
w=k.cV(x,0,new B.b4I())
v=k.ca(x,new B.b4J()).cV(0,0,new B.b4K())
u=k.ca(x,new B.b4L()).gA(0)
t=new B.b4P(d,j,e)
s=H.CK.C(0,new A.a4(0,A.aT(d,C.b5,y.w).w.r.b,0,0))
r=F.cJa(w)
q=k.gA(x)
p=k.gA(x)===1?"envelope":"envelopes"
o=y.p
n=A.a([B.d5t(F.cJa(v)+" confirmado",!0)],o)
if(u>0)n.push(B.d5t(""+u+" por agradecer",!1))
r=A.a([D.bLr,A.d5f(D.brs,A.e4(C.bf,n,C.r,C.bl,8,8),"ENVELOPES",""+q+" "+p,r),C.ad,D.c8Z,C.aA],o)
if(k.gY(x))r.push(D.bL5)
for(k=k.gX(x);k.q();){q=k.gE(k)
p=new A.b6(20,20)
n=A.h(q.b,l,l,l,l,D.c16,l,l)
m=q.c
if(m===C.k.hC(m))m=C.k.a8(m,0)
else{m=C.k.a8(m,2)
m=A.aX(m,".",",")}m=A.O(A.a([new A.bJ(1,C.at,n,l),A.h(m+" \u20ac",l,l,l,l,I.a9C,l,l)],o),C.v,C.h,C.l,0,l)
n=q.r
n=A.a([m,A.h(C.f.aT(C.j.k(A.aE(n)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(n)),2,"0")+"/"+A.aM(n),l,l,l,l,C.be,l,l)],o)
m=q.d
if((m==null?"":m).length!==0)C.e.n(n,A.a([C.P,A.h("\xab"+A.p(m)+"\xbb",l,l,l,l,D.c4F,l,l)],o))
n.push(C.ad)
n.push(new A.GN(C.bf,8,8,C.bl,C.r,A.a([G.cWw(D.cfD,l,new B.b4M(t,q),q.e,l,l),G.cWw(D.c8B,l,new B.b4N(t,q),q.f,l,l)],o),l))
r.push(new A.S(C.ey,A.x(l,A.y(n,C.E,C.h,C.l),C.r,l,l,new A.J(C.t,l,l,new A.cA(p,p,p,p),C.br,l,C.x),l,l,l,C.cT,l,l,l),l))}return A.cP(l,C.by,A.bB(!0,A.B2(A.d6(r,l,s,l,l,!1,!1),l,new B.b4O(j,e)),l,C.Z,!1),!0,l)}}
B.arL.prototype={
u(d){var x=this.d?C.cU:C.dd
return new A.dU(this.c,x,null)}}
var z=a.updateTypes(["T(T,ld)","B(ld)","F<t<ld>>(at,c)","F<~>(ld{received:B?,thanked:B?})"])
B.cJe.prototype={
$2(d,e){return this.aEZ(d,e)},
aEZ(d,e){var x=0,w=A.n(y.S),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.P("gift_envelopes").cl(0).V("wedding_id",e).cK(0,"created_at",!1),$async$$2)
case 7:s=g
r=A.a([],y.V)
for(p=J.bf(s,y.P),o=A.u(p),p=new A.ag(p,p.gA(p),o.i("ag<V.E>")),o=o.i("V.E");p.q();){n=p.d
q=n==null?o.a(n):n
J.bb(r,F.d58(q))}v=r
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
B.b4H.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.b4I.prototype={
$2(d,e){return d+e.c},
$S:z+0}
B.b4J.prototype={
$1(d){return d.e},
$S:z+1}
B.b4K.prototype={
$2(d,e){return d+e.c},
$S:z+0}
B.b4L.prototype={
$1(d){return!d.f},
$S:z+1}
B.b4P.prototype={
aDL(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q
var $async$$3$received$thanked=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.d(B.cUa(d.a,e,f),$async$$3$received$thanked)
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
if(r!=null)t.c.ai($.cUQ().$1(r))
return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$$3$received$thanked,w)},
$3$received$thanked(d,e,f){return this.aDL(d,e,f)},
$1(d){return this.$3$received$thanked(d,null,null)},
$2$thanked(d,e){return this.$3$received$thanked(d,null,e)},
$2$received(d,e){return this.$3$received$thanked(d,e,null)},
$S:z+3}
B.b4O.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a
if(u!=null)v.b.ai($.cUQ().$1(u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.b4M.prototype={
$1(d){return this.a.$2$received(this.b,d)},
$S:10}
B.b4N.prototype={
$1(d){return this.a.$2$thanked(this.b,d)},
$S:10};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cK,[B.cJe,B.b4I,B.b4K])
w(B.Jj,A.ew)
x(A.bu,[B.b4H,B.b4J,B.b4L,B.b4P,B.b4M,B.b4N])
w(B.b4O,A.bL)
w(B.arL,A.L)})()
A.br(b.typeUniverse,JSON.parse('{"Jj":{"H":[],"e":[],"f":[]},"arL":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{D:x("ax<t<ld>>"),v:x("ed"),V:x("r<ld>"),p:x("r<e>"),S:x("t<ld>"),P:x("a3<c,@>"),w:x("du"),N:x("c"),q:x("dl"),z:x("@"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.brs=x([C.kC,C.eT,C.iR],A.z("r<b0>"))
D.arL=new A.a4(0,30,0,30)
D.c7I=new A.D("Ainda n\xe3o h\xe1 envelopes.",null,C.mm,C.a4,null,null,null,null,null,null)
D.bL5=new A.S(D.arL,D.c7I,null)
D.bLr=new A.lP("Envelopes",null,!0,null,20,!0,null)
D.c16=new A.P(!0,C.z,null,null,null,null,15.5,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4F=new A.P(!0,C.z,null,null,null,null,14,null,C.jK,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8B=new A.D("Agradecido",null,null,null,null,null,null,null,null,null)
D.c8Z=new A.D('Os convidados transferem diretamente para o vosso IBAN (em Para os convidados \u203a Presentes). Marquem "Chegou" quando o virem no banco.',null,E.aab,null,null,null,null,null,null,null)
D.cfD=new A.D("Chegou",null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYo","cUQ",()=>C.bz.$2$1(new B.cJe(),y.S,y.N))})()};
(a=>{a["NF+DQtRC5xgsUgz9dd0lTGoNcUg="]=a.current})($__dart_deferred_initializers__);