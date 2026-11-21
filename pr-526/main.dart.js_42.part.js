((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
agq(d){var x=0,w=A.m(y.c),v,u=2,t=[],s,r,q,p,o
var $async$agq=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.DF()
A:{if(D.k4===q){s=B.ju
break A}if(D.qQ===q){s=B.iH
break A}if(D.xi===q||D.xj===q){s=B.lW
break A}if(D.Fp===q){s=B.jt
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.WY().ui(),$async$agq)
case 12:r=f
B:{if(D.Eq===r||D.qg===r){s=B.ju
break B}if(D.qf===r){s=B.iH
break B}if(D.bAR===r||D.nm===r){s=B.jt
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.lW
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cns(),$async$agq)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.ju
x=14
break
case 16:s=B.iH
x=14
break
case 17:s=B.lW
x=14
break
case 18:s=B.jt
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$agq,w)},
Wq(d){return C.dgH(d)},
dgH(d){var x=0,w=A.m(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$Wq=A.i(function(e,f){if(e===1){t.push(f)
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
return A.d(A.wO(),$async$Wq)
case 12:s=f
if(s===D.k4)p=B.ju
else p=s===D.qQ?B.iH:B.jt
v=p
x=1
break
case 10:x=13
return A.d($.WY().v4(0),$async$Wq)
case 13:r=f
p=r===D.Eq||r===D.qg?B.ju:B.iH
v=p
x=1
break
case 11:x=14
return A.d(C.cnr(),$async$Wq)
case 14:q=f
if(J.n(q,"granted"))p=B.ju
else p=J.n(q,"unsupported")?B.lW:B.iH
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.iH
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Wq,w)},
vk:function vk(d,e){this.a=d
this.b=e},
Fy:function Fy(d,e){this.a=d
this.b=e},
cns(){var x=0,w=A.m(y.g),v,u=2,t=[],s,r,q,p
var $async$cns=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.he(q.status(),y.g),$async$cns)
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
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$cns,w)},
cnr(){var x=0,w=A.m(y.g),v,u=2,t=[],s,r,q,p
var $async$cnr=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.he(q.request(),y.g),$async$cnr)
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
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$cnr,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[181],C)
B=c[280]
C.vk.prototype={
J(){return"AppPermission."+this.b}}
C.Fy.prototype={
J(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.fn,[C.vk,C.Fy])})()
var y={g:A.u("c"),c:A.u("Fy")};(function constants(){B.ky=new C.vk(0,"notifications")
B.iK=new C.vk(1,"location")
B.iL=new C.vk(2,"camera")
B.jt=new C.Fy(0,"ask")
B.ju=new C.Fy(1,"granted")
B.iH=new C.Fy(2,"denied")
B.lW=new C.Fy(3,"unsupported")})()};
(a=>{a["g3ogkGuDeuEJASJApMHedTPs8UA="]=a.current})($__dart_deferred_initializers__);