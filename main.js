var images = ["https://tse2.mm.bing.net/th?id=OIP.V59VKO7PrcdxV59b9OP36AHaC5&pid=Api&P=0&w=399&h=157" , "https://image.cnbcfm.com/api/v1/image/105820086-1553800673587preview.jpg?v=1553800689","https://tse3.mm.bing.net/th?id=OIP.0CePX93ITTsbsjoTOd_t0gHaEK&pid=Api&P=0&w=291&h=164", "https://tse2.mm.bing.net/th?id=OIP.sPW45DpevZ9ce4oHQK7qUQHaDt&pid=Api&P=0&w=372&h=187"];
var names = ["Family Members","Dad", "Mom", "Sisters"];
var i = 0;
function update()
{
i++;
var numbers_of_family_member_in_array = 5
if(i > numbers_of_family_member_in_array )
{
i = 0;
}
var updatedImage = images[i];
var updatedName  = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}