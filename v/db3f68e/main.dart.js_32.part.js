((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
akq(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$akq=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Fr()
A:{if(D.kJ===q){s=B.k9
break A}if(D.rz===q){s=B.jc
break A}if(D.y4===q||D.y5===q){s=B.mz
break A}if(D.GJ===q){s=B.k8
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_c().v5(),$async$akq)
case 12:r=f
B:{if(D.FG===r||D.r2===r){s=B.k9
break B}if(D.r1===r){s=B.jc
break B}if(D.bEm===r||D.oa===r){s=B.k8
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mz
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cDB(),$async$akq)
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
case 16:s=B.jc
x=14
break
case 17:s=B.mz
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
return A.m($async$akq,w)},
ZE(d){return C.dC6(d)},
dC6(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$ZE=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.y3(),$async$ZE)
case 12:s=f
if(s===D.kJ)p=B.k9
else p=s===D.rz?B.jc:B.k8
v=p
x=1
break
case 10:x=13
return A.d($.a_c().vX(0),$async$ZE)
case 13:r=f
p=r===D.FG||r===D.r2?B.k9:B.jc
v=p
x=1
break
case 11:x=14
return A.d(C.cDA(),$async$ZE)
case 14:q=f
if(J.o(q,"granted"))p=B.k9
else p=J.o(q,"unsupported")?B.mz:B.jc
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.jc
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ZE,w)},
wz:function wz(d,e){this.a=d
this.b=e},
Ho:function Ho(d,e){this.a=d
this.b=e},
cDB(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cDB=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fM(q.status(),y.g),$async$cDB)
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
return A.m($async$cDB,w)},
cDA(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cDA=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fM(q.request(),y.g),$async$cDA)
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
return A.m($async$cDA,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[175],C)
B=c[289]
C.wz.prototype={
I(){return"AppPermission."+this.b}}
C.Ho.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fr,[C.wz,C.Ho])})()
var y={g:A.w("c"),c:A.w("Ho")};(function constants(){B.l8=new C.wz(0,"notifications")
B.jf=new C.wz(1,"location")
B.jg=new C.wz(2,"camera")
B.k8=new C.Ho(0,"ask")
B.k9=new C.Ho(1,"granted")
B.jc=new C.Ho(2,"denied")
B.mz=new C.Ho(3,"unsupported")})()};
(a=>{a["028gbxO02EuLQoXfs6OisYXHlY0="]=a.current})($__dart_deferred_initializers__);