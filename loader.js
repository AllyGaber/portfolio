function newCreation(img, label, size) {
const creation = document.createElement("div");
const imgElement = document.createElement("img");

const p = document.createElement("p");
p.className = "text";
p.textContent = label;

imgElement.src = "./Media/Creations/" + img;
imgElement.style.width = "100%";
imgElement.style.display = "block";
imgElement.style.position = "relative"
imgElement.style.borderRadius = "10px"
document.getElementById("creationsCont").appendChild(creation);

creation.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

creation.appendChild(p)
creation.appendChild(imgElement);
}
newCreation("DiamondMineTycoon.png", "Diamond Mine Tycoon UI");
newCreation("SphereIncrementals.png", "Sphere Incrementals Logo")
newCreation("MoneyCounter.png", "Money Counter UI");
newCreation("Spheres.png", "Spheres");
newCreation("serverblox.png", "ServerBlox Logo");