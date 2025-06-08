<script>
    // Smooth scroll untuk tombol Get Started
    document.getElementById('getStartedBtn').addEventListener('click', function() {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });

    // Navigasi layanan
    document.querySelectorAll('.service-nav-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.service-nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.service-slide').forEach(slide => slide.classList.remove('active'));
            document.querySelectorAll('.service-bg').forEach(bg => bg.classList.remove('active'));
            const service = this.getAttribute('data-service');
            document.querySelector(`.service-slide[data-service="${service}"]`).classList.add('active');
            document.querySelector(`.service-bg[data-service="${service}"]`).classList.add('active');
        });
    });
</script>
