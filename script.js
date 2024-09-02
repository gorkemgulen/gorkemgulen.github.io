// active sınıfı **********************************************
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#navigation-elements .nav-link, #navigation-elements .dropdown-item');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Tüm aktif sınıfları kaldır
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Tıklanan öğeye aktif sınıfını ekle
            this.classList.add('active');
            
            // Eğer tıklanan öğe bir dropdown içindeyse, dropdown toggle'ına da aktif sınıfını ekle
            if (this.closest('.dropdown-menu')) {
                this.closest('.dropdown').querySelector('.dropdown-toggle').classList.add('active');
            }
            
            // Sayfanın yenilenmesini engelle (gerekirse kaldırabilirsiniz)
            e.preventDefault();
            
            // Tıklanan linkin href'ine git (gerekirse ekleyebilirsiniz)
            // window.location.href = this.getAttribute('href');
        });
    });
});
// active sınıfı bitiş **********************************************
