
async function dat(){
const data=await fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    return(res.json());
}).then(data=>data)
console.log(data);
}
dat()