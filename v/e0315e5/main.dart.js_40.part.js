((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
aic(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$aic=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Eq()
A:{if(D.kc===q){s=B.jB
break A}if(D.r3===q){s=B.iN
break A}if(D.xC===q||D.xD===q){s=B.m4
break A}if(D.FP===q){s=B.jA
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.Yx().uP(),$async$aic)
case 12:r=f
B:{if(D.EO===r||D.qw===r){s=B.jB
break B}if(D.qv===r){s=B.iN
break B}if(D.bBG===r||D.nv===r){s=B.jA
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.m4
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.ctu(),$async$aic)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.jB
x=14
break
case 16:s=B.iN
x=14
break
case 17:s=B.m4
x=14
break
case 18:s=B.jA
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aic,w)},
Y0(d){return C.doQ(d)},
doQ(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$Y0=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.xp(),$async$Y0)
case 12:s=f
if(s===D.kc)p=B.jB
else p=s===D.r3?B.iN:B.jA
v=p
x=1
break
case 10:x=13
return A.d($.Yx().vE(0),$async$Y0)
case 13:r=f
p=r===D.EO||r===D.qw?B.jB:B.iN
v=p
x=1
break
case 11:x=14
return A.d(C.ctt(),$async$Y0)
case 14:q=f
if(J.p(q,"granted"))p=B.jB
else p=J.p(q,"unsupported")?B.m4:B.iN
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.iN
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Y0,w)},
vV:function vV(d,e){this.a=d
this.b=e},
Gp:function Gp(d,e){this.a=d
this.b=e},
ctu(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$ctu=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.h8(q.status(),y.g),$async$ctu)
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
return A.m($async$ctu,w)},
ctt(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$ctt=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.h8(q.request(),y.g),$async$ctt)
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
return A.m($async$ctt,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[179],C)
B=c[270]
C.vV.prototype={
H(){return"AppPermission."+this.b}}
C.Gp.prototype={
H(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fv,[C.vV,C.Gp])})()
var y={g:A.w("c"),c:A.w("Gp")};(function constants(){B.kI=new C.vV(0,"notifications")
B.iQ=new C.vV(1,"location")
B.iR=new C.vV(2,"camera")
B.jA=new C.Gp(0,"ask")
B.jB=new C.Gp(1,"granted")
B.iN=new C.Gp(2,"denied")
B.m4=new C.Gp(3,"unsupported")})()};
(a=>{a["rrZnAkWi4kDi544QTN6uUMDG060="]=a.current})($__dart_deferred_initializers__);