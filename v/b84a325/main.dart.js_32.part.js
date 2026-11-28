((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
akr(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$akr=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Fr()
A:{if(D.kG===q){s=B.k4
break A}if(D.rz===q){s=B.ja
break A}if(D.y4===q||D.y5===q){s=B.mw
break A}if(D.GJ===q){s=B.k3
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_a().v3(),$async$akr)
case 12:r=f
B:{if(D.FH===r||D.r2===r){s=B.k4
break B}if(D.r1===r){s=B.ja
break B}if(D.bEq===r||D.oa===r){s=B.k3
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mw
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cDD(),$async$akr)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.k4
x=14
break
case 16:s=B.ja
x=14
break
case 17:s=B.mw
x=14
break
case 18:s=B.k3
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akr,w)},
ZC(d){return C.dC5(d)},
dC5(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$ZC=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.y5(),$async$ZC)
case 12:s=f
if(s===D.kG)p=B.k4
else p=s===D.rz?B.ja:B.k3
v=p
x=1
break
case 10:x=13
return A.d($.a_a().vV(0),$async$ZC)
case 13:r=f
p=r===D.FH||r===D.r2?B.k4:B.ja
v=p
x=1
break
case 11:x=14
return A.d(C.cDC(),$async$ZC)
case 14:q=f
if(J.o(q,"granted"))p=B.k4
else p=J.o(q,"unsupported")?B.mw:B.ja
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.ja
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ZC,w)},
wB:function wB(d,e){this.a=d
this.b=e},
Hn:function Hn(d,e){this.a=d
this.b=e},
cDD(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cDD=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.status(),y.g),$async$cDD)
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
return A.m($async$cDD,w)},
cDC(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cDC=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.request(),y.g),$async$cDC)
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
return A.m($async$cDC,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[175],C)
B=c[292]
C.wB.prototype={
I(){return"AppPermission."+this.b}}
C.Hn.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fr,[C.wB,C.Hn])})()
var y={g:A.w("c"),c:A.w("Hn")};(function constants(){B.l5=new C.wB(0,"notifications")
B.jd=new C.wB(1,"location")
B.je=new C.wB(2,"camera")
B.k3=new C.Hn(0,"ask")
B.k4=new C.Hn(1,"granted")
B.ja=new C.Hn(2,"denied")
B.mw=new C.Hn(3,"unsupported")})()};
(a=>{a["ABd5lxahyqSz6WTv1X5VpPKId04="]=a.current})($__dart_deferred_initializers__);