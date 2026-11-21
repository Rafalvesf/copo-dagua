((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
cWM(d){var x,w,v,u=J.a5(d),t=y.u.a(u.h(d,"address")),s=t==null?null:J.hR(t,y.w,y.b)
if(s==null)s=B.fK
x=new A.ds([s.h(0,"road"),s.h(0,"house_number")],y.s).ah(0," ")
t=A.L(s.h(0,"postcode"))
if(t==null)t=""
w=s.h(0,"city")
if(w==null)w=s.h(0,"town")
if(w==null)w=s.h(0,"village")
if(w==null)w=s.h(0,"municipality")
w=A.a2(w==null?"":w)
v=s.h(0,"county")
if(v==null)v=s.h(0,"state_district")
if(v==null)v=s.h(0,"state")
return new E.jH(x,t,w,A.a2(v==null?"":v),A.f4(A.q(u.h(d,"lat"))),A.f4(A.q(u.h(d,"lon"))))},
aiP(d){var x=0,w=A.n(y.r),v,u,t,s,r,q,p,o
var $async$aiP=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(B.f.D(d).length<3){v=D.wL
x=1
break}x=3
return A.d(A.aQL(A.agD("https","nominatim.openstreetmap.org","/search",A.Q(["format","jsonv2","q",d,"addressdetails","1","countrycodes","pt","limit","6","accept-language","pt"],y.w,y.b)),null),$async$aiP)
case 3:u=f
if(u.b!==200){v=D.wL
x=1
break}t=J.by(y.i.a(B.bo.jQ(0,A.j6(A.j4(u.e)).bE(0,u.w),null)),y.y)
s=A.a([],y.D)
for(r=A.u(t),q=new A.ap(t,t.gA(t),r.i("ap<T.E>")),r=r.i("T.E");q.t();){p=q.d
if(p==null)p=r.a(p)
o=A.L(J.h(p,"display_name"))
if(o==null)o=""
s.push(new A.af(o,C.cWM(p)))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aiP,w)}},D
J=c[1]
A=c[0]
B=c[2]
E=c[154]
C=a.updateHolder(c[121],C)
D=c[360]
var z=a.updateTypes([])
var y={D:A.v("r<+(c,jH)>"),r:A.v("t<+(c,jH)>"),i:A.v("t<@>"),y:A.v("a3<c,@>"),w:A.v("c"),s:A.v("ds<c>"),b:A.v("@"),u:A.v("a3<@,@>?")};(function constants(){var x=a.makeConstList
D.wL=x([],y.D)})()};
(a=>{a["CEhqJAT1j6yQP23v1TOAVTuZar0="]=a.current})($__dart_deferred_initializers__);