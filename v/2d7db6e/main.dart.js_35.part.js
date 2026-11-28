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
case 5:q=A.Fz()
A:{if(D.kL===q){s=B.kd
break A}if(D.rH===q){s=B.ji
break A}if(D.yi===q||D.yj===q){s=B.mE
break A}if(D.GR===q){s=B.kc
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_A().v5(),$async$akZ)
case 12:r=f
B:{if(D.FO===r||D.r8===r){s=B.kd
break B}if(D.r7===r){s=B.ji
break B}if(D.bEk===r||D.ol===r){s=B.kc
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mE
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cH4(),$async$akZ)
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
case 16:s=B.ji
x=14
break
case 17:s=B.mE
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
return A.m($async$akZ,w)},
ZZ(d){return C.dGh(d)},
dGh(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$ZZ=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.yb(),$async$ZZ)
case 12:s=f
if(s===D.kL)p=B.kd
else p=s===D.rH?B.ji:B.kc
v=p
x=1
break
case 10:x=13
return A.d($.a_A().vX(0),$async$ZZ)
case 13:r=f
p=r===D.FO||r===D.r8?B.kd:B.ji
v=p
x=1
break
case 11:x=14
return A.d(C.cH3(),$async$ZZ)
case 14:q=f
if(J.o(q,"granted"))p=B.kd
else p=J.o(q,"unsupported")?B.mE:B.ji
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.ji
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ZZ,w)},
wF:function wF(d,e){this.a=d
this.b=e},
Hu:function Hu(d,e){this.a=d
this.b=e},
cH4(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cH4=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.status(),y.g),$async$cH4)
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
return A.m($async$cH4,w)},
cH3(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cH3=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.request(),y.g),$async$cH3)
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
return A.m($async$cH3,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[185],C)
B=c[301]
C.wF.prototype={
I(){return"AppPermission."+this.b}}
C.Hu.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.eW,[C.wF,C.Hu])})()
var y={g:A.w("c"),c:A.w("Hu")};(function constants(){B.la=new C.wF(0,"notifications")
B.jm=new C.wF(1,"location")
B.jn=new C.wF(2,"camera")
B.kc=new C.Hu(0,"ask")
B.kd=new C.Hu(1,"granted")
B.ji=new C.Hu(2,"denied")
B.mE=new C.Hu(3,"unsupported")})()};
(a=>{a["H5n8GQ3ZkTxB2BIu0jk+adn3kgA="]=a.current})($__dart_deferred_initializers__);