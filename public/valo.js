try{
const { API, Regions, Locales, Queue } = require("node-valorant-api");

const APIKey = "RGAPI-b7ab7758-8b9f-40a5-9333-5e02bb64d0f5";

const valorant = new API(Regions.NA, APIKey, Regions.ASIA);
console.log("Entered")

valorant.ContentV1.getContent(Locales["en-US"]).then(content => {
    console.log(content.characters.map(char => { return char.name }));
}).catch((error: RiotAPIError) => {
    // Error handling
    console.log(error.status_code);
})

valorant.AccountV1.getAccountByRiotID("OTAKUGAMINGYT", "1234").then(account => {
    valorant.MatchV1.getMatchesByPuuid(account.puuid).then(matches => {
        console.log(matches);
    })
});

}
catch(e){
	
	console.log(e)
}