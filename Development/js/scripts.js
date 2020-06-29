let food=prompt("أكتب اسم الطبق الذي الذي تريده");
switch(food) {
    case "1":
        console.log ("pizza")
      break;
    case "2":
        console.log ("Pasta")
      break;
    default:alert("لا يوجد هذا الطبق")
    console.log
    
  }
  let Number1=prompt("أكتب رقمك الأول");
  let Number2=prompt("اكتب الرقم الثاني");
  let Number3=prompt("أكتب ان كنت تريد استخدام عملية طرح، جمع، قسمة أو ضرب");
  
  switch(Number3) {
    case "ضرب":
      alert("ناتج الضرب هو"+Number1*Number2);
      break;
    case "جمع":
      alert("ناتج الجمع هو"+Number1+Number2);
      break;
      case  "قسمة":
      alert("ناتج القسمة هو"+Number1/Number2);
      break;
      case "طرح":
      alert("نانج الطرح هو"+Number1-Number2);
      break;
    default:alert("تم الحساب");
      
  }

  let age = parseInt(prompt("كم عمرك؟"));
 if(age<5){
     alert("انت في المرحلة الإبتدائية");

}
if(age>5 && age<18) {

    alert("انت في المدرسة");
}
if(age>17){
    alert("انت في الجامعة");
}

