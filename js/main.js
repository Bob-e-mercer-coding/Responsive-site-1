const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');
const showcase_cta = document.querySelector('#showcase_btn_cta');
const open_card_cta = document.querySelector('#openCards');

showcase_cta.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#showcase_btn_cta').textContent = "This button does nothing..yet!";
  console.log(e);
});

open_card_cta.addEventListener('click', (e) => {
  e.preventDefault();
  showCards();
  updateShowCards();
});

function showCards() {
  var x = document.querySelector("#cards");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function updateShowCards() {
  var x = document.querySelector("#openCards_header").textContent;
  if (x === "View my projects [+]") {
    document.querySelector("#openCards_header").textContent = "View my projects [-]";
  } else {
    document.querySelector("#openCards_header").textContent = "View my projects [+]";
  }
  console.log(x);
}

card1.addEventListener('click', (e) => {
  e.preventDefault();
  showFeature();
  console.log(e);
});

function showFeature() {
  var x = document.querySelector("#feature_wrapper");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  console.log(x);
}


// card1.addEventListener('mouseover', (e) => {
//   e.preventDefault();
//   //document.querySelector('#showcase').style.backgroundImage = "URL('../assets/blur_bg_2.jpg')";
//   document.querySelector('#showcase').style.backgroundImage = "url('../img/bg3.jpg')";
//   document.querySelector('#showcase').style.backgroundPosition = "0% 80%";
//   document.querySelector('#showcase_header').textContent = "Card 1";
//   document.querySelector('#showcase_description').textContent = "Card 1 description";
//   document.querySelector('#showcase_btn_cta').textContent = "Card 1";
//   console.log(e);
// });
//
// card1.addEventListener('mouseout', (e) => {
//   e.preventDefault();
//   //document.querySelector('#showcase').style.backgroundImage = "URL('../assets/blur_bg_2.jpg')";
//   document.querySelector('#showcase').style.backgroundImage = "url('../img/bg4.jpg')";
//   document.querySelector('#showcase').style.backgroundPosition = "0% 80%";
//   document.querySelector('#showcase_header').textContent = "Website showcase";
//   document.querySelector('#showcase_description').textContent = "Check out my latest projects!";
//   document.querySelector('#showcase_btn_cta').textContent = "CTA";
//   console.log(e);
// });
//
// card2.addEventListener('mouseover', (e) => {
//   e.preventDefault();
//   //document.querySelector('#showcase').style.backgroundImage = "URL('../assets/blur_bg_3.jpg')";
//   document.querySelector('#showcase').style.backgroundImage = "url('../img/bg5.jpg')";
//   document.querySelector('#showcase').style.backgroundPosition = "10% 60%";
//     document.querySelector('#showcase_header').textContent = "Card 2";
//   document.querySelector('#showcase_description').textContent = "Card 2 description";
//   document.querySelector('#showcase_btn_cta').textContent = "Card 2";
//   console.log(e);
// });
//
// card2.addEventListener('mouseout', (e) => {
//   e.preventDefault();
//   //document.querySelector('#showcase').style.backgroundImage = "URL('../assets/blur_bg_2.jpg')";
//   document.querySelector('#showcase').style.backgroundImage = "url('../img/bg4.jpg')";
//   document.querySelector('#showcase').style.backgroundPosition = "0% 80%";
//   document.querySelector('#showcase_header').textContent = "Website showcase";
//   document.querySelector('#showcase_description').textContent = "Check out my latest projects!";
//   document.querySelector('#showcase_btn_cta').textContent = "CTA";
//   console.log(e);
// });
//
// card3.addEventListener('mouseover', (e) => {
//   e.preventDefault();
//   //document.querySelector('#showcase').style.backgroundImage = "URL('../assets/blur_bg_4.jpg')";
//   document.querySelector('#showcase').style.backgroundImage = "url('../img/bg3.jpg')";
//   document.querySelector('#showcase').style.backgroundPosition = "0% 80%";
//     document.querySelector('#showcase_header').textContent = "Card 3";
//   document.querySelector('#showcase_description').textContent = "Card 3 description";
//   document.querySelector('#showcase_btn_cta').textContent = "Card 3";
//   console.log(e);
// });
//
// card3.addEventListener('mouseout', (e) => {
//   e.preventDefault();
//   //document.querySelector('#showcase').style.backgroundImage = "URL('../assets/blur_bg_2.jpg')";
//   document.querySelector('#showcase').style.backgroundImage = "url('../img/bg4.jpg')";
//   document.querySelector('#showcase').style.backgroundPosition = "0% 80%";
//   document.querySelector('#showcase_header').textContent = "Website showcase";
//   document.querySelector('#showcase_description').textContent = "Check out my latest projects!";
//   document.querySelector('#showcase_btn_cta').textContent = "CTA";
//   console.log(e);
// });
//
// card4.addEventListener('mouseover', (e) => {
//   e.preventDefault();
//   //document.querySelector('#showcase').style.backgroundImage = "URL('../assets/blur_bg_4.jpg')";
//   document.querySelector('#showcase').style.backgroundImage = "url('../img/bg7.jpg')";
//   document.querySelector('#showcase').style.backgroundPosition = "10% 50%";
//     document.querySelector('#showcase_header').textContent = "Card 4";
//   document.querySelector('#showcase_description').textContent = "Card 4 description";
//   document.querySelector('#showcase_btn_cta').textContent = "Card 4";
//   console.log(e);
// });
//
// card4.addEventListener('mouseout', (e) => {
//   e.preventDefault();
//   //document.querySelector('#showcase').style.backgroundImage = "URL('../assets/blur_bg_2.jpg')";
//   document.querySelector('#showcase').style.backgroundImage = "url('../img/bg4.jpg')";
//   document.querySelector('#showcase').style.backgroundPosition = "0% 80%";
//   document.querySelector('#showcase_header').textContent = "Website showcase";
//   document.querySelector('#showcase_description').textContent = "Check out my latest projects!";
//   document.querySelector('#showcase_btn_cta').textContent = "CTA";
//   console.log(e);
// });
