const quote = document.getElementById('getQuote').addEventListener('click', () => {
	getQuote();
});

const getQuote = () => {
	 fetch("https://type.fit/api/quotes")
	.then((response) =>{
	 return response.json();
	})
	.then((data) => {
	let randomise = data[Math.floor(Math.random() * data.length)];
	document.getElementById('results').innerHTML = randomise.text + "<br>" + randomise.author;
});
}









