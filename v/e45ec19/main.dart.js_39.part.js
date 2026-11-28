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
case 5:q=A.FG()
A:{if(D.kM===q){s=B.kk
break A}if(D.rj===q){s=B.jl
break A}if(D.y6===q||D.y7===q){s=B.mx
break A}if(D.GL===q){s=B.kj
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_J().uU(),$async$al0)
case 12:r=f
B:{if(D.FK===r||D.qK===r){s=B.kk
break B}if(D.qJ===r){s=B.jl
break B}if(D.bEe===r||D.od===r){s=B.kj
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mx
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cHX(),$async$al0)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.kk
x=14
break
case 16:s=B.jl
x=14
break
case 17:s=B.mx
x=14
break
case 18:s=B.kj
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$al0,w)},
a_4(d){return C.dI_(d)},
dI_(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$a_4=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.yd(),$async$a_4)
case 12:s=f
if(s===D.kM)p=B.kk
else p=s===D.rj?B.jl:B.kj
v=p
x=1
break
case 10:x=13
return A.d($.a_J().vM(0),$async$a_4)
case 13:r=f
p=r===D.FK||r===D.qK?B.kk:B.jl
v=p
x=1
break
case 11:x=14
return A.d(C.cHW(),$async$a_4)
case 14:q=f
if(J.o(q,"granted"))p=B.kk
else p=J.o(q,"unsupported")?B.mx:B.jl
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.jl
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$a_4,w)},
wO:function wO(d,e){this.a=d
this.b=e},
HG:function HG(d,e){this.a=d
this.b=e},
cHX(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHX=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fD(q.status(),y.g),$async$cHX)
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
return A.m($async$cHX,w)},
cHW(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHW=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fD(q.request(),y.g),$async$cHW)
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
return A.m($async$cHW,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[179],C)
B=c[295]
C.wO.prototype={
I(){return"AppPermission."+this.b}}
C.HG.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.f7,[C.wO,C.HG])})()
var y={g:A.A("c"),c:A.A("HG")};(function constants(){B.la=new C.wO(0,"notifications")
B.jo=new C.wO(1,"location")
B.jp=new C.wO(2,"camera")
B.kj=new C.HG(0,"ask")
B.kk=new C.HG(1,"granted")
B.jl=new C.HG(2,"denied")
B.mx=new C.HG(3,"unsupported")})()};
(a=>{a["D3L+yMTF1rI0uBXHaxkBjLd43+I="]=a.current})($__dart_deferred_initializers__);