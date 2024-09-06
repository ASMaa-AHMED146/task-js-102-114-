//from 102 to 110
// let res=prompt("Print Number From-To", "Example: 5-20");
// console.log(res);
// let index=res.indexOf("-");
// let num1=res.slice(0,index);
// let num2=-res.slice(index);
// if(num1>num2)
// {
//     for(let i=num2;i<=num1;i++)
//     {
//         console.log(num2);
//         ++num2;
//     }
// }
// else
// {
//     for(let i=num1;i<=num2;i++)
//         {
//             console.log(num1);
//             ++num1;
//         }
// }


// let pop=document.querySelector(".we");
// let finish=document.querySelector("span ")
// let pp=setTimeout(function(){
//     pop.style.display="block";
// },5000);
// finish.onclick=function()
// {   
//     pop.remove();
// }


// let count1=document.querySelector(".count");
// let start1=setInterval(function(){
//     console.log(count1.innerHTML);
//     --(count1.innerHTML);
//     if(count1.innerHTML=='0')
//     {   console.log(count1.innerHTML);
//         clearInterval(start1)
//     }
// },1000);



// let count2=document.querySelector(".count");
// let start2=setInterval(function(){
//     console.log(count2.innerHTML);
//     --(count2.innerHTML);
//     if(count2.innerHTML=='0')
//     {   console.log(count2.innerHTML);
//         location.assign("https://elzero.org/");
        
//     }
// },1000);



// let count=document.querySelector(".count");
// let start=setInterval(function(){
//     console.log(count.innerHTML);
//     --(count.innerHTML);
//     if(count.innerHTML==5)
//     {   
//        window.open("https://elzero.org/","_blank","width=300,height=300,left=0,top=0") ;
//        clearInterval(start);
//     }
// },1000);

//---------------------------------------------------------------
//from 110 to 114

// change font-famly
// let font=document.querySelector("[name='font']");
// function fontchoice()
// {
//     let select=font.options[font.selectedIndex].value;
//     console.log(select);
//     window.localStorage.setItem("font_syle",select);
// }
// font.addEventListener("change",fontchoice);
// //change font-color

// let color=document.querySelector("[name='color']");
// function colorchoice()
// {
//     let select=color.options[color.selectedIndex].value;
//     console.log(select);
//     window.localStorage.setItem("font_color",select);
// }
// color.addEventListener("change",colorchoice);

// //change font size
// let size=document.querySelector("[name='size']");
// function sizechoice()
// {
//     let select=size.options[size.selectedIndex].value;
//     console.log(select);
//     window.localStorage.setItem("font_size",select);
// }
// size.addEventListener("change",sizechoice);


// document.body.style.fontSize=window.localStorage.font_size;
// document.body.style.color=window.localStorage.font_color;
// document.body.style.fontFamily=window.localStorage.font_syle;


let name1=document.querySelector(".name1");
let name2=document.querySelector(".name2");
let pass=document.querySelector("[type='password']");
let check=document.querySelector("[name='country']");

function catchvalues()
{
    name1.addEventListener("keyup",function()
    { console.log(name1.value);
      window.sessionStorage.setItem("first_name",name1.value);
   
    });
    name2.addEventListener("keyup",function()
    { console.log(name1.value);
      window.sessionStorage.setItem("sec_name",name2.value);
   
    });
    pass.addEventListener("keyup",function()
    { console.log(pass.value);
      window.sessionStorage.setItem("password",pass.value);
   
    });
    check.addEventListener("change",function()
{
    
    let select=check.options[check.selectedIndex].value;
    console.log(select);
    window.sessionStorage.setItem("selector",select);
})

}
function not_delete()
{
    catchvalues();
    name1.value=sessionStorage.getItem("first_name");
    name2.value=sessionStorage.getItem("sec_name");
    pass.value=sessionStorage.getItem("password");
    check.value=sessionStorage.getItem("selector");
}
not_delete();
