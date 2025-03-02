document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("drawer").style.left = "0"; // Abre o drawer
});

document.getElementById("close-drawer").addEventListener("click", function() {
    document.getElementById("drawer").style.left = "-250px"; // Fecha o drawer
    
});