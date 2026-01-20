export const Footer = () => {
    return (
        <footer className="relative shrink-0 border-t border-foreground/5 bg-background/50 px-6 py-12 backdrop-blur-sm lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Column 1: Company Info */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent"></div>
                            <h3 className="text-lg font-bold text-foreground">SaaS Product</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-foreground/60">
                            Transform your workflow with our powerful, easy-to-use solution.
                        </p>
                    </div>

                    {/* Column 2: Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-base font-semibold text-foreground">Quick Links</h4>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a href="#" className="text-sm text-foreground/60 transition-colors hover:text-foreground">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-foreground/60 transition-colors hover:text-foreground">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-foreground/60 transition-colors hover:text-foreground">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-foreground/60 transition-colors hover:text-foreground">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Social Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-base font-semibold text-foreground">Follow Us</h4>
                        <div className="flex flex-col gap-2">
                            <a 
                                href="#" 
                                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                            >
                                Twitter / X
                            </a>
                            <a 
                                href="#" 
                                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                            >
                                LinkedIn
                            </a>
                            <a 
                                href="#" 
                                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                            >
                                GitHub
                            </a>
                            <a 
                                href="#" 
                                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-foreground/5 pt-8 text-center text-xs text-foreground/50 lg:text-sm">
                    <p>© 2024 SaaS Product. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}