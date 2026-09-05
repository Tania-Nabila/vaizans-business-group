import { Button } from "../components/ui/Button"
import Link from "next/link"
import { ArrowRight, Users, TrendingUp, Target } from "lucide-react"

export function CallToAction() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Join Our
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                            Success Story?
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                        Become part of Bangladeshs most profitable business group. With 70% success rate and well returns,
                        your investment journey starts here.
                    </p>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-blue-900" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Well Profits</h3>
                            <p className="text-blue-200">70% success rate across all 7+ completed projects</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-blue-900" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                            <p className="text-blue-200">Join 13+ experienced members with proven track record</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-blue-900" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Strategic Growth</h3>
                            <p className="text-blue-200">Diversified portfolio across farming, retail & property</p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900 font-bold px-10 py-4 text-lg shadow-xl"
                        >
                            <Link href="/join">
                                Join Group B Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent font-semibold px-10 py-4 text-lg"
                        >
                            <Link href="/contact">Schedule Consultation</Link>
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-200">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400">৳10L+</div>
                            <div className="text-sm">Total Investments</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400">7+</div>
                            <div className="text-sm">Successful Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400">5+</div>
                            <div className="text-sm">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
