import { Card, CardContent } from "./ui/Card"
import { Users, Target, TrendingUp, Building, DollarSign, Calendar } from "lucide-react"

export function Stats() {
    const stats = [
        {
            icon: Users,
            value: "15+",
            label: "Active Members",
            description: "Group A (10) + Group B (5)",
            color: "bg-blue-100 text-blue-900",
            trend: "+5 this year",
        },
        {
            icon: Target,
            value: "7+",
            label: "Completed Projects",
            description: "All Profitable Ventures",
            color: "bg-green-100 text-green-900",
            trend: "70% Success",
        },
        {
            icon: TrendingUp,
            value: "70%",
            label: "Success Rate",
            description: "Profitable Returns",
            color: "bg-yellow-100 text-yellow-900",
            trend: "Consistent Growth",
        },
        {
            icon: Building,
            value: "4+",
            label: "Investment Sectors",
            description: "Diversified Portfolio",
            color: "bg-purple-100 text-purple-900",
            trend: "Expanding",
        },
        {
            icon: DollarSign,
            value: "৳10 L+",
            label: "Total Investment",
            description: "Cumulative Capital",
            color: "bg-indigo-100 text-indigo-900",
            trend: "Growing",
        },
        {
            icon: Calendar,
            value: "5+",
            label: "Years Experience",
            description: "Established Track Record",
            color: "bg-red-100 text-red-900",
            trend: "Since 2021",
        },
    ]

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact in Numbers</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Proven track record of successful investments and growing partnerships that deliver consistent returns
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
                        >
                            <CardContent className="p-8">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${stat.color}`}>
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                                <div className="text-sm text-gray-600 mb-3">{stat.description}</div>
                                <div className="text-xs text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full inline-block">
                                    {stat.trend}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Vaizans Group?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <div className="text-3xl font-bold text-yellow-400 mb-2">৳0</div>
                            <div className="text-blue-100">Investment Losses</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                            <div className="text-blue-100">Member Support</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
                            <div className="text-blue-100">Growth Potential</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
