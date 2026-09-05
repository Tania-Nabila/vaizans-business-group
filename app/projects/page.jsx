"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"
import { Badge } from "../../components/ui/Badge"
import { Button } from "../../components/ui/Button"
import Link from "next/link"
import Image from "next/image"
import { Icon } from "../../components/ui/Icon"
import { SectionHeader } from "../../components/ui/SectionHeader"
import { ProjectCard } from "../../components/ui/ProjectCard"
import { PROJECTS_DATA } from "../../lib/constants"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/Select"

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedStatus, setSelectedStatus] = useState("all")



    const categoryCounts = PROJECTS_DATA.reduce((acc, project) => {
        const key = project?.category.toLowerCase();
        acc[key] = (acc[key] || 0) + 1;
        return acc
    }, {})

    const projectCategories = [
        { id: "all", name: "All Projects", count: PROJECTS_DATA.length },
        ...Object.entries(categoryCounts).map(([key, count]) => ({
            id: key,
            name: key.charAt(0).toUpperCase() + key.slice(1),
            count,
        }))
    ]

    const filteredProjects = PROJECTS_DATA.filter((project) => {
        const categoryMatch = selectedCategory === "all" || project.category.toLowerCase() === selectedCategory
        const statusMatch = selectedStatus === "all" || project.status.toLowerCase() === selectedStatus
        return categoryMatch && statusMatch
    });

    const statusCounts = PROJECTS_DATA.reduce((acc, project) => {
        const key = project?.status.toLowerCase();
        acc[key] = (acc[key] || 0) + 1;
        return acc
    }, {})

    const projectStatuses = [
        { id: "all", name: "All Status", count: PROJECTS_DATA.length },
        ...Object.entries(statusCounts).map(([key, count]) => ({
            id: key,
            name: key.charAt(0).toUpperCase() + key.slice(1),
            count,
        }))
    ]



    // console.log(filteredProjects);

    const completedProjects = PROJECTS_DATA.filter((p) => p.status === "Completed");
    const ongoingProjects = PROJECTS_DATA.filter((p) => p.status === "Ongoing")
    const plannedProjects = PROJECTS_DATA.filter((p) => p.status === "Planning")

    const projectStats = [
        {
            label: "Total Projects",
            value: PROJECTS_DATA.length.toString(),
            description: "All time projects",
            icon: "Target",
            color: "bg-blue-100 text-blue-900",
        },
        {
            label: "Completed",
            value: completedProjects.length.toString(),
            description: "Successfully finished",
            icon: "CheckCircle",
            color: "bg-green-100 text-green-900",
        },
        {
            label: "Active Projects",
            value: ongoingProjects.length.toString(),
            description: "Currently running",
            icon: "TrendingUp",
            color: "bg-yellow-100 text-yellow-900",
        },
        {
            label: "Success Rate",
            value: "70%",
            description: "Profitable completion",
            icon: "Award",
            color: "bg-purple-100 text-purple-900",
        },
    ]

    const getStatusColor = (status) => {
        const colors = {
            Completed: "bg-green-100 text-green-800",
            Ongoing: "bg-blue-100 text-blue-800",
            Planning: "bg-yellow-100 text-yellow-800",
            Active: "bg-blue-100 text-blue-800",
        }
        return colors[status] || "bg-gray-100 text-gray-800"
    }

    const getCategoryColor = (category) => {
        const colors = {
            Aquaculture: "bg-blue-100 text-blue-800",
            Poultry: "bg-green-100 text-green-800",
            Retail: "bg-purple-100 text-purple-800",
            Livestock: "bg-orange-100 text-orange-800",
            Agriculture: "bg-emerald-100 text-emerald-800",
            Property: "bg-indigo-100 text-indigo-800",
        }
        return colors[category] || "bg-gray-100 text-gray-800"
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Badge className="bg-yellow-500 text-blue-900 font-semibold px-4 py-2 mb-6">
                            7+ Projects • 70% Success Rate
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Project Portfolio</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Explore our comprehensive collection of successful business ventures across farming, retail, livestock,
                            and property sectors. Every project represents our commitment to profitable growth and collaborative
                            success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Stats */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectStats.map((stat, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${stat.color}`}>
                                        <Icon name={stat.icon} className="w-6 h-6" />
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}+</div>
                                    <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                                    <div className="text-sm text-gray-600">{stat.description}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Success Stories */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Featured Success Stories"
                        subtitle="Highlighting our most profitable and impactful business ventures"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {completedProjects.slice(0, 3).map((project) => (
                            <Card
                                key={project.id}
                                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover rounded-t-lg"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <Badge className="bg-yellow-500 text-blue-900 font-semibold">Featured</Badge>
                                        <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                            +{project.profitPercent}
                                        </div>
                                    </div>
                                </div>

                                <CardHeader className="pb-3">
                                    <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <Icon name="Calendar" className="w-4 h-4 mr-1" />
                                            {project.year} • {project.duration}
                                        </div>
                                        <div className="flex items-center">
                                            <Icon name="MapPin" className="w-4 h-4 mr-1" />
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

                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Icon name="Users" className="w-4 h-4 mr-1" />
                                            {project.members} Members
                                        </div>
                                        <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Projects with Filtering */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Complete Project Portfolio"
                        subtitle="Browse through all our projects with advanced filtering options"
                    />

                    {/* Filter Tabs */}
                    <div className="mb-8">
                        <div className="flex flex-col lg:flex-row gap-4 mb-6">
                            {/* Category Filter */}
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-gray-700 mb-2">Filter by Category:</h3>
                                <div className="sm:w-56">
                                    <Select
                                        value={selectedCategory}
                                        onValueChange={(value) => setSelectedCategory(value)}
                                    >
                                        <SelectTrigger className="w-full ">
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent className="">
                                            {projectCategories.map((category) => (
                                                <SelectItem
                                                    key={category.id}
                                                    value={category.id}
                                                    className="capitalize  cursor-pointer"
                                                >
                                                    {category.name} ({category.count})
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Status Filter */}
                            <div className="flex-2">
                                <h3 className="text-sm font-semibold text-gray-700 mb-2">Filter by Status:</h3>
                                <div className="sm:w-56">
                                    <Select
                                        value={selectedStatus}
                                        onValueChange={(value) => setSelectedStatus(value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Status" />
                                        </SelectTrigger>
                                        <SelectContent className="">
                                            {projectStatuses.map((status) => (
                                                <SelectItem
                                                    key={status.id}
                                                    value={status.id}
                                                    className="capitalize  cursor-pointer"
                                                >
                                                    {status.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-500 text-lg mb-4">No projects found matching your filters</div>
                            <Button
                                onClick={() => {
                                    setSelectedCategory("all")
                                    setSelectedStatus("all")
                                }}
                                variant="outline"
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Project Categories Overview */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Project Categories"
                        subtitle="Diversified portfolio across multiple high-potential sectors"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                category: "Aquaculture",
                                icon: "Target",
                                projects: 2,
                                totalInvestment: "৳6.7L",
                                totalReturns: "৳12.7L",
                                avgROI: "89%",
                                description: "Fish and shrimp farming with modern techniques",
                                color: "bg-blue-100 text-blue-800",
                            },
                            {
                                category: "Poultry",
                                icon: "Award",
                                projects: 2,
                                totalInvestment: "৳5.4L",
                                totalReturns: "৳10.2L",
                                avgROI: "90%",
                                description: "Hen and duck farming operations",
                                color: "bg-green-100 text-green-800",
                            },
                            {
                                category: "Retail",
                                icon: "ShoppingBag",
                                projects: 3,
                                totalInvestment: "৳4.8L",
                                totalReturns: "৳10.4L",
                                avgROI: "102%",
                                description: "Seasonal trading and retail ventures",
                                color: "bg-purple-100 text-purple-800",
                            },
                            {
                                category: "Livestock",
                                icon: "Users",
                                projects: 2,
                                totalInvestment: "৳8.0L",
                                totalReturns: "৳14.9L",
                                avgROI: "86%",
                                description: "Cattle and goat farming projects",
                                color: "bg-orange-100 text-orange-800",
                            },
                            {
                                category: "Agriculture",
                                icon: "TrendingUp",
                                projects: 2,
                                totalInvestment: "৳10.8L",
                                totalReturns: "৳19.8L",
                                avgROI: "83%",
                                description: "Crop farming and processing ventures",
                                color: "bg-emerald-100 text-emerald-800",
                            },
                            {
                                category: "Property",
                                icon: "Building",
                                projects: 1,
                                totalInvestment: "৳15.0L",
                                totalReturns: "৳33.0L",
                                avgROI: "120%",
                                description: "Commercial property investments",
                                color: "bg-indigo-100 text-indigo-800",
                            },
                        ].map((category, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.color}`}>
                                            <Icon name={category.icon} className="w-6 h-6" />
                                        </div>
                                        <Badge className={category.color}>{category.projects} Projects</Badge>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.category}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Total Investment</span>
                                            <span className="font-semibold text-gray-900">{category.totalInvestment}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Total Returns</span>
                                            <span className="font-semibold text-green-700">{category.totalReturns}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Average ROI</span>
                                            <span className="font-bold text-blue-700">{category.avgROI}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Timeline */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Project Timeline" subtitle="Chronological view of our business venture evolution" />

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
                        <div className="space-y-12">
                            {PROJECTS_DATA
                                .sort((a, b) => new Date(b.year) - new Date(a.year))
                                .slice(0, 6)
                                .map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                                    >
                                        <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                                            <Card className="hover:shadow-xl transition-all duration-300">
                                                <CardContent className="p-6">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <Badge className="bg-blue-900 text-white">{project.year}</Badge>
                                                        <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="text-center p-2 bg-gray-50 rounded">
                                                            <div className="text-sm text-gray-600">Investment</div>
                                                            <div className="font-bold text-gray-900">{project.investment}</div>
                                                        </div>
                                                        <div className="text-center p-2 bg-green-50 rounded">
                                                            <div className="text-sm text-gray-600">Returns</div>
                                                            <div className="font-bold text-green-700">{project.returns}</div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <div className="relative flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full border-4 border-white shadow-lg z-10">
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        </div>
                                        <div className="w-1/2"></div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Performance Metrics"
                        subtitle="Quantified results demonstrating our project success and profitability"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-8">
                                <div className="text-4xl font-bold text-green-700 mb-2">৳50.7L</div>
                                <div className="text-lg font-semibold text-gray-900 mb-2">Total Investment</div>
                                <div className="text-sm text-gray-600">Across all projects</div>
                                <div className="mt-4">
                                    <Badge className="bg-green-100 text-green-800">Active Portfolio</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-8">
                                <div className="text-4xl font-bold text-blue-700 mb-2">৳100.9L</div>
                                <div className="text-lg font-semibold text-gray-900 mb-2">Total Returns</div>
                                <div className="text-sm text-gray-600">Generated revenue</div>
                                <div className="mt-4">
                                    <Badge className="bg-blue-100 text-blue-800">Cumulative</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-8">
                                <div className="text-4xl font-bold text-purple-700 mb-2">99%</div>
                                <div className="text-lg font-semibold text-gray-900 mb-2">Average ROI</div>
                                <div className="text-sm text-gray-600">Return on investment</div>
                                <div className="mt-4">
                                    <Badge className="bg-purple-100 text-purple-800">Exceptional</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold mb-4">Why Our Projects Succeed</h3>
                            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                                Our systematic approach to project selection, execution, and management ensures consistent profitability
                                and sustainable growth.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon name="Search" className="w-8 h-8 text-blue-900" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Market Research</h4>
                                <p className="text-blue-100 text-sm">Thorough analysis before every project</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon name="Users" className="w-8 h-8 text-blue-900" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Team Expertise</h4>
                                <p className="text-blue-100 text-sm">Experienced members in each sector</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon name="Shield" className="w-8 h-8 text-blue-900" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Risk Management</h4>
                                <p className="text-blue-100 text-sm">Comprehensive risk assessment and mitigation</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon name="TrendingUp" className="w-8 h-8 text-blue-900" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Continuous Monitoring</h4>
                                <p className="text-blue-100 text-sm">Regular tracking and optimization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join Our Next Project?</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                        Be part of our upcoming ventures and experience the same success our members have enjoyed across all
                        projects. Join Vaizans Group and start your profitable investment journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg"
                        >
                            <Link href="/join">Join Our Next Project</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold px-8 py-4 text-lg bg-transparent"
                        >
                            <Link href="/contact">Learn More About Projects</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
