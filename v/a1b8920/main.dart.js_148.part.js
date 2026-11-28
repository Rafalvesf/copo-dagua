((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d7h(d){var x=C.aS('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.B(d)))return d
x=C.aW(d,"\\","\\\\")
return'"'+C.aW(x,'"','\\"')+'"'},
oy:function oy(d,e){this.a=d
this.b=e},
Fv:function Fv(d,e,f){this.a=d
this.b=e
this.c=f},
bo4:function bo4(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[123],B)
A=c[241]
B.oy.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbD0(){var x,w=this
A:{if(A.a5V===w){x="in"
break A}if(A.bQ_===w){x="is"
break A}if(A.bPT===w){x="isdistinct"
break A}if(A.ye===w||A.bPQ===w||A.bPU===w||A.bPV===w||A.bPW===w||A.bPX===w||A.bPY===w||A.bPZ===w||A.bPR===w||A.bPS===w){x=w.b
break A}x=null}return x}}
B.Fv.prototype={
k(d){var x=this,w=x.a
if(w===A.a5V)return x.b+"=in.("+C.q(y.h.a(x.c).du(0,new B.bo4(),y.g).a0(0,","))+")"
return x.b+"="+w.gbD0()+"."+B.d7h(x.c)}}
var z=a.updateTypes([])
B.bo4.prototype={
$1(d){return B.d7h(d)},
$S:68};(function inheritance(){var x=a.inherit
x(B.oy,C.eX)
x(B.Fv,C.J)
x(B.bo4,C.bw)})()
var y={h:C.w("x<@>"),g:C.w("c")};(function constants(){A.ye=new B.oy(0,"eq")
A.bPQ=new B.oy(1,"neq")
A.bPR=new B.oy(10,"match")
A.bPS=new B.oy(11,"imatch")
A.bPT=new B.oy(12,"isDistinct")
A.bPU=new B.oy(2,"lt")
A.bPV=new B.oy(3,"lte")
A.bPW=new B.oy(4,"gt")
A.bPX=new B.oy(5,"gte")
A.a5V=new B.oy(6,"inFilter")
A.bPY=new B.oy(7,"like")
A.bPZ=new B.oy(8,"ilike")
A.bQ_=new B.oy(9,"isFilter")})()};
(a=>{a["a+rBi6Zuq1A4nwgm8J7dAT/KKlk="]=a.current})($__dart_deferred_initializers__);