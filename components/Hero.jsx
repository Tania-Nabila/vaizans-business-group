import { Button } from "../components/ui/Button"
import Link from "next/link"
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react"

export function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-white/20">
                        <TrendingUp className="w-5 h-5 mr-2 text-yellow-400" />5 Successful Projects • 70% Profit Rate
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Building Profitable
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                            Business Empire
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                        Vaizans Group - Where 13+ strategic partners create wealth through
                        <span className="text-yellow-300 font-semibold"> farming, retail, and property investments </span>
                        with well profitable returns.
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-8 mb-10">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400">15+</div>
                            <div className="text-blue-200 text-sm">Active Members</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400">7+</div>
                            <div className="text-blue-200 text-sm">Completed Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400">70%</div>
                            <div className="text-blue-200 text-sm">Success Rate</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900 font-bold px-8 py-4 text-lg shadow-xl"
                        >
                            <Link href="/projects">
                                View Our Success Stories <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent font-semibold px-8 py-4 text-lg"
                        >
                            <Link href="/join">
                                <Users className="mr-2 h-5 w-5" />
                                Join Our Group
                            </Link>
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-200">
                        <div className="flex items-center">
                            <Target className="w-5 h-5 mr-2 text-yellow-400" />
                            <span className="text-sm">Strategic Investments</span>
                        </div>
                        <div className="flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2 text-yellow-400" />
                            <span className="text-sm">Well Returns</span>
                        </div>
                        <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2 text-yellow-400" />
                            <span className="text-sm">Collaborative Growth</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    )
}
