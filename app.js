const climate = document.getElementById("climate")
const consumption = document.getElementById("consumption")
const resources = document.getElementById("resources")
const poverty = document.getElementById("poverty")

climate.onclick=()=>{
    //Button color
    climate.style.backgroundColor = "#2F80ED"
    consumption.style.backgroundColor = "transparent"
    resources.style.backgroundColor = "transparent"
    poverty.style.backgroundColor = "transparent"
    //background
    document.body.style.backgroundImage = "url('http://i1.faceprep.in/prograd-junior/climate-change-bg.png')"
    document.body.style.backgroundSize = "100% 100%"
    //content
    document.getElementById("amount").innerHTML = "2,911,342,321"
    document.getElementById("cause").innerHTML = "Tons of CO2 emmited into the atmosphere"
}

consumption.onclick=()=>{
    //Button color
    climate.style.backgroundColor = "transparent"
    consumption.style.backgroundColor = "#27AE60"
    resources.style.backgroundColor = "transparent"
    poverty.style.backgroundColor = "transparent"
    //background
    document.body.style.backgroundImage = "url('http://i1.faceprep.in/prograd-junior/food-wastage-bg.png')"
    document.body.style.backgroundSize = "100% 100%"
    //content
    document.getElementById("amount").innerHTML = "878,262,909"
    document.getElementById("cause").innerHTML = "Tons of food wasted or lost"
}

resources.onclick=()=>{
    //Button color
    climate.style.backgroundColor = "transparent"
    consumption.style.backgroundColor = "transparent"
    resources.style.backgroundColor = "#F2994A"
    poverty.style.backgroundColor = "transparent"
    //background
    document.body.style.backgroundImage = "url('http://i1.faceprep.in/prograd-junior/natural-resources-bg.png')"
    document.body.style.backgroundSize = "100% 100%"
    //content
    document.getElementById("amount").innerHTML = "59,859,183,999"
    document.getElementById("cause").innerHTML = "Tons of natural resources extracted from Earth"
}

poverty.onclick=()=>{
    //Button color
    climate.style.backgroundColor = "transparent"
    consumption.style.backgroundColor = "transparent"
    resources.style.backgroundColor = "transparent"
    poverty.style.backgroundColor = "#EB5757"
    //background
    document.body.style.backgroundImage = "url('http://i1.faceprep.in/prograd-junior/poverty-bg.png')"
    document.body.style.backgroundSize = "100% 100%"
    //content
    document.getElementById("amount").innerHTML = "6,000,888"
    document.getElementById("cause").innerHTML = "People who died of hunger"
}