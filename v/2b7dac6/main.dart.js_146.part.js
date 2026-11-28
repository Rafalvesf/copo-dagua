((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d6Y(d){var x=C.aS('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.B(d)))return d
x=C.aX(d,"\\","\\\\")
return'"'+C.aX(x,'"','\\"')+'"'},
ow:function ow(d,e){this.a=d
this.b=e},
Fs:function Fs(d,e,f){this.a=d
this.b=e
this.c=f},
bo8:function bo8(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[122],B)
A=c[242]
B.ow.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbCX(){var x,w=this
A:{if(A.a5Y===w){x="in"
break A}if(A.bQ_===w){x="is"
break A}if(A.bPT===w){x="isdistinct"
break A}if(A.ye===w||A.bPQ===w||A.bPU===w||A.bPV===w||A.bPW===w||A.bPX===w||A.bPY===w||A.bPZ===w||A.bPR===w||A.bPS===w){x=w.b
break A}x=null}return x}}
B.Fs.prototype={
k(d){var x=this,w=x.a
if(w===A.a5Y)return x.b+"=in.("+C.q(y.h.a(x.c).du(0,new B.bo8(),y.g).a2(0,","))+")"
return x.b+"="+w.gbCX()+"."+B.d6Y(x.c)}}
var z=a.updateTypes([])
B.bo8.prototype={
$1(d){return B.d6Y(d)},
$S:72};(function inheritance(){var x=a.inherit
x(B.ow,C.eX)
x(B.Fs,C.J)
x(B.bo8,C.bw)})()
var y={h:C.w("y<@>"),g:C.w("c")};(function constants(){A.ye=new B.ow(0,"eq")
A.bPQ=new B.ow(1,"neq")
A.bPR=new B.ow(10,"match")
A.bPS=new B.ow(11,"imatch")
A.bPT=new B.ow(12,"isDistinct")
A.bPU=new B.ow(2,"lt")
A.bPV=new B.ow(3,"lte")
A.bPW=new B.ow(4,"gt")
A.bPX=new B.ow(5,"gte")
A.a5Y=new B.ow(6,"inFilter")
A.bPY=new B.ow(7,"like")
A.bPZ=new B.ow(8,"ilike")
A.bQ_=new B.ow(9,"isFilter")})()};
(a=>{a["Uzc16LSlzFjekzJ1MW/sDy/i1KA="]=a.current})($__dart_deferred_initializers__);