((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
akt(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$akt=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Fp()
A:{if(D.kJ===q){s=B.kd
break A}if(D.rl===q){s=B.jh
break A}if(D.y3===q||D.y4===q){s=B.mq
break A}if(D.GB===q){s=B.kc
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_m().uS(),$async$akt)
case 12:r=f
B:{if(D.FA===r||D.qM===r){s=B.kd
break B}if(D.qL===r){s=B.jh
break B}if(D.bDU===r||D.ob===r){s=B.kc
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mq
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cGw(),$async$akt)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.kd
x=14
break
case 16:s=B.jh
x=14
break
case 17:s=B.mq
x=14
break
case 18:s=B.kc
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akt,w)},
ZK(d){return C.dG_(d)},
dG_(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$ZK=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.y2(),$async$ZK)
case 12:s=f
if(s===D.kJ)p=B.kd
else p=s===D.rl?B.jh:B.kc
v=p
x=1
break
case 10:x=13
return A.d($.a_m().vK(0),$async$ZK)
case 13:r=f
p=r===D.FA||r===D.qM?B.kd:B.jh
v=p
x=1
break
case 11:x=14
return A.d(C.cGv(),$async$ZK)
case 14:q=f
if(J.o(q,"granted"))p=B.kd
else p=J.o(q,"unsupported")?B.mq:B.jh
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.jh
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ZK,w)},
wB:function wB(d,e){this.a=d
this.b=e},
Hm:function Hm(d,e){this.a=d
this.b=e},
cGw(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cGw=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fE(q.status(),y.g),$async$cGw)
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
return A.m($async$cGw,w)},
cGv(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cGv=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fE(q.request(),y.g),$async$cGv)
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
return A.m($async$cGv,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[176],C)
B=c[292]
C.wB.prototype={
I(){return"AppPermission."+this.b}}
C.Hm.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.ff,[C.wB,C.Hm])})()
var y={g:A.z("c"),c:A.z("Hm")};(function constants(){B.l7=new C.wB(0,"notifications")
B.jk=new C.wB(1,"location")
B.jl=new C.wB(2,"camera")
B.kc=new C.Hm(0,"ask")
B.kd=new C.Hm(1,"granted")
B.jh=new C.Hm(2,"denied")
B.mq=new C.Hm(3,"unsupported")})()};
(a=>{a["H9HOX62bNjSyZy1E4zmxsknF1CE="]=a.current})($__dart_deferred_initializers__);