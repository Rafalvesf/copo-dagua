((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
aif(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$aif=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Ev()
A:{if(D.kd===q){s=B.jA
break A}if(D.r2===q){s=B.iG
break A}if(D.xx===q||D.xy===q){s=B.m6
break A}if(D.FM===q){s=B.jz
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.Yx().uO(),$async$aif)
case 12:r=f
B:{if(D.EJ===r||D.qv===r){s=B.jA
break B}if(D.qu===r){s=B.iG
break B}if(D.bBj===r||D.nx===r){s=B.jz
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.m6
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.csZ(),$async$aif)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.jA
x=14
break
case 16:s=B.iG
x=14
break
case 17:s=B.m6
x=14
break
case 18:s=B.jz
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aif,w)},
Y0(d){return C.doo(d)},
doo(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
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
return A.d(A.xm(),$async$Y0)
case 12:s=f
if(s===D.kd)p=B.jA
else p=s===D.r2?B.iG:B.jz
v=p
x=1
break
case 10:x=13
return A.d($.Yx().vD(0),$async$Y0)
case 13:r=f
p=r===D.EJ||r===D.qv?B.jA:B.iG
v=p
x=1
break
case 11:x=14
return A.d(C.csY(),$async$Y0)
case 14:q=f
if(J.o(q,"granted"))p=B.jA
else p=J.o(q,"unsupported")?B.m6:B.iG
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.iG
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Y0,w)},
vS:function vS(d,e){this.a=d
this.b=e},
Gs:function Gs(d,e){this.a=d
this.b=e},
csZ(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$csZ=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.hb(q.status(),y.g),$async$csZ)
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
return A.m($async$csZ,w)},
csY(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$csY=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.hb(q.request(),y.g),$async$csY)
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
return A.m($async$csY,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[182],C)
B=c[274]
C.vS.prototype={
H(){return"AppPermission."+this.b}}
C.Gs.prototype={
H(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fw,[C.vS,C.Gs])})()
var y={g:A.v("c"),c:A.v("Gs")};(function constants(){B.kG=new C.vS(0,"notifications")
B.iK=new C.vS(1,"location")
B.iL=new C.vS(2,"camera")
B.jz=new C.Gs(0,"ask")
B.jA=new C.Gs(1,"granted")
B.iG=new C.Gs(2,"denied")
B.m6=new C.Gs(3,"unsupported")})()};
(a=>{a["wUZjpPT2J/6D1vstqY8/+S9rVyg="]=a.current})($__dart_deferred_initializers__);