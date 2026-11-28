((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
akO(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$akO=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Fx()
A:{if(D.kM===q){s=B.kj
break A}if(D.ro===q){s=B.jj
break A}if(D.y7===q||D.y8===q){s=B.mw
break A}if(D.GF===q){s=B.ki
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_z().uY(),$async$akO)
case 12:r=f
B:{if(D.FF===r||D.qO===r){s=B.kj
break B}if(D.qN===r){s=B.jj
break B}if(D.bDZ===r||D.od===r){s=B.ki
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
return A.d(C.cI0(),$async$akO)
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
case 16:s=B.jj
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
return A.m($async$akO,w)},
ZW(d){return C.dHP(d)},
dHP(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$ZW=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.y9(),$async$ZW)
case 12:s=f
if(s===D.kM)p=B.kj
else p=s===D.ro?B.jj:B.ki
v=p
x=1
break
case 10:x=13
return A.d($.a_z().vR(0),$async$ZW)
case 13:r=f
p=r===D.FF||r===D.qO?B.kj:B.jj
v=p
x=1
break
case 11:x=14
return A.d(C.cI_(),$async$ZW)
case 14:q=f
if(J.o(q,"granted"))p=B.kj
else p=J.o(q,"unsupported")?B.mw:B.jj
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.jj
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ZW,w)},
wJ:function wJ(d,e){this.a=d
this.b=e},
Hw:function Hw(d,e){this.a=d
this.b=e},
cI0(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cI0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fI(q.status(),y.g),$async$cI0)
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
return A.m($async$cI0,w)},
cI_(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cI_=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fI(q.request(),y.g),$async$cI_)
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
return A.m($async$cI_,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[179],C)
B=c[295]
C.wJ.prototype={
I(){return"AppPermission."+this.b}}
C.Hw.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fg,[C.wJ,C.Hw])})()
var y={g:A.z("c"),c:A.z("Hw")};(function constants(){B.l9=new C.wJ(0,"notifications")
B.jm=new C.wJ(1,"location")
B.jn=new C.wJ(2,"camera")
B.ki=new C.Hw(0,"ask")
B.kj=new C.Hw(1,"granted")
B.jj=new C.Hw(2,"denied")
B.mw=new C.Hw(3,"unsupported")})()};
(a=>{a["vwiuR0zzgvSpB0EWFZMTtpY5KB8="]=a.current})($__dart_deferred_initializers__);