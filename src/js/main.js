// The URL of the webservice
const url = 'https://api.nal.usda.gov/fdc/v1/foods/list?api_key=gH5IylFH1c6TbnFiVMhyy9e4MRmtAY2gg94JJERs&query=gouda';
const button = document.getElementById("button");
const foodData = document.getElementById("foodData");

const getData = () => {
    fetch(url)
        .then((response) => { return response.json() } )
        .then((data) => { for (let i = 0; i < data.length; i++){
            // console.log(data[i].description);
            const p = document.createElement("p");
            const desc = document.createElement("div");
            desc.textContent = data[i].description;
            p.appendChild(desc);
            foodData.appendChild(desc);
        }});
}

button.addEventListener("click", function() {
    getData();
});