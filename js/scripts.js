function sliderChange(value){
  if (value > 15) {
    $("#textDropDown1").slideDown("slow");
  } else {
    $("#textDropDown1").slideUp("slow");
  }

  if (value > 50) {
    $("#textDropDown2").slideDown("slow");
  } else {
    $("#textDropDown2").slideUp("slow");
  }

  if (value > 75) {
    $("#textDropDown3").slideDown("slow");
  } else {
    $("#textDropDown3").slideUp("slow");
  }

}
