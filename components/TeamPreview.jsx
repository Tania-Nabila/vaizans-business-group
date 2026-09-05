import { Card, CardContent } from "./ui/Card"
import { Badge } from "./ui/Badge"
import { Button } from "./ui/Button"
import Link from "next/link"
import Image from "next/image"
import { Users, Crown } from "lucide-react"

export function TeamPreview() {
    const teamHighlights = [
        {
            group: "Group A",
            members: 10,
            status: "Active",
            description: "Experienced members leading major investment decisions",
            icon: Crown,
            color: "bg-yellow-100 text-yellow-800",
        },
        {
            group: "Group B",
            members: 5,
            status: "Growing",
            description: "New members contributing fresh perspectives and capital",
            icon: Users,
            color: "bg-blue-100 text-blue-800",
        },
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team Structure</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Collaborative partnership model with experienced and growing member groups
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {teamHighlights.map((group, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mr-4 ${group.color}`}>
                                        <group.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{group.group}</h3>
                                        <Badge variant="outline" className="mt-1">
                                            {group.status}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="text-4xl font-bold text-blue-900 mb-2">{group.members} Members</div>

                                <p className="text-gray-600 mb-6">{group.description}</p>

                                <div className="flex -space-x-2">
                                    {[...Array(Math.min(group.members, 5))].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center"
                                        >
                                            <Image
                                                src="/image/user.avif"
                                                alt={`Member ${i + 1}`}
                                                width={40}
                                                height={40}
                                                className="rounded-full"
                                            />
                                        </div>
                                    ))}
                                    {group.members > 5 && (
                                        <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-sm font-medium text-blue-900">
                                            +{group.members - 5}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800">
                        <Link href="/team">Meet Our Team</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
