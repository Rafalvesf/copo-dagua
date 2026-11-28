((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
akB(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$akB=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Fv()
A:{if(D.kI===q){s=B.k9
break A}if(D.rJ===q){s=B.je
break A}if(D.yj===q||D.yk===q){s=B.my
break A}if(D.H2===q){s=B.k8
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_f().v3(),$async$akB)
case 12:r=f
B:{if(D.G_===r||D.rc===r){s=B.k9
break B}if(D.rb===r){s=B.je
break B}if(D.bF0===r||D.oi===r){s=B.k8
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.my
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cEt(),$async$akB)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.k9
x=14
break
case 16:s=B.je
x=14
break
case 17:s=B.my
x=14
break
case 18:s=B.k8
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akB,w)},
ZH(d){return C.dD3(d)},
dD3(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$ZH=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.y7(),$async$ZH)
case 12:s=f
if(s===D.kI)p=B.k9
else p=s===D.rJ?B.je:B.k8
v=p
x=1
break
case 10:x=13
return A.d($.a_f().vV(0),$async$ZH)
case 13:r=f
p=r===D.G_||r===D.rc?B.k9:B.je
v=p
x=1
break
case 11:x=14
return A.d(C.cEs(),$async$ZH)
case 14:q=f
if(J.o(q,"granted"))p=B.k9
else p=J.o(q,"unsupported")?B.my:B.je
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.je
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ZH,w)},
wD:function wD(d,e){this.a=d
this.b=e},
Hr:function Hr(d,e){this.a=d
this.b=e},
cEt(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cEt=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.status(),y.g),$async$cEt)
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
return A.m($async$cEt,w)},
cEs(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cEs=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.request(),y.g),$async$cEs)
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
return A.m($async$cEs,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[178],C)
B=c[293]
C.wD.prototype={
I(){return"AppPermission."+this.b}}
C.Hr.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fg,[C.wD,C.Hr])})()
var y={g:A.w("c"),c:A.w("Hr")};(function constants(){B.l9=new C.wD(0,"notifications")
B.jh=new C.wD(1,"location")
B.ji=new C.wD(2,"camera")
B.k8=new C.Hr(0,"ask")
B.k9=new C.Hr(1,"granted")
B.je=new C.Hr(2,"denied")
B.my=new C.Hr(3,"unsupported")})()};
(a=>{a["BH3Yrhzv/momUdXV9AP3ycrR3SU="]=a.current})($__dart_deferred_initializers__);