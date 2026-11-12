((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
afk(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$afk=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.D7()
A:{if(D.jW===q){s=B.jl
break A}if(D.qa===q){s=B.ir
break A}if(D.wO===q||D.wP===q){s=B.lM
break A}if(D.F7===q){s=B.jk
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.Wm().uf(),$async$afk)
case 12:r=f
B:{if(D.E3===r||D.pG===r){s=B.jl
break B}if(D.pF===r){s=B.ir
break B}if(D.bvD===r||D.n6===r){s=B.jk
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.lM
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.ciU(),$async$afk)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.jl
x=14
break
case 16:s=B.ir
x=14
break
case 17:s=B.lM
x=14
break
case 18:s=B.jk
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$afk,w)},
VO(d){return C.dbz(d)},
dbz(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$VO=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.wk(),$async$VO)
case 12:s=f
if(s===D.jW)p=B.jl
else p=s===D.qa?B.ir:B.jk
v=p
x=1
break
case 10:x=13
return A.d($.Wm().v0(0),$async$VO)
case 13:r=f
p=r===D.E3||r===D.pG?B.jl:B.ir
v=p
x=1
break
case 11:x=14
return A.d(C.ciT(),$async$VO)
case 14:q=f
if(J.o(q,"granted"))p=B.jl
else p=J.o(q,"unsupported")?B.lM:B.ir
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.ir
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$VO,w)},
uY:function uY(d,e){this.a=d
this.b=e},
EY:function EY(d,e){this.a=d
this.b=e},
ciU(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$ciU=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fX(q.status(),y.g),$async$ciU)
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
return A.m($async$ciU,w)},
ciT(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$ciT=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fX(q.request(),y.g),$async$ciT)
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
return A.m($async$ciT,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[173],C)
B=c[263]
C.uY.prototype={
H(){return"AppPermission."+this.b}}
C.EY.prototype={
H(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fq,[C.uY,C.EY])})()
var y={g:A.v("c"),c:A.v("EY")};(function constants(){B.kr=new C.uY(0,"notifications")
B.iu=new C.uY(1,"location")
B.iv=new C.uY(2,"camera")
B.jk=new C.EY(0,"ask")
B.jl=new C.EY(1,"granted")
B.ir=new C.EY(2,"denied")
B.lM=new C.EY(3,"unsupported")})()};
(a=>{a["otlk61I7m/wMGNauANU6rMxAOe4="]=a.current})($__dart_deferred_initializers__);