((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
akW(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$akW=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.FB()
A:{if(D.kM===q){s=B.kk
break A}if(D.ro===q){s=B.jj
break A}if(D.y7===q||D.y8===q){s=B.mw
break A}if(D.GG===q){s=B.kj
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_E().uX(),$async$akW)
case 12:r=f
B:{if(D.FG===r||D.qO===r){s=B.kk
break B}if(D.qN===r){s=B.jj
break B}if(D.bE0===r||D.oe===r){s=B.kj
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
return A.d(C.cId(),$async$akW)
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
case 17:s=B.mw
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
return A.m($async$akW,w)},
a_0(d){return C.dI4(d)},
dI4(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
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
return A.d(A.ya(),$async$a_0)
case 12:s=f
if(s===D.kM)p=B.kk
else p=s===D.ro?B.jj:B.kj
v=p
x=1
break
case 10:x=13
return A.d($.a_E().vQ(0),$async$a_0)
case 13:r=f
p=r===D.FG||r===D.qO?B.kk:B.jj
v=p
x=1
break
case 11:x=14
return A.d(C.cIc(),$async$a_0)
case 14:q=f
if(J.o(q,"granted"))p=B.kk
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
return A.m($async$a_0,w)},
wK:function wK(d,e){this.a=d
this.b=e},
HB:function HB(d,e){this.a=d
this.b=e},
cId(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cId=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fC(q.status(),y.g),$async$cId)
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
return A.m($async$cId,w)},
cIc(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cIc=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fC(q.request(),y.g),$async$cIc)
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
return A.m($async$cIc,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[179],C)
B=c[295]
C.wK.prototype={
I(){return"AppPermission."+this.b}}
C.HB.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fg,[C.wK,C.HB])})()
var y={g:A.z("c"),c:A.z("HB")};(function constants(){B.l9=new C.wK(0,"notifications")
B.jm=new C.wK(1,"location")
B.jn=new C.wK(2,"camera")
B.kj=new C.HB(0,"ask")
B.kk=new C.HB(1,"granted")
B.jj=new C.HB(2,"denied")
B.mw=new C.HB(3,"unsupported")})()};
(a=>{a["XyJdqc7mXES1NYYNIed1V/0clv4="]=a.current})($__dart_deferred_initializers__);