conf_count = 0;
        var jokes = new Array( );
        jokes[1]="I saw what you did over there. I’ve got eyes in the back of my head. Just kidding, only two realistically placed robotic eyes";
        jokes[2]="I can’t believe my eyes! Because I am not programmed to process human emotions such as surprise.";
        jokes[3]="What did the sailor turned ophthalmology student say to his professor? Eye, eye, captain.";
        jokes[4]="These jokes keep getting cornea and cornea.";
        jokes[5]="What do you call a deer with no eyes? No-eye-deer.";
        jokes[6]="Why did the phone wear glasses? Because it lost all of its contacts. ";

        var speak = new Array( );
        speak[0] = "don’t i look pretty?";
        speak[1] = "spin the wheel and win a great prize";
        speak[2] = "watch a video about Reinhausen";
        speak[3] = "Read a welcome message from our dean.";
        speak[4] = "Find out what classes you need for your major.";
        speak[5] = "";
        speak[6] = "Say Cheese! ";
        speak[7] = "Smile! You are about to become a robot.";
        speak[8] = "Pick a song and let’s boogie!";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
    switch (strContentsName)
    {
        case "Welcome":
            PlaySpeech("Hi, I’m Tracey, welcome to the Novartis booth. Please click around on my screen and then speak to my smart human friends in the booth.");
            break;
        case "Home":
            //writeCookie("NavigationState", true, 30);
           location.href = "../../maincontents.htm";
           break;
        case "Menu":
           location.href = "../../main.htm"; 
            break;
        case "Dirndl":
            PlaySpeech(speak[0]);
            location.href = "Contents/Dirndl/index.html";
            break;
        case "Selfie":
            PlaySpeech(speak[6]);
            location.href = "Contents/Selfie/index.html";
            break;
        case "Videos":
            PlaySpeech(speak[2]);
            location.href = "Contents/Videos/index.html";
            break;
        case "PrizeWheel":
            PlaySpeech(speak[1]);
            location.href = "Contents/PrizeWheel/index.html";
            break;
        case "Dancer":
            //PlaySpeech(speak[1]);
            location.href = "Contents/Dancer/index.html";
            break;
        
        case "Avatar":
            PlaySpeech(speak[7]);
            location.href = "Contents/RobotAvatar/index.htm";
            break;
        case "Dance":
            PlaySpeech(speak[8]);
            location.href = "Contents/Dance/index.html";
            break;
        case "Config":
            if(conf_count === 5)
            {
                conf_count = 0;
                location.href = "Config/Config.htm";
            }
            else
            {
                conf_count++;
            }

            break;
        case "go-mobile":
            location.href = "Contents/go-moobile/index.html";
            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall



function OnUserApproached()
{
    //PlaySpeech("Hello, welcome to the BWl Airport. Please press a button on my screen to begin.");
}


function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}

$(document).ready(function(){

    //$('.navigation').hide();
    /*$('.get-started').click(function(){
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
        
    });
    if (readCookie("NavigationState")) {
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
    }
    $('.close-menu').click(function(){
        $('.navigation').hide();
        $('.welcome-text, .get-started, footer').show();
        writeCookie("NavigationState", false, 30);
    });*/
    

    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
})


function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
           // window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Welcome to the Reinhausen booth");//I'm here to assist you, press any button on my screen to begin");
          
    }

    if(btn_info[1] == '1'){
        //window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Are you coming to our biergarten wednesday?");
        
    }
    if(btn_info[2] == '1'){
        //window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Come spin my wheel and win a prize");
    }
    if(btn_info[3] == '1'){
        //window.external.ChangeLanguage("en-us");
        SetVolume(1);
       window.external.PlaySpeech("");
        
    }
    if(btn_info[4] == '1'){
        FC_ContentsCall('Config');       
    }
}