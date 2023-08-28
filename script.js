async function getMatchData(){
    return await fetch("Enter_your_API_Key_after_being_registered_on_cricketdata[dot]org")
        .then(data => data.json())
        .then(data => {
            if(data.status!= "success") return;

            const matchesList = data.data;

            if(!matchesList) return[];

            const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');

            return relevantData;
        })
        .catch(e => console.log(e));
}

getMatchData(); 