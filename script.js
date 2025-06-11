        // Navigation entre les pages
        function showPage(pageId) {
            // Masquer toutes les pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Afficher la page sélectionnée
            document.getElementById(pageId).classList.add('active');
            
            // Mettre à jour la navigation
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
            
            // Fermer le menu mobile si ouvert
            const nav = document.getElementById('nav');
            nav.classList.remove('mobile-open');
            
            // Remonter en haut de la page
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Empêcher le comportement par défaut du lien
            if (event) {
                event.preventDefault();
            }
        }

        // Menu mobile
        function toggleMobileMenu() {
            const nav = document.getElementById('nav');
            nav.classList.toggle('mobile-open');
        }

        // Fonction pour afficher les informations des projets IA
        function showInfo(projectId) {
            const infoPanel = document.getElementById('info-panel');
            const title = document.getElementById('info-title');
            const description = document.getElementById('info-description');
            const details = document.getElementById('info-details');

            const projects = {
                'forest-na': {
                    title: 'Surveillance Forestière - Amérique du Nord',
                    description: 'Projet de surveillance des forêts boréales utilisant l\'analyse d\'images satellites pour détecter la déforestation et les feux de forêt.',
                    details: '<strong>Technologie:</strong> Deep Learning CNN<br><strong>Couverture:</strong> 500,000 km²<br><strong>Fréquence:</strong> Quotidienne'
                },
                'amazon': {
                    title: 'Protection de l\'Amazonie',
                    description: 'Système d\'alerte précoce pour la déforestation illégale en Amazonie, utilisant l\'IA pour analyser les images satellites en temps réel.',
                    details: '<strong>Technologie:</strong> Vision par ordinateur<br><strong>Couverture:</strong> 1,200,000 km²<br><strong>Alertes:</strong> Temps réel'
                },
                'europe-forest': {
                    title: 'Biodiversité Européenne',
                    description: 'Cartographie de la biodiversité forestière européenne par analyse automatique des données écologiques.',
                    details: '<strong>Technologie:</strong> Machine Learning<br><strong>Espèces suivies:</strong> 450+<br><strong>Mise à jour:</strong> Mensuelle'
                },
                'sahara': {
                    title: 'Expansion du Sahara',
                    description: 'Surveillance de l\'expansion du désert du Sahara et de ses impacts sur les écosystèmes adjacents.',
                    details: '<strong>Technologie:</strong> Analyse multispectrale<br><strong>Indicateurs:</strong> Végétation, humidité<br><strong>Historique:</strong> 30 ans'
                },
                'himalayas': {
                    title: 'Glaciers de l\'Himalaya',
                    description: 'Monitoring des glaciers himalayens pour évaluer l\'impact du changement climatique sur les ressources en eau.',
                    details: '<strong>Technologie:</strong> Radar et optique<br><strong>Glaciers suivis:</strong> 2,000+<br><strong>Précision:</strong> 1 mètre'
                },
                'asia-urban': {
                    title: 'Urbanisation Asiatique',
                    description: 'Analyse de l\'expansion urbaine en Asie et de son impact sur les écosystèmes naturels environnants.',
                    details: '<strong>Technologie:</strong> Classification automatique<br><strong>Villes suivies:</strong> 50+<br><strong>Résolution:</strong> 10 mètres'
                },
                'wetlands': {
                    title: 'Zones Humides Critiques',
                    description: 'Protection des zones humides par surveillance automatique de leur état de santé et de leur évolution.',
                    details: '<strong>Technologie:</strong> Analyse hyperspectrale<br><strong>Paramètres:</strong> Qualité eau, végétation<br><strong>Sites:</strong> 150+'
                },
                'oceania': {
                    title: 'Récifs Coralliens',
                    description: 'Surveillance de la santé des récifs coralliens en Océanie par analyse d\'images sous-marines automatisées.',
                    details: '<strong>Technologie:</strong> IA sous-marine<br><strong>Récifs:</strong> 300+<br><strong>Indicateurs:</strong> Blanchissement, biodiversité'
                }
            };

            const project = projects[projectId];
            if (project) {
                title.textContent = project.title;
                description.textContent = project.description;
                details.innerHTML = project.details;
                infoPanel.classList.add('active');
            }
        }

        // Fermer le panel d'information
        function closeInfo() {
            const infoPanel = document.getElementById('info-panel');
            infoPanel.classList.remove('active');
        }

        // Fermer le menu mobile quand on clique en dehors
        document.addEventListener('click', function(event) {
            const nav = document.getElementById('nav');
            const toggle = document.querySelector('.mobile-menu-toggle');
            
            if (!nav.contains(event.target) && !toggle.contains(event.target)) {
                nav.classList.remove('mobile-open');
            }
        });

        // Initialisation
        document.addEventListener('DOMContentLoaded', function() {
            // S'assurer que la page d'accueil est active au chargement
            showPage('accueil');
        });