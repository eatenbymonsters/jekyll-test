var UltimaSynth=function(e,t){function n(){p=!0;var e=this.getAttribute("data-pitch");h=e,i()}function s(){if(p){var e=this.getAttribute("data-pitch");h=e,i()}}function a(){h=null,i()}function o(){p=!1,h=null,i()}function l(){var e=this.value;E=e,i()}function m(){var e=this.value,t=this.getAttribute("data-controlName");console.log(t+": "+e)}function i(){C[0].textContent=null==h?"--":h,L[0].textContent=E}for(var r=t.getElementsByClassName("synthKey"),u=e.getElementsByClassName("masterVolume"),d=e.getElementsByClassName("oscOneVolume"),c=e.getElementsByClassName("oscTwoVolume"),y=e.getElementsByClassName("oscOneWave"),g=e.getElementsByClassName("oscTwoWave"),v=e.getElementsByClassName("oscTwoPitch"),E=.5,h=null,p=!1,B=document.getElementById("testOutput"),C=B.getElementsByClassName("noteDisplay"),L=B.getElementsByClassName("volumeDisplay"),f=0;f<r.length;f++)r[f].addEventListener("mousedown",n,!1),r[f].addEventListener("mouseover",s,!1),r[f].addEventListener("mouseout",a,!1),r[f].addEventListener("mouseup",o,!1);document.addEventListener("mouseup",o,!1),u[0].addEventListener("change",l,!1),d[0].addEventListener("change",m,!1),c[0].addEventListener("change",m,!1),y[0].addEventListener("change",m,!1),g[0].addEventListener("change",m,!1),v[0].addEventListener("change",m,!1)},controlsWrapper=document.getElementById("synthControls"),keysWrapper=document.getElementById("synthKeys"),newSynth=UltimaSynth(controlsWrapper,keysWrapper);