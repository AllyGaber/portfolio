function newCreation(img, label, size) {
    const creation = document.createElement("div");
    const imgElement = document.createElement("img");
    const overlay = document.createElement("div");
    const window = document.getElementById("creationWindow");
    const image = document.getElementById("creationImage");
    const windowLabel = document.getElementById("label")
    const p = document.createElement("p");
    const closeBtn = document.getElementById("closeButton");
    p.className = "text";
    p.textContent = label;
    
    imgElement.src = "./Media/Creations/" + img;
    imgElement.style.width = "100%";
    imgElement.style.display = "block";
    imgElement.style.position = "relative"
    imgElement.style.borderRadius = "10px"
    creation.title = "Click to expand"
    document.getElementById("creationsCont").appendChild(creation);
    
    creation.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });
    
    creation.onclick = function(){
        window.style.animation = "none";
        image.src = "./Media/Creations/" + img;
        windowLabel.innerHTML = label;
        window.offsetWidth;
        window.style.animation = "openAnimation 0.3s ease";
        window.style.left = "50%"
    }
    
    closeBtn.onclick = function(){
        window.style.animation = "none";
        window.offsetWidth;
        window.style.animation = "closeAnimation 0.3s ease";
        window.style.left = "-9999"
    }
    
    creation.appendChild(p)
    creation.appendChild(imgElement);
    creation.appendChild(overlay);
    }
    newCreation("DiamondMineTycoon.png", "Diamond Mine Tycoon UI");
    newCreation("SphereIncrementals.png", "Sphere Incrementals Logo");
    newCreation("MoneyCounter.png", "Money Counter UI");
    newCreation("Spheres.png", "Spheres");
    newCreation("Survivalist.png", "Survivalist Logo");
    newCreation("survivalistGamepasses.png", "Survivalist Gamepasses");
    newCreation("shopPlaceHolderUI.png","Shop UI");
    newCreation("rebirthMenu.png", "Rebirth Menu");
    newCreation("shopMenu.png", "Shop Menu");
    newCreation("upgradeMenu.png", "Upgrade Menu");
    newCreation("BattlegroundThemedUI.png", "Battleground Themed UI");
    newCreation("shopUI2.png", "Shop UI");
