
var slide1=document.getElementById('slide1');
var slide2=document.getElementById('slide2');
var slide3=document.getElementById('slide3');
var slide4=document.getElementById('slide4');
var slide5=document.getElementById('slide5');
var slide11=document.getElementById('slide11');
var dot1=document.getElementById('dot1');
var dot2=document.getElementById('dot2');
var dot3=document.getElementById('dot3');
var dot4=document.getElementById('dot4');
var dot5=document.getElementById('dot5');
var frag=document.getElementById('frag');
var sans=document.getElementById('sans');
var too=document.getElementById('too');
var lig1=document.querySelectorAll('lig');
var serif=document.getElementById('serif');
var box1=document.getElementById('box1');
var f1=document.getElementById('f1');
var f2=document.getElementById('f2');
var f3=document.getElementById('f3');
var box1Anime=document.getElementById('box1Anime');
var box2Anime=document.getElementById('box2Anime');
var box3Anime=document.getElementById('box3Anime');
var box4Anime=document.getElementById('box4Anime');
var circle1=document.getElementById('circle1');
var B51=document.getElementById('B51');
var box5=document.getElementsByClassName('box5');
var layoutBox1=document.getElementById('layoutBox1');
var moveIt=document.getElementById('moveIt');
var moveIt2=document.getElementById('moveIt2');
var moveIt3=document.getElementById('moveIt3');
var moveIt4=document.getElementById('moveIt4');
var moveIt5=document.getElementById('moveIt5');
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var img3=document.getElementById('img3');
var img4=document.getElementById('img4');
var img5=document.getElementById('img5');
var header=document.getElementById('header');

circle1.style.height=" "+B51.offsetWidth+"px";
circle1.style.width=" "+B51.offsetWidth+"px";
circle1.style.maxHeight=" "+B51.offsetWidth+"px";
var i=1;
var x=window.innerHeight;
slide11.style.transform="translateX(0)";
window.addEventListener('scroll',fade);
dot1.onclick=()=>
{
dot1.style.backgroundColor="white";
dot2.style.backgroundColor="transparent";
dot3.style.backgroundColor="transparent";
dot4.style.backgroundColor="transparent";
dot5.style.backgroundColor="transparent";
slide1.style.transform="translateX(0)";
slide2.style.transform="translateX(100%)";
slide3.style.transform="translateX(200%)";
slide4.style.transform="translateX(300%)";
slide5.style.transform="translateX(400%)";

frag.innerText="Fragment";
sans.innerText="Såńș*";
too.innerText="to→";
serif.innerText="Sëŗíf";
f1.innerText="💠Fragment💠";
f3.innerText="Pangram Pangram’s 35th release uses the latest technology, gracefully oscillating between an elegant, highly contrasted Serif face, a revival mid-serif called Glare, and a strong Sans.";
if(i!=1)
{
frag.style.animation = 'none';
frag.offsetHeight;
frag.style.animation = null; 
sans.style.animation = 'none';
sans.offsetHeight;
sans.style.animation = null; 
too.style.animation = 'none';
too.offsetHeight;
too.style.animation = null; 
serif.style.animation = 'none';
serif.offsetHeight;
serif.style.animation = null; 
}
i=1;
}
dot2.onclick=()=>
{
dot2.style.backgroundColor="white";
dot1.style.backgroundColor="transparent";
dot3.style.backgroundColor="transparent";
dot4.style.backgroundColor="transparent";
dot5.style.backgroundColor="transparent";
slide1.style.transform="translateX(-100%)";
slide2.style.transform="translateX(0)";
slide3.style.transform="translateX(100%)";
slide4.style.transform="translateX(200%)";
slide5.style.transform="translateX(300%)";

frag.innerText="Æ⅞¡ØЖ";
sans.innerText="Nēüè";
too.innerText="§@°";
serif.innerText="2.0";
f1.innerText="Neue Machina 2.0";
lig1.forEach(val=>{
    val.style.fontFamily="neue-machina-inktrap-regular,Neue Montreal ";
    }
    )
f3.innerText="It now comes in a Inktrap cut as well as a Plain cut for your more subtle designs. Each cut comes with their corresponding italics and everything is variable for maximum versatility!";
if(i!=2){
    frag.style.animation = 'none';
    frag.offsetHeight;
    frag.style.animation = null; 
    sans.style.animation = 'none';
    sans.offsetHeight;
    sans.style.animation = null; 
    too.style.animation = 'none';
    too.offsetHeight;
    too.style.animation = null;   
serif.style.animation = 'none';
serif.offsetHeight;
serif.style.animation = null; 
}
i=2;
}


