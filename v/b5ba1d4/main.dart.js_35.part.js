((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
akZ(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$akZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.FA()
A:{if(D.kJ===q){s=B.ke
break A}if(D.rF===q){s=B.jk
break A}if(D.yh===q||D.yi===q){s=B.mA
break A}if(D.GR===q){s=B.kd
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_y().v5(),$async$akZ)
case 12:r=f
B:{if(D.FO===r||D.r6===r){s=B.ke
break B}if(D.r5===r){s=B.jk
break B}if(D.bEd===r||D.om===r){s=B.kd
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mA
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cHw(),$async$akZ)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.ke
x=14
break
case 16:s=B.jk
x=14
break
case 17:s=B.mA
x=14
break
case 18:s=B.kd
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akZ,w)},
ZX(d){return C.dGP(d)},
dGP(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$ZX=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.yb(),$async$ZX)
case 12:s=f
if(s===D.kJ)p=B.ke
else p=s===D.rF?B.jk:B.kd
v=p
x=1
break
case 10:x=13
return A.d($.a_y().vX(0),$async$ZX)
case 13:r=f
p=r===D.FO||r===D.r6?B.ke:B.jk
v=p
x=1
break
case 11:x=14
return A.d(C.cHv(),$async$ZX)
case 14:q=f
if(J.o(q,"granted"))p=B.ke
else p=J.o(q,"unsupported")?B.mA:B.jk
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.jk
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ZX,w)},
wF:function wF(d,e){this.a=d
this.b=e},
Hu:function Hu(d,e){this.a=d
this.b=e},
cHw(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHw=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fK(q.status(),y.g),$async$cHw)
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
return A.m($async$cHw,w)},
cHv(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHv=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fK(q.request(),y.g),$async$cHv)
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
return A.m($async$cHv,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[181],C)
B=c[298]
C.wF.prototype={
I(){return"AppPermission."+this.b}}
C.Hu.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.eX,[C.wF,C.Hu])})()
var y={g:A.w("c"),c:A.w("Hu")};(function constants(){B.l7=new C.wF(0,"notifications")
B.jo=new C.wF(1,"location")
B.jp=new C.wF(2,"camera")
B.kd=new C.Hu(0,"ask")
B.ke=new C.Hu(1,"granted")
B.jk=new C.Hu(2,"denied")
B.mA=new C.Hu(3,"unsupported")})()};
(a=>{a["fv+noWFnVpylDkPGoyxXixnuOyc="]=a.current})($__dart_deferred_initializers__);