const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

showFaq = (x,y)=> {
  if (document.querySelectorAll(".faq p")[y].style.display !== "block") {
    document.querySelectorAll(".faq p")[y].style.display = "block"
  }
  else {
    document.querySelectorAll(".faq p")[y].style.display = "none"
  }

}

 

function createFaq() {
  let mainDiv = document.createElement("div");
  let div = document.createElement("div");
  let title = document.createElement("h3");
  let btn = document.createElement("div");
  let ans = document.createElement("p");

  mainDiv.setAttribute("class", "faq");
  div.setAttribute("class", "faq_header");
  btn.setAttribute("class", "show_btn");
  ans.setAttribute("class", "hidden");
  btn.innerText = "+";
  btn.style.display = "flex";
  btn.style.justifyContent = "center";
  btn.style.alignItems = "center";

  let allElements = {
    mainDiv,div,title,btn,ans
  }

  return allElements;
}

faqData.forEach(e =>{
  let allFaq = createFaq()

  allFaq.title.innerText = e.question;
  allFaq.ans.innerText = e.answer;
  allFaq.mainDiv.setAttribute("id",e.id);
  accordianBody.append(allFaq.mainDiv);

  allFaq.mainDiv.append(allFaq.div);
  allFaq.div.append(allFaq.title);
  allFaq.div.append(allFaq.btn);
  allFaq.mainDiv.append(allFaq.ans);
})

let allBtns = document.querySelectorAll(".show_btn")


allBtns.forEach((e,x)=>{
  e.addEventListener("click",()=>{
    showFaq(e,x)
  })
})


function btnStatusUpdate() {
   
}


