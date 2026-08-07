
const cursor = document.querySelector(".cursor");

const light = document.querySelector(".cursor-light");


document.addEventListener("mousemove",(e)=>{


    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";


    light.style.left = e.clientX + "px";

    light.style.top = e.clientY + "px";


});


const texto = "Erick Henrique";


const typing = document.querySelector(".typing");


let index = 0;


function escrever(){


    if(index < texto.length){


        typing.innerHTML += texto.charAt(index);

        index++;


        setTimeout(escrever,120);


    }


}


escrever();


const cards = document.querySelectorAll(".card3d");


cards.forEach(card=>{


    card.addEventListener("mousemove",(e)=>{


        const rect = card.getBoundingClientRect();


        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;



        const rotateY =

        ((x / rect.width)-0.5)*20;



        const rotateX =

        ((y / rect.height)-0.5)*-20;



        card.style.transform = `

        perspective(1000px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        scale(1.05)

        `;



    });



    card.addEventListener("mouseleave",()=>{


        card.style.transform =

        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";


    });



});


const cardsLight = document.querySelectorAll(".card");



cardsLight.forEach(card=>{


    card.addEventListener("mousemove",(e)=>{


        const rect = card.getBoundingClientRect();


        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;



        card.style.setProperty(

            "--x",

            x+"px"

        );


        card.style.setProperty(

            "--y",

            y+"px"

        );


    });



});


const elementos = document.querySelectorAll(

"section, .card, .projeto"

);



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("mostrar");


        }


    });


},{

    threshold:0.15

});



elementos.forEach(el=>{


    observer.observe(el);


});


window.addEventListener("scroll",()=>{


    const header = document.querySelector("header");


    if(window.scrollY > 50){


        header.style.background =

        "rgba(5,8,22,.85)";


    }else{


        header.style.background =

        "rgba(255,255,255,.05)";


    }



});
