import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { Badge } from "./ui/Badge"
import { Button } from "../components/ui/Button"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export function NewsPreview() {
    const news = [
        {
            title: "Q4 2024 Investment Results Announced",
            excerpt: "Vaizans Group reports exceptional returns across all investment sectors with plans for expansion.",
            date: "December 15, 2024",
            category: "Results",
            featured: true,
        },
        {
            title: "New Property Acquisition in Prime Location",
            excerpt: "Strategic land purchase completed for upcoming residential development project.",
            date: "December 10, 2024",
            category: "Investment",
        },
        {
            title: "Group B Expansion Initiative Launched",
            excerpt: "Welcoming new members to join our growing business partnership network.",
            date: "December 5, 2024",
            category: "Expansion",
        },
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay informed about our latest achievements, investments, and business developments
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {news.map((article, index) => (
                        <Card
                            key={index}
                            className={`hover:shadow-lg transition-shadow ${article.featured ? "lg:col-span-2" : ""}`}
                        >
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <Badge variant="outline">{article.category}</Badge>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {article.date}
                                    </div>
                                </div>
                                <CardTitle className={article.featured ? "text-xl" : "text-lg"}>{article.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                                {/* <Link
                                    href={`/news/${index + 1}`}
                                    className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                                >
                                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                                </Link> */}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                    >
                        <Link href="/news">View All News</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
