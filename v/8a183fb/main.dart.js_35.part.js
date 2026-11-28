((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
al7(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$al7=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.FD()
A:{if(D.kQ===q){s=B.kl
break A}if(D.rU===q){s=B.jm
break A}if(D.yw===q||D.yx===q){s=B.mO
break A}if(D.Hb===q){s=B.kk
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_C().v7(),$async$al7)
case 12:r=f
B:{if(D.G9===r||D.rm===r){s=B.kl
break B}if(D.rl===r){s=B.jm
break B}if(D.bFe===r||D.ow===r){s=B.kk
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mO
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cHe(),$async$al7)
case 19:switch(f){case"granted":x=15
break
case"denied":x=16
break
case"unsupported":x=17
break
default:x=18
break}break
case 15:s=B.kl
x=14
break
case 16:s=B.jm
x=14
break
case 17:s=B.mO
x=14
break
case 18:s=B.kk
x=14
break
case 14:v=s
x=1
break
case 4:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$al7,w)},
a_2(d){return C.dGk(d)},
dGk(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
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
if(s===D.kQ)p=B.kl
else p=s===D.rU?B.jm:B.kk
v=p
x=1
break
case 10:x=13
return A.d($.a_C().vZ(0),$async$a_2)
case 13:r=f
p=r===D.G9||r===D.rm?B.kl:B.jm
v=p
x=1
break
case 11:x=14
return A.d(C.cHd(),$async$a_2)
case 14:q=f
if(J.o(q,"granted"))p=B.kl
else p=J.o(q,"unsupported")?B.mO:B.jm
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.jm
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$a_2,w)},
wK:function wK(d,e){this.a=d
this.b=e},
Hy:function Hy(d,e){this.a=d
this.b=e},
cHe(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHe=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fN(q.status(),y.g),$async$cHe)
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
return A.m($async$cHe,w)},
cHd(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cHd=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fN(q.request(),y.g),$async$cHd)
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
return A.m($async$cHd,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[181],C)
B=c[298]
C.wK.prototype={
I(){return"AppPermission."+this.b}}
C.Hy.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.f8,[C.wK,C.Hy])})()
var y={g:A.w("c"),c:A.w("Hy")};(function constants(){B.lk=new C.wK(0,"notifications")
B.jp=new C.wK(1,"location")
B.jq=new C.wK(2,"camera")
B.kk=new C.Hy(0,"ask")
B.kl=new C.Hy(1,"granted")
B.jm=new C.Hy(2,"denied")
B.mO=new C.Hy(3,"unsupported")})()};
(a=>{a["L6V7dVywvQaiuUkv6lw2HWhy7D8="]=a.current})($__dart_deferred_initializers__);