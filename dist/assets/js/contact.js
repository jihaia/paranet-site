/*! pages-boiler-plate - v1.0.0 - 2017-03-01 */$(document).ready(function(){"use strict";function a(a){$("#contact-panel").html('<div class="alert alert-success" role="alert">'+a+"</div>")}$("#contact-form").validate({submitHandler:function(b){return $("#contact-panel").portlet({refresh:!0}),$.ajax({type:$(b).attr("method"),url:$(b).attr("action"),data:$(b).serialize(),dataType:"json",success:function(b){console.log(b),a("Thank you for Contacting Us! We will be in touch")},error:function(a){$("#contact-panel").portlet({refresh:!1,error:"We could not send your message, Please try Again"})}}),!1}}),$("#contact-panel").portlet({onRefresh:function(){}})});