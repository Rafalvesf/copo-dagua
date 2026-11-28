((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,B={
cTJ(d,e,f){var x=0,w=A.n(y.H),v,u
var $async$cTJ=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=$.Q().b
u===$&&A.b()
v=y.z
x=2
return A.d(u.aH("update_gift_envelope",A.R(["p_id",d,"p_received",e,"p_thanked",f],y.N,v),v),$async$cTJ)
case 2:return A.l(null,w)}})
return A.m($async$cTJ,w)},
cIQ:function cIQ(){},
dqu(){return new B.Jg(null)},
Jg:function Jg(d){this.a=d},
b4u:function b4u(){},
b4v:function b4v(){},
b4w:function b4w(){},
b4x:function b4x(){},
b4y:function b4y(){},
b4C:function b4C(d,e,f){this.a=d
this.b=e
this.c=f},
b4B:function b4B(d,e){this.a=d
this.b=e},
b4z:function b4z(d,e){this.a=d
this.b=e},
b4A:function b4A(d,e){this.a=d
this.b=e},
d52(d,e){return new B.arC(d,e,null)},
arC:function arC(d,e,f){this.c=d
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
B.Jg.prototype={
b9(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=y.T,j=e.G(A.cB($.cq(),new B.b4u(),y.v,k),k)
if(j==null)x=E.o8
else{k=e.G($.cUn().$1(j),y.D)
k=k.gv(k)
x=k==null?E.o8:k}k=J.c9(x)
w=k.cU(x,0,new B.b4v())
v=k.ca(x,new B.b4w()).cU(0,0,new B.b4x())
u=k.ca(x,new B.b4y()).gA(0)
t=new B.b4C(d,j,e)
s=H.CJ.C(0,new A.a3(0,A.aT(d,C.b5,y.w).w.r.b,0,0))
r=F.cIM(w)
q=k.gA(x)
p=k.gA(x)===1?"envelope":"envelopes"
o=y.p
n=A.a([B.d52(F.cIM(v)+" confirmado",!0)],o)
if(u>0)n.push(B.d52(""+u+" por agradecer",!1))
r=A.a([D.bLt,A.d4P(D.bru,A.e4(C.bf,n,C.r,C.bk,8,8),"ENVELOPES",""+q+" "+p,r),C.ac,D.c8X,C.aA],o)
if(k.gY(x))r.push(D.bL7)
for(k=k.gX(x);k.q();){q=k.gE(k)
p=new A.b6(20,20)
n=A.h(q.b,l,l,l,l,D.c14,l,l)
m=q.c
if(m===C.k.hB(m))m=C.k.a8(m,0)
else{m=C.k.a8(m,2)
m=A.aX(m,".",",")}m=A.O(A.a([new A.bJ(1,C.at,n,l),A.h(m+" \u20ac",l,l,l,l,I.a9C,l,l)],o),C.v,C.h,C.l,0,l)
n=q.r
n=A.a([m,A.h(C.f.aT(C.j.k(A.aE(n)),2,"0")+"/"+C.f.aT(C.j.k(A.aw(n)),2,"0")+"/"+A.aM(n),l,l,l,l,C.be,l,l)],o)
m=q.d
if((m==null?"":m).length!==0)C.e.n(n,A.a([C.P,A.h("\xab"+A.p(m)+"\xbb",l,l,l,l,D.c4D,l,l)],o))
n.push(C.ac)
n.push(new A.GJ(C.bf,8,8,C.bk,C.r,A.a([G.cW4(D.cfB,l,new B.b4z(t,q),q.e,l,l),G.cW4(D.c8z,l,new B.b4A(t,q),q.f,l,l)],o),l))
r.push(new A.S(C.ey,A.x(l,A.y(n,C.E,C.h,C.l),C.r,l,l,new A.I(C.t,l,l,new A.cz(p,p,p,p),C.bq,l,C.x),l,l,l,C.cT,l,l,l),l))}return A.cP(l,C.by,A.bB(!0,A.B0(A.d6(r,l,s,l,l,!1,!1),l,new B.b4B(j,e)),l,C.Z,!1),!0,l)}}
B.arC.prototype={
u(d){var x=this.d?C.cU:C.dd
return new A.dU(this.c,x,null)}}
var z=a.updateTypes(["T(T,lc)","C(lc)","F<t<lc>>(at,c)","F<~>(lc{received:C?,thanked:C?})"])
B.cIQ.prototype={
$2(d,e){return this.aEU(d,e)},
aEU(d,e){var x=0,w=A.n(y.S),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.P("gift_envelopes").ck(0).U("wedding_id",e).cI(0,"created_at",!1),$async$$2)
case 7:s=g
r=A.a([],y.V)
for(p=J.be(s,y.P),o=A.u(p),p=new A.ag(p,p.gA(p),o.i("ag<V.E>")),o=o.i("V.E");p.q();){n=p.d
q=n==null?o.a(n):n
J.br(r,F.d4I(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
if(A.a9(l) instanceof A.cU){v=E.o8
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
B.b4u.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:40}
B.b4v.prototype={
$2(d,e){return d+e.c},
$S:z+0}
B.b4w.prototype={
$1(d){return d.e},
$S:z+1}
B.b4x.prototype={
$2(d,e){return d+e.c},
$S:z+0}
B.b4y.prototype={
$1(d){return!d.f},
$S:z+1}
B.b4C.prototype={
aDG(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q
var $async$$3$received$thanked=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.d(B.cTJ(d.a,e,f),$async$$3$received$thanked)
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
if(r!=null)t.c.aj($.cUn().$1(r))
return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$$3$received$thanked,w)},
$3$received$thanked(d,e,f){return this.aDG(d,e,f)},
$1(d){return this.$3$received$thanked(d,null,null)},
$2$thanked(d,e){return this.$3$received$thanked(d,null,e)},
$2$received(d,e){return this.$3$received$thanked(d,e,null)},
$S:z+3}
B.b4B.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.a
if(u!=null)v.b.aj($.cUn().$1(u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.b4z.prototype={
$1(d){return this.a.$2$received(this.b,d)},
$S:10}
B.b4A.prototype={
$1(d){return this.a.$2$thanked(this.b,d)},
$S:10};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cK,[B.cIQ,B.b4v,B.b4x])
w(B.Jg,A.ew)
x(A.bt,[B.b4u,B.b4w,B.b4y,B.b4C,B.b4z,B.b4A])
w(B.b4B,A.bL)
w(B.arC,A.L)})()
A.bq(b.typeUniverse,JSON.parse('{"Jg":{"G":[],"e":[],"f":[]},"arC":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{D:x("ax<t<lc>>"),v:x("ec"),V:x("r<lc>"),p:x("r<e>"),S:x("t<lc>"),P:x("a5<c,@>"),w:x("dt"),N:x("c"),q:x("dl"),z:x("@"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bru=x([C.kB,C.eT,C.iQ],A.z("r<b0>"))
D.arN=new A.a3(0,30,0,30)
D.c7G=new A.D("Ainda n\xe3o h\xe1 envelopes.",null,C.mm,C.a3,null,null,null,null,null,null)
D.bL7=new A.S(D.arN,D.c7G,null)
D.bLt=new A.lO("Envelopes",null,!0,null,20,!0,null)
D.c14=new A.P(!0,C.z,null,null,null,null,15.5,C.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4D=new A.P(!0,C.z,null,null,null,null,14,null,C.jK,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8z=new A.D("Agradecido",null,null,null,null,null,null,null,null,null)
D.c8X=new A.D('Os convidados transferem diretamente para o vosso IBAN (em Para os convidados \u203a Presentes). Marquem "Chegou" quando o virem no banco.',null,E.aab,null,null,null,null,null,null,null)
D.cfB=new A.D("Chegou",null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXT","cUn",()=>C.bz.$2$1(new B.cIQ(),y.S,y.N))})()};
(a=>{a["BSZPdOq4JY9xmeOfylQR6PZBVdc="]=a.current})($__dart_deferred_initializers__);