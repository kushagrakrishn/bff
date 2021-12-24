 nameofthestudentarray=[];
 function submit(){
     var name_1=document.getElementById("name1").value;
     var name_2=document.getElementById("name2").value;
     var name_3=document.getElementById("name3").value;
     var name_4=document.getElementById("name4").value;
     var name_5=document.getElementById("name5").value;

     nameofthestudentarray.push(name_1);
     nameofthestudentarray.push(name_2);
     nameofthestudentarray.push(name_3);
     nameofthestudentarray.push(name_4);
     nameofthestudentarray.push(name_5);

     console.log(nameofthestudentarray);

     document.getElementById("displayname").innerHTML=nameofthestudentarray;
     document.getElementById("submitbt").style.display="none";
     document.getElementById("sortbt").style.display="inline-block";
     }
function sorting(){
    nameofthestudentarray.sort();
    console.log(nameofthestudentarray);
    document.getElementById("displayname").innerHTML=nameofthestudentarray;
}     