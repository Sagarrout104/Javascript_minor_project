
// Use of Promise

// const btn = document.querySelector('.btn');
// const p = document.querySelector('p');

// btn.addEventListener('click',()=>{

//     p.innerHTML='You Jokes is loading... !';
//     const setHeaders={
//         headers:{
//             Accept:"application/json"
//         }
//     }
    
//     const api = fetch('https://icanhazdadjoke.com',setHeaders);
//     // console.log(api);
    
//     api.then((res)=>{
//         // console.log(res.json());
//         return res.json();
//     })
//     .then((data)=>{
//         // console.log(data.joke);
//         p.innerHTML=`"${data.joke}"`; 
//     })
//     .catch((rej)=>{
//         console.log("opps",rej);
//     })
// })

// Use Async , Await

const btn = document.querySelector('.btn');
const p = document.querySelector('p');

const jokeGenerate=async()=>{
    
    p.innerHTML='You Jokes is loading... !';

    const setHeaders={   
        headers:{
            Accept:"application/json"
                }
                    }


const api = await fetch('https://icanhazdadjoke.com',setHeaders);
const res = await api.json();
const data=res.joke;
p.innerHTML=res.joke;

}

btn.addEventListener('click',jokeGenerate)


