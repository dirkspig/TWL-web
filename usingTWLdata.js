import { twlbase } from "./twldata.js";

var titleHeading = document.getElementById("job-title");

var choseSoc = document.getElementById("user-input")
var btn = document.getElementById("btn-fetch-with-soc")


btn.addEventListener("click",handleClick )

function handleClick() {
        console.log(choseSoc.value)
        console.log(twlbase[0])
        console.log(twlbase[0].indexOf(choseSoc.value))
}


const dropdownRoll = document.getElementById("jobs-dropdown")




for (let index = 0; index < twlbase.length; index++) {
    const item = twlbase[index];
    const option = document.createElement("option");
    const optiontext = document.createTextNode(`${item[1]}`);
    const hiddenIdAtt= document.createAttribute("hidden-index")
    hiddenIdAtt.value = index;
    option.setAttributeNode(hiddenIdAtt);
    option.appendChild(optiontext);
    dropdownRoll.appendChild(option);
}

const btnFetch = document.getElementById("fetch-btn-dropdown")
const dropdownList = document.getElementById("jobs-dropdown")

btnFetch.onclick = (event) => {
    event.preventDefault();
    const jobIndex=dropdownList.selectedIndex
    console.log(twlbase[jobIndex][1])

    document.getElementById("job-title").innerHTML=`${twlbase[jobIndex][0]}:    ${twlbase[jobIndex][1]} `
    document.getElementById("soc-num").innerHTML=twlbase[jobIndex][5]
};
