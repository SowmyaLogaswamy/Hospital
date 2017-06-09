$(document).ready(function() {
  $("#hospitalform").submit(function(event) {
  var name =$("#name").val();
  var age = $("#age").val();
  var gender=$("input:radio[name=gender]:checked").val();
  var disease = $("#disease").val();
if(age>=1 && age<=30 && disease==="diabetics")
{
  $("#doctorname").hide();
 $("#doctorname").text("Dr.Doctor 1");
 $("#aboutdoctor").text("He is the best doctor for young diabetics people");
 $("#doctorname").delay(250).fadeIn(2500);
}


event.preventDefault();
  });

});
