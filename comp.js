//Slider of main page
var index = 1;
var timer;
Show(index);
function nextSlide(n) 
{
    Show(index += n);
}
function Show(n) 
{
    clearTimeout(timer);
    timer = setTimeout(() => nextSlide(1), 2500);
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) 
  {
      index = 1
  }    
  if (n < 1) 
  {
      index = slides.length
  }
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";  
  }
  slides[index-1].style.display = "block";

}

//moreButton
function showMore() 
{
    if (document.getElementById('listHidden').style.display==="none") 
    {
       document.getElementById('listHidden').style.display="block"
    }
    else{
        document.getElementById('listHidden').style.display="none"
    }
}

//feedBackMore
function feedbackMore() 
{
    if (document.getElementById('formShort').style.display==="none") 
    {
       document.getElementById('formShort').style.display="block"
    }
    else{
        document.getElementById('formShort').style.display="none"
    }
}

 //checkMessageBox
var GetName=document.querySelector('#fullName');
var GetMail=document.querySelector('#mail');
var GetSubject=document.querySelector('#subject');
var GetMessage=document.querySelector('#text');

var GetButton=document.querySelector('#btnSend')

function checkInputs() 
{
    if (GetName.value=="" || GetMail.value=="" || GetSubject.value=="" || GetMessage.value=="")
    {
      alert('Please, fill all boxes!')  
    }
    else
    {
        alert('Your comment has been sent succesfully!')  
        GetName.value="";
        GetMail.value="";
        GetSubject.value="";
        GetMessage.value="";
    }
}