/**
 * Created by pontu on 2019-01-05.
 */

/*
javascript file for the login/signup page.
If the user is already "logged in" only a logout button is displayed.
If the user is not "logged in" two forms are displayed. Either a sign-up form or a
login form.
Takes care of the form validation.
 */
$(document).ready(function() {

  if($(window)[0].localStorage.getItem("login") != "LOGIN") {
    $("#loginForm").hide();
    $("#signupForm").hide();
    $("#loginArticle").html("<button id='logoutButton'>LOGOUT</button>");
    $("#logoutButton").css("margin-left", "45%");
    $("#logoutButton").click(function() {
      $(window)[0].localStorage.setItem("login", "LOGIN");
      $(window)[0].location.href = "FinalProjectHtml.html";
    });
  }
  //adds regex method to the validation plugin so that regex patterns can be used
  $.validator.addMethod("regex", function(value, element, regexpression) {
    return regexpression.test(value);
  });

  /*
  Takes care of login validation. Makes sure all input is correct and displays error messages if its not.
  Uses the jquery validate plugin.
   */
  $('#loginForm').validate({
    //Function that is called when submit button is pressed(if all input was valid).
    submitHandler: function() {
      $(window)[0].localStorage.setItem("login", $("#loginUsernameField").val());
      $(form).ajaxSubmit();
    },
    rules: {
      username: {
        required:true,
        minlength: 2,
        maxlength: 15,
        regex: /^[A-Za-z0-9]{2,15}$/
      },
      password: {
        required:true,
        minlength: 5,
        maxlength: 15,
        regex: /^[A-Za-z0-9]{5,15}$/
      },
    },
    messages: {
      username: {
        required: "Enter a username.",
        minlength: "Atleast 2 characters.",
        maxlength: "Not more than 15 characters.",
        regex: "Only use letters or numerals."
      },
      password: {
        required: "Password is required.",
        minlength: "Atleast 5 characters.",
        maxlength: "Not more than 15 characters.",
        regex: "Only letters or numerals."
      },
    }
  });

  /*
   Takes care of signup validation. Makes sure all input is correct and displays error messages if its not.
   Uses the jquery validate plugin.
   */
  $('#signupForm').validate({
    //Function that is called when submit button is pressed(if all input was valid).
    submitHandler: function() {
      $(window)[0].localStorage.setItem("login", $("#usernameField").val());
      $(form).ajaxSubmit();
    },
    rules: {
      username: {
        required:true,
        minlength: 2,
        maxlength: 15,
        regex: /^[A-Za-z0-9]{2,15}$/
      },
      password: {
        required:true,
        minlength: 5,
        maxlength: 15,
        regex: /^[A-Za-z0-9]{5,15}$/
      },
      password: {
        required:true,
        minlength: 5,
        maxlength: 15,
        regex: /^[A-Za-z0-9]{5,15}$/
      },
      firstName: {
        required:true,
        minlength: 1,
        maxlength: 25,
        regex: /^[A-Za-z]{1,25}$/
      },
      lastName: {
        required:true,
        minlength: 1,
        maxlength: 25,
        regex: /^[A-Za-z]{1,25}$/
      }
    },
    messages: {
      username: {
        required: "Enter a username.",
        minlength: "Atleast 2 characters.",
        maxlength: "Not more than 15 characters.",
        regex: "Only use letters or numerals."
      },
      password: {
        required: "Password is required.",
        minlength: "Atleast 5 characters.",
        maxlength: "Not more than 15 characters.",
        regex: "Only letters or numerals."
      },
      firstName: {
        required: "Enter first name.",
        minlength: "Too short",
        maxlength: "Too long",
        regex: "Invalid characters"
      },
      lastName: {
        required: "Enter first name.",
        minlength: "Too short",
        maxlength: "Too long",
        regex: "Invalid characters"
      }
    }
  });
});
