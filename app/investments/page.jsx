"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"
import { Badge } from "../../components/ui/Badge"
import { Button } from "../../components/ui/Button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs"
import Link from "next/link"
import Image from "next/image"
import { Icon } from "../../components/ui/Icon"
import { SectionHeader } from "../../components/ui/SectionHeader"
import { INVESTMENT_CATEGORIES } from "../../lib/constants"

export default function InvestmentsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all")

    const portfolioOverview = {
        totalValue: "৳45L+",
        activeInvestments: 12,
        avgReturn: "95%",
        riskLevel: "Low-Medium",
    }

    const currentInvestments = [
        {
            id: 1,
            title: "Prime Commercial Plot - Gulshan",
            category: "Land Development",
            type: "Property",
            location: "Dhaka",
            investment: "৳8.5L",
            currentValue: "৳12L",
            expectedReturn: "৳17L",
            returnPercent: "20%",
            timeline: "18 months",
            status: "Under Negotiation",
            riskLevel: "Medium",
            description:
                "Strategic commercial plot in prime Gulshan area with high appreciation potential and development opportunities.",
            highlights: ["Prime location", "Commercial zoning", "High foot traffic", "Development ready"],
            image: "/image/ploat.jfif",
            startDate: "January 2024",
            completionDate: "June 2025",
        },
        {
            id: 2,
            title: "Residential Complex - Chittagong",
            category: "Residential",
            type: "Property",
            location: "Chittagong",
            investment: "৳12L",
            currentValue: "৳14L",
            expectedReturn: "৳22L",
            returnPercent: "33%",
            timeline: "3 years",
            status: "Planning Phase",
            riskLevel: "Low",
            description:
                "Modern residential complex in growing Chittagong area with rental income potential and capital appreciation.",
            highlights: ["Growing area", "Rental income", "Modern amenities", "Strategic location"],
            image: "/image/building.jfif",
            startDate: "March 2024",
            completionDate: "March 2027",
        },
        {
            id: 3,
            title: "Shopping Complex - Sylhet",
            category: "Commercial",
            type: "Property",
            location: "Sylhet",
            investment: "৳15L",
            currentValue: "৳16L",
            expectedReturn: "৳35L",
            returnPercent: "43%",
            timeline: "2 years",
            status: "Research Phase",
            riskLevel: "Medium",
            description: "Multi-story shopping complex in Sylhet's commercial district with high rental yield potential.",
            highlights: ["Commercial district", "High rental yield", "Multi-story", "Established area"],
            image: "/image/Shopping-mall-Prague.webp",
            startDate: "June 2024",
            completionDate: "June 2026",
        },
        {
            id: 4,
            title: "Agricultural Land - Rangpur",
            category: "Agriculture",
            type: "Land",
            location: "Rangpur",
            investment: "৳6L",
            currentValue: "৳7L",
            expectedReturn: "৳12L",
            returnPercent: "20%",
            timeline: "2 years",
            status: "Active",
            riskLevel: "Low",
            description:
                "Fertile agricultural land suitable for crop cultivation and livestock farming with excellent soil quality.",
            highlights: ["Fertile soil", "Water access", "Road connectivity", "Agricultural potential"],
            image: "/image/vasitable.webp",
            startDate: "September 2023",
            completionDate: "September 2025",
        },
        {
            id: 5,
            title: "Tech Startup Investment",
            category: "Business Venture",
            type: "Equity",
            location: "Dhaka",
            investment: "৳5L",
            currentValue: "৳6L",
            expectedReturn: "৳15L",
            returnPercent: "70%",
            timeline: "3-5 years",
            status: "Active",
            riskLevel: "High",
            description:
                "Strategic investment in promising fintech startup with strong growth potential and experienced team.",
            highlights: ["Fintech sector", "Experienced team", "Growth potential", "Strategic partnership"],
            image: "/image/tech.jpg",
            startDate: "November 2023",
            completionDate: "November 2028",
        },
        {
            id: 6,
            title: "Warehouse Facility - Comilla",
            category: "Commercial",
            type: "Property",
            location: "Comilla",
            investment: "৳10L",
            currentValue: "৳11L",
            expectedReturn: "৳18L",
            returnPercent: "30%",
            timeline: "2.5 years",
            status: "Planning Phase",
            riskLevel: "Low",
            description: "Modern warehouse facility for logistics and storage with long-term lease agreements secured.",
            highlights: ["Logistics hub", "Long-term leases", "Modern facility", "Strategic location"],
            image: "/image/warehouse.webp",
            startDate: "April 2024",
            completionDate: "October 2026",
        },
    ]



    const investmentStrategy = [
        {
            title: "Diversification",
            description: "Spread investments across multiple sectors to minimize risk and maximize returns",
            icon: "Target",
            percentage: "70%",
        },
        {
            title: "Research-Driven",
            description: "Thorough market analysis and due diligence before every investment decision",
            icon: "Search",
            percentage: "70%",
        },
        {
            title: "Long-term Focus",
            description: "Strategic investments with 2-5 year horizons for sustainable wealth creation",
            icon: "TrendingUp",
            percentage: "85%",
        },
        {
            title: "Risk Management",
            description: "Careful risk assessment and mitigation strategies for all investments",
            icon: "Shield",
            percentage: "95%",
        },
    ]

    const upcomingOpportunities = [
        {
            title: "Industrial Plot - Gazipur",
            category: "Industrial",
            investment: "৳20L",
            expectedReturn: "৳40L",
            timeline: "3 years",
            riskLevel: "Medium",
            description: "Large industrial plot in Gazipur industrial zone with manufacturing potential.",
        },
        {
            title: "Hotel Investment - Cox's Bazar",
            category: "Hospitality",
            investment: "৳25L",
            expectedReturn: "৳50L",
            timeline: "4 years",
            riskLevel: "Medium-High",
            description: "Boutique hotel investment in prime Cox's Bazar tourism area.",
        },
        {
            title: "Renewable Energy Project",
            category: "Energy",
            investment: "৳18L",
            expectedReturn: "৳35L",
            timeline: "5 years",
            riskLevel: "Medium",
            description: "Solar energy project with government incentives and long-term contracts.",
        },
    ]

    const filteredInvestments =
        selectedCategory === "all"
            ? currentInvestments
            : currentInvestments.filter((inv) => inv.category.toLowerCase().includes(selectedCategory.toLowerCase()))


    // console.log("filteredInvestments", filteredInvestments);
    // console.log("selectedCategory", selectedCategory);
    const getStatusColor = (status) => {
        const colors = {
            Active: "bg-green-100 text-green-800",
            "Planning Phase": "bg-blue-100 text-blue-800",
            "Under Negotiation": "bg-orange-100 text-orange-800",
            "Research Phase": "bg-purple-100 text-purple-800",
            Completed: "bg-gray-100 text-gray-800",
        }
        return colors[status] || "bg-gray-100 text-gray-800"
    }

    const getRiskColor = (risk) => {
        const colors = {
            Low: "bg-green-100 text-green-800",
            Medium: "bg-yellow-100 text-yellow-800",
            "Medium-High": "bg-orange-100 text-orange-800",
            High: "bg-red-100 text-red-800",
        }
        return colors[risk] || "bg-gray-100 text-gray-800"
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Badge className="bg-yellow-500 text-blue-900 font-semibold px-4 py-2 mb-6">
                            Investment Portfolio • ৳45L+ Total Value
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Portfolio & Strategy</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Discover our diversified investment approach focusing on sustainable growth through strategic property
                            acquisition, business ventures, and innovative opportunities across Bangladesh.
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Overview */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                                    <Icon name="DollarSign" className="w-6 h-6 text-blue-900" />
                                </div>
                                <div className="text-3xl font-bold text-blue-900 mb-2">{portfolioOverview.totalValue}</div>
                                <div className="text-lg font-semibold text-gray-900 mb-1">Total Portfolio Value</div>
                                <div className="text-sm text-gray-600">Current market value</div>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                                    <Icon name="Target" className="w-6 h-6 text-green-900" />
                                </div>
                                <div className="text-3xl font-bold text-green-900 mb-2">{portfolioOverview.activeInvestments}</div>
                                <div className="text-lg font-semibold text-gray-900 mb-1">Active Investments</div>
                                <div className="text-sm text-gray-600">Current positions</div>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
                                    <Icon name="TrendingUp" className="w-6 h-6 text-yellow-900" />
                                </div>
                                <div className="text-3xl font-bold text-yellow-900 mb-2">{portfolioOverview.avgReturn}</div>
                                <div className="text-lg font-semibold text-gray-900 mb-1">Average Returns</div>
                                <div className="text-sm text-gray-600">Historical performance</div>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                                    <Icon name="Shield" className="w-6 h-6 text-purple-900" />
                                </div>
                                <div className="text-3xl font-bold text-purple-900 mb-2">{portfolioOverview.riskLevel}</div>
                                <div className="text-lg font-semibold text-gray-900 mb-1">Risk Profile</div>
                                <div className="text-sm text-gray-600">Portfolio risk level</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Investment Categories */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Investment Categories"
                        subtitle="Our diversified approach across multiple high-potential sectors"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {INVESTMENT_CATEGORIES.map((category, index) => (
                            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${category.color}`}>
                                            <Icon name={category.icon} className="w-7 h-7" />
                                        </div>
                                        <Badge className={category.color}>{category.status}</Badge>
                                    </div>
                                    <CardTitle className="text-xl font-bold">{category.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-6">{category.description}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                                            <div className="text-sm text-gray-600">Current Value</div>
                                            <div className="font-bold text-gray-900">{category.currentValue}</div>
                                        </div>
                                        <div className="text-center p-3 bg-green-50 rounded-lg">
                                            <div className="text-sm text-gray-600">Expected Return</div>
                                            <div className="font-bold text-green-700">{category.expectedReturn}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center text-gray-600">
                                                <Icon name="Target" className="w-4 h-4 mr-2" />
                                                {category.projects} Projects
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Icon name="Calendar" className="w-4 h-4 mr-2" />
                                                {category.timeframe}
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Icon name="MapPin" className="w-4 h-4 mr-2" />
                                            {category.locations.join(", ")}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Investments */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Current Investment Portfolio"
                        subtitle="Active investments and their performance across our diversified portfolio"
                    />

                    <Tabs defaultValue="all" className="mb-8">
                        {/* <TabsList className="grid w-full grid-cols-5">
                            <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>
                                All
                            </TabsTrigger>
                            <TabsTrigger value="property" onClick={() => setSelectedCategory("property")}>
                                Property
                            </TabsTrigger>
                            <TabsTrigger value="commercial" onClick={() => setSelectedCategory("commercial")}>
                                Commercial
                            </TabsTrigger>
                            <TabsTrigger value="agriculture" onClick={() => setSelectedCategory("agriculture")}>
                                Agriculture
                            </TabsTrigger>
                            <TabsTrigger value="business" onClick={() => setSelectedCategory("business")}>
                                Business
                            </TabsTrigger>
                        </TabsList> */}

                        <TabsContent value="all" className="mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredInvestments.map((investment) => (
                                    <Card
                                        key={investment.id}
                                        className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    >

                                        <div className="relative h-48">
                                            <Image
                                                src={investment.image || "/placeholder.svg"}
                                                alt={investment.title}
                                                fill
                                                className="object-cover rounded-t-lg"
                                            />
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <Badge variant="secondary" className="bg-white/90 text-gray-800">
                                                    {investment.category}
                                                </Badge>
                                                <Badge className={getStatusColor(investment.status)}>{investment.status}</Badge>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <Badge className={getRiskColor(investment.riskLevel)}>{investment.riskLevel} Risk</Badge>
                                            </div>
                                        </div>

                                        <CardHeader className="pb-3">
                                            <CardTitle className="text-lg font-bold">{investment.title}</CardTitle>
                                            <div className="flex items-center justify-between text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <Icon name="MapPin" className="w-4 h-4 mr-1" />
                                                    {investment.location}
                                                </div>
                                                <div className="flex items-center">
                                                    <Icon name="Calendar" className="w-4 h-4 mr-1" />
                                                    {investment.timeline}
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="pt-0">
                                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{investment.description}</p>

                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                    <div className="text-sm text-gray-600">Investment</div>
                                                    <div className="font-bold text-gray-900">{investment.investment}</div>
                                                </div>
                                                <div className="text-center p-3 bg-green-50 rounded-lg">
                                                    <div className="text-sm text-gray-600">Expected Return</div>
                                                    <div className="font-bold text-green-700">{investment.expectedReturn}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-sm text-gray-600">
                                                    Current Value: <span className="font-semibold text-blue-700">{investment.currentValue}</span>
                                                </div>
                                                <div className="text-sm font-bold text-green-700">+{investment.returnPercent} ROI</div>
                                            </div>

                                            {/* <div className="space-y-2">
                                                <h4 className="text-sm font-semibold text-gray-700">Key Highlights:</h4>
                                                <div className="flex flex-wrap gap-1">
                                                    {investment.highlights.slice(0, 3).map((highlight, index) => (
                                                        <Badge key={index} variant="outline" className="text-xs">
                                                            {highlight}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div> */}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Investment Strategy */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Our Investment Philosophy"
                        subtitle="Strategic principles that guide our investment decisions and ensure consistent returns"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {investmentStrategy.map((strategy, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                                        <Icon name={strategy.icon} className="w-8 h-8 text-blue-900" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{strategy.title}</h3>
                                    <p className="text-gray-600 mb-4">{strategy.description}</p>
                                    <div className="text-2xl font-bold text-blue-900">{strategy.percentage}</div>
                                    <div className="text-sm text-gray-600">Implementation Rate</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold mb-4">Profit Reinvestment Strategy</h3>
                            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                                Every profit from our successful business ventures is strategically reinvested into high-potential
                                properties and new business opportunities, ensuring sustainable growth and long-term wealth creation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon name="DollarSign" className="w-8 h-8 text-blue-900" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">70% Reinvestment</h4>
                                <p className="text-blue-100 text-sm">All profits reinvested into new opportunities</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon name="Target" className="w-8 h-8 text-blue-900" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Strategic Selection</h4>
                                <p className="text-blue-100 text-sm">Careful analysis and selection of high-return investments</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon name="TrendingUp" className="w-8 h-8 text-blue-900" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Long-term Growth</h4>
                                <p className="text-blue-100 text-sm">Focus on sustainable wealth creation for all members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Opportunities */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Upcoming Investment Opportunities"
                        subtitle="Exciting new opportunities we're evaluating for future investment"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {upcomingOpportunities.map((opportunity, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <Badge variant="outline" className="text-blue-700 border-blue-200">
                                            {opportunity.category}
                                        </Badge>
                                        <Badge className={getRiskColor(opportunity.riskLevel)}>{opportunity.riskLevel}</Badge>
                                    </div>

                                    <h4 className="text-lg font-bold text-gray-900 mb-3">{opportunity.title}</h4>
                                    <p className="text-sm text-gray-600 mb-4">{opportunity.description}</p>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Investment Required</span>
                                            <span className="font-semibold text-gray-900">{opportunity.investment}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Expected Return</span>
                                            <span className="font-semibold text-green-700">{opportunity.expectedReturn}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Timeline</span>
                                            <span className="font-semibold text-blue-700">{opportunity.timeline}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Badge className="bg-yellow-100 text-yellow-800 w-full justify-center py-2">Under Evaluation</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment Performance */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Investment Performance" subtitle="Track record of our investment success and returns" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-8">
                                <div className="text-4xl font-bold text-green-700 mb-2">৳65L+</div>
                                <div className="text-lg font-semibold text-gray-900 mb-2">Total Returns Generated</div>
                                <div className="text-sm text-gray-600">Cumulative profits for all members</div>
                                <div className="mt-4">
                                    <Badge className="bg-green-100 text-green-800">+97% Growth</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-8">
                                <div className="text-4xl font-bold text-blue-700 mb-2">0</div>
                                <div className="text-lg font-semibold text-gray-900 mb-2">Investment Losses</div>
                                <div className="text-sm text-gray-600">Perfect track record maintained</div>
                                <div className="mt-4">
                                    <Badge className="bg-blue-100 text-blue-800">70% Success Rate</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-8">
                                <div className="text-4xl font-bold text-purple-700 mb-2">18</div>
                                <div className="text-lg font-semibold text-gray-900 mb-2">Months Avg. Timeline</div>
                                <div className="text-sm text-gray-600">Average investment duration</div>
                                <div className="mt-4">
                                    <Badge className="bg-purple-100 text-purple-800">Optimal Duration</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Invest with Us?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Join our successful investment journey and be part of Bangladeshs most profitable business group.
                        Experience well returns and collaborative growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900 font-bold px-8 py-4 text-lg shadow-xl"
                        >
                            <Link href="/join">Join Our Investment Group</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent font-semibold px-8 py-4 text-lg"
                        >
                            <Link href="/contact">Schedule Investment Consultation</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
