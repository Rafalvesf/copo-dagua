((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
al9(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$al9=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.FC()
A:{if(D.kX===q){s=B.km
break A}if(D.rX===q){s=B.jo
break A}if(D.yy===q||D.yz===q){s=B.mS
break A}if(D.Hb===q){s=B.kl
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_B().v8(),$async$al9)
case 12:r=f
B:{if(D.G9===r||D.rp===r){s=B.km
break B}if(D.ro===r){s=B.jo
break B}if(D.bFj===r||D.oz===r){s=B.kl
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mS
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cHI(),$async$al9)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.km
x=14
break
case 16:s=B.jo
x=14
break
case 17:s=B.mS
x=14
break
case 18:s=B.kl
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$al9,w)},
a_3(d){return C.dGR(d)},
dGR(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$a_3=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.yb(),$async$a_3)
case 12:s=f
if(s===D.kX)p=B.km
else p=s===D.rX?B.jo:B.kl
v=p
x=1
break
case 10:x=13
return A.d($.a_B().w_(0),$async$a_3)
case 13:r=f
p=r===D.G9||r===D.rp?B.km:B.jo
v=p
x=1
break
case 11:x=14
return A.d(C.cHH(),$async$a_3)
case 14:q=f
if(J.o(q,"granted"))p=B.km
else p=J.o(q,"unsupported")?B.mS:B.jo
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.jo
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$a_3,w)},
wJ:function wJ(d,e){this.a=d
this.b=e},
Hz:function Hz(d,e){this.a=d
this.b=e},
cHI(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHI=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fO(q.status(),y.g),$async$cHI)
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
return A.m($async$cHI,w)},
cHH(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHH=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fO(q.request(),y.g),$async$cHH)
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
return A.m($async$cHH,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[181],C)
B=c[298]
C.wJ.prototype={
I(){return"AppPermission."+this.b}}
C.Hz.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.f8,[C.wJ,C.Hz])})()
var y={g:A.w("c"),c:A.w("Hz")};(function constants(){B.ls=new C.wJ(0,"notifications")
B.jr=new C.wJ(1,"location")
B.js=new C.wJ(2,"camera")
B.kl=new C.Hz(0,"ask")
B.km=new C.Hz(1,"granted")
B.jo=new C.Hz(2,"denied")
B.mS=new C.Hz(3,"unsupported")})()};
(a=>{a["gw9g7vxO9P0JMdam8AolWY10NL0="]=a.current})($__dart_deferred_initializers__);