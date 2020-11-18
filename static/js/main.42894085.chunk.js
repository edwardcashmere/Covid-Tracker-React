(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{204:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(72),o=t.n(c),l=Object(r.createContext)(),d=Object(r.createContext)(),s=t(222),i=t(223),u=t(226),m=t(224),p=t(19),v=t.n(p),f=t(6),E=t.n(f),h=t(20),b=t.n(h),y=function(){var e=Object(r.useContext)(l),a=Object(r.useContext)(d),t=e.fetchData,c=e.confirmed,o=e.deaths,p=e.recovered,f=e.lastupdate,h=a.Cconfirmed,y=a.Crecovered,C=a.Cdeaths,g=a.ClastUpdate;return Object(r.useEffect)((function(){t()}),[]),n.a.createElement("div",{className:E.a.container},n.a.createElement(s.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(i.a,{variant:"h3",component:"h2",gutterBottom:!0,className:E.a.heading},"Global Covid Data"),n.a.createElement(s.a,{item:!0,xs:12,md:3,component:u.a,className:b()(E.a.card,E.a.infected)},n.a.createElement(m.a,null,n.a.createElement(i.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(i.a,{variant:"h5"},n.a.createElement(v.a,{start:0,end:c,duration:2.5,separator:","})),n.a.createElement(i.a,{color:"textSecondary"},new Date(f).toDateString()),n.a.createElement(i.a,{variant:"body2"},"Number of active cases"))),n.a.createElement(s.a,{item:!0,xs:12,md:3,component:u.a,className:b()(E.a.card,E.a.recovered)},n.a.createElement(m.a,null,n.a.createElement(i.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(i.a,{variant:"h5"},n.a.createElement(v.a,{start:0,end:p,duration:2.5,separator:","})),n.a.createElement(i.a,{color:"textSecondary"},new Date(f).toDateString()),n.a.createElement(i.a,{variant:"body2"},"Number of recoveries from covid 19"))),n.a.createElement(s.a,{item:!0,xs:12,md:3,component:u.a,className:b()(E.a.card,E.a.deaths)},n.a.createElement(m.a,null,n.a.createElement(i.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(i.a,{variant:"h5"},n.a.createElement(v.a,{start:0,end:o,duration:2.5,separator:","})),n.a.createElement(i.a,{color:"textSecondary"},new Date(f).toDateString()),n.a.createElement(i.a,{variant:"body2"},"Number of deaths caused by covid19"))),n.a.createElement(i.a,{variant:"h3",component:"h2",gutterBottom:!0,className:E.a.heading},"Country Covid Data"),n.a.createElement(s.a,{item:!0,xs:12,md:3,component:u.a,className:b()(E.a.card,E.a.infected)},n.a.createElement(m.a,null,n.a.createElement(i.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(i.a,{variant:"h5"},n.a.createElement(v.a,{start:0,end:h,duration:2.5,separator:","})),n.a.createElement(i.a,{color:"textSecondary"},new Date(g).toDateString()),n.a.createElement(i.a,{variant:"body2"},"Number of deaths caused by covid19"))),n.a.createElement(s.a,{item:!0,xs:12,md:3,component:u.a,className:b()(E.a.card,E.a.recovered)},n.a.createElement(m.a,null,n.a.createElement(i.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(i.a,{variant:"h5"},n.a.createElement(v.a,{start:0,end:y,duration:2.5,separator:","})),n.a.createElement(i.a,{color:"textSecondary"},new Date(g).toDateString()),n.a.createElement(i.a,{variant:"body2"},"Number of deaths caused by covid19"))),n.a.createElement(s.a,{item:!0,xs:12,md:3,component:u.a,className:b()(E.a.card,E.a.deaths)},n.a.createElement(m.a,null,n.a.createElement(i.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(i.a,{variant:"h5"},n.a.createElement(v.a,{start:0,end:C,duration:2.5,separator:","})),n.a.createElement(i.a,{color:"textSecondary"},new Date(g).toDateString()),n.a.createElement(i.a,{variant:"body2"},"Number of deaths caused by covid19")))))},C=t(11),g=Object(r.createContext)(),O=t(44),_=t.n(O),x=t(45),j=function(){var e=Object(r.useContext)(g),a=Object(r.useContext)(d),t=e.dailyData,c=e.confirmed,o=e.recovered,l=e.deaths,s=a.Cconfirmed,i=a.Crecovered,u=a.Cdeaths;Object(r.useEffect)((function(){t()}),[]);var m=function(e){for(var a=[],t=0,r=Object.entries(e);t<r.length;t++){var n=Object(C.a)(r[t],2),c=(n[0],n[1]);a.push(c)}return a},p=null!==c||null!==o||null!==l?n.a.createElement(x.Line,{className:_.a.chart,options:{title:{display:!0,text:"Global Trend ",fontSize:"50"}},data:{labels:function(e){for(var a=[],t=0,r=Object.entries(e);t<r.length;t++){var n=Object(C.a)(r[t],2),c=n[0];n[1];a.push(c)}return a}(c).map((function(e){return e})),datasets:[{data:m(c).map((function(e){return e})),label:"infected",borderColor:"#3333ff",fill:!0},{data:m(o).map((function(e){return e})),label:"recovered",borderColor:"green",fill:!0},{data:m(l).map((function(e){return e})),label:"deaths",borderColor:"red",fill:!0}]}}):n.a.createElement("h4",null,"Loading..."),v=n.a.createElement(x.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[s,i,u]}]},options:{legend:{display:!1},title:{display:!0,text:"Country Statistics Latest",fontSize:"50"}}});return n.a.createElement("div",{className:_.a.container},p,v)},D=t(227),N=t(225),S=t(77),T=t.n(S),R=function(){var e=Object(r.useState)("Angola"),a=Object(C.a)(e,2),t=a[0],c=a[1],o=Object(r.useContext)(d),l=o.getCountries,s=o.countries,i=o.getCountryData;Object(r.useEffect)((function(){l(),t&&i(t)}),[t]);return n.a.createElement(D.a,{className:T.a.formControl},n.a.createElement(N.a,{defaultValue:s&&s[0],onChange:function(e){c(e.target.value)}},s&&s.map((function(e,a){return n.a.createElement("option",{key:a,value:e.name},e.name)}))))},w=t(46),A=t.n(w),k=t(12),B=t.n(k),G=t(17),U=t(8),L=function(e,a){switch(a.type){case"GET_GLOBAL_DATA":return Object(U.a)(Object(U.a)({},e),{},{confirmed:a.payload.confirmed.value,recovered:a.payload.recovered.value,deaths:a.payload.deaths.value,lastupdate:a.payload.lastUpdate});case"FETCH_ERROR":return Object(U.a)(Object(U.a)({},e),{},{error:a.payload});default:return e}},I=t(18),F=t.n(I),Y=function(e){var a={confirmed:0,recovered:0,deaths:0,lastupdate:new Date},t=Object(r.useReducer)(L,a),c=Object(C.a)(t,2),o=c[0],d=c[1],s=function(){var e=Object(G.a)(B.a.mark((function e(){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("https://covid19.mathdro.id/api");case 3:a=e.sent,d({type:"GET_GLOBAL_DATA",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d({type:"FETCH_ERROR",payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(l.Provider,{value:{confirmed:o.confirmed,recovered:o.recovered,deaths:o.deaths,lastupdate:o.lastupdate,fetchData:s}},e.children)},H=function(e,a){switch(a.type){case"GET_DAILY_DATA":return Object(U.a)(Object(U.a)({},e),{},{confirmed:a.payload.cases,recovered:a.payload.recovered,deaths:a.payload.deaths});case"FETCH_ERROR":return Object(U.a)(Object(U.a)({},e),{},{error:a.payload});default:return e}},M=function(e){var a=Object(r.useReducer)(H,{confirmed:null,recovered:null,deaths:null}),t=Object(C.a)(a,2),c=t[0],o=t[1],l=function(){var e=Object(G.a)(B.a.mark((function e(){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("".concat("https://disease.sh/v3/covid-19/historical/all?lastdays=70"));case 3:a=e.sent,o({type:"GET_DAILY_DATA",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"FETCH_ERROR",payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(g.Provider,{value:{confirmed:c.confirmed,recovered:c.recovered,deaths:c.deaths,dailyData:l}},e.children)},P=function(e,a){switch(a.type){case"GET_COUNTRIES":return Object(U.a)(Object(U.a)({},e),{},{countries:a.payload.countries});case"GET_COUNTRY_DATA":return Object(U.a)(Object(U.a)({},e),{},{Cconfirmed:a.payload.confirmed.value,Crecovered:a.payload.recovered.value,Cdeaths:a.payload.deaths.value,ClastUpdate:a.payload.lastUpdate});default:return e}},z=function(e){var a=Object(r.useReducer)(P,{countries:null,Cconfirmed:0,Crecovered:0,Cdeaths:0,ClastUpdate:0}),t=Object(C.a)(a,2),c=t[0],o=t[1],l="https://covid19.mathdro.id/api",s=function(){var e=Object(G.a)(B.a.mark((function e(){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("".concat(l,"/countries"));case 3:a=e.sent,o({type:"GET_COUNTRIES",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(G.a)(B.a.mark((function e(a){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("".concat(l,"/countries/").concat(a));case 3:t=e.sent,o({type:"GET_COUNTRY_DATA",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement(d.Provider,{value:{countries:c.countries,Cconfirmed:c.Cconfirmed,Crecovered:c.Crecovered,Cdeaths:c.Cdeaths,ClastUpdate:c.ClastUpdate,getCountries:s,getCountryData:i}},e.children)},J=t(78),X=t.n(J);var q=function(){return n.a.createElement(Y,null,n.a.createElement(z,null,n.a.createElement(M,null,n.a.createElement("div",{className:A.a.container},n.a.createElement("img",{className:A.a.image,src:X.a,alt:"Covid-19"}),n.a.createElement(y,null),n.a.createElement(R,null),n.a.createElement(j,null)))))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root"))},44:function(e,a,t){e.exports={container:"Charts_container__rnzyX"}},46:function(e,a,t){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},6:function(e,a,t){e.exports={container:"Cards_container__2XqFC",card:"Cards_card__1ak5A",infected:"Cards_infected__bZ078",recovered:"Cards_recovered__1wTBM",deaths:"Cards_deaths__1YvrA",heading:"Cards_heading__3_ind"}},77:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__4LMvE"}},78:function(e,a,t){e.exports=t.p+"static/media/covid.d7265326.png"},81:function(e,a,t){e.exports=t(204)}},[[81,1,2]]]);
//# sourceMappingURL=main.42894085.chunk.js.map