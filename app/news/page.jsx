"use client"

import { useState, useMemo } from "react"
import { NEWS_DATA } from "../../lib/constants"
import { SectionHeader } from "../../components/ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"
import { Badge } from "../../components/ui/Badge"
import { Button } from "../../components/ui/Button"
import { Input } from "../../components/ui/Input"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Icon } from "../../components/ui/Icon"
import Link from "next/link"

export default function NewsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")

    const allCategories = useMemo(() => {
        const categories = new Set()
        NEWS_DATA.forEach((article) => categories.add(article.category))
        return Array.from(categories).sort()
    }, [])

    const filteredNews = useMemo(() => {
        let filtered = NEWS_DATA

        if (selectedCategory !== "all") {
            filtered = filtered.filter((article) => article.category === selectedCategory)
        }

        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase()
            filtered = filtered.filter(
                (article) =>
                    article.title.toLowerCase().includes(lowerCaseSearchTerm) ||
                    article.excerpt.toLowerCase().includes(lowerCaseSearchTerm) ||
                    article.tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm)),
            )
        }

        // Sort by date, newest first
        return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }, [searchTerm, selectedCategory])

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 sm:py-32 lg:py-40">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Vaizans News & Updates
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
                        Stay informed about our latest achievements, strategic investments, and business developments across all our
                        ventures.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                            <Icon name="TrendingUp" className="w-4 h-4 mr-2" />
                            Investment Updates
                        </div>
                        <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                            <Icon name="Users" className="w-4 h-4 mr-2" />
                            Team Announcements
                        </div>
                        <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                            <Icon name="Award" className="w-4 h-4 mr-2" />
                            Company Achievements
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            {NEWS_DATA.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Featured Story</Badge>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Highlight</h2>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2">
                                    <img
                                        src={NEWS_DATA[0].imageUrl || "/placeholder.svg?height=400&width=600&query=business news"}
                                        alt={NEWS_DATA[0].title}
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center mb-4">
                                        <Badge variant="secondary" className="mr-3">
                                            {NEWS_DATA[0].category}
                                        </Badge>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Icon name="Calendar" className="w-4 h-4 mr-1" />
                                            {NEWS_DATA[0].date}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{NEWS_DATA[0].title}</h3>
                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{NEWS_DATA[0].excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">
                                            {NEWS_DATA[0].readTime} • By {NEWS_DATA[0].author}
                                        </span>
                                        <Link
                                            // href={`/news/${NEWS_DATA[0].id}`}
                                            href={`/news`}
                                            className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
                                        >
                                            Read Full Story
                                            <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* News Grid with Filters */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="All Articles"
                        subtitle="Browse our comprehensive collection of news, insights, and announcements from across the Vaizans Group."
                    />

                    {/* Filters */}
                    <div className="mb-12 flex flex-col lg:flex-row gap-6 justify-between items-center bg-gray-50 p-6 rounded-xl">
                        {/* Search Input */}
                        <div className="w-full lg:w-2/3">
                            <div className="relative">
                                <Icon
                                    name="Search"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                                />
                                <Input
                                    type="text"
                                    placeholder="Search articles by title, content, or tags..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 w-full h-12 text-base"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        {/* <div className="w-full lg:w-1/3">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="w-full justify-between h-12 bg-white border-gray-300">
                                        <span className="flex items-center">
                                            <Icon name="Filter" className="w-4 h-4 mr-2" />
                                            {selectedCategory === "all" ? "All Categories" : selectedCategory}
                                        </span>
                                        <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
                                    <DropdownMenuItem onClick={() => setSelectedCategory("all")}>All Categories</DropdownMenuItem>
                                    {allCategories.map((category) => (
                                        <DropdownMenuItem key={category} onClick={() => setSelectedCategory(category)}>
                                            {category}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div> */}
                    </div>

                    {/* Results Count */}
                    <div className="mb-8">
                        <p className="text-gray-600">
                            Showing {filteredNews.length} {filteredNews.length === 1 ? "article" : "articles"}
                            {selectedCategory !== "all" && ` in "${selectedCategory}"`}
                            {searchTerm && ` matching "${searchTerm}"`}
                        </p>
                    </div>

                    {filteredNews.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredNews.slice(1).map((article) => (
                                <Card
                                    key={article.id}
                                    className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                                >
                                    <div className="relative w-full h-48 overflow-hidden">
                                        <img
                                            src={article.imageUrl || "/placeholder.svg?height=200&width=400&query=business news"}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge variant="secondary" className="bg-white/90 text-gray-800">
                                                {article.category}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center text-xs text-gray-500">
                                                <Icon name="Calendar" className="w-3 h-3 mr-1" />
                                                {article.date}
                                            </div>
                                            <div className="flex items-center text-xs text-gray-500">
                                                <Icon name="Clock" className="w-3 h-3 mr-1" />
                                                {article.readTime}
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-900 transition-colors">
                                            {article.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex flex-col justify-between">
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                            <span className="text-xs text-gray-500 font-medium">By {article.author}</span>
                                            <Link
                                                // href={`/news/${article.id}`}
                                                href={`/news`}
                                                className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold text-sm transition-colors"
                                            >
                                                Read More
                                                <Icon
                                                    name="ArrowRight"
                                                    className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1"
                                                />
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <Icon name="Search" className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                            <p className="text-gray-500 mb-6">
                                Try adjusting your search terms or category filter to find what youre looking for.
                            </p>
                            <Button
                                onClick={() => {
                                    setSearchTerm("")
                                    setSelectedCategory("all")
                                }}
                                variant="outline"
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <Icon name="Mail" className="w-16 h-16 mx-auto mb-4 text-blue-200" />
                        <h3 className="text-3xl font-bold mb-4">Stay Updated with Vaizans Group</h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                            Get the latest news about our investments, project updates, partnership opportunities, and exclusive
                            insights delivered directly to your inbox.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-yellow-400 text-center"
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-6 py-4 text-lg transition-colors"
                            >
                                Subscribe to Newsletter
                            </Button>
                        </form>
                        <p className="text-blue-200 text-sm mt-4">Join 500+ subscribers. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
