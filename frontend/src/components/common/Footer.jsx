const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h4>Bhagyesh</h4>
                    <p>Full Stack Developer (React + Django)</p>
                </div>

                <div className="footer-right">
                    <a
                        href="https://github.com/bhagyesh-y"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a href="mailto:bhagyeshyadav29@gmail.com">Email</a>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Bhagyesh. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
