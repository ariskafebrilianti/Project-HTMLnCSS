const popup = document.getElementById("myPopup")
const openImage = document.getElementById("openModalButton")
const closeIcon = document.getElementById("closeModalIcon");

    // Ketika tombol openButton ditekan
    openImage.addEventListener('click', () => {
    popup.style.display = "block";
    });
    // Ketika tombol closeButton ditekan
    closeIcon.addEventListener('click', () => {
    popup.style.display = "none";
    });

    const popup2 = document.getElementById("myPopup2")
    const openImage2 = document.getElementById("openModalButton2")
    const closeIcon2 = document.getElementById("closeModalIcon2");
    
        //Ketika tombol openButton ditekan
        openImage2.addEventListener('click', () => {
        popup2.style.display = "block";
        });
        // Ketika tombol closeButton ditekan
        closeIcon2.addEventListener('click', () => {
        popup2.style.display = "none";
        });

        const popup3 = document.getElementById("myPopup3")
        const openImage3 = document.getElementById("openModalButton3")
        const closeIcon3 = document.getElementById("closeModalIcon3");
        
            //Ketika tombol openButton ditekan
            openImage3.addEventListener('click', () => {
            popup3.style.display = "block";
            });
            // Ketika tombol closeButton ditekan
            closeIcon3.addEventListener('click', () => {
            popup3.style.display = "none";
            });

const popup4 = document.getElementById("myPopup4")
const openImage4 = document.getElementById("openModalButton4")
const closeIcon4 = document.getElementById("closeModalIcon4");

    // Ketika tombol openButton ditekan
    openImage4.addEventListener('click', () => {
    popup4.style.display = "block";
    });
    // Ketika tombol closeButton ditekan
    closeIcon4.addEventListener('click', () => {
    popup4.style.display = "none";
    });
    
    const popup5 = document.getElementById("myPopup5")
    const openImage5 = document.getElementById("openModalButton5")
    const closeIcon5 = document.getElementById("closeModalIcon5");
    
        // Ketika tombol openButton ditekan
        openImage5.addEventListener('click', () => {
        popup5.style.display = "block";
        });
        // Ketika tombol closeButton ditekan
        closeIcon5.addEventListener('click', () => {
        popup5.style.display = "none";
        });

        const popup6 = document.getElementById("myPopup6")
        const openImage6 = document.getElementById("openModalButton6")
        const closeIcon6 = document.getElementById("closeModalIcon6");
        
            // Ketika tombol openButton ditekan
            openImage6.addEventListener('click', () => {
            popup6.style.display = "block";
            });
            // Ketika tombol closeButton ditekan
            closeIcon6.addEventListener('click', () => {
            popup6.style.display = "none";
            });

let slideIndex = 0;

const updateSlide = (n) => {
slideIndex += n;
showSlide(slideIndex);
}
            
const showSlide = (n) => {
const slides = document.getElementsByClassName("card");
if (n > slides.length - 1) {
slideIndex = 0;
}
if (n < 0) {
slideIndex = slides.length - 1;
}
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slideIndex].style.display = "block";
}
            
showSlide(slideIndex);
       