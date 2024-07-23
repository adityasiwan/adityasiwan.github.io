// (function() {
//     scrollTo();
// })();

// function scrollTo() {
//     const links = document.querySelectorAll('.scroll');
//     links.forEach(each => (each.onclick = scrollAnchors));
// }

// function scrollAnchors(e, respond = null) {
//     const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
//     e.preventDefault();
//     var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
//     const targetAnchor = document.querySelector(targetID);
//     if (!targetAnchor) return;
//     const originalTop = distanceToTop(targetAnchor);
//     window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
//     const checkIfDone = setInterval(function() {
//         const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
//         if (distanceToTop(targetAnchor) === 0 || atBottom) {
//             targetAnchor.tabIndex = '-1';
//             targetAnchor.focus();
//             window.history.pushState('', '', targetID);
//             clearInterval(checkIfDone);
//         }
//     }, 100);
// }
/* navbar disappear/appear */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar2").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-70px";
        document.getElementById("navbar2").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}

/* mobile dropdown navbar
When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

/* initial color display steps/update when clicked
var shirt = getElementsFromClassName(t-shirt-grid)
for each shirt:
var colorSelector = querySelecterAll("color-selector")
if class of first color-selector is white-button-on:
    display: shirt.querySelecterAll("white")
    undisplay: shirt.querySelecterAll("black")
    display: WhiteOn
    undisplay: WhiteOff
    display: BlackOff
    undisplay: BlackOn
else:
    display: shirt.querySelecterAll("black")
    undisplay: shirt.querySelecterAll("white")
    display: BlackOn
    undisplay: BlackOff
    display: WhiteOff
    undisplay: WhiteOn
*/

$(document).ready(function() {
    update();
});

function update() {

    var shirt = document.getElementsByClassName("t-shirt");
    var i;
    var white;
    var black;
    var picture;
    var toBeDisplayed;
    var notDisplayed;
    var whiteOn;
    var whiteOff;
    var blackOn;
    var blackOff;
    var white2;
    var black2;

    for (i = 0; i < shirt.length; i++) {
        white = shirt[i].querySelector(".white-button-on");
        black = shirt[i].querySelector(".black-button-on");
        white2 = shirt[i].querySelector(".white-button");
        black2 = shirt[i].querySelector(".black-button");
        picture = shirt[i].querySelector(".t-shirt-picture");
        if (white) {
            toBeDisplayed = picture.querySelector("#white");
            notDisplayed = picture.querySelector("#black");
            toBeDisplayed.style.display = "flex";
            if (notDisplayed) {
                notDisplayed.style.display = "none";
            }
            whiteOn = white.querySelector("#WhiteOn");
            whiteOn.style.display = "inline";
            whiteOn.style.transform = "scale(1.2)";
            whiteOff = white.querySelector("#WhiteOff");
            if (whiteOff) {
                whiteOff.style.display = "none";
            }
            if (black2) {
                black2.querySelector("#BlackOff").style.display = "inline";
                black2.querySelector("#BlackOn").style.display = "none";
                // black.className = "black-button";
            }
        } else if (black) {
            toBeDisplayed = picture.querySelector("#black");
            notDisplayed = picture.querySelector("#white");
            toBeDisplayed.style.display = "flex";
            if (notDisplayed) {
                notDisplayed.style.display = "none";
            }
            blackOn = black.querySelector("#BlackOn");
            blackOn.style.display = "inline";
            blackOn.style.transform = "scale(1.2)";
            blackOff = black.querySelector("#BlackOff");
            if (blackOff) {
                blackOff.style.display = "none";
            }
            if (white2) {
                white2.querySelector("#WhiteOff").style.display = "inline";
                white2.querySelector("#WhiteOn").style.display = "none";
                // white2.className = "white-button";
            }
        }
    }

    var hoodie = document.getElementsByClassName("hoodie");

    for (i = 0; i < hoodie.length; i++) {
        white = hoodie[i].querySelector(".white-button-on");
        black = hoodie[i].querySelector(".black-button-on");
        white2 = hoodie[i].querySelector(".white-button");
        black2 = hoodie[i].querySelector(".black-button");
        picture = hoodie[i].querySelector(".hoodie-picture");
        if (white) {
            toBeDisplayed = picture.querySelector("#white");
            notDisplayed = picture.querySelector("#black");
            toBeDisplayed.style.display = "flex";
            if (notDisplayed) {
                notDisplayed.style.display = "none";
            }
            whiteOn = white.querySelector("#WhiteOn");
            whiteOn.style.display = "inline";
            whiteOn.style.transform = "scale(1.2)";
            whiteOff = white.querySelector("#WhiteOff");
            if (whiteOff) {
                whiteOff.style.display = "none";
            }
            if (black2) {
                black2.querySelector("#BlackOff").style.display = "inline";
                black2.querySelector("#BlackOn").style.display = "none";
                // black.className = "black-button";
            }
        } else if (black) {
            toBeDisplayed = picture.querySelector("#black");
            notDisplayed = picture.querySelector("#white");
            toBeDisplayed.style.display = "flex";
            if (notDisplayed) {
                notDisplayed.style.display = "none";
            }
            blackOn = black.querySelector("#BlackOn");
            blackOn.style.display = "inline";
            blackOn.style.transform = "scale(1.2)";
            blackOff = black.querySelector("#BlackOff");
            if (blackOff) {
                blackOff.style.display = "none";
            }
            if (white2) {
                white2.querySelector("#WhiteOff").style.display = "inline";
                white2.querySelector("#WhiteOn").style.display = "none";
                // white2.className = "white-button";
            }
        }
    }


    /* On Click Functions Steps
    1. addEventListener to white-button and black-button
    2. Func OnClickWhite(white-button, parent)
        turn class name to white-button-on
        parent.querySelector(.black-button-on)
        change to black-button-on to black-button
    3. Func OnClickBlack
        turn class name to black-button-on
        parent.querySelector(.white-button-on)
        change to white-button-on to white-button
    */
    var whiteButtons;
    var blackButtons;

    whiteButtons = document.getElementsByClassName("white-button");
    blackButtons = document.getElementsByClassName("black-button");

    for (i = 0; i < whiteButtons.length; i++) {
        whiteButtons[i].addEventListener("mouseover", function() {
            OnHoverWhite(this, this.parentNode)
        });
    }

    for (i = 0; i < blackButtons.length; i++) {
        blackButtons[i].addEventListener("mouseover", function() {
            OnHoverBlack(this, this.parentNode)
        });
    }

    for (i = 0; i < whiteButtons.length; i++) {
        whiteButtons[i].addEventListener("click", function() {
            OnClickWhite(this, this.parentNode)
        });
    }


    for (i = 0; i < blackButtons.length; i++) {
        blackButtons[i].addEventListener("click", function() {
            OnClickBlack(this, this.parentNode)
        });
    }


}

