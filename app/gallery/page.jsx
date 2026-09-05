"use client"

import { useState } from "react"
import { Card, CardContent } from "../../components/ui/Card"
import { Badge } from "../../components/ui/Badge"
import { Button } from "../../components/ui/Button"
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/Dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs"
import Image from "next/image"
import { Icon } from "../../components/ui/Icon"
import { SectionHeader } from "../../components/ui/SectionHeader"

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedImage, setSelectedImage] = useState(null)

    const galleryCategories = [
        { id: "all", name: "All Photos", count: 48 },
        { id: "projects", name: "Projects", count: 18 },
        { id: "team", name: "Team Events", count: 12 },
        { id: "facilities", name: "Facilities", count: 8 },
        { id: "meetings", name: "Meetings", count: 6 },
        { id: "achievements", name: "Achievements", count: 4 },
    ]

    const galleryImages = [
        // Project Images
        {
            id: 1,
            title: "Pond Fishing Operation - Sylhet",
            category: "projects",
            description: "Large-scale fish farming operation with modern pond management techniques",
            image: "/image/Pond-Fishing-Venture.jpg",
            date: "March 2023",
            location: "Sylhet",
            project: "Pond Fishing Venture",
            tags: ["Aquaculture", "Farming", "Success"],
        },
        {
            id: 2,
            title: "Hen Farming Facility - Chittagong",
            category: "projects",
            description: "Modern poultry farming facility with automated systems",
            image: "/image/poultry.jpg",
            date: "June 2023",
            location: "Chittagong",
            project: "Hen Farming Operation",
            tags: ["Poultry", "Modern", "Automated"],
        },
        {
            id: 3,
            title: "Eid Panjabi Collection Display",
            category: "projects",
            description: "Premium Eid Panjabi collection showcased in our retail outlet",
            image: "/image/panjabi.avif",
            date: "April 2024",
            location: "Dhaka",
            project: "Eid Panjabi Sales",
            tags: ["Retail", "Fashion", "Seasonal"],
        },
        {
            id: 4,
            title: "Cattle Farm - Rangpur",
            category: "projects",
            description: "Premium cattle rearing for Eid-ul-Azha market",
            image: "/image/Pond-Fishing-Venture.jpg",
            date: "February 2024",
            location: "Rangpur",
            project: "Cow Rearing Project",
            tags: ["Livestock", "Premium", "Seasonal"],
        },
        {
            id: 5,
            title: "Harvest Season - Fish Farm",
            category: "projects",
            description: "Successful harvest from our fish farming venture",
            image: "/image/HarvestSeason.jpg",
            date: "October 2023",
            location: "Sylhet",
            project: "Pond Fishing Venture",
            tags: ["Harvest", "Success", "Profit"],
        },
        {
            id: 6,
            title: "Poultry Processing Unit",
            category: "projects",
            description: "Modern processing facility for our poultry products",
            image: "/image/warehouse.webp",
            date: "August 2023",
            location: "Chittagong",
            project: "Hen Farming Operation",
            tags: ["Processing", "Modern", "Quality"],
        },

        // Team Events
        {
            id: 7,
            title: "Annual Group Meeting 2024",
            category: "team",
            description: "All members gathered for annual planning and strategy session",
            image: "/image/team1.jpg",
            date: "January 2024",
            location: "Dhaka",
            project: "Team Meeting",
            tags: ["Meeting", "Planning", "Strategy"],
        },
        {
            id: 8,
            title: "Group A Leadership Summit",
            category: "team",
            description: "Senior partners discussing future investment strategies",
            image: "/image/team2.jfif",
            date: "March 2024",
            location: "Dhaka",
            project: "Leadership Meeting",
            tags: ["Leadership", "Strategy", "Investment"],
        },
        {
            id: 9,
            title: "Group B Welcome Ceremony",
            category: "team",
            description: "Welcoming new members to Group B expansion",
            image: "/image/team1.jpg",
            date: "June 2023",
            location: "Dhaka",
            project: "Team Expansion",
            tags: ["Welcome", "New Members", "Growth"],
        },
        {
            id: 10,
            title: "Project Success Celebration",
            category: "team",
            description: "Celebrating another successful project completion",
            image: "/image/team2.jfif",
            date: "November 2023",
            location: "Chittagong",
            project: "Success Celebration",
            tags: ["Celebration", "Success", "Achievement"],
        },
        {
            id: 11,
            title: "Team Building Workshop",
            category: "team",
            description: "Professional development and team building activities",
            image: "/image/team2.jfif",
            date: "September 2023",
            location: "Sylhet",
            project: "Team Building",
            tags: ["Workshop", "Development", "Team"],
        },
        {
            id: 12,
            title: "Quarterly Review Meeting",
            category: "team",
            description: "Q3 2023 performance review and planning session",
            image: "/image/team2.jfif",
            date: "October 2023",
            location: "Dhaka",
            project: "Review Meeting",
            tags: ["Review", "Performance", "Planning"],
        },

        // Facilities
        {
            id: 13,
            title: "Main Office - Dhaka",
            category: "facilities",
            description: "Our modern headquarters in Dhaka with meeting facilities",
            image: "/image/team1.jpg",
            date: "January 2023",
            location: "Dhaka",
            project: "Office Setup",
            tags: ["Office", "Headquarters", "Modern"],
        },
        {
            id: 14,
            title: "Conference Room Setup",
            category: "facilities",
            description: "State-of-the-art conference room for strategic meetings",
            image: "/image/team2.jfif",
            date: "February 2023",
            location: "Dhaka",
            project: "Office Setup",
            tags: ["Conference", "Meeting", "Professional"],
        },
        {
            id: 15,
            title: "Storage Warehouse - Comilla",
            category: "facilities",
            description: "Modern warehouse facility for inventory management",
            image: "/image/team1.jpg",
            date: "May 2023",
            location: "Comilla",
            project: "Warehouse Setup",
            tags: ["Warehouse", "Storage", "Logistics"],
        },
        {
            id: 16,
            title: "Processing Center - Chittagong",
            category: "facilities",
            description: "Food processing and packaging facility",
            image: "/image/team2.jfif",
            date: "July 2023",
            location: "Chittagong",
            project: "Processing Setup",
            tags: ["Processing", "Food", "Quality"],
        },

        // Meetings
        {
            id: 17,
            title: "Investment Planning Session",
            category: "meetings",
            description: "Strategic planning for upcoming property investments",
            image: "/image/team3.jfif",
            date: "December 2023",
            location: "Dhaka",
            project: "Investment Planning",
            tags: ["Investment", "Planning", "Property"],
        },
        {
            id: 18,
            title: "Financial Review Meeting",
            category: "meetings",
            description: "Quarterly financial performance and profit distribution",
            image: "/image/team4.jfif",
            date: "September 2023",
            location: "Dhaka",
            project: "Financial Review",
            tags: ["Financial", "Review", "Profits"],
        },
        {
            id: 19,
            title: "New Project Proposal Discussion",
            category: "meetings",
            description: "Evaluating new business opportunities and ventures",
            image: "/image/team1.jpg",
            date: "August 2023",
            location: "Dhaka",
            project: "Project Planning",
            tags: ["Proposal", "New Project", "Opportunity"],
        },
        {
            id: 20,
            title: "Risk Assessment Workshop",
            category: "meetings",
            description: "Comprehensive risk analysis for investment decisions",
            image: "/image/team1.jpg",
            date: "July 2023",
            location: "Dhaka",
            project: "Risk Management",
            tags: ["Risk", "Assessment", "Analysis"],
        },

        // Achievements
        {
            id: 21,
            title: "70% Success Rate Milestone",
            category: "achievements",
            description: "Celebrating our perfect track record across all projects",
            image: "/image/team2.jfif",
            date: "December 2023",
            location: "Dhaka",
            project: "Milestone Achievement",
            tags: ["Milestone", "Success", "Achievement"],
        },
        {
            id: 22,
            title: "৳33L+ Investment Portfolio",
            category: "achievements",
            description: "Reaching significant investment portfolio milestone",
            image: "/image/team2.jfif",
            date: "November 2023",
            location: "Dhaka",
            project: "Portfolio Growth",
            tags: ["Portfolio", "Growth", "Investment"],
        },
        {
            id: 23,
            title: "Group Expansion Success",
            category: "achievements",
            description: "Successfully expanding to 13+ active members",
            image: "/image/team1.jpg",
            date: "October 2023",
            location: "Dhaka",
            project: "Team Expansion",
            tags: ["Expansion", "Growth", "Members"],
        },
        {
            id: 24,
            title: "Best Business Group Award",
            category: "achievements",
            description: "Recognition for outstanding business performance",
            image: "/image/team2.jfif",
            date: "December 2023",
            location: "Dhaka",
            project: "Award Recognition",
            tags: ["Award", "Recognition", "Excellence"],
        },
    ]

    const filteredImages =
        selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

    const featuredImages = galleryImages.filter((img) =>
        ["Pond Fishing Operation - Sylhet", "Annual Group Meeting 2024", "70% Success Rate Milestone"].includes(img.title),
    )

    const stats = [
        { label: "Total Photos", value: "48+", icon: "Camera" },
        { label: "Project Documentation", value: "18", icon: "Target" },
        { label: "Team Events", value: "12", icon: "Users" },
        { label: "Success Stories", value: "7", icon: "Award" },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Badge className="bg-yellow-500 text-blue-900 font-semibold px-4 py-2 mb-6">
                            Visual Journey • 48+ Photos
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Explore our visual journey through successful projects, team achievements, and business milestones.
                            Witness the growth and success of Vaizans Group through our comprehensive photo collection.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Stats */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                                        <Icon name={stat.icon} className="w-6 h-6 text-blue-900" />
                                    </div>
                                    <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
                                    <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Gallery */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Featured Highlights"
                        subtitle="Key moments and achievements that define our success story"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {featuredImages.map((image, index) => (
                            <Dialog key={image.id}>
                                <DialogTrigger asChild>
                                    <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                        <div className="relative h-64 overflow-hidden rounded-t-lg">
                                            <Image
                                                src={image.image || "/placeholder.svg"}
                                                alt={image.title}
                                                fill
                                                className="object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <Badge className="mb-2 bg-yellow-500 text-blue-900">Featured</Badge>
                                                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                                                <p className="text-white/80 text-sm">
                                                    {image.date} • {image.location}
                                                </p>
                                            </div>
                                        </div>
                                        <CardContent className="p-4">
                                            <p className="text-gray-600 text-sm line-clamp-2">{image.description}</p>
                                            <div className="flex flex-wrap gap-1 mt-3">
                                                {image.tags.slice(0, 2).map((tag, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl">
                                    <div className="relative h-96">
                                        <Image
                                            src={image.image || "/placeholder.svg"}
                                            alt={image.title}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{image.title}</h3>
                                        <p className="text-gray-600 mb-4">{image.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <span className="flex items-center">
                                                <Icon name="Calendar" className="w-4 h-4 mr-1" />
                                                {image.date}
                                            </span>
                                            <span className="flex items-center">
                                                <Icon name="MapPin" className="w-4 h-4 mr-1" />
                                                {image.location}
                                            </span>
                                            <span className="flex items-center">
                                                <Icon name="Target" className="w-4 h-4 mr-1" />
                                                {image.project}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {image.tags.map((tag, idx) => (
                                                <Badge key={idx} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Gallery */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Complete Photo Gallery"
                        subtitle="Browse through our comprehensive collection organized by categories"
                    />

                    {/* Category Tabs */}
                    <Tabs defaultValue="all" className="mb-8">
                        <TabsList className="grid w-full grid-cols-6">
                            {galleryCategories.map((category) => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className="text-sm"
                                >
                                    {category.name}
                                    <Badge variant="secondary" className="ml-2 text-xs">
                                        {category.count}
                                    </Badge>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <TabsContent value={selectedCategory} className="mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredImages.map((image) => (
                                    <Dialog key={image.id}>
                                        <DialogTrigger asChild>
                                            <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                                <div className="relative h-48 overflow-hidden rounded-t-lg">
                                                    <Image
                                                        src={image.image || "/placeholder.svg"}
                                                        alt={image.title}
                                                        fill
                                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                                    <div className="absolute bottom-2 left-2 right-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                        <h4 className="text-white font-semibold text-sm line-clamp-1">{image.title}</h4>
                                                        <p className="text-white/80 text-xs">{image.date}</p>
                                                    </div>
                                                </div>
                                                <CardContent className="p-3">
                                                    <h4 className="font-semibold text-gray-900 text-sm line-clamp-1 mb-1">{image.title}</h4>
                                                    <p className="text-gray-600 text-xs line-clamp-2 mb-2">{image.description}</p>
                                                    <div className="flex items-center justify-between">
                                                        <Badge variant="outline" className="text-xs">
                                                            {image.category}
                                                        </Badge>
                                                        <span className="text-xs text-gray-500">{image.location}</span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl">
                                            <div className="relative h-96">
                                                <Image
                                                    src={image.image || "/placeholder.svg"}
                                                    alt={image.title}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{image.title}</h3>
                                                <p className="text-gray-600 mb-4">{image.description}</p>
                                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                                    <span className="flex items-center">
                                                        <Icon name="Calendar" className="w-4 h-4 mr-1" />
                                                        {image.date}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <Icon name="MapPin" className="w-4 h-4 mr-1" />
                                                        {image.location}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <Icon name="Target" className="w-4 h-4 mr-1" />
                                                        {image.project}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {image.tags.map((tag, idx) => (
                                                        <Badge key={idx} variant="secondary" className="text-xs">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Project Timeline Gallery */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Project Timeline"
                        subtitle="Visual journey of our successful projects from start to completion"
                    />

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
                        <div className="space-y-12">
                            {galleryImages
                                .filter((img) => img.category === "projects")
                                .slice(0, 4)
                                .map((image, index) => (
                                    <div
                                        key={image.id}
                                        className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                                    >
                                        <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                                        <div className="flex">
                                                            <div className="relative w-1/3 h-32">
                                                                <Image
                                                                    src={image.image || "/placeholder.svg"}
                                                                    alt={image.title}
                                                                    fill
                                                                    className="object-cover rounded-l-lg"
                                                                />
                                                            </div>
                                                            <div className="w-2/3 p-4">
                                                                <Badge className="mb-2 bg-blue-900 text-white">{image.date}</Badge>
                                                                <h4 className="text-lg font-bold text-gray-900 mb-2">{image.title}</h4>
                                                                <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
                                                                <div className="flex items-center mt-2 text-xs text-gray-500">
                                                                    <Icon name="MapPin" className="w-3 h-3 mr-1" />
                                                                    {image.location}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-4xl">
                                                    <div className="relative h-96">
                                                        <Image
                                                            src={image.image || "/placeholder.svg"}
                                                            alt={image.title}
                                                            fill
                                                            className="object-cover rounded-lg"
                                                        />
                                                    </div>
                                                    <div className="mt-4">
                                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{image.title}</h3>
                                                        <p className="text-gray-600 mb-4">{image.description}</p>
                                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                                            <span className="flex items-center">
                                                                <Icon name="Calendar" className="w-4 h-4 mr-1" />
                                                                {image.date}
                                                            </span>
                                                            <span className="flex items-center">
                                                                <Icon name="MapPin" className="w-4 h-4 mr-1" />
                                                                {image.location}
                                                            </span>
                                                            <span className="flex items-center">
                                                                <Icon name="Target" className="w-4 h-4 mr-1" />
                                                                {image.project}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {image.tags.map((tag, idx) => (
                                                                <Badge key={idx} variant="secondary" className="text-xs">
                                                                    {tag}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
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

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Want to Be Part of Our Success Story?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Join Vaizans Group and create your own success moments. Be featured in our next gallery showcasing
                        profitable ventures and collaborative achievements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900 font-bold px-8 py-4 text-lg shadow-xl"
                        >
                            <a href="/join">Join Our Success Story</a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent font-semibold px-8 py-4 text-lg"
                        >
                            <a href="/contact">Contact Our Team</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
