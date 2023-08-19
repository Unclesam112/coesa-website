import{n as f}from"./navTwo-35b1face.js";import{_ as v,I as w,g as b,c as x,r,o as m,a as h,b as o,e as t,y as D,t as a,x as d,q as y,d as E,p as I,i as C}from"./index-28d340da.js";const T={components:{navTwo:f,Icon:w},data(){return{loading:!0,item:null,formattedDescription:"",formattedDate:""}},beforeCreate(){const e=this.$route.params.title;b(x(E,"Events")).then(s=>{const n=s.docs.find(_=>this.sanitizeTitle(_.data().title)===e);n?(this.item=n.data(),this.formattedDate=this.formatDate(this.item.date),this.formattedDescription=this.formatDescription(),this.loading=!1):console.log("Item not found")}).catch(s=>{console.error("Error fetching item details:",s)})},methods:{sanitizeTitle(e){return e.toLowerCase().replace(/[^\w-]+/g,"-")},formatDescription(){const e=this.item.about.split(`

`);return this.formattedDescription=e.map(s=>`<p >${s}</p>`).join("")},formatDate(e){try{const s={year:"numeric",month:"long",day:"numeric"};return new Date(e).toLocaleDateString(void 0,s)}catch(s){return console.error("Error formatting date:",s),"Invalid Date"}}}},l=e=>(I("data-v-3d90fd23"),e=e(),C(),e),k={key:0},V={class:"container my-3"},S={style:{"--bs-breadcrumb-divider":`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`},"aria-label":"breadcrumb"},L={class:"breadcrumb"},N={class:"breadcrumb-item"},j=l(()=>t("li",{class:"breadcrumb-item active","aria-current":"page"},"Event",-1)),z={class:"row"},B={class:"col-lg-6 col-md-6"},M=["src"],P={class:"col-lg-6 col-md-6"},U={class:"mt-2 display-5"},R={class:"lead"},q={class:"row border-top"},A={class:"col-lg-4 col-md-6 col-6"},F={class:"date-box text-center"},G={class:"my-2"},H={class:"date"},W={class:"col-lg-4 col-md-6 col-6"},J={class:"date-box text-center"},K={class:"my-2"},O={class:"date"},Q={class:"col-lg-4 col-md-6"},X={class:"date-box text-center"},Y={class:"my-2"},Z={class:"date"},$={class:"guests"},tt=l(()=>t("h5",{class:"",style:{"text-align":"right"}},"Present Guests",-1)),et={class:"d-flex justify-content-end"},st=["src"],ot=l(()=>t("h5",{class:"",style:{"text-align":"left"}},"Share With Friends",-1)),it={class:"icons border-top py-4 px-2 d-flex"};function ct(e,s,n,_,i,at){const p=r("navTwo"),g=r("RouterLink"),c=r("Icon"),u=r("footerVue");return m(),h("main",null,[o(p),i.item?(m(),h("div",k,[t("div",V,[t("nav",S,[t("ol",L,[t("li",N,[o(g,{class:"route",to:"/"},{default:D(()=>[d("Home")]),_:1})]),j])]),t("div",z,[t("div",B,[t("img",{src:i.item.eventImageUrls[0],alt:"",class:"img-fluid"},null,8,M)]),t("div",P,[t("h1",U,a(i.item.title),1),t("p",R,a(i.item.description),1),t("div",q,[t("div",A,[t("div",F,[t("h5",G,[o(c,{icon:"clarity:date-line",color:"orangered",width:"20",height:"20"}),d(" DATE")]),t("p",H,a(i.formattedDate),1)])]),t("div",W,[t("div",J,[t("h5",K,[o(c,{icon:"pajamas:location",color:"orangered",width:"20",height:"20"}),d(" VENUE")]),t("p",O,a(i.item.venue),1)])]),t("div",Q,[t("div",X,[t("h5",Y,[o(c,{icon:"subway:time-2",color:"orangered",width:"20",height:"20"}),d(" TIME")]),t("p",Z,a(i.item.time)+" PM",1)])])]),t("div",$,[tt,t("div",et,[t("img",{src:i.item.guestImageUrls[0],alt:"",class:"img-fluid guest-img"},null,8,st)])]),ot,t("div",it,[o(c,{icon:"devicon:linkedin",width:"25"}),o(c,{icon:"logos:whatsapp-icon",width:"25",class:"mx-3"}),o(c,{icon:"skill-icons:instagram",width:"25"})])])])])])):y("",!0),o(u)])}const dt=v(T,[["render",ct],["__scopeId","data-v-3d90fd23"]]);export{dt as default};
