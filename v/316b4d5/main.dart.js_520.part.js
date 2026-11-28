((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,M,N,O,P,E,Q,R,F,S,G,I,T,H,U,B={cHf:function cHf(){},cHb:function cHb(){},cHc:function cHc(){},cHd:function cHd(){},cHe:function cHe(){},
dJT(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v)u.push(new B.DF(x[v]))
return new B.b4v(d.b,u)},
DF:function DF(d){this.a=d},
b4v:function b4v(d,e){this.a=d
this.b=e},
b4w:function b4w(){},
cZR(d){var x="category",w="due_date",v=J.a6(d),u=A.a0(v.h(d,"id")),t=A.a0(v.h(d,"wedding_id")),s=A.a0(v.h(d,"title")),r=B.dG4(B.deL(A.y(v.h(d,x)))),q=B.deL(A.y(v.h(d,x))),p=A.dt(v.h(d,"amount")),o=v.h(d,w)==null?null:A.d9(A.a0(v.h(d,w)))
v=A.dS(v.h(d,"paid"))
return new G.i6(u,t,s,r,q,p,o,v===!0)},
deL(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dG4(d){var x
A:{if("venue"===d){x=E.xW
break A}if("catering"===d){x=E.xS
break A}if("photography"===d){x=E.xT
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xU
break A}if("flowers_decor"===d){x=E.xV
break A}x=null
break A}return x},
drw(){return new B.DP()},
zT:function zT(d,e){this.a=d
this.b=e},
b69:function b69(){},
b6a:function b6a(){},
DP:function DP(){this.b=this.x=null},
b66:function b66(){},
b67:function b67(d,e){this.a=d
this.b=e},
b68:function b68(d){this.a=d},
Cy(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.alj(),$async$Cy)
case 3:u=$.Q()
t=u.b
t===$&&A.b()
x=4
return A.d(t.R("events").al(0,"partner_name_1, partner_name_2").V("id",d).cd(),$async$Cy)
case 4:s=f
x=5
return A.d(u.b.R("bookings").al(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("wedding_id",d).cK(0,"event_date",!1),$async$Cy)
case 5:r=f
u=A.a([],y.s)
for(t=J.an(r);t.q();)u.push(A.a0(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.Q().b
t===$&&A.b()
x=9
return A.d(t.R("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").dE("booking_id",u).tv(0,"created_at"),$async$Cy)
case 9:q=f
case 7:u=$.Q()
t=u.b
t===$&&A.b()
x=10
return A.d(t.R("expenses").al(0,"title, category, amount, due_date, paid").V("wedding_id",d).tv(0,"due_date"),$async$Cy)
case 10:p=f
x=11
return A.d(u.b.R("budget_categories").al(0,"name, amount").V("wedding_id",d).tv(0,"position"),$async$Cy)
case 11:o=f
x=12
return A.d(u.b.R("budgets").al(0,"total").V("wedding_id",d).cd(),$async$Cy)
case 12:n=f
m=F.cZC(F.cE6(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.an(p);t.q();){l=t.gE(t)
k=J.a6(l)
j=k.h(l,"title")
j=J.cy(j==null?"":j)
i=k.h(l,"category")
i=J.cy(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.f3(A.p(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.d_(A.p(g))
g=g==null?null:g.dH()}u.push(new B.Mw(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.an(o);l.q();){k=l.gE(l)
j=J.a6(k)
i=j.h(k,"name")
i=J.cy(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.f3(A.p(k))
if(k==null)k=0}t.push(new B.a8e(i,k))}l=n==null?null:F.d_a(J.i(n,"total"))
v=new F.lU(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cy,w)},
Mw:function Mw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8e:function a8e(d,e){this.a=d
this.b=e},
doR(){return new B.D8(null)},
aUP(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aUP=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.aa(f,0)
x=3
return A.d(A.hf(!0,new B.cDv(e,new A.aI(new A.bH(u,C.aG,C.az),$.ab())),d,y.i),$async$aUP)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUP,w)},
alc(d,e,f,g){return B.dFS(d,e,f,g)},
dFS(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$alc=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aUP(d,"Teto para "+f,g),$async$alc)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CJ().gb1(),y.x).OA(f,r),$async$alc)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a4(H.HZ)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$alc,w)},
dcL(d){var x=A.U(d,y._)
C.e.cv(x,new B.cDF())
return x},
dde(d){var x=C.f.aN(C.j.k(A.aw(d)),2,"0"),w=C.f.aN(C.j.k(A.aq(d)),2,"0"),v=A.aD(d)===A.aD(new A.aa(Date.now(),0,!1))?"":"/"+A.aD(d)
return x+"/"+w+v},
cZ_(d){var x,w,v,u
if(d===C.k.hB(d))x=C.k.aa(d,0)
else{w=C.k.aa(d,2)
x=A.aY(w,".",",")}v=x.split(",")
u=A.CF(v[0],A.aU("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bIw(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
acc:function acc(d,e){this.a=d
this.b=e},
D8:function D8(d){this.a=d},
acd:function acd(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bLI:function bLI(d){this.a=d},
bLJ:function bLJ(d){this.a=d},
bM_:function bM_(d){this.a=d},
bLZ:function bLZ(){},
bLE:function bLE(){},
bLG:function bLG(){},
bLH:function bLH(){},
bLF:function bLF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLO:function bLO(){},
bLP:function bLP(d){this.a=d},
bLY:function bLY(d){this.a=d},
bLQ:function bLQ(){},
bLR:function bLR(){},
bLS:function bLS(d,e){this.a=d
this.b=e},
bLT:function bLT(d){this.a=d},
bLN:function bLN(d){this.a=d},
bLU:function bLU(d){this.a=d},
bLM:function bLM(d){this.a=d},
bLV:function bLV(d){this.a=d},
bLL:function bLL(d){this.a=d},
bLW:function bLW(d){this.a=d},
bLK:function bLK(d){this.a=d},
bLX:function bLX(d){this.a=d},
cDv:function cDv(d,e){this.a=d
this.b=e},
cDt:function cDt(d){this.a=d},
cDu:function cDu(d,e){this.a=d
this.b=e},
cDF:function cDF(){},
aQr:function aQr(d,e,f){this.c=d
this.d=e
this.a=f},
aEq:function aEq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEr:function aEr(d,e){this.e=d
this.a=e},
bO9:function bO9(){},
bOb:function bOb(d,e){this.a=d
this.b=e},
bOc:function bOc(d){this.a=d},
bOa:function bOa(d,e,f){this.a=d
this.b=e
this.c=f},
aDY:function aDY(d,e){this.c=d
this.a=e},
bL3:function bL3(d){this.a=d},
bL2:function bL2(d){this.a=d},
aH4:function aH4(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bXZ:function bXZ(d,e){this.a=d
this.b=e},
bXV:function bXV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXW:function bXW(d){this.a=d},
bXX:function bXX(d,e){this.a=d
this.b=e},
bXY:function bXY(d,e){this.a=d
this.b=e},
XY:function XY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aD3:function aD3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
O1:function O1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abS:function abS(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bIJ:function bIJ(d){this.a=d},
bII:function bII(){},
bIK:function bIK(d){this.a=d},
bIH:function bIH(){},
bIw:function bIw(){},
bIx:function bIx(d){this.a=d},
bIG:function bIG(){},
bIC:function bIC(d){this.a=d},
bIB:function bIB(d,e){this.a=d
this.b=e},
bID:function bID(d){this.a=d},
bIA:function bIA(d){this.a=d},
bIE:function bIE(d){this.a=d},
bIz:function bIz(d){this.a=d},
bIF:function bIF(d,e){this.a=d
this.b=e},
bIy:function bIy(d,e){this.a=d
this.b=e},
XB:function XB(d,e){this.e=d
this.a=e},
bOd:function bOd(d){this.a=d},
bOe:function bOe(d){this.a=d},
bOf:function bOf(){},
bOg:function bOg(){},
bOh:function bOh(d){this.a=d},
bOi:function bOi(d,e,f){this.a=d
this.b=e
this.c=f},
bOj:function bOj(d,e){this.a=d
this.b=e},
aiy:function aiy(d,e,f){this.c=d
this.d=e
this.a=f},
aD8:function aD8(d,e,f){this.e=d
this.f=e
this.a=f},
bJF:function bJF(){},
bJL:function bJL(d){this.a=d},
bJI:function bJI(){},
bJH:function bJH(d){this.a=d},
bJy:function bJy(d){this.a=d},
bJG:function bJG(d,e,f){this.a=d
this.b=e
this.c=f},
bJJ:function bJJ(d){this.a=d},
bJw:function bJw(d){this.a=d},
bJx:function bJx(){},
bJK:function bJK(d,e){this.a=d
this.b=e},
bJD:function bJD(d){this.a=d},
bJE:function bJE(d){this.a=d},
bJz:function bJz(){},
bJA:function bJA(d){this.a=d},
bJB:function bJB(d){this.a=d},
bJC:function bJC(d,e){this.a=d
this.b=e},
ao0:function ao0(d,e){this.c=d
this.a=e},
aZt:function aZt(d){this.a=d},
btd(d,e){return d},
a80:function a80(d,e,f,g,h){var _=this
_.T=d
_.aB=e
_.U$=f
_.dy=g
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=h
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
atu:function atu(d,e){this.c=d
this.a=e},
dhU(d){var x
switch(d){case E.xW:x=D.bCW
break
case E.xS:x=D.byb
break
case E.xT:x=D.bBI
break
case E.xU:x=D.bBb
break
case E.xV:x=D.bzG
break
default:x=C.a8
break}return x}},D,K
J=c[1]
A=c[0]
C=c[2]
L=c[214]
M=c[203]
N=c[183]
O=c[217]
P=c[219]
E=c[220]
Q=c[169]
R=c[216]
F=c[134]
S=c[163]
G=c[77]
I=c[215]
T=c[218]
H=c[213]
U=c[78]
B=a.updateHolder(c[53],B)
D=c[212]
K=c[72]
B.DF.prototype={
gar(d){return this.a.a}}
B.b4v.prototype={
gq3(){return C.e.cQ(this.b,0,new B.b4w())},
gaBW(){var x=this.a
return x===0?0:C.k.ah(this.gq3()/x,0,1)}}
B.zT.prototype={
gbzO(){var x=this.b,w=A.a8(x).i("a7<1>")
x=A.U(new A.a7(x,new B.b69(),w),w.i("z.E"))
return x},
gbA8(d){var x=this.b,w=A.a8(x).i("a7<1>")
x=A.U(new A.a7(x,new B.b6a(),w),w.i("z.E"))
return x},
ax3(d,e){var x=e==null?this.a:e
return new B.zT(x,d==null?this.b:d)},
im(d){return this.ax3(null,d)},
awM(d){return this.ax3(d,null)}}
B.DP.prototype={
d0(){var x=y.T,w=this.x=A.eS(this).G(A.cA($.cp(),new B.b66(),y.v,x),x)
if(w!=null)A.jK(new B.b67(this,w),y.H)
return D.azX},
bY(d,e){return this.bxe(0,e)},
bxe(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sZ(0,v.gZ(0).im(!0))
u=$.Q().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.R("expenses").cu(0).V("wedding_id",e).cK(0,"created_at",!0),$async$bY)
case 2:v.sZ(0,new t.zT(s,r.dm(g,B.dKK(),y._).bx(0)))
return A.l(null,w)}})
return A.m($async$bY,w)},
Vt(d){return this.bn9(d)},
bn9(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vt=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.Q().b
r===$&&A.b()
r=r.R("expenses")
u=A.F(y.N,y.X)
u.j(0,"wedding_id",d.b)
u.j(0,"title",d.c)
t=d.e
if(t==null){t=d.d
t=t==null?null:t.b}u.j(0,"category",t)
u.j(0,"amount",d.f)
t=d.r
u.j(0,"due_date",t==null?null:C.e.gJ(t.cP().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.dc(0,u).cu(0).e9(0),$async$Vt)
case 2:s=f
r=v.gZ(0)
u=A.U(v.gZ(0).b,y._)
u.push(B.cZR(s))
v.sZ(0,r.awM(u))
return A.l(null,w)}})
return A.m($async$Vt,w)},
Ox(d){return this.bCH(d)},
bCH(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Ox=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.lb(v.gZ(0).b,new B.b68(d))
m=$.Q().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.R("expenses").bg(0,A.R(["paid",!n.w,"updated_at",new A.aa(Date.now(),0,!1).cP()],u,u)).V("id",d).cu(0).e9(0),$async$Ox)
case 2:t=l.cZR(f)
u=v.gZ(0)
m=A.a([],y.r)
for(s=v.gZ(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.I)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sZ(0,u.awM(m))
return A.l(null,w)}})
return A.m($async$Ox,w)}}
B.Mw.prototype={}
B.a8e.prototype={
gar(d){return this.a}}
B.acc.prototype={
I(){return"_BudgetFilter."+this.b}}
B.D8.prototype={
P(){return new B.acd(D.Ja)}}
B.acd.prototype={
TD(d){return this.bcZ(d)},
bcZ(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TD=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bLI(u))
x=1
break}u.p(new B.bLJ(u))
t=u.gS()
s=$.cp()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gb1(),y.Z).al(0,d),$async$TD)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$TD,w)},
ad(){this.ao()
A.jK(new B.bM_(this),y.H)},
Q8(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Q8=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.amy()
m=y.h
l=o.a0(0,n.gb1(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CJ(),y.b).b
s=t==null?null:t.b
r=C.e.cQ(o.a0(0,n,y.g).b,0,new B.bLE())
t=o.a0(0,$.cp(),y.v).b
q=t==null?null:t.gcw()
t=u.c
t.toString
x=3
return A.d(A.bR(null,new B.bLF(q,s,new B.bLG(),r),!1,t,!0,!0,null,y.B),$async$Q8)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gb1(),m)
n=p.a
m=p.b
t=p.c
o.Vt(new G.i6("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Q8,w)},
t(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.G($.CJ(),y.b),a3=a1.G($.I3(),y.d),a4=a1.G($.amy(),y.g),a5=a2.b,a6=a5==null?e:B.dJT(a5,a3.b)
a5=A.iP(a1.G($.iy(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.j0
a5=y.T
w=a1.G(A.cA($.cp(),new B.bLO(),y.v,a5),a5)
if(f.y){a1=f.gapt()
return A.cO(e,C.cS,A.nO(C.eZ,40,A.a([C.fC,D.aHo,K.cWq(a1,e),new B.aD8(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.dP(x,new B.bLP(w))
a1=a1.G($.uF(),y.l)
u=a1.gv(a1)
t=new B.bLY(u==null?C.fi:u)
a1=y._
a5=A.U(a4.gbzO(),a1)
for(s=v.a,r=J.cb(s),q=r.gW(s),p=v.b,o=v.$ti.i("fE<1>"),n=new A.fE(q,p,o);n.q();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new G.i6("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbA8(0),a1)
for(s=r.gW(s),o=new A.fE(s,p,o),p=y.r;o.q();){r=s.gE(s)
n=A.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new G.i6("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new G.i6("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.dcL(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.dcL(q)
break
default:a1=e}h=C.e.cQ(q,0,new B.bLQ())
s=a6==null
if(s)g=D.bzf
else{r=a6.b
p=A.a8(r).i("a7<1>")
g=A.U(new A.a7(r,new B.bLR(),p),p.i("z.E"))}if(s)a1=D.bYe
else{s=f.gaRD()
r=y.p
p=A.a([new A.pv(A.a([new A.qM(s,"Nova despesa",e)],r),e),D.aHu,K.cWq(f.gapt(),w),new B.aQr(a6,new B.bLS(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aL(a6.gq3(),!1)
n=a5.length
m=n===1?d:a0
l=A.aL(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.c1("N\xfameros",e,A.a([new A.E1(A.a([new A.ld("Gasto",o,""+n+" "+m,e),new A.ld("Por pagar",l,""+k+" "+j,e)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new N.mf(A.a([new A.eq("Todos",l===D.Ja,n+m,new B.bLT(f),e),new A.eq("Pendentes",l===D.abS,m,new B.bLU(f),e),new A.eq("Pagos",l===D.abR,n,new B.bLV(f),e)],y.F),4,!0,e),C.ap],r))}o.push(new B.aH4(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.c1("Pagamentos",e,o,16,e))
a1=A.a([new A.fM(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aEq(g,f.x,new B.bLW(f),e))
p.push(new A.c1("Categorias",e,a1,16,e))
p.push(new A.c1("Exportar",e,A.a([new F.DQ("Gastos e parceiros",!1,new B.bLX(f),e)],r),16,e))
a1=A.nO(C.eZ,40,p,e,!0,!1)}return A.cO(e,C.cS,a1,!0,e)},
Is(d){return this.aYE(d)},
aYE(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Is=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aUP(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$Is)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a0(0,$.CJ().gb1(),y.x).a_b(r),$async$Is)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a4(H.HZ)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Is,w)}}
B.aQr.prototype={
t(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gq3()>0?"Gastos "+A.aL(t.gq3(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vm(new A.h6("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hH,0,"por definir","\u2014")}x=C.k.aP(t.gaBW()*100)
w=s-t.gq3()<0?"Acima do teto":"Ainda tens"
v=A.aL(Math.abs(s-t.gq3()),!1)
s=A.aL(s,!1)
u=t.gaBW()
return A.aO(A.vm(H.a1Q,"Gastos "+A.aL(t.gq3(),!1)+" \xb7 "+x+"% do teto",w,C.hH,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aEq.prototype={
t(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.dq(s,0,A.eu(5,"count",y.S),A.a8(s).c).bx(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.I)(r),++w)p.push(new B.aEr(r[w],null))
q=A.a([A.eQ(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.h6(u,v.e,!0,null))}return A.x(q,C.F,C.h,C.l)}}
B.aEr.prototype={
b8(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.G(A.cA($.cp(),new B.bO9(),y.v,m),m)
if(l==null)x=C.r2
else{m=e.G($.d1M().$1(l),y.y)
m=m.gv(m)
x=m==null?C.r2:m}m=A.a([],y.s)
for(w=B.dhU(o.c),v=w.length,u=J.a6(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bOb(this,d)
if(w)return A.k2(!1,!1,p,v,A.aL(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.mc("P\xf4r teto",new B.bOa(this,d,e),!0,p))
w=A.aL(o.b,!1)
u=A.aL(n,!1)
s=y.p
q=A.a([A.aG(new A.a4A(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aE,new B.ao0(m,p)],s))
return A.k2(!1,!1,p,v,w+" de "+u,o.a,A.x(q,C.dH,C.h,C.I))}}
B.aDY.prototype={
t(d){var x,w,v=null,u=$.ay,t=$.fc.c3(0.55),s=A.W(18),r=A.W(12),q=this.c,p=q.e
r=A.hX(r,A.aG(p==null?A.ku(A.b4(C.iS,u,v,v,v),C.t,!0):A.op(p,144,new B.bL2(u),!1,C.bx,A.wA(),!1,v,v,v),48,48),C.bh)
p=A.h(q.b,1,C.a1,v,v,D.c4a,v,v)
x=A.b4(C.ib,u,v,v,14)
w=q.d
q=w>0?q.gPG()+" \xb7 "+A.aL(w,!1):q.gPG()
w=y.p
return new A.S(C.e5,A.aO(A.w(v,A.N(A.a([r,C.al,A.a5(A.x(A.a([p,C.je,A.N(A.a([x,C.dM,new A.dg(1,C.be,A.h(q,1,C.a1,v,v,A.aH(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bj,v,v,!0,v,v,v,v,v,v,v,v),v,v),v)],w),C.u,C.h,C.l,0,v)],w),C.G,C.h,C.l),1),A.b4(C.h7,u,v,v,v)],w),C.u,C.h,C.l,0,v),C.r,v,v,new A.O(t,v,v,s,v,v,C.y),v,v,v,C.ej,v,v,v),new B.bL3(d),v),v)}}
B.aH4.prototype={
b8(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.JT(A.a([new A.h6("+ Nova despesa",this.f,!0,j)],y.p),C.eR,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aBj
x=new B.bXZ(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.I)(i),++t){s=i[t]
r=s.a
q=C.f.d_(r,":pay:")
r=C.f.b2(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gJ(r.split(" \xb7 "))
n=A.aL(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.dde(m)
v.push(new A.td(new A.cg(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bXV(d,e,s,q),A.HY(m)===C.f8,j))
continue}p=r?new B.bXW(d):new B.bXX(x,s)
v.push(new B.XY(s,p,r||s.w?j:new B.bXY(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.XY&&v[k-1] instanceof B.XY)u.push(C.iI)
u.push(v[k])
C.e.n(i,u)}i.push(D.aB_)
return A.x(i,C.F,C.h,C.l)}}
B.XY.prototype={
t(d){var x=this.c,w=x.r,v=A.a([A.aL(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.dde(w))
v=C.e.a1(v," \xb7 ")
if(u)u=D.aH9
else{u=this.e
u=u!=null?new A.mc("Marcar pago",u,!0,null):D.aHg}return A.k2(!1,!1,null,this.d,v,x.c,u)}}
B.aD3.prototype={}
B.O1.prototype={
P(){var x=$.ab()
return new B.abS(new A.aI(C.aq,x),new A.aI(C.aq,x))}}
B.abS.prototype={
ad(){var x=this
x.ao()
x.d.am(0,new B.bIJ(x))
x.e.am(0,new B.bIK(x))},
m(){var x=this.d,w=$.ab()
x.a_$=w
x.X$=0
x=this.e
x.a_$=w
x.X$=0
this.a6()},
gahI(){var x=C.f.C(this.e.a.a)
x=A.aY(x," ","")
return A.f3(A.aY(x,",","."))},
aSQ(){var x,w,v,u,t=this,s=t.gahI()
t.p(new B.bIx(t))
x=C.f.C(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.ap(w,!1)
v=t.w
u=v?null:t.f
w.au(new B.aD3(x,s,u,t.r,v))},
asi(d,e,f,g,h){var x=null,w=h?C.fT:x,v=y.p,u=A.a5(A.x(A.a([A.h(d,x,x,x,x,C.aa,x,x),C.aS,A.h(e,x,x,x,x,C.L,x,x)],v),C.G,C.h,C.l),1),t=f?C.a4:x,s=f?x:A.bE(L.kw,1.5),r=f?C.qg:x
return A.bh(x,!0,x,A.d5(C.bu,A.w(x,A.N(A.a([u,A.w(x,r,C.r,x,x,new A.O(t,x,s,x,x,x,C.ar),x,24,x,x,x,x,24)],v),C.u,C.h,C.l,0,x),C.r,x,C.cJ,new A.O(x,x,w,x,x,x,C.y),x,x,x,C.h_,x,x,x),C.a_,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.b_),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bjt(d,e,f,g){return this.asi(d,e,f,g,!0)},
t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.gahI()
if(i==null)i=0
x=k.a
w=x.d
v=w==null?j:w-x.e-i
x=k.d
u=C.f.C(x.a.a).length!==0&&i>0
w=new B.bIG()
t=y.w
s=A.aT(d,j,t).w
r=y.p
q=A.a([D.c8w],r)
q.push(A.h(k.a.c,j,j,j,j,C.L,j,j))
q=A.N(A.a([A.a5(A.x(q,C.G,C.h,C.l),1),C.ag],r),C.u,C.h,C.l,0,j)
p=A.W(22)
o=A.bE(C.z,1.5)
n=A.a([D.c9z,A.N(A.a([new B.atu(A.cr(j,C.a8,!1,j,!0,C.x,j,A.ct(),k.e,j,j,j,j,j,2,D.aFe,C.a_,!0,j,!0,j,!1,j,C.aD,j,j,j,j,C.hi,j,j,j,1,j,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,C.am,j,j,j,j,j,j,j,j,j,j,j,D.aaB,!0,C.dN,j,C.b3,j,j,j,j),j),C.bg,D.c8Y],r),C.ew,C.bT,C.l,0,C.aM)],r)
if(v!=null){m=v>=0
l=m?"Ainda tens "+B.cZ_(v)+" no teto":"Passa o teto em "+B.cZ_(-v)
n.push(A.h(l,j,j,j,j,A.aH(j,j,m?C.V:C.bX,j,j,j,j,j,j,j,j,13,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j))}if(k.x&&i<=0)n.push(D.c8b)
p=A.w(j,A.x(n,C.u,C.h,C.l),C.r,j,j,new A.O(C.t,j,o,p,j,j,C.y),j,j,j,C.bt,j,j,j)
o=A.h("O QU\xca",j,j,j,j,C.aH,j,j)
n=A.W(26)
m=k.x&&C.f.C(x.a.a).length===0?A.bE(C.bX,1.5):j
n=A.a([p,C.a0,new A.S(C.e5,o,j),A.w(C.bi,A.cr(j,C.a8,!1,j,!0,C.x,j,A.ct(),x,j,j,j,j,j,2,D.aES,C.a_,!0,j,!0,j,!1,j,C.aD,j,j,j,j,j,j,j,j,1,j,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,C.am,j,j,j,j,j,j,j,j,j,j,j,C.eH,!0,C.ay,j,C.fP,j,j,j,j),C.r,j,j,new A.O(C.ac,j,m,n,j,j,C.y),j,52,j,C.fg,j,j,j)],r)
if(k.x&&C.f.C(x.a.a).length===0)n.push(D.bL8)
n.push(C.a0)
n.push(new U.a1J(k.r,new B.bIC(k),j))
n.push(C.a0)
n.push(new A.S(C.e5,A.h("ESTADO",j,j,j,j,C.aH,j,j),j))
x=A.W(22)
p=k.w
o=!p
o=A.a([k.bjt("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bID(k)),k.asi("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bIE(k),o)],r)
if(!k.w){p=k.f
if(p==null)w="Opcional"
else{p=A.p(w.$1(A.aw(p)))
m=k.f
m.toString
m=A.p(w.$1(A.aq(m)))
w=k.f
w.toString
w=p+"/"+m+"/"+A.aD(w)}o.push(A.bh(j,!0,j,A.d5(C.bu,A.aG(A.N(A.a([D.azG,A.h(w,j,j,j,j,C.ce,j,j),C.dM,C.jY],r),C.u,C.h,C.l,0,j),56,j),C.a_,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new B.bIF(k,d),j,j,j,j,j,j,!1,C.b_),!1,j,j,j,!1,j,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,C.a5,j))}n.push(A.w(j,A.x(o,C.u,C.h,C.l),C.r,j,j,new A.O(C.ac,j,j,x,j,j,C.y),j,j,j,C.cN,j,j,j))
n.push(C.a0)
n.push(D.ce1)
x=A.dU(A.x(n,C.F,C.h,C.l),C.x,j,C.ek,j,C.av)
t=A.aT(d,C.b5,t).w
w=A.cd(u?C.a4:C.a4.c3(0.35),j,j,C.t,j,j,C.a9,j,j,C.eI)
return new A.S(new A.a3(0,0,0,s.f.d),A.x(A.a([new A.S(C.jN,q,j),new A.dg(1,C.be,x,j),new A.S(new A.a3(20,16,20,20+t.r.d),A.aG(new A.am(A.bD(A.h(u?"Guardar \xb7 "+B.cZ_(i):"Guardar",j,j,j,j,j,j,j),k.gaSP(),w),j),52,j),j)],r),C.F,C.h,C.I),j)}}
B.XB.prototype={
b8(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.G($.CJ(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.f9(new A.a7(j,new B.bOd(l),A.a8(j).i("a7<1>")))
x=j}if(x==null)x=l.e
j=e.G($.amy(),y.g).b
w=A.a8(j).i("a7<1>")
v=A.U(new A.a7(j,new B.bOe(l),w),w.i("z.E"))
C.e.cv(v,new B.bOf())
j=y.T
u=e.G(A.cA($.cp(),new B.bOg(),y.v,j),j)
t=B.dhU(l.e.c)
if(u==null)s=I.Ft
else{j=e.G($.aWK().$1(u),y.k)
j=j.gv(j)
if(j==null)j=I.Ft
j=J.dP(j,new B.bOh(t))
s=A.U(j,j.$ti.i("z.E"))}j=A.aT(d,k,y.w).w
w=A.bG(A.w(k,k,C.r,k,k,new A.O(C.bF,k,k,A.W(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.az(d).ok.r,k,k)
q=A.a5(new B.aiy("Gasto",A.aL(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a0,r,C.aB,A.N(A.a([q,C.af,A.a5(A.aO(new B.aiy("Teto \xb7 tocar para mudar",p===0?"Definir":A.aL(p,!1),k),new B.bOi(d,e,x),k),1)],o),C.u,C.h,C.l,0,k)],o)
if(s.length!==0){w=A.a([C.br,A.h("Contratado na app",k,k,k,k,A.az(d).ok.w,k,k),C.M],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.I)(s),++n)w.push(new B.aDY(s[n],k))
C.e.n(p,w)}p.push(C.br)
p.push(A.h("Despesas",k,k,k,k,A.az(d).ok.w,k,k))
p.push(C.M)
w=v.length
if(w===0)p.push(D.bKx)
else for(n=0;n<v.length;v.length===w||(0,A.I)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.hS,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aN(C.j.k(A.aw(q)),2,"0")+"/"+C.f.aN(C.j.k(A.aq(q)),2,"0")+"/"+A.aD(q),k,k,k,k,k,k,k)
p.push(A.jq(!1,C.Y,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.N(A.a([A.h(A.aL(m.f,!1),k,k,k,k,D.c6k,k,k),C.ab,new Q.Dj(m.w,new B.bOj(e,m),k,$.ay,k,k,!1,k,k,k,k,!1,k,k,!1,k,R.Jc,k)],o),C.u,C.h,C.I,0,k),k))}return A.bF(!0,new A.e7(new A.aP(0,1/0,0,j.a.b*0.8),A.d3(p,k,M.D1,k,k,!1,!0),k),k,C.Y,!0)}}
B.aiy.prototype={
t(d){var x=null,w=A.W(16)
return A.w(x,A.x(A.a([A.h(this.c,x,x,x,x,C.bk,x,x),C.ap,A.h(this.d,x,x,x,x,O.aan,x,x)],y.p),C.G,C.h,C.l),C.r,x,x,new A.O(C.ac,x,x,w,x,x,C.y),x,x,x,C.cM,x,x,x)}}
B.aD8.prototype={
b8(d,e){var x,w=y.t,v=e.G(A.cA($.cp(),new B.bJF(),y.v,w),w),u=e.G($.d1L(),y.o)
w=e.G($.uF(),y.l)
x=w.gv(w)
return A.hA(u,new B.bJG(this,new B.bJL(x==null?C.fi:x),v),new B.bJH(e),new B.bJI(),!1,!0,!1)}}
B.ao0.prototype={
t(d){var x,w,v,u,t,s,r,q,p=null,o=$.ay,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v]
t=$.fc
s=new A.b7(999,999)
r=new A.b9(o.c3(0.25),1,C.ah,-1)
q=A.b4(C.ib,o,p,p,13)
t=A.w(p,A.N(A.a([q,C.rM,new A.dg(1,C.be,A.h(u,1,C.a1,p,p,new A.P(!0,o,p,p,p,p,14,C.d0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p),p),A.b4(C.h7,o,p,p,16)],n),C.u,C.h,C.I,0,p),C.r,p,D.afA,new A.O(t,p,new A.dT(r,r,r,r),new A.cJ(s,s,s,s),p,p,C.y),p,p,p,D.aue,p,p,p)
m.push(new A.k9(new A.oJ(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.iF(t,new B.aZt(d),p,p),p))}return A.em(C.bl,m,C.r,C.bq,6,6)}}
B.a80.prototype={
saKp(d){return},
saKo(d){return},
cb(d){return this.aY(C.c8,d,this.gc7())},
c0(d){var x=this.U$
if(x==null)return 0
return B.btd(x.aY(C.c8,d,x.gc7()),this.T)},
ca(d){var x,w=this
if(w.U$==null)return 0
if(!isFinite(d))d=w.aY(C.c8,1/0,w.gc7())
x=w.U$
return B.btd(x.aY(C.dC,d,x.gd1()),w.aB)},
c9(d){var x,w=this
if(w.U$==null)return 0
if(!isFinite(d))d=w.aY(C.c8,1/0,w.gc7())
x=w.U$
return B.btd(x.aY(C.cZ,d,x.gcO()),w.aB)},
I0(d,e){var x=e.a>=e.b?null:B.btd(d.aY(C.c8,e.d,d.gc7()),this.T)
return e.GJ(null,x)},
wT(d,e){var x=this.U$
return x==null?new A.af(A.ai(0,d.a,d.b),A.ai(0,d.c,d.d)):e.$2(x,this.I0(x,d))},
dK(d){return this.wT(d,A.ly())},
eN(d,e){var x=this.U$
return x==null?null:x.hj(this.I0(x,d),e)},
cm(){this.fy=this.wT(y.f.a(A.ah.prototype.gaM.call(this)),A.uz())}}
B.atu.prototype={
br(d){var x=null,w=new B.a80(x,x,x,new A.c8(),A.bc(y.j))
w.bq()
w.sbN(x)
return w},
bD(d,e){e.saKp(null)
e.saKo(null)}}
var z=a.updateTypes(["C(i6)","T(T)","T(T,i6)","v(i6,i6)","T(T,DF)","zT()","D<~>(c?)","D<~>()","O1(M)","C(DF)","D<lU>()","XB(M)","~(i6)","~()","C(nx)","C(rL)","i6(a4<c,@>)","DP()"])
B.cHf.prototype={
$1(d){return this.aFh(d)},
aFh(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:A.u_(a1)
u=y.t
t=a1.G(A.cA($.cp(),new B.cHb(),y.v,u),u)
u=J.a6(t)
if(u.gY(t)){v=D.bzg
x=1
break}s=A.a([],y.s)
for(r=u.gW(t);r.q();)s.push(r.gE(r).a)
r=$.Q()
q=r.b
q===$&&A.b()
p=y.G
o=q.R("budgets").al(0,"wedding_id, total").dE("wedding_id",s).b6(new B.cHc(),p)
n=r.b.R("budget_categories").al(0,"wedding_id, amount").dE("wedding_id",s).b6(new B.cHd(),p)
m=r.b.R("expenses").al(0,"wedding_id, amount, paid").dE("wedding_id",s).b6(new B.cHe(),p)
p=y.N
s=y.i
r=A.F(p,s)
d=q=y.P
a0=J
x=3
return A.d(o,$async$$1)
case 3:d,l=a0.bi(a3,q),k=A.u(l),l=new A.aj(l,l.gA(l),k.i("aj<V.E>")),k=k.i("V.E")
case 4:if(!l.q()){x=5
break}j=l.d
if(j==null)j=k.a(j)
i=J.a6(j)
r.j(0,A.a0(i.h(j,"wedding_id")),A.dt(i.h(j,"total")))
x=4
break
case 5:h=A.F(p,s)
d=J
x=6
return A.d(n,$async$$1)
case 6:l=d.bi(a3,q),k=A.u(l),l=new A.aj(l,l.gA(l),k.i("aj<V.E>")),k=k.i("V.E")
case 7:if(!l.q()){x=8
break}j=l.d
if(j==null)j=k.a(j)
i=J.a6(j)
g=A.a0(i.h(j,"wedding_id"))
f=h.h(0,g)
if(f==null)f=0
j=A.aF(i.h(j,"amount"))
if(j==null)j=null
h.j(0,g,f+(j==null?0:j))
x=7
break
case 8:e=A.F(p,s)
d=J
x=9
return A.d(m,$async$$1)
case 9:s=d.bi(a3,q),q=A.u(s),s=new A.aj(s,s.gA(s),q.i("aj<V.E>")),q=q.i("V.E")
case 10:if(!s.q()){x=11
break}p=s.d
if(p==null)p=q.a(p)
l=J.a6(p)
if(J.o(l.h(p,"paid"),!0)){x=10
break}g=A.a0(l.h(p,"wedding_id"))
k=e.h(0,g)
if(k==null)k=0
p=A.aF(l.h(p,"amount"))
if(p==null)p=null
e.j(0,g,k+(p==null?0:p))
x=10
break
case 11:s=A.a([],y.n)
for(u=u.gW(t);u.q();){q=u.gE(u)
p=q.a
l=r.h(0,p)
q=l==null?q.as:l
if(q==null)q=0
l=h.h(0,p)
if(l==null)l=0
k=e.h(0,p)
s.push(new A.aNF([p,l,q,k==null?0:k]))}v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1295}
B.cHb.prototype={
$1(d){return d.c},
$S:154}
B.cHc.prototype={
$1(d){return d},
$S:42}
B.cHd.prototype={
$1(d){return d},
$S:42}
B.cHe.prototype={
$1(d){return d},
$S:42}
B.b4w.prototype={
$2(d,e){return d+e.a.b},
$S:z+4}
B.b69.prototype={
$1(d){return d.w},
$S:z+0}
B.b6a.prototype={
$1(d){return!d.w},
$S:z+0}
B.b66.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.b67.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.b68.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bLI.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bLJ.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bM_.prototype={
$0(){return this.a.gS().a0(0,$.CJ().gb1(),y.x).Zr(0).ei(new B.bLZ())},
$S:1}
B.bLZ.prototype={
$1(d){},
$S:13}
B.bLE.prototype={
$2(d,e){return d+e.f},
$S:z+2}
B.bLG.prototype={
$1(d){return A.CF(C.k.aa(d,0),A.aU("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bLH(),null)+" \u20ac"},
$S:106}
B.bLH.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:47}
B.bLF.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.p(w.c.$1(u)))
v=C.e.a1(v," \xb7 ")
u=x&&u>0?u:null
return new B.O1(v,u,w.d,null)},
$S:z+8}
B.bLO.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bLP.prototype={
$1(d){return d.x!==C.e3&&d.b===this.a},
$S:51}
B.bLY.prototype={
$2(d,e){return A.jg(d,this.a.k7(e))},
$1(d){return this.$2(d,null)},
$S:1298}
B.bLQ.prototype={
$2(d,e){return d+e.f},
$S:z+2}
B.bLR.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+9}
B.bLS.prototype={
$0(){return this.a.Is(this.b.a)},
$S:0}
B.bLT.prototype={
$0(){var x=this.a
return x.p(new B.bLN(x))},
$S:0}
B.bLN.prototype={
$0(){return this.a.w=D.Ja},
$S:0}
B.bLU.prototype={
$0(){var x=this.a
return x.p(new B.bLM(x))},
$S:0}
B.bLM.prototype={
$0(){return this.a.w=D.abS},
$S:0}
B.bLV.prototype={
$0(){var x=this.a
return x.p(new B.bLL(x))},
$S:0}
B.bLL.prototype={
$0(){return this.a.w=D.abR},
$S:0}
B.bLW.prototype={
$0(){var x=this.a
return x.p(new B.bLK(x))},
$S:0}
B.bLK.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bLX.prototype={
$0(){return B.Cy(this.a.gS().a0(0,$.cp(),y.v).b.a)},
$S:z+10}
B.cDv.prototype={
$1(d){var x=null,w=this.b
return new A.f0(A.h(this.a,x,x,x,x,x,x,x),A.cr(x,C.a8,!0,x,!0,C.x,x,A.ct(),w,x,x,x,x,x,2,D.aFs,C.a_,!0,x,!0,x,!1,x,C.aD,x,x,x,x,C.hi,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.am,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.ay,x,C.b3,x,x,x,x),A.a([new A.am(A.cR(C.d3,x,x,new B.cDt(d),x,x),x),new A.am(A.bD(C.dy,new B.cDu(d,w),x),x)],y.p),x)},
$S:19}
B.cDt.prototype={
$0(){return A.ap(this.a,!1).by()},
$S:0}
B.cDu.prototype={
$0(){var x=A.ap(this.a,!1),w=C.f.C(this.b.a.a)
w=A.aY(w," ","")
return x.au(A.f3(A.aY(w,",",".")))},
$S:0}
B.cDF.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bw(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bw(2100,1,1,0,0):x)},
$S:z+3}
B.bO9.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bOb.prototype={
$0(){return A.bR(null,new B.bOc(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bOc.prototype={
$1(d){return new B.XB(this.a.e.a,null)},
$S:z+11}
B.bOa.prototype={
$0(){return B.alc(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bL3.prototype={
$0(){var x=this.a
A.ap(x,!1).by()
A.ae(x).ag("/bookings",null,y.X)},
$S:0}
B.bL2.prototype={
$3(d,e,f){return A.ku(A.b4(C.iS,this.a,null,null,null),C.t,!0)},
$S:86}
B.bXZ.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.amy().gb1(),y.h).Ox(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a4(A.c7(v,v,v,v,v,C.x,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v),v,C.U,v,v,v,v,v,v,v,v,v,v))},
$S:z+12}
B.bXV.prototype={
$0(){var x=this
return A.rF(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null,null)},
$S:0}
B.bXW.prototype={
$0(){return A.ae(this.a).ag("/bookings",null,y.X)},
$S:0}
B.bXX.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bXY.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bIJ.prototype={
$0(){return this.a.p(new B.bII())},
$S:0}
B.bII.prototype={
$0(){},
$S:0}
B.bIK.prototype={
$0(){return this.a.p(new B.bIH())},
$S:0}
B.bIH.prototype={
$0(){},
$S:0}
B.bIw.prototype={
$1(d){return A.p(d.h(0,1))+" "},
$S:47}
B.bIx.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bIG.prototype={
$1(d){return C.f.aN(C.j.k(d),2,"0")},
$S:30}
B.bIC.prototype={
$1(d){var x=this.a
return x.p(new B.bIB(x,d))},
$S:151}
B.bIB.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bID.prototype={
$0(){var x=this.a
return x.p(new B.bIA(x))},
$S:0}
B.bIA.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bIE.prototype={
$0(){var x=this.a
return x.p(new B.bIz(x))},
$S:0}
B.bIz.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bIF.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.aa(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(S.aVU(v.b,A.bw(A.aD(t)-1,1,1,0,0),r,A.bw(A.aD(t)+5,12,31,0,0),"Data do pagamento"),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bIy(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bIy.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bOd.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+14}
B.bOe.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bOf.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bw(2100,1,1,0,0)
x=e.r
return w.bA(0,x==null?A.bw(2100,1,1,0,0):x)},
$S:z+3}
B.bOg.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:38}
B.bOh.prototype={
$1(d){return C.e.u(this.a,d.a)},
$S:z+15}
B.bOi.prototype={
$0(){var x=this.c
return B.alc(this.a,this.b,x.a,x.d)},
$S:0}
B.bOj.prototype={
$1(d){return this.a.a0(0,$.amy().gb1(),y.h).Ox(this.b.a)},
$S:137}
B.bJF.prototype={
$1(d){return d.c},
$S:154}
B.bJL.prototype={
$2(d,e){return A.jg(d,this.a.k7(e))},
$S:43}
B.bJI.prototype={
$0(){return D.bLa},
$S:84}
B.bJH.prototype={
$2(d,e){return A.JT(A.a([new A.h6("Tentar outra vez",new B.bJy(this.a),!1,null)],y.p),C.eR,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1299}
B.bJy.prototype={
$0(){return this.a.ak($.d1L())},
$S:0}
B.bJG.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bJJ(g),e=new B.bJK(g,this.b),d=J.cb(a4),a0=d.cQ(a4,0,new B.bJz()),a1=d.cQ(a4,0,new B.bJA(f)),a2=d.cQ(a4,0,new B.bJB(e)),a3=y.N
a3=A.F(a3,a3)
for(x=J.an(this.c);x.q();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C_(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aL(a1,!1)
w=a0>0
v=w?"de "+A.aL(a0,!1):"gastos"
u=w?C.k.ah(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aP(a1/a0*100)+"% dos tetos":""
x=A.vm(i,""+t+" "+r+w,"Todos os eventos",C.hH,u,v,x)
v=y.p
u=A.a([new A.E1(A.a([new A.ld("Gasto",A.aL(a1,!1),h,i),new A.ld("Por pagar",A.aL(a2,!1),h,i)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eo(a4,0,y.A),r=J.an(t.a),q=t.b,t=new A.bX(r,q,A.u(t).i("bX<1>")),p=y.s;t.q();){o={}
n=t.c
n=n>=0?new A.X(q+n,r.gE(r)):A.al(A.c0())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iI)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a1,i,i,C.aa,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aL(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aL(j[3]+e.$1(j[0]),!1))}n=A.x(A.a([n,C.aS,A.h(C.e.a1(k," \xb7 "),i,i,i,i,C.L,i,i)],v),C.G,C.h,C.l)
k=o.a.a
l.push(new A.iF(A.w(i,A.N(A.a([new A.bK(1,C.au,n,i),C.af,A.h(A.aL(k[1]+f.$1(k[0]),!1),i,i,i,i,C.aa,i,i),C.bg,C.jY],v),C.u,C.h,C.l,0,i),C.r,C.at,C.cJ,i,i,i,i,C.co,i,i,i),new B.bJC(o,g),i,i))
C.e.n(w,l)}return A.x(A.a([x,new A.c1("N\xfameros",i,u,16,i),new A.c1("Por evento \xb7 "+d,i,w,16,i),D.aB1],v),C.F,C.h,C.l)},
$S:1300}
B.bJJ.prototype={
$1(d){return J.dP(this.a.e,new B.bJw(d)).cQ(0,0,new B.bJx())},
$S:167}
B.bJw.prototype={
$1(d){return d.b===this.a&&d.x!==C.e3},
$S:51}
B.bJx.prototype={
$2(d,e){return d+e.w},
$S:478}
B.bJK.prototype={
$1(d){return J.dP(this.a.e,new B.bJD(d)).cQ(0,0,new B.bJE(this.b))},
$S:167}
B.bJD.prototype={
$1(d){return d.b===this.a&&d.x!==C.e3},
$S:51}
B.bJE.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:478}
B.bJz.prototype={
$2(d,e){return d+e.a[2]},
$S:260}
B.bJA.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:260}
B.bJB.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:260}
B.bJC.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aZt.prototype={
$0(){return A.ae(this.a).ag("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dKK","cZR",16)
w(B,"dKJ","drw",17)
v(B.DP.prototype,"giH","d0",5)
var t
u(t=B.acd.prototype,"gapt","TD",6)
v(t,"gaRD","Q8",7)
v(B.abS.prototype,"gaSP","aSQ",13)
u(t=B.a80.prototype,"gcS","cb",1)
u(t,"gc7","c0",1)
u(t,"gd1","ca",1)
u(t,"gcO","c9",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bv,[B.cHf,B.cHb,B.cHc,B.cHd,B.cHe,B.b69,B.b6a,B.b66,B.b68,B.bLZ,B.bLG,B.bLH,B.bLF,B.bLO,B.bLP,B.bLY,B.bLR,B.cDv,B.bO9,B.bOc,B.bL2,B.bXZ,B.bIw,B.bIG,B.bIC,B.bOd,B.bOe,B.bOg,B.bOh,B.bOj,B.bJF,B.bJG,B.bJJ,B.bJw,B.bJK,B.bJD])
x(A.L,[B.DF,B.b4v,B.zT,B.Mw,B.a8e,B.aD3])
x(A.cM,[B.b4w,B.bLE,B.bLQ,B.cDF,B.bOf,B.bJL,B.bJH,B.bJx,B.bJE,B.bJz,B.bJA,B.bJB])
w(B.DP,A.fq)
x(A.bO,[B.b67,B.bLI,B.bLJ,B.bM_,B.bLS,B.bLT,B.bLN,B.bLU,B.bLM,B.bLV,B.bLL,B.bLW,B.bLK,B.bLX,B.cDt,B.cDu,B.bOb,B.bOa,B.bL3,B.bXV,B.bXW,B.bXX,B.bXY,B.bIJ,B.bII,B.bIK,B.bIH,B.bIx,B.bIB,B.bID,B.bIA,B.bIE,B.bIz,B.bIF,B.bIy,B.bOi,B.bJI,B.bJy,B.bJC,B.aZt])
w(B.acc,A.fj)
w(B.D8,A.dB)
w(B.acd,A.dx)
x(A.H,[B.aQr,B.aEq,B.aDY,B.XY,B.aiy,B.ao0])
x(A.ev,[B.aEr,B.aH4,B.XB,B.aD8])
w(B.O1,A.G)
w(B.abS,A.Z)
w(B.a80,A.Vj)
w(B.atu,A.ch)})()
A.bq(b.typeUniverse,JSON.parse('{"DP":{"fq":["zT"]},"O1":{"G":[],"e":[],"f":[]},"XB":{"G":[],"e":[],"f":[]},"D8":{"G":[],"e":[],"f":[]},"acd":{"Z":["D8"]},"aQr":{"H":[],"e":[],"f":[]},"aEq":{"H":[],"e":[],"f":[]},"aEr":{"G":[],"e":[],"f":[]},"aDY":{"H":[],"e":[],"f":[]},"aH4":{"G":[],"e":[],"f":[]},"XY":{"H":[],"e":[],"f":[]},"abS":{"Z":["O1"]},"aiy":{"H":[],"e":[],"f":[]},"aD8":{"G":[],"e":[],"f":[]},"ao0":{"H":[],"e":[],"f":[]},"a80":{"ag":[],"ce":["ag"],"ah":[],"f":[],"bt":[]},"atu":{"ch":[],"bs":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{l:x("ax<f8>"),k:x("ax<t<rL>>"),u:x("ax<t<fK>>"),o:x("ax<t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>>"),y:x("ax<a4<c,t<c>>>"),f:x("aP"),x:x("zy"),b:x("uT"),d:x("rQ"),j:x("k1"),Z:x("nD"),v:x("en"),_:x("i6"),h:x("DP"),g:x("zT"),D:x("r<DF>"),r:x("r<i6>"),Q:x("r<ld>"),F:x("r<eq>"),Y:x("r<a4<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),E:x("r<a8e>"),c:x("r<Mw>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fK>"),t:x("t<f7>"),G:x("t<a4<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,T,T,T)>"),P:x("a4<c,@>"),w:x("dC"),A:x("+eventId,spentByHand,total,unpaidByHand(c,T,T,T)"),e:x("lU"),N:x("c"),B:x("aD3"),q:x("dj"),i:x("T"),z:x("@"),S:x("v"),X:x("L?"),T:x("c?"),I:x("T?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afA=new A.aP(0,1/0,32,1/0)
D.aue=new A.a3(8,5,6,5)
D.chC=new A.E("Prazo",null,C.aa,null,null,null,null,null,null,null)
D.azG=new A.bK(1,C.au,D.chC,null)
D.byX=x([],y.r)
D.azX=new B.zT(!1,D.byX)
D.aB_=new A.fM("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aB1=new A.fM("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aBj=new A.fM("Sem pagamentos nesta vista.",8,null)
D.aES=new A.dH(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.aT,null,null,C.aT,C.aT,!0,null,null,null,null)
D.aFe=new A.dH(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.aT,null,null,C.aT,C.aT,!0,null,null,null,null)
D.aFs=new A.dH(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aH9=new A.dX("Pago",C.cW,null)
D.aHg=new A.dX("Por pagar",C.hF,null)
D.aHo=new A.li("Or\xe7amento","Todos os teus eventos",null)
D.aHu=new A.li("Or\xe7amento",null,null)
D.byb=x(["catering"],y.s)
D.bzf=x([],y.D)
D.bzg=x([],y.n)
D.bzG=x(["flowers_decor"],y.s)
D.bBb=x(["music_dj","bands_musicians"],y.s)
D.bBI=x(["photography"],y.s)
D.bCW=x(["venue"],y.s)
D.aEH=new A.vh("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kG,null)
D.bKx=new A.S(C.fZ,D.aEH,null)
D.c9Y=new A.E("A despesa precisa de um t\xedtulo",null,C.l7,null,null,null,null,null,null,null)
D.bL8=new A.S(T.NK,D.c9Y,null)
D.bLa=new A.S(P.uR,C.f1,null)
D.bYe=new A.vX(!1,6,!0,null)
D.c4a=new A.P(!0,C.z,null,null,null,null,14,C.d0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6k=new A.P(!0,null,null,null,null,null,null,C.d0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaB=new A.P(!0,C.z,null,null,null,null,40,C.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8b=new A.E("Indica um valor v\xe1lido",null,C.l7,null,null,null,null,null,null,null)
D.c8w=new A.E("Nova despesa",null,C.b4,null,null,null,null,null,null,null)
D.c8Y=new A.E("\u20ac",null,D.aaB,null,null,null,null,null,null,null)
D.c9z=new A.E("VALOR",null,C.aH,null,null,null,null,null,null,null)
D.ce1=new A.E("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.bK,null,null,null,null,null,null,null)
D.Ja=new B.acc(0,"all")
D.abR=new B.acc(1,"paid")
D.abS=new B.acc(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYc","d1L",()=>C.bM.$1$1(new B.cHf(),y.m))
x($,"dZ2","amy",()=>A.n1(B.dKJ(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["dzhdtTf1d39GAOR5F35qbtzR3b4="]=a.current})($__dart_deferred_initializers__);