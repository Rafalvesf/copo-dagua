((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
ajc(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$ajc=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.F0()
A:{if(D.kz===q){s=B.jW
break A}if(D.rh===q){s=B.j3
break A}if(D.xM===q||D.xN===q){s=B.mq
break A}if(D.G6===q){s=B.jV
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.Zp().uY(),$async$ajc)
case 12:r=f
B:{if(D.F4===r||D.qM===r){s=B.jW
break B}if(D.qL===r){s=B.j3
break B}if(D.bCp===r||D.nX===r){s=B.jV
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mq
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cA_(),$async$ajc)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.jW
x=14
break
case 16:s=B.j3
x=14
break
case 17:s=B.mq
x=14
break
case 18:s=B.jV
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ajc,w)},
YR(d){return C.dxo(d)},
dxo(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$YR=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.xG(),$async$YR)
case 12:s=f
if(s===D.kz)p=B.jW
else p=s===D.rh?B.j3:B.jV
v=p
x=1
break
case 10:x=13
return A.d($.Zp().vP(0),$async$YR)
case 13:r=f
p=r===D.F4||r===D.qM?B.jW:B.j3
v=p
x=1
break
case 11:x=14
return A.d(C.czZ(),$async$YR)
case 14:q=f
if(J.o(q,"granted"))p=B.jW
else p=J.o(q,"unsupported")?B.mq:B.j3
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.j3
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$YR,w)},
wh:function wh(d,e){this.a=d
this.b=e},
GY:function GY(d,e){this.a=d
this.b=e},
cA_(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cA_=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.hf(q.status(),y.g),$async$cA_)
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
return A.m($async$cA_,w)},
czZ(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$czZ=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.hf(q.request(),y.g),$async$czZ)
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
return A.m($async$czZ,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[167],C)
B=c[250]
C.wh.prototype={
I(){return"AppPermission."+this.b}}
C.GY.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fy,[C.wh,C.GY])})()
var y={g:A.x("c"),c:A.x("GY")};(function constants(){B.l_=new C.wh(0,"notifications")
B.j5=new C.wh(1,"location")
B.j6=new C.wh(2,"camera")
B.jV=new C.GY(0,"ask")
B.jW=new C.GY(1,"granted")
B.j3=new C.GY(2,"denied")
B.mq=new C.GY(3,"unsupported")})()};
(a=>{a["o2HEjCf95aWy+KBpypY5NnnvZQM="]=a.current})($__dart_deferred_initializers__);