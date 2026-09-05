import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"
import { Badge } from "../../components/ui/Badge"
import { Icon } from "../../components/ui/Icon"
import { getCategoryColor, getStatusColor } from "../../lib/utils"
import Image from "next/image"

export function ProjectCard({ project }) {


    console.log(project);
    return (
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary" className={getCategoryColor(project.category)}>
                        {project.category}
                    </Badge>
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
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

                <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                        <Icon name="Users" className="w-4 h-4 mr-1" />
                        {project.members} Members
                    </div>
                    <div className="flex items-center text-sm font-bold text-green-700">
                        <Icon name="TrendingUp" className="w-4 h-4 mr-1" />
                        {project.profit}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
