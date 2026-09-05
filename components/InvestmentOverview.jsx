import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import Link from "next/link"
import { Building, Home, ShoppingBag, TrendingUp } from "lucide-react"

export function InvestmentOverview() {
    const investments = [
        {
            category: "Property Development",
            icon: Building,
            description: "Strategic land acquisitions and property development projects",
            status: "Active",
            color: "bg-green-100 text-green-800",
        },
        {
            category: "Residential Properties",
            icon: Home,
            description: "Home investments for rental income and capital appreciation",
            status: "Planning",
            color: "bg-blue-100 text-blue-800",
        },
        {
            category: "Commercial Spaces",
            icon: ShoppingBag,
            description: "Shop and commercial property investments for business expansion",
            status: "Research",
            color: "bg-purple-100 text-purple-800",
        },
        {
            category: "Business Ventures",
            icon: TrendingUp,
            description: "New business opportunities and expansion of existing operations",
            status: "Ongoing",
            color: "bg-yellow-100 text-yellow-800",
        },
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Portfolio</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Diversified investment strategy focusing on sustainable growth and profit reinvestment
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {investments.map((investment, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-4">
                                <div
                                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${investment.color}`}
                                >
                                    <investment.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-lg">{investment.category}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">{investment.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${investment.color}`}>
                                        {investment.status}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Reinvestment Strategy</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        All profits from our successful ventures are strategically reinvested into properties and new business
                        opportunities, ensuring sustainable growth and long-term value creation for all members.
                    </p>
                    <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900">
                        <Link href="/investments">View Full Portfolio</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
