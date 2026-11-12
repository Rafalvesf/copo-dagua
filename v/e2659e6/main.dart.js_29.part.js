((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
afo(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$afo=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.D8()
A:{if(D.jX===q){s=B.jm
break A}if(D.qd===q){s=B.ir
break A}if(D.wR===q||D.wS===q){s=B.lO
break A}if(D.F9===q){s=B.jl
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.Wn().uf(),$async$afo)
case 12:r=f
B:{if(D.E4===r||D.pJ===r){s=B.jm
break B}if(D.pI===r){s=B.ir
break B}if(D.bvH===r||D.n7===r){s=B.jl
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.lO
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cj1(),$async$afo)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.jm
x=14
break
case 16:s=B.ir
x=14
break
case 17:s=B.lO
x=14
break
case 18:s=B.jl
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$afo,w)},
VP(d){return C.dbJ(d)},
dbJ(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$VP=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.wk(),$async$VP)
case 12:s=f
if(s===D.jX)p=B.jm
else p=s===D.qd?B.ir:B.jl
v=p
x=1
break
case 10:x=13
return A.d($.Wn().v0(0),$async$VP)
case 13:r=f
p=r===D.E4||r===D.pJ?B.jm:B.ir
v=p
x=1
break
case 11:x=14
return A.d(C.cj0(),$async$VP)
case 14:q=f
if(J.o(q,"granted"))p=B.jm
else p=J.o(q,"unsupported")?B.lO:B.ir
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
return A.m($async$VP,w)},
uZ:function uZ(d,e){this.a=d
this.b=e},
EZ:function EZ(d,e){this.a=d
this.b=e},
cj1(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cj1=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fY(q.status(),y.g),$async$cj1)
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
return A.m($async$cj1,w)},
cj0(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cj0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fY(q.request(),y.g),$async$cj0)
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
return A.m($async$cj0,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[173],C)
B=c[263]
C.uZ.prototype={
H(){return"AppPermission."+this.b}}
C.EZ.prototype={
H(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fq,[C.uZ,C.EZ])})()
var y={g:A.v("c"),c:A.v("EZ")};(function constants(){B.ks=new C.uZ(0,"notifications")
B.iu=new C.uZ(1,"location")
B.iv=new C.uZ(2,"camera")
B.jl=new C.EZ(0,"ask")
B.jm=new C.EZ(1,"granted")
B.ir=new C.EZ(2,"denied")
B.lO=new C.EZ(3,"unsupported")})()};
(a=>{a["jiKM6iZwx65+3nREpR/i/zKEjU8="]=a.current})($__dart_deferred_initializers__);