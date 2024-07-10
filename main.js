// FIZZBUZZ O'YINI
var elHeroDesc = document.querySelector(".js-desc");
var elHeroErrorDesc = document.querySelector(".js-error-desc");
var enterNumber = Number(prompt("Bo'lmoqchi bo'lgan raqamingizni kiriting:"));
var a = 3;
var b = 5;

if (enterNumber < a) {
   elHeroErrorDesc.textContent = "Siz minimum berilgan qiymatdan pas son kiritdingiz yana urunib ko'ring";
} else if (enterNumber % a == 0 && enterNumber % b == 0) {
   elHeroDesc.textContent = "FizzBuzz";
} else if (enterNumber % a == 0) {
   elHeroDesc.textContent = "Fizz";
} else if (enterNumber % b == 0 ) {
   elHeroDesc.textContent = "Buzz";
} else {
   elHeroErrorDesc.textContent = `${enterNumber} soni 3 ga ham 5 ga ham bo'linmaydi`;
};