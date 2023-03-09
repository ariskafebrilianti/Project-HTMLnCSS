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
