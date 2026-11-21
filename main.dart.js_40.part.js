((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
air(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$air=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.EA()
A:{if(D.ki===q){s=B.jI
break A}if(D.r5===q){s=B.iQ
break A}if(D.xB===q||D.xC===q){s=B.m7
break A}if(D.FT===q){s=B.jH
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.YI().uT(),$async$air)
case 12:r=f
B:{if(D.ET===r||D.qy===r){s=B.jI
break B}if(D.qx===r){s=B.iQ
break B}if(D.bBX===r||D.nD===r){s=B.jH
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.m7
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cv8(),$async$air)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.jI
x=14
break
case 16:s=B.iQ
x=14
break
case 17:s=B.m7
x=14
break
case 18:s=B.jH
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$air,w)},
Ya(d){return C.drE(d)},
drE(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$Ya=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.xs(),$async$Ya)
case 12:s=f
if(s===D.ki)p=B.jI
else p=s===D.r5?B.iQ:B.jH
v=p
x=1
break
case 10:x=13
return A.d($.YI().vI(0),$async$Ya)
case 13:r=f
p=r===D.ET||r===D.qy?B.jI:B.iQ
v=p
x=1
break
case 11:x=14
return A.d(C.cv7(),$async$Ya)
case 14:q=f
if(J.o(q,"granted"))p=B.jI
else p=J.o(q,"unsupported")?B.m7:B.iQ
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.iQ
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ya,w)},
vX:function vX(d,e){this.a=d
this.b=e},
Gx:function Gx(d,e){this.a=d
this.b=e},
cv8(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cv8=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.h9(q.status(),y.g),$async$cv8)
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
return A.m($async$cv8,w)},
cv7(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cv7=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.h9(q.request(),y.g),$async$cv7)
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
return A.m($async$cv7,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[176],C)
B=c[256]
C.vX.prototype={
H(){return"AppPermission."+this.b}}
C.Gx.prototype={
H(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fx,[C.vX,C.Gx])})()
var y={g:A.w("c"),c:A.w("Gx")};(function constants(){B.kM=new C.vX(0,"notifications")
B.iU=new C.vX(1,"location")
B.iV=new C.vX(2,"camera")
B.jH=new C.Gx(0,"ask")
B.jI=new C.Gx(1,"granted")
B.iQ=new C.Gx(2,"denied")
B.m7=new C.Gx(3,"unsupported")})()};
(a=>{a["GkGlM1JucH10k9uc1hdLC2Isl08="]=a.current})($__dart_deferred_initializers__);