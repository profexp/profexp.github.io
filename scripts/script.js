"use strict";function open_ya_maps(){if(!maps_opened){var e=function(){function e(e){n(),i=new ymaps.Placemark(e.get("coords"),{iconContent:"Отсюда"},{preset:"islands#greenStretchyIcon"}),r.geoObjects.add(i),createRoute()}function a(e){n(!0),i=s.getResultsArray()[e.get("index")],createRoute()}function t(e){n(),i=e.get("geoObjects").get(0),createRoute()}function n(e){e||s.hideResult(),i&&(r.geoObjects.remove(i),i=null)}var i,o=[55.649894,37.540347],r=new ymaps.Map("ya_map",{center:[55.652894,37.540347],zoom:15},{searchControlResults:1,searchControlNoCentering:!0,buttonMaxWidth:150}),m=new ymaps.Placemark(o,{iconContent:"Профэксп"},{preset:"islands#redStretchyIcon"}),s=r.controls.get("searchControl"),_=r.controls.get("geolocationControl"),c=new ymaps.control.ListBox({data:{content:"Как добраться"},items:[new ymaps.control.ListBoxItem("На автомобиле"),new ymaps.control.ListBoxItem("Общественным транспортом"),new ymaps.control.ListBoxItem("Пешком")],options:{itemSelectOnClick:!1}}),d=c.get(0),l=c.get(1),g=c.get(2);r.geoObjects.add(m),r.controls.add(c),d.events.add("click",function(e){createRoute("auto",e.get("target"))}),l.events.add("click",function(e){createRoute("masstransit",e.get("target"))}),g.events.add("click",function(e){createRoute("pedestrian",e.get("target"))}),r.events.add("click",e),s.events.add("resultshow",a),_.events.add("locationchange",t)};maps_opened=1,ymaps.ready(e)}}function show_order(e){order_block.classList.add("order-visible"),e.stopPropagation()}function close_order(e){order_block.classList.remove("order-visible")}function my_animate(e,a,t){var n=performance.now();requestAnimationFrame(function i(o){var r=o-n;r>a&&(r=a),e(r,a,t),r<a&&requestAnimationFrame(i)})}function header_opacity(e,a,t){e<a/2?header_ament.style.opacity=1-e/(a/2):(t(),header_ament.style.opacity=e/(a/2)-1)}function change_logo_img(){main_header_text_items[main_header_img_num].classList.add("changed-text_hidden"),logo_img_item.style.backgroundImage='url("'+main_images_list[main_header_img_num]+'")',main_header_img_num<main_images_list.length-1?main_header_img_num++:main_header_img_num=0,main_header_text_items[main_header_img_num].classList.remove("changed-text_hidden");var e=new XMLHttpRequest;e.open("GET",main_images_list[main_header_img_num]),main_image_precache.src=main_images_list[main_header_img_num]}function main_header_minimaze(e){var a=document.querySelector(".main-header__nav-block"),t=a.querySelectorAll(".main-header__info");if(e){a.classList.add("main-header_nav-minimaze"),a.querySelector(".main-header__nav").classList.add("main-header-nav_nav-minimaze"),document.querySelector(".main-header__logo-icon").classList.add("main-header-logo-icon_nav-minimaze"),a.querySelector(".main-header__name-text").classList.add("main-header-name-text_nav-minimaze");for(var n=0;n<t.length;n++)t[n].classList.add("main-header_info-minimaze")}else{a.classList.remove("main-header_nav-minimaze"),a.querySelector(".main-header__nav").classList.remove("main-header-nav_nav-minimaze"),document.querySelector(".main-header__logo-icon").classList.remove("main-header-logo-icon_nav-minimaze"),a.querySelector(".main-header__name-text").classList.remove("main-header-name-text_nav-minimaze");for(var i=0;i<t.length;i++)t[i].classList.remove("main-header_info-minimaze")}}window.onscroll=function(){ya_map.getBoundingClientRect().top<ya_map.clientHeight&&open_ya_maps()},main_content_paralax.onscroll=function(){main_header_minimaze(about.getBoundingClientRect().top<100?1:0),ya_map.getBoundingClientRect().top<ya_map.clientHeight&&open_ya_maps()},ya_map.getBoundingClientRect().top<ya_map.clientHeight&&open_ya_maps();for(var maps_opened=0,accordions_items=document.querySelectorAll(".accordion__item"),i=0;i<accordions_items.length;i++)accordions_items[i].addEventListener("click",function(){var e=this.querySelector(".accordion__content");e.classList.toggle("accordion_active");var a=this.querySelector(".accordion__expand-button");a.classList.toggle("accordion-button_reverse")});for(var amenties_targets=document.querySelectorAll(".content__target"),_i=0;_i<amenties_targets.length;_i++)amenties_targets[_i].addEventListener("click",show_order);for(var order_targets=document.querySelectorAll(".order__target"),_i2=0;_i2<order_targets.length;_i2++)order_targets[_i2].addEventListener("click",show_order);order_block.addEventListener("click",function(e){e.stopPropagation()}),order_close_btn.addEventListener("click",close_order),document.getElementsByTagName("body")[0].addEventListener("click",close_order);for(var can_opened_img=document.querySelectorAll(".grid-item__image-full"),_i3=0;_i3<can_opened_img.length;_i3++)can_opened_img[_i3].addEventListener("click",function(){this.classList.contains("grid-item-image-full_opened")?this.classList.remove("grid-item-image-full_opened"):this.classList.add("grid-item-image-full_opened")});var main_header_img_num=0,main_header_images_path="../assets/main-header/thematic/",main_image_precache=document.createElement("img"),main_images_list=["promyshlennaja_bezopasnost.jpg","buildings.jpg","gruzopodemnye_mehanizmy.jpg","documentation.jpg","sosudy_pod_davleniem.jpg","attestation.jpg"],main_header_text_items=motto.getElementsByTagName("h2");for(var _i4 in main_images_list)main_images_list[_i4]=main_header_images_path+main_images_list[_i4];var logo_img_item=document.querySelector(".main-header__backgroung-img"),main_header_timer=setInterval(change_logo_img,5e3);main_image_precache.src=main_images_list[main_header_img_num],open_nav.addEventListener("click",function(){navigation.classList.toggle("main-header__nav_open")});