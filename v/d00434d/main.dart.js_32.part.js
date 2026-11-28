((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
akR(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$akR=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Fw()
A:{if(D.kN===q){s=B.kb
break A}if(D.rM===q){s=B.jg
break A}if(D.yk===q||D.yl===q){s=B.mF
break A}if(D.H4===q){s=B.ka
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_o().v4(),$async$akR)
case 12:r=f
B:{if(D.G1===r||D.rf===r){s=B.kb
break B}if(D.re===r){s=B.jg
break B}if(D.bF7===r||D.oj===r){s=B.ka
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mF
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cF7(),$async$akR)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.kb
x=14
break
case 16:s=B.jg
x=14
break
case 17:s=B.mF
x=14
break
case 18:s=B.ka
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akR,w)},
ZP(d){return C.dDU(d)},
dDU(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$ZP=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.y7(),$async$ZP)
case 12:s=f
if(s===D.kN)p=B.kb
else p=s===D.rM?B.jg:B.ka
v=p
x=1
break
case 10:x=13
return A.d($.a_o().vW(0),$async$ZP)
case 13:r=f
p=r===D.G1||r===D.rf?B.kb:B.jg
v=p
x=1
break
case 11:x=14
return A.d(C.cF6(),$async$ZP)
case 14:q=f
if(J.o(q,"granted"))p=B.kb
else p=J.o(q,"unsupported")?B.mF:B.jg
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.jg
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ZP,w)},
wE:function wE(d,e){this.a=d
this.b=e},
Hs:function Hs(d,e){this.a=d
this.b=e},
cF7(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cF7=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.status(),y.g),$async$cF7)
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
return A.m($async$cF7,w)},
cF6(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cF6=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fL(q.request(),y.g),$async$cF6)
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
return A.m($async$cF6,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[179],C)
B=c[294]
C.wE.prototype={
I(){return"AppPermission."+this.b}}
C.Hs.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.f6,[C.wE,C.Hs])})()
var y={g:A.w("c"),c:A.w("Hs")};(function constants(){B.le=new C.wE(0,"notifications")
B.jj=new C.wE(1,"location")
B.jk=new C.wE(2,"camera")
B.ka=new C.Hs(0,"ask")
B.kb=new C.Hs(1,"granted")
B.jg=new C.Hs(2,"denied")
B.mF=new C.Hs(3,"unsupported")})()};
(a=>{a["JUs1iJIE+Dg+7BAbrh+TOvanTxk="]=a.current})($__dart_deferred_initializers__);