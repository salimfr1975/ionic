window.onload=function()
{

    var access_btn = document.querySelector("#access-btn");

    access_btn.onclick=function()
    {
        
        var real_pwd = localStorage.getItem("password");
        var user_pwd = btoa(document.querySelector("#user-input").value);
        if(real_pwd == user_pwd)
        {
            document.querySelector("#salim").style.display="block";
          
            document.querySelector("#container").style.display="none";
            document.querySelector("#password-wrong").style.display="none";
            
        }
        else
        {
            document.querySelector("#password-wrong").style.display="block";
        }
    }
    var set_btn = document.querySelector("#set-btn");
    set_btn.onclick=function()
    { 
        
        var user_input = document.querySelector("#user-input").value;
        if(user_input == "")
        {
            document.querySelector("#password-empty-notice").style.display="block";
        }
        else
        {
            document.querySelector("#password-empty-notice").style.display="none";
            localStorage.setItem("password",btoa(user_input));
            window.location=location.href;
        }
        
    }

    if(localStorage.getItem("password")==null)
    {
        document.querySelector("#set-btn").style.display="block";
        document.querySelector("#access-btn").style.display="none";
    }
    else
    {
        document.querySelector("#set-btn").style.display="none";
        document.querySelector("#access-btn").style.display="block";
    }

    
    var img1btn = document.querySelector("#img1");
    img1btn.onclick=function()
    {
        document.querySelector("#salim").style.display="none";
        document.querySelector("#product1").style.display="block";
        
    }

    var img2btn = document.querySelector("#img2");
    img2btn.onclick=function()
    {
        document.querySelector("#salim").style.display="none";
        document.querySelector("#product2").style.display="block";
        
    }

    var img3btn = document.querySelector("#img3");
    img3btn.onclick=function()
    {
        document.querySelector("#salim").style.display="none";
        document.querySelector("#product3").style.display="block";
        
    }

    var img4btn = document.querySelector("#img4");
    img4btn.onclick=function()
    {
        document.querySelector("#salim").style.display="none";
        document.querySelector("#product4").style.display="block";
        
    }
   

    var backbtn1 = document.querySelector("#back-btn1");
    backbtn1.onclick=function()
    {
        document.querySelector("#salim").style.display="block";
        document.querySelector("#product1").style.display="none";

    }

    var backbtn2 = document.querySelector("#back-btn2");
    backbtn2.onclick=function()
    {
        document.querySelector("#salim").style.display="block";

        document.querySelector("#product2").style.display="none";
    }

    var backbtn3 = document.querySelector("#back-btn3");
    backbtn3.onclick=function()
    {
        document.querySelector("#salim").style.display="block";

        document.querySelector("#product3").style.display="none";
    }

    var backbtn4 = document.querySelector("#back-btn4");
    backbtn4.onclick=function()
    {
        document.querySelector("#salim").style.display="block";

        document.querySelector("#product4").style.display="none";
    }

   


    

    
    
    
    
    var add_btn = document.querySelector("#add-btn");
    add_btn.onclick=function()
    {
        document.querySelector("#contact-form").style.display="block";
        document.querySelector("#save-btn").style.display="block";
        document.querySelector("#add-btn").style.display="none";
    }
    var save_btn = document.querySelector("#save-btn");
    save_btn.onclick=function(){
        alert("Welcome");
        var contact_name = document.querySelector("#contact-name").value;
        var contact_adresse = document.querySelector("#contact-adresse").value;
        var contact_tel = document.querySelector("#contact-tel").value;
        var contact_email = document.querySelector("#contact-email").value;
        if(contact_name == "")
        {

            alert("fdgdfg");            
        }
        else{
            if(localStorage.getItem("contact")==null)
        {
            var object =
            [
                {
                    name : contact_name,
                    adresse : contact_adresse,
                    tel : contact_tel,
                    email :contact_email
                }
            ];
            var data = JSON.stringify(object);
            localStorage.setItem("contact",data);
        }
        else
        {
            var abc = localStorage.getItem("contact");
            var data = JSOn.parse(abc);
            var object = 
            {
                    name : contact_name,
                    adresse : contact_adresse,
                    tel : contact_tel,
                    email :contact_email
            };
            data.push(object);
            var store=JSON.stringify(data);
            localStorage.setItem("contact",store);
        }
        document.querySelector("#save-btn").style.display="none";
        document.querySelector("#add-btn").style.display="block";
        document.querySelector("#contact-form").style.display="none";
        }
        
    }

   
    
}

