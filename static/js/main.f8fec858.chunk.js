(this["webpackJsonpnew-coder-insight"]=this["webpackJsonpnew-coder-insight"]||[]).push([[0],{73:function(e,t,n){e.exports=n(83)},78:function(e,t,n){},79:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),c=(n(78),n(8)),l=(n(79),n(53)),u=n.n(l),s=n(18),f=function(e){return 0===e.length?0:+(e.reduce((function(e,t){var n=t.ExpectedEarning;return e+parseFloat(n)}),0)/e.length).toFixed(2)},p=function(e,t){return function(n){return""!==n[e]&&t(n[e])}},m=function(e){return function(t){return e.reduce((function(e,n){return e&&n(t)}),!0)}},d=n(109),h=n(111),g=n(105),F=n(110),b=n(112),v=n(6),E=Object(v.a)({root:{overflowY:"scroll"}})(d.a),y=function(e){var t=e.filterFuncDetails,n=e.checks,a=e.disabled,o=e.handleCheck,i=e.andBool,l=e.handleBoolChange;return r.a.createElement(d.a,{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"14px"},r.a.createElement(b.a,{row:!0,value:i,onChange:l},r.a.createElement(g.a,{value:"true",control:r.a.createElement(F.a,null),label:"And",disabled:a}),r.a.createElement(g.a,{value:"false",control:r.a.createElement(F.a,null),label:"Or",disabled:a})),r.a.createElement(E,{display:"flex",flexDirection:"column",maxHeight:"550px"},t.map((function(e,t){var i=Object(c.a)(e,1)[0];return r.a.createElement(g.a,{control:r.a.createElement(h.a,{checked:n[t],onChange:o(t)}),disabled:a,label:i,key:t})}))))},D=n(114),H=n(85),S=n(10),C=n(55);var w=function(e){var t=e.data,n=e.handleClick,o=e.selectedInd,i=e.hasLowest,l=Object(a.useRef)(),u=Object(a.useRef)(),s=Object(a.useRef)(),f=Object(a.useRef)(),p=Object(a.useRef)(),m=Object(a.useRef)();return Object(a.useEffect)((function(){S.e(l.current).attr("width",650).attr("height",400).style("border","1px solid black").style("border-radius","8px"),S.e(s.current).style("opacity",0)}),[]),Object(a.useEffect)((function(){!function(){var e=S.e(l.current),a=S.d().domain([0,S.c(t.map((function(e){return Object(c.a)(e,1)[0]})))]).range([395,40]);S.e(u.current).call(S.a().scale(a));var r=e.selectAll("rect").data(t);r.transition().duration(300).attr("fill",(function(e,t){return t===o?"#ff9100":"#9c27b0"})).attr("height",(function(e){var t=Object(c.a)(e,1)[0];return 400-a(t)})).attr("y",(function(e){var t=Object(c.a)(e,1)[0];return a(t)})),r.enter().append("rect").on("mouseover",(function(e,t){var n=Object(c.a)(e,2),a=n[0],r=n[1];S.e(s.current).style("opacity",1),S.e(f.current).text(0===t?"Average of Everyone":i&&1===t?"Lowest Non-Zero Average":"Selection ".concat(t+1)),S.e(p.current).text("Average expected earnings: $".concat(a)),S.e(m.current).text("Number who fit criteria: ".concat(r))})).on("mouseout",(function(){return S.e(s.current).style("opacity",0)})).on("mousemove",(function(){return S.e(s.current).style("left","".concat(S.b.pageX+10,"px")).style("top","".concat(S.b.pageY+10,"px"))})).on("click",(function(e,t){return n(t)})).attr("fill","#9c27b0").attr("x",(function(e,t){return 45*t+55})).attr("y",(function(){return 400})).attr("width",40).attr("height",0).transition().duration(300).attr("height",(function(e){var t=Object(c.a)(e,1)[0];return 400-a(t)})).attr("y",(function(e){var t=Object(c.a)(e,1)[0];return a(t)})),r.exit().transition().duration(300).attr("y",(function(){return 400})).attr("height",0).remove()}()}),[t,n,o,i]),r.a.createElement(d.a,null,r.a.createElement(d.a,{ref:s,position:"absolute",bgcolor:"white",padding:"4px",border:"1px solid black",borderRadius:"4px"},r.a.createElement(C.a,{ref:f}),r.a.createElement(C.a,{ref:p}),r.a.createElement(C.a,{ref:m})),r.a.createElement(C.a,{variant:"h6"},"Average Expected Earnings for Criteria (USD)"),r.a.createElement("svg",{ref:l},r.a.createElement("g",{ref:u,transform:"translate(50, 0)"})))},A=Object(v.a)({root:{margin:"4px"}})(D.a),R=function(e){var t=e.filterFuncDetails,n=e.rowData,o=e.avgData,i=e.lowestResultCombo,l=Object(a.useState)(null!==i?[t.map((function(){return!1})),i]:[t.map((function(){return!1}))]),u=Object(c.a)(l,2),p=u[0],h=u[1],g=Object(a.useState)(null!==i?["true","true"]:["true"]),F=Object(c.a)(g,2),b=F[0],v=F[1],E=Object(a.useState)(Object(s.a)(o)),D=Object(c.a)(E,2),S=D[0],R=D[1],k=Object(a.useState)(null),x=Object(c.a)(k,2),O=x[0],j=x[1],L=Object(a.useState)((function(){return t.map((function(){return!1}))})),B=Object(c.a)(L,2),N=B[0],I=B[1],M=Object(a.useState)("true"),U=Object(c.a)(M,2),W=U[0],P=U[1],T=function(e){return function(){return j(e)}},G=function(e){return function(){e===O?j(null):O>e&&j(O-1),h(p.filter((function(t,n){return e!==n}))),v(b.filter((function(t,n){return e!==n}))),R(S.filter((function(t,n){return e!==n})))}},Y=Object(a.useCallback)((function(e){return j(e)}),[]);return r.a.createElement(d.a,{display:"flex",marginTop:"20px",justifyContent:"center"},r.a.createElement(d.a,{marginRight:"24px",width:"100%",maxWidth:"400px"},r.a.createElement(d.a,{marginBottom:"16px"},p.map((function(e,t){return 0===t?r.a.createElement(A,{label:"Average of Everyone",onClick:T(t),color:t===O?"primary":"default",key:t}):null!==i&&1===t?r.a.createElement(A,{label:"Lowest Non-Zero Average",onClick:T(t),color:t===O?"primary":"default",key:t}):r.a.createElement(A,{label:"Selection ".concat(t+1),onClick:T(t),onDelete:G(t),color:t===O?"primary":"default",key:t})})),r.a.createElement(A,{label:"Current Selection",onClick:function(){return j(null)},color:null===O?"primary":"default"})),r.a.createElement(C.a,{variant:"h6"},null===O?"Edit Current Selection":0===O?"View Selection of Everyone":"View Selection ".concat(O+1)),r.a.createElement(y,{filterFuncDetails:t,checks:null!==O?p[O]:N,disabled:null!==O||13===S.length,handleCheck:function(e){return function(){return I(N.map((function(t,n){return n===e?!t:t})))}},handleBoolChange:function(e){return P(e.target.value)},andBool:null!==O?b[O]:W}),r.a.createElement(H.a,{onClick:function(){h([].concat(Object(s.a)(p),[N])),v([].concat(Object(s.a)(b),[W]));var e=t.map((function(e){var t=Object(c.a)(e,2);t[0];return t[1]})).filter((function(e,t){return N[t]})),a=n.filter("true"===W?m(e):function(e){return function(t){return e.reduce((function(e,n){return e||n(t)}),!1)}}(e));R([].concat(Object(s.a)(S),[[f(a),a.length]])),I(t.map((function(){return!1}))),j(null),P("true")},disabled:null!==O||13===S.length||N.reduce((function(e,t){return e&&!t}),!0),variant:"contained",color:"primary"},"Add Selection")),r.a.createElement(w,{data:S,handleClick:Y,selectedInd:O,hasLowest:null!==i}))},k=function(e){var t=e.rowData,n=e.allAvgData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h5"},"Bootcamp"),r.a.createElement(R,{rowData:t,avgData:[n,[47277.78,18]],lowestResultCombo:[!0,!1,!1,!0,!1,!0,!1,!0],filterFuncDetails:[["Attended Bootcamp",p("AttendedBootcamp",(function(e){return 1===parseFloat(e)}))],["Did not Attend Bootcamp",p("AttendedBootcamp",(function(e){return 0===parseFloat(e)}))],["Finished Bootcamp",p("BootcampFinish",(function(e){return 1===parseFloat(e)}))],["Did Not Finish Bootcamp",p("BootcampFinish",(function(e){return 0===parseFloat(e)}))],["Took a Loan to Attend Bootcamp",p("BootcampLoanYesNo",(function(e){return 1===parseFloat(e)}))],["Did Not Take a Loan to Attend Bootcamp",p("BootcampLoanYesNo",(function(e){return 0===parseFloat(e)}))],["Recommends Going to Bootcamp",p("BootcampRecommend",(function(e){return 1===parseFloat(e)}))],["Does Not Recommend Going to Bootcamp",p("BootcampRecommend",(function(e){return 0===parseFloat(e)}))]]}))},x=function(e){var t=e.rowData,n=e.allAvgData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h5"},"Age/Gender/Diversity"),r.a.createElement(R,{rowData:t,avgData:[n,[36873.59,17]],lowestResultCombo:[!0,!1,!1,!1,!0,!1,!1,!1,!0],filterFuncDetails:[["Age < 18",p("Age",(function(e){return parseFloat(e)<18}))],["18 <= Age < 23",p("Age",(function(e){return parseFloat(e)>=18&&parseFloat(e)<23}))],["Age <= 23 < 30",p("Age",(function(e){return parseFloat(e)>=23&&parseFloat(e)<30}))],["Age >= 30",p("Age",(function(e){return parseFloat(e)>=30}))],["Female",p("Gender",(function(e){return"female"===e}))],["Male",p("Gender",(function(e){return"male"===e}))],["Non-binary Gender",p("GenderOther",(function(e){return""!==e}))],["Ethnic Minority",p("IsEthnicMinority",(function(e){return 1===parseFloat(e)}))],["Not Ethnic Minority",p("IsEthnicMinority",(function(e){return 0===parseFloat(e)}))]]}))},O=function(e){var t=e.rowData,n=e.allAvgData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h5"},"Experience Learning/Programming"),r.a.createElement(R,{rowData:t,avgData:[n,[49422.38,753]],lowestResultCombo:[!1,!1,!0,!1,!0,!1,!1,!1],filterFuncDetails:[["Hours Spent Learning a Week < 10",p("HoursLearning",(function(e){return parseFloat(e)<10}))],["10 <= Hours Spent Learning a Week < 20",p("HoursLearning",(function(e){return parseFloat(e)>=10&&parseFloat(e)<20}))],["20 <= Hours Spent Learning a Week < 40",p("HoursLearning",(function(e){return parseFloat(e)>=20&&parseFloat(e)<40}))],["Hours Spent Learning a Week >= 40",p("HoursLearning",(function(e){return parseFloat(e)>40}))],["Months Programming < 6",p("MonthsProgramming",(function(e){return parseFloat(e)<6}))],["6 <= Months Programming < 12",p("MonthsProgramming",(function(e){return parseFloat(e)>=6&&parseFloat(e)<12}))],["12 <= Months Programming < 24",p("MonthsProgramming",(function(e){return parseFloat(e)>=12&&parseFloat(e)<24}))],["Months Programming >= 24",p("MonthsProgramming",(function(e){return parseFloat(e)>=24}))]]}))},j=function(e){var t=e.rowData,n=e.allAvgData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h5"},"Geography/Home Information"),r.a.createElement(R,{rowData:t,avgData:[n,[27907.2,5]],lowestResultCombo:[!1,!0,!1,!0,!1,!0,!0,!1,!0,!1,!1,!0],filterFuncDetails:[["US Citizen",p("CountryCitizen",(function(e){return"United States of America"===e}))],["Not US Citizen",p("CountryCitizen",(function(e){return"United States of America"!==e}))],["Lives in US",p("CountryLive",(function(e){return"United States of America"===e}))],["Doesn't Live in US",p("CountryLive",(function(e){return"United States of America"!==e}))],["Willing to Relocate",p("JobRelocateYesNo",(function(e){return 1===parseFloat(e)}))],["Not Willing to Relocate",p("JobRelocateYesNo",(function(e){return 0===parseFloat(e)}))],["Has Children",p("HasChildren",(function(e){return 1===parseFloat(e)}))],["No Children",p("HasChildren",(function(e){return 0===parseFloat(e)}))],["Has Financial Dependents",p("HasFinancialDependents",(function(e){return 1===parseFloat(e)}))],["No Financial Dependents",p("HasFinancialDependents",(function(e){return 0===parseFloat(e)}))],["Has High Speed Internet at Home",p("HasHighSpdInternet",(function(e){return 1===parseFloat(e)}))],["No High Speed Internet at Home",p("HasHighSpdInternet",(function(e){return 0===parseFloat(e)}))]]}))},L=function(e){var t=e.rowData,n=e.allAvgData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h5"},"Income/Debt"),r.a.createElement(R,{rowData:t,avgData:[n,[44234.68,722]],lowestResultCombo:[!1,!0,!1,!1,!0,!1,!1,!1],filterFuncDetails:[["Has Debt",p("HasDebt",(function(e){return 1===parseFloat(e)}))],["No Debt",p("HasDebt",(function(e){return 0===parseFloat(e)}))],["Has Student Debt",p("HasStudentDebt",(function(e){return 1===parseFloat(e)}))],["No Student Debt",p("HasStudentDebt",(function(e){return 0===parseFloat(e)}))],["2016 Income < 40,000",p("Income",(function(e){return parseFloat(e)<4e4}))],["40,000 <= 2016 Income < 60,000",p("Income",(function(e){return parseFloat(e)>=4e4&&parseFloat(e)<6e4}))],["60,000 <= 2016 Income < 100,000",p("Income",(function(e){return parseFloat(e)>=6e4&&parseFloat(e)<1e5}))],["2016 Income >= 100,000",p("Income",(function(e){return parseFloat(e)>=1e5}))]]}))},B=function(e){var t=e.rowData,n=e.allAvgData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h5"},"Resources Found Helpful"),r.a.createElement(R,{rowData:t,avgData:[n,[39114.29,35]],lowestResultCombo:[!0,!0,!0,!1,!1,!0,!0,!0,!0,!0],filterFuncDetails:[["Found CSS Tricks Helpful",p("ResourceCSS",(function(e){return 1===parseFloat(e)}))],["Found EdX Helpful",p("ResourceEdX",(function(e){return 1===parseFloat(e)}))],["Found freeCodeCamp Helpful",p("ResourceFCC",(function(e){return 1===parseFloat(e)}))],["Found HackerRank Helpful",p("ResourceHackerRank",(function(e){return 1===parseFloat(e)}))],["Found Lynda.com Helpful",p("ResourceLynda",(function(e){return 1===parseFloat(e)}))],["Found Stack Overflow Helpful",p("ResourceSO",(function(e){return 1===parseFloat(e)}))],["Found TreeHouse Helpful",p("ResourceTreehouse",(function(e){return 1===parseFloat(e)}))],["Found Udacity Helpful",p("ResourceUdacity",(function(e){return 1===parseFloat(e)}))],["Found Udemy Helpful",p("ResourceUdemy",(function(e){return 1===parseFloat(e)}))],["Found W3Schools Helpful",p("ResourceW3S",(function(e){return 1===parseFloat(e)}))]]}))},N=n(107),I=function(e){var t=e.rowData,n=e.allAvgData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h5"},"All Criteria"),r.a.createElement(R,{rowData:t,avgData:[n],lowestResultCombo:null,filterFuncDetails:[["Hours Spent Learning a Week < 10",p("HoursLearning",(function(e){return parseFloat(e)<10}))],["10 <= Hours Spent Learning a Week < 20",p("HoursLearning",(function(e){return parseFloat(e)>=10&&parseFloat(e)<20}))],["20 <= Hours Spent Learning a Week < 40",p("HoursLearning",(function(e){return parseFloat(e)>=20&&parseFloat(e)<40}))],["Hours Spent Learning a Week >= 40",p("HoursLearning",(function(e){return parseFloat(e)>40}))],["Months Programming < 6",p("MonthsProgramming",(function(e){return parseFloat(e)<6}))],["6 <= Months Programming < 12",p("MonthsProgramming",(function(e){return parseFloat(e)>=6&&parseFloat(e)<12}))],["12 <= Months Programming < 24",p("MonthsProgramming",(function(e){return parseFloat(e)>=12&&parseFloat(e)<24}))],["Months Programming >= 24",p("MonthsProgramming",(function(e){return parseFloat(e)>=24}))],["Age < 18",p("Age",(function(e){return parseFloat(e)<18}))],["18 <= Age < 23",p("Age",(function(e){return parseFloat(e)>=18&&parseFloat(e)<23}))],["Age <= 23 < 30",p("Age",(function(e){return parseFloat(e)>=23&&parseFloat(e)<30}))],["Age >= 30",p("Age",(function(e){return parseFloat(e)>=30}))],["Female",p("Gender",(function(e){return"female"===e}))],["Male",p("Gender",(function(e){return"male"===e}))],["Non-binary Gender",p("GenderOther",(function(e){return""!==e}))],["Ethnic Minority",p("IsEthnicMinority",(function(e){return 1===parseFloat(e)}))],["Not Ethnic Minority",p("IsEthnicMinority",(function(e){return 0===parseFloat(e)}))],["Has Debt",p("HasDebt",(function(e){return 1===parseFloat(e)}))],["No Debt",p("HasDebt",(function(e){return 0===parseFloat(e)}))],["Has Student Debt",p("HasStudentDebt",(function(e){return 1===parseFloat(e)}))],["No Student Debt",p("HasStudentDebt",(function(e){return 0===parseFloat(e)}))],["2016 Income < 40,000",p("Income",(function(e){return parseFloat(e)<4e4}))],["40,000 <= 2016 Income < 60,000",p("Income",(function(e){return parseFloat(e)>=4e4&&parseFloat(e)<6e4}))],["60,000 <= 2016 Income < 100,000",p("Income",(function(e){return parseFloat(e)>=6e4&&parseFloat(e)<1e5}))],["2016 Income >= 100,000",p("Income",(function(e){return parseFloat(e)>=1e5}))],["US Citizen",p("CountryCitizen",(function(e){return"United States of America"===e}))],["Not US Citizen",p("CountryCitizen",(function(e){return"United States of America"!==e}))],["Lives in US",p("CountryLive",(function(e){return"United States of America"===e}))],["Doesn't Live in US",p("CountryLive",(function(e){return"United States of America"!==e}))],["Willing to Relocate",p("JobRelocateYesNo",(function(e){return 1===parseFloat(e)}))],["Not Willing to Relocate",p("JobRelocateYesNo",(function(e){return 0===parseFloat(e)}))],["Has Children",p("HasChildren",(function(e){return 1===parseFloat(e)}))],["No Children",p("HasChildren",(function(e){return 0===parseFloat(e)}))],["Has Financial Dependents",p("HasFinancialDependents",(function(e){return 1===parseFloat(e)}))],["No Financial Dependents",p("HasFinancialDependents",(function(e){return 0===parseFloat(e)}))],["Has High Speed Internet at Home",p("HasHighSpdInternet",(function(e){return 1===parseFloat(e)}))],["No High Speed Internet at Home",p("HasHighSpdInternet",(function(e){return 0===parseFloat(e)}))],["Attended Bootcamp",p("AttendedBootcamp",(function(e){return 1===parseFloat(e)}))],["Did not Attend Bootcamp",p("AttendedBootcamp",(function(e){return 0===parseFloat(e)}))],["Finished Bootcamp",p("BootcampFinish",(function(e){return 1===parseFloat(e)}))],["Did Not Finish Bootcamp",p("BootcampFinish",(function(e){return 0===parseFloat(e)}))],["Took a Loan to Attend Bootcamp",p("BootcampLoanYesNo",(function(e){return 1===parseFloat(e)}))],["Did Not Take a Loan to Attend Bootcamp",p("BootcampLoanYesNo",(function(e){return 0===parseFloat(e)}))],["Recommends Going to Bootcamp",p("BootcampRecommend",(function(e){return 1===parseFloat(e)}))],["Does Not Recommend Going to Bootcamp",p("BootcampRecommend",(function(e){return 0===parseFloat(e)}))],["Found CSS Tricks Helpful",p("ResourceCSS",(function(e){return 1===parseFloat(e)}))],["Found EdX Helpful",p("ResourceEdX",(function(e){return 1===parseFloat(e)}))],["Found freeCodeCamp Helpful",p("ResourceFCC",(function(e){return 1===parseFloat(e)}))],["Found HackerRank Helpful",p("ResourceHackerRank",(function(e){return 1===parseFloat(e)}))],["Found Lynda.com Helpful",p("ResourceLynda",(function(e){return 1===parseFloat(e)}))],["Found Stack Overflow Helpful",p("ResourceSO",(function(e){return 1===parseFloat(e)}))],["Found TreeHouse Helpful",p("ResourceTreehouse",(function(e){return 1===parseFloat(e)}))],["Found Udacity Helpful",p("ResourceUdacity",(function(e){return 1===parseFloat(e)}))],["Found Udemy Helpful",p("ResourceUdemy",(function(e){return 1===parseFloat(e)}))],["Found W3Schools Helpful",p("ResourceW3S",(function(e){return 1===parseFloat(e)}))]]}))},M=n(106),U=Object(v.a)({root:{margin:"8px 0"}})(C.a),W=[O,x,L,j,k,B,I];var P=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!0),l=Object(c.a)(i,2),s=l[0],p=l[1],m=Object(a.useState)(null),h=Object(c.a)(m,2),g=h[0],F=h[1],b=Object(a.useState)(0),v=Object(c.a)(b,2),E=v[0],y=v[1],S=W[E];return Object(a.useEffect)((function(){fetch("with_earnings.csv").then((function(e){return e.text()})).then((function(e){var t=u.a.toObjects(e);o(t),F([f(t),t.length]),p(!1)}))}),[]),r.a.createElement(d.a,{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},!s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",maxWidth:"1200px"},r.a.createElement(d.a,{display:"flex",flexDirection:"column",textAlign:"left",maxWidth:"800px",margin:"30px auto"},r.a.createElement(U,null,"This is a freeform exploration of freeCodeCamp's"," ",r.a.createElement(M.a,{href:"https://www.freecodecamp.org/news/take-the-2017-new-coder-survey-and-help-us-build-a-massive-public-dataset-8c808cbee7eb/",target:"_blank",rel:"noopener"},"2017 New Coder Survey"),r.a.createElement("span",null,"\u2014"),' "an anonymous survey of thousands of people who started coding less than 5 years ago." The survey is open for anyone to take. All of the questions are optional.'),r.a.createElement(U,null,'We will explore how certain criteria affect a person\'s response to "About how much money do you expect to earn per year at your first developer job, in US dollars?"'),r.a.createElement(U,null,'Each selected criteria will limit the responses to only those with answers for the criteria question (all questions are optional). You can select and analyze the results from multiple criteria and choose to "and" or "or" the criteria responses.'),r.a.createElement(U,null,'Click "ADD SELECTION" to generate the response to the selection criteria. Hover over the bars in the bar chart to view a tooltip that displays the average expected earnings and the number of survey responders who fit the criteria.'),r.a.createElement(d.a,null,r.a.createElement(U,{display:"inline"},'Click either the bar in the bar chart or the "chip"'," "),r.a.createElement(D.a,{label:"chip"}),r.a.createElement(C.a,{display:"inline"}," ",'that corresponds to a selection to view the critera you selected. Click the "Current Selection" chip to go back to making a new selection. Certain selections are deletable via the "chip"'," "),r.a.createElement(D.a,{label:"chip",onDelete:function(){return null}})),r.a.createElement(U,null,'Each scene has different criteria. Navigate between scenes via the "PREV" and "NEXT" buttons to the upper right of the bar chart.'),r.a.createElement(U,null,"The first selection of every scene is the average of all responses. The second selection of every scene, except the everything scene (computation time is too long), is the selection that results in the lowest non-zero average. Have fun finding the selection with the highest average!")),r.a.createElement(d.a,{display:"flex",flexDirection:"row-reverse",paddingRight:"60px"},r.a.createElement(N.a,{variant:"contained",color:"primary"},r.a.createElement(H.a,{onClick:function(){return y(E-1)},disabled:0===E},"Prev"),r.a.createElement(H.a,{onClick:function(){return y(E+1)},disabled:E===W.length-1},"Next"))),r.a.createElement(S,{rowData:n,allAvgData:g})),r.a.createElement(d.a,{width:"100%",height:"100px",bgcolor:"#e0e0e0",marginTop:"300px"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.f8fec858.chunk.js.map