dot3.onclick=()=>
{
dot3.style.backgroundColor="white";
dot2.style.backgroundColor="transparent";
dot1.style.backgroundColor="transparent";
dot4.style.backgroundColor="transparent";
dot5.style.backgroundColor="transparent";


slide1.style.transform="translateX(-200%)";
slide2.style.transform="translateX(-100%)";
slide3.style.transform="translateX(0)";
slide4.style.transform="translateX(100%)";
slide5.style.transform="translateX(200%)";
frag.innerText="Radio";
sans.innerText="Grotesk";
too.innerText="2.0!⬎";
serif.innerText="+Italics";
f1.innerText="Radio Grotesk 2.0!";
f3.innerText="The very popular Radio Grotesk just got even better and bigger! Now with 16 styles, Italics and Cyrillic.";
if(i!=3){
    frag.style.animation = 'none';
    frag.offsetHeight;
    frag.style.animation = null; 
    sans.style.animation = 'none';
    sans.offsetHeight;
    sans.style.animation = null; 
    too.style.animation = 'none';
    too.offsetHeight;
    too.style.animation = null;      
serif.style.animation = 'none';
serif.offsetHeight;
serif.style.animation = null;
}
i=3;
}
dot4.onclick=()=>
{
dot4.style.backgroundColor="white";
dot2.style.backgroundColor="transparent";
dot3.style.backgroundColor="transparent";
dot1.style.backgroundColor="transparent";
dot5.style.backgroundColor="transparent";
slide1.style.transform="translateX(-300%)";
slide2.style.transform="translateX(-200%)";
slide3.style.transform="translateX(-100%)";
slide4.style.transform="translateX(0)";
slide5.style.transform="translateX(100%)";

frag.innerText="Mori☀";
sans.innerText="is⏎";
too.innerText="③④";
serif.innerText="Live!";
f1.innerText="Very Mori";
f3.innerText="Mori is a versatile and sophisticated gothic sans serif inspired by contemporary Japanese design, best suited for editorial, graphic design and branding.";

if(i!=4)
{
    frag.style.animation = 'none';
    frag.offsetHeight;
    frag.style.animation = null; 
    sans.style.animation = 'none';
    sans.offsetHeight;
    sans.style.animation = null; 
    too.style.animation = 'none';
    too.offsetHeight;
    too.style.animation = null;    
serif.style.animation = 'none';
serif.offsetHeight;
serif.style.animation = null; 
}
i=4;
}

dot5.onclick=()=>
{

dot5.style.backgroundColor="white";
dot2.style.backgroundColor="transparent";
dot3.style.backgroundColor="transparent";
dot4.style.backgroundColor="transparent";
dot1.style.backgroundColor="transparent";
slide5.style.transform="transform(0)";
slide1.style.transform="transfrom(-400%)";
slide1.style.transform="translateX(-400%)";
slide2.style.transform="translateX(-300%)";
slide3.style.transform="translateX(-200%)";
slide4.style.transform="translateX(-100%)";
slide5.style.transform="translateX(0)";
frag.innerText="Font";
sans.innerText="Starter";
too.innerText="Pack";
serif.innerText="4.0!";
f1.innerText="FSP 4.0 is Here!";
f3.innerText="The font starter pack is the best option for every situation from the biggest client to your close family.";
if(i!=5)
{
    frag.style.animation = 'none';
    frag.offsetHeight;
    frag.style.animation = null; 
    sans.style.animation = 'none';
    sans.offsetHeight;
    sans.style.animation = null; 
    too.style.animation = 'none';
    too.offsetHeight;
    too.style.animation = null;  
serif.style.animation = 'none';
serif.offsetHeight;
serif.style.animation = null; 
}
i=5;
}

function fade(){
slide11.style.opacity= 1- (window.scrollY/x);
slide1.style.opacity= 1- (window.scrollY/x);
slide2.style.opacity= 1- (window.scrollY/x);
slide3.style.opacity= 1- (window.scrollY/x);
slide4.style.opacity= 1- (window.scrollY/x);
slide5.style.opacity=1- (window.scrollY/x);

serif.style.transform="translateY(-"+window.scrollY/7 +"%)";
sans.style.transform="translateY(-"+window.scrollY/7 +"%)";
too.style.transform="translateY(-"+window.scrollY/10+"%)";
box1.style.transform="translateY(-"+window.scrollY/10+"%)";
var ch=25- window.scrollY*37.5/(3*x);
var ch2= window.scrollY*100/(4*x);
var ch3=10- window.scrollY*15/(3*x);
var ch4=15-window.scrollY*22.5/(3*x);
var ch5= -(100- window.scrollY*80/(4*x));
var ch6= (100*window.scrollY/x);
box2Anime.style.transform= "translateY(" +ch+"%)";
box3Anime.style.transform= "translateY(" +ch3+"%)";
box4Anime.style.transform= "translateY(" +ch4+"%)";
moveIt.style.transform="translateY(" +ch5 +"%)";
moveIt2.style.transform="translateY(" +(ch5+8) +"%)";
moveIt3.style.transform="translateY(" +(ch5) +"%)";
moveIt4.style.transform="translateY(" +(ch5-5) +"%)";
moveIt5.style.transform="translateY(" +(ch5) +"%)";

img1.style.transform="translateY("+ ch6+"%)";
img2.style.transform="translateY("+ ch6+"%)";
img3.style.transform="translateY("+ ch6+"%)";
img4.style.transform="translateY("+ ch6+"%)";
img5.style.transform="translateY("+ ch6+"%)";
circle1.style.transform="transform 1s";
}

