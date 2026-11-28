((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
akL(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$akL=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Fw()
A:{if(D.kM===q){s=B.kj
break A}if(D.ro===q){s=B.ji
break A}if(D.y6===q||D.y7===q){s=B.mw
break A}if(D.GF===q){s=B.ki
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_x().uX(),$async$akL)
case 12:r=f
B:{if(D.FF===r||D.qO===r){s=B.kj
break B}if(D.qN===r){s=B.ji
break B}if(D.bE0===r||D.oe===r){s=B.ki
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
return A.d(C.cHQ(),$async$akL)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.kj
x=14
break
case 16:s=B.ji
x=14
break
case 17:s=B.mw
x=14
break
case 18:s=B.ki
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akL,w)},
ZV(d){return C.dHC(d)},
dHC(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$ZV=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.y4(),$async$ZV)
case 12:s=f
if(s===D.kM)p=B.kj
else p=s===D.ro?B.ji:B.ki
v=p
x=1
break
case 10:x=13
return A.d($.a_x().vP(0),$async$ZV)
case 13:r=f
p=r===D.FF||r===D.qO?B.kj:B.ji
v=p
x=1
break
case 11:x=14
return A.d(C.cHP(),$async$ZV)
case 14:q=f
if(J.o(q,"granted"))p=B.kj
else p=J.o(q,"unsupported")?B.mw:B.ji
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
return A.m($async$ZV,w)},
wF:function wF(d,e){this.a=d
this.b=e},
Hu:function Hu(d,e){this.a=d
this.b=e},
cHQ(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHQ=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fH(q.status(),y.g),$async$cHQ)
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
return A.m($async$cHQ,w)},
cHP(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHP=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fH(q.request(),y.g),$async$cHP)
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
return A.m($async$cHP,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[179],C)
B=c[295]
C.wF.prototype={
I(){return"AppPermission."+this.b}}
C.Hu.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fg,[C.wF,C.Hu])})()
var y={g:A.A("c"),c:A.A("Hu")};(function constants(){B.l9=new C.wF(0,"notifications")
B.jl=new C.wF(1,"location")
B.jm=new C.wF(2,"camera")
B.ki=new C.Hu(0,"ask")
B.kj=new C.Hu(1,"granted")
B.ji=new C.Hu(2,"denied")
B.mw=new C.Hu(3,"unsupported")})()};
(a=>{a["tsnrw5cp052qkc1Csn9FYojJzwc="]=a.current})($__dart_deferred_initializers__);