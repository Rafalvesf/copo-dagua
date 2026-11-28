((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
al_(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$al_=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.FB()
A:{if(D.kN===q){s=B.kg
break A}if(D.rR===q){s=B.ji
break A}if(D.yt===q||D.yu===q){s=B.mK
break A}if(D.H7===q){s=B.kf
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_y().v7(),$async$al_)
case 12:r=f
B:{if(D.G5===r||D.rj===r){s=B.kg
break B}if(D.ri===r){s=B.ji
break B}if(D.bF6===r||D.ot===r){s=B.kf
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mK
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cGg(),$async$al_)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.kg
x=14
break
case 16:s=B.ji
x=14
break
case 17:s=B.mK
x=14
break
case 18:s=B.kf
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$al_,w)},
ZY(d){return C.dF7(d)},
dF7(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$ZY=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.y7(),$async$ZY)
case 12:s=f
if(s===D.kN)p=B.kg
else p=s===D.rR?B.ji:B.kf
v=p
x=1
break
case 10:x=13
return A.d($.a_y().vZ(0),$async$ZY)
case 13:r=f
p=r===D.G5||r===D.rj?B.kg:B.ji
v=p
x=1
break
case 11:x=14
return A.d(C.cGf(),$async$ZY)
case 14:q=f
if(J.o(q,"granted"))p=B.kg
else p=J.o(q,"unsupported")?B.mK:B.ji
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
return A.m($async$ZY,w)},
wF:function wF(d,e){this.a=d
this.b=e},
Hw:function Hw(d,e){this.a=d
this.b=e},
cGg(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cGg=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.status(),y.g),$async$cGg)
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
return A.m($async$cGg,w)},
cGf(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cGf=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.request(),y.g),$async$cGf)
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
return A.m($async$cGf,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[181],C)
B=c[296]
C.wF.prototype={
I(){return"AppPermission."+this.b}}
C.Hw.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.f7,[C.wF,C.Hw])})()
var y={g:A.w("c"),c:A.w("Hw")};(function constants(){B.lh=new C.wF(0,"notifications")
B.jl=new C.wF(1,"location")
B.jm=new C.wF(2,"camera")
B.kf=new C.Hw(0,"ask")
B.kg=new C.Hw(1,"granted")
B.ji=new C.Hw(2,"denied")
B.mK=new C.Hw(3,"unsupported")})()};
(a=>{a["PeUirCJ12y/8NY2EegYr+d0dinc="]=a.current})($__dart_deferred_initializers__);