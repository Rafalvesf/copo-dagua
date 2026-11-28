((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d77(d){var x=C.aS('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.C(d)))return d
x=C.aY(d,"\\","\\\\")
return'"'+C.aY(x,'"','\\"')+'"'},
oB:function oB(d,e){this.a=d
this.b=e},
Fw:function Fw(d,e,f){this.a=d
this.b=e
this.c=f},
bo8:function bo8(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[122],B)
A=c[242]
B.oB.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbDU(){var x,w=this
A:{if(A.a6B===w){x="in"
break A}if(A.bR3===w){x="is"
break A}if(A.bQX===w){x="isdistinct"
break A}if(A.yw===w||A.bQU===w||A.bQY===w||A.bQZ===w||A.bR_===w||A.bR0===w||A.bR1===w||A.bR2===w||A.bQV===w||A.bQW===w){x=w.b
break A}x=null}return x}}
B.Fw.prototype={
k(d){var x=this,w=x.a
if(w===A.a6B)return x.b+"=in.("+C.q(y.h.a(x.c).dt(0,new B.bo8(),y.g).a0(0,","))+")"
return x.b+"="+w.gbDU()+"."+B.d77(x.c)}}
var z=a.updateTypes([])
B.bo8.prototype={
$1(d){return B.d77(d)},
$S:71};(function inheritance(){var x=a.inherit
x(B.oB,C.f8)
x(B.Fw,C.L)
x(B.bo8,C.bz)})()
var y={h:C.w("B<@>"),g:C.w("c")};(function constants(){A.yw=new B.oB(0,"eq")
A.bQU=new B.oB(1,"neq")
A.bQV=new B.oB(10,"match")
A.bQW=new B.oB(11,"imatch")
A.bQX=new B.oB(12,"isDistinct")
A.bQY=new B.oB(2,"lt")
A.bQZ=new B.oB(3,"lte")
A.bR_=new B.oB(4,"gt")
A.bR0=new B.oB(5,"gte")
A.a6B=new B.oB(6,"inFilter")
A.bR1=new B.oB(7,"like")
A.bR2=new B.oB(8,"ilike")
A.bR3=new B.oB(9,"isFilter")})()};
(a=>{a["IoiQs2G7dB989GOOVLFqT2xzby0="]=a.current})($__dart_deferred_initializers__);