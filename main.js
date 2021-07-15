var images =
["blob:https://web.whatsapp.com/b9cbf1f0-39f8-4409-b5d8-77b84a4d2048",
"blob:https://web.whatsapp.com/9b2e5fac-c241-4388-aae4-0c46d9558e05",
""



]
  




var names=["Nitin Agrawal" , "Abhilasha Agrawal" , "Phrahlad Gupta", "Madhu Gupta" , "Nitisha Agrawal" , "Nishchal Agrawal"];
var i=0;
function update(){
    i++;
  var number_of_family_member_array=6
  if(i>number_of_family_member_array)
  {
    i=0;
  }
  var updateimage= Image[i];
  var updatename= name[i];
  document.getElementById("family_member_image").src= updateimage;
  document.getElementById("family_member_name").innerHTML= updatename;
}

