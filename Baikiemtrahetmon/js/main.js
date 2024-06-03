// function to get user data
function getUserData () {

    // stores values of user first name, last name. & phone
    var userFirst = document.getElementById ('firstName').value;
    var userLast = document.getElementById ('lastName').value;
    var userPhone = document.getElementById ('userPhone').value;
    
    // store value for radios (Gender & color)
    
    var userGenderEls = document.getElementsByClassName('userGender');
    
    // variable to store gender birth continent
    
    var userGender;
    
    // ========RESPONSES ON FAILURES===========
    
    // first name failure returns
    if(userFirst == "") {
    // adds a failure class if nothing is typed in the input box
        results.className = "failure";
    // adds text content if nothing is typed 
        results.textContent ="type your first name";
    // stops function if no answer
        return;
    
    };
    
    // last name failure returns
    if(userLast == "") {
    // adds a failure class if nothing is typed in the input box
        results.className = "failure";
    // adds text content if nothing is typed 
        results.textContent ="type your last name";
    // stops function if no answer
        return;
    
    };
    
    // phone failure returns
    if(userPhone == "") {
    // adds a failure class if nothing is typed in the input box
        results.className = "failure";
    // adds text content if nothing is typed 
        results.textContent ="type your phone";
    // stops function if no answer
        return;
    
    };
    
    // looping through elements with the class of Gender
    for(var i = 0; i <userGenderEls.length; i++) {
    // if gender is checked this will run
        if(userGenderEls[i].checked) {
    
            userGender = userGenderEls[i].value;
            };
    
        };

    
    // ========RESPONSES ON SUCCESS============
    
    // if everything passes add a class of success to results
        results.className = "success";
        // update the text content of results
        results.textContent = "thanks! updating now";
    
    // object for user data
    var userProfile = {
    
        name: userFirst + " " + userLast,
        phone: userPhone,
        gender: userGender,
    
    };
    
    console.log(userProfile);
    
    // diaplays results after given time
    
    setTimeout(function() {
            displayProfile(userProfile);
        }, 1000);
    };
    
    // displays profile information
    
    function displayProfile(userProfile) {
    
        console.log(userProfile);
    
        var userName   = document.getElementById('newUserName');
        var userGender = document.getElementById('newUserGender');
        var	userPhone  = document.getElementById('newuserPhone');
    
        userName.innerText   = "Welcome " + userProfile.name;
        userGender.innerText = "Gender: " + userProfile.gender;
        userPhone.innerText  = "Phone: " + userProfile.phone;
    
        // hide new profile form
        document.getElementById('newProfile').style.display = "none";
        // display updated profile data
        document.getElementById('updatedProfile').style.display = "block";
    
    }
        // add click function to element with id="sendDataButton"
    document.getElementById('sendDataButton').addEventListener('click', getUserData, false);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    