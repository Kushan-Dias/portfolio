var  logo = document.querySelectorAll("#logo path");
logo.forEach(function(i){
  i.style.strokeDasharray = i.getTotalLength()+"px";
  i.style.strokeDashoffset = i.getTotalLength()+"px";
});

setTimeout(function(){
  window.location.href = 'home.html';
}, 9000);