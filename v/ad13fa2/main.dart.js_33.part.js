((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
afx(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$afx=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Dh()
A:{if(D.jS===q){s=B.ji
break A}if(D.qo===q){s=B.io
break A}if(D.wT===q||D.wU===q){s=B.lM
break A}if(D.Fd===q){s=B.jh
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.Wz().ue(),$async$afx)
case 12:r=f
B:{if(D.E7===r||D.pU===r){s=B.ji
break B}if(D.pT===r){s=B.io
break B}if(D.bvP===r||D.n7===r){s=B.jh
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
return A.d(C.cjL(),$async$afx)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.ji
x=14
break
case 16:s=B.io
x=14
break
case 17:s=B.lM
x=14
break
case 18:s=B.jh
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$afx,w)},
W2(d){return C.dcI(d)},
dcI(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$W2=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.wk(),$async$W2)
case 12:s=f
if(s===D.jS)p=B.ji
else p=s===D.qo?B.io:B.jh
v=p
x=1
break
case 10:x=13
return A.d($.Wz().v_(0),$async$W2)
case 13:r=f
p=r===D.E7||r===D.pU?B.ji:B.io
v=p
x=1
break
case 11:x=14
return A.d(C.cjK(),$async$W2)
case 14:q=f
if(J.o(q,"granted"))p=B.ji
else p=J.o(q,"unsupported")?B.lM:B.io
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.io
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$W2,w)},
uY:function uY(d,e){this.a=d
this.b=e},
F6:function F6(d,e){this.a=d
this.b=e},
cjL(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cjL=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fX(q.status(),y.g),$async$cjL)
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
return A.m($async$cjL,w)},
cjK(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cjK=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fX(q.request(),y.g),$async$cjK)
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
return A.m($async$cjK,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[174],C)
B=c[264]
C.uY.prototype={
H(){return"AppPermission."+this.b}}
C.F6.prototype={
H(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fr,[C.uY,C.F6])})()
var y={g:A.v("c"),c:A.v("F6")};(function constants(){B.ko=new C.uY(0,"notifications")
B.ir=new C.uY(1,"location")
B.is=new C.uY(2,"camera")
B.jh=new C.F6(0,"ask")
B.ji=new C.F6(1,"granted")
B.io=new C.F6(2,"denied")
B.lM=new C.F6(3,"unsupported")})()};
(a=>{a["RoKqT+Qfk7atrE/F4/ApAKqfKfE="]=a.current})($__dart_deferred_initializers__);