(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__TL6tj",control:"Checkout_control__RLGUZ",actions:"Checkout_actions__2enSq",submit:"Checkout_submit__3VtfA",invalid:"Checkout_invalid__1_yu5"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2vJJP",total:"Cart_total__77cIN",actions:"Cart_actions__3oWBv","button--alt":"Cart_button--alt__33r5d",button:"Cart_button__2LwrO"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__w7urG",summary:"CartItem_summary__2PykB",price:"CartItem_price__kgNi_",amount:"CartItem_amount__H3yaq",actions:"CartItem_actions__9cuts"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__35lUA",icon:"HeaderCartButton_icon__hHfry",badge:"HeaderCartButton_badge__3ugjG",bump:"HeaderCartButton_bump__2rkCR"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__HcKy6",description:"MealItem_description__2Ltvs",price:"MealItem_price__qp03y"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1AWvg","meals-appear":"AvailableMeals_meals-appear__1nGze",MealsLoading:"AvailableMeals_MealsLoading__3cUCs",MealsError:"AvailableMeals_MealsError__ajHaS"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__WOJrY",modal:"Modal_modal__3nTa5","slide-down":"Modal_slide-down__3ASmE"}},,function(e,t,n){e.exports={header:"Header_header__bhHrt","main-image":"Header_main-image__XJph0"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__2bq-P"}},function(e,t,n){e.exports={card:"Card_card__3frfa"}},function(e,t,n){e.exports={input:"Input_input__1HlpF"}},function(e,t,n){e.exports={form:"MealItemForm_form__1XTPA"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),d=n(10),j=n.n(d),m=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(u).items,d=s.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(c?j.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(17),h=n.n(O),x=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:h.a.header,children:[Object(o.jsx)("h1",{children:"Food Engine"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:h.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},f=n(19),p=n.n(f),_=function(){return Object(o.jsxs)("section",{className:p.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(12),C=n(6),y=n.n(C),N=n(20),g=n.n(N),A=function(e){return Object(o.jsx)("div",{className:g.a.card,children:e.children})},k=n(5),S=n(21),w=n.n(S),I=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:w.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(k.a)({ref:t},e.input))]})})),M=n(22),F=n.n(M),H=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(o.jsx)(I,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!c&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},E=n(13),P=n.n(E),R=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:P.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:P.a.description,children:e.description}),Object(o.jsx)("div",{className:P.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(H,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=n(14),B=n.n(T),L=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),s=Object(r.a)(a,2),l=s[0],u=s[1],d=Object(i.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(v.a)(y.a.mark((function e(){var t,n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fir-d33a0-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:B.a.MealsLoading,children:Object(o.jsx)("p",{children:"Loading..."})});if(m)return Object(o.jsx)("section",{className:B.a.MealsError,children:Object(o.jsx)("p",{children:m})});var O=n.map((function(e){return Object(o.jsx)(R,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:B.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:O})})})},D=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(L,{})]})},J=n(15),q=n.n(J),z=function(e){return Object(o.jsx)("div",{className:q.a.backdrop,onClick:e.onClose})},G=function(e){return Object(o.jsx)("div",{className:q.a.modal,children:Object(o.jsx)("div",{className:q.a.content,children:e.children})})},V=document.getElementById("overlays"),Y=function(e){return Object(o.jsxs)(i.Fragment,{children:[a.a.createPortal(Object(o.jsx)(z,{onClose:e.onClose}),V),a.a.createPortal(Object(o.jsx)(G,{children:e.children}),V)]})},U=n(7),W=n.n(U),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:W.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:W.a.summary,children:[Object(o.jsx)("span",{className:W.a.price,children:t}),Object(o.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=n(4),K=n.n(X),Z=n(3),Q=n.n(Z),ee=function(e){return""===e.trim()},te=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d=Object(i.useRef)(),j="".concat(Q.a.control," ").concat(c.name?"":Q.a.invalid),m="".concat(Q.a.control," ").concat(c.street?"":Q.a.invalid),b="".concat(Q.a.control," ").concat(c.postalCode?"":Q.a.invalid),O="".concat(Q.a.control," ").concat(c.city?"":Q.a.invalid);return Object(o.jsxs)("form",{className:Q.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=l.current.value,r=u.current.value,i=d.current.value,o=!ee(n),j=!ee(c),m=!ee(i),b=5===r.trim().length;a({name:o,street:j,city:m,postalCode:b}),o&&j&&m&&b&&e.onConfirm({name:n,street:c,city:i,postalCode:r})},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(o.jsx)("p",{children:"Please enter a valid name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!c.street&&Object(o.jsx)("p",{children:"Please enter a valid street!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!c.postalCode&&Object(o.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(o.jsx)("p",{children:"Please enter a valid city!"})]}),Object(o.jsxs)("div",{className:Q.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:Q.a.submit,children:"Confirm"})]})]})},ne=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],l=Object(i.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),h=O[0],x=O[1],f=Object(i.useContext)(u),p="$".concat(f.totalAmount.toFixed(2)),_=f.items.length>0,C=function(e){f.removeItem(e)},N=function(e){f.addItem(e)},g=function(){var e=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://fir-d33a0-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:f.items})});case 3:m(!1),x(!0),f.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(o.jsx)("ul",{className:K.a["cart-items"],children:f.items.map((function(e){return Object(o.jsx)($,{name:e.name,amount:e.amount,price:e.price,onRemove:C.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),k=Object(o.jsxs)("div",{className:K.a.actions,children:[Object(o.jsx)("button",{className:K.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:K.a.button,onClick:function(){a(!0)},children:"Order"})]}),S=Object(o.jsxs)(s.a.Fragment,{children:[A,Object(o.jsxs)("div",{className:K.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:p})]}),c&&Object(o.jsx)(te,{onConfirm:g,onCancel:e.onClose}),!c&&k]}),w=Object(o.jsx)("p",{children:"Sending order data..."}),I=Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order!"}),Object(o.jsx)("div",{className:K.a.actions,children:Object(o.jsx)("button",{className:K.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(Y,{onClose:e.onClose,children:[!j&&!h&&S,j&&w,!j&&h&&I]})},ce=n(18),ae={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(k.a)(Object(k.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(s=Object(ce.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ae},ie=function(e){var t=Object(i.useReducer)(re,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(ie,{children:[n&&Object(o.jsx)(ne,{onClose:function(){c(!1)}}),Object(o.jsx)(x,{onShowCart:function(){c(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(D,{})})]})};a.a.render(Object(o.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.3bbfead4.chunk.js.map