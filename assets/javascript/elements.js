let globalFound;
let elementValue;


function searchElement(word){
    let found;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	//console.log(elements[word]);
	if(elements[word]){
		var reply=elements[word];
        found=true;
        globalFound=true;
        elementValue=reply;
    } else {
		var reply = "Not Found";
        found=false;
        globalFound=false;
        elementValue=reply;
	}
    if(found) {
        console.log(reply.boil);
    } else {
        console.log(reply);
    }

}

let search = document.getElementById('search')

search.addEventListener("change", () => {
    let value = document.getElementById('search').value;
    let spectrum = document.getElementById('spectrum');
    console.log(value)
    spectrum.innerHTML = `<img src="assets/api/specturms/${value}_spectrum_visible.png" alt="">`
})