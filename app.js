var formval = () => {
  // Get the updated values inside the function
  let name1 = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let confpass = document.getElementById("copass").value;

  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  //    is line ma ye check kr rha hun he form ki koi filed khali to ni han na

  if (name1 == "" || email == "" || pass == "" || confpass == "") {
    alert("PLEASE ALL FIELDS ARE REQUIRED");
    return false;

    //  is line ma ye check kr rha hun ye email ka format to sii han na
  } else if (!emailPattern.test(email)) {
    alert("PLEASE ENTER A VALID EMAIL ADDRESS");
    return false;

    //  is line ma ye check kr rha hun password ki lenght 6 se kam to ni han na
  } else if (pass.length !== 8) {
    alert("PASSWORD SHOULD BE OF 8 DIGITS ONLY");
    return false;
  }

  //   ====== PASSWORD VALIDTION FOR UPPERCASE ====

  let hasUppercase = false;
  for (let i = 0; i < pass.length; i++) {
    let charCode = pass.charCodeAt(i);
    // Check if the character is between ASCII codes 65 (A) and 90 (Z)
    if (charCode >= 65 && charCode <= 90) {
      hasUppercase = true;
      break; // Exit loop once we find an uppercase letter
    }
  }

  if (!hasUppercase) {
    alert("PASSWORD SHOULD CONTAIN AT LEAST ONE UPPERCASE LETTER");
    return false;
  }
  //   ====== PASSWORD VALIDATION FOR LOWERCASE ===========

  let lopass = false;
  for (var i = 0; i < pass.length; i++) {
    let charcode = pass.charCodeAt(i);
    if (charcode >= 97 && charcode <= 122) {
      lopass = true;
      break;
    }
  }

  if (!lopass) {
    alert("PASSWORD MUST BE CONTAIN AL LEAT ONE LOWERCASE LETER");

    // is line ye cehck kr rhun ye password jo han wo sme hune chaye
  } else if (pass !== confpass) {
    alert("PLEASE VALID PASSWORD");
  } else {
    return true;
  }
};

//  submit btn


