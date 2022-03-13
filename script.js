const api = "https://www.breakingbadapi.com/api/characters" // get api

async function getData(){
    try{ // if api or server not response 
    const response = await fetch(api);
    const data = await response.json();
    printData(data)
    }catch(e){
        console.log("Error", e)
    }
}

function printData(data){
    const header = document.querySelector("#header");
    const content = document.querySelector("#content");

    header.innerHTML += `
    <select class="form-control" onChange="getCh(this.value)"> 
    <option>Please Select</option>
    ${data.map(characters => `<option>${characters.name}</option>`)}
    </select>
    `
}

async function getCh(name){
  if(name !== 'Please Select'){
    const response = await fetch(`${api}?name=${name}`)
    const data = await response.json()
    content.innerHTML = `
    <h2>${data[0].name} (${data[0].nickname})</h2>
    <h4>${data[0].portrayed}</h4>
    <img src="${data[0].img}" width="250">
    `
  }else {

  }
}

getData()