((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
cLC(d){var x,w,v,u=J.a3(d),t=y.u.a(u.h(d,"address")),s=t==null?null:J.ih(t,y.w,y.b)
if(s==null)s=B.fE
x=new A.dc([s.h(0,"road"),s.h(0,"house_number")],y.s).aq(0," ")
t=A.P(s.h(0,"postcode"))
if(t==null)t=""
w=s.h(0,"city")
if(w==null)w=s.h(0,"town")
if(w==null)w=s.h(0,"village")
if(w==null)w=s.h(0,"municipality")
w=A.a1(w==null?"":w)
v=s.h(0,"county")
if(v==null)v=s.h(0,"state_district")
if(v==null)v=s.h(0,"state")
return new E.jn(x,t,w,A.a1(v==null?"":v),A.fE(A.u(u.h(d,"lat"))),A.fE(A.u(u.h(d,"lon"))))},
afR(d){var x=0,w=A.n(y.r),v,u,t,s,r,q,p,o
var $async$afR=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(B.f.L(d).length<3){v=D.w0
x=1
break}x=3
return A.d(A.aMM(A.adJ("https","nominatim.openstreetmap.org","/search",A.R(["format","jsonv2","q",d,"addressdetails","1","countrycodes","pt","limit","6","accept-language","pt"],y.w,y.b)),null),$async$afR)
case 3:u=f
if(u.b!==200){v=D.w0
x=1
break}t=J.bA(y.i.a(B.bt.jB(0,A.iR(A.iO(u.e)).bD(0,u.w),null)),y.y)
s=A.a([],y.D)
for(r=A.r(t),q=new A.ap(t,t.gv(t),r.i("ap<a8.E>")),r=r.i("a8.E");q.p();){p=q.d
if(p==null)p=r.a(p)
o=A.P(J.h(p,"display_name"))
if(o==null)o=""
s.push(new A.ag(o,C.cLC(p)))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$afR,w)}},D
J=c[1]
A=c[0]
B=c[2]
E=c[148]
C=a.updateHolder(c[115],C)
D=c[356]
var z=a.updateTypes([])
var y={D:A.v("q<+(c,jn)>"),r:A.v("t<+(c,jn)>"),i:A.v("t<@>"),y:A.v("a2<c,@>"),w:A.v("c"),s:A.v("dc<c>"),b:A.v("@"),u:A.v("a2<@,@>?")};(function constants(){var x=a.makeConstList
D.w0=x([],y.D)})()};
(a=>{a["WMOGGiVVUe+0CZqhcRt0j+tnXqA="]=a.current})($__dart_deferred_initializers__);