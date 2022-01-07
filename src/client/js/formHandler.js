
import {checkUrl} from './urlChecker'
let text = document.getElementById("text");
let agreement = document.getElementById("agreement");
let subjectivity = document.getElementById("subjectivity");
let confidence = document.getElementById("confidence");
let irony = document.getElementById("irony");
let scoretag = document.getElementById("score_tag");
let loader = document.getElementById("loader");

  export  const submitHandeler = async (e) => {
  e.preventDefault();

  //store the url in a variable
  const input_url = document.getElementById("article-url");
  const input = input_url.value;

  if (input === "") {
    alert("please input url to evaluate");
  } else {
    //check the url is valid or not
    const validUrl = checkUrl(input);

    // send the url to the server if it is valid
    if (validUrl) {
      loader.style.display = "block";
      const data = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status["code"] === "0") {
            loader.style.display = "none";
            text.innerText =""
            agreement.innerText = data.agreement;
            subjectivity.innerText = data.subjectivity;
            irony.innerText = data.irony;
            scoretag = data.score_tag;
            confidence.innerText = data.confidence;
          }
          if (data.status["code"] === "212") {
            loader.style.display = "none";
            text.innerText = "No content to analyze";
            agreement.innerText = "";
            subjectivity.innerText = "";
            irony.innerText = "";
            scoretag = "";
            confidence.innerText = "";
          }
        })
        .catch((error) => (text.innerText = error));
    } else {
      alert("please Enter Valid Url");
    }
  }
};
