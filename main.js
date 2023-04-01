//----------------------------- LLAMADOR DE TITTLE

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" })
}

let previousTitle = document.title;

window.addEventListener('blur', () =>{
    previousTitle = document.title
    document.title = '¿Me contactaste?¡Volve! '
})

window.addEventListener('focus', () =>{
    document.title = previousTitle;
})
//----------------------------- TEXTO ANIMADO

const text = document.querySelector(".typing__text");

const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Comercial.";
            }, 0);
            setTimeout(() => {
                text.textContent = "Servicios Informaticos.";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Desarrollo Web.";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);

//-----------------------------FILTRO DE PROYECTOS        
        
        const filterContainer = document.querySelector(".gallery__categories");
        const galleryItems = document.querySelectorAll(".project__card");
        
        filterContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("filter-item")) {
                filterContainer.querySelector(".active").classList.remove("active");
                event.target.classList.add("active")
                const filterValue = event.target.getAttribute("data-filter")
                galleryItems.forEach(item => {
                    if (item.classList.contains(filterValue) || filterValue === "all") {
                        item.classList.remove("hide")
                        item.classList.add("show")
                    } else {
                        item.classList.remove("show")
                        item.classList.add("hide")
                    }
                })
            }
        })