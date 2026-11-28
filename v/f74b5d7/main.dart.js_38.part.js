((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
al5(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$al5=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.FC()
A:{if(D.kM===q){s=B.kg
break A}if(D.rH===q){s=B.jl
break A}if(D.yl===q||D.ym===q){s=B.mC
break A}if(D.GX===q){s=B.kf
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_D().v5(),$async$al5)
case 12:r=f
B:{if(D.FV===r||D.r8===r){s=B.kg
break B}if(D.r7===r){s=B.jl
break B}if(D.bEA===r||D.oo===r){s=B.kf
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mC
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cIl(),$async$al5)
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
case 16:s=B.jl
x=14
break
case 17:s=B.mC
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
return A.m($async$al5,w)},
a_0(d){return C.dHY(d)},
dHY(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$a_0=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.yd(),$async$a_0)
case 12:s=f
if(s===D.kM)p=B.kg
else p=s===D.rH?B.jl:B.kf
v=p
x=1
break
case 10:x=13
return A.d($.a_D().vX(0),$async$a_0)
case 13:r=f
p=r===D.FV||r===D.r8?B.kg:B.jl
v=p
x=1
break
case 11:x=14
return A.d(C.cIk(),$async$a_0)
case 14:q=f
if(J.o(q,"granted"))p=B.kg
else p=J.o(q,"unsupported")?B.mC:B.jl
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
return A.m($async$a_0,w)},
wI:function wI(d,e){this.a=d
this.b=e},
Hw:function Hw(d,e){this.a=d
this.b=e},
cIl(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cIl=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fK(q.status(),y.g),$async$cIl)
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
return A.d(A.fK(q.request(),y.g),$async$cIk)
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
C=a.updateHolder(c[178],C)
B=c[296]
C.wI.prototype={
I(){return"AppPermission."+this.b}}
C.Hw.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.f_,[C.wI,C.Hw])})()
var y={g:A.x("c"),c:A.x("Hw")};(function constants(){B.la=new C.wI(0,"notifications")
B.jp=new C.wI(1,"location")
B.jq=new C.wI(2,"camera")
B.kf=new C.Hw(0,"ask")
B.kg=new C.Hw(1,"granted")
B.jl=new C.Hw(2,"denied")
B.mC=new C.Hw(3,"unsupported")})()};
(a=>{a["V/wyDuZicjN4Eq+SqD6tGqt54JI="]=a.current})($__dart_deferred_initializers__);