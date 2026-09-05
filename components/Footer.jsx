import Link from "next/link"
import { Button } from "../components/ui/Button"
import { Facebook, Twitter, Linkedin, Mail, MapPin, MessageSquare } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href={"/"} className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                                <img src="/logo.png" alt="Vizans-logo" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Vaizans Group</h3>
                                <p className="text-blue-200 text-sm font-medium">Investment & Growth Partners</p>
                            </div>
                        </Link>
                        <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
                            Building profitable business ventures through collaborative partnerships and strategic investments. Join
                            15+ successful members with 70% profit track record across farming, retail, and property sectors.
                        </p>

                        {/* Social Media */}
                        <div className="flex space-x-4 mb-6">
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-blue-200 hover:text-white hover:bg-blue-800 rounded-lg"
                            >
                                <Facebook className="h-5 w-5" />
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-blue-200 hover:text-white hover:bg-blue-800 rounded-lg"
                            >
                                <Twitter className="h-5 w-5" />
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-blue-200 hover:text-white hover:bg-blue-800 rounded-lg"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-blue-200 hover:text-white hover:bg-blue-800 rounded-lg"
                            >
                                <MessageSquare className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                <div className="text-xl font-bold text-yellow-400">15+</div>
                                <div className="text-xs text-blue-200">Members</div>
                            </div>
                            <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                <div className="text-xl font-bold text-yellow-400">7+</div>
                                <div className="text-xs text-blue-200">Projects</div>
                            </div>
                            <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                <div className="text-xl font-bold text-yellow-400">70%</div>
                                <div className="text-xs text-blue-200">Success</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Our Team", href: "/team" },
                                { name: "Projects", href: "/projects" },
                                { name: "Investments", href: "/investments" },
                                { name: "Gallery", href: "/gallery" },
                                { name: "News & Updates", href: "/news" },
                                { name: "Join Our Group", href: "/join" },
                                { name: "Contact Us", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-blue-200 hover:text-white transition-colors hover:underline">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Mail className="h-5 w-5 mr-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="text-blue-100 font-medium">Email</div>
                                    <div className="text-blue-200 text-sm">vaizansgroup@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="text-blue-100 font-medium">Location</div>
                                    <div className="text-blue-200 text-sm">Mirpur 11, Dhaka, Bangladesh</div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                            <h5 className="font-semibold text-blue-100 mb-2">Business Hours</h5>
                            <div className="text-sm text-blue-200">
                                <div>Saturday - Thursday: 8:00 AM - 5:00 PM</div>
                                <div>Friday: Closed</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-blue-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-blue-200 text-sm mb-4 md:mb-0">
                            © {currentYear} Vaizans Group. All rights reserved. | Registered Business Entity in Bangladesh
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                            <Link href="/" className="text-blue-200 hover:text-white text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/" className="text-blue-200 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/" className="text-blue-200 hover:text-white text-sm transition-colors">
                                Investment Disclaimer
                            </Link>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 text-center">
                        <p className="text-blue-300 text-xs">
                            Investment opportunities are subject to terms and conditions. Past performance does not guarantee future
                            results.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
