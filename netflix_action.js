let c1=0, c2=0, c3=0, c4=0, c5=0, c6=0;

function myfunction(){
setTimeout(()=>{
    
    if(c1==1)
    {
        document.getElementById('bar1icon').style.transform="rotate(0deg)";
        document.getElementById('barans1').style.maxHeight="0px";
        // document.getElementById('barans1').style.overflow="hidden";
        document.getElementById('barans1').style.paddingTop="0px";
        document.getElementById('barans1').style.paddingBottom="0px";
        document.getElementById('barans1').style.borderTopStyle="hidden";
    }

    if(c2==1)
    {
        document.getElementById('bar2icon').style.transform="rotate(0deg)";
        document.getElementById('barans2').style.maxHeight="0px";
        document.getElementById('barans2').style.paddingTop="0px";
        document.getElementById('barans2').style.paddingBottom="0px";
        document.getElementById('barans2').style.borderTopStyle="hidden";
    }


    if(c3==1)
    {
        document.getElementById('bar3icon').style.transform="rotate(0deg)";
        document.getElementById('barans3').style.maxHeight="0px";
        document.getElementById('barans3').style.paddingTop="0px";
        document.getElementById('barans3').style.paddingBottom="0px";
        document.getElementById('barans3').style.borderTopStyle="hidden";
    }

    if(c4==1)
    {
        document.getElementById('bar4icon').style.transform="rotate(0deg)";
        document.getElementById('barans4').style.maxHeight="0px";
        document.getElementById('barans4').style.paddingTop="0px";
        document.getElementById('barans4').style.paddingBottom="0px";
        document.getElementById('barans4').style.borderTopStyle="hidden";
    }

    if(c5==1)
    {
        document.getElementById('bar5icon').style.transform="rotate(0deg)";
        document.getElementById('barans5').style.maxHeight="0px";
        document.getElementById('barans5').style.paddingTop="0px";
        document.getElementById('barans5').style.paddingBottom="0px";
        document.getElementById('barans5').style.borderTopStyle="hidden";
    }
    
    if(c6==1)
    {
        document.getElementById('bar6icon').style.transform="rotate(0deg)";
        document.getElementById('barans6').style.maxHeight="0px";
        document.getElementById('barans6').style.paddingTop="0px";
        document.getElementById('barans6').style.paddingBottom="0px";
        document.getElementById('barans6').style.borderTopStyle="hidden";
    }
},35);
}


function fun1(){
    if(c1==0){
        document.getElementById('bar1icon').style.transform="rotate(45deg)";
        // document.getElementById('barans1').style.overflow="visible";
        document.getElementById('barans1').style.paddingTop="25px";
        document.getElementById('barans1').style.paddingBottom="25px";
        document.getElementById('barans1').style.maxHeight="750px";
        document.getElementById('barans1').style.borderTop="3px solid black";
    }

    setTimeout(()=>{ c1=1-c1; c2=0; c3=0; c4=0; c5=0; c6=0;},40);
}

function fun2(){
    if(c2==0){
        document.getElementById('bar2icon').style.transform="rotate(45deg)";
        
        document.getElementById('barans2').style.maxHeight="350px";
        document.getElementById('barans2').style.paddingTop="25px";
        document.getElementById('barans2').style.paddingBottom="25px";
        document.getElementById('barans2').style.borderTop="3px solid black";
    }
    setTimeout(()=>{c2=1-c2; c1=0; c3=0; c4=0; c5=0; c6=0;},40);
}

function fun3(){
    if(c3==0){
        document.getElementById('bar3icon').style.transform="rotate(45deg)";
        
        document.getElementById('barans3').style.maxHeight="900px";
        document.getElementById('barans3').style.paddingTop="25px";
        document.getElementById('barans3').style.paddingBottom="25px";
        document.getElementById('barans3').style.borderTop="3px solid black";
    }
    setTimeout(()=>{c3=1-c3; c1=0; c2=0; c4=0; c5=0; c6=0;},40);
}

