

let search = document.getElementById("search")
let btn = document.getElementById("btn")
let API_KEY = "a8ee85694fe02536b6d283e694fd2b01"
let weather_info = document.querySelector(".weather_info")

function fetchData(){

    if(search.value.trim() === ""){
        error.innerText = "Input Is Empty Bacha !!\n Try To Write Something Meri Jaan."
    }
    else{
        setTimeout(()=>{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${API_KEY}` 
            fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                showData(data)
                // console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
            error.innerText = ""
            search.value = ""
        },1000)
        
        weather_info.innerHTML = `<h1> LOADING... </h1>`

    }

}

function showData(data){
    weather_info.innerHTML = `
    <img src="assets/images/sun.png" alt="">
    <h1>50 <span class"degree"><sup>o</sup></span>C</h1>
    <p>Karachi,PK</p>
    <p>Cloud</p>
    
    `
    console.log(data);
}

search.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        fetchData()
    }
})

btn.addEventListener('click', fetchData)
