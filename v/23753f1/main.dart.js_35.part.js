((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
al0(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$al0=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.FA()
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
return A.d($.a_B().v5(),$async$al0)
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
return A.d(C.cHi(),$async$al0)
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
return A.m($async$al0,w)},
a__(d){return C.dGv(d)},
dGv(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$a__=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.yd(),$async$a__)
case 12:s=f
if(s===D.kL)p=B.kd
else p=s===D.rH?B.ji:B.kc
v=p
x=1
break
case 10:x=13
return A.d($.a_B().vX(0),$async$a__)
case 13:r=f
p=r===D.FO||r===D.r8?B.kd:B.ji
v=p
x=1
break
case 11:x=14
return A.d(C.cHh(),$async$a__)
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
return A.m($async$a__,w)},
wH:function wH(d,e){this.a=d
this.b=e},
Hu:function Hu(d,e){this.a=d
this.b=e},
cHi(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHi=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.status(),y.g),$async$cHi)
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
return A.m($async$cHi,w)},
cHh(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHh=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.request(),y.g),$async$cHh)
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
return A.m($async$cHh,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[184],C)
B=c[300]
C.wH.prototype={
I(){return"AppPermission."+this.b}}
C.Hu.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.eW,[C.wH,C.Hu])})()
var y={g:A.w("c"),c:A.w("Hu")};(function constants(){B.la=new C.wH(0,"notifications")
B.jm=new C.wH(1,"location")
B.jn=new C.wH(2,"camera")
B.kc=new C.Hu(0,"ask")
B.kd=new C.Hu(1,"granted")
B.ji=new C.Hu(2,"denied")
B.mE=new C.Hu(3,"unsupported")})()};
(a=>{a["iGTeEZhAGzueuw2RrOH73Nl6o0c="]=a.current})($__dart_deferred_initializers__);