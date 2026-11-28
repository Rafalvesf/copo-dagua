((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d3w(d){var x=C.aV('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.D(d)))return d
x=C.b_(d,"\\","\\\\")
return'"'+C.b_(x,'"','\\"')+'"'},
ov:function ov(d,e){this.a=d
this.b=e},
Fp:function Fp(d,e,f){this.a=d
this.b=e
this.c=f},
bnd:function bnd(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[120],B)
A=c[235]
B.ov.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbCR(){var x,w=this
A:{if(A.a6k===w){x="in"
break A}if(A.bQM===w){x="is"
break A}if(A.bQF===w){x="isdistinct"
break A}if(A.yh===w||A.bQC===w||A.bQG===w||A.bQH===w||A.bQI===w||A.bQJ===w||A.bQK===w||A.bQL===w||A.bQD===w||A.bQE===w){x=w.b
break A}x=null}return x}}
B.Fp.prototype={
k(d){var x=this,w=x.a
if(w===A.a6k)return x.b+"=in.("+C.q(y.h.a(x.c).dz(0,new B.bnd(),y.g).a2(0,","))+")"
return x.b+"="+w.gbCR()+"."+B.d3w(x.c)}}
var z=a.updateTypes([])
B.bnd.prototype={
$1(d){return B.d3w(d)},
$S:68};(function inheritance(){var x=a.inherit
x(B.ov,C.fg)
x(B.Fp,C.J)
x(B.bnd,C.bx)})()
var y={h:C.w("z<@>"),g:C.w("c")};(function constants(){A.yh=new B.ov(0,"eq")
A.bQC=new B.ov(1,"neq")
A.bQD=new B.ov(10,"match")
A.bQE=new B.ov(11,"imatch")
A.bQF=new B.ov(12,"isDistinct")
A.bQG=new B.ov(2,"lt")
A.bQH=new B.ov(3,"lte")
A.bQI=new B.ov(4,"gt")
A.bQJ=new B.ov(5,"gte")
A.a6k=new B.ov(6,"inFilter")
A.bQK=new B.ov(7,"like")
A.bQL=new B.ov(8,"ilike")
A.bQM=new B.ov(9,"isFilter")})()};
(a=>{a["Pl9x1Wr7JSdGSlUSf1h9/HtlqYw="]=a.current})($__dart_deferred_initializers__);