((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
aku(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$aku=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Fp()
A:{if(D.kJ===q){s=B.kg
break A}if(D.rl===q){s=B.jh
break A}if(D.y3===q||D.y4===q){s=B.mr
break A}if(D.GC===q){s=B.kf
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_m().uS(),$async$aku)
case 12:r=f
B:{if(D.FB===r||D.qL===r){s=B.kg
break B}if(D.qK===r){s=B.jh
break B}if(D.bDV===r||D.oa===r){s=B.kf
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mr
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cGH(),$async$aku)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.kg
x=14
break
case 16:s=B.jh
x=14
break
case 17:s=B.mr
x=14
break
case 18:s=B.kf
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aku,w)},
ZK(d){return C.dGg(d)},
dGg(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
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
if(s===D.kJ)p=B.kg
else p=s===D.rl?B.jh:B.kf
v=p
x=1
break
case 10:x=13
return A.d($.a_m().vK(0),$async$ZK)
case 13:r=f
p=r===D.FB||r===D.qL?B.kg:B.jh
v=p
x=1
break
case 11:x=14
return A.d(C.cGG(),$async$ZK)
case 14:q=f
if(J.o(q,"granted"))p=B.kg
else p=J.o(q,"unsupported")?B.mr:B.jh
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
cGH(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cGH=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fE(q.status(),y.g),$async$cGH)
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
return A.m($async$cGH,w)},
cGG(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cGG=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fE(q.request(),y.g),$async$cGG)
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
return A.m($async$cGG,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[178],C)
B=c[294]
C.wB.prototype={
I(){return"AppPermission."+this.b}}
C.Hm.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.ff,[C.wB,C.Hm])})()
var y={g:A.y("c"),c:A.y("Hm")};(function constants(){B.l7=new C.wB(0,"notifications")
B.jk=new C.wB(1,"location")
B.jl=new C.wB(2,"camera")
B.kf=new C.Hm(0,"ask")
B.kg=new C.Hm(1,"granted")
B.jh=new C.Hm(2,"denied")
B.mr=new C.Hm(3,"unsupported")})()};
(a=>{a["WS6jtOwilyOgcmx6eoGzFTHo9I8="]=a.current})($__dart_deferred_initializers__);