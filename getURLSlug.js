//"for your information -> FYI"
//"What the fuck"
function getURLSlug(words) {
	return words
	.replace(/\s+/g,'-')
	.toLowerCase();
	
}