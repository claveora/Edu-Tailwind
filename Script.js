const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
        const codeInput = document.getElementById('codeInput');
        const preview = document.getElementById('preview');

        function updatePreview() {
            const code = codeInput.value;
            const iframeContent = `
                <html>
                    <head>
                        <script src="https://cdn.tailwindcss.com"></script>
                    </head>
                    <body class="flex items-center justify-center h-full p-4">
                        ${code}
                    </body>
                </html>
            `;
            preview.srcdoc = iframeContent;
        }

        codeInput.addEventListener('input', updatePreview);
        window.addEventListener('DOMContentLoaded', updatePreview);
