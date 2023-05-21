const mealName=document.getElementById("name")
const mealImage=document.getElementById("image")
const mealCook=document.getElementById('cook')
console.log(mealName)
console.log(mealImage)
console.log(mealCook)
async function logJSONData() {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const jsonData = await response.json();
  console.log(jsonData.meals[0].strInstructions);
 mealName.innerHTML=jsonData.meals[0].strMeal
 mealImage.src=jsonData.meals[0].strMealThumb
 mealCook.innerHTML=jsonData.meals[0].strInstructions
 
}
logJSONData()