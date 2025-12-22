function pointer(grade) {
  switch (grade.toUpperCase()) {
      case "O":
          return 10;
      case "A+":
          return 9;
      case "A":
          return 8;
      case "B+":
          return 7;
      case "B":
          return 6;
      case "C":
          return 5;
      case "F":
          return 0;
      default:
          return 0; 
  }
}

function calculateSGPA() {
  let ethics = document.getElementById("ethics").value;
  let os = document.getElementById("os").value;
  let toc = document.getElementById("toc").value;
  let dmdw = document.getElementById("dmdw").value;
  let aiml = document.getElementById("aiml").value;
  let ise = document.getElementById("ise").value;
  let aimlLab = document.getElementById("aimlLab").value;
  let osLab = document.getElementById("osLab").value;
  let tocLab = document.getElementById("tocLab").value;

  let a = pointer(os) * 3;
  let b = pointer(toc) * 3;
  let c = pointer(aiml) * 3;
  let d = pointer(dmdw) * 3;
  let e = pointer(ethics) * 2;
  let f = pointer(ise) * 2;
  let g = pointer(osLab) * 1.5;
  let h = pointer(tocLab) * 1.5;
  let i = pointer(aimlLab) * 1.5;
 

  let sgpa = ((a + b + c + d + e + f + g + h + i) / 205) * 10;

  document.getElementById("result").innerHTML = "Your SGPA will be: " + sgpa.toFixed(2);
}