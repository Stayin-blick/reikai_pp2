// ref to the dom 

const prevBtn = document.querySelector("#prev-pg");
const nextBtn = document.querySelector("#next-pg");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#pg1");
const paper2 = document.querySelector("#pg2");
const paper3 = document.querySelector("#pg3");
const paper4 = document.querySelector("#pg4");

const front = document.getElementsByClassName("front-content");
const back = document.getElementsByClassName("back-content");

//event listeners

prevBtn.addEventListener('click', goPrevPage);
nextBtn.addEventListener('click', goNextPage);

// book logic

let currentPage = 1;
let numOfPages = 4;
let maxPages = numOfPages + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    if (window.innerWidth <= 1024) {
        // Tablet or smaller
        prevBtn.style.transform = "translateY(275px)";
        nextBtn.style.transform = "translateY(275px)";
    } else {
        // Desktop
        prevBtn.style.transform = "translateX(-110px)";
        nextBtn.style.transform = "translateX(110px)";
    }
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage () {
    if (currentPage < maxPages) {
        switch(currentPage) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                openBook();
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                openBook();
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                closeBook();
                break;
            default:
                throw new Error("unknown page");
        }
        currentPage++;
    }
}

function goPrevPage() {
    if(currentPage > 1) {
        switch(currentPage) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 4;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 3;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 2;
                break;    
            case 5:
                openBook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }
        currentPage--;
    }
}