const items = Array.from(document.getElementsByClassName("item"));
items.forEach(item => {
    item.addEventListener("click", FuncClick);
})

function DarkLight(classe) {
    $("." + classe).hide();
}

function DarkLight2(classe) {
    $("." + classe).show();
}

//******************************************************************** */
const slide = Array.from(document.getElementsByClassName("svgLinks"));
slide.forEach(indexSlide => {
    indexSlide.addEventListener("click", myFunction);
})
function myFunction(classe) {
    $("." + "mobile").slideToggle();
}
//******************************************************************* */

function FuncClick(event) {
    const divAtribute = event.target.getAttribute("data");
    items.forEach(item => {
        const div_content = item.getAttribute("data");
        if (divAtribute === div_content) {
            item.classList.add("active");
        }
        else {
            item.classList.remove("active");
        }
    })
}



const locals = Array.from(document.getElementsByClassName("local"));
locals.forEach(local => {
    local.addEventListener("click", FuncClic);
})
function FuncClic(event) {
    const Atribute = event.target.getAttribute("data");
    locals.forEach(local => {
        const content = local.getAttribute("data");
        if (Atribute === content) {
            local.classList.add("divTec");
        }
        else {
            local.classList.remove("divTec");
        }
    })
}

//#####################################################################################

/**
    Geral
**/
const bode = document.querySelector("#bodes");
const myColor = document.querySelector(".barraDeTecnologia");
const myCode_ = document.querySelector(".myCode_");
const modo = document.querySelector("#localProjects");
const modo1 = document.querySelector("#localProjects1");
const modo2 = document.querySelector("#localProjects2");
const modo3 = document.querySelector("#localProjects3");
const select = document.querySelector(".RodaPe");
const myCode_2 = document.querySelector("#B");
/** Luz **/
const luz = Array.from(document.getElementsByClassName("light"));
luz.forEach(luzes => {
    luzes.addEventListener("click", LuzesOpen);
})

function LuzesOpen(event) {
    bode.style.background = "rgb(99, 27, 27)";
    myColor.style.background = "rgb(82, 20, 20)";
    myCode_.style.background = "rgb(82, 20, 20)";
    modo.style.background = "rgb(82, 20, 20)";
    modo1.style.background = "rgb(82, 20, 20)";
    modo2.style.background = "rgb(82, 20, 20)";
    modo3.style.background = "rgb(82, 20, 20)";
    select.style.background = "rgb(61, 15, 15)";
    myCode_2.style.background = "rgb(82, 20, 20)";
}
//#####################################################################################

/**
    Geral
**/

/** Dark **/
const dark = Array.from(document.getElementsByClassName("dark"));
dark.forEach(darkes => {
    darkes.addEventListener("click", darksfunction);
})

function darksfunction(event) {
    bode.style.background = "rgb(10, 15, 17)";
    myColor.style.background = "rgb(14, 20, 22)";
    myCode_.style.background = "rgb(12, 18, 20)";
    modo.style.background = "rgb(14, 20, 22)";
    modo1.style.background = "rgb(14, 20, 22)";
    modo2.style.background = "rgb(14, 20, 22)";
    modo3.style.background = "rgb(14, 20, 22)";
    select.style.background = "rgb(12, 18, 20)";
    myCode_2.style.background = "rgb(12, 19, 20)";
}




