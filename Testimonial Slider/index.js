const testimonials = [
    {
    name: "Cherise G",
    photoUrl:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text:"This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    },
    {
    name: "Rosetta Q",
    photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    text:"I would also like to say thank you to all your staff, Wow what great service, I love it! Apple impressed me on multiple levels.",
        },
    {
    name: "Nanete Q.",
    photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    text:"Thanks for the great service. The best on the net! We're loving it.",
    }
];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1  = document.querySelector(".username");
console.log("aaaa",textE1)

let idx = 0;

updateTestimonial()

function updateTestimonial() {
    if(idx === testimonials.length){
        idx = 0;
    }
    const { name, photoUrl, text } = 
    testimonials[idx];
    imgE1.src = photoUrl;
    // setTimeout(()=>{},5000)
    console.log(textE1)
    setTimeout(()=>{
    textE1.innerText = text;
    },10000)
    usernameE1.innerText = name;
    
    idx++;
    setTimeout(()=>{
        updateTestimonial()
    },2000)

}



