((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d2C(d){var x=C.aW('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.D(d)))return d
x=C.b0(d,"\\","\\\\")
return'"'+C.b0(x,'"','\\"')+'"'},
ot:function ot(d,e){this.a=d
this.b=e},
Fm:function Fm(d,e,f){this.a=d
this.b=e
this.c=f},
bmY:function bmY(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[118],B)
A=c[231]
B.ot.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbCu(){var x,w=this
A:{if(A.a66===w){x="in"
break A}if(A.bQ9===w){x="is"
break A}if(A.bQ2===w){x="isdistinct"
break A}if(A.y2===w||A.bQ_===w||A.bQ3===w||A.bQ4===w||A.bQ5===w||A.bQ6===w||A.bQ7===w||A.bQ8===w||A.bQ0===w||A.bQ1===w){x=w.b
break A}x=null}return x}}
B.Fm.prototype={
k(d){var x=this,w=x.a
if(w===A.a66)return x.b+"=in.("+C.q(y.h.a(x.c).dz(0,new B.bmY(),y.g).a3(0,","))+")"
return x.b+"="+w.gbCu()+"."+B.d2C(x.c)}}
var z=a.updateTypes([])
B.bmY.prototype={
$1(d){return B.d2C(d)},
$S:69};(function inheritance(){var x=a.inherit
x(B.ot,C.fr)
x(B.Fm,C.I)
x(B.bmY,C.bx)})()
var y={h:C.w("z<@>"),g:C.w("c")};(function constants(){A.y2=new B.ot(0,"eq")
A.bQ_=new B.ot(1,"neq")
A.bQ0=new B.ot(10,"match")
A.bQ1=new B.ot(11,"imatch")
A.bQ2=new B.ot(12,"isDistinct")
A.bQ3=new B.ot(2,"lt")
A.bQ4=new B.ot(3,"lte")
A.bQ5=new B.ot(4,"gt")
A.bQ6=new B.ot(5,"gte")
A.a66=new B.ot(6,"inFilter")
A.bQ7=new B.ot(7,"like")
A.bQ8=new B.ot(8,"ilike")
A.bQ9=new B.ot(9,"isFilter")})()};
(a=>{a["Z7KMKtPIcVNlob5EK0W0KddCwqg="]=a.current})($__dart_deferred_initializers__);