var otherButton;
var clicked;
// var mouseOn;

function OnClickWhite(whiteButton, parent) {
    // picture.style.display = "none";
    clicked = true;

    whiteButton.className = "white-button-on";

    // parent.style.display = "none";
    otherButton = parent.querySelector(".black-button-on");
    // otherButton.style.display = "none";
    otherButton.className = "black-button";

    update();


}

function OnClickBlack(blackButton, parent) {
    // picture.style.display = "none";
    // blackButton.style.display = "none";
    clicked = true;
    blackButton.className = "black-button-on";
    otherButton = parent.querySelector(".white-button-on");
    otherButton.className = "white-button";
    update();
    // parent.style.display = "none";

}

function OnHoverWhite(whiteButton, parent) {
    // picture.style.display = "none";
    // whiteButton.style.display = "none";
    clicked = false;
    whiteButton.className = "white-button-on";
    otherButton = parent.querySelector(".black-button-on");
    otherButton.className = "black-button";
    update();
    whiteButton.addEventListener("click", function() {
        OnClickWhite(whiteButton, parent)
    });
    whiteButton.addEventListener("mouseleave", function() {
        LeaveHoverWhite(whiteButton, parent)
    });


}

function OnHoverBlack(blackButton, parent) {
    // picture.style.display = "none";
    // blackButton.style.display = "none";
    clicked = false;
    blackButton.className = "black-button-on";
    // parent.style.display = "none";
    otherButton = parent.querySelector(".white-button-on");
    otherButton.className = "white-button";
    update();
    blackButton.addEventListener("click", function() {
        OnClickBlack(blackButton, parent)
    });

    blackButton.addEventListener("mouseleave", function() {
        LeaveHoverBlack(blackButton, parent)
    });
}

function LeaveHoverWhite(whiteButton, parent) {
    // picture.style.display = "none";
    // whiteButton.style.display = "none";
    if (clicked) {
        return;
    }
    whiteButton.className = "white-button";
    // parent.style.display = "none";
    var otherButton = parent.querySelector(".black-button");
    otherButton.className = "black-button-on";
    update();
}

function LeaveHoverBlack(blackButton, parent) {
    // picture.style.display = "none";
    // blackButton.style.display = "none";
    if (clicked) {
        return;
    }
    blackButton.className = "black-button";
    // parent.style.display = "none";
    var otherButton = parent.querySelector(".white-button");
    otherButton.className = "white-button-on";
    update();
}