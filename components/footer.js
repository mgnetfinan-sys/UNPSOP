class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #4c1d95;
                    color: white;
                    padding: 3rem 2rem;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                
                .footer-section h3 {
                    color: #34d399;
                    margin-bottom: 1rem;
                    font-size: 1.2rem;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                }
                
                .footer-links li {
                    margin-bottom: 0.5rem;
                }
                
                .footer-links a {
                    color: #e5e7eb;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-links a:hover {
                    color: #34d399;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-links a {
