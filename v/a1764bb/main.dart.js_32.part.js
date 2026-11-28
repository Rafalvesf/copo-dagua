((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
ajf(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$ajf=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.F2()
A:{if(D.kB===q){s=B.jW
break A}if(D.rh===q){s=B.j2
break A}if(D.xM===q||D.xN===q){s=B.mo
break A}if(D.G6===q){s=B.jV
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.Zs().uZ(),$async$ajf)
case 12:r=f
B:{if(D.F4===r||D.qM===r){s=B.jW
break B}if(D.qL===r){s=B.j2
break B}if(D.bCt===r||D.nX===r){s=B.jV
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mo
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cA8(),$async$ajf)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.jW
x=14
break
case 16:s=B.j2
x=14
break
case 17:s=B.mo
x=14
break
case 18:s=B.jV
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ajf,w)},
YU(d){return C.dxz(d)},
dxz(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$YU=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.xH(),$async$YU)
case 12:s=f
if(s===D.kB)p=B.jW
else p=s===D.rh?B.j2:B.jV
v=p
x=1
break
case 10:x=13
return A.d($.Zs().vQ(0),$async$YU)
case 13:r=f
p=r===D.F4||r===D.qM?B.jW:B.j2
v=p
x=1
break
case 11:x=14
return A.d(C.cA7(),$async$YU)
case 14:q=f
if(J.o(q,"granted"))p=B.jW
else p=J.o(q,"unsupported")?B.mo:B.j2
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.j2
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$YU,w)},
wh:function wh(d,e){this.a=d
this.b=e},
H_:function H_(d,e){this.a=d
this.b=e},
cA8(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cA8=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.hf(q.status(),y.g),$async$cA8)
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
return A.m($async$cA8,w)},
cA7(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cA7=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.hf(q.request(),y.g),$async$cA7)
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
return A.m($async$cA7,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[168],C)
B=c[250]
C.wh.prototype={
I(){return"AppPermission."+this.b}}
C.H_.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fx,[C.wh,C.H_])})()
var y={g:A.x("c"),c:A.x("H_")};(function constants(){B.l0=new C.wh(0,"notifications")
B.j4=new C.wh(1,"location")
B.j5=new C.wh(2,"camera")
B.jV=new C.H_(0,"ask")
B.jW=new C.H_(1,"granted")
B.j2=new C.H_(2,"denied")
B.mo=new C.H_(3,"unsupported")})()};
(a=>{a["F7A6gtByds90Pe3zYQ+WZuPRpws="]=a.current})($__dart_deferred_initializers__);