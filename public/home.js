(self.webpackChunk=self.webpackChunk||[]).push([[177],{855:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var s=n(166),r={class:"font-serif text-4xl text-center mt-10 md:mt-16"};const a={render:function(t,e,n,a,i,o){return(0,s.wg)(),(0,s.j4)(s.HY,null,[(0,s.Wm)("h1",r,[(0,s.WI)(t.$slots,"default")]),(0,s.Wm)("hr",{class:"border-t-1 border-ct-black",style:{width:"110%",transform:"translateX(-5%)"}},null,4)],64)}},i=a},358:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>m});var s=n(166),r={id:"home"},a={class:"container"},i=(0,s.Uk)("Hello It's me!");var o=n(855),l={class:"my-10"},c={class:"font-serif text-2xl"};const u={props:["taskTitle","taskDescription"],render:function(t,e,n,r,a,i){return(0,s.wg)(),(0,s.j4)("div",l,[(0,s.Wm)("h3",c,(0,s.zw)(n.taskTitle),1),(0,s.Wm)("p",null,(0,s.zw)(n.taskDescription),1)])}},d=u,k={components:{TitleComponent:o.Z,TaskComponent:d},data:function(){return{tasks:{}}},methods:{getTasks:function(){var t=this;axios.get("/api/tasks").then((function(e){t.tasks=e.data}))}},created:function(){this.getTasks()},render:function(t,e,n,o,l,c){var u=(0,s.up)("title-component"),d=(0,s.up)("task-component");return(0,s.wg)(),(0,s.j4)("section",r,[(0,s.Wm)("div",a,[(0,s.Wm)(u,null,{default:(0,s.w5)((function(){return[i]})),_:1}),((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(l.tasks,(function(t){return(0,s.wg)(),(0,s.j4)("div",{key:t.id},[(0,s.Wm)(d,{"task-title":t.title,"task-description":t.description},null,8,["task-title","task-description"])])})),128))])])}},m=k}}]);