function fun4(){
    if(c4==0){
        document.getElementById('bar4icon').style.transform="rotate(45deg)";
        
        document.getElementById('barans4').style.maxHeight="400px";
        document.getElementById('barans4').style.paddingTop="25px";
        document.getElementById('barans4').style.paddingBottom="25px";
        document.getElementById('barans4').style.borderTop="3px solid black";
    }
    setTimeout(()=>{c4=1-c4; c1=0; c2=0; c3=0; c5=0; c6=0;},40);
}

function fun5(){
    if(c5==0){
        document.getElementById('bar5icon').style.transform="rotate(45deg)";
        
        document.getElementById('barans5').style.maxHeight="400px";
        document.getElementById('barans5').style.paddingTop="25px";
        document.getElementById('barans5').style.paddingBottom="25px";
        document.getElementById('barans5').style.borderTop="3px solid black";

    }
    setTimeout(()=>{c5=1-c5; c1=0; c2=0; c3=0; c4=0; c6=0;},40);
}

function fun6(){
    if(c6==0){
        document.getElementById('bar6icon').style.transform="rotate(45deg)";
       
        document.getElementById('barans6').style.maxHeight="750px";
        document.getElementById('barans6').style.paddingTop="25px";
        document.getElementById('barans6').style.paddingBottom="25px";
        document.getElementById('barans6').style.borderTop="3px solid black";
    }
    setTimeout(()=>{    c6=1-c6; c1=0; c2=0; c3=0; c4=0; c5=0;},40);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function highlight1(){
    setTimeout(()=>{
        document.getElementById('langbox1').style.border="1px solid white";
    },1);
}
function highlight2(){
    setTimeout(()=>{
        document.getElementById('langbox2').style.border="1px solid white";
    },1);
}
function removehighlight(){
    document.getElementById('langbox1').style.border="1px solid #aaa";
    document.getElementById('langbox2').style.border="1px solid #aaa";
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function showerrormessage() {
    if( document.getElementById('errormessage1').innerHTML=="Email is required" ||  document.getElementById('errormessage1').innerHTML=="please enter a valid email address")
    {
        document.getElementById('errormessage1').style.display="block";
        document.getElementById('a').style.border="1px solid white";
        document.getElementById('a').style.borderBottom="2px solid #ffa00a";
    }
}


function inval() {
    document.getElementById('errormessage1').style.display="none";
    if(document.getElementById('a').value.length<5)
    {
        document.getElementById('errormessage1').innerHTML="Email is required";
    }
    else{
        var x = document.getElementById('a').value.match('^[a-zA-Z-0-9]+@[a-zA-Z]+[.][a-zA-Z]+$');
        if(!x)
        {
            document.getElementById('errormessage1').innerHTML="please enter a valid email address";
            return 1;
        }
        else 
        {
            document.getElementById('errormessage1').innerHTML="";
            document.getElementById('errormessage1').style.display="none";
            document.getElementById('a').style.border="1px solid rgb(0, 120, 255)";
        }
    }
}

function validchech(event){
    if(document.getElementById('a').value.length==0)
    document.getElementById('errormessage1').innerHTML="Email is required";
    if(inval())
    event.preventDefault();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function showerrormessage2() {
    if( document.getElementById('errormessage2').innerHTML=="Email is required" ||  document.getElementById('errormessage2').innerHTML=="please enter a valid email address")
    {
        document.getElementById('errormessage2').style.display="block";
        document.getElementById('b').style.border="1px solid white";
        document.getElementById('b').style.borderBottom="2px solid #ffa00a";
    }
}


function inval2() {
    document.getElementById('errormessage2').style.display="none";
    if(document.getElementById('b').value.length<5)
    document.getElementById('errormessage2').innerHTML="Email is required";
    else{
        var x = document.getElementById('b').value.match('^[a-zA-Z-0-9]+@[a-zA-Z]+[.][a-zA-Z]+$');
        if(!x)
        {
            document.getElementById('errormessage2').innerHTML="please enter a valid email address";
            return 1;
        }
        else
        {
            document.getElementById('errormessage2').innerHTML="";
            document.getElementById('errormessage2').style.display="none";
            document.getElementById('b').style.border="1px solid rgb(0, 120, 255)";
        }
    }
}

function validchech2(event){
    if(document.getElementById('b').value.length==0)
    document.getElementById('errormessage2').innerHTML="Email is required";
    if(inval2())
    event.preventDefault();
}