console.log("hello from js")

counter = 1
url_base = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
extension = ".svg"


url = url_base + counter + extension
pokemon = document.getElementById('pokemon')
pokemon.src = url

back_button = document.getElementById('back-button')

back_button.onclick = function(){
  counter--;
  if( counter == 0)
    counter = 151

  url = url_base + counter + extension
  console.log(counter)
  pokemon.src = url
}

forward_button = document.getElementById('forward-button')

forward_button.onclick = function(){
  counter++;
  if (counter > 151)
    counter = 1

  url = url_base + counter + extension
  console.log(counter)
  pokemon.src = url
}
