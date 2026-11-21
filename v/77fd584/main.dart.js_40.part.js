((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
aid(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$aid=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Er()
A:{if(D.kc===q){s=B.jB
break A}if(D.r6===q){s=B.iL
break A}if(D.xC===q||D.xD===q){s=B.m4
break A}if(D.FM===q){s=B.jA
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.Yz().uM(),$async$aid)
case 12:r=f
B:{if(D.EL===r||D.qz===r){s=B.jB
break B}if(D.qy===r){s=B.iL
break B}if(D.bBE===r||D.nv===r){s=B.jA
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.m4
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.ctE(),$async$aid)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.jB
x=14
break
case 16:s=B.iL
x=14
break
case 17:s=B.m4
x=14
break
case 18:s=B.jA
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aid,w)},
Y2(d){return C.dp1(d)},
dp1(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$Y2=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
case 7:switch(d.a){case 0:x=9
break
case 1:x=10
break
case 2:x=11
break
default:x=8
break}break
case 9:x=12
return A.d(A.xo(),$async$Y2)
case 12:s=f
if(s===D.kc)p=B.jB
else p=s===D.r6?B.iL:B.jA
v=p
x=1
break
case 10:x=13
return A.d($.Yz().vE(0),$async$Y2)
case 13:r=f
p=r===D.EL||r===D.qz?B.jB:B.iL
v=p
x=1
break
case 11:x=14
return A.d(C.ctD(),$async$Y2)
case 14:q=f
if(J.p(q,"granted"))p=B.jB
else p=J.p(q,"unsupported")?B.m4:B.iL
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.iL
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Y2,w)},
vU:function vU(d,e){this.a=d
this.b=e},
Gq:function Gq(d,e){this.a=d
this.b=e},
ctE(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$ctE=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.h8(q.status(),y.g),$async$ctE)
case 7:s=e
v=s
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
v="prompt"
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ctE,w)},
ctD(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$ctD=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.h8(q.request(),y.g),$async$ctD)
case 7:s=e
v=s
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
v="denied"
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ctD,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[179],C)
B=c[268]
C.vU.prototype={
H(){return"AppPermission."+this.b}}
C.Gq.prototype={
H(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fv,[C.vU,C.Gq])})()
var y={g:A.w("c"),c:A.w("Gq")};(function constants(){B.kJ=new C.vU(0,"notifications")
B.iO=new C.vU(1,"location")
B.iP=new C.vU(2,"camera")
B.jA=new C.Gq(0,"ask")
B.jB=new C.Gq(1,"granted")
B.iL=new C.Gq(2,"denied")
B.m4=new C.Gq(3,"unsupported")})()};
(a=>{a["ZkFyEtiXUdvj4K+e8zDRuvWsdK0="]=a.current})($__dart_deferred_initializers__);