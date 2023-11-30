console.log('Hello Project 1');

const url='https://restcountries.com/v3.1/name/bharat';

const req= new XMLHttpRequest();

req.open('GET',url)

req.onreadystatechange=function(){
    if (this.readyState === 4) {
        
        req.addEventListener('load',function(){
            // console.log(typeof(this.responseText));
        let [api]= JSON.parse(this.responseText);

        const flag=api.flags.png;
        const name =api.name.common;
        const [capital] =api.capital;
        const lang=api.languages.hin;
        const population=api.population;
        const [continents] = api.continents;
        console.log(api);
        // console.log(api.flags.png);
        // console.log(api.name.common);
        // console.log(api.capital[0]);
        // console.log(api.languages.hin);
        // console.log(api.population);
        // console.log(api.continents[0]);

        const card=` <div class="card">
                    <div class="img"> 
                    <img src="${flag}" alt="ind-flag" height="180px" width="290px">
                    </div>
                    <hr>
                    <p class="name">${name}</p>
                    <hr>
                    <div class="info">
                    <p>Capital : ${capital}</p>
                    <p>Netive Language : ${lang}</p>
                    <p>Population : ${population} </p>
                    <p>Continents : ${continents}</p>
                    </div>
                    </div>`;

        
                    
        const container=document.querySelector('.container');
        container.innerHTML=card;
        
        })
    }
}
req.send();