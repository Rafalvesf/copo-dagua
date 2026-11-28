((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d72(d){var x=C.aS('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.B(d)))return d
x=C.aX(d,"\\","\\\\")
return'"'+C.aX(x,'"','\\"')+'"'},
ow:function ow(d,e){this.a=d
this.b=e},
Ft:function Ft(d,e,f){this.a=d
this.b=e
this.c=f},
bo7:function bo7(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[123],B)
A=c[242]
B.ow.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbCX(){var x,w=this
A:{if(A.a5V===w){x="in"
break A}if(A.bPU===w){x="is"
break A}if(A.bPN===w){x="isdistinct"
break A}if(A.yf===w||A.bPK===w||A.bPO===w||A.bPP===w||A.bPQ===w||A.bPR===w||A.bPS===w||A.bPT===w||A.bPL===w||A.bPM===w){x=w.b
break A}x=null}return x}}
B.Ft.prototype={
k(d){var x=this,w=x.a
if(w===A.a5V)return x.b+"=in.("+C.q(y.h.a(x.c).du(0,new B.bo7(),y.g).a0(0,","))+")"
return x.b+"="+w.gbCX()+"."+B.d72(x.c)}}
var z=a.updateTypes([])
B.bo7.prototype={
$1(d){return B.d72(d)},
$S:72};(function inheritance(){var x=a.inherit
x(B.ow,C.eX)
x(B.Ft,C.J)
x(B.bo7,C.bw)})()
var y={h:C.w("x<@>"),g:C.w("c")};(function constants(){A.yf=new B.ow(0,"eq")
A.bPK=new B.ow(1,"neq")
A.bPL=new B.ow(10,"match")
A.bPM=new B.ow(11,"imatch")
A.bPN=new B.ow(12,"isDistinct")
A.bPO=new B.ow(2,"lt")
A.bPP=new B.ow(3,"lte")
A.bPQ=new B.ow(4,"gt")
A.bPR=new B.ow(5,"gte")
A.a5V=new B.ow(6,"inFilter")
A.bPS=new B.ow(7,"like")
A.bPT=new B.ow(8,"ilike")
A.bPU=new B.ow(9,"isFilter")})()};
(a=>{a["FQE5E5AxzZZuJpTu+50MS4s7iqk="]=a.current})($__dart_deferred_initializers__);