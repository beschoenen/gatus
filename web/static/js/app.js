(function(){"use strict";var e={584:function(e,t,s){s.d(t,{L:function(){return Pt}});var r=s(963),a=s(252),o=s.p+"img/logo.png";const i={class:"container container-xs relative mx-auto xl:rounded xl:border xl:shadow-xl xl:my-5 p-5 pb-12 xl:pb-5 text-left dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500",id:"global"},n={class:"mb-2"},l={class:"flex flex-wrap"},g=(0,a._)("div",{class:"w-3/4 text-left my-auto"},[(0,a._)("div",{class:"text-3xl xl:text-5xl lg:text-4xl font-light"},"Health Status")],-1),h={class:"w-1/4 flex justify-end"},c=["src"],u={key:1,src:o,alt:"Gatus",class:"object-scale-down",style:{"max-width":"100px","min-width":"50px","min-height":"50px"}};function d(e,t,s,r,o,d){const m=(0,a.up)("router-view"),p=(0,a.up)("Tooltip"),A=(0,a.up)("Social");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",i,[(0,a._)("div",n,[(0,a._)("div",l,[g,(0,a._)("div",h,[d.getLogo?((0,a.wg)(),(0,a.iD)("img",{key:0,src:d.getLogo,alt:"Gatus",class:"object-scale-down",style:{"max-width":"100px","min-width":"50px","min-height":"50px"}},null,8,c)):(0,a.kq)("",!0),d.getLogo?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("img",u))])])]),(0,a.Wm)(m,{onShowTooltip:d.showTooltip},null,8,["onShowTooltip"])]),(0,a.Wm)(p,{result:o.tooltip.result,event:o.tooltip.event},null,8,["result","event"]),(0,a.Wm)(A)],64)}var m=s.p+"img/github.png";(0,a.dD)("data-v-1cbbc992");const p={id:"social"},A=(0,a._)("a",{href:"https://github.com/TwinProduction/gatus",target:"_blank",title:"Gatus on GitHub"},[(0,a._)("img",{src:m,alt:"GitHub",width:"32",height:"auto"})],-1),v=[A];function f(e,t,s,r,o,i){return(0,a.wg)(),(0,a.iD)("div",p,v)}(0,a.Cn)();var w={name:"Social"};w.render=f,w.__scopeId="data-v-1cbbc992";var y=w,x=s(577);const T=(0,a._)("div",{class:"tooltip-title"},"Timestamp:",-1),k={id:"tooltip-timestamp"},b=(0,a._)("div",{class:"tooltip-title"},"Response time:",-1),I={id:"tooltip-response-time"},R=(0,a._)("div",{class:"tooltip-title"},"Conditions:",-1),S={id:"tooltip-conditions"},D=(0,a._)("br",null,null,-1),C={key:0,id:"tooltip-errors-container"},B=(0,a._)("div",{class:"tooltip-title"},"Errors:",-1),P={id:"tooltip-errors"},E=(0,a._)("br",null,null,-1);function H(e,t,s,r,o,i){return(0,a.wg)(),(0,a.iD)("div",{id:"tooltip",ref:"tooltip",class:(0,x.C_)(o.hidden?"invisible":""),style:(0,x.j5)("top:"+o.top+"px; left:"+o.left+"px")},[s.result?(0,a.WI)(e.$slots,"default",{key:0},(()=>[T,(0,a._)("code",k,(0,x.zw)(i.prettifyTimestamp(s.result.timestamp)),1),b,(0,a._)("code",I,(0,x.zw)((s.result.duration/1e6).toFixed(0))+"ms",1),R,(0,a._)("code",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.result.conditionResults,(t=>(0,a.WI)(e.$slots,"default",{key:t},(()=>[(0,a.Uk)((0,x.zw)(t.success?"✓":"X")+" ~ "+(0,x.zw)(t.condition),1),D])))),128))]),s.result.errors&&s.result.errors.length?((0,a.wg)(),(0,a.iD)("div",C,[B,(0,a._)("code",P,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.result.errors,(t=>(0,a.WI)(e.$slots,"default",{key:t},(()=>[(0,a.Uk)(" - "+(0,x.zw)(t),1),E])))),128))])])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)],6)}var O={name:"Services",props:{event:Event,result:Object},methods:{prettifyTimestamp(e){let t=new Date(e),s=t.getFullYear(),r=(t.getMonth()+1<10?"0":"")+(t.getMonth()+1),a=(t.getDate()<10?"0":"")+t.getDate(),o=(t.getHours()<10?"0":"")+t.getHours(),i=(t.getMinutes()<10?"0":"")+t.getMinutes(),n=(t.getSeconds()<10?"0":"")+t.getSeconds();return s+"-"+r+"-"+a+" "+o+":"+i+":"+n},htmlEntities(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},reposition(){if(this.event&&this.event.type)if("mouseenter"===this.event.type){let e=this.event.target.getBoundingClientRect().y+30,t=this.event.target.getBoundingClientRect().x,s=this.$refs.tooltip.getBoundingClientRect();t+window.scrollX+s.width+50>document.body.getBoundingClientRect().width&&(t=this.event.target.getBoundingClientRect().x-s.width+this.event.target.getBoundingClientRect().width,t<0&&(t+=-t)),e+window.scrollY+s.height+50>document.body.getBoundingClientRect().height&&e>=0&&(e=this.event.target.getBoundingClientRect().y-(s.height+10),e<0&&(e=this.event.target.getBoundingClientRect().y+30)),this.top=e,this.left=t}else"mouseleave"===this.event.type&&(this.hidden=!0)}},watch:{event:function(e){e&&e.type&&("mouseenter"===e.type?this.hidden=!1:"mouseleave"===e.type&&(this.hidden=!0))}},updated(){this.reposition()},created(){this.reposition()},data(){return{hidden:!0,top:0,left:0}}};O.render=H;var U=O,z={name:"App",components:{Social:y,Tooltip:U},methods:{showTooltip(e,t){this.tooltip={result:e,event:t}}},computed:{getLogo(){return window.config&&window.config.logo&&"{{ .Logo }}"!==window.config.logo?window.config.logo:""}},data(){return{tooltip:{}}}};z.render=d;var M=z,Q=s(119);function W(e,t,s,r,o,i){const n=(0,a.up)("Services"),l=(0,a.up)("Pagination"),g=(0,a.up)("Settings");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(n,{serviceStatuses:o.serviceStatuses,showStatusOnHover:!0,onShowTooltip:i.showTooltip,onToggleShowAverageResponseTime:i.toggleShowAverageResponseTime,showAverageResponseTime:o.showAverageResponseTime},null,8,["serviceStatuses","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"]),(0,a.Wm)(l,{onPage:i.changePage},null,8,["onPage"]),(0,a.Wm)(g,{onRefreshData:i.fetchData},null,8,["onRefreshData"])],64)}const X={id:"settings",class:"flex bg-gray-200 border-gray-300 rounded border shadow dark:text-gray-200 dark:bg-gray-800 dark:border-gray-500"},q=(0,a._)("div",{class:"text-xs text-gray-600 rounded-xl py-1 px-2 dark:text-gray-200"}," ↻ ",-1),K=["selected"],Y=["selected"],F=["selected"],G=["selected"],j=["selected"],L=["selected"],N=(0,a.Uk)("☀"),Z=(0,a.Uk)("🌙");function J(e,t,s,r,o,i){return(0,a.wg)(),(0,a.iD)("div",X,[q,(0,a._)("select",{class:"text-center text-gray-500 text-xs dark:text-gray-200 dark:bg-gray-800 border-r border-l border-gray-300 dark:border-gray-500",id:"refresh-rate",ref:"refreshInterval",onChange:t[0]||(t[0]=(...e)=>i.handleChangeRefreshInterval&&i.handleChangeRefreshInterval(...e))},[(0,a._)("option",{value:"10",selected:10===o.refreshInterval},"10s",8,K),(0,a._)("option",{value:"30",selected:30===o.refreshInterval},"30s",8,Y),(0,a._)("option",{value:"60",selected:60===o.refreshInterval},"1m",8,F),(0,a._)("option",{value:"120",selected:120===o.refreshInterval},"2m",8,G),(0,a._)("option",{value:"300",selected:300===o.refreshInterval},"5m",8,j),(0,a._)("option",{value:"600",selected:600===o.refreshInterval},"10m",8,L)],544),(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>i.toggleDarkMode&&i.toggleDarkMode(...e)),class:"text-xs p-1"},[o.darkMode?(0,a.WI)(e.$slots,"default",{key:0},(()=>[N])):(0,a.WI)(e.$slots,"default",{key:1},(()=>[Z]))])])}var V={name:"Settings",props:{},methods:{setRefreshInterval(e){sessionStorage.setItem("gatus:refresh-interval",e);let t=this;this.refreshIntervalHandler=setInterval((function(){t.refreshData()}),1e3*e)},refreshData(){this.$emit("refreshData")},handleChangeRefreshInterval(){this.refreshData(),clearInterval(this.refreshIntervalHandler),this.setRefreshInterval(this.$refs.refreshInterval.value)},toggleDarkMode(){"dark"===localStorage.theme?localStorage.theme="light":localStorage.theme="dark",this.applyTheme()},applyTheme(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(this.darkMode=!0,document.documentElement.classList.add("dark")):(this.darkMode=!1,document.documentElement.classList.remove("dark"))}},created(){10!==this.refreshInterval&&30!==this.refreshInterval&&60!==this.refreshInterval&&120!==this.refreshInterval&&300!==this.refreshInterval&&600!==this.refreshInterval&&(this.refreshInterval=60),this.setRefreshInterval(this.refreshInterval),this.applyTheme()},unmounted(){clearInterval(this.refreshIntervalHandler)},data(){return{refreshInterval:sessionStorage.getItem("gatus:refresh-interval")<10?60:parseInt(sessionStorage.getItem("gatus:refresh-interval")),refreshIntervalHandler:0,darkMode:!1}}};V.render=J;var _=V;const $={id:"results"};function ee(e,t,s,r,o,i){const n=(0,a.up)("ServiceGroup");return(0,a.wg)(),(0,a.iD)("div",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.serviceGroups,(t=>(0,a.WI)(e.$slots,"default",{key:t},(()=>[(0,a.Wm)(n,{services:t.services,name:t.name,onShowTooltip:i.showTooltip,onToggleShowAverageResponseTime:i.toggleShowAverageResponseTime,showAverageResponseTime:s.showAverageResponseTime},null,8,["services","name","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"])])))),128))])}const te={class:"font-mono text-gray-400 text-xl font-medium pb-2 px-3 dark:text-gray-200 dark:hover:text-gray-500 dark:border-gray-500"},se={key:0,class:"text-green-600"},re={key:1,class:"text-yellow-400"},ae={class:"float-right service-group-arrow"};function oe(e,t,s,r,o,i){const n=(0,a.up)("Service");return(0,a.wg)(),(0,a.iD)("div",{class:(0,x.C_)(0===s.services.length?"mt-3":"mt-4")},["undefined"!==s.name?(0,a.WI)(e.$slots,"default",{key:0},(()=>[(0,a._)("div",{class:"service-group pt-2 border dark:bg-gray-800 dark:border-gray-500",onClick:t[0]||(t[0]=(...e)=>i.toggleGroup&&i.toggleGroup(...e))},[(0,a._)("h5",te,[o.healthy?((0,a.wg)(),(0,a.iD)("span",se,"✓")):((0,a.wg)(),(0,a.iD)("span",re,"~")),(0,a.Uk)(" "+(0,x.zw)(s.name)+" ",1),(0,a._)("span",ae,(0,x.zw)(o.collapsed?"▼":"▲"),1)])])])):(0,a.kq)("",!0),o.collapsed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,x.C_)("undefined"===s.name?"":"service-group-content")},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.services,(t=>(0,a.WI)(e.$slots,"default",{key:t},(()=>[(0,a.Wm)(n,{data:t,maximumNumberOfResults:20,onShowTooltip:i.showTooltip,onToggleShowAverageResponseTime:i.toggleShowAverageResponseTime,showAverageResponseTime:s.showAverageResponseTime},null,8,["data","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"])])))),128))],2))],2)}const ie={key:0,class:"service px-3 py-3 border-l border-r border-t rounded-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-500"},ne={class:"flex flex-wrap mb-2"},le={class:"w-3/4"},ge={key:0,class:"text-gray-500 font-light"},he={class:"w-1/4 text-right"},ce=["title"],ue={class:"status-over-time flex flex-row"},de=["onMouseenter"],me=["onMouseenter"],pe={class:"flex flex-wrap status-time-ago"},Ae={class:"w-1/2"},ve={class:"w-1/2 text-right"},fe=(0,a._)("div",{class:"w-1/2"},"   ",-1);function we(e,t,s,r,o,i){const n=(0,a.up)("router-link");return s.data?((0,a.wg)(),(0,a.iD)("div",ie,[(0,a._)("div",ne,[(0,a._)("div",le,[(0,a.Wm)(n,{to:i.generatePath(),class:"font-bold hover:text-blue-800 hover:underline dark:hover:text-blue-400",title:"View detailed service health"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,x.zw)(s.data.name),1)])),_:1},8,["to"]),s.data.results&&s.data.results.length&&s.data.results[s.data.results.length-1].hostname?((0,a.wg)(),(0,a.iD)("span",ge," | "+(0,x.zw)(s.data.results[s.data.results.length-1].hostname),1)):(0,a.kq)("",!0)]),(0,a._)("div",he,[s.data.results&&s.data.results.length?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"font-light overflow-x-hidden cursor-pointer select-none",onClick:t[0]||(t[0]=(...e)=>i.toggleShowAverageResponseTime&&i.toggleShowAverageResponseTime(...e)),title:s.showAverageResponseTime?"Average response time":"Minimum and maximum response time"},[s.showAverageResponseTime?(0,a.WI)(e.$slots,"default",{key:0},(()=>[(0,a.Uk)(" ~"+(0,x.zw)(o.averageResponseTime)+"ms ",1)])):(0,a.WI)(e.$slots,"default",{key:1},(()=>[(0,a.Uk)((0,x.zw)(o.minResponseTime===o.maxResponseTime?o.minResponseTime:o.minResponseTime+"-"+o.maxResponseTime)+"ms ",1)]))],8,ce)):(0,a.kq)("",!0)])]),(0,a._)("div",null,[(0,a._)("div",ue,[s.data.results&&s.data.results.length?(0,a.WI)(e.$slots,"default",{key:0},(()=>[s.data.results.length<s.maximumNumberOfResults?(0,a.WI)(e.$slots,"default",{key:0},(()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.maximumNumberOfResults-s.data.results.length,(e=>((0,a.wg)(),(0,a.iD)("span",{key:e,class:"status rounded border border-dashed border-gray-400"}," ")))),128))])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.data.results,(s=>(0,a.WI)(e.$slots,"default",{key:s},(()=>[s.success?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"status status-success rounded bg-success",onMouseenter:e=>i.showTooltip(s,e),onMouseleave:t[1]||(t[1]=e=>i.showTooltip(null,e))},null,40,de)):((0,a.wg)(),(0,a.iD)("span",{key:1,class:"status status-failure rounded bg-red-600",onMouseenter:e=>i.showTooltip(s,e),onMouseleave:t[2]||(t[2]=e=>i.showTooltip(null,e))},null,40,me))])))),128))])):(0,a.WI)(e.$slots,"default",{key:1},(()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.maximumNumberOfResults,(e=>((0,a.wg)(),(0,a.iD)("span",{key:e,class:"status rounded border border-dashed border-gray-400"}," ")))),128))]))])]),(0,a._)("div",pe,[s.data.results&&s.data.results.length?(0,a.WI)(e.$slots,"default",{key:0},(()=>[(0,a._)("div",Ae,(0,x.zw)(e.generatePrettyTimeAgo(s.data.results[0].timestamp)),1),(0,a._)("div",ve,(0,x.zw)(e.generatePrettyTimeAgo(s.data.results[s.data.results.length-1].timestamp)),1)])):(0,a.WI)(e.$slots,"default",{key:1},(()=>[fe]))])])):(0,a.kq)("",!0)}const ye={methods:{generatePrettyTimeAgo(e){let t=(new Date).getTime()-new Date(e).getTime();if(t>36e5){let e=(t/36e5).toFixed(0);return e+" hour"+("1"!==e?"s":"")+" ago"}if(t>6e4){let e=(t/6e4).toFixed(0);return e+" minute"+("1"!==e?"s":"")+" ago"}return(t/1e3).toFixed(0)+" seconds ago"}}};var xe={name:"Service",props:{maximumNumberOfResults:Number,data:Object,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],mixins:[ye],methods:{updateMinAndMaxResponseTimes(){let e=null,t=null,s=0;for(let r in this.data.results){const a=parseInt((this.data.results[r].duration/1e6).toFixed(0));s+=a,(null==e||e>a)&&(e=a),(null==t||t<a)&&(t=a)}this.minResponseTime!==e&&(this.minResponseTime=e),this.maxResponseTime!==t&&(this.maxResponseTime=t),this.data.results&&this.data.results.length&&(this.averageResponseTime=(s/this.data.results.length).toFixed(0))},generatePath(){return this.data?`/services/${this.data.key}`:"/"},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.$emit("toggleShowAverageResponseTime")}},watch:{data:function(){this.updateMinAndMaxResponseTimes()}},created(){this.updateMinAndMaxResponseTimes()},data(){return{minResponseTime:0,maxResponseTime:0,averageResponseTime:0}}};xe.render=we;var Te=xe,ke={name:"ServiceGroup",components:{Service:Te},props:{name:String,services:Array,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{healthCheck(){if(this.services)for(let e in this.services)for(let t in this.services[e].results)if(!this.services[e].results[t].success)return void(this.healthy&&(this.healthy=!1));this.healthy||(this.healthy=!0)},toggleGroup(){this.collapsed=!this.collapsed,sessionStorage.setItem(`gatus:service-group:${this.name}:collapsed`,this.collapsed)},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.$emit("toggleShowAverageResponseTime")}},watch:{services:function(){this.healthCheck()}},created(){this.healthCheck()},data(){return{healthy:!0,collapsed:"true"===sessionStorage.getItem(`gatus:service-group:${this.name}:collapsed`)}}};ke.render=oe;var be=ke,Ie={name:"Services",components:{ServiceGroup:be},props:{showStatusOnHover:Boolean,serviceStatuses:Object,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{process(){let e={};for(let s in this.serviceStatuses){let t=this.serviceStatuses[s];e[t.group]&&0!==e[t.group].length||(e[t.group]=[]),e[t.group].push(t)}let t=[];for(let s in e)"undefined"!==s&&t.push({name:s,services:e[s]});e["undefined"]&&t.push({name:"undefined",services:e["undefined"]}),this.serviceGroups=t},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.$emit("toggleShowAverageResponseTime")}},watch:{serviceStatuses:function(){this.process()}},data(){return{userClickedStatus:!1,serviceGroups:[]}}};Ie.render=ee;var Re=Ie;const Se={class:"mt-3 flex"},De={class:"flex-1"},Ce={class:"flex-1 text-right"};function Be(e,t,s,r,o,i){return(0,a.wg)(),(0,a.iD)("div",Se,[(0,a._)("div",De,[o.currentPage<5?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>i.nextPage&&i.nextPage(...e)),class:"bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200 px-2 rounded font-mono dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},"<")):(0,a.kq)("",!0)]),(0,a._)("div",Ce,[o.currentPage>1?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[1]||(t[1]=(...e)=>i.previousPage&&i.previousPage(...e)),class:"bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200 px-2 rounded font-mono dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},">")):(0,a.kq)("",!0)])])}var Pe={name:"Pagination",components:{},emits:["page"],methods:{nextPage(){this.currentPage++,this.$emit("page",this.currentPage)},previousPage(){this.currentPage--,this.$emit("page",this.currentPage)}},data(){return{currentPage:1}}};Pe.render=Be;var Ee=Pe,He={name:"Home",components:{Pagination:Ee,Services:Re,Settings:_},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{fetchData(){fetch(`${Pt}/api/v1/services/statuses?page=${this.currentPage}`).then((e=>e.json())).then((e=>{JSON.stringify(this.serviceStatuses)!==JSON.stringify(e)&&(this.serviceStatuses=e)}))},changePage(e){this.currentPage=e,this.fetchData()},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.showAverageResponseTime=!this.showAverageResponseTime}},data(){return{serviceStatuses:[],currentPage:1,showAverageResponseTime:!0}},created(){this.fetchData()}};He.render=W;var Oe=He,Ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAJF0lEQVR4nO2b7VcTVwKHf8S8kGRmkpAJBKyVstbIS3gxAeXFikcRbdVaBJvwEgqoqwuEELqwkJcCMQna0926bvecPdbtdtftnn7YP6EfevoPiau0FXD2w2TCMJkgiKME73PO/ZIzk3Pn99y59+beG4BAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIMqjgcmngcmkA5KUK4RWQB2BPictlcN0K+us+DwaLTlcbAewBkaA4eQDUrMNB1yyM/aEkdu1J8c1rS7VJf4h1OGgAahAJipEKn6Vr4/5Q8c1rS+ZoP2eO+jh7bOjnmsRwlHWwRIJC5AFQw2ajauIjkeLY1V/48Ps5U9THmaI+zh678ktNfGQeNhsFIuGlwocPGOoWRqPFsSu/CuGbU+ELpXB+6GltYjQOwJC6R/Vaa74LWAs/6Z+3z19dXgu/f134pqiPYyI+zjY3uFKdHLsNwAgiYVukwz+cGI0XzQ+tiMOXtn5BABPxcezc4ErNgv8LrL0JpDvaIuk+v+6WP1E0f2V5ffjyrV9crHMDK87kyB/BkoF5q+QBUFtcZaa65OiCPXbl6fPClxNAR/o46+zgsjMx/CdzbakZRMKmUAFQm2trzdXJ0dty4W/U9YjDF4p1dnC5KjF8h2msLACgARkTsqICoDG1OC21Cf/n9thVmfD7OWa652m28Okp769SAXSkjyuYHViuSIze2dvQYAWRIIsKgIZprCyoWfB/Id/y+znTpHeJvnT8flYBHa1f0592PRKHT4V7OSrcy1lnB5cr4iN/JhIySbf86uToHfv81WXLZ59khE9PeX82nD0apw7s7czW9Zjdlb78tsMz1MTl/0kFUOFe/k24OXI31R2RKSpS4ZtrS801ybG7RfNXZMM3TXqXDB80RgE0MOX7P5ALn4n4uIKjNZcB1OvbXBPURNcjcfhUuJczhns5y2cDy5Xx4b+anG9b8Ia/CSoAGpZl6dpbY18VxYZWsoZ/vikEwAmg3FRddjLbwMserz8P4BAAp7HdHTAGuxalAozhXs4y+8lKZXz4nqWszIQ3VIIo/MDfCjcMv3kGQCWAUgD7LK6DLXKtn470cYUnGtsBvA1gP4AKsQSjpJij/avl8ZFvzaWlZrxhElQANAUHDjC1twP3CueHVmXDn0q3/AoAbwFgAdisRyuOZJt2FrU1ngRQmLr2LQDl+nZ3wDjR9UgqwBDq4ZiIb7U8OfKv1O+EN0LCWp9/O3DfNpct/O4lw7mWMIByAHsBWABQACzWxsqGbHN+e3vzCdG1ZgAlAA7pz7oDepEEQ6gnXZiob/VQYviByenc9WOCCoBm78kGa82tsa9tc0OrslPNqe4n1IWWz7AWvhlAPgAdAMbaVFkvFz4d6ePsZ1pbU9frUveYkJZQP2Gc6FqUCjCEejg62rfquPm7B/azx2zYpRJUADS/Od1UWJP03y/MFv6k9zF1sWUWmeGrwQeTFiANnxfQ0gqASV2rBi9CJOHIp4Zg50Nx+PpQN6cPdXNMtG/VkRh+UPp+qx27TIIKgOadC0eKnImRvxdmrGoK4Xc/pi6+N4vM8PcI3wGAYZur3HICqHCvVIAqdW+mhPHORakAfaibo6O+VUfsxr/3XWgrwS6RoAKgKX2/1e5cGP3GNj8oH/5U9xPqomy3I2y0C0vTDNtc5ZZr/RIBatF98hKCXYvi8NMSIr7Vg7Hr3+0GCSoAmv3tx4qrk/5/2uYGZbsdesq7ZPiwOYr14euw/pTDhgKEeb6MAOHeTAnt9RP5wUuPxOHnz/CFl3DjP7ksId3nO5Oj37FZ+nx60rNkONcknu3IhS8gK0D8QyuLACCLBF27O5A/3rkoDl8oVLj32YHY9e9zcUzIA6AuaXWxVbf837NzA8/klpSZSc8Tip/nZ+t2pGQIkC41bCBAQIWMN8EdyB+/tCgVoJvxcsZwz7N34zf+W3S6qXCD79xx7AGgf3fuWkgufFPUxzFT6fArsLnwAYkAafibFJCHTAnlunZ3QCeRoJvxcroZL2cI9zzbHxmMA9Cn6rejEfpq2vx775dyGyn0pGeJOtcUhnZL4QMiAXLhGzcnQKijtDtKSehcFIeflhDsuAeABt8V7ei3IA+AFoDFHPz4rnQHi57yiJcXthI+sIEA49YECPXM6I50p9wB7XjHI3H42mkPZxjr+Ab8L2ztJur5WskD/1BW0/jlr9ZtnEx5nhguNEewuQFXDlkBxhcTINQ1U8IZV1AsQTvt4Qz+j/4BwJq6dkcPxoIAlhnvTAtgJr2PDZnLC1sJH5ARIF1g26IAob6ZEtrrJ7SBS4vaaQ8vYPSjb8Ev8OUjRwRYBQHMpOfxc35kbZZ1AqThv6AAoc4yU9T6CU2g4yHfBaUF5MwbUMAEO//CTHofUx3vhQE4sL3wAZEAufANoZ4XFSDUWyrhoO7skYBmvOOhIZBbXZAWgJm+fj5p/PhEEEAZ+AfaTvjABgKEdZ1tCBDqLpZQDKBM82Hjb41Xz32Zqr8WOSBADcBIux0OAHYANvChbLXPlyIrQLyyuU0BQv0FCUyq7nZdw6GD4PcYdvw0FFh7ACP4ubMRfMvZ7j9YMgRI1/VfggBgbWDWgj9bKjzDdhvQK0NoRRqsrcursP2KrxMgDf8lChBQYW0fQoMcCV8gT1JeBmkBcuHrQ90c+3IFAMo8R86SVYCwnKyAAIIIWQHi9XwiQFkyBEh3s4gAZUkLkNtKJAKUZ0MB+TNEgNJkFSBsohAByiIrQLyLRQQoyzoB0j1cIkB50gLkwicClIcX0CAvQDfjJQIUJqsAYfuQCFCWDAHS0wtEgLKsEyANnwhQnrQAufC10x6OPXO0FUSAYmQVIJxeIAKUJUOAEDwR8GpYJ0AaPhGgPGoANHvE6ZILXzvt4dizjcdBBCiGGgBF1R2oUA+c/kHd3/aj2nfqJ7Xv1E/q/rYf1QOnfzAdcx0Gf3pB/ZrruivZA/6IOIt8lEGLKmhQBw3qoEUV8lEG/hhJThwjz0WEoyIU+GOCJQD2pUpJ6jPh7M6OPjyVq4jP6+jBh02nCpX6bMefXNsNCH8/VUuK8HdWMvi+Qsh5HQKBQCAQCAQCgUAgEAgEAoFAIBCez/8BneC0cjU1kO8AAAAASUVORK5CYII=",ze="data:image/png;base64,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",Me="data:image/png;base64,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";(0,a.dD)("data-v-9b47a9ec");const Qe=(0,a.Uk)(" ← "),We=(0,a._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"RECENT CHECKS",-1),Xe=(0,a._)("hr",{class:"mb-4"},null,-1),qe={key:1,class:"mt-12"},Ke=(0,a._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"UPTIME",-1),Ye=(0,a._)("hr",null,null,-1),Fe={class:"flex space-x-4 text-center text-2xl mt-6 relative bottom-2 mb-10"},Ge={class:"flex-1"},je=(0,a._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 7 days",-1),Le=["src"],Ne={class:"flex-1"},Ze=(0,a._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 24 hours",-1),Je=["src"],Ve={class:"flex-1"},_e=(0,a._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last hour",-1),$e=["src"],et={key:2,class:"mt-12"},tt=(0,a._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"RESPONSE TIME",-1),st=(0,a._)("hr",null,null,-1),rt=["src"],at={class:"flex space-x-4 text-center text-2xl mt-6 relative bottom-2 mb-10"},ot={class:"flex-1"},it=(0,a._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 7 days",-1),nt=["src"],lt={class:"flex-1"},gt=(0,a._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 24 hours",-1),ht=["src"],ct={class:"flex-1"},ut=(0,a._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last hour",-1),dt=["src"],mt={key:3},pt=(0,a._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400 mt-4"},"EVENTS",-1),At=(0,a._)("hr",{class:"mb-4"},null,-1),vt={class:"p-3 my-4"},ft={class:"text-lg"},wt={key:0,src:Ue,alt:"Healthy",class:"border border-green-600 rounded-full opacity-75 bg-green-100 mr-2 inline",width:"26"},yt={key:1,src:ze,alt:"Unhealthy",class:"border border-red-500 rounded-full opacity-75 bg-red-100 mr-2 inline",width:"26"},xt={key:2,src:Me,alt:"Start",class:"border border-gray-500 rounded-full opacity-75 bg-gray-100 mr-2 inline",width:"26"},Tt={class:"flex mt-1 text-sm text-gray-400"},kt={class:"flex-1 text-left pl-10"},bt={class:"flex-1 text-right"};function It(e,t,s,r,o,i){const n=(0,a.up)("router-link"),l=(0,a.up)("Service"),g=(0,a.up)("Pagination"),h=(0,a.up)("Settings");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(n,{to:"../",class:"absolute top-2 left-2 inline-block px-2 pb-0.5 text-lg text-black bg-gray-100 rounded hover:bg-gray-200 focus:outline-none border border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},{default:(0,a.w5)((()=>[Qe])),_:1}),(0,a._)("div",null,[o.serviceStatus?(0,a.WI)(e.$slots,"default",{key:0},(()=>[We,Xe,(0,a.Wm)(l,{data:o.serviceStatus,maximumNumberOfResults:20,onShowTooltip:i.showTooltip,onToggleShowAverageResponseTime:i.toggleShowAverageResponseTime,showAverageResponseTime:o.showAverageResponseTime},null,8,["data","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"]),(0,a.Wm)(g,{onPage:i.changePage},null,8,["onPage"])]),{},!0):(0,a.kq)("",!0),o.serviceStatus&&o.serviceStatus.key?((0,a.wg)(),(0,a.iD)("div",qe,[Ke,Ye,(0,a._)("div",Fe,[(0,a._)("div",Ge,[je,(0,a._)("img",{src:i.generateUptimeBadgeImageURL("7d"),alt:"7d uptime badge",class:"mx-auto"},null,8,Le)]),(0,a._)("div",Ne,[Ze,(0,a._)("img",{src:i.generateUptimeBadgeImageURL("24h"),alt:"24h uptime badge",class:"mx-auto"},null,8,Je)]),(0,a._)("div",Ve,[_e,(0,a._)("img",{src:i.generateUptimeBadgeImageURL("1h"),alt:"1h uptime badge",class:"mx-auto"},null,8,$e)])])])):(0,a.kq)("",!0),o.serviceStatus&&o.serviceStatus.key?((0,a.wg)(),(0,a.iD)("div",et,[tt,st,(0,a._)("img",{src:i.generateResponseTimeChartImageURL(),alt:"response time chart",class:"mt-6"},null,8,rt),(0,a._)("div",at,[(0,a._)("div",ot,[it,(0,a._)("img",{src:i.generateResponseTimeBadgeImageURL("7d"),alt:"7d response time badge",class:"mx-auto mt-2"},null,8,nt)]),(0,a._)("div",lt,[gt,(0,a._)("img",{src:i.generateResponseTimeBadgeImageURL("24h"),alt:"24h response time badge",class:"mx-auto mt-2"},null,8,ht)]),(0,a._)("div",ct,[ut,(0,a._)("img",{src:i.generateResponseTimeBadgeImageURL("1h"),alt:"1h response time badge",class:"mx-auto mt-2"},null,8,dt)])])])):(0,a.kq)("",!0),o.serviceStatus&&o.serviceStatus.key?((0,a.wg)(),(0,a.iD)("div",mt,[pt,At,(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.events,(t=>(0,a.WI)(e.$slots,"default",{key:t},(()=>[(0,a._)("div",vt,[(0,a._)("h2",ft,["HEALTHY"===t.type?((0,a.wg)(),(0,a.iD)("img",wt)):"UNHEALTHY"===t.type?((0,a.wg)(),(0,a.iD)("img",yt)):"START"===t.type?((0,a.wg)(),(0,a.iD)("img",xt)):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,x.zw)(t.fancyText),1)]),(0,a._)("div",Tt,[(0,a._)("div",kt,(0,x.zw)(new Date(t.timestamp).toISOString()),1),(0,a._)("div",bt,(0,x.zw)(t.fancyTimeAgo),1)])])]),!0))),128))])])):(0,a.kq)("",!0)]),(0,a.Wm)(h,{onRefreshData:i.fetchData},null,8,["onRefreshData"])],64)}(0,a.Cn)();var Rt={name:"Details",components:{Pagination:Ee,Service:Te,Settings:_},emits:["showTooltip"],mixins:[ye],methods:{fetchData(){fetch(`${this.serverUrl}/api/v1/services/${this.$route.params.key}/statuses?page=${this.currentPage}`).then((e=>e.json())).then((e=>{if(JSON.stringify(this.serviceStatus)!==JSON.stringify(e)){this.serviceStatus=e,this.uptime=e.uptime;let t=[];for(let s=e.events.length-1;s>=0;s--){let r=e.events[s];if(s===e.events.length-1)"UNHEALTHY"===r.type?r.fancyText="Service is unhealthy":"HEALTHY"===r.type?r.fancyText="Service is healthy":"START"===r.type&&(r.fancyText="Monitoring started");else{let t=e.events[s+1];"HEALTHY"===r.type?r.fancyText="Service became healthy":"UNHEALTHY"===r.type?r.fancyText=t?"Service was unhealthy for "+this.prettifyTimeDifference(t.timestamp,r.timestamp):"Service became unhealthy":"START"===r.type&&(r.fancyText="Monitoring started")}r.fancyTimeAgo=this.generatePrettyTimeAgo(r.timestamp),t.push(r)}this.events=t}}))},generateUptimeBadgeImageURL(e){return`${this.serverUrl}/api/v1/services/${this.serviceStatus.key}/uptimes/${e}/badge.svg`},generateResponseTimeBadgeImageURL(e){return`${this.serverUrl}/api/v1/services/${this.serviceStatus.key}/response-times/${e}/badge.svg`},generateResponseTimeChartImageURL(){return`${this.serverUrl}/api/v1/services/${this.serviceStatus.key}/response-times/24h/chart.svg`},prettifyUptime(e){return e?(100*e).toFixed(2)+"%":"0%"},prettifyTimeDifference(e,t){let s=Math.ceil((new Date(e)-new Date(t))/1e3/60);return s+(1===s?" minute":" minutes")},changePage(e){this.currentPage=e,this.fetchData()},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.showAverageResponseTime=!this.showAverageResponseTime}},data(){return{serviceStatus:{},uptime:{},events:[],hourlyAverageResponseTime:{},serverUrl:"."===Pt?"..":Pt,currentPage:1,showAverageResponseTime:!0,chartLabels:[],chartValues:[]}},created(){this.fetchData()}};Rt.render=It,Rt.__scopeId="data-v-9b47a9ec";var St=Rt;const Dt=[{path:"/",name:"Home",component:Oe},{path:"/services/:key",name:"Details",component:St}],Ct=(0,Q.p7)({history:(0,Q.PO)("/"),routes:Dt});var Bt=Ct;const Pt=".";(0,r.ri)(M).use(Bt).mount("#app")}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,r,a,o){if(!r){var i=1/0;for(g=0;g<e.length;g++){r=e[g][0],a=e[g][1],o=e[g][2];for(var n=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(n=!1,o<i&&(i=o));n&&(e.splice(g--,1),t=a())}return t}o=o||0;for(var g=e.length;g>0&&e[g-1][2]>o;g--)e[g]=e[g-1];e[g]=[r,a,o]}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],n=r[1],l=r[2],g=0;for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(l)var h=l(s);for(t&&t(r);g<i.length;g++)o=i[g],s.o(e,o)&&e[o]&&e[o][0](),e[i[g]]=0;return s.O(h)},r=self["webpackChunkgatus"]=self["webpackChunkgatus"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(584)}));r=s.O(r)})();