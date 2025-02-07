function trafficLightControl(density) {
    if (density === "Heavy Traffic") {
        return "60 seconds for green";
    } else if (density === "Moderate Traffic") {
        return "40 seconds for green";
    } else if (density === "Light Traffic") {
        return "20 seconds for red";
    } else {
        return "Invalid Traffic Density";
    }
}
console.log(trafficLightControl("Moderate Traffic")) 