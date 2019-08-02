const names = ["Rose French", "Jack Smith", "Jeffery Keys", "Moe GOAT"];
const location = [
"9320 Wellington St., South River, Yukon",
"6135 White Oak Dr., Toowoomba, Queensland",
"450 Havnabakken St., Brusand, Bergen",
"4597 Geertekerkhof St., Alkmaar, Noord-Holland"];


function nameDisplay(){
    names[(Math.floor(Math.random()*4))];
}

function locationDisplay(){
    document.querySelectory("#locationText").innerHTML((location[(Math.floor(Math.random()*4))]));
}