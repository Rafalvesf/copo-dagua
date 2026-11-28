((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
akY(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$akY=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.FC()
A:{if(D.kM===q){s=B.kk
break A}if(D.rp===q){s=B.jj
break A}if(D.y8===q||D.y9===q){s=B.mx
break A}if(D.GH===q){s=B.kj
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_G().uX(),$async$akY)
case 12:r=f
B:{if(D.FH===r||D.qQ===r){s=B.kk
break B}if(D.qP===r){s=B.jj
break B}if(D.bE2===r||D.oe===r){s=B.kj
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
return A.d(C.cIl(),$async$akY)
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
case 16:s=B.jj
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
return A.m($async$akY,w)},
a_2(d){return C.dIe(d)},
dIe(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$a_2=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.yb(),$async$a_2)
case 12:s=f
if(s===D.kM)p=B.kk
else p=s===D.rp?B.jj:B.kj
v=p
x=1
break
case 10:x=13
return A.d($.a_G().vQ(0),$async$a_2)
case 13:r=f
p=r===D.FH||r===D.qQ?B.kk:B.jj
v=p
x=1
break
case 11:x=14
return A.d(C.cIk(),$async$a_2)
case 14:q=f
if(J.o(q,"granted"))p=B.kk
else p=J.o(q,"unsupported")?B.mx:B.jj
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
return A.m($async$a_2,w)},
wL:function wL(d,e){this.a=d
this.b=e},
HC:function HC(d,e){this.a=d
this.b=e},
cIl(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cIl=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fC(q.status(),y.g),$async$cIl)
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
return A.m($async$cIl,w)},
cIk(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cIk=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fC(q.request(),y.g),$async$cIk)
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
return A.m($async$cIk,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[179],C)
B=c[295]
C.wL.prototype={
I(){return"AppPermission."+this.b}}
C.HC.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.f7,[C.wL,C.HC])})()
var y={g:A.z("c"),c:A.z("HC")};(function constants(){B.l9=new C.wL(0,"notifications")
B.jm=new C.wL(1,"location")
B.jn=new C.wL(2,"camera")
B.kj=new C.HC(0,"ask")
B.kk=new C.HC(1,"granted")
B.jj=new C.HC(2,"denied")
B.mx=new C.HC(3,"unsupported")})()};
(a=>{a["jiH9uijSbpJjbqs4o+3401Sj06E="]=a.current})($__dart_deferred_initializers__);