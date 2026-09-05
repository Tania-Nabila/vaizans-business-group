
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../components/ui/Button"
import { Menu, X, } from "lucide-react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const pathname = usePathname() // 👈 Get current URL

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Projects", href: "/projects" },
        { name: "Investments", href: "/investments" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                                <img src="/logo.png" alt="Vizans-logo" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-blue-900">Vaizans</h1>
                                <p className="text-xs text-gray-600 font-medium">Business Group</p>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors 
                                    ${pathname === item.href
                                        ? "text-blue-900 font-semibold  bg-blue-100 p-2"
                                        : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            asChild
                            className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg"
                        >
                            <Link href="/join">Join Our Group</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block px-3 py-2 text-base font-medium rounded-lg 
                                        ${pathname === item.href
                                            ? "text-blue-900 font-semibold underline underline-offset-4"
                                            : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 px-3">
                                <Button asChild className="w-full bg-blue-900 hover:bg-blue-800">
                                    <Link href="/join">Join Our Group</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

