export const Footer = () => {
    return (
        <footer className="relative shrink-0 bg-dark-primary pt-16 pb-8 backdrop-blur-sm px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Company Info */}
                    <div className="flex flex-col gap-4 col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-start gap-1 flex-col">
                            <h3>SaaS Product</h3>
                            <p className="small">
                                Transform your workflow with our powerful, easy-to-use solution.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4>Quick Links</h4>
                        <ul className="flex flex-col gap-2">
                            <li><a href="#" className="small">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="small">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="small">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Social Links */}
                    <div className="flex flex-col">
                        <h4>Follow Us</h4>
                        <div className="flex flex-col gap-2">
                            <a 
                                href="#" 
                                className="small"
                            >
                                Twitter / X
                            </a>
                            <a 
                                href="#" 
                                className="small"
                            >
                                LinkedIn
                            </a>
                            <a 
                                href="#" 
                                className="small"
                            >
                                GitHub
                            </a>
                            <a 
                                href="#" 
                                className="small"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-secondary/70 pt-8 text-center flex justify-between items-center">
                    <p className="text-xs!">© 2025 SaaS Product. All rights reserved.</p>
                    <p className="text-xs!">Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}