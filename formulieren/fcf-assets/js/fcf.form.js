var optionsJV={rules:{"Select[]":{required:!0},Name:{required:!0,maxLength:100},Email:{required:!0,maxLength:100,email:!0},Telefoonnummer:{required:!0,maxLength:25},Bericht:{required:!0,maxLength:350}},colorWrong:"#dc3545",focusWrongField:!0,submitHandler:function(e,t,n){var r=document.getElementById("recaptcha-sitekey").value;grecaptcha.execute(r,{action:"contactform"}).then((function(r){t.append("recaptcha-token",r);var o=getButtonValue("fcf-button");disableButton("fcf-button",lang.server),n({url:e.getAttribute("action"),method:"POST",data:t,async:!0,callback:function(e){var t=!1;0==e.indexOf("Fail:")&&(showFailMessage(e,lang.server),enableButon("fcf-button",o),t=!0),0==e.indexOf("Error:")&&(showErrorMessage(e,lang.server),enableButon("fcf-button",o),t=!0),0==e.indexOf("Success")&&(showSuccessMessage(e),t=!0),0==e.indexOf("URL:")&&(doRedirect(e),t=!0),0==e.indexOf("Debug:")&&(showDebugMessage(e,lang.server),enableButon("fcf-button",o),t=!0),0==t&&(showErrorMessage("Error:"+lang.server.tryLater,lang.server),enableButon("fcf-button",o))}})}))}};function getButtonValue(e){return document.getElementById(e).innerText}function disableButton(e,t){document.getElementById(e).innerText=t.pleaseWait,document.getElementById(e).disabled=!0}function enableButon(e,t){document.getElementById(e).innerText=t,document.getElementById(e).disabled=!1}function showFailMessage(e,t){var n="<strong>"+t.configError+"</strong><br>";n+=e.substring(5),document.getElementById("fcf-status").innerHTML=n}function showErrorMessage(e,t){var n="<strong>"+t.errorMessage+":</strong><br>";n+=e.substring(6),document.getElementById("fcf-status").innerHTML=n}function showDebugMessage(e,t){var n="<strong>"+t.debugOutput+"</strong><br>";n+=e.substring(6),document.getElementById("fcf-status").innerHTML=n}function showSuccessMessage(e){e="<br><br>"+e.substring(8);var t=document.getElementById("fcf-thank-you").innerHTML;document.getElementById("fcf-thank-you").innerHTML=t+e,document.getElementById("fcf-status").innerHTML="",document.getElementById("fcf-form").style.display="none",document.getElementById("fcf-thank-you").style.display="block"}function doRedirect(e){var t=e.substring(4);window.location.href=t}