((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,E,C={
As(d,e,f){return C.dfu(d,e,f)},
dfu(d,e,f){var x=0,w=A.n(y.c),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$As=A.j(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:j=null
u=4
o=$.Z().b
o===$&&A.b()
x=7
return A.d(o.S("payments").aP(0,"id, type, status, amount, partner_id, bookings(total_amount), partner_profiles(business_name)").a0("id",f).em(),$async$As)
case 7:j=a0
u=2
x=6
break
case 4:u=3
i=t.pop()
x=6
break
case 3:x=2
break
case 6:if(d.e==null){x=1
break}if(j==null){A.av(d).b5("/bookings",null,y.a)
x=1
break}if(!J.o(J.h(j,"status"),"pending")){e.aw($.lO())
d.T(y.b).f.ah(B.bNt)
x=1
break}s=0
u=9
o=y.e.a(J.h(j,"bookings"))
o=A.b9(o==null?null:J.h(o,"total_amount"))
m=o==null?null:o
r=m==null?A.e0(J.h(j,"amount")):m
q=A.P(J.h(j,"partner_id"))
o=y.f
x=q==null?12:14
break
case 12:x=15
return A.d(e.a2(0,$.Az().ghr(),o),$async$As)
case 15:x=13
break
case 14:x=16
return A.d(e.a2(0,$.N5().$1(q).ghr(),o),$async$As)
case 16:case 13:p=a0
s=p.oP(r)
u=2
x=11
break
case 9:u=8
h=t.pop()
x=11
break
case 8:x=2
break
case 11:if(d.e==null){x=1
break}o=y.e.a(J.h(j,"partner_profiles"))
l=A.P(o==null?null:J.h(o,"business_name"))
if(l==null)l="Parceiro"
o=A.a1(J.h(j,"type"))
k=E.iQ(A.e0(J.h(j,"amount")),s)
x=17
return A.d(A.av(d).b5("/pay",new A.yK(f,l,o,k,null,!1,null,null,null,null,null),y.a),$async$As)
case 17:e.aw($.lO())
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$As,w)}},B
J=c[1]
A=c[0]
D=c[2]
E=c[165]
C=a.updateHolder(c[124],C)
B=c[452]
var z=a.updateTypes([])
var y={f:A.v("H<fb>"),b:A.v("dD"),e:A.v("a2<@,@>?"),a:A.v("F?"),c:A.v("~")};(function constants(){B.bZj=new A.J("Este pagamento j\xe1 est\xe1 feito.",null,null,null,null,null,null,null,null,null,null)
B.bNt=new A.cc(B.bZj,null,null,null,null,null,null,null,null,null,null,null,null,D.a0,!1,null,null,null,D.C,null)})()};
(a=>{a["xTLgvdDTRcxGyVy9B+uI9ZJpbuc="]=a.current})($__dart_deferred_initializers__);