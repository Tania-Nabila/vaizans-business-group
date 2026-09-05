import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, TrendingUp, Users, MapPin, DollarSign } from "lucide-react"


export function FeaturedProjects() {
    const projects = [
        {
            id: 1,
            title: "Pond Fishing Venture",
            category: "Aquaculture",
            year: "2022",
            duration: "4 months",
            status: "Completed",
            profit: "Good",
            profitPercent: "15%",
            investment: "৳1L",
            returns: "৳1.5L",
            location: "Feni",
            members: 8,
            image: "/image/Pond-Fishing-Venture.jpg",
            description:
                "Large-scale fish farming operation with modern pond management techniques and sustainable practices.",
            highlights: ["Modern pond systems", "Sustainable practices", "Local market access", "Expert guidance"],
        },
        {
            id: 2,
            title: "Hen Farming Operation",
            category: "Poultry",
            year: "2023",
            duration: "6 months",
            status: "Completed",
            profit: "Good",
            profitPercent: "10%",
            investment: "৳1L",
            returns: "৳1.1L",
            location: "Feni",
            members: 10,
            image: "/image/poultry.jpg",
            description: "Large-scale poultry farming with modern techniques, automated systems, and market-driven approach.",
            highlights: ["Automated feeding", "Disease management", "High-quality breeds", "Direct market sales"],
        },
        {
            id: 3,
            title: "Eid Panjabi Sales",
            category: "Retail",
            year: "2024",
            duration: "3 months",
            status: "Completed",
            profit: "Good",
            profitPercent: "30%",
            investment: "৳4L",
            returns: "৳4.3L",
            location: "Feni",
            members: 10,
            image: "/image/panjabi.avif",
            description:
                "Seasonal retail venture capitalizing on Eid festivities with premium clothing and traditional wear.",
            highlights: ["Premium quality", "Strategic timing", "Multiple locations", "High demand period"],
        },
        {
            id: 4,
            title: "Cow Rearing for Eid-ul-Azha",
            category: "Livestock",
            year: "2024",
            duration: "4 months",
            status: "Completed",
            profit: "Good",
            profitPercent: "15%",
            investment: "৳5L",
            returns: "৳5.5L",
            location: "Feni",
            members: 12,
            image: "/image/cow.avif",
            description:
                "Strategic livestock investment for Eid-ul-Azha market with premium cattle and excellent profit margins.",
            highlights: ["Premium cattle", "Veterinary care", "Market timing", "Religious significance"],
        },
        {
            id: 5,
            title: "Rice Trading Business",
            category: "Agriculture",
            year: "2024",
            duration: "12 months",
            status: "Ongoing",
            profit: "Good",
            profitPercent: "78%",
            investment: "৳5.0L",
            returns: "৳8.9L",
            location: "Feni",
            members: 9,
            image: "/image/Rice-Trading-Business.jpg",
            description: "Rice procurement and trading business connecting farmers with wholesale markets across Bangladesh.",
            highlights: ["Farmer partnerships", "Wholesale network", "Quality assurance", "Steady demand"],
        },
        {
            id: 6,
            title: "Vegetable Farming",
            category: "Agriculture",
            year: "2023",
            duration: "10 months",
            status: "Completed",
            profit: "Good",
            profitPercent: "10%",
            investment: "৳1L",
            returns: "৳.2L",
            location: "Feni",
            members: 15,
            image: "/image/vasitable.webp",
            description: "Seasonal vegetable farming with focus on high-demand crops and direct market sales.",
            highlights: ["Seasonal crops", "Organic methods", "Direct sales", "Local demand"],
        },
        {
            id: 7,
            title: "Grocery Store Chain",
            category: "Retail",
            year: "2024",
            duration: "Ongoing",
            status: "Active",
            profit: "Good",
            profitPercent: "45%",
            investment: "৳6.2L",
            returns: "৳9.0L",
            location: "Feni",
            members: 11,
            image: "/image/super_market.jpg",
            description: "Small grocery store chain serving local communities with essential goods and daily necessities.",
            highlights: ["Multiple locations", "Community focus", "Essential goods", "Steady income"],
        },
    ]

    const completedProjects = projects.filter((p) => p.status === "Completed")
    const ongoingProjects = projects.filter((p) => p.status === "Ongoing" || p.status === "Active")

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Success Stories</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our profitable business ventures across farming, retail, and livestock sectors
                    </p>
                </div>

                {/* Completed Projects */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-gray-900">Completed Projects</h3>
                        <Badge className="bg-green-100 text-green-800 px-4 py-2">
                            {completedProjects.length} Successful Projects
                        </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {completedProjects.slice(0, 6).map((project) => (
                            <Card
                                key={project.id}
                                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative h-48">
                                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                                            {project.category}
                                        </Badge>
                                        <Badge className="bg-green-500 text-white">{project.status}</Badge>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                                            +{project.profitPercent}
                                        </div>
                                    </div>
                                </div>

                                <CardHeader className="pb-3">
                                    <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {project.year} • {project.duration}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            {project.location}
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                                            <div className="text-sm text-gray-600">Investment</div>
                                            <div className="font-bold text-gray-900">{project.investment}</div>
                                        </div>
                                        <div className="text-center p-3 bg-green-50 rounded-lg">
                                            <div className="text-sm text-gray-600">Returns</div>
                                            <div className="font-bold text-green-700">{project.returns}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Users className="w-4 h-4 mr-1" />
                                            {project.members} Members
                                        </div>
                                        <div className="flex items-center text-sm font-bold text-green-700">
                                            <TrendingUp className="w-4 h-4 mr-1" />
                                            {project.profit}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Ongoing Projects */}
                {ongoingProjects.length > 0 && (
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900">Ongoing Projects</h3>
                            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">{ongoingProjects.length} Active Projects</Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {ongoingProjects.map((project) => (
                                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <div className="flex">
                                        <div className="relative w-1/3 h-32">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="w-2/3 p-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <Badge variant="outline" className="text-blue-700 border-blue-200">
                                                    {project.category}
                                                </Badge>
                                                <Badge className="bg-blue-500 text-white">{project.status}</Badge>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center text-gray-600">
                                                    <DollarSign className="w-4 h-4 mr-1" />
                                                    {project.investment} invested
                                                </div>
                                                <div className="flex items-center text-blue-700 font-medium">
                                                    <TrendingUp className="w-4 h-4 mr-1" />
                                                    {project.profitPercent} growth
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center">
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-lg"
                    >
                        <Link href="/projects">View All Projects & Details</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
