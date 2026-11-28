((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C={
alr(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o
var $async$alr=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:case 3:switch(d.a){case 0:x=5
break
case 1:x=6
break
case 2:x=7
break
default:x=4
break}break
case 5:q=A.FG()
A:{if(D.kX===q){s=B.km
break A}if(D.rY===q){s=B.jp
break A}if(D.yA===q||D.yB===q){s=B.mR
break A}if(D.Hb===q){s=B.kl
break A}s=null}v=s
x=1
break
case 6:u=9
s=null
x=12
return A.d($.a_N().vd(),$async$alr)
case 12:r=f
B:{if(D.G8===r||D.rq===r){s=B.km
break B}if(D.rp===r){s=B.jp
break B}if(D.bFm===r||D.oA===r){s=B.kl
break B}}s=s
v=s
x=1
break
u=2
x=11
break
case 9:u=8
o=t.pop()
v=B.mR
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 7:case 13:x=19
return A.d(C.cIo(),$async$alr)
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
case 16:s=B.jp
x=14
break
case 17:s=B.mR
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
return A.m($async$alr,w)},
a_e(d){return C.dHA(d)},
dHA(d){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n
var $async$a_e=A.j(function(e,f){if(e===1){t.push(f)
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
return A.d(A.ye(),$async$a_e)
case 12:s=f
if(s===D.kX)p=B.km
else p=s===D.rY?B.jp:B.kl
v=p
x=1
break
case 10:x=13
return A.d($.a_N().w6(0),$async$a_e)
case 13:r=f
p=r===D.G8||r===D.rq?B.km:B.jp
v=p
x=1
break
case 11:x=14
return A.d(C.cIn(),$async$a_e)
case 14:q=f
if(J.o(q,"granted"))p=B.km
else p=J.o(q,"unsupported")?B.mR:B.jp
v=p
x=1
break
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
v=B.jp
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$a_e,w)},
wL:function wL(d,e){this.a=d
this.b=e},
HE:function HE(d,e){this.a=d
this.b=e},
cIo(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cIo=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fP(q.status(),y.g),$async$cIo)
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
return A.m($async$cIo,w)},
cIn(){var x=0,w=A.n(y.g),v,u=2,t=[],s,r,q,p
var $async$cIn=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:q=b.G.tchinCamera
if(q==null){v="unsupported"
x=1
break}u=4
x=7
return A.d(A.fP(q.request(),y.g),$async$cIn)
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
return A.m($async$cIn,w)}},B
J=c[1]
A=c[0]
D=c[2]
C=a.updateHolder(c[182],C)
B=c[297]
C.wL.prototype={
I(){return"AppPermission."+this.b}}
C.HE.prototype={
I(){return"_State."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany
x(A.f3,[C.wL,C.HE])})()
var y={g:A.w("c"),c:A.w("HE")};(function constants(){B.lq=new C.wL(0,"notifications")
B.jt=new C.wL(1,"location")
B.ju=new C.wL(2,"camera")
B.kl=new C.HE(0,"ask")
B.km=new C.HE(1,"granted")
B.jp=new C.HE(2,"denied")
B.mR=new C.HE(3,"unsupported")})()};
(a=>{a["eN1FkbN6H9biWUJG7iKvS1ROLgc="]=a.current})($__dart_deferred_initializers__);