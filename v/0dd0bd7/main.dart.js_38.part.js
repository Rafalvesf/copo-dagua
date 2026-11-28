((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
akw(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$akw=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.Fq()
A:{if(D.kK===q){s=B.kg
break A}if(D.rm===q){s=B.jg
break A}if(D.y4===q||D.y5===q){s=B.mt
break A}if(D.GD===q){s=B.kf
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_o().uT(),$async$akw)
case 12:r=f
B:{if(D.FC===r||D.qM===r){s=B.kg
break B}if(D.qL===r){s=B.jg
break B}if(D.bDY===r||D.ob===r){s=B.kf
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mt
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cGY(),$async$akw)
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
case 16:s=B.jg
x=14
break
case 17:s=B.mt
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
return A.m($async$akw,w)},
ZM(d){return C.dGD(d)},
dGD(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$ZM=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.y2(),$async$ZM)
case 12:s=f
if(s===D.kK)p=B.kg
else p=s===D.rm?B.jg:B.kf
v=p
x=1
break
case 10:x=13
return A.d($.a_o().vL(0),$async$ZM)
case 13:r=f
p=r===D.FC||r===D.qM?B.kg:B.jg
v=p
x=1
break
case 11:x=14
return A.d(C.cGX(),$async$ZM)
case 14:q=f
if(J.o(q,"granted"))p=B.kg
else p=J.o(q,"unsupported")?B.mt:B.jg
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
return A.m($async$ZM,w)},
wC:function wC(d,e){this.a=d
this.b=e},
Hn:function Hn(d,e){this.a=d
this.b=e},
cGY(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cGY=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fF(q.status(),y.g),$async$cGY)
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
return A.m($async$cGY,w)},
cGX(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cGX=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fF(q.request(),y.g),$async$cGX)
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
return A.m($async$cGX,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[179],C)
B=c[295]
C.wC.prototype={
I(){return"AppPermission."+this.b}}
C.Hn.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.ff,[C.wC,C.Hn])})()
var y={g:A.y("c"),c:A.y("Hn")};(function constants(){B.l7=new C.wC(0,"notifications")
B.jj=new C.wC(1,"location")
B.jk=new C.wC(2,"camera")
B.kf=new C.Hn(0,"ask")
B.kg=new C.Hn(1,"granted")
B.jg=new C.Hn(2,"denied")
B.mt=new C.Hn(3,"unsupported")})()};
(a=>{a["UaHB0RwFs9xvkCzZOtfRPMvn3Sg="]=a.current})($__dart_deferred_initializers__);