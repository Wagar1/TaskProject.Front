(function(e){function t(t){for(var r,i,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[a("v-container",{staticClass:"py-0 fill-height"},[a("v-spacer"),a("v-btn",{attrs:{to:"/",text:""}},[e._v("Главное")]),a("v-btn",{attrs:{to:"/admin",text:""}},[e._v("Логин")])],1)],1),a("v-main",{staticClass:"grey lighten-3"},[a("router-view")],1)],1)},s=[],i={data:function(){return{}}},o=i,l=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),m=a("40dc"),f=a("8336"),v=a("a523"),p=a("f6c4"),b=a("2fa4"),h=Object(l["a"])(o,n,s,!1,null,null,null),x=h.exports;u()(h,{VApp:d["a"],VAppBar:m["a"],VBtn:f["a"],VContainer:v["a"],VMain:p["a"],VSpacer:b["a"]});var k=a("8c4f"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",[a("tasks")],1)],1)],1)},O=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.tasks,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Задачи")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),r),[e._v(" Новая задача ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("validation-provider",{attrs:{name:"username",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{"error-messages":r,label:"Имя пользователя"},model:{value:e.editedItem.username,callback:function(t){e.$set(e.editedItem,"username",t)},expression:"editedItem.username"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12"}},[a("validation-provider",{attrs:{name:"username",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{"error-messages":r,label:"Email"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12"}},[a("validation-provider",{attrs:{name:"username",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{"error-messages":r,label:"Текст задачи"},model:{value:e.editedItem.content,callback:function(t){e.$set(e.editedItem,"content",t)},expression:"editedItem.content"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Статус задачи"},model:{value:e.editedItem.status,callback:function(t){e.$set(e.editedItem,"status",t)},expression:"editedItem.status"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Отмена ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:r},on:{click:function(t){return e.save()}}},[e._v(" Сохранить ")])],1)],1)],1)]}}])})],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Отмена")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var r=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}])})},_=[],j=a("1da1"),w=a("5530"),I=(a("96cf"),a("d81d"),a("a434"),a("2f62")),V=a("4c93"),T=a("7bb1");Object(T["d"])("eager"),Object(T["c"])("required",Object(w["a"])(Object(w["a"])({},V["b"]),{},{message:"Поле не может быть пустым"})),Object(T["c"])("email",Object(w["a"])(Object(w["a"])({},V["a"]),{},{message:"Email должен быть правильным"}));var C={components:{ValidationProvider:T["b"],ValidationObserver:T["a"]},data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Имя пользователя",align:"start",value:"username"},{text:"Email",value:"email",sortable:!1},{text:"Текст задачи",value:"content",sortable:!1},{text:"Статус задачи",value:"status",sortable:!1}],tasks:[],editedIndex:-1,editedItem:{username:"",email:"",content:"",status:0},defaultItem:{username:"",email:"",content:"",status:0}}},computed:Object(w["a"])(Object(w["a"])({},Object(I["c"])("tasks",["getTasks"])),{},{formTitle:function(){return-1===this.editedIndex?"Новая задача":"Редактировать задачу"}}),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:Object(w["a"])(Object(w["a"])({},Object(I["b"])("tasks",["fetchTasks","createTask"])),{},{initialize:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchTasks();case 2:this.getTasks.map((function(e){var a={username:"",email:"",content:"",status:0};a.username=e.UserName,a.email=e.Email,a.content=e.Text,a.status=e.Status,t.tasks.push(a)}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),editItem:function(e){this.editedIndex=this.tasks.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.tasks.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.tasks.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.editedIndex>-1)){e.next=4;break}Object.assign(this.tasks[this.editedIndex],this.editedItem),e.next=7;break;case 4:return this.tasks.push(this.editedItem),e.next=7,this.createTask(this.editedItem);case 7:this.close();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})},S=C,D=a("b0af"),$=a("99d9"),R=a("62ad"),E=a("8fea"),q=a("169a"),P=a("ce7e"),M=a("132d"),N=a("0fd9"),A=a("8654"),B=a("71d9"),z=a("2a7f"),H=Object(l["a"])(S,y,_,!1,null,null,null),J=H.exports;u()(H,{VBtn:f["a"],VCard:D["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VCol:R["a"],VContainer:v["a"],VDataTable:E["a"],VDialog:q["a"],VDivider:P["a"],VIcon:M["a"],VRow:N["a"],VSpacer:b["a"],VTextField:A["a"],VToolbar:B["a"],VToolbarTitle:z["a"]});var F={name:"Home",components:{Tasks:J}},U=F,K=Object(l["a"])(U,g,O,!1,null,null,null),G=K.exports;u()(K,{VCol:R["a"],VContainer:v["a"],VRow:N["a"]});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"w-mt"},[a("v-card-text",[a("v-container",[a("v-row",[a("v-col"),a("v-col",{attrs:{cols:"3"}},[a("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("validation-provider",{attrs:{name:"username",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{"error-messages":r,label:"Имя пользователя",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("v-text-field",{attrs:{"error-messages":r,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)}),a("v-btn",{attrs:{type:"submit",text:"",disabled:r}},[e._v("Логин")]),a("v-btn",{attrs:{text:""},on:{click:e.clear}},[e._v(" Очистить ")])],1)]}}])})],1),a("v-col")],1)],1)],1)],1)},Q=[];Object(T["d"])("eager"),Object(T["c"])("required",Object(w["a"])(Object(w["a"])({},V["b"]),{},{message:"Поле не может быть пустым"})),Object(T["c"])("email",Object(w["a"])(Object(w["a"])({},V["a"]),{},{message:"Email должен быть правильным"}));var W={components:{ValidationProvider:T["b"],ValidationObserver:T["a"]},data:function(){return{username:"",email:""}},methods:{submit:function(){this.$refs.observer.validate()},clear:function(){this.username="",this.email="",this.$refs.observer.reset()}}},X=W,Y=(a("c330"),Object(l["a"])(X,L,Q,!1,null,"211b9df1",null)),Z=Y.exports;u()(Y,{VBtn:f["a"],VCard:D["a"],VCardText:$["b"],VCol:R["a"],VContainer:v["a"],VRow:N["a"],VTextField:A["a"]}),r["a"].use(k["a"]);var ee=[{path:"/",name:"Home",component:G},{path:"/admin",name:"Admin",component:Z}],te=new k["a"]({mode:"history",base:"/",routes:ee}),ae=te,re={namespaced:!0,state:function(){return{firstName:"Vugar"}},getters:{firstName:function(e){return e.firstName}},mutations:{},actions:{go:function(e){alert("Hallo")}}},ne=a("bc3a"),se=a.n(ne),ie=a("7dc5"),oe=a("5a30"),le=a.n(oe),ce={namespaced:!0,state:function(){return{developer:"vugar",tasks:[]}},getters:{getTasks:function(e){return e.tasks}},mutations:{setTasks:function(e,t){e.tasks=t}},actions:{fetchTasks:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=ie.base_url+"/api/Tasks?developer="+t.state.developer,e.next=3,se.a.get(a);case 3:r=e.sent,t.commit("setTasks",r.data.Message.Tasks);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),createTask:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,a){var r,n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=ie.base_url+"/api/Tasks/create",n=new le.a,n.append("UserName",a.username),n.append("Email",a.email),n.append("Text",a.content),console.log(n),s={method:"post",url:r,headers:{"Content-Type":"multipart/form-data"},data:n},e.next=9,se()(s);case 9:if(i=e.sent,"error"!==i.data.Status){e.next=12;break}throw"Ошибка при создании новой задачи";case 12:case"end":return e.stop()}}),e)})));function t(t,a){return e.apply(this,arguments)}return t}()}};r["a"].use(I["a"]);var ue=new I["a"].Store({state:{},mutations:{},actions:{},modules:{admin:re,tasks:ce}}),de=a("f309");r["a"].use(de["a"]);var me=new de["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ae,store:ue,vuetify:me,render:function(e){return e(x)}}).$mount("#app")},"7dc5":function(e){e.exports=JSON.parse('{"base_url":"https://localhost:44370"}')},c330:function(e,t,a){"use strict";a("f31d")},f31d:function(e,t,a){}});
//# sourceMappingURL=app.9fa05f15.